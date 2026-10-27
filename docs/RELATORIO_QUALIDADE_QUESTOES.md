# Auditoria heurística de qualidade estrutural das questões

Gerado por scripts/audit_question_quality.mjs. Este relatório sinaliza candidatos para revisão; não valida automaticamente a verdade das respostas nem substitui revisão pedagógica independente.

- Questões lidas: **399**.
- IDs duplicados: **0**.
- Questões com pelo menos um alerta heurístico: **0**.
- Pares com contexto + enunciado idênticos: **0**.
- Distribuição por módulo: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40.
- Distribuição de gabaritos (incluindo C/E): D=37, errado=35, A=83, certo=40, C=72, B=104, E=28.
- Distribuição de gabaritos MC (A-E): A=83, B=104, C=72, D=37, E=28.

## Distribuição de gabaritos MC por módulo

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1|4|15|5|2|0|26|
| M2|8|15|8|3|3|37|
| M3|3|13|11|2|2|31|
| M4|25|24|15|10|10|84|
| M5|13|14|4|5|4|40|
| M6|16|2|10|7|2|37|
| M7|12|0|13|4|4|33|
| M8|2|21|6|4|3|36|
- Revisão manual de posições recomendada em M1: A=4, B=15, C=5, D=2, E=0.
- Distribuição de formato: mc=324, ce=75.

## Alertas

Nenhum alerta heurístico detectado.

## Pares com contexto e enunciado idênticos

Nenhum par idêntico detectado.

## Limitações

- Uma questão sem alerta ainda pode conter erro factual, ambiguidade, gabarito incorreto ou distrator fraco.
- Alertas de fonte, denominação legal e duplicação exigem avaliação humana do contexto.
- A distribuição de letras do gabarito é descritiva e não prova qualidade nem viés por si só.

---

## Questões sem fonte externa — lista acionável para próxima sessão (2026-10-27)

Total: **1 questão (0,25% do banco)** com campo `fonte` contendo apenas proveniência curricular interna ("Currículo Mx …"), sem URL/autor/obra: q-m3-45 (zoombombing/intrusão em reuniões) — pendência registrada por ausência de fonte primária verificada nos domínios permitidos. As demais 101 questões do lote receberam fonte externa verificável (URL direta + título + órgão + data de verificação 2026-10-26/2026-10-27).

**Resultado do lote (2026-10-27):** 101/102 questões com fonte externa verificável. Fontes reutilizadas/adicionadas ao catálogo: RFCs 8200, 1918, 4632, 5952, 1122, 4251, 950, 1855, 7208, 6376, 7489; NIST SP 1500-18r2 (RDaF); NIST/SEMATECH e-Handbook of Statistical Methods; NIST AI RMF 1.0; OWASP LLM Prompt Injection Prevention Cheat Sheet; Tableau Help; Looker Studio Help; além de reuso de LGPD, Microsoft Learn M365/Power BI/DAX, W3C WCAG 2.2 e RFCs já cadastradas.

Pendência remanescente: q-m3-45 — manter fonte curricular até verificação de fonte primária (Zoom/CISA/NIST) para intrusão em reuniões virtuais.">

**Regra para a próxima sessão:** adicionar fonte externa verificável (URL direta + título + órgão + data de verificação) reutilizando as 149 entradas de `references.js` quando aplicável; adicionar novas entradas ao catálogo apenas com URL verificada (webfetch). Não inventar URLs. Não alterar enunciado/alternativas/gabarito/análise.

### M7 (40) — q-m7-01..q-m7-40
Temas: DIKW (dado/informação/conhecimento/sabedoria), dados estruturados/semiestruturados/não estruturados, qualitativos/quantitativos, nominais/ordinais/discretos/contínuos, metadados/linhagem/catálogo/ciclo de vida, qualidade (acurácia, completude, consistência, validade, unicidade, tempestividade), ETL/ELT, limpeza, valores ausentes, duplicidades, inconsistências, normalização estatística vs BD, agregação/deduplicação, anonimização/pseudonimização/reidentificação, governança/acesso/minimização/proteção.
Fontes candidatas (a verificar): DAMA-DMBOK, ISO 8000 (qualidade de dados), documentação de ferramentas de engenharia de dados.

### M8 (40) — q-m8-01..q-m8-40
Temas: visualização, Gestalt, cores/contraste/escalas/hierarquia, chartjunk/integridade gráfica, eixos/rótulos/unidades/legendas, escalas linear/log/truncada, escolha de gráficos, histograma/linha/barras/dispersão/box plot, média/mediana/moda/dispersão, quartis/percentis, distribuições/assimetria/outliers, correlação/causalidade, amostragem/vieses, incerteza/agregação, Power BI/Power Query/DAX, Tableau, Looker Studio, storytelling.
Fontes candidatas (a verificar): documentação oficial de Power BI (learn.microsoft.com/power-bi), Tableau (help.tableau.com), Looker Studio (support.google.com/looker-studio), W3C (acessibilidade de gráficos).

### M2 (14) — q-m2-41..q-m2-54
Temas: modelos OSI/TCP-IP, IPv4/IPv6, TCP/UDP, DNS/DHCP, SFTP/FTPS/SSH, VPN/NAT/PAT, endereços privados, VLSM/sumarização, IPv6 abreviação, ping/traceroute, ipconfig, nslookup/dig, diagnóstico por camadas.
Fontes candidatas: RFC 791 (IPv4), RFC 793 (TCP), RFC 8200 (IPv6), RFC 1034/1035 (DNS), RFC 2131 (DHCP), RFC 9110 (HTTP) — a maioria já cadastrada em `references.js`.

### M3 (6) — q-m3-41, q-m3-43, q-m3-44, q-m3-45, q-m3-46, q-m3-47
Temas: classificação spam/phishing, autenticação de domínio (SPF/DKIM/DMARC), acessibilidade, comunicação institucional, compartilhamento de tela, intrusão em reuniões, exposição de dados em convites.
Fontes candidatas: RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC), W3C WCAG 2.2 (já cadastrada), LGPD (já cadastrada).

### M5 (2) — q-m5-41, q-m5-42
Temas: respostas institucionais sem fundamento, governança de prompts com documentos versionados.
Fontes candidatas: NIST AI RMF 1.0 (já cadastrada), OWASP LLM Prompt Injection Prevention Cheat Sheet (já cadastrada).

**Ação recomendada na próxima sessão:** executar em lotes por módulo (M7+M8 primeiro, maior bloco homogêneo), reutilizando URLs já verificadas do catálogo; registrar cada fonte adicionada no campo `fonte` e, se nova, no catálogo `references.js` + `referencias/referencias-verificadas.md`. Atualizar este relatório com a contagem final.
