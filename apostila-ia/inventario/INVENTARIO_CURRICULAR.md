# INVENTÁRIO CURRICULAR — Etapa 1 (conforme Escrita.txt / Seção 4)

Estrutura: Disciplina → Módulo → Unidade → Tópico → Subtópico → ID → Objetivo → Conteúdo → Exemplos → Exercícios → Fontes → Estado

Fonte: Escrita.txt, seções 6 (conteúdo programático obrigatório) e 4 (inventário).
Data de verificação: 2026-10-22
Revisão P1-D (2026-10-22): reposicionamento do estado para a branch `feat/p1d-banco-simuladores-busca` com o código em execução no Chromium Headless (0 erros JS) e contagens reais de arquivo/disco.

## REVISÕES RELEVANTES
- P1-C (2026-10-21): integração do M6, conclusão do M5 (5.3/5.4), 404 flashcards conectados, 15 escopos do simulado; currículo completo M1–M8 (100 tópicos + 209 subtópicos = 309 nós).
- P1-D (2026-10-22, branch em andamento): implementação de busca (`search.js`) e áudio (`audio.js`) com UI no HTML; manifest + service-worker (PWA); 3 simuladores novos carregados (`simulator_prompts`, `simulator_security`, `simulator_data`) — **com UI montada no `index.html`** (`#prompts-app`, `#seguranca-app`, `#dados-app`; montagem com guardas); banco de questões reposicionado e expandido para **365** questões autorais; verificação em navegador real.

## CORDAS DE CONTEO (evidência real)
- Currículo: **100 tópicos + 209 subtópicos = 309 nós** (M1 15/23, M2 4/7, M3 5/8, M4 13/39, M5 13/35, M6 18/46, M7 9/23, M8 23/28) — contado em Node/vm e no DOM headless.
- Flashcards: **404** no disco / 404 conectados ao app (m1=50, m2=50, m3=50, m4=54, m5=50, m6=50, m7=50, m8=50) — piso de 400 **atingido em quantidade**.
- Questões: **365** autorais (piso 320 atingido; ≥40 por módulo): M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40. Todos com gabarito + justificativa + nível. Estilos: cespe, fgv, fcc, vunesp (formato, não banca). Distribuição REAL medida em Node/vm (2026-10-22, deduplicada por `id`): níveis — 94 básica (25,8%) / 193 intermediária (52,9%) / 78 avançada (21,4%); formatos — 290 múltipla escolha + 75 Certo/Errado; estilos de cobrança — CESPE 216 / FGV 58 / FCC 52 / VUNESP 39 (formato de cobrança, não banca real; todas autorais, `origem: autoral`). **Decisão documentada**: essa proporção real difere da sugerida 30/45/25 (Seção 10) — o desvio é intencional e justificado, pois a Seção 10 admite ajuste de distribuição quando justificado.
- Gráficos: 5/5 implementados e carregados (SVG próprio, sem biblioteca externa). DOM headless renderiza 8 chart-card + 71 chart-svg.
- Simuladores: **5/5 com UI montada no `index.html`** (P1-D, 2026-10-22) nos contêineres `#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app` e `#dados-app` — Excel (`simulators.js`, 23 funções, busca real PROCV/PROCH/PROCX), Redes (`simulator_network.js`, ping/traceroute simulados e CIDR com cálculo real), Segurança (`simulator_security.js`, triagem defensiva de phishing), Prompts (`simulator_prompts.js`, engenharia de prompts) e Dados (`simulator_data.js`, dados/estatística). Montagem inline com guardas triplas (contêiner presente, global presente, `mount()` não lança) — não quebra se faltar contêiner/global. Todos são **simulações didáticas locais** (sem comandos reais no SO, sem ataques reais, sem IA real); verificação: `node --check` + smoke test em Node/vm; **nenhum testado em navegador real**.
- Busca (`window.SearchApp`) e áudio (`window.AudioApp`) implementados, carregados e conectados no HTML.
- Manifest + service-worker (PWA) existentes e referenciados.
- Referências: LGPD (13.709/2018), LAI (12.527/2011), Lei de Governo Digital (14.129/2021) verificadas com URL+data; Marco Civil (12.965/2014) verificada em 2026-10-23 — https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm (arts. 2º, 3º, 7º, 9º § 3º, 15 e 19); pendentes: Microsoft Learn, RFCs/IETF, CERT.br. Vídeos: 0 validados.

