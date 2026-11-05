/* teste-quase-duplicatas.mjs — mede o impacto do limiar de quase-duplicata nos lotes atuais. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { coletarStringsLongas, encontrarQuaseDuplicatas } from '../lib/enriquecimento-comum.mjs';

const dir = '/root/projetos/FCN/scripts/lotes';
const arquivos = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
const todas = [];
for (const arq of arquivos) {
  const code = fs.readFileSync(path.join(dir, arq), 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) continue;
  let obj;
  try {
    obj = vm.runInContext(`(function(){ ${code}; return ${m[1]}; })()`, vm.createContext({ console }));
  } catch { continue; }
  for (const [id, rec] of Object.entries(obj)) coletarStringsLongas(rec, '', id, todas);
}
console.log(`strings longas coletadas: ${todas.length}`);
for (const limiar of [0.75, 0.80, 0.82, 0.85, 0.90]) {
  const d = encontrarQuaseDuplicatas(todas, limiar);
  const pares = new Set(d.map(x => `${x.a}||${x.b}`));
  console.log(`limiar ${limiar}: ${d.length} pares | ${pares.size} pares únicos`);
}
const d = encontrarQuaseDuplicatas(todas, 0.82);
console.log('\n--- exemplos no limiar 0.82 ---');
for (const x of d.slice(0, 25)) {
  console.log(`${x.similaridade.toFixed(3)} ${x.mesmoRegistro ? 'MESMO' : 'DIST '} ${x.a}  <->  ${x.b}`);
}
