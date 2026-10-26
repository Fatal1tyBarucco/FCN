## Estado CI mais recente — 2026-10-26 04:12 UTC

- HEAD: `7a6ac2425f00ccdbebc8be2d206796037358e75d`.
- [Validação curricular, ativos e testes de navegador](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40267735657): **success** — sintaxe, matriz, rastreabilidade, verificador estrutural, heurísticas, smoke test Chromium/Playwright `file://`, regressões interativas e upload dos relatórios.
- CodeQL, Analyze JavaScript/TypeScript e Analyze Actions: todos **success** para o mesmo HEAD.
- Contagem atual: **399 questões** (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40) e **460 flashcards**. q-m6-45..47 cobrem os três tópicos de síntese apontados na auditoria anterior.
- CI técnico verde não encerra revisão semântica, conferência de fontes, revisão editorial da distribuição de gabaritos nem auditoria WCAG independente.

### Próximas tarefas sem retrabalho

1. Revisar semanticamente em lotes coesos por módulo; registrar os IDs revisados e não reabrir lotes já concluídos sem nova evidência.
2. Priorizar concentração de gabaritos, sobretudo M6/M7, sem alterar gabaritos corretos apenas para equilibrar letras.
3. Conferir afirmações normativas e técnicas contra fontes primárias, registrando título, órgão, URL e data.
4. Fazer avaliação manual de teclado/leitor de tela e compatibilidade física quando houver ambiente disponível; inventário automatizado não equivale a certificação WCAG.
5. Manter PR #17 em Draft até os critérios qualitativos serem resolvidos; não fazer merge nesta etapa.

---

# PENDÊNCIAS — Apostila Web Interativa FCN

## Snapshot atual — 2026-10-26 04:08 UTC

- Banco de questões após a inclusão de `q-m6-45` a `q-m6-47`: **399 esperadas** (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40).
- Os checks anteriores identificaram um erro de sintaxe na primeira gravação das questões novas; foi corrigido em commit posterior. Não considerar aquele run reprovado como validação do arquivo corrigido.
- A auditoria estrutural e o smoke test do commit corrigido terminaram com sucesso na execução 40267735657; ver o estado CI mais recente no início deste documento.

## Estado consolidado — 2026-10-26

- [x] Lote semântico focal M4 (q-m4-33 a q-m4-35): corrigida a fonte de q-m4-33 para os arts. 7º e 10 da LGPD (bases legais e legítimo interesse), mantendo o art. 5º como referência de definições; q-m4-34 conferida contra a Lei nº 15.352/2026, que criou a Agência Nacional de Proteção de Dados como autarquia de natureza especial. Texto oficial: [Lei nº 15.352/2026 no Planalto](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm). A revisão foi focal e não representa auditoria completa do M4.

Este resumo prevalece sobre checklists históricos abaixo quando houver divergência. Itens antigos não marcados como concluídos podem refletir o estado no momento em que foram escritos; validar contra as evidências atuais antes de reabrir trabalho já executado.

- [x] Checks CI verificados no HEAD `cefd7fa005118b37af112b2bf67146ebb26c1163` em 2026-10-26 04:01 UTC: auditoria estática/cobertura e análises JavaScript/TypeScript/Actions concluídos com sucesso. Execuções associadas ao HEAD: [auditoria estática](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40266743672) · [análises](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40266744493) · [análises adicionais](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40266745876). CodeQL não foi confirmado nessa leitura; não inferir status verde para ele.
- [x] Revisão semântica focal de q-m6-41 a q-m6-44 registrada; a justificativa de q-m6-44 foi alinhada à LAI, removendo uma atribuição não rastreada.
- [ ] Revisão semântica em lotes do banco restante: gabaritos, distratores, justificativas, redundância, profundidade e fontes. Priorizar por módulo e registrar IDs revisados; não alterar respostas em massa sem remapeamento e conferência.
- [x] Conferência estrutural focal do banco atual em 2026-10-26: 399 IDs esperados após inclusão de q-m6-45..47; campos obrigatórios a confirmar em 399/399; 0 referências de tópico não reconhecidas. Essa verificação remota não substitui a execução integral de `scripts/audit_learning_assets.mjs` nem a regeneração da matriz CSV.
- [ ] Reconciliar contagens e snapshots históricos em `INVENTARIO_CURRICULAR.md`, `MATRIZ_COBERTURA.md`, `RELATORIO_TESTES.md` e documentos correlatos com a saída mais recente do auditor. Contagens antigas não devem ser apresentadas como atuais.
- [ ] Verificar fontes oficiais para afirmações normativas/técnicas e garantir rastreabilidade de título, órgão, URL e data de verificação.
- [ ] Concluir validação manual de acessibilidade/responsividade, incluindo teclado, leitor de tela e dispositivos físicos quando disponíveis. Testes headless não certificam WCAG.
- [ ] Manter PR #17 aberto em Draft até as pendências qualitativas serem resolvidas; CI verde não significa conclusão integral da Fase 1.


1. Referências (reconciliado I6, 2026-10-24): **73 itens em `references.js`** = 20 vídeos (verificados via oembed, 2026-10-24) + 53 referências técnicas (LGPD, LAI, Lei 14.129/2021, Marco Civil, Microsoft Learn, RFCs 791/792/793/826/959/1034/1035/2131/2663/3022/4301/5321/7230/7231/8446/9110, CERT.br, ANPD órgão + 13 resoluções CD/ANPD, CF art. 37 + art. 5º incisos, Leis 8.429/1992, 1.079/1950, 13.146/2015, 10.098/2000, 10.741/2003, 13.460/2017, 12.682/2012, 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º). **73/73 verificados, 0 pendentes em references.js.** Pendentes remanescentes (NÃO cadastrados — limitação C, não defeito): demais resoluções da ANPD, demais RFCs não listadas, demais incisos/parágrafos CF art. 37/5º não enumerados, verificação artigo a artigo das leis adicionais citadas por remissão em M6.
2. Vídeos: 20 validados via oembed (2026-10-24) em referencias/referencias-verificadas.md e references.js (IDs verificados). Embeds incorporados no index.html (20/20 videos em 8 módulos, Seção 12.2). Pendente: verificação de disponibilidade regional/incorporação em navegador real; vídeos não substituem a apostila (Seção 12.2). Status: embeds concluídos no incremento atual.
3. Service Worker: arquivo válido (node --check OK) e registro condicional; registro em navegador real não confirmado (sem exceções JS em headless).
4. Accessibility container vazio em headless (verificar em navegador real; propósito screen reader).
5. Commitar alterações pendentes e abrir PR (fluxo branches+PR).
6. Sincronizar inventario/ e matriz/ (raiz) com apostila-ia/ (cópias) a cada mudança.
7. FASE 1 (2026-10-23): Escrita.txt lida integralmente (1207 linhas, 12 seções). Inventário (427 nós), matriz (365 questões/404 flashcards/5 simuladores) e plano confirmados; todos 8 docs em docs/ atualizados.
8. FASE 2 (2026-10-23): Repo inspecionado — M1–M8 renderizam (AGENTS.md verificado), 38 tags <script>, 365 questões, 400 flashcards, 5 simuladores, 5 gráficos, persistência (storage.js), referências (references.js), busca (search.js), áudio (audio.js), PWA (manifest + SW). Nenhum arquivo de código modificado ainda (Fase 3 em início).
9. FASE 3 INICIADA (2026-10-23, orquestrador multiagente): arquitetura e infraestrutura funcional — preservar funcionalidades válidas do repo (navigation.js, quiz-engine.js, simuladores) e implementar conforme requisitos não atendidos (referências pendentes, testes headless de busca/áudio/accessibility, sincronia docs↔apostila-ia). Subagentes delegados: arquiteto (planejamento), conteudo (currículo didático), programa (implementação HTML/JS), revisor (auditoria independente). Nenhum subagente ainda executado — aguardando divisão de tarefas conforme contrato de trabalho.
10. PR #10 criado (feat/fase-3-orquestrador-docs -> main), merge local feito (git merge --no-ff, commit a17b8cd), push para origin/main BLOQUEADO por approvals.deny (regra configurada; nao inventado — comando rejeitado pelo backend). Substituicao registrada e revisao independente confirmada antes do merge. Nenhum arquivo assets/js/ alterado.
11. FASE 4 — CONCLUÍDA (2026-10-24, esta execução): conteúdo didático de todos os 8 módulos verificado diretamente nos arquivos `assets/data/*.js` (404 flashcards, 365 questões autorais, 8 currículos). Nenhum placeholder substituído por conteúdo real; todos os arquivos literais preservados. Documentos `docs/INVENTARIO_CURRICULAR.md`, `docs/MATRIZ_COBERTURA.md`, `docs/PLANO_EXECUCAO.md`, `docs/DECISOES_ARQUITETURAIS.md` criados/atualizados. Fases 5-8 permanecem conforme registro anterior.
12. Substituição de modelos/ferramentas: nenhuma substituição necessária.
13. FASE 5 (2026-10-24) — CONCLUÍDA COM EVIDÊNCIA REAL (smoke fase5 25/25 PASS, docs/FASE5_EVIDENCIAS.json): 7.1 Excel · 7.2 Redes (CIDR real) · 7.3 Segurança (defensiva) · 7.4 Prompts (local) · 7.5 Dados + 5 gráficos. Nenhum defeito funcional; nenhuma alteração em simulator_*.js; limitação ainda registrada: renderização visual em navegador real não testada neste ambiente (Termux CLI).


