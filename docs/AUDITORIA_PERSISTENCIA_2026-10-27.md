# Auditoria de persistência real (P2-6) — read-only

Data: 2026-10-27. Escopo: `apostila-ia/assets/js/*.js` (16 arquivos). Modo: somente leitura (nenhum código alterado; nenhum commit/push).

## 1. Escopo e método

- Busca textual por `localStorage`, `IndexedDB`/`indexedDB`, `sessionStorage`, `StorageApp`/`ApostilaStorage` em todos os `.js` de `apostila-ia/assets/js/`.
- Leitura integral de `storage.js`, `progress.js`, `navigation.js`, `flashcards.js`, `quiz-engine.js` (os que efetivamente leem/escrevem).
- Verificação de `IndexedDB`: nenhuma ocorrência em JS/HTML do repositório. Persistência ocorre **exclusivamente** via `localStorage`.
- Chave única usada: `apostila-ia-progresso`. Nenhuma outra chave é gravada por nenhum módulo.

## 2. Sumário

- **Um único ponto de storage real**: `localStorage['apostila-ia-progresso']`. Todos os produtores (navigation, flashcards, quiz-engine) usam a **mesma chave**, com namespaces irmãos: `modulo-N` (visitas de tópico), `flashcards` (SM-2), `questoes` (histórico de simulados).
- `storage.js` expõe `window.ApostilaStorage`/`window.StorageApp` (infraestrutura genérica com `_v`/versão), mas **não é consumido** por navigation/flashcards/quiz-engine, que escrevem diretamente em `localStorage`. Confirmado pelo próprio cabeçalho de `storage.js` ("ESCOPO HONESTO").
- `progress.js` lê a chave (via `StorageApp` quando disponível, com fallback direto) para exibir painel consolidado; não grava.
- Controle de versão do formato: existe **apenas** em `storage.js` (`_v = 1`, com normalização trivial). Os produtores (navigation, flashcards, quiz-engine) **não** usam `_v` nem validam versão; assumem o objeto cru.
- Migração formal: inexistente. `storage.js.lerTudo()` apenas preserva chaves e força `_v = VERSAO` quando divergente; não migra estrutura.
- Tratamento de indisponibilidade: `storage.js` e `progress.js` testam disponibilidade (`__probe__`). navigation/flashcards/quiz-engine envolvem `localStorage` em `try/catch` e registram `console.error`, mas **não** bloqueiam UI nem avisam o usuário de forma visível (exceto `progress.js`, que renderiza aviso).
- `IndexedDB`: não utilizado em lugar nenhum.

## 3. Tabela — arquivo | chave | operação | versão | tratamento de erro | observação

| Arquivo | Chave | Operação | Versão | Tratamento de erro | Observação |
|---|---|---|---|---|---|
| `navigation.js` | `apostila-ia-progresso` | leitura + escrita (R/W) | nenhuma (objeto cru) | `try/catch` em `loadProgresso`/`saveProgresso`; `console.error` | namespace `modulo-N` (visitas de tópico: `tentativas`, `dataConclusao`, `acertos`, `dificuldade`). Releitura não feita antes de gravar em `registrarVisita`? Sim: `loadProgresso()` então `saveProgresso()` (read-modify-write). Sem `_v`. |
| `flashcards.js` | `apostila-ia-progresso` | R/W | nenhuma | `try/catch`; `console.error` | namespace `flashcards` (SM-2). `salvarRegistros` relê antes de gravar para preservar visitas do navigation.js. Export/import de backup com `versao: 1` (do pacote, não da chave). |
| `quiz-engine.js` | `apostila-ia-progresso` | R/W | nenhuma | `try/catch`; `console.error` | namespace `questoes` (`tentativas`, `desempenho`, `ultimaConfig`). `salvarEstado` relê antes de gravar. Limite de 50 tentativas. |
| `storage.js` | `apostila-ia-progresso` | R/W + remove | `_v = 1` (VERSAO) | probe `__probe__`; `try/catch` em todas as funções; retorna `false`/`{ _v }` | Infraestrutura genérica (`ApostilaStorage`/`StorageApp`). **Não consumida** pelos produtores. Migração trivial (força `_v`). Export/import genéricos. |
| `progress.js` | `apostila-ia-progresso` | leitura (R) | `_v: 1` no fallback (não valida) | probe; fallback direto se `StorageApp` ausente; renderiza aviso visível se indisponível | Painel consolidado (currículo, flashcards, simulados). Não grava. Usa `obterStorage()` com fallback. |
| `app.js` | — | nenhum | — | — | Apenas tema (`prefers-color-scheme`) + boot. Não toca storage. |
| `simulators.js` | — | nenhum | — | — | Estado volátil em memória. |
| `simulator_network.js` | — | nenhum | — | — | Estado volátil. |
| `simulator_security.js` | — | nenhum | — | — | Estado volátil. |
| `simulator_prompts.js` | — | nenhum | — | — | Estado volátil. |
| `simulator_data.js` | — | nenhum | — | — | Estado volátil. |
| `simulator_ethics.js` | — | nenhum | — | — | Estado volátil. |
| `flashcards.js` (já acima) | — | — | — | — | — |
| `quiz-engine.js` (já acima) | — | — | — | — | — |
| `charts.js` | — | nenhum | — | — | Estado volátil de propósito (documentado). |
| `search.js` | — | nenhum (leitura de progresso indireta?) | — | — | Busca não grava; usa `window.apostilaDados`. Não altera chave. |
| `audio.js` | — | nenhum (lê DOM/localStorage?) | — | — | Não grava; estado de reprodução volátil. |

