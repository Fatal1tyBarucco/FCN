# Reconciliação de Inventário e Matriz de Cobertura

**Execução:** 2026-11-04T13:25:53.941Z
**Regra:** `apostila-ia/inventario/` e `apostila-ia/matriz/` são a fonte de verdade; `inventario/` e `matriz/` da raiz são espelhos e devem ter SHA-256 idêntico antes de cada publicação no GitHub Pages.
**Script:** `scripts/sincronizar-governanca.mjs` (`--verificar` para auditoria sem escrita)

## Resultado da sincronização

- Artefatos verificados: **6** pares (canônico ↔ espelho).
- Pares divergentes: **0**.
- Arquivos copiados nesta execução: **2**.
- Matriz estrutural regenerada a partir do currículo: `scripts/audit_curriculum_matrix.mjs → apostila-ia/matriz/MATRIZ_COBERTURA.csv`.

## SHA-256, mtime e diff por par

| Artefato | Canônico | Espelho | SHA-256 canônico | SHA-256 espelho | Idêntico | mtime canônico | mtime espelho | Linhas (canônico/espelho) |
|---|---|---|---|---|---|---|---|---|
| INVENTARIO_CURRICULAR.md | `apostila-ia/inventario/INVENTARIO_CURRICULAR.md` | `inventario/INVENTARIO_CURRICULAR.md` | `857ab26f7270ac5d…` | `857ab26f7270ac5d…` | SIM | 2026-11-04T12:18:10.482Z | 2026-11-04T13:25:53.788Z | 273/273 |
| INVENTARIO_CURRICULAR.md | `apostila-ia/inventario/INVENTARIO_CURRICULAR.md` | `docs/INVENTARIO_CURRICULAR.md` | `857ab26f7270ac5d…` | `857ab26f7270ac5d…` | SIM | 2026-11-04T12:18:10.482Z | 2026-11-04T13:25:53.808Z | 273/273 |
| MATRIZ_COBERTURA.csv | `apostila-ia/matriz/MATRIZ_COBERTURA.csv` | `matriz/MATRIZ_COBERTURA.csv` | `483ada4f2af59939…` | `483ada4f2af59939…` | SIM | 2026-11-04T13:25:53.752Z | 2026-11-04T12:03:30.180Z | 309/309 |
| MATRIZ_COBERTURA.csv | `apostila-ia/matriz/MATRIZ_COBERTURA.csv` | `docs/MATRIZ_COBERTURA.csv` | `483ada4f2af59939…` | `483ada4f2af59939…` | SIM | 2026-11-04T13:25:53.752Z | 2026-11-04T13:25:53.680Z | 309/309 |
| MATRIZ_COBERTURA.md | `apostila-ia/matriz/MATRIZ_COBERTURA.md` | `matriz/MATRIZ_COBERTURA.md` | `3ddf37358240863b…` | `3ddf37358240863b…` | SIM | 2026-11-02T02:09:08.970Z | 2026-11-02T23:19:01.586Z | 87/87 |
| MATRIZ_COBERTURA.md | `apostila-ia/matriz/MATRIZ_COBERTURA.md` | `docs/MATRIZ_COBERTURA.md` | `3ddf37358240863b…` | `3ddf37358240863b…` | SIM | 2026-11-02T02:09:08.970Z | 2026-11-02T02:09:09.010Z | 87/87 |

## Detalhe das divergências

Nenhuma divergência: todos os espelhos estão byte a byte idênticos às fontes canônicas.
## Procedimento aplicado

1. `node scripts/audit_curriculum_matrix.mjs` — regenera `docs/MATRIZ_COBERTURA.csv` a partir de `apostila-ia/assets/data/curriculum*.js` (fonte primária do currículo).
2. Promoção do resultado para a fonte canônica `apostila-ia/matriz/MATRIZ_COBERTURA.csv`.
3. Cópia da fonte canônica para todos os espelhos (`matriz/`, `docs/`, `inventario/`).
4. Verificação de SHA-256 par a par e registro deste relatório.

> Regras pesadas pela `AGENTS.md`: antes de cada publicação no GitHub Pages, execute `node scripts/sincronizar-governanca.mjs` e confirme que não há pares divergentes.
