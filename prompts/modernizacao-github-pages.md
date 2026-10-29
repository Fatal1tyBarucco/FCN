# PROMPT DE EXECUÇÃO — Modernização de GitHub Pages / Site Estático (FCN)

> Documento de planejamento. **Não modifica código do app.** Executar em fases, com PRs por fase, validação antes de merge.

## 1. Objetivo

Modernizar a experiência visual, de performance, acessibilidade, SEO e UX da apostila web interativa FCN (SPA estática vanilla em `apostila-ia/`), publicada no GitHub Pages, sem alterar a fonte de dados curriculares nem a arquitetura de navegação existente, e sem introduzir dependências de build/framework.

## 2. Contexto do projeto FCN

- App: `apostila-ia/index.html` (SPA vanilla HTML/CSS/JS; sem build, sem `package.json`).
- Publicação: GitHub Pages via `.github/workflows/deploy-pages.yml`, publicando `apostila-ia/` como raiz do site (`https://fatal1tybarucco.github.io/FCN/`).
- CI estrutural: `.github/workflows/validate-curriculum.yml` (sintaxe, auditorias, verificação estrutural).
- 8 módulos curriculares (M1–M8), 439 nós na árvore, 474 flashcards, 409 questões, 5 gráficos, 6 simuladores.
- CSS canônico: `apostila-ia/assets/css/styles.css` (bloco inline removido em 2026-10-27).
- Tema: dark via `prefers-color-scheme`; persistência localStorage chave `apostila-ia-progresso`.
- Restrições herdadas (AGENTS.md): não inventar referências/URLs/resultados; não usar `eval`; sanitizar entradas; pt-BR formal.
- Limitações conhecidas: Playwright indisponível em Termux; WCAG com leitor de tela não testado; vídeos incorporados parcialmente; PWA não testada em produção.

## 3. Diretrizes de design (2026)

### 3.1 Layout e componentes
- Mobile-first; breakpoints baseados em conteúdo, não em dispositivos.
- Bento grids para dashboards/seções de destaque; cards com hierarquia clara; glassmorphism apenas onde não comprometer contraste (WCAG AA 4.5:1 corpo).
- Largura de leitura 65–80 caracteres/linha; `max-width` ~760px para texto longo.
- Container queries para componentes reutilizáveis (cards em sidebar vs. coluna principal); `:has()` para estados condicionais (form inválido, card com imagem); `subgrid` para alinhamento pixel-perfect.
- Grid CSS nativo; evitar dependência de frameworks pesados (Tailwind opcional via CDN apenas se justificado — preferir CSS puro por ausência de build).

### 3.2 Tipografia
- System font stack por padrão (`system-ui, sans-serif`); variable fonts quando auto-hospedadas; `font-display: swap` ou `optional`.
- Limite a 2 famílias; self-host para evitar terceiros; preload da fonte crítica.
- Escala tipográfica com `clamp()`; logical properties para i18n.

### 3.3 Cor e dark mode
- Variáveis CSS em `:root`; tema escuro via `prefers-color-scheme` (já adotado) + toggle persistido.
- Paleta com contraste AA; considerar OKLCH/color-mix() para harmonia; evitar cores puras saturadas em fundos grandes.
- Respeitar `prefers-reduced-motion`.

### 3.4 Animações
- Discretas: view transitions para mudanças de estado/SPA (já é SPA); scroll-driven animations para reveal-on-scroll/progress bar, rodando off-main-thread.
- Evitar animações que causem CLS; usar `@supports` para features "newly available".

### 3.5 Performance (Core Web Vitals 2026)
- Alvos: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (TBT ≤ 300ms desktop/mobile).
- Lighthouse ≥ 90 performance e acessibilidade.
- Imagens: AVIF padrão para fotos, WebP fallback, JPEG final; SVG para ícones/line art; JPEG XL apenas monitorar (não construir sobre ele ainda — SitePoint 2026).
- `<picture>` com `<source type="image/avif">` + `<source type="image/webp">`; `width`/`height` em todo `<img>`; `loading="lazy"` abaixo da dobra; `fetchpriority="high"` e **nunca** lazy na imagem LCP; `decoding="async"` em imagens grandes abaixo da dobra.
- `srcset`/`sizes` com variantes geradas em build (script ImageMagick/Sharp) — como não há build, gerar variantes manualmente ou via CI.
- Fontes: self-host, subset, `font-display: swap`, preload crítico, máx. 2 famílias.
- JS: defer/async não crítico; evitar frameworks em runtime em site de conteúdo.

