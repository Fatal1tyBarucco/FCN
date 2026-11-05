#!/usr/bin/env node
/* listar-quase-duplicatas.mjs — imprime os pares quase-duplicados de forma compacta,
 * com o texto completo de cada lado, para facilitar a correção manual.
 *
 * Uso:
 *   node scripts/listar-quase-duplicatas.mjs                      # todos os lotes
 *   node scripts/listar-quase-duplicatas.mjs scripts/lotes/x.js   # arquivos específicos
 *   node scripts/listar-quase-duplicatas.mjs --json               # saída JSON
 *
 * Observação: usa a MESMA coleta e o MESMO limiar da auditoria
 * (`scripts/auditar-template-didatico.mjs` -> `encontrarQuaseDuplicatas`),
 * incluindo a normalização do texto (minúsculas, sem pontuação) e o agrupamento
 * por MÓDULO. Sem esse alinhamento, a varredura global perde pares: o detector
 * descarta trigramas presentes em mais de MAX_CANDIDATOS_POR_TRIGRAMA strings,
 * o que só acontece quando o corpus inteiro é varrido de uma vez.
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import {
  encontrarQuaseDuplicatas,
  coletarStringsLongas,
  LIMIAR_QUASE_DUPLICATA
} from './lib/enriquecimento-comum.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const LOTES = path.join(repoRoot, 'scripts', 'lotes');

const args = process.argv.slice(2);
const json = args.includes('--json');
const filtros = args.filter((a) => !a.startsWith('--'));

let arquivos = [];
if (filtros.length === 0) {
  arquivos = fs
    .readdirSync(LOTES)
    .filter((f) => f.endsWith('.js') && f.startsWith('enriParcial'))
    .map((f) => path.join(LOTES, f));
} else {
  for (const a of filtros) {
    const p = path.resolve(process.cwd(), a);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      arquivos.push(
        ...fs
          .readdirSync(p)
          .filter((f) => f.endsWith('.js') && f.startsWith('enriParcial'))
          .map((f) => path.join(p, f))
      );
    } else {
      arquivos.push(p);
    }
  }
}

// Carrega cada arquivo e coleta as strings normalizadas (>= 120 chars).
const porArquivo = new Map(); // basename -> [{id, campo, texto, original}]
for (const arq of arquivos) {
  if (!fs.existsSync(arq)) continue;
  const code = fs.readFileSync(arq, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) continue;
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${m[1]}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.error(`[ERRO] ${path.basename(arq)}: ${e.message}`);
    continue;
  }
  const lista = [];
  for (const [id, rec] of Object.entries(obj)) {
    coletarStringsLongas(rec, '', id, lista);
  }
  porArquivo.set(path.basename(arq), lista);
}

// Agrupa por módulo: a auditoria varre um overlay por módulo, e o limite de
// candidatos do detector exige essa granularidade para não perder pares.
const moduloDe = (base) => {
  const m = base.match(/enriParcialM(\d+)U/i);
  if (m) return Number(m[1]);
  const m2 = base.match(/enriquecimento_m(\d+)\.js$/i);
  return m2 ? Number(m2[1]) : 0;
};

const grupos = new Map();
for (const [base, lista] of porArquivo) {
  const mod = moduloDe(base);
  if (!grupos.has(mod)) grupos.set(mod, []);
  grupos.get(mod).push({ base, lista });
}

const pares = [];
for (const [, membros] of grupos) {
  const doGrupo = [];
  for (const { lista } of membros) doGrupo.push(...lista);
  if (doGrupo.length < 2) continue;
  for (const p of encontrarQuaseDuplicatas(doGrupo, LIMIAR_QUASE_DUPLICATA)) pares.push(p);
}

// Mapa "id.campo" -> texto original completo (para exibir os dois lados).
const originalPorChave = new Map();
for (const [, lista] of porArquivo) {
  for (const s of lista) {
    if (!originalPorChave.has(`${s.id}.${s.campo}`)) originalPorChave.set(`${s.id}.${s.campo}`, s.original);
  }
}

if (json) {
  console.log(
    JSON.stringify(
      pares.map((p) => ({
        a: p.a,
        b: p.b,
        mesmoRegistro: p.mesmoRegistro,
        sim: Number(p.similaridade.toFixed(3)),
        textoA: originalPorChave.get(p.a),
        textoB: originalPorChave.get(p.b)
      })),
      null,
      2
    )
  );
} else {
  for (const p of pares) {
    console.log('='.repeat(100));
    console.log(`A: ${p.a}   (sim=${p.similaridade.toFixed(3)})`);
    console.log(`   ${originalPorChave.get(p.a)}`);
    console.log(`B: ${p.b}`);
    console.log(`   ${originalPorChave.get(p.b)}`);
  }
  console.log('='.repeat(100));
  console.log(`TOTAL quase-duplicatas: ${pares.length}`);
}
process.exitCode = pares.length ? 1 : 0;
