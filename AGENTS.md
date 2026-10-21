# AGENTS.md — Apostila Web Interativa FCN

Projeto de apostila web interativa de TI, Dados e IA para concursos públicos brasileiros. Conteúdo em pt-BR, 8 módulos obrigatórios (Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados, Visualização).

## Visão geral

- SPA estática em vanilla HTML/CSS/JS. Sem build, sem framework, sem `package.json`, sem CI, sem testes, sem README.
- Fonte de requisitos: `Escrita.txt` (prompt mestre, 1207 linhas) — consultar antes de qualquer implementação nova.
- O app vive em `apostila-ia/` (o `index.html` **não** está na raiz do repo).

## Estrutura do repositório

```
Escrita.txt                      — prompt mestre (regras de entrega)
apostila-ia/                     — o app
  index.html                     — entrada (file:// ou servidor estático)
  assets/css/styles.css
  assets/js/  app.js · navigation.js · simulators.js · simulator_network.js
              flashcards.js · quiz-engine.js · charts.js
  assets/data/ curriculum.js (M1) · curriculum_m2.js · curriculum_m3.js
               curriculum_m4.js · curriculum_m5.js · curriculum_m6.js
               curriculum_m7.js · curriculum_m8.js · flashcards_m1.js
               flashcards_m2.js · flashcards_m3.js · flashcards_m4.js
               flashcards_m5.js · flashcards_m6.js · flashcards_m7.js
               flashcards_m8.js
               questions.js (banco de 82 questões autorais — M1/M2/M3)
               — todos os curriculum_m*.js e flashcards_m*.js (M1–M8) estão
               carregados no index.html desde o incremento P1-C (2026-10-21)
  inventario/  matriz/            — cópias publicadas dos .md de governança
                                   (a fonte é inventario/ e matriz/ na raiz;
                                   o workflow de Pages as re-sincroniza no build)
.github/workflows/deploy-pages.yml — Pages: verifica sintaxe e publica apostila-ia/
README.md                          — readme do repo GitHub
inventario/INVENTARIO_CURRICULAR.md   matriz/MATRIZ_COBERTURA.md   (raiz — fonte)
referencias/referencias-verificadas.md (raiz — LGPD, LAI, Lei 14.129/2021 e CF art. 37 caput/art. 5º XXXIII verificadas)
apostila-web/  entregas/         — diretórios vazios (estrutura planejada)
```

Repo GitHub: **https://github.com/Fatal1tyBarucco/FCN** (público). Site publicado: **https://fatal1tybarucco.github.io/FCN/** (GitHub Pages via workflow, publicando `apostila-ia/` como raiz do site). Fluxo: branches + PR (nunca push direto em `main`). O diretório `$HOME` (`/data/data/com.termux/files/home`) é um **repo git separado** que contém este projeto como subpasta — nunca rodar `git add -A`/`git add .` em `$HOME` (segredos e outros projetos vivem lá); fazer stage por caminho explícito.

## Como executar

```bash
cd apostila-ia                  # OBRIGATÓRIO: o app não está na raiz
open index.html                 # Modo A — abertura direta (Seção 3.2 do Escrita.txt)
python3 -m http.server 8080     # Modo B — servidor estático opcional
```

## Convenções do projeto

- Conteúdo em **pt-BR** formal, técnico e didático.
- **Não inventar** referências, artigos de lei, IDs de vídeo, URLs ou resultados de teste. Tudo declarado "verificado" exige evidência real (URL + data); nenhuma funcionalidade pode ser apresentada como operacional sem teste real.
- **Não usar `eval`** para fórmulas; sanitizar entradas do usuário antes de injetar em HTML.
- Persistência: localStorage com chave `apostila-ia-progresso`. Modo privado e `file://` podem limpar dados — advertir o usuário.
- Estilos: variáveis CSS em `:root`; tema escuro via `prefers-color-scheme`.
- Dados curriculares: objetos JS literais (sem `eval`, sem fetch externo).

## Estado atual

