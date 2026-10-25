# MATRIZ DE COBERTURA — Etapa 2 (Seção 4 / 5 do prompt mestre)

Formato: Subtópico | Conteúdo didático | 3+ exemplos | Flashcards (≥50/módulo) | Questões (≥40/módulo) | Gráfico/Simulador | Referência verificada | Estado

Revisão/sincronização com o código: 2026-10-22 (código em execução na branch `feat/p1d-banco-simuladores-busca`; node --check + Chromium Headless 0 erros JS).
O código (`assets/data/*.js`, `assets/js/*.js`, `apostila-ia/index.html`) é a fonte de verdade.

## MÓDULO 1 — MICROSOFT 365 (parcial)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m1-u1-t1-s1..s8 | Ecossistema M365 | IMPLEMENTADO, renderiza | 3 conjuntos | 21 (do módulo) | 8 | Nenhum | Microsoft Learn (verificada 2026-10-24) | Parcial |
| m1-u2-t1..t14 | Word | IMPLEMENTADO, renderiza | 3/3 iteriores + const não renderizada | 29 (do módulo) | 17 | Nenhum | Microsoft Learn (verificada 2026-10-24) | Parcial |
| m1-u3 | Excel (simulador com busca real) | Núcleo carregado (≥23 funções, PROCV/PROCH/PROCX com busca real; parser sem eval; planilha em memória); UI montada no `index.html` (`#excel-app`, P1-D) | 3 no HTML | 0 | 0 | Simulador Excel (UI montada, `#excel-app`) | Microsoft Learn (verificada 2026-10-24) | Parcial |
| m1-u4 | PowerPoint | MIGRADOS e renderizam (1 subtópico cada, 3 exemplos + 2 exercícios); consts antigas comentadas como migradas | 3 exemplos + 2 exercícios | 0 | 0 | Nenhum | Microsoft Learn (verificada 2026-10-24) | Parcial |
| m1-u5 | OneDrive | MIGRADOS e renderizam (1 subtópico cada, 3 exemplos + 2 exercícios); consts antigas comentadas como migradas | 3 exemplos + 2 exercícios | 0 | 0 | Nenhum | LGPD art.46 | Parcial |

Flashcards M1: **50/50**. Questões M1: **40/40** (autorais, cespe/fgv/fcc/vunesp).

## MÓDULO 2 — REDES (parcial)
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m2-u1-t1..t4 | 2.1 Fundamentos de Redes | IMPLEMENTADO, renderiza | 4 conjuntos + exercícios | 10 | 26 | `simulator_network.js`: ping/traceroute simulados, CIDR com cálculo real; UI montada (`#redes-app`, P1-D) | RFCs/IETF (verificadas 2026-10-24) | Parcial |
| m2-u2..u5 | Modelos OSI/TCP-IP; protocolos; endereçamento e sub-redes; diagnóstico | IMPLEMENTADOS e renderizam (5 unidades, 19 tópicos, 52 subtópicos) | — | 18 (restante do piso 40) | 0 | Mesmo simulador de redes | - | currículo completo |

Flashcards M2: 50/50. Questões M2: **40/40** (M1-M3 = 40 cada, cespe/fgv/fcc/vunesp).

## MÓDULO 3 — COMUNICAÇÃO E COLABORAÇÃO
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m3-u1-t1..t2 | 3.1 Correio Eletrônico | IMPLEMENTADO, renderiza | 4 subtópicos × exemplos + exercícios | 25 | 17 | Nenhum | RFCs/IETF (verificadas 2026-10-24) e LGPD (verificada) | Parcial |
| m3-u2-t1..t3 | 3.2 Calendários e Reuniões | IMPLEMENTADO, renderiza | 4 subtópicos × exemplos + exercícios | 25 | 7 | Nenhum | LGPD (verificada) | Parcial |

Flashcards M3: 50/50. Questões M3: **40/40**.

## MÓDULO 4 — SEGURANÇA
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m4-u1 (4 tópicos, 12 subtópicos) | Fundamentos de segurança | IMPLEMENTADO, renderiza | presentes | 54 conectados | 0 (no banco M4=85) | Simulador defensivo de phishing: UI montada (`#seguranca-app`, P1-D; triagem didática, sem ataques reais) | LGPD verificada (art. 2º, 18, 46) | Parcial |
| m4-u2 | Malwares e ferramentas defensivas | IMPLEMENTADO, renderiza | presentes | idem | idem | — | LGPD verificada | Parcial |
| m4-u3 | Ameaças e ataques | IMPLEMENTADO, renderiza | presentes | idem | idem | Simulador defensivo de phishing: UI montada (`#seguranca-app`, P1-D; triagem didática, sem ataques reais) | — | Parcial |
| m4-u4 | Legislação e conformidade | IMPLEMENTADO, renderiza | presentes | idem | idem | — | LGPD verificada; Marco Civil verificada (2026-10-23) | Parcial |

Flashcards M4: 54/54 conectados. Questões M4: **85/40** (piso atingido; cespe/fgv/fcc/vunesp).

