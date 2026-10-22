/* quiz-engine.js — MOTOR DE SIMULADOS (Seção 10.2 do Escrita.txt).
 *
 * ============================================================================
 * RECURSOS IMPLEMENTADOS (Seção 10.2)
 * ============================================================================
 * - Simulados por módulo isolado e cumulativos (escopos `mN` e `cum-N`
 *   construídos dinamicamente a partir dos módulos presentes no currículo
 *   carregado — ver a construção de ESCOPOS; hoje M1–M8).
 * - Simulados por nível (básico / intermediário / avançado) e por estilo de
 *   cobrança (cespe / fgv / fcc / vunesp) e por formato (C/E × múltipla).
 * - Simulados aleatórios SEM REPETIÇÃO na mesma sessão: embaralhamento
 *   Fisher-Yates do pool filtrado e IDs únicos na fila — se a quantidade
 *   solicitada exceder o pool, a UI avisa honestamente e usa o pool inteiro.
 * - Temporizador OPCIONAL (10/20/40/60 min ou sem limite): contagem regressiva
 *   exibida; ao zerar, o simulado é corrigido automaticamente (estado
 *   'esgotado' registrado no resultado).
 * - Navegação entre questões (anterior/próxima/grade numerada), marcação de
 *   questões para revisão, finalização e correção (com aviso de não
 *   respondidas).
 * - Gabarito comentado: para cada questão — enunciado, sua resposta, gabarito,
 *   justificativa detalhada, ANÁLISE de todas as alternativas (ou do item nos
 *   itens C/E), regra envolvida e comentário de pegadinha.
 * - Histórico de tentativas (últimas 50), percentual de acertos, tempo por
 *   questão, desempenho por assunto, lista automática de pontos fracos e
 *   recomendação de revisão baseada nos erros (desta tentativa + histórico
 *   acumulado).
 * - Resultado distingue NOTA (acertos/total, em %), TAXA DE ACERTO
 *   (acertos/respondidas, em %), QUESTÕES NÃO RESPONDIDAS e TÓPICOS DE
 *   REFORÇO (pontos fracos por assunto com referência curricular).
 *
 * ============================================================================
 * REGRAS DE CÁLCULO (documentadas para auditoria)
 * ============================================================================
 * nota         = round(acertos / total * 1000) / 10        (0–100, 1 casa)
 * taxaAcerto   = round(acertos / respondidas * 1000) / 10  (0–100; null se 0
 *                respondidas — nunca dividir por zero)
 * respondidas  = total − naoRespondidas
 * ponto fraco  = assunto em que, NA TENTATIVA ATUAL:
 *                  (erros >= 1 E taxa de acerto < 70%) OU erros >= 2
 *                OU naoRespondidas >= 2. Regra acrescida da verificação
 *                acumulada: assunto com >= 3 erros no histórico também é
 *                recomendado, mesmo sem erros nesta tentativa.
 * tempo por questão = soma dos intervalos em que a questão esteve na tela
 *                (acumulada ao navegar; finalizada na correção).
 *
 * ============================================================================
 * PERSISTÊNCIA (sem quebrar a chave existente)
 * ============================================================================
 * Usa a MESMA chave do navigation.js e do flashcards.js:
 * localStorage['apostila-ia-progresso'].
 * Este script grava em progresso['questoes'] = { tentativas: [...],
 * desempenho: {...}, ultimaConfig: {...} } — namespace irmão de
 * progresso['modulo-N'] (navigation.js) e progresso['flashcards']
 * (flashcards.js). Leitura-modificação-escrita síncrona do objeto completo;
 * nada do que os outros scripts gravam é apagado ou renomeado.
 * Advertência do projeto: modo privado/file:// pode limpar o localStorage.
 *
 * SEM eval. SEM fetch. Funciona em file://. Todo texto de dados passa por
 * esc() antes de innerHTML.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- Constantes ---------- */
  const STORAGE_KEY = 'apostila-ia-progresso'; // chave existente — NÃO criar outra
  const NS = 'questoes';
  const MAX_TENTATIVAS = 50;

  const ROTULO_NIVEL = { basico: 'básico', intermediario: 'intermediário', avancado: 'avançado' };
  const ROTULO_ESTILO = {
    cespe: 'CESPE/CEBRASPE (itens Certo/Errado)',
    fgv: 'FGV (interpretação contextual)',
    fcc: 'FCC (precisão conceitual)',
    vunesp: 'VUNESP (conhecimento objetivo e aplicação)'
  };
  const ROTULO_FORMATO = { mc: 'Múltipla escolha', ce: 'Certo ou Errado' };

  /* ---------- Escopos dinâmicos (P1.1) ----------
   * 'mN' = módulo N isolado (min = max = N); 'cum-N' = módulos 1..N
   * (min = 1, max = N — ambos derivados do número do módulo);
   * nenhum módulo de 1 a 8 está ausente desde o P1-C (2026-10-21);
   * o filtro usa apenas min/max, então questões de módulos maiores passam a
   * aparecer conforme forem escritas, sem depender do módulo ausente.
   * Fonte da descoberta: window.apostilaDados.curriculum, consolidado pelo
   * navigation.js — cujo listener de DOMContentLoaded foi registrado antes
   * deste script (ordem das tags no index.html), portanto executa primeiro.
   * Rótulos: mapa explícito igual aos títulos do inventário do index.html
   * (M1 Microsoft 365 … M8 Visualização); módulo novo sem mapa cai para o
   * `titulo` do próprio dado, ou 'Módulo N' — nunca inventa nome (o titulo
   * dos dados é MAIÚSCULO; usá-lo é apenas contingência de fallback).
   * Ordem do dropdown preservada em relação ao histórico: primeiro todos os
   * `mN` crescentes, depois todos os `cum-N` crescentes — a sequência antiga
   * (m1, m2, m3, cum-2, cum-3) permanece nessa ordem relativa, e os rótulos
   * de m1..m3, cum-2 e cum-3 são idênticos aos anteriores.
   * Fallback: se o consolidador não existir (falha do navigation.js),
   * mantém exatamente os 5 escopos históricos. 'cum-3' (default da UI e
   * fallback de filtrar()/montarSessao()) é garantido em QUALQUER caminho. */
  const TOTAL_MODULOS_OFICIAIS = 8; // Escrita.txt, Seção 6 — 8 módulos obrigatórios
  const ROTULO_MODULO = {
    1: 'Microsoft 365',
    2: 'Redes',
    3: 'Comunicação',
    4: 'Segurança',
    5: 'IA',
    6: 'Ética / Serviço Público',
    7: 'Fundamentos de Dados',
    8: 'Visualização'
  };

  function modulosCarregados() {
    const fonte = (typeof window !== 'undefined' && window.apostilaDados &&
      window.apostilaDados.curriculum) ? window.apostilaDados.curriculum : null;
    if (!fonte) return null; // sem consolidador → caminho histórico
    const numeros = [];
    Object.keys(fonte).forEach((chave) => {
      const m = /^modulo-(\d+)$/.exec(chave);
      if (m) numeros.push(parseInt(m[1], 10));
    });
    return numeros.sort((a, b) => a - b);
  }

  function rotuloModulo(n, apostilaDados) {
    if (ROTULO_MODULO[n]) return 'Módulo ' + n + ' — ' + ROTULO_MODULO[n];
    const mod = apostilaDados && apostilaDados.curriculum ? apostilaDados.curriculum['modulo-' + n] : null;
    const titulo = mod && typeof mod.titulo === 'string' ? mod.titulo : null;
    return 'Módulo ' + n + (titulo ? ' — ' + titulo : '');
  }

  function montarEscopos(modulos, apostilaDados) {
    const escopos = {};
    modulos.forEach((n) => {
      escopos['m' + n] = { rotulo: rotuloModulo(n, apostilaDados), min: n, max: n };
    });
    modulos.forEach((n) => {
      if (n < 2) return; // cum-1 seria duplicata de m1
      const presentes = modulos.filter((m) => m <= n);
      escopos['cum-' + n] = {
        rotulo: 'Cumulativo — ' + presentes.map((m) => 'M' + m).join(' + '),
        min: 1,
        max: n
      };
    });
    if (!escopos['cum-3']) escopos['cum-3'] = { rotulo: 'Cumulativo — M1 + M2 + M3', min: 1, max: 3 };
    return escopos;
  }

  function escoposHistoricos() {
    return {
      'm1': { rotulo: 'Módulo 1 — Microsoft 365', min: 1, max: 1 },
      'm2': { rotulo: 'Módulo 2 — Redes', min: 2, max: 2 },
      'm3': { rotulo: 'Módulo 3 — Comunicação', min: 3, max: 3 },
      'cum-2': { rotulo: 'Cumulativo — M1 + M2', min: 1, max: 2 },
      'cum-3': { rotulo: 'Cumulativo — M1 + M2 + M3', min: 1, max: 3 }
    };
  }

  const modulosDescobertos = modulosCarregados();
  const ESCOPOS = (modulosDescobertos && modulosDescobertos.length)
    ? montarEscopos(modulosDescobertos,
        (typeof window !== 'undefined' && window.apostilaDados) ? window.apostilaDados : null)
    : escoposHistoricos();
  const QUANTIDADES = [10, 20, 0]; // 0 = todas as questões do filtro
  const TEMPOS = [0, 10, 20, 40, 60]; // minutos; 0 = sem limite

  /* ---------- Helpers ---------- */
  /* Escapa TODOS os caracteres perigosos para HTML (inclui aspas simples,
   * usadas em atributos data-*). Mesma função do flashcards.js. */
  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatarData(dataIso) {
    if (!dataIso) return '—';
    try {
      return new Date(dataIso).toLocaleString('pt-BR');
    } catch (e) {
      return String(dataIso).slice(0, 16).replace('T', ' ');
    }
  }

  function formatarTempo(ms) {
    if (typeof ms !== 'number' || ms < 0) return '—';
    const totalSeg = Math.round(ms / 1000);
    const min = Math.floor(totalSeg / 60);
    const seg = totalSeg % 60;
    if (min <= 0) return seg + ' s';
    return min + ' min ' + (seg < 10 ? '0' : '') + seg + ' s';
  }

  /* Percentual no padrão pt-BR (vírgula decimal). Aceita null → '—'. */
  function formatarPct(valor) {
    if (typeof valor !== 'number' || isNaN(valor)) return '—';
    return String(valor).replace('.', ',');
  }

  /* ---------- Persistência (semântica idêntica à do navigation.js) ---------- */
  function loadProgresso() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      const obj = serialized ? JSON.parse(serialized) : {};
      return obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
    } catch (e) {
      console.error('Erro ao carregar progresso (questões):', e);
      return {};
    }
  }

  function saveProgresso(progresso) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progresso));
      return true;
    } catch (e) {
      console.error('Erro ao salvar progresso (questões):', e);
      return false;
    }
  }

  function ehObjeto(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
  }

  function novoEstado() {
    return { tentativas: [], desempenho: {}, ultimaConfig: null };
  }

  function carregarEstado() {
    const progresso = loadProgresso();
    const reg = progresso[NS];
    if (!ehObjeto(reg)) return novoEstado();
    return {
      tentativas: Array.isArray(reg.tentativas) ? reg.tentativas : [],
      desempenho: ehObjeto(reg.desempenho) ? reg.desempenho : {},
      ultimaConfig: ehObjeto(reg.ultimaConfig) ? reg.ultimaConfig : null
    };
  }

  function salvarEstado(estado) {
    const progresso = loadProgresso(); // releitura preserva visitas e flashcards
    progresso[NS] = estado;
    return saveProgresso(progresso);
  }

  /* ---------- Fonte do banco (assets/data/questions.js) ----------
   * questions.js define const questoesBanco (escopo global léxico) e também
   * window.questoesBanco. A propriedade de window é a fonte primária porque
   * navigation.js substitui window.apostilaDados por inteiro no seu
   * DOMContentLoaded — o fallback via apostilaDados.questoes é secundário. */
  function obterBanco() {
    let fonte = null;
    if (typeof window !== 'undefined' && Array.isArray(window.questoesBanco)) fonte = window.questoesBanco;
    else if (typeof window !== 'undefined' && window.apostilaDados && Array.isArray(window.apostilaDados.questoes)) fonte = window.apostilaDados.questoes;
    else if (typeof questoesBanco !== 'undefined' && Array.isArray(questoesBanco)) fonte = questoesBanco;
    if (!fonte) {
      console.warn('Quiz: banco de questões não carregado — verifique assets/data/questions.js no index.html.');
      return [];
    }
    const vistos = {};
    return fonte.filter((q) => {
      const ok = validarQuestao(q);
      if (!ok) console.warn('Quiz: questão inválida ignorada —', q && q.id);
      if (ok && vistos[q.id]) { console.warn('Quiz: id duplicado ignorado —', q.id); return false; }
      vistos[q.id] = true;
      return ok;
    });
  }

  /* Validação estrutural mínima (Seção 10.1): campos obrigatórios presentes e
   * coerentes — garante que o motor nunca exiba questão incompleta. */
  function validarQuestao(q) {
    if (!ehObjeto(q)) return false;
    if (typeof q.id !== 'string' || !q.id) return false;
    if ([1, 2, 3, 4, 5, 6, 7, 8].indexOf(q.modulo) === -1) return false;
    if (q.formato !== 'mc' && q.formato !== 'ce') return false;
    if (!ROTULO_ESTILO[q.estilo]) return false;
    if (!ROTULO_NIVEL[q.nivel]) return false;
    if (typeof q.assunto !== 'string' || !q.assunto) return false;
    if (typeof q.topico !== 'string' || !q.topico) return false;
    if (typeof q.contexto !== 'string' || !q.contexto) return false;
    if (typeof q.enunciado !== 'string' || !q.enunciado) return false;
    if (typeof q.justificativa !== 'string' || !q.justificativa) return false;
    if (typeof q.regra !== 'string' || !q.regra) return false;
    if (typeof q.pegadinha !== 'string' || !q.pegadinha) return false;
    if (!ehObjeto(q.analise)) return false;
    if (q.formato === 'mc') {
      if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) return false;
      const letras = q.alternativas.map((a) => a && a.letra);
      for (let i = 0; i < letras.length; i++) {
        if (typeof letras[i] !== 'string' || !letras[i]) return false;
        if (letras.indexOf(letras[i]) !== i) return false; // letras únicas
        const alt = q.alternativas[i];
        if (!ehObjeto(alt) || typeof alt.texto !== 'string' || !alt.texto) return false;
        if (typeof q.analise[letras[i]] !== 'string' || !q.analise[letras[i]]) return false; // análise de TODAS as alternativas
      }
      if (letras.indexOf(q.gabarito) === -1) return false;
    } else {
      if (q.gabarito !== 'certo' && q.gabarito !== 'errado') return false;
      if (typeof q.trechoDeterminante !== 'string' || !q.trechoDeterminante) return false;
      if (typeof q.analise.item !== 'string' || !q.analise.item) return false; // análise do item
    }
    return true;
  }

  /* ---------- Filtragem e montagem de sessão ---------- */
  function filtrar(banco, cfg) {
    const escopo = ESCOPOS[cfg.escopo] || ESCOPOS['cum-3'];
    return banco.filter((q) => {
      if (q.modulo < escopo.min || q.modulo > escopo.max) return false;
      if (cfg.nivel && q.nivel !== cfg.nivel) return false;
      if (cfg.estilo && q.estilo !== cfg.estilo) return false;
      if (cfg.formato && q.formato !== cfg.formato) return false;
      return true;
    });
  }

  /* Fisher-Yates (embaralhamento uniforme). */
  function embaralhar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Cria a sessão: fila de IDs SEM repetição (vistos por id), ordem didática
   * por padrão ou aleatória quando cfg.aleatorio. `agoraMs` é injetável para
   * testes determinísticos. */
  function montarSessao(banco, cfg, agoraMs) {
    const agora = typeof agoraMs === 'number' ? agoraMs : Date.now();
    const pool = filtrar(banco, cfg);
    const ordem = cfg.aleatorio ? embaralhar(pool) : pool.slice();
    /* Quantidade aceita qualquer inteiro >= 0 (0 = todas). QUANTIDADES só
     * restringe as opções do <select> da UI; aqui validamos por sanidade. */
    const qtdRaw = typeof cfg.quantidade === 'number' ? cfg.quantidade : parseInt(cfg.quantidade, 10);
    const quantidade = isFinite(qtdRaw) && qtdRaw > 0 ? Math.floor(qtdRaw) : 0;
    const vistos = {};
    const fila = [];
    for (let i = 0; i < ordem.length; i++) {
      if (vistos[ordem[i].id]) continue; // sem repetição na mesma sessão
      vistos[ordem[i].id] = true;
      fila.push(ordem[i].id);
      if (quantidade > 0 && fila.length >= quantidade) break;
    }
    const tempoMinutos = TEMPOS.indexOf(cfg.tempoMinutos) !== -1 ? cfg.tempoMinutos : 0;
    return {
      idSessao: 'sim-' + agora + '-' + Math.floor(Math.random() * 100000),
      criadoMs: agora,
      cfg: {
        escopo: ESCOPOS[cfg.escopo] ? cfg.escopo : 'cum-3',
        nivel: cfg.nivel || '',
        estilo: cfg.estilo || '',
        formato: cfg.formato || '',
        quantidade: quantidade,
        aleatorio: Boolean(cfg.aleatorio),
        tempoMinutos: tempoMinutos
      },
      poolSize: pool.length,
      truncada: quantidade > 0 && pool.length < quantidade,
      fila: fila,
      pos: 0,
      respostas: {},
      marcadas: {},
      tempos: {},
      vistaEmMs: agora,
      inicioMs: agora,
      tempoLimiteMs: tempoMinutos > 0 ? tempoMinutos * 60000 : null,
      estado: 'em-andamento',
      esgotado: false
    };
  }

  function porId(banco, id) {
    for (let i = 0; i < banco.length; i++) if (banco[i].id === id) return banco[i];
    return null;
  }

  /* Acumula o tempo da questão que esteve na tela e troca a posição. */
  function percorrer(sessao, novaPos, agoraMs) {
    if (!sessao || sessao.estado !== 'em-andamento') return;
    flushTempo(sessao, agoraMs);
    if (typeof novaPos === 'number' && novaPos >= 0 && novaPos < sessao.fila.length) sessao.pos = novaPos;
    sessao.vistaEmMs = typeof agoraMs === 'number' ? agoraMs : Date.now();
  }

  function flushTempo(sessao, agoraMs) {
    if (!sessao || !sessao.fila.length) return;
    const agora = typeof agoraMs === 'number' ? agoraMs : Date.now();
    const id = sessao.fila[sessao.pos];
    if (!id) return;
    const delta = Math.max(0, agora - (sessao.vistaEmMs || agora));
    sessao.tempos[id] = (sessao.tempos[id] || 0) + delta;
    sessao.vistaEmMs = agora;
  }

  function responder(sessao, id, valor, agoraMs) {
    if (!sessao || sessao.estado !== 'em-andamento') return;
    flushTempo(sessao, agoraMs);
    if (sessao.fila.indexOf(id) === -1) return;
    sessao.respostas[id] = valor;
  }

  function alternarMarcacao(sessao, id) {
    if (!sessao || sessao.estado !== 'em-andamento') return;
    if (sessao.fila.indexOf(id) === -1) return;
    if (sessao.marcadas[id]) delete sessao.marcadas[id];
    else sessao.marcadas[id] = true;
  }

  function tempoDecorridoMs(sessao, agoraMs) {
    if (!sessao) return 0;
    const agora = typeof agoraMs === 'number' ? agoraMs : Date.now();
    return Math.max(0, agora - sessao.inicioMs);
  }

  function tempoRestanteMs(sessao, agoraMs) {
    if (!sessao || sessao.tempoLimiteMs == null) return null;
    return Math.max(0, sessao.tempoLimiteMs - tempoDecorridoMs(sessao, agoraMs));
  }

  /* ---------- Correção (funções puras sobre a sessão) ---------- */
  function corrigir(sessao, banco, agoraMs) {
    if (!sessao) return null;
    if (sessao.estado === 'corrigida') return sessao.resultado || null;
    flushTempo(sessao, agoraMs);
    sessao.estado = 'corrigida';

    const total = sessao.fila.length;
    let acertos = 0;
    let naoRespondidas = 0;
    const porAssunto = {};
    const porQuestao = [];
    const tempoPorQuestao = {};

    sessao.fila.forEach((id) => {
      const q = porId(banco, id);
      const resposta = sessao.respostas[id];
      const tempos = sessao.tempos[id] || 0;
      tempoPorQuestao[id] = tempos;
      if (!q) {
        naoRespondidas += 1;
        porQuestao.push({ id: id, questao: null, situacao: 'invalida', suaResposta: resposta || null });
        return;
      }
      if (!porAssunto[q.assunto]) {
        porAssunto[q.assunto] = { assunto: q.assunto, modulo: q.modulo, total: 0, respondidas: 0, acertos: 0, erros: 0, naoRespondidas: 0, topicos: {} };
      }
      const pa = porAssunto[q.assunto];
      pa.total += 1;
      pa.topicos[q.topico] = true;

      let situacao;
      if (resposta === undefined || resposta === null || resposta === '') {
        situacao = 'nao-respondida';
        naoRespondidas += 1;
        pa.naoRespondidas += 1;
      } else if (String(resposta) === String(q.gabarito)) {
        situacao = 'certo';
        acertos += 1;
        pa.acertos += 1;
        pa.respondidas += 1;
      } else {
        situacao = 'errado';
        pa.erros += 1;
        pa.respondidas += 1;
      }
      porQuestao.push({ id: id, questao: q, situacao: situacao, suaResposta: resposta !== undefined ? resposta : null });
    });

    const respondidas = total - naoRespondidas;
    const erros = respondidas - acertos;
    const nota = total > 0 ? Math.round(acertos * 1000 / total) / 10 : 0;
    const taxaAcerto = respondidas > 0 ? Math.round(acertos * 1000 / respondidas) / 10 : null;
    const tempoTotalMs = tempoDecorridoMs(sessao, agoraMs);

    /* Desempenho por assunto + pontos fracos (regra documentada no cabeçalho). */
    const listaAssuntos = Object.keys(porAssunto).map((k) => {
      const pa = porAssunto[k];
      pa.taxa = pa.respondidas > 0 ? Math.round(pa.acertos * 1000 / pa.respondidas) / 10 : null;
      pa.topicos = Object.keys(pa.topicos);
      return pa;
    }).sort((a, b) => a.assunto.localeCompare(b.assunto, 'pt-BR'));

    const pontosFracos = listaAssuntos.filter((pa) =>
      (pa.erros >= 1 && pa.taxa !== null && pa.taxa < 70) || pa.erros >= 2 || pa.naoRespondidas >= 2
    ).sort((a, b) => {
      const ta = a.taxa === null ? -1 : a.taxa;
      const tb = b.taxa === null ? -1 : b.taxa;
      return ta - tb;
    });

    const resultado = {
      idSessao: sessao.idSessao,
      data: new Date(tempoTotalMs + sessao.inicioMs).toISOString(),
      cfg: sessao.cfg,
      total: total,
      respondidas: respondidas,
      acertos: acertos,
      erros: erros,
      naoRespondidas: naoRespondidas,
      nota: nota,
      taxaAcerto: taxaAcerto,
      tempoTotalMs: tempoTotalMs,
      tempoPorQuestao: tempoPorQuestao,
      porAssunto: listaAssuntos,
      pontosFracos: pontosFracos.map((pa) => ({ assunto: pa.assunto, modulo: pa.modulo, erros: pa.erros, total: pa.total, taxa: pa.taxa, naoRespondidas: pa.naoRespondidas, topicos: pa.topicos })),
      porQuestao: porQuestao,
      esgotado: Boolean(sessao.esgotado),
      recomendacoes: []
    };
    resultado.recomendacoes = gerarRecomendacoes(resultado, carregarEstado());
    sessao.resultado = resultado;
    return resultado;
  }

  /* Recomendação de revisão baseada nos erros (tentativa atual + histórico). */
  function gerarRecomendacoes(resultado, estado) {
    const rec = [];
    resultado.pontosFracos.forEach((pf) => {
      const taxaTxt = pf.taxa === null ? 'sem respostas' : formatarPct(pf.taxa) + '% de acerto';
      rec.push('Revisar «' + pf.assunto + '» — ' + pf.erros + ' erro(s) em ' + pf.total + ' questão(ões) (' + taxaTxt + '); tópicos curricular(is): ' + pf.topicos.join(', ') + '.');
    });
    if (resultado.naoRespondidas > 0) {
      rec.push(resultado.naoRespondidas + ' questão(ões) não respondidas — no próximo simulado, use o temporizador com folga ou reduza a quantidade de questões por sessão.');
    }
    /* Erros acumulados no histórico (>= 3 erros no mesmo assunto). */
    const acumulado = {};
    const assuntoPorId = {};
    obterBanco().forEach((q) => { assuntoPorId[q.id] = q.assunto; });
    Object.keys(estado.desempenho || {}).forEach((id) => {
      const reg = estado.desempenho[id];
      if (!ehObjeto(reg) || typeof reg.erros !== 'number' || reg.erros < 3) return;
      const assunto = assuntoPorId[id] || 'assunto não identificado';
      acumulado[assunto] = (acumulado[assunto] || 0) + reg.erros;
    });
    Object.keys(acumulado).forEach((assunto) => {
      const jaNosPontos = resultado.pontosFracos.some((pf) => pf.assunto === assunto);
      if (!jaNosPontos) {
        rec.push('Atenção histórica: «' + assunto + '» acumula ' + acumulado[assunto] + ' erro(s) em tentativas anteriores — priorize a revisão deste assunto.');
      }
    });
    if (resultado.nota >= 80 && resultado.pontosFracos.length === 0) {
      rec.push('Bom desempenho nesta tentativa (nota ' + formatarPct(resultado.nota) + '). Considere um simulado cumulativo ou de nível mais exigente.');
    }
    if (resultado.taxaAcerto === null) {
      rec.push('Nenhuma questão foi respondida — o resultado não permite avaliar domínio do conteúdo.');
    }
    if (rec.length === 0) {
      rec.push('Sem pontos fracos identificados nesta tentativa. Mantenha o cronograma de revisão espaçada (flashcards).');
    }
    return rec;
  }

  /* ---------- Histórico de tentativas ---------- */
  function registrarTentativa(sessao, resultado) {
    if (!sessao || !resultado) return null;
    const estado = carregarEstado();
    const attempt = {
      id: resultado.idSessao,
      data: resultado.data,
      escopo: ESCOPOS[resultado.cfg.escopo] ? ESCOPOS[resultado.cfg.escopo].rotulo : resultado.cfg.escopo,
      nivel: resultado.cfg.nivel || 'todos',
      estilo: resultado.cfg.estilo || 'todos',
      formato: resultado.cfg.formato || 'ambos',
      aleatorio: Boolean(resultado.cfg.aleatorio),
      tempoMinutos: resultado.cfg.tempoMinutos,
      esgotado: Boolean(resultado.esgotado),
      total: resultado.total,
      respondidas: resultado.respondidas,
      acertos: resultado.acertos,
      erros: resultado.erros,
      naoRespondidas: resultado.naoRespondidas,
      nota: resultado.nota,
      taxaAcerto: resultado.taxaAcerto,
      tempoTotalMs: resultado.tempoTotalMs,
      tempoPorQuestao: resultado.tempoPorQuestao,
      porAssunto: resultado.porAssunto.map((pa) => ({ assunto: pa.assunto, total: pa.total, acertos: pa.acertos, erros: pa.erros, taxa: pa.taxa })),
      pontosFracos: resultado.pontosFracos.map((pf) => pf.assunto),
      erradas: resultado.porQuestao.filter((p) => p.situacao === 'errado' || p.situacao === 'nao-respondida').map((p) => p.id)
    };
    estado.tentativas.unshift(attempt);
    if (estado.tentativas.length > MAX_TENTATIVAS) estado.tentativas = estado.tentativas.slice(0, MAX_TENTATIVAS);
    resultado.porQuestao.forEach((p) => {
      if (!p.questao) return;
      const reg = ehObjeto(estado.desempenho[p.id]) ? estado.desempenho[p.id] : { acertos: 0, erros: 0, respostas: 0 };
      if (p.situacao === 'certo') reg.acertos += 1;
      else if (p.situacao === 'errado') reg.erros += 1;
      if (p.situacao !== 'nao-respondida') reg.respostas += 1;
      reg.ultimoResultado = p.situacao;
      estado.desempenho[p.id] = reg;
    });
    estado.ultimaConfig = sessao.cfg;
    salvarEstado(estado);
    return attempt;
  }

  function limparHistorico() {
    const estado = novoEstado();
    salvarEstado(estado);
    return estado;
  }

  /* ---------- Estatísticas do banco (para a tela de configuração) ---------- */
  function contarBanco(banco, cfg) {
    const pool = filtrar(banco, cfg);
    const cont = { disponiveis: pool.length, porModulo: {}, porNivel: {}, porFormato: {}, porEstilo: {}, total: banco.length };
    banco.forEach((q) => {
      cont.porModulo[q.modulo] = (cont.porModulo[q.modulo] || 0) + 1;
      cont.porNivel[q.nivel] = (cont.porNivel[q.nivel] || 0) + 1;
      cont.porFormato[q.formato] = (cont.porFormato[q.formato] || 0) + 1;
      cont.porEstilo[q.estilo] = (cont.porEstilo[q.estilo] || 0) + 1;
    });
    return cont;
  }

  /* ========================================================================
   * UI (renderização no #quiz-app do index.html)
   * ====================================================================== */
  const container = document.getElementById('quiz-app');
  let sessao = null;
  let vista = 'config'; // 'config' | 'sessao' | 'resultado'
  let ultimoResultado = null;
  let mensagem = null;
  let intervaloTimer = null;
  const cfgUI = { escopo: 'cum-3', nivel: '', estilo: '', formato: '', quantidade: 10, aleatorio: true, tempoMinutos: 0 };

  function opcoes(valores, selecionado, rotulos) {
    let html = '';
    valores.forEach((v) => {
      const rotulo = rotulos && rotulos[v] !== undefined ? rotulos[v] : String(v);
      html += '<option value="' + esc(v) + '"' + (String(selecionado) === String(v) ? ' selected' : '') + '>' + esc(rotulo) + '</option>';
    });
    return html;
  }

  function htmlConfig(banco) {
    const cont = contarBanco(banco, cfgUI);
    const escopoRotulos = {};
    Object.keys(ESCOPOS).forEach((k) => { escopoRotulos[k] = ESCOPOS[k].rotulo; });
    const quantRotulos = { 10: '10 questões', 20: '20 questões', 0: 'Todas as disponíveis' };
    const tempoRotulos = { 0: 'Sem temporizador', 10: '10 minutos', 20: '20 minutos', 40: '40 minutos', 60: '60 minutos' };
    const estiloRotulos = { '': 'Todos os estilos', cespe: ROTULO_ESTILO.cespe, fgv: ROTULO_ESTILO.fgv, fcc: ROTULO_ESTILO.fcc, vunesp: ROTULO_ESTILO.vunesp };
    const nivelRotulos = { '': 'Todos os níveis', basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };
    const formatoRotulos = { '': 'Ambos os formatos', mc: 'Múltipla escolha', ce: 'Certo ou Errado' };

    /* Cabeçalho calculado a partir dos módulos REALMENTE presentes (P1.1):
     * módulos com currículo carregado mas sem questões e módulos sem
     * currículo algum são derivados dos dados, não fixados — o texto não
     * vira mentira quando novas questões forem escritas. */
    const carregados = modulosCarregados() || [1, 2, 3];
    const porModuloTxt = carregados.map((n) => 'M' + n + '=' + (cont.porModulo[n] || 0)).join(', ');
    const semQuestoes = [];
    carregados.forEach((n) => { if (!cont.porModulo[n]) semQuestoes.push('M' + n + ' (currículo carregado)'); });
    for (let n = 1; n <= TOTAL_MODULOS_OFICIAIS; n++) {
      if (carregados.indexOf(n) === -1) semQuestoes.push('M' + n + ' (sem currículo)');
    }
    const pisoQuestoes = 320;
    const faltamQuestoes = Math.max(0, pisoQuestoes - cont.total);

    let html = '<p>Banco carregado: <strong>' + cont.total + '</strong> questões autorais (' + porModuloTxt + '). ' +
      'Piso do Escrita.txt: ' + pisoQuestoes + ' — faltam ' + faltamQuestoes + '. ' +
      (semQuestoes.length
        ? 'Módulos ainda sem questões autorais: ' + semQuestoes.join(', ') + '. '
        : 'Todos os módulos oficiais têm questões autorais. ') +
      'Nenhuma questão é atribuída a banca real: o campo de estilo indica apenas o FORMATO DE COBRANÇA.</p>';

    html += '<div class="qz-filtros">' +
      '<label>Escopo: <select data-qz="escopo">' + opcoes(Object.keys(ESCOPOS), cfgUI.escopo, escopoRotulos) + '</select></label>' +
      '<label>Nível: <select data-qz="nivel">' + opcoes(['', 'basico', 'intermediario', 'avancado'], cfgUI.nivel, nivelRotulos) + '</select></label>' +
      '<label>Estilo de cobrança: <select data-qz="estilo">' + opcoes(['', 'cespe', 'fgv', 'fcc', 'vunesp'], cfgUI.estilo, estiloRotulos) + '</select></label>' +
      '<label>Formato: <select data-qz="formato">' + opcoes(['', 'mc', 'ce'], cfgUI.formato, formatoRotulos) + '</select></label>' +
      '<label>Quantidade: <select data-qz="quantidade">' + opcoes([10, 20, 0], cfgUI.quantidade, quantRotulos) + '</select></label>' +
      '<label>Temporizador: <select data-qz="tempoMinutos">' + opcoes([0, 10, 20, 40, 60], cfgUI.tempoMinutos, tempoRotulos) + '</select></label>' +
      '<label><input type="checkbox" data-qz="aleatorio"' + (cfgUI.aleatorio ? ' checked' : '') + '> Ordem aleatória (sem repetição na sessão)</label> ' +
      '<button type="button" data-act="iniciar">Iniciar simulado</button>' +
      '</div>';

    const disponivel = cont.disponiveis;
    let pedidas = cfgUI.quantidade > 0 ? Math.min(cfgUI.quantidade, disponivel) : disponivel;
    if (disponivel === 0) {
      html += '<p class="aviso" role="status">Nenhuma questão corresponde aos filtros atuais. Amplie o escopo ou remova filtros.</p>';
    } else if (cfgUI.quantidade > 0 && disponivel < cfgUI.quantidade) {
      html += '<p class="aviso" role="status">Apenas <strong>' + disponivel + '</strong> questão(ões) correspondem aos filtros (menos que as ' +
        cfgUI.quantidade + ' solicitadas). A sessão usará o total disponível, SEM repetição.</p>';
    } else {
      html += '<p class="qz-info" role="status">Disponíveis com os filtros atuais: <strong>' + disponivel + '</strong>. A sessão terá ' +
        pedidas + ' questão(ões)' + (cfgUI.aleatorio ? ' em ordem aleatória, sem repetição.' : ' na ordem do banco.') + '</p>';
    }

    html += '<h3>Balanço do banco (todas as questões)</h3><ul>' +
      '<li>Por nível: básico ' + (cont.porNivel.basico || 0) + ' · intermediário ' + (cont.porNivel.intermediario || 0) + ' · avançado ' + (cont.porNivel.avancado || 0) + '</li>' +
      '<li>Por formato: múltipla escolha ' + (cont.porFormato.mc || 0) + ' · Certo/Errado ' + (cont.porFormato.ce || 0) + '</li>' +
      '<li>Por estilo de cobrança: CESPE/CEBRASPE ' + (cont.porEstilo.cespe || 0) + ' · FGV ' + (cont.porEstilo.fgv || 0) + ' · FCC ' + (cont.porEstilo.fcc || 0) + ' · VUNESP ' + (cont.porEstilo.vunesp || 0) + '</li>' +
      '</ul>';
    return html;
  }

  function htmlAlternativas(q) {
    let html = '<ul class="qz-alternativas">';
    q.alternativas.forEach((alt) => {
      html += '<li><button type="button" class="qz-alt" data-act="responder" data-valor="' + esc(alt.letra) + '">' +
        '<strong>' + esc(alt.letra) + ')</strong> ' + esc(alt.texto) + '</button></li>';
    });
    html += '</ul>';
    return html;
  }

  function htmlSessao(banco) {
    if (!sessao) return '<p><em>Nenhuma sessão ativa.</em></p>';
    if (!sessao.fila.length) return '<p class="aviso">A sessão foi criada sem questões (filtro sem correspondência). Ajuste os filtros.</p>';
    const id = sessao.fila[sessao.pos];
    const q = porId(banco, id);
    const marcada = Boolean(sessao.marcadas[id]);
    const respondidas = Object.keys(sessao.respostas).length;

    let html = '<div class="qz-sessao-cab" role="status" aria-live="polite">' +
      '<span>Questão <strong>' + (sessao.pos + 1) + '</strong> de ' + sessao.fila.length + '</span> · ' +
      '<span>Respondidas: <strong>' + respondidas + '</strong></span> · ' +
      '<span>Marcadas para revisão: <strong>' + Object.keys(sessao.marcadas).length + '</strong></span> · ' +
      '<span>Tempo: <span id="qz-tempo">' + esc(formatarTempo(sessao.tempoLimiteMs != null ? tempoRestanteMs(sessao) : tempoDecorridoMs(sessao))) + '</span>' +
      (sessao.tempoLimiteMs != null ? ' (restante)' : ' (decorrido)') + '</span>' +
      '</div>';

    /* Grade de navegação */
    html += '<div class="qz-grade">';
    sessao.fila.forEach((qid, i) => {
      const cls = ['qz-num'];
      if (i === sessao.pos) cls.push('qz-atual');
      if (sessao.respostas[qid] !== undefined) cls.push('qz-respondida');
      if (sessao.marcadas[qid]) cls.push('qz-marcada');
      html += '<button type="button" class="' + cls.join(' ') + '" data-act="ir" data-pos="' + i + '" aria-label="Ir para a questão ' + (i + 1) + '">' + (i + 1) + '</button>';
    });
    html += '</div>';

    if (!q) {
      html += '<p class="aviso">Questão da sessão não encontrada no banco (dado corrompido?). Pule para a próxima.</p>';
    } else {
      html += '<div class="qz-cartao">' +
        '<p class="qz-meta">Módulo ' + q.modulo + ' · ' + esc(q.assunto) + ' · Nível: ' + esc(ROTULO_NIVEL[q.nivel]) +
        ' · Formato: ' + esc(ROTULO_FORMATO[q.formato]) + ' · Estilo: ' + esc(ROTULO_ESTILO[q.estilo]) +
        ' · ID: ' + esc(q.id) + '</p>' +
        '<p class="qz-contexto"><strong>Contexto:</strong> ' + esc(q.contexto) + '</p>' +
        '<p class="qz-enunciado">' + esc(q.enunciado) + '</p>';
      if (q.formato === 'mc') {
        html += htmlAlternativas(q);
        const resp = sessao.respostas[id];
        html += '<p>Sua resposta: <strong>' + (resp ? esc(resp) : '—') + '</strong></p>';
      } else {
        const resp = sessao.respostas[id];
        html += '<div class="qz-ce">' +
          '<button type="button" class="qz-alt' + (resp === 'certo' ? ' qz-escolhida' : '') + '" data-act="responder" data-valor="certo">CERTO</button> ' +
          '<button type="button" class="qz-alt' + (resp === 'errado' ? ' qz-escolhida' : '') + '" data-act="responder" data-valor="errado">ERRADO</button>' +
          '<span class="qz-meta">Sua resposta: <strong>' + (resp ? esc(String(resp).toUpperCase()) : '—') + '</strong></span>' +
          '</div>';
      }
      html += '</div>';
    }

    html += '<div class="qz-nav">' +
      '<button type="button" data-act="anterior"' + (sessao.pos === 0 ? ' disabled' : '') + '>← Anterior</button> ' +
      '<button type="button" data-act="marcar">' + (marcada ? 'Desmarcar revisão' : 'Marcar para revisão') + '</button> ' +
      '<button type="button" data-act="proxima"' + (sessao.pos >= sessao.fila.length - 1 ? ' disabled' : '') + '>Próxima →</button> ' +
      '<button type="button" data-act="finalizar">Finalizar e corrigir</button> ' +
      '<button type="button" data-act="abandonar">Abandonar</button>' +
      '</div>';
    if (sessao.fila.length - respondidas > 0) {
      html += '<p class="qz-info">Ainda faltam <strong>' + (sessao.fila.length - respondidas) + '</strong> questão(ões) sem resposta — elas contarão como não respondidas na correção.</p>';
    }
    return html;
  }

  function htmlGabaritoComentado(resultado) {
    let html = '<h3>Gabarito comentado</h3>';
    resultado.porQuestao.forEach((p, i) => {
      const q = p.questao;
      html += '<div class="qz-gab-item">';
      if (!q) {
        html += '<p><strong>Questão ' + (i + 1) + '</strong> (' + esc(p.id) + '): questão inválida no banco — não corrigida.</p></div>';
        return;
      }
      const rotuloSituacao = { certo: 'CERTO', errado: 'ERRADO', 'nao-respondida': 'NÃO RESPONDIDA', invalida: 'INVÁLIDA' };
      html += '<p class="qz-meta"><strong>Questão ' + (i + 1) + '</strong> (' + esc(q.id) + ') · ' + esc(q.assunto) +
        ' · Situação: <span class="qz-sit-' + esc(p.situacao) + '">' + esc(rotuloSituacao[p.situacao] || p.situacao) + '</span>' +
        (p.situacao === 'nao-respondida' ? '' : ' · Sua resposta: <strong>' + esc(String(p.suaResposta)) + '</strong>') +
        ' · Gabarito: <strong>' + esc(String(q.gabarito)) + '</strong></p>';
      html += '<p class="qz-enunciado">' + esc(q.enunciado) + '</p>';
      html += '<p><strong>Justificativa:</strong> ' + esc(q.justificativa) + '</p>';
      if (q.formato === 'mc') {
        html += '<p><strong>Análise das alternativas:</strong></p><ul>';
        q.alternativas.forEach((alt) => {
          html += '<li><strong>' + esc(alt.letra) + ')</strong> ' + esc(alt.texto) + ' — ' + esc(q.analise[alt.letra] || 'sem análise registrada') + '</li>';
        });
        html += '</ul>';
      } else {
        html += '<p><strong>Trecho determinante:</strong> ' + esc(q.trechoDeterminante) + '</p>';
        html += '<p><strong>Análise do item:</strong> ' + esc(q.analise.item || '') + '</p>';
        if (q.analise.leituraIncorreta) {
          html += '<p><strong>Leitura incorreta comum:</strong> ' + esc(q.analise.leituraIncorreta) + '</p>';
        }
      }
      html += '<p><strong>Regra/princípio:</strong> ' + esc(q.regra) + '</p>' +
        '<p><strong>Pegadinha:</strong> ' + esc(q.pegadinha) + '</p>' +
        '<p class="qz-meta">Referência curricular: ' + esc(q.topico) + (q.fonte ? ' · Fonte: ' + esc(q.fonte) : '') + '</p>';
      html += '</div>';
    });
    return html;
  }

  function htmlResultado(resultado, estado) {
    let html = '<div class="qz-resultado" role="status" aria-live="polite"><h3>Resultado do simulado</h3>' +
      (resultado.esgotado ? '<p class="aviso">Tempo esgotado — o simulado foi corrigido automaticamente.</p>' : '') +
      '<p><span class="label label-ok">Nota: ' + formatarPct(resultado.nota) + '% (acertos ÷ total)</span> ' +
      '<span class="label label-parc">Taxa de acerto: ' + (resultado.taxaAcerto === null ? '—' : formatarPct(resultado.taxaAcerto) + '% (acertos ÷ respondidas)') + '</span> ' +
      '<span class="label label-ok">Acertos: ' + resultado.acertos + '</span> ' +
      '<span class="label label-pend">Erros: ' + resultado.erros + '</span> ' +
      '<span class="label label-pend">Não respondidas: ' + resultado.naoRespondidas + '</span> ' +
      '<span class="label label-parc">Tempo total: ' + esc(formatarTempo(resultado.tempoTotalMs)) + '</span></p>';

    html += '<h4>Desempenho por assunto</h4><ul>';
    resultado.porAssunto.forEach((pa) => {
      html += '<li>' + esc(pa.assunto) + ': ' + pa.acertos + '/' + pa.total + ' (' + (pa.taxa === null ? 'sem respostas' : formatarPct(pa.taxa) + '%') + ')' +
        (pa.erros ? ' · erros: ' + pa.erros : '') + (pa.naoRespondidas ? ' · não respondidas: ' + pa.naoRespondidas : '') + '</li>';
    });
    html += '</ul>';

    html += '<h4>Pontos fracos (tópicos de reforço)</h4>';
    if (resultado.pontosFracos.length === 0) {
      html += '<p>Nenhum ponto fraco identificado nesta tentativa.</p>';
    } else {
      html += '<ul>';
      resultado.pontosFracos.forEach((pf) => {
        html += '<li><strong>' + esc(pf.assunto) + '</strong> — ' + pf.erros + ' erro(s) em ' + pf.total + ' questão(ões)' +
          (pf.taxa === null ? '' : ', taxa ' + formatarPct(pf.taxa) + '%') + (pf.naoRespondidas ? ', ' + pf.naoRespondidas + ' não respondida(s)' : '') +
          ' · revisar tópico(s): ' + esc(pf.topicos.join(', ')) + '</li>';
      });
      html += '</ul>';
    }

    html += '<h4>Recomendação de revisão</h4><ul>';
    resultado.recomendacoes.forEach((r) => { html += '<li>' + esc(r) + '</li>'; });
    html += '</ul>';

    /* Tempo por questão (apenas as 5 mais demoradas, para leitura útil). */
    const tempos = Object.keys(resultado.tempoPorQuestao).map((id) => ({ id: id, ms: resultado.tempoPorQuestao[id] }))
      .sort((a, b) => b.ms - a.ms).slice(0, 5);
    if (tempos.length) {
      html += '<h4>Tempo por questão (5 mais demoradas)</h4><ul>';
      tempos.forEach((t) => { html += '<li>' + esc(t.id) + ': ' + esc(formatarTempo(t.ms)) + '</li>'; });
      html += '</ul>';
    }

    html += '<p><button type="button" data-act="novo">Novo simulado</button> ' +
      '<button type="button" data-act="refazer">Refazer este simulado</button></p></div>';

    html += htmlGabaritoComentado(resultado);
    return html;
  }

  function htmlHistorico(estado) {
    const tentativas = estado.tentativas || [];
    let html = '<h3>Histórico de tentativas (últimas ' + tentativas.length + ' de até ' + MAX_TENTATIVAS + ')</h3>';
    if (!tentativas.length) {
      html += '<p><em>Nenhuma tentativa registrada ainda. O histórico é salvo no localStorage (chave apostila-ia-progresso, namespace questoes).</em></p>';
      return html;
    }
    html += '<table class="qz-tabela"><thead><tr>' +
      '<th>Data</th><th>Escopo</th><th>Nível</th><th>Estilo</th><th>Q</th><th>Acertos</th><th>Erros</th><th>Não resp.</th><th>Nota</th><th>Taxa</th><th>Tempo</th>' +
      '</tr></thead><tbody>';
    tentativas.slice(0, 10).forEach((t) => {
      html += '<tr><td>' + esc(formatarData(t.data)) + '</td><td>' + esc(t.escopo) + '</td><td>' + esc(t.nivel) + '</td><td>' + esc(t.estilo) + '</td>' +
        '<td>' + t.total + '</td><td>' + t.acertos + '</td><td>' + t.erros + '</td><td>' + t.naoRespondidas + '</td>' +
        '<td>' + formatarPct(t.nota) + '%</td><td>' + (t.taxaAcerto === null ? '—' : formatarPct(t.taxaAcerto) + '%') + '</td><td>' + esc(formatarTempo(t.tempoTotalMs)) + '</td></tr>';
    });
    html += '</tbody></table>';
    if (tentativas.length > 10) html += '<p class="qz-meta">Exibindo as 10 mais recentes; as demais permanecem salvas.</p>';
    html += '<p><button type="button" data-act="limpar-historico">Limpar histórico de tentativas</button></p>';
    return html;
  }

  function pararTimer() {
    if (intervaloTimer !== null) {
      clearInterval(intervaloTimer);
      intervaloTimer = null;
    }
  }

  function iniciarTimer() {
    pararTimer();
    if (!sessao || sessao.tempoLimiteMs == null || sessao.estado !== 'em-andamento') return;
    intervaloTimer = setInterval(() => {
      if (!sessao || sessao.estado !== 'em-andamento') { pararTimer(); return; }
      const el = document.getElementById('qz-tempo');
      const restante = tempoRestanteMs(sessao);
      if (el) el.textContent = formatarTempo(restante);
      if (restante <= 0) {
        sessao.esgotado = true;
        finalizarSessao();
      }
    }, 1000);
  }

  function finalizarSessao() {
    if (!sessao) return;
    const banco = obterBanco();
    ultimoResultado = corrigir(sessao, banco, Date.now());
    if (ultimoResultado) registrarTentativa(sessao, ultimoResultado);
    pararTimer();
    vista = 'resultado';
    renderTudo();
  }

  function renderTudo() {
    if (!container) return;
    const banco = obterBanco();
    let html = '';
    if (mensagem) html += '<p class="qz-mensagem" role="status" aria-live="polite">' + esc(mensagem) + '</p>';
    if (vista === 'config' || !sessao) {
      html += htmlConfig(banco);
    } else if (vista === 'sessao') {
      html += htmlSessao(banco);
    } else if (vista === 'resultado' && ultimoResultado) {
      html += htmlResultado(ultimoResultado, carregarEstado());
    }
    html += htmlHistorico(carregarEstado());
    container.innerHTML = html;
    if (vista === 'sessao') iniciarTimer();
    else pararTimer();
  }

  /* ---------- Eventos (delegação; sem eval; nada de HTML cru) ---------- */
  if (container) {
    container.addEventListener('click', (e) => {
      const alvo = e.target && e.target.closest ? e.target.closest('[data-act]') : null;
      if (!alvo) return;
      if (e.preventDefault) e.preventDefault();
      const acao = alvo.getAttribute('data-act');
      const banco = obterBanco();
      if (acao === 'iniciar') {
        sessao = montarSessao(banco, cfgUI, Date.now());
        ultimoResultado = null;
        if (!sessao.fila.length) {
          mensagem = 'Nenhuma questão corresponde aos filtros — simulado não iniciado.';
          sessao = null;
        } else {
          mensagem = sessao.truncada
            ? 'Sessão iniciada com ' + sessao.fila.length + ' questão(ões) — menos que o solicitado; sem repetição.'
            : null;
          vista = 'sessao';
          if (sessao.cfg.tempoMinutos > 0 && sessao.tempoLimiteMs != null && tempoDecorridoMs(sessao) > sessao.tempoLimiteMs) {
            sessao.esgotado = true; // nunca iniciar já estourado
          }
        }
        renderTudo();
      } else if (acao === 'responder' && sessao) {
        const id = sessao.fila[sessao.pos];
        responder(sessao, id, alvo.getAttribute('data-valor'), Date.now());
        if (sessao.pos < sessao.fila.length - 1) sessao.pos += 1;
        sessao.vistaEmMs = Date.now();
        mensagem = null;
        renderTudo();
      } else if (acao === 'anterior' && sessao) {
        percorrer(sessao, sessao.pos - 1, Date.now());
        renderTudo();
      } else if (acao === 'proxima' && sessao) {
        percorrer(sessao, sessao.pos + 1, Date.now());
        renderTudo();
      } else if (acao === 'ir' && sessao) {
        percorrer(sessao, parseInt(alvo.getAttribute('data-pos'), 10) || 0, Date.now());
        renderTudo();
      } else if (acao === 'marcar' && sessao) {
        alternarMarcacao(sessao, sessao.fila[sessao.pos]);
        renderTudo();
      } else if (acao === 'finalizar' && sessao) {
        const restantes = sessao.fila.length - Object.keys(sessao.respostas).length;
        if (restantes > 0 && typeof window !== 'undefined' && typeof window.confirm === 'function' &&
            !window.confirm('Ainda faltam ' + restantes + ' questão(ões). Finalizar e corrigir mesmo assim?')) {
          return;
        }
        finalizarSessao();
      } else if (acao === 'abandonar') {
        sessao = null;
        ultimoResultado = null;
        mensagem = 'Sessão abandonada — nada foi registrado no histórico.';
        vista = 'config';
        renderTudo();
      } else if (acao === 'novo') {
        sessao = null;
        ultimoResultado = null;
        mensagem = null;
        vista = 'config';
        renderTudo();
      } else if (acao === 'refazer' && ultimoResultado) {
        sessao = montarSessao(banco, ultimoResultado.cfg, Date.now());
        /* Refazer usa a MESMA fila (sem sorteio novo) para treino dirigido. */
        sessao.fila = ultimoResultado.porQuestao.map((p) => p.id);
        sessao.poolSize = ultimoResultado.porQuestao.length;
        sessao.truncada = false;
        ultimoResultado = null;
        mensagem = 'Refazendo a mesma fila de questões da tentativa anterior.';
        vista = 'sessao';
        renderTudo();
      } else if (acao === 'limpar-historico') {
        if (typeof window !== 'undefined' && typeof window.confirm === 'function' &&
            !window.confirm('Remover TODO o histórico de tentativas de questões?')) return;
        limparHistorico();
        mensagem = 'Histórico de tentativas de questões removido (os dados de currículo e flashcards não foram tocados).';
        renderTudo();
      }
    });

    container.addEventListener('change', (e) => {
      const alvo = e.target && e.target.closest ? e.target.closest('[data-qz]') : null;
      if (!alvo) return;
      const campo = alvo.getAttribute('data-qz');
      if (campo === 'aleatorio') {
        cfgUI.aleatorio = alvo.checked;
      } else if (campo === 'escopo' || campo === 'nivel' || campo === 'estilo' || campo === 'formato') {
        cfgUI[campo] = String(alvo.value || '');
      } else if (campo === 'quantidade') {
        cfgUI.quantidade = parseInt(alvo.value, 10);
        if (QUANTIDADES.indexOf(cfgUI.quantidade) === -1) cfgUI.quantidade = 10;
      } else if (campo === 'tempoMinutos') {
        cfgUI.tempoMinutos = parseInt(alvo.value, 10);
        if (TEMPOS.indexOf(cfgUI.tempoMinutos) === -1) cfgUI.tempoMinutos = 0;
      } else {
        return;
      }
      /* Trocar filtro com sessão ativa: avisa que a sessão atual continua. */
      if (sessao && sessao.estado === 'em-andamento') {
        mensagem = 'Filtros atualizados — valem para o PRÓXIMO simulado; a sessão ativa mantém a fila original.';
      }
      renderTudo();
    });

    /* Restaura a última configuração usada (se válida). */
    const estadoInicial = carregarEstado();
    if (estadoInicial.ultimaConfig) {
      const uc = estadoInicial.ultimaConfig;
      if (ESCOPOS[uc.escopo]) cfgUI.escopo = uc.escopo;
      if (uc.nivel === '' || ROTULO_NIVEL[uc.nivel]) cfgUI.nivel = uc.nivel || '';
      if (uc.estilo === '' || ROTULO_ESTILO[uc.estilo]) cfgUI.estilo = uc.estilo || '';
      if (uc.formato === '' || ROTULO_FORMATO[uc.formato]) cfgUI.formato = uc.formato || '';
      if (QUANTIDADES.indexOf(uc.quantidade) !== -1) cfgUI.quantidade = uc.quantidade;
      cfgUI.aleatorio = uc.aleatorio !== false;
      if (TEMPOS.indexOf(uc.tempoMinutos) !== -1) cfgUI.tempoMinutos = uc.tempoMinutos;
    }

    renderTudo();
    console.log('Quiz inicializado —', obterBanco().length, 'questões autorais no banco.');
  } else {
    console.warn('Quiz: contêiner #quiz-app não encontrado no index.html — UI não montada.');
  }

  /* API pública para testes (smoke test em Node/vm) e inspeção. */
  window.QuizApp = {
    versao: 'quiz-engine v1 (Seção 10.2 — documentado no cabeçalho)',
    constantes: { STORAGE_KEY: STORAGE_KEY, NS: NS, MAX_TENTATIVAS: MAX_TENTATIVAS, QUANTIDADES: QUANTIDADES, TEMPOS: TEMPOS, ESCOPOS: ESCOPOS },
    esc: esc,
    formatarTempo: formatarTempo,
    obterBanco: obterBanco,
    validarQuestao: validarQuestao,
    filtrar: filtrar,
    contarBanco: contarBanco,
    embaralhar: embaralhar,
    montarSessao: montarSessao,
    percorrer: percorrer,
    responder: responder,
    alternarMarcacao: alternarMarcacao,
    flushTempo: flushTempo,
    tempoDecorridoMs: tempoDecorridoMs,
    tempoRestanteMs: tempoRestanteMs,
    corrigir: corrigir,
    registrarTentativa: registrarTentativa,
    limparHistorico: limparHistorico,
    carregarEstado: carregarEstado,
    salvarEstado: salvarEstado,
    _ui: {
      renderTudo: renderTudo,
      finalizarSessao: finalizarSessao,
      getSessao: () => sessao,
      getVista: () => vista,
      getCfg: () => cfgUI,
      getResultado: () => ultimoResultado,
      getMensagem: () => mensagem
    }
  };
});
