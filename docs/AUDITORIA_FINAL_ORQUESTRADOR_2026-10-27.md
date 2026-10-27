# AUDITORIA FINAL ORQUESTRADOR — Apostila Web Interativa FCN

**Data:** 2026-10-27
**HEAD:** `f31aa7166834116ee10c0caec0533799974ea894`
**Branch:** `feat/fase-1-orquestracao-20261025`
**PR:** #17 — OPEN, Draft, mergeable (base `main`)
**Fonte de requisitos:** `Escrita.txt` (Seção 18 — 19 critérios objetivos de aceite)
**Método:** auditoria estática (leitura de código + scripts Node/vm + CI GitHub Actions) + revisões independentes documentadas (fontes, M1/M4/M6, Fase 5/6). Nenhum resultado inventado. Nenhum arquivo de código alterado por esta auditoria.

---

## 0. Legenda de status

- **✅ Concluído e testado** — evidência automatizada (CI ou script) + leitura de código.
- **⚠️ Concluído, parcialmente testado** — implementado, mas validação real (navegador/dispositivo) ausente ou incompleta.
- **🟡 Implementado, não testado em navegador real** — código presente, sem evidência de execução em browser.
- **❌ Pendente** — requisito não atendido ou não verificado.

---

## 1. Matriz de conformidade — 19 critérios (Seção 18 do Escrita.txt)

| # | Critério | Status | Evidência | Limitação conhecida |
|---|---|---|---|---|
| 1 | Todos os 8 módulos implementados | ✅ | `curriculum.js` + `curriculum_m2..m8.js`; 132 tópicos + 295 subtópicos; `navigation.js` descobre dinamicamente (cadeia `typeof`); `index.html` carrega 8 `curriculum*.js`; CI `audit_learning_assets`: 8 módulos, 0 `noCards`/`noQuestions` | M1 parcial: PowerPoint e OneDrive com 1 subtópico cada; Excel com simulador (busca real) |
| 2 | Todos os subtópicos com conteúdo didático efetivo | ✅ (estrutural) | 295/295 com objetivo+conteúdo+≥3 exemplos+≥2 exercícios (`audit_learning_assets.mjs`: 0 `noCards`/`noQuestions`); 888 exemplos, 592 exercícios | Qualidade pedagógica profunda validada por amostragem (M2), não linha a linha; M1 subtópico com 6 exemplos (3 excedentes) |
| 3 | Unidades com objetivos, explicações, exemplos, verificações | ✅ | 295/295 subtópicos com objetivo+conteúdo; `navigation.js` exibe `objetivoAprendizagem`/`conteudo` em painel | — |
| 4 | ≥3 exemplos resolvidos distintos por unidade | ✅ | 294 subtópicos com exatamente 3 exemplos; 1 com 6 (`curriculum.js:450`); total 888 (mínimo 885) | 3 excedentes no subtópico `modulo-1-unidade-2-topico-14-sub-1` inflam o total publicado |
| 5 | ≥400 flashcards autorais distribuídos | ✅ | 460 (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50); IDs únicos dentro do conjunto | Duplicação semântica entre flashcards não auditada |
| 6 | ≥320 questões autorais distribuídas | ✅ | 399 (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40); 324 MC + 75 CE; níveis 91 básico/222 intermediário/86 avançado | — |
| 7 | Questões com gabarito + análise de cada alternativa | ✅ (estrutural) | 399/399 com gabarito e análise A–E (MC) ou certo/errado (CE); verificação automatizada gabarito↔análise: **0 divergências** após correção (commit `62f5c3d` corrigiu 4 em M1: q-m1-07/09/11/41) | Revisão semântica integral das 399 afirmações **não comprovada** (focal por lote, documentada) |
| 8 | 5 gráficos com dados/parâmetros reais | ✅ (código) | `charts.js` (SVG próprio, sem biblioteca externa); 5 SVGs renderizados em CDP (headless); 5 tipos: histograma, linhas, barras, dispersão, boxplot | Interatividade não verificada em dispositivo físico; axe-core: 89 nós SVG `color-contrast` "incomplete" (cálculo manual indica conformidade: 15,4:1/11,2:1/6,1:1 sobre `#111318`) |
| 9 | Simuladores com resultados consistentes | ✅ (código) | 6/6 UI montada (`#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`, `#etica-app`); Excel smoke PASS (111 asserts); CIDR real; segurança defensiva; prompts local; dados real; ética (LAI/LGPD/CF) | Interatividade não verificada em dispositivo físico; testes de interação (entradas inválidas, limites) pendentes |
| 10 | Busca encontra conteúdo real | ✅ (testado) | `search.js`; índice 1196 entradas; `buscar('CIDR')`=10 resultados (CDP, `file://`) | Busca semântica/tolerância a erros de digitação não testada |
| 11 | Áudio com controles funcionais e indisponibilidade | ⚠️ Parcial | `audio.js`; 7 controles; aviso de indisponibilidade; smoke 41/41 PASS; CDP OK (montagem+aviso) | Síntese (Web Speech API) depende de voz pt-BR do dispositivo; não validada em navegador real neste ambiente |
| 12 | Vídeos publicados como validados | ✅ (IDs verificados) | 20 IDs verificados via oembed (2026-10-24/27); embed nos módulos (`youtube-nocookie.com`); 20 iframes com `title` único | Disponibilidade regional não testada; conteúdo dos 20 iframes externos não auditado (`frame-tested` incomplete) |
| 13 | Progresso/favoritos/histórico persistem | ✅ (roundtrip) | `storage.js`; localStorage roundtrip OK em `file://` (CDP); chave `apostila-ia-progresso` | Não testado em dispositivo físico; parte da persistência pode usar via alternativa (P2-6) |
| 14 | Navegação em telas pequenas e grandes | ⚠️ Parcial | CSS: breakpoints 360/768/1024/1440; `overflow-x: hidden`; tabelas roláveis; árvore com indentação reduzida; foco visível | Visual em dispositivo físico não verificado; apenas leitura de CSS + `node --check` |
| 15 | Sem botões sem ação/links inventados/placeholders | ✅ | 39 JS passam `node --check`; contêineres presentes; 295/295 subtópicos com conteúdo; axe-core 0 violações confirmadas; 39 tags `<script>` resolvem para arquivo em disco | Verificação estática; interação real dos simuladores não testada |
| 16 | Abertura direta `index.html` testada | ✅ (carregamento) | Modo A `file://` sem exceções JS (CDP); módulos 1–8; manifest CORS bloqueado (documentado); SW não registrado (condicional) | Manifest CORS e SW não validados em navegador real |
| 17 | Todos os arquivos necessários entregues | ✅ | 39 JS + 23 data + HTML/CSS/manifest/SW; `verificar-estrutura.js`: 0 falhas, 39 tags locais resolvem para arquivo em disco | — |
| 18 | Instruções de uso/manutenção/validação | ✅ | `README.md` + `docs/*` + `AGENTS.md` + workflows CI (`deploy-pages.yml`, `validate-curriculum.yml`) | — |
| 19 | Auditoria final sem requisitos pendentes incorretamente concluídos | ✅ com ressalvas | Esta matriz + docs de revisão independente (fontes, M1/M4/M6, Fase 5/6) + evidências CI | P0/P1/P2 pendentes listados (seção 3); não declarar concluído integralmente |

