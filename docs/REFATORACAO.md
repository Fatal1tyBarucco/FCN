# REFATORAÇÃO — Apostila Web Interativa FCN

Documento de registro da refatoração de frontend, arquitetura e layout aplicada ao
projeto. Complementa `docs/DECISOES_ARQUITETURAIS.md` (decisões históricas) e
`docs/REFATORACAO_LIMITACOES.md` (limitações técnicas). Fonte de requisitos:
`Escrita.txt` (Seções 3, 7, 8, 11, 12 e 19).

## 1. Decisões arquiteturais

- **App + State global.** O estado de navegação/progresso é centralizado em
  `apostila-ia/assets/js/navigation.js`, que registra `window.apostilaDados` (alias
  retro-compatível `window.curriculumData`) e descobre módulos via cadeia de
  `typeof` (sem `eval`, sem `fetch`). `apostila-ia/assets/js/app.js` ficou
  restrito a tema (`prefers-color-scheme`) e boot. `apostila-ia/assets/js/ui-shell.js`
  monta o shell visual (menu lateral, atalhos, overlay móvel, Escape, foco,
  seção ativa) sem framework, preservando os motores existentes.
- **DB adapter sobre dados existentes.** `apostila-ia/assets/js/storage.js` é a
  camada de persistência sobre `localStorage` (chave `apostila-ia-progresso`),
  com `disponivel()`, `lerTudo()`, normalização de versão `_v` e namespaces.
  Os dados curriculares continuam sendo objetos JS literais em
  `apostila-ia/assets/data/*.js` (sem fetch externo), carregados por `<script>`.
- **Layout 2-colunas.** Sidebar sticky de 280px (menu/árvore curricular) +
  área de conteúdo em cartões, implementado em
  `apostila-ia/assets/css/styles.css` + `apostila-ia/assets/js/ui-shell.js`,
  com breakpoints para desktop/tablet/celular e menu móvel sobreposto.

## 2. O que foi preservado

- 8 módulos curriculares (M1–M8), carregados e renderizados (427 nós:
  132 tópicos + 295 subtópicos).
- 460 flashcards (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50).
- 399 questões autorais (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40,
  M8=40).
- 6 simuladores com UI montada: `#excel-app`, `#redes-app`, `#seguranca-app`,
  `#prompts-app`, `#dados-app`, `#etica-app` (globais `ExcelSimulator`,
  `NetworkSimulator`, `SecuritySimulator`, `PromptSimulator`, `DataSimulator`,
  `EthicsSimulator`).
- 5 gráficos (histograma, linhas, barras/colunas, dispersão, box plot) via
  SVG próprio em `apostila-ia/assets/js/charts.js`.
- Esquema de chaves `modulo-N` (com hífen) e chave de progresso
  `apostila-ia-progresso`.

## 3. O que foi adicionado

- Variáveis CSS para tema claro/escuro em `apostila-ia/assets/css/styles.css`
  (`:root` e `prefers-color-scheme`).
- Sidebar sticky de 280px com árvore curricular, implementada por
  `apostila-ia/assets/js/ui-shell.js` (wrapper `#navegacao-curriculo` preservado
  para handlers delegados de `navigation.js`).
- Header sticky.
- Abas (tabs) de navegação entre seções.
- TTS via Web Speech API (`SpeechSynthesisUtterance`) em
  `apostila-ia/assets/js/audio.js` (defer), com controles play/pausa, velocidade
  e aviso de indisponibilidade.
- Busca com highlight em `apostila-ia/assets/js/search.js` (defer).
- Persistência unificada sob a chave `apostila-ia-progresso`
  (`storage.js` + consumidores).

## 4. Arquivos de referência (reais)

- `apostila-ia/index.html` — entrada (Modo A `file://` / Modo B servidor).
- `apostila-ia/assets/css/styles.css` — estilos canônicos.
- `apostila-ia/assets/js/app.js`, `navigation.js`, `ui-shell.js`, `storage.js`,
  `progress.js`, `flashcards.js`, `quiz-engine.js`, `simulators.js`,
  `simulator_network.js`, `simulator_security.js`, `simulator_prompts.js`,
  `simulator_data.js`, `simulator_ethics.js`, `charts.js`, `search.js`,
  `audio.js`, `accessibility.js`.
- `apostila-ia/assets/data/` — `curriculum.js` … `curriculum_m8.js`,
  `flashcards_m1.js` … `flashcards_m8.js`, `questions.js` / `questions_m4.js` …
  `questions_m8.js`, `references.js`.

## 5. Limitações

Ver `docs/REFATORACAO_LIMITACOES.md`. Resumo: nenhum simulador executa comando
real; TTS depende do dispositivo; nenhuma referência inventada; vídeos mantêm
IDs verificados em 2026-10-24; referências técnicas pendentes (Microsoft Learn,
RFCs, CERT.br).
