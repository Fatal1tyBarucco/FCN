# MATRIZ DE COBERTURA — Etapa 2 (Seções 4 e 6 do prompt mestre)

Fonte de verdade: código em `apostila-ia/assets/data/curriculum*.js` (contagens verificadas em Node/vm em 2026-10-23).
Atualização: 2026-10-23 (P1-G). Escopo: 8 módulos, 37 unidades, 132 tópicos, 295 subtópicos = **427 nós**.

Legenda de estado:
- **Parcial** — componente existe e renderiza, mas falta validação em navegador real, vídeos validados, testes de acessibilidade/persistência ou referências verificadas com evidência.
- Nenhum módulo é declarado "completo" enquanto os critérios de aceite da Seção 18 não forem atendidos com evidência real.

## TOTAIS GLOBAIS

| Indicador | Valor real | Piso | Situação |
|---|---|---|---|
| Módulos | 8 | 8 | Quantidade atingida |
| Unidades | 40 | — | — |
| Tópicos | 132 | — | — |
| Subtópicos | 295 | — | — |
| Nós (tópicos+subtópicos) | 427 | — | Carregados e renderizados |
| Exemplos (total) | 885 | — | Contagem verificada por node (M1=111, M2=156, M3=105, M4=117, M5=105, M6=138, M7=69, M8=84) |
| Exercícios (total) | 590 | — | Contagem verificada por node (M1=74, M2=104, M3=70, M4=78, M5=70, M6=92, M7=46, M8=56) |
| Flashcards | 404 | ≥400 | Quantidade atingida (m1=50, m2=50, m3=50, m4=54, m5=50, m6=50, m7=50, m8=50) |
| Questões | 365 | ≥320 | Quantidade atingida (M1=40, M2=40, M3=40, M4=85, M5=40, M6=40, M7=40, M8=40) |
| Gráficos | 5/5 | 5 | Implementados (SVG próprio) |
| Simuladores com UI | 5/5 | 5 | Montados no `index.html` (`#excel-app`, `#redes-app`, `#seguranca-app`, `#prompts-app`, `#dados-app`) |
| Vídeos validados | 0 | — | Nenhum validado (Seção 12.2) |
| Testes em navegador real | 0 | — | Apenas `node --check` + smoke Node/vm |

Distribuição real das questões (medida em Node/vm, deduplicada por `id`): níveis — 94 básica (25,8%) / 193 intermediária (52,9%) / 78 avançada (21,4%); formatos — 290 múltipla escolha + 75 Certo/Errado; estilos — CESPE 216 / FGV 58 / FCC 52 / VUNESP 39. Desvio documentado em relação à sugestão 30/45/25 da Seção 10 (intencional e justificado).

## CONTAGENS POR MÓDULO (verificadas por node, 2026-10-23)

| Módulo | Unidades | Tópicos | Subtópicos | Nós | Exemplos | Exercícios | Flashcards | Questões |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| M1 | 5 | 23 | 37 | 60 | 111 | 74 | 50 | 40 |
| M2 | 5 | 19 | 52 | 71 | 156 | 104 | 50 | 40 |
| M3 | 5 | 14 | 35 | 49 | 105 | 70 | 50 | 40 |
| M4 | 4 | 13 | 39 | 52 | 117 | 78 | 54 | 85 |
| M5 | 4 | 13 | 35 | 48 | 105 | 70 | 50 | 40 |
| M6 | 6 | 18 | 46 | 64 | 138 | 92 | 50 | 40 |
| M7 | 3 | 9 | 23 | 32 | 69 | 46 | 50 | 40 |
| M8 | 5 | 23 | 28 | 51 | 84 | 56 | 50 | 40 |
| **Total** | **37** | **132** | **295** | **427** | **885** | **590** | **404** | **365** |

