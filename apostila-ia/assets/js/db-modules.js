/**
 * DB Modules Adapter — mapeia os dados REAIS do repo (curriculum*.js, flashcards_m*.js,
 * questions*.js, references.js) para o formato DB.modules usado pelo SPA (app.js).
 * Nenhum conteúdo inventado: theory HTML é montado a partir de conteudo/exemplos/exercicios
 * reais; mermaid é gerado a partir de títulos reais; vídeos filtrados de references.js;
 * lightning a partir de objetivos reais; flashcards de flashcards_m*.js; quiz de questoesBanco.
 */

/* =============================================================================
   REGISTRO DE ÍCONES (SVG inline) — fonte única de iconografia do app.
   -----------------------------------------------------------------------------
   Por que SVG e não emoji: emoji depende da fonte do sistema operacional. Em
   ambientes sem fonte de emoji instalada (Linux enxuto, servidores, alguns
   setups corporativos) cada emoji vira um quadrado vazio (tofu) e quebra a
   hierarquia visual da navegação. O SVG inline é determinístico, herda a cor do
   texto via `currentColor`, escala com a tipografia e funciona offline em
   file:// — sem CDN, sem fonte externa, sem dependência de rede.

   Convenção: grade 24×24, traço (`fill="none"`), `stroke="currentColor"`,
   `stroke-width="1.8"`, pontas e junções arredondadas. Todos os ícones são
   decorativos (`aria-hidden="true"`); o nome acessível vem sempre do texto
   vizível adjacente ou de um `aria-label` explícito no controle.
   Exposed como `window.FCNIcon(nome)` → markup do ícone (ou '' se desconhecido).
   ============================================================================= */
(function () {
  'use strict';

  var ATRIBUTOS_SVG = 'viewBox="0 0 24 24" width="1em" height="1em" fill="none" ' +
    'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
    'stroke-linejoin="round" focusable="false" aria-hidden="true"';

  /* Cada entrada é o conteúdo interno de um <svg> (caminhos/geometrias). */
  var TRACOS = {
    /* Módulos curriculares */
    'modulo-office': '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    'modulo-rede': '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M10.6 6.8 6.4 17.3M13.4 6.8l4.2 10.5M7 19h10"/>',
    'modulo-comunicacao': '<path d="M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12z"/><path d="M8.5 11h7M8.5 14h4"/>',
    'modulo-seguranca': '<path d="M12 3 4.5 6v6c0 4.4 3.1 8.2 7.5 9 4.4-.8 7.5-4.6 7.5-9V6z"/><path d="m9 12 2 2 4-4"/>',
    'modulo-ia': '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
    'modulo-etica': '<path d="M12 4v17M7 21h10M4 8h16"/><path d="m4 8-2.6 6.2a3.6 3.6 0 0 0 5.2 0z"/><path d="m20 8-2.6 6.2a3.6 3.6 0 0 0 5.2 0z"/>',
    'modulo-dados': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    'modulo-visualizacao': '<path d="M4 20h16"/><path d="M7.5 20v-6M12 20V8M16.5 20v-9"/>',

    /* Abas e ações do módulo */
    'teoria': '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5z"/>',
    'mapa': '<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="3" y="16" width="6" height="4" rx="1"/><rect x="15" y="16" width="6" height="4" rx="1"/><path d="M12 7v5M6 16v-2h12v2"/>',
    'simulador': '<path d="M5 21v-6M5 11V3M12 21v-8M12 9V3M19 21v-4M19 13V3"/><path d="M2.5 15h5M9.5 13h5M16.5 17h5"/>',
    'resumo': '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z"/>',
    'flashcard': '<rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/>',
    'simulado': '<path d="m3 6 2 2 3-3"/><path d="m3 13 2 2 3-3"/><path d="m3 20 2 2 3-3"/><path d="M12 7h9M12 14h9M12 21h9"/>',
    'visao-geral': '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    'video': '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5z"/>',
    'concluido': '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
    'gabarito': '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 12 2 2 4-4"/>',
    'alerta': '<path d="M12 4 2.5 20h19z"/><path d="M12 10v4"/><path d="M12 17.2v.1"/>',
    'nota': '<path d="M4 20h4L20 8l-4-4L4 16z"/><path d="m14.5 5.5 4 4"/>',
    'estrela': '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.7l5.9-.8z"/>',
    'estrela-cheia': '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.7l5.9-.8z" fill="currentColor"/>',
    'check': '<path d="m5 12.5 4.5 4.5L19 7"/>',

    /* Controles de mídia, navegação e tema */
    'play': '<path d="M7 4.5 19 12 7 19.5z"/>',
    'pause': '<path d="M9 5v14M15 5v14"/>',
    'stop': '<rect x="6" y="6" width="12" height="12" rx="1.5"/>',
    'busca': '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    'progresso': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    'area-aprendizagem': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    'foco': '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    'tema-claro': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>',
    'tema-escuro': '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
    'seta': '<path d="m9 5 7 7-7 7"/>'
  };

  window.FCNIcons = TRACOS;

  /* Retorna o markup do ícone; string vazia para nome desconhecido (nunca
     um glifo quebrado). `opts.className` acrescenta classes ao wrapper. */
  window.FCNIcon = function (nome, opts) {
    if (!nome || !Object.prototype.hasOwnProperty.call(TRACOS, nome)) return '';
    var extra = '';
    if (opts && opts.className) {
      extra = ' ' + String(opts.className).replace(/[^\w\s-]/g, ' ').trim();
    }
    return '<span class="ico' + extra + '" aria-hidden="true"><svg ' + ATRIBUTOS_SVG + '>' +
      TRACOS[nome] + '</svg></span>';
  };
})();

