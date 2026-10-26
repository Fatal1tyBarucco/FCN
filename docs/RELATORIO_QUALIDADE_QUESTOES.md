# Relatório heurístico de qualidade das questões

**Data:** 2026-10-26  
**Execução:** [GitHub Actions — validação, auditoria heurística e smoke test](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40249392754)  
**Script:** `scripts/audit_question_quality.mjs`

## Resultado estrutural

- Questões lidas: **389**.
- IDs duplicados: **0**.
- Pares com contexto e enunciado idênticos: **0**.
- Alertas heurísticos após correção das regras de falso positivo: **0**.
- Distribuição por módulo: M1=43, M2=54, M3=47, M4=85, M5=40, M6=40, M7=40, M8=40.
- Formatos: 314 questões de múltipla escolha e 75 itens de certo/errado.

## Achado editorial que exige revisão

Distribuição do gabarito nas 314 questões de múltipla escolha:

| Letra correta | Quantidade |
|---|---:|
| A | 145 |
| B | 129 |
| C | 27 |
| D | 6 |
| E | 7 |

As 24 questões novas foram balanceadas em suas posições corretas (A=4, B=5, C=5, D=5, E=5), sem alterar o texto das respostas ou as análises. O banco completo ainda apresenta concentração em A/B: essas letras representam 87,3% das 314 questões de múltipla escolha. Isso pode tornar o padrão previsível e exige revisão editorial do banco legado. A distribuição não prova que as respostas individuais estejam incorretas, mas é uma fragilidade de desenho de avaliação.

**Ação recomendada:** revisar manualmente cada questão e, quando necessário, reorganizar as alternativas sem alterar a resposta correta, a análise individual nem as justificativas que mencionam letras. Não reequilibrar o gabarito automaticamente sem preservar essas relações.

## Escopo e limitações

A auditoria verifica IDs, estrutura básica, alternativas, gabaritos, análises, duplicação de contexto/enunciado e alguns sinais textuais. Não valida automaticamente fatos, fontes, qualidade pedagógica, ambiguidade ou correção semântica. **Zero alertas heurísticos não significa zero erros.**

A matriz completa por questão está disponível no artefato `curriculum-audit-reports` da execução acima.


## Distribuição por módulo — evidência de 2026-10-26

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1 | 3 | 18 | 3 | 1 | 0 | 25 |
| M2 | 8 | 16 | 8 | 2 | 3 | 37 |
| M3 | 3 | 14 | 10 | 2 | 2 | 31 |
| M4 | 38 | 43 | 3 | 0 | 0 | 84 |
| M5 | 24 | 13 | 1 | 0 | 0 | 38 |
| M6 | 30 | 0 | 0 | 0 | 0 | 30 |
| M7 | 29 | 0 | 1 | 1 | 2 | 33 |
| M8 | 10 | 25 | 1 | 0 | 0 | 36 |

A auditoria recomenda revisão manual de posições em M1, M4, M5, M6, M7 e M8. Em M6, todas as questões de múltipla escolha têm gabarito A; em M7, o lote controlado reduziu a concentração para A=29/33; em M4, M5 e M8, a concentração em A/B também é extrema. O lote de 24 questões novas foi balanceado, mas isso não corrige automaticamente o banco legado.

Evidência e matriz heurística gerada: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507.


## Consistência entre gabarito e rótulo da análise — 2026-10-26

A auditoria heurística também comparou os rótulos CORRETA/INCORRETA nas análises por alternativa com o gabarito declarado. Resultado: **0 incompatibilidades detectadas** nas questões que usam esses rótulos. Isso é uma checagem estrutural de consistência, não prova que o gabarito esteja factualmente correto.


## Limitação da revisão de fontes jurídicas — 2026-10-26

A auditoria heurística não avalia se cada artigo citado sustenta a afirmação. A revisão manual encontrou cinco pendências no M6: q-m6-03, q-m6-29, q-m6-31, q-m6-32 e q-m6-38. Os ajustes de q-m6-02 e q-m6-06 foram aplicados e passaram na execução https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250565014. A revisão legal do módulo permanece aberta.


## Balanceamento editorial controlado — piloto M7 — 2026-10-26

- Questão alterada: `q-m7-01`.
- A alternativa correta foi movida de A para E por troca apenas das posições de resposta “Dado” e “Metadado”.
- Gabarito atualizado para E; análises A/E remapeadas para manter a correspondência entre alternativa e rótulo CORRETA/INCORRETA.
- Enunciado, contexto, justificativa conceitual, regra, pegadinha e fonte foram preservados.
- O piloto é intencionalmente limitado a uma questão. Expandir a permutação somente após CI confirmar a integridade estrutural e após revisar referências a letras dentro de justificativas.
- A auditoria posterior confirmou o piloto: a distribuição de M7 após `q-m7-01` e o lote seguinte é A=29, B=0, C=1, D=1, E=2 nas 33 questões de múltipla escolha.


## Balanceamento editorial controlado — segundo lote M7 — 2026-10-26

- Questões reposicionadas neste lote: `q-m7-04` (A→E), `q-m7-05` (A→D) e `q-m7-07` (A→C).
- Em cada questão, a alternativa correta e sua análise foram movidas juntas; o texto da resposta, o enunciado, o contexto, a justificativa, a regra, a pegadinha e a fonte foram preservados.
- As alternativas foram reordenadas no array pela letra A–E para manter a ordem de apresentação.
- A inspeção dos três blocos não encontrou referências explícitas a letras nas justificativas. Isso não substitui revisão pedagógica do conteúdo.
- Somando o piloto anterior (`q-m7-01`, A→E), a distribuição esperada para as 33 questões MC de M7 passa a A=29, B=0, C=1, D=1, E=2. A execução de CI no HEAD `4df80216f1b0e6f20329a5345468ad56074f8abd` confirmou a integridade estrutural e a distribuição efetiva.
- O balanceamento segue sendo parcial: não foram alterados gabaritos conceituais, apenas posições de alternativas.


## Revalidação do lote M7 — HEAD `4df80216f1b0e6f20329a5345468ad56074f8abd`

- [CI do PR](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254853715) e [CI do push](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851951): **success**.
- Sintaxe validada em 39 arquivos JavaScript; auditorias estruturais e heurísticas concluídas; smoke test Playwright/Chromium em `file://` aprovado, sem erros de página.
- Contagens confirmadas pelo artefato `curriculum-audit-reports`: 132 tópicos reconhecidos, 460 flashcards e 389 questões. A auditoria heurística identificou 0 IDs duplicados, 0 pares idênticos de contexto/enunciado e 0 alertas; isso não equivale a validação semântica.
- Distribuição MC atualizada: A=145, B=129, C=27, D=6, E=7; A/B representam 87,3% das 314 questões MC. M7: A=29, B=0, C=1, D=1, E=2 (33 MC). M6 continua A=30/30.
- Artefato com matrizes CSV e relatórios: `curriculum-audit-reports`, gerado na execução de CI do PR.
