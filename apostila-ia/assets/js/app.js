/* app.js — tema (prefers-color-scheme) e inicialização geral.
 *
 * A renderização do currículo, os cliques de navegação e a marcação de
 * progresso no localStorage foram CONSOLIDADOS em navigation.js (ver cabeçalho
 * daquele arquivo). Antes este script duplicava essa responsabilidade e
 * sobrescrevia o #curriculum com um fallback vazio ("modulo1" sem hífen), já
 * que window.curriculumData nunca era preenchido pelos arquivos de dados
 * (eles declaram `const`, não `window.x =`).
 */

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;

  function applyTheme(isDark) {
    if (isDark) html.setAttribute('data-theme', 'dark');
    else html.removeAttribute('data-theme');
  }

  // Tema inicial: preferência persistida ou sistema
  var temaPersistido = (window.ApostilaPersonalizacao && window.ApostilaPersonalizacao.obterTema) ? window.ApostilaPersonalizacao.obterTema() : null;
  if (temaPersistido === 'dark') applyTheme(true);
  else if (temaPersistido === 'light') applyTheme(false);
  else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(prefersDark.matches);
    prefersDark.addEventListener('change', (e) => {
      if (!window.ApostilaPersonalizacao || !window.ApostilaPersonalizacao.obterTema()) applyTheme(e.matches);
    });
  }

  console.log('Apostila Web Interativa inicializada (tema + boot; navegação em navigation.js)');
});
