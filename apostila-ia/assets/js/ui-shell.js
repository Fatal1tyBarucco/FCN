/* ui-shell.js — shell visual, navegação lateral e comportamento responsivo.
 * Não substitui motores didáticos: reposiciona o currículo já renderizado e
 * aponta para seções existentes, preservando IDs, dados e persistência.
 */
(function () {
  'use strict';

  function iniciarShell() {
    const body = document.body;
    const header = body.querySelector(':scope > header');
    const main = document.getElementById('main-content');
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
    sidebar.innerHTML = [
      '<div class="sidebar-brand"><span class="sidebar-brand-mark" aria-hidden="true">TI</span><div><strong>Apostila TI &amp; Dados</strong><small>Central de aprendizagem</small></div></div>',
      '<nav class="quick-navigation" aria-label="Seções da apostila"><p class="sidebar-section-label">NAVEGAÇÃO</p>',
      '<a class="quick-link" href="#videos-app"><span aria-hidden="true">▶</span><span>Vídeos educacionais</span></a>',
      '<a class="quick-link" href="#study-workspace"><span aria-hidden="true">▤</span><span>Área de aprendizagem</span></a>',
      '<a class="quick-link" href="#flashcards"><span aria-hidden="true">▣</span><span>Flashcards</span></a>',
      '<a class="quick-link" href="#questoes"><span aria-hidden="true">✓</span><span>Questões e simulados</span></a>',
      '<a class="quick-link" href="#graficos"><span aria-hidden="true">▥</span><span>Visualização de dados</span></a>',
      '<a class="quick-link" href="#search-app"><span aria-hidden="true">⌕</span><span>Buscar conteúdo</span></a>',
      '<a class="quick-link" href="#progress-app"><span aria-hidden="true">◷</span><span>Meu progresso</span></a>',
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
          workspace.innerHTML = '<div class="study-workspace-heading"><span class="study-eyebrow">ÁREA DE APRENDIZAGEM</span><h2 id="study-workspace-title">Estude um tópico</h2><p>Escolha um módulo no menu lateral. O conteúdo, o objetivo de aprendizagem e os recursos complementares aparecerão aqui.</p></div>';
          topicPanel.classList.add('topic-content-panel');
          workspace.appendChild(topicPanel);
          main.insertBefore(workspace, main.firstChild);
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
      const topicObserver = new MutationObserver(function () {
        const topicHeading = topicPanel.querySelector('h4');
        if (!topicHeading || !workspaceTitle) return;
        const topicTitle = topicHeading.textContent.trim();
        if (topicTitle) {
          workspaceTitle.textContent = topicTitle;
          if (workspaceDescription) {
            workspaceDescription.textContent = 'Conteúdo do currículo, objetivo de aprendizagem, referências e ferramentas de personalização deste tópico.';
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
        const focusable = Array.from(sidebar.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
          .filter(function (element) { return !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true'; });
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === sidebar)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    const sections = Array.from(document.querySelectorAll('#main-content section[id]'));
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
