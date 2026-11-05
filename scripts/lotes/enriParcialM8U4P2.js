const enriParcialM8U4P2 = {
  "m8-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O esquema estrela organiza o dado para responder perguntas: uma tabela fato central com eventos mensuráveis e tabelas dimensão com o contexto descritivo. A prova cobra a separação entre fato e dimensão, a ideia de medida agregável e a noção de granularidade; trocar o que pertence a cada tabela altera o gabarito.",
      "preRequisitos": [
        "Conceitos de tabela, coluna e chave",
        "Noção de agregação, como soma, média e contagem",
        "Ideia de medida numérica e de atributo descritivo"
      ],
      "objetivosObservaveis": [
        "Separar, em um modelo, a tabela fato das tabelas dimensão",
        "Justificar o uso de medida agregada em lugar da contagem bruta de linhas",
        "Relacionar a granularidade declarada ao número de eventos contados"
      ],
      "competencias": [
        "Modelagem analítica orientada à pergunta",
        "Escolha da agregação adequada ao evento medido",
        "Diagnóstico de duplicidade em relatório"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u4-t1-s1 (Power BI, Power Query e DAX em nível conceitual) — o modelo estrela é a base sobre a qual as medidas são calculadas",
        "m8-u4-t4-s1 (Critérios de comparação e cenários de uso) — a modelagem condiciona a ferramenta e o painel",
        "m7-u2-t4-s1 (Agregação e agrupamento (e o erro da média de médias)) — reforça a escolha correta da agregação"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Modelagem dimensional, esquema estrela, tabela fato e tabela dimensão integram o conteúdo programático de dados e de BI, em itens que pedem classificar o atributo ou escolher a medida."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: entender a separação entre fato e dimensão. Na tabela fato ficam o evento e as medidas numéricas; nas dimensões ficam os atributos que descrevem o evento, como tempo, órgão e tipo. Um pagamento é o fato; a data, o órgão e o tipo de benefício são dimensões.",
      "intermediario": "Nível intermediário: descrever o esquema estrela e reconhecer medidas. A estrela tem a fato no centro, cercada pelas dimensões ligadas por chaves; as medidas são numéricas e agregáveis, como valor e quantidade, e os atributos são descritivos. A granularidade declara o que cada linha da fato representa.",
      "avancado": "Nível avançado: projetar o modelo a partir da pergunta. Se a pergunta é o número de atendimentos únicos, a fato precisa de uma chave de protocolo e a medida é a contagem distinta; contar linhas infla o número quando há duplicidade. Agregações como roll-up resumem e drill-down detalham, e os filtros restringem o conjunto analisado.",
      "especialista": "Nível especialista: avaliar o modelo quanto a consistência e desempenho. Verificar se atributos descritivos estão só nas dimensões, se cada medida tem chave identificadora, se a granularidade está declarada e se o esquema estrela é suficiente ou se o caso pede outro arranjo, como o floco de neve."
    },
    "comparacoes": [
      {
        "tema": "Tabela fato x tabela dimensão",
        "a": {
          "rotulo": "Tabela fato",
          "texto": "Guarda o evento e as medidas numéricas agregáveis, além das chaves que ligam as dimensões."
        },
        "b": {
          "rotulo": "Tabela dimensão",
          "texto": "Guarda atributos descritivos que dão contexto ao evento, como produto, região, data e tipo."
        },
        "diferencaGabarito": "A fato responde quanto aconteceu; a dimensão responde em que contexto. Mover atributo para a fato duplica o dado e quebra o filtro."
      },
      {
        "tema": "Agregação x filtro",
        "a": {
          "rotulo": "Agregação",
          "texto": "Resume várias linhas em um valor, por soma, média ou contagem."
        },
        "b": {
          "rotulo": "Filtro",
          "texto": "Restringe quais linhas entram no cálculo, sem resumir."
        },
        "diferencaGabarito": "A agregação combina linhas em um número; o filtro seleciona linhas antes da agregação. Confundir os dois leva a relatório que soma o que deveria recortar."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Na estrela, os atributos descritivos devem ficar na tabela de fato.'",
        "porqueErrada": "Atributos descritivos pertencem às dimensões; a fato guarda chaves e medidas. Trazer atributos para a fato duplica dados, aumenta o volume e desalinha os filtros.",
        "versaoCorreta": "Errado. A fato guarda chaves e medidas; os atributos descritivos vão nas dimensões. Misturá-los duplica o dado e prejudica o filtro e o desempenho."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Qualquer coluna pode ser tratada como medida no modelo.'",
        "porqueErrada": "Medida precisa ser numérica e agregável; atributo como nome de órgão ou tipo de benefício é descritivo e não se soma nem se calcula por média.",
        "versaoCorreta": "Errado. Medida precisa ser numérica e agregável; atributos descritivos pertencem às dimensões e não se somam."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O número bruto de linhas da fato é sempre o número de eventos.'",
        "porqueErrada": "Quando há duplicidade, a contagem por linhas supera o número de eventos; o correto é a contagem distinta da chave, como o protocolo.",
        "versaoCorreta": "Errado. A contagem por linhas se infla com duplicidade; o número de eventos exige contagem distinta da chave identificadora."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O esquema estrela é o único modelo dimensional possível.'",
        "porqueErrada": "Existe ao menos o floco de neve, que normaliza as dimensões em tabelas adicionais; a escolha entre os arranjos depende do caso.",
        "versaoCorreta": "Errado. O floco de neve é um arranjo alternativo, com dimensões normalizadas; a estrela é um modelo entre outros."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Esquema estrela como tabela fato central cercada por dimensões",
        "Tabela fato como evento e medidas numéricas agregáveis",
        "Tabela dimensão como atributos descritivos de contexto",
        "Granularidade como o que cada linha da fato representa",
        "Contagem distinta como contagem sem repetir a chave"
      ],
      "regras": [
        "Atributo descritivo vai na dimensão; medida numérica vai na fato",
        "O número de eventos exige chave identificadora e contagem distinta",
        "Roll-up resume e drill-down detalha; filtro restringe o conjunto"
      ],
      "comparacoes": [
        "A fato dá o quanto, a dimensão dá o contexto; o filtro recorta e a agregação resume"
      ],
      "fluxos": [
        "Definir a pergunta, identificar o evento e sua chave, montar a fato com as medidas, criar as dimensões, ligar por chaves e escolher a agregação"
      ],
      "excecoes": [
        "Dimensões normalizadas caracterizam o floco de neve, alternativa à estrela",
        "Sem chave identificadora não há como separar eventos duplicados na contagem"
      ],
      "palavrasChave": [
        "esquema estrela",
        "tabela fato",
        "dimensão",
        "medida",
        "granularidade",
        "chave",
        "contagem distinta",
        "roll-up",
        "drill-down"
      ],
      "checklist": [
        "Declarei o que cada linha da fato representa?",
        "Separei medidas de atributos descritivos?",
        "A medida escolhida respeita a granularidade?",
        "Há duplicidade que exija contagem distinta?",
        "Preciso de estrela ou de dimensões normalizadas?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "No evento de pagamento de benefício, identifique a tabela fato, as medidas e as dimensões que dão contexto ao evento.",
        "dados": "Registro de pagamento com data de pagamento, órgão pagador, tipo de benefício, titular, valor pago e número de parcelas; granularidade pretendida de um pagamento por linha.",
        "conceitos": [
          "Fato como evento com medidas",
          "Dimensões como contexto descritivo"
        ],
        "estrategia": "Tomar o pagamento como centro, separar os valores numéricos agregáveis como medidas e agrupar os atributos descritivos em dimensões de tempo, órgão, benefício e pessoa.",
        "execucao": [
          "Identificar o evento, que é o pagamento",
          "Selecionar as medidas: valor pago e número de parcelas",
          "Criar a dimensão de tempo com a data de pagamento",
          "Criar as dimensões de órgão, tipo de benefício e pessoa",
          "Declarar a granularidade: um pagamento por linha"
        ],
        "resultado": "Fato PAGAMENTO, com as medidas valor e número de parcelas, e dimensões de tempo, órgão, tipo de benefício e pessoa. A granularidade é um pagamento por linha.",
        "justificativa": "O pagamento é o evento que se quer contar e somar, logo é a fato, com medidas numéricas. Data, órgão, tipo e titular apenas descrevem o pagamento; são atributos de contexto e, por isso, dimensões.",
        "errosFrequentes": [
          "Colocar o tipo de benefício como medida, embora seja descritivo",
          "Deixar de declarar a granularidade e perder a noção do que cada linha representa"
        ],
        "variacao": "Se a pergunta fosse o total pago por órgão em cada mês, a mesma fato seria lida com filtro de tempo e agrupamento por órgão, sem mudar o modelo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um relatório mostra 1.500 atendimentos, mas a base tem 1.500 linhas com apenas 1.200 protocolos distintos. Qual o número correto de atendimentos e por quê?",
        "dados": "Base com 1.500 linhas e 1.200 protocolos distintos; 300 linhas repetem protocolos já presentes; a medida em uso é a contagem de linhas.",
        "conceitos": [
          "Contagem distinta como medida do número de eventos",
          "Inflação da contagem por duplicidade"
        ],
        "estrategia": "Reconhecer que a linha não equivale ao evento: comparar a contagem de linhas com a contagem distinta de protocolo e adotar a segunda como número de atendimentos.",
        "execucao": [
          "Contar as linhas da base: 1.500",
          "Contar os protocolos distintos: 1.200",
          "Medir a diferença: 300 linhas repetem protocolos",
          "Substituir a contagem de linhas pela contagem distinta de protocolo",
          "Conferir o número corrigido de atendimentos: 1.200"
        ],
        "resultado": "O número correto é 1.200 atendimentos. As 1.500 linhas incluem 300 repetições; a contagem distinta do protocolo elimina a duplicidade e mede os eventos.",
        "justificativa": "O atendimento é identificado pelo protocolo, não pela linha. Como 300 linhas repetem protocolos, contar linhas soma o mesmo atendimento mais de uma vez; a medida adequada é a contagem distinta, que devolve 1.200.",
        "errosFrequentes": [
          "Aceitar 1.500 porque é o total de linhas exibido no relatório",
          "Somar ou tirar média dos protocolos em vez de contar distintos"
        ],
        "variacao": "Se cada protocolo pudesse ter várias linhas por procedimento e a pergunta fosse o número de procedimentos, a chave mudaria e a contagem distinta passaria a ser feita por procedimento, não por protocolo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Na estrela, os atributos descritivos devem ficar na tabela de fato.' Avalie a afirmação e indique a consequência do erro.",
        "dados": "Modelo de atendimentos com a fato contendo, por linha, o nome do órgão e o tipo de serviço, além de valor e quantidade; as dimensões ficaram apenas com as chaves.",
        "conceitos": [
          "Separação entre fato e dimensão",
          "Efeito da duplicação de atributos na fato"
        ],
        "estrategia": "Testar a afirmação pelo efeito prático: manter atributos na fato repete o mesmo texto em muitas linhas e desalinha os filtros aplicados sobre as dimensões.",
        "execucao": [
          "Notar que o atributo descritivo se repete em toda linha da fato",
          "Medir a consequência: aumento de volume sem ganho analítico",
          "Verificar o efeito nos filtros sobre as dimensões",
          "Corrigir o modelo, movendo os atributos para as dimensões",
          "Manter na fato apenas as chaves e as medidas"
        ],
        "resultado": "Errado. Atributos descritivos pertencem às dimensões; mantê-los na fato duplica o dado, aumenta o volume e desalinha os filtros. A correção é mover os atributos para as dimensões.",
        "justificativa": "A leitura ingênua enxerga o atributo como coluna útil, mas ele descreve contexto e não se agrega. Replicá-lo na fato repete o mesmo valor em cada linha, infla o volume e quebra a consistência dos filtros que deveriam operar sobre a dimensão.",
        "errosFrequentes": [
          "Defender o atributo na fato por conveniência de consulta",
          "Confundir atributo descritivo com medida só porque aparece ao lado do valor"
        ],
        "variacao": "Se o órgão tivesse muitas variações de grafia, a dimensão única com o cadastro corrigido resolveria a inconsistência que a fato replicada apenas espalharia."
      }
    ]
  },
  "m8-u4-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher ferramenta de BI é decidir por critérios: custo e licenciamento, facilidade de uso, capacidade de visualização, preparação de dados, integração, governança e escalabilidade. A prova cobra a escolha coerente com o cenário, sobretudo quando há dado sensível; escolher pelo preço em vez da governança altera o gabarito.",
      "preRequisitos": [
        "Conceitos de visualização e de Business Intelligence",
        "Noção de dado pessoal e de dado sensível",
        "Ideia de licenciamento e de controle de acesso"
      ],
      "objetivosObservaveis": [
        "Comparar ferramentas de BI por critérios explícitos e declarados",
        "Recomendar uma opção para um cenário com dado sensível ou com dado fictício",
        "Avaliar limitações e governança antes de decidir"
      ],
      "competencias": [
        "Decisão técnica justificada por critérios",
        "Priorização entre custo, governança e facilidade de uso",
        "Registro da justificativa da escolha no processo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u4-t2-s1 (Tableau (Desktop, Public, Prep) e Looker Studio) — fornece as ferramentas comparadas pelos critérios",
        "m8-u4-t1-s1 (Power BI, Power Query e DAX em nível conceitual) — outra opção no mesmo conjunto de escolha",
        "m7-u3-t2-s1 (Governança de dados: papéis, políticas e padrões) — sustenta os critérios de governança e de controle de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A escolha de ferramenta conforme o cenário e os critérios de comparação integram o conteúdo programático de TI e de dados, em itens que associam a sensibilidade do dado e o regime de publicação ao licenciamento."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: conhecer os critérios de comparação. Custo e licenciamento, facilidade de uso, capacidade de visualização, preparação de dados, integração com fontes, governança e escalabilidade são as dimensões pelas quais as ferramentas de BI se comparam. A lista organiza a decisão antes da ferramenta.",
      "intermediario": "Nível intermediário: comparar ferramentas por esses critérios. Uma ferramenta gratuita tende a custar menos e a limitar governança e publicação; uma licenciada tende a ampliar controle de acesso e auditoria. A comparação só é honesta com edição, versão e data declaradas.",
      "avancado": "Nível avançado: escolher conforme o cenário. Uso individual e dados fictícios apontam para a opção gratuita; dado sensível e uso institucional apontam para controle de acesso, registro e, portanto, para opção licenciada. O cenário define qual critério prevalece.",
      "especialista": "Nível especialista: avaliar governança e integração em profundidade. Verificar como o acesso é registrado, como o painel é versionado, de que conectores a fonte depende e como a escolha é justificada no processo. A recomendação precisa nomear o critério decisivo e a limitação aceita."
    },
    "comparacoes": [
      {
        "tema": "Custo x governança",
        "a": {
          "rotulo": "Custo e licenciamento",
          "texto": "Critério do gasto: a ferramenta gratuita reduz o dispêndio inicial e amplia o acesso."
        },
        "b": {
          "rotulo": "Governança",
          "texto": "Critério do controle: controle de acesso, auditoria e versionamento do painel."
        },
        "diferencaGabarito": "Quando o dado é sensível, a governança prevalece sobre o custo; a economia de licença não compensa a perda de controle de acesso."
      },
      {
        "tema": "Uso individual x uso institucional",
        "a": {
          "rotulo": "Uso individual",
          "texto": "Cenário de aprendizagem e de dados fictícios, em que custo zero e velocidade pesam mais."
        },
        "b": {
          "rotulo": "Uso institucional",
          "texto": "Cenário de dado real e sensível, em que controle de acesso, registro e retenção pesam mais."
        },
        "diferencaGabarito": "O mesmo critério muda de peso com o cenário: o que é adequado para praticar não é necessariamente adequado para servir o cidadão."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Ferramenta gratuita é sempre a escolha correta para o serviço público, por economia.'",
        "porqueErrada": "Economia de licença não pode custar controle de acesso, auditoria e proteção de dados; quando a gratuita não sustenta a governança exigida, cabe a licenciada, com justificativa registrada.",
        "versaoCorreta": "Errado. O critério decisivo é a governança exigida pelo dado; quando a edição gratuita não a sustenta, a escolha correta é a licenciada, com justificativa no processo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A melhor ferramenta de BI é sempre a mais cara, por ter mais recursos.'",
        "porqueErrada": "A ferramenta mais completa só é melhor se o cenário exigir seus recursos; para dado fictício e uso individual, o custo adicional não se justifica.",
        "versaoCorreta": "Errado. A escolha depende do cenário: a ferramenta mais completa só é melhor quando seus recursos são necessários, e não pelo preço em si."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A comparação entre ferramentas de BI não precisa declarar edição, versão e data.'",
        "porqueErrada": "Recursos, limites de atualização e regime de licença mudam com o plano e a versão; uma comparação sem esses dados envelhece e induz a erro.",
        "versaoCorreta": "Errado. Edição, versão e data fazem parte da comparação, porque planos e recursos mudam e a conclusão sem eles perde validade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Critério de comparação como dimensão explícita de decisão entre ferramentas",
        "Governança como controle de acesso, auditoria e versionamento",
        "Cenário de uso como individual, de equipe ou institucional",
        "Dado sensível como informação que exige acesso restrito",
        "Licenciamento como regime de uso e de publicação da ferramenta"
      ],
      "regras": [
        "Declarar edição, versão e data em qualquer comparação",
        "O peso dos critérios decorre do cenário e da sensibilidade do dado",
        "Dado sensível exige controle de acesso e registro, acima do custo"
      ],
      "comparacoes": [
        "A gratuita tende a custo menor e governança limitada; a licenciada tende a custo maior e governança ampliada"
      ],
      "fluxos": [
        "Descrever o cenário, classificar o dado, fixar os critérios e seu peso, comparar as opções e registrar a justificativa da escolha"
      ],
      "excecoes": [
        "Dados fictícios e rotulados admitem a opção gratuita e a publicação aberta",
        "A ferramenta mais capaz é dispensável quando o cenário não exige seus recursos"
      ],
      "palavrasChave": [
        "critério",
        "licenciamento",
        "governança",
        "cenário de uso",
        "dado sensível",
        "controle de acesso",
        "escalabilidade",
        "justificativa"
      ],
      "checklist": [
        "Classifiquei o dado como público, interno ou sensível?",
        "Declarei edição, versão e data da comparação?",
        "O critério decisivo está explícito?",
        "A opção sustenta controle de acesso e registro?",
        "A justificativa da escolha está registrada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Compare a opção A, gratuita e com publicação pública, e a opção B, licenciada e com publicação controlada, para um painel com dados de saúde, e recomende uma delas.",
        "dados": "Painel com dados de saúde; opção A gratuita e de publicação pública; opção B licenciada e de publicação controlada; requisito de restringir quem acessa e de registrar o acesso.",
        "conceitos": [
          "Peso dos critérios conforme a sensibilidade do dado",
          "Publicação controlada como requisito"
        ],
        "estrategia": "Partir da sensibilidade do dado, que fixa o requisito de controle de acesso, e escolher a opção que o atende, tratando a licença como custo da conformidade.",
        "execucao": [
          "Classificar o dado como de saúde e, portanto, sensível",
          "Fixar o requisito de controle de acesso e de registro",
          "Verificar o regime de publicação de cada opção",
          "Descartar a opção de publicação pública",
          "Recomendar a opção com publicação controlada"
        ],
        "resultado": "Recomenda-se a opção B. O dado de saúde exige controle de acesso e registro; a publicação pública da opção A é incompatível, e a licença passa a ser custo da conformidade.",
        "justificativa": "A comparação começa pelo dado, não pelo preço: sendo o dado sensível, o requisito é restringir e registrar o acesso. Só a opção com publicação controlada o atende; a economia da opção gratuita não compensa a exposição.",
        "errosFrequentes": [
          "Escolher a opção gratuita apenas por economia",
          "Comparar as opções pelo número de gráficos, ignorando o regime de publicação"
        ],
        "variacao": "Se os dados de saúde fossem substituídos por dados fictícios de exercício, a publicação pública passaria a ser aceitável e a opção gratuita ficaria defensável."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma equipe de estudo quer praticar com dados fictícios, sem orçamento. Qual critério prevalece e que cuidado resta mesmo nesse cenário?",
        "dados": "Grupo em aprendizagem; dados fictícios de vendas, criados para exercício; orçamento inicial zero; objetivo de praticar a montagem de painéis.",
        "conceitos": [
          "Peso do custo no cenário de aprendizagem",
          "Dados fictícios rotulados como condição de uso"
        ],
        "estrategia": "Reconhecer que, com dados fictícios, o custo zero prevalece sobre governança e auditoria, desde que o caráter fictício do dado seja declarado e mantido.",
        "execucao": [
          "Confirmar que os dados são fictícios",
          "Fixar a prioridade: custo zero e rapidez de aprendizagem",
          "Adotar a ferramenta gratuita adequada ao exercício",
          "Rotular o material como demonstração",
          "Revisar o critério se os dados deixarem de ser fictícios"
        ],
        "resultado": "Prevalece o custo zero, com a ferramenta gratuita. O cuidado que resta é assegurar que os dados sejam realmente fictícios e estejam rotulados como demonstração, para que ninguém os tome por reais.",
        "justificativa": "Com dados fictícios, não há titular a proteger nem requisito de auditoria a cumprir; a acessibilidade e a velocidade de aprendizagem passam a decidir. Ainda assim, declarar o dado como fictício evita confusão e uso indevido.",
        "errosFrequentes": [
          "Misturar dado real de terceiros em exercício sem orçamento",
          "Deixar de rotular o material, permitindo que o dado fictício seja lido como real"
        ],
        "variacao": "Se a equipe passasse a trabalhar com dado real de cidadãos, o critério mudaria: controle de acesso e registro voltariam a prevalecer, e a ferramenta gratuita poderia deixar de servir."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A melhor ferramenta de BI é sempre a mais cara, porque reúne mais recursos.' Avalie a afirmação com o cenário de uma equipe de estudo sem orçamento.",
        "dados": "Equipe de estudo com dados fictícios e orçamento zero; a ferramenta mais cara dispõe de recursos avançados que o cenário não exige.",
        "conceitos": [
          "Adequação ao cenário como critério",
          "Recursos não necessários como custo sem retorno"
        ],
        "estrategia": "Confrontar o preço com a necessidade: identificar os recursos que o cenário exige e verificar se os recursos extras da ferramenta cara alteram o resultado do exercício.",
        "execucao": [
          "Listar os recursos exigidos pelo cenário: montar e publicar painéis com dados fictícios",
          "Comparar com os recursos da ferramenta mais cara",
          "Constatar que os recursos extras não são necessários ao exercício",
          "Concluir que o custo adicional não se justifica",
          "Escolher a ferramenta adequada ao cenário"
        ],
        "resultado": "Errado. A ferramenta mais cara só é melhor se o cenário exigir seus recursos; com dados fictícios e orçamento zero, o custo adicional não traz retorno e a opção adequada é a mais simples.",
        "justificativa": "A afirmação confunde quantidade de recursos com adequação. O critério é a necessidade do cenário: recursos avançados que o exercício não usa apenas elevam o custo, e o preço mais alto deixa de significar mais qualidade.",
        "errosFrequentes": [
          "Equiparar qualidade a preço, sem listar os recursos necessários",
          "Ignorar o orçamento do cenário ao comparar as ferramentas"
        ],
        "variacao": "Se o cenário passasse a exigir recursos avançados de governança e escala, a ferramenta mais completa poderia voltar a se justificar e a conclusão se inverteria."
      }
    ]
  }
};
