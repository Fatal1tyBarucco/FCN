# Prompt — Workflow de Bundle Single-HTML (WebDev completo)

## Objetivo
Criar (via GitHub Actions, em push na `main`) um arquivo HTML único e autocontido
(`apostila-ia-completa.html`) que renderize o site completo (HTML + CSS + JS + dados),
atualizado dinamicamente a cada push na `main`, sem substituir o deploy modular do
GitHub Pages.

## Contexto do projeto
- SPA estática em `apostila-ia/` (Modo A: abertura direta de `index.html`).
- Dados modulares: `curriculum*.js`, `flashcards_m*.js`, `questions*.js`, `references.js`.
- Comportamento: `app.js`, `navigation.js`, `simulators*.js`, `charts.js`, `storage.js`, etc.
- Estilos: `assets/css/styles.css`.
- Deploy atual: `.github/workflows/deploy-pages.yml` (modular, publica `apostila-ia/`).

## Escopo
1. Script `scripts/bundle-single-html.mjs` (Node puro, sem deps) que:
   - Lê `apostila-ia/index.html`.
   - Inlineia `assets/css/styles.css` em `<style>`.
   - Inlineia, na ordem correta de dependências, todos os JS de dados e de
     comportamento em `<script>`.
   - Remove `<script src>`/`<link rel="stylesheet">` externos.
   - Grava `dist/apostila-ia-completa.html`.
2. Workflow `.github/workflows/bundle-single-html.yml`:
   - Trigger: `push` em `main` (e `workflow_dispatch`).
   - Roda `node scripts/bundle-single-html.mjs`.
   - Valida com `node --check` no bundle gerado e teste de abertura `file://` (headless).
   - Anexa `dist/apostila-ia-completa.html` como artifact (e opcionalmente GitHub Release).
   - Verifica tamanho < limite (ex.: 10 MB).
3. Manter `deploy-pages.yml` intocado (site modular continua sendo o publicado).
4. Documentar em `docs/` (README/instruções de uso do bundle).

## Restrições (Escrita.txt)
- Não usar `eval`.
- Não inventar resultados de testes.
- Não substituir o deploy modular pelo bundle.
- Preserve conteúdo validado.
- Modo A (abertura direta) deve continuar funcionando.

## Critérios de aceite
- Bundle gerado em push na `main` sem erros.
- Arquivo único abre em navegador moderno sem servidor.
- `node --check` passa no bundle.
- Tamanho documentado e < 10 MB.
- Site publicado (Pages) inalterado.

## Limitações conhecidas
- Sem cache granular (arquivo único grande).
- Debugging mais difícil; diff de PRs grandes.
- Service Worker/PWA não aplicável ao bundle.
- Disponibilidade regional de vídeos externos não garantida (embeds continuam remotos).
