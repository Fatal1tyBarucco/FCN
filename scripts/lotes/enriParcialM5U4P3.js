const enriParcialM5U4P3 = {
  "m5-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O domínio de critérios de avaliação e o ciclo de iteração de prompts são essenciais para concursos de TI e IA. O tema é objeto de questões de dimensionamento de qualidade, comparação de versões e tomada de decisão sob pressão. Sem critérios versionados, as avaliações são anedóticas e não sustentam contratos ou licenças de software público.",
      "preRequisitos": [
        "Leitura das unidades anteriores do M5 e dos M4 e M7 quando aplicável",
        "Noções básicas de engenharia de prompts e de estruturas de interação com modelos de linguagem",
        "Conhecimento prévio de conceitos de IA abordados nas unidades preliminares"
      ],
      "objetivosObservaveis": [
        "Definir com precisão os conceitos centrais de critérios de avaliação de saída e de prompt",
        "Explicar os mecanismos e etapas do ciclo de iteração de prompts",
        "Aplicar o conhecimento em casos práticos de serviço público",
        "Identificar erros comuns e limitações na saída de prompts"
      ],
      "competencias": [
        "Análise técnica de saída e resultados de prompts",
        "Leitura crítica para tomada de decisão fundamentada em contexto de concurso",
        "Elaboração de ciclos de iteração com registro de versão e métricas",
        "Comunicação de riscos e recomendações em ambiente de avaliação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t3-s2 (Laboratório interativo de prompts: comparação entre versões com critérios explícitos e feedback reproduzível) — Laboratório interativo de prompts com critérios explícitos e retorno reproduzível"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média-alta, estimativa pedagógica sem frequência estatística comprovada em editais recentes, baseada na adequação do subtópico ao conteúdo programático de IA. A relevância vem do peso dos critérios de avaliação de saída e do ciclo de iteração versionado em questões de concurso que pedem comparação de versões de prompt, julgamento de consistência e decisão fundamentada em métrica."
      }
    },
    "niveis": {
      "iniciante": "Orientação Estratégica — O QUE Será APRENDIDO: estudo dos critérios de avaliação de saída e de ciclo de iteração de prompts. O aluno iniciará compreendendo a importância de estabelecer métricas claras para medir a qualidade das saídas. Conceitos básicos: um conjunto de casos de teste representa distribuições semelhantes ao uso real; casos de fronteira onde os critérios são ambíguos; casos negativos (fora do escopo); casos adversariais (entradas que tentam injeção); casos com dados incompletos. Mecanismos: comparação entre versões de prompt usando o conjunto de teste definido. Avaliação básica: identificação de quais categorias concentram mais erros e por que o erro se concentra em subconjuntos específicos.",
      "intermediario": "Nível Intermediário: O aluno será capaz de definir um conjunto de critérios de avaliação de saída e conduzir um ciclo de iteração com teste, medição e registro de versão. Isso envolve a criação de um conjunto de teste mínimo composto por casos representativos (distribuição semelhante ao uso real), casos de fronteira (onde o critério é ambíguo), casos negativos (entrada fora do escopo que o sistema deve recusar ou encaminhar), casos adversariais (entradas que tentam injeção) e casos com dados incompletos. O aluno aprenderá a calcular taxas de acerto por categoria, identificar quando duas categorias concentram 70% dos erros devido a confusão de fronteiras, e formular hipóteses sobre melhorias para reduzir a confusão em versões subsequentes, sempre comparando resultados e evitando regressão em categorias que antes funcionavam.",
      "avancado": "Nível AVANÇADO: O aluno dominará a definição de critérios de avaliação granular, capazes de discriminar nuances de saída em diferentes tipos de conteúdo técnico e administrativo. Conduzirá ciclos de iteração multi-versão com registro rigoroso de hipóteses, métricas de fidelidade e medição de regressão em categorias anteriormente estáveis. Aplicará conceitos de validação estatística descriptiva (não inferencial) para comparar versões de prompt, usando intervalos de confiança para decisão de promoção. Implementará estruturas de versionamento (v1, v2, ..., vn) com diferenciação entre mudanças proposicionais e correções de bug, e produzirá relatórios de decisão que conectam resultados metricados ao objetivo institucional do concurso.",
      "especialista": "NÍVEL ESPECIALISTA: O profissional integrará critérios de avaliação de prompt ao ciclo de vida de projetos de IA institucional, articulando explicabilidade, custo computacional, política de dados e pontos de supervisão humana. Definirá o grau de explicabilidade exigido pela instância decisória, o orçamento alocado e as políticas de governança de dados. Articula regras para hipóteses já consolidadas, aprendizado de máquina para padrões mutáveis e aprendizado profundo para dados não estruturados, documentando a justificativa técnica de cada opção. Avaliará não apenas o acerto, mas a adequação contextual, a viabilidade regulatória e o alinhamento com as normas de transparência do órgão contratante, assegurando que cada iteração de prompt contribua para decisão fundamentada e sustentável em contexto de serviço público."
    },
    "comparacoes": [
      {
        "tema": "Critérios de avaliação versus intuição na engenharia de prompts",
        "a": {
          "rotulo": "Critérios estruturados",
          "texto": "Conjunto definido de casos de teste (representativos, de fronteira, negativos, adversariais, dados incompletos) com métricas explícitas de acerto por categoria e registro de versão."
        },
        "b": {
          "rotulo": "Intuição operacional",
          "texto": "Avaliação baseada na impressão subjetiva de «o prompt ficou bom», sem métricas versionadas, sem conjunto de teste estruturado, sujeito a viés de confirmação e variação de modelo."
        },
        "diferencaGabarito": "Critérios estruturados permitem reprodução e decisão fundamentada; intuição operacional é anecdótica e não sustenta contrato, licença ou resposta de questão de concurso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Ajustar o prompt até «ficar bom» é método válido de engenharia de prompts.",
        "porqueErrada": "A afirmação é falsa porque o ajuste guiado por impressão não possui método reproduzível: não registra hipótese, não mede regressão sobre um conjunto de teste versionado, não fundamenta decisão contratual e não resiste à mudança de modelo, de equipe ou de volume de casos. O que o avaliador chama de 'melhoria' é, no máximo, uma hipótese não testada.",
        "versaoCorreta": "Ajuste por sensação não constitui método técnico: falta de reproduzibilidade, detecção de regressão e fundamentação contratual, além de desaparecimento quando mudam modelo ou volume de casos. O ajuste propõe hipótese, não resultado consolidado."
      },
      {
        "afirmacaoEquivocada": "Prompt com mais exemplos few-shot sempre melhora o acerto em prova.",
        "porqueErrada": "Mais exemplos não garantem melhoria se forem redundantes ou confundirem o modelo sobre o critério de saída esperado; a qualidade dos exemplos importa mais que a quantidade em contexto de avaliação e iteração.",
        "versaoCorreta": "A quantidade de exemplos few-shot sozinha não assegura acerto; a relevância depende da novidade e da não-redundância dos exemplos adicionados ao prompt."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Critérios de avaliação de prompt",
        "Ciclo de iteração versionado",
        "Conjunto de teste mínimo",
        "Classificação de erros por categoria",
        "Métricas de fidelidade e regressão"
      ],
      "regras": [
        "Avaliar saída exige conjunto de teste definido",
        "Registro de versão é obrigatório para comparação",
        "Hipóteses de ajuste devem ser testadas e não impostas por sensação"
      ],
      "comparacoes": [
        "Critérios estruturados versus intuição operacional na escolha de parâmetros de avaliação"
      ],
      "fluxos": [
        "Definir critérios → criar conjunto de teste → conduzir iteração → medir resultados → decidir promoção ou nova iteração"
      ],
      "excecoes": [
        "Quando o volume de casos é muito reduzido, critérios amplos são necessários antes de fragmentação detalhada"
      ],
      "palavrasChave": [
        "critérios",
        "iteração",
        "teste",
        "versão",
        "fidelidade",
        "regressão",
        "subgrupo",
        "concurso"
      ],
      "checklist": [
        "O conjunto de teste cobre casos representativos, de fronteira e adversariais?",
        "As métricas de acerto estão definidas por categoria?",
        "O registro de versão inclui hipóteses e resultados?",
        "Há verificação de regressão em categorias anteriores?",
        "A classificação considera viabilidade regulatória do órgão?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que medir a média da qualidade e não apenas o percentual de acerto em distribuições de saída de prompt? Porque o erro tende a se concentrar em um subconjunto de casos (entradas ambíguas, documentos incompletos, categorias raras), e a média dilui essa concentração. Diagnosticar por tipo de erro é o que orienta a próxima alteração do prompt.",
        "dados": "Distribuição de saídas em categorias de entrada onde o erro se concentra em subconjunto ambíguo e documentos incompletos, categorias raras, e casos adversariais; a média dilui essa concentração.",
        "conceitos": [
          "Avaliação de prompt",
          "Diagnóstico por subgrupo de erros"
        ],
        "estrategia": "Diagnosticar por tipo de erro em vez de confiar em média geral; a mesma lógica de avaliação por subgrupo da unidade 5.2 aplicada ao prompt.",
        "execucao": [
          "Listar categorias de entrada e classificá-las por tipo de erro",
          "Calcular taxa de acerto por categoria em vez de média global",
          "Identificar quais categorias concentram 70% dos erros por confusão de fronteira"
        ],
        "resultado": "Porque o erro tende a se concentrar em um subconjunto de casos (entradas ambíguas, documentos incompletos, categorias raras), e a média dilui essa concentração. Diagnosticar por tipo de erro é o que orienta a próxima alteração do prompt. É a mesma lógica de avaliação por subgrupo da unidade 5.2, aplicada ao prompt.",
        "justificativa": "Sem conjunto de teste versionado, qualquer comparação entre versões de prompt é anedótica e não sustenta decisão nem contrato; a medição por subgrupo fornece base factual para iteração.",
        "errosFrequentes": [
          "Acreditar que média geral de acerto reflete qualidade da saída em todos os subgrupos",
          "Ignorar categorias de fronteira ao avaliar qualidade global do prompt"
        ],
        "variacao": "Se o prompt for otimizado para um subgrupo de casos de teste com foco em requisitos de concursos, a melhora em outros subgrupos pode ser limitada, exigindo iterações sequenciais direcionadas a cada grupo de risco avaliado."
      },
      {
        "tipo": "aplicacao",
        "problema": "Descreva um ciclo de iteração para o prompt de classificação de despesas em processo licitatório, definindo critérios de avaliação, conduzindo testes com conjunto versionado e medindo acerto por categoria antes e depois das alterações.",
        "dados": "(1) v1 com instrução, esquema de saída e 12 categorias definidas; (2) conjunto com 60 casos (40 representativos, 10 de fronteira, 5 fora de escopo, 5 adversariais); (3) regra: acerto por categoria, taxa de recusa correta fora de escopo, percentual de casos adversariais bem-sucedidos; (4) medição da v1; (5) diagnóstico: duas categorias concentram 70% dos erros, por confusão de fronteiras; (6) hipóteses: poucos exemplos few-shot das duas categorias ambíguas reduzem a confusão; (7) v2 com 4 exemplos sintéticos; (8) remediação e comparação, com atenção à regressão nas outras categorias; (9) registro de v1, v2, hipóteses e resultados; (10) promoção da v2, se houver ganho sem regressão.",
        "conceitos": [
          "Ciclo de iteração de prompt",
          "Conjunto de teste com subgrupos",
          "Medição de fidelidade por categoria"
        ],
        "estrategia": "Aplicar régua de medição em 60 casos com 3 execuções por caso, diagnosticar concentrações de erro, inserir poucos exemplos shot nas categorias ambíguas, comparar v2 com v1 evitando regressão em outras categorias, registrar hipótese e resultados para decisão de promoção.",
        "execucao": [
          "Aplicar v1 a 60 casos com 3 execuções cada (180 execuções totais)",
          "Classificar cada saída por uma das 12 categorias de despesa",
          "Calcular taxa de acerto por categoria e taxa de recusa correta fora de escopo",
          "Identificar as duas categorias que concentram 70% dos erros por confusão de fronteira",
          "Inclui 4 exemplos few-shot focados nas duas categorias ambíguas no prompt v2",
          "Aplicar v2 aos mesmos 60 casos e comparar resultados categoria a categoria",
          "Verificar se não houve regressão em categorias que antes tinham acerto elevado",
          "Registrar v1, v2, hipótese (ex.: poucos exemplos shot) e resultados finais",
          "Promover v2 se houver ganho sem regressão em nenhuma categoria"
        ],
        "resultado": "Resultado do ciclo: fidelidade apurada em 60 casos e três execuções cada; as duas categorias que concentravam 70% dos erros reduziram a taxa de equivocação com poucos exemplos few-shot; nenhuma das demais categorias apresentou regressão; a v2 foi promovida com registro da hipótese e dos resultados, aguardando nova iteração.",
        "justificativa": "Neste caso de classificação de despesas licitatórias, o conjunto de 60 casos com três execuções cada revelou que duas categorias concentravam 70% dos erros por confusão de fronteira. A adição de poucos exemplos few-shot direcionados a essas categorias reduziu a confusão sem gerar regressão nas demais, o que fundamenta a promoção da v2 com registro de hipótese e resultados para futura reiteração.",
        "errosFrequentes": [
          "Acreditar que poucos exemplos few-shot resolvem todos os erros sem diagnóstico prévio",
          "Não verificar regressão em categorias que antes funcionavam ao inserir novos exemplos"
        ],
        "variacao": "Se a otimização do ciclo de iteração focalizar apenas um subconjunto de categorias de despesa, as demais categorias podem sofrer regressão ou ficar estagnadas, o que obriga a uma nova rodada de ajustes e ao re-registro de métricas antes da promoção definitiva do prompt."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Ajustar o prompt até «ficar bom» é método válido de engenharia de prompts.'",
        "dados": "Afirmação de que ajuste por sensação é método válido; referência a experiência subjetiva sem conjunto de teste versionado, modelo especificado ou volume de casos definido.",
        "conceitos": [
          "Avaliação de prompt sem métricas",
          "Hipótese versus método em engenharia de prompts"
        ],
        "estrategia": "Confrontar a afirmação com a exigência de método reproduzível: ajuste por sensação não detecta regressão, não sustenta decisão nem contrato, e desaparece quando muda modelo, equipe ou volume de casos. O que se ajusta é uma hipótese, e o que se mede é um conjunto de teste versionado.",
        "execucao": [
          "Registrar a afirmação: ajuste por sensação é método válido",
          "Verificar que o ajuste não é reproduzível em diferentes modelos ou equipes",
          "Confirmar que o ajuste desaparece quando mudam modelo, equipe ou volume de casos",
          "Demonstrar que o que se ajusta é uma hipótese, e o que se mede é um conjunto de teste versionado"
        ],
        "resultado": "Errado. Ajuste por sensação não é método: não é reproduzível, não detecta regressão, não sustenta decisão nem contrato, e desaparece quando muda o modelo, a equipe ou o volume de casos. O que se ajusta é uma hipótese, e o que se mede é um conjunto de teste versionado.",
        "justificativa": "Sem conjunto de teste versionado e método de medição reproduzível, qualquer ajuste por sensação é pessoal e não auditável; o método exige hipótese e medição sobre conjunto de teste versionado, não impressão subjetiva de 'ficar bom'.",
        "errosFrequentes": [
          "Tratar impressão subjetiva de 'melhoria' como método validado de iteração",
          "Não diferenciar ajuste de hipóteses de ajuste por sensação sem medição"
        ],
        "variacao": "Se a afirmação fosse 'acrescentar instruções ao prompt gradativamente até que a melhoria seja sentida', o erro seria idêntico: ausência de método reproduzível, não detecção de regressão em outras condições e inexistência de fundamentação para decisão ou contrato."
      }
    ]
  },
  "m5-u4-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Dominar o laboratório interativo de prompts com critérios explícitos e retorno reproduzível é essencial para concursos de TI e IA. O tema é objeto de questões que exigem comparar versões de prompt sob condições controladas, medir consistência comportamental e registrar decisão fundamentada em evidências metódicas, não em impressão pessoal.",
      "preRequisitos": [
        "Leitura das unidades anteriores do M5 e dos M4 e M7 quando aplicável",
        "Noções básicas de estrutura de laboratório de prompts e de registro de versão",
        "Conhecimento de conceitos de comparação entre versões de modelo de linguagem"
      ],
      "objetivosObservaveis": [
        "Definir com precisão os conceitos centrais de laboratório interativo de prompts",
        "Explicar os mecanismos e etapas para comparar versões de prompt com critérios explícitos",
        "Aplicar o conhecimento em casos práticos de serviço público de comparação de versões",
        "Identificar erros comuns e limitações na reprodução de retorno de laboratório"
      ],
      "competencias": [
        "Análise técnica de saída em comparação de laboratório de prompts",
        "Leitura crítica de resultados de laboratório para tomada de decisão fundamentada em contexto de concurso",
        "Elaboração de laboratório comparativo com critérios explícitos e escala definida",
        "Comunicação de riscos e decisões de versão em ambiente de avaliação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t3-s1 (Critérios de avaliação e ciclo de iteração de prompts) — Critérios de avaliação e ciclo de iteração de prompts — base para definição de métricas e conjunto de teste",
        "m5-u4-t4-s1 (Exemplos resolvidos da unidade (três casos completos)) — Exemplos resolvidos da unidade (três casos completos) — subtópico existente do Módulo 5"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média-alta baseada na adequação do tema ao conteúdo programático de IA para concursos, declarada como estimativa pedagógica sem frequência estatística comprovada em editais recentes. A relevância decorre da centralidade conceitual e da adequação a cenários de prova que exigem comparação de versões e julgamento de consistência comportamental."
      }
    },
    "niveis": {
      "iniciante": "Orientação Estratégica — O QUE Será APRENDIDO: estudo do laboratório interativo de prompts: comparação entre versões com critérios explícitos e retorno reproduzível. O aluno iniciará compreendendo a necessidade de fixar conjunto de casos, parâmetros de geração e régua mecânica de medição antes de comparar versões. Conceitos base: consistência do comportamento do modelo sob parâmetros fixos é indicador do prompt; variabilidade quantificada passa a ser indicador em vez de suposta. Mecanismos: fixar (a) CONJUNTO DE CASOS (entradas completas, inclua documentos de referência); (b) PARÂMETROS DE GERAÇÃO (temperatura e semente, quando disponíveis; caso contrário, N execuções por caso, com registro individual). Avaliação básica: medir consistência entre 3 execuções por caso e identificar quando uma execução isolada pode ser atípica e levar a decisão errada tanto para melhor (promover por acaso) quanto para pior (descartar por acaso).",
      "intermediario": "Nível Intermediário: O aluno será capaz de conduzir um laboratório comparativo entre duas versões de prompt com critérios explícitos, escala definida, retorno reproduzível e registro de decisão. Isso envolve fixar conjunto de casos (30 casos de exemplo), parâmetros de geração (3 execuções por caso, 90 execuções por versão), e critérios de medição (taxa de fidelidade = casos com saída ancorada na fonte ÷ total de execuções; taxa de completude = execuções com todos os campos obrigatórios preenchidos ÷ total; taxa de conformidade de esquema; taxa de invenção por tipo; taxa de desvio de escopo; comprimento médio e percentual de saídas truncadas; consistência = percentual de casos em que as 3 execuções coincidem no resultado estruturado). O aluno aprenderá a medir consistência, identificar versão com menor taxa de invenção e de desvio, sem regressão relevante nas demais métricas, e registrar a limitação (modelo e versão testados).",
      "avancado": "Nível AVANÇADO: O aluno dominará o design de laboratório comparativo multi-versão com rigor metodológico para publicação em edital ou relatório institucional. Conduzirá experimentos com variações de temperatura e semente, estatísticas descriptivas de fidelidade e completude por tipo de caso (representativo, fronteira, fora de escopo, adversarial), e análise de variância entre versões. Implementará estruturas de versionamento (v1, v2, ..., vn) com diferenciação entre mudanças proposicionais e correções de bug, e produzirá relatórios de decisão que conectam resultados métricos ao objetivo institucional do concurso, assegurando que o retorno seja reproduzível por terceiro com mesma configuração de modelo, parâmetros e casos.",
      "especialista": "NÍVEL ESPECIALISTA: O profissional integrará o design de laboratório comparativo ao ciclo de vida de projetos de IA institucional, articulando explicabilidade, custo computacional, política de dados e pontos de supervisão humana. Definirá o grau de explicabilidade exigido pela instância decisória, o orçamento alocado e as políticas de governança de dados. Articula protocolos de laboratório para hipóteses de diferença entre versões de modelo, documentando resultados métricos e conclusões sobre reproduzibilidade. Avaliará não apenas a consistência estatística, mas a adequação contextual, a viabilidade regulatória e o alinhamento com as normas de transparência do órgão contratante, assegurando que cada comparação de versão contribua para decisão fundamentada e sustentável em contexto de serviço público, com registro auditável por terceiro."
    },
    "comparacoes": [
      {
        "tema": "Laboratório comparativo versus avaliação isolada de prompt",
        "a": {
          "rotulo": "Laboratório comparativo",
          "texto": "Versões de prompt comparadas sob mesmos casos e parâmetros fixos; medição de consistência, fidelidade, completude e taxa de invenção por tipo; registro integral de casos, saídas, parâmetros e modelo; retorno reproduzível por terceira pessoa."
        },
        "b": {
          "rotulo": "Avaliação isolada",
          "texto": "Avaliação de versão única de prompt sem comparação controlada; impressão subjetiva de melhoria ou piora; variabilidade não quantificada; decisão baseada em sentimento pessoal em vez de métricas versionadas."
        },
        "diferencaGabarito": "Laboratório comparativo permite reprodução e decisão fundamentada; avaliação isolada é anecdótica e não sustenta contrato, licença ou resposta de questão de concurso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O retorno do laboratório é reprodutível quando o avaliador registra sua impressão sobre cada resposta.",
        "porqueErrada": "A afirmação é falsa porque a impressão do avaliador é pessoal e não verificável por terceiro. O retorno reproduzível exige uma régua mecânica (o trecho citado existe? o número confere?), o registro integral de casos e saídas, os parâmetros de geração, o modelo e a versão — de modo que outra pessoa repita a medição e chegue ao mesmo resultado.",
        "versaoCorreta": "Impressão pessoal não garante reprodução verificável; retorno reproduzível exige régua mecânica, registro integral de casos e saídas, parâmetros, modelo e versão, de modo que terceiros possam repetir a medição e chegar ao mesmo resultado."
      },
      {
        "afirmacaoEquivocada": "Todo laboratório de prompts gera retorno reproduzível automaticamente.",
        "porqueErrada": "Laboratório sem fixes de conjunto de casos, parâmetros de geração e registro de versão não produz retorno reproduzível; a variabilidade entre execuções é alta em geração probabilística e não pode ser suposta ou ignorada.",
        "versaoCorreta": "Laboratório sem fixes de casos, parâmetros e registro não produz retorno reproduzível; variabilidade em geração probabilística deve ser quantificada, não ignorada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Laboratório interativo de prompts",
        "Comparação entre versões",
        "Critérios explícitos de reproduzibilidade",
        "Fidelidade e completude de saída",
        "Consistência comportamental"
      ],
      "regras": [
        "Fixar conjunto de casos antes de comparar versões",
        "Manter parâmetros de geração consistentes (temperatura, semente) por execução",
        "Registrar modelo, versão, parâmetros e casos para cada execução"
      ],
      "comparacoes": [
        "Comparação controlada com mesmos casos e parâmetros versus avaliação isolada e subjetiva"
      ],
      "fluxos": [
        "Fixar casos -> definir parâmetros -> executar N vezes por versão -> medir fidelidade, completude, consistência -> comparar versões -> registrar decisão e limitação"
      ],
      "excecoes": [
        "Modelos determinísticos podem parecer reproduzíveis, mas ainda variam por semente; verificar sempre"
      ],
      "palavrasChave": [
        "laboratório",
        "comparação",
        "reprodutibilidade",
        "fidelidade",
        "consistência",
        "temperatura",
        "semente",
        "versão"
      ],
      "checklist": [
        "O conjunto de casos está fixado antes de iniciar comparação?",
        "Os parâmetros de geração (temperatura, semente) estão definidos e consistentes?",
        "Foram realizadas pelo menos 3 execuções por caso e por versão?",
        "Fidelidade, completude e consistência foram medidas para cada caso?",
        "A decisão de promover uma versão foi baseada em métricas e não em impressão pessoal?",
        "O modelo, versão e parâmetros foram registrados para permitir reprodução por terceiro?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o laboratório precisa de múltiplas execuções por caso para avaliar consistência de prompt? Porque a geração é probabilística: uma execução isolada pode ser atípica e levar a uma decisão errada — tanto para melhor (promover versão por acaso) quanto para pior (descartar versão por acaso). Com execuções repetidas sob parâmetros fixos, mede-se a consistência do comportamento, que é indicador do prompt, e a variabilidade passa a ser quantificada em vez de suposta.",
        "dados": "O conjunto de medições por versão abrange: a taxa de fidelidade (casos com saída ancorada na fonte sobre o total de execuções), a taxa de completude (execuções com todos os campos obrigatórios preenchidos sobre o total), a conformidade de esquema, a taxa de invenção por tipo — valor inventado e citação inexistente —, a taxa de desvio de escopo, o comprimento médio e o percentual de saídas truncadas, e a consistência (casos em que as três execuções coincidem no resultado estruturado sobre o total). Para cada caso, há tabela com a marcação de cada critério e a contagem de erros por tipo.",
        "conceitos": [
          "Geração probabilística de modelo",
          "Consistência comportamental"
        ],
        "estrategia": "Executar cada versão múltiplas vezes (3 por caso) sob parâmetros fixos (temperatura 0, semente definida); medir percentual de casos onde as 3 coincidem no resultado estruturado; usar variabilidade como indicador de estabilidade do prompt.",
        "execucao": [
          "Aplicar v1 a 30 casos com 3 execuções por caso (90 execuções totais)",
          "Aplicar v2 aos mesmos 30 casos com 3 execuções por caso (90 execuções totais)",
          "Para cada caso, comparar se as 3 execuções de v1 coincidem no resultado estruturado",
          "Para cada caso, comparar se as 3 execuções de v2 coincidem no resultado estruturado",
          "Calcular consistência = percentual de casos onde as 3 execuções coincidem",
          "Calcular taxa de fidelidade = casos com saída ancorada na fonte ÷ total de execuções",
          "Comparar consistência e fidelidade entre v1 e v2",
          "Registrar modelo, versão, temperatura, semente e todos os resultados para decisão final"
        ],
        "resultado": "Com execuções repetidas sob parâmetros fixos, mede-se a consistência do comportamento, que é indicador do prompt; a variabilidade passa a ser quantificada em vez de suposta; decisão de promover versão baseada em menor taxa de invenção e menor desvio, sem regressão relevante nas demais métricas.",
        "justificativa": "Sem múltiplas execuções por caso, a variabilidade inerente à geração probabilística levaria a decisões baseadas em acasos favoráveis ou desfavoráveis; a régua mecânica de 3 execuções por caso permite quantificar consistência e tomar decisão fundamentada sobre qual versão promover.",
        "errosFrequentes": [
          "Promover versão baseada em resultado de única execução",
          "Descartar versão baseada em única execução atípica sem análise de variabilidade"
        ],
        "variacao": "Ao reduzir o volume para dez execuções por versão, a consistência apurada diminui e a variabilidade relativa sobe, exigindo reajuste de parâmetros ou redesenho do conjunto de casos de teste a fim de manter a validade da comparação entre versões."
      },
      {
        "tipo": "aplicacao",
        "problema": "Monte o quadro de resultados do laboratório para comparar duas versões de prompt em 30 casos, aplicando 3 execuções por caso e registrando todas as métricas de fidelidade, completude, invenção e consistência para tomada de decisão de promoção ou retificação.",
        "dados": "Para cada versão: (a) taxa de fidelidade = casos com saída ancorada na fonte ÷ total de execuções; (b) taxa de completude = execuções com todos os campos obrigatórios preenchidos ÷ total; (c) taxa de conformidade de esquema; (d) taxa de invenção por tipo (valor inventado, citação inexistente); (e) taxa de desvio de escopo; (f) comprimento médio e percentual de saídas truncadas; (g) consistência = percentual de casos em que as 3 execuções coincidem no resultado estruturado. Tabela por caso com a marcação de cada critério e a contagem de erros por tipo. Decisão: promover a versão com menor taxa de invenção e de desvio, sem regressão relevante nas demais métricas, e registrar a limitação (modelo e versão testados).",
        "conceitos": [
          "Taxa de fidelidade",
          "Taxa de completude",
          "Taxa de invenção",
          "Consistência comportamental"
        ],
        "estrategia": "Aplicar ambas as versões a 30 casos com 3 execuções cada; para cada caso e cada critério, registrar se a saída está ancorada na fonte, se todos os campos obrigatórios estão preenchidos, se há inventação de valor ou citação inexistente, se há desvio de escopo, o comprimento da saída e se as 3 execuções coincidem; gerar tabela resumo comparativa e tomar decisão de promoção com base na menor taxa de invenção e desvio, sem regressão nas demais métricas.",
        "execucao": [
          "Criar tabela de resultados com 30 linhas (casos) e 7 colunas (critérios de medição) para cada versão",
          "Aplicar v1 a cada um dos 30 casos com 3 execuções, registrando cada dado na tabela",
          "Aplicar v2 a cada um dos 30 casos com 3 execuções, registrando cada dado na tabela",
          "Calcular taxa de fidelidade para v1 e v2 (casos ancorados ÷ 90 execuções cada)",
          "Calcular taxa de completude para v1 e v2",
          "Calcular taxa de invenção para v1 e v2",
          "Calcular taxa de desvio de escopo para v1 e v2",
          "Calcular consistência para v1 e v2",
          "Gerar gráfico comparativo e decidir promoção com base nas métricas"
        ],
        "resultado": "Taxa de fidelidade e consistência medidas em 30 casos com 3 execuções por versão; versão promovida teve menor taxa de invenção e desvio sem regressão nas demais métricas; limitação registrada (modelo e versão testados).",
        "justificativa": "A citação é verificável de forma automática e barata; deixar de verificá-la é o que permitiu o erro chegar ao servidor. A taxa de fidelidade e consistência medem a qualidade da versão do prompt sob condições controladas, e a decisão de promoção deve ser baseada em métricas e não em impressão pessoal.",
        "errosFrequentes": [
          "Adicionar «não invente» ao prompt e considerar resolvido",
          "Confiar na revisão informal do servidor",
          "Não medir a taxa antes da correção"
        ],
        "variacao": "Se o número de casos for reduzido para 10 execuções por versão, a consistência medida diminui e a variabilidade relativa aumenta, exigindo novo ajuste de parâmetros ou redesign do conjunto de casos de teste para manter a validade da comparação em aplicação prática."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O retorno do laboratório é reprodutível quando o avaliador registra sua impressão sobre cada resposta.'",
        "dados": "Afirmação de que impressão pessoal do avaliador equivale a retorno reproduzível; não há registro de casos, saídas, parâmetros ou versão.",
        "conceitos": [
          "Impressão pessoal versus retorno verificável",
          "Reprodutibilidade em engenharia de prompts"
        ],
        "estrategia": "Confrontar a afirmação com a exigência de regra mecânica e verificável: a impressão é pessoal e não verificável por terceiro; o retorno reproduzível exige que o trecho citado exista, que o número confira, o registro integral dos casos e das saídas, os parâmetros, o modelo e a versão, de modo que outra pessoa possa repetir a medição e chegar ao mesmo resultado.",
        "execucao": [
          "Registrar a afirmativa: impressão do avaliador equivale a retorno reproduzível",
          "Verificar que a impressão não é verificável por terceiro",
          "Confirmar que falta registro de casos, saídas, parâmetros e versão impede reprodução",
          "Demonstrar que a regra mecânica (casos, saídas, parâmetros, modelo, versão) é que permite reprodução por terceiro"
        ],
        "resultado": "Errado. Impressão é pessoal e não verificável por terceiro. O retorno reproduzível exige a régua mecânica e verificável (o trecho citado existe? o número confere?), o registro integral dos casos e das saídas, os parâmetros, o modelo e a versão — de modo que outra pessoa possa repetir a medição e chegar ao mesmo resultado.",
        "justificativa": "A impressão subjetiva do avaliador não constitui evidência reproduzível; a régua mecânica integral (casos, saídas, parâmetros, modelo, versão) é que permite a outro pesquisador repetir a medição e alcançar resultado idêntico, sendo essa a única base válida para decisão de contrato ou edital.",
        "errosFrequentes": [
          "Subestimar a variabilidade inerente à geração probabilística do modelo",
          "Confundir impressão subjetiva do avaliador com evidência reproduzível"
        ],
        "variacao": "Se o avaliador registrasse impressões contraditórias em vez de dados mecânicos, a decisão de promover ou descartar uma versão seria inconsistente e não auditável por terceiros, evidenciando a necessidade de régua parametrizada sobre impressão subjetiva."
      }
    ]
  }
};
