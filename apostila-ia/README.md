# Apostila Web Interativa FCN — App Estático

Aplicação SPA (Single Page Application) em **HTML/CSS/JS vanilla** para concursos públicos brasileiros (pt-BR).
8 módulos obrigatórios: **M1** Microsoft 365, **M2** Redes, **M3** Comunicação, **M4** Segurança, **M5** IA, **M6** Ética, **M7** Dados, **M8** Visualização.

**Sem build, sem framework, sem `package.json`.** Conteúdo curricular em objetos JS literais (`assets/data/`).

---

## Como executar

A partir desta pasta (`apostila-ia/`):

### Opção A — Abrir direto no navegador (file://)
```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```
> ⚠️ Em `file://`: Service Worker não registra (requer `https:`), manifest pode dar erro CORS (documentado), localStorage funciona.

### Opção B — Servidor estático local (recomendado)
```bash
python3 -m http.server 8080   # http://localhost:8080
# ou
npx serve .                   # se tiver Node
```
> ✅ Em `http://localhost`: Service Worker não registra (requer `https:`), mas todo o resto funciona idêntico a produção.

---

## Validação rápida (sem instalar nada)

```bash
# Sintaxe de todos os JS da aplicação
node --check assets/js/*.js
node --check assets/data/*.js

# Estrutura do repositório / HTML
node ../verificacao/verificar-estrutura.js

# Regressão dos simuladores (Node/vm)
node ../workspace/phase5_smoke.js

# Smoke test no browser (file:// via CDP)
node ../verificacao/test-browser-smoke.cjs

# Regressão de interações (file:// via CDP)
node ../verificacao/test-browser-interactions.cjs
```

---

## Estrutura essencial

```
apostila-ia/
├── index.html                    # entrada (43 <script src> — ordem importa)
├── assets/
│   ├── css/styles.css           # folha canônica (variáveis :root + [data-theme])
│   ├── js/                      # 20 motores: app, navigation, state, storage, db-modules,
│   │                            # ui-shell, simulators*, flashcards, quiz-engine,
│   │                            # charts, progress, search, audio, accessibility
│   └── data/                    # 23 arquivos de dados: curriculum*.js (M1–M8),
│                                # flashcards_m*.js, questions*.js, references.js
├── manifest.webmanifest          # PWA (ícones, tema, start_url)
├── service-worker.js             # SW (registro apenas em https:)
├── .nojekyll                     # desabilita Jekyll no GitHub Pages
├── robots.txt
└── sitemap.xml
```

---

## Persistência de dados do usuário

- **Chave localStorage**: `apostila-ia-progresso` (compartilhada: navegação, progresso, flashcards, quiz, gráficos, tema).
- **Modo privado / `file://`**: navegadores podem limpar dados — avisar o usuário.
- **Backup**: botão "Exportar backup" em `progress.js` (gera JSON).
- **Tema**: escuro via `prefers-color-scheme` + toggle `#theme-toggle`, persistido no campo `theme` da mesma chave.

---

## Convenções de ID (não alterar sem migrar progresso salvo)

- **Módulo**: `modulo-N` (com hífen, 1–8, sem saltos).
- **Tópico/Subtópico**: conforme `curriculum*.js`.

---

## Publicação (GitHub Pages)

- Workflow: `.github/workflows/deploy-pages.yml` (push em `main` → `node --check` em todos os JS → publica `apostila-ia/` como raiz).
- URL produção: `https://fatal1tybarucco.github.io/FCN/`
- Fluxo: **branches + PR, nunca push direto em `main`**.

---

## Documentação complementar

- `../AGENTS.md` — contexto completo do projeto e regras de implementação
- `../prompts/Escrita.md` — prompt mestre (fonte de requisitos, Seção 18 = 19 critérios)
- `../docs/AUDITORIA_FINAL.md` — matriz 19×7 (100% ATENDIDO)
- `../docs/RELATORIO_FINAL_CONFORMIDADE_2026-11-02.md` — relatório final
- `../verificacao/` — scripts de validação automatizada
- `../workspace/` — scripts de smoke test dos simuladores

---

**Última atualização:** 2026-11-02 — Projeto CONCLUÍDO (19/19 critérios ATENDIDOS).