### 3.6 Acessibilidade
- WCAG 2.1/2.2 AA: contraste >4.5:1 corpo; landmarks; skip-link; foco visível; navegação por teclado; `aria-label` em controles; alt em imagens; uma `<h1>` por página.
- Testes axe/Lighthouse em CI; leitor de tela em dispositivo real (pendente).

### 3.7 SEO (limitações do GitHub Pages)
- Meta title/description únicos por página; canonical **absoluto** (importante: projeto site acessível em `username.github.io/repo/` e domínio customizado).
- Open Graph + Twitter Cards; JSON-LD structured data (jekyll-seo-tag equivalente manual ou via script).
- `sitemap.xml` e `robots.txt` na raiz.
- **Limitação estrutural (RunxBuild 2026):** GitHub Pages não emite 301, não permite headers customizados (Cache-Control, CSP, X-Robots-Tag), não serve 410. Workaround: redirect HTML com `<meta http-equiv="refresh">` + canonical. Duplicidade `github.io` vs domínio customizado só mitigável por canonical absoluto.
- IndexNow para submissão de novas URLs (opcional; requer arquivo de chave na raiz).

### 3.8 PWA
- `manifest.webmanifest` + ícone 192px (já presente); service worker condicional HTTPS (já presente, não testado em produção).
- Precaching de assets críticos; fontes/imagens com estratégia cache-first.
- Incerteza: SW em `file://` não funciona — documentar.

## 4. Checklist de modernização

- [ ] Auditoria baseline Lighthouse (mobile + desktop) em produção e `file://` (registrar scores).
- [ ] Auditoria de contraste axe (0 violações) — já atingido em PR #23; manter.
- [ ] Imagens: inventariar assets; converter para AVIF/WebP; adicionar `width`/`height`; lazy loading.
- [ ] Fontes: decidir self-host vs. system stack; preload.
- [ ] CSS: migrar para tokens (custom properties) consistentes; container queries em cards; `:has()` em formulários; nesting nativo.
- [ ] Motion: view transitions na troca de abas/módulos; scroll-driven reveal; respeitar reduced-motion.
- [ ] Acessibilidade: landmarks, skip-link (já presente), foco visível, ARIA.
- [ ] SEO: canonical absoluto, OG/Twitter, JSON-LD, sitemap, robots.txt.
- [ ] PWA: validar SW em HTTPS, manifest, offline fallback.
- [ ] Performance: minificação CSS/JS no CI (já no deploy); code-split por aba se necessário.
- [ ] Testes: Lighthouse CI no workflow; axe em CI; smoke browser (CDP).

## 5. Fases de execução

1. **Fase 0 — Baseline e auditoria** (read-only): coletar Lighthouse/axe, inventariar assets, documentar scores. Sem mudança de código.
2. **Fase 1 — Tokens e tipografia** (CSS): consolidar variáveis, escala `clamp()`, font-display. PR pequeno.
3. **Fase 2 — Layout responsivo** (CSS): container queries, bento grids, cards. PR.
4. **Fase 3 — Motion** (CSS/JS): view transitions, scroll-driven, reduced-motion. PR.
5. **Fase 4 — Imagens e fontes** (assets + HTML): AVIF/WebP, dimensions, lazy, preload. PR.
6. **Fase 5 — Acessibilidade** (HTML/CSS/JS): landmarks, ARIA, foco. PR.
7. **Fase 6 — SEO** (HTML + arquivos raiz): meta, canonical, OG, JSON-LD, sitemap, robots. PR.
8. **Fase 7 — PWA** (SW + manifest): validar offline, precache. PR.
9. **Fase 8 — CI/validação**: Lighthouse CI, axe CI, atualização de docs. PR.

