# AGENTS.md — Apostila Web Interativa FCN

Projeto de apostila web interativa de TI, Dados e IA para concursos públicos brasileiros. Conteúdo em pt-BR, 8 módulos obrigatórios (Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados, Visualização).

## Visão geral

- SPA estática em vanilla HTML/CSS/JS. Sem build, framework ou `package.json`; `README.md` existe. CI: `deploy-pages.yml` publica em `main`/manual e `validate-curriculum.yml` valida PRs/branches `feat/**`. Testes estruturais Node/vm e auditorias estão versionados; navegador real e WCAG ainda exigem validação dedicada.
- Fonte de requisitos: `Escrita.txt` (prompt mestre, 1207 linhas) — consultar antes de qualquer implementação nova.
- O app vive em `apostila-ia/` (o `index.html` **não** está na raiz do repo).

## Estrutura do repositório

```
Escrita.txt                      — prompt mestre (regras de entrega)
apostila-ia/                     — o app
  index.html                     — entrada (file:// ou servidor estático)
  assets/css/styles.css
  assets/js/  app.js · navigation.js · simulators.js · simulator_network.js
              simulator_security.js · simulator_prompts.js · simulator_data.js
              simulator_ethics.js · flashcards.js · quiz-engine.js · charts.js
              search.js (defer) · audio.js (defer) · storage.js
  assets/data/ curriculum.js (M1) · curriculum_m2.js · curriculum_m3.js
               curriculum_m4.js · curriculum_m5.js · curriculum_m6.js
               curriculum_m7.js · curriculum_m8.js · flashcards_m1.js
               flashcards_m2.js · flashcards_m3.js · flashcards_m4.js
               flashcards_m5.js · flashcards_m6.js · flashcards_m7.js
               flashcards_m8.js · references.js
               questions.js · questions_m4.js · questions_m5.js ·
               questions_m6.js · questions_m7.js · questions_m8.js
               (banco de 365 questões autorais — M1/M2/M3 + M4..M8)
               — todos os curriculum_m*.js e flashcards_m*.js (M1–M8) estão
               carregados no index.html desde o incremento P1-C (2026-10-21)
  inventario/  matriz/            — cópias publicadas dos .md de governança
                                   (a fonte é inventario/ e matriz/ na raiz;
                                   o workflow de Pages as re-sincroniza no build)
.github/workflows/deploy-pages.yml — Pages: verifica sintaxe e publica apostila-ia/
.github/workflows/validate-curriculum.yml — PR/feat: sintaxe, auditorias curriculares e verificação estrutural
README.md                          — readme do repo GitHub
inventario/INVENTARIO_CURRICULAR.md   matriz/MATRIZ_COBERTURA.md   (raiz — fonte)
referencias/referencias-verificadas.md (raiz — LGPD, LAI, Lei 14.129/2021 e CF art. 37 caput/art. 5º XXXIII verificadas)
apostila-web/  entregas/         — diretórios vazios (estrutura planejada)
```

Repo GitHub: **https://github.com/Fatal1tyBarucco/FCN** (público). Site publicado: **https://fatal1tybarucco.github.io/FCN/** (GitHub Pages via workflow, publicando `apostila-ia/` como raiz do site). Fluxo: branches + PR (nunca push direto em `main`). O diretório `$HOME` (`/data/data/com.termux/files/home`) é um **repo git separado** que contém este projeto como subpasta — nunca rodar `git add -A`/`git add .` em `$HOME` (segredos e outros projetos vivem lá); fazer stage por caminho explícito.

## Como executar

```bash
cd apostila-ia                  # OBRIGATÓRIO: o app não está na raiz
open index.html                 # Modo A — abertura direta (Seção 3.2 do Escrita.txt)
python3 -m http.server 8080     # Modo B — servidor estático opcional
```

## Convenções do projeto

- Conteúdo em **pt-BR** formal, técnico e didático.
- **Não inventar** referências, artigos de lei, IDs de vídeo, URLs ou resultados de teste. Tudo declarado "verificado" exige evidência real (URL + data); nenhuma funcionalidade pode ser apresentada como operacional sem teste real.
- **Não usar `eval`** para fórmulas; sanitizar entradas do usuário antes de injetar em HTML.
- Persistência: localStorage com chave `apostila-ia-progresso`. Modo privado e `file://` podem limpar dados — advertir o usuário.
- Estilos: variáveis CSS em `:root`; tema escuro via `prefers-color-scheme`.
- Dados curriculares: objetos JS literais (sem `eval`, sem fetch externo).

## Estado atual

- **Código (`assets/data/*.js`) é a fonte de verdade para estado atual.** `inventario/` e `matriz/` foram sincronizados com o código em 2026-10-21 (incrementos P1-A e P1-C) e novamente em 2026-10-22 (P1-D; leitura dos arquivos); mantê-los em dia.
- **Navegação corrigida (incremento de desbloqueio) + descoberta dinâmica (P1-A)**: `navigation.js` é o dono único da navegação/renderização — o antigo SyntaxError (`curriculumData.modulo-1` com hífen) foi eliminado. Ele registra `window.apostilaDados` + alias retro-compatível `window.curriculumData`, **descobre módulos dinamicamente** (varre `curriculum` (M1), `curriculumM2`…`curriculumM8` via cadeia de `typeof` — sem `eval`, sem fetch), renderiza a árvore de todos os módulos carregados (hoje **1–8, sem exceção — M6 incluído desde o P1-C**) em `#curriculum` (append, preservando o HTML estático), exibe `objetivoAprendizagem`/`conteudo` em painel abaixo da árvore (no lugar do `alert()` antigo) e grava progresso no localStorage chave `apostila-ia-progresso`. `app.js` ficou apenas com tema (`prefers-color-scheme`) + boot.
- **Esquema de chaves unificado**: `modulo-N` **com hífen** (`modulo-1` … `modulo-8`, sem saltos desde o P1-C) — já é o esquema dos dados e dos IDs de tópico.
- **Carregado no `index.html` (renderiza ou é acionado)**: M1–M8 (**39 tags `<script src>`**: 23 de dados — 8 `curriculum*.js` + 8 `flashcards_m*.js` + 6 `questions*.js` + `references.js` — e 16 de JS: `app`, `navigation`, `simulators`, `simulator_network`, `simulator_security`, `simulator_prompts`, `simulator_data`, `simulator_ethics`, `flashcards`, `quiz-engine`, `charts`, `search` (defer), `audio` (defer), `storage.js`, `progress.js` e `accessibility.js`). `navigation.js` consolida **todos** os `curriculum*` presentes (M1 + `curriculumM2`…`curriculumM8`) descobrindo-os dinamicamente; `flashcards.js` monta a UI de flashcards (fontes unificadas via `window.apostilaDados.flashcards`, fallback `typeof` 1–8); `quiz-engine.js` monta os simulados com **escopos dinâmicos** (`mN` por módulo carregado + `cum-N` consolidando 2..N — hoje 15 escopos, m1..m8 + cum-2..cum-8); `charts.js` monta o laboratório dos 5 gráficos (`#charts-app`). Os **6 simuladores têm UI montada** nos contêineres `#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app` e `#etica-app` — montagem **inline** no `index.html` (`montarSimulador(global, id)` com guarda tripla: contêiner presente, global presente, `mount()` não lança), alimentando os globais `ExcelSimulator`, `NetworkSimulator`, `SecuritySimulator`, `PromptSimulator`, `DataSimulator` e `EthicsSimulator`. **A integração do M6 no P1-C foi só a tag `<script>`**: `navigation.js` já descobria `curriculumM6` e `flashcardsM6` via `typeof` — nenhum JS de comportamento mudou.
- M1: `curriculum['modulo-1']` contém 1.1 (8 sub-tópicos) e 1.2 (14 tópicos), que **renderizam**. 1.3 Excel: IMPLEMENTADO (unidade 3, 6 tópicos, 12 subtópicos) + simulador com busca real (PROCV/PROCH/PROCX executam busca de verdade; modelo de planilha em memória com refs A1/$ e recálculo). 1.4 PowerPoint e 1.5 OneDrive: MIGRADOS e renderizam (unidades 4 e 5, 1 subtópico cada, 3 exemplos + 2 exercícios); consts antigas comentadas como migradas. **66 flashcards** (`flashcards_m1.js`, total atual verificado em 2026-10-25).
- M2 (Redes): **renderiza** — `curriculum_m2.js` (unidade 2.1, 4 tópicos; subtópicos com objetivo, conteúdo, exemplos e exercícios) + 56 flashcards + `simulator_network.js` (ping e traceroute simulados, CIDR com cálculo real; não executa comandos no SO). 2.2–2.5 IMPLEMENTADOS e renderizam (5 unidades, 19 tópicos, 52 subtópicos).
- M3: **renderiza** — `index.html` inclui `curriculum_m3.js` e `flashcards_m3.js`; 3.1–3.5 implementados (5 unidades, 14 tópicos, 35 subtópicos) + 68 flashcards.
- M4, M5, M6, M7 e M8: **carregados e renderizam** — `curriculum_m4.js` (4 unidades, 13 tópicos, 39 subtópicos), `curriculum_m5.js` (**5.1–5.4: 4 unidades, 13 tópicos, 35 subtópicos, 105 exemplos, 70 exercícios — 5.3/5.4 entraram no P1-C**), `curriculum_m6.js` (**criado no P1-C: 6 unidades 6.1–6.6, 18 tópicos, 46 subtópicos, 138 exemplos, 92 exercícios**, chave `modulo-6`, no `index.html` desde o P1-C), `curriculum_m7.js` (3 unidades, 9 tópicos, 23 subtópicos) e `curriculum_m8.js` (8.1–8.5: 5 unidades, 23 tópicos, 28 subtópicos). A árvore renderiza os **8 módulos, 132 tópicos + 295 subtópicos = 427 nós** (M1 23 tópicos + 37 subtópicos; M2 19 + 52; M3 14 + 35; M4 13 + 39; M5 13 + 35; M6 18 + 46; M7 9 + 23; M8 23 + 28; conferido módulo a módulo em smoke Node/vm do P1-F). Flashcards: M4=54, M5=66, M6/M7/M8=50 cada (contagens estruturais confirmadas em 2026-10-25). O laboratório interativo de prompts (5.4) continua inexistente — 5.4 é conteúdo didático.
- Flashcards: **460 no disco e conectados ao app** (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50; IDs únicos por arquivo). Questões: **399** (M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40). Os validadores de CI anteriores confirmaram a estrutura e a fusão de 399 questões, sem IDs duplicados; a nova execução no HEAD atual ainda precisa concluir. Quantidade de ativos não prova domínio curricular.
- Referências: 79 itens em `references.js` no HEAD atual conhecido (2026-10-26) — 20 vídeos + 59 referências técnicas; o catálogo foi ampliado nesta PR, incluindo NIST AI 600-1 e Google Cloud Grounding. O registro histórico I4/I6 dizia 72 itens; não tratar a contagem antiga como atual. Verificações anteriores de 72/72 não cobrem automaticamente as referências adicionadas depois. (LGPD, LAI, Lei 14.129/2021, Marco Civil, Microsoft Learn, RFCs, CERT.br, ANPD órgão + 13 resoluções, CF art. 37 + art. 5º, Leis 8.429/1992, 1.079/1950, 13.146/2015, 10.098/2000, 10.741/2003, 13.460/2017, 12.682/2012, 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º); 79/79 entradas atuais têm status `verificado` e URL preenchida, sem entradas pendentes no `references.js`. Permanecem fora do catálogo e fora do escopo de verificação individual: outras resoluções da ANPD, RFCs não listadas, demais incisos/parágrafos constitucionais e verificação artigo a artigo das leis adicionais citadas por remissão em M6.
- Revisão pedagógica (I5, 2026-10-24): 7 correções pontuais em `curriculum.js` (M1) e `curriculum_m6.js` (M6) — erro de digitação "sinconexerência"→"sincronização", suavização de 5 afirmações não verificáveis (cotas OneDrive, prazos de retenção, art. 8º-A LAI), substituição de exercício com prazo não verificado. Documentado em `docs/REVISAO_PEDAGOGICA.md`. Contagem de nós preservada (427).

- Deploy: `.github/workflows/deploy-pages.yml` roda `node --check` em todos os `assets/**/*.js` e publica `apostila-ia/` como raiz do site (push em `main` ou manual). A action `upload-pages-artifact` só aceita **um** diretório, então o job copia `inventario/` e `matriz/` (fonte, na raiz) para dentro de `apostila-ia/` antes do upload — é o que faz os dois links do `index.html` funcionarem no Pages **e** no `file://`.

## Testes headless CDP (2026-10-24) — evidência real

- Ambiente: Chromium 156 headless controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A; evidência de 2026-10-24).
- Resultados históricos: carregamento sem exceções JS (módulos 1–8; 404 flashcards; 365 questões na época; 5 gráficos); 12/12 contêineres não vazios; `buscar('CIDR')`=10 (índice 1196); 5 SVGs de gráficos; localStorage roundtrip OK; simuladores montados (Excel smoke 111 asserts). Os totais atuais são 460 flashcards e 399 questões; a regressão no total atualizado precisa ser confirmada pelo CI atual.
- ATENDIDO: áudio (controles + aviso + 3 correções, smoke 41/41, CDP OK) — síntese depende do dispositivo (limitação documentada, não defeito).
- PARCIAL: responsividade em dispositivo físico; WCAG com leitor de tela não testado (atributos/contraste/teclado implementados).
- VÍDEOS: 20 validados (IDs verificados via oembed, 2026-10-24; embed nos módulos concluído). REFERÊNCIAS: 79/79 com status `verificado` e URL presente no `references.js` atual; 0 pendentes no catálogo. Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não verificadas individualmente, demais incisos/parágrafos CF art. 37/5º.
- Docs atualizados: `docs/AUDITORIA_FINAL.md` (matriz 19 critérios), `docs/RELATORIO_TESTES.md` (T9–T14), `docs/PENDENCIAS.md` (1–19), `docs/PLANO_EXECUCAO.md`, `docs/INVENTARIO_CURRICULAR.md`, `docs/DECISOES_ARQUITETURAIS.md`, `docs/REVISAO_PEDAGOGICA.md`.
- Veredito: APROVADO COM RESSALVAS. Não declarar integralmente concluído.


## Registro de execução — PR #17 (atualizado em 2026-10-26)

