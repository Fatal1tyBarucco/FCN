#!/usr/bin/env node
/* verificar-estrutura.js — ARTEFATO REPRODUZÍVEL das verificações estruturais
 * do incremento P1-D (2026-10-22). Node puro, sem dependências, sem eval.
 *
 * ----------------------------------------------------------------------------
 * NOTA DE HISTÓRICO DE VERIFICAÇÃO
 * ----------------------------------------------------------------------------
 * Este script cobre de forma REPRODUZÍVEL as verificações estruturais
 * principais do banco de questões, flashcards, tags do index.html e manifest.
 * Os "smoke tests históricos" (65 / 42 / 111 asserts) citados nos cabeçalhos
 * de search.js, audio.js e simulators.js foram executados em sessões
 * anteriores e seus scripts NÃO foram versionados no repositório. Este script
 * não reproduz esses smoke tests de comportamento (UI/DOM simulado); ele
 * substitui apenas as verificações estruturais por um artefato versionado e
 * executável a qualquer momento (`node verificacao/verificar-estrutura.js`).
 *
 * ----------------------------------------------------------------------------
 * O QUE ESTE SCRIPT VERIFICA
 * ----------------------------------------------------------------------------
 * 1) Fusão questions.js + questions_m4..m8 por id → total === 365; distribuição
 *    por módulo {1:40, 2:40, 3:40, 4:85, 5:40, 6:40, 7:40, 8:40}; 0 ids
 *    duplicados.
 * 2) Aplica o validarQuestao REAL do quiz-engine.js (carregado em contexto vm
 *    com stubs mínimos de DOM, listeners de DOMContentLoaded disparados;
 *    window.QuizApp exposto) e espera 0 reprovadas.
 * 3) Contagem de flashcards (flashcards_m1..m8) → total 404.
 * 4) Cada tag <script src> do index.html resolve para arquivo existente em disco.
 * 5) manifest.webmanifest é JSON válido e a description menciona "365".
 * 6) Imprime níveis / formatos / estilos (contagens reais) para conferência.
 * 7) Confere que a questão q-m4-32 mantém id/formato e passa no validarQuestao.
 *
 * Sai com exit code 1 se qualquer verificação falhar.
 * ----------------------------------------------------------------------------
 * SEM eval. SEM fetch. Funciona offline (abertura direta / CI).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');           // raiz do repositório
const APP = path.join(ROOT, 'apostila-ia');           // pasta do app (publicada)
const DATA = path.join(APP, 'assets', 'data');
const JS = path.join(APP, 'assets', 'js');

/* ---------------------------------------------------------------- helpers -- */
let falhas = 0;
function check(nome, ok, detalhe) {
  const marca = ok ? 'OK  ' : 'FALHA';
  console.log(`  [${marca}] ${nome}${detalhe ? ' — ' + detalhe : ''}`);
  if (!ok) falhas++;
  return ok;
}
function secao(titulo) {
  console.log('\n' + titulo);
  console.log('-'.repeat(Math.max(0, 72)));
}
function lerData(f) { return fs.readFileSync(path.join(DATA, f), 'utf8'); }

/* ------------------------------------------------- contexto vm p/ dados+motor */
/* Stubs mínimos de DOM: capturamos o listener de DOMContentLoaded para disparar
 * manualmente; getElementById retorna null (a UI não monta, mas window.QuizApp
 * é atribuído fora do guard — ver quiz-engine.js ~1060). window/localStorage/
 * console fornecidos para as atribuições de cabeça de questions.js e para o
 * carregamento limpo do motor. */
const dceListeners = [];
const ctx = vm.createContext({
  console: { log() {}, warn() {}, error() {}, info() {} },
  localStorage: {
    _m: Object.create(null),
    getItem(k) { return (k in this._m) ? this._m[k] : null; },
    setItem(k, v) { this._m[k] = String(v); },
    removeItem(k) { delete this._m[k]; }
  },
  document: {
    addEventListener(ev, fn) { if (ev === 'DOMContentLoaded') dceListeners.push(fn); },
    getElementById() { return null; },
    removeEventListener() {}
  },
  setTimeout, clearTimeout
});
ctx.window = ctx; // window === global do contexto (padrão navegador)

/* Ordem de carga: dados primeiro (questões + flashcards), depois o motor. */
const arquivosDados = [
  'questions.js', 'questions_m4.js', 'questions_m5.js',
  'questions_m6.js', 'questions_m7.js', 'questions_m8.js',
  'flashcards_m1.js', 'flashcards_m2.js', 'flashcards_m3.js', 'flashcards_m4.js',
  'flashcards_m5.js', 'flashcards_m6.js', 'flashcards_m7.js', 'flashcards_m8.js'
];
secao('1. CARGA DOS DADOS (vm.runInContext, contexto isolado)');
for (const f of arquivosDados) {
  try {
    vm.runInContext(lerData(f), ctx, { filename: f });
    check(f + ' carregado', true);
  } catch (e) {
    check(f + ' carregado', false, e.message);
  }
}

