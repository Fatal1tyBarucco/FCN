# INVENTÁRIO CURRICULAR — FCN (Apostila Web Interativa)

Fonte de requisitos: `Escrita.txt` (prompt mestre), seções 1–4 e 6.
Fonte de verdade do estado atual: código em `apostila-ia/assets/data/*.js` (contado via Node/vm em 2026-10-23).
Data de verificação: 2026-10-23.
Estado real: **8 módulos carregados, 132 tópicos + 295 subtópicos = 427 nós**, 885 exemplos, 590 exercícios, 404 flashcards, 365 questões autorais, 6 simuladores com UI montada, 5 gráficos SVG.

---

## 1. PAPEL, RESPONSABILIDADE E MISSÃO

Atuação simultânea como arquiteto frontend sênior, desenvolvedor fullstack SPA, designer instrucional sênior, professor de TI/redes/segurança/produtividade/IA/engenharia/visualização de dados, especialista em concursos públicos brasileiros (CESPE/CEBRASPE, FGV, FCC, VUNESP), revisor técnico (precisão conceitual, atualização normativa, rastreabilidade) e engenheiro de qualidade (testes funcionais, acessibilidade, compatibilidade, persistência, integridade de dados).

Missão: projetar, implementar, testar e entregar uma Apostila Web Interativa Definitiva de TI e Dados, com profundidade de livro-texto, clareza didática profissional e rigor de preparação para concursos. O produto final funciona como ambiente autossuficiente de estudos; referências externas verificam informação, mas o conteúdo essencial está incorporado ao projeto.

Regra de não-invenção: referências, artigos de lei, IDs de vídeo, URLs e resultados de teste só são declarados "verificados" com evidência real (URL + data). Funcionalidade não é apresentada como operacional sem teste real.

---

## 2. PRINCÍPIO FUNDAMENTAL: APRENDIZAGEM COMPLETA

A simples menção de um conceito não significa que foi ensinado. Um assunto só é considerado estudado quando o aluno consegue: definir com precisão; explicar origem/motivação; compreender fundamentos e mecanismos; identificar componentes, etapas, propriedades e dependências; diferenciar conceitos semelhantes; reconhecer vantagens, limitações, exceções e riscos; executar procedimentos/resolver problemas; interpretar exemplos, tabelas, fórmulas, comandos, diagramas e resultados; identificar erros comuns e armadilhas de provas; aplicar em situações novas; justificar tecnicamente; demonstrar domínio em exercícios de diferentes níveis.

Regra de completude: nenhum tópico é concluído apenas por possuir título, parágrafo introdutório, imagem, tabela ou questão de memorização. O conteúdo avança da compreensão inicial até aplicação e análise crítica. Frases genéricas ("existem outros métodos", "consulte a documentação", etc.) não substituem conteúdo. Cobertura integral de disciplina exige inventário curricular verificável (esta seção).

---

## 3. ARQUITETURA (estado real)

- SPA estática em vanilla HTML/CSS/JS. Sem build, sem framework, sem `package.json`, sem CI, sem testes automatizados, sem README. App em `apostila-ia/` (`index.html` não está na raiz).
- Execução: Modo A abertura direta de `index.html` (requisito principal); Modo B servidor estático opcional.
- Arquivos JS: `app.js`, `navigation.js`, `simulators.js`, `simulator_network.js`, `simulator_security.js`, `simulator_prompts.js`, `simulator_data.js`, `flashcards.js`, `quiz-engine.js`, `charts.js`, `search.js` (defer), `audio.js` (defer), `storage.js`, `progress.js`, `accessibility.js`.
- Dados: `curriculum.js` (M1) + `curriculum_m2.js`…`curriculum_m8.js`, `flashcards_m1.js`…`flashcards_m8.js`, `questions.js` + `questions_m4.js`…`questions_m8.js`, `references.js`. Todos carregados no `index.html`.
- Navegação: `navigation.js` é dono único; descobre módulos dinamicamente (varredura `typeof` 1–8, sem `eval`), renderiza árvore de M1–M8 em `#curriculum`, exibe objetivo/conteúdo em painel, grava progresso em `localStorage` chave `apostila-ia-progresso`.
- Esquema de chaves unificado: `modulo-N` com hífen (`modulo-1`…`modulo-8`).
- Persistência: `localStorage` (`apostila-ia-progresso`); IndexedDB não utilizado. Service Worker + manifest (PWA) condicionais, não testados em navegador real.
- Estilos: variáveis CSS em `:root`; tema escuro via `prefers-color-scheme`.
- Dados curriculares: objetos JS literais (sem `eval`, sem fetch externo).
- Deploy: GitHub Pages via `.github/workflows/deploy-pages.yml` (`node --check` em todos `assets/**/*.js`, publica `apostila-ia/` como raiz); cópia de `inventario/` e `matriz/` para dentro do app antes do upload.

