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
 * 1) Fusão questions.js + questions_m4..m8 por id → total === 399; distribuição
 *    por módulo {1:44, 2:54, 3:47, 4:85, 5:42, 6:47, 7:40, 8:40}; 0 ids
 *    duplicados.
 * 2) Aplica o validarQuestao REAL do quiz-engine.js (carregado em contexto vm
 *    com stubs mínimos de DOM, listeners de DOMContentLoaded disparados;
 *    window.QuizApp exposto) e espera 0 reprovadas.
 * 3) Contagem de flashcards (flashcards_m1..m8) → total 460 + mapa exato por
 *    módulo {1:66, 2:56, 3:68, 4:54, 5:66, 6:50, 7:50, 8:50}.
 * 4) Cada tag <script src> do index.html resolve para arquivo existente em
 *    disco, e a contagem total de tags é EXATAMENTE 39 (24 de dados + 15 de JS).
 * 5) manifest.webmanifest é JSON válido e a description menciona "399".
 * 6) Imprime níveis / formatos / estilos (contagens reais) para conferência.
 * 7) q-m4-32: id/formato/gabarito + CONTEÚDO — alternativa B cita os princípios
 *    reais do art. 3º (neutralidade, privacidade, dados pessoais; sem
 *    "suscetibilidade"/"portabilidade") e justificativa/analise.D não citam
 *    mais os arts. 8º/15 como fonte da vedação de filtragem/anonimato (a citação
 *    correta é art. 9º, §3º, e art. 19 — re-verificação do PR #5, 2026-10-23).
 * 8) q-m4-44: compara o escopo da LGPD e do Marco Civil; gabarito B e justificativa confirma que uma lei não substitui a outra.
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

  /* q-m4-32 + q-m4-44: conferência de id/formato/gabarito e — a partir da
   * re-verificação do PR #5 (2026-10-23) — de CONTEÚDO: a alternativa B de
   * q-m4-32 precisa citar os princípios reais do art. 3º (sem a lista
   * inventada anterior) e a justificativa/análise.D não podem mais citar os
   * arts. 8º/15 como fonte da vedação de filtragem/anonimato. */
  function pegar(id) {
    return fundidos.filter(function (q) { return q && q.id === id; })[0] || null;
  }
  function infoQuestao(q) {
    if (!q) return null;
    var altB = null;
    if (Array.isArray(q.alternativas)) {
      for (var i = 0; i < q.alternativas.length; i++) {
        if (q.alternativas[i] && q.alternativas[i].letra === 'B') altB = q.alternativas[i].texto || '';
      }
    }
    return {
      id: q.id, modulo: q.modulo, formato: q.formato, estilo: q.estilo,
      gabarito: q.gabarito,
      altB: altB,
      justificativa: typeof q.justificativa === 'string' ? q.justificativa : '',
      analiseD: (q.analise && typeof q.analise.D === 'string') ? q.analise.D : '',
      passa: (function () {
        try { return !!(window.QuizApp && window.QuizApp.validarQuestao(q)); } catch (e) { return false; }
      })()
    };
  }
  var q32info = infoQuestao(pegar('q-m4-32'));
  var q44info = infoQuestao(pegar('q-m4-44'));

  return {
    total: fundidos.length,
    duplicados: duplicados,
    porModulo: porModulo,
    reprovadas: reprovadas,
    niveis: niveis,
    formatos: formatos,
    estilos: estilos,
    q32: q32info,
    q44: q44info
  };
})()`;

secao('3. FUSÃO DO BANCO + validarQuestao REAL');
let r = null;
try {
  r = vm.runInContext(exprFusao, ctx, { filename: '_fusao' });
} catch (e) {
  check('execução da fusão', false, e.message);
}

const ESPERADO_MODULO = { 1: 44, 2: 54, 3: 47, 4: 85, 5: 42, 6: 47, 7: 40, 8: 40 };
if (r) {
  check('total de questões fundidas === 399', r.total === 399, 'real=' + r.total + ', esperado=399');
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

/* --------------------------------------- conferência dedicada de q-m4-32/44 */
secao('4. q-m4-32 (CONTEÚDO legal do Marco Civil) + q-m4-44 (gabarito)');
const norm = (s) => String(s == null ? '' : s).toLowerCase();
if (r && r.q32) {
  const q = r.q32;
  check('q-m4-32 presente', true);
  check('id === "q-m4-32"', q.id === 'q-m4-32', 'real=' + q.id);
  check('modulo === 4', q.modulo === 4, 'real=' + q.modulo);
  check('formato === "mc"', q.formato === 'mc', 'real=' + q.formato);
  check('gabarito === "B"', q.gabarito === 'B', 'real=' + q.gabarito);
  check('passa no validarQuestao', q.passa === true);

  // Conteúdo da alternativa B: princípios reais do art. 3º.
  const altB = norm(q.altB);
  check('q-m4-32 alt.B cita "neutralidade", "privacidade" e "dados pessoais"',
    altB.includes('neutralidade') && altB.includes('privacidade') && altB.includes('dados pessoais'),
    'altB=' + JSON.stringify(q.altB));
  check('q-m4-32 alt.B NÃO contém "suscetibilidade" nem "portabilidade"',
    !altB.includes('suscetibilidade') && !altB.includes('portabilidade'));

  // Justificativa/análise.D: sem os artigos falsos como fonte (8º = filtragem,
  // 15 = anonimato) e com os artigos corretos (9º §3º / 19).
  const just = norm(q.justificativa);
  const anaD = norm(q.analiseD);
  check('q-m4-32 justificativa NÃO inclui "art. 8º veda filtragem"',
    !just.includes('art. 8º veda'), 'justificativa=' + JSON.stringify(q.justificativa.slice(0, 160) + '…'));
  check('q-m4-32 justificativa NÃO cita "art. 15"', !just.includes('art. 15'));
  check('q-m4-32 justificativa cita "art. 9º, §3º" e "(art. 19)"',
    just.includes('art. 9º, §3º') && just.includes('(art. 19)'));
  check('q-m4-32 analise.D NÃO cita "(art. 8º)" nem "(art. 15)" como fonte',
    !anaD.includes('(art. 8º)') && !anaD.includes('(art. 15)'));
  check('q-m4-32 analise.D cita "art. 9º, §3º" e "art. 19"',
    anaD.includes('art. 9º, §3º') && anaD.includes('art. 19'));
} else {
  check('q-m4-32 presente', false, 'não encontrada no banco fundido');
}

if (r && r.q44) {
  const q44 = r.q44;
  check('q-m4-44 presente', true);
  check('q-m4-44 gabarito === "B"', q44.gabarito === 'B', 'real=' + q44.gabarito);
  const just44 = norm(q44.justificativa);
  check('q-m4-44 justificativa compara LGPD e Marco Civil',
    just44.includes('lgpd') && just44.includes('marco civil') && just44.includes('substitui'));
} else {
  check('q-m4-44 presente', false, 'não encontrada no banco fundido');
}

/* ------------------------------------------------------------ flashcards 460 */
secao('5. FLASHCARDS (flashcards_m1..m8 → total 460)');
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
check('flashcards total === 460', flashTotal === 460, 'real=' + flashTotal + ', esperado=460');
check('nenhum módulo de flashcards ausente', flashFaltantes.length === 0,
  flashFaltantes.length ? ('ausentes: ' + flashFaltantes.join(', ')) : 'm1..m8 presentes');
const FLASH_ESPERADO = { 1: 66, 2: 56, 3: 68, 4: 54, 5: 66, 6: 50, 7: 50, 8: 50 };
const mapOk = Object.keys(FLASH_ESPERADO).every((m) => flashPorModulo[m] === FLASH_ESPERADO[m]);
check('mapa de flashcards por módulo === {1:66,2:56,3:68,4:54,5:66,6:50,7:50,8:50}', mapOk,
  'real=' + JSON.stringify(flashPorModulo) + ', esperado=' + JSON.stringify(FLASH_ESPERADO));
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
check('tags <script src> do index.html === 39', scriptSrcs.length === 39,
  'real=' + scriptSrcs.length + ', esperado=39');
let externas = 0, locais = 0, ausentes = [];
for (const src of scriptSrcs) {
  if (/^(https?:)?\/\//i.test(src) || /^(data|blob):/i.test(src)) { externas++; continue; }
  locais++;
  const abs = path.resolve(APP, src);
  if (!fs.existsSync(abs)) ausentes.push(src);
}
check('todas as tags locais resolvem p/ arquivo em disco (' + locais + ' locais, ' + externas + ' externas)',
  ausentes.length === 0, ausentes.length ? ('ausentes: ' + ausentes.join(', ')) : 'nenhum 404');

/* ---------------------------------------------------- manifest: JSON + "399" */
secao('7. manifest.webmanifest → JSON VÁLIDO + description com "399"');
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.webmanifest'), 'utf8'));
  check('manifest é JSON válido', true);
} catch (e) {
  check('manifest é JSON válido', false, e.message);
}
if (manifest) {
  const desc = typeof manifest.description === 'string' ? manifest.description : '';
  check('description menciona "399"', desc.includes('399'), 'description contém 399=' + desc.includes('399'));
  check('description contém a contagem de questões 399 e não a contagem anterior 389 questões', desc.includes('399 questões') && !desc.includes('389 questões'), '');
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
