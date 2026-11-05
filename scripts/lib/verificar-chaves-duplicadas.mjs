/* verificar-chaves-duplicadas.mjs — detecta chaves duplicadas nos lotes.
 *
 * Dois agentes podem gravar no mesmo arquivo simultaneamente, deixando blocos
 * repetidos. O JS resolve isso silenciosamente (a última chave vence), então o
 * validador passa e o conteúdo some. Este script compara as chaves do arquivo
 * em disco com as chaves efetivamente presentes no objeto avaliado.
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const loteDir = path.join(repoRoot, 'scripts', 'lotes');

const arquivos = fs.readdirSync(loteDir).filter(f => f.endsWith('.js'));
let problemas = 0;
let totalRegistros = 0;

for (const arq of arquivos) {
  const code = fs.readFileSync(path.join(loteDir, arq), 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) { console.log(`[ERRO] ${arq}: const não encontrada`); problemas++; continue; }
  const nome = m[1];
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  } catch (e) {
    console.log(`[ERRO] ${arq}: ${e.message}`);
    problemas++;
    continue;
  }
  const chaves = Object.keys(obj);
  totalRegistros += chaves.length;

  // Conta ocorrências literais de cada chave de primeiro nível no arquivo.
  const contagem = new Map();
  for (const k of chaves) {
    const re = new RegExp(`^\\s{2}"${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*:`, 'gm');
    const n = (code.match(re) || []).length;
    contagem.set(k, n);
  }
  const dups = [...contagem].filter(([, n]) => n > 1);
  if (dups.length) {
    console.log(`\n${arq}: ${dups.length} chave(s) DUPLICADA(S) no arquivo`);
    for (const [k, n] of dups) console.log(`  - "${k}" aparece ${n}x no arquivo (o JS preserva só a última)`);
    problemas += dups.length;
  }
}

console.log(`\nArquivos: ${arquivos.length} | registros (chaves únicas): ${totalRegistros} | arquivos com duplicidade: ${problemas}`);
process.exit(problemas ? 1 : 0);
