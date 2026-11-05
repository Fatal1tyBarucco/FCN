# PLANO DE LOTES

Tabela de todos os 38 lotes de enriquecimento da Seção 5.

| Lote | Módulo | Unidade | Parte | Nº de Subtópicos | Primeira ID | Última ID | Arquivo Parcial |
|------|--------|---------|-------|-------------------|-------------|-----------|-----------------|
| 1 | 1 | 1 | 1 | 5 |  mod-1-u1-t1-s1 | mod-1-u1-t1-s5 | `enriParcialM1U1.js` |
| 2 | 1 | 1 | 2 | 3 |  mod-1-u1-t1-s6 | mod-1-u1-t1-s8 | `enriParcialM1U1P2.js` |
| 3 | 1 | 1 | 3 | 4 |  mod-1-u1-t1-s9 | mod-1-u1-t1-s12 | `enriParcialM1U1P3.js` |
| … | … | … | … | … | … | … | … |
| 38 | 8 | 5 | 1 | 8 |  mod-8-u5-t1-s1 | mod-8-u5-t1-s8 | `enriParcialM8U5.js` |

> **Instruções de Uso**
> 
> **1. Extrair Lote** – Para gerar o arquivo JSON do lote:
> ```bash
> node scripts/extrair-lote.mjs --modulo <N> --unidade <U> [--parte <P>] [--saida <arquivo>]
> ```
>  - A saída contém `meta` e `data`.
>  - Salve em `scripts/lotes/<nome>.js` mantendo o formato `const enriParcialM<N>U<U>[P<P>].js = { ... };`.
> 
> **2. Mesclar Lotes** – Para combinar todos os parcais nos arquivos finais:
> ```bash
> node scripts/mesclar-lotes.mjs [--dir scripts/lotes] [--alvo apostila-ia/assets/data] [--dry-run] [--verificar]
> ```
>  - `--dry-run` mostra plano sem gravar.
>  - `--verificar` executa auditoria pós-escrita.
> 
> **3. Pós‑Processamento** – Após a mesclagem bem-sucedida, os arquivos parciais podem ser excluídos.
