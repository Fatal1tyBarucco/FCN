# Revisão independente — lote de fontes externas (commit eb4827c)

Data: 2026-10-27. Revisor: agente revisor independente. Branch: `feat/fase-1-orquestracao-20261025`.
Escopo: 102 questões que receberam fonte externa verificável (M2=14, M3=6, M5=2, M7=40, M8=40), exceto `q-m3-45` (manteve fonte curricular). Total do banco: 399 questões.

## 1. Método

- Leitura integral dos arquivos `questions_m7.js` e `questions_m8.js` e extração de `q-m2-41..54` e `q-m3-41..47` e `q-m5-41..42` de `questions.js`/`questions_m5.js`.
- Para cada questão: confronto entre (a) enunciado, (b) gabarito, (c) análise A–E, (d) fonte declarada — verificando se a fonte sustenta a afirmação específica (não apenas o tema geral).
- Script automatizado de coerência gabarito↔análise (todas as 399 questões).
- Script de similaridade lexical (Jaccard de tokens do contexto+enunciado) dentro de cada módulo, limiar 0,30.
- Scripts oficiais: `verificacao/verificar-estrutura.js`, `scripts/audit_question_quality.mjs`, `scripts/audit_learning_assets.mjs`.
- Alinhamento curricular verificado via `audit_learning_assets.mjs` (tópicos-pai sem questão/flashcard).

## 2. Resultado dos scripts

- `verificacao/verificar-estrutura.js`: **0 falhas** (todas as verificações estruturais passaram).
- `scripts/audit_question_quality.mjs`: 399 questões lidas, 0 IDs duplicados, 0 alertas heurísticos, 0 pares contexto+enunciado idênticos.
- `scripts/audit_learning_assets.mjs`: 8 módulos, 132 tópicos, 460 flashcards, 399 questões; **0 tópicos-pai sem questão** e **0 sem flashcard**; 0 ativos sem associação curricular reconhecível.
- Distribuição de gabaritos MC (324): A=83, B=104, C=72, D=37, E=28 (conforme relatório de qualidade).

## 3. Sustentação fonte × afirmação (achados)

### 3.1 M7 (40 questões) — sustentação sistemática fraca

39 das 40 questões citam como única fonte `NIST SP 1500-18 (Research Data Framework, RDaF)`. A RDaF é um framework de governança/qualidade de dados de pesquisa; ela **não sustenta** as afirmações específicas da maioria dos itens:

- DIKW (q-m7-01..05): a RDaF não define o modelo DIKW nem seus níveis.
- Escalas de mensuração nominal/ordinal/intervalar (q-m7-06, 09, 24): não cobertas pela RDaF.
- ETL/ELT e escolha por sensibilidade (q-m7-21, 33): não cobertos.
- Normalização estatística (z-score, min-max) e normalização de BD (1FN/2FN/3FN) (q-m7-28, 29, 36, 37): não cobertas.
- Agregação e média de médias (q-m7-38): não coberta.
- Anonimização/pseudonimização e quasi-identificadores/reidentificação (q-m7-22, 39): não cobertas.
- Acurácia/completude/validade (q-m7-11..15, 18): a RDaF toca qualidade de dados de pesquisa, cobertura parcial.
- Consistência/unicidade/tempestividade (q-m7-14, 16, 17): cobertura parcial.
- Ciclo de vida/retenção (q-m7-25): cobertura parcial.
- Ausência e zero substituto (q-m7-26, 34): cobertura parcial.
- Deduplicação e erro de tipo (q-m7-31, 27, 35): cobertura parcial.
- Governança/papéis (q-m7-30): cobertura parcial.

**Única fonte adequada no M7:** `q-m7-32` (LGPD, Planalto) — coerente com a afirmação sobre controlador/operador (art. 46).

**Recomendação (sem executar):** diversificar fontes por tópico: DAMA-DMBOK / ISO 8000 para dimensões de qualidade; bibliografia de engenharia de dados para ETL/ELT e normalização; literatura de privacidade (k-anonimidade/l-diversidade) para quasi-identificadores; manter LGPD para o item legal. A RDaF pode permanecer como fonte complementar de governança, não como fonte única para conceitos específicos.

