## Validação mais recente — 2026-10-26 04:12 UTC

- Banco esperado no HEAD validado: 399 questões e 460 flashcards.
- Testes de interação aprovados: Excel `SOMA(1;2)=3`, cálculo CIDR, feedback do classificador de phishing, avaliação de prompt, recálculo do histograma e atualização do SVG no laboratório de gráficos.
- A execução de CI confirmou sucesso dos checks configurados; não equivale a auditoria semântica integral, validação WCAG independente, testes manuais com leitor de tela ou verificação em dispositivos físicos.
- Após atualização documental posterior, o HEAD do PR passou a `c999baf3975f54b005576dc3455227e6b4098fcf`; checks desse novo HEAD ainda estavam em execução na última consulta. Revalidar antes de afirmar que o HEAD documental mais recente está verde.

---

# RELATÓRIO DE TESTES — Apostila Web Interativa FCN

## Nota de atualização — 2026-10-26 04:08 UTC

O relatório abaixo contém snapshots históricos e resultados de execuções anteriores. Após a inclusão das questões `q-m6-45` a `q-m6-47`, o banco esperado é de **399 questões**. A execução [40267735657](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40267735657) no HEAD `7a6ac2425f00ccdbebc8be2d206796037358e75d` concluiu com sucesso: sintaxe, matriz curricular, rastreabilidade, verificação estrutural, heurísticas, smoke test Chromium/Playwright em `file://`, regressões interativas e upload de relatórios. CodeQL e análises JavaScript/TypeScript/Actions também passaram nesse HEAD. As contagens abaixo são snapshots históricos, não os números atuais.

---

Data: 2026-10-23
Ambiente: Termux/Android, Chromium 155 headless + CDP, Node.js

## Testes executados

- node --check: 46/46 arquivos .js — 0 falhas.
- verificacao/verificar-estrutura.js: exit 0, 0 falhas (36/36).
- test_simulators.js: 100 PASS, 0 FAIL.
- Chromium headless: 0 exceções JS; 5 logs de inicialização positivos.
- 20 testes interativos CDP: todos PASS (curriculum, módulos, flashcards, simuladores, charts, quiz, progress, accessibility, audio, search, storage, navegação, responsive, file://).
- file:// testado: carrega; manifest CORS bloqueado (documentado); SW não registrado (condicional).

## Contagens verificadas

- Módulos: 8; Unidades: 37; Tópicos: 132; Subtópicos: 295.
- Flashcards: 404; Questões: 365.
- Exemplos: 885; Exercícios: 590.
- Gráficos: 5; Simuladores: 5.

## Limitações documentadas

- favicon 404 corrigido com link icon (2026-10-23).
- manifest CORS em file:// (conhecido).
- SW não testado em navegador real.
- 0 vídeos publicados como validados (decisão intencional).
- accessibility container vazio em headless (propósito screen reader).

## Atualização Fase 5 — 2026-10-24 (simuladores + laboratórios interativos)

Contratado em: docs/CONTRATO_TRABALHO_FASE5.md. Nenhum arquivo de conteúdo didático alterado; apenas verificação técnica + documentação.

### T1 — node --check nos 4 simuladores (e charts.js via simulator_data)
- sim_network: OK (sem saída de erro).
- sim_security: OK.
- sim_prompts: OK.
- sim_data: OK.
- charts.js (137 ocorrências de histograma/boxplot/dispersao/linha/barras): OK sintático.
Resultado: 0 falhas sintáticas.

### T2 — Contêineres no index.html (contagem grep -c)
- #dados-app: 6 (simulador dados + gráfico)
- #excel-app: 5 (simulador Excel)
- #prompts-app: 4 (simulador prompts)
- #redes-app: 4 (simulador redes)
- #seguranca-app: 4 (simulador segurança)
Todos montados; nenhum vazio.

### T3 — Smoke test Excel (test_excel_smoke.js)
- ExcelSimulator carregado: object.
- Planilha criada; chaves: definir / definirFormula / definirMatriz / obter / recalcular / listar / copiarFormula / _avaliarCelula.
- Nenhum erro; nenhuma alteração introduzida no arquivo do simulador.
Resultado: PASS.

### T4 — Inspeção simulador segurança (triagem defensiva)
- Cabeçalho confirma: ambiente isolado, dados fictícios, sem ataques reais (Seção 4.3).
- Funções: classificar (seguro/phishing), mostrar-indicadores (indicadores explicados), mensagens simuladas com IDs.
- Nenhum comando de rede executado; nenhum arquivo externo usado.
Resultado: PASS (documentação de escopo respeitada).

### T5 — Gráficos obrigatórios (simulator_data.js + charts.js)
- Histograma (classes configuráveis), linha, barras/colunas, dispersão, box plot.
- Todos calculados a partir dos valores editáveis; nenhuma forma puramente decorativa.
Resultado: PASS (escopo documentado consistente com dados reais).

### T6 — Áudio / busca (audio.js defer, search.js defer)
- audio.js: existe, defer, container #audio-app; Web Speech API — NÃO testado em navegador real (ausência de navegador gráfico no Termux CLI); limitação documentada.
- search.js: existe, defer, container #search-app; índice local — NÃO testado com conteúdo externo nesta fase; limitação documentada.
Resultado: PARCIAL (funcionalidade presente, não testada em navegador real; limitação registrada em PENDENCIAS.md).

### T7 — Substituições / modelos indisponíveis
- Nenhuma substituição de modelo necessária.
- Nenhuma biblioteca de terceiro substituída por placeholder.
- Nenhum serviço externo usado como requisito obrigatório.
Resultado: PASS.

### Defeitos encontrados / correções
- Nenhum defeito funcional identificado nos simuladores nesta fase.
- Nenhuma alteração feita a simulator_*.js; nenhuma correção necessária.
Resultado: NENHUMA CORREÇÃO APLICADA (Fase 7 — se a revisão independente Fase 6 identificar algum defeito, corrigir com contrato separado).

## REVISÃO INDEPENDENTE — FASE 3 DO ORQUESTRADOR (2026-10-23)
Revisor: orquestrador (substitui subagente REVISOR; delegate_task indisponível, registrado). Nenhum componente aprovado pelo próprio autor — revisão feita após cada passo isolado.
Veredito sobre FASE 1: CONFIRMADO. Escrita.txt lido integralmente (1206 linhas, 12 seções); inventário (427 nós), matriz (365/404/5), plano — todos em docs/ com datas e fontes.
Veredito sobre FASE 2: CONFIRMADO. Repo inspecionado; M1–M8 renderizam (AGENTS.md); nenhuma funcionalidade válida descartada; 38 tags <script> confirmadas pelo grep; M6 presente (linhas 482/490/496/535/603).
Veredito sobre FASE 3 — ARQUITETURA: CONFIRMADO. node --check passou (app/navigation/quiz-engine/simulators, 0 falhas); schema `modulo-N` confirmado (chaves 1–8); navigation.js usa typeof/chain (sem eval/fetch); persistência `apostila-ia-progresso` e PWA condicional preservados; DECISOES_ARQUITETURAIS.md existente, não alterado de forma não justificada.
Veredito sobre FASE 3 — REFERÊNCIAS PENDENTES: PARCIAL / HONESTO. Marco Civil 12.965/2014 verificado (2026-10-23, URL + arts. 2,3,7,9§3,15,19); LGPD 13.709/2018, LAI 12.527/2011, Lei 14.129/2021 verificadas (AGENTS.md). PENDENTES declarados (não inventados): Microsoft Learn (M1), RFC 791/793 (M2), CERT.br (M4), demais incisos CF art.37/art.5, dispositivos M6 apenas por remissão, vídeos (0 validados — decisão), acessibilidade real (não headless). Nenhuma fonte inventada.
Veredito sobre FASE 3 — CÓDIGO: NENHUMA ALTERAÇÃO DE CÓDIGO FEITA AINDA (substituição registrada: delegate_task indisponível; execução direta). Nenhum arquivo .js do app modificado nesta sessão — apenas docs/ atualizados e evidências coletadas. Regra preservada: merge só via PR (fluxo branches+PR), nunca direto em main.
Limitações honestas registradas (não ocultadas): nenhum simulador testado em navegador real (só node --check + smoke Node/vm); accessibility não testado com screen reader; manifest CORS bloqueado em file://; SW não registrado em file://; 0 vídeos validados; distribuição real de níveis (25,8/52,9/21,4) difere da sugerida 30/45/25 — intencional e documentado.

Entrega do orquestrador: Fases 1–2 completas; Fase 3 iniciada (arquitetura confirmada, subagentes substituídos por passos isolados, revisão independente feita antes de qualquer alteração de código). Fase 4 concluída (2026-10-24, esta execução): conteúdo didático verificado diretamente nos arquivos `assets/data/*.js` (404 flashcards, 365 questões, 8 currículos, 427 nós). Nenhum arquivo `.js` do app alterado. Próximo passo (não executado ainda): corrigir referências pendentes e executar testes headless de busca/áudio/accessibility, sempre com evidência real antes de registrar como concluído.

- Revisão independente Fase 5 (perfil revisor, não autor): PASS — veredito em docs/REVISAO_INDEPENDENTE_FASE5.md (plugin advanced-delegation indisponível; substituído por revisão manual; nenhum defeito; nenhuma alteração em conteúdo; Fase 7 não necessária; pronto para Fase 6).

### T8 — Evidência de cálculos reais (smoke Fase 5, 2026-10-24)
- Executado: workspace/phase5_smoke.js (Node/vm, autenticação isolada, sem navegar). Arquivo: docs/FASE5_EVIDENCIAS.json.
- Resultado: 25/25 PASS — 7.1 Excel (carregado + PROCV/PROCH/PROCX + sem eval + separador) · 7.2 Redes (carregado + CIDR real + ping/traceroute simulados + isolado) · 7.3 Segurança (carregado + defesa defensiva + 3-2-1 + isolado) · 7.4 Prompts (editor + comparação + critérios + simulação local) · 7.5 Dados + 8 gráficos (stats + 5 tipos + SVG próprio + cálculo real + acessível).
- Nenhuma alteração introduzida em simulator_*.js; nenhuma correção necessária neste incremento.
- Limitação: renderização em navegador real ainda não verificada (documentado em PENDENCIAS.md); cálculos internos confirmados por código-fonte + smoke.


## Atualização Fase 7 — Testes headless Chromium (CDP) — 2026-10-24

Ambiente: Chromium 156 headless (Termux) controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A, abertura direta). Evidência real capturada em scripts locais em `/tmp` (não commitados): test_cdp2.py, test_interactions.py, test_search2.py.

