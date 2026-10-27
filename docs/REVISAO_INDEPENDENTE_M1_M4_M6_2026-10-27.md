# Revisão independente — M1, M4 e M6 (questões)

Data: 2026-10-27. Revisor: agente revisor independente. Branch: `feat/fase-1-orquestracao-20261025`.
Escopo: M1 (44 questões em `questions.js`), M4 (85 questões em `questions_m4.js`), M6 (47 questões em `questions_m6.js`) — total 176 questões. Complementa `docs/REVISAO_INDEPENDENTE_FONTE_2026-10-27.md` (M2/M3/M5/M7/M8).

## 1. Método

- Leitura integral dos dumps estruturados de `q-m1-01..q-m1-44`, `q-m4-01..q-m4-85`, `q-m6-01..q-m6-47` (id, tópico, formato, gabarito, enunciado, alternativas, justificativa, análise, regra, pegadinha, fonte).
- Confronto fonte × afirmação (enunciado + gabarito + análise) por análise textual das fontes declaradas (títulos/organizações/URLs), sem webfetch individual de cada URL.
- Verificação automatizada de coerência gabarito↔análise (script `checkgab.js`, com regex `\bCORRETA\b` para evitar falso positivo em "INCORRETA").
- Similaridade lexical (Jaccard de tokens de contexto+enunciado) dentro de cada módulo, limiar 0,30.
- Alinhamento curricular via `scripts/audit_learning_assets.mjs` (tópicos-pai e referências desconhecidas) e conferência manual dos IDs `topico`.
- Scripts oficiais: `verificacao/verificar-estrutura.js`, `scripts/audit_question_quality.mjs`, `scripts/audit_learning_assets.mjs`.

## 2. Resultado dos scripts

- `verificacao/verificar-estrutura.js`: **0 falhas** (todas as verificações estruturais passaram; 39 tags `<script>`, 399 questões declaradas, manifest com "399").
- `scripts/audit_question_quality.mjs`: 399 questões lidas, **0 IDs duplicados**, **0 alertas heurísticos**, **0 pares contexto+enunciado idênticos**.
- `scripts/audit_learning_assets.mjs`: 8 módulos, 132 tópicos, 460 flashcards, 399 questões; **0 tópicos-pai sem questão** e **0 sem flashcard**; **0 ativos sem associação curricular reconhecível**; 0 referências curriculares desconhecidas.
- Distribuição de gabaritos MC por módulo (após rebalanceamento editorial):

| Módulo | A | B | C | D | E | Total MC |
|---|---:|---:|---:|---:|---:|---:|
| M1 | 7 | 10 | 5 | 3 | 1 | 26 |
| M4 | 22 | 22 | 16 | 12 | 12 | 84 |
| M6 | 14 | 7 | 7 | 7 | 2 | 37 |

## 3. Gabarito × análise (achados)

Verificação automatizada em todas as questões MC dos três módulos: **M4 = 0 divergências**, **M6 = 0 divergências**, **M1 = 4 divergências**:

1. `q-m1-07` — gabarito `A`, mas a análise marca `B` como `CORRETA` ("Conta organizacional (Business/Enterprise) com plano elegível..."). O enunciado pede o tipo de conta adequado a gestão centralizada/eDiscovery/dispositivos; a resposta correta é B, não A.
2. `q-m1-09` — gabarito `A`, mas a análise marca `B` como `CORRETA` (`.pdf` para distribuição final com layout preservado). O enunciado e a justificativa indicam PDF; gabarito deveria ser B.
3. `q-m1-11` — gabarito `A`, mas a análise marca `B` como `CORRETA` ("Todos os textos aplicados com o estilo 'Título 1' são atualizados para 16 pt"). A justificativa afirma propagação global do estilo; gabarito deveria ser B.
4. `q-m1-41` — gabarito `E`, mas a análise marca `B` como `CORRETA` ("Ativar Primeira Página Diferente"). O enunciado pede o recurso que oculta cabeçalho/rodapé só na capa; a resposta correta é B.

As 75 questões C/E de M1/M4/M6 mantêm coerência entre gabarito (`certo`/`errado`) e o trecho determinante. As questões M4 e M6 não apresentaram divergência alguma.

## 4. Sustentação fonte × afirmação

### 4.1 M1 (44 questões)

Fontes predominantes: Microsoft Support/Learn (URLs oficiais) e uma fonte interna (`assets/js/simulators.js`, `curriculum.js`) para `q-m1-32` (escopo do simulador Excel).