Cada fase: branch `feat/mod-...`, PR, CI verde (node --check, verificar-estrutura, phase5_smoke, Lighthouse ≥90) antes de merge.

## 6. Critérios de aceite

- Lighthouse (mobile): Performance ≥90, Accessibility ≥90, Best Practices ≥90, SEO ≥90.
- Core Web Vitals: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms em field/lab.
- axe: 0 violações AA.
- `node --check` 43/43; `verificar-estrutura.js` 0 falhas; `phase5_smoke.js` 25/25.
- Browser smoke CDP: 0 erros JS, 8 módulos × 6 abas, simuladores montados.
- Nenhuma regressão de navegação/progresso (localStorage round-trip).
- Documentação atualizada (AGENTS.md, docs/).

## 7. Limitações e incertezas

- GitHub Pages não emite 301/headers/410 (RunxBuild, 2026) — confirmado.
- JPEG XL: melhor história técnica, pior adoção — não construir sobre ele ainda (SitePoint, 2026-? data não verificada no snippet).
- Scroll-driven animations e View Transitions: "newly available" (Interop 2026) — usar `@supports` e fallback.
- AVIF encode é lento em pipelines grandes; irrelevante para serving (SitePoint).
- Dados de field (corewebvitals.io, outubro 2026): 5.4% AVIF no fleet; AVIF tem 91% pass LCP — correlação, não causalidade garantida.
- Playwright indisponível em Termux; smoke via CDP.
- PWA/SW não testados em produção (HTTPS) — incerteza.
- WCAG com leitor de tela não testado — incerteza.
- Vídeos incorporados parcialmente — pendência remanescente.

## 8. Fontes (URL + data de consulta 2026-10-29)

- https://techyorker.com/a-refresher-on-github-pages — GitHub Pages 2026 playbook, hardening, Lighthouse/ CWV targets.
- https://runxbuild.com/blog/github-pages-seo — limitações estruturais do GitHub Pages (sem 301/headers/410), canonical absoluto, IndexNow.
- https://jekyllpad.com/blog/mastering-github-pages-seo-7 — SEO estático, metadata, sitemap.
- https://rainshadow.tech/blog/2026/04/03/how-i-built-my-website-with-jekyll-and-github-pages — imagens WebP, srcset, lazy, jekyll-seo-tag.
- https://mcgarrah.org/jekyll-website-optimization-part-1 — otimização Jekyll/GitHub Pages.
- https://www.mironsoft.de/en/blog/css-modern-features-2026 — CSS moderno 2026 (container queries, :has(), nesting, view transitions, scroll-driven).
- https://cssawwwards.com/blog/complete-guide-modern-css-2026 — guia modern CSS 2026, Baseline widely/newly available.
- https://developer.chrome.com/blog/css-wrapped-2023 — container queries, :has(), view transitions, scroll-driven (suporte).
- https://www.corewebvitals.io/state-of-cwv/explorer/metrics.images.format/desktop — estado CWV 2026, mix de formatos de imagem.
- https://www.sitepoint.com/image-optimization-for-core-web-vitals-in-2026-what-actually-moves-the-needle — otimização de imagens 2026, AVIF/WebP/JPEG XL.
- https://web.dev/learn/performance/image-performance — image performance (web.dev).
- https://openpwa.net/reference/performance/fonts-images — fontes/imagens, AVIF, fetchpriority.
- https://free-git-hosting.github.io/enhancing-user-experience-github-hosted-site — UX GitHub Pages (largura de leitura, imagens, caching, a11y).
- https://css-tricks.com/interop-2026/ — Interop 2026 (scroll-driven animations).
- https://modern-css.com/whats-new/ — scroll-driven animations cross-browser baseline.

> Nota: datas de publicação de alguns artigos não foram verificadas individualmente; marcar como incerteza ao citar em docs finais. Nenhuma capacidade foi inventada — apenas o que as fontes descrevem.