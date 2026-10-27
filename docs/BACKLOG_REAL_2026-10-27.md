# Backlog real — Apostila Web Interativa FCN (podado em 2026-10-27)

> Este arquivo substitui a leitura direta de `docs/PENDENCIAS.md` como backlog acionável. `docs/PENDENCIAS.md` permanece como histórico (574 linhas, 93 `[ ]`), mas muitos itens ali já foram superados. Este backlog lista apenas o que ainda está realmente pendente, com evidência.

**HEAD de referência:** `321901e` (push + pull_request CI success em 2026-10-27).
**PR #17:** Draft, aberto, não mergeado.

## P0 — bloqueiam "Fase 1 concluída"

- [ ] **P0-1** Adicionar fonte externa verificável a 102 questões que hoje têm apenas "Currículo Mx" (25,6% do banco):
  - M7: q-m7-01..40 (todas) — temas dados/engenharia de dados (DIKW, qualidade, ETL/ELT, anonimização, governança).
  - M8: q-m8-01..40 (todas) — visualização, Gestalt, gráficos, estatística aplicada, ferramentas BI, storytelling.
  - M2: q-m2-41..54 (modelos OSI/TCP-IP, IPv4/IPv6, TCP/UDP, DNS/DHCP, SSH, VPN/NAT/PAT, VLSM, diagnóstico).
  - M3: q-m3-41, 43, 44, 45, 46, 47.
  - M5: q-m5-41, 42.
  Evidência: `questions_m7.js:48`, `questions_m8.js:40`, `questions.js:3358`, `questions.js:3792`, `questions_m5.js:999`. Fontes: reutilizar as 149 entradas de `references.js` quando aplicável; adicionar novas apenas com URL verificada.
- [ ] **P0-2** Sincronizar documentos de governança linkados pelo app (já feito em 321901e para inventario/ e matriz/ raiz + apostila-ia/). Verificar no próximo deploy que o site publicado mostra 460/399.
- [ ] **P0-3** Commitar alterações de trabalho antes de declarar CI verde (feito em 321901e). Manter disciplina: nenhum "HEAD verde" sem commit.
- [ ] **P0-4** Revisão semântica independente das 399 questões (enunciado, gabarito, distratores, justificativa, profundidade, aderência curricular). 0% comprovada hoje. CI prova estrutura, não conteúdo.

## P1 — alto impacto pedagógico/editorial

- [ ] **P1-1** Distribuição de gabaritos: M7 zero B em 33 MC (C=39%); M1 zero E em 26 MC (B=58%); M6 A=43%/B=5%; M4 A+B=59%; M8 B=58%. Revisar alternativa a alternativa; nunca trocar gabarito correto só para equilibrar.
- [ ] **P1-2** Subtópico `curriculum.js:450` (`modulo-1-unidade-2-topico-14-sub-1`) tem 6 exemplos (2 de cada tipo). Decisão: manter 6 (corrigir total divulgado para 888 com nota de 3 excedentes) ou remover 3 (total 885). Registrada em `docs/DECISOES_ARQUITETURAIS.md`.
- [ ] **P1-3** Podar `docs/PENDENCIAS.md`: 93 itens abertos, muitos superados. Separar "aberto real" de "histórico".
- [ ] **P1-4** Reconciliar `docs/RELATORIO_TESTES.md` (ainda afirma 404/365 em seções históricas).

## P2 — não verificável offline / limites de ferramenta

- [ ] **P2-1** axe-core: 89 nós SVG "incomplete" (contraste de texto SVG). Cálculo manual indica conformidade (15,4:1 / 11,2:1 / 6,1:1 sobre #111318) mas não é inspeção visual.
- [ ] **P2-2** 20 iframes YouTube "frame-tested: incomplete" (conteúdo externo).
- [ ] **P2-3** Leitor de tela, teclado manual, WCAG manual, dispositivos físicos, PWA via HTTP/HTTPS — não comprovados. Único teste de teclado é automatizado.
- [ ] **P2-4** Verificação HTTP individual das 149 URLs de `references.js` (presença estrutural ≠ validação HTTP).
- [ ] **P2-5** Testes de interação dos 6 simuladores (entradas inválidas, limites, consistência).
- [ ] **P2-6** Persistência real: `storage.js` carregado, mas navegação/flashcards/questões ainda gravam por outra via (marcado P1 no PENDENCIAS antigo).

## Critérios de saída (Escrita.txt Seção 18)

1-4: implementados (8 módulos, conteúdo, objetivos, exemplos). 5-6: quantitativos atingidos (460 FC, 399 Q). 7: gabarito+comentários em 399/399. 8-9: gráficos e simuladores testados automat. 10-11: busca e áudio implementados (áudio não validado em navegador real). 12: 20 vídeos embed (disponibilidade regional não testada). 13: persistência roundtrip ok (limitações documentadas). 14: navegação responsiva (breakpoints). 15: sem botões sem ação/links inventados/placeholders (auditado). 16: abertura direta testada (file://). 17: todos os arquivos entregues. 18: instruções de uso (README). 19: auditoria final com ressalvas (docs/AUDITORIA_FINAL.md).

**Pendentes para aceite irrestrito:** P0 (fontes, revisão semântica) + P1 (gabaritos) + P2 (acessibilidade manual).
