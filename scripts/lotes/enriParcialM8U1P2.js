const enriParcialM8U1P2 = {
  "m8-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A paleta define o que o leitor distingue, e a prova cobra a escolha conforme o tipo de variável: categórica, sequencial ou divergente. Confundir estética com acessibilidade muda o gabarito: codificar só pela cor exclui quem não distingue matizes.",
      "preRequisitos": [
        "Noções de visualização de dados: tipos de gráficos e tipos de variáveis.",
        "Leitura de gráficos de barras, de linhas e de mapas de calor.",
        "Distinção entre categorias sem ordem natural, grandezas ordenadas e desvios em relação a uma referência."
      ],
      "objetivosObservaveis": [
        "Selecionar paleta categórica, sequencial ou divergente a partir do tipo de variável e da pergunta analítica.",
        "Verificar contraste suficiente entre texto e fundo e entre séries adjacentes.",
        "Construir hierarquia visual combinando tamanho, cor e posição do elemento.",
        "Eliminar a dependência exclusiva de cor com rótulos, formas ou padrões e teste em escala de cinza."
      ],
      "competencias": [
        "Auditar a paleta de um painel e identificar cores sem função informativa.",
        "Justificar a paleta escolhida a partir do tipo de dado e da tarefa de leitura.",
        "Redesenhar a hierarquia visual de um gráfico sobrecarregado de elementos."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u1-t2-s2 (Acessibilidade em visualizações) — a redundância de canais completa o critério de cor com função.",
        "m8-u1-t1-s2 (Princípios da Gestalt aplicados a gráficos) — a similaridade por cor organiza o agrupamento percebido das séries.",
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital) — sustenta o requisito de redundância além da cor."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de prova exigem a paleta adequada a cada tipo de variável e a leitura crítica de painéis. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: a cor tem função — diferenciar séries, destacar um valor ou indicar posição em relação a uma meta. O aluno identifica três famílias de paleta (categórica, sequencial e divergente), reconhece que a escala de cinza revela dependência excessiva de cor e aprende que a hierarquia visual nasce de tamanho, posição e contraste, e não de enfeite.",
      "intermediario": "Nível intermediário: o aluno escolhe a paleta pelo tipo de dado. Categorias sem ordem natural pedem matizes distinguíveis; grandezas ordenadas pedem degradê de luminosidade; desvios em torno de uma referência pedem duas famílias de cor com ponto neutro na meta. Também ordena a leitura, do dado principal ao secundário, e evita cores que competem entre si.",
      "avancado": "Nível avançado: o aluno garante acessibilidade de cor. Depende menos do matiz quando combina cor com rótulo textual, padrão de preenchimento, forma da marca e posição; verifica contraste de luminância entre texto e fundo e entre séries adjacentes; testa o painel em escala de cinza e em impressão preto e branco, onde apenas os padrões sobrevivem.",
      "especialista": "Nível especialista: o aluno audita um painel quanto a cores e contraste. Verifica se cada cor carrega um significado único e estável entre gráficos, se a ordem de leitura do título ao detalhe está clara, se o contraste mínimo se mantém no pior caso da paleta e se a impressão em escala de cinza conserva a distinção entre séries; registra os achados e o critério de correção."
    },
    "comparacoes": [
      {
        "tema": "Paleta categórica ou paleta sequencial",
        "a": {
          "rotulo": "Categórica",
          "texto": "Cada categoria recebe um matiz distinto, sem ordem implícita entre elas. É adequada a nomes de séries, unidades federativas, tipos de chamado ou produtos, em que o leitor precisa apenas identificar a qual grupo cada item pertence."
        },
        "b": {
          "rotulo": "Sequencial",
          "texto": "Uma única família de cor varia de luminosidade do mais claro ao mais escuro, acompanhando a ordem dos valores. É adequada a magnitudes contínuas, como atendimentos por bairro, em que o que se comunica é o quanto, e não o quê."
        },
        "diferencaGabarito": "A categórica separa grupos e não codifica ordem; a sequencial codifica magnitude em uma gradação contínua. Trocá-las destrói informação: cores distintas para faixas de valor criam categorias falsas, e um degradê aplicado a nomes sem ordem não indica qual é o maior."
      },
      {
        "tema": "Cor como único canal ou redundância de canais",
        "a": {
          "rotulo": "Somente cor",
          "texto": "A distinção entre alta e queda depende exclusivamente do matiz vermelho ou verde, sem rótulo, forma ou padrão acompanhando a marca."
        },
        "b": {
          "rotulo": "Cor com redundância",
          "texto": "Cada estado recebe cor, rótulo textual e sinal próprio (seta, padrão de preenchimento ou forma), de modo que a informação permaneça legível sem depender da percepção de matiz."
        },
        "diferencaGabarito": "Redundância não é excesso decorativo: é a garantia de que a informação continua disponível para quem não distingue cores e para a impressão em preto e branco. A cor deixa de ser canal único e passa a ser reforço de um código que já funciona sozinho."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Paleta arco-íris é a melhor porque aproveita todas as cores disponíveis.'",
        "porqueErrada": "O arco-íris não codifica ordem nem magnitude e introduz muitas cores saturadas que competem entre si, nivelando a hierarquia visual. O número de cores deve ser dimensionado pela tarefa de leitura e pelo número de categorias realmente relevantes, não pela variedade disponível na ferramenta.",
        "versaoCorreta": "Incorreto: use o mínimo de cores suficiente à tarefa e à quantidade de categorias relevantes, com matizes distinguíveis entre si."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Vermelho e verde formam a melhor combinação, porque o contraste entre eles é forte.'",
        "porqueErrada": "A combinação é justamente a mais problemática para quem tem deficiência de visão de cores: as duas matizes podem ser confundidas, invertendo o sentido da leitura. Percepção de matiz não é a mesma coisa que contraste de luminância.",
        "versaoCorreta": "Errado: use redundância — rótulo textual, forma ou padrão — de modo que o estado identificado pela cor também esteja escrito no gráfico."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Contraste alto entre texto e fundo já garante a leitura do gráfico.'",
        "porqueErrada": "O contraste resolve a diferença de luminosidade, não a dependência de matiz: séries com cores próximas e sem rótulo continuam indistinguíveis. Contraste alto é condição necessária, nunca suficiente, quando a informação está codificada apenas pela cor.",
        "versaoCorreta": "Incorreto: contraste alto é apenas parte do requisito; a informação precisa de redundância além da cor e de hierarquia visual clara."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Função da cor: diferenciar séries, destacar valor ou situar uma medida em relação a uma referência.",
        "Paleta categórica: matizes distintos para categorias sem ordem natural.",
        "Paleta sequencial: gradação de luminosidade para grandezas ordenadas.",
        "Paleta divergente: duas famílias de cor com ponto neutro na referência.",
        "Hierarquia visual: ordem de leitura firmada por tamanho, posição, cor e contraste."
      ],
      "regras": [
        "A paleta segue o tipo de dado: categórica para categorias, sequencial para magnitude, divergente para desvio da referência.",
        "Não dependa apenas da cor: acrescente rótulo, forma ou padrão a cada estado distinguível.",
        "Contraste alto entre texto e fundo é condição necessária, mas não suficiente para garantir a leitura.",
        "Teste o painel em escala de cinza e em impressão preto e branco antes de publicá-lo."
      ],
      "comparacoes": [
        "Categórica separa grupos; sequencial codifica magnitude em gradação contínua; divergente codifica desvio em torno de uma referência neutra.",
        "Cor como canal único funciona apenas para quem distingue matizes; a redundância mantém a informação legível para todo o público."
      ],
      "fluxos": [
        "Classificar a variável e a pergunta → escolher a família de paleta → ajustar contraste e hierarquia → acrescentar redundância → testar em escala de cinza e em preto e branco.",
        "Auditar um painel: listar cada cor em uso → verificar se codifica algo → identificar onde a cor é o único canal → corrigir com rótulo ou padrão → reavaliar a ordem de leitura."
      ],
      "excecoes": [
        "Na impressão preto e branco, cores distintas desaparecem: o padrão de preenchimento e o rótulo assumem a distinção.",
        "Com uma única série, a cor pode ser dispensada na codificação, pois forma e posição já identificam o dado."
      ],
      "palavrasChave": [
        "cor",
        "contraste",
        "hierarquia visual",
        "paleta",
        "categórica",
        "sequencial",
        "divergente",
        "redundância"
      ],
      "checklist": [
        "A paleta corresponde ao tipo de variável e à pergunta analítica?",
        "O texto e o fundo têm contraste suficiente para leitura confortável?",
        "Cada cor usada no painel codifica alguma informação?",
        "A distinção entre estados sobrevive à leitura em escala de cinza?",
        "A ordem de leitura (título, dado principal, detalhe) está evidente e sem disputa de atenção?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma prefeitura apresenta o número de atendimentos por bairro, ranging de 5 a 120. Que tipo de paleta deve ser adotada e por que cores distintas para cada faixa de valor não funcionam?",
        "dados": "Doze bairros; volume de atendimentos entre 5 e 120 por mês; a grandeza é numérica e contínua, sem categorias nominais; nenhuma referência central (meta) entra no gráfico.",
        "conceitos": [
          "Paleta sequencial por gradação de luminosidade",
          "Magnitude contínua e ordenada"
        ],
        "estrategia": "Identificar o tipo de dado antes de escolher cores: existe uma única grandeza contínua, ordenada de 5 a 120, sem categorias e sem ponto de referência. A leitura pedida é 'quanto maior o número, mais escuro', o que exige uma gradação de uma única família de cor.",
        "execucao": [
          "1) Classificar a variável: grandeza numérica contínua, sem ordem nominal de grupos.",
          "2) Descartar a paleta categórica, que criaria faixas sem significado e apagaria a ordem perceptiva.",
          "3) Adotar paleta sequencial de uma família, do mais claro (5) ao mais escuro (120).",
          "4) Verificar em escala de cinza se a gradação permanece legível."
        ],
        "resultado": "Sequencial (uma cor em degradê de luminosidade): a magnitude é contínua e ordenada, e a percepção de mais-ou-menos acompanha o escurecimento. Usar cores categóricas distintas para cada faixa de valor destruiria a ordem perceptiva e complicaria a leitura.",
        "justificativa": "O dado não tem categorias, mas tem ordem: o bairro com mais atendimentos deve ser percebido como maior. A cor categórica transformaria a magnitude em conjunto de grupos sem relação entre si, enquanto a paleta sequencial preserva a leitura de 'mais ou menos' em um único olhar, que é o que o gráfico promete mostrar.",
        "errosFrequentes": [
          "Dividir os valores em faixas (baixo, médio, alto) e pintar cada faixa de uma cor diferente, inventando categorias que o dado não contém.",
          "Usar a paleta sequencial para os nomes dos bairros, de modo que o bairro B com mais atendimentos apareça mais claro que o bairro A."
        ],
        "variacao": "Se o mesmo painel for montado com o percentual de atendimento de cada bairro em relação a uma meta de 100 procedimentos, a escolha muda para paleta divergente com ponto neutro na meta: a informação passa a ser o desvio em torno da referência, e não a magnitude bruta."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um painel de desempenho por unidade mostra 3 unidades acima da meta, 7 abaixo e 2 exatamente na meta. Que paleta resolve e o que o leitor deve localizar primeiro?",
        "dados": "12 unidades avaliadas no trimestre; meta de 100% do plano; 3 unidades acima, 7 abaixo e 2 na meta; leitura principal esperada: distância em relação à meta e identificação rápida das unidades fora do alvo.",
        "conceitos": [
          "Paleta divergente com ponto neutro",
          "Referência central como âncora de leitura"
        ],
        "estrategia": "Tratar a meta como zero do gráfico: o que interessa é o sinal do desvio e a distância até a referência. Uma paleta divergente com duas famílias de cor e um neutro no valor de referência permite encontrar primeiro quem está fora do alvo, sem ler rótulo por rótulo.",
        "execucao": [
          "1) Reconhecer que existe uma referência central (a meta) e desvios com sinal em torno dela.",
          "2) Escolher paleta divergente: uma família para acima da meta, outra para abaixo.",
          "3) Fixar o cinza claro como ponto neutro, reservado às 2 unidades na meta.",
          "4) Reforçar o sinal com rótulo de texto ('acima', 'abaixo', 'na meta'), para não depender só da matiz."
        ],
        "resultado": "Divergente com ponto neutro na meta: uma cor para acima, outra para abaixo e neutro (cinza claro) para 'na meta'. O ponto neutro carrega a informação de referência, que é exatamente o que o leitor precisa localizar primeiro.",
        "justificativa": "A pergunta do painel é sobre desvio, não sobre quantidade. A paleta divergente posiciona a meta como centro visual e faz o sinal do desvio aparecer antes de qualquer leitura numérica, o que atende ao objetivo de localizar rapidamente as unidades fora do alvo. O neutro impede que 'estar na meta' pareça uma categoria igual às demais.",
        "errosFrequentes": [
          "Reaproveitar a paleta sequencial da magnitude bruta, que faz a unidade com menor desvio parecer boa e a com maior desvio parecer ruim sem explicitar o sentido do desvio.",
          "Pintar as unidades na meta com uma cor saturada qualquer, em vez do neutro, para que pareçam destaque e confundam a leitura."
        ],
        "variacao": "Se a meta for revista no mês seguinte e o painel passar a mostrar a distância percentual de cada unidade em relação à meta revisada, a estrutura permanece divergente, mas o neutro se desloca do centro para o novo valor de referência e precisa ser rotulado com o número correspondente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em slide de apresentação: 'Paleta arco-íris é a melhor porque aproveita todas as cores disponíveis.' Avalie a afirmação e indique o defeito de leitura que ela provoca.",
        "dados": "Painel com 9 séries anuais de valores próximos (entre 42 e 58 atendimentos), sem rótulo direto nas séries, com arco-íris de cores saturadas e título genérico ('Atendimentos 2026').",
        "conceitos": [
          "Ruído visual e nivelamento de hierarquia",
          "Dimensionamento da paleta pela tarefa de leitura"
        ],
        "estrategia": "Não discutir gosto, e sim codificação: verificar quantas categorias precisam ser distinguidas, se o arco-íris ajuda a compará-las e se a hierarquia entre os elementos do painel sobrevive a tantas cores saturadas competindo entre si.",
        "execucao": [
          "1) Contar as categorias realmente relevantes e comparar com a quantidade de cores em uso.",
          "2) Observar que o arco-íris não codifica ordem nem magnitude: as séries ficam equivalentes entre si.",
          "3) Verificar que as cores saturadas competem com o dado e nivelam a hierarquia do painel.",
          "4) Concluir que a paleta deve ser dimensionada pela tarefa, com poucas cores bem escolhidas."
        ],
        "resultado": "Errado. Muitas cores fortes simultâneas nivelam a hierarquia, dificultam distinguir séries parecidas e cansam a leitura. A paleta deve ser dimensionada pelo número de categorias relevantes e pela tarefa — normalmente poucas cores, bem escolhidas.",
        "justificativa": "A leitura ingênua associa variedade de cores a riqueza de informação, mas o arco-íris apenas aumenta a quantidade de elementos visuais. Em séries de valores próximos e sem rótulo direto, a similaridade de matiz passa a ser o critério de agrupamento percebido e o leitor não consegue dizer quais séries se aproximam. O defeito é de codificação, não de estética.",
        "errosFrequentes": [
          "Avaliar a paleta pelo impacto visual ou pela rapidez de montagem, em vez de verificar quantas categorias o painel realmente precisa distinguir.",
          "Acusar o arco-íris de ser feio e concluir apenas que se deve usar poucas cores, sem explicar o mecanismo de nivelamento da hierarquia que o excesso de cor provoca."
        ],
        "variacao": "Se o painel passar a mostrar 3 séries apenas, com rótulo direto ao fim de cada linha e uma cor por série, a mesma crítica não se aplica: poucas cores bem diferenciadas resolvem a leitura, e o arco-íris voltaria a ser apenas mais uma opção disponível."
      }
    ]
  },
  "m8-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Um gráfico inacessível é informação negada a quem mais precisa dela. A prova trata acessibilidade como requisito de visualização pública: texto alternativo, tabela equivalente, fonte legível, navegação por teclado e ausência de dependência de animação. Um painel bonito, mas ilegível por leitor de tela, entrega apenas metade do conteúdo.",
      "preRequisitos": [
        "Conceitos de acessibilidade de conteúdo digital (Módulo 6, unidade 6.5).",
        "Noções de inclusão digital: conexão, equipamento e habilidade do usuário.",
        "Leitura de gráficos de barras e de linhas e conhecimento de seus elementos textuais."
      ],
      "objetivosObservaveis": [
        "Listar os requisitos de acessibilidade aplicáveis a uma visualização de dados.",
        "Descrever o que deve conter um texto alternativo e no que difere de uma tabela equivalente.",
        "Redigir texto alternativo que informe quem, o quê, quando, unidade e mensagem principal.",
        "Planejar bateria de testes de acessibilidade com escala de cinza, leitor de tela e navegação por teclado."
      ],
      "competencias": [
        "Produzir gráficos que preservem o conteúdo para leitor de tela e para quem não distingue matizes.",
        "Relacionar cada barreira perceptual a uma medida técnica verificável de correção.",
        "Planejar e aplicar bateria de testes que combine verificação automática, revisão manual e teste com usuário."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u1-t2-s1 (Cores, contraste e hierarquia visual) — a redundância de canais é o primeiro degrau da acessibilidade de cor.",
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital) — dá o marco normativo e as práticas técnicas de conteúdo acessível.",
        "m6-u5-t2-s1 (Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora) — conecta a acessibilidade do artefato ao alcance social do serviço."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens cobram os requisitos de acessibilidade de visualização e a função do texto alternativo e da tabela equivalente, com interface entre Governo Digital e visualização de dados. A classificação é qualitativa e reflete a centralidade do tema no programa, sem corresponder a frequência estatística medida em provas."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece que a informação de um gráfico deve existir em formato legível por tecnologia assistiva. Aprende que todo gráfico precisa de texto alternativo e de uma forma de acesso aos dados subjacentes, entende a diferença entre acessibilidade (propriedade do artefato) e inclusão digital (resultado social de alcance) e identifica a barra que revela a dependência de cor.",
      "intermediario": "Nível intermediário: o aluno descreve o conjunto de requisitos de acessibilidade de uma visualização: texto alternativo com quem, o quê, quando, unidade e mensagem principal; tabela equivalente com os dados; fonte legível sem rotação de rótulos longos; contraste suficiente; navegação por teclado; e nenhuma animação obrigatória. Monta ainda o checklist de verificação correspondente.",
      "avancado": "Nível avançado: o aluno planeja a bateria de testes de acessibilidade, combinando conversão para escala de cinza, leitura com leitor de tela, percurso completo por teclado e revisão do texto alternativo frente à mensagem do gráfico. Interpreta o resultado do teste automatizado como indício parcial, sabedor de que ele não avalia clareza nem usabilidade real.",
      "especialista": "Nível especialista: o aluno audita um painel quanto à acessibilidade, verificando se a informação principal sobrevive a cada canal (visão, leitura de tela, teclado, impressão em cinza) e se o texto alternativo não se limita a descrever a forma. Elabora plano de correção por barreira, com responsável e prazo, e relaciona o resultado ao marco legal de acessibilidade de conteúdo digital."
    },
    "comparacoes": [
      {
        "tema": "Acessibilidade de visualização ou preferência estética",
        "a": {
          "rotulo": "Acessibilidade",
          "texto": "Condição de uso: a informação chega ao leitor por múltiplos caminhos — visão, leitor de tela, teclado, impressão em cinza — e não depende de um único sentido ou de uma única matiz."
        },
        "b": {
          "rotulo": "Estética",
          "texto": "Preferência de composição e de estilo, que pode variar entre autores e de público para público. Um painel elegante pode ser inacessível; um painel simples e legível pode ser visualmente austero."
        },
        "diferencaGabarito": "Estética é escolha, acessibilidade é condição. A prova costuma inverter os termos ao apresentar um gráfico 'bonito' como 'acessível': o critério de acessibilidade é a chegada da informação a quem usa tecnologia assistiva, não o prazer visual de quem enxerga bem."
      },
      {
        "tema": "Texto alternativo ou tabela equivalente",
        "a": {
          "rotulo": "Texto alternativo",
          "texto": "Descrição em texto da imagem: quem é o alvo, o que foi medido, em que período, em que unidade e qual é a mensagem principal, permitindo que o leitor compreenda o gráfico sem vê-lo."
        },
        "b": {
          "rotulo": "Tabela equivalente",
          "texto": "Conjunto dos dados subjacentes em formato tabular, que permite consultar valores exatos, reordenar a série e refazer cálculos que o desenho não suporta."
        },
        "diferencaGabarito": "O texto alternativo descreve; a tabela fornece. Um não substitui o outro: quem precisa saber o valor exato de um ponto consulta a tabela, e quem precisa da mensagem principal encontra a descrição. Oferecer só a tabela deixa de fora a leitura da tendência."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Se as cores do gráfico têm bom contraste, o gráfico é acessível.'",
        "porqueErrada": "O contraste resolve apenas a diferença de luminosidade entre elementos. Não garante texto alternativo, tabela de dados, legibilidade de fonte, navegação por teclado nem independência de animação: o leitor de tela continua sem descrição e a informação não chega a quem não distingue matizes.",
        "versaoCorreta": "Errado: contraste é só um dos requisitos. Acessibilidade exige redundância além da cor, texto alternativo, dados subjacentes disponíveis, fonte legível e ausência de dependência de animação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Acessibilidade é opcional em visualização, pois o leitor sempre pode pedir os dados a alguém do setor.'",
        "porqueErrada": "A visualização pública é o canal pelo qual o cidadão acessa a informação por si mesmo. Transferir ao servidor a tarefa de traduzir o gráfico devolve o gargalo ao mesmo público que a acessibilidade pretendia incluir.",
        "versaoCorreta": "Errado: em visualização pública, a acessibilidade é condição de uso do artefato, não cortesia adicional; o gráfico precisa ser operável e compreensível por qualquer usuário, inclusive por tecnologia assistiva."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um teste automatizado que retorna zero erros garante que o gráfico é acessível.'",
        "porqueErrada": "A verificação automática detecta parte das barreiras técnicas (rótulo ausente, contraste insuficiente, ordem de tabulação). Não avalia clareza do texto alternativo, coerência da mensagem nem usabilidade com leitor de tela e navegação por teclado, que são justamente os itens cobrados em prova.",
        "versaoCorreta": "Errado: o teste automatizado é indício, não prova. A avaliação completa combina verificação automática, revisão manual e teste com usuário em tecnologia assistiva."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acessibilidade de visualização: condição de que a informação chegue ao leitor por mais de um canal.",
        "Texto alternativo: descrição de quem, o quê, quando, unidade e mensagem principal.",
        "Tabela equivalente: dados subjacentes em formato tabular para consulta de valores exatos.",
        "Inclusão digital: alcance social do serviço, que depende de conexão, equipamento e habilidade.",
        "Bateria de testes: escala de cinza, leitor de tela e navegação por teclado, somados a verificação automática e teste com usuário."
      ],
      "regras": [
        "Todo gráfico deve ter descrição textual e acesso aos dados queuck ele representa.",
        "Nenhuma informação pode depender exclusivamente de matiz, de animação ou de interação com o mouse.",
        "Texto alternativo descreve a mensagem; tabela equivalente fornece os valores: são complementares.",
        "Rótulos longos não devem ser rotacionados: prefira barras horizontais para manter a leitura reta.",
        "A avaliação combina verificação automática, revisão manual e teste com usuário; o automatizado não fecha o laudo."
      ],
      "comparacoes": [
        "Acessibilidade é condição de uso do artefato; estética é preferência de composição, variável entre autores e públicos.",
        "Texto alternativo descreve o gráfico; tabela equivalente fornece os dados para consulta e recálculo."
      ],
      "fluxos": [
        "Publicar → anexar texto alternativo e tabela equivalente → verificar contraste e fonte → percorrer o gráfico só com teclado → converter para escala de cinza → testar com leitor de tela → corrigir as barreiras encontradas.",
        "Auditoria de painel: listar as mensagens principais → conferir se cada uma tem caminho textual → identificar Barreiras por canal (visão, tela, teclado, impressão) → registrar e corrigir."
      ],
      "excecoes": [
        "Imagem puramente decorativa, sem conteúdo informativo, pode receber descrição simplificada ou ser marcada como decorativa para o leitor de tela.",
        "Painéis dinâmicos podem concentrar a referência de fonte e nota técnica em rodapé, desde que a informação permaneça alcançável."
      ],
      "palavrasChave": [
        "acessibilidade",
        "texto alternativo",
        "tabela equivalente",
        "leitor de tela",
        "teclado",
        "inclusão digital",
        "escala de cinza",
        "redundância"
      ],
      "checklist": [
        "Todo gráfico tem texto alternativo com quem, o quê, quando, unidade e mensagem principal?",
        "Os dados subjacentes estão disponíveis em tabela equivalente?",
        "A distinção entre categorias sobrevive à conversão para escala de cinza?",
        "O gráfico pode ser percorrido e compreendido apenas com teclado?",
        "Nenhuma animação é obrigatória para a leitura da informação?",
        "Os rótulos são legíveis sem rotação e o contraste entre texto e fundo é suficiente?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um gráfico de barras usa vermelho para quedas e verde para altas, sem rótulos de texto nem qualquer outra sinalização. Como torná-lo acessível sem descaracterizar a visualização?",
        "dados": "Doze barras mensais; duas categorias sem rótulo textual (alta e queda); código exclusivamente cromático (verde e vermelho); nenhuma legenda, nenhuma forma diferente e nenhum valor exibido ao lado das marcas.",
        "conceitos": [
          "Redundância de sinalização além da cor",
          "Independência da percepção de matiz"
        ],
        "estrategia": "Manter as duas cores — elas aceleram a leitura — e acrescentar um segundo e um terceiro canal que carregam a mesma informação: rótulo de texto sobre cada barra, forma ou seta de sinal e, no texto alternativo, a explicitação do critério usado.",
        "execucao": [
          "1) Identificar o problema: a informação está codificada apenas em matiz, o que exclui quem não distingue verde de vermelho.",
          "2) Acrescentar rótulo de texto ('alta'/'queda') sobre cada marca, sem remover as cores.",
          "3) Diferenciar as categorias também por forma ou por padrão de preenchimento.",
          "4) Registrar no texto alternativo que o código cromático indica alta e queda, e em que unidade.",
          "5) Converter para escala de cinza e confirmar que as categorias continuam distinguíveis."
        ],
        "resultado": "Adicionar redundância: rótulo de texto ('alta'/'queda'), seta ou padrão de preenchimento distinto, além da cor; e descrever no texto alternativo o critério. Assim, quem não distingue as matizes lê a informação pela forma ou pelo rótulo.",
        "justificativa": "A acessibilidade não proíbe o uso de cor, e sim proíbe que a cor seja o único canal. Com rótulo e forma, o gráfico continua eficiente para quem distingue matizes e passa a ser legível para quem não distingue, além de sobreviver à impressão em preto e branco e à conversão para escala de cinza.",
        "errosFrequentes": [
          "Confundir acessibilidade com monocromia e remover as cores, perdendo a leitura rápida que elas proporcionavam.",
          "Acrescentar um texto alternativo genérico ('gráfico de barras'), que não informa o critério nem as magnitudes, e considerar o problema resolvido."
        ],
        "variacao": "Se o gráfico passar a mostrar 40 barras diárias em vez de 12 mensais, o rótulo textual individual torna-se inviável por excesso de elementos; nesse caso, a redundância deve vir de forma distinta por categoria e de uma tabela equivalente com os valores, mantendo o texto alternativo reservado à mensagem principal."
      },
      {
        "tipo": "aplicacao",
        "problema": "Redigir o texto alternativo do gráfico de linhas que compara os atendimentos mensais da Central 1 e da Central 2, de janeiro a junho de 2026.",
        "dados": "Gráfico de linhas com duas séries; eixo y de 0 a 4 mil atendimentos; período de janeiro a junho de 2026; Central 1 com ascensão ao longo do semestre e Central 2 estável; unidade: número de atendimentos.",
        "conceitos": [
          "Componentes mínimos do texto alternativo",
          "Mensagem principal como objeto da descrição"
        ],
        "estrategia": "Montar a descrição na ordem exigida — quem, o quê, quando, unidade, escala e mensagem principal — de modo que o leitor de tela compreenda a comparação sem precisar enxergar as linhas, e evitar descrição puramente visual (posições, ângulos).",
        "execucao": [
          "1) Identificar o quem: Central 1 e Central 2.",
          "2) Identificar o quê e a unidade: número de atendimentos mensais.",
          "3) Informar quando: de janeiro a junho de 2026.",
          "4) Informar a escala do eixo y: de 0 a 4 mil atendimentos.",
          "5) Registrar a mensagem principal: ascensão da Central 1 e estabilidade da Central 2.",
          "6) Encerrar com a disponibilidade da tabela equivalente para consulta dos valores."
        ],
        "resultado": "O texto alternativo acima já é adequado: identifica o quê (atendimentos), quem (Central 1 e 2), período (jan–jun/2026), unidade (atendimentos), escala e a mensagem principal (ascensão de uma, estabilidade da outra). Acessível é isso: compreensão sem depender da visão do gráfico.",
        "justificativa": "O gabarito cobre os seis elementos esperados em prova — quem, o quê, quando, unidade, escala e mensagem principal —, e termina apontando a tabela equivalente. Assim o leitor de tela obtém a comparação central do gráfico (uma série sobe, a outra se mantém) e ainda tem acesso aos valores exatos para verificação.",
        "errosFrequentes": [
          "Descrever a aparência ('duas linhas, uma subindo e outra reta') sem declarar unidades, período ou escala, o que impede a leitura de quem usa leitor de tela.",
          "Omitir a mensagem principal e limitar-se a enumerar as séries, entregando ao leitor a análise que o gráfico deveria fazer."
        ],
        "variacao": "Se a Central 2 também passar a crescer, ainda que apenas no último mês, o texto alternativo deve sinalizar a mudança de padrão ('estabilidade até maio e alta em junho') em vez de manter a formulação de estabilidade ao longo de todo o semestre."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se as cores têm bom contraste, o gráfico é acessível.' Avalie a afirmação e mostre por que a leitura ingênua erra o gabarito.",
        "dados": "Painel de vendas com seis séries coloridas, contraste entre texto e fundo verificado como suficiente, sem texto alternativo, sem tabela de dados, com rótulos de eixo em fonte pequena e sem previsão de movimento na animação de transição.",
        "conceitos": [
          "Contraste como requisito isolado",
          "Barreiras que o contraste não remove"
        ],
        "estrategia": "Separar o que o contraste resolve (a diferença de luminosidade) do que ele não resolve (ausência de descrição, de dados, de legibilidade e de independência de animação), mostrando que um painel pode passar no teste de contraste e ainda negar a informação.",
        "execucao": [
          "1) Confirmar o que a evidência sustenta: o contraste entre texto e fundo é suficiente.",
          "2) Verificar os demais requisitos: não há texto alternativo, nem tabela equivalente, nem fonte ampliada.",
          "3) Identificar a barreira operacional: a transição animada é o único momento em que a série recebe destaque.",
          "4) Concluir que contraste alto resolve luminosidade, e não dependência de matiz nem acesso por tecnologia assistiva."
        ],
        "resultado": "Errado. Contraste ajuda, mas acessibilidade exige mais: redundância além da cor, texto alternativo, dados subjacentes, legibilidade de fonte e ausência de dependência de animação. Contraste resolve luminosidade, não dependência de matiz.",
        "justificativa": "O erro da leitura ingênua é tratar um único requisito como se cobrisse o conjunto. O contraste torna o texto visível, mas o painel continua inacessível para quem usa leitor de tela, para quem precisa consultar valores e para quem não distingue matizes; a acessibilidade é uma conjunção de requisitos, não a soma de um.",
        "errosFrequentes": [
          "Declarar o gráfico acessível porque passou no verificador de contraste, sem verificar descrição textual e dados subjacentes.",
          "Inverter a lógica e concluir que o gráfico é inacessível apenas por não ter rótulo de dado, quando o que faltava era a descrição para leitor de tela."
        ],
        "variacao": "Se o mesmo painel for auditado por um usuário que navega apenas com teclado e leitor de tela, a constatação muda de 'falta contraste' para 'falta ordem de leitura e descrição': o próximo ciclo de correção deve agir sobre foco, rótulos associados e texto alternativo."
      }
    ]
  }
};