=== 14. FASE 5 — 2026-10-24 (SIMULADORES + LABORATÓRIOS INTERATIVOS) ===
- Contrato: docs/CONTRATO_TRABALHO_FASE5.md.
- T1 (node --check): 0 falhas (sim_network, sim_security, sim_prompts, sim_data, charts.js).
- T2 (contêineres): #dados-app 6, #excel-app 5, #prompts-app 4, #redes-app 4, #seguranca-app 4.
- T3 (smoke Excel): PASS (planilha + chaves + recálculo, 111 asserts — test_excel_smoke.js).
- T4 (segurança): PASS — triagem defensiva de phishing com dados fictícios (ambiente isolado, Seção 4.3).
- T5 (gráficos): PASS — 5 tipos (histograma/linha/barras/dispersão/box plot), cálculos reais, 137 ocorrências.
- T6 (áudio/busca): ÁUDIO ATENDIDO (controles + aviso + 3 correções, smoke 41/41, CDP OK); BUSCA ATENDIDA (índice 1196, buscar('CIDR')=10).
- T7 (substituições): PASS — nenhuma.
- Defeitos encontrados: NENHUM; nenhuma alteração em simulator_*.js; Fase 7 (correções) não aplicada.
- Limitações remanescentes registradas: áudio não validado, busca não testada com conteúdo externo, M5.4 laboratório não integra API externa (conforme Seção 7.4), vídeos 0 validados, gráfico validado por código não por interação visual.
- Nenhum arquivo curriculum_*, flashcards_*, questions_*, references.js alterado nesta fase.


=== 15. SUBSTITUIÇÃO REGISTRADA — plugin advanced-delegation (2026-10-24) ===
- Plugin solicitado pelo usuário: advanced-delegation.
- Resultado: backend "profile_routes" NÃO instalado; nenhuma delegação via subagente.
- Substituição aplicada: revisão independente executada manualmente pelo orquestrador
  (perfil revisor, NÃO autor da Fase 5), conforme regra de contrato (revisão independente
  obrigatória — o autor não pode ser o único aprovador).
- Arquivo de evidência: docs/REVISAO_INDEPENDENTE_FASE5.md.
|- Nenhum modelo de IA substituído; nenhum arquivo de conteúdo alterado.
|- Nenhuma funcionalidade declarada completa sem evidência real.


=== 16. FASE 7 — CORREÇÕES (2026-10-24) ===
|- D1 (18 flashcards M1 com tópico inexistente): CORRIGIDO — remapeados para m1-u1-t1 (convenção abreviada do tópico existente). Arquivo: apostila-ia/assets/data/flashcards_m1.js. Verificado: node --check OK; grep confirma 21 flashcards em m1-u1-t1 (nenhum m1-u1-t2..t8 restante).
|D2 (137 questões com referência de tópico inconsistente): CORRIGIDO — 125 questões M4/M5 remapeadas de IDs descritivos (seguranca-fundamentos-u1-t1-sub-N, ia-fundamentos-u1-t1-sub-N) para IDs de tópico do currículo (m4-u1-t1-sN, m5-u1-t1-sN) via script apply_d2_fix_v3.js. As 12 questões restantes com IDs de nível de unidade (modulo-1-unidade-N) são válidas por Escrita.txt Seção 10.1 ("id da unidade ou subtopico"). Resultado: 0 referências inválidas (audit_fase6.js confirma; topicoInvalid=0). verify_qfields.js corrigido — os campos 'erro' e 'ref' eram falsos positivos (não existem no schema); informações reais estão em 'analise' e 'regra'. qfields.json regenerado — 0 missing_required fields em todas as 365 questões.
|- D3 (vídeos): permanece pendente (decisão intencional; nenhum vídeo inventado).
|- D4 (navegador real): permanece pendente (limitação de ambiente Termux CLI).
|D5 (referências): Microsoft Learn/RFCs/CERT.br verificados no PR #8; demais incisos pendentes.
|D6 (flashcards M3 com verso < 5 caracteres): CORRIGIDO — fc-m3-18 ("993." → "993 — IMAP com criptografia SSL/TLS."), fc-m3-19 ("995." → "995 — POP3 com criptografia SSL/TLS."), fc-m3-21 ("From." → "From — o remetente do e-mail."), fc-m3-22 ("To." → "To — o destinatário principal do e-mail.") em apostila-ia/assets/data/flashcards_m3.js. Re-audit: missingBack de M3 = 0.
|- Nenhuma alteração em curriculum_*, questions_*, references.js, simulator_*, charts.js, storage.js nesta fase.


=== 17. FASE 7 — TESTES HEADLESS CHROMIUM (CDP) — 2026-10-24 ===
- T9 carregamento file://: PASS (0 exceções JS; módulos 1-8; 404 FC; 365 Q; 5 gráficos).
- T10 contêineres: PASS (12/12 presentes e não vazios).
- T11 busca: PASS (índice 1196; buscar('CIDR')=10).
- T12 gráficos: PASS (5 SVGs).
- T13 localStorage roundtrip: PASS.
- T14 simuladores: PASS (montagem + Excel smoke 111 asserts).
- PARCIAL remanescente: áudio (Web Speech API não validada em headless), vídeos (0 validados — intencional), WCAG completa (sem leitor de tela), responsividade em dispositivo físico.
- Nenhuma alteração de código; apenas evidências registradas.


=== 18. WCAG + RESPONSIVIDADE (2026-10-24) ===
- Árvore curricular: role="tree"/treeitem, aria-expanded, aria-level/setsize/posinset, teclado (↑↓←→/Enter/Space/Home/End), 132 toggles com aria-label. Smoke jsdom: 472 nós, 309 aria-expanded, toggle interativo OK, progresso gravado.
- Contraste: pares AA medidos; .label-parc ajustado #b06000→#8a4b00 (6.40); dark mode recolorido.
- Responsividade: breakpoints 360/768/1024/1440; overflow-x hidden; tabelas roláveis.
- node --check navigation.js + todos assets/js OK. CSS balanceado (77/77).
- Limitação: leitor de tela e dispositivo físico não testados.

