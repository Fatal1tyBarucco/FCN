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

/* Helper compartilhado: envolve qualquer <table> em uma região rolável e
 * focável por teclado. Definido UMA vez e reutilizado por quiz, progresso,
 * gráficos e simuladores. */
if (typeof window !== 'undefined' && typeof window.wrapTabela !== 'function') {
  window.wrapTabela = function (html, rotulo, larga) {
    var esc = function (s) {
      return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    };
    var cls = 'tabela-scroll' + (larga ? ' tabela-scroll--larga' : '');
    return '<div class="' + cls + '" role="region" aria-label="' + esc(rotulo || 'Tabela — role para leitura por teclado') + '" tabindex="0">' + html + '</div>';
  };
}

/* Helper de ícone: delega ao registro SVG único (db-modules.js). Retorna ''
 * quando o runtime de ícones não está disponível — nunca um glifo quebrado. */
if (typeof window !== 'undefined') {
  window.icone = function (nome) {
    return (typeof window.FCNIcon === 'function') ? window.FCNIcon(nome) : '';
  };
}

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
      this.els.modal = document.getElementById('modal');
      this.els.modalClose = document.getElementById('modal-close');
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
      if (this.els.modalClose) this.els.modalClose.addEventListener('click', () => this.closeModal());
      if (this.els.modal) this.els.modal.addEventListener('click', (e) => {
        if (e.target === this.els.modal) this.closeModal();
      });
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
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'nav-item' + (m.id === this.activeModuleId ? ' active' : '');
        item.dataset.id = m.id;
        item.setAttribute('aria-current', m.id === this.activeModuleId ? 'true' : 'false');
        item.innerHTML = '<span class="nav-item-label">' + (m.icon || '') + ' ' + (m.title || m.label || m.id) + '</span>' +
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
      const ico = (nome) => (typeof window !== 'undefined' && window.icone) ? window.icone(nome) : '';
      const tabs = [
        { id: 'teoria', label: ico('teoria') + ' Teoria' },
        { id: 'mapas', label: ico('mapa') + ' Mapas e Diagramas' },
        { id: 'simuladores', label: ico('simulador') + ' Simuladores' },
        { id: 'flash', label: ico('resumo') + ' Resumo Relâmpago' },
        { id: 'cards', label: ico('flashcard') + ' Flashcards' },
        { id: 'quiz', label: ico('simulado') + ' Simulado' }
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
        '<div class="card card-gradient"><h2>' + ico('visao-geral') + ' Visão Geral Estratégica</h2><p>' + (mod.overview || '') + '</p></div>' +
        '<div class="tabs" id="module-tabs" role="tablist" aria-label="Abas do módulo">' + tabs.map(t => {
          const ativo = t.id === this.activeTab;
          return '<button type="button" class="tab' + (ativo ? ' active' : '') + '" role="tab" id="tabbtn-' + t.id + '" aria-controls="tab-' + t.id + '" aria-selected="' + (ativo ? 'true' : 'false') + '" tabindex="' + (ativo ? '0' : '-1') + '" data-tab="' + t.id + '">' + t.label + '</button>';
        }).join('') + '</div>' +
        '<div class="tab-content ' + (this.activeTab === 'teoria' ? 'active' : '') + '" id="tab-teoria" role="tabpanel" aria-labelledby="tabbtn-teoria"><div id="teoria-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'mapas' ? 'active' : '') + '" id="tab-mapas" role="tabpanel" aria-labelledby="tabbtn-mapas"><div class="card"><h3>Arquitetura e Fluxos</h3><div id="mapas-host"></div></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'simuladores' ? 'active' : '') + '" id="tab-simuladores" role="tabpanel" aria-labelledby="tabbtn-simuladores"><div id="simuladores-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'flash' ? 'active' : '') + '" id="tab-flash" role="tabpanel" aria-labelledby="tabbtn-flash"><div class="card" id="flash-host"></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'cards' ? 'active' : '') + '" id="tab-cards" role="tabpanel" aria-labelledby="tabbtn-cards"><div class="card"><h3>' + ico('flashcard') + ' Flashcards</h3><p>Clique no cartão.</p><div class="fc-deck" id="fc-deck"></div></div></div>' +
        '<div class="tab-content ' + (this.activeTab === 'quiz' ? 'active' : '') + '" id="tab-quiz" role="tabpanel" aria-labelledby="tabbtn-quiz"><div class="card"><h3>' + ico('simulado') + ' Simulado</h3><p>Resolva e confira.</p><div id="quiz-host"></div></div></div>' +
        '<button class="mark-complete ' + ((typeof State !== 'undefined' && State.progress && State.progress[moduleId] && State.progress[moduleId].completed) ? 'completed' : '') + '" id="mark-complete-' + moduleId + '" data-module="' + moduleId + '" aria-pressed="' + ((typeof State !== 'undefined' && State.progress && State.progress[moduleId] && State.progress[moduleId].completed) ? 'true' : 'false') + '">' + ((typeof State !== 'undefined' && State.progress && State.progress[moduleId] && State.progress[moduleId].completed) ? ico('concluido') + ' Módulo Concluído' : ico('check') + ' Marcar como Concluído') + '</button>';

      this.bindTabs();
      this.bindCompleteButton(moduleId);
      this.loadTabContent(moduleId);
    },

    bindCompleteButton(moduleId) {
      const btn = document.getElementById('mark-complete-' + moduleId);
      if (btn) {
        btn.addEventListener('click', () => this.toggleComplete(moduleId));
      }
    },

    /* Mantém aria-selected, roving tabindex e painéis ativos em sincronia.
     * Chamado pelo clique/teclado e disponível para troca programática. */
    setActiveTab(tabId) {
      this.activeTab = tabId;
      const tabs = Array.from(document.querySelectorAll('#module-tabs .tab'));
      tabs.forEach(t => {
        const ativo = t.dataset.tab === tabId;
        t.classList.toggle('active', ativo);
        t.setAttribute('aria-selected', ativo ? 'true' : 'false');
        t.setAttribute('tabindex', ativo ? '0' : '-1');
      });
      document.querySelectorAll('.tab-content').forEach(p => {
        p.classList.toggle('active', p.id === 'tab-' + tabId);
      });
      return tabs.find(t => t.dataset.tab === tabId) || null;
    },

    bindTabs() {
      const bar = document.getElementById('module-tabs');
      if (!bar) return;
      const tabs = Array.from(bar.querySelectorAll('.tab'));
      tabs.forEach(t => {
        t.addEventListener('click', () => {
          this.setActiveTab(t.dataset.tab);
          this.loadTabContent(this.activeModuleId);
        });
        t.addEventListener('keydown', (e) => {
          const idx = tabs.indexOf(t);
          let nextIdx = -1;
          if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
          else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
          else if (e.key === 'Home') nextIdx = 0;
          else if (e.key === 'End') nextIdx = tabs.length - 1;
          else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.setActiveTab(t.dataset.tab);
            this.loadTabContent(this.activeModuleId);
            return;
          }
          if (nextIdx !== -1) {
            e.preventDefault();
            const destino = tabs[nextIdx];
            const alvo = this.setActiveTab(destino.dataset.tab);
            if (alvo) alvo.focus();
            this.loadTabContent(this.activeModuleId);
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
          html += '<h3>' + (typeof window !== 'undefined' && window.icone ? window.icone('video') : '') + ' Vídeos de Apoio</h3>';
          mod.videos.forEach(v => {
            const tituloRaw = String(v.title || 'Vídeo de apoio').trim() || 'Vídeo de apoio';
          const titulo = tituloRaw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          const ariaLabel = tituloRaw.replace(/"/g, '&quot;');
          html += '<div class="card"><h4>' + titulo + '</h4><div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/' + (v.id || '') + '" title="' + titulo + '" aria-label="' + ariaLabel + '" frameborder="0" allowfullscreen loading="lazy"></iframe></div></div>';
          });
        }
      } else {
        html = '<p>Módulo não encontrado.</p>';
      }
      host.innerHTML = html;
    },

    /* Escapa texto para interpolação segura em HTML/SVG (mesma convenção de db-modules.js). */
    escHtml(texto) {
      return String(texto == null ? '' : texto)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },

    /* Interpreta o texto Mermaid real gerado por db-modules.js (graph TD + nós/arestas).
     * Não depende do runtime Mermaid: serve apenas para recuperar títulos/estrutura.
     * Retorna { root, units: [{ titulo, topicos: [] }] } ou null. */
    parseMermaidMapa(codigo) {
      if (typeof codigo !== 'string' || !codigo.trim()) return null;
      const rotulos = {};
      const filhos = {};
      const pais = {};
      codigo.split(/\r?\n/).forEach((linha) => {
        const l = linha.trim();
        if (!l || /^graph\b/i.test(l) || /^flowchart\b/i.test(l)) return;
        const no = /^([A-Za-z0-9_]+)\s*\[\s*"(.*)"\s*\]\s*$/.exec(l);
        if (no) { rotulos[no[1]] = no[2]; return; }
        const aresta = /^([A-Za-z0-9_]+)\s*-->\s*([A-Za-z0-9_]+)\s*\[\s*"(.*)"\s*\]\s*$/.exec(l);
        if (aresta) {
          const de = aresta[1], para = aresta[2], rotulo = aresta[3];
          rotulos[para] = rotulo;
          filhos[de] = filhos[de] || [];
          filhos[de].push(para);
          pais[para] = de;
        }
      });
      const raizId = Object.keys(filhos).find(id => !pais[id]) || (rotulos.ROOT ? 'ROOT' : null);
      if (!raizId || !rotulos[raizId]) return null;
      const units = (filhos[raizId] || []).map((uid) => ({
        titulo: rotulos[uid] || '',
        topicos: (filhos[uid] || []).map(tid => rotulos[tid] || '').filter(Boolean)
      })).filter(u => u.titulo);
      return { root: rotulos[raizId], units: units };
    },

    /* Normaliza a estrutura real exposta por db-modules.js. */
    normalizeMapaUnits(unidades) {
      if (!Array.isArray(unidades)) return [];
      return unidades.map((u) => ({
        titulo: String((u && u.titulo) || ''),
        topicos: Array.isArray(u && u.topicos) ? u.topicos.map(t => String(t || '')).filter(Boolean) : []
      })).filter(u => u.titulo);
    },

    /* Preferência pela estrutura real completa; o Mermaid é usado para recuperar
     * a topologia quando ela não estiver disponível e para enriquecer tópicos. */
    buildMapaDados(mod) {
      const estruturado = this.normalizeMapaUnits(mod && mod.units);
      const parseado = this.parseMermaidMapa(mod && mod.mermaid);
      const raiz = (mod && (mod.title || mod.label)) || (parseado && parseado.root) || '';
      if (parseado && parseado.units.length) {
        const units = parseado.units.map((u) => {
          const real = estruturado.find(x => x.titulo === u.titulo);
          return {
            titulo: u.titulo,
            topicos: (real && real.topicos.length >= u.topicos.length) ? real.topicos : u.topicos
          };
        });
        estruturado.forEach((u) => {
          if (!units.some(x => x.titulo === u.titulo)) units.push(u);
        });
        return { root: raiz, units: units };
      }
      return { root: raiz, units: estruturado };
    },

    /* Renderiza um diagrama SVG local, determinístico e responsivo (sem Mermaid/CDN). */
    renderMapa(mod) {
      const dados = this.buildMapaDados(mod);
      if (!dados.units.length) {
        return '<p class="mapa-vazio">Este módulo ainda não possui mapa de conteúdo.</p>';
      }
      const esc = (s) => this.escHtml(s);
      const truncar = (s, max) => {
        const t = String(s || '').trim();
        return t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t;
      };
      const largura = 980;
      const raizX = 16, raizLarg = 210;
      const unidadeX = 300, unidadeLarg = 270;
      const topicoX = 650, topicoLarg = 314;
      const linhaTopico = 34;
      const vaoUnidade = 14;
      let y = 18;
      const blocos = dados.units.map((u) => {
        const n = Math.max(1, u.topicos.length);
        const inicio = y;
        const altura = n * linhaTopico;
        const centro = inicio + altura / 2;
        const topicos = u.topicos.map((titulo, i) => ({
          titulo: titulo,
          centroY: inicio + i * linhaTopico + linhaTopico / 2
        }));
        y += altura + vaoUnidade;
        return { unidade: u, inicio: inicio, altura: altura, centroY: centro, topicos: topicos };
      });
      const altura = Math.max(220, y + 10);
      const raizY = (18 + (y - vaoUnidade)) / 2;
      let svg = '<svg class="mapa-svg" role="img" aria-labelledby="mapa-titulo" viewBox="0 0 ' + largura + ' ' + altura + '" preserveAspectRatio="xMidYMid meet" focusable="false">';
      svg += '<title>Mapa de conteúdo — ' + esc(dados.root) + '</title>';
      blocos.forEach((b) => {
        const uy = b.centroY;
        svg += '<path d="M ' + (raizX + raizLarg) + ' ' + raizY + ' C ' + (raizX + raizLarg + 30) + ' ' + raizY + ', ' + (unidadeX - 30) + ' ' + uy + ', ' + unidadeX + ' ' + uy + '" style="fill:none;stroke:var(--border-dim);stroke-width:1.5"/>';
        b.topicos.forEach((t) => {
          svg += '<path d="M ' + (unidadeX + unidadeLarg) + ' ' + uy + ' C ' + (unidadeX + unidadeLarg + 24) + ' ' + uy + ', ' + (topicoX - 24) + ' ' + t.centroY + ', ' + topicoX + ' ' + t.centroY + '" style="fill:none;stroke:var(--border-dim);stroke-width:1.5"/>';
        });
      });
      const retangulo = (x, cy, w, h, fundo, borda) =>
        '<rect x="' + x + '" y="' + (cy - h / 2) + '" width="' + w + '" height="' + h + '" rx="8" style="fill:' + fundo + ';stroke:' + borda + ';stroke-width:1"/>';
      svg += retangulo(raizX, raizY, raizLarg, 48, 'var(--fill-primary)', 'var(--border)');
      svg += '<text x="' + (raizX + raizLarg / 2) + '" y="' + raizY + '" text-anchor="middle" dominant-baseline="middle" style="fill:var(--on-fill);font-family:var(--font-sans);font-size:13px;font-weight:700">' + esc(truncar(dados.root, 28)) + '</text>';
      blocos.forEach((b) => {
        svg += retangulo(unidadeX, b.centroY, unidadeLarg, 42, 'var(--surface-elev)', 'var(--border)');
        svg += '<text x="' + (unidadeX + unidadeLarg / 2) + '" y="' + b.centroY + '" text-anchor="middle" dominant-baseline="middle" style="fill:var(--text);font-family:var(--font-sans);font-size:12px;font-weight:600">' + esc(truncar(b.unidade.titulo, 34)) + '<title>' + esc(b.unidade.titulo) + '</title></text>';
        b.topicos.forEach((t) => {
          svg += retangulo(topicoX, t.centroY, topicoLarg, 28, 'var(--surface)', 'var(--border-dim)');
          svg += '<text x="' + (topicoX + 10) + '" y="' + t.centroY + '" dominant-baseline="middle" style="fill:var(--text-dim);font-family:var(--font-sans);font-size:11px">' + esc(truncar(t.titulo, 46)) + '<title>' + esc(t.titulo) + '</title></text>';
        });
      });
      svg += '</svg>';

      let lista = '<ul class="mapa-lista">';
      dados.units.forEach((u) => {
        lista += '<li><strong>' + esc(u.titulo) + '</strong>';
        if (u.topicos.length) {
          lista += '<ul>' + u.topicos.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul>';
        }
        lista += '</li>';
      });
      lista += '</ul>';

      return '<div class="mapa-diagrama">' +
        '<h4 id="mapa-titulo">Mapa de conteúdo — ' + esc(dados.root) + '</h4>' +
        svg + lista + '</div>';
    },

    loadMapas(moduleId) {
      const host = document.getElementById('mapas-host');
      if (!host) return;
      const mod = (typeof DB !== 'undefined' && DB.modules) ? DB.modules.find(m => m.id === moduleId) : null;
      if (!mod) { host.innerHTML = '<p>Módulo não encontrado.</p>'; return; }
      host.innerHTML = this.renderMapa(mod);
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
      host.innerHTML = '<h3>' + (typeof window !== 'undefined' && window.icone ? window.icone('resumo') : '') + ' Resumo-Relâmpago (Revisão de Véspera)</h3><ul style="font-size:1.1rem;line-height:2;">' +
        bullets.map(b => '<li><strong aria-hidden="true">→</strong> ' + (b || '') + '</li>').join('') + '</ul>';
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
        '<div class="quiz-exp" id="exp-' + moduleId + '_' + i + '"><strong>' + (typeof window !== 'undefined' && window.icone ? window.icone('gabarito') : '') + ' Gabarito:</strong><br>' + (q.opts && q.opts[q.ans] ? q.opts[q.ans] : '') + '<br><br>' + (q.exp || '') + '</div></div>').join('');
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
      const tema = (theme === 'light') ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', tema);
      if (this.els.themeBtn) {
        const icone = (typeof window !== 'undefined' && window.icone)
          ? window.icone(tema === 'light' ? 'tema-escuro' : 'tema-claro') : '';
        /* Rótulo visível fixo em pt-BR + aria-label idêntico (axe
           label-content-name-mismatch); o ícone mostra o tema de destino e
           aria-pressed expõe o tema ativo. */
        this.els.themeBtn.innerHTML = icone + '<span class="btn-label">Tema</span>';
        this.els.themeBtn.setAttribute('aria-label', 'Tema');
        this.els.themeBtn.setAttribute('aria-pressed', tema === 'dark' ? 'true' : 'false');
        this.els.themeBtn.setAttribute('title', tema === 'light'
          ? 'Alternar para tema escuro' : 'Alternar para tema claro');
      }
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
