#!/usr/bin/env node
/* corrigir-relacoes-lotes.mjs — normaliza `orientacaoEstrategica.relacoes` dos lotes
 * da Seção 5 usando o CURRÍCULO como fonte de verdade.
 *
 * O que ele corrige (determinístico, sem inventar texto):
 *   1. ID de subtópico escrito fora da forma canônica
 *      (ex.: "módulo-1-unidade-1-tópico-1-sub-2" -> "modulo-1-unidade-1-topico-1-sub-2");
 *   2. Título abreviado no item, substituído pelo título EXATO do currículo;
 *   3. Item só com ID (sem título), completado com o título do currículo;
 *   4. CAUDA DE TÍTULO DUPLICADA — dano gerado por versões anteriores deste
 *      script, que capturavam o título até o PRIMEIRO ")" e reinseriam o
 *      trecho seguinte a cada execução (não idempotente). Exemplo real:
 *        "m6-u6-t3-s2 (Questões autorais comentadas (bloco 2) e síntese da
 *         unidade) e síntese da unidade) e síntese da unidade) — ..."
 *      → "m6-u6-t3-s2 (Questões autorais comentadas (bloco 2) e síntese da
 *         unidade) — ..."
 *
 * IDEMPOTÊNCIA: o item é REBUILT a partir do currículo (ID + título) e da
 * DESCRIÇÃO preservada; rodar o script N vezes produz sempre o mesmo
 * resultado. A descrição é localizada pelo separador " — " (o título canônico
 * pode conter " — ", como "SMTP — Simple Mail Transfer Protocol"; por isso o
 * parêntese do título é fechado por CONTAGEM DE PROFUNDIDADE, e o separador
 * procurado é o ÚLTIMO " — " do resto — as descrições canônicas do corpus não
 * contêm " — ", o que é auditado por `scripts/auditar-template-didatico.mjs`).
 *
 * O que ele NÃO toca (reporta para correção por agente de autoria):
 *   - itens em prosa ("Módulo 4 (segurança e conformidade) — ...");
 *   - itens cujo ID não existe no currículo (referência inventada);
 *   - descrições em prosa genérica ou boilerplate (apenas reportadas).
 *
 * Uso:
 *   node scripts/corrigir-relacoes-lotes.mjs --dry-run
 *   node scripts/corrigir-relacoes-lotes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const DATA = path.join(repoRoot, 'apostila-ia', 'assets', 'data');
const LOTE_DIR = path.join(repoRoot, 'scripts', 'lotes');
const dryRun = process.argv.includes('--dry-run');

function carregar(file) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/const\s+([A-Za-z0-9_]+)\s*=\s*[\[{]/);
  if (!m) throw new Error(`const não encontrado em ${file}`);
  return { nome: m[1], obj: vm.runInContext(`(function(){ ${c}; return ${m[1]}; })()`, vm.createContext({ console })) };
}
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

// --- currículo: fonte de verdade dos IDs e títulos ---
const curriculum = {};
for (const f of ['curriculum.js'].concat([2, 3, 4, 5, 6, 7, 8].map(i => `curriculum_m${i}.js`))) {
  const { obj } = carregar(path.join(DATA, f));
  for (const mod of Object.values(obj)) {
    if (!mod || !Array.isArray(mod.unidades)) continue;
    for (const u of mod.unidades) {
      for (const t of u.topicos || []) {
        for (const s of t.subtopicos || []) {
          curriculum[norm(s.id)] = { id: s.id, titulo: s.titulo, modulo: u.id, topico: t.titulo };
        }
      }
    }
  }
}

// Fecha o parêntese do título por contagem de PROFUNDIDADE — o título do
// currículo pode conter parênteses (ex.: "Temas e variações visuais
// (Design > Temas)"), e parar no primeiro ")" truncaria o título.
function fecharParen(s, inicio) {
  let depth = 0;
  for (let i = inicio; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

const SEP = ' — ';

/**
 * Reconstrói um item de `relacoes` a partir do currículo.
 * Retorna null quando o item não é normalizável (prosa / ID desconhecido).
 */
