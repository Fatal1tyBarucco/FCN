#!/usr/bin/env node
/* aplicar-patches-contextuais.mjs — aplica substituições de texto EXATAS nos
 * lotes da Seção 5, a partir de um arquivo de patches JSON.
 *
 * Formato do patch (JSON):
 *   [
 *     { "arquivo": "enriParcialM5U4P3.js",
 *       "id": "m5-u4-t3-s1",
 *       "campo": ".orientacaoEstrategica.competencias[1]",
 *       "antigo": "<texto exato atual>",
 *       "novo":   "<texto substituto>" },
 *     ...
 *   ]
 *
 * Segurança: o patch só é aplicado se o valor ATUAL do campo for IDÊNTICO a
 * `antigo`. Caso contrário o patch é reportado como "não aplicado" — nada é
 * escrito. Ao final, reescreve apenas os lotes efetivamente alterados,
 * preservando a serialização `const nome = { ... };` com indentação de 2.
 *
 * Uso: node scripts/aplicar-patches-contextuais.mjs <arquivo.json> [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const LOTE_DIR = path.join(repoRoot, 'scripts', 'lotes');

const patchFile = process.argv[2];
if (!patchFile) {
  console.error('Uso: node scripts/aplicar-patches-contextuais.mjs <arquivo.json> [--dry-run]');
  process.exit(2);
}
const dryRun = process.argv.includes('--dry-run');
const patches = JSON.parse(fs.readFileSync(path.resolve(patchFile), 'utf8'));

function carregar(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) throw new Error(`const não encontrado em ${file}`);
  return { nome: m[1], obj: vm.runInContext(`(function(){ ${c}; return ${m[1]}; })()`, vm.createContext({ console })) };
}

/** Resolve "a.b[0].c" em um caminho de objeto; retorna o container e a chave final. */
function resolver(raiz, caminho) {
  const partes = caminho.replace(/^\./, '').split('.').filter(Boolean);
  let alvo = raiz;
  for (let i = 0; i < partes.length - 1; i++) {
    const p = partes[i];
    const m = p.match(/^(.*?)\[(\d+)\]$/);
    if (m) {
      if (!m[1]) alvo = alvo[Number(m[2])];
      else { alvo = alvo[m[1]]; alvo = alvo[Number(m[2])]; }
    } else {
      alvo = alvo[p];
    }
    if (alvo === undefined || alvo === null) return null;
  }
  const ultima = partes[partes.length - 1];
  const mu = ultima.match(/^(.*?)\[(\d+)\]$/);
  if (mu) return { container: mu[1] ? alvo[mu[1]] : alvo, chave: Number(mu[2]) };
  return { container: alvo, chave: ultima };
}

const porArquivo = new Map();
const aplicados = [];
const naoAplicados = [];

for (const p of patches) {
  const file = path.join(LOTE_DIR, p.arquivo);
  if (!fs.existsSync(file)) { naoAplicados.push({ ...p, motivo: 'arquivo inexistente' }); continue; }
  if (!porArquivo.has(file)) porArquivo.set(file, carregar(file));
  const { obj } = porArquivo.get(file);
  const rec = obj[p.id];
  if (!rec) { naoAplicados.push({ ...p, motivo: 'registro inexistente' }); continue; }
  const ref = resolver(rec, p.campo);
  if (!ref) { naoAplicados.push({ ...p, motivo: 'campo não resolvido' }); continue; }
  const atual = ref.container[ref.chave];
  if (atual !== p.antigo) {
    naoAplicados.push({ ...p, motivo: `valor atual difere (atual: ${JSON.stringify(String(atual).slice(0, 70))})` });
    continue;
  }
  ref.container[ref.chave] = p.novo;
  aplicados.push(p);
}

if (!dryRun) {
  for (const [file, { nome, obj }] of porArquivo) {
    fs.writeFileSync(file, `const ${nome} = ${JSON.stringify(obj, null, 2)};\n`, 'utf8');
  }
}

console.log(`${dryRun ? '[DRY RUN] ' : ''}patches aplicados: ${aplicados.length} | não aplicados: ${naoAplicados.length}`);
for (const n of naoAplicados) console.log(`  ! ${n.arquivo} ${n.id}${n.campo}: ${n.motivo}`);
