const enriParcialM4U2P2 = {
  "m4-u2-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Ransomware, rootkit e botnet representam os desfechos mais graves de um comprometimento: o ransomware cifra os dados e ainda ameaça publicá-los, o rootkit esconde a presença do invasor e a botnet transforma máquinas em zumbis a serviço de ataques de negação de serviço. Sem conhecer o ciclo de cada um, o gestor não sabe onde cortar o ataque — se na origem do acesso, na recuperação dos dados ou no canal de comando e controle.",
      "preRequisitos": [
        "Noção de criptografia simétrica aplicada a arquivos",
        "Conceito de cópia de segurança e de cópia de sombra do sistema",
        "Ideia de privilégio de conta e de movimentação lateral na rede",
        "Noção de controle remoto e de canal de comando e controle"
      ],
      "objetivosObservaveis": [
        "Descrever as etapas do ciclo de ataque do ransomware, da entrada à nota de resgate",
        "Explicar por que o rootkit exige inspeção fora do sistema comprometido",
        "Caracterizar a botnet como rede de dispositivos controlados por canal de comando e controle",
        "Relacionar cada tipo de ameaça a controles de defesa específicos"
      ],
      "competencias": [
        "Leitura de cadeia de ataque: situar cada controle na etapa que ele interrompe",
        "Julgamento de prioridade: separar contenção imediata de erradicação duradoura",
        "Diagnóstico fora do sistema: reconhecer quando a inspeção local não é confiável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s1 (Vírus e worms) — formas iniciais de comprometimento que podem preceder o ransomware",
        "m4-u2-t1-s2 (Trojans, spyware e adware) — vetores de acesso e de coleta que alimentam a intrusão",
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — base da defesa contra ransomware",
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — tipos de cópia que sustentam a recuperação",
        "m4-u2-t3-s2 (Monitoramento, registros e resposta a incidentes) — detecção e condução do ciclo de resposta"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema de grande peso no conteúdo programático de segurança, com o ciclo do ransomware, a dupla extorsão, o mecanismo do rootkit e a caracterização da botnet, além da escolha do controle de recuperação, como a cópia imutável testada, conforme estimativa pedagógica de adequação ao edital."
      }
    },
    "niveis": {
      "iniciante": "Ransomware cifra os arquivos a que a conta comprometida tem acesso e cobra pagamento pela chave; versões modernas também ameaçam publicar os dados vazados, o que se chama dupla extorsão. Rootkit é um conjunto que esconde a presença do invasor das ferramentas de inspeção, o que torna a detecção local pouco confiável. Botnet é uma rede de dispositivos comprometidos, os zumbis, comandados por um canal de comando e controle para enviar spam, minerar ou atacar.",
      "intermediario": "O ciclo típico do ransomware encadeia entrada por acesso exposto ou credencial fraudada, elevação de privilégio, movimentação lateral, desativação das defesas e das cópias de sombra, cifragem em massa e nota de resgate. A defesa comprovada atua em pontos distintos: a segmentação limita o alcance, a autenticação multifator bloqueia o ponto de entrada, a correção fecha a vulnerabilidade explorada e a cópia imutável e testada garante a recuperação sem pagamento.",
      "avancado": "O rootkit pode operar no aplicativo, no driver ou no núcleo, alterando as listas de processos e de arquivos que o sistema apresenta; por isso a detecção confiável muitas vezes exige inspeção fora do sistema comprometido, como arranque limpo ou varredura a partir de mídia confiável. Uma botnet bem-sucedida revela que os dispositivos não estavam corrigidos nem monitorados, e o canal de comando e controle precisa ser bloqueado para que os zumbis deixem de receber ordens.",
      "especialista": "O especialista encadeia a resposta em fases: contenção imediata, com isolamento e bloqueio do canal de comando e controle; erradicação por reconstrução dos sistemas e rotação de todas as credenciais, já que o rootkit pode persistir escondido; e recuperação a partir de cópias imutáveis verificadas. A presença de botnet exige ainda caça aos dispositivos comprometidos e correção da causa que permitiu o recrutamento."
    },
    "comparacoes": [
      {
        "tema": "Ransomware versus botnet",
        "a": {
          "rotulo": "Ransomware",
          "texto": "Cifra os dados acessíveis pela conta comprometida e cobra resgate, podendo ameaçar publicar o que foi vazado, o que caracteriza a dupla extorsão; o objetivo é obter pagamento."
        },
        "b": {
          "rotulo": "Botnet",
          "texto": "Mantém dispositivos comprometidos sob comando e controle para enviar spam, minerar de forma forçada ou gerar ataques de negação de serviço; o objetivo é usar a capacidade da rede alheia."
        },
        "diferencaGabarito": "O ransomware busca extorquir diretamente o dono dos dados, enquanto a botnet transforma máquinas em recursos de ataque; a primeira gera impacto imediato, a segunda sustenta o tráfego de outras ofensivas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pagar o resgate garante a recuperação dos arquivos e encerra o incidente.",
        "porqueErrada": "O pagamento não assegura a entrega da chave, não revoga o acesso que o invasor manteve e não remove persistências como o rootkit; restaurar a operação depende de cópia íntegra, não do resgate.",
        "versaoCorreta": "Errado. Pagar não garante a chave, não fecha o acesso do invasor nem elimina persistências, e ainda financia a atividade criminosa. A recuperação confiável vem de cópia imutável testada e da reconstrução dos sistemas afetados."
      },
      {
        "afirmacaoEquivocada": "Se o antivírus da própria máquina não encontrou nada, o sistema está livre de rootkit.",
        "porqueErrada": "O rootkit foi feito justamente para enganar as ferramentas que rodam dentro do sistema comprometido, alterando as listas de processos e de arquivos; a ausência de detecção local não prova ausência de infecção.",
        "versaoCorreta": "Errado. Como o rootkit manipula o que o próprio sistema mostra, a verificação confiável exige inspeção fora do ambiente comprometido, como arranque limpo ou varredura a partir de mídia confiável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Ransomware: cifragem de dados com exigência de resgate",
        "Dupla extorsão: ameaça de publicar dados vazados além de cifrá-los",
        "Rootkit: conjunto que oculta a presença do invasor",
        "Botnet: rede de dispositivos comprometidos sob comando e controle"
      ],
      "regras": [
        "Contra ransomware, a defesa decisiva é cópia imutável e testada, com segmentação e autenticação multifator",
        "Detecção confiável de rootkit exige inspeção fora do sistema comprometido",
        "Contra botnet, bloquear o canal de comando e controle e corrigir a causa do recrutamento"
      ],
      "comparacoes": [
        "Ransomware extorque o dono dos dados; botnet usa as máquinas como recurso de ataque"
      ],
      "fluxos": [
        "Entrada por acesso exposto ou credencial fraudada → elevação de privilégio e movimentação lateral → desativação de defesas e cópias de sombra → cifragem em massa e nota de resgate → a resposta isola, remove persistências e restaura a partir de cópia imutável"
      ],
      "excecoes": [
        "Pagamento não garante recuperação nem erradicação; persistências podem reativar o ataque semanas depois",
        "Software aberto e auditável reduz a chance de um rootkit oculto, mas não dispensa a verificação da integridade"
      ],
      "palavrasChave": [
        "ransomware",
        "rootkit",
        "botnet",
        "dupla extorsão",
        "comando e controle",
        "cópia imutável",
        "zumbi"
      ],
      "checklist": [
        "Isolar as máquinas afetadas e bloquear o canal de comando e controle",
        "Preservar evidências e identificar a variante por assinatura ou hash",
        "Verificar a integridade das cópias de backup antes de restaurar",
        "Rotacionar credenciais e revogar certificados após a erradicação",
        "Reconstruir os sistemas em vez de confiar na limpeza local"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Após um clique em anexo, os arquivos de uma estação ganham extensão nova e deixam de abrir, e surge uma instrução de pagamento. Identifique o tipo de malware e o primeiro ciclo de resposta.",
        "dados": "Estação com arquivos renomeados e inacessíveis; nota de resgate exibida na tela; instrução de pagamento em moeda digital; nenhum backup recente verificado no momento da detecção.",
        "conceitos": [
          "Ransomware",
          "Cifragem em massa",
          "Contenção imediata"
        ],
        "estrategia": "Reconhecer o efeito de cifragem com exigência de resgate e iniciar a contenção antes de qualquer tentativa de limpeza.",
        "execucao": [
          "Isolar a máquina da rede para impedir a propagação",
          "Preservar evidências e registrar o hash dos arquivos maliciosos",
          "Iniciar a contenção das demais estações e verificar as cópias de segurança"
        ],
        "resultado": "O caso é de ransomware; o primeiro ciclo consiste em isolar a máquina, preservar evidências, conter a propagação e acionar a recuperação por cópia íntegra, sem pagar o resgate.",
        "justificativa": "A renomeação dos arquivos com exigência de pagamento caracteriza a cifragem típica do ransomware; como o pagamento não garante a chave, a resposta correta prioriza a contenção e a recuperação por cópia confiável.",
        "errosFrequentes": [
          "Tentar limpar a máquina antes de isolar a rede, permitindo que a cifragem continue",
          "Considerar o pagamento como caminho de recuperação, ignorando o backup"
        ],
        "variacao": "A mesma estação possui uma cópia de sombra local, que o invasor apagou antes da cifragem. O que muda na estratégia de recuperação?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão pagou o resgate e, semanas depois, os arquivos voltaram a ficar inacessíveis. Explique tecnicamente o que provavelmente aconteceu.",
        "dados": "Pagamento realizado após a primeira cifragem; recuperação parcial inicial; sem rotação de credenciais e sem reconstrução das estações; semanas depois, nova cifragem em parte do ambiente.",
        "conceitos": [
          "Persistência do invasor",
          "Acesso não revogado",
          "Erradicação incompleta"
        ],
        "estrategia": "Examinar as persistências que sobrevivem ao pagamento: acesso remoto mantido, credencial não revogada e componente residual ativo.",
        "execucao": [
          "Verificar se o invasor manteve acesso por meio de acesso remoto oculto ou de credencial válida",
          "Checar a presença de componente residual que ocultou a presença, como um rootkit",
          "Concluir que faltou erradicação: reconstruir os sistemas e rotacionar as credenciais"
        ],
        "resultado": "O pagamento não erradicou a causa: o invasor manteve acesso ou deixou persistências ativas, o que permitiu nova cifragem. A correção exige reconstrução dos sistemas, rotação de credenciais e revogação de certificados.",
        "justificativa": "Se a credencial e o acesso remoto não foram revogados, o atacante retorna pelo mesmo caminho; por isso a recuperação só é estável após reconstruir os ambientes e invalidar todo segredo que circulou durante o incidente.",
        "errosFrequentes": [
          "Tratar o pagamento como erradicação, sem revogar credenciais nem reconstruir as estações",
          "Reativar máquinas recuperadas sem verificar persistências e integridade do sistema"
        ],
        "variacao": "O órgão havia reconstruído as estações, mas não rotacionou a conta de serviço usada na movimentação lateral. Qual é o risco remanescente?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, como o antivírus da máquina não detectou nada, o sistema está livre de rootkit e o incidente pode ser encerrado. Avalie esse raciocínio.",
        "dados": "Suspeita de invasor com persistência; verificações feitas apenas com ferramentas executadas dentro do próprio sistema; listagem de processos aparentemente normal; nenhuma inspeção externa realizada.",
        "conceitos": [
          "Ocultação pelo rootkit",
          "Confiabilidade da inspeção local",
          "Erradicação por reconstrução"
        ],
        "estrategia": "Questionar a confiança da inspeção feita dentro do sistema comprometido, já que o rootkit foi projetado para manipular exatamente o que essas ferramentas mostram.",
        "execucao": [
          "Reconhecer que o rootkit altera as listas de processos e arquivos vistas pelo próprio sistema",
          "Concluir que a ausência de detecção local não comprova ausência de infecção",
          "Indicar inspeção fora do sistema, por arranque limpo ou varredura externa, e reconstrução quando confirmada"
        ],
        "resultado": "O raciocínio é falho: a verificação feita dentro do sistema comprometido não é confiável contra rootkit, pois ele esconde exatamente o que essas ferramentas exibem. A confirmação exige inspeção externa e, se houver persistência, reconstrução.",
        "justificativa": "Como o rootkit manipula a visão que o sistema apresenta de si mesmo, a ausência de achados locais não é evidência de limpeza; somente a inspeção a partir de ambiente confiável reduz essa incerteza.",
        "errosFrequentes": [
          "Tomar a listagem normal de processos como prova de que não há rootkit",
          "Encerrar o incidente sem inspeção externa nem reconstrução dos sistemas suspeitos"
        ],
        "variacao": "A equipe passa a usar uma mídia de arranque confiável para varredura fora do sistema. Em que esse procedimento muda a confiabilidade do resultado?"
      }
    ]
  },
  "m4-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O firewall de pacotes é a primeira barreira de filtragem de tráfego e aparece em quase todo cenário de prova: decidir com base em endereço, protocolo e porta, aplicar a política de negação padrão e reconhecer o limite de não ver o conteúdo da aplicação. Errar a ordem das regras ou supor que ele inspeciona a mensagem aplicacional leva a configurações inseguras e a respostas incorretas sobre o alcance do controle.",
      "preRequisitos": [
        "Estrutura do cabeçalho de um pacote IP, com endereços e protocolo",
        "Noção de portas TCP e UDP e dos protocolos TCP, UDP e ICMP",
        "Conceito de rede interna, rede externa e zona desmilitarizada",
        "Ideia de política de permissão e de negação padrão"
      ],
      "objetivosObservaveis": [
        "Ler e escrever regras de filtragem com base em IP, protocolo e porta",
        "Explicar por que a política padrão deve ser a negação com permissões explícitas",
        "Ordenar regras do mais específico para o mais geral e documentar cada uma",
        "Reconhecer que o firewall de pacotes não inspeciona o conteúdo da aplicação"
      ],
      "competencias": [
        "Raciocínio por camadas: situar a decisão do firewall no cabeçalho do pacote",
        "Cuidado com a ordem: entender que a primeira regra correspondente decide",
        "Julgamento de escopo: distinguir o que cabe ao filtro de pacotes do que exige inspeção de aplicação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — evolução que lembra conexões e reduz regras de retorno",
        "m4-u2-t2-s3 (Firewall de aplicação e WAF) — camada que inspeciona o conteúdo que o filtro de pacotes não enxerga",
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — organização das zonas cujo tráfego o firewall filtra"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com a leitura de regras, a política de negação padrão e a limitação de não inspecionar o conteúdo aplicacional, com peso alto por combinar conceito e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "O firewall de pacotes decide olhando o cabeçalho de cada pacote: endereço IP de origem e destino, protocolo (TCP, UDP ou ICMP) e portas de origem e destino. Ele não guarda memória das conexões, por isso é chamado de stateless e, para liberar o retorno de uma conexão, exige uma regra explícita no sentido oposto. A boa prática é partir da negação padrão, em que tudo que não foi permitido de forma explícita é bloqueado.",
      "intermediario": "Como o filtro é stateless, cada sentido da conversa precisa de regra própria, o que aumenta o número de linhas e o risco de erro. As regras devem ser ordenadas do caso mais específico para o mais geral, porque a primeira correspondência decide, e cada regra merece documentação com finalidade, responsável e data. Uma revisão periódica remove regras mortas e evita que permissões antigas continuem abrindo caminho sem justificativa.",
      "avancado": "A limitação estrutural está no escopo da decisão: o firewall de pacotes não inspeciona o conteúdo da aplicação nem o conteúdo cifrado, então tráfego malicioso embutido em uma conexão permitida passa como caixa-preta. Exemplo típico é o canal de comando e controle camuflado em TLS na porta 443 liberada. Detectar esse abuso exige inspeção de aplicação, proxy ou monitoramento comportamental, que atuam onde o filtro de cabeçalho não alcança.",
      "especialista": "O especialista desenha a política pela menor permissão: negação padrão, permissões pontuais por origem, destino e porta, regras específicas antes das genéricas e documentação obrigatória. Complementa o filtro com inspeção de estado para reduzir regras de retorno e com controles de aplicação para o que o cabeçalho não revela, além de revisar periodicamente o conjunto para remover o que perdeu finalidade e reduzir a superfície de exposição."
    },
    "comparacoes": [
      {
        "tema": "Firewall de pacotes versus firewall de aplicação",
        "a": {
          "rotulo": "Firewall de pacotes",
          "texto": "Decide pelo cabeçalho — IP, protocolo e portas —, avalia cada pacote isoladamente e não distingue, dentro de uma conexão permitida, tráfego legítimo de malicioso."
        },
        "b": {
          "rotulo": "Firewall de aplicação (WAF ou proxy)",
          "texto": "Interpreta o protocolo da aplicação e inspeciona o conteúdo das requisições, bloqueando padrões de ataque que o filtro de cabeçalho não enxerga, como injeção de comandos em formulários web."
        },
        "diferencaGabarito": "O filtro de pacotes decide por endereço, protocolo e porta; o firewall de aplicação decide pelo conteúdo, e é essa camada que cobre o que passa camuflado em uma conexão permitida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O firewall de pacotes analisa o conteúdo das mensagens da aplicação para decidir o que bloquear.",
        "porqueErrada": "Ele decide apenas pelo cabeçalho, com endereços, protocolos e portas; a análise do conteúdo aplicacional é tarefa de firewall de aplicação, proxy ou sistema de detecção com inspeção profunda.",
        "versaoCorreta": "Errado. O firewall de pacotes não lê o conteúdo: sua decisão se limita a endereço, protocolo e porta. Quem examina a mensagem da aplicação é o firewall de aplicação, o proxy ou o sistema de detecção com inspeção profunda."
      },
      {
        "afirmacaoEquivocada": "Na política de negação padrão, uma porta nova permanece acessível até que alguém crie uma regra para bloqueá-la.",
        "porqueErrada": "Inverte a lógica da negação padrão: nesse modelo, o que não foi permitido de forma explícita já está negado, de modo que uma porta nova só se torna acessível se houver regra de permissão.",
        "versaoCorreta": "Errado. Na negação padrão, tudo que não tem permissão explícita já está bloqueado; a porta nova só fica acessível quando alguém cria uma regra que a permita, e não o contrário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Firewall de pacotes: filtro sem estado baseado no cabeçalho",
        "Política de negação padrão: o que não é permitido é negado",
        "Allowlist: lista explícita de permissões",
        "Regra morta: permissão antiga sem finalidade atual"
      ],
      "regras": [
        "Ordenar regras do mais específico para o mais geral, pois a primeira correspondência decide",
        "Exigir regra explícita para cada sentido, já que o filtro é stateless",
        "Documentar cada regra com finalidade, responsável e data"
      ],
      "comparacoes": [
        "Filtro de pacotes decide por cabeçalho; firewall de aplicação decide por conteúdo"
      ],
      "fluxos": [
        "Pacote chega → o firewall compara com as regras na ordem definida → a primeira regra correspondente decide permitir ou negar → sem correspondência, aplica-se a negação padrão → a conexão liberada segue para o destino"
      ],
      "excecoes": [
        "Não inspeciona conteúdo cifrado nem mensagem aplicacional; tráfego malicioso pode passar em conexão permitida",
        "Como não guarda estado, o retorno exige regra própria, diferente do que ocorre na inspeção de estado"
      ],
      "palavrasChave": [
        "firewall de pacotes",
        "stateless",
        "negação padrão",
        "allowlist",
        "porta",
        "protocolo",
        "filtragem de tráfego"
      ],
      "checklist": [
        "Definir a negação padrão como base da política",
        "Permitir apenas o necessário, com origem, destino e porta explícitos",
        "Ordenar as regras do mais específico para o mais geral",
        "Criar regra de retorno quando necessário, por ser filtro sem estado",
        "Documentar e revisar periodicamente para remover regras mortas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Escreva o conjunto mínimo de regras para um servidor DNS interno que responde em UDP 53 e só deve ser consultado pela rede 192.168.10.0/24.",
        "dados": "Servidor DNS interno no endereço 192.168.1.53; rede autorizada 192.168.10.0/24; firewall de pacotes com negação padrão; nenhuma regra preexistente para a porta 53.",
        "conceitos": [
          "Regra de filtragem",
          "Negação padrão",
          "Especificidade das regras"
        ],
        "estrategia": "Permitir de forma específica apenas a origem autorizada para a porta do serviço e, em seguida, negar o restante, mantendo a permissão antes da negação geral.",
        "execucao": [
          "Criar regra que permita UDP de destino 53, com origem 192.168.10.0/24 e destino 192.168.1.53",
          "Criar regra que negue UDP e TCP de destino 53 para qualquer origem não autorizada",
          "Manter a negação padrão para todo o restante do tráfego"
        ],
        "resultado": "O conjunto permite a consulta apenas da rede autorizada ao servidor DNS e bloqueia o restante: a permissão específica vem antes e a negação padrão cobre o que não foi permitido.",
        "justificativa": "Como o firewall decide pela primeira regra correspondente, a permissão precisa vir antes da negação geral; assim, apenas a origem prevista alcança a porta 53 e todo o demais tráfego permanece bloqueado.",
        "errosFrequentes": [
          "Colocar a negação geral antes da permissão, o que bloqueia até o tráfego autorizado",
          "Permitir a porta 53 para qualquer origem, ampliando o acesso além da rede prevista"
        ],
        "variacao": "O serviço passa a ser consultado também pela rede 192.168.20.0/24. Como ajustar o conjunto sem abrir a porta para qualquer origem?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor web está atrás de um firewall de pacotes com uma única regra que permite TCP na porta 443. Um invasor usa o mesmo túnel TLS para tráfego de comando e controle. Explique por que esse tráfego passou.",
        "dados": "Firewall de pacotes com regra única permitindo TCP de destino 443 para o servidor web; tráfego malicioso encapsulado em TLS na mesma porta; nenhum controle de inspeção de conteúdo ativo.",
        "conceitos": [
          "Decisão por cabeçalho",
          "Limite de inspeção",
          "Canal de comando e controle"
        ],
        "estrategia": "Comparar o que a regra verifica (endereço, protocolo e porta) com o que o invasor acrescentou (conteúdo cifrado), mostrando que a regra continua satisfeita.",
        "execucao": [
          "Identificar que a regra casa apenas endereço, protocolo TCP e porta 443",
          "Notar que o conteúdo cifrado não é examinado pelo filtro de pacotes",
          "Concluir que é preciso inspeção de aplicação ou monitoramento comportamental"
        ],
        "resultado": "O tráfego passou porque a regra se satisfaz com TCP na porta 443, e o filtro de pacotes não enxerga o conteúdo cifrado; distinguir TLS legítimo de malicioso exige inspeção de aplicação ou monitoramento comportamental.",
        "justificativa": "A decisão do filtro de pacotes termina no cabeçalho; como o invasor reutilizou uma conexão permitida, a regra permanece válida e a mensagem maliciosa atravessa sem ser identificada.",
        "errosFrequentes": [
          "Acreditar que liberar a porta 443 garante que só tráfego legítimo trafegue por ela",
          "Supor que o firewall de pacotes identifica o conteúdo por estar cifrado ou não"
        ],
        "variacao": "O mesmo canal de comando e controle usa a porta 53, normalmente liberada para DNS. Como essa escolha dificulta a detecção pelo filtro de pacotes?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, ao identificar uma conexão indesejada, basta adicionar uma regra de bloqueio no fim da lista, pois a ordem das regras não altera o resultado. Avalie esse raciocínio.",
        "dados": "Política com uma regra genérica de permissão no topo; a equipe pretende acrescentar a negação da conexão indesejada ao final da lista; o firewall processa as regras na ordem em que aparecem.",
        "conceitos": [
          "Primeira correspondência decide",
          "Ordem das regras",
          "Regra genérica permissiva"
        ],
        "estrategia": "Verificar o efeito da ordem: como uma regra genérica de permissão está no topo, a negação adicionada ao final nunca chega a ser avaliada.",
        "execucao": [
          "Reconhecer que o firewall decide pela primeira regra correspondente",
          "Notar que a permissão genérica do topo casa antes da negação do final",
          "Concluir que a negação no fim da lista não produz efeito enquanto a permissão genérica vier primeiro"
        ],
        "resultado": "O raciocínio é incorreto: com a permissão genérica no topo, a negação acrescentada ao final nunca é alcançada, e a conexão indesejada continua permitida. É preciso posicionar a regra específica antes da genérica.",
        "justificativa": "A ordem define o resultado porque a primeira regra correspondente encerra a avaliação; por isso a regra específica deve preceder a genérica para que o bloqueio pretendido tenha efeito.",
        "errosFrequentes": [
          "Acreditar que a posição da regra é indiferente no processamento da lista",
          "Manter uma permissão genérica no topo e esperar que negações posteriores a limitem"
        ],
        "variacao": "A lista é reordenada colocando a negação específica antes da permissão genérica. Qual passa a ser o resultado para a conexão indesejada?"
      }
    ]
  }
};
