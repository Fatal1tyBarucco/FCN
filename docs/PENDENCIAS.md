# PENDÊNCIAS — Apostila Web Interativa FCN

1. Referências verificadas em 2026-10-23: Microsoft Learn (M1), RFC 791/793 (M2), CERT.br (M4), ANPD (M4). URLs em referencias/referencias-verificadas.md e references.js. Ainda pendentes: demais incisos do CF art. 37/art. 5º, dispositivos citados apenas por remissão no M6, demais RFCs (DNS, DHCP, HTTP, TLS etc.).
2. Vídeos: 0 publicados como validados (decisão intencional; nenhum inventado).
3. Service Worker: arquivo válido (node --check OK) e registro condicional; registro em navegador real não confirmado (sem exceções JS em headless).
4. Accessibility container vazio em headless (verificar em navegador real; propósito screen reader).
5. Commitar alterações pendentes e abrir PR (fluxo branches+PR).
6. Sincronizar inventario/ e matriz/ (raiz) com apostila-ia/ (cópias) a cada mudança.
7. FASE 1 (2026-10-23): Escrita.txt lida integralmente (1207 linhas, 12 seções). Inventário (427 nós), matriz (365 questões/404 flashcards/5 simuladores) e plano confirmados; todos 8 docs em docs/ atualizados.
8. FASE 2 (2026-10-23): Repo inspecionado — M1–M8 renderizam (AGENTS.md verificado), 38 tags <script>, 365 questões, 400 flashcards, 5 simuladores, 5 gráficos, persistência (storage.js), referências (references.js), busca (search.js), áudio (audio.js), PWA (manifest + SW). Nenhum arquivo de código modificado ainda (Fase 3 em início).
9. FASE 3 INICIADA (2026-10-23, orquestrador multiagente): arquitetura e infraestrutura funcional — preservar funcionalidades válidas do repo (navigation.js, quiz-engine.js, simuladores) e implementar conforme requisitos não atendidos (referências pendentes, testes headless de busca/áudio/accessibility, sincronia docs↔apostila-ia). Subagentes delegados: arquiteto (planejamento), conteudo (currículo didático), programa (implementação HTML/JS), revisor (auditoria independente). Nenhum subagente ainda executado — aguardando divisão de tarefas conforme contrato de trabalho.
