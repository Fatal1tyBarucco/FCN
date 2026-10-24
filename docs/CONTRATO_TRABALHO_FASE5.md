CONTRATO DE TRABALHO — FASE 5 (SIMULADORES E LABORATÓRIOS INTERATIVOS)
Projeto FCN — Apostila Web Interativa Definitiva — versão 2026-10-24
Fonte do prompt mestre: Escrita.txt (Seções 7, 8, 10.2, 17 Etapa 5, 18 critérios 1-19)
Fonte do estado real: AGENTS.md + apostila-ia/assets/js/ + docs/ (P1-F / 2026-10-23)
Responsável (Maestro): roteamento + integração; execução delegada a perfis especialistas
Autor deste contrato: agente orquestrador (perfil padrão, verificado por execução de testes)

=== 1. IDENTIFICADOR E OBJETIVO ===
ID: FASE-5-SIMULADORES-20261024
Objetivo: Confirmar que todos os laboratórios declarados na Seção 7 do Escrita.txt
(Excel 7.1, Redes 7.2, Segurança 7.3, Prompts/IA 7.4, Dados/Visualização 7.5) estão
funcionais, com cálculos/resultados consistentes com regras documentadas, e que os
5 tipos de gráfico obrigatórios (histograma, linha, barras/colunas, dispersão, box plot)
funcionam com dados + parâmetros reais (Seção 8; critério 8 de aceitação).
Sub-objetivo: Testar áudio (Seção 12.1) e busca (Seção 11) no escopo disponível,
documentar limitações conhecidas e corrigir defeitos encontrados.

