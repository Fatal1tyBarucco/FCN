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
