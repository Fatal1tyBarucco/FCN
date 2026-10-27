# Auditoria heurística de qualidade estrutural das questões

Gerado por scripts/audit_question_quality.mjs. Este relatório sinaliza candidatos para revisão; não valida automaticamente a verdade das respostas nem substitui revisão pedagógica independente.

- Questões lidas: **399**.
- IDs duplicados: **0**.
- Questões com pelo menos um alerta heurístico: **0**.
- Pares com contexto + enunciado idênticos: **0**.
- Distribuição por módulo: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.
- Distribuição de gabaritos (incluindo C/E): D=48, errado=35, A=80, certo=40, C=69, B=100, E=27.
- Distribuição de gabaritos MC (A-E): A=80, B=100, C=69, D=48, E=27.

## Distribuição de gabaritos MC por módulo

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1|4|11|5|5|1|26|
| M2|8|15|8|3|3|37|
| M3|3|13|11|2|2|31|
| M4|22|22|16|12|12|84|
| M5|13|14|4|5|4|40|
| M6|14|7|7|7|2|37|
| M7|12|5|11|3|2|33|
| M8|4|13|7|11|1|36|
- Distribuição de formato: mc=324, ce=75.

## Alertas

Nenhum alerta heurístico detectado.

## Pares com contexto e enunciado idênticos

Nenhum par idêntico detectado.

## Limitações

- Uma questão sem alerta ainda pode conter erro factual, ambiguidade, gabarito incorreto ou distrator fraco.
- Alertas de fonte, denominação legal e duplicação exigem avaliação humana do contexto.
- A distribuição de letras do gabarito é descritiva e não prova qualidade nem viés por si só.

## Trocas de posição de alternativas (rodada 2 — 2026-10-27)

Segunda rodada de rebalanceamento editorial, conforme tarefa do orquestrador: reduzir concentração residual em M8 (B) e M1 (B), movendo o gabarito correto para letras sub-representadas (D/E), sem alterar conteúdo semântico, enunciado ou análise. Apenas a POSIÇÃO de duas alternativas completas (texto + análise) foi trocada, remapeando `gabarito` e `analise`. Questões cujas alternativas ou justificativas referenciavam letras foram excluídas ou tiveram as referências mecânicas atualizadas ("alternativa B" → "alternativa D").

Verificação: `node --check` nos 2 arquivos alterados (OK); `scripts/audit_question_quality.mjs` com 0 divergências gabarito×análise e 0 alertas.

Total desta rodada: 8 trocas (M8=5, M1=3). Acumulado: 26 + 8 = 34 trocas.

| Módulo | ID | Troca | Observação |
|---|---|---|---|
| M8 | q-m8-16 | B→D | justificativa atualizada (alternativa B → D) |
| M8 | q-m8-17 | B→D | justificativa atualizada |
| M8 | q-m8-23 | B→D | justificativa atualizada |
| M8 | q-m8-26 | B→D | justificativa atualizada |
| M8 | q-m8-34 | B→D | sem referência a letras (sem ajuste textual) |
| M1 | q-m1-09 | B→D | sem referência a letras |
| M1 | q-m1-20 | B→D | sem referência a letras |
| M1 | q-m1-41 | B→E | sem referência a letras (swap B↔E) |

Distribuição após esta rodada (MC): M8 B=13, D=11, E=1; M1 B=11, D=5, E=1. M1/M8 ainda concentram B; novas rodadas podem ser necessárias, mas somente com questões sem auto-referência a letras.
