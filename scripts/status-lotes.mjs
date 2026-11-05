#!/usr/bin/env node
/* status-lotes.mjs — panorama dos lotes de enriquecimento.
 * Uso: node scripts/status-lotes.mjs [--verbose]
 */
'use strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import {
  PLACEHOLDER_RE,
  temMarcador,
  norm,
  txt,
  arr,
  MIN_RESUMO,
  NIVEIS_KEYS,
  DIFICULDADES,
  CLASSIFICACOES,
  TIPOS_EXEMPLO
} from './lib/enriquecimento-comum.mjs';
import { detectarArtefatos, varrerArtefatosRegistro } from './lib/artefatos-texto-lib.mjs';

// PLACEHOLDER_RE é uma lista de pares [regex, rótulo].
const temPlaceholder = texto => {
  if (!texto || typeof texto !== 'string') return null;
  for (const [re, rotulo] of PLACEHOLDER_RE) if (re.test(texto)) return rotulo;
  return null;
};

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const plano = JSON.parse(fs.readFileSync(path.join(repoRoot, 'scripts/lotes/fonte/PLANO_LOTES.json'), 'utf8'));
const verbose = process.argv.includes('--verbose');

// Marcadores técnicos/IDs que NÃO podem aparecer no texto visível ao aluno.
// `relacoes` e `preRequisitos` são os únicos campos que admitem IDs de subtópico.
const MARCADOR_RE = [
  [/\buid[:_]/i, 'marcador uid de deduplicação'],
  [/\bm\d+-u\d+-t\d+-s\d+\b/, 'ID de subtópico dentro do texto'],
  [/\bmodulo-\d+-unidade-\d+-topico-\d+-sub-\d+\b/, 'ID de subtópico dentro do texto']
];

function validar(id, r, falhas) {
  const F = m => falhas.push(`${id}: ${m}`);
  const oe = r.orientacaoEstrategica || {};
  if (txt(oe.porqueImporta).length < 120) F('porqueImporta<120');
  if (arr(oe.preRequisitos).length < 1) F('preRequisitos<1');
  if (arr(oe.objetivosObservaveis).length < 2) F('objetivosObservaveis<2');
  if (arr(oe.competencias).length < 2) F('competencias<2');
  if (!DIFICULDADES.includes(oe.dificuldade)) F('dificuldade');
  if (arr(oe.relacoes).length < 1) F('relacoes<1');
  const rc = oe.relevanciaConcurso || {};
  if (!CLASSIFICACOES.includes(rc.classificacao)) F('classificacao');
  if (txt(rc.justificativa).length < 80) F('justificativa<80');
  for (const k of NIVEIS_KEYS) {
    if (txt((r.niveis || {})[k]).trim().length < 180) F(`niveis.${k}<180`);
  }
  if (!Array.isArray(r.comparacoes) || !r.comparacoes.length) F('comparacoes<1');
  if (!Array.isArray(r.pegadinhas) || r.pegadinhas.length < 2) F('pegadinhas<2');
  const rs = r.resumoEstruturado || {};
  for (const [k, m] of Object.entries(MIN_RESUMO)) if (!Array.isArray(rs[k]) || rs[k].length < m) F(`resumo.${k}<${m}`);
  const ex = r.exemplosDetalhados;
  const tipos = TIPOS_EXEMPLO;
  if (!Array.isArray(ex) || ex.length !== 3) F('exemplos!=3');
  else ex.forEach((e, i) => {
    if (e.tipo !== tipos[i]) F(`ex[${i}].tipo`);
    for (const [k, m] of Object.entries({ problema: 80, dados: 60, estrategia: 80, resultado: 60, justificativa: 100, variacao: 80 })) {
      if (txt(e[k]).trim().length < m) F(`ex[${i}].${k}<${m}`);
    }
    if (arr(e.conceitos).length < 2) F(`ex[${i}].conceitos<2`);
    if (arr(e.execucao).length < 3) F(`ex[${i}].execucao<3`);
    if (arr(e.errosFrequentes).length < 2) F(`ex[${i}].errosFrequentes<2`);
  });
  // duplicações internas
  const locais = [];
  (function walk(v, p) {
    if (typeof v === 'string') {
      if (temPlaceholder(v)) F(`placeholder em ${p}`);
      const mc = temMarcador(v, p);
      if (mc) F(`marcador técnico em ${p} (${mc})`);
      if (v.trim().length >= 120) locais.push({ p, t: norm(v) });
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`));
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], `${p}.${k}`);
  })(r, '');
  for (let i = 0; i < locais.length; i++) for (let j = i + 1; j < locais.length; j++) {
    if (locais[i].t === locais[j].t) F(`duplicação ${locais[i].p} x ${locais[j].p}`);
  }
}

const prontos = [], comFalha = [], ausentes = [];
let registros = 0;
for (const l of plano) {
  const f = path.join(repoRoot, 'scripts/lotes', `${l.const}.js`);
  if (!fs.existsSync(f)) { ausentes.push(l.const); continue; }
  const code = fs.readFileSync(f, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) { comFalha.push([l.const, ['sintaxe: const ausente']]); continue; }
  let obj;
  try {
    const ctx = vm.createContext({ console });
    obj = vm.runInContext(`(function(){ ${code}; return ${m[1]}; })()`, ctx);
  } catch (e) { comFalha.push([l.const, [`sintaxe: ${e.message}`]]); continue; }
  const falhas = [];
  const ids = Object.keys(obj);
  ids.forEach(id => validar(id, obj[id], falhas));
  // artefatos de geração de texto (caracteres estranhos, inglês acidental,
  // ausência de acentuação) — o validador estrutural não os enxerga.
  ids.forEach(id => {
    for (const a of varrerArtefatosRegistro(id, obj[id])) {
      falhas.push(`${a.id}${a.caminho}: artefato de texto (${a.achados.join('; ')})`);
    }
  });
  // duplicação entre registros do lote
  const mapa = new Map();
  ids.forEach(id => {
    const st = [];
    (function walk(v) {
      if (typeof v === 'string') { if (v.trim().length >= 120) st.push(norm(v)); }
      else if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') Object.values(v).forEach(walk);
    })(obj[id]);
    st.forEach(t => {
      if (mapa.has(t)) falhas.push(`duplicação entre registros ${mapa.get(t)} x ${id}`);
      else mapa.set(t, id);
    });
  });
  const esperados = l.const; // placeholder
  if (falhas.length) comFalha.push([l.const, falhas]);
  else { prontos.push(l.const); registros += ids.length; }
}

console.log(`Lotes: ${plano.length} | prontos: ${prontos.length} | com falha: ${comFalha.length} | ausentes: ${ausentes.length}`);
console.log(`Registros prontos: ${registros}`);
if (comFalha.length) {
  console.log('\nCOM FALHA:');
  comFalha.forEach(([c, f]) => console.log(`  ${c}: ${f.slice(0, 4).join(' | ')}`));
}
if (ausentes.length) console.log(`\nAUSENTES (${ausentes.length}): ${ausentes.join(' ')}`);