## 4. Controle de versão e migração

- **Versão formal**: apenas `storage.js` define `VERSAO = 1` e grava `_v` no objeto. Os produtores não gravam `_v` (o objeto raiz pode acabar sem `_v` se o primeiro escritor for navigation.js).
- `storage.js.lerTudo()`: se `obj._v !== VERSAO`, copia todas as chaves e força `_v = VERSAO` (normalização, não migração). Se JSON inválido/objeto inválido → retorna `{ _v: VERSAO }` (perda do dado corrompido, sem backup).
- `progress.js` fallback: assume `_v: 1` sem verificar. `storage.js` (canônico) é preferido quando carregado (ordem: storage.js antes de progress.js no index.html).
- Nenhum módulo migra esquema de namespaces (ex.: renomear `modulo-1` → `modulo-1` já unificado). Histórico de chaves antigas (`modulo1` sem hífen) não é tratado.

## 5. Tratamento de indisponibilidade

- `storage.js.disponivel()`: probe write/remove `__probe__`. Retorna `false` em modo privado/bloqueio.
- `progress.js`: renderiza aviso visível (`pg-aviso`) e não calcula progresso.
- `navigation.js`/`flashcards.js`/`quiz-engine.js`: `try/catch` + `console.error`, mas a UI continua funcionando em memória (visitas não persistem). Sem aviso visível ao usuário.

## 6. Race conditions / concorrência

- Todos os três produtores usam read-modify-write síncrono do objeto completo. `flashcards.salvarRegistros` e `quiz.salvarEstado` relêem antes de gravar para preservar namespaces dos outros. `navigation.registrarVisita` também relê. Mesmo assim, cliques quase simultâneos podem perder uma atualização (JS single-thread, baixo risco). Sem lock/merge transacional. Documentado em `flashcards.js` (cabeçalho).

## 7. Achados principais (P2-6)

1. `storage.js` é "infraestrutura morta" para os produtores: eles não o consomem. A chave é manipulada diretamente. Qualquer consumidor novo que use `ApostilaStorage` e os produtores antigos divergem em convenções (ex.: `_v`).
2. Inconsistência de versão: `storage.js` grava `_v`; produtores não. O objeto resultante pode ou não ter `_v` dependendo da ordem de escrita.
3. Sem migração real nem validação de schema nos produtores. Dados corrompidos → `{}` silencioso (sem aviso).
4. Sem IndexedDB; sem criptografia; sem sincronização; sem servidor — conforme convenções do projeto.
5. Modo privado/file:// pode apagar dados — advertido na UI (progress.js, flashcards, quiz).

## 8. Recomendações (sem alterar código nesta auditoria)

- Decidir se `storage.js` vira a via única (refatorar produtores para usá-lo) ou se é removido/renomeado como "infraestrutura disponível".
- Unificar controle de versão: produtores deveriam gravar `_v` (ou storage.js ser a única via).
- Adicionar aviso visível nos produtores quando `localStorage` indisponível (hoje só console).
- Documentar política de migração para chaves antigas (`modulo1` sem hífen) se houver dados legados.

## 9. Limitações da auditoria

- Não executado em navegador real nesta rodada (read-only estático). Evidência histórica de CDP (2026-10-24) confirmou roundtrip de localStorage OK, mas não cobriu o estado atualizado (460 flashcards / 399 questões).
- Não verificado o conteúdo real de `localStorage` de um usuário; análise baseada no código.
- Nenhum código alterado; nenhum commit/push realizado.
