const enriParcialM1U1P4 = {
  "modulo-1-unidade-1-topico-1-sub-7": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir conta pessoal de conta organizacional é decisivo em itens de informática para concursos porque o enunciado costuma apresentar um cenário concreto, como uma família em casa ou uma empresa com 500 funcionários, e exigir a identificação do tipo de conta e dos recursos disponíveis. Atribuir um recurso de conformidade, como o eDiscovery, a uma conta pessoal invalida a alternativa, pois esse recurso existe apenas no escopo organizacional. A escolha do escopo afeta diretamente administração, segurança e governança de dados, temas de presença permanente no conteúdo programático de informática aplicada à administração pública.",
      "preRequisitos": [
        "subtópico 1 (planos e produtos do Microsoft 365)"
      ],
      "objetivosObservaveis": [
        "distinguir os dois escopos de conta, pessoal e organizacional, a partir de um cenário descrito",
        "associar cada recurso característico, como domínio personalizado, eDiscovery e gerenciamento de dispositivos, ao escopo correto de conta",
        "justificar a escolha do tipo de conta por cenário, citando administração, segurança e conformidade"
      ],
      "competencias": [
        "leitura de requisitos de governança e segurança da informação",
        "escolha de ambiente de conta adequado ao perfil do usuário ou da instituição"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "módulo-1-unidade-1-tópico-1-sub-2: licenciamento e planos do Microsoft 365",
        "módulo-1-unidade-1-tópico-1-sub-8: permissões, compartilhamento, privacidade e recuperação de arquivos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O tema contas pessoais versus organizacionais tem relevância média a alta para concursos porque os enunciados combinam tipo de conta com recursos de segurança e conformidade. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Conta pessoal, do tipo Personal ou Family, e a identidade individual de uso doméstico. As licenças cobrem um conjunto limitado de usuários e a administração e feita pelo próprio usuário. Os recursos concentram-se no uso doméstico e não há centro de administração organizacional. Conta organizacional, de tipo Business ou Enterprise, e a identidade fornecida pela instituição dentro de um locatário, ou tenant, com gestão centralizada pelo administrador e domínio próprio.",
      "intermediario": "No escopo organizacional, o administrador do locatário define políticas de segurança, acesso condicional, gerenciamento de dispositivos e recursos de conformidade, como eDiscovery, rotulagem e auditoria. A disponibilidade exata de cada recurso depende do plano ou licença contratado. Conta pessoal não possui centro de administração com ferramentas de conformidade nem eDiscovery. Em questões que mencionem eDiscovery ou políticas de segurança avançadas, o gabarito e conta organizacional.",
      "avancado": "A conta organizacional muda o comportamento de compartilhamento e retentacao porque as políticas do locatário prevalecem sobre a escolha do usuário individual. O mesmo arquivo, num ambiente organizacional, fica sujeito a políticas de retentacao e permissões definidas pelo administrador. O usuário não decide sozinho. A lista exata de recursos de cada plano varia e deve ser conferida na documentação oficial do produto.",
      "especialista": "Usar conta pessoal para dados institucionais e um risco de governança porque os dados ficam fora das políticas do locatário, sem administração central, sem retentacao e sem eDiscovery para auditoria. A correção e migrar o material para o OneDrive ou SharePoint organizacional, definir permissões e aplicar a política de retentacao do locatário. A escolha do escopo de conta e uma decisão de governança, não apenas de preferência."
    },
    "comparacoes": [
      {
        "tema": "Conta pessoal versus conta organizacional no Microsoft 365",
        "a": {
          "rotulo": "Conta pessoal",
          "texto": "Identidade individual de uso doméstico, planos do tipo Personal ou Family, licenças para um conjunto limitado de usuários, administração feita pelo próprio usuário, foco doméstico, sem centro de administração organizacional nem recursos de conformidade."
        },
        "b": {
          "rotulo": "Conta organizacional",
          "texto": "Identidade fornecida pela instituição dentro de um locatário, planos Business ou Enterprise, gestão centralizada pelo administrador, domínio personalizado, políticas de segurança avançadas, eDiscovery, gerenciamento de dispositivos e recursos de conformidade, com disponibilidade conforme o plano."
        },
        "diferencaGabarito": "A diferença estrutural e administrativa e de conformidade, não apenas de armazenamento. Quando o enunciado citar eDiscovery, domínio próprio ou políticas de segurança avançadas, a alternativa correta e conta organizacional."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário afirma que contas pessoais possuem o recurso eDiscovery para busca e preservação de conteúdo.",
        "porqueErrada": "Incorreto porque atribui um recurso de conformidade organizacional ao escopo doméstico, onde não existe centro de administração com ferramentas de conformidade nem eDiscovery.",
        "versaoCorreta": "eDiscovery e recurso exclusivo de contas organizacionais, com disponibilidade conforme o plano ou licença contratado; contas pessoais não possuem esse recurso."
      },
      {
        "afirmacaoEquivocada": "No ambiente organizacional, cada usuário define sozinho as políticas de retentacao dos seus arquivos.",
        "porqueErrada": "Incorreto porque confunde o escopo pessoal, em que o usuário decide, com o escopo organizacional, em que as políticas são centralizadas pelo administrador do locatário dentro dos limites do plano.",
        "versaoCorreta": "As políticas de retentacao e as permissões são definidas pelo administrador do locatário organizacional, dentro dos limites do plano ou licença, e não por cada usuário individualmente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "conta pessoal",
        "conta organizacional",
        "locatário ou tenant",
        "gestão centralizada",
        "domínio personalizado",
        "eDiscovery",
        "gerenciamento de dispositivos"
      ],
      "regras": [
        "família ou usuário único aponta para conta pessoal",
        "instituição com políticas, domínio próprio e conformidade aponta para conta organizacional",
        "disponibilidade de cada recurso organizacional depende do plano ou licença contratado"
      ],
      "comparacoes": [
        "conta pessoal tem limite de usuários e administração individual; conta organizacional tem gestão centralizada, domínio próprio e conformidade"
      ],
      "fluxos": [
        "escolha do tipo de conta -> definição de quem administra -> aplicação de políticas de segurança, retentacao e compartilhamento do locatário"
      ],
      "excecoes": [
        "planos Business e Enterprise são ambos organizacionais, mas o conjunto de recursos de conformidade e gestão varia por plano, então não se pode afirmar que qualquer plano organizacional inclui todos os recursos"
      ],
      "palavrasChave": [
        "conta pessoal",
        "conta organizacional",
        "tenant",
        "eDiscovery",
        "compliance",
        "domínio personalizado"
      ],
      "checklist": [
        "disto os dois escopos de conta, pessoal e organizacional",
        "atribuo cada recurso característico ao escopo correto",
        "explico quem define as políticas em cada caso",
        "reconheço que a variação por plano afeta os recursos disponíveis"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma família compartilha o pacote Office em casa entre poucos usuários e deseja saber qual tipo de conta do Microsoft 365 e adequado, considerando que não precisa de domínio institucional nem políticas de segurança avançadas.",
        "dados": "Cenário doméstico, poucos usuários da mesma família, uso do Office em casa, não há domínio institucional, não há necessidade de eDiscovery nem de gerenciamento centralizado de dispositivos.",
        "conceitos": [
          "conta pessoal",
          "plano do tipo Family"
        ],
        "estrategia": "Identificar que o contexto e doméstico e o número de usuários e limitado, o que corresponde ao escopo de conta pessoal, em que a administração e feita pelo próprio usuário e não há centro de administração organizacional.",
        "execucao": [
          "Reconhecer que o ambiente e doméstico, com poucos usuários da mesma família.",
          "Verificar que não e necessário domínio institucional nem recursos de segurança avançada.",
          "Concluir que a conta adequada e a pessoal, de tipo Family, com limite de usuários limitado e administração individual.",
          "Confirmar que não há centro de administração organizacional envolvido."
        ],
        "resultado": "Conta pessoal do tipo Family, que cobre um número limitado de usuários, tem foco doméstico, administração feita pelo próprio usuário e não possui centro de administração organizacional.",
        "justificativa": "O resultado e correto porque o enunciado descreve um contexto doméstico com poucos usuários e nenhuma exigência institucional, que e precisamente o escopo para o qual a conta pessoal foi projetada, conforme a fundamentação conceitual do subtópico.",
        "errosFrequentes": [
          "Escolher conta organizacional por achar que e sempre mais completa, ignorando que o cenário e doméstico e não requer domínio próprio nem gestão centralizada.",
          "Assumir que a conta pessoal inclui eDiscovery, recurso que pertence exclusivamente ao escopo organizacional."
        ],
        "variacao": "Se o mesmo problema fosse apresentado com uma pequena empresa de 50 funcionários que precisa de domínio institucional e políticas de segurança, a escolha adequada passaria a ser a conta organizacional, demonstrando que o tipo de conta depende do contexto e não apenas do número de usuários."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa com 500 funcionários precisa de eDiscovery para busca e preservação de conteúdo e de gerenciamento de dispositivos. Deve-se identificar o tipo de conta e o ambiente adequado para atender a esses requisitos.",
        "dados": "Empresa com 500 funcionários, requisito de eDiscovery para fins legais e de auditoria, requisito de gerenciamento de dispositivos, necessidade de domínio próprio e de políticas de segurança avançadas, plano organizacional a ser contratado.",
        "conceitos": [
          "conta organizacional",
          "eDiscovery",
          "gerenciamento de dispositivos"
        ],
        "estrategia": "Associar os recursos exigidos, eDiscovery e gerenciamento de dispositivos, ao escopo organizacional, dentro de um locatário com gestão centralizada e domínio próprio, observando que a disponibilidade exata depende do plano ou licença contratado.",
        "execucao": [
          "Identificar que a empresa precisa de recursos de segurança e conformidade, como eDiscovery e gerenciamento de dispositivos.",
          "Associar esses recursos ao escopo organizacional, pois a conta pessoal não possui centro de administração com ferramentas de conformidade.",
          "Escolher um plano Business ou Enterprise dentro de um locatário, com domínio próprio e gestão centralizada pelo administrador.",
          "Confirmar que a disponibilidade exata de eDiscovery e dos demais recursos depende do plano ou licença contratado e deve ser verificada na documentação oficial."
        ],
        "resultado": "Ambiente organizacional, dentro de um locatário com conta organizacional Business ou Enterprise, oferecendo gestão centralizada, domínio próprio, políticas de segurança, eDiscovery para busca e preservação de conteúdo e gerenciamento de dispositivos, com disponibilidade conforme o plano contratado.",
        "justificativa": "O resultado e correto porque eDiscovery e gerenciamento de dispositivos são recursos caracteristicos do escopo organizacional, enquanto a conta pessoal os não possui, e a regra de prudência determina que a composição exata de recursos depende do plano ou licença contratado.",
        "errosFrequentes": [
          "Atribuir eDiscovery a conta pessoal, um erro que inverte o gabarito porque esse recurso e exclusivo do escopo organizacional.",
          "Afirmar que qualquer plano organizacional inclui automaticamente todos os recursos de conformidade, ignorando que a disponibilidade varia por plano."
        ],
        "variacao": "Se o requisito mudasse para apenas compartilhar documentos entre poucos usuários de uma família, sem necessidade de eDiscovery nem de domínio institucional, a escolha adequada voltaria a ser a conta pessoal do tipo Family, mantendo a mesma estrutura de decisão por contexto."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor criou uma pasta de trabalho institucional na conta pessoal e, ao sair da instituição, a equipe perdeu o controle do material. Um colega afirma que a conta pessoal teria eDiscovery para recuperar e auditar esses dados.",
        "dados": "Pasta de trabalho institucional armazenada em conta pessoal, servidor desligado da instituição, equipe sem controle do material, afirmação de que a conta pessoal possui eDiscovery para recuperação e auditoria.",
        "conceitos": [
          "conta pessoal",
          "eDiscovery",
          "governança de dados"
        ],
        "estrategia": "Diagnosticar que dados institucionais em escopo pessoal ficam fora das políticas do locatário, sem administração central, sem retentacao e sem eDiscovery, e então corrigir a afirmação falsa indicando a migração para o ambiente organizacional.",
        "execucao": [
          "Reconhecer que o material institucional esta em conta pessoal, portanto fora das políticas do locatário organizacional.",
          "Identificar que não há administração central, nem retentacao, nem eDiscovery disponíveis no escopo pessoal.",
          "Rejeitar a afirmação de que a conta pessoal possui eDiscovery, pois esse recurso e exclusivo de contas organizacionais.",
          "Propor a correção: migrar o material para o OneDrive ou SharePoint organizacional, definir permissões e aplicar a política de retentacao do locatário."
        ],
        "resultado": "Diagnóstico correto de que os dados institucionais em conta pessoal perdem controle administrativo, proteção de retentacao e possibilidade de eDiscovery; correção por migração para o ambiente organizacional com permissões e política de retentacao definidas.",
        "justificativa": "O resultado e correto porque a conta pessoal não possui centro de administração nem ferramentas de conformidade, diferentemente do ambiente organizacional, onde o administrador controla políticas de retentacao e compartilhamento, ilustrando que a escolha do escopo de conta e uma decisão de governança.",
        "errosFrequentes": [
          "Acreditar que eDiscovery estaria disponível em qualquer conta Microsoft, inclusive pessoal, o que e falso porque o recurso pertence ao escopo organizacional.",
          "Assumir que a equipe manteria controle do após a saída do servidor, ignorando que em conta pessoal a administração e individual e não há retentacao institucional."
        ],
        "variacao": "Se o servidor tivesse armazenado o material no OneDrive organizacional e saísse da instituição, o administrador do locatário poderia redefinir permissões, aplicar retentacao e, no plano Enterprise, acionar o eDiscovery, demonstrando a vantagem do escopo organizacional."
      }
    ]
  },
  "modulo-1-unidade-1-topico-1-sub-8": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modelo de permissões e de compartilhamento de arquivos no Microsoft 365 é decisivo em itens de informática para concursos porque o enunciado costuma descrever um cenário concreto, como enviar um arquivo somente para leitura com prazo de validade ou recuperar um item excluído, e exigir o mecanismo correto. Afirmar um prazo universal de lixeira ou que um link de compartilhamento nunca expira invalida a alternativa, pois esses prazos e opções dependem da configuração do locatário e do plano contratado. A escolha entre link e pessoas específicas, bem como o nível de permissão, afeta diretamente o controle de acesso e a privacidade de dados, temas de presença permanente no conteúdo programático de informática aplicada à administração pública.",
      "preRequisitos": [
        "subtópico 4 (armazenamento)",
        "subtópico 7 (contas pessoais e organizacionais)"
      ],
      "objetivosObservaveis": [
        "aplicar níveis de permissão, como visualizar, comentar, editar e controlar, a um arquivo ou pasta",
        "escolher a forma de compartilhamento adequada, entre link com expiração e pessoas específicas, conforme o cenário",
        "descrever a cadeia de recuperação de um arquivo excluído, com lixeira, histórico de versões e eDiscovery"
      ],
      "competencias": [
        "controle de acesso a documentos",
        "prática de recuperação de itens excluídos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "módulo-1-unidade-1-tópico-1-sub-4: armazenamento no Microsoft 365",
        "módulo-1-unidade-1-tópico-1-sub-7: contas pessoais e organizacionais"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O tema permissões, compartilhamento e recuperação de arquivos tem relevância alta para concursos porque os enunciados combinam nível de permissão, forma de compartilhamento e mecanismo de recuperação. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Permissão e o direito concedido sobre um arquivo ou pasta. Os níveis típicos são visualizar, que permite abrir e ler sem alterar; comentar, que permite acrescentar anotações sem editar o conteúdo; editar, que permite alterar o conteúdo; e controlar, que permite gerenciar permissões do item. Compartilhamento por link gera um endereço de acesso cujo comportamento depende das políticas do locatário e das opções escolhidas; compartilhamento com pessoas específicas restringe o acesso as contas indicadas, que precisam autenticar-se.",
      "intermediario": "No ambiente organizacional, as configurações do locatário definidas pelo administrador delimitam o que pode ser compartilhado externamente, e a rotulagem de dados classifica o documento por sensibilidade, com disponibilidade conforme o plano. A lixeira guarda itens excluídos pelo período de retentacao configurado, e o valor exato varia. Dentro do período, o item e restaurado a pasta original; esgotada a lixeira, restam o histórico de versões e, no ambiente Enterprise, o eDiscovery conduzido pelo administrador.",
      "avancado": "Políticas do locatário restringem o compartilhamento externo e a rotulagem interage com as permissões quando disponível no plano. Cada usuário gerencia os itens que excluiu; recuperações além disso ou além da lixeira dependem do administrador e, no ambiente Enterprise, do eDiscovery conforme o plano. O princípio prático e compartilhar o menor nível de permissão que atende a finalidade e confirmar a retentacao vigente antes de confiar só na lixeira.",
      "especialista": "Planejar a cadeia de recuperação completa, lixeira, histórico de versões e eDiscovery, e definir prática de backup para o caso de falha em todas as camadas. Opções como expiração e senha no link dependem do plano, e o período de lixeira varia conforme a configuração da organização ou conta, devendo ser verificado na documentação oficial do produto."
    },
    "comparacoes": [
      {
        "tema": "Link de compartilhamento versus compartilhamento com pessoas específicas",
        "a": {
          "rotulo": "Link de compartilhamento",
          "texto": "Gera um endereço de acesso cujo comportamento — quem pode abrir, se pode editar, se há expiração e proteção — depende das políticas do locatário e das opções escolhidas no ato do compartilhamento; algumas opções dependem do plano ou licença."
        },
        "b": {
          "rotulo": "Pessoas específicas",
          "texto": "Restringe o acesso as contas indicadas, que precisam autenticar-se, sendo mais adequado para dado sensível porque não depende de um endereço compartilhável livremente."
        },
        "diferencaGabarito": "Para dado sensível, o gabarito e compartilhamento restrito com pessoas específicas, não link aberto, pois o link pode ser transmitido adiante conforme a opção, enquanto pessoas específicas exige autenticação das contas indicadas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário afirma que um link de compartilhamento nunca expira por padrão.",
        "porqueErrada": "Incorreto porque trata configuração variável como absoluta; as políticas do locatário podem definir expiração e a opção pode ser configurada ao compartilhar, conforme o plano ou licença contratado.",
        "versaoCorreta": "Políticas do locatário podem definir expiração para links e a opção pode ser configurada ao compartilhar, conforme o plano ou licença; conferir na documentação oficial do produto."
      },
      {
        "afirmacaoEquivocada": "Os itens ficam na lixeira para sempre.",
        "porqueErrada": "Incorreto porque estabelece um prazo absoluto sem base; a lixeira mantém itens pelo período de retentacao configurado pela organização ou conta, que varia.",
        "versaoCorreta": "A lixeira mantém itens excluídos pelo período de retentacao configurado pela organização ou conta, que varia e deve ser verificado na documentação oficial do produto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "níveis de permissão",
        "link de compartilhamento",
        "pessoas específicas",
        "expiração",
        "rotulagem",
        "lixeira",
        "histórico de versões",
        "eDiscovery"
      ],
      "regras": [
        "menor privilégio: usar o nível mínimo de permissão que atende a finalidade",
        "dado sensível: compartilhar com pessoas específicas, não com link amplo",
        "arquivo excluído: restaurar da lixeira dentro do período de retentacao"
      ],
      "comparacoes": [
        "lixeira recupera itens excluídos dentro da retentacao; histórico de versões recupera conteúdo anterior de arquivos que continuam existindo"
      ],
      "fluxos": [
        "arquivo excluído -> lixeira dentro da retentacao -> restaurar a pasta original; esgotada a lixeira -> histórico de versões ou eDiscovery do administrador"
      ],
      "excecoes": [
        "expiração, senha no link e rotulagem dependem do plano; o período de lixeira varia conforme a configuração, então não se pode afirmar prazos sem conferir a documentação oficial"
      ],
      "palavrasChave": [
        "permissão",
        "link",
        "expiração",
        "rotulagem",
        "lixeira",
        "retenção",
        "eDiscovery",
        "menor privilégio"
      ],
      "checklist": [
        "aplico níveis de permissão adequados",
        "escolho link versus pessoas específicas conforme o cenário",
        "descrição a cadeia de recuperação de arquivo excluído",
        "não afirmo prazos de lixeira sem conferir a documentação oficial"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Compartilhar um arquivo com permissão de visualização e com expiração de acesso, para que o destinatário possa ler o conteúdo por um prazo limitado e depois não tenha mais acesso.",
        "dados": "Arquivo a ser compartilhado, nível de permissão Visualizar, expiração de acesso definida no ato do compartilhamento, destinatário que abrira apenas para leitura, opção de expiração disponível conforme o plano.",
        "conceitos": [
          "nível Visualizar",
          "link com expiração"
        ],
        "estrategia": "Escolher o nível Visualizar para permitir apenas leitura, definir a expiração de acesso quando a opção estiver disponível no plano, e enviar o compartilhamento para que o destinatário abrira para leitura e o acesso cessara no prazo configurado.",
        "execucao": [
          "Abrir o arquivo e selecionar a opção de compartilhamento.",
          "Escolher pessoas específicas ou link, conforme a política do locatário.",
          "Definir o nível de permissão como Visualizar, permitindo apenas leitura sem alteração.",
          "Definir a expiração de acesso, quando a opção estiver disponível no plano contratado.",
          "Enviar o compartilhamento para que o destinatário acesse dentro do prazo."
        ],
        "resultado": "O destinatário abre o arquivo para leitura apenas e o acesso cessa no prazo configurado, respeitando o nível Visualizar e a expiração definida conforme o plano.",
        "justificativa": "O resultado e correto porque o nível Visualizar permite apenas abrir e ler sem alterar, e a expiração garante que o acesso não permaneça indefinidamente, atendendo ao requisito de acesso por prazo limitado.",
        "errosFrequentes": [
          "Escolher o nível Editar em vez de Visualizar, permitindo que o destinatário altere o conteúdo do arquivo.",
          "Esquecer de definir a expiração, deixando o acesso disponível por tempo indeterminado."
        ],
        "variacao": "Se o requisito mudasse para permitir que o destinatário acrescente anotações sem alterar o corpo do texto, o nível adequado seria Comentar, não Visualizar, mantendo a mesma estrutura de escolha de permissão e expiração."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um arquivo relevante foi excluído há 5 dias por engano. Deve-se descrever como recupera-lo e quais práticas previnem a perda futura.",
        "dados": "Arquivo excluído há 5 dias, lixeira do serviço de armazenamento em nuvem, período de retentacao configurado pela organização ou conta, opção de histórico de versões e, no ambiente Enterprise, eDiscovery conduzido pelo administrador.",
        "conceitos": [
          "lixeira",
          "período de retentacao",
          "histórico de versões"
        ],
        "estrategia": "Abrir a lixeira do serviço, localizar o item excluído e restaurar a pasta original; se o item não estiver mais na lixeira, verificar o histórico de versões e, no ambiente Enterprise, acionar o administrador para eDiscovery conforme o plano; confirmar o período de retentacao vigente e manter backup de itens críticos.",
        "execucao": [
          "Abrir a lixeira do serviço, como OneDrive ou SharePoint, e localizar o item excluído há 5 dias.",
          "Restaurar o item para que ele volte a pasta original, estando dentro do período de retentacao.",
          "Se o item não estiver mais na lixeira, verificar o histórico de versões do caminho ou pasta para recuperar conteúdo anterior.",
          "No ambiente Enterprise, acionar o administrador para eDiscovery conforme o plano, se necessário.",
          "Confirmar o período de retentacao vigente na documentação oficial e manter backup independente de itens críticos."
        ],
        "resultado": "O arquivo e restaurado da lixeira a pasta original dentro do período de retentacao; se já houver esgotado, recupera-se por histórico de versões ou eDiscovery do administrador, com prevenção por backup independente.",
        "justificativa": "O resultado e correto porque a lixeira guarda itens excluídos pelo período de retentacao configurado, dentro do qual o item volta a pasta original; além disso, versões anteriores e eDiscovery são camadas adicionais de recuperação, e o backup independente previne perda quando todas falham.",
        "errosFrequentes": [
          "Confiar apenas na lixeira sem verificar o período de retentacao, que varia e pode já ter expirado.",
          "Assumir que qualquer usuário pode restaurar itens de outros pela lixeira, quando cada usuário gerencia só os itens que excluiu."
        ],
        "variacao": "Se o arquivo tivesse sido alterado, não excluído, a recuperação adequada seria o histórico de versões para restaurar uma versão anterior, não a lixeira, mantendo a mesma estrutura de cadeia de recuperação."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que um link de compartilhamento nunca expira por padrão e que pode ser usado indefinidamente para acessar um documento.",
        "dados": "Link de compartilhamento gerado para um documento, afirmação de que o link nunca expira por padrão, necessidade de verificar o comportamento real conforme políticas do locatário e plano contratado.",
        "conceitos": [
          "link de compartilhamento",
          "expiração",
          "políticas do locatário"
        ],
        "estrategia": "Rejeitar a afirmação absoluta de que o link nunca expira, explicando que políticas do locatário podem definir expiração e que a opção pode ser configurada ao compartilhar, conforme o plano, e orientar a conferir a documentação oficial.",
        "execucao": [
          "Identificar a afirmação de que o link nunca expira por padrão como um termo absoluto sobre configuração variável.",
          "Explicar que as políticas do locatário podem definir expiração para links e que a opção pode ser configurada ao compartilhar, conforme o plano ou licença contratado.",
          "Recomendar conferir a documentação oficial do produto para confirmar o comportamento real do link.",
          "Orientar que, para documento sensível, o compartilhamento com pessoas específicas e autenticação e mais adequado do que um link amplo."
        ],
        "resultado": "A afirmação esta incorreta: o link de compartilhamento pode expirar conforme as políticas do locatário e as opções configuradas, dependendo do plano, e não e valido dizer que nunca expira por padrão.",
        "justificativa": "O resultado e correto porque o comportamento do link, incluindo expiração e proteção, depende das políticas do locatário e das opções escolhidas no ato do compartilhamento, com algumas opções dependendo do plano ou licença, conforme a fundamentação conceitual do subtópico.",
        "errosFrequentes": [
          "Assumir que o link nunca expira, tratando configuração variável como absoluta e ignorando as políticas do locatário.",
          "Confiar em um link amplo para documento sensível, em vez de usar pessoas específicas com autenticação das contas indicadas."
        ],
        "variacao": "Se o enunciado tratasse de itens na lixeira, a afirmação equivalente a corrigir seria que itens permanecem na lixeira indefinidamente, quando na verdade o período de retentacao varia conforme a configuração."
      }
    ]
  }
};