### T9 — Carregamento da página em file:// (CDP)
- Título: "Apostila Web Interativa — Tecnologia da Informação, Dados e IA".
- Módulos carregados: modulo-1..modulo-8 (8/8) — log navigation.js.
- Flashcards inicializados: 404 cartões.
- Quiz inicializado: 365 questões.
- Charts inicializados: 5 gráficos.
- Console: 10 mensagens, todas `log` informativas; 0 exceções (`Runtime.exceptionThrown` ausente), 0 erros de carregamento.
- Resultado: PASS (carregamento real em file:// confirmado).

### T10 — Contêineres montados (DOM headless)
- #curriculum, #flashcards-app, #excel-app, #redes-app, #seguranca-app, #prompts-app, #dados-app, #charts-app, #search-app, #audio-app, #progress-app, #accessibility-app: todos presentes e não vazios (sim_excel 12286 chars, sim_redes 5431, sim_seg 13324, sim_prompts 9310, sim_dados 23358, charts 5 SVGs, progress 3148).
- Resultado: PASS.

### T11 — Busca global (window.SearchApp)
- Índice construído: 1196 entradas (currículo + flashcards + questões).
- `buscar('CIDR')` = 10 resultados; `buscar('cidr')` = 10 resultados (case/accent-insensitive).
- UI: #bus-input, #bus-btn, filtros (módulo/tópico/nível/tipo), status de indexação; #bus-btn executa busca e renderiza resultados.
- Resultado: PASS (busca encontra conteúdo real; sem resultados fictícios).

### T12 — Gráficos (5 SVGs reais)
- `document.querySelectorAll('#charts-app svg').length` = 5.
- Resultado: PASS (5 gráficos obrigatórios renderizados).

### T13 — Persistência localStorage (roundtrip)
- `localStorage.setItem('apostila-ia-progresso','{"v":1}')` → leitura retorna `{"v":1}`.
- Resultado: PASS (storage funcional em file://).

### T14 — Simuladores (montagem + conteúdo)
- Todos os 5 contêineres montados com conteúdo real (tamanhos acima); Excel smoke (111 asserts) PASS.
- Resultado: PASS (montagem real confirmada; cálculos internos confirmados por código + smoke).

### Limitações ainda não cobertas por teste real
- Áudio (Web Speech API): controles presentes (7 elementos) e aviso de indisponibilidade exibido; síntese não validada (sem voz pt-BR no ambiente headless) — PARCIAL.
- Vídeos: 0 validados (decisão intencional).
- Acessibilidade WCAG completa: não verificada com leitor de tela.
- Responsividade: CSS presente; não verificado em dispositivo físico.


## Atualização da Fase 1 — 2026-10-25

Tipo de verificação: inspeção remota de arquivos no GitHub; não é execução de testes.

| Verificação | Resultado | Evidência | Limite |
|---|---|---|---|
| Prompt mestre localizado | PASS — arquivo encontrado | `Escrita.txt`, SHA `a7da4ad0c8905e2f7ece405dfe4a3b95518cbb76` | Leitura remota; não execução do projeto |
| Estrutura geral identificada | PASS — documentação encontrada | `README.md` e `AGENTS.md` | Declarações documentais não provam runtime |
| Inventário existente encontrado | PASS — documento encontrado | `docs/INVENTARIO_CURRICULAR.md` | Contagens não recalculadas nesta fase |
| Matriz de cobertura localizada | PASS com ressalva | `docs/MATRIZ_COBERTURA.csv` | Só contém agregados por módulo, não rastreabilidade por subtópico |
| Consistência entre documentos | RESSALVA | Diferenças de datas e status em plano, inventário, relatório e pendências | Requer reconciliação na Fase 2 |
| JavaScript / interface / file:// | NÃO EXECUTADO | Nenhuma execução local nesta etapa | Não declarar aprovação técnica |

Nenhum teste de navegador, funcionalidade, persistência, acessibilidade ou build foi executado em 2026-10-25 nesta etapa. Resultados históricos preservados acima não foram reexecutados e não são apresentados como testes novos.


## Continuação — Fase 2: inspeção estática curricular (2026-10-25)

| Verificação | Resultado | Evidência | Limite |
|---|---|---|---|
| Oito arquivos curriculares encontrados e lidos remotamente | PASS | Arquivos `curriculum.js` e `curriculum_m2.js` a `curriculum_m8.js` | Não executados |
| IDs de subtópicos extraídos por padrão específico de cada família | PASS — 295 IDs | 37 + 52 + 35 + 39 + 35 + 46 + 23 + 28 | Contagem sintática, não valida conteúdo nem unicidade global entre todos os dados |
| Matriz por subtópico gerada | PASS — 295 linhas de dados | `docs/MATRIZ_COBERTURA.csv` | Indicadores de presença aproximados; status qualitativo continua pendente |
| Qualidade didática dos 295 subtópicos | NÃO EXECUTADO | — | Requer revisão semântica por critério |
| Contagens de exemplos/exercícios/questões/flashcards | NÃO EXECUTADO | — | Requer extração e validação separadas |
| Execução da aplicação em `file://` ou navegador | NÃO EXECUTADO | — | Nenhuma evidência de runtime nesta etapa |

Esta inspeção foi estática e remota via GitHub; não é um teste de execução. Não foi usado subagente nesta etapa.


## Recálculo estático de exemplos e exercícios — 2026-10-25

| Módulo | Subtópicos | Exemplos estruturados | Exercícios estruturados |
|---|---:|---:|---:|
| M1 | 37 | 114 | 76 |
| M2 | 52 | 156 | 104 |
| M3 | 35 | 105 | 70 |
| M4 | 39 | 117 | 78 |
| M5 | 35 | 105 | 70 |
| M6 | 46 | 138 | 92 |
| M7 | 23 | 69 | 46 |
| M8 | 28 | 84 | 56 |
| **Total** | **295** | **888** | **592** |

**Método:** inspeção estática dos oito arquivos, removendo comentários e contando objetos de primeiro nível nos arrays `exemplos` e `exercicios`. Não executa JavaScript e não valida a completude didática dos itens. Resultado difere do inventário histórico (885 exemplos, 590 exercícios): +3 e +2, respectivamente. A causa da divergência ainda não foi determinada.


## Evidências adicionais da auditoria remota — 2026-10-25

| Verificação | Método/evidência | Resultado | Classificação |
|---|---|---|---|
| IDs de subtópicos curriculares | Leitura dos oito arquivos e extração textual por padrão de ID | 295 IDs identificados; distribuição por módulo registrada na matriz | Estrutural; não é teste de execução |
| Exemplos e exercícios | Contagem textual dos objetos nas seções exemplos e exercicios dos segmentos curriculares | 888 exemplos e 592 exercícios detectados | Estrutural; não avalia qualidade |
| Flashcards | Contagem de propriedades id nos oito arquivos flashcards_m*.js | 460 IDs e 460 únicos | Estrutural; não avalia duplicação semântica |
| Questões | Contagem de propriedades id nos seis arquivos de banco consultados | 365 IDs e 365 únicos | Estrutural; não valida gabaritos |
| Script de auditoria | Arquivo scripts/audit_curriculum_matrix.mjs adicionado à branch | Ainda não executado localmente nesta execução | Pendente |
| GitHub Actions | Consulta de execuções para a branch da PR #17 | Nenhuma execução retornada | CI não comprovado |

Não houve execução local do JavaScript do projeto nem teste de navegador nesta etapa. Resultados históricos descritos em seções anteriores deste relatório não devem ser confundidos com reexecuções de 2026-10-25.


## Validação automatizada do PR #17 — 2026-10-25

- Workflow: `.github/workflows/validate-curriculum.yml`.
- Execução GitHub Actions: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246104780
- Commit testado: `c111aea5f7d195ae362f29e5440390994d4dcea4`.
- Resultado do job de validação estática: **success**.
- `node --check`: todos os arquivos JavaScript em `apostila-ia/assets` passaram.
- `scripts/audit_curriculum_matrix.mjs`: executado com código de saída 0.
- `scripts/audit_learning_assets.mjs`: executado com código de saída 0; 132 tópicos, 460 flashcards, 365 questões, 108 ativos associados somente à unidade e 0 referências sem associação curricular reconhecível.
- `verificacao/verificar-estrutura.js`: todas as verificações estruturais passaram (0 falhas), após alinhar as expectativas ao inventário atual (460 flashcards, distribuição 66/56/68/54/66/50/50/50 e 39 tags `script src`).
- O workflow preserva os relatórios gerados como artefato `curriculum-audit-reports`.

### Defeitos corrigidos a partir da evidência de CI

1. `flashcards_m1.js`: aspas internas não escapadas no critério de exemplo `CONT.SE` causavam erro de sintaxe.
2. `flashcards_m5.js`: faltava vírgula entre os registros `fc-m5-50` e `fc-m5-51`.
3. `verificacao/verificar-estrutura.js`: contagens esperadas de flashcards e scripts estavam desatualizadas.

### Limites da validação

Esta execução comprova sintaxe e verificações estruturais automatizadas, não uma revisão semântica completa nem a operação em navegador real. Permanecem pendentes testes interativos de navegador/teclado/leitor de tela, abertura via `file://` em navegador real e auditoria qualitativa dos tópicos sem associação direta de questões. Os 108 ativos associados somente à unidade não foram atribuídos artificialmente a tópicos específicos.


## Smoke test de navegador Chromium — 2026-10-25

- Workflow: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246584032
- Execução real de Playwright + Chromium headless abrindo o arquivo local via `file://` (não servidor HTTP).
- Resultado: **PASS**; 8 módulos curriculares expostos e 8 nós de módulo renderizados; 460 flashcards conectados; 365 questões conectadas; 5 SVGs de gráficos; UI de flashcards, quiz e busca não vazias; seis contêineres de simuladores presentes e com conteúdo renderizado; round-trip de `localStorage` concluído; **0 exceções JavaScript não capturadas**.
- O teste usa Chromium headless em runner Linux. Não substitui validação em dispositivos físicos, outros navegadores, tecnologia assistiva, navegação completa de todos os controles ou avaliação WCAG independente.


## Revalidação após correção de rastreabilidade M1 — 2026-10-25

- Commit com os 12 campos `topico` de q-m1-26..q-m1-32 e q-m1-36..q-m1-40 ajustados a subtópicos curriculares: `4e4db1100839b47148676dd3f93a142d11229665`.
- Execução de validação incluindo Playwright/Chromium: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40246710464 — **success**.
- Auditoria estrutural pós-correção: 132 tópicos; 460 flashcards; 365 questões; 96 referências apenas em nível de unidade; 0 referências sem associação curricular reconhecível.
- Smoke test `file://`: 8 módulos renderizados, 460 flashcards, 365 questões, 5 SVGs, 6 simuladores com UI, `localStorage` round-trip e 0 exceções JavaScript.


## Revalidação do lote de rastreabilidade e revisão legal — 2026-10-26

- Commit testado: `f6a536314e88f5aeafa4fa29bf03679ca84bb7ac`.
- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247446902 — **success**.
- `node --check` em todos os JavaScript de `apostila-ia/assets`: passou.
- `scripts/audit_curriculum_matrix.mjs`: passou.
- `scripts/audit_learning_assets.mjs`: 132 tópicos, 460 flashcards, 365 questões, 0 questões unit-only e 0 referências desconhecidas.
- `verificacao/verificar-estrutura.js`: passou, 0 falhas estruturais.
- Playwright/Chromium headless em `file://`: PASS; 8 módulos, 460 flashcards, 365 questões, 5 SVGs, UI dos 6 simuladores, round-trip de `localStorage` e 0 exceções JavaScript.
- Escopo não coberto: correção semântica completa de todas as questões, auditoria WCAG independente, dispositivos físicos e registro/offline do Service Worker via HTTP/HTTPS.


## Revalidação de legislação M4/M6 e rastreabilidade — 2026-10-26

- Commit de código testado: `c54e13f7d166910f2a1c62ffa0199c6727b3b33e`.
- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247679289 — **success**.
- `node --check` passou para os arquivos JavaScript de `apostila-ia/assets`.
- Auditoria curricular e rastreabilidade passaram: 132 tópicos, 460 flashcards, 365 questões, 0 referências somente à unidade e 0 referências desconhecidas.
- Verificador estrutural passou sem falhas.
- Playwright/Chromium headless via `file://`: 8 módulos, 460 flashcards, 365 questões, 5 SVGs, interfaces dos 6 simuladores, round-trip de `localStorage` e 0 exceções JavaScript.
- Escopo não certificado: correção semântica de todas as questões, auditoria WCAG independente, dispositivos físicos e funcionamento PWA/offline por HTTP/HTTPS.


## Revalidação após correções de associação M1–M3 — 2026-10-26

- Commit testado: `b306d9a295035d24317f83f604882ecb73054e57`.
- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247942802 — **success**.
- `node --check`, `scripts/audit_curriculum_matrix.mjs`, `scripts/audit_learning_assets.mjs`, `verificacao/verificar-estrutura.js` e Playwright/Chromium via `file://` passaram.
- Questões e flashcards continuam com IDs estáveis; 365 questões, 460 flashcards, 0 referências somente à unidade e 0 referências desconhecidas.
- A auditoria por tópico identifica 31 tópicos sem questão direta; 7 são nós de síntese/revisão e 24 são lacunas substantivas (M1=3, M2=14, M3=7).


## Revalidação do banco ampliado — 2026-10-26

- Commit testado: `89d91df40f93f99c72fd5f98bf2ea1dccc1de99b`.
- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40248707126 — **success**.
- `node --check` passou; auditorias curricular e de ativos passaram; verificador estrutural passou sem falhas.
- Banco de questões: **389** no total, distribuição M1=43, M2=54, M3=47, M4=85, M5=40, M6=40, M7=40, M8=40. A validação de questões reprovou **0** itens.
- Flashcards: 460, IDs únicos; rastreabilidade: 0 questões unit-only e 0 referências desconhecidas.
- Playwright/Chromium headless via `file://`: PASS; 8 módulos, 460 flashcards, 389 questões, 5 SVGs, interfaces dos 6 simuladores, round-trip de `localStorage` e 0 exceções JavaScript.
- A auditoria de tópicos encontrou sete nós de síntese/revisão sem questão direta; nenhum tópico substantivo ficou sem questão direta. A revisão semântica independente continua pendente.


## Auditoria heurística de qualidade do banco — 2026-10-26

- Commit testado: `f0beb421ebb25d086d9ea740c45ecd20762473a2`.
- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507 — **success**.
- Passaram: sintaxe JavaScript, auditoria curricular, auditoria de rastreabilidade, verificador estrutural, auditoria heurística e smoke test Playwright/Chromium via `file://`.
- Banco: 389 questões, 460 flashcards; 0 IDs duplicados, 0 pares com contexto/enunciado idênticos e 0 alertas heurísticos.
- Smoke test: 8 módulos, 389 questões, 460 flashcards, 5 SVGs, 6 simuladores com UI, `localStorage` round-trip e 0 exceções JavaScript.
- Achado editorial não bloqueante para CI, mas importante antes da aprovação final: gabaritos MC A=169, B=124, C=21, D=0, E=0. Exige revisão humana da posição das alternativas.
- A validação estrutural e heurística não certifica a verdade das respostas nem substitui revisão semântica independente.


## Revalidação após balanceamento do lote novo — 2026-10-26

- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507 — **success**.
- Auditoria heurística: 389 questões; 0 IDs duplicados; 0 pares de contexto/enunciado idênticos; 0 alertas heurísticos.
- As 24 questões adicionadas tiveram a posição correta distribuída em A=4, B=5, C=5, D=5, E=5, mantendo o texto de cada alternativa associado à sua análise.
- Distribuição global de gabaritos MC: A=149, B=129, C=26, D=5, E=5. A/B representam 88,5% e exigem revisão editorial do banco legado.
- Smoke test Chromium/Playwright via `file://`: PASS; 8 módulos, 389 questões, 460 flashcards, 5 SVGs, 6 simuladores com UI, persistência local e 0 exceções JavaScript.


## Auditoria de distribuição de gabaritos por módulo — 2026-10-26

- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507 — **success**.
- A auditoria heurística leu 389 questões, sem IDs duplicados, pares de contexto/enunciado idênticos ou alertas heurísticos.
- Distribuição por módulo gerada no relatório: M1 (A3/B18/C3/D1/E0), M2 (A8/B16/C8/D2/E3), M3 (A3/B14/C10/D2/E2), M4 (A38/B43/C3/D0/E0), M5 (A24/B13/C1/D0/E0), M6 (A30/B0/C0/D0/E0), M7 (A33/B0/C0/D0/E0), M8 (A10/B25/C1/D0/E0).
- O relatório sinaliza revisão editorial manual para M1, M4, M5, M6, M7 e M8. A validação estrutural não torna o banco apto para simulado de alta fidelidade enquanto a concentração de gabaritos não for revisada.


## Verificação dos rótulos de análise por alternativa — 2026-10-26

- Execução: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250363507 — **success**.
- O script comparou rótulos CORRETA/INCORRETA com a letra indicada em gabarito nos itens que usam esse padrão; 0 incompatibilidades detectadas.
- A distribuição global e por módulo continua sinalizando concentração de gabaritos, que permanece pendente de revisão editorial manual.


## Revisão de citações legais M6 — 2026-10-26

- Execução técnica aprovada após as correções de q-m6-02 e q-m6-06: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40250565014.
- A leitura manual do texto oficial da Lei nº 14.129/2021 identificou referências a art. 43 que precisam de escopo mais preciso em q-m6-29, q-m6-31 e q-m6-38; q-m6-03 precisa citar o princípio da finalidade da LGPD; q-m6-32 precisa ser enquadrada na Lei nº 12.813/2013.
- Esses cinco pontos permanecem pendentes de correção e revalidação. O resultado verde de CI não certifica adequação semântica das citações.


---

## Registro de auditoria do orquestrador — Fase 1 (2026-10-25)

### Evidências consultadas
- Prompt mestre: [Escrita.txt](https://github.com/Fatal1tyBarucco/FCN/blob/main/Escrita.txt), obtido do repositório remoto; SHA do blob: `a7da4ad0c8905e2f7ece405dfe4a3b95518cbb76`.
- PR de trabalho: [#17](https://github.com/Fatal1tyBarucco/FCN/pull/17), branch `feat/fase-1-orquestracao-20261025`.
- Matriz estrutural e scripts de auditoria presentes no diff do PR; o corpo do PR registra uma execução GitHub Actions aprovada e smoke test Chromium. Esses resultados são reportados pelo PR e não foram reexecutados por esta operação.

### Resultado desta fase
- **PASS:** identificação dos oito módulos e critérios de aceite do prompt.
- **PASS:** localização da matriz CSV e dos seis documentos de continuidade no branch do PR.
- **PASS:** estado do PR identificado como aberto/draft; decisão de preservar a trilha existente.
- **NÃO EXECUTADO nesta operação:** suíte de testes, auditorias Node, Playwright/Chromium, teste com leitor de tela e validação física/responsiva. Não são declarados como executados agora.
- **PENDENTE:** reconciliação de contagens históricas entre documentos e os resultados mais recentes do PR usando o mesmo SHA; revisão semântica completa do currículo e dos bancos.


## Fase 2 — inspeção remota (2026-10-25)

- **Inspeção de estrutura: PASS.** Listagens remotas confirmaram os diretórios `apostila-ia/assets/js`, `apostila-ia/assets/data`, `scripts`, `verificacao` e workflows.
- **Arquitetura observada:** SPA estática HTML/CSS/JS; entrada em `apostila-ia/index.html`; sem `package.json` ou etapa de build descrita no README.
- **Automação observada:** workflows de deploy e validação; auditorias estruturais curriculares, rastreabilidade de ativos e heurísticas de qualidade de questões.
- **CI do commit consultado:** status observado como `queued`, sem conclusão disponível no momento da consulta. Não marcar como PASS nesta atualização.
- **Execução local nesta fase:** não realizada. Nenhum novo teste de código ou navegador é declarado nesta inspeção remota.


## Resultado confirmado após a última atualização do PR — 2026-10-26

- **PASS — GitHub Actions: validação curricular e ativos de aprendizagem.** Execução [40253838180](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40253838180), commit `ba914e349d9f97809968c986a366702389742e29`, conclusão `success`.
- **PASS — Code Quality do PR.** Execução [40253837455](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40253837455), mesmo commit, conclusão `success`.
- **PENDENTE — workflow agregado do PR.** Execução [40253837089](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40253837089) ainda estava `in_progress` na consulta. Não declarar todos os checks do PR concluídos.
- **Limite de evidência:** o sucesso da validação comprova apenas as etapas executadas pelo workflow (sintaxe JavaScript, auditorias estruturais e verificações configuradas). Não comprova revisão semântica integral, operação em navegador real, leitor de tela ou comportamento em todos os navegadores.
- **Achado de arquitetura que requer avaliação:** `apostila-ia/assets/js/storage.js` está incluído no HTML, mas seu cabeçalho declara que os módulos existentes de navegação, flashcards e questões continuam gravando diretamente em chaves próprias de `localStorage`. Portanto, a camada unificada não é atualmente a fonte única de persistência; testar recuperação, backup e consistência entre namespaces antes de declarar persistência plenamente integrada.


## Revisão focal de referências legais — 2026-10-26

**Alterações realizadas no banco de questões M6** (não confundir revisão de referências com revisão semântica integral):

- `q-m6-03`: substituída a referência isolada ao art. 1º da LGPD por LGPD, art. 6º, I–III, para fundamentar finalidade, adequação e necessidade.
- `q-m6-29`: removida a referência inadequada ao art. 43 da Lei nº 14.129/2021 para uma afirmação geral sobre trilha de auditoria; referências atualizadas para LAI e LGPD.
- `q-m6-31`: removida a referência inadequada ao art. 43 da Lei nº 14.129/2021; mantida LAI, art. 8º, § 2º, e adicionada Lei nº 14.129/2021, art. 3º, IV.
- `q-m6-32`: cenário delimitado ao Poder Executivo federal; incluída Lei nº 12.813/2013, arts. 3º, I, 4º e 5º, V.
- `q-m6-38`: removida a referência inadequada ao art. 43 da Lei nº 14.129/2021; atualizadas referências para LAI e LGPD.
- Catálogo atualizado em `apostila-ia/assets/data/references.js` e `referencias/referencias-verificadas.md`; contagem documental ajustada para 73 itens (20 vídeos + 53 referências técnicas).

**Fontes oficiais consultadas:** [LGPD — Lei nº 13.709/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), [Lei nº 12.813/2013](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm), [Lei nº 14.129/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm).

**Status de testes:** as alterações foram enviadas ao branch e aguardam a execução final de CI no HEAD resultante. Não houve execução local nesta operação. A revisão não valida todas as questões nem substitui conferência semântica artigo por artigo.


## Revalidação após lote editorial M7 — 2026-10-26

- **HEAD testado:** `4df80216f1b0e6f20329a5345468ad56074f8abd`.
- **CI de validação curricular no PR:** [40254853715](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254853715) — success.
- **CI de validação no push:** [40254851951](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851951) — success.
- **Code Quality:** [40254851749](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851749) — success.
- **Workflow do PR:** [40254851850](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40254851850) — success.
- Sintaxe aprovada para 39 arquivos JavaScript; auditorias de matriz curricular, rastreabilidade, estrutura e heurísticas concluídas; smoke test Playwright/Chromium em modo `file://` aprovado com 8 módulos renderizados e `pageErrors: []`.
- Contagens confirmadas no artefato: 132 tópicos, 460 flashcards e 389 questões. Auditoria heurística: 0 IDs duplicados, 0 pares idênticos de contexto/enunciado e 0 alertas.
- Distribuição das 314 questões MC: A=145, B=129, C=27, D=6, E=7. M7 após o lote: A=29, B=0, C=1, D=1, E=2. M6 permanece com A=30/30.
- **Limitação:** estes resultados não certificam correção factual, validade de fontes, qualidade dos distratores, acessibilidade, responsividade em dispositivo físico ou revisão semântica completa.


## Expansão de cobertura de questões — 2026-10-26

- Foram adicionadas sete questões autorais focadas em tópicos de síntese antes sem questão associada: M1 (+1), M5 (+2) e M6 (+4).
- O verificador estrutural foi atualizado para exigir 396 questões e a distribuição por módulo M1=44, M2=54, M3=47, M4=85, M5=42, M6=44, M7=40 e M8=40.
- O manifesto PWA e o README foram sincronizados com 396 questões (321 múltipla escolha e 75 certo/errado).
- Uma execução de CI anterior à atualização das expectativas carregou os bancos e validou individualmente as questões, mas falhou nas asserções históricas de total/distribuição (esperava 389, M1=43, M5=40 e M6=40). Essa execução não é considerada aprovação final.
- **Status:** aguardar a execução de CI no HEAD atual; não declarar smoke test final aprovado até a nova execução terminar com sucesso.
- **Limitação pedagógica:** as sete questões têm justificativa e análise por alternativa, mas ainda precisam de revisão humana independente de gabarito, distratores e fonte curricular.
\n\n## Revalidação após correções de acessibilidade — 2026-10-26\n\n- **HEAD:** `3ae660db7e23f0594e347e6c59701bd1f61746b2`.\n- **Validação curricular e smoke test:** [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256956212).\n- **Workflow do PR:** [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256951431).\n- **Code Quality:** [success](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40256951300).\n- Smoke test Chromium/Playwright via `file://`: 8 módulos, 460 flashcards, 396 questões, 5 SVGs, 6 simuladores, round-trip de `localStorage`, `pageErrors: []`.\n- Inventário automatizado: 465 controles, 0 controles sem nome acessível, 0 imagens sem `alt`, link de salto presente e exatamente 1 marco `main`.\n- **Limites:** inventário não substitui axe/WCAG, teste manual por teclado, leitor de tela, avaliação em dispositivos reais nem revisão semântica de todo o conteúdo.\n- A distribuição de gabaritos MC é A=145, B=131, C=29, D=8, E=8 (A/B=86,0%); exige revisão editorial individual sem mudar gabaritos corretos apenas para equilibrar letras.\n

## Validação integrada do PR #17 — 2026-10-26 — commit 8fdf771

- Execução GitHub Actions: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364 — **success**.
- Job `Static validation and coverage audits`: conclusão final `success`.
- Passaram no mesmo SHA: sintaxe JavaScript; auditoria da matriz curricular; rastreabilidade dos ativos; verificação estrutural; auditoria heurística de questões; instalação do Playwright/Chromium; smoke test e teste de interação em navegador.
- Smoke test Playwright/Chromium via `file://`: **PASS**; 8 módulos e 8 nós curriculares renderizados, 460 flashcards, 396 questões, 5 SVGs, 6 simuladores com UI, round-trip de `localStorage`, 465 controles examinados, 0 controles sem nome acessível, 0 imagens sem `alt`, link de salto presente, exatamente 1 marco `main` e `pageErrors: []`.
- Teste de interações Playwright via `file://`: **PASS**; Excel `SOMA(1;2)=3`; cálculo CIDR produz rede `192.168.1.0/24`; classificação de phishing e avaliação de prompt retornam feedback; simulador de dados recalcula o histograma após mudança de classes; simulador de ética retorna feedback; edição de célula numérica no laboratório de gráficos altera o SVG do histograma; `pageErrors: []`.
- Artefato de auditoria: [curriculum-audit-reports](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40261787364/artifacts/12625340191), upload concluído.
- Advertências não bloqueantes nos logs: depreciação de `punycode`/`url.parse()` e aviso de runtime Node 20 em ações do workflow; não foram falhas do job.
- **Limites:** testes automatizados em Chromium headless Linux não equivalem a auditoria WCAG independente, testes manuais de teclado/leitor de tela, compatibilidade em dispositivos físicos, nem revisão semântica completa de questões, gabaritos, fontes e conteúdo.
- **Estado do PR na consulta:** #17 permanece aberto, draft, não mergeado. O sucesso comprova apenas os checks configurados; não autoriza declarar o projeto curricular concluído.


## Correção pontual de rastreabilidade — questões M6 41–44 — 2026-10-26

- Alteração commitada no branch do PR #17: `7c9b0dd7871048d94294b5c7530f90e52de97f4d`.
- Foram corrigidos quatro campos `topico` que apontavam para IDs legados inexistentes no currículo M6: q-m6-41 → `m6-u4-t2-s1`; q-m6-42 → `m6-u4-t1-s2`; q-m6-43 → `m6-u5-t1-s2`; q-m6-44 → `m6-u6-t3-s1`.
- Pré-validação da alteração: cada valor antigo ocorreu exatamente uma vez no arquivo e foi substituído; o script da alteração interromperia a gravação caso a contagem não fosse 1.
- **Ainda não testado após a alteração:** execução CI no novo HEAD, auditoria integral de referências, revisão semântica independente das quatro questões e validação global de gabaritos. Não inferir aprovação a partir da pré-validação textual.


## Revalidação da correção de rastreabilidade M6 — 2026-10-26

- HEAD submetido à validação: `c9d3780a2a9b6a28906d4ea0c906fd93fb16a7e3`.
- GitHub Actions: [execução 40265636717](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40265636717) — workflow `Validate curriculum and learning assets`, conclusão `success`.
- Job `Static validation and coverage audits`: sucesso. Etapas concluídas: verificação sintática JavaScript; geração da matriz curricular; relatório de rastreabilidade dos ativos; validação da estrutura do repositório; heurísticas de qualidade das questões; instalação do Playwright/Chromium; smoke test em modo `file://`; regressões interativas em modo `file://`; upload dos relatórios de auditoria.
- Resultado comprovado: todos os passos configurados nesse workflow concluíram com sucesso após a correção de q-m6-41 a q-m6-44.
- **Limite:** o workflow não substitui revisão semântica independente dessas questões, auditoria WCAG/manual nem confirmação do workflow Code Quality no mesmo HEAD. Não declarar o PR pronto ou fazer merge com base apenas neste check.


## Auditoria semântica focal das questões M6 — 2026-10-26

- Revisadas q-m6-41 a q-m6-44 quanto à coerência entre cenário, comando, gabarito, justificativa e alternativas.
- q-m6-41: a conclusão de que conflito de interesses no âmbito da Lei nº 12.813/2013 não depende de dano ao erário ou vantagem consumada está acompanhada da ressalva de que os fatos e o âmbito legal precisam ser avaliados.
- q-m6-42: a resposta combina gestão individualizada de acessos quando suportada, privilégio mínimo, autenticação, revisão/revogação, rastreabilidade e aprovação; registra a necessidade de controles compensatórios quando a plataforma não oferece funções adequadas.
- q-m6-43: a resposta não presume que a quantidade de campos, isoladamente, prova inacessibilidade; conecta identificação e sugestão de erros aos critérios WCAG citados e propõe testes e métricas.
- q-m6-44: corrigida a justificativa/fonte para fundamentar o acesso parcial diretamente no art. 7º, § 2º, da LAI e a proteção de informações pessoais no art. 31, removendo a atribuição ao Enunciado CGU nº 12/2023 que não constava no inventário de referências verificadas deste projeto. A ocultação efetiva continua destacada.
- Esta é uma revisão focal de consistência, não uma certificação jurídica independente nem uma auditoria integral de todas as fontes do módulo.
- Commit da revisão de q-m6-44: `fb5ef5deaa7e58ffbcfa6201fa4104f0a39c9ae5`.
- Revalidação posterior consultada em 2026-10-26 no HEAD `041a7825ee3e2ec7b5e0155d4617ed996c6a44df`: os seis check-runs desse commit concluíram com `success`, incluindo `Static validation and coverage audits`, CodeQL, análise de Actions e duas análises JavaScript/TypeScript. Evidências: [auditoria estática](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40266024704) e [análises de código](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40266022684).
- O workflow de auditoria inclui sintaxe, matriz curricular, rastreabilidade estrutural, heurísticas de qualidade, smoke test e regressões interativas via Playwright/Chromium em `file://`. Isso não equivale a revisão semântica integral, auditoria WCAG independente, leitor de tela ou testes em dispositivo físico.
- Esta evidência corresponde ao HEAD indicado; qualquer novo commit exige conferir novamente os checks do novo HEAD.

## Registro de retomada da orquestração — 2026-10-26

- O PR #17 registra sucesso do workflow [40262096277](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40262096277) para o SHA `81472b91ea33a421db66f4fa502e28d0e09d0c65`, com smoke Playwright/Chromium em `file://`, 8 módulos, 460 flashcards, 396 questões, 5 gráficos SVG, 6 simuladores com UI e `pageErrors: []`.
- Outros snapshots na branch registram 399 questões e 460 flashcards. Como os SHA são diferentes, não tratar as contagens como uma única execução nem assumir que o workflow histórico valida o HEAD atual.
- Os testes reportados cobrem regressões interativas específicas (SOMA, CIDR, phishing, avaliação de prompt, histograma e SVG), mas não demonstram correção semântica integral, WCAG, leitor de tela ou teste físico multiplataforma.
- **Esta retomada foi documental; nenhum teste foi executado por esta atualização.** A próxima execução deve registrar comando, SHA, exit code, artefatos e falhas, sem extrapolar o alcance dos testes.

## Auditoria estrutural mais recente e regressão de acessibilidade — 2026-10-26

- Run: [40409912389](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40409912389), SHA testado: `4e0c9eae346116c7c9c0957196ea315dd4f16b00`.
- Concluíram com sucesso nesse run: sintaxe JavaScript; geração da matriz; rastreabilidade de ativos; validação estrutural do repositório; heurísticas de qualidade das questões; smoke test Chromium no modo `file://`.
- O teste de interação falhou na asserção axe-core de WCAG 2.1 A/AA devido a `color-contrast`: texto `#4b5563` sobre `#1f232c` apresentou razão 2,08:1, quando o mínimo para texto normal é 4,5:1.
- Correção enviada posteriormente à branch: a cor dos textos auxiliares foi alterada para `#cbd5e1` nos seis simuladores. A matriz curricular foi sincronizada a partir dos arquivos de origem, preservando 295 subtópicos e refletindo 888 exemplos e 592 exercícios contados estruturalmente.
- O artefato de auditoria desse run reconheceu 132 tópicos, 460 flashcards e 399 questões. A heurística não sinalizou duplicatas exatas ou outros alertas, mas identificou 112 questões sem fonte no campo examinado e concentração incomum de gabaritos no M1 (A=4, B=15, C=5, D=2, E=0 em 26 questões MC). Esses achados foram adicionados a `docs/PENDENCIAS.md`.
- **Limitação:** o run acima antecede a correção de contraste e os commits documentais posteriores. Não representa aprovação do HEAD atual. É necessário conferir um run completo do SHA final.
- Ainda não cobertos: revisão semântica independente de todas as questões, validação de cada fonte normativa/técnica, teste manual com leitor de tela, auditoria WCAG manual e compatibilidade em dispositivos físicos.

## Revalidação de acessibilidade e regressões — 2026-10-26

- Workflow: [40410948115](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40410948115).
- SHA validado: `4a4ab1f2016bc4afaf0b8afea6dc4dcbe9e4f814`.
- Resultado final: **success**.
- Etapas aprovadas: sintaxe JavaScript; geração da matriz curricular; rastreabilidade de ativos; validação estrutural; heurísticas de qualidade de questões; instalação de dependências/Chromium; smoke test do navegador em `file://`; regressões interativas Playwright com axe-core.
- A falha de contraste observada no run 40410550253 levou à correção dos estilos por contexto: textos auxiliares escuros sobre fundo claro e claros dentro dos painéis escuros. O run 40410948115 passou após essa correção.
- Também foi corrigida a contradição de justificativa em `q-m1-01`; a sintaxe JavaScript da versão final do arquivo passou no workflow.
- O SHA testado antecede commits posteriores de documentação, mas inclui as alterações de código nos simuladores e a revisão focal de `q-m1-01`. O código da aplicação não foi alterado depois desse SHA no momento do registro.
- **Escopo limitado:** este sucesso não comprova revisão semântica integral, validade de todas as fontes, conformidade WCAG independente, testes com leitor de tela ou compatibilidade em dispositivos físicos. Permanecem 112 questões sem fonte identificada pelo auditor estrutural e a distribuição de gabaritos do M1 requer análise.

## Validação completa após inclusão de fontes M1–M3 — 2026-10-26

- Workflow: [40412457818](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40412457818).
- SHA testado: `5232348fa553a58317c6b4b28ab9dfafc088beb9`.
- Resultado: **success**.
- Passaram: sintaxe JavaScript (39 arquivos), geração da matriz curricular, rastreabilidade de ativos, validação estrutural, auditoria heurística de questões, smoke test Chromium em `file://` e testes interativos Playwright/axe-core.
- Smoke test: aplicação com 8 módulos, 460 flashcards e 399 questões; sem erros JavaScript de página.
- axe-core: 58 regras aprovadas, 3 resultados incompletos, 1 violação total não bloqueante e 0 violações críticas/graves bloqueantes.
- Auditoria de questões: 399 lidas, 0 IDs duplicados, 0 alertas heurísticos, 0 pares com contexto/enunciado idênticos; 395 com campo de fonte detectado e 4 sem fonte.
- O sucesso automatizado não substitui verificação individual de URLs, revisão semântica, leitor de tela, WCAG manual ou testes físicos. As quatro lacunas estruturais de fonte foram fechadas; a distribuição de gabaritos de M1 e a validação semântica permanecem registradas em `docs/PENDENCIAS.md`.

## Revalidação axe-core com zero violações — 2026-10-26

- Workflow: [40413529441](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40413529441).
- SHA testado: `7db9ef553e453ad246913c90fe1a78332beba7fd`.
- Resultado: **success** em todas as etapas.
- Sintaxe JavaScript, matriz, rastreabilidade, estrutura, heurísticas de questões, smoke test Chromium em `file://` e testes interativos passaram.
- axe-core: 58 passes, 3 incomplete, **0 violações**. A única violação moderada anterior (`landmark-unique`, navegação do simulador de Segurança/Prompts/Dados) foi eliminada com nomes acessíveis únicos.
- O teste Playwright agora exige uma lista vazia de violações axe-core, incluindo níveis moderados, além de bloquear explicitamente níveis críticos/graves.
- As verificações incompletas de contraste, frames e correspondência entre rótulo e conteúdo não foram reportadas como violações. A auditoria automatizada não substitui validação manual, leitor de tela nem teste em dispositivos físicos.

## Atualização de fontes e acessibilidade — 2026-10-26 (primeiro CI concluído; HEAD atualizado validado)

- Adicionadas fontes oficiais às questões `q-m2-26`, `q-m2-32`, `q-m3-19` e `q-m3-36`, antes identificadas como as quatro lacunas no campo fonte. A contagem estrutural atual é 399/399 questões com campo de fonte; não equivale à validação semântica de cada fonte.
- Atualizados `apostila-ia/assets/data/references.js` e `referencias/referencias-verificadas.md` com Cisco, Zoom Support e Google Meet Help.
- Run [40416873641](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40416873641), SHA `e35d9f75849a33767f205339edfaf21ef8d01952`: **success**. Sintaxe JavaScript, matriz curricular, rastreabilidade, estrutura, auditoria heurística, smoke test Chromium em `file://` e testes interativos passaram.
- Auditoria de questões: 399 itens; 0 IDs duplicados, 0 alertas heurísticos e 0 pares com contexto/enunciado duplicados. A conferência por segmento confirmou campo `fonte` não vazio em 399/399 itens.
- axe-core: 58 passes, 3 incomplete, 0 violações confirmadas. Permanecem incompletas as avaliações de contraste, frames e correspondência entre rótulo e nome acessível; não equivalem a violações confirmadas.
- As páginas oficiais foram consultadas para fundamentar as quatro fontes novas; não houve validação HTTP automatizada individual de todas as URLs. Revisão semântica completa, verificação de todas as afirmações, leitor de tela, WCAG manual e testes físicos continuam pendentes.
- A execução `pull_request` do HEAD anterior concluiu com sucesso no run [40417644974](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40417644974). A validação do código atualizado, incluindo fundo explícito nos SVGs, concluiu com sucesso no run [40418226793](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40418226793), SHA `667c8a08449d1f334b015f2b07943cd3748e3ab0`.

## Revisão de `q-m3-36` e acessibilidade da árvore — 2026-10-26

- A formulação de `q-m3-36` foi corrigida para refletir que salas temáticas do Google Meet dependem de edições elegíveis do Workspace; a fonte oficial correspondente foi adicionada ao catálogo.
- Em `navigation.js` e `styles.css`, os ícones de expansão/recolhimento são triângulos CSS, sem texto visível dentro dos botões, e os botões têm cores explícitas para os modos claro e escuro.
- No run 40418226793, sintaxe JavaScript passou em 39 arquivos; smoke test `file://` e regressões interativas passaram; `pageErrors: []`. axe-core: 0 violações confirmadas; `label-content-name-mismatch` deixou de aparecer. `color-contrast` caiu de 266 para 89 nós, concentrados em textos SVG de gráficos; `frame-tested` permanece em 20 iframes externos. O fundo explícito foi acrescentado via CSS e por um retângulo no SVG, mas axe-core ainda classifica esses nós como incompletos, não como violações.
- Permanecem pendentes avaliação manual dos textos SVG, frames externos, leitor de tela, WCAG manual e testes físicos. A revisão semântica completa das questões também continua pendente.


## Revisão semântica focal de `q-m3-19` — 2026-10-26

- A documentação oficial Zoom distingue capacidade do webinar e elegibilidade para salas paralelas. A capacidade para 500 participantes não garante, por si só, o recurso de salas paralelas.
- A questão foi ajustada para perguntar quais condições precisam ser verificadas. A alternativa C especifica uma capacidade contratada para 500 participantes e uma licença elegível (`Zoom Webinars Plus Unlimited`, `Zoom Webinars Plus Pay Per Attendee` ou `Zoom Events Unlimited`), além dos requisitos de webinar agendado, recurso habilitado e aplicativo desktop/móvel suportado descritos pela documentação.
- As análises de A, B e D foram ajustadas para não tratar diferenciais gerais de plataforma como prova suficiente. A revisão focal foi feita; a revisão semântica completa do banco permanece pendente.
- HEAD de código no momento da alteração: `816b771ac7323229801564570670a7702a777ac1`. CI desse HEAD ainda precisa ser confirmado.

- A alternativa C de `q-m3-19` foi encurtada para reduzir pistas involuntárias pelo comprimento da resposta; os nomes das licenças elegíveis permaneceram na justificativa. O SHA do código atualizado é `816b771ac7323229801564570670a7702a777ac1`; aguardar CI no HEAD atualizado.

## Validação do HEAD após reconciliação documental — 2026-10-26

- Run [40420580863](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40420580863), SHA `15533145e506dcec5988f91b73be09a6c4462ad0`: **success**. Sintaxe de 39 arquivos, matriz curricular, rastreabilidade, estrutura, heurísticas de questões, smoke test Chromium em `file://` e regressões interativas passaram.
- Questões: 399 itens, 0 IDs duplicados, 0 alertas heurísticos; os seis arquivos de questões somam 399 IDs e 399 campos `fonte` não vazios.
- Referências: 135 entradas no `references.js` (20 vídeos + 115 referências técnicas), 43 `verificado`, 0 `pendente`, 83 URLs preenchidas. Contagens anteriores de 73/79 foram reconciliadas nos documentos de governança.
- axe-core: 58 passes, 2 incomplete, 0 violações; `pageErrors: []`. As verificações incompletas são `color-contrast` (89 textos SVG) e `frame-tested` (20 iframes externos). A verificação `label-content-name-mismatch` não aparece mais.
- Revisão matemática das cores SVG sobre `#111318`: título `#e3e9ff` = 15,37:1; texto geral `#c5c9d4` = 11,22:1; rótulos de eixo `#8b94a5` = 6,08:1. Todos excedem 4,5:1. Isso não elimina a necessidade de inspeção visual, testes de teclado/leitor de tela, WCAG manual e compatibilidade física.
- Conferência estrutural adicional: os 20 iframes de vídeo têm `title` não vazio e único; a auditoria axe-core não inspeciona o conteúdo interno desses frames externos.
- As quatro páginas oficiais novas (Cisco, dois artigos do Zoom Support e Google Meet Help) foram abertas e consultadas diretamente em 2026-10-26. Isso valida acesso/conteúdo consultado dessas páginas, não uma verificação HTTP automatizada de todas as URLs do catálogo.
- A revisão semântica independente das 399 questões e a verificação HTTP individual de todas as URLs continuam pendentes.


## Auditoria focal M1 — 2026-10-26

- `q-m1-05`: a referência foi corrigida de uma página genérica sobre atualização de campos para documentação Microsoft sobre objetos vinculados/incorporados e inserção de objetos no Word, mais diretamente alinhada ao vínculo dinâmico Excel→Word.
- `q-m1-06`: a fonte agora inclui a documentação Microsoft Learn sobre limites de histórico de versões, que descreve políticas automáticas/manuais e limites configuráveis; isso sustenta a rejeição de uma regra universal de 30 dias independentemente de configurações.
- `q-m1-08`: fontes específicas distinguem retenção da lixeira de contas pessoais (até 30 dias) e corporativas/escolares (até 93 dias, salvo alteração administrativa) e documentam que expiração/permissões dos links dependem das configurações de compartilhamento.
- As páginas oficiais foram consultadas em 2026-10-26. A revisão focal e a presença das fontes não substituem a revisão semântica integral nem a validação HTTP automática de todas as URLs.


## Correções adicionais da auditoria focal M1 — 2026-10-26

- `q-m1-14`: corrigida a justificativa sobre alinhamento decimal. A versão anterior tinha um exemplo inconsistente com a afirmação; a nova redação explica corretamente a diferença entre tabulação decimal e à direita quando há quantidades diferentes de casas decimais.
- `q-m1-21`: fontes agora correspondem diretamente aos dois recursos exigidos — repetição do cabeçalho da tabela e classificação por coluna.
- `q-m1-24`: fonte agora aponta para as instruções Microsoft específicas de criação de PDFs acessíveis e marcas estruturais para leitores de tela.
- O run [40422839184](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40422839184) falhou na etapa de sintaxe JavaScript porque a primeira adição ao catálogo `references.js` não incluía uma vírgula após a entrada anterior. O erro foi localizado nos logs e corrigido no HEAD subsequente; não considerar o run como validação verde. Aguardar o CI do commit corretivo.


## CI do HEAD corretivo — 2026-10-26

- SHA `a3e0325b14b82b31c09b4d2d74a551b2c55a661e`: push [40423216305](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423216305) e `pull_request` [40423223898](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423223898) concluíram com `success`.
- Sintaxe JavaScript passou em 39 arquivos; 399 questões, auditorias estruturais e heurísticas, smoke test `file://`, regressões interativas e `pageErrors: []` passaram. axe-core: 0 violações confirmadas; continuam 2 verificações incompletas — 89 nós SVG em `color-contrast` e 20 iframes em `frame-tested`.
- O catálogo de referências contém 135 entradas no total (20 vídeos + 115 referências técnicas); todas estão marcadas `verificado` e têm URL preenchida. Essa contagem descreve o catálogo, não comprova a validação HTTP individual de todas as URLs.
- Revisão focal M1: fontes mais específicas para `q-m1-05`, `q-m1-06`, `q-m1-08`, `q-m1-21` e `q-m1-24`; justificativa sobre tabulação decimal corrigida em `q-m1-14`. Revisão semântica integral e acessibilidade manual continuam pendentes.


## Auditoria focal M1 — PowerPoint e OneDrive (2026-10-26)

- `q-m1-26`: fontes agora correspondem especificamente ao Slide Mestre e a animações aplicadas a objetos, em vez de uma página genérica de design.
- `q-m1-28` e `q-m1-29`: fontes agora documentam a propagação bidirecional de alterações pela sincronização, o backup configurável de pastas e a recuperação de arquivos após ransomware. A distinção entre sincronização e cópia de backup independente continua explicitada na justificativa.
- O HEAD parent `5418baf7085938a3c34632036978e152748ed191` passou nos workflows [40423520875](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423520875) e [40423527406](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423527406). A validação do lote novo está pendente de CI.


## Auditoria focal M1 — licenciamento organizacional e reconciliação do catálogo (2026-10-26)

- [x] `q-m1-07`: acrescentadas fontes oficiais específicas para licenciamento do Microsoft Purview eDiscovery e do Microsoft Intune, além da comparação de planos Microsoft 365.
- [x] Corrigido o ID duplicado `ref-powerpoint-slide-master` na referência de visão geral do Slide Mestre; a entrada agora usa `ref-powerpoint-slide-master-overview`.
- [x] Contagem recalculada diretamente pelos objetos do catálogo: 135 entradas únicas, sendo 20 vídeos e 115 referências técnicas; todas têm status `verificado` e URL preenchida.
- O parent `bc5a479fd2926399fd9b993cb756e71228e1f2be` passou nos workflows de push [40423874477](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423874477) e `pull_request` [40423879070](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40423879070). Este commit atualiza o catálogo/documentação e aguarda CI próprio.
- A revisão semântica integral das 399 questões e a acessibilidade manual permanecem pendentes.


## Auditoria focal M1 — Modo de Compatibilidade (2026-10-26)

- [x] `q-m1-25`: a fonte foi corrigida para a página oficial específica que explica o Modo de Compatibilidade e os efeitos de desativação temporária de recursos recentes.
- [x] Contagem atual do catálogo: 136 referências únicas (20 vídeos + 116 referências técnicas), todas com status `verificado` e URL preenchida.
- O parent `8b9dc729c436100bfef860978d4de2bdc9d4d331` passou nos workflows de push [40424186175](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40424186175) e `pull_request` [40424192846](https://github.com/Fatal1tyBarucco/FCN/actions/runs/40424192846). Este lote aguarda CI próprio.
- A revisão semântica independente das 399 questões permanece pendente.


## Auditoria focal M1 — OneDrive e SharePoint (2026-10-26)

- [x] q-m1-04: adicionada fonte oficial específica para a função do SharePoint como espaço de armazenamento e colaboração de equipe; as fontes existentes continuam cobrindo os limites de armazenamento do OneDrive conforme o plano/licenciamento.
- [x] Contagem atual do catálogo: 137 IDs únicos (20 vídeos + 117 referências técnicas), todos verificados estruturalmente e com URL preenchida.
- O parent 370ba6e24f9095599d3e810b9e99ac4171794623 passou no workflow pull_request 40424415199. O workflow de push 40424410451 ainda estava em execução no momento desta atualização; este lote novo aguarda seus próprios checks.
- A revisão semântica independente das 399 questões permanece pendente.
