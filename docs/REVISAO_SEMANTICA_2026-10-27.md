# Revisão semântica — 399 questões (2026-10-27)

Escopo: P0-1 (fonte externa verificável) + P0-4 (revisão semântica independente) do backlog real.

## 1. Fontes adicionadas (P0-1)

Auditoria dos 102 IDs listados no backlog (M7 q-m7-01..40, M8 q-m8-01..40, M2 q-m2-41..54, M3 q-m3-41/43/44/45/46/47, M5 q-m5-41/42) mostrou que 101 já possuíam fonte com URL + órgão + data. Apenas 1 questão não tinha fonte externa:

| ID | Título | Órgão | URL | Data de verificação |
|---|---|---|---|---|
| q-m3-45 | Advanced security settings (Waiting Room, passcode, autenticação) | Zoom Support | https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061300 | 2026-10-27 |

Arquivo alterado: `apostila-ia/assets/data/questions.js` (campo `fonte` de q-m3-45). Nenhuma URL inventada: HTTP 200 confirmado em 2026-10-27.

## 2. Revisão semântica (P0-4)

Todos os 399 IDs do banco foram revisados (enunciado, gabarito, distratores, justificativa, profundidade, aderência curricular) a partir do currículo e fontes citadas. Distribuição: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.

IDs revisados (por módulo):
- M1: q-m1-01..q-m1-44
- M2: q-m2-01..q-m2-54
- M3: q-m3-01..q-m3-47
- M4: q-m4-01..q-m4-85
- M5: q-m5-01..q-m5-42
- M6: q-m6-01..q-m6-47
- M7: q-m7-01..q-m7-40
- M8: q-m8-01..q-m8-40

Resultado: nenhum gabarito alterado. Correções aplicadas: apenas a fonte de q-m3-45 (item 1). Ajustes de justificativa/analysis mantidos conforme revisões anteriores registradas em `docs/RELATORIO_QUALIDADE_QUESTOES.md`; nenhuma correção nova de conteúdo foi necessária nesta rodada.

## 3. Validação

- `node --check` em todos os JS alterados: OK (questions.js).
- Estrutura: 399 questões, 0 IDs duplicados, 0 alertas heurísticos (RELATORIO_QUALIDADE_QUESTOES.md).

## 4. Observações

- Gabaritos mantidos integralmente; não houve rebalanceamento artificial (P1-1 permanece pendente).
- Fontes externas verificadas por presença de URL + órgão + data; validação HTTP individual (P2-4) permanece pendente.
