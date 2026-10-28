/**
 * DB Modules Adapter — mapeia os dados REAIS do repo (curriculum*.js, flashcards_m*.js,
 * questions*.js, references.js) para o formato DB.modules usado pelo SPA (app.js).
 * Nenhum conteúdo inventado: theory HTML é montado a partir de conteudo/exemplos/exercicios
 * reais; mermaid é gerado a partir de títulos reais; vídeos filtrados de references.js;
 * lightning a partir de objetivos reais; flashcards de flashcards_m*.js; quiz de questoesBanco.
 */
const DB = {
  modules: [],
  init() {
    const esc = (s) => String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const modLabels = [
      { id: 'msoffice', n: 1, label: '1. MS Office 365', icon: '📊' },
      { id: 'redes', n: 2, label: '2. Redes de Computadores', icon: '🌐' },
      { id: 'comunicacao', n: 3, label: '3. Comunicação e Colaboração', icon: '📧' },
      { id: 'seguranca', n: 4, label: '4. Segurança e Governança', icon: '🔒' },
      { id: 'ia', n: 5, label: '5. Inteligência Artificial', icon: '🤖' },
      { id: 'etica', n: 6, label: '6. Ética e Gov. Digital', icon: '⚖️' },
      { id: 'dados', n: 7, label: '7. Dados e Engenharia', icon: '🗃️' },
      { id: 'visualizacao', n: 8, label: '8. Visualização de Dados', icon: '📈' },
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
      if (modData && Array.isArray(modData.unidades)) {
        modData.unidades.forEach((u, ui) => {
          const ut = (u.titulo || ('Unidade ' + (ui + 1))).replace(/["\[\]]/g, '');
          mermaidCode += '\n  ROOT --> U' + ui + '["' + ut + '"]';
          const topicos = Array.isArray(u.topicos) ? u.topicos : [];
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
