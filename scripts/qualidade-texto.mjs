#!/usr/bin/env node
/* qualidade-texto.mjs — CLI da detecção de qualidade de prosa nos lotes.
 *
 * A regra está em `scripts/lib/qualidade-texto-lib.mjs`.
 *
 * Uso:
 *   node scripts/qualidade-texto.mjs                 # varre todos os lotes
 *   node scripts/qualidade-texto.mjs <arquivo.js>     # varre um arquivo
 *   node scripts/qualidade-texto.mjs <diretorio/>     # varre todos os .js do diretório
 *   node scripts/qualidade-texto.mjs --resumo         # apenas totais por arquivo
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { varrerQualidadeRegistro } from './lib/qualidade-texto-lib.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const resumo = args.includes('--resumo');
const alvos = args.filter(a => a !== '--resumo');

function resolverAlvos(argumentos) {
  if (argumentos.length === 0) {
    return fs.readdirSync(path.join(repoRoot, 'scripts', 'lotes'))
      .filter(f => f.endsWith('.js'))
      .map(f => path.join(repoRoot, 'scripts', 'lotes', f));
  }
  const out = [];
  for (const arg of argumentos) {
    const abs = path.resolve(process.cwd(), arg);
    if (!fs.existsSync(abs)) {
      console.error(`[ERRO] ${arg}: não encontrado`);
      process.exitCode = 2;
      continue;
    }
    if (fs.statSync(abs).isDirectory()) {
      fs.readdirSync(abs).filter(f => f.endsWith('.js')).forEach(f => out.push(path.join(abs, f)));
    } else {
      out.push(abs);
    }
  }
  return out;
}

const arquivos = resolverAlvos(alvos);
let totalCampos = 0;
const porArquivo = [];

for (const arq of arquivos) {
  const code = fs.readFileSync(arq, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) { console.log(`[ERRO] ${path.basename(arq)}: const não encontrada`); continue; }
  const nome = m[1];
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.log(`[ERRO] ${path.basename(arq)}: ${e.message}`);
    continue;
  }
  const saida = [];
  for (const [id, rec] of Object.entries(obj)) saida.push(...varrerQualidadeRegistro(id, rec));
  if (saida.length) {
    totalCampos += saida.length;
    porArquivo.push({ arquivo: path.basename(arq), n: saida.length, saida });
    if (!resumo) {
      console.log(`\n${path.basename(arq)}: ${saida.length} campo(s) com problema de qualidade`);
      for (const s of saida.slice(0, 8)) {
        console.log(`  - ${s.id}${s.caminho}: ${s.achados.join('; ')}`);
        console.log(`      "${s.trecho}..."`);
      }
      if (saida.length > 8) console.log(`  ... e mais ${saida.length - 8}`);
    }
  }
}

if (resumo) {
  porArquivo.sort((a, b) => b.n - a.n);
  for (const p of porArquivo) console.log(`${String(p.n).padStart(4)}  ${p.arquivo}`);
}

console.log(`\nArquivos varridos: ${arquivos.length} | campos com problema de qualidade: ${totalCampos}`);
process.exit(totalCampos ? 1 : 0);
