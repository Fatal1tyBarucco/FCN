const enriParcialM5U2P1 = {
  "m5-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir classificação de regressão e escolher o paradigma de aprendizado correto é decisivo em provas de IA porque confundi-los altera o gabarito. No serviço público, classificar requerimentos (categórico) é diferente de prever prazos ou valores (contínuo), e a métrica inadequada leva a decisões erradas de política pública. O sinal disponível — rótulo, estrutura ou recompensa — determina o paradigma.",
      "preRequisitos": [
        "Conceitos de dado, atributo e modelo",
        "Noção de entrada e saída desejada (rótulo)"
      ],
      "objetivosObservaveis": [
        "Classificar um problema em aprendizado supervisionado, não supervisionado ou por reforço",
        "Distinguir classificação (saída categórica) de regressão (saída contínua)",
        "Citar exemplos de agrupamento e de redução de dimensionalidade",
        "Eleger métrica compatível com o tipo de tarefa"
      ],
      "competencias": [
        "Classificação de problema: identificar o tipo de sinal disponível",
        "Escolha de abordagem: associar paradigma e algoritmo ao problema"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u1-t1-s1 (Abordagens de inteligência artificial: regras, aprendizado de máquina e deep learning) — contexto das abordagens de IA",
        "m5-u2-t1-s2 (Aprendizado não supervisionado: agrupamento e redução de dimensionalidade) — contraste supervisionado vs não supervisionado"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação e regressão são tópicos centrais de aprendizado de máquina em informática para concursos, pois diferenciam tarefas categóricas de contínuas e determinam a métrica correta. Os itens exploram essa distinção com gabarito que varia conforme a confusão entre os paradigmas. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que aprendizado supervisionado exige rótulos (pares entrada-saída desejada), enquanto não supervisionado descobre estrutura sem rótulos e o de reforço usa recompensa. Diferencia ter rótulo de não ter, o primeiro critério para escolher o paradigma. Reconhece classificação como saída categórica e regressão como saída numérica contínua.",
      "intermediario": "Nível intermediário: o aluno distingue classificação de regressão e cita algoritmos exemplares (regressão logística e árvores para classificação; regressão linear e árvores de regressão para regressão). Sabe que k-means e hierárquico fazem agrupamento e que PCA reduz dimensionalidade. Escolhe a métrica conforme a tarefa: acurácia para classificação, MAE/RMSE/R² para regressão.",
      "avancado": "Nível avançado: o aluno escolhe paradigma e técnica conforme o problema concreto, reconhecendo que variáveis numéricas discretizadas podem ser tratadas como classes, alterando a pergunta. Sabe interpretar reforço como agente, ambiente e recompensa, com sinal atrasado e sequencial, diferente da supervisão imediata.",
      "especialista": "Nível especialista: o aluno integra paradigma, dados e governança, definindo quando usar cada abordagem sob restrições de explicabilidade e custo. Avalia a adequação da métrica à finalidade pública e propõe controles de qualidade para o pipeline de treinamento e inferência."
    },
    "comparacoes": [
      {
        "tema": "classificação x regressão",
        "a": {
          "rotulo": "Classificação",
          "texto": "Saída categórica: prevê a classe de um item (ex.: requerimento 'pendente' ou 'deferido', tipo de assunto). Usa algoritmos como regressão logística e árvores de decisão; métricas como acurácia, precisão e recall."
        },
        "b": {
          "rotulo": "Regressão",
          "texto": "Saída contínua: prevê um valor numérico (ex.: dias úteis de análise, valor de imóvel, demanda esperada). Usa regressão linear e árvores de regressão; métricas como MAE, RMSE e R²."
        },
        "diferencaGabarito": "A diferença está na natureza da saída (categoria vs número contínuo), o que muda o algoritmo e a métrica; confusão entre as duas altera o gabarito da questão."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Para problema binário, basta um modelo de regressão com corte em 0,5.",
        "porqueErrada": "O corte 0,5 é convenção, não necessidade; deve ser definido pelo custo dos erros e pela distribuição das previsões, e classificadores próprios (logística, árvores) calibram melhor as probabilidades.",
        "versaoCorreta": "É possível usar regressão com corte, mas o ponto de corte deve ser escolhido pelo custo dos erros dos dois tipos e pela distribuição das previsões, não fixado em 0,5 por padrão."
      },
      {
        "afirmacaoEquivocada": "Agrupamento é aprendizado supervisionado porque encontra grupos nos dados.",
        "porqueErrada": "Agrupamento opera sem alvo rotulado: descobre estrutura sozinho. Rótulos só entram na avaliação externa, se disponíveis, e não no treinamento.",
        "versaoCorreta": "Agrupamento é não supervisionado: não exige rótulos para treinar. Rótulos, quando existem, servem apenas para validar os grupos após descobertos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Aprendizado supervisionado",
        "Classificação",
        "Regressão",
        "Aprendizado não supervisionado",
        "Aprendizado por reforço",
        "Rótulo",
        "Métrica"
      ],
      "regras": [
        "A escolha do paradigma depende do sinal disponível (rótulo, estrutura, recompensa).",
        "A métrica acompanha o tipo de tarefa: acurácia para classificação, MAE/RMSE/R² para regressão."
      ],
      "comparacoes": [
        "Supervisionado exige rótulos; não supervisionado descobre estrutura sem rótulos."
      ],
      "fluxos": [
        "Dados com rótulo levam ao modelo supervisionado (classificação ou regressão); sem rótulo, o modelo não supervisionado descobre agrupamento ou reduz dimensionalidade."
      ],
      "excecoes": [
        "Variáveis numéricas discretizadas podem ser tratadas como classes, alterando a pergunta e a tarefa de classificação para regressão."
      ],
      "palavrasChave": [
        "supervisionado",
        "não supervisionado",
        "reforço",
        "classificação",
        "regressão",
        "agrupamento",
        "PCA"
      ],
      "checklist": [
        "Classifico o problema em paradigma?",
        "Distingo classificação de regressão?",
        "Cito exemplos de não supervisionado?",
        "Escolho métrica conforme a tarefa?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Prever se um requerimento será protocolado como 'pendente' ou 'deferido' é problema de classificação ou de regressão?",
        "dados": "Saída alvo com duas categorias: 'pendente' e 'deferido'; entrada são atributos do requerimento (tipo, área, anexos).",
        "conceitos": [
          "classificação",
          "saída categórica"
        ],
        "estrategia": "Identificar que a saída alvo é categórica (duas classes), não numérica contínua, portanto o problema é classificação, e se o alvo fosse 'dias até a decisão' seria regressão.",
        "execucao": [
          "Identificar a variável alvo do problema: 'pendente' ou 'deferido'.",
          "Verificar que o alvo é categórico, com classes discretas, não um número contínuo.",
          "Concluir que se trata de classificação, pois prevê classe.",
          "Observar que, se o alvo fosse 'dias até a decisão', seria regressão."
        ],
        "resultado": "Classificação: a saída é categórica (pendente/deferido). Se o alvo fosse 'dias até a decisão', seria regressão.",
        "justificativa": "O tipo de saída define a tarefa: categoria discreta indica classificação; número contínuo indica regressão. Como 'pendente' ou 'deferido' são classes, o problema é de classificação.",
        "errosFrequentes": [
          "Acreditar que qualquer previsão com números é regressão, ignorando que a saída pode ser categoria codificada numericamente.",
          "Confundir o fato de usar algoritmo de regressão logística com o problema ser de regressão; a logística é um classificador."
        ],
        "variacao": "Se o alvo mudar de 'pendente/deferido' para 'dias úteis até a decisão', o problema deixa de ser classificação e passa a ser regressão, pois a saída passa a ser numérica contínua."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um modelo de regressão prevê dias úteis de análise de um requerimento; a operação quer uma resposta 'sim/não cabe no prazo de 10 dias'. Como converter a previsão contínua em decisão binária?",
        "dados": "Previsão contínua do modelo em dias úteis (ex.: 7, 9, 11 dias); regra de negócio 'cabe no prazo de 10 dias'; necessidade de declarar o limiar e medir impacto de erros dos dois tipos.",
        "conceitos": [
          "limiar de decisão",
          "regressão convertida em classificação"
        ],
        "estrategia": "Aplicar um limiar sobre a previsão contínua (<= 10 dias = sim) e declarar explicitamente a escolha do limiar, medindo o impacto de falsos positivos e falsos negativos, pois a conversão é decisão de política, não detalhe técnico.",
        "execucao": [
          "Obter a previsão contínua do modelo de regressão (dias úteis estimados).",
          "Definir o limiar de corte (<= 10 dias resulta em 'sim, cabe no prazo').",
          "Aplicar o limiar a cada previsão para gerar a resposta binária sim/não.",
          "Declarar a escolha do limiar e medir o impacto de classificações erradas dos dois tipos."
        ],
        "resultado": "Aplicar limiar sobre a previsão contínua (<= 10 dias = sim), declarando explicitamente a escolha do limiar e medindo impacto de classificações erradas dos dois tipos; a conversão é decisão de política, não detalhe técnico.",
        "justificativa": "Transformar uma previsão contínua em binária exige um limiar explícito; sem declará-lo e sem medir os erros de ambos os tipos, a decisão de política pública fica arbitrária e não auditável.",
        "errosFrequentes": [
          "Acreditar que o corte de 0,5 ou 10 dias é ótimo por padrão, sem avaliar custo dos erros.",
          "Tratar a conversão como detalhe técnico do modelo, ignorando que é uma decisão de política pública."
        ],
        "variacao": "Se o prazo mudasse de 10 para 15 dias, o limiar seria reajustado e o impacto de falsos positivos/negativos precisaria ser reavaliado, mantendo a mesma estrutura de decisão binária."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Para problema binário, basta um modelo de regressão com corte em 0,5.' Essa leitura está correta?",
        "dados": "Problema de classificação binária; proposta de usar regressão com corte fixo em 0,5; custo dos erros e distribuição das previsões não informados.",
        "conceitos": [
          "corte de decisão",
          "classificador próprio"
        ],
        "estrategia": "Rejeitar a leitura ingênua: o corte 0,5 é convenção, não necessidade; o ponto de corte deve ser definido pelo custo dos erros e pela distribuição das previsões, e classificadores próprios calibram melhor as probabilidades.",
        "execucao": [
          "Reconhecer que regressão com corte é possível, mas não é a melhor escolha por padrão.",
          "Verificar que 0,5 é convenção arbitrária, não uma necessidade técnica.",
          "Definir o corte com base no custo dos erros dos dois tipos e na distribuição das previsões.",
          "Preferir classificadores próprios (logística, árvores) que calibram melhor as probabilidades."
        ],
        "resultado": "Reduz a rigor: é possível, mas 0,5 é convenção, não necessidade; o corte deve ser definido pelo custo dos erros e pela distribuição das previsões, e classificadores próprios (logística, árvores) costumam calibrar melhor as probabilidades.",
        "justificativa": "A afirmação apresenta o corte 0,5 como se fosse obrigatório e suficiente, mas ele é apenas uma convenção. Sem levar em conta o custo dos erros e a distribuição das previsões, a decisão binária pode ser inadequada para o contexto público.",
        "errosFrequentes": [
          "Aceitar 0,5 como corte universal sem considerar custo dos erros.",
          "Acreditar que regressão com corte substitui um classificador próprio em qualquer cenário."
        ],
        "variacao": "Se o custo de um falso negativo (benefício negado indevidamente) for muito maior que o de um falso positivo, o corte ideal se afasta de 0,5 e deve ser ajustado para privilegiar a aprovação em casos duvidosos."
      }
    ]
  },
  "m5-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Aprendizado não supervisionado é cobrado em concursos porque exige distinguir agrupamento de classificação e entender o papel da redução de dimensionalidade; confundi-los muda o gabarito. No serviço público, agrupar chamados sem categorias ou comprimir atributos de desempenho são tarefas exploratórias comuns, mas seus resultados são hipóteses que precisam de validação antes de virar decisão.",
      "preRequisitos": [
        "Conceitos de dado e de distância entre exemplos",
        "Noção de estrutura sem rótulos"
      ],
      "objetivosObservaveis": [
        "Definir agrupamento e redução de dimensionalidade",
        "Citar algoritmos exemplares (k-means, hierárquico, PCA)",
        "Explicar como avaliar grupos sem rótulos"
      ],
      "competencias": [
        "Análise exploratória de dados sem rótulo",
        "Visualização de dados e interpretação de grupos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t1-s1 (Aprendizado supervisionado: classificação e regressão) — contraste supervisionado vs não supervisionado",
        "m5-u2-t2-s1 (Rotulagem, atributos, variável-alvo e engenharia de atributos) — continuação da unidade de aprendizado de máquina"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Aprendizado não supervisionado é tema de relevância média no programa de informática, especialmente na distinção entre agrupamento e classificação e no papel da redução de dimensionalidade. Os itens podem perguntar sobre k-means, PCA e avaliação sem rótulos. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que o algoritmo não supervisionado busca padrões sem rótulo, ou seja, sem alvo previamente conhecido. Aprende que agrupamento particiona exemplos por similaridade e que redução de dimensionalidade projeta dados em menos variáveis. Reconhece k-means, hierárquico e PCA como algoritmos exemplares.",
      "intermediario": "Nível intermediário: o aluno distingue agrupamento de redução de dimensionalidade e cita algoritmos (k-means por centróides, hierárquico por dendrograma, PCA por variância, t-SNE/UMAP para visualização). Sabe avaliar grupos sem rótulos com silhouette, inércia e estabilidade, e entende que escala dos dados afeta distâncias e grupos.",
      "avancado": "Nível avançado: o aluno avalia a qualidade dos grupos e escolhe k com critério, interpretando limitações como escolha de k, escala dos dados e interpretação subjetiva dos grupos. Integra a análise não supervisionada com a decisão de negócio ou pública.",
      "especialista": "Nível especialista: o aluno integra a análise não supervisionada com decisão de negócio, definindo quando usar agrupamento ou redução de dimensionalidade em pipelines públicos e como validar os resultados antes de transformá-los em ação administrativa."
    },
    "comparacoes": [
      {
        "tema": "agrupamento x classificação",
        "a": {
          "rotulo": "Agrupamento (clustering)",
          "texto": "Descobre grupos nos dados por similaridade, sem classes pré-definidas; exemplos: k-means por centróides e hierárquico por dendrograma."
        },
        "b": {
          "rotulo": "Classificação",
          "texto": "Atribui uma classe conhecida a cada exemplo, exigindo dados rotulados; exemplos: regressão logística e árvores de decisão."
        },
        "diferencaGabarito": "Agrupamento descobre grupos; classificação atribui classe conhecida. O primeiro é não supervisionado, o segundo supervisionado."
      },
      {
        "tema": "PCA x t-SNE",
        "a": {
          "rotulo": "PCA",
          "texto": "Redução linear de dimensionalidade que preserva a variância global dos dados; adequada para entender estrutura geral."
        },
        "b": {
          "rotulo": "t-SNE",
          "texto": "Técnica não linear de redução para visualização que preserva a vizinhança local entre pontos; adequada para explorar clusters em 2D/3D."
        },
        "diferencaGabarito": "PCA preserva variância global e é linear; t-SNE preserva vizinhança local para visualização. Servem a propósitos diferentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Agrupamento exige dados rotulados para treinar.",
        "porqueErrada": "Agrupamento é não supervisionado: opera sem alvo rotulado, descobrindo estrutura por conta própria. Rótulos só entram na avaliação externa, se disponíveis.",
        "versaoCorreta": "Agrupamento é não supervisionado e dispensa rótulos no treinamento; quando existem rótulos, servem apenas para conferir os grupos já descobertos."
      },
      {
        "afirmacaoEquivocada": "PCA cria novas informações nos dados.",
        "porqueErrada": "PCA projeta os dados em menos variáveis preservando a variância; não cria informação, apenas combina as variáveis originais em componentes principais.",
        "versaoCorreta": "PCA reduz a dimensão projetando e preservando variância, sem criar novas informações; os componentes principais são combinações lineares dos atributos originais."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Agrupamento",
        "k-means",
        "Hierárquico",
        "PCA",
        "t-SNE",
        "Silhouette",
        "Inércia",
        "Redução de dimensionalidade"
      ],
      "regras": [
        "k-means minimiza a inércia (soma de distâncias ao centróide); PCA maximiza a variância explicada.",
        "A escala dos dados afeta distâncias e, portanto, os grupos encontrados."
      ],
      "comparacoes": [
        "Agrupamento descobre grupos; classificação atribui classe conhecida."
      ],
      "fluxos": [
        "Dados sem rótulo vão ao algoritmo não supervisionado, que descobre agrupamento ou reduz dimensionalidade; o resultado é hipótese a validar com métricas e contexto."
      ],
      "excecoes": [
        "A escolha de k nem sempre é óbvia: depende de critério e de negócio, exigindo validação com métricas e sentido operacional."
      ],
      "palavrasChave": [
        "agrupamento",
        "k-means",
        "PCA",
        "silhouette",
        "inércia",
        "dimensionalidade"
      ],
      "checklist": [
        "Defino agrupamento?",
        "Cito algoritmos?",
        "Explico redução de dimensionalidade?",
        "Avalio grupos sem rótulos?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Milhares de chamados de atendimento chegam sem categorias definidas. Que tarefa não supervisionada é natural para descobrir temas recorrentes?",
        "dados": "Volume grande de chamados de atendimento sem categoria pré-definida; objetivo é descobrir temas recorrentes para propor taxonomia e dimensionar filas.",
        "conceitos": [
          "agrupamento",
          "taxonomia"
        ],
        "estrategia": "Agrupar os chamados por conteúdo para identificar temas recorrentes; usar os grupos para propor a taxonomia e dimensionar filas, com validação dos especialistas do atendimento.",
        "execucao": [
          "Coletar o conteúdo textual dos chamados de atendimento sem categoria.",
          "Aplicar agrupamento (ex.: k-means) sobre representação do conteúdo (ex.: TF-IDF).",
          "Examinar os grupos descobertos para identificar temas recorrentes.",
          "Propor taxonomia e dimensionar filas, validando os grupos com especialistas do atendimento."
        ],
        "resultado": "Agrupamento por conteúdo do chamado, para descobrir temas recorrentes; os grupos servem para propor taxonomia e dimensionar filas, com validação por especialistas do atendimento.",
        "justificativa": "Sem rótulos pré-definidos, a tarefa natural é agrupamento, que descobre estrutura nos dados. Os grupos são hipóteses que devem ser validadas por especialistas antes de virarem taxonomia oficial.",
        "errosFrequentes": [
          "Acreditar que os grupos descobertos são automaticamente perfis reais de usuário, sem validação externa.",
          "Usar agrupamento como se fosse classificação, esperando classes pré-definidas."
        ],
        "variacao": "Se os chamados já tivessem categorias definidas, a tarefa seria classificação supervisionada, não agrupamento, pois haveria alvo rotulado para treinar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um dataset tem 80 atributos de desempenho de equipes. Qual o papel da redução de dimensionalidade nesse cenário?",
        "dados": "Dataset com 80 atributos de desempenho de equipes; objetivo é comprimir para 2-3 dimensões para visualização e remover ruído/redundância de atributos correlacionados.",
        "conceitos": [
          "redução de dimensionalidade",
          "PCA",
          "ruído e redundância"
        ],
        "estrategia": "Usar redução de dimensionalidade (PCA) para projetar os 80 atributos em 2-3 dimensões, preservando variância, facilitando visualização e removendo redundância, com clareza de que os eixos sintéticos não são atributos originais interpretáveis.",
        "execucao": [
          "Verificar que os 80 atributos incluem variáveis correlacionadas e ruído.",
          "Aplicar PCA para projetar os dados em 2-3 componentes principais.",
          "Usar as 2-3 dimensões para visualização e análise exploratória.",
          "Manter clareza de que os eixos sintéticos não são atributos originais interpretáveis."
        ],
        "resultado": "Comprimir para 2-3 dimensões para visualização e remoção de ruído/redundância (atributos correlacionados), facilitando análise, com clareza de que os eixos sintéticos não são atributos originais interpretáveis.",
        "justificativa": "PCA reduz 80 atributos para poucas dimensões preservando variância, mas os novos eixos são combinações lineares dos atributos originais, não atributos interpretable diretamente; essa ressalva evita interpretação equivocada da análise pública.",
        "errosFrequentes": [
          "Acreditar que PCA cria novas informações, quando apenas projeta e preserva variância.",
          "Interpretar os eixos sintéticos de PCA como atributos originais com significado direto."
        ],
        "variacao": "Se o dataset tivesse poucos atributos e não correlacionados, a redução de dimensionalidade traria pouco ganho e poderia descartar informação relevante."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O algoritmo encontrou 5 grupos, logo existem 5 perfis reais de usuário.' Essa leitura está correta?",
        "dados": "Algoritmo de agrupamento encontrou 5 grupos; afirmação conclui que existem 5 perfis reais de usuário; ausência de validação externa (sentido operacional, estabilidade em nova amostra).",
        "conceitos": [
          "agrupamento como hipótese",
          "validação externa"
        ],
        "estrategia": "Rejeitar a leitura ingênua: tratar os grupos como hipótese dependente de parâmetros e escala, verificar a estabilidade em uma nova amostra, avaliar o sentido operacional com especialistas da área e somente após validação externa converter os grupos em base para decisão.",
        "execucao": [
          "Reconhecer que os 5 grupos são resultado de um algoritmo com parâmetros escolhidos, não uma verdade revelada.",
          "Verificar a estabilidade dos grupos em uma nova amostra de dados.",
          "Avaliar o sentido operacional dos grupos com especialistas da área.",
          "Somente após validação externa considerar os grupos como base para decisão."
        ],
        "resultado": "Errado. A afirmação confunde hipótese com evidência: o algoritmo escolheu parâmetros (k e escala) que geraram cinco grupos, mas isso não prova a existência de cinco perfis reais de usuário; sem validação externa, converter os grupos em perfis é uma inferência não fundamentada e inadequada para decisão pública.",
        "justificativa": "O número de grupos depende de parâmetros (ex.: k) e da escala dos dados; não é uma evidência de perfis reais. Sem validação externa, converter grupos em perfis de usuário é uma inferência não fundamentada, inadequada para decisão pública.",
        "errosFrequentes": [
          "Tratar a saída do algoritmo como fato consumado, sem validar estabilidade e sentido operacional.",
          "Escolher k arbitrariamente e afirmar que o número de grupos reflete a realidade dos usuários."
        ],
        "variacao": "Se o algoritmo fosse reexecutado com k diferente ou com dados reescalados, os grupos poderiam mudar, mostrando que os 5 grupos iniciais eram uma hipótese, não uma realidade fixa."
      }
    ]
  }
};