### 3.2 M8 (40 questões) — sustentação adequada na maioria

- Estatística (q-m8-04, 06, 12, 17, 19–23, 29, 32, 34–37): NIST/SEMATECH e-Handbook — adequado.
- DAX/Power BI (q-m8-30, 38, 39): Microsoft Learn DAX — adequado.
- Ferramentas (q-m8-11, 24): Tableau Help + Looker Studio Help — adequado.
- Visualização/teoria (q-m8-01, 02, 03, 05, 13, 14, 16, 25, 26, 27, 28, 31, 33, 40): fonte Microsoft Learn — Power BI. **Sustentação fraca**: a documentação do Power BI não é fonte primária para princípios de visualização (Gestalt, chartjunk, hierarquia visual, escolha de gráfico por tarefa analítica, paletas). Recomenda-se complementar com literatura de visualização (Tufte, Cairo) ou documentação específica de design (Microsoft Fluent/Power BI design guidance).

### 3.3 M2 (q-m2-41..54) — mapeamentos RFC parcialmente incorretos

- q-m2-43 (fluxo DNS/TCP/TLS/HTTP): fonte RFC 9110 (HTTP Semantics) — sustenta apenas a parte HTTP; DNS/TCP/TLS não são cobertos. Recomendar RFC 1034/1035 + RFC 793 + RFC 8446.
- q-m2-45 (DHCP/DNS): fonte RFC 9110 — **incorreta** (RFC 9110 é HTTP). Recomendar RFC 2131 (DHCP) + RFC 1034/1035 (DNS).
- q-m2-46 (SFTP): fonte RFC 959 (FTP) — **incorreta** (SFTP é baseado em SSH). Recomendar RFC 4251/4253 (SSH).
- q-m2-47 (VPN/NAT): fonte RFC 3022 (NAT) — parcial (VPN não coberta). Recomendar RFC 3022 + RFC 4301 (IPsec) ou documentação de VPN.
- q-m2-52 (ipconfig): fonte RFC 1122 — fraca (RFC 1122 não define ipconfig). Recomendar documentação do sistema operacional.
- q-m2-54 (diagnóstico por camadas): fonte RFC 1122 — genérica. Aceitável como referência de camadas, mas não de diagnóstico.

Mapeamentos corretos: q-m2-48 (RFC 1918), q-m2-50 (RFC 5952), q-m2-53 (RFC 1034), q-m2-49 (RFC 4632), q-m2-51 (RFC 792, parcial).

### 3.4 M3

- q-m3-41 (netiqueta): RFC 1855 — adequado.
- q-m3-42 (acessibilidade): W3C WCAG 2.2 — adequado.
- q-m3-43 (comunicação institucional/LGPD): LGPD Planalto — parcial (cobertura legal, não de comunicação). Aceitável.
- q-m3-44 (compartilhamento de tela): Microsoft Learn genérico — fraco. Recomendar documentação específica de compartilhamento seguro (Microsoft 365 / Zoom) ou guia de segurança de reuniões.
- q-m3-45: mantém fonte curricular (pendência registrada; sem fonte primária verificada).
- q-m3-46 (convite/dados): Microsoft Learn genérico — fraco.
- q-m3-47 (SPF): RFC 7208 — adequado.

### 3.5 M5

- q-m5-41, 42: NIST AI RMF 1.0 + OWASP LLM Prompt Injection — sustenta RAG/governança de prompts e alucinação. Adequado.

### 3.6 Inconsistências de sustentação (resumo)

1. M7 usa fonte única genérica (RDaF) para 39 questões, a maioria das quais trata de conceitos que a RDaF não cobre (DIKW, escalas, ETL/ELT, normalização, quasi-identificadores, anonimização).
2. M8 usa Power BI docs como fonte para teoria de visualização (Gestalt, chartjunk, hierarquia, paletas).
3. M2 possui 6 mapeamentos RFC incorretos/fracos (q-m2-43, 45, 46, 47, 52, 54).
4. M3 possui 2 fontes genéricas (q-m3-44, 46) e 1 pendência (q-m3-45).

