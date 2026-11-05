const enriParcialM8U2P1 = {
  "m8-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O histograma é o gráfico de distribuição por excelência: a prova cobra a construção das classes, a contagem das frequências e a leitura de centro, dispersão e assimetria, além do efeito da escolha dos intervalos sobre a forma que o gráfico sugere.",
      "preRequisitos": [
        "Variável numérica e noções de distribuição",
        "Cálculo de frequências absolutas e relativas",
        "Leitura de gráficos em eixos cartesianos"
      ],
      "objetivosObservaveis": [
        "Construir um histograma a partir de um conjunto de dados numéricos",
        "Interpretar centro, dispersão, assimetria e presença de mais de um pico",
        "Calcular a densidade de uma classe e relacioná-la à área da barra",
        "Diferenciar histograma de gráfico de barras pelo tipo de dado e pelo espaçamento"
      ],
      "competencias": [
        "Construção de gráficos de distribuição",
        "Leitura crítica de gráficos",
        "Justificação de parâmetros de agrupamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u2-t1-s2 (Densidade e o efeito da escolha dos intervalos) — detalha a normalização pela largura da classe",
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — contraponto: resumo numérico em vez de forma completa"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Construção e interpretação de histogramas integra o conteúdo programático de estatística aplicada e de dados, com foco na contagem de frequências e no efeito das classes. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece o histograma como o gráfico que mostra a distribuição de uma variável numérica, com barras adjacentes que representam intervalos de valores, e distingue essa apresentação das barras separadas usadas para categorias.",
      "intermediario": "Nível intermediário: o aluno define as classes, conta as frequências absolutas ou relativas de cada intervalo e desenha as barras sem espaços entre elas, reconhecendo que a escolha do número e da largura das classes é uma decisão do analista.",
      "avancado": "Nível intermedio: o aluno interpreta centro, dispersão, assimetria e multimodalidade a partir do perfil das barras, calcula a densidade dividindo a frequência pela largura da classe e reconhece que classes muito largas suavizam a forma, enquanto classes muito estreitas introduzem ruído de amostragem.",
      "especialista": "Nível especialista: o aluno audita um histograma publicado: verifica se o número de classes segue uma referência declarada, como a regra de Sturges, se a largura é uniforme, se a densidade foi usada quando as larguras variaram e se a leitura da forma sobrevive a testes de estabilidade com outras intervalações."
    },
    "comparacoes": [
      {
        "tema": "Histograma x gráfico de barras",
        "a": {
          "rotulo": "Histograma",
          "texto": "Representa uma variável numérica por classes de valores, com barras adjacentes sem espaço, e a área de cada barra corresponde à proporção de observações."
        },
        "b": {
          "rotulo": "Gráfico de barras",
          "texto": "Representa categorias nominais ou ordenadas por height proportional to frequency, com barras separadas por espaços e sem continuidade entre os valores."
        },
        "diferencaGabarito": "A diferença está no dado e na leitura: no histograma a posição no eixo é quantitativa e as classes se conectam; no gráfico de barras a ordem das categorias não representa quantidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Histograma e gráfico de barras são o mesmo gráfico com nomes diferentes.",
        "porqueErrada": "O histograma representa valores numéricos em classes contíguas e adjacentes; o gráfico de barras representa categorias separadas, em que a distância entre as barras não tem significado quantitativo.",
        "versaoCorreta": "Histograma para variável numérica com barras adjacentes; gráfico de barras para categorias, com espaçamento que evidência a descontinuidade entre elas."
      },
      {
        "afirmacaoEquivocada": "As classes do histograma podem ser definidas livremente, pois não alteram o dado analisado.",
        "porqueErrada": "Os valores permanecem os mesmos, mas a forma sugerida muda: classes largas escondem detalhes e classes estreitas revelam picos que podem ser apenas ruído de amostragem.",
        "versaoCorreta": "O número e a largura das classes devem ser justificados, por exemplo com a regra de Sturges, e declarados no gráfico ou no texto que o acompanha."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Histograma",
        "Classe (intervalo)",
        "Frequência absoluta",
        "Frequência relativa",
        "Densidade",
        "Regra de Sturges"
      ],
      "regras": [
        "As barras são adjacentes, sem espaço entre elas",
        "Densidade = frequência da classe ÷ largura da classe",
        "Sturges: k ≈ 1 + 3,322 × log10(n) é referência, não lei"
      ],
      "comparacoes": [
        "Histograma (numérico, forma completa) x gráfico de barras (categorias)",
        "Histograma (forma observada) x box plot (resumo em quartis)"
      ],
      "fluxos": [
        "Verificar adequação do dado → definir classes → contar frequências → calcular densidade quando necessário → desenhar barras adjacentes → interpretar forma → testar estabilidade"
      ],
      "excecoes": [
        "Distribuições multimodais podem exigir classes estreitas para revelar picos",
        "Classes de larguras diferentes exigem densidade, pois a área passa a representar a proporção"
      ],
      "palavrasChave": [
        "histograma",
        "classe",
        "frequência",
        "densidade",
        "assimetria",
        "Sturges"
      ],
      "checklist": [
        "Verifiquei que o dado é numérico e adequate?",
        "Declarei o número e a largura das classes?",
        "Contagens as frequências de cada intervalo?",
        "Usei densidade quando as larguras variaram?",
        "Testei a leitura da forma com outra intervalação?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Construir o histograma de tempos de atendimento em minutos e calcular a densidade da primeira classe de dez minutos.",
        "dados": "Vinte tempos de atendimento: 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58 e 60 minutos. Classes de dez minutos: 10-20, 20-30, 30-40, 40-50 e 50-60.",
        "conceitos": [
          "Classes e frequências",
          "Densidade",
          "Leitura de assimetria"
        ],
        "estrategia": "Contar as observações em cada intervalo, conferir se o total confere com o número de registros, calcular a densidade da primeira classe e descrever o perfil resultante.",
        "execucao": [
          "Contar na classe 10-20: 12, 15 e 18, totalizando 3 observações.",
          "Contar nas classes 20-30, 30-40 e 40-50: 4 observações em cada uma.",
          "Contar na classe 50-60: 5 observações, somando os 20 registros.",
          "Calcular a densidade da primeira classe: 3 ÷ 10 = 0,3.",
          "Descrever o perfil: crescimento discreto das alturas da esquerda para a direita."
        ],
        "resultado": "Frequências de 3, 4, 4, 4 e 5, com densidade 0,3 na primeira classe e distribuição levemente assimétrica à direita.",
        "justificativa": "As frequências somam os vinte registros, o que confere a contagem; como a última classe concentra mais observações que as demais, a cauda direita se alonga e a assimetria fica visível no perfil das barras.",
        "errosFrequentes": [
          "Incluir duas vezes o valor que está no limite superior da classe",
          "Esquecer de conferir se a soma das frequências reproduz o total de observações",
          "Apresentar a densidade sem indicar a largura da classe usada"
        ],
        "variacao": "Com classes de cinco minutos, o número de barras dobra e valores antes próximos passam a ocupar classes distintas, desfocando a assimetria que o agrupamento de dez minutos exibia."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dois grupos de 30 e 300 indivíduos têm a mesma variável medida. Explicar como comparar as distribuições em um mesmo histograma.",
        "dados": "Grupo A com 30 registros e grupo B com 300 registros; mesma variável quantitativa; comparação das formas pretendida.",
        "conceitos": [
          "Frequência relativa",
          "Densidade",
          "Comparação de distribuições"
        ],
        "estrategia": "Identificar o que a escala vertical representaria em cada alternativa, escolher a normalização que torna as áreas comparáveis e fixar a largura de classe nos dois grupos.",
        "execucao": [
          "Simular o uso de frequência absoluta: a barra do grupo de 300 domina a escala.",
          "Consequência: as formas do grupo de 30 ficam comprimidas e incomparáveis.",
          "Adotar frequência relativa ou densidade, com a mesma largura de classe.",
          "Verificar que a área de cada barra corresponde à proporção do próprio grupo."
        ],
        "resultado": "A comparação só é válida com frequência relativa ou densidade e largura de classe idêntica; com frequência absoluta, o grupo maior domina o eixo vertical.",
        "justificativa": "A área da barra precisa representar a mesma grandeza nos dois grupos: a proporção de observações. Como a frequência absoluta depende do tamanho da amostra, só a normalização torna as formas comparáveis.",
        "errosFrequentes": [
          "Comparar histogramas de grupos de tamanhos diferentes em frequência absoluta",
          "Usar larguras de classe diferentes entre os grupos",
          "Concluir que o grupo maior tem outra distribuição porque as barras são mais altas"
        ],
        "variacao": "Se o grupo A for ampliado para 300 registros com a mesma distribuição, os dois histogramas em frequência relativa ficam idênticos, confirmando o efeito de normalização."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'No histograma, a altura da barra mostra a frequência da classe, portanto classes mais largas têm mais representatividade.' Julgar a afirmação.",
        "dados": "Histograma com classes de larguras diferentes: uma classe de dez unidades com 20 observações e outra de cinco unidades com 10 observações.",
        "conceitos": [
          "Altura",
          "Área",
          "Densidade"
        ],
        "estrategia": "Separar altura e área, mostrar que a área é a grandeza comparável e apontar o erro de leitura produzido pela afirmação.",
        "execucao": [
          "Calcular a densidade da classe de dez unidades: 20 ÷ 10 = 2.",
          "Calcular a densidade da classe de cinco unidades: 10 ÷ 5 = 2.",
          "Calcular as áreas: 2 × 10 = 20 e 2 × 5 = 10 observações.",
          "Concluir que a classe larga não é proporcionalmente mais populosa."
        ],
        "resultado": "Errado: com larguras diferentes, a frequência é representada pela área da barra, e a altura é a densidade, de modo que a classe mais larga aparenta maior quantidade sem ser mais populosa.",
        "justificativa": "Quando as larguras variam, a altura deixa de medir a frequência diretamente e passa a medir a densidade; como a área multiplica altura por largura, somente ela conserva a contagem de observações.",
        "errosFrequentes": [
          "Comparar alturas de classes com larguras diferentes",
          "Desenhar barras com larguras diferentes em um gráfico de frequência",
          "Confundir o número de classes com o número de observações"
        ],
        "variacao": "Se as classes passarem a ter largura uniforme de cinco unidades, as duas frequências se espalham em duas barras cada e a leitura por altura volta a ser válida."
      }
    ]
  },
  "m8-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra a diferença entre frequência e densidade e o efeito da escolha dos intervalos: entender que a área da barra representa a proporção e que a estimativa de densidade por kernel apenas troca a escolha de classes pela escolha da largura de banda evita o gabarito errado.",
      "preRequisitos": [
        "Histograma, classes e frequências",
        "Frequência relativa e divisão",
        "Noções de suavização e aproximação"
      ],
      "objetivosObservaveis": [
        "Calcular a densidade de uma classe e verificar a propriedade de área do histograma",
        "Explicar por que frequência e densidade se confundem apenas com larguras iguais",
        "Descrever o efeito de classes largas e estreitas sobre a leitura da forma",
        "Comparar histograma e estimativa de densidade por kernel quanto ao parâmetro de ajuste"
      ],
      "competencias": [
        "Leitura crítica de gráficos de distribuição",
        "Verificação de consistência por área",
        "Escolha e justificativa de parâmetros de suavização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u2-t1-s1 (Histograma: construção, classes e frequências) — base da leitura de forma e classes",
        "m8-u2-t5-s1 (Box plot: quartis, intervalo interquartílico, bigodes e outliers) — alternativa de resumo da distribuição"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens que comparam frequência, densidade e o efeito dos intervalos integram o conteúdo programático de estatística aplicada e de leitura de gráficos, com dificuldade intermediária. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que a densidade é a frequência da classe dividida pela sua largura e que, quando as classes têm a mesma largura, a área de cada barra corresponde à proporção de observações que ela representa.",
      "intermediario": "Nível intermediário: o aluno distingue frequência e densidade, calcula a densidade de classes com larguras diferentes e verifica a propriedade de área do histograma, somando altura vezes largura para recuperar o total de observações.",
      "avancado": "Nível avançado: o aluno avalia o efeito da intervalação, entendendo que classes largas suavizam o perfil e podem esconder multimodalidade, enquanto classes estreitas expõem flutuações de amostragem que imitam picos, e testa a estabilidade da leitura.",
      "especialista": "Nível especialista: o aluno compara histograma e estimativa de densidade por kernel, entendendo que a segunda troca a escolha de classes pela escolha da largura de banda, e avalia o risco de suavização excessiva, que apaga estrutura real da distribuição."
    },
    "comparacoes": [
      {
        "tema": "Frequência x densidade",
        "a": {
          "rotulo": "Frequência",
          "texto": "Número de observações que caem em cada classe; com larguras iguais, a altura da barra é proporcional ao número de casos e permite comparação direta."
        },
        "b": {
          "rotulo": "Densidade",
          "texto": "Frequência relativa dividida pela largura da classe; com larguras diferentes, é a densidade que torna a área de cada barra comparável com a proporção de observações."
        },
        "diferencaGabarito": "A frequência conta os casos e a densidade normaliza a contagem pela largura; com larguras iguais, as duas são proporcionais, e com larguras diferentes, só a densidade permite leitura correta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Densidade e frequência são a mesma grandeza em um histograma.",
        "porqueErrada": "As duas coincidem apenas quando todas as classes têm a mesma largura; com larguras diferentes, a densidade introduz a divisão pela largura e muda a leitura da altura das barras.",
        "versaoCorreta": "Frequência é a contagem de observações; densidade é a contagem por unidade de largura, e é ela que faz a área representar a proporção em classes desiguais."
      },
      {
        "afirmacaoEquivocada": "A estimativa de densidade por kernel dispensa a escolha de parâmetros, pois entrega a forma verdadeira da distribuição.",
        "porqueErrada": "O método apenas substitui a escolha das classes por um parâmetro de largura de banda; valores pequenos revelam ruído e valores grandes apagam picos reais da distribuição.",
        "versaoCorreta": "A largura de banda é uma decisão equivalente à escolha de classes: precisa ser justificada, testada eSensitivity analisada quanto à estabilidade da leitura."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Densidade",
        "Frequência relativa",
        "Propriedade de área",
        "Largura de banda",
        "Estimativa de densidade por kernel",
        "Estabilidade da leitura"
      ],
      "regras": [
        "Densidade = frequência relativa ÷ largura da classe",
        "A soma das áreas das barras reproduz o total de observações",
        "Larguras iguais tornam frequência e densidade proporcionais"
      ],
      "comparacoes": [
        "Histograma (classes explícitas) x estimativa de densidade por kernel (suavização por banda)",
        "Classes largas (suavizam) x classes estreitas (revelam ruído)"
      ],
      "fluxos": [
        "Definir classes → calcular frequências relativas → normalizar pela largura → verificar a área total → observar a forma → repetir com outra intervalação → decidir entre histograma e curva suavizada"
      ],
      "excecoes": [
        "Distribuições multimodais podem exibir picos apenas em intervalações estreitas",
        "Valores extremos comprimem as demais classes quando os limites são fixados pelos dados"
      ],
      "palavrasChave": [
        "densidade",
        "frequência",
        "área",
        "largura de banda",
        "kernel",
        "intervalação"
      ],
      "checklist": [
        "Verifiquei a propriedade de área do histograma?",
        "Confirmei se as larguras de classe são iguais?",
        "Testei a leitura com uma segunda intervalação?",
        "Declarei a largura de banda usada na suavização?",
        "Avaliei se a suavização apaga ou cria estrutura?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Verificar a propriedade de área de um histograma de densidade, calculando a soma de altura vezes largura e comparando com o total de registros.",
        "dados": "Densidades calculadas: 0,012, 0,018, 0,010, 0,006 e 0,004; largura uniforme de 500; total de 25 registros.",
        "conceitos": [
          "Propriedade de área",
          "Densidade",
          "Verificação de consistência"
        ],
        "estrategia": "Somar as densidades, multiplicar a soma pela largura uniforme e comparar o resultado com o número total de observações, o que confirma a consistência do cálculo.",
        "execucao": [
          "Somar as densidades: 0,012 + 0,018 + 0,010 + 0,006 + 0,004 = 0,050.",
          "Multiplicar pela largura: 0,050 × 500 = 25.",
          "Comparar com o total de registros: 25 observações.",
          "Concluir que as densidades estão consistentes."
        ],
        "resultado": "A soma das áreas é igual a 25, exatamente o número de registros, o que confirma que as densidades foram calculadas corretamente.",
        "justificativa": "Como cada barra representa a densidade vezes a largura, a área de todas as barras deve reproduzir o total de observações; a coincidência numérica é o teste de consistência do cálculo.",
        "errosFrequentes": [
          "Multiplicar cada densidade pela largura e somar as áreas individual instead",
          "Comparar a soma das densidades com o número de registros",
          "Desconsiderar a largura ao validar o resultado"
        ],
        "variacao": "Com a largura alterada para mil, a soma das densidades cai para 0,025 e o produto continua igual a 25, confirmando a invariância do total diante da mudança de escala horizontal."
      },
      {
        "tipo": "aplicacao",
        "problema": "Ao passar de cinco para doze classes, a distribuição passou a exibir três picos. Que conclusão é responsável diante dessa mudança?",
        "dados": "Mesma amostra de dados; histogramas construídos com cinco e com doze classes de larguras distintas; três picos visíveis apenas na segunda versão.",
        "conceitos": [
          "Ruído de amostragem",
          "Multimodalidade",
          "Estabilidade da leitura"
        ],
        "estrategia": "Relacionar o número de classes à granularidade, explicar o mecanismo que gera picos aparentes e propor um teste de estabilidade antes de afirmar multimodalidade.",
        "execucao": [
          "Relacionar o número de classes ao tamanho de cada intervalo.",
          "Explicar que, com intervalos menores, cada flutuação pode ocupar uma barra própria.",
          "Provar a estabilidade: repetir a construção com outras intervalações razoáveis.",
          "Separar indício de estrutura real de artefato de intervalação."
        ],
        "resultado": "Não se pode concluir multimodalidade: o teste de estabilidade é indispensável, e os picos que somem em outras intervalações eram ruído produzido pela escolha das classes.",
        "justificativa": "Reduzir a largura das classes aumenta a granularidade e expõe variações aleatórias da amostra, que passam a parecer modos da distribuição; só a persistência do padrão em intervalações alternativas indica estrutura real.",
        "errosFrequentes": [
          "Publicar o histograma com a intervalação que produz o resultado desejado",
          "Concluir multimodalidade a partir de uma única construção",
          "Ignorar o contexto de negócio que indicaria ou descartaria os picos"
        ],
        "variacao": "Se os três picos persistirem com sete e com nove classes e corresponderem a faixas de meaningfully diferentes valores, passa a haver indício de estrutura que merece investigação setorial."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Existem as classes corretas do histograma, independentes do analista.' Julgar a afirmação e indicar a prática correta.",
        "dados": "Publicação de relatório com histograma de cinco classes, sem informação sobre a regra de escolha; risco de interpretação enganosa.",
        "conceitos": [
          "Escolha de classes",
          "Regra de Sturges",
          "Documentação do parâmetro"
        ],
        "estrategia": "Mostrar que a intervalação é uma decisão do analista, apontar as referências que a orientam e definir o que deve ser documentado junto do gráfico.",
        "execucao": [
          "Reconhecer que não existe intervalação única para um mesmo conjunto de dados.",
          "Citar a regra de Sturges como apoio, não como imposição.",
          "Mostrar que a escolha altera a forma percebida e, portanto, a leitura.",
          "Definir a documentação: número de classes, largura e limites."
        ],
        "resultado": "Errado: a intervalação é uma escolha metodológica do analista; o relatório deve declarar número, largura e limites das classes, permitindo ao leitor julgar a leitura apresentada.",
        "justificativa": "A regra de Sturges oferece um ponto de partida derived do tamanho da amostra, mas o número final de classes depende de julgamento analítico; sem declaração, o leitor não consegue verificar se a forma observada é produto do dado ou do parâmetro.",
        "errosFrequentes": [
          "Apresentar o histograma sem indicar quantas classes foram usadas",
          "Tratar a regra de Sturges como obrigatórios",
          "Trocar de intervalação entre versões do relatório sem registrar a mudança"
        ],
        "variacao": "Ao incluir no rodapé do gráfico a informação de cinco classes de largura fixada, a leitura fica auditável e o leitor pode repetir o cálculo."
      }
    ]
  }
};