- **Código (`assets/data/*.js`) é a fonte de verdade para estado atual.** `inventario/` e `matriz/` foram sincronizados com o código em 2026-10-21 (incrementos P1-A e P1-C; leitura dos arquivos); mantê-los em dia.
- **Navegação corrigida (incremento de desbloqueio) + descoberta dinâmica (P1-A)**: `navigation.js` é o dono único da navegação/renderização — o antigo SyntaxError (`curriculumData.modulo-1` com hífen) foi eliminado. Ele registra `window.apostilaDados` + alias retro-compatível `window.curriculumData`, **descobre módulos dinamicamente** (varre `curriculum` (M1), `curriculumM2`…`curriculumM8` via cadeia de `typeof` — sem `eval`, sem fetch), renderiza a árvore de todos os módulos carregados (hoje **1–8, sem exceção — M6 incluído desde o P1-C**) em `#curriculum` (append, preservando o HTML estático), exibe `objetivoAprendizagem`/`conteudo` em painel abaixo da árvore (no lugar do `alert()` antigo) e grava progresso no localStorage chave `apostila-ia-progresso`. `app.js` ficou apenas com tema (`prefers-color-scheme`) + boot.
- **Esquema de chaves unificado**: `modulo-N` **com hífen** (`modulo-1` … `modulo-8`, sem saltos desde o P1-C) — já é o esquema dos dados e dos IDs de tópico.
- **Carregado no `index.html` (renderiza ou é acionado)**: M1–M8 (24 tags `<script src>`: 19 do P1-A + 5 adicionadas no P1-C — `curriculum_m6.js`, `flashcards_m5.js`, `flashcards_m6.js`, `flashcards_m7.js`, `flashcards_m8.js`). `navigation.js` consolida **todos** os `curriculum*` presentes (M1 + `curriculumM2`…`curriculumM8`) descobrindo-os dinamicamente; `flashcards.js` monta a UI de flashcards (fontes unificadas via `window.apostilaDados.flashcards`, fallback `typeof` 1–8); `quiz-engine.js` monta os simulados com **escopos dinâmicos** (`mN` por módulo carregado + `cum-N` consolidando 2..N — hoje 15 escopos, m1..m8 + cum-2..cum-8); `charts.js` monta o laboratório dos 5 gráficos (`#charts-app`). `simulators.js` (Excel) e `simulator_network.js` (redes) são **carregados mas sem UI** — nenhum contêiner no HTML e nenhum código da página os invoca (eles expõem os globais `ExcelSimulator` e `NetworkSimulator`); a UI deles é o P1-B pendente. **A integração do M6 no P1-C foi só a tag `<script>`**: `navigation.js` já descobria `curriculumM6` e `flashcardsM6` via `typeof` — nenhum JS de comportamento mudou.
- M1: `curriculum['modulo-1']` contém 1.1 (8 sub-tópicos) e 1.2 (14 tópicos), que **renderizam**. 1.3 Excel: sem entrada de currículo (só comentário) + simulador com busca real (PROCV/PROCH/PROCX executam busca de verdade; modelo de planilha em memória com refs A1/$ e recálculo). 1.4 PowerPoint e 1.5 OneDrive: dados existem em `curriculum.js` (consts `curriculumPowerPoint14`/`curriculumOneDrive15`), mas **nenhum script os lê — não renderizam**. **50 flashcards** (`flashcards_m1.js`, ampliado de 10 para 50 no P1-C).
- M2 (Redes): **renderiza** — `curriculum_m2.js` (unidade 2.1, 4 tópicos; subtópicos com objetivo, conteúdo, exemplos e exercícios) + 50 flashcards + `simulator_network.js` (ping e traceroute simulados, CIDR com cálculo real; não executa comandos no SO). Unidades 2.2–2.5 sem entrada de currículo.
- M3: **renderiza** — `index.html` inclui `curriculum_m3.js` e `flashcards_m3.js`; unidades 3.1 (2 tópicos) e 3.2 (3 tópicos) + 50 flashcards.
- M4, M5, M6, M7 e M8: **carregados e renderizam** — `curriculum_m4.js` (4 unidades, 13 tópicos, 39 subtópicos), `curriculum_m5.js` (**5.1–5.4: 4 unidades, 13 tópicos, 35 subtópicos, 105 exemplos, 70 exercícios — 5.3/5.4 entraram no P1-C**), `curriculum_m6.js` (**criado no P1-C: 6 unidades 6.1–6.6, 18 tópicos, 46 subtópicos, 138 exemplos, 92 exercícios**, chave `modulo-6`, no `index.html` desde o P1-C), `curriculum_m7.js` (3 unidades, 9 tópicos, 23 subtópicos) e `curriculum_m8.js` (8.1–8.5: 5 unidades, 23 tópicos, 28 subtópicos). A árvore renderiza os **8 módulos, 100 tópicos + 209 subtópicos = 309 nós** (conferido módulo a módulo em smoke Node/vm do P1-C; o retrato do P1-A era 216). Flashcards de M4 (54) e de M5/M6/M7/M8 (50 cada) idem. O laboratório interativo de prompts (5.4) continua inexistente — 5.4 é conteúdo didático.
- Flashcards: **404 no disco e 404 conectados ao app** (m1=50, m2=50, m3=50, m4=54, m5=50, m6=50, m7=50, m8=50 — todos os módulos têm arquivo de cartões e todos estão no `index.html` desde o P1-C; piso de 400 atingido em **quantidade**, não em domínio). Questões: **82 de 320** (autorais em `questions.js` + motor `quiz-engine.js`; M1=32, M2=26, M3=24; faltam 238 — M4–M8 sem questões, nada inventado; o quiz oferece **15 escopos** `mN`/`cum-N` calculados — m1..m8 + cum-2..cum-8; módulos sem questões aparecem com 0 e o texto "faltam N" é calculado; filtro m6=0 e cum-6=82 verificados no P1-C). Gráficos: **5 de 5 implementados e carregados** (`charts.js`, SVG próprio, `#charts-app`).
- Referências: LGPD (Lei 13.709/2018) verificada em `referencias/referencias-verificadas.md` com URL do planalto.gov.br + data 2026-10-20 (arts. 1°, 2°, 3°, 4°, 5°, 17, 18, 46); **Bloco 2 do P1-C (2026-10-21)**: LAI (Lei 12.527/2011) e Lei de Governo Digital (Lei 14.129/2021) verificadas no planalto.gov.br, mais CF art. 37, caput, e art. 5º, XXXIII conferidos. **Pendentes**: Microsoft Learn, RFCs/IETF, CERT.br, Marco Civil (12.965/2014), demais incisos do art. 37/art. 5º da CF e os dispositivos citados apenas por remissão no M6.
- Deploy: `.github/workflows/deploy-pages.yml` roda `node --check` em todos os `assets/**/*.js` e publica `apostila-ia/` como raiz do site (push em `main` ou manual). A action `upload-pages-artifact` só aceita **um** diretório, então o job copia `inventario/` e `matriz/` (fonte, na raiz) para dentro de `apostila-ia/` antes do upload — é o que faz os dois links do `index.html` funcionarem no Pages **e** no `file://`.

