const enriParcialM1U3P3 = {
  "modulo-1-unidade-3-topico-3-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "No Excel, cada célula guarda um tipo de dado que determina quais operações são permitidas: números entram em cálculos, textos não, lógicos resultam de comparações e datas são armazenadas como números seriais (dia 1 = 01/01/1900 no Windows). O formato numérico muda apenas a exibição, nunca o valor subjacente usado nos cálculos. Erros como #DIV/0! e #VAL! sinalizam causas distintas que a prova costuma pedir para identificar. Saber separar tipo de dado de formato de célula evita confusão que altera o gabarito.",
      "preRequisitos": [
        "Células e intervalos de uma planilha",
        "Noção básica de fórmula que começa com o sinal de igual (=)"
      ],
      "objetivosObservaveis": [
        "Classificar o tipo de dado de uma célula (número, texto, lógico, data/hora ou erro)",
        "Calcular a diferença entre duas datas explicando o mecanismo serial",
        "Distinguir formato numérico (exibição) do valor armazenado na célula",
        "Associar cada código de erro comum à sua causa típica"
      ],
      "competencias": [
        "Diagnóstico de dados inconsistentes em planilhas",
        "Leitura e interpretação de mensagens de erro do Excel"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-3-sub-2 (Funções matemáticas, estatísticas, lógicas, condicionais, textuais e de data) — usa tipos de dado como argumentos",
        "modulo-1-unidade-3-topico-4-sub-2 (Células vazias, erros e fórmulas aninhadas) — aprofunda códigos de erro"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tipos de dado, aritmética de datas serial e códigos de erro integram o conteúdo programático de informática para concursos. Questões costumam perguntar como o Excel armazena uma data internamente, se mudar o formato altera o valor ou qual erro uma fórmula específica produz. Esses itens aparecem em alternativas C/E e de múltipla escolha com cálculo direto, sem necessidade de calculadora. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Tipos de dado do Excel: número (inteiro ou decimal), texto (sequência de caracteres), lógico (VERDADEIRO/FALSO), data/hora e erro. Uma data é armazenada como número serial: no Windows, 01/01/1900 corresponde ao serial 1 e cada dia seguinte adiciona 1; horários são frações de dia (0,5 = meio-dia). Subtrair duas datas retorna a diferença em dias. O formato numérico altera apenas a exibição na célula, nunca o valor armazenado, que permanece completo nos cálculos. O simulador deste projeto exibe datas no formato AAAA/MM/DD e não oferece formatação de células (limitação declarada).",
      "intermediario": "A aritmética de datas é natural porque cada data é um número serial: somar N dias a uma data avança o serial em N, e subtrair duas datas retorna dias. Horários, como frações de dia, permitem somar e subtrair períodos de horas. Formatos numéricos personalizados mudam a apresentação (ex.: data curta, longa, moeda, porcentagem) sem afetar o valor usado em fórmulas. Códigos de erro principais: #DIV/0! (divisão por zero), #VAL! (tipo inadequado, ex.: texto em conta), #REF! (referência inválida), #N/A (valor não disponível), #NUM! (número inválido).",
      "avancado": "Distinguir dados digitados como texto (ex.: com apóstrofo inicial) de números de verdade: funções como SOMA ignoram textos e operações diretas podem gerar #VAL!. O mecanismo serial expõe comportamentos limite, como datas anteriores a 01/01/1900 que o Excel trata como texto e sistemas que usam o calendário de 1904 (serial diferente para a mesma data). Funções de data como HOJE() e AGORA() são voláteis e recalculam a cada abertura, o que pesa em planilhas grandes. O simulador suporta HOJE() com a data real do sistema, mas não executa conversão de texto em número nem a maioria das funções de data/hora.",
      "especialista": "Auditoria de planilhas consiste em detectar células cujo valor aparente (texto formatado como número) difere do tipo real, corrigindo com conversão explícita ou reentrada do dado. No Excel real, VALOR() converte texto numérico em número, mas essa função não está no escopo documentado do simulador deste projeto, que exige tipo numérico na entrada. DATADIF calcula diferenças entre datas em dias, meses ou anos, enquanto DIAS retorna apenas dias; o simulador não implementa DATADIF nem DIATRABALHOTOTAL, devendo esses conteúdos serem estudados como teoria para provas. Modelos de erro previsíveis orientam a construção de fórmulas robustas com SEERRO."
    },
    "comparacoes": [
      {
        "tema": "Valor armazenado vs. exibição formatada",
        "a": {
          "rotulo": "Valor armazenado",
          "texto": "O valor completo e exato que o Excel guarda na célula e usa em todos os cálculos, independente de como é mostrado na tela."
        },
        "b": {
          "rotulo": "Formato numérico",
          "texto": "A máscara de exibição que altera apenas a aparência do valor (casas decimais, símbolo de moeda, estilo de data) sem modificar o conteúdo armazenado."
        },
        "diferencaGabarito": "Mudar o formato não altera o resultado de cálculos, pois o Excel sempre opera sobre o valor armazenado completo; apenas a exibição muda para o usuário."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Alterar o formato de uma célula de número para texto muda o valor que ela armazena.",
        "porqueErrada": "O formato altera apenas a forma como o valor é exibido; o valor armazenado continua o mesmo e os cálculos usam esse valor inalterado.",
        "versaoCorreta": "Correto: o formato afeta somente a exibição, nunca o valor armazenado nem o resultado de fórmulas que usam a célula."
      },
      {
        "afirmacaoEquivocada": "Somar o texto '10' com o número 5 resulta em 15.",
        "porqueErrada": "Texto não numérico em operação aritmética não é convertido automaticamente; o Excel gera o erro #VAL! porque o tipo é incompatível com a operação.",
        "versaoCorreta": "Incorreto: a fórmula gera #VAL!. É preciso garantir que o texto seja um número de verdade — no Excel real, converter com VALOR() (não suportada no simulador) ou redigitar o valor como número."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tipo de dado (número, texto, lógico, data/hora, erro)",
        "Número serial de datas (dia 1 = 01/01/1900, Windows)",
        "Formato numérico muda exibição, não o valor armazenado"
      ],
      "regras": [
        "Somente dados numéricos participam de operações aritméticas; texto gera erro",
        "Subtrair duas datas retorna a diferença em dias por causa do mecanismo serial"
      ],
      "comparacoes": [
        "Valor armazenado (usado nos cálculos) vs. formato numérico (apenas exibe)"
      ],
      "fluxos": [
        "Digitação → Excel infere o tipo de dado → formato controla exibição → cálculos usam o valor armazenado"
      ],
      "excecoes": [
        "Datas anteriores a 01/01/1900 e o calendário de 1904 podem fazer a mesma data ter seriais distintos"
      ],
      "palavrasChave": [
        "tipo de dado",
        "número serial",
        "formato numérico",
        "#DIV/0!",
        "#VAL!",
        "VERDADEIRO/FALSO"
      ],
      "checklist": [
        "Identificar o tipo de dado de cada célula",
        "Calcular diferença entre datas usando serial",
        "Distinguir formato de valor armazenado",
        "Associar código de erro à causa típica",
        "Reconhecer textos que se parecem com números"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quantos dias separam a data de 01/05/2024, anotada na célula A2, da data de 10/05/2024, anotada na célula B2?",
        "dados": "A2 = 01/05/2024 e B2 = 10/05/2024 (datas gravadas como data, não texto); fórmula =B2-A2 aplicada em uma terceira célula.",
        "conceitos": [
          "número serial de datas",
          "subtração de datas"
        ],
        "estrategia": "Como datas são números seriais, subtrair o serial de B2 pelo de A2 retorna diretamente a quantidade de dias entre as duas datas.",
        "execucao": [
          "Digite 01/05/2024 em A2 e 10/05/2024 em B2",
          "Em outra célula digite =B2-A2",
          "Confira que o resultado é 9 (nove dias)"
        ],
        "resultado": "=B2-A2 retorna 9, correspondente aos nove dias entre 01/05/2024 e 10/05/2024.",
        "justificativa": "O resultado está correto porque cada data é um número serial: 10/05/2024 menos 01/05/2024 dá 9 unidades de dia. Se as datas estivessem gravadas como texto, a subtração falharia com #VAL!.",
        "errosFrequentes": [
          "Acreditar que o resultado depende do formato de exibição da célula",
          "Tentar subtrair datas gravadas como texto, o que gera #VAL! sem percepção da causa"
        ],
        "variacao": "Mudar as datas para 15/01/2024 e 20/02/2024 e verificar que a subtração ainda retorna a diferença correta em dias, independentemente do mês."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma planilha de vencimentos, obter a data atual automaticamente e calcular os dias restantes até o vencimento informado em B2.",
        "dados": "B2 contém a data de vencimento; fórmula =HOJE() para data atual e =B2-HOJE() para dias restantes.",
        "conceitos": [
          "HOJE() data atual",
          "data volátil",
          "diferença entre datas"
        ],
        "estrategia": "Usar HOJE() para trazer a data real do sistema e subtrair do vencimento; o resultado negativo indica vencimento já ocorrido.",
        "execucao": [
          "Em uma célula digite =HOJE() para exibir a data atual (formato AAAA/MM/DD no simulador)",
          "Em outra célula digite =B2-HOJE() subtraindo a data atual do vencimento",
          "Interprete resultado positivo como dias restantes e negativo como vencimento passado"
        ],
        "resultado": "=HOJE() retorna a data do sistema e =B2-HOJE() retorna os dias até o vencimento, negativo quando a data já passou.",
        "justificativa": "HOJE() recalcula a cada abertura ou recálculo, mantendo o indicador atualizado automaticamente; como é volátil, consuma com moderação em planilhas extensas.",
        "errosFrequentes": [
          "Esquecer que HOJE() muda a cada abertura, invalidando comparações anteriores",
          "Tratar o resultado negativo como erro de fórmula em vez de sinal de vencimento expirado"
        ],
        "variacao": "Substituir HOJE() por uma data fixa digitada manualmente para calcular dias restantes em um cenário de simulação estática."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário digita o texto '10' em uma célula e soma com 5, esperando o resultado 15.",
        "dados": "Célula com o texto '10' (não é número de verdade), fórmula soma esse texto com o número 5.",
        "conceitos": [
          "texto não numérico",
          "erro #VAL!",
          "tipo de dado"
        ],
        "estrategia": "Reconhecer que texto não numérico em operação aritmética não se converte automaticamente e gera #VAL!, exigindo conversão ou reentrada como número.",
        "execucao": [
          "Digitar o texto '10' (com apóstrofo ou formatado como texto) e o número 5",
          "Tentar somar os dois valores e observar o erro #VAL!",
          "Converter o texto em número no Excel real (VALOR() ou reentrada) ou garantir tipo numérico na entrada do simulador"
        ],
        "resultado": "A operação gera #VAL! porque texto não numérico não participa de aritmética; o resultado esperado 15 não é produzido.",
        "justificativa": "O gabarito é #VAL!, não 15, porque o Excel não converte implicitamente texto não numérico em número durante operações aritméticas; a leitura ingênua de que '10' vira número está errada.",
        "errosFrequentes": [
          "Acreditar que o Excel converte automaticamente qualquer texto que pareça número",
          "Confundir #VAL! com erro de referência (#REF!) ou de divisão (#DIV/0!)"
        ],
        "variacao": "Repetir o cenário multiplicando o texto '10' por 5 e confirmar que o mesmo erro #VAL! ocorre, pois a operação aritmética exige tipo numérico nos dois operandos."
      }
    ]
  },
  "modulo-1-unidade-3-topico-3-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O Excel reúne dezenas de funções prontas que transformam dados brutos em informações úteis: SOMA, MÉDIA, MÁXIMO e MÍNIMO resumem valores; SE, E, OU e NÃO tomam decisões; CONT.SE, SOMASE e MÉDIASE agregam com critério; funções de texto manipulam cadeias de caracteres e funções de data calculam prazos e períodos. Em provas de concurso, o gabarito costuma depender de saber exatamente qual função usar, qual argumento é obrigatório e como o simulador deste projeto trata cada uma — por exemplo, SES aqui é alias de E, não SE encadeado. Usar a função errada ou confundir aliases altera o resultado.",
      "preRequisitos": [
        "Tipos de dado do Excel (número, texto, lógico, data/hora)",
        "Noção de fórmula que começa com o sinal de igual (=) e de intervalo (ex.: A1:A5)"
      ],
      "objetivosObservaveis": [
        "Aplicar funções matemáticas e estatísticas (SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES) em intervalos",
        "Usar funções lógicas e condicionais (SE, E, OU, NÃO, SEERRO) para decisões",
        "Aplicar funções com critério (CONT.SE, SOMASE, MÉDIASE) com operadores relacionais",
        "Reconhecer as limitações do simulador quanto a funções textuais e de data/hora"
      ],
      "competencias": [
        "Selecionar a função adequada para cada tipo de cálculo",
        "Interpretar o comportamento do simulador versus o Excel real"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-3-sub-1 (Tipos de dados, datas, horários e formatos numéricos) — fornece os tipos que as funções manipulam",
        "modulo-1-unidade-3-topico-4-sub-2 (Células vazias, erros e fórmulas aninhadas) — SEERRO e interpretação de erros de função"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "As funções essenciais do Excel formam um tópico classificado como de alta relevância no conteúdo programático de informática para concursos. Questões pedem identificar a função que retorna a média, o maior valor, a contagem com critério ou o resultado de uma lógica condicional, além de distinguir os apelidos em português e em inglês. O tema é objeto de avaliação em itens de múltipla escolha e C/E com cálculo direto, sem calculadora. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Funções matemáticas e estatísticas: SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO e CONT.VALORES operam sobre intervalos de células. Lógicas e condicionais: SE avalia uma condição e retorna um de dois valores; E, OU e NÃO combinam lógica booleana; SEERRO captura erros e devolve um valor alternativo, avaliando preguiçosamente apenas o ramo usado. Condicionais com critério: CONT.SE, CONT.SES, SOMASE, SOMASES e MÉDIASE aceitam critérios com operadores >=, <=, <>, >, <, = ou igualdade. O simulador suporta essas funções com busca e cálculo reais.",
      "intermediario": "Ses é alias de E nesta implementação do simulador (retorna VERDADEIRO/FALSO), diferentemente do Excel real onde SES é SE com múltiplas condições — atenção para não usar SES como SE encadeado. Aliases em inglês são reconhecidos: SUM, AVERAGE, MAX, MIN, COUNTA, IF, AND, OR, NOT, IFERROR, COUNTIF, COUNTIFS, SUMIF, SUMIFS, AVERAGEIF. Funções de texto (CONCATENAR, TEXTOJUNTAR, ESQUERDA, DIREITA, EXT.TEXTO e auxiliares) e de data/hora (HOJE, AGORA, DATA, ANO, MÊS, DIA, DIAS, DIATRABALHOTOTAL, DATADIF) integram o conteúdo exigido para provas, mas o simulador não executa a maioria delas, exceto HOJE().",
      "avancado": "Funções textuais: CONCATENAR (CONCAT) justapõe cadeias e intervalos sem delimitador; TEXTOJUNTAR (TEXTJOIN) insere delimitador e pode ignorar vazios; ESQUERDA (LEFT) extrai n caracteres do início; DIREITA (RIGHT) extrai do final; EXT.TEXTO extrai substring por posição e comprimento; PESQUISAR, LOCALIZAR, ARRUMAR e NUM.CARACT auxiliam na manipulação de caracteres. Funções de data/hora: DATA constrói uma data a partir de ano, mês e dia; ANO, MÊS e DIA extraem partes; DIAS e DATADIF calculam diferenças entre datas; DIATRABALHOTOTAL conta dias úteis. O simulador não executa essas funções textuais nem de data/hora (exceto HOJE), que devem ser estudadas como teoria para provas.",
      "especialista": "SEERRO adota avaliação preguiçosa: só calcula o ramo que será usado, evitando erros desnecessários. Critérios com operadores relacionais exigem aspas no simulador (ex.: \">7\"). DATADIF retorna diferença entre duas datas em dias, meses ou anos, enquanto DIAS retorna apenas dias. O simulador rejeita entradas inválidas com mensagens úteis e documenta as funções suportadas, separando o escopo executável do conteúdo didático exigido em provas. Para questões de concurso, dominar a diferença entre o comportamento do simulador e o Excel real é determinante para o gabarito correto."
    },
    "comparacoes": [
      {
        "tema": "SE encadeado vs. SES (alias de E) no simulador",
        "a": {
          "rotulo": "SE aninhado (SE encadeado)",
          "texto": "Estrutura =SE(cond1; val1; SE(cond2; val2; val3)) que testa condições em sequência e retorna valores distintos por ramo."
        },
        "b": {
          "rotulo": "SES (alias de E no simulador)",
          "texto": "Nesta implementação, SES é alias de E e retorna apenas VERDADEIRO ou FALSO, não valores encadeados."
        },
        "diferencaGabarito": "Para decidir entre múltiplos valores use SE aninhado; SES no simulador não serve como SE encadeado, pois retorna lógico booleano."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "SES(cond1; val1; cond2; val2) funciona como SE encadeado e retorna val1 ou val2.",
        "porqueErrada": "No simulador deste projeto, SES é alias de E e retorna somente VERDADEIRO ou FALSO; não retorna valores encadeados como SE.",
        "versaoCorreta": "Incorreto no simulador: SES é alias de E (retorna VERDADEIRO/FALSO). Para SE encadeado use SE aninhado: =SE(cond1; val1; SE(cond2; val2; val3))."
      },
      {
        "afirmacaoEquivocada": "CONT.VALORES conta células vazias em um intervalo.",
        "porqueErrada": "CONT.VALORES conta células não vazias (texto, número, lógico, erro); células totalmente vazias são ignoradas da contagem.",
        "versaoCorreta": "Errado. CONT.VALORES conta células não vazias; células vazias não entram na contagem. (Nota: o simulador trata texto vazio como vazio, diferença pontual frente ao Excel real.)"
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Funções matemáticas e estatísticas (SOMA, MÉDIA, MÁXIMO, MÍNIMO)",
        "Funções lógicas e condicionais (SE, E, OU, NÃO, SEERRO)",
        "Funções com critério (CONT.SE, SOMASE, MÉDIASE)",
        "Funções textuais e de data/hora"
      ],
      "regras": [
        "SE avalia uma condição e retorna um de dois valores",
        "Critérios com operadores usam aspas (ex.: \">7\")",
        "SES no simulador é alias de E, não SE encadeado"
      ],
      "comparacoes": [
        "SE aninhado (valores encadeados) vs. SES (alias de E, retorna lógico)"
      ],
      "fluxos": [
        "Escolha da função → argumentos e critério → cálculo pelo simulador → resultado ou erro"
      ],
      "excecoes": [
        "O simulador não executa funções textuais nem de data/hora (exceto HOJE)"
      ],
      "palavrasChave": [
        "SOMA",
        "MÉDIA",
        "SE",
        "SES",
        "CONT.SE",
        "SOMASE",
        "SEERRO",
        "HOJE"
      ],
      "checklist": [
        "Identificar a função adequada ao cálculo",
        "Verificar se o simulador suporta a função",
        "Usar aspas em critérios com operador",
        "Diferenciar SES de SE encadeado",
        "Reconhecer aliases em inglês"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular a média aritmética dos valores numéricos preenchidos no intervalo A1:A5 de uma planilha.",
        "dados": "Intervalo A1:A5 preenchido com valores numéricos (algumas células podem conter texto ou vazio); fórmula =MÉDIA(A1:A5).",
        "conceitos": [
          "MÉDIA",
          "intervalo de células"
        ],
        "estrategia": "Aplicar MÉDIA sobre o intervalo; a função soma os valores numéricos e divide pela quantidade, ignorando texto e células vazias.",
        "execucao": [
          "Preencher A1:A5 com valores numéricos",
          "Digitar =MÉDIA(A1:A5) em outra célula",
          "Ler o resultado como soma dividida pela quantidade de números"
        ],
        "resultado": "=MÉDIA(A1:A5) retorna a soma dos valores dividida pela quantidade, ignorando texto e vazio no intervalo.",
        "justificativa": "O resultado é a média aritmética porque MÉDIA soma apenas os números do intervalo e divide pela contagem de células numéricas, desconsiderando texto e vazios.",
        "errosFrequentes": [
          "Acreditar que MÉDIA conta texto e vazio na divisão",
          "Esperar erro quando há texto misto no intervalo"
        ],
        "variacao": "Alterar um dos valores de A1:A5 para texto e verificar que a média ainda ignora esse texto no cálculo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Contar quantas células do intervalo A1:A10 contêm valores estritamente maiores que 7, usando critério com operador relacional.",
        "dados": "A1:A10 com números; critério \">7\"; fórmula =CONT.SE(A1:A10; \">7\").",
        "conceitos": [
          "CONT.SE",
          "critério com operador relacional"
        ],
        "estrategia": "Usar CONT.SE com o intervalo e o critério entre aspas, contando apenas células cujo valor excede 7.",
        "execucao": [
          "Preencher A1:A10 com números diversos",
          "Digitar =CONT.SE(A1:A10; \">7\")",
          "Confirmar que o resultado conta apenas valores > 7"
        ],
        "resultado": "=CONT.SE(A1:A10; \">7\") retorna a quantidade de células com valor estritamente maior que 7.",
        "justificativa": "O gabarito conta só valores > 7 porque CONT.SE aplica o critério relacional com aspas a cada célula do intervalo.",
        "errosFrequentes": [
          "Esquecer aspas em torno do critério com operador",
          "Contar também valores iguais a 7 em vez de só maiores"
        ],
        "variacao": "Mudar o critério para \"<=7\" e verificar que a função conta valores menores ou iguais a 7."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário espera que SES(cond1; val1; cond2; val2) retorne val1 ou val2 como SE encadeado.",
        "dados": "Fórmula =SES(A1>5; \"Aprovado\"; A1>8; \"Excelente\") usada como decisão encadeada.",
        "conceitos": [
          "SES alias de E",
          "SE aninhado",
          "retorno booleano"
        ],
        "estrategia": "Reconhecer que SES no simulador retorna apenas VERDADEIRO/FALSO (alias de E), não valores encadeados; para decisão encadeada usar SE aninhado.",
        "execucao": [
          "Digitar =SES(A1>5; \"Aprovado\"; A1>8; \"Excelente\")",
          "Observar que o resultado é lógico (VERDADEIRO/FALSO), não \"Aprovado\"/\"Excelente\"",
          "Substituir por =SE(A1>5; \"Aprovado\"; SE(A1>8; \"Excelente\"; \"Outro\"))"
        ],
        "resultado": "SES retorna VERDADEIRO ou FALSO (por ser alias de E), não o texto esperado de SE encadeado.",
        "justificativa": "O erro está em confundir SES com SE encadeado; no simulador SES é alias de E e devolve booleano, então a leitura ingênua de que retorna valores está equivocada.",
        "errosFrequentes": [
          "Acreditar que SES funciona como SE com múltiplas condições (como no Excel real)",
          "Usar SES esperando retorno de texto em vez de booleano"
        ],
        "variacao": "Substituir SES por SE aninhado e confirmar que agora retorna os valores de cada ramo corretamente."
      }
    ]
  }
};
