/* artefatos-texto.mjs — CLI da detecção de artefatos de geração nos lotes.
 *
 * A regra está em `scripts/lib/artefatos-texto-lib.mjs` (compartilhada com
 * `status-lotes.mjs` e o auditor final).
 *
 * Uso:
 *   node scripts/lib/artefatos-texto.mjs                 # varre todos os lotes
 *   node scripts/lib/artefatos-texto.mjs <arquivo.js>     # varre um arquivo
 *   node scripts/lib/artefatos-texto.mjs <diretorio/>     # varre todos os .js do diretório
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { FREQ_PT } from './enriquecimento-comum.mjs';
import { varrerArtefatosRegistro } from './artefatos-texto-lib.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const alvo = process.argv[2];
const alvoAbs = alvo ? path.resolve(process.cwd(), alvo) : null;
let arquivos;
if (!alvoAbs) {
  arquivos = fs.readdirSync(path.join(repoRoot, 'scripts', 'lotes'))
    .filter(f => f.endsWith('.js'))
    .map(f => path.join(repoRoot, 'scripts', 'lotes', f));
} else if (fs.existsSync(alvoAbs) && fs.statSync(alvoAbs).isDirectory()) {
  arquivos = fs.readdirSync(alvoAbs)
    .filter(f => f.endsWith('.js'))
    .map(f => path.join(alvoAbs, f));
} else {
  arquivos = [alvoAbs];
}

console.log(`Dicionário de referência: ${FREQ_PT.size} palavras extraídas do currículo validado.`);

let totalProblemas = 0;
for (const arq of arquivos) {
  const code = fs.readFileSync(arq, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) { console.log(`[ERRO] ${path.basename(arq)}: const não encontrada`); totalProblemas++; continue; }
  const nome = m[1];
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.log(`[ERRO] ${path.basename(arq)}: ${e.message}`);
    totalProblemas++;
    continue;
  }
  const saida = [];
  for (const [id, rec] of Object.entries(obj)) saida.push(...varrerArtefatosRegistro(id, rec));
  if (saida.length) {
    console.log(`\n${path.basename(arq)}: ${saida.length} campo(s) com artefato`);
    for (const s of saida.slice(0, 10)) {
      console.log(`  - ${s.id}${s.caminho}: ${s.achados.join('; ')}`);
      console.log(`      "${s.trecho}..."`);
    }
    if (saida.length > 10) console.log(`  ... e mais ${saida.length - 10}`);
    totalProblemas += saida.length;
  }
}

console.log(`\nArquivos varridos: ${arquivos.length} | campos com artefato: ${totalProblemas}`);
process.exit(totalProblemas ? 1 : 0);