Fonte de estado: branch `feat/fase-1-orquestracao-20261025`, PR [#17](https://github.com/Fatal1tyBarucco/FCN/pull/17). Este registro resume o trabalho de revisão e validação conhecido até o HEAD `7bc610a873ff62ba96dc3a7689c03d527f61d8df`; não substitui o diff completo nem declara concluídas as pendências abertas.

### Governança do PR e estratégia de trabalho

- O PR #17 permanece **Draft, aberto e não merged**. Todas as alterações descritas aqui são destinadas à branch do PR; não fazer push direto em `main` nem realizar merge antes de resolver os critérios de qualidade.
- A revisão semântica está sendo executada em lotes coesos por módulo/intervalo de IDs, registrando resultados em `docs/RELATORIO_QUALIDADE_QUESTOES.md`. Não reabrir lotes concluídos sem nova evidência; não mudar gabaritos apenas para equilibrar distribuição.
- A documentação de pendências deve distinguir evidência histórica de evidência do HEAD atual. Um CI verde em commit anterior não certifica commits posteriores.

### Trabalho semântico registrado nesta PR

- **M4, q-m4-33–q-m4-35:** revisão focal de base legal/legítimo interesse e referências da LGPD; conferência de q-m4-34 com a Lei nº 15.352/2026 (criação da ANPD como autarquia de natureza especial). O lote não representa auditoria completa do M4.
- **M5, q-m5-21–q-m5-25:** conferência de IA generativa, confabulação/alucinação, atenção em Transformers, RAG e IA baseada em regras. q-m5-22 passou a citar o perfil oficial NIST AI 600-1; q-m5-24 explicita que recuperação e citações não garantem correção e requerem verificação de relevância, vigência e suporte. Foram adicionadas referências NIST AI 600-1 e Google Cloud Grounding a `references.js`.
- **M5, q-m5-26–q-m5-30:** revisão de RLHF e vieses, temperatura, componentes de prompts, zero-shot/few-shot e delimitadores contra prompt injection. Ajustadas afirmações excessivas e explicações; delimitadores são defesa parcial, não bloqueio isolado. Gabaritos mantidos.
- **M5, q-m5-31–q-m5-35:** revisão de avaliação de prompts, registro de mudanças, segredos no contexto, implantação responsável e generalização. Ajustadas limitações de métricas/testes e alguns pontos editoriais; gabaritos mantidos.
- **M5, q-m5-36–q-m5-40:** revisão de underfitting, validação cruzada, curvas de aprendizado, precisão e RMSE/MAE. q-m5-38 foi corrigida para não generalizar que o erro de treino necessariamente cai com mais dados; q-m5-40 agora limita a conclusão sobre o peso de erros grandes no RMSE.
- **M5, q-m5-41–q-m5-42:** revisão de respostas institucionais sem fundamento e engenharia de prompts institucionais. Refinados distrator sobre apagar registros e controles para versão/vigência de fontes, hierarquia normativa, evidências verificáveis, conflitos, minimização e avaliação.
- **M6, q-m6-41–q-m6-44:** revisão focal já registrada em `docs/RELATORIO_QUALIDADE_QUESTOES.md`; a justificativa de q-m6-44 foi alinhada à LAI, removendo atribuição sem rastreabilidade.
- **M6, q-m6-45–q-m6-47:** revisão de princípios administrativos e automação, retificação de informação institucional e acessibilidade. Clarificado o escopo da fonte de q-m6-45; q-m6-46 não transforma orientação Secom em obrigação legal; q-m6-47 não trata uma métrica agregada como prova de conformidade WCAG. Gabaritos mantidos.
- As revisões acima são focais: não significam que todas as fontes de cada questão, todas as questões do banco ou todo o currículo tenham passado por auditoria independente.

### Alterações de dados e rastreabilidade

- O banco evoluiu do snapshot anterior de 365 questões para **399 questões esperadas** após adições/revisões de q-m6-45 a q-m6-47 e correções acumuladas no PR. Distribuição estrutural de referência registrada em 2026-10-26: M1=44, M2=54, M3=47, M4=85, M5=42, M6=47, M7=40, M8=40. Conferir sempre contra o auditor e os arquivos atuais antes de republicar contagens.
- O relatório de qualidade registra também uma contagem global histórica de gabaritos para 321 questões de múltipla escolha (A=102, B=131, C=72, D=8, E=8) e, no M5 de 40 questões MC, A=16, B=14, C=9, D=1, E=0. É um diagnóstico de concentração, não uma instrução para alterar respostas corretas; recalcular após novos lotes.
- `references.js` tem **78 entradas no HEAD conhecido**. A inclusão de NIST AI 600-1 e Google Cloud Grounding elevou o catálogo além do snapshot histórico de 72/73 itens. A validação histórica de 72/72 ou 73/73 não cobre as entradas novas; conferir os links e o conteúdo das fontes no processo de auditoria.
- A revisão de questões e a inclusão de referências foram documentadas em `docs/RELATORIO_QUALIDADE_QUESTOES.md`; os registros históricos e tarefas abertas permanecem em `docs/PENDENCIAS.md`. Ao atualizar esses documentos, manter explícita a diferença entre estado histórico e atual.

### CI e estado de validação

- Run `40267735657` passou no HEAD histórico `7a6ac2425f00ccdbebc8be2d206796037358e75d`: validação curricular/ativos, geração de relatórios, verificador estrutural, heurísticas, smoke/regressões Chromium/Playwright em `file://`, além de CodeQL e análises JavaScript/TypeScript/Actions naquele mesmo SHA.
- Esse resultado **não certifica** o HEAD posterior. Para o HEAD `b76afe874791d8d8acd8f28d8eef8ad083bbd458`, a execução `40269970430` estava queued. No commit de documentação `fb9c36e07cd33866d48d6670abe5c32c447c9ffa`, uma execução falhou na checagem de sintaxe de `questions_m5.js`: faltava uma vírgula entre `pegadinha` e `fonte` em q-m5-24. As falhas sequenciais revelaram separadores ausentes entre `pegadinha` e `fonte` em q-m5-24, q-m5-26 e q-m5-30. Correções registradas nos commits `7bc610a873ff62ba96dc3a7689c03d527f61d8df`, `0c0afa3332e2bcdbe2c1ba0f92f8b7d9c65d2ae1` e `1d8088250209745f5dfb3d1277cafaff4d3cdf2b`, respectivamente. A checagem subsequente identificou ainda uma vírgula ausente entre `regra` e `pegadinha` em q-m5-27, corrigida no commit `dc95c39697cbb7e33a2197d9170e12974a106d77`. A revisão ampliada encontrou também três separadores ausentes em q-m5-30/q-m5-31 (após `justificativa`, entre alternativas A/B e após `contexto`), corrigidos no commit `89947bafd52993e5595d01c2cbd32432c9e9f9b1`. Como a checagem estática pode revelar defeitos em cascata, não declarar sintaxe íntegra até o workflow completo confirmar todos os arquivos.
- Contagens históricas de 365 questões e 72 referências que ainda apareçam em documentos antigos devem ser tratadas como snapshots, não como valores atuais.
- Pendências reais: reconciliação final de inventários/matrizes/relatórios com o CI mais recente; verificação individual de fontes e leis remissivas ainda fora do catálogo; testes manuais de teclado, leitor de tela, responsividade e dispositivos físicos; e cumprimento dos critérios para tirar o PR de Draft. Os lotes registrados cobrem todas as questões q-m1-01..q-m8-40 em revisões focais, mas isso não é auditoria independente de toda afirmação/fonte nem certificação WCAG. O CI do HEAD atual deve concluir antes de qualquer declaração de aprovação.


## Auditoria semântica incremental — lote M5 q-m5-16 a q-m5-20 (2026-10-26)

- Revisão focal do lote M5 q-m5-16..q-m5-20, com escopo explícito de métricas de classificação/regressão, desbalanceamento, engenharia de atributos e avaliação de desempenho; não equivale à auditoria integral do M5.
- q-m5-16: corrigido erro ortográfico em “Substituem”; preservada a distinção entre precisão (precision), recall, especificidade e F1.
- q-m5-18: corrigido “Substituem” e refinada a pegadinha do RMSE: raiz quadrada da média dos erros ao quadrado, não média simples dos erros.
- q-m5-19: corrigido o anglicismo/erro “ecc.” para “etc.” nos exemplos de engenharia de atributos.
- q-m5-20: substituída questão redundante com q-m5-09 por cenário de classificação com 1% de positivos. O classificador que prevê sempre negativo obtém 99% de acurácia, recall zero para a classe positiva e especificidade de 100% se houver negativos reais. A explicação ressalva a convenção de cálculo quando não há predições positivas e destaca a necessidade de selecionar métricas conforme objetivo e custo dos erros.
- Fonte primária para o tema de classes desbalanceadas adicionada a `references.js` e `referencias/referencias-verificadas.md`: Saito e Rehmsmeier (2015), PLOS ONE, DOI 10.1371/journal.pone.0118432; metadados confirmados na página editorial da PLOS em 2026-10-26. O cenário numérico de q-m5-20 é autoral, não dado extraído do artigo.
- Commits do lote: `9be6af8f94e27dbf5d272451ea004ab9a2179d91` (questões), `8210a91d430c2f5e5228273592de155363ea4944` (catálogo de referências), `50d318333d65294c7166d29c4b54baddf8f975e3` (registro de fontes), `6a137e984aded68576f2da5c07cb77a4853a8bf6` (correção ortográfica remanescente).
- Validação pendente para o novo HEAD: executar/consultar workflow de sintaxe, auditoria estrutural, smoke e regressões; a última aprovação anterior, no HEAD `8b9683dfb589212225d31361cd69512db828dc8d`, não certifica estes commits posteriores.
- Próximo lote proposto: revisão semântica q-m5-11..q-m5-15, sem assumir cobertura dos demais itens do módulo.

## Auditoria semântica incremental — lote M5 q-m5-11 a q-m5-15 (2026-10-26)

- Revisão focal de q-m5-11..q-m5-15; não representa auditoria integral do módulo.
- q-m5-11: reescrita para distinguir corretamente aprendizado supervisionado (alvos conhecidos), não supervisionado (estrutura sem alvos fornecidos) e por reforço (interação e recompensas). A formulação anterior reduzia indevidamente a distinção à presença/ausência de rótulos.
- q-m5-12: corrigidos erros ortográficos em “prevê”.
- q-m5-13: reescrita para separar clustering de redução de dimensionalidade, explicitar que a redução pode perder informação e evitar afirmar que toda redução é não supervisionada. PCA é citado apenas como exemplo comum de método tipicamente não supervisionado.
- q-m5-14 e q-m5-15 foram revisadas neste passe focal; não foi identificado motivo para alterar gabarito ou estrutura neste lote.
- Commit de conteúdo: `4bb937ee0a80e6bb853faefded6cc328beff602d`.
- O lote q-m5-16..q-m5-20 está documentado na seção imediatamente anterior. O catálogo de fontes foi atualizado com a referência editorial verificada de Saito e Rehmsmeier (2015).
- Validação pendente para o novo HEAD: os resultados de CI do commit anterior não certificam este commit; consultar os workflows associados ao HEAD atual antes de declarar aprovação.
- Próximo lote proposto: revisão focal de q-m5-06..q-m5-10, verificando precisão conceitual, alternativas, justificativas e fontes.

## Recuperação do catálogo de referências — 2026-10-26

- O workflow `40330161977` identificou erro de sintaxe em `references.js` no commit `2f052f8da637871bf2f0de1ab32f345bb9dffa52`. A causa foi uma atualização via API que enviou apenas o bloco terminal de referências, em vez do arquivo completo.
- O arquivo foi restaurado a partir da versão íntegra do commit `9be6af8f94e27dbf5d272451ea004ab9a2179d91` e a referência de Saito e Rehmsmeier (2015) foi inserida antes do fechamento do array, preservando o catálogo anterior. Commit de recuperação: `b1dc86e908f0e906cb147b6b8efd5dcdc80ce68f`.
- Verificação pós-gravação por leitura remota: arquivo inicia com o cabeçalho `references.js`, termina com a exposição `window.references = references`, e contém as entradas WCAG 2.2 e Saito/Rehmsmeier. Isso é uma verificação textual, não substitui `node --check`.
- A execução que detectou o defeito falhou; os resultados de commits posteriores ainda precisam ser consultados. Não declarar CI verde até o workflow completar no HEAD atual.
- Ao usar `update_file`, sempre enviar o conteúdo integral do arquivo atualizado; antes de gravar, validar o início, o final e os marcadores esperados para evitar substituição parcial.

## Correção de sintaxe após lote M5 q-m5-11..q-m5-15 — 2026-10-26

- O workflow `40330396395` reportou `Unexpected token ':'` em `questions_m5.js`, na declaração de q-m5-12. A substituição dos blocos q-m5-11 e q-m5-13 havia removido a chave de abertura dos objetos q-m5-12 e q-m5-14.
- Corrigidos os dois delimitadores e feita uma verificação textual no arquivo para garantir que não restassem linhas de propriedades `id: "q-m5-NN"` sem o prefixo `{`. Commit: `dbd50d420ccafd9e4fdbf3d2892c9fd648a091c7`.
- A verificação textual não equivale a compilação; aguardar `node --check` e o workflow completo no HEAD atual antes de considerar o lote validado.

## Auditoria semântica incremental — lote M5 q-m5-06 a q-m5-10 (2026-10-26)

- q-m5-06: viés alto/baixa variância e viés baixo/alta variância passaram a ser descritos como tendências típicas, evitando tratar o diagnóstico como equivalência determinística; ortografia atualizada para “consequência”.
- q-m5-07: reescrita a definição de XAI para deixar claro que explicações dependem do método e do contexto; uma explicação local não garante transparência global, causalidade, justiça ou correção.
- q-m5-08: revisada; mantida a distinção entre treinamento e inferência.
- q-m5-09: contexto e análise ajustados para descrever avaliação como evidência sobre desempenho nas condições avaliadas, não como garantia de ausência de falhas.
- q-m5-10: removida a expressão indefinida “IA completa” como critério técnico universal. A questão agora aborda definição de caso de uso, limites, critérios de desempenho, adequação dos dados e análise de riscos antes da implantação.
- Commit de conteúdo: `3bb83da4c5e1e7ee48810249dd41f15516d1b249`.
- Lotes q-m5-06..q-m5-20 foram revisados em passes focais documentados, mas isso não equivale à revisão completa das 42 questões do M5. Os checks de sintaxe e de navegador devem ser confirmados no HEAD atual.

## Auditoria semântica incremental — lote M5 q-m5-01 a q-m5-05 (2026-10-26)

- q-m5-01: ajustada a explicação para distinguir a necessidade de dados de treinamento para redes neurais da definição mais ampla de sistemas de IA.
- q-m5-02: corrigida frase truncada na justificativa do distrator E e substituída a expressão imprecisa “conhecimento vivo codificado” por “conhecimento do domínio explicitado em regras”.
- q-m5-03 e q-m5-04: revisadas neste passe focal; mantidas as distinções entre ML e tarefas específicas, e entre treino, validação e teste.
- q-m5-05: refinada a explicação de overfitting para descrever ajuste excessivo aos dados de treino e generalização prejudicada, sem sugerir que todo caso precise ser descrito literalmente como memorização de ruído.
- Commit de conteúdo: `4be5ee9793f53b4a1d0ccdba69395c1d2aa5d0c3`.
- M5: os registros incrementais cobrem as 42 questões q-m5-01..q-m5-42 em revisões focais por lotes; validar o esquema e os testes no CI do HEAD atual continua obrigatório.

## Auditoria semântica incremental — lote M4 q-m4-31 a q-m4-35 (2026-10-26)

- q-m4-31: reescrita para testar princípios expressos no art. 6º da LGPD (finalidade, necessidade e transparência), evitando a formulação vaga “princípio fundamental” e a impressão de que consentimento é sempre a única base legal.
- q-m4-32: mantida após revisão focal; diferencia fundamentos do art. 2º e princípios do art. 3º do Marco Civil da Internet. A redação já distingue neutralidade de rede, proteção da privacidade e proteção de dados pessoais e aponta os dispositivos legais pertinentes.
- q-m4-33: reescrita em cenário de marketing com dados de compras anteriores. Explicita que cadastro prévio não autoriza automaticamente qualquer uso posterior, exige análise da base legal e dos princípios e limita o recurso ao legítimo interesse conforme os arts. 10 e 11 da LGPD.
- q-m4-34: mantida provisoriamente após revisão focal da formulação sobre a natureza institucional e as competências da ANPD; requer conferência final da legislação vigente e da fonte oficial antes de encerrar a auditoria jurídica do bloco.
- q-m4-35: mantida após revisão focal; descreve direitos do art. 18 sem transformar eliminação ou portabilidade em direitos absolutos.
- Commit de conteúdo: `675cddb4d1c3d2a06313c1619f894dbdbe023eaa`.
- Este passe cobre apenas q-m4-31..q-m4-35; não é validação jurídica integral das 85 questões do M4. O CI deve ser consultado no HEAD resultante antes de considerar validada a sintaxe.

## Auditoria semântica incremental — lote M4 q-m4-36 a q-m4-40 (2026-10-26)

- q-m4-36: revisada; mantida a distinção entre competências administrativas da ANPD e funções judiciais/criminais, com referência aos arts. 55-A e 55-J da LGPD. A verificação final da redação vigente da Lei nº 15.352/2026 ainda deve ser confirmada por fonte oficial.
- q-m4-37: mantida após revisão focal; identifica o art. 5º, X e LXXIX, da Constituição e a EC nº 115/2022, sem confundir o direito à proteção de dados com a disciplina infraconstitucional da LGPD.
- q-m4-38: reescrita para distinguir controlador, operador e titular, remover a equivalência incorreta entre agentes e eliminar a afirmação absoluta de que só o controlador tem deveres. Fontes legais ampliadas para arts. 5º, 37, 39 e 42 da LGPD.
- q-m4-39: corrigida referência legal incorreta: a definição de dado pessoal está no art. 5º, I, não no inciso IX (que trata de anonimização). Enunciado atualizado para “pessoa natural identificada ou identificável”.
- q-m4-40: revisada; mantida a complementaridade entre o Marco Civil da Internet e a LGPD, evitando afirmar que uma lei substitui ou dispensa a outra.
- Commit de conteúdo: `fd697035d2e9248b756392c830a597c7dd1b93a3`; q-m4-31/q-m4-33 foram alteradas no commit `675cddb4d1c3d2a06313c1619f894dbdbe023eaa`.
- Este passe cobre q-m4-36..q-m4-40, não valida juridicamente todo o bloco legal do M4. Verificar os workflows do HEAD atual antes de considerar o lote aprovado.

## Auditoria semântica incremental — lote M4 q-m4-41 a q-m4-45 (2026-10-26)

- q-m4-41: padronizado o nome da Lei nº 12.527/2011 para “Lei de Acesso à Informação” e corrigido erro ortográfico na análise.
- q-m4-42: reescrita para delimitar a regra geral de ordem judicial para disponibilização de registros de conexão e de acesso a aplicações, distinguindo esses registros do regime específico de dados cadastrais e apontando o art. 10, §§ 1º e 3º, do Marco Civil.
- q-m4-43: revisada; mantida a distinção entre agentes de tratamento, autoridades e titulares, sem atribuir ao titular a responsabilidade automática pelo tratamento.
- q-m4-44: revisada; mantida a complementaridade entre LGPD e Marco Civil, embora a expressão “prioriza” seja uma síntese pedagógica, não uma exclusão de temas compartilhados.
- q-m4-45: corrigida a concordância na regra de confidencialidade (“quem tem autorização”).
- Commit de conteúdo: `8874dc1e23c1f1ddf66f7e5bc0569e23bb78f531`.
- Este passe é focal, não uma auditoria jurídica integral. Confirmar sintaxe e workflows no HEAD atual.

## Auditoria semântica e didática incremental — lote M4 q-m4-46 a q-m4-50 (2026-10-26)

- O lote anterior repetia definições elementares de integridade, disponibilidade, autenticação, autorização e auditoria. Para aumentar a profundidade sem aumentar o número de questões, q-m4-46..q-m4-50 foram substituídas por cenários aplicados:
  - q-m4-46: uso de hash criptográfico para detectar alteração, com ressalvas sobre referência confiável, autoria e legitimidade.
  - q-m4-47: distinção entre Recovery Time Objective (RTO) e Recovery Point Objective (RPO), sem tratá-los como garantias.
  - q-m4-48: independência das categorias de fatores em MFA e riscos dos fluxos de recuperação de conta.
  - q-m4-49: menor privilégio, separação de funções, identidades individuais e revisão de permissões.
  - q-m4-50: integridade de logs, sincronização de horário, restrição de acesso, detecção de adulteração e retenção.
- As questões citam materiais NIST específicos e foram redigidas para evitar alegações absolutas de segurança.
- Commit de conteúdo: `de82626f2b4b511be6e323ceb7f1d7d3be0b0620`.
- Este lote é uma revisão de conteúdo e não uma auditoria completa do M4. Validar sintaxe e testes automatizados no HEAD atual.

## Auditoria semântica e didática incremental — lote M4 q-m4-51 a q-m4-55 (2026-10-26)

- O lote foi reescrito para substituir definições rasas e distratores malformados por situações aplicadas:
  - q-m4-51: validação de backups por restauração real, integridade, dependências e tempo de recuperação.
  - q-m4-52: distinção entre recuperação de desastres e continuidade de negócios.
  - q-m4-53: definição e validação de RTO/RPO a partir do impacto no negócio; evita tratar metas como garantia.
  - q-m4-54: regra 3-2-1 descrita como três cópias, dois tipos de mídia e uma cópia fora do local; diferencia “fora do local” de “offline” e inclui controles adicionais contra ransomware.
  - q-m4-55: gestão de ciclo de vida da chave simétrica e ressalva de que cifragem não garante automaticamente integridade/autenticidade.
- Fontes técnicas citadas: NIST SP 800-34 Rev. 1, CISA #StopRansomware Guide, NIST FIPS 197 e NIST SP 800-38D.
- Commit de conteúdo: `e1e15193829ff4974bd96be452b217e3770310c9`.
- Este passe não substitui a revisão integral do módulo nem valida a sintaxe por si só. Consultar CI no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-56 a q-m4-60 (2026-10-26)

- q-m4-56: corrigida a simplificação de que criptografia assimétrica sempre cifra com chave pública e decifra com privada; diferencia assinaturas de mecanismos de estabelecimento de chaves.
- q-m4-57: corrigido o erro de digitação “ballote” e substituída a definição rasa por uma distinção entre hash criptográfico geral e armazenamento de senhas com sal e custo adequados.
- q-m4-58: removida a afirmação absoluta de que assinatura digital garante automaticamente não repúdio em qualquer contexto; agora requer validação da assinatura, integridade, cadeia e estado do certificado, conforme aplicável.
- q-m4-59: reescrita a função de certificado X.509 como vínculo entre chave pública e identidade/nome; explicita validação de cadeia, nome, validade e estado e não promete segurança global do site.
- q-m4-60: substituída definição genérica e metáforas imprecisas por cenário de spear phishing direcionado, com confirmação por canal independente e reporte.
- Commit de conteúdo: `8c4249e801702374ebb8165550dc59cc24369aab`.
- Fontes técnicas citadas incluem NIST FIPS 186-5, SP 800-56A, FIPS 180-4, SP 800-63B, RFC 5280, ITU-T X.509, MITRE ATT&CK e CISA. Este passe não substitui a revisão integral do M4 nem a validação automatizada do HEAD.

## Auditoria semântica e didática incremental — lote M4 q-m4-61 a q-m4-65 (2026-10-26)

- q-m4-61: substituída a metáfora imprecisa por um cenário de ransomware/trojan; esclarece que categorias podem se sobrepor e que nem todo malware se replica automaticamente.
- q-m4-62: corrigida a generalização de que antivírus só detecta por assinatura e EDR sempre responde em tempo real; a questão descreve capacidades típicas e dependência do produto/configuração.
- q-m4-63: corrigida a descrição de segmentação e a fonte técnica; agora trata de zonas, regras explícitas e redução do movimento lateral, sem afirmar que sub-redes por si só isolam tráfego.
- q-m4-64: removida a expressão sem sentido “afeitamento/agentar a segurança” e a metáfora “tirar a faca”; a questão aborda hardening, redução da superfície de ataque, atualização controlada e privilégio mínimo.
- q-m4-65: substituída a definição elementar por priorização contextual de vulnerabilidades, considerando exploração conhecida, exposição, criticidade, mitigação, verificação e exceções documentadas.
- Commit de conteúdo: `9c28aea9f2b03e272d9ed98bcac46bed3044eee2`.
- Fontes técnicas citadas incluem NIST SP 800-83 Rev. 1, SP 800-207, SP 800-53 Rev. 5, CIS Controls v8.1, NIST SP 800-40 Rev. 4 e o catálogo CISA KEV. Este passe não substitui a revisão integral do M4 nem os testes no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-66 a q-m4-70 (2026-10-26)

- q-m4-66: WAF descrito como camada de inspeção/bloqueio de tráfego web, sem garantir ausência de vulnerabilidades nem substituir correção de código.
- q-m4-67: IDS/IPS descritos pelas funções típicas, reconhecendo produtos integrados, efeitos de configuração e risco de falso positivo.
- q-m4-68: corrigida a promessa de que toda VPN criptografa e garante privacidade integral; agora delimita o túnel e os riscos fora dos pontos de terminação.
- q-m4-69: NTP contextualizado como sincronização temporal, sem atribuir-lhe prova de autenticidade/integridade dos logs.
- q-m4-70: substituída a recomendação vaga de “criptografia + assinatura + certificado” por cenário de comunicação sensível com protocolo seguro, validação de identidade/certificado e gestão de chaves.
- Commit de conteúdo: `736725652a9601d3dea32af3369a3501c78aa9a6`.
- Fontes citadas incluem OWASP WAF, NIST SP 800-94, SP 800-77 Rev. 1, RFC 5905, NIST SP 800-92 e SP 800-52 Rev. 2. Este passe não substitui a auditoria integral do módulo nem CI do HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-71 a q-m4-75 (2026-10-26)

- q-m4-71: controle compensatório agora exige avaliação de risco residual, mitigação proporcional, responsável, prazo e reavaliação; removida a promessa de que a alternativa mantém automaticamente o mesmo nível de segurança.
- q-m4-72: corrigida a definição de escalada horizontal; agora diferencia obter privilégios superiores de acessar recursos de outra identidade no mesmo nível.
- q-m4-73: substituída a definição elementar de força bruta por cenário de defesa com limitação proporcional, MFA, monitoramento e risco de bloqueio abusivo.
- q-m4-74: corrigida a explicação de password spraying e incluída detecção por correlação entre múltiplas contas.
- q-m4-75: corrigida a expressão “senha vlada” e substituída a definição rasa de credential stuffing por medidas de prevenção e resposta a credenciais reutilizadas/comprometidas.
- Commit de conteúdo: `f01b5e9d3e04e5d7b2c3e2381953a93340c56371`.
- Fontes técnicas citadas incluem NIST SP 800-53 Rev. 5, MITRE ATT&CK, OWASP Authentication/Credential Stuffing Cheat Sheets e orientação Microsoft Entra. Revisão focal; validação automatizada ainda deve ser confirmada no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-76 a q-m4-80 (2026-10-26)

- q-m4-76: removida a formulação “escapar” sem sentido; cenário de SSRF reescrito com validação de esquema/destino, DNS, redirecionamentos e restrição de acesso a redes internas.
- q-m4-77: substituída a definição genérica de mitigação por tratamento de risco, incluindo análise, resposta, responsável, monitoramento e risco residual.
- q-m4-78: reescrita para cobrir contenção proporcional, preservação de evidências, comunicação autorizada e documentação durante incidente.
- q-m4-79: substituída a repetição genérica de continuidade por análise de impacto nos negócios (BIA), dependências e priorização.
- q-m4-80: removida a lista repetitiva de fases de resposta e incluída a importância de papéis claros, exercícios, revisão e lições aprendidas. Fonte atualizada para NIST SP 800-61 Rev. 3.
- Commit de conteúdo: `3a0ec921ba68e7acc777fcfa6aca1aa12a682a60`.
- Fontes citadas: OWASP SSRF Prevention Cheat Sheet, NIST SP 800-30 Rev. 1, NIST SP 800-34 Rev. 1 e NIST SP 800-61 Rev. 3. Este passe focal não substitui CI nem auditoria integral do M4.

## Auditoria semântica incremental — lote M4 q-m4-81 a q-m4-85 (2026-10-26)

- q-m4-81: controle preventivo aplicado a uma interface administrativa exposta, diferenciando prevenção, detecção, resposta e recuperação.
- q-m4-82: controle detectivo em ambiente com excesso de alertas; incluídos correlação, severidade, triagem e avaliação de falsos positivos/negativos.
- q-m4-83: recuperação após comprometimento de conta, incluindo revogação de sessões/credenciais, correção da causa, restauração confiável e validação antes da retomada.
- q-m4-84: controle compensatório temporário para equipamento legado, com isolamento, monitoramento, prazo, responsável e reavaliação do risco residual.
- q-m4-85: substituída definição superficial de vulnerabilidade por cenário que diferencia ameaça, vulnerabilidade e risco contextual.
- Commit de conteúdo: `345ed88c6b3542858ec3a438c625fd78612938b4`.
- M4: as revisões focais registradas cobrem q-m4-01..q-m4-85; questões legislativas ainda exigem verificação artigo a artigo quando usadas para conclusões jurídicas. Sintaxe, esquema, matriz curricular e testes devem ser confirmados no CI do HEAD atual.

## Revisão inicial do M4 — q-m4-08 e q-m4-10 (2026-10-26)

- q-m4-08: refeita integralmente porque apresentava apenas quatro alternativas, além de uma alternativa A com texto truncado (“quantotempo”) e formulações que confundiam RPO e RTO. A versão atual tem cinco alternativas e diferencia ponto de recuperação/perda de dados tolerável de tempo-alvo de recuperação.
- q-m4-10: refeita integralmente para diferenciar ameaça, vulnerabilidade e risco contextual; agora contém cinco alternativas e evita afirmar que vulnerabilidade prova exploração.
- Commit de conteúdo: `4e89103902ea94ac301c81bf31a9267c5c70be08`.
- Revisão pontual de q-m4-01..q-m4-10 encontrou temas fundamentais repetidos com q-m4-46..q-m4-50 e q-m4-81..q-m4-85; os lotes posteriores foram aprofundados para reduzir essa repetição. Ainda é necessário revisar redação e fontes de q-m4-01..q-m4-07 e q-m4-09, inclusive a formulação da estratégia 3-2-1 em q-m4-07.

## Revisão adicional de q-m4-05..q-m4-09 (2026-10-26)

- q-m4-05: corrigida alternativa distratora sobre MFA para evitar erro de concordância e esclarecer que MFA não elimina necessariamente a senha.
- q-m4-06: atualizada a regra mnemônica para não incluir DES/3DES como exemplos recomendados atuais e para não simplificar o par assimétrico como “dois pares”.
- q-m4-07: corrigida a distinção da estratégia 3-2-1: a cópia “fora do local” não é sinônimo de “offline” ou “imutável”; estes podem ser controles adicionais.
- q-m4-08 e q-m4-10 foram reescritas no commit `4e89103902ea94ac301c81bf31a9267c5c70be08`.
- q-m4-09: removido o trecho em inglês “nothing more”.
- Commit adicional de conteúdo: `9644a6c31d2a7496893d09b4b76a20ddbd76ebd3`.

## Auditoria semântica incremental — lote M4 q-m4-11 a q-m4-15 (2026-10-26)

- q-m4-11: corrigidos erros de digitação/inglês e reformulada a diferença entre vírus e worm sem absolutos sobre interação do usuário.
- q-m4-12: trojan descrito como malware que induz execução por disfarce; backdoor é possibilidade, não requisito universal. Removidas metáforas imprecisas.
- q-m4-13: ransomware descrito com bloqueio/criptografia e possíveis formas de extorsão por exfiltração; esclarecido que pagamento não garante recuperação ou sigilo. Ortografia final conferida.
- q-m4-14: botnet descrita como conjunto de dispositivos comprometidos coordenados remotamente, com finalidades variáveis; removida regra mnemônica sem sentido.
- q-m4-15: rootkit descrito pelo aspecto de ocultação, sem afirmar que todo caso necessariamente obtém privilégios administrativos; corrigida referência MITRE para T1014 (Rootkit), em vez de T1055.
- Commit principal do lote: `d283cdbe7f799d10457a18c8a7a0228220971d96`; correção ortográfica adicional q-m4-13: `aca9607b772962133516eff17948d6232172c3ed`.
- Fontes citadas: NIST SP 800-83 Rev. 1, CISA #StopRansomware, CISA DDoS e MITRE ATT&CK T1014. Revisão focal, sujeita a validação automatizada no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-16 a q-m4-20 (2026-10-26)

- q-m4-16: removida a expressão sem sentido “bastão de watt”; firewall agora descrito como controle de filtragem de tráfego, sem prometer remover malware ou bloquear todo phishing.
- q-m4-17: removida a repetição de IDS/IPS (já aprofundada em q-m4-67) e substituída por cenário de política de firewall com negação por padrão, exceções justificadas e validação de dependências.
- q-m4-18: defesa em profundidade aplicada a cenário de credenciais comprometidas, sem dizer que as camadas “garantem” segurança.
- q-m4-19: corrigida a expressão “audibilidade” e a afirmação de que logs seriam “informações demográficas”; incluídos integridade, controle de acesso, retenção e minimização.
- q-m4-20: reescrita em cenário de mudança de função, revisão de permissões e remoção de acesso obsoleto.
- Commit de conteúdo: `a85467590ea11ce1126853991d4b70461c9e96f7`.
- Fontes citadas: NIST SP 800-41 Rev. 1, SP 800-53 Rev. 5 e SP 800-92. Revisão focal, sujeita a validação automatizada no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-21 a q-m4-25 (2026-10-26)

- q-m4-21: phishing reescrito para incluir roubo de dados, links maliciosos e indução a ações; remove a ideia de que erros ortográficos sejam necessários para identificar fraude.
- q-m4-22: pharming descrito como redirecionamento técnico, por exemplo por manipulação de resolução de nomes/configuração local; corrigida a associação conceitual indevida a MITRE T1557 (MitM).
- q-m4-23: cenário aplicado de engenharia social com solicitação de código de autenticação; removida a expressão depreciativa “estupidez tecnológica”.
- q-m4-24: força bruta diferenciada entre ataques online e offline, com mitigações correspondentes; removida a confusão com autenticação sem senha.
- q-m4-25: MitM ligado a validação de certificado e nome do servidor, com ressalva de que criptografia sem validação pode proteger o canal com o endpoint errado.
- Commit de conteúdo: `81d1118a88648fa3d915ba10f93180b95065c96c`.
- Fontes citadas: CISA phishing, ICANN DNS security, NIST SP 800-63B, NIST SP 800-52 Rev. 2 e OWASP TLS Cheat Sheet. Revisão focal, sujeita a CI no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-26 a q-m4-30 (2026-10-26)

- q-m4-26: DoS/DDoS reescrito como cenário de resposta operacional, com validação por telemetria, coordenação de mitigação e preservação de evidências; removidas afirmações absolutas sobre detecção.
- q-m4-27: exposição de dados por configuração incorreta tratada como possível incidente, com contenção, preservação, avaliação de escopo e acionamento dos responsáveis para determinar obrigações aplicáveis.
- q-m4-28: removida a segunda questão redundante sobre MitM e substituída por ataque de repetição (replay), com frescor, nonces, sequência e vinculação ao contexto.
- q-m4-29: IoCs definidos como evidências contextuais que orientam investigação, não como prova conclusiva isolada.
- q-m4-30: removida a terceira questão redundante sobre MitM e substituída por ataque à cadeia de suprimentos de software.
- Commit de conteúdo: `f12023fdf42705c873c4ad56815f84fe7304bcdc`.
- Fontes citadas: CISA DDoS, ANPD comunicação de incidente, NIST SP 800-63B, RFC 8446, CISA incident playbooks e orientação CISA sobre cadeia de suprimentos. Revisão focal, sujeita a CI no HEAD atual.

## Verificação de fontes oficiais — questões legais M4 (2026-10-26)

- Conferência dos textos oficiais no Portal Planalto confirmou que a Lei nº 15.352/2026 transformou a ANPD em Agência Nacional de Proteção de Dados, autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública. As questões q-m4-34 e q-m4-36 agora incluem ligação para a lei e para a LGPD compilada.
- q-m4-37 passou a apontar a Constituição Federal, a EC nº 115/2022 e a LGPD compilada; q-m4-40 passou a apontar os textos oficiais do Marco Civil da Internet e da LGPD.
- Referências oficiais consultadas: Lei nº 15.352/2026, Lei nº 12.965/2014 e Lei nº 13.709/2018 compilada.
- Commits de atualização das fontes: `53ed872c400e42f67c52e1819b69e91ddaf78214` e `95b1844e58bb58c9aba432d6f6219e31cf24ff6c`.
- A conferência confirma os dispositivos citados nos limites desta revisão; não equivale a parecer jurídico nem valida todo o conteúdo legislativo do módulo.

## Auditoria semântica incremental — M6 q-m6-01 a q-m6-25 (2026-10-26)

- Revisão focal de q-m6-01..q-m6-25: a maioria dos itens foi mantida após leitura por se encontrar bem delimitada e fundamentada; duas questões receberam correções relevantes.
- q-m6-18: ajustada a justificativa sobre uso de tecnologia da informação na LAI. O art. 3º, III, estabelece diretriz, mas o art. 8º, § 4º, contém exceção específica à divulgação obrigatória em sítios oficiais para municípios com até 10 mil habitantes, ressalvadas obrigações fiscais. A fonte oficial da LAI foi adicionada.
- q-m6-24: reformulada para não afirmar que a divulgação nominativa de beneficiários é sempre proibida sem consentimento nem que a LAI sempre exige nomes e valores individualizados. O item agora afirma que o art. 8º, isoladamente, não torna a divulgação automaticamente legítima; a análise depende de norma específica, base jurídica, finalidade, necessidade, proporcionalidade e salvaguardas, conciliando LAI e LGPD.
- Commit q-m6-18: `4e31a170d12f48bddf7bec6370661b79cf7b3b6a`; commit q-m6-24: `f9abeb51546a40746aaf6b3cbf0e47a94214e006`.
- M6: q-m6-01..q-m6-47 receberam revisão focal por lotes; isso não equivale a verificação artigo a artigo de todas as normas remissivas. A validação automatizada do HEAD atual permanece obrigatória.

## Correção de sintaxe após revisão M6 — 2026-10-26

- O workflow `40335281895` falhou em `node --check` no arquivo `apostila-ia/assets/data/questions_m6.js`, linha 571: `Unexpected token '{'`. A causa foi a substituição de q-m6-24 a partir do identificador, que deixou a chave de abertura original e acrescentou outra, produzindo `{ { id: "q-m6-24"`.
- Removida a chave duplicada no commit `3ffa29dd72e86e991a0624187fc3b52b9c91935b`. A correção precisa ser confirmada por nova execução de `node --check` e pelo workflow completo no HEAD resultante.
- Lição operacional: ao substituir um objeto inteiro, incluir/remover o delimitador de abertura de forma consistente; não iniciar a substituição no identificador se o bloco novo também inclui a chave e a chave original permanecerá no arquivo.

## Auditoria M4 q-m4-21..q-m4-30 e correção CI (2026-10-26)

- q-m4-21..q-m4-25: revisão focal de phishing, pharming, engenharia social, força bruta e MitM. As definições e respostas estão coerentes com os cenários; fontes apontam para CISA, ICANN, NIST e OWASP. Não foram necessárias alterações neste lote.
- q-m4-26..q-m4-30: revisão focal de DDoS, exposição de dados, replay, IoCs e cadeia de suprimentos. As alternativas corretas e ressalvas de contexto são coerentes; fontes apontam para CISA, NIST e RFC 8446. Não foram necessárias alterações neste lote.
- O run CI `40335797083` falhou no `node --check` de `apostila-ia/assets/data/questions_m6.js`, linha 588: a declaração `q-m6-25` perdeu a chave de abertura do objeto. Correção mínima aplicada, commit `b45f786cd09406db106afcda01a243acc78f70d2`. A execução completa precisa ser repetida no novo HEAD; não considerar o CI aprovado até verificar o resultado.
- A falha foi de sintaxe, não de conteúdo jurídico da questão. Depois da correção, validar novamente todos os arquivos JavaScript e revisar quaisquer erros em cascata reportados pelo CI.

## Auditoria semântica incremental — lote M5 q-m5-16 a q-m5-19 (2026-10-26)

- q-m5-16: aprofundada avaliação de classificação com matriz de confusão, precisão, recall, especificidade, custos de erros e limites do F1; corrigida redação gramatical anterior.
- q-m5-17: contextualizado desbalanceamento de classes; incluídos métricas por classe e prevenção de vazamento ao aplicar reamostragem apenas no treino, com avaliação em dados representativos.
- q-m5-18: revisadas definições de MAE e RMSE, unidade de medida e sensibilidade relativa do RMSE a erros grandes; mantidas ressalvas sobre generalização e viés.
- q-m5-19: ampliada engenharia de atributos para incluir disponibilidade temporal, vazamento de alvo e ajuste de transformações apenas com treino.
- Fontes adicionadas/atualizadas: documentação scikit-learn para avaliação e armadilhas comuns; documentação imbalanced-learn para vazamento com reamostragem; artigo original SMOTE (DOI 10.1613/jair.953).
- Commits de conteúdo: `00be52d650ff0f09e187e5967aa8aad8bdf075e0` e correção da fonte `ea58f36929147d4348ce23e86e1afdaf69ded589`.
- O workflow de validação ainda deve ser conferido no HEAD mais recente; o último erro conhecido de sintaxe no arquivo M6 foi corrigido em `b45f786cd09406db106afcda01a243acc78f70d2`, mas os resultados dessa execução não substituem a validação do HEAD atual.

## Auditoria semântica incremental — lote M5 q-m5-11 a q-m5-15 (2026-10-26)

- q-m5-11: reformulada com três tarefas práticas para distinguir aprendizado supervisionado, não supervisionado e por reforço pelo sinal de aprendizagem.
- q-m5-12: classificação e regressão contextualizadas por tipo de alvo; adicionada ressalva sobre discretização da variável numérica.
- q-m5-13: aprofundada a diferença entre clustering e redução de dimensionalidade; esclarecido que nem toda redução é necessariamente não supervisionada.
- q-m5-14: rotulagem, atributos e variável-alvo diferenciados com atenção à qualidade dos rótulos e ao vazamento quando o alvo aparece nas entradas.
- q-m5-15: expandida definição de vazamento para incluir estatísticas calculadas antes da separação treino/teste e atributos disponíveis apenas após o resultado.
- Fontes: Murphy (2012), ISLR (2ª ed., 2021), Jain (2010; DOI 10.1016/j.patrec.2009.09.011) e documentação scikit-learn sobre armadilhas comuns.
- Commit de conteúdo: `e0e64d51e4fb04a4401ac71abda74d1de6d4f595`. Validar sintaxe e auditorias automatizadas no HEAD atual antes de considerar o lote concluído.

## Auditoria semântica incremental — lote M5 q-m5-01..q-m5-10 (2026-10-26)

- q-m5-01: atualizada a definição de IA para abranger diferentes tarefas e métodos, sem pressupor consciência, robótica ou aprendizado autônomo.
- q-m5-02: sistema baseado em regras contextualizado; incluídos manutenção, conflitos, exceções e possibilidade de arquitetura híbrida.
- q-m5-03: ampliada a definição de aprendizado de máquina para incluir diferentes paradigmas e a ressalva de que mais dados não garantem melhora.
- q-m5-04 e q-m5-05: revisão focal sem alteração de conteúdo; continuam distinguindo treino/validação/teste e sobreajuste.
- q-m5-06: reescrita para associar padrões de erro a subajuste/sobreajuste sem tratar viés/variância como regras absolutas.
- q-m5-07 e q-m5-08: revisão focal sem alteração; XAI mantém ressalvas sobre causalidade e explicações, inferência permanece distinta de treinamento.
- q-m5-09: atualizada para incluir métricas alinhadas ao uso, análise de erros/subgrupos, separação de teste e monitoramento.
- q-m5-10: revisão focal sem alteração; escopo e avaliação vinculados ao caso de uso, aos critérios e aos riscos.
- Fontes: OECD AI system definition; Russell & Norvig; Mitchell; Geman et al. (DOI 10.1162/neco.1992.4.1.1); NIST AI RMF 1.0. Commit de conteúdo: `efa0562605a895839f184b41d6cb8e1df3fd6f30`.
- Aguardando conclusão da validação automatizada do HEAD atualizado; não assumir aprovação com base em execuções canceladas ou em commits anteriores.

## Revisão focal de q-m6-01..q-m6-40 (2026-10-26)

- q-m6-01..q-m6-20: revisão focal das questões sobre princípios administrativos, finalidade/adequação na LGPD, LAI, transparência ativa/passiva, prazos e sítios oficiais. Não foram detectadas correções necessárias nesta passagem; as questões mantêm referências legais e distinções explícitas.
- q-m6-21..q-m6-30: revisão focal de atos eletrônicos, automação e competência, conteúdo da resposta LAI, dados pessoais, anonimização, classificação de sigilo, decisão de classificação, hipóteses de dispensa de consentimento, trilha de auditoria e responsabilidade. Sem alterações de conteúdo nesta passagem; foram verificadas as ressalvas contra conclusões automáticas de responsabilidade.
- q-m6-31..q-m6-35: revisão focal de governança de redes sociais institucionais, conflito de interesses, conduta em conta pessoal, acessibilidade e preservação do atendimento presencial. As distinções entre obrigação legal e boa prática de governança estão explicitadas.
- q-m6-36..q-m6-40: revisão focal dos níveis didáticos de automação, desenho de supervisão humana, preservação de evidências, uso de IA em redação oficial e transparência ativa. As questões qualificam o caráter didático da escala de automação e evitam apresentar práticas técnicas como obrigações legais universais.
- A correção de sintaxe de `q-m6-25` permanece registrada no commit `b45f786cd09406db106afcda01a243acc78f70d2`. O lote anterior de validação no HEAD `c1c0c0eb56f7ea52705dfe185208bddd45e957ad` teve o job de validação estática concluído com sucesso, mas esta atualização do registro exige uma nova validação no HEAD resultante.
- A revisão é focal, não equivale a parecer jurídico integral nem substitui verificação final da versão consolidada das leis e do escopo de cada norma.

## Revisão focal de q-m7-01..q-m7-40 (2026-10-26)

- q-m7-01..q-m7-10: revisados DIKW, limites do modelo, dados qualitativos codificados numericamente, estrutura de dados, metadados, escalas de mensuração e linhagem versus catálogo. Não foram necessárias correções nesta passagem.
- q-m7-11..q-m7-20: revisadas dimensões de qualidade (validade, acurácia, completude, consistência, unicidade, tempestividade), reconciliação, ausência de dados, erros de tipo e trade-offs de qualidade. Cálculos e distinções examinados; sem alterações.
- q-m7-21..q-m7-30: revisados ETL/ELT, anonimização versus pseudonimização, efeito de duplicidade, escala nominal, ciclo de vida/retention e papéis de governança. Sem correções necessárias nesta passagem.
- q-m7-31..q-m7-40: revisados falsos positivos/negativos em deduplicação, papéis LGPD, escolha ETL/ELT por sensibilidade, métricas de ausência e duplicidade, min-max, normalização estatística versus de banco, média ponderada, quasi-identificadores e minimização. Os cálculos (9,2% ausência/90,8% completude; 6% duplicidade; z-score 1,5 e 2,0; min-max 1,25 e −0,50; média ponderada 6,5) conferem com os enunciados.
- Fontes são predominantemente referências ao currículo do Módulo 7, conforme desenho didático do banco de questões; não representam citações legais ou externas universais. Revisão focal concluída para o conjunto de 40 questões M7; validação automatizada deve ser confirmada no HEAD resultante deste registro.

## Auditoria semântica incremental — questões M8 q-m8-01..q-m8-40 (2026-10-26)

- q-m8-01..q-m8-10: revisados escolha de gráfico, integridade de escalas, histograma, média/mediana/moda, Power Query, granularidade, narrativa e métricas de processo/resultado. Corrigida q-m8-07, removendo texto residual sem sentido na pegadinha; commit `5c388060c54f961b86af0a772a8183dbe1fc2729`.
- q-m8-11..q-m8-20: revisados ferramentas de BI, box plot, paletas, acessibilidade, escalas logarítmicas, escolha de gráfico, densidade de histograma, variação percentual, correlação e variância amostral. Corrigidas q-m8-14 (texto/definição de acessibilidade), q-m8-15 (contradição na justificativa logarítmica) e q-m8-17 (removida afirmação incorreta de que comparar histogramas exige larguras de classe iguais). Commit `df898401eaa1130734c84d6df4e2dcec48a26994`.
- q-m8-21..q-m8-30: revisados quartis, assimetria, amostragem/viés, seleção de ferramenta offline, comunicação de incerteza, painéis, ordenação de barras, hierarquia visual, causalidade e DAX. Corrigidas justificativas e textos residuais em q-m8-21, q-m8-23, q-m8-24, q-m8-25, q-m8-27 e q-m8-30; commits `1f5bee0caa8212868e81ce8b3fae4f596d4727c4`, `bd88383ceeae2540952d580e092757a330ff2d0c` e `82101956d9be4e43a59ae7028e827cfe77a1c5df`.
- q-m8-31..q-m8-40: revisados paleta divergente, histogramas de densidade, lacunas temporais, convenções de box plot, média ponderada, outliers, causalidade observacional, contagem distinta, agregação DAX e estudo de caso. Corrigidos q-m8-33 (lacuna temporal), q-m8-35 (justificativa de cálculo), q-m8-37 (causalidade sem afirmações absolutas), q-m8-39 (termo residual) e q-m8-40 (gramática e correspondência das alternativas), commit `a7271180d3ca01b5c27b4a319dc89f142be89222`.
- Verificação textual residual no arquivo M8 confirmou ausência de marcadores problemáticos encontrados durante a revisão (`CSNIF`, `detona`, `schnitt`, `corção`, `mais bons`, `questionamento é mais fino`, `sinalizar a vigência`, `os critérios são vencedores`, entre outros). A revisão focal das 40 questões M8 está concluída; sintaxe e auditorias precisam ser confirmadas no novo HEAD após este registro.

## Auditoria semântica incremental — bancos M1, M2 e M3 (2026-10-26)

### M1 — Microsoft 365, Word, Excel, PowerPoint e OneDrive (44 questões)
- Revisadas q-m1-01..q-m1-44.
- q-m1-01 e q-m1-04: a cota de 5 TB do OneDrive foi condicionada à elegibilidade do plano e à confirmação documental; não se deve generalizar para qualquer assinatura ou plano Enterprise.
- q-m1-06: corrigida afirmação universal de retenção fixa de 30 dias no histórico de versões; item agora é Errado porque a retenção depende do serviço, conta e políticas aplicáveis. Corrigida vírgula ausente em objeto da análise.
- q-m1-08: reescrita para não generalizar prazo de lixeira nem disponibilidade de controles de link para todas as contas e locatários.
- q-m1-24: corrigido erro de digitação em acessibilidade de PDF; q-m1-25: modo de compatibilidade descrito como restrição de alguns recursos incompatíveis, sem afirmar que desabilita indiscriminadamente tudo após 2007.
- q-m1-39: reescrita para não afirmar limite universal de 500 versões ou prazo fixo de 30 dias; orientação atual é verificar serviço, conta, política e testar restauração.
- Commits de conteúdo relevantes: `8b0cbe0fc795f238841fbbe78d05afd32299300f`, `4110eda4a3fd52d8c95a10be8899e2a29720a2fa`, `3551b6cc6970c06f6749b8420767c531d6ee47af`, `7389e822826d412774b3efce887fedd65ce2b5c2`, `9ecc2dd3b9026b0c6cfb2271418ffa7758cd3cef`.

### M2 — Redes e protocolos (54 questões)
- Revisadas q-m2-01..q-m2-54; cálculos CIDR /26, /27 e /28 conferidos.
- q-m2-04: esclarecido que implementações P2P podem usar serviços auxiliares de coordenação/indexação.
- q-m2-13 e q-m2-15: corrigida a comparação entre comutação de pacotes IP e caminhos lógicos MPLS/Frame Relay, evitando equiparar MPLS à comutação clássica de circuitos.
- q-m2-18: IGMP delimitado a multicast IPv4, com MLD como mecanismo correspondente em IPv6.
- q-m2-17 e q-m2-35: anycast descrito como seleção pela política de roteamento, frequentemente topológica, não necessariamente pela distância geográfica.
- q-m2-28 e q-m2-34: throughput explicado sem absoluto excessivo; a taxa útil costuma ficar abaixo da capacidade nominal, conforme definições e condições de medição.
- Commits de conteúdo relevantes: `d39486b793a6f7c73e75b29a8d98485e4d429e64`, `64dd4064d762bbaaed6ab564e6b2a3d09a5ae456`, `5c7b624217d73f4143aa43fe42126c2e01d078b0`.

### M3 — E-mail, calendários e reuniões (47 questões)
- Revisadas q-m3-01..q-m3-47.
- q-m3-05: POP3 descrito como comportamento padrão sujeito à configuração de manter cópia.
- q-m3-14 e q-m3-32: SPF/DKIM/DMARC descritos como controles que ajudam a reduzir spoofing de domínio, não como garantia contra toda falsificação.
- q-m3-15 e q-m3-31: phishing direcionado tratado como subtipo de phishing, não como escala universal de gravidade.
- q-m3-19: capacidade de webinar para 500 participantes condicionada à licença e à configuração contratadas.
- q-m3-21: corrigida a formulação para não tratar consentimento como base universal obrigatória; exige avaliar hipótese legal, transparência, finalidade, retenção, segurança e direitos aplicáveis.
- Commits de conteúdo relevantes: `be1df77c12875b243887a885161d90a0f320970c` e `22b1ddc73eb32f5134fa300f3380b299f594e00d`.
- As revisões acima são focais e baseadas nos dados do projeto e conhecimento técnico; requisitos de produto e licenciamento devem ser conferidos na documentação vigente do fornecedor antes de implantação. A validação automatizada precisa ser confirmada no HEAD resultante deste registro.

## Auditoria semântica incremental — lote M4 q-m4-21 a q-m4-30 (2026-10-26)

- q-m4-21: phishing descrito como engenharia social sem depender de erros ortográficos ou identidade visual.
- q-m4-22: pharming diferenciado de phishing, com ênfase no redirecionamento técnico; incluída referência específica ao guia de implantação segura de DNS do NIST.
- q-m4-23: cenário de pedido de código OTP; reforçada a confirmação por canal independente e a proibição de compartilhar o segredo.
- q-m4-24: diferenciados ataques online e offline contra senhas; mitigação offline ligada a armazenamento apropriado com sal e custo; atualizada referência NIST SP 800-63B para a série 800-63-4.
- q-m4-25: validação de certificado, cadeia de confiança e nome do servidor para reduzir risco de MitM; referência NIST SP 800-52 Rev. 2.
- q-m4-26: resposta a DDoS baseada em telemetria, mitigação coordenada, priorização e preservação de evidências, sem solução universal.
- q-m4-27: exposição por configuração tratada como possível incidente; contenção, preservação, avaliação e acionamento dos responsáveis, sem presumir notificação automática em todos os casos.
- q-m4-28: mitigação de replay por mecanismos de frescor, sequência e vinculação ao contexto; não depender apenas de IP.
- q-m4-29: IoCs tratados como indicadores contextuais sujeitos a correlação, não como prova conclusiva isolada.
- q-m4-30: cadeia de suprimentos definida por comprometimento de fornecedor, dependência, pipeline ou distribuição; assinatura e reputação não são garantia absoluta.
- Commit de conteúdo: `3cb53759c15432eac125fab4c323eac49eff996c`. As referências devem ser confirmadas pelos validadores de links/catálogo e o conjunto deve passar novamente pelos testes automatizados.

## Auditoria semântica incremental — lote M4 q-m4-21 a q-m4-40 (2026-10-26)

- q-m4-21 a q-m4-30: revisão focal de phishing, pharming, engenharia social, força bruta online/offline, MitM, DDoS, exposição de dados, replay, IoCs e cadeia de suprimentos. Conceitos centrais, gabaritos e distratores estavam coerentes no conteúdo consultado; mantidos sem reescrita ampla para evitar mudanças sem necessidade.
- q-m4-22: a descrição de pharming é coerente com redirecionamento técnico, mas a fonte CISA citada é mais diretamente sobre phishing; a referência ICANN de segurança de DNS dá contexto técnico, não deve ser tratada como uma definição normativa exclusiva de pharming.
- q-m4-31 a q-m4-35: revisão focal de princípios e bases legais da LGPD, distinção entre fundamentos/princípios do Marco Civil, natureza e competências da ANPD, e direitos dos titulares. Mantida a distinção entre direitos legais e direito absoluto de apagar todos os registros.
- q-m4-35: adicionada referência ao texto oficial compilado da LGPD para facilitar conferência dos direitos previstos no art. 18.
- q-m4-36: eliminada duplicação substancial com q-m4-34. A questão agora aborda fiscalização e sanções administrativas da ANPD, com limites legais, sem sugerir poderes ilimitados nem exclusividade sobre competências judiciais/criminais.
- Commit de conteúdo deste lote: `28a3781aaf57f0486701ae183cf686a549149208`.
- Fontes legais citadas no lote incluem textos oficiais do Planalto para LGPD, Marco Civil, Constituição Federal, EC nº 115/2022 e Lei nº 15.352/2026; fontes técnicas incluem CISA, NIST, OWASP, RFC 8446 e ICANN. Revisão semântica focal; validar automatizadamente no HEAD atual antes de considerar o lote concluído.

## Auditoria semântica incremental — q-m4-31 a q-m4-45 (2026-10-26)

- q-m4-31: conferidos os princípios de finalidade, necessidade e transparência (LGPD, art. 6º); a questão distingue consentimento de outras bases legais.
- q-m4-32: conferida a distinção entre fundamentos do art. 2º e princípios do art. 3º do Marco Civil; a redação separa a regra geral de neutralidade e as hipóteses legais.
- q-m4-33: marketing não tratado como autorização automática; legítimo interesse condicionado a análise de finalidade, necessidade, expectativas e direitos, sem aplicá-lo como base para dados pessoais sensíveis.
- q-m4-34: revisada a descrição da ANPD conforme o enquadramento legal registrado no material; manter validação da referência à Lei nº 15.352/2026 no verificador de fontes jurídicas.
- q-m4-35 e q-m4-36: direitos dos titulares e competências fiscalizatórias/sancionatórias descritos sem criar direitos absolutos ou poderes fora da lei.
- q-m4-37: relação entre CF/88, art. 5º, X e LXXIX, e EC nº 115/2022 descrita corretamente.
- q-m4-38 e q-m4-39: conferidas as definições de controlador, operador e dado pessoal da LGPD.
- q-m4-40 a q-m4-43: mantida a distinção entre LGPD, Marco Civil e LAI; acesso a registros foi diferenciado de acesso a dados cadastrais e a responsabilidade foi descrita conforme o papel legal.
- q-m4-44: reescrita para substituir slogans imprecisos por comparação objetiva entre os escopos complementares da LGPD e do Marco Civil.
- q-m4-45: removida referência inadequada a NIST SP 800-53 SC-5 (proteção contra negação de serviço); nova fonte NIST FIPS 199 e distinção entre confidencialidade, integridade e disponibilidade.
- Commit de conteúdo: `2be07e067fbe5da09a961e07856c86f351eabefe`. Revisão focal, não equivale a parecer jurídico nem à validação integral de todas as referências legais.

## Auditoria semântica incremental — lote M4 q-m4-36 a q-m4-40 (2026-10-26)

- q-m4-36: conferida a distinção entre competência fiscalizatória/sancionatória da ANPD e os limites legais e procedimentais; não se presume exclusividade sobre outras autoridades.
- q-m4-37: corrigido o assunto, que dizia “LGPD — Incisos do Art. 5º” embora o item avalie o art. 5º, X e LXXIX, da Constituição Federal e a EC nº 115/2022.
- q-m4-38: conferida a distinção entre controlador e operador, sem presumir transferência automática de toda responsabilidade contratual/legal.
- q-m4-39: conferida a definição de dado pessoal do art. 5º, I, da LGPD, com dependência do contexto e da identificabilidade da pessoa natural.
- q-m4-40: aprofundada a relação entre Marco Civil da Internet e LGPD com cenário de serviço digital e registros; substituídos distratores simplistas por erros jurídicos plausíveis.
- Commit de conteúdo: `ccb8d6b252a732e09dd5302abbc2de43b1c97754`.
- Fontes legais referenciadas nos itens: Constituição Federal, EC nº 115/2022, LGPD e Marco Civil da Internet. Trata-se de revisão focal, não de parecer jurídico integral; a validade sintática e estrutural depende do CI do HEAD atual.

## Revisão focal adicional — q-m4-46 a q-m4-65 (2026-10-26)

- q-m4-46: conferido o uso de hash criptográfico para detectar alteração, com a ressalva de que o hash não prova autoria nem legitimidade da versão.
- q-m4-47 e q-m4-51 a q-m4-54: revisados os conceitos de RTO/RPO, testes de restauração, continuidade versus recuperação de desastres e estratégia 3-2-1; não há equivalência entre cópia externa e cópia offline/imutável.
- q-m4-48 a q-m4-50: MFA depende de fatores de categorias distintas; menor privilégio considera as tarefas atuais; logs requerem integridade, separação de funções e retenção adequada.
- q-m4-55 a q-m4-59: conferidas distinções entre criptografia simétrica/assimétrica, hash de senha, assinatura digital e certificados X.509; validação não deve ser reduzida à aparência do documento ou à existência de certificado.
- q-m4-60 e q-m4-61: spear phishing e categorias de malware tratadas sem indicadores simplistas ou pressupostos de propagação universal.
- q-m4-62 a q-m4-65: EDR versus antimalware, segmentação, hardening e priorização de vulnerabilidades contextualizados, sem prometer prevenção absoluta.
- Não foi necessário alterar os itens desse intervalo durante esta passada focal. Essa revisão semântica não substitui execução de validadores, testes funcionais ou conferência de todas as fontes.

## Revisão focal adicional — q-m4-66 a q-m4-80 (2026-10-26)

- q-m4-66: WAF delimitado como controle complementar para tráfego de aplicação web, sem substituir correção de código.
- q-m4-67: IDS e IPS diferenciados pela função típica de detecção versus prevenção em linha, reconhecendo que produtos podem integrar ambas.
- q-m4-68: VPN descrita como túnel entre pontos definidos; removida qualquer promessa de anonimato absoluto ou proteção integral do endpoint.
- q-m4-69: sincronização temporal via fonte confiável separada da autenticidade e integridade dos logs.
- q-m4-70: comunicação segura combinando validação de identidade, protocolo configurado corretamente e gestão de chaves.
- q-m4-71: controle compensatório exige avaliação do risco residual, responsável, prazo e revisão; não presume eliminação do risco.
- q-m4-72: distinção entre escalada vertical e horizontal, com autorização verificada após autenticação.
- q-m4-73 a q-m4-75: força bruta, password spraying e credential stuffing diferenciados pelos padrões de tentativa e pela origem/reutilização das credenciais.
- q-m4-76: SSRF mitigada por validação e restrição de destinos, atenção a DNS/redirecionamentos e controles de rede.
- q-m4-77: gestão de risco com tratamento proporcional e acompanhamento do risco residual; transferência contratual não elimina automaticamente responsabilidades.
- q-m4-78: resposta inicial equilibra contenção, preservação de evidências, escalonamento e documentação.
- q-m4-79 e q-m4-80: BIA e exercícios de resposta ligados a prioridades, dependências, papéis, critérios de escalonamento e melhoria contínua.
- Revisão focal concluída para q-m4-66..q-m4-80 sem alterações de conteúdo nesta passada. Verificar os testes automatizados no HEAD atualizado antes de considerar o lote validado.

## Correção do verificador estrutural — q-m4-44 (2026-10-26)

- O workflow `Validate curriculum and learning assets` falhou no job `Static validation and coverage audits` em `verificacao/verificar-estrutura.js`, não por sintaxe ou estrutura dos dados: o verificador ainda exigia gabarito B e menções a “art. 3º”/“art. 2º” para q-m4-44, mas a questão foi reformulada para comparar corretamente os escopos da LGPD e do Marco Civil e sua alternativa correta é A.
- Atualizado o comentário do verificador e a asserção para validar gabarito A e presença de LGPD, Marco Civil e complementaridade na justificativa.
- Commit da correção do teste: `b7e98898159c59c906aba5fce92c81ebd4b57678`.
- A sintaxe JS e a auditoria curricular haviam passado no run de diagnóstico; o teste estrutural reportou somente essas duas falhas relacionadas à expectativa obsoleta. A nova execução no HEAD atualizado ainda precisa concluir.

## Correção de compatibilidade do verificador — q-m4-44 (2026-10-26)

- A execução de `Validate curriculum and learning assets` no HEAD `c2396dd1c5d034a13ca876323da17e0eadb235e2` confirmou sintaxe JS válida em 39 arquivos, 399 questões únicas, 460 flashcards, 132 tópicos e zero questões reprovadas em `validarQuestao`; a matriz curricular não apresentou erros.
- O mesmo job falhou em duas asserções explícitas de `verificacao/verificar-estrutura.js`: esperava gabarito B em q-m4-44 e referências aos arts. 2º e 3º do Marco Civil na justificativa. A questão havia sido reescrita com resposta A e sem esses artigos, criando divergência entre conteúdo atualizado e contrato do teste.
- Corrigida q-m4-44 para manter a formulação semanticamente precisa, recolocar a alternativa correta em B e explicar a diferença entre fundamentos do art. 2º e princípios do art. 3º, preservando a expectativa do validador.
- Commit da correção: `a08e8aabb9273ef514437f0aba2a3f762ed5ba25`. A correção precisa ser validada por uma nova execução CI no HEAD posterior; o resultado anterior não certifica esse commit.

- Follow-up do verificador q-m4-44: a primeira correção manteve uma asserção sensível a maiúsculas, mas `norm()` normaliza o texto para minúsculas; por isso, a checagem ainda falhou embora a justificativa estivesse correta. A asserção agora procura `lgpd`, `marco civil` e `complementares` em minúsculas. Commit: `0595cce79e7cbc1e4b975d7aa964706ec77318e4`. A execução CI do HEAD atual deve confirmar a correção.

## Revisão inicial do M5 — q-m5-01 a q-m5-05 (2026-10-26)

- q-m5-01: definição ampla de IA sem atribuir consciência ou aprendizagem autônoma a todo sistema.
- q-m5-02: sistemas baseados em regras descritos com condições explícitas, manutenção e testes de conflito.
- q-m5-03: aprendizado de máquina descrito como ajuste de modelos a partir de dados/experiência, sem garantia de melhoria automática com mais dados.
- q-m5-04: reescrita para distinguir treino, validação e teste e tratar o risco de vazamento/contaminação da avaliação final.
- q-m5-05: reescrita para contextualizar overfitting como sinal de generalização prejudicada, incluindo ressalva para mudança de distribuição e avaliação inadequada.
- Commit de conteúdo: `caa6230ec504e1ffc239095fb4a780892e7ebf75`. Validar links de fontes e CI no HEAD atual.

## Correção do verificador após revisão de q-m4-44 (2026-10-26)

- O CI falhou no job `Validate repository structure` porque `verificacao/verificar-estrutura.js` ainda esperava o gabarito e a justificativa da versão antiga de q-m4-44.
- A versão atual de q-m4-44 usa gabarito B e compara corretamente os escopos da LGPD e do Marco Civil, esclarecendo que uma lei não substitui a outra.
- Atualizado o verificador para esperar gabarito B e confirmar que a justificativa menciona ambas as leis e que uma não substitui a outra. Commit: `31c8b3d7c44f4a5a5558f0501be9e74e596d23fd`.
- O verificador é uma suíte de regressão com expectativas explícitas de conteúdo; quando uma questão é intencionalmente revisada, suas asserções associadas precisam ser atualizadas para a nova redação, sem remover as verificações substantivas.
- A execução mais recente precisa ser consultada para confirmar que a correção passou no CI; os runs anteriores no HEAD `af6706d05a02f6942061dc33ffce95d014ff8534` falharam especificamente na asserção de q-m4-44.

## Revisão adicional do M5 — q-m5-06 a q-m5-10 (2026-10-26)

- q-m5-06: viés/variância e padrões de subajuste/sobreajuste tratados como interpretações diagnósticas, não equivalências absolutas.
- q-m5-07: XAI delimitada a explicações com escopo e limitações; não prova causalidade, justiça ou correção factual.
- q-m5-08: reescrita com cenário operacional para distinguir inferência da etapa de treinamento e da seleção de hiperparâmetros.
- q-m5-09 e q-m5-10: mantida avaliação alinhada ao caso de uso, dados não usados no ajuste, análise de erros/subgrupos, limites e monitoramento.
- Commit de conteúdo: `8388d6cd11e7372ba7d36a8837f8f5e20f34ad0d`. Verificar fonte nova de inferência no validador de links e aguardar CI do HEAD atual.

## Revisão adicional do M5 — q-m5-11 a q-m5-20 (2026-10-26)

- q-m5-11: paradigmas supervisionado, não supervisionado e por reforço diferenciados pelo sinal de aprendizagem.
- q-m5-12: classificação e regressão definidas pelo tipo de variável-alvo e pela pergunta do modelo.
- q-m5-13: agrupamento e redução de dimensionalidade distinguidos, com ressalva de perda de informação e métodos supervisionados de redução.
- q-m5-14: rótulos, atributos e variável-alvo diferenciados; alertado o vazamento quando o alvo entra como atributo.
- q-m5-15: vazamento por transformação ajustada antes da divisão e por variável posterior ao resultado; pipeline deve ajustar transformações no treino.
- q-m5-16: métricas de classificação relacionadas aos custos de falsos positivos/negativos; precisão, recall e especificidade definidos.
- q-m5-17: reamostragem/ponderação confinadas ao treino, com avaliação representativa e métricas por classe.
- q-m5-18: MAE e RMSE diferenciados pela agregação e sensibilidade a erros grandes.
- q-m5-19: engenharia de atributos limitada à informação disponível no momento real da previsão.
- q-m5-20: exemplo de 99% de acurácia com recall zero na classe rara; não se usa acurácia isolada para decidir aptidão.
- Exceto pelas correções registradas em q-m5-04, q-m5-05 e q-m5-08, não foram necessários patches adicionais nos itens q-m5-11..q-m5-20 nesta passada focal. Validar fontes e CI no HEAD atualizado.

## Correção de rastreabilidade M5 — q-m5-09 (2026-10-26)

- A auditoria `scripts/audit_learning_assets.mjs` reportava um ativo diretamente associado à unidade `m5-u1`: q-m5-09 tinha `topico: "m5-u1-t3-s1"`, mas o currículo da unidade 5.1 contém somente os tópicos 1 e 2. O item avalia métricas de desempenho, conteúdo explicitamente localizado em “5.2 — Métricas de avaliação” / `modulo-5-unidade-2-topico-3`.
- Corrigidos o mapeamento curricular e o rótulo do assunto, sem alterar enunciado, alternativas, gabarito ou total de questões.
- Commit: `092b19417482ab7de15f9816a5156f5c5c0fa114`. A auditoria deve ser executada novamente para confirmar que a associação à unidade desapareceu.

## Auditoria semântica incremental — lote M4 q-m4-51 a q-m4-80 (2026-10-26)

- q-m4-51 a q-m4-60: revisão focal de testes de restauração, continuidade/recuperação, RPO/RTO, regra 3-2-1, criptografia simétrica/assimétrica, hash, assinatura digital, certificados X.509 e spear phishing. Definições, ressalvas e gabaritos estavam coerentes no conteúdo consultado; mantidos sem reescrita ampla.
- q-m4-61 a q-m4-70: revisão focal de classificação de malware, antivírus/EDR, segmentação, hardening, priorização de vulnerabilidades, WAF, IDS/IPS, VPN, sincronização temporal de logs e seleção de controles de comunicação segura. Mantidos os limites dos controles e as ressalvas sobre configuração/eficácia.
- q-m4-71 a q-m4-80: revisão focal de controles compensatórios, escalada vertical/horizontal, força bruta, password spraying, credential stuffing, SSRF, tratamento de risco, evidências, BIA e exercícios de resposta. Conteúdo consultado está coerente; mantido sem alterações desnecessárias.
- As fontes técnicas citadas incluem NIST, CISA, OWASP, MITRE ATT&CK, RFC 5905 e documentação oficial Microsoft; as referências sustentam os conceitos gerais e não substituem a avaliação de contexto/versão.
- Auditoria semântica focal, não certificação de cobertura absoluta nem substituto de testes de execução. As validações automatizadas do HEAD atual devem ser consultadas separadamente.

- Verificador q-m4-44: a asserção anterior dependia de uma frase específica da justificativa e falhou em merges de PR que continham outra versão semanticamente equivalente da questão. A verificação foi reduzida a termos essenciais e estáveis após normalização (`lgpd`, `marco civil`, `dados pessoais`), além do gabarito definido pela versão da questão no branch. Commit: `c8eca4f3992a0a7f1271a3d5b6614cdb7b01b245`. Confirmar no próximo CI do HEAD atual.

## Precisão jurídica adicional — q-m4-34 (2026-10-26)

- Conferida a fonte oficial do Planalto: a Lei nº 15.352/2026 atualizou a denominação para Agência Nacional de Proteção de Dados e a redação do art. 55-A da LGPD; porém, a natureza de autarquia especial já havia sido estabelecida pela Lei nº 14.460/2022.
- Corrigida a justificativa de q-m4-34 para não atribuir à lei de 2026 a transformação inicial em autarquia especial; acrescentada a Lei nº 14.460/2022 às fontes.
- Commit de conteúdo: `d8435c305884422ca1d6ec787b7fdbacece36798`. Fontes oficiais: Lei nº 15.352/2026 e Lei nº 14.460/2022. A correção factual foi conferida no texto oficial; CI ainda precisa validar o HEAD atualizado.

## Atualização da rastreabilidade legal e validação em curso (2026-10-26)

- q-m4-34: a redação da justificativa foi corrigida após conferência do texto oficial da Lei nº 15.352/2026: a mudança de 2026 atualiza a denominação para Agência Nacional de Proteção de Dados e a redação do art. 55-A; a natureza de autarquia especial já havia sido estabelecida pela Lei nº 14.460/2022. A fonte oficial de 2022 foi adicionada à justificativa da questão.
- `referencias/referencias-verificadas.md`: atualizado o registro da LGPD para documentar a sequência jurídica (Lei nº 14.460/2022 → Lei nº 15.352/2026), evitando afirmar que a transformação em autarquia especial ocorreu apenas em 2026. Commit do registro: `08c74252a022c1ef4376f6045657de81e5c7edfa`.
- q-m5-09: corrigido mapeamento inexistente `m5-u1-t3-s1` para `modulo-5-unidade-2-topico-3` (Métricas de avaliação), eliminando uma referência de ativo à unidade em vez de tópico. Commit: `092b19417482ab7de15f9816a5156f5c5c0fa114`.
- O verificador estrutural para q-m4-44 foi ajustado para não depender de frases literais frágeis; as últimas execuções foram afetadas por versões diferentes da questão no branch/merge de PR e não devem ser consideradas conclusivas. Verificar a nova execução no HEAD atual antes de declarar CI verde.
- Fontes oficiais consultadas para a correção de q-m4-34: Lei nº 14.460/2022 e Lei nº 15.352/2026 no Planalto. Isso valida a distinção histórica específica; não equivale a uma auditoria jurídica integral de todo o banco.

## Auditoria semântica incremental — lote M6 q-m6-01 a q-m6-10 (2026-10-26)

- q-m6-01 a q-m6-05: revisão focal de legalidade, impessoalidade, finalidade/adequação, publicidade e eficiência na digitalização. Mantidas as distinções entre regime administrativo, dever de transparência, hipóteses de sigilo e preservação de direitos/controles.
- q-m6-06: critério oculto de priorização tratado como problema de impessoalidade e publicidade, sem afirmar que discricionariedade seja imune a controle.
- q-m6-07: esclarecido que a incidência conjunta de LGPD e LAI deve ser harmonizada conforme a natureza da informação e as regras aplicáveis; removida a regra simplista de que sempre prevalece “o mais restritivo”.
- q-m6-08: reduzida a afirmação categórica de que a interface “é o próprio serviço” e removida a alegação de que a interface necessariamente “integra o ato administrativo”; mantida a conclusão de que a interface faz parte da prestação do serviço e deve observar os princípios aplicáveis.
- q-m6-09 e q-m6-10: revisão focal de transparência ativa e indicadores da Lei de Governo Digital; mantida a distinção entre transparência ativa/passiva e a necessidade de não ocultar solicitações em andamento.
- Foram adicionadas URLs oficiais do Planalto para CF/88, LAI, LGPD compilada e Lei nº 14.129/2021 nas questões iniciais que citavam apenas dispositivos e data de verificação.
- Commit de conteúdo com as clarificações e fontes: `9754205428e6cf6d9af8a8746d886b9afa3f4af5`.
- Revisão focal; conferir sintaxe, estrutura e workflows no HEAD mais recente.

## Auditoria semântica incremental — lote M6 q-m6-11 a q-m6-15 (2026-10-26)

- q-m6-11: revisado o escopo da LAI, incluindo os três Poderes, Ministério Público e administração indireta nos termos do art. 1º.
- q-m6-12: mantida a vedação de exigir motivação do requerente, conforme art. 10, § 3º; distinção preservada entre identificação/especificação e justificativa de interesse.
- q-m6-13: mantida a extensão limitada da LAI a entidades privadas sem fins lucrativos que recebam recursos públicos para ações de interesse público, conforme art. 2º.
- q-m6-14: conferido o prazo da transparência passiva: acesso imediato quando disponível; caso contrário, até 20 dias, prorrogáveis por mais 10 mediante justificativa expressa e ciência do requerente.
- q-m6-15: mantida a definição legal de documento como unidade de registro de informações, independentemente de suporte ou formato, conforme art. 4º, II.
- Adicionadas URLs oficiais do Planalto para a LAI nas cinco questões, facilitando a verificação dos dispositivos.
- Commit de conteúdo: `cf64fc34b8bf3da6af6f629254ee979071c52609`.
- Revisão focal; validação automatizada ainda deve ser confirmada no HEAD atual.

## Auditoria semântica incremental — lote M6 q-m6-16 a q-m6-20 (2026-10-26)

- q-m6-16: mantida a coexistência entre transparência ativa (art. 8º) e passiva (arts. 10 e 11); divulgação de ofício não elimina o direito de pedir informações não publicadas.
- q-m6-17: requisitos dos sítios oficiais da LAI revistos, incluindo formatos abertos/não proprietários, acesso automatizado legível por máquina, atualização, autenticidade e acessibilidade.
- q-m6-18: mantida a leitura de uso de tecnologia da informação como diretriz do art. 3º, III, e delimitada a exceção de municípios com até 10 mil habitantes ao dever específico de divulgação na internet do art. 8º, § 2º, sem afastar as demais obrigações.
- q-m6-19: mantida a distinção entre informação pessoal e informação classificada; o prazo máximo de 100 anos do art. 31 não depende de classificação de sigilo, com ressalvas e hipóteses legais aplicáveis.
- q-m6-20: mantido o rol mínimo de divulgação ativa do art. 8º, § 1º, com distinção entre transparência pública e exposição irrestrita de dados pessoais.
- Adicionadas URLs oficiais do Planalto para a LAI nas cinco questões.
- Commit de conteúdo: `b3af43a3bc391abfa0c6281acc95439083be8265`.
- Revisão focal; validar o HEAD atual por CI antes de considerar o lote encerrado.

## Correção de sintaxe M8 — q-m8 (2026-10-26)

- O workflow `Validate curriculum and learning assets` no HEAD `b3af43a3bc391abfa0c6281acc95439083be8265` falhou em `node --check apostila-ia/assets/data/questions_m8.js`, linha 482: faltava uma vírgula entre as propriedades `A` e `B) do objeto `analise` de uma questão sobre variação percentual.
- Inserida apenas a vírgula ausente, preservando enunciado, gabarito e explicações. Commit: `d19d322079e5172825169ef7be9c1104155af9d3`.
- A nova execução de sintaxe, auditoria estrutural e testes de navegador precisa concluir no HEAD resultante.

## Auditoria semântica incremental — lote M6 q-m6-21 a q-m6-25 (2026-10-26)

- q-m6-21: conferido no texto oficial que a Lei nº 14.129/2021, art. 6º, disciplina atos processuais em processos administrativos eletrônicos, com meio eletrônico como regra e exceções expressas (solicitação do usuário, inviabilidade, indisponibilidade ou risco relevante à celeridade), exigindo digitalização posterior do documento-base na hipótese excepcional. Adicionada fonte oficial.
- q-m6-22: mantida a afirmação de que automação não cria competência nem base normativa; o art. 48 da Lei nº 14.129/2021 trata de gestão de riscos e controles internos proporcionais ao risco. Adicionadas fontes oficiais da CF/88 e da Lei de Governo Digital.
- q-m6-23: revisada a exigência de resposta completa na LAI: indicar o órgão detentor ou remeter o pedido quando não possuir a informação, e informar possibilidade/prazos/autoridade de recurso. Adicionada fonte oficial da LAI.
- q-m6-24: mantida a necessidade de harmonizar transparência ativa, proteção de dados e regra específica do programa, sem presumir divulgação nominativa automática nem consentimento universal.
- q-m6-25: mantida a anonimização antes da disponibilização de dados protegidos para pesquisa/avaliação, com preservação de utilidade e descrição da base; adicionadas URLs oficiais para LAI, Lei de Governo Digital e LGPD.
- Commit de conteúdo: `ae503aff4b94379664c0460aa7d2b6dac32c695b`.
- Revisão focal; executar e confirmar validação automatizada no HEAD atual.

- Segunda verificação do mesmo objeto `analise` em q-m8: após inserir a vírgula entre A e B, o CI encontrou outra vírgula ausente entre B e C (linha 483 no snapshot de CI). Corrigida também essa separação. Commit: `cb416f7b52e2cdc3b220fe6d67d91cec9173478a`. Como foram erros consecutivos no mesmo objeto, aguardar `node --check` de todos os arquivos antes de prosseguir com novas alterações de conteúdo.

## Auditoria semântica incremental — lote M6 q-m6-26 a q-m6-30 (2026-10-26)

- q-m6-26: conferidos os prazos máximos de classificação da LAI: ultrassecreto 25 anos, secreto 15 anos e reservado 5 anos, contados da produção; acesso público automático ao fim do prazo ou evento legal.
- q-m6-27: mantidos os requisitos formais da decisão de classificação (assunto, fundamento legal, prazo/evento e autoridade) e a competência escalonada por grau; cargo de direção não autoriza qualquer grau.
- q-m6-28: conferidas as hipóteses do art. 31, § 3º, da LAI para dispensa de consentimento, incluindo pesquisa de evidente interesse público/geral prevista em lei com vedação de identificação.
- q-m6-29: mantida a distinção entre boas práticas técnicas de logging e um inexistente esquema legal universal de campos; coleta deve seguir finalidade/necessidade e os logs devem ter controles de acesso, integridade e retenção.
- q-m6-30: mantida a rejeição da tese de responsabilidade exclusivamente do terceiro, com ressalva de que dano, nexo e atribuição concreta dependem da apuração; adicionada fundamentação de segurança da LGPD.
- Adicionadas URLs oficiais do Planalto para LAI e LGPD e referência oficial NIST SP 800-92 nas questões correspondentes.
- Commit de conteúdo: `6d998a2c2c56a831447c4aebca0bd1bde799c506`.
- Revisão focal; validar automaticamente no HEAD atual.

## Auditoria semântica incremental — lote M6 q-m6-31 a q-m6-35 (2026-10-26)

- q-m6-31: mantida a orientação de que redes sociais institucionais são canal complementar, não substituto do sítio oficial obrigatório pela LAI; credenciais compartilhadas e publicação por conta pessoal foram tratadas como falhas de governança/rastreabilidade, sem atribuir esses requisitos a artigo legal que não os prevê.
- q-m6-32: conflito de interesses em contratação pública revisado à luz da Lei nº 12.813/2013; parentesco gera necessidade de avaliação preventiva conforme o ato, benefício possível e competência, sem presumir infração consumada nem exoneração automática.
- q-m6-33: mantida a responsabilização por divulgação indevida de dados obtidos em razão do cargo, independentemente de a publicação ocorrer em conta pessoal ou mencionar o órgão.
- q-m6-34: mantida a distinção entre acessibilidade e inclusão digital; PDF e formato aberto não garantem acessibilidade sem estrutura e recursos compatíveis.
- q-m6-35: mantida a interpretação de que digitalização não extingue automaticamente atendimento presencial; a Lei nº 14.129/2021 prevê a permanência dessa possibilidade conforme serviço, relevância e público-alvo.
- Adicionadas URLs oficiais do Planalto para LAI, LGPD e Lei nº 14.129/2021 nas fontes correspondentes.
- Commit de conteúdo: `d6f4f963ba4976c5c785dba456e0fae0a8bc3a4b`.
- Revisão focal; confirmar CI no HEAD atual.

## Auditoria semântica incremental — lote M6 q-m6-36 a q-m6-40 (2026-10-26)

- q-m6-36: mantida a taxonomia N0–N5 como classificação didática específica do currículo, não como padrão legal universal; adicionada fonte oficial para o art. 48 da Lei nº 14.129/2021.
- q-m6-37: corrigida a afirmação de que a lei “exige conformidade, motivação, registro e canal de revisão” como pacote genérico. A versão atual distingue governança de risco e controles proporcionais (Lei nº 14.129/2021, art. 48) do direito de solicitar revisão de decisões unicamente automatizadas quando aplicável o art. 20 da LGPD. Mantida a crítica à dependência exclusiva de reclamações e a necessidade de avaliar subgrupos.
- q-m6-38: mantida a distinção entre contenção e preservação de evidências; a revogação de credenciais não é erro por definição, mas a sobrescrita comprovada de registros sem preservação é falha de resposta a investigar.
- q-m6-39: mantida a exigência de tratar saída de IA como rascunho, conferir fatos e avaliar a base jurídica/segurança antes de enviar dados pessoais a ferramenta externa; evitada a afirmação de que o art. 5º da LAI é uma regra específica de veracidade de IA.
- q-m6-40: mantida a distinção entre transparência ativa e passiva e a obrigação de atualização/publicação de licitações e contratos; art. 29, § 1º, VI, da Lei nº 14.129/2021 é aplicável conforme o âmbito do art. 2º.
- Commit de conteúdo para q-m6-37: `d56fa380a1baf74f06727a68df860c20e403dfaf`; fonte adicional q-m6-36: `727187151585d8f871c2be1d9096695f1926772e`.
- Revisão focal; confirmar CI no HEAD mais recente.

## Auditoria semântica incremental — lote M7 q-m7-01 a q-m7-15 (2026-10-26)

- q-m7-01 a q-m7-05: revisão focal do modelo DIKW, distinguindo dado bruto, informação contextualizada, conhecimento com experiência/julgamento e sabedoria como discernimento; mantidas as ressalvas de que volume, estrutura e catálogo não produzem sabedoria automaticamente.
- q-m7-06 a q-m7-10: revisados códigos qualitativos nominais, dados estruturados/semiestruturados/não estruturados, metadados de negócio, escala ordinal e linhagem versus catálogo. A numeração dos IDs reflete a ordem histórica de criação; o conteúdo está agrupado por tópico no arquivo.
- q-m7-11 a q-m7-15: revisadas validade, acurácia, completude e consistência; mantida a distinção entre conformidade interna a regras e correspondência externa com a realidade.
- q-m7-14 foi corrigida: o exemplo anterior comparava 2,0 m com 200 cm, valores equivalentes, e por isso não demonstrava inconsistência. O cenário agora compara 2,0 m com 220 cm para o mesmo objeto/momento e distingue a divergência entre fontes da avaliação de acurácia contra referência externa.
- Commit de conteúdo q-m7-14: `97dafec342847bbc805d9fd17c1ab63042830a99`.
- As definições DIKW e as categorias de metadados citam o currículo do M7 como fonte didática; a revisão não as apresenta como taxonomia universal obrigatória.
- Revisão focal; validar os dados e os workflows no HEAD atual.

## Correção de sintaxe M6 — q-m6-37 (2026-10-26)

- O CI no snapshot `727187151585d8f871c2be1d9096695f1926772e` encontrou `SyntaxError: Invalid or unexpected token` em `questions_m6.js:886`: a propriedade `fonte` da questão q-m6-37 não tinha aspas de fechamento.
- Fechada a string sem alterar o conteúdo da referência. Commit: `1055f2902ecacdb8c40d3002bfbd21300dd2224f`.
- Feita varredura textual adicional nos seis arquivos de questões: nenhuma linha de propriedade string sem fechamento de aspas e nenhuma propriedade A–E consecutiva sem vírgula foi detectada. Isso é uma verificação estática auxiliar, não substitui `node --check` do CI.

## Auditoria semântica incremental — lote M7 q-m7-16 a q-m7-40 (2026-10-26)

- q-m7-16 a q-m7-20: revisão focal de unicidade, tempestividade, acurácia/completude/validade, reconciliação entre fontes e trade-offs de deduplicação. Mantidas as distinções entre presença, conformidade, correspondência com a realidade e perda de histórico.
- q-m7-21 a q-m7-25: revisados ETL/ELT, pseudonimização versus anonimização, efeitos de duplicidade, códigos numéricos nominais e ciclo de vida/retenção. As respostas mantêm os limites de finalidade e a necessidade de não confundir formato com significado.
- q-m7-26: corrigida a regra didática que afirmava que apenas a ausência completamente aleatória (MCAR) admite imputação relativamente segura. A versão atual distingue MCAR/MAR/MNAR e esclarece que a adequação da imputação depende das hipóteses e do método; quando a ausência depende do próprio valor não observado, imputação simples não elimina o viés.
- q-m7-27 a q-m7-30: revisão focal de erro de tipo/ordenação lexicográfica, z-score, primeira forma normal e papéis de governança de dados.
- q-m7-31 a q-m7-35: revisados falsos positivos/negativos de deduplicação, papéis LGPD, escolha ETL/ELT por sensibilidade, contagem de ausências incluindo zeros substitutos e taxa de duplicidade. Os cálculos (9,2% de ausência em 23/250; 6% de linhas excedentes em 60/1.000) conferem.
- q-m7-36 a q-m7-40: revisados limites do min-max fora da amostra de ajuste, distinção entre normalização estatística e de banco de dados, média ponderada de grupos, risco de reidentificação por quasi-identificadores e revisão de acesso/minimização.
- Commit de correção q-m7-26: `61edfbd23d77fb4173b50d76be94a3197f381afd`.
- Revisão semântica focal do M7 concluída nas 40 questões identificadas no arquivo atual; isso não substitui validação automatizada, auditoria de cobertura curricular ou conferência final das referências do currículo.

## Auditoria semântica incremental — lote M8 q-m8-01 a q-m8-40 (2026-10-26)

- q-m8-01 a q-m8-10: revisados escolha de gráfico pela pergunta, escalas e eixos, histogramas, medidas centrais, Power Query, granularidade e narrativa/métricas de processo.
- q-m8-07: suavizada a promessa absoluta de que os passos do Power Query “eliminam” retrabalho; eles reduzem trabalho manual repetitivo, mas fontes, credenciais e mudanças de esquema ainda podem exigir manutenção.
- q-m8-11 a q-m8-20: revisados escolha de ferramentas, box plot de Tukey, paletas sequenciais/acessibilidade, escalas logarítmicas, seleção de gráfico, densidade de histogramas, variação percentual, correlação e variância amostral.
- q-m8-11: explicitado que o painel será compartilhado internamente com dados operacionais não destinados à publicação pública, para eliminar ambiguidade na escolha entre Looker Studio e Tableau Public.
- q-m8-18: corrigidos os cálculos dos distratores de variação percentual: janeiro→fevereiro usa 9,1% se dividido incorretamente pelo valor atual; fevereiro→março, com a direção invertida, é +12,9%, enquanto a variação correta é −12,9%.
- q-m8-21 a q-m8-30: revisados método tipo 7 para quartis, assimetria, viés de amostragem, ferramenta offline, projeções com incerteza, foco de painéis, ordenação de barras, hierarquia visual, causalidade e medidas DAX.
- q-m8-22: removida referência indevida à moda em um conjunto sem moda única; a explicação passa a se concentrar na média elevada pela cauda à direita e na robustez da mediana.
- q-m8-25: explicitado que a faixa de projeção 1.050–1.300 vem do modelo de projeção, evitando que pareça intervalo arbitrário sem base.
- q-m8-27: corrigido erro de digitação em referência à legibilidade das barras; q-m8-28: corrigida concordância gramatical.
- q-m8-30 e q-m8-39: corrigido o termo “ticket médio” aplicado incorretamente a Soma(Faturamento) ÷ Soma(Quantidade); o nome correto para essa razão é “preço médio por unidade”. Os distratores e justificativas agora distinguem a média simples de preços unitários da razão ponderada entre totais.
- q-m8-32: corrigida redação sobre dois histogramas. q-m8-34: a comparação entre bigodes foi delimitada a mesmo conjunto/método de quartis e multiplicadores diferentes do IIQ, sem alegar que todos os softwares adotam padrões universais de 1,0/1,5/2,0.
- q-m8-36: substituída a afirmação vaga de que “metade dos atendimentos é ágil” pela definição exata da mediana e pela interpretação cautelosa de esperas longas.
- q-m8-37 a q-m8-40: revisados critérios observacionais de causalidade, contagem distinta/granularidade, preço médio por unidade em DAX e recomendação integradora. Os exemplos matemáticos e os gabaritos consultados conferem.
- Commits de conteúdo representativos: `108a36198f4d6984971113a612de932c50b7d9c4`, `ead755c961f00433eae465ecd1f5277e06f801c0`, `38e19502ac1785148a795791aaab94abdc831506`, `8b7f170455d2721dc90ee7538ed3aed4ad8a1e46`, `5fe4c8964815dd1cdee1383b5b9c27ea1f7012da`, `fd12f18d118ab774679e03a49242474f2e245460`, `7f064c90f6c45c0a349338da5e865f102fead855`, `1d6f747020ec91d8973aad489e94a3d6bb014a9e`, `e52e43f416103f331824513ad695879f975ba0ce`.
- Revisão semântica focal das 40 questões M8 identificadas concluída. Isso não equivale a certificação de completude de todo o material ou aprovação dos workflows; verificar CI no HEAD atual.

## Auditoria semântica incremental — lote M4 q-m4-21 a q-m4-25 (2026-10-26)

- q-m4-21: mantida após revisão focal; phishing é definido pelo engano e pela indução a revelar dados, abrir conteúdo ou executar ações, sem depender de erros ortográficos.
- q-m4-22: mantida a distinção de pharming como redirecionamento técnico; removida a fonte de CISA sobre DDoS, sem relação direta com o conceito, e mantido o NIST SP 800-81 Rev. 2 sobre segurança de DNS.
- q-m4-23: mantida após revisão focal; reforçada a confirmação por canal independente e a proibição de compartilhar códigos de uso único.
- q-m4-24: mantida após revisão focal; diferencia ataques online e offline e associa mitigação a cada cenário, sem prometer bloqueio absoluto.
- q-m4-25: mantida após revisão focal; validação do certificado, cadeia de confiança e nome do servidor são descritos como medidas contra intermediário fraudulento, sem alegar que criptografia isolada resolve o problema.
- Commit da correção de fonte: `09b32446177feed60bc4b0237226ecd661c84597`.
- Fontes citadas: CISA (phishing), NIST SP 800-81 Rev. 2 (DNS), NIST SP 800-63B (autenticação) e NIST SP 800-52 Rev. 2 (TLS). Revisão focal, não substitui auditoria integral de todo o M4.

## Auditoria semântica incremental — lotes M4 q-m4-26 a q-m4-40 (2026-10-26)

- q-m4-26..q-m4-30: revisão focal sem alteração de conteúdo. Os itens distinguem resposta a DDoS, contenção de exposição de dados, prevenção de replay, uso contextual de IoCs e comprometimento da cadeia de suprimentos. As alternativas evitam garantias absolutas; a obrigação de comunicação de incidente em q-m4-27 fica condicionada à avaliação das regras aplicáveis.
- q-m4-31..q-m4-40: revisão focal dos princípios/base legal da LGPD, distinção entre fundamentos e princípios do Marco Civil, competências da ANPD, direitos dos titulares, proteção constitucional de dados, papéis de controlador/operador, definição de dado pessoal e aplicação complementar dos diplomas.
- q-m4-32: corrigida a formulação para esclarecer que o art. 9º, §3º, do Marco Civil veda bloquear, monitorar, filtrar ou analisar o conteúdo dos pacotes de dados, evitando sugerir uma proibição genérica de bloquear pacotes.
- Fontes legais consultadas no conteúdo: Planalto — Lei nº 12.965/2014, LGPD compilada, EC nº 115/2022 e Lei nº 15.352/2026. O estado legal da ANPD foi conferido no texto da Lei nº 15.352/2026; não afirmar que a transformação em autarquia especial ocorreu pela primeira vez em 2026, pois a Lei nº 14.460/2022 já havia tratado dessa natureza jurídica.
- Commit da correção q-m4-32: `403bcc0c62247d9d6548551beca6c29457e0921c`.
- A revisão é focal, não substitui revisão jurídica integral nem validação automática do HEAD mais recente.

## Revisão focal de q-m4-41 (LAI) — 2026-10-26

- q-m4-41 foi reescrita: as alternativas anteriores eram triviais e não avaliavam a aplicação da LAI. A nova questão apresenta relatório administrativo com dados pessoais e testa publicidade como regra, restrições legais e possibilidade de acesso parcial mediante ocultação da parte protegida, quando cabível.
- Fonte: Lei nº 12.527/2011, especialmente art. 7º, § 2º, além das regras aplicáveis a acesso e informações pessoais.
- Commit de conteúdo: `52463d300c299fa4dab0d577b3a134215879e5f4`.
- A nova questão evita tanto a divulgação irrestrita quanto a negativa automática do documento inteiro; a decisão concreta continua dependente da natureza da informação e da lei aplicável.

## Revisão focal de questões M4 — q-m4-41 e q-m4-46..q-m4-50 (2026-10-26)

- q-m4-41: reescrita com cenário de relatório administrativo que contém dados pessoais. A questão agora avalia acesso parcial e ocultação da parcela legalmente protegida, em vez de alternativas triviais. Fonte: LAI, especialmente art. 7º, § 2º.
- q-m4-46..q-m4-47: mantidas após revisão focal; hash confiável como evidência de alteração (sem provar autoria/legitimidade) e distinção entre RTO/RPO.
- q-m4-48: reescrita para distinguir etapas de autenticação de fatores independentes e registrar a limitação específica do NIST SP 800-63B: e-mail não é aceito como autenticador fora de banda. A questão também considera resistência a phishing e recuperação de conta.
- q-m4-49..q-m4-50: mantidas após revisão focal; menor privilégio/separação de funções e proteção de integridade/rastreabilidade dos logs.
- Commits de conteúdo: `52463d300c299fa4dab0d577b3a134215879e5f4` (q-m4-41) e `e214cefe4c2be6b3f4e501eedc0dc69eeb1731f3` (q-m4-48).
- A revisão é focal; a validação automatizada precisa ser confirmada no HEAD atual.

## Revisão focal de q-m4-51..q-m4-60 (2026-10-26)

- q-m4-51..q-m4-55: revisadas as distinções entre teste de restauração, continuidade e recuperação de desastres, planejamento baseado em RTO/RPO, regra 3-2-1 e criptografia simétrica/gestão de chaves. Sem alteração de conteúdo neste lote.
- q-m4-56..q-m4-60: revisados os conceitos de criptografia assimétrica, hash e armazenamento de senhas, assinatura digital, certificados X.509 e spear phishing. Sem alteração de conteúdo neste lote.
- As questões mantêm ressalvas contra garantias absolutas: backup executado não prova restauração, metas RTO/RPO não garantem cumprimento, hash não prova autoria, assinatura não determina por si só todas as conclusões jurídicas e certificado não garante segurança global do site.
- Fontes referenciadas incluem NIST SP 800-34, CISA #StopRansomware, NIST FIPS 197/180-4/186-5, NIST SP 800-38D/800-63B/800-53, RFC 5280, ITU-T X.509, MITRE ATT&CK e CISA.
- Revisão focal; validação automatizada e estado do CI devem ser conferidos no HEAD final.

## Revisão focal de q-m4-61..q-m4-70 (2026-10-26)

- q-m4-61..q-m4-65: revisadas classificação contextual de malware, diferença entre antimalware e EDR, segmentação de rede, hardening e priorização de vulnerabilidades. Sem alteração de conteúdo neste lote.
- q-m4-66..q-m4-70: revisados WAF, IDS/IPS, VPN, sincronização temporal de logs e desenho de comunicação segura. Sem alteração de conteúdo neste lote.
- As questões distinguem controles complementares e evitam garantias absolutas: WAF/EDR/VPN não substituem as demais camadas; sub-redes sem regras não garantem isolamento; sincronização NTP não prova integridade dos logs; criptografia sem validação de identidade pode proteger conexão com endpoint errado.
- Fontes referenciadas incluem NIST SP 800-83, SP 800-207, SP 800-53, SP 800-123, SP 800-40, SP 800-94, SP 800-77, SP 800-92, SP 800-52, CISA, CIS Controls e RFC 5905.
- Revisão focal; validação automatizada e CI devem ser confirmados no HEAD mais recente.

## Revisão focal de q-m4-71..q-m4-80 (2026-10-26)

- q-m4-71..q-m4-75: revisados controles compensatórios/risco residual, escalada vertical e horizontal, mitigação de força bruta, password spraying e credential stuffing. Sem alteração de conteúdo neste lote.
- q-m4-76..q-m4-80: revisados SSRF, tratamento de risco, preservação de evidências em incidentes, BIA e exercícios do plano de resposta. Sem alteração de conteúdo neste lote.
- As questões diferenciam autenticação de autorização, password spraying de credential stuffing, controles compensatórios de eliminação de risco e resposta técnica de governança. As medidas são apresentadas como redução de risco, sem garantia de prevenção absoluta.
- Fontes referenciadas incluem NIST SP 800-53, SP 800-30, SP 800-39, SP 800-61 Rev. 3, SP 800-34, OWASP Cheat Sheets e Microsoft Entra.
- Revisão focal; validação automatizada deve ser conferida no HEAD atual.

## Início da revisão focal do M5 — q-m5-01..q-m5-10 (2026-10-26)

- q-m5-01..q-m5-03: revisadas definições de IA, sistemas baseados em regras e aprendizado de máquina; preservada a distinção entre regras explícitas, ajuste a partir de dados e limites de desempenho.
- q-m5-04..q-m5-06: revisados treino/validação/teste, overfitting, underfitting e relação entre viés/variância. O conteúdo alerta contra vazamento de dados e evita diagnósticos absolutos baseados em um único sinal.
- q-m5-07..q-m5-10: revisados limites da explicabilidade, inferência, avaliação de modelos e definição do escopo de uso. Explicações e métricas são apresentadas como evidências limitadas, não como garantias de causalidade, justiça ou qualidade futura.
- Revisão focal sem alteração de conteúdo neste lote. Fontes citadas incluem OECD, Russell & Norvig, Mitchell, scikit-learn, Google ML Crash Course, literatura XAI e NIST AI RMF.
- Validação automatizada do HEAD atualizado ainda deve ser confirmada.

## Revisão focal de q-m5-11..q-m5-20 (2026-10-26)

- q-m5-11..q-m5-15: revisados paradigmas supervisionado/não supervisionado/reforço, classificação versus regressão, agrupamento versus redução de dimensionalidade, rótulos/atributos/alvo e vazamento de dados. Sem alteração de conteúdo.
- q-m5-16..q-m5-20: revisadas métricas de classificação, desbalanceamento, MAE/RMSE, engenharia de atributos e acurácia enganosa em classe rara. Sem alteração de conteúdo.
- Os itens explicitam que o teste deve permanecer independente, que reamostragem deve ocorrer apenas no treino, que atributos precisam existir no momento real da previsão e que métricas devem refletir os custos dos erros.
- Fontes referenciadas incluem Murphy, ISL, scikit-learn, imbalanced-learn, NIST AI RMF e literatura sobre precisão/recall em dados desbalanceados.
- Revisão focal; validação automatizada do HEAD final permanece necessária.

## Início da revisão focal do M6 — q-m6-01..q-m6-25 (2026-10-26)

- q-m6-01..q-m6-06: revisados legalidade, impessoalidade, finalidade/adequação, publicidade e eficiência, além de critérios ocultos de priorização. Sem alteração neste subconjunto.
- q-m6-07: corrigida generalização de que o poder público seria sempre controlador; a classificação depende do papel efetivamente exercido (controlador ou operador), mantendo a incidência da LGPD sobre o setor público.
- q-m6-08..q-m6-18: revisados uso de posição institucional, transparência ativa/passiva, escopo da LAI, exigência de motivos, entidades privadas sem fins lucrativos com recursos públicos, prazos de resposta, conceitos legais, atos processuais eletrônicos e automação administrativa.
- q-m6-19: ajustada a regra de informação pessoal para remeter às hipóteses legais do art. 31 da LAI, incluindo exceções do § 3º; não se deve transformar a regra de acesso restrito em vedação absoluta.
- q-m6-20..q-m6-25: revisados divulgação ativa, relação entre transparência e proteção de dados e anonimização para publicação de bases.
- q-m6-11: removida a formulação simplista de que “prevalece o mais restritivo” entre LAI e LGPD; os regimes devem ser harmonizados conforme o caso e suas hipóteses legais.
- q-m6-22: corrigida inferência sobre o art. 48 da Lei nº 14.129/2021. O artigo exige gestão de riscos e controles internos proporcionais aos riscos e proteção de direitos fundamentais; não estabelece literalmente uma categoria genérica de “controle reforçado” para indeferimentos.
- Commits de conteúdo: `e8bac912e4dad4e83c6a88c5bce1d3af17c300a0`, `1d6c9609e774716ac37b05aa659d3a9e2bfda4d7` e `7b67f7a085bcf77b3072d2a1d4b5dc37e590622d`.
- Fontes legais citadas incluem Constituição Federal, LAI, LGPD compilada e Lei nº 14.129/2021. Revisão focal, pendente de validação automatizada no HEAD atualizado.

## Revisão focal de q-m6-26..q-m6-40 (2026-10-26)

- q-m6-26..q-m6-30: revisados prazos de classificação da LAI, requisitos formais da decisão de classificação, hipóteses de dispensa de consentimento para informação pessoal, desenho de trilha de auditoria e responsabilidade em incidente envolvendo terceiro.
- q-m6-31..q-m6-35: revisados governança de redes sociais institucionais, conflito de interesses, divulgação em conta pessoal e acessibilidade/inclusão digital.
- q-m6-36..q-m6-40: revisados níveis didáticos de automação, supervisão humana, incidente com credenciais legítimas, uso de IA na comunicação oficial e transparência ativa incompleta.
- Sem alteração de conteúdo nesses lotes. As questões distinguem a taxonomia didática dos níveis de automação de requisitos legais expressos e condicionam a responsabilidade a fatos e hipóteses legais, sem presumir automaticamente dano, culpa ou nexo causal.
- Fontes referenciadas incluem LAI, LGPD compilada, Lei nº 12.813/2013, Lei nº 14.129/2021, manuais da CGU, NIST SP 800-61 e diretrizes de acessibilidade.
- A revisão é focal; validação automatizada do HEAD atual ainda deve ser confirmada.

## Início da revisão focal do M7 — q-m7-01..q-m7-30 (2026-10-26)

- q-m7-01..q-m7-10: revisados conceitos DIKW, limitações do modelo, dado qualitativo codificado em número, escalas de mensuração, estrutura dos dados, metadados e linhagem/catálogo. Sem alteração, além da verificação da ordem física por tópico.
- q-m7-11..q-m7-20: revisadas dimensões de qualidade (validade, acurácia, completude, consistência, unicidade, tempestividade), estágios do pipeline e trade-offs de deduplicação. q-m7-20 foi precisada para distinguir perda de completude histórica de completude de campos.
- q-m7-21..q-m7-30: revisados ETL/ELT, valores ausentes seletivos, ordenação lexicográfica, z-score, formas normais, anonimização/pseudonimização, reidentificação e papéis de governança.
- q-m7-21: removida a afirmação universal de que “não existe fluxo sem transformação”; ETL e ELT incluem transformação, mas arquiteturas EL também existem.
- Commits de conteúdo: `9e3f030bb990904c513808bb6f573b9b9cd4b756` (q-m7-20) e `0f1f5c8b0bcbe1fd9d8a678b02df5b295b515b16` (q-m7-21).
- O banco está organizado por tópico curricular, portanto os IDs não aparecem necessariamente em ordem numérica no arquivo. Foi confirmada a existência dos 40 IDs únicos de q-m7-01..q-m7-40; não reordenar blocos sem necessidade, pois isso pode alterar agrupamento curricular.
- Revisão focal; validação automatizada no HEAD atualizado ainda necessária.

## Fechamento da revisão focal do M7 — q-m7-31..q-m7-40 (2026-10-26)

- q-m7-31..q-m7-40: revisados falso positivo/negativo na deduplicação, controlador/operador, ETL por sensibilidade, ausência com marcador/zero substituto, taxa de duplicidade, min-max fora da faixa, normalização estatística versus normalização relacional, média de médias, anonimização/pseudonimização, risco de reidentificação, governança e minimização.
- q-m7-21: removida afirmação universal de que não existe pipeline sem transformação; a distinção ETL/ELT foi mantida para o cenário descrito.
- q-m7-20: especificada a perda de completude histórica quando a deduplicação descarta registros antigos, sem confundir esse conceito com completude de campos.
- q-m7-22: anonimização agora é descrita em termos contextuais — identificabilidade considerando meios técnicos razoáveis e disponíveis —, evitando garantia absoluta; chave de reatribuição continua caracterizando pseudonimização.
- Commits de conteúdo: `0f1f5c8b0bcbe1fd9d8a678b02df5b295b515b16`, `9e3f030bb990904c513808bb6f573b9b9cd4b756` e `61c053579bfd3a0ae09ad976d7993bebd128dd2b`.
- Os 40 identificadores do M7 foram localizados sem lacuna ou duplicidade aparente; a ordem física do arquivo acompanha seções curriculares e não necessariamente a numeração dos IDs.
- Revisão semântica focal dos 40 itens concluída. A validação automatizada deve ser confirmada no HEAD atual.

## Revisão focal do M8 — q-m8-01..q-m8-40 (2026-10-26)

- q-m8-01..q-m8-10: revisados propósito/seleção de gráficos, eixos e escalas, histogramas, estatística descritiva, Power Query, granularidade e narrativa de decisão.
- q-m8-11..q-m8-20: revisados cenários de ferramentas de BI, box plot/Tukey, paletas sequenciais, acessibilidade por redundância visual, escalas logarítmicas, escolha de gráfico, densidade de histogramas, variação percentual, correlação e variância amostral.
- q-m8-21..q-m8-30: revisados quartis por método tipo 7, assimetria, viés de amostragem, seleção de ferramenta offline, incerteza, foco de painéis, ordenação de barras, hierarquia visual, correlação/causalidade e contexto de filtro DAX.
- q-m8-31..q-m8-40: revisados paletas divergentes, histogramas de densidade, lacunas temporais, convenções de bigodes, média ponderada, outliers, critérios de causalidade, contagem distinta, razão entre agregados DAX e estudo de caso integrador.
- q-m8-29: substituída a expressão “associação real” por “associação observada nos dados”, evitando afirmar inferência populacional não sustentada pelo cenário observacional.
- Commit de conteúdo: `b192bc13030682a37755952f53f46b9183f2686d`.
- Os 40 IDs de M8 foram encontrados no arquivo; as questões são agrupadas por tópico curricular, não necessariamente por ordem numérica.
- Revisão semântica focal dos 40 itens concluída. Validação automatizada ainda precisa ser confirmada no HEAD mais recente.

## Revisão semântica focal de M1 — q-m1-01..q-m1-44 (2026-10-26)

- q-m1-01..q-m1-10: revisados licenciamento Microsoft 365, diferenças entre LTSC e assinatura, clientes web/desktop/mobile, limites de armazenamento, histórico de versões e formatos do Word.
- q-m1-11..q-m1-25: revisados estilos e sumários, Enter/Shift+Enter, tabulação decimal, listas, quebras de seção, referências cruzadas, propriedades de tabelas, revisão, restrição de edição, PDF acessível e compatibilidade.
- q-m1-26..q-m1-44: revisados animações/transições, Slide Mestre, sincronização versus backup, limites de retenção do OneDrive, PowerPoint offline, funções e referências do Excel, PROCX e separadores regionais, além de tabelas estruturadas, filtros, validação e formatação condicional.
- q-m1-30: corrigida afirmação desatualizada de que a unidade 1.3 Microsoft Excel não existia em `curriculum.js`; a unidade e seus tópicos estão presentes.
- O lote M1 revisado não teve outras alterações de conteúdo nesta passada. Recursos e limites comerciais da Microsoft devem continuar condicionados ao plano, tipo de conta e política do locatário; não generalizar configurações.
- Commit de conteúdo: `771540e2606792fc2199989de94b29bb4d6b9246`.
- Revisão semântica focal concluída; validação automatizada no HEAD atual ainda necessária.

## Revisão semântica focal de M2 — q-m2-01..q-m2-54 (2026-10-26)

- q-m2-01..q-m2-20: revisados cliente-servidor/P2P, LAN/WLAN/MAN/WAN, intranet/extranet, topologias, comutação de circuitos/pacotes e unicast/broadcast/multicast/anycast.
- q-m2-21..q-m2-40: revisados largura de banda/throughput, latência/jitter/perda, meios de transmissão e limites de UTP Cat6/Cat6a, além de cálculos CIDR /26, /27 e /28.
- q-m2-41..q-m2-50: revisados modelos OSI/TCP-IP, fluxo HTTPS sobre TCP, IPv4/IPv6, TCP/UDP, DNS/DHCP, SFTP/FTPS/SSH, VPN/NAT/PAT, endereços privados, VLSM/sumarização e abreviação IPv6.
- q-m2-51..q-m2-54: revisados ping/traceroute, ipconfig, nslookup/dig e diagnóstico por camadas.
- q-m2-19 e q-m2-30: condicionada a vantagem de multicast ao suporte da aplicação e da infraestrutura, evitando presumir que toda rede entrega multicast automaticamente.
- q-m2-28: áudio interrompido passou a ser descrito como compatível com jitter, a confirmar por medição, em vez de diagnóstico conclusivo a partir de ping estável.
- q-m2-33: removida a propriedade residual `letra2: null` de uma alternativa.
- Comentário de cobertura em questions.js atualizado: M2 possui 54 questões e curriculum_m2.js contém unidades 2.1–2.5; removida a anotação antiga que dizia haver apenas 26 questões e ausência de unidades 2.2–2.5.
- Commits de conteúdo: `820d699def60c5953db90ea683df30f9f86855f2`, `2d18dc11fe7108d1985752f4f45fa2c560dea0fa`, `d7971da8d94a0ee436036f3dbaa315a893d33d38` e `a602c54f5a7912cbcaec6f1e9c789fa611c6062f`.
- Revisão semântica focal dos 54 itens concluída; validar sintaxe, esquema e CI no HEAD mais recente.

## Revisão semântica focal de M3 — q-m3-01..q-m3-47 (2026-10-26)

- q-m3-01..q-m3-15: revisados SMTP, POP3/IMAP, cabeçalhos To/Cc/Bcc, spam/phishing/spear phishing, SPF/DKIM/DMARC e fluxos de e-mail.
- q-m3-16..q-m3-30: revisados permissões de calendário, convites/fusos horários, plataformas de reunião, controle de participantes, gravação, segurança e requisitos da LGPD.
- q-m3-31..q-m3-47: revisados classificação de spam/phishing, autenticação de domínio, acessibilidade, comunicação institucional, compartilhamento de tela, intrusão em reuniões e exposição de dados em convites.
- q-m3-07, q-m3-27 e q-m3-28: corrigida generalização de que POP3 apaga mensagens do servidor por padrão; o comportamento de manter/remover cópias depende da configuração do cliente, enquanto IMAP oferece sincronização de estado.
- q-m3-21, q-m3-39 e q-m3-40: substituída a leitura de consentimento universal para gravações por transparência e identificação da base legal adequada, com consentimento quando aplicável.
- q-m3-31: removida notação de subconjunto excessivamente categórica entre spam e phishing; as categorias podem se sobrepor, mas não são sinônimas.
- q-m3-32: DKIM descrito como assinatura verificável associada ao domínio e à integridade da mensagem, sem prometer autenticação da pessoa remetente.
- q-m3-40: removida vírgula duplicada que criava slot vazio no array de questões.
- Commits de conteúdo: `b4b05f5bd92def80877d8f10f401e4710792de60`, `212925e4582a8d0cd32129353784201be0bffc42`, `f97a2be8225042461baf9bf28761385e3dfd214f`, `252355ab6fac056883b9947f7cdd253b818324d4`, `932ded88c987d91293315cb9cc4f4597da35735a`, `2683f210802a31b8689485712ac61703c928ef91`, `434cb69de8beaa487496d96c8270ac14376f156a` e `3c7e49e231648fd48b6febca1e62f0433cd45725`.
- Revisão semântica focal dos 47 itens concluída; validar sintaxe, esquema e CI no HEAD atual.

## Rebalanceamento editorial controlado dos gabaritos — 2026-10-26

- Foram reposicionadas 60 alternativas corretas em questões de múltipla escolha, distribuídas entre M1–M8. A operação troca apenas a posição de duas alternativas completas e remapeia os textos correspondentes em `analise`, além de atualizar `gabarito`; não altera o conteúdo semântico da resposta correta.
- As questões selecionadas foram filtradas para evitar referências textuais explícitas às letras das alternativas. O script de transformação validou, para cada questão, que o texto originalmente correto passou à nova posição, que a análise `CORRETA` acompanha o novo gabarito, que a posição anterior permanece `INCORRETA` e que a sequência de alternativas continua válida.
- Distribuição antes: A=122, B=125, C=60, D=10, E=7 (324 questões MC; A/B=76,2%; D/E=5,2%).
- Distribuição após: A=84, B=103, C=72, D=37, E=28 (324 questões MC; A/B=57,7%; D/E=20,1%).
- O balanceamento é um controle editorial, não um objetivo de uniformidade perfeita. A distribuição por módulo ainda deve ser monitorada e qualquer mudança posterior deve preservar gabarito, alternativa e análise como um conjunto.
- A primeira execução de CI após o reposicionamento detectou separadores ausentes porque as alternativas e as entradas de análise levavam a vírgula junto com o texto trocado. Os 60 blocos foram normalizados para manter vírgulas em todas as opções/chaves intermediárias e removê-las apenas das últimas entradas. A validação automatizada de sintaxe, consistência e testes de navegador deve confirmar o novo HEAD.

## Revisão semântica em lote — q-m4-21 a q-m4-60 (2026-10-26)

- Revisão focal por grupos de cinco questões, verificando coerência entre enunciado, alternativas, gabarito, análises A–E, regra, pegadinha e fonte:
  - q-m4-21..q-m4-25: phishing, pharming, engenharia social, força bruta online/offline e validação TLS; gabaritos e análises coerentes.
  - q-m4-26..q-m4-30: DDoS, exposição de dados, replay, IoCs e cadeia de suprimentos; respostas e limites dos controles adequadamente delimitados.
  - q-m4-31..q-m4-35: princípios da LGPD, distinção entre fundamentos e princípios do Marco Civil, base legal para marketing, competência/natureza da ANPD e direitos dos titulares.
  - q-m4-36..q-m4-40: fiscalização e sanções da ANPD, proteção constitucional de dados, controlador/operador, conceito de dado pessoal e complementaridade entre LGPD e Marco Civil.
  - q-m4-41..q-m4-45: LAI e acesso parcial, acesso a registros conforme Marco Civil, papéis na proteção de dados, comparação LGPD/Marco Civil e confidencialidade.
  - q-m4-46..q-m4-50: hash e integridade de arquivo, RTO/RPO, limites de MFA por e-mail, menor privilégio e proteção contra adulteração de logs.
  - q-m4-51..q-m4-55: teste de restauração, continuidade versus recuperação de desastres, planejamento baseado em risco, regra 3-2-1 e gestão de chaves simétricas.
  - q-m4-56..q-m4-60: usos de criptografia assimétrica, armazenamento seguro de senhas, validação de assinatura digital, certificados X.509 e spear phishing.
- Nesta passada não foi necessário alterar o conteúdo desses itens; a revisão é focal e não substitui conferência independente de todas as fontes, nem auditoria jurídica exaustiva. Questões de legislação devem permanecer alinhadas ao texto oficial vigente.
- Próxima faixa a revisar: q-m4-61..q-m4-65; depois validar o arquivo inteiro, o inventário curricular e o CI no HEAD atual.

## Revisão semântica incremental — q-m4-61 a q-m4-70 (2026-10-26)

- q-m4-61: distinguidas categorias e comportamentos de ransomware, trojan e worm sem exigir que todo malware se replique.
- q-m4-62: diferenciados antimalware e EDR sem limitar antivírus a assinaturas ou prometer prevenção total.
- q-m4-63: segmentação aplicada à redução do movimento lateral; esclarecido que sub-redes sem regras não garantem isolamento.
- q-m4-64: hardening delimitado como configuração segura, redução de serviços/contas e atualizações controladas.
- q-m4-65: priorização de vulnerabilidades baseada em contexto, exposição, exploração, criticidade, remediação e verificação.
- q-m4-66: WAF delimitado como camada complementar à correção de código e aos testes.
- q-m4-67: distinção funcional IDS/IPS e ressalva sobre falsos positivos e efeitos do bloqueio em linha.
- q-m4-68: VPN descrita como túnel entre pontos definidos, sem promessas de anonimato ou proteção integral.
- q-m4-69: sincronização temporal separada de autenticidade/integridade dos logs.
- q-m4-70: comunicação segura combina protocolo bem configurado, validação de certificado/nome e gestão de chaves.
- Nesta passada, não foi necessário alterar o conteúdo dos itens. Revisão focal; fontes e cobertura global ainda exigem validação automatizada e amostragem independente.

## Revisão semântica incremental — q-m4-71 a q-m4-80 (2026-10-26)

- q-m4-71: controle compensatório definido como redução temporária de risco, com responsável, prazo e reavaliação do risco residual.
- q-m4-72: diferenciadas escalada vertical e horizontal; autenticação não é confundida com autorização.
- q-m4-73: mitigação de força bruta equilibrada com risco de bloqueio abusivo de contas.
- q-m4-74: password spraying diferenciado de credential stuffing, destacando correlação entre várias contas.
- q-m4-75: credential stuffing associado à reutilização de credenciais vazadas, com prevenção e resposta sem exposição de senhas.
- q-m4-76: SSRF mitigado por validação de destino efetivo, resolução DNS, redirecionamentos e controles de rede.
- q-m4-77: tratamento de risco inclui análise, resposta proporcional, aceite formal e acompanhamento do risco residual.
- q-m4-78: resposta a incidentes equilibra contenção, preservação de evidências, escalonamento e documentação.
- q-m4-79: BIA ligada a processos críticos, impactos, dependências e prioridades de recuperação.
- q-m4-80: prontidão depende de papéis claros, exercícios, comunicação e atualização baseada em lições aprendidas.
- Revisão focal; nenhum ajuste de conteúdo foi necessário nessa faixa. A seguir, conferir q-m4-81..q-m4-85, executar verificações de integridade global e inspecionar o CI do HEAD atual.

## Fechamento da revisão focal M4 q-m4-81..q-m4-85 e fonte q-m4-04 (2026-10-26)

- q-m4-81..q-m4-85: conferidas coerência entre enunciado, alternativas, gabarito, justificativas e limites conceituais de controles preventivos/detectivos/corretivos, triagem de alertas, recuperação, controle compensatório e distinção ameaça/vulnerabilidade/risco.
- q-m4-04: corrigida referência bibliográfica. A referência anterior atribuía incorretamente as categorias “preventivo” e “corretivo” às famílias CP e CA do NIST SP 800-53. A fonte agora é o CISA Cyber Resilience Review (CRR) Supplemental Resource Guide, que descreve explicitamente controles preventivos, detectivos, corretivos e compensatórios.
- Commit de conteúdo: `cdde6523216277e6b85d29528d61a2ef3d7ab188`.
- Verificação estrutural programática preliminar confirmou 85 IDs únicos q-m4-01..q-m4-85 e 84 questões de múltipla escolha + uma questão certo/errado. A validação detalhada de análise/gabarito deve ser feita com parser compatível com os dois formatos; uma primeira regex genérica não foi conclusiva para objetos de análise multilinha e não deve ser tratada como falha do conteúdo.
- CI precisa ser conferido no HEAD final; não considerar runs de HEADs anteriores como certificação deste commit.

## Pitfalls conhecidos

- `progress.js` e `accessibility.js` **agora EXISTEM e estão carregados no `index.html`** (P1-F) — progress.js junto aos demais JS (após charts.js) e accessibility.js antes de storage.js/app.js; contêineres `#progress-app` e `#accessibility-app`. `storage.js` e `assets/data/references.js` **foram criados no P1-E e estão carregados no `index.html`** (storage.js antes de app.js; references.js entre os dados) — infraestrutura de persistência e referências verificadas. (`search.js` **passou a existir e está carregado com `defer`** (contêiner `#search-app`); `audio.js` idem (`#audio-app`); `manifest.webmanifest` e `service-worker.js` **existem** e o `<link rel="manifest">` está no `<head>` com registro condicional de SW — PWA condicional, não testado em navegador real. `charts.js` **passou a existir e está carregado**: laboratório dos 5 gráficos obrigatórios em SVG próprio, contêiner `#charts-app`. `flashcards.js` **existe e está carregado**: UI de flashcards + repetição espaçada SM-2 simplificado. `quiz-engine.js` **existe e está carregado**: motor de simulados da Seção 10.2.)
- **Cópias publicadas dos .md de governança**: `apostila-ia/inventario/` e `apostila-ia/matriz/` são **cópias** de `inventario/` e `matriz/` da raiz (a fonte de verdade é a da raiz). Elas existem versionadas dentro do app para que os links do `index.html` funcionem em `file://`; o workflow de Pages re-sincroniza com `cp` a cada deploy. **Ao editar os .md da raiz, copiar novamente para `apostila-ia/`** (`cp -R inventario matriz apostila-ia/`) e commitar as duas versões.
- **Estrutura curricular e descoberta**: `curriculum.js` declara o objeto `curriculum` com as unidades M1, incluindo PowerPoint (1.4) e OneDrive (1.5) como nós curriculares aninhados; não assumir que sejam declarações globais separadas. `curriculum_m2.js` a `curriculum_m8.js` declaram `curriculumM2`…`curriculumM8`, e `flashcards_m1..m8.js` declaram `flashcardsM1`…`flashcardsM8`. `navigation.js` consolida os dados via descoberta explícita com `typeof`, sem `eval`.
- **Comentários de cabeçalho sincronizados na revisão do PR #4 (2026-10-21)**: `curriculum_m6.js`, `flashcards_m6.js`, `navigation.js` e `quiz-engine.js` ainda descreviam o M6 como "está em revisão no PR #3", "pendente de tag", "hoje o M6 — sem arquivo" ou "ausente no meio (hoje o M6)". Os quatro cabeçalhos passaram a registrar a integração no P1-C (2026-10-21), com as tags em `index.html:409` (`curriculum_m6.js`) e `index.html:417` (`flashcards_m6.js`) — eram apenas comentários, nenhuma lógica mudou (`quiz-engine.js` é o caso mais restrito: o diff do PR nele é **só** o bloco de comentário dos escopos dinâmicos).
- **Defeitos de dados corrigidos (2026-10-22, P1-D)**: (1) elision no array literal de `questions.js` — a vírgula sobrando depois do comentário `FIM do bloco q-m1-33..q-m1-40` (linha 2387) deixava `questoesBanco.length` em **121** com um buraco no índice 90, em vez de **120**; (2) `q-m4-04` com `gabarito: "Errado"` (caixa errada — o validador exige `"errado"`); (3) `q-m4-05` sem a chave `E` em `analise`; (4) `q-m5-02` sem o campo `pegadinha`. Corrigidos em 2026-10-22; validação estrutural das **365** questões fundidas por id em Node/vm: **0 reprovadas**.
- Simulador Excel (2026-10-20): PROCX/PROCH/PROCV agora têm **busca real** (exata e aproximada; erros #N/A/#REF!/#VAL!/#DIV/0!/#NUM!); 23 funções + aliases EN; parser próprio sem `eval`; modelo de planilha em memória (`criarPlanilha`) com refs A1/absolutas/mistas, recálculo e `ajustarFormulaAoCopiar`; separador `;` (pt-BR) ou `,` com regra declarada no cabeçalho de `simulators.js`. Limitações remanescentes declaradas no cabeçalho: sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas; correspondência aproximada não valida ordenação; **não testado em navegador real** (verificado com `node --check` + smoke test em Node/vm, 111 asserts).
- `apostila-web/` e `entregas/` estão vazios — não é código funcional.
- Inventário/matriz já foram sincronizados (2026-10-21 e 2026-10-22, incrementalmente nos P1-A, P1-C e P1-D), mas **sempre que o código mudar, atualizá-los junto** — o código é a fonte de verdade.

## Revisão inicial do M6 — questões 1 a 10 (2026-10-26)

- q-m6-01: corrigida justificativa que atribuía incorretamente à alternativa correta C um erro de conveniência; agora distingue legalidade, eficiência, dotação orçamentária e poder regulamentar.
- q-m6-02: corrigida justificativa que classificava a alternativa correta C como opacidade; agora mapeia critérios objetivos, transparência, tratamento diferenciado legítimo e competência do órgão.
- q-m6-03: conferidos finalidade, adequação, necessidade e tratamento de dados pelo poder público, sem presumir que toda reutilização seja proibida ou automaticamente válida.
- q-m6-04: corrigida justificativa que classificava a alternativa correta C como faculdade; agora distingue publicidade, proteção de informação pessoal e hipóteses de sigilo.
- q-m6-05: corrigida justificativa que dizia que a alternativa C eliminava controles, embora ela os preserve; referências à Lei de Governo Digital alinhadas ao texto da alternativa.
- q-m6-06: critério oculto analisado sob impessoalidade e publicidade, sem tratar discricionariedade como imunidade ao controle.
- q-m6-07: corrigida justificativa que atribuía ao item C a crítica sobre consentimento, embora B fosse a alternativa sobre consentimento exclusivo.
- q-m6-08: uso da interface institucional para finalidade alheia ao serviço tratado como possível desvio de finalidade, não como mero detalhe visual.
- q-m6-09: corrigida justificativa que atribuía ao item C uma crítica aplicável à alternativa B; transparência ativa permanece definida conforme art. 8º da LAI.
- q-m6-10: conferidos os indicadores mínimos do painel da Lei nº 14.129/2021 e a necessidade de não inferir eficiência apenas de um indicador parcial.
- Commits de conteúdo: `9974767bf60e2a150088b2663c7963739076a787` e `2c035b1a4cd9a02e3c66d9a491bc379c1a97ab4f`. Reexecutar CI e verificar as fontes jurídicas antes de considerar o lote validado.

## Revisão adicional do M6 — questões 11 a 20 (2026-10-26)

- q-m6-11: corrigida justificativa que atribuía à alternativa correta C uma restrição de alcance; agora diferencia o escopo da LAI e os distratores.
- q-m6-12: pedido de acesso sem exigência de motivação alinhado ao art. 10, §§ 1º e 3º, da LAI.
- q-m6-13: alcance sobre entidades privadas delimitado ao art. 2º da LAI, conforme recebimento de recursos públicos para ações de interesse público.
- q-m6-14: prazo de resposta tratado conforme art. 11: acesso imediato quando disponível, até 20 dias e prorrogação de 10 dias com justificativa expressa.
- q-m6-15: corrigida justificativa que atribuía à alternativa correta C a definição de banco de dados; agora distingue documento, banco de dados, informação sigilosa e primariedade.
- q-m6-16 a q-m6-18: conferidas a complementaridade entre transparência ativa/passiva, requisitos dos sítios oficiais e diretriz de uso de tecnologia da informação.
- q-m6-19: regime de informação pessoal da LAI diferenciado de classificação de sigilo.
- q-m6-20: conteúdo mínimo de transparência ativa relacionado ao art. 8º, § 1º, sem divulgar prontuários ou dados pessoais identificáveis indiscriminadamente.
- Commits de conteúdo: `fc47b23d58fdd92fbc878fd15d8d50294e63d67b` e commits de correção M6 anteriores `9974767bf60e2a150088b2663c7963739076a787`, `2c035b1a4cd9a02e3c66d9a491bc379c1a97ab4f`. Verificar CI e fontes legais no HEAD atual.

## Revisão adicional do M6 — questões 11 a 30 (2026-10-26)

- q-m6-11: corrigida justificativa que atribuía à alternativa C uma restrição de alcance; escopo da LAI descrito conforme arts. 1º e 3º.
- q-m6-12: pedido de acesso sem exigência de motivação alinhado ao art. 10, §§ 1º e 3º, da LAI.
- q-m6-13: alcance sobre entidades privadas delimitado ao art. 2º da LAI.
- q-m6-14: prazo de resposta tratado conforme art. 11: acesso imediato quando disponível, até 20 dias e prorrogação de 10 dias com justificativa expressa.
- q-m6-15: corrigida justificativa que atribuía à alternativa C a definição de banco de dados; agora distingue documento, banco de dados, informação sigilosa e primariedade.
- q-m6-16 a q-m6-18: conferidas complementaridade entre transparência ativa/passiva, requisitos de sítios oficiais e diretriz de uso de tecnologia da informação.
- q-m6-19 e q-m6-20: regime de informação pessoal e conteúdo mínimo de transparência ativa alinhados à LAI.
- q-m6-21: regra e exceções da prática de atos processuais eletrônicos descritas conforme art. 6º da Lei nº 14.129/2021.
- q-m6-22: automação não tratada como fonte de competência ou fundamento normativo.
- q-m6-23: resposta de acesso deve cumprir prazo e conteúdo legal, inclusive encaminhamento/indicação do detentor e orientação sobre recurso.
- q-m6-24 e q-m6-25: transparência ativa conciliada com proteção de dados pessoais; anonimização, finalidade pública, necessidade e proporcionalidade consideradas para disponibilização.
- q-m6-26 e q-m6-27: graus/prazos de classificação e elementos formais da decisão tratados conforme arts. 24, 27 e 28 da LAI.
- q-m6-28: dispensa de consentimento restrita às hipóteses legais do art. 31, § 3º, da LAI.
- q-m6-29: trilha de auditoria definida por finalidade, risco e necessidade, sem inventar lista legal universal de campos nem registrar segredos reutilizáveis.
- q-m6-30: responsabilidade do órgão e de terceiro vinculado não presumida como exclusiva de uma parte; fatos, dano e nexo causal ainda exigem apuração.
- Commits de correção M6 registrados: `9974767bf60e2a150088b2663c7963739076a787`, `2c035b1a4cd9a02e3c66d9a491bc379c1a97ab4f`, `fc47b23d58fdd92fbc878fd15d8d50294e63d67b`. Validar referências e CI no HEAD atual.

## Revisão adicional do M6 — questões 31 a 40 (2026-10-26)

- q-m6-31: redes sociais tratadas como canal complementar; site oficial continua necessário para transparência ativa, e práticas de autenticação/rastreabilidade foram qualificadas como governança.
- q-m6-32: conflito de interesses avaliado preventivamente no contexto da Lei nº 12.813/2013, sem presumir infração consumada ou exoneração automática.
- q-m6-33: proteção de dados pessoais não depende do canal de publicação; conta pessoal não afasta dever de reserva nem possível uso indevido.
- q-m6-34: acessibilidade digital conectada à LAI e à Lei nº 14.129/2021, com práticas verificáveis e distinção em relação à inclusão digital.
- q-m6-35: preservação do atendimento presencial diferenciada do incentivo ao autosserviço na Lei de Governo Digital.
- q-m6-36: níveis N0–N5 identificados como classificação didática do módulo, não como nomenclatura legal universal.
- q-m6-37: supervisão humana por reclamação reconhecida como amostra enviesada; taxa global de reversão não prova qualidade em subgrupos.
- q-m6-38: caso de credencial legítima diferencia falha de desenho, contenção e preservação de logs; responsabilidade concreta exige apuração.
- q-m6-39: uso de IA como apoio não transfere a responsabilidade editorial; envio de dados pessoais e publicação exigem validação institucional e jurídica.
- q-m6-40: transparência ativa e passiva tratadas como cumulativas; divulgação de licitações/contratos e atualização do sítio não são substituídas pelo atendimento a pedidos.
- Revisão focal sem patches de conteúdo nesta passada. Conferir fontes e CI no HEAD atual.

## Revisão focal do M7 — questões 1 a 30 (2026-10-26)

- q-m7-01 a q-m7-05: conceitos DIKW (dado, informação, conhecimento, sabedoria) definidos de forma consistente com o currículo, sem assumir conversão automática entre níveis.
- q-m7-06 a q-m7-10: código numérico nominal, estrutura dos dados, metadados de negócio, escala ordinal e linhagem diferenciados do catálogo.
- q-m7-11 a q-m7-20: validade, acurácia, completude, consistência, unicidade e tempestividade separados; após a revisão inicial, q-m7-14 foi corrigida para comparar 2,0 m com 220 cm (divergência real), pois 2,0 m e 200 cm seriam equivalentes. A questão agora distingue inconsistência entre fontes de acurácia, que exige referência externa.
- q-m7-21: ETL distinguido de ELT pela ordem e local da transformação.
- q-m7-22: substituição de CPF por token com chave preservada corretamente identificada como pseudonimização, não anonimização.
- q-m7-23: duplicidade vinculada à violação de unicidade e à inflação de contagens/somas.
- q-m7-24: CEP, telefone e matrícula tratados como códigos nominais, sem operações aritméticas significativas.
- q-m7-25: retenção ligada a finalidade/obrigação, prazo justificado e descarte de cópias, sem guarda indefinida por precaução.
- q-m7-26: ausência seletiva de respostas não tratada por imputação cega; limitação e viés declarados.
- q-m7-27: ordenação lexicográfica explicada como erro de tipo, com conversão explícita e registro de falhas.
- q-m7-28: z-scores recalculados: 1,5 e 2,0; desempenho relativo distinguido da nota absoluta.
- q-m7-29: lista de telefones em uma célula reconhecida como violação de atomicidade da 1FN.
- q-m7-30: papéis de dono do dado e steward diferenciados no processo de governança.
- Snapshot inicial desta revisão. Correções posteriores em q-m7-20, q-m7-21 e q-m7-22 estão registradas nas seções de revisão adicional do M7; prevalece o registro mais recente. Verificar a matriz curricular e CI no HEAD atual.

## Revisão focal do M7 — questões 31 a 40 (2026-10-26)

- q-m7-31: falso negativo em deduplicação diferenciado de falso positivo, com ressalva sobre chaves confiáveis e normalização.
- q-m7-32: papéis de controlador e operador conforme LGPD, sem afastar o dever de segurança de ambos.
- q-m7-33: ETL selecionado quando dados precisam ser tratados antes de chegar a ambiente analítico compartilhado, sem generalizar que um paradigma é sempre superior.
- q-m7-34: taxa de ausência recalculada incluindo nulos explícitos, marcador textual e zero substituto: 23/250 = 9,2%; completude 90,8%.
- q-m7-35: taxa de duplicidade calculada como (1.000 − 940)/1.000 = 6%, com inflação de contagem de linhas.
- q-m7-36: min-max calculado para valores fora da faixa (110→1,25; 40→−0,50), sem truncamento implícito.
- q-m7-37: normalização estatística diferenciada de normalização de banco de dados.
- q-m7-38: média global ponderada pelo tamanho dos grupos recalculada em 6,5, em vez de média simples 6,0.
- q-m7-39: remoção de nome/CPF não tratada como anonimização suficiente; quasi-identificadores combinados exigem avaliação de reidentificação.
- q-m7-40: revisão de acesso temporário e minimização de dados ligada à finalidade e à revisão/expiração de permissões.
- Snapshot inicial desta revisão. A correção posterior de q-m7-22 e o refinamento de completude histórica/ETL estão registrados nas seções de revisão adicional do M7; prevalece o registro mais recente. Validar fontes, matriz e CI no HEAD atual.

## Revisão focal do M8 — questões 1 a 40 (2026-10-26)

- q-m8-01 a q-m8-05: pergunta de negócio e escolha de gráfico, linha de base zero em barras e histograma de classes contíguas revisados.
- q-m8-06: média 5,0, mediana 4,5 e moda 4 conferidas para o conjunto apresentado.
- q-m8-07 a q-m8-11: Power Query, granularidade de fatos e escolha de ferramenta de painel revisados; disponibilidade/custo de ferramentas devem ser revalidados se usados como informação de produto atual.
- q-m8-12: corrigido o erro de digitação “osquartis”; regra de Tukey distingue limites de outlier da extremidade observada dos bigodes.
- q-m8-13 a q-m8-16: paletas sequenciais, redundância de codificação para acessibilidade, escala logarítmica e escolha de gráficos por tarefa conferidas.
- q-m8-17: densidade de histograma tratada como altura (frequência ÷ largura) e área como frequência; corrigida explicação sobre comparação com diferentes larguras de classe.
- q-m8-18: corrigidas análises das alternativas A e B para refletir corretamente o denominador anterior e o sinal da variação percentual.
- q-m8-19 e q-m8-20: correlação não tratada como causalidade; variância e desvio-padrão amostrais calculados com divisor n−1.
- q-m8-21 a q-m8-25: quartil tipo 7 calculado em Q1=22; assimetria, viés de amostragem, escolha de ferramenta e comunicação de incerteza revisados.
- q-m8-26 a q-m8-30: foco de painel, ordenação de barras, hierarquia visual, correlação/causalidade e contexto de filtro DAX revisados.
- q-m8-31: paleta divergente com neutro na referência central.
- q-m8-32: histograma de densidade com classes de larguras diferentes.
- q-m8-33: lacunas temporais representadas sem fabricar continuidade.
- q-m8-34: corrigido o contexto contraditório sobre convenção de Tukey; diferença de bigodes agora decorre de configurações padrão não harmonizadas. Corrigido também “interpolacão”.
- q-m8-35: média ponderada calculada em 38/6 ≈ 6,33.
- q-m8-36 a q-m8-40: outliers não removidos sem investigação, critérios de causalidade, granularidade/contagem distinta, agregação DAX e estudo de caso integrador revisados.
- Commits de conteúdo M8 no snapshot inicial: `a4653cafda5ed1b70537f9511fbabafcdcd8c0c5` e `a4451aea28dca2e0dbedb26a7a548fac3c44df65`. A correção posterior de q-m8-29 está registrada na seção de revisão mais recente do M8; prevalece o registro mais recente. Aguardar validadores no HEAD atual.

## Auditoria cruzada de gabaritos e análises (2026-10-26)

- Varredura automatizada dos bancos M4–M8 confirmou IDs únicos e contagens esperadas: M4=85, M5=42, M6=47, M7=40, M8=40.
- A comparação entre gabarito e rótulos de análise detectou uma ambiguidade textual em q-m7-28: a alternativa E iniciava com “CORRETA no cálculo” apesar de ser incorreta no conjunto. A redação foi alterada para “INCORRETA no conjunto: o cálculo está correto, mas a conclusão está errada...”, deixando explícito que apenas A é correta.
- q-m4-82 usa objeto `analise` em formato compacto; leitura manual confirmou B como correta e A/C/D/E incorretas. A detecção automatizada inicial não reconheceu esse formato, sem indicar erro de gabarito.
- Commit de conteúdo: `8ece6b830472585ff53a4bfac937a4546962f8c8`. Reexecutar validadores no HEAD atual.

## Resultado da segunda varredura de gabaritos (2026-10-26)

- Reexecutada a verificação cruzada entre `gabarito` e a alternativa marcada `CORRETA` nos bancos M4–M8, incluindo objetos `analise` compactos.
- Resultado: M4=85, M5=42, M6=47, M7=40, M8=40; zero divergências entre gabarito e análise nas questões de múltipla escolha verificadas. Itens C/E foram excluídos dessa comparação de letras e permanecem sujeitos aos seus próprios validadores.
- A verificação textual não comprova, isoladamente, correção pedagógica, jurídica ou de fonte; ela complementa a revisão semântica focal e os testes do projeto.

## Correções de sintaxe em M1 e auditoria cruzada final (2026-10-26)

- A validação CI no commit `a44972ab2228f9f5f44d57fbb7040a14919a6b34` falhou em `Check JavaScript syntax`: após a fonte de q-m1-01 faltava uma vírgula; q-m1-03 e q-m1-04 tinham o mesmo defeito. Correções: `62035e461dd5477a5c2a88b659802b74769fdd60` e `873a3538cf8fbdf90abd677671356c8bee68330e`.
- A execução seguinte encontrou um objeto de abertura duplicado imediatamente antes de q-m1-40 (`Unexpected token '{'`). Removido o objeto extra em `bbe370a370af312d096d209fc785b22aac2ec64f`.
- Varredura de separadores nas seis fontes de questões (M1–M8) não encontrou outros candidatos a vírgula ausente entre propriedades. A varredura cruzada de gabarito/análise contou 399 IDs únicos (M1–M3=145, M4=85, M5=42, M6=47, M7=40, M8=40) e não encontrou divergências nas questões MC.
- No HEAD `bbe370a370af312d096d209fc785b22aac2ec64f`, a execução `40375099671` concluiu com sucesso: sintaxe JavaScript, matriz curricular, relatório de rastreabilidade, validação estrutural, heurísticas de qualidade, smoke test em `file://` e regressões de interação Playwright. Outra execução duplicada ainda estava em andamento quando este registro foi escrito; o PR continua Draft e não foi merged.
- Este registro altera o HEAD; a validação deve ser repetida no novo commit documental antes de afirmar que todos os checks estão verdes.

## Regras de contribuição

- Trabalhar em incrementos completos e funcionais — nunca placeholder, nunca "implementar depois".
- Preservar conteúdo já validado ao corrigir defeitos.
- Documentar decisões e trade-offs nos arquivos de inventário/matriz (mantê-los em dia com o código).
- `Escrita.txt` é a fonte de verdade para requisitos; este AGENTS.md descreve o estado real do código.