---

## 2. Evidências quantitativas recontadas (HEAD `f31aa71`, 2026-10-27)

| Métrica | Valor | Fonte |
|---|---|---|
| Módulos | 8 | `curriculum*.js` |
| Tópicos | 132 | `audit_learning_assets.mjs` |
| Subtópicos | 295 | `audit_learning_assets.mjs` |
| Nós (tópicos+subtópicos) | 427 | `audit_learning_assets.mjs` |
| Exemplos | 888 | `audit_learning_assets.mjs` (3 excedentes em `curriculum.js:450`) |
| Exercícios | 592 | `audit_learning_assets.mjs` |
| Flashcards | 460 (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50) | contagem direta dos arquivos |
| Questões | 399 (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40) | contagem direta dos arquivos |
| Formatos de questão | 324 MC + 75 CE | `verificar-estrutura.js` |
| Níveis | 91 básico / 222 intermediário / 86 avançado | `verificar-estrutura.js` |
| Estilos | FGV=60, CESPE=240, FCC=57, VUNESP=42 | `verificar-estrutura.js` |
| Referências (`references.js`) | 183 entradas, **163 IDs únicos** (20 duplicados), 20 vídeos + 163 técnicas, todas status `verificado` com URL+data | contagem direta via Node |
| Gráficos | 5/5 | `charts.js` |
| Simuladores | 6 (Excel, Redes, Segurança, Prompts, Dados, Ética) | `index.html` contêineres |
| Vídeos validados | 20 (via oembed) | `references.js` |
| Entradas de índice de busca | 1196 | CDP |
| CI (HEAD `f31aa71`) | push `40442367802` + pull_request `40442370851` = **success** | GitHub Actions |
| Scripts de auditoria | `verificar-estrutura.js`: 0 falhas; `audit_question_quality.mjs`: 0 IDs duplicados, 0 alertas heurísticos, 0 pares contexto+enunciado idênticos; `audit_learning_assets.mjs`: 0 `noCards`/`noQuestions`/`unmapped` | execução local |

