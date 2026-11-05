#!/usr/bin/env node
/**
 * sincronizar-governanca.mjs — espelhamento de inventário e matriz (Regra de Governança).
 *
 * FONTE DE VERDADE (canônica):
 *   - apostila-ia/inventario/INVENTARIO_CURRICULAR.md
 *   - apostila-ia/matriz/MATRIZ_COBERTURA.csv
 *   - apostila-ia/matriz/MATRIZ_COBERTURA.md
 *
 * ESPELHOS (devem ter SHA-256 idêntico):
 *   - inventario/INVENTARIO_CURRICULAR.md          (raiz)
 *   - matriz/MATRIZ_COBERTURA.csv                   (raiz)
 *   - matriz/MATRIZ_COBERTURA.md                    (raiz)
 *   - docs/INVENTARIO_CURRICULAR.md                 (relatório de CI)
 *   - docs/MATRIZ_COBERTURA.csv                     (saída do gerador de auditoria)
 *
 * Fluxo:
 *   1. Regenera a matriz estrutural a partir do currículo (scripts/audit_curriculum_matrix.mjs),
 *      que produz docs/MATRIZ_COBERTURA.csv;
 *   2. Promove esse resultado à fonte canônica (apostila-ia/matriz/);
 *   3. Espelha a fonte canônica em todos os destinos;
 *   4. Verifica SHA-256 de cada par canônico↔espelho;
 *   5. Grava docs/RECONCILIACAO_INVENTARIO_<data>.md com SHA, mtime e diff.
 *
 * Uso:
 *   node scripts/sincronizar-governanca.mjs                # sincroniza e gera relatório
 *   node scripts/sincronizar-governanca.mjs --verificar    # só verifica (exit 1 se divergir)
 *   node scripts/sincronizar-governanca.mjs --relatorio docs/RECONCILIACAO_INVENTARIO_2026-11-03.md
 */
'use strict';

import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');

const args = process.argv.slice(2);
const verificarOnly = args.includes('--verificar');
const relatorioArg = args.includes('--relatorio') ? args[args.indexOf('--relatorio') + 1] : null;
const dataRelatorio = relatorioArg || `docs/RECONCILIACAO_INVENTARIO_${new Date().toISOString().slice(0, 10)}.md`;

const CANONICOS = {
  'INVENTARIO_CURRICULAR.md': {
    canonico: 'apostila-ia/inventario/INVENTARIO_CURRICULAR.md',
    espelhos: ['inventario/INVENTARIO_CURRICULAR.md', 'docs/INVENTARIO_CURRICULAR.md']
  },
  'MATRIZ_COBERTURA.csv': {
    canonico: 'apostila-ia/matriz/MATRIZ_COBERTURA.csv',
    espelhos: ['matriz/MATRIZ_COBERTURA.csv', 'docs/MATRIZ_COBERTURA.csv'],
    gerador: 'scripts/audit_curriculum_matrix.mjs'
  },
  'MATRIZ_COBERTURA.md': {
    canonico: 'apostila-ia/matriz/MATRIZ_COBERTURA.md',
    espelhos: ['matriz/MATRIZ_COBERTURA.md', 'docs/MATRIZ_COBERTURA.md']
  }
};

function sha256(caminho) {
  return createHash('sha256').update(readFileSync(caminho)).digest('hex');
}
function mtime(caminho) {
  return statSync(caminho).mtime.toISOString();
}
function linhas(caminho) {
  return readFileSync(caminho, 'utf8').split('\n').length;
}
function diffResumo(a, b) {
  const la = readFileSync(a, 'utf8').split('\n');
  const lb = readFileSync(b, 'utf8').split('\n');
  const trocadas = [];
  const setB = new Map();
  lb.forEach((l) => setB.set(l, (setB.get(l) || 0) + 1));
  la.forEach((l) => {
    const c = setB.get(l) || 0;
    if (c > 0) setB.set(l, c - 1);
    else trocadas.push(l);
  });
  const setA = new Map();
  la.forEach((l) => setA.set(l, (setA.get(l) || 0) + 1));
  const ausentes = [];
  lb.forEach((l) => {
    const c = setA.get(l) || 0;
    if (c > 0) setA.set(l, c - 1);
    else ausentes.push(l);
  });
  return { adicionadasNoEspelho: trocadas.length, ausentesNoEspelho: ausentes.length, amostraAdicionadas: trocadas.slice(0, 3), amostraAusentes: ausentes.slice(0, 3) };
}

