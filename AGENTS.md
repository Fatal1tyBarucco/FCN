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
              simulator_security.js · simulator_prompts.js · simulator_data.js
              simulator_ethics.js · flashcards.js · quiz-engine.js · charts.js
              search.js (defer) · audio.js (defer) · storage.js
  assets/data/ curriculum.js (M1) · curriculum_m2.js · curriculum_m3.js
               curriculum_m4.js · curriculum_m5.js · curriculum_m6.js
               curriculum_m7.js · curriculum_m8.js · flashcards_m1.js
               flashcards_m2.js · flashcards_m3.js · flashcards_m4.js
               flashcards_m5.js · flashcards_m6.js · flashcards_m7.js
               flashcards_m8.js · references.js
               questions.js · questions_m4.js · questions_m5.js ·
               questions_m6.js · questions_m7.js · questions_m8.js
               (banco de 365 questões autorais — M1/M2/M3 + M4..M8)
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

- **Código (`assets/data/*.js`) é a fonte de verdade para estado atual.** `inventario/` e `matriz/` foram sincronizados com o código em 2026-10-21 (incrementos P1-A e P1-C) e novamente em 2026-10-22 (P1-D; leitura dos arquivos); mantê-los em dia.
- **Navegação corrigida (incremento de desbloqueio) + descoberta dinâmica (P1-A)**: `navigation.js` é o dono único da navegação/renderização — o antigo SyntaxError (`curriculumData.modulo-1` com hífen) foi eliminado. Ele registra `window.apostilaDados` + alias retro-compatível `window.curriculumData`, **descobre módulos dinamicamente** (varre `curriculum` (M1), `curriculumM2`…`curriculumM8` via cadeia de `typeof` — sem `eval`, sem fetch), renderiza a árvore de todos os módulos carregados (hoje **1–8, sem exceção — M6 incluído desde o P1-C**) em `#curriculum` (append, preservando o HTML estático), exibe `objetivoAprendizagem`/`conteudo` em painel abaixo da árvore (no lugar do `alert()` antigo) e grava progresso no localStorage chave `apostila-ia-progresso`. `app.js` ficou apenas com tema (`prefers-color-scheme`) + boot.
- **Esquema de chaves unificado**: `modulo-N` **com hífen** (`modulo-1` … `modulo-8`, sem saltos desde o P1-C) — já é o esquema dos dados e dos IDs de tópico.
- **Carregado no `index.html` (renderiza ou é acionado)**: M1–M8 (**39 tags `<script src>`**: 23 de dados — 8 `curriculum*.js` + 8 `flashcards_m*.js` + 6 `questions*.js` + `references.js` — e 16 de JS: `app`, `navigation`, `simulators`, `simulator_network`, `simulator_security`, `simulator_prompts`, `simulator_data`, `simulator_ethics`, `flashcards`, `quiz-engine`, `charts`, `search` (defer), `audio` (defer), `storage.js`, `progress.js` e `accessibility.js`). `navigation.js` consolida **todos** os `curriculum*` presentes (M1 + `curriculumM2`…`curriculumM8`) descobrindo-os dinamicamente; `flashcards.js` monta a UI de flashcards (fontes unificadas via `window.apostilaDados.flashcards`, fallback `typeof` 1–8); `quiz-engine.js` monta os simulados com **escopos dinâmicos** (`mN` por módulo carregado + `cum-N` consolidando 2..N — hoje 15 escopos, m1..m8 + cum-2..cum-8); `charts.js` monta o laboratório dos 5 gráficos (`#charts-app`). Os **6 simuladores têm UI montada** nos contêineres `#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app` e `#etica-app` — montagem **inline** no `index.html` (`montarSimulador(global, id)` com guarda tripla: contêiner presente, global presente, `mount()` não lança), alimentando os globais `ExcelSimulator`, `NetworkSimulator`, `SecuritySimulator`, `PromptSimulator`, `DataSimulator` e `EthicsSimulator`. **A integração do M6 no P1-C foi só a tag `<script>`**: `navigation.js` já descobria `curriculumM6` e `flashcardsM6` via `typeof` — nenhum JS de comportamento mudou.
- M1: `curriculum['modulo-1']` contém 1.1 (8 sub-tópicos) e 1.2 (14 tópicos), que **renderizam**. 1.3 Excel: IMPLEMENTADO (unidade 3, 6 tópicos, 12 subtópicos) + simulador com busca real (PROCV/PROCH/PROCX executam busca de verdade; modelo de planilha em memória com refs A1/$ e recálculo). 1.4 PowerPoint e 1.5 OneDrive: MIGRADOS e renderizam (unidades 4 e 5, 1 subtópico cada, 3 exemplos + 2 exercícios); consts antigas comentadas como migradas. **50 flashcards** (`flashcards_m1.js`, ampliado de 10 para 50 no P1-C).
- M2 (Redes): **renderiza** — `curriculum_m2.js` (unidade 2.1, 4 tópicos; subtópicos com objetivo, conteúdo, exemplos e exercícios) + 50 flashcards + `simulator_network.js` (ping e traceroute simulados, CIDR com cálculo real; não executa comandos no SO). 2.2–2.5 IMPLEMENTADOS e renderizam (5 unidades, 19 tópicos, 52 subtópicos).
- M3: **renderiza** — `index.html` inclui `curriculum_m3.js` e `flashcards_m3.js`; 3.1–3.5 implementados (5 unidades, 14 tópicos, 35 subtópicos) + 50 flashcards.
- M4, M5, M6, M7 e M8: **carregados e renderizam** — `curriculum_m4.js` (4 unidades, 13 tópicos, 39 subtópicos), `curriculum_m5.js` (**5.1–5.4: 4 unidades, 13 tópicos, 35 subtópicos, 105 exemplos, 70 exercícios — 5.3/5.4 entraram no P1-C**), `curriculum_m6.js` (**criado no P1-C: 6 unidades 6.1–6.6, 18 tópicos, 46 subtópicos, 138 exemplos, 92 exercícios**, chave `modulo-6`, no `index.html` desde o P1-C), `curriculum_m7.js` (3 unidades, 9 tópicos, 23 subtópicos) e `curriculum_m8.js` (8.1–8.5: 5 unidades, 23 tópicos, 28 subtópicos). A árvore renderiza os **8 módulos, 132 tópicos + 295 subtópicos = 427 nós** (M1 23 tópicos + 37 subtópicos; M2 19 + 52; M3 14 + 35; M4 13 + 39; M5 13 + 35; M6 18 + 46; M7 9 + 23; M8 23 + 28; conferido módulo a módulo em smoke Node/vm do P1-F). Flashcards de M4 (54) e de M5/M6/M7/M8 (50 cada) idem. O laboratório interativo de prompts (5.4) continua inexistente — 5.4 é conteúdo didático.
- Flashcards: **404 no disco e 404 conectados ao app** (m1=50, m2=50, m3=50, m4=54, m5=50, m6=50, m7=50, m8=50 — todos os módulos têm arquivo de cartões e todos estão no `index.html` desde o P1-C; piso de 400 atingido em **quantidade**, não em domínio). Questões: **365 de 320 — piso global ATINGIDO** (autorais em `questions.js` + `questions_m4..m8.js`, motor `quiz-engine.js`; M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40 — M6 e M7 passaram a ser conectados no P1-D; medida em Node/vm em 2026-10-22, deduplicada por `id` — níveis 94 básica (25,8%) / 193 intermediária (52,9%) / 78 avançada (21,4%), formatos 290 múltipla escolha + 75 Certo/Errado, estilos CESPE 216 / FGV 58 / FCC 52 / VUNESP 39, todas autorais; **desvio documentado**: a proporção real difere da sugerida 30/45/25 da Seção 10 — intencional e justificado, pois a Seção 10 admite ajuste de distribuição). O quiz oferece **15 escopos** `mN`/`cum-N` — m1..m8 + cum-2..cum-8 (cum-8 soma 365; verificação P1-D: filtro m6=40). Gráficos: **5 de 5 implementados e carregados** (`charts.js`, SVG próprio, `#charts-app`).
- Referências: 72 itens em `references.js` (I4/I6) — 20 vídeos (verificados via oembed, 2026-10-24) + 52 referências técnicas (LGPD, LAI, Lei 14.129/2021, Marco Civil, Microsoft Learn, RFCs, CERT.br, ANPD órgão + 13 resoluções, CF art. 37 + art. 5º, Leis 8.429/1992, 1.079/1950, 13.146/2015, 10.098/2000, 10.741/2003, 13.460/2017, 12.682/2012, 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º); 72/72 verificadas, 0 pendentes em references.js. Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não listadas, demais incisos/parágrafos CF art. 37/5º não enumerados, verificação artigo a artigo das leis adicionais citadas por remissão em M6.
- Revisão pedagógica (I5, 2026-10-24): 7 correções pontuais em `curriculum.js` (M1) e `curriculum_m6.js` (M6) — erro de digitação "sinconexerência"→"sincronização", suavização de 5 afirmações não verificáveis (cotas OneDrive, prazos de retenção, art. 8º-A LAI), substituição de exercício com prazo não verificado. Documentado em `docs/REVISAO_PEDAGOGICA.md`. Contagem de nós preservada (427).

