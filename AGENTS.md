# AGENTS.md — Apostila Web Interativa FCN

Projeto de apostila web interativa de TI, Dados e IA para concursos públicos brasileiros. Conteúdo em pt BR, 8 módulos obrigatórios (Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados, Visualização).

## Visão geral

  SPA estática em vanilla HTML/CSS/JS. Sem build, framework ou `package.json`; `README.md` existe. CI: `deploy-pages.yml` publica em `main`/manual e `validate-curriculum.yml` valida PRs/branches `feat/**`. Testes estruturais Node/vm e auditorias estão versionados; navegador real e WCAG ainda exigem validação dedicada.
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
- Referências (HEAD atual auditado em 2026-10-27): `apostila-ia/assets/data/references.js` contém **183 entradas** — 20 vídeos e 163 referências técnicas; IDs todos únicos (183/183, 0 duplicados exatos; sufixos -2/-3 garantem unicidade). Todas têm status `verificado` e URL preenchida. CI validate-curriculum passou para HEAD `bab709d` (runs 40446152897 push e 40446156719 PR, success). Pendentes remanescentes (não cadastrados): demais resoluções ANPD, RFCs não listadas, demais incisos/parágrafos constitucionais e verificação artigo a artigo das leis adicionais citadas por remissão em M6.`
- Revisão pedagógica (I5, 2026-10-24): 7 correções pontuais em `curriculum.js` (M1) e `curriculum_m6.js` (M6) — erro de digitação "sinconexerência"→"sincronização", suavização de 5 afirmações não verificáveis (cotas OneDrive, prazos de retenção, art. 8º-A LAI), substituição de exercício com prazo não verificado. Documentado em `docs/REVISAO_PEDAGOGICA.md`. Contagem de nós preservada (427).

- Deploy: `.github/workflows/deploy-pages.yml` roda `node --check` em todos os `assets/**/*.js` e publica `apostila-ia/` como raiz do site (push em `main` ou manual). A action `upload-pages-artifact` só aceita **um** diretório, então o job copia `inventario/` e `matriz/` (fonte, na raiz) para dentro de `apostila-ia/` antes do upload — é o que faz os dois links do `index.html` funcionarem no Pages **e** no `file://`.

## Testes headless CDP (2026-10-24) — evidência real

- Ambiente: Chromium 156 headless controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A; evidência de 2026-10-24).
- Resultados históricos: carregamento sem exceções JS (módulos 1–8; 404 flashcards; 365 questões na época; 5 gráficos); 12/12 contêineres não vazios; `buscar('CIDR')`=10 (índice 1196); 5 SVGs de gráficos; localStorage roundtrip OK; simuladores montados (Excel smoke 111 asserts). Os totais atuais são 460 flashcards e 399 questões; a regressão no total atualizado precisa ser confirmada pelo CI atual.
- ATENDIDO: áudio (controles + aviso + 3 correções, smoke 41/41, CDP OK) — síntese depende do dispositivo (limitação documentada, não defeito).
- PARCIAL: responsividade em dispositivo físico; WCAG com leitor de tela não testado (atributos/contraste/teclado implementados).
- VÍDEOS: 20 IDs validados via oEmbed em 2026-10-24; embeds nos módulos concluídos. REFERÊNCIAS: 43/135 entradas no `references.js` atual têm status `verificado` e URL presente (20 vídeos + 23 técnicas); 0 entradas pendentes no catálogo. Pendentes remanescentes (não cadastrados): demais resoluções ANPD, demais RFCs não verificadas individualmente, demais incisos/parágrafos CF art. 37/5º.
- Docs atualizados: `docs/AUDITORIA_FINAL.md` (matriz 19 critérios), `docs/RELATORIO_TESTES.md` (T9–T14), `docs/PENDENCIAS.md` (1–19), `docs/PLANO_EXECUCAO.md`, `docs/INVENTARIO_CURRICULAR.md`, `docs/DECISOES_ARQUITETURAIS.md`, `docs/REVISAO_PEDAGOGICA.md`.
- Veredito: APROVADO COM RESSALVAS. Não declarar integralmente concluído.



