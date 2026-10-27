/* personalization.js — Personalização e persistência estendida (Seção 11 e 14 do Escrita.txt).
 *
 * Implementa recursos que estavam ausentes/parciais:
 *   - Tema claro/escuro com toggle manual persistente (localStorage 'apostila-ia-tema').
 *   - Favoritos (localStorage 'apostila-ia-favoritos').
 *   - Marcadores pessoais (localStorage 'apostila-ia-marcadores').
 *   - Anotações de estudo por tópico (localStorage 'apostila-ia-anotacoes').
 *   - Histórico de navegação (localStorage 'apostila-ia-historico', máx. 50).
 *   - Retomada do último tópico visitado (localStorage 'apostila-ia-ultimo-topico').
 *   - Modo de foco (classe 'modo-foco' no <body>).
 *
 * Funciona em file:// (localStorage). Sem eval, sem fetch. Sanitização via esc().
 * Expõe window.ApostilaPersonalizacao.
 */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function disponivel() {
    try {
      if (typeof localStorage === 'undefined' || localStorage === null) return false;
      localStorage.setItem('__probe_p__', '1');
      localStorage.removeItem('__probe_p__');
      return true;
    } catch (e) { return false; }
  }

  function lerChave(chave, fallback) {
    if (!disponivel()) return fallback;
    try {
      var raw = localStorage.getItem(chave);
      if (raw === null || raw === '') return fallback;
      var obj = JSON.parse(raw);
      return (obj === null || obj === undefined) ? fallback : obj;
    } catch (e) { return fallback; }
  }

  function escreverChave(chave, valor) {
    if (!disponivel()) return false;
    try { localStorage.setItem(chave, JSON.stringify(valor)); return true; }
    catch (e) { return false; }
  }

  /* ---------- Tema ---------- */
  var CHAVE_TEMA = 'apostila-ia-tema';
  function obterTema() { return lerChave(CHAVE_TEMA, null); } // 'dark' | 'light' | null (sistema)
  function aplicarTema(valor) {
    var html = document.documentElement;
    if (valor === 'dark') html.setAttribute('data-theme', 'dark');
    else if (valor === 'light') html.removeAttribute('data-theme');
    else {
      // sistema
      var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (dark) html.setAttribute('data-theme', 'dark'); else html.removeAttribute('data-theme');
    }
  }
  function definirTema(valor) {
    escreverChave(CHAVE_TEMA, valor);
    aplicarTema(valor);
  }
  function alternarTema() {
    var atual = obterTema();
    if (atual === null) atual = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'dark' : 'light';
    definirTema(atual === 'dark' ? 'light' : 'dark');
  }

  /* ---------- Favoritos ---------- */
  var CHAVE_FAV = 'apostila-ia-favoritos';
  function lerFavoritos() { var v = lerChave(CHAVE_FAV, []); return Array.isArray(v) ? v : []; }
  function escreverFavoritos(arr) { return escreverChave(CHAVE_FAV, arr); }
  function ehFavorito(id) { return lerFavoritos().indexOf(id) !== -1; }
  function alternarFavorito(id) {
    if (typeof id !== 'string' || id === '') return false;
    var arr = lerFavoritos();
    var idx = arr.indexOf(id);
    if (idx === -1) arr.push(id); else arr.splice(idx, 1);
    escreverFavoritos(arr);
    return idx === -1;
  }

  /* ---------- Marcadores pessoais ---------- */
  var CHAVE_MARC = 'apostila-ia-marcadores';
  function lerMarcadores() { var v = lerChave(CHAVE_MARC, []); return Array.isArray(v) ? v : []; }
  function escreverMarcadores(arr) { return escreverChave(CHAVE_MARC, arr); }
  function adicionarMarcador(topico, nota) {
    if (typeof topico !== 'string' || topico === '') return false;
    var arr = lerMarcadores();
    arr.push({ topico: topico, nota: String(nota || ''), data: new Date().toISOString() });
    // limitar a 200
    if (arr.length > 200) arr = arr.slice(arr.length - 200);
    return escreverMarcadores(arr);
  }
  function removerMarcadores(topico) {
    var arr = lerMarcadores().filter(function (m) { return m.topico !== topico; });
    return escreverMarcadores(arr);
  }

  /* ---------- Anotações de estudo ---------- */
  var CHAVE_ANOT = 'apostila-ia-anotacoes';
  function lerAnotacoes() { var v = lerChave(CHAVE_ANOT, {}); return (v && typeof v === 'object' && !Array.isArray(v)) ? v : {}; }
  function escreverAnotacoes(obj) { return escreverChave(CHAVE_ANOT, obj); }
  function obterAnotacao(topico) { var o = lerAnotacoes(); return o[topico] || ''; }
  function salvarAnotacao(topico, texto) {
    if (typeof topico !== 'string' || topico === '') return false;
    var o = lerAnotacoes();
    if (texto === null || String(texto).trim() === '') delete o[topico];
    else o[topico] = String(texto);
    return escreverAnotacoes(o);
  }

  /* ---------- Histórico de navegação ---------- */
  var CHAVE_HIST = 'apostila-ia-historico';
  function lerHistorico() { var v = lerChave(CHAVE_HIST, []); return Array.isArray(v) ? v : []; }
  function escreverHistorico(arr) { return escreverChave(CHAVE_HIST, arr); }
  function registrarVisita(id) {
    if (typeof id !== 'string' || id === '') return false;
    var arr = lerHistorico();
    // remover duplicata anterior
    arr = arr.filter(function (x) { return x !== id; });
    arr.push(id);
    if (arr.length > 50) arr = arr.slice(arr.length - 50);
    return escreverHistorico(arr);
  }

  /* ---------- Retomada do último tópico ---------- */
  var CHAVE_ULTIMO = 'apostila-ia-ultimo-topico';
  function obterUltimoTopico() { return lerChave(CHAVE_ULTIMO, null); }
  function definirUltimoTopico(id) {
    if (typeof id !== 'string' || id === '') return false;
    return escreverChave(CHAVE_ULTIMO, id);
  }

  /* ---------- Modo de foco ---------- */
  function modoFocoAtivo() { return document.body.classList.contains('modo-foco'); }
  function alternarModoFoco() {
    document.body.classList.toggle('modo-foco');
    return modoFocoAtivo();
  }

  /* ---------- UI mínima: injeção de controles no painel de conteúdo ---------- */
  function injetarControles() {
    // Toggle de tema no header (se existir)
    var header = document.querySelector('header') || document.querySelector('#app-header');
    if (header && !header.querySelector('.theme-toggle-btn')) {
      var btn = document.createElement('button');
      btn.className = 'theme-toggle-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Alternar tema claro/escuro');
      btn.textContent = '🌓';
      btn.addEventListener('click', alternarTema);
      header.appendChild(btn);
    }
    // Botão de modo foco
    if (header && !header.querySelector('.focus-toggle-btn')) {
      var fbtn = document.createElement('button');
      fbtn.className = 'focus-toggle-btn';
      fbtn.type = 'button';
      fbtn.setAttribute('aria-label', 'Alternar modo de foco');
      fbtn.textContent = '🎯';
      fbtn.addEventListener('click', alternarModoFoco);
      header.appendChild(fbtn);
    }
  }

  /* ---------- Integração com navegação ---------- */
  function aoNavegar(topicoId) {
    if (typeof topicoId === 'string' && topicoId !== '') {
      registrarVisita(topicoId);
      definirUltimoTopico(topicoId);
    }
  }

  /* ---------- Inicialização ---------- */
  function init() {
    // tema inicial
    aplicarTema(obterTema());
    injetarControles();
    // retomada: se houver último tópico e a página carregou, tentar abrir (sem forçar)
    // (a navegação real é feita por navigation.js; aqui apenas registramos a intenção)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  var api = {
    CHAVE_TEMA: CHAVE_TEMA,
    CHAVE_FAV: CHAVE_FAV,
    CHAVE_MARC: CHAVE_MARC,
    CHAVE_ANOT: CHAVE_ANOT,
    CHAVE_HIST: CHAVE_HIST,
    CHAVE_ULTIMO: CHAVE_ULTIMO,
    obterTema: obterTema,
    definirTema: definirTema,
    alternarTema: alternarTema,
    aplicarTema: aplicarTema,
    lerFavoritos: lerFavoritos,
    ehFavorito: ehFavorito,
    alternarFavorito: alternarFavorito,
    lerMarcadores: lerMarcadores,
    adicionarMarcador: adicionarMarcador,
    removerMarcadores: removerMarcadores,
    lerAnotacoes: lerAnotacoes,
    obterAnotacao: obterAnotacao,
    salvarAnotacao: salvarAnotacao,
    lerHistorico: lerHistorico,
    registrarVisita: registrarVisita,
    obterUltimoTopico: obterUltimoTopico,
    definirUltimoTopico: definirUltimoTopico,
    modoFocoAtivo: modoFocoAtivo,
    alternarModoFoco: alternarModoFoco,
    aoNavegar: aoNavegar
  };

  if (typeof window !== 'undefined') {
    window.ApostilaPersonalizacao = api;
  }
})();
