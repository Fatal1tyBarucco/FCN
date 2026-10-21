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
 *    Módulo sem arquivo (hoje o M6) é pulado em silêncio: ausência não é erro
 *    e não lança exceção. Adicionar um módulo futuro passa a exigir apenas o
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
    if (!dados && !cartoes) continue; // ex.: M6 — sem arquivo, pulado em silêncio
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

  function renderModulo(chave, mod) {
    let html = '<h3>' + esc(chave) + ' — ' + esc(mod.titulo) + '</h3><ul>';
    (mod.unidades || []).forEach((unidade) => {
      html += '<li><strong>' + esc(unidade.titulo) + '</strong><ul>';
      (unidade.topicos || []).forEach((topico) => {
        html += '<li><a href="#" data-topic="' + esc(topico.id) + '">' + esc(topico.titulo) + '</a>';
        (topico.subtopicos || []).forEach((sub) => {
          html += '<ul><li><a href="#" data-subtopic="' + esc(sub.id) + '">' + esc(sub.titulo) + '</a></li></ul>';
        });
        html += '</li>';
      });
      html += '</ul></li>';
    });
    html += '</ul>';
    return html;
  }

  const chaves = Object.keys(apostilaDados.curriculum);
  let arvoreHtml;
  if (chaves.length === 0) {
    arvoreHtml = '<p>Nenhum conteúdo curricular carregado. Verifique os arquivos em assets/data/.</p>';
  } else {
    arvoreHtml = '<h3>Árvore de currículo (dados de assets/data/)</h3>';
    chaves.forEach((chave) => {
      arvoreHtml += renderModulo(chave, apostilaDados.curriculum[chave]);
    });
  }

  /* Apenda árvore + painel sem destruir o conteúdo estático do #curriculum. */
  const container = document.createElement('div');
  container.id = 'navegacao-curriculo';
  container.innerHTML = arvoreHtml +
    '<div id="painel-conteudo" role="region" aria-live="polite">' +
    '<p><em>Selecione um tópico ou subtópico acima para exibir o conteúdo registrado nos dados.</em></p>' +
    '</div>';
  curriculumDiv.appendChild(container);

  /* ---------- Clique: exibir conteúdo + registrar progresso ---------- */
  const painel = document.getElementById('painel-conteudo');

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
    painel.innerHTML = html;
  }

  container.addEventListener('click', (e) => {
    const target = e.target.closest('a[data-topic], a[data-subtopic]');
    if (!target) return;
    e.preventDefault();
    const topicoId = target.getAttribute('data-topic') || target.getAttribute('data-subtopic');
    if (!topicoId) return;
    mostrarConteudo(topicoId);
    registrarVisita(topicoId);
  });

  console.log('Navegação inicializada — módulos carregados:', chaves);
});
