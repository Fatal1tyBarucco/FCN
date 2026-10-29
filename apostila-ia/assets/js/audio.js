/* audio.js — Leitura em voz alta (Seção 12.1 do Escrita.txt) via Web Speech API.
 *
 * ============================================================================
 * REGRAS DO PROJETO APLICADAS A ESTE ARQUIVO
 * ============================================================================
 * 1) SEM eval. SEM fetch. SEM módulos ES. Funciona em abertura direta file://
 *    (o texto lido vem do próprio DOM/localStorage — nada é buscado em rede).
 *    Auto-contido: injeta <style> escopado (id "aud-audio-style") no mount() e
 *    remove no destroy(). Usa variáveis CSS do :root (--primary-color, --text-
 *    color, --font-family) definidas em assets/css/styles.css.
 *
 * 2) API global EXIGIDA: window.AudioApp = { mount(el), destroy() }.
 *    Auto-monta no #audio-app no DOMContentLoaded (idempotente) — idempotência
 *    permite o wiring chamar AudioApp.mount explicitamente depois, no escopo
 *    correto da Etapa 5, sem duplicar nem lançar exceção.
 *
 * 3) HONESTIDADE DE DISPONIBILIDADE (Seção 3.1 + 12.1): speechSynthesis é uma
 *    API do NAVEGADOR — não existe no Node.js e os navegadores/Dispositivos não
 *    expõem necessariamente vozes pt-BR. Quando a API ou uma voz pt-BR não
 *    estiverem disponíveis, mostramos MENSAGEM VISÍVEL de indisponibilidade e
 *    desabilitamos os controles que dependem dela. NÃO afirmamos que todos os
 *    dispositivos têm a mesma voz ou qualidade de síntese.
 *
 * 4) PWA / Service Worker: este módulo NÃO registra SW. O registro condicional
 *    (apenas quando location.protocol for http: ou https:) é feito no index.html
 *    (tarefa de wiring). Em file:// o SW não existe e o áudio funciona normal-
 *    mente (ele não depende do SW).
 *
 * 5) CONTEÚDO EXTENSO: o texto é fragmentado em trechos (chunking) por limites
 *    de sentença, com teto de caracteres por utterance (MAX_PARTES), para não
 *    ultrapassar limites práticos da API e garantir progresso contínuo.
 *
 * 6) MUDANÇA DE PÁGINA: o discurso é cancelado no beforeunload e no
 *    visibilitychange, e no destroy(), evitando fala estendida após a navegação.
 *
 * 7) PERSISTÊNCIA: nada é gravado no localStorage; o estado de reprodução é
 *    efêmero (perdido em file:///modo privado — aviso padrão do projeto).
 */
