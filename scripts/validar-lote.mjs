#!/usr/bin/env node
/* validar-lote.mjs — validador compacto de um lote parcial de enriquecimento.
 *
 * Uso:
 *   node scripts/validar-lote.mjs scripts/lotes/enriParcialM1U1P1.js
 *
 * Verifica, para cada registro do arquivo parcial:
 *  - presença de todos os campos do schema da Seção 5 do prompt mestre;
 *  - contagens mínimas (preRequisitos, objetivos, competencias, relacoes,
 *    comparacoes, pegadinhas, resumo, 3 exemplosDetalhados na ordem);
 *  - comprimentos mínimos de strings;
 *  - ausência de placeholders proibidos;
 *  - ausência de duplicação literal de frases >= 120 chars (entre registros
 *    do lote e entre campos do mesmo registro).
 *
 * Exit code: 0 se tudo passar, 1 se houver falhas.
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {
  PLACEHOLDER_RE,
  MARCADOR_RE,
  temPlaceholder,
  temMarcador,
  norm,
  txt,
  arr,
  MIN_EXEMPLO,
  MIN_RESUMO,
  NIVEIS_KEYS,
  DIFICULDADES,
  CLASSIFICACOES,
  TIPOS_EXEMPLO
} from './lib/enriquecimento-comum.mjs';

// Reexporta as listas para compatibilidade com consumidores que as importavam daqui.
export { PLACEHOLDER_RE, MARCADOR_RE };

const MIN_EX = MIN_EXEMPLO;

/**
 * Conjuntos exatos de chaves do schema (contrato §2 e §3).
 * Chaves fora do conjunto são erro: um typo como "diferencaGaberito" fazia o
 * registro passar sem o campo obrigatorio preenchido.
 */
const SCHEMA_CHAVES = {
  registro: ['orientacaoEstrategica', 'niveis', 'comparacoes', 'pegadinhas', 'resumoEstruturado', 'exemplosDetalhados'],
  orientacaoEstrategica: ['porqueImporta', 'preRequisitos', 'objetivosObservaveis', 'competencias', 'dificuldade', 'relacoes', 'relevanciaConcurso'],
  relevanciaConcurso: ['classificacao', 'justificativa', 'ressalva'],
  niveis: ['iniciante', 'intermediario', 'avancado', 'especialista'],
  comparacao: ['tema', 'a', 'b', 'diferencaGabarito'],
  comparacaoLado: ['rotulo', 'texto'],
  pegadinha: ['afirmacaoEquivocada', 'porqueErrada', 'versaoCorreta'],
  resumoEstruturado: ['conceitos', 'regras', 'comparacoes', 'fluxos', 'excecoes', 'palavrasChave', 'checklist'],
  exemplo: ['tipo', 'problema', 'dados', 'conceitos', 'estrategia', 'execucao', 'resultado', 'justificativa', 'errosFrequentes', 'variacao']
};

function verificarChaves(objeto, permitidas, rotulo, falhas, id, opcionais = []) {
  if (!objeto || typeof objeto !== 'object' || Array.isArray(objeto)) return;
  for (const k of Object.keys(objeto)) {
    if (!permitidas.includes(k) && !opcionais.includes(k)) {
      falhas.push(`${id}: chave desconhecida ${rotulo}.${k} (permitidas: ${permitidas.join(', ')})`);
    }
  }
}