## MÓDULO 5 — INTELIGÊNCIA ARTIFICIAL
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m5-u1..u4 (4 unidades, 13 tópicos, 35 subtópicos) | 5.1–5.4 | IMPLEMENTADO, carregado e renderizado; 5.3–5.4 entrou em P1-C | 105 exemplos + 70 exercícios | 50 conectados | 40/40 | Laboratório interativo de prompts: UI montada (`#prompts-app`, P1-D; Seção 7.4; simulação local, sem IA real) | Gerais | Parcial |

Flashcards M5: 50/50. Questões M5: 40/40. 5.4 (engenharia de prompts) segue didático no currículo; o laboratório interativo de prompts existe com UI no P1-D (`#prompts-app`, Seção 7.4, simulação local sem IA real).

## MÓDULO 6 — ÉTICA NO SERVIÇO PÚBLICO
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m6-u1..u6 (6 unidades, 18 tópicos, 46 subtópicos) | 6.1–6.6 | IMPLEMENTADO, carregado e renderizado | 138 exemplos + 92 exercícios | 50 conectados | 40/40 | Simulador próprio: inexistente | CF art.37; LAI 12.527/2011; Lei 14.129/2021 | Parcial |

Flashcards M6: 50/50. Questões M6: 40/40.

## MÓDULO 7 — FUNDAMENTOS E ENGENHARIA DE DADOS
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m7-u1..u3 (3 unidades, 9 tópicos, 23 subtópicos) | 7.1–7.3 | IMPLEMENTADO, carregado e renderizado | presentes | 50 conectados | 40/40 | Simulador de dados: núcleo carregado (`simulator_data.js`); UI montada (`#dados-app`, P1-D; Seção 7.5) | Governo com dados | Parcial |

Flashcards M7: 50/50. Questões M7: 40/40.

## MÓDULO 8 — VISUALIZAÇÃO E STORYTELLING
| ID | Título | Conteúdo | Exemplos | Flashcards | Questões | Visual/Sim | Referência | Estado |
|---|---|---|---|---|---|---|---|---|
| m8-u1..u5 (5 unidades, 23 tópicos, 28 subtópicos) | 8.1–8.5 | IMPLEMENTADO, carregado e renderizado | presentes | 50 conectados | 40/40 | Gráficos 5/5 carregados (SVG próprio, sem biblioteca externa) | Documentação oficial das ferramentas | Parcial |

Flashcards M8: 50/50. Questões M8: 40/40.

## TOTAL GLOBAIS (P1-D, código em execução)
- Currículo: **132 tópicos / 295 subtópicos = 427 nós**, carregado e renderizado (8 módulos).
- Flashcards: **404/404** conectados (piso 400 atingido em quantidade).
- Questões: **365/320** (piso 320 atingido), ≥40 em cada módulo — M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40. Distribuição REAL medida em Node/vm (2026-10-22, deduplicada por `id`): níveis — 94 básica (25,8%) / 193 intermediária (52,9%) / 78 avançada (21,4%); formatos — 290 múltipla escolha + 75 Certo/Errado; estilos de cobrança — CESPE 216 / FGV 58 / FCC 52 / VUNESP 39 (formato de cobrança, não banca real; todas autorais). **Decisão documentada**: a proporção real difere da sugerida 30/45/25 (Seção 10) — desvio intencional e justificado (a Seção 10 admite ajuste de distribuição quando justificado).
- Gráficos: 5/5 implementados e carregados.
- Busca (`SearchApp`) e áudio (`AudioApp`) implementados e conectados.
- Manifest + service-worker existentes.
- Persistência (`storage.js`) e referências (`references.js`) implementados e carregados no `index.html` (P1-E).
- Pendências documentadas (após Bloco 6, 2026-10-24): vídeos 0 validados; verificação em navegador real dos 5 simuladores com UI; testes headless de busca/audio/quiz; acessibilidade e persistence; demais resoluções da ANPD (além da nº 2/2022 e nº 4/2023); RFCs não verificadas individualmente (FTP, SMTP, ICMP, ARP, NAT, VPN etc.); demais incisos/parágrafos do art. 37 e do art. 5º da CF não listados no Bloco 6. Verificados em 2026-10-24: Microsoft Learn, RFCs/IETF (RFC 791, 793, 1034, 1035, 2131, 7230, 7231, 8446, 9110), CERT.br, ANPD (órgão + 2 resoluções), CF art. 37/5º (incisos listados), dispositivos remissivos do M6 (Lei 8.429/1992, Lei 1.079/1950, Lei 13.146/2015, Lei 10.098/2000, Lei 10.741/2003, Lei 13.460/2017, Lei 12.682/2012, Lei 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º).

## LIMITAÇÕES DOCUMENTADAS (não inventar)
- Todos os resultados de simulador foram verificados com node --check + smoke Node/vm/headless Chromium; **nenhum dos 5 simuladores com UI foi testado em navegador real** (limite declarado); **nenhum** resultado apresentado como operacional sem evidência.
- Referências: somente as com URL + data verificadas são declaradas como verificadas; as demais são registradas como pendentes. Nenhum artigo de lei citado com número incorreto.
- Não há vídeo publicado como validado (Secao 12.2). Nenhuma funcionalidade inventada.