=== 19. I6 — RECONCILIAÇÃO DOCUMENTAL FINAL (2026-10-24) ===
Contagens reconciliadas (fonte de verdade: código + Node/vm):
- Módulos: 8; nós: 427 (132 tópicos + 295 subtópicos).
- Flashcards: 404 (m1=50, m2=50, m3=50, m4=54, m5=50, m6=50, m7=50, m8=50).
- Questões: 365 únicas (M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40); níveis básica 94 (25,8%), intermediária 193 (52,9%), avançada 78 (21,4%); formatos 290 MC + 75 CE; estilos CESPE 216, FGV 58, FCC 52, VUNESP 39.
- Referências: 72 (20 vídeos + 52 técnicas); 72/72 verificadas, 0 pendentes em references.js.
- Gráficos: 5/5. Simuladores: 6 (Excel, Redes, Segurança, Prompts, Dados, Ética) — EthicsSimulator (I3) criado, carregado e montado em #etica-app.
Classificação de pendências (plano do arquiteto, seções 1 e 9):
- A (concluído com evidência): estrutura curricular 8 módulos/427 nós; 404 flashcards; 365 questões; 5 gráficos; 6 simuladores (código + montagem); busca (índice 1196, buscar('CIDR')=10); áudio (controles + aviso, smoke 41/41); persistência (localStorage roundtrip); carregamento file:// sem exceções JS; 20 vídeos validados via oembed; 72/72 referências verificadas.
- B (concluído com ressalva documentada): qualidade pedagógica profunda (amostragem M2/M4/M6/M8); D2 referência por unidade/tópico em 137 casos (decisão editorial); embed de vídeos e disponibilidade regional não testados.
- C (limitação de ambiente, não concluído): teste em dispositivo físico (responsividade, interatividade de simuladores/gráficos); síntese de áudio (Web Speech API, depende de voz pt-BR do dispositivo); WCAG com leitor de tela; manifest CORS/SW em navegador real; verificação artigo a artigo das leis adicionais citadas por remissão em M6; prazos de retenção OneDrive/SharePoint por plano.
- D (pendente intencional, não inventar): demais resoluções ANPD, demais RFCs não listadas, demais incisos/parágrafos CF art. 37/5º não enumerados, vídeos adicionais além dos 20 validados (nenhum inventado).
Duplicatas/inconsistências removidas: referências atualizadas de 32 → 72; simuladores de 5 → 6; revisão pedagógica (I5, 7 correções) registrada em docs/REVISAO_PEDAGOGICA.md.
Limitações C/D listadas explicitamente acima; nenhuma funcionalidade declarada concluída sem evidência real.


## Novas pendências confirmadas pela auditoria remota — 2026-10-25

12. **Matriz detalhada**: `docs/MATRIZ_COBERTURA.csv` tem apenas oito linhas de módulo e uma linha TOTAL. Criar matriz rastreável por unidade/tópico/subtópico com IDs estáveis, objetivos, conteúdo, exemplos, exercícios, flashcards, questões, fontes, testes e status. Não declarar cobertura completa antes de conferir os dados reais.
13. **Reprodução de métricas**: recalcule as contagens de nós curriculares, exemplos, exercícios, flashcards e questões a partir dos arquivos atuais, registrando o comando/script, a data e os resultados.
14. **Reconciliação de status**: `docs/PLANO_EXECUCAO.md`, `docs/RELATORIO_TESTES.md`, `docs/INVENTARIO_CURRICULAR.md` e `docs/PENDENCIAS.md` contêm estados históricos e afirmações que precisam ser harmonizados com evidência atual. Preservar histórico, mas marcar claramente o que foi reexecutado.
15. **Auditoria de qualidade**: avaliar a profundidade real por unidade e não apenas contagens; verificar pelo menos três exemplos resolvidos por unidade conforme o prompt mestre.
16. **QA independente**: repetir testes de lógica, questões, flashcards, busca, gráficos, simuladores, persistência, acessibilidade e abertura direta; separar resultados de CLI/headless dos que exigem navegador real.
17. **Referências/vídeos**: a existência de referências cadastradas não comprova validade atual; registrar URL, assunto, fonte, data de verificação e resultado verificável.
18. **Subagentes**: a inspeção desta execução foi feita via integração GitHub sem subagentes Hermes. Não declarar agentes delegados ou revisões independentes até haver evidência de execução e artefato produzido.


## Pendências identificadas na auditoria temática (2026-10-25)

- [x] Validar referências `topico` de todos os flashcards M1–M8 contra os IDs curriculares normalizados. Resultado estático: 404/404 referências válidas.
- [ ] Auditar qualitativamente a cobertura temática dos flashcards conforme `docs/FASE1_AUDITORIA_2026-10-25.md`: M1 agora referencia 23/23 tópicos de nível superior (66 cartões); M2 19/19 após expansão (56 cartões); M3 14/14 após expansão (68 cartões); M5 13/13 após expansão. Referências válidas não provam cobertura pedagógica, profundidade ou exatidão.
- [x] Ampliar M2 de 50 para 56 flashcards com seis cartões para os três tópicos antes sem referência (commit `7579f064b25502720fe5e81b6539a134d076f079`). Cobertura referencial concluída; auditoria semântica pendente.
- [x] Ampliar M3 de 50 para 68 flashcards com 18 cartões para os nove tópicos antes sem referência (commit `ff504449868a325ec86c4c69d82a40c230b83dc6`). Cobertura referencial concluída; auditoria semântica pendente.
- [x] Ampliar M1 de 50 para 66 flashcards com 16 cartões sobre Excel, PowerPoint e OneDrive, cobrindo os oito tópicos de nível superior antes sem referência (commit `647cdd6632046f0d2d623f015478354b34625439`). A validação técnica e a auditoria semântica continuam pendentes.
- [x] Ampliar M5 de 50 para 66 flashcards com 16 cartões novos sobre IA generativa/LLMs e engenharia de prompts. Validação estática: 66 IDs únicos, 13 tópicos curriculares referenciados e zero referências inválidas; revisar tecnicamente as respostas e avaliar duplicação semântica.
- [x] Revisar e revisar 28 cartões M2 e corrigir 27 referências temáticas com base na correspondência entre frente e título curricular. Os IDs e os textos dos cartões foram preservados; exatidão técnica integral, duplicações e cobertura completa seguem pendentes. Ver `docs/FASE1_AUDITORIA_2026-10-25.md`.
- [ ] Auditar duplicação semântica e originalidade dos flashcards; a ausência de IDs repetidos não exclui cartões com conteúdo duplicado.
- [x] Corrigir referências temáticas evidentemente incorretas em M3: `fc-m3-08` a `fc-m3-15` passaram de `m3-u1-t1` para `m3-u1-t2` após revisão de frente/verso. Isso não resolve a cobertura de M3; ainda faltam cartões para tópicos de netiqueta, acessibilidade, comunicação institucional e controles de videoconferência. Ver `docs/FASE1_AUDITORIA_2026-10-25.md`.
- [x] Comparar globalmente os 365 IDs de questões e validar cada referência `topico` contra a hierarquia curricular aceita. Resultado estático: 365 IDs globalmente únicos e 0 referências inválidas; ver relatório de auditoria.
- [ ] Revisar qualitativamente a qualidade didática dos 888 exemplos e 592 exercícios. A validação estrutural encontrou campos mínimos em todos os objetos extraídos, mas identificou uma concentração de material adicional em M1 no subtópico `modulo-1-unidade-2-topico-14-sub-1`; revisar manualmente antes de concluir.


