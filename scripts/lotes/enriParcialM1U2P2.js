const enriParcialM1U2P2 = {
  "modulo-1-unidade-2-topico-2-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Formatação direta e estilos são caminhos opostos para dar aparência a um texto no Word, e a escolha errada entre eles altera o gabarito de questões de concurso. Formatação direta aplica atributos (fonte, tamanho, cor, negrito) a um trecho selecionado, sem nome nem relação com outros trechos, de modo que cada ocorrência é independente e mudar a aparência exige editar trecho por trecho. Estilo é um conjunto nomeado de formatações (parágrafo e/ou caractere) registrado no documento ou modelo: aplicar um estilo é um clique em Início > Estilos, e modificar um estilo altera a definição, propagando a mudança a todo o texto que usa esse estilo. Essa propagação é a propriedade que costuma definir o gabarito: modificar um estilo atualiza todas as ocorrências de texto formatado com ele. Além disso, sumário automático, painel de navegação e leitores de tela dependem dos estilos de título; formatação direta não cria estrutura reconhecível, de modo que títulos em negrito direto não aparecem no sumário nem na navegação. Entender essa diferença é, portanto, essencial para responder corretamente a itens sobre consistência, manutenção, sumários e acessibilidade em documentos longos.",
      "preRequisitos": [
        "Interface básica do Word: abas da faixa de opções (Início, Exibição) e painel de Estilos.",
        "Selecionar trechos de texto e aplicar formatação simples (negrito, cor, tamanho).",
        "Noção de documento longo com capítulos e tópicos que podem gerar sumário."
      ],
      "objetivosObservaveis": [
        "distinguir formatação direta de estilos, explicando que a primeira afeta só o trecho selecionado e o segundo nomeia uma regra reutilizável;",
        "criar e modificar um estilo no Word, prevendo que a modificação atualiza todo o texto que usa esse estilo;",
        "decidir quando usar estilos (estrutura, consistência, sumário) e quando usar formatação direta (detalhe pontual isolado);",
        "explicar por que o sumário automático e a navegação estrutural dependem dos estilos de título e não da formatação direta."
      ],
      "competencias": [
        "padronizar documentos longos aplicando estilos nomeados em vez de formatação repetida trecho por trecho;",
        "manter a consistência visual alterando a definição de um estilo uma vez, em vez de editar cada ocorrência individualmente."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-7-sub-1 (Gerando sumários automáticos) — o sumário se alimenta dos estilos de título, não da formatação direta;",
        "modulo-1-unidade-2-topico-12-sub-1 (Acessibilidade e exportação PDF) — leitores de tela usam os estilos de título para navegar pela estrutura do documento."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Formatação direta versus estilos é um ponto central do conteúdo programático de pacote de escritório para concursos, pois o enunciado costuma descrever um cenário de documento longo e exigir a escolha entre aplicar atributos trecho por trecho ou usar um estilo nomeado, sendo a propagação global e a geração de sumário os critérios que definem o gabarito. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante, o aluno aprende que formatação direta aplica atributos (fonte, tamanho, cor, negrito) a um trecho selecionado, sem criar nome nem relação com outros trechos, de modo que cada ocorrência é independente e mudar a aparência exige editar trecho por trecho. Já o estilo é um conjunto nomeado de formatações registrado no documento ou modelo, aplicável com um clique em Início > Estilos. O exemplo inicial é aplicar negrito a uma palavra (formatação direta) versus aplicar o estilo Título 1 a um capítulo, observando a diferença no painel de estilos. O aluno reconhece que o estilo Título 1 organiza a estrutura do documento, enquanto o negrito direto apenas muda a aparência local da palavra.",
      "intermediario": "No nível intermediário, o aluno cria um estilo próprio (por exemplo, Destaque), o aplica a vários trechos do documento e, em seguida, modifica a definição desse estilo, observando que o Word atualiza todas as ocorrências de uma vez — essa é a propagação global que muda o gabarito das questões. Ele também aprende a diferença entre estilo de parágrafo (rege o parágrafo inteiro: recuos, espaçamento, fonte) e estilo de caractere (rege apenas o trecho selecionado), e que a formatação direta aplicada sobre um estilo prevalece localmente, mascarando a regra do estilo até ser removida com Limpar Formatação.",
      "avancado": "No nível avançado, o aluno aprende a limpar formatação direta que mascara estilos, usando Início > Estilos > Limpar Formatação para restaurar o comportamento do estilo subjacente, e a salvar estilos personalizados em um modelo (.dotx) para padronizar novos documentos. Também compreende que estilos podem herdar de outros estilos (base Normal) e que modificar o estilo base afeta os estilos derivados, salvo quando esses derivados têm formatação própria que sobrescreve a herança.",
      "especialista": "No nível especialista, o aluno audita um documento que não gera sumário nem navegação porque seus títulos usam formatação direta em vez de estilos de título, e migra esses títulos para os estilos Título 1 e Título 2 sem perder o visual pretendido, reaplicando depois apenas os detalhes pontuais por formatação direta. Ele também decide, em cenários complexos, quando a estrutura deve vir dos estilos (consistência, sumário, acessibilidade) e quando o detalhe isolado justifica a formatação direta, e explica essa escolha com fundamento nos mecanismos de propagação e herança do Word."
    },
    "comparacoes": [
      {
        "tema": "Formatação direta versus estilos no Word",
        "a": {
          "rotulo": "Formatação direta",
          "texto": "Aplica atributos (fonte, tamanho, cor, negrito) diretamente ao trecho selecionado, sem nome nem relação com outros trechos; cada ocorrência é independente e mudar a aparência exige editar trecho por trecho; não cria estrutura reconhecível para sumário nem navegação."
        },
        "b": {
          "rotulo": "Estilos",
          "texto": "Conjunto nomeado de formatações (parágrafo e/ou caractere) registrado no documento ou modelo; aplicável com um clique em Início > Estilos; modificar o estilo atualiza a definição e propaga a mudança a todo o texto que usa esse estilo; estilos de título geram sumário automático, painel de navegação e acessibilidade."
        },
        "diferencaGabarito": "A diferença decisiva é a propagação: a formatação direta afeta apenas o trecho selecionado, enquanto o estilo nomeia uma regra que o Word aplica globalmente — modificar um estilo atualiza todas as ocorrências de texto formatado com ele, o que costuma definir o gabarito de questões sobre manutenção e sumários."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Títulos formatados com negrito direto alimentam o sumário automático do Word.",
        "porqueErrada": "O sumário automático se gera exclusivamente dos estilos de título (Título 1, Título 2); a formatação direta muda apenas a aparência local e não cria a estrutura reconhecível que o sumário exige, de modo que títulos apenas em negrito direto ficam de fora do sumário.",
        "versaoCorreta": "Incorreto: o sumário automático se gera dos estilos de título (Título 1, Título 2), e não da formatação direta; títulos em negrito direto não aparecem no sumário nem no painel de navegação, porque a formatação direta não cria estrutura reconhecível."
      },
      {
        "afirmacaoEquivocada": "Modificar um estilo altera apenas a próxima ocorrência de texto que o utiliza.",
        "porqueErrada": "Essa afirmação minimiza a propagação, que é a característica central dos estilos; na verdade, modificar a definição de um estilo faz o Word atualizar todo o texto já formatado com esse estilo no documento (e, quando aplicável, em documentos baseados no mesmo modelo), de modo que a mudança é global e não limitada à próxima ocorrência.",
        "versaoCorreta": "Errado. Modificar um estilo atualiza toda a definição e o Word propaga a mudança a todo o texto que usa esse estilo no documento, não apenas à próxima ocorrência; essa propagação global é exatamente a propriedade que costuma definir o gabarito de questões sobre estilos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Formatação direta: atributos aplicados a um trecho selecionado, sem nome nem relação com outros trechos.",
        "Estilo: conjunto nomeado de formatações (parágrafo e/ou caractere) registrado no documento ou modelo.",
        "Estilo de parágrafo: rege o parágrafo inteiro (recuos, espaçamento, fonte, alinhamento).",
        "Estilo de caractere: rege apenas o trecho selecionado dentro do parágrafo.",
        "Estilos predefinidos: Normal (corpo do texto), Título 1, Título 2 e outros, usados para estrutura e sumário.",
        "Modelo .dotx: arquivo que armazena estilos personalizados para padronizar novos documentos.",
        "Limpar Formatação: remove a formatação direta sobreposta e restaura o comportamento do estilo subjacente."
      ],
      "regras": [
        "Regra repetida em vários trechos deve virar um estilo, não ser aplicada como formatação direta.",
        "Detalhe pontual e isolado justifica formatação direta; estrutura e consistência justificam estilos.",
        "Modificar um estilo atualiza a definição e propaga a mudança a todo o texto que usa esse estilo.",
        "Sumário automático e painel de navegação se alimentam dos estilos de título, não da formatação direta.",
        "Formatação direta aplicada sobre um estilo prevalece localmente, mascarando a regra do estilo."
      ],
      "comparacoes": [
        "A formatação direta afeta apenas o trecho selecionado, enquanto o estilo nomeia uma regra que o Word propaga a todo o texto formatado com ele."
      ],
      "fluxos": [
        "Identificar se a necessidade é estrutura/consistência (escolher estilo) ou detalhe pontual (escolher formatação direta) → aplicar o estilo adequado (Título 1, Título 2, Normal ou estilo personalizado) → se precisar mudar, modificar a definição do estilo para atualizar todas as ocorrências → usar Limpar Formatação quando a formatação direta mascarar o estilo."
      ],
      "excecoes": [
        "A formatação direta aplicada sobre um estilo prevalece localmente sobre ele, mascarando a regra até ser removida com Limpar Formatação.",
        "Estilos podem herdar de outros estilos (base Normal); modificar o estilo base afeta os derivados, salvo quando esses têm formatação própria que sobrescreve a herança."
      ],
      "palavrasChave": [
        "formação direta",
        "estilo",
        "estilo de parágrafo",
        "estilo de caractere",
        "Título 1",
        "Normal",
        "propagação",
        "modelo dotx",
        "limpar formatação"
      ],
      "checklist": [
        "Eu sei distinguir formatação direta de estilos?",
        "Sei criar e modificar um estilo no Word?",
        "Prevejo que modificar um estilo atualiza todas as ocorrências de texto que o usam?",
        "Sei explicar por que o sumário depende dos estilos de título e não da formatação direta?",
        "Sei usar Limpar Formatação para remover máscara de formatação direta sobre um estilo?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Aplicar negrito a uma palavra específica dentro de um parágrafo, sem afetar o restante do texto.",
        "dados": "Um parágrafo de texto no Word contendo uma palavra-chave que deve receber negrito; apenas essa palavra, e não todo o parágrafo, deve ficar em negrito; recurso disponível: botão Negrito (Ctrl+B) na aba Início.",
        "conceitos": [
          "Formatação direta",
          "Aplicação de atributo a trecho selecionado"
        ],
        "estrategia": "Selecionar exatamente a palavra-alvo e aplicar o atributo negrito pelo botão Negrito (Ctrl+B), de modo que o atributo fique preso apenas a esse trecho, sem criar nem alterar qualquer estilo nem afetar outras palavras do parágrafo.",
        "execucao": [
          "Posicionar o cursor no início da palavra-alvo e arrastar o mouse até o final dela para selecionar apenas essa palavra.",
          "Clique no botão Negrito (B) na aba Início ou pressione Ctrl+B para aplicar o atributo negrito à seleção.",
          "Verificar que apenas a palavra selecionada ficou em negrito e que o restante do parágrafo permaneceu inalterado."
        ],
        "resultado": "Formatação direta aplicada apenas à palavra selecionada: ela ficou em negrito por meio do atributo direto (Ctrl+B), sem criar nem alterar estilo, e o atributo fica preso a esse trecho, não se estendendo ao restante do parágrafo.",
        "justificativa": "O resultado é o gabarito porque a formatação direta aplica o atributo ao trecho selecionado de forma isolada e independente, exatamente o comportamento exigido quando o objetivo é destacar uma única palavra sem criar estrutura nem reutilizar a formatação em outros trechos.",
        "errosFrequentes": [
          "Selecionar acidentalmente mais do que a palavra-alvo (por exemplo, o parágrafo inteiro), aplicando negrito a um trecho maior do que o pretendido.",
          "Confundir formatação direta com estilo e tentar criar um estilo para uma tarefa que pede apenas um destaque pontual e isolado."
        ],
        "variacao": "Se o enunciado mudar para aplicar negrito e cor vermelha a uma expressão que se repete 20 vezes no documento, a resposta adequada deixa de ser formatação direta trecho por trecho e passa a ser a criação de um estilo de caractere nomeado, aplicável a todas as 20 ocorrências com um clique."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um manual técnico usa uma formatação de destaque repetida 60 vezes; a norma mudou e o destaque deve ficar azul em todas as ocorrências.",
        "dados": "Documento manual com 60 ocorrências de um destaque aplicado; nova exigência da norma: todas as 60 ocorrências devem ficar com cor azul; recurso disponível: estilos de caractere ou de parágrafo na aba Início > Estiais; opção de modificar a definição de um estilo existente.",
        "conceitos": [
          "Estilo nomeado e reutilizável",
          "Modificação de estilo com propagação global",
          "Modelo .dotx para padronização"
        ],
        "estrategia": "Verificar se o destaque foi aplicado como estilo nomeado; se sim, acessar Início > Estilos, clicar com o botão direito no estilo Destaque, escolher Modificar, alterar a cor para azul e confirmar com OK, de modo que o Word atualize todas as 60 ocorrências de uma vez; se o destaque foi aplicado como formatação direta, selecionar todo o conteúdo, limpar a formatação e reaplicar o estilo para evitar divergências.",
        "execucao": [
          "Confirmar se as 60 ocorrências de destaque usam um mesmo estilo nomeado (por exemplo, Destaque) ou foram formatadas diretamente trecho por trecho.",
          "Se usarem estilo, ir em Início > Estilos, clicar com o botão direito no estilo Destaque e escolher Modificar.",
          "Na caixa de diálogo Modificar Estilo, alterar a cor da fonte para azul e clicar em OK para propagar a mudança.",
          "Verificar que todas as 60 ocorrências do documento ficaram azuis simultaneamente, sem edição individual de cada trecho."
        ],
        "resultado": "Todas as 60 ocorrências do destaque ficaram azuis de uma só vez, porque modificar a definição do estilo Destaque fez o Word propagar a alteração de cor a todo o texto formatado com esse estilo; se o destaque fora formatação direta, seria necessário limpar e reaplicar o estilo para obter o mesmo resultado uniforme.",
        "justificativa": "O resultado é o gabarito porque a modificação de um estilo atualiza globalmente todo o texto que o utiliza, sendo essa propagação a propriedade que diferencia estilos de formatação direta e que costuma definir o gabarito de questões sobre manutenção de documentos longos.",
        "errosFrequentes": [
          "Editar cada uma das 60 ocorrências individualmente, ignorando que o estilo permite a atualização global em uma única ação.",
          "Assumir que modificar um estilo altera apenas a próxima ocorrência, quando na verdade a mudança se propaga a todo o texto formatado com esse estilo."
        ],
        "variacao": "Se o enunciado mudar para que a instituição queira que todo novo documento já traga os estilos corporativos (fontes, títulos, parágrafo), a resposta adequada passa a ser ajustar os estilos em um documento padrão e salvar como modelo (.dotx) via Arquivo > Salvar como, de modo que documentos criados a partir desse modelo herdem os estilos."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário formata todos os títulos de um documento com negrito direto e espera que o sumário automático os reconheça e os liste.",
        "dados": "Documento com vários capítulos cujos títulos foram formatados apenas com negrito direto (sem estilos de título); o usuário insere um sumário automático (Referências > Sumário) e observa que ele sai vazio ou incompleto; recurso disponível: estilos Título 1 e Título 2 na aba Início > Estilos.",
        "conceitos": [
          "Sumário automático depende de estilos de título",
          "Formatação direta não cria estrutura reconhecível"
        ],
        "estrategia": "Confrontar a expectativa ingênua (negrito direto = título reconhecível) com o mecanismo real do Word: o sumário automático se gera exclusivamente dos estilos de título (Título 1, Título 2), de modo que a formatação direta, por mais visualmente semelhante que seja, não cria estrutura e não aparece no sumário; a correção é aplicar os estilos de título aos capítulos e, em seguida, inserir ou atualizar o sumário.",
        "execucao": [
          "Registrar a expectativa do usuário: títulos em negrito direto deveriam aparecer no sumário automático.",
          "Conferir que os títulos usam apenas formatação direta (negrito) e não têm os estilos Título 1 ou Título 2 aplicados.",
          "Aplicar o estilo Título 1 aos capítulos principais e Título 2 aos subtítulos, via Início > Estilos.",
          "Inserir ou atualizar o sumário automático em Referências > Sumário e verificar que os títulos agora aparecem listados com seus respectivos números de página."
        ],
        "resultado": "Incorreto: o sumário automático não reconhece títulos formatados apenas com negrito direto; após aplicar os estilos Título 1 e Título 2 aos capítulos e atualizar o sumário, os títulos aparecem corretamente listados, demonstrando que a formatação direta não cria estrutura reconhecível.",
        "justificativa": "O resultado é o gabarito porque o sumário automático do Word se alimenta exclusivamente dos estilos de título; a formatação direta altera apenas a aparência local e não gera a estrutura que o sumário exige, de modo que a leitura ingênua de que negrito direto basta está equivocada.",
        "errosFrequentes": [
          "Acreditar que qualquer recurso que deixa o texto visualmente parecido com um título (negrito, tamanho maior) automaticamente entra no sumário, ignorando a exigência de estilos de título.",
          "Tentar resolver o problema editando o sumário manualmente em vez de aplicar os estilos de título aos capítulos e atualizar o sumário automaticamente."
        ],
        "variacao": "Se o enunciado mudar para um documento em que os títulos usam o estilo Título 1, mas o sumário continua vazia, a causa provável é que o sumário não foi atualizado após as alterações, e a solução é clicar com o botão direito no sumário e escolher Atualizar Campo, em vez de reaplicar os estilos."
      }
    ]
  },
  "modulo-1-unidade-2-topico-3-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Parágrafos, recuos e tabulações são os mecanismos estruturais de diagramação no Word, e a escolha errada entre eles altera o gabarito de questões de concurso. Um parágrafo é a unidade estrutural do Word: termina na marca de quebra de parágrafo (inserida por Enter) e carrega sua própria formatação (recuos, espaçamento, alinhamento) guardada nessa marca — por isso apagar a marca funde o parágrafo com o seguinte e aplica a ele a formatação do último. A quebra de linha manual (Shift+Enter) insere uma marca de quebra de linha: o texto passa para a linha seguinte sem encerrar o parágrafo, mantendo recuos e espaçamentos para o conjunto. Recuos deslocam o texto em relação às margens (primeira linha, esquerda, direita), ajustáveis pela régua ou pelo diálogo Início > Parágrafo. Tabulações avançam o cursor até posições pré-definidas (esquerda, centrada, direita, decimal) e são o mecanismo correto para colunas alinhadas, ao contrário de cadeias de espaços, que desalinham quando muda a fonte ou o tamanho. Espaçamento entre linhas e antes/depois do parágrafo controla a distância entre blocos, sem recorrer a linhas vazias. Entender essas diferenças é essencial para responder corretamente a itens sobre Enter versus Shift+Enter, uso de recuos e tabulações em vez de espaços, e significado de cada tipo de tabulador.",
      "preRequisitos": [
        "Interface básica do Word: aba Início, grupo Parágrafo e exibição de marcas de formatação.",
        "Selecionar parágrafos e aplicar alinhamento simples (esquerda, centro, direita, justificado).",
        "Noção de documento com colunas de valores ou listas que exigem alinhamento estrutural."
      ],
      "objetivosObservaveis": [
        "distinguir quebra de parágrafo (Enter) de quebra de linha (Shift+Enter), explicando que a primeira encerra o parágrafo e a segunda apenas quebra a linha dentro do mesmo parágrafo;",
        "configurar recuos de primeira linha, esquerda e direita pela régua e pela caixa de diálogo Parágrafo;",
        "definir tabulações por tipo (esquerda, centrada, direita, decimal) e posição, usando o diálogo Parágrafo > Tabulações ou a régua;",
        "escolher espaçamento adequado entre linhas e antes/depois do parágrafo, evitando linhas vazias para separar blocos."
      ],
      "competencias": [
        "diagramar textos técnicos usando recuos, tabulações e espaçamento em vez de espaços para alinhar colunas;",
        "corrigir documentos mal formatados substituindo alinhamento por espaços por tabulações e controlando o espaçamento sem linhas vazias."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-2-sub-1 (Formatação direta vs. estilos) — recuos e espacamentos podem ser salvos como parte de um estilo de paragrafo;",
        "modulo-1-unidade-2-topico-6-sub-1 (Quebra de página vs. quebra de seção) — a marca de paragrafo interage com quebras de pagina na paginação do documento."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Parágrafos, recuos e tabulações são um ponto central do conteúdo programático de pacote de escritório para concursos, pois o enunciado costuma apresentar um cenário de diagramação e exigir a distinção entre Enter e Shift+Enter, o uso correto de recuos e tabulações em vez de espaços e o significado de cada tipo de tabulador, sendo esses critérios que definem o gabarito. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante, o aluno aprende que o parágrafo é a unidade estrutural do Word: termina na marca de quebra de parágrafo (inserida por Enter) e carrega sua própria formatação (recuos, espaçamento, alinhamento) guardada nessa marca. O exemplo introdutório é distinguir as duas marcas na tela com a exibição de marcas de formatação ativada. Ele também aprende que a quebra de linha manual (Shift+Enter) insere uma marca de quebra de linha, fazendo o texto passar para a linha seguinte sem encerrar o parágrafo, de modo que recuos e espaçamentos continuam valendo para o conjunto e o estilo permanece o mesmo.",
      "intermediario": "No nível intermediário, o aluno configura recuos de primeira linha, esquerda e direita pela régua (marcadores superior, médio e inferior) e pelo diálogo Início > Parágrafo, incluindo a opção recuo especial. Ele também cria tabulações por tipo e posição: tabulador à esquerda (alinha o início do texto), centrado (alinha o centro), à direita (alinha o fim) e decimal (alinha números pelo ponto decimal, ideal para valores monetários), definidas em Parágrafo > Tabulações ou clicando na régua.",
      "avancado": "No nível avançado, o aluno diagnostica documentos alinhados com cadeias de espaços e substitui esse alinhamento instável por tabulações e recuos, que mantêm o alinhamento independentemente da fonte e do tamanho. Ele também controla o espaçamento antes e depois do parágrafo (distância entre blocos) em vez de usar linhas vazias, que criam buracos variáveis conforme a paginação e quebram a diagramação quando o texto é editado.",
      "especialista": "No nível especialista, o aluno explica por que apagar a marca de parágrafo funde o parágrafo com o seguinte e aplica a ele a formatação do último, pois a formatação do parágrafo reside na marca final. Ele também preserva o estilo pretendido ao unir parágrafos, reaplicando os recuos e espaçamentos adequados depois da fusão, e avalia cenários complexos de paginação em que recuos, tabulações e espaçamento devem cooperar para manter a diagramação estável sob edição."
    },
    "comparacoes": [
      {
        "tema": "Quebra de parágrafo (Enter) versus quebra de linha (Shift+Enter)",
        "a": {
          "rotulo": "Quebra de parágrafo (Enter)",
          "texto": "Insere a marca de quebra de parágrafo, encerrando o parágrafo atual e iniciando um novo; o novo parágrafo pode ter formatação própria (recuos, espaçamento, alinhamento) guardada em sua própria marca de parágrafo."
        },
        "b": {
          "rotulo": "Quebra de linha (Shift+Enter)",
          "texto": "Insere a marca de quebra de linha, fazendo o texto passar para a linha seguinte sem encerrar o parágrafo; recuos e espaçamentos continuam valendo para o conjunto e o estilo permanece o mesmo."
        },
        "diferencaGabarito": "Enter encerra o parágrafo e cria um novo (nova marca, nova formatação possível), enquanto Shift+Enter apenas quebra a linha dentro do mesmo parágrafo — em questão sobre criar nova linha sem novo parágrafo, o gabarito é Shift+Enter."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Shift+Enter cria um novo parágrafo no Word.",
        "porqueErrada": "Essa afirmação troca as duas marcas: Shift+Enter cria uma nova linha dentro do mesmo parágrafo, não um novo parágrafo; o novo parágrafo é criado por Enter, que insere a marca de quebra de parágrafo.",
        "versaoCorreta": "Incorreto: Shift+Enter cria uma nova linha dentro do mesmo parágrafo; o novo parágrafo e criado por Enter, que insere a marca de quebra de parágrafo."
      },
      {
        "afirmacaoEquivocada": "É correto usar espaços repetidos para alinhar texto em colunas no Word.",
        "porqueErrada": "Espaços repetidos não alinham de forma consistente entre fontes e tamanhos, pois cada caractere tem largura variável; o mecanismo correto para colunas alinhadas é usar tabulações (por tipo e posição) e recuos, que mantêm o alinhamento independente da fonte.",
        "versaoCorreta": "Incorreto: usar tabulações e recuos para alinhar colunas; espaços repetidos não alinham de forma consistente entre fontes e tamanhos, desalinhando quando a fonte ou o tamanho muda."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Parágrafo: unidade estrutural do Word, terminada pela marca de quebra de parágrafo (Enter).",
        "Marca de parágrafo: carrega a formação própria do parágrafo (recuos, espaçamento, alinhamento).",
        "Quebra de linha (Shift+Enter): marca que leva o texto para a linha seguinte sem encerrar o parágrafo.",
        "Recuos: deslocam o texto em relação às margens (primeira linha, esquerda, direita).",
        "Tabulações: avançam o cursor até posições pre-definidas (esquerda, centrada, direita, decimal).",
        "Tabulador decimal: alinha números pelo ponto decimal, ideal para valores monetários.",
        "Espaçamento: entre linhas e antes/depois do parágrafo, controla a distância entre blocos."
      ],
      "regras": [
        "Nova linha sem novo parágrafo: usar Shift+Enter, não Enter.",
        "Primeira linha deslocada: usar recuo especial de primeira linha.",
        "Coluna de valores: usar tabulação decimal para alinhar pelo ponto decimal.",
        "Separação entre blocos: usar espaçamento antes/depois do parágrafo, não linhas vazias.",
        "Alinhamento estrutural: usar recuos e tabulações; espaços repetidos não alinham de forma consistente."
      ],
      "comparacoes": [
        "Enter encerra o parágrafo e cria um novo, enquanto Shift+Enter apenas quebra a linha dentro do mesmo parágrafo."
      ],
      "fluxos": [
        "Identificar se e necessário nova linha sem novo parágrafo (usar Shift+Enter) ou novo parágrafo (usar Enter) -> configurar recuos pela régua ou pelo diálogo Parágrafo -> definir tabulações por tipo e posição (especialmente decimal para valores monetários) -> ajustar espaçamento entre linhas e antes/depois do parágrafo, evitando linhas vazias."
      ],
      "excecoes": [
        "A formação do parágrafo reside na marca final: apagar a marca de parágrafo funde os parágrafos e aplica a formação do último ao texto unido.",
        "Recuo de primeira linha afeta apenas a primeira linha do parágrafo, enquanto o recuo à esquerda/direita afeta todo o bloco."
      ],
      "palavrasChave": [
        "parágrafo",
        "quebra de linha",
        "recuo",
        "tabulação",
        "tabulador decimal",
        "espaçamento",
        "régua"
      ],
      "checklist": [
        "Eu sei distinguir quebra de parágrafo de quebra de linha?",
        "Sei configurar recuos pela régua e pelo diálogo Parágrafo?",
        "Sei definir tabulações por tipo e posição, incluindo decimal para valores monetários?",
        "Sei evitar espaços para alinhar colunas, usando tabulações e recuos?",
        "Sei controlar espaçamento antes/depois do parágrafo sem usar linhas vazias?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Recuar a primeira linha de um parágrafo, deslocando apenas essa linha em relação à margem esquerda.",
        "dados": "Um parágrafo de texto no Word no qual somente a primeira linha deve ser deslocada para a direita em relação à margem esquerda; recursos disponíveis: régua (marcador de recuo de primeira linha) e Início > Parágrafo > Recuo especial: Primeira linha, com o valor desejado.",
        "conceitos": [
          "Recuo de primeira linha",
          "Recuo especial aplicado apenas à primeira linha"
        ],
        "estrategia": "Selecionar o parágrafo e aplicar o recuo de primeira linha pela régua (arrastando o marcador superior) ou pelo diálogo Início > Parágrafo > Recuo especial: Primeira linha, definindo o valor desejado, de modo que somente a primeira linha seja deslocada e as demais linhas mantenham a margem esquerda original.",
        "execucao": [
          "Selecionar o parágrafo alvo (ou posicionar o cursor dentro dele).",
          "Acessar Início > Parágrafo > Recuo especial: Primeira linha e definir o valor desejado (por exemplo, 1,25 cm), ou arrastar o marcador de recuo de primeira linha na régua.",
          "Verificar que apenas a primeira linha do parágrafo foi deslocada para a direita, enquanto as demais linhas mantiveram a margem esquerda original."
        ],
        "resultado": "Apenas a primeira linha do parágrafo ficou deslocada em relação à margem esquerda, por meio do recuo especial de primeira linha, enquanto as demais linhas permaneceram na margem original.",
        "justificativa": "O resultado é o gabarito porque o recuo de primeira linha afeta somente a primeira linha do parágrafo, diferentemente do recuo à esquerda/direita, que desloca todo o bloco, sendo esse o comportamento exigido quando o enunciado pede deslocar apenas a primeira linha.",
        "errosFrequentes": [
          "Aplicar o recuo à esquerda em vez do recuo de primeira linha, deslocando todo o parágrafo em vez de apenas a primeira linha.",
          "Confundir recuo de primeira linha com recuo especial de suspenso, que desloca todas as linhas exceto a primeira."
        ],
        "variacao": "Se o enunciado mudar para deslocar todo o parágrafo em relação à margem esquerda (bloco inteiro), a resposta adequada passa a ser o recuo à esquerda, que afeta todas as linhas do parágrafo, e não apenas a primeira."
      },
      {
        "tipo": "aplicacao",
        "problema": "Numa relação de produtos, a coluna de preços precisa ficar alinhada pelo ponto decimal.",
        "dados": "Uma lista de produtos com preços em coluna (por exemplo, 12,50; 100,00; 7,80); a exigência é alinhar os valores pelo ponto decimal para facilitar a leitura; recurso disponível: Início > Parágrafo > Tabulações > definir posição (por exemplo, 8 cm) e alinhamento Decimal, pressionando Tab antes de cada valor.",
        "conceitos": [
          "Tabulação decimal",
          "Alinhamento de colunas de valores pelo ponto decimal"
        ],
        "estrategia": "Definir uma tabulação decimal na posição desejada (por exemplo, 8 cm) por meio de Início > Parágrafo > Tabulações, escolhendo o alinhamento Decimal, e pressionar Tab antes de cada valor; assim o ponto decimal de todos os valores fica alinhado verticalmente, independentemente da quantidade de dígitos antes ou depois da vírgula.",
        "execucao": [
          "Selecionar as linhas da coluna de preços ou posicionar o cursor no início da coluna.",
          "Acessar Início > Parágrafo > Tabulações, definir a posição (por exemplo, 8 cm) e escolher o alinhamento Decimal, depois clicar em OK.",
          "Pressionar a tecla Tab antes de cada valor da coluna para que o cursor avance até a posição da tabulação decimal.",
          "Verificar que o ponto decimal (vírgula no padrão brasileiro) de todos os valores ficou alinhado verticalmente."
        ],
        "resultado": "O ponto decimal de todos os valores da coluna ficou alinhado verticalmente, porque a tabulação decimal posiciona o cursor na mesma coluna para cada linha, independentemente do número de dígitos de cada valor.",
        "justificativa": "O resultado é o gabarito porque a tabulação decimal alinha números pelo ponto decimal, mantendo o alinhamento mesmo quando a fonte ou o tamanho muda, o que não ocorreria com cadeias de espaços, sendo esse o mecanismo correto para colunas de valores monetários.",
        "errosFrequentes": [
          "Usar espaços repetidos para alinhar os valores, o que desalinha a coluna quando muda a fonte ou o tamanho, pois cada caractere tem largura variável.",
          "Escolher o tipo errado de tabulador (por exemplo, à esquerda em vez de decimal), fazendo com que o alinhamento fique no início do texto em vez do ponto decimal."
        ],
        "variacao": "Se o enunciado mudar para alinhar uma coluna de nomes de produtos pelo lado direito (por exemplo, para formar uma margem direita reta), a tabulação adequada seria a de alinhamento à direita, que posiciona o texto de modo que seu final fique alinhado na posição definida."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário usa espaços repetidos para alinhar texto em colunas em um documento do Word.",
        "dados": "Um documento em que o usuário alinhou colunas de texto pressionando a tecla Espaço várias vezes até visualmente alinhar as colunas; ao mudar a fonte ou o tamanho, as colunas ficam desalinhadas; recurso correto: tabulações (por tipo e posição) e recuos.",
        "conceitos": [
          "Espaços repetidos não alinham colunas de forma consistente",
          "Tabulações e recuos como mecanismo correto de alinhamento estrutural"
        ],
        "estrategia": "Confrontar a prática equivocada (espaços repetidos) com o mecanismo correto (tabulações e recuos): espaços não alinham de forma consistente entre fontes e tamanhos porque cada caractere tem largura variável, enquanto tabulações e recuos mantêm o alinhamento independente da fonte; a correção é remover os espaços e definir tabulações adequadas para cada coluna.",
        "execucao": [
          "Registrar a prática do usuário: alinhar colunas pressionando Espaço repetidamente até visualmente alinhar.",
          "Identificar o problema: ao mudar a fonte ou o tamanho, as colunas ficam desalinhadas porque espaços têm largura variável.",
          "Remover as cadeias de espaços e definir tabulações por tipo e posição (por exemplo, tabulação esquerda para texto, tabulação decimal para valores) ou recuos para cada coluna.",
          "Verificar que as colunas permanecem alinhadas independentemente da fonte ou do tamanho escolhido."
        ],
        "resultado": "Incorreto: usar espaços repetidos para alinhar texto em colunas; o mecanismo correto é tabulações (por tipo e posição) e recuos, que mantêm o alinhamento independente da fonte e do tamanho.",
        "justificativa": "O resultado é o gabarito porque espaços repetidos não alinham de forma consistente entre fontes e tamanhos, enquanto tabulações e recuos são estruturas que mantêm o alinhamento independente da fonte, sendo esse o motivo pelo qual o alinhamento por espaços e uma prática instável a ser evitada em documentos profissionais.",
        "errosFrequentes": [
          "Acreditar que, se as colunas ficam visualmente alinhadas na fonte atual, os espaços repetidos são uma solução valida, ignorando que a mudança de fonte ou tamanho desalinha tudo.",
          "Tentar corrigir o desalinhamento adicionando mais espaços manualmente, em vez de substituir por tabulações e recuos definidos por posição."
        ],
        "variacao": "Se o enunciado mudar para um documento com colunas alinhadas por espaços que precisa ser enviado para impressão em outro computador com fonte diferente, a solução ainda é substituir os espaços por tabulações e recuos, pois o alinhamento por espaços não e portátil entre fontes diferentes."
      }
    ]
  }
};
