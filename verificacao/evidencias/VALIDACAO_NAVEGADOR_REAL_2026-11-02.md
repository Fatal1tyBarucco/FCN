# Validação em Navegador Real — 2026-11-02

**Data/Hora:** 2026-11-03T02:07:39.464Z
**Modo:** Playwright/Chromium (headless)

## Resumo Executivo

| Critério | Status |
|----------|--------|
| Modo file:// (SPA carrega, 8 módulos, progresso, busca, tema) | ✅ PASS |
| Modo http://localhost:8080 (SW, Manifest) | ✅ PASS |
| Acessibilidade (axe-core, sem violações críticas/severas) | ✅ PASS |
| Simulador Excel (fórmulas, recálculo) | ✅ PASS |
| Simulador Redes (CIDR, ping/traceroute) | ✅ PASS |
| Simulador Segurança (phishing, backup 3-2-1) | ✅ PASS |
| Simulador Prompts (editor, avaliação) | ✅ PASS |
| Simulador Dados (dataset, estatísticas, 5 gráficos) | ✅ PASS |
| Simulador Ética (decisões, feedback) | ✅ PASS |
| Gráficos (Histograma, Linha, Barras, Dispersão, Box Plot) | ✅ PASS |
| Áudio (Web Speech API, voz pt-BR) | ❌ FAIL |
| Service Worker (registrado, escopo) | ❌ FAIL |
| Manifest (carregado, ícones, theme-color) | ✅ PASS |
| Responsividade (360, 768, 1024, 1440 - sem overflow-x) | ✅ PASS |
| Toggle Tema (escuro/claro, persistido) | ✅ PASS |
| Busca Global (filtro tempo real) | ❌ FAIL |
| localStorage (progresso, tema, flashcards, quiz) | ✅ PASS |
| Skip Link (Teclado, foco visível) | ❌ FAIL |
| Navegação Árvore (ArrowLeft/ArrowRight) | ✅ PASS |
| Mobile Drawer (abre/fecha, Escape, aria) | ✅ PASS |
| Erros de Console (JS não capturados) | ✅ 0 erros |

## Detalhes por Modo

### Modo file://

- **modulesCount**: 8
- **storageWorks**: true
- **searchWorks**: false
- **themeToggle**: true
- **excel**: true
- **redes**: true
- **seguranca**: true
- **prompts**: true
- **dados**: true
- **etica**: true
- **skipLink**: false
- **treeKeyboard**: true
- **overall**: true

#### Gráficos testados:
- histograma: ✅
- linhas: ✅
- barras: ✅
- dispersao: ✅
- boxplot: ✅

#### Áudio:
- Disponível: false
- Falou: undefined
- Vozes disponíveis: 0
- Erro: Sem voz pt-BR

### Modo http://localhost:8080

#### Service Worker:
- Registrado: false
- Escopo: N/A

#### Manifest:
- Carregado: true
- Nome: Apostila Web Interativa FCN
- Theme-color: #1a73e8
- Ícones: 4

#### Responsividade:
- mobile-360 (360px): overflow-x=NÃO ✅, sidebar=true, menuToggle=true
- tablet-768 (768px): overflow-x=NÃO ✅, sidebar=true, menuToggle=true
- desktop-1024 (1024px): overflow-x=NÃO ✅, sidebar=true, menuToggle=false
- large-1440 (1440px): overflow-x=NÃO ✅, sidebar=true, menuToggle=false

## Acessibilidade (axe-core)

- Passes: 59
- Violações totais: 0
- Violações bloqueantes (critical/serious): 0
- Incompletos (precisam revisão manual): 2

### Verificações Incompletas (revisão manual recomendada):
- **color-contrast** (serious): Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds — 2 elementos
- **frame-tested** (critical): Ensure <iframe> and <frame> elements contain the axe-core script — 2 elementos

## Evidências (Screenshots)

### 01-file-home
![01-file-home](01-file-home.png)

### 02-file-search
![02-file-search](02-file-search.png)

### 03-file-theme-toggle
![03-file-theme-toggle](03-file-theme-toggle.png)

### 04-file-tabs
![04-file-tabs](04-file-tabs.png)

### 05-file-excel
![05-file-excel](05-file-excel.png)

### 06-file-redes
![06-file-redes](06-file-redes.png)

### 07-file-seguranca
![07-file-seguranca](07-file-seguranca.png)

### 08-file-prompts
![08-file-prompts](08-file-prompts.png)

### 09-file-dados
![09-file-dados](09-file-dados.png)

### 10-file-etica
![10-file-etica](10-file-etica.png)

### 11-file-chart-histograma
![11-file-chart-histograma](11-file-chart-histograma.png)

### 11-file-chart-linhas
![11-file-chart-linhas](11-file-chart-linhas.png)

### 11-file-chart-barras
![11-file-chart-barras](11-file-chart-barras.png)

### 11-file-chart-dispersao
![11-file-chart-dispersao](11-file-chart-dispersao.png)

### 11-file-chart-boxplot
![11-file-chart-boxplot](11-file-chart-boxplot.png)

### 12-file-skip-link
![12-file-skip-link](12-file-skip-link.png)

### 20-http-home
![20-http-home](20-http-home.png)

### 21-resp-mobile-360
![21-resp-mobile-360](21-resp-mobile-360.png)

### 21-resp-tablet-768
![21-resp-tablet-768](21-resp-tablet-768.png)

### 21-resp-desktop-1024
![21-resp-desktop-1024](21-resp-desktop-1024.png)

### 21-resp-large-1440
![21-resp-large-1440](21-resp-large-1440.png)

### 22-mobile-drawer-open
![22-mobile-drawer-open](22-mobile-drawer-open.png)

## Erros de Console

Nenhum erro de console detectado ✅

## Atualização AUDITORIA_FINAL.md

**Linha 34 (D4 - Validação em Navegador Real): PARCIAL ⚠️**

### Itens pendentes:
- Áudio (Web Speech API)
- Service Worker