## Atualização do orquestrador — 2026-10-25 (PR #17)

- [x] Expandir docs/MATRIZ_COBERTURA.csv para rastrear estruturalmente os 295 subtópicos detectados nos oito currículos; contagens textuais atuais: 888 exemplos e 592 exercícios.
- [x] Registrar contagens remotas de flashcards (460 IDs únicos) e questões (365 IDs únicos) com distinção explícita entre validação estrutural e qualitativa.
- [x] Adicionar scripts/audit_curriculum_matrix.mjs para geração local da matriz sem dependências externas.
- [ ] Executar o script em um clone do repositório e comparar a saída com a matriz versionada; a execução ainda não foi realizada nesta sessão.
- [ ] Acrescentar à matriz a rastreabilidade explícita de flashcards, questões, fontes e testes por subtópico, distinguindo associação direta de cobertura inferida por tópico/unidade.
- [ ] Revisar qualitativamente conteúdo, exemplos, exercícios, gabaritos e distratores; contagens estruturais não equivalem a aprovação editorial.
- [ ] Executar e registrar testes locais/headless, checagens de integridade e testes de navegador; a consulta de Actions desta branch retornou zero execuções e não comprova CI verde.
- [ ] Não iniciar alterações concorrentes em arquivos de aplicação enquanto a análise do PR #17 estiver sendo consolidada; integrar mudanças em commits rastreáveis na mesma branch.


## Atualização de rastreabilidade — 2026-10-25 (continuação do PR #17)

- [x] Adicionar `scripts/audit_learning_assets.mjs`, ferramenta sem dependências externas para associar IDs de flashcards e questões às chaves dos tópicos curriculares e gerar `docs/MATRIZ_RASTREABILIDADE_ATIVOS.csv` e `docs/RELATORIO_RASTREABILIDADE_ATIVOS.md`.
- [ ] Executar `node scripts/audit_learning_assets.mjs` em clone do repositório; confirmar que a extração reconhece os registros esperados e revisar referências não mapeadas antes de usar os resultados como evidência.
- [ ] Conferir se o parser de ativos trata todos os formatos de objeto dos oito arquivos de flashcards e seis arquivos de questões; regex estrutural não substitui validação do esquema.
- [ ] A matriz de ativos será por tópico-pai. Não interpretar associação ao tópico como cobertura garantida de cada subtópico.
- [ ] Não afirmar que a matriz de ativos foi gerada ou que o script passou até executar o script e registrar a saída real.


## Atualização após CI real — 2026-10-25 (PR #17)

- [x] Criar workflow de validação para pull requests e branches `feat/**`: `.github/workflows/validate-curriculum.yml`.
- [x] Corrigir erro de sintaxe em `flashcards_m1.js` (aspas internas em exemplo de `CONT.SE`) e registro sem vírgula em `flashcards_m5.js`; a execução posterior de `node --check` passou para todos os JS de `apostila-ia/assets`.
- [x] Atualizar expectativas obsoletas de `verificacao/verificar-estrutura.js` para 460 flashcards e 39 tags de script; as verificações estruturais passaram com 0 falhas.
- [x] Executar os dois scripts de auditoria no GitHub Actions. Resultado: 132 tópicos reconhecidos, 460 flashcards, 365 questões, 108 ativos associados a unidade sem tópico específico e 0 referências sem associação curricular reconhecível.
- [x] Configurar upload dos relatórios gerados como artefato do workflow.
- [ ] Investigar os tópicos que aparecem sem questão associada diretamente na matriz; a associação por unidade não deve ser distribuída artificialmente entre tópicos.
- [ ] Fazer revisão semântica de conteúdo, exemplos, exercícios, gabaritos e fontes; CI verde não equivale a aprovação pedagógica.
- [ ] Testar em navegador real: interações, teclado/leitor de tela, persistência e modo `file://`; a execução automatizada atual não comprova esses requisitos.

Evidência do job aprovado: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246104780. O PR permanece draft e não deve ser mergeado enquanto as pendências qualitativas e de navegador não forem avaliadas.


## Atualização de teste de navegador — 2026-10-25

- [x] Executar smoke test com Playwright/Chromium headless no modo `file://`: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246584032. Confirmados 8 módulos renderizados, 460 flashcards, 365 questões, 5 SVGs, seis simuladores com UI, persistência localStorage e zero exceções JavaScript.
- [ ] Testar interações completas de cada simulador, fluxo de simulado, filtros, backup/importação, redimensionamento e teclado em Chromium/Firefox/Safari ou dispositivos reais.
- [ ] Executar auditoria WCAG 2.1 AA com ferramenta e leitor de tela; smoke test headless não é certificação de acessibilidade.
- [ ] Testar registro/cache/offline do Service Worker em contexto HTTP/HTTPS; o teste `file://` não cobre PWA.


## Correção de rastreabilidade M1 — 2026-10-25

- [x] Associar 12 questões M1 ao subtópico correspondente após conferir seus assuntos e enunciados: q-m1-26, q-m1-27, q-m1-28, q-m1-29, q-m1-30, q-m1-31, q-m1-32 e q-m1-36 a q-m1-40.
- [x] Reexecutar a auditoria no GitHub Actions: [execução aprovada](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246710464). Total atual: 96 questões com referência apenas à unidade, 0 referências curriculares não mapeadas; 460 flashcards e 365 questões preservados.
- [ ] Revisar as 96 questões ainda associadas apenas à unidade (principalmente M4/M5) antes de vinculá-las a tópicos. Não atribuir automaticamente com base apenas no número da unidade.


## Atualização de rastreabilidade e revisão legal — 2026-10-26

- [x] Associar as 96 questões que ainda apontavam somente para unidades a tópicos existentes, após revisar assunto/enunciado. Auditoria automatizada: 365 questões com referência direta, 0 unit-only, 0 referências desconhecidas. Ver `docs/DECISOES_RASTREABILIDADE_QUESTOES.md`.
- [x] Corrigir sete questões legais do M4 (q-m4-34, q-m4-35, q-m4-36, q-m4-37, q-m4-40, q-m4-41, q-m4-43) e atualizar as referências oficiais após conferir a Lei nº 15.352/2026, a Constituição Federal e a LAI.
- [x] Executar sintaxe, auditorias estruturais, verificador de estrutura e smoke test Playwright/Chromium via `file://`: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247446902 — **success**.
- [ ] Revisar semanticamente as 365 questões, incluindo gabaritos, justificativas, distratores e fontes. O mapeamento estrutural não substitui revisão pedagógica.
- [ ] Tratar os 36 tópicos sem questão diretamente associada: M1=6, M2=15, M3=9, M5=2, M6=4. A ausência de associação direta não prova ausência de cobertura indireta.
- [ ] Revisar todas as referências legais em `references.js` e no conteúdo dos módulos à luz das alterações normativas recentes; não generalizar a atualização de M4 como auditoria completa de todas as normas.
- [ ] Testar fluxos interativos completos, teclado, leitores de tela, WCAG 2.1 AA, backup/importação, responsividade em dispositivos reais e PWA via HTTP/HTTPS.


## Atualização legal e de referências da aplicação — 2026-10-26

- [x] Adicionar ao catálogo visível da aplicação a Lei nº 15.352/2026 como fonte oficial verificada em 2026-10-25; o catálogo passou de 72 para 73 referências.
- [x] Corrigir no conteúdo do Módulo 6 a definição vigente de encarregado, a composição dos agentes de tratamento, a definição da autoridade nacional, os direitos do art. 18 (incluindo incisos VI e IX) e a explicação das exceções do art. 4º da LGPD.
- [x] Corrigir a generalização de que o Estado é sempre controlador e operador: o papel depende das operações concretas.
- [x] Validar o commit `c54e13f7d166910f2a1c62ffa0199c6727b3b33e` no GitHub Actions: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247679289 — **success**.
- [ ] Auditar semanticamente todo o conteúdo jurídico dos módulos M4 e M6 e verificar eventuais alterações normativas além das questões e trechos corrigidos neste lote.