## MÓDULO 1 — MICROSOFT 365 E APLICAÇÕES DE ESCRITÓRIO (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1.1 Ecossistema Microsoft 365 | 1 | 8 | Presentes e renderizam | 3 por subtópico (intro/aplicação/múltipla/C-E) | Presentes | 50 (módulo) | 40 (módulo) | Nenhum | Microsoft Learn (verificação web P1-G, pendente confirmação manual) | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador; referência não verificada diretamente |
| 1.2 Microsoft Word | 14 | 15 | Presentes e renderizam | Presentes (≥3/subtópico) | Presentes | (módulo) | (módulo) | Nenhum | Microsoft Learn (pendente) | idem | Parcial | Const `curriculumWord12Supplement` declarada e não renderizada (sem script) |
| 1.3 Microsoft Excel | 6 | 12 | Presentes e renderizam | Presentes (≥3/subtópico) | Presentes | (módulo) | (módulo) | Simulador Excel (`#excel-app`, 23 funções, busca real PROCV/PROCH/PROCX, parser sem `eval`, planilha em memória) | Microsoft Learn (pendente) | `node --check` + smoke (111 asserts) | Parcial | Sem teste em navegador real; sem tabelas estruturadas/nomes definidos/R1C1/matrizes dinâmicas (limitação declarada) |
| 1.4 Microsoft PowerPoint | 1 | 1 | MIGRADO e renderiza (mínimo: 3 exemplos + 2 exercícios) | 3 | 2 | 0 dedicados | 0 dedicados | Nenhum | Microsoft Learn (pendente) | idem | Parcial | Cobertura mínima — faltam subtópicos do Escrita.txt §6 (layouts, Slide Mestre, animações, acessibilidade etc.) |
| 1.5 OneDrive e Colaboração | 1 | 1 | MIGRADO e renderiza (mínimo: 3 exemplos + 2 exercícios) | 3 | 2 | 0 dedicados | 0 dedicados | Nenhum | LGPD art. 46 (verificada) | idem | Parcial | Cobertura mínima — faltam subtópicos do Escrita.txt §6 (versionamento, compartilhamento, conflitos etc.) |

## MÓDULO 2 — REDES DE COMPUTADORES (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2.1 Fundamentos de Redes | 4 | 7 | Presentes e renderizam | 4 conjuntos + exercícios | Presentes | 50 (módulo) | 40 (módulo) | Simulador de redes (`#redes-app`: ping/traceroute simulados, CIDR com cálculo real; sem comandos no SO) | RFCs/IETF (verificação web P1-G, pendente confirmação manual) | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador real; referências RFC pendentes de confirmação direta |
| 2.2 Modelos OSI e TCP/IP | 3 | 9 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | RFCs/IETF (pendente) | idem | Parcial | Sem validação em navegador |
| 2.3 Protocolos | 4 | 12 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | RFCs/IETF (pendente) | idem | Parcial | Sem validação em navegador |
| 2.4 Endereçamento e sub-redes | 4 | 12 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | RFCs/IETF (pendente) | idem | Parcial | Sem validação em navegador |
| 2.5 Diagnóstico de redes | 4 | 12 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | RFCs/IETF (pendente) | idem | Parcial | Sem validação em navegador |

## MÓDULO 3 — COMUNICAÇÃO E COLABORAÇÃO (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3.1 Correio Eletrônico | 2 | 4 | Presentes e renderizam | 4 subtópicos × exemplos+exercícios | Presentes | 50 (módulo) | 40 (módulo) | Nenhum | RFCs/IETF + LGPD (só LGPD verificada) | `node --check` + smoke Node/vm | Parcial | Sem simulador; referências RFC pendentes |
| 3.2 Calendários e Reuniões | 3 | 4 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Nenhum | LGPD (verificada) | idem | Parcial | Sem simulador; sem teste em navegador |
| 3.3 Etiqueta digital, acessibilidade e comunicação profissional | 3 | 9 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Nenhum | LGPD (verificada) | idem | Parcial | Sem teste em navegador |
| 3.4 Uso institucional de plataformas de videoconferência | 3 | 9 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Nenhum | LGPD (verificada) | idem | Parcial | Sem teste em navegador |
| 3.5 Estudos de caso: reuniões inseguras e exposição acidental de dados | 3 | 9 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Nenhum | LGPD (verificada) | idem | Parcial | Sem teste em navegador |

