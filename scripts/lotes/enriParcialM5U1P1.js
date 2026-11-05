const enriParcialM5U1P1 = {
  "m5-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra a distinção entre sistema de regras, aprendizado de máquina e aprendizado profundo pela origem do conhecimento: escrito por especialista ou induzido de dados. Apontar a abordagem errada em um cenário de enunciado muda o gabarito, porque cada uma exige volume de dados, custo computacional e grau de explicabilidade próprios.",
      "preRequisitos": [
        "Noção de algoritmo e de execução determinística de um programa",
        "Conceito de dado e de conjunto de dados",
        "Diferença entre conhecimento escrito em regras e conhecimento extraído de exemplos"
      ],
      "objetivosObservaveis": [
        "Distinguir sistemas baseados em regras, aprendizado de máquina e aprendizado profundo pela origem do conhecimento e pelos requisitos de dados",
        "Justificar a escolha da abordagem segundo os dados disponíveis e a exigência de explicabilidade",
        "Citar vantagens e limitações de cada abordagem em cenário de serviço público"
      ],
      "competencias": [
        "Análise de problema para seleção de abordagem de IA",
        "Leitura crítica de requisitos de dados, custo e explicabilidade",
        "Argumentação técnica sobre auditabilidade de uma solução"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u1-t1-s2 (Dados, atributos, modelos, parâmetros e inferência) — detalha o vocabulário do ciclo de aprendizado usado pelas três abordagens",
        "m5-u2-t1-s1 (Aprendizado supervisionado: classificação e regressão) — exemplo de indução de padrões a partir de dados rotulados"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre regras, aprendizado de máquina e aprendizado profundo comparece em itens de certo ou errado e em questões de múltipla escolha sobre escolha de abordagem; a classificação alta decorre da centralidade do tema no Módulo 5 e constitui estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O aluno distingue o que é programado do que é aprendido. No sistema de regras o conhecimento é escrito pelo especialista em instruções do tipo 'se condição, então ação'; no aprendizado de máquina ele é induzido de exemplos. Reconhece que o aprendizado profundo é uma forma de aprendizado de máquina baseada em redes neurais com muitas camadas e percebe que cada abordagem demanda quantidades diferentes de dados.",
      "intermediario": "O aluno compara as três abordagens em dois eixos: origem do conhecimento e exigência de dados. Explica por que regras oferecem alta explicabilidade e baixa adaptabilidade, por que o aprendizado de máquina se adapta a padrões complexos quando há dados rotulados de qualidade e por que o aprendizado profundo se destaca em dados não estruturados, como texto, imagem e áudio, com maior custo computacional. Seleciona a abordagem em cenários simples.",
      "avancado": "O aluno escolhe a abordagem considerando restrições de governança: necessidade de justificar cada decisão, volume e rotulagem disponíveis, custo de treinamento e de inferência e possibilidade de auditoria. Propõe solução híbrida quando convém manter regras auditáveis para os casos críticos e delegar os padrões variáveis ao aprendizado de máquina, reconhecendo que sistemas de regras seguem vigentes em fluxos estáveis.",
      "especialista": "O aluno integra abordagem, custo e responsabilização em um projeto institucional: define o grau de explicabilidade exigido pela instância decisória, o orçamento computacional, a política de dados e os pontos de supervisão humana. Articula regras para hipóteses já consolidadas, aprendizado de máquina para padrões mutáveis e aprendizado profundo para dados não estruturados, documentando a justificativa técnica de cada opção."
    },
    "comparacoes": [
      {
        "tema": "Sistema baseado em regras versus modelo de aprendizado de máquina",
        "a": {
          "rotulo": "Sistema baseado em regras (IA simbólica)",
          "texto": "O conhecimento é escrito por especialistas em regras explícitas do tipo 'se... então...'. Tem alta explicabilidade, porque cada saída é rastreável a uma regra versionada, e baixa adaptabilidade: mudar o comportamento exige reescrever as regras. Opera sem volume de dados de treinamento."
        },
        "b": {
          "rotulo": "Modelo de aprendizado de máquina",
          "texto": "O conhecimento é induzido dos dados de treinamento e armazenado em parâmetros ajustados automaticamente. Adapta-se a padrões complexos e evolui com novos exemplos, mas depende de massa rotulada de qualidade, e explicar cada saída exige técnica adicional."
        },
        "diferencaGabarito": "A diferença decisiva está na origem do conhecimento e no custo de mantê-lo atualizado. Regras vencem quando a política é explícita, estável e auditável; aprendizado de máquina vence quando o padrão só existe nos dados. No enunciado, menção a 'auditável' ou 'conhecimento explícito' indica sistema de regras."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Todo sistema de inteligência artificial aprende dos dados.'",
        "porqueErrada": "A afirmação ignora a IA simbólica. Em sistema baseado em regras o conhecimento é escrito e versionado por especialistas, e alterar o comportamento do sistema exige nova regra, não novo conjunto de dados. Somente os modelos de aprendizado de máquina extraem conhecimento dos exemplos.",
        "versaoCorreta": "Sistemas baseados em regras não aprendem: o conhecimento é codificado por especialistas e mantido por versionamento. A extração de conhecimento a partir de exemplos é própria dos modelos de aprendizado de máquina, inclusive do aprendizado profundo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O aprendizado profundo substitui o aprendizado de máquina clássico em qualquer problema, porque tem mais camadas.'",
        "porqueErrada": "A profundidade aumenta a capacidade de representação, mas também o custo computacional e a dependência de volume de dados. Em bases tabulares de porte modesto, modelos clássicos alcançam desempenho comparável com mais interpretabilidade e custo menor, de modo que o número de camadas não é critério de superioridade.",
        "versaoCorreta": "O aprendizado profundo é subárea do aprendizado de máquina e se destaca em dados não estruturados e grandes volumes. A escolha entre abordagens depende do problema, dos dados disponíveis e do custo, e não da quantidade de camadas da rede."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Sistemas baseados em regras estão obsoletos e não devem mais ser usados em órgãos públicos.'",
        "porqueErrada": "Regras continuam sendo a ferramenta correta quando a política é explícita, estável e precisa de justificativa exibível ao cidadão, como validação de requisitos formais. Declarar obsolescência geral ignora que a auditabilidade da decisão automatizada é requisito de governança, não limitação técnica.",
        "versaoCorreta": "Sistemas de regras seguem indicados quando o conhecimento é explícito e estável e a decisão precisa ser justificada caso a caso, o que ocorre em boa parte dos fluxos administrativos de um órgão público."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Sistema baseado em regras (IA simbólica)",
        "Aprendizado de máquina (indução a partir de dados)",
        "Aprendizado profundo (redes neurais com muitas camadas)",
        "Explicabilidade da saída",
        "Dados não estruturados (texto, imagem, áudio)"
      ],
      "regras": [
        "A escolha depende do conhecimento disponível, dos dados e da exigência de explicabilidade",
        "Regras quando o conhecimento é explícito e estável; aprendizado de máquina quando há dados rotulados e padrão complexo",
        "Aprendizado profundo quando os dados são não estruturados e o volume é grande"
      ],
      "comparacoes": [
        "Regras são explícitas e auditáveis; aprendizado de máquina se adapta, mas depende de dados",
        "Aprendizado de máquina clássico é mais interpretável e exige menos dados; aprendizado profundo lida com não estruturado a custo maior"
      ],
      "fluxos": [
        "Diagnosticar o problema → verificar se a política é explícita e estável → em caso positivo, regras; em caso negativo, avaliar dados rotulados e volume"
      ],
      "excecoes": [
        "Abordagens híbridas combinam regras auditáveis com aprendizado de máquina",
        "Regras seguem indicadas em fluxos formais estáveis, como validação de requisitos de um requerimento"
      ],
      "palavrasChave": [
        "regras",
        "aprendizado de máquina",
        "aprendizado profundo",
        "IA simbólica",
        "explicabilidade",
        "dados não estruturados"
      ],
      "checklist": [
        "Identificar a origem do conhecimento do sistema descrito no enunciado",
        "Verificar se o conhecimento é explícito, estável e auditável",
        "Avaliar o volume e a rotulagem dos dados disponíveis",
        "Classificar o tipo de dado: estruturado ou não estruturado",
        "Justificar a abordagem escolhida em função de dados, custo e explicabilidade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sistema de folha de ponto que rejeita registro sem aprovação do chefe: qual abordagem de IA é a indicada?",
        "dados": "A política de ponto do órgão é escrita e estável: o registro só é aceito com aprovação do chefe imediato, e cada rejeição precisa exibir a razão ao servidor. Não há histórico rotulado de casos semelhantes para treinar modelo.",
        "conceitos": [
          "sistema baseado em regras",
          "conhecimento explícito",
          "auditabilidade"
        ],
        "estrategia": "Testar se o conhecimento do problema é explícito, estável e precisa ser justificável caso a caso. Se a política já está escrita e não depende de padrão oculto nos dados, a solução é uma regra, não um modelo treinado.",
        "execucao": [
          "1. Identificar a decisão a automatizar: aceitar ou rejeitar o registro de ponto.",
          "2. Verificar a origem do conhecimento: a aprovação do chefe é regra escrita, não padrão a descobrir em dados.",
          "3. Confirmar a exigência de auditabilidade: cada rejeição precisa indicar a razão ao servidor.",
          "4. Concluir que a regra 'sem aprovação, rejeitar' resolve o caso sem treinamento."
        ],
        "resultado": "Sistema baseado em regras: a regra ('sem aprovação, rejeitar') é conhecida, estável e deve ser auditável — não faz sentido treinar modelo estatístico para isso.",
        "justificativa": "O gabarito é sistema de regras porque a política já está escrita e a decisão precisa de razão exibível ao servidor; um modelo treinado acrescentaria custo de dados e de explicabilidade sem ganho de adaptação.",
        "errosFrequentes": [
          "Tratar todo problema de decisão como tarefa de aprendizado de máquina apenas por envolver IA",
          "Ignorar que a rejeição automática precisa de razão exibível ao servidor"
        ],
        "variacao": "Se o órgão passasse a aceitar registros fora do horário com justificativa textual livre e sem padrão fixo, a decisão deixaria de ser regra escrita e passaria a exigir classificação aprendida de exemplos rotulados."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer classificar e-mails de atendimento em assuntos sem padrão fixo. Qual abordagem e por quê?",
        "dados": "A central recebe 8.000 e-mails por mês e mantém 12.000 mensagens históricas já rotuladas por assunto pelos atendentes; o vocabulário muda a cada novo serviço ofertado e há abreviações e erros de digitação.",
        "conceitos": [
          "aprendizado de máquina supervisionado",
          "dados rotulados",
          "padrão variável"
        ],
        "estrategia": "Comparar cobertura e custo de manutenção: regras manuais sobre palavras-chave cobririam parte dos casos e quebrariam a cada novo serviço, enquanto um classificador treinado no histórico rotulado absorve a variação e é reavaliado periodicamente.",
        "execucao": [
          "1. Verificar que o padrão de assuntos é variável e não se reduz a lista fixa de termos.",
          "2. Confirmar a existência de exemplos históricos rotulados em quantidade representativa.",
          "3. Escolher aprendizado de máquina supervisionado treinado nesse histórico.",
          "4. Instituir reavaliação periódica com novas mensagens rotuladas."
        ],
        "resultado": "Aprendizado de máquina supervisionado: os padrões são variáveis e há exemplos históricos rotulados; regras manuais cobririam poucos casos e quebrariam com o tempo. Requisito: conjunto de treinamento representativo e reavaliação periódica.",
        "justificativa": "O gabarito é aprendizado de máquina supervisionado porque o enunciado reúne padrão variável e massa rotulada disponível, que são exatamente as condições da indução; a reavaliação periódica responde pela mudança do vocabulário.",
        "errosFrequentes": [
          "Propor lista fixa de palavras-chave, que quebra a cada novo serviço ofertado",
          "Esquecer que o conjunto de treinamento precisa ser representativo dos assuntos reais"
        ],
        "variacao": "Se não houvesse exemplos rotulados e o órgão só contasse com a descrição textual de cada assunto, a solução passaria por regras ou por agrupamento de mensagens semelhantes, e não por classificação supervisionada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Todo sistema de inteligência artificial aprende dos dados.' A afirmação vale para um órgão que opera verificador de regras e modelos treinados?",
        "dados": "Um item de certo ou errado apresenta três sistemas de um mesmo órgão: (i) verificador de regras de aposentadoria escrito por especialistas; (ii) classificador de documentos treinado em 20 mil exemplos; (iii) rede neural treinada em grande volume de imagens.",
        "conceitos": [
          "IA simbólica",
          "aprendizado de máquina",
          "origem do conhecimento"
        ],
        "estrategia": "Aplicar o critério da origem do conhecimento a cada sistema: separar conhecimento escrito por humanos de conhecimento induzido de exemplos e testar se a afirmação universal sobrevive a todos os casos.",
        "execucao": [
          "1. Ler a afirmação como universal: ela vale para 'todo' sistema de IA.",
          "2. Testar no sistema (i): o conhecimento está em regras escritas; ele é versionado, não aprendido.",
          "3. Testar em (ii) e (iii): o conhecimento está em parâmetros ajustados a partir de exemplos.",
          "4. Concluir que um único contraexemplo falsifica a afirmação universal."
        ],
        "resultado": "Errado. Sistemas baseados em regras não aprendem: o conhecimento é escrito e versionado por humanos; só os modelos de aprendizado de máquina extraem conhecimento dos dados.",
        "justificativa": "A afirmação é universal e uma única instância de sistema que não aprende a falsifica. O verificador de regras tem conhecimento codificado por especialistas, o que evidência que IA e aprendizado a partir de dados não são sinônimos.",
        "errosFrequentes": [
          "Confundir IA com aprendizado de máquina e tratá-los como expressões equivalentes",
          "Supor que regras escritas 'aprendem' quando são editadas por humanos"
        ],
        "variacao": "Se a afirmação fosse 'todo sistema de inteligência artificial guarda conhecimento explicitado em regras', também seria falsa: os modelos treinados o armazenam em parâmetros, e não em regras legíveis."
      }
    ]
  },
  "m5-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra a distinção entre dado, atributo, modelo, parâmetro e inferência, e confundir esses termos muda o gabarito em itens sobre pipeline. Entender que modelo é função com parâmetros aprendidos e que inferência é a aplicação dessa função a casos novos permite resolver questões de vocabulário do ciclo de aprendizado.",
      "preRequisitos": [
        "Noção de função com entrada e saída",
        "Leitura de tabela: linhas como registros e colunas como variáveis",
        "Diferença entre valor configurado por pessoa e valor ajustado por algoritmo"
      ],
      "objetivosObservaveis": [
        "Mapear o vocabulário do ciclo do aprendizado (dados, atributos, alvo, modelo, parâmetros, inferência) para uma situação concreta",
        "Diferenciar parâmetro de hiperparâmetro em um cenário de configuração de modelo",
        "Distinguir a fase de treinamento da fase de inferência em um pipeline descrito"
      ],
      "competencias": [
        "Leitura de pipeline de aprendizado de máquina",
        "Análise de qualidade de dados e de seu efeito no resultado",
        "Comunicação técnica precisa do vocabulário de modelos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u1-t1-s1 (Abordagens de inteligência artificial: regras, aprendizado de máquina e deep learning) — as três abordagens se apoiam nesse vocabulário",
        "m5-u1-t2-s1 (Treinamento, validação e teste) — operacionaliza o treinamento citado neste subtópico"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Dado, atributo, modelo, parâmetro e inferência formam o vocabulário avaliado em itens de certo ou errado e de múltipla escolha sobre funcionamento de modelos; a classificação alta decorre da centralidade do tema no Módulo 5. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende que o modelo é uma função aprendida a partir dos dados e não um programa escrito passo a passo. Identifica, em uma tabela, que cada linha é um registro observado, que cada coluna descritiva é um atributo de entrada e que a coluna que se quer prever é o alvo. Reconhece que usar o modelo em caso novo se chama inferência.",
      "intermediario": "O aluno distingue os cinco termos no pipeline: dado como registro observado, atributo como variável de entrada, modelo como função que mapeia entradas em saídas, parâmetro como peso ajustado no treinamento e inferência como aplicação do modelo treinado a caso novo. Relaciona qualidade dos dados ao teto de desempenho alcançável pelo modelo.",
      "avancado": "O aluno analisa a qualidade dos dados e seu impacto: atributos ausentes, valores inconsistentes e alvo mal definido limitam o resultado antes de qualquer escolha de modelo. Separa parâmetro, aprendido pelo otimizador, de hiperparâmetro, configurado antes do treino, e explica por que a separação entre treino e inferência importa para a avaliação honesta.",
      "especialista": "O aluno audita um pipeline de dados a inferência: verifica a proveniência e a rotulagem dos atributos, confirma que o alvo mede o fenômeno de interesse, documenta parâmetros e hiperparâmetros de cada execução e assegura que a inferência em produção usa exatamente a mesma transformação de entrada ajustada no treinamento, sem recálculo indevido."
    },
    "comparacoes": [
      {
        "tema": "Parâmetro versus hiperparâmetro do modelo",
        "a": {
          "rotulo": "Parâmetro do modelo",
          "texto": "Valor interno ajustado automaticamente durante o treinamento, como pesos e coeficientes. É o conhecimento que o modelo extrai dos dados; quem opera o sistema não o define diretamente e ele muda a cada execução do treino."
        },
        "b": {
          "rotulo": "Hiperparâmetro",
          "texto": "Valor de configuração definido antes do treinamento, como taxa de aprendizado, número de épocas, profundidade ou tamanho do lote. Orienta o processo de aprendizado e é escolhido por busca e validação, não pelo otimizador."
        },
        "diferencaGabarito": "A régua é a origem do valor: o que o otimizador aprende é parâmetro; o que alguém configura antes é hiperparâmetro. No enunciado, 'taxa de aprendizado' e 'épocas' indicam sempre hiperparâmetro, e 'pesos' indicam parâmetro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Modelo com mais parâmetros é sempre melhor previsor.'",
        "porqueErrada": "Capacidade maior permite memorizar o ruído do treinamento, fenômeno conhecido como overfitting, e o desempenho real é medido em dados nunca vistos. Quantidade de parâmetros não é critério de qualidade sem avaliação independente.",
        "versaoCorreta": "Mais parâmetros elevam a capacidade de memorização e o risco de overfitting; o desempenho só se atesta em dados nunca vistos. A complexidade adequada é a que minimiza o erro de validação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Parâmetro e atributo são a mesma coisa, pois ambos são números que entram no cálculo.'",
        "porqueErrada": "O atributo é a variável de entrada observada nos dados, como a área do requerimento; o parâmetro é o peso interno aprendido pelo modelo. Trocar os dois termos leva a erro em itens sobre pipeline e sobre o que é fornecido ao modelo em comparação ao que ele produz.",
        "versaoCorreta": "Atributo é entrada medida nos dados e parâmetro é peso aprendido no treinamento: o primeiro é fornecido ao modelo, o segundo é produzido por ele."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Aplicar um modelo treinado a um caso novo é uma forma de treinamento.'",
        "porqueErrada": "Na inferência nenhum peso é alterado: os parâmetros já ajustados são apenas aplicados às entradas novas para produzir a previsão. Confundir as fases induz erro em itens que descrevem pipeline e que perguntam o que ocorre em cada etapa.",
        "versaoCorreta": "Treinamento ajusta parâmetros a partir de exemplos; inferência aplica os parâmetros já ajustados a casos novos. São fases distintas do ciclo, e a segunda não modifica o modelo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado (registro observado)",
        "Atributo ou feature (variável de entrada)",
        "Modelo (função entrada → saída)",
        "Parâmetro (peso aprendido)",
        "Inferência (aplicação a caso novo)",
        "Qualidade dos dados"
      ],
      "regras": [
        "Cada linha da tabela é uma observação e cada coluna descritiva é um atributo candidato a entrada",
        "A coluna que se quer prever é o alvo e não deve ser usada como entrada",
        "A qualidade dos dados determina o teto de desempenho do modelo"
      ],
      "comparacoes": [
        "Parâmetro é aprendido pelo otimizador; hiperparâmetro é configurado antes do treino",
        "Treino ajusta pesos; inferência apenas os aplica a novas entradas"
      ],
      "fluxos": [
        "Dados rotulados → treinamento (ajuste de parâmetros) → modelo treinado → inferência em caso novo → previsão"
      ],
      "excecoes": [
        "Modelos pré-treinados permitem inferência com pouco ajuste adicional",
        "Atributo mal rotulado ou alvo mal definido compromete o resultado independentemente do modelo"
      ],
      "palavrasChave": [
        "dado",
        "atributo",
        "modelo",
        "parâmetro",
        "hiperparâmetro",
        "inferência",
        "treinamento",
        "alvo"
      ],
      "checklist": [
        "Identificar o que é dado, atributo e alvo na tabela apresentada",
        "Reconhecer o modelo como função com estrutura e parâmetros",
        "Diferenciar parâmetro de hiperparâmetro no cenário descrito",
        "Distinguir treinamento de inferência",
        "Verificar o efeito da qualidade dos dados sobre o resultado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Numa planilha de 10 mil linhas (uma por requerimento) com 12 colunas, quais são dados, atributos e alvo?",
        "dados": "Planilha com 10.000 linhas, uma por requerimento de serviço, e 12 colunas: tipo de serviço, área demandante, quantidade de anexos e data de entrada, entre outras descritivas, mais a coluna 'analisado em até 5 dias', com sim ou não.",
        "conceitos": [
          "dado (observação)",
          "atributo (feature)",
          "variável-alvo"
        ],
        "estrategia": "Mapear a estrutura da tabela para o vocabulário do ciclo de aprendizado: cada linha é uma observação, cada coluna descritiva é um atributo de entrada e a coluna que se quer prever é o alvo.",
        "execucao": [
          "1. Contar as linhas: 10.000 requerimentos, portanto 10.000 observações.",
          "2. Separar as 11 colunas descritivas: são os atributos candidatos a entrada.",
          "3. Identificar a coluna 'analisado em até 5 dias' como aquilo que se quer prever.",
          "4. Classificar essa coluna como alvo, e não como mais um atributo de entrada."
        ],
        "resultado": "Dados: as 10 mil observações. Atributos: as 11 colunas descritivas (tipo, área, anexos etc.). Alvo: a coluna que se quer prever (ex.: 'analisado em até 5 dias' — sim/não).",
        "justificativa": "O gabarito aplica a correspondência entre linha e observação e entre coluna e atributo, e reserva o nome de alvo para a variável que o modelo deve prever; as demais colunas funcionam apenas como entradas do cálculo.",
        "errosFrequentes": [
          "Contar colunas como dados, em vez de contar linhas",
          "Tratar a coluna-alvo como mais um atributo de entrada do modelo"
        ],
        "variacao": "Se a planilha tivesse 8 colunas, os dados continuariam sendo as 10 mil linhas e os atributos seriam 7, restando uma coluna de alvo: a contagem de atributos depende das colunas descritivas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Equipe ajusta 'épocas de treinamento' e 'taxa de aprendizado'. Esses são parâmetros ou hiperparâmetros?",
        "dados": "Configuração declarada antes do treino: 50 épocas, taxa de aprendizado 0,01 e tamanho de lote 32. Os pesos da rede começam aleatórios e são alterados pelo otimizador a cada lote processado.",
        "conceitos": [
          "hiperparâmetro",
          "parâmetro (peso)",
          "otimizador"
        ],
        "estrategia": "Aplicar a régua da origem do valor: o que é escolhido por quem configura o experimento é hiperparâmetro; o que é alterado pelo otimizador durante o treino é parâmetro.",
        "execucao": [
          "1. Localizar onde 'épocas' e 'taxa de aprendizado' são definidos: no script de configuração, antes do treino.",
          "2. Verificar que nenhum dos dois é recalculado pelo otimizador durante o processo.",
          "3. Reconhecer que os pesos, ao contrário, são atualizados automaticamente a cada lote.",
          "4. Classificar os dois valores como hiperparâmetros."
        ],
        "resultado": "Hiperparâmetros: controlam o processo de aprendizado e são definidos fora do loop de ajuste (por busca e validação). Os parâmetros (pesos) são ajustados automaticamente pelo otimizador.",
        "justificativa": "O gabarito decorre da origem de cada valor: épocas e taxa de aprendizado são escolhidos externamente e governam o aprendizado, enquanto os pesos são produzidos pelo otimizador, o que é a definição de hiperparâmetro.",
        "errosFrequentes": [
          "Confundir hiperparâmetro com parâmetro por ambos serem números associados ao modelo",
          "Supor que o otimizador escolhe a taxa de aprendizado"
        ],
        "variacao": "Se a equipe buscar a melhor combinação de taxa de aprendizado e épocas em um conjunto de validação, a busca continua sendo ajuste de hiperparâmetros, e não aprendizado de parâmetros."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Modelo com mais parâmetros é sempre melhor previsor.' A afirmação se sustenta na comparação de dois modelos treinados nos mesmos registros?",
        "dados": "Dois modelos treinados nos mesmos 5.000 registros: o primeiro tem 30 parâmetros e erra 12% na validação; o segundo tem 30.000 parâmetros e erra 27% na validação, apesar de 0,5% de erro no treino.",
        "conceitos": [
          "overfitting",
          "erro de treino",
          "erro de validação"
        ],
        "estrategia": "Comparar erro de treino e erro de validação para interpretar a capacidade: erro de treino muito baixo com erro de validação alto indica memorização, e não melhor previsão.",
        "execucao": [
          "1. Ler os erros do modelo maior: 0,5% no treino e 27% na validação.",
          "2. Comparar com o modelo menor, que erra 12% na validação.",
          "3. Reconhecer a assinatura de overfitting no modelo com mais parâmetros.",
          "4. Concluir que mais parâmetros não implicam melhor previsão."
        ],
        "resultado": "Errado. Mais parâmetros aumentam a capacidade de memorizar o ruído do treinamento (overfitting); desempenho real é medido em dados nunca vistos.",
        "justificativa": "O gabarito sustenta-se na diferença entre erro de treino e erro em dados não vistos: o modelo maior memorizou o treinamento e perdeu generalização, o que contradiz a afirmação universal.",
        "errosFrequentes": [
          "Usar erro de treino como prova de qualidade do modelo",
          "Associar automaticamente maior capacidade a melhor desempenho"
        ],
        "variacao": "Se o erro de validação do modelo maior caísse para 9% após regularização e com o dobro de dados, a capacidade estaria sendo aproveitada, mas a afirmação original continuaria falsa por dizer 'sempre'."
      }
    ]
  }
};
