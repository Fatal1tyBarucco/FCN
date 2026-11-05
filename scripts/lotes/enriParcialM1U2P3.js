const enriParcialM1U2P3 = {
  "modulo-1-unidade-2-topico-4-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A escolha entre lista com marcadores e lista numerada afeta a clareza estrutural do documento e é cobrada em itens de informática para concursos quando o enunciado descreve passo a passo, inventário ou requisitos. O erro mais comum é confiar na numeração digitada à mão (“1.”, “2.”), que é texto fixo e não se reorganiza ao inserir ou excluir itens, ao contrário da numeração automática do Word, gerada como campo lógico. Dominar essa distinção evita respostas erradas em itens de verdadeiro/falso sobre numeração instável.",
      "preRequisitos": [
        "Conceito de parágrafo e quebra de linha no Word",
        "Recuos e alinhamento de parágrafos (tópico 3 da unidade)"
      ],
      "objetivosObservaveis": [
        "Escolher lista com marcadores ou numerada pelo critério de ordem dos itens",
        "Aplicar e personalizar símbolos de marcador e formatos de numeração",
        "Explicar por que a numeração automática se ajusta a inserções e exclusões, diferentemente da numeração manual"
      ],
      "competencias": [
        "Estruturação de documentos textuais com lógica de sequência",
        "Correção de numeração instável em documentos herdados"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "modulo-1-unidade-2-topico-3-sub-1 (Parágrafos e recuos) — cada nível da lista corresponde a um nível de indentação do parágrafo",
        "modulo-1-unidade-2-topico-2-sub-1 (Formatação direta vs. estilos) — aplica formatação consistente aos itens de lista"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema classificado como de média relevância no conteúdo programático de informática: aparece em descrições de documentos com passo a passo, inventário e requisitos, e em itens de verdadeiro/falso sobre numeração automática versus manual. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Listas com marcadores (bullets) usam símbolos como ponto, círculo ou seta para itens de mesma natureza onde a ordem não importa, como uma lista de materiais. Listas numeradas usam números, letras ou algarismos romanos sequenciais quando a sequência é essencial, como etapas de um procedimento. O Word oferece variações de símbolo para bullet e formatos personalizados para numeração, acessíveis em Início > Marcadores e Início > Numeração.",
      "intermediario": "A numeração automática do Word é um campo lógico, não texto digitado: inserir um item no meio da lista renumera os itens seguintes e excluir um item reorganiza a sequência. Isso permite manter passo a passo sempre ordenado sem retoque manual. O menu de contexto da numeração controla reinício e continuação de listas separadas no mesmo documento.",
      "avancado": "Listas multinível combinam marcadores e numeração em níveis diferentes, cada qual com formato próprio, útil para requisitos, normas e sumários. A personalização de formato (números, letras, romanos, símbolos) e o controle de indentação por nível exigem entendimento da relação entre nível de lista e estilo de parágrafo associado.",
      "especialista": "A gestão de listas em documentos longos envolve vincular níveis de lista multinível a estilos de parágrafo, controlar reinício de numeração por seção e solucionar conflitos de numeração herdada de modelos. É o nível de diagramação de relatórios integrados e editais com estrutura hierárquica profunda."
    },
    "comparacoes": [
      {
        "tema": "Lista com marcadores versus lista numerada",
        "a": {
          "rotulo": "Lista com marcadores (bullets)",
          "texto": "Cada item recebe um símbolo (ponto, círculo, seta) escolhido em Início > Marcadores; indica itens de mesma natureza sem ordem, como uma lista de materiais ou requisitos."
        },
        "b": {
          "rotulo": "Lista numerada",
          "texto": "Cada item recebe número, letra ou numeral romano sequencial em Início > Numeração; indica sequência onde a ordem é essencial, como instruções de procedimento ou passos de uma receita."
        },
        "diferencaGabarito": "A diferença de gabarito está no critério de ordem: se a ordem dos itens não altera o significado, usa-se bullet; se a sequência importa, usa-se numeração automática, jamais dígitos digitados à mão."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Digitar \"1.\", \"2.\", \"3.\" manualmente no início de cada parágrafo é o mesmo que aplicar numeração automática.",
        "porqueErrada": "É equivocado porque dígitos digitados à mão são texto comum e fixo: ao inserir ou excluir itens no meio, os números não se ajustam e o documento fica desordenado (dois \"3\", saltos de número).",
        "versaoCorreta": "O correto é aplicar numeração automática (Início > Numeração): o Word gera os números como campo lógico e os reorganiza sozinho ao inserir ou excluir itens, mantendo a sequência sempre válida."
      },
      {
        "afirmacaoEquivocada": "Listas bullet e listas numeradas são apenas uma questão de aparência e podem ser usadas de forma intercambiável.",
        "porqueErrada": "Não são intercambiáveis: o bullet comunica ausência de ordem e a numeração comunica sequência essencial; trocar um pelo outro muda a lógica do documento e pode levar a resposta errada em questões de interpretação.",
        "versaoCorreta": "Escolha bullet quando a ordem não importa (materiais, itens de inventário) e numeração quando a ordem é essencial (passos, argumentos, etapas); cada tipo serve a uma intenção estrutural diferente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Lista com marcadores (bullet): símbolo para itens sem ordem",
        "Lista numerada: sequência automática para itens com ordem",
        "Numeração automática: campo lógico gerado pelo Word, não texto digitado"
      ],
      "regras": [
        "Ordem dos itens não importa -> use bullet; ordem essencial -> use numeração automática",
        "Nunca digite \"1.\", \"2.\" à mão como substituto da numeração automática",
        "Inserir ou excluir um item renumera automaticamente a sequência seguinte"
      ],
      "comparacoes": [
        "Bullet indica itens de mesma natureza sem primeiro nem último; numeração indica sequência com primeiro e último definidos"
      ],
      "fluxos": [
        "Selecionar parágrafos -> Início > Marcadores/Numeração -> escolher formato -> digitar itens com Enter -> Enter duplo para encerrar a lista"
      ],
      "excecoes": [
        "Enter duplo (ou tecla de finalização) encerra a lista e volta ao parágrafo normal sem marcador nem número",
        "Listas separadas podem ter reinício ou continuação de numeração controlados pelo menu de contexto da numeração"
      ],
      "palavrasChave": [
        "bullet",
        "marcador",
        "numeração automática",
        "numeração manual",
        "lista sequencial",
        "Início > Marcadores",
        "Início > Numeração",
        "renumeração automática"
      ],
      "checklist": [
        "Identificar se a ordem dos itens importa antes de escolher o tipo de lista",
        "Aplicar bullet para itens sem ordem e numeração para sequência",
        "Usar Início > Marcadores para escolher o símbolo do bullet",
        "Usar Início > Numeração para aplicar formato automático",
        "Verificar que inserir ou excluir itens renumera a lista automaticamente",
        "Evitar digitar números à mão como substituto da numeração automática"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Criar uma lista de compras de materiais de escritório com marcadores, onde nenhum item tem precedência sobre os outros.",
        "dados": "O kit do participante reúne caneta esferográfica, caderno espiral, pasta de arquivo, clipes e grampeador; para marcar o ponto no texto, ele usa o recurso Início > Marcadores > símbolo ponto.",
        "conceitos": [
          "Lista com marcadores (bullet)",
          "Itens de mesma natureza sem ordem"
        ],
        "estrategia": "Aplicar marcador de bullet a um conjunto de parágrafos independentes, usando o símbolo padrão e finalizando a lista com Enter duplo para retornar ao parágrafo normal.",
        "execucao": [
          "1. Selecionar os parágrafos ou posicionar o cursor onde a lista começa.",
          "2. Ir à guia Início > grupo Parágrafo > Marcadores > escolher o símbolo ponto.",
          "3. Digitar cada item seguido de Enter para criar novo item com marcador.",
          "4. Ao terminar, pressionar Enter duplo para sair da lista e voltar ao parágrafo comum."
        ],
        "resultado": "Uma lista com cinco itens, cada um precedido por um ponto de bullet, sem numeração, pronta para ser lida como conjunto sem ordem de precedência.",
        "justificativa": "O resultado é o gabarito porque o bullet é o recurso correto quando a ordem dos itens não altera o significado, e o Enter duplo encerra o modo de lista sem deixar marcadores órfãos no parágrafo seguinte.",
        "errosFrequentes": [
          "Deixar de pressionar Enter duplo, fazendo o parágrafo seguinte herdar o marcador de bullet indevidamente",
          "Escolher um símbolo de bullet muito chamativo que prejudica a leitura formal do documento"
        ],
        "variacao": "Mesmo procedimento, mas usando símbolo de seta ou círculo para diferenciar visualmente uma lista de suprimentos de uma lista de equipamentos no mesmo documento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Elaborar um manual de procedimento com oito etapas; a fiscalização exige que, ao inserir uma nova etapa 3, as demais renumere automaticamente sem retoque manual.",
        "dados": "Oito etapas de procedimento. Recurso: Início > Numeração > formato número seguido de ponto. Ação de teste: inserir uma nova etapa entre as etapas 2 e 3.",
        "conceitos": [
          "Lista numerada automática",
          "Campo lógico de numeração do Word"
        ],
        "estrategia": "Aplicar numeração automática às etapas para que o Word gere os números como campo lógico e os reorganize ao inserir ou excluir itens, preservando a sequência obrigatória do procedimento.",
        "execucao": [
          "1. Digitar as oito etapas como parágrafos separados.",
          "2. Selecionar todos os parágrafos das etapas.",
          "3. Ir à guia Início > Numeração > escolher o formato número seguido de ponto.",
          "4. Inserir uma nova etapa 3 entre as etapas 2 e 3 original e observar que as etapas seguintes passam de 4, 5, 6... para 5, 6, 7..."
        ],
        "resultado": "O manual fica com oito etapas numeradas automaticamente; ao inserir a nova etapa 3, as antigas etapas 3 a 8 tornam-se 4 a 9, sem necessidade de editar nenhum número à mão.",
        "justificativa": "O resultado é o gabarito porque a numeração automática é um campo lógico do Word que se atualiza sozinho, ao contrário da numeração digitada à mão, que é texto fixo e não acompanha inserções nem exclusões.",
        "errosFrequentes": [
          "Digitar \"1.\", \"2.\", \"3.\" à mão, achando que basta digitar os números para ter uma lista numerada",
          "Esquecer de selecionar todos os parágrafos antes de aplicar a numeração, deixando alguns itens fora da sequência"
        ],
        "variacao": "Mesmo cenário, mas com a exigência de que a numeração use algarismos romanos (i, ii, iii) para as etapas preliminares e arábicos para o corpo, testando a personalização de formato."
      },
      {
        "tipo": "erro",
        "problema": "Um documento herdado usa \"1.\", \"2.\", \"3.\" digitados à mão e, após revisões, ficou com dois itens numerados \"3\" e saltos de número na sequência.",
        "dados": "Lista de cinco itens com numeração manual desordenada (dois \"3\", ausência de \"4\"). Recurso de correção: Início > Numeração + remoção dos dígitos digitados.",
        "conceitos": [
          "Numeração manual como texto fixo",
          "Numeração automática como campo lógico reorganizável"
        ],
        "estrategia": "Diagnosticar que os números digitados são texto comum e não se reorganizam, então remover os dígitos digitados e aplicar numeração automática para que futuras inserções e exclusões renumerem sozinhas.",
        "execucao": [
          "1. Identificar que os números \"1.\", \"2.\", \"3.\" foram digitados como texto comum, não como recurso automático.",
          "2. Selecionar os parágrafos da lista e remover manualmente os dígitos e pontos digitados no início de cada linha.",
          "3. Aplicar numeração automática em Início > Numeração ao texto limpo.",
          "4. Confirmar que inserir ou excluir um item renumera a sequência inteira corretamente."
        ],
        "resultado": "A lista fica numerada automaticamente de 1 a 5, sem duplicatas nem saltos, e qualquer edição futura (inserir ou excluir itens) será acompanhada pela renumeração automática do Word.",
        "justificativa": "O resultado é o gabarito porque substitui a numeração manual (texto fixo e falho) pela numeração automática (campo lógico reorganizável), que é o mecanismo correto do Word para manter sequências válidas.",
        "errosFrequentes": [
          "Tentar corrigir apenas os números errados à mão, sem perceber que a raiz do problema é o uso de texto fixo em vez de campo automático",
          "Aplicar numeração automática sobre os dígitos digitados, resultando em duplicação como \"1. 1.\" no início de cada item"
        ],
        "variacao": "Mesmo diagnóstico de desordem, mas em uma lista multinível com três níveis de numeração, exigindo correção de formato e indentação em cada nível, não apenas na sequência principal."
      }
    ]
  },
  "modulo-1-unidade-2-topico-5-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Cabeçalhos e rodapés organizam documentos formais e são cobrados em itens de informática para concursos quando o enunciado descreve preliminares numeradas em romano, corpo em arábico, cabeçalho diferente na primeira página ou quebra de seção. O erro mais comum é afirmar que o cabeçalho é único e imutável para todo o documento; na verdade, quebras de seção e a opção Vincular ao Anterior permitem cabeçalhos e rodapés diferentes por seção. Dominar isso evita respostas erradas em itens de verdadeiro/falso e múltipla escolha sobre numeração de páginas.",
      "preRequisitos": [
        "Conceito de parágrafo e paginação no Word (tópico 3 da unidade)",
        "Inserção de elementos na guia Inserir"
      ],
      "objetivosObservaveis": [
        "Inserir e editar cabeçalho e rodapé com campo de número de página",
        "Configurar variações por seção e por página (primeira página diferente, pares e ímpares)",
        "Reiniciar numeração em seção específica e controlar o vínculo entre seções"
      ],
      "competencias": [
        "Diagramação de documentos formais com preliminares e corpo",
        "Controle de estrutura de seções e campos dinâmicos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-6-sub-1 (Quebra de página vs. quebra de seção) — requisito para formatos diferentes por seção",
        "modulo-1-unidade-2-topico-14-sub-1 (Criação de relatório técnico integrado) — aplicação de cabeçalho/rodapé em documento longo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema classificado como de alta relevância no conteúdo programático de informática: aparece em cenários de preliminares em romano e corpo em arábico, cabeçalho diferente na capa e controle de numeração por quebra de seção. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Cabeçalho é a área no topo de cada página e rodapé a área na base; ambos podem conter texto fixo (título, autor, data) e campos dinâmicos (número de página, número de páginas, nome do arquivo). Inserção: Inserir > Cabeçalho/Rodapé ou Número de Página, com posição superior/inferior e alinhamento. O número de página inserido pelo comando adequado é um campo dinâmico que se recalcula ao crescer o documento.",
      "intermediario": "A numeração de páginas permite formatos (arábico 1, 2, 3; romano i, ii, iii; alfabético A, B, C), posições e reinício em valor diferente de 1, definidos no diálogo Formatar Números de Página. Quebras de seção permitem formatos diferentes por seção: preliminares em romano e corpo em arábico reiniciando em 1 exigem quebra de seção e desmarcar Vincular ao Anterior no rodapé do corpo.",
      "avancado": "Variações por seção e por página incluem primeira página diferente (capa sem cabeçalho) e páginas pares e ímpares diferentes. Cabeçalhos e rodapés pertencem a seções; por padrão uma seção nova herda o conteúdo da anterior, mas o vínculo é configurável desmarcando Vincular ao Anterior. Campos dinâmicos dentro do cabeçalho/rodapé atualizam automaticamente.",
      "especialista": "A gestão avançada envolve vincular cabeçalhos/rodapés a seções específicas em relatórios longos, controlar herança e desvinculação entre seções, e combinar campos dinâmicos com texto fixo em diagramação de editais e relatórios integrados com preliminares numeradas separadamente do corpo."
    },
    "comparacoes": [
      {
        "tema": "Cabeçalho único versus cabeçalho variável por seção",
        "a": {
          "rotulo": "Cabeçalho único (sem quebra de seção)",
          "texto": "Mesmo conteúdo de cabeçalho e rodapé se repete em todas as páginas do documento; adequado para documentos simples sem preliminares numeradas separadamente."
        },
        "b": {
          "rotulo": "Cabeçalho variável por seção (com quebra de seção)",
          "texto": "Cada seção pode ter cabeçalho e rodapé próprios, por exemplo preliminares em número romano e corpo em arábico, ou capa sem cabeçalho e demais páginas com logotipo."
        },
        "diferencaGabarito": "A diferença de gabarito está na necessidade de quebra de seção e desvinculação (Vincular ao Anterior desmarcado): sem quebra de seção o formato é único para todo o documento; com ela, cada seção pode ter numeração e conteúdo independentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O mesmo cabeçalho vale para todas as seções de um documento, independentemente de quebras de seção.",
        "porqueErrada": "É equivocado porque quebras de seção permitem cabeçalhos e rodapés diferentes por seção; por padrão a seção nova herda o anterior, mas basta desmarcar Vincular ao Anterior na seção destino e editar o conteúdo para diferenciá-lo.",
        "versaoCorreta": "O correto é que cada seção pode ter cabeçalho e rodapé próprios: inserir quebra de seção, desmarcar Vincular ao Anterior na seção desejada e editar o cabeçalho/rodapé dela independentemente das outras seções."
      },
      {
        "afirmacaoEquivocada": "Digitar o número da página manualmente no rodapé equivale a inserir o campo de número de página.",
        "porqueErrada": "Não equivale: o número digitado à mão é texto fixo e não acompanha inserções e exclusões de páginas, enquanto o campo de número de página (Inserir > Número de Página) se recalcula automaticamente ao alterar o documento.",
        "versaoCorreta": "O correto é inserir o campo de número de página pelo comando Inserir > Número de Página, que entra como campo dinâmico e se atualiza sozinho; digitar o número manualmente não acompanha mudanças no documento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Cabeçalho: área do topo de cada página",
        "Rodapé: área da base de cada página",
        "Campo dinâmico: número de página que se recalcula automaticamente"
      ],
      "regras": [
        "Inserir número de página: Inserir > Número de Página > posição e alinhamento",
        "Formato e reinício por seção: Formatar Números de Página (arábico, romano, alfabético, iniciar em valor diferente de 1)",
        "Cabeçalho diferente por seção: quebra de seção + desmarcar Vincular ao Anterior"
      ],
      "comparacoes": [
        "Número de página digitado à mão é texto fixo e não se atualiza; campo de número de página é dinâmico e se recalcula sozinho"
      ],
      "fluxos": [
        "Duplo clique no cabeçalho/rodapé para editar -> marcar Primeira Página Diferente quando necessário -> editar conteúdo -> clicar fora para encerrar a edição"
      ],
      "excecoes": [
        "Primeira Página Diferente deixa a capa com cabeçalho próprio (vazio ou diferenciado) enquanto as demais mantêm o conteúdo padrão",
        "Por padrão uma seção nova herda o cabeçalho/rodapé da anterior; o vínculo só é quebrado ao desmarcar Vincular ao Anterior"
      ],
      "palavrasChave": [
        "cabeçalho",
        "rodapé",
        "número de página",
        "campo dinâmico",
        "quebra de seção",
        "Vincular ao Anterior",
        "Primeira Página Diferente",
        "Formatar Números de Página"
      ],
      "checklist": [
        "Inserir cabeçalho/rodapé pela guia Inserir > Cabeçalho/Rodapé",
        "Inserir campo de número de página (não digitar o número à mão)",
        "Escolher formato de numeração (arábico, romano, alfabético) em Formatar Números de Página",
        "Usar quebra de seção para preliminares em romano e corpo em arábico",
        "Desmarcar Vincular ao Anterior para cabeçalhos diferentes por seção",
        "Ativar Primeira Página Diferente para capa sem cabeçalho"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Inserir o número de página no rodapé, centralizado, para que apareça em todas as páginas do documento.",
        "dados": "Documento de várias páginas. Recurso: Inserir > Número de Página > Inferior da Página > Central.",
        "conceitos": [
          "Rodapé",
          "Campo dinâmico de número de página"
        ],
        "estrategia": "Inserir o número de página como campo dinâmico no rodapé inferior centralizado, de forma que o Word recalcule automaticamente à medida que o documento cresce.",
        "execucao": [
          "1. Ir à guia Inserir > Número de Página.",
          "2. Escolher Inferior da Página e o alinhamento Central.",
          "3. Confirmar que o número aparece como campo dinâmico no rodapé de todas as páginas.",
          "4. Clicar fora do rodapé para encerrar a edição e retornar ao corpo do documento."
        ],
        "resultado": "O número de página aparece centralizado no rodapé de cada página, atualizando automaticamente (1, 2, 3...) à medida que páginas são adicionadas ou removidas.",
        "justificativa": "O resultado é o gabarito porque o número inserido pelo comando adequado é um campo dinâmico que se recalcula sozinho, ao contrário de digitar o número manualmente, que é texto fixo e não acompanha mudanças no documento.",
        "errosFrequentes": [
          "Digitar o número da página à mão no rodapé, achando que basta escrever \"1\", \"2\", \"3\"",
          "Esquecer de clicar fora do rodapé após a edição, deixando o documento no modo de edição de cabeçalho/rodapé"
        ],
        "variacao": "Mesmo procedimento, mas alinhando o número à direita e inserindo o texto \"Página \" antes do campo, criando um rodapé com \"Página 1\", \"Página 2\", etc."
      },
      {
        "tipo": "aplicacao",
        "problema": "Relatório com folha de rosto e resumo (preliminares) seguidos do corpo: as preliminares devem ser numeradas em romano (i, ii, iii) e o corpo em arábico reiniciando em 1.",
        "dados": "Preliminares e corpo. Recursos: quebra de seção (Próxima Página), Inserir > Número de Página > Formatar Números de Página, Vincular ao Anterior.",
        "conceitos": [
          "Quebra de seção",
          "Numeração por seção",
          "Formato romano e arábico"
        ],
        "estrategia": "Inserir quebra de seção após as preliminares, numerar as preliminares em romano e, no corpo, desvincular o rodapé da seção anterior e aplicar numeração arábica iniciando em 1.",
        "execucao": [
          "1. Posicionar o cursor ao final das preliminares e inserir quebra de seção (Quebra de Página / Próxima Página).",
          "2. Com o cursor nas preliminares, ir a Inserir > Número de Página > Formatar Números de Página e escolher formato i, ii, iii.",
          "3. No corpo, desmarcar Vincular ao Anterior no rodapé para desvincular da seção de preliminares.",
          "4. No corpo, ir a Formatar Números de Página > formato 1, 2, 3 > Iniciar em 1."
        ],
        "resultado": "As preliminares são numeradas em romano (i, ii, iii) e o corpo em arábico reiniciando em 1 (1, 2, 3...), com cada seção mantendo seu formato independente graças à quebra de seção e à desvinculação.",
        "justificativa": "O resultado é o gabarito porque a quebra de seção é o requisito que permite formatos diferentes por seção; sem ela, o formato de numeração seria único para todo o documento e não haveria reinício em 1 no corpo.",
        "errosFrequentes": [
          "Esquecer de inserir quebra de seção, fazendo o formato romano valer para todo o documento",
          "Não desmarcar Vincular ao Anterior, fazendo o corpo herdar a numeração romana das preliminares em vez de reiniciar em arábico"
        ],
        "variacao": "Mesmo cenário, mas com três seções: capa sem número, resumo em romano e corpo em arábico, exigindo duas quebras de seção e desvinculações sucessivas."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que o mesmo cabeçalho (com logotipo institucional) vale para todas as seções de um documento e que não é possível ter cabeçalhos diferentes por seção.",
        "dados": "Documento com múltiplas seções e logotipo no cabeçalho. Recursos: quebra de seção, Vincular ao Anterior (desmarcar).",
        "conceitos": [
          "Cabeçalho por seção",
          "Vínculo entre seções (Vincular ao Anterior)"
        ],
        "estrategia": "Desmentir a afirmação mostrando que quebras de seção permitem cabeçalhos diferentes por seção: basta desmarcar Vincular ao Anterior na seção destino e editar o cabeçalho dela independentemente.",
        "execucao": [
          "1. Inserir quebra de seção para criar uma nova seção no documento.",
          "2. Na seção nova, acessar o cabeçalho e desmarcar Vincular ao Anterior (na guia Design do Cabeçalho e Rodapé).",
          "3. Editar o cabeçalho da seção nova de forma independente (ex.: remover o logotipo ou inserir texto diferente).",
          "4. Confirmar que as seções anteriores mantêm o cabeçalho original enquanto a seção nova exibe o conteúdo editado."
        ],
        "resultado": "O usuário compreende que cabeçalhos podem ser diferentes por seção: a seção nova não precisa herdar o logotipo do cabeçalho anterior quando o vínculo é desmarcado e o conteúdo é editado independentemente.",
        "justificativa": "O resultado é o gabarito porque a afirmação é incorreta: por padrão a seção herda o cabeçalho da anterior, mas o vínculo é configurável, permitindo cabeçalhos distintos por seção após desmarcar Vincular ao Anterior.",
        "errosFrequentes": [
          "Acreditar que o cabeçalho é sempre único e imutável para todo o documento",
          "Editar o cabeçalho de uma seção sem desmarcar Vincular ao Anterior, alterando acidentalmente todas as seções vinculadas"
        ],
        "variacao": "Mesmo diagnóstico, mas com exigência de rodapé diferente em páginas pares e ímpares (espelhado) para encadernação, testando a variação por página dentro da mesma seção."
      }
    ]
  }
};