- Deploy: `.github/workflows/deploy-pages.yml` roda `node --check` em todos os `assets/**/*.js` e publica `apostila-ia/` como raiz do site (push em `main` ou manual). A action `upload-pages-artifact` só aceita **um** diretório, então o job copia `inventario/` e `matriz/` (fonte, na raiz) para dentro de `apostila-ia/` antes do upload — é o que faz os dois links do `index.html` funcionarem no Pages **e** no `file://`.

## Testes headless CDP (2026-10-24) — evidência real

- Ambiente: Chromium 156 headless controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A).
- Resultados: carregamento sem exceções JS (módulos 1–8; 404 FC; 365 Q; 5 gráficos); 12/12 contêineres não vazios; `buscar('CIDR')`=10 (índice 1196); 5 SVGs de gráficos; localStorage roundtrip OK; simuladores montados (Excel smoke 111 asserts).
- ATENDIDO: áudio (controles + aviso + 3 correções, smoke 41/41, CDP OK) — síntese depende do dispositivo (limitação documentada, não defeito).
- PARCIAL: responsividade em dispositivo físico; WCAG com leitor de tela não testado (atributos/contraste/teclado implementados).
- VÍDEOS: 20 validados (IDs verificados via oembed, 2026-10-24; embed nos módulos concluído). REFERÊNCIAS: 72/72 verificadas (0 pendentes em references.js). Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não verificadas individualmente, demais incisos/parágrafos CF art. 37/5º.
- Docs atualizados: `docs/AUDITORIA_FINAL.md` (matriz 19 critérios), `docs/RELATORIO_TESTES.md` (T9–T14), `docs/PENDENCIAS.md` (1–19), `docs/PLANO_EXECUCAO.md`, `docs/INVENTARIO_CURRICULAR.md`, `docs/DECISOES_ARQUITETURAIS.md`, `docs/REVISAO_PEDAGOGICA.md`.
- Veredito: APROVADO COM RESSALVAS. Não declarar integralmente concluído.

