const enriParcialM1U5P1 = {
  "modulo-1-unidade-5-topico-1-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "OneDrive integra armazenamento em nuvem ao Microsoft 365 como ponto de colaboração. A sincronização replica alterações entre cópia local e nuvem. Confundir sincronização com backup imutável expõe os dados à perda por ransomware.",
      "preRequisitos": [
        "Noções de armazenamento local versus nuvem"
      ],
      "objetivosObservaveis": [
        "Explicar a sincronização bidirecional entre cópia local e nuvem",
        "Diferenciar histórico de versões de backup imutável"
      ],
      "competencias": [
        "Gestão de arquivos em nuvem com sincronização seletiva",
        "Controle de acesso e permissões de colaboradores"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-2 (Arquivos locais versus somente online (Files On-Demand)) — estados de arquivo relacionados à sincronização"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O OneDrive integra o conteúdo programático de informática sobre computação em nuvem e armazenamento, e os itens avaliam a sincronização entre dispositivos, o compartilhamento por link com permissões e o histórico de versões. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "OneDrive é o serviço de armazenamento em nuvem integrado ao Microsoft 365. A sincronização replica alterações entre cópia local e nuvem, deixando o arquivo acessível de vários dispositivos.",
      "intermediario": "O compartilhamento se faz por link com permissões definidas: visualizar, editar, revisar ou comentar. O link pode ter expiração e bloqueio de download. O compartilhamento interno ocorre entre usuários da mesma organização.",
      "avancado": "O histórico de versões guarda estados anteriores dentro de uma janela de retenção definida pelo plano. Um item fora dessa janela exige outra camada de recuperação. A restauração de versão cria uma cópia restaurada sem excluir a versão atual.",
      "especialista": "OneDrive não é backup imutável: ransomware ou exclusão em massa propagam alterações maliciosas para a nuvem e para todos os dispositivos vinculados. A boa prática é manter backup separado, com cópia offline e cópia imutável, definindo a retenção conforme a política do plano."
    },
    "comparacoes": [
      {
        "tema": "Sincronização versus backup imutável no OneDrive",
        "a": {
          "rotulo": "Sincronização (OneDrive Sync)",
          "texto": "Replica o estado atual dos arquivos entre cópia local e nuvem; alterações, exclusões ou ransomware se espalham para todas as réplicas."
        },
        "b": {
          "rotulo": "Backup imutável separado",
          "texto": "Mantém cópia independente do ambiente de produção, com retenção própria, sem propagar alterações indevidas para a cópia de segurança."
        },
        "diferencaGabarito": "Sincronização preserva consistência entre dispositivos, mas não protege contra perda do estado atual; backup preserva estado anterior independente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o OneDrive mantém histórico de versões, qualquer arquivo excluído ou alterado pode ser recuperado integralmente a qualquer momento.",
        "porqueErrada": "A recuperação depende da janela de retenção configurada pelo plano ou serviço; itens excluídos ou alterados fora desse prazo deixam de estar disponíveis pelo histórico.",
        "versaoCorreta": "Incorreto: o histórico de versões recupera apenas estados dentro do período de retenção; fora dele, só cópia administrativa ou backup independente recupera o arquivo."
      },
      {
        "afirmacaoEquivocada": "OneDrive é um backup completo e protege automaticamente contra ransomware.",
        "porqueErrada": "OneDrive sincroniza; alterações locais, inclusive as causadas por código malicioso, propagam para a nuvem e para todos os dispositivos vinculados.",
        "versaoCorreta": "Incorreto: OneDrive sincroniza e não é backup imutável; a proteção contra ransomware exige backup separado e offsite."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Sincronização bidirecional replica alterações entre cópia local e nuvem",
        "Coautoria permite edição simultânea por vários usuários com indicação de presença",
        "Histórico de versões registra estados anteriores de um mesmo arquivo"
      ],
      "regras": [
        "A restauração de versão cria uma cópia restaurada sem excluir a versão atual",
        "Compartilhamento externo requer cuidado com a privacidade de dados pessoais"
      ],
      "comparacoes": [
        "Sincronização mantém consistência entre dispositivos; backup preserva estado anterior independente"
      ],
      "fluxos": [
        "Alteração local sobe para a nuvem e desce para os outros dispositivos sincronizados"
      ],
      "excecoes": [
        "Itens excluídos fora da janela de retenção não são recuperáveis pelo histórico de versões"
      ],
      "palavrasChave": [
        "OneDrive",
        "sincronização",
        "coautoria",
        "versões"
      ],
      "checklist": [
        "Distinguir sincronização de backup imutável",
        "Definir permissões por pessoa com menor privilégio necessário",
        "Verificar janela de retenção do histórico de versões",
        "Manter cópia de segurança fora do ambiente sincronizado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Explicar a um colega por que uma planilha compartilhada em nuvem não é backup do setor.",
        "dados": "Pasta de 4 GB com planilha orçamentária sincronizada em três notebooks, histórico ativo e nenhuma cópia fora do serviço.",
        "conceitos": [
          "Sincronização: replicação bidirecional entre cópia local e nuvem",
          "Histórico de versões: registro de estados anteriores do mesmo arquivo"
        ],
        "estrategia": "Distinguir replicação de proteção: a sincronização copia o estado atual, inclusive alterações indevidas, enquanto o backup preserva estado anterior separado da origem.",
        "execucao": [
          "Descrever o que a sincronização faz: alteração local sobe e desce para as outras estações.",
          "Verificar o alcance do histórico de versões: recupera estados do mesmo arquivo dentro do período retido.",
          "Concluir que, sem cópia separada, dano nas réplicas não é recuperável pelo serviço."
        ],
        "resultado": "A planilha continua colaborativa e sincronizada, e o setor passa a manter uma cópia independente fora do ambiente sincronizado.",
        "justificativa": "Sincronização e backup resolvem problemas diferentes: a primeira mantém consistência entre dispositivos, o segundo permite voltar a um estado anterior comprometido. Ela não substitui uma cópia independente.",
        "errosFrequentes": [
          "Chamar de backup qualquer arquivo armazenado na nuvem.",
          "Confiar apenas no histórico de versões, cuja retenção é limitada pela política do serviço."
        ],
        "variacao": "O setor perde acesso à conta de um colaborador desligado e precisa recuperar os arquivos dele. Indique quais recursos podem ser acionados."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa dar acesso de edição a dois colegas e de leitura a uma equipe inteira, sem que o link de leitura permita alterações.",
        "dados": "Documento em pasta compartilhada, dois colegas que devem editar, doze que devem apenas ler, compartilhamento externo proibido.",
        "conceitos": [
          "Link de compartilhamento: endereço que concede acesso conforme a permissão associada",
          "Permissão por pessoa: autorização concedida a um usuário específico"
        ],
        "estrategia": "Separar quem edita de quem lê com permissões por pessoa para a edição e link de leitura restrito à organização.",
        "execucao": [
          "Conceder permissão de edição aos dois colegas, identificando-os por conta.",
          "Criar um link de leitura restrito à organização, impedindo acesso externo.",
          "Enviar o link de leitura à equipe e conferir se a edição está bloqueada."
        ],
        "resultado": "Dois usuários com edição e doze com leitura restrita à organização; o link não permite alteração nem acesso a pessoas de fora.",
        "justificativa": "A permissão efetiva de cada pessoa é a mais ampla entre as concessões que a alcançam. Um link de leitura enviado a um grupo não impede que alguém desse grupo já tenha edição por concessão anterior.",
        "errosFrequentes": [
          "Compartilhar por link de edição e pedir que a equipe não altere nada.",
          "Deixar permissões antigas ativas e ampliar o acesso sem perceber."
        ],
        "variacao": "Um dos dois colegas sai de férias e outro assume a edição por trinta dias. Descreva como ajustar as permissões."
      },
      {
        "tipo": "erro",
        "problema": "Um colaborador afirma que, como o serviço mantém histórico de versões, qualquer arquivo excluído ou alterado pode ser recuperado a qualquer momento.",
        "dados": "Pasta com 300 arquivos, exclusão de 40 arquivos há cinco meses, retenção definida pela política e histórico consultado nos últimos trinta dias.",
        "conceitos": [
          "Janela de retenção: período durante o qual o estado anterior permanece recuperável",
          "Exclusão permanente: remoção após o prazo ou por ação administrativa"
        ],
        "estrategia": "Testar a recuperação nos limites do prazo, comparando exclusão recente com exclusão antiga, para mostrar que o histórico é temporal e não permanente.",
        "execucao": [
          "Tentar recuperar um arquivo excluído dois dias antes e confirmar o sucesso pelo histórico.",
          "Tentar recuperar um dos quarenta arquivos excluídos há cinco meses e observar a indisponibilidade.",
          "Identificar camadas restantes para o caso antigo, conforme a política da organização."
        ],
        "resultado": "A afirmação é incorreta: a recuperação funciona dentro da janela de retenção configurada; itens fora dela exigem outra camada, como cópia administrativa ou backup independente.",
        "justificativa": "O histórico de versões e a lixeira são mecanismos de retenção temporária, cujo prazo é definido pelo serviço. Fora desse intervalo, o item deixa de ser recuperável.",
        "errosFrequentes": [
          "Presumir retenção ilimitada por o recurso existir.",
          "Descobrir o limite do prazo apenas no momento da perda."
        ],
        "variacao": "A organização reduz o prazo de retenção por política interna. Explique o efeito prático e qual medida compensa a redução."
      }
    ]
  },
  "modulo-1-unidade-5-topico-1-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Files On-Demand resolve o conflito entre bibliotecas grandes na nuvem e disco local limitado. Entender os estados de arquivo — sincronizado, somente online e não sincronizado — evita que o usuário esgote o armazenamento do dispositivo ou fique sem acesso sem conexão.",
      "preRequisitos": [
        "Noções de armazenamento local versus nuvem",
        "Cliente OneDrive instalado e configurado"
      ],
      "objetivosObservaveis": [
        "Diferenciar estados de arquivo: sincronizado, somente online e não sincronizado",
        "Configurar pastas para permanecer locais ou ficar somente online",
        "Interpretar ícones de estado de sincronização no painel do cliente"
      ],
      "competencias": [
        "Gerenciamento de espaço em disco com arquivos sob demanda",
        "Configuração de políticas de armazenamento local no OneDrive",
        "Interpretação de estados de sincronização e solução de conflitos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-1 (OneDrive: sincronização, coautoria, histórico de versões, compartilhamento e permissões) — sincronização subjacente aos estados de arquivo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Files On-Demand integra o conteúdo programático de informática sobre armazenamento em nuvem e gerenciamento de dispositivos, e os itens avaliam os estados de arquivo — sincronizado, somente online e não sincronizado —, que determinam o uso do disco local. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "No OneDrive, os arquivos podem estar em três estados: sincronizado (cópia local completa e atualizada, acessível offline), somente online (arquivo na nuvem, acessível sob demanda sem cópia local, via Files On-Demand) e não sincronizado (arquivo que não está na nuvem).",
      "intermediario": "A configuração de pastas locais versus online se faz em OneDrive > Configurações > Conta > Escolher pastas. Políticas organizacionais podem restringir a disponibilidade de pastas. Arquivos somente online exigem conexão para abrir; arquivos sincronizados ficam disponíveis offline.",
      "avancado": "Abrir um arquivo somente online dispara a obtenção automática do conteúdo, e a edição gera cópia local sincronizada, sem download manual. Em viagem sem internet, arquivos somente online ficam indisponíveis a menos que tenham sido marcados para permanecer no dispositivo.",
      "especialista": "Em escala organizacional, o administrador define políticas de sincronização, por exemplo permitir somente online, e restringe a disponibilidade de pastas. Quando dados pessoais não podem permanecer em disco local sob a privacidade de dados, a escolha das pastas muda."
    },
    "comparacoes": [
      {
        "tema": "Arquivo sincronizado versus arquivo somente online (Files On-Demand)",
        "a": {
          "rotulo": "Arquivo sincronizado",
          "texto": "Cópia local completa e atualizada, acessível offline, ocupa espaço em disco e mantém replicação bidirecional com a nuvem."
        },
        "b": {
          "rotulo": "Arquivo somente online",
          "texto": "Marcador local sem conteúdo armazenado; o conteúdo fica na nuvem e é baixado sob demanda na abertura, liberando espaço em disco."
        },
        "diferencaGabarito": "Sincronizado prioriza disponibilidade offline e consome disco; somente online prioriza economia de disco e exige rede para acessar o conteúdo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um arquivo marcado como somente online precisa ser baixado manualmente antes de ser aberto e editado, e serve apenas para arquivamento.",
        "porqueErrada": "A abertura do arquivo somente online dispara a obtenção automática do conteúdo, e a edição gera cópia local sincronizada sem qualquer download manual, atendendo também ao trabalho corrente.",
        "versaoCorreta": "Incorreto: com Files On-Demand o arquivo é acessível sob demanda; a abertura obtém o conteúdo automaticamente e a edição cria cópia sincronizada."
      },
      {
        "afirmacaoEquivocada": "O estado de sincronização é exibido apenas no aplicativo de arquivos local.",
        "porqueErrada": "O estado de sincronização, como atualização em andamento, erro ou conflito, é exibido no painel do cliente de sincronização, não apenas no aplicativo de arquivos local.",
        "versaoCorreta": "Incorreto: o estado de sincronização aparece no painel do cliente de sincronização, que é onde o usuário acompanha atualizações, erros e conflitos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Arquivo sincronizado: cópia local completa e atualizada",
        "Arquivo somente online: marcador local sem conteúdo, acesso sob demanda",
        "Files On-Demand: conteúdo na nuvem, baixado quando aberto, sem cópia local integral"
      ],
      "regras": [
        "Abrir arquivo somente online obtém o conteúdo automaticamente",
        "Edição de arquivo somente online gera cópia local sincronizada"
      ],
      "comparacoes": [
        "Sincronizado consome disco e funciona offline; somente online economiza disco e exige rede na abertura"
      ],
      "fluxos": [
        "Usuário marca pasta para manter sempre no dispositivo; cópia local é mantida"
      ],
      "excecoes": [
        "Arquivo somente online fica indisponível offline sem preparo prévio de permanência local"
      ],
      "palavrasChave": [
        "Files On-Demand",
        "somente online",
        "sincronizado",
        "sob demanda"
      ],
      "checklist": [
        "Manter local apenas pastas de uso frequente",
        "Confirmar sincronização completa antes de converter para somente online",
        "Preparar arquivos para permanência local antes de viajar sem internet",
        "Não interpretar marcador de estado como erro de sincronização"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um notebook com 256 GB de disco precisa acessar uma biblioteca de 400 GB na nuvem sem esgotar o armazenamento local.",
        "dados": "Biblioteca de 400 GB, 60 GB livres no disco, três pastas de uso frequente e conexão de rede estável no escritório.",
        "conceitos": [
          "Arquivo sob demanda: conteúdo permanece na nuvem e é baixado quando aberto",
          "Estado sincronizado: cópia local completa e atualizada"
        ],
        "estrategia": "Manter local apenas o conjunto de uso frequente e deixar o restante somente online, aceitando que o acesso ao conteúdo passa a depender de conexão.",
        "execucao": [
          "Abrir as configurações do cliente de sincronização e a opção de escolha de pastas.",
          "Marcar para manter sempre neste dispositivo apenas as três pastas de uso frequente.",
          "Deixar as demais pastas no estado somente online e conferir o estado pelos ícones."
        ],
        "resultado": "Disco local ocupado por uma fração da biblioteca, com as pastas frequentes disponíveis offline e o restante acessível por download sob demanda.",
        "justificativa": "O recurso troca espaço em disco por dependência de rede: o arquivo somente online mantém apenas o marcador, e o conteúdo é baixado na abertura. Isso resolve o dimensionamento do disco, mas cria um limite operacional que precisa ser previsto no planejamento de trabalho offline.",
        "errosFrequentes": [
          "Marcar todas as pastas como sempre disponíveis e retornar ao problema de espaço.",
          "Planejar trabalho offline em pastas que estão somente online."
        ],
        "variacao": "O colaborador precisa editar, em viagem sem internet, três arquivos que hoje estão somente online. Descreva o preparo necessário antes da viagem."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa liberar espaço em uma estação de trabalho sem perder acesso aos arquivos do projeto e sem interromper a sincronização das pastas de uso diário.",
        "dados": "Estação com 12 GB livres, pasta de projetos com 90 GB acessada uma vez por mês e pasta de uso diário com 8 GB aberta todos os dias.",
        "conceitos": [
          "Política de armazenamento local: regra que define o que permanece no dispositivo",
          "Esvaziar espaço: liberação de cópias locais sem excluir o conteúdo da nuvem"
        ],
        "estrategia": "Priorizar a pasta de uso diário para permanecer local e converter a pasta de projetos em somente online, conferindo antes que o conteúdo está íntegro na nuvem.",
        "execucao": [
          "Confirmar que a pasta de projetos está sincronizada e sem pendências de envio.",
          "Converter a pasta de projetos para somente online pelas opções do cliente.",
          "Liberar o espaço das cópias locais e conferir o espaço recuperado."
        ],
        "resultado": "Estação com espaço recuperado, pasta de uso diário íntegra localmente e pasta de projetos acessível por download sob demanda, sem perda de conteúdo.",
        "justificativa": "Converter para somente online remove a cópia local e mantém o conteúdo na nuvem, de modo que o espaço é recuperado sem exclusão. A conferência prévia das pendências de envio evita que uma alteração ainda não sincronizada seja descartada junto com a cópia local.",
        "errosFrequentes": [
          "Excluir a pasta local para liberar espaço, interrompendo a sincronização.",
          "Converter para somente online com envios pendentes e perder alterações recentes."
        ],
        "variacao": "A política da organização passa a exigir que arquivos com dados pessoais não permaneçam em disco local. Explique como essa regra altera a escolha das pastas e qual impacto ela tem no uso offline."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que um arquivo marcado como somente online precisa ser baixado manualmente antes de ser aberto e editado, e que, por isso, o recurso serve apenas para arquivamento.",
        "dados": "Arquivo de 40 MB em pasta somente online, conexão estável, edição feita duas vezes na mesma semana, estado do arquivo observado antes e depois da edição.",
        "conceitos": [
          "Download sob demanda: obtenção automática do conteúdo na abertura",
          "Cópia local temporária: conteúdo baixado para permitir a edição"
        ],
        "estrategia": "Observar o comportamento real do arquivo ao abrir e editar, comparando o estado antes e depois para verificar se houve intervenção manual.",
        "execucao": [
          "Abrir o arquivo somente online com duplo clique e observar o tempo de obtenção do conteúdo.",
          "Editar o documento e salvar, sem acionar nenhuma opção de download.",
          "Verificar o estado do arquivo após o salvamento e a sincronização."
        ],
        "resultado": "A afirmação é incorreta: a abertura dispara a obtenção do conteúdo automaticamente, e a edição gera cópia local sincronizada, sem necessidade de download manual.",
        "justificativa": "O marcador somente online indica ausência de cópia local, não indisponibilidade. O cliente obtém o conteúdo quando o arquivo é aberto e mantém a cópia resultante conforme a política de espaço, de modo que o recurso atende tanto ao arquivamento quanto ao trabalho corrente.",
        "errosFrequentes": [
          "Baixar manualmente todos os arquivos antes de abrir, anulando o ganho de espaço.",
          "Concluir que o arquivo está corrompido por demorar a abrir em conexão lenta."
        ],
        "variacao": "O mesmo arquivo é aberto em um notebook sem conexão. Explique o que ocorre e qual preparo teria evitado a indisponibilidade."
      }
    ]
  }
};
