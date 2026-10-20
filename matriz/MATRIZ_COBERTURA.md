# MATRIZ DE COBERTURA — Etapa 2 (Seção 4 / 5 do prompt mestre)

Formato: Subtópico | Conteúdo didático | 3+ exemplos | Flashcards (≥50/módulo) | Questões (≥40/módulo) | Gráfico/Simulador | Referência verificada | Estado

Revisão/sincronização com o código: 2026-10-20 (leitura de `assets/data/*.js`, `assets/js/*.js` e `index.html`). O código é a fonte de verdade.

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

## MÓDULO 4 (somente referência verificada)
- 4.1 Fundamentos de segurança: **referência LGPD verificada** (Lei 13.709/2018 — URL planalto.gov.br, artigos 1º–5º, 17, 18, 46; data 2026-10-20, `referencias/referencias-verificadas.md`). Conteúdo de currículo, exemplos, flashcards, questões e simulador de phishing: **pendentes**.
- 4.2 Malwares; 4.3 Ameaças/ataques; 4.4 Legislação (Marco Civil, LAI, Governo Digital): PENDENTE.
Estado: 0% de currículo; 1 referência verificada.

---

## MÓDULOS 5–8: 0% — nenhum arquivo de currículo, simulador, gráfico ou questão (M5 IA, M6 Ética, M7 Dados, M8 Visualização).

---

TOTAIS GLOBAIS (2026-10-20): flashcards **110 / 400** (m1=10, m2=50, m3=50) **com UI de repetição espaçada conectada** (`flashcards.js`, SM-2 simplificado); questões **82 / 320** (M1=32, M2=26, M3=24; autorais, com banco `assets/data/questions.js` + motor `assets/js/quiz-engine.js`); gráficos **0 / 5**; simuladores: Excel (escopo declarado, busca real em PROCV/PROCH/PROCX) + redes (didático) — os demais exigidos (segurança, IA, dados, visualização) inexistentes.

LIMITAÇÕES DOCUMENTADAS (não inventar):
- Nenhum vídeo YouTube validado com ID verificado (Seção 12.2 exige verificação real de ID + correspondência temática; não inserir URLs não validadas).
- Referências: apenas LGPD verificada com URL + data. Microsoft Learn (M365), RFCs/IETF (redes), CERT.br (segurança) e demais fontes do Planalto (Marco Civil, LAI, Governo Digital) seguem **pendentes** de verificação.
- Simulador de rede: implementado (`simulator_network.js`) com escopo declarado — ping e traceroute simulados (latências fictícias), CIDR com cálculo real; **não executado em navegador neste turno**; não afirmar teste de uso sem evidência.
- Simulador Excel: reescrito em 2026-10-20 (`simulators.js`) — 23 funções com cálculo/busca reais, PROCV/PROCH/PROCX com busca exata e aproximada, parser próprio sem `eval`, planilha em memória com refs relativas/absolutas/mistas e recálculo, rejeição de entradas inválidas com mensagem útil, códigos de erro #N/A/#REF!/#VAL!/#DIV/0!/#NUM!; limitações declaradas no cabeçalho do arquivo (sem tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas; aproximada não valida ordenação); verificado com `node --check` + smoke test em Node/vm (**111 asserts**); **não testado em navegador real**.
- Nenhum gráfico (histograma, linha, barras, dispersão, box plot) implementado; não desenhar formas decorativas sem dados.
- Flashcards: 110 implementados (piso: 400). Não confundir número cadastrado com domínio real; **repetição espaçada CONECTADA** neste incremento (`flashcards.js`: SM-2 simplificado documentado no cabeçalho do arquivo, estados Acertou/Difícil/Errou, filtros por módulo/nível, modos todos/vencidos/errados, contagens dominados/pendentes/vencidos/em revisão, exportação/importação de backup JSON; verificado com smoke test em Node/vm — 59 asserts; **não testado em navegador real**).
- Questões: **82 implementadas** (piso: 320 — faltam 238) em `assets/data/questions.js`, com motor de simulados `assets/js/quiz-engine.js` (Seção 10.2) e seção própria no `index.html`. **Nenhuma atribuída a banca real**: o campo `estilo` (CESPE/FGV/FCC/VUNESP) indica apenas o formato de cobrança; `origem` é sempre `autoral`. Verificado com smoke test em Node/vm — **92 asserts**; **não testado em navegador real**.
- `search.js`, `progress.js`, `charts.js`, `storage.js`, `accessibility.js` e `manifest.webmanifest` não existem e não são mais referenciados no `index.html` — não citar busca, gráficos, PWA ou acessibilidade como operacional. (`flashcards.js` **passou a existir** e está carregado: UI de flashcards + repetição espaçada; `quiz-engine.js` **passou a existir** e está carregado: banco de questões + simulados.)

CONFORMIDADE COM SEÇÃO 19 (REGRAS ABSOLUTAS):
- Escopo não reduzido: todos os módulos listados; nenhum apresentado como completo sem evidência.
- Nenhum pseudocódigo onde código executável é exigido; simuladores devem ser executáveis com dados reais.
- Arquivos essenciais existentes: `index.html`, `styles.css`, `curriculum.js`, `curriculum_m2.js`, `curriculum_m3.js`, `flashcards_m1.js`, `flashcards_m2.js`, `flashcards_m3.js`, `questions.js`, `app.js`, `navigation.js`, `simulators.js`, `simulator_network.js`, `flashcards.js`, `quiz-engine.js`. Ainda **não criados**: busca, progresso (UI), gráficos, acessibilidade, `manifest.webmanifest`, `service-worker.js`.
- Projeto NÃO concluído: M1–M3 parciais, M4–M8 sem currículo, 290 flashcards e **238 questões** ainda faltando.