## 4. Gabarito × análise

Verificação automatizada (script `checkgab.js`) em todas as 324 questões de múltipla escolha: **0 divergências** entre o campo `gabarito` e a alternativa marcada `CORRETA` na `analise`. As 75 questões C/E mantêm coerência entre gabarito (certo/errado) e o trecho determinante. Resultado: aprovado.

## 5. Distribuição de gabaritos e recomendações de troca de posição (sem executar)

Distribuição MC por módulo (atual):

| Módulo | A | B | C | D | E | Total |
|---|---:|---:|---:|---:|---:|---:|
| M1 | 4 | 15 | 5 | 2 | 0 | 26 |
| M2 | 8 | 15 | 8 | 3 | 3 | 37 |
| M3 | 3 | 13 | 11 | 2 | 2 | 31 |
| M4 | 25 | 24 | 15 | 10 | 10 | 84 |
| M5 | 13 | 14 | 4 | 5 | 4 | 40 |
| M6 | 16 | 2 | 10 | 7 | 2 | 37 |
| M7 | 12 | 0 | 13 | 4 | 4 | 33 |
| M8 | 2 | 21 | 6 | 4 | 3 | 36 |

Concentrações problemáticas: M1 (E=0, B=58%), M6 (B=5%), M7 (B=0), M8 (B=58%), M4 (A+B=58%).

Recomendações (troca de posição de alternativas completas, remapeando `analise` e `gabarito`; o conteúdo correto não muda, apenas a letra). Executar apenas onde nenhuma alternativa faz referência textual à própria letra ("alternativa A" etc. — verificar antes).

**M7 (introduzir B):** mover a resposta correta de q-m7-01 (E→B), q-m7-04 (E→B), q-m7-05 (D→B), q-m7-07 (C→B), q-m7-11 (C→B). Análises citam letras; remapear as 5 entradas de `analise` por questão.

**M1 (introduzir E e reduzir B):** mover resposta correta de q-m1-03 (B→E), q-m1-07 (B→E), q-m1-12 (B→E), q-m1-18 (B→D), q-m1-22 (B→A). Verificar antes se as alternativas contêm auto-referência a letras (algumas questões do M1 citam "alternativa A").

**M6 (introduzir B):** mover resposta correta de q-m6-01 (C→B), q-m6-04 (C→B), q-m6-08 (D→B), q-m6-12 (A→B), q-m6-19 (A→B). Atenção: M6 tem gabaritos C/E em 10 itens; priorizar questões MC com gabarito A/C.

**M4 (reduzir A+B):** mover resposta correta de q-m4-01 (A→D), q-m4-03 (A→E), q-m4-06 (A→C), q-m4-12 (B→D), q-m4-15 (B→E). M4 tem 10 itens C/E; preferir questões sem auto-referência a letras.

**M8 (reduzir B):** mover resposta correta de q-m8-02 (E→C), q-m8-06 (E→A), q-m8-13 (B→D), q-m8-18 (C→A), q-m8-22 (A→E), q-m8-27 (B→C), q-m8-33 (B→D). Verificar auto-referência a letras antes.

**M2/M3/M5:** concentração moderada; recomenda-se monitorar, sem trocas urgentes. M5 (C=4, D=5, E=4) está razoavelmente distribuído.

Observação: a distribuição é descritiva; não alterar gabarito correto (conteúdo) — apenas a letra. Qualquer troca exige remapear `analise` letra a letra e revalidar com `node --check` + auditor de qualidade.

## 6. Redundância semântica

Pares com similaridade lexical ≥ 0,30 (contexto+enunciado):

