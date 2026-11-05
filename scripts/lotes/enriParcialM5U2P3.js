const enriParcialM5U2P3 = {
  "m5-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A separação treino/validação/teste e o vazamento de dados determinam se a avaliação de um modelo é válida ou ilusória, ponto central na avaliação de modelos em concursos de TI. Um modelo com métrica inflada por vazamento funciona nos testes e falha em produção, e no serviço público isso significa decisões automatizadas confiáveis apenas no papel. Entender o papel de cada conjunto, a validação cruzada e a ordem correta das operações (dividir primeiro, ajustar pré-processamento apenas no treino) é imprescindível para avaliar pipelines de IA com rigor.",
      "preRequisitos": [
        "Conceitos de modelo e erro de previsão",
        "Noção de generalização de um modelo treinado"
      ],
      "objetivosObservaveis": [
        "Descrever o papel de treino, validação e teste no ciclo de ML",
        "Explicar o que é vazamento de dados e suas principais fontes",
        "Aplicar validação cruzada para estimativa mais estável",
        "Ordenar corretamente as operações de divisão e pré-processamento"
      ],
      "competencias": [
        "Desenho de experimento: separar conjuntos sem vazamento",
        "Auditoria de pipeline: detectar uso indevido de informação antes da previsão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t2-s1 (Rotulagem, atributos, variável-alvo e engenharia de atributos) — o alvo como atributo é fonte clássica de vazamento",
        "m5-u2-t3-s1 (Matriz de confusão, precisão e recall) — métrica afetada diretamente pelo vazamento",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — linhagem e confiabilidade dos dados de entrada"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Separação de conjuntos e vazamento de dados são temas de relevância alta em informática para concursos porque diferenciam avaliação válida de ilusória e determinam se o modelo vai funcionar fora do treino. Os itens perguntam sobre o papel de cada conjunto, a validação cruzada e as fontes de vazamento. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende por que se separa os dados em treino, validação e teste, reconhecendo que cada conjunto tem um papel distinto no ciclo de aprendizado supervisionado. Sabe que o teste deve ficar intocado até o fim para estimar a generalização real do modelo.",
      "intermediario": "Nível intermediário: o aluno explica o papel de cada conjunto, aplica validação cruzada (k-fold) para estimativa mais estável, identifica fontes de vazamento (alvo como atributo, pré-processamento no conjunto inteiro, seleção de atributos antes da divisão) e ordena as operações corretamente.",
      "avancado": "Nível avançado: o aluno identifica vazamento em um pipeline completo, distingue vazamento de overfitting, e recomenda reavaliação do zero quando métricas foram vazadas, evitando confiar em resultados inflados.",
      "especialista": "Nível especialista: o aluno audita um experimento completo, define regras de governança para pipelines de ML públicos e assegura que o pré-processamento esteja dentro da validação para evitar vazamento oculto."
    },
    "comparacoes": [
      {
        "tema": "validação x teste",
        "a": {
          "rotulo": "Validação",
          "texto": "Conjunto usado durante o desenvolvimento para selecionar modelo e ajustar hiperparâmetros; orienta decisões do projeto e pode ser consultado várias vezes."
        },
        "b": {
          "rotulo": "Teste",
          "texto": "Conjunto usado uma única vez, ao final, para estimar a generalização do modelo escolhido; deve ficar intocado durante todo o desenvolvimento."
        },
        "diferencaGabarito": "A validação guia decisões de desenvolvimento; o teste estima o resultado final. Usar o teste para escolher hiperparâmetros é vazamento e infla a métrica de forma ilegítima."
      },
      {
        "tema": "vazamento x overfitting",
        "a": {
          "rotulo": "Vazamento de dados",
          "texto": "Uso de informação indisponível no momento da previsão (ex.: alvo como atributo, estatísticas do conjunto inteiro), que infringe a métrica e produz desempenho ilusório."
        },
        "b": {
          "rotulo": "Overfitting",
          "texto": "Modelo decora o ruído do treino e generaliza mal, apesar de não ter usado informação proibida; a correção é regularizar ou simplificar o modelo."
        },
        "diferencaGabarito": "Vazamento entra informação proibida nos dados; overfitting memoriza ruído sem informação proibida. A correção do vazamento é remover a fonte e refazer o fluxo, não apenas ajustar o modelo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Vazamento é o mesmo que overfitting.",
        "porqueErrada": "Overfitting é o modelo decorar o treino (correção: regularizar/simplificar); vazamento é informação proibida entrar nos dados (correção: remover a fonte e refazer o fluxo). Métricas vazadas exigem reavaliação do zero, não apenas ajuste de hiperparâmetros.",
        "versaoCorreta": "Errado. Overfitting decora o treino e pede regularização; vazamento envolve informação proibida nos dados e exige remover a fonte e refazer o fluxo, com reavaliação do zero."
      },
      {
        "afirmacaoEquivocada": "Calcular média e desvio em toda a base antes de dividir em treino/teste não faz diferença.",
        "porqueErrada": "Calcular estatísticas de padronização no conjunto inteiro é vazamento: a informação do teste influência o treino, infla a métrica e o desempenho real cai quando o modelo encontra dados verdadeiramente novos.",
        "versaoCorreta": "É necessário dividir primeiro e ajustar o padronizador apenas no treino, aplicando ao teste depois, pois a estatística do teste não pode influenciar o treino."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Conjunto de treino",
        "Conjunto de validação",
        "Conjunto de teste",
        "Vazamento de dados",
        "Validação cruzada (k-fold)",
        "Ordem das operações"
      ],
      "regras": [
        "Treino ajusta parâmetros; validação seleciona modelo e hiperparâmetros; teste estima a generalização final, usado uma única vez.",
        "Dividir primeiro e ajustar pré-processamento apenas no treino; aplicar ao teste sem usar suas estatísticas no treino."
      ],
      "comparacoes": [
        "Validação guia decisões; teste estima o resultado final."
      ],
      "fluxos": [
        "Dividir os dados em treino/validação/teste primeiro; ajustar pré-processamento apenas no treino; aplicar ao validação e teste; usar o teste apenas ao final."
      ],
      "excecoes": [
        "Validação cruzada não elimina a necessidade de um teste intocado; o teste continua sendo usado uma única vez para a estimativa final."
      ],
      "palavrasChave": [
        "treino",
        "validação",
        "teste",
        "vazamento",
        "validação cruzada",
        "padronização",
        "generalização"
      ],
      "checklist": [
        "Separei treino/validação/teste antes de pré-processar?",
        "O teste ficou intocado até o fim?",
        "Ajustei o padronizador só no treino?",
        "Identifiquei fontes de vazamento no pipeline?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um modelo apresenta acurácia de 99,9 % em teste e 70 % em produção. Quais hipóteses investigar primeiro?",
        "dados": "Acurácia de teste muito alta (99,9 %) e acurácia de produção muito baixa (70 %); suspeita de que o modelo use informação que não existirá em operação real.",
        "conceitos": [
          "vazamento de dados",
          "overfitting"
        ],
        "estrategia": "Investigar vazamento antes de overfitting: atributo do futuro, pré-processamento ajustado no conjunto inteiro e duplicatas entre treino e teste. Auditar a linhagem dos dados para ver o que o modelo usa e quando aquela informação passa a existir.",
        "execucao": [
          "Comparar acurácia de teste com acurácia de produção para confirmar o gap.",
          "Investigar se existe atributo do futuro ou informação pós-decisão nas entradas.",
          "Verificar se estatísticas de padronização foram calculadas no conjunto inteiro antes da divisão.",
          "Auditar duplicatas entre treino e teste que poderiam vazar informação."
        ],
        "resultado": "Vazamento (atributo do futuro, ajuste prévio no conjunto inteiro, duplicatas), não apenas overfitting. Auditar linhagem: o que o modelo usa e quando aquela informação passa a existir.",
        "justificativa": "O abismo entre teste e produção sinaliza que o modelo aproveita informação indevida durante o treino; overfitting sozinho não costuma produzir um gap tão dramático, então a investigação deve priorizar fontes de vazamento.",
        "errosFrequentes": [
          "Atribuir o gap apenas a overfitting e tentar regularizar, sem investigar vazamento de dados.",
          "Aceitar a acurácia de teste como evidência de qualidade, sem conferir o desempenho em dados verdadeiramente novos."
        ],
        "variacao": "Se o gap entre teste e produção fosse pequeno (ex.: 90 % teste e 85 % produção), a causa seria mais provavelmente overfitting ou variância, e não vazamento severo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma equipe padronizou atributos com média e desvio calculados em TODA a base, depois dividiu em treino e teste. Qual a correção?",
        "dados": "Base completa com média e desvio calculados sobre todos os exemplos; divisão em treino/teste feita depois da padronização; necessidade de reverter e aplicar o padronizador corretamente.",
        "conceitos": [
          "padronização",
          "vazamento por estatísticas",
          "pipeline de pré-processamento"
        ],
        "estrategia": "Dividir PRIMEIRO e ajustar o padronizador apenas no treinamento, aplicando-o em seguida ao teste (pipeline de pré-processamento dentro da validação). A estatística do teste não pode informar o treino, senão o modelo acessa informação do futuro.",
        "execucao": [
          "Desfazer a padronização feita no conjunto inteiro.",
          "Dividir a base em treino e teste antes de qualquer pré-processamento.",
          "Calcular média e desvio apenas nos dados de treino.",
          "Aplicar esses mesmos parâmetros (média e desvio do treino) para padronizar o teste."
        ],
        "resultado": "Dividir PRIMEIRO e ajustar o padronizador apenas no treinamento, aplicando-o em seguida ao teste — a estatística do teste não pode informar o treino.",
        "justificativa": "Usar estatísticas de toda a base para padronizar faz o treino 'ver' o teste, o que é vazamento: o modelo se beneficia de informação que não estará disponível ao fazer previsões em dados novos.",
        "errosFrequentes": [
          "Acreditar que padronizar antes de dividir é inofensivo, pois é apenas uma transformação linear.",
          "Calcular estatísticas do teste e usar no treino, pensando que não há problema porque os valores são parecidos."
        ],
        "variacao": "Se a base fosse dividida primeiro e a padronização aplicada separadamente em cada conjunto com suas próprias estatísticas, também haveria vazamento sutil, pois as estatísticas do teste não devem influenciar o treino."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Vazamento é o mesmo que overfitting.' Essa leitura está correta, ou são fenômenos distintos?",
        "dados": "Afirmação que iguala vazamento a overfitting; necessidade de distinguir informação proibida (vazamento) de memorização de ruído (overfitting) e suas respectivas correções.",
        "conceitos": [
          "vazamento de dados",
          "overfitting",
          "reavaliação do zero"
        ],
        "estrategia": "Rejeitar a leitura ingênua: overfitting é decorar o treino (correção: regularizar/simplificar); vazamento é informação proibida entrar nos dados (correção: remover a fonte e refazer o fluxo). Métricas vazadas exigem reavaliação do zero.",
        "execucao": [
          "Reconhecer que overfitting e vazamento são fenômenos diferentes com causas e correções distintas.",
          "Identificar que vazamento envolve informação proibida nos dados, não apenas memorização de ruído.",
          "Concluir que métricas vazadas exigem reavaliação do zero, não ajuste de hiperparâmetros.",
          "Rejeitar a afirmação como incorreta."
        ],
        "resultado": "Errado. Overfitting: modelo decora o treino (correção: regularizar/simplificar). Vazamento: informação proibida entra nos dados (correção: remover a fonte e refazer o fluxo). Métricas vazadas exigem reavaliação do zero.",
        "justificativa": "Igualar vazamento a overfitting leva à correção errada (regularizar) quando o problema é de fonte de dados (remover a informação proibida). Sem remover a fonte, qualquer métrica continua ilusória.",
        "errosFrequentes": [
          "Acreditar que regularizar o modelo resolve vazamento de dados, quando a causa é informação proibida nas entradas.",
          "Confiar na métrica de validação após remover parte do vazamento, sem reavaliar do zero com o pipeline corrigido."
        ],
        "variacao": "Se o modelo tiver acurácia alta no treino e baixa na validação, sem uso de informação proibida, o problema é overfitting e a correção é simplificar ou regularizar, não remover fontes de vazamento."
      }
    ]
  },
  "m5-u2-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O desbalanceamento de classes é crítico porque a acurácia global esconde o fracasso na classe minoritária — exatamente a classe que importa em fraudes, doenças raras e triagem pública. Concursos de TI cobram a escolha de métrica adequada (precisão, recall, F1, AUC-PR) e a comparação de técnicas de reamostragem com seus efeitos colaterais. No serviço público, decidir entre reduzir falsos positivos ou falsos negativos é uma política de erro com impacto direto em cidadãos.",
      "preRequisitos": [
        "Matriz de confusão e métricas de classificação",
        "Conceitos de precisão, recall e F1"
      ],
      "objetivosObservaveis": [
        "Identificar desbalanceamento de classes em um conjunto de dados",
        "Escolher métrica adequada ao contexto (precisão, recall, F1, AUC-PR)",
        "Selecionar técnica de reamostragem (oversampling, undersampling, SMOTE)",
        "Ajustar limiar de decisão conforme o custo do erro"
      ],
      "competencias": [
        "Análise de problema desbalanceado: reconhecer quando acurácia é enganosa",
        "Decisão de política de erro: priorizar precisão ou recall conforme o custo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t3-s1 (Matriz de confusão, precisão e recall) — base para métricas adequadas ao desbalanceamento",
        "m5-u2-t3-s2 (Especificidade, F1 e limiar de decisão) — ajuste de limiar e F1",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — integridade da distribuição de classes"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Desbalanceamento de classes é tema de relevância alta no programa de informática porque a acurácia global esconde o fracasso na classe minoritária e a escolha de métrica e técnica afeta o gabarito. Os itens exploram matriz de confusão, precisão, recall, F1 e reamostragem em cenários de fraude e triagem. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno percebe que acurácia alta pode esconder fracasso total na classe minoritária, entendendo que um modelo que sempre prevê a classe majoritária pode ter acurácia elevada sem ser útil.",
      "intermediario": "Nível intermediário: o aluno escolhe métrica adequada (precisão, recall, F1, AUC-PR), seleciona técnica de reamostragem (oversampling, undersampling, SMOTE) e entende os efeitos colaterais de cada uma (overfitting, perda de informação, exemplos sintéticos).",
      "avancado": "Nível avançado: o aluno ajusta o limiar de decisão conforme o custo do erro (falso negativo versus falso positivo) e integra a escolha de métrica com a política do órgão público, definindo prioridade de precisão ou recall conforme o caso.",
      "especialista": "Nível especialista: o aluno integra desbalanceamento, custo de erro e governança, definindo política de erro para decisões automatizadas que afetam cidadãos e monitorando a estabilidade das métricas em produção."
    },
    "comparacoes": [
      {
        "tema": "oversampling x undersampling",
        "a": {
          "rotulo": "Oversampling",
          "texto": "Aumenta exemplos da classe minoritária (por duplicação ou geração sintética, ex.: SMOTE); risco de overfitting se houver duplicação exata, mas preserva toda a informação da classe majoritária."
        },
        "b": {
          "rotulo": "Undersampling",
          "texto": "Remove exemplos da classe majoritária para equilibrar; simples e rápido, mas descarta informação potencialmente útil da classe majoritária."
        },
        "diferencaGabarito": "Oversampling preserva a majoritária mas pode superajustar com duplicação exata; undersampling descarta informação da majoritária. SMOTE mitiga o overfitting gerando exemplos sintéticos da minoritária."
      },
      {
        "tema": "acurácia x F1 em desbalanceamento",
        "a": {
          "rotulo": "Acurácia global",
          "texto": "Proporção de acertos sobre o total; em desbalanceamento severo é enganosa porque um modelo que sempre prevê a majoritária tem acurácia alta sem acertar a minoritária."
        },
        "b": {
          "rotulo": "F1-score",
          "texto": "Média harmônica entre precisão e recall; avalia o desempenho na classe de interesse sem ser mascarado pelo domínio da classe majoritária."
        },
        "diferencaGabarito": "Acurácia global é enganosa em desbalanceamento; F1 captura o equilíbrio entre precisão e recall da classe minoritária e deve ser preferida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Basta duplicar os exemplos da classe minoritária para equilibrar.",
        "porqueErrada": "Duplicação exata não acrescenta informação e favorece a memorização dos exemplos copiados; prefira reamostragem inteligente, pesos de classe ou coleta adicional, validando sempre em conjunto desbalanceado de teste.",
        "versaoCorreta": "Insuficiente e arriscado: copiar exatamente os exemplos da minoritária não acrescenta informação e induz memorização; prefira reamostragem inteligente, pesos de classe ou coleta adicional, validando sempre em teste desbalanceado."
      },
      {
        "afirmacaoEquivocada": "O conjunto de teste deve ser balanceado para avaliar de forma justa.",
        "porqueErrada": "Balancear o teste esconde o problema real: a avaliação precisa espelhar a operação, inclusive se desbalanceada, para não superestimar o desempenho em produção.",
        "versaoCorreta": "O conjunto de teste deve refletir a distribuição real esperada em produção; balancear o teste esconde o problema real e superestima o desempenho."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Desbalanceamento de classes",
        "Acurácia enganosa",
        "Precisão",
        "Recall",
        "F1-score",
        "AUC-PR",
        "Oversampling",
        "Undersampling",
        "SMOTE",
        "Limiar de decisão"
      ],
      "regras": [
        "Um modelo que sempre prevê a classe majoritária tem acurácia alta sem acertar a minoritária; acurácia global é enganosa em desbalanceamento.",
        "O teste deve refletir a distribuição real de produção, inclusive desbalanceada."
      ],
      "comparacoes": [
        "Oversampling preserva a majoritária mas pode superajustar; undersampling descarta informação da majoritária."
      ],
      "fluxos": [
        "Diagnosticar desbalanceamento; escolher métrica adequada (recall/F1/AUC-PR); aplicar reamostragem ou ajuste de limiar; validar em teste desbalanceado."
      ],
      "excecoes": [
        "Nem toda reamostragem melhora o modelo: oversampling exato pode causar overfitting e undersampling pode descartar sinais importantes da majoritária."
      ],
      "palavrasChave": [
        "desbalanceamento",
        "acurácia",
        "precisão",
        "recall",
        "F1",
        "oversampling",
        "undersampling",
        "SMOTE",
        "limiar"
      ],
      "checklist": [
        "A acurácia global esconde erro na minoritária?",
        "Escolhi métrica adequada ao contexto?",
        "Avaliou em teste desbalanceado?",
        "O limiar reflete o custo do erro?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um detector de anomalia apresenta 97 % de acurácia, mas nunca sinaliza anomalia, que ocorre em 3 % dos casos. Avalie.",
        "dados": "Acurácia de 97 %; anomalia ocorre em 3 % dos casos; o modelo nunca sinaliza anomalia; recall da classe rara é zero.",
        "conceitos": [
          "acurácia enganosa",
          "recall da classe minoritária"
        ],
        "estrategia": "Reconhecer que a acurácia alta é enganosa: prevendo sempre 'não-anomalia', o modelo acerta 97 % mas tem recall zero na classe rara, sendo inútil para a finalidade de detecção.",
        "execucao": [
          "Observar que a anomalia ocorre em apenas 3 % dos casos.",
          "Verificar que o modelo nunca sinaliza anomalia (previsão sempre 'não-anomalia').",
          "Concluir que recall da classe rara é zero, apesar da acurácia de 97 %.",
          "Recomendar avaliar com matriz de confusão, precisão, recall e F1 da minoritária."
        ],
        "resultado": "Acurácia enganosa: recall da classe rara é zero — o modelo é inútil para a finalidade. Avaliar com matriz de confusão, precisão, recall e F1 da minoritária.",
        "justificativa": "Prever sempre a classe majoritária acerta 97 % dos casos, mas falha 100 % nas anomalias; a acurácia global mascara o fracasso na classe que realmente interessa, então métricas focadas na minoritária são obrigatórias.",
        "errosFrequentes": [
          "Aceitar acurácia alta como prova de modelo bom, sem olhar o desempenho na classe minoritária.",
          "Não calcular recall da classe rara, que é o que revela o fracasso na detecção."
        ],
        "variacao": "Se a anomalia ocorresse em 30 % dos casos e o modelo nunca a sinalizasse, a acurária seria de 70 %, mas o fracasso na minoritária continuaria total, mostrando que o problema não depende da raridade extrema."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma falsa acusação de irregularidade gera dano grave à reputação do cidadão. Onde priorizar?",
        "dados": "Cenário de fiscalização com classe positiva (irregularidade) rara; falso positivo acusa indevidamente um cidadão e causa dano à reputação; falso negativo deixa passar uma irregularidade.",
        "conceitos": [
          "precisão da classe positiva",
          "falso positivo",
          "custo do erro"
        ],
        "estrategia": "Priorizar precisão da classe positiva para reduzir falsos positivos, aceitando menor recall, com revisão humana dos casos sinalizados. A métrica escolhida acompanha o custo do erro: falso positivo caro exige precisão alta.",
        "execucao": [
          "Identificar que falso positivo tem custo alto (dano à reputação do cidadão).",
          "Priorizar precisão da classe positiva para reduzir acusações indevidas.",
          "Aceitar menor recall (deixar passar algumas irregularidades) como trade-off.",
          "Implementar revisão humana dos casos sinalizados antes de qualquer sanção."
        ],
        "resultado": "Priorizar precisão da classe positiva (reduzir falsos positivos), aceitando menor recall, com revisão humana dos casos sinalizados — a métrica acompanha o custo do erro.",
        "justificativa": "Quando o erro tem consequência grave para o cidadão, a métrica deve refletir esse custo: reduzir falsos positivos vale mais do que capturar todas as irregularidades, e a revisão humana adiciona salvaguarda.",
        "errosFrequentes": [
          "Buscar recall máximo (sinalizar tudo) sem considerar o dano dos falsos positivos.",
          "Escolher a mesma mérica para todos os contextos, ignorando que o custo do erro varia com a decisão pública."
        ],
        "variacao": "Se o custo do falso negativo fosse maior (ex.: doença rara não tratada), a prioridade inverteria para recall, aceitando mais falsos positivos para não perder casos reais."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Basta duplicar os exemplos da classe minoritária para equilibrar.' Essa leitura está correta?",
        "dados": "Afirmação de que duplicação exata da minoritária resolve desbalanceamento; duplicação não traz informação nova e favorece memorização; técnicas melhores incluem reamostragem inteligente, pesos de classe e coleta adicional.",
        "conceitos": [
          "duplicação exata",
          "overfitting por reamostragem",
          "pesos de classe"
        ],
        "estrategia": "Rejeitar a leitura ingênua: duplicação exata não traz informação nova e favorece memorização dos exemplos copiados. Prefira reamostragem inteligente, pesos de classe ou coleta adicional, sempre validando em teste desbalanceado.",
        "execucao": [
          "Reconhecer que duplicar exemplos não cria informação nova, apenas repete os mesmos.",
          "Identificar que repetição exata favorece overfitting nos exemplos duplicados.",
          "Concluir que a afirmação é insuficiente e arriscada.",
          "Recomendar reamostragem inteligente, pesos de classe ou coleta adicional, validada em teste desbalanceado."
        ],
        "resultado": "Insuficiente e arriscado: duplicação exata não traz informação nova e favorece memorização; prefira reamostragem inteligente, pesos de classe ou coleta adicional, sempre validando em teste desbalanceado.",
        "justificativa": "Duplicar a minoritária equilibra a contagem mas não enriquece o aprendizado; o modelo pode decorar exemplos repetidos e falhar em casos novos. Técnicas que geram variação ou ajustam custo são mais seguras.",
        "errosFrequentes": [
          "Acreditar que equilibrar a contagem de classes resolve tudo, independentemente de como o equilíbrio é alcançado.",
          "Não validar em teste desbalanceado, superestimando o desempenho real após reamostragem."
        ],
        "variacao": "Se a duplicação fosse acompanhada de pequenas variações nos exemplos (SMOTE), a técnica traria informação nova e reduziria o risco de memorização em relação à duplicação exata."
      }
    ]
  }
};
