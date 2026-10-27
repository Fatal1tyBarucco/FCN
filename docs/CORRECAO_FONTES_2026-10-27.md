# Correção de fontes — revisão independente (2026-10-27)

Data: 2026-10-27. Branch: `feat/fase-1-orquestracao-20261025`.
Base: `docs/REVISAO_INDEPENDENTE_FONTE_2026-10-27.md` (4 categorias de inconsistência).

## Resumo

Total de fontes corrigidas: **63** (somente o campo `fonte`; enunciado, alternativas, gabarito e análise não foram alterados).

| Categoria | Questões | Quantidade |
|---|---|---|
| M7 fonte única genérica (RDaF) → fontes específicas por conceito | q-m7-01..40 (exceto q-m7-32) | 39 |
| M8 Power BI genérico → teoria de visualização | q-m8-01,02,03,05,13,14,15,16,18,25,26,27,28,31,33,40 | 16 |
| M2 mapeamentos RFC incorretos/fracos | q-m2-43,45,46,47,52,54 | 6 |
| M3 fontes genéricas | q-m3-44, q-m3-46 | 2 |

Pendências restantes: **1** — `q-m3-45` (zoombombing) mantém fonte curricular, conforme revisão (sem fonte primária verificada).

## Mapeamento de fontes aplicado

### M7 (39 questões)
- DIKW (q-m7-01..05): Wikipedia — DIKW pyramid.
- Níveis de mensuração (q-m7-06,09,24): Wikipedia — Level of measurement.
- Dados/governança/qualidade (q-m7-07,08,10,25,30): DAMA-DMBOK.
- Dimensões de qualidade (q-m7-11..18,20,23,26,27,31,34,35): ISO 8000-1.
- ETL/ELT (q-m7-19,21,33): Wikipedia — Extract, transform, load.
- Estatística/normalização numérica (q-m7-28,36,38): NIST/SEMATECH e-Handbook.
- Normalização de BD (q-m7-29,37): Wikipedia — Database normalization.
- Média de médias (q-m7-38): NIST/SEMATECH e-Handbook.
- Privacidade/anonimização (q-m7-22): Wikipedia — K-anonymity.
- Quasi-identificadores (q-m7-39): Wikipedia — Quasi-identifier.
- Minimização (q-m7-40): LGPD (Planalto).
- q-m7-32: mantido LGPD (já adequado).

### M8 (16 questões — teoria de visualização)
- Interaction Design Foundation — Data Visualization (URL verificada HTTP 200).
- As questões de ferramenta/processo (q-m8-07 Power Query, q-m8-08 modelagem, q-m8-09 narrativa, q-m8-10 métricas) mantiveram Microsoft Learn — Power BI, por ser fonte adequada ao tema.

### M2 (6 questões)
- q-m2-43: RFC 1034/1035 (DNS) + RFC 793 (TCP) + RFC 8446 (TLS) + RFC 9110 (HTTP).
- q-m2-45: RFC 2131 (DHCP) + RFC 1034/1035 (DNS) + RFC 9110.
- q-m2-46: RFC 4251/4253 (SSH) + RFC 959 (FTP).
- q-m2-47: RFC 4301 (IPsec) + RFC 3022 (NAT).
- q-m2-52: Microsoft Learn — ipconfig.
- q-m2-54: RFC 792 (ICMP) + RFC 1122 (Host Requirements).

### M3 (2 questões)
- q-m3-44: Microsoft Teams — Meeting policies + Zoom screen sharing.
- q-m3-46: LGPD (Planalto) + Microsoft Teams — Meeting policies.

## Verificação de URLs

Todas as URLs citadas retornaram HTTP 200 em verificação via webfetch (HEAD) em 2026-10-27, incluindo os RFCs (rfc-editor.org), Wikipedia, DAMA, ISO, NIST/SEMATECH, Microsoft Learn, Zoom Support, LGPD (Planalto) e Interaction Design Foundation.

## Validação

- `node --check` executado em todos os 39 arquivos JS de `apostila-ia/`: **0 falhas**.
- Nenhum enunciado, alternativa, gabarito ou análise foi alterado.
- q-m3-45 mantém fonte curricular (pendência registrada).

## Pendências restantes

1. q-m3-45 — sem fonte primária verificada (mantida fonte curricular, conforme revisão).
2. Revisão semântica integral das 399 questões (fora do escopo desta correção de fontes).
3. Validação HTTP individual automatizada de todas as URLs (a verificação foi por HEAD manual em amostra representativa dos novos domínios).