## MÓDULO 4 — SEGURANÇA (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4.1 Fundamentos de segurança | 4 | 12 | Presentes e renderizam | Presentes | Presentes | 54 (módulo) | 85 (módulo) | Simulador defensivo de phishing (`#seguranca-app`, triagem didática local, sem ataques reais) | LGPD verificada (arts. 2º, 18, 46) | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador real |
| 4.2 Malwares e ferramentas defensivas | 4 | 12 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | LGPD verificada | idem | Parcial | Sem teste em navegador real |
| 4.3 Ameaças e ataques | 3 | 9 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | CERT.br (verificação web P1-G, pendente confirmação manual) | idem | Parcial | Referências pendentes de confirmação direta |
| 4.4 Legislação e conformidade | 2 | 6 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Nenhum | LGPD verificada; Marco Civil verificada (2026-10-23) | idem | Parcial | Sem teste em navegador real |

## MÓDULO 5 — INTELIGÊNCIA ARTIFICIAL (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5.1 Fundamentos de IA | 2 | 5 | Presentes e renderizam | 105 exemplos + 70 exercícios (módulo) | Presentes | 50 (módulo) | 40 (módulo) | Laboratório de prompts (`#prompts-app`, simulação local, sem IA real) | Gerais | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador real |
| 5.2 Aprendizado de máquina | 3 | 9 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Mesmo simulador | Gerais | idem | Parcial | Sem teste em navegador real |
| 5.3 IA generativa e LLMs | 4 | 11 | Presentes e renderizam (entrou em P1-C) | (módulo) | (módulo) | (módulo) | (módulo) | Mesmo simulador | Gerais | idem | Parcial | Sem teste em navegador real |
| 5.4 Engenharia de prompts | 4 | 10 | Presentes e renderizam (didático); laboratório interativo com UI montada no P1-D | (módulo) | (módulo) | (módulo) | (módulo) | Mesmo simulador | Gerais | idem | Parcial | Sem IA real; sem teste em navegador real |

## MÓDULO 6 — ÉTICA NO SERVIÇO PÚBLICO (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6.1 Princípios constitucionais da AP | 3 | 8 | Presentes e renderizam | 138 exemplos + 92 exercícios (módulo) | Presentes | 50 (módulo) | 40 (módulo) | Nenhum próprio | CF art. 37 caput (verificada) | `node --check` + smoke Node/vm | Parcial | Sem simulador próprio; sem teste em navegador |
| 6.2 Transparência (LAI e Governo Digital) | 3 | 10 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Nenhum | LAI 12.527/2011 e Lei 14.129/2021 (verificadas) | idem | Parcial | Sem teste em navegador |
| 6.3 Proteção de dados, rastreabilidade e responsabilização | 3 | 7 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Nenhum | LGPD (verificada) | idem | Parcial | Sem teste em navegador |
| 6.4 Uso institucional de redes sociais, conduta e netiqueta | 3 | 7 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Nenhum | CF art. 5º XXXIII (verificada) | idem | Parcial | Sem teste em navegador |
| 6.5 Acessibilidade e inclusão digital | 3 | 6 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Nenhum | LGPD/LAI (verificadas) | idem | Parcial | Sem teste em navegador |
| 6.6 Automação de decisões, supervisão humana, casos | 3 | 8 | Presentes e renderizam | (módulo) | (módulo) | (módulo) | (módulo) | Nenhum | CF art. 37/5º XXXIII (verificadas) | idem | Parcial | Sem teste em navegador |

