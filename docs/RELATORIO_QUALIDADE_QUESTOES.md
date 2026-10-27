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

## Revisão semântica — lote M1 q-m1-01..q-m1-10 (2026-10-27)

- Questões revisadas: 10 (q-m1-01 a q-m1-10).
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, análise de distratores e fonte, contra `assets/data/curriculum.js` (unidade 1.1 e 1.2) e documentação Microsoft citada.
- Alterações de conteúdo: nenhuma. Gabaritos preservados (D, errado, A, certo, C, errado, B, errado, D, errado).
- Fontes: todas as 10 questões possuem campo `fonte` preenchido; nenhuma pendência de fonte registrada neste lote.
- Validação de sintaxe: `node --check assets/data/questions.js` → OK.

## Revisão semântica — lote M1 q-m1-11..q-m1-20 (2026-10-27)

- Questões revisadas: 10 (q-m1-11 a q-m1-20).
- Escopo verificado: enunciado, alternativas, gabarito, justificativa, análise de distratores, regra, pegadinha e fonte, contra `assets/data/curriculum.js` (unidades 1.2 — estilos/sumários, parágrafos/tabulações/listas, quebras de página/seção, referências cruzadas) e documentação Microsoft citada.
- Alterações de conteúdo: nenhuma. Gabaritos preservados (B, errado, C, C, errado, B, certo, D, certo, D).
- Fontes: todas as 10 questões possuem campo `fonte` preenchido; nenhuma pendência de fonte registrada neste lote.
- Validação de sintaxe: `node --check assets/data/questions.js` → OK.
