const enriParcialM1U3P5 = {
  "modulo-1-unidade-3-topico-5-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova de informática de concursos apresenta cenários de planilha e pergunta qual recurso resolve cada situação: restringir a entrada a uma lista suspensa (validação de dados), destacar valores acima de um limite (formatação condicional) ou ordenar por duas colunas sem desalinhar registros (classificação por níveis). Confundir validação (controle de entrada) com formatação condicional (apenas aparência), ou acreditar que o filtro exclui dados, inverte o gabarito. Dominar esses quatro mecanismos evita erros em itens de múltipla escolha e de certo ou errado sobre integridade de dados.",
      "preRequisitos": [
        "Estrutura de intervalos de células e cabeçalho de coluna (tópico 1)",
        "Noção de linha de registro e coluna de atributo"
      ],
      "objetivosObservaveis": [
        "Ordenar por múltiplos níveis sem fragmentar o intervalo de registros",
        "Aplicar um filtro e explicar que as linhas ocultas permanecem nos dados",
        "Configurar validação de dados com alerta de erro estilo Parar",
        "Criar regra de formatação condicional por valor com preenchimento de cor"
      ],
      "competencias": [
        "Organização de dados em planilhas eletrônicas",
        "Controle de qualidade de entrada de dados",
        "Diferenciar controle de entrada, organização de leitura e comunicação visual de padrões"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-5-sub-2 (Gráficos, tabelas dinâmicas, campos, agregações e segmentações)",
        "modulo-1-unidade-3-topico-1-sub-2 (Tabelas estruturadas e referências estruturadas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação, filtros, validação de dados e formatação condicional integram o conteúdo programático de informática para concursos porque testam a diferença entre controlar a entrada (validação), organizar a exibição (filtro e classificação) e comunicar padrões visualmente (formatação condicional). Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Neste nível o aluno aprende a ordenar uma única coluna com o intervalo completo selecionado, aplicando critério crescente ou decrescente, e a usar o AutoFiltro (Dados > Filtro) para ocultar linhas que não casam com o critério escolhido. O aluno entende que o filtro altera apenas a exibição: os dados permanecem na planilha e cálculos como SOMA continuam considerando as linhas ocultas. Também conhece a validação de dados como recurso que restringe a digitação (lista suspensa, número, data) e a formatação condicional como camada visual que muda cor, ícone ou barra sem alterar o valor da célula.",
      "intermediario": "O aluno ordena por múltiplos níveis (ex.: Região crescente e, dentro dela, Valor decrescente) selecionando a região completa para evitar desalinhamento de registros. Aplica validação de dados por lista suspensa com alerta de erro estilo Parar, que bloqueia digitação manual inválida, e cria regras de formatação condicional (Maior que 7 → verde; Menor que 5 → vermelho) que reavaliam dinamicamente a cor quando o valor muda. Entende que colar um valor pode contornar a validação, de modo que o bloqueio definitivo exige proteção de planilha associada.",
      "avancado": "O aluno diferencia com precisão os quatro recursos: validação controla o que entra na célula; classificação e filtro reorganizam a leitura; formatação condicional comunica padrões visualmente. Explica por que SOMA/MÉDIA continuam contando linhas filtradas (exibição ≠ exclusão) e por que a ordenação de coluna isolada desalinha registros (erro clássico de integridade). Usa escalas de cores para mapa de calor e identifica quando a validação foi contornada por colagem de valores, propondo proteção de planilha como camada adicional.",
      "especialista": "O aluno projeta uma política de qualidade de entrada que combina validação de dados (lista, intervalo, alerta Parar), proteção de planilha contra colagem não autorizada e conferência periódica de integridade. Diagnostica intervalos desalinhados causados por ordenação parcial e define convenções de nomeação de colunas e regras de formatação condicional consistentes entre planilhas. Avalia o escopo do simulador do projeto, que não executa esses recursos de interface (limitação declarada), e delimita o conteúdo teórico exigido em prova da prática em ambiente real do Excel."
    },
    "comparacoes": [
      {
        "tema": "Validação de dados versus formatação condicional",
        "a": {
          "rotulo": "Validação de dados",
          "texto": "Restringe o que pode ser digitado na célula (lista suspensa, número, data, tamanho de texto ou fórmula personalizada) e exibe alerta de erro; com estilo Parar bloqueia a entrada manual inválida."
        },
        "b": {
          "rotulo": "Formatação condicional",
          "texto": "Altera apenas a aparência (preenchimento, cor de fonte, ícone, barra, escala de cores) conforme regra sobre os valores; não restringe entrada e não altera o valor armazenado."
        },
        "diferencaGabarito": "No item que pergunta 'qual recurso impede digitar valor fora da lista', o gabarito é validação de dados, porque formatação condicional apenas destaca visualmente e nunca bloqueia a entrada."
      },
      {
        "tema": "Filtro (AutoFiltro) versus exclusão de linhas",
        "a": {
          "rotulo": "Filtro (AutoFiltro)",
          "texto": "Insere setas no cabeçalho (Dados > Filtro) e oculta as linhas que não casam com o critério; os dados continuam na planilha, apenas fora da exibição."
        },
        "b": {
          "rotulo": "Exclusão de linhas",
          "texto": "Remove fisicamente as linhas da planilha, de modo que os dados deixam de existir no intervalo e não são considerados em nenhum cálculo."
        },
        "diferencaGabarito": "No item que afirma 'o filtro apaga as linhas que não casam', a afirmação está errada: o filtro oculta na exibição, os dados permanecem e somas comuns continuam incluindo as linhas ocultas."
      },
      {
        "tema": "Ordenar região completa versus coluna isolada",
        "a": {
          "rotulo": "Ordenar região completa",
          "texto": "Selecionar todas as colunas do registro antes de classificar mantém os campos de cada linha alinhados (Região, Valor, Data viajam juntos)."
        },
        "b": {
          "rotulo": "Ordenar coluna isolada",
          "texto": "Selecionar apenas uma coluna para classificar reordena só ela, desalinhando os registros (nomes saem dos seus valores) — erro clássico de integridade de dados."
        },
        "diferencaGabarito": "O gabarito indica ordenar a região completa (ou deixar o Excel detectar a região circundante); ordenar coluna única corrompe o alinhamento dos registros."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A validação de dados impede a digitação de valores inválidos na célula em qualquer circunstância.",
        "porqueErrada": "O termo 'sempre' ou 'em qualquer circunstância' é absoluto e falso: a validação controla a digitação manual e, com alerta de erro estilo Parar, bloqueia a entrada inválida digitada, mas colar um valor sobre a célula pode contornar a validação.",
        "versaoCorreta": "A validação de dados controla a digitação manual (com alerta de erro configurável, ex.: estilo Parar), mas colar um valor sobre a célula pode contorná-la; o bloqueio definitivo exige proteção de planilha e governança adicional."
      },
      {
        "afirmacaoEquivocada": "A formatação condicional altera o valor armazenado na célula quando a regra é satisfeita.",
        "porqueErrada": "Confunde aparência com conteúdo: a formatação condicional muda cor, ícone ou barra de acordo com o valor, mas o número ou texto armazenado na célula permanece exatamente igual.",
        "versaoCorreta": "A formatação condicional altera apenas a aparência (cor, ícone, barra); o valor armazenado na célula não muda, mesmo que o formato visual seja atualizado dinamicamente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Classificação (Ordenar) com níveis",
        "AutoFiltro e ocultação de linhas",
        "Validação de dados e lista suspensa",
        "Alerta de erro (estilos Parar/Aviso/Informação)",
        "Formatação condicional e escala de cores"
      ],
      "regras": [
        "Entrada controlada → validação de dados",
        "Leitura parcial → filtro (oculta, não exclui)",
        "Padrão visual → formatação condicional",
        "Reordenação → ordenar região completa por níveis"
      ],
      "comparacoes": [
        "Validação restringe entrada; formatação condicional só muda aparência.",
        "Filtro oculta linhas na exibição; não exclui dados nem remove-os de cálculos comuns."
      ],
      "fluxos": [
        "Selecionar intervalo → Dados > Classificar → definir níveis → OK",
        "Selecionar intervalo → Dados > Validação de Dados → lista/fonte → alerta Parar → OK",
        "Selecionar notas → Início > Formatação Condicional > Maior que → cor → OK"
      ],
      "excecoes": [
        "Colar um valor pode contornar a validação de dados.",
        "SOMA/MÉDIA continuam contando linhas filtradas (exibição ≠ exclusão).",
        "Formatação condicional não altera o valor da célula.",
        "O simulador do projeto não executa esses recursos de interface."
      ],
      "palavrasChave": [
        "ordenar",
        "filtro",
        "validação",
        "lista suspensa",
        "alerta de erro",
        "formatação condicional",
        "escala de cores"
      ],
      "checklist": [
        "Ordeno por níveis sem desalinhar registros",
        "Aplico filtro explicando que as linhas ocultas permanecem",
        "Configuro validação com alerta de erro estilo Parar",
        "Crio regras de formatação condicional que não alteram valores"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Validar a coluna Status de uma planilha de aprovação para que só aceite Aprovado, Reprovado ou Pendente, bloqueando qualquer outro texto digitado manualmente.",
        "dados": "Coluna Status; valores permitidos: Aprovado; Reprovado; Pendente; caminho: Dados > Validação de Dados > Permitir: Lista > Fonte.",
        "conceitos": [
          "Validação de dados",
          "Lista suspensa",
          "Alerta de erro estilo Parar"
        ],
        "estrategia": "Configurar a validação por lista com os três valores permitidos e definir na guia Alerta de Erro o estilo Parar, de modo que digitações fora da lista sejam rejeitadas com mensagem.",
        "execucao": [
          "Selecionar o intervalo da coluna Status",
          "Abrir Dados > Validação de Dados",
          "Escolher Permitir: Lista e digitar Fonte: Aprovado;Reprovado;Pendente",
          "Ir à guia Alerta de Erro, marcar estilo Parar e confirmar OK"
        ],
        "resultado": "A célula passa a exibir uma lista suspensa com Aprovado, Reprovado e Pendente; digitar qualquer outro valor aciona o alerta Parar e bloqueia a entrada.",
        "justificativa": "O gabarito é validação de dados porque esse recurso restringe a entrada na célula; o alerta Parar impede a digitação manual inválida, enquanto listar os valores garante que apenas os três status esperados sejam aceitos.",
        "errosFrequentes": [
          "Esquecer de marcar o alerta de erro estilo Parar, deixando aceitar digitação fora da lista",
          "Confundir validação com formatação condicional, que apenas destaca visualmente e não bloqueia entrada"
        ],
        "variacao": "Validar uma coluna de data para aceitar apenas datas entre 01/01/2024 e 31/12/2024, com alerta de erro ao digitar data fora do intervalo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma tabela de notas de 80 alunos, destacar em verde as notas acima de 7 e em vermelho as notas abaixo de 5, sem alterar os valores armazenados nas células.",
        "dados": "Intervalo de notas (ex.: B2:B81); regras: maior que 7 → preenchimento verde; menor que 5 → preenchimento vermelho; caminho: Início > Formatação Condicional > Regras de Realce de Células.",
        "conceitos": [
          "Formatação condicional",
          "Regra de realce de células",
          "Aparência versus valor armazenado"
        ],
        "estrategia": "Selecionar o intervalo de notas, criar duas regras independentes (maior que 7 verde, menor que 5 vermelho) e confirmar que a cor acompanha o valor quando uma nota é corrigida, sem alterar o número da célula.",
        "execucao": [
          "Selecionar o intervalo de notas (ex.: B2:B81)",
          "Abrir Início > Formatação Condicional > Regras de Realce de Células",
          "Criar regra Maior que 7 com preenchimento verde e confirmar OK",
          "Repetir com regra Menor que 5 com preenchimento vermelho e confirmar OK"
        ],
        "resultado": "As notas acima de 7 aparecem com preenchimento verde e as abaixo de 5 com vermelho; alterar uma nota faz a cor ser reavaliada dinamicamente, enquanto o valor numérico armazenado permanece inalterado.",
        "justificativa": "O resultado está correto porque a formatação condicional é uma camada visual que muda a aparência conforme regra, sem restringir entrada nem modificar o valor da célula, exatamente o exigido pelo problema.",
        "errosFrequentes": [
          "Acreditar que a cor sobrescreve o valor numérico da célula",
          "Aplicar a regra a uma única célula em vez de todo o intervalo, deixando notas fora do padrão sem formatação"
        ],
        "variacao": "Destacar em azul as notas iguais a 10 e em amarelo as notas entre 5 e 7, usando regras adicionais de formatação condicional no mesmo intervalo."
      },
      {
        "tipo": "erro",
        "problema": "Uma planilha de 500 registros deve ser ordenada por Região (A-Z) e, dentro de cada região, por Valor (decrescente); o usuário ordena apenas a coluna Valor e afirma que o resultado está correto.",
        "dados": "Intervalo com 500 registros e colunas Região e Valor (entre outras); ação incorreta: ordenar somente a coluna Valor decrescente; ação correta: ordenar região completa com nível 1 Região crescente e nível 2 Valor decrescente.",
        "conceitos": [
          "Classificação por múltiplos níveis",
          "Ordenar região completa",
          "Integridade de registros"
        ],
        "estrategia": "Selecionar toda a região (todas as colunas dos registros) e aplicar classificação com dois níveis: Região crescente primeiro, Valor decrescente segundo, de modo que cada registro mantenha seus campos alinhados.",
        "execucao": [
          "Selecionar a região completa dos 500 registros (todas as colunas)",
          "Abrir Dados > Classificar",
          "Definir nível 1: Região, ordem crescente",
          "Adicionar nível: Valor, ordem decrescente",
          "Confirmar OK e conferir que cada Região mantém seus Valores alinhados"
        ],
        "resultado": "Os registros ficam agrupados por Região em ordem alfabética e, dentro de cada região, ordenados por Valor decrescente, com todas as colunas de cada linha mantidas alinhadas aos respectivos registros.",
        "justificativa": "O gabarito exige ordenar a região completa com múltiplos níveis; ordenar só a coluna Valor desalinharia os registros, fazendo nomes saírem dos seus valores, o que corrompe a integridade dos dados.",
        "errosFrequentes": [
          "Ordenar apenas a coluna Valor, desalinhando registros (erro clássico de integridade)",
          "Acreditar que o Excel reajusta automaticamente as outras colunas após ordenar uma coluna isolada"
        ],
        "variacao": "Ordenar uma lista de funcionários por Departamento (A-Z) e, dentro de cada departamento, por Salário (decrescente), selecionando toda a tabela antes de classificar."
      }
    ]
  },
  "modulo-1-unidade-3-topico-5-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova de informática de concursos apresenta cenários de resumo de dados e pergunta qual recurso resolve cada situação: visualizar valores (gráfico), resumir e reorganizar dados por campos com agregações (tabela dinâmica) ou filtrar visualmente com um clique (segmentação). Também cobra o comportamento operacional decisivo de que a tabela dinâmica é um resumo materializado e não se recalcula sozinha ao mudar a fonte — é preciso atualizar manualmente. Confundir tabela dinâmica com gráfico, ou prometer atualização automática, inverte o gabarito de itens de múltipla escolha e de certo ou errado.",
      "preRequisitos": [
        "Estrutura de dados do Excel (intervalos e tabelas estruturadas, tópico 1)",
        "Funções de agregação (SOMA, MÉDIA, CONTAGEM, tópico 3)"
      ],
      "objetivosObservaveis": [
        "Montar uma tabela dinâmica atribuindo campos às quatro áreas (Linhas, Colunas, Valores, Filtros)",
        "Escolher a agregação adequada (soma, média, contagem) conforme a questão",
        "Usar segmentação de dados para filtrar a tabela dinâmica com botões",
        "Explicar que a tabela dinâmica exige atualização manual após alterar a fonte"
      ],
      "competencias": [
        "Resumo analítico de dados",
        "Leitura de painéis e dashboards",
        "Diferenciar representação visual (gráfico) de resumo interativo (tabela dinâmica)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-5-sub-1 (Classificação, filtros, validação de dados e formatação condicional)",
        "m8-u1-t3-s1 (Ruído visual, chartjunk e integridade gráfica) — escolha do gráfico e integridade visual dos dados"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Gráficos, tabelas dinâmicas, campos, agregações e segmentações são objeto de avaliação em questões de informática de concursos porque testam o papel de cada área de campo da tabela dinâmica e a exigência de atualização manual após alterar a fonte. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Neste nível o aluno cria uma tabela dinâmica simples a partir de um intervalo de dados, arrastando um campo categórico para Linhas (ex.: Região) e um campo numérico para Valores (ex.: Valor com agregação SOMA), obtendo o total por categoria. Conhece o gráfico como representação visual dos dados (Inserir > Gráfico: colunas, linhas, pizza, dispersão) e entende que a escolha do tipo depende do objetivo analítico (comparação, evolução temporal, composição, relação), aprofundada no Módulo 8. Também compreende que a tabela dinâmica é um resumo materializado: ao alterar a fonte, ela não se atualiza sozinha e exige Atualizar ou Atualizar Tudo.",
      "intermediario": "O aluno monta uma tabela dinâmica com campos nas quatro áreas — Linhas (categorias verticais), Colunas (categorias horizontais), Valores (agregações numéricas: SOMA, MÉDIA, CONTAGEM) e Filtros (restrição global) — e troca a agregação de soma para média ou contagem conforme necessário. Insere uma segmentação de dados (Slicer) para filtrar a tabela dinâmica por botões, cada um correspondente a um valor do campo, e cria campos calculados com fórmulas sobre campos resumidos (ex.: valor médio por pedido = Valor / Contagem). Declara que o simulador do projeto não executa gráficos, tabelas dinâmicas nem segmentações (limitação documentada no tópico 6).",
      "avancado": "O aluno diferencia gráfico (visualiza valores) de tabela dinâmica (resume e reorganiza dados por campos), sabendo que para 'vendas por região e por mês com filtros' o gabarito é a tabela dinâmica, que pode alimentar o gráfico. Diferencia soma (acumula valores) de contagem (conta registros): para 'quantos pedidos por região', usar soma está errado. Diagnostica uma tabela dinâmica 'desatualizada' após mudança na fonte e executa Atualizar Tudo para recalcular, reconhecendo que o recálculo automático é propriedade de fórmulas comuns, não do resumo materializado.",
      "especialista": "O aluno escolhe entre gráfico direto e gráfico alimentado por tabela dinâmica conforme o cenário de análise, explicando por que o resumo materializado exige disciplina de atualização em relatórios recorrentes. Avalia o escopo do simulador Excel, que cobre funções de cálculo documentadas no tópico 6 e não executa esses recursos de interface, delimitando o conteúdo teórico exigido em prova da prática em ambiente real. Aplica a segmentação também em tabelas estruturadas em versões recentes do Excel, observando que o escopo exato depende da versão."
    },
    "comparacoes": [
      {
        "tema": "Gráfico versus tabela dinâmica",
        "a": {
          "rotulo": "Gráfico",
          "texto": "Representação visual dos dados (Inserir > Gráfico: colunas, linhas, pizza, dispersão); a escolha depende do objetivo analítico (comparação, evolução temporal, composição, relação)."
        },
        "b": {
          "rotulo": "Tabela dinâmica",
          "texto": "Mecanismo de resumo interativo que reorganiza dados arrastando campos para quatro áreas — Linhas, Colunas, Valores e Filtros — com agregações numéricas; pode alimentar um gráfico."
        },
        "diferencaGabarito": "No item que pergunta qual recurso resume dados por campos com agregações como soma, média e contagem, o gabarito é tabela dinâmica; o gráfico apenas visualiza, não resume por campos."
      },
      {
        "tema": "Soma versus contagem como agregação",
        "a": {
          "rotulo": "Soma (SOMA)",
          "texto": "Acumula os valores numéricos dos registros; adequada para 'total de vendas por região'."
        },
        "b": {
          "rotulo": "Contagem (CONTAGEM)",
          "texto": "Conta a quantidade de registros; adequada para 'quantidade de pedidos por região'."
        },
        "diferencaGabarito": "Para exibir 'quantidade de pedidos por região', a agregação correta é contagem, não soma; usar soma para contar registros está errado."
      },
      {
        "tema": "Atualização manual da tabela dinâmica versus recálculo automático de fórmulas",
        "a": {
          "rotulo": "Tabela dinâmica (resumo materializado)",
          "texto": "Não reflete alterações na fonte até receber Atualizar ou Atualizar Tudo; é um resumo materializado que exige ação manual."
        },
        "b": {
          "rotulo": "Fórmulas comuns",
          "texto": "Recalculam automaticamente sempre que os dados de entrada mudam, sem necessidade de intervenção do usuário."
        },
        "diferencaGabarito": "O item que afirma 'a tabela dinâmica atualiza automaticamente ao mudar a fonte' está errado: é necessário atualizar manualmente; o recálculo automático é propriedade das fórmulas, não da tabela dinâmica."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A tabela dinâmica atualiza automaticamente ao mudar a fonte de dados.",
        "porqueErrada": "Generaliza incorretamente o recálculo automático das fórmulas comuns para a tabela dinâmica, que é um resumo materializado e não reflete a fonte até receber Atualizar ou Atualizar Tudo.",
        "versaoCorreta": "A tabela dinâmica não se recalcula sozinha; ao alterar a fonte de dados, é necessário executar Atualizar (ou Atualizar Tudo, quando há várias) para refletir as alterações."
      },
      {
        "afirmacaoEquivocada": "A segmentação de dados funciona apenas em tabelas dinâmicas.",
        "porqueErrada": "O termo 'apenas' é absoluto e falso: em versões recentes do Excel, a segmentação também filtra tabelas estruturadas, de modo que o escopo exato depende da versão instalada.",
        "versaoCorreta": "A segmentação de dados (Slicer) filtra tabelas dinâmicas e, em versões recentes do Excel, também tabelas estruturadas; o escopo exato depende da versão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Gráfico",
        "Tabela dinâmica (PivotTable)",
        "Campos (Linhas, Colunas, Valores, Filtros)",
        "Agregações (SOMA, MÉDIA, CONTAGEM)",
        "Campo calculado",
        "Segmentação de dados (Slicer)",
        "Atualização manual"
      ],
      "regras": [
        "Mudou a fonte → executar Atualizar Tudo",
        "Contagem de registros → agregação contagem",
        "Filtro visual por valor de campo → segmentação de dados",
        "Valor numérico a ser somado → área Valores"
      ],
      "comparacoes": [
        "Gráfico visualiza valores; tabela dinâmica resume e reorganiza dados por campos.",
        "Soma acumula valores; contagem conta registros."
      ],
      "fluxos": [
        "Selecionar dados → Inserir > Tabela Dinâmica → arrastar Região para Linhas e Valor para Valores → OK",
        "Selecionar tabela dinâmica → Inserir Segmentação de Dados → marcar campo → OK",
        "Clicar na tabela dinâmica → Atualizar (ou Dados > Atualizar Tudo) após mudar a fonte"
      ],
      "excecoes": [
        "A tabela dinâmica não recalcula sozinha ao mudar a fonte.",
        "A segmentação também alcança tabelas estruturadas em versões recentes do Excel.",
        "O simulador do projeto não executa gráficos, tabelas dinâmicas nem segmentações."
      ],
      "palavrasChave": [
        "PivotTable",
        "campo",
        "agregação",
        "soma",
        "média",
        "contagem",
        "Slicer",
        "campo calculado",
        "atualizar"
      ],
      "checklist": [
        "Monto tabela dinâmica com as quatro áreas",
        "Escolho a agregação adequada (soma, média, contagem)",
        "Uso segmentação de dados para filtrar visualmente",
        "Explico a atualização manual após mudar a fonte",
        "Declaro o limite do simulador quanto a esses recursos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Criar uma tabela dinâmica que exiba o total de vendas por região a partir de uma lista de vendas.",
        "dados": "Lista de vendas com colunas Região e Valor; caminho: Inserir > Tabela Dinâmica; ação: arrastar Região para Linhas e Valor para Valores com agregação SOMA.",
        "conceitos": [
          "Tabela dinâmica",
          "Campos Linhas e Valores",
          "Agregação SOMA"
        ],
        "estrategia": "Selecionar os dados de origem, inserir uma tabela dinâmica e arrastar o campo Região para a área Linhas e o campo Valor para a área Valores, mantendo a agregação SOMA, para obter o total por região.",
        "execucao": [
          "Selecionar o intervalo de dados de vendas",
          "Abrir Inserir > Tabela Dinâmica e confirmar OK",
          "Arrastar o campo Região para a área Linhas",
          "Arrastar o campo Valor para a área Valores (agregação SOMA)"
        ],
        "resultado": "A matriz resultante exibe o total de vendas por região, com cada região em uma linha e o somatório correspondente na coluna de valores.",
        "justificativa": "O gabarito está correto porque a tabela dinâmica resume dados por campos: Região organiza as categorias verticais e Valor com SOMA acumula os valores, produzindo o total por região exatamente como solicitado.",
        "errosFrequentes": [
          "Esquecer de selecionar todos os dados de origem antes de inserir a tabela dinâmica",
          "Deixar o campo Valor com agregação padrão incorreta para o objetivo de totalização"
        ],
        "variacao": "Criar uma tabela dinâmica que exiba a média do valor por região, trocando a agregação do campo Valor de SOMA para MÉDIA."
      },
      {
        "tipo": "aplicacao",
        "problema": "A diretoria quer filtrar o resumo de vendas por Ano com um clique, sem editar os filtros de campo da tabela dinâmica a cada consulta.",
        "dados": "Tabela dinâmica de vendas já criada; campo Ano disponível na origem; caminho: Inserir Segmentação de Dados > marcar o campo Ano.",
        "conceitos": [
          "Segmentação de dados (Slicer)",
          "Filtro visual por valor de campo",
          "Tabela dinâmica filtrada"
        ],
        "estrategia": "Selecionar a tabela dinâmica, inserir uma segmentação de dados para o campo Ano e confirmar, de modo que clicar em um botão de ano restrinja todas as áreas do resumo (Linhas, Colunas e Valores) de uma só vez.",
        "execucao": [
          "Selecionar a tabela dinâmica existente",
          "Abrir Inserir > Segmentação de Dados",
          "Marcar o campo Ano na lista de segmentação e confirmar OK",
          "Clicar no botão de um ano específico para filtrar o resumo"
        ],
        "resultado": "Aparecem botões da segmentação por ano; ao clicar em um ano, todas as áreas da tabela dinâmica (Linhas, Colunas e Valores) são filtradas para exibir apenas as vendas daquele ano.",
        "justificativa": "O resultado está correto porque a segmentação de dados é um filtro visual por valor de campo que atinge todas as áreas da tabela dinâmica com um clique, atendendo ao requisito de filtrar por Ano sem editar filtros de campo manualmente.",
        "errosFrequentes": [
          "Acreditar que a segmentação filtra apenas uma área da tabela dinâmica em vez de todas",
          "Confundir segmentação com filtro de campo comum, que exige edição manual a cada consulta"
        ],
        "variacao": "Filtrar o mesmo resumo por Vendedor com um clique, inserindo uma segunda segmentação para o campo Vendedor e clicando no nome de um vendedor específico."
      },
      {
        "tipo": "erro",
        "problema": "O relatório mensal usa uma tabela dinâmica; a equipe digitou as vendas de novembro na fonte e o resumo não mudou, e o usuário afirma que a tabela dinâmica está quebrada.",
        "dados": "Tabela dinâmica de vendas mensais; fonte alterada com inclusão das vendas de novembro; sintoma: o resumo não reflete os novos dados; ação necessária: Atualizar ou Atualizar Tudo.",
        "conceitos": [
          "Tabela dinâmica como resumo materializado",
          "Atualização manual da tabela dinâmica",
          "Recálculo automático de fórmulas"
        ],
        "estrategia": "Diagnosticar que a tabela dinâmica não recalcula sozinha após mudanças na fonte, instruir a executar Atualizar na tabela dinâmica (ou Dados > Atualizar Tudo quando houver várias) e estabelecer uma rotina de atualizar o resumo após qualquer digitação na fonte.",
        "execucao": [
          "Clicar na tabela dinâmica para selecioná-la",
          "Executar Atualizar (ou Dados > Atualizar Tudo quando houver várias tabelas)",
          "Conferir que as vendas de novembro agora aparecem no resumo",
          "Incluir a checagem de atualização no checklist do relatório mensal"
        ],
        "resultado": "Após executar Atualizar, a tabela dinâmica recalcula a partir da fonte e o resumo passa a incluir as vendas de novembro, corrigindo a aparente inconsistência do relatório.",
        "justificativa": "O gabarito está correto porque a tabela dinâmica é um resumo materializado: alterações na fonte não se refletem até uma atualização manual, diferentemente das fórmulas comuns que recalculam automaticamente; não há quebra do recurso, apenas falta de atualização.",
        "errosFrequentes": [
          "Acreditar que a tabela dinâmica recalcula automaticamente como uma fórmula",
          "Achar que o recurso está quebrado quando, na verdade, apenas não foi atualizado após mudar a fonte"
        ],
        "variacao": "Corrigir a afirmação 'a tabela dinâmica recalcula automaticamente ao mudar a fonte', explicando que é necessário Atualizar ou Atualizar Tudo manualmente."
      }
    ]
  }
};
