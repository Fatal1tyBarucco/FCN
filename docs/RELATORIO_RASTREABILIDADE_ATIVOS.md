# Relatório de rastreabilidade de flashcards e questões

**Data:** 2026-10-25  
**Repositório:** `Fatal1tyBarucco/FCN`  
**Branch:** `feat/fase-1-orquestracao-20261025`  
**Script:** `scripts/audit_learning_assets.mjs`  
**Execução reproduzível:** [GitHub Actions — validação e auditorias](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246314488)

## Resultado estrutural

- Tópicos curriculares reconhecidos: **132**.
- Flashcards reconhecidos: **460**.
- Questões reconhecidas: **365**.
- Ativos com referência apenas à unidade curricular: **108 questões**.
- Referências sem associação curricular reconhecível: **0**.
- A execução foi concluída com sucesso no GitHub Actions; os arquivos CSV gerados foram preservados no artefato `curriculum-audit-reports` dessa execução.

## Associação direta por módulo

| Módulo | Tópicos | Flashcards associados diretamente | Questões associadas diretamente | Tópicos sem questão associada diretamente |
|---|---:|---:|---:|---:|
| M1 — Microsoft 365 | 23 | 66 | 28 | 10 |
| M2 — Redes | 19 | 56 | 40 | 15 |
| M3 — Comunicação e colaboração | 14 | 68 | 40 | 9 |
| M4 — Segurança e governança | 13 | 54 | 9 | 10 |
| M5 — Inteligência artificial | 13 | 66 | 20 | 5 |
| M6 — Ética e responsabilidade digital | 18 | 50 | 40 | 4 |
| M7 — Engenharia de dados | 9 | 50 | 40 | 0 |
| M8 — Visualização e storytelling | 23 | 50 | 40 | 0 |

A coluna “questões associadas diretamente” conta apenas questões que apontam para um tópico curricular identificável. As questões vinculadas somente à unidade não foram distribuídas artificialmente entre os tópicos.

## Referências de questão que apontam somente para a unidade

| Unidade curricular | Quantidade | IDs |
|---|---:|---|
| M1 — Unidade 3 | 3 | q-m1-30 a q-m1-32 |
| M1 — Unidade 4 | 5 | q-m1-26, q-m1-27, q-m1-36, q-m1-37, q-m1-40 |
| M1 — Unidade 5 | 4 | q-m1-28, q-m1-29, q-m1-38, q-m1-39 |
| M4 — Unidade 1 | 7 | q-m4-04 a q-m4-10 |
| M4 — Unidade 2 | 7 | q-m4-14 a q-m4-20 |
| M4 — Unidade 3 | 7 | q-m4-24 a q-m4-30 |
| M4 — Unidade 4 | 55 | q-m4-31 a q-m4-85 |
| M5 — Unidade 1 | 8 | q-m5-03 a q-m5-10 |
| M5 — Unidade 2 | 10 | q-m5-14 a q-m5-20 e q-m5-38 a q-m5-40 |
| M5 — Unidade 4 | 2 | q-m5-30 e q-m5-33 |
| **Total** | **108** | — |

## Interpretação e ações pendentes

1. Os 108 registros apontam para IDs de unidade válidos, portanto não são referências inexistentes; porém, a granularidade é insuficiente para provar cobertura de um tópico específico.
2. Revisar e, quando a evidência do conteúdo permitir, associar cada questão ao tópico mais específico. Não alterar gabaritos nem conteúdo técnico apenas para satisfazer o mapeamento.
3. Revisar os tópicos marcados sem questão direta; a ausência de associação é um sinal para revisão, não prova automática de que não haja cobertura indireta.
4. A matriz CSV detalhada é gerada por `node scripts/audit_learning_assets.mjs` e está no artefato `curriculum-audit-reports`. O script pode regenerá-la na raiz do repositório.
5. Esta auditoria é estrutural. Não certifica qualidade pedagógica, correção de gabaritos, atualidade de fontes, comportamento em navegador, acessibilidade ou compatibilidade integral com `file://`.

## Critérios de validação executados

Na execução indicada acima, passaram:
- `node --check` em todos os arquivos JavaScript de `apostila-ia/assets`;
- `scripts/audit_curriculum_matrix.mjs`;
- `scripts/audit_learning_assets.mjs`;
- `verificacao/verificar-estrutura.js`, com **0 falhas estruturais**.

A validação de navegador real e a revisão semântica independente permanecem pendentes.