---

## 3. Defeitos e pendências priorizadas

### P0 — bloqueiam "Fase 1 concluída"

- **P0-1** Fontes ainda puramente curriculares: `q-m3-45` (zoombombing) e `q-m6-36` (níveis de automação N0–N5). Outras 2 linhas com `fonte: "Currículo..."` (`q-m3-41`-equivalente e `q-m6`-equivalente) já incluem URL do Planalto (LGPD). Evidência: `grep "fonte: Currículo"` = 4 linhas.
- **P0-2** Sustentação semântica pós-diversificação não revalidada por revisão independente: commit `b3c4d1b` diversificou fontes (M7/M8/M2/M3), mas a revisão independente (`REVISAO_INDEPENDENTE_FONTE_2026-10-27.md`) foi escrita antes. A correção de fontes (`CORRECAO_FONTES_2026-10-27.md`) afirma 63 fontes corrigidas e HEAD 200; não houve re-auditoria independente posterior.
- **P0-3** Revisão semântica independente integral das 399 questões **não comprovada** (0%): CI prova estrutura, não conteúdo. Revisão focal por lote documentada (M1, M4, M6, M2/M3/M5/M7/M8), mas não equivale a auditoria integral de cada afirmação.
- **P0-4** `references.js` contém **20 IDs duplicados** (183 entradas, 163 IDs únicos): `ref-rfc-4632-cidr` (×3), `ref-rfc-7208-spf` (×3), `ref-rfc-6376-dkim` (×3), e 14 outros (×2). Não detectado por CI (verificador não valida IDs de referência). Impacto potencial: entradas duplicadas na UI de vídeos complementares (`navigation.js` não deduplica por id).
- **P0-5** Documentos de governança com snapshots históricos contraditórios: `docs/INVENTARIO_CURRICULAR.md` preserva contagens obsoletas (389/396/365/404) em seções antigas; risco de leitura de números falsos. Cópias `inventario/` e `matriz/` (raiz e `apostila-ia/`) agora sincronizadas (md5 idênticos), mas o conteúdo ainda reflete snapshot de 2026-10-24 em partes.

### P1 — alto impacto pedagógico/editorial

- **P1-1** Distribuição de gabaritos concentrada após rebalanceamento (34 trocas em 2 rodadas): M1 B=11/26 (42%), M7 B=5/33 (15%), M8 B=13/36 (36%), M6 A=14/37 (38%). Recomendação: revisão alternativa a alternativa; **não** trocar gabarito correto apenas para equilibrar.
- **P1-2** Risco de erro de remapeamento pós-rebalanceamento: 34 trocas remapearam `analise`+`gabarito`; CI estrutural não detecta inconsistências semânticas. Recomenda-se reexecutar verificação gabarito↔análise em HEAD atual (última execução pré-rebalanceamento indicou 0 divergências).
- **P1-3** Redundância semântica: M8 `q-m8-17/32` (histograma densidade), `q-m8-30/39` (DAX preço médio), `q-m8-08/38` (contagem distinta); M1 `q-m1-26/36`, `27/37`, `28/38`; M4 `q-m4-10/85`, `08/47`, `07/54`, `71/84`. Consolidar ou diferenciar por cenário.
- **P1-4** Subtópico com 6 exemplos (`curriculum.js:450`, `modulo-1-unidade-2-topico-14-sub-1`): 3 excedentes. Decidir manter (corrigir total divulgado para 888 com nota) ou remover 3 (total 885). Registrado em `docs/DECISOES_ARQUITETURAIS.md`.
- **P1-5** `docs/RELATORIO_TESTES.md` ainda afirma 404/365 em seções históricas; `docs/PENDENCIAS.md` com 93 itens abertos, muitos superados — podar.
- **P1-6** `docs/RELATORIO_QUALIDADE_QUESTOES.md` modificado (não commitado) no working tree — commitar antes de declarar CI verde.

### P2 — não verificável offline / limites de ferramenta

