/**
 * State — Persistência SPA (padrão referência index_example.html).
 * Usa a chave existente do repo: apostila-ia-progresso (defensiva: não quebra dados antigos).
 */
const State = {
  currentModule: 'msoffice',
  progress: {},        // { 'modulo-1': { completed: true, pct: 75 }, ... }
  flashcards: {},      // { 'modulo-1': [ { id, reps, interval, ease, quality } ] }
  quizScores: {},      // { 'modulo-1': { score, lastAttempt } }
  ttsRate: 1.0,
  theme: 'dark',

  load() {
    try {
      const raw = localStorage.getItem('apostila-ia-progresso');
      if (raw) {
        const d = JSON.parse(raw);
        this.progress = (d && d.progress) ? d.progress : {};
        this.flashcards = (d && d.flashcards) ? d.flashcards : {};
        this.quizScores = (d && d.quizScores) ? d.quizScores : {};
        this.theme = (d && d.theme) ? d.theme : 'dark';
        if (d && d.currentModule) this.currentModule = d.currentModule;
      }
    } catch (e) {
      console.error('State.load failed:', e);
      this.progress = {}; this.flashcards = {}; this.quizScores = {};
    }
  },

  save() {
    try {
      localStorage.setItem('apostila-ia-progresso', JSON.stringify({
        currentModule: this.currentModule,
        progress: this.progress,
        flashcards: this.flashcards,
        quizScores: this.quizScores,
        theme: this.theme
      }));
    } catch (e) { console.error('State.save failed:', e); }
    if (App && typeof App.updateGlobalProgress === 'function') App.updateGlobalProgress();
  }
};
