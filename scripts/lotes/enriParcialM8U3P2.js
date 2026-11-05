const enriParcialM8U3P2 = {
  "m8-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Quartis e percentis transformam a série ordenada em cortes de posição, e é por eles que se constrói o box plot e se descreve a metade central dos dados. A prova cobra o cálculo por posicionamento e a leitura do corte: percentil não é valor da maioria.",
      "preRequisitos": [
        "Ordenação de uma série numérica",
        "Cálculo da mediana em séries com n par e n ímpar",
        "Noção de proporção percentual sobre o total de observações"
      ],
      "objetivosObservaveis": [
        "Calcular Q1, Q2 e Q3 pelo método de posicionamento com interpolação linear",
        "Calcular um percentil qualquer a partir da posição interpolada",
        "Interpretar um corte percentílico como posição na série, e não como valor da maioria"
      ],
      "competencias": [
        "Cálculo de cortes percentílicos com interpolação linear",
        "Leitura e construção de box plot a partir de quartis",
        "Auditoria de resultados obtidos por métodos de posicionamento diferentes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — unidade 8.2 (box plot): Q1, Q3 e IIQ alimentam o desenho do box plot",
        "m8-u3-t1-s1 (Média, mediana e moda — quando usar cada uma) — unidade 8.3 (média): a mediana é o percentil 50 (Q2)"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Quartis, percentis e box plot formam um bloco de presença permanente no conteúdo programático de estatística, com cálculo de percentil e leitura do intervalo interquartílico. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: entender quartis como a divisão da série ordenada em quatro partes de igual tamanho. Q1 deixa 25% dos dados abaixo, Q2 (a mediana) deixa 50% abaixo e Q3 deixa 75% abaixo. Na série 12, 18, 21, 25, 27, 30, 33, 38, 44 e 60, a mediana é a média dos dois centrais: (27 + 30) ÷ 2 = 28,5.",
      "intermediario": "Nível intermediário: calcular Q1, Q2 e Q3 por posicionamento. Na mesma série, com o método inclusivo de posição 1 + (n − 1) × p, Q1 fica em 1 + 9 × 0,25 = 3,25 → 21 + 0,25 × (25 − 21) = 22 e Q3 em 1 + 9 × 0,75 = 7,75 → 33 + 0,75 × (38 − 33) = 36,75.",
      "avancado": "Nível avançado: calcular percentis arbitrários e interpolar. Para o percentil 90, a posição inclusiva é 1 + 9 × 0,90 = 9,1 → 44 + 0,1 × (60 − 44) = 45,6. Quando a posição cai entre dois valores, a interpolação linear fornece um valor que pode não constar da série: o método precisa ser declarado.",
      "especialista": "Nível especialista: comparar métodos e auditar resultados. O método de posicionamento i = k × (n + 1) ÷ 100, o inclusivo 1 + (n − 1) × p e o exclusivo diferem no tratamento da mediana e dos extremos; na série de nove valores 2, 4, 6, 8, 10, 12, 14, 16 e 18, Q1 vale 5 pelo primeiro método e 6 pelo inclusivo. Auditoria: declarar o método usado."
    },
    "comparacoes": [
      {
        "tema": "Quartil x percentil",
        "a": {
          "rotulo": "Quartil",
          "texto": "Corte em quatro partes da série ordenada: Q1 = 25%, Q2 = 50% e Q3 = 75%. O Q2 coincide com a mediana."
        },
        "b": {
          "rotulo": "Percentil",
          "texto": "Generalização do quartil: P_k indica que k% dos dados estão abaixo do valor calculado, como P90 ou P95."
        },
        "diferencaGabarito": "O quartil é apenas o percentil nos valores 25, 50 e 75; toda a lógica de posicionamento e de interpretação é a mesma."
      },
      {
        "tema": "Método de posicionamento i = k × (n + 1) ÷ 100 x método inclusivo 1 + (n − 1) × p",
        "a": {
          "rotulo": "Posição por (n + 1)",
          "texto": "Em nove valores 2, 4, 6, 8, 10, 12, 14, 16 e 18, Q1 ocupa a posição 2,5 e vale 4 + 0,5 × (6 − 4) = 5."
        },
        "b": {
          "rotulo": "Posição inclusiva",
          "texto": "Nas mesmas séries, Q1 ocupa a posição 3 e vale 6, sem interpolação, pois 8 × 0,25 + 1 = 3."
        },
        "diferencaGabarito": "Os métodos divergem porque tratam de modo diferente a mediana e os extremos da série; quando o gabarito fixa o método, o resultado deve seguir essa convenção."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'P90 = 45,6 significa que 90% dos indivíduos valem 45,6.'",
        "porqueErrada": "O percentil é um corte de posição: 90% dos valores estão até 45,6 e os 10% restantes acima. Nenhum valor da série se repete 90% das vezes, e 45,6 é resultado de interpolação, não uma observação.",
        "versaoCorreta": "Errado. Percentil é CORTE, não valor frequente: 90% dos valores estão ABAIXO (ou até) 45,6, e os 10% restantes estão acima. Confundir corte percentílico com valor da maioria é erro clássico de interpretação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Os quartis são sempre valores que constam da série original.'",
        "porqueErrada": "Quando a posição do quartil cai entre dois valores, a interpolação produz um número que não aparece na série: na série de dez notas, Q1 = 22 é resultado de interpolação entre 21 e 25.",
        "versaoCorreta": "Errado. Quartil pode ser valor interpolado, e não necessariamente um dado observado; é preciso aplicar o método de posicionamento e verificar se a posição é inteira ou exige interpolação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O percentil 50 é diferente da mediana.'",
        "porqueErrada": "P50 e Q2 designam o mesmo corte: o valor central da série ordenada, obtido por qualquer dos métodos de posicionamento compatíveis.",
        "versaoCorreta": "Errado. O percentil 50 é exatamente a mediana (Q2), pois ambos localizam o valor que divide a série ordenada ao meio."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Quartil: corte que divide a série ordenada em quatro partes (Q1 = 25%, Q2 = 50%, Q3 = 75%)",
        "Percentil P_k: valor abaixo do qual estão k% das observações",
        "Método de posicionamento: define a posição do corte na série ordenada",
        "Interpolação linear: estimativa do corte entre dois valores adjacentes",
        "Intervalo interquartílico (IIQ): Q3 − Q1, largura da metade central"
      ],
      "regras": [
        "Q2 é a mediana da série",
        "Método (n + 1): posição i = k × (n + 1) ÷ 100",
        "Método inclusivo: posição i = 1 + (n − 1) × p, com p = k ÷ 100",
        "Na posição fracionária, interpolar linearmente entre os valores adjacentes",
        "IIQ = Q3 − Q1"
      ],
      "comparacoes": [
        "Quartil é o percentil em 25, 50 e 75",
        "Método (n + 1) e inclusivo divergem porque tratam de modo diferente a mediana e os extremos"
      ],
      "fluxos": [
        "Ordenar a série → obter n → calcular a posição do percentil → verificar se a posição é inteira → interpolar se necessário → interpretar o corte"
      ],
      "excecoes": [
        "A posição pode cair entre dois valores e exigir interpolação",
        "Métodos diferentes produzem valores diferentes para a mesma série",
        "Percentil calculado sobre a série bruta não é o percentil de um subgrupo"
      ],
      "palavrasChave": [
        "quartil",
        "percentil",
        "posicionamento",
        "interpolação linear",
        "mediana",
        "intervalo interquartílico",
        "box plot"
      ],
      "checklist": [
        "Ordenei a série antes de posicionar?",
        "Calculei a posição com o método exigido?",
        "A posição é inteira ou exige interpolação?",
        "Interpreto o percentil como corte, e não como valor da maioria?",
        "Calculei o IIQ como Q3 − Q1?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcule a mediana da série 12, 18, 21, 25, 27, 30, 33, 38, 44 e 60 e mostre que ela coincide com o percentil 50.",
        "dados": "Dez observações ordenadas: 12, 18, 21, 25, 27, 30, 33, 38, 44 e 60; n = 10; centrais na 5ª e 6ª posições: 27 e 30.",
        "conceitos": [
          "Mediana como percentil 50",
          "Cálculo da mediana em série com n par"
        ],
        "estrategia": "Ordenar a série, identificar as duas posições centrais porque n é par, calcular a média entre elas e conferir que o posicionamento do percentil 50 devolve o mesmo valor.",
        "execucao": [
          "Confirmar a ordem crescente: 12, 18, 21, 25, 27, 30, 33, 38, 44, 60",
          "Identificar as posições centrais para n = 10: 5ª (27) e 6ª (30)",
          "Calcular a mediana: (27 + 30) ÷ 2 = 28,5",
          "Conferir pelo percentil 50: posição inclusiva 1 + 9 × 0,50 = 5,5 → 27 + 0,5 × (30 − 27) = 28,5",
          "Concluir que P50 = Q2 = mediana = 28,5"
        ],
        "resultado": "n = 10 (par): a mediana é a média dos dois centrais ordenados (5º e 6º): (27 + 30) ÷ 2 = 28,5 — igual ao P50 obtido por interpolação (posição 5,5).",
        "justificativa": "Como n = 10 é par, não há valor central único: o corte fica entre a 5ª e a 6ª observação. O posicionamento do percentil 50 recai em 5,5 e a interpolação devolve o mesmo 28,5, confirmando a equivalência entre mediana e P50.",
        "errosFrequentes": [
          "Escolher apenas o 5º valor (27) como mediana em série de n par",
          "Calcular a média de todos os valores (30,8) e chamar de mediana",
          "Aplicar a fórmula da posição para n par sem verificar que a posição é fracionária"
        ],
        "variacao": "Se o valor 60 for substituído por 36, a série passa a ter soma 284 e média 28,4; a mediana permanece 28,5, e média e mediana quase coincidem, sinal de distribuição simétrica."
      },
      {
        "tipo": "aplicacao",
        "problema": "Interprete Q1 = 22 e Q3 = 36,75 da série de dez notas: o que esses cortes informam sobre a distribuição?",
        "dados": "Série: 12, 18, 21, 25, 27, 30, 33, 38, 44 e 60; Q1 = 22 e Q3 = 36,75 pelo posicionamento inclusivo; IIQ = 36,75 − 22 = 14,75.",
        "conceitos": [
          "Corte percentílico como posição acumulada",
          "Intervalo interquartílico como medida da metade central"
        ],
        "estrategia": "Ler Q1 e Q3 como proporções acumuladas da série, calcular o IIQ e descrever a concentração da metade central, confrontando a leitura com o que a média sozinha informaria.",
        "execucao": [
          "Ler Q1 = 22: 25% dos valores estão até 22 e 75% acima",
          "Ler Q3 = 36,75: 75% dos valores estão até 36,75 e 25% acima",
          "Calcular o IIQ: 36,75 − 22 = 14,75, largura que contém a metade central",
          "Identificar os valores nesse intervalo: 25, 27, 30 e 33 concentram a metade central",
          "Comparar com a média: 30,8 fica acima da mediana 28,5, cauda à direita causada pelo 60"
        ],
        "resultado": "Um quarto dos valores está até 22; três quartis até 36,75; portanto a metade central ocupa 22–36,75, com IIQ de 14,75. Metade dos dados está concentrada nesse intervalo de 14,75 unidades — leitura que a média sozinha não daria.",
        "justificativa": "Q1 e Q3 são cortes acumulados: 25% e 75% da série. A diferença entre eles, 14,75, mede a concentração da metade central (25, 27, 30 e 33), informação de dispersão que a média 30,8 não revela e que evidência a cauda à direita do valor 60.",
        "errosFrequentes": [
          "Ler Q1 = 22 como o valor mais frequente da série",
          "Calcular o IIQ como Q3 + Q1, obtendo 58,75",
          "Afirmar que 50% dos valores estão entre 22 e 36,75 sem deixar claro que os extremos ficam fora"
        ],
        "variacao": "Se Q1 passasse a 18 e Q3 a 38, o IIQ seria 20 e a metade central ficaria mais dispersa; com Q1 = 25 e Q3 = 30, o IIQ cairia para 5, sinal de concentração forte em torno do centro."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'P90 = 45,6 significa que 90% dos indivíduos valem 45,6.' Avalie a afirmação no contexto da série de dez notas.",
        "dados": "Série: 12, 18, 21, 25, 27, 30, 33, 38, 44 e 60; P90 = 45,6 (posição inclusiva 9,1); 45,6 não aparece na série.",
        "conceitos": [
          "Percentil como corte de posição",
          "Interpolação linear como valor estimado, não observado"
        ],
        "estrategia": "Separar o que o percentil afirma (posição acumulada na série) do que a leitura ingênua supõe (valor que se repete para a maioria), usando a posição 9,1 e a contagem das observações acima do corte.",
        "execucao": [
          "Calcular a posição do P90 pelo método inclusivo: 1 + (10 − 1) × 0,90 = 9,1",
          "Interpolar: 44 + 0,1 × (60 − 44) = 45,6",
          "Verificar se 45,6 consta da série: não consta, é valor interpolado",
          "Contar as observações até o corte: 12, 18, 21, 25, 27, 30, 33, 38 e 44 são 9 dos 10 valores, ou seja, 90% da série",
          "Concluir: 45,6 é o limite abaixo do qual estão 90% dos casos, e não o valor típico de 90% dos indivíduos"
        ],
        "resultado": "Errado. O percentil é um corte de posição: 9 dos 10 valores da série estão até 45,6 e apenas o último (60) fica acima. Como 45,6 é interpolado e não aparece na série, não é o valor de 90% dos indivíduos.",
        "justificativa": "A leitura ingênua troca posição por frequência: o percentil informa a proporção acumulada da série, não um valor que se repete. Na série de dez notas, 45,6 é o limite abaixo do qual estão 90% dos casos, e só o 60 fica acima dele.",
        "errosFrequentes": [
          "Ler o percentil como valor médio, confundindo-o com a média da série",
          "Responder que 90% dos indivíduos valem exatamente 45,6",
          "Tratar 45,6 como observação presente na série, sem notar a interpolação"
        ],
        "variacao": "Para o P50 da mesma série, a posição inclusiva é 5,5 e o corte 28,5; nesse caso a leitura errada coincidiria com a mediana, e o erro só se revela quando o percentil se afasta dela."
      }
    ]
  },
  "m8-u3-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Identificar a forma da distribuição e decidir o que fazer com valores extremos separa a leitura correta de gráficos em prova e em relatório. Os erros frequentes são ler assimetria sem usar a média e a mediana como prova e remover outliers por reflexo.",
      "preRequisitos": [
        "Cálculo de média e mediana de uma série",
        "Noções de dispersão e de intervalo interquartílico",
        "Leitura visual de histograma e box plot"
      ],
      "objetivosObservaveis": [
        "Classificar uma distribuição como simétrica, assimétrica à direita ou assimétrica à esquerda",
        "Explicar o deslocamento da média em relação à mediana conforme a cauda",
        "Justificar o tratamento de valores extremos entre correção, manutenção e medida robusta"
      ],
      "competencias": [
        "Classificação da forma de uma distribuição a partir de gráficos e de medidas",
        "Decisão documentada sobre outliers, com registro da justificativa",
        "Leitura crítica de indicadores afetados por valores extremos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t1-s1 (Média, mediana e moda — quando usar cada uma) — unidade 8.3 (média): a assimetria desloca a média em relação à mediana",
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — unidade 8.2 (box plot): a regra de 1,5 × IIQ localiza os pontos atípicos"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Assimetria e tratamento de extremos integram o conteúdo programático de interpretação de gráficos e de auditoria de indicadores, com cobrança da leitura de caudas e da decisão sobre outliers. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: reconhecer assimetria visualmente. Se a cauda se estica para a direita, há mais valores altos e a distribuição é assimétrica à direita; se a cauda se estica para a esquerda, é assimétrica à esquerda. Na série 2, 4, 6, 8, 10, 12 e 50, a cauda é à direita e a média 13,14 supera a mediana 8.",
      "intermediario": "Nível intermediário: classificar a assimetria e seu efeito. Assimetria positiva (cauda à direita) implica média maior que a mediana; assimetria negativa (cauda à esquerda) implica média menor que a mediana; em distribuição simétrica as duas se aproximam. Essa comparação entre média e mediana é a prova numérica da classificação.",
      "avancado": "Nível avançado: tratar extremos com justificativa. O caminho é investigar antes de agir: corrigir ou excluir se o valor for erro de medição, manter e documentar se for caso legítimo e relevante, e adotar medidas robustas (mediana e IIQ) na análise, declarando a decisão no relatório.",
      "especialista": "Nível especialista: auditar um conjunto quanto à distribuição e aos extremos. Conferir se a regra de 1,5 × IIQ foi usada apenas como sinalização, se a exclusão de pontos foi justificada e registrada, se a transformação logarítmica foi testada em vez de assumida e se o indicador publicado resiste à remoção dos extremos."
    },
    "comparacoes": [
      {
        "tema": "Assimetria positiva x assimetria negativa",
        "a": {
          "rotulo": "Assimétrica à direita",
          "texto": "Cauda longa para valores altos; a média é puxada para cima e fica acima da mediana. Exemplo: 2, 4, 6, 8, 10, 12 e 50, com média 13,14 e mediana 8."
        },
        "b": {
          "rotulo": "Assimétrica à esquerda",
          "texto": "Cauda longa para valores baixos; a média é puxada para baixo e fica abaixo da mediana, como na série 2, 50, 52, 54, 56, 58 e 60, de média 47,43 e mediana 54."
        },
        "diferencaGabarito": "O sentido da cauda determina o sinal do deslocamento entre média e mediana: direita eleva a média, esquerda a rebaixa; a mediana, por sua vez, permanece estável nos dois casos."
      },
      {
        "tema": "Remover um valor extremo x mantê-lo na série",
        "a": {
          "rotulo": "Remover ou corrigir",
          "texto": "Procedimento adequado quando o valor é erro de medição ou digitação; corrigir ou excluir melhora a medida e a série fica mais simétrica."
        },
        "b": {
          "rotulo": "Manter e sinalizar",
          "texto": "Procedimento adequado quando o valor é caso legítimo e relevante, como uma fraude, um gargalo de atendimento ou um caso raro; exclui-lo mascara a informação."
        },
        "diferencaGabarito": "A decisão depende da natureza do extremo, não de sua posição: erro de medição justifica correção; caso real, não. Em todo caso, a decisão precisa ser documentada no relatório."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Todo valor fora de 1,5 × IIQ é erro de dados e deve ser removido.'",
        "porqueErrada": "A regra de 1,5 × IIQ apenas sinaliza pontos atípicos; ela não estabelece que o registro esteja errado. Remover sem investigar apaga casos reais, como uma fraude detectada ou um atendimento que travou por horas.",
        "versaoCorreta": "Errado. A regra identifica pontos ATÍPICOS, não incorretos. Remover sem investigar apaga informação real (fraudes, gargalos, casos raros) e melhora artificialmente os indicadores — operação de mascaramento, não de limpeza."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A assimetria da distribuição não afeta a análise, pois as medidas de tendência central sempre convergem.'",
        "porqueErrada": "Média e mediana só coincidem em distribuições simétricas; com cauda, a média se desloca em relação à mediana e passa a descrever mal o caso típico, o que muda a medida a reportar.",
        "versaoCorreta": "Errado. A assimetria altera a leitura da tendência central: em cauda à direita a média supera a mediana e é a mediana que descreve o caso típico, devendo ser reportada com o intervalo interquartílico."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A transformação logarítmica sempre resolve a assimetria de uma distribuição.'",
        "porqueErrada": "A transformação logarítmica comprime valores positivos e altos, mas só ajuda quando a assimetria vem da escala dos dados; caudas geradas por outro mecanismo podem sobreviver à transformação.",
        "versaoCorreta": "Errado. A transformação logarítmica só se aplica quando os dados são positivos e a assimetria decorre da escala; ela precisa ser testada e justificada, e não substitui a análise da causa da cauda."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Distribuição simétrica: caudas equilibradas, média e mediana próximas",
        "Assimetria positiva: cauda à direita, média acima da mediana",
        "Assimetria negativa: cauda à esquerda, média abaixo da mediana",
        "Valor extremo (outlier): observação distante do grosso da série",
        "Medida robusta: mediana e intervalo interquartílico, pouco afetados por extremos"
      ],
      "regras": [
        "Média > mediana indica assimetria positiva (cauda à direita)",
        "Média < mediana indica assimetria negativa (cauda à esquerda)",
        "A regra de 1,5 × IIQ sinaliza, mas não condena o ponto atípico",
        "Excluir extremo exige investigação e registro da justificativa"
      ],
      "comparacoes": [
        "Assimetria positiva eleva a média; assimetria negativa a rebaixa",
        "Remover extremo cabe em erro de medição; mantê-lo cabe em caso legítimo"
      ],
      "fluxos": [
        "Desenhar ou descrever a distribuição → comparar média e mediana → classificar a assimetria → localizar os extremos (regra de 1,5 × IIQ) → investigar cada extremo → decidir entre corrigir, manter ou usar medidas robustas → reportar a decisão"
      ],
      "excecoes": [
        "Distribuição bimodal não é descrita por uma única medida de tendência central",
        "Pontos atípicos em box plot são sinalizados, não necessariamente excluídos",
        "Transformações logarítmicas exigem dados positivos"
      ],
      "palavrasChave": [
        "distribuição",
        "assimetria",
        "cauda",
        "valor extremo",
        "outlier",
        "medida robusta",
        "intervalo interquartílico",
        "transformação logarítmica"
      ],
      "checklist": [
        "Classifiquei a assimetria pelo sentido da cauda?",
        "A média e a mediana confirmam a classificação?",
        "Identifiquei os extremos pela regra de 1,5 × IIQ?",
        "Investiguei a causa de cada extremo antes de agir?",
        "Documentei a decisão de manter, corrigir ou excluir?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "A série 2, 4, 6, 8, 10, 12 e 50 tem mediana 8 e média 13,14: que forma de distribuição apresenta e como isso deve ser reportado?",
        "dados": "Sete observações: 2, 4, 6, 8, 10, 12 e 50; n = 7; média = 92 ÷ 7 ≈ 13,14; mediana = 8; nenhum valor se repete; o 50 está isolado na cauda superior.",
        "conceitos": [
          "Assimetria positiva: média acima da mediana",
          "Relação entre cauda e deslocamento da média"
        ],
        "estrategia": "Comparar média e mediana para classificar a assimetria, identificar o valor que produz a cauda e definir a leitura do caso típico — mediana e IIQ — com registro do extremo.",
        "execucao": [
          "Calcular a média: (2 + 4 + 6 + 8 + 10 + 12 + 50) ÷ 7 = 92 ÷ 7 ≈ 13,14",
          "Localizar a mediana: 4º valor de 7 = 8",
          "Comparar: 13,14 > 8, logo há cauda à direita, assimetria positiva",
          "Identificar a origem da cauda: o valor 50, isolado, afastado do bloco 2–12",
          "Definir o reporte: mediana 8, intervalo interquartílico e nota sobre o extremo 50"
        ],
        "resultado": "Assimétrica à direita: a média está bem acima da mediana porque a cauda estica para valores altos, puxada pelo 50. A leitura correta é reportar mediana (8) e IIQ, com nota sobre o extremo.",
        "justificativa": "Como a média 13,14 supera a mediana 8 em 5,14, a distribuição é assimétrica à direita, e a causa é identificável: o valor 50, separado do bloco entre 2 e 12. Reportar a mediana com o intervalo interquartílico descreve o caso típico sem apagar o extremo.",
        "errosFrequentes": [
          "Classificar a série como simétrica por acreditar que a maioria dos valores está entre 2 e 12",
          "Reportar a média 13,14 como medida do caso típico, sabendo que nenhum valor observado se aproxima dela",
          "Atribuir moda 8 ao valor central, quando nenhum dos sete valores se repete"
        ],
        "variacao": "Se o 50 for substituído por 14, a série passa a 2, 4, 6, 8, 10, 12, 14, com média 56 ÷ 7 = 8 e mediana 8: as duas medidas coincidem e a distribuição fica praticamente simétrica."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um posto de atendimento registra tempo médio de espera de 30 minutos, com mediana de 12 minutos: sobre o que o gestor deve agir e com que medida?",
        "dados": "Tempo de espera por atendimento: média 30 min e mediana 12 min; a distribuição tem cauda à direita porque alguns atendimentos duram horas; a metade dos atendimentos conclui em até 12 min.",
        "conceitos": [
          "Diagnóstico pela diferença entre média e mediana",
          "Medida robusta para meta de atendimento"
        ],
        "estrategia": "Usar a distância entre média e mediana como diagnóstico de cauda, separar o que já funciona (a metade rápida) do que precisa de ação (a cauda) e definir a meta com base na mediana.",
        "execucao": [
          "Comparar as medidas: 30 min contra 12 min, diferença de 18 min",
          "Diagnosticar: média muito acima da mediana indica cauda à direita, isto é, poucos atendimentos muito demorados",
          "Separar os públicos: a metade dos atendimentos é concluída em até 12 min",
          "Definir a ação: investigar os casos de cauda (serviços sem esteira, sistema travado, fila física)",
          "Definir a meta: acompanhar a mediana e a cauda, em vez de uma média que sobe por poucos casos extremos"
        ],
        "resultado": "Sobre as duas coisas, com diagnóstico antes: a mediana diz que a metade dos atendimentos é ágil; a média elevada indica cauda longa (alguns casos muito demorados). A ação proporcional é investigar os casos de cauda (ex.: serviços sem esteira) — atacar a mediana com medida geral desperdiça esforço.",
        "justificativa": "A diferença de 18 minutos entre média e mediana mostra que não há problema na operação típica, e sim uma cauda de poucos atendimentos muito demorados. Como a mediana de 12 minutos já descreve a metade dos casos, o esforço deve ir para a cauda, com meta monitorada por medidas robustas.",
        "errosFrequentes": [
          "Concluir que o atendimento está ruim em geral, a partir da média de 30 minutos",
          "Cobrar da equipe a redução da média, sem identificar a origem da cauda",
          "Descartar a média como dado errado, em vez de usá-la como diagnóstico de assimetria"
        ],
        "variacao": "Se a mediana subir para 22 minutos e a média cair para 24, a cauda deixa de ser o problema dominante e o foco passa ao desempenho da própria metade dos atendimentos: a mesma ferramenta aponta outra ação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Todo valor fora de 1,5 × IIQ é erro de dados e deve ser removido.' Avalie a afirmação usando a série do posto de atendimento.",
        "dados": "Tempos de espera (min): 8, 10, 12, 12, 14, 16, 18 e 240; n = 8; Q1 = 11,5 e Q3 = 16,5; IIQ = 5; limite superior = 16,5 + 1,5 × 5 = 24.",
        "conceitos": [
          "Regra de 1,5 × IIQ como critério de sinalização de pontos atípicos",
          "Custo de excluir um caso legítimo"
        ],
        "estrategia": "Aplicar a regra para localizar o ponto e mostrar o que ela realmente afirma — sinalização — e não conclusão; depois contrastar as duas ações possíveis, excluir ou manter, verificando o que se perde em cada caso.",
        "execucao": [
          "Calcular Q1 = 11,5 e Q3 = 16,5 pela série de oito tempos de espera",
          "Calcular o IIQ: 16,5 − 11,5 = 5",
          "Aplicar a regra: limite superior = 16,5 + 1,5 × 5 = 24; o valor 240 fica além dele, e o limite inferior (4) não é violado",
          "Verificar a causa do valor 240: se houve falha do sistema e o correto é 14 minutos, trata-se de erro de digitação e se corrige",
          "Se o atendimento de 240 minutos foi real, manter o dado e reportar mediana e IIQ, porque o caso é informação de gargalo operacional"
        ],
        "resultado": "Errado. A regra de 1,5 × IIQ apenas sinaliza o ponto 240 como atípico: ela não afirma que o registro esteja errado. Se o atendimento foi real, excluí-lo apaga a informação do gargalo e mascara o indicador; o correto é investigar e corrigir apenas se houve erro de digitação.",
        "justificativa": "A leitura ingênua transforma um critério de sinalização em sentença automática de descarte. O limite calculado é 24 minutos e o ponto 240 o excede, mas a regra não diz nada sobre a causa do valor: sem investigar, a exclusão pode remover justamente o dado que revela o gargalo.",
        "errosFrequentes": [
          "Aplicar a regra e excluir o ponto sem verificar a origem do valor",
          "Confundir ponto atípico com erro de digitação e tratar toda cauda como falha de registro",
          "Recalcular o indicador após a exclusão e apresentar o novo número como se fosse o correto"
        ],
        "variacao": "Se o tempo de 240 minutos for substituído por 22 minutos, o valor deixa de ultrapassar o limite de 24 e a série passa a não ter ponto sinalizado; ainda assim, manter ou excluir depende da verificação do registro, e não da regra."
      }
    ]
  }
};