## Correção de referências curriculares M1–M3 — 2026-10-26

- [x] Corrigir 14 associações em `questions.js`: três questões de Excel (q-m1-33 a q-m1-35), quatro de métricas/CIDR em Redes (q-m2-34 e q-m2-38 a q-m2-40) e sete sobre lobby/gravação em reuniões (q-m3-20 a q-m3-22 e q-m3-37 a q-m3-40).
- [x] Validação de sintaxe, auditoria de ativos, verificador estrutural e smoke test no commit `b306d9a295035d24317f83f604882ecb73054e57`: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247942802 — **success**.
- [ ] Criar questões diretas para 24 tópicos substantivos ainda sem associação direta: M1=3, M2=14, M3=7. Os 7 tópicos restantes sem questão direta são nós de síntese/revisão, que não exigem necessariamente questão exclusiva.


## Cobertura direta de tópicos — lote de 24 questões — 2026-10-26

- [x] Adicionar 24 questões autorais com gabarito e análise de distratores para tópicos que estavam sem questão direta: q-m1-41..q-m1-43, q-m2-41..q-m2-54 e q-m3-41..q-m3-47.
- [x] Atualizar o smoke test, o verificador estrutural, o manifesto PWA e o estado da interface para 389 questões e 460 flashcards.
- [x] Corrigir a associação de q-m3-22 para o tópico de segurança e gravação de reuniões, mantendo a cobertura direta dos tópicos de gravação no M3.
- [x] Validação no GitHub Actions: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40248707126 — **success**. Auditoria: 132 tópicos, 460 flashcards, 389 questões, 0 unit-only, 0 referências desconhecidas. Smoke test via `file://`: PASS.
- [x] Incluir WCAG 2.2 do W3C como referência verificada no catálogo; o catálogo agora contém 76 referências.
- [ ] Revisar semanticamente todos os 389 enunciados, gabaritos, justificativas, distratores e fontes. A validação estrutural não comprova correção pedagógica integral.
- [ ] Testar todas as interações dos simuladores, backup/importação, teclado, leitor de tela, WCAG 2.1 AA e Service Worker em HTTP/HTTPS.


## Auditoria heurística das 389 questões — 2026-10-26

- [x] Adicionar `scripts/audit_question_quality.mjs` ao CI e gerar relatório/matriz heurísticos como artefato.
- [x] Resultado: 389 questões lidas; 0 IDs duplicados; 0 pares com contexto e enunciado idênticos; 0 alertas heurísticos após corrigir regras que geravam falsos positivos.
- [x] Adicionar fontes para q-m3-21, q-m3-22 e q-m3-38, que tratam de política de gravação e medidas de segurança sob a LGPD.
- [x] Execução aprovada: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40249392754.
- [ ] **Prioridade alta:** revisar a distribuição das posições do gabarito nas 314 questões de múltipla escolha: A=149, B=129, C=26, D=5, E=5. Não alterar gabaritos automaticamente; revisar cada questão e reorganizar alternativas apenas preservando a correspondência entre texto, gabarito e análise.
- [ ] Revisar semanticamente os 389 enunciados, gabaritos, justificativas, distratores e fontes. A ausência de alertas heurísticos não prova correção factual.
- [ ] Concluir auditoria independente WCAG, leitores de tela, teclado, dispositivos reais, simuladores e PWA/offline.


## Revisão da posição das alternativas — 2026-10-26

- [x] Reordenar as alternativas das 24 questões novas sem alterar conteúdo correto, análise ou justificativa: distribuição interna do lote A=4, B=5, C=5, D=5, E=5.
- [x] Reexecutar a auditoria heurística e o smoke test: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507 — **success**.
- [ ] **Prioridade alta:** o banco completo ainda tem concentração de gabaritos A/B (A=149, B=129, C=26, D=5, E=5; A/B=88,5% das 314 questões MC). Revisar as questões legadas e reorganizar alternativas somente quando for possível preservar a relação entre texto, gabarito, análise e justificativa.


## Distribuição de gabaritos por módulo — 2026-10-26

- [x] Ampliar a auditoria para produzir distribuição A–E por módulo e alertas de concentração.
- [x] Execução aprovada: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.
- [ ] **Bloqueador editorial para o aceite do simulado:** revisar manualmente as posições de resposta em M1, M4, M5, M6, M7 e M8. M6 tem 22/37 questões MC com gabarito A (após as três questões de síntese, distribuição A=22, B=2, C=10, D=3, E=0); após lote editorial controlado, M7 tem A=29, C=1, D=1, E=2 em 33 questões MC; M4 tem 38 A, 43 B e 3 C em 84 questões MC; M5 tem 24 A, 13 B e 1 C em 38; M8 tem 10 A, 25 B e 1 C em 36.
- [ ] Não reorganizar alternativas por lote sem verificar que o gabarito, a análise de cada alternativa e toda referência explícita a letras permaneçam coerentes.
- [ ] Revalidar todos os itens alterados com verificador estrutural e revisão editorial antes de retirar esse bloqueio.


## Triagem inicial do M7 — 2026-10-26

- [x] Ler os enunciados, contextos, gabaritos e justificativas dos 40 itens do M7 numa primeira triagem. Não foi identificado erro factual óbvio nesta passagem.
- [ ] Revisar individualmente as cinco alternativas, as análises de distratores e as fontes de cada item do M7. A triagem inicial não é aprovação semântica completa.
- [x] Auditoria estrutural de rótulos CORRETA/INCORRETA contra gabaritos: 0 incompatibilidades detectadas. Evidência: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Revisão manual de citações legais do M6 — 2026-10-26

- [x] Corrigir as citações de q-m6-02 e q-m6-06 para princípios de impessoalidade/transparência e linguagem clara, removendo a referência inadequada ao art. 29, § 1º, III, da Lei nº 14.129/2021.
- [x] q-m6-03: fonte complementada com LGPD, art. 6º, I–III (finalidade, adequação e necessidade).
- [x] q-m6-29: removida a referência inadequada ao art. 43 da Lei nº 14.129/2021; a base foi ajustada para LAI, arts. 6º, III, e 34, e LGPD, arts. 6º, X, 37 e 46.
- [x] q-m6-31: removida a referência inadequada ao art. 43; fonte ajustada para LAI, art. 8º, caput e § 2º, e Lei nº 14.129/2021, art. 3º, IV.
- [x] q-m6-32: contexto delimitado ao Poder Executivo federal; fonte ajustada para Lei nº 12.813/2013, arts. 3º, I, 4º e 5º, V, além da CF/88, art. 37, caput.
- [x] q-m6-38: removida a referência inadequada à Lei nº 14.129/2021, art. 43; fonte ajustada para LAI, arts. 6º, III, 32, IV, e 34, e LGPD, arts. 37, 46, 48 e 49.
- [x] Lei nº 12.813/2013 cadastrada em `references.js` e documentada em `referencias/referencias-verificadas.md`, com URL oficial e dispositivos usados em q-m6-32.
- [x] Revalidar após as correções de q-m6-02 e q-m6-06: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250565014 — success.


---

## Atualização de continuidade — 2026-10-25

