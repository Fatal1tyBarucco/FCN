const enriParcialM4U2P3 = {
  "m4-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A inspeção de estado é o ponto de partida para qualquer firewall moderno: ao lembrar de conexões ativas, o dispositivo libera respostas automaticamente sem exigir regras explícitas para cada sentido. Isso reduz o conjunto de regras, minimiza erros de configuração e ainda bloqueia pacotes órfãos que se passam por respostas de conexões inexistentes. Em provas de concursos, o candidato precisa distinguir essa abordagem da inspeção stateless e reconhecer que o estado não elimina a política de permissão — ele apenas automatiza o tráfego de retorno já autorizado.",
      "preRequisitos": [
        "Representação binária de endereços IP e portas",
        "Noção de firewall stateless e política de negação padrão",
        "Ciclo de vida de uma conexão TCP (SYN, SYN-ACK, ACK, FIN)",
        "O que são flags de pacote TCP, especialmente ACK e SYN"
      ],
      "objetivosObservaveis": [
        "Explicar como a tabela de estados armazena origem, destino, porta e estado da conexão",
        "Descrever como o firewall libera o retorno automático de uma conexão autorizada sem regra extra",
        "Identificar por que um pacote ACK sem sessão anterior é rejeitado como órfão",
        "Diferenciar inspeção de estado de firewall stateless em termos de memória de conexão"
      ],
      "competencias": [
        "Raciocínio sobre estado de conexão como critério de filtragem",
        "Atenção a detalhes: um pacote fora de contexto altera a decisão do firewall",
        "Julgamento de segurança: reconhecer que estado reduz regras, mas não substitui política de permissão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s1 (Firewall de pacotes) — base stateless contra a qual o stateful se contrapõe",
        "m4-u2-t2-s3 (Firewall de aplicação e WAF) — próxima camada, que já inspeciona o payload aplicacional"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com a diferença entre firewall stateless e stateful, o papel da tabela de estados e a rejeição de pacotes órfãos, com peso médio por combinar conceito teórico e aplicação prática de regras."
      }
    },
    "niveis": {
      "iniciante": "A inspeção de estado mantém uma tabela com as conexões em andamento, registrando origem, destino, porta e estado de cada uma (abertura, estabelecida, encerramento) com um tempo de expiração. Com isso, o administrador cria apenas uma regra para permitir novas conexões de saída e o firewall libera automaticamente o tráfego de retorno, porque reconhece que aquele pacote pertence a uma sessão que ele mesmo autorizou. O ganho é menos regras, menos erros de configuração e a rejeição de pacotes soltos que se passam por respostas de conexões que nunca existiram.",
      "intermediario": "O estado introduz o ciclo de vida da conexão TCP como critério de filtragem: o primeiro pacote de uma sessão passa pela regra explícita, cria uma entrada na tabela e os pacotes seguintes são liberados automaticamente por pertencerem a essa sessão. Isso reduz drasticamente o número de regras, mas traz limitações: a tabela consome memória proporcional ao número de conexões (podendo ser esgotada por ataques de volume), não inspeciona o conteúdo da aplicação e deixa tráfego cifrado opaco ao firewall.",
      "avancado": "Um ataque comum que o stateful bloqueia é o pacote TCP com flag ACK vindo de fora sem conexão anterior registrada: em um firewall stateless mal configurado ele seria aceito por uma regra genérica de retorno, mas o stateful o descarta como órfão porque não há sessão correspondente na tabela. O administrador deve dimensionar a tabela de estados para evitar esgotamento por rajadas de conexões e lembrar que o estado não substitui regras de permissão para novas conexões.",
      "especialista": "O especialista projeta a política de regras aproveitando o estado para cortar regras de retorno, define limites de taxa e timeouts adequados ao volume esperado, e complementa a inspeção de estado com mecanismos que vejam o payload (proxy, WAF ou IDS/IPS) quando for necessário analisar o conteúdo da aplicação, especialmente em tráfego não cifrado ou com descriptografia intermediária."
    },
    "comparacoes": [
      {
        "tema": "Firewall stateless versus inspeção de estado (stateful)",
        "a": {
          "rotulo": "Firewall stateless (filtro de pacotes)",
          "texto": "Avalia cada pacote isoladamente pelo cabeçalho (IP, protocolo, porta), sem memória de conexões; para permitir o retorno é necessário regra explícita no sentido oposto."
        },
        "b": {
          "rotulo": "Firewall stateful (inspeção de estado)",
          "texto": "Mantém uma tabela de conexões ativas e libera automaticamente o tráfego de retorno de sessões que ele mesmo autorizou, exigindo menos regras e rejeitando pacotes órfãos."
        },
        "diferencaGabarito": "O stateless não lembra conexões e exige regras para ambos os sentidos; o stateful lembra a sessão, automatiza o retorno e descarta pacotes que não correspondem a nenhuma conexão conhecida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A inspeção de estado substitui completamente a necessidade de regras de permissão para novas conexões.",
        "porqueErrada": "Confunde automação de retorno com dispensa de política: o estado apenas libera respostas de sessões já autorizadas, mas toda nova conexão de entrada ou saída ainda depende de uma regra explícita do administrador.",
        "versaoCorreta": "Errado. A inspeção de estado não substitui a política de permissão: ela somente automatiza o retorno de conexões que o próprio firewall autorizou, e toda nova conexão continua dependendo de uma regra explícita do administrador. Estado reduz regras, não elimina política."
      },
      {
        "afirmacaoEquivocada": "Como o firewall stateful lembra conexões, ele não pode ser sobrecarregado por volume de tráfego.",
        "porqueErrada": "Esquece que cada conexão ativa ocupa uma entrada na tabela de estados e consome memória; uma rajada de conexões pode esgotar a tabela, derrubar o firewall ou forçar timeouts, daí a necessidade de limites de taxa e dimensionamento adequado.",
        "versaoCorreta": "Errado. A tabela de estados consome memória proporcional ao número de conexões; ataques por volume de conexões podem estourá-la, por isso são necessários limites de taxa e dimensionamento correto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tabela de estados de conexão",
        "Ciclo de vida da conexão TCP",
        "Pacote órfão",
        "Timeout de entrada na tabela"
      ],
      "regras": [
        "Permitir apenas novas conexões de saída; o retorno é liberado automaticamente pelo estado",
        "Rejeitar pacotes ACK ou de retorno que não correspondam a sessão registrada",
        "Dimensionar a tabela de estados para evitar esgotamento por volume de conexões"
      ],
      "comparacoes": [
        "Stateless exige regras explícitas para ida e volta; stateful automatiza o retorno de sessões autorizadas"
      ],
      "fluxos": [
        "Pacote SYN de saída passa pela regra de novas conexões → firewall cria entrada na tabela de estados → pacotes de retorno são reconhecidos e liberados sem regra extra → ao encerrar, o registro expira por timeout"
      ],
      "excecoes": [
        "Não inspeciona o payload aplicacional; tráfego cifrado continua opaco quanto ao conteúdo",
        "O consumo de memória cresce com o número de conexões, tornando-a vetor de esgotamento"
      ],
      "palavrasChave": [
        "stateful",
        "inspeção de estado",
        "tabela de estados",
        "conexão TCP",
        "pacote órfão",
        "timeout",
        "stateless"
      ],
      "checklist": [
        "Criar regra apenas para novas conexões de saída",
        "Confirmar que o retorno de sessão autorizada e liberado automaticamente",
        "Rejeitar pacotes de retorno sem sessão registrada na tabela",
        "Definir timeouts adequados para cada estado de conexão",
        "Estabelecer limites de taxa para evitar esgotamento da tabela",
        "Complementar com inspeção de aplicação quando for preciso ver o payload"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um usuário abre um site pela primeira vez em um firewall com inspeção de estado. Descreva o que acontece com os pacotes de ida e de volta.",
        "dados": "Computador do usuário acessa um servidor web na Internet; firewall stateful com regra que permite novas conexões de saída para a Internet; nenhum registro prévio na tabela de estados.",
        "conceitos": [
          "Tabela de estados de conexão",
          "Ciclo de vida da conexão TCP",
          "Liberação automática de retorno"
        ],
        "estrategia": "Acompanhar o primeiro pacote SYN de saída, a criação do registro na tabela de estados e a liberação automática dos pacotes de resposta como parte da mesma sessão.",
        "execucao": [
          "O pacote SYN de saída passa pela regra que permite novas conexões de saída para a Internet",
          "O firewall cria um registro na tabela de estados com origem, destino, porta e estado SYN_SENT",
          "Quando o servidor responde, o firewall reconhece o pacote como parte da sessão já registrada e o libera sem regra extra",
          "Ao encerrar a conexão, o registro expira pelo timeout configurado"
        ],
        "resultado": "O primeiro pacote de saída é permitido pela regra explícita, cria entrada na tabela de estados, e todos os pacotes de resposta são reconhecidos como pertencentes àquela sessão e liberados automaticamente, sem necessidade de uma regra de retorno.",
        "justificativa": "Como o firewall se lembra da conexão ativa, ele pode identificar que os pacotes de volta pertencem a uma sessão que ele mesmo autorizou, eliminando a necessidade de escrever uma regra explícita para o sentido oposto.",
        "errosFrequentes": [
          "Achar que é preciso escrever uma regra explícita também para o tráfego de retorno",
          "Esquecer que o registro na tabela de estados expira por tempo e não dura indefinidamente"
        ],
        "variacao": "Um usuário acessa um servidor de e-mail pelo protocolo IMAP. Como o firewall stateful trata o tráfego de resposta?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um atacante envia pacotes TCP com flag ACK vindo da Internet para um servidor interno, sem que exista conexão anterior iniciada de dentro da rede. Avalie se esses pacotes entram em um firewall stateful bem configurado.",
        "dados": "Firewall stateful com regra genérica que permite tráfego de retorno; pacotes TCP com flag ACK originados de endereço externo para servidor interno; nenhuma entrada correspondente na tabela de estados.",
        "conceitos": [
          "Pacote órfão",
          "Rejeição de pacote sem sessão",
          "Firewall stateful bem configurado"
        ],
        "estrategia": "Verificar se há entrada na tabela de estados para a conexão alegada pelos pacotes ACK; como não há sessão anterior, os pacotes são descartados como órfãos, mesmo que exista uma regra permissiva genérica de retorno.",
        "execucao": [
          "Receber os pacotes TCP com flag ACK de origem externa",
          "Consultar a tabela de estados para verificar se existe sessão correspondente",
          "Confirmar que não existe conexão anterior registrada para aquele par de origem/destino",
          "Descartar os pacotes como orfãos, pois não pertencem a nenhuma sessão autorizada pelo firewall"
        ],
        "resultado": "Os pacotes ACK são descartados porque não existe conexão correspondente na tabela de estados: mesmo com uma regra permissiva genérica de retorno, o pacote não casa com nenhuma sessão autorizada e é tratado como pacote órfão.",
        "justificativa": "O estado do firewall exige que todo tráfego de retorno pertença a uma sessão previamente autorizada; sem registro de conexão, o pacote é rejeitado independentemente de regras genéricas de rede.",
        "errosFrequentes": [
          "Achar que a regra genérica de retorno basta para aceitar qualquer pacote ACK vindo de fora",
          "Esquecer que o firewall stateful verifica a tabela de estados antes de aplicar regras de rede"
        ],
        "variacao": "O mesmo ataque é direcionado a um firewall stateless mal configurado com regra genérica de retorno. Qual é o resultado?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A inspeção de estado substitui completamente a necessidade de regras de permissão para novas conexões.' Avalie se está correta.",
        "dados": "Alegação de que, como o firewall lembra conexões ativas, não seria mais necessário criar regras explícitas para permitir novas conexões de entrada ou saída.",
        "conceitos": [
          "Estado automatiza apenas o retorno",
          "Regra explicita para novas conexões",
          "Estado não substitui política de permissão"
        ],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que o estado apenas libera respostas de sessões já autorizadas, mas toda nova conexão ainda depende de regra explícita do administrador.",
        "execucao": [
          "Reconhecer que o estado automatiza apenas o retorno de conexões que o firewall mesmo autorizou",
          "Identificar que toda nova conexão de entrada ou saída continua dependendo de regra explicita",
          "Concluir que o estado reduz regras, mas não elimina a política de permissão"
        ],
        "resultado": "Errado. Um administrador que supõe que o estado dispensa regras de permissão deixa de criar a regra para uma nova conexão de saída, e o firewall bloqueia o tráfego inicial porque não existe sessão prévia autorizada na tabela de estados. O estado apenas libera respostas de sessões já permitidas; cada nova conexão de entrada ou saída exige sua própria regra explícita.",
        "justificativa": "Sem uma regra explícita permitindo a nova conexão, nunca haveria uma sessão para o estado lembrar, então a política de permissão permanece obrigatória para iniciar qualquer sessão.",
        "errosFrequentes": [
          "Achar que o estado dispensa completamente qualquer regra de firewall",
          "Confundir automação de retorno com dispensa de política de permissão para novas sessões"
        ],
        "variacao": "Afirmação: 'Como o firewall stateful bloqueia pacotes órfãos, não é necessário nenhuma outra regra de segurança na rede.'"
      }
    ]
  },
  "m4-u2-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O firewall de aplicação e o WAF são os únicos controles de rede que entendem o conteúdo do tráfego aplicacional: diferenciam um método HTTP legítimo de uma requisição malformada, bloqueam injeção de SQL e XSS, e atuam como proxy reverso na frente do servidor web. Em concursos, esse tópico aparece em questões sobre arquitetura de defesa por camadas, responsabilidade do WAF versus correção de código, e limitações como falsos positivos e fraudes por usuário autenticado. Confundir WAF com firewall de pacotes, ou acreditar que WAF corrige vulnerabilidades do aplicativo, leva ao gabarito errado.",
      "preRequisitos": [
        "O que é protocolo HTTP e seus métodos (GET, POST)",
        "Noção de proxy reverso e posicionamento entre cliente e servidor",
        "O que são injeção de SQL e scripts entre usuários (XSS)",
        "Diferença entre firewall de pacotes (cabeçalho) e firewall de aplicação (conteúdo)"
      ],
      "objetivosObservaveis": [
        "Diferenciar firewall de aplicação de firewall de pacotes por camada de atuação",
        "Explicar o papel do WAF como proxy reverso que inspeciona requisições e respostas HTTP(S)",
        "Citar ataques de camada aplicacional alvo do WAF: injeção de SQL, XSS, exploração de autenticação",
        "Reconhecer que WAF não corrige falhas de código e exige sintonia para reduzir falsos positivos"
      ],
      "competencias": [
        "Raciocínio por camadas de aplicação: entender gramática do protocolo e política por conteúdo",
        "Julgamento de responsabilidade: distinguir controle externo (WAF) de correção de causa raiz (código)",
        "Atenção a limitações: falsos positivos, fraudes por usuário autenticado e variação entre fabricantes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — camada anterior que filtra por conexao, sem ver o payload aplicacional",
        "m4-u2-t3-s1 (IDS e IPS) — detecção e prevenção de intrusão em rede, complemento ao controle de aplicação do WAF"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de segurança da informação, com a diferença entre firewall de pacotes e WAF, o papel do WAF contra injeção de SQL e XSS, e o limite de que WAF não corrige falhas de código, com peso médio por combinar conceito e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "O firewall de aplicação (ou proxy de aplicação) entende o protocolo da aplicação — HTTP, FTP, SMTP — e valida se o tráfego obedece à gramática do protocolo, aplicando políticas por conteúdo. O WAF é a especialização para aplicações web: fica na frente do site como proxy reverso, inspeciona requisições e respostas HTTP(S) e bloqueia padrões de ataque de camada aplicacional, como injeção de SQL e scripts entre usuários.",
      "intermediario": "O WAF aplica políticas baseadas em regras e, quando disponível, em conjuntos de regras de referência de ataques web. Posiciona-se entre o usuário e o servidor web. Seus limites são importantes: melhora a higiene do perímetro web, mas não corrige falhas de código — é um controle que compra tempo enquanto a aplicação é corrigida; exige sintonia para reduzir falsos positivos; e não protege contra fraudes cometidas por usuário já autenticado em um aplicativo legítimo.",
      "avancado": "Como capacidades variam entre fabricantes e versões, generalizar um recurso de um produto é erro comum em provas. O WAF deve ser ajustado continuamente: verificar logs para identificar falsos positivos, usar modo de observação antes do bloqueio estrito, excluir falsos positivos documentados e manter revisão periódica da política, sem desativar a proteção inteira como atalho.",
      "especialista": "O especialista posiciona o WAF como parte de defesa em profundidade, nunca como substituto da revisão de código, validação de entrada e consulta parametrizada ao banco. Combina WAF com outros controles de camada de aplicação e define responsabilidades claras: o WAF bloqueia padrões conhecidos, mas a causa raiz de vulnerabilidades só é eliminada no código da aplicação."
    },
    "comparacoes": [
      {
        "tema": "Firewall de pacotes versus firewall de aplicação / WAF",
        "a": {
          "rotulo": "Firewall de pacotes",
          "texto": "Decide com base no cabeçalho do pacote: endereços IP, protocolo e portas. Não enxerga o conteúdo da aplicação nem o payload cifrado."
        },
        "b": {
          "rotulo": "Firewall de aplicação / WAF",
          "texto": "Entende o protocolo da aplicação (HTTP, FTP, SMTP), valida a gramática do protocolo e aplica políticas por conteúdo, bloqueando injeção de SQL, XSS e falhas de autenticação."
        },
        "diferencaGabarito": "O firewall de pacotes filtra por endereço e porta; o WAF inspeciona o conteúdo aplicacional e bloqueia ataques de camada de aplicação que o firewall de pacotes não enxerga."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com WAF instalado, a aplicação fica imune a falhas de desenvolvimento.",
        "porqueErrada": "Confunde controle externo com correção de causa raiz: o WAF bloqueia padrões conhecidos, mas falhas lógicas novas ou padrões desconhecidos podem passar; a correção exige revisão de código, validação de entrada e gestão de dependências.",
        "versaoCorreta": "Errado como afirmação absoluta. O WAF é um controle externo baseado em padrões; falha lógica nova ou padrão desconhecido pode passar, então a segurança da aplicação depende de revisão de código, validação de entrada e gestão de dependências, com o WAF como complemento."
      },
      {
        "afirmacaoEquivocada": "WAF em modo bloqueio estrito pode ser ativado e deixado sem ajuste, pois bloqueia tudo que é perigoso.",
        "porqueErrada": "Esquece que o WAF produz falsos positivos: tráfego legítimo pode ser bloqueado, causando erros em formulários e serviços. É obrigatório passar por modo de observação, ajustar políticas e revisar periodicamente, sem desativar a proteção inteira como atalho.",
        "versaoCorreta": "Errado. O WAF exige sintonia para reduzir falsos positivos; ativar bloqueio estrito sem ajuste pode bloquear tráfego legítimo, exigindo verificação de logs, modo de observação e revisão periódica da política."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Firewall de aplicação",
        "Proxy reverso",
        "WAF (Web Application Firewall)",
        "Injeção de SQL",
        "Scripts entre usuários (XSS)",
        "Falso positivo"
      ],
      "regras": [
        "Inspecionar requisições e respostas HTTP(S) em busca de padrões de ataque",
        "Aplicar políticas baseadas em regras e conjuntos de referência de ataques web",
        "Usar modo de observação antes de ativar bloqueio estrito",
        "Revisar periodicamente a política do WAF sem desativar a proteção inteira"
      ],
      "comparacoes": [
        "Firewall de pacotes enxerga cabeçalho; WAF enxerga o conteúdo da aplicação"
      ],
      "fluxos": [
        "Requisição HTTP chega ao WAF → inspeção por padrões de ataque → bloqueio ou passagem → resposta do servidor web também é inspecionada"
      ],
      "excecoes": [
        "Não protege contra fraudes feitas por usuário já autenticado em aplicativo legítimo",
        "Capacidades variam entre fabricantes e versões; não generalizar recurso de um produto"
      ],
      "palavrasChave": [
        "WAF",
        "firewall de aplicação",
        "proxy reverso",
        "HTTP",
        "injeção de SQL",
        "XSS",
        "falso positivo"
      ],
      "checklist": [
        "Posicionar o WAF como proxy reverso na frente do servidor web",
        "Inspecionar requisições e respostas HTTP(S)",
        "Bloquear padrões de injeção de SQL e XSS",
        "Ativar modo de observação antes do bloqueio estrito",
        "Ajustar políticas para reduzir falsos positivos",
        "Revisar periodicamente a política do WAF",
        "Não confiar no WAF para corrigir falhas de código da aplicação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um formulário público recebe um parâmetro que vira consulta direta ao banco de dados. Que ferramenta intercepta o padrão de ataque e quem corrige a causa raiz?",
        "dados": "Formulário público com parâmetro usado em consulta direta ao banco; risco de injeção de SQL via requisição HTTP.",
        "conceitos": [
          "WAF",
          "Injeção de SQL",
          "Consulta parametrizada"
        ],
        "estrategia": "Identificar que o WAF inspeciona a requisição HTTP e bloqueia a sintaxe típica de injeção de SQL, enquanto a correção da causa raiz cabe ao código da aplicação, com consulta parametrizada e validação de entrada.",
        "execucao": [
          "O WAF inspeciona a requisição HTTP entrante e identifica a sintaxe típica de injeção de SQL",
          "O WAF bloqueia a requisição malformada antes que chegue ao servidor web",
          "A causa raiz é corrigida no código: uso de consulta parametrizada, validação de entrada e permissão mínima do banco",
          "O WAF não substitui a correção do código da aplicação"
        ],
        "resultado": "O WAF pode bloquear a sintaxe típica de injeção de SQL inspecionando a requisição HTTP, mas a causa raiz é corrigida no código com consulta parametrizada, validação de entrada e permissão mínima do banco.",
        "justificativa": "O WAF atua como controle externo que bloqueia padrões conhecidos, enquanto a eliminação da vulnerabilidade depende de mudanças no código da aplicação.",
        "errosFrequentes": [
          "Achar que o WAF por si só elimina a vulnerabilidade de injeção de SQL",
          "Esquecer que a correção da causa raiz depende do código, não apenas do WAF"
        ],
        "variacao": "Um formulário permite upload de arquivo sem validação de extensão. Que controle de aplicação bloqueia e quem corrige?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O portal de transparência de um órgão passa a exibir erro 500 em formulários após ativar o WAF em modo bloqueio estrito. Como a equipe deve proceder?",
        "dados": "Portal de transparência com formulários exibindo erro 500; WAF ativado em modo bloqueio estrito; suspeita de falsos positivos bloqueando tráfego legítimo.",
        "conceitos": [
          "Falso positivo",
          "Modo de observação",
          "Revisão de política do WAF"
        ],
        "estrategia": "Verificar os logs do WAF para identificar regras que casam com tráfego legítimo, passar para modo de observação para ajustar, excluir falsos positivos documentados, reativar o bloqueio e manter revisão periódica da política, sem desativar a proteção inteira.",
        "execucao": [
          "Verificar logs do WAF para identificar regras que casam com tráfego legítimo (falsos positivos)",
          "Passar o WAF para modo de observação para ajustar as políticas",
          "Excluir falsos positivos documentados das regras de bloqueio",
          "Reativar o bloqueio após o ajuste e manter revisão periódica da política"
        ],
        "resultado": "A equipe verifica os logs do WAF, identifica falsos positivos, passa para modo de observação, ajusta as políticas, exclui falsos positivos documentados, reativa o bloqueio e mantém revisão periódica — sem desativar a proteção inteira como atalho.",
        "justificativa": "O modo bloqueio estrito sem sintonia gera falsos positivos que bloqueiam tráfego legítimo; o procedimento correto é ajustar gradualmente, preservando a proteção.",
        "errosFrequentes": [
          "Desativar o WAF inteiro como atalho ao enfrentar erros 500",
          "Esquecer de revisar os logs antes de alterar a política de bloqueio"
        ],
        "variacao": "Após o ajuste, um novo formulário começa a apresentar erro intermitente. Qual o próximo passo da equipe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Com WAF, a aplicação fica imune a falhas de desenvolvimento.' Avalie se está correta.",
        "dados": "Alegação de que o WAF, por inspecionar o tráfego HTTP, elimina todas as vulnerabilidades de código da aplicação web.",
        "conceitos": [
          "WAF não corrige código",
          "Falha lógica nova",
          "Padrão desconhecido pode passar"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que o WAF é controle externo baseado em padrões; falhas lógicas novas ou padrões desconhecidos podem passar, exigindo revisão de código e validação de entrada.",
        "execucao": [
          "Reconhecer que o WAF é controle externo e baseado em padrões de ataque",
          "Identificar que falha lógica nova ou padrão desconhecido pode passar pelo WAF",
          "Concluir que segurança de aplicação exige revisão de código, validação de entrada e gestão de dependências"
        ],
        "resultado": "Errado. WAF é controle externo e baseado em padrões; falha lógica nova ou padrão desconhecido pode passar. Segurança de aplicação exige revisão de código, validação de entrada e gestão de dependências — o WAF complementa, não corrige.",
        "justificativa": "O WAF bloqueia padrões conhecidos, mas não elimina vulnerabilidades de código; apenas ganha tempo enquanto a aplicação é corrigida.",
        "errosFrequentes": [
          "Achar que o WAF substitui a correção de vulnerabilidades no código",
          "Esquecer que padrões de ataque desconhecidos podem passar pelo WAF"
        ],
        "variacao": "Afirmação: 'Como o WAF bloqueia injeção de SQL, não é necessário usar consulta parametrizada no banco de dados.'"
      }
    ]
  }
};
