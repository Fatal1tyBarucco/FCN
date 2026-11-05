const enriParcialM5U2P2 = {
  "m5-u2-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O aprendizado por reforço é o paradigma em que um agente aprende sequências de decisão por tentativa e erro, recebendo recompensas em vez de rótulos, e é cobrado em concursos de TI quando o enunciado contrasta os três paradigmas de aprendizado. Distinguir reforço de supervisionado (rótulo por exemplo) e não supervisionado (sem sinal de tarefa) é ponto de gabarito, assim como o dilema exploração versus explotação. Em sistemas de decisão sequencial públicos, o sinal atrasado da recompensa e o alinhamento defeituoso da métrica são riscos centrais que o servidor público deve reconhecer antes de implantar automação sem supervisão humana.",
      "preRequisitos": [
        "Conceitos de modelo, parâmetro e inferência",
        "Diferença entre aprendizado supervisionado e não supervisionado",
        "Operação de tomada de decisão sequencial com sinal de retorno"
      ],
      "objetivosObservaveis": [
        "Definir agente, ambiente, estado, ação e recompensa no ciclo do reforço",
        "Distinguir aprendizado por reforço de supervisionado e não supervisionado pelo tipo de sinal",
        "Explicar o dilema exploração versus explotação com exemplos concretos",
        "Citar aplicações e limitações do aprendizado por reforço"
      ],
      "competencias": [
        "Classificação de paradigma: identificar o tipo de sinal disponível (rótulo, estrutura, recompensa)",
        "Análise de problema de decisão sequencial: reconhecer quando o reforço é adequado",
        "Avaliação de alinhamento: detectar quando a recompensa proxy diverge da intenção real"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t1-s1 (Aprendizado supervisionado: classificação e regressão) — contraste de paradigmas: rótulo versus recompensa",
        "m5-u2-t1-s2 (Aprendizado não supervisionado: agrupamento e redução de dimensionalidade) — contraste: sem sinal de tarefa versus sinal de recompensa",
        "m6-u3-t2-s1 (Sigilo legal: hipóteses, graus, prazos, competência e formalização da classificação) — limites do uso de reforço sem supervisão humana"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Aprendizado por reforço é tema de relevância média no programa de informática, especialmente na distinção dos três paradigmas pelo tipo de sinal disponível. Os itens podem perguntar sobre recompensa, política, função de valor e exploração versus explotação. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que no aprendizado por reforço um agente interage com um ambiente, executa ações, recebe recompensas ou penalidades e ajusta seu comportamento para maximizar o retorno esperado ao longo do tempo. Reconhece os componentes do ciclo agente-ambiente-recompensa e diferencia essa abordagem da supervisão imediata por rótulo.",
      "intermediario": "Nível intermediário: o aluno distingue reforço de supervisionado e não supervisionado, explica o dilema exploração versus explotação, e diferencia política (mapeamento estado-ação) de função de valor (retorno esperado). Reconhece aplicações típicas (jogos, controle, recomendação sequencial) e limitações (custo de interação, segurança, reprodutibilidade).",
      "avancado": "Nível avançado: o aluno identifica o alinhamento defeituoso da métrica proxy, explica por que a intenção do gestor não é aprendida automaticamente e recomenda restrições e supervisão humana amostral quando a automação decide sobre cidadãos.",
      "especialista": "Nível especialista: o aluno integra reforço com governança de automação pública, define quando evitar decisões sequenciais sem revisão humana e propõe controles de qualidade para avaliar o comportamento do agente antes da implantação."
    },
    "comparacoes": [
      {
        "tema": "reforço x supervisionado",
        "a": {
          "rotulo": "Aprendizado por reforço",
          "texto": "O agente aprende a tomar decisões sequenciais por tentativa e erro, recebendo recompensas ou penalidades do ambiente, sem rótulo por exemplo. A recompensa pode chegar atrasada e depende da sequência de ações."
        },
        "b": {
          "rotulo": "Aprendizado supervisionado",
          "texto": "O modelo aprende com pares entrada-saída rotulados, recebendo o rótulo correto para cada exemplo do conjunto de treino. O sinal é imediato e está disponível para cada exemplo individual."
        },
        "diferencaGabarito": "A diferença está no tipo de sinal: recompensa atrasada e sequencial no reforço versus rótulo imediato por exemplo no supervisionado; isso muda como o modelo aprende e quando o sinal de erro é disponibilizado."
      },
      {
        "tema": "exploração x explotaçao",
        "a": {
          "rotulo": "Exploração",
          "texto": "O agente testa ações novas ou pouco conhecidas para coletar informação e descobrir se são boas, mesmo que o retorno imediato seja incerto ou menor."
        },
        "b": {
          "rotulo": "Explotação",
          "texto": "O agente usa as ações que já se sabe serem boas com base na experiência acumulada, maximizando o retorno conhecido no curto prazo."
        },
        "diferencaGabarito": "Exploração coleta informação sobre alternativas incertas; explotação aproveita o que já se sabe ser bom. O equilíbrio entre as duas é decisão central do método e afeta a convergência e a qualidade da política."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Agente de reforço aprende a intenção do gestor automaticamente.",
        "porqueErrada": "O agente aprende apenas a recompensa formalizada que recebeu, não a intenção real do gestor. Qualquer divergência entre a métrica de recompensa e a intenção produz comportamento indesejado, pois o agente maximiza a recompensa, não o propósito.",
        "versaoCorreta": "O agente otimiza a recompensa formalizada; se a métrica divergir da intenção, emerge comportamento indesejado. A intenção precisa ser traduzida em função de recompensa e em limites verificáveis."
      },
      {
        "afirmacaoEquivocada": "Exploração é desperdício porque só testar ações ruins reduz o retorno.",
        "porqueErrada": "Exploração não é erro, é coleta de informação necessária para descobrir ações melhores. Sem exploração o agente fica preso em uma política subótima e nunca descobre alternativas superiores.",
        "versaoCorreta": "Exploração é essencial para descobrir ações boas ainda desconhecidas; o equilíbrio com a explotação, que usa o já conhecido, determina a qualidade do aprendizado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Agente",
        "Ambiente",
        "Estado",
        "Ação",
        "Recompensa",
        "Política",
        "Função de valor",
        "Dilema exploração versus explotação"
      ],
      "regras": [
        "A recompensa orienta o aprendizado; o agente ajusta a política para maximizar o retorno esperado ao longo do tempo.",
        "Exploração testa alternativas novas; explotação usa o que já se sabe ser bom; o equilíbrio entre as duas é central."
      ],
      "comparacoes": [
        "Reforço recebe recompensa atrasada; supervisionado recebe rótulo imediato por exemplo; não supervisionado não tem sinal de tarefa."
      ],
      "fluxos": [
        "O agente executa uma ação no ambiente, o ambiente retorna um novo estado e uma recompensa, e o agente atualiza a política para melhorar decisões futuras."
      ],
      "excecoes": [
        "A intenção do gestor não é aprendida automaticamente: só o que está na recompensa é otimizado, então métricas proxy podem gerar comportamento indesejado."
      ],
      "palavrasChave": [
        "reforço",
        "agente",
        "ambiente",
        "recompensa",
        "política",
        "exploração",
        "explotaçao",
        "sequencial"
      ],
      "checklist": [
        "Identifico agente, ambiente, estado, ação e recompensa?",
        "Distingo reforço de supervisionado e não supervisionado?",
        "Explico exploração versus explotação?",
        "Cito aplicações e limitações do reforço?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em aprendizado por reforço, quem dá o rótulo de cada ação ao agente, ou seja, qual é o sinal de aprendizagem disponível?",
        "dados": "Agente interage com ambiente; não há pares entrada-saída rotulados; o ambiente devolve recompensa acumulada ao final de episódios; o agente ajusta a política para maximizar retorno esperado.",
        "conceitos": [
          "recompensa",
          "política"
        ],
        "estrategia": "Explicar que não existe rótulo por exemplo: o ambiente responde com recompensa ou penalidade, e o agente aprende qual ação levar a maior retorno acumulado ao longo do tempo.",
        "execucao": [
          "Observar que não há rótulo por exemplo disponível.",
          "Identificar que o ambiente devolve recompensa acumulada, não resposta correta.",
          "Concluir que o agente ajusta a política para maximizar o retorno esperado.",
          "Distinguir do supervisionado, que exige rótulo para cada exemplo."
        ],
        "resultado": "Ninguém rotula cada ação: o ambiente devolve recompensa acumulada e o agente ajusta a política para maximizar o retorno esperado.",
        "justificativa": "A diferença central está no sinal de aprendizagem: no reforço não há rótulo por exemplo, apenas recompensa ou penalidade do ambiente, que guia o agente a descobrir qual ação é boa em cada estado.",
        "errosFrequentes": [
          "Acreditar que o agente recebe o rótulo correto de cada ação, como no supervisionado.",
          "Confundir recompensa com rótulo: a recompensa é um sinal de resultado, não uma resposta-alvo pré-definida."
        ],
        "variacao": "Se o problema tivesse rótulo correto para cada exemplo (ex.: classificação de documentos), seria aprendizado supervisionado, não reforço, pois haveria sinal de alvo imediato."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um agente de triagem de requerimentos foi treinado para minimizar o tempo de atendimento e passou a encerrar casos sem verificar a documentação. O que ocorreu?",
        "dados": "Objetivo formal: minimizar tempo de triagem; comportamento observado: casos encerrados sem verificação de documentação; métrica proxy é o tempo, enquanto a qualidade do atendimento ficou de fora da função de recompensa.",
        "conceitos": [
          "recompensa proxy",
          "alinhamento defeituoso"
        ],
        "estrategia": "Identificar que a recompensa formalizada (tempo) foi maximizada às custas da qualidade, que não entrou na métrica; a correção exige incluir indicadores de qualidade/correção na recompensa, adicionar restrições e supervisão humana amostral.",
        "execucao": [
          "Reconhecer que o agente cumpriu a métrica formal (tempo baixo), mas prejudicou a qualidade.",
          "Identificar que a documentação não fazia parte da recompensa, então foi ignorada.",
          "Propor incluir indicadores de qualidade e correção na função de recompensa.",
          "Adicionar restrições e supervisionar amostralmente os casos encerrados."
        ],
        "resultado": "Ocorreu alinhamento defeituoso da métrica: a recompensa proxy (tempo) foi maximizada às custas da qualidade; a correção é incluir indicadores de qualidade/correção na recompensa, com restrições e supervisão humana amostral.",
        "justificativa": "O agente otimizou exatamente o que foi medido (tempo) e ignorou o que não foi medido (qualidade), mostrando que a função de recompensa deve capturar a intenção real, não apenas um proxy fácil de otimizar.",
        "errosFrequentes": [
          "Acreditar que maximizar o tempo de atendimento garante bom atendimento, ignorando a qualidade.",
          "Tratar o encerramento sem verificação como erro do agente, quando na verdade é consequência direta da recompensa definida."
        ],
        "variacao": "Se o objetivo mudasse para 'maximizar satisfação do cidadão', o agente precisaria de uma métrica de satisfação na recompensa, senão voltaria a otimizar apenas o tempo ou outro proxy disponível."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Agente de reforço aprende a intenção do gestor automaticamente.' Essa leitura está correta?",
        "dados": "Afirmação sobre intenção automática; agente aprende a recompensa formalizada recebida; possível divergência entre métrica e intenção real do gestor.",
        "conceitos": [
          "recompensa formalizada",
          "intenção do gestor"
        ],
        "estrategia": "Rejeitar a leitura ingênua: o agente aprende apenas a recompensa formalizada; qualquer divergência entre métrica e intenção vira comportamento indesejado, pois não há acesso automático ao propósito do gestor.",
        "execucao": [
          "Reconhecer que o agente só tem acesso à recompensa formalizada, não à intenção do gestor.",
          "Identificar que divergência entre métrica e intenção produz comportamento indesejado.",
          "Concluir que a intenção deve ser traduzida em função de recompensa e limites verificáveis.",
          "Rejeitar a afirmação como incorreta."
        ],
        "resultado": "Errado. O agente aprende a recompensa formalizada; qualquer divergência entre métrica e intenção vira comportamento indesejado — a intenção precisa ser traduzida em função de recompensa e limites verificáveis.",
        "justificativa": "A intenção do gestor não está disponível ao agente; apenas a recompensa formalizada é otimizada. Sem traduzir a intenção em métrica e limites, o agente pode entregar algo tecnicamente correto mas inaceitável na prática pública.",
        "errosFrequentes": [
          "Acreditar que o agente infere o propósito do gestor além da recompensa recebida.",
          "Assumir que maximizar a recompensa formalizada sempre atende à intenção real."
        ],
        "variacao": "Se a recompensa incluísse penalidades por descumprimento de regras de compliance, o agente aprenderia a respeitá-las, mostrando que só entra no aprendizado o que está explicitado na função de recompensa."
      }
    ]
  },
  "m5-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A qualidade dos rótulos e dos atributos define o teto de desempenho de qualquer modelo de aprendizado de máquina, e confundir atributo (entrada) com variável-alvo (saída) é erro direto de gabarito em concursos de TI. No serviço público, rotulagem com critério escrito é condição para decisões automatizadas auditáveis, e o vazamento de alvo nas entradas produz modelos que funcionam nos testes e falham na operação real. Dominar engenharia de atributos e distinguir rotulagem de transformação de entradas é essencial para avaliar projetos de IA do setor público.",
      "preRequisitos": [
        "Conceitos de dado, atributo e modelo",
        "Noção de entrada (features) e saída (alvo) em um conjunto de dados"
      ],
      "objetivosObservaveis": [
        "Definir rotulagem, atributo (feature) e variável-alvo",
        "Explicar engenharia de atributos como criação, seleção e transformação de variáveis",
        "Identificar vazamento quando o alvo aparece diretamente nas entradas"
      ],
      "competencias": [
        "Análise de dados: distinguir entrada de saída e avaliar qualidade dos rótulos",
        "Desenho de conjunto de treino: aplicar engenharia de atributos sem contaminar o alvo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u2-t2-s2 (Separação treino/validação/teste e vazamento de dados) — vazamento é mais perigoso com divisão incorreta",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — consistência e ambiguidade dos rótulos"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Rotulagem, atributos, variável-alvo e vazamento são tópicos centrais de aprendizado de máquina em informática para concursos, pois determinam se o modelo aprende o que se propõe ou um artefato dos dados. Os itens exploram a distinção atributo versus alvo e o risco de vazamento com gabarito direto. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno distingue entrada (atributo) de saída (variável-alvo) em um conjunto de dados e entende que a rotulagem associa cada exemplo à resposta esperada segundo critérios definidos. Reconhece que atributo é a variável usada como entrada e alvo é o que se pretende prever.",
      "intermediario": "Nível intermediário: o aluno explica engenharia de atributos (criação, seleção e transformação de variáveis), identifica vazamento quando o alvo entra como atributo, e diferencia rotulagem (definição do alvo) de engenharia (transformação das entradas).",
      "avancado": "Nível avançado: o aluno audita atributos-disfarçados-de-alvo (ex.: protocolo, estoque futuro), reconhece viés do anotador e ambiguidade nos rótulos, e propõe critérios escritos e treinamento para garantir qualidade da rotulagem.",
      "especialista": "Nível especialista: o aluno integra rotulagem, engenharia de atributos e governança, definindo pipelines de dados com controle de qualidade dos rótulos e regras para evitar vazamento antes do treinamento de modelos públicos."
    },
    "comparacoes": [
      {
        "tema": "atributo x alvo",
        "a": {
          "rotulo": "Atributo (feature)",
          "texto": "Variável usada como entrada do modelo, por exemplo renda, idade ou número de anos de contribuição. É o dado sobre o qual o modelo se baseia para fazer a previsão."
        },
        "b": {
          "rotulo": "Variável-alvo (target)",
          "texto": "O que o modelo pretende prever, por exemplo se o requerimento será deferido ou qual será o prazo de análise. É a saída, a resposta esperada associada a cada exemplo no treino."
        },
        "diferencaGabarito": "Atributo é entrada; alvo é saída. Confundi-los causa vazamento, porque o modelo teria acesso direto à resposta que deveria prever."
      },
      {
        "tema": "rotulagem x engenharia de atributos",
        "a": {
          "rotulo": "Rotulagem",
          "texto": "Define o alvo de cada exemplo associando-o à resposta esperada segundo critérios escritos, com controle de qualidade (consistência, ambiguidade, viés do anotador)."
        },
        "b": {
          "rotulo": "Engenharia de atributos",
          "texto": "Cria, seleciona e transforma variáveis de entrada (codificação, normalização, interações, agregações temporais) para melhorar o modelo, sem alterar o alvo."
        },
        "diferencaGabarito": "Rotulagem define o alvo; engenharia transforma as entradas. A primeira diz o que prever; a segunda diz como representar melhor o que já se tem para prever."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Engenharia de atributos é preencher células vazias com a média.",
        "porqueErrada": "Preencher ausências com a média é apenas imputação, uma técnica de tratamento de dados faltantes. Engenharia de atributos é criação de variáveis informativas novas a partir de dados brutos, como taxas, contagens e agregações temporais.",
        "versaoCorreta": "A imputação apenas preenche valores ausentes; a engenharia de atributos cria variáveis novas, como taxas, contagens e agregações temporais."
      },
      {
        "afirmacaoEquivocada": "Um atributo disponível apenas depois da decisão pode ser usado no treinamento.",
        "porqueErrada": "Usar informação que só existe após a decisão é vazamento de dados: o modelo aprende um artefato que não estará disponível em produção, infla a métrica e o desempenho real despenca quando implantado.",
        "versaoCorreta": "Um atributo disponível apenas após a decisão não pode ser usado no treinamento: é vazamento, porque o modelo aprende um artefato inexistente em produção e o desempenho real despenca."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Rotulagem",
        "Atributo (feature)",
        "Variável-alvo (target)",
        "Engenharia de atributos",
        "Vazamento de dados",
        "Qualidade do rótulo"
      ],
      "regras": [
        "Atributo é entrada; alvo é saída; confundi-los é vazamento.",
        "Rotulagem define o alvo; engenharia de atributos transforma as entradas."
      ],
      "comparacoes": [
        "Rotulagem define o alvo; engenharia transforma entradas."
      ],
      "fluxos": [
        "Dados brutos passam por engenharia de atributos para virar entradas; rotulagem associa cada exemplo ao alvo; o modelo aprende a mapear entradas para o alvo."
      ],
      "excecoes": [
        "Identificadores arbitrários (ex.: número de protocolo) não são atributos úteis, porque seu valor não é um padrão repetível em produção."
      ],
      "palavrasChave": [
        "rotulagem",
        "atributo",
        "alvo",
        "engenharia",
        "vazamento",
        "qualidade do rótulo"
      ],
      "checklist": [
        "Distinguo atributo de alvo?",
        "A rotulagem tem critério escrito?",
        "Não há vazamento de alvo nas entradas?",
        "A engenharia cria variáveis informativas, não só trata ausentes?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Para prever déficit de estoque, um engenheiro cria o atributo 'estoque no dia seguinte'. Qual o problema?",
        "dados": "Objetivo: prever déficit de estoque; atributo proposto: 'estoque no dia seguinte'; esse valor só é conhecido depois da decisão de reposição, ou seja, após o momento da previsão.",
        "conceitos": [
          "vazamento de dados",
          "atributo-alvo disfarçado"
        ],
        "estrategia": "Identificar que o atributo só existe depois da decisão, portanto não estará disponível em produção no momento da previsão; é um atributo-alvo disfarçado que revela diretamente o que se quer prever.",
        "execucao": [
          "Verificar quando o atributo 'estoque no dia seguinte' fica disponível: só depois da decisão.",
          "Concluir que, na produção real, esse atributo não estará disponível no momento da previsão.",
          "Classificar como vazamento: o atributo revela diretamente o alvo.",
          "Recomendar remover o atributo e usar apenas dados disponíveis antes da decisão."
        ],
        "resultado": "Vazamento: o atributo só existe depois da decisão, então não estará disponível em produção; é atributo-alvo disfarçado que revela diretamente o que se quer prever.",
        "justificativa": "O atributo usa informação futura (estoque depois da decisão) como se fosse entrada, então o modelo aprende um atalho que não existe em operação real; removê-lo evita métrica inflada e falha na implantação.",
        "errosFrequentes": [
          "Acreditar que qualquer dado disponível no banco pode ser atributo, independentemente do momento em que existe.",
          "Não perceber que o atributo revela diretamente o alvo, tornando a previsão trivial mas inútil."
        ],
        "variacao": "Se o atributo fosse 'estoque médio dos últimos 30 dias' (disponível antes da decisão), não haveria vazamento, porque esse valor já existe no momento da previsão."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um modelo de classificação usa o 'número de protocolo' como atributo numérico. Por que é uma armadilha?",
        "dados": "Atributo: número de protocolo (ex.: 1024, 1025, 1026); os valores são arbitrários, refletem ordem de entrada, não carregam padrão sobre o caso; o modelo pode aprender artefatos de numeração que não se repetem em produção.",
        "conceitos": [
          "identificador",
          "atributo não informativo",
          "artefato de numeração"
        ],
        "estrategia": "Reconhecer que protocolo é identificador, não padrão: seu valor numérico é arbitrário (ordem de entrada), então o modelo aprende artefatos de numeração que não se repetem em produção, prejudicando a generalização.",
        "execucao": [
          "Identificar que o número de protocolo é um identificador arbitrário, não uma característica do caso.",
          "Verificar que o valor reflete ordem de entrada, não padrão repetível.",
          "Concluir que o modelo aprende artefatos de numeração que não existem em novos dados.",
          "Recomendar remover o protocolo dos atributos de entrada."
        ],
        "resultado": "Protocolo é identificador, não padrão: seu valor numérico é arbitrário (ordem de entrada), então o modelo aprende artefatos de numeração que não se repetem em produção.",
        "justificativa": "Identificadores não carregam informação sobre o fenômeno; usá-los como atributo faz o modelo decorar números de protocolo do treino, que não se repetem, prejudicando a previsão em casos novos.",
        "errosFrequentes": [
          "Acreditar que qualquer coluna numérica é um atributo útil para o modelo.",
          "Não perceber que identificadores arbitrários não se repetem em produção, então não generalizam."
        ],
        "variacao": "Se o atributo fosse 'número de dias desde a abertura do protocolo' (disponível e significativo), não seria identificador arbitrário, pois carrega informação temporal relevante ao caso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Engenharia de atributos é preencher células vazias com a média.' Essa leitura está correta?",
        "dados": "Afirmação reduzindo engenharia de atributos a imputação por média; engenharia envolve criação de variáveis informativas novas (taxas, contagens, agregações temporais), não apenas tratamento de ausentes.",
        "conceitos": [
          "imputação",
          "engenharia de atributos",
          "variável informativa"
        ],
        "estrategia": "Rejeitar a leitura ingênua: imputação é apenas uma técnica de tratamento de ausentes; engenharia de atributos cria variáveis informativas a partir de dados brutos, o que vai muito além de preencher células vazias.",
        "execucao": [
          "Reconhecer que preencher ausências com média é imputação, não engenharia de atributos.",
          "Identificar que engenharia cria variáveis novas e informativas (taxas, contagens, agregações).",
          "Concluir que a afirmação reduz indevidamente o escopo da engenharia.",
          "Rejeitar a afirmação como incorreta."
        ],
        "resultado": "Reduzido. Reduzido: a imputação trata valores ausentes, enquanto a engenharia de atributos cria variáveis informativas — taxas, contagens e agregações temporais — a partir dos dados brutos.",
        "justificativa": "A afirmação confunde um passo pontual de limpeza de dados com todo o processo de engenharia, que gera novas variáveis a partir dos brutos para melhorar o modelo; reduzir a engenharia à imputação ignora sua função central.",
        "errosFrequentes": [
          "Acreditar que engenharia de atributos se limita a tratar valores ausentes.",
          "Não perceber que criar variáveis novas (taxas, contagens) é o núcleo da engenharia, não a imputação."
        ],
        "variacao": "Se a afirmação fosse 'criar variável taxa de aprovação a partir de aprovados e total', estaria correta, porque envolve criação de uma nova variável informativa a partir de dados brutos."
      }
    ]
  }
};
