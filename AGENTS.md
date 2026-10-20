# AGENTS.md — Apostila Web Interativa FCN

Projeto de apostila web interativa de TI, Dados e IA para concursos públicos brasileiros. Conteúdo em pt-BR, 8 módulos obrigatórios (Microsoft 365, Redes, Comunicação, Segurança, IA, Ética, Dados, Visualização).

## Visão geral

- SPA estática em vanilla HTML/CSS/JS. Sem build, sem framework, sem `package.json`, sem CI, sem testes, sem README.
- Fonte de requisitos: `Escrita.txt` (prompt mestre, 1207 linhas) — consultar antes de qualquer implementação nova.
- O app vive em `apostila-ia/` (o `index.html` **não** está na raiz do repo).

## Estrutura do repositório

```
Escrita.txt                      — prompt mestre (regras de entrega)
apostila-ia/                     — o app
  index.html                     — entrada (file:// ou servidor estático)
  assets/css/styles.css
  assets/js/  app.js · navigation.js · simulators.js · simulator_network.js
              flashcards.js · quiz-engine.js
  assets/data/ curriculum.js (M1) · curriculum_m2.js · curriculum_m3.js
               flashcards_m1.js · flashcards_m2.js · flashcards_m3.js
               questions.js (banco de 82 questões autorais — M1/M2/M3)
inventario/INVENTARIO_CURRICULAR.md   matriz/MATRIZ_COBERTURA.md
referencias/referencias-verificadas.md
apostila-web/  entregas/         — diretórios vazios (estrutura planejada)
```

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

- **Código (`assets/data/*.js`) é a fonte de verdade para estado atual.** `inventario/` e `matriz/` foram sincronizados com o código em 2026-10-20 (leitura dos arquivos); mantê-los em dia.
- **Navegação corrigida (incremento de desbloqueio)**: `navigation.js` é o dono único da navegação/renderização — o antigo SyntaxError (`curriculumData.modulo-1` com hífen) foi eliminado. Ele registra `window.apostilaDados` + alias retro-compatível `window.curriculumData`, renderiza a árvore dos módulos 1–3 em `#curriculum` (append, preservando o HTML estático), exibe `objetivoAprendizagem`/`conteudo` em painel abaixo da árvore (no lugar do `alert()` antigo) e grava progresso no localStorage chave `apostila-ia-progresso`. `app.js` ficou apenas com tema (`prefers-color-scheme`) + boot.
- **Esquema de chaves unificado**: `modulo-N` **com hífen** (`modulo-1`, `modulo-2`, `modulo-3`) — já é o esquema dos dados e dos IDs de tópico.
- M1: `curriculum['modulo-1']` contém 1.1 (8 sub-tópicos) e 1.2 (14 tópicos), que **renderizam**. 1.3 Excel: sem entrada de currículo (só comentário) + simulador com busca real (PROCV/PROCH/PROCX executam busca de verdade; modelo de planilha em memória com refs A1/$ e recálculo). 1.4 PowerPoint e 1.5 OneDrive: dados existem em `curriculum.js` (consts `curriculumPowerPoint14`/`curriculumOneDrive15`), mas **nenhum script os lê — não renderizam**. 10 flashcards.
- M2 (Redes): **renderiza** — `curriculum_m2.js` (unidade 2.1, 4 tópicos; subtópicos com objetivo, conteúdo, exemplos e exercícios) + 50 flashcards + `simulator_network.js` (ping e traceroute simulados, CIDR com cálculo real; não executa comandos no SO). Unidades 2.2–2.5 sem entrada de currículo.
- M3: **renderiza** — `index.html` inclui `curriculum_m3.js` e `flashcards_m3.js`; unidades 3.1 (2 tópicos) e 3.2 (3 tópicos) + 50 flashcards.
- Flashcards: **110/400** (m1=10, m2=50, m3=50). Questões: **82 de 320** (autorais em `questions.js` + motor `quiz-engine.js`; M1=32, M2=26, M3=24; faltam 238 — M4–M8 sem currículo). Gráficos: 0 de 5.
- Referências: LGPD (Lei 13.709/2018) verificada em `referencias/referencias-verificadas.md` com URL do planalto.gov.br + data 2026-10-20 (arts. 1°, 2°, 3°, 4°, 5°, 17, 18, 46). Demais fontes pendentes de verificação.
- M4–M8: não implementados (M4 tem apenas a referência LGPD verificada; nenhum dado de currículo).

## Pitfalls conhecidos

- `search.js`, `progress.js`, `charts.js`, `storage.js`, `accessibility.js` e `manifest.webmanifest` **continuam não existindo** — e o `index.html` removeu as tags `<script src>`/`<link rel="manifest">` que os referenciavam (ver comentário no fim do arquivo). Não há 404 silencioso, mas também não há busca, gráficos, storage extra, acessibilidade ou PWA: **não referenciar nenhuma dessas funcionalidades como operacional**. (`flashcards.js` **passou a existir**: UI de flashcards + repetição espaçada SM-2 simplificado. `quiz-engine.js` **passou a existir**: motor de simulados da Seção 10.2 — carregados pelo `index.html`.)
- **Declarações sem esquema unificado**: `curriculum.js` declara `curriculum` (o único lido pelo app) mais `curriculumPowerPoint14`, `curriculumWord12Supplement`, `curriculumOneDrive15` — declarados e **nunca lidos** por nenhum JS/HTML (1.4, 1.5 e o complemento de exemplos de 1.2 não renderizam). `curriculum_m2.js` declara `curriculumM2`; `curriculum_m3.js` declara `curriculumM3`. `navigation.js` consolida os três módulos em `window.apostilaDados`.
- Simulador Excel (2026-10-20): PROCX/PROCH/PROCV agora têm **busca real** (exata e aproximada; erros #N/A/#REF!/#VAL!/#DIV/0!/#NUM!); 23 funções + aliases EN; parser próprio sem `eval`; modelo de planilha em memória (`criarPlanilha`) com refs A1/absolutas/mistas, recálculo e `ajustarFormulaAoCopiar`; separador `;` (pt-BR) ou `,` com regra declarada no cabeçalho de `simulators.js`. Limitações remanescentes declaradas no cabeçalho: sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas; correspondência aproximada não valida ordenação; **não testado em navegador real** (verificado com `node --check` + smoke test em Node/vm, 111 asserts).
- `apostila-web/` e `entregas/` estão vazios — não é código funcional.
- Inventário/matriz já foram sincronizados (2026-10-20), mas **sempre que o código mudar, atualizá-los junto** — o código é a fonte de verdade.

## Regras de contribuição

- Trabalhar em incrementos completos e funcionais — nunca placeholder, nunca "implementar depois".
- Preservar conteúdo já validado ao corrigir defeitos.
- Documentar decisões e trade-offs nos arquivos de inventário/matriz (mantê-los em dia com o código).
- `Escrita.txt` é a fonte de verdade para requisitos; este AGENTS.md descreve o estado real do código.
