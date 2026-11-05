#!/usr/bin/env node
/* inserir-registro-lote.mjs — insere um registro JSON em um arquivo de lote parcial.
 *
 * Uso:
 *   node scripts/inserir-registro-lote.mjs <arquivo-lote> <id> <arquivo-json-registro>
 *
 * O arquivo JSON do registro deve conter APENAS o objeto do registro (sem `const`).
 * A inserção preserva o conteúdo já existente e respeita a ordem das chaves.
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';

const [lote, id, jsonPath] = process.argv.slice(2);
if (!lote || !id || !jsonPath) {
  console.error('Uso: node scripts/inserir-registro-lote.mjs <arquivo-lote> <id> <arquivo-json-registro>');
  process.exit(2);
}

const loteAbs = path.resolve(process.cwd(), lote);
const jsonAbs = path.resolve(process.cwd(), jsonPath);
if (!fs.existsSync(loteAbs)) { console.error(`Lote não encontrado: ${loteAbs}`); process.exit(2); }
if (!fs.existsSync(jsonAbs)) { console.error(`Registro não encontrado: ${jsonAbs}`); process.exit(2); }

const registro = JSON.parse(fs.readFileSync(jsonAbs, 'utf8'));
let code = fs.readFileSync(loteAbs, 'utf8');

// Verifica duplicidade de chave.
const reChave = new RegExp(`"${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*:`);
if (reChave.test(code)) {
  console.error(`Chave já presente no lote: ${id}`);
  process.exit(1);
}

// Localiza o fechamento do objeto de topo (última linha `};` do arquivo).
const marcador = /\n\};\s*$/;
const m = code.match(marcador);
if (!m) { console.error('Não foi encontrado o fechamento `};` do objeto do lote.'); process.exit(2); }

const bloco = `,\n  ${JSON.stringify(id)}: ${JSON.stringify(registro, null, 2).split('\n').join('\n  ')}\n`;
const novo = code.replace(marcador, bloco + '};');

fs.writeFileSync(loteAbs, novo, 'utf8');
console.log(`Registro ${id} inserido em ${path.basename(loteAbs)} (${bloco.length} bytes adicionados).`);