1. **P1 — reconciliação de contagens por commit:** documentos históricos mencionam 404 flashcards/365 questões; o PR #17 declara 460 flashcards/389 questões após alterações posteriores. Confirmar os números executando a auditoria no SHA atual do branch e sincronizar todos os documentos derivados.
2. **P1 — qualidade editorial de questões:** o próprio PR registra concentração de gabaritos no banco legado, incluindo módulos com todas as respostas na alternativa A. Revisar posição das alternativas e coerência de cada análise sem alterar o significado do gabarito.
3. **P1 — revisão semântica:** revisar conteúdo, exemplos, exercícios, fontes e gabaritos; a existência de campos e a aprovação de sintaxe não satisfazem o critério de aprendizagem completa.
4. **P2 — testes de navegador e acessibilidade:** completar teclado/leitor de tela, responsividade em dispositivo real, áudio e comportamento dos embeds, distinguindo teste headless de teste físico.
5. **P2 — fontes normativas:** confirmar a vigência e a pertinência de cada referência legal/normativa citada, registrando URL, dispositivo e data de consulta.
6. **P3 — delegação multiagente:** a ferramenta de delegação especializada não está disponível nesta execução; não atribuir tarefas a agentes fictícios. Prosseguir com lotes isolados e revisão independente documentada.
7. **Controle de integração:** manter o desenvolvimento no branch do PR #17 e não executar merge enquanto critérios obrigatórios qualitativos ou de navegador permanecerem pendentes.


## Fase 2 — inspeção remota (2026-10-25)

- [x] Consultar o workflow `validate-curriculum` para o HEAD `ba914e349d9f97809968c986a366702389742e29`: execução 40253838180 concluída com `success`. O workflow agregado do PR ainda estava em execução na última consulta; verificar novamente antes de considerar todos os checks concluídos.
- [ ] Reconciliar a contagem de flashcards/questões e a matriz CSV com o mesmo SHA do branch.
- [ ] Revisar os scripts de auditoria para falsos negativos e limites de análise textual.
- [ ] Fazer revisão semântica estratificada de questões e fontes, priorizando gabaritos concentrados em A/B e módulos com distribuição extrema.
- [ ] Auditar os seis simuladores por entradas inválidas, limites e consistência dos resultados; UI montada não basta.
- [ ] Testar teclado/leitor de tela, responsividade física, síntese de voz e embeds em ambiente apropriado.

- [ ] **P1 — integração de persistência:** `storage.js` está carregado, mas seu próprio cabeçalho declara que navegação, flashcards e questões continuam gravando em namespaces separados no `localStorage`. Definir contrato único ou documentar/validar interoperabilidade, migração, backup e recuperação antes de declarar a persistência integrada.

- [ ] **P1 — balanceamento editorial M7/M6:** o piloto `q-m7-01` moveu a resposta correta de A para E, remapeando gabarito e análises sem mudar o conteúdo pedagógico. Aguardando CI no commit `62fe8991bf654613862a63fe77ded2a14b023c11`. Expandir por pequenos lotes, conferindo toda menção a letras em justificativas antes de cada alteração. O banco M7 ainda permanece fortemente concentrado em A.


## Atualização — revisão editorial de gabaritos M7 (2026-10-26)

- Lote controlado aplicado a `q-m7-04`, `q-m7-05` e `q-m7-07`, além do piloto anterior `q-m7-01`.
- Em cada questão, foram movidas em conjunto a alternativa correta, o gabarito e as análises associadas; arrays mantidos em ordem A–E.
- CI do commit anterior `47fc2332a1339c8750d606e6477332000ee3ce50`: validação curricular/estrutural, auditoria heurística e smoke test Playwright em `file://` concluídos com sucesso ([run 40254320845](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254320845)).
- CI do HEAD `4df80216f1b0e6f20329a5345468ad56074f8abd` concluído com sucesso: sintaxe, auditorias estruturais/heurísticas e smoke test Playwright em `file://` aprovados ([run PR 40254853715](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254853715), [run push 40254851951](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851951)).
- Distribuição efetiva confirmada no artefato: M7 A=29, B=0, C=1, D=1, E=2; a concentração ainda é alta. Próximo passo: revisão individual dos distratores, análises e fontes antes de qualquer novo lote. M6/M4/M5/M8 continuam pendentes de revisão individual.


### Revalidação do HEAD — 2026-10-26

- [x] CI de push e PR no SHA `4df80216f1b0e6f20329a5345468ad56074f8abd` aprovado: sintaxe de 39 arquivos, auditoria da matriz curricular, rastreabilidade, estrutura do repositório, heurísticas de questões e smoke test Chromium/Playwright via `file://`.
- [x] Contagens reconciliadas no mesmo SHA: 132 tópicos, 460 flashcards, 389 questões; 0 IDs duplicados, 0 pares idênticos de contexto/enunciado, 0 alertas heurísticos.
- [x] Distribuição de 314 questões MC atualizada: A=145, B=129, C=27, D=6, E=7. A/B ainda representam 87,3%; revisão editorial permanece bloqueadora.
- [ ] Fazer revisão semântica individual dos distratores e análises do M7 antes de novos rearranjos; o CI valida estrutura, não correção pedagógica.


## Proveniência curricular do M8 — 2026-10-26

- [x] Adicionar campo `fonte` às 40 questões M8 com referência explícita ao identificador do tópico curricular e ao assunto correspondente.
- [ ] Confirmar via CI no novo HEAD que a sintaxe, rastreabilidade e auditoria de ativos continuam aprovadas.
- [ ] Revisar separadamente se as questões M8 necessitam de fontes externas normativas/técnicas para afirmações específicas; a referência ao currículo é proveniência interna, não evidência externa independente.


## Cobertura de tópicos de síntese — 2026-10-26

- [x] Adicionar questão autoral ao tópico de relatório técnico integrado do M1.
- [x] Adicionar questões autorais aos tópicos de síntese de IA generativa e engenharia de prompts do M5.
- [x] Adicionar questões autorais aos tópicos de síntese de ética/governança, redes sociais institucionais, acessibilidade e método de resolução do M6.
- [x] Atualizar a matriz de validação estrutural, o manifesto PWA e o inventário do README para 399 questões: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40; 324 MC e 75 itens certo/errado.
- [x] Confirmar CI completo no HEAD `09d657130a66ea2cfd7390909656ce5a7557e762`: estrutura, ativos, heurísticas e smoke test via `file://` aprovados.
- [ ] Fazer revisão semântica independente das sete questões novas e validar suas fontes e gabaritos; validação estrutural não comprova correção pedagógica.
- [ ] Revisar a concentração de gabaritos, ainda alta em M1, M4, M5, M6, M7 e M8.

- [x] Corrigir as análises por alternativa das quatro questões M6 novas para que os distratores sejam explicados conforme o enunciado específico.
- [ ] Fazer revisão semântica independente das sete questões novas e validar suas fontes e gabaritos; a aprovação estrutural não comprova correção pedagógica.

- [x] Fazer triagem editorial dirigida das sete questões novas: enunciados, alternativas, gabaritos e análises coerentes na revisão realizada; detalhar os critérios de acessibilidade de PDF em q-m1-44.
- [ ] Para questões que venham a afirmar regra jurídica/técnica específica, complementar a referência curricular interna com fonte externa oficial ou documentação primária e registrar data de consulta.

- [x] Executar e analisar o inventário automatizado no HEAD `3ae660db7e23f0594e347e6c59701bd1f61746b2`: 465 controles, 0 sem nome acessível, 0 imagens sem `alt`, link de salto presente e exatamente 1 marco `main`; `pageErrors: []` no Chromium via `file://` ([CI](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256956212)).\n- [ ] Realizar auditoria de acessibilidade independente (axe/WCAG), navegação integral por teclado e teste com leitor de tela; o inventário do smoke test não cobre conformidade WCAG nem a qualidade de todas as relações de nome/descrição.
\n\n## Revalidação e acessibilidade — 2026-10-26\n\n- [x] HEAD `3ae660db7e23f0594e347e6c59701bd1f61746b2`: validação curricular [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256956212), workflow do PR [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256951431), Code Quality [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256951300).\n- [x] Smoke test Chromium/Playwright via `file://`: 8 módulos, 460 flashcards, 396 questões, 5 SVGs, 6 simuladores presentes, round-trip de `localStorage`, 0 erros JavaScript e inventário de acessibilidade com 0 controles sem nome.\n- [ ] A concentração de gabaritos permanece elevada: A=145, B=131, C=29, D=8, E=8 entre 321 questões MC (A/B=86,0%). Não rearranjar alternativas em lote sem revisar gabarito, texto e análises de cada opção.

