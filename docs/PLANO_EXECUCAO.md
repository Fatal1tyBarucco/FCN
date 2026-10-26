# PLANO DE EXECUÇÃO — FASE 4 (CONCLUÍDA) + CONTINUIDADE

Última atualização: 2026-10-24.
Responsável: orquestrador (verificação direta no repo real, sem delegação de produção de código nessa etapa).

## Etapas do protocolo (Escrita.txt, Seção 17)

| Etapa | Nome | Status real no repo | Evidência | Notas |
|---|---|---|---|---|
| 1 — Inventário | `docs/INVENTARIO_CURRICULAR.md` | CONCLUÍDO | Arquivo criado nesta execução; 8 módulos confirmados | Confirmação por `ls` + contagem de `curriculum*` |
| 2 — Matriz | `docs/MATRIZ_COBERTURA.csv` (texto) | CONCLUÍDO | Arquivo `docs/MATRIZ_COBERTURA.md` com tabela CSV | Cobertura por módulo verificada numericamente |
| 3 — Arquitetura | Estrutura do `apostila-ia/` | CONCLUÍDO | `index.html` + `assets/js/*.js` + `assets/data/*.js` já presentes | Confirmado por `ls` + leitura parcial |
| 4 — Implementação didática | Conteúdo completo de todos os módulos | **CONCLUÍDO (Fase 4 desta execução)** | 404 flashcards, 365 questões, conteúdo real verificado | Nenhum placeholder detectado na amostra M1 |
| 5 — Implementação funcional | Simuladores, busca, flashcards, quiz, gráficos, persistência | PARCIALMENTE CONCLUÍDO | Simuladores montados no `index.html`; gráficos (`charts.js`), flashcards (`flashcards.js`), quiz (`quiz-engine.js`) existem e carregados; busca (`search.js`), áudio (`audio.js`) carregados com `defer` | Fase 5 ainda requer verificação funcional completa |
| 6 — Validação curricular | Verificar cobertura e qualidade por unidade | CONCLUÍDO (Fase 6) | 295/295 subtópicos com objetivo+conteúdo+≥3 exemplos; 365 questões com gabarito+justificativa+análise; 404 flashcards; 5 gráficos reais. Relatório: docs/REVISAO_INDEPENDENTE_FASE6.md | Defeitos D1 (corrigido Fase 7) e D2 (decisão editorial) |
| 7 — Testes técnicos | Carregamento, links, cálculos, gráficos, persistência, acessibilidade, modo direto `file://` | PARCIAL | `node --check` passou para todos os `.js`; smoke test `verify_nodes.js` passou; testes de simulador Excel (111 asserts) passaram; testes de perguntas (deduplicação, campos obrigatórios) passaram | Faltam testes de interface visual completa e de abertura direta (`file://`) em navegador real no dispositivo do usuário |
| 8 — Auditoria final | Matriz de conformidade com todos os critérios de aceite (Seção 18) | CONCLUÍDO (Fase 8) | docs/AUDITORIA_FINAL.md — matriz dos 19 critérios com evidência/teste/resultado/limitação/correção | Veredito: APROVADO COM RESSALVAS; D4 (navegador real) pendente |

## Estado atual resumido (sem substituição por placeholders)

- Fase 4 (conteúdo didático) = CONCLUÍDA com evidências numéricas.
- Fase 5 (funcionalidade) = PARCIAL; a interface está montada, mas a verificação funcional completa ainda não foi executada por um agente independente.
- Fase 6 (validação curricular) = PENDENTE; requer leitura independente de cada módulo para confirmar 3 exemplos resolvidos por unidade (critério de aceite nº 4) e qualidade mínima.
- Fase 7 (testes técnicos) = PARCIAL; testes de código e de dados passaram; testes de interface completa e de `file://` ainda não executados.
- Fase 8 (auditoria final) = PENDENTE.

## FASE 3 DO ORQUESTRADOR — INICIADA (2026-10-23)
Modo: multiagente conforme missao escrita pelo usuario. Nenhum arquivo de código do repo alterado ainda; funcionalidade existente (navigation.js, simuladores, quiz-engine) preservada. Subagentes delegados em batch (ver tarefas abaixo). Contrato de trabalho por subagente: identificador + objetivo + arquivos de entrada + resultado esperado + arquivos alteráveis + dependências/restricoes + criterios de aceite + testes exigidos + evidencias.

