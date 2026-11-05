const enriParcialM8U2P3 = {
  "m8-u2-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra a leitura de gráficos de dispersão e a distinção entre correlação e causalidade: associar horas de estudo a notas não prova que estudar causa a aprovação, e essa confusão muda o gabarito de itens de interpretação e de análise de dados públicos.",
      "preRequisitos": [
        "Conceitos de duas variáveis numéricas",
        "Leitura de gráficos em plano cartesiano",
        "Cálculo de média e desvio padrão"
      ],
      "objetivosObservaveis": [
        "Construir e interpretar um gráfico de dispersão de pares de valores",
        "Calcular o coeficiente de correlação de Pearson a partir dos desvios",
        "Diferenciar correlação de causalidade e identificar variáveis ocultas",
        "Classificar um ponto atípico como erro de medição ou caso legítimo"
      ],
      "competencias": [
        "Análise bivariada de dados",
        "Leitura crítica de evidências associativas",
        "Auditoria de conclusões causais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t5-s1 (Correlação, causalidade e conclusões indevidas) — desdobramento estatístico do tema citado no conteúdo",
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — resume a dispersão de uma variável",
        "m8-u2-t2-s1 (Linhas: ordenação temporal, continuidade e tendências) — contraponto: série temporal não prova relação entre variáveis"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de prova sobre gráficos de dispersão, coeficiente de correlação e causalidade aparecem com regularidade em bancas de dados e de estatística aplicada. A classificação é estimativa pedagógica qualitativa de adequação ao edital, não medição de incidência."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que o gráfico de dispersão coloca no plano cartesiano um ponto para cada par de valores de duas variáveis numéricas. Reconhece que a nuvem de pontos pode subir (associação positiva), descer (negativa) ou ficar dispersa sem padrão (ausente). Compreende que o coeficiente de correlação de Pearson varia de −1 a 1 e que valores próximos de zero indicam ausência de associação linear.",
      "intermediario": "Nível intermediário: o aluno calcula Pearson por r = Σ(x−x̄)(y−ȳ) ÷ √[Σ(x−x̄)² · Σ(y−ȳ)²], interpreta direção e força da associação linear e reconhece que r alto não diz nada sobre a causa. Identifica que uma relação não linear (formato de U) produz correlação próxima de zero e requer medidas de ranking, como Spearman.",
      "avancado": "Nível avançado: o aluno distingue ponto atípico por erro de coleta de caso legítimo extremo, evitando descartar observações por conveniência. Investiga variáveis ocultas que explicam a associação — disciplina, renda, acesso à internet — e pede desenho experimental ou estratégia de identificação antes de afirmar causalidade em políticas públicas.",
      "especialista": "Nível especialista: o aluno audita a inferência causal completa: amostra representativa, ausência de confundidores, temporalidade, plausibilidade do mecanismo e testes de robustez. Avalia o coeficiente de determinação com cuidado, verifica estabilidade da associação em subgrupos e decide se o estudo observacional sustenta decisão de política pública."
    },
    "comparacoes": [
      {
        "tema": "Correlação x causalidade",
        "a": {
          "rotulo": "Correlação",
          "texto": "Medida numérica da associação linear entre duas variáveis, varia de −1 a 1 e é obtida a partir dos desvios em relação às médias."
        },
        "b": {
          "rotulo": "Causalidade",
          "texto": "Relação em que a variação de uma variável produz a variação da outra; exige desenho experimental, temporalidade e controle de confundidores."
        },
        "diferencaGabarito": "A correlação é um resumo dos dados observados; a causalidade é uma afirmação sobre o mecanismo que exige evidência adicional. O erro de prova é derivar causa de uma correlação alta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Correlação alta entre horas de estudo e desempenho prova que o estudo causa o resultado.",
        "porqueErrada": "Observação simultânea de duas variáveis não isola a influência de uma sobre a outra; variáveis ocultas como disciplina prévia, recursos domésticos ou motivação de estudo afetam ambas.",
        "versaoCorreta": "O que se sustenta é que existe associação linear positiva forte; a afirmação causal exige desenho de pesquisa que controle os fatores de confusão."
      },
      {
        "afirmacaoEquivocada": "Todo ponto distante da nuvem de pontos deve ser excluído da análise.",
        "porqueErrada": "O ponto atípico pode ser um caso real e extremo, com informação relevante; excluí-lo sem investigação distorce a medida de dispersão e pode mascarar desigualdades.",
        "versaoCorreta": "Antes de remover uma observação, verifica-se a origem do dado: se houver erro de registro, corrige-se; se o caso for legítimo, mantém-se e documenta-se."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Gráfico de dispersão: um ponto no plano para cada par de valores de duas variáveis numéricas.",
        "Associação linear: relação em que os pontos se distribuem em torno de uma reta, para cima ou para baixo.",
        "Coeficiente de Pearson: medida da associação linear, que varia de −1 a 1 e é adimensional.",
        "Ponto atípico: valor que se afasta do padrão da nuvem e pode ser erro de coleta ou caso legítimo.",
        "Variável oculta: terceira variável que influência as duas observadas e explica a associação aparente.",
        "Causalidade: relação em que a variação de uma variável produz a variação da outra, exigindo desenho de estudo."
      ],
      "regras": [
        "r = Σ(x−x̄)(y−ȳ) ÷ √[Σ(x−x̄)² · Σ(y−ȳ)²]",
        "Sinal de r indica direção da associação; módulo indica força da associação linear",
        "Coeficiente de determinação r² é a proporção de variabilidade de Y linearmente associada a X"
      ],
      "comparacoes": [
        "Correlação (associação medida) x causalidade (mecanismo demonstrado)",
        "Outlier legítimo (caso real extremo) x erro de medição (falha de registro)"
      ],
      "fluxos": [
        "Coletar pares → plotar dispersão → descrever direção e força → calcular r → buscar outliers → investigar confundidores → decidir se há causalidade"
      ],
      "excecoes": [
        "Relação não linear pode produzir r próximo de zero; nesse caso usa-se correlação de ranking",
        "Amostras muito pequenas podem gerar coeficiente elevado sem estabilidade"
      ],
      "palavrasChave": [
        "dispersão",
        "associação",
        "correlação",
        "outlier",
        "confundidor",
        "causalidade"
      ],
      "checklist": [
        "Construí o gráfico de dispersão com os pares corretos?",
        "Descrevi direção e força da associação?",
        "Verifiquei se há pontos atípicos e a origem deles?",
        "Testei a presença de variáveis ocultas?",
        "Evitei afirmar causalidade sem evidência adicional?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcule o coeficiente de correlação de Pearson entre X e Y, sabendo que Σ(x−x̄)(y−ȳ) = 15, Σ(x−x̄)² = 10 e Σ(y−ȳ)² = 22,8, e interprete o resultado.",
        "dados": "Somas de desvios de cinco pares de observações: produto somado 15, soma dos quadrados de X 10 e soma dos quadrados de Y 22,8.",
        "conceitos": [
          "Coeficiente de correlação de Pearson",
          "Desvio em relação à média",
          "Associação linear"
        ],
        "estrategia": "Substituir as somas na fórmula de Pearson, obter o valor numérico e interpretar o sinal e o módulo antes de comentar qualquer relação de causa e efeito.",
        "execucao": [
          "Calcular o produto das somas de quadrados: 10 × 22,8 = 228.",
          "Extrair a raiz: √228 ≈ 15,10.",
          "Dividir o produto somado pela raiz: 15 ÷ 15,10 ≈ 0,993.",
          "Interpretar o sinal positivo e o módulo próximo de 1."
        ],
        "resultado": "r ≈ 0,993: associação linear positiva muito forte, com os pontos praticamente alinhados sobre uma reta crescente.",
        "justificativa": "O quociente quase igual a 1 mostra que os desvios de X e Y variam praticamente na mesma proporção e no mesmo sentido, o que caracteriza uma nuvem de pontos muito estreita em torno de uma reta ascendente.",
        "errosFrequentes": [
          "Dividir pela soma das somas em vez de extrair a raiz do produto",
          "Esquecer de sinalizar o coeficiente ao interpretar a direção da relação"
        ],
        "variacao": "Se o produto somado passar a −15 com os demais valores iguais, o coeficiente fica em −0,993, mantendo a força e invertendo a direção da associação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um estudo relatou r = 0,8 entre horas de estudo e pontuação, e o relatório afirma que cada hora extra de estudo causa acréscimo de 80 pontos. Avaliar a correção.",
        "dados": "Coeficiente r = 0,8 entre horas de estudo e pontuação; afirmação de efeito causal e de unidade por hora; variáveis de contexto não controladas.",
        "conceitos": [
          "Correlação x causalidade",
          "Variáveis ocultas",
          "Coeficiente angular da reta de regressão"
        ],
        "estrategia": "Separar o que o coeficiente realmente informa do que a conclusão atribui, apontar o erro de unidade e listar as explicações alternativas que exigem controle antes de qualquer decisão.",
        "execucao": [
          "Registrar que r = 0,8 indica apenas associação linear positiva forte.",
          "Identificar que r não expressa unidades de efeito por hora de estudo.",
          "Relacionar a unidade correta à inclinação da reta de regressão.",
          "Listar confundidores plausíveis, como disciplina prévia, renda e saúde."
        ],
        "resultado": "A afirmação é incorreta: há associação positiva forte, mas nem causalidade nem uma unidade de efeito por hora podem ser deduzidas de r isolado.",
        "justificativa": "O coeficiente de correlação é adimensional e não informa quanto Y varia por unidade de X; além disso, variáveis não observadas podem gerar toda a associação observada, de modo que a leitura causal exige desenho experimental ou estratégia de identificação.",
        "errosFrequentes": [
          "Ler r como se fosse coeficiente de regressão",
          "Aceitar a explicação causal sem mencionar variáveis de confusão",
          "Confundir associação estatisticamente forte com relevância prática"
        ],
        "variacao": "Se o estudo acrescentar um grupo de controle pareado por nota anterior e por horário de estudo, a hipótese causal fica mais plausível, mas ainda depende da qualidade do pareamento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'r = 0,95 significa que X explica 95% de Y.' Julgar a leitura e apresentar a leitura tecnicamente correta.",
        "dados": "Coeficiente de correlação r = 0,95 em estudo observacional; leitura de que X explica 95% da variação de Y.",
        "conceitos": [
          "Coeficiente de determinação",
          "Variabilidade explicada",
          "Associação linear"
        ],
        "estrategia": "Separar o que o coeficiente de correlação mede do que o coeficiente de determinação mede e lembrar que variabilidade associada não equivale a variação causada.",
        "execucao": [
          "Identificar que r mede a força da associação linear, não a proporção explicada.",
          "Calcular r² = 0,95² = 0,9025.",
          "Traduzir o resultado como cerca de 90% da variabilidade linearmente associada.",
          "Ressalvar que a leitura causal e a generalização fora da amostra permanecem abertas."
        ],
        "resultado": "Errado: r = 0,95 indica associação linear muito forte; a proporção de variabilidade linearmente associada é r² = 0,9025, e ainda assim isso não prova causalidade.",
        "justificativa": "O quadrado do coeficiente de correlação é o coeficiente de determinação, que expressa parcela da variabilidade de Y prevista linearmente por X; a confusão entre r e r² troca uma medida de intensidade por uma medida de proporção.",
        "errosFrequentes": [
          "Usar o valor de r diretamente como percentual de explicação",
          "Tratar variabilidade associada como variabilidade causada",
          "Supor que o ajuste é válido fora da amostra analisada"
        ],
        "variacao": "Com r = 0,70, o coeficiente de determinação cai para 0,49, mostrando que metade da variabilidade de Y fica sem explicação linear por X — o que reforça a importância de olhar além do coeficiente isolado."
      }
    ]
  },
  "m8-u2-t5-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O box plot resume a distribuição por cinco números e o cálculo de quartis, intervalo interquartílico e bigodes integram o conteúdo programático de estatística aplicada e de dados, com números concretos; confundir a convenção de Tukey com o critério de 3 vezes o intervalo interquartílico ou com percentis de software altera o gabarito.",
      "preRequisitos": [
        "Conceitos de quartis e mediana",
        "Ordenação de valores e contagem de posições",
        "Interpretação de medidas de dispersão"
      ],
      "objetivosObservaveis": [
        "Calcular Q1, mediana, Q3 e o intervalo interquartílico de um conjunto de dados",
        "Determinar bigodes e identificar pontos atípicos pela convenção de Tukey",
        "Explicar por que implementações diferentes produzem quartis distintos",
        "Comparar dois grupos com mesma mediana e dispersões diferentes"
      ],
      "competencias": [
        "Análise de distribuição de dados",
        "Leitura e construção de box plot",
        "Auditoria de método estatístico"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t3-s1 (Quartis, percentis e o método de posicionamento) — base do cálculo citada no conteúdo da unidade 8.3",
        "m8-u2-t4-s1 (Dispersão: associação, correlação e outliers) — detecta pontos atípicos em duas variáveis",
        "m8-u2-t1-s1 (Histograma: construção, classes e frequências) — mostra a forma completa da distribuição"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Cálculo de quartis e interpretação de box plot integram o conteúdo programático de estatística aplicada e de dados, com ênfase no reconhecimento dos bigodes e dos pontos atípicos. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno identifica as cinco peças do box plot — mínimo, primeiro quartil, mediana, terceiro quartil e máximo — e entende que a caixa contém a metade central dos dados, enquanto a linha dentro da caixa marca a mediana, que divide a amostra em duas metades iguais.",
      "intermediario": "Nível intermediário: o aluno calcula Q1, Q3 e o intervalo interquartílico, Q3 − Q1, a partir dos dados ordenados, e reconhece que a mediana resiste a valores extremos enquanto a média não, o que torna o box plot mais informativo em distribuições assimétricas.",
      "avancado": "Nível avançado: o aluno aplica a convenção de Tukey, bigodes em Q1 − 1,5 × IQR e Q3 + 1,5 × IQR, classifica como ponto atípico o valor que as ultrapassa, investiga sua origem antes de removê-lo e compara grupos que compartilham a mesma mediana com dispersões distintas.",
      "especialista": "Nível especialista: o aluno audita o método: declara a convenção de percentil usada, reconhece que interpolações diferentes alteram Q1 e Q3 em amostras pequenas, verifica o impacto da remoção de outliers nas conclusões e comunica a comparação de grupos por forma, centro e dispersão."
    },
    "comparacoes": [
      {
        "tema": "Box plot x histograma",
        "a": {
          "rotulo": "Box plot",
          "texto": "Resume a distribuição em cinco números: mínimo, Q1, mediana, Q3 e máximo, com bigodes e pontos atípicos; não mostra a forma entre os intervalos."
        },
        "b": {
          "rotulo": "Histograma",
          "texto": "Exibe a forma completa da distribuição por classes de frequência e valores, permitindo ver assimetria e multimodalidade, mas sem resumir a dispersão em números."
        },
        "diferencaGabarito": "O box plot condensa a distribuição em indicadores calculáveis, útil para comparar grupos; o histograma descreve a forma, útil para diagnóstico. O erro de prova é esperar do box plot a visualização da forma."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Os pontos atípicos de um box plot são sempre erros de registro e devem ser descartados.",
        "porqueErrada": "O critério de Tukey apenas marca valores além dos bigodes; o caso pode ser legítimo e extremo, e a exclusão distorce a leitura da distribuição.",
        "versaoCorreta": "Investiga-se a origem do valor: corrigido o erro de registro, mantém-se; caso legítimo, permanece e é documentado, com análise de sensibilidade."
      },
      {
        "afirmacaoEquivocada": "Todos os pacotes estatísticos calculam os mesmos quartis para o mesmo conjunto de dados.",
        "porqueErrada": "Cada ferramenta adota um método de posicionamento de percentis, com interpolação, arredondamento ou convenção exclusiva, e os resultados divergem sobretudo em amostras pequenas.",
        "versaoCorreta": "Ao divulgar um box plot, declara-se o método de cálculo dos quartis e a convenção dos bigodes, comparando resultados apenas quando a base metodológica coincide."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Box plot: diagrama que resume a distribuição por mínimo, Q1, mediana, Q3 e máximo.",
        "Mediana: valor central da amostra ordenada, robusto a valores extremos.",
        "Quartis: Q1 marca o percentil 25 e Q3 o percentil 75 da distribuição.",
        "Intervalo interquartílico: amplitude da metade central dos dados, dada por Q3 − Q1.",
        "Bigodes: extensões a partir dos quartis até o último valor dentro do limite de Tukey.",
        "Ponto atípico: valor que ultrapassa o limite dos bigodes e é marcado isoladamente."
      ],
      "regras": [
        "O intervalo interquartílico é calculado como Q3 menos Q1.",
        "Os bigodes de Tukey terminam em Q1 − 1,5 × IQR e Q3 + 1,5 × IQR.",
        "Valores além dos bigodes são marcados como pontos atípicos no gráfico."
      ],
      "comparacoes": [
        "Mediana (robusta a extremos) x média (sensível a extremos)",
        "Box plot (resumo numérico) x histograma (forma da distribuição)"
      ],
      "fluxos": [
        "Ordenar dados → calcular Q1, mediana e Q3 → obter IQR → estender bigodes → marcar atípicos → comparar grupos"
      ],
      "excecoes": [
        "A convenção de 3 × IQR, usada por alguns autores, amplia a lista de pontos atípicos",
        "A interpolação linear de percentis altera Q1 e Q3 quando a amostra é pequena"
      ],
      "palavrasChave": [
        "box plot",
        "mediana",
        "quartil",
        "IQR",
        "bigode",
        "outlier"
      ],
      "checklist": [
        "Ordenei os dados antes de calcular os quartis?",
        "Calculei o IQR como Q3 menos Q1?",
        "Apliquei a convenção de bigodes declarada?",
        "Verifiquei a origem de cada ponto marcado como atípico?",
        "Comparei grupos por centro e dispersão, não só pela mediana?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcule os quartis do conjunto 2, 4, 6, 8, 10, 12 e 50 por interpolação linear e determine o intervalo interquartílico.",
        "dados": "Sete valores ordenados: 2, 4, 6, 8, 10, 12 e 50; n = 7; percentis de interesse: 25, 50 e 75.",
        "conceitos": [
          "Quartil",
          "Interpolação linear de percentis",
          "Intervalo interquartílico"
        ],
        "estrategia": "Calcular a posição do percentil pela regra de interpolação linear, localizar os dois valores vizinhos e obter o quartil por média ponderada entre eles.",
        "execucao": [
          "Calcular a posição de Q1: (7−1) × 0,25 + 1 = 2,5.",
          "Interpolar entre o 2º e o 3º valores: 4 + 0,5 × (6−4) = 5.",
          "Calcular a posição da mediana: (7−1) × 0,50 + 1 = 4, logo 8.",
          "Calcular a posição de Q3: (7−1) × 0,75 + 1 = 5,5, interpolando entre 10 e 12: 10 + 0,5 × 2 = 11.",
          "Calcular o IQR: 11 − 5 = 6."
        ],
        "resultado": "Q1 = 5, mediana = 8, Q3 = 11 e IQR = 6; a caixa do box plot abrange da posição 2,5 até a posição 5,5 da ordenação.",
        "justificativa": "A posição 2,5 significa que o primeiro quartil está entre o segundo e o terceiro valores ordenados, e a interpolação com peso 0,5 fornece 5; analogamente, a posição 5,5 fornece 11, de modo que a caixa cobre a metade central dos dados.",
        "errosFrequentes": [
          "Usar a posição (n+1) × p sem interpolação e errar Q1 e Q3",
          "Confundir a amplitude total com o intervalo interquartílico",
          "Esquecer de ordenar os dados antes de localizar as posições"
        ],
        "variacao": "Com os valores 2, 4, 6, 8, 10, 12 e 50 substituídos por 2, 4, 6, 8, 10, 12 e 14, Q3 passa a 12 e o IQR a 7, mostrando a influência do valor extremo também sobre os quartis interpolados."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dois grupos de avaliados apresentam a mesma mediana, 80 pontos, mas intervalos interquartílicos de 10 e 40 pontos. Explicar o que a comparação comunica.",
        "dados": "Grupo A: mediana 80 e IQR 10. Grupo B: mediana 80 e IQR 40. Mesma escala de pontuação nos dois grupos.",
        "conceitos": [
          "Intervalo interquartílico",
          "Mediana",
          "Comparação de dispersão"
        ],
        "estrategia": "Separar centro e dispersão na leitura do box plot, dimensionar a diferença entre os grupos e mostrar a consequência analítica de olhar apenas a mediana.",
        "execucao": [
          "Registrar que as medianas coincidem em 80.",
          "Comparar os intervalos interquartílicos: 10 contra 40.",
          "Traduzir em proporção: a dispersão central do grupo B é quatro vezes maior.",
          "Concluir sobre o alcance das faixas centrais em cada grupo."
        ],
        "resultado": "Os grupos têm o mesmo centro, mas o grupo B apresenta dispersão central quatro vezes maior: metade dos seus resultados está espalhada por uma faixa bem mais larga.",
        "justificativa": "A mediana resume apenas a posição central; o intervalo interquartílico descreve a amplitude da metade central dos dados, de modo que dois box plots podem coincidir na linha da mediana e diferir marcadamente na altura da caixa.",
        "errosFrequentes": [
          "Concluir que os grupos são equivalentes porque as medianas coincidem",
          "Confundir a largura da caixa com a amplitude total da amostra",
          "Desconsiderar que um grupo pode ter média igual e comportamento distinto"
        ],
        "variacao": "Se o grupo B passar a ter IQR 20, a razão entre os grupos cai de quatro para duas vezes, e a faixa central se estreita sem alterar a mediana."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Todos os softwares calculam os mesmos quartis para o mesmo conjunto de dados.' Julgar a afirmação e indicar a prática correta.",
        "dados": "Mesmo conjunto de dados processado por ferramentas que adotam métodos de percentil distintos; comparação dos quartis e dos bigodes obtidos.",
        "conceitos": [
          "Método de cálculo de quartis",
          "Convenção de bigodes",
          "Tamanho da amostra"
        ],
        "estrategia": "Mostrar que o resultado depende do método de posicionamento de percentil adotado, que a diferença cresce em amostras pequenas e que a divulgação precisa declarar a base metodológica.",
        "execucao": [
          "Identificar a regra de percentil usada por cada ferramenta.",
          "Comparar os quartis obtidos para o mesmo conjunto.",
          "Observar que a divergência aumenta quando a amostra é pequena.",
          "Registrar método e convenção junto ao gráfico publicado."
        ],
        "resultado": "Errado: as ferramentas aplicam métodos de percentil diferentes, de modo que quartis e bigodes podem divergir para o mesmo conjunto, sobretudo em amostras reduzidas.",
        "justificativa": "O quartil depende da regra de localização do percentil — interpolação, arredondamento ou convenção exclusiva — e essa escolha faz parte da definição do cálculo; sem declará-la, o número não é comparável entre estudos.",
        "errosFrequentes": [
          "Comparar quartis de estudos que usam métodos diferentes",
          "Acreditar que a diferença de resultado decorre de erro de cálculo",
          "Omitir do relatório o método de percentil adotado"
        ],
        "variacao": "Com uma amostra com cem valores, a divergência entre métodos de interpolação tende a diminuir, pois cada posição representa um incremento menor da ordenação."
      }
    ]
  }
};
