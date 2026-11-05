const enriParcialM1U3P4 = {
  "modulo-1-unidade-3-topico-4-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "PROCV, PROCH, PROCX, ÍNDICE e CORRESP são as funções de pesquisa e referência do Excel e integram o conteúdo programático de informática para concursos. O gabarito depende de distinguir correspondência exata de aproximada: usar VERDADEIRO em tabela desordenada retorna um valor imprevisível, enquanto FALSO exige igualdade rigorosa. Dominar essa diferença evita erros de interpretação de resultado e de causa de erro (#N/A, #REF!, #VAL!).",
      "preRequisitos": [
        "Entender células e intervalos (ex.: A1:B10)",
        "Conhecer tipos de dado do Excel (número, texto, lógico)",
        "Saber inserir uma fórmula começando pelo sinal de igual (=)"
      ],
      "objetivosObservaveis": [
        "Aplicar PROCV com correspondência exata (FALSO) para buscar um valor em tabela",
        "Distinguir correspondência exata de aproximada e indicar quando cada uma se aplica",
        "Usar ÍNDICE e CORRESP juntos para buscas flexíveis por linha e coluna",
        "Identificar os erros #N/A, #REF! e #VAL! e associar cada um à causa provável"
      ],
      "competencias": [
        "Buscar dados em tabelas estruturadas com funções de pesquisa",
        "Escolher a função de pesquisa adequada a cada cenário (PROCV, PROCX, ÍNDICE+CORRESP)",
        "Diagnosticar erros de referência e de busca em fórmulas do Excel"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-3-sub-1 (Tipos de dados, datas, horários e formatos numéricos)",
        "modulo-1-unidade-3-topico-4-sub-2 (Células vazias, erros e fórmulas aninhadas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "As funções de pesquisa (PROCV, PROCX, ÍNDICE e CORRESP) formam um tópico de presença permanente no conteúdo programático de informática para concursos, com itens que pedem o argumento correto ou o resultado de uma busca. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "PROCV busca vertical na primeira coluna de uma tabela e retorna um valor de outra coluna da mesma linha; PROCH faz o mesmo na linha superior; PROCX é a busca moderna, exata por padrão e com argumento de valor quando não encontrado; ÍNDICE retorna o conteúdo de uma célula por posição de linha e coluna; CORRESP retorna a posição (número) de um valor dentro de um intervalo. Correspondência exata exige que o valor procurado seja igual ao da tabela; aproximada usa o último valor menor ou igual ao alvo (ordem crescente) e, sem ordenação, o resultado é imprevisível.",
      "intermediario": "Nesse nível o aluno escolhe entre PROCV exato (FALSO) e aproximado (VERDADEIRO) conforme a tabela esteja ou não ordenada, usa PROCX com o argumento se_não_encontrado para evitar #N/A, e combina ÍNDICE com CORRESP para buscar por qualquer coluna, não apenas a primeira. Reconhece que PROCX exato é o padrão seguro, enquanto aproximada depende de ordenação crescente da coluna de busca; sem ela, o gabarito muda.",
      "avancado": "O aluno constrói buscas bidirecionais com ÍNDICE(CORRESP(...); CORRESP(...)), aninha PROCV dentro de SEERRO para tratar #N/A, e prevê o comportamento da aproximada em tabelas crescentes e decrescentes. Identifica #REF! quando o índice da coluna excede o intervalo e #VAL! quando o tipo do argumento é incompatível, diferenciando erro de execução de erro de sintaxe de fórmula.",
      "especialista": "O especialista audita planilhas com muitas pesquisas, substitui PROCV por ÍNDICE+CORRESP quando a chave não está na primeira coluna, compara desempenho entre funções em grandes intervalos, e documenta a escolha de exata versus aproximada com base na ordenação dos dados. Também antecipa como a ordenação altera o resultado aproximado e valida a robustez da busca contra dados ausentes ou mal formatados."
    },
    "comparacoes": [
      {
        "tema": "PROCV correspondência exata vs aproximada",
        "a": {
          "rotulo": "Correspondência exata (FALSO)",
          "texto": "PROCV(\"Caneta\"; A1:B10; 2; FALSO) retorna o valor da 2ª coluna apenas quando a 1ª coluna contém exatamente \"Caneta\"; se não houver correspondência, retorna #N/A. Não exige ordenação da tabela."
        },
        "b": {
          "rotulo": "Correspondência aproximada (VERDADEIRO)",
          "texto": "PROCV(20; A1:B10; 2; VERDADEIRO) retorna o valor da 2ª coluna da linha com o último valor <= 20 na 1ª coluna; exige a 1ª coluna em ordem crescente, senão o resultado é imprevisível."
        },
        "diferencaGabarito": "Exata requer igualdade e não exige ordenação; aproximada requer ordenação crescente e retorna o maior valor menor ou igual ao alvo. Em tabela desordenada, apenas a exata é confiável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "PROCV com VERDADEIRO funciona em qualquer tabela, ordenada ou não, e sempre encontra o valor mais próximo do alvo.",
        "porqueErrada": "A correspondência aproximada exige a primeira coluna em ordem crescente; em tabela desordenada o resultado pode ser qualquer valor <= alvo e não há garantia de encontrar o mais próximo.",
        "versaoCorreta": "Use FALSO para correspondência exata em qualquer tabela; use VERDADEIRO (aproximada) apenas se a primeira coluna estiver ordenada crescente, caso contrário o resultado é imprevisível."
      },
      {
        "afirmacaoEquivocada": "ÍNDICE retorna a posição de um valor dentro de um intervalo, igual ao que CORRESP faz.",
        "porqueErrada": "ÍNDICE retorna o conteúdo (valor) de uma célula dada a posição de linha e coluna; CORRESP é que retorna a posição numérica de um valor. Trocar as funções inverte o significado do resultado.",
        "versaoCorreta": "ÍNDICE devolve o valor da célula (ex.: o preço); CORRESP devolve a posição (ex.: a linha 3). Para buscar por critério, usa-se CORRESP para achar a posição e ÍNDICE para devolver o valor."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "PROCV (busca vertical por coluna)",
        "PROCH (busca horizontal por linha)",
        "PROCX (busca moderna, exata por padrão)",
        "ÍNDICE (valor por linha e coluna)",
        "CORRESP (posição numérica de um valor)"
      ],
      "regras": [
        "Correspondência exata exige igualdade entre valor procurado e valor da tabela",
        "Correspondência aproximada exige a primeira coluna ordenada crescente",
        "PROCX é exata por padrão e aceita argumento de valor quando não encontrado",
        "ÍNDICE e CORRESP juntos permitem buscar por qualquer coluna, não apenas a primeira"
      ],
      "comparacoes": [
        "PROCV exata (FALSO) vs aproximada (VERDADEIRO): a primeira exige igualdade, a segunda exige ordenação",
        "PROCX substitui PROCV quando se deseja busca exata com tratamento de não encontrado"
      ],
      "fluxos": [
        "Escolher a função de pesquisa -> definir se a busca é exata ou aproximada -> verificar ordenação -> aplicar PROCV/PROCX ou ÍNDICE+CORRESP -> tratar #N/A com SEERRO"
      ],
      "excecoes": [
        "Tabela desordenada com correspondência aproximada resulta imprevisível",
        "Índice de coluna maior que o intervalo gera #REF!",
        "Valor não encontrado com correspondência exata gera #N/A"
      ],
      "palavrasChave": [
        "PROCV",
        "PROCH",
        "PROCX",
        "ÍNDICE",
        "CORRESP",
        "correspondência exata",
        "correspondência aproximada",
        "#N/A"
      ],
      "checklist": [
        "Definir se a busca é exata ou aproximada",
        "Confirmar ordenação da primeira coluna se usar aproximada",
        "Escolher FALSO para exata ou VERDADEIRO para aproximada",
        "Usar SEERRO para tratar #N/A quando o valor pode não existir",
        "Preferir ÍNDICE+CORRESP quando a chave não está na primeira coluna"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Buscar o preço do produto \"Caneta\" em uma tabela de dois colunas (produto na coluna A, preço na coluna B) usando PROCV com correspondência exata.",
        "dados": "Tabela A1:B10: A1=\"Caneta\", B1=2,50; A2=\"Lápis\", B2=1,20; fórmula =PROCV(\"Caneta\"; A1:B10; 2; FALSO).",
        "conceitos": [
          "PROCV",
          "correspondência exata"
        ],
        "estrategia": "Usar PROCV com o valor procurado \"Caneta\", o intervalo A1:B10, o índice de coluna 2 e o argumento FALSO para forçar correspondência exata.",
        "execucao": [
          "1. Digitar =PROCV(\"Caneta\"; A1:B10; 2; FALSO) na célula de destino.",
          "2. O Excel procura \"Caneta\" na coluna A e encontra na linha 1.",
          "3. Retorna o valor da coluna 2 (preço) da linha 1: 2,50."
        ],
        "resultado": "=PROCV(\"Caneta\"; A1:B10; 2; FALSO) retorna 2,50, o preço da caneta, porque FALSO impõe correspondência exata.",
        "justificativa": "O resultado 2,50 é o gabarito porque FALSO garante que apenas \"Caneta\" exata na coluna A corresponde, devolvendo o preço da mesma linha na coluna B.",
        "errosFrequentes": [
          "Esquecer FALSO e usar VERDADEIRO em tabela desordenada, gerando resultado imprevisível.",
          "Informar índice de coluna maior que o intervalo (ex.: 3 em A1:B10), causando #REF!."
        ],
        "variacao": "Buscar o preço do produto \"Borracha\" na mesma tabela usando =PROCV(\"Borracha\"; A1:B10; 2; FALSO), que retorna o preço correspondente ou #N/A se não existir."
      },
      {
        "tipo": "aplicacao",
        "problema": "Usar PROCX para buscar o preço do código 20 em uma tabela onde os códigos estão na coluna A e os preços na coluna B, retornando uma mensagem personalizada se o código não existir.",
        "dados": "Intervalo A1:A3 com códigos 10, 20, 30; B1:B3 com preços 5,00, 8,00, 12,00; fórmula =PROCX(20; A1:A3; B1:B3; \"não há\").",
        "conceitos": [
          "PROCX",
          "valor quando não encontrado"
        ],
        "estrategia": "Aplicar PROCX com o valor procurado 20, o intervalo de busca A1:A3, o intervalo de resultados B1:B3 e o texto alternativo \"não há\" para o caso de ausência.",
        "execucao": [
          "1. Digitar =PROCX(20; A1:A3; B1:B3; \"não há\").",
          "2. O PROCX procura 20 em A1:A3 e encontra na linha 2.",
          "3. Retorna o valor correspondente de B1:B3: 8,00."
        ],
        "resultado": "=PROCX(20; A1:A3; B1:B3; \"não há\") retorna 8,00, pois o código 20 existe e seu preço é 8,00.",
        "justificativa": "O gabarito 8,00 ocorre porque 20 está na segunda posição de A1:A3 e o valor correspondente na segunda posição de B1:B3 é 8,00; o argumento \"não há\" não é acionado.",
        "errosFrequentes": [
          "Inverter os intervalos de busca e de resultado, devolvendo o código ao invés do preço.",
          "Omitir o argumento se_não_encontrado, fazendo PROCX retornar #N/A quando o código não existe."
        ],
        "variacao": "Buscar o código 25 (inexistente) na mesma tabela com =PROCX(25; A1:A3; B1:B3; \"não há\"), que deve retornar o texto \"não há\"."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário aplica PROCV aproximado (VERDADEIRO) em uma tabela cuja primeira coluna não está ordenada e espera obter o valor mais próximo do alvo.",
        "dados": "Tabela A1:B3 desordenada: A1=50, B1=100; A2=10, B2=200; A3=30, B3=300; fórmula =PROCV(20; A1:B3; 2; VERDADEIRO).",
        "conceitos": [
          "correspondência aproximada",
          "ordenação",
          "#N/A"
        ],
        "estrategia": "Avaliar que a aproximada exige a primeira coluna ordenada crescente; como a tabela está desordenada, o resultado é imprevisível e não confiável.",
        "execucao": [
          "1. Observar que a coluna A (50, 10, 30) não está ordenada crescente.",
          "2. Aplicar PROCV(20; ...; VERDADEIRO): sem ordenação, o Excel pode retornar qualquer valor <= 20 ou #N/A.",
          "3. Concluir que o resultado não é o valor mais próximo e sim imprevisível."
        ],
        "resultado": "O resultado é imprevisível (pode ser qualquer valor <= 20 ou #N/A), não o valor mais próximo de 20, porque a tabela não está ordenada.",
        "justificativa": "O gabarito correto é que a aproximada requer ordenação crescente; sem ela o resultado é indefinido, devendo-se usar FALSO (exata) ou ordenar a tabela primeiro.",
        "errosFrequentes": [
          "Assumir que aproximada sempre retorna o valor mais próximo do alvo, independentemente da ordenação.",
          "Acreditar que PROCV aproximado ordena a tabela automaticamente antes de buscar."
        ],
        "variacao": "Ordenar a coluna A crescente (10, 30, 50) e aplicar =PROCV(20; A1:B3; 2; VERDADEIRO), que então retorna 200 (último valor <= 20 é 10, preço 200)."
      }
    ]
  },
  "modulo-1-unidade-3-topico-4-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Células vazias, códigos de erro e fórmulas aninhadas são temas de presença permanente no conteúdo programático de informática para concursos porque o gabarito depende de prever o comportamento do Excel em situações limite. Uma célula vazia vale 0 em aritmética, cadeia vazia em concatenação e não casa com critério numérico no simulador deste projeto; erros como #N/A, #DIV/0! e #VAL! têm causas distintas; e fórmulas aninhadas avaliam de dentro para fora, com avaliação preguiçosa do SE/SEERRO no simulador. Confundir essas regras muda o gabarito de questões de diagnóstico e previsão de resultado.",
      "preRequisitos": [
        "Tipos de dado do Excel (número, texto, lógico, erro)",
        "Funções básicas (PROCV, MÉDIA, SOMA)",
        "Noção de erro de sintaxe vs erro de execução"
      ],
      "objetivosObservaveis": [
        "Prever o efeito de célula vazia em aritmética, concatenação e critérios",
        "Associar cada código de erro (#N/A, #DIV/0!, #VAL!, #REF!, #NUM!) à sua causa",
        "Neutralizar erros com SEERRO(PROCV(...); alternativa)",
        "Avaliar fórmulas aninhadas passo a passo, de dentro para fora"
      ],
      "competencias": [
        "Depurar fórmulas e identificar a causa de erros de planilha",
        "Construir fórmulas robustas com SEERRO e SE",
        "Prever resultados de fórmulas aninhadas considerando ordem de avaliação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-3-sub-1 (Tipos de dados, datas, horários e formatos numéricos)",
        "modulo-1-unidade-3-topico-4-sub-1 (PROCV, PROCH, PROCX, ÍNDICE e CORRESP; correspondência exata vs aproximada)"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Diagnóstico de erros (#N/A, #DIV/0!, #VAL!) e previsão de fórmulas aninhadas integram o conteúdo programático de informática para concursos, exigindo associação exata de causa e efeito. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Célula vazia tem significado distinto por contexto: em aritmética vale zero (=A1+B1 com B1 vazia soma 0); em concatenação vale cadeia vazia (A1&\"x\" com A1 vazia resulta \"x\"); em critérios de funções condicionais (CONT.SE) no simulador deste projeto não casa com critérios numéricos. Erros são valores de tipo erro: #N/A (não encontrado), #DIV/0! (divisão por zero ou vazio), #VAL! (tipo incompatível), #REF! (referência inválida), #NUM! (número inválido). SEERRO captura erros de execução e retorna um valor alternativo. Fórmulas aninhadas colocam funções dentro de funções (ex.: =SEERRO(PROCV(...);\"não encontrado\")).",
      "intermediario": "O aluno diferencia erro de execução (capturado por SEERRO, ex.: #DIV/0! de MÉDIA sobre intervalo vazio) de erro de sintaxe (parêntese faltando, rejeitado antes do cálculo, não capturado por SEERRO). Avalia fórmulas aninhadas de dentro para fora: em =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\"), MÉDIA é calculada primeiro, depois o SE escolhe o ramo. A avaliação preguiçosa do simulador não calcula ramos não escolhidos do SE/SEERRO.",
      "avancado": "O aluno aplica o padrão SEERRO(PROCV(...); alternativo) como receita de robustez em pesquisas, prevê que #VAL! pode surgir de MÉDIA sobre texto avaliado antes do SEERRO, e reconhece que erros de entrada (sintaxe inválida) são levantados antes da execução. Distingue o comportamento do simulador (vazio nunca casa com critério numérico) do Excel real (vazio pode casar com critério igual a zero).",
      "especialista": "O especialista audita planilhas com muitas fórmulas aninhadas, valida o comportamento de células vazias em cada contexto (aritmética, concatenação, critério), documenta a escolha entre SEERRO e checagem explícita de vazio, e antecipa como a ordem de avaliação e a preguiçosa do simulador afetam resultados. Também diferencia erro de execução (tratável) de erro de entrada (não tratável por SEERRO)."
    },
    "comparacoes": [
      {
        "tema": "Erro de execução vs erro de sintaxe (entrada)",
        "a": {
          "rotulo": "Erro de execução",
          "texto": "Ocorre durante o cálculo da fórmula, ex.: #DIV/0! ao dividir por zero/vazio, #VAL! de tipo incompatível. É capturado por SEERRO, que retorna o valor alternativo."
        },
        "b": {
          "rotulo": "Erro de sintaxe/entrada",
          "texto": "Ocorre antes do cálculo, ex.: parêntese faltando ou nome de função inexistente. É rejeitado na entrada com mensagem útil; SEERRO não chega a ser avaliado."
        },
        "diferencaGabarito": "SEERRO neutraliza erros de execução, mas não erros de sintaxe, que impedem a execução da fórmula."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "SEERRO captura qualquer erro, incluindo fórmulas com parêntese faltando e #VAL! de texto não numérico, sempre retornando o alternativo.",
        "porqueErrada": "SEERRO captura erros de execução, mas não erros de entrada (sintaxe inválida) levantados antes do cálculo. Além disso, #VAL! de MÉDIA sobre texto só é capturado se o erro ocorrer dentro do argumento avaliado do SEERRO.",
        "versaoCorreta": "SEERRO captura erros de execução (ex.: #DIV/0!, #VAL! durante cálculo) e retorna o alternativo; erros de sintaxe (parêntese faltando) são rejeitados antes da execução e não são capturados."
      },
      {
        "afirmacaoEquivocada": "Em critérios de funções condicionais (ex.: CONT.SE), célula vazia casa com critério numérico 0, como no Excel real.",
        "porqueErrada": "No simulador deste projeto, célula vazia nunca casa com critérios numéricos — diferença declarada em relação ao Excel real, no qual o vazio pode casar com critério igual a zero. Não se generaliza de uma implementação para a outra.",
        "versaoCorreta": "No simulador, vazio não casa com critério numérico em CONT.SE e irmãs; essa é uma limitação declarada, diferente do comportamento do Excel real."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Célula vazia (vários significados por contexto)",
        "Códigos de erro (#N/A, #DIV/0!, #VAL!, #REF!, #NUM!)",
        "SEERRO (captura erros e retorna alternativo)",
        "Fórmula aninhada (função dentro de função)",
        "Avaliação preguiçosa do SE/SEERRO"
      ],
      "regras": [
        "Em aritmética, célula vazia vale zero",
        "Em concatenação, célula vazia vale cadeia vazia",
        "No simulador, vazio não casa com critérios numéricos",
        "Fórmulas aninhadas avaliam de dentro para fora"
      ],
      "comparacoes": [
        "Erro de execução (capturado por SEERRO) vs erro de sintaxe (não capturado)",
        "Simulador (vazio nunca casa com critério numérico) vs Excel real (pode casar)"
      ],
      "fluxos": [
        "Identificar erro -> associar código à causa -> decidir se SEERRO se aplica -> aplicar SEERRO(fórmula; alternativo) ou corrigir sintaxe"
      ],
      "excecoes": [
        "Erros de entrada (sintaxe inválida) não são capturados por SEERRO",
        "Vazio em critério numérico não casa no simulador (difere do Excel real)"
      ],
      "palavrasChave": [
        "célula vazia",
        "#N/A",
        "#DIV/0!",
        "#VAL!",
        "#REF!",
        "SEERRO",
        "fórmula aninhada",
        "avaliação preguiçosa"
      ],
      "checklist": [
        "Prever o efeito de célula vazia por contexto (aritmética, concatenação, critério)",
        "Associar cada código de erro à sua causa típica",
        "Usar SEERRO para neutralizar erros de execução",
        "Avaliar fórmulas aninhadas de dentro para fora",
        "Não confiar em SEERRO para erros de sintaxe de entrada"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Evitar o erro #N/A de um PROCV quando o produto pesquisado não existe na tabela, exibindo uma mensagem amigável em vez do erro.",
        "dados": "Tabela A1:B10 com produtos e preços; fórmula =SEERRO(PROCV(\"X\";A1:B10;2;FALSO);\"não encontrado\").",
        "conceitos": [
          "PROCV",
          "SEERRO",
          "#N/A"
        ],
        "estrategia": "Encapsular o PROCV dentro de SEERRO: se o PROCV retornar #N/A (valor não encontrado), o SEERRO devolve o texto alternativo; caso contrário, retorna o preço encontrado.",
        "execucao": [
          "1. Digitar =SEERRO(PROCV(\"X\";A1:B10;2;FALSO);\"não encontrado\").",
          "2. Se \"X\" não existir na coluna A, PROCV gera #N/A.",
          "3. O SEERRO captura o #N/A e retorna \"não encontrado\"."
        ],
        "resultado": "=SEERRO(PROCV(\"X\";A1:B10;2;FALSO);\"não encontrado\") retorna \"não encontrado\" quando o produto não existe, ou o preço quando existe.",
        "justificativa": "O gabarito é o texto alternativo porque o SEERRO intercepta o #N/A do PROCV antes que ele se propague, exibindo a mensagem amigável.",
        "errosFrequentes": [
          "Esquecer o FALSO no PROCV, fazendo busca aproximada imprevisível.",
          "Acreditar que SEERRO corrige qualquer erro, incluindo de sintaxe de fórmula."
        ],
        "variacao": "Pesquisar um produto existente (ex.: \"Caneta\") com a mesma fórmula, que deve retornar o preço real em vez da mensagem alternativo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Prever o resultado de =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\") com A1:A5 = 8;7;9;6;8, considerando a avaliação preguiçosa do simulador.",
        "dados": "A1:A5 = 8, 7, 9, 6, 8; MÉDIA = 7,6; fórmula =SE(MÉDIA(A1:A5)>=7;\"aprovado\";\"reprovado\").",
        "conceitos": [
          "SE",
          "MÉDIA",
          "avaliação preguiçosa",
          "fórmula aninhada"
        ],
        "estrategia": "Avaliar de dentro para fora: primeiro MÉDIA(8;7;9;6;8) = 7,6; depois comparar 7,6>=7 (VERDADEIRO); então o SE escolhe o ramo \"aprovado\" e não avalia \"reprovado\".",
        "execucao": [
          "1. Calcular MÉDIA(8;7;9;6;8) = 38/5 = 7,6.",
          "2. Avaliar a condição 7,6>=7, que é VERDADEIRO.",
          "3. O SE escolhe o primeiro ramo \"aprovado\" sem avaliar \"reprovado\"."
        ],
        "resultado": "O resultado é \"aprovado\", pois a média 7,6 é maior ou igual a 7 e o ramo verdadeiro é selecionado.",
        "justificativa": "O gabarito \"aprovado\" segue da avaliação de dentro para fora: MÉDIA primeiro, depois a comparação, depois o ramo verdadeiro do SE.",
        "errosFrequentes": [
          "Avaliar os dois ramos do SE antes de escolher, ignorando a avaliação preguiçosa.",
          "Achar que MÉDIA de 8,7,9,6,8 é um valor inteiro diferente de 7,6."
        ],
        "variacao": "Alterar A1:A5 para 5;6;4;5;6 (média 5,2) com a mesma fórmula, que deve retornar \"reprovado\"."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário espera que SEERRO capture #VAL! de texto não numérico em MÉDIA e também fórmulas com parêntese faltando, retornando sempre o alternativo.",
        "dados": "MÉDIA sobre intervalo com texto gera #VAL! durante o cálculo; fórmula com parêntese faltando é rejeitada na entrada; SEERRO envolvendo qualquer um deles.",
        "conceitos": [
          "#VAL!",
          "SEERRO",
          "erro de execução vs erro de sintaxe"
        ],
        "estrategia": "Diferenciar erro de execução (#VAL! gerado durante o cálculo, capturável por SEERRO) de erro de sintaxe (parêntese faltando, rejeitado antes da execução, não capturável).",
        "execucao": [
          "1. Reconhecer que #VAL! de MÉDIA sobre texto ocorre durante o cálculo e SEERRO ao redor o captura.",
          "2. Reconhecer que parêntese faltando é erro de entrada, rejeitado antes da execução, e SEERRO não chega a ser avaliado.",
          "3. Concluir que a expectativa do usuário é apenas parcialmente correta."
        ],
        "resultado": "SEERRO captura #VAL! de execução (ex.: MÉDIA de texto), mas não captura erro de sintaxe (parêntese faltando), que é rejeitado antes da execução.",
        "justificativa": "O gabarito distingue os dois casos: erro de execução é tratável por SEERRO; erro de sintaxe impede a execução e não é capturado.",
        "errosFrequentes": [
          "Acreditar que SEERRO captura erros de sintaxe (parêntese faltando).",
          "Achar que qualquer #VAL! é capturado independentemente de quando ocorre no cálculo."
        ],
        "variacao": "Usar =SEERRO(MÉDIA(A1:A3);\"sem dados\") com A1:A3 contendo texto, que retorna \"sem dados\" porque o #VAL! ocorre durante o cálculo."
      }
    ]
  }
};