(function () {
  'use strict';

  /* ============================ --- HELPERS --- ============================ */

  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fmtPct(v) {
    var n = Number(v);
    if (isNaN(n)) return '1.0';
    var s = n.toFixed(1);
    // normaliza "0,5" -> "0.5" (nunca usa vírgula como decimal aqui)
    return s.replace(',', '.');
  }

  /* ============================ --- ESTADO --- ============================ */

  var ESTADO = {
    container: null,
    montado: false,
    apiDisponivel: false,        // 'speechSynthesis' presente no navegador
    vozes: [],                  // vozes pt-BR detectadas (ou todas, como fallback)
    vozSelecionada: null,       // SpeechSynthesisVoice escolhida
    vozesProntas: false,
    carregandoVozes: false,
    velocidade: 1,              // 0.5 .. 2.0 (alguns navegadores permitem mais)
    textoAtual: '',
    textoDigitado: '',          // valor da textarea preservado entre re-renderizações
    partes: [],                 // utterances divididas do texto
    indiceAtual: 0,
    totalPartes: 0,
    falando: false,
    pausado: booleanFalse(),    // 'pausado' começa falso
    mensagem: '',               // mensagem visível ao usuário
    _onVoicesChanged: null,     // referência para remover listener
    _onBeforeUnload: null,
    _onVisChange: null
  };

  function booleanFalse() { return false; }

  var STYLE_ID = 'aud-audio-style';
  var MAX_PARTES = 4000; // teto conservador de chars por utterance

  /* ========================= --- DISPONIBILIDADE --- ========================= */

  function temApi() {
    return (typeof window !== 'undefined') && ('speechSynthesis' in Object(window));
  }

  /* Carrega vozes; prefere pt-BR, depois pt, depois tudo (fallback visível). */
  function carregarVozes() {
    if (!temApi()) {
      ESTADO.vozes = [];
      ESTADO.vozesProntas = true;
      ESTADO.vozSelecionada = null;
      return;
    }
    var vs = [];
    try { vs = window.speechSynthesis.getVoices() || []; } catch (e) { vs = []; }
    var ptBr = [], pt = [];
    var i, v, lang;
    for (i = 0; i < vs.length; i++) {
      v = vs[i];
      lang = (v.lang || '').toLowerCase();
      if (lang === 'pt-br') ptBr.push(v);
      else if (lang.indexOf('pt') === 0) pt.push(v);
    }
    ESTADO.vozes = ptBr.length ? ptBr : pt;
    ESTADO.vozesProntas = true;
    if (ESTADO.vozes.length > 0) {
      // preserva a voz escolhida pelo usuário quando ela ainda existe na lista
      // (evita reset silencioso disparado por onvoiceschanged); cai para a
      // primeira apenas quando a seleção anterior não está mais disponível.
      var aindaDisponivel = false;
      for (var j = 0; j < ESTADO.vozes.length; j++) {
        if (ESTADO.vozes[j] === ESTADO.vozSelecionada) { aindaDisponivel = true; break; }
      }
      if (!aindaDisponivel) {
        ESTADO.vozSelecionada = ESTADO.vozes[0];
      }
    } else {
      ESTADO.vozSelecionada = null;
    }
  }

  /* Poll leve: getVoices() pode demorar a popular fora de onvoiceschanged. */
  function aguardarVozes(tentativas) {
    if (ESTADO.vozesProntas && ESTADO.vozes.length > 0) return;
    if (!temApi()) return;
    tentativas = tentativas || 0;
    if (tentativas < 8) {
      carregarVozes();
      if (!ESTADO.vozes.length) {
        setTimeout(function () { aguardarVozes(tentativas + 1); }, 150);
      }
    }
  }

  /* ============================ --- CHUNKING --- ============================ */

  /* Divide texto longo em trechos <= MAX_PARTES, recuando à última pontuação de
   * sentença quando possível; fallback a corte duro. Garante conteúdo extenso. */
  function dividirTexto(texto) {
    var t = String(texto == null ? '' : texto);
    if (t.length <= MAX_PARTES) return [t];
    var partes = [];
    var inicio = 0;
    var i, fim, corte;
    while (inicio < t.length) {
      if (t.length - inicio <= MAX_PARTES) {
        partes.push(t.slice(inicio));
        break;
      }
      fim = inicio + MAX_PARTES;
      corte = -1;
      for (i = fim; i > inicio; i--) {
        if (/[.!?\u2026\n]/.test(t.charAt(i))) { corte = i + 1; break; }
      }
      if (corte <= inicio) corte = fim; // nenhum terminador: corte duro
      partes.push(t.slice(inicio, corte));
      inicio = corte;
    }
    return partes.length ? partes : [t];
  }

  /* =========================== --- SÍNTESE ----- ============================ */

  /* Avança para a próxima parte; encerra quando acabar. */
  function falarParte() {
    if (!temApi()) { finalizarFala(); return; }
    if (ESTADO.falando === false && ESTADO.pausado === false) return; // parado/cancelado: iniciarFala e retomarFala definem falando/pausado ANTES de chamar
    if (ESTADO.indiceAtual >= ESTADO.partes.length) { finalizarFala(); return; }

    var parte = ESTADO.partes[ESTADO.indiceAtual];
    var utterance;
    try {
      utterance = new SpeechSynthesisUtterance(parte); /* global */
    } catch (e) {
      setStatusoMensagem('Não foi possível criar a mensagem de voz: ' + esc(e.message || e));
      finalizarFala();
      return;
    }
    if (ESTADO.vozSelecionada) utterance.voice = ESTADO.vozSelecionada;
    utterance.rate = Number(ESTADO.velocidade) || 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    var lang = (ESTADO.vozSelecionada && ESTADO.vozSelecionada.lang) ? ESTADO.vozSelecionada.lang : 'pt-BR';
    utterance.lang = lang;

    utterance.onend = function () {
      // Se foi cancelado/pausado externamente, não avança a fila.
      if (ESTADO.falando === false && ESTADO.pausado === true) return;
      if (ESTADO.falando === false) return; // cancelado → parar
      setStatusoMensagem('Lendo ' + (ESTADO.indiceAtual + 1) + ' de ' + ESTADO.totalPartes);
      ESTADO.indiceAtual += 1;
      falarParte();
    };
    utterance.onerror = function (e) {
      var erro = (e && e.error) ? e.error : 'desconhecido';
      // Erro TARDIO de cancelamento: interromperFala()/destroy() chamaram
      // speechSynthesis.cancel() e o navegador dispara onerror("canceled" |
      // "interrupted") DEPOIS — quando ele chega, a fala já foi encerrada
      // (falando === false) e a mensagem "Interrompido." já foi exibida.
      // Nesse caso, apenas retorne: não sobrescrever o status com
      // "Erro na síntese: canceled" nem finalizar de novo.
      if ((erro === 'canceled' || erro === 'interrupted') && ESTADO.falando === false) return;
      setStatusoMensagem('Erro na síntese: ' + esc(erro));
      finalizarFala();
    };

    try {
      window.speechSynthesis.speak(utterance);
      ESTADO.falando = true;
      setStatusoMensagem('Lendo ' + (ESTADO.indiceAtual + 1) + ' de ' + ESTADO.totalPartes);
    } catch (e) {
      setStatusoMensagem('Não foi iniciar a síntese: ' + esc(e.message || e));
      finalizarFala();
    }
  }

  function finalizarFala() {
    ESTADO.falando = false;
    ESTADO.pausado = false;
    ESTADO.indiceAtual = 0;
    // partes/texto atual mantidos para possível nova reprodução
    atualizarControles(); // só os 4 botões — sem re-render (preserva textarea/foco)
  }

  function setStatusoMensagem(txt) {
    ESTADO.mensagem = txt || '';
    atualizarStatus();
  }

  /* Atualiza apenas o nó #aud-status no DOM, sem re-renderizar o painel
   * inteiro (re-render destruiria e reconstruiria a textarea, perdendo o
   * texto digitado e o foco). Usado durante a fala, em que o texto de status
   * ("Lendo X de Y") muda a cada parte. */
  function atualizarStatus() {
    if (!ESTADO.container || !ESTADO.container.querySelector) return;
    var s = ESTADO.container.querySelector('#aud-status');
    if (s) s.textContent = ESTADO.mensagem || '';
  }

  /* Atualiza APENAS o atributo .disabled dos 4 botões de controle (#aud-play,
   * #aud-pause, #aud-resume, #aud-stop), com a MESMA lógica do renderizar()
   * (temApi / falando / pausado), SEM re-renderizar o innerHTML do painel.
   * Motivo do defeito corrigido: iniciarFala() não re-renderizava, então os
   * botões ficavam com o estado antigo (play habilitado, pause/stop
   * desabilitados) durante toda a fala. Re-render aqui destruiria a textarea
   * e perderia textoDigitado/foco — por isso só tocamos os botões. */
  function atualizarControles() {
    if (!ESTADO.container || !ESTADO.container.querySelector) return;
    var api = temApi();
    var play = ESTADO.container.querySelector('#aud-play');
    var pause = ESTADO.container.querySelector('#aud-pause');
    var resume = ESTADO.container.querySelector('#aud-resume');
    var stop = ESTADO.container.querySelector('#aud-stop');
    if (play) play.disabled = (!api || !!ESTADO.falando);
    if (pause) pause.disabled = (!api || !ESTADO.falando);
    if (resume) resume.disabled = (!api || !ESTADO.pausado);
    if (stop) stop.disabled = (!api || (!ESTADO.falando && !ESTADO.pausado));
  }

  function obterTextoDaTela() {
    // Lê o conteúdo exibido pelo painel de navegação (se existir).
    if (typeof document !== 'undefined' && document && document.getElementById) {
      var painel = document.getElementById('painel-conteudo');
      if (painel && typeof painel.textContent === 'string') {
        var t = painel.textContent.replace(/\s+/g, ' ').trim();
        return t || '';
      }
    }
    return '';
  }

  function iniciarFala(texto) {
    var t = String(texto == null ? '' : texto).trim();
    if (!t) {
      setStatusoMensagem('Nenhum texto para ler. Cole texto na caixa abaixo ou selecione um tópico.');
      renderizar();
      return false;
    }
    if (!temApi()) {
      setStatusoMensagem('Leitura em voz alta indisponível: a API speechSynthesis não existe neste ambiente.');
      renderizar();
      return false;
    }
    if (!ESTADO.vozesProntas || ESTADO.vozes.length === 0) {
      setStatusoMensagem('Leitura indisponível: nenhuma voz detectada neste navegador. Aguarde o carregamento das vozes ou o conteúdo não será lido.');
      renderizar();
      return false;
    }
    ESTADO.textoAtual = t;
    ESTADO.partes = dividirTexto(t);
    ESTADO.totalPartes = ESTADO.partes.length;
    ESTADO.indiceAtual = 0;
    ESTADO.pausado = false;
    try { window.speechSynthesis.cancel(); } catch (e) {}
    ESTADO.falando = true; /* flag ANTES de falarParte — senão o guard aborta o 1º play */
    falarParte();
    atualizarControles(); // re-render não ocorre aqui: só os botões mudam
    return true;
  }

  /* ============================ --- ESTILOS --- ============================ */

  function injetarEstilos() {
    if (typeof document === 'undefined' || !document || !document.createElement || !document.head) return;
    if (document.getElementById && document.getElementById(STYLE_ID)) return;
    var css = [
      '#audio-app { font-family: var(--font-family, system-ui, sans-serif); font-size: 0.92rem; }',
      '#audio-app .aud-header { display: flex; align-items: center; gap: .5rem; margin-bottom: .8rem; }',
      '#audio-app .aud-header h3 { margin: 0; font-size: 1.05rem; color: var(--primary-color, #174878); }',
      '#audio-app .aud-header svg { width: 1.1rem; height: 1.1rem; fill: var(--primary-color, #174878); }',
      '#audio-app .aud-aviso { background: #fff3cd; border: 1px solid #ffe082; border-radius: 8px; padding: .9rem 1rem; margin-bottom: .8rem; font-size: .9rem; color: #5a3a00; line-height: 1.4; }',
      '#audio-app .aud-erro { background: #fde8e8; border: 1px solid #f5c2c2; color: #600; }',
      '#audio-app .aud-controle { display: flex; flex-wrap: wrap; gap: .5rem; align-items: end; margin-bottom: .8rem; }',
      '#audio-app .aud-controle label { font-size: .82rem; color: #374151; display: flex; flex-direction: column; gap: .2rem; }',
      '#audio-app .aud-controle select { padding: .25rem .4rem; font-size: .85rem; border: 1px solid #dde2e7; border-radius: 6px; }',
      '#audio-app .aud-controle input[type=range] { width: 120px; cursor: pointer; }',
      '#audio-app #aud-texto { width: 100%; min-height: 90px; padding: .5rem .6rem; border: 1px solid #dde2e7; border-radius: 8px; font-family: inherit; font-size: .86rem; resize: vertical; }',
      '#audio-app .aud-acoes { display: flex; gap: .4rem; flex-wrap: wrap; margin-top: .6rem; }',
      '#audio-app .aud-acoes button { padding: .4rem .8rem; border: 1px solid var(--primary-color, #174878); background: var(--primary-color, #174878); color: #fff; border-radius: 8px; cursor: pointer; font-size: .85rem; }',
      '#audio-app .aud-acoes button:hover { background: #0d47a1; }',
      '#audio-app .aud-acoes button:disabled { background: #9aa0a6; border-color: #9aa0a6; cursor: default; }',
      '#audio-app .aud-acoes button.sec { background: transparent; color: var(--primary-color, #174878); }',
      '#audio-app .aud-acoes button.sec:hover { background: rgba(26,115,232,.08); }',
      '#audio-app .aud-status { font-size: .82rem; color: #374151; min-height: 1.3em; margin-top: .4rem; }',
      '@media (prefers-color-scheme: dark) {',
      '#audio-app .aud-aviso { background: #322a0f; border-color: #8a7000; color: #fff9c4; }',
      '#audio-app .aud-erro { background: #4a2020; border-color: #a03c3c; color: #ffd6d6; }',
      '#audio-app .aud-controle select { background: #3c4043; color: #e8eaed; border-color: #374151; }',
      '#audio-app #aud-texto { background: #2c3034; color: #e8eaed; border-color: #374151; }',
      '#audio-app .aud-status { color: #b3b7bc; }',
      '}'
    ].join('\n');
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    var head = document.head || (document.getElementsByTagName && document.getElementsByTagName('head')[0]);
    if (head && typeof head.appendChild === 'function') head.appendChild(style);
  }

  function removerEstilos() {
    if (typeof document === 'undefined' || !document) return;
    var s = document.getElementById && document.getElementById(STYLE_ID);
    if (s && s.parentNode && typeof s.parentNode.removeChild === 'function') {
      s.parentNode.removeChild(s);
    }
  }

  /* ============================ --- RENDER --- ============================ */

  function opcoesVoz() {
    if (!ESTADO.vozes.length) {
      return '<option value="">(nenhuma voz pt-BR disponível)</option>';
    }
    var html = '';
    var i, v;
    for (i = 0; i < ESTADO.vozes.length; i++) {
      v = ESTADO.vozes[i];
      var label = esc(v.name || v.lang || ('voz ' + (i + 1)));
      var sel = ESTADO.vozSelecionada === v ? ' selected' : '';
      html += '<option value="' + i + '"' + sel + '>' + label + ' (' + esc(v.lang || '?') + ')</option>';
    }
    return html;
  }

  function renderizar() {
    if (!ESTADO.container) return;
    var api = temApi();
    var html = '';
    html += '<div class="aud-header"><svg viewBox="0 0 24 24"><path d="M12 3.5c-.65 0-1.2.51-1.4 1.15L9 9H5.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H9l-1.6 4.35c.2.64.85 1.15 1.5 1.15h5.6c.65 0 1.2-.51 1.4-1.15L16.5 15H20c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3.5L16.4 4.65C16.2 3.96 15.55 3.5 14.9 3.5h-2.9zM12 5.5h2.9l2.5 6.35v.15-3.5L16.9 5.5H12zm-2.9 0v3.5L9.6 9 8.1 4.5 6.6 9 5.5 5.5 4.6 4.5 6.6 4.5 9.1 4.5 9.1 4.5z"/></svg><h3>Leitura em voz alta</h3></div>';

    if (!api) {
      html += '<div class="aud-aviso">Web Speech API (<code>speechSynthesis</code>) <strong>não disponível neste ambiente</strong>. A leitura em voz alta só funciona em navegadores modernos que suportam a API. Em <code>file://</code> e fora de navegadores com a API, os controles ficam desativados. Nenhuma síntese foi iniciada.</div>';
      html += '<div class="aud-status">API ausente — indisponível neste dispositivo/navegador.</div>';
    } else {
      if (!ESTADO.vozesProntas || ESTADO.vozes.length === 0) {
        html += '<div class="aud-aviso">Detecção de voz: ainda sem vozes pt-BR carregadas. Aguarde alguns instantes; esta API não afirma universalidade de vozes entre dispositivos.</div>';
      } else {
        html += '<div class="aud-aviso" style="background:#e8f0fe;color:#174878;color:#174878;">Voz pt-BR detectada: ' + esc(ESTADO.vozSelecionada ? (ESTADO.vozSelecionada.name || ESTADO.vozSelecionada.lang) : '') + '. A qualidade depende do navegador/dispositivo.</div>';
      }
      html += '<div class="aud-controle">';
      html += '<label>Voz: <select id="aud-voz">' + opcoesVoz() + '</select></label>';
      html += '<label>Velocidade: <span id="aud-vel-label">' + fmtPct(ESTADO.velocidade) + 'x</span><br>' +
              '<input type="range" id="aud-vel" min="0.5" max="2" step="0.1" value="' + fmtPct(ESTADO.velocidade) + '"></label>';
      html += '</div>';
    }

    html += '<textarea id="aud-texto" aria-label="Texto para leitura em voz alta" placeholder="Digite ou cole aqui o texto a ser lido em voz alta (acentos e pontuação preservados).">' + esc(ESTADO.textoDigitado || '') + '</textarea>';
    html += '<div class="aud-acoes">';
    html += '<button type="button" id="aud-ler-tela" class="sec">Ler conteúdo da tela</button>';
    var playDisabled = (!api || !!ESTADO.falando);
    html += '<button type="button" id="aud-play" ' + (playDisabled ? 'disabled' : '') + '>▶ Reproduzir</button>';
    var pauseDisabled = (!api || !ESTADO.falando);
    html += '<button type="button" id="aud-pause" ' + (pauseDisabled ? 'disabled' : '') + '>⏸ Pausa</button>';
    var resumeDisabled = (!api || !ESTADO.pausado);
    html += '<button type="button" id="aud-resume" ' + (resumeDisabled ? 'disabled' : '') + '>▷ Retomar</button>';
    var stopDisabled = (!api || (!ESTADO.falando && !ESTADO.pausado));
    html += '<button type="button" id="aud-stop" ' + (stopDisabled ? 'disabled' : '') + '>⏹ Interromper</button>';
    html += '</div>';
    html += '<div class="aud-status" id="aud-status">' + esc(ESTADO.mensagem || '') + '</div>';

    ESTADO.container.innerHTML = html;
    attachEvents();
  }

  function attachEvents() {
    if (!ESTADO.container) return;
    var texto = ESTADO.container.querySelector('#aud-texto');
    var btnPlay = ESTADO.container.querySelector('#aud-play');
    var btnPause = ESTADO.container.querySelector('#aud-pause');
    var btnResume = ESTADO.container.querySelector('#aud-resume');
    var btnStop = ESTADO.container.querySelector('#aud-stop');
    var btnLerTela = ESTADO.container.querySelector('#aud-ler-tela');
    var vel = ESTADO.container.querySelector('#aud-vel');

    if (btnPlay) btnPlay.onclick = function () {
      var t = (texto && typeof texto.value === 'string') ? texto.value : '';
      iniciarFala(t);
    };
    if (texto) texto.oninput = function () { ESTADO.textoDigitado = texto.value || ''; };
    if (btnPause) btnPause.onclick = function () { pausarFala(); };
    if (btnResume) btnResume.onclick = function () { retomarFala(); };
    if (btnStop) btnStop.onclick = function () { interromperFala(); };
    if (btnLerTela) btnLerTela.onclick = function () { lerConteudoDaTela(); };
    if (vel) {
      vel.oninput = function () {
        ESTADO.velocidade = Number(vel.value) || 1;
        // Preserva o texto digitado antes do re-render (defesa extra, além do
        // oninput da textarea): trocar a velocidade NÃO pode apagar o conteúdo.
        if (texto && typeof texto.value === 'string') ESTADO.textoDigitado = texto.value;
        renderizar();
      };
    }
    var sel = ESTADO.container.querySelector('#aud-voz');
    if (sel) {
      sel.onchange = function () {
        var idx = parseInt(sel.value, 10);
        if (!isNaN(idx) && ESTADO.vozes[idx]) {
          ESTADO.vozSelecionada = ESTADO.vozes[idx];
          setStatusoMensagem('Voz alterada para ' + (ESTADO.vozSelecionada.name || ESTADO.vozSelecionada.lang));
          if (!ESTADO.falando) renderizar();
        }
      };
    }
  }

  function pausarFala() {
    if (!temApi()) return;
    try { window.speechSynthesis.pause(); } catch (e) {}
    ESTADO.pausado = true;
    ESTADO.falando = false;
    setStatusoMensagem('Pausado.');
    atualizarControles(); // sem re-render: preserva textoDigitado/foco
  }

  function retomarFala() {
    if (!temApi()) return;
    ESTADO.pausado = false;
    ESTADO.falando = true;
    try { window.speechSynthesis.resume(); } catch (e) {}
    // Nem todo navegador sustenta pause()/resume() na mesma utterance (limitação
    // conhecida do Chrome). Se a síntese não estiver de fato falando após o
    // resume, re-dispara a parte atual em vez de deixar o botão "Retomar" sem
    // efeito. Re-disparo só ocorre quando speaking/pending são falsos — evita
    // duplicar a fala quando o resume nativo funcionou.
    var syn = window.speechSynthesis;
    var estaFalando = false;
    try { estaFalando = !!(syn.speaking || syn.pending); } catch (e) { estaFalando = false; }
    if (!estaFalando && ESTADO.partes.length > 0 && ESTADO.indiceAtual < ESTADO.partes.length) {
      try { syn.cancel(); } catch (e) {}
      falarParte();
    }
    setStatusoMensagem('Retomando ' + (ESTADO.indiceAtual + 1) + ' de ' + ESTADO.totalPartes);
    atualizarControles(); // sem re-render: preserva textoDigitado/foco
  }

  function interromperFala() {
    if (temApi()) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    ESTADO.falando = false;
    ESTADO.pausado = false;
    ESTADO.indiceAtual = 0;
    setStatusoMensagem('Interrompido.');
    atualizarControles(); // sem re-render: preserva textoDigitado/foco
  }

  function lerConteudoDaTela() {
    var t = obterTextoDaTela();
    if (!t) {
      setStatusoMensagem('Nenhum conteúdo encontrado no painel #painel-conteudo. Digite o texto abaixo.');
      renderizar();
      return;
    }
    // preenche a textarea com o texto capturado
    if (typeof document !== 'undefined' && ESTADO.container) {
      var ta = ESTADO.container.querySelector('#aud-texto');
      if (ta) { ta.value = t; ESTADO.textoDigitado = t; }
    }
    iniciarFala(t);
  }

  /* ===================== --- CICLO DE VIDA: mount/destroy --- ===================== */

  function mount(el) {
    // Idempotente: se já montado no mesmo elemento, não refaz.
    if (ESTADO.montado && ESTADO.container === el) return true;
    if (ESTADO.montado) destroy();

    if (!el || typeof el.appendChild === 'undefined') {
      console.warn('AudioApp: contêiner ausente — mount() ignorado.');
      return false;
    }
    ESTADO.container = el;
    ESTADO.montado = true;
    injetarEstilos();

    // Disponibilidade e vozes
    ESTADO.apiDisponivel = temApi();
    if (ESTADO.apiDisponivel) {
      carregarVozes();
      // onvoiceschanged (Chrome) — atualiza vozes quando o navegador as disponibiliza
      try {
        ESTADO._onVoicesChanged = function () { carregarVozes(); renderizar(); };
        window.speechSynthesis.onvoiceschanged = ESTADO._onVoicesChanged;
      } catch (e) {}
      // poll de segurança caso onvoiceschanged não dispare
      aguardarVozes(0);
    }
    // Cancela o discurso ao navegar fora da página / perder o foco
    ESTADO._onBeforeUnload = function () {
      if (temApi()) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    };
    ESTADO._onVisChange = function () {
      if (typeof document !== 'undefined' && document && document.hidden && temApi()) {
        try { window.speechSynthesis.pause(); } catch (e) {}
        ESTADO.pausado = true;
        ESTADO.falando = false;
        atualizarControles();
      }
    };
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('beforeunload', ESTADO._onBeforeUnload);
    }
    if (typeof document !== 'undefined' && document && document.addEventListener) {
      document.addEventListener('visibilitychange', ESTADO._onVisChange);
    }

    renderizar();
    return true;
  }

  function destroy() {
    interromperFala();
    if (typeof window !== 'undefined' && window.addEventListener && ESTADO._onBeforeUnload) {
      window.removeEventListener('beforeunload', ESTADO._onBeforeUnload);
    }
    if (typeof document !== 'undefined' && document && document.addEventListener && ESTADO._onVisChange) {
      document.removeEventListener('visibilitychange', ESTADO._onVisChange);
    }
    if (ESTADO.apiDisponivel && typeof window !== 'undefined' && window.speechSynthesis) {
      try { window.speechSynthesis.onvoiceschanged = null; } catch (e) {}
    }
    ESTADO._onVoicesChanged = null;
    ESTADO._onBeforeUnload = null;
    ESTADO._onVisChange = null;
    removerEstilos();
    if (ESTADO.container) {
      try { ESTADO.container.innerHTML = ''; } catch (e) {}
    }
    ESTADO.container = null;
    ESTADO.montado = false;
  }

  /* ---- Exposição global ----
   * mount()/destroy() são a API pública exigida pelo contrato. _estado e
   * _helpers são expostos apenas para testes (espelha o padrão de search.js) e
   * não fazem parte da API pública — o wiring chama apenas mount(el). */
  window.AudioApp = {
    mount: mount,
    destroy: destroy,
    _estado: ESTADO,
    _helpers: { dividirTexto: dividirTexto, fmtPct: fmtPct }
  };

  /* ---- Auto-montagem no DOMContentLoaded (se o contêiner existir) ---- */
  if (typeof document !== 'undefined' && document && typeof document.addEventListener === 'function') {
    document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementById('audio-app');
      if (el) { window.AudioApp.mount(el); }
    });
  }
})();
