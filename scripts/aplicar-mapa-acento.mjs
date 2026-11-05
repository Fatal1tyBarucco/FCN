#!/usr/bin/env node
/* aplicar-mapa-acento.mjs — incorpora ao catálogo de acentuação
 * (`scripts/lib/enriquecimento-comum.mjs`, `CORRECOES_ACENTUACAO_EXTRAS`) o
 * mapa de correções triado semanticamente por agente de autoria.
 *
 * O mapa é um TSV sem cabeçalho: `<forma_sem_acento>\t<forma_acentuada>`.
 * A aplicação é feita por PALAVRA (com limites de palavra), preservando a
 * capitalização original — por isso o catálogo precisa listar a forma em
 * minúsculas.
 *
 * Uso: node scripts/aplicar-mapa-acento.mjs <mapa.tsv> [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const LIB = path.join(repoRoot, 'scripts', 'lib', 'enriquecimento-comum.mjs');

const mapaFile = process.argv[2];
if (!mapaFile) {
  console.error('Uso: node scripts/aplicar-mapa-acento.mjs <mapa.tsv> [--dry-run]');
  process.exit(2);
}
const dryRun = process.argv.includes('--dry-run');

const pares = fs.readFileSync(path.resolve(mapaFile), 'utf8')
  .split('\n').map(l => l.trim()).filter(Boolean)
  .map(l => l.split('\t')).filter(p => p.length === 2 && p[0] && p[1]);

if (!pares.length) { console.error('mapa vazio'); process.exit(2); }

// Validação: a forma acentuada deve conter acento e a base deve ser a mesma
// palavra sem acento (segundo NFD).
const semAcento = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const invalidos = [];
for (const [base, correta] of pares) {
  if (semAcento(base) !== base.toLowerCase()) invalidos.push(`${base} -> ${correta} (base contém acento)`);
  else if (semAcento(correta) === correta.toLowerCase()) invalidos.push(`${base} -> ${correta} (destino sem acento)`);
  else if (semAcento(correta) !== base.toLowerCase()) invalidos.push(`${base} -> ${correta} (não é a mesma palavra)`);
}
if (invalidos.length) {
  console.error('Mapa inválido:');
  invalidos.forEach(x => console.error('  - ' + x));
  process.exit(1);
}

const codigo = fs.readFileSync(LIB, 'utf8');
const marcador = 'export const CORRECOES_ACENTUACAO_EXTRAS = new Map([\n';
const inicio = codigo.indexOf(marcador);
if (inicio < 0) { console.error('marcador não encontrado na lib'); process.exit(2); }
const corpoInicio = inicio + marcador.length;
const fim = codigo.indexOf('\n]);', corpoInicio);
if (fim < 0) { console.error('fechamento do Map não encontrado'); process.exit(2); }

const jaExistentes = new Set();
for (const m of codigo.slice(corpoInicio, fim).matchAll(/\['([^']+)',\s*'([^']+)'\]/g)) jaExistentes.add(m[1]);

const novos = pares.filter(([b]) => !jaExistentes.has(b));
const atualizados = pares.filter(([b, c]) => jaExistentes.has(b));

if (dryRun) {
  console.log(`[DRY RUN] pares: ${pares.length} | novos: ${novos.length} | já existentes: ${atualizados.length}`);
  atualizados.forEach(([b, c]) => console.log(`  = ${b} -> ${c} (já consta)`));
  process.exit(0);
}

const bloco = novos.map(([b, c]) => `  ['${b}', '${c}']`).join(',\n');
const insercao = bloco + (bloco ? ',\n' : '');
const novoCodigo = codigo.slice(0, corpoInicio) + insercao + codigo.slice(corpoInicio);
fs.writeFileSync(LIB, novoCodigo, 'utf8');
console.log(`mapa incorporado: ${novos.length} pares novos | ${atualizados.length} já constavam`);
atualizados.forEach(([b, c]) => console.log(`  = ${b} -> ${c} (já consta)`));
