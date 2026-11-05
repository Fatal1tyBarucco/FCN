const enriParcialM8U3P1 = {
  "m8-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A mesma série admite três descrições numéricas, e a escolha da medida de tendência central altera o gabarito. Os erros frequentes são trocar média por mediana em séries com extremos e procurar moda em dado numérico sem repetição.",
      "preRequisitos": [
        "Ordenação de valores em uma série numérica",
        "Operações de soma e divisão",
        "Contagem da frequência de ocorrência de cada valor"
      ],
      "objetivosObservaveis": [
        "Calcular média aritmética, mediana e moda de uma série numérica",
        "Selecionar a medida de tendência central adequada ao formato da distribuição",
        "Relacionar a posição da média e da mediana ao sentido da assimetria"
      ],
      "competencias": [
        "Análise descritiva de séries numéricas",
        "Leitura de distribuição e identificação de assimetria",
        "Decisão argumentada sobre qual medida descreve o caso típico"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t2-s1 (Amplitude, variância, desvio padrão e coeficiente de variação) — unidade 8.3 (dispersão): complementa o centro da série com o espalhamento",
        "m8-u2-t4-s1 (Dispersão: associação, correlação e outliers) — unidade 8.2 (gráficos): leitura visual de dispersão e de valores atípicos"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Média, mediana e moda são cobradas em itens de estatística descritiva do conteúdo programático, no cálculo direto e na escolha da medida adequada. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: calcular as três medidas de tendência central. Média = soma dos valores dividida por n; mediana = valor central da série ordenada, com média dos dois centrais quando n é par; moda = valor que mais se repete. Na série 10, 12, 14, 16 e 100, a média é 152 ÷ 5 = 30,4, a mediana é 14 e não há moda, porque nenhum valor se repete.",
      "intermediario": "Nível intermediário: escolher a medida conforme a distribuição. Simetria sem extremos favorece a média; assimetria ou outliers favorecem a mediana; variável categórica exige a moda. O teste prático é comparar média e mediana: média muito maior indica cauda à direita; menor, cauda à esquerda.",
      "avancado": "Nível avançado: interpretar assimetria e o efeito de outliers. Substituir o maior valor da série 10, 12, 14, 16 e 100 por 10.000 muda a média de 30,4 para 2.010,4, mas não altera a mediana, que continua 14. A assimetria positiva (cauda à direita) produz média maior que a mediana; a negativa (cauda à esquerda), o inverso.",
      "especialista": "Nível especialista: auditar um relatório quanto à medida usada. Verificar se a média apresentada convive com distribuição assimétrica e extremos, se o recorte de outliers foi justificado e se a moda foi invocada em série numérica sem repetição. Para descrever o caso típico, a mediana com intervalo interquartílico é a leitura defensável."
    },
    "comparacoes": [
      {
        "tema": "Média x mediana: escolha da medida de tendência central",
        "a": {
          "rotulo": "Média aritmética",
          "texto": "Soma dos valores dividida por n; usa todos os dados e, por isso, desloca-se quando há extremos: em 10, 12, 14, 16 e 100 vale 30,4."
        },
        "b": {
          "rotulo": "Mediana",
          "texto": "Valor central da série ordenada; depende apenas da posição, logo não se altera quando o maior valor passa de 100 para 10.000."
        },
        "diferencaGabarito": "Em série assimétrica ou com outliers, a mediana descreve o caso típico; a média descreve bem apenas séries simétricas sem valores extremos."
      },
      {
        "tema": "Mediana x moda: natureza do dado analisado",
        "a": {
          "rotulo": "Mediana",
          "texto": "Exige dado numérico ordenado; indica o valor central e admite interpolação quando o número de observações é par."
        },
        "b": {
          "rotulo": "Moda",
          "texto": "Valor ou categoria mais frequente; é a única medida de tendência central aplicável a variáveis categóricas, e pode não existir ou ser bimodal."
        },
        "diferencaGabarito": "A moda responde qual categoria predomina, a mediana responde qual é o valor central; em série numérica sem repetição de valores não há moda."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'A média é sempre a melhor medida porque usa todos os dados.'",
        "porqueErrada": "Usar todos os dados significa também atribuir peso total aos extremos. Na série 10, 12, 14, 16 e 100, a média 30,4 não representa nenhum valor observado e dista 16,4 da mediana 14.",
        "versaoCorreta": "Errado. Usar todos os dados também significa dar peso total aos extremos; em distribuições assimétricas ou com erros de digitação, a média mente sobre o caso típico. A escolha depende da forma da distribuição e do que se quer descrever."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A moda só existe para números.'",
        "porqueErrada": "A moda é definida pela maior frequência de ocorrência e vale para qualquer conjunto, inclusive de categorias: em tipos de atendimento (presencial, remoto, telefônico), o mais frequente é a moda.",
        "versaoCorreta": "Errado. A moda é o valor ou a categoria mais frequente e pode ser usada em dados categóricos; em série numérica sem repetição de valores ela simplesmente não existe."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A assimetria da distribuição não afeta a escolha da medida de tendência central.'",
        "porqueErrada": "A assimetria determina o deslocamento entre média e mediana e, portanto, qual delas descreve o caso típico: cauda à direita eleva a média; cauda à esquerda a rebaixa.",
        "versaoCorreta": "Errado. A assimetria altera a leitura das medidas de tendência central: em distribuição assimétrica à direita prefere-se a mediana, pois a média é puxada pela cauda."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Média aritmética: soma dos valores dividida por n",
        "Mediana: valor central da série ordenada",
        "Moda: valor ou categoria mais frequente",
        "Outlier: valor extremo que desloca medidas sensíveis a extremos",
        "Robustez: estabilidade de uma medida diante de valores extremos"
      ],
      "regras": [
        "Média = Σx ÷ n",
        "Mediana: central da série ordenada; média dos dois centrais quando n é par",
        "Moda: maior frequência; inexistente se nenhum valor se repete",
        "Assimetria à direita: média maior que mediana; à esquerda: média menor"
      ],
      "comparacoes": [
        "Média usa todos os dados e é sensível a outliers; mediana depende só da ordem e é robusta",
        "Mediana aplica-se a dado numérico; moda aplica-se a dado categórico"
      ],
      "fluxos": [
        "Ordenar a série → calcular média, mediana e moda → comparar média e mediana → classificar a assimetria → escolher a medida a reportar"
      ],
      "excecoes": [
        "Distribuição bimodal tem duas modas, e nenhuma delas resume a série",
        "Com n par, a mediana é a média dos dois valores centrais",
        "A média ponderada exige os pesos no denominador: Σ(valor × peso) ÷ Σpesos"
      ],
      "palavrasChave": [
        "média",
        "mediana",
        "moda",
        "assimetria",
        "outlier",
        "robustez",
        "média ponderada"
      ],
      "checklist": [
        "Calculei as três medidas antes de escolher?",
        "A média e a mediana estão muito afastadas?",
        "Há valor extremo ou erro de digitação na série?",
        "A moda existe nesta série ou a série é categórica?",
        "A medida escolhida descreve o caso típico ou apenas o total?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Nos dados 2, 4, 6, 8, 10, 12 e 50, qual medida de tendência central representa melhor o caso típico e por quê?",
        "dados": "Série de sete observações: 2, 4, 6, 8, 10, 12 e 50 (mínimo 2, máximo 50); n = 7; todos os valores distintos.",
        "conceitos": [
          "Mediana como valor central da série ordenada",
          "Sensibilidade da média a valores extremos"
        ],
        "estrategia": "Calcular as três medidas, comparar a média com a mediana e verificar se o valor 50, isolado na cauda superior, desloca a média para longe do centro da série.",
        "execucao": [
          "Ordenar a série (já ordenada): 2, 4, 6, 8, 10, 12, 50",
          "Calcular a média: (2 + 4 + 6 + 8 + 10 + 12 + 50) ÷ 7 = 92 ÷ 7 ≈ 13,14",
          "Localizar a mediana: 4º valor de 7, posição central = 8",
          "Verificar a moda: nenhum valor se repete, logo não há moda",
          "Comparar as medidas: média 13,14 é 5,14 acima da mediana 8, sinal de cauda à direita"
        ],
        "resultado": "A mediana (8). A média (≈13,14) está distante do valor central porque o 50, isolado na cauda, a arrasta. Para descrever o 'valor usual', a mediana é a medida correta.",
        "justificativa": "A mediana depende só da ordem e não se desloca pelo 50; a média, que soma todos os termos, sobe para 13,14, 5,14 acima da mediana. Como a pergunta busca o caso típico, a medida adequada é a mediana.",
        "errosFrequentes": [
          "Responder a média por usar todos os dados, sem notar que o 50 desloca o resultado",
          "Afirmar que a moda é 8 por confundir o valor central com o mais frequente",
          "Apresentar a média arredondada como se fosse o valor típico da série"
        ],
        "variacao": "Se o 50 for substituído por 5, a série vira 2, 4, 5, 6, 8, 10 e 12: a média cai para 47 ÷ 7 ≈ 6,71 e a mediana sobe para 6, e as duas medidas passam a concordar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Notas 7 (peso 2), 5 (peso 3) e 9 (peso 1): qual é a média ponderada das notas e como ela se compara com a média simples?",
        "dados": "Notas com pesos: 7 (peso 2), 5 (peso 3) e 9 (peso 1); soma dos pesos = 6; média simples = (7 + 5 + 9) ÷ 3 = 7,0.",
        "conceitos": [
          "Média ponderada: Σ(valor × peso) ÷ Σpesos",
          "Efeito dos pesos sobre a média calculada"
        ],
        "estrategia": "Multiplicar cada nota pelo peso, somar os produtos, dividir pela soma dos pesos e confrontar o resultado com a média simples, expondo o erro de ignorar os pesos.",
        "execucao": [
          "Calcular os produtos: 7 × 2 = 14; 5 × 3 = 15; 9 × 1 = 9",
          "Somar os produtos: 14 + 15 + 9 = 38",
          "Somar os pesos: 2 + 3 + 1 = 6",
          "Dividir: 38 ÷ 6 ≈ 6,33",
          "Comparar com a média simples: (7 + 5 + 9) ÷ 3 = 7,0"
        ],
        "resultado": "Σ(valor × peso) = 7×2 + 5×3 + 9×1 = 14 + 15 + 9 = 38; Σpesos = 6; média = 38 ÷ 6 ≈ 6,33. A média simples (7+5+9)/3 = 7,0 ignoraria os pesos e superestimaria o resultado.",
        "justificativa": "O peso 3 recai sobre a nota 5, a mais baixa, e a média ponderada fica abaixo da simples: 6,33 contra 7,0. Ignorar os pesos igualaria notas de pesos distintos e superestimaria o desempenho.",
        "errosFrequentes": [
          "Dividir a soma dos produtos por 3, o número de notas, em vez de dividir pela soma dos pesos",
          "Somar as notas com os pesos como se fossem notas adicionais, obtendo 27",
          "Arredondar 38 ÷ 6 para 6,3 e marcar 6,34 como gabarito"
        ],
        "variacao": "Com pesos 1, 1 e 2, a média ponderada passa a (7 + 5 + 18) ÷ 4 = 7,5, acima da média simples 7,0, porque o peso maior recai sobre a nota mais alta."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A média é sempre a melhor medida porque usa todos os dados.' Avalie a afirmação com o caso 10, 12, 14, 16 e 100.",
        "dados": "Série: 10, 12, 14, 16 e 100; média = 152 ÷ 5 = 30,4; mediana = 14; a média não coincide com nenhum valor observado.",
        "conceitos": [
          "Robustez da mediana",
          "Sensibilidade da média a outliers"
        ],
        "estrategia": "Testar a afirmação com um caso concreto: comparar a média 30,4 com a mediana 14 e ver se a média descreve um valor típico ou só o efeito do extremo 100.",
        "execucao": [
          "Calcular a média da série: 152 ÷ 5 = 30,4",
          "Calcular a mediana: 3º valor da série ordenada = 14",
          "Comparar: 30,4 − 14 = 16,4 de distância, sinal de cauda à direita",
          "Verificar se 30,4 aparece na série: não aparece, logo não descreve o caso observado",
          "Concluir: a média só é adequada em série simétrica sem extremos"
        ],
        "resultado": "Errado. A média usa todos os dados e dá peso total ao 100: o resultado 30,4 não corresponde a nenhum valor observado e supera a mediana 14 em 16,4. Para o caso típico, serve a mediana.",
        "justificativa": "A afirmação confunde exaustividade com adequação: incluir todos os valores é o que deixa o extremo 100 distorcer o centro. A diferença de 16,4 entre média e mediana prova que ela descreve o extremo, não o caso típico.",
        "errosFrequentes": [
          "Aceitar que a média é superior por incorporar toda a informação da série",
          "Não perceber que 30,4 não é um valor observado e por isso não pode ser lido como caso típico",
          "Escolher a média sem verificar se há cauda longa na distribuição"
        ],
        "variacao": "Substituindo o 100 por 1.000, a média vai a 1.052 ÷ 5 = 210,4 e a mediana fica em 14: a distância entre elas cresce de 16,4 para 196,4, e a leitura ingênua fica evidente."
      }
    ]
  },
  "m8-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "As medidas de dispersão mostram o quanto os dados se afastam do centro, e o cálculo de variância, desvio padrão e coeficiente de variação é item frequente. As armadilhas são dividir por n em série amostral e comparar dispersões de unidades diferentes.",
      "preRequisitos": [
        "Cálculo da média aritmética de uma série",
        "Quadrado de números e extração da raiz quadrada",
        "Identificação do mínimo e do máximo da série"
      ],
      "objetivosObservaveis": [
        "Calcular amplitude, variância e desvio padrão com os divisores n e n − 1",
        "Interpretar o desvio padrão na unidade original do dado",
        "Comparar a dispersão de duas séries por meio do coeficiente de variação"
      ],
      "competencias": [
        "Cálculo de medidas de dispersão com aritmética verificável",
        "Distinção entre variância populacional e amostral",
        "Comparação relativa de dispersão entre séries de unidades distintas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t1-s1 (Média, mediana e moda — quando usar cada uma) — unidade 8.3 (média): a média é a referência dos desvios quadráticos",
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — unidade 8.2 (box plot): alternativa robusta para medir espalhamento"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Variância, desvio padrão e coeficiente de variação são cobrados em itens de estatística descritiva do conteúdo programático, no cálculo e na comparação de dispersão. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: perceber que dispersão é o quanto os dados se espalham em torno da média. A amplitude mede isso pelos extremos: máximo menos mínimo. Na série 10, 12, 14, 16 e 18, a amplitude é 18 − 10 = 8. O desvio padrão responde a pergunta mais informativa: qual é o desvio típico em relação à média de 14?",
      "intermediario": "Nível intermediário: calcular variância e desvio padrão. Os desvios em relação à média 14 são −4, −2, 0, 2 e 4; os quadrados somam 40; a variância populacional é 40 ÷ 5 = 8 e o desvio padrão é √8 ≈ 2,83, ou seja, os valores ficam tipicamente a cerca de 2,83 unidades da média.",
      "avancado": "Nível avançado: calcular o coeficiente de variação e comparar séries. Na série anterior, CV = 2,83 ÷ 14 ≈ 0,20, isto é, 20%. O CV é adimensional: é ele, e não o desvio padrão, que permite concluir que a série de espera em minutos, com média 50 e desvio 5 (CV 10%), dispersa menos que a de cargas, com média 50 e desvio 8 (CV 16%).",
      "especialista": "Nível especialista: auditar um relatório quanto à medida de dispersão. Verificar se a variância foi calculada com n ou n − 1 e se o texto declara o caráter populacional ou amostral, se a unidade do desvio padrão acompanha a do dado e se a comparação entre variáveis distintas usou CV. Relatar o desvio padrão com a unidade e o CV em porcentagem."
    },
    "comparacoes": [
      {
        "tema": "Variância x desvio padrão",
        "a": {
          "rotulo": "Variância",
          "texto": "Média dos quadrados dos desvios em relação à média; para 10, 12, 14, 16 e 18 vale 40 ÷ 5 = 8 e sai expressa em unidades quadradas."
        },
        "b": {
          "rotulo": "Desvio padrão",
          "texto": "Raiz quadrada da variância; vale √8 ≈ 2,83 e é expresso na mesma unidade do dado, o que permite interpretá-lo como afastamento típico."
        },
        "diferencaGabarito": "A variância eleva a unidade ao quadrado e não pode ser lida como um afastamento; o desvio padrão é a medida que retorna à unidade original e se interpreta diretamente."
      },
      {
        "tema": "Desvio padrão x coeficiente de variação",
        "a": {
          "rotulo": "Desvio padrão",
          "texto": "Medida absoluta de dispersão: vale 5 unidades em uma série de média 50 e 5 em outra, o que não permite concluir que as duas dispersam igual."
        },
        "b": {
          "rotulo": "Coeficiente de variação",
          "texto": "Razão entre desvio padrão e média, adimensional: 5 ÷ 50 = 10% na primeira série e 8 ÷ 50 = 16% na segunda."
        },
        "diferencaGabarito": "Para comparar séries com médias ou unidades diferentes, usa-se o CV; o desvio padrão sozinho só vale na comparação entre séries de mesma unidade e mesma ordem de grandeza."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Dois conjuntos com média 50 e desvio-padrão 5 têm a mesma variabilidade, independentemente da unidade.'",
        "porqueErrada": "O desvio padrão herda a unidade do dado: 5 minutos e 5 quilos não são a mesma grandeza. A igualdade numérica só vale dentro da mesma unidade; entre grandezas distintas é preciso o coeficiente de variação.",
        "versaoCorreta": "Errado se as unidades diferem: desvio-padrão herda a unidade do dado (5 minutos ≠ 5 kg). Para comparar dispersão entre variáveis com unidades ou médias muito distintas, use o coeficiente de variação (desvio ÷ média)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A variância e o desvio padrão são equivalentes em interpretação.'",
        "porqueErrada": "A variância é a média dos quadrados dos desvios e sai em unidades quadradas; o desvio padrão é sua raiz quadrada e sai na unidade original. Só o desvio padrão permite dizer que os valores ficam a 2,83 unidades da média.",
        "versaoCorreta": "Errado. A variância expressa o quadrado da distância e não é interpretável como desvio; o desvio padrão (raiz quadrada da variância) é o que retorna à unidade original do dado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A amplitude é uma medida robusta a valores extremos.'",
        "porqueErrada": "A amplitude depende apenas do mínimo e do máximo, de modo que um único valor extremo a altera. Na série 10, 12, 14, 16 e 100, a amplitude salta de 8 para 90, enquanto a mediana permanece 14.",
        "versaoCorreta": "Errado. A amplitude é sensível a extremos porque depende do mínimo e do máximo; para medir espalhamento com resistência a outliers, prefira o intervalo interquartílico ou o desvio padrão robusto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Amplitude: máximo menos mínimo",
        "Variância: média dos quadrados dos desvios em relação à média",
        "Desvio padrão: raiz quadrada da variância, expresso na unidade original",
        "Coeficiente de variação: desvio padrão dividido pela média, adimensional",
        "Dispersão: grau de espalhamento dos dados em torno do centro"
      ],
      "regras": [
        "Variância populacional: Σ(x − x̄)² ÷ n; amostral: Σ(x − x̄)² ÷ (n − 1)",
        "Desvio padrão = √variância",
        "Amplitude = máximo − mínimo",
        "CV = desvio padrão ÷ média, em porcentagem, e exige média não nula"
      ],
      "comparacoes": [
        "Variância sai em unidades quadradas; desvio padrão sai na unidade do dado",
        "Desvio padrão é absoluto e o CV é relativo, sendo o único válido para comparar unidades distintas"
      ],
      "fluxos": [
        "Calcular a média → obter os desvios → elevar ao quadrado e somar → dividir por n ou n − 1 → extrair a raiz → interpretar na unidade original → usar o CV na comparação entre séries"
      ],
      "excecoes": [
        "Quando a série é amostra, a variância usa n − 1 para corrigir o viés da média amostral",
        "O CV não existe quando a média é zero, pois implicaria divisão por zero",
        "A amplitude ignora todos os valores intermediários da série"
      ],
      "palavrasChave": [
        "amplitude",
        "variância",
        "desvio padrão",
        "coeficiente de variação",
        "dispersão",
        "unidade",
        "populacional",
        "amostral"
      ],
      "checklist": [
        "Calculei a média antes dos desvios?",
        "Usei n ou n − 1 conforme o caráter da série?",
        "O desvio padrão está na unidade original do dado?",
        "A média é diferente de zero para aplicar o CV?",
        "Declarei a unidade e o tipo de estimador no relatório?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcule o desvio padrão populacional do conjunto 2, 4, 4, 4, 5, 5, 7 e 9 e interprete o resultado na unidade original.",
        "dados": "Oito observações: 2, 4, 4, 4, 5, 5, 7 e 9; n = 8; média = 40 ÷ 8 = 5; soma dos quadrados dos desvios = 32; mínimo 2 e máximo 9.",
        "conceitos": [
          "Variância populacional: Σ(x − x̄)² ÷ n",
          "Desvio padrão como medida expressa na unidade original"
        ],
        "estrategia": "Calcular a média, obter os desvios em relação a ela, elevar ao quadrado, somar, dividir por n por ser população e extrair a raiz para voltar à unidade original.",
        "execucao": [
          "Calcular a média: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) ÷ 8 = 40 ÷ 8 = 5",
          "Calcular os desvios: −3, −1, −1, −1, 0, 0, 2 e 4",
          "Elevar ao quadrado e somar: 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32",
          "Dividir por n: 32 ÷ 8 = 4, que é a variância populacional",
          "Extrair a raiz: √4 = 2,0, que é o desvio padrão"
        ],
        "resultado": "Média = 5. Σ(x − x̄)² = 32. σ² = 32 ÷ 8 = 4 → σ = √4 = 2,0. Em unidade original, os valores ficam tipicamente a 2 unidades da média.",
        "justificativa": "Como os oito valores foram tratados como população, o divisor é n = 8, e 32 ÷ 8 = 4. A raiz de 4 devolve a unidade original, indicando que cada observação costuma ficar a 2 unidades da média 5.",
        "errosFrequentes": [
          "Dividir por 7 por tratar os oito valores como amostra, obtendo 32 ÷ 7 ≈ 4,57",
          "Apresentar 4 como desvio padrão, confundindo variância com desvio padrão",
          "Somar apenas os desvios, e não os seus quadrados, o que anula o cálculo"
        ],
        "variacao": "Tratados como amostra, os mesmos oito valores dão variância 32 ÷ 7 ≈ 4,57 e desvio padrão ≈ 2,14: mudou só o divisor, de n para n − 1."
      },
      {
        "tipo": "aplicacao",
        "problema": "O mesmo conjunto de oito notas, agora tratado como amostra: qual a variância e o desvio padrão amostrais e por que diferem dos populacionais?",
        "dados": "Notas: 2, 4, 4, 4, 5, 5, 7 e 9 (n = 8); média = 5; Σ(x − x̄)² = 32; série de amostra, não o universo completo.",
        "conceitos": [
          "Estimador amostral com divisor n − 1",
          "Viés da média amostral"
        ],
        "estrategia": "Reaproveitar a soma de quadrados calculada, dividir por n − 1 = 7 por ser amostra e extrair a raiz, comparando com a versão populacional.",
        "execucao": [
          "Reutilizar a média amostral: 40 ÷ 8 = 5",
          "Reutilizar a soma de quadrados dos desvios: 32",
          "Dividir por n − 1: 32 ÷ 7 ≈ 4,5714, que é a variância amostral",
          "Extrair a raiz: √4,5714 ≈ 2,1381, que é o desvio padrão amostral",
          "Comparar com o caso populacional: 4 e 2,0, e o valor amostral é maior"
        ],
        "resultado": "s² = 32 ÷ (8 − 1) = 32 ÷ 7 ≈ 4,5714; s = √4,5714 ≈ 2,1381. O divisor n−1 produz valor maior que o populacional — correção esperada quando a média usada é a amostral.",
        "justificativa": "A média de uma amostra já se desvia da populacional, e dividir por n − 1 compensa parte dessa diferença, produzindo estimador menos enviesado da variância populacional: 2,1381 contra 2,0.",
        "errosFrequentes": [
          "Manter o divisor n por não identificar a série como amostra",
          "Confundir a correção n − 1 com erro de cálculo e marcar 4 como resposta",
          "Esquecer de extrair a raiz e apresentar 4,5714 como desvio padrão"
        ],
        "variacao": "Com uma amostra de 9 notas, o divisor passa a 8: se Σ(x − x̄)² = 40, a variância será 5 e o desvio padrão √5 ≈ 2,24 — o divisor acompanha o tamanho da amostra."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Dois conjuntos com média 50 e desvio-padrão 5 têm a mesma variabilidade, independentemente da unidade.' Avalie a afirmação.",
        "dados": "Série A: espera em minutos, média 50 e desvio padrão 5 (CV 10%); série B: carga em quilos, média 50 e desvio padrão 8 (CV 16%).",
        "conceitos": [
          "Unidade herdada pelo desvio padrão",
          "Coeficiente de variação como medida adimensional"
        ],
        "estrategia": "Separar o que é comparável: dentro de uma mesma unidade o desvio padrão vale 5 nos dois casos, mas entre grandezas distintas é preciso normalizar pela média e comparar os CV.",
        "execucao": [
          "Identificar as unidades: minutos na série A e quilos na série B",
          "Verificar a igualdade numérica: 5 min contra 8 kg, números iguais não significam grandezas iguais",
          "Calcular o CV da série A: 5 ÷ 50 = 0,10 = 10%",
          "Calcular o CV da série B: 8 ÷ 50 = 0,16 = 16%",
          "Concluir: a série B dispersa mais em termos relativos, apesar do menor desvio-padrão absoluto"
        ],
        "resultado": "Errado. O desvio padrão herda a unidade: 5 minutos e 5 quilos não descrevem a mesma variabilidade. Em termos relativos, a série A tem CV 10% e a série B 16%, logo a série B é a mais dispersa.",
        "justificativa": "A leitura ingênua compara números de unidades diferentes: 5 minutos e 5 quilos não são a mesma coisa. Normalizando pela média, o CV revela que a série B dispersa 60% mais que a A (16% contra 10%).",
        "errosFrequentes": [
          "Aceitar a igualdade dos números sem examinar as unidades",
          "Comparar dispersões de unidades diferentes sem recorrer ao coeficiente de variação",
          "Confundir coeficiente de variação com desvio padrão em porcentagem, esquecendo a divisão pela média"
        ],
        "variacao": "Se a série B tiver desvio padrão 5 e média 100, seu CV cai para 5% e a série A (10%) vira a mais dispersa: a conclusão muda com a média, não só com o desvio."
      }
    ]
  }
};
