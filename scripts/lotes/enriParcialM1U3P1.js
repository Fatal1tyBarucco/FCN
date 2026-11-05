const enriParcialM1U3P1 = {
  "modulo-1-unidade-3-topico-1-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Entender pasta de trabalho, planilhas, células e intervalos é a base de todo cálculo no Excel: o arquivo .xlsx agrupa planilhas, cada planilha organiza dados em células identificadas por coluna (letra) e linha (número), como A1 e B10, e um intervalo contínuo (A1:B5) permite referenciar blocos inteiros em fórmulas como SOMA(A1:A10). Sem essa estrutura, o aluno não consegue montar fórmulas corretas, não distingue célula de intervalo e erra o gabarito em questões que pedem a referência de um conjunto de células.",
      "preRequisitos": [
        "Noção de arquivo de planilha (.xlsx)",
        "Identificação de coluna por letra e linha por número (ex.: A1)"
      ],
      "objetivosObservaveis": [
        "Distinguir pasta de trabalho de planilha",
        "Localizar uma célula pelo endereço coluna-linha (ex.: C5)",
        "Definir intervalo contínuo de células (ex.: A1:B5)",
        "Usar referência de intervalo em uma fórmula (SOMA(A1:A10))"
      ],
      "competencias": [
        "Leitura do endereçamento A1 no Excel",
        "Montagem de referências de intervalo em fórmulas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-1-sub-2 (Tabelas estruturadas e referências estruturadas) — próximo subtópico da mesma unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Referências de intervalo e células são objeto de avaliação em questões de informática de concursos sobre montagem de fórmulas e identificação de endereços; trata-se de conteúdo base de planilhas, classificado como de média relevância no programa. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Pasta de trabalho (workbook) é o arquivo .xlsx que contém uma ou mais planilhas. Cada planilha é uma grade de células identificadas por coluna (letra) e linha (número), exemplo A1 e B10. Intervalo é um conjunto contínuo de células, como A1:B5 ou A1:A10. Referência de intervalo pode ser usada em fórmulas, como SOMA(A1:A10). O simulador Excel do projeto suporta referências A1 relativas, absolutas ($A$1), mistas ($A1, A$1) e intervalos A1:B5, com recálculo automático; tabelas estruturadas e nomes definidos não são suportados (limitação declarada).",
      "intermediario": "O aluno já entende célula e intervalo e agora aprende a escolher entre referência de célula única (A1) e referência de intervalo contínuo (A1:B5) dentro de fórmulas. O operador de intervalo é o dois-pontos (:), que delimita o bloco A1:B5, enquanto o ponto-e-vírgula (;) separa argumentos distintos, como SOMA(A1;B5), que soma apenas as duas células e não o intervalo entre elas. O simulador recalcula automaticamente quando valores mudam.",
      "avancado": "O aluno combina referências absolutas ($A$1), mistas ($A1 e A$1) e intervalos (A1:B5) em fórmulas mais complexas, percebe quando copiar uma fórmula altera referências relativas e mantém fixas as absolutas, e reconhece a limitação do simulador: apenas referências A1 e intervalos são suportados; tabelas estruturadas (Tabela1[Coluna]) e nomes definidos produzem erro de entrada.",
      "especialista": "O especialista modela planilhas inteiras usando intervalos nomeados logicamente, valida o recálculo automático do simulador em cascata de fórmulas com intervalos sobrepostos, documenta a limitação declarada de não suporte a tabelas estruturadas e nomes definidos, e orienta outros usuários sobre a diferença entre operador de intervalo (:) e separador de argumentos (;) no Excel em português do Brasil."
    },
    "comparacoes": [
      {
        "tema": "Célula única versus intervalo contínuo",
        "a": {
          "rotulo": "Célula única",
          "texto": "Referência a uma única célula, identificada por coluna e linha (ex.: A1, C5). Um intervalo de uma só célula (C5:C5) equivale à própria célula."
        },
        "b": {
          "rotulo": "Intervalo contínuo",
          "texto": "Referência a um bloco retangular de células, do canto superior-left ao inferior-right, com dois-pontos (ex.: A1:B5, A1:A10). Inclui todas as células entre os extremos."
        },
        "diferencaGabarito": "A célula única aponta para um valor; o intervalo contínuo aponta para um conjunto de valores que funções como SOMA, MÉDIA e MÁX podem agregar de uma só vez."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário escreve =SOMA(A1;B5) esperando somar todas as células de A1 até B5.",
        "porqueErrada": "O ponto-e-vírgula (;) é separador de argumentos, não operador de intervalo. =SOMA(A1;B5) soma apenas A1 e B5, ignorando tudo que está entre elas.",
        "versaoCorreta": "Para somar o intervalo contínuo de A1 até B5 use o dois-pontos: =SOMA(A1:B5). Isso soma todas as células do bloco, não apenas as duas extremas."
      },
      {
        "afirmacaoEquivocada": "O intervalo C5:C5 é diferente da célula C5 porque inclui várias linhas.",
        "porqueErrada": "C5:C5 é um intervalo que começa e termina na mesma célula, portanto abrange exatamente uma célula: C5. Não inclui várias linhas.",
        "versaoCorreta": "C5:C5 equivale à própria célula C5. Já C1:C5 inclui C1, C2, C3, C4 e C5, ou seja, cinco células contínuas da coluna C."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pasta de trabalho (.xlsx)",
        "Planilha (worksheet)",
        "Célula (coluna+linha, ex.: A1)",
        "Intervalo contínuo (ex.: A1:B5)"
      ],
      "regras": [
        "Célula é identificada por letra da coluna e número da linha (A1).",
        "Intervalo contínuo usa dois-pontos entre o primeiro e o último endereço (A1:B5).",
        "Referência de intervalo pode ser usada em fórmulas, como SOMA(A1:A10)."
      ],
      "comparacoes": [
        "Célula única aponta para um valor; intervalo contínuo aponta para um conjunto de valores."
      ],
      "fluxos": [
        "Abrir pasta de trabalho .xlsx → selecionar planilha → identificar célula (coluna+linha) → definir intervalo (A1:B5) → usar referência em fórmula (SOMA(A1:A10))."
      ],
      "excecoes": [
        "Tabelas estruturadas (Tabela1[Coluna]) não são suportadas pelo simulador do projeto (limitação declarada).",
        "Nomes definidos não são suportados pelo simulador do projeto (limitação declarada)."
      ],
      "palavrasChave": [
        "pasta de trabalho",
        "planilha",
        "célula",
        "intervalo",
        "referência A1",
        "SOMA",
        "dois-pontos",
        "recálculo automático"
      ],
      "checklist": [
        "Distingo pasta de trabalho de planilha",
        "Localizo célula pelo endereço coluna-linha",
        "Defino intervalo contínuo com dois-pontos (A1:B5)",
        "Uso referência de intervalo em fórmula (SOMA(A1:A10))",
        "Reconheço que ponto-e-vírgula separa argumentos, não define intervalo",
        "Lembro que o simulador não suporta tabelas estruturadas nem nomes definidos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar a célula situada na coluna C, linha 5, e dizer se o intervalo C5:C5 equivale a essa mesma célula.",
        "dados": "Endereço alvo: coluna C, linha 5, ou seja, a célula C5. Intervalo a avaliar: C5:C5.",
        "conceitos": [
          "Célula",
          "Intervalo de uma só célula"
        ],
        "estrategia": "Ler a coluna (letra C) e a linha (número 5) para formar o endereço C5; reconhecer que um intervalo cujo início e fim são iguais abrange exatamente aquela célula.",
        "execucao": [
          "1. Localizar a coluna C na grade da planilha.",
          "2. Localizar a linha 5 na grade da planilha.",
          "3. Intersecionar coluna C e linha 5: o endereço é C5.",
          "4. Avaliar C5:C5: início e fim são C5, então o intervalo contém apenas C5."
        ],
        "resultado": "A célula é C5 (coluna C, linha 5). O intervalo C5:C5 é a própria célula C5; o intervalo C1:C5 inclui C5 e também C1, C2, C3 e C4.",
        "justificativa": "O endereço de uma célula resulta da interseção da letra da coluna com o número da linha, e um intervalo com início e fim idênticos não adiciona células, portanto C5:C5 equivale a C5, não a um conjunto maior.",
        "errosFrequentes": [
          "Achar que C5:C5 inclui várias linhas porque usa o símbolo de intervalo (dois-pontos).",
          "Confundir coluna com linha e responder C5 quando o pedido fosse linha C, coluna 5 (inválido no Excel)."
        ],
        "variacao": "Identificar a célula na coluna F, linha 12, e verificar se o intervalo F12:F12 equivale a essa célula ou a um bloco maior."
      },
      {
        "tipo": "aplicacao",
        "problema": "Somar os valores contidos nas células de A1 até A5 de uma planilha usando uma única referência de intervalo contínuo.",
        "dados": "Intervalo alvo: A1:A5 (células A1, A2, A3, A4, A5). Fórmula esperada: =SOMA(A1:A5).",
        "conceitos": [
          "Intervalo contínuo",
          "Referência de intervalo em fórmula",
          "Função SOMA"
        ],
        "estrategia": "Escrever a função SOMA com o intervalo contínuo A1:A5 como único argumento, usando o dois-pontos entre o primeiro e o último endereço, para somar todas as cinco células de uma vez.",
        "execucao": [
          "1. Selecionar a célula onde o total será exibido.",
          "2. Digitar =SOMA(.",
          "3. Digitar o intervalo A1:A5 com dois-pontos entre A1 e A5.",
          "4. Digitar ) e confirmar com Enter.",
          "5. Verificar que o resultado é a soma de A1, A2, A3, A4 e A5."
        ],
        "resultado": "=SOMA(A1:A5) — referência de intervalo contínuo, equivalente em sintaxe pt-BR a somar cada célula individualmente (A1;A2;A3;A4;A5), mas com um único argumento de intervalo.",
        "justificativa": "O dois-pontos em A1:A5 define o intervalo contínuo que a SOMA agrega, então o resultado cobre todas as cinco células; usar ponto-e-vírgula separaria argumentos e não definiria o bloco contínuo.",
        "errosFrequentes": [
          "Escrever =SOMA(A1;A5), que soma apenas A1 e A5 e ignora A2, A3 e A4.",
          "Escrever =SOMA(A1..A5) com dois pontos seguidos, que não é sintaxe válida do Excel."
        ],
        "variacao": "Somar os valores de B10 a B14 usando referência de intervalo contínuo na mesma planilha."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário escreve =SOMA(A1;B5) esperando que o resultado seja a soma de todas as células de A1 até B5.",
        "dados": "Fórmula digitada pelo usuário: =SOMA(A1;B5). Intervalo que ele acredita cobrir: A1 até B5.",
        "conceitos": [
          "Separador de argumentos (ponto-e-vírgula)",
          "Operador de intervalo (dois-pontos)"
        ],
        "estrategia": "Explicar que o ponto-e-vírgula separa argumentos distintos da função, enquanto o intervalo contínuo exige dois-pontos; portanto =SOMA(A1;B5) soma só A1 e B5, não o bloco entre elas.",
        "execucao": [
          "1. Identificar a intenção do usuário: somar de A1 até B5.",
          "2. Observar que ele usou ponto-e-vírgula: =SOMA(A1;B5).",
          "3. Concluir que o ponto-e-vírgula separa dois argumentos (A1 e B5), não define intervalo.",
          "4. Corrigir para =SOMA(A1:B5) com dois-pontos.",
          "5. Confirmar que agora o intervalo contínuo A1:B5 é somado completo."
        ],
        "resultado": "Incorreto: ';' separa argumentos, não define intervalo. Para intervalo contínuo use ':' (=SOMA(A1:B5)). =SOMA(A1;B5) soma apenas A1 e B5.",
        "justificativa": "O gabarito considera o ponto-e-vírgula como separador de argumentos, então A1 e B5 são tratados como células isoladas; o bloco entre elas só entra na conta com o operador de intervalo (:).",
        "errosFrequentes": [
          "Acreditar que ponto-e-vírgula funciona como dois-pontos para definir intervalos.",
          "Assumir que =SOMA(A1;B5) abrange todas as células entre A1 e B5."
        ],
        "variacao": "Um usuário escreve =MÉDIA(C1;C10) esperando a média de C1 até C10; o correto seria =MÉDIA(C1:C10)."
      }
    ]
  },
  "modulo-1-unidade-3-topico-1-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Tabelas estruturadas e referências estruturadas são o caminho para fórmulas que se mantêm corretas à medida que os dados crescem: converter um intervalo em tabela (Inserir > Tabela ou Ctrl+T) cria cabeçalhos fixos, filtros automáticos e expansão automática, e a referência Tabela1[Quantidade] aponta para a coluna lógica inteira, acompanhando novas linhas sem editar a fórmula. Confundir referência estruturada com referência de intervalo A1, ou prometer suporte que o simulador não oferece, muda o gabarito de questões de concursos.",
      "preRequisitos": [
        "Subtópico 1 (células, intervalos e referências de intervalo)",
        "Noção de tabela com cabeçalho de coluna"
      ],
      "objetivosObservaveis": [
        "Converter um intervalo em tabela estruturada",
        "Escrever e ler uma referência estruturada (Tabela[Coluna])",
        "Explicar o ganho de manutenção da expansão automática",
        "Declarar corretamente a limitação do simulador quanto a referências estruturadas"
      ],
      "competencias": [
        "Modelagem de dados tabulares",
        "Comunicação honesta de limitações de ferramenta"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-1-sub-1 (Células, intervalos e referências de intervalo) — pré-requisito direto deste subtópico"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A sintaxe Tabela[Coluna] e o comportamento de expansão automática são cobrados em questões de informática de concursos sobre fórmulas de planilha; o tema é classificado como de média relevância no programa de informática. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Tabela estruturada é um intervalo de dados convertido em objeto de tabela (Inserir > Tabela ou Ctrl+T, marcando que a tabela tem cabeçalhos). A conversão traz cabeçalhos de coluna fixados, filtros automáticos, formatação consistente e expansão automática: ao digitar na linha imediatamente abaixo da tabela, o Excel incorpora a linha. Referência estruturada nomeia a tabela e a coluna em vez de endereços, exemplo Tabela1[Quantidade], que refere a coluna Quantidade inteira. O simulador Excel deste projeto não executa referências estruturadas (limitação declarada).",
      "intermediario": "O aluno já sabe converter intervalo em tabela e agora escreve referências estruturadas como Vendas[Quantidade] para somar a coluna lógica inteira, percebendo que a fórmula acompanha o crescimento da tabela: quando novas linhas são adicionadas adjacentes à tabela, o total atualiza sem editar a fórmula. Com intervalo fixo A1 (=SOMA(A2:A100)), linhas além da 100 ficam de fora e o total subestima os dados. Tabela1[#Cabeçalhos] e Tabela1[#Totais] são partes especiais da tabela.",
      "avancado": "O aluno combina expansão automática com fórmulas que referenciam colunas inteiras (Vendas[Quantidade]) e partes especiais (#Cabeçalhos, #Totais), diagnostica totais que esquecem linhas novas porque usam intervalos fixos A1, corrige convertendo o intervalo em tabela (Ctrl+T) e substituindo por referência estruturada, e declara corretamente que o simulador do projeto não suporta referências estruturadas nem nomes definidos.",
      "especialista": "O especialista modela planilhas com múltiplas tabelas estruturadas, valida que fórmulas com colunas lógicas se expandem junto com inserções de linhas e colunas adjacentes, audita totais subestimados por intervalos fixos A1, documenta a limitação declarada do simulador (apenas A1 e intervalos), e orienta sobre a diferença entre referência de intervalo (A1:B5) e referência estruturada (Tabela[Coluna])."
    },
    "comparacoes": [
      {
        "tema": "Referência de intervalo fixo A1 versus referência estruturada",
        "a": {
          "rotulo": "Intervalo fixo A1",
          "texto": "Refere a um endereço fixo, como A2:A100; não acompanha inserções além da linha 100, exigindo edição manual da fórmula quando os dados crescem."
        },
        "b": {
          "rotulo": "Referência estruturada",
          "texto": "Refere à coluna lógica inteira, como Vendas[Quantidade]; acompanha a expansão automática da tabela quando novas linhas são adicionadas adjacentes, sem editar a fórmula."
        },
        "diferencaGabarito": "O intervalo fixo fica defasado com dados novos; a referência estruturada se atualiza sozinha com o crescimento da tabela."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário afirma que referências estruturadas funcionam no simulador Excel deste projeto.",
        "porqueErrada": "Incorreto: o simulador não interpreta a sintaxe de referência estruturada — escrever Tabela1[Quantidade] é rejeitado porque o simulador aceita apenas endereços A1 (relativa, absoluta ou mista) e intervalos como A1:B5; tabelas estruturadas e nomes definidos não estão implementados e geram erro de entrada.",
        "versaoCorreta": "Incorreto: o simulador suporta apenas referências A1 (relativas/absolutas/mistas) e intervalos; referências estruturadas (Tabela[Coluna]) e nomes definidos não são suportados (limitação declarada)."
      },
      {
        "afirmacaoEquivocada": "Qualquer edição em qualquer célula da planilha faz a tabela incorporar automaticamente a linha ou coluna digitada.",
        "porqueErrada": "A expansão automática só incorpora digitações na linha imediatamente abaixo ou na coluna imediatamente ao lado do corpo da tabela; edições distantes não são incorporadas pela tabela.",
        "versaoCorreta": "A expansão automática cobre apenas a linha/coluna imediatamente adjacente ao corpo da tabela; edições distantes não entram na tabela nem nas referências estruturadas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tabela estruturada (ListObjects)",
        "Cabeçalho de coluna",
        "Referência estruturada (Tabela[Coluna])",
        "Expansão automática"
      ],
      "regras": [
        "Converter intervalo em tabela com Inserir > Tabela ou Ctrl+T, marcando que a tabela tem cabeçalhos.",
        "Referência estruturada usa Tabela[Coluna], não endereços A1.",
        "Expansão automática incorpora a linha/coluna imediatamente adjacente à tabela."
      ],
      "comparacoes": [
        "Intervalo fixo A1 não acompanha dados novos; referência estruturada Tabela[Coluna] acompanha a expansão da tabela."
      ],
      "fluxos": [
        "O usuário seleciona o intervalo com cabeçalhos, insere a tabela com Ctrl+T, confirma que a tabela tem cabeçalhos e aplica a referência Tabela[Coluna] em uma fórmula; dessa forma o total mostra os dados atualizados e preserva as novas linhas à medida que a tabela cresce."
      ],
      "excecoes": [
        "Referências estruturadas não são suportadas pelo simulador do projeto (limitação declarada).",
        "Nomes definidos não são suportados pelo simulador do projeto (limitação declarada).",
        "Edições distantes da tabela não são incorporadas pela expansão automática."
      ],
      "palavrasChave": [
        "tabela estruturada",
        "referência estruturada",
        "Tabela[Coluna]",
        "expansão automática",
        "Ctrl+T",
        "cabeçalho",
        "simulador",
        "limitação"
      ],
      "checklist": [
        "Converto intervalo em tabela estruturada (Ctrl+T)",
        "Escrevo referência estruturada Tabela[Coluna]",
        "Verifico que a fórmula acompanha novas linhas",
        "Distinguo referência estruturada de intervalo fixo A1",
        "Lembro que expansão automática vale apenas para linha/coluna adjacente",
        "Declaro que o simulador não suporta referências estruturadas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Converter o intervalo A1:D100, que tem cabeçalhos na linha 1, em uma tabela estruturada para que aceite referências pelo nome da tabela e das colunas.",
        "dados": "Intervalo: A1:D100 (cabeçalhos na linha 1). Ação: Inserir > Tabela (ou Ctrl+T) e confirmar 'A tabela tem cabeçalhos'.",
        "conceitos": [
          "Tabela estruturada",
          "Cabeçalho de coluna",
          "Referência estruturada"
        ],
        "estrategia": "Selecionar todo o intervalo com dados e cabeçalhos, abrir Inserir > Tabela (ou Ctrl+T), confirmar que a tabela tem cabeçalhos e finalizar, para que a região ganhe filtros automáticos, formatação e referências estruturadas pelo nome da tabela e das colunas.",
        "execucao": [
          "1. Selecionar o intervalo A1:D100 (incluindo a linha de cabeçalhos).",
          "2. Ir em Inserir > Tabela (ou pressionar Ctrl+T).",
          "3. Marcar a opção 'A tabela tem cabeçalhos'.",
          "4. Clicar em OK para criar a tabela.",
          "5. Verificar que filtros automáticos e formatação de tabela apareceram."
        ],
        "resultado": "Selecionar A1:D100 > Inserir > Tabela (ou Ctrl+T) > confirmar que a tabela tem cabeçalhos > OK. A partir daí a região ganha filtros automáticos, formatação de tabela e passa a aceitar referências estruturadas pelo nome da tabela e das colunas.",
        "justificativa": "A conversão só cria tabela estruturada quando o cabeçalho é confirmado, e daí em diante a região se comporta como objeto de tabela com filtros, formatação e suporte a referências como Tabela1[Coluna].",
        "errosFrequentes": [
          "Esquecer de marcar 'A tabela tem cabeçalhos', fazendo a linha 1 virar dado em vez de cabeçalho.",
          "Selecionar apenas parte do intervalo, deixando colunas de fora da tabela."
        ],
        "variacao": "Converter o intervalo E1:H200 (com cabeçalhos na linha 1) em tabela estruturada chamada 'Produtos'."
      },
      {
        "tipo": "aplicacao",
        "problema": "Planilha de vendas: a tabela chama-se 'Vendas' e recebe 15 novas linhas por mês; o total da coluna Quantidade precisa continuar correto sem manutenção mensal da fórmula.",
        "dados": "A tabela chama-se Vendas; todo mês a tabela recebe 15 novas linhas adjacentes e o total da coluna Quantidade deve ser recalculado com a fórmula =SOMA(Vendas[Quantidade]).",
        "conceitos": [
          "Referência estruturada",
          "Expansão automática",
          "Coluna lógica inteira"
        ],
        "estrategia": "Usar a referência estruturada =SOMA(Vendas[Quantidade]), que aponta para a coluna lógica inteira, de modo que ao adicionar as 15 linhas mensais (dentro/adjacentes à tabela) o total atualiza automaticamente sem editar a fórmula.",
        "execucao": [
          "1. Confirmar que os dados estão em uma tabela chamada 'Vendas'.",
          "2. Escrever a fórmula =SOMA(Vendas[Quantidade]) na célula do total.",
          "3. Adicionar as 15 novas linhas de vendas no mês seguinte, adjacentes à tabela.",
          "4. Observar que a tabela incorpora as novas linhas pela expansão automática.",
          "5. Verificar que o total já reflete as 15 linhas novas sem alterar a fórmula."
        ],
        "resultado": "=SOMA(Vendas[Quantidade]) — referência estruturada; a fórmula abrange a coluna lógica inteira: quando as 15 linhas forem adicionadas (dentro/adjacentes à tabela), o total atualiza sem editar a fórmula. Com =SOMA(A2:A100), as linhas 101 em diante ficariam fora do intervalo — o total subestimaria as vendas.",
        "justificativa": "A referência estruturada nomeia a coluna lógica, não um endereço fixo, então acompanha o crescimento da tabela; o intervalo fixo A2:A100 fica defasado e excluiria dados novos.",
        "errosFrequentes": [
          "Manter =SOMA(A2:A100) depois de acrescentar linhas, deixando as novas vendas de fora do total.",
          "Acreditar que qualquer referência com colchetes funciona no simulador, que não suporta referências estruturadas."
        ],
        "variacao": "Tabela 'Despesas' que recebe 10 novas linhas por mês; somar a coluna 'Valor' com referência estruturada que se mantenha correta."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que referências estruturadas (Tabela[Coluna]) funcionam no simulador Excel deste projeto.",
        "dados": "Afirmação do usuário: referências estruturadas funcionam no simulador Excel do projeto. Escopo documentado do simulador: apenas referências A1 (relativas, absolutas, mistas) e intervalos.",
        "conceitos": [
          "Referência estruturada",
          "Limitação do simulador",
          "Escopo do simulador Excel"
        ],
        "estrategia": "Explicar que a afirmação é incorreta porque o simulador suporta só referências A1 e intervalos; tabelas estruturadas e nomes definidos estão fora do escopo documentado e geram erro de entrada, então não se pode prometer suporte inexistente.",
        "execucao": [
          "1. Identificar a afirmação: referências estruturadas funcionam no simulador.",
          "2. Consultar o escopo documentado do simulador (assets/js/simulators.js).",
          "3. Confirmar que o simulador suporta apenas A1 (relativa/absoluta/mista) e intervalos A1:B5.",
          "4. Concluir que tabelas estruturadas e nomes definidos produzem erro de entrada.",
          "5. Corrigir o usuário: a afirmação é falsa; referências estruturadas não são suportadas."
        ],
        "resultado": "Incorreto: o simulador suporta apenas referências A1 (relativas/absolutas/mistas) e intervalos; tabelas estruturadas estão fora do escopo documentado (limitação declarada em assets/js/simulators.js) e produzem erro de entrada.",
        "justificativa": "O gabarito considera a limitação declarada do simulador: só A1 e intervalos são válidos, portanto uma referência estruturada não funciona ali, independentemente de ser sintaxe correta no Excel real.",
        "errosFrequentes": [
          "Confundir sintaxe correta no Excel real (Tabela[Coluna]) com suporte no simulador do projeto.",
          "Assumir que tudo que funciona no Excel desktop funciona no simulador documentado."
        ],
        "variacao": "Um usuário afirma que nomes definidos (ex.: 'MinutaTaxa') funcionam no simulador Excel deste projeto; o correto é que também estão fora do escopo e produzem erro de entrada."
      }
    ]
  }
};
