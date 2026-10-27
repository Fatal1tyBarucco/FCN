# Diagnóstico para Orquestração — FCN Apostila Web Interativa

> Gerado pelo orquestrador a partir da inspeção read-only do agente @explore (sessão ses_e85362052ffe4emNUseC32grpL), validado contra `git rev-parse HEAD`, scripts de auditoria e CI do GitHub Actions.
> **Modo:** governança/documentação. Nenhum arquivo de código (assets/) foi alterado neste diagnóstico.

| Campo | Valor |
|---|---|
| HEAD | `7c72c878cafcd131448ef3fd7950babebfe81ca1` |
| Branch | `feat/fase-1-orquestracao-20261025` |
| Data/hora local | 2026-10-26 21:40 (-03) |
| PR #17 | OPEN, Draft, mergeable, base main |
| Working tree | suja: 2 arquivos modificados (`RELATORIO_QUALIDADE_QUESTOES.md`, `RELATORIO_RASTREABILIDADE_ATIVOS.md`) + 2 CSVs não rastreados |

## 1. Contagens estruturais (recalculadas por leitura dos arquivos)

| Módulo | Unidades | Tópicos | Subtópicos | Exemplos | Exercícios | Flashcards | Questões |
|---|---:|---:|---:|---:|---:|---:|---:|
| M1 | 5 | 23 | 37 | 114 | 76 | 66 | 44 |
| M2 | 5 | 19 | 52 | 156 | 104 | 56 | 54 |
| M3 | 5 | 14 | 35 | 105 | 70 | 68 | 47 |
| M4 | 4 | 13 | 39 | 117 | 78 | 54 | 85 |
| M5 | 4 | 13 | 35 | 105 | 70 | 66 | 42 |
| M6 | 6 | 18 | 46 | 138 | 92 | 50 | 47 |
| M7 | 3 | 9 | 23 | 69 | 46 | 50 | 40 |
| M8 | 5 | 23 | 28 | 84 | 56 | 50 | 40 |
| **Total** | **37** | **132** | **295** | **888** | **592** | **460** | **399** |

- 427 nós (132 tópicos + 295 subtópicos). 399 IDs de questão únicos; 0 duplicados. 460 flashcards, 460 IDs únicos.
- `references.js`: 149 entradas (20 vídeo + 129 ref), 149 IDs únicos, todas com status `verificado`, url e dataVerificacao.
- Critérios quantitativos do Escrita.txt: flashcards ≥400 (460, ok), questões ≥320 (399, ok, mínimo 40 em M7/M8), 3 exemplos/natureza (294 subtópicos com exatamente 3 + 1 com 6), 5 gráficos (histograma, linhas, barras, dispersão, boxplot em charts.js), 6 simuladores + 14 contêineres.

## 2. Questões sem fonte externa identificável (lacuna de maior impacto)

0 questões com campo `fonte` vazio, mas `fonte` presente ≠ fonte verificável:

- **102 questões (25,6%)** com fonte apenas curricular interna ("Currículo Mx …"), sem URL/autor/obra:
  - M7: 40 (todas: q-m7-01..40) — `questions_m7.js:48`
  - M8: 40 (todas: q-m8-01..40) — `questions_m8.js:40`
  - M2: 14 (q-m2-41..54) — `questions.js:3358`
  - M3: 6 (q-m3-41,43,44,45,46,47) — `questions.js:3792`
  - M5: 2 (q-m5-41,42) — `questions_m5.js:999`
  - M1: 0
- **20 questões** com citação bibliográfica sem URL/DOI: M5=15 (livros: Russell&Norvig, Murphy, Hastie, Provost&Fawcett), M6=4 (dispositivos legais remetendo a referencias-verificadas.md), M1=1 (q-m1-32, fonte interna simulators.js).

Nota: o número 112 citado em PENDENCIAS.md ("36 M1, 40 M2, 36 M3") é histórico obsoleto (critério antigo = ausência do campo `fonte`).

## 3. Distribuição de gabaritos por módulo (MC)

