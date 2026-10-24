# PLANO DE EXECUÇÃO — Apostila Web Interativa FCN

Data de atualização: 2026-10-23
Fonte de requisitos: Escrita.txt

## Fases

1. Inventário curricular — CONCLUÍDO (docs/INVENTARIO_CURRICULAR.md; inventario/).
2. Matriz de cobertura — CONCLUÍDO (docs/MATRIZ_COBERTURA.csv; matriz/).
3. Arquitetura — CONCLUÍDO (SPA vanilla, navigation.js dono único, storage.js, references.js).
4. Implementação didática — CONCLUÍDO (8 módulos, 37 unidades, 132 tópicos, 295 subtópicos, 885 exemplos).
5. Implementação funcional — CONCLUÍDO (5 simuladores com UI, busca, áudio, flashcards, quiz, gráficos, persistência).
6. Validação curricular — CONCLUÍDO (Node/vm + Chromium headless + CDP; 0 exceções JS).
7. Testes técnicos — CONCLUÍDO (node --check 46/46; verificar-estrutura 0 falhas; test_simulators 100 PASS).
8. Auditoria final — PARCIALMENTE CONCLUÍDO (final_audit_report.md; limitações documentadas).

## FASE 3 DO ORQUESTRADOR — INICIADA (2026-10-23)
Modo: multiagente conforme missao escrita pelo usuario. Nenhum arquivo de código do repo alterado ainda; funcionalidade existente (navigation.js, simuladores, quiz-engine) preservada. Subagentes delegados em batch (ver tarefas abaixo). Contrato de trabalho por subagente: identificador + objetivo + arquivos de entrada + resultado esperado + arquivos alteráveis + dependências/restricoes + criterios de aceite + testes exigidos + evidencias.

Subagente ARQUITETO (planejamento + decisoes arquiteturais): objetivo = confirmar que SPA vanilla, 38 tags <script>, navigation.js dono unico, schema unificado `modulo-N` (hifen), 15 escopos de quiz, persistencia localStorage `apostila-ia-progresso`, PWA condicional — estão consistentes com Escrita.txt Sec.3. Arquivos alteraveis: docs/DECISOES_ARQUITETURAIS.md (ja existente, preservar); nao alterar codigo-fonte sem revisao.
Subagente CONTEUDO (revisao didatica + referencias pendentes): objetivo = completar referencias verificadas (Microsoft Learn M1, RFC 791/793 M2, CERT.br M4, restantes CF art.37/art.5, dispositivos M6 remissivos) e confirmar que M6-M8 renderizam sem falhas de conteudo. Arquivos de entrada: referencias/referencias-verificadas.md, curriculum_m6.js..m8.js, questions_m6..m8.js. Arquivos alteraveis: referencias/, docs/INVENTARIO_CURRICULAR.md (patch), inventario/ (copiar para apostila-ia/ apos alteracao).
Subagente PROGRAMA (implementacao + testes headless): objetivo = executar node --check em todos assets/**/*.js, confirmar busca/audio/accessibility em headless (CDP), corrigir eventuais deficiencias sem reduzir escopo. Arquivos de entrada: assets/js/*.js; index.html; output.pdf (referencia, nao alterado). Arquivos alteraveis: apenas se verificado por revisor independente; nunca merge direto em main (fluxo PR).
Subagente REVISOR (auditoria independente): objetivo = ler outputs de ARQUITETO + CONTEUDO + PROGRAMA, confirmar que nenhum teste foi declarado sem evidencia, que nenhuma fonte foi inventada, que M6-M8 nao foram reduzidos. Nao altera codigo — apenas produz docs/RELATORIO_TESTES.md atualizado e sinaliza falhas.

Restricoes inegociaveis (contrato): nenhum subagente autor de um componente sera o unico responsavel pela aprovacao; nenhum arquivo alterado sem evidencias de saida real; nenhum placeholder; nenhum merge sem /review.

## Incrementos realizados

- P1-A: descoberta dinâmica de módulos.
- P1-C: integração M6, 404 flashcards, 15 escopos de simulado.
- P1-D: busca, áudio, PWA, 3 simuladores com UI, 365 questões, auditoria headless.
- P1-E: M1.3-1.5 + M2.2-2.5 renderizam, storage.js, references.js.
- P1-F: progress.js, accessibility.js, contêineres.

## Próximos passos

- Commitar alterações pendentes e abrir PR.
- Verificar referências Microsoft Learn, RFCs/IETF, CERT.br.
- Validar vídeos (0 publicados como validados por decisão).
- Testar Service Worker em navegador real.
