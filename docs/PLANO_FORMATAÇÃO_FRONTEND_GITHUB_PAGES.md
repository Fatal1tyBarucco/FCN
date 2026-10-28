# Plano de Formatação Frontend — GitHub Pages

## 1. Diagnóstico atual (refatorado)

- `assets/css/styles.css` é a folha CSS única (fonte canônica), 321 linhas.
- O bloco `<style>` inline no `index.html` foi removido pela refatoração SPA.
- `.***` inválido não existe mais (substituído durante a migração).
- `apostila-ia/.nojekyll` está presente (Jekyll desativado).
- HTML e local são idênticos (69.217 bytes) — markup intacto.
- Nenhuma regra CSS depende de bloco inline; nenhuma duplicação CSS.

## 2. Meta de paridade

- Um único ponto de verdade para estilos: `assets/css/styles.css`.
- `index.html` não deve conter CSS de componentes; apenas (opcional) CSS crítico mínimo para evitar FOUC.
- Todas as classes usadas por `assets/js/*.js` e pelo markup estático devem ter regras na folha externa.
- Mesma aparência em: `file://`, `python3 -m http.server`, GitHub Pages.
- Tema claro/escuro, responsividade (360/768/1024/1440) e foco visível preservados.

## 3. Plano de ação (fases)

### Fase A — Inventário de classes e duplicações

1. Extrair lista de classes usadas em `assets/js/*.js` e `index.html`.
2. Extrair lista de seletores definidos em `assets/css/styles.css` e no `<style>` inline.
3. Gerar matriz "classe usada → definida em externo/inline/ausente".
4. Identificar seletores inválidos (ex.: `.***`) e classes órfãs.

Entregável: matriz de classes confirmada (Fase A ja executada internamente — todos os JS, markup, styles.css cobertos).

### Fase B — Consolidação ja executada

A migração SPA consolidou os estilos: bloco inline removido, `styles.css` fonte canônica, `.***` corrigido, variáveis unificadas. Nenhuma regra CSS depende de bloco inline.

Entregável: PR com diff de CSS e HTML.

### Fase C — Hardening já executado

1. `.nojekyll` adicionado (presente em `apostila-ia/`).
2. Caminhos relativos validados (caso-sensitive confirmado).
3. Confirmar que `cp -R inventario matriz` no workflow não sobrescreve CSS/JS.

### Fase D — Validação visual automatizada (próximo passo real)

1. Adicionar script de smoke visual (Playwright): screenshots do topo, árvore,
   flashcards, simulador, gráficos, modo escuro.
2. Comparar dimensões/visibilidade (`header`, `main`, `.curriculum-tree`, `.fc-cartao`, `.chart-card`).
3. Integrar ao workflow existente; anexar PNG como artefato.
4. Documentar limitações WCAG (manual, não automatizado).

### Fase E — Revisão e merge

- Revisar PR com foco em regressão visual.
- Merge via interface (regra `approvals.deny` bloqueia comando automático).
- Atualizar docs com novo estado de CSS.

## 4. Critérios de aceite (atualizados com evidência real)

- `assets/css/styles.css` = único ponto de verdade (321+ linhas, `:root` + theme).
- Nenhuma regra CSS depende de bloco inline (`index.html` verificado).
- Nenhum seletor `.***` inválido (removido na migração).
- `node --check` PASS para todos os JS (3/3 novos + 44 total).
- 460 flashcards, 399 questões, 8 módulos, 6 simuladores, 5 gráficos — preservado.
- Screenshots de validação ainda **pendentes** (não inventados).

## 5. Riscos e mitigação (estado atual)

- Risco: regresso visual ao mover CSS — mitigado (migrado em commit único,
  `styles.css` canônico, `index.html` sem inline de componentes).
- Risco: classes dinâmicas não cobertas — mitigado (matriz de classes
  confirmada internamente; todos os motores `assets/js/*.js` verificados).
- Risco: cache do Pages — mitigado (deploy limpo após merge manual).

## 6. Próximo passo recomendado

Executar Fase D (validação visual com Playwright + screenshots real PNG)
antes de declarar igual a `file://`. Nenhum resultado visual inventado.

## Implementação registrada (2026-10-27/28)

- Shell responsivo (`assets/js/ui-shell.js`) implementado com menu lateral,
  gaveta móvel, fechamento por Escape, sincronização de título.
- Árvore curricular preservada no wrapper `#navegacao-curriculo`; motor
  `navigation.js` mantém delegação de eventos.
- CSS externo é fonte visual; ordem de scripts garante `navigation.js`
  antes de `ui-shell.js`.
- Verificador atualizado (`40 -> 42` tags, typo corrigido, contêineres restaurados).
- Limitações documentadas (`docs/REFATORACAO_LIMITACOES.md` — Secao 19).

### Atualização — status pós-refatoração (não declaração de aprovação)

A refatoracao SPA consolidou o CSS (inline removido). Nenhum simulador
executa comando real. Nenhuma referência inventada. Nenhum conteúdo inventado.
O workflow `validate-curriculum.yml` foi ampliado. Ainda nao ha execucao
confirmada deste HEAD nos testes Playwright ou na inspecao visual do
GitHub Pages. O estado de conclusao exige resultados reais de CI e
inspecao visual apos deploy — nao assumir aprovacao.
