# RELATÓRIO DE TESTES — Apostila Web Interativa FCN

Data: 2026-10-23
Ambiente: Termux/Android, Chromium 155 headless + CDP, Node.js

## Testes executados

- node --check: 46/46 arquivos .js — 0 falhas.
- verificacao/verificar-estrutura.js: exit 0, 0 falhas (36/36).
- test_simulators.js: 100 PASS, 0 FAIL.
- Chromium headless: 0 exceções JS; 5 logs de inicialização positivos.
- 20 testes interativos CDP: todos PASS (curriculum, módulos, flashcards, simuladores, charts, quiz, progress, accessibility, audio, search, storage, navegação, responsive, file://).
- file:// testado: carrega; manifest CORS bloqueado (documentado); SW não registrado (condicional).

## Contagens verificadas

- Módulos: 8; Unidades: 37; Tópicos: 132; Subtópicos: 295.
- Flashcards: 404; Questões: 365.
- Exemplos: 885; Exercícios: 590.
- Gráficos: 5; Simuladores: 5.

## Limitações documentadas

- favicon 404 corrigido com link icon (2026-10-23).
- manifest CORS em file:// (conhecido).
- SW não testado em navegador real.
- 0 vídeos publicados como validados (decisão intencional).
- accessibility container vazio em headless (propósito screen reader).

## Atualização Fase 5 — 2026-10-24 (simuladores + laboratórios interativos)

Contratado em: docs/CONTRATO_TRABALHO_FASE5.md. Nenhum arquivo de conteúdo didático alterado; apenas verificação técnica + documentação.

### T1 — node --check nos 4 simuladores (e charts.js via simulator_data)
- sim_network: OK (sem saída de erro).
- sim_security: OK.
- sim_prompts: OK.
- sim_data: OK.
- charts.js (137 ocorrências de histograma/boxplot/dispersao/linha/barras): OK sintático.
Resultado: 0 falhas sintáticas.

### T2 — Contêineres no index.html (contagem grep -c)
- #dados-app: 6 (simulador dados + gráfico)
- #excel-app: 5 (simulador Excel)
- #prompts-app: 4 (simulador prompts)
- #redes-app: 4 (simulador redes)
- #seguranca-app: 4 (simulador segurança)
Todos montados; nenhum vazio.

### T3 — Smoke test Excel (test_excel_smoke.js)
- ExcelSimulator carregado: object.
- Planilha criada; chaves: definir / definirFormula / definirMatriz / obter / recalcular / listar / copiarFormula / _avaliarCelula.
- Nenhum erro; nenhuma alteração introduzida no arquivo do simulador.
Resultado: PASS.

### T4 — Inspeção simulador segurança (triagem defensiva)
- Cabeçalho confirma: ambiente isolado, dados fictícios, sem ataques reais (Seção 4.3).
- Funções: classificar (seguro/phishing), mostrar-indicadores (indicadores explicados), mensagens simuladas com IDs.
- Nenhum comando de rede executado; nenhum arquivo externo usado.
Resultado: PASS (documentação de escopo respeitada).

### T5 — Gráficos obrigatórios (simulator_data.js + charts.js)
- Histograma (classes configuráveis), linha, barras/colunas, dispersão, box plot.
- Todos calculados a partir dos valores editáveis; nenhuma forma puramente decorativa.
Resultado: PASS (escopo documentado consistente com dados reais).

### T6 — Áudio / busca (audio.js defer, search.js defer)
- audio.js: existe, defer, container #audio-app; Web Speech API — NÃO testado em navegador real (ausência de navegador gráfico no Termux CLI); limitação documentada.
- search.js: existe, defer, container #search-app; índice local — NÃO testado com conteúdo externo nesta fase; limitação documentada.
Resultado: PARCIAL (funcionalidade presente, não testada em navegador real; limitação registrada em PENDENCIAS.md).

### T7 — Substituições / modelos indisponíveis
- Nenhuma substituição de modelo necessária.
- Nenhuma biblioteca de terceiro substituída por placeholder.
- Nenhum serviço externo usado como requisito obrigatório.
Resultado: PASS.

### Defeitos encontrados / correções
- Nenhum defeito funcional identificado nos simuladores nesta fase.
- Nenhuma alteração feita a simulator_*.js; nenhuma correção necessária.
Resultado: NENHUMA CORREÇÃO APLICADA (Fase 7 — se a revisão independente Fase 6 identificar algum defeito, corrigir com contrato separado).

## REVISÃO INDEPENDENTE — FASE 3 DO ORQUESTRADOR (2026-10-23)
Revisor: orquestrador (substitui subagente REVISOR; delegate_task indisponível, registrado). Nenhum componente aprovado pelo próprio autor — revisão feita após cada passo isolado.
Veredito sobre FASE 1: CONFIRMADO. Escrita.txt lido integralmente (1206 linhas, 12 seções); inventário (427 nós), matriz (365/404/5), plano — todos em docs/ com datas e fontes.
Veredito sobre FASE 2: CONFIRMADO. Repo inspecionado; M1–M8 renderizam (AGENTS.md); nenhuma funcionalidade válida descartada; 38 tags <script> confirmadas pelo grep; M6 presente (linhas 482/490/496/535/603).
Veredito sobre FASE 3 — ARQUITETURA: CONFIRMADO. node --check passou (app/navigation/quiz-engine/simulators, 0 falhas); schema `modulo-N` confirmado (chaves 1–8); navigation.js usa typeof/chain (sem eval/fetch); persistência `apostila-ia-progresso` e PWA condicional preservados; DECISOES_ARQUITETURAIS.md existente, não alterado de forma não justificada.
Veredito sobre FASE 3 — REFERÊNCIAS PENDENTES: PARCIAL / HONESTO. Marco Civil 12.965/2014 verificado (2026-10-23, URL + arts. 2,3,7,9§3,15,19); LGPD 13.709/2018, LAI 12.527/2011, Lei 14.129/2021 verificadas (AGENTS.md). PENDENTES declarados (não inventados): Microsoft Learn (M1), RFC 791/793 (M2), CERT.br (M4), demais incisos CF art.37/art.5, dispositivos M6 apenas por remissão, vídeos (0 validados — decisão), acessibilidade real (não headless). Nenhuma fonte inventada.
Veredito sobre FASE 3 — CÓDIGO: NENHUMA ALTERAÇÃO DE CÓDIGO FEITA AINDA (substituição registrada: delegate_task indisponível; execução direta). Nenhum arquivo .js do app modificado nesta sessão — apenas docs/ atualizados e evidências coletadas. Regra preservada: merge só via PR (fluxo branches+PR), nunca direto em main.
Limitações honestas registradas (não ocultadas): nenhum simulador testado em navegador real (só node --check + smoke Node/vm); accessibility não testado com screen reader; manifest CORS bloqueado em file://; SW não registrado em file://; 0 vídeos validados; distribuição real de níveis (25,8/52,9/21,4) difere da sugerida 30/45/25 — intencional e documentado.

Entrega do orquestrador: Fases 1–2 completas; Fase 3 iniciada (arquitetura confirmada, subagentes substituídos por passos isolados, revisão independente feita antes de qualquer alteração de código). Fase 4 concluída (2026-10-24, esta execução): conteúdo didático verificado diretamente nos arquivos `assets/data/*.js` (404 flashcards, 365 questões, 8 currículos, 427 nós). Nenhum arquivo `.js` do app alterado. Próximo passo (não executado ainda): corrigir referências pendentes e executar testes headless de busca/áudio/accessibility, sempre com evidência real antes de registrar como concluído.

- Revisão independente Fase 5 (perfil revisor, não autor): PASS — veredito em docs/REVISAO_INDEPENDENTE_FASE5.md (plugin advanced-delegation indisponível; substituído por revisão manual; nenhum defeito; nenhuma alteração em conteúdo; Fase 7 não necessária; pronto para Fase 6).

### T8 — Evidência de cálculos reais (smoke Fase 5, 2026-10-24)
- Executado: workspace/phase5_smoke.js (Node/vm, autenticação isolada, sem navegar). Arquivo: docs/FASE5_EVIDENCIAS.json.
- Resultado: 25/25 PASS — 7.1 Excel (carregado + PROCV/PROCH/PROCX + sem eval + separador) · 7.2 Redes (carregado + CIDR real + ping/traceroute simulados + isolado) · 7.3 Segurança (carregado + defesa defensiva + 3-2-1 + isolado) · 7.4 Prompts (editor + comparação + critérios + simulação local) · 7.5 Dados + 8 gráficos (stats + 5 tipos + SVG próprio + cálculo real + acessível).
- Nenhuma alteração introduzida em simulator_*.js; nenhuma correção necessária neste incremento.
- Limitação: renderização em navegador real ainda não verificada (documentado em PENDENCIAS.md); cálculos internos confirmados por código-fonte + smoke.


## Atualização Fase 7 — Testes headless Chromium (CDP) — 2026-10-24

Ambiente: Chromium 156 headless (Termux) controlado via Chrome DevTools Protocol (Python websockets), abrindo `file:///.../apostila-ia/index.html` (Modo A, abertura direta). Evidência real capturada em scripts locais em `/tmp` (não commitados): test_cdp2.py, test_interactions.py, test_search2.py.

### T9 — Carregamento da página em file:// (CDP)
- Título: "Apostila Web Interativa — Tecnologia da Informação, Dados e IA".
- Módulos carregados: modulo-1..modulo-8 (8/8) — log navigation.js.
- Flashcards inicializados: 404 cartões.
- Quiz inicializado: 365 questões.
- Charts inicializados: 5 gráficos.
- Console: 10 mensagens, todas `log` informativas; 0 exceções (`Runtime.exceptionThrown` ausente), 0 erros de carregamento.
- Resultado: PASS (carregamento real em file:// confirmado).

### T10 — Contêineres montados (DOM headless)
- #curriculum, #flashcards-app, #excel-app, #redes-app, #seguranca-app, #prompts-app, #dados-app, #charts-app, #search-app, #audio-app, #progress-app, #accessibility-app: todos presentes e não vazios (sim_excel 12286 chars, sim_redes 5431, sim_seg 13324, sim_prompts 9310, sim_dados 23358, charts 5 SVGs, progress 3148).
- Resultado: PASS.

### T11 — Busca global (window.SearchApp)
- Índice construído: 1196 entradas (currículo + flashcards + questões).
- `buscar('CIDR')` = 10 resultados; `buscar('cidr')` = 10 resultados (case/accent-insensitive).
- UI: #bus-input, #bus-btn, filtros (módulo/tópico/nível/tipo), status de indexação; #bus-btn executa busca e renderiza resultados.
- Resultado: PASS (busca encontra conteúdo real; sem resultados fictícios).

### T12 — Gráficos (5 SVGs reais)
- `document.querySelectorAll('#charts-app svg').length` = 5.
- Resultado: PASS (5 gráficos obrigatórios renderizados).

### T13 — Persistência localStorage (roundtrip)
- `localStorage.setItem('apostila-ia-progresso','{"v":1}')` → leitura retorna `{"v":1}`.
- Resultado: PASS (storage funcional em file://).

### T14 — Simuladores (montagem + conteúdo)
- Todos os 5 contêineres montados com conteúdo real (tamanhos acima); Excel smoke (111 asserts) PASS.
- Resultado: PASS (montagem real confirmada; cálculos internos confirmados por código + smoke).

### Limitações ainda não cobertas por teste real
- Áudio (Web Speech API): controles presentes (7 elementos) e aviso de indisponibilidade exibido; síntese não validada (sem voz pt-BR no ambiente headless) — PARCIAL.
- Vídeos: 0 validados (decisão intencional).
- Acessibilidade WCAG completa: não verificada com leitor de tela.
- Responsividade: CSS presente; não verificado em dispositivo físico.


## Atualização da Fase 1 — 2026-10-25

Tipo de verificação: inspeção remota de arquivos no GitHub; não é execução de testes.

| Verificação | Resultado | Evidência | Limite |
|---|---|---|---|
| Prompt mestre localizado | PASS — arquivo encontrado | `Escrita.txt`, SHA `a7da4ad0c8905e2f7ece405dfe4a3b95518cbb76` | Leitura remota; não execução do projeto |
| Estrutura geral identificada | PASS — documentação encontrada | `README.md` e `AGENTS.md` | Declarações documentais não provam runtime |
| Inventário existente encontrado | PASS — documento encontrado | `docs/INVENTARIO_CURRICULAR.md` | Contagens não recalculadas nesta fase |
| Matriz de cobertura localizada | PASS com ressalva | `docs/MATRIZ_COBERTURA.csv` | Só contém agregados por módulo, não rastreabilidade por subtópico |
| Consistência entre documentos | RESSALVA | Diferenças de datas e status em plano, inventário, relatório e pendências | Requer reconciliação na Fase 2 |
| JavaScript / interface / file:// | NÃO EXECUTADO | Nenhuma execução local nesta etapa | Não declarar aprovação técnica |

Nenhum teste de navegador, funcionalidade, persistência, acessibilidade ou build foi executado em 2026-10-25 nesta etapa. Resultados históricos preservados acima não foram reexecutados e não são apresentados como testes novos.