- A maioria das fontes sustenta a afirmação específica (formatos, estilos, tabulação, listas, quebras de seção, referências cruzadas, tabelas, revisão/proteção, acessibilidade, PowerPoint animação/transição/Slide Mestre, OneDrive sincronização vs. backup, Excel MÉDIA/SE/PROCX).
- `q-m1-07` cita Microsoft Purview eDiscovery (E3/E5) e Intune — coerente com a afirmação sobre conta organizacional e recursos de compliance, mas a questão é afetada pela divergência de gabarito (seção 3).
- `q-m1-09` cita Microsoft Support "Salvar ou converter em PDF" — sustenta a afirmação de que PDF preserva layout para leitura/impressão, mas a questão é afetada pela divergência de gabarito (seção 3).
- `q-m1-28`/`q-m1-29`/`q-m1-38` (OneDrive sync vs. backup) citam documentação de sincronização e detecção de ransomware — sustentam a distinção.
- `q-m1-30` (MÉDIA) cita documentação da função MÉDIA em pt-BR — sustenta.
- `q-m1-32` (escopo do simulador) usa fonte interna; aceitável, mas depende de verificação do código (`simulators.js`) — não é fonte externa verificável por URL. Limitação já registrada.
- `q-m1-06`/`q-m1-08`/`q-m1-39` (histórico de versões/lixeira) — fontes sustentam a afirmação de que retenção varia por tipo de conta/serviço/política.

Inconsistências de sustentação M1: nenhuma além das 4 divergências de gabarito (seção 3).

### 4.2 M4 (85 questões)