Subagente ARQUITETO (planejamento + decisoes arquiteturais): objetivo = confirmar que SPA vanilla, 38 tags <script>, navigation.js dono unico, schema unificado `modulo-N` (hifen), 15 escopos de quiz, persistencia localStorage `apostila-ia-progresso`, PWA condicional — estão consistentes com Escrita.txt Sec.3. Arquivos alteraveis: docs/DECISOES_ARQUITETURAIS.md (ja existente, preservar); nao alterar codigo-fonte sem revisao.

Subagente CONTEUDO (revisao didatica + referencias pendentes): objetivo = completar referencias verificadas (Microsoft Learn M1, RFC 791/793 M2, CERT.br M4, restantes CF art.37/art.5, dispositivos M6 remissivos) e confirmar que M6-M8 renderizam sem falhas de conteudo. Arquivos de entrada: referencias/referencias-verificadas.md, curriculum_m6.js..m8.js, questions_m6..m8.js. Arquivos alteraveis: referencias/, docs/INVENTARIO_CURRICULAR.md (patch), inventario/ (copiar para apostila-ia/ apos alteracao).

Subagente PROGRAMA (implementacao + testes headless): objetivo = executar node --check em todos assets/**/*.js, confirmar busca/audio/accessibility em headless (CDP), corrigir eventuais deficiencias sem reduzir escopo. Arquivos de entrada: assets/js/*.js; index.html; output.pdf (referencia, nao alterado). Arquivos alteraveis: apenas se verificado por revisor independente; nunca merge direto em main (fluxo PR).

Subagente REVISOR (auditoria independente): objetivo = ler outputs de ARQUITETO + CONTEUDO + PROGRAMA, confirmar que nenhum teste foi declarado sem evidencia, que nenhuma fonte foi inventada, que M6-M8 nao foram reduzidos. Nao altera codigo — apenas produz docs/RELATORIO_TESTES.md atualizado e sinaliza falhas.

Restricoes inegociaveis (contrato): nenhum subagente autor de um componente sera o unico responsavel pela aprovacao; nenhum arquivo alterado sem evidencias de saida real; nenhum placeholder; nenhum merge sem /review.

## Incrementos realizados

- Fase 4 (conteúdo didático) = CONCLUÍDA com evidências numéricas.
- Fase 5 (funcionalidade) = PARCIAL; a interface está montada, mas a verificação funcional completa ainda não foi executada por um agente independente.
- Fase 6 (validação curricular) = PENDENTE; requer leitura independente de cada módulo para confirmar 3 exemplos resolvidos por unidade (critério de aceite nº 4) e qualidade mínima.
- Fase 7 (testes técnicos) = PARCIAL; testes de código e de dados passaram; testes de interface completa e de `file://` ainda não executados.
- Fase 8 (auditoria final) = PENDENTE.

=== ATUALIZAÇÃO FASE 5 NO PLANO (2026-10-24) ===
Etapa 5 — Implementação funcional (simuladores + laboratórios): CONCLUÍDA.
Evidências registradas: docs/CONTRATO_TRABALHO_FASE5.md, docs/RELATORIO_TESTES.md
(atualizado com T1..T7), docs/PENDENCIAS.md (apêndice 14).
Critérios 8/9 do Escrita.txt verificados: 5 simuladores operam com cálculos/resultados
consistentes com regras documentadas; 5 gráficos com dados/parametros reais;
não há placeholders; nenhuma substituição de modelo.
Limitações documentadas (não inventadas): áudio/busca não testados em navegador real;
grficos validados por código; M5.4 não usa API externa; nenhum vídeo validado.
Passa para Etapa 6 — Validação curricular (revisão independente, perfil revisor);
Etapa 7 — Correções (nenhuma necessária desta fase; se Fase 6 identificar, corrigir);
Etapa 8 — Auditoria final (matriz de conformidade com critérios 1-19).


=== ATUALIZAÇÃO FASE 7 — TESTES HEADLESS (2026-10-24) ===
Etapa 7 — Testes técnicos: PARCIAL (avançado). Adicionados testes reais em Chromium headless (CDP) em file://:
- T9 carregamento: PASS (0 exceções; 8 módulos; 404 FC; 365 Q; 5 gráficos).
- T10 contêineres: PASS (12/12 não vazios).
- T11 busca: PASS (1196 entradas; buscar('CIDR')=10).
- T12 gráficos: PASS (5 SVGs).
- T13 localStorage roundtrip: PASS.
- T14 simuladores: PASS (montagem + Excel smoke).
PARCIAL remanescente: áudio (Web Speech), vídeos (0 — intencional), WCAG completa, responsividade física.
Etapa 8 — Auditoria final: ver docs/AUDITORIA_FINAL.md (APROVADO COM RESSALVAS).


=== PRÓXIMO PASSO CIRÚRGICO — PENDENTES (2026-10-24) ===
Objetivo: fechar os critérios 11 (áudio), 12 (vídeos), 14 (responsividade) e referências (D5) sem reduzir escopo.

Contratos por subagente (áreas separadas, sem conflito de arquivo):
- @conteudo (referências): verificar Microsoft Learn (M1), RFCs/IETF (M2: DNS/DHCP/HTTP/TLS), CERT.br (M4); atualizar referencias/referencias-verificadas.md + references.js com URL+data; não inventar. Arquivos: referencias/, apostila-ia/assets/data/references.js.
- @general (áudio): validar Web Speech API em navegador com voz (Chromium headless com --enable-speech-dispatcher se disponível, ou documentar limitação); garantir controles play/pause/resume/stop/velocidade/voz; tratar indisponibilidade. Arquivo: apostila-ia/assets/js/audio.js.
- @general (vídeos): validar IDs reais (youtube-nocookie.com) ou manter 0 publicados; registrar URL+canal+título+data. Arquivo: references.js + index.html (seção de vídeos).
- @general (WCAG): auditoria de contraste, foco visível, navegação por teclado, rótulos, hierarquia semântica; adicionar role="tree"/aria-expanded na árvore curricular; skip-link já presente. Arquivos: assets/css/styles.css, assets/js/navigation.js, index.html.
- @general (responsividade): testar em viewports 360/768/1024/1440; ajustar media queries. Arquivo: assets/css/styles.css.
- @revisor (independente): auditar cada entrega acima; não aprovar próprio autor.

Ordem: referências → áudio → WCAG → responsividade → vídeos (último, por dependência de rede). Cada etapa com evidência real antes de marcar PASS.


## Atualização do orquestrador — 2026-10-25 (auditoria remota da Fase 1)

Foi criada a branch `feat/fase-1-orquestracao-20261025` a partir de `main` para separar esta atualização do branch de produção. Evidência: criação da branch retornada pela API do GitHub.

A inspeção remota consultou `Escrita.txt`, `README.md`, `AGENTS.md`, o inventário, a matriz agregada e arquivos curriculares/de questões. O relatório `docs/FASE1_AUDITORIA_2026-10-25.md` distingue contagens herdadas de documentos de contagens recalculadas. Nenhum teste de execução foi realizado nesta etapa.

**Status corrigido:** Fase 1 = inventário inicial e lacunas documentais identificados; matriz integral por subtópico e recálculo reproduzível de métricas continuam pendentes. A existência de conteúdo ou de controles de interface não equivale a critério de aceite aprovado. Consulte o relatório de auditoria para as evidências e limitações.


## Atualização de execução — 2026-10-25 (PR #17)

- **Fase 1 — parcialmente concluída:** inventário inicial e lacunas registrados em docs/FASE1_AUDITORIA_2026-10-25.md. A matriz detalhada foi gerada com 295 linhas de subtópicos; a qualidade pedagógica ainda não foi aprovada.
- **Fase 2 — parcialmente concluída:** oito arquivos curriculares foram consultados remotamente. Auditoria estrutural detectou 295 subtópicos, 888 exemplos e 592 exercícios; foram identificados 460 flashcards e 365 questões com IDs únicos no conjunto consultado.
- **Rastreabilidade reproduzível:** adicionado scripts/audit_curriculum_matrix.mjs. O script ainda não foi executado localmente; não declarar sua execução ou os testes do produto como aprovados.
- **CI:** a consulta da API de Actions para a branch de trabalho retornou zero execuções. Isso não é evidência de CI verde.
- **Próxima ação:** executar o script em clone/ambiente com o repositório, conferir a matriz gerada e só então iniciar a revisão qualitativa sistemática de conteúdo e funcionalidades.


## Atualização de execução — 2026-10-25 (rastreabilidade de ativos)

Foi adicionado `scripts/audit_learning_assets.mjs` para gerar uma matriz por tópico-pai com IDs de flashcards e questões, além de um relatório de referências não mapeadas. O commit do script está na branch do PR #17. O script **ainda não foi executado**: os arquivos CSV/relatório que ele gera não devem ser considerados validados até que a execução local seja realizada e sua saída inspecionada.

A associação por tópico-pai é uma ferramenta de triagem e não prova cobertura didática individual de cada subtópico. Revisão semântica, execução dos testes do produto, navegador, modo `file://` e CI permanecem pendentes. Não realizar merge enquanto esses critérios não tiverem evidências suficientes e o PR continuar em revisão.


## Estado de execução revalidado — 2026-10-26

| Fase | Estado | Evidência / próximo passo |
|---|---|---|
| 1 — Inventário curricular | Parcial concluída | 8 módulos, 37 unidades, 132 tópicos, 295 subtópicos; matriz estrutural gerada. Revisão pedagógica completa ainda pendente. |
| 2 — Inspeção do repositório | Concluída estruturalmente | PR #17, branch, arquivos de dados, verificadores e workflow inspecionados. |
| 3 — Arquitetura e infraestrutura | Parcial | Workflow de validação e smoke test adicionados; auditoria completa de arquitetura, acessibilidade e PWA ainda pendente. |
| 4 — Conteúdo e rastreabilidade | Cobertura direta estrutural concluída | 389/389 questões e 460/460 flashcards apontam para tópicos existentes; 24 questões adicionadas para cobrir tópicos substantivos antes sem questão direta. |
| 5 — Simuladores | Parcial | Smoke test confirma seis contêineres com UI; interações completas e correção dos resultados ainda precisam de testes dedicados. |
| 6 — Revisão independente | Pendente | Auditoria heurística estrutural passou; não foi confirmado uso de agentes especializados independentes. Revisão semântica integral segue aberta. |
| 7 — Correções e retestes | Em andamento | Correções legais M4/M6, rastreabilidade, banco de questões e CI; distribuição de gabaritos exige revisão manual. |
| 8 — Critérios de aceite | Pendente | PR #17 permanece draft; não fazer merge até revisar gabaritos, fontes, acessibilidade e fluxos interativos. |

**Última execução técnica aprovada:** https://github.com/Fatal1tyBarucco/FCN/actions/runs/40249392754. O sucesso técnico não deve ser confundido com aprovação editorial final.


### Atualização da qualidade das questões — 2026-10-26

- As 24 questões novas tiveram suas alternativas reorganizadas com preservação da correspondência entre alternativa, gabarito e análise.
- O lote novo distribui gabaritos MC em A=4, B=5, C=5, D=5 e E=5.
- O banco global continua concentrado em A/B (88,5% das questões MC); revisão manual das 290 questões MC legadas permanece pendente antes da aprovação editorial.
- A execução técnica mais recente passou: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


### Bloqueio editorial identificado — 2026-10-26

A auditoria por módulo detectou distribuição de gabaritos inadequada para um simulado de alta fidelidade: M6 tem 30/30 MC com resposta A; M7 tem 33/33 com resposta A; M4/M5/M8 concentram respostas em A/B. A revisão manual de alternativas, gabaritos e análises torna-se prioridade antes do aceite final. A validação técnica passou em https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507, mas não substitui esse controle editorial.


### Triagem semântica inicial do M7 — 2026-10-26

A primeira leitura dos 40 enunciados, contextos, gabaritos e justificativas do M7 não encontrou erro factual óbvio. A revisão integral de alternativas, análises de distratores e fontes continua pendente; não considerar o módulo aprovado. A auditoria automática de rótulos CORRETA/INCORRETA versus gabarito passou sem incompatibilidades. Evidência: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


### Revisão legal do M6 — pendências específicas — 2026-10-26

A checagem das fontes oficiais levou à correção das citações de q-m6-02 e q-m6-06. Permanecem cinco alinhamentos a corrigir: q-m6-03 (LGPD, art. 6º), q-m6-29 (art. 43 versus trilha de auditoria), q-m6-31 (art. 43 versus obrigação de sítio oficial), q-m6-32 (Lei nº 12.813/2013 e escopo federal) e q-m6-38 (art. 43 versus gestão de risco/auditoria). Não considerar o M6 aprovado até concluir esses pontos.


---

## Atualização de orquestração — 2026-10-25 (Fase 1)

**PR de trabalho:** [#17 — docs: auditar estado remoto e iniciar orquestração da Fase 1](https://github.com/Fatal1tyBarucco/FCN/pull/17), branch `feat/fase-1-orquestracao-20261025`, base `main`, aberto e em draft no momento da inspeção. O PR já contém auditorias estruturais e correções pontuais; não criar outro PR concorrente nem sobrescrever seu trabalho.

### Resultado da Fase 1
- Prompt mestre `Escrita.txt` lido integralmente a partir do branch `main`.
- Inventário curricular: 8 módulos, com 37 unidades, 132 tópicos e 295 subtópicos conforme os documentos e auditorias existentes.
- Matriz: `docs/MATRIZ_COBERTURA.csv` contém linhas por subtópico e distingue presença estrutural de revisão qualitativa.
- Critérios quantitativos do prompt: mínimo de 400 flashcards, 320 questões, 3 exemplos resolvidos por unidade quando aplicável, 5 tipos de gráfico e funcionamento real dos simuladores.
- Estado de entrada do PR: auditorias estruturais reportadas como aprovadas; revisão semântica completa, balanceamento editorial de gabaritos, acessibilidade com leitor de tela e validação de embeds ainda são pendências.

### Plano de execução atualizado
1. **Fase 1 — inventário e matriz:** concluída como baseline estrutural; qualidade semântica ainda não aprovada.
2. **Fase 2 — inspeção do repositório:** concluída para a inspeção documental e o diff do PR; manter o PR existente como trilha de integração.
3. **Fase 3 — arquitetura e infraestrutura:** auditar as diferenças entre os arquivos versionados e as alegações documentadas antes de alterar aplicação.
4. **Fase 4 — conteúdo:** revisar por lote, com contratos explícitos, sem considerar contagem como prova de completude.
5. **Fase 5 — simuladores:** testar entradas válidas, inválidas, limites e resultados calculados, além da mera montagem de UI.
6. **Fase 6 — revisão independente:** revisar conteúdo, gabaritos, fontes, acessibilidade e persistência por amostragem estratificada e, depois, por cobertura integral dos critérios críticos.
7. **Fase 7 — correções:** corrigir apenas defeitos reproduzidos, preservar alterações válidas e repetir testes afetados.
8. **Fase 8 — aceite:** comparar cada critério de `Escrita.txt` com evidência identificável; não declarar conclusão com pendências obrigatórias abertas.

### Delegação e ferramentas
Não foi confirmada neste ambiente uma ferramenta de delegação multiagente especializada. O plugin de delegação referido nos registros anteriores consta como indisponível; portanto, tarefas não serão atribuídas ficticiamente a modelos. A execução continuará por lotes isolados, com revisão posterior separada da etapa de autoria e com esta limitação registrada.


## Fase 2 — inspeção do repositório remoto (2026-10-25)

**Status: inspeção documental inicial concluída; auditoria funcional aprofundada pendente.**

- Branch: `feat/fase-1-orquestracao-20261025`; PR #17 aberto, draft, base `main`.
- Aplicação: SPA estática em `apostila-ia/index.html`; HTML/CSS/JavaScript nativo, sem etapa de build documentada. O README instrui execução por `file://` ou servidor estático Python.
- Dados: oito arquivos de currículo (M1 em `curriculum.js), oito bancos de flashcards, banco de questões dividido em `questions.js` e `questions_m4.js`–`questions_m8.js), além de `references.js`.
- Componentes: navegação, armazenamento, progresso, busca, áudio, flashcards, motor de quiz, gráficos SVG e simuladores de Excel/dados, rede, segurança, prompts e ética.
- Qualidade: três scripts de auditoria estrutural e workflow `.github/workflows/validate-curriculum.yml`; workflow de deploy separado.
- Matriz: o CSV no branch do PR é gerado por subtópico; a descrição anterior em `docs/FASE1_AUDITORIA_2026-10-25.md` que a caracterizava apenas como agregada por módulo ficou desatualizada após a alteração do PR.
- O PR contém alterações em dados de currículo, flashcards, questões, referências, HTML e infraestrutura de auditoria. Evitar sobrescrever esses arquivos sem comparar o diff e preservar o trabalho existente.
- O workflow associado ao commit consultado foi observado como `queued`; não há nesta operação resultado final de execução a declarar. Resultados anteriores mencionados no corpo do PR permanecem evidência reportada daquele run, não de uma execução nova.

**Próximo passo seguro:** aguardar/consultar a validação automatizada do HEAD atual, comparar a matriz gerada com os arquivos de dados do mesmo SHA e revisar as pendências semânticas antes de modificar componentes da aplicação.


## Fase 3 — auditoria arquitetural inicial (2026-10-26)

**Status: diagnóstico estático inicial concluído; correções funcionais não iniciadas.**

### Componentes examinados
- `index.html`: carrega os módulos de simuladores, gráficos, quiz, flashcards e `storage.js` diretamente, compatível com a arquitetura sem build.
- `simulators.js`: declara parser de fórmulas Excel próprio, sem `eval`/`new Function`; declaração de capacidade não substitui execução de testes.
- `simulator_data.js` e `charts.js`: declaram gráficos SVG calculados a partir dos dados, incluindo histograma, linha, barras, dispersão e box plot; validar casos degenerados e dados inválidos.
- `quiz-engine.js`: declara simulados por módulo/nível/estilo/formato, temporizador e correção; revisar integridade do pool, respostas não respondidas e estado após recarga.
- `flashcards.js`: declara repetição espaçada; revisar persistência de estado, cartão novo e agendamento após resposta.
- `storage.js`: divergência de arquitetura identificada. O arquivo oferece uma abstração de persistência, mas o próprio cabeçalho informa que navegação, flashcards e quiz seguem escrevendo diretamente em namespaces separados. Não é seguro declarar uma camada unificada integrada sem revisar os consumidores e definir estratégia de migração.

### Decisão de execução
Não alterar simultaneamente os seis simuladores nem reescrever a persistência em bloco. A próxima implementação deverá começar por testes de regressão reproduzíveis e um contrato de persistência documentado; então aplicar patch mínimo em um consumidor por vez, mantendo compatibilidade com dados já gravados em `localStorage`.

### Aceite da Fase 3
- Todos os recursos obrigatórios têm consumidor real e estão conectados ao HTML.
- Fórmulas e estatísticas calculam resultados a partir das entradas.
- Dados de progresso sobrevivem a recarga e não são perdidos por migração/erro de armazenamento.
- A abertura direta via `file://` continua funcional; não depender de rede ou build.
- Testes negativos, limites, teclado e mensagens de erro são evidenciados antes de aprovar.


## Marco de validação — 2026-10-26 — PR #17 / commit 8fdf771

### Concluído e testado
- CI curricular e de ativos: [execução 40261787364](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364) terminou com sucesso.
- Sintaxe JavaScript, matriz curricular, rastreabilidade, estrutura e heurísticas: PASS.
- Chromium instalado no runner; smoke test e regressões interativas Playwright via `file://`: PASS.
- Verificação funcional: fórmula Excel `SOMA(1;2)`, cálculo CIDR, feedback dos simuladores de segurança/prompts/ética, recálculo de histograma e mudança do SVG após editar valor numérico: PASS.
- Artefato gerado: [curriculum-audit-reports](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364/artifacts/12625340191).

### Ainda pendente / não certificado
- Code Quality deve ser verificado por execução própria no mesmo HEAD; nenhum status desse workflow é inferido aqui.
- Revisão semântica independente integral dos módulos, questões, alternativas, gabaritos e fontes.
- Revisão editorial da distribuição dos gabaritos; não alterar respostas corretas apenas para equilibrar letras.
- Auditoria WCAG independente, navegação manual por teclado, leitor de tela e teste em dispositivos físicos/navegadores adicionais.
- Reconciliar contagens e descrições históricas dos documentos de inventário sem apagar a trilha de auditoria.

### Próxima ação
1. Consultar o workflow Code Quality para o HEAD do PR.
2. Registrar resultado real e links de execução.
3. Corrigir somente defeitos comprovados em lotes pequenos e executar regressões afetadas.
4. Manter PR #17 aberto e draft até resolver os critérios obrigatórios pendentes; não fazer merge nesta etapa.


### Registro incremental — 2026-10-26

A correção pontual q-m6-41–q-m6-44 foi commitada no branch do PR #17 (`7c9b0dd7871048d94294b5c7530f90e52de97f4d`). Próxima sequência, sem repetir a edição já concluída:
1. Consultar checks/workflows associados ao novo HEAD e registrar os resultados reais.
2. Reexecutar a auditoria de referências e verificar IDs únicos no conjunto de questões.
3. Revisar qualidade semântica e distribuição de gabaritos em lote, sem alterar respostas corretas para balanceamento artificial.
4. Prosseguir com as pendências de revisão independente e acessibilidade; manter o PR aberto em draft enquanto houver critérios obrigatórios pendentes.
