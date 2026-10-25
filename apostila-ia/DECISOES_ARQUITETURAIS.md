# DECISÕES ARQUITETURAIS — Apostila Web Interativa FCN

## Decisões confirmadas (resumo)

- SPA estática vanilla HTML/CSS/JS; sem build; funciona em file:// (Modo A) e servidor estático (Modo B).
- Navegação dono único: navigation.js registra window.apostilaDados + alias curriculumData; descobre módulos via cadeia typeof (sem eval/fetch).
- Chaves unificadas modulo-N com hífen.
- Persistência localStorage chave apostila-ia-progresso; storage.js valida dados.
- Gráficos em SVG próprio (sem biblioteca externa) para garantir file://.
- Simuladores locais (sem ataques reais, sem IA real, sem comandos no SO).
- Questões autorais (não atribuídas a bancas reais); estilos de cobrança como formato.
- Flashcards SM-2 simplificado (documentado).
- Vídeos: nenhum publicado como validado (decisão intencional).
- PWA condicional: manifest + SW; SW não registra em file://.
- Referências verificadas: LGPD, LAI, Lei 14.129/2021, Marco Civil, CF art. 37/art. 5º.

## Auditoria arquitetural (Fase 1-8)

Auditoria read-only realizada em 2026-10-24 contra a Seção 3 do `Escrita.txt`
(fonte de requisitos). Escopo: `index.html`, `assets/js/*.js`, `assets/css/styles.css`,
`manifest.webmanifest`, `service-worker.js`, `AGENTS.md`. Nenhum código foi alterado.

### 1. Verificação item a item

