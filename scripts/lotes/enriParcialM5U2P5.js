const enriParcialM5U2P5 = {
  "m5-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Entender MAE, RMSE e R² é essencial para avaliar modelos de regressão usados em previsão orçamentária, prazos e demandas públicas, pois essas métricas traduzem erro em unidades do problema e revelam sensibilidade a outliers.",
      "preRequisitos": [
        "Conceitos de regressão linear",
        "Noção de erro como diferença entre previsto e real",
        "Média e raiz quadrada"
      ],
      "objetivosObservaveis": [
        "Calcular MAE, MSE e RMSE em conjunto pequeno",
        "Interpretar R² como proporção de variância explicada",
        "Escolher métrica conforme sensibilidade a outliers"
      ],
      "competencias": [
        "Avaliação de modelo de regressão",
        "Interpretação numérica em contexto público",
        "Comunicação de incerteza"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t3-s1 (Matriz de confusão, precisão e recall) — contraste classificação x regressão",
        "m5-u2-t1-s1 (Aprendizado supervisionado: classificação e regressão) — base para diferenciar tarefas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O cálculo e a interpretação de MAE, RMSE e R² são objeto de avaliação em problemas contínuos. Confundir métricas de regressão com métricas de classificação altera o gabarito em questões de avaliação de modelo. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende erro como diferença entre valor real e previsto, reconhece que MAE fica em unidades do alvo e que RMSE penaliza erros grandes. Distingue métricas de regressão das de classificação e evita confundir R² com erro absoluto.",
      "intermediario": "Nível intermediário: o aluno calcula MAE, MSE e RMSE com aritmética correta, interpreta R² como proporção de variância explicada e reconhece que R² não indica erro absoluto. Compara modelos usando a mesma métrica e mesmo conjunto de teste.",
      "avancado": "Nível avançado: o aluno escolhe MAE quando quer robustez a outliers e RMSE quando quer punir erros grandes, interpreta discrepância entre MAE e RMSE como sinal de outliers e avalia necessidade de transformação de variáveis.",
      "especialista": "Nível especialista: o aluno integra métricas de regressão com governança, analisa erro por subgrupo, comunica limites do R² e define critérios de aceitação de modelo alinhados ao risco administrativo e à equidade."
    },
    "comparacoes": [
      {
        "tema": "MAE x RMSE",
        "a": {
          "rotulo": "MAE",
          "texto": "Média dos erros absolutos, em unidades do alvo, robusta a outliers, útil quando erros médios importam mais que picos."
        },
        "b": {
          "rotulo": "RMSE",
          "texto": "Raiz do erro quadrático médio, em unidades do alvo, penaliza erros grandes, útil quando desvios extremos são custosos."
        },
        "diferencaGabarito": "MAE trata erros de forma linear; RMSE amplifica erros grandes. A escolha depende da tolerância a outliers e do custo de erros extremos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "R² de 0,9 prova que o modelo é adequado para decisão.",
        "porqueErrada": "R² mede proporção de variância explicada, não magnitude do erro em unidades úteis nem equidade por subgrupo.",
        "versaoCorreta": "R² alto não garante adequação; é preciso avaliar erro em unidades do alvo e analisar por subgrupo."
      },
      {
        "afirmacaoEquivocada": "RMSE é sempre menor ou igual ao MAE.",
        "porqueErrada": "Pela desigualdade de Jensen, RMSE é maior ou igual ao MAE, com igualdade apenas quando todos os erros têm mesmo módulo.",
        "versaoCorreta": "RMSE >= MAE; a diferença indica presença de erros grandes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "MAE",
        "MSE",
        "RMSE",
        "R²",
        "Erro absoluto",
        "Variância explicada"
      ],
      "regras": [
        "MAE = média dos |y-ŷ|",
        "RMSE = √(média dos (y-ŷ)²)"
      ],
      "comparacoes": [
        "MAE robusto a outliers",
        "RMSE sensível a outliers"
      ],
      "fluxos": [
        "Obter previsões → calcular erros → aplicar métrica → interpretar em unidades do alvo"
      ],
      "excecoes": [
        "R² pode ser negativo em modelos piores que a média"
      ],
      "palavrasChave": [
        "MAE",
        "RMSE",
        "R²",
        "outlier",
        "variância"
      ],
      "checklist": [
        "Erros calculados corretamente?",
        "Unidades conferidas?",
        "RMSE comparado ao MAE?",
        "R² interpretado sem confundir com erro absoluto?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Dado três previsões 10, 20, 30 confrontadas com valores reais 12, 18, 34, calcular o MAE e interpretar o erro médio em unidades do alvo.",
        "dados": "Três observações; previsões 10, 20, 30; reais 12, 18, 34; erros absolutos 2, 2, 4.",
        "conceitos": [
          "MAE",
          "Erro absoluto"
        ],
        "estrategia": "Calcular os erros absolutos para cada observação, somar os valores e dividir pelo número de casos para obter a média do erro em unidades do alvo.",
        "execucao": [
          "Calcular |12-10| = 2.",
          "|18-20| = 2.",
          "|34-30| = 4.",
          "Somar 2+2+4 = 8.",
          "Dividir por 3."
        ],
        "resultado": "Erros absolutos: 2, 2, 4 → MAE = 8/3 ≈ 2,67 unidades do alvo.",
        "justificativa": "MAE representa o erro médio em unidades do alvo; 2,67 indica que, em média, a previsão erra por cerca de 2,67 unidades.",
        "errosFrequentes": [
          "Esquecer o valor absoluto e somar erros com sinal.",
          "Dividir por número errado de observações."
        ],
        "variacao": "Se a terceira observação real for 28, erro absoluto = 2, MAE = (2+2+2)/3 = 2, mostrando redução com previsões mais próximas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um modelo de previsão apresenta MAE 1,9 e RMSE 6,4. Interpretar a distância entre as métricas e propor ações de diagnóstico para reduzir erros extremos.",
        "dados": "Modelo com MAE 1,9 e RMSE 6,4 em previsão de demanda; discrepância grande entre média dos erros absolutos e raiz do erro quadrático.",
        "conceitos": [
          "MAE",
          "RMSE",
          "Outlier"
        ],
        "estrategia": "Comparar MAE e RMSE, observar que RMSE muito maior indica presença de poucos erros muito grandes e planejar investigação de casos atípicos.",
        "execucao": [
          "Calcular razão RMSE/MAE.",
          "Identificar observações com erro elevado.",
          "Investigar causas como sazonalidade ou dados atípicos."
        ],
        "resultado": "Como o RMSE é bem superior ao MAE, a interpretação é que os erros se concentram em poucos casos muito grandes. A investigação deve recair sobre esses casos extremos — pontos atípicos e sazonalidade mal capturada pelo modelo —, e não sobre a média dos acertos.",
        "justificativa": "RMSE penaliza erros grandes; diferença alta revela cauda pesada nos erros, que a média esconde. É necessário diagnosticar casos extremos.",
        "errosFrequentes": [
          "Interpretar MAE baixo como modelo bom sem checar RMSE.",
          "Ignorar análise de casos com erro elevado."
        ],
        "variacao": "Se RMSE cair para 2,1 mantendo MAE 1,9, erros distribuem-se de forma mais homogênea e o modelo é mais estável."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'R² de 0,9 prova que o modelo é adequado para decisão.' Avaliar se o coeficiente de determinação isolado garante adequação prática.",
        "dados": "Modelo com R² 0,9 em previsão de prazo; avaliação de adequação apenas pelo coeficiente de determinação, sem análise de erro em dias.",
        "conceitos": [
          "R²",
          "Variância explicada",
          "Erro absoluto"
        ],
        "estrategia": "Mostrar que R² mede proporção de variância explicada, não exatidão em unidades úteis nem equidade.",
        "execucao": [
          "Calcular variância explicada.",
          "Verificar erro médio em dias.",
          "Analisar erro por subgrupo."
        ],
        "resultado": "Errado. R² mede explicação de variância, não exatidão em termos úteis nem equidade por segmento; adequação depende do tamanho do erro na unidade do alvo.",
        "justificativa": "Um R² alto pode coexistir com erros absolutos inaceitáveis para o gestor. Decisões públicas exigem erro em unidades do alvo e análise por subgrupo.",
        "errosFrequentes": [
          "Confundir R² alto com baixo erro absoluto.",
          "Usar R² para comparar modelos com escalas diferentes."
        ],
        "variacao": "Se o modelo tiver R² 0,9 porém RMSE de 15 dias, a previsão pode ser inútil para cumprir metas de atendimento, mostrando limitação do R²."
      }
    ]
  }
};