| Módulo | A | B | C | D | E | MC | C/E |
|---|---:|---:|---:|---:|---:|---:|---:|
| M1 | 4 | 15 | 5 | 2 | 0 | 26 | 18 |
| M2 | 8 | 15 | 8 | 3 | 3 | 37 | 17 |
| M3 | 3 | 13 | 11 | 2 | 2 | 31 | 16 |
| M4 | 25 | 24 | 15 | 10 | 10 | 84 | 1 |
| M5 | 13 | 14 | 4 | 5 | 4 | 40 | 2 |
| M6 | 16 | 2 | 10 | 7 | 2 | 37 | 10 |
| M7 | 12 | 0 | 13 | 4 | 4 | 33 | 7 |
| M8 | 2 | 21 | 6 | 4 | 3 | 36 | 4 |
| Total | 83 | 104 | 72 | 37 | 28 | 324 | 75 |

Concentrações: M7 zero B (C=39%); M1 zero E (B=58%); M6 A=43%/B=5%; M4 A+B=59%; M8 B=58%; global A+B=57,7%.

## 4. Subtópicos com menos de 3 exemplos

Nenhum. 294 subtópicos com exatamente 3 exemplos; 1 subtópico com 6 (`curriculum.js:450`, `modulo-1-unidade-2-topico-14-sub-1`, 2 de cada tipo). 0 subtópicos sem objetivo/conteúdo/exemplos/exercícios. Consequência: 888 exemplos = 3 excedentes sobre 885 esperados.

## 5. Estado de CI no HEAD atual (7c72c87)