| # | Requisito (Seção 3) | Evidência | Status |
|---|---|---|---|
| 1 | HTML5 semântico | `index.html` usa `<!DOCTYPE html>`, `<header>`, `<main>`, `<section aria-label>`, `<article>` (exemplos), `<footer>` | OK |
| 2 | CSS3 responsivo | `assets/css/styles.css` + media queries `max-width: 480px` em CSS inline do index; variáveis `:root` | OK |
| 3 | JS nativo, organizado em módulos quando possível | 38 tags `<script src>` locais; módulos por arquivo (`navigation.js`, `simulators.js`, …); IIFEs em storage/flashcards/... | OK (sem ES modules, por causa de file://) |
| 4 | IndexedDB para grandes volumes "quando necessário" | **Não implementado**. Dados curriculares/questões/flashcards são objetos JS literais carregados por `<script>`; progresso em localStorage. Decisão justificada: volume atual (~tamanho KB) cabe em localStorage/memória; IndexedDB adicionaria complexidade sem ganho. Ver trade-off T5. | PARCIAL (decisão documentada) |
| 5 | localStorage para preferências/dados pequenos | Chave `apostila-ia-progresso`; `storage.js` + `navigation.js` + `progress.js` consomem | OK |
| 6 | Service Worker + manifest PWA opcionais, evolução offline | `manifest.webmanifest` válido; `service-worker.js` (precache não fatal + cache-on-fetch); registro condicional em index.html (somente `http/https`) | OK (condicional) |
| 7 | SVG para ilustrações/diagramas | `charts.js` gera SVG próprio (`role="img"`, `aria-label`); `simulator_data.js` SVG inline; sem lib externa | OK |
| 8 | Bibliotecas de terceiros somente com justificativa + contingência | **Nenhuma** dependência externa (grep por CDN/unpkg/jsdelivr/googleapis em HTML/JS = 0). Contingência documentada no cabeçalho de `charts.js` (Chart.js/ECharts via CDN não funcionam em file:// offline) | OK (decisão: zero deps) |
| 9 | Modo A (abertura direta file://) funcional | Sem `import`/`require`/fetch; todos os recursos são caminhos relativos; SW não registra em file://; sem build | OK (não testado em navegador real — limite declarado) |
| 10 | Modo B (servidor estático) | `python3 -m http.server 8080` documentado; SW ativa em http:// | OK |
| 11 | Estrutura de arquivos conforme 3.3 | Todos os arquivos de referência existem: `index.html`, `assets/css/styles.css`, `assets/js/{app,navigation,search,progress,flashcards,quiz-engine,simulators,charts,storage,accessibility}.js`, `assets/data/{curriculum,questions,flashcards,references}.js` (mais variantes m2..m8), `assets/images/`, `manifest.webmanifest`, `service-worker.js`. Observação: `assets/data/flashcards.js` singular não existe — foram usados `flashcards_m1..m8.js` (8 arquivos) por módulo. Ver trade-off T2. | OK (variante documentada) |
| 12 | Navegação: dono único (navigation.js) | `navigation.js` é o único que renderiza `#curriculum`, trata cliques e marca progresso. `app.js` ficou com tema + boot | OK |
| 13 | Descoberta dinâmica via typeof (sem eval/fetch) | `fonteCurriculum`/`fonteFlashcards` usam `switch` explícito de `typeof` para `curriculum`/`curriculumM2..M8` e `flashcardsM1..M8`. Sem `eval`. `MAX_MODULOS_DESCOBERTA = 8` | OK |
| 14 | Chaves `modulo-N` com hífen | `modulo-1` … `modulo-8` em `apostilaDados.curriculum`; IDs de tópico `modulo-1-unidade-...` e `mN-uN-tN` | OK |
| 15 | Persistência chave `apostila-ia-progresso` | `navigation.js` (storageKey), `storage.js` (CHAVE), `progress.js` (STORAGE_KEY) — todos idênticos | OK |
| 16 | storage.js valida/migra | `lerTudo()` protege `JSON.parse`, valida objeto, normaliza versão `_v`; `disponivel()` probe; namespace helpers | OK (validação leve; migração apenas de `_v`, sem transformação real — ver T4) |
| 17 | Gráficos SVG próprio (sem lib externa) | `charts.js` (5 tipos: histograma, linhas, barras, dispersão, box plot) em SVG; `simulator_data.js` SVG inline | OK |
| 18 | PWA condicional: manifest + SW; SW não registra em file:// | Registro condicional `if ('serviceWorker' in navigator)` em index.html; SW inerte em file:// (documentado no cabeçalho) | OK |
| 19 | Segurança: sem eval para fórmulas | `simulators.js` parser próprio (sem `eval`/`new Function`); grep de `eval\b` retorna apenas comentários/documentação | OK |
| 20 | Sanitização de entradas antes de injetar HTML | Função `esc()` (escape de `& < > " '`) replicada em navigation, search, flashcards, quiz-engine, charts, simulators, audio, progress, accessibility; innerHTML só com strings escapadas ou templates de CSS/JS controlados | OK (ver T6 — duplicação) |
| 21 | Sem credenciais | Grep por chaves/tokens = 0 | OK |
| 22 | Acessibilidade: aria, tabindex, focus, skip links | `accessibility.js`: skip-link para `#curriculum`, `:focus-visible`, `prefers-reduced-motion`, landmarks (`role="main"`, `role="navigation"`, `role="region"`, `aria-live="polite"`), gerenciamento de foco ao navegar; charts usam `role="img"` + `aria-label`. Touch targets ≥44px | OK (parcial — ver T7) |
| 23 | Dependências externas obrigatórias para aprendizagem central | Nenhuma. Tudo local | OK |

### 2. Trade-offs e decisões

- **T1 — Sem build / sem ES modules.** Trade-off: simplicidade de entrega em file:// e zero toolchain vs. ausência de tree-shaking, linting automático e modularização real. Escolhido: scripts clássicos com IIFEs. Mitigação: `node --check` no CI (workflow Pages) + smoke tests em Node/vm.
- **T2 — Dados por módulo (`flashcards_m1..m8.js`) em vez de um único `flashcards.js`.** A Seção 3.3 sugere `assets/data/flashcards.js` singular. Escolhido: um arquivo por módulo para escalabilidade e diff menor, descobertos dinamicamente. Trade-off: mais tags `<script>` (38) e ordem de carregamento manual. Mitigação: convenção de nomenclatura + descoberta por `typeof`.
- **T3 — Descoberta por `switch` explícito de `typeof` em vez de `window['curriculumM' + n]`.** Motivo: `const` no escopo global léxico não viram propriedades de `window`, e `eval` é proibido. Trade-off: código verboso e limite fixo de 8 módulos. Mitigação: constante `MAX_MODULOS_DESCOBERTA`; adicionar módulo exige editar o switch (documentado). Alternativa rejeitada: `eval` (proibido).
- **T4 — Migração de versão de storage é nominal.** `storage.js` incrementa `_v` mas não transforma dados antigos. Trade-off: simplicidade vs. robustez de migração. Mitigação: namespaces isolados por módulo; dados corrompidos são descartados (fallback `{ _v }`). Recomendação: implementar migração real se o esquema evoluir.
- **T5 — IndexedDB não implementado.** Decisão: localStorage + objetos literais em memória bastam para o volume atual (conteúdo em KB, progresso pequeno). Trade-off: limite de ~5MB do localStorage e ausência de histórico massivo de aprendizagem. Recomendação: adotar IndexedDB quando houver (a) histórico de questões > milhares, (b) cache offline de conteúdo grande, ou (c) necessidade de busca full-text persistente.
- **T6 — `esc()` duplicada em ~9 arquivos.** Trade-off: independência de módulo (cada arquivo auto-contido, funciona em file://) vs. DRY. Mitigação: função idêntica e pequena; risco de divergência baixo. Recomendação futura: extrair para `assets/js/sanitize.js` carregado antes dos demais, se a manutenibilidade virar gargalo.
- **T7 — Acessibilidade parcial.** Skip-link, focus-visible, reduced-motion e landmarks estão implementados. Lacunas observadas: (a) a árvore de currículo é renderizada como `<a href="#">` sem `role="tree"`/`aria-expanded`; (b) o painel de conteúdo não anuncia mudanças além de `aria-live="polite"`; (c) contraste não foi auditado com ferramenta; (d) sem teste de navegação por teclado documentado. Recomendação: incremento dedicado de a11y com auditoria WCAG 2.1 AA real.
- **T8 — PWA não testada em navegador real.** SW e manifest existem e passam em `node --check`/JSON válido, mas nenhum teste de registro/cache/offline foi executado (ambiente sem navegador). Limitação declarada honestamente no index.html. Recomendação: validar em Chrome/Firefox antes de afirmar "offline-first".
- **T9 — Simuladores são didáticos, não reais.** Excel (23 funções, busca real mas sem tabelas estruturadas/R1C1/arrays dinâmicos), redes (ping/traceroute simulados, CIDR real), segurança (fictício), prompts (sem IA real), dados (SVG próprio). Trade-off: segurança/didática vs. fidelidade. Decisão alinhada à Seção 4.3 do prompt mestre (sem ataques reais).
- **T10 — Vídeos: nenhum ID validado.** Decisão intencional (Seção 12.2 exige verificação de ID + correspondência + alternativa textual). Evita inventar referências.

### 3. Limitações conhecidas

1. Nenhum teste em navegador real foi executado; verificação limita-se a `node --check` + smoke tests em Node/vm (DOM stub). Layout/interação visual em file:// não verificados.
2. IndexedDB planejado mas não implementado (ver T5).
3. `curriculum.js` contém consts órfãs (`curriculumPowerPoint14`, `curriculumWord12Supplement`, `curriculumOneDrive15`) nunca lidas — 1.4/1.5 e o complemento de exemplos de 1.2 não renderizam (documentado no AGENTS.md).
4. Migração de versão de storage é nominal (T4).
5. Acessibilidade parcial (T7).
6. PWA não validada em navegador (T8).
7. `audio.js` (Web Speech API) depende de vozes pt-BR do navegador — indisponibilidade tratada com mensagem visível, mas não testada.
8. `search.js` e `audio.js` carregados com `defer`: dependem de `window.apostilaDados`/`window.questoesBanco` populados por scripts síncronos anteriores — ordem de carregamento é crítica e não é validada automaticamente.

### 4. Recomendações (não implementadas nesta auditoria)

- Extrair `esc()` para módulo compartilhado (T6) se a manutenibilidade virar gargalo.
- Implementar migração real de storage (T4) antes de mudar o esquema.
- Adotar IndexedDB apenas quando o volume justificar (T5).
- Incremento dedicado de acessibilidade com auditoria WCAG 2.1 AA real (T7).
- Validar PWA em navegador real antes de afirmar "offline-first" (T8).
- Testar em navegador real (Chrome/Firefox/Edge) o Modo A e Modo B para fechar a lacuna de verificação.

### 5. Conclusão

A arquitetura existente atende aos requisitos centrais da Seção 3 do `Escrita.txt`
(SPA estática vanilla, file://, sem dependências externas, SVG próprio, PWA condicional,
navegação dono único, descoberta dinâmica via typeof, persistência na chave correta,
sanitização, sem eval, acessibilidade básica). As lacunas (IndexedDB, a11y parcial,
PWA não validada em navegador, migração nominal de storage) são decisões/trade-offs
documentados e não bloqueiam o Modo A. Nenhum código foi alterado nesta auditoria.
