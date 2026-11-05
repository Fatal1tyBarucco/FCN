#!/usr/bin/env node
/* quase-duplicatas.mjs — detecta boilerplate (quase-duplicatas) em registros de enriquecimento.
 *
 * Uso:
 *   node scripts/lib/quase-duplicatas.mjs                        # varre scripts/lotes/*.js
 *   node scripts/lib/quase-duplicatas.mjs scripts/lotes/x.js ...  # varre arquivos informados
 *   node scripts/lib/quase-duplicatas.mjs --alvos                # varre os overlays canônicos
 *
 * Saída: um bloco por par quase-duplicado, com arquivo, id, campo e os dois textos.
 * Exit code 1 quando há algum par (útil em CI).
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { encontrarQuaseDuplicatas, LIMIAR_QUASE_DUPLICATA } from './enriquecimento-comum.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..', '..');
const LOTES = path.join(repoRoot, 'scripts', 'lotes');
const DATA = path.join(repoRoot, 'apostila-ia', 'assets', 'data');

const args = process.argv.slice(2);
let arquivos = [];
let alvos = false;
for (const a of args) {
  if (a === '--alvos') alvos = true;
  else {
    const p = path.resolve(process.cwd(), a);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      // Diretório: varre os .js de lote diretamente dentro dele.
      arquivos.push(...fs
        .readdirSync(p)
        .filter((f) => f.endsWith('.js') && f.startsWith('enriParcial'))
        .map((f) => path.join(p, f)));
    } else {
      arquivos.push(p);
    }
  }
}
if (alvos) {
  for (let m = 1; m <= 8; m++) arquivos.push(path.join(DATA, `enriquecimento_m${m}.js`));
} else if (arquivos.length === 0) {
  arquivos = fs
    .readdirSync(LOTES)
    .filter((f) => f.endsWith('.js') && f.startsWith('enriParcial'))
    .map((f) => path.join(LOTES, f));
}

const todas = [];
const mapa = new Map();
for (const arq of arquivos) {
  if (!fs.existsSync(arq)) continue;
  const code = fs.readFileSync(arq, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) continue;
  const nome = m[1];
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.log(`[ERRO] ${path.basename(arq)}: ${e.message}`);
    continue;
  }
  const base = path.basename(arq);
  for (const [id, rec] of Object.entries(obj)) {
    const walk = (v, caminho) => {
      if (typeof v === 'string') {
        if (v.length >= 120) {
          const chave = `${id}.${caminho}`;
          todas.push({ id, campo: caminho, texto: v, original: v });
          mapa.set(chave, { texto: v, arq: base, caminho });
        }
      } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${caminho}[${i}]`));
      else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, caminho ? `${caminho}.${k}` : k);
    };
    walk(rec, '');
  }
}

const pares = encontrarQuaseDuplicatas(todas, LIMIAR_QUASE_DUPLICATA);
if (pares.length === 0) {
  console.log(`Nenhuma quase-duplicata (limiar ${LIMIAR_QUASE_DUPLICATA}) em ${arquivos.length} arquivo(s).`);
  process.exit(0);
}

const porArquivo = new Map();
for (const p of pares) {
  const A = mapa.get(p.a);
  const B = mapa.get(p.b);
  const chave = [A.arq, B.arq].sort().join(' <> ');
  if (!porArquivo.has(chave)) porArquivo.set(chave, []);
  porArquivo.get(chave).push({ p, A, B });
}

for (const [chave, arr] of [...porArquivo.entries()].sort((x, y) => y[1].length - x[1].length)) {
  console.log(`\n${chave}: ${arr.length} par(es)`);
  for (const { p, A, B } of arr) {
    console.log(`  - ${A.arq} :: ${p.a}  <->  ${p.b}  (sim=${p.similaridade.toFixed(3)})`);
    console.log(`    A: ${A.texto}`);
    console.log(`    B: ${B.texto}`);
  }
}
console.log(`\nTOTAL quase-duplicatas: ${pares.length}`);
process.exit(1);
