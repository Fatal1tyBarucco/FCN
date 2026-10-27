# Auditoria heurística de qualidade estrutural das questões

Gerado por scripts/audit_question_quality.mjs. Este relatório sinaliza candidatos para revisão; não valida automaticamente a verdade das respostas nem substitui revisão pedagógica independente.

- Questões lidas: **399**.
- IDs duplicados: **0**.
- Questões com pelo menos um alerta heurístico: **0**.
- Pares com contexto + enunciado idênticos: **0**.
- Distribuição por módulo: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.
- Distribuição de gabaritos (incluindo C/E): D=41, errado=35, A=83, certo=40, C=69, B=104, E=27.
- Distribuição de gabaritos MC (A-E): A=83, B=104, C=69, D=41, E=27.

## Distribuição de gabaritos MC por módulo

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1|7|10|5|3|1|26|
| M2|8|15|8|3|3|37|
| M3|3|13|11|2|2|31|
| M4|22|22|16|12|12|84|
| M5|13|14|4|5|4|40|
| M6|14|7|7|7|2|37|
| M7|12|5|11|3|2|33|
| M8|4|18|7|6|1|36|
- Distribuição de formato: mc=324, ce=75.

## Alertas

Nenhum alerta heurístico detectado.

## Pares com contexto e enunciado idênticos

Nenhum par idêntico detectado.

## Limitações

- Uma questão sem alerta ainda pode conter erro factual, ambiguidade, gabarito incorreto ou distrator fraco.
- Alertas de fonte, denominação legal e duplicação exigem avaliação humana do contexto.
- A distribuição de letras do gabarito é descritiva e não prova qualidade nem viés por si só.

## Trocas de posição de alternativas (2026-10-27)

Rebalanceamento editorial controlado recomendado pela revisão independente (docs/REVISAO_INDEPENDENTE_FONTE_2026-10-27.md, seção 5). Troca-se apenas a POSIÇÃO de duas alternativas completas (texto + análise), remapeando `gabarito` e `analise`, SEM alterar o conteúdo semântico da resposta correta. Nenhum gabarito correto foi alterado. Verificado: `node --check` nos 4 arquivos alterados (OK) e `scripts/audit_question_quality.mjs` (0 divergências gabarito×análise, 0 alertas).

Total: 26 trocas aplicadas (M7=5, M1=5, M6=5, M4=5, M8=6). Questões com gabarito inexistente na letra alvo (sem alternativa E, etc.) foram substituídas por equivalentes sem auto-referência a letras.

| Módulo | ID | Troca | Observação |
|---|---|---|---|
| M7 | q-m7-01 | E→B | |
| M7 | q-m7-04 | E→B | |
| M7 | q-m7-05 | D→B | |
| M7 | q-m7-07 | C→B | |
| M7 | q-m7-11 | C→B | |
| M1 | q-m1-18 | B→D | |
| M1 | q-m1-41 | B→E | |
| M1 | q-m1-07 | B→A | |
| M1 | q-m1-09 | B→A | |
| M1 | q-m1-11 | B→A | |
| M6 | q-m6-01 | C→B | |
| M6 | q-m6-04 | C→B | |
| M6 | q-m6-19 | A→B | |
| M6 | q-m6-08 | A→B | |
| M6 | q-m6-02 | C→B | |
| M4 | q-m4-46 | A→D | |
| M4 | q-m4-47 | A→E | |
| M4 | q-m4-53 | A→C | |
| M4 | q-m4-02 | B→D | |
| M4 | q-m4-05 | B→E | |
| M8 | q-m8-02 | E→C | |
| M8 | q-m8-06 | E→A | |
| M8 | q-m8-13 | B→D | |
| M8 | q-m8-18 | C→A | |
| M8 | q-m8-27 | B→C | |
| M8 | q-m8-33 | B→D | |

Nota: recomendações do revisor que referenciavam questões cujo gabarito atual não correspondia à letra indicada (q-m1-03, q-m1-12, q-m1-22, q-m6-08-original, q-m6-12, q-m4-01/03/06/12/15, q-m8-22) foram substituídas por equivalentes sem auto-referência a letras, preservando o gabarito correto. q-m8-22 (A→E) não foi aplicada por ausência de alternativa E sem auto-referência adequada; pendente.
