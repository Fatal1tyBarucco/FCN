# MATRIZ DE COBERTURA — Etapa 2 (Seção 4 / 5 do prompt mestre)

Formato: Subtópico | Conteúdo didático | 3+ exemplos | Flashcards (≥50/módulo) | Questões (≥40/módulo) | Gráfico/Simulador | Referência verificada | Estado

Revisão/sincronização com o código: 2026-10-20 (leitura de `assets/data/*.js`, `assets/js/*.js` e `index.html`). O código é a fonte de verdade.
Revisão P0 (disco × carregado): 2026-10-20 — correção de textos falsos: gráficos **5/5 carregados**; M4, M5, M7 e M8 **com currículo em disco, fora do `index.html`**; flashcards **164 no disco / 110 conectados ao app** (faltam 236 no disco e 290 para o app); links do `index.html` para este arquivo e para o inventário corrigidos para o Pages.

---

## MÓDULO 1 (parcial)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m1-u1-t1-s1..s8 | Ecossistema M365 | Texto OK (`curriculum['modulo-1']`; árvore + painel de objetivo/conteúdo renderizam na página) | 3 / 3 (em `curriculum`, subtópico 1 — dados presentes; o painel **não** exibe campos `exemplos`) | 3 | 8 | Nenhum | Microsoft Learn (não verificada) | Parcial |
| m1-u2-t1..t14 | Word | Texto OK (renderiza; arrays `exemplos`/`exercicios` internos vazios) | 3 / 3 em const `curriculumWord12Supplement` (**não renderizada**) + 3 no `index.html` | 7 | 17 | Nenhum | Microsoft Learn (não verificada) | Parcial |
| m1-u3 | Excel (simulador com busca real) | Sem entrada de currículo (só comentário em `curriculum.js`) + simulador com escopo declarado e busca real (23 funções: SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, SES, E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE, PROCV, PROCH, PROCX, CORRESP, ÍNDICE, HOJE + aliases EN; planilha em memória com refs A1/$ e recálculo; parser sem `eval`; rejeita inválido com msg útil) | 3 no `index.html` | 0 | 3 (escopo do simulador; conteúdo de currículo continua ausente) | Simulador Excel (`simulators.js`; busca real verificada com smoke test Node/vm 111 asserts; não testado em navegador) | Microsoft Learn (não verificada) | Parcial — simulador funcional no escopo declarado; conteúdo de currículo ausente |
| m1-u4 | PowerPoint | Conteúdo base em const `curriculumPowerPoint14` (**nenhum script a lê — não renderiza**) | 3 / 3 + 2 exercícios na mesma const (não renderizam) | 0 | 2 (const não renderizada) | Nenhum (não aplicável) | Microsoft Learn (não verificada) | Parcial — dados existem, não renderizam |
| m1-u5 | OneDrive | Conteúdo base em const `curriculumOneDrive15` (**nenhum script a lê — não renderiza**) | 3 / 3 + 2 exercícios na mesma const (não renderizam) | 0 | 2 (const não renderizada) | Nenhum | LGPD art. 46 (`referencias/referencias-verificadas.md`, 2026-10-20) | Parcial — dados existem, não renderizam |

Flashcards M1: **10 / 50** do módulo (3 em m1-u1, 7 em m1-u2). Questões M1: **32 / 40** (`assets/data/questions.js`, autorais; faltam 8).

---

## MÓDULO 2 (parcial)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m2-u1-t1..t4 | 2.1 Fundamentos de Redes | Texto OK (`curriculum_m2.js`, renderiza; 7 subtópicos com `objetivoAprendizagem` e `conteudo`) | 7 conjuntos de exemplos + exercícios presentes no arquivo | 10 | 26 | `simulator_network.js`: ping e traceroute **simulados**, CIDR com cálculo **real** (não executa comandos no SO) | RFCs/IETF (não verificadas) | Parcial |
| m2-u2 .. m2-u5 | Modelos OSI/TCP-IP; protocolos; endereçamento e sub-redes; diagnóstico | PENDENTE (sem entrada em `curriculum_m2.js`) | — | 40 (10 por tema; sem conteúdo de currículo correspondente) | 0 (sem currículo correspondente — nenhuma questão inventada para mascarar a lacuna) | Mesmo simulador de redes | - | 0% (currículo) |

