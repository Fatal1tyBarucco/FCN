# Distribuição de gabaritos — banco de 399 questões (M1–M8)

Data da auditoria: 2026-10-27. Revisor independente (não autor do conteúdo).
Escopo: `apostila-ia/assets/data/questions*.js` (questions.js M1–M3 + questions_m4…m8).
Regra aplicada: **não alterar gabarito correto apenas para equilibrar**; correção de gabarito somente quando o item estava objetivamente errado.

## 1. Método

1. Carregamento via `node`/`vm` de todos os seis arquivos (sem `eval`), fusão dos bancos por módulo.
2. Contagem por módulo e por formato (`mc` vs `ce`).
3. Para MC: contagem por letra do gabarito (A–E) e percentual sobre o total MC do módulo.
4. Para CE: contagem de `certo` vs `errado`.
5. Verificação automatizada de consistência entre `gabarito` e `analise` (marcador `CORRETA`/`INCORRETA` por alternativa) em todos os itens MC.
6. `node --check` em todos os `questions*.js`.

## 2. Consolidado por módulo e formato

| Módulo | Total | MC | CE | MC (%) | CE (%) |
|---|---:|---:|---:|---:|---:|
| M1 | 44 | 26 | 18 | 59,1 | 40,9 |
| M2 | 54 | 37 | 17 | 68,5 | 31,5 |
| M3 | 47 | 31 | 16 | 66,0 | 34,0 |
| M4 | 85 | 84 | 1 | 98,8 | 1,2 |
| M5 | 42 | 40 | 2 | 95,2 | 4,8 |
| M6 | 47 | 37 | 10 | 78,7 | 21,3 |
| M7 | 40 | 33 | 7 | 82,5 | 17,5 |
| M8 | 40 | 36 | 4 | 90,0 | 10,0 |
| **Total** | **399** | **324** | **75** | **81,2** | **18,8** |

## 3. Distribuição por letra (MC) por módulo

| Módulo | n MC | A | B | C | D | E | Letra dominante (>30%) | Zero |
|---|---:|---:|---:|---:|---:|---:|---|---|
| M1 | 26 | 4 (15,4%) | 11 (42,3%) | 5 (19,2%) | 5 (19,2%) | 1 (3,8%) | B | — |
| M2 | 37 | 8 (21,6%) | 15 (40,5%) | 8 (21,6%) | 3 (8,1%) | 3 (8,1%) | B | — |
| M3 | 31 | 3 (9,7%) | 13 (41,9%) | 11 (35,5%) | 2 (6,5%) | 2 (6,5%) | B, C | — |
| M4 | 84 | 22 (26,2%) | 22 (26,2%) | 16 (19,0%) | 12 (14,3%) | 12 (14,3%) | — | — |
| M5 | 40 | 13 (32,5%) | 14 (35,0%) | 4 (10,0%) | 5 (12,5%) | 4 (10,0%) | A, B | — |
| M6 | 37 | 14 (37,8%) | 7 (18,9%) | 7 (18,9%) | 7 (18,9%) | 2 (5,4%) | A | — |
| M7 | 33 | 12 (36,4%) | 0 (0,0%) | 13 (39,4%) | 4 (12,1%) | 4 (12,1%) | A, C | B |
| M8 | 36 | 4 (11,1%) | 13 (36,1%) | 7 (19,4%) | 11 (30,6%) | 1 (2,8%) | B, D | — |

Concentração global MC (324 itens): A=80 (24,7%), B=83 (25,6%), C=71 (21,9%), D=55 (17,0%), E=35 (10,8%).

## 4. Certo/Errado (CE) por módulo

| Módulo | n CE | certo | errado |
|---|---:|---:|---:|
| M1 | 18 | 9 | 9 |
| M2 | 17 | 10 | 7 |
| M3 | 16 | 13 | 3 |
| M4 | 1 | 0 | 1 |
| M5 | 2 | 0 | 2 |
| M6 | 10 | 1 | 9 |
| M7 | 7 | 3 | 4 |
| M8 | 4 | 4 | 0 |
| **Total** | **75** | **40** | **35** |

Observação: M3 (13 certo/3 errado) e M8 (4 certo/0 errado) apresentam concentração de `certo`; M6 (1 certo/9 errado) concentra `errado`. São itens CE autorais; a concentração não implica erro, mas recomenda-se balancear em revisões futuras por reformulação de enunciado, não por troca de gabarito.

## 5. Concentrações suspeitas (MC)

Critério: letra com >30% no módulo ou ausência total (0) de uma letra em módulo com ≥20 MC.

- **M1**: B = 42,3% (11/26); E = 3,8% (1/26). Suspeita de concentração em B e sub-representação de E.
- **M2**: B = 40,5% (15/37); D/E = 8,1% cada. Concentração em B.
- **M3**: B = 41,9% e C = 35,5%; D/E = 6,5% cada. Concentração em B/C.
- **M5**: A = 32,5%, B = 35,0%; C/D/E ≤ 12,5%. Concentração em A/B.
- **M6**: A = 37,8%; E = 5,4%. Concentração em A.
- **M7**: A = 36,4%, C = 39,4%; B = 0 (zero). Concentração em A/C e ausência total de B (após correção dos gabaritos — ver §7).
- **M8**: B = 36,1%, D = 30,6%; E = 2,8%. Concentração em B/D.
- **M4**: distribuição relativamente equilibrada (A=B=26,2%); sem concentração suspeita.

## 6. Questões com concentração suspeita (IDs)

Lista dos itens cujo gabarito é a letra dominante do módulo (>30%). Recomendação: **manter o gabarito**; avaliar, em revisão futura, reordenação das alternativas e/ou reformulação de distratores para distribuir a posição da alternativa correta, sem alterar o conteúdo correto.