Fontes: NIST (SP 800-xx, FIPS), CISA (#StopRansomware, playbooks), OWASP, MITRE ATT&CK, RFCs, Planalto (LGPD, Marco Civil, CF/88, LAI, Lei 15.352/2026, Lei 14.460/2022, Lei 12.813/2013, Lei 12.527/2011), NIST CSRC Glossary, ISO/IEC 27000.

- Sustentação adequada na grande maioria: CIA (NIST SP 800-122/CSRC), controles (CISA CRR), MFA (NIST SP 800-63B-4), criptografia (NIST SP 800-57, FIPS 197/180-4/186-5, SP 800-38D/800-56A), backup/3-2-1 (NIST SP 800-34, CISA), logs (NIST SP 800-92), firewall/segmentação (NIST SP 800-41/800-207/800-53), WAF/IDS/IPS (OWASP/NIST SP 800-94), VPN (NIST SP 800-77), NTP (RFC 5905), risco (NIST SP 800-30/800-39), incidentes (NIST SP 800-61 Rev. 3), malware (NIST SP 800-83, CISA, MITRE ATT&CK), phishing (CISA, MITRE T1566), SSRF (OWASP), LGPD/Marco Civil/CF/LAI/ANPD (Planalto).
- `q-m4-04` fonte CISA CRR control types — sustenta a distinção preventivo/detectivo/corretivo/compensatório.
- `q-m4-34` fonte Lei 15.352/2026 + Lei 14.460/2022 — sustenta a afirmação sobre ANPD autarquia de natureza especial (com a ressalva histórica já registrada).
- `q-m4-45` fonte NIST SP 800-53 + FIPS 199 — sustenta.
- `q-m4-85` e `q-m4-10` (ameaça/vulnerabilidade/risco) — ambos citam NIST SP 800-30 Rev. 1; sustentam, mas são redundantes (seção 5).

Inconsistências de sustentação M4: nenhuma fonte claramente incorreta identificada. As fontes são apropriadas e sustentam as afirmações específicas.

### 4.3 M6 (47 questões)

Fontes: Planalto (CF/88 art. 37 caput, art. 5º XXXIII; LAI; LGPD compilada; Marco Civil; Lei 14.129/2021; Lei 12.813/2013; Lei 13.146/2015; Lei 15.352/2026), W3C WCAG 2.2, gov.br (PPSI 2.0, CISC, Secom, eMAG, anonimização), NIST SP 800-92, currículo M6 (interno) para `q-m6-36`.

- Sustentação adequada: princípios administrativos (CF/88 art. 37 caput), LAI (arts. 1º, 2º, 3º, 4º, 7º, 8º, 10, 11, 23, 24, 27, 28, 31, 34), LGPD (arts. 1º, 5º, 6º, 7º, 10, 11, 17, 18, 20, 23, 26, 37, 42, 46, 48, 49, 55-A, 55-J, 55-K), Marco Civil (arts. 2º, 3º, 7º, 9º, 10, 19), Lei 14.129/2021 (arts. 3º, 5º, 6º, 14, 22, 29, 36, 48), Lei 12.813/2013, Lei 13.146/2015 art. 63, WCAG 2.2, eMAG.
- `q-m6-36` (níveis de automação N0–N5) cita o currículo M6 como classificação didática + Lei 14.129 art. 48 — sustenta, com a ressalva (já registrada) de que N0–N5 é taxonomia didática, não padrão legal.
- `q-m6-44` cita boas práticas de anonimização (gov.br) — sustenta a afirmação sobre ocultação segura.
- `q-m6-47` cita WCAG 2.2 e eMAG — sustenta.

Inconsistências de sustentação M6: nenhuma fonte claramente incorreta identificada.

## 5. Redundância semântica

Similaridade lexical (Jaccard ≥ 0,30) dentro de cada módulo:

- M1: **0 pares** acima do limiar. Redundância conceitual manual identificada:
  - `q-m1-26` ↔ `q-m1-36` — animação vs. transição (mesmo conceito, gabarito B em ambas).
  - `q-m1-27` ↔ `q-m1-37` — escopo do Slide Mestre (mesmo conceito, gabarito "errado" em ambas).
  - `q-m1-28` ↔ `q-m1-38` — sincronização vs. backup no OneDrive (mesmo conceito, gabarito B/`certo`).
  - `q-m1-29` ↔ `q-m1-38` — OneDrive não é backup imutável (relacionado).
  - `q-m1-06` ↔ `q-m1-39` — histórico de versões (relacionado).
  - `q-m1-11` ↔ `q-m1-18` — estilos de título e sumário (relacionado).
- M4: **1 par** acima do limiar: `q-m4-10` ↔ `q-m4-85` (0,35) — ameaça/vulnerabilidade/risco (mesmo conceito, gabaritos E e A). Redundância conceitual manual adicional:
  - `q-m4-08` ↔ `q-m4-47` — RPO/RTO (mesmo conceito).
  - `q-m4-07` ↔ `q-m4-54` — estratégia 3-2-1 (mesmo conceito).
  - `q-m4-71` ↔ `q-m4-84` — controles compensatórios (mesmo conceito).
  - `q-m4-19` ↔ `q-m4-50` — gestão de logs/auditoria (relacionado).
  - `q-m4-21` ↔ `q-m4-60` — phishing vs. spear phishing (relacionado, distintos).
- M6: **1 par** acima do limiar: `q-m6-05` ↔ `q-m6-34` (0,31) — eficiência/administração digital (relacionado). Redundância conceitual manual adicional:
  - `q-m6-31` ↔ `q-m6-42` — governança de redes sociais (relacionado).
  - `q-m6-36` ↔ `q-m6-37` ↔ `q-m6-38` — níveis de automação/supervisão/vazamento (relacionados, cenários distintos).
  - `q-m6-45` ↔ `q-m6-46` — sínteses aplicadas (relacionados).

Recomendação (sem executar): consolidar ou diferenciar por cenário os pares fortes (M1: q-m1-26/36, q-m1-27/37, q-m1-28/38; M4: q-m4-10/85, q-m4-08/47, q-m4-07/54, q-m4-71/84). As redundâncias moderadas podem ser mantidas se os cenários forem suficientemente distintos.

## 6. Alinhamento curricular

- `audit_learning_assets.mjs`: 0 tópicos-pai sem questão e 0 sem flashcard em todos os 8 módulos (132 tópicos).
- Todas as 176 questões de M1/M4/M6 mapeiam para tópicos existentes em `curriculum*.js` (formato `modulo-N-unidade-N-topico-N-sub-N` ou `mN-uN-tN-sN`); 0 referências curriculares desconhecidas.
- M1 cobre unidades 1.1–1.5 (Word, PowerPoint, OneDrive, Excel) e os tópicos `modulo-1-unidade-N-topico-N-sub-N` existem.
- M4 cobre unidades 4.1–4.4 (CIA, malware, rede, LGPD/Marco Civil/LAI/CF) e os tópicos `m4-uN-tN-sN` existem.
- M6 cobre unidades 6.1–6.6 (princípios administrativos, LAI, LGPD, transparência digital, acessibilidade, automação) e os tópicos `m6-uN-tN-sN` existem.

## 7. Limitações da revisão

- A verificação de sustentação fonte×afirmação foi feita por análise textual das fontes declaradas (títulos/organizações/URLs), sem webfetch individual de cada URL. A acessibilidade HTTP de cada URL não foi revalidada.
- A revisão semântica foi focal (por lote), não equivalente a auditoria integral de cada afirmação jurídica/técnica.
- As recomendações de consolidação de redundâncias não foram executadas (conforme instrução: apenas recomendar).
- q-m1-32 usa fonte interna (`simulators.js`); sua verificação depende de inspeção de código, não de URL externa.

## 8. Conclusão

- Estrutura: aprovada (0 falhas nos três scripts).
- Coerência gabarito×análise: **M4 = 0 divergências, M6 = 0 divergências, M1 = 4 divergências** (q-m1-07, q-m1-09, q-m1-11, q-m1-41) — requerem correção de gabarito (sem alterar conteúdo da resposta correta, apenas a letra) ou ajuste da análise.
- Alinhamento curricular: 100% (0 tópicos sem questão, 0 referências desconhecidas).
- Sustentação de fontes: adequada em M1/M4/M6; nenhuma fonte claramente incorreta identificada. M1 possui 4 questões afetadas pelas divergências de gabarito, mas as fontes em si sustentam as afirmações.
- Redundância: 3 pares fortes em M1 (q-m1-26/36, q-m1-27/37, q-m1-28/38), 4 pares fortes em M4 (q-m4-10/85, q-m4-08/47, q-m4-07/54, q-m4-71/84) + pares moderados; M6 com pares relacionados mas cenários distintos.
- Distribuição de gabaritos MC: M1 concentrado em B (10/26); M4 razoavelmente distribuído (A=22, B=22); M6 concentrado em A (14/37). Concentrações descritivas; recomenda-se monitorar.

Veredito: **APROVADO COM RESSALVAS** — estrutura, alinhamento curricular e sustentação de fontes aprovados; 4 divergências gabarito×análise em M1 e concentração de gabaritos/redundâncias requerem ação em sessão futura. Nenhuma alteração de questão foi realizada nesta revisão.
