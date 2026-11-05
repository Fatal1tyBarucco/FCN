#!/usr/bin/env node
/* gerar-esqueleto-enriquecimento.mjs — gera/atualiza os 8 arquivos de enriquecimento
 * (enriquecimento_m1.js ... enriquecimento_m8.js) como overlay do currículo existente.
 *
 * Uso:
 *   node scripts/gerar-esqueleto-enriquecimento.mjs           # escreve os arquivos
 *   node scripts/gerar-esqueleto-enriquecimento.mjs --dry-run # apenas relata, não escreve
 *
 * - Lê os 8 curriculum*.js via vm (sem eval) e extrai todos os ids de subtópico.
 * - Para cada subtópico SEM entrada no enriquecimento correspondente, cria esqueleto
 *   pré-preenchido a partir do conteúdo existente.
 * - IDEMPOTENTE: não sobrescreve campos já preenchidos (strings não vazias, arrays não vazios).
 *   Conteúdo real já autoral é preservado; apenas lacunas são completadas.
 * - Imprime relatório: total alvo, criados, já existentes.
 *
 * Resolve os overlays existentes com vm.runInContext (retorno direto do módulo),
 * não via ctxE[varName], pois `const` de topo não é propriedade do contexto léxico.
 */
'use strict';

import fs from 'fs';
import path from 'path';
import url from 'url';
import vm from 'vm';

// -------------------------------------------------- raiz derivada de import.meta.url / cwd
const ROOT = path.resolve(process.cwd());
const APP = path.join(ROOT, 'apostila-ia');
const DATA = path.join(APP, 'assets', 'data');
const SCRIPTS = path.join(ROOT, 'scripts');

// -------------------------------------------------- helpers
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function isEmpty(v) {
  if (v === null || v === undefined) return true;
  if (typeof v === 'string') return v.trim() === '';
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v).length === 0;
  return false;
}

function deepMerge(target, source) {
  // Completa apenas lacunas (campos vazios/ausentes) do target com o source.
  // Nunca sobrescreve conteúdo já preenchido (strings não vazias, arrays não vazios, objetos com chaves).
  for (const k of Object.keys(source)) {
    const sv = source[k];
    const tv = target[k];
    if (typeof sv === 'object' && sv !== null && !Array.isArray(sv)) {
      if (typeof tv !== 'object' || tv === null || Array.isArray(tv)) target[k] = {};
      deepMerge(target[k], sv);
    } else if (isEmpty(tv)) {
      target[k] = sv;
    }
  }
}

// -------------------------------------------------- carrega currículos via vm
const ctx = vm.createContext({
  console: { log() {}, warn() {}, error() {} },
  module: { exports: {} },
  exports: {},
});

const curriculumFiles = [
  { file: 'curriculum.js', varName: 'curriculum', modulo: 1 },
  { file: 'curriculum_m2.js', varName: 'curriculumM2', modulo: 2 },
  { file: 'curriculum_m3.js', varName: 'curriculumM3', modulo: 3 },
  { file: 'curriculum_m4.js', varName: 'curriculumM4', modulo: 4 },
  { file: 'curriculum_m5.js', varName: 'curriculumM5', modulo: 5 },
  { file: 'curriculum_m6.js', varName: 'curriculumM6', modulo: 6 },
  { file: 'curriculum_m7.js', varName: 'curriculumM7', modulo: 7 },
  { file: 'curriculum_m8.js', varName: 'curriculumM8', modulo: 8 },
];

let allSubtopicos = [];

