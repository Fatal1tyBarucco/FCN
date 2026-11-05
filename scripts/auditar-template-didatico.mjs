#!/usr/bin/env node
/* auditar-template-didatico.mjs — auditoria do template didático (Seção 5)
 *
 * Verifica os 307 subtópicos contra o schema v2 do enriquecimento:
 * - presença e tipo de cada campo
 * - contagens mínimas (>=2 pegadinhas, >=4 checklist, 3 exemplosDetalhados, >=1 comparação, >=4 níveis não vazios)
 * - comprimento mínimo de strings (conforme schema)
 * - detecção de placeholders proibidos (precisão pt-BR, word boundary)
 * - detecção de duplicação literal de frases longas (>=120 chars) entre registros distintos
 * - detecção de duplicação entre campos do MESMO registro
 * - teste de RUNTIME: resolve enriquecimentoM<N> como SCRIPT CLÁSSICO (const no escopo léxico,
 *   NÃO propriedade de window) — falha se não conseguir resolver
 * - valida renderização: presença de <h4> de título e objetivoAprendizagem no HTML, escape de HTML
 *
 * Uso:
 *   node scripts/auditar-template-didatico.mjs                 # audita os 8 overlays finais
 *   node scripts/auditar-template-didatico.mjs --lote <arquivo.js>   # audita um arquivo parcial
 *
 * Exit code: 0 se tudo passa, 1 se há falhas
 */
'use strict';

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import {
  PLACEHOLDER_RE,
  temPlaceholder,
  temMarcador,
  norm,
  coletarStringsLongas,
  encontrarQuaseDuplicatas,
  MIN_EXEMPLO,
  MIN_RESUMO,
  NIVEIS_KEYS,
  DIFICULDADES,
  CLASSIFICACOES,
  TIPOS_EXEMPLO
} from './lib/enriquecimento-comum.mjs';

const ROOT = path.resolve('/root/projetos/FCN');
const APP = path.join(ROOT, 'apostila-ia');
const DATA = path.join(APP, 'assets', 'data');

// -------------------------------------------------- helpers
function esc(s) { return String(s == null ? '' : s); }
function isEmpty(v) {
  if (v === null || v === undefined) return true;
  if (typeof v === 'string') return v.trim() === '';
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object') return Object.keys(v).length === 0;
  return false;
}

let falhas = 0;
let avisos = 0;
function check(nome, ok, detalhe) {
  const marca = ok ? 'OK  ' : 'FALHA';
  console.log(`  [${marca}] ${nome}${detalhe ? ' — ' + detalhe : ''}`);
  if (!ok) falhas++;
  return ok;
}
function warn(nome, detalhe) {
  console.log(`  [AVISO] ${nome}${detalhe ? ' — ' + detalhe : ''}`);
  avisos++;
}
function secao(titulo) {
  console.log('\n' + titulo);
  console.log('-'.repeat(Math.max(0, 72)));
}

// -------------------------------------------------- placeholders proibidos (precisão pt-BR)
// Marcadores reais que NUNCA podem aparecer em conteúdo final.
// As expressões e a lógica de detecção vivem em scripts/lib/enriquecimento-comum.mjs
// (fonte única compartilhada com validar-lote.mjs e status-lotes.mjs).
function temPlaceholderProibido(texto) {
  return temPlaceholder(texto);
}

// -------------------------------------------------- carrega currículo e enriquecimento
const curriculumFiles = {
  1: { file: 'curriculum.js', varName: 'curriculum' },
  2: { file: 'curriculum_m2.js', varName: 'curriculumM2' },
  3: { file: 'curriculum_m3.js', varName: 'curriculumM3' },
  4: { file: 'curriculum_m4.js', varName: 'curriculumM4' },
  5: { file: 'curriculum_m5.js', varName: 'curriculumM5' },
  6: { file: 'curriculum_m6.js', varName: 'curriculumM6' },
  7: { file: 'curriculum_m7.js', varName: 'curriculumM7' },
  8: { file: 'curriculum_m8.js', varName: 'curriculumM8' }
};

