/* flashcards.js — UI de flashcards com repetição espaçada (Seção 9 do Escrita.txt).
 *
 * CONSUME OS CARTÕES EXISTENTES: flashcards_m1..m8.js — 460 cartões no total
 * (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50; contagem
 * verificada em CI em 2026-10-25). Este arquivo não cria cartões; apenas
 * consome os dados (as fontes são descobertas dinamicamente).
 *
 * ============================================================================
 * ALGORITMO DE REPETIÇÃO ESPAÇADA — SM-2 SIMPLIFICADO (documentado)
 * ============================================================================
 * Variante simplificada do SM-2 de SuperMemo (origem do Anki), com limites
 * fixos para previsibilidade didática. Cada cartão mantém:
 *   rep           — nº de respostas consecutivas corretas desde o último erro
 *   intervaloDias — intervalo atual até a próxima revisão, em dias corridos
 *   fator         — fator de facilidade (ease), inicial 2.5, piso 1.3
 *
 * Três estados de resposta (rótulos da Seção 9 do Escrita.txt):
 *   "Acertou" (lembrei)      → fator = max(1.3, fator + 0.05)
 *                              rep = 0 → intervalo 1 dia
 *                              rep = 1 → intervalo 3 dias
 *                              rep ≥ 2 → intervalo = arredondar(intervalo × fator)
 *                              rep += 1
 *   "Difícil" (lembrei com esforço) → fator = max(1.3, fator − 0.15)
 *                              rep = 0 → intervalo 1 dia
 *                              rep ≥ 1 → intervalo = max(1, arredondar(intervalo × 1.2))
 *                              rep += 1 (não zera; cartão difícil não é esquecido)
 *   "Errou" (não lembrei)    → fator = max(1.3, fator − 0.20)
 *                              rep = 0, intervalo = 0 dias → cartão volta a
 *                              ficar VENCIDO imediatamente (revisável hoje)
 *
 * Teto de intervalo: 365 dias. Intervalos em dias CORRIDOS — simplificação
 * documentada: não há ajuste para fins de semana ou dias úteis.
 *
 * Classificação de domínio (partição exclusiva dos cartões):
 *   pendente  — nunca estudado (sem registro)
 *   vencido   — estudado e próximaRevisao <= agora (inclui os recém-errados)
 *   dominado  — não vencido e intervaloDias >= 21
 *   revisão   — não vencido e intervaloDias < 21 (em revisão ativa)
 *
 * Modos de estudo (Seção 9, req. 9):
 *   todos     — fila completa: vencidos primeiro, depois pendentes, depois os
 *               ainda não vencidos (ordem original dos dados dentro de cada grupo)
 *   vencidos  — apenas cartões com próximaRevisao <= agora
 *   errados   — apenas cartões cujo ÚLTIMO resultado registrado foi "Errou"
 *
 * ============================================================================
 * PERSISTÊNCIA (sem quebrar a chave existente)
 * ============================================================================
 * Usa a MESMA chave do navigation.js: localStorage['apostila-ia-progresso'].
 * navigation.js grava visitas de tópico em progresso['modulo-N'][topicoId].
 * Este script grava o estado SM-2 dos cartões em progresso['flashcards'][id]
 * (namespace novo, irmão dos registros de currículo). Ambos fazem
 * leitura-modificação-escrita síncrona do objeto completo (relê o valor
 * atual antes de gravar), o que evita sobrescrita cega de namespaces
 * distintos — mas NÃO elimina o race condition teórico: cliques quase
 * simultâneos (ex.: registrar visita de tópico no navigation.js e responder
 * um cartão aqui) podem intercalar loadProgresso()/saveProgresso(); o
 * segundo load ainda não enxerga a gravação do primeiro e uma das duas
 * atualizações se perde. Risco baixo (JS single-thread, tudo disparado por
 * interação do usuário); declarado aqui, sem trava/lock por ora.
 * Nenhum dado já salvo é apagado ou renomeado.
 * Advertência (convenção do projeto): modo privado e alguns contextos file://
 * podem limpar o localStorage — usar Exportar backup regularmente.
 *
 * SEM eval. SEM fetch. SEM módulos ES. Funciona em abertura direta file://.
 * Todo texto vindo de dados passa por esc() antes de ir para innerHTML.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- Constantes do algoritmo (documentadas acima) ---------- */
  const STORAGE_KEY = 'apostila-ia-progresso'; // chave existente — NÃO criar outra
  const NS = 'flashcards';
  const FATOR_INICIAL = 2.5;
  const FATOR_MINIMO = 1.3;
  const INTERVALO_MAXIMO_DIAS = 365;
  const LIMIAR_DOMINIO_DIAS = 21;
  const MILIS_POR_DIA = 86400000;
  const RESULTADOS = ['acertou', 'dificil', 'errou'];
  const ROTULO_RESULTADO = { acertou: 'Acertou', dificil: 'Difícil', errou: 'Errou' };
  const ROTULO_DIFICULDADE = { acertou: 'fácil', dificil: 'esforço', errou: 'difícil' };

  /* ---------- Helpers ---------- */
  /* Escapa TODOS os caracteres perigosos para HTML (inclui aspas simples,
   * usadas em atributos data-*). Mesma função do navigation.js, acrescida
   * da aspas simples por segurança de atributos. */
  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function iso(data) {
    return data.toISOString();
  }

  function formatarData(dataIso) {
    if (!dataIso) return '—';
    try {
      return new Date(dataIso).toLocaleDateString('pt-BR');
    } catch (e) {
      return String(dataIso).slice(0, 10);
    }
  }

  function formatarIntervalo(dias) {
    if (dias <= 0) return 'agora (volta hoje)';
    if (dias === 1) return '1 dia';
    return dias + ' dias';
  }

  /* ---------- Persistência (semântica idêntica à do navigation.js) ---------- */
  function loadProgresso() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      const obj = serialized ? JSON.parse(serialized) : {};
      return obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
    } catch (e) {
      console.error('Erro ao carregar progresso (flashcards):', e);
      return {};
    }
  }

  function saveProgresso(progresso) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progresso));
      return true;
    } catch (e) {
      console.error('Erro ao salvar progresso (flashcards):', e);
      return false;
    }
  }

  /* Registros SM-2 dos cartões: progresso['flashcards'] { id: estado }. */
  function carregarRegistros() {
    const progresso = loadProgresso();
    const reg = progresso[NS];
    return reg && typeof reg === 'object' && !Array.isArray(reg) ? reg : {};
  }

  function salvarRegistros(registros) {
    const progresso = loadProgresso(); // releitura preserva visitas do navigation.js
    progresso[NS] = registros;
    return saveProgresso(progresso);
  }

  /* ---------- Fonte dos cartões (window.apostilaDados; fallback direto) ----------
   * navigation.js consolida os dados em window.apostilaDados.flashcards no seu
   * DOMContentLoaded (registrado antes deste script — logo, executado antes).
   * P1.1 — a lista de fontes é MONTADA POR DESCOBERTA (chaves do consolidador,
   * ordenadas pelo número do módulo), não por lista fixa: adicionar um módulo
   * futuro (arquivo + tag <script>) passa a valer aqui sem editar este arquivo.
   * O fallback com typeof garante funcionamento mesmo se navigation.js falhar
   * no futuro: os const globais dos arquivos data/*.js continuam visíveis.
   *
   * DECISÃO — duplicação deliberada da descoberta no fallback (~15 linhas):
   * o bloco `montarFontesDiretas()` repete a mesma convenção de detecção do
   * navigation.js em vez de compartilhar um helper. Um helper exigiria um 6º
   * arquivo <script> novo (o index.html mantém 19 tags: 14 originais + 5 de
   * dados) ou expor uma global utilitária a partir do navigation.js — o que
   * acoplaria dois scripts de comportamento à ordem de carga. A duplicação é
   * pequena, simétrica e documentada nos dois lados; o caminho primário
   * (apostilaDados) não duplica nada. */
  const MAX_MODULOS_DESCOBERTA = 8; // 8 módulos obrigatórios (Escrita.txt, Seção 6)

  /* Caminho primário: chaves do consolidador em ordem numérica de módulo,
   * restritas ao intervalo de descoberta (1..MAX_MODULOS_DESCOBERTA). */
  function montarFontesUnificado(unificado) {
    return Object.keys(unificado)
      .map((chave) => ({ chave: chave, n: /^modulo-(\d+)$/.exec(chave) ? parseInt(chave.slice(7), 10) : 0 }))
      .filter((f) => f.n >= 1 && f.n <= MAX_MODULOS_DESCOBERTA)
      .sort((a, b) => a.n - b.n)
      .map((f) => ({ chave: f.chave, arr: unificado[f.chave] }));
  }

  /* Caminho de contingência: mesma convenção do navigation.js, sem consolidador. */
  function montarFontesDiretas() {
    const diretas = [
      { chave: 'modulo-1', arr: typeof flashcardsM1 !== 'undefined' ? flashcardsM1 : null },
      { chave: 'modulo-2', arr: typeof flashcardsM2 !== 'undefined' ? flashcardsM2 : null },
      { chave: 'modulo-3', arr: typeof flashcardsM3 !== 'undefined' ? flashcardsM3 : null },
      { chave: 'modulo-4', arr: typeof flashcardsM4 !== 'undefined' ? flashcardsM4 : null },
      { chave: 'modulo-5', arr: typeof flashcardsM5 !== 'undefined' ? flashcardsM5 : null },
      { chave: 'modulo-6', arr: typeof flashcardsM6 !== 'undefined' ? flashcardsM6 : null },
      { chave: 'modulo-7', arr: typeof flashcardsM7 !== 'undefined' ? flashcardsM7 : null },
      { chave: 'modulo-8', arr: typeof flashcardsM8 !== 'undefined' ? flashcardsM8 : null }
    ];
    return diretas.filter((f) => Array.isArray(f.arr));
  }

  function obterCartoes() {
    const unificado = window.apostilaDados && window.apostilaDados.flashcards;
    let fontes;
    if (unificado && typeof unificado === 'object') {
      fontes = montarFontesUnificado(unificado);
    } else {
      fontes = montarFontesDiretas();
    }
    const lista = [];
    const vistos = {};
    fontes.forEach((fonte) => {
      if (!Array.isArray(fonte.arr)) {
        console.warn('Flashcards: fonte não carregada —', fonte.chave);
        return;
      }
      fonte.arr.forEach((c) => {
        if (!c || typeof c !== 'object' || typeof c.id !== 'string' ||
            typeof c.frente !== 'string' || typeof c.verso !== 'string') {
          console.warn('Flashcards: cartão inválido ignorado em', fonte.chave, c && c.id);
          return;
        }
        if (vistos[c.id]) {
          console.warn('Flashcards: id duplicado ignorado —', c.id);
          return;
        }
        vistos[c.id] = true;
        lista.push(c);
      });
    });
    return lista;
  }

  /* ---------- Núcleo SM-2 simplificado (funções puras) ---------- */
  function novoEstado() {
    return {
      rep: 0,
      intervaloDias: 0,
      fator: FATOR_INICIAL,
      acertos: 0,
      erros: 0,
      dificuldade: null,          // rótulo do último esforço: fácil | esforço | difícil
      ultimoResultado: null,      // 'acertou' | 'dificil' | 'errou'
      ultimaRevisao: null,        // ISO
      proximaRevisao: null,       // ISO
      historico: []               // últimos { data, resultado } (máx. 10)
    };
  }

  /* Aplica um resultado ao estado SM-2. estado pode ser undefined (cartão novo).
   * `agora` é injetável para permitir testes determinísticos. */
  function aplicarResultado(estado, resultado, agora) {
    if (RESULTADOS.indexOf(resultado) === -1) {
      throw new Error('Resultado inválido: ' + resultado + ' (use acertou|dificil|errou)');
    }
    const e = estado && typeof estado === 'object' ? Object.assign(novoEstado(), estado) : novoEstado();
    /* cópia profunda do histórico: Object.assign copiaria a referência e cada
     * previsão (preverProximos) mutaria o array do registro de origem. */
    e.historico = Array.isArray(estado && estado.historico) ? estado.historico.slice() : [];

    if (resultado === 'acertou') {
      e.acertos += 1;
      e.fator = Math.max(FATOR_MINIMO, e.fator + 0.05);
      if (e.rep === 0) e.intervaloDias = 1;
      else if (e.rep === 1) e.intervaloDias = 3;
      else e.intervaloDias = Math.round(e.intervaloDias * e.fator);
      e.rep += 1;
    } else if (resultado === 'dificil') {
      e.fator = Math.max(FATOR_MINIMO, e.fator - 0.15);
      e.intervaloDias = e.rep === 0 ? 1 : Math.max(1, Math.round(e.intervaloDias * 1.2));
      e.rep += 1;
    } else { // errou
      e.erros += 1;
      e.rep = 0;
      e.fator = Math.max(FATOR_MINIMO, e.fator - 0.20);
      e.intervaloDias = 0;
    }

    e.intervaloDias = Math.min(INTERVALO_MAXIMO_DIAS, Math.max(0, e.intervaloDias));
    e.ultimoResultado = resultado;
    e.dificuldade = ROTULO_DIFICULDADE[resultado];
    e.ultimaRevisao = iso(agora);
    e.proximaRevisao = iso(new Date(agora.getTime() + e.intervaloDias * MILIS_POR_DIA));
    e.historico.push({ data: e.ultimaRevisao, resultado: resultado });
    if (e.historico.length > 10) e.historico = e.historico.slice(e.historico.length - 10);
    return e;
  }

  /* Previsão dos próximos intervalos para os 3 botões (mesmo código do aplicar). */
  function preverProximos(estado, agora) {
    const base = estado && typeof estado === 'object' ? estado : novoEstado();
    const previsao = {};
    RESULTADOS.forEach((r) => {
      previsao[r] = formatarIntervalo(aplicarResultado(base, r, agora).intervaloDias);
    });
    return previsao;
  }

  /* Partição exclusiva: pendente | vencido | dominado | revisao. */
  function classificar(registro, agora) {
    if (!registro || typeof registro !== 'object' || !registro.ultimaRevisao) return 'pendente';
    const prox = registro.proximaRevisao ? Date.parse(registro.proximaRevisao) : NaN;
    if (!isNaN(prox) && prox <= agora.getTime()) return 'vencido';
    if (typeof registro.intervaloDias === 'number' && registro.intervaloDias >= LIMIAR_DOMINIO_DIAS) return 'dominado';
    return 'revisao';
  }

  const ROTULO_CLASSE = {
    pendente: 'pendente (nunca estudado)',
    vencido: 'VENCIDO (revisar)',
    dominado: 'dominado',
    revisao: 'em revisão'
  };

  function filtrarCartoes(cartoes, filtros) {
    return cartoes.filter((c) => {
      if (filtros.modulo && String(c.modulo) !== String(filtros.modulo)) return false;
      if (filtros.nivel && c.nivel !== filtros.nivel) return false;
      if (filtros.topico && c.topico !== filtros.topico) return false;
      if (filtros.assunto && String(c.assunto || '').indexOf(filtros.assunto) === -1) return false;
      return true;
    });
  }

  function montarFila(cartoes, registros, modo, agora) {
    let base = cartoes.slice();
    if (modo === 'vencidos') {
      base = base.filter((c) => classificar(registros[c.id], agora) === 'vencido');
    } else if (modo === 'errados') {
      base = base.filter((c) => {
        const r = registros[c.id];
        return r && typeof r === 'object' && r.ultimoResultado === 'errou';
      });
    } else {
      const peso = { vencido: 0, pendente: 1, revisao: 2, dominado: 3 };
      base = base
        .map((c, i) => ({ c: c, i: i, peso: peso[classificar(registros[c.id], agora)] }))
        .sort((a, b) => (a.peso - b.peso) || (a.i - b.i))
        .map((o) => o.c);
    }
    return base.map((c) => c.id);
  }

  function estatisticas(cartoes, registros, agora) {
    const cont = { total: cartoes.length, dominados: 0, emRevisao: 0, vencidos: 0, pendentes: 0 };
    cartoes.forEach((c) => {
      const cls = classificar(registros[c.id], agora);
      if (cls === 'dominado') cont.dominados += 1;
      else if (cls === 'vencido') cont.vencidos += 1;
      else if (cls === 'pendente') cont.pendentes += 1;
      else cont.emRevisao += 1;
    });
    return cont;
  }

  /* ---------- Exportação / importação de backup ---------- */
  function exportarBackup() {
    const progresso = loadProgresso();
    return JSON.stringify({
      fonte: 'apostila-ia-flashcards-backup',
      versao: 1,
      exportadoEm: iso(new Date()),
      chave: STORAGE_KEY,
      progresso: progresso
    }, null, 2);
  }

  function ehObjeto(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
  }

  function validarRegistroCartao(r) {
    if (!ehObjeto(r)) return false;
    if (typeof r.rep !== 'number' || r.rep < 0) return false;
    if (typeof r.intervaloDias !== 'number' || r.intervaloDias < 0) return false;
    if (typeof r.fator !== 'number' || r.fator <= 0) return false;
    if (typeof r.acertos !== 'number' || r.acertos < 0) return false;
    if (typeof r.erros !== 'number' || r.erros < 0) return false;
    if (r.ultimoResultado !== null && RESULTADOS.indexOf(r.ultimoResultado) === -1) return false;
    if (r.ultimaRevisao !== null && typeof r.ultimaRevisao !== 'string') return false;
    if (r.proximaRevisao !== null && typeof r.proximaRevisao !== 'string') return false;
    if (r.historico !== undefined && !Array.isArray(r.historico)) return false;
    return true;
  }

  /* Mescla progresso importado no atual SEM apagar nada: registros de cartão e
   * visitas de tópico são sobrescritos por cartão/tópico id (importado vence);
   * chaves desconhecidas são preservadas dos dois lados. */
  function mesclarProgresso(atual, importado) {
    const resultado = JSON.parse(JSON.stringify(atual));
    const resumo = { cartoesImportados: 0, cartoesIgnorados: 0, topicosImportados: 0, topicosIgnorados: 0, chavesIgnoradas: 0 };
    if (!ehObjeto(importado)) return { progresso: resultado, resumo: resumo, erro: 'Arquivo não contém um objeto de progresso válido.' };

    Object.keys(importado).forEach((chave) => {
      const valor = importado[chave];
      if (chave === NS) {
        if (!ehObjeto(valor)) { resumo.chavesIgnoradas += 1; return; }
        if (!ehObjeto(resultado[NS])) resultado[NS] = {};
        Object.keys(valor).forEach((id) => {
          if (validarRegistroCartao(valor[id])) {
            resultado[NS][id] = valor[id];
            resumo.cartoesImportados += 1;
          } else {
            resumo.cartoesIgnorados += 1;
          }
        });
      } else if (/^modulo-\d+$/.test(chave)) {
        if (!ehObjeto(valor)) { resumo.chavesIgnoradas += 1; return; }
        if (!ehObjeto(resultado[chave])) resultado[chave] = {};
        Object.keys(valor).forEach((topicoId) => {
          if (ehObjeto(valor[topicoId])) {
            resultado[chave][topicoId] = Object.assign({}, resultado[chave][topicoId] || {}, valor[topicoId]);
            resumo.topicosImportados += 1;
          } else {
            resumo.topicosIgnorados += 1;
          }
        });
      } else if (ehObjeto(valor) && ehObjeto(resultado[chave])) {
        resultado[chave] = Object.assign({}, resultado[chave], valor);
      } else {
        resultado[chave] = valor;
        resumo.chavesIgnoradas += 1;
      }
    });
    return { progresso: resultado, resumo: resumo, erro: null };
  }

  /* Valida o texto do arquivo de backup e aplica a mescla no localStorage. */
  function importarBackup(texto) {
    let pacote;
    try {
      pacote = JSON.parse(texto);
    } catch (e) {
      return { ok: false, mensagem: 'Arquivo inválido: não é um JSON legível.', resumo: null };
    }
    let importado;
    if (ehObjeto(pacote) && ehObjeto(pacote.progresso)) importado = pacote.progresso;
    else if (ehObjeto(pacote)) importado = pacote; // aceita também o objeto cru
    else return { ok: false, mensagem: 'Arquivo inválido: estrutura não reconhecida.', resumo: null };

    const mescla = mesclarProgresso(loadProgresso(), importado);
    if (mescla.erro) return { ok: false, mensagem: mescla.erro, resumo: null };
    if (!saveProgresso(mescla.progresso)) {
      return { ok: false, mensagem: 'Falha ao gravar no localStorage (armazenamento cheio ou bloqueado?).', resumo: null };
    }
    return {
      ok: true,
      mensagem: 'Backup importado: ' + mescla.resumo.cartoesImportados + ' registro(s) de cartão e ' +
        mescla.resumo.topicosImportados + ' visita(s) de tópico mesclados' +
        (mescla.resumo.cartoesIgnorados ? '; ' + mescla.resumo.cartoesIgnorados + ' registro(s) de cartão inválido(s) ignorado(s)' : '') + '.',
      resumo: mescla.resumo
    };
  }

  /* ---------- UI (renderização no #flashcards-app do index.html) ---------- */
  const container = document.getElementById('flashcards-app');
  if (!container) {
    console.warn('Flashcards: contêiner #flashcards-app não encontrado no index.html — UI não montada.');
  } else {
    const filtros = { modulo: '', nivel: '', modo: 'todos' };
    let sessao = null;   // { fila, pos, revelado, cont, concluida }
    let mensagemBackup = null;

    function porId(id) {
      const cartoes = obterCartoes();
      for (let i = 0; i < cartoes.length; i++) if (cartoes[i].id === id) return cartoes[i];
      return null;
    }

    function opcoes(valores, selecionado, rotuloTodos) {
      let html = '<option value=""' + (selecionado === '' ? ' selected' : '') + '>' + esc(rotuloTodos) + '</option>';
      valores.forEach((v) => {
        html += '<option value="' + esc(v) + '"' + (String(selecionado) === String(v) ? ' selected' : '') + '>' + esc(v) + '</option>';
      });
      return html;
    }

    function htmlEstatisticas(cartoes, registros, agora) {
      const s = estatisticas(cartoes, registros, agora);
      return '<div class="fc-stats" role="status" aria-live="polite">' +
        '<span class="fc-badge">No filtro: <strong>' + s.total + '</strong></span> ' +
        '<span class="label label-ok">Dominados: ' + s.dominados + '</span> ' +
        '<span class="label label-parc">Em revisão: ' + s.emRevisao + '</span> ' +
        '<span class="label label-pend">Vencidos: ' + s.vencidos + '</span> ' +
        '<span class="label label-parc">Pendentes: ' + s.pendentes + '</span>' +
        '</div>';
    }

    function htmlCartao(cartao, registros, agora) {
      const reg = registros[cartao.id];
      const cls = classificar(reg, agora);
      const meta = 'Cartão ' + (sessao.pos + 1) + ' de ' + sessao.fila.length +
        ' · Módulo ' + esc(cartao.modulo) +
        ' · Nível: ' + esc(cartao.nivel || 'não informado') +
        ' · Estado: ' + esc(ROTULO_CLASSE[cls]) +
        ' · Intervalo atual: ' + esc(formatarIntervalo(reg ? reg.intervaloDias : 0)) +
        ' · Próxima revisão: ' + esc(formatarData(reg ? reg.proximaRevisao : null)) +
        ' · Acertos: ' + (reg ? reg.acertos : 0) + ' · Erros: ' + (reg ? reg.erros : 0) +
        ' · Dificuldade registrada: ' + esc(reg && reg.dificuldade ? reg.dificuldade : '—');
      let html = '<div class="fc-cartao" role="region" aria-live="polite">' +
        '<p class="fc-meta">' + meta + '</p>' +
        '<p class="fc-frente">' + esc(cartao.frente) + '</p>' +
        '<button type="button" data-action="mostrar">Mostrar resposta</button>';
      if (sessao.revelado) {
        const prev = preverProximos(reg, agora);
        html += '<div class="fc-resposta">' +
          '<p class="fc-verso">' + esc(cartao.verso) + '</p>' +
          '<p class="fc-explicacao"><strong>Explicação:</strong> ' + esc(cartao.explicacao || '—') + '</p>' +
          '</div>' +
          '<div class="fc-botoes">' +
          '<button type="button" class="fc-btn fc-btn-ok" data-action="acertou">Acertou <small>(próximo em ' + esc(prev.acertou) + ')</small></button>' +
          '<button type="button" class="fc-btn fc-btn-dif" data-action="dificil">Difícil <small>(próximo em ' + esc(prev.dificil) + ')</small></button>' +
          '<button type="button" class="fc-btn fc-btn-err" data-action="errou">Errou <small>(' + esc(prev.errou) + ')</small></button>' +
          '</div>';
      }
      html += '<p><button type="button" data-action="encerrar">Encerrar sessão</button></p></div>';
      return html;
    }

    function htmlSessao(registros, agora) {
      if (!sessao) {
        return '<div id="fc-sessao"><p><em>Nenhuma sessão ativa. Escolha módulo, nível e modo de estudo e clique em "Iniciar estudo".</em></p></div>';
      }
      if (sessao.concluida) {
        return '<div id="fc-sessao" class="fc-cartao" role="status" aria-live="polite">' +
          '<h3>Sessão concluída</h3>' +
          '<p>Cartões revisados: ' + sessao.fila.length + ' · ' +
          'Acertou: ' + sessao.cont.acertou + ' · Difícil: ' + sessao.cont.dificil + ' · Errou: ' + sessao.cont.errou + '</p>' +
          '<p><em>Observação: cartões respondidos como "Errou" voltam a ficar vencidos e reentram na próxima sessão (modo "vencidos" ou "todos").</em></p>' +
          '<p><button type="button" data-action="iniciar">Nova sessão</button> ' +
          '<button type="button" data-action="encerrar">Fechar</button></p>' +
          '</div>';
      }
      const cartao = porId(sessao.fila[sessao.pos]);
      if (!cartao) {
        sessao.pos += 1;
        if (sessao.pos >= sessao.fila.length) { sessao.concluida = true; return htmlSessao(registros, agora); }
        return htmlSessao(registros, agora);
      }
      return '<div id="fc-sessao">' + htmlCartao(cartao, registros, agora) + '</div>';
    }

    function renderTudo() {
      const agora = new Date();
      const cartoes = obterCartoes();
      const registros = carregarRegistros();
      const filtrados = filtrarCartoes(cartoes, filtros);
      const modulos = [];
      const niveis = [];
      cartoes.forEach((c) => {
        if (modulos.indexOf(String(c.modulo)) === -1) modulos.push(String(c.modulo));
        if (c.nivel && niveis.indexOf(c.nivel) === -1) niveis.push(c.nivel);
      });
      modulos.sort();
      const ordemNivel = { basico: 0, intermediario: 1, avancado: 2 };
      niveis.sort((a, b) => (ordemNivel[a] !== undefined ? ordemNivel[a] : 9) - (ordemNivel[b] !== undefined ? ordemNivel[b] : 9));
      const fila = montarFila(filtrados, registros, filtros.modo, agora);

      let html = '<p>Cartões carregados dos dados existentes: <strong>' + cartoes.length + '</strong> ' +
        '(módulos com cartões: ' + (modulos.length ? modulos.map((m) => 'M' + m).join(', ') : 'nenhum') +
        ' — nenhum cartão novo). Algoritmo: SM-2 simplificado ' +
        '(intervalos documentados em <code>assets/js/flashcards.js</code>). ' +
        'As contagens abaixo referem-se ao filtro atual.</p>';

      html += '<div class="fc-filtros">' +
        '<label>Módulo: <select data-fc="modulo">' + opcoes(modulos, filtros.modulo, 'Todos os módulos') + '</select></label> ' +
        '<label>Nível: <select data-fc="nivel">' + opcoes(niveis, filtros.nivel, 'Todos os níveis') + '</select></label> ' +
        '<label>Modo: <select data-fc="modo">' +
        '<option value="todos"' + (filtros.modo === 'todos' ? ' selected' : '') + '>Estudar todos</option>' +
        '<option value="vencidos"' + (filtros.modo === 'vencidos' ? ' selected' : '') + '>Apenas vencidos</option>' +
        '<option value="errados"' + (filtros.modo === 'errados' ? ' selected' : '') + '>Apenas errados (último resultado "Errou")</option>' +
        '</select></label> ' +
        '<button type="button" data-action="iniciar">Iniciar estudo</button>' +
        '</div>';

      html += htmlEstatisticas(filtrados, registros, agora);
      html += '<p class="fc-fila-info">Fila com os filtros atuais: <strong>' + fila.length + '</strong> cartão(ões).' +
        (sessao ? ' <em>(Trocar filtros encerra a sessão ativa.)</em>' : '') + '</p>';

      html += htmlSessao(registros, agora);

      html += '<div class="fc-backup">' +
        '<h3>Backup do progresso</h3>' +
        '<p><button type="button" data-action="exportar">Exportar backup (JSON)</button> ' +
        '<label class="fc-import">Importar backup: <input type="file" id="fc-import-input" accept=".json,application/json"></label></p>' +
        (mensagemBackup ? '<p class="fc-mensagem" role="status" aria-live="polite">' + esc(mensagemBackup) + '</p>' : '') +
        '<p class="aviso">O progresso fica no <code>localStorage</code> (chave <code>apostila-ia-progresso</code>). ' +
        'Modo privado e alguns navegadores em <code>file://</code> podem apagar os dados ao fechar a aba — ' +
        'exportue um backup regularmente. A importação mescla os registros (o backup importado vence por cartão/tópico) e não apaga dados locais.</p>' +
        '</div>';

      container.innerHTML = html;
    }

    /* ---------- Eventos (delegação; sem eval; nada de HTML de usuário cru) ---------- */
    function iniciarSessao() {
      const agora = new Date();
      const registros = carregarRegistros();
      const filtrados = filtrarCartoes(obterCartoes(), filtros);
      const fila = montarFila(filtrados, registros, filtros.modo, agora);
      sessao = { fila: fila, pos: 0, revelado: false, cont: { acertou: 0, dificil: 0, errou: 0 }, concluida: fila.length === 0 };
      renderTudo();
    }

    function responder(resultado) {
      if (!sessao || sessao.concluida || sessao.pos >= sessao.fila.length) return;
      const id = sessao.fila[sessao.pos];
      const agora = new Date();
      const registros = carregarRegistros();
      registros[id] = aplicarResultado(registros[id], resultado, agora);
      salvarRegistros(registros);
      sessao.cont[resultado] += 1;
      sessao.pos += 1;
      sessao.revelado = false;
      if (sessao.pos >= sessao.fila.length) sessao.concluida = true;
      renderTudo();
    }

    container.addEventListener('click', (e) => {
      const alvo = e.target && e.target.closest ? e.target.closest('[data-action]') : null;
      if (!alvo) return;
      if (e.preventDefault) e.preventDefault();
      const acao = alvo.getAttribute('data-action');
      if (acao === 'iniciar') iniciarSessao();
      else if (acao === 'encerrar') { sessao = null; renderTudo(); }
      else if (acao === 'mostrar') { if (sessao) { sessao.revelado = true; renderTudo(); } }
      else if (acao === 'acertou') responder('acertou');
      else if (acao === 'dificil') responder('dificil');
      else if (acao === 'errou') responder('errou');
      else if (acao === 'exportar') exportarArquivo();
    });

    container.addEventListener('change', (e) => {
      const alvo = e.target && e.target.closest ? e.target.closest('[data-fc]') : null;
      if (alvo) {
        const campo = alvo.getAttribute('data-fc');
        if (campo === 'modulo' || campo === 'nivel' || campo === 'modo') {
          filtros[campo] = String(alvo.value || '');
          sessao = null; // trocar filtro encerra a sessão (documentado na UI)
          renderTudo();
        }
        return;
      }
      if (e.target && e.target.id === 'fc-import-input' && e.target.files && e.target.files[0]) {
        const arquivo = e.target.files[0];
        const leitor = new FileReader();
        leitor.onload = () => {
          const resultado = importarBackup(String(leitor.result));
          mensagemBackup = resultado.mensagem;
          sessao = null;
          renderTudo();
        };
        leitor.onerror = () => {
          mensagemBackup = 'Não foi possível ler o arquivo selecionado.';
          renderTudo();
        };
        leitor.readAsText(arquivo);
      }
    });

    /* Download do JSON via Blob + URL.createObjectURL (funciona em file:// nos
     * navegadores modernos atuais). Se a API não existir, aviso honesto na tela. */
    function exportarArquivo() {
      const json = exportarBackup();
      try {
        if (typeof Blob === 'undefined' || typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
          throw new Error('Blob/URL.createObjectURL indisponíveis');
        }
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'apostila-ia-flashcards-backup-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        mensagemBackup = 'Backup exportado como arquivo .json.';
      } catch (err) {
        mensagemBackup = 'Download automático indisponível neste navegador/contexto. ' +
          'Use "Exportar backup" num navegador moderno ou consulte a documentação do incremento.';
        console.error('Falha ao exportar backup:', err);
      }
      renderTudo();
    }

    renderTudo();
    console.log('Flashcards inicializados —', obterCartoes().length, 'cartão(ões), algoritmo SM-2 simplificado.');

    /* API pública para testes (smoke test em Node/vm) e inspeção. */
    window.FlashcardsApp = {
      versaoAlgoritmo: 'SM-2 simplificado (documentado no cabeçalho de assets/js/flashcards.js)',
      constantes: {
        FATOR_INICIAL: FATOR_INICIAL,
        FATOR_MINIMO: FATOR_MINIMO,
        INTERVALO_MAXIMO_DIAS: INTERVALO_MAXIMO_DIAS,
        LIMIAR_DOMINIO_DIAS: LIMIAR_DOMINIO_DIAS
      },
      obterCartoes: obterCartoes,
      novoEstado: novoEstado,
      aplicarResultado: aplicarResultado,
      preverProximos: preverProximos,
      classificar: classificar,
      filtrarCartoes: filtrarCartoes,
      montarFila: montarFila,
      estatisticas: estatisticas,
      carregarRegistros: carregarRegistros,
      salvarRegistros: salvarRegistros,
      exportarBackup: exportarBackup,
      importarBackup: importarBackup,
      esc: esc,
      _ui: { iniciarSessao: iniciarSessao, responder: responder, renderTudo: renderTudo, getFiltros: () => filtros, getSessao: () => sessao }
    };
  }
});