## Pitfalls conhecidos

- `search.js`, `progress.js`, `storage.js`, `accessibility.js`, `references.js`, `manifest.webmanifest` e `service-worker.js` **continuam não existindo** — e o `index.html` não tem tags `<script src>`/`<link rel="manifest">` que os referenciem (ver comentário no fim do arquivo). Não há busca, storage extra, acessibilidade, PWA nem arquivo de referências em `assets/data/`: **não referenciar nenhuma dessas funcionalidades como operacional**. (`charts.js` **passou a existir e está carregado**: laboratório dos 5 gráficos obrigatórios em SVG próprio, contêiner `#charts-app`. `flashcards.js` **existe e está carregado**: UI de flashcards + repetição espaçada SM-2 simplificado. `quiz-engine.js` **existe e está carregado**: motor de simulados da Seção 10.2.)
- **Cópias publicadas dos .md de governança**: `apostila-ia/inventario/` e `apostila-ia/matriz/` são **cópias** de `inventario/` e `matriz/` da raiz (a fonte de verdade é a da raiz). Elas existem versionadas dentro do app para que os links do `index.html` funcionem em `file://`; o workflow de Pages re-sincroniza com `cp` a cada deploy. **Ao editar os .md da raiz, copiar novamente para `apostila-ia/`** (`cp -R inventario matriz apostila-ia/`) e commitar as duas versões.
- **Declarações sem esquema unificado**: `curriculum.js` declara `curriculum` (o único lido pelo app) mais `curriculumPowerPoint14`, `curriculumWord12Supplement`, `curriculumOneDrive15` — declarados e **nunca lidos** por nenhum JS/HTML (1.4, 1.5 e o complemento de exemplos de 1.2 não renderizam). `curriculum_m2.js` declara `curriculumM2`; `curriculum_m3.js` declara `curriculumM3`; `curriculum_m4/5/6/7/8.js` declaram `curriculumM4`/`curriculumM5`/`curriculumM6`/`curriculumM7`/`curriculumM8`; `flashcards_m1..m8.js` declaram `flashcardsM1`…`flashcardsM8`. `navigation.js` consolida dinamicamente (varredura `typeof` 1–8, sem `eval`) todos os módulos presentes em `window.apostilaDados`.
- **Comentários de cabeçalho sincronizados na revisão do PR #4 (2026-10-21)**: `curriculum_m6.js`, `flashcards_m6.js` e `navigation.js` ainda descreviam o M6 como "está em revisão no PR #3", "pendente de tag" ou "hoje o M6 — sem arquivo". Os três cabeçalhos passaram a registrar a integração no P1-C (2026-10-21), com as tags em `index.html:409` (`curriculum_m6.js`) e `index.html:417` (`flashcards_m6.js`) — eram apenas comentários, nenhuma lógica mudou.
- Simulador Excel (2026-10-20): PROCX/PROCH/PROCV agora têm **busca real** (exata e aproximada; erros #N/A/#REF!/#VAL!/#DIV/0!/#NUM!); 23 funções + aliases EN; parser próprio sem `eval`; modelo de planilha em memória (`criarPlanilha`) com refs A1/absolutas/mistas, recálculo e `ajustarFormulaAoCopiar`; separador `;` (pt-BR) ou `,` com regra declarada no cabeçalho de `simulators.js`. Limitações remanescentes declaradas no cabeçalho: sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas; correspondência aproximada não valida ordenação; **não testado em navegador real** (verificado com `node --check` + smoke test em Node/vm, 111 asserts).
- `apostila-web/` e `entregas/` estão vazios — não é código funcional.
- Inventário/matriz já foram sincronizados (2026-10-21, incrementalmente nos P1-A e P1-C), mas **sempre que o código mudar, atualizá-los junto** — o código é a fonte de verdade.

## Regras de contribuição

- Trabalhar em incrementos completos e funcionais — nunca placeholder, nunca "implementar depois".
- Preservar conteúdo já validado ao corrigir defeitos.
- Documentar decisões e trade-offs nos arquivos de inventário/matriz (mantê-los em dia com o código).
- `Escrita.txt` é a fonte de verdade para requisitos; este AGENTS.md descreve o estado real do código.
