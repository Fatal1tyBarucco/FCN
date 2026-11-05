#!/usr/bin/env node
/* restaurar-acentuacao-lote.mjs — restaura acentuação omitida em lotes de enriquecimento.
 *
 * Uso:
 *   node scripts/restaurar-acentuacao-lote.mjs scripts/lotes/enriParcialM3U5P3.js
 *   node scripts/restaurar-acentuacao-lote.mjs scripts/lotes            # varre o diretório
 *
 * Aplica o mapa `corrigirAcentuacao` (scripts/lib/enriquecimento-comum.mjs) a
 * TODOS os campos de prosa do lote, pulando os campos enum do schema
 * (`classificacao`, `dificuldade`, `relacoes`, `tipo`) — nesses, o valor é
 * identificador e não deve ser acentuado.
 *
 * Não inventa texto: apenas troca a grafia sem acento pela acentuada
 * equivalente, de forma determinística. Ao final, reexecuta o detector de
 * artefatos e reporta o que restou (inclusive palavras ambíguas, que exigem
 * decisão editorial humana).
 */
'use strict';

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { corrigirAcentuacao } from './lib/enriquecimento-comum.mjs';
import { varrerArtefatosRegistro, CAMPOS_NAO_PROSA } from './lib/artefatos-texto-lib.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function resolverAlvos(argumentos) {
  if (argumentos.length === 0) {
    return fs.readdirSync(path.join(repoRoot, 'scripts', 'lotes'))
      .filter(f => f.endsWith('.js'))
      .map(f => path.join(repoRoot, 'scripts', 'lotes', f));
  }
  const out = [];
  for (const arg of argumentos) {
    const abs = path.resolve(process.cwd(), arg);
    if (!fs.existsSync(abs)) {
      console.error(`[ERRO] ${arg}: não encontrado`);
      process.exitCode = 2;
      continue;
    }
    if (fs.statSync(abs).isDirectory()) {
      fs.readdirSync(abs).filter(f => f.endsWith('.js')).forEach(f => out.push(path.join(abs, f)));
    } else {
      out.push(abs);
    }
  }
  return out;
}

function carregarLote(abs) {
  const code = fs.readFileSync(abs, 'utf8');
  const m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\{/);
  if (!m) throw new Error('const não encontrada');
  const nome = m[1];
  const obj = vm.runInContext(`(function(){ ${code}; return ${nome}; })()`, vm.createContext({ console }));
  return { nome, obj };
}

function corrigirLote(obj) {
  const aplicadas = new Map();
  function walk(v, caminho) {
    if (typeof v === 'string') {
      if (CAMPOS_NAO_PROSA.some(re => re.test(caminho))) return v;
      const { texto, aplicadas: lista } = corrigirAcentuacao(v);
      for (const item of lista) aplicadas.set(item, (aplicadas.get(item) || 0) + 1);
      return texto;
    }
    if (Array.isArray(v)) return v.map((x, i) => walk(x, `${caminho}[${i}]`));
    if (v && typeof v === 'object') {
      const out = {};
      for (const k of Object.keys(v)) out[k] = walk(v[k], caminho ? `${caminho}.${k}` : k);
      return out;
    }
    return v;
  }
  return { novo: walk(obj, ''), aplicadas };
}

const arquivos = resolverAlvos(process.argv.slice(2));
let totalAplicadas = 0;
let totalRestantes = 0;

for (const abs of arquivos) {
  const rel = path.relative(repoRoot, abs).split(path.sep).join('/');
  let nome, obj;
  try {
    ({ nome, obj } = carregarLote(abs));
  } catch (e) {
    console.error(`[ERRO] ${rel}: ${e.message}`);
    process.exitCode = 1;
    continue;
  }
  const { novo, aplicadas } = corrigirLote(obj);
  const n = aplicadas.size;
  if (n > 0) {
    const conteudo = `const ${nome} = ${JSON.stringify(novo, null, 2)};\n`;
    fs.writeFileSync(abs, conteudo, 'utf8');
    totalAplicadas += [...aplicadas.values()].reduce((a, b) => a + b, 0);
  }
  const restantes = [];
  for (const [id, rec] of Object.entries(novo)) restantes.push(...varrerArtefatosRegistro(id, rec));
  totalRestantes += restantes.length;
  if (n > 0 || restantes.length > 0) {
    console.log(`\n${rel}: ${n} palavra(s) corrigida(s) | ${restantes.length} campo(s) ainda com artefato`);
    if (restantes.length) {
      for (const r of restantes.slice(0, 6)) console.log(`  - ${r.id}${r.caminho}: ${r.achados.join('; ')}`);
      if (restantes.length > 6) console.log(`  ... e mais ${restantes.length - 6}`);
    }
  }
}

console.log(`\nArquivos varridos: ${arquivos.length} | correções aplicadas: ${totalAplicadas} | campos com artefato restantes: ${totalRestantes}`);
process.exit(totalRestantes ? 1 : 0);