function validarRegistro(id, r, falhas, avisos) {
  const F = (msg) => falhas.push(`${id}: ${msg}`);
  const W = (msg) => avisos.push(`${id}: ${msg}`);

  if (!r || typeof r !== 'object') { F('registro ausente ou inválido'); return; }

  const oe = r.orientacaoEstrategica;
  if (!oe || typeof oe !== 'object') F('orientacaoEstrategica ausente');
  else {
    if (txt(oe.porqueImporta).length < 120) F(`orientacaoEstrategica.porqueImporta < 120 (${txt(oe.porqueImporta).length})`);
    if (arr(oe.preRequisitos).length < 1) F('orientacaoEstrategica.preRequisitos < 1');
    if (arr(oe.objetivosObservaveis).length < 2) F('orientacaoEstrategica.objetivosObservaveis < 2');
    if (arr(oe.competencias).length < 2) F('orientacaoEstrategica.competencias < 2');
    if (!DIFICULDADES.includes(oe.dificuldade)) F(`dificuldade inválida: ${oe.dificuldade}`);
    if (arr(oe.relacoes).length < 1) F('orientacaoEstrategica.relacoes < 1');
    const rc = oe.relevanciaConcurso;
    if (!rc || typeof rc !== 'object') F('relevanciaConcurso ausente');
    else {
      if (!CLASSIFICACOES.includes(rc.classificacao)) F(`relevanciaConcurso.classificacao inválida: ${rc.classificacao}`);
      if (txt(rc.justificativa).length < 80) F(`relevanciaConcurso.justificativa < 80 (${txt(rc.justificativa).length})`);
      if (rc.ressalva) {
        if (txt(rc.ressalva).length < 60) F(`relevanciaConcurso.ressalva < 60 (${txt(rc.ressalva).length})`);
        if (!/estimativa pedag[oó]gica/i.test(txt(rc.ressalva))) F('relevanciaConcurso.ressalva sem "estimativa pedagógica"');
      }
    }
  }

  const nv = r.niveis;
  if (!nv || typeof nv !== 'object') F('niveis ausente');
  else for (const k of NIVEIS_KEYS) {
    if (txt(nv[k]).trim().length < 180) F(`niveis.${k} < 180 (${txt(nv[k]).trim().length})`);
  }

  if (!Array.isArray(r.comparacoes) || r.comparacoes.length < 1) F('comparacoes < 1');
  else r.comparacoes.forEach((c, i) => {
    if (!txt(c.tema).trim()) F(`comparacoes[${i}].tema vazio`);
    if (!c.a || !txt(c.a.rotulo).trim() || !txt(c.a.texto).trim()) F(`comparacoes[${i}].a incompleto`);
    if (!c.b || !txt(c.b.rotulo).trim() || !txt(c.b.texto).trim()) F(`comparacoes[${i}].b incompleto`);
    if (!txt(c.diferencaGabarito).trim()) F(`comparacoes[${i}].diferencaGabarito vazio`);
  });

  if (!Array.isArray(r.pegadinhas) || r.pegadinhas.length < 2) F('pegadinhas < 2');
  else r.pegadinhas.forEach((p, i) => {
    if (!txt(p.afirmacaoEquivocada).trim()) F(`pegadinhas[${i}].afirmacaoEquivocada vazia`);
    if (!txt(p.porqueErrada).trim()) F(`pegadinhas[${i}].porqueErrada vazia`);
    if (!txt(p.versaoCorreta).trim()) F(`pegadinhas[${i}].versaoCorreta vazia`);
  });

  const rs = r.resumoEstruturado;
  if (!rs || typeof rs !== 'object') F('resumoEstruturado ausente');
  else {
    const min = MIN_RESUMO;
    for (const [k, m] of Object.entries(min)) {
      if (!Array.isArray(rs[k]) || rs[k].length < m) F(`resumoEstruturado.${k} < ${m}`);
      else if (rs[k].some((x) => !txt(x).trim())) F(`resumoEstruturado.${k} contém item vazio`);
    }
  }

  const ex = r.exemplosDetalhados;
  const tipos = TIPOS_EXEMPLO;
  if (!Array.isArray(ex) || ex.length !== 3) F(`exemplosDetalhados !== 3 (${Array.isArray(ex) ? ex.length : 'não é array'})`);
  else ex.forEach((e, i) => {
    if (e.tipo !== tipos[i]) F(`exemplosDetalhados[${i}].tipo !== ${tipos[i]} (${e.tipo})`);
    for (const [k, min] of Object.entries(MIN_EX)) {
      if (txt(e[k]).trim().length < min) F(`exemplosDetalhados[${i}].${k} < ${min} (${txt(e[k]).trim().length})`);
    }
    if (arr(e.conceitos).length < 2) F(`exemplosDetalhados[${i}].conceitos < 2`);
    if (arr(e.execucao).length < 3) F(`exemplosDetalhados[${i}].execucao < 3`);
    if (arr(e.errosFrequentes).length < 2) F(`exemplosDetalhados[${i}].errosFrequentes < 2`);
    for (const k of ['conceitos', 'execucao', 'errosFrequentes']) {
      if (arr(e[k]).some((x) => !txt(x).trim())) F(`exemplosDetalhados[${i}].${k} contém item vazio`);
    }
  });

  // placeholders + marcadores técnicos + duplicação intra-registro
  const locais = [];
  (function walk(v, pfx) {
    if (typeof v === 'string') {
      const ph = temPlaceholder(v);
      if (ph) F(`placeholder proibido "${ph}" em ${pfx}: "${v.substring(0, 90)}"`);
      // `relacoes` é a única exceção (IDs reais são exigidos ali).
      // Em `preRequisitos` o pré-requisito é descrito em linguagem natural.
      const mc = temMarcador(v, pfx);
      if (mc) F(`marcador técnico proibido (${mc}) em ${pfx}: "${v.substring(0, 90)}"`);
      if (v.trim().length >= 120) locais.push({ pfx, t: norm(v) });
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${pfx}[${i}]`));
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], `${pfx}.${k}`);
  })(r, '');
  for (let i = 0; i < locais.length; i++) {
    for (let j = i + 1; j < locais.length; j++) {
      if (locais[i].t === locais[j].t) F(`duplicação literal (>=120) entre ${locais[i].pfx} e ${locais[j].pfx}`);
    }
  }

  // --- Schema estrito: nenhuma chave fora do contrato ---
  verificarChaves(r, SCHEMA_CHAVES.registro, 'registro', falhas, id);
  if (oe && typeof oe === 'object') {
    verificarChaves(oe, SCHEMA_CHAVES.orientacaoEstrategica, 'orientacaoEstrategica', falhas, id);
    if (oe.relevanciaConcurso && typeof oe.relevanciaConcurso === 'object') {
      verificarChaves(oe.relevanciaConcurso, SCHEMA_CHAVES.relevanciaConcurso, 'relevanciaConcurso', falhas, id, ['ressalva']);
    }
  }
  if (nv && typeof nv === 'object') verificarChaves(nv, SCHEMA_CHAVES.niveis, 'niveis', falhas, id);
  if (Array.isArray(r.comparacoes)) r.comparacoes.forEach((c, i) => {
    verificarChaves(c, SCHEMA_CHAVES.comparacao, `comparacoes[${i}]`, falhas, id);
    if (c && typeof c === 'object') {
      verificarChaves(c.a, SCHEMA_CHAVES.comparacaoLado, `comparacoes[${i}].a`, falhas, id);
      verificarChaves(c.b, SCHEMA_CHAVES.comparacaoLado, `comparacoes[${i}].b`, falhas, id);
    }
  });
  if (Array.isArray(r.pegadinhas)) r.pegadinhas.forEach((p, i) => verificarChaves(p, SCHEMA_CHAVES.pegadinha, `pegadinhas[${i}]`, falhas, id));
  if (rs && typeof rs === 'object') verificarChaves(rs, SCHEMA_CHAVES.resumoEstruturado, 'resumoEstruturado', falhas, id);
  if (Array.isArray(r.exemplosDetalhados)) r.exemplosDetalhados.forEach((e, i) => verificarChaves(e, SCHEMA_CHAVES.exemplo, `exemplosDetalhados[${i}]`, falhas, id));

  return locais;
}

const file = process.argv[2];
if (!file) {
  console.error('Uso: node scripts/validar-lote.mjs <arquivo-parcial.js>');
  process.exit(2);
}
const abs = path.resolve(process.cwd(), file);
if (!fs.existsSync(abs)) {
  console.error(`Arquivo não encontrado: ${abs}`);
  process.exit(2);
}
const code = fs.readFileSync(abs, 'utf8');
const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
if (!m) {
  console.error('Não foi encontrado `const nome = {` no arquivo.');
  process.exit(2);
}
const ctx = vm.createContext({ console });
const obj = vm.runInContext(`(function(){ ${code}; return ${m[1]}; })()`, ctx, { filename: path.basename(abs) });

const falhas = [];
const avisos = [];
const duplicatasGlobais = new Map();
for (const [id, rec] of Object.entries(obj)) {
  const locais = validarRegistro(id, rec, falhas, avisos);
  for (const l of locais) {
    if (!duplicatasGlobais.has(l.t)) duplicatasGlobais.set(l.t, { id, pfx: l.pfx });
    else {
      const anterior = duplicatasGlobais.get(l.t);
      falhas.push(`duplicação literal (>=120) entre ${anterior.id}.${anterior.pfx} e ${id}.${l.pfx}`);
    }
  }
}

console.log(`Lote: ${path.basename(abs)} (const ${m[1]}) — registros: ${Object.keys(obj).length}`);
if (falhas.length) {
  console.log(`FALHAS: ${falhas.length}`);
  falhas.slice(0, 40).forEach((f) => console.log('  - ' + f));
  if (falhas.length > 40) console.log(`  ... e mais ${falhas.length - 40} falhas`);
} else {
  console.log('FALHAS: 0 — lote conforme o contrato.');
}
if (avisos.length) {
  console.log(`AVISOS: ${avisos.length}`);
  avisos.slice(0, 20).forEach((w) => console.log('  - ' + w));
}
process.exit(falhas.length ? 1 : 0);
