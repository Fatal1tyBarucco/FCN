/* ui-shell.js — shell visual, navegação lateral e comportamento responsivo.
 * Não substitui motores didáticos: reposiciona o currículo já renderizado e
 * aponta para seções existentes, preservando IDs, dados e persistência.
 */
(function () {
  'use strict';

  function iniciarShell() {
    const body = document.body;
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const curriculum = document.getElementById('curriculum');
    const curriculumNavigation = document.getElementById('navegacao-curriculo');
    const topicPanel = document.getElementById('painel-conteudo');

    if (!header || !main || body.classList.contains('app-shell-ready')) return;
    body.classList.add('app-shell-ready');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'sidebar-toggle';
    toggle.id = 'sidebar-toggle';
    toggle.setAttribute('aria-controls', 'app-sidebar');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegação');
    toggle.setAttribute('title', 'Abrir menu de navegação');
    toggle.innerHTML = '<span class="sidebar-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span><span class="sidebar-toggle-text">Menu</span>';
    header.insertBefore(toggle, header.firstChild);

    const shell = document.createElement('div');
    shell.className = 'app-shell';
    shell.id = 'app-shell';
    body.insertBefore(shell, main);
    shell.appendChild(main);

    const sidebar = document.createElement('aside');
    sidebar.className = 'app-sidebar';
    sidebar.id = 'app-sidebar';
    sidebar.setAttribute('aria-label', 'Menu principal e currículo');
    const ic = (nome) => (typeof window !== 'undefined' && window.FCNIcon) ? window.FCNIcon(nome) : '';
    sidebar.innerHTML = [
      '<div class="sidebar-brand"><span class="sidebar-brand-mark" aria-hidden="true">TI</span><div><strong>Apostila TI &amp; Dados</strong><small>Central de aprendizagem</small></div></div>',
      '<p class="sidebar-section-label">MÓDULOS</p>',
      '<div id="nav-list" class="sidebar-nav-list"></div>',
      '<nav class="quick-navigation" aria-label="Seções da apostila"><p class="sidebar-section-label">NAVEGAÇÃO</p>',
      '<a class="quick-link" href="#videos-app">' + ic('video') + '<span>Vídeos educacionais</span></a>',
      '<a class="quick-link" href="#content-area">' + ic('area-aprendizagem') + '<span>Área de aprendizagem</span></a>',
      '<a class="quick-link" href="#flashcards">' + ic('flashcard') + '<span>Flashcards</span></a>',
      '<a class="quick-link" href="#questoes">' + ic('check') + '<span>Questões e simulados</span></a>',
      '<a class="quick-link" href="#graficos">' + ic('modulo-visualizacao') + '<span>Visualização de dados</span></a>',
      '<a class="quick-link" href="#search-app">' + ic('busca') + '<span>Buscar conteúdo</span></a>',
      '<a class="quick-link" href="#progress-app">' + ic('progresso') + '<span>Meu progresso</span></a>',
      '</nav>',
      '<div class="sidebar-curriculum"><p class="sidebar-section-label">CURRÍCULO COMPLETO</p><p class="sidebar-help">Expanda os módulos para acessar unidades, tópicos e subtópicos.</p><div class="sidebar-tree-host" id="sidebar-tree-host"></div></div>',
      '<div class="sidebar-footer"><span class="sidebar-status-dot" aria-hidden="true"></span><span>Progresso salvo neste dispositivo</span></div>'
    ].join('');

    shell.insertBefore(sidebar, main);

    const overlay = document.createElement('button');
    overlay.type = 'button';
    overlay.className = 'sidebar-overlay';
    overlay.setAttribute('aria-label', 'Fechar menu');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.tabIndex = -1;
    shell.appendChild(overlay);

    if (curriculumNavigation) {
      const host = sidebar.querySelector('#sidebar-tree-host');
      if (host) {
        /* Mantém o wrapper original como ancestral: navigation.js delega eventos,
           calcula os itens visíveis e resolve pais a partir desse contêiner. */
        host.appendChild(curriculumNavigation);
        curriculumNavigation.classList.add('curriculum-navigation-panel');
        curriculumNavigation.setAttribute('aria-label', 'Árvore curricular e navegação');
        if (topicPanel && curriculum) {
          const workspace = document.createElement('section');
          workspace.className = 'study-workspace';
          workspace.id = 'study-workspace';
          workspace.setAttribute('aria-labelledby', 'study-workspace-title');
          workspace.innerHTML = '<div class="study-workspace-heading"><span class="study-eyebrow">TÓPICO EM FOCO</span><h2 id="study-workspace-title">Estude um tópico</h2><p>Escolha um módulo no menu lateral. O conteúdo, o objetivo de aprendizagem e os recursos complementares aparecerão aqui.</p></div>';
          topicPanel.classList.add('topic-content-panel');
          workspace.appendChild(topicPanel);
          main.insertBefore(workspace, header.nextSibling);
        }
      }
    }

    /* O inventário detalhado é documentação de rastreabilidade, não o fluxo
       principal de estudo. Mantém o conteúdo acessível em um disclosure fechado. */
    if (curriculum && !curriculum.querySelector(':scope > details.inventory-details')) {
      const originalHeading = curriculum.querySelector(':scope > h2');
      if (originalHeading) {
        const inventoryDetails = document.createElement('details');
        inventoryDetails.className = 'inventory-details';
        const summary = document.createElement('summary');
        summary.innerHTML = '<span class="inventory-summary-title">Inventário curricular resumido</span><span class="inventory-summary-meta">Detalhes técnicos, cobertura e rastreabilidade</span>';
        inventoryDetails.appendChild(summary);
        originalHeading.remove();
        while (curriculum.firstChild) inventoryDetails.appendChild(curriculum.firstChild);
        curriculum.appendChild(inventoryDetails);
      }
    }

    /* Conteúdo de apoio não deve competir com a área de estudo no primeiro
       carregamento; mantém vídeos e progresso acessíveis, mas mais abaixo. */
    const videosSection = document.getElementById('videos-app');
    const progressSection = document.getElementById('progress-app');
    if (videosSection && progressSection && progressSection.parentElement === main) {
      main.insertBefore(videosSection, progressSection.nextSibling);
    }

    if (topicPanel) {
      const workspaceTitle = document.getElementById('study-workspace-title');
      const workspaceDescription = document.querySelector('.study-workspace-heading p');
      const workspace = document.getElementById('study-workspace');
      const topicObserver = new MutationObserver(function () {
        const topicHeading = topicPanel.querySelector('h4');
        if (!topicHeading || !workspaceTitle) return;
        const topicTitle = topicHeading.textContent.trim();
        if (topicTitle) {
          workspaceTitle.textContent = topicTitle;
          if (workspaceDescription) {
            workspaceDescription.textContent = 'Conteúdo do currículo, objetivo de aprendizagem, referências e ferramentas de personalização deste tópico.';
          }
          /* Revela a área de estudo apenas quando há um tópico de verdade:
             antes disso ela era um estado vazio redundante com o módulo já
             aberto logo abaixo. */
          if (workspace && !workspace.classList.contains('has-topic')) {
            workspace.classList.add('has-topic');
            var suave = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
            try { workspace.scrollIntoView({ block: 'start', behavior: suave ? 'smooth' : 'auto' }); } catch (e) {}
          }
        }
      });
      topicObserver.observe(topicPanel, { childList: true, subtree: true, characterData: true });
    }

    function setSidebarOpen(open) {
      const isOpen = Boolean(open);
      const isMobileViewport = window.matchMedia('(max-width: 900px)').matches;
      const drawerOpen = isMobileViewport && isOpen;
      body.classList.toggle('sidebar-open', drawerOpen);
      toggle.setAttribute('aria-expanded', String(drawerOpen));
      toggle.setAttribute('aria-label', drawerOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      toggle.setAttribute('title', drawerOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      toggle.querySelector('.sidebar-toggle-text').textContent = drawerOpen ? 'Fechar' : 'Menu';
      overlay.tabIndex = drawerOpen ? 0 : -1;
      overlay.setAttribute('aria-hidden', String(!drawerOpen));
      sidebar.setAttribute('aria-hidden', String(isMobileViewport && !drawerOpen));
      sidebar.inert = isMobileViewport && !drawerOpen;
      if (drawerOpen) {
        const firstLink = sidebar.querySelector('.quick-link');
        if (firstLink) firstLink.focus({ preventScroll: true });
      }
    }

    function synchronizeSidebarWithViewport() {
      const isMobileViewport = window.matchMedia('(max-width: 900px)').matches;
      if (!isMobileViewport) {
        body.classList.remove('sidebar-open');
        sidebar.inert = false;
        sidebar.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.tabIndex = -1;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu de navegação');
        toggle.setAttribute('title', 'Abrir menu de navegação');
        toggle.querySelector('.sidebar-toggle-text').textContent = 'Menu';
      } else {
        setSidebarOpen(body.classList.contains('sidebar-open'));
      }
    }

    synchronizeSidebarWithViewport();
    window.addEventListener('resize', synchronizeSidebarWithViewport, { passive: true });

    toggle.addEventListener('click', function () {
      setSidebarOpen(!body.classList.contains('sidebar-open'));
    });
    overlay.addEventListener('click', function () { setSidebarOpen(false); });
    sidebar.addEventListener('click', function (event) {
      const link = event.target.closest('a[href^="#"]');
      if (link && window.matchMedia('(max-width: 900px)').matches) setSidebarOpen(false);
    });
    document.addEventListener('keydown', function (event) {
      const isMobileDrawerOpen = window.matchMedia('(max-width: 900px)').matches && body.classList.contains('sidebar-open');
      if (!isMobileDrawerOpen) return;
      if (event.key === 'Escape') {
        setSidebarOpen(false);
        toggle.focus();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = Array.from(sidebar.querySelectorAll('a.quick-link[href], .tree-node[role="treeitem"][tabindex="0"]'))
          .filter(function (element) {
            return element.getClientRects().length > 0 &&
              element.getAttribute('aria-hidden') !== 'true';
          });
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const activeElementIsInsideSidebar = sidebar.contains(document.activeElement);
        if (event.shiftKey && (!activeElementIsInsideSidebar || document.activeElement === first || document.activeElement === sidebar)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (!activeElementIsInsideSidebar || document.activeElement === last)) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    const sections = Array.from(document.querySelectorAll('#main section[id]'));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sidebar.querySelectorAll('.quick-link').forEach(function (link) {
            const active = link.hash === '#' + entry.target.id;
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
      sections.forEach(function (section) { observer.observe(section); });
    }

    /* Indicador de foco nos vídeos: ao entrar no documento interno de um
       iframe, o Chromium mantém o iframe como activeElement mas não
       dispara focus/focusin no documento pai (cross-origin) — nem quando
       o foco salta de um iframe para outro. Como o activeElement muda
       silenciosamente, a detecção observa as ações que movem o foco
       (teclado, ponteiro) e reconcilia o estado no tick seguinte. */
    let videoFocusWrap = null;
    function syncVideoFocus() {
      const active = document.activeElement;
      const wrap = (active && active.tagName === 'IFRAME' && active.closest)
        ? active.closest('.video-wrapper, .video-embed-wrap')
        : null;
      if (wrap === videoFocusWrap) return;
      if (videoFocusWrap) videoFocusWrap.classList.remove('is-video-focus');
      if (wrap) wrap.classList.add('is-video-focus');
      videoFocusWrap = wrap;
    }
    function scheduleVideoFocusSync() {
      /* O activeElement só estabiliza depois que a troca de foco dentro do
         iframe termina; por isso a reconciliação roda um instante depois
         (o atraso é imperceptível e evita trocar a classe no meio da
         transição). */
      window.setTimeout(syncVideoFocus, 60);
    }
    document.addEventListener('focusout', scheduleVideoFocusSync, true);
    document.addEventListener('focusin', scheduleVideoFocusSync, true);
    document.addEventListener('keydown', scheduleVideoFocusSync, true);
    document.addEventListener('pointerdown', scheduleVideoFocusSync, true);
    /* Enquanto o foco está dentro do iframe, os eventos de teclado passam
       para o documento interno dele: a única sinalização que sobra no
       documento pai é o blur/focus da própria janela. */
    window.addEventListener('blur', scheduleVideoFocusSync, true);
    window.addEventListener('focus', scheduleVideoFocusSync, true);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    console.info('[ui-shell] Layout responsivo e navegação inicializados.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarShell, { once: true });
  } else {
    iniciarShell();
  }
})();
