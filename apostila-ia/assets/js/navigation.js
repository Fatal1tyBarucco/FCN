/* navigation.js — responsável único pela navegação/renderização do currículo.
 *
 * DECISÕES DE DESIGN (documentadas conforme regra do projeto de registrar trade-offs):
 *
 * 1) Esquema de chaves unificado: "modulo-N" COM hífen ("modulo-1", "modulo-2",
 *    "modulo-3"). Motivo: já é o esquema dos dados reais em assets/data/*.js
 *    (curriculum.js, curriculum_m2.js, curriculum_m3.js) e dos IDs de tópico
 *    ("modulo-1-unidade-1-topico-1-..."). O fallback antigo de app.js usava
 *    "modulo1" (sem hífen) e foi removido junto com a duplicação.
 *
 * 2) Consolidação: navigation.js é o ÚNICO script que renderiza a árvore de
 *    currículo no #curriculum, trata cliques e marca progresso no localStorage
 *    (chave 'apostila-ia-progresso' — inalterada). Antes, app.js E navigation.js
 *    sobrescreviam o innerHTML do #curriculum e registravam handlers de clique
 *    duplicados (app.js sobrescrevia o conteúdo depois; navigation.js quebrava
 *    com SyntaxError e nunca executava). app.js ficou com tema + boot apenas.
 *
 * 3) Registro unificado de dados: os arquivos assets/data/*.js declaram `const`
 *    no escopo global de script — NÃO são propriedades de window. Por isso
 *    window.curriculumData ficava sempre indefinido e o fallback vazio era
 *    usado. Este script consolida tudo em:
 *      window.apostilaDados = { curriculum: { "modulo-1":…, "modulo-2":…, … },
 *                               flashcards: { "modulo-1":…, "modulo-2":…, … } }
 *      window.curriculumData  → alias retro-compatível de apostilaDados.curriculum
 *    Guardas `typeof` evitam erro se algum arquivo de dados não for carregado.
 *
 *    P1.1 — descoberta por convenção (substitui a antiga lista fixa m1..m3):
 *    para N de 1..8, se existir a global `curriculum` (M1) ou `curriculumM{N}`
 *    (M2..M8) — idem `flashcardsM{N}` —, o módulo entra na consolidação.
 *    Módulo sem arquivo é pulado em silêncio: ausência não é erro e não lança
 *    exceção (desde o P1-C, 2026-10-21, nenhum módulo de 1 a 8 está nessa
 *    situação — M6 inclusive). Adicionar um módulo futuro passa a exigir apenas o
 *    arquivo de dado + a tag <script> no index.html — nenhum outro script
 *    precisa mudar (idempotente e escalável). As globais são `const` no
 *    escopo global léxico (não propriedades de window) e `eval` é proibido
 *    pelo projeto, por isso a detecção é uma cadeia explícita de `typeof`.
 *
 * 4) A árvore é APENDADA no #curriculum (conteúdo estático existente preservado),
 *    em vez de substituí-lo como o comportamento anterior fazia.
 *
 * 5) Clique num tópico/subtópico exibe objetivoAprendizagem + conteudo (campos já
 *    existentes nos dados) num painel abaixo da árvore — substitui o alert()
 *    placeholder anterior por exibição real do conteúdo existente. Nenhum
 *    conteúdo curricular novo foi inventado.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Descoberta de módulos por convenção (P1.1) ----------
   * Fonte: `curriculum` (M1) ou `curriculumM{N}` (M2..M8); flashcards:
   * `flashcardsM{N}`. Cada arquivo declara exatamente uma chave "modulo-N"
   * (verificado para curriculum.js e curriculum_m2..m8.js). A cadeia de
   * `typeof` é explícita porque as fontes são `const` do escopo global léxico
   * dos scripts (inacessíveis por window['curriculumM4']) e eval é proibido. */
  function fonteCurriculum(n) {
    switch (n) {
      case 1: return typeof curriculum !== 'undefined' && curriculum ? curriculum['modulo-1'] : null;
      case 2: return typeof curriculumM2 !== 'undefined' && curriculumM2 ? curriculumM2['modulo-2'] : null;
      case 3: return typeof curriculumM3 !== 'undefined' && curriculumM3 ? curriculumM3['modulo-3'] : null;
      case 4: return typeof curriculumM4 !== 'undefined' && curriculumM4 ? curriculumM4['modulo-4'] : null;
      case 5: return typeof curriculumM5 !== 'undefined' && curriculumM5 ? curriculumM5['modulo-5'] : null;
      case 6: return typeof curriculumM6 !== 'undefined' && curriculumM6 ? curriculumM6['modulo-6'] : null;
      case 7: return typeof curriculumM7 !== 'undefined' && curriculumM7 ? curriculumM7['modulo-7'] : null;
      case 8: return typeof curriculumM8 !== 'undefined' && curriculumM8 ? curriculumM8['modulo-8'] : null;
      default: return null;
    }
  }

  function fonteFlashcards(n) {
    switch (n) {
      case 1: return typeof flashcardsM1 !== 'undefined' && Array.isArray(flashcardsM1) ? flashcardsM1 : null;
      case 2: return typeof flashcardsM2 !== 'undefined' && Array.isArray(flashcardsM2) ? flashcardsM2 : null;
      case 3: return typeof flashcardsM3 !== 'undefined' && Array.isArray(flashcardsM3) ? flashcardsM3 : null;
      case 4: return typeof flashcardsM4 !== 'undefined' && Array.isArray(flashcardsM4) ? flashcardsM4 : null;
      case 5: return typeof flashcardsM5 !== 'undefined' && Array.isArray(flashcardsM5) ? flashcardsM5 : null;
      case 6: return typeof flashcardsM6 !== 'undefined' && Array.isArray(flashcardsM6) ? flashcardsM6 : null;
      case 7: return typeof flashcardsM7 !== 'undefined' && Array.isArray(flashcardsM7) ? flashcardsM7 : null;
      case 8: return typeof flashcardsM8 !== 'undefined' && Array.isArray(flashcardsM8) ? flashcardsM8 : null;
      default: return null;
    }
  }

  const MAX_MODULOS_DESCOBERTA = 8; // 8 módulos obrigatórios (Escrita.txt, Seção 6)
  const registro = [];
  for (let n = 1; n <= MAX_MODULOS_DESCOBERTA; n++) {
    const dados = fonteCurriculum(n);
    const cartoes = fonteFlashcards(n);
    if (!dados && !cartoes) continue; // módulo ausente: pulado em silêncio (1..8 têm arquivo desde o P1-C)
    registro.push({ chave: 'modulo-' + n, dados: dados, flashcards: cartoes || [] });
  }

  const apostilaDados = { curriculum: {}, flashcards: {} };
  registro.forEach((item) => {
    if (item.dados) apostilaDados.curriculum[item.chave] = item.dados;
    if (item.flashcards.length) apostilaDados.flashcards[item.chave] = item.flashcards;
  });
  window.apostilaDados = apostilaDados;
  window.curriculumData = apostilaDados.curriculum; // alias retro-compatível

  /* ---------- Persistência de progresso (chave inalterada) ---------- */
  const storageKey = 'apostila-ia-progresso';

  function loadProgresso() {
    try {
      const serialized = localStorage.getItem(storageKey);
      return serialized ? JSON.parse(serialized) : {};
    } catch (e) {
      console.error('Erro ao carregar progresso:', e);
      return {};
    }
  }

  function saveProgresso(progresso) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progresso));
    } catch (e) {
      console.error('Erro ao salvar progresso:', e);
    }
  }

  /* Deriva a chave "modulo-N" a partir do ID do tópico.
   * IDs existentes: "modulo-1-unidade-1-topico-1-..." (M1) e "m2-u1-t1-s1",
   * "m4-u1-t1-s1", "m8-u1-t1-s1" (M2 em diante — o mesmo padrão dos dados de
   * M4/M5/M7/M8). Fallback honesto quando não reconhecido. */
  function moduloDoId(id) {
    const h = /^modulo-(\d+)-/.exec(id);
    if (h) return 'modulo-' + h[1];
    const m = /^m(\d+)-/.exec(id);
    if (m) return 'modulo-' + m[1];
    return 'modulo-indeterminado';
  }

  function registrarVisita(topicoId) {
    const progresso = loadProgresso();
    const mod = moduloDoId(topicoId);
    if (!progresso[mod]) progresso[mod] = {};
    if (!progresso[mod][topicoId]) {
      progresso[mod][topicoId] = {
        acertos: 0,
        dificuldade: 'média',
        dataConclusao: null,
        tentativas: 0
      };
    }
    progresso[mod][topicoId].tentativas++;
    progresso[mod][topicoId].dataConclusao = new Date().toISOString();
    saveProgresso(progresso);
  }

  /* ---------- Renderização da árvore ---------- */
  const curriculumDiv = document.getElementById('curriculum');
  if (!curriculumDiv) return;

  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Índice id → { titulo, objetivoAprendizagem, conteudo, modulo } para o painel. */
  const indice = {};
  registro.forEach((item) => {
    const mod = item.dados;
    if (!mod || !mod.unidades) return;
    mod.unidades.forEach((unidade) => {
      (unidade.topicos || []).forEach((topico) => {
        indice[topico.id] = {
          titulo: topico.titulo,
          objetivoAprendizagem: topico.objetivoAprendizagem || null,
          conteudo: topico.conteudo || null,
          modulo: item.chave,
          ehTopicoPai: Array.isArray(topico.subtopicos) && topico.subtopicos.length > 0
        };
        (topico.subtopicos || []).forEach((sub) => {
          indice[sub.id] = {
            titulo: sub.titulo,
            objetivoAprendizagem: sub.objetivoAprendizagem || null,
            conteudo: sub.conteudo || null,
            modulo: item.chave,
            ehTopicoPai: false
          };
        });
      });
    });
  });

  /* ---------- Renderização ACESSÍVEL da árvore (WCAG 2.1 AA) ----------
   * Converte a árvore em estrutura semântica role="tree"/role="treeitem"
   * com aria-level/aria-setsize/aria-posinset e aria-expanded nos nós
   * expansíveis. Botão de toggle (expandir/recolher) com aria-label
   * descritivo; roving tabindex + navegação por teclado tratados abaixo. */
  function renderModulo(chave, mod, moduloIndex, totalModulos) {
    let html = '';
    html += '<li class="tree-node tree-modulo has-children" role="treeitem" aria-level="1" ';
    html += 'aria-setsize="' + totalModulos + '" aria-posinset="' + (moduloIndex + 1) + '" ';
    html += 'aria-expanded="true" data-node-type="modulo" data-node-label="' + esc(chave + ' — ' + mod.titulo) + '">';
    html += '<button type="button" class="tree-toggle" aria-label="Recolher unidades de ' + esc(chave + ' — ' + mod.titulo) + '" aria-expanded="true" tabindex="-1"></button>';
    html += '<span class="tree-label tree-modulo-label">' + esc(chave) + ' — ' + esc(mod.titulo) + '</span>';
    html += '<ul class="tree-group" role="group">';
    const unidades = mod.unidades || [];
    unidades.forEach((unidade, ui) => {
      html += '<li class="tree-node tree-unidade has-children" role="treeitem" aria-level="2" ';
      html += 'aria-setsize="' + unidades.length + '" aria-posinset="' + (ui + 1) + '" ';
      html += 'aria-expanded="true" data-node-type="unidade" data-node-label="' + esc(unidade.titulo) + '">';
      html += '<button type="button" class="tree-toggle" aria-label="Recolher tópicos de ' + esc(unidade.titulo) + '" aria-expanded="true" tabindex="-1"></button>';
      html += '<span class="tree-label tree-unidade-label">' + esc(unidade.titulo) + '</span>';
      html += '<ul class="tree-group" role="group">';
      const topicos = unidade.topicos || [];
      topicos.forEach((topico, ti) => {
        const temSub = Array.isArray(topico.subtopicos) && topico.subtopicos.length > 0;
        html += '<li class="tree-node tree-topico' + (temSub ? ' has-children' : '') + '" role="treeitem" ';
        html += 'aria-level="3" aria-setsize="' + topicos.length + '" aria-posinset="' + (ti + 1) + '" ';
        if (temSub) html += 'aria-expanded="false" ';
        html += 'data-node-type="topico" data-topic-id="' + esc(topico.id) + '">';
        if (temSub) {
          html += '<button type="button" class="tree-toggle" aria-label="Expandir subtópicos de ' + esc(topico.titulo) + '" aria-expanded="false" tabindex="-1"></button>';
        } else {
          html += '<span class="tree-toggle tree-toggle-placeholder" aria-hidden="true">•</span>';
        }
        html += '<a href="#" class="tree-link" data-topic="' + esc(topico.id) + '" tabindex="-1">' + esc(topico.titulo) + '</a>';
        if (temSub) {
          html += '<ul class="tree-group tree-subtopicos" role="group" hidden>';
          const subs = topico.subtopicos;
          subs.forEach((sub, si) => {
            html += '<li class="tree-node tree-subtopico" role="treeitem" aria-level="4" ';
            html += 'aria-setsize="' + subs.length + '" aria-posinset="' + (si + 1) + '" ';
            html += 'data-node-type="subtopico" data-subtopic-id="' + esc(sub.id) + '">';
            html += '<a href="#" class="tree-link" data-subtopic="' + esc(sub.id) + '" tabindex="-1">' + esc(sub.titulo) + '</a>';
            html += '</li>';
          });
          html += '</ul>';
        }
        html += '</li>';
      });
      html += '</ul></li>';
    });
    html += '</ul></li>';
    return html;
  }

  const chaves = Object.keys(apostilaDados.curriculum);
  let arvoreHtml;
  if (chaves.length === 0) {
    arvoreHtml = '<p role="status">Nenhum conteúdo curricular carregado. Verifique os arquivos em assets/data/.</p>';
  } else {
    arvoreHtml = '<h2 id="arvore-titulo">Árvore curricular</h2>';
    arvoreHtml += '<ul class="curriculum-tree" role="tree" aria-label="Árvore curricular" aria-multiselectable="false" tabindex="-1">';
    chaves.forEach((chave, mi) => {
      arvoreHtml += renderModulo(chave, apostilaDados.curriculum[chave], mi, chaves.length);
    });
    arvoreHtml += '</ul>';
  }

  /* Apenda árvore + painel sem destruir o conteúdo estático do #curriculum. */
  const container = document.createElement('div');
  container.id = 'navegacao-curriculo';
  container.setAttribute('role', 'navigation');
  container.setAttribute('aria-label', 'Navegação do currículo');
  container.innerHTML = arvoreHtml +
    '<div id="painel-conteudo" role="region" aria-live="polite" aria-label="Conteúdo do tópico selecionado" tabindex="-1">' +
    '<p><em>Selecione um tópico ou subtópico acima para exibir o conteúdo registrado nos dados.</em></p>' +
    '</div>';
  curriculumDiv.appendChild(container);

  /* ---------- Clique: exibir conteúdo + registrar progresso ---------- */
  const painel = document.getElementById('painel-conteudo');

  /* ---------- Vídeos complementares (Seção 12.2 do Escrita.txt) ----------
   * Agrupa os vídeos verificados de references.js por módulo (chave
   * "modulo-N"), validando o ID (11 chars, charset YouTube) e montando a
   * URL de embed no domínio youtube-nocookie.com. Nenhum eval, nenhum fetch.
   * Vídeos são COMPLEMENTARES e opcionais — nunca substituem a apostila. */
  const videosPorModulo = (function () {
    const mapa = {};
    const lista = (typeof window !== 'undefined' && Array.isArray(window.references))
      ? window.references : [];
    const reModulo = /^M(\d+)/;
    const reId = /^[A-Za-z0-9_-]{11}$/;
    lista.forEach(function (ref) {
      if (!ref || ref.formato !== 'video' || ref.status !== 'verificado') return;
      const id = ref.idVideo;
      if (typeof id !== 'string' || !reId.test(id)) return;
      const m = reModulo.exec(String(ref.topico || ''));
      if (!m) return;
      const chave = 'modulo-' + m[1];
      const embed = 'https://www.youtube-nocookie.com/embed/' + id;
      if (!mapa[chave]) mapa[chave] = [];
      mapa[chave].push({
        id: id,
        titulo: (typeof ref.titulo === 'string' && ref.titulo) ? ref.titulo : id,
        canal: (typeof ref.canal === 'string' && ref.canal) ? ref.canal : (ref.organizacao || '')
      , embed: embed });
    });
    return mapa;
  })();

  function videosComplementaresHtml(modulo) {
    const vids = videosPorModulo[modulo];
    if (!Array.isArray(vids) || vids.length === 0) return '';
    let html = '';
    html += '<section class="videos-complementares" aria-label="Vídeos complementares (opcional)">';
    html += '<h5>Vídeos complementares (opcional)</h5>';
    html += '<p><em>Conteúdo audiovisual complementar — não substitui a apostila. A disponibilidade depende do YouTube e pode variar por região.</em></p>';
    vids.forEach(function (v) {
      html += '<article class="video-item">';
      html += '<p><strong>' + esc(v.titulo) + '</strong> — ' + esc(v.canal) + '</p>';
      html += '<div class="video-embed-wrap">';
      const tituloV = (typeof v.titulo === 'string' && v.titulo.trim()) ? v.titulo.trim() : (v.id || 'Vídeo complementar');
      html += '<iframe class="video-embed" src="' + esc(v.embed) + '" title="' + esc(tituloV) + '" aria-label="' + esc(tituloV) + '" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
      html += '</div>';
      html += '</article>';
    });
    html += '</section>';
    return html;
  }

  function mostrarConteudo(topicoId) {
    const info = indice[topicoId];
    if (!info || !painel) return;
    let html = '<h4>' + esc(info.titulo) + '</h4>';
    html += '<p><span class="label label-ok">' + esc(info.modulo) + '</span></p>';
    if (info.objetivoAprendizagem) {
      html += '<p><strong>Objetivo de aprendizagem:</strong> ' + esc(info.objetivoAprendizagem) + '</p>';
    }
    if (info.conteudo) {
      html += '<p>' + esc(info.conteudo) + '</p>';
    } else if (info.ehTopicoPai) {
      html += '<p><em>Sem conteúdo textual próprio: este tópico agrupa subtópicos — selecione um dos subtópicos listados acima.</em></p>';
    } else {
      html += '<p><em>Conteúdo textual ainda não registrado para este item nos dados de assets/data/.</em></p>';
    }
    /* Vídeos complementares do módulo do tópico exibido (Seção 12.2). */
    html += videosComplementaresHtml(info.modulo);
    /* Personalização: favorito + anotações (Seção 11). */
    var fav = (window.ApostilaPersonalizacao && window.ApostilaPersonalizacao.ehFavorito) ? window.ApostilaPersonalizacao.ehFavorito(topicoId) : false;
    html += '<div class="personalizacao-bar" style="margin-top:12px;padding-top:8px;border-top:1px solid var(--border,#e5e7eb);">';
    html += '<button type="button" class="btn-favorito" data-topic="' + esc(topicoId) + '" aria-pressed="' + (fav ? 'true' : 'false') + '" style="margin-right:8px;">' + (fav ? '★ Favorito' : '☆ Favoritar') + '</button>';
    html += '<button type="button" class="btn-anotacao" data-topic="' + esc(topicoId) + '" style="margin-right:8px;">📝 Anotações</button>';
    html += '</div>';
    html += '<div class="anotacao-area" data-topic="' + esc(topicoId) + '" style="display:none;margin-top:8px;">';
    html += '<textarea class="anotacao-texto" rows="4" style="width:100%;" placeholder="Escreva sua anotação...">' + esc((window.ApostilaPersonalizacao && window.ApostilaPersonalizacao.obterAnotacao) ? window.ApostilaPersonalizacao.obterAnotacao(topicoId) : '') + '</textarea>';
    html += '<button type="button" class="btn-salvar-anotacao" data-topic="' + esc(topicoId) + '" style="margin-top:4px;">Salvar anotação</button>';
    html += '</div>';
    painel.innerHTML = html;
    // registrar visita/retomada
    if (window.ApostilaPersonalizacao && window.ApostilaPersonalizacao.aoNavegar) window.ApostilaPersonalizacao.aoNavegar(topicoId);
    // handlers
    var btnFav = painel.querySelector('.btn-favorito');
    if (btnFav) btnFav.addEventListener('click', function () {
      if (!window.ApostilaPersonalizacao) return;
      var agoraFav = window.ApostilaPersonalizacao.alternarFavorito(topicoId);
      btnFav.textContent = agoraFav ? '★ Favorito' : '☆ Favoritar';
      btnFav.setAttribute('aria-pressed', agoraFav ? 'true' : 'false');
    });
    var btnAnot = painel.querySelector('.btn-anotacao');
    var area = painel.querySelector('.anotacao-area');
    if (btnAnot && area) btnAnot.addEventListener('click', function () { area.style.display = (area.style.display === 'none' ? 'block' : 'none'); });
    var btnSalvar = painel.querySelector('.btn-salvar-anotacao');
    if (btnSalvar) btnSalvar.addEventListener('click', function () {
      var ta = painel.querySelector('.anotacao-texto');
      if (window.ApostilaPersonalizacao && ta) window.ApostilaPersonalizacao.salvarAnotacao(topicoId, ta.value);
      btnSalvar.textContent = 'Salvo ✓';
      setTimeout(function () { btnSalvar.textContent = 'Salvar anotação'; }, 1500);
    });
  }

  function alternarNo(no) {
    if (!no || !no.classList.contains('has-children')) return;
    const expandido = no.getAttribute('aria-expanded') === 'true';
    const novo = !expandido;
    no.setAttribute('aria-expanded', String(novo));
    const toggle = no.querySelector(':scope > .tree-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(novo));
      // O ícone é desenhado em CSS a partir de aria-expanded; não há texto visual no botão.
      const tipo = no.getAttribute('data-node-type') || 'topico';
      const titulo = no.getAttribute('data-node-label') || ((no.getAttribute('data-topic-id') && indice[no.getAttribute('data-topic-id')]) ? indice[no.getAttribute('data-topic-id')].titulo : '');
      const objeto = tipo === 'modulo' ? 'unidades de ' : (tipo === 'unidade' ? 'tópicos de ' : 'subtópicos de ');
      if (titulo) toggle.setAttribute('aria-label', (novo ? 'Recolher ' : 'Expandir ') + objeto + titulo);
    }
    const grupo = no.querySelector(':scope > .tree-subtopicos, :scope > .tree-group');
    if (grupo) {
      if (novo) grupo.removeAttribute('hidden'); else grupo.setAttribute('hidden', '');
    }
  }

  /* Delegação de clique: links mostram conteúdo; toggles expandem/recolhem. */
  container.addEventListener('click', (e) => {
    const toggle = e.target.closest('.tree-toggle');
    if (toggle && toggle.classList.contains('tree-toggle') && !toggle.classList.contains('tree-toggle-placeholder')) {
      e.preventDefault();
      const no = toggle.closest('.tree-node');
      alternarNo(no);
      return;
    }
    const target = e.target.closest('a[data-topic], a[data-subtopic]');
    if (!target) return;
    e.preventDefault();
    const topicoId = target.getAttribute('data-topic') || target.getAttribute('data-subtopic');
    if (!topicoId) return;
    mostrarConteudo(topicoId);
    registrarVisita(topicoId);
  });

  /* ---------- Roving tabindex + teclado (WCAG 2.1) ---------- */
  const tree = container.querySelector('.curriculum-tree');
  function treeitemsVisiveis() {
    const todos = Array.from(container.querySelectorAll('.tree-node[role="treeitem"]'));
    return todos.filter((no) => {
      // descarta nós dentro de grupo colapsado (hidden)
      let pai = no.parentElement;
      while (pai && pai !== container) {
        if (pai.hasAttribute && pai.hasAttribute('hidden')) return false;
        if (pai.classList && pai.classList.contains('tree-subtopicos') && pai.hasAttribute('hidden')) return false;
        pai = pai.parentElement;
      }
      return true;
    });
  }
  function focar(no) {
    if (!no) return;
    const items = treeitemsVisiveis();
    items.forEach((it) => { it.setAttribute('tabindex', '-1'); });
    no.setAttribute('tabindex', '0');
    try { no.focus(); } catch (e) {}
  }
  // tabindex inicial: primeiro item 0
  const items0 = treeitemsVisiveis();
  if (items0.length) {
    items0.forEach((it, i) => it.setAttribute('tabindex', i === 0 ? '0' : '-1'));
  }

  function paiDe(no) {
    // pai treeitem contendo este nó
    let p = no.parentElement;
    while (p && p !== container) {
      if (p.classList && p.classList.contains('tree-node')) return p;
      p = p.parentElement;
    }
    return null;
  }

  if (tree) {
    container.addEventListener('keydown', (e) => {
      const ativo = document.activeElement && container.contains(document.activeElement)
        ? document.activeElement.closest('.tree-node[role="treeitem"]')
        : null;
      if (!ativo) return;
      const items = treeitemsVisiveis();
      const idx = items.indexOf(ativo);
      let handled = true;
      switch (e.key) {
        case 'ArrowDown':
          if (idx >= 0 && idx < items.length - 1) focar(items[idx + 1]);
          break;
        case 'ArrowUp':
          if (idx > 0) focar(items[idx - 1]);
          break;
        case 'ArrowRight':
          if (ativo.classList.contains('has-children')) {
            if (ativo.getAttribute('aria-expanded') !== 'true') {
              alternarNo(ativo);
              const primeiroFilho = ativo.querySelector(':scope > .tree-group > .tree-node, :scope > .tree-subtopicos > .tree-node');
              if (primeiroFilho) focar(primeiroFilho);
            } else {
              const primeiroFilho = ativo.querySelector(':scope > .tree-subtopicos > .tree-node');
              if (primeiroFilho) focar(primeiroFilho);
            }
          }
          break;
        case 'ArrowLeft':
          if (ativo.classList.contains('has-children') && ativo.getAttribute('aria-expanded') === 'true') {
            alternarNo(ativo);
          } else {
            const p = paiDe(ativo);
            if (p) focar(p);
          }
          break;
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const link = ativo.querySelector(':scope > a.tree-link, :scope > .tree-link');
          if (link) {
            const tid = link.getAttribute('data-topic') || link.getAttribute('data-subtopic');
            if (tid) { mostrarConteudo(tid); registrarVisita(tid); }
          } else if (ativo.classList.contains('has-children')) {
            alternarNo(ativo);
          }
          break;
        }
        case 'Home':
          if (items.length) focar(items[0]);
          break;
        case 'End':
          if (items.length) focar(items[items.length - 1]);
          break;
        default:
          handled = false;
      }
      if (handled) e.preventDefault();
    }, true);
  }

  /* API pública mínima para integração (ex.: busca global): exibe o conteúdo de um tópico/subtópico. */
  window.apostilaMostrarConteudo = mostrarConteudo;
  /* Exposição dos vídeos complementares por módulo (Seção 12.2) para integração/testes. */
  window.apostilaVideosPorModulo = videosPorModulo;

  console.log('Navegação inicializada — módulos carregados:', chaves);
});