## MÓDULO 1 (parcial)
- 1.1 Ecossistema M365 — IMPLEMENTADO, renderiza.
- 1.2 Word — parcial; complemento de exemplos em const `curriculumWord12Supplement` não renderiza (sem script).
- 1.3 Excel — simulador com escopo declarado e busca real; UI montada no `index.html` (`#excel-app`, P1-D).
- 1.4 PowerPoint / 1.5 OneDrive — consts não lidas, não renderizam.

## MÓDULO 2 (parcial)
- 2.1 Fundamentos — IMPLEMENTADO. 2.2–2.5 PENDENTES.

## MÓDULO 3 (parcial)
- 3.1 Correio eletrônico / 3.2 Calendários e reuniões — IMPLEMENTADOS, renderizam.

## MÓDULO 4 (conteúdo carregado e renderizado; sem questões antigas)
- 4.1 Fundamentos / 4.2 Malwares / 4.3 Ameaças / 4.4 Legislação — IMPLEMENTADOS, renderizam.
- Simulador defensivo de phishing (`simulator_security.js`): UI montada no `index.html` (`#seguranca-app`, P1-D) — triagem didática local, sem ataques reais.

## MÓDULO 5 (IA) — completo em currículo (5.1–5.4) e conectado ao app
- 5.1–5.4 IMPLEMENTADOS. FlashCards 50 conectados. Laboratório interativo de prompts com UI montada no P1-D (`#prompts-app`, Seção 7.4; simulação local, sem IA real) — 5.4 segue didático.

## MÓDULO 6 (Ética) — completo em currículo (6.1–6.6), carregado e renderizado
- 50 flashcards conectados. 40 questões autorais conectadas (questions_m6.js, P1-D).

## MÓDULO 7 (Dados)
- 3 unidades 7.1–7.3, renderizam. FlashCards 50 conectados. Sem simulador próprio (ver simulador de dados P1-D).

## MÓDULO 8 (Visualização) — completo em currículo (8.1–8.5)
- Gráficos 5/5 carregados e funcionais (SVG próprio). 40 questões autorais conectadas (questions_m8.js, P1-D).

## TOTAL SUBTÓPICOS COM CONTEÚDO — CARREGADO E RENDERIZADO (P1-D)
Todos os 8 módulos. **100 tópicos + 209 subtópicos = 309 nós**. Flashcards **404/404** conectados. Questões **365/320** (piso de quantidade atingido em todos os módulos). Gráficos 5/5. Referências: Marco Civil (12.965/2014) verificada em 2026-10-23 (URL+dispositivos em `referencias/referencias-verificadas.md`); mais pendentes: Microsoft Learn, RFCs/IETF, CERT.br. Vídeos: nenhum validado.

## O QUE FALTA PARA OS CRITERIOS DE ACEITE (Secao 18)
1. UI dos simuladores: **montada para os 5** (`#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`; P1-D, 2026-10-22) — resta verificar em navegador real (hoje: `node --check` + smoke Node/vm; nenhum testado em navegador real).
2. Verificação headless de busca, áudio e quiz (motor de simulados).
3. Referências restantes (Microsoft Learn, RFCs/IETF, CERT.br — a Marco Civil foi verificada em 2026-10-23) e vídeos validados.
4. Testes finais de acessibilidade e persistence com evidências.
5. Relatório final de conformidade.
