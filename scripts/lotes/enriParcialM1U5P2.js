const enriParcialM1U5P2 = {
  "modulo-1-unidade-5-topico-1-sub-3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Saber restaurar arquivos da lixeira do OneDrive é uma habilidade direta de recuperação de dados em cenários corporativos: a exclusão no cliente ou na web não apaga o item imediatamente, mas o move para uma área de retenção temporária governada por política da organização ou da conta. Dominar esse mecanismo permite ao candidato responder questões de concurso que apresentam perda acidental de arquivos compartilhados e perguntam qual camada restaura o conteúdo sem depender de backup externo, distinguindo a lixeira do histórico de versões e da exclusão permanente.",
      "preRequisitos": [
        "Noções básicas de ambiente de nuvem (OneDrive) e de cliente de sincronização.",
        "Diferença entre exclusão, lixeira e histórico de versões de arquivo.",
        "Conceito de retenção temporária de itens excluídos por política organizacional."
      ],
      "objetivosObservaveis": [
        "Localizar um arquivo excluído na lixeira do OneDrive pelo nome e pela data de exclusão.",
        "Restaurar o item para o local de origem e verificar o destino da restauração.",
        "Distinguir a recuperação pela lixeira da restauração de versão anterior no histórico.",
        "Identificar quando o prazo de retenção expirou e a exclusão se tornou permanente para o usuário."
      ],
      "competencias": [
        "Recuperação de dados em ambiente corporativo sem depender de backup externo imediato.",
        "Avaliação de camadas de retenção (lixeira, versões anteriores, política administrativa) antes de concluir que um arquivo foi perdido."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-2 (Arquivos locais versus somente online (Files On-Demand)) — camada adicional de recuperação quando a lixeira expira.",
        "modulo-1-unidade-5-topico-1-sub-4 (Conflitos de sincronização do cliente) — outro mecanismo de integridade do cliente OneDrive."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Os temas de recuperação de arquivos em nuvem são objeto de avaliação em itens de informática para concursos quando o enunciado descreve exclusão acidental em OneDrive e exige identificar a camada de retenção aplicável, sendo um ponto de presença permanente na interpretação do pacote de escritório corporativo. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "A exclusão de um arquivo no OneDrive, feita pelo cliente ou pela interface web, não remove o item definitivamente do serviço: o arquivo é movido para a lixeira associada à conta ou à organização, onde permanece enquanto o período de retenção configurado estiver vigente. Esse prazo varia conforme a política da organização ou do tipo de conta, devendo ser confirmado na documentação oficial do produto. A lixeira é, portanto, a primeira camada de recuperação a ser consultada antes de considerar o arquivo perdido.",
      "intermediario": "O processo de restauração envolve abrir a lixeira na interface web, localizar o item pelo nome e pela data de exclusão, selecioná-lo e escolher a opção restaurar, conferindo o caminho de destino exibido pelo serviço. A restauração devolve o item ao local de origem quando possível, mas o compartilhamento com outras pessoas pode ou não ser preservado automaticamente, exigindo verificação posterior. Quando o prazo de retenção expira, a exclusão se torna permanente para o usuário e a recuperação passa a depender de outras camadas, como o histórico de versões ou procedimentos administrativos da organização.",
      "avancado": "Em ambientes corporativos, o OneDrive e o SharePoint podem adotar políticas de retenção distintas da conta pessoal, de modo que o período exato de disponibilidade na lixeira é definido pela administração do tenant e não por uma regra única. A lixeira não é o único mecanismo de recuperação: versões anteriores do arquivo podem existir no histórico de versões, permitindo restaurar um estado anterior mesmo após a exclusão da lixeira, desde que o histórico esteja ativo. A exclusão definitiva ocorre somente após o término do prazo de retenção, conforme a política vigente, e a recuperação administrativa é uma via alternativa fora do alcance direto do usuário comum.",
      "especialista": "O administrador deve avaliar a camada de retenção aplicável antes de declarar perda definitiva de dados: lixeira do serviço (prazo configurado pela organização), histórico de versões (estados anteriores do arquivo) e recuperação administrativa (via alternativa para itens fora do prazo) operam com regras independentes. A restauração de versão não equivale à exclusão definitiva enquanto houver retenção ativa, e a decisão de manter ou descartar uma versão deve ser registrada para fins de auditoria. A recuperação bem-sucedida exige combinar essas camadas conforme o cenário e o prazo decorrido desde a exclusão."
    },
    "comparacoes": [
      {
        "tema": "Lixeira do serviço versus histórico de versões",
        "a": {
          "rotulo": "Lixeira do OneDrive",
          "texto": "Área de retenção temporária onde os arquivos excluídos permanecem pelo período configurado pela organização ou conta; permite restaurar o item para o local de origem enquanto o prazo estiver vigente."
        },
        "b": {
          "rotulo": "Histórico de versões",
          "texto": "Camada que registra estados anteriores de um mesmo arquivo ao longo do tempo; permite restaurar uma versão anterior mesmo que o item já tenha saído da lixeira, desde que o histórico esteja ativo."
        },
        "diferencaGabarito": "A lixeira recupera arquivos excluídos dentro do prazo de retenção, enquanto o histórico de versões recupera estados anteriores do arquivo independentemente da exclusão; são camadas complementares e não substitutas uma da outra."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A lixeira do OneDrive mantém os arquivos excluídos para sempre, de modo que qualquer item antigo pode ser recuperado sem consequência.",
        "porqueErrada": "A lixeira retém os itens apenas pelo período de retenção configurado pela organização ou conta; após o término desse prazo, a exclusão se torna permanente para o usuário e não há restauração direta pela lixeira.",
        "versaoCorreta": "Incorreto: o período de retenção varia conforme a configuração da organização ou da conta, e o que está fora desse intervalo só pode ser recuperado por outras camadas, quando existirem, como o histórico de versões ou a via administrativa."
      },
      {
        "afirmacaoEquivocada": "A exclusão de um arquivo no OneDrive apaga o item imediatamente do serviço, sem possibilidade de restauração posterior.",
        "porqueErrada": "A exclusão move o arquivo para a lixeira associada ao serviço, onde permanece pelo período de retenção vigente; a exclusão definitiva ocorre apenas após o término desse período, conforme a política aplicável.",
        "versaoCorreta": "Errado: a exclusão no OneDrive não é imediata — o item vai para a lixeira e pode ser restaurado enquanto o prazo de retenção da organização estiver ativo, tornando a recuperação a primeira camada a ser verificada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Lixeira do serviço: área de retenção temporária de itens excluídos, governada por período de retenção configurado pela organização ou conta.",
        "Período de retenção: prazo em que o item excluído pode ser restaurado antes de se tornar permanente para o usuário.",
        "Exclusão permanente: remoção definitiva do item após o término do prazo de retenção ou por ação administrativa.",
        "Restauração de versão: retorno a um estado anterior registrado no histórico de versões, distinto da recuperação pela lixeira.",
        "Recuperação administrativa: via alternativa de restauração fora do alcance direto do usuário comum, aplicável a itens fora do prazo de retenção."
      ],
      "regras": [
        "A exclusão no OneDrive move o arquivo para a lixeira, não o apaga imediatamente do serviço.",
        "O item permanece na lixeira pelo período de retenção configurado pela organização ou conta, devendo ser verificado na documentação oficial.",
        "A restauração pela lixeira devolve o item ao local de origem, mas o compartilhamento com outras pessoas pode ou não ser preservado automaticamente.",
        "O histórico de versões é uma camada adicional de recuperação que pode restaurar estados anteriores mesmo após a expiração da lixeira."
      ],
      "comparacoes": [
        "A lixeira recupera arquivos excluídos dentro do prazo de retenção; o histórico de versões recupera estados anteriores do arquivo independentemente da exclusão, sendo camadas complementares."
      ],
      "fluxos": [
        "Arquivo excluído → lixeira do serviço (prazo de retenção vigente) → restaurar para local de origem → verificar compartilhamento; se o prazo expirou → histórico de versões ou recuperação administrativa."
      ],
      "excecoes": [
        "Itens excluídos fora do período de retenção não podem ser restaurados pela lixeira e dependem de outras camadas, como versões anteriores ou procedimento administrativo da organização."
      ],
      "palavrasChave": [
        "lixeira",
        "retenção",
        "restauração",
        "OneDrive",
        "versão",
        "histórico",
        "exclusão permanente"
      ],
      "checklist": [
        "O arquivo está na lixeira do serviço?",
        "O prazo de retenção da organização ainda está vigente?",
        "O destino da restauração foi conferido após restaurar o item?",
        "O compartilhamento com a equipe foi restabelecido após a restauração?",
        "O histórico de versões foi avaliado como camada adicional quando a lixeira expirou?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Recuperar um contrato excluído por engano há dois dias, sabendo que o arquivo também existe em uma pasta compartilhada com a equipe.",
        "dados": "Arquivo excluído há dois dias por um colaborador, retenção da lixeira definida pela organização, pasta compartilhada com quatro pessoas e histórico de versões ativo.",
        "conceitos": [
          "lixeira do serviço: área de retenção de itens excluídos",
          "período de retenção: prazo em que o item pode ser restaurado",
          "restauração para local de origem: devolução do item ao caminho original"
        ],
        "estrategia": "Restaurar pela lixeira enquanto o prazo estiver vigente e verificar o destino da restauração, porque o item retorna ao local de origem e o compartilhamento pode ou não ser preservado automaticamente.",
        "execucao": [
          "Abrir a lixeira na interface web e localizar o arquivo pelo nome e pela data de exclusão.",
          "Selecionar o item e escolher restaurar, conferindo o caminho de destino exibido pelo serviço.",
          "Confirmar se o arquivo voltou para a pasta compartilhada e se os quatro participantes mantêm acesso.",
          "Se o prazo já tivesse expirado, avaliar o histórico de versões e a recuperação administrativa prevista na política da organização."
        ],
        "resultado": "Contrato restaurado na pasta de origem, com acesso da equipe restabelecido e o registro da exclusão e da restauração preservado no histórico de atividades.",
        "justificativa": "A lixeira é uma camada de retenção temporária: enquanto o prazo configurado pela organização estiver vigente, a restauração devolve o item sem depender de backup externo. Passado o prazo, a exclusão se torna permanente e a recuperação depende de outras camadas, como versões anteriores ou cópia administrativa.",
        "errosFrequentes": [
          "Concluir que a exclusão é definitiva sem verificar a lixeira primeiro.",
          "Restaurar sem conferir o destino e duplicar o item em outra pasta, gerando cópias divergentes.",
          "Presumir prazo universal de retenção, que na verdade é definido pela configuração da organização ou da conta."
        ],
        "variacao": "O mesmo contrato é excluído da lixeira por um administrador. Explique por que a recuperação muda de natureza e qual camada passa a ser necessária para restaurar o item."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa recuperar a versão de ontem de um arquivo que foi sobrescrito com conteúdo errado, sem perder a versão atual que também contém trabalho válido.",
        "dados": "Arquivo com versão atual corrompida em parte, versão de ontem íntegra no histórico, histórico de versões ativo e necessidade de preservar dois trechos escritos hoje.",
        "conceitos": [
          "versão anterior: estado registrado do arquivo em um momento passado no histórico",
          "restauração de versão: retorno a um estado anterior sem apagar o histórico existente",
          "consolidação: combinação manual de trechos válidos de versões diferentes"
        ],
        "estrategia": "Recuperar a versão íntegra de ontem e reintroduzir os trechos válidos escritos hoje, porque restaurar uma versão não elimina o histórico e permite comparação posterior entre os estados.",
        "execucao": [
          "Abrir o histórico de versões e comparar a versão de ontem com a versão atual corrompida.",
          "Copiar para um arquivo auxiliar os dois trechos válidos escritos hoje, preservando-os antes de qualquer restauração.",
          "Restaurar a versão de ontem, observando que o serviço mantém a versão atual no histórico como estado anterior.",
          "Colar os trechos preservados no arquivo restaurado e salvar, registrando a operação para controle de mudanças."
        ],
        "resultado": "Arquivo com a base íntegra de ontem e os dois trechos válidos de hoje, com todas as versões anteriores ainda disponíveis no histórico.",
        "justificativa": "A restauração cria um novo estado a partir de um estado antigo e preserva o histórico, o que permite voltar atrás se a consolidação falhar. Fazer a cópia dos trechos antes da restauração evita depender de memória ou de nova navegação no histórico para recuperar o conteúdo válido.",
        "errosFrequentes": [
          "Sobrescrever a versão atual antes de copiar os trechos válidos, perdendo o conteúdo escrito hoje.",
          "Excluir o arquivo para recomeçar do zero, descartando o histórico de versões disponível.",
          "Concluir que a restauração apaga as versões posteriores do histórico, quando na verdade elas são preservadas."
        ],
        "variacao": "Duas pessoas editaram o arquivo no mesmo dia. Explique como o histórico ajuda a identificar a origem de cada trecho e qual cuidado evita atribuir a autoria errada ao consolidar o conteúdo."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a lixeira do serviço mantém os arquivos para sempre e que, por isso, pode excluir itens antigos sem qualquer consequência.",
        "dados": "Conta com arquivos excluídos em datas distintas, política de retenção configurada pela organização e um item excluído há mais tempo que o prazo vigente.",
        "conceitos": [
          "prazo de retenção: limite temporal da recuperação pela lixeira, definido pela organização ou conta",
          "política de retenção: configuração que define o prazo aplicável à recuperação de itens excluídos",
          "recuperação administrativa: via alternativa fora do alcance direto do usuário comum, para itens fora do prazo"
        ],
        "estrategia": "Comparar a recuperação de itens dentro e fora do prazo para demonstrar que a disponibilidade na lixeira é limitada pela configuração, e não permanente, evitando a leitura ingênua de que a exclusão nunca tem consequência.",
        "execucao": [
          "Verificar o prazo de retenção vigente na política de retenção da organização ou da conta.",
          "Tentar restaurar um item excluído dentro do prazo e confirmar o sucesso da recuperação pela lixeira.",
          "Tentar restaurar o item excluído antes do início do prazo e observar a indisponibilidade na lixeira.",
          "Concluir qual via resta para o caso antigo e registrar a limitação imposta pelo prazo de retenção configurado."
        ],
        "resultado": "A afirmação é incorreta: a lixeira retém itens pelo prazo configurado, e o que está fora desse intervalo só pode ser recuperado por outras camadas, quando existirem, como versões anteriores ou recuperação administrativa.",
        "justificativa": "A lixeira é um mecanismo de retenção temporária, dimensionado pela política da organização. Fora do prazo, o item é eliminado de forma permanente para o usuário, e a existência de backup independente passa a ser o fator que determina a possibilidade de recuperação, desmentindo a ideia de que a lixeira armazena arquivos indefinidamente.",
        "errosFrequentes": [
          "Tratar a lixeira como arquivo permanente, ignorando o prazo de retenção configurado pela organização.",
          "Excluir em massa sem conferir o prazo de retenção vigente, assumindo que tudo pode ser restaurado depois.",
          "Supor que a recuperação administrativa está sempre disponível para qualquer plano, quando na verdade depende da política do tenant."
        ],
        "variacao": "A organização amplia o prazo de retenção da lixeira. Explique o efeito sobre o espaço disponível e sobre a proteção contra exclusões acidentais, considerando o maior tempo de recuperação."
      }
    ]
  },
  "modulo-1-unidade-5-topico-1-sub-4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Resolver conflitos de sincronização do cliente OneDrive é essencial para manter a integridade de documentos em ambientes colaborativos: quando duas cópias editadas divergentemente precisam sincronizar, o cliente sinaliza o conflito no painel de sincronização e preserva as versões separadas até a resolução manual. Dominar esse fluxo permite ao candidato responder questões de concurso que apresentam arquivos em conflito e perguntam qual procedimento restaura a consistência sem perda de trabalho, distinguindo a resolução manual fora da coautoria da regra de última alteração aplicável em coautoria.",
      "preRequisitos": [
        "Noções básicas de cliente de sincronização do OneDrive e de painel de sincronização (tray).",
        "Diferença entre edição simultânea com coautoria e edição offline em dispositivos distintos.",
        "Conceito de cópia de conflito criada pelo cliente para preservar versões divergentes."
      ],
      "objetivosObservaveis": [
        "Identificar o arquivo marcado com conflito no painel de sincronização do cliente OneDrive.",
        "Abrir a cópia de conflito, comparar os trechos com a versão principal e consolidar o conteúdo desejado.",
        "Decidir quando manter a versão principal, quando manter a cópia de conflito e quando remover a cópia.",
        "Registrar a versão mantida para fins de auditoria após a resolução do conflito."
      ],
      "competencias": [
        "Resolução de conflitos de versão sem perda de trabalho em ambiente de colaboração.",
        "Julgamento técnico para escolher a versão correta a ser mantida após comparação das cópias divergentes."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-3 (Lixeira e restauração no OneDrive) — outro mecanismo de integridade de dados no OneDrive.",
        "modulo-1-unidade-5-topico-1-sub-2 (Arquivos locais versus somente online (Files On-Demand)) — camada que auxilia na comparação de estados anteriores durante a resolução."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Conflitos de sincronização são objeto de avaliação em questões de informática para concursos quando o enunciado descreve edição do mesmo arquivo em dispositivos diferentes e exige identificar o procedimento de resolução que preserva a integridade do documento, sendo ponto de presença permanente na interpretação da sincronização de nuvem. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Quando duas cópias de um mesmo arquivo são editadas de forma divergente, por exemplo em dispositivos diferentes, o cliente de sincronização do OneDrive pode gerar um conflito, sinalizado no painel de sincronização (tray). O cliente cria uma cópia de arquivo em conflito, marcada como tal, e mantém as versões separadas até que o usuário faça a resolução. A resolução pode ocorrer abrindo a cópia de conflito, comparando as versões e mantendo a desejada, ou removendo a cópia de conflito. Em ambientes com coautoria, a resolução preferida é a última alteração, conforme a regra do OneDrive.",
      "intermediario": "A resolução do conflito exige comparar as versões antes de decidir, porque o cliente preserva ambas as cópias e não substitui silenciosamente uma pela outra. O usuário deve abrir a cópia de conflito criada pelo cliente, comparar os trechos com a versão principal, consolidar o conteúdo desejado em um único arquivo e salvar, eliminando então a cópia de conflito. Ao final, deve confirmar no painel de sincronização que o item voltou ao estado sincronizado. A etapa de resolução deve registrar a versão mantida para fins de auditoria, evitando incerteza posterior sobre qual conteúdo prevaleceu.",
      "avancado": "Em ambientes com coautoria, a combinação automática de edições em tempo real é a regra preferida, mas quando uma das edições ocorreu offline não há base comum para combinar, e o cliente sinaliza o conflito preservando as duas versões. A identificação do conflito ocorre pelo painel de sincronização antes da resolução, e a comparação entre versões deve considerar a origem (dispositivo) e a sequência temporal das edições. A prevenção de conflitos passa por evitar edição simultânea sem coautoria e usar o histórico de versões como referência, mas não substitui a conferência quando houve edição offline em trechos compartilhados.",
      "especialista": "O administrador ou usuário avançado deve avaliar a origem e a sequência temporal de cada versão antes de descartar qualquer cópia, porque o descarte sem comparação elimina trabalho sem aviso ao usuário. A regra de última alteração se aplica apenas em contextos de coautoria; fora dela, o cliente preserva as versões separadas e exige resolução manual. A etapa de resolução deve registrar a versão mantida para fins de auditoria, e a política de prevenção deve combinar coautoria, histórico de versões e orientação aos usuários sobre edição offline apenas em trechos exclusivos."
    },
    "comparacoes": [
      {
        "tema": "Resolução manual fora de coautoria versus regra de última alteração na coautoria",
        "a": {
          "rotulo": "Fora de coautoria (resolução manual)",
          "texto": "O cliente sinaliza o conflito no painel de sincronização, cria uma cópia de conflito preservando as versões separadas, e o usuário deve comparar e consolidar manualmente antes de remover a cópia de conflito."
        },
        "b": {
          "rotulo": "Coautoria (última alteração)",
          "texto": "O serviço combina as edições em tempo real e adota a última alteração como versão prevalente, reduzindo a necessidade de resolução manual quando todos editam online simultaneamente."
        },
        "diferencaGabarito": "Fora de coautoria, o cliente preserva as duas versões e exige comparação e consolidação manuais; na coautoria, a regra de última alteração combina automaticamente, mas não substitui a conferência quando houve edição offline sem base comum."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O conflito de sincronização se resolve sozinho, com a versão mais recente prevalecendo automaticamente, sem que seja necessário comparar as cópias.",
        "porqueErrada": "Fora da coautoria, o cliente não combina automaticamente as versões: ele sinaliza o conflito, preserva as duas cópias separadas e aguarda a resolução manual; descartar sem comparação elimina trabalho sem aviso.",
        "versaoCorreta": "Incorreto: fora da coautoria, o cliente sinaliza e preserva as duas versões, e o descarte sem comparação elimina trabalho sem aviso; a combinação automática depende de coautoria com edição simultânea online."
      },
      {
        "afirmacaoEquivocada": "O painel de sincronização apenas avisa que houve erro de rede, sem indicar arquivos específicos em conflito ou permitir resolver o problema.",
        "porqueErrada": "O painel de sincronização identifica exatamente os arquivos marcados com conflito, permitindo localizar a cópia de conflito criada pelo cliente e iniciar a comparação e consolidação das versões.",
        "versaoCorreta": "Errado: o painel de sincronização permite identificar arquivos em conflito e é o ponto de partida para abrir a cópia de conflito, comparar versões e consolidar o conteúdo desejado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Conflito de sincronização: duas alterações divergentes sobre a mesma base que o cliente não consegue combinar automaticamente.",
        "Cópia de conflito: arquivo separado criado pelo cliente com a versão divergente, preservada até a resolução manual.",
        "Coautoria: edição simultânea com combinação automática em serviço que suporta o recurso, adotando a regra de última alteração.",
        "Painel de sincronização: interface do cliente que sinaliza arquivos em conflito antes da resolução.",
        "Perda silenciosa: descarte de trabalho sem aviso ao usuário, ocorrendo quando a cópia de conflito é removida sem comparação."
      ],
      "regras": [
        "O cliente de sincronização sinaliza o conflito no painel e cria uma cópia de conflito marcada, mantendo as versões separadas até a resolução.",
        "A resolução pode ocorrer abrindo a cópia de conflito, comparando as versões e mantendo a desejada, ou removendo a cópia de conflito.",
        "Em ambientes com coautoria, a resolução preferida é a última alteração, conforme a regra do OneDrive.",
        "A etapa de resolução deve registrar a versão mantida para fins de auditoria, evitando incerteza posterior."
      ],
      "comparacoes": [
        "Fora de coautoria o cliente preserva as duas versões e exige resolução manual; na coautoria a regra de última alteração combina automaticamente, mas exige conferência quando houve edição offline."
      ],
      "fluxos": [
        "Edições divergentes → cliente sinaliza conflito no painel → cópia de conflito criada → abrir e comparar versões → consolidar conteúdo desejado → remover cópia de conflito → confirmar estado sincronizado no painel → registrar versão mantida para auditoria."
      ],
      "excecoes": [
        "Quando uma das edições ocorreu offline, não há base comum para combinação automática, e a única conduta segura é comparar e consolidar manualmente, sem presumir prevalência de qualquer versão."
      ],
      "palavrasChave": [
        "conflito",
        "sincronização",
        "copia de conflito",
        "coautoria",
        "painel de sincronização",
        "última alteração",
        "auditoria"
      ],
      "checklist": [
        "O arquivo está marcado com conflito no painel de sincronização?",
        "A cópia de conflito criada pelo cliente foi localizada?",
        "As duas versões foram comparadas considerando origem e sequência temporal?",
        "O conteúdo desejado foi consolidado em um único arquivo e salvo?",
        "A versão mantida foi registrada para fins de auditoria após a resolução?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Resolver um conflito de sincronização gerado quando o mesmo arquivo foi editado em um notebook offline e em um computador do escritório.",
        "dados": "Arquivo de texto editado em duas máquinas, notebook sem conexão por seis horas, painel de sincronização indicando conflito e trechos diferentes em cada versão.",
        "conceitos": [
          "conflito de sincronização: duas alterações divergentes sobre a mesma base",
          "cópia de conflito: arquivo separado criado pelo cliente com a versão divergente",
          "coautoria: edição simultânea com combinação automática em serviço que a suporta"
        ],
        "estrategia": "Comparar as duas versões antes de decidir, porque o cliente preserva ambas, e consolidar o conteúdo em um único arquivo registrando a decisão para auditoria.",
        "execucao": [
          "Abrir o painel de sincronização e identificar o arquivo marcado com conflito.",
          "Localizar a cópia de conflito criada pelo cliente e comparar os trechos com a versão principal.",
          "Consolidar o conteúdo desejado em um arquivo único, salvando-o, e eliminar a cópia de conflito.",
          "Confirmar no painel que o item voltou ao estado sincronizado e registrar a versão mantida para auditoria."
        ],
        "resultado": "Versão consolidada única, sem cópia de conflito pendente, com os trechos escolhidos preservados e o histórico de versões registrando as duas edições.",
        "justificativa": "O cliente não decide conteúdo: ele preserva as duas versões e sinaliza o conflito, porque sobrescrever silenciosamente perderia trabalho. A resolução exige comparação e consolidação; a coautoria evita a maior parte desses casos, mas não substitui a conferência quando houve edição offline.",
        "errosFrequentes": [
          "Apagar a cópia de conflito sem comparar, perdendo a edição feita offline sem aviso.",
          "Sobrescrever a versão principal supondo que ela é sempre a mais recente, descartando trechos válidos.",
          "Editar offline por rotina um arquivo de trabalho coletivo, aumentando a chance de conflito na volta."
        ],
        "variacao": "O conflito ocorre em uma planilha com fórmulas. Explique o que deve ser comparado além do texto e por que a consolidação manual é mais arriscada nesse tipo de arquivo."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa impedir que a equipe volte a gerar conflitos em um relatório editado por três pessoas ao longo do dia, sem proibir o trabalho offline.",
        "dados": "Relatório editado por três pessoas, duas em rede estável e uma em campo com conexão intermitente, histórico de versões ativo e prazo diário de fechamento.",
        "conceitos": [
          "coautoria em tempo real: edição simultânea com atualização contínua no serviço",
          "edição offline: alteração feita sem conexão, sincronizada depois que a conexão retorna",
          "janela de sincronização: intervalo entre a edição e o envio ao serviço"
        ],
        "estrategia": "Separar os trechos do relatório por responsável e reservar a edição offline para partes exclusivas, reduzindo a chance de duas alterações incidirem sobre o mesmo conteúdo e evitando conflitos na sincronização.",
        "execucao": [
          "Verificar que o arquivo está em serviço que suporta coautoria e que o histórico de versões está ativo.",
          "Dividir o relatório em seções com responsável definido, evitando edição concorrente do mesmo trecho por mais de uma pessoa.",
          "Orientar a pessoa em campo a editar apenas a sua seção quando estiver offline e a sincronizar antes de qualquer troca de seção com os demais editores.",
          "Acompanhar o painel de sincronização no fim do dia e conferir se há conflito pendente antes do fechamento do relatório."
        ],
        "resultado": "Relatório com seções atribuídas, edições offline restritas a trechos exclusivos e nenhum conflito pendente ao final do dia.",
        "justificativa": "Conflito surge quando duas alterações divergentes incidem sobre a mesma base sem combinação automática. Restringir a edição offline a trechos exclusivos reduz a interseção entre alterações, e a coautoria cobre o restante; a checagem no fim do dia garante que nenhuma pendência chegue ao fechamento, preservando a integridade do documento.",
        "errosFrequentes": [
          "Manter todos editando o mesmo trecho e contar com a sincronização para resolver, gerando conflitos recorrentes.",
          "Deixar a sincronização para o fim do prazo, quando não há tempo hábil para consolidar versões divergentes.",
          "Desativar a coautoria para simplificar, aumentando a chance de conflito ao remover a combinação automática de edições online."
        ],
        "variacao": "A pessoa em campo passará cinco dias sem conexão. Explique como organizar o trabalho para evitar conflito na volta e o que deve ser combinado com os demais editores sobre a sincronização de sua seção."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que o conflito de sincronização se resolve sozinho, com a versão mais recente prevalecendo, e que não é necessário comparar as cópias.",
        "dados": "Duas versões do mesmo arquivo com trechos distintos, uma delas editada offline, painel indicando conflito e nenhuma verificação de conteúdo feita antes do descarte.",
        "conceitos": [
          "resolução automática: regra aplicada apenas em contextos específicos, como coautoria com edição simultânea online",
          "cópia divergente: versão preservada pelo cliente para comparação antes da resolução manual",
          "perda silenciosa: descarte de trabalho sem aviso ao usuário, ao remover cópia sem comparação"
        ],
        "estrategia": "Verificar o que o cliente faz na prática com as duas versões e o que se perde quando a comparação é dispensada, demonstrando que a resolução automática não se aplica fora da coautoria.",
        "execucao": [
          "Observar o estado do arquivo no painel de sincronização após a reconexão do dispositivo offline.",
          "Constatar a existência da cópia de conflito, o que indica que não houve combinação automática das versões.",
          "Simular o descarte da cópia e verificar a perda do trecho editado offline, confirmando a perda silenciosa.",
          "Repetir com comparação e consolidação, confirmando a preservação dos dois trechos e a ausência de perda de conteúdo."
        ],
        "resultado": "A afirmação é incorreta: fora da coautoria, o cliente sinaliza e preserva as duas versões, e o descarte sem comparação elimina trabalho sem aviso, exigindo resolução manual antes de remover qualquer cópia.",
        "justificativa": "A combinação automática depende de um serviço que acompanha as edições em tempo real. Quando uma das edições ocorreu offline, não há base comum para combinar, e a única conduta segura é comparar e consolidar; presumir prevalência automática descarta conteúdo de forma silenciosa, sem aviso ao usuário sobre qual trecho foi perdido.",
        "errosFrequentes": [
          "Descartar a cópia de conflito por supor que a principal é a mais recente, perdendo o trecho editado offline.",
          "Desativar o aviso de conflito para reduzir interrupções, removendo o mecanismo de detecção do problema.",
          "Atribuir a perda de trecho a defeito do serviço, quando na verdade decorreu do descarte sem comparação das versões."
        ],
        "variacao": "O arquivo em conflito é uma apresentação com imagens e notas do orador. Explique o que precisa ser comparado além do texto e por que a consolidação exige conferência visual dos elementos não textuais."
      }
    ]
  }
};