/* Carrega o motor de simulados e dispara DOMContentLoaded. */
secao('2. CARGA DO MOTOR (quiz-engine.js) + DOMContentLoaded');
try {
  vm.runInContext(fs.readFileSync(path.join(JS, 'quiz-engine.js'), 'utf8'), ctx, { filename: 'quiz-engine.js' });
  check('quiz-engine.js avaliado', true);
  dceListeners.forEach((fn) => { try { fn(); } catch (e) { check('listener DOMContentLoaded', false, e.message); } });
  check('listeners de DOMContentLoaded disparados (' + dceListeners.length + ')', dceListeners.length > 0);
} catch (e) {
  check('quiz-engine.js avaliado', false, e.message);
}

const temQuizApp = vm.runInContext('typeof window.QuizApp === "object" && window.QuizApp !== null', ctx);
check('window.QuizApp exposto', temQuizApp);

/* --------------------------------------- fusão + validarQuestao (em contexto) */
/* Replica a fusão do index.html (concatena e deduplica por id) e aplica o
 * validarQuestao real (window.QuizApp.validarQuestao) a cada questão fundida. */
const exprFusao = `(function () {
  var fontes = [];
  if (typeof questoesBanco !== 'undefined') fontes.push(['questions.js', questoesBanco]);
  if (typeof moduleQuestions4 !== 'undefined') fontes.push(['questions_m4.js', moduleQuestions4]);
  if (typeof moduleQuestions5 !== 'undefined') fontes.push(['questions_m5.js', moduleQuestions5]);
  if (typeof moduleQuestions6 !== 'undefined') fontes.push(['questions_m6.js', moduleQuestions6]);
  if (typeof moduleQuestions7 !== 'undefined') fontes.push(['questions_m7.js', moduleQuestions7]);
  if (typeof moduleQuestions8 !== 'undefined') fontes.push(['questions_m8.js', moduleQuestions8]);

  var fundidos = [], vistos = Object.create(null), duplicados = [], fonteDe = {};
  fontes.forEach(function (p) {
    p[1].forEach(function (q) {
      if (!q || typeof q.id === 'undefined') return;
      if (vistos[q.id]) { duplicados.push(q.id + ' (' + p[0] + ')'); return; }
      vistos[q.id] = true; fundidos.push(q); fonteDe[q.id] = p[0];
    });
  });

  var porModulo = {}, niveis = {}, formatos = {}, estilos = {};
  fundidos.forEach(function (q) {
    porModulo[q.modulo] = (porModulo[q.modulo] || 0) + 1;
    niveis[q.nivel] = (niveis[q.nivel] || 0) + 1;
    formatos[q.formato] = (formatos[q.formato] || 0) + 1;
    estilos[q.estilo] = (estilos[q.estilo] || 0) + 1;
  });

  var reprovadas = [];
  fundidos.forEach(function (q) {
    var ok = false;
    try { ok = !!(window.QuizApp && window.QuizApp.validarQuestao && window.QuizApp.validarQuestao(q)); }
    catch (e) { ok = false; }
    if (!ok) reprovadas.push((q && q.id ? q.id : '(sem id)') + ' [' + fonteDe[q.id] + ']');
  });

  /* q-m4-32: conferência dedicada de id/formato/gabarito. */
  var q32 = fundidos.filter(function (q) { return q && q.id === 'q-m4-32'; })[0] || null;
  var q32info = q32 ? {
    id: q32.id, modulo: q32.modulo, formato: q32.formato, estilo: q32.estilo,
    gabarito: q32.gabarito, passa: (function () {
      try { return !!(window.QuizApp && window.QuizApp.validarQuestao(q32)); } catch (e) { return false; }
    })()
  } : null;

  return {
    total: fundidos.length,
    duplicados: duplicados,
    porModulo: porModulo,
    reprovadas: reprovadas,
    niveis: niveis,
    formatos: formatos,
    estilos: estilos,
    q32: q32info
  };
})()`;

secao('3. FUSÃO DO BANCO + validarQuestao REAL');
let r = null;
try {
  r = vm.runInContext(exprFusao, ctx, { filename: '_fusao' });
} catch (e) {
  check('execução da fusão', false, e.message);
}

const ESPERADO_MODULO = { 1: 40, 2: 40, 3: 40, 4: 85, 5: 40, 6: 40, 7: 40, 8: 40 };
if (r) {
  check('total de questões fundidas === 365', r.total === 365, 'real=' + r.total + ', esperado=365');
  check('0 ids duplicados', r.duplicados.length === 0,
    r.duplicados.length ? ('duplicados: ' + r.duplicados.join(', ')) : 'ok');
  for (const m of Object.keys(ESPERADO_MODULO)) {
    const real = r.porModulo[m] || 0;
    check('módulo ' + m + ' === ' + ESPERADO_MODULO[m] + ' questões', real === ESPERADO_MODULO[m],
      'real=' + real);
  }
  check('validarQuestao: 0 reprovadas', r.reprovadas.length === 0,
    r.reprovadas.length ? ('reprovadas: ' + r.reprovadas.join(', ')) : 'todas passaram');
}

