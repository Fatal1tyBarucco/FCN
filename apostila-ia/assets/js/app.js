/* app.js — SPA Controller (padrão referência index_example.html).
 * Coordena: navegação (navigation.js), flashcards (flashcards.js), quiz (quiz-engine.js),
 * gráficos (charts.js), simuladores (simulators.js e módulos), busca, TTS, tema, persistência.
 * Regra absoluta: não inventa conteúdo; usa motores existentes + State/DB.
 * 
 * Notas de limitação técnica (Seção 19 do Escrita.txt):
 * - Não executa comandos reais do SO (simuladores são educacionais simulados).
 * - TTS depende do dispositivo (SpeechSynthesisUtterance é nativo, mas voz pode não estar instalada).
 * - Os 8 módulos são carregados de assets/data/ via tags <script>; nenhum fetch externo.
 */

// Defensiva: não sobrescrever o App se já definido por outro script
if (typeof App === 'undefined') {
  const App = {
    activeModuleId: 'modulo-1',
    activeTab: 'teoria',
    els: {},

    init() {
      if (typeof State !== 'undefined') { State.load(); }
      if (typeof DB !== 'undefined' && typeof DB.init === 'function') { DB.init(); }
      this.cacheElements();
      this.bindEvents();
      this.applyTheme((typeof State !== 'undefined' && State.theme) ? State.theme : 'dark');
      this.renderNav();
      this.switchModule((typeof State !== 'undefined' && State.currentModule && DB.modules.some(m=>m.id===State.currentModule)) ? State.currentModule : 'msoffice');
      this.updateGlobalProgress();
      if (typeof mermaid !== 'undefined') mermaid.initialize({ theme: 'dark', securityLevel: 'loose' });
      window.App = this;
    },

    cacheElements() {
      this.els.sidebar = document.getElementById('sidebar') || document.querySelector('.app-sidebar');
      this.els.navList = document.getElementById('nav-list');
      this.els.main = document.getElementById('main');
      this.els.contentArea = document.getElementById('content-area');
      this.els.searchInput = document.getElementById('search-input');
      this.els.ttsPlay = document.getElementById('tts-play');
      this.els.ttsPause = document.getElementById('tts-pause');
      this.els.ttsRate = document.getElementById('tts-rate');
      this.els.themeBtn = document.getElementById('theme-toggle') || document.querySelector('.btn-theme');
      this.els.globalProgressBar = document.getElementById('global-progress');
      this.els.progressText = document.getElementById('progress-text');
    },

    bindEvents() {
      if (!this.els.searchInput) return;
      let timer = null;
      this.els.searchInput.addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => this.search((e.target || {}).value || ''), 150);
      });
      if (this.els.ttsPlay) this.els.ttsPlay.addEventListener('click', () => this.ttsPlay());
      if (this.els.ttsPause) this.els.ttsPause.addEventListener('click', () => this.ttsPause());
      if (this.els.ttsRate) this.els.ttsRate.addEventListener('change', (e) => {
        if (typeof State !== 'undefined') { State.ttsRate = parseFloat((e.target || {}).value) || 1; State.save(); }
      });
      if (this.els.themeBtn) this.els.themeBtn.addEventListener('click', () => this.toggleTheme());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeModal();
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          if (this.els.searchInput) this.els.searchInput.focus();
        }
      });
    },

    renderNav() {
      if (!this.els.navList || typeof DB === 'undefined' || !DB.modules) return;
      this.els.navList.innerHTML = '';
      DB.modules.forEach(m => {
        const p = (typeof State !== 'undefined' && State.progress) ? (State.progress[m.id] || {}) : {};
        const perc = p.completed ? 100 : (p.pct || 0);
        const item = document.createElement('div');
        item.className = 'nav-item' + (m.id === this.activeModuleId ? ' active' : '');
        item.dataset.id = m.id;
        item.innerHTML = '<span>' + (m.icon || '') + ' ' + (m.title || m.label || m.id) + '</span>' +
          '<div class="progress-mini"><div class="progress-mini-bar" style="width:' + perc + '%"></div></div>';
        item.addEventListener('click', () => this.switchModule(m.id));
        this.els.navList.appendChild(item);
      });
    },

    switchModule(moduleId) {
      this.activeModuleId = moduleId;
      if (typeof State !== 'undefined') { State.currentModule = moduleId; State.save(); }
      this.renderNav();
      this.activeTab = 'teoria';
      this.renderModuleView(moduleId);
      try { window.scrollTo(0, 0); } catch(e) {}
    },

    renderModuleView(moduleId) {
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      if (!mod) return;
      const tabs = [
        { id: 'teoria', label: '📖 Teoria' },
        { id: 'mapas', label: '🗺️ Mapas e Diagramas' },
        { id: 'simuladores', label: '🎮 Simuladores' },
        { id: 'flash', label: '⚡ Resumo Relâmpago' },
        { id: 'cards', label: '🃏 Flashcards' },
        { id: 'quiz', label: '📝 Simulado' }
      ];
      const area = this.els.contentArea;
      if (!area) return;
      // Preserve simulator containers (move back to persistent host before wiping)
      const simIds = ['charts-app','excel-app','redes-app','seguranca-app','prompts-app','dados-app','etica-app'];
      const persistent = document.getElementById('simulator-containers');
      if (persistent) {
        simIds.forEach(id => {
          const el = document.getElementById(id);
          if (el && !persistent.contains(el)) persistent.appendChild(el);
        });
      }
      area.innerHTML =
        '<h1>' + (mod.icon || '') + ' ' + (mod.title || mod.label || moduleId) + '</h1>' +
        '<div class="card" style="background:linear-gradient(135deg,var(--primary),var(--accent));color:white;border:none;"><h3 style="color:white;margin-top:0;">🚀 Visão Geral Estratégica</h3><p style="color:white;">' + (mod.overview || '') + '</p></div>' +
        '<div class="tabs" id="module-tabs">' + tabs.map(t => '<div class="tab ' + (t.id === this.activeTab ? 'active' : '') + '" data-tab="' + t.id + '">' + t.label + '</div>').join('') + '</div>' +
        '<div class="tab-content ' + (this.activeTab === 'teoria' ? 'active' : '') + '" id="tab-teoria"><div id="teoria-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'mapas' ? 'active' : '') + '" id="tab-mapas"><div class="card"><h3>Arquitetura e Fluxos</h3><div class="mermaid" id="mermaid-host"></div></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'simuladores' ? 'active' : '') + '" id="tab-simuladores"><div id="simuladores-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'flash' ? 'active' : '') + '" id="tab-flash"><div class="card" id="flash-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'cards' ? 'active' : '') + '" id="tab-cards"><div class="card"><h3>🃏 Flashcards</h3><p>Clique no cartão.</p><div class="fc-deck" id="fc-deck"></div></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'quiz' ? 'active' : '') + '" id="tab-quiz"><div class="card"><h3>📝 Simulado</h3><p>Resolva e confira.</p><div id="quiz-host"></div></div></div>' +
        '<button class="mark-complete ' + ((typeof State !== 'undefined' && State.progress && State.progress[moduleId] && State.progress[moduleId].completed) ? 'completed' : '') + '" onclick="App.toggleComplete(\'' + moduleId + '\')">' + ((typeof State !== 'undefined' && State.progress && State.progress[moduleId] && State.progress[moduleId].completed) ? '✅ Módulo Concluído' : 'Marcar como Concluído') + '</button>';

      this.bindTabs();
      this.loadTabContent(moduleId);
    },

    bindTabs() {
      document.querySelectorAll('#module-tabs .tab').forEach(t => {
        t.addEventListener('click', () => {
          this.activeTab = t.dataset.tab;
          document.querySelectorAll('#module-tabs .tab').forEach(x => x.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
          t.classList.add('active');
          const pane = document.getElementById('tab-' + t.dataset.tab);
          if (pane) pane.classList.add('active');
          this.loadTabContent(this.activeModuleId);
          if (t.dataset.tab === 'mapas' && typeof mermaid !== 'undefined') {
            try { mermaid.init(undefined, document.querySelectorAll('#mermaid-host')); } catch(e) {}
          }
        });
      });
    },

    loadTabContent(moduleId) {
      switch (this.activeTab) {
        case 'teoria': this.loadTeoria(moduleId); break;
        case 'mapas': this.loadMapas(moduleId); break;
        case 'simuladores': this.loadSimuladores(moduleId); break;
        case 'flash': this.loadFlash(moduleId); break;
        case 'cards': this.loadFlashcards(moduleId); break;
        case 'quiz': this.loadQuiz(moduleId); break;
      }
    },

    loadTeoria(moduleId) {
      const host = document.getElementById('teoria-host');
      if (!host) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      let html = '';
      if (mod) {
        html += '<div class="card">' + (mod.theory || '') + '</div>';
        if (Array.isArray(mod.videos) && mod.videos.length) {
          html += '<h3>🎥 Vídeos de Apoio</h3>';
          mod.videos.forEach(v => {
            html += '<div class="card"><h4>' + (v.title || '') + '</h4><div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/' + (v.id || '') + '" frameborder="0" allowfullscreen loading="lazy"></iframe></div></div>';
          });
        }
      } else {
        html = '<p>Módulo não encontrado.</p>';
      }
      host.innerHTML = html;
      if (typeof mermaid !== 'undefined') { try { mermaid.init(undefined, host.querySelectorAll('.mermaid')); } catch(e){} }
    },

    loadMapas(moduleId) {
      const host = document.getElementById('mermaid-host');
      if (!host) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      const code = (mod && mod.mermaid) ? mod.mermaid : 'graph TD\n  ROOT["Módulo"] --> A[Conteúdo]';
      host.innerHTML = '<div class="mermaid">' + code + '</div>';
      if (typeof mermaid !== 'undefined') { try { mermaid.init(undefined, host); } catch(e){} }
    },

    getModuleIndex(moduleId) {
      if (typeof DB !== 'undefined' && DB.modules) {
        const m = DB.modules.find(x => x.id === moduleId);
        if (m && m.index) return m.index;
      }
      const m = moduleId.replace('msoffice','1').replace('redes','2').replace('comunicacao','3').replace('seguranca','4').replace('ia','5').replace('etica','6').replace('dados','7').replace('visualizacao','8');
      return parseInt(m) || 1;
    },

    loadSimuladores(moduleId) {
      const host = document.getElementById('simuladores-host');
      if (!host) return;
      const simIds = { 'msoffice':'excel-app', 'redes':'redes-app', 'seguranca':'seguranca-app', 'ia':'prompts-app', 'dados':'dados-app', 'etica':'etica-app', 'visualizacao':'charts-app', 'comunicacao':null };
      const target = simIds[moduleId];
      if (target) {
        host.innerHTML = '<div class="card"><h3>Simulador Interativo</h3><div id="sim-ref-host"></div></div>';
        const ref = document.getElementById('sim-ref-host');
        const orig = document.getElementById(target);
        if (ref && orig) {
          // Move the original container (already mounted by inline script) without destroying handlers
          ref.appendChild(orig);
          orig.style.display = '';
        }
      } else {
        host.innerHTML = '<div class="card"><h3>Simulador em breve</h3><p>Simulador interativo ainda não implementado para este módulo.</p></div>';
      }
    },

    loadFlash(moduleId) {
      const host = document.getElementById('flash-host');
      if (!host) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      const bullets = (mod && Array.isArray(mod.lightning) && mod.lightning.length) ? mod.lightning : ['Resumo relâmpago será gerado a partir do conteúdo curricular real.'];
      host.innerHTML = '<h3>⚡ Resumo-Relâmpago (Revisão de Véspera)</h3><ul style="font-size:1.1rem;line-height:2;">' +
        bullets.map(b => '<li><strong>➤</strong> ' + (b || '') + '</li>').join('') + '</ul>';
    },

    loadFlashcards(moduleId) {
      const deck = document.getElementById('fc-deck');
      if (!deck) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      const arr = (mod && Array.isArray(mod.flashcards)) ? mod.flashcards : [];
      if (!arr.length) { deck.innerHTML = '<p>Nenhum flashcard disponível.</p>'; return; }
      if (typeof State !== 'undefined' && !State.flashcards[moduleId]) {
        State.flashcards[moduleId] = arr.map((c, i) => ({ q: c.q, a: c.a, idx: i, reps: 0, interval: 0, ease: 2.5 }));
      }
      const cards = (typeof State !== 'undefined' && State.flashcards[moduleId]) ? State.flashcards[moduleId] : arr;
      deck.innerHTML = '';
      cards.forEach((card, i) => {
        const el = document.createElement('div');
        el.className = 'fc-card';
        el.dataset.idx = i;
        el.innerHTML = '<div class="fc-inner"><div class="fc-front"><div>Pergunta ' + (i+1) + '</div><div style="margin-top:1rem;font-size:1rem;">' + (card.q || card.frente || '') + '</div></div><div class="fc-back"><div>' + (card.a || card.verso || '') + '</div><div class="fc-actions"><button class="fc-btn-wrong" onclick="App.rateCard(\'' + moduleId + '\',' + i + ',1)">Errei</button><button class="fc-btn-hard" onclick="App.rateCard(\'' + moduleId + '\',' + i + ',3)">Difícil</button><button class="fc-btn-easy" onclick="App.rateCard(\'' + moduleId + '\',' + i + ',5)">Acertei</button></div></div></div>';
        el.addEventListener('click', function(e) { if (e.target.tagName !== 'BUTTON') el.classList.toggle('flipped'); });
        deck.appendChild(el);
      });
    },

    rateCard(moduleId, idx, quality) {
      if (typeof State === 'undefined') return;
      if (!State.flashcards[moduleId]) State.flashcards[moduleId] = [];
      const card = State.flashcards[moduleId][idx];
      if (!card) return;
      if (quality < 3) { card.reps = 0; card.interval = 1; }
      else if (quality === 3) { card.interval = Math.max(1, Math.round(card.interval * 1.2)); card.ease = Math.max(1.3, card.ease - 0.2); }
      else { card.reps++; if (card.reps === 1) card.interval = 1; else if (card.reps === 2) card.interval = 6; else card.interval = Math.round(card.interval * card.ease); card.ease += 0.1; }
      State.save();
      alert('Avaliado! Próxima revisão em ' + card.interval + ' dia(s).');
    },

    loadQuiz(moduleId) {
      const host = document.getElementById('quiz-host');
      if (!host) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      const arr = (mod && Array.isArray(mod.quiz)) ? mod.quiz : [];
      if (!arr.length) { host.innerHTML = '<p>Nenhum simulado disponível.</p>'; return; }
      host.innerHTML = arr.slice(0, 12).map((q, i) => '<div class="quiz-q"><h4>Questão ' + (i+1) + '</h4><p>' + (q.q || '') + '</p>' +
        '<div class="quiz-opts">' + (q.opts || []).map((opt, oi) => '<label><input type="radio" name="q_' + moduleId + '_' + i + '" value="' + oi + '">' + opt + '</label>').join('') + '</div>' +
        '<button class="btn mt-1" onclick="App.checkQuizFallback(\'' + moduleId + '\',' + i + ')">Verificar</button>' +
        '<div class="quiz-exp" id="exp-' + moduleId + '_' + i + '"><strong>📚 Gabarito:</strong><br>' + (q.opts && q.opts[q.ans] ? q.opts[q.ans] : '') + '<br><br>' + (q.exp || '') + '</div></div>').join('');
      // store for checking
      if (!window._quizData) window._quizData = {};
      window._quizData[moduleId] = arr.slice(0, 12);
    },

    checkQuizFallback(moduleId, qIdx) {
      const data = (window._quizData && window._quizData[moduleId]) ? window._quizData[moduleId] : [];
      const q = data[qIdx];
      if (!q) return;
      const radios = document.getElementsByName('q_' + moduleId + '_' + qIdx);
      let sel = -1;
      radios.forEach(r => { if (r.checked) sel = parseInt(r.value); });
      if (sel === -1) { alert('Selecione uma alternativa.'); return; }
      const correct = (typeof q.ans === 'number') ? q.ans : 0;
      const lbls = document.querySelectorAll('[name="q_' + moduleId + '_' + qIdx + '"]');
      lbls.forEach((r, i) => { const p = r.parentElement; if (i === correct) p.classList.add('correct'); else if (i === sel) p.classList.add('wrong'); });
      const exp = document.getElementById('exp-' + moduleId + '_' + qIdx);
      if (exp) exp.classList.add('show');
    },

    toggleComplete(moduleId) {
      if (typeof State === 'undefined') return;
      if (!State.progress[moduleId]) State.progress[moduleId] = {};
      State.progress[moduleId].completed = !State.progress[moduleId].completed;
      State.progress[moduleId].pct = State.progress[moduleId].completed ? 100 : 0;
      State.save();
      this.renderNav();
      this.renderModuleView(moduleId);
      this.updateGlobalProgress();
    },

    updateGlobalProgress() {
      const total = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.length : 8;
      const done = (typeof State !== 'undefined' && State.progress) ? DB.modules.filter(m => State.progress[m.id] && State.progress[m.id].completed).length : 0;
      const perc = Math.round((done / total) * 100);
      if (this.els.globalProgressBar) this.els.globalProgressBar.style.width = perc + '%';
      if (this.els.progressText) this.els.progressText.textContent = perc + '%';
    },

    applyTheme(theme) {
      if (!document.documentElement) return;
      document.documentElement.setAttribute('data-theme', theme || 'dark');
      if (this.els.themeBtn) this.els.themeBtn.textContent = (theme === 'light') ? '🌙 Dark' : '☀️ Light';
    },

    toggleTheme() {
      const next = ((typeof State !== 'undefined' && State.theme) === 'light') ? 'dark' : 'light';
      if (typeof State !== 'undefined') { State.theme = next; State.save(); }
      this.applyTheme(next);
    },

    ttsPlay() {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const pane = document.querySelector('.tab-content.active');
      if (!pane) return;
      const text = pane.innerText.substring(0, 3000);
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      utter.rate = (typeof State !== 'undefined' && State.ttsRate) ? State.ttsRate : 1.0;
      window.speechSynthesis.speak(utter);
    },

    ttsPause() { if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel(); },

    search(query) {
      if (!query || query.length < 2) { this.clearHighlights(); return; }
      const pane = document.querySelector('.tab-content.active');
      if (!pane) return;
      this.clearHighlights();
      try {
        const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        const walker = document.createTreeWalker(pane, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while ((node = walker.nextNode())) {
          if (node.nodeValue && node.nodeValue.toLowerCase().includes(query.toLowerCase())) {
            const s = document.createElement('span');
            s.className = 'search-highlight';
            s.innerHTML = node.nodeValue.replace(re, '<mark class="search-highlight-inner">$1</mark>');
            node.parentNode.replaceChild(s, node);
          }
        }
      } catch (e) { console.error('Search failed:', e); }
    },

    clearHighlights() {
      document.querySelectorAll('.search-highlight, .search-highlight-inner, mark').forEach(el => {
        try { el.outerHTML = el.innerHTML; } catch(e) {}
      });
    },

    closeModal() {
      const m = document.getElementById('modal');
      if (m) m.classList.remove('show');
    }
  };
  window.App = App;
}

document.addEventListener('DOMContentLoaded', () => {
  // A ordem no index.html é: app.js antes de navigation.js; mas navigation.js
  // já faz boot próprio. Aqui chamamos App.init() após um delay para garantir
  // que navigation.js já registrou window.apostilaDados.
  setTimeout(() => {
    try {
      if (typeof App !== 'undefined' && typeof App.init === 'function') App.init();
    } catch (e) { console.error('App.init falhou:', e); }
  }, 100);
});
