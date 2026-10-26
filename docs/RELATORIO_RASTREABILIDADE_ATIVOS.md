# Relatório de rastreabilidade de flashcards e questões

# Atualização estrutural — 2026-10-26 04:05 UTC

- O workflow de CI executou `scripts/audit_learning_assets.mjs` no merge ref do PR #17 e registrou: **132 tópicos, 460 flashcards, 396 questões, 0 ativos apenas em nível de unidade e 0 referências desconhecidas**. O mesmo job identificou **3 tópicos de síntese do M6 sem questão associada**: `m6-u1-t3`, `m6-u4-t3`, `m6-u5-t3`.
- Foram adicionadas as questões autorais `q-m6-45`, `q-m6-46` e `q-m6-47`, uma para cada tópico de síntese identificado. O banco esperado passa a **399 questões**; a nova execução do auditor e a matriz CSV regenerada ainda precisam confirmar esse resultado no commit posterior.
- A execução de CI do commit anterior `cf0087b1d70d0b9d40fa34306d6cf7c4022a7577` concluiu com sucesso: CodeQL, auditoria estática/cobertura e análises JavaScript/TypeScript/Actions. Isso não cobre o commit com as três novas questões.

---

# Snapshot de contagem atualizado — 2026-10-26 04:01 UTC

> Esta seção prevalece sobre os números de snapshots históricos abaixo. O corpo anterior contém resultados de execuções antigas e não deve ser lido como relatório gerado novamente no HEAD atual.

- HEAD consultado antes desta atualização: `cefd7fa005118b37af112b2bf67146ebb26c1163`.
- Contagem estrutural do commit atual: **399 questões esperadas** (145 no arquivo `questions.js`, M4=85, M5=42, M6=47, M7=40 e M8=40). A execução integral de auditoria do novo commit está pendente.
- Distribuição por arquivo: `questions.js` (145; módulos 1–3), M4 (85), M5 (42), M6 (47), M7 (40) e M8 (40).
- Flashcards: **460**, conforme inventário atual do repositório.
- Auditoria estrutural focal dos conteúdos remotos: **396/396 no commit anterior; 399 itens esperados após o patch**; **0** IDs duplicados; **0** referências de tópico não reconhecidas entre as questões. A normalização comparou as referências com os IDs curriculares atuais. Essa verificação não executou `scripts/audit_learning_assets.mjs` nem regenerou a matriz CSV; a matriz completa por tópico ainda requer execução reproduzível do script no ambiente do projeto.
- A execução de CI consultada para o HEAD `cefd7fa...` concluiu com sucesso para os checks configurados, incluindo auditoria estática/cobertura e análises JavaScript/TypeScript/Actions. Isso não certifica a semântica dos enunciados, gabaritos ou fontes.

---

**Data:** 2026-10-26  
**Repositório:** `Fatal1tyBarucco/FCN`  
**Branch:** `feat/fase-1-orquestracao-20261025`  
**Auditoria:** `scripts/audit_learning_assets.mjs`  
**Execução aprovada:** [GitHub Actions — auditoria estrutural e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507)

## Resultado estrutural atual

- Tópicos curriculares reconhecidos: **132**.
- Flashcards reconhecidos: **460**.
- Questões reconhecidas: **389**.
- Questões vinculadas somente a uma unidade, sem tópico: **0**.
- Referências sem associação curricular reconhecível: **0**.
- Questões com referência direta a tópico: **389/389**.
- Flashcards com referência direta a tópico: **460/460**.

O resultado significa que as referências apontam para IDs de tópicos existentes. Não certifica que cada questão seja pedagogicamente correta, tenha gabarito correto ou esteja perfeitamente alinhada ao tópico.

## Associação direta por módulo

