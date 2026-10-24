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
| 6 — Validação curricular | Verificar cobertura e qualidade por unidade | PENDENTE (parte de Fase 6) | A verificação de 3 exemplos por unidade ainda não foi executada automaticamente | Requer auditoria por agente independente (revisor) |
| 7 — Testes técnicos | Carregamento, links, cálculos, gráficos, persistência, acessibilidade, modo direto `file://` | PARCIAL | `node --check` passou para todos os `.js`; smoke test `verify_nodes.js` passou; testes de simulador Excel (111 asserts) passaram; testes de perguntas (deduplicação, campos obrigatórios) passaram | Faltam testes de interface visual completa e de abertura direta (`file://`) em navegador real no dispositivo do usuário |
| 8 — Auditoria final | Matriz de conformidade com todos os critérios de aceite (Seção 18) | PENDENTE | Nenhum arquivo de auditoria final concluído ainda; `audit_results.json` e `final_audit_report.md` existem mas não confirmam todos os 19 critérios | Requer execução da Fase 6-8 com agente independente (`revisor`) |

## Estado atual resumido (sem substituição por placeholders)

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