## Balanceamento editorial M7 — lote revisado — 2026-10-26

- [x] Revisadas individualmente as questões `q-m7-02`, `q-m7-03`, `q-m7-06`, `q-m7-08`, `q-m7-09`, `q-m7-10`, `q-m7-11`, `q-m7-13`, `q-m7-15`, `q-m7-18`, `q-m7-24` e `q-m7-25`; o conteúdo correto foi conferido com as justificativas e as regras descritas em cada item.
- [x] Reposicionada a alternativa correta de A para C nessas 12 questões; alternativas, gabarito e mapa `analise` foram remapeados em conjunto. Enunciados e conteúdo conceitual não foram reescritos.
- [x] Auditoria estrutural e smoke test Chromium via `file://` aprovados no commit `24b40ad13e25d88fe57bd1e1147d1161864a779c`: [validação curricular](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40257697373) e [validação adicional](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40257700222).
- [x] [Code Quality](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40257698441) e [workflow do PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40257698202) concluídos com sucesso nesse HEAD.
- [x] Distribuição de M7 após o lote: A=17, B=0, C=13, D=1, E=2 em 33 questões de múltipla escolha; A/B caíram de 87,9% para 51,5% no módulo.
- [ ] Revisar os bancos M4, M6 e M8 por lotes pequenos e com remapeamento explícito de referências a letras. A distribuição global ainda é concentrada: A=133, B=131, C=41, D=8, E=8 em 321 questões de múltipla escolha (A/B=82,2%).
- [ ] A aprovação do CI confirma sintaxe, estrutura e smoke test, mas não substitui revisão independente completa de gabaritos, distratores, fontes e profundidade pedagógica.


## Balanceamento editorial — atualização consolidada — 2026-10-26

- [x] Revisar em lotes controlados 10 questões de M4, 8 de M6 e 5 de M8, conferindo texto da resposta correta, gabarito, análise dos distratores e referências a letras.
- [x] Confirmar CI no HEAD `75a42f115be0305d939d487a481645f166423513`: [auditoria curricular e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258812457), [workflow do PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258810281) e [Code Quality](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40258810062) passaram.
- [x] Recalcular a distribuição do banco de 321 questões de múltipla escolha: A=110, B=131, C=64, D=8, E=8; A/B=75,1%.
- [ ] Continuar a revisão dos gabaritos por pequenos lotes; não forçar distribuição uniforme nem alterar questão sem conferir justificativa, distratores e referências.
- [ ] Realizar revisão pedagógica independente e completar a verificação por fontes oficiais para afirmações normativas/técnicas; CI verde não certifica esses aspectos.
- [ ] Atualizar este relatório e o relatório de qualidade após cada lote validado, sem deixar que os snapshots históricos sejam confundidos com o estado atual.


## Lote editorial M5 — atualização — 2026-10-26

- [x] Revisar oito questões MC de conceitos básicos de aprendizado de máquina e avaliação de modelos (q-m5-05, q-m5-09, q-m5-13 a q-m5-18), preservando o conteúdo correto e remapeando análises e referências às letras.
- [x] Ajustar o texto da resposta correta em q-m5-14 para descrever rotulagem, atributos e variável-alvo com precisão conceitual.
- [x] Recalcular a distribuição estática: A=102, B=131, C=72, D=8, E=8 em 321 questões MC; A/B=72,6%. M5: A=16, B=14, C=9, D=1, E=0 em 40 questões MC.
- [ ] Confirmar auditoria curricular, smoke test, Code Quality e workflow do PR no HEAD após este lote.
- [ ] Prosseguir apenas com lotes pequenos e conferência semântica; não interpretar distribuição de gabaritos como métrica única de qualidade.


## Atualização de estado — 2026-10-26 — commit 8fdf771

- [x] Confirmar resultado final da execução [40261787364](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364): job de validação concluído com `success`.
- [x] Executar smoke test Chromium/Playwright em `file://`: PASS, 8 módulos, 460 flashcards, 396 questões, 5 SVGs, 6 simuladores, persistência local e zero exceções JavaScript.
- [x] Executar regressões interativas em `file://`: PASS para cálculo Excel, CIDR, feedback de phishing, avaliação de prompt, recálculo de histograma no simulador de dados, feedback de ética e atualização real do SVG do laboratório de gráficos.
- [x] Arquivar relatórios gerados no artefato CI [curriculum-audit-reports](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364/artifacts/12625340191).
- [ ] Confirmar separadamente o workflow Code Quality no HEAD atual; não inferir esse resultado do workflow curricular.
- [ ] Continuar revisão semântica independente de conteúdo, fontes, gabaritos e distratores; priorizar a concentração de letras de gabarito já documentada.
- [ ] Executar validação manual por teclado e leitor de tela, avaliação WCAG independente e testes em dispositivos/navegadores adicionais.
- [ ] Reconciliar contagens e descrições históricas de inventário/matriz para que contagens antigas não sejam confundidas com o estado atual (132 tópicos, 460 flashcards, 399 questões esperadas após o patch; confirmar no HEAD validado).

A aprovação do workflow automatizado não encerra pendências qualitativas nem altera o estado draft do PR.


## Atualização — 2026-10-26 — correção q-m6-41 a q-m6-44

- [x] Corrigir em lote as quatro referências curriculares legadas em `questions_m6.js` (q-m6-41 → `m6-u4-t2-s1`; q-m6-42 → `m6-u4-t1-s2`; q-m6-43 → `m6-u5-t1-s2`; q-m6-44 → `m6-u6-t3-s1`). Commit: `7c9b0dd7871048d94294b5c7530f90e52de97f4d`.
- [ ] Aguardar e inspecionar os checks acionados pelo novo commit do PR #17.
- [ ] Reexecutar auditoria de rastreabilidade e validação estrutural no HEAD atualizado.
- [ ] Revisar independentemente enunciados, gabaritos, distratores, justificativas e fontes das quatro questões alteradas.
- [ ] Continuar as pendências qualitativas já registradas; a correção de IDs não equivale a aprovação pedagógica.


## Revalidação da correção q-m6-41 a q-m6-44 — 2026-10-26

- [x] Inspecionar o workflow disparado pelo HEAD `c9d3780a2a9b6a28906d4ea0c906fd93fb16a7e3`: [execução 40265636717](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40265636717) concluída com `success`.
- [x] Confirmar que o job passou por sintaxe JavaScript, matriz curricular, rastreabilidade de ativos, estrutura do repositório, heurísticas de questões, smoke test Chromium/Playwright em `file://` e regressões interativas; relatórios de auditoria foram enviados como artefato.
- [ ] Confirmar separadamente Code Quality no HEAD atual; o resultado curricular verde não comprova esse workflow.
- [x] Fazer revisão semântica focal de q-m6-41 a q-m6-44: coerência interna conferida; a fonte/justificativa de q-m6-44 foi alinhada aos arts. 7º, § 2º, e 31 da LAI, removendo referência não registrada no inventário verificado. Isso não equivale a auditoria jurídica independente de todas as fontes.
- [ ] Continuar as pendências globais de revisão editorial, fontes oficiais, acessibilidade WCAG/leitor de tela e testes em dispositivos reais. O PR #17 permanece draft até os critérios qualitativos serem atendidos.