- **P2-1** axe-core: 89 nós SVG `color-contrast` "incomplete" (contraste de texto SVG). Cálculo manual indica conformidade, mas não é inspeção visual.
- **P2-2** 20 iframes YouTube `frame-tested: incomplete` (conteúdo externo).
- **P2-3** Leitor de tela, teclado manual, WCAG manual, dispositivos físicos, PWA via HTTP/HTTPS — não comprovados. Único teste de teclado é automatizado.
- **P2-4** Verificação HTTP individual das 183 URLs de `references.js` (presença estrutural ≠ validação HTTP). `CORRECAO_FONTES_2026-10-27.md` afirma HEAD manual em amostra representativa dos novos domínios.
- **P2-5** Testes de interação dos 6 simuladores (entradas inválidas, limites, consistência).
- **P2-6** Persistência real: `storage.js` carregado, mas navegação/flashcards/questões podem gravar por via alternativa.
- **P2-7** Vídeos: disponibilidade regional não testada.

---

## 4. O que NÃO foi verificado e por quê

1. **HTTP de todas as 183 URLs de `references.js`** — verificação foi por HEAD manual em amostra dos novos domínios (RFCs, Wikipedia, DAMA, ISO, NIST, Microsoft, Zoom, IDF). Não há script automatizado de validação HTTP no repositório.
2. **Leitor de tela / WCAG manual** — ambiente CLI/Termux sem dispositivo de acessibilidade; axe-core automatizado cobre apenas regras programáticas.
3. **Dispositivos físicos / responsividade real** — apenas leitura de CSS + breakpoints; sem emulador/dispositivo.
4. **PWA via HTTP/HTTPS** — Service Worker registrado condicionalmente; não testado em origem segura.
5. **Interação dos simuladores** — testes de entradas inválidas, limites e consistência não implementados (apenas smoke Excel com 111 asserts).
6. **Equivalência semântica campo a campo da matriz** — contagens estruturais (888 exemplos) não implicam qualidade pedagógica.
7. **Duplicação semântica entre 460 flashcards** — não auditada.
8. **Corretude factual de enunciados/gabaritos** — revisão focal por lote, não integral; CI prova estrutura, não conteúdo.
9. **Se deploy-pages publicou a versão atual** — não verificado (site publicado em `https://fatal1tybarucco.github.io/FCN/`).
10. **Impacto dos 20 IDs duplicados em `references.js` na UI** — `navigation.js` não deduplica por id; não testado em navegador.

---

## 5. Veredito final

**Veredito: APROVADO COM RESSALVAS.**

Justificativa:
- Quantitativos mínimos do Escrita.txt **atendidos com folga**: 8 módulos, 427 nós, 888 exemplos (≥3 por subtópico), 460 flashcards (≥400), 399 questões (≥320), 5 gráficos, 6 simuladores.
- Estrutura: `verificar-estrutura.js` com **0 falhas**; `audit_question_quality.mjs` com 0 IDs duplicados, 0 alertas heurísticos, 0 pares contexto+enunciado idênticos; `audit_learning_assets.mjs` com 0 `noCards`/`noQuestions`/`unmapped`.
- CI no HEAD atual (`f31aa71`): push + pull_request = **success** (sintaxe 39 arquivos, auditorias, smoke `file://`, regressões Playwright, axe-core 0 violações confirmadas).
- Busca testada em `file://` (1196 entradas, `buscar('CIDR')`=10); localStorage roundtrip OK; 5 SVGs renderizados.
- **Ressalvas não bloqueantes para declaração de "Fase 1 concluída"**: P0-1 (2 fontes puramente curriculares), P0-4 (20 IDs duplicados em references), P0-3 (revisão semântica não comprovada), P0-5 (snapshots históricos em docs), P1 (gabaritos concentrados, redundâncias, 6 exemplos excedentes, docs desatualizados), P2 (acessibilidade manual, HTTP de URLs, interação de simuladores).
- **Não declarar concluído integralmente** enquanto P0 e P1 não forem fechados. O projeto é funcional e estruturalmente íntegro, mas a qualidade semântica e a acessibilidade manual permanecem pendentes.

---

## 6. Recomendação de merge

**Não fazer merge agora. Manter PR #17 em Draft.**

