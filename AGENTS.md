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
- Flashcards: **460 no disco e conectados ao app** (M1=66, M2=56, M3=68, M4=54, M5=66, M6=50, M7=50, M8=50; IDs únicos por arquivo verificados em 2026-10-25). Questões: **365** (M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40; validação estrutural em CI em 2026-10-25). Os 460 flashcards superam o piso de 400 em quantidade, mas isso não prova domínio curricular.
- Referências: 78 itens em `references.js` no HEAD atual conhecido (2026-10-26) — 20 vídeos + 58 referências técnicas; o catálogo foi ampliado nesta PR, incluindo NIST AI 600-1 e Google Cloud Grounding. O registro histórico I4/I6 dizia 72 itens; não tratar a contagem antiga como atual. Verificações anteriores de 72/72 não cobrem automaticamente as referências adicionadas depois. (LGPD, LAI, Lei 14.129/2021, Marco Civil, Microsoft Learn, RFCs, CERT.br, ANPD órgão + 13 resoluções, CF art. 37 + art. 5º, Leis 8.429/1992, 1.079/1950, 13.146/2015, 10.098/2000, 10.741/2003, 13.460/2017, 12.682/2012, 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º); 72/72 verificadas, 0 pendentes em references.js. Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não listadas, demais incisos/parágrafos CF art. 37/5º não enumerados, verificação artigo a artigo das leis adicionais citadas por remissão em M6.
- Revisão pedagógica (I5, 2026-10-24): 7 correções pontuais em `curriculum.js` (M1) e `curriculum_m6.js` (M6) — erro de digitação "sinconexerência"→"sincronização", suavização de 5 afirmações não verificáveis (cotas OneDrive, prazos de retenção, art. 8º-A LAI), substituição de exercício com prazo não verificado. Documentado em `docs/REVISAO_PEDAGOGICA.md`. Contagem de nós preservada (427).

- Deploy: `.github/workflows/deploy-pages.yml` roda `node --check` em todos os `assets/**/*.js` e publica `apostila-ia/` como raiz do site (push em `main` ou manual). A action `upload-pages-artifact` só aceita **um** diretório, então o job copia `inventario/` e `matriz/` (fonte, na raiz) para dentro de `apostila-ia/` antes do upload — é o que faz os dois links do `index.html` funcionarem no Pages **e** no `file://`.

## Testes headless CDP (2026-10-24) — evidência real

- Ambiente: Chromium 156 headless controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A).
- Resultados: carregamento sem exceções JS (módulos 1–8; 404 FC; 365 Q; 5 gráficos); 12/12 contêineres não vazios; `buscar('CIDR')`=10 (índice 1196); 5 SVGs de gráficos; localStorage roundtrip OK; simuladores montados (Excel smoke 111 asserts).
- ATENDIDO: áudio (controles + aviso + 3 correções, smoke 41/41, CDP OK) — síntese depende do dispositivo (limitação documentada, não defeito).
- PARCIAL: responsividade em dispositivo físico; WCAG com leitor de tela não testado (atributos/contraste/teclado implementados).
- VÍDEOS: 20 validados (IDs verificados via oembed, 2026-10-24; embed nos módulos concluído). REFERÊNCIAS: 72/72 verificadas (0 pendentes em references.js). Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não verificadas individualmente, demais incisos/parágrafos CF art. 37/5º.
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
- Permanecem pendentes: auditoria semântica das questões não cobertas pelos lotes acima; verificação individual de referências remanescentes; reconciliação dos inventários/matrizes/relatórios com a saída mais recente dos validadores; avaliação manual de teclado, leitor de tela, responsividade e dispositivos físicos; e conclusão dos critérios para tirar o PR de Draft. Testes automatizados/headless não equivalem a certificação WCAG nem à conclusão integral da Fase 1.


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
- O passe q-m5-01..q-m5-20 cobre apenas os itens explicitamente revisados nas seções incrementais; ainda não constitui revisão integral do banco de 42 questões do M5. A validação automatizada do HEAD atual permanece obrigatória.

## Pitfalls conhecidos

