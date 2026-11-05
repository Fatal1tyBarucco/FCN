const enriParcialM8U2P2 = {
  "m8-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Gráfico de linhas mostra evolução em eixo ordenado; a prova cobra a leitura de tendência e a distinção entre linha e barra, e confundi-las inverte o gabarito. Ordenar o eixo X e calcular a variação sobre o valor anterior resolve a maioria dos itens sobre séries de indicadores.",
      "preRequisitos": [
        "Séries temporais e ordenação cronológica",
        "Variação absoluta e percentual entre dois valores"
      ],
      "objetivosObservaveis": [
        "Construir um gráfico de linhas a partir de uma série temporal ordenada",
        "Calcular variações absolutas e percentuais entre pontos consecutivos",
        "Interpretar tendência, sazonalidade e ruptura em uma série exibida",
        "Decidir o tratamento de uma lacuna de coleta antes de plotar"
      ],
      "competencias": [
        "Análise de séries temporais",
        "Leitura crítica de tendências e de retas de ajuste"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u2-t3-s1 (Barras e colunas: ordenação, comparação e linha de base) — contraste quanto à natureza do eixo X",
        "m8-u1-t3-s3 (Escalas linear, logarítmica e eixos truncados) — efeito da escala na leitura",
        "m8-u3-t1-s1 (Média, mediana e moda — quando usar cada uma) — resumo numérico que acompanha a série"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Alta, como estimativa pedagógica de centralidade no conteúdo programático de visualização de dados: interpretação de tendência e escolha entre linha e barra são exigências permanentes nos itens de avaliação. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Um gráfico de linhas liga pontos que representam valores de variável numérica em instantes ordenados, quase sempre no tempo. A inclinação do segmento indica crescimento ou queda, e a sequência dos segmentos compõe a tendência. O eixo horizontal precisa estar em ordem cronológica.",
      "intermediario": "Além da tendência, a leitura considera sazonalidade, padrão que se repete em intervalos regulares, e rupturas, mudança abrupta de nível. A variação entre pontos é absoluta, pela diferença, ou percentual, dividindo pelo valor anterior. Lacunas exigem decisão explícita: interromper a linha ou marcar sem dado.",
      "avancado": "A reta de tendência é ajuste de mínimos quadrados sobre os pontos observados: resume a direção passada e não prevê o futuro. Projetá-la é extrapolação e depende de suposição de persistência do padrão. Importa auditar a escala do eixo Y, linear ou logarítmica, e a sobreposição de múltiplas séries.",
      "especialista": "Na auditoria de painel, verifica-se se o eixo X é contínuo ou categórico, pois linha só se justifica no primeiro caso; se há lacunas mascaradas por conexão direta; se unidade, período e fonte estão declarados; e se a agregação temporal é comparável entre as séries exibidas."
    },
    "comparacoes": [
      {
        "tema": "Linha x barra para a mesma informação",
        "a": {
          "rotulo": "Gráfico de linhas",
          "texto": "Conecta pontos em eixo ordenado; a inclinação dos segmentos mostra direção e velocidade da mudança."
        },
        "b": {
          "rotulo": "Gráfico de barras",
          "texto": "Compara categorias discretas por altura ou comprimento, sem implicar continuidade entre elas."
        },
        "diferencaGabarito": "A linha pressupõe ordem e continuidade do eixo X; a barra trata categorias independentes. Série temporal pede linha e comparação de categorias pede barra."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'linhas servem para qualquer categoria, inclusive regiões sem ordem definida.'",
        "porqueErrada": "A linha implica continuidade entre pontos consecutivos; em categorias sem ordem natural, fabrica uma progressão inexistente e induz leitura falsa de evolução.",
        "versaoCorreta": "Categorias sem ordem própria são comparadas com barras; a linha fica reservada a eixo ordenado, tipicamente o tempo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'lacunas de coleta podem ser ignoradas, ligando diretamente os pontos vizinhos.'",
        "porqueErrada": "Conectar pontos separados por período sem medição cria a ilusão de valores intermediários inexistentes, turbinando a tendência lida no gráfico.",
        "versaoCorreta": "A linha é interrompida na lacuna, ou o período é marcado como sem dado; estimativa só entra identificada como tal."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'a tendência observada garante a previsão dos próximos períodos.'",
        "porqueErrada": "A tendência é descritiva: resume o comportamento passado e não incorpora mudanças de contexto que podem reverter o movimento da série.",
        "versaoCorreta": "Tendência descreve o passado; projeção futura é cenário condicionado à suposição declarada de continuidade do padrão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Linha: segmentos que conectam valores de variável numérica em eixo ordenado.",
        "Tendência: direção predominante da série, de crescimento, estabilidade ou decrescimento.",
        "Sazonalidade: padrão repetitivo em intervalos regulares, como altas no mesmo mês.",
        "Ruptura: mudança abrupta de nível da série, em geral associada a um evento identificável."
      ],
      "regras": [
        "O eixo X deve estar ordenado cronologicamente; ordenar por valor destrói a dimensão temporal.",
        "A variação percentual entre pontos consecutivos é (final − anterior) ÷ anterior × 100."
      ],
      "comparacoes": [
        "Linha, para evolução contínua, versus barra, para comparação de categorias discretas."
      ],
      "fluxos": [
        "Coletar, ordenar pelo tempo, plotar, conectar respeitando lacunas e ler tendência, sazonalidade e rupturas."
      ],
      "excecoes": [
        "Com lacuna de coleta, interrompe-se a linha ou marca-se o período como sem dado."
      ],
      "palavrasChave": [
        "linha",
        "tendência",
        "sazonalidade",
        "ruptura",
        "série temporal"
      ],
      "checklist": [
        "O eixo X está em ordem cronológica?",
        "A variação percentual usou o valor anterior como denominador?",
        "As lacunas de coleta estão sinalizadas ou a linha foi interrompida?",
        "A reta de tendência foi apresentada como descrição do passado, não como previsão?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular a variação percentual de março para abril na série mensal de atendimentos 120, 132, 115, 140.",
        "dados": "Série mensal: janeiro 120, fevereiro 132, março 115, abril 140. O valor de março é a base, por ser o período anterior a abril.",
        "conceitos": [
          "Variação absoluta entre pontos consecutivos",
          "Base da variação percentual: o valor anterior"
        ],
        "estrategia": "Isolar o par março e abril, calcular a diferença absoluta e dividi-la pelo valor do período anterior, multiplicando por 100.",
        "execucao": [
          "Identificar o valor anterior, março = 115, e o final, abril = 140.",
          "Calcular a diferença absoluta: 140 − 115 = 25.",
          "Dividir pelo valor anterior: 25 ÷ 115 ≈ 0,2174.",
          "Multiplicar por 100: aproximadamente 21,74% de crescimento."
        ],
        "resultado": "A variação de março para abril é de +25 atendimentos, cerca de +21,74%. Usar abril como base daria 17,86%, que não responde ao enunciado.",
        "justificativa": "A variação percentual entre períodos consecutivos é definida sobre o valor anterior, porque expressa quanto o indicador cresceu em relação ao ponto de partida. Trocar o denominador altera a medida e produz resposta incompatível com o que foi perguntado, ainda que a aritmética esteja correta.",
        "errosFrequentes": [
          "Usar o valor final como denominador, confundindo a base da variação.",
          "Subtrair pontos não consecutivos, ignorando a ordem temporal da série."
        ],
        "variacao": "Série 200, 180, 150: calcular a variação de fevereiro para março e a acumulada de janeiro para março."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma série trimestral tem lacuna em 2024T2 porque a coleta não foi realizada. Como representar o período sem dado sem induzir o leitor a erro?",
        "dados": "Série trimestral: 2023T3 = 78, 2023T4 = 81, 2024T1 = 85, 2024T2 sem coleta, 2024T3 = 90, 2024T4 = 93.",
        "conceitos": [
          "Continuidade implicada pela linha",
          "Marcação de período sem dado"
        ],
        "estrategia": "Tratar a lacuna como ausência de informação, e não como zero: interromper o segmento entre 2024T1 e 2024T3 e marcar o trimestre como sem dado.",
        "execucao": [
          "Plotar normalmente os pontos com valor conhecido.",
          "Deixar de desenhar o segmento que atravessa 2024T2.",
          "Rotular o trimestre como sem dado no eixo ou em nota.",
          "Exibir eventual estimativa em traço próprio e identificada."
        ],
        "resultado": "A tendência de crescimento aparece apenas nos intervalos com dado, com a lacuna sinalizada e nenhum valor intermediário fabricado.",
        "justificativa": "A linha afirma continuidade entre pontos vizinhos; atravessar um período sem coleta equivale a declarar valores não medidos, distorcendo a tendência e a variação acumulada. A interrupção preserva a integridade do gráfico e informa o limite da evidência disponível.",
        "errosFrequentes": [
          "Conectar os pontos vizinhos como se o trimestre tivesse sido medido.",
          "Tratar a lacuna como zero, produzindo queda artificial na série."
        ],
        "variacao": "Série semanal com dois períodos consecutivos sem coleta: escolher entre interromper a linha ou exibir apenas os pontos."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação sob análise: 'A reta de tendência demonstra o crescimento futuro do indicador.' Verificar a afirmação e explicar a falha de interpretação.",
        "dados": "Série de 24 observações mensais com leve crescimento, sobre a qual foi ajustada reta de mínimos quadrados de inclinação positiva.",
        "conceitos": [
          "Reta de tendência como ajuste descritivo",
          "Extrapolação e suas suposições"
        ],
        "estrategia": "Distinguir o que a reta resume, a direção dos pontos observados, da projeção em períodos futuros, que depende de suposições externas sobre o padrão.",
        "execucao": [
          "Reconhecer que a reta vem de mínimos quadrados sobre os pontos observados.",
          "Verificar que a inclinação positiva descreve o passado da amostra.",
          "Identificar que a projeção futura não está contida nos dados.",
          "Reformular a conclusão como cenário condicionado ao padrão."
        ],
        "resultado": "A afirmação está errada: a reta resume a direção passada dos pontos, e valor futuro é extrapolação, válida só sob suposição declarada de continuidade.",
        "justificativa": "O ajuste de mínimos quadrados é descritivo sobre a amostra: minimiza a distância vertical aos pontos observados e nada afirma fora dela. Projetar a reta exige hipótese de estabilidade do processo gerador, que deve ser apresentada como cenário, nunca como previsão comprovada.",
        "errosFrequentes": [
          "Confundir descrição do passado com previsão do futuro.",
          "Apresentar a extrapolação como resultado do modelo sem declarar a suposição."
        ],
        "variacao": "Série com sazonalidade anual acentuada: avaliar se a reta linear é resumo adequado e o que a sazonalidade exige além dela."
      }
    ]
  },
  "m8-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Barras e colunas comparam categorias por magnitude, e dois pontos decidem o gabarito: a linha de base em zero e a ordenação das categorias. Eixo truncado transforma razão de duas vezes em diferença enorme, e ordenação invertida falseia o ranking lido pelo leitor.",
      "preRequisitos": [
        "Noção de categoria e de variável categórica",
        "Leitura de proporção e de razão entre valores"
      ],
      "objetivosObservaveis": [
        "Construir um gráfico de barras ou de colunas a partir de valores por categoria",
        "Ordenar as categorias conforme o objetivo, em ranking ou em ordem própria",
        "Avaliar linha de base e escala para detectar distorção visual",
        "Escolher entre barras horizontais e colunas verticais conforme os rótulos"
      ],
      "competencias": [
        "Análise comparativa entre categorias",
        "Auditoria visual de escalas e de linhas de base"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u2-t2-s1 (Linhas: ordenação temporal, continuidade e tendências) — contraste quanto à natureza do eixo X",
        "m8-u1-t3-s3 (Escalas linear, logarítmica e eixos truncados) — efeito do recorte na comparação",
        "m8-u1-t4-s1 (Matriz de decisão: comparar, evoluir, distribuir, relacionar, compor) — escolha do tipo de gráfico"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Alta, como estimativa pedagógica de centralidade no conteúdo programático de visualização de dados: linha de base em zero, ordenação e detecção de escala enganosa são exigências permanentes nos itens de avaliação. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Cada categoria recebe uma barra cujo comprimento, na horizontal, ou altura, na vertical, é proporcional ao valor. A comparação visual de comprimentos diz qual categoria é maior e por que fator aproximado. O eixo de valores começa em zero, porque só assim o comprimento é proporcional ao dado.",
      "intermediario": "Para ranking, as categorias são ordenadas em ordem decrescente, o que evidência a hierarquia; quando têm ordem própria, como faixas etárias ou meses, ela é respeitada. Barras horizontais acomodam rótulos longos e colunas verticais servem a séries temporais curtas. Truncar o eixo exagera diferenças.",
      "avancado": "A comparação em barras é de comprimento, não de posição, e por isso a base zero é requisito de fidelidade: com base em 70, valores de 40 e 80 geram alturas 0 e 10, sugerindo diferença infinita quando a razão real é dois. Barras empilhadas permitem ler o total, mas dificultam as camadas internas.",
      "especialista": "A auditoria de painel verifica linha de base, rótulos de dado quando o eixo é recortado, coerência da ordenação com a mensagem e legibilidade dos rótulos. Escala enganosa inclui base arbitrária e percentuais sobre denominadores distintos. Painel robusto declara unidade, fonte e critério de ordenação."
    },
    "comparacoes": [
      {
        "tema": "Barras horizontais x colunas verticais",
        "a": {
          "rotulo": "Barras horizontais",
          "texto": "O valor cresce para a direita e o rótulo fica à esquerda, com espaço amplo para nomes longos."
        },
        "b": {
          "rotulo": "Colunas verticais",
          "texto": "O valor cresce para cima e os rótulos ficam sob as categorias, formato natural para séries temporais curtas."
        },
        "diferencaGabarito": "A escolha é de legibilidade: barras horizontais quando os rótulos são longos, colunas quando o eixo categórico é curto e ordenado, como períodos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'barras podem começar em valor diferente de zero, desde que o eixo esteja rotulado.'",
        "porqueErrada": "A comparação em barras é de comprimento a partir de base comum; iniciar acima de zero remove parcelas desiguais de cada barra e exagera as diferenças.",
        "versaoCorreta": "A linha de base do eixo deve ser zero; se o detalhe exigir recorte, usam-se rótulo de dado e destaque da variação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'a ordenação das categorias não afeta a leitura do gráfico.'",
        "porqueErrada": "A percepção de ranking depende da disposição das barras; categorias fora de ordem dificultam a comparação e desviam a atenção do leitor.",
        "versaoCorreta": "Ordena-se em ordem decrescente para ranking e respeita-se a ordem própria quando ela existe, como tempo ou escala."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'pizza é sempre melhor para composição, por mostrar fatias de um total.'",
        "porqueErrada": "Com muitas categorias as fatias ficam estreitas e exigem comparação angular, leitura menos precisa que a de comprimento.",
        "versaoCorreta": "Para muitas categorias usam-se barras empilhadas ou barras simples; pizza fica restrita a poucas fatias bem distintas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Barra e coluna: comparação de valores por categoria, com comprimento proporcional ao valor.",
        "Linha de base: origem do eixo de valores, que deve ser zero para preservar a proporcionalidade.",
        "Ordenação: disposição em ranking decrescente ou na ordem própria da variável.",
        "Escala enganosa: recorte do eixo que exagera diferenças de magnitude."
      ],
      "regras": [
        "O eixo de valores de barras começa em zero, porque a leitura é de comprimento comparado a base comum.",
        "Para ranking, ordenam-se as categorias em ordem decrescente; havendo ordem própria, ela prevalece."
      ],
      "comparacoes": [
        "Barras horizontais, para rótulos longos, versus colunas verticais, para séries temporais curtas."
      ],
      "fluxos": [
        "Definir categorias e valores, escolher barras ou colunas, ordenar segundo o objetivo, fixar base em zero e rotular."
      ],
      "excecoes": [
        "Se o eixo precisar ser recortado, a alternativa honesta é rótulo de dado com destaque da variação."
      ],
      "palavrasChave": [
        "barra",
        "coluna",
        "ordenação",
        "linha de base",
        "ranking"
      ],
      "checklist": [
        "O eixo de valores começa em zero?",
        "A ordenação corresponde ao objetivo da comparação?",
        "Os rótulos estão legíveis e as unidades foram declaradas?",
        "Há escala enganosa por recorte de eixo ou base arbitrária?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Verificar se a soma das participações de quatro canais, 36,3%, 25,8%, 22,6% e 15,3%, é coerente com o total exibido.",
        "dados": "Atendimentos por canal em um mês, total 1.240: A 450, B 320, C 280, D 190, com participações 36,3%, 25,8%, 22,6% e 15,3%.",
        "conceitos": [
          "Participação percentual sobre denominador comum",
          "Coerência interna de uma composição"
        ],
        "estrategia": "Somar as participações e conferir se o resultado é 100%, o que só ocorre quando todas usam o mesmo denominador, o total de 1.240 atendimentos.",
        "execucao": [
          "Somar as participações: 36,3 + 25,8 + 22,6 + 15,3.",
          "Obter 100,0%, resultado esperado para composição completa.",
          "Conferir um dos valores: 450 ÷ 1.240 ≈ 36,3%.",
          "Concluir que os percentuais partilham denominador e são comparáveis."
        ],
        "resultado": "A soma é 100,0%, o que confirma a coerência da composição: todas as participações foram calculadas sobre o total de 1.240 atendimentos.",
        "justificativa": "Participações de uma mesma composição somam 100% porque repartem um único total. Se cada categoria tivesse percentual sobre o próprio total, cada uma fecharia 100% e a soma não significaria nada, apenas ilusão de completude.",
        "errosFrequentes": [
          "Somar percentuais de denominadores diferentes e tratar o resultado como composição.",
          "Concluir que a soma 100,0% afasta erros de arredondamento em cada participação."
        ],
        "variacao": "Composição com cinco categorias e participações 31%, 27%, 24%, 12% e 7%: verificar a soma e a coerência."
      },
      {
        "tipo": "aplicacao",
        "problema": "Comparar dois valores, 40 e 80, com barras cujo eixo de valores parte de 70. Qual leitura visual resulta e qual correção aplicar?",
        "dados": "Valores: série A = 40 e série B = 80. Com eixo em 70, as alturas desenhadas são 0 e 10; com base em zero, são 40 e 80.",
        "conceitos": [
          "Linha de base zero em comparação de comprimento",
          "Razão entre valores e sua leitura visual"
        ],
        "estrategia": "Calcular as alturas sob o eixo truncado, comparar a impressão visual com a razão real e corrigir a base do eixo.",
        "execucao": [
          "Subtrair a base do eixo de cada valor: 40 − 70 = 0 e 80 − 70 = 10.",
          "Observar que a barra de 40 desaparece e a de 80 sugere diferença desproporcional.",
          "Calcular a razão real: 80 ÷ 40 = 2, o dobro.",
          "Refazer com base em zero ou manter o recorte com rótulo de dado."
        ],
        "resultado": "Com base 70 a segunda barra parece infinitamente maior, embora a razão real seja dois; a correção é estabelecer base em zero.",
        "justificativa": "Barras codificam magnitude em comprimento medido a partir da linha de base, e essa codificação só é proporcional com base zero. O recorte remove parcelas desiguais de cada barra e rompe a proporção; o leitor compara comprimentos, não posições.",
        "errosFrequentes": [
          "Aceitar eixo truncado em barras por ser prática corrente em linhas.",
          "Ler a diferença de altura como razão entre os valores."
        ],
        "variacao": "Comparar 120 e 150 com eixo partindo de 100: calcular alturas desenhadas, razão real e correção indicada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação sob análise: 'Barras empilhadas são ideais para comparar a evolução de seis séries ao longo de doze meses.' Verificar a afirmação e explicar a falha.",
        "dados": "Painel com seis séries mensais, cada uma com doze observações, exibido em barras empilhadas por período no eixo horizontal.",
        "conceitos": [
          "Limite de leitura das camadas em barras empilhadas",
          "Pequenos múltiplos como alternativa"
        ],
        "estrategia": "Avaliar quais camadas têm linha de base comum e quais dependem de faixas internas, para indicar a forma adequada ao número de séries.",
        "execucao": [
          "Identificar que só a primeira camada de cada barra tem base comum, o zero.",
          "Reconhecer que as demais são lidas por faixas sobrepostas, sem referência fixa.",
          "Concluir que comparar seis séries assim exige esforço visual incompatível com a precisão.",
          "Substituir a forma por pequenos múltiplos ou gráfico de linhas."
        ],
        "resultado": "A afirmação está errada: empilhar seis séries obriga a comparar faixas do meio sem base comum, tornando a comparação inviável.",
        "justificativa": "A leitura confiável em barras depende de base compartilhada, e o empilhamento a fornece apenas à camada inferior. Pequenos múltiplos devolvem a cada série seu próprio eixo, preservando a comparabilidade; linhas resolvem melhor a comparação de evolução entre muitas séries.",
        "errosFrequentes": [
          "Confundir leitura do total empilhado com comparação entre séries componentes.",
          "Aumentar cores e rótulos para compensar a dificuldade das faixas internas."
        ],
        "variacao": "Três séries em oito períodos: decidir entre barras empilhadas, agrupadas e pequenos múltiplos, justificando pela quantidade de séries."
      }
    ]
  }
};
