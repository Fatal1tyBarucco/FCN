#!/usr/bin/env node
/* gerar-lotes-fonte.mjs — gera os arquivos-fonte dos lotes de enriquecimento.
 *
 * Para cada módulo/unidade do currículo, fatia os subtópicos em partes de
 * TAMANHO_LOTE e grava um JSON com o material de origem (título, objetivo,
 * conteúdo base já estruturado, exemplos, exercícios, critério de domínio)
 * que o agente de autoria usa para redigir o registro estruturado da Seção 5.
 *
 * Uso:
 *   node scripts/gerar-lotes-fonte.mjs [--tamanho 6] [--saida scripts/lotes/fonte]
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(scriptDir, '..');
const DATA = path.join(repoRoot, 'apostila-ia', 'assets', 'data');

const args = process.argv.slice(2);
let tamanho = 6;
let saidaDir = path.join(repoRoot, 'scripts', 'lotes', 'fonte');
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--tamanho') tamanho = Number(args[++i]);
  else if (args[i] === '--saida') saidaDir = path.resolve(repoRoot, args[++i]);
}

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

fs.mkdirSync(saidaDir, { recursive: true });

// Carrega os overlays atuais (para preservar o que já está preenchido).
const overlays = {};
for (let m = 1; m <= 8; m++) {
  const f = path.join(DATA, `enriquecimento_m${m}.js`);
  if (!fs.existsSync(f)) { overlays[m] = {}; continue; }
  const code = fs.readFileSync(f, 'utf8');
  const name = `enriquecimentoM${m}`;
  const c = vm.createContext({ console });
  overlays[m] = vm.runInContext(`(function(){ ${code}; return ${name}; })()`, c, { filename: `enriquecimento_m${m}.js` });
}

const ctx = vm.createContext({ console });
const plano = [];

for (let m = 1; m <= 8; m++) {
  const cf = curriculumFiles[m];
  const code = fs.readFileSync(path.join(DATA, cf.file), 'utf8');
  const wrapped = `(function(){ ${code}; return ${cf.varName}; })()`;
  const cur = vm.runInContext(wrapped, ctx, { filename: cf.file });
  const modObj = cur[`modulo-${m}`];
  if (!modObj) throw new Error(`Módulo ${m} ausente em ${cf.file}`);

  modObj.unidades.forEach((unidade, ui) => {
    const subs = [];
    (unidade.topicos || []).forEach((topico) => {
      (topico.subtopicos || []).forEach((sub) => {
        subs.push({
          id: sub.id,
          titulo: sub.titulo,
          topicoTitulo: topico.titulo,
          topicoId: topico.id,
          unidadeTitulo: unidade.titulo,
          moduloTitulo: modObj.titulo,
          objetivoAprendizagem: sub.objetivoAprendizagem || '',
          conteudo: sub.conteudo || '',
          exemplos: sub.exemplos || [],
          exercicios: sub.exercicios || [],
          criterioDominio: sub.criterioDominio || '',
          videos: sub.videos || [],
          registroAtual: (overlays[m] && overlays[m][sub.id]) ? overlays[m][sub.id] : null
        });
      });
    });

    // Divisão equilibrada: evita lotes de 1 item (desperdício de agente).
    const partes = Math.max(1, Math.ceil(subs.length / tamanho));
    const base = Math.floor(subs.length / partes);
    const resto = subs.length % partes;
    const tamanhos = [];
    for (let i = 0; i < partes; i++) tamanhos.push(base + (i < resto ? 1 : 0));
    let cursor = 0;
    for (let p = 1; p <= partes; p++) {
      const fatia = subs.slice(cursor, cursor + tamanhos[p - 1]);
      cursor += tamanhos[p - 1];
      const nomeConst = `enriParcialM${m}U${ui + 1}P${p}`;
      const nomeArquivo = `${nomeConst}.js`;
      const fonte = {
        meta: {
          modulo: m,
          moduloTitulo: modObj.titulo,
          unidade: ui + 1,
          unidadeTitulo: unidade.titulo,
          parte: p,
          totalPartesUnidade: partes,
          totalSubtopicosLote: fatia.length,
          constNome: nomeConst,
          arquivoSaida: path.join('scripts', 'lotes', nomeArquivo),
          idsCompletos: fatia.map((s) => s.id)
        },
        subtopicos: fatia
      };
      const destino = path.join(saidaDir, `${nomeConst}.fonte.json`);
      fs.writeFileSync(destino, JSON.stringify(fonte, null, 2) + '\n', 'utf8');
      plano.push({ modulo: m, unidade: ui + 1, parte: p, n: fatia.length, const: nomeConst, fonte: path.relative(repoRoot, destino) });
    }
  });
}

fs.writeFileSync(path.join(saidaDir, 'PLANO_LOTES.json'), JSON.stringify(plano, null, 2) + '\n', 'utf8');
console.log(`Lotes gerados: ${plano.length} (tamanho ${tamanho}) — total de subtópicos: ${plano.reduce((a, b) => a + b.n, 0)}`);
console.log(plano.map((l) => `${l.const}(${l.n})`).join(' '));