## MÓDULO 7 — FUNDAMENTOS E ENGENHARIA DE DADOS (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7.1 Fundamentos Conceituais de Dados | 3 | 8 | Presentes e renderizam | Presentes | Presentes | 50 (módulo) | 40 (módulo) | Simulador de dados (`#dados-app`, Seção 7.5; simulação local) | Governo com dados | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador real |
| 7.2 Qualidade, Integração e Transformação de Dados | 4 | 10 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | Governo com dados | idem | Parcial | Sem teste em navegador real |
| 7.3 Governança, Anonimização e Proteção de Dados | 2 | 5 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmo simulador | LGPD (verificada) | idem | Parcial | Sem teste em navegador real |

## MÓDULO 8 — VISUALIZAÇÃO E STORYTELLING (Parcial)

| Unidade | Tópicos | Subtópicos | Objetivos/Conteúdo | Exemplos | Exercícios | Flashcards | Questões | Visual/Sim | Fontes | Testes | Estado | Limitação/Remanescente |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8.1 Fundamentos Visuais | 4 | 8 | Presentes e renderizam | Presentes | Presentes | 50 (módulo) | 40 (módulo) | Gráficos 5/5 (SVG próprio, sem biblioteca externa) | Documentação oficial das ferramentas (pendente verificação direta) | `node --check` + smoke Node/vm | Parcial | Sem teste em navegador real |
| 8.2 Gráficos Estatísticos | 5 | 6 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmos gráficos | Documentação oficial (pendente) | idem | Parcial | Sem teste em navegador real |
| 8.3 Estatística Aplicada à Leitura de Gráficos | 6 | 6 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmos gráficos | Documentação oficial (pendente) | idem | Parcial | Sem teste em navegador real |
| 8.4 Ferramentas de Análise e Business Intelligence | 4 | 4 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmos gráficos | Documentação oficial (pendente) | idem | Parcial | Sem teste em navegador real |
| 8.5 Storytelling com Dados | 4 | 4 | Presentes e renderizam | Presentes | Presentes | (módulo) | (módulo) | Mesmos gráficos | Documentação oficial (pendente) | idem | Parcial | Sem teste em navegador real |

## PENDÊNCIAS GLOBAIS (limitações declaradas)

1. **Validação em navegador real**: nenhum dos 5 simuladores com UI foi testado em navegador real (hoje: `node --check` + smoke Node/vm + Chromium Headless para JS). Busca, áudio e quiz não têm verificação headless dedicada.
2. **Vídeos**: 0 validados (Seção 12.2). Nenhum vídeo pode ser apresentado como operacional.
3. **Referências**: LGPD (13.709/2018), LAI (12.527/2011), Lei 14.129/2021, CF art. 37 caput e art. 5º XXXIII e Marco Civil (12.965/2014) verificadas com URL + data. Microsoft Learn, RFCs/IETF e CERT.br indexados via web em 2026-10-23, **pendentes de confirmação manual direta**. Demais incisos do art. 37/art. 5º da CF e dispositivos citados por remissão no M6 pendentes.
4. **Acessibilidade e persistência**: não testadas com evidência real (localStorage chave `apostila-ia-progresso`; modo privado/file:// podem limpar dados).
5. **Cobertura mínima**: M1.4 (PowerPoint) e M1.5 (OneDrive) possuem apenas 1 tópico/1 subtópico cada (migração mínima), embora o Escrita.txt §6 liste mais subtópicos para essas unidades.
6. **Const não renderizada**: `curriculumWord12Supplement` (complemento de exemplos de 1.2) declarada e não lida por nenhum JS/HTML.
7. **PWA**: manifest + service-worker existem; não testados em navegador real.

## CONCLUSÃO

A quantidade de nós (427), flashcards (404) e questões (365) atinge os pisos quantitativos, e todos os 8 módulos carregam e renderizam. No entanto, **nenhum módulo é declarado "completo"** porque faltam validação em navegador real, vídeos validados, testes de acessibilidade/persistência com evidência e confirmação direta de parte das referências. O estado real é **Parcial** em todos os módulos, conforme declarado acima.