## Histórico de auditorias

O histórico detalhado de auditorias semânticas, CI e revisões focais foi movido para `docs/HISTORICO_AUDITORIAS.md` para manter este arquivo legível. Consulte-o para rastreabilidade completa.


## Refatoração visual e GitHub Pages — 2026-10-27

- A folha de estilos canônica é `apostila-ia/assets/css/styles.css`; o bloco CSS inline de `apostila-ia/index.html` foi removido para eliminar cascata concorrente entre CSS externo e interno.
- Redesenho aplicado: identidade editorial azul-marinho, fundo cinza-claro, cartões brancos com bordas arredondadas e sombras discretas, hierarquia tipográfica, componentes de formulário, botões, tabelas, flashcards, árvore curricular, vídeos e gráficos.
- Responsividade refinada para telefones estreitos, tablets e desktops; áreas de toque mínimas de 44px, foco visível, redução de movimento, estilos de impressão e tema escuro via preferência do sistema.
- Cabeçalho simplificado para apresentar a finalidade educacional, sem expor no topo contagens de auditoria, status de testes ou pendências técnicas.
- O workflow `.github/workflows/deploy-pages.yml` publica somente após push em `main` ou execução manual. Alterações em PR não atualizam o site publicado até o merge e o deploy subsequente.
- Estado desta alteração: CSS e HTML modificados na branch `feat/recursos-personalizacao-persistencia` (PR #19). A refatoração visual ainda exige validação visual real em desktop/mobile e verificação pós-deploy; não declarar equivalência visual ou WCAG integral sem evidências.


## Refatoração profunda do frontend — continuação (2026-10-28)

### Implementação
- Criado `apostila-ia/assets/js/ui-shell.js`: monta o shell visual sem framework, adiciona menu lateral com atalhos para vídeos, currículo, flashcards, questões, gráficos, busca e progresso; reposiciona a árvore curricular existente no menu; implementa abertura/fechamento móvel, overlay, tecla Escape, foco e indicação da seção ativa.
- Atualizado `apostila-ia/assets/css/styles.css`: layout editorial com sidebar azul-marinho, navegação hierárquica, conteúdo em cartões, breakpoints para desktop/tablet/celular, menu móvel sobreposto, estados ativos, foco, tema escuro e impressão.
- Atualizado `apostila-ia/index.html` para carregar `ui-shell.js` imediatamente depois de `navigation.js`. Isso preserva a ordem de inicialização: a árvore é renderizada antes de ser movida para a sidebar.
- O shell mantém os motores existentes de currículo, flashcards, banco de questões, simuladores, busca, áudio, gráficos e progresso; não substitui IDs de seções nem chaves de persistência.
- A árvore de navegação permanece acessível por teclado; o painel de conteúdo do tópico continua no módulo curricular e recebe conteúdo pelo mesmo mecanismo existente.

### Validações estruturais feitas
- HTML: uma referência à folha CSS canônica e uma ao novo script; script de shell carregado após navegação; nenhum bloco CSS inline; nenhum ID duplicado.
- CSS: chaves e parênteses balanceados.
- JavaScript do shell: chaves balanceadas e funções de inicialização/controle presentes.
- Não há execução de workflow/teste de navegador confirmada para este HEAD. Não declarar testes funcionais, auditoria WCAG completa ou inspeção visual física como aprovados sem evidência.
- A versão publicada no GitHub Pages só refletirá a alteração depois do merge na `main` e de um deploy concluído. Não executar merge automaticamente como parte desta etapa.


### Correção de integração do menu — 2026-10-28
- A árvore curricular é movida como wrapper `#navegacao-curriculo`, não somente como elemento `.curriculum-tree`. O motor `navigation.js` delega eventos, enumera itens visíveis e calcula ancestrais com base no wrapper; preservar essa relação evita regressões na navegação por teclado, expansão e seleção.
- Contagem real do HTML: 40 scripts externos (23 scripts de dados e 17 scripts JavaScript). O verificador estrutural foi corrigido para refletir o inventário efetivo do HTML.