Flashcards M2: **50 / 50** do módulo (`flashcards_m2.js`). Questões M2: **26 / 40** (piso por módulo; autorais, todas da unidade 2.1 — faltam 14).

Nota de renderização: `navigation.js` exibe no painel apenas `objetivoAprendizagem` e `conteudo`; os campos `exemplos`/`exercicios` existem nos dados mas ainda não têm UI própria.

---

## MÓDULO 3 (parcial)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m3-u1-t1..t2 | 3.1 Correio Eletrônico (SMTP/POP3/IMAP; cabeçalhos e destinatários; spam/phishing/spoofing) | Texto OK (`curriculum_m3.js`, renderiza) | 4 subtópicos × exemplos + exercícios | 25 | 17 | Nenhum | RFCs/IETF e LGPD (só LGPD verificada) | Parcial |
| m3-u2-t1..t3 | 3.2 Calendários e Reuniões (convites e permissões; Teams/Meet/Zoom; políticas de gravação) | Texto OK (renderiza) | 4 subtópicos × exemplos + exercícios | 25 | 7 | Nenhum | LGPD (`referencias-verificadas.md`) | Parcial |

Sem entrada de currículo (requisitos do `Escrita.txt`): webmail versus clientes locais; etiqueta digital, acessibilidade e comunicação profissional; estudos de caso de reuniões inseguras.
Flashcards M3: **50 / 50** do módulo (`flashcards_m3.js`, incluído no `index.html`). Questões M3: **24 / 40** (piso por módulo; autorais — faltam 16).

---

## MÓDULO 4 (conteúdo em disco, não carregado + referência verificada)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m4-u1 (4 tópicos, 12 subtópicos) | Fundamentos de segurança | Texto OK em `curriculum_m4.js` (**não renderiza**: arquivo fora do `index.html`) | presentes no arquivo (não renderizam) | 0 conectados / 54 no disco (`flashcards_m4.js`, fora do app) | 0 | Simulador de phishing: inexistente | nenhuma citação de dispositivo nesta unidade (LGPD verificada no módulo, usada em 4.2–4.4) | Parcial — disco |
| m4-u2 (4 tópicos, 12 subtópicos) | Malwares e ferramentas defensivas | Texto OK em disco (não renderiza) | presentes no arquivo | idem | 0 | — | LGPD art. 2º e 18 (verificadas) | Parcial — disco |
| m4-u3 (3 tópicos, 9 subtópicos) | Ameaças e ataques | Texto OK em disco (não renderiza) | presentes no arquivo | idem | 0 | Simulador defensivo de triagem de phishing: inexistente (obrigatório) | — | Parcial — disco |
| m4-u4 (2 tópicos, 6 subtópicos) | Legislação e conformidade | Texto OK em disco (não renderiza) | presentes no arquivo | idem | 0 | — | LGPD verificada; Marco Civil/LAI/Governo Digital marcados como não verificados | Parcial — disco |

Estado: **currículo completo no disco** (`assets/data/curriculum_m4.js` — 13 tópicos, 39 subtópicos, com exemplos e exercícios), **não carregado pelo `index.html`** — nada renderiza; 54 flashcards em `flashcards_m4.js` também fora do app; 0 questões; simulador de phishing 0%; 1 referência verificada (LGPD).

---