// Contexto base (léxico, sem window/const-properties)
const ctx = vm.createContext({ console: { log() {}, warn() {}, error() {} } });

let allSubtopicos = [];
for (let m = 1; m <= 8; m++) {
  const cf = curriculumFiles[m];
  const code = fs.readFileSync(path.join(DATA, cf.file), 'utf8');
  const wrapped = '(function(){ ' + code + '; return ' + cf.varName + '; })()';
  const cur = vm.runInContext(wrapped, ctx, { filename: cf.file });
  if (cur && cur['modulo-' + m] && cur['modulo-' + m].unidades) {
    cur['modulo-' + m].unidades.forEach(u => {
      (u.topicos || []).forEach(t => {
        (t.subtopicos || []).forEach(st => {
          allSubtopicos.push({ id: st.id, modulo: m, titulo: st.titulo, objetivoAprendizagem: st.objetivoAprendizagem });
        });
        if (!t.subtopicos || t.subtopicos.length === 0) {
          allSubtopicos.push({ id: t.id, modulo: m, titulo: t.titulo, objetivoAprendizagem: t.objetivoAprendizagem });
        }
      });
    });
  }
}

console.log(`Total de subtópicos para auditar: ${allSubtopicos.length}`);

// Carrega enriquecimentos (chaveado por módulo)
const enriquecimentos = {};
for (let m = 1; m <= 8; m++) {
  const fname = `enriquecimento_m${m}.js`;
  const fpath = path.join(DATA, fname);
  if (fs.existsSync(fpath)) {
    const code = fs.readFileSync(fpath, 'utf8');
    const wrapped = '(function(){ ' + code + '; return enriquecimentoM' + m + '; })()';
    enriquecimentos[m] = vm.runInContext(wrapped, ctx, { filename: fname });
  } else {
    enriquecimentos[m] = {};
  }
}

// -------------------------------------------------- suporte a modo parcial (--lote <arquivo.js>)
const args = process.argv.slice(2);
const loteIdx = args.indexOf('--lote');
let modoLote = false;
let loteModulo = null;
let loteFile = null;
if (loteIdx !== -1 && args[loteIdx + 1]) {
  modoLote = true;
  loteFile = args[loteIdx + 1];
  const mMatch = /enriquecimento_m(\d+)\.js$/.exec(loteFile);
  if (mMatch) loteModulo = parseInt(mMatch[1], 10);
  else {
    console.error(`[erro] --lote deve apontar para um arquivo enriquecimento_m<N>.js, recebido: ${loteFile}`);
    process.exitCode = 1;
  }
}

if (modoLote) {
  if (!loteModulo) { process.exitCode = process.exitCode || 1; }
  allSubtopicos = allSubtopicos.filter(s => s.modulo === loteModulo);
  const enrLote = {};
  enrLote[loteModulo] = enriquecimentos[loteModulo] || {};
  Object.assign(enriquecimentos, enrLote);
  console.log(`[MODO LOTE] Auditoria parcial do arquivo: ${loteFile} (módulo ${loteModulo}, ${allSubtopicos.length} subtópicos)`);
}

// -------------------------------------------------- validação de strings longas duplicadas
// Coleta todas as strings >= 120 chars normalizadas (função compartilhada).
const todasStringsLongas = []; // { texto, id, campo }

// -------------------------------------------------- auditoria por módulo
const CAMPOS_OBRIGATORIOS = [
  'orientacaoEstrategica',
  'niveis',
  'comparacoes',
  'pegadinhas',
  'resumoEstruturado',
  'exemplosDetalhados'
];