- M2: q-m2-12 ↔ q-m2-37 (0,64) — ambos sobre comutação de pacotes/circuitos; q-m2-38 ↔ q-m2-40 (0,59) — ambos sobre endereçamento IPv4/privado; q-m2-01 ↔ q-m2-03 (0,36); q-m2-41 ↔ q-m2-44 (0,35); q-m2-10 ↔ q-m2-33 (0,31).
- M3: q-m3-07 ↔ q-m3-28 (0,42); q-m3-05 ↔ q-m3-27 (0,33); q-m3-10 ↔ q-m3-30 (0,32); q-m3-03 ↔ q-m3-23 (0,31); q-m3-09 ↔ q-m3-29 (0,30).
- M4: q-m4-10 ↔ q-m4-85 (0,31).
- M8: q-m8-17 ↔ q-m8-32 (0,48) — ambos sobre histograma densidade/área (redundância forte); q-m8-30 ↔ q-m8-39 (0,38) — ambos sobre DAX preço médio por unidade (redundância forte).

Redundância conceitual (mesmo conceito, mesma resposta) identificada manualmente:
- M8: q-m8-17 e q-m8-32 (histograma: área=frequência, altura=densidade; gabarito B em ambas) — consolidar em uma questão ou diferenciar por cenário.
- M8: q-m8-30 e q-m8-39 (DAX: Soma(Faturamento)÷Soma(Quantidade); gabarito B em ambas) — consolidar.
- M8: q-m8-08 e q-m8-38 (contagem distinta vs linhas; gabarito B em ambas) — consolidar.
- M8: q-m8-02 e q-m8-05 (eixo truncado distorce proporção) — diferenciar ou consolidar.
- M2/M3: pares com vocabulário compartilhado mas conceitos distintos (comutação vs endereçamento, etc.) — verificar se não testam o mesmo ponto; em geral são distintos.

M7: nenhuma redundância acima do limiar 0,30 (questões lexically diverse).

## 7. Alinhamento curricular

- `audit_learning_assets.mjs`: 0 tópicos-pai sem questão e 0 sem flashcard em todos os 8 módulos (132 tópicos).
- Todas as 102 questões do lote mapeiam para tópicos existentes em `curriculum_m*.js` (formato `mN-uN-tN-sN` ou `modulo-N-unidade-N-topico-N`).
- `q-m3-45` mapeia para `m3-u5-t1-s1` (zoombombing) — tópico existente; fonte curricular mantida (pendência).
- Nenhuma referência curricular desconhecida detectada.

## 8. Limitações da revisão

- A verificação de sustentação fonte×afirmação foi feita por análise textual das fontes declaradas (títulos/organizações/URLs), sem webfetch individual de cada URL. A acessibilidade HTTP de cada URL não foi revalidada nesta revisão.
- A revisão semântica foi focal (por lote), não equivalente a auditoria integral de cada afirmação jurídica/técnica.
- As recomendações de troca de posição não foram executadas (conforme instrução: apenas recomendar).
- Testes com leitor de tela, WCAG manual e dispositivos físicos permanecem pendentes (fora do escopo desta revisão).

## 9. Conclusão

- Estrutura: aprovada (0 falhas nos três scripts).
- Coerência gabarito×análise: 0 divergências.
- Alinhamento curricular: 100% (0 tópicos sem questão).
- Sustentação de fontes: **4 categorias de inconsistência** identificadas (M7 fonte única genérica; M8 Power BI para teoria de visualização; M2 mapeamentos RFC incorretos; M3 fontes genéricas + pendência q-m3-45).
- Redundância: 2 pares fortes em M8 (q-m8-17/32, q-m8-30/39) + 1 par moderado (q-m8-08/38) + pares M2/M3 com vocabulário compartilhado mas conceitos distintos.
- Distribuição de gabaritos: concentrações em M1, M6, M7, M8, M4; recomendações de troca de posição listadas (seção 5), sem execução.

Veredito: **APROVADO COM RESSALVAS** — estrutura e coerência interna aprovadas; sustentação de fontes e concentração de gabaritos requerem ação (diversificação de fontes e trocas de posição) em sessão futura.
