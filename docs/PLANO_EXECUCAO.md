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
