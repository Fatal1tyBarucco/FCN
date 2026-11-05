const enriParcialM7U2P1 = {
  "m7-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A trinca acurácia, completude e validade é onde as questões de qualidade de dados mais trocam as dimensões de propósito. Separar o que se confere pela regra (validade), pela presença (completude) e pela realidade (acurácia) resolve itens de certo/errado e impede atribuir a uma dimensão o defeito que pertence a outra.",
      "preRequisitos": [
        "Reconhecer campos obrigatórios e opcionais em um cadastro ou tabela.",
        "Interpretar percentuais simples como fração de um total de registros."
      ],
      "objetivosObservaveis": [
        "diferenciar acurácia, completude e validade a partir de um caso concreto de cadastro;",
        "calcular o percentual de registros conformes em cada dimensão, declarando a regra e o denominador usados;",
        "justificar por que um valor presente e bem formatado pode não ser acurado."
      ],
      "competencias": [
        "análise crítica de base de dados para separar conformidade de regra, presença e correspondência com a realidade;",
        "cálculo e documentação de métricas de qualidade com denominador explícito."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — completa o conjunto das seis dimensões de qualidade;",
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — a coleta e a transformação são onde a completude e a validade costumam falhar primeiro."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre acurácia, completude e validade integra o conteúdo programático de dados e governança, que costuma apresentar um cadastro com campo preenchido e formato correto para testar se o candidato confunde presença com correspondência à realidade."
      }
    },
    "niveis": {
      "iniciante": "A acurácia mede se o valor registrado corresponde à realidade que ele representa: o nome do processo existe, o CPF pertence à pessoa indicada, o valor pago confere com o comprovante. A completude mede se os campos necessários estão preenchidos, pela fração de registros sem ausência. A validade mede se o valor obedece ao formato, ao domínio e à regra definida — data em intervalo permitido, UF válida, valor não negativo.",
      "intermediario": "Cada dimensão tem sua própria regra e seu próprio denominador. A completude depende do que é obrigatório: telefone pode ser opcional e CPF obrigatório, e contar nulos sem conhecer a regra não é medir qualidade. A validade confere-se internamente, contra a lista de domínios aceitos. A acurácia confere-se contra referência externa, como cadastro oficial ou leitura física, o que a torna a dimensão mais cara de verificar. A métrica típica é o percentual de registros conformes por dimensão, sempre com a regra documentada.",
      "avancado": "O ponto que decide o gabarito é que as três dimensões são independentes. Um valor pode ser válido, com formato correto, e estar completo, mas falso em relação à realidade; é comum encontrar base inteiramente preenchida e com erro de acurácia, sobretudo quando o preenchimento é obrigatório e feito com informação inventada. Por isso não se infere acurácia a partir de completude e validade: a conferência exige fonte autoritativa e amostragem.",
      "especialista": "A aplicação madura exige declarar, para cada dimensão, a regra, a população relevante e o denominador, de modo que a métrica seja reproduzível e auditável. A acurácia só se comprova por confronto com referência externa ou amostra conferida, e seu custo deve entrar no desenho do controle. Completude e validade podem ser automatizadas; a acurácia em geral exige amostragem, o que impõe decidir periodicidade e tolerância antes de publicar qualquer percentual."
    },
    "comparacoes": [
      {
        "tema": "Validade versus acurácia",
        "a": {
          "rotulo": "Validade",
          "texto": "Aderência ao formato, ao domínio e à regra definida; confere-se internamente, sem consultar a realidade — data no intervalo permitido, UF existente, valor não negativo."
        },
        "b": {
          "rotulo": "Acurácia",
          "texto": "Correspondência entre o valor registrado e o fato real; confere-se contra referência externa, como base oficial ou conferência manual, o que a torna mais cara de verificar."
        },
        "diferencaGabarito": "A validade se confere pela regra e a acurácia pela realidade: um dado pode passar em todos os testes de formato e ainda assim descrever um fato falso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se todos os campos estão preenchidos e no formato correto, a base é acurada.",
        "porqueErrada": "Preenchimento mede completude e formato mede validade; nenhuma das duas confronta o dado com a realidade. Exigir preenchimento obrigatório amplia o risco de informação inventada, e é comum haver base totalmente completa com erro de acurácia.",
        "versaoCorreta": "Incorreto: completude e validade não garantem acurácia. A correspondência com a realidade só se verifica contra referência externa; um cadastro completo e bem formatado pode conter valores falsos."
      },
      {
        "afirmacaoEquivocada": "A validade de um dado é apurada confrontando-o com uma fonte autoritativa da realidade.",
        "porqueErrada": "Confronto com fonte autoritativa é o procedimento da acurácia; a validade é a aderência à regra, ao formato e ao domínio definidos, e se verifica internamente, sem referência externa.",
        "versaoCorreta": "Errado: confrontar com fonte autoritativa mede acurácia. A validade verifica apenas se o valor obedece ao formato e ao domínio previstos na regra, o que pode ser feito dentro da própria base."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acurácia: o valor registrado corresponde ao fato real, comprovado por referência externa.",
        "Completude: os campos exigidos estão preenchidos, medida pela fração de registros sem ausência.",
        "Validade: o valor obedece ao formato, ao domínio e às regras definidas para o campo.",
        "Métrica de qualidade: percentual de registros conformes em uma dimensão, sobre a população relevante."
      ],
      "regras": [
        "Cada dimensão exige sua própria regra e seu próprio denominador; contar nulos sem conhecer a obrigatoriedade do campo não mede completude.",
        "A acurácia só se confirma contra referência externa; completude e validade podem ser verificadas dentro da base.",
        "A métrica só é reproduzível se a regra usada for documentada junto com o percentual."
      ],
      "comparacoes": [
        "Validade se confere pela regra e acurácia pela realidade: um valor pode ser válido e completo sem ser acurado."
      ],
      "fluxos": [
        "Definir a regra do campo → calcular a completude pela fração de registros preenchidos → verificar a validade contra o domínio → confrontar por amostra com referência externa para estimar a acurácia → registrar regra e denominador."
      ],
      "excecoes": [
        "Campo opcional não entra no denominador da completude como ausência: telefone não obrigatório pode estar vazio sem violar a dimensão."
      ],
      "palavrasChave": [
        "acurácia",
        "completude",
        "validade",
        "referência externa",
        "domínio",
        "métrica",
        "denominador"
      ],
      "checklist": [
        "A regra de cada campo (obrigatoriedade, formato e domínio) está declarada?",
        "O denominador da métrica corresponde à população relevante?",
        "A acurácia foi confrontada com referência externa ou amostra conferida?",
        "Foi evitado inferir acurácia a partir de completude e validade?",
        "O percentual está documentado com a regra que o produziu?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em uma base de 10 cadastros, 9 têm e-mail preenchido, 1 campo obrigatório está vazio e 1 UF foi registrada como 'XX'. Calcular a completude do e-mail e a validade da UF.",
        "dados": "Base com 10 cadastros; 9 registros com e-mail preenchido; e-mail é campo obrigatório; 1 campo obrigatório sem valor; 1 registro com UF igual a 'XX'; conjunto de unidades federativas válidas como domínio do campo.",
        "conceitos": [
          "completude",
          "validade",
          "campo obrigatório"
        ],
        "estrategia": "Tratar cada campo com sua própria regra: o e-mail mede-se por presença sobre os 10 cadastros; a UF mede-se pelo domínio de valores aceitos. Contar o campo obrigatório vazio e a UF inválida como as não conformidades de cada dimensão, sem misturar os denominadores.",
        "execucao": [
          "Contar os cadastros: total de 10.",
          "Completude do e-mail: 9 preenchidos em 10, logo 9/10.",
          "Validade da UF: 9 valores dentro do domínio em 10, descartando o 'XX', logo 9/10.",
          "Expressar cada resultado com sua regra e seu denominador."
        ],
        "resultado": "Completude do e-mail = 9/10 = 90%. Validade da UF = 9/10 = 90%, pois a linha com 'XX' viola o domínio. São métricas de campos distintos, cada uma com sua regra e seu denominador.",
        "justificativa": "O gabarito separa as dimensões: a completude do e-mail conta presença sobre o total de cadastros e a validade da UF conta aderência ao domínio. O campo obrigatório vazio e a UF inexistente são não conformidades de regras diferentes e por isso não se somam nem compartilham o mesmo denominador.",
        "errosFrequentes": [
          "Somar o campo vazio e a UF inválida em uma única métrica, misturando completude com validade.",
          "Calcular a completude da UF, quando a métrica pedida para esse campo é a validade."
        ],
        "variacao": "Se a base tiver 100 cadastros e 6 sem data de nascimento, sendo a data um campo opcional, a completude desse campo deixa de ser exigível e só se mede se houver regra que o torne obrigatório."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cadastro exibe o CPF com 11 dígitos e máscara correta, mas a conferência junto à base oficial mostra que o número pertence a outra pessoa. Qual dimensão está violada?",
        "dados": "Registro com CPF de 11 dígitos e máscara correta; todos os campos obrigatórios preenchidos; conferência junto à base oficial indica que o número está associado a outro titular.",
        "conceitos": [
          "acurácia",
          "validade",
          "referência externa"
        ],
        "estrategia": "Verificar as três dimensões em ordem: a presença dos campos (completude), o formato e o domínio do CPF (validade) e, por fim, o confronto com a base oficial (acurácia). A conferência com fonte autoritativa é o que expõe a violação.",
        "execucao": [
          "Confirmar que todos os campos obrigatórios estão preenchidos: completude satisfeita.",
          "Confirmar que o CPF tem 11 dígitos e máscara válida: validade satisfeita.",
          "Comparar o número com a base oficial: o titular é outro.",
          "Atribuir a violação à correspondência com a realidade, ou seja, à acurácia."
        ],
        "resultado": "Dimensão violada: acurácia. Completude e validade estão atendidas; o defeito é de correspondência com o fato real e só aparece no confronto com a referência externa.",
        "justificativa": "O CPF preenchido e bem formatado passa em completude e validade, que se verificam dentro da base. A base oficial é referência externa, e é justamente o confronto com ela que revela o vínculo errado entre número e pessoa, caracterizando violação de acurácia e não de formato.",
        "errosFrequentes": [
          "Classificar o caso como validade, supondo que dígitos verificadores corretos garantem titularidade.",
          "Tratar o problema como completude, confundindo presença do campo com exatidão do conteúdo."
        ],
        "variacao": "Se o mesmo cadastro trouxesse o CPF com 10 dígitos, a violação seria de validade, detectável dentro da base pelo formato, antes de qualquer consulta à referência externa."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'se todos os campos estão preenchidos e no formato certo, a base é acurada'.",
        "dados": "Afirmação de um analista de que preenchimento integral e formato correto bastam para a base ser acurada; base com todos os campos obrigatórios preenchidos e valores dentro dos domínios definidos.",
        "conceitos": [
          "acurácia",
          "completude",
          "validade"
        ],
        "estrategia": "Decompor a afirmação em suas duas premissas — campos preenchidos e formato correto — e mapear cada uma à dimensão correspondente; em seguida testar se alguma delas confronta o dado com a realidade, que é a única forma de comprovar acurácia.",
        "execucao": [
          "Identificar a primeira premissa: campos preenchidos, que mede completude.",
          "Identificar a segunda premissa: formato correto, que mede validade.",
          "Verificar que nenhuma das duas compara o valor com o fato real.",
          "Concluir que a afirmação confunde dimensões e não sustenta a acurácia."
        ],
        "resultado": "Afirmação incorreta. Completude e validade descrevem presença e conformidade de regra; nenhuma confronta o valor com a realidade, de modo que a base pode estar integral e bem formatada e ainda conter dados falsos.",
        "justificativa": "O gabarito rejeita a afirmação porque acurácia é a única dimensão que exige referência externa. Exigir preenchimento e formato pode até aumentar o risco de valor inventado, já que o sistema aceita qualquer conteúdo bem formado, sem verificar se ele corresponde ao fato.",
        "errosFrequentes": [
          "Aceitar a afirmação por associar preenchimento e formato à confiabilidade do conteúdo.",
          "Supor que obrigatoriedade de campo reduz erro de acurácia, quando pode apenas disfarçá-lo."
        ],
        "variacao": "Se a afirmação fosse 'uma base sem duplicatas e atualizada hoje é acurada', o erro seria o mesmo tipo de salto: atribuir acurácia a dimensões que não comparam o valor com o fato real."
      }
    ]
  },
  "m7-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Consistência, unicidade e tempestividade são as dimensões que escapam de quem só olha preenchimento e formato. O mesmo fato pode aparecer em unidades incompatíveis entre áreas, repetido em várias linhas por erro de carga ou chegar tarde demais para a decisão, e cada caso exige uma regra de conferência distinta. Reconhecer os conflitos entre dimensões separa a resposta correta da intuitiva.",
      "preRequisitos": [
        "Compreender o conceito de entidade e de chave de identificação em uma base.",
        "Entender a reconciliação entre total e detalhe (soma dos itens igual ao total)."
      ],
      "objetivosObservaveis": [
        "avaliar consistência, unicidade e tempestividade de uma base a partir de casos concretos;",
        "calcular a taxa de duplicidade e interpretar sua relação com a unicidade;",
        "explicar como uma decisão de qualidade reduz uma dimensão e prejudica outra."
      ],
      "competencias": [
        "detecção de duplicidade e de divergência entre fontes por regra de reconciliação;",
        "análise de trade-offs entre dimensões de qualidade com métrica declarada."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s1 (Acurácia, completude e validade) — as três primeiras dimensões do mesmo conjunto;",
        "m7-u2-t2-s2 (ETL e ELT: diferenças e quando aplicar cada um) — a ordem entre transformar e carregar altera a tempestividade e a disciplina de governança."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens de consistência, unicidade e tempestividade integram o conteúdo programático de dados, na forma de identificação da dimensão violada em um cenário narrado, e exploram os conflitos entre dimensões para induzir a alternativa que trata cada exigência como sempre favorável."
      }
    },
    "niveis": {
      "iniciante": "A consistência mede se o mesmo fato é representado de forma compatível, dentro do registro (a soma dos itens igual ao total) e entre sistemas (o saldo coincide nos dois módulos). A unicidade mede se cada entidade real aparece uma única vez, pela taxa de duplicatas. A tempestividade mede se o dado está disponível quando é necessário, pela data da última atualização e pelo intervalo entre o fato e a disponibilidade.",
      "intermediario": "Consistência se apura por regras de reconciliação que comparam representações do mesmo fato; a unicidade compara registros entre si para encontrar repetições por erro de carga, reenvio ou cadastro duplo; a tempestividade compara o instante do fato com o instante em que o dado se torna utilizável. São verificações distintas: uma base pode não ter duplicatas e, ainda assim, apresentar o mesmo saldo com valores diferentes em sistemas separados, ou chegar íntegra e tarde demais.",
      "avancado": "As dimensões entram em conflito e a questão costuma cobrar esse conflito. Deduplicar para ganhar unicidade pode reduzir a completude se a regra de fusão descartar histórico; coletar tudo por precaução melhora a completude e piora a minimização e a tempestividade; validação rígida na entrada reduz o erro e rejeita registros legítimos com formato incomum. Qualidade é gestão de trade-offs, e a resposta correta declara a métrica afetada em cada escolha.",
      "especialista": "A condução madura define, para cada dimensão, a regra, a fonte de verdade e a tolerância, e registra o efeito colateral de cada decisão. A reconciliação exige uma hierarquia declarada de fontes para resolver divergências; a deduplicação exige critério de fusão que preserve o histórico necessário; a tempestividade exige acordo de nível de serviço entre o fato e a disponibilização. Sem essas definições, a métrica aponta o sintoma, mas não orienta a correção nem sustenta a auditoria."
    },
    "comparacoes": [
      {
        "tema": "Consistência versus unicidade",
        "a": {
          "rotulo": "Consistência",
          "texto": "Compara representações do mesmo fato para confirmar compatibilidade: soma dos itens igual ao total e saldo idêntico entre sistemas."
        },
        "b": {
          "rotulo": "Unicidade",
          "texto": "Compara registros entre si para confirmar que cada entidade real aparece uma única vez, medida pela taxa de duplicatas."
        },
        "diferencaGabarito": "A consistência olha o mesmo fato em lugares diferentes; a unicidade olha o mesmo objeto repetido na mesma base — uma trata divergência, a outra trata repetição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Uma base atualizada há um minuto e com formato perfeito é uma base de qualidade.",
        "porqueErrada": "Tempestividade e validade são apenas duas das seis dimensões; a base pode estar incompleta, inconsistente com outra área, duplicada e imprecisa. Qualidade exige avaliação conjunta, com regra e denominador declarados para cada dimensão.",
        "versaoCorreta": "Incorreto: estar atualizada e bem formatada satisfaz apenas tempestividade e validade. Sem conferir completude, consistência, unicidade e acurácia, não há como afirmar que a base seja de qualidade."
      },
      {
        "afirmacaoEquivocada": "Deduplicar uma base sempre melhora sua qualidade.",
        "porqueErrada": "Deduplicar melhora a unicidade, mas pode reduzir a completude se a regra de fusão descartar atributos preenchidos em apenas uma das cópias. É um trade-off: o ganho em uma dimensão pode custar outra, e a resposta correta declara o efeito.",
        "versaoCorreta": "Errado: a deduplicação melhora a unicidade e pode piorar a completude quando a fusão perde dados que existiam em apenas uma das cópias; o resultado depende da regra de fusão adotada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Consistência: o mesmo fato é representado de forma compatível dentro do registro e entre sistemas.",
        "Unicidade: cada entidade real aparece uma única vez, medida pela taxa de duplicatas.",
        "Tempestividade: o dado está disponível no momento necessário, com latência aceitável.",
        "Reconciliação: regra que compara representações do mesmo fato para revelar divergências."
      ],
      "regras": [
        "Duplicidade é a violação direta da unicidade e se mede pela fração de registros repetidos.",
        "Dado antigo pode ser acurado e completo e ainda assim inútil para a decisão, o que caracteriza falha de tempestividade.",
        "Toda decisão de qualidade troca uma dimensão por outra e deve declarar a métrica afetada."
      ],
      "comparacoes": [
        "A consistência procura divergência entre representações do mesmo fato; a unicidade procura repetição da mesma entidade na mesma base."
      ],
      "fluxos": [
        "Identificar o fato e suas representações → comparar totais e saldos para apurar consistência → buscar registros repetidos para medir unicidade → comparar o instante do fato com o da disponibilização para medir tempestividade → registrar os trade-offs de cada correção."
      ],
      "excecoes": [
        "Duas linhas podem descrever o mesmo atendimento em etapas distintas e não serem duplicata; a unicidade depende da definição da entidade, não da semelhança textual."
      ],
      "palavrasChave": [
        "consistência",
        "unicidade",
        "tempestividade",
        "duplicidade",
        "reconciliação",
        "latência",
        "trade-off"
      ],
      "checklist": [
        "A definição da entidade está clara antes de contar duplicatas?",
        "A regra de reconciliação entre fontes está declarada?",
        "O instante do fato foi comparado ao da disponibilização?",
        "Cada correção teve seu efeito colateral registrado?",
        "Os denominadores das métricas correspondem à população relevante?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar a dimensão violada em três situações: uma filial registra 2,0 m de estante e a matriz registra 200 cm sem conversão; três linhas idênticas do mesmo atendimento; um painel atualizado ontem para um fato de hoje.",
        "dados": "Filial com estante de 2,0 m e matriz com 200 cm em bases separadas sem regra de conversão; três linhas idênticas do mesmo atendimento; painel cuja última atualização é de ontem para um fato ocorrido hoje.",
        "conceitos": [
          "consistência",
          "unicidade",
          "tempestividade"
        ],
        "estrategia": "Classificar cada caso pela pergunta que ele responde: o mesmo fato está compatível entre áreas, a mesma entidade está repetida ou o dado chegou a tempo. Aplicar a cada situação a dimensão correspondente, sem sobrepor as definições.",
        "execucao": [
          "Reconhecer o mesmo fato em unidades incompatíveis: inconsistência por falta de regra de conversão.",
          "Reconhecer o mesmo atendimento repetido: violação de unicidade.",
          "Comparar o instante do fato com o da disponibilização: violação de tempestividade.",
          "Registrar uma dimensão por caso, sem acumular rótulos."
        ],
        "resultado": "Primeiro caso: inconsistência. Segundo caso: violação de unicidade por duplicidade. Terceiro caso: violação de tempestividade, porque a latência entre o fato e a atualização é inaceitável para a decisão apoiada.",
        "justificativa": "O gabarito associa cada sintoma à dimensão que o define: representações incompatíveis do mesmo fato são inconsistência; repetição da mesma entidade é falha de unicidade; atraso entre fato e disponibilidade é falha de tempestividade. As três dimensões são independentes e não se substituem.",
        "errosFrequentes": [
          "Chamar a duplicidade de inconsistência, confundindo repetição da mesma entidade com divergência entre representações.",
          "Tratar o atraso do painel como acurácia, supondo que dado desatualizado está sempre errado."
        ],
        "variacao": "Se as duas unidades registrassem 2,0 m e 2,00 m com conversão declarada, o primeiro caso deixaria de ser inconsistência; restariam as violações de unicidade e de tempestividade, que continuam independentes entre si."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma base de 10 registros há 2 duplicatas exatas e 1 registro cuja data do fato é posterior à data de atualização. Calcular a taxa de duplicidade e apontar o segundo problema.",
        "dados": "Base com 10 registros; 2 pares de registros exatamente iguais; 1 registro com data do fato posterior à data de atualização do próprio registro.",
        "conceitos": [
          "unicidade",
          "consistência",
          "integridade temporal"
        ],
        "estrategia": "Medir a unicidade pela fração de registros repetidos sobre o total e, em seguida, aplicar a regra de integridade temporal que exige data de atualização igual ou posterior à data do fato, tratando os dois achados como problemas distintos.",
        "execucao": [
          "Contar o total de registros: 10.",
          "Contar os registros repetidos: 2, o que dá taxa de duplicidade de 2/10 = 20%.",
          "Aplicar a regra temporal ao registro restante: atualização anterior ao fato.",
          "Classificar o segundo achado como violação de consistência temporal."
        ],
        "resultado": "Taxa de duplicidade = 2/10 = 20%, com unicidade de 80%. O segundo achado viola a consistência temporal, pois a atualização não pode anteceder o próprio fato — regra que a conferência de unicidade não alcança.",
        "justificativa": "O gabarito separa as duas verificações: a unicidade se mede pela fração de registros repetidos e não enxerga a incoerência entre datas; a integridade temporal é uma regra de consistência interna do registro, aplicada sobre o campo de datas independentemente da contagem de duplicatas.",
        "errosFrequentes": [
          "Recalcular a taxa de duplicidade incluindo o registro com datas incoerentes, que não é duplicata.",
          "Tratar a data de atualização anterior ao fato como erro de formato, quando é violação de regra temporal."
        ],
        "variacao": "Se os 2 registros repetidos diferissem em um dígito do identificador, deixariam de ser duplicatas exatas e passariam a exigir regra de quase-duplicidade, alterando a taxa sem mudar a conclusão sobre a data incoerente."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'uma base atualizada há um minuto e com formato perfeito é uma base de qualidade'.",
        "dados": "Afirmação de um gestor; base recém-atualizada, com todos os valores dentro do formato e do domínio definidos; ausência de informação sobre completude, consistência com outras áreas, duplicidade e acurácia.",
        "conceitos": [
          "tempestividade",
          "validade",
          "trade-off entre dimensões"
        ],
        "estrategia": "Isolar as dimensões efetivamente atendidas pela afirmação — tempestividade e validade — e verificar quais ficaram de fora; a conclusão depende de perceber que a qualidade exige a avaliação conjunta das seis dimensões.",
        "execucao": [
          "Identificar o que 'atualizada há um minuto' comprova: tempestividade.",
          "Identificar o que 'formato perfeito' comprova: validade.",
          "Listar o que a afirmação não avalia: completude, consistência, unicidade e acurácia.",
          "Concluir que a generalização é indevida."
        ],
        "resultado": "Afirmação incorreta. Apenas tempestividade e validade foram satisfeitas; a base pode estar incompleta, divergente de outra área, com duplicatas e com valores falsos, de modo que a qualidade depende da avaliação conjunta das dimensões.",
        "justificativa": "O gabarito rejeita o salto de duas dimensões para a qualidade global: atualização recente e formato correto não implicam presença, compatibilidade, ausência de repetição nem correspondência com o fato real, que exigem verificações próprias e regras declaradas.",
        "errosFrequentes": [
          "Generalizar de duas dimensões para a qualidade total, ignorando completude, consistência, unicidade e acurácia.",
          "Presumir que dado recente é sempre acurado, quando a atualização apenas indica tempestividade."
        ],
        "variacao": "Se a afirmação fosse 'uma base sem duplicatas é uma base de qualidade', o erro seria o mesmo tipo de salto, agora a partir da unicidade, que também não garante consistência, completude, acurácia nem tempestividade."
      }
    ]
  }
};