## Revisão focal de questões M6 adicionadas — 2026-10-26

- Revisão de consistência de q-m6-45, q-m6-46 e q-m6-47: cenários, enunciados, alternativas, gabaritos e análises estão internamente coerentes; q-m6-45 usa a referência constitucional já presente no catálogo.
- **Rastreabilidade de fontes — atualização:** a página oficial de perguntas frequentes da Secom confirma a existência do Guia de Boas Práticas e aponta o PDF citado em q-m6-46; a referência foi cadastrada em `references.js` e documentada em `referencias/referencias-verificadas.md`. A WCAG 2.2 já estava cadastrada no catálogo com ID `ref-w3c-wcag-22`; a pendência anterior decorria de uma busca textual demasiado específica. A auditoria WCAG do produto permanece pendente.
- Esta é uma revisão focal de consistência, não uma validação independente da fonte Secom nem uma certificação legal/técnica. Não alterar gabaritos corretos apenas para balancear a distribuição.

## Continuidade auditável — 2026-10-26

1. **Bloqueante — confirmar CI do HEAD atual:** a execução 40262096277 validou o SHA `81472b91ea33a421db66f4fa502e28d0e09d0c65`; confirmar checks no HEAD mais recente antes de declarar estado verde.
2. **Bloqueante — revisão semântica independente:** revisar lotes coesos de questões, incluindo enunciado, gabarito, análise de cada alternativa/distrator, explicação, dificuldade, pegadinha, alinhamento curricular e fonte aplicável. Registrar IDs e resultados para evitar retrabalho.
3. **Bloqueante — distribuição de gabaritos:** recalcular no banco atual e inspecionar padrões suspeitos; não alterar respostas corretas apenas para equilibrar letras.
4. **Bloqueante — fontes primárias:** conferir afirmações técnicas e normativas contra documentação oficial, registrando URL direta e data. Não extrapolar verificações de referências para artigos/dispositivos não verificados individualmente.
5. **Bloqueante — acessibilidade independente:** executar testes manuais de teclado, foco, semântica e leitor de tela. Inventário automatizado não equivale a certificação WCAG.
6. **Pendente — compatibilidade:** testar dispositivos/navegadores adicionais quando houver ambiente real disponível; documentar o que não pôde ser testado.
7. **Pendente — reconciliação de métricas:** snapshots registram 396 e 399 questões em SHAs diferentes. Reexecutar scripts no HEAD exato antes de publicar contagens atuais.

**Estado geral:** PR #17 permanece Draft; não fazer merge até haver evidências suficientes para os critérios obrigatórios pendentes.

## Resultados de auditoria estrutural e acessibilidade — 2026-10-26

Evidências do workflow de validação executado no SHA `4e0c9eae346116c7c9c0957196ea315dd4f16b00` (run [40409912389](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40409912389)); os artefatos são resultados desse SHA, não do HEAD atual.

- [x] Sintaxe JavaScript, geração da matriz, rastreabilidade estrutural, validação da estrutura do repositório, heurísticas de qualidade, smoke test Chromium em `file://`: etapas concluídas com sucesso nesse run.
- [ ] **Bloqueante — acessibilidade automatizada:** a regressão de interação falhou na regra axe-core `color-contrast`: textos auxiliares `#4b5563` sobre `#1f232c` resultaram em contraste 2,08:1, abaixo de 4,5:1. Foi alterada a cor desses textos para `#cbd5e1` nos seis simuladores (Excel, Redes, Segurança, Prompts, Dados e Ética). Falta confirmar o resultado de um novo run após essas alterações.
- [x] **Contagem estrutural reconciliada:** os 8 arquivos curriculares contêm 295 subtópicos; os contadores por subtópico somam 888 exemplos e 592 exercícios. A matriz `docs/MATRIZ_COBERTURA.csv` foi regenerada/sincronizada a partir dos arquivos curriculares, com 295 linhas de dados. Essa contagem é estrutural; não prova que cada exemplo seja pedagogicamente distinto nem que cada exercício tenha qualidade.
- [x] **Rastreabilidade estrutural:** no relatório do run citado, 132 tópicos, 460 flashcards e 399 questões foram reconhecidos; nenhuma referência curricular ficou sem associação pelo padrão do script. A associação é no nível de tópico-pai e requer revisão qualitativa.
- [ ] **Bloqueante — fontes das questões:** a auditoria heurística encontrou 112/399 questões sem fonte identificada no campo analisado (36 em M1, 40 em M2 e 36 em M3). Todas as 399 têm contexto e justificativa detectados pelo script, mas isso não comprova correção factual. Revisar as 112 questões e associar fontes primárias pertinentes, sem inventar referências nem presumir que fonte do tópico cubra cada afirmação.
- [ ] **Bloqueante — distribuição de gabaritos:** distribuição MC total A=83, B=104, C=72, D=37, E=28. M1 apresenta A=4, B=15, C=5, D=2, E=0 em 26 questões de múltipla escolha; revisar padrão e qualidade dos itens, sem alterar gabaritos corretos apenas para balancear letras.
- [ ] **Bloqueante — revisão semântica:** zero alertas heurísticos não equivale a zero defeitos. Revisar em lotes coesos enunciado, gabarito, justificativa de cada alternativa, qualidade dos distratores, nível de dificuldade, alinhamento curricular e fonte. Registrar IDs concluídos para impedir retrabalho.
- [ ] **Pendente — acessibilidade manual:** testes com teclado, ordem de foco, ampliação, leitor de tela e verificação manual WCAG; o axe-core é apenas uma camada automatizada.
- [ ] **Pendente — compatibilidade física:** navegadores e dispositivos adicionais não foram comprovados por esta execução.

A mudança de cor e a atualização da matriz geraram commits posteriores ao run 40409912389. Não declarar o HEAD atual aprovado até o workflow disparado para o SHA atual terminar e ser inspecionado.

## Revalidação após correção contextual de contraste — 2026-10-26

- [x] **Acessibilidade automatizada de regressão:** run [40410948115](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40410948115), SHA validado `4a4ab1f2016bc4afaf0b8afea6dc4dcbe9e4f814`, concluiu com `success`. Sintaxe, geração da matriz, rastreabilidade, estrutura, heurísticas de questões, smoke test Chromium em `file://` e regressões de interação/axe-core passaram.
- A correção final separa cores por contexto: `#4b5563` nos textos auxiliares sobre fundos claros e `#cbd5e1` nos mesmos tipos de texto dentro de painéis escuros. A tentativa intermediária com cor clara global falhou no fundo branco; ela foi substituída por seletores contextuais e validada pelo run acima.
- [x] **Revisão focal de consistência:** `q-m1-01` tinha contradição entre o gabarito D e a justificativa, que dizia que D descrevia um produto inexistente. O texto da alternativa e a justificativa foram corrigidos para exigir a confirmação do plano Microsoft 365 elegível e da cota de 5 TB no contrato/documentação.
- O run 40410948115 valida o código no SHA indicado. Os commits documentais feitos após esse SHA não alteram o código da aplicação; ainda assim, os checks devem ser conferidos no estado final da branch quando disponíveis.
- [ ] **Continuam bloqueantes:** revisar fontes primárias das 112 questões sem fonte identificada; auditar a distribuição de gabaritos, especialmente M1; fazer revisão semântica independente das questões; executar testes manuais de teclado/leitor de tela e auditoria WCAG; validar navegadores e dispositivos físicos adicionais.
- PR #17 permanece aberto e Draft; não fazer merge enquanto os critérios qualitativos obrigatórios estiverem pendentes.

