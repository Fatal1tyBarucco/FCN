/* search.js — Busca global (Seção 11 do Escrita.txt)
 *
 * ============================================================================
 * REGRAS DO PROJETO APLICADAS A ESTE ARQUIVO
 * ============================================================================
 *
 * 1) SEM eval. SEM fetch. SEM módulos ES. Funciona em abertura direta file://.
 *    O índice é construído em memória a partir de window.apostilaDados
 *    (consolidado pelo navigation.js) e window.questoesBanco (questions.js).
 *    Nenhuma requisição de rede é feita.
 *
 * 2) HONESTIDADE DE RESULTADOS: indexa apenas conteúdo real carregado. Se o
 *    termo não existe em nenhuma entrada, retorna "nenhum resultado". Nenhum
 *    resultado fictício, placeholder ou simulação de acerto.
 *
 * 3) SEGURANÇA: todo texto exibido em HTML passa por esc() antes de ir para
 *    innerHTML. A destaqueção usa <mark> sobre texto já escapado. Nada de
 *    innerHTML com conteúdo não escapado.
 *
 * 4) ESTILO: injeta <style> escopado (id "bus-search-style") no <head> no
 *    mount() e remove no destroy(). Usa variáveis CSS do :root definidas em
 *    assets/css/styles.css (--primary-color, --text-color, etc.).
 *
 * 5) AUTOMONTAGEM: no DOMContentLoaded, procura #search-app e monta. Se o
 *    contêiner não existir (file:// sem wiring, ou wiring não feito), mount()
 *    em contêiner ausente NÃO lança exceção — apenas avisa no console.
 *
 * 6) INDEXAÇÃO:
 *    - Currículo: tópicos (pai) e subtópicos — campos indexados: titulo,
 *      objetivoAprendizagem, conteudo, exemplos (enunciado + resposta/correcao),
 *      exercicios (enunciado + resposta).
 *    - Flashcards: frente, verso, explicacao.
 *    - Questões: assunto, enunciado, contexto, justificativa, regra, pegadinha,
 *      alternativas (texto), analise (valores).
 *
 * 7) NORMALIZAÇÃO DE TÓPICO: IDs de currículo em dois esquemas distintos
 *    ("modulo-N-unidade-N-topico-N[-sub-N]" e "mN-uN-tN[-sN]") e flashcards/
 *    questões referenciando tópicos por IDs variados — todos normalizados para
 *    "mN-uN-tN" para o filtro de tópico funcionar de forma consistente. O
 *    campo `id` de navegação (para window.apostilaMostrarConteudo) preserva o
 *    ID original do dado.
 *
 * 8) PERSISTÊNCIA: nenhuma alteração na chave localStorage "apostila-ia-progresso".
 *    A busca não grava estado. Modo privado/file:// pode limpar dados — aviso
 *    padrão do projeto.
 */