**M1 — B (11):** q-m1-07, q-m1-11, q-m1-16, q-m1-21, q-m1-23, q-m1-26, q-m1-28, q-m1-31, q-m1-33, q-m1-36, q-m1-39.

**M2 — B (15):** q-m2-01, q-m2-04, q-m2-09, q-m2-13, q-m2-14, q-m2-16, q-m2-24, q-m2-27, q-m2-28, q-m2-30, q-m2-31, q-m2-33, q-m2-43, q-m2-48, q-m2-53.

**M3 — B (13):** q-m3-05, q-m3-15, q-m3-16, q-m3-18, q-m3-23, q-m3-25, q-m3-27, q-m3-31, q-m3-32, q-m3-33, q-m3-35, q-m3-37, q-m3-44.
**M3 — C (11):** q-m3-01, q-m3-03, q-m3-06, q-m3-09, q-m3-11, q-m3-12, q-m3-13, q-m3-19, q-m3-29, q-m3-39, q-m3-45.

**M5 — A (13):** q-m5-22, q-m5-23, q-m5-28, q-m5-29, q-m5-30, q-m5-31, q-m5-32, q-m5-34, q-m5-36, q-m5-37, q-m5-38, q-m5-39, q-m5-40.
**M5 — B (14):** q-m5-08, q-m5-10, q-m5-11, q-m5-12, q-m5-14, q-m5-15, q-m5-16, q-m5-19, q-m5-20, q-m5-21, q-m5-24, q-m5-25, q-m5-35, q-m5-42.

**M6 — A (14):** q-m6-06, q-m6-10, q-m6-13, q-m6-17, q-m6-21, q-m6-23, q-m6-25, q-m6-28, q-m6-31, q-m6-32, q-m6-34, q-m6-37, q-m6-38, q-m6-40.

**M7 — A (12):** q-m7-21, q-m7-26, q-m7-28, q-m7-29, q-m7-31, q-m7-33, q-m7-34, q-m7-35, q-m7-36, q-m7-37, q-m7-38, q-m7-40.
**M7 — C (13):** q-m7-02, q-m7-03, q-m7-06, q-m7-07, q-m7-08, q-m7-09, q-m7-10, q-m7-11, q-m7-13, q-m7-15, q-m7-18, q-m7-24, q-m7-25.
(M7 não possui nenhum item com gabarito B — ausência total.)

**M8 — B (13):** q-m8-08, q-m8-11, q-m8-14, q-m8-20, q-m8-28, q-m8-29, q-m8-30, q-m8-31, q-m8-32, q-m8-35, q-m8-36, q-m8-38, q-m8-39.
**M8 — D (11):** q-m8-03, q-m8-04, q-m8-09, q-m8-13, q-m8-16, q-m8-17, q-m8-19, q-m8-23, q-m8-26, q-m8-33, q-m8-34.

## 7. Verificação de gabaritos (erros encontrados e corrigidos)

Verificação automatizada (`gabarito` × marcador `CORRETA`/`INCORRETA` em `analise`) identificou **5 itens MC do M7 cujo gabarito declarado não correspondia à alternativa marcada como CORRETA na própria análise/justificativa**. Corrigidos (gabarito alterado para a letra efetivamente correta; justificativa e análise já estavam corretas e não foram alteradas):

| ID | Gabarito anterior | Gabarito corrigido | Justificativa resumida |
|---|---|---|---|
| q-m7-01 | B | E | Número isolado sem unidade/paciente/data é "dado" (nível Dado do DIKW). |
| q-m7-04 | B | E | Conhecimento = informação + experiência + julgamento. |
| q-m7-05 | B | D | Discernimento sobre consequências e valores = sabedoria. |
| q-m7-07 | B | C | Tabela tipada = estruturado; JSON = semiestruturado; vídeo = não estruturado. |
| q-m7-11 | B | C | Valor 'XX' fora do domínio de UF = validade (verificação interna). |

Efeito colateral observado: após a correção, o M7 passa a ter **zero itens com gabarito B** (a letra B era justamente a incorreta nos 5 itens acima). Essa ausência é, portanto, consequência da correção de erro, não de balanceamento — e não justifica criar itens B artificialmente.

Nenhum outro item apresentou inconsistência entre gabarito e análise. Nenhum gabarito foi alterado por motivo de balanceamento.

## 8. Ações tomadas

1. Correção dos 5 gabaritos listados em §7 em `apostila-ia/assets/data/questions_m7.js`.
2. Nenhuma alteração de enunciado, alternativas, distratores ou gabaritos para fins de balanceamento.
3. `node --check` executado em todos os `assets/data/questions*.js` — todos OK.
4. Relatório gerado em `docs/DISTRIBUICAO_GABARITOS_2026-10-27.md`.

## 9. Recomendações (próximos passos, sem alterar gabaritos corretos)

- Revisar, em futura passada editorial, os itens listados em §6 para **reordenar alternativas** (mudar a posição da alternativa correta) e/ou **reformular distratores**, de modo a reduzir a concentração de letras, preservando o gabarito correto e o conteúdo técnico.
- Aumentar a variedade de letras corretas em novos itens (M4 e M8 já relativamente equilibrados; M7 precisa incluir B em novos itens).
- Balancear CE em M3 (excesso de `certo`), M6 (excesso de `errado`) e M8 (só `certo`).
- Não usar a distribuição de letras como critério de correção de gabarito.

## 10. Verificação final

- `node --check`: OK em `questions.js`, `questions_m4.js`, `questions_m5.js`, `questions_m6.js`, `questions_m7.js`, `questions_m8.js`.
- Total de questões inalterado: 399 (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40).
- Commit/push: não realizado (conforme solicitado).