// ------------------------------------------------------------------ 1. regeneração da matriz
const gerados = [];
if (!verificarOnly) {
  for (const [nome, cfg] of Object.entries(CANONICOS)) {
    if (!cfg.gerador) continue;
    execFileSync(process.execPath, [resolve(repoRoot, cfg.gerador)], { cwd: repoRoot, stdio: 'inherit' });
    const saida = resolve(repoRoot, cfg.espelhos.find((e) => e.includes('docs/') && e.endsWith('.csv')) || cfg.espelhos[0]);
    if (existsSync(saida)) {
      mkdirSync(dirname(resolve(repoRoot, cfg.canonico)), { recursive: true });
      copyFileSync(saida, resolve(repoRoot, cfg.canonico));
      gerados.push(`${cfg.gerador} → ${cfg.canonico}`);
    }
  }
}

// ------------------------------------------------------------------ 2. espelhamento
const copiados = [];
if (!verificarOnly) {
  for (const cfg of Object.values(CANONICOS)) {
    const origem = resolve(repoRoot, cfg.canonico);
    if (!existsSync(origem)) {
      console.error(`[ERRO] fonte canônica ausente: ${cfg.canonico}`);
      process.exit(2);
    }
    for (const espelho of cfg.espelhos) {
      const destino = resolve(repoRoot, espelho);
      mkdirSync(dirname(destino), { recursive: true });
      if (!existsSync(destino) || sha256(destino) !== sha256(origem)) {
        copyFileSync(origem, destino);
        copiados.push(`${cfg.canonico} → ${espelho}`);
      }
    }
  }
}

// ------------------------------------------------------------------ 3. verificação
const pares = [];
let divergentes = 0;
for (const [nome, cfg] of Object.entries(CANONICOS)) {
  const canonico = resolve(repoRoot, cfg.canonico);
  const shaCanonico = sha256(canonico);
  for (const espelho of cfg.espelhos) {
    const destino = resolve(repoRoot, espelho);
    const existe = existsSync(destino);
    const shaEspelho = existe ? sha256(destino) : null;
    const igual = existe && shaEspelho === shaCanonico;
    if (!igual) divergentes++;
    pares.push({
      artefato: nome,
      canonico: cfg.canonico,
      espelho,
      shaCanonico,
      shaEspelho: shaEspelho || '(ausente)',
      mtimeCanonico: mtime(canonico),
      mtimeEspelho: existe ? mtime(destino) : '(ausente)',
      linhasCanonico: linhas(canonico),
      linhasEspelho: existe ? linhas(destino) : 0,
      igual,
      diff: existe ? diffResumo(canonico, destino) : null
    });
  }
}