/* -------------------------------------------- conferência dedicada de q-m4-32 */
secao('4. QUESTÃO q-m4-32 (id/formato preservados + valida)');
if (r && r.q32) {
  const q = r.q32;
  check('q-m4-32 presente', true);
  check('id === "q-m4-32"', q.id === 'q-m4-32', 'real=' + q.id);
  check('modulo === 4', q.modulo === 4, 'real=' + q.modulo);
  check('formato === "mc"', q.formato === 'mc', 'real=' + q.formato);
  check('gabarito === "B"', q.gabarito === 'B', 'real=' + q.gabarito);
  check('passa no validarQuestao', q.passa === true);
} else {
  check('q-m4-32 presente', false, 'não encontrada no banco fundido');
}

/* ------------------------------------------------------------ flashcards 404 */
secao('5. FLASHCARDS (flashcards_m1..m8 → total 404)');
/* No vm, `const` em topo de script é binding léxico do contexto (não é
 * propriedade de window). Para contar sem eval, avaliamos uma expressão
 * explícita por nome via vm.runInContext — nada é interpretado dinamicamente. */
const flashPorModulo = {};
let flashTotal = 0;
const flashFaltantes = [];
for (let m = 1; m <= 8; m++) {
  const nome = 'flashcardsM' + m;
  try {
    const len = vm.runInContext(
      'Array.isArray(' + nome + ') ? ' + nome + '.length : -1', ctx);
    if (typeof len === 'number' && len >= 0) { flashPorModulo[m] = len; flashTotal += len; }
    else { flashPorModulo[m] = 0; flashFaltantes.push(nome); }
  } catch (e) {
    flashPorModulo[m] = 0; flashFaltantes.push(nome + ' (' + e.message + ')');
  }
}
check('flashcards total === 404', flashTotal === 404, 'real=' + flashTotal + ', esperado=404');
check('nenhum módulo de flashcards ausente', flashFaltantes.length === 0,
  flashFaltantes.length ? ('ausentes: ' + flashFaltantes.join(', ')) : 'm1..m8 presentes');
console.log('       detalhe por módulo: ' + JSON.stringify(flashPorModulo));

/* ------------------------------------------- tags <script src> existem em disco */
secao('6. TAGS <script src> DO index.html → ARQUIVO EXISTE');
let idxHtml = '';
try {
  idxHtml = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
  check('index.html lido', true);
} catch (e) {
  check('index.html lido', false, e.message);
}
const scriptSrcs = [];
const reSrc = /<script[^>]*\ssrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
let mm;
while ((mm = reSrc.exec(idxHtml)) !== null) scriptSrcs.push(mm[1]);
check('encontradas tags <script src> (' + scriptSrcs.length + ')', scriptSrcs.length > 0);
let externas = 0, locais = 0, ausentes = [];
for (const src of scriptSrcs) {
  if (/^(https?:)?\/\//i.test(src) || /^(data|blob):/i.test(src)) { externas++; continue; }
  locais++;
  const abs = path.resolve(APP, src);
  if (!fs.existsSync(abs)) ausentes.push(src);
}
check('todas as tags locais resolvem p/ arquivo em disco (' + locais + ' locais, ' + externas + ' externas)',
  ausentes.length === 0, ausentes.length ? ('ausentes: ' + ausentes.join(', ')) : 'nenhum 404');

/* ---------------------------------------------------- manifest: JSON + "365" */
secao('7. manifest.webmanifest → JSON VÁLIDO + description com "365"');
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.webmanifest'), 'utf8'));
  check('manifest é JSON válido', true);
} catch (e) {
  check('manifest é JSON válido', false, e.message);
}
if (manifest) {
  const desc = typeof manifest.description === 'string' ? manifest.description : '';
  check('description menciona "365"', desc.includes('365'), 'description contém 365=' + desc.includes('365'));
  check('description menciona "365" e não contém "120"', !desc.includes('120'), '');
}

/* ------------------------------------------- níveis / formatos / estilos (info) */
secao('8. DISTRIBUIÇÃO REAL (contagens para conferência)');
if (r) {
  console.log('  por módulo : ' + JSON.stringify(r.porModulo));
  console.log('  por nível  : ' + JSON.stringify(r.niveis));
  console.log('  por formato: ' + JSON.stringify(r.formatos));
  console.log('  por estilo : ' + JSON.stringify(r.estilos));
}

/* ----------------------------------------------------------------- resumo --- */
secao('RESUMO');
if (falhas === 0) {
  console.log('  TODAS AS VERIFICAÇÕES ESTRUTURAIS PASSARAM (0 falhas).');
  process.exitCode = 0;
} else {
  console.log('  ' + falhas + ' verificação(ões) FALHARAM.');
  process.exitCode = 1;
}