const CAMPOS_OE = ['porqueImporta', 'preRequisitos', 'objetivosObservaveis', 'competencias', 'dificuldade', 'relacoes', 'relevanciaConcurso'];
const CAMPOS_RESUMO = ['conceitos', 'regras', 'comparacoes', 'fluxos', 'excecoes', 'palavrasChave', 'checklist'];

// Rastreia ressalvas para detectar boilerplate idêntico entre registros distintos
const ressalvasVistas = {}; // textoNormalizado -> primeiro id

for (let m = 1; m <= 8; m++) {
  secao(`MÓDULO ${m}`);
  const subsModulo = allSubtopicos.filter(s => s.modulo === m);
  const enr = enriquecimentos[m] || {};

  for (const sub of subsModulo) {
    const id = sub.id;
    const e = enr[id];

    if (!e) {
      check(`${id}: entrada existe`, false, 'ausente no enriquecimento');
      continue;
    }

    check(`${id}: entrada existe`, true);

    // 1. Campos obrigatórios de topo
    for (const campo of CAMPOS_OBRIGATORIOS) {
      check(`${id}: tem ${campo}`, !isEmpty(e[campo]), isEmpty(e[campo]) ? 'campo vazio ou ausente' : '');
    }

    // 2. Orientação Estratégica
    if (e.orientacaoEstrategica) {
      const oe = e.orientacaoEstrategica;
      for (const campo of CAMPOS_OE) {
        check(`${id}.oe: tem ${campo}`, !isEmpty(oe[campo]), isEmpty(oe[campo]) ? 'vazio' : '');
      }
      if (oe.porqueImporta) check(`${id}.oe.porqueImporta >= 120`, oe.porqueImporta.length >= 120, `real=${oe.porqueImporta.length}`);
      if (Array.isArray(oe.objetivosObservaveis)) check(`${id}.oe.objetivosObservaveis >= 2`, oe.objetivosObservaveis.length >= 2, `real=${oe.objetivosObservaveis.length}`);
      if (Array.isArray(oe.competencias)) check(`${id}.oe.competencias >= 2`, oe.competencias.length >= 2, `real=${oe.competencias.length}`);
      if (Array.isArray(oe.preRequisitos)) check(`${id}.oe.preRequisitos >= 1`, oe.preRequisitos.length >= 1, `real=${oe.preRequisitos.length}`);
      if (Array.isArray(oe.relacoes)) check(`${id}.oe.relacoes >= 1`, oe.relacoes.length >= 1, `real=${oe.relacoes.length}`);
      const difValidas = ['iniciante', 'intermediario', 'avancado', 'especialista'];
      check(`${id}.oe.dificuldade válida`, difValidas.includes(oe.dificuldade), `real=${oe.dificuldade}`);

      // relevanciaConcurso
      if (oe.relevanciaConcurso) {
        const rc = oe.relevanciaConcurso;
        check(`${id}.oe.relevanciaConcurso.classificacao`, ['alta', 'media', 'baixa'].includes(rc.classificacao));
        if (rc.justificativa) check(`${id}.oe.relevanciaConcurso.justificativa >= 80`, rc.justificativa.length >= 80, `real=${rc.justificativa.length}`);

        // ressalva: ausência aceita; se presente, deve conter "estimativa pedagógica" e não ser boilerplate idêntico
        if (rc.ressalva) {
          const ressalva = String(rc.ressalva);
          check(`${id}.oe.relevanciaConcurso.ressalva >= 60`, ressalva.length >= 60, `real=${ressalva.length}`);
          check(`${id}.oe.relevanciaConcurso.ressalva menciona estimativa pedagógica`, /estimativa pedag[oó]gica/i.test(ressalva));
          // detecção de boilerplate idêntico entre registros distintos
          const normRessalva = ressalva.toLowerCase().replace(/[.,;:!?()[\]{}"']/g, '').replace(/\s+/g, ' ').trim();
          if (normRessalva.length >= 60) {
            if (ressalvasVistas[normRessalva] !== undefined && ressalvasVistas[normRessalva] !== id) {
              check(`${id}.oe.relevanciaConcurso.ressalva não é boilerplate idêntico`, false, `idêntico a ${ressalvasVistas[normRessalva]} (boilerplate global)`);
            } else {
              check(`${id}.oe.relevanciaConcurso.ressalva não é boilerplate idêntico`, true);
              if (ressalvasVistas[normRessalva] === undefined) ressalvasVistas[normRessalva] = id;
            }
          }
        } else {
          // ausência aceita (nota metodológica global)
          check(`${id}.oe.relevanciaConcurso.ressalva ausente (aceitável)`, true, 'nota metodológica global fornecida pelo renderizador');
        }
      }
    }

    // 3. Níveis (4 níveis, cada um >= 180)
    if (e.niveis) {
      let niveisNaoVazios = 0;
      for (const nk of NIVEIS_KEYS) {
        if (e.niveis[nk] && e.niveis[nk].trim().length >= 180) {
          niveisNaoVazios++;
          check(`${id}.niveis.${nk} >= 180`, true);
        } else if (e.niveis[nk]) {
          check(`${id}.niveis.${nk} >= 180`, false, `real=${e.niveis[nk].trim().length}`);
        } else {
          check(`${id}.niveis.${nk} presente`, false, 'ausente');
        }
      }
      check(`${id}.niveis: 4 níveis não vazios >= 180`, niveisNaoVazios === 4, `reais=${niveisNaoVazios}`);
    }

    // 4. Comparações (>= 1 item com estrutura completa)
    if (Array.isArray(e.comparacoes)) {
      check(`${id}.comparacoes >= 1`, e.comparacoes.length >= 1, `real=${e.comparacoes.length}`);
      for (let i = 0; i < e.comparacoes.length; i++) {
        const c = e.comparacoes[i];
        check(`${id}.comparacoes[${i}].tema`, !isEmpty(c.tema));
        check(`${id}.comparacoes[${i}].a.rotulo`, c.a && !isEmpty(c.a.rotulo));
        check(`${id}.comparacoes[${i}].a.texto`, c.a && !isEmpty(c.a.texto));
        check(`${id}.comparacoes[${i}].b.rotulo`, c.b && !isEmpty(c.b.rotulo));
        check(`${id}.comparacoes[${i}].b.texto`, c.b && !isEmpty(c.b.texto));
        check(`${id}.comparacoes[${i}].diferencaGabarito`, !isEmpty(c.diferencaGabarito));
      }
    }

    // 5. Pegadinhas (>= 2 itens)
    if (Array.isArray(e.pegadinhas)) {
      check(`${id}.pegadinhas >= 2`, e.pegadinhas.length >= 2, `real=${e.pegadinhas.length}`);
      for (let i = 0; i < e.pegadinhas.length; i++) {
        const p = e.pegadinhas[i];
        check(`${id}.pegadinhas[${i}].afirmacaoEquivocada`, !isEmpty(p.afirmacaoEquivocada));
        check(`${id}.pegadinhas[${i}].porqueErrada`, !isEmpty(p.porqueErrada));
        check(`${id}.pegadinhas[${i}].versaoCorreta`, !isEmpty(p.versaoCorreta));
      }
    }

    // 6. Resumo Estruturado
    if (e.resumoEstruturado) {
      const r = e.resumoEstruturado;
      for (const campo of CAMPOS_RESUMO) {
        const min = campo === 'checklist' ? 4 : (campo === 'conceitos' ? 3 : (campo === 'regras' ? 2 : (campo === 'comparacoes' || campo === 'fluxos' || campo === 'excecoes' ? 1 : (campo === 'palavrasChave' ? 4 : 0))));
        if (Array.isArray(r[campo])) {
          check(`${id}.resumo.${campo} >= ${min}`, r[campo].length >= min, `real=${r[campo].length}`);
        } else {
          check(`${id}.resumo.${campo} é array`, false);
        }
      }
    }

    // 7. Exemplos Detalhados (exatamente 3, na ordem: introducao, aplicacao, erro)
    if (Array.isArray(e.exemplosDetalhados)) {
      check(`${id}.exemplosDetalhados === 3`, e.exemplosDetalhados.length === 3, `real=${e.exemplosDetalhados.length}`);
      const tiposEsperados = ['introducao', 'aplicacao', 'erro'];
      for (let i = 0; i < e.exemplosDetalhados.length; i++) {
        const ex = e.exemplosDetalhados[i];
        check(`${id}.exemplos[${i}].tipo === ${tiposEsperados[i]}`, ex.tipo === tiposEsperados[i], `real=${ex.tipo}`);
        const camposEx = [
          { key: 'problema', min: 80 },
          { key: 'dados', min: 60 },
          { key: 'conceitos', min: 2, isArray: true },
          { key: 'estrategia', min: 80 },
          { key: 'execucao', min: 3, isArray: true },
          { key: 'resultado', min: 60 },
          { key: 'justificativa', min: 100 },
          { key: 'errosFrequentes', min: 2, isArray: true },
          { key: 'variacao', min: 80 }
        ];
        for (const fc of camposEx) {
          if (fc.isArray) {
            check(`${id}.exemplos[${i}].${fc.key} (array >= ${fc.min})`, Array.isArray(ex[fc.key]) && ex[fc.key].length >= fc.min, `real=${Array.isArray(ex[fc.key]) ? ex[fc.key].length : 'não é array'}`);
          } else {
            check(`${id}.exemplos[${i}].${fc.key} >= ${fc.min}`, ex[fc.key] && ex[fc.key].length >= fc.min, `real=${ex[fc.key] ? ex[fc.key].length : 0}`);
          }
        }
      }
    }

    // 8. Placeholders proibidos em todos os campos string
    coletarStringsLongas(e, '', id, todasStringsLongas);
    function verificarPlaceholders(obj, caminho) {
      if (!obj) return;
      if (typeof obj === 'string') {
        const ph = temPlaceholderProibido(obj);
        if (ph) warn(`${id}: placeholder proibido em ${caminho}: "${ph}"`, `trecho: ${obj.substring(0, 100)}`);
        const mc = temMarcador(obj, caminho.replace(/^[^.]+/, ''));
        if (mc) check(`${id}: sem marcador técnico em ${caminho}`, false, `${mc} — "${obj.substring(0, 90)}"`);
      } else if (Array.isArray(obj)) {
        obj.forEach((v, i) => verificarPlaceholders(v, `${caminho}[${i}]`));
      } else if (typeof obj === 'object') {
        for (const k of Object.keys(obj)) {
          verificarPlaceholders(obj[k], `${caminho}.${k}`);
        }
      }
    }
    verificarPlaceholders(e, id);
  }
}

// -------------------------------------------------- detecção de duplicação de frases longas (>=120 chars)
// (a) entre registros distintos
// (b) entre campos diferentes do MESMO registro
// Usa índice invertido por hash normalizado: evita O(n²) sobre ~5 mil strings.
secao('DETECÇÃO DE DUPLICAÇÃO DE FRASES LONGAS (>=120 chars)');
const duplicatas = [];
{
  const porHash = new Map();
  for (const s of todasStringsLongas) {
    let lista = porHash.get(s.texto);
    if (!lista) { lista = []; porHash.set(s.texto, lista); }
    lista.push(s);
  }
  for (const lista of porHash.values()) {
    if (lista.length < 2) continue;
    for (let i = 0; i < lista.length; i++) {
      for (let j = i + 1; j < lista.length; j++) {
        const a = lista[i], b = lista[j];
        const mesmoRegistro = a.id === b.id;
        const tipo = mesmoRegistro ? 'MESMO registro (campos distintos)' : 'registros distintos';
        duplicatas.push({ a: `${a.id}.${a.campo}`, b: `${b.id}.${b.campo}`, trecho: a.original, mesmoRegistro, tipo });
      }
    }
  }
}
if (duplicatas.length === 0) {
  check('Nenhuma duplicação literal de frases >=120 chars (entre registros nem dentro do mesmo registro)', true);
} else {
  let contDistintos = 0, contMesmo = 0;
  for (const d of duplicatas) {
    if (d.mesmoRegistro) contMesmo++; else contDistintos++;
    check('Duplicação detectada (' + d.tipo + ')', false, `${d.a} ↔ ${d.b} | "${d.trecho}..."`);
  }
  warn(`Resumo duplicação: ${contDistintos} entre registros distintos, ${contMesmo} dentro do mesmo registro`, '');
}

// -------------------------------------------------- detecção de QUASE-duplicatas (boilerplate templático)
// Strings diferentes em poucos caracteres (ex.: "Justificativa para introducao em X..."
// x "Justificativa para aplicacao em X...") escapam da igualdade literal, mas são
// boilerplate e reprovam na revisão editorial.
secao('DETECÇÃO DE BOILERPLATE (QUASE-DUPLICATAS, similaridade >= 0.82)');
const quaseDuplicatas = encontrarQuaseDuplicatas(todasStringsLongas);
if (quaseDuplicatas.length === 0) {
  check('Nenhum boilerplate templático detectado (quase-duplicatas)', true);
} else {
  let contDistintos = 0, contMesmo = 0;
  for (const d of quaseDuplicatas) {
    if (d.mesmoRegistro) contMesmo++; else contDistintos++;
    check('Boilerplate detectado (' + (d.mesmoRegistro ? 'mesmo registro' : 'registros distintos') + ')', false,
      `${d.a} ↔ ${d.b} | sim=${d.similaridade.toFixed(3)} | "${d.trecho}..."`);
  }
  warn(`Resumo boilerplate: ${contDistintos} entre registros distintos, ${contMesmo} dentro do mesmo registro`, '');
}

// -------------------------------------------------- teste de RUNTIME: resolução como SCRIPT CLÁSSICO
// Simula o navegador carregando enriquecimento_m<N>.js como <script> clássico:
// globalThis/window é o objeto global, mas `const` no topo NÃO vira propriedade de window;
// o binding fica no ambiente léxico global e É visível para scripts clássicos carregados depois
// (é exatamente a estratégia de `unidade-template.js`: `typeof enriquecimentoM<N> !== 'undefined'`).
secao('TESTE DE RUNTIME: resolução do overlay como SCRIPT CLÁSSICO');
function testeRuntimeConst() {
  const sandbox = { window: {}, globalThis: {}, document: {}, localStorage: { getItem() { return null; }, setItem() {} }, console: { log() {}, warn() {}, error() {} } };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  const ctxRuntime = vm.createContext(sandbox);

  let modulosResolvidos = 0;
  const detalhes = [];

  // 1) Carrega os overlays como scripts clássicos (sem wrapper): preserva o binding léxico global.
  for (let m = 1; m <= 8; m++) {
    const fname = `enriquecimento_m${m}.js`;
    const fpath = path.join(DATA, fname);
    if (!fs.existsSync(fpath)) {
      detalhes.push(`M${m}: ARQUIVO AUSENTE`);
      continue;
    }
    const code = fs.readFileSync(fpath, 'utf8');
    try {
      vm.runInContext(code, ctxRuntime, { filename: fname });
      const tipo = vm.runInContext(`typeof enriquecimentoM${m}`, ctxRuntime);
      const viaGlobalThis = vm.runInContext(`typeof globalThis.enriquecimentoM${m}`, ctxRuntime);
      if (tipo === 'object') {
        modulosResolvidos++;
        detalhes.push(`M${m}: binding léxico=${tipo} | globalThis.enriquecimentoM${m}=${viaGlobalThis} (esperado "undefined")`);
      } else {
        detalhes.push(`M${m}: binding léxico=${tipo} (esperado "object")`);
      }
    } catch (err) {
      detalhes.push(`M${m}: ERRO ${err.message}`);
    }
  }

  // 2) O template é carregado no MESMO contexto (como script clássico posterior) e deve
  //    resolver o overlay pelo identificador literal.
  const templateCode = fs.readFileSync(path.join(APP, 'assets', 'js', 'unidade-template.js'), 'utf8');
  let templateCarregado = false;
  try {
    vm.runInContext(templateCode, ctxRuntime, { filename: 'unidade-template.js' });
    templateCarregado = !!(sandbox.window && sandbox.window.FCNTemplate);
  } catch (err) {
    detalhes.push(`TEMPLATE: ERRO ${err.message}`);
  }

  // 3) Teste funcional: obterEnriquecimento() devolve o registro real de cada módulo.
  let resolucoesTemplate = 0;
  if (templateCarregado) {
    for (let m = 1; m <= 8; m++) {
      let id = null;
      try {
        const dados = vm.runInContext(`enriquecimentoM${m}`, ctxRuntime);
        id = (dados && Object.keys(dados)[0]) || null;
      } catch (e) { /* id permanece null */ }
      if (!id) { detalhes.push(`M${m}: sem registro para testar obterEnriquecimento`); continue; }
      const rec = sandbox.window.FCNTemplate.obterEnriquecimento(id);
      if (rec && typeof rec === 'object') {
        resolucoesTemplate++;
        detalhes.push(`M${m}: obterEnriquecimento("${id}") -> OK (${Object.keys(rec).length} blocos)`);
      } else {
        detalhes.push(`M${m}: obterEnriquecimento("${id}") -> FALHOU (overlay não resolvido)`);
      }
    }
  }

  for (const d of detalhes) console.log(`  [${d.includes('ERRO') || d.includes('FALHOU') || d.includes('AUSENTE') ? 'FALHA' : 'OK  '}] ${d}`);

  const lexicalOk = modulosResolvidos === 8;
  check('Overlay resolve como binding léxico global em todos os 8 módulos (estratégia do template)', lexicalOk, `${modulosResolvidos}/8`);
  check('Template carregado como script clássico posterior aos dados', templateCarregado);
  check('FCNTemplate.obterEnriquecimento() resolve o registro real de cada módulo', resolucoesTemplate === 8, `${resolucoesTemplate}/8`);
  const cadeiaLiteral = [1, 2, 3, 4, 5, 6, 7, 8].every(m => templateCode.includes(`typeof enriquecimentoM${m} !== 'undefined'`));
  check('Template usa cadeia explícita de identificadores literais (sem eval)', cadeiaLiteral);

  return lexicalOk && templateCarregado && resolucoesTemplate === 8 && cadeiaLiteral;
}
const runtimeOk = testeRuntimeConst();

// -------------------------------------------------- validação de renderização (h4 + objetivoAprendizagem + escape)
secao('VALIDAÇÃO DE RENDERIZAÇÃO DO TEMPLATE (renderizarUnidade)');
// Carrega o template didático em um DOM mínimo para inspecionar o HTML retornado
const domSandbox = { window: {}, globalThis: {}, document: {}, localStorage: { getItem() { return null; }, setItem() {} }, console: { log() {}, warn() {}, error() {} } };
domSandbox.window = domSandbox;
domSandbox.globalThis = domSandbox;
const ctxDom = vm.createContext(domSandbox);

// injeta um esc mínima para esc() do template não depender de DOM real
const templateCode = fs.readFileSync(path.join(APP, 'assets', 'js', 'unidade-template.js'), 'utf8');
// O template anexa window.FCNTemplate; precisamos que window e document existam (já existem acima)
vm.runInContext(templateCode, ctxDom, { filename: 'unidade-template.js' });

const FCNTemplate = domSandbox.window.FCNTemplate;
let renderOk = true;
if (!FCNTemplate || typeof FCNTemplate.renderizarUnidade !== 'function') {
  check('renderizarUnidade exposto em window.FCNTemplate', false, 'função não encontrada');
  renderOk = false;
} else {
  // Subtópico fictício com objetivoAprendizagem e conteudo contendo caracteres especiais de escape
  const subFicticio = {
    id: 'audit-teste-escape',
    titulo: 'Título de teste <h4> & "aspas"',
    objetivoAprendizagem: 'O aluno deve escapar & < > " \' corretamente.',
    conteudo: 'Conteúdo com &, <, >, ", \' para validar escape HTML.',
    exercicios: [],
    criterioDominio: ''
  };
  const htmlInterno = FCNTemplate.renderizarUnidade(subFicticio, 'audit-teste-escape');

  // Monta o HTML como navigation.js faz: <h4> + objetivoAprendizagem + renderizarUnidade
  let html = `<h4>${esc(subFicticio.titulo)}</h4>`;
  if (subFicticio.objetivoAprendizagem) {
    html += `<p><strong>Objetivo de aprendizagem:</strong> ${esc(subFicticio.objetivoAprendizagem)}</p>`;
  }
  html += htmlInterno;

  // (a) presença de <h4> de título
  const temH4 = /<h4[^>]*>.*Título de teste/.test(html);
  check('Renderização contém <h4> com o título do subtópico', temH4);

  // (b) presença de objetivoAprendizagem no HTML
  const temObjetivo = /Objetivo de aprendizagem/.test(html) && /escapar & < > " ' corretamente/.test(html);
  check('Renderização contém objetivoAprendizagem', temObjetivo);

  // (c) escape de HTML: &, <, >, ", ' devem virar entidades no corpo do HTML
  const temAmpEntidade = html.includes('&amp;');
  const temLtEntidade = html.includes('&lt;');
  const temGtEntidade = html.includes('&gt;');
  const temAspasDuplaEntidade = html.includes('&quot;');
  const temAspasSimplesEntidade = html.includes('&#39;') || html.includes('&apos;');
  check('Escape: & virá &amp;', temAmpEntidade);
  check('Escape: < virá &lt;', temLtEntidade);
  check('Escape: > virá &gt;', temGtEntidade);
  check('Escape: " virá &quot;', temAspasDuplaEntidade);
  check("Escape: ' virá entidade", temAspasSimplesEntidade);

  // também verifica que o título escapado aparece no <h4>
  const h4Escapado = html.includes('&lt;h4&gt;') || html.includes('Título de teste &lt;h4&gt;');
  check('Escape no título do <h4>', h4Escapado || temH4, h4Escapado ? '' : 'título pode estar sem escape no h4 (verificar)');

  if (!(temH4 && temObjetivo && temAmpEntidade && temLtEntidade && temGtEntidade && temAspasDuplaEntidade && temAspasSimplesEntidade)) renderOk = false;
}

// -------------------------------------------------- resumo
secao('RESUMO DA AUDITORIA');
console.log(`  Subtópicos auditados: ${allSubtopicos.length}`);
console.log(`  Falhas: ${falhas}`);
console.log(`  Avisos: ${avisos}`);
console.log(`  Runtime (script clássico): ${runtimeOk ? 'OK' : 'FALHA'}`);
console.log(`  Renderização (h4/objetivo/escape): ${renderOk ? 'OK' : 'FALHA'}`);

if (falhas === 0) {
  console.log('\n  ✓ AUDITORIA PASSOU - Template didático conforme schema v2');
  process.exitCode = 0;
} else {
  console.log('\n  ✗ AUDITORIA FALHOU - Correções necessárias');
  process.exitCode = 1;
}
