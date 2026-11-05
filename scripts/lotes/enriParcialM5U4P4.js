const enriParcialM5U4P4 = {
  "m5-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O domínio de injeção de prompts em sistemas de IA para concursos, riscos e decisão política é essencial para cargos de tecnologia e transparência. O tema é objeto de questões sobre customização de modelo, risco de alucinações em saídas automatizadas e necessidade de auditoria de cadeia de prompts em projetos públicos.",
      "preRequisitos": [
        "Noções fundamentais de engenharia de prompts e estruturas de interação com modelos de linguagem",
        "Conhecimento básico de como modelos de linguagem processam entradas e geram saídas condicionadas",
        "Familiaridade com conceitos de IA das unidades preliminares do curso"
      ],
      "objetivosObservaveis": [
        "Definir estratégias de injeção de prompt que modularizem saídas de modelos de linguagem",
        "Aplicar critérios de segurança e filtrado ao inserir entradas externas no prompt",
        "Desenvolver fluxos de iteração que registrem versões e mudanças introduzidas via injeção"
      ],
      "competencias": [
        "Analisar saídas de modelos de linguagem sob diferentes estratégias de injeção de prompt",
        "Identificar riscos de alucinação ou desvio de contexto provocados por entradas mal estruturadas",
        "Elaborar ciclos de iteração com registro de versões e métricas de segurança",
        "Comunicar recomendações de segurança e ajustes de prompt em ambiente de concurso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t4-s1 (Exemplos resolvidos da unidade (três casos completos)) — Exemplos resolvidos da unidade — subtópico relacionado via injeção de prompts"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média-alta baseada na aplicabilidade prática da injeção de prompts para segurança de saídas em sistemas de IA utilizados por concursos públicos, declarada como estimativa pedagógica sem frequência estatística comprovada em editais recentes. A relevância decorre do risco de uso indevido de modelos sem precauções adequadas de prompt e da exigência de julgamento de qualidade em questões de TI."
      }
    },
    "niveis": {
      "iniciante": "Orientação Estratégica — O QUE Será APRENDIDO: estudo básico de injeção de prompt como mecanismo de controle de saída de modelos de linguagem. O aluno aprenderá o que é injeção de prompt, para que serve e quais os riscos de segurança associados. Conceitos básicos: prompt é o texto de entrada que direciona o modelo; injeção consiste em inserir informação adicional ou modificações no prompt para moldar saída. Principais riscos: alucinações induzidas, vieses inseridos, saídas fora do escopo solicitado. Mecanismos: identificação de entradas não autorizadas, verificação básica de saída contra um conjunto de casos de teste reduzido.",
      "intermediario": "Nível Intermediário: O aluno será capaz de conduzir injeção de prompt de forma controlada, definindo critérios de segurança e modelos de registro de versões. Isso envolve fixar um conjunto de casos de teste (15 casos básicos), parâmetros de segurança (filtros de saída, verificação de consistência), e critérios de medição (taxa de saídas indesejadas). O aluno aprenderá a inserir exemplos poucos-shot direcionados, monitorar saídas para detectar alucinações leves, e registrar cada iteração com segurança e métricas básicas de fidelidade, sempre comparando resultados entre versões com e sem injeção.",
      "avancado": "Nível Avançado: O aluno dominará a injeção de prompt em projetos de IA institucional, articulando política de governança de dados, pontos de supervisão humana e critérios de auditoria regulatória. Conduzirá experimentos com vários níveis de injeção, estatísticas descriptivas de taxa de alucinação por categoria de entrada, e análise de variância entre versões com diferentes intensidades de injeção. Implementará estruturas de versionamento (v0, v1, ..., vn) com diferenciação entre adições proposicionais e correções de segurança, e produzirá relatórios de decisão que conectam métricas de segurança ao objetivo institucional do concurso, assegurando que cada iteração de prompt contribua para resultado sustentável e transparente em contexto de serviço público.",
      "especialista": "Nível ESPECIALISTA: O profissional integrará a injeção de prompt ao ciclo de vida de projetos de IA institucional, articulando explicabilidade, custo computacional, política de dados e pontos de supervisão humana. Definirá o grau de explicabilidade exigido pela instância decisória, o orçamento alocado e as políticas de governança de dados. Articula protocolos de injeção para hipóteses de diferença entre versões de modelo, documentando resultados métricos e conclusões sobre segurança reproduzível. Avaliará não apenas a taxa de alucinação, mas a adequação contextual, a viabilidade regulatória e o alinhamento com as normas de transparência do órgão contratante, assegurando que cada iteração de prompt contribua para decisões fundamentadas e sustentáveis em contexto de serviço público, com registro auditável por terceiro."
    },
    "comparacoes": [
      {
        "tema": "Injeção de prompt versus controle direto de saída em sistemas de IA",
        "a": {
          "rotulo": "Injeção de prompt",
          "texto": "Entrada adicional inserida no prompt para moldar saída do modelo; flexível mas depende de segurança e verificação mecânica para evitar alucinações ou desvio de contexto."
        },
        "b": {
          "rotulo": "Controle direto de saída",
          "texto": "Validação estruturada e restrição de saída por esquema JSON ou gramática definida; mais rígido mas menos flexível para capturar nuances ou contexto complexo na interação com o modelo de linguagem."
        },
        "diferencaGabarito": "Injeção de prompt permite moldagem flexível de saída pelo contexto do pedido; controle direto de saída impõe restrições estruturais mais fortes mas reduz a capacidade de capturar contexto complexo ou nuances na interação com o modelo de linguagem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A injeção de prompt sempre melhora a acurácia em qualquer modelo de linguagem.",
        "porqueErrada": "Mais injeção não garante melhoria se os exemplos few-shot forem redundantes ou confundirem o modelo sobre o critério de saída esperado; a qualidade e a relevância dos exemplos importam mais que a quantidade em contexto de segurança e avaliação de risco.",
        "versaoCorreta": "A quantidade de injeção de prompt sozinha não assegura acurácia maior; a relevância depende da não-redundância e da adequação dos exemplos adicionados ao prompt ao critério de segurança pretendido."
      },
      {
        "afirmacaoEquivocada": "Qualquer prompt com injeção de poucos exemplos é seguramente reproduzível em concursos.",
        "porqueErrada": "Prompts com injeção few-shot não são automaticamente reproduzíveis: a variabilidade inerente aos modelos de linguagem, combinada com sensibilidade a parâmetros de temperatura e semente, significa que o mesmo prompt pode gerar saídas diferentes em execuções diferentes, exigindo testes múltiplos sob parâmetros fixos para validar consistência.",
        "versaoCorreta": "Prompts com injeção few-shot requerem validação em múltiplas execuções sob parâmetros fixos (temperatura, semente) para confirmar reprodutibilidade; a variabilidade não deve ser ignorada ou suposta sem evidência empírica."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Injeção de prompt",
        "Conjunto de teste de segurança",
        "Risco de alucinação",
        "Fidelidade de saída",
        "Versionamento de prompt"
      ],
      "regras": [
        "Fixar conjunto de casos de teste antes de iniciar injeção",
        "Manter parâmetros de segurança ativos durante todas as iterações",
        "Registrar modelo, versão, parâmetros e casos para cada iteração de injeção"
      ],
      "comparacoes": [
        "Injeção de prompt versus controle estrutural de saída em sistemas de IA"
      ],
      "fluxos": [
        "Definir casos de teste -> inserir injeção prompt -> executar iterações -> medir fidelidade e alucinação -> comparar versões -> registrar decisão de segurança"
      ],
      "excecoes": [
        "Quando o volume de casos de teste é muito reduzido, precauções de segurança podem ser limitadas, exigindo redesenho do conjunto de casos"
      ],
      "palavrasChave": [
        "prompt",
        "injeção",
        "alucinação",
        "fidelidade",
        "segurança",
        "versão",
        "concurso"
      ],
      "checklist": [
        "O conjunto de casos de teste está fixado antes de iniciar injeção?",
        "Os parâmetros de segurança (filtros, verificação) estão ativos durante todas as iterações?",
        "Fidelidade e taxa de alucinação foram medidas para cada iteração?",
        "O registro de versões inclui hipótese e resultados de segurança?",
        "A decisão de promover ou rejeitar uma versão foi baseada em métricas e não em impressão pessoal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que a injeção de prompt requer múltiplas execuções por caso para avaliar riscos de segurança? Porque a geração de modelos de linguagem é probabilística: uma execução isolada pode produzir saídas atípicas que indicam risco falso ou oculto. Com execuções repetidas sob parâmetros fixos, mede-se a variabilidade e se as saídas indesejadas se repetem, o que é indicador de risco real de segurança que justifica precauções no uso público.",
        "dados": "Para cada versão: (a) taxa de saídas indesejadas = casos com saídas fora do escopo ou com alucinação ÷ total de execuções; (b) taxa de fidelidade = casos com saída ancorada na fonte ou critério definido ÷ total; (c) variabilidade observada = distribuição de categorias de saída em múltiplas execuções; (d) consistência = percentual de casos onde as execuções coincidem no resultado estruturado; (e) patamar de segurança = marcação de casos onde saídas indesejadas ocorreram em mais de 50% das execuções.",
        "conceitos": [
          "Geração probabilística de modelo",
          "Avaliação de risco em prompts"
        ],
        "estrategia": "Executar cada versão múltiplas vezes (3 por caso) sob parâmetros fixos (temperatura 0, semente definida); medir taxa de saídas indesejadas e variabilidade por categoria; usar variabilidade como indicador de risco de segurança para decisão de promoção ou retificação.",
        "execucao": [
          "Aplicar v1 a 20 casos com 3 execuções por caso (60 execuções totais)",
          "Aplicar v2 aos mesmos 20 casos com 3 execuções por caso (60 execuções totais)",
          "Para cada caso, registrar se saídas indesejadas ocorrem em mais de 50% das execuções",
          "Calcular taxa de saídas indesejadas por categoria e por versão",
          "Comparar consistência e taxa de alucinação entre v1 e v2",
          "Registrar modelo, versão, temperatura, semente e todos os resultados para decisão de segurança final"
        ],
        "resultado": "Com execuções repetidas sob parâmetros fixos, mede-se a variabilidade de saídas e se riscos de segurança se repetem; decisões de promoção ou retificação baseadas em evidência de taxa de alucinação consistente acima de limite aceitável.",
        "justificativa": "Sem múltiplas execuções por caso, a variabilidade inerente levaria a decisões baseadas em acasos favoráveis ou desfavoráveis; a regra mecânica de 3 execuções por caso permite quantificar risco de segurança e tomar decisão fundamentada sobre segurança do prompt em contexto de serviço público.",
        "errosFrequentes": [
          "Promover versão de prompt sem avaliar taxa de saídas indesejadas",
          "Descartar versão baseada em saída atípica única sem análise de variabilidade"
        ],
        "variacao": "Se o número de casos for reduzido para 10 execuções por versão, a variabilidade medida diminui e o risco relativo de alucinação aumenta, exigindo novo ajuste de parâmetros ou redesign do conjunto de casos de teste para manter a validade da avaliação de segurança em aplicação prática."
      },
      {
        "tipo": "aplicacao",
        "problema": "Descrever um ciclo de iteração para injeção de prompt em sistema de classificação de documentos de licitação, definindo critérios de segurança, conduzindo testes com conjunto de teste versionado e medindo taxa de saídas indesejadas antes e depois das alterações.",
        "dados": "(1) v1 com instrução básica e sem injeção; (2) conjunto com 40 casos (30 representativos, 5 de fronteira, 3 adversariais, 2 fora de escopo); (3) regra: taxa de saídas indesejadas abaixo de 10% considera segurança, acima exige retificação; (4) medição da v1; (5) diagnóstico: duas categorias de documento concentram 60% das saídas indesejadas; (6) hipóteses: poucos exemplos few-shot das duas categorias de fronteira introduzem vieses; (7) v2 com exemplos few-shot sintéticos focados nas duas categorias ambíguas; (8) remediação e comparação, com atenção à regressão nas outras categorias; (9) registro de v1, v2, hipóteses e resultados; (10) promoção da v2, se houver redução de saídas indesejadas sem regressão em outras categorias.",
        "conceitos": [
          "Ciclo de iteração de prompt",
          "Conjunto de teste com subgrupos de risco",
          "Medição de saídas indesejadas por categoria"
        ],
        "estrategia": "Aplicar régua de medição em 40 casos com 3 execuções por caso, diagnosticar concentrações de saídas indesejadas, inserir poucos exemplos shot nas duas categorias de fronteira que concentram erro, comparar v2 com v1 evitando regressão em outras categorias, registrar hipóteses e resultados para decisão de segurança na promoção do prompt.",
        "execucao": [
          "Aplicar v1 a 40 casos com 3 execuções cada (120 execuções totais)",
          "Classificar cada saída como desejada ou indesejada por categoria de documento",
          "Calcular taxa de saídas indesejadas por categoria em v1 (meta: abaixo de 10%)",
          "Identificar as duas categorias de documento que concentram 60% das saídas indesejadas",
          "Inserir 3 exemplos few-shot focados nas duas categorias de fronteira",
          "Aplicar v2 aos mesmos 40 casos e comparar resultados categoria a categoria",
          "Verificar se não houve regressão em categorias que antes tinham baixo índice de saídas indesejadas",
          "Registrar v1, v2, hipóteses (ex.: few-shot direcionado) e resultados finais de segurança",
          "Promover v2 se houver redução de saídas indesejadas sem regressão em nenhuma categoria"
        ],
        "resultado": "Taxa de saídas indesejadas medida em 40 casos com 3 execuções por caso; duas categorias de fronteira reduziram saídas indesejadas após few-shot direcionado; nenhuma categoria apresentou regressão; decisão de promover v2 com registro de hipóteses e resultados para futura reiteração de segurança.",
        "justificativa": "O ciclo de iteração com conjunto de teste de 40 casos (30 representativos, 5 de fronteira, 3 adversariais, 2 fora de escopo) e 3 execuções por caso permitiu medir taxa de saídas indesejadas por categoria; a inserção de poucos exemplos shot nas duas categorias de fronteira que concentravam 60% das saídas indesejadas reduziu o risco sem causar regressão nas demais, atendendo ao critério de conduzir ciclo de iteração com teste, segurança e registro de versão.",
        "errosFrequentes": [
          "Acreditar que poucos exemplos few-shot eliminam todos os riscos sem diagnóstico prévio",
          "Não verificar regressão em categorias que antes tinham baixo índice de saídas indesejadas ao inserir novos exemplos"
        ],
        "variacao": "Se o ciclo de iteração for otimizado para um subconjunto de categorias de documento, as demais categorias podem apresentar aumento de saídas indesejadas ou estabilidade indesejada, exigindo nova rodada de ajustes e re-registro de métricas antes da promoção final do prompt."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A injeção de prompt sempre melhora a acurácia em qualquer modelo de linguagem.'",
        "dados": "Afirmação de que injeção de prompt melhora a acurácia independentemente do modelo, do contexto ou do volume de casos; referência a experiência subjetiva sem conjunto de teste versionado, modelo especificado ou volume de casos definido.",
        "conceitos": [
          "Avaliação de prompt sem métricas de risco",
          "Hipótese versus método em engenharia de prompts"
        ],
        "estrategia": "Confrontar a afirmação com a exigência de método reproduzível: injeção por sensação não detecta regressão, não sustenta segurança nem contrato e desaparece ao mudar modelo, equipe ou volume de casos; o que se ajusta é uma hipótese, e o que se mede é o risco de saídas indesejadas sobre conjunto de teste versionado.",
        "execucao": [
          "Registrar a afirmativa: injeção por sensação melhora a acurácia",
          "Verificar que o ajuste não é reproduzível em diferentes modelos ou equipes",
          "Confirmar que o ajuste desaparece quando mudam modelo, equipe ou volume de casos",
          "Demonstrar que o que se ajusta é uma hipótese, e o que se mede é o risco de saídas indesejadas sobre conjunto de teste versionado"
        ],
        "resultado": "Errado. A impressão subjetiva de 'melhoria' não é método: não é reproduzível, não detecta regressão, não sustenta segurança nem contrato e some quando muda o modelo, a equipe ou o volume de casos; somente o risco de saídas indesejadas sobre conjunto de teste versionado é mensurável.",
        "justificativa": "Sem conjunto de teste versionado e método de medição reproduzível, qualquer ajuste por sensação é pessoal e não auditável; o método exige hipóteses e medição sobre risco de saídas indesejadas sobre conjunto de teste versionado, não impressão subjetiva de 'ficar bom'.",
        "errosFrequentes": [
          "Tratar impressão subjetiva de 'melhoria' como método validado de iteração",
          "Não diferenciar ajuste de hipóteses de ajuste por sensação sem medição"
        ],
        "variacao": "Se a afirmação fosse que 'incrementar pouco a pouco o prompt até obter melhoria percebida', o erro seria o mesmo: falta de método reproduzível, não detecta regressão em outras condições, e não sustenta segurança nem contrato."
      }
    ]
  },
  "m5-u4-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O domínio de exemplos resolvidos da unidade é fundamental para concursos de TI e IA. O tema é objeto de questões que exigem analisar casos completos de aplicação de prompt, comparar versões e tomar decisões fundamentadas em evidências metódicas, não em impressão pessoal. Cada exemplo resolvido é um modelo de como estruturar critérios, conduzir iteração e registrar decisões em contexto de serviço público.",
      "preRequisitos": [
        "Leitura das unidades anteriores do M5 e dos M4 e M7 quando aplicável",
        "Noções básicas de estruturas de prompt e critérios de avaliação",
        "Conhecimento prévio de conceitos de IA abordados nas unidades preliminares"
      ],
      "objetivosObservaveis": [
        "Analisar três exemplos resolvidos da unidade e identificar padrões de critérios e iteração",
        "Estruturar critérios de avaliação própria a partir de exemplos de referência",
        "Desenvolver capacidade de conduzir ciclo de iteração básico inspirado em casos de concurso"
      ],
      "competencias": [
        "Analisar saídas de prompt sob estrutura de exemplo resolvido",
        "Estruturar critérios de avaliação a partir de casos de referência completos",
        "Conduzir iterações básicas com registro de versão inspirado em modelos de concurso",
        "Comunicar riscos e recomendações em ambiente de simulado de concurso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t4-s2 (Comparações e distinções críticas da unidade) — Práticas adicionais de exemplos nao incluidas neste lote básico"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta baseada na utilidade prática de exemplos resolvidos como modelo de estudo para candidatos de concursos públicos de tecnologias da informação, declarada como estimativa pedagógica sem frequência estatística comprovada em editais recentes. A relevância decorre da centralidade conceitual e da adequação a questões de prova que exigem julgamento de qualidade baseado em casos completos e estruturados de aplicação de prompt."
      }
    },
    "niveis": {
      "iniciante": "Orientação Estratégica — O QUE Será APRENDIDO: estudo dos três exemplos resolvidos da unidade: introdução, aplicação e erro. O aluno iniciará compreendendo a estrutura básica de cada tipo de exemplo e o aprendizado que cada um proporciona. Conceitos básicos: cada tipo de exemplo (introdução, aplicação, erro) foca em aspecto diferente: introdução fundamenta o conceito central, aplicação demonstra uso prático em cenário de concurso, erro mostra armadilhas comuns a evitar. Mecanismos: identificar o tipo de exemplo, mapear os critérios de avaliação implícitos e explicitados, registrar versões associadas a cada caso.",
      "intermediario": "Nível Intermediário: O aluno será capaz de analisar os três exemplos resolvidos da unidade e extrair critérios de avaliação e estratégias de iteração para o próprio uso. Isso envolve comparar os três tipos de exemplo, identificar pontos em comum e diferenças metodológicas, e aplicar o padrão ao próprio ciclo de estudo. O aluno aprenderá a mapear critérios de saída a partir de exemplos de referência, conduzir iterações com registro de versões inspirado nos casos de concurso e identificar quais aspectos de cada exemplo podem ser aproveitados ou ajustados para o próprio contexto de prova.",
      "avancado": "Nível Avançado: O aluno dominará a análise crítica dos três exemplos resolvidos da unidade e será capaz de reestruturá-los para novos contextos de concurso ou criar variantes que atendam a objetivos específicos de prova. Implementará estruturas de versionamento (v1, v2, v3) com diferenciação entre alterações de introdução, alterações de aplicação e correções de erro, e produzirá relatórios de decisão que conectam análise de exemplos ao objetivo institucional do concurso, assegurando que cada análise de exemplo contribua para domínio conceitual e preparo prático em contexto de serviço público.",
      "especialista": "Nível ESPECIALISTA: O profissional integrará a análise dos três exemplos resolvidos da unidade ao ciclo de vida de projetos de IA institucional, articulando explicabilidade, custo computacional, política de dados e pontos de supervisão humana. Definirá o grau de explicabilidade exigido pela instância decisória, o orçamento alocado e as políticas de governança de dados. Articula protocolos de análise para comparação entre exemplos em diferentes projetos ou editais, documentando resultados métricos e conclusões sobre quais aspectos de cada tipo de exemplo são mais relevantes para decisões de promoção. Avaliará não apenas a relevância conceitual, mas a adequação contextual, a viabilidade regulatória e o alinhamento com as normas de transparência do órgão contratante, assegurando que cada análise de exemplo contribua para decisões fundamentadas e sustentáveis em contexto de serviço público, com registro auditável por terceiro."
    },
    "comparacoes": [
      {
        "tema": "Comparação de tipos de exemplos resolvidos na preparação para concursos",
        "a": {
          "rotulo": "Tipo introdução",
          "texto": "Fundamenta conceito central de prompt com base teórica; adequado para início de estudo e definição de objetivos de prova."
        },
        "b": {
          "rotulo": "Tipo aplicação",
          "texto": "Demonstra uso prático de prompt em cenário de concurso; adequado para treinamento de julgamento de qualidade em casos reais."
        },
        "diferencaGabarito": "Tipo introdução foca em fundamentação teórica e definição de objetivos; tipo aplicação foca em demonstração prática e julgamento de qualidade em cenário real de concurso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Resolvendo os três exemplos da unidade o candidato domina prompt engineering para concurso.",
        "porqueErrada": "Apenas memorizar três exemplos não garante domínio: é necessário entender os critérios subjacentes, saber adaptar os padrões a novos casos e conduzir iteração própria sob critérios próprios, caso contrário o candidato falha quando variações são introduzidas no enunciado da questão.",
        "versaoCorreta": "Dominar prompt engineering requer entendimento dos critérios subjacentes aos exemplos, capacidade de adaptação a novos casos e condução de iteração própria sob critérios próprios; três exemplos só são ponto de partida, não garantia de domínio completo."
      },
      {
        "afirmacaoEquivocada": "Os três exemplos da unidade são suficientes para qualquer questão de concurso.",
        "porqueErrada": "Concurso de TI e IA pode cobrir módulos que não foram contemplados nos três exemplos: novos tipos de critérios, estruturas de prompt diferentes ou critérios de avaliação alternativos exigem estudo adicional e iteração própria, não apenas os três casos fornecidos.",
        "versaoCorreta": "Os três exemplos da unidade são ponto de partida básico; conteúdo adicional e iteração própria sob critérios novos são necessários para cobrir o programa oficial completo de IA para concursos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Exemplo introdução",
        "Exemplo aplicação",
        "Exemplo erro",
        "Análise crítica de casos",
        "Iteração básica"
      ],
      "regras": [
        "Identificar tipo de exemplo (introdução, aplicação, erro) antes de analisar",
        "Mapear critérios de avaliação a partir da estrutura do exemplo",
        "Registrar versões e ajustes realizados a partir da análise de cada exemplo"
      ],
      "comparacoes": [
        "Tipo introdução versus tipo aplicação versus tipo erro na estruturação de prompt"
      ],
      "fluxos": [
        "Identificar tipo -> mapear critérios -> conduzir iteração básica -> registrar decisões -> comparar com outros exemplos"
      ],
      "excecoes": [
        "Caso o candidato já possua domínio avançado de prompt engineering, os três exemplos podem servir apenas como referência rápida"
      ],
      "palavrasChave": [
        "exemplo",
        "introdução",
        "aplicação",
        "erro",
        "iteração",
        "concurso",
        "prompt"
      ],
      "checklist": [
        "O tipo de exemplo (introdução, aplicação, erro) foi identificado corretamente?",
        "Os critérios de avaliação foram mapeados a partir da estrutura do exemplo?",
        "Foram realizados ajustes ou registro de versões a partir da análise?",
        "A análise considera o contexto do concurso em questão?",
        "Os riscos identificados foram comunicados ou registrados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que começar o estudo de prompt engineering por exemplos de introdução? Porque eles fundamentam o conceito central, definem os objetivos de prova e estabelecem a base teórica sobre a qual todos os demais aspectos serão construídos. Sem esse fundamento, os estudos posteriores carecem de direção e os critérios de avaliação ficam arbitrários.",
        "dados": "Exemplo de introdução: definição de prompt engineering, objetivos de avaliação de saída, estrutura básica de critérios de qualidade, referência aos principais modelos de linguagem relevantes para concursos.",
        "conceitos": [
          "Prompt engineering",
          "Fundamentação teórica",
          "Critérios de qualidade"
        ],
        "estrategia": "Ler o exemplo de introdução com atenção aos critérios fundamentais ali apresentados, mapear como eles se conectam aos objetivos de prova do concurso e usar como referência para os estudos subsequentes dos tipos aplicação e erro.",
        "execucao": [
          "Ler definição de prompt engineering apresentada no exemplo",
          "Identificar objetivos de avaliação de saída declarados",
          "Estruturar um pequeno conjunto de critérios de qualidade básicos inspirados no exemplo",
          "Registrar versões e critérios para própria referência futura"
        ],
        "resultado": "Compreensão clara do conceito central de prompt engineering, dos objetivos de avaliação e da estrutura básica de critérios de qualidade para iniciar estudos subsequentes com direção definida.",
        "justificativa": "Fundamental: sem domínio do conceito central e dos objetivos declarados, qualquer tentativa de iteração ou aplicação prática carece de base teórica sólida e torna-se propensa a julgamentos arbitrários ou mal fundamentados.",
        "errosFrequentes": [
          "Pular direto para exemplos de aplicação sem assimilação do conceito central",
          "Não mapear critérios de qualidade a partir da fundamentação teórica"
        ],
        "variacao": "Se o estudante já tiver familiaridade básica com Conceitos de IA, o exemplo de introdução pode ser lido mais rápido, mas os critérios fundamentais ainda devem ser explicitados e registrados para consistência do estudo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Descrever como conduzir iteração de prompt em questão de concurso sobre classificação de despesas públicas, usando critérios de avaliação e conjunto de teste versionado, inspirado no exemplo aplicação da unidade.",
        "dados": "Exemplo aplicação: prompt de classificação de despesas com 12 categorias definidas, 60 casos de teste (40 representativos, 10 de fronteira, 5 fora de escopo, 5 adversariais), 3 execuções por caso, taxa de acerto por categoria, diagnóstico de concentração de erro em duas categorias, inserção de few-shot focado, comparação v2 vs v1 sem regressão, registro de v1, v2, hipóteses e resultados.",
        "conceitos": [
          "Ciclo de iteração de prompt",
          "Conjunto de teste com subgrupos",
          "Medição de fidelidade por categoria"
        ],
        "estrategia": "Aplicar a estruturação do exemplo aplicação: definir 12 categorias de despesa, criar conjunto de 60 casos com 3 execuções cada, classificar saídas por categoria, calcular taxa de acerto, identificar concentração de erro, inserir poucos exemplos shot focados, comparar versões e registrar decisões.",
        "execucao": [
          "Definir 12 categorias de despesa básicas para concurso",
          "Criar conjunto de 60 casos de teste (40 representativos, 10 de fronteira, 5 fora de escopo, 5 adversariais)",
          "Aplicar prompt de classificação a cada um dos 60 casos com 3 execuções cada (180 execuções totais)",
          "Classificar cada saída por uma das 12 categorias de despesa",
          "Calcular taxa de acerto por categoria e taxa de recusa correta fora de escopo",
          "Identificar as duas categorias que concentram 70% dos erros por confusão de fronteira",
          "Inserir 4 exemplos few-shot focados nas duas categorias ambíguas",
          "Aplicar v2 aos mesmos 60 casos e comparar resultados categoria a categoria",
          "Verificar se não houve regressão em categorias que antes tinham acerto elevado",
          "Registrar v1, v2, hipóteses (ex.: poucos exemplos shot) e resultados finais para decisão de promoção",
          "Promover v2 se houver ganho sem regressão em nenhuma categoria"
        ],
        "resultado": "Taxa de fidelidade medida em 60 casos com 3 execuções por caso; duas categorias reduziram erro após poucos exemplos shot; nenhuma categoria apresentou regressão; decisão de promover v2 com registro de hipóteses e resultados para futura reiteração.",
        "justificativa": "O ciclo de iteração com conjunto de teste de 60 casos (40 representativos, 10 de fronteira, 5 fora de escopo, 5 adversariais) e 3 execuções por caso permitiu medir fidelidade por categoria; a inserção de poucos exemplos shot nas duas categorias que concentravam 70% dos erros reduziu a confusão de fronteiras sem causar regressão nas demais, atendendo ao critério de conduzir ciclo de iteração com teste, medição e registro de versão.",
        "errosFrequentes": [
          "Acreditar que poucos exemplos few-shot resolvem todos os erros sem diagnóstico prévio",
          "Não verificar regressão em categorias que antes funcionavam ao inserir novos exemplos"
        ],
        "variacao": "Se o ciclo de iteração for otimizado para um subconjunto de categorias de despesa, as demais categorias podem apresentar queda de desempenho, exigindo nova rodada de ajustes e re-registro das métricas antes da promoção final do prompt."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Resolvendo os três exemplos da unidade o candidato domina prompt engineering para concurso.'",
        "dados": "Afirmação de que memorização de três exemplos equivale a domínio de prompt engineering; referência a experiência subjetiva sem critérios de avaliação versionados, modelo especificado ou volume de casos definido.",
        "conceitos": [
          "Avaliação de prompt sem métricas versionadas",
          "Hipótese versus método em engenharia de prompts"
        ],
        "estrategia": "Confrontar a afirmação com a exigência de método reproduzível: memorizar três exemplos não é método: não é reproduzível, não detecta regressão, não sustenta decisão nem contrato, e desaparece quando mudam critérios ou volume de casos. O que se memoriza são três casos específicos, não método consolidado.",
        "execucao": [
          "Registrar a afirmativa: memorizar três exemplos é método válido",
          "Verificar que a memorização não é reproduzível em diferentes critérios ou volumes de casos",
          "Confirmar que a memorização não sustenta decisão nem contrato nem persiste quando mudam critérios",
          "Demonstrar que o que se memoriza são três casos específicos, não método consolidado"
        ],
        "resultado": "Errado. Memorizar três exemplos não é método: não é reproduzível, não detecta regressão, não sustenta decisão nem contrato, e desaparece quando mudam critérios ou volume de casos. O que se memoriza são três casos específicos, não método consolidado.",
        "justificativa": "Sem critérios de avaliação versionados e método de medição reproduzível, qualquer memorização de três exemplos é pessoal e não auditável; o método exige hipóteses e medição sobre critérios novos, não impressão subjetiva de 'domínio'.",
        "errosFrequentes": [
          "Subestimar a necessidade de iteração própria sob critérios novos",
          "Confundir memorização de casos de exemplo com método validado de iteração"
        ],
        "variacao": "Se o candidato tentasse memorizar variações de prompt em vez de entender os critérios subjacentes, o erro seria o mesmo: falta de método reproduzível, não detecta regressão em novas condições, e não sustenta segurança nem contrato."
      }
    ]
  }
};