---

## 4. INVENTÁRIO CURRICULAR (legível por máquina)

Estrutura: Disciplina → Módulo → Unidade → Tópico → Subtópico → ID → Objetivo → Conteúdo → Exemplos → Exercícios → Fontes → Estado.

Identificadores: estáveis e únicos (427/427 sem duplicata). Dois formatos coexistem no código (ambos estáveis):
- Formato longo: `modulo-X-unidade-Y-topico-Z` (tópicos em todos os módulos) e `modulo-X-unidade-Y-topico-Z-sub-W` (subtópicos do M1).
- Formato compacto: `mX-uY-tZ-sW` (subtópicos de M2–M8).

Verificação automatizada (Node/vm, 2026-10-23): 427 IDs, 427 únicos, 0 duplicatas.

### 4.1 Contagens por módulo (verificadas por node)

| Módulo | Título | Unidades | Tópicos | Subtópicos | Nós (t+s) | Exemplos | Exercícios | Flashcards | Questões | Estado |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| M1 | Microsoft 365 e Aplicações de Escritório | 5 | 23 | 37 | 60 | 111 | 74 | 50 | 40 | Parcial |
| M2 | Redes de Computadores | 5 | 19 | 52 | 71 | 156 | 104 | 50 | 40 | Completo |
| M3 | Comunicação e Colaboração | 5 | 14 | 35 | 49 | 105 | 70 | 50 | 40 | Completo |
| M4 | Segurança da Informação e Governança Digital | 4 | 13 | 39 | 52 | 117 | 78 | 54 | 85 | Completo |
| M5 | Inteligência Artificial | 4 | 13 | 35 | 48 | 105 | 70 | 50 | 40 | Completo |
| M6 | Ética e Responsabilidade Digital no Serviço Público | 6 | 18 | 46 | 64 | 138 | 92 | 50 | 40 | Completo |
| M7 | Fundamentos e Engenharia de Dados | 3 | 9 | 23 | 32 | 69 | 46 | 50 | 40 | Completo |
| M8 | Visualização, Análise e Storytelling com Dados | 5 | 23 | 28 | 51 | 84 | 56 | 50 | 40 | Completo |
| **Total** | — | **37** | **132** | **295** | **427** | **885** | **590** | **404** | **365** | — |

### 4.2 Escopo por módulo (conforme Escrita.txt Seção 6)

- **M1 — Microsoft 365 e Aplicações de Escritório (parcial)**: 1.1 Ecossistema M365 (8 subtópicos), 1.2 Word (14 tópicos), 1.3 Excel (6 tópicos, 12 subtópicos + simulador com busca real PROCV/PROCH/PROCX), 1.4 PowerPoint (1 subtópico, 3 exemplos + 2 exercícios), 1.5 OneDrive (1 subtópico, 3 exemplos + 2 exercícios). Subtópico 1.2 complemento (`curriculumWord12Supplement`) não renderiza (const declarada, nunca lida). Flashcards 50. Questões 40.
- **M2 — Redes (completo)**: 2.1 Fundamentos (4 tópicos), 2.2 Modelos OSI/TCP-IP, 2.3 Protocolos, 2.4 Endereçamento/sub-redes, 2.5 Diagnóstico (5 unidades, 19 tópicos, 52 subtópicos). Simulador de redes (ping/traceroute simulados, CIDR com cálculo real). Flashcards 50. Questões 40.
- **M3 — Comunicação e Colaboração (completo)**: 3.1–3.5 (5 unidades, 14 tópicos, 35 subtópicos). Flashcards 50. Questões 40.
- **M4 — Segurança (completo)**: 4.1 Fundamentos, 4.2 Malwares/ferramentas defensivas, 4.3 Ameaças/ataques, 4.4 Legislação/conformidade (4 unidades, 13 tópicos, 39 subtópicos). Simulador defensivo de phishing (triagem didática local). Flashcards 54. Questões 85.
- **M5 — IA (completo)**: 5.1 Fundamentos, 5.2 ML, 5.3 IA generativa/LLMs, 5.4 Engenharia de prompts (4 unidades, 13 tópicos, 35 subtópicos). Laboratório de prompts (simulação local, sem IA real). Flashcards 50. Questões 40.
- **M6 — Ética (completo, integrado no P1-C)**: 6.1–6.6 (6 unidades, 18 tópicos, 46 subtópicos). Flashcards 50. Questões 40 (conectadas no P1-D).
- **M7 — Dados (completo)**: 7.1–7.3 (3 unidades, 9 tópicos, 23 subtópicos). Flashcards 50. Questões 40. (Simulador de dados compartilhado do P1-D.)
- **M8 — Visualização (completo)**: 8.1 Fundamentos visuais, 8.2 Gráficos estatísticos, 8.3 Estatística aplicada, 8.4 Ferramentas, 8.5 Storytelling (5 unidades, 23 tópicos, 28 subtópicos). 5 gráficos SVG. Flashcards 50. Questões 40.