(function () {
  'use strict';

  /* ============================ --- HELPERS --- ============================ */

  /* Escapa TODOS os caracteres perigosos para HTML (inclui aspas simples,
   * usadas em atributos data-*). Mesma função do flashcards.js. */
  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* Normaliza texto para matching accent-insensitive: lowercase + strip accents */
  function normalizar(texto) {
    if (!texto) return '';
    return String(texto)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /* Mapeia caracteres ASCII para classes regex com acentos correspondentes.
   * Com a flag 'i' do regex, também cobre maiúsculas. */
  var CLASSES_ACENTO = {
    a: '[a\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u0101\u0103\u0105]',
    e: '[\u00e8\u00e9\u00ea\u00eb\u0113\u0115\u0117]',
    i: '[\u00ec\u00ed\u00ee\u00ef\u0129\u012b\u012f]',
    o: '[\u00f2\u00f3\u00f4\u00f5\u00f6\u00f8\u014d\u014b\u014f]',
    u: '[\u00f9\u00fa\u00fb\u00fc\u0169\u016b\u016f\u016b]',
    c: '[c\u00e7]',
    n: '[n\u00f1\u0144]'
  };

  /* Constrói um fragmento de regex accent-insensitive a partir de um termo.
   * Escapa chars regex, depois expande letras acentuáveis. */
  function regexAccentInsensitive(termo) {
    var escaped = termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var result = '';
    for (var i = 0; i < escaped.length; i++) {
      var ch = escaped[i];
      var lower = ch.toLowerCase();
      if (CLASSES_ACENTO[lower]) {
        result += CLASSES_ACENTO[lower];
      } else {
        result += ch;
      }
    }
    return result;
  }

  /* Normaliza qualquer ID de tópico para o esquema "mN-uN-tN".
   * Trata: modulo-N-unidade-N-topico-N[-sub-N], mN-uN-tN[-sN], e fallback. */
  function normalizarTopico(id) {
    if (!id) return '';
    var m = /^m(\d+)-u(\d+)-t(\d+)-s\d+$/.exec(id);
    if (m) return 'm' + m[1] + '-u' + m[2] + '-t' + m[3];
    m = /^m(\d+)-u(\d+)-t(\d+)$/.exec(id);
    if (m) return id;
    m = /^modulo-(\d+)-unidade-(\d+)-topico-(\d+)-sub-\d+$/.exec(id);
    if (m) return 'm' + m[1] + '-u' + m[2] + '-t' + m[3];
    m = /^modulo-(\d+)-unidade-(\d+)-topico-(\d+)$/.exec(id);
    if (m) return 'm' + m[1] + '-u' + m[2] + '-t' + m[3];
    return id;
  }

  /* Extrai o número do módulo de uma chave "modulo-N" */
  function numModulo(chave) {
    var m = /^modulo-(\d+)$/.exec(chave);
    return m ? parseInt(m[1], 10) : 0;
  }

  /* Tokeniza a query: normalize, split, filtra tokens >= 2 chars */
  function tokenizar(query) {
    if (!query) return [];
    return normalizar(query)
      .trim()
      .split(/[\s,;]+/)
      .filter(function (t) { return t.length >= 2; });
  }

  /* Destaca termos de busca no texto já escapado, accent-insensitive. */
  function destacar(textoEscapado, termos) {
    if (!termos || !termos.length) return textoEscapado || '';
    var termRegexes = termos
      .filter(function (t) { return t.length >= 2; })
      .sort(function (a, b) { return b.length - a.length; })
      .map(regexAccentInsensitive);
    if (!termRegexes.length) return textoEscapado || '';
    var regex = new RegExp('(' + termRegexes.join('|') + ')', 'gi');
    return (textoEscapado || '').replace(regex, '<mark>$1</mark>');
  }

  /* Trunca texto em `max` caracteres, adicionando "..." se cortado */
  function truncar(texto, max) {
    if (!texto) return '';
    if (texto.length <= max) return texto;
    return texto.slice(0, max - 3) + '…';
  }

  /* Concatena campos de um exemplo (enunciado + resposta ou correcao) */
  function textoExemplo(ex) {
    if (!ex || typeof ex !== 'object') return '';
    return (ex.enunciado || '') + ' ' + (ex.resposta || ex.correcao || '');
  }

  /* Concatena campos de um exercício (enunciado + resposta) */
  function textoExercicio(ex) {
    if (!ex || typeof ex !== 'object') return '';
    return (ex.enunciado || '') + ' ' + (ex.resposta || '');
  }

  /* Junta campos de texto de um objeto, ignorando campos ausentes */
  function juntarTexto(obj, campos) {
    var partes = [];
    for (var i = 0; i < campos.length; i++) {
      var val = obj[campos[i]];
      if (val == null) continue;
      if (Array.isArray(val)) {
        for (var j = 0; j < val.length; j++) {
          partes.push(String(val[j]));
        }
      } else if (typeof val === 'object') {
        Object.keys(val).forEach(function (k) {
          partes.push(String(val[k]));
        });
      } else {
        partes.push(String(val));
      }
    }
    return partes.join(' ');
  }

  /* ============================ --- ESTADO --- ============================ */

  var estado = {
    container: null,
    montado: false,
    indice: [],
    topicoLabels: {},     // topicoNormalizado → titulo do tópico pai
    modulosEncontrados: [],
    topicosEncontrados: [],
    niveisEncontrados: [],
    filtros: { modulo: '', topico: '', nivel: '', tipoRecurso: '' },
    ultimaQuery: ''
  };

  /* ============================ --- INDEXAÇÃO --- ============================ */

  /* Constrói o índice a partir de window.apostilaDados e window.questoesBanco.
   * Retorna o array de entradas e armazena internamente para busca. */
  function indexar() {
    var indice = [];
    var topicoLabels = {};

    /* --- 1) Currículo (tópicos + subtópicos) --- */
    var dados = window.apostilaDados || {};
    var curriculum = dados.curriculum || window.curriculumData || {};

    Object.keys(curriculum).forEach(function (chave) {
      var mod = curriculum[chave];
      if (!mod || !mod.unidades) return;
      var modNum = numModulo(chave);

      mod.unidades.forEach(function (unidade) {
        (unidade.topicos || []).forEach(function (topico) {
          var tNormalizado = normalizarTopico(topico.id);
          if (topico.titulo && !topicoLabels[tNormalizado]) {
            topicoLabels[tNormalizado] = topico.titulo;
          }

          // Indexar tópico pai (pode ter conteúdo direto ou apenas agrupar)
          var textoTopico = juntarTexto(topico, [
            'titulo', 'objetivoAprendizagem', 'conteudo'
          ]);
          if (Array.isArray(topico.exemplos)) {
            topico.exemplos.forEach(function (ex) {
              textoTopico += ' ' + textoExemplo(ex);
            });
          }
          if (Array.isArray(topico.exercicios)) {
            topico.exercicios.forEach(function (ex) {
              textoTopico += ' ' + textoExercicio(ex);
            });
          }

          indice.push({
            id: topico.id,
            titulo: topico.titulo || 'Sem título',
            modulo: chave,
            moduloNum: modNum,
            topico: tNormalizado,
            topicoRaw: topico.id,
            nivel: '',
            tipo: 'topico',
            tipoRecurso: 'curriculum',
            texto: normalizar(textoTopico),
            original: textoTopico,
            unidade: unidade.titulo || ''
          });

          // Indexar subtópicos
          (topico.subtopicos || []).forEach(function (sub) {
            var textoSub = juntarTexto(sub, [
              'titulo', 'objetivoAprendizagem', 'conteudo'
            ]);
            if (Array.isArray(sub.exemplos)) {
              sub.exemplos.forEach(function (ex) {
                textoSub += ' ' + textoExemplo(ex);
              });
            }
            if (Array.isArray(sub.exercicios)) {
              sub.exercicios.forEach(function (ex) {
                textoSub += ' ' + textoExercicio(ex);
              });
            }

            indice.push({
              id: sub.id,
              titulo: sub.titulo || 'Sem título',
              modulo: chave,
              moduloNum: modNum,
              topico: tNormalizado,
              topicoRaw: sub.id,
              nivel: '',
              tipo: 'subtopico',
              tipoRecurso: 'curriculum',
              texto: normalizar(textoSub),
              original: textoSub,
              unidade: unidade.titulo || ''
            });
          });
        });
      });
    });

    /* --- 2) Flashcards --- */
    var flashcards = dados.flashcards || {};
    Object.keys(flashcards).forEach(function (chave) {
      var arr = flashcards[chave];
      if (!Array.isArray(arr)) return;
      var modNum = numModulo(chave);
      arr.forEach(function (fc) {
        if (!fc || !fc.id) return;
        var texto = juntarTexto(fc, ['frente', 'verso', 'explicacao']);
        var tNorm = normalizarTopico(fc.topico || '');
        if (fc.topico && !topicoLabels[tNorm] && fc.topico) {
          topicoLabels[tNorm] = fc.topico; // fallback: usar o raw como label
        }
        indice.push({
          id: fc.id,
          titulo: fc.frente || 'Sem título',
          modulo: chave,
          moduloNum: modNum,
          topico: tNorm,
          topicoRaw: fc.topico || '',
          nivel: fc.nivel || '',
          tipo: 'flashcard',
          tipoRecurso: 'flashcard',
          texto: normalizar(texto),
          original: texto,
          frente: fc.frente || '',
          verso: fc.verso || '',
          explicacao: fc.explicacao || '',
          unidade: ''
        });
      });
    });

    /* --- 3) Questões --- */
    var questoes = null;
    if (typeof questoesBanco !== 'undefined') questoes = questoesBanco;
    if (!questoes && typeof window !== 'undefined' && window.questoesBanco) {
      questoes = window.questoesBanco;
    }
    if (!questoes && typeof window !== 'undefined' && window.apostilaDados && window.apostilaDados.questoes) {
      questoes = window.apostilaDados.questoes;
    }

    if (Array.isArray(questoes)) {
      questoes.forEach(function (q) {
        if (!q || !q.id) return;
        var modNum = typeof q.modulo === 'number' ? q.modulo :
          parseInt(/^modulo-(\d+)$/.exec(q.modulo || '') && /^modulo-(\d+)$/.exec(q.modulo || '')[1], 10) || 0;
        var texto = juntarTexto(q, ['assunto', 'enunciado', 'contexto', 'justificativa', 'regra', 'pegadinha', 'trechoDeterminante']);
        if (Array.isArray(q.alternativas)) {
          q.alternativas.forEach(function (a) { texto += ' ' + (a.texto || ''); });
        }
        if (q.analise && typeof q.analise === 'object') {
          Object.keys(q.analise).forEach(function (k) { texto += ' ' + q.analise[k]; });
        }
        var tNorm = normalizarTopico(q.topico || '');

        indice.push({
          id: q.id,
          titulo: q.assunto || (q.enunciado ? truncar(q.enunciado, 80) : 'Sem título'),
          modulo: 'modulo-' + modNum,
          moduloNum: modNum,
          topico: tNorm,
          topicoRaw: q.topico || '',
          nivel: q.nivel || '',
          tipo: 'questao',
          tipoRecurso: 'questao',
          texto: normalizar(texto),
          original: texto,
          assunto: q.assunto || '',
          enunciado: q.enunciado || '',
          gabarito: q.gabarito || '',
          justificativa: q.justificativa || '',
          unidade: ''
        });
      });
    }

    /* --- Derivar opções de filtro únicas a partir do índice --- */
    var modulos = [], topicos = [], niveis = [];
    var modulosSet = {}, topicosSet = {}, niveisSet = {};
    var labels = Object.keys(topicoLabels).sort().reduce(function (acc, k) {
      acc[k] = topicoLabels[k];
      return acc;
    }, {});

    indice.forEach(function (e) {
      if (!modulosSet[e.modulo]) { modulosSet[e.modulo] = true; modulos.push(e.moduloNum); }
      if (e.topico && !topicosSet[e.topico]) { topicosSet[e.topico] = true; topicos.push(e.topico); }
      if (e.nivel && !niveisSet[e.nivel]) { niveisSet[e.nivel] = true; niveis.push(e.nivel); }
    });
    modulos.sort(function (a, b) { return a - b; });
    topicos.sort();
    var ordemNivel = { basico: 0, intermediario: 1, avancado: 2 };
    niveis.sort(function (a, b) {
      return (ordemNivel[a] !== undefined ? ordemNivel[a] : 9) -
             (ordemNivel[b] !== undefined ? ordemNivel[b] : 9);
    });

    estado.indice = indice;
    estado.topicoLabels = labels;
    estado.modulosEncontrados = modulos;
    estado.topicosEncontrados = topicos;
    estado.niveisEncontrados = niveis;

    return indice;
  }

  /* ============================ --- BUSCA --- ============================ */

  /* Busca no índice: tokenização AND, accent-insensitive. Aplica filtros. */
  function buscar(query, filtros) {
    if (!estado.indice.length) return [];
    var tokens = tokenizar(query);
    if (!tokens.length) return [];

    var f = filtros || estado.filtros;

    return estado.indice.filter(function (entrada) {
      /* Filtros */
      if (f.modulo && entrada.moduloNum !== f.modulo) return false;
      if (f.tipoRecurso && entrada.tipoRecurso !== f.tipoRecurso) return false;
      if (f.topico && entrada.topico !== f.topico) return false;
      if (f.nivel && (!entrada.nivel || entrada.nivel !== f.nivel)) return false;

      /* Matching: ALL tokens must be present in normalized text */
      for (var i = 0; i < tokens.length; i++) {
        if (entrada.texto.indexOf(tokens[i]) === -1) return false;
      }
      return true;
    });
  }

  /* ============================ --- RENDER --- ============================ */

  function injetarEstilos() {
    if (document.getElementById('bus-search-style')) return;
    var css = [
      '#search-app { font-family: var(--font-family, system-ui, sans-serif); font-size: 0.92rem; }',
      '#search-app .bus-header { display: flex; align-items: center; gap: .5rem; margin-bottom: .8rem; }',
      '#search-app .bus-header h3 { margin: 0; font-size: 1.05rem; color: var(--primary-color, #174878); }',
      '#search-app .bus-header svg { width: 1.1rem; height: 1.1rem; fill: var(--primary-color, #174878); }',
      '#search-app .bus-search-row { display: flex; gap: .4rem; margin-bottom: .8rem; }',
      '#search-app .bus-search-row input[type="text"] { flex: 1; padding: .45rem .6rem; border: 1px solid #dde2e7; border-radius: 8px; font-size: .92rem; }',
      '#search-app .bus-search-row button { padding: .45rem 1rem; border: 1px solid var(--primary-color, #174878); background: var(--primary-color, #174878); color: #fff; border-radius: 8px; cursor: pointer; font-size: .92rem; }',
      '#search-app .bus-search-row button:hover { background: #0d47a1; }',
      '#search-app .bus-filtros { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin-bottom: .8rem; padding: .6rem; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0; }',
      '#search-app .bus-filtros label { font-size: .85rem; color: #374151; display: flex; align-items: center; gap: .25rem; }',
      '#search-app .bus-filtros select { padding: .2rem .3rem; font-size: .85rem; border: 1px solid #dde2e7; border-radius: 4px; }',
      '#search-app .bus-clear { margin-left: auto; font-size: .8rem; color: #374151; cursor: pointer; text-decoration: underline; }',
      '#search-app .bus-status { font-size: .85rem; color: #374151; margin-bottom: .8rem; min-height: 1.2em; }',
      '#search-app .bus-result { border: 1px solid #dde2e7; border-radius: 10px; padding: .7rem 1rem; margin-bottom: .6rem; background: #fff; }',
      '#search-app .bus-result.marked { background: #fef7e0; border-color: #f3d23c; }',
      '#search-app .bus-meta { font-size: .78rem; color: #374151; margin-bottom: .4rem; display: flex; flex-wrap: wrap; gap: .25rem; align-items: center; }',
      '#search-app .bus-badge { display: inline-block; padding: .12rem .3rem; border-radius: 4px; font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .03em; }',
      '#search-app .bus-badge-mod { background: #e8f0fe; color: #111827; }',
      '#search-app .bus-badge-curriculum { background: #e6f4ea; color: #111827; }',
      '#search-app .bus-badge-subtopico { background: #dff7dd; color: #111827; }',
      '#search-app .bus-badge-flashcard { background: #fff3cd; color: #111827; }',
      '#search-app .bus-badge-questao { background: #f8d7da; color: #111827; }',
      '#search-app .bus-badge-basico { background: #e6f4ea; color: #111827; }',
      '#search-app .bus-badge-intermediario { background: #fff8e1; color: #111827; }',
      '#search-app .bus-badge-avancado { background: #fce8e6; color: #111827; }',
      '#search-app .bus-titulo { font-size: 1rem; font-weight: 600; margin-bottom: .3rem; color: var(--text-color, #202124); }',
      '#search-app .bus-meta-tipo { color: #111827; }',
      '#search-app .bus-excerpt { font-size: .88rem; line-height: 1.4; color: #3c4043; margin-bottom: .4rem; }',
      '#search-app .bus-result mark { background: #ffeb3b; color: #000; padding: 0 .15rem; border-radius: 2px; }',
      '#search-app .bus-link { display: inline-block; font-size: .82rem; color: var(--primary-color, #174878); text-decoration: underline; cursor: pointer; }',
      '#search-app .bus-link:hover { text-decoration: none; }',
      '#search-app .bus-aviso { background: #fff3cd; border: 1px solid #ffe082; border-radius: 8px; padding: .8rem 1rem; font-size: .9rem; color: #5a3a00; }',
      '#search-app .bus-vazio { font-size: .9rem; color: #374151; padding: 1rem; text-align: center; }',
      '#search-app .bus-preview { margin-top: .6rem; border-top: 1px solid #e0e0e0; padding-top: .6rem; font-size: .86rem; line-height: 1.45; color: #202124; }',
      '#search-app .bus-preview-titulo { font-weight: 600; margin-bottom: .3rem; color: var(--primary-color, #174878); }',
      '#search-app .bus-preview-corpo { white-space: pre-wrap; word-break: break-word; }',
      '@media (prefers-color-scheme: dark) {',
      '#search-app .bus-result { background: #2c3034; border-color: #374151; }',
      '#search-app .bus-result.marked { background: #2d240f; border-color: #8a7000; }',
      '#search-app .bus-filtros { background: #3c4043; border-color: #374151; }',
      '#search-app .bus-filtros label { color: #b3b7bc; }',
      '#search-app .bus-filtros select { background: #3c4043; color: #e8eaed; border-color: #374151; }',
      '#search-app .bus-status { color: #b3b7bc; }',
      '#search-app .bus-titulo { color: #e8eaed; }',
      '#search-app .bus-meta-tipo { color: #b3b7bc; }',
      '#search-app .bus-excerpt { color: #b3b7bc; }',
      '#search-app .bus-preview { border-color: #374151; }',
      '#search-app .bus-vazio { color: #b3b7bc; }'
      ].join('\n');

    var style = document.createElement('style');
    style.id = 'bus-search-style';
    style.textContent = css;
    var head = document.getElementsByTagName('head')[0];
    if (head) head.appendChild(style);
  }

  function removerEstilos() {
    var s = document.getElementById('bus-search-style');
    if (s && s.parentNode) s.parentNode.removeChild(s);
  }

  function labelModulo(n) {
    return n >= 1 && n <= 8 ? 'M' + n : 'Módulo ' + n;
  }

  function labelTipoRecurso(t) {
    var map = { curriculum: 'Currículo', flashcard: 'Flashcard', questao: 'Questão' };
    return map[t] || t;
  }

  function labelTipo(t) {
    var map = { topico: 'Tópico', subtopico: 'Subtópico', flashcard: 'Flashcard', questao: 'Questão' };
    return map[t] || t;
  }

  function labelNivel(n) {
    var map = { basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };
    return map[n] || n;
  }

  function opcoesModulo(selecionado) {
    var html = '<option value="">Todos os módulos</option>';
    estado.modulosEncontrados.forEach(function (n) {
      html += '<option value="' + n + '"' + (String(selecionado) === String(n) ? ' selected' : '') + '>' + esc(labelModulo(n)) + '</option>';
    });
    return html;
  }

  function opcoesTopico(selecionado) {
    var html = '<option value="">Todos os tópicos</option>';
    estado.topicosEncontrados.forEach(function (t) {
      var label = estado.topicoLabels[t] ? (esc(estado.topicoLabels[t]).slice(0, 60) + ' (' + esc(t) + ')') : esc(t);
      html += '<option value="' + esc(t) + '"' + (selecionado === t ? ' selected' : '') + '>' + label + '</option>';
    });
    return html;
  }

  function opcoesNivel(selecionado) {
    var html = '<option value="">Todos os níveis</option>';
    estado.niveisEncontrados.forEach(function (n) {
      html += '<option value="' + esc(n) + '"' + (selecionado === n ? ' selected' : '') + '>' + esc(labelNivel(n)) + '</option>';
    });
    return html;
  }

  function opcoesTipo(selecionado) {
    var html = '<option value="">Todos os tipos</option>';
    ['curriculum', 'flashcard', 'questao'].forEach(function (t) {
      html += '<option value="' + t + '"' + (selecionado === t ? ' selected' : '') + '>' + esc(labelTipoRecurso(t)) + '</option>';
    });
    return html;
  }

  function renderResultado(entrada, termos) {
    var excerpt = truncar(entrada.original || entrada.titulo || '', 220);
    var highlight = destacar(esc(excerpt), termos);

    var meta = '<span class="bus-badge bus-badge-mod">M' + entrada.moduloNum + '</span> ';
    meta += '<span class="bus-badge bus-badge-' + entrada.tipoRecurso + '">' + esc(labelTipoRecurso(entrada.tipoRecurso)) + '</span> ';
    if (entrada.tipo === 'subtopico') {
      meta += '<span class="bus-badge bus-badge-subtopico">' + esc(labelTipo(entrada.tipo)) + '</span> ';
    }
    if (entrada.nivel) {
      meta += '<span class="bus-badge bus-badge-' + entrada.nivel + '">' + esc(labelNivel(entrada.nivel)) + '</span>';
    }

    var titulo = entrada.tipo === 'questao' ?
      (esc(entrada.titulo) + ' <span class="bus-meta-tipo">' + esc(labelTipo(entrada.tipo)) + '</span>') :
      esc(entrada.titulo);

    var html = '<div class="bus-result" data-id="' + esc(entrada.id) + '">' +
      '<div class="bus-meta">' + meta + '</div>' +
      '<div class="bus-titulo">' + titulo + '</div>' +
      '<div class="bus-excerpt">' + (highlight || esc(truncar(entrada.titulo || '', 200))) + '</div>' +
      '<div><a class="bus-link" data-id="' + esc(entrada.id) + '" data-tipo="' + esc(entrada.tipo) + '" href="#">Ver conteúdo</a></div>' +
      buildPreview(entrada) +
      '</div>';
    return html;
  }

  function renderVazio(query) {
    return '<div class="bus-vazio">Nenhum resultado para <strong>' + esc(query) + '</strong>. ' +
      'O termo não foi encontrado no conteúdo carregado (currículo, flashcards e questões).</div>';
  }

  function buildPreview(entrada) {
    // Currículo navega no painel da navigation.js (apostilaMostrarConteudo).
    // Flashcards / questões: sem API de navegação — preview inline (ação visível).
    if (entrada.tipo !== 'flashcard' && entrada.tipo !== 'questao') return '';
    var titulo, corpo;
    if (entrada.tipo === 'flashcard') {
      titulo = 'Flashcard — ' + entrada.frente;
      corpo = entrada.verso || '';
      if (entrada.explicacao) corpo += ('\n\nExplicação: ' + entrada.explicacao);
    } else {
      titulo = 'Questão — ' + (entrada.assunto || entrada.titulo);
      corpo = entrada.enunciado || '';
      if (entrada.gabarito) corpo += ('\n\nGabarito: ' + entrada.gabarito);
      if (entrada.justificativa) corpo += ('\n\n' + entrada.justificativa);
    }
    return '<div class="bus-preview" data-id="' + esc(entrada.id) + '" style="display:none">' +
      '<div class="bus-preview-titulo">' + esc(titulo) + '</div>' +
      '<div class="bus-preview-corpo">' + esc(truncar(corpo, 700)) + '</div>' +
      '</div>';
  }

  function togglePreview(link) {
    if (!link || !link.closest) return;
    var result = link.closest('.bus-result');
    if (!result) return;
    var preview = result.querySelector('.bus-preview');
    if (!preview) return;
    preview.style.display = (preview.style.display === 'block') ? 'none' : 'block';
  }

  function renderizar() {
    if (!estado.container) return;
    var q = estado.ultimaQuery || '';
    var termos = q ? tokenizar(q) : [];

    // Calcula resultados e o texto de status ANTES de montar o HTML, para que
    // a linha "N resultados para X" seja embutida no mesmo innerHTML (antes,
    // renderStatus era chamado antes do innerHTML ser (re)montado e o texto era
    // apagado pelo container recém-construído).
    var statusTexto = esc(estado.indice.length) + ' entradas indexadas · Digite para buscar.';
    var resultados = null;
    if (q && termos.length) {
      resultados = buscar(q, estado.filtros);
      if (resultados.length > 0) {
        statusTexto = esc(resultados.length) + ' resultado(s) para "' + esc(q) + '"';
      } else {
        // Sem resultados: o status também precisa refletir a busca — antes
        // continuava "N entradas indexadas · Digite para buscar." enquanto o
        // corpo já dizia "Nenhum resultado".
        statusTexto = '0 resultado(s) para "' + esc(q) + '"';
      }
    }

    var html = '';
    // Header
    html += '<div class="bus-header"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.29C15.41 12.59 16 11.16 16 9.5 16 6.42 13.59 4 10.5 4S5 6.42 5 9.5 7.41 12.59 8 14.29l.29.28v.79l5 4.99L15.5 14zm-6-6h1.5v5H8.5v-5zm6.5 6.5l-5.5-5.5-1 1 5.5 5.5 1-1z"/></svg><h3>Busca global</h3></div>';

    // Search row
    html += '<div class="bus-search-row">';
    html += '<input type="text" id="bus-input" aria-label="Buscar conteúdo na apostila" placeholder="Digite termos para buscar..." value="' + esc(q) + '" autocomplete="off">';
    html += '<button type="button" id="bus-btn">Buscar</button>';
    html += '</div>';

    // Filters
    html += '<div class="bus-filtros">';
    html += '<label>Módulo: <select id="bus-filtro-modulo">' + opcoesModulo(estado.filtros.modulo) + '</select></label>';
    html += '<label>Tópico: <select id="bus-filtro-topico">' + opcoesTopico(estado.filtros.topico) + '</select></label>';
    html += '<label>Nível: <select id="bus-filtro-nivel">' + opcoesNivel(estado.filtros.nivel) + '</select></label>';
    html += '<label>Tipo: <select id="bus-filtro-tipo">' + opcoesTipo(estado.filtros.tipoRecurso) + '</select></label>';
    html += '<span class="bus-clear" id="bus-limpar">Limpar filtros</span>';
    html += '</div>';

    // Status
    html += '<div class="bus-status" id="bus-status">' + statusTexto + '</div>';

    // Results
    if (resultados !== null) {
      if (resultados.length === 0) {
        html += renderVazio(q);
      } else {
        resultados.forEach(function (r) {
          html += renderResultado(r, termos);
        });
      }
    } else if (q && !termos.length) {
      html += '<div class="bus-vazio">Digite pelo menos 2 caracteres para buscar.</div>';
    }

    estado.container.innerHTML = html;

    // Attach events
    attachEvents();
  }

  function attachEvents() {
    if (!estado.container) return;

    var input = estado.container.querySelector('#bus-input');
    var btn = estado.container.querySelector('#bus-btn');
    if (input && btn) {
      btn.onclick = function () { executarBusca(); };
      input.onkeydown = function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) { executarBusca(); }
      };
    }

    var limpar = estado.container.querySelector('#bus-limpar');
    if (limpar) {
      limpar.onclick = function () { limparFiltros(); };
    }

    ['bus-filtro-modulo', 'bus-filtro-topico', 'bus-filtro-nivel', 'bus-filtro-tipo'].forEach(function (id) {
      var el = estado.container.querySelector('#' + id);
      if (el) {
        el.onchange = function () { aplicarFiltrosEDisparar(); };
      }
    });
  }

  function executarBusca() {
    if (!estado.container) return;
    var input = estado.container.querySelector('#bus-input');
    if (!input) return;
    estado.ultimaQuery = input.value.trim();
    renderizar();
  }

  function aplicarFiltrosEDisparar() {
    if (!estado.container) return;
    var mods = estado.container.querySelector('#bus-filtro-modulo');
    var top = estado.container.querySelector('#bus-filtro-topico');
    var niv = estado.container.querySelector('#bus-filtro-nivel');
    var tip = estado.container.querySelector('#bus-filtro-tipo');
    estado.filtros.modulo = mods ? (mods.value ? parseInt(mods.value, 10) : '') : '';
    estado.filtros.topico = top ? top.value : '';
    estado.filtros.nivel = niv ? niv.value : '';
    estado.filtros.tipoRecurso = tip ? tip.value : '';
    renderizar();
  }

  function limparFiltros() {
    estado.filtros = { modulo: '', topico: '', nivel: '', tipoRecurso: '' };
    renderizar();
  }

  /* ============================ --- MOUNT / DESTROY --- ============================ */

  function mount(el) {
    if (!el || typeof el.appendChild === 'undefined') {
      console.warn('SearchApp: contêiner ausente — mount() ignorado.');
      return false;
    }
    // Idempotente: se já montado no mesmo elemento, não refaz
    if (estado.montado && estado.container === el) return true;
    // Se montado em outro elemento, destrói primeiro
    if (estado.montado) destroy();

    estado.container = el;
    estado.montado = true;
    injetarEstilos();

    var t0 = Date.now();
    try {
      indexar();
    } catch (e) {
      console.error('SearchApp: erro durante indexação:', e);
      estado.container.innerHTML = '<div class="bus-aviso">Erro ao indexar o conteúdo: ' + esc(e.message) + '</div>';
      return false;
    }
    var t1 = Date.now();

    // Renderiza com status de indexação
    renderizar();
    var statusEl = estado.container.querySelector('#bus-status');
    if (statusEl) {
      statusEl.textContent = estado.indice.length + ' entradas indexadas em ' + (t1 - t0) + 'ms · Digite para buscar.';
    }

    // Delegação de clique: currículo -> navigation.js; flashcards/questões -> preview in-line
    estado.container.addEventListener('click', function (e) {
      var link = e.target && e.target.closest ? e.target.closest('.bus-link') : null;
      if (!link) return;
      e.preventDefault();
      var dataId = link.getAttribute('data-id') || '';
      var dataTipo = link.getAttribute('data-tipo') || '';
      if (!dataId) return;
      // Currículo: delega ao painel de navegação (window.apostilaMostrarConteudo,
      // exposta por navigation.js). A busca NÃO grava progresso (regra 8) —
      // a visita é registrada pela própria navigation.js quando o conteúdo
      // é exibido via clique na árvore.
      if (dataTipo === 'topico' || dataTipo === 'subtopico') {
        if (typeof window.apostilaMostrarConteudo === 'function') {
          window.apostilaMostrarConteudo(dataId);
        } else {
          console.warn('SearchApp: window.apostilaMostrarConteudo não disponível.');
        }
        return;
      }
      // Flashcards / questões: alterna preview in-line (não há API de navegação para estes tipos).
      togglePreview(link);
    });

    return true;
  }

  function destroy() {
    if (estado.container) {
      estado.container.innerHTML = '';
    }
    estado.container = null;
    estado.montado = false;
    removerEstilos();
  }

  /* ============================ --- EXPOSIÇÃO GLOBAL --- ============================ */
  window.SearchApp = {
    mount: mount,
    indexar: indexar,
    destroy: destroy,
    buscar: buscar,
    _estado: estado,
    _helpers: {
      esc: esc,
      normalizar: normalizar,
      normalizarTopico: normalizarTopico,
      tokenizar: tokenizar,
      destacar: destacar,
      truncar: truncar
    }
  };

  /* Auto-montagem no DOMContentLoaded (se o contêiner existir) */
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('search-app');
    if (el) {
      window.SearchApp.mount(el);
    }
  });
})();
