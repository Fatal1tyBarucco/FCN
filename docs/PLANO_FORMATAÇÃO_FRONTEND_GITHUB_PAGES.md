# Plano de Ação — Formatação Frontend do GitHub Pages

Objetivo: garantir que o site publicado em GitHub Pages (`https://fatal1tybarucco.github.io/FCN/`) seja visualmente idêntico ao site final validado localmente (`file://` e servidor estático), sem regressões de layout.

## 1. Diagnóstico atual (evidência)

- HTML publicado e local são idênticos (69.217 bytes); não há divergência de markup.
- `assets/css/styles.css` é servido com `200 text/css` e sem 404 de recursos.
- O layout atual depende de dois blocos concorrentes:
  1. `assets/css/styles.css` (folha externa, regras básicas + componentes específicos).
  2. `<style>` inline no `index.html` (chamado de "contingência file://"), com centenas de regras de componentes.
- O `<style>` inline vem **depois** do `<link>` da folha externa e tem a mesma especificidade; por isso sobrescreve variáveis e regras do CSS externo.
- Existe seletor inválido `.***` no bloco inline (duas ocorrências), que torna regras associadas inválidas e quebra estilos de blocos de código/flashcards.
- A folha externa não contém todas as classes geradas por JS (árvore curricular, flashcards, simuladores, auditoria, busca), então a renderização depende do bloco inline.
- Não há arquivo `.nojekyll`; embora hoje não haja arquivos com `_`, a ausência deixa o Pages sujeito ao processamento Jekyll em mudanças futuras.
- Não há validação visual automatizada (screenshots/diff) no CI; apenas sintaxe JS e smoke estrutural.

Conclusão: o site não está "sem CSS", mas a formatação é frágil, duplicada e inconsistente entre local/Pages. A paridade visual depende de ordem de carregamento e de um bloco inline gigante.

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

Entregável: `docs/MATRIZ_CSS_CLASSES.md` (ou CSV) com cobertura.

### Fase B — Consolidação do CSS

1. Mover todo o conteúdo do `<style>` inline para `assets/css/styles.css`, preservando ordem e regras.
2. Remover o bloco `<style>` do `index.html` (ou reduzir a CSS crítico de 10–15 linhas).
3. Corrigir `.***` para a classe real correspondente (provável `.fc-codigo`/bloco de código) em JS e CSS.
4. Unificar variáveis `:root` e remover duplicatas (header, main, section definidos duas vezes).
5. Garantir que `styles.css` seja o último CSS carregado (após qualquer CSS crítico).

Entregável: PR com diff de CSS e HTML.

### Fase C — Hardening para GitHub Pages

1. Adicionar `apostila-ia/.nojekyll` para desativar Jekyll.
2. Validar caminhos relativos case-sensitive (`assets/css/styles.css`, ícones, manifest).
3. Confirmar que `cp -R inventario matriz` no workflow não sobrescreve CSS/JS.
4. Testar em URL publicada após deploy.

### Fase D — Validação visual automatizada

1. Adicionar script de smoke visual (Playwright) que captura screenshots de:
   - topo (header + primeira seção)
   - árvore curricular expandida
   - flashcards
   - simulador Excel/rede
   - gráficos
   - modo escuro
2. Comparar dimensões/visibilidade de elementos-chave (header, main, section, `.curriculum-tree`, `.fc-cartao`, `.chart-card`).
3. Integrar ao workflow `validate-curriculum.yml` (artefato de screenshots).
4. Documentar limitações (WCAG com leitor de tela ainda manual).

### Fase E — Revisão e merge

1. Revisar PR (profile revisor) com foco em regressão visual.
2. Merge manual via GitHub UI (conforme regra do repo).
3. Atualizar `AGENTS.md`/`docs` com novo estado de CSS.

## 4. Critérios de aceite

- GitHub Pages visualmente idêntico ao `file://` (mesmas cores, espaçamentos, componentes).
- Nenhuma regra CSS depende de bloco inline no `index.html`.
- Nenhum seletor inválido (`.***`).
- `node --check` e smokes existentes continuam passando.
- Screenshots de validação anexados ao PR.

## 5. Riscos e mitigação

- Risco: mover CSS inline pode alterar cascata/ordem. Mitigação: mover em um único commit e validar visualmente antes/depois.
- Risco: classes dinâmicas não cobertas. Mitigação: matriz de classes + smoke de interação.
- Risco: cache do Pages. Mitigação: bust de cache via query string apenas se necessário; preferir deploy limpo.

## 6. Próximo passo recomendado

Executar Fase A (inventário) antes de qualquer edição de CSS, para evitar mover regras órfãs.


## Implementação registrada em 2026-10-28

- Shell responsivo implementado em `assets/js/ui-shell.js`, com menu lateral desktop, gaveta móvel, overlay, fechamento por Escape e navegação por âncoras.
- Árvore curricular renderizada pelo motor existente é movida para a sidebar; o painel de conteúdo do tópico permanece em área de estudo destacada no início do conteúdo principal.
- Recursos de apoio em vídeo foram reposicionados após o painel de progresso para não dominar a primeira tela.
- A folha CSS externa é a fonte visual canônica. A ordem de scripts garante que `navigation.js` crie a árvore antes de `ui-shell.js` reposicioná-la.
- Os testes estruturais foram atualizados para a nova contagem de 41 scripts externos e o teste de teclado foi atualizado para localizar a árvore na sidebar.
- Executar novamente `node verificacao/verificar-estrutura.js`, `node --check` para todos os JS, smoke tests e testes Playwright após a integração. Os resultados do HEAD atualizado ainda não estão disponíveis; não assumir aprovação.


## Atualização de implementação — 2026-10-28
A navegação lateral e a área de aprendizagem foram implementadas em `assets/js/ui-shell.js`. O shell preserva o wrapper original da árvore curricular para manter a delegação de eventos e sincroniza o título da área de estudo com o tópico selecionado. Os testes de fumaça e de interação foram adaptados à nova localização da árvore e agora incluem comportamento do menu responsivo e overflow móvel.

Foi criado `.github/workflows/validate-frontend.yml` para executar a suíte estrutural e de navegador em pull requests. Ainda não há execução bem-sucedida confirmada para este HEAD. O status de conclusão exige resultados reais de CI e inspeção visual do GitHub Pages após deploy.
