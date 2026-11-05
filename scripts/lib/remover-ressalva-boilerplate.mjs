#!/usr/bin/env node
/* remover-ressalva-boilerplate.mjs — remove o campo `relevanciaConcurso.ressalva`
 * quando ele contém a nota metodológica global idêntica (boilerplate).
 *
 * A nota global é fornecida pelo renderizador (`unidade-template.js`); mantê-la em
 * cada registro duplica texto e viola a regra de duplicação do contrato.
 *
 * Uso:
 *   node scripts/lib/remover-ressalva-boilerplate.mjs                 # varre scripts/lotes/*.js
 *   node scripts/lib/remover-ressalva-boilerplate.mjs <arquivo> ...   # varre arquivos informados
 *   node scripts/lib/remover-ressalva-boilerplate.mjs --alvos         # varre overlays canônicos
 *
 * Exit code 1 se restar alguma `ressalva` com o boilerplate global.
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..', '..');
const LOTES = path.join(repoRoot, 'scripts', 'lotes');
const DATA = path.join(repoRoot, 'apostila-ia', 'assets', 'data');

/** Nota metodológica global repetida em todos os registros (boilerplate). */
const BOILERPLATE =
  'Esta classificação é uma estimativa pedagógica qualitativa baseada na frequência histórica do tema em editais e na centralidade conceitual do assunto; não representa frequência estatística comprovada em provas recentes.';

const args = process.argv.slice(2);
let arquivos = [];
let alvos = false;
for (const a of args) {
  if (a === '--alvos') alvos = true;
  else arquivos.push(path.resolve(process.cwd(), a));
}
if (alvos) {
  for (let m = 1; m <= 8; m++) arquivos.push(path.join(DATA, `enriquecimento_m${m}.js`));
} else if (arquivos.length === 0) {
  arquivos = fs
    .readdirSync(LOTES)
    .filter((f) => f.endsWith('.js') && f.startsWith('enriParcial'))
    .map((f) => path.join(LOTES, f));
}

function normalizar(s) {
  return String(s).replace(/\s+/g, ' ').trim();
}

let removidas = 0;
let restantes = 0;
const arquivosAlterados = [];

for (const arq of arquivos) {
  if (!fs.existsSync(arq)) continue;
  let code = fs.readFileSync(arq, 'utf8');
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

  // Localiza a chave `ressalva` cujo valor normalizado é o boilerplate global.
  const alvosChave = [];
  const percorrer = (v) => {
    if (!v || typeof v !== 'object') return;
    if (Array.isArray(v)) {
      v.forEach(percorrer);
      return;
    }
    if (Object.prototype.hasOwnProperty.call(v, 'ressalva')) {
      if (normalizar(v.ressalva) === BOILERPLATE) alvosChave.push(v);
    }
    Object.values(v).forEach(percorrer);
  };
  percorrer(obj);
  if (alvosChave.length === 0) continue;

  // Remove por reescrita textual controlada (o arquivo é JS literal, não JSON puro).
  let novo = code;
  for (const alvo of alvosChave) {
    const valor = normalizar(alvo.ressalva);
    // Procura a entrada `"ressalva": "<valor>"` (aspas simples ou duplas).
    const re = new RegExp(
      `([\\t ]*)["']ressalva["']\\s*:\\s*["']${valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']\\s*,?\\n?`,
      'g'
    );
    novo = novo.replace(re, '');
  }
  if (novo === code) {
    console.log(`[AVISO] ${path.basename(arq)}: não foi possível remover ${alvosChave.length} ocorrência(s) por texto`);
    restantes += alvosChave.length;
    continue;
  }
  fs.writeFileSync(arq, novo, 'utf8');
  removidas += alvosChave.length;
  arquivosAlterados.push(`${path.basename(arq)} (${alvosChave.length})`);
}

console.log(`Ressalvas boilerplate removidas: ${removidas}`);
if (arquivosAlterados.length) console.log(`Arquivos alterados: ${arquivosAlterados.join(', ')}`);
if (restantes > 0) {
  console.log(`Ressalvas boilerplate remanescentes: ${restantes}`);
  process.exitCode = 1;
}