## MÓDULOS 5–8 (estado real: disco × carregado)
| Módulo | Arquivo de currículo no disco | Conteúdo | Carregado no `index.html`? | Simulador |
|---|---|---|---|---|
| M5 — IA | `curriculum_m5.js` | 5.1 e 5.2 — 2 unidades, 5 tópicos, 14 subtópicos (com exemplos/exercícios; matriz de confusão presente) | **NÃO** (não renderiza) | laboratório de prompts: inexistente |
| M6 — Ética / Serviço Público | **inexistente** | 0% | — | — |
| M7 — Fundamentos de Dados | `curriculum_m7.js` | 3 unidades, 9 tópicos, 23 subtópicos (com exemplos/exercícios) | **NÃO** (não renderiza) | próprio: inexistente |
| M8 — Visualização | `curriculum_m8.js` | 8.1–8.5 — 5 unidades, 23 tópicos, 28 subtópicos (com exemplos/exercícios) | **NÃO** (não renderiza) | **gráficos 5/5 carregados** (`charts.js`) |

Observação: 5.3 e 5.4 continuam **ausentes** (nenhum arquivo). Nenhum de M4, M5, M7 e M8 tem flashcards nem questões conectados ao app.

---

TOTAIS GLOBAIS (2026-10-20): flashcards **164 no disco / 110 conectados ao app** (m1=10, m2=50, m3=50 carregados; m4=54 em `flashcards_m4.js`, fora do `index.html`) **com UI de repetição espaçada conectada** (`flashcards.js`, SM-2 simplificado) — faltam **236 para o disco** e **290 para o app** (piso 400); questões **82 / 320** (M1=32, M2=26, M3=24; autorais, com banco `assets/data/questions.js` + motor `assets/js/quiz-engine.js`); gráficos **5 / 5 implementados e carregados** (`charts.js`, SVG próprio, contêiner `#charts-app`); simuladores: Excel (escopo declarado, busca real em PROCV/PROCH/PROCX; **núcleo carregado, sem UI**) + redes (didático; **núcleo carregado, sem UI**) — os demais exigidos (segurança, IA, dados) inexistentes.

