const enriParcialM8U1P3 = {
  "m8-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Ruído visual e chartjunk não transmitem informação e ocupam o primeiro plano da leitura. A prova cobra a identificação do lixo gráfico e a detecção de distorções de escala e de linha de base: a auditoria separa o gráfico honesto do que induz a conclusão errada.",
      "preRequisitos": [
        "Noções de visualização de dados e de composição de um gráfico.",
        "Leitura de gráficos de barras e de linhas e de seus eixos.",
        "Noções de escala linear, de linha de base e de proporção visual."
      ],
      "objetivosObservaveis": [
        "Definir ruído visual e chartjunk e listar exemplos de cada um.",
        "Identificar elementos decorativos que competem com o dado.",
        "Avaliar a integridade gráfica quanto a base, à escala e à proporção.",
        "Propor a correção ou o redesenho que elimine a distorção."
      ],
      "competencias": [
        "Auditar um painel quanto ao ruído visual e ao chartjunk.",
        "Distinguir elemento decorativo de informativo pela função que exerce.",
        "Corrigir distorções de escala e de base em gráficos de magnitude."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u1-t3-s2 (Eixos, rótulos, unidades, legendas e fontes) — grade e rótulos são elementos a auditar.",
        "m8-u1-t3-s3 (Escalas linear, logarítmica e eixos truncados) — a base truncada viola a integridade gráfica.",
        "m8-u1-t2-s1 (Cores, contraste e hierarquia visual) — sombras e gradientes são ruído sem informação.",
        "m8-u1-t4-s1 (Matriz de decisão: comparar, evoluir, distribuir, relacionar, compor) — a forma inadequada à pergunta também é ruído."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de prova pedem identificar chartjunk em figuras descritas e detectar distorções de escala em gráficos. A classificação é qualitativa, apoia-se na centralidade da auditoria visual no programa e não corresponde a frequência estatística medida em provas."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece elementos decorativos inúteis, como sombra, gradiente, moldura, ícone e grade pesada, e explica que removê-los não altera dado algum. Distingue enfeite de informação pelo efeito sobre a leitura.",
      "intermediario": "Nível intermediário: o aluno avalia a integridade gráfica. Verifica se as barras partem do zero, se a escala é proporcional e se o comprimento lido corresponde ao valor; distingue ruído visual de chartjunk, que disputa atenção com o dado.",
      "avancado": "Nível avançado: o aluno corrige e redesenha. Converte a razão visual em razão numérica para provar a distorção, reinicia o eixo em zero, substitui a grade por uma discreta e remove a profundidade.",
      "especialista": "Nível especialista: o aluno audita um painel e emite laudo de limpeza visual: inventaria os elementos, separa os informativos dos decorativos, verifica a integridade de cada figura e prioriza as correções pelo impacto sobre a decisão. Registra o que foi removido e o que ficou."
    },
    "comparacoes": [
      {
        "tema": "Decoração x informação",
        "a": {
          "rotulo": "Decoração",
          "texto": "Elemento que ocupa espaço visual sem codificar dado: sombra, gradiente, moldura, ícone, grade ornamental. Cria aparência de riqueza, mas o leitor não extrai informação."
        },
        "b": {
          "rotulo": "Informação",
          "texto": "Elemento que codifica dado ou contexto: marcas, rótulos, eixos com unidade, legenda, fonte. Cada um responde a uma pergunta do leitor."
        },
        "diferencaGabarito": "A decoração aumenta a carga visual sem aumentar o conteúdo; a informação aumenta o que o leitor pode concluir. Remover decoração não altera a leitura; retirar um elemento informativo a empobrece."
      },
      {
        "tema": "Gráfico tridimensional x gráfico plano",
        "a": {
          "rotulo": "Tridimensional",
          "texto": "Desenho com profundidade e perspectiva. Oculta marcas umas atrás das outras, distorce o comprimento lido e exige um ajuste perceptual desnecessário."
        },
        "b": {
          "rotulo": "Plano",
          "texto": "Desenho em duas dimensões, em que o comprimento da marca é proporcional ao valor e todas as marcas permanecem visíveis ao mesmo tempo."
        },
        "diferencaGabarito": "O desenho plano é proporcional e legível; o tridimensional introduz distorção de altura e oclusão. Só há justificativa para a terceira dimensão quando existe uma terceira grandeza real codificada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Os efeitos tridimensionais melhoram a visualização, porque mostram mais dimensões.'",
        "porqueErrada": "O número de dimensões da cena não é o número de informações. Em dados bidimensionais, a profundidade é perspectiva: distorce as alturas, oculta barras e transfere ao leitor um ajuste desnecessário.",
        "versaoCorreta": "Errado: desenhe em duas dimensões; a terceira dimensão só se justifica com uma terceira grandeza real codificada."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Quanto mais elementos o painel tiver, mais credibilidade ele transmite.'",
        "porqueErrada": "Cada elemento adicional consome atenção sem acrescentar dado. Com ruído acumulado, o leitor demora a localizar a informação principal e acaba por ler primeiro o elemento mais decorativo, e não o mais importante.",
        "versaoCorreta": "Errado: a credibilidade vem da rastreabilidade dos dados e da clareza, não da quantidade de elementos."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Uma grade forte ajuda a leitura, porque mostra os valores com precisão.'",
        "porqueErrada": "A grade é elemento de fundo: quanto mais forte e densa, mais compete com as marcas. O ganho de precisão é pequeno e o custo de atenção é alto, porque o olho para na grade antes do dado.",
        "versaoCorreta": "Errado: use grade discreta, com poucas linhas de referência, para que os valores fiquem em primeiro plano."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Ruído visual: elementos que não informam e competem com a leitura do dado.",
        "Chartjunk: lixo gráfico que disputa atenção com a informação principal.",
        "Integridade gráfica: fidelidade da representação, com proporção, base e escala adequadas.",
        "Limpeza visual: remover o não essencial, destacar o dado e manter a grade discreta."
      ],
      "regras": [
        "Barras de magnitude partem do zero: o comprimento deve ser proporcional ao valor.",
        "Remova o que não codifica dado; o painel não ganha credibilidade com adornos.",
        "Anotação que destaca um achado é informação; anotação decorativa é ruído."
      ],
      "comparacoes": [
        "Decoração ocupa o plano visual sem acrescentar conteúdo; informação permite concluir."
      ],
      "fluxos": [
        "Inventariar elementos → separar decorativos de informativos → verificar base e escala → remover o que compete → retestar."
      ],
      "excecoes": [
        "O eixo de magnitude só pode ser truncado com aviso explícito e valores rotulados; a exceção não autoriza distorção."
      ],
      "palavrasChave": [
        "ruído visual",
        "chartjunk",
        "integridade gráfica",
        "limpeza visual",
        "proporção",
        "linha de base"
      ],
      "checklist": [
        "A barra parte do zero, de modo que o comprimento represente o valor?",
        "A razão visual entre as marcas coincide com a razão numérica?",
        "Cada elemento do painel codifica alguma informação?",
        "Grade, sombras e molduras permanecem em segundo plano?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar três elementos de chartjunk em um painel e justificar a remoção de cada um.",
        "dados": "Painel com grade a cada 10 unidades, sombra sob cada barra e moldura tripla; 24 barras entre 40 e 90; título, eixos e rótulos presentes.",
        "conceitos": [
          "Chartjunk como lixo gráfico",
          "Separação entre elemento informativo e elemento decorativo"
        ],
        "estrategia": "Percorrer o painel contando o que o leitor pode extrair de cada elemento. Os três citados não acrescentam nada ao dado: competem com as marcas, alteram a percepção do contorno ou emolduram a área. Como título, eixos e rótulos já estão presentes, a limpeza não retira informação.",
        "execucao": [
          "1) Listar os elementos do painel: grade, sombra, moldura, barras, eixos, título e rótulos.",
          "2) Verificar o que cada um comunica ao leitor.",
          "3) Classificar grade densa, sombra e moldura tripla como chartjunk."
        ],
        "resultado": "Grade densa, sombra e moldura tripla: os três competem com as barras e nenhum deles codifica dado. Removê-los preserva integralmente a leitura dos valores e reduz o esforço de quem lê o painel.",
        "justificativa": "O critério de limpeza visual é funcional: um elemento permanece quando responde a uma pergunta do leitor. Grade, sombra e moldura não respondem a nenhuma, e a sombra altera a percepção do contorno. A remoção não altera dado algum, apenas libera atenção para o dado.",
        "errosFrequentes": [
          "Manter a sombra por ser sutil, sem perceber que ela altera a percepção do contorno e simula relevo onde não há dado.",
          "Considerar a moldura útil por demarcar a área, quando título e grade discreta já delimitam o suficiente."
        ],
        "variacao": "Se o painel ganhar anotação que aponte o maior valor do período, ela não é chartjunk: destaca um achado, ao contrário do adorno que só ocupa espaço."
      },
      {
        "tipo": "aplicacao",
        "problema": "Duas barras comparam despesas de R$ 1.200 mil e R$ 1.320 mil, com o eixo vertical iniciado em R$ 1.000 mil. Qual é a distorção e qual é a correção?",
        "dados": "Duas categorias de despesa, R$ 1.200 mil e R$ 1.320 mil no trimestre; eixo de magnitude com base em R$ 1.000 mil e topo em R$ 1.400 mil; barras sem rótulo de valor.",
        "conceitos": [
          "Integridade gráfica e linha de base",
          "Razão visual confrontada com a razão numérica"
        ],
        "estrategia": "Calcular a razão visual e a razão numérica para medir a distorção. Com a base em 1.000, as barras medem 200 e 320; a segunda aparenta 60% maior. O cálculo real, 1.320 por 1.200, resulta em 1,10, ou seja, 10% maior.",
        "execucao": [
          "1) Medir as alturas visuais a partir da base em 1.000: 200 e 320.",
          "2) Calcular a razão visual: 320 sobre 200 é 1,60, ou 60% maior.",
          "3) Calcular a razão numérica: 1.320 sobre 1.200 é 1,10, ou 10% maior."
        ],
        "resultado": "Com base em 1.000, as barras medem 200 e 320 e a segunda parece 60% maior; na verdade, 1.320 contra 1.200 significa 10% maior. A correção é iniciar o eixo de magnitude em zero; havendo motivo legítimo para o corte, ele precisa ser sinalizado e os valores exibidos.",
        "justificativa": "A distorção fica demonstrada pela diferença entre as razões: 1,60 no desenho contra 1,10 nos dados. Como a comparação se faz pelo comprimento da barra, cortar a base quebra a proporcionalidade e transfere ao leitor uma conclusão que os números não sustentam.",
        "errosFrequentes": [
          "Aceitar a leitura visual de 60% e não recalcular a razão a partir dos valores, que é o que revela o erro.",
          "Cortar o eixo para destacar a diferença sem avisar, deixando o leitor supor que a base está em zero."
        ],
        "variacao": "Se os mesmos valores forem exibidos em série temporal mensal, o corte deixa de ser enganoso, desde que a base seja sinalizada, porque a leitura passa a ser de variação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Eixo truncado é sempre proibido em qualquer gráfico.' Avalie a afirmação.",
        "dados": "Painel A: barras de R$ 4,2 milhões e R$ 4,6 milhões com eixo de 4 a 5 milhões. Painel B: série mensal entre R$ 980 mil e R$ 1.020 mil, com eixo de 950 mil a 1.050 mil e aviso de base no rodapé.",
        "conceitos": [
          "Integridade gráfica conforme o tipo de marca",
          "Condição de sinalização da base cortada"
        ],
        "estrategia": "Separar os dois painéis pelo tipo de comparação. Nas barras, o comprimento codifica a magnitude e o corte rompe a proporcionalidade. Na série temporal, lê-se a variação, e o corte, sinalizado, amplia uma variação pequena em valores altos.",
        "execucao": [
          "1) Identificar o tipo de marca de cada painel: barras no primeiro, linhas no segundo.",
          "2) No painel A, calcular a razão visual: 0,6 sobre 0,2 é o triplo.",
          "3) Calcular a razão real: 4,6 sobre 4,2 é 1,095, ou 9,5% maior."
        ],
        "resultado": "Exagero. O que é enganoso é truncar o eixo em barras, em que a comparação é de comprimento: 4,2 e 4,6 milhões com base em 4 milhões aparecem como o triplo, quando a diferença real é de 9,5%. Em séries temporais de valores altos e variação pequena, truncar é aceitável se a base for sinalizada.",
        "justificativa": "A leitura ingênua generaliza uma regra que vale para um tipo de marca e a aplica a todos. O critério correto é a tarefa: comparar magnitudes exige comprimento proporcional e base zero, enquanto acompanhar variação tolera o corte, desde que o leitor saiba dele. O problema é a distorção silenciosa, não o corte em si.",
        "errosFrequentes": [
          "Declarar o corte sempre errado e condenar também o painel de série temporal, que é adequado e sinalizado.",
          "Declarar o corte sempre aceitável, ignorando que em barras ele dobra ou triplica a diferença aparente."
        ],
        "variacao": "Se o painel B for convertido em barras com os mesmos valores e corte, o que era adequado passa a ser enganoso: a troca do tipo de marca altera a resposta sobre o truncamento."
      }
    ]
  },
  "m8-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Um gráfico sem unidade, sem rótulo ou sem fonte é ambíguo: o leitor não sabe o que mede, em que período ou de onde vieram os dados. A prova cobra a função de cada elemento e a autossuficiência do gráfico, condição de ele ser compreendido sem ajuda externa.",
      "preRequisitos": [
        "Noções de visualização de dados e de composição de gráficos.",
        "Leitura de gráficos com eixos, legendas e rótulos.",
        "Noções de unidade de medida, de período de referência e de procedência."
      ],
      "objetivosObservaveis": [
        "Identificar a função de eixo, rótulo de dado, unidade, legenda e fonte.",
        "Avaliar se um gráfico é autossuficiente.",
        "Diagnosticar ambiguidades pela ausência de unidade, rótulo ou fonte.",
        "Reescrever título e rótulos para que anunciem a mensagem."
      ],
      "competencias": [
        "Auditar a composição de um gráfico e listar elementos ausentes ou inadequados.",
        "Diagnosticar ambiguidade de leitura e indicar o elemento que a resolve.",
        "Redigir título, rótulos e fonte que tornem o gráfico autossuficiente."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u1-t3-s1 (Ruído visual, chartjunk e integridade gráfica) — a limpeza preserva o que informa.",
        "m8-u1-t3-s3 (Escalas linear, logarítmica e eixos truncados) — o rótulo do eixo declara a base.",
        "m8-u1-t2-s2 (Acessibilidade em visualizações) — rótulo legível e redundância de canais.",
        "m8-u5-t3-s1 (Incerteza, limitações e transparência) — fonte e atualização sustentam a transparência."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de prova pedem identificar a função de eixos, rótulos, legendas e fontes, e apontar o que torna um gráfico autossuficiente. A classificação é qualitativa, apoia-se na centralidade do tema no programa e não corresponde a frequência estatística medida em provas."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece a ausência dos elementos essenciais. Verifica se o gráfico tem título, eixos com unidade, rótulos de dado, legenda quando há mais de uma série e fonte. Percebe que um número sem unidade não informa nada.",
      "intermediario": "Nível intermediário: o aluno descreve a função de cada elemento: o eixo identifica a grandeza e sua unidade, o rótulo de dado mostra o valor, a legenda identifica a série, a fonte indica origem e período. Distingue legenda de rótulo de eixo.",
      "avancado": "Nível avançado: o aluno avalia a composição de um gráfico real e decide entre legenda e rótulo direto, quando há poucas séries. Reescreve títulos genéricos em títulos que anunciam a mensagem e detecta série sem identificação.",
      "especialista": "Nível especialista: o aluno audita um painel quanto à completude: verifica se cada figura pode ser lida isoladamente, se fonte e data de atualização estão presentes, se rótulos longos foram resolvidos com barras horizontais e se nada depende de explicação verbal externa."
    },
    "comparacoes": [
      {
        "tema": "Legenda x rótulo de eixo",
        "a": {
          "rotulo": "Legenda",
          "texto": "Identifica as séries: associa cor, forma ou padrão a cada linha ou barra, permitindo saber a qual série cada marca pertence."
        },
        "b": {
          "rotulo": "Rótulo de eixo",
          "texto": "Identifica a grandeza e sua unidade: diz o que é medido e em que medida, ao longo de todo o eixo."
        },
        "diferencaGabarito": "São funções distintas: a legenda resolve a identidade da série, o rótulo de eixo resolve a grandeza e a unidade. Uma legenda no canto não informa o que o eixo mede, e um rótulo de eixo não identifica a série de cada linha."
      },
      {
        "tema": "Rótulo de dado x legenda",
        "a": {
          "rotulo": "Rótulo de dado",
          "texto": "Exibe o valor de uma marca, próxima dela. Resolve quanto vale este ponto, sem exigir que o leitor estime no eixo."
        },
        "b": {
          "rotulo": "Legenda",
          "texto": "Identifica o conjunto de séries, uma entrada por série. Resolve a qual série pertence esta marca."
        },
        "diferencaGabarito": "O rótulo de dado é quantitativo e pontual; a legenda é categórica e estrutural. Com poucas marcas, rótulos diretos dispensam a legenda; com muitas séries, os rótulos poluem o desenho e a legenda organiza a leitura."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'A legenda no canto superior resolve a ausência de rótulo de eixo.'",
        "porqueErrada": "A legenda identifica séries; o rótulo de eixo identifica a grandeza e sua unidade. Uma linha com legenda e sem unidade continua ambígua, porque subiu 30% não informa 30% de quê nem em que medida.",
        "versaoCorreta": "Errado: use legenda e rótulo de eixo, porque identificam coisas diferentes, série e grandeza medida."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um gráfico sem fonte é aceitável, desde que os dados estejam corretos.'",
        "porqueErrada": "Sem fonte não há verificabilidade: o leitor não sabe de onde vêm os dados, em que período foram coletados nem se foram revisados. A auditoria passa a depender de quem o produziu, e não do artefato.",
        "versaoCorreta": "Errado: inclua fonte, período de referência e data de atualização; sem isso, o dado não é datável nem auditável."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Rótulos longos e rotacionados são a melhor solução para nomes extensos de categoria.'",
        "porqueErrada": "O texto rotacionado obriga o leitor a percorrer o rótulo na diagonal, o que aumenta o esforço e o erro de leitura. A alternativa preserva a leitura reta, que permite comparação rápida entre categorias.",
        "versaoCorreta": "Errado: use barras horizontais para nomes longos, ou rótulos diretos na ponta das marcas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Eixo: identifica a grandeza medida e sua unidade.",
        "Rótulo de dado: mostra o valor de uma marca específica, próxima dela.",
        "Legenda: identifica cada série do gráfico por cor, forma ou padrão.",
        "Fonte: indica origem dos dados, período de referência e data de atualização."
      ],
      "regras": [
        "Todo gráfico autossuficiente tem título, eixos com unidade, rótulos quando são poucos, legenda ou rótulo direto e fonte.",
        "Legenda e rótulo de eixo não se substituem: identificam série e grandeza, respectivamente.",
        "Rótulo longo se resolve com barra horizontal, não com rotação."
      ],
      "comparacoes": [
        "Legenda identifica séries; rótulo de eixo identifica a grandeza e sua unidade; rótulo de dado mostra o valor."
      ],
      "fluxos": [
        "Ler o gráfico → conferir título, eixos, unidades, rótulos, legenda e fonte → listar o que falta → corrigir → reler."
      ],
      "excecoes": [
        "Em painel dinâmico, fonte e nota técnica podem ficar em rodapé, desde que permaneçam alcançáveis."
      ],
      "palavrasChave": [
        "eixo",
        "rótulo",
        "unidade",
        "legenda",
        "fonte",
        "autossuficiente"
      ],
      "checklist": [
        "O eixo declara a grandeza e a unidade?",
        "Cada série está identificada por legenda ou por rótulo direto?",
        "Os valores pontuais estão rotulados quando o número de pontos é pequeno?",
        "A fonte, o período de referência e a data de atualização estão presentes?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Reescrever o título genérico de um gráfico de receita para que anuncie a mensagem principal do painel.",
        "dados": "Gráfico de colunas com receita mensal de dois setores, de janeiro a junho de 2026; valores de 800 mil a 1.100 mil reais; eixo sem unidade; série única, sem legenda.",
        "conceitos": [
          "Título como elemento de composição",
          "Redução do salto cognitivo entre olhar e concluir"
        ],
        "estrategia": "Verificar o que o gráfico já comunica: com série única e eixo identificado, o título não precisa descrever a variável nem o período, que já estão no eixo. O título deve carregar a conclusão que a leitura sustenta, como a concentração da receita em dois setores.",
        "execucao": [
          "1) Identificar a mensagem que os dados sustentam: concentração da receita em dois setores.",
          "2) Conferir que a variável e o período já aparecem no eixo, com unidade.",
          "3) Escrever o título como afirmação com a mensagem e o período de referência.",
          "4) Reler o gráfico com o novo título e verificar se a leitura fica imediata."
        ],
        "resultado": "Receita cresceu 8% no primeiro trimestre de 2026, concentrada em dois setores: o título passa a anunciar a conclusão, enquanto a variável e a unidade permanecem no eixo, sem redundância.",
        "justificativa": "O título original apenas rotulava o tema e obrigava o leitor a derivar a conclusão do desenho. Como o eixo e os rótulos já informam o que foi medido, o título assume a função comunicativa, que é orientar a leitura e reduzir o trabalho de interpretação de quem recebe o painel.",
        "errosFrequentes": [
          "Manter o título temático e repetir no título a variável que já está no eixo, desperdiçando o espaço do elemento mais visível.",
          "Escrever um título que antecipa uma conclusão que os dados do período não sustentam."
        ],
        "variacao": "Se o painel passar a ter duas séries, receita e despesa, o título deve anunciar a relação entre elas, como o crescimento da despesa acima da receita, e a legenda passa a ser necessária."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um painel mostra duas linhas de série temporal, sem legenda e sem unidade no eixo. Qual é o diagnóstico e qual é a correção mínima?",
        "dados": "Gráfico de linhas com duas séries (volume de processos e fila de pendências), de janeiro a junho de 2026, eixo vertical de 0 a 600 sem unidade; as linhas se cruzam em abril; não há rótulo nas pontas.",
        "conceitos": [
          "Autossuficiência do gráfico",
          "Rótulo direto como alternativa à legenda"
        ],
        "estrategia": "Listar o que o leitor não consegue responder: a que série pertence cada linha e o que os números significam. Ambos decorrem da ausência de dois elementos, identificação de série e unidade da grandeza. A correção passa por rótulos diretos nas pontas das linhas, que dispensam a legenda distante, e pelo nome do eixo com unidade e período.",
        "execucao": [
          "1) Verificar a identificação das séries: sem legenda nem rótulo direto, não há como atribuí-las.",
          "2) Verificar a grandeza: o eixo mostra números, mas não diz o que é medido.",
          "3) Adotar rótulo direto ao fim de cada linha, que identifica a série sem exigir leitura de legenda.",
          "4) Nomear o eixo vertical com a unidade e o período de referência."
        ],
        "resultado": "Diagnóstico: leitura impossível de atribuir séries e de interpretar a grandeza. Correção mínima: rótulo direto ao fim de cada linha, nome do eixo com unidade e período de referência, além de fonte da base e data de atualização.",
        "justificativa": "Os dois problemas têm causas distintas e exigem elementos distintos. O rótulo direto resolve a identidade da série no ponto em que a ambiguidade aparece, e o nome do eixo com unidade resolve a grandeza. Com os dois, o painel deixa de depender de contexto externo.",
        "errosFrequentes": [
          "Acrescentar apenas uma legenda e concluir que o gráfico ficou legível, mantendo a grandeza sem unidade.",
          "Colocar a legenda no canto oposto ao gráfico, sobrepondo-a à área de plotagem em vez de aproximá-la das séries."
        ],
        "variacao": "Se as duas séries forem substituídas por dez, o rótulo direto deixa de ser viável e a legenda por série volta a ser a solução, mantida próxima da área de plotagem."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A legenda no canto superior resolve a ausência de rótulo de eixo.' Avalie a afirmação.",
        "dados": "Gráfico de linhas com duas séries e eixo vertical de 0 a 100, sem unidade; legenda no canto superior direito, com duas entradas em cores distintas; nenhuma anotação sobre o que os números representam.",
        "conceitos": [
          "Distinção entre função de legenda e função de rótulo de eixo",
          "Unidade como requisito de interpretação"
        ],
        "estrategia": "Conferir o que a legenda identifica: as duas séries, por cor. O que ela não faz é nomear a grandeza nem a unidade, de modo que a leitura de qualquer valor continua ambígua. O defeito não está na posição da legenda, e sim na função esperada.",
        "execucao": [
          "1) Identificar o que a legenda resolve: a identidade das duas séries.",
          "2) Identificar o que o rótulo de eixo resolveria: a grandeza e a unidade.",
          "3) Verificar a ambiguidade concreta: sem unidade, o valor 30 não pode ser interpretado."
        ],
        "resultado": "Errado. A legenda identifica séries; o rótulo de eixo identifica a grandeza e sua unidade. Funções diferentes: uma linha com legenda e sem unidade continua ambígua, pois subiu 30% não informa 30% de quê nem em que medida.",
        "justificativa": "A leitura ingênua trata a legenda como solução geral para a falta de identificação e conclui que o gráfico se explica. O erro é de função: a legenda cobre a identificação das séries, e o eixo vertical de magnitudes continua sem definição. Os dois elementos são necessários, e nenhum substitui o outro.",
        "errosFrequentes": [
          "Concluir que o gráfico está legível porque tem duas cores distintas, sem verificar que a grandeza permanece indefinida.",
          "Sugerir mover a legenda para o centro do gráfico, quando o problema não é de posição, e sim de função."
        ],
        "variacao": "Se o eixo receber o rótulo Processos pendentes com a unidade quantidade e a legenda for removida, o problema se inverte: passa a faltar a identificação das séries, o que confirma que são funções independentes."
      }
    ]
  }
};