function reconstruir(item, achado) {
  const prefixo = `${achado.id} (${achado.titulo})`;

  // (A) item já canônico — nada a fazer.
  if (item === prefixo) return { item: prefixo, descricao: '', mudou: false };

  // (B) item COM parêntese: extrai a descrição pelo fim do parêntese.
  const m = /^([^\s(]+)\s*\(/.exec(item);
  if (m) {
    const abre = item.indexOf('(', m[1].length);
    const fecha = fecharParen(item, abre);
    if (fecha === -1) return null; // parêntese desbalanceado: requer agente
    const resto = item.slice(fecha + 1);
    let descricao;
    if (resto.startsWith(SEP)) descricao = resto.slice(SEP.length);
    else if (resto === '') descricao = '';
    else {
      // provável cauda de título duplicada: a descrição vem do ÚLTIMO " — ".
      const i = resto.lastIndexOf(SEP);
      if (i === -1) descricao = '';
      else descricao = resto.slice(i + SEP.length);
    }
    const novo = descricao ? `${prefixo}${SEP}${descricao}` : prefixo;
    return { item: novo, descricao, mudou: novo !== item };
  }

  // (C) item só com ID (sem parêntese): "<id>" ou "<id> — descrição".
  const m2 = /^([^\s(]+)(?:\s*—\s*([\s\S]*))?$/.exec(item);
  if (!m2) return null;
  const achadoId = curriculum[norm(m2[1])];
  if (!achadoId) return null;
  const descricao = (m2[2] || '').trim();
  const novo = descricao ? `${prefixo}${SEP}${descricao}` : prefixo;
  return { item: novo, descricao, mudou: novo !== item };
}

// Descrições em prosa genérica — não são erro de forma, mas QUALIDADE a
// corrigir por agente de autoria (reportadas, não alteradas aqui).
const GENERICAS = [
  /\btema correlato\b/i,
  /\bn[aã]o incluidas? neste lote\b/i,
  /\bde mesmo tema\b/i,
  /\baplica a distinção obrigatória da unidade\b/i,
  /\bsubtópico existente do Módulo\b/i,
  /\btemas? (?:próximo|anterior)\b/i,
  /\bretorno reproduzível\b/i
];

let camposAlterados = 0;
let itensAlterados = 0;
let caudaDuplicada = 0;
const desconhecidos = [];
const prosa = [];
const genericas = [];
const duplicados = [];

for (const f of fs.readdirSync(LOTE_DIR).filter(x => x.endsWith('.js')).sort()) {
  const file = path.join(LOTE_DIR, f);
  const { nome, obj } = carregar(file);
  let mudou = false;

  for (const [id, rec] of Object.entries(obj)) {
    const oe = rec?.orientacaoEstrategica;
    if (!oe || !Array.isArray(oe.relacoes)) continue;
    let mudouRegistro = false;

    oe.relacoes = oe.relacoes.map((item) => {
      if (typeof item !== 'string') return item;
      const rid = /^([^\s(]+)/.exec(item)?.[1] || '';
      const achado = curriculum[norm(rid)];
      if (!achado) { desconhecidos.push({ arquivo: f, id, item }); return item; }

      const r = reconstruir(item, achado);
      if (!r) { prosa.push({ arquivo: f, id, item }); return item; }
      if (r.mudou) {
        itensAlterados++;
        mudouRegistro = true;
        // a cauda duplicada se manifesta como parênteses extras no item original
        if (/\)\s*\)/.test(item) || /\) e |\) e\b/.test(item)) caudaDuplicada++;
      }
      if (r.descricao && GENERICAS.some(re => re.test(r.descricao))) {
        genericas.push({ arquivo: f, id, item: r.item });
      }
      return r.item;
    });

    // Itens idênticos dentro do mesmo registro: quase-duplicata literal.
    const vistos = new Set();
    oe.relacoes.forEach((it) => {
      if (vistos.has(it)) duplicados.push({ arquivo: f, id, item: it });
      vistos.add(it);
    });

    if (mudouRegistro) { camposAlterados++; mudou = true; }
  }

  if (mudou && !dryRun) {
    fs.writeFileSync(file, `const ${nome} = ${JSON.stringify(obj, null, 2)};\n`, 'utf8');
  }
}

console.log(`${dryRun ? '[DRY RUN] ' : ''}registros com relacoes ajustado: ${camposAlterados} | itens ajustados: ${itensAlterados} | caudas duplicadas reparadas: ${caudaDuplicada}`);
console.log(`itens em prosa (mantidos): ${prosa.length}`);
console.log(`itens com ID desconhecido (mantidos, exigem agente): ${desconhecidos.length}`);
for (const d of desconhecidos) console.log(`   - ${d.arquivo} ${d.id} :: ${d.item}`);
console.log(`descrições genéricas/boilerplate (mantidas, exigem agente): ${genericas.length}`);
for (const d of genericas) console.log(`   - ${d.arquivo} ${d.id} :: ${d.item}`);
console.log(`itens duplicados dentro do mesmo registro: ${duplicados.length}`);
for (const d of duplicados) console.log(`   - ${d.arquivo} ${d.id} :: ${d.item}`);