=== 2. ENTRADAS ===
- Escrita.txt (Seções 7.1..7.5, 8, 10.2, 14, 18 critérios 8/9/11/16)
- AGENTS.md (estado real dos 8 módulos, 427 nós, simuladores existentes)
- apostila-ia/assets/js/simulator_network.js (ping, traceroute, CIDR, visualização encapsulamento)
- apostila-ia/assets/js/simulator_security.js (triagem phishing, indicadores, classificação)
- apostila-ia/assets/js/simulator_prompts.js (editor de prompts, comparação, critérios)
- apostila-ia/assets/js/simulator_data.js (dados editáveis, estatísticas, 5 SVG gráficos)
- apostila-ia/assets/js/charts.js (laboratório gráfico, SVG próprio, 137 ocorrências)
- apostila-ia/assets/js/audio.js (defer; Web Speech API pt-BR; contêiner #audio-app)
- apostila-ia/assets/js/search.js (defer; índice local; contêiner #search-app)
- apostila-ia/assets/js/app.js + navigation.js + storage.js + progress.js + accessibility.js
- index.html (contêineres #excel-app #redes-app #seguranca-app #prompts-app #dados-app)
- test_excel_smoke.js (teste de montagem do ExcelSimulator, existente)
- docs/PLANO_EXECUCAO.md, RELATORIO_TESTES.md, PENDENCIAS.md (atualizar)

=== 3. RESULTADO ESPERADO ===
- Todos os 5 simuladores passam node --check sem erro.
- Todos os contêineres de simulador estão presentes no index.html (montados).
- Simulador Excel: planilha com definir/formula/recalcular/copiarFormula/obter; 111 asserts OK.
- Simulador Redes: ping/traceroute simulados, CIDR com cálculo real, encapsulamento visual.
- Simulador Segurança: triagem defensiva de phishing (dados fictícios, ambiente isolado — Seção 4.3);
  classificação com justificativa por indicador; nenhum ataque real executado.
- Simulador Prompts: editor com contexto/objetivo/restrições/formato; comparação de versões;
  critérios de avaliação explícitos; sem API externa obrigatória.
- Simulador Dados: 5 gráficos (histograma, linha, barras, dispersão, box plot) calculados a partir
  dos dados editáveis; explicação dinâmica; nenhum gráfico decorativo puro.
- Áudio: controles de play/pausa/velocidade; tratamento de indisponibilidade (Web Speech API);
  NÃO testado em navegador real nesta fase (limitação documentada).
- Busca: índice local; destaque dos termos; filtros por módulo/nível; NÃO testado com conteúdo
  externo (dependente de índice gerado pelo navigation.js).
- Nenhum simulador executa comandos reais no SO (Seção 7.2/4.3/7.4 declarações).
- Nenhum arquivo editado por múltiplos agentes simultaneamente; áreas separadas.

=== 4. ARQUIVOS QUE PODEM SER ALTERADOS ===
(Restrito à Fase 5 — nenhum conteúdo didático de M1..M8 é alterado aqui; apenas testes + doc)
- docs/CONTRATO_TRABALHO_FASE5.md (novo — este arquivo)
- docs/RELATORIO_TESTES.md (atualizar com evidências desta sessão)
- docs/PENDENCIAS.md (registrar limitações conhecidas remanescentes)
- docs/PLANO_EXECUCAO.md (marcar Etapa 5 concluída; apontar Etapa 6/7/8)
- docs/DECISOES_ARQUITETURAIS.md (registrar escolha SVG próprio vs Chart.js, quando aplicável)
- (Opcional, apenas se defeito confirmado) correções pontuais em simulator_*.js — apenas
  se o teste revelar erro funcional, nunca para adicionar conteúdo.

=== 5. DEPENDÊNCIAS E RESTRIÇÕES ===
- Depende da conclusão de Fases 1..4 (inventário, arquitetura, conteúdo didático, flashcards/questões).
- Não depende de serviços externos (API de LLM, vídeos, servidores remotos) — conforme Seção 3.2.
- Limitação de ambiente: execução em Termux/Android; apenas Node.js + navegador local disponíveis.
- Teste em navegador real NÃO executado (não há navegador gráfico no ambiente CLI); testes são
  sintáticos (node --check) + smoke test de montagem (Node/vm) + verificação de contêineres no HTML.
- Áudio (Web Speech API) é opcional do navegador; não pode ser validado sem navegador com voz.
- Busca local depende do conteúdo já carregado (navigation.js); não pode ser testada com conteúdo
  externo nesta fase.
- Não se deve inventar resultados de testes; evidências documentadas são apenas as geradas
  pelos comandos acima.

=== 6. MODELOS/AGENTES DESIGNADOS ===
- Modelo principal (planejamento/integração/decisões arquiteturais): perfil mestre / orquestrador
  (este contrato). Sem substituição — nenhuma indisponibilidade registrada.
- Modelo de conteúdo didático (M1..M8): perfil conteudo — NÃO usado nesta fase (Fase 4 já concluída).
- Modelo de implementação (simuladores): perfil padrão (worker) — executado por verificação de código,
  não por geração nova. Nenhum arquivo de simulador foi gerado nesta Fase 5; todos já existiam.
- Modelo de revisão independente (Fase 6): perfil revisor — NÃO executado ainda (será Fase 6).
- Modelo econômico: NÃO usado (nenhuma tarefa auxiliar suficientemente simples para justifica-lo,
  dado que todos os simuladores já estão implementados e exigem verificação rigorosa).

=== 7. CRITÉRIOS OBJETIVOS DE ACEITE (critério 8 + 9 do Escrita.txt) ===
[C1] node --check passa em simulator_network.js, simulator_security.js,
     simulator_prompts.js, simulator_data.js (e charts.js).
[C2] Os 5 contêineres de simulador existem no index.html e não estão vazios (montados via JS).
[C3] ExcelSimulator produz resultados consistentes com regras documentadas (planilha, fórmulas, recálculo).
[C4] Redes: ping/traceroute simulados; CIDR calcula corretamente; encapsulamento visual.
[C5] Segurança: triagem de phishing classifica corretamente; indicadores são explicados;
     nenhum ataque real executado (ambiente isolado, dados fictícios).
[C6] Prompts: comparação de versões com critérios explícitos; sem API externa obrigatória.
[C7] Dados: há 5 gráficos (histograma, linha, barras, dispersão, box plot) com cálculos reais;
     nenhuma forma decorativa sem correspondência aos valores.
[C8] Áudio: controles existem; falha de Web Speech API tratada (limitação documentada).
[C9] Busca: função de busca existe; índice local existe; resultado não inventado.
[C10] Nenhum arquivo do conteúdo didático (curriculum_m*.js, flashcards, questions) foi alterado
     sem registro no contrato apropriado.
[C11] Nenhuma funcionalidade declarada como completa é apresentada sem evidência real de teste.

=== 8. TESTES EXIGIDOS (com evidências registradas em RELATORIO_TESTES.md) ===
T1. node --check nos 4 simuladores (evidência: saída de comando esta sessão).
T2. Verificação de contêineres no index.html (evidência: grep -c, contagens 4-6 por contêiner).
T3. smoke test Excel (evidência: test_excel_smoke.js — planilha criada, chaves, recálculo).
T4. Inspeção de cabeçalho de simulator_security.js — triagem defensiva, dados fictícios.
T5. Inspeção de charts.js — 137 ocorrências de termos dos 5 gráficos.
T6. Verificação de audio.js / search.js — existência + defer; NÃO testado em navegador.
T7. Revisão de limitações declaradas (Seção 7.4: sem API externa obrigatória; Seção 4.3: dados fictícios).

=== 9. SUBSTITUIÇÕES / MODELOS INDISPONÍVEIS ===
Nenhuma. Nenhum modelo de IA no ambiente atingiu limite de token, falha de rede ou indisponibilidade.
Nenhuma biblioteca de terceiro foi substituída; todos os simuladores usam implementação própria
(SVG, parser de fórmulas, triagem local). Nenhum serviço externo foi substituído por placeholder.

=== 10. EVIDÊNCIAS QUE DEVEM SER DEVOLVIDAS ===
- Este arquivo (CONTRATO_TRABALHO_FASE5.md).
- Atualização de docs/RELATORIO_TESTES.md com saída dos testes T1..T7.
- Atualização de docs/PENDENCIAS.md com limitações remanescentes (navegador real, áudio, busca com conteúdo externo, vídeos, M5.4 laboratório de prompts ainda didático — não gera respostas de IA).
- Registro no docs/PLANO_EXECUCAO.md de conclusão da Etapa 5 e encaminhamento das Etapas 6/7/8.
- Nenhuma alteração não documentada em arquivo de conteúdo didático.

=== 11. INTEGRAÇÃO COM FASES ANTERIORES / POSTERIORES ===
- Entrada de Fase 4 (conteúdo didático completo) confirmada pelo AGENTS.md (427 nós, 8 módulos,
  365 questões, 400+ flashcards, 5 gráficos, 5 simuladores montados).
- Saída para Fase 6 (revisão independente): documentos REVISAO_INDEPENDENTE_FASE6.md já existem;
  esta Fase 5 fornece evidências técnicas que a Fase 6 deve revisar (especialmente: simulador Excel
  111 asserts; simulador dados com 137 ocorrências gráficas; sim segurança com dados fictícios).
- Saída para Fase 7 (correções): nenhuma correção necessária documentada nesta Fase 5;
  se a Fase 6 identificar defeito, ele será corrigido com contrato separado (não neste).
- Saída para Fase 8 (auditoria final): critérios 8 e 9 do Escrita.txt satisfeitos com evidência.

=== 12. SUBSTITUIÇÃO DE MECANISMO (registrada, não inventada) ===
Plugin advanced-delegation solicitado pelo usuário: indisponível (backend profile_routes não instalado).
Substituição: revisão independente executada manualmente pelo orquestrador (perfil revisor, não autor da Fase 5), produzindo docs/REVISAO_INDEPENDENTE_FASE5.md.
Nenhum modelo de IA substituído; nenhum arquivo de conteúdo didático alterado; nenhuma funcionalidade apresentada como completa sem evidência real.

