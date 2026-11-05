/* resolver-chave-duplicada.mjs — remove chaves duplicadas de um lote.
 *
 * Escrita concorrente de dois agentes no mesmo arquivo deixa blocos repetidos:
 * o JavaScript resolve silenciosamente (a última chave vence) e o conteúdo
 * some sem aviso. Este script reconstrói o arquivo com a PRIMEIRA ocorrência
 * de cada chave (padrão: o bloco mais completo, gravado primeiro) e reporta
 * o que foi descartado.
 *
 * Uso:
 *   node scripts/lib/resolver-chave-duplicada.mjs <arquivo> [--manter=indice]
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';

const [, , arq, ...opcoes] = process.argv;
if (!arq) {
  console.error('Uso: node scripts/lib/resolver-chave-duplicada.mjs <arquivo> [--manter=indice]');
  process.exit(2);
}
const manterArg = opcoes.find(o => o.startsWith('--manter='));
const manterIndice = manterArg ? Number(manterArg.split('=')[1]) : 0;

const t = fs.readFileSync(arq, 'utf8');
const m = t.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
if (!m) { console.error('const não encontrada'); process.exit(2); }
const nome = m[1];

// Localiza blocos de primeiro nível: linha `  "chave": {` ... até a chave seguinte.
const reBloco = /^ {2}"([^"]+)"\s*:\s*\{/gm;
const blocos = [];
let mm;
while ((mm = reBloco.exec(t)) !== null) {
  blocos.push({ chave: mm[1], inicio: mm.index, corpo: mm.index + mm[0].length });
}
if (!blocos.length) { console.error('nenhum bloco encontrado'); process.exit(2); }

const porChave = new Map();
for (const b of blocos) {
  if (!porChave.has(b.chave)) porChave.set(b.chave, []);
  porChave.get(b.chave).push(b);
}

// Calcula o fim de cada bloco (início do próximo bloco ou fim do objeto).
const fimObjeto = t.lastIndexOf('\n};');
for (let i = 0; i < blocos.length; i++) {
  const b = blocos[i];
  const prox = blocos[i + 1];
  let fim = prox ? prox.inicio : fimObjeto + 1;
  // Consome a chave seguinte se for da MESMA chave (bloco duplicado).
  while (fim < t.length && !/^ {2}"[^"]+"\s*:\s*\{/.test(t.slice(fim, fim + 40))) {
    if (prox && fim >= prox.inicio) break;
    fim++;
    if (fim >= fimObjeto) break;
  }
  b.fim = Math.min(fim, fimObjeto + 1);
}

const escolhidos = [];
const descartados = [];
for (const [chave, lista] of porChave) {
  const indice = lista.length > 1 && manterIndice < lista.length ? manterIndice : 0;
  escolhidos.push(lista[indice]);
  lista.forEach((b, i) => { if (i !== indice) descartados.push({ chave, bloco: i }); });
}
escolhidos.sort((a, b) => a.inicio - b.inicio);

const cabecalho = t.slice(0, blocos[0].inicio);
const corpo = escolhidos.map(b => t.slice(b.inicio, b.fim).replace(/\s+$/, '')).join('\n');
const saida = `${cabecalho}${corpo}\n};\n`;

fs.writeFileSync(arq, saida, 'utf8');
console.log(`${path.basename(arq)}: reconstruído com ${escolhidos.length} chave(s).`);
for (const d of descartados) console.log(`  descartado bloco ${d.bloco} duplicado de "${d.chave}"`);
if (!descartados.length) console.log('  (nenhuma duplicidade encontrada)');
