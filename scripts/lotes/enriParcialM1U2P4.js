const enriParcialM1U2P4 = {
  "modulo-1-unidade-2-topico-5-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Notas de rodapé e notas de fim permitem anexar comentários, citações e referências sem interromper a leitura do corpo principal do documento. Em concursos, o tema aparece em cenários de revisão editorial em que o enunciado pede a numeração automática e a atualização de referências cruzadas; confundir os dois tipos de nota ou digitar o número à mão inverte o gabarito e compromete a consistência do documento.",
      "preRequisitos": [
        "Noções básicas de edição de texto e paginação em processadores de texto."
      ],
      "objetivosObservaveis": [
        "inserir notas de rodapé e notas de fim usando os comandos próprios do editor;",
        "criar referências cruzadas que apontem ao tipo correto de nota com atualização automática;"
      ],
      "competencias": [
        "diferenciar nota de rodapé de nota de fim por localização e propósito",
        "gerenciar numeração automática e referências cruzadas sem digitação manual de números"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-5-sub-1 (Cabeçalhos e rodapés) — ambos pertencem à mesma unidade de paginação e comentário editorial"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Notas de rodapé e de fim integram o conteúdo programático de informática para concursos e são objeto de avaliação em itens que apresentam cenários de revisão editorial, exigindo distinguir os dois tipos de nota e aplicar numeração automática com referências cruzadas atualizadas. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "As notas de rodapé e as notas de fim são recursos de comentário editorial que mantêm informações fora do corpo principal do documento. Inserção: Inserir > Nota de Rodapé (ou Ctrl+Alt+Enter) cria nota de rodapé; Inserir > Nota de Fim cria nota de fim. Numeração: o número é gerado automaticamente e pode ser configurado (formato numérico, alfabético ou romano) nas configurações de notas do documento. Referência cruzada: Inserir > Referência Cruzada > Tipo: Nota de Rodapé ou Nota de Fim > inserir no texto; a referência atualiza conforme a nota.",
      "intermediario": "A numeração das notas de rodapé e das notas de fim é sequencial e independente entre os dois tipos, podendo ser configurada em algarismos arábicos, letras ou algarismos romanos. Como cada família mantém sua própria sequência, uma nova nota de fim recebe o número 1 mesmo quando já existam notas de rodapé. A referência cruzada deve apontar ao tipo correto (rodapé ou fim) para exibir a numeração adequada e atualizar automaticamente quando a ordem das notas muda.",
      "avancado": "Referências cruzadas entre notas permitem citar uma mesma nota em várias partes do documento com atualização automática da numeração. O autor deve escolher Inserir > Referência Cruzada com o tipo correto, nunca digitar o número à mão, porque o texto digitado não se reorganiza ao inserir ou excluir notas, enquanto o campo gerado pelo comando mantém chamada, nota e remissão coerentes em qualquer computador.",
      "especialista": "A consistência do documento depende de tratar a numeração como campo do editor e não como texto fixo. Quando uma nova nota é inserida no meio do texto, todas as notas seguintes são renumeradas automaticamente e as referências cruzadas acompanham a mudança, desde que cada referência esteja vinculada ao tipo correto de nota e ao comando próprio do editor."
    },
    "comparacoes": [
      {
        "tema": "Nota de rodapé versus nota de fim",
        "a": {
          "rotulo": "Nota de rodapé",
          "texto": "Comentário impresso no pé da página em que aparece a chamada, mantendo a referência próxima ao texto citado."
        },
        "b": {
          "rotulo": "Nota de fim",
          "texto": "Comentário reunido ao final do documento ou da seção, com numeração independente da sequência das notas de rodapé."
        },
        "diferencaGabarito": "A diferença está na localização e na sequência: a nota de rodapé fica no pé da página e segue a numeração das notas de rodapé, enquanto a nota de fim fica reunida ao final e abre sua própria sequência, independentemente das notas de rodapé existentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário insere referência cruzada manualmente escrevendo o texto da nota.",
        "porqueErrada": "Escrever o texto da nota à mão não cria um campo de referência cruzada, portanto a numeração não se atualiza quando a ordem das notas muda e a remissão pode ficar incorreta.",
        "versaoCorreta": "Incorreto: a referência cruzada deve ser criada via Inserir > Referência Cruzada selecionando o tipo correto de nota, para que a numeração atualize automaticamente."
      },
      {
        "afirmacaoEquivocada": "A nota de fim recém-inserida deve continuar a numeração das notas de rodapé existentes, recebendo o número seis quando há cinco notas de rodapé.",
        "porqueErrada": "Cada tipo de nota mantém sua própria sequência independente, de modo que a primeira nota de fim recebe o número um em sua própria família, mesmo que já existam cinco notas de rodapé.",
        "versaoCorreta": "Errado. As notas de rodapé e as notas de fim são coleções distintas: a nova nota de fim abre a sequência um em seu próprio tipo, sem continuar a numeração das notas de rodapé."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "nota de rodapé: comentário impresso no pé da página em que aparece a chamada",
        "nota de fim: comentário reunido ao final do documento ou da seção, com sequência própria",
        "campo automático: numeração gerada pelo editor, que se reorganiza quando a ordem das notas muda",
        "referência cruzada: remissão que acompanha a numeração da nota referida e atualiza conforme a nota"
      ],
      "regras": [
        "Inserir nota de rodapé pelo comando Inserir > Nota de Rodapé (atalho Ctrl+Alt+Enter).",
        "Inserir nota de fim pelo comando Inserir > Nota de Fim, que mantém sequência independente.",
        "A referência cruzada deve apontar ao tipo correto de nota (rodapé ou fim) para exibir a numeração adequada.",
        "A numeração pode ser configurada em algarismos arábicos, letras ou algarismos romanos nas configurações de notas do documento."
      ],
      "comparacoes": [
        "Nota de rodapé fica no pé da página e segue a numeração das notas de rodapé; nota de fim fica reunida ao final e abre sua própria sequência."
      ],
      "fluxos": [
        "Posicionar o cursor após o termo citado → Inserir > Nota de Rodapé ou Nota de Fim → escrever o texto da nota → usar Referência Cruzada com o tipo correto para remeter à mesma nota."
      ],
      "excecoes": [
        "Digitar o número da nota à mão quebra a sequência na primeira inserção ou exclusão, porque o texto digitado não é recalculado pelo editor."
      ],
      "palavrasChave": [
        "nota de rodapé",
        "nota de fim",
        "numeração automática",
        "referência cruzada",
        "Campo",
        "pé da página",
        "sequência independente"
      ],
      "checklist": [
        "A chamada está posicionada imediatamente após o termo citado, sem espaço antes?",
        "Cada tipo de nota foi inserido pelo comando próprio (rodapé ou fim)?",
        "A referência cruzada aponta ao tipo correto de nota?",
        "A numeração é gerada pelo editor e não digitada manualmente?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um relatório de quarenta páginas cita seis normas técnicas no corpo do texto. O aluno deve registrar as referências completas e numerá-las sem digitar números, de modo que uma inclusão posterior renumere tudo sozinha.",
        "dados": "Documento de 40 páginas em .docx, seis citações no corpo do texto, numeração de notas exigida em algarismos arábicos e uma lista de bibliografia já existente ao final.",
        "conceitos": [
          "nota de rodapé: comentário impresso no pé da página em que aparece a chamada",
          "nota de fim: comentário reunido ao final do documento ou da seção",
          "campo automático: numeração gerada pelo editor, que se reorganiza quando a ordem das notas muda"
        ],
        "estrategia": "Separar o que é comentário de página do que é referência reunida ao final e inserir cada tipo pelo comando próprio do editor, para que a numeração seja campo e não texto digitado.",
        "execucao": [
          "Posicionar o cursor imediatamente após o termo citado, sem espaço antes da chamada.",
          "Usar Inserir > Inserir Nota de Rodapé (atalho Ctrl+Alt+Enter) nas seis citações de página; a sequência 1 a 6 é criada pelo próprio editor.",
          "Para a bibliografia, usar Inserir > Inserir Nota de Fim, que mantém sequência independente da numeração das notas de rodapé.",
          "Se outro trecho precisar remeter à mesma nota, usar Inserir > Referência Cruzada com o tipo correto (Nota de Rodapé ou Nota de Fim), nunca digitar o número à mão."
        ],
        "resultado": "Seis notas de rodapé numeradas automaticamente e a bibliografia em nota de fim com numeração própria; ao inserir uma sétima citação no meio do texto, as seguintes são renumeradas e as referências cruzadas acompanham a mudança.",
        "justificativa": "A numeração de notas é campo do documento, e não texto: por isso a inserção pelo comando preserva a sequência lógica. Notas de rodapé e de fim têm sequências independentes e formato configurável, de modo que apontar a referência cruzada para o tipo errado exibe um número que não corresponde à chamada.",
        "errosFrequentes": [
          "Digitar o número da nota manualmente: a sequência deixa de acompanhar inserções e exclusões.",
          "Criar a referência cruzada apontando para nota de fim quando a chamada é de nota de rodapé.",
          "Simular nota de rodapé com Enter e linha horizontal, o que quebra a paginação e não cria campo algum."
        ],
        "variacao": "A revisão editorial passa a exigir numeração de notas em algarismos romanos. Indique onde essa configuração é alterada no documento e explique por que ela não reescreve o texto das chamadas já inseridas."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno recebe um texto com cinco notas de rodapé e precisa acrescentar uma nota de fim que cite a norma principal, mantendo intactas as numerações que já existem.",
        "dados": "Cinco notas de rodapé numeradas de 1 a 5, exigência de uma única nota de fim, seção de bibliografia já formatada e nenhuma referência cruzada existente.",
        "conceitos": [
          "sequência independente: cada tipo de nota tem numeração própria",
          "formato de numeração: configuração que define se a nota usa números, letras ou algarismos romanos",
          "chamada da nota: marca no corpo do texto que remete ao comentário"
        ],
        "estrategia": "Inserir a nota de fim pelo comando específico de nota de fim, aceitando que ela abra a sequência 1 em seu próprio tipo, em vez de tentar continuar a numeração das notas de rodapé.",
        "execucao": [
          "Colocar o cursor ao final do trecho que será comentado e escolher Inserir > Inserir Nota de Fim.",
          "Escrever o texto da nota na área de notas de fim, ao final do documento.",
          "Conferir que as notas de rodapé continuam numeradas de 1 a 5 e que a nota de fim aparece como 1 na sua própria sequência.",
          "Ajustar o formato de numeração das notas de fim, se a norma interna exigir algarismos romanos, nas configurações de notas do documento."
        ],
        "resultado": "Documento com cinco notas de rodapé e uma nota de fim, cada sequência numerada de forma independente e estável, sem necessidade de renumerar nada à mão.",
        "justificativa": "As duas famílias de notas são coleções distintas: a numeração de cada uma depende apenas da ordem dentro do seu tipo. Por isso a nota de fim recém-inserida recebe o número 1 mesmo existindo cinco notas de rodapé, e qualquer tentativa de forçar a continuação da sequência produziria numeração incorreta.",
        "errosFrequentes": [
          "Tentar continuar a numeração das notas de rodapé na nota de fim.",
          "Converter todas as notas de rodapé em notas de fim para uniformizar a numeração, alterando o layout das páginas.",
          "Escrever a nota de fim no corpo do texto, sem chamada associada."
        ],
        "variacao": "A norma interna passa a exigir que a nota de fim seja referenciada em três pontos diferentes do texto. Descreva como criar as remissões sem duplicar a nota e o que acontece com a numeração se a nota for reordenada."
      },
      {
        "tipo": "erro",
        "problema": "Um estagiário afirma que, para garantir que o documento fique igual em qualquer computador, deve digitar o número da nota de rodapé no corpo do texto e repetir esse mesmo número na lista de notas ao final.",
        "dados": "Documento com doze notas, dois revisores trabalhando em cópias distintas, sumário automático já inserido e três referências cruzadas para notas existentes.",
        "conceitos": [
          "texto digitado x campo: conteúdo fixo x conteúdo recalculado pelo editor",
          "renumeração: reorganização automática da sequência quando a ordem muda",
          "referência cruzada: remissão que acompanha a numeração da nota referida"
        ],
        "estrategia": "Reproduzir a consequência da numeração manual em um cenário com inserção de nota no meio do texto e comparar com o comportamento do campo automático.",
        "execucao": [
          "Inserir uma nova nota entre a terceira e a quarta posições do documento numerado à mão.",
          "Observar que todas as notas seguintes ficam com número errado, porque o texto digitado não se altera.",
          "Observar que as três referências cruzadas também apontam para números que não correspondem mais à chamada.",
          "Repetir o teste com notas inseridas por comando e verificar que a sequência e as remissões se ajustam sem intervenção."
        ],
        "resultado": "A afirmação é incorreta. A numeração manual quebra na primeira inserção, enquanto a numeração gerada por comando se mantém coerente em qualquer computador, porque é campo do documento e não texto digitado.",
        "justificativa": "A estabilidade do documento não vem de o número estar escrito, mas de ele ser calculado a partir da ordem das notas. Texto digitado não é atualizado pelo editor, e é justamente em documentos com muitos revisores e inserções frequentes que a numeração manual gera divergência entre chamada, nota e referência cruzada.",
        "errosFrequentes": [
          "Confundir estabilidade de exibição com correção da numeração.",
          "Corrigir a divergência renumerando tudo à mão a cada revisão.",
          "Remover as referências cruzadas para evitar inconsistência, perdendo a remissão automática."
        ],
        "variacao": "O documento é consolidado a partir de duas cópias com notas inseridas em ordens diferentes. Explique por que a consolidação por texto digitado produz conflito de numeração e qual procedimento mantém as sequências corretas."
      }
    ]
  },
  "modulo-1-unidade-2-topico-6-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir quebra de página de quebra de seção é uma distinção de maior peso no conteúdo programático da unidade de paginação do Word. Questões de concurso apresentam cenários como \"iniciar capítulo em página nova\" versus \"virar a página para paisagem no meio do documento\", e a alternativa errada troca os recursos; escolher o recurso errado muda o gabarito e quebra o documento real, alterando formatação que deveria ser apenas local.",
      "preRequisitos": [
        "Noções básicas de parágrafos e paginação em processadores de texto.",
        "Conhecimento prévio de cabeçalhos e rodapés (tópico 5 da unidade)."
      ],
      "objetivosObservaveis": [
        "distinguir quebra de página de quebra de seção pela consequência na formatação;",
        "escolher o tipo correto de quebra de seção para o cenário de formatação desejado;"
      ],
      "competencias": [
        "diagramação avançada com controle de formatação por seção",
        "correção de documentos com formatação quebrada por uso inadequado de quebras"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-5-sub-1 (Cabeçalhos e rodapés) — a quebra de seção controla o vínculo de cabeçalho/rodapé entre seções"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A diferença entre quebra de página e quebra de seção integra o programa de informática para concursos, pois o enunciado costuma apresentar cenários de paginação e formatação local em que escolher o recurso errado inverte o gabarito. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Quebra de página (Layout > Quebras > Página, ou Ctrl+Enter) insere uma marca que força o conteúdo seguinte a começar na página seguinte; a formatação da página (margens, orientação, colunas, numeração, cabeçalho e rodapé) permanece idêntica — é apenas um avanço físico do conteúdo.",
      "intermediario": "Quebra de seção (Layout > Quebras > Quebras de Seção) inicia uma nova seção, unidade administrativa do documento que carrega suas próprias configurações de página: orientação (retrato ou paisagem), margens, número de colunas, formato de numeração e cabeçalhos/rodapés específicos. Tipos: Próxima Página inicia a seção na página seguinte; Contínua inicia na mesma página (útil para colunas); Pares e Ímpares iniciam em página par ou ímpar, respectivamente.",
      "avancado": "O critério de escolha depende do objetivo: se apenas avançar o conteúdo para a próxima página sem mudar formatação, use quebra de página; se precisar alterar orientação, margens, colunas ou cabeçalho/rodapé de uma parte, use quebra de seção. Quebra de página nunca muda margens nem orientação — isso exige quebra de seção.",
      "especialista": "A visualização de marcas (exibir símbolos de formatação) permite localizar e remover quebras com segurança. Remover uma quebra de seção funde as configurações de página das seções adjacentes, então deve-se verificar a formatação resultante antes de excluir, evitando alterações indesejadas em cabeçalhos, rodapés, margens e orientação."
    },
    "comparacoes": [
      {
        "tema": "Quebra de página versus quebra de seção",
        "a": {
          "rotulo": "Quebra de página",
          "texto": "Força o conteúdo seguinte a começar na próxima página; não altera margens, orientação, colunas, numeração nem cabeçalho/rodapé — apenas avança o texto fisicamente."
        },
        "b": {
          "rotulo": "Quebra de seção",
          "texto": "Inicia uma nova seção com configurações de página próprias (orientação, margens, colunas, numeração, cabeçalho/rodapé); tipos incluem Próxima Página, Contínua, Pares e Ímpares."
        },
        "diferencaGabarito": "Quebra de página apenas avança o conteúdo para a próxima página sem mudar formatação; quebra de seção cria uma unidade administrativa com formatação de página própria, sendo necessária para mudar orientação, margens, colunas ou cabeçalho/rodapé de uma parte do documento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário usa quebra de página para tentar mudar as margens de uma parte do documento.",
        "porqueErrada": "Quebra de página apenas avança o conteúdo para a próxima página e não altera margens; mudança de margens exige quebra de seção, que cria uma unidade administrativa com formatação de página própria.",
        "versaoCorreta": "Incorreto: mudança de margens (assim como orientação e colunas) exige quebra de seção, nunca quebra de página."
      },
      {
        "afirmacaoEquivocada": "Quebra de seção Contínua inicia a nova seção sempre na página seguinte, igual à quebra de página.",
        "porqueErrada": "Quebra de seção Contínua inicia a nova seção na mesma página, alterando formatação sem virar a página; é a quebra Próxima Página que inicia a seção na página seguinte.",
        "versaoCorreta": "Errado. A quebra Contínua muda a formatação na mesma página (ex.: duas colunas em um bloco), enquanto a quebra de página e a quebra Próxima Página iniciam o conteúdo em página nova."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "quebra de página: avança o conteúdo para a próxima página sem alterar formatação",
        "quebra de seção: inicia uma seção com configurações de página próprias (orientação, margens, colunas, numeração, cabeçalho/rodapé)",
        "tipo Próxima Página: inicia a seção na página seguinte",
        "tipo Contínua: inicia a seção na mesma página, alterando apenas formatação"
      ],
      "regras": [
        "Quebra de página nunca muda margens, orientação ou colunas; apenas avança o conteúdo fisicamente.",
        "Para mudar orientação, margens, colunas ou cabeçalho/rodapé de uma parte, use quebra de seção.",
        "Quebra de seção Contínua altera formatação sem virar a página; Próxima Página inicia na página seguinte.",
        "Exibir marcas de formatação permite localizar e remover quebras com segurança."
      ],
      "comparacoes": [
        "Quebra de página apenas avança o texto para a próxima página; quebra de seção cria uma unidade com formatação de página própria."
      ],
      "fluxos": [
        "Definir o objetivo (apenas avançar página vs. mudar formatação local) → escolher quebra de página ou quebra de seção → se for seção, escolher o tipo (Próxima Página, Contínua, Pares, Ímpares) → aplicar a formatação desejada à nova seção."
      ],
      "excecoes": [
        "Usar quebra de página para mudar margens ou orientação é incorreto, pois esse recurso não altera configurações de página; só a quebra de seção o faz."
      ],
      "palavrasChave": [
        "quebra de página",
        "quebra de seção",
        "Próxima Página",
        "Contínua",
        "orientação",
        "margens",
        "cabeçalho",
        "rodapé"
      ],
      "checklist": [
        "O objetivo é apenas avançar o texto para a próxima página sem mudar formatação?",
        "Se sim, quebra de página é o recurso correto.",
        "O objetivo inclui mudar orientação, margens, colunas ou cabeçalho/rodapé localmente?",
        "Se sim, use quebra de seção (Próxima Página ou Contínua, conforme o caso)."
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Forçar o início de um novo capítulo na página seguinte, sem alterar margens, orientação nem cabeçalho.",
        "dados": "Documento com texto do capítulo anterior concluído; requisito: o próximo capítulo começa na página seguinte; formatação (retrato, margens, cabeçalho) permanece inalterada.",
        "conceitos": [
          "quebra de página: avança o conteúdo para a próxima página sem alterar formatação",
          "Layout > Quebras > Página (ou Ctrl+Enter): comando que insere a quebra de página"
        ],
        "estrategia": "Posicionar o cursor no final do capítulo anterior e inserir uma quebra de página, de modo que o conteúdo seguinte comece na página nova sem qualquer mudança de formatação.",
        "execucao": [
          "Colocar o cursor ao final do texto do capítulo anterior.",
          "Acessar Layout > Quebras > Página (ou usar o atalho Ctrl+Enter).",
          "Verificar que o conteúdo seguinte inicia na página seguinte.",
          "Confirmar que margens, orientação, colunas, numeração e cabeçalho/rodapé permaneceram inalterados."
        ],
        "resultado": "Layout > Quebras > Página (ou Ctrl+Enter) — o conteúdo seguinte começa na nova página sem qualquer mudança de formatação; se o capítulo também precisasse de cabeçalho/numeração próprios, aí sim entraria a quebra de seção.",
        "justificativa": "O resultado é o gabarito porque a quebra de página atende exatamente ao requisito de iniciar conteúdo na próxima página sem alterar formatação, enquanto a quebra de seção seria um recurso desnecessário para esse cenário simples.",
        "errosFrequentes": [
          "Usar quebra de seção quando bastaria a quebra de página, adicionando complexidade desnecessária.",
          "Pressionar Enter várias vezes para empurrar o conteúdo para a próxima página, o que quebra a paginação se o texto anterior mudar."
        ],
        "variacao": "Se o capítulo seguinte precisar de cabeçalho e numeração de página próprios, diferentes do capítulo anterior, o recurso adequado passa a ser quebra de seção (Próxima Página), não quebra de página."
      },
      {
        "tipo": "aplicacao",
        "problema": "Anexo com tabela larga precisa ficar em orientação paisagem no meio de um documento em retrato.",
        "dados": "Documento em orientação retrato; anexo com tabela larga que exige paisagem; requisito: apenas a página do anexo em paisagem, o restante do documento permanece em retrato, com numeração contínua.",
        "conceitos": [
          "quebra de seção Próxima Página: inicia a seção na página seguinte com formatação própria",
          "orientação de seção: configuração retrato ou paisagem aplicada à seção atual",
          "cabeçalho/rodapé por seção: podem ser vinculados ou independentes entre seções"
        ],
        "estrategia": "Inserir uma quebra de seção Próxima Página antes da página do anexo, aplicar paisagem apenas à seção do anexo, inserir outra quebra de seção Próxima Página após o anexo e voltar à orientação retrato na seção seguinte.",
        "execucao": [
          "Posicionar o cursor antes da página do anexo e inserir Layout > Quebras > Quebras de Seção > Próxima Página.",
          "Com o cursor na seção do anexo, ir em Layout > Orientação > Paisagem.",
          "Inserir o anexo com a tabela larga nessa seção em paisagem.",
          "Após o anexo, inserir outra quebra de seção Próxima Página e, na seção seguinte, voltar a Layout > Orientação > Retrato."
        ],
        "resultado": "Inserir quebra de seção Próxima Página antes da página do anexo > Layout > Orientação > Paisagem (aplicada à seção atual) > inserir outra quebra de seção Próxima Página após o anexo > voltar orientação Retrato. Resultado: apenas a página do anexo em paisagem; o resto do documento permanece em retrato, com numeração contínua (ajustável por seção).",
        "justificativa": "O resultado é o gabarito porque cada quebra de seção delimita uma unidade com formatação própria: a seção central fica em paisagem apenas para o anexo, e as seções adjacentes retornam ao retrato, preservando o resto do documento inalterado.",
        "errosFrequentes": [
          "Usar quebra de página para tentar mudar a orientação, o que não altera margens nem orientação.",
          "Alterar a orientação de todo o documento em vez de apenas da seção do anexo, afetando páginas que deveriam permanecer em retrato."
        ],
        "variacao": "Se o documento precisar de um bloco de duas colunas apenas no meio de uma página, voltando a uma coluna em seguida, o recurso correto é duas quebras de seção Contínua (antes e depois do bloco) com colunas aplicadas ao bloco, sem virar a página."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário usa quebra de página para tentar mudar as margens de uma parte do documento.",
        "dados": "Documento com margens padrão; usuário insere quebra de página antes de um trecho e tenta reduzir as margens apenas desse trecho; expectativa do usuário: a quebra de página isolaria a formatação de margens.",
        "conceitos": [
          "quebra de página: apenas avança o conteúdo, não altera configurações de página",
          "quebra de seção: cria unidade administrativa com margens, orientação e colunas próprias",
          "margens por seção: configuráveis apenas quando há divisão em seções"
        ],
        "estrategia": "Demonstrar que a quebra de página não isola formatação de margens e que somente a quebra de seção permite margens diferentes por parte do documento.",
        "execucao": [
          "Inserir uma quebra de página antes do trecho cujo usuário deseja margens diferentes.",
          "Tentar alterar as margens apenas desse treque e observar que a mudança afeta todo o documento, não só a parte após a quebra.",
          "Remover a quebra de página e inserir quebras de seção Próxima Página antes e depois do trecho.",
          "Aplicar as margens desejadas apenas à seção do trecho, confirmando que as seções adjacentes mantêm as margens originais."
        ],
        "resultado": "Incorreto: quebra de página apenas avança o conteúdo para a próxima página; mudança de margens (como orientação e colunas) exige quebra de seção, que cria uma unidade administrativa com formatação de página própria.",
        "justificativa": "O resultado é o gabarito porque a quebra de página não cria uma unidade administrativa com formatação própria; apenas a quebra de seção permite margens, orientação ou colunas diferentes em uma parte do documento.",
        "errosFrequentes": [
          "Acreditar que toda quebra de documento isola formatação, confundindo quebra de página com quebra de seção.",
          "Aplicar margens a todo o documento após inserir uma quebra de página, alterando páginas que deveriam manter as margens originais."
        ],
        "variacao": "Se o usuário precisar mudar o cabeçalho de uma parte do documento (por exemplo, remover o cabeçalho do primeiro capítulo), o recurso é quebra de seção com cabeçalho/rodapé desvinculado da seção anterior, não quebra de página."
      }
    ]
  }
};
