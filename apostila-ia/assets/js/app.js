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
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const html = document.documentElement;

  function applyTheme(isDark) {
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  applyTheme(prefersDark.matches);

  prefersDark.addEventListener('change', (e) => {
    applyTheme(e.matches);
  });

  console.log('Apostila Web Interativa inicializada (tema + boot; navegação em navigation.js)');
});