## Pitfalls conhecidos

- `progress.js` e `accessibility.js` **agora EXISTEM e estão carregados no `index.html`** (P1-F) — progress.js junto aos demais JS (após charts.js) e accessibility.js antes de storage.js/app.js; contêineres `#progress-app` e `#accessibility-app`. `storage.js` e `assets/data/references.js` **foram criados no P1-E e estão carregados no `index.html`** (storage.js antes de app.js; references.js entre os dados) — infraestrutura de persistência e referências verificadas. (`search.js` **passou a existir e está carregado com `defer`** (contêiner `#search-app`); `audio.js` idem (`#audio-app`); `manifest.webmanifest` e `service-worker.js` **existem** e o `<link rel="manifest">` está no `<head>` com registro condicional de SW — PWA condicional, não testado em navegador real. `charts.js` **passou a existir e está carregado**: laboratório dos 5 gráficos obrigatórios em SVG próprio, contêiner `#charts-app`. `flashcards.js` **existe e está carregado**: UI de flashcards + repetição espaçada SM-2 simplificado. `quiz-engine.js` **existe e está carregado**: motor de simulados da Seção 10.2.)
- **Cópias publicadas dos .md de governança**: `apostila-ia/inventario/` e `apostila-ia/matriz/` são **cópias** de `inventario/` e `matriz/` da raiz (a fonte de verdade é a da raiz). Elas existem versionadas dentro do app para que os links do `index.html` funcionem em `file://`; o workflow de Pages re-sincroniza com `cp` a cada deploy. **Ao editar os .md da raiz, copiar novamente para `apostila-ia/`** (`cp -R inventario matriz apostila-ia/`) e commitar as duas versões.
- **Declarações sem esquema unificado**: `curriculum.js` declara `curriculum` (o único lido pelo app) mais `curriculumPowerPoint14`, `curriculumWord12Supplement`, `curriculumOneDrive15` — declarados e **nunca lidos** por nenhum JS/HTML (1.4, 1.5 e o complemento de exemplos de 1.2 não renderizam). `curriculum_m2.js` declara `curriculumM2`; `curriculum_m3.js` declara `curriculumM3`; `curriculum_m4/5/6/7/8.js` declaram `curriculumM4`/`curriculumM5`/`curriculumM6`/`curriculumM7`/`curriculumM8`; `flashcards_m1..m8.js` declaram `flashcardsM1`…`flashcardsM8`. `navigation.js` consolida dinamicamente (varredura `typeof` 1–8, sem `eval`) todos os módulos presentes em `window.apostilaDados`.
- **Comentários de cabeçalho sincronizados na revisão do PR #4 (2026-10-21)**: `curriculum_m6.js`, `flashcards_m6.js`, `navigation.js` e `quiz-engine.js` ainda descreviam o M6 como "está em revisão no PR #3", "pendente de tag", "hoje o M6 — sem arquivo" ou "ausente no meio (hoje o M6)". Os quatro cabeçalhos passaram a registrar a integração no P1-C (2026-10-21), com as tags em `index.html:409` (`curriculum_m6.js`) e `index.html:417` (`flashcards_m6.js`) — eram apenas comentários, nenhuma lógica mudou (`quiz-engine.js` é o caso mais restrito: o diff do PR nele é **só** o bloco de comentário dos escopos dinâmicos).
- **Defeitos de dados corrigidos (2026-10-22, P1-D)**: (1) elision no array literal de `questions.js` — a vírgula sobrando depois do comentário `FIM do bloco q-m1-33..q-m1-40` (linha 2387) deixava `questoesBanco.length` em **121** com um buraco no índice 90, em vez de **120**; (2) `q-m4-04` com `gabarito: "Errado"` (caixa errada — o validador exige `"errado"`); (3) `q-m4-05` sem a chave `E` em `analise`; (4) `q-m5-02` sem o campo `pegadinha`. Corrigidos em 2026-10-22; validação estrutural das **365** questões fundidas por id em Node/vm: **0 reprovadas**.
- Simulador Excel (2026-10-20): PROCX/PROCH/PROCV agora têm **busca real** (exata e aproximada; erros #N/A/#REF!/#VAL!/#DIV/0!/#NUM!); 23 funções + aliases EN; parser próprio sem `eval`; modelo de planilha em memória (`criarPlanilha`) com refs A1/absolutas/mistas, recálculo e `ajustarFormulaAoCopiar`; separador `;` (pt-BR) ou `,` com regra declarada no cabeçalho de `simulators.js`. Limitações remanescentes declaradas no cabeçalho: sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas; correspondência aproximada não valida ordenação; **não testado em navegador real** (verificado com `node --check` + smoke test em Node/vm, 111 asserts).
- `apostila-web/` e `entregas/` estão vazios — não é código funcional.
- Inventário/matriz já foram sincronizados (2026-10-21 e 2026-10-22, incrementalmente nos P1-A, P1-C e P1-D), mas **sempre que o código mudar, atualizá-los junto** — o código é a fonte de verdade.

## Regras de contribuição

- Trabalhar em incrementos completos e funcionais — nunca placeholder, nunca "implementar depois".
- Preservar conteúdo já validado ao corrigir defeitos.
- Documentar decisões e trade-offs nos arquivos de inventário/matriz (mantê-los em dia com o código).
- `Escrita.txt` é a fonte de verdade para requisitos; este AGENTS.md descreve o estado real do código.
