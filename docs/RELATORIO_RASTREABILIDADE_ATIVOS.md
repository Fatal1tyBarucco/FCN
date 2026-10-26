# Relatório de rastreabilidade de flashcards e questões

**Data:** 2026-10-26  
**Repositório:** `Fatal1tyBarucco/FCN`  
**Branch:** `feat/fase-1-orquestracao-20261025`  
**Auditoria:** `scripts/audit_learning_assets.mjs`  
**Execução aprovada:** [GitHub Actions — auditoria estrutural e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247679289)

## Resultado estrutural atual

- Tópicos curriculares reconhecidos: **132**.
- Flashcards reconhecidos: **460**.
- Questões reconhecidas: **365**.
- Questões vinculadas somente a uma unidade, sem tópico: **0**.
- Referências sem associação curricular reconhecível: **0**.
- Questões com referência direta a tópico: **365/365**.
- Flashcards com referência direta a tópico: **460/460**.

O resultado significa que as referências apontam para IDs de tópicos existentes. Não certifica que cada questão seja pedagogicamente correta, tenha gabarito correto ou esteja perfeitamente alinhada ao tópico.

## Associação direta por módulo

| Módulo | Tópicos | Flashcards associados | Questões associadas | Tópicos sem questão direta |
|---|---:|---:|---:|---:|
| M1 — Microsoft 365 | 23 | 66 | 40 | 6 |
| M2 — Redes | 19 | 56 | 40 | 15 |
| M3 — Comunicação e colaboração | 14 | 68 | 40 | 9 |
| M4 — Segurança e governança | 13 | 54 | 85 | 0 |
| M5 — Inteligência artificial | 13 | 66 | 40 | 2 |
| M6 — Ética e responsabilidade digital | 18 | 50 | 40 | 4 |
| M7 — Engenharia de dados | 9 | 50 | 40 | 0 |
| M8 — Visualização e storytelling | 23 | 50 | 40 | 0 |

A ausência de questão diretamente associada a um tópico é um sinal para revisão, não prova automática de ausência de cobertura indireta. Os tópicos sem questão direta identificados pelo script são 6 no M1, 15 no M2, 9 no M3, 2 no M5 e 4 no M6.

## Correções de rastreabilidade desta etapa

As 96 questões restantes no relatório anterior foram associadas a tópicos curriculares depois da conferência de seus assuntos e enunciados:

- M4: 76 questões anteriormente vinculadas somente às unidades 1, 2, 3 e 4, incluindo questões de segurança geral que foram realocadas ao tópico conceitualmente correspondente; questões legais permaneceram nos tópicos de legislação.
- M5: 20 questões sobre fundamentos de IA, preparação de dados, métricas e engenharia de prompts foram associadas aos tópicos correspondentes.
- A lista completa dos IDs e seus tópicos de destino está em `docs/DECISOES_RASTREABILIDADE_QUESTOES.md`.

## Revisão qualitativa de legislação

A consulta direta a fontes oficiais revelou que a Lei nº 15.352/2026 alterou a denominação institucional para **Agência Nacional de Proteção de Dados (ANPD)**. Também foram corrigidas questões com referência constitucional imprecisa, direitos da LGPD apresentados sem limites, descrição excessivamente ampla da LAI e confusão entre direitos do titular e responsabilidades dos agentes de tratamento.

As questões atualizadas são q-m4-34, q-m4-35, q-m4-36, q-m4-37, q-m4-40, q-m4-41 e q-m4-43. O módulo M6 também teve as definições do art. 5º, os papéis do setor público, as exceções do art. 4º e a lista numerada de direitos do art. 18 corrigidos conforme o texto vigente. A Lei nº 15.352/2026 foi incluída no catálogo de fontes da aplicação. Evidência e URLs primárias: `referencias/referencias-verificadas.md` e `apostila-ia/assets/data/references.js`.

## Critérios de validação executados

Na execução aprovada acima:
- `node --check` passou para os arquivos JavaScript em `apostila-ia/assets`;
- `scripts/audit_curriculum_matrix.mjs` passou;
- `scripts/audit_learning_assets.mjs` passou, com 132 tópicos, 460 flashcards, 365 questões, 0 referências somente à unidade e 0 referências desconhecidas;
- `verificacao/verificar-estrutura.js` passou, com 0 falhas estruturais;
- Playwright/Chromium headless abriu a aplicação via `file://`, renderizou 8 módulos, 460 flashcards, 365 questões, 5 SVGs e os contêineres dos 6 simuladores, validou round-trip de `localStorage` e não registrou exceções JavaScript.

## Limitações e próximos passos

1. Revisar qualitativamente os 365 enunciados, gabaritos, justificativas, distratores e fontes. O mapeamento estrutural não equivale à aprovação semântica.
2. Criar ou revisar questões específicas para os 36 tópicos sem questão diretamente associada.
3. Validar interações completas dos simuladores, backup/importação, navegação por teclado, leitores de tela, WCAG 2.1 AA e Service Worker em HTTP/HTTPS.
4. Revisar as referências legais e técnicas do projeto diante de alterações normativas recentes.
