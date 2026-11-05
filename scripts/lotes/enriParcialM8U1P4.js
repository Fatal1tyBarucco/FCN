const enriParcialM8U1P4 = {
  "m8-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A escolha da escala determina se o leitor enxerga variação absoluta ou relativa. Em escala linear, intervalos iguais representam diferenças iguais; na logarítmica, representam fatores iguais. Um eixo truncado em barras (não começando em zero) exagera diferenças e pode inverter a conclusão de uma questão de concurso. Saber detectar esses efeitos é indispensável para avaliar integridade gráfica.",
      "preRequisitos": ["Noção de eixos cartesianos e de origem (ponto zero)", "Noção de variação absoluta versus variação relativa", "Leitura de gráficos de barras e de linhas"],
      "objetivosObservaveis": ["Distinguir escala linear de escala logarítmica pelo comportamento dos intervalos", "Identificar eixo truncado e avaliar seu impacto na comparação de magnitudes", "Justificar a adoção de escala logarítmica ou de eixo cortado em um caso concreto"],
      "competencias": ["Leitura crítica de visualizações: avaliar se a escala serve ao dado e à pergunta", "Auditoria de gráficos: detectar bases cortadas e escalas inadequadas"],
      "dificuldade": "intermediario",
      "relacoes": ["m8-u1-t4-s1 (Matriz de decisão: comparar, evoluir, distribuir, relacionar, compor) — escolha do tipo de gráfico depende da escala adequada", "m8-u1-t3-s2 (Eixos, rótulos, unidades, legendas e fontes) — o eixo é um dos elementos de composição"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Integridade gráfica, incluindo eixo truncado e escala inadequada, integra o conteúdo programático de visualização de dados. Os itens pedem identificar qual escala distorce a proporção ou se um gráfico de barras com base não nula exagera diferenças. É tema classificado como de alta relevância no conteúdo programático porque combina interpretação numérica com leitura crítica visual. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Reconhece em um gráfico de barras se o eixo vertical começa em zero ou está truncado. Sabe que barras devem partir da base zero para que o comprimento seja proporcional ao valor. Identifica, de forma intuitiva, quando uma barra parece muito maior que outra sem que o dado justifique.",
      "intermediario": "Distingue escala linear (intervalos iguais = diferenças iguais) de escala logarítmica (intervalos iguais = fatores iguais, adequada a crescimento exponencial). Calcula a razão entre duas barras e detecta quando um eixo cortado infla artificialmente a diferença entre valores próximos.",
      "avancado": "Avalia o efeito da escolha da escala na conclusão de uma análise. Decide quando usar logarítmica para dados de grande amplitude e quando manter linear para variação absoluta. Sinaliza, em um eixo truncado de linhas, se a base cortada foi devidamente anotada.",
      "especialista": "Audita um painel completo quanto a manipulação de escala: verifica linha de base, tipo de escala e proporção entre barras. Emite laudo sobre se o gráfico distorce a razão visual e recomenda a correção (rebase em zero, rótulo de dado ou escala adequada)."
    },
    "comparacoes": [
      {
        "tema": "Escala linear x escala logarítmica",
        "a": {
          "rotulo": "Escala linear",
          "texto": "Intervalos iguais representam diferenças iguais (variação absoluta). Adequada a dados de pequena amplitude e a leituras diretas de magnitude."
        },
        "b": {
          "rotulo": "Escala logarítmica",
          "texto": "Intervalos iguais representam fatores iguais (variação relativa/percentual). Adequada a dados que abrangem várias ordens de magnitude, como crescimento exponencial."
        },
        "diferencaGabarito": "A linear exibe o acréscimo absoluto entre valores; a logarítmica exibe o fator multiplicativo. Escolher a errada inverte a percepção de qual variação é maior."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Truncar o eixo em gráfico de barras é sempre aceitável.",
        "porqueErrada": "Em barras, o comprimento é a variável visual; cortar a base quebra a proporcionalidade e faz diferenças pequenas parecerem grandes.",
        "versaoCorreta": "Barras devem começar em zero. Só em linhas, com valores altos e variação pequena, o truncamento é aceitável se a base cortada for sinalizada."
      },
      {
        "afirmacaoEquivocada": "Em escala logarítmica, subidas de mesma altura indicam o mesmo acréscimo absoluto de valores.",
        "porqueErrada": "Confunde escala log com linear. Na logarítmica, altura igual significa mesmo fator multiplicativo (mesmo percentual aproximado), não mesmo acréscimo absoluto.",
        "versaoCorreta": "Na escala logarítmica, subidas de mesma altura indicam mesmo fator multiplicativo. Acréscimo absoluto igual se lê em escala linear."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["escala linear", "escala logarítmica", "eixo truncado", "linha de base", "variação absoluta", "variação relativa"],
      "regras": ["Barras de magnitude devem iniciar em zero.", "Escala linear mostra variação absoluta; logarítmica mostra variação relativa."],
      "comparacoes": ["Linear vs logarítmica: linear compara diferenças absolutas, logarítmica compara fatores multiplicativos."],
      "fluxos": ["Detectar eixo truncado → verificar se barra começa em zero → se não, a razão visual está distorcida."],
      "excecoes": ["Em séries temporais de valores altos com variação pequena, truncar o eixo de linhas é aceitável se a base cortada for anotada."],
      "palavrasChave": ["escala linear", "escala logarítmica", "eixo truncado", "linha de base", "fator multiplicativo", "proporção"],
      "checklist": ["O eixo de barras começa em zero?", "A escala é linear ou logarítmica?", "A base cortada, se houver, está anotada?", "A razão visual condiz com a razão numérica?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Série: 10, 30, 100, 300, 1.000. Por que a escala logarítmica é mais informativa que a linear?",
        "dados": "Valores: 10, 30, 100, 300 e 1.000 (duas ordens de grandeza). Eixo linear com ticks de 100 em 100.",
        "conceitos": ["escala linear", "escala logarítmica", "ordem de grandeza"],
        "estrategia": "Plotar a série em linear e em log. Comparar a distância visual entre pontos consecutivos: em linear, os três primeiros ficam espremidos perto de zero; em log, cada multiplicação gera distância comparável.",
        "execucao": ["Anotar os cinco valores da série.", "Desenhar eixo linear com espaçamento de 100: 10, 30 e 100 ficam próximos do zero.", "Desenhar eixo logarítmico: 10, 30, 100, 300, 1.000 ocupam espaços proporcionais aos fatores.", "Comparar: em log, o salto de 10 para 1.000 aparece como distância comparável aos demais passos."],
        "resultado": "Em linear, 10, 30 e 100 parecem 'planos' e 1.000 domina o gráfico; em log, cada passo aparece com distância comparável, revelando a taxa de crescimento.",
        "justificativa": "O resultado é correto porque a escala logarítmica comprime grandes valores e espaça pequenos na mesma proporção, de modo que diferenças de ordem de magnitude ficam visíveis sem esmagar os pontos iniciais.",
        "errosFrequentes": ["Achar que em log a distância representa acréscimo absoluto, não fator.", "Usar linear para séries com duas ou mais ordens de grandeza, esmagando os valores menores."],
        "variacao": "Série: 1, 5, 25, 125, 625 (fator 5 constante). Em linear, os quatro primeiros se acumulam perto de zero; em log, aparecem igualmente espaçados, confirmando o fator multiplicativo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Gráfico de barras 'Tempo de resposta (min)': valores 70 e 80, eixo de 60 a 90. Corrigir a leitura enganosa.",
        "dados": "Valores 70 e 80 minutos; eixo iniciado em 60 (não em zero). Barras de altura 10 e 20 unidades visuais.",
        "conceitos": ["eixo truncado", "linha de base", "razão visual"],
        "estrategia": "Reiniciar o eixo em zero para restaurar a razão visual (80/70 = 1,14). Se o objetivo é mostrar o delta de 10 min, exibir rótulo de dado e delta, não alterar a base.",
        "execucao": ["Ler os dois valores: 70 e 80.", "Identificar que o eixo começa em 60, cortando a base.", "Recriar o gráfico com base em zero: as barras terão alturas proporcionais a 70 e 80.", "Conferir que 80/70 ≈ 1,14, ou seja, o segundo é apenas 14% maior, não o dobro."],
        "resultado": "Com base em 60, as barras parecem 10 e 20 (segundo parece dobro do primeiro). Com base em 0, a razão volta a ser 1,14, revelando que a diferença real é pequena (+10 min).",
        "justificativa": "A correção está certa porque a altura da barra deve ser proporcional ao valor; cortar a base em 60 faz a diferença de 10 minutos parecer 100% maior, distorcendo a razão visual e induzindo a conclusão errada.",
        "errosFrequentes": ["Achar que a barra de 80 é o dobro da de 70 porque o eixo começa em 60.", "Cortar a base sem anotar, fazendo o leitor supor que começa em zero."],
        "variacao": "Valores 950 e 960 com eixo de 900 a 1000: as barras parecem iguais em altura real (50 vs 60) mas visualmente 960 parece muito maior. Correção: base em zero ou rótulo dos valores."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Em escala logarítmica, subidas de mesma altura indicam o mesmo acréscimo absoluto de valores.'",
        "dados": "Escala logarítmica com subidas de mesma altura entre 10→100 e 100→1.000.",
        "conceitos": ["escala logarítmica", "fator multiplicativo", "acréscimo absoluto"],
        "estrategia": "Comparar as duas subidas: 10 para 100 (fator 10, acréscimo 90) e 100 para 1.000 (fator 10, acréscimo 900). Mesma altura visual, acréscimos absolutos diferentes.",
        "execucao": ["Identificar que a escala é logarítmica (espaçamento por fator, não por valor).", "Ler os dois pares de pontos: 10→100 e 100→1.000.", "Calcular acréscimo absoluto: 90 e 900 (diferentes).", "Concluir que mesma altura = mesmo fator, não mesmo acréscimo absoluto."],
        "resultado": "Errado: em escala logarítmica, altura igual significa mesmo fator multiplicativo (mesmo percentual aproximado), nunca mesmo acréscimo absoluto; acréscimo absoluto igual se lê em escala linear.",
        "justificativa": "A leitura ingênua falha porque transfere a regra da escala linear (distância = diferença absoluta) para a logarítmica, onde distância = razão entre valores; por isso a afirmação é falsa.",
        "errosFrequentes": ["Interpretar gráfico log como se fosse linear e afirmar 'a diferença foi a mesma'.", "Assumir que qualquer subida visual igual representa acréscimo absoluto idêntico."],
        "variacao": "Afirmação: 'Em escala linear, subidas de mesma altura indicam o mesmo fator multiplicativo.' Errado: em linear, mesma altura = mesmo acréscimo absoluto; o fator depende do valor de partida."
      }
    ]
  },
  "m8-u1-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher o tipo errado de gráfico muda a conclusão da análise. A matriz de decisão vincula cada tarefa analítica (comparar, evoluir, distribuir, relacionar, compor) ao tipo de gráfico adequado, com base no tipo de dado (categórico, numérico, temporal). Saber recusar gráficos inadequados — como pizza com muitas categorias ou 3D sem terceira variável real — é uma habilidade cobrada em concursos de TI.",
      "preRequisitos": ["Noção de tipos de dado (categórico, numérico, temporal)", "Conhecimento dos principais tipos de gráfico (barras, linhas, histograma, dispersão, pizza)", "Objetivo analítico por trás de cada questão"],
      "objetivosObservaveis": ["Mapear cada objetivo analítico ao tipo de gráfico capaz de executá-lo", "Justificar a escolha do gráfico com base no tipo de dado e na tarefa", "Recusar gráficos inadequados para o objetivo proposto"],
      "competencias": ["Escolha de visualização adequada à pergunta analítica", "Análise crítica da adequação entre dado, gráfico e objetivo"],
      "dificuldade": "intermediario",
      "relacoes": ["m8-u1-t3-s3 (Escalas linear, logarítmica e eixos truncados) — a escala adequada depende do tipo de gráfico escolhido", "m8-u2-t3-s1 (Barras e colunas: ordenação, comparação e linha de base) — detalhamento do tipo de gráfico de barras"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Escolha de gráfico conforme o objetivo integra o conteúdo programático de visualização de dados. Questões apresentam um cenário e pedem o gráfico mais adequado ou o que deve ser recusado. É tema classificado como de alta relevância no conteúdo programático porque testa leitura crítica e não decoração de tela. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Associa cada objetivo analítico (comparar, evoluir, distribuir, relacionar, compor) a um tipo de gráfico principal da matriz. Reconhece quando um gráfico é claramente inadequado, como pizza com muitas fatias ou gráfico 3D decorativo.",
      "intermediario": "Mapeia o tipo de dado (categórico, numérico, temporal) ao tipo de gráfico e justifica a escolha. Compara barras versus linhas, histograma versus barras e dispersão versus pizza, explicando o trade-off de cada alternativa.",
      "avancado": "Avalia alternativas e trade-offs para uma mesma tarefa, por exemplo quando usar barra empilhada versus pequenos múltiplos. Decide se um gráfico proposto serve ou deve ser recusado com fundamento no tipo de dado e no objetivo.",
      "especialista": "Audita um painel inteiro quanto à adequação de cada gráfico à sua tarefa analítica. Emite recomendação de substituição de gráficos inadequados e de padronização da matriz de decisão no time."
    },
    "comparacoes": [
      {
        "tema": "Barras x linhas",
        "a": {
          "rotulo": "Gráfico de barras",
          "texto": "Compara categorias discretas. Ideal para mostrar magnitudes entre grupos sem ordem natural."
        },
        "b": {
          "rotulo": "Gráfico de linhas",
          "texto": "Mostra evolução temporal ou contínua. Implica continuidade entre pontos; exige ordem natural no eixo X."
        },
        "diferencaGabarito": "Barras servem para comparar categorias isoladas; linhas servem para mostrar trajetória ao longo do tempo. Usar linha para categorias sem ordem sugere continuidade inexistente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pizza é sempre adequada para mostrar composição.",
        "porqueErrada": "Com muitas categorias ou valores próximos, as fatias ficam ilegíveis (ângulos e áreas quase iguais). Barras ordenadas são mais claras.",
        "versaoCorreta": "Usar pizza apenas para poucas categorias com diferenças visíveis; para muitas categorias, preferir barras ordenadas ou tabela."
      },
      {
        "afirmacaoEquivocada": "Gráfico de dispersão prova causalidade entre duas variáveis.",
        "porqueErrada": "Dispersão mostra associação/correlação, não causalidade. Duas variáveis podem se mover juntas por um terceiro fator ou por acaso.",
        "versaoCorreta": "Dispersão indica correlação; causalidade exige evidência além do gráfico (controle de variáveis, delineamento, teoria)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["matriz de decisão", "comparar", "evoluir", "distribuir", "relacionar", "compor"],
      "regras": ["Cada tarefa analítica corresponde a um tipo de gráfico principal da matriz.", "Evitar gráficos de pizza com muitas categorias e gráficos 3D sem terceira variável real."],
      "comparacoes": ["Barras comparam categorias; linhas mostram evolução temporal."],
      "fluxos": ["Ler objetivo da pergunta → identificar tipo de dado → escolher gráfico da matriz → verificar se não é inadequado."],
      "excecoes": ["Pizza pode ser aceitável com poucas categorias (2 a 4) e diferenças claras entre as fatias."],
      "palavrasChave": ["matriz de decisão", "barras", "linhas", "histograma", "dispersão", "composição", "causalidade"],
      "checklist": ["O objetivo da análise está claro?", "O tipo de dado é categórico, numérico ou temporal?", "O gráfico escolhido corresponde à tarefa?", "Gráficos inadequados (pizza com muitas fatias, 3D) foram recusados?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Decidir gráficos: (a) reclamações por tipo; (b) série diária de chamados em 90 dias; (c) idade de 1.000 servidores; (d) renda x escolaridade.",
        "dados": "Quatro tarefas: contagem categórica (reclamações), série temporal (90 dias), distribuição numérica (idade de 1.000 servidores) e relação entre duas variáveis quantitativas (renda e escolaridade).",
        "conceitos": ["matriz de decisão", "tipo de dado", "tarefa analítica"],
        "estrategia": "Mapear cada item da pergunta ao tipo de gráfico: barras para contagem categórica, linhas para série temporal, histograma para distribuição, dispersão para relação de duas variáveis quantitativas.",
        "execucao": ["Ler cada alínea (a) a (d) e identificar o objetivo analítico.", "Classificar o tipo de dado envolvido em cada caso.", "Aplicar a matriz: barras, linhas, histograma, dispersão.", "Verificar que cada escolha executa a tarefa da pergunta."],
        "resultado": "A escolha do gráfico segue o tipo de dado de cada item: barras para a contagem categórica, ordenadas de forma decrescente; linhas para a evolução diária; histograma para a distribuição; e dispersão para a relação entre duas variáveis. quantitativas).",
        "justificativa": "Cada escolha é correta porque o tipo de gráfico corresponde à tarefa analítica: comparar categorias, mostrar evolução, ver distribuição e avaliar relação entre duas variáveis quantitativas.",
        "errosFrequentes": ["Usar linhas para categorias sem ordem (sugere continuidade inexistente).", "Usar pizza para muitas categorias ou valores próximos (ilegível)."],
        "variacao": "Decidir gráfico para: (a) participação de mercado de 6 concorrentes; (b) evolução do faturamento mensal em 2 anos; (c) nota de 200 candidatos em uma prova; (d) peso x altura de 50 atletas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Equipe quer mostrar que 'o número de chamados oscilou pouco'. Série: 120, 132, 115, 140 (atendimentos/mês). Que cuidado de eixo evitar?",
        "dados": "Série mensal: 120, 132, 115, 140 atendimentos. Eixo truncado em 110 vs eixo em zero.",
        "conceitos": ["eixo truncado", "oscilação", "linha de base"],
        "estrategia": "Comparar a leitura com base em zero (variação máxima 140/115 ≈ 1,22, ou 22%) com a leitura com base em 110 (mesmas oscilações parecem explosivas). Evitar o eixo truncado que contradiz o enunciado de 'oscilou pouco'.",
        "execucao": ["Listar os quatro valores: 120, 132, 115, 140.", "Calcular a razão máxima com base em zero: 140/115 ≈ 1,22 (22% acima do menor).", "Simular eixo cortado em 110: as oscilações ficam amplificadas visualmente.", "Concluir que o eixo deve começar em zero para não distorcer a oscilação moderada."],
        "resultado": "Com base em 0, a variação máxima é de 140/115 ≈ 1,22 (22% acima do menor), mostrando oscilação moderada. Cortar a base em 110 faria as mesmas oscilações parecerem explosivas — distorção a favor da tese.",
        "justificativa": "A correção está correta porque o eixo de magnitude em zero preserva a proporção real dos valores; cortar a base exagera variações pequenas e leva o leitor a concluir que a oscilação é grande quando é moderada.",
        "errosFrequentes": ["Cortar o eixo para realçar oscilações que, na verdade, são pequenas.", "Usar base não zero sem anotar, induzindo leitura exagerada."],
        "variacao": "Série: 980, 1010, 995, 1005 (atendimentos/mês). Com base em 0, variação máxima 1010/980 ≈ 1,03 (3%). Com base em 970, parece explosiva. Cuidado: evitar eixo truncado que amplifique variações de 3%."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Gráfico de linhas é adequado para comparar cinco regiões do país sem ordem natural.'",
        "dados": "Cinco regiões sem ordem natural (ex.: Norte, Nordeste, Sudeste, Sul, Centro-Oeste).",
        "conceitos": ["gráfico de linhas", "continuidade", "categoria sem ordem"],
        "estrategia": "Avaliar se há ordem natural entre as regiões (não há). Linhas implicam continuidade e trajetória; para categorias sem ordem, usar barras agrupadas ou pequenos múltiplos. Se o objetivo for comparar magnitudes, ordenar as barras resolve melhor.",
        "execucao": ["Identificar que as regiões são categorias sem ordem natural.", "Reconhecer que linhas sugerem continuidade e tendência onde só existem categorias.", "Escolher barras agrupadas ou pequenos múltiplos para comparação de magnitudes.", "Ordenar as barras se a intenção for comparar valores."],
        "resultado": "Errado, a menos que haja ordem natural entre as regiões (não há). Linhas implicam continuidade e trajetória; para categorias sem ordem, barras agrupadas ou pequenos múltiplos. Se a intenção for comparar magnitudes, ordenar as barras resolve melhor.",
        "justificativa": "A afirmação é falsa porque o gráfico de linhas pressupõe uma ordem e continuidade no eixo X; regiões do país não têm ordem natural, então a linha sugeriria uma trajetória inexistente e induziria a leitura errada.",
        "errosFrequentes": ["Usar linha para comparar categorias sem ordem (implica continuidade falsa).", "Achar que qualquer gráfico serve para qualquer objetivo analítico."],
        "variacao": "Afirmação: 'Gráfico de barras é adequado para mostrar a evolução diária de chamados em 90 dias.' Errado: barras comparam categorias isoladas; para evolução temporal contínua, use linhas."
      }
    ]
  }
};