### 4.3 Recursos funcionais (estado real)

- Simuladores com UI montada (5/5): Excel (`#excel-app`), Redes (`#redes-app`), Segurança (`#seguranca-app`), Prompts (`#prompts-app`), Dados (`#dados-app`) — montagem inline com guardas triplas.
- Gráficos (5/5): histograma, linha, barras, dispersão, boxplot (SVG próprio, `#charts-app`).
- Flashcards: 404/404 conectados, repetição espaçada SM-2 simplificado.
- Questões: 365/320 (piso atingido), 15 escopos de simulado (m1..m8 + cum-2..cum-8). Distribuição real medida: níveis 94 básica (25,8%) / 193 intermediária (52,9%) / 78 avançada (21,4%); formatos 290 múltipla escolha + 75 Certo/Errado; estilos CESPE 216 / FGV 58 / FCC 52 / VUNESP 39. Desvio da sugestão 30/45/25 documentado e justificado (Seção 10 admite ajuste).
- Busca (`window.SearchApp`) e áudio (`window.AudioApp`) implementados e conectados.
- Persistência (`storage.js`) e referências (`references.js`) implementados e carregados.

### 4.4 Referências (verificadas com URL + data)

- LGPD (Lei 13.709/2018): planalto.gov.br, 2026-10-20 (arts. 1°, 2°, 3°, 4°, 5°, 17, 18, 46).
- LAI (Lei 12.527/2011) e Lei de Governo Digital (Lei 14.129/2021): planalto.gov.br, 2026-10-21.
- CF art. 37 caput e art. 5º XXXIII: conferidos, 2026-10-21.
- Marco Civil (Lei 12.965/2014): https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm, verificada 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15, 19; destaque art. 9º §3º).
- Verificação direta por HTTP (webfetch) em 2026-10-24: Microsoft Learn (https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide), RFCs/IETF (RFC 791, 793, 1034, 1035, 2131, 7230, 7231, 8446) e CERT.br (https://cert.br/) confirmados como acessíveis com título/organização correspondentes — **verificados** (data de verificação 2026-10-24). Registrados em `referencias/referencias-verificadas.md` (Bloco 4) e `apostila-ia/assets/data/references.js`.
- Verificações adicionais de 2026-10-24 (Bloco 7 de `referencias/referencias-verificadas.md`): RFC 9110 (https://www.rfc-editor.org/info/rfc9110) — acessível; ANPD (https://www.gov.br/anpd/pt-br) + Resolução CD/ANPD nº 2/2022 e nº 4/2023 — acessíveis; CF art. 37 (texto integral conferido, incisos II, III, XXI, § 1º, § 3º II, § 4º, § 6º) e art. 5º (incisos X, XII, XIV, XXXIII, LXXIX) — conferidos; dispositivos remissivos do M6 — Lei 8.429/1992, Lei 1.079/1950, Lei 13.146/2015, Lei 10.098/2000, Lei 10.741/2003, Lei 13.460/2017, Lei 12.682/2012, Lei 14.063/2020, LC 101/2000, LC 105/2001 e LGPD art. 7º — todos acessíveis no planalto.gov.br (Lei 10.741 localizada via busca oficial em https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm). Total de referências verificadas passa de 32 para 72 (32 → 72 itens no `references.js`) (Bloco 7); pendentes restantes: demais resoluções da ANPD, demais RFCs (FTP, SMTP, ICMP, ARP, NAT, VPN etc.), demais incisos do art. 37 e do art. 5º não listados acima.

### 4.5 Limitações remanescentes (declaradas, não ocultas)

- Vídeos educacionais: **0 validados** (intencional; IDs não inventados).
- Testes em navegador real: **não realizados** (apenas `node --check` + smoke Node/vm).
- Simuladores: simulações didáticas locais (sem comandos reais no SO, sem ataques reais, sem IA real).
- Referências pendentes (após Bloco 7, 2026-10-24): demais resoluções da ANPD (além da nº 2/2022 e nº 4/2023); demais RFCs não verificadas individualmente (FTP, SMTP, ICMP, ARP, NAT, VPN etc.); demais incisos/parágrafos do art. 37 e do art. 5º da CF não listados no Bloco 7. Microsoft Learn, RFCs/IETF (RFC 791, 793, 1034, 1035, 2131, 7230, 7231, 8446, 9110), CERT.br, ANPD (órgão + 2 resoluções), CF art. 37/5º (incisos listados) e dispositivos remissivos do M6 (Lei 8.429/1992, Lei 1.079/1950, Lei 13.146/2015, Lei 10.098/2000, Lei 10.741/2003, Lei 13.460/2017, Lei 12.682/2012, Lei 14.063/2020, LC 101/2000, LC 105/2001, LGPD art. 7º) verificados em 2026-10-24.
- M1 parcial: sub-const `curriculumWord12Supplement` não renderiza; 1.4/1.5 com 1 subtópico cada.
- IDs não uniformes entre M1 (formato longo) e M2–M8 (subtópicos em formato compacto) — ambos estáveis e únicos.

---

Relatório de contagens verificáveis por node: `inventario/RELATORIO_CONTAGENS_NODE.md`.


## Revalidação de proveniência — 2026-10-25

As contagens acima são as declaradas no inventário anterior, com data de referência 2026-10-23. Na inspeção remota da Fase 1 de 2026-10-25, elas foram consultadas, mas **não foram recalculadas a partir de todos os arquivos de dados**. Não as tratar como resultados novos desta execução.

A matriz em `docs/MATRIZ_COBERTURA.csv` contém somente agregados por módulo; ainda não representa a rastreabilidade individual dos 427 nós. A auditoria atual e as lacunas identificadas estão em `docs/FASE1_AUDITORIA_2026-10-25.md`. A geração da matriz detalhada e a reprodução automatizada das contagens são tarefas explícitas da Fase 2.


## Revalidação estrutural remota — 2026-10-25 (execução atual)

A matriz docs/MATRIZ_COBERTURA.csv foi expandida para uma linha por subtópico detectado nos oito arquivos curriculares. O processamento remoto identificou 295 IDs de subtópicos, distribuídos em M1=37, M2=52, M3=35, M4=39, M5=35, M6=46, M7=23 e M8=28. A contagem textual detectou 888 exemplos e 592 exercícios. A inspeção dos arquivos de flashcards encontrou 460 IDs, todos únicos dentro do conjunto; a inspeção dos arquivos de questões encontrou 365 IDs, todos únicos dentro do conjunto.

Esses números descrevem uma auditoria estrutural dos arquivos remotos. Não comprovam originalidade, correção técnica, qualidade didática, análise completa dos distratores, validade atual de fontes nem funcionamento de interface. O script reprodutível scripts/audit_curriculum_matrix.mjs foi adicionado ao repositório, mas **ainda não foi executado localmente nesta execução**; sua execução e comparação do resultado permanecem pendentes.


---

## Snapshot estrutural revalidado — 2026-10-26

Este bloco substitui as contagens anteriores apenas para o estado corrente do branch; as anotações históricas acima permanecem como registros da inspeção anterior.

- 8 módulos, 37 unidades, 132 tópicos, 295 subtópicos e 427 nós curriculares.
- 888 exemplos e 592 exercícios detectados estruturalmente nos arquivos curriculares; a contagem não equivale à revisão pedagógica.
- 460 flashcards e 365 questões autorais.
- 6 simuladores com UI e 5 gráficos SVG.
- Auditoria de rastreabilidade: 365/365 questões e 460/460 flashcards com referência a tópicos existentes; 0 referências somente à unidade; 0 referências desconhecidas.
- Evidência de validação técnica: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247446902.
- Estado pedagógico: revisão semântica independente e revisão integral de gabaritos/fontes ainda pendentes.


## Atualização de conteúdo legal e referências — 2026-10-26

- A definição legal de encarregado e de agentes de tratamento no Módulo 6 foi alinhada à redação vigente da LGPD após a Lei nº 15.352/2026.
- A lista de direitos do art. 18 foi corrigida para preservar a numeração vigente e distinguir eliminação de dados tratados com consentimento (inciso VI) da revogação do consentimento (inciso IX).
- As exceções do art. 4º não são descritas como autorização para tratar dados em desconformidade: o texto registra a exigência de legislação específica, proporcionalidade, devido processo, princípios gerais e direitos do titular no § 1º.
- A Lei nº 15.352/2026 foi incluída no catálogo de referências visível da aplicação.
- Evidência da validação técnica do lote anterior: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247679289.


## Correção de rastreabilidade M1–M3 — 2026-10-26

- q-m1-33 a q-m1-35 foram alinhadas a subtópicos de Excel, deixando de apontar para um tópico de formatos do Word.
- q-m2-34 foi alinhada a métricas de desempenho; q-m2-38 a q-m2-40 foram alinhadas ao tópico de cálculo CIDR.
- q-m3-20 a q-m3-22 e q-m3-37 a q-m3-40 foram alinhadas aos tópicos de lobby, controle de participantes e gravações de reuniões.
- A auditoria permanece estrutural: 365 questões, 460 flashcards, 0 referências unit-only e 0 referências desconhecidas. Ainda existem 24 tópicos substantivos sem questão diretamente associada.
- Evidência: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40247942802.


## Snapshot após expansão do banco de questões — 2026-10-26

- Currículo: 8 módulos, 37 unidades, 132 tópicos, 295 subtópicos e 427 nós.
- Flashcards: 460. Questões autorais: **389** (M1=43, M2=54, M3=47, M4=85, M5–M8=40 cada).
- Referências no catálogo da aplicação: 74, incluindo a Lei nº 15.352/2026 e a WCAG 2.2 do W3C verificadas em fonte primária.
- Rastreabilidade estrutural: 389/389 questões e 460/460 flashcards referenciam tópicos existentes; 0 referências somente à unidade e 0 referências desconhecidas.
- Sete nós de síntese/revisão não têm questão exclusiva; não restam tópicos substantivos sem questão direta.
- Evidência: https://github.com/Fatal1tyBarucco/FCN/actions/runs/40248707126.
- Pendente: revisão semântica integral e auditoria independente de acessibilidade/interações.


---

## 5. Registro de orquestração — Fase 1 (2026-10-25)

**Fonte normativa lida:** `Escrita.txt` no branch `main`, blob SHA `a7da4ad0c8905e2f7ece405dfe4a3b95518cbb76`. O prompt define oito módulos curriculares e critérios de aceite técnicos, pedagógicos e quantitativos. A árvore estrutural e as contagens abaixo são evidências de inventário, não aprovação semântica de todo o material.

**Baseline confirmado pelos artefatos do PR #17:** 8 módulos; 37 unidades; 132 tópicos; 295 subtópicos (427 nós); 885 exemplos detectados; 590 exercícios detectados; 460 flashcards e 389 questões segundo a auditoria estrutural mais recente descrita no PR. Esses números diferem dos registros históricos de 404 flashcards/365 questões; prevalece a contagem do commit validado no PR após execução do workflow, e a divergência histórica não deve ser tratada como erro atual sem comparar o mesmo SHA e os mesmos arquivos.

**Módulos obrigatórios:**
1. Microsoft 365 e aplicações de escritório (Word, Excel, PowerPoint, OneDrive).
2. Redes de computadores.
3. Comunicação e colaboração.
4. Segurança da informação e governança digital.
5. Inteligência artificial.
6. Ética e responsabilidade digital no serviço público.
7. Fundamentos e engenharia de dados.
8. Visualização, análise e storytelling com dados.

**Regra de aceite curricular:** presença de objetivo/conteúdo/exemplos/exercícios na matriz não comprova profundidade, correção ou suficiência didática. A validação semântica e a revisão independente continuam sendo critérios separados.

**Identificadores:** há formatos longos e compactos legados documentados na seção 4. Não renumerar IDs existentes em lote; qualquer normalização exige auditoria de referências cruzadas em questões, flashcards, progresso e navegação.