4 workflows success: `40426484499` (push), `40426478592` (push), `40426480430` (PR #17), `40426480469` (Code Quality). Evidências: 39 arquivos sintaxe ok; topics 132, flashcards 460, questions 399, unmapped 0; heurísticas flaggedQuestions 0, duplicateIds 0, duplicateContextStems 0; smoke pageErrors []; 6 contêineres de simulador montados. axe-core: 0 violações confirmadas, 2 incompletas (color-contrast 89 nós SVG; frame-tested 20 iframes).

Ressalva: CI valida SHA 7c72c87, não a árvore de trabalho (4 arquivos não commitados).

## 6. Pendências abertas em docs/PENDENCIAS.md

574 linhas, 129 [x], 93 [ ]. Agrupadas:
P1 Revisão semântica independente das 399 questões (~20 seções).
P2 Verificação de fontes oficiais (título, órgão, URL, data) e HTTP individual (~12).
P3 Acessibilidade manual e responsividade física (leitor de tela, teclado/foco, WCAG manual, dispositivos, PWA HTTP/HTTPS) (~18).
P4 Reconciliar inventário/matriz/relatórios históricos (~8).
P5 Distribuição de gabaritos (M1, M4, M5, M6, M7, M8) (~8).
P6 Qualidade didática de flashcards/exemplos/exercícios (duplicação semântica) (3).
P7 Testes de interação dos 6 simuladores (~4).
P8 Persistência real (storage.js carregado mas navegação/flashcards/questões gravam por outra via) (1, marcado P1).
P9 Governança (manter PR #17 Draft; não reordenar sem validar) (2).

Muitos itens históricos já superados; backlog não confiável.

## 7. Arquivos críticos

Presentes e íntegros: Escrita.txt (1206 linhas), README.md, index.html (575 linhas, 39 script src, 20 iframes com title único), 16 JS em assets/js, 8 curriculum + 8 flashcards + 6 questions + references.js, manifest, service-worker, verificacao/*, scripts/*, workflows, referencias/referencias-verificadas.md (417 linhas), 18 docs.

Ausentes vs AGENTS.md: apostila-web/, entregas/, package.json (coerente com "sem build"), docs/DIAGNOSTICO (este arquivo), workspace/phase5_smoke.js na raiz (AGENTS dizia apostila-ia/).

## 8. Achado de alto impacto — documentos de governança divergentes

Existem 4 cópias de inventário/matriz com conteúdos diferentes; o app linka as desatualizadas:
- `inventario/INVENTARIO_CURRICULAR.md` e `apostila-ia/inventario/...` (md5 8b50a234) — OBSOLETO: "404 flashcards, 365 questões", M1 50/40.
- `matriz/MATRIZ_COBERTURA.md`, `apostila-ia/matriz/...`, `docs/MATRIZ_COBERTURA.md` (md5 1148b52e) — OBSOLETO: "Flashcards M1 50/50, Questões M1 40/40", M6 40/40, 404/365.
- `apostila-ia/INVENTARIO_CURRICULAR.md` (md5 ff7e6132) — mais obsoleto: "309 nós", 404/365.
- `apostila-ia/MATRIZ_COBERTURA.csv` (464 bytes) — OBSOLETO: 885/590/404/365.
- `docs/INVENTARIO_CURRICULAR.md` (md5 4ff7c5e3) — ATUALIZADO (460/399/888/592) mas não linkado; erros internos: M6=44 (real 47) em :74; "365 IDs" em :119 (real 399).
- `docs/MATRIZ_COBERTURA.csv` (296 linhas) — ATUALIZADO: 295 subtópicos, 888 exemplos, 592 exercícios.

Consequência: quem abre o site publicado e clica em "Fonte: inventario/INVENTARIO_CURRICULAR.md" (index.html:176) ou "Matriz completa" (index.html:187) lê números errados. Único conjunto atualizado está em docs/, que o app não referencia.

## 9. Lacunas priorizadas

P0 (bloqueiam "Fase 1 concluída"):
1. 102 questões (25,6%) sem fonte externa — M7 e M8 100% sem fonte externa.
2. Documentos linkados pelo app com contagens falsas (inventario/ e matriz/ raiz e apostila-ia/ obsoletos).
3. CI verde não cobre árvore de trabalho (4 arquivos não commitados).
4. Revisão semântica independente das 399 questões = 0% comprovada (CI prova estrutura, não conteúdo).

P1 (alto impacto pedagógico/editorial):
5. M7 zero B em 33 MC; M1 zero E em 26 MC.
6. Subtópico com 6 exemplos duplicados (curriculum.js:450) infla total publicado.
7. docs/INVENTARIO_CURRICULAR.md contradiz a si mesmo (M6=44 vs 47; 365 vs 399).
8. 93 itens abertos em PENDENCIAS.md, muitos superados.

P2 (não verificável offline / limites de ferramenta):
9. axe-core 89 nós SVG "incomplete" (contraste de texto SVG) — cálculo manual indica conformidade mas não é inspeção visual.
10. 20 iframes frame-tested incomplete (conteúdo externo YouTube).
11. Leitor de tela, teclado manual, WCAG manual, dispositivos físicos, PWA HTTP/HTTPS — não comprovados.
12. Verificação HTTP individual das 149 URLs de references.js — presença é estrutural; nenhuma requisição feita.

## 10. Não verificado (marcação explícita)

Status HTTP real das 149 URLs; conteúdo interno dos 20 iframes YouTube; acessibilidade com leitor de tela/WCAG manual; comportamento em dispositivos físicos e Firefox/Safari; registro de Service Worker em HTTP/HTTPS; equivalência semântica campo a campo da matriz; duplicação semântica entre 460 flashcards; corretude factual de enunciados/gabaritos; se deploy-pages já publicou a versão atual.

## 11. Recomendação de sequência para o orquestrador

1. Commitar os 2 relatórios + 2 CSVs pendentes e sincronizar inventario/ e matriz/ (raiz) a partir de docs/, depois cp -R inventario matriz apostila-ia/ → resolve P0-2 e P0-3 com um ciclo de CI.
2. Corrigir docs/INVENTARIO_CURRICULAR.md:74 (44→47) e :119 (365→399) antes de copiar.
3. Lote M7/M8 de fontes: 80 questões sem fonte externa — maior bloco homogêneo, melhor retorno.
4. Lote M1 E=0 e M7 B=0: revisar alternativa a alternativa; nunca trocar gabarito correto só para equilibrar.
5. Decidir sobre curriculum.js:450: manter os 6 exemplos (corrigir total divulgado para 888 com nota) ou remover os 3 excedentes (total 885).
6. Podar PENDENCIAS.md: separar "aberto real" de "histórico superado".
7. Manter PR #17 em Draft até P0 e P1 fechados; CI verde ≠ conclusão.
