const enriParcialM5U2P4 = {
  "m5-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Montar a matriz de confusão e calcular precisão e recall é essencial para avaliar classificadores binários usados em triagem administrativa, saúde e segurança pública, pois esses indicadores revelam o custo de falsos positivos e falsos negativos em decisões que afetam cidadãos.",
      "preRequisitos": [
        "Noção de classificação binária e rótulos positivo e negativo",
        "Operação de divisão e proporção simples",
        "Leitura e interpretação de tabelas 2x2"
      ],
      "objetivosObservaveis": [
        "Montar a matriz de confusão a partir de contagens de VP, FP, FN e VN",
        "Calcular precisão como VP/(VP+FP) e interpretar o significado de acerto entre as acusações",
        "Calcular recall como VP/(VP+FN) e explicar a capacidade de não perder casos positivos"
      ],
      "competencias": [
        "Análise técnica de saída de classificador",
        "Leitura crítica de risco de erro em decisões públicas",
        "Tomada de decisão fundamentada em métricas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t3-s2 (Especificidade, F1 e limiar de decisão) — amplia o conjunto de métricas e a escolha do limiar",
        "m5-u2-t2-s1 (Rotulagem, atributos, variável-alvo e engenharia de atributos) — contextualiza por que acurácia global pode enganar"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A matriz de confusão e o cálculo de precisão e recall são cobrados em cenários de triagem, detecção de fraude e concessão de benefício. A métrica é central para diferenciar o custo do falso positivo do falso negativo em decisões administrativas. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante o aluno reconhece as quatro células da matriz de confusão: VP, FP, FN e VN, e escreve a tabela 2x2 com base em um exemplo numérico simples. Distingue positivo real de previsto e percebe que precisão e recall respondem a perguntas diferentes sobre o classificador e seu impacto.",
      "intermediario": "No nível intermediário o aluno calcula precisão = VP/(VP+FP) e recall = VP/(VP+FN) com aritmética correta e interpreta cada índice em termos de custo administrativo. Compara pares de resultados e reconhece o trade-off entre reduzir falsos positivos e reduzir falsos negativos.",
      "avancado": "No nível avançado o aluno ajusta o limiar de decisão a partir das métricas e discute cenários em que um modelo de alta precisão é preferível a um de alto recall. Identifica distorções causadas por dados desbalanceados e propõe complementação com análise humana para casos de FN.",
      "especialista": "No nível especialista o aluno integra matriz de confusão com governança, custos de erro, auditoria e transparência. Avalia o impacto de mudar o ponto de corte em políticas públicas, comunica incerteza a gestores e propõe monitoramento contínuo de VP, FP, FN e VN em produção."
    },
    "comparacoes": [
      {
        "tema": "Precisão x Recall",
        "a": {
          "rotulo": "Precisão",
          "texto": "Mede a proporção de casos previstos positivos que são realmente positivos, ou seja, VP/(VP+FP). Foca no custo de acusar indevidamente e é útil quando falso positivo é caro, como bloqueio indevido de benefício."
        },
        "b": {
          "rotulo": "Recall",
          "texto": "Mede a proporção de casos realmente positivos que foram corretamente detectados, VP/(VP+FN). Foca no custo de deixar de detectar e é útil quando falso negativo é grave, como deixar passar fraude."
        },
        "diferencaGabarito": "Precisão penaliza falsos positivos; recall penaliza falsos negativos. Uma pode subir enquanto a outra cai; a escolha depende do custo relativo dos dois tipos de erro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Precisão e recall são a mesma medida vistas por ângulos diferentes.",
        "porqueErrada": "As duas métricas respondem a perguntas distintas: precisão avalia a confiabilidade das previsões positivas; recall avalia a cobertura dos positivos reais. Aumentar um pode reduzir o outro.",
        "versaoCorreta": "São medidas distintas: precisão governa falsos positivos e recall governa falsos negativos; existe o trade-off entre elas, resumido pelo F1."
      },
      {
        "afirmacaoEquivocada": "Recall de 0,95 sempre indica um modelo bom.",
        "porqueErrada": "Recall alto pode vir acompanhado de precisão muito baixa, gerando muitos falsos positivos e acusações indevidas. A qualidade depende do contexto de custo dos erros.",
        "versaoCorreta": "Recall alto indica que poucos positivos reais são perdidos, mas sem precisão o modelo pode sinalizar excessivamente; a avaliação exige as duas métricas e o custo dos erros."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Matriz de confusão",
        "Verdadeiro positivo",
        "Falso positivo",
        "Falso negativo",
        "Verdadeiro negativo",
        "Precisão",
        "Recall"
      ],
      "regras": [
        "Precisão = VP/(VP+FP)",
        "Recall = VP/(VP+FN)"
      ],
      "comparacoes": [
        "Precisão foca na qualidade das previsões positivas",
        "Recall foca na cobertura dos positivos reais"
      ],
      "fluxos": [
        "Coletar previsões e realidades → preencher matriz 2x2 → calcular VP, FP, FN, VN → derivar precisão e recall"
      ],
      "excecoes": [
        "Em conjuntos muito desbalanceados, valores altos de recall podem ocultar precisão baixa"
      ],
      "palavrasChave": [
        "matriz de confusão",
        "precisão",
        "recall",
        "falso positivo",
        "falso negativo"
      ],
      "checklist": [
        "A matriz foi montada corretamente?",
        "VP e FN foram distinguidos?",
        "Precisão e recall foram calculados?",
        "A interpretação considera custo dos erros?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Dado um classificador binário com VP = 30, FP = 10 e FN = 5, o aluno deve calcular precisão e recall e interpretar os valores em termos de confiabilidade e cobertura.",
        "dados": "Matriz com 30 verdadeiros positivos, 10 falsos positivos e 5 falsos negativos; total de positivos previstos = 40 e de positivos reais = 35; VN não informado para este cálculo.",
        "conceitos": [
          "Matriz de confusão",
          "Precisão",
          "Recall"
        ],
        "estrategia": "Identificar as células relevantes, aplicar as fórmulas de precisão e recall e interpretar os resultados em termos de confiança e cobertura.",
        "execucao": [
          "Anotar VP = 30, FP = 10, FN = 5.",
          "Calcular denominador da precisão: VP+FP = 40.",
          "Dividir VP por 40 para obter precisão.",
          "Calcular denominador do recall: VP+FN = 35.",
          "Dividir VP por 35 para obter recall."
        ],
        "resultado": "Precisão = 30/40 = 0,75. Recall = 30/35 ≈ 0,857. Entre as acusações, 75% são corretas; entre os positivos reais, cerca de 86% são capturados.",
        "justificativa": "A precisão mede a proporção de previsões positivas corretas, e 0,75 indica que um quarto das acusações é falsa. O recall mede a proporção de reais positivos encontrados, e 0,857 mostra que 14% dos casos positivos permanecem não detectados.",
        "errosFrequentes": [
          "Usar total de casos como denominador em vez de VP+FP ou VP+FN.",
          "Confundir precisão com recall trocando FP por FN no denominador."
        ],
        "variacao": "Se FP subir para 20 mantendo VP 30 e FN 5, a precisão cai para 30/50 = 0,60 enquanto o recall permanece 30/35 ≈ 0,857, ilustrando o trade-off."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em triagem de indício de fraude, o custo de acusação indevida é alto para o cidadão e para a administração. Como equilibrar precisão e recall para proteger direitos sem manter fraudes ativas?",
        "dados": "Modelo de triagem de requerimentos; cada falso positivo gera trabalho de revisão e desgaste ao cidadão; cada falso negativo mantém fraude ativa; necessidade de equilibrar precisão e recall com análise humana complementar.",
        "conceitos": [
          "Precisão",
          "Recall",
          "Limiar de decisão",
          "Custo dos erros"
        ],
        "estrategia": "Elevar a precisão exigindo evidência mínima para sinalizar, aceitando queda no recall, e complementar com amostragem humana dos casos não sinalizados.",
        "execucao": [
          "Aumentar o limiar de decisão para reduzir falsos positivos.",
          "Aceitar que alguns positivos reais serão perdidos, reduzindo o recall.",
          "Amostrar parte dos casos não sinalizados para revisão humana.",
          "Monitorar VP, FP, FN e VN após a mudança."
        ],
        "resultado": "Escolher limiar que eleva a precisão, aceitando recall menor e complementando com análise humana dos casos não sinalizados por amostragem.",
        "justificativa": "Custo alto de acusação indevida torna a precisão prioritária; reduzir falsos positivos protege o cidadão e a administração. A amostragem humana compensa a perda de recall sem aumentar o número de acusações infundadas.",
        "errosFrequentes": [
          "Priorizar recall sem considerar o custo de acusações falsas.",
          "Manter limiar baixo por padrão sem avaliar impacto administrativo."
        ],
        "variacao": "Se o custo de deixar fraude passar aumentar, o limiar pode ser reduzido para aumentar recall, aceitando maior taxa de revisão humana para filtrar falsos positivos."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Precisão e recall são a mesma medida vistas por ângulos diferentes.' Avaliar se a afirmação está correta no contexto de classificação binária.",
        "dados": "Afirmação comparando precisão e recall como sinônimos; contexto de avaliação de classificador binário; necessidade de distinguir foco em falsos positivos e falsos negativos.",
        "conceitos": [
          "Precisão",
          "Recall",
          "Falso positivo",
          "Falso negativo"
        ],
        "estrategia": "Demonstrar que as métricas têm denominadores diferentes e respondem a perguntas distintas, mostrando um caso em que precisão sobe e recall desce.",
        "execucao": [
          "Escrever fórmulas: precisão = VP/(VP+FP); recall = VP/(VP+FN).",
          "Exemplificar aumento do limiar: FP cai, precisão sobe; FN sobe, recall cai.",
          "Concluir que não são sinônimos."
        ],
        "resultado": "Errado como sinônimo: medem coisas distintas — precisão governa falsos positivos; recall, falsos negativos. Uma pode subir enquanto a outra cai; por isso existe F1.",
        "justificativa": "Precisão e recall respondem a questões diferentes sobre o classificador. A primeira avalia a qualidade das previsões positivas; a segunda, a cobertura dos positivos reais. Não há equivalência matemática entre elas.",
        "errosFrequentes": [
          "Trocar o denominador de precisão pelo de recall.",
          "Achar que melhoria em uma métrica implica melhoria na outra."
        ],
        "variacao": "Se o limiar for modificado para privilegiar detecção, recall aumenta e precisão diminui, confirmando que as métricas variam em sentidos opostos."
      }
    ]
  },
  "m5-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calcular especificidade, F1 e escolher limiar de decisão é necessário para avaliar classificadores quando os custos de erro são assimétricos, como em concessão de benefício ou detecção de fraude, e para evitar decisões baseadas apenas em acurácia global.",
      "preRequisitos": [
        "Matriz de confusão e cálculo de precisão e recall",
        "Noção de limiar de decisão em classificação",
        "Conceito de média harmônica"
      ],
      "objetivosObservaveis": [
        "Calcular especificidade como TN/(TN+FP)",
        "Calcular F1 a partir de precisão e recall",
        "Justificar escolha de limiar com base em custos dos erros"
      ],
      "competencias": [
        "Avaliação de classificador sob custos assimétricos",
        "Interpretação de métricas em contexto administrativo",
        "Comunicação de trade-off a gestores"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t3-s1 (Matriz de confusão, precisão e recall) — base para especificidade e F1",
        "m5-u2-t3-s3 (Métricas de regressão e interpretação numérica) — contraste classificação x regressão"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Os itens pedem o cálculo de especificidade e F1 e a escolha de limiar conforme o custo dos erros. Confundir especificidade com precisão ou fixar o limiar em 0,5 conduz a erro de gabarito na avaliação de classificadores. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece os quatro campos da matriz, diferencia verdadeiro negativo de falso positivo e escreve a fórmula da especificidade. Entende que F1 é média harmônica de precisão e recall e que limiar altera a classificação.",
      "intermediario": "Nível intermediário: o aluno calcula especificidade, F1 e acurácia a partir da matriz, compara cenários com limiar diferente e interpreta o trade-off entre precisão e recall. Justifica a escolha do limiar com base no custo dos erros.",
      "avancado": "Nível avançado: o aluno ajusta limiar para minimizar custo esperado total, integra especificidade para avaliar controle de falsos positivos em classe negativa e usa F1 para comparar modelos em dados desbalanceados.",
      "especialista": "Nível especialista: o aluno integra métricas, governança e política pública, define políticas de limiar com supervisão humana, documenta critérios de escolha e monitora estabilidade das métricas em produção."
    },
    "comparacoes": [
      {
        "tema": "Especificidade x Precisão",
        "a": {
          "rotulo": "Especificidade",
          "texto": "Mede TN/(TN+FP): proporção de negativos reais corretamente identificados. Foca na capacidade de não acusar indevidamente e é útil quando o custo de falsos positivos é alto."
        },
        "b": {
          "rotulo": "Precisão",
          "texto": "Mede VP/(VP+FP): proporção de positivos previstos que são reais. Foca na confiabilidade das acusações e é útil quando confirmar um positivo tem custo."
        },
        "diferencaGabarito": "Especificidade avalia o tratamento dos negativos reais; precisão avalia a qualidade das previsões positivas. Métricas diferentes com foco em classes distintas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O limiar ideal é sempre 0,5.",
        "porqueErrada": "A afirmação confunde convenção com regra: 0,5 é apenas o ponto de partida de um classificador calibrado sem custos assimétricos; quando os custos de falso positivo e falso negativo diferem, o limiar deve ser escolhido pela política de erro e validado em dados de teste.",
        "versaoCorreta": "O limiar ideal depende dos custos dos erros e da distribuição das previsões; 0,5 é apenas um ponto de partida."
      },
      {
        "afirmacaoEquivocada": "F1 é a média aritmética de precisão e recall.",
        "porqueErrada": "F1 é média harmônica, penaliza desequilíbrios entre precisão e recall e não é igual à média aritmética.",
        "versaoCorreta": "F1 = 2·P·R/(P+R) é média harmônica; é alta apenas quando precisão e recall são ambas altas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Especificidade",
        "F1",
        "Limiar de decisão",
        "Trade-off precisão-recall",
        "Média harmônica"
      ],
      "regras": [
        "Especificidade = TN/(TN+FP)",
        "F1 = 2·Precisão·Recall/(Precisão+Recall)"
      ],
      "comparacoes": [
        "Especificidade foca nos negativos reais",
        "Precisão foca nas previsões positivas"
      ],
      "fluxos": [
        "Definir limiar → gerar previsões → preencher matriz → calcular métricas → avaliar custo e ajustar limiar"
      ],
      "excecoes": [
        "Em dados altamente desbalanceados, acurácia global pode ser enganosa mesmo com boa especificidade"
      ],
      "palavrasChave": [
        "especificidade",
        "F1",
        "limiar",
        "trade-off",
        "sensibilidade"
      ],
      "checklist": [
        "Matriz foi preenchida?",
        "Especificidade calculada?",
        "F1 interpretado?",
        "Limiar justificado pelo custo?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em um modelo de triagem com VN = 850 e FP = 50, o aluno deve calcular a especificidade e interpretar a capacidade de identificar corretamente casos negativos.",
        "dados": "Total de negativos reais = VN + FP = 900; número de verdadeiros negativos = 850; falsos positivos = 50; contexto de triagem onde negativos são a maioria.",
        "conceitos": [
          "Especificidade",
          "Matriz de confusão",
          "Verdadeiro negativo"
        ],
        "estrategia": "Somar VN e FP para obter o total de negativos reais, dividir VN pelo total e interpretar a proporção como capacidade de não acusar indevidamente.",
        "execucao": [
          "Somar 850 + 50 = 900.",
          "Dividir 850 por 900.",
          "Converter para percentual."
        ],
        "resultado": "Especificidade = 850/900 ≈ 0,944: 94,4% dos negativos reais foram corretamente classificados.",
        "justificativa": "A especificidade mede a capacidade de identificar corretamente os negativos. 0,944 indica poucos falsos positivos em relação ao total de negativos reais.",
        "errosFrequentes": [
          "Confundir especificidade com precisão usando VP no numerador.",
          "Usar total geral como denominador."
        ],
        "variacao": "Se FP subir para 150 mantendo VN 850, especificidade cai para 850/1000 = 0,85, mostrando sensibilidade a falsos positivos."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um modelo apresenta precisão 0,4 e recall 0,9. Calcular o F1 e descrever o perfil operacional do classificador em termos de varredura sensível.",
        "dados": "Modelo com precisão 0,4 e recall 0,9; contexto de varredura sensível onde é importante não perder positivos; custo de revisão humana disponível.",
        "conceitos": [
          "F1",
          "Precisão",
          "Recall",
          "Média harmônica"
        ],
        "estrategia": "Aplicar fórmula de F1 e interpretar o perfil como sensível, com muitos falsos positivos.",
        "execucao": [
          "Multiplicar 0,4 × 0,9 = 0,36.",
          "Somar 0,4 + 0,9 = 1,3.",
          "Calcular 2×0,36/1,3 ≈ 0,554.",
          "Interpretar perfil."
        ],
        "resultado": "F1 = 2×(0,4×0,9)/(0,4+0,9) ≈ 0,554. Perfil de varredura sensível: quase todos os positivos são achados, mas 60% das acusações são falsas.",
        "justificativa": "F1 penaliza desequilíbrio; mesmo com recall alto, precisão baixa reduz o escore. O perfil indica triagem inicial com revisão humana, inadequado para decisão final.",
        "errosFrequentes": [
          "Usar média aritmética em vez de harmônica.",
          "Ignorar que F1 baixo reflete precisão ruim."
        ],
        "variacao": "Se precisão subir para 0,7 mantendo recall 0,9, F1 ≈ 0,78, mostrando melhora quando as duas métricas se equilibram."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O limiar ideal é sempre 0,5.' Avaliar a correção da afirmação considerando custos assimétricos de erro em decisão pública.",
        "dados": "Afirmação de limiar fixo em 0,5; contexto de concessão de benefício com custo assimétrico de erro; distribuição de probabilidades não uniforme.",
        "conceitos": [
          "Limiar de decisão",
          "Custo dos erros",
          "Política de erro"
        ],
        "estrategia": "Rejeitar a generalização mostrando que limiar depende de custo e distribuição, não de convenção.",
        "execucao": [
          "Reconhecer que 0,5 é convenção sem custos assimétricos.",
          "Ilustrar cenário onde falso negativo é mais grave.",
          "Sugerir ajuste de limiar para reduzir FN.",
          "Validar em dados de teste."
        ],
        "resultado": "Errado. Fixar o limiar em 0,5 sem avaliar o custo dos erros expõe a administração a acusações indevidas ou a casos positivos não detectados; o ponto de corte só se justifica com política de erro definida e validação em dados de teste.",
        "justificativa": "O ponto de corte ótimo minimiza custo esperado total, não maximiza acerto genérico. Fixar em 0,5 ignora a relação entre sensibilidade, especificidade e impacto administrativo.",
        "errosFrequentes": [
          "Acreditar que limiar 0,5 é ótimo por padrão.",
          "Escolher limiar sem avaliar custos dos erros."
        ],
        "variacao": "Se o custo de falso positivo aumentar, o limiar deve subir para reduzir acusações indevidas, mesmo que recall caia."
      }
    ]
  }
};