for (const cf of curriculumFiles) {
  try {
    const code = fs.readFileSync(path.join(DATA, cf.file), 'utf8');
    const wrapped = `(function(){ ${code}; return ${cf.varName}; })()`;
    const curriculum = vm.runInContext(wrapped, ctx, { filename: cf.file });
    if (!curriculum || !curriculum[`modulo-${cf.modulo}`]) {
      console.warn(`[aviso] ${cf.file}: chave modulo-${cf.modulo} não encontrada`);
      continue;
    }
    const mod = curriculum[`modulo-${cf.modulo}`];
    if (!mod.unidades) continue;
    for (const unidade of mod.unidades) {
      for (const topico of (unidade.topicos || [])) {
        for (const sub of (topico.subtopicos || [])) {
          allSubtopicos.push({
            id: sub.id,
            modulo: cf.modulo,
            titulo: sub.titulo || '',
            objetivoAprendizagem: sub.objetivoAprendizagem || '',
            conteudo: sub.conteudo || '',
            exemplos: Array.isArray(sub.exemplos) ? sub.exemplos : [],
            exercicios: Array.isArray(sub.exercicios) ? sub.exercicios : [],
            criterioDominio: sub.criterioDominio || '',
          });
        }
      }
    }
  } catch (e) {
    console.error(`[erro] Falha ao carregar ${cf.file}:`, e.message);
    process.exit(1);
  }
}

console.log(`Total de subtópicos encontrados: ${allSubtopicos.length}`);

// -------------------------------------------------- carrega enriquecimentos existentes
// Resolve via vm.runInContext (retorno direto do módulo), não ctxE[varName],
// porque `const enriquecimentoM<N>` no topo não é propriedade do contexto léxico.
const enriquecimentos = {};
for (let m = 1; m <= 8; m++) {
  const fname = `enriquecimento_m${m}.js`;
  const fpath = path.join(DATA, fname);
  if (fs.existsSync(fpath)) {
    try {
      const code = fs.readFileSync(fpath, 'utf8');
      const wrapped = `(function(){ ${code}; return enriquecimentoM${m}; })()`;
      enriquecimentos[m] = vm.runInContext(wrapped, ctx, { filename: fname });
      console.log(`  M${m}: ${Object.keys(enriquecimentos[m]).length} entradas existentes`);
    } catch (e) {
      console.warn(`[aviso] Falha ao ler ${fname}: ${e.message}`);
      enriquecimentos[m] = {};
    }
  } else {
    enriquecimentos[m] = {};
    console.log(`  M${m}: arquivo não existe (será criado)`);
  }
}

// -------------------------------------------------- fábrica de esqueleto por subtópico
function criarEsqueleto(sub) {
  const baseObjetivos = sub.objetivoAprendizagem
    ? [sub.objetivoAprendizagem.replace(/^Aluno\s+/i, '').replace(/\.$/, '')]
    : ['Definir os conceitos centrais do tópico', 'Aplicar o conhecimento em cenários práticos'];

  const baseConteudo = sub.conteudo || 'Conteúdo não disponível no currículo base.';
  const niveis = {
    iniciante: baseConteudo.slice(0, Math.min(500, baseConteudo.length)) + (baseConteudo.length > 500 ? '…' : ''),
    intermediario: '',
    avancado: '',
    especialista: '',
  };

  const exemplosDetalhados = [];
  const tiposOrdem = ['introducao', 'aplicacao', 'erro'];
  for (const tipo of tiposOrdem) {
    const ex = sub.exemplos.find(e => e.tipo === tipo) || sub.exemplos[0] || { enunciado: '', resposta: '', correcao: '' };
    exemplosDetalhados.push({
      tipo,
      problema: ex.enunciado || `Problema de ${tipo} para ${sub.titulo}`,
      dados: '',
      conceitos: [],
      estrategia: '',
      execucao: [],
      resultado: ex.resposta || ex.correcao || '',
      justificativa: '',
      errosFrequentes: [],
      variacao: '',
    });
  }

  const exErro = sub.exemplos.find(e => e.tipo === 'erro');
  const pegadinhas = [{
    afirmacaoEquivocada: exErro?.enunciado || `Afirmação equivocada comum sobre ${sub.titulo}`,
    porqueErrada: '',
    versaoCorreta: exErro?.correcao || exErro?.resposta || '',
  }];

  const comparacoes = [{
    tema: `Comparação relacionada a ${sub.titulo}`,
    a: { rotulo: 'Conceito A', texto: '' },
    b: { rotulo: 'Conceito B', texto: '' },
    diferencaGabarito: '',
  }];

  const resumoEstruturado = {
    conceitos: [], regras: [], comparacoes: [], fluxos: [], excecoes: [], palavrasChave: [], checklist: [],
  };

  const orientacaoEstrategica = {
    porqueImporta: '',
    preRequisitos: [],
    objetivosObservaveis: baseObjetivos,
    competencias: [],
    dificuldade: 'intermediario',
    relacoes: [],
    relevanciaConcurso: {
      classificacao: 'media',
      justificativa: '',
      ressalva: 'Esta classificação é uma estimativa pedagógica qualitativa baseada na frequência histórica do tema em editais e na centralidade conceitual do assunto; não representa frequência estatística comprovada em provas recentes.',
    },
  };

  return {
    orientacaoEstrategica,
    niveis,
    comparacoes,
    pegadinhas,
    resumoEstruturado,
    exemplosDetalhados,
  };
}

