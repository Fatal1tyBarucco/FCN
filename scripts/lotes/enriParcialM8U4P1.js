const enriParcialM8U4P1 = {
  "m8-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O Power BI reúne componentes com papéis distintos — o Desktop que cria, o serviço em nuvem que publica e o Power Query que prepara os dados —, e a prova cobra essa separação, além da diferença entre dimensão e medida. Confundir o componente de autoria com o de distribuição, ou trocar dimensão por medida, altera o gabarito.",
      "preRequisitos": [
        "Conceitos básicos de dados (registro, tabela, campo)",
        "Noção de gráfico e de painel de visualização",
        "Ideia de soma e média como operações de agregação sobre colunas"
      ],
      "objetivosObservaveis": [
        "Descrever o papel do Power BI Desktop, do serviço em nuvem, do Power Query e do DAX como elementos distintos da mesma plataforma",
        "Distinguir tabela dimensão de medida em um modelo analítico simples",
        "Formular uma medida agregada em linguagem de BI, somando antes de dividir"
      ],
      "competencias": [
        "Análise de ferramentas de BI pelo papel de cada componente",
        "Modelagem analítica básica: separar contexto descritivo de valor mensurável",
        "Leitura do contexto de filtro como recorte que altera o cálculo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u4-t3-s1 (Esquema estrela, fatos, dimensões e medidas) — aprofunda a modelagem que sustenta as medidas do Power BI",
        "m7-u2-t4-s1 (Agregação e agrupamento (e o erro da média de médias)) — fundamenta a armadilha de somar antes de dividir",
        "m8-u4-t2-s1 (Tableau (Desktop, Public, Prep) e Looker Studio) — outra família de ferramentas de BI comparada na mesma unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Ferramentas de BI e a distinção entre os componentes do Power BI integram o conteúdo programático de TI e de auditoria, tanto em itens sobre licenciamento quanto em itens conceituais sobre dimensão, medida e contexto de filtro. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: reconhecer o fluxo dados, modelo e painel. O Power Query extrai e transforma a origem; o modelo recebe o resultado; o painel apresenta medidas e dimensões. O Power BI Desktop é a aplicação de autoria; o serviço em nuvem publica e compartilha, e depende de licença conforme o plano.",
      "intermediario": "Nível intermediário: distinguir dimensão de medida e escrever uma medida simples. Dimensão é o atributo que descreve o contexto, como produto, região e data; medida é o valor numérico agregável, como faturamento e quantidade. No DAX conceitual, TicketMedio é a soma do faturamento dividida pela soma da quantidade.",
      "avancado": "Nível avançado: explicar o contexto de filtro e o contexto de linha. Uma medida se recalcula conforme o recorte do relatório, por loja ou por mês, porque o filtro redefine o conjunto de linhas antes da agregação. A mesma expressão produz números diferentes sob recortes diferentes, o que exige declarar o contexto ao ler o resultado.",
      "especialista": "Nível especialista: auditar modelo e painel. Verificar se a autoria no Desktop foi separada do serviço sujeito a licença, se o Power Query registra os passos em vez de exigir ajuste manual, se cada medida é numérica e agregável e se a média de médias não foi usada onde a razão de somas é a leitura correta."
    },
    "comparacoes": [
      {
        "tema": "Dimensão x medida no modelo analítico",
        "a": {
          "rotulo": "Dimensão",
          "texto": "Atributo descritivo que dá contexto ao número, como produto, região e data, e serve de eixo de filtro e de agrupamento."
        },
        "b": {
          "rotulo": "Medida",
          "texto": "Valor numérico agregável, como faturamento, quantidade ou contagem, que se recalcula conforme o recorte aplicado."
        },
        "diferencaGabarito": "A dimensão responde por qual recorte; a medida responde quanto. Trocar uma pela outra quebra o modelo e o gabarito."
      },
      {
        "tema": "Power BI Desktop x serviço em nuvem",
        "a": {
          "rotulo": "Power BI Desktop",
          "texto": "Aplicação de autoria para conectar, modelar e montar o painel; é o recurso de criação usado localmente."
        },
        "b": {
          "rotulo": "Serviço em nuvem",
          "texto": "Publicação e compartilhamento do painel; o uso depende de licença conforme o plano ou a versão contratada."
        },
        "diferencaGabarito": "O Desktop cria localmente; o serviço distribui em nuvem e está sujeito a licenciamento. Dois papéis, dois regimes de custo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'O Power BI Desktop já inclui a publicação corporativa em nuvem sem qualquer licença.'",
        "porqueErrada": "O Desktop é o recurso de autoria, mas a publicação e o compartilhamento no serviço em nuvem seguem o regime de licença do plano ou da versão contratada.",
        "versaoCorreta": "Errado. A autoria no Desktop é um recurso próprio; a distribuição no serviço em nuvem depende de licença, cujo escopo varia com o plano e a versão vigentes."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'No Power Query, as transformações precisam ser refeitas manualmente a cada atualização dos dados.'",
        "porqueErrada": "O Power Query registra os passos como script e reexecuta a mesma sequência na atualização, sem retrabalho manual.",
        "versaoCorreta": "Errado. O Power Query guarda os passos de extração e transformação e os reexecuta na atualização; o processo é reproduzível, não manual."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Em DAX, a média calculada linha a linha é sempre igual à média do agregado.'",
        "porqueErrada": "A média por linha, obtida dividindo faturamento por quantidade em cada linha, e a média agregada, obtida pelo quociente das somas, só coincidem quando todas as quantidades se igualam; com volumes variáveis, divergem.",
        "versaoCorreta": "Errado. Média linha a linha e média agregada diferem quando os volumes variam; a agregação correta soma o numerador e o denominador antes de dividir."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Power BI como plataforma de análise e visualização, com autoria local e serviço em nuvem",
        "Power Query como preparação de dados com passos registrados e reexecutáveis",
        "DAX como linguagem de fórmulas para medidas e colunas calculadas",
        "Dimensão como atributo descritivo de contexto",
        "Medida como valor numérico agregável recalculado por filtro"
      ],
      "regras": [
        "A autoria no Desktop é gratuita; a publicação no serviço em nuvem depende de licença",
        "Medida soma o numerador e o denominador antes de dividir: ticket médio é a soma do faturamento dividida pela soma da quantidade",
        "O contexto de filtro redefine o conjunto de linhas e altera o valor da medida"
      ],
      "comparacoes": [
        "Dimensão dá o recorte e a medida dá o quanto; a primeira agrupa, a segunda agrega"
      ],
      "fluxos": [
        "Conectar a origem, transformar no Power Query, carregar no modelo, criar a medida e aplicar o filtro no painel"
      ],
      "excecoes": [
        "Publicação e compartilhamento dependem do plano e da versão, não só da ferramenta",
        "Medida que divide por valor zero ou vazio precisa de tratamento, sob risco de resultado indefinido"
      ],
      "palavrasChave": [
        "Power BI",
        "Power Query",
        "DAX",
        "dimensão",
        "medida",
        "contexto de filtro",
        "agregação"
      ],
      "checklist": [
        "Separei o que é autoria, no Desktop, do que é distribuição, em nuvem?",
        "Identifiquei quais colunas são dimensão e quais são medidas?",
        "Soube se o caso exige somar antes de dividir?",
        "Declarei o recorte, isto é, o contexto de filtro, ao reportar a medida?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em que etapa do fluxo o Power Query atua e o que acontece com as transformações quando a consulta é atualizada?",
        "dados": "Origem: planilha de vendas com as colunas Data, Loja, Produto, Faturamento e Quantidade. A consulta remove linhas vazias e padroniza o nome das lojas. O painel exibe o total de faturamento por loja.",
        "conceitos": [
          "Power Query como etapa de extração, transformação e carga",
          "Passos de consulta registrados e reexecutáveis"
        ],
        "estrategia": "Localizar o Power Query no início do fluxo, antes do modelo, e verificar que as transformações são passos salvos na consulta e reaplicados a cada atualização dos dados de origem.",
        "execucao": [
          "Conectar a planilha de vendas como origem",
          "Remover linhas vazias e padronizar os nomes das lojas no editor de consultas",
          "Carregar o resultado já tratado para o modelo",
          "Atualizar a consulta e observar que os mesmos passos se reexecutam",
          "Montar o painel sobre os dados tratados"
        ],
        "resultado": "O Power Query atua entre a origem e o modelo: as transformações são passos registrados na consulta e se repetem automaticamente quando os dados são atualizados, sem retrabalho manual a cada carga.",
        "justificativa": "O fluxo é origem, Power Query, modelo e painel. Como os passos ficam gravados na consulta, atualizar a origem reproduz o mesmo tratamento; confundir essa etapa com ajuste manual levaria a refazer o trabalho em cada atualização.",
        "errosFrequentes": [
          "Descrever o Power Query como camada de visualização de painel, confundindo-o com a apresentação",
          "Achar que a transformação se perde ao atualizar e precisa ser refeita manualmente"
        ],
        "variacao": "Se a origem passar a ser um banco de dados em vez de uma planilha, o papel do Power Query não muda: mudam o conector e o volume, mas os passos registrados continuam sendo reexecutados na atualização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Escreva a medida de ticket médio sobre as colunas Faturamento e Quantidade de uma tabela de vendas e diga por que somar antes de dividir importa.",
        "dados": "Tabela de vendas com duas linhas: linha 1 com faturamento 200 e quantidade 2; linha 2 com faturamento 900 e quantidade 3. Totais: faturamento 1.100 e quantidade 5.",
        "conceitos": [
          "Medida agregada em linguagem de BI",
          "Diferença entre média por linha e razão de somas ponderada pelo volume"
        ],
        "estrategia": "Definir a medida como razão de duas somas, calcular o resultado agregado e compará-lo com a média das razões de cada linha e com a divisão do total pela contagem de linhas, expondo as diferenças.",
        "execucao": [
          "Definir a medida como soma do faturamento dividida pela soma da quantidade",
          "Somar o faturamento: 200 mais 900 é igual a 1.100",
          "Somar a quantidade: 2 mais 3 é igual a 5",
          "Calcular o ticket: 1.100 dividido por 5 é igual a 220",
          "Confrontar com a média das razões por linha, 200, e com a divisão pela contagem de linhas, 550"
        ],
        "resultado": "O ticket médio é 1.100 dividido por 5, igual a 220. A média das razões por linha daria 200 e a divisão pela contagem de linhas, 550; só a razão de somas respeita o volume vendido.",
        "justificativa": "O ticket é o faturamento por unidade vendida, e a unidade é a soma das quantidades: 1.100 dividido por 5 dá 220. Somar o numerador e o denominador antes de dividir evita tanto a média das razões por linha, que ignora o volume, quanto a divisão pela contagem de linhas, que trata volumes diferentes como iguais.",
        "errosFrequentes": [
          "Dividir o total de faturamento pela contagem de linhas, obtendo 550, e ignorar os volumes",
          "Calcular a média das razões de cada linha, obtendo 200, e perder a ponderação pelo volume",
          "Trocar numerador e denominador e reportar unidades por real em vez de reais por unidade"
        ],
        "variacao": "Se a segunda linha tivesse faturamento 300 e quantidade 3, o ticket seria 500 dividido por 5, igual a 100, coincidindo com a média das razões, porque as duas linhas teriam o mesmo valor unitário."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Em DAX, a média calculada linha a linha é sempre igual à média agregada.' Avalie a afirmação com uma tabela de duas linhas.",
        "dados": "Linha 1 com faturamento 200 e quantidade 2, isto é, 100 por unidade; linha 2 com faturamento 900 e quantidade 3, isto é, 300 por unidade. Média das razões por linha: 200; razão de somas: 1.100 dividido por 5, igual a 220.",
        "conceitos": [
          "Média de médias como leitura incorreta",
          "Ponderação pelo volume na agregação"
        ],
        "estrategia": "Comparar os dois modos de cálculo no mesmo conjunto e mostrar que só coincidem quando todas as linhas têm o mesmo volume ou o mesmo valor unitário.",
        "execucao": [
          "Calcular a média das razões por linha: soma de 100 e 300 dividida por 2, igual a 200",
          "Calcular a razão de somas: soma de 200 e 900 dividida pela soma de 2 e 3, isto é, 1.100 dividido por 5, igual a 220",
          "Comparar os resultados: 200 contra 220, diferença de 20",
          "Identificar a causa: as linhas têm volumes diferentes, 2 e 3",
          "Concluir que a igualdade só vale quando os volumes ou os valores unitários se igualam"
        ],
        "resultado": "Errado. A média das razões por linha, 200, difere da média agregada, 220, porque as linhas têm volumes diferentes; a igualdade só ocorreria se os volumes fossem iguais ou se cada linha tivesse o mesmo valor unitário.",
        "justificativa": "A média linha a linha dá o mesmo peso a cada linha, enquanto a média agregada pondera pelo volume: com 2 e 3 unidades, os totais 1.100 e 5 levam a 220. Como a afirmação diz sempre, basta um caso de volumes diferentes para refutá-la.",
        "errosFrequentes": [
          "Aceitar a igualdade porque as duas fórmulas parecem medir faturamento por quantidade",
          "Calcular apenas uma das leituras e não confrontar os resultados",
          "Atribuir a diferença de 20 a erro nos dados, em vez de reconhecer a ponderação pelo volume"
        ],
        "variacao": "Se cada linha correspondesse a uma unidade, com quantidade 1 nas duas, as médias linha a linha e agregada coincidiriam; basta o volume variar para que a leitura ingênua falhe."
      }
    ]
  },
  "m8-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Tableau e Looker Studio ocupam papéis parecidos, visualizar e publicar dados, mas diferem no modelo de acesso: o Tableau Public publica em área aberta, enquanto uma edição comercial permite publicação controlada, e o Looker Studio funciona no navegador ligado a conectores. A prova cobra essa distinção de edições e o cenário de uso, e trocá-las altera o gabarito.",
      "preRequisitos": [
        "Conceitos de visualização de dados e de painel",
        "Noção de Business Intelligence",
        "Ideia de dado pessoal e de controle de acesso"
      ],
      "objetivosObservaveis": [
        "Descrever Tableau Desktop, Tableau Public, Tableau Prep e Looker Studio pelo papel de cada um",
        "Comparar as ferramentas por modelo de acesso, preparação de dados e publicação",
        "Recomendar a edição adequada a um cenário com dado sensível ou com dado fictício"
      ],
      "competencias": [
        "Análise comparativa de ferramentas de BI",
        "Escolha de ferramenta orientada por governança e por finalidade do dado",
        "Leitura crítica dos limites das edições gratuitas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u4-t1-s1 (Power BI, Power Query e DAX em nível conceitual) — outra família de ferramentas comparada na mesma unidade",
        "m8-u4-t4-s1 (Critérios de comparação e cenários de uso) — sistematiza os critérios de escolha",
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — fundamenta o cuidado com a publicação pública de dado pessoal"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Ferramentas de visualização e a distinção entre edições gratuitas e comerciais integram o conteúdo programático de TI e de dados, em itens que pedem associar a ferramenta ao seu modelo de publicação e de acesso."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: identificar as ferramentas e suas edições. O Tableau Desktop é a edição comercial de autoria; o Tableau Public é gratuito e publica em área aberta; o Tableau Prep cuida da preparação dos dados; o Looker Studio é gratuito e funciona no navegador, ligado a conectores de fontes.",
      "intermediario": "Nível intermediário: comparar recursos e limitações. O Tableau oferece forte interação visual e preparação de dados; o Looker Studio é acessível pelo navegador e depende de conectores. A limitação decisiva é a publicação: a edição gratuita do Tableau expõe os dados publicamente, o que a torna inadequada para dado sensível.",
      "avancado": "Nível avançado: escolher a ferramenta conforme o cenário. Dado sensível exige publicação controlada e registro de acesso, o que aponta para edição licenciada; painel simples sobre planilha, sem instalação e sem custo inicial, aponta para ferramenta de navegador com conector de planilha. A escolha começa pelo dado, não pelo gráfico.",
      "especialista": "Nível especialista: avaliar governança e integração. Verificar quem publica, quem acessa, como o acesso é registrado, como o painel é versionado e de que conector a fonte depende. Recursos de edição e limites de atualização variam com plano e versão, de modo que a comparação precisa declarar edição, versão e data."
    },
    "comparacoes": [
      {
        "tema": "Tableau Desktop x Tableau Public",
        "a": {
          "rotulo": "Tableau Desktop",
          "texto": "Edição comercial de autoria, que permite publicar sob o controle de acesso da organização."
        },
        "b": {
          "rotulo": "Tableau Public",
          "texto": "Edição gratuita cuja publicação ocorre em área acessível publicamente."
        },
        "diferencaGabarito": "A diferença está no regime de publicação: a edição comercial permite controlar o acesso; a gratuita publica em aberto e, por isso, não serve a dado sensível."
      },
      {
        "tema": "Tableau x Looker Studio quanto ao modelo de uso",
        "a": {
          "rotulo": "Tableau",
          "texto": "Família com foco em visualização interativa e preparação de dados, com edição gratuita de publicação aberta."
        },
        "b": {
          "rotulo": "Looker Studio",
          "texto": "Painel em navegador, de uso gratuito, que se liga a fontes por conectores."
        },
        "diferencaGabarito": "O Looker Studio prioriza o acesso pelo navegador e os conectores; o Tableau prioriza a exploração visual, com a limitação de a versão gratuita exigir publicação pública."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'A edição gratuita de qualquer ferramenta de BI atende igualmente um órgão com dados sensíveis.'",
        "porqueErrada": "Edições gratuitas costumam limitar publicação, controle de acesso e auditoria, ou exigir área pública. Para dado sensível, o critério é governança e controle de acesso, nem sempre presentes na edição gratuita.",
        "versaoCorreta": "Errado. O critério para dado sensível é governança e controle de acesso, não o preço; a edição gratuita que publica em área aberta é incompatível com esse requisito."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O Tableau Public permite publicar um painel de forma restrita, visível apenas à equipe.'",
        "porqueErrada": "A edição gratuita publica em área acessível a qualquer pessoa; a publicação restrita exige edição licenciada ou serviço com controle de acesso.",
        "versaoCorreta": "Errado. O Tableau Public publica em área aberta; painel de acesso restrito exige edição ou serviço com controle de acesso."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O Looker Studio exige instalação local e licença por servidor para funcionar.'",
        "porqueErrada": "O Looker Studio funciona no navegador e se liga a fontes por conectores; não exige instalação local nem licença por servidor.",
        "versaoCorreta": "Errado. O Looker Studio opera no navegador, conectado a fontes por conectores; não se apoia em instalação local nem em licença por servidor."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tableau Desktop como edição comercial de autoria",
        "Tableau Public como edição gratuita com publicação em área aberta",
        "Tableau Prep como etapa de preparação de dados",
        "Looker Studio como painel em navegador ligado a conectores",
        "Governança como controle de acesso, registro e versionamento do painel"
      ],
      "regras": [
        "Publicação pública não combina com dado pessoal ou sensível",
        "A escolha da edição decorre do regime de publicação exigido pelo dado",
        "Comparações de recursos devem declarar edição, versão e data"
      ],
      "comparacoes": [
        "A edição gratuita reduz o custo e amplia a exposição; a licenciada amplia o controle e o custo"
      ],
      "fluxos": [
        "Definir a finalidade e a sensibilidade do dado, escolher a edição, conectar a fonte, preparar os dados e publicar com o controle de acesso exigido"
      ],
      "excecoes": [
        "Dados fictícios e rotulados como tal admitem publicação aberta",
        "Limites de atualização e de conectores variam com o plano e a versão"
      ],
      "palavrasChave": [
        "Tableau",
        "Tableau Public",
        "Tableau Prep",
        "Looker Studio",
        "publicação",
        "governança",
        "conector",
        "dado sensível"
      ],
      "checklist": [
        "A publicação fica aberta ou controlada?",
        "O painel trata dado pessoal ou sensível?",
        "Declarei edição, versão e data da comparação?",
        "Sei quem terá acesso ao painel?",
        "A fonte está protegida conforme a política do dado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um analista quer publicar um painel com dados de servidores, que são dados pessoais. Tableau Public ou uma edição com publicação controlada?",
        "dados": "Painel com nome, cargo e lotação de servidores; a base reúne dados pessoais; a intenção é compartilhar o painel com a equipe de gestão de pessoas, não com o público.",
        "conceitos": [
          "Publicação pública e publicação controlada",
          "Dado pessoal e necessidade de controle de acesso"
        ],
        "estrategia": "Começar pela natureza do dado: sendo pessoal, o requisito é acesso restrito, o que elimina a edição gratuita que publica em área aberta e aponta para a publicação controlada.",
        "execucao": [
          "Classificar o dado como pessoal",
          "Verificar o regime de publicação de cada opção",
          "Descartar a edição cuja publicação é aberta",
          "Escolher edição ou serviço com controle de acesso",
          "Registrar a justificativa da escolha"
        ],
        "resultado": "A publicação controlada. Como o dado é pessoal, a edição gratuita que publica em área aberta é incompatível; a alternativa é a autoria local com publicação em ambiente sob controle de acesso.",
        "justificativa": "O critério não é o custo nem a aparência do gráfico, e sim quem pode ver o dado: dados de servidores exigem acesso restrito, e só a publicação controlada atende. Publicar em área aberta violaria a proteção devida ao dado pessoal.",
        "errosFrequentes": [
          "Escolher a edição gratuita por economia, sem considerar a exposição do dado",
          "Presumir que o painel ficará restrito por padrão em qualquer edição"
        ],
        "variacao": "Se os dados fossem fictícios e rotulados como demonstração, a publicação aberta seria aceitável e a edição gratuita passaria a ser a escolha natural."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma escola quer um painel simples ligado a uma planilha, acessível no navegador, sem instalação e sem custo inicial. Qual caminho de ferramenta e quais cuidados?",
        "dados": "Painel com indicadores de matrícula por série, a partir de uma planilha mantida pela secretaria; uso interno, sem instalação local; orçamento inicial zero.",
        "conceitos": [
          "Ferramenta de painel em navegador com conector de planilha",
          "Cuidados com o acesso, com a fonte e com o compartilhamento"
        ],
        "estrategia": "Casar o requisito, que é navegador, sem instalação e custo zero, com o perfil da ferramenta e, em seguida, tratar os cuidados de acesso e de proteção da planilha de origem.",
        "execucao": [
          "Selecionar ferramenta de painel em navegador com conector de planilha",
          "Conectar a planilha da secretaria",
          "Definir quem terá acesso ao painel",
          "Proteger a planilha de origem e restringir seu compartilhamento",
          "Confirmar as regras de conexão e de compartilhamento da conta usada"
        ],
        "resultado": "Uma ferramenta de painel em navegador com conector de planilha, como o Looker Studio, atende ao perfil. Os cuidados são definir o acesso, proteger a planilha e observar as regras de conexão e de compartilhamento da conta.",
        "justificativa": "O requisito de acesso pelo navegador, sem instalação e sem custo inicial, coincide com o perfil de uma ferramenta web ligada a fontes por conector. Ainda assim, o acesso e a fonte precisam de tratamento, porque o custo zero da licença não elimina o risco do dado exposto.",
        "errosFrequentes": [
          "Deixar a planilha de origem aberta a qualquer pessoa com o link",
          "Ignorar as regras de conexão e de compartilhamento da conta usada"
        ],
        "variacao": "Se o painel passasse a exibir dado pessoal de alunos, o requisito de acesso restrito exigiria controle de acesso e revisão do compartilhamento antes da publicação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o Looker Studio é gratuito, ele é a escolha correta para qualquer painel institucional, inclusive com dados de saúde.' Avalie a afirmação.",
        "dados": "Painel institucional com dados de saúde; ferramenta gratuita de navegador com conectores; necessidade de controlar quem acessa e de registrar o acesso.",
        "conceitos": [
          "Custo como critério insuficiente",
          "Controle de acesso e registro como requisito de governança"
        ],
        "estrategia": "Separar custo de governança: verificar se a ferramenta gratuita sustenta controle de acesso e registro e, se não sustentar, recusar o critério do preço zero.",
        "execucao": [
          "Identificar a sensibilidade do dado de saúde",
          "Listar os requisitos: controle de acesso e registro de quem consulta",
          "Verificar se a edição gratuita satisfaz esses requisitos",
          "Concluir que o custo zero não supre a governança exigida",
          "Recomendar ferramenta com controle de acesso e justificativa registrada"
        ],
        "resultado": "Errado. O custo zero da ferramenta não substitui controle de acesso e registro; para dado de saúde, esses requisitos prevalecem sobre a economia de licença, e a escolha deve ser justificada no processo.",
        "justificativa": "A afirmação troca o critério e confunde gratuidade com adequação. Dado de saúde exige governança, e uma ferramenta gratuita pode limitar controle de acesso ou auditoria; sem esses recursos, a escolha correta é a que os oferece, ainda que licenciada.",
        "errosFrequentes": [
          "Adotar a ferramenta pelo preço e só depois verificar requisitos de acesso",
          "Tratar a gratuidade como prova de conformidade com a proteção de dados"
        ],
        "variacao": "Se o painel usasse apenas dados fictícios de teste, o custo zero voltaria a pesar e a ferramenta gratuita seria defensável, desde que o caráter fictício fosse declarado."
      }
    ]
  }
};