const DB = {
  modules: [],
  init() {
    const esc = (s) => String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const modLabels = [
      { id: 'msoffice', n: 1, label: '1. MS Office 365', icon: window.FCNIcon('modulo-office') },
      { id: 'redes', n: 2, label: '2. Redes de Computadores', icon: window.FCNIcon('modulo-rede') },
      { id: 'comunicacao', n: 3, label: '3. Comunicação e Colaboração', icon: window.FCNIcon('modulo-comunicacao') },
      { id: 'seguranca', n: 4, label: '4. Segurança e Governança', icon: window.FCNIcon('modulo-seguranca') },
      { id: 'ia', n: 5, label: '5. Inteligência Artificial', icon: window.FCNIcon('modulo-ia') },
      { id: 'etica', n: 6, label: '6. Ética e Gov. Digital', icon: window.FCNIcon('modulo-etica') },
      { id: 'dados', n: 7, label: '7. Dados e Engenharia', icon: window.FCNIcon('modulo-dados') },
      { id: 'visualizacao', n: 8, label: '8. Visualização de Dados', icon: window.FCNIcon('modulo-visualizacao') }
    ];

    const getCurriculum = (n) => {
      try {
        if (n === 1) return (typeof curriculum !== 'undefined' && curriculum) ? curriculum : null;
        const name = 'curriculumM' + n;
        // eslint-disable-next-line no-eval
        if (typeof window !== 'undefined' && typeof window[name] !== 'undefined') return window[name];
      } catch (e) {}
      try {
        if (n === 2 && typeof curriculumM2 !== 'undefined') return curriculumM2;
        if (n === 3 && typeof curriculumM3 !== 'undefined') return curriculumM3;
        if (n === 4 && typeof curriculumM4 !== 'undefined') return curriculumM4;
        if (n === 5 && typeof curriculumM5 !== 'undefined') return curriculumM5;
        if (n === 6 && typeof curriculumM6 !== 'undefined') return curriculumM6;
        if (n === 7 && typeof curriculumM7 !== 'undefined') return curriculumM7;
        if (n === 8 && typeof curriculumM8 !== 'undefined') return curriculumM8;
      } catch (e) {}
      return null;
    };

    const getFlashcards = (n) => {
      try {
        const name = 'flashcardsM' + n;
        let arr = null;
        if (n === 1 && typeof flashcardsM1 !== 'undefined') arr = flashcardsM1;
        else if (n === 2 && typeof flashcardsM2 !== 'undefined') arr = flashcardsM2;
        else if (n === 3 && typeof flashcardsM3 !== 'undefined') arr = flashcardsM3;
        else if (n === 4 && typeof flashcardsM4 !== 'undefined') arr = flashcardsM4;
        else if (n === 5 && typeof flashcardsM5 !== 'undefined') arr = flashcardsM5;
        else if (n === 6 && typeof flashcardsM6 !== 'undefined') arr = flashcardsM6;
        else if (n === 7 && typeof flashcardsM7 !== 'undefined') arr = flashcardsM7;
        else if (n === 8 && typeof flashcardsM8 !== 'undefined') arr = flashcardsM8;
        return Array.isArray(arr) ? arr : [];
      } catch (e) { return []; }
    };

    const allQuestions = (typeof window !== 'undefined' && Array.isArray(window.questoesBanco)) ? window.questoesBanco : (typeof questoesBanco !== 'undefined' ? questoesBanco : []);

    const allRefs = (typeof window !== 'undefined' && Array.isArray(window.references)) ? window.references : (typeof references !== 'undefined' ? references : []);

    const modules = modLabels.map((m) => {
      const cur = getCurriculum(m.n);
      const modData = (cur && cur['modulo-' + m.n]) ? cur['modulo-' + m.n] : null;

      // overview
      let overview = m.label;
      if (modData && modData.titulo) overview = modData.titulo;

      // theory HTML from real curriculum
      let theory = '';
      if (modData && Array.isArray(modData.unidades)) {
        modData.unidades.forEach((u) => {
          theory += '<h2>' + esc(u.titulo || '') + '</h2>';
          const topicos = Array.isArray(u.topicos) ? u.topicos : [];
          topicos.forEach((t) => {
            theory += '<h3>' + esc(t.titulo || '') + '</h3>';
            if (t.objetivoAprendizagem) theory += '<p><strong>Objetivo de aprendizagem:</strong> ' + esc(t.objetivoAprendizagem) + '</p>';
            if (t.conteudo) theory += '<p>' + esc(t.conteudo) + '</p>';
            const subs = Array.isArray(t.subtopicos) ? t.subtopicos : [];
            subs.forEach((st) => {
              theory += '<h4>' + esc(st.titulo || '') + '</h4>';
              if (st.objetivoAprendizagem) theory += '<p><strong>Objetivo:</strong> ' + esc(st.objetivoAprendizagem) + '</p>';
              if (st.conteudo) theory += '<p>' + esc(st.conteudo) + '</p>';
              if (Array.isArray(st.exemplos) && st.exemplos.length) {
                theory += '<p><strong>Exemplos:</strong></p><ul>';
                st.exemplos.forEach((ex) => {
                  let line = esc(ex.enunciado || '');
                  if (ex.resposta) line += ' → ' + esc(ex.resposta);
                  if (ex.correcao) line += ' (Correção: ' + esc(ex.correcao) + ')';
                  theory += '<li><em>' + esc(ex.tipo || 'exemplo') + ':</em> ' + line + '</li>';
                });
                theory += '</ul>';
              }
              if (Array.isArray(st.exercicios) && st.exercicios.length) {
                theory += '<p><strong>Exercícios:</strong></p><ul>';
                st.exercicios.forEach((ex) => {
                  let line = esc(ex.enunciado || '');
                  if (ex.resposta) line += ' — ' + esc(ex.resposta);
                  theory += '<li>' + line + '</li>';
                });
                theory += '</ul>';
              }
              if (st.criterioDominio) theory += '<p><em>Critério de domínio: ' + esc(st.criterioDominio) + '</em></p>';
            });
          });
        });
      }
      if (!theory) theory = '<p>Conteúdo curricular real não disponível para este módulo nos dados carregados.</p>';

      // mermaid from real titles
      let mermaidCode = 'graph TD\n  ROOT["' + m.label.replace(/["\[\]]/g, '') + '"]';
      const unidades = [];
      if (modData && Array.isArray(modData.unidades)) {
        modData.unidades.forEach((u, ui) => {
          const ut = (u.titulo || ('Unidade ' + (ui + 1))).replace(/["\[\]]/g, '');
          mermaidCode += '\n  ROOT --> U' + ui + '["' + ut + '"]';
          const topicos = Array.isArray(u.topicos) ? u.topicos : [];
          unidades.push({
            titulo: u.titulo || ('Unidade ' + (ui + 1)),
            topicos: topicos.map((t) => t.titulo || '').filter(Boolean),
          });
          topicos.slice(0, 6).forEach((t, ti) => {
            const tt = (t.titulo || '').replace(/["\[\]]/g, '');
            mermaidCode += '\n  U' + ui + ' --> T' + ui + '_' + ti + '["' + tt + '"]';
          });
        });
      }

      // videos from references.js
      const videos = [];
      allRefs.forEach((ref) => {
        if (!ref || ref.formato !== 'video' || ref.status !== 'verificado') return;
        const mm = /^M(\d+)/.exec(String(ref.topico || ''));
        if (!mm || parseInt(mm[1], 10) !== m.n) return;
        if (typeof ref.idVideo !== 'string' || !/^[A-Za-z0-9_-]{11}$/.test(ref.idVideo)) return;
        videos.push({ id: ref.idVideo, title: ref.titulo || ref.idVideo });
      });

      // lightning from real objectives
      const lightningSet = new Set();
      if (modData && Array.isArray(modData.unidades)) {
        modData.unidades.forEach((u) => {
          (u.topicos || []).forEach((t) => {
            (t.subtopicos || []).forEach((st) => {
              if (st.objetivoAprendizagem && lightningSet.size < 12) lightningSet.add(st.objetivoAprendizagem);
            });
          });
        });
      }
      if (lightningSet.size === 0) {
        getFlashcards(m.n).slice(0, 8).forEach((c) => { if (c.frente) lightningSet.add(c.frente); });
      }
      const lightning = Array.from(lightningSet).slice(0, 12);

      // flashcards
      const flashcards = getFlashcards(m.n).map((c) => ({ q: c.frente || c.q || c.front || '', a: c.verso || c.a || c.back || '' }));

      // quiz from questions
      const qs = allQuestions.filter((q) => q && q.modulo === m.n);
      const quiz = qs.map((q) => {
        let opts = [];
        let ans = 0;
        if (q.formato === 'ce') {
          opts = ['Certo', 'Errado'];
          ans = (q.gabarito === 'C' || q.gabarito === 0 || q.gabarito === '0') ? 0 : 1;
        } else if (Array.isArray(q.alternativas)) {
          opts = q.alternativas.map((a) => a.texto || a);
          const idx = q.alternativas.findIndex((a) => a.letra === q.gabarito);
          ans = idx >= 0 ? idx : 0;
        } else if (Array.isArray(q.options)) {
          opts = q.options;
          ans = typeof q.answer === 'number' ? q.answer : (typeof q.correct === 'number' ? q.correct : 0);
        }
        return { q: q.enunciado || q.question || '', opts: opts, ans: ans, exp: q.justificativa || q.explicacao || q.exp || '' };
      });

      return {
        id: m.id,
        title: m.label,
        icon: m.icon,
        index: m.n,
        overview: overview,
        theory: theory,
        mermaid: mermaidCode,
        units: unidades,
        videos: videos,
        lightning: lightning,
        flashcards: flashcards,
        quiz: quiz,
      };
    });

    this.modules = modules;
  },
};

// Auto-init when data is available (deferred to DOMContentLoaded by app.js anyway)
if (typeof window !== 'undefined') {
  // DB.init will be called by app.js; expose
  window.DB = DB;
}
