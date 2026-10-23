/* accessibility.js — ACESSIBILIDADE (Seção 7 e Etapa 7 do Escrita.txt).
 *
 * - Skip-link para #curriculum
 * - Estilos focus-visible injetados
 * - Suporte a prefers-reduced-motion
 * - ARIA landmarks (role main/nav)
 * - Gerenciamento de foco ao navegar
 *
 * Contêiner: #accessibility-app (pode ser invisível). Expor window.AccessibilityApp.
 * SEM eval. SEM fetch. Funciona em file://.
 */

(function () {
  'use strict';

  var estado = { container: null, montado: false, skipLink: null, styleEl: null };

  function esc(texto) {
    return String(texto == null ? '' : texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function injetarEstilos() {
    if (document.getElementById('a11y-style')) return;
    var style = document.createElement('style');
    style.id = 'a11y-style';
    style.textContent = [
      /* Skip link */
      '.a11y-skip-link{position:absolute;left:-9999px;top:0;z-index:1000;background:#0b1d36;color:#fff;padding:.5rem .8rem;border-radius:0 0 8px 0;font-weight:700;text-decoration:none;}',
      '.a11y-skip-link:focus{left:0;outline:3px solid #fdd663;}',
      /* Focus visible */
      ':focus-visible{outline:3px solid #1a73e8;outline-offset:2px;border-radius:4px;}',
      'a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #1a73e8;outline-offset:2px;}',
      /* Reduced motion */
      '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:0.001ms !important;animation-iteration-count:1 !important;transition-duration:0.001ms !important;scroll-behavior:auto !important;}}',
      /* Landmark helpers */
      '[role="main"]:focus{outline:none;}',
      '.a11y-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}'
    ].join('');
    document.head.appendChild(style);
    estado.styleEl = style;
  }

  function removerEstilos() {
    var s = document.getElementById('a11y-style');
    if (s && s.parentNode) s.parentNode.removeChild(s);
    estado.styleEl = null;
  }

  function aplicarLandmarks() {
    // role main
    var main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
    // nav: header? tenta nav existente
    var navs = document.querySelectorAll('nav');
    navs.forEach(function (n) {
      if (!n.getAttribute('role')) n.setAttribute('role', 'navigation');
    });
    // Se não houver nav, marca o contêiner de currículo como região navegável? Apenas se existir.
    var cur = document.getElementById('curriculum');
    if (cur && !cur.getAttribute('role')) {
      cur.setAttribute('role', 'navigation');
      if (!cur.getAttribute('aria-label')) cur.setAttribute('aria-label', 'Navegação do currículo');
    }
    var painel = document.getElementById('painel-conteudo');
    if (painel && !painel.getAttribute('role')) {
      painel.setAttribute('role', 'region');
      if (!painel.getAttribute('aria-live')) painel.setAttribute('aria-live', 'polite');
    }
  }

  function criarSkipLink() {
    if (document.querySelector('.a11y-skip-link')) return;
    var link = document.createElement('a');
    link.className = 'a11y-skip-link';
    link.href = '#curriculum';
    link.textContent = 'Pular para o currículo';
    link.addEventListener('click', function (e) {
      // deixar o hash funcionar; garantir foco
      setTimeout(function () {
        var target = document.getElementById('curriculum');
        if (target) {
          try { target.focus(); } catch (err) {}
          if (document.activeElement !== target) {
            target.setAttribute('tabindex', '-1');
            try { target.focus(); } catch (err) {}
          }
        }
      }, 0);
    });
    if (typeof document.body.insertBefore === 'function') {
      document.body.insertBefore(link, document.body.firstChild);
    } else {
      document.body.appendChild(link);
    }
    estado.skipLink = link;
  }

  function removerSkipLink() {
    if (estado.skipLink && estado.skipLink.parentNode) {
      estado.skipLink.parentNode.removeChild(estado.skipLink);
    }
    estado.skipLink = null;
    var existente = document.querySelector('.a11y-skip-link');
    if (existente && existente.parentNode) existente.parentNode.removeChild(existente);
  }

  function gerenciarFocoNavegacao() {
    // Delegação: ao clicar em tópico/subtópico, focar o painel de conteúdo.
    if (estado._listener) return;
    var handler = function (e) {
      var target = e.target && e.target.closest ? e.target.closest('a[data-topic], a[data-subtopic]') : null;
      if (!target) return;
      setTimeout(function () {
        var painel = document.getElementById('painel-conteudo');
        if (painel) {
          if (!painel.getAttribute('tabindex')) painel.setAttribute('tabindex', '-1');
          try { painel.focus(); } catch (err) {}
        }
      }, 50);
    };
    document.addEventListener('click', handler, true);
    estado._listener = handler;
  }

  function removerFocoNavegacao() {
    if (estado._listener) {
      document.removeEventListener('click', estado._listener, true);
      estado._listener = null;
    }
  }

  function mount(el) {
    if (!el || typeof el.appendChild === 'undefined') {
      // container pode ser "invisível" mas ainda existe; se ausente, aplica globalmente mesmo assim
      console.warn('AccessibilityApp: contêiner ausente — aplicando globalmente mesmo assim.');
    }
    if (estado.montado) return true;
    estado.container = el || null;
    estado.montado = true;
    injetarEstilos();
    aplicarLandmarks();
    criarSkipLink();
    gerenciarFocoNavegacao();
    // marca container invisível
    if (el) {
      el.setAttribute('aria-hidden', 'true');
      el.style.position = 'absolute';
      el.style.width = '1px';
      el.style.height = '1px';
      el.style.overflow = 'hidden';
      el.style.clip = 'rect(0,0,0,0)';
    }
    return true;
  }

  function destroy() {
    removerFocoNavegacao();
    removerSkipLink();
    removerEstilos();
    estado.container = null;
    estado.montado = false;
  }

  window.AccessibilityApp = {
    mount: mount,
    destroy: destroy,
    aplicarLandmarks: aplicarLandmarks,
    _estado: estado
  };

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('accessibility-app');
    window.AccessibilityApp.mount(el);
  });
})();
