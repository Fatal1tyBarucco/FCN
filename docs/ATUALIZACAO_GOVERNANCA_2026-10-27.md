# ATUALIZAÇÃO DE GOVERNANÇA — 2026-10-27

PENDÊNCIA #3 do `Escrita.txt`: reconciliar documentos de governança com os resultados confirmados por delegações anteriores.

## Edições aplicadas

### 1. `inventario/INVENTARIO_CURRICULAR.md` (raiz) — nenhuma alteração numérica

- Trecho verificado (já correto): seção 4.1, linha `**Total** | — | **37** | **132** | **295** | **427** | **888** | **592** | **460** | **399** | —` e linhas por módulo com M4=85, M5=42, M6=47, M7=40, M8=40.
- Motivo: o arquivo já refletia 399 questões e M7=40. Nenhuma edição aplicada.

### 2. `matriz/MATRIZ_COBERTURA.md` (raiz) — nenhuma alteração numérica

- Trecho verificado (já correto): bloco TOTAL GLOBAIS com `Questões: **399/320** ... M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40`.
- Motivo: o arquivo já refletia os totais confirmados. Nenhuma edição aplicada.

### 3. `docs/PENDENCIAS.md` — seção adicionada (fim do arquivo)

- Trecho antigo (final): `- Pendentes mantidos: P2-1, P2-2, P2-3, P1-2, P1-3, P1-4.`
- Trecho novo (acrescentado após a linha acima):

```
## Atualização de governança — 2026-10-27 (PENDÊNCIA #3)

- (a) 399 itens confirmados no banco de questões autorais: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40 (324 múltipla escolha + 75 certo/errado). Evidência: semantico.json.
- (b) M7 = 40 itens (não 33): questions_m7.js contém q-m7-01..q-m7-40; os 33 referem-se apenas às questões de múltipla escolha do módulo. Evidência: semantico.json, m7_balanceamento_aplicado.json.
- (c) 2 correções semânticas aplicadas: q-m6-01 (questions_m6.js) e q-m8-13 (questions_m8.js); node --check OK. Evidência: relatorio_correcoes_semanticas.json.
- (d) Balanceamento de gabaritos rejeitado para M7: proposta com 42 conversões (subagente A) não aplicada; 10 candidatos rejeitados em M7; nenhum arquivo de questão editado. Política docs/DISTRIBUICAO_GABARITOS_2026-10-27.md mantida.
- (e) Referências de evidência: semantico.json, m7_balanceamento_aplicado.json, relatorio_correcoes_semanticas.json.
```

## Totais confirmados

- Questões autorais: **399** — M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.
- M7: **40** itens (33 múltipla escolha + 7 certo/errado).
- Correções semânticas aplicadas: q-m6-01, q-m8-13.
- Balanceamento: rejeitado para M7; nenhuma edição em arquivos de questão.

## Evidências (arquivos existentes no workspace)

- `semantico.json` — contagem real de 399 itens e observação sobre M7=40.
- `m7_balanceamento_aplicado.json` — 10 candidatos rejeitados, nenhuma edição.
- `relatorio_correcoes_semanticas.json` — 2 correções semânticas aplicadas (q-m6-01, q-m8-13).

Nenhuma URL, data ou resultado de teste foi inventado; apenas arquivos existentes no workspace são citados.