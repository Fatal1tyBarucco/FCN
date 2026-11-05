/* extrair-bloco-duplicado.mjs — extrai os blocos de uma chave duplicada.
 *
 * Uso: node scripts/lib/extrair-bloco-duplicado.mjs <arquivo> <chave> <indice>
 * Saída: imprime o bloco (sem a chave) para inspeção/validação.
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';

const [, , arq, chave, idxStr] = process.argv;
const idx = Number(idxStr || 0);
const t = fs.readFileSync(arq, 'utf8');
const re = new RegExp(`^  "${chave.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*:`, 'gm');
const offsets = [];
let m;
while ((m = re.exec(t)) !== null) offsets.push(m.index);
if (idx >= offsets.length) {
  console.error(`Bloco ${idx} inexistente (há ${offsets.length}).`);
  process.exit(2);
}
const ini = offsets[idx];
let fim = t.length;
for (const o of offsets) if (o > ini) { fim = o; break; }
// recua até a chave seguinte de nível superior
const proxChave = t.indexOf('\n  "', ini + 5);
if (proxChave > 0 && proxChave < fim) fim = proxChave;
console.log(t.substring(ini, fim).trimEnd());
