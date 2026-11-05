# AGENTS.md — FCN (Apostila Web Interativa)

App estático SPA em vanilla HTML/CSS/JS para concursos públicos brasileiros (pt-BR), 8 módulos obrigatórios (M1–M8: Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados, Visualização). Sem build, sem framework, sem `package.json`.

## Onde o app vive

O app está em `apostila-ia/` — `index.html` **não** está na raiz do repo. Todas as operações abaixo partem de `apostila-ia/`.

```bash
cd apostila-ia
# Modo A: abrir direto no navegador (file://)
open index.html
# Modo B: servidor estático local
python3 -m http.server 8080   # http://localhost:8080
```

Não há etapa de build nem dependências a instalar.

## Fonte de requisitos

`prompts/Escrita.md` (prompt mestre; foi renomeado de `Escrita.txt`). Consultar antes de qualquer implementação nova. Conteúdo em pt-BR formal, técnico e didático. **Não inventar** referências, artigos de lei, IDs de vídeo, URLs ou resultados de teste: algo declarado "verificado" exige URL + data reais.

## Estrutura essencial

- `apostila-ia/index.html` — entrada; 52 `<script src>` (31 de dados em `assets/data/` + 21 de JS em `assets/js/`). **Ordem de carregamento importa:** dados primeiro (curriculum*, flashcards*, questions*, references*, enriquecimento_m*), depois `unidade-template.js`, `accessibility.js`, `storage.js`, `db-modules.js`, `state.js`, `app.js`, `navigation.js`, `personalization.js`, `ui-shell.js`, simuladores, `flashcards.js`, `quiz-engine.js`, `charts.js`, `progress.js`, `search.js`/`audio.js` (defer).
- `apostila-ia/assets/data/` — objetos JS literais: `curriculum*.js` (M1–M8), `flashcards_m*.js`, `questions.js` + `questions_m4..m8.js`, `references.js`, `enriquecimento_m*.js` (overlay Seção 5, M1–M8). Sem `eval`, sem fetch externo.
- `apostila-ia/assets/js/` — motores: `app.js` (SPA/abas), `navigation.js` (árvore + progresso + template Seção 5), `state.js`, `storage.js`, `db-modules.js`, `ui-shell.js`, `simulators.js` + `simulator_*.js`, `flashcards.js`, `quiz-engine.js`, `charts.js`, `progress.js`, `search.js`, `audio.js`, `accessibility.js`, `unidade-template.js` (renderizador template didático).
- `apostila-ia/assets/css/styles.css` — folha de estilos canônica (variáveis `:root` + `[data-theme="light"]`). Não há bloco CSS inline em `index.html`.
- `scripts/` — utilitários de geração e auditoria: `gerar-esqueleto-enriquecimento.mjs`, `gerar-lotes-fonte.mjs`, `mesclar-lotes.mjs`, `validar-lote.mjs`, `status-lotes.mjs`, `auditar-template-didatico.mjs`, `sincronizar-governanca.mjs`.
- `inventario/`, `matriz/` (raiz do repo) — **espelhos** de `apostila-ia/inventario/` e `apostila-ia/matriz/` (ver Regra de Governança); copiados para `apostila-ia/` no deploy do Pages para que links relativos funcionem também em `file://`.

## Regra de Governança — inventário e matriz são espelhos (obrigatória)

- **Fonte de verdade:** `apostila-ia/inventario/INVENTARIO_CURRICULAR.md` e `apostila-ia/matriz/` (matriz CSV + relatório MD).
- **Espelhos:** `inventario/INVENTARIO_CURRICULAR.md`, `matriz/MATRIZ_COBERTURA.csv`, `matriz/MATRIZ_COBERTURA.md` (raiz) e as cópias em `docs/`.
- **Antes de cada publicação** (deploy no GitHub Pages) e a cada alteração do currículo/matriz, executar:

```bash
node scripts/sincronizar-governanca.mjs              # sincroniza + gera relatório de reconciliação
node scripts/sincronizar-governanca.mjs --verificar  # só audita (exit 1 se houver divergência)
```

O script regenera a matriz estrutural a partir de `apostila-ia/assets/data/curriculum*.js`, promove o resultado à fonte canônica, espelha em `matriz/` e `docs/`, confere o SHA-256 de cada par canônico↔espelho e grava `docs/RECONCILIACAO_INVENTARIO_<data>.md` (SHA, mtime e diff). **Nunca publicar com pares divergentes**: o link do rodapé (`inventario/…`, `matriz/…`) precisa resolver dentro de `apostila-ia/` em `file://` e no Pages.

## Regras de implementação

- `app.js` apaga/re-renderiza `#content-area` na troca de módulo/aba. Contêineres de simulador (`#charts-app`, `#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`, `#etica-app`) devem ficar **fora** de `#content-area` (estão em `#simulator-containers`) para não serem destruídos.
- Não usar `eval` para fórmulas. Sanitizar entrada do usuário antes de injetar em HTML.
- Persistência: localStorage chave `apostila-ia-progresso` (compartilhada por navigation/state/flashcards/quiz/progress/charts). Modo privado e `file://` podem limpar dados — advertir o usuário; existe "Exportar backup" em `progress.js`.
- Tema: escuro via `prefers-color-scheme` + toggle `#theme-toggle`, persistido no campo `theme` da mesma chave localStorage.
- Chave de módulo / ID de tópico: `modulo-N` (com hífen, 1–8, sem saltos).

## Verificação local (sem install)

```bash
node --check apostila-ia/assets/js/<arquivo>.js      # sintaxe de um JS
node --check apostila-ia/assets/data/<arquivo>.js
node verificacao/verificar-estrutura.js               # estrutura do repo / HTML
node workspace/phase5_smoke.js                        # regressão dos simuladores
node verificacao/test-browser-smoke.cjs               # smoke no browser (file://)
node verificacao/test-browser-interactions.cjs        # regressão de interação (file://)
```

Qualquer arquivo JS novo ou alterado deve passar `node --check` antes de commitar. O CI roda `node --check` em todos os `apostila-ia/assets/**/*.js`.

## CI / publicação

- `.github/workflows/deploy-pages.yml`: push em `main` (ou `workflow_dispatch`) → `node --check` em todos os JS → publica `apostila-ia/` como raiz do GitHub Pages (`https://fatal1tybarucco.github.io/FCN/`). Fluxo: branches + PR, **nunca push direto em `main`**.
- `.github/workflows/validate-curriculum.yml`: PR em `main` e push em `feat/**` → sintaxe + auditorias curriculares + estrutura + simuladores + testes de browser (Playwright/Chromium, modo `file://`) + Lighthouse (não-bloqueante).

## Git

- Stage por caminho explícito: `git add <caminho>`. Nunca `git add -A` / `git add .` em `$HOME` — é um repo git separado que contém este projeto como subpasta e lá vivem segredos e outros projetos.
