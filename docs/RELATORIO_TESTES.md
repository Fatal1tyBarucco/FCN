# RELATÓRIO DE TESTES — Apostila Web Interativa FCN

Data: 2026-10-23
Ambiente: Termux/Android, Chromium 155 headless + CDP, Node.js

## Testes executados

- node --check: 46/46 arquivos .js — 0 falhas.
- verificacao/verificar-estrutura.js: exit 0, 0 falhas (36/36).
- test_simulators.js: 100 PASS, 0 FAIL.
- Chromium headless: 0 exceções JS; 5 logs de inicialização positivos.
- 20 testes interativos CDP: todos PASS (curriculum, módulos, flashcards, simuladores, charts, quiz, progress, accessibility, audio, search, storage, navegação, responsive, file://).
- file:// testado: carrega; manifest CORS bloqueado (documentado); SW não registrado (condicional).

## Contagens verificadas

- Módulos: 8; Unidades: 37; Tópicos: 132; Subtópicos: 295.
- Flashcards: 404; Questões: 365.
- Exemplos: 885; Exercícios: 590.
- Gráficos: 5; Simuladores: 5.

## Limitações documentadas

- favicon 404 corrigido com link icon (2026-10-23).
- manifest CORS em file:// (conhecido).
- SW não testado em navegador real.
- 0 vídeos publicados como validados (decisão intencional).
- accessibility container vazio em headless (propósito screen reader).