// ------------------------------------------------------------------ 4. relatório
const relatorioPath = resolve(repoRoot, dataRelatorio);
mkdirSync(dirname(relatorioPath), { recursive: true });
const agora = new Date().toISOString();
const linhasMd = [];
linhasMd.push('# Reconciliação de Inventário e Matriz de Cobertura');
linhasMd.push('');
linhasMd.push(`**Execução:** ${agora}`);
linhasMd.push(`**Regra:** \`apostila-ia/inventario/\` e \`apostila-ia/matriz/\` são a fonte de verdade; \`inventario/\` e \`matriz/\` da raiz são espelhos e devem ter SHA-256 idêntico antes de cada publicação no GitHub Pages.`);
linhasMd.push(`**Script:** \`scripts/sincronizar-governanca.mjs\` (\`--verificar\` para auditoria sem escrita)`);
linhasMd.push('');
linhasMd.push('## Resultado da sincronização');
linhasMd.push('');
linhasMd.push(`- Artefatos verificados: **${pares.length}** pares (canônico ↔ espelho).`);
linhasMd.push(`- Pares divergentes: **${divergentes}**.`);
linhasMd.push(`- Arquivos copiados nesta execução: **${copiados.length}**.`);
if (gerados.length) {
  linhasMd.push(`- Matriz estrutural regenerada a partir do currículo: ${gerados.map((g) => `\`${g}\``).join('; ')}.`);
}
linhasMd.push('');
linhasMd.push('## SHA-256, mtime e diff por par');
linhasMd.push('');
linhasMd.push('| Artefato | Canônico | Espelho | SHA-256 canônico | SHA-256 espelho | Idêntico | mtime canônico | mtime espelho | Linhas (canônico/espelho) |');
linhasMd.push('|---|---|---|---|---|---|---|---|---|');
for (const p of pares) {
  linhasMd.push(`| ${p.artefato} | \`${p.canonico}\` | \`${p.espelho}\` | \`${p.shaCanonico.slice(0, 16)}…\` | \`${String(p.shaEspelho).slice(0, 16)}…\` | ${p.igual ? 'SIM' : 'NÃO'} | ${p.mtimeCanonico} | ${p.mtimeEspelho} | ${p.linhasCanonico}/${p.linhasEspelho} |`);
}
linhasMd.push('');
linhasMd.push('## Detalhe das divergências');
linhasMd.push('');
const comDivergencia = pares.filter((p) => !p.igual);
if (!comDivergencia.length) {
  linhasMd.push('Nenhuma divergência: todos os espelhos estão byte a byte idênticos às fontes canônicas.');
} else {
  for (const p of comDivergencia) {
    linhasMd.push(`### ${p.artefato} → \`${p.espelho}\``);
    linhasMd.push('');
    linhasMd.push(`- SHA canônico: \`${p.shaCanonico}\``);
    linhasMd.push(`- SHA espelho: \`${p.shaEspelho}\``);
    if (p.diff) {
      linhasMd.push(`- Linhas apenas no canônico: ${p.diff.adicionadasNoEspelho}; linhas apenas no espelho: ${p.diff.ausentesNoEspelho}.`);
      if (p.diff.amostraAdicionadas.length) {
        linhasMd.push('');
        linhasMd.push('Amostra de linhas presentes apenas no canônico:');
        linhasMd.push('');
        p.diff.amostraAdicionadas.forEach((l) => linhasMd.push('```\n' + l.slice(0, 300) + '\n```'));
      }
      if (p.diff.amostraAusentes.length) {
        linhasMd.push('');
        linhasMd.push('Amostra de linhas presentes apenas no espelho:');
        linhasMd.push('');
        p.diff.amostraAusentes.forEach((l) => linhasMd.push('```\n' + l.slice(0, 300) + '\n```'));
      }
    }
    linhasMd.push('');
  }
}
linhasMd.push('## Procedimento aplicado');
linhasMd.push('');
linhasMd.push('1. `node scripts/audit_curriculum_matrix.mjs` — regenera `docs/MATRIZ_COBERTURA.csv` a partir de `apostila-ia/assets/data/curriculum*.js` (fonte primária do currículo).');
linhasMd.push('2. Promoção do resultado para a fonte canônica `apostila-ia/matriz/MATRIZ_COBERTURA.csv`.');
linhasMd.push('3. Cópia da fonte canônica para todos os espelhos (`matriz/`, `docs/`, `inventario/`).');
linhasMd.push('4. Verificação de SHA-256 par a par e registro deste relatório.');
linhasMd.push('');
linhasMd.push('> Regras pesadas pela `AGENTS.md`: antes de cada publicação no GitHub Pages, execute `node scripts/sincronizar-governanca.mjs` e confirme que não há pares divergentes.');
linhasMd.push('');
writeFileSync(relatorioPath, linhasMd.join('\n'), 'utf8');

console.log(`\nGovernança de inventário/matriz:`);
for (const p of pares) {
  console.log(`  [${p.igual ? 'OK  ' : 'FALHA'}] ${p.espelho.padEnd(38)} sha=${String(p.shaEspelho).slice(0, 12)} (canônico ${p.shaCanonico.slice(0, 12)})`);
}
console.log(`  Relatório: ${relative(repoRoot, relatorioPath)}`);
if (copiados.length) console.log(`  Copiados: ${copiados.length}`);

if (verificarOnly && divergentes > 0) process.exit(1);
