const enriParcialM1U3P2 = {
  "modulo-1-unidade-3-topico-2-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Errar o eixo travado pelo cifrão inverte o gabarito de um item de cálculo: uma fórmula copiada com referência solta produz resultados diferentes em cada destino, e em tabelas com fator fixo (alíquota ou taxa em célula única) o cálculo corrompe a partir da segunda linha. Dominar relativa, absoluta e mista é pré-requisito para montar planilhas de cálculo confiáveis e para interpretar corretamente itens de concurso que pedem o valor de uma célula após cópia de fórmula entre origem e destino.",
      "preRequisitos": [
        "subtópico 1 da unidade 1.3 (células, intervalos e referências)"
      ],
      "objetivosObservaveis": [
        "classificar uma referência de célula pela notação (relativa, absoluta ou mista)",
        "prever a fórmula resultante após cópia entre origem e destino informados, aplicando o delta apenas aos eixos relativos",
        "escolher a classe de referência adequada para cada cenário de tabela, especialmente fator fixo em célula única"
      ],
      "competencias": [
        "raciocínio com coordenadas de planilha (coluna e linha como eixos independentes)",
        "análise de dependência entre células ao copiar fórmulas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-2-sub-2 (Operadores aritméticos, relacionais, lógicos e de texto; precedência) — sequência imediata no mesmo tópico 1.3 do Excel"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Referências relativas, absolutas e mistas são objeto de avaliação em questões de informática de concursos que pedem o resultado de uma fórmula após a cópia entre células; é item numérico sem calculadora, classificado como de alta relevância no programa de informática. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Entender que a referência relativa acompanha a cópia (desloca coluna e linha na mesma medida da fórmula) enquanto a absoluta fica parada em qualquer destino. Analogia didática: endereço completo com CEP versus 'a casa ao lado'. O cifrão trava o eixo indicado: $ antes da letra trava a coluna, $ antes do número trava a linha, $A$1 trava ambos. Na célula de origem o valor calculado é idêntico com ou sem $; a diferença aparece somente ao copiar.",
      "intermediario": "Prever o resultado de cópia envolvendo referências mistas: aplicar o delta de colunas e de linhas entre origem e destino apenas nos eixos livres, mantendo os eixos travados pelo $. Exemplo: copiar =A$1+B1 de B2 para C2 (delta +1 coluna, 0 linhas) resulta em =B$1+C1. Praticar com dois exercícios de coordenadas, incluindo cópia para cima/esquerda (delta negativo), como =A3 de B3 para B1 que produz =A1.",
      "avancado": "Montar tabela com fator fixo em célula única (ex.: taxa de desconto em D1) e copiar a fórmula de preço final para dezenas de linhas, referenciando o fator como $D$1 para que permaneça fixo enquanto B2, C2 etc. deslocam. Diagnosticar por que usar D1 solto corrompe o cálculo a partir da segunda linha (D1 vira D2, D3... e cada linha aponta para uma célula errada como taxa).",
      "especialista": "Resolver questão que combina cópia com funções de pesquisa, ex.: =PROCV(A2; $F$1:$G$10; 2; FALSO) copiada para baixo, justificando por que o intervalo de busca deve ser absoluto ($F$1:$G$10) para não deslocar junto com a fórmula. Reconhecer a limitação declarada do simulador deste projeto, que não suporta nomes definidos nem referências estruturadas."
    },
    "comparacoes": [
      {
        "tema": "Referência relativa versus referência absoluta",
        "a": {
          "rotulo": "Relativa (A1)",
          "texto": "Desloca coluna e linha na mesma medida em que a fórmula se move ao ser copiada; se a fórmula andar uma coluna e uma linha, a referência anda uma coluna e uma linha."
        },
        "b": {
          "rotulo": "Absoluta ($A$1)",
          "texto": "O cifrão trava a coluna e a linha; a referência permanece idêntica em qualquer destino de cópia, sendo ideal para fator fixo usado por várias linhas (ex.: taxa em $D$1)."
        },
        "diferencaGabarito": "Na relativa o destino muda com a cópia; na absoluta o destino é sempre o mesmo. Esquecer o $ em fator fixo inverte o gabarito e corrompe o cálculo das linhas seguintes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A$1 trava a coluna A e a linha 1 ao mesmo tempo.",
        "porqueErrada": "Troca dos eixos da notação: o cifrão antes da letra trava a coluna, o cifrão antes do número trava a linha.",
        "versaoCorreta": "A$1 trava apenas a linha 1 e deixa a coluna relativa; quem trava coluna e linha simultaneamente é $A$1, não A$1."
      },
      {
        "afirmacaoEquivocada": "Trocar A1 por $A$1 muda o resultado calculado na própria célula de origem.",
        "porqueErrada": "Confunde comportamento na célula de origem com comportamento ao copiar a fórmula para outro destino.",
        "versaoCorreta": "Na célula de origem o valor é idêntico com ou sem cifrão; o $ só altera o ajuste quando a fórmula é copiada para outro endereço."
      },
      {
        "afirmacaoEquivocada": "Copiar uma fórmula para cima ou para a esquerda não altera referências relativas.",
        "porqueErrada": "Supõe que somente cópia para baixo ou para a direita desloca as referências, ignorando que o delta pode ser negativo.",
        "versaoCorreta": "O delta pode ser negativo; copiar =A3 de B3 para B1 (duas linhas para cima) produz =A1, pois eixos relativos deslocam na mesma medida do delta."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "referência relativa",
        "referência absoluta",
        "referência mista",
        "eixo travado pelo cifrão ($)",
        "delta de cópia",
        "fator fixo de tabela"
      ],
      "regras": [
        "destino = origem + delta nos eixos relativos",
        "$ antes da letra trava a coluna",
        "$ antes do número trava a linha",
        "$A$1 trava ambos os eixos"
      ],
      "comparacoes": [
        "relativa desloca com a cópia; absoluta permanece idêntica em qualquer destino",
        "mista $A1 trava coluna; mista A$1 trava linha — inverter os eixos é a pegadinha de maior peso no conteúdo programático"
      ],
      "fluxos": [
        "calcular delta de colunas e linhas entre origem e destino",
        "aplicar delta apenas nos eixos relativos, mantendo os travados por $",
        "escrever a fórmula resultante com os novos endereços"
      ],
      "excecoes": [
        "o $ não altera o valor calculado na célula de origem",
        "cópia para cima/esquerda usa delta negativo",
        "nomes definidos e referências estruturadas não funcionam no simulador deste projeto"
      ],
      "palavrasChave": [
        "relativa",
        "absoluta",
        "mista",
        "cifrão",
        "delta",
        "cópia de fórmula",
        "fator fixo"
      ],
      "checklist": [
        "classifico uma referência pela notação",
        "prevo o resultado de uma cópia dada origem e destino",
        "escolho a classe certa para fator fixo em célula única",
        "sei o que o simulador deste projeto suporta e não suporta"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Copiar a fórmula =A1+B1 da célula B2 para a célula C3, em planilha onde ambas as referências são relativas (sem cifrão).",
        "dados": "origem B2 com fórmula =A1+B1; destino C3; delta de +1 coluna e +1 linha; ambas as referências relativas (sem cifrão).",
        "conceitos": [
          "referência relativa",
          "delta de cópia"
        ],
        "estrategia": "A referência relativa desloca na mesma medida em que a fórmula se move; como a fórmula anda uma coluna e uma linha, cada referência desloca uma coluna e uma linha.",
        "execucao": [
          "1) Identificar a fórmula na origem: =A1+B1 em B2.",
          "2) Calcular o delta de B2 para C3: +1 coluna (B→C) e +1 linha (2→3).",
          "3) Aplicar o delta a A1 (relativa): vira B2.",
          "4) Aplicar o delta a B1 (relativa): vira C2.",
          "5) Escrever a fórmula resultante no destino: =B2+C2."
        ],
        "resultado": "=B2+C2 — a cópia desloca uma coluna e uma linha; ambas as referências são relativas e deslocam na mesma medida (delta +1 coluna, +1 linha).",
        "justificativa": "O gabarito =B2+C2 resulta de aplicar o mesmo delta (+1 coluna, +1 linha) a ambas as referências relativas, sem nenhum cifrão travando eixo, o que confere ao resultado coerência com o comportamento da cópia de fórmula.",
        "errosFrequentes": [
          "Acreditar que as referências permanecem fixas ao copiar, produzindo =A1+B1 inalterado.",
          "Deslocar apenas uma referência e manter a outra fixa, gerando =B2+B1 ou =A1+C2 incorretos."
        ],
        "variacao": "Copiar =A1+B1 de D4 para F6 (delta +2 colunas, +2 linhas): o aluno deve prever =C5+D5 aplicando o mesmo delta a ambas as referências relativas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Tabela de 20 produtos: a taxa de desconto está em D1 e a fórmula de preço final =B2*(1-C2*D1) será copiada para baixo nas linhas 3 a 21. Como referenciar D1?",
        "dados": "fórmula =B2*(1-C2*D1) na linha 2; cópia para baixo até a linha 21; taxa fixa em D1; B2, C2 relativas; D1 deve permanecer fixo.",
        "conceitos": [
          "referência absoluta",
          "fator fixo de tabela"
        ],
        "estrategia": "D1 é o fator fixo compartilhado por todas as linhas, portanto deve ser absoluta ($D$1); B2 e C2 são relativas e devem deslocar à medida que a fórmula é copiada para baixo (B3, C3...).",
        "execucao": [
          "1) Identificar que B2 e C2 variam por linha (quantidade e preço unitário de cada produto).",
          "2) Identificar que D1 é a taxa de desconto única, usada por todas as 20 linhas.",
          "3) Escrever D1 como absoluta: $D$1, para que não descolle ao copiar.",
          "4) Montar a fórmula na linha 2: =B2*(1-C2*$D$1).",
          "5) Copiar para baixo: B2→B3, C2→C3, enquanto $D$1 permanece apontando à taxa única."
        ],
        "resultado": "Como $D$1 (absoluta). Ao copiar para baixo, B2 vira B3, B4... e C2 vira C3, C4... (relativas corretas), enquanto $D$1 permanece apontando a taxa única. Sem o $, D1 viria D2, D3... e cada linha usaria uma célula errada como taxa — o cálculo corrompe a partir da segunda linha.",
        "justificativa": "O gabarito usa $D$1 porque apenas a referência absoluta preserva o apontamento à célula da taxa em todas as cópias, enquanto as relativas B2 e C2 ajustam corretamente linha a linha, evitando a corrompção do cálculo a partir da segunda linha.",
        "errosFrequentes": [
          "Usar D1 sem cifrão, fazendo cada linha referenciar uma célula diferente como taxa.",
          "Travar ambos os eixos de B2 e C2 ($B$2*$C$2), impedindo que a fórmula descole por linha."
        ],
        "variacao": "A tabela passa a ter a taxa de desconto em uma coluna fixa (ex.: $A1) que varia por linha mas mantém a coluna; o aluno deve usar mista $A1 para travar a coluna e deixar a linha relativa."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário copia =A$1+B1 de B2 para C2 esperando que A$1 não ajuste linha e que B1 não ajuste coluna.",
        "dados": "fórmula =A$1+B1 em B2; destino C2; delta de +1 coluna e 0 linhas; A$1 (linha travada, coluna relativa); B1 (totalmente relativa).",
        "conceitos": [
          "referência mista",
          "eixo travado pelo cifrão"
        ],
        "estrategia": "A$1 trava apenas a linha 1, deixando a coluna A relativa; B1 é totalmente relativa. Copiando de B2 para C2 (delta +1 coluna, 0 linhas), a coluna de A$1 desloca (A→B) e B1 desloca coluna (B→C), enquanto a linha de B1 não muda porque o delta de linhas é zero.",
        "execucao": [
          "1) Identificar A$1 como mista: linha 1 travada, coluna A relativa.",
          "2) Identificar B1 como totalmente relativa.",
          "3) Calcular delta de B2 para C2: +1 coluna, 0 linhas.",
          "4) Aplicar delta a A$1: coluna relativa desloca A→B, linha travada mantém 1 → B$1.",
          "5) Aplicar delta a B1: coluna B→C, linha 1 mantém 0 delta → C1.",
          "6) Escrever o resultado: =B$1+C1."
        ],
        "resultado": "Incorreto: A$1 trava apenas a linha 1 (a coluna A é relativa) e B1 é totalmente relativa. Copiando de B2 para C2 (delta +1 coluna, 0 linhas) o resultado é =B$1+C1; a coluna de A$1 desloca e B1 desloca coluna (a linha de B1 não muda porque o delta de linhas é zero).",
        "justificativa": "O resultado =B$1+C1 é o gabarito porque A$1 só trava a linha (coluna desloca para B) e B1 desloca coluna para C sem mudar linha (delta de linhas zero), desmentindo a leitura ingênua de que ambos ficariam parados.",
        "errosFrequentes": [
          "Acreditar que A$1 trava ambos os eixos, esperando que A permaneça fixo.",
          "Acreditar que B1 não se move porque o destino está na mesma linha, ignorando o deslocamento de coluna."
        ],
        "variacao": "Copiar =A$1+B1 de B2 para B1 (delta 0 colunas, −1 linha): o aluno deve prever =A$1+B0, percebendo que a linha de B1 desloca para cima enquanto a coluna de A$1 fica fixa."
      }
    ]
  },
  "modulo-1-unidade-3-topico-2-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Errar a precedência ou a associatividade muda o gabarito de questões que pedem o resultado de expressões como -2^2 ou 2^3^2, e confundir operador lógico (função E) com símbolo é erro clássico em provas. O percentual como operador e a concatenação com & também aparecem em itens de planilha; dominar a ordem completa e as diferenças declaradas entre o simulador deste projeto e o Excel real evita perdas desnecessárias em concursos de informática.",
      "preRequisitos": [
        "subtópico 1 da unidade 1.3 (referências relativas, absolutas e mistas)"
      ],
      "objetivosObservaveis": [
        "classificar operadores do Excel por classe (aritméticos, relacionais, lógicos, de texto)",
        "ordenar a avaliação de uma expressão pela precedência completa e pelo papel dos parênteses",
        "calcular expressões com potência, percentual e concatenação, incluindo -2^2 e 2^3^2",
        "declarar as diferenças do simulador deste projeto em relação ao Excel real"
      ],
      "competencias": [
        "cálculo manual de expressões com ordem de operações",
        "previsão de resultados de fórmulas sem execução no software"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-2-sub-1 (Referências relativas, absolutas e mistas) — subtópico anterior do mesmo tópico 1.3 do Excel"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Operadores e precedência são itens centrais de informática em concursos que pedem o resultado de expressões numéricas sem calculadora; a confusão entre a função E e o símbolo lógico altera o resultado da expressão e, por isso, o gabarito. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Distinguir as classes de operadores do Excel: aritméticos (+, -, *, /, ^, %), relacionais (=, <>, <, >, <=, >=), lógicos (funções E, OU, NÃO, não símbolos) e de texto (&). Aplicar a ordem simples de precedência: multiplicação e divisão antes de soma e subtração, e usar parênteses para forçar a ordem desejada quando necessário.",
      "intermediario": "Calcular com percentual como operador (5+10% = 5,1, porque % divide o operando à esquerda por 100) e concatenar textos com & (=A1&\" \"&B1 resulta \"Maria Silva\" para A1=\"Maria\" e B1=\"Silva\"). Usar parênteses para alterar a ordem natural de avaliação e prever o resultado de comparações relacionais (VERDADEIRO/FALSO).",
      "avancado": "Resolver -2^2 = 4 (o unário menos se aplica antes da potência nessa implementação, como no Excel) e 2^3^2 = 512 (potência associativa à direita: 2^(3^2) = 2^9, não (2^3)^2 = 64). Prever o resultado de comparações encadeadas na célula, sabendo que o simulador avalia da esquerda para a direita.",
      "especialista": "Auditar uma fórmula sem parênteses e reescrevê-la com parênteses explícitos sem alterar o resultado. Explicar a diferença documentada do simulador nas comparações encadeadas (1=1=1 avaliado da esquerda para a direita no simulador; o Excel real rejeita a sintaxe)."
    },
    "comparacoes": [
      {
        "tema": "Operador lógico versus função lógica no Excel",
        "a": {
          "rotulo": "Não existem símbolos lógicos",
          "texto": "No Excel em português, E, OU e NÃO são funções (ex.: E(cond1;cond2)), não operadores-símbolo como && ou ||; a alternativa que usa \"&&\" como E está errada."
        },
        "b": {
          "rotulo": "Funções lógicas",
          "texto": "E, OU e NÃO retornam VERDADEIRO ou FALSO e se classificam como funções lógicas, não como operadores aritméticos ou relacionais."
        },
        "diferencaGabarito": "Confundir o operador lógico com o símbolo altera o gabarito; o correto é classificar E/OU/NÃO como funções."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O operador & é um operador aritmético.",
        "porqueErrada": "Troca entre classes de operadores: & pertence à classe de texto, não à aritmética.",
        "versaoCorreta": "& é operador de texto (concatenação); os aritméticos são +, -, *, /, ^ e %."
      },
      {
        "afirmacaoEquivocada": "2^3^2 resulta 64 (associatividade à esquerda).",
        "porqueErrada": "Aplica associatividade à esquerda, que não é a regra da potência no Excel nem no simulador.",
        "versaoCorreta": "A potência é associativa à direita: 2^3^2 é 2^(3^2) = 2^9 = 512; para obter 64 seriam necessários parênteses explícitos: (2^3)^2."
      },
      {
        "afirmacaoEquivocada": "5+10% resulta 5,5.",
        "porqueErrada": "Lê o % como \"10 por cento de 5\", tratando o percentual como fração do primeiro operando.",
        "versaoCorreta": "O operador % divide o próprio operando à esquerda por 100: 5 + (10/100) = 5 + 0,1 = 5,1, não 5,5."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "classes de operadores",
        "precedência",
        "parênteses",
        "associatividade da potência",
        "percentual como operador",
        "concatenação",
        "operador relacional"
      ],
      "regras": [
        "ordem de precedência: %, ^, * e /, + e -, &, comparações",
        "parênteses elevam qualquer operação à frente da ordem natural",
        "potência avalia da direita para a esquerda",
        "-2^2 é avaliado como (-2)^2 = 4 no Excel"
      ],
      "comparacoes": [
        "% como operador divide o valor por 100 na expressão; o formato percentual só muda a exibição",
        "E/OU/NÃO são funções, não símbolos de operador"
      ],
      "fluxos": [
        "identificar os operadores presentes na expressão",
        "aplicar a ordem de precedência e os parênteses",
        "calcular passo a passo até o resultado final"
      ],
      "excecoes": [
        "E/OU/NÃO são funções, não operadores-símbolo",
        "comparações encadeadas diferem entre simulador (esquerda-para-direita) e Excel real (sintaxe rejeitada)",
        "o % opera sobre o número à sua esquerda, dividindo-o por 100"
      ],
      "palavrasChave": [
        "operador",
        "precedência",
        "associatividade",
        "potência",
        "percentual",
        "concatenação",
        "relacional"
      ],
      "checklist": [
        "classifico operadores por classe",
        "ordeno a avaliação pela precedência",
        "calculo -2^2, 2^3^2 e 5+10% corretamente",
        "concateno textos com &",
        "declaro a diferença do simulador nas comparações encadeadas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular o resultado da expressão =5+10% no Excel, confirmando como o operador percentual atua antes da soma.",
        "dados": "expressão =5+10%; operador % atua sobre o número à sua esquerda dividindo por 100.",
        "conceitos": [
          "percentual como operador",
          "precedência"
        ],
        "estrategia": "O operador % divide o operando à esquerda por 100 antes da soma: 10 vira 0,1, depois soma-se 5, resultando 5,1.",
        "execucao": [
          "1) Identificar que % atua sobre o 10 à sua esquerda.",
          "2) Converter 10% em 10/100 = 0,1.",
          "3) Somar 5 + 0,1 = 5,1.",
          "4) Confirmar que o resultado não é 5,5."
        ],
        "resultado": "=5+10% = 5,1 porque o operador % divide o próprio 10 por 100 antes da soma (10/100 = 0,1), não sobre o total.",
        "justificativa": "O gabarito 5,1 está correto porque o operador % incide sobre o próprio 10 (10/100 = 0,1) antes da soma com 5, não sobre o resultado da soma.",
        "errosFrequentes": [
          "Ler 10% como \"10 por cento de 5\" e responder 5,5.",
          "Aplicar o % ao resultado total (5) em vez do operando imediato (10)."
        ],
        "variacao": "Calcular =20+5%: o aluno deve obter 20,05 (5 dividido por 100 é 0,05, somado a 20), não 21 nem outro valor."
      },
      {
        "tipo": "aplicacao",
        "problema": "Montar o nome completo em C1 a partir do nome em A1 e do sobrenome em B1, com espaço entre eles.",
        "dados": "A1=\"Maria\", B1=\"Silva\"; fórmula de concatenação com operador & e literal de espaço entre aspas.",
        "conceitos": [
          "operador de texto",
          "concatenação",
          "literal de texto"
        ],
        "estrategia": "Usar o operador & para unir textos, inserindo uma cadeia de espaço entre aspas duplas como separador: =A1&\" \"&B1.",
        "execucao": [
          "1) Escrever a referência à primeira célula: A1.",
          "2) Inserir o operador de concatenação: &.",
          "3) Inserir o literal de espaço entre aspas: \" \".",
          "4) Inserir outro operador &: &.",
          "5) Escrever a referência ao sobrenome: B1.",
          "6) Fórmula final: =A1&\" \"&B1."
        ],
        "resultado": "=A1&\" \"&B1 — o operador & concatena textos; a cadeia de espaço entre aspas duplas garante a separação. Ex.: A1=\"Maria\", B1=\"Silva\" → \"Maria Silva\".",
        "justificativa": "O gabarito usa & com literal de espaço porque é a forma de concatenação de textos no Excel, produzindo \"Maria Silva\" a partir de \"Maria\" e \"Silva\" com separação correta.",
        "errosFrequentes": [
          "Usar o operador + para juntar textos, que no Excel soma ou gera erro.",
          "Esquecer as aspas duplas ao redor do espaço, deixando o literal inválido."
        ],
        "variacao": "Unir três células (nome, sobrenome, cargo) com espaços: o aluno deve montar =A1&\" \"&B1&\" \"&C1."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário espera que a expressão 2^3^2 resulte 64, aplicando associatividade à esquerda à potência.",
        "dados": "expressão 2^3^2; potência associativa à direita; alternativa incorreta (2^3)^2 = 64.",
        "conceitos": [
          "potência",
          "associatividade à direita",
          "parênteses"
        ],
        "estrategia": "A potência é associativa à direita, então 2^3^2 é avaliado como 2^(3^2) = 2^9 = 512; 64 só viria com parênteses explícitos (2^3)^2.",
        "execucao": [
          "1) Identificar duas potências encadeadas: 2^3^2.",
          "2) Aplicar associatividade à direita: avaliar primeiro 3^2 = 9.",
          "3) Calcular a potência externa: 2^9 = 512.",
          "4) Confirmar que (2^3)^2 = 8^2 = 64 requer parênteses e não é o resultado padrão."
        ],
        "resultado": "Incorreto: a potência é associativa à direita no Excel e no simulador: 2^(3^2) = 2^9 = 512. Para obter 64, seriam necessários parênteses explícitos: (2^3)^2.",
        "justificativa": "O gabarito 512 está correto porque a associatividade à direita faz avaliar 3^2 primeiro (9) e depois 2^9; 64 só ocorre com parênteses explícitos, desmentindo a leitura ingênua de associatividade à esquerda.",
        "errosFrequentes": [
          "Aplicar associatividade à esquerda e responder 64.",
          "Acreditar que potências encadeadas se resolvem da esquerda para a direita como as outras operações."
        ],
        "variacao": "Calcular 3^2^2: o aluno deve obter 3^(2^2) = 3^4 = 81, não (3^2)^2 = 9^2 = 81 (coincide aqui) — usar 4^3^2 = 4^27 para diferenciar claramente."
      }
    ]
  }
};