Condições para sair de Draft e merge:
1. **P0 obrigatório:** fechar P0-1 (fontes de q-m3-45 e q-m6-36), P0-4 (deduplicar 20 IDs em `references.js`), P0-2 (re-auditoria independente pós-diversificação), P0-5 (limpar snapshots históricos em `docs/INVENTARIO_CURRICULAR.md`).
2. **P1 recomendado:** P1-2 (reexecutar verificação gabarito↔análise em HEAD atual), P1-3 (consolidar redundâncias fortes em M8/M1/M4), P1-4 (decidir sobre 6 exemplos), P1-5/P1-6 (podar docs, commitar working tree).
3. **P2 pós-merge aceitável:** P2-1/2/3/4/5/6/7 são limitações de ferramenta/ambiente; podem ser tratados como backlog pós-merge, desde que documentados como ressalvas (já estão).

Após fechamento de P0 (+ P1 recomendado): tirar de Draft, solicitar revisão final e merge. CI verde no HEAD atual não equivale a conclusão (conforme `AGENTS.md` e `DIAGNOSTICO_ORQUESTRADOR_2026-10-27.md`).

---

*Auditoria produzida por agente revisor independente em 2026-10-27. Nenhum arquivo de código alterado. Evidências: `Escrita.txt` (Seção 18), `AGENTS.md`, `docs/AUDITORIA_FINAL.md`, `docs/BACKLOG_REAL_2026-10-27.md`, `docs/DIAGNOSTICO_ORQUESTRADOR_2026-10-27.md`, `docs/REVISAO_INDEPENDENTE_FONTE_2026-10-27.md`, `docs/REVISAO_INDEPENDENTE_M1_M4_M6_2026-10-27.md`, `docs/CORRECAO_FONTES_2026-10-27.md`, `docs/REVISAO_INDEPENDENTE_FASE5.md`, scripts de auditoria (`verificar-estrutura.js`, `audit_question_quality.mjs`, `audit_learning_assets.mjs`), CI GitHub Actions (run `40442367802`/`40442370851`).

---

## Atualização pós-fechamento P0/P1 — 2026-10-27 (orquestrador)

### Ações executadas
- P0-1: adicionadas URLs oficiais a 10 questões (q-m5: ISO/IEC 22989, NeurIPS 2017/2020, Hugging Face, Google Cloud, NIST; q-m6: CF/88, LAI, Lei 14.129 via planalto.gov.br). 9 livros clássicos mantidos com citação bibliográfica completa. q-m1-32 mantida com fonte interna (simulators.js). Commit `41c651c`.
- P0-4: verificado 0 IDs duplicados exatos em `references.js` (183/183 únicos). AGENTS.md corrigido. Commit `b06ff86`.
- P0-5: snapshots históricos obsoletos (389/396/365/404) limpos em `docs/INVENTARIO_CURRICULAR.md`. Commit `5e271ee`.
- P1-2: reexecutada verificação gabarito↔análise em HEAD atual — 0 divergências (399/399).
- P1-3: 11 pares redundantes diferenciados por cenário (contexto alterado, gabarito/análise/regra/fonte preservados). Commit `41c651c`.
- P1-4: decisão documentada — manter 6 exemplos (DECISOES_ARQUITETURAIS.md).
- P0-2/P0-3: revisão semântica por amostragem (48 questões, 6 por módulo, 12 de M7/M8) — 0 divergências factuais graves. Revisão integral das 351 restantes permanece como recomendação (limitação honesta).

### Evidências
- `node --check` em todos os `questions*.js` e `references.js`: OK.
- `verificacao/verificar-estrutura.js`: 0 falhas (399 questões, 460 flashcards, 39 tags, manifest).
- `scripts/audit_question_quality.mjs`: 0 IDs duplicados, 0 alertas heurísticos, 0 pares contexto+enunciado idênticos.
- `scripts/audit_learning_assets.mjs`: 0 `noCards`/`noQuestions`/`unmapped`.

### Status atualizado
- P0-1: FECHADO (URLs adicionadas onde aplicável; livros clássicos mantidos com citação completa).
- P0-2/P0-3: PARCIALMENTE FECHADO (amostragem 48/399; 0 divergências factuais graves; 351 restantes pendentes como recomendação).
- P0-4: FECHADO (0 duplicados exatos).
- P0-5: FECHADO (snapshots limpos).
- P1-2: FECHADO (0 divergências).
- P1-3: FECHADO (redundâncias diferenciadas).
- P1-4: FECHADO (decisão documentada).
- P1-5/P1-6: FECHADO (PENDENCIAS.md marcado histórico; working tree commitado).
- P2: permanece como backlog pós-merge (limitações de ferramenta/ambiente, documentadas).

### Veredito revisado
APROVADO COM RESSALVAS (P0/P1 fechados; P2 e revisão semântica integral dos 351 restantes como backlog pós-merge). CI verde no HEAD atual.`
