/* personalization.js — Personalização e persistência estendida (Seção 11 e 14 do Escrita.txt).
 *
 * Implementa recursos que estavam ausentes/parciais:
 *   - Tema claro/escuro com toggle manual persistente (FIX-04: fonte única de
 *     verdade = app.js/state.js, gravado em localStorage['apostila-ia-progresso'].theme;
 *     'apostila-ia-tema' é apenas fallback quando o SPA não está presente, e é lido
 *     UMA vez na migração — nunca mais gravado em uso normal).
 *   - Favoritos (localStorage 'apostila-ia-favoritos').
 *   - Marcadores pessoais (localStorage 'apostila-ia-marcadores').
 *   - Anotações de estudo por tópico (localStorage 'apostila-ia-anotacoes').
 *   - Histórico de navegação (localStorage 'apostila-ia-historico', máx. 50).
 *   - Retomada do último tópico visitado (localStorage 'apostila-ia-ultimo-topico').
 *   - Modo de foco (classe 'modo-foco' no <body>).
 *
 * Funciona em file:// (localStorage). Sem eval, sem fetch.
 * Expõe window.ApostilaPersonalizacao.
 */
(function () {
  'use strict';


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

  /* ---------- Tema (FIX-04: fonte única de verdade) ----------
   * Quando o SPA (app.js/state.js) está presente (window.App com applyTheme),
   * o tema é LIDO e GRAVADO via State (localStorage 'apostila-ia-progresso'
   * campo 'theme'), evitando dois controles divergentes. Sem o SPA, fallback
   * na chave própria 'apostila-ia-tema'. Nota: State.save() serializa o
   * objeto State inteiro; por isso a migração em init() grava DIRETO na
   * chave de progresso (sem State.save()) para não sobrescrever progresso
   * real com defaults antes do State.load().
   */
  var CHAVE_TEMA = 'apostila-ia-tema';
  var CHAVE_PROGRESSO = 'apostila-ia-progresso';

  function controladorTemaDisponivel() {
    return typeof window !== 'undefined' && typeof window.App !== 'undefined' &&
           window.App !== null && typeof window.App.applyTheme === 'function';
  }
  function estadoTemaAtual() {
    if (controladorTemaDisponivel() && typeof State !== 'undefined' && State.theme) {
      return State.theme;
    }
    return lerChave(CHAVE_TEMA, null); // 'dark' | 'light' | null (sistema) — fallback
  }
  function obterTema() {
    return estadoTemaAtual();
  }
  function aplicarTemaLocal(valor) {
    // FIX-04: CSS atual é :root escuro + override [data-theme="light"];
    // por isso SEMPRE definimos o atributo (removê-lo renderizaria escuro).
    var html = document.documentElement;
    var efetivo;
    if (valor === 'light' || valor === 'dark') efetivo = valor;
    else efetivo = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    html.setAttribute('data-theme', efetivo);
  }
  function aplicarTema(valor) {
    if (controladorTemaDisponivel()) {
      try { window.App.applyTheme(valor); } catch (e) { aplicarTemaLocal(valor); }
      return;
    }
    aplicarTemaLocal(valor);
  }
  function definirTema(valor) {
    if (controladorTemaDisponivel() && typeof State !== 'undefined') {
      var v = (valor === 'light') ? 'light' : 'dark';
      State.theme = v;
      if (typeof State.save === 'function') State.save(); // persiste em apostila-ia-progresso.theme
      aplicarTema(v); // atualiza atributo/rótulo do botão via App.applyTheme
      return;
    }
    escreverChave(CHAVE_TEMA, valor);
    aplicarTema(valor);
  }
  function alternarTema() {
    if (controladorTemaDisponivel() && typeof window.App.toggleTheme === 'function') {
      // Caminho normal: App.toggleTheme alterna State.theme, salva em
      // 'apostila-ia-progresso' e atualiza rótulo/atributo — fonte única.
      try { window.App.toggleTheme(); } catch (e) {
        definirTema(estadoTemaAtual() === 'light' ? 'dark' : 'light');
      }
      return;
    }
    var atual = obterTema();
    if (atual === null) atual = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'dark' : 'light';
    definirTema(atual === 'dark' ? 'light' : 'dark');
  }
  /* Migração única (FIX-04): se 'apostila-ia-tema' tem valor e
   * 'apostila-ia-progresso' NÃO tem campo 'theme', aproveita o valor uma vez.
   * A chave antiga NÃO é apagada (não descartar dados) e não é mais gravada. */
  function migrarTemaLegado() {
    if (!disponivel()) return false;
    var antigoRaw = null, novoRaw = null;
    try {
      antigoRaw = localStorage.getItem(CHAVE_TEMA);
      novoRaw = localStorage.getItem(CHAVE_PROGRESSO);
    } catch (e) { return false; }
    if (!antigoRaw) return false;
    var prog = null;
    if (novoRaw) { try { prog = JSON.parse(novoRaw); } catch (e) { prog = null; } }
    if (prog && typeof prog === 'object' && !Array.isArray(prog) && prog.theme) return false; // já migrado
    var antigo = null;
    try { antigo = JSON.parse(antigoRaw); } catch (e) { antigo = antigoRaw; }
    if (antigo !== 'dark' && antigo !== 'light') return false;
    if (!prog || typeof prog !== 'object' || Array.isArray(prog)) prog = {};
    prog.theme = antigo;
    try { localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(prog)); return true; }
    catch (e) { return false; }
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
    // Toggle de tema (FIX-04: só injeta se NENHUM controle de tema já existir —
    // #theme-toggle (index.html/app.js), .btn-theme ou .theme-toggle-btn)
    var controleTemaExistente = document.querySelector('#theme-toggle, .btn-theme, .theme-toggle-btn');
    var header = document.querySelector('header') || document.querySelector('#app-header');
    if (header && !controleTemaExistente) {
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
    migrarTemaLegado(); // aproveita valor antigo de 'apostila-ia-tema' UMA vez, sem apagar nada
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