| Módulo | Tópicos | Flashcards associados | Questões associadas | Tópicos sem questão direta |
|---|---:|---:|---:|---:|
| M1 — Microsoft 365 | 23 | 66 | 43 | 1 |
| M2 — Redes | 19 | 56 | 54 | 0 |
| M3 — Comunicação e colaboração | 14 | 68 | 47 | 0 |
| M4 — Segurança e governança | 13 | 54 | 85 | 0 |
| M5 — Inteligência artificial | 13 | 66 | 40 | 2 |
| M6 — Ética e responsabilidade digital | 18 | 50 | 40 | 4 |
| M7 — Engenharia de dados | 9 | 50 | 40 | 0 |
| M8 — Visualização e storytelling | 23 | 50 | 40 | 0 |

A ausência de questão diretamente associada a um tópico é um sinal para revisão, não prova automática de ausência de cobertura indireta. Após a correção de referências M1–M3, o script identifica 4 tópicos sem questão direta no M1, 14 no M2, 7 no M3, 2 no M5 e 4 no M6: 31 no total. Sete são nós de síntese/pegadinhas; 24 são tópicos substantivos que merecem receber questões diretas.

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
- `scripts/audit_learning_assets.mjs` passou, com 132 tópicos, 460 flashcards, 389 questões, 0 referências somente à unidade e 0 referências desconhecidas;
- `verificacao/verificar-estrutura.js` passou, com 0 falhas estruturais;
- Playwright/Chromium headless abriu a aplicação via `file://`, renderizou 8 módulos, 460 flashcards, 389 questões, 5 SVGs e os contêineres dos 6 simuladores, validou round-trip de `localStorage` e não registrou exceções JavaScript.

## Limitações e próximos passos

1. Revisar qualitativamente os 389 enunciados, gabaritos, justificativas, distratores e fontes. O mapeamento estrutural não equivale à aprovação semântica.
2. Os 7 tópicos restantes sem questão direta são nós de síntese/revisão, não lacunas substantivas de conteúdo.
3. Validar interações completas dos simuladores, backup/importação, navegação por teclado, leitores de tela, WCAG 2.1 AA e Service Worker em HTTP/HTTPS.
4. Revisar as referências legais e técnicas do projeto diante de alterações normativas recentes.


## Auditoria heurística do banco de questões — 2026-10-26

- Execução aprovada: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.
- Questões lidas: 389; IDs duplicados: 0; pares com contexto e enunciado idênticos: 0; alertas heurísticos após reduzir falsos positivos: 0.
- A matriz heurística completa foi gerada como artefato do workflow.
- Limitação relevante identificada: entre 314 questões de múltipla escolha, distribuição do gabarito A=169, B=124, C=21, D=0, E=0. Isso não altera a correção individual, mas cria um padrão previsível de posição e exige revisão editorial manual antes de usar o banco como simulado de alta fidelidade.


## Achado de qualidade do banco — 2026-10-26

A auditoria heurística leu 389 questões, sem IDs duplicados, sem pares com contexto/enunciado idênticos e sem alertas textuais após a correção dos falsos positivos. Ainda assim, a distribuição global das 314 questões MC é A=149, B=129, C=26, D=5, E=5; A/B representam 88,5%. O lote de 24 questões novas foi balanceado, mas a distribuição do banco legado requer revisão humana. Evidência: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Revisão editorial pendente da distribuição de gabaritos

O relatório heurístico por módulo indica forte concentração de respostas em A/B, incluindo 30/30 gabaritos A em M6 e 33/33 em M7. As 24 questões novas foram balanceadas, mas o banco legado ainda exige revisão manual. Execução mais recente: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Consistência de análise e gabarito

A auditoria heurística comparou os rótulos CORRETA/INCORRETA com os gabaritos quando esse padrão existe e não encontrou incompatibilidades. Isso não substitui revisão factual de cada resposta, distrator e fonte. Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Pendências de precisão de fontes legais no M6

A correção de q-m6-02/q-m6-06 foi validada em https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250565014. A revisão manual ainda precisa corrigir a fonte ou o enquadramento de q-m6-03, q-m6-29, q-m6-31, q-m6-32 e q-m6-38. A auditoria estrutural e heurística não detecta automaticamente citações legais semanticamente desalinhadas.
