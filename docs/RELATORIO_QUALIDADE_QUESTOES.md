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
| A | 149 |
| B | 129 |
| C | 26 |
| D | 5 |
| E | 5 |

As 24 questões novas foram balanceadas em suas posições corretas (A=4, B=5, C=5, D=5, E=5), sem alterar o texto das respostas ou as análises. O banco completo ainda apresenta concentração em A/B: essas letras representam 88,5% das 314 questões de múltipla escolha. Isso pode tornar o padrão previsível e exige revisão editorial do banco legado. A distribuição não prova que as respostas individuais estejam incorretas, mas é uma fragilidade de desenho de avaliação.

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
| M7 | 33 | 0 | 0 | 0 | 0 | 33 |
| M8 | 10 | 25 | 1 | 0 | 0 | 36 |

A auditoria recomenda revisão manual de posições em M1, M4, M5, M6, M7 e M8. Em M6 e M7, todas as questões de múltipla escolha têm gabarito A; em M4, M5 e M8, a concentração em A/B também é extrema. O lote de 24 questões novas foi balanceado, mas isso não corrige automaticamente o banco legado.

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
- Distribuição esperada do M7 após o piloto: A=32, E=1 nas 33 questões de múltipla escolha contabilizadas no relatório anterior. Reexecutar a auditoria para confirmar.