// -------------------------------------------------- processa cada módulo
let totalCriados = 0;
let totalJaExistiam = 0;

for (let m = 1; m <= 8; m++) {
  const subsModulo = allSubtopicos.filter(s => s.modulo === m);
  const enr = enriquecimentos[m];

  for (const sub of subsModulo) {
    if (enr[sub.id]) {
      // Já existe: completa apenas campos vazios (idempotente, preserva conteúdo real)
      const esqueleto = criarEsqueleto(sub);
      deepMerge(enr[sub.id], esqueleto);
      totalJaExistiam++;
    } else {
      // Novo: cria completo
      enr[sub.id] = criarEsqueleto(sub);
      totalCriados++;
    }
  }

  // Verifica órfãos (ids no enriquecimento que não existem mais no currículo)
  const idsCurriculum = new Set(subsModulo.map(s => s.id));
  const orfaos = Object.keys(enr).filter(id => !idsCurriculum.has(id));
  if (orfaos.length) {
    console.warn(`  M${m}: ${orfaos.length} entrada(s) órfã(s) no enriquecimento (ids não estão no currículo atual):`, orfaos.slice(0, 5));
  }
}

// -------------------------------------------------- escrita dos arquivos (ou dry-run)
const dryRun = process.argv.includes('--dry-run');

if (!dryRun) {
  for (let m = 1; m <= 8; m++) {
    const varName = `enriquecimentoM${m}`;
    const content = `const ${varName} = ${JSON.stringify(enriquecimentos[m], null, 2)};\n`;
    fs.writeFileSync(path.join(DATA, `enriquecimento_m${m}.js`), content, 'utf8');
  }
  console.log('\nArquivos escritos em assets/data/enriquecimento_m1.js ... enriquecimento_m8.js');
} else {
  console.log('\n[DRY-RUN] Nenhum arquivo escrito.');
}

console.log(`\n=== RELATÓRIO ===`);
console.log(`Total de subtópicos no currículo: ${allSubtopicos.length}`);
console.log(`Entradas criadas (novas): ${totalCriados}`);
console.log(`Entradas já existentes (completadas): ${totalJaExistiam}`);
console.log(`Total no enriquecimento: ${totalCriados + totalJaExistiam}`);

// Validação básica de cobertura
let coberturaOk = true;
for (let m = 1; m <= 8; m++) {
  const subsModulo = allSubtopicos.filter(s => s.modulo === m);
  const enr = enriquecimentos[m];
  const faltando = subsModulo.filter(s => !enr[s.id]);
  if (faltando.length) {
    console.error(`[FALHA] M${m}: ${faltando.length} subtópicos sem entrada no enriquecimento!`);
    coberturaOk = false;
  }
}

if (!dryRun && coberturaOk) {
  console.log('\n✓ Todos os 307 subtópicos têm entrada no enriquecimento.');
} else if (!coberturaOk) {
  process.exitCode = 1;
}