LIMITAÇÕES DOCUMENTADAS (não inventar):
- Nenhum vídeo YouTube validado com ID verificado (Seção 12.2 exige verificação real de ID + correspondência temática; não inserir URLs não validadas).
- Referências: apenas LGPD verificada com URL + data. Microsoft Learn (M365), RFCs/IETF (redes), CERT.br (segurança) e demais fontes do Planalto (Marco Civil, LAI, Governo Digital) seguem **pendentes** de verificação.
- Simulador de rede: implementado (`simulator_network.js`) com escopo declarado — ping e traceroute simulados (latências fictícias), CIDR com cálculo real; **não executado em navegador neste turno**; não afirmar teste de uso sem evidência.
- Simulador Excel: reescrito em 2026-10-20 (`simulators.js`) — 23 funções com cálculo/busca reais, PROCV/PROCH/PROCX com busca exata e aproximada, parser próprio sem `eval`, planilha em memória com refs relativas/absolutas/mistas e recálculo, rejeição de entradas inválidas com mensagem útil, códigos de erro #N/A/#REF!/#VAL!/#DIV/0!/#NUM!; limitações declaradas no cabeçalho do arquivo (sem tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas; aproximada não valida ordenação); verificado com `node --check` + smoke test em Node/vm (**111 asserts**); **não testado em navegador real**.
- Gráficos: **5/5 implementados e carregados** (`assets/js/charts.js` — histograma, linhas, barras/colunas, dispersão e box plot em SVG próprio, contêiner `#charts-app`; cálculos verificados com `node --check` + smoke test em Node/vm; **não testado em navegador real**). Os currículos de M8 (`curriculum_m8.js`) seguem fora do `index.html`; não confundir o laboratório de gráficos com o módulo curricular.
- Flashcards: **164 escritos no disco** (m1=10, m2=50, m3=50, m4=54) e **110 conectados ao app** (piso: 400 — faltam 236 no disco, 290 para o app). `flashcards_m4.js` está fora do `index.html`; nenhum cartão inventado. Não confundir número cadastrado com domínio real; **repetição espaçada CONECTADA** neste incremento (`flashcards.js`: SM-2 simplificado documentado no cabeçalho do arquivo, estados Acertou/Difícil/Errou, filtros por módulo/nível, modos todos/vencidos/errados, contagens dominados/pendentes/vencidos/em revisão, exportação/importação de backup JSON; verificado com smoke test em Node/vm — 59 asserts; **não testado em navegador real**).
- Questões: **82 implementadas** (piso: 320 — faltam 238) em `assets/data/questions.js`, com motor de simulados `assets/js/quiz-engine.js` (Seção 10.2) e seção própria no `index.html`. **Nenhuma atribuída a banca real**: o campo `estilo` (CESPE/FGV/FCC/VUNESP) indica apenas o formato de cobrança; `origem` é sempre `autoral`. Verificado com smoke test em Node/vm — **92 asserts**; **não testado em navegador real**.
- `search.js`, `progress.js`, `storage.js`, `accessibility.js`, `references.js`, `manifest.webmanifest` e `service-worker.js` **não existem** e não são referenciados no `index.html` — não citar busca, PWA, storage extra ou acessibilidade como operacional. (`charts.js` **existe e está carregado**: laboratório dos 5 gráficos. `flashcards.js` **existe e está carregado**: UI de flashcards + repetição espaçada. `quiz-engine.js` **existe e está carregado**: banco de questões + simulados.)
- **Correção além do escopo estrito mapeado (declarada)**: além da questão `q-m1-32`, dois textos-irmãos do mesmo defeito na seção "Exemplos resolvidos — Módulo 1.3 Excel" do `index.html` foram corrigidos neste incremento: o "Limite documentado" do Exemplo 1 (afirmava que o simulador "não processa fórmulas aninhadas complexas" — falso, o parser recursivo as aceita) e o bloco do Exemplo 3 (bullets falsos sobre entradas rejeitadas por tipo e sobre "mensagem de rejeição (exemplo real)" cuja entrada citada `SOMASE(10; "texto"; 20)` na verdade devolve `#VAL!` com detalhe "SOMASE exige um intervalo"). As correções usam saídas **executadas em Node** em 2026-10-20 (`SOMASE(10;"texto";20)` → `#VAL!`; `MINHA_TABELA+1` → "ERRO DE ENTRADA ... nomes definidos e tabelas estruturadas estão fora do escopo documentado"; PROCV/PROCH/PROCX com busca real exata/aproximada → 200/8/`#N/A`). O item `q-m1-32` foi reescrito para refletir o mesmo comportamento real; nenhum outro objeto de `questions.js` contém as strings falsas.

CONFORMIDADE COM SEÇÃO 19 (REGRAS ABSOLUTAS):
- Escopo não reduzido: todos os módulos listados; nenhum apresentado como completo sem evidência.
- Nenhum pseudocódigo onde código executável é exigido; simuladores devem ser executáveis com dados reais.
- Arquivos essenciais existentes: `index.html`, `styles.css`, `curriculum.js`, `curriculum_m2.js`, `curriculum_m3.js`, `flashcards_m1.js`, `flashcards_m2.js`, `flashcards_m3.js`, `questions.js`, `app.js`, `navigation.js`, `simulators.js`, `simulator_network.js`, `flashcards.js`, `quiz-engine.js`, `charts.js` (todos carregados) — mais `curriculum_m4.js`, `curriculum_m5.js`, `curriculum_m7.js`, `curriculum_m8.js` e `flashcards_m4.js` (existem no disco, fora do `index.html`) e `.github/workflows/deploy-pages.yml`. Ainda **não criados**: busca, progresso (UI), acessibilidade, `references.js`, `manifest.webmanifest`, `service-worker.js` — e os simuladores de segurança, IA e dados, além da UI dos simuladores de Excel e de redes.
- Projeto NÃO concluído: M1–M3 parciais; M4, M5 (5.1–5.2), M7 e M8 com currículo no disco mas **não carregados**; M6 e M5.3/5.4 sem currículo; 236 flashcards faltando no disco (290 para o app carregar) e **238 questões** ainda faltando.