- `progress.js` e `accessibility.js` **agora EXISTEM e estão carregados no `index.html`** (P1-F) — progress.js junto aos demais JS (após charts.js) e accessibility.js antes de storage.js/app.js; contêineres `#progress-app` e `#accessibility-app`. `storage.js` e `assets/data/references.js` **foram criados no P1-E e estão carregados no `index.html`** (storage.js antes de app.js; references.js entre os dados) — infraestrutura de persistência e referências verificadas. (`search.js` **passou a existir e está carregado com `defer`** (contêiner `#search-app`); `audio.js` idem (`#audio-app`); `manifest.webmanifest` e `service-worker.js` **existem** e o `<link rel="manifest">` está no `<head>` com registro condicional de SW — PWA condicional, não testado em navegador real. `charts.js` **passou a existir e está carregado**: laboratório dos 5 gráficos obrigatórios em SVG próprio, contêiner `#charts-app`. `flashcards.js` **existe e está carregado**: UI de flashcards + repetição espaçada SM-2 simplificado. `quiz-engine.js` **existe e está carregado**: motor de simulados da Seção 10.2.)
- **Cópias publicadas dos .md de governança**: `apostila-ia/inventario/` e `apostila-ia/matriz/` são **cópias** de `inventario/` e `matriz/` da raiz (a fonte de verdade é a da raiz). Elas existem versionadas dentro do app para que os links do `index.html` funcionem em `file://`; o workflow de Pages re-sincroniza com `cp` a cada deploy. **Ao editar os .md da raiz, copiar novamente para `apostila-ia/`** (`cp -R inventario matriz apostila-ia/`) e commitar as duas versões.
- **Estrutura curricular e descoberta**: `curriculum.js` declara o objeto `curriculum` com as unidades M1, incluindo PowerPoint (1.4) e OneDrive (1.5) como nós curriculares aninhados; não assumir que sejam declarações globais separadas. `curriculum_m2.js` a `curriculum_m8.js` declaram `curriculumM2`…`curriculumM8`, e `flashcards_m1..m8.js` declaram `flashcardsM1`…`flashcardsM8`. `navigation.js` consolida os dados via descoberta explícita com `typeof`, sem `eval`.
- **Comentários de cabeçalho sincronizados na revisão do PR #4 (2026-10-21)**: `curriculum_m6.js`, `flashcards_m6.js`, `navigation.js` e `quiz-engine.js` ainda descreviam o M6 como "está em revisão no PR #3", "pendente de tag", "hoje o M6 — sem arquivo" ou "ausente no meio (hoje o M6)". Os quatro cabeçalhos passaram a registrar a integração no P1-C (2026-10-21), com as tags em `index.html:409` (`curriculum_m6.js`) e `index.html:417` (`flashcards_m6.js`) — eram apenas comentários, nenhuma lógica mudou (`quiz-engine.js` é o caso mais restrito: o diff do PR nele é **só** o bloco de comentário dos escopos dinâmicos).
- **Defeitos de dados corrigidos (2026-10-22, P1-D)**: (1) elision no array literal de `questions.js` — a vírgula sobrando depois do comentário `FIM do bloco q-m1-33..q-m1-40` (linha 2387) deixava `questoesBanco.length` em **121** com um buraco no índice 90, em vez de **120**; (2) `q-m4-04` com `gabarito: "Errado"` (caixa errada — o validador exige `"errado"`); (3) `q-m4-05` sem a chave `E` em `analise`; (4) `q-m5-02` sem o campo `pegadinha`. Corrigidos em 2026-10-22; validação estrutural das **365** questões fundidas por id em Node/vm: **0 reprovadas**.
- Simulador Excel (2026-10-20): PROCX/PROCH/PROCV agora têm **busca real** (exata e aproximada; erros #N/A/#REF!/#VAL!/#DIV/0!/#NUM!); 23 funções + aliases EN; parser próprio sem `eval`; modelo de planilha em memória (`criarPlanilha`) com refs A1/absolutas/mistas, recálculo e `ajustarFormulaAoCopiar`; separador `;` (pt-BR) ou `,` com regra declarada no cabeçalho de `simulators.js`. Limitações remanescentes declaradas no cabeçalho: sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas; correspondência aproximada não valida ordenação; **não testado em navegador real** (verificado com `node --check` + smoke test em Node/vm, 111 asserts).
- `apostila-web/` e `entregas/` estão vazios — não é código funcional.
- Inventário/matriz já foram sincronizados (2026-10-21 e 2026-10-22, incrementalmente nos P1-A, P1-C e P1-D), mas **sempre que o código mudar, atualizá-los junto** — o código é a fonte de verdade.

## Regras de contribuição

- Trabalhar em incrementos completos e funcionais — nunca placeholder, nunca "implementar depois".
- Preservar conteúdo já validado ao corrigir defeitos.
- Documentar decisões e trade-offs nos arquivos de inventário/matriz (mantê-los em dia com o código).
- `Escrita.txt` é a fonte de verdade para requisitos; este AGENTS.md descreve o estado real do código.
