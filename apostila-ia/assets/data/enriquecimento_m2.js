const enriquecimentoM2 = {
  "m2-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os termos de rede, nó, enlace, cliente e servidor são o vocabulário base de todo o módulo de Redes de Computadores. Sem essa definição clara, o aluno não consegue entender protocolos, camadas de rede, topologias nem procedimentos de diagnóstico de conectividade. Questões de concursos costumam partir justamente da identificação correta de quem solicita e quem fornece um recurso, e da distinção entre dispositivo final e dispositivo que apenas encaminha tráfego. Erros nessa etapa prejudicam o raciocínio em todas as unidades seguintes.",
      "preRequisitos": [
        "Noções gerais de computação (dispositivo, programa, arquivo)"
      ],
      "objetivosObservaveis": [
        "Definir rede de computadores",
        "Distinguir nó de enlace",
        "Diferenciar cliente de servidor",
        "Descrever o fluxo requisição-resposta"
      ],
      "competencias": [
        "Vocabulário de redes",
        "Leitura de topologias simples"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "m2-u1-t1-s2 (Classificação de redes: LAN, WLAN, MAN, WAN, PAN) — unidade seguinte do mesmo tópico"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Conceitos fundamentais de rede (nó, enlace, cliente, servidor, requisição-resposta) integram o conteúdo programático de redes e são pré-requisitos para entender protocolos, camadas e diagnóstico de conectividade; a classificação é uma estimativa pedagógica qualitativa de centralidade conceitual, não uma frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Rede de computadores é um conjunto de dispositivos autônomos interconectados que compartilham recursos e trocam informação. Nó (node) é cada dispositivo conectado — computador, servidor, impressora, roteador, switch — e classifica-se em nó final (origem ou destino do tráfego) ou intermediário (que apenas encaminha). Enlace (link) é o canal de comunicação entre nós, físico (cabo de par trançado, fibra, coaxial) ou sem fio (rádio). Cliente é o dispositivo que solicita um recurso ou serviço; servidor é o que fornece. A interação segue o modelo requisição-resposta: o cliente envia um pedido, o servidor processa e devolve uma resposta. Essa assimetria de papéis é lógica, não física: um mesmo computador pode ser cliente em uma interação e servidor em outra. Compartilhar recursos (arquivos, impressoras, acesso à Internet) e permitir comunicação são as motivações centrais das redes.",
      "intermediario": "O aluno deve distinguir nó final de nó intermediário em um diagrama simples: o nó final gera ou consome dados (computador, impressora, servidor de arquivos), enquanto o nó intermediário (roteador, switch) apenas encaminha tráfego em nome de outros. Também deve diferenciar cliente de servidor observando a função exercida na interação, não o tamanho ou tipo do equipamento. Um servidor de arquivos pode, em outro momento, atuar como cliente ao consultar um servidor de banco de dados. O enlace pode ser físico (cabo Cat6, fibra, coaxial) ou sem fio (Wi-Fi, rádio), e essa diferença afeta a escolha da tecnologia de rede em cenários organizacionais.",
      "avancado": "O papel de cliente ou servidor depende da interação, não do hardware: qualquer dispositivo que fornece um serviço é servidor naquela interação, e qualquer dispositivo que solicita é cliente. Um mesmo computador pode exercer ambos os papéis em interações distintas (ex.: um servidor web que consulta um servidor de banco de dados funciona como cliente nesse segundo caso). O modelo requisição-resposta se repete em múltiplas camadas e protocolos. O aluno avançado deve reconhecer que a classificação em nó final ou intermediário muda a interpretação de um diagrama de rede e a localização de possíveis falhas de conectividade.",
      "especialista": "O especialista identifica gargalos analisando quais enlaces concentram o tráfego entre clientes e servidores, avaliando se o ponto de estrangulamento está no enlace físico, no nó intermediário ou na capacidade de resposta do servidor. Consegue projetar topologias simples considerando a assimetria lógica cliente-servidor e a redundância de enlaces. Discute trade-offs entre enlaces com fio e sem fio em termos de largura de banda, latência e interferência, e reconhece que a motivação central da rede — compartilhar recursos e permitir comunicação — orienta toda a arquitetura de protocolos e camadas."
    },
    "comparacoes": [
      {
        "tema": "nó final x nó intermediário",
        "a": {
          "rotulo": "Nó final",
          "texto": "É o dispositivo origem ou destino do tráfego: computador, servidor de arquivos, impressora. Gera ou consome dados."
        },
        "b": {
          "rotulo": "Nó intermediário",
          "texto": "É o dispositivo que apenas encaminha tráfego em nome de outros: roteador, switch. Não gera nem consome os dados que transporta."
        },
        "diferencaGabarito": "O nó final é ponto de origem ou destino da comunicação; o nó intermediário apenas repassa pacotes entre outros nós. Essa classificação muda a interpretação do diagrama e a localização de falhas."
      },
      {
        "tema": "cliente x servidor",
        "a": {
          "rotulo": "Cliente",
          "texto": "Dispositivo que solicita um recurso ou serviço (ex.: estação de trabalho acessando uma página web)."
        },
        "b": {
          "rotulo": "Servidor",
          "texto": "Dispositivo que fornece um recurso ou serviço (ex.: servidor de arquivos, servidor DNS/DHCP)."
        },
        "diferencaGabarito": "Os papéis são definidos pela interação, não pelo hardware: um mesmo computador pode ser cliente em uma interação e servidor em outra."
      },
      {
        "tema": "enlace físico x enlace lógico",
        "a": {
          "rotulo": "Enlace físico",
          "texto": "É o meio de transmissão entre nós: cabo de par trançado, fibra óptica, cabo coaxial, rádio."
        },
        "b": {
          "rotulo": "Enlace lógico",
          "texto": "É a ligação estabelecida entre camadas ou protocolos que permite a troca de informação sobre o meio físico."
        },
        "diferencaGabarito": "O enlace físico é o suporte material; o enlace lógico é a ligação protocolar estabelecida entre camadas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Servidor é sempre um computador grande e dedicado.",
        "porqueErrada": "O papel de servidor é definido pela função exercida na interação (fornecer um recurso ou serviço), não pelo tamanho nem pelo tipo de equipamento. Qualquer dispositivo que forneça um serviço é servidor naquela interação.",
        "versaoCorreta": "Qualquer dispositivo que fornece um serviço é servidor naquela interação, independentemente de ser um computador grande e dedicado."
      },
      {
        "afirmacaoEquivocada": "Switch e roteador são nós finais.",
        "porqueErrada": "Switch e roteador são dispositivos intermediários: encaminham tráfego em nome de outros nós, sem gerar nem consumir os dados que transportam. Nós finais são os que iniciam ou recebem a comunicação.",
        "versaoCorreta": "Switch e roteador são nós intermediários, porque apenas encaminham tráfego em nome de outros nós; não são pontos de origem ou destino dos dados."
      },
      {
        "afirmacaoEquivocada": "Rede exige cabo.",
        "porqueErrada": "O enlace entre nós pode ser físico (cabo de par trançado, fibra, coaxial) ou sem fio (rádio, Wi-Fi). A ausência de cabo não impede a existência de uma rede de computadores.",
        "versaoCorreta": "O enlace pode ser físico ou sem fio; uma rede de computadores não exige cabo, pois enlaces sem fio (Wi-Fi, rádio) também interconectam nós."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "rede de computadores",
        "nó",
        "enlace",
        "cliente",
        "servidor"
      ],
      "regras": [
        "cliente solicita um recurso ou serviço",
        "servidor fornece um recurso ou serviço",
        "o cliente envia um pedido e o servidor devolve uma resposta"
      ],
      "comparacoes": [
        "nó final gera/consuma dados; nó intermediário apenas encaminha",
        "cliente x servidor: papéis definidos pela interação, não pelo hardware"
      ],
      "fluxos": [
        "cliente envia requisição",
        "servidor processa a requisição",
        "servidor devolve resposta ao cliente"
      ],
      "excecoes": [
        "os papéis de cliente e servidor podem se inverter entre interações distintas",
        "um mesmo computador pode ser cliente em uma interação e servidor em outra"
      ],
      "palavrasChave": [
        "dispositivo",
        "canal",
        "serviço",
        "comunicação",
        "compartilhamento",
        "requisição-resposta"
      ],
      "checklist": [
        "Defino o que é rede de computadores?",
        "Distinguo nó de enlace?",
        "Diferencio cliente de servidor?",
        "Descrevo o fluxo requisição-resposta?",
        "Reconheço que um mesmo computador pode ser cliente e servidor?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar os componentes de uma rede doméstica simples com um roteador e 3 computadores.",
        "dados": "1 roteador, 3 computadores ligados por cabos Ethernet ou Wi-Fi; cada computador acessa páginas web; o roteador também oferece serviços DNS/DHCP.",
        "conceitos": [
          "rede de computadores",
          "nó",
          "enlace",
          "cliente",
          "servidor"
        ],
        "estrategia": "Contar todos os dispositivos conectados para identificar os nós; verificar quais enlaces (físicos ou sem fio) os ligam; observar quem solicita páginas web (cliente) e quem fornece DNS/DHCP (servidor).",
        "execucao": [
          "1) Listar os dispositivos: roteador + 3 computadores = 4 nós.",
          "2) Identificar os enlaces: cabos Ethernet ou Wi-Fi entre roteador e computadores.",
          "3) Classificar os computadores como clientes ao acessarem páginas web.",
          "4) Classificar o roteador como servidor ao fornecer DNS/DHCP local."
        ],
        "resultado": "Nós: roteador + 3 computadores (4 nós). Enlaces: cabos Ethernet ou Wi-Fi. Clientes: computadores ao acessarem páginas web. Servidor: o roteador como servidor DNS/DHCP local, e servidores remotos (ex: Google DNS 8.8.8.8).",
        "justificativa": "O gabarito distingue cada dispositivo por sua função na interação: quem pede páginas web é cliente, quem fornece DNS/DHCP é servidor, e o roteador desempenha o papel de servidor na rede local ao prover esses serviços internos.",
        "errosFrequentes": [
          "Considerar o roteador apenas como intermediário e não reconhecer seu papel de servidor DNS/DHCP local.",
          "Contar apenas os computadores como nós e esquecer o próprio roteador."
        ],
        "variacao": "Substituir o roteador por um switch e adicionar um servidor de arquivos dedicado; o aluno deve identificar o servidor de arquivos como servidor e as estações como clientes."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa tem 20 estações de trabalho, 1 servidor de arquivos e 1 impressora de rede. Mapear clientes e servidores.",
        "dados": "20 estações de trabalho, 1 servidor de arquivos, 1 impressora de rede; enlaces por cabos Cat6 ou Wi-Fi; estações acessam arquivos e enviam impressões.",
        "conceitos": [
          "cliente",
          "servidor",
          "nó",
          "enlace"
        ],
        "estrategia": "Listar todos os dispositivos como nós; classificar o servidor de arquivos e o servidor de impressão como servidores porque fornecem recursos; classificar as estações como clientes quando solicitam arquivos ou impressões; identificar os enlaces que interconectam tudo.",
        "execucao": [
          "1) Contabilizar todos os dispositivos: 20 estações + 1 servidor de arquivos + 1 impressora = nós da rede.",
          "2) Classificar o servidor de arquivos como servidor (fornece arquivos).",
          "3) Classificar o servidor de impressão como servidor (gerencia a impressora de rede).",
          "4) Classificar as 20 estações como clientes ao acessarem arquivos ou enviarem impressões.",
          "5) Identificar enlaces: cabos Cat6 ou Wi-Fi entre todos os dispositivos."
        ],
        "resultado": "Servidores: servidor de arquivos (fornece arquivos) e servidor de impressão (gerencia impressora). Clientes: as 20 estações ao acessarem arquivos ou enviarem impressões. Nós: todos os dispositivos. Enlaces: cabos Cat6 ou Wi-Fi.",
        "justificativa": "O gabarito identifica quem fornece o recurso (servidor de arquivos fornece arquivos; servidor de impressão gerencia a impressora) e quem solicita (estações), sem confundir o hardware com o papel exercido na interação.",
        "errosFrequentes": [
          "Acreditar que a impressora de rede é um servidor por si só, quando na verdade é um recurso gerenciado por um servidor de impressão.",
          "Classificar todas as estações como servidores apenas porque estão conectadas à rede."
        ],
        "variacao": "Adicionar um roteador entre as estações e os servidores; o aluno deve classificar o roteador como nó intermediário que apenas encaminha tráfego, não como cliente nem servidor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: \"Em uma rede P2P (peer-to-peer), não há distinção entre cliente e servidor.\"",
        "dados": "Rede P2P (exemplo: BitTorrent) em que cada nó pode solicitar arquivos (cliente) e fornecer arquivos (servidor) ao mesmo tempo.",
        "conceitos": [
          "cliente",
          "servidor",
          "rede P2P",
          "papel lógico"
        ],
        "estrategia": "Reconhecer que a afirmação confunde a ausência de servidores dedicados com a ausência de papéis; em P2P os papéis cliente e servidor existem, mas são dinâmicos e podem coexistir no mesmo nó.",
        "execucao": [
          "1) Identificar que a afirmação nega qualquer distinção entre cliente e servidor em P2P.",
          "2) Lembrar que, em redes P2P como BitTorrent, um nó baixa arquivos de outros (age como cliente) e envia partes para outros (age como servidor).",
          "3) Concluir que os papéis não são eliminados, apenas tornam-se dinâmicos e simultâneos no mesmo nó."
        ],
        "resultado": "Parcialmente incorreto. Em P2P cada nó pode ser cliente E servidor simultaneamente (ex: BitTorrent), mas isso não elimina os papéis — apenas os torna dinâmicos. Um nó pode solicitar (cliente) e fornecer (servidor) ao mesmo tempo.",
        "justificativa": "O erro está em concluir que não há distinção entre papéis; na P2P a distinção continua válida por interação, mas um mesmo nó pode exercer ambos os papéis ao mesmo tempo, ao contrário do modelo cliente-servidor estático.",
        "errosFrequentes": [
          "Interpretar a ausência de servidores dedicados em P2P como ausência total de papéis cliente/servidor.",
          "Acreditar que um nó em P2P só pode ser cliente OU servidor, nunca ambos ao mesmo tempo."
        ],
        "variacao": "Apresentar uma rede cliente-servidor clássica e perguntar se um servidor de banco de dados que consulta um serviço de autenticação externo também atua como cliente; o aluno deve reconhecer a inversão de papéis por interação."
      }
    ]
  },
  "m2-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Saber classificar redes por abrangência geográfica (PAN, LAN, WLAN, MAN, WAN) e por escopo de acesso (intranet, extranet) é essencial para interpretar questões de concursos que apresentam cenários organizacionais e pedem a identificação correta do tipo de rede. A confusão entre intranet e extranet é recorrente e pode levar o aluno a errar itens sobre controle de acesso, autenticação e alcance organizacional. Sem essa classificação, o aluno não consegue dimensionar redes nem compreender a arquitetura da Internet como interconexão de redes menores.",
      "preRequisitos": [
        "Conceito de rede de computadores",
        "Nó e enlace"
      ],
      "objetivosObservaveis": [
        "Definir cada classificação de rede (PAN, LAN, WLAN, MAN, WAN)",
        "Dar um exemplo concreto de cada tipo",
        "Distinguir intranet de extranet",
        "Relacionar alcance geográfico e uso organizacional"
      ],
      "competencias": [
        "Classificação de redes",
        "Leitura de cenários organizacionais"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "m2-u1-t1-s1 (Definição de rede e componentes básicos) — base conceitual da mesma unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação de redes por abrangência (LAN, WAN, MAN, PAN, WLAN) e distinção entre intranet e extranet integram o conteúdo programático de redes de TI, especialmente em questões de interpretação de cenários organizacionais; a classificação é uma estimativa pedagógica qualitativa de adequação ao conteúdo programático, não uma frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "LAN (Local Area Network): rede local, limitada a um edifício ou campus (ex: rede doméstica). WLAN (Wireless LAN): LAN sem fio (ex: Wi-Fi). MAN (Metropolitan Area Network): rede metropolitana, cobre uma cidade (ex: rede de uma prefeitura). WAN (Wide Area Network): rede de longa distância, cobre países ou continentes (ex: a Internet). PAN (Personal Area Network): rede pessoal, curto alcance, tipicamente poucos metros (ex: celular e fone por Bluetooth). Intranet: rede interna privada de uma organização, que usa protocolos TCP/IP para serviços internos. Extranet: extensão controlada da intranet para parceiros, fornecedores ou clientes externos, mediante autenticação e regras de acesso. LAN/WAN/MAN descrevem alcance físico-geográfico; intranet/extranet descrevem o escopo de acesso (quem pode entrar). Os critérios são independentes: uma intranet pode apoiar-se em LANs e WANs.",
      "intermediario": "O aluno deve associar cada classificação a um exemplo concreto e diferenciar alcance geográfico de escopo de acesso. PAN cobre poucos metros (dispositivos pessoais por Bluetooth); LAN cobre um edifício ou campus; WLAN é uma LAN cujos enlaces são sem fio, como o Wi-Fi; MAN cobre uma cidade ou região metropolitana; WAN cobre longas distâncias, países ou continentes, sendo a Internet o exemplo maior. Intranet é privada e restrita aos membros da organização; extranet estende o acesso a terceiros autorizados (parceiros, fornecedores, clientes) com autenticação. Uma WLAN não se opõe a LAN: é um tipo de LAN que difere apenas pelo meio sem fio.",
      "avancado": "O aluno avançado distingue alcance físico-geográfico (PAN→LAN→MAN→WAN) de escopo de acesso (intranet/extranet), reconhecendo que são critérios independentes. Uma intranet pode ser construída sobre LANs e WANs, e a Internet é uma WAN pública que interliga redes menores. O aluno deve analisar cenários organizacionais e indicar qual classificação se aplica a cada segmento, considerando autenticação, regras de acesso e tecnologias TCP/IP usadas internamente.",
      "especialista": "O especialista analisa a arquitetura de uma rede organizacional combinando LAN, WAN, intranet e extranet, definindo segmentos por alcance geográfico e por escopo de acesso. Discute a implantação de extranets com VPN sobre Internet versus circuitos dedicados (MPLS, fibra alugada) para interconectar matriz e filiais em cidades distintas. Avalia como a Internet, como WAN pública, serve de backbone para interconexão de redes menores, e como o controle de acesso e autenticação separa intranet de extranet mesmo quando usam os mesmos protocolos TCP/IP."
    },
    "comparacoes": [
      {
        "tema": "LAN x WLAN",
        "a": {
          "rotulo": "LAN",
          "texto": "Rede local com alcance em um ambiente, edifício ou campus; enlaces podem ser com fio ou sem fio."
        },
        "b": {
          "rotulo": "WLAN",
          "texto": "Tipo de LAN cujos enlaces são sem fio, como o Wi-Fi; a diferença em relação à LAN é o meio, não o alcance."
        },
        "diferencaGabarito": "A WLAN é um tipo de LAN sem fio; a diferença está no meio de transmissão, não no alcance geográfico."
      },
      {
        "tema": "intranet x extranet",
        "a": {
          "rotulo": "Intranet",
          "texto": "Rede interna privada de uma organização, usando protocolos TCP/IP para serviços internos, acesso restrito a membros da organização."
        },
        "b": {
          "rotulo": "Extranet",
          "texto": "Extensão controlada da intranet para parceiros, fornecedores ou clientes externos, mediante autenticação e regras de acesso."
        },
        "diferencaGabarito": "A intranet é interna e privada; a extranet estende o acesso a terceiros autorizados, mudando quem pode entrar."
      },
      {
        "tema": "MAN x WAN",
        "a": {
          "rotulo": "MAN",
          "texto": "Rede metropolitana que cobre uma cidade ou região metropolitana (ex: rede de uma prefeitura)."
        },
        "b": {
          "rotulo": "WAN",
          "texto": "Rede de longa distância que cobre países ou continentes (ex: a Internet); alcance maior que a MAN."
        },
        "diferencaGabarito": "A MAN cobre uma cidade; a WAN cobre distâncias maiores, países ou continentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Intranet e Internet são a mesma coisa, só muda o nome.",
        "porqueErrada": "A intranet é uma rede privada interna de uma organização, não acessível publicamente, enquanto a Internet é a rede pública global. Elas usam tecnologias semelhantes (TCP/IP), mas diferem no acesso: a intranet é restrita, a Internet é aberta ao público.",
        "versaoCorreta": "Errado. A intranet é uma rede privada interna de uma organização, não acessível publicamente; a Internet é a rede pública global. Ambas usam protocolos TCP/IP, mas a intranet tem acesso restrito."
      },
      {
        "afirmacaoEquivocada": "WLAN e LAN se opõem.",
        "porqueErrada": "WLAN não se opõe a LAN: WLAN (Wireless LAN) é um tipo de LAN que usa comunicação sem fio. A diferença entre elas é o meio de transmissão (sem fio vs. com fio), não o alcance nem a natureza da rede.",
        "versaoCorreta": "Errado. WLAN é um tipo de LAN que usa comunicação sem fio (ex: Wi-Fi); não se opõe à LAN, apenas difere pelo meio sem fio."
      },
      {
        "afirmacaoEquivocada": "Extranet é aberta a qualquer um.",
        "porqueErrada": "A extranet é uma extensão controlada da intranet para parceiros, fornecedores ou clientes externos. O acesso não é livre: depende de autenticação e de regras de acesso definidas pela organização.",
        "versaoCorreta": "Errado. A extranet não é aberta a qualquer um; o acesso é controlado, restrito a parceiros autorizados, mediante autenticação e regras de acesso."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "PAN",
        "LAN",
        "WLAN",
        "MAN",
        "WAN",
        "intranet",
        "extranet"
      ],
      "regras": [
        "alcançe geográfico define PAN, LAN, WLAN, MAN, WAN",
        "escopo de acesso define intranet (interna) e extranet (terceiros autorizados)",
        "critérios de alcance e de escopo são independentes"
      ],
      "comparacoes": [
        "WLAN é um tipo de LAN sem fio",
        "intranet é interna; extranet estende acesso a terceiros controlados"
      ],
      "fluxos": [
        "dispositivos pessoais se conectam por Bluetooth (PAN)",
        "estações se conectam a rede local por cabo ou Wi-Fi (LAN/WLAN)",
        "sede e filial se interconectam por WAN (Internet com VPN ou circuito dedicado)"
      ],
      "excecoes": [
        "a Internet é uma WAN pública que interliga redes menores",
        "uma intranet pode apoiar-se em LANs e WANs"
      ],
      "palavrasChave": [
        "abrangência",
        "Wi-Fi",
        "privada",
        "parceiros",
        "TCP/IP",
        "escopo de acesso"
      ],
      "checklist": [
        "Defino cada tipo de rede (PAN, LAN, WLAN, MAN, WAN)?",
        "Dou exemplos concretos de cada classificação?",
        "Distinguo intranet de extranet?",
        "Relaciono alcance geográfico e uso organizacional?",
        "Reconheço que a Internet é uma WAN pública?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classificar corretamente a rede de uma universidade com 5 campi distribuídos por uma única cidade.",
        "dados": "5 campi da mesma universidade em uma única cidade; cada campus tem rede local; os campi estão interconectados; a rede interna da universidade é privada.",
        "conceitos": [
          "LAN",
          "WLAN",
          "MAN",
          "intranet"
        ],
        "estrategia": "Identificar que cada campus possui sua própria LAN (ou WLAN, se usar Wi-Fi); verificar que a interconexão entre campi na mesma cidade configura uma MAN; reconhecer que a rede interna privada da universidade é uma intranet.",
        "execucao": [
          "1) Cada campus tem uma LAN (ou WLAN, se os enlaces forem sem fio/Wi-Fi).",
          "2) A interconexão entre campi na mesma cidade é uma MAN (rede metropolitana).",
          "3) Se os campi estivessem em cidades diferentes, a interconexão seria uma WAN.",
          "4) A rede interna privada da universidade, usando TCP/IP para serviços internos, é uma intranet."
        ],
        "resultado": "Cada campus tem uma LAN (ou WLAN). A interconexão entre campi é uma MAN (se a cidade for pequena) ou WAN (se os campi estiverem em cidades diferentes). A rede interna da universidade é uma intranet.",
        "justificativa": "O gabarito classifica cada nível pela abrangência: LAN dentro do campus, MAN entre campi da mesma cidade, WAN entre cidades, e intranet pelo escopo de acesso interno privado da organização.",
        "errosFrequentes": [
          "Classificar a interconexão entre campi da mesma cidade como WAN em vez de MAN.",
          "Acreditar que toda rede que usa TCP/IP é Internet, sem reconhecer que a rede privada da universidade é uma intranet."
        ],
        "variacao": "Alterar o cenário para campi em cidades diferentes; o aluno deve reclassificar a interconexão como WAN em vez de MAN."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa com matriz em São Paulo e filial em Rio de Janeiro precisa conectar suas redes. Que tipo de rede usar?",
        "dados": "matriz em São Paulo, filial em Rio de Janeiro, redes locais já existentes em cada local; necessidade de interconectar as duas redes geograficamente distantes; opções: Internet com VPN ou circuito dedicado (MPLS, fibra alugada).",
        "conceitos": [
          "WAN",
          "LAN",
          "intranet",
          "VPN"
        ],
        "estrategia": "Reconhecer que São Paulo e Rio de Janeiro são cidades distintas, portanto a interconexão é de longa distância; classificar como WAN; avaliar que a conexão pode ser feita pela Internet pública com VPN para segurança ou por circuito dedicado (MPLS, fibra alugada).",
        "execucao": [
          "1) Identificar que matriz e filial estão em cidades geograficamente distantes (São Paulo e Rio de Janeiro).",
          "2) Classificar a interconexão como WAN, pois abrange longa distância entre cidades.",
          "3) Considerar a opção de usar a Internet pública com VPN para garantir segurança na transmissão.",
          "4) Considerar a opção de circuito dedicado (MPLS ou fibra alugada) como alternativa à Internet pública.",
          "5) Concluir que a rede corporativa combinada permanece como intranet, agora interligada por uma WAN."
        ],
        "resultado": "WAN — interconexão entre redes geograficamente distantes. Pode ser via Internet (com VPN para segurança) ou via circuito dedicado (MPLS, fibra alugada).",
        "justificativa": "O gabarito identifica a WAN como a classificação correta para interconexão de redes em cidades distintas, e apresenta as duas alternativas de implementação (Internet com VPN ou circuito dedicado) sem inventar estatísticas de uso.",
        "errosFrequentes": [
          "Classificar a interconexão entre São Paulo e Rio de Janeiro como MAN, quando MAN cobre apenas uma cidade/região metropolitana.",
          "Acreditar que usar a Internet pública automaticamente torna a rede uma Internet pública, sem reconhecer que a rede corporativa continua sendo uma intranet interligada por WAN."
        ],
        "variacao": "Substituir a filial do Rio de Janeiro por um escritório no mesmo prédio da matriz; o aluno deve reclassificar a interconexão como LAN em vez de WAN."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: \"Intranet e Internet são a mesma coisa, só muda o nome.\" Avaliar a correção dessa afirmação para uma organização que mantém rede interna privada.",
        "dados": "Rede interna de uma empresa usando protocolos TCP/IP para serviços internos; comparação com a rede pública global da Internet; afirmação de que não há diferença entre elas além do nome.",
        "conceitos": [
          "intranet",
          "Internet",
          "TCP/IP",
          "acesso restrito"
        ],
        "estrategia": "Reconhecer que a afirmação confunde o uso de protocolos semelhantes (TCP/IP) com identidade de rede; intranet é privada e restrita à organização, Internet é pública e global; usar TCP/IP não torna uma intranet em Internet.",
        "execucao": [
          "1) Identificar que a afirmação nega qualquer diferença entre intranet e Internet.",
          "2) Lembrar que a intranet é uma rede privada interna de uma organização, não acessível publicamente.",
          "3) Lembrar que a Internet é a rede pública global, acessível a qualquer usuário.",
          "4) Concluir que ambas usam TCP/IP, mas diferem no controle de acesso: a intranet é restrita, a Internet é aberta."
        ],
        "resultado": "Errado. Intranet é uma rede privada interna de uma organização, não acessível publicamente. Internet é a rede pública global. A intranet usa protocolos TCP/IP iguais, mas com acesso restrito.",
        "justificativa": "O gabarito corrige a afirmação ao esclarecer que o uso compartilhado de protocolos TCP/IP não equivale à mesma rede; a diferença fundamental está no escopo de acesso: intranet é privada/restrita, Internet é pública/global.",
        "errosFrequentes": [
          "Acreditar que usar TCP/IP torna a rede privada uma Internet pública.",
          "Confundir intranet com extranet, achando que qualquer rede que usa TCP/IP e se conecta externamente é Internet."
        ],
        "variacao": "Apresentar uma extranet de uma empresa para fornecedores e perguntar se ela é Internet pública; o aluno deve reconhecer que a extranet é restrita a parceiros autorizados, não aberta ao público."
      }
    ]
  },
  "m2-u1-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A topologia de rede determina custo de instalação, tolerância a falhas e desempenho, e provas de concursos cobram a diferença entre a disposição física dos dispositivos e cabos e o fluxo lógico dos dados. Confundir as duas camadas leva a gabarito errado em itens que perguntam sobre ponto único de falha, colisões no meio compartilhado e comportamento do Ethernet moderno. Dominar a distinção permite responder corretamente a questões sobre estrela, anel, barra, malha e híbrida, além de reconhecer que a mesma rede pode ter topologia física e lógica distintas.",
      "preRequisitos": [
        "Conceito de nó (dispositivo conectado à rede)",
        "Conceito de enlace (cabo ou meio de ligação entre nós)",
        "Noção de dispositivo central como switch ou hub"
      ],
      "objetivosObservaveis": [
        "Definir topologia física como a disposição real dos dispositivos e cabos",
        "Definir topologia lógica como a forma como os dados efetivamente circulam",
        "Descrever as topologias estrela, anel, barra (bus), malha e híbrida",
        "Identificar o ponto único de falha e a fragilidade de cada topologia",
        "Reconhecer quando topologia física e lógica divergem, como no Ethernet moderno"
      ],
      "competencias": [
        "Leitura de topologias a partir de diagramas de rede",
        "Avaliação de tolerância a falhas e de pontos únicos de falha",
        "Distinção entre disposição física e fluxo lógico de dados",
        "Escolha de topologia adequada a um cenário de custo e redundância"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u1-t1-s1 (Definição de rede e componentes básicos) — base de nós e enlaces",
        "m2-u1-t1-s2 (Classificação de redes: LAN, WLAN, MAN, WAN, PAN) — papéis dos nós na topologia",
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — relação com o fluxo lógico dos dados"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático de redes em editais de concursos. O tema é central porque define a base do endereçamento e da comutação."
      }
    },
    "niveis": {
      "iniciante": "Topologia física é a disposição real dos dispositivos e cabos. Topologia lógica é a forma como os dados efetivamente circulam. Na estrela, todos os nós se ligam a um ponto central (switch ou hub): falha de um nó não afeta os demais, mas falha do central derruba toda a rede. No anel, os nós se conectam em círculo e os dados percorrem uma direção; falha de um nó pode romper o anel. Na barra (bus), todos compartilham o mesmo cabo: simples, mas sofre colisões e a ruptura do cabo derruba o segmento. Na malha, cada nó se conecta a vários outros: alta redundância e tolerância a falhas, com custo elevado. A híbrida combina duas ou mais topologias.",
      "intermediario": "A distinção física x lógica é crítica porque podem divergir: o Ethernet moderno tem topologia física em estrela (cada computador liga ao switch), mas topologia lógica em barramento (o meio é compartilhado logicamente). Ponto único de falha da estrela é o dispositivo central; da barra é o cabo backbone; da malha não há ponto único, pois cada nó tem múltiplos caminhos. O anel depende da implementação: anel duplo ou token contornam a falha de um nó.",
      "avancado": "Comparar topologias exige avaliar custo, redundância e desempenho. A estrela isola cada enlace, evitando colisões, mas depende do switch. A barra usa meio compartilhado e sofre colisões frequentes. A malha oferece redundância máxima, mas cabeamento e portas são caros. O híbrido combina, por exemplo, estrelas de setores interligadas por uma malha de backbone. A escolha depende do requisito de disponibilidade e do orçamento disponível.",
      "especialista": "Recomendar uma topologia para um cenário real envolve equilibrar custo de cabeamento, quantidade de portas, tolerância a falhas e desempenho sob carga. Em rede industrial crítica, a malha justifica o custo elevado pela redundância. Em rede de escritório, a estrela é padrão pelo custo e isolamento de falhas. A barra é adequada apenas a segmentos pequenos e temporários. O especialista documenta pontos únicos de falha e define planos de contingência para o dispositivo central ou cabo backbone."
    },
    "comparacoes": [
      {
        "tema": "Topologia física versus topologia lógica",
        "a": {
          "rotulo": "Topologia física",
          "texto": "Disposição real dos dispositivos e cabos; o que se pode tocar e desenhar no chão do cabeamento."
        },
        "b": {
          "rotulo": "Topologia lógica",
          "texto": "Forma como os dados efetivamente circulam entre os nós, independente do desenho físico."
        },
        "diferencaGabarito": "Podem divergir: Ethernet físico em estrela com lógica de barramento. O gabarito deve considerar a camada perguntada, não apenas o desenho."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Topologia física e lógica são sempre iguais.",
        "porqueErrada": "É falsa porque a mesma rede pode ter disposição física e fluxo lógico distintos; o Ethernet clássico separa as duas camadas.",
        "versaoCorreta": "Física e lógica não coincidem necessariamente: o Ethernet moderno tem topologia física em estrela (ligado ao switch) e topologia lógica em barramento (meio compartilhado logicamente)."
      },
      {
        "afirmacaoEquivocada": "Na topologia em estrela, a falha de qualquer nó derruba toda a rede.",
        "porqueErrada": "Confunde o nó comum com o dispositivo central; a vantagem da estrela é justamente isolar cada enlace, então a falha de um nó comum não afeta os demais.",
        "versaoCorreta": "Errado. Na topologia em estrela, a falha de um nó fica restrita a esse nó; o risco concentrado está no dispositivo central, que é o ponto único de falha capaz de derrubar todos os enlaces."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "topologia física",
        "topologia lógica",
        "estrela",
        "anel",
        "barra (bus)",
        "malha",
        "híbrida"
      ],
      "regras": [
        "estrela = todos os nós se ligam a um ponto central (switch ou hub)",
        "malha = cada nó se conecta a vários outros, com alta redundância",
        "barra = todos compartilham o mesmo cabo, meio compartilhado"
      ],
      "comparacoes": [
        "estrela versus malha: ponto único de falha versus redundância",
        "física versus lógica: podem divergir, como no Ethernet moderno"
      ],
      "fluxos": [
        "dados circulam do nó ao switch central e depois ao nó de destino na estrela",
        "dados percorrem o anel em uma direção até atingir o nó destino"
      ],
      "excecoes": [
        "uma topologia física pode esconder outra lógica (estrela física com barramento lógico)",
        "anel duplo ou token pode contornar a falha de um nó no anel"
      ],
      "palavrasChave": [
        "disposição",
        "fluxo",
        "ponto de falha",
        "colisão",
        "redundância",
        "switch",
        "cabo"
      ],
      "checklist": [
        "Defino o que é topologia física?",
        "Defino o que é topologia lógica?",
        "Descrevo estrela, anel, barra, malha e híbrida?",
        "Aponto o ponto único de falha de cada uma?",
        "Reconheço a divergência entre física e lógica?",
        "Escolho a topologia adequada a custo e redundância?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar a topologia de uma rede onde todos os computadores conectam a um switch central.",
        "dados": "Rede com 8 computadores, cada um ligado por cabo próprio a um switch central de 16 portas; nenhum cabo liga computador a computador diretamente.",
        "conceitos": [
          "topologia física",
          "estrela",
          "switch"
        ],
        "estrategia": "Observar se todos os nós partilham um ponto central único; se sim, é estrela física. Confirmar que não há cabos entre computadores e que a falha de um cabo isola apenas aquele computador.",
        "execucao": [
          "1) Verificar que cada computador tem um cabo separado até o switch.",
          "2) Confirmar que o switch é o ponto central de interconexão.",
          "3) Concluir: topologia física é estrela.",
          "4) Registrar: falha de um cabo afeta só aquele computador; falha do switch derruba a rede."
        ],
        "resultado": "Topologia estrela. O switch é o ponto central; se um cabo falha, só aquele computador é afetado; se o switch falha, toda a rede cai.",
        "justificativa": "O resultado é o gabarito porque a definição de estrela é justamente todos os nós ligados a um ponto central, e o isolamento de falhas por enlace é a vantagem característica dessa topologia.",
        "errosFrequentes": [
          "Achar que qualquer rede com switch é anel apenas porque os dados passam por ele.",
          "Ignorar que a falha do switch, e não do nó, é o ponto único de falha."
        ],
        "variacao": "Se os 8 computadores fossem ligados em série, um após o outro, formando um círculo fechado, a topologia seria anel, não estrela."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma rede industrial precisa de alta disponibilidade e tolerância a falhas. Qual topologia é mais adequada?",
        "dados": "Ambiente industrial com 12 nós, requisito de que a rede continue operando mesmo com a perda de um enlace, e orçamento que permite custo de cabeamento elevado.",
        "conceitos": [
          "malha",
          "redundância",
          "tolerância a falhas",
          "custo"
        ],
        "estrategia": "Avaliar qual topologia oferece múltiplos caminhos entre nós para redirecionar o tráfego quando um enlace falha, ponderando o custo elevado contra a exigência de disponibilidade crítica.",
        "execucao": [
          "1) Listar os requisitos: alta disponibilidade, tolerância a falhas, 12 nós, orçamento flexível.",
          "2) Descartar barra (cabo único = ponto único de falha) e estrela (switch central = ponto único de falha).",
          "3) Avaliar malha: cada nó conectado a vários outros, permitindo redirecionamento.",
          "4) Confirmar que a malha completa (todos com todos) oferece máxima redundância, apesar do custo elevado."
        ],
        "resultado": "Malha — cada nó tem múltiplos caminhos. Se um enlace falha, o tráfego é redirecionado. O custo é maior, mas a justificativa é a disponibilidade crítica.",
        "justificativa": "O gabarito é malha porque ela é a única das topologias listadas que elimina o ponto único de falha por meio de múltiplos caminhos, atendendo ao requisito de alta disponibilidade da rede industrial.",
        "errosFrequentes": [
          "Escolher estrela pelo custo menor, esquecendo que o switch central derruba toda a rede se falhar.",
          "Escolher anel, que depende de implementação específica (anel duplo) para tolerar falha de nó."
        ],
        "variacao": "Se o orçamento fosse restrito e a rede tivesse apenas 4 nós em um escritório pequeno, a escolha adequada seria a estrela, pelo custo baixo e isolamento de falhas por cabo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação para julgar: na topologia em estrela, se um computador falha, toda a rede para. Verdadeiro ou falso?",
        "dados": "Cenário: rede de 10 computadores em topologia estrela com switch central; um dos computadores (nó comum) deixa de funcionar por pane na placa de rede.",
        "conceitos": [
          "estrela",
          "ponto de falha",
          "nó central",
          "isolamento de enlace"
        ],
        "estrategia": "Distinguir o nó comum (computador de usuário) do dispositivo central (switch); a leitura ingênua atribui ao nó comum o papel de ponto único de falha, o que está errado.",
        "execucao": [
          "1) Identificar que o computador com pane é um nó comum, não o switch.",
          "2) Lembrar que na estrela cada enlace é independente.",
          "3) Concluir que os outros 9 computadores continuam se comunicando pelo switch.",
          "4) Identificar que apenas a falha do switch derrubaria toda a rede."
        ],
        "resultado": "Errado. Na estrela, a falha de um nó afeta apenas esse nó. A falha do dispositivo central (switch/hub) é o que derruba toda a rede.",
        "justificativa": "A leitura ingênua falha porque confunde nó comum com dispositivo central; a correção técnica é que o isolamento de enlaces na estrela impede que a pane de um computador afete os demais.",
        "errosFrequentes": [
          "Considerar qualquer falha na rede como derrubando todos os nós, ignorando o isolamento por enlace.",
          "Não distinguir nó comum de dispositivo central na definição de ponto único de falha."
        ],
        "variacao": "Se a afirmação fosse 'se o switch central falha, toda a rede para', ela seria correta, porque o switch é o ponto único de falha da topologia estrela."
      }
    ]
  },
  "m2-u1-t1-s4": {
    "orientacaoEstrategica": {
      "porqueImporta": "A escolha do modelo de comutação explica latência, jitter e tolerância a falhas, e provas de concursos comparam diretamente comutação de circuitos e comutação de pacotes. Entender por que a Internet adota pacotes, enquanto a telefonia tradicional usava circuitos, é fundamental para responder a questões sobre garantia de banda, uso de recursos, comportamento sob congestionamento e multiplexação de vários fluxos no mesmo enlace.",
      "preRequisitos": [
        "Conceito de rede como interconexão de dispositivos",
        "Conceito de enlace como meio de ligação entre dois pontos",
        "Noção de endereçamento de dados em uma rede"
      ],
      "objetivosObservaveis": [
        "Descrever a comutação de circuitos com caminho dedicado reservado",
        "Descrever a comutação de pacotes com dados divididos e roteados independentemente",
        "Comparar custo, desempenho e uso de recursos dos dois modelos",
        "Justificar por que a Internet adota comutação de pacotes"
      ],
      "competencias": [
        "Análise comparativa de modelos de comutação",
        "Relação entre modelo de comutação e métricas de latência, jitter e perda",
        "Escolha do modelo adequado a um serviço sensível a atraso",
        "Interpretação de comportamento de rede sob congestionamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u1-t1-s3 (Topologias físicas e lógicas) — fluxo lógico dos dados na rede",
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — mecanismo de encaminhamento entre nós",
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — latência, jitter e perda de pacotes"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático de redes em editais de concursos. O tema é central por explicar a base do funcionamento da Internet e da telefonia."
      }
    },
    "niveis": {
      "iniciante": "Comutação de circuitos reserva um caminho dedicado entre origem e destino antes da comunicação, como na telefonia tradicional (PSTN). Vantagens: latência previsível e largura de banda garantida. Desvantagens: desperdício de recursos quando o circuito fica ocioso e tempo de estabelecimento. Comutação de pacotes divide os dados em pacotes que caminham independentemente, cada um com endereçamento, como na Internet. Vantagens: eficiência pelo compartilhamento do meio e tolerância a falhas. Desvantagens: latência variável (jitter), perda de pacotes e necessidade de reordenação e retransmissão.",
      "intermediario": "Circuitos garantem recursos e previsibilidade, mas o meio fica reservado mesmo quando não há tráfego, causando desperdício. Pacotes compartilham o meio, aproveitando janelas de ociosidade, mas geram jitter e podem exigir reordenação. Sob congestionamento, o circuito mantém qualidade enquanto o pacote sofre variação; o multiplexação de vários fluxos no mesmo enlace é natural em pacotes e limitada em circuitos.",
      "avancado": "A Internet adota comutação de pacotes porque escala melhor e resiliente a falhas de caminho: se uma rota cai, os pacotes são reencaminhados. O preço é a latência variável (jitter), a possibilidade de perda e a necessidade de reordenação e retransmissão nas camadas superiores. Serviços sensíveis a atraso (voz, vídeo) precisam de mecanismos de qualidade de serviço (QoS) sobre pacotes para compensar essas desvantagens.",
      "especialista": "Decidir o modelo adequado para um serviço sensível a atraso exige justificativa técnica: circuitos são ideais quando há necessidade de banda garantida e latência constante (ex.: ligações dedicadas E1/T1 entre filiais), mas são caros e ociosos fora do uso. Pacotes são a escolha para tráfego de dados geral e Internet, com QoS para tráfego sensível. Redes híbridas combinam características conforme o serviço, reservando circuitos para voz crítica e pacotes para dados."
    },
    "comparacoes": [
      {
        "tema": "Comutação de circuitos versus comutação de pacotes",
        "a": {
          "rotulo": "Comutação de circuitos",
          "texto": "Caminho dedicado reservado entre origem e destino antes da comunicação; modelo da telefonia tradicional (PSTN)."
        },
        "b": {
          "rotulo": "Comutação de pacotes",
          "texto": "Dados divididos em pacotes que caminham independentemente, cada um com endereçamento; modelo da Internet."
        },
        "diferencaGabarito": "Circuitos garantem recursos e previsibilidade, mas desperdiçam banda quando ocioso; pacotes ganham em eficiência e resiliência, mas introduzem jitter e perda."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Circuitos são sempre obsoletos.",
        "porqueErrada": "É falsa porque ainda existem cenários sensíveis a atraso que exigem banda garantida e latência previsível, como ligações dedicadas entre filiais e voz crítica.",
        "versaoCorreta": "O modelo se adequa conforme o requisito: circuitos não são obsoletos, servem a serviços que precisam de garantia de banda e latência constante."
      },
      {
        "afirmacaoEquivocada": "Pacotes viajam sempre pelo mesmo caminho.",
        "porqueErrada": "É falsa porque, na comutação de pacotes (como na Internet), cada pacote é roteado independentemente e pode seguir rotas distintas, dependendo da topologia e da congestão.",
        "versaoCorreta": "Errado. Na comutação de pacotes, cada unidade de dados é encaminhada de forma independente e pode percorrer rotas distintas; apenas em circuitos virtuais, como Frame Relay e MPLS, existe um caminho lógico previamente definido."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "comutação de circuitos",
        "comutação de pacotes",
        "circuito dedicado",
        "pacote",
        "jitter"
      ],
      "regras": [
        "circuitos = recurso reservado entre origem e destino",
        "pacotes = recurso compartilhado, roteamento independente de cada pacote"
      ],
      "comparacoes": [
        "circuitos versus pacotes: reserva de recursos versus compartilhamento do meio",
        "banda garantida versus banda compartilhada: circuitos reservam, pacotes disputam"
      ],
      "fluxos": [
        "estabelecimento do circuito dedicado antes de transmitir dados",
        "envio de pacotes individualmente, com possível reordenação no destino"
      ],
      "excecoes": [
        "redes híbridas combinam características de ambos conforme o serviço",
        "circuitos virtuais (Frame Relay, MPLS) usam caminho lógico predefinido sobre rede de pacotes"
      ],
      "palavrasChave": [
        "caminho dedicado",
        "multiplexação",
        "reordenação",
        "resiliência",
        "latência"
      ],
      "checklist": [
        "Descrevo a comutação de circuitos?",
        "Descrevo a comutação de pacotes?",
        "Comparo vantagens e desvantagens de cada uma?",
        "Justifico por que a Internet adota pacotes?",
        "Relaciono pacotes a jitter e reordenação?",
        "Escolho o modelo adequado a um serviço sensível a atraso?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Comparar uma ligação telefônica tradicional (PSTN) com uma chamada VoIP, identificando o modelo de comutação de cada uma.",
        "dados": "Ligação PSTN entre dois telefones fixos com circuito reservado durante toda a duração da chamada; chamada VoIP que divide a voz em pacotes sobre uma rede de dados compartilhada.",
        "conceitos": [
          "comutação de circuitos",
          "comutação de pacotes",
          "PSTN",
          "VoIP"
        ],
        "estrategia": "Associar cada tecnologia ao seu modelo de comutação: PSTN reserva um circuito dedicado pela duração da chamada; VoIP fragmenta a voz em pacotes que competem com outros tráfegos na rede.",
        "execucao": [
          "1) Identificar PSTN como comutação de circuitos: caminho dedicado estabelecido pela duração da chamada, banda fixa.",
          "2) Identificar VoIP como comutação de pacotes: voz dividida em pacotes com endereçamento próprio.",
          "3) Comparar: PSTN tem latência previsível; VoIP tem latência variável (jitter).",
          "4) Concluir que cada modelo atende a um tipo de serviço e tráfego."
        ],
        "resultado": "PSTN: comutação de circuitos — caminho dedicado estabelecido pela duração da chamada, banda fixa. VoIP: comutação de pacotes — voz dividida em pacotes que competem com outros tráfegos, latência variável.",
        "justificativa": "O gabarito está correto porque a PSTN estabelece um circuito dedicado reservado (comutação de circuitos), enquanto a VoIP fragmenta o áudio em pacotes roteados independentemente (comutação de pacotes), resultando em latência variável.",
        "errosFrequentes": [
          "Achar que VoIP usa circuito dedicado porque a voz parece contínua ao usuário.",
          "Ignorar que a latência variável do VoIP decorre da concorrência de pacotes na rede."
        ],
        "variacao": "Se a chamada fosse feita por uma linha telefônica analógica dedicada entre dois ramais de uma mesma empresa, o modelo seria comutação de circuitos, não pacotes."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa precisa transmitir dados entre duas filiais com garantia de banda. Qual tecnologia escolher?",
        "dados": "Duas filiais conectadas por uma rede de dados; requisito de largura de banda garantida e latência previsível; opção de contratar circuito dedicado (E1/T1) ou usar Internet de pacote puro.",
        "conceitos": [
          "comutação de circuitos",
          "banda garantida",
          "latência previsível",
          "circuito dedicado"
        ],
        "estrategia": "Avaliar que a garantia de banda exige reserva de recursos, característica da comutação de circuitos, e que a Internet de pacote puro oferece apenas melhor esforço, sem garantia de banda.",
        "execucao": [
          "1) Listar o requisito: transmissão entre filiais com garantia de banda e latência previsível.",
          "2) Descartar Internet de pacote puro (melhor esforço, sem garantia de banda).",
          "3) Escolher comutação de circuitos ou circuito virtual (MPLS) que reserve banda e garanta latência.",
          "4) Concluir que, se a rede for pacote puro (Internet), deve-se contratar circuito dedicado (E1/T1)."
        ],
        "resultado": "Comutação de circuitos ou circuito virtual (MPLS) — garante banda e latência previsível. Se a rede for pacote puro (Internet), contratar circuito dedicado (E1/T1).",
        "justificativa": "O gabarito está correto porque apenas a comutação de circuitos reserva recursos antecipadamente, oferecendo a garantia de banda e a latência previsível exigidas para a transmissão entre filiais.",
        "errosFrequentes": [
          "Escolher Internet de pacote puro por ser mais barata, ignorando a ausência de garantia de banda.",
          "Confundir circuito virtual com circuito dedicado físico sem perceber que ambos reservam recursos."
        ],
        "variacao": "Se o requisito fosse apenas troca de e-mails entre filiais, sem necessidade de banda garantida, a Internet de pacote puro seria suficiente e mais econômica."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação para julgar: na comutação de pacotes, os pacotes sempre seguem o mesmo caminho. Verdadeiro ou falso?",
        "dados": "Cenário: rede de dados com múltiplos roteadores entre origem e destino, onde um link intermediário fica congestionado ou cai durante o envio de uma sequência de pacotes.",
        "conceitos": [
          "comutação de pacotes",
          "roteamento independente",
          "caminho lógico predefinido"
        ],
        "estrategia": "Reconhecer que a leitura ingênua pressupõe um caminho fixo para todos os pacotes, o que é verdade apenas para comutação de circuitos virtuais, não para a comutação de pacotes datagrama da Internet.",
        "execucao": [
          "1) Identificar que cada pacote tem seu próprio endereçamento e é roteado independentemente.",
          "2) Observar que pacotes de uma mesma mensagem podem seguir rotas diferentes conforme a rede.",
          "3) Concluir que a afirmação é falsa para comutação de pacotes datagrama.",
          "4) Salvar a exceção: circuitos virtuais (Frame Relay, MPLS) usam caminho lógico predefinido."
        ],
        "resultado": "Errado. Na comutação de pacotes (como na Internet), cada pacote é roteado independentemente e pode seguir caminhos diferentes. Na comutação de circuitos virtuais (Frame Relay, MPLS), há um caminho lógico predefinido.",
        "justificativa": "A leitura ingênua falha porque confunde comutação de pacotes datagrama com comutação de circuitos virtuais; a correção técnica é que na Internet os pacotes seguem rotas independentes e podem divergir.",
        "errosFrequentes": [
          "Assumir que todos os pacotes de uma mesma comunicação seguem a mesma rota, como em um circuito.",
          "Não distinguir comutação de pacotes datagrama de comutação de circuitos virtuais."
        ],
        "variacao": "Se a rede usasse MPLS, a afirmação seria parcialmente correta, porque MPLS estabelece um caminho lógico predefinido (label-switched path) para os pacotes."
      }
    ]
  },
  "m2-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modo de endereçamento define se uma mensagem alcança um único destinatário, todos os nós da sub-rede, um grupo inscrito ou o servidor mais próximo, afetando ARP, DHCP e DNS. Provas cobram a distinção entre unicast, broadcast, multicast e anycast, incluindo que broadcast não atravessa roteadores.",
      "preRequisitos": [
        "Conceito de nó (dispositivo conectado à rede)",
        "Conceito de endereço IP como identificador de nó na rede"
      ],
      "objetivosObservaveis": [
        "Definir unicast, broadcast, multicast e anycast com um exemplo de cada",
        "Diferenciar o alcance do broadcast (sub-rede local) do alcance do multicast (grupo roteado)",
        "Associar o multicast ao protocolo IGMP de inscrição em grupo",
        "Explicar por que anycast entrega ao servidor mais próximo pela métrica de roteamento"
      ],
      "competencias": [
        "Análise de destinatários de uma mensagem em rede",
        "Leitura de tráfego de rede para identificar o tipo de comunicação",
        "Associação de protocolos (ARP, DHCP, IGMP, DNS) ao modo de endereçamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u1-t3-s1 (Métricas de desempenho de rede) — latência e throughput afetam a qualidade de multicast e streaming",
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — descoberta de endereços usa broadcast em IPv4 e multicast em IPv6"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação média, estimativa pedagógica de adequação ao conteúdo programático de redes em editais. O tema é central para endereçamento e descoberta de rede."
      }
    },
    "niveis": {
      "iniciante": "Unicast: um-para-um, um emissor envia a um destinatário específico (ex: acessar um site). Broadcast: um-para-todos na sub-rede local, como DHCP e ARP. Multicast: um-para-muitos dirigido a grupo inscrito, como vídeo; gerenciado pelo IGMP. Anycast: um-para-o-mais-próximo, mesmo endereço em vários servidores, roteamento entrega ao mais próximo (DNS raiz, CDN). Broadcast não atravessa roteadores; fica restrito à sub-rede.",
      "intermediario": "Unicast consome banda proporcional aos destinatários: N receptores geram N fluxos. Broadcast é limitado ao domínio local e não é encaminhado por roteadores. Multicast envia um fluxo único replicado nos pontos de ramificação, exigindo inscrição via IGMP. Anycast não é novo tipo de endereço, mas roteamento ao servidor mais próximo. Em IPv6 não existe broadcast; suas funções são cobertas por multicast.",
      "avancado": "A escolha entre unicast e multicast depende da escala: poucos receptores usam unicast; muitos usam multicast, que economiza banda replicando o tráfego apenas nos ramos necessários. IGMP gerencia a associação de receptores a grupos. Anycast requer infraestrutura de roteamento com métricas iguais em múltiplos sites, comum em DNS raiz e CDNs.",
      "especialista": "Projetar multicast exige roteamento multicast (PIM) e IGMP nos switches, evitando floods. Anycast implica coordenar anúncios BGP em múltiplos sites para convergir ao ponto mais próximo, com desafios de consistência de estado. Broadcast limitado à sub-rede reduz domínios de falha, mas descoberta (DHCP, ARP) gera tráfego de controle local. Avalia trade-off entre economia de banda (multicast) e simplicidade (unicast)."
    },
    "comparacoes": [
      {
        "tema": "Unicast versus multicast em distribuição de conteúdo",
        "a": {
          "rotulo": "Unicast",
          "texto": "Um fluxo separado do servidor para cada destinatário; simples, mas consome banda proporcional ao número de receptores."
        },
        "b": {
          "rotulo": "Multicast",
          "texto": "Um fluxo único do servidor, replicado pela rede apenas nos pontos de ramificação onde há receptores inscritos no grupo."
        },
        "diferencaGabarito": "Multicast economiza banda para muitos receptores, mas exige IGMP e roteamento multicast; unicast é mais simples, mas escala mal com o número de destinatários."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Broadcast atravessa roteadores e chega a toda a Internet.",
        "porqueErrada": "É falsa porque broadcast é limitado ao domínio de broadcast (sub-rede local); roteadores não encaminham broadcasts para evitar tempestades de broadcast.",
        "versaoCorreta": "Errado. Broadcast é limitado ao domínio de broadcast (sub-rede local). Roteadores não encaminham broadcasts (255.255.255.255) para evitar tempestades de broadcast."
      },
      {
        "afirmacaoEquivocada": "Anycast é um novo tipo de endereço IP, distinto de unicast, broadcast e multicast.",
        "porqueErrada": "É falsa porque anycast não é um tipo de endereço, mas um conceito de roteamento: vários servidores compartilham o mesmo endereço unicast e o roteamento entrega ao mais próximo.",
        "versaoCorreta": "Errado. Anycast é um conceito de roteamento, não um novo tipo de endereço: o mesmo endereço é atribuído a vários servidores e a rede entrega ao mais próximo segundo a métrica."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "unicast",
        "broadcast",
        "multicast",
        "anycast",
        "domínio de broadcast"
      ],
      "regras": [
        "unicast = um emissor para um destinatário específico",
        "broadcast = um emissor para todos os nós da sub-rede local",
        "multicast = um emissor para um grupo de receptores inscritos (IGMP)",
        "anycast = um emissor para o servidor mais próximo entre vários com o mesmo endereço"
      ],
      "comparacoes": [
        "unicast consome banda proporcional ao número de receptores; multicast envia um fluxo único",
        "broadcast não atravessa roteadores; multicast pode ser roteado com suporte"
      ],
      "fluxos": [
        "cliente envia requisição unicast ao servidor e recebe resposta dedicada",
        "cliente envia IGMP join para entrar em grupo multicast e receber o fluxo"
      ],
      "excecoes": [
        "IPv6 não tem broadcast; suas funções são cobertas por multicast",
        "anycast não é um tipo de endereço, mas um conceito de roteamento com métrica"
      ],
      "palavrasChave": [
        "um-para-um",
        "um-para-todos",
        "um-para-muitos",
        "um-para-o-mais-próximo",
        "IGMP",
        "roteamento"
      ],
      "checklist": [
        "Defino unicast, broadcast, multicast e anycast?",
        "Explico por que broadcast não atravessa roteadores?",
        "Associo multicast ao protocolo IGMP?",
        "Diferencio anycast de um novo tipo de endereço?",
        "Cito exemplos de cada modo de comunicação?",
        "Identifico o modo usado por servidores-raiz de DNS?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar o tipo de comunicação quando um computador acessa um site pelo navegador.",
        "dados": "Navegador do cliente acessa www.exemplo.com; o servidor web responde à requisição HTTP daquele cliente específico, sem outros receptores.",
        "conceitos": [
          "unicast",
          "cliente-servidor",
          "endereço IP"
        ],
        "estrategia": "Observar que a mensagem tem um único destinatário específico (o servidor web) e uma única origem (o navegador), o que caracteriza comunicação um-para-um.",
        "execucao": [
          "1) Identificar a origem: o navegador do cliente.",
          "2) Identificar o destino: o servidor web específico.",
          "3) Confirmar que há um único emissor e um único receptor.",
          "4) Concluir que é unicast, comunicação um-para-um."
        ],
        "resultado": "Unicast — comunicação um-para-um entre o navegador (cliente) e o servidor web.",
        "justificativa": "O resultado é o gabarito porque há exatamente um emissor (navegador) e um destinatário (servidor web), que é a definição de unicast, sem envolvimento de grupo ou de todos os nós da rede.",
        "errosFrequentes": [
          "Achar que qualquer acesso à Internet é broadcast porque a rede é compartilhada.",
          "Confundir unicast com multicast apenas porque o conteúdo é servido a muitos usuários em momentos diferentes."
        ],
        "variacao": "Se o servidor enviasse o mesmo vídeo ao mesmo tempo para um grupo de funcionários inscritos, a comunicação seria multicast, não unicast."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa faz streaming de treinamento para 50 funcionários simultaneamente. Unicast ou multicast é mais eficiente?",
        "dados": "Servidor de vídeo transmite o mesmo fluxo para 50 funcionários ao mesmo tempo; rede com suporte a multicast e IGMP habilitado nos switches.",
        "conceitos": [
          "multicast",
          "largura de banda",
          "IGMP",
          "replicação de fluxo"
        ],
        "estrategia": "Comparar o consumo de banda: unicast geraria 50 fluxos separados do servidor, enquanto multicast envia um fluxo único replicado pela rede apenas nos pontos de ramificação.",
        "execucao": [
          "1) Confirmar que o mesmo conteúdo é enviado para todos os 50 funcionários ao mesmo tempo.",
          "2) Calcular que unicast exigiria 50 fluxos separados do servidor para cada funcionário.",
          "3) Verificar que multicast envia um fluxo único, replicado pela rede apenas onde há receptores.",
          "4) Concluir que multicast é mais eficiente, consumindo cerca de 1 fluxo em vez de 50."
        ],
        "resultado": "Multicast — o servidor envia um fluxo único que é replicado pela rede apenas nos pontos de ramificação. Unicast exigiria 50 fluxos separados, consumindo 50x a largura de banda.",
        "justificativa": "O gabarito é multicast porque ele economiza largura de banda ao enviar um único fluxo que a rede replica nos ramos necessários, enquanto unicast multiplica o tráfego pelo número de receptores.",
        "errosFrequentes": [
          "Escolher unicast por ser mais simples, ignorando o consumo de banda multiplicado por 50 receptores.",
          "Assumir que multicast funciona sem configurar IGMP e roteamento multicast na rede."
        ],
        "variacao": "Se apenas 2 funcionários assistissem ao treinamento, unicast poderia ser mais simples e eficiente, pois o overhead de multicast não se justificaria para tão poucos receptores."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação para julgar: 'Broadcast atravessa roteadores e chega a toda a Internet.' Verdadeiro ou falso?",
        "dados": "Roteador conecta a sub-rede local à Internet; um dispositivo da sub-rede envia um broadcast (255.255.255.255) para descoberta de serviço.",
        "conceitos": [
          "broadcast",
          "roteador",
          "domínio de broadcast",
          "sub-rede"
        ],
        "estrategia": "Reconhecer que a leitura ingênua pressupõe que broadcast se propaga ilimitadamente, o que está errado; roteadores bloqueiam broadcasts para conter tempestades de broadcast e limitar o domínio a cada sub-rede.",
        "execucao": [
          "1) Identificar que o broadcast é enviado dentro da sub-rede local.",
          "2) Lembrar que roteadores não encaminham pacotes de broadcast para outras redes.",
          "3) Concluir que o broadcast não chega à Internet, ficando restrito à sub-rede de origem.",
          "4) Julgar a afirmação como falsa."
        ],
        "resultado": "Falso. O broadcast não atravessa roteadores: é confinado ao domínio de broadcast da sub-rede local, e roteadores bloqueiam o endereço 255.255.255.255 para evitar tempestades de broadcast.",
        "justificativa": "A leitura ingênua falha porque assume que broadcast se propaga sem limites; a correção técnica é que o roteador bloqueia o broadcast na fronteira da sub-rede, confinando-o ao domínio local.",
        "errosFrequentes": [
          "Acreditar que broadcast alcança toda a Internet por ser um endereço especial (255.255.255.255).",
          "Não perceber que o roteador é a fronteira que interrompe a propagação do broadcast."
        ],
        "variacao": "Se a afirmação fosse 'multicast pode atravessar roteadores quando há suporte a roteamento multicast', ela seria verdadeira, diferentemente do broadcast."
      }
    ]
  },
  "m2-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Largura de banda, throughput, latência, jitter e perda de pacotes caracterizam o desempenho real de uma rede e explicam problemas percebidos pelo usuário. Provas cobram a diferença entre capacidade teórica e taxa real, além do cálculo de tempo de transferência, essenciais para troubleshooting e planejamento de enlaces.",
      "preRequisitos": [
        "Conceito de rede como interconexão de dispositivos",
        "Unidades de medida de dados (bit, byte) e múltiplas (kbps, Mbps, Gbps)"
      ],
      "objetivosObservaveis": [
        "Definir cada métrica de desempenho de rede",
        "Distinguir largura de banda de throughput",
        "Calcular o tempo de transferência a partir do tamanho e do throughput",
        "Relacionar jitter e perda de pacotes a aplicações em tempo real"
      ],
      "competencias": [
        "Medição de desempenho de rede",
        "Cálculo com unidades de dados e taxas de transferência",
        "Interpretação de sintomas de rede (áudio interrompido, lentidão) a partir de métricas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — modos de comunicação afetam o tráfego e as métricas",
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — ferramenta de medição de latência e perda de pacotes"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação média, estimativa pedagógica de adequação ao conteúdo programático de redes; cobrado em itens de interpretação de sintomas e cálculo de transferência. Relevante pela centralidade conceitual no desempenho de enlaces."
      }
    },
    "niveis": {
      "iniciante": "Largura de banda (bandwidth): capacidade máxima teórica do canal de comunicação (ex: 1 Gbps). Throughput: taxa real de transferência alcançada, sempre menor ou igual à largura de banda. Latência (ping): tempo de trânsito de um pacote, incluindo propagação, transmissão, fila e processamento. Jitter: variação na latência entre pacotes consecutivos, crítico para VoIP e streaming. Perda de pacotes: fração de pacotes que não chega ao destino, podendo indicar congestionamento, erro de transmissão ou bloqueio por firewall.",
      "intermediario": "Largura de banda é o teto teórico; throughput é o que de fato chega, reduzido por cabeçalhos, congestionamento e perdas. Latência soma propagação, transmissão, fila e processamento; RTT mede ida e volta. Jitter é a variação da latência entre pacotes e prejudica voz/vídeo em tempo real. Perda acima de 1% é problemática para aplicações sensíveis.",
      "avancado": "Tempo de transferência ≈ tamanho / throughput. Ex: 100 MB = 800 Mb; a 100 Mbps resulta em 8 s ideais, e com throughput real de 80 Mbps sobe para 10 s. Jitter alto exige QoS para priorizar voz ou buffer de jitter no receptor. Perda é recuperada por retransmissão (TCP) ou tolerada (UDP), conforme o protocolo.",
      "especialista": "Diagnosticar lentidão exige isolar a métrica em gargalo: baixa largura de banda limita o teto, throughput baixo aponta congestionamento/overhead, latência alta afeta interatividade, jitter alto causa estalos em VoIP e perda gera retransmissões. O especialista correlaciona métricas com camadas do modelo OSI e define se o problema é de enlace, roteamento ou aplicação."
    },
    "comparacoes": [
      {
        "tema": "Largura de banda versus throughput",
        "a": {
          "rotulo": "Largura de banda",
          "texto": "Capacidade máxima teórica do enlace, medida em bits por segundo (bps, kbps, Mbps, Gbps)."
        },
        "b": {
          "rotulo": "Throughput",
          "texto": "Taxa real obtida na prática, sempre menor ou igual à largura de banda, por causa de overhead de protocolo e congestionamento."
        },
        "diferencaGabarito": "Largura de banda é a capacidade teórica; throughput é a taxa real medida, nunca excedendo a largura de banda."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Largura de banda e throughput são sinônimos.",
        "porqueErrada": "É falsa porque largura de banda é a capacidade teórica do canal, enquanto throughput é a taxa real medida na prática, sempre menor ou igual à largura de banda.",
        "versaoCorreta": "Errado. Largura de banda é a capacidade teórica do canal; throughput é a taxa real medida. Throughput nunca excede largura de banda."
      },
      {
        "afirmacaoEquivocada": "Jitter é a mesma coisa que latência.",
        "porqueErrada": "É falsa porque latência é o tempo de trânsito de um pacote, enquanto jitter é a variação desse tempo entre pacotes consecutivos; dois links podem ter mesma latência e jitters diferentes.",
        "versaoCorreta": "Errado. Latência é o tempo de trânsito de um pacote; jitter é a variação da latência entre pacotes consecutivos. São métricas distintas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "largura de banda",
        "throughput",
        "latência",
        "jitter",
        "perda de pacotes",
        "RTT"
      ],
      "regras": [
        "throughput nunca excede largura de banda",
        "latência soma propagação, transmissão, fila e processamento",
        "jitter é a variação da latência entre pacotes consecutivos"
      ],
      "comparacoes": [
        "largura de banda (teórica) versus throughput (real)",
        "latência (tempo de trânsito) versus jitter (variação do tempo)"
      ],
      "fluxos": [
        "pacote atravessa atraso de propagação, transmissão, fila e processamento até o destino",
        "receptor mede RTT como tempo de ida e volta do pacote"
      ],
      "excecoes": [
        "perda de pacotes acima de 1% é problemática para aplicações sensíveis",
        "UDP tolera perda; TCP retransmite pacotes perdidos"
      ],
      "palavrasChave": [
        "bps",
        "throughput",
        "latência",
        "jitter",
        "perda de pacotes",
        "RTT",
        "QoS"
      ],
      "checklist": [
        "Defino largura de banda e throughput?",
        "Distinguo capacidade teórica de taxa real?",
        "Calculo o tempo de transferência?",
        "Explico o impacto de jitter em VoIP?",
        "Relaciono perda de pacotes a congestão ou erro?",
        "Interpreto RTT como ida e volta?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um link de 100 Mbps tem throughput de 85 Mbps. Explique a diferença entre largura de banda e throughput.",
        "dados": "Link com largura de banda de 100 Mbps; throughput medido de 85 Mbps; diferença de 15 Mbps atribuída a overhead e condições reais.",
        "conceitos": [
          "largura de banda",
          "throughput",
          "overhead de protocolo"
        ],
        "estrategia": "Identificar a largura de banda como a capacidade teórica do enlace e o throughput como a taxa real medida, atribuindo a diferença a cabeçalhos de protocolo, congestionamento e qualidade do sinal.",
        "execucao": [
          "1) Identificar a largura de banda do link: 100 Mbps (capacidade teórica).",
          "2) Identificar o throughput medido: 85 Mbps (taxa real).",
          "3) Atribuir a diferença de 15 Mbps a overhead de cabeçalhos TCP/IP, colisões, congestionamento e qualidade do sinal.",
          "4) Concluir que throughput é sempre menor ou igual à largura de banda."
        ],
        "resultado": "Largura de banda = 100 Mbps (capacidade teórica). Throughput = 85 Mbps (real). A diferença se deve a overhead de protocolo (cabeçalhos TCP/IP), colisões, congestionamento e qualidade do sinal.",
        "justificativa": "O gabarito está correto porque a largura de banda representa o teto teórico do canal, enquanto o throughput reflete o desempenho real após descontos por overhead e condições da rede, nunca excedendo a largura de banda.",
        "errosFrequentes": [
          "Tratar largura de banda e throughput como sinônimos, ignorando que o throughput é sempre menor ou igual.",
          "Atribuir a diferença apenas à distância, sem considerar cabeçalhos de protocolo e congestionamento."
        ],
        "variacao": "Se o link tivesse 50 Mbps de largura de banda e throughput de 45 Mbps, a diferença de 5 Mbps continuaria explicada por overhead e condições reais, mantendo o mesmo raciocínio."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma chamada VoIP está com áudio interrompido. O ping está estável (30 ms) mas o jitter é alto (50 ms). Qual a causa provável?",
        "dados": "Chamada VoIP com áudio interrompido; ping estável em 30 ms; jitter alto em 50 ms; rede compartilhada com outros tráfegos.",
        "conceitos": [
          "jitter",
          "VoIP",
          "latência",
          "QoS",
          "buffer de jitter"
        ],
        "estrategia": "Identificar que o áudio interrompido com ping estável aponta para jitter alto (variação da latência), não para latência absoluta; a solução é priorizar voz com QoS ou usar buffer de jitter no receptor.",
        "execucao": [
          "1) Observar que o ping está estável (30 ms), descartando latência alta como causa principal.",
          "2) Identificar o jitter alto (50 ms) como variação na latência entre pacotes.",
          "3) Relacionar jitter alto à interrupção de áudio em VoIP, que exige entrega regular dos pacotes.",
          "4) Propor solução: habilitar QoS para priorizar tráfego de voz, ou usar buffer de jitter no receptor."
        ],
        "resultado": "Jitter alto — variação na latência. Solução: habilitar QoS (Quality of Service) para priorizar tráfego de voz, ou usar buffer de jitter no receptor.",
        "justificativa": "O gabarito está correto porque o jitter mede a variação da latência entre pacotes, que prejudica a regularidade do áudio VoIP mesmo com ping estável; QoS ou buffer de jitter mitigam esse problema.",
        "errosFrequentes": [
          "Culpar a latência absoluta (ping) pelo áudio interrompido, ignorando que o jitter é a variação que importa.",
          "Sugerir aumentar a largura de banda, que não resolve a variação de latência entre pacotes."
        ],
        "variacao": "Se o jitter fosse baixo (5 ms) mas houvesse perda de pacotes de 3%, a causa provável seria perda, não jitter, exigindo análise de links instáveis ou QoS diferente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação para julgar: 'Largura de banda e throughput são sinônimos.' Verdadeiro ou falso?",
        "dados": "Enlace de 100 Mbps; transferência de um arquivo de 100 MB (800 Mb) leva 10 s na prática, não os 8 s esperados a 100 Mbps.",
        "conceitos": [
          "largura de banda",
          "throughput",
          "tempo de transferência",
          "overhead"
        ],
        "estrategia": "Reconhecer que a leitura ingênua confunde capacidade teórica com taxa real; a diferença entre 8 s (ideais) e 10 s (reais) revela que o throughput (80 Mbps) é menor que a largura de banda (100 Mbps) por overhead, provando que não são sinônimos.",
        "execucao": [
          "1) Calcular o tamanho do arquivo em bits: 100 MB × 8 = 800 Mb.",
          "2) Calcular o tempo ideal a 100 Mbps: 800 / 100 = 8 s.",
          "3) Observar que o tempo real é 10 s, implicando throughput de 800 / 10 = 80 Mbps.",
          "4) Concluir que largura de banda (100 Mbps) e throughput (80 Mbps) diferem, então não são sinônimos."
        ],
        "resultado": "Falso. Largura de banda é o teto teórico do enlace, enquanto throughput é a taxa real efetivamente entregue; o throughput nunca supera a largura de banda.",
        "justificativa": "A leitura ingênua falha porque trata capacidade teórica e taxa real como iguais; o cálculo mostra que o throughput real (80 Mbps) é menor que a largura de banda (100 Mbps) por overhead, confirmando que são conceitos distintos.",
        "errosFrequentes": [
          "Assumir que a taxa real sempre atinge a largura de banda nominal, ignorando overhead e perdas.",
          "Não converter corretamente MB para Mb antes de calcular o tempo de transferência."
        ],
        "variacao": "Se o arquivo fosse de 50 MB (400 Mb) transferido em 5 s, o throughput real seria 80 Mbps, novamente menor que a largura de banda de 100 Mbps, reforçando que não são sinônimos."
      }
    ]
  },
  "m2-u1-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O meio de transmissão define banda, alcance, imunidade a interferência e custo do enlace; concursos cobram a associação entre meio, categoria e cenário. Saber distinguir UTP, STP, fibra óptica, Wi-Fi e rádio permite resolver itens sobre qual cabo usar em fábrica ou enlace externo.",
      "preRequisitos": [
        "Conceito de enlace (canal de comunicação entre dois nós)",
        "Diferença entre sinal elétrico, óptico e eletromagnético"
      ],
      "objetivosObservaveis": [
        "Classificar meios em guiados e não guiados",
        "Citar característica, vantagem e limitação de cada meio",
        "Associar categoria de par trançado (Cat5e, Cat6, Cat6a) à taxa",
        "Escolher o meio adequado para um cenário de rede"
      ],
      "competencias": [
        "Seleção de meio de transmissão por cenário",
        "Leitura de especificações de cabeamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u1-t1-s1 (Definição de rede e componentes básicos)",
        "m2-u1-t3-s1 (Métricas de desempenho de rede)",
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Meios de transmissão aparecem em questões de TI, associando meio e categoria de cabeamento ao ambiente de instalação. Classificação média é estimativa pedagógica de adequação ao programa."
      }
    },
    "niveis": {
      "iniciante": "Meios guiados levam o sinal por cabo físico. UTP (sem blindagem) é barato e fácil, mas suscetível a interferência; STP adiciona blindagem para ambientes com muita interferência eletromagnética. A fibra óptica transmite luz, com alta banda, longo alcance e imunidade a interferência. O coaxial foi usado em redes antigas e TV a cabo.",
      "intermediario": "No par trançado, Cat5e suporta até 1 Gbps, Cat6 até 10 Gbps limitado a cerca de 55 m e Cat6a mantém 10 Gbps até 100 m; o segmento padrão de UTP é de 100 m. O STP reduz ruído em indústrias e perto de motores elétricos. A fibra óptica oferece banda muito maior que o cobre e não sofre interferência eletromagnética, ideal para backbone.",
      "avancado": "A fibra monomodo usa núcleo estreito e laser, permitindo dezenas de quilômetros com baixa atenuação; a multimodo usa núcleo mais largo e LED, limitada a poucos cientos de metros. Em ambientes com alta EMI, o STP atenua o ruído, mas a fibra é a solução definitiva por ser totalmente imune.",
      "especialista": "O orçamento de enlace compara atenuação (dB/km), largura de banda, distância máxima e custo de instalação e manutenção. UTP/STP são limitados a 100 m por segmento sem repetidor; a fibra monomodo atinge dezenas de quilômetros sem regeneração. A reflexão e a dispersão cromática limitam a fibra multimodo em altas taxas."
    },
    "comparacoes": [
      {
        "tema": "UTP vs STP em ambiente com interferência eletromagnética",
        "a": {
          "rotulo": "UTP (Unshielded Twisted Pair)",
          "texto": "Par trançado sem blindagem, barato e fácil de instalar, limitado a 100 m por segmento; suscetível a interferência eletromagnética de motores, lâmpadas fluorescentes e cabos de energia."
        },
        "b": {
          "rotulo": "STP (Shielded Twisted Pair)",
          "texto": "Par trançado com blindagem metálica que reduz a interferência eletromagnética, indicado para ambientes industriais; custo e dificuldade de instalação maiores que o UTP."
        },
        "diferencaGabarito": "O STP oferece maior imunidade a interferência que o UTP devido à blindagem, mas custa mais e é mais difícil de instalar; em ambiente com alta EMI, o STP é preferível ao UTP."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O Cat6 sempre suporta 10 Gbps até 100 metros em qualquer instalação.",
        "porqueErrada": "O Cat6 suporta 10 Gbps apenas até cerca de 55 metros; para 10 Gbps até 100 metros é necessário o Cat6a, versão aprimorada com melhor desempenho contra diafonia.",
        "versaoCorreta": "Errado. O Cat6 suporta 10 Gbps até aproximadamente 55 m; para 10 Gbps até 100 m usa-se o Cat6a. A distância máxima padrão de um enlace de par trançado é de 100 m independentemente da categoria."
      },
      {
        "afirmacaoEquivocada": "A fibra óptica é mais lenta que o UTP porque a luz viaja mais devagar que o sinal elétrico no cobre.",
        "porqueErrada": "A velocidade da luz na fibra (cerca de 200.000 km/s) é comparável à do sinal elétrico no cobre; a vantagem da fibra está na largura de banda (múltiplos comprimentos de onda de luz) e na imunidade a interferência, não na velocidade de propagação do sinal.",
        "versaoCorreta": "Errado. A velocidade de propagação na fibra é comparável à do cobre; a fibra se destaca pela largura de banda muito maior e imunidade a interferência eletromagnética, não por ser mais rápida na propagação do sinal."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Meio guiado: conduz sinal por caminho físico (cabo)",
        "Meio não guiado: propaga sinal pelo ar (rádio, Wi-Fi)",
        "Par trançado UTP/STP: categorias definem taxa e distância"
      ],
      "regras": [
        "Um segmento de par trançado tem no máximo 100 m sem repetidor",
        "O broadcast não atravessa roteadores; fica restrito à sub-rede local",
        "A fibra óptica é imune a interferência eletromagnética"
      ],
      "comparacoes": [
        "O 2,4 GHz tem maior alcance que o 5 GHz, mas o 5 GHz oferece maior taxa em menor área"
      ],
      "fluxos": [
        "Escolha do meio: analisar banda, distância, imunidade a interferência, mobilidade e custo do cenário"
      ],
      "excecoes": [
        "A fibra multimodo é limitada a curtas distâncias por dispersão, ao contrário da monomodo"
      ],
      "palavrasChave": [
        "UTP",
        "STP",
        "fibra óptica",
        "coaxial",
        "Wi-Fi",
        "rádio",
        "interferência",
        "largura de banda"
      ],
      "checklist": [
        "Identificar se o meio é guiado ou não guiado",
        "Verificar a categoria do par trançado e a taxa suportada",
        "Confirmar a distância máxima do segmento (100 m para UTP)",
        "Avaliar a presença de interferência eletromagnética no local",
        "Escolher fibra para backbone ou longo alcance",
        "Prever custo de instalação e manutenção"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual meio de transmissão cabeado usar para conectar dois prédios a 500 m de distância?",
        "dados": "Distância: 500 m entre os prédios; cabeamento externo; possibilidade de interferência atmosférica e eletromagnética.",
        "conceitos": [
          "Fibra óptica monomodo",
          "Imunidade a interferência eletromagnética"
        ],
        "estrategia": "Comparar o alcance máximo de cada meio com a distância exigida (500 m) e a imunidade a interferência no trajeto externo entre prédios.",
        "execucao": [
          "Verificar que UTP/Cat6 é limitado a 100 m por segmento, insuficiente para 500 m",
          "Confirmar que a fibra óptica monomodo atinge dezenas de quilômetros sem repetidor",
          "Concluir que a fibra monomodo é o meio adequado, sendo imune a raios e interferência"
        ],
        "resultado": "Fibra óptica monomodo — imune a interferência (raios), suporta 500 m sem repetidor. UTP Cat6 limita-se a 100 m.",
        "justificativa": "A distância de 500 m excede o limite de 100 m do par trançado, e o trajeto externo expõe o cabo a interferência atmosférica; a fibra monomodo cobre quilômetros sem repetidor e é imune a EMI, atendendo ao cenário.",
        "errosFrequentes": [
          "Escolher UTP Cat6 ignorando o limite de 100 m de segmento",
          "Escolher Wi-Fi para enlace externo fixo, sujeito a interferência e perda de sinal"
        ],
        "variacao": "Se os prédios estivessem a 30 m de distância dentro do mesmo prédio, o UTP Cat6 seria suficiente e mais barato que a fibra."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma fábrica com máquinas elétricas de alta potência precisa de rede cabeada. UTP ou STP?",
        "dados": "Ambiente: fábrica com motores elétricos de alta potência; requisito: rede cabeada; opções: UTP ou STP.",
        "conceitos": [
          "STP (blindagem contra interferência eletromagnética)",
          "Interferência eletromagnética (EMI) em ambiente industrial"
        ],
        "estrategia": "Avaliar a exposição do cabeamento a fontes de interferência eletromagnética das máquinas e escolher o meio com blindagem adequada.",
        "execucao": [
          "Identificar que motores elétricos geram intensa interferência eletromagnética",
          "Reconhecer que o UTP não tem blindagem e sofreria corrompimento de dados",
          "Confirmar que o STP possui blindagem metálica que atenua o ruído"
        ],
        "resultado": "STP — blindagem reduz interferência eletromagnética; em casos extremos, fibra óptica é a solução definitiva (imune a EMI).",
        "justificativa": "O STP oferece blindagem que protege os pares trançados da EMI gerada pelas máquinas, preservando a integridade dos dados; o UTP sem blindagem teria alta taxa de erros no ambiente industrial.",
        "errosFrequentes": [
          "Escolher UTP por ser mais barato, ignorando a interferência das máquinas elétricas",
          "Assumir que qualquer blindagem elimina toda a interferência, sem avaliar a intensidade do ruído"
        ],
        "variacao": "Se a fábrica tivesse um andar administrativo longe das máquinas, o UTP seria suficiente ali, reservando o STP apenas ao trecho perto dos motores."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Fibra óptica é mais lenta que UTP porque a luz é mais lenta que eletricidade.'",
        "dados": "Afirmação sobre velocidade de propagação da luz na fibra versus sinal elétrico no cobre.",
        "conceitos": [
          "Velocidade de propagação do sinal",
          "Largura de banda da fibra óptica"
        ],
        "estrategia": "Desmontar a afirmação comparando a velocidade real de propagação da luz na fibra com a do sinal elétrico no cobre e identificando a verdadeira vantagem da fibra.",
        "execucao": [
          "Comparar a velocidade da luz na fibra (~200.000 km/s) com a do sinal elétrico no cobre (comparável)",
          "Identificar que a vantagem da fibra é a largura de banda (múltiplos comprimentos de onda) e imunidade a interferência",
          "Concluir que a afirmação confunde velocidade de propagação com capacidade de transmissão"
        ],
        "resultado": "Errado. A velocidade da luz na fibra é comparável à do sinal elétrico no cobre; a vantagem da fibra é largura de banda e imunidade a interferência.",
        "justificativa": "A leitura ingênua associa 'luz' a maior velocidade e conclui o inverso; na verdade, ambos se propagam a ordens de magnitude semelhantes, e a fibra vence por banda e imunidade, não por velocidade do sinal.",
        "errosFrequentes": [
          "Acreditar que a luz na fibra é muito mais lenta que a eletricidade no cobre",
          "Confundir velocidade de propagação do sinal com largura de banda do canal"
        ],
        "variacao": "Se a afirmação fosse 'fibra óptica tem maior largura de banda que UTP porque usa luz', ela seria correta, pois múltiplos comprimentos de onda permitem maior capacidade."
      }
    ]
  },
  "m2-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modelo OSI é a referência para localizar funções e diagnosticar falhas em rede. Concursos de TI cobram ordem das camadas, função de cada uma e respectiva PDU; confundir camadas 2, 3 e 4 gera perda de pontos em múltipla escolha e certos ou errados.",
      "preRequisitos": [
        "Vocabulário básico de redes: nó, enlace e endereço",
        "Diferença entre endereçamento físico e lógico"
      ],
      "objetivosObservaveis": [
        "Enumerar as sete camadas do modelo OSI em ordem",
        "Associar a função principal a cada camada",
        "Indicar o tipo de PDU de cada camada",
        "Explicar o princípio da divisão em camadas"
      ],
      "competencias": [
        "Organização mental do funcionamento de rede",
        "Localização de funções por camada"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t1-s2 (Encapsulamento e desencapsulamento) — sequência lógica da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta (estimativa pedagógica): o modelo OSI é central nos conteúdos programáticos de redes de concursos, que avaliam ordem, função e PDU de cada camada; não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "O modelo OSI (Open Systems Interconnection), padronizado pela ISO, divide a comunicação em rede em sete camadas, da mais baixa (física) à mais alta (aplicação). Camada 1 - Física: transmissão de bits pelo meio (cabos, fibra, rádio), tensões, taxas, topologia física. PDU: bit. Camada 2 - Enlace de dados: entrega nó-a-nó no mesmo segmento, endereçamento físico (MAC), detecção de erros, controle de acesso ao meio (CSMA/CD, CSMA/CA). PDU: quadro (frame). Camada 3 - Rede: entrega fim-a-fim entre redes…",
      "intermediario": "Associe cada camada à sua função e PDU: Física transmite bits pelo meio; Enlace entrega nó-a-nó no mesmo segmento com endereço MAC (quadro); Rede roteia entre redes com IP (pacote); Transporte entrega processo-a-processo com TCP ou UDP (segmento/datagrama); Sessão estabelece, mantém e encerra diálogos entre aplicações; Apresentação trata formato, tradução, compressão e criptografia; Aplicação é a interface com o usuário e serviços de rede (HTTP, SMTP, DNS, FTP). Nas camadas 5 a 7 a PDU costuma ser chamada de dados.",
      "avancado": "Situar protocolos no modelo: ICMP opera na camada 3 (Rede) para diagnósticos de rede; TLS funciona entre transporte e aplicação (camada 6-ish, apresentação/sessão), criptografando antes dos dados seguirem para o transporte; HTTP, DNS, SMTP e FTP são protocolos de aplicação (camada 7). Cada camada isola responsabilidades, de modo que uma falha em uma camada não impede o funcionamento das outras camadas não afetadas.",
      "especialista": "Localizar, a partir de um sintoma, a camada mais provável de falha: se não há luz nos cabos nem detecção de portadora, suspeite da camada 1 (Física); se há link físico mas não há comunicação MAC a MAC, suspeite da camada 2 (Enlace); se o ping ao IP de destino falha mas o ARP local funciona, suspeite da camada 3 (Rede); se o IP responde mas uma porta específica não atende, suspeite da camada 4 (Transporte)."
    },
    "comparacoes": [
      {
        "tema": "Enlace de dados x camada de rede",
        "a": {
          "rotulo": "Camada 2 — Enlace",
          "texto": "Entrega nó a nó dentro do mesmo segmento, usa endereçamento físico (MAC), PDU quadro."
        },
        "b": {
          "rotulo": "Camada 3 — Rede",
          "texto": "Entrega fim a fim entre redes distintas, usa endereçamento lógico (IP), PDU pacote."
        },
        "diferencaGabarito": "O enlace não roteia entre redes; a rede não faz detecção de erros de quadro no segmento local. Mudança de endereço usado: MAC vs IP."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O modelo OSI é o protocolo usado pela Internet.",
        "porqueErrada": "O OSI é um modelo de referência conceitual padronizado pela ISO, não um conjunto de protocolos implementado na Internet.",
        "versaoCorreta": "A Internet opera a pilha TCP/IP, com IP, TCP, UDP e HTTP; o OSI é uma referência conceitual usada para descrever e comparar funções entre camadas."
      },
      {
        "afirmacaoEquivocada": "A camada de transporte endereça hosts.",
        "porqueErrada": "Confunde transporte com rede: o transporte endereça processos por portas, não hosts.",
        "versaoCorreta": "O endereçamento de host é função da camada de rede (endereço IP). A camada de transporte (TCP/UDP) entrega processo-a-processo usando portas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "OSI (Open Systems Interconnection)",
        "sete camadas",
        "PDU (Protocol Data Unit)",
        "bit, quadro, pacote, segmento"
      ],
      "regras": [
        "Ordem das camadas: 1 Física → 7 Aplicação",
        "Cada camada tem uma PDU específica"
      ],
      "comparacoes": [
        "Enlace entrega no mesmo segmento (MAC); rede entrega entre redes (IP)"
      ],
      "fluxos": [
        "Dados descem da aplicação (7) à física (1) no envio e sobem na recepção"
      ],
      "excecoes": [
        "Sessão e apresentação raramente existem como camadas separadas na prática"
      ],
      "palavrasChave": [
        "camada",
        "função",
        "PDU",
        "ISO",
        "encapsulamento"
      ],
      "checklist": [
        "Enumero as sete camadas em ordem?",
        "Associo a função a cada camada?",
        "Indico a PDU de cada camada?",
        "Explico por que dividir em camadas?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em qual camada do modelo OSI atua um roteador ao decidir para onde enviar um pacote IP?",
        "dados": "Dispositivo: roteador. Dado examinado: endereço IP de destino do pacote. Mecanismo: consulta da tabela de rotas.",
        "conceitos": [
          "Camada 3 — Rede",
          "PDU pacote",
          "Endereçamento lógico (IP)"
        ],
        "estrategia": "Identifique o endereço examinado pelo equipamento. Roteador usa IP de destino, logo atua na camada de rede. Switch de camada 2 usaria MAC, não IP.",
        "execucao": [
          "1 O roteador recebe o quadro Ethernet.",
          "2 Desencapsula até obter o pacote IP.",
          "3 Examina o endereço IP de destino.",
          "4 Consulta a tabela de rotas e escolhe a próxima interface.",
          "5 Reencapsula e encaminha."
        ],
        "resultado": "Camada 3 (Rede) — o roteador examina o endereço IP de destino e consulta sua tabela de rotas para encaminhar o pacote para a próxima interface.",
        "justificativa": "O roteamento entre redes distintas e o uso do endereço IP são funções exclusivas da camada 3 (Rede), cuja PDU é o pacote, conforme definido no modelo OSI.",
        "errosFrequentes": [
          "Confundir roteador com switch e responder camada 2 (Enlace) por causa do quadro Ethernet de entrada.",
          "Responder camada 4 (Transporte) por associar pacote a transporte, que na verdade usa segmento."
        ],
        "variacao": "Se o equipamento fosse um switch de camada 2 comutando dentro de uma VLAN, ele usaria o endereço MAC e a PDU seria o quadro, não o pacote IP."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um switch de camada 2 (convencional) comuta tráfego dentro de uma VLAN. Em qual camada ele opera e qual PDU manipula?",
        "dados": "Equipamento: switch de camada 2. Contexto: dentro de uma VLAN (mesmo segmento). PDU candidata: quadro Ethernet.",
        "conceitos": [
          "Camada 2 — Enlace de dados",
          "Endereço MAC",
          "PDU quadro"
        ],
        "estrategia": "O switch opera dentro de um único segmento (VLAN) e decide com base no endereço MAC de destino, sem examinar o IP. Portanto é camada de enlace e manipula quadros.",
        "execucao": [
          "1 O switch recebe um quadro Ethernet.",
          "2 Lê o endereço MAC de destino no cabeçalho do quadro.",
          "3 Consulta a tabela de endereços MAC (CAM table).",
          "4 Encaminha o quadro apenas pela porta associada a esse MAC.",
          "5 Não examina nem altera o pacote IP encapsulado."
        ],
        "resultado": "Camada 2 (Enlace) — manipula quadros Ethernet e toma decisão com base no endereço MAC de destino. Não examina o IP.",
        "justificativa": "A comutação dentro de um mesmo segmento usando endereço MAC é a função definidora da camada de enlace (camada 2), cuja PDU é o quadro.",
        "errosFrequentes": [
          "Dizer que o switch usa IP porque a rede é IP, confundindo enlace com rede.",
          "Afirmar que o switch altera o cabeçalho IP, o que só ocorre no roteador (camada 3)."
        ],
        "variacao": "Se o tráfego tivesse de cruzar VLANs distintas, seria necessário um roteador ou switch de camada 3, passando a usar IP e PDU pacote."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: \"O modelo OSI é o protocolo usado pela Internet.\" — decidir se procede, identificando o modelo efetivo.",
        "dados": "Enunciado da afirmação. Contexto: Internet e seus protocolos (IP, TCP, UDP, HTTP).",
        "conceitos": [
          "Modelo de referência conceitual",
          "Modelo TCP/IP",
          "Protocolo vs modelo"
        ],
        "estrategia": "Distinguir modelo de referência (OSI) de conjunto de protocolos implementado (TCP/IP). A Internet não implementa o OSI como um todo; usa TCP/IP com quatro camadas.",
        "execucao": [
          "1 Identifique a afirmação: \"OSI é o protocolo da Internet\".",
          "2 Reconheça que OSI é um modelo conceitual da ISO, não um protocolo.",
          "3 Lembre que a Internet usa o modelo TCP/IP (quatro camadas).",
          "4 Conclua que a afirmação confunde modelo com implementação."
        ],
        "resultado": "Errado. O modelo OSI é um modelo de referência conceitual. O modelo OSI é conceitual: quem trafega na Internet é a pilha TCP/IP, com IP, TCP, UDP e HTTP. O OSI continua útil para descrever e comparar funções entre camadas.",
        "justificativa": "A afirmação confunde um modelo de referência com um conjunto de protocolos; a Internet é baseada em TCP/IP, não em OSI, que tem papel descritivo e didático.",
        "errosFrequentes": [
          "Acreditar que OSI e TCP/IP são sinônimos e intercambiáveis.",
          "Pensar que a Internet implementa todas as sete camadas do OSI."
        ],
        "variacao": "Se a afirmação fosse \"O modelo TCP/IP tem quatro camadas\", ela estaria correta, pois TCP/IP é o modelo efetivo da Internet."
      }
    ]
  },
  "m2-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O encapsulamento explica como dados atravessam camadas e onde residem endereços e portas; a prova cobra a ordem e o conteúdo de cada cabeçalho, sendo tema de presença permanente no conteúdo programático de redes.",
      "preRequisitos": [
        "As sete camadas do modelo OSI",
        "Diferença entre cabeçalho e payload"
      ],
      "objetivosObservaveis": [
        "Definir encapsulamento",
        "Ordenar a adição de cabeçalhos",
        "Descrever o desencapsulamento",
        "Localizar portas, IP e MAC"
      ],
      "competencias": [
        "Leitura de diagramas de pacote",
        "Compreensão do fluxo de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — base da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta (estimativa pedagógica): encapsulamento/desencapsulamento é central nos conteúdos programáticos de redes, que avaliam a ordem e o conteúdo de cada cabeçalho; não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Encapsulamento é o processo pelo qual, ao enviar dados, cada camada adiciona seu próprio cabeçalho (e às vezes trailer) à unidade de dados recebida da camada superior, criando a PDU da camada. Ordem de envio (de cima para baixo): a aplicação gera os dados; a camada de apresentação/sessão os passa; a camada de transporte adiciona cabeçalho com portas e número de sequência (segmento); a camada de rede adiciona cabeçalho com endereços IP (pacote); a camada de enlace adiciona cabeçalho e trailer com…",
      "intermediario": "Ordem de envio (descendente): aplicação gera os dados; transporte acrescenta portas e número de sequência formando o segmento; rede acrescenta endereços IP formando o pacote; enlace acrescenta endereços MAC e trailer FCS formando o quadro; física converte em bits no meio. Desencapsulamento é o inverso na recepção: cada camada remove e interpreta seu próprio cabeçalho, entregando o payload à camada superior até a aplicação.",
      "avancado": "Localizar campos em uma PDU: as portas (processo) estão no cabeçalho de transporte; os IPs (host) estão no cabeçalho de rede; os MACs (interface no enlace) estão no cabeçalho de enlace. O encapsulamento preserva o payload da camada superior: cada camada apenas adiciona seu cabeçalho sem reescrever os dados anteriores, o que garante interoperabilidade.",
      "especialista": "Analisar uma captura e identificar as camadas de cada campo: o cabeçalho externo é de enlace (MAC + FCS), seguido do cabeçalho de rede (IPs), depois do cabeçalho de transporte (portas) e, por fim, os dados da aplicação. Exceções: alguns protocolos, como TLS, se posicionam entre camadas (entre transporte e aplicação)."
    },
    "comparacoes": [
      {
        "tema": "Encapsulamento x desencapsulamento",
        "a": {
          "rotulo": "Encapsulamento (envio)",
          "texto": "Cada camada acrescenta seu próprio cabeçalho (e, às vezes, trailer) à PDU recebida da camada superior, de cima para baixo."
        },
        "b": {
          "rotulo": "Desencapsulamento (recepção)",
          "texto": "Cada camada remove e interpreta seu próprio cabeçalho, entregando o payload à camada superior, de baixo para cima."
        },
        "diferencaGabarito": "O emissor encapsula (adiciona cabeçalhos); o receptor desencapsula (remove cabeçalhos). A ordem é inversa entre os dois processos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Encapsulamento significa comprimir os dados para economizar banda.",
        "porqueErrada": "Encapsulamento é adicionar cabeçalhos de controle, não comprimir os dados; compressão é função opcional da camada de apresentação.",
        "versaoCorreta": "Errado. Encapsulamento é adicionar cabeçalhos de controle, não comprimir. Compressão é função da camada de apresentação (opcional) e não é o mesmo conceito."
      },
      {
        "afirmacaoEquivocada": "Desencapsulamento ocorre no emissor.",
        "porqueErrada": "Desencapsulamento é o processo inverso, que ocorre na recepção; o emissor é quem encapsula.",
        "versaoCorreta": "Errado. O emissor encapsula (adiciona cabeçalhos ao descer as camadas); o receptor desencapsula (remove cabeçalhos ao subir as camadas)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Encapsulamento",
        "Desencapsulamento",
        "Cabeçalho",
        "Trailer",
        "Payload",
        "PDU"
      ],
      "regras": [
        "Aplicação → transporte (portas) → rede (IPs) → enlace (MACs) → física (bits)",
        "Na recepção, a ordem é inversa: cada camada remove seu próprio cabeçalho (desencapsulamento)"
      ],
      "comparacoes": [
        "O cabeçalho de transporte traz portas; o de rede traz IPs"
      ],
      "fluxos": [
        "No envio, cada camada adiciona seu cabeçalho; na recepção, cada camada remove o seu"
      ],
      "excecoes": [
        "Alguns protocolos, como TLS, se posicionam entre camadas"
      ],
      "palavrasChave": [
        "envelope",
        "porta",
        "IP",
        "MAC",
        "FCS"
      ],
      "checklist": [
        "Defino encapsulamento?",
        "Ordeno os cabeçalhos?",
        "Descrevo o desencapsulamento?",
        "Localizo porta, IP e MAC?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Descrever, em ordem, os cabeçalhos adicionados a uma mensagem HTTP ao ser enviada por Ethernet.",
        "dados": "Mensagem HTTP como payload inicial. Caminho: aplicação → transporte → rede → enlace → física.",
        "conceitos": [
          "Encapsulamento",
          "Cabeçalho TCP",
          "Cabeçalho IP",
          "Cabeçalho+trailer Ethernet"
        ],
        "estrategia": "Siga a ordem descendente do envio: a aplicação gera os dados; transporte adiciona portas; rede adiciona IPs; enlace adiciona MACs e FCS; física converte em bits.",
        "execucao": [
          "1 A aplicação gera a mensagem HTTP.",
          "2 O transporte adiciona cabeçalho TCP (portas 80/443, sequência), formando o segmento.",
          "3 A rede adiciona cabeçalho IP (IPs origem/destino), formando o pacote.",
          "4 O enlace adiciona cabeçalho e trailer Ethernet (MACs origem/destino, FCS), formando o quadro.",
          "5 A física converte o quadro em bits no meio."
        ],
        "resultado": "Dados HTTP → cabeçalho TCP (porta 80/443, sequência) → cabeçalho IP (IP origem/destino) → cabeçalho+trailer Ethernet (MAC origem/destino, FCS) → bits no meio físico.",
        "justificativa": "Cada camada acrescenta seu cabeçalho à PDU da camada superior, seguindo a ordem descendente do envio, conforme definido no modelo de encapsulamento.",
        "errosFrequentes": [
          "Inverter a ordem dos cabeçalhos (colocar IP antes de TCP).",
          "Esquecer o trailer FCS do quadro Ethernet."
        ],
        "variacao": "Se o transporte fosse UDP em vez de TCP, o cabeçalho de transporte seria mais simples (sem número de sequência), mas a ordem das camadas permaneceria a mesma."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um analista de rede captura um quadro Ethernet e vê dentro dele um pacote IP, dentro do qual há um segmento TCP, dentro do qual há uma requisição HTTP. Como isso é possível?",
        "dados": "Quadro Ethernet capturado contendo pacote IP contendo segmento TCP contendo requisição HTTP.",
        "conceitos": [
          "Encapsulamento",
          "Desencapsulamento",
          "PDU aninhada"
        ],
        "estrategia": "Encapsulamento em ação: cada camada anexa seu cabeçalho à PDU da camada superior. A captura exibe o quadro completo e, ao desencapsular camada por camada, recupera-se Ethernet, IP, TCP e HTTP.",
        "execucao": [
          "1 O analista captura o quadro Ethernet completo.",
          "2 Remove o cabeçalho/trailer Ethernet: resta o pacote IP.",
          "3 Remove o cabeçalho IP: resta o segmento TCP.",
          "4 Remove o cabeçalho TCP: resta a requisição HTTP.",
          "5 Confirma que cada camada removeu seu próprio cabeçalho."
        ],
        "resultado": "É o encapsulamento em ação: cada camada empacota a PDU da camada superior. A captura mostra o quadro completo; ao desencapsular camada por camada, recuperam-se IP, TCP e HTTP.",
        "justificativa": "O aninhamento de PDUs reflete a ordem de encapsulamento: Ethernet (enlace) envolve IP (rede), que envolve TCP (transporte), que envolve HTTP (aplicação).",
        "errosFrequentes": [
          "Acreditar que as camadas sobrescrevem os dados anteriores, em vez de encapsulá-los.",
          "Confundir a ordem de remoção na recepção com a ordem de adição no envio."
        ],
        "variacao": "Se o protocolo de transporte fosse UDP, o segmento seria um datagrama UDP, mas o princípio de aninhamento e desencapsulamento permaneceria idêntico."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: \"Encapsulamento significa comprimir os dados para economizar banda.\" — avaliar se procede, distinguindo encapsulamento de compressão.",
        "dados": "Enunciado da afirmação. Conceitos envolvidos: encapsulamento vs compressão.",
        "conceitos": [
          "Encapsulamento",
          "Cabeçalho de controle",
          "Compressão (camada de apresentação)"
        ],
        "estrategia": "Distinguir encapsulamento (adicionar cabeçalhos de controle) de compressão (reduzir tamanho dos dados). Compressão é função opcional da camada de apresentação, não é encapsulamento.",
        "execucao": [
          "1 Identifique a afirmação: \"encapsulamento comprime os dados\".",
          "2 Reconheça que encapsulamento adiciona cabeçalhos, não reduz dados.",
          "3 Lembre que compressão é opcional e pertence à camada de apresentação.",
          "4 Conclua que a afirmação confunde dois conceitos distintos."
        ],
        "resultado": "Errado. Encapsulamento acrescenta cabeçalhos de controle aos dados, não os comprime; a compressão cabe à camada de apresentação, de forma opcional.",
        "justificativa": "Encapsulamento aumenta ligeiramente o tamanho (acrescenta cabeçalhos) e serve ao controle, não à economia de banda; compressão é um mecanismo separado e opcional.",
        "errosFrequentes": [
          "Confundir encapsulamento com compressão por ambos mexerem no tamanho dos dados.",
          "Atribuir compressão a qualquer camada, quando é específica da apresentação."
        ],
        "variacao": "Se a afirmação fosse \"A compressão é função opcional da camada de apresentação\", estaria correta, pois diferencia corretamente compressão de encapsulamento."
      }
    ]
  },
  "m2-u2-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Sem distinguir comunicação vertical de horizontal, não se explica como camadas conversam nem por qual elemento um equipamento decide o encaminhamento. Provas cobram a camada de atuação de hub, switch e roteador.",
      "preRequisitos": [
        "Camadas do modelo OSI e suas funções",
        "Encapsulamento e endereços MAC e IP"
      ],
      "objetivosObservaveis": [
        "Distinguir comunicação vertical de horizontal",
        "Associar hub, switch, roteador e gateway à camada em que atuam",
        "Explicar que a conversa entre pares é lógica e depende do encapsulamento"
      ],
      "competencias": [
        "Leitura de arquitetura em camadas e do cabeçalho lido por cada uma",
        "Identificação de dispositivos e do critério de decisão de cada um"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t1-s2 (Encapsulamento e desencapsulamento) — mecanismo que sustenta a conversa lógica entre pares"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média (estimativa pedagógica): a distinção vertical/horizontal e a camada de atuação dos equipamentos integram o conteúdo programático introdutório de redes; não há dado estatístico comprovado."
      }
    },
    "niveis": {
      "iniciante": "Comunicação vertical (inter-camadas): ocorre dentro de um mesmo host, entre camadas adjacentes, por interfaces de serviço — a camada superior solicita um serviço à inferior, que o executa. Comunicação horizontal (peer-to-peer lógica): ocorre entre camadas equivalentes de hosts diferentes, como se conversassem diretamente, embora os dados desçam a pilha do host A e subam a do host B, o que materializa a conversa pelos cabeçalhos.",
      "intermediario": "No nível intermediário o aluno separa os dois eixos: a vertical é intra-host, entre camadas adjacentes, e usa interface de serviço; a horizontal é inter-host, entre camadas pares, e usa protocolo e cabeçalho. Em seguida associa cada equipamento ao elemento que examina: hub na camada 1; switch na 2 (MAC); roteador na 3 (IP); firewall stateful nas 3 e 4; firewall de aplicação na 7.",
      "avancado": "No nível avançado o aluno reconcilia a lógica com o percurso real: não existe enlace dedicado entre as camadas de transporte de dois hosts. Cada segmento é encapsulado em pacote IP e em quadro Ethernet e enviado pelo meio, sendo reencapsulado em cada salto. Também reconhece que um switch de camada 3 roteia e que um roteador doméstico agrega NAT, firewall e switch.",
      "especialista": "No nível especialista o aluno escolhe a camada de atuação segundo o requisito: camadas 3 e 4 para bloquear por IP, porta e estado da conexão; camada 7, com proxy ou WAF, para inspecionar conteúdo HTTP; camada 2, com switch, para isolar domínios de broadcast; camada 3, com roteador, para interligar redes. Justifica a decisão mostrando qual cabeçalho é lido."
    },
    "comparacoes": [
      {
        "tema": "Comunicação vertical x comunicação horizontal",
        "a": {
          "rotulo": "Vertical",
          "texto": "Acontece dentro de um mesmo host, entre camadas adjacentes, por interface de serviço: a superior solicita um serviço à inferior, que o executa."
        },
        "b": {
          "rotulo": "Horizontal",
          "texto": "Acontece entre camadas equivalentes de hosts diferentes, de forma lógica: cada camada conversa com seu par por protocolo e cabeçalho."
        },
        "diferencaGabarito": "A vertical é intra-host e real; a horizontal é inter-host e lógica, implementada sobre o percurso vertical. Confundi-las leva a afirmar que os dados sobem direto entre pares."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A comunicação horizontal é física direta entre camadas iguais de hosts diferentes.",
        "porqueErrada": "Sugere enlaces dedicados entre camadas pares; não há ligação física direta entre a camada de transporte de dois hosts.",
        "versaoCorreta": "A horizontal é lógica: cada camada conversa com seu par por cabeçalhos, e os dados percorrem toda a pilha do emissor, o meio físico e a do receptor."
      },
      {
        "afirmacaoEquivocada": "Todo firewall atua exclusivamente na camada 3 (rede).",
        "porqueErrada": "Descreve só a filtragem por IP; firewalls modernos também mantêm estado das conexões TCP na camada 4 e inspecionam conteúdo na 7.",
        "versaoCorreta": "Um firewall pode atuar em várias camadas: filtragem de pacotes na 3, inspeção stateful na 4 e filtragem de aplicação, por proxy ou WAF, na 7."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um switch convencional examina o endereço IP para encaminhar quadros.'",
        "porqueErrada": "Confunde switch de camada 2 com switch de camada 3: o switch convencional decide pelo endereço MAC e não tem função de roteamento.",
        "versaoCorreta": "Errado. O switch de camada 2 encaminha quadros pelo endereço MAC; o exame do IP é próprio do switch L3, equipamento distinto do switch convencional."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Comunicação vertical (intra-host)",
        "Comunicação horizontal (lógica, inter-host)",
        "Camada de atuação do equipamento"
      ],
      "regras": [
        "Camadas pares de hosts distintos conversam por protocolo e cabeçalho",
        "Repetidor e hub na 1; switch na 2; roteador na 3"
      ],
      "comparacoes": [
        "Vertical ocorre no mesmo host; horizontal ocorre entre hosts diferentes"
      ],
      "fluxos": [
        "O pedido de serviço desce até a física no envio e sobe na recepção"
      ],
      "excecoes": [
        "Equipamentos reais combinam funções: switch L3 roteia e roteador doméstico faz NAT e firewall"
      ],
      "palavrasChave": [
        "serviço",
        "camada",
        "par lógico",
        "MAC"
      ],
      "checklist": [
        "Sei definir comunicação vertical?",
        "Sei definir comunicação horizontal?",
        "Associo hub, switch e roteador às camadas 1, 2 e 3?",
        "Explico que a conversa entre pares depende do encapsulamento?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um pacote IP viaja de um PC a outro passando por um switch e um roteador. Quais dispositivos leem quais cabeçalhos?",
        "dados": "Topologia: PC-A → switch → roteador → PC-B. Protocolos: Ethernet (quadro com MAC) sobre IP (pacote com IP).",
        "conceitos": [
          "Camada 2 — Enlace de dados",
          "Camada 3 — Rede",
          "Cabeçalho por camada"
        ],
        "estrategia": "Identifique o cabeçalho que cada equipamento lê: o switch decide pelo quadro (MAC), o roteador pelo pacote (IP) e o host sobe a pilha até a aplicação.",
        "execucao": [
          "1) O PC-A encapsula: cabeçalho de transporte, IP e Ethernet.",
          "2) O switch lê o MAC de destino no quadro e encaminha.",
          "3) O roteador desencapsula, lê o IP e consulta a tabela de rotas.",
          "4) O roteador reencapsula e encaminha; o PC-B sobe a pilha até a aplicação."
        ],
        "resultado": "Switch lê cabeçalho Ethernet (MAC) para encaminhar; roteador lê cabeçalho IP (IP) para rotear; o host destino lê tudo até a aplicação. Cada dispositivo processa apenas até sua camada.",
        "justificativa": "Cada equipamento lê só o cabeçalho da camada em que atua: o switch decide por MAC no enlace local e o roteador por IP entre redes; o host sobe a pilha inteira para entregar os dados ao processo correto.",
        "errosFrequentes": [
          "Dizer que o switch lê o cabeçalho IP, confundindo camada 2 com camada 3.",
          "Afirmar que o roteador decide a rota pelo cabeçalho TCP, quando usa apenas o endereço IP."
        ],
        "variacao": "Se o switch fosse de camada 3 com roteamento entre VLANs, ele também leria o cabeçalho IP para decidir entre sub-redes, mantendo o MAC na entrega local."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um firewall stateful inspeciona conexões TCP entre a rede interna e a Internet. Em quais camadas do modelo OSI ele atua?",
        "dados": "Firewall stateful na borda da rede. Tráfego: conexões TCP de hosts internos para a Internet, incluindo HTTP e HTTPS.",
        "conceitos": [
          "Camada 3 — Rede (IP)",
          "Camada 4 — Transporte (TCP)",
          "Camada 7 — Aplicação (HTTP)"
        ],
        "estrategia": "Liste o que o equipamento examina: filtra por endereço e porta e mantém o estado das conexões TCP; se inspeciona conteúdo HTTP, alcança a camada de aplicação.",
        "execucao": [
          "1) Identificar o filtro de pacotes por IP de origem e destino (camada 3).",
          "2) Identificar o filtro por porta, flags TCP e estado da conexão (camada 4).",
          "3) Verificar se há proxy ou WAF examinando URLs e comandos HTTP (camada 7).",
          "4) Concluir o conjunto de camadas em que o equipamento atua."
        ],
        "resultado": "Camadas 3 e 4 no mínimo (IP e TCP: endereços, portas, flags, estado da conexão); firewalls de aplicação (WAF) também na camada 7 (conteúdo HTTP).",
        "justificativa": "O firewall lê o cabeçalho IP para conhecer os endereços e o cabeçalho TCP para portas, flags e estado da conexão, o que o situa nas camadas 3 e 4; inspecionar conteúdo HTTP acrescenta a camada 7.",
        "errosFrequentes": [
          "Responder somente camada 3, esquecendo o estado da conexão TCP.",
          "Atribuir ao firewall stateful a inspeção de conteúdo HTTP, que é função de proxy ou WAF."
        ],
        "variacao": "Se o enunciado citar um proxy reverso que descarta injeção de SQL em URLs, a resposta passa a exigir a camada 7 (aplicação) além das camadas 3 e 4."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Um switch convencional examina o endereço IP para encaminhar quadros.' — decidir se procede.",
        "dados": "Afirmação a avaliar. Equipamento citado: switch convencional de camada 2. Contraponto: switch de camada 3, que examina IP.",
        "conceitos": [
          "Switch de camada 2",
          "Switch de camada 3",
          "Endereço MAC versus endereço IP"
        ],
        "estrategia": "Compare o equipamento citado com o descrito: o switch convencional decide por MAC; o switch de camada 3 decide por IP. A frase atribui ao primeiro o critério do segundo.",
        "execucao": [
          "1) Ler a afirmação e isolar o equipamento: switch convencional.",
          "2) Recordar o critério de decisão do switch de camada 2: endereço MAC de destino do quadro.",
          "3) Verificar que o switch L3 lê o IP, mas é equipamento distinto do switch convencional.",
          "4) Concluir que a afirmação é falsa e corrigi-la."
        ],
        "resultado": "Errado. Switch de camada 2 encaminha com base no MAC. Switch L3 (roteador disfarçado) examina IP, mas não é o switch convencional.",
        "justificativa": "O gabarito corrige a frase porque o switch convencional opera no enlace: lê o quadro e decide pelo MAC. O exame do IP é da camada de rede, presente no switch L3 e no roteador.",
        "errosFrequentes": [
          "Marcar a afirmação como certa por saber que existem switches que examinam IP.",
          "Tratar switch L3 e roteador como sinônimos, ignorando que a prova distingue os equipamentos."
        ],
        "variacao": "Trocar o equipamento: 'Um switch de camada 3 examina o IP para encaminhar entre VLANs' — aí a afirmação é correta e exige notar a camada."
      }
    ]
  },
  "m2-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modelo TCP/IP é o que efetivamente opera na Internet, e a prova cobra a associação entre suas quatro camadas e os protocolos que nelas atuam. Situar IP, ICMP, TCP, UDP e HTTP evita erro em múltipla escolha e certos ou errados.",
      "preRequisitos": [
        "Modelo OSI e suas sete camadas",
        "Conceito de protocolo e de porta"
      ],
      "objetivosObservaveis": [
        "Enumerar as quatro camadas do modelo TCP/IP na ordem correta",
        "Associar protocolos típicos a cada camada, como Ethernet, IP, ICMP, TCP, UDP e HTTP",
        "Explicar a correspondência aproximada com o modelo OSI"
      ],
      "competencias": [
        "Organização do conhecimento de protocolos por camada",
        "Comparação entre modelos de referência em rede"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — referência para a correspondência entre modelos"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta (estimativa pedagógica): as quatro camadas e seus protocolos são centrais em redes, cobrados em itens que pedem a camada de um protocolo ou a correspondência com o OSI; não é dado estatístico."
      }
    },
    "niveis": {
      "iniciante": "O modelo TCP/IP (DoD) tem quatro camadas: (1) Acesso à rede: Ethernet, Wi-Fi, ARP, PPP — equivale às camadas 1 e 2 do OSI. (2) Internet: IP (v4/v6), ICMP, roteamento — equivale à camada 3. (3) Transporte: TCP, UDP — equivale à camada 4. (4) Aplicação: HTTP, HTTPS, DNS, SMTP, FTP, SSH e DHCP — equivale às camadas 5, 6 e 7. Diferente do OSI, o TCP/IP não separa sessão e apresentação; essas funções são absorvidas pela aplicação.",
      "intermediario": "No nível intermediário o aluno associa cada protocolo à camada e confere a equivalência com o OSI: Ethernet, Wi-Fi e PPP em acesso à rede; IP e ICMP em Internet; TCP e UDP em transporte; HTTP, HTTPS, DNS, SMTP, FTP, SSH e DHCP em aplicação. Explica que não há camadas de sessão e apresentação, incorporadas pela aplicação.",
      "avancado": "No nível avançado o aluno explica as fusões: acesso à rede reúne as camadas 1 e 2 do OSI e aplicação reúne as 5, 6 e 7. Situa protocolos transversais, como TLS, entre transporte e aplicação, e ICMP na Internet. Reconhece o princípio de robustez: a confiabilidade é delegada ao TCP nas pontas.",
      "especialista": "No nível especialista o aluno compara os modelos pelo propósito: o OSI é referência didática e de projeto; o TCP/IP descreve o que a Internet executa. Decide a camada de um protocolo pela função, não pelo nome do campo: ARP fica no acesso à rede; o DNS, na aplicação."
    },
    "comparacoes": [
      {
        "tema": "Modelo OSI x modelo TCP/IP",
        "a": {
          "rotulo": "OSI",
          "texto": "Sete camadas, da física à aplicação, com sessão e apresentação separadas; vocação de referência didática."
        },
        "b": {
          "rotulo": "TCP/IP",
          "texto": "Quatro camadas: acesso à rede, Internet, transporte e aplicação; sessão e apresentação ficam absorvidas pela aplicação."
        },
        "diferencaGabarito": "A contagem difere: sete contra quatro. No TCP/IP as funções das camadas 5, 6 e 7 do OSI ficam reunidas na aplicação, e não existe camada de sessão separada."
      },
      {
        "tema": "Camada Internet x camada Transporte",
        "a": {
          "rotulo": "Internet",
          "texto": "Endereça e roteia entre redes com IPv4 ou IPv6, com ICMP para diagnóstico e mensagens de erro."
        },
        "b": {
          "rotulo": "Transporte",
          "texto": "Entrega processo a processo por portas, com TCP orientado à conexão ou UDP sem conexão."
        },
        "diferencaGabarito": "A Internet endereça hosts e o transporte endereça processos: o IP entrega ao destino e o TCP ou UDP distingue a aplicação dentro do destino."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "ICMP pertence à camada de Transporte do TCP/IP.",
        "porqueErrada": "O ICMP não é de transporte: não usa portas nem transporta dados de aplicação; apenas reporta erros e diagnóstico do IP.",
        "versaoCorreta": "Errado. ICMP pertence à camada Internet, ao lado do IP, e serve a mensagens de erro e diagnóstico, como o eco usado pelo ping."
      },
      {
        "afirmacaoEquivocada": "ARP pertence à camada de transporte do modelo TCP/IP.",
        "porqueErrada": "O ARP resolve IP em MAC no mesmo segmento, função de enlace; não usa portas nem entrega dados de aplicação.",
        "versaoCorreta": "O ARP resolve IP em MAC na camada de acesso à rede, equivalente à camada 2 do OSI, embora carregue campos IP."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O modelo TCP/IP tem sete camadas, como o OSI.'",
        "porqueErrada": "Confunde os dois modelos: o TCP/IP (DoD) tem quatro camadas; a variante de cinco camadas, que separa física e enlace, é apenas recurso didático.",
        "versaoCorreta": "Errado. O modelo DoD clássico tem quatro camadas; o número sete pertence ao OSI, e a variante de cinco camadas é apenas divisão didática do acesso à rede."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Modelo TCP/IP (DoD)",
        "Acesso à rede",
        "Internet",
        "Transporte"
      ],
      "regras": [
        "Acesso à rede equivale às camadas 1 e 2 do OSI",
        "Internet equivale à camada 3; transporte, à 4; aplicação, às 5, 6 e 7"
      ],
      "comparacoes": [
        "Sete camadas no OSI contra quatro no TCP/IP; sessão e apresentação são absorvidas pela aplicação"
      ],
      "fluxos": [
        "A requisição desce de aplicação a acesso à rede no emissor e sobe na ordem inversa no destino"
      ],
      "excecoes": [
        "TLS situa-se entre transporte e aplicação, sem camada própria",
        "ARP é associado ao acesso à rede embora carregue endereços IP"
      ],
      "palavrasChave": [
        "DoD",
        "IP",
        "TCP",
        "UDP"
      ],
      "checklist": [
        "Enumero as quatro camadas na ordem correta?",
        "Associo protocolos típicos a cada camada?",
        "Comparo o TCP/IP com as sete camadas do OSI?",
        "Explico a ausência da camada de sessão?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em qual camada do modelo TCP/IP opera o protocolo DNS usado na resolução de nomes de domínio?",
        "dados": "Protocolo: DNS. Porta padrão: 53. Transporte: UDP para consultas e TCP para transferências de zona.",
        "conceitos": [
          "Camada de aplicação",
          "Camada de transporte",
          "UDP e TCP"
        ],
        "estrategia": "Classifique o DNS pela função — tradução de nomes em endereços IP, serviço de aplicação — e depois verifique qual camada entrega as mensagens.",
        "execucao": [
          "1) Identificar a função do DNS: resolução de nomes em endereços IP.",
          "2) Reconhecer que é serviço usado por aplicações, logo camada de aplicação.",
          "3) Verificar o transporte: UDP na porta 53 e TCP para transferências de zona.",
          "4) Concluir que o DNS é camada de aplicação."
        ],
        "resultado": "Camada de Aplicação — DNS é um protocolo de aplicação que usa UDP (e TCP em transferências de zona) na camada de transporte.",
        "justificativa": "A camada de aplicação reúne protocolos usados diretamente pelos programas, como HTTP, SMTP e DNS. O UDP e o TCP que o DNS usa ficam uma camada abaixo, no transporte.",
        "errosFrequentes": [
          "Responder camada de transporte ao ver a porta 53 e o UDP, confundindo o meio de entrega com o protocolo que o usa.",
          "Classificar o DNS como camada Internet por ele manipular endereços IP."
        ],
        "variacao": "Substituir o DNS pelo SSH: o aluno deve responder camada de aplicação, porta 22, sobre TCP na camada de transporte."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador configura VLANs e um trunk 802.1Q entre dois switches. Em qual camada do modelo TCP/IP isso ocorre?",
        "dados": "Switch gerenciável com VLAN 10 (Recursos Humanos) e VLAN 20 (Financeiro) em trunk 802.1Q; roteamento entre VLANs feito por roteador.",
        "conceitos": [
          "Camada de acesso à rede",
          "Camada 2 do OSI (enlace)",
          "Roteamento entre VLANs (camada 3)"
        ],
        "estrategia": "Identifique a função configurada: VLANs e tag 802.1Q segmentam domínios de broadcast e marcam quadros, funções de enlace no TCP/IP.",
        "execucao": [
          "1) Reconhecer que VLANs criam domínios de broadcast separados na camada 2.",
          "2) Reconhecer que o trunk 802.1Q insere tag no cabeçalho do quadro Ethernet.",
          "3) Concluir que a configuração ocorre na camada de acesso à rede do TCP/IP (camada 2 do OSI).",
          "4) Diferenciar: a comunicação entre VLANs distintas exige a camada Internet."
        ],
        "resultado": "Camada de Acesso à rede (Link) — VLANs são uma função de enlace (camada 2), embora o roteamento entre VLANs seja camada 3.",
        "justificativa": "VLAN e 802.1Q atuam sobre quadros Ethernet: criam domínios de broadcast e marcam a VLAN de cada quadro, funções da camada 2 do OSI, equivalente ao acesso à rede; só o tráfego entre VLANs sobe para a Internet.",
        "errosFrequentes": [
          "Responder camada Internet por haver endereços IP configurados nas VLANs.",
          "Confundir VLAN, função de camada 2, com sub-rede, que é conceito de camada 3."
        ],
        "variacao": "Se o administrador configurasse uma rota estática entre as VLANs, a ação passaria para a camada Internet (camada 3 do OSI)."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O modelo TCP/IP tem sete camadas, como o OSI.' — decidir se procede e corrigi-la.",
        "dados": "Afirmação a avaliar. Modelo citado: TCP/IP (DoD). Comparação: OSI, com sete camadas. Variante didática de cinco camadas.",
        "conceitos": [
          "Modelo TCP/IP",
          "Modelo OSI",
          "Camada de aplicação (camadas 5, 6 e 7)"
        ],
        "estrategia": "Recorra à definição do modelo DoD, que fixa quatro camadas. A confusão com sete vem do OSI, e a variante de cinco é didática.",
        "execucao": [
          "1) Isolar a afirmação: o TCP/IP teria sete camadas.",
          "2) Recordar as quatro camadas do modelo DoD: acesso à rede, Internet, transporte e aplicação.",
          "3) Verificar que o número sete pertence ao OSI e que a variante de cinco separa física e enlace.",
          "4) Concluir que a afirmação é falsa e corrigi-la."
        ],
        "resultado": "Errado. O TCP/IP tem quatro camadas. A confusão surge porque alguns materiais didáticos 'esticam' o TCP/IP para cinco camadas separando física e enlace — mas o modelo clássico DoD tem quatro.",
        "justificativa": "A contagem de camadas é a diferença estrutural de maior peso no conteúdo programático entre os modelos: o TCP/IP clássico define quatro camadas, sete é a do OSI e a variante de cinco separa funções do acesso à rede.",
        "errosFrequentes": [
          "Aceitar a afirmação por confundir os dois modelos de referência.",
          "Adotar a variante de cinco camadas como se fosse o modelo clássico cobrado em prova."
        ],
        "variacao": "Trocar a afirmação: 'No TCP/IP, as camadas 5, 6 e 7 do OSI ficam na camada de aplicação' — nesse caso a afirmação é correta e exige explicar a fusão."
      }
    ]
  },
  "m2-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova de redes distingue protocolo, serviço, porta e aplicação, e confundi-los altera a resposta. Saber que HTTP é protocolo, que a entrega confiável é serviço do TCP, que a porta 80 identifica o processo servidor e que o navegador é a aplicação permite classificar itens. Essa precisão é pré-requisito para configurar serviços e firewalls por porta.",
      "preRequisitos": [
        "Camadas do modelo TCP/IP",
        "Conceito de protocolo de rede"
      ],
      "objetivosObservaveis": [
        "Definir protocolo, serviço, porta e aplicação separadamente",
        "Associar cada protocolo ao seu serviço e à porta que o expõe"
      ],
      "competencias": [
        "Precisão conceitual: distinguir protocolo, serviço, porta e aplicação",
        "Leitura de configuração de serviços por número de porta"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — define as camadas onde os protocolos atuam"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A distinção entre protocolo, serviço, porta e aplicação integra o conteúdo programático introdutório de redes, pois é central para configurar serviços e interpretar regras de firewall; é uma estimativa pedagógica qualitativa, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Protocolo é o conjunto de regras que define formato, sequência de mensagens e ações da comunicação (HTTP, TCP, IP). Serviço é a capacidade que uma camada oferece à superior — o transporte oferece à aplicação entrega confiável e ordenada por TCP. Porta é um número de 16 bits (0 a 65535) que identifica o processo dentro de um host, permitindo que várias aplicações compartilhem o mesmo IP; as portas bem conhecidas (0 a 1023) incluem 80 (HTTP), 443 (HTTPS), 53 (DNS), 25/587 (SMTP) e 22 (SSH). Aplicação é o programa que usa a rede (navegador, servidor web, cliente de e-mail). Uma camada presta serviço à superior e usa o serviço da inferior.",
      "intermediario": "O aluno associa cada protocolo ao serviço que implementa e à porta que o expõe: HTTP transfere hipertexto na porta 80, HTTPS com TLS na 443, SMTP envia e-mail na 25/587 e IMAP acessa caixas na 143/993. Entende que o mesmo IP hospeda vários serviços porque o sistema operacional demultiplexa o tráfego pelo número da porta, e que a aplicação usa o transporte, que usa a internet, que usa o enlace.",
      "avancado": "O aluno avançado distingue protocolo de serviço: HTTPS é protocolo (HTTP sobre TLS/SSL), entrega segura é o serviço. Reconhece que uma porta não é um protocolo (a 443 apenas aponta para o processo HTTPS) e que as portas bem conhecidas (0 a 1023) são gerenciadas pela IANA. Classifica um serviço pela camada em que opera: DHCP e DNS são de aplicação, embora usem UDP no transporte.",
      "especialista": "O especialista analisa o tráfego real: identifica que múltiplas instâncias de um mesmo serviço usam portas efêmeras (49152 a 65535) no cliente, que o NAT mapeia portas privadas para públicas e que firewalls filtram por porta e IP. Discute trade-offs de portas não padrão (SSH em 2222) e a diferença entre porta de destino (serviço) e porta de origem (cliente)."
    },
    "comparacoes": [
      {
        "tema": "protocolo x serviço",
        "a": {
          "rotulo": "Protocolo",
          "texto": "Conjunto de regras que define formato, sequência de mensagens e ações na comunicação (ex.: HTTP)."
        },
        "b": {
          "rotulo": "Serviço",
          "texto": "Capacidade que uma camada oferece à superior (ex.: transporte via TCP oferece entrega confiável e ordenada)."
        },
        "diferencaGabarito": "O protocolo é o conjunto de regras de comunicação; o serviço é a capacidade oferecida por uma camada à superior. HTTP é protocolo; entrega confiável é serviço do TCP."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A porta 443 é um protocolo.",
        "porqueErrada": "443 é apenas um número de porta associado ao serviço HTTPS. Protocolo é o conjunto de regras (HTTPS/TLS sobre HTTP); a porta não define regras, apenas identifica o processo.",
        "versaoCorreta": "Errado. 443 é um número de porta associado ao protocolo HTTPS. Protocolo é o conjunto de regras; porta é o ponto de acesso que identifica o processo."
      },
      {
        "afirmacaoEquivocada": "Endereço IP identifica o processo dentro de um host.",
        "porqueErrada": "O IP identifica a interface de rede do host, não o processo ou aplicação. É o número da porta que distingue qual aplicação recebe cada segmento quando vários serviços compartilham o mesmo IP.",
        "versaoCorreta": "Errado. O IP identifica o host; a porta identifica o processo/aplicação dentro daquele host, permitindo que vários serviços compartilhem o mesmo IP."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "protocolo",
        "serviço",
        "porta",
        "aplicação"
      ],
      "regras": [
        "uma camada presta serviço à superior e usa o serviço da inferior",
        "a porta identifica o processo dentro de um host",
        "as portas bem conhecidas (0 a 1023) são atribuídas a serviços padronizados",
        "várias aplicações compartilham o mesmo IP por portas diferentes"
      ],
      "comparacoes": [
        "protocolo define regras de comunicação; serviço é a capacidade da camada",
        "IP identifica o host; porta identifica o processo dentro do host"
      ],
      "fluxos": [
        "O cliente inicia a conexão usando porta de origem efêmera e envia o primeiro segmento ao servidor",
        "O segmento chega ao servidor e é direcionado pela porta de destino ao processo correto",
        "A aplicação consome o serviço oferecido pelo protocolo e exibe o resultado ao usuário"
      ],
      "excecoes": [
        "portas efêmeras (49152 a 65535) são usadas pelo cliente",
        "o mesmo protocolo pode usar portas diferentes (HTTP 80, HTTPS 443)"
      ],
      "palavrasChave": [
        "protocolo",
        "serviço",
        "porta",
        "aplicação",
        "TCP",
        "HTTP",
        "HTTPS",
        "IANA"
      ],
      "checklist": [
        "Sei definir protocolo, serviço, porta e aplicação separadamente?",
        "Conheço portas bem conhecidas como 80 (HTTP), 443 (HTTPS), 53 (DNS) e 22 (SSH)?",
        "Entendo que várias aplicações compartilham o mesmo IP por portas?",
        "Reconheço que porta não é protocolo?",
        "Associo cada protocolo ao serviço e à camada em que opera?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Diferenciar protocolo, serviço, porta e aplicação no envio de e-mail por um cliente de e-mail.",
        "dados": "Cliente de e-mail (Thunderbird) enviando uma mensagem; protocolo SMTP; serviço de entrega de mensagens; porta 25 (ou 587 com submissão); servidor de e-mail do provedor.",
        "conceitos": [
          "aplicação",
          "protocolo",
          "serviço",
          "porta"
        ],
        "estrategia": "Identificar o programa que usa a rede (aplicação), as regras de envio (protocolo SMTP), a capacidade oferecida (entrega de mensagens) e o número de porta que direciona o segmento ao processo correto no servidor.",
        "execucao": [
          "1) Identificar a aplicação: o cliente de e-mail (Thunderbird).",
          "2) Identificar o protocolo: SMTP define as regras de envio.",
          "3) Identificar o serviço: entrega de mensagens do remetente ao servidor.",
          "4) Identificar a porta: 25 (SMTP) ou 587 (submissão) direciona ao processo do servidor."
        ],
        "resultado": "Aplicação: cliente de e-mail. Protocolo: SMTP. Serviço: entrega de mensagens. Porta: 25 (ou 587 com submissão).",
        "justificativa": "O gabarito separa as quatro noções: quem usa a rede é a aplicação, as regras de envio são o protocolo SMTP, a capacidade é o serviço de entrega, e a porta 25/587 direciona o segmento ao processo de SMTP no servidor.",
        "errosFrequentes": [
          "Confundir protocolo com serviço (dizer que o SMTP é um serviço em vez de um protocolo).",
          "Acreditar que o IP sozinho identifica o programa de e-mail, sem usar o número da porta."
        ],
        "variacao": "Substituir o envio de e-mail por uma navegação web: o aluno deve identificar navegador como aplicação, HTTP como protocolo, transferência de hipertexto como serviço e porta 80 como ponto de acesso."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explicar por que o mesmo servidor pode hospedar um site (HTTP) e um serviço de e-mail (SMTP) simultaneamente em um único endereço IP.",
        "dados": "Um servidor com um único endereço IP (200.135.80.150) executando um servidor web na porta 80/443 e um servidor de e-mail SMTP na porta 25/587; clientes acessam ambos pelo mesmo IP.",
        "conceitos": [
          "endereço IP",
          "porta",
          "serviço",
          "demultiplexação"
        ],
        "estrategia": "Reconhecer que o IP identifica o host e que o sistema operacional usa o número da porta de destino para entregar cada segmento ao processo correto, de modo que serviços diferentes coexistem no mesmo IP usando portas diferentes.",
        "execucao": [
          "1) Identificar que o servidor tem um único endereço IP (200.135.80.150).",
          "2) Associar o serviço web à porta 80 (HTTP) e à 443 (HTTPS).",
          "3) Associar o serviço de e-mail SMTP às portas 25 e 587.",
          "4) Concluir que o sistema operacional demultiplexa os segmentos chegantes pela porta de destino, direcionando ao processo web ou ao de e-mail."
        ],
        "resultado": "O mesmo IP hospeda ambos os serviços porque cada um usa uma porta diferente: 80/443 para web e 25/587 para SMTP; o sistema operacional direciona o tráfego pelo número da porta.",
        "justificativa": "O gabarito explica que o IP identifica o host, não o processo, e que a demultiplexação por porta permite que web e e-mail coexistam no mesmo endereço IP sem conflito.",
        "errosFrequentes": [
          "Acreditar que cada serviço exige um endereço IP diferente.",
          "Confundir o número da porta com o endereço IP na identificação do processo."
        ],
        "variacao": "Adicionar um servidor DNS na porta 53 ao mesmo servidor; o aluno deve identificar que o DNS também coexiste no mesmo IP usando a porta 53."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação de que a porta 443 é um protocolo de comunicação seguro no contexto de navegação por HTTPS.",
        "dados": "Afirmação de que a porta 443 é um protocolo; contexto de navegação segura por HTTPS; necessidade de distinguir número de porta de conjunto de regras de comunicação.",
        "conceitos": [
          "protocolo",
          "porta",
          "HTTPS",
          "TLS"
        ],
        "estrategia": "Reconhecer que a afirmação confunde o número de porta (ponto de acesso) com o protocolo (regras de comunicação); HTTPS é o protocolo, 443 é apenas a porta onde o serviço HTTPS costuma ser oferecido.",
        "execucao": [
          "1) Identificar que a afirmação chama a porta 443 de protocolo.",
          "2) Lembrar que protocolo é o conjunto de regras (HTTPS/TLS sobre HTTP) e porta é o ponto de acesso numérico.",
          "3) Concluir que 443 apenas identifica o processo HTTPS no servidor, não define regras de comunicação."
        ],
        "resultado": "Errado. 443 é um número de porta associado ao protocolo HTTPS; o protocolo seguro é o HTTPS (HTTP sobre TLS/SSL), não o número da porta.",
        "justificativa": "O gabarito corrige a afirmação ao separar protocolo (regras de comunicação: HTTPS) de porta (ponto de acesso: 443), mostrando que a porta não é um protocolo.",
        "errosFrequentes": [
          "Acreditar que o número da porta define regras de comunicação.",
          "Dizer que mudar a porta invalida a segurança do HTTPS."
        ],
        "variacao": "Apresentar a afirmação de que o SSH é uma porta; o aluno deve reconhecer que SSH é um protocolo e a 22 é apenas sua porta padrão."
      }
    ]
  },
  "m2-u2-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova pode cobrar a função de um protocolo sem exigir sua camada exata, e assumir correspondência rígida entre OSI e TCP/IP gera erro. Reconhecer que a correspondência é uma simplificação didática, não biunívoca, evita classificação incorreta de protocolos como ARP, ICMP e TLS. Essa postura crítica é decisiva em itens de interpretação de concursos.",
      "preRequisitos": [
        "Modelos OSI e TCP/IP"
      ],
      "objetivosObservaveis": [
        "Explicar que a correspondência OSI↔TCP/IP é didática, não biunívoca",
        "Citar protocolos que não se encaixam em uma única camada (ARP, ICMP, TLS)",
        "Evitar classificações rígidas de protocolo por camada",
        "Priorizar a função do protocolo em vez da camada"
      ],
      "competencias": [
        "Análise crítica de modelos de rede",
        "Precisão de classificação de protocolos"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — modelo comparado com o OSI"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A correspondência aproximada entre OSI e TCP/IP e a classificação de protocolos que atravessam camadas aparecem em questões de interpretação de redes de concursos, pois testam função sobre decorativismo de camada; é uma estimativa pedagógica qualitativa, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "A correspondência entre OSI e TCP/IP é uma simplificação didática, não uma equivalência biunívoca. O OSI tem sete camadas e o TCP/IP quatro, de modo que sessão (5), apresentação (6) e aplicação (7) do OSI colapsam na camada de aplicação do TCP/IP. Alguns protocolos não se encaixam em uma única camada: ARP opera entre enlace e rede (resolve IP em MAC), ICMP é integrado ao IP e TLS funciona entre transporte e aplicação. Em prova, priorizar a função do protocolo.",
      "intermediario": "O aluno identifica casos em que a equivalência OSI↔TCP/IP não é direta. IP depende de ARP (enlace/rede) e de ICMP (integrado ao IP), de modo que não é um protocolo \"puro\" da camada 3. TCP inclui controle de congestionamento não detalhado no OSI. TLS protege HTTP e opera entre transporte e aplicação, sem camada OSI única. MPLS e túneis de VPN operam entre camadas. A classificação é didática, não lei física.",
      "avancado": "O aluno avançado analisa cada protocolo pela função e pelo problema que resolve, em vez de decorar camadas. ARP resolve IP para MAC entre enlace e rede; ICMP transporta mensagens de controle de erro dentro do IP; TLS estabelece segurança acima do TCP e abaixo da aplicação. O modelo OSI não detalha controle de congestionamento do TCP e o IP real depende de funções auxiliares; a correspondência é aproximada.",
      "especialista": "O especialista discute tecnologias entre camadas, como MPLS e túneis de VPN, e avalia como o TCP delega confiabilidade às pontas. Conhece a não separação de sessão e apresentação no TCP/IP (essas funções ficam na aplicação ou bibliotecas) e argumenta que o OSI permanece como referência didática enquanto o TCP/IP é o modelo que opera na Internet real."
    },
    "comparacoes": [
      {
        "tema": "correspondência OSI x TCP/IP",
        "a": {
          "rotulo": "OSI",
          "texto": "Sete camadas (física, enlace, rede, transporte, sessão, apresentação, aplicação); separa sessão e apresentação; modelo de referência conceitual."
        },
        "b": {
          "rotulo": "TCP/IP",
          "texto": "Quatro camadas (acesso à rede, internet, transporte, aplicação); não separa sessão e apresentação; modelo prático que opera na Internet."
        },
        "diferencaGabarito": "A correspondência é aproximada: sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP; não é uma equivalência biunívoca."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Todo protocolo pode ser classificado sem ambiguidade em uma única camada OSI.",
        "porqueErrada": "Protocolos modernos como TLS, QUIC e MPLS atravessam ou não se encaixam bem nas sete camadas do OSI. ARP opera entre enlace e rede; ICMP é integrado ao IP; TLS funciona entre transporte e aplicação. A classificação é ferramenta didática, não lei física.",
        "versaoCorreta": "Errado. Classificar todo protocolo em uma única camada OSI é um erro: TLS, QUIC e MPLS operam entre camadas ou não se encaixam nas sete. A camada é uma ferramenta de organização didática, e não uma regra física que obriga cada protocolo a uma única posição."
      },
      {
        "afirmacaoEquivocada": "TLS pertence exclusivamente à camada de aplicação do TCP/IP.",
        "porqueErrada": "TLS opera acima do TCP (transporte) e abaixo da aplicação (HTTP), protegendo protocolos como HTTP. Não tem camada única no OSI e não é apenas aplicação no TCP/IP: funciona entre transporte e aplicação.",
        "versaoCorreta": "Errado. TLS opera entre o transporte (TCP) e a aplicação (HTTP), não tem camada OSI única, e não pertence exclusivamente à camada de aplicação do TCP/IP."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "correspondência OSI↔TCP/IP",
        "simplificação didática",
        "protocolos entre camadas",
        "função do protocolo"
      ],
      "regras": [
        "OSI tem 7 camadas, TCP/IP tem 4",
        "sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP",
        "ARP, ICMP e TLS não se encaixam em uma única camada",
        "em prova, priorizar a função do protocolo sobre a camada"
      ],
      "comparacoes": [
        "OSI separa sessão e apresentação; TCP/IP não",
        "correspondência é aproximada, não biunívoca"
      ],
      "fluxos": [
        "dados descem pela pilha do remetente (aplicação → física)",
        "cabeçalhos são adicionados camada por camada (encapsulamento)",
        "dados sobem pela pilha do destino (física → aplicação)"
      ],
      "excecoes": [
        "ARP opera entre enlace e rede (resolve IP em MAC)",
        "ICMP é integrado ao IP, embora transporte mensagens de controle",
        "TLS funciona entre transporte e aplicação, sem camada OSI única"
      ],
      "palavrasChave": [
        "OSI",
        "TCP/IP",
        "correspondência",
        "camadas",
        "ARP",
        "ICMP",
        "TLS",
        "MPLS"
      ],
      "checklist": [
        "Sei que a correspondência OSI↔TCP/IP é aproximada, não biunívoca?",
        "Conheço exemplos de protocolos que não se encaixam em uma única camada (ARP, ICMP, TLS)?",
        "Priorizo a função do protocolo em vez da camada em prova?",
        "Sei que sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP?",
        "Reconheço que o TCP/IP é o modelo prático da Internet?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em qual camada 'encaixar' o protocolo TLS ao proteger o tráfego HTTP entre transporte e aplicação?",
        "dados": "Protocolo TLS protegendo HTTP (HTTPS); TLS opera acima do TCP (transporte) e abaixo da aplicação (HTTP); necessidade de classificar TLS em um modelo de camadas.",
        "conceitos": [
          "TLS",
          "HTTP",
          "TCP",
          "camada de apresentação"
        ],
        "estrategia": "Reconhecer que não há encaixe único para TLS: opera acima do TCP e abaixo da HTTP, entre transporte e aplicação; alguns materiais o colocam como camada de apresentação (OSI 6), outros como segurança na aplicação, mas a função importa mais que a camada.",
        "execucao": [
          "1) Identificar que TLS fica acima do TCP (transporte) e abaixo da aplicação (HTTP).",
          "2) Observar que, no OSI, não há uma camada única para TLS.",
          "3) Constatar que materiais o colocam como camada de apresentação (OSI 6) ou como segurança na aplicação.",
          "4) Concluir que a função (proteger HTTP) importa mais que a camada exata."
        ],
        "resultado": "Não há encaixe único: TLS opera entre transporte e aplicação; muitos textos o colocam como camada de apresentação (OSI 6) ou segurança na aplicação; a função importa mais que a camada.",
        "justificativa": "O gabarito explica que TLS não tem camada OSI única e que, em prova, deve-se priorizar sua função (proteger o tráfego entre transporte e aplicação) em vez de decorar uma camada.",
        "errosFrequentes": [
          "Forçar TLS em uma única camada OSI, ignorando que opera entre camadas.",
          "Acreditar que TLS é exclusivamente da camada de aplicação."
        ],
        "variacao": "Apresentar o QUIC, que opera sobre UDP e combina transporte e segurança; o aluno deve reconhecer que também não se encaixa em uma única camada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma questão de concurso afirma que 'ARP é um protocolo da camada de rede'. Avaliar se está correta.",
        "dados": "Afirmação de que ARP é protocolo da camada de rede; ARP resolve endereços IP em endereços MAC; no TCP/IP ARP é associado à camada de acesso à rede/Internet; no OSI costuma-se colocar na camada 2 (enlace) ou 3 (rede).",
        "conceitos": [
          "ARP",
          "camada de rede",
          "camada de enlace",
          "endereço IP",
          "endereço MAC"
        ],
        "estrategia": "Reconhecer que a correção depende do modelo adotado pela banca: no TCP/IP ARP é associado ao acesso à rede/Internet, enquanto no OSI costuma-se colocar na camada 2 (enlace) ou 3; o aluno deve ler o enunciado e identificar o modelo de referência.",
        "execucao": [
          "1) Identificar que a afirmação classifica ARP na camada de rede.",
          "2) Lembrar que ARP resolve IP para MAC, atuando entre enlace e rede.",
          "3) Constatar que, no TCP/IP, ARP é associado ao acesso à rede/Internet; no OSI, à camada 2 ou 3.",
          "4) Concluir que a resposta depende do modelo adotado pela banca e que o enunciado deve ser lido com atenção."
        ],
        "resultado": "Depende da referência: no TCP/IP, ARP é associado à camada de acesso à rede/Internet; no OSI, costuma-se colocar na camada 2 (enlace) ou 3. A resposta correta depende do modelo adotado pela banca.",
        "justificativa": "O gabarito mostra que não há classificação única e absoluta para ARP: depende do modelo de referência, de modo que a afirmação só é avaliável após saber qual modelo o enunciado adota.",
        "errosFrequentes": [
          "Classificar ARP rigidamente em uma única camada sem considerar o modelo de referência.",
          "Acreditar que existe uma resposta absoluta independente do modelo OSI ou TCP/IP."
        ],
        "variacao": "Apresentar a mesma questão mas especificando o modelo OSI; o aluno deve então posicionar ARP na camada 2 (enlace) ou 3 conforme o material adotado."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'Todo protocolo pode ser classificado sem ambiguidade em uma única camada OSI.'",
        "dados": "Afirmação de classificação unívoca; exemplos de protocolos que atravessam camadas (TLS, QUIC, MPLS); necessidade de reconhecer a correspondência como ferramenta didática.",
        "conceitos": [
          "classificação de protocolos",
          "camadas OSI",
          "TLS",
          "QUIC",
          "MPLS"
        ],
        "estrategia": "Reconhecer que a afirmação é falsa porque protocolos modernos atravessam ou não se encaixam nas sete camadas do OSI; TLS protege HTTP entre transporte e aplicação; QUIC combina transporte e segurança sobre UDP; MPLS opera entre camadas; a classificação é didática, não lei física.",
        "execucao": [
          "1) Identificar que a afirmação nega qualquer ambiguidade na classificação por camada.",
          "2) Lembrar exemplos de protocolos que não se encaixam em uma única camada (TLS, QUIC, MPLS).",
          "3) Constatar que a correspondência OSI↔TCP/IP é simplificação didática.",
          "4) Concluir que a afirmação está errada: a classificação é ferramenta de organização, não lei física."
        ],
        "resultado": "Errado. Um candidato que tenta encaixar TLS ou QUIC em uma única camada OSI classifica mal o protocolo, porque esses padrões atravessam camadas ou não se acomodam nas sete. O resultado prático na prova é marcar a alternativa errada: a função do protocolo vale mais que a camada exata.",
        "justificativa": "O gabarito corrige a afirmação ao apresentar protocolos reais que não se encaixam em uma única camada, mostrando que a classificação por camada é aproximada e didática.",
        "errosFrequentes": [
          "Acreditar que todo protocolo cabe em exatamente uma camada OSI.",
          "Ignorar que a escolha da camada depende do modelo de referência e do contexto."
        ],
        "variacao": "Apresentar o MPLS, frequentemente chamado de 'camada 2,5'; o aluno deve reconhecer que o nome já sinaliza que o protocolo opera entre camadas."
      }
    ]
  },
  "m2-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Integrar DNS, TCP, TLS e HTTP num único fluxo e a aplicação prática dos modelos de camadas cobrada em concursos. A prova exige a ordem exata: sem resolução de nome não há IP; sem TCP não há conexão confiável; sem TLS não há canal cifrado.",
      "preRequisitos": [
        "Camadas OSI e TCP/IP",
        "Encapsulamento por camada",
        "Resolução de nomes por DNS",
        "Conexão TCP"
      ],
      "objetivosObservaveis": [
        "Ordenar as etapas de uma requisição HTTP do nome a resposta",
        "Associar cada etapa a sua camada e protocolo responsáveis",
        "Descrever o three-way handshake TCP (SYN, SYN-ACK, ACK)"
      ],
      "competencias": [
        "Raciocínio integrado entre protocolos de camadas diferentes",
        "Leitura e interpretação de fluxos de rede"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — camadas e encapsulamento",
        "m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — camadas de transporte e internet"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Fluxo completo HTTP/DNS/TCP/TLS e tema central de redes em editais de TI. Questões avaliam ordem das etapas, associando sintoma a camada. Classificação qualitativa alta como estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O usuário digita www.exemplo.com; o navegador consulta o DNS e obtem o IP (192.0.2.10). Abre conexão TCP na porta 443 (SYN, SYN-ACK, ACK). Negocia TLS, criando túnel cifrado. Envia HTTP GET dentro do túnel. Cada camada encapsula: HTTP sobre TLS sobre TCP sobre IP sobre Ethernet.",
      "intermediario": "Na porta 443, o handshake TCP ocorre primeiro: SYN do cliente, SYN-ACK do servidor, ACK do cliente. Só então começa o TLS (Client Hello, certificado do servidor, acordo de chaves). Dentro do túnel TLS viajam os cabeçalhos HTTP.",
      "avancado": "O TLS cifra o conteúdo, mas não dispensa o DNS: o nome deve ser resolvido para IP antes da conexão TCP/TLS. Sem DNSSEC, a resposta DNS pode ser forjada (DNS spoofing). O certificado TLS e emitido para um nome de domínio, não para IP.",
      "especialista": "Diagnosticar esse fluxo exige isolar a etapa falha antes de culpar a aplicação. Se ping ao IP funciona mas nome não resolve: problema DNS. Se nome resolve mas conexão e recusada na 443: serviço parado, firewall ou porta errada. Se conexão estabelece mas HTTP retorna 500: aplicação."
    },
    "comparacoes": [
      {
        "tema": "DNS vs HTTP na requisição completa",
        "a": {
          "rotulo": "DNS",
          "texto": "Resolve nomes de domínio (ex.: www.exemplo.com) em endereços IP (ex.: 192.0.2.10). Ocorre antes da conexão TCP, usa porta 53 (geralmente UDP), e e pre-requisito para saber a quem conectar."
        },
        "b": {
          "rotulo": "HTTP",
          "texto": "Transporta a requisição web (GET, cabeçalhos, corpo) após a conexão TCP e o túnel TLS estarem estabelecidos. Usa porta 80 (HTTP) ou 443 (HTTPS/TLS) e define o método e recurso solicitados."
        },
        "diferencaGabarito": "DNS traduz nome em IP e acontece primeiro; HTTP envia a requisição de conteúdo e acontece depois, dentro do túnel cifrado. Sem DNS não se sabe o IP destino; sem HTTP não se solicita a página."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "HTTPS dispensa a resolução DNS porque a conexão e cifrada.",
        "porqueErrada": "O ciframento TLS protege o conteúdo da conexão, mas não remove a necessidade de saber o IP do servidor antes de conectar. O DNS e consultado antes do handshake TCP e do TLS; sem ele o navegador não sabe para qual endereço enviar o SYN.",
        "versaoCorreta": "Errado. O HTTPS cifra o conteúdo, mas antes precisa resolver o nome em IP e estabelecer a sessão TCP/TLS. A consulta DNS precede a conexão e, sem DNSSEC, pode ser falsificada, redirecionando o tráfego para um IP do atacante."
      },
      {
        "afirmacaoEquivocada": "O three-way handshake TCP ocorre após a negociação TLS.",
        "porqueErrada": "O TLS e um protocolo que roda sobre TCP; precisa de uma conexão TCP já estabelecida para trocar mensagens (Client Hello, certificado, chaves). Inverter a ordem e impossível porque o handshake TLS trafega dentro do segmento TCP.",
        "versaoCorreta": "Errado. A conexão TCP (SYN, SYN-ACK, ACK) e estabelecida primeiro, e somente depois ocorre a negociação TLS (Client Hello, certificado, acordo de chaves) dentro do túnel TCP. TLS não funciona sem TCP subjacente no modelo clássico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Encapsulamento HTTP sobre TLS sobre TCP sobre IP sobre Ethernet",
        "Three-way handshake TCP (SYN, SYN-ACK, ACK)",
        "Resolução DNS de nome para IP"
      ],
      "regras": [
        "DNS antes de abrir conexão TCP",
        "TLS requer conexão TCP estabelecida",
        "Cada camada encapsula com seu próprio cabeçalho"
      ],
      "comparacoes": [
        "DNS traduz nome em IP; HTTP transporta requisição web no túnel cifrado"
      ],
      "fluxos": [
        "Digite nome -> DNS resolve IP -> TCP handshake 443 -> TLS negocia -> HTTP GET -> resposta HTTP"
      ],
      "excecoes": [
        "IP direto elimina DNS, mas causa erro de hostname mismatch no certificado TLS"
      ],
      "palavrasChave": [
        "DNS",
        "TCP",
        "TLS",
        "HTTP",
        "encapsulamento"
      ],
      "checklist": [
        "Ordem das etapas do fluxo",
        "Cada etapa com camada e protocolo corretos",
        "Three-way handshake TCP",
        "Encapsulamento HTTP/TLS/TCP/IP/Ethernet"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Listar as etapas de uma visita a https://www.exemplo.com desde a digitação até o recebimento da página, na ordem correta.",
        "dados": "URL: https://www.exemplo.com; porta HTTPS: 443; protocolo: HTTP sobre TLS sobre TCP sobre IP; etapas: DNS, TCP handshake, TLS handshake, HTTP GET, resposta, renderização.",
        "conceitos": [
          "DNS",
          "TCP handshake",
          "TLS",
          "HTTP GET",
          "encapsulamento"
        ],
        "estrategia": "O aluno ordena cronologicamente cada ação do navegador, associando cada uma ao protocolo e a camada responsáveis, do nome até os bits físicos.",
        "execucao": [
          "1. O usuário digita www.exemplo.com no navegador.",
          "2. O navegador consulta o DNS e obtem o IP (192.0.2.10).",
          "3. Abre conexão TCP na porta 443 (three-way handshake: SYN, SYN-ACK, ACK) e negocia TLS.",
          "4. Envia HTTP GET dentro do túnel cifrado; o servidor responde e o navegador renderiza a página."
        ],
        "resultado": "DNS -> TCP handshake (443) -> TLS handshake -> HTTP GET -> resposta HTTP -> renderização.",
        "justificativa": "O resultado segue a ordem de dependências: só se conecta a um IP conhecido (DNS primeiro), só se cifra sobre TCP pronto (TLS depois) e só se requisita conteúdo dentro do túnel cifrado (HTTP por último).",
        "errosFrequentes": [
          "Colocar o HTTP GET antes do DNS, ignorando que o IP destino e desconhecido sem resolução de nome",
          "Colocar o TLS antes do TCP, esquecendo que o TLS trafega dentro de um segmento TCP já estabelecido"
        ],
        "variacao": "O usuário acessa http://www.exemplo.com (sem TLS, porta 80): elimina o handshake TLS, mas mantém DNS, TCP handshake na porta 80 e HTTP GET, exigindo nova aplicação das etapas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um usuário acessa um site diretamente pelo IP (ex.: https://192.0.2.10). Identificar a etapa eliminada e o problema que pode surgir.",
        "dados": "URL: https://192.0.2.10 (IP direto); porta 443; certificado TLS emitido para nome de domínio, não para IP; etapa eliminada: resolução DNS; problema esperado: erro de certificado (hostname mismatch).",
        "conceitos": [
          "DNS",
          "certificado TLS",
          "hostname mismatch",
          "HTTPS"
        ],
        "estrategia": "O aluno percebe que, ao informar o IP diretamente, não há nome a resolver, pula o DNS, e que o certificado TLS (vinculado a um nome) não confere com o IP, gerando aviso de segurança.",
        "execucao": [
          "1. O navegador recebe o IP 192.0.2.10 diretamente; não consulta DNS (etapa eliminada).",
          "2. Abre conexão TCP na porta 443 com o IP informado.",
          "3. Inicia negociação TLS; o servidor apresenta certificado de um nome de domínio.",
          "4. O navegador compara o certificado com o IP e detecta divergência (hostname mismatch); exibe erro de certificado."
        ],
        "resultado": "Elimina a resolução DNS. O certificado TLS e emitido para o nome de domínio, não para o IP; o navegador exibe erro de certificado (hostname mismatch).",
        "justificativa": "Sem DNS não há nome a validar contra o certificado; como vincula identidade a nome, não a IP, o navegador não confirma que o IP corresponde a entidade certificada, gerando o erro.",
        "errosFrequentes": [
          "Acreditar que acessar por IP direto e sempre mais rápido e seguro, ignorando a validação de identidade do certificado",
          "Assumir que o HTTPS por IP funciona como por nome, sem entender que o certificado esta atrelado ao domínio"
        ],
        "variacao": "O usuário acessa http://192.0.2.10 (sem TLS, porta 80): elimina DNS e TLS, não há certificado, mas o servidor pode exigir cabeçalho Host correto."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'HTTPS dispensa a resolução DNS porque a conexão e cifrada.'",
        "dados": "Afirmação: HTTPS dispensa DNS por ser cifrada; protocolo: HTTPS (porta 443); mecanismo: ciframento TLS sobre TCP; pre-requisito oculto: conhecer o IP destino antes do handshake TCP.",
        "conceitos": [
          "DNS",
          "TLS",
          "ciframento",
          "endereço IP",
          "handshake TCP"
        ],
        "estrategia": "O aluno deve reconhecer que o ciframento protege o conteúdo da comunicação, mas não remove a necessidade de identificar o destino (IP) antes de conectar; o DNS ocorre antes do TLS e e indispensável.",
        "execucao": [
          "1. O navegador recebe um nome (ex.: www.exemplo.com) e precisa saber o IP antes de qualquer conexão.",
          "2. Consulta o DNS (geralmente UDP 53) para obter o IP (ex.: 192.0.2.10).",
          "3. Só então abre conexão TCP na porta 443 e inicia o handshake TLS dentro dela."
        ],
        "resultado": "Errado. HTTPS cifra o conteúdo, mas ainda precisa resolver o nome para IP antes de estabelecer a conexão TCP/TLS. DNS ocorre antes e, sem DNSSEC, pode ser manipulado (DNS spoofing).",
        "justificativa": "O ciframento TLS opera sobre uma conexão TCP já existente; sem o IP obtido pelo DNS não há para onde enviar o SYN inicial, então o DNS e pre-requisito, não algo dispensado pelo HTTPS.",
        "errosFrequentes": [
          "Confundir 'cifrar o conteúdo' com 'não precisar identificar o destino', achando que o TLS resolve o nome sozinho",
          "Acreditar que o DNS só serve para HTTP simples e não para conexões cifradas"
        ],
        "variacao": "Um atacante forja a resposta DNS (sem DNSSEC) para um nome de banco, redirecionando o usuário para um IP malicioso; o TLS estabelece conexão com o servidor falso, que apresenta certificado inválido ou auto-assinado, revelando o ataque."
      }
    ]
  },
  "m2-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Identificar em qual etapa ocorre cada função e quais sintomas indicam falha evita chutes no diagnóstico; a prova cobra a associação sintoma-etapa. Cada etapa tem falhas características: DNS converte nome em IP; TCP estabelece conexão; TLS cifra; HTTP processa a requisição. Isolar a etapa antes de culpar a aplicação é a competência central.",
      "preRequisitos": [
        "Fluxo da requisição HTTP",
        "Camadas OSI e TCP/IP",
        "DNS",
        "TCP",
        "TLS",
        "HTTP"
      ],
      "objetivosObservaveis": [
        "Associar função e etapa do fluxo",
        "Reconhecer mensagens de erro",
        "Isolar a etapa falha",
        "Ordenar o diagnóstico"
      ],
      "competencias": [
        "Diagnóstico estruturado",
        "Leitura de mensagens de erro"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u2-t3-s1 (Exemplo de requisição HTTP completa) — fluxo base",
        "m2-u3-t1-s1 (IPv4 e IPv6: finalidade e características) — contexto da aplicação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Diagnóstico por camadas e associação sintoma-etapa integram editais de TI em questões de troubleshooting. Classificação qualitativa média como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "DNS: converte nome em IP; falha como 'não foi possível resolver o nome do host'. TCP: estabelece conexão e garante entrega; falha como 'connection timed out' ou 'connection refused'. TLS: cifra e autentica; falha como certificado inválido ou expirado. HTTP: erros como códigos de status (404, 500, 503). Roteamento: falha como 'destination net unreachable'. Enlace/físico: falha é ausência de link.",
      "intermediario": "O diagnóstico é por eliminação: se o ping ao IP funciona mas o nome não resolve, o problema é DNS; se o nome resolve mas a conexão é recusada, o problema é a porta/serviço; se a conexão se estabelece mas o HTTP retorna 500, o problema é a aplicação. Cada sintoma aponta a camada responsável, evitando culpar a aplicação indevidamente.",
      "avancado": "O ping testa ICMP (camada de rede), não a aplicação; um servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443. A falha de DNS aparece antes de qualquer conexão TCP; a falha de TLS aparece após a conexão TCP, durante o handshake; a falha de HTTP aparece após o túnel TLS, com códigos de status. Isolar a etapa antes de culpar a aplicação é a base do diagnóstico por camadas (unidade 5.4).",
      "especialista": "Se ping ao IP funciona mas nome não resolve: DNS. Se nome resolve mas conexão recusada na 443: serviço parado, firewall ou porta errada (transporte/aplicação). Se conexão estabelece mas HTTP retorna 500: aplicação. Erros TLS (certificado expirado/inválido) indicam problema de autenticação, não de rede. Erro 404 indica recurso inexistente (aplicação); 503 indica serviço indisponível (aplicação sobrecarregada). Cada falha tem sintoma característico que aponta à camada."
    },
    "comparacoes": [
      {
        "tema": "Falha de DNS vs falha de TCP",
        "a": {
          "rotulo": "DNS",
          "texto": "Falha de resolução de nome; sintomas: 'não foi possível resolver o nome do host', 'NXDOMAIN', 'ERR_NAME_NOT_RESOLVED'. Ocorre antes de qualquer conexão TCP."
        },
        "b": {
          "rotulo": "TCP",
          "texto": "Falha de conexão; sintomas: 'connection timed out' (host inacessível) ou 'connection refused' (porta fechada). Ocorre após o DNS, ao tentar estabelecer a conexão."
        },
        "diferencaGabarito": "DNS falha na resolução de nome (antes do TCP); TCP falha no estabelecimento da conexão (após o DNS). Sintomas distintos apontam a camada responsável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o ping funciona, o site deveria carregar normalmente.",
        "porqueErrada": "O ping exercita o ICMP, na camada de rede, e não a aplicação. O servidor pode responder ao ping e ainda assim ter o HTTP parado, certificado expirado ou as portas bloqueadas no firewall.",
        "versaoCorreta": "Errado. Ping testa ICMP (camada de rede), não a aplicação. O servidor pode responder a ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443."
      },
      {
        "afirmacaoEquivocada": "Um erro HTTP 500 indica problema na camada de rede.",
        "porqueErrada": "O código 500 é um erro do servidor (aplicação), não de rede. Indica que a aplicação web falhou ao processar a requisição, não um problema de conectividade ou roteamento.",
        "versaoCorreta": "Errado — 5xx é erro do servidor (aplicação), não de rede. O HTTP 500 indica que o servidor web falhou ao processar a requisição, independentemente da conectividade de rede."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DNS — resolução de nome em IP",
        "TCP — conexão confiável e portas",
        "TLS — ciframento e autenticação",
        "HTTP — requisição web e códigos de status"
      ],
      "regras": [
        "Falha de DNS ocorre antes da conexão TCP",
        "Falha de TCP ocorre após o DNS, ao estabelecer conexão",
        "Falha de TLS ocorre após o TCP, no handshake",
        "Falha de HTTP ocorre após o túnel TLS, com códigos de status"
      ],
      "comparacoes": [
        "DNS traduz nome em IP; HTTP processa a requisição web"
      ],
      "fluxos": [
        "Ping ao IP ok + nome não resolve = DNS; nome resolve + conexão recusada = porta/serviço; conexão estabelece + HTTP 500 = aplicação"
      ],
      "excecoes": [
        "Ping funciona mas site não carrega: problema de aplicação, não de rede"
      ],
      "palavrasChave": [
        "DNS",
        "TCP",
        "TLS",
        "HTTP",
        "ICMP",
        "ping",
        "código de status",
        "diagnóstico"
      ],
      "checklist": [
        "Associar função e etapa do fluxo",
        "Reconhecer mensagens de erro",
        "Isolar a etapa falha",
        "Ordenar o diagnóstico por camadas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um site não carrega e o navegador mostra 'ERR_NAME_NOT_RESOLVED'. Qual etapa falhou?",
        "dados": "Navegador mostra 'ERR_NAME_NOT_RESOLVED'; sintoma de falha de resolução de nome; etapa suspeita: DNS.",
        "conceitos": [
          "DNS",
          "resolução de nome",
          "ERR_NAME_NOT_RESOLVED"
        ],
        "estrategia": "O aluno deve associar a mensagem de erro à etapa DNS (resolução de nome), que ocorre antes de qualquer conexão TCP.",
        "execucao": [
          "1. O navegador exibe 'ERR_NAME_NOT_RESOLVED'.",
          "2. Essa mensagem indica falha de resolução de nome (DNS).",
          "3. O problema está no DNS, não na conexão TCP nem na aplicação."
        ],
        "resultado": "Resolução DNS — o nome não foi resolvido em IP. Verificar DNS, cache, conectividade e configuração de resolvedor.",
        "justificativa": "A mensagem 'ERR_NAME_NOT_RESOLVED' é específica de falha de DNS: o navegador não conseguiu converter o nome em IP, etapa que precede toda a conexão.",
        "errosFrequentes": [
          "Acreditar que o erro é do servidor web, quando na verdade o nome nunca foi resolvido",
          "Assumir que conectividade de rede está ok apenas porque o navegador abriu"
        ],
        "variacao": "O navegador mostra 'DNS_PROBE_FINISHED_NXDOMAIN': mesmo diagnóstico (falha de DNS), nome não existe no DNS, exigindo verificação do nome digitado."
      },
      {
        "tipo": "aplicacao",
        "problema": "O ping ao IP do servidor funciona, mas o navegador mostra 'connection refused' na porta 443. O que isso indica?",
        "dados": "Ping ao IP funciona (conectividade IP ok); navegador mostra 'connection refused' na porta 443; etapa suspeita: serviço/porta, não rede.",
        "conceitos": [
          "ping",
          "ICMP",
          "TCP",
          "porta 443",
          "connection refused"
        ],
        "estrategia": "O aluno deve perceber que ping ok prova conectividade de rede (IP), mas 'connection refused' na 443 indica que não há serviço escutando nessa porta (serviço parado, firewall ou porta diferente).",
        "execucao": [
          "1. O ping ao IP funciona: conectividade de rede (IP) está ok.",
          "2. O navegador mostra 'connection refused' na porta 443: nada escutando nessa porta.",
          "3. Conclusão: problema no serviço/porta (transporte/aplicação), não na rede."
        ],
        "resultado": "Conectividade IP ok, mas não há serviço escutando na porta 443 (servidor web parado, firewall bloqueando ou porta diferente). Problema na camada de transporte/aplicação, não de rede.",
        "justificativa": "O ping testa ICMP (rede) e confirma que o IP é alcançável; o 'connection refused' na 443 prova que o servidor não está aceitando conexões TCP nessa porta, isolando o problema à camada de transporte/aplicação.",
        "errosFrequentes": [
          "Concluir que a rede está com problema porque o site não carrega, ignorando que o ping ao IP funciona",
          "Assumir que 'connection refused' indica falha de DNS ou roteamento"
        ],
        "variacao": "O ping funciona mas o navegador mostra 'connection timed out' na 443: host inacessível ou firewall descartando pacotes (sem resposta), diferente de 'connection refused' (porta fechada ativamente)."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'Se o ping funciona, o site deveria carregar normalmente.' (ping testa ICMP, não a aplicação)",
        "dados": "Afirmação: ping funciona implica site carrega; protocolo: ping usa ICMP (camada de rede); site carrega exige HTTP (aplicação) nas portas 80/443.",
        "conceitos": [
          "ping",
          "ICMP",
          "HTTP",
          "aplicação vs rede"
        ],
        "estrategia": "O aluno deve reconhecer que o ping testa apenas ICMP (rede), não a aplicação HTTP; o servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443.",
        "execucao": [
          "1. O ping usa ICMP (camada de rede) e testa apenas alcançabilidade do IP.",
          "2. O site carregar exige HTTP nas portas 80/443 (camada de aplicação).",
          "3. Servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443.",
          "4. Conclusão: ping ok não garante que o site carregue."
        ],
        "resultado": "A leitura ingênua conclui que, como o ping ao IP respondeu, o site deve carregar — mas o ping testa apenas a camada de rede (ICMP), não a aplicação HTTP. O servidor pode responder ao ping e, mesmo assim, ter o servidor web parado, o certificado expirado ou o firewall bloqueando as portas 80/443, de modo que o site não abre.",
        "justificativa": "O ping valida apenas a camada de rede (ICMP); o carregamento do site depende da aplicação HTTP nas portas 80/443, que pode estar parada ou bloqueada mesmo com rede funcionando.",
        "errosFrequentes": [
          "Confundir alcançabilidade de IP (ping) com disponibilidade da aplicação web",
          "Acreditar que resposta ao ping prova que todos os serviços do servidor estão ativos"
        ],
        "variacao": "O servidor responde ao ping e à conexão TCP na 443, mas o HTTP retorna 404: rede e transporte estão ok, o problema é o recurso inexistente na aplicação."
      }
    ]
  },
  "m2-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Conexões persistentes (keep-alive), cache HTTP e compressão são as técnicas que tornam a navegação web rápida: reutilizam a mesma conexão TCP, evitam viagens ao servidor e reduzem o tamanho dos corpos transferidos. Em provas de redes, o gabarito costuma explorar justamente esses efeitos — latência, carga do servidor e conteúdo desatualizado servido por cache mal configurado. Saber quando cada técnica ajuda ou prejudica é o diferencial da questão.",
      "preRequisitos": [
        "HTTP/HTTPS e porta padrão",
        "TCP e handshake de três vias"
      ],
      "objetivosObservaveis": [
        "Explicar como o keep-alive reutiliza uma conexão TCP para múltiplas requisições HTTP",
        "Descrever o cache controlado por cabeçalhos Cache-Control, ETag, Last-Modified e Expires",
        "Citar o efeito da compressão gzip/brotli no tamanho do corpo transferido",
        "Reconhecer limitações: cache desatualizado, custo do keep-alive, compactar já compactado"
      ],
      "competencias": [
        "Análise de desempenho web",
        "Configuração de política de cache HTTP"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u2-t3-s1 (Exemplo de requisição HTTP completa)",
        "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média como estimativa pedagógica de adequação ao conteúdo programático. Cabeçalhos de cache e keep-alive integram itens de redes, especialmente em cenários de desempenho e conteúdo desatualizado."
      }
    },
    "niveis": {
      "iniciante": "HTTP/1.0 abria uma conexão TCP nova para cada recurso (imagem, estilo, script), repetindo o handshake de cada requisição. O HTTP/1.1 introduziu conexões persistentes (keep-alive), reutilizando a mesma conexão TCP para várias requisições, o que reduz a latência. O cache HTTP guarda respostas no cliente ou em proxies intermediários, controlado por cabeçalhos como Cache-Control, ETag, Last-Modified e Expires: se o recurso ainda é válido, não é preciso ir ao servidor. A compressão (gzip ou brotli) diminui o tamanho do corpo transferido.",
      "intermediario": "O keep-alive elimina múltiplos handshakes TCP e slow starts, mas consome recursos do servidor (conexões abertas por mais tempo). O cache acelera e alivia o servidor, porém pode servir conteúdo desatualizado se a política de validade estiver mal definida; a revalidação usa ETag ou Last-Modified. A compressão reduz o payload, mas compactar conteúdo já comprimido (imagens JPEG/PNG) desperdiça processamento. O desempenho vem do equilíbrio dessas técnicas, não de uma só, e exige política de cache coerente com o tipo de conteúdo servido.",
      "avancado": "O HTTP/2 multiplexa vários fluxos sobre uma única conexão TCP, evitando o bloqueio de linha de cabeça (head-of-line blocking) do HTTP/1.1. O HTTP/3 baseia-se em QUIC, transporte sobre UDP, reduzindo o tempo de estabelecimento da conexão e a recuperação de perdas. Essas versões exigem suporte tanto do cliente quanto do servidor. A escolha da política de cache — máximo de idade, revalidação ou não armazenamento — determina se o usuário recebe conteúdo atualizado ou obsoleto.",
      "especialista": "A política de cache deve diferenciar conteúdo estático (imagens, CSS, JS, com longos max-age e cache agressivo) de conteúdo dinâmico (JSON de API, páginas personalizadas, com no-cache ou revalidação frequente). O keep-alive deve ser dimensionado pelo número de conexões simultâneas do servidor para não esgotar descritores de arquivo. A compressão deve ser aplicada apenas a textos (HTML, CSS, JS, JSON), nunca a binários já comprimidos. O HTTP/3 melhora a latência em redes com perda de pacotes, mas depende de suporte UDP em firewalls e intermediários."
    },
    "comparacoes": [
      {
        "tema": "HTTP/1.0 vs HTTP/1.1",
        "a": {
          "rotulo": "HTTP/1.0",
          "texto": "Abre uma nova conexão TCP para cada recurso, repetindo o handshake e o slow start de cada requisição."
        },
        "b": {
          "rotulo": "HTTP/1.1",
          "texto": "Usa conexões persistentes (keep-alive), reutilizando a mesma conexão TCP para múltiplas requisições, reduzindo latência."
        },
        "diferencaGabarito": "A diferença é a reutilização da conexão TCP: no HTTP/1.0 cada recurso custa um handshake novo; no HTTP/1.1 um único handshake atende vários recursos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Cache HTTP sempre serve o conteúdo mais recente.",
        "porqueErrada": "O cache guarda a resposta dentro do seu tempo de vida (TTL); se o servidor atualizou o recurso, o cliente pode continuar recebendo a versão antiga até expirar ou revalidar com ETag/Last-Modified.",
        "versaoCorreta": "O cache serve conteúdo válido dentro do TTL; conteúdo atualizado só chega após expiração ou revalidação bem-sucedida."
      },
      {
        "afirmacaoEquivocada": "Compressão reduz o tamanho de qualquer arquivo, inclusive imagens já comprimidas.",
        "porqueErrada": "Imagens como JPEG e PNG já estão comprimidas; aplicar gzip ou brotli nelas não gera ganho e ainda consome processamento do servidor e do cliente.",
        "versaoCorreta": "A compressão é vantajosa para textos (HTML, CSS, JS, JSON), não para conteúdos binários já comprimidos."
      },
      {
        "afirmacaoEquivocada": "HTTP/2 elimina completamente a necessidade de múltiplas conexões TCP.",
        "porqueErrada": "HTTP/2 multiplexa vários fluxos sobre uma única conexão TCP, reduzindo o número de conexões, mas continua usando TCP como transporte; não elimina o TCP em si.",
        "versaoCorreta": "HTTP/2 reduz o número de conexões TCP por meio da multiplexação, mas segue sobre TCP; é o HTTP/3 que migra o transporte para QUIC sobre UDP."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "keep-alive (conexão persistente)",
        "cache HTTP (Cache-Control, ETag, Last-Modified, Expires)",
        "compressão (gzip, brotli)",
        "HTTP/2 (multiplexação)",
        "HTTP/3 (QUIC sobre UDP)"
      ],
      "regras": [
        "Menos handshakes + cache válido + compressão = menor latência",
        "Não comprimir conteúdo já comprimido (imagens JPEG/PNG)",
        "Revalidar cache com ETag ou Last-Modified antes de servir conteúdo armazenado"
      ],
      "comparacoes": [
        "HTTP/1.0 sem keep-alive gera mais handshakes que o HTTP/1.1 com keep-alive"
      ],
      "fluxos": [
        "Requisição HTTP → uso de conexão persistente → verificação de cache → compressão do corpo → resposta ao cliente"
      ],
      "excecoes": [
        "Cache mal configurado pode servir conteúdo desatualizado ao invés da versão mais recente"
      ],
      "palavrasChave": [
        "persistência",
        "validade",
        "multiplexação",
        "UDP",
        "desempenho",
        "TTL"
      ],
      "checklist": [
        "Explico o que é keep-alive?",
        "Descrevo o cache e seus cabeçalhos?",
        "Cito a compressão gzip/brotli?",
        "Reconheço as limitações de cada técnica?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que HTTP/1.1 carrega uma página com dez imagens mais rápido que HTTP/1.0 para o mesmo usuário?",
        "dados": "Página com HTML mais dez imagens; HTTP/1.0 abre onze conexões TCP separadas, HTTP/1.1 reutiliza uma única conexão persistente (keep-alive).",
        "conceitos": [
          "keep-alive",
          "handshake TCP"
        ],
        "estrategia": "Comparar o número de handshakes TCP: HTTP/1.0 exige um por recurso, HTTP/1.1 usa apenas um para todos os recursos da mesma página.",
        "execucao": [
          "O navegador abre uma conexão TCP com o servidor (handshake)",
          "Requisita o HTML e as dez imagens sobre essa mesma conexão persistente",
          "O servidor envia todas as respostas sem fechar a conexão entre elas",
          "Mede-se a economia de handshakes: onze no HTTP/1.0 contra um no HTTP/1.1"
        ],
        "resultado": "HTTP/1.1 evita dez handshakes TCP adicionais, reduzindo a latência total de carregamento da página.",
        "justificativa": "Cada handshake TCP adiciona ida e volta (round-trip) antes de enviar a requisição; ao reutilizar a conexão, o HTTP/1.1 elimina essa repetição para os recursos seguintes, o que explica a página mais rápida.",
        "errosFrequentes": [
          "Acreditar que o keep-alive elimina o TCP — ele apenas reutiliza a conexão TCP existente",
          "Contar apenas o download das imagens e ignorar o custo de estabelecimento de cada conexão"
        ],
        "variacao": "Se a página tivesse vinte imagens, HTTP/1.0 exigiria vinte e um handshakes contra um no HTTP/1.1, ampliando ainda mais a diferença de latência."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um navegador recebe a resposta com o cabeçalho Cache-Control: max-age=3600. Por quanto tempo pode reutilizar o recurso sem consultar o servidor?",
        "dados": "Cabeçalho recebido: Cache-Control: max-age=3600; recurso é uma folha de estilos CSS; cliente é um navegador com cache habilitado.",
        "conceitos": [
          "cache HTTP",
          "Cache-Control / max-age"
        ],
        "estrategia": "Interpretar max-age em segundos: o valor indica o tempo máximo em que o cliente pode reutilizar a resposta em cache sem revalidar com o servidor.",
        "execucao": [
          "Identificar o cabeçalho Cache-Control na resposta HTTP",
          "Ler o valor de max-age: 3600 segundos",
          "Converter 3600 segundos em uma hora",
          "Concluir que o navegador reutiliza o CSS em cache por até uma hora sem nova requisição"
        ],
        "resultado": "O navegador pode reutilizar o recurso do cache por 3600 segundos (uma hora) sem revalidar no servidor.",
        "justificativa": "max-age define o tempo de vida do cache em segundos; 3600 segundos equivalem a uma hora, período durante o qual a resposta é considerada fresca e servida diretamente do cache local.",
        "errosFrequentes": [
          "Interpretar 3600 como 3600 milissegundos em vez de segundos",
          "Achar que o recurso expira exatamente ao fim do período e deixa de funcionar, em vez de apenas exigir revalidação"
        ],
        "variacao": "Se o cabeçalho fosse Cache-Control: max-age=7200, o navegador poderia reutilizar o recurso por duas horas sem consultar o servidor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Cache HTTP sempre serve o conteúdo mais recente do servidor, sem exceção.'",
        "dados": "Recurso em cache com max-age=3600 ainda válido; servidor publica uma versão atualizada do mesmo recurso antes do TTL expirar.",
        "conceitos": [
          "cache HTTP",
          "validade / TTL",
          "revalidação (ETag, Last-Modified)"
        ],
        "estrategia": "Avaliar se o cache garante atualidade: o cache serve a cópia armazenada enquanto estiver dentro do TTL, independentemente de mudanças no servidor.",
        "execucao": [
          "Verificar que a cópia em cache ainda não expirou (dentro do max-age)",
          "Observar que o servidor já publicou uma versão mais recente",
          "Concluir que o cliente recebe a versão antiga do cache, não a mais recente",
          "Identificar que apenas expiração do TTL ou revalidação (ETag/Last-Modified) traria a versão nova"
        ],
        "resultado": "Errado: enquanto o cache estiver válido, o cliente recebe a versão armazenada, que pode estar desatualizada em relação ao servidor.",
        "justificativa": "O cache prioriza a validade do TTL sobre a atualidade do servidor; somente após a expiração ou uma revalidação bem-sucedida com ETag/Last-Modified o cliente obtém a versão mais recente.",
        "errosFrequentes": [
          "Confundir 'tem cache' com 'sempre mostra o mais recente'",
          "Esquecer que a revalidação só acontece após expiração ou solicitação explícita de validação"
        ],
        "variacao": "Se o servidor enviasse Cache-Control: no-cache, o navegador teria de revalidar a cada acesso, garantindo que nunca sirva conteúdo desatualizado sem consultar o servidor."
      }
    ]
  },
  "m2-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Comparar IPv4 e IPv6 é tema central do conteúdo programático de redes, que aborda tamanho do endereço, notação, cabeçalho e mecanismos de transição. Confundir os dois protocolos leva a erro em itens que atribuem ao IPv6 recursos exclusivos do IPv4, como o ARP.",
      "preRequisitos": [
        "Camada de rede do modelo OSI e do TCP/IP",
        "Noção de endereço lógico e de cabeçalho de pacote"
      ],
      "objetivosObservaveis": [
        "Comparar IPv4 e IPv6 quanto ao tamanho do endereço e ao formato de notação",
        "Explicar o esgotamento do espaço de endereçamento IPv4",
        "Citar recursos do IPv6: NDP, SLAAC, cabeçalho simplificado e IPsec nativo",
        "Descrever pilha dupla, túnel e tradução como estratégias de migração"
      ],
      "competencias": [
        "Comparação de protocolos por características técnicas objetivas",
        "Análise de transição tecnológica e de convivência entre versões"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — detalha os campos do endereço comparado aqui",
        "m2-u3-t3-s3 (ARP e Neighbor Discovery) — a substituição do ARP pelo NDP no IPv6",
        "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — aprofunda a notação hexadecimal"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta (estimativa pedagógica): a transição IPv4-IPv6 integra editais de redes em itens sobre notação, cabeçalho e migração; sem frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "IPv4: endereços de 32 bits em notação decimal pontuada, como 192.168.1.10, cerca de 4,3 bilhões de endereços, espaço já esgotado. IPv6: endereços de 128 bits em notação hexadecimal com dois-pontos, como 2001:db8::1, espaço praticamente inesgotável, cabeçalho de 40 bytes, sem checksum e com autoconfiguração.",
      "intermediario": "O aluno associa recursos a cada versão: no IPv4, cabeçalho de 20 bytes no mínimo, com TTL, checksum e fragmentação também nos roteadores; no IPv6, cabeçalho fixo de 40 bytes, sem checksum, fragmentação apenas na origem e extensões opcionais. Também nota que o IPv6 troca o ARP pelo NDP, oferece SLAAC e inclui IPsec nativo, de uso opcional.",
      "avancado": "No nível avançado o aluno escolhe a estratégia de migração por cenário: pilha dupla para operar os dois protocolos em paralelo; túnel para transportar IPv6 sobre infraestrutura IPv4; tradução NAT64/DNS64 quando só existe IPv4. Avalia ainda o custo de cada opção em rotas, firewall e suporte a aplicações legadas.",
      "especialista": "No nível especialista o aluno analisa impactos: a tradução quebra o princípio fim a fim e pode impedir funções que dependem de endereços visíveis nas pontas, enquanto a pilha dupla exige o dobro de rotas e de monitoramento. Justifica a escolha pela topologia, pelo plano de endereçamento e pela exigência de SLAAC."
    },
    "comparacoes": [
      {
        "tema": "IPv4 x IPv6",
        "a": {
          "rotulo": "IPv4",
          "texto": "Endereços de 32 bits em notação decimal pontuada, como 192.168.1.10; cabeçalho de 20 bytes no mínimo, com checksum e fragmentação nos roteadores."
        },
        "b": {
          "rotulo": "IPv6",
          "texto": "Endereços de 128 bits em notação hexadecimal, como 2001:db8::1; cabeçalho fixo de 40 bytes, sem checksum e sem fragmentação intermediária."
        },
        "diferencaGabarito": "A diferença decisiva é o tamanho do endereço e a estrutura do cabeçalho: 32 bits com campos variáveis no IPv4 contra 128 bits e cabeçalho fixo no IPv6."
      },
      {
        "tema": "ARP x Neighbor Discovery (NDP)",
        "a": {
          "rotulo": "ARP (IPv4)",
          "texto": "Descobre o endereço MAC correspondente a um endereço IPv4 por difusão no mesmo segmento, sem oferecer autoconfiguração."
        },
        "b": {
          "rotulo": "NDP (IPv6)",
          "texto": "Executa a descoberta de vizinhança sobre ICMPv6 e acrescenta SLAAC e detecção de endereço duplicado."
        },
        "diferencaGabarito": "No IPv6 o NDP substitui o ARP e acrescenta funções de autoconfiguração; afirmar que o IPv6 continua usando ARP está incorreto."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "IPv6 é o IPv4 com mais bits, sem outras mudanças relevantes.",
        "porqueErrada": "Ignora que o cabeçalho fica fixo em 40 bytes e sem checksum, a fragmentação deixa de ocorrer nos roteadores, o ARP dá lugar ao NDP e há SLAAC.",
        "versaoCorreta": "O IPv6 altera endereço, cabeçalho, descoberta de vizinhos e autoconfiguração; não é apenas o IPv4 com mais bits."
      },
      {
        "afirmacaoEquivocada": "IPv6 usa ARP para resolver endereços na rede local.",
        "porqueErrada": "O ARP pertence ao IPv4; no IPv6 a descoberta de vizinhança é executada pelo Neighbor Discovery sobre mensagens ICMPv6.",
        "versaoCorreta": "No IPv6 o ARP é substituído pelo NDP sobre ICMPv6, que também oferece SLAAC e detecção de endereço duplicado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'IPv6 elimina a necessidade de NAT porque cada dispositivo terá IP público.'",
        "porqueErrada": "A abundância de endereços retira do NAT sua justificativa principal, mas a tradução pode persistir por política interna ou por convivência com o IPv4.",
        "versaoCorreta": "Parcialmente incorreta: a disponibilidade de endereços globais permite o fim a fim, porém a tradução pode persistir por política (ULA) ou por transição (NAT64)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "IPv4 (endereços de 32 bits)",
        "IPv6 (endereços de 128 bits)",
        "Pilha dupla, túnel e tradução (NAT64/DNS64)",
        "NDP e SLAAC"
      ],
      "regras": [
        "IPv4: 2^32 endereços, cerca de 4,3 bilhões, em notação decimal pontuada",
        "IPv6: 2^128 endereços, em notação hexadecimal e cabeçalho fixo de 40 bytes",
        "O IPsec é nativo no IPv6, mas seu uso permanece opcional"
      ],
      "comparacoes": [
        "O IPv4 tem cabeçalho com checksum e fragmentação intermediária; o IPv6 tem cabeçalho fixo, sem checksum e sem fragmentação nos roteadores"
      ],
      "fluxos": [
        "Migração: pilha dupla para operar os dois protocolos, túnel para transportar IPv6 sobre IPv4 e tradução NAT64/DNS64 quando só há IPv4"
      ],
      "excecoes": [
        "O IPsec nativo do IPv6 não é de uso obrigatório, e NAT também pode existir no IPv6 por política (ULA) ou por transição"
      ],
      "palavrasChave": [
        "esgotamento",
        "128 bits",
        "NDP",
        "SLAAC",
        "pilha dupla",
        "coexistência"
      ],
      "checklist": [
        "Comparo IPv4 e IPv6 em bits e notação?",
        "Explico por que o espaço IPv4 se esgotou?",
        "Cito cabeçalho, NDP, SLAAC e IPsec do IPv6?",
        "Descrevo pilha dupla, túnel e tradução?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em uma comparação entre protocolos, quantos endereços IPv4 e IPv6 existem aproximadamente?",
        "dados": "Cálculo do espaço de endereçamento: IPv4 com 32 bits e IPv6 com 128 bits por endereço; referência de 4,3 bilhões para o IPv4.",
        "conceitos": [
          "Tamanho do endereço em bits",
          "Espaço de endereçamento e esgotamento"
        ],
        "estrategia": "Extraia os bits do endereço de cada versão, aplique a potência de base 2 e compare as ordens de grandeza para justificar a transição.",
        "execucao": [
          "1) Identificar o tamanho do endereço IPv4: 32 bits.",
          "2) Calcular 2^32, aproximadamente 4,3 bilhões de endereços.",
          "3) Calcular 2^128 para o IPv6, cerca de 3,4 x 10^38 endereços.",
          "4) Comparar as escalas e concluir pela migração."
        ],
        "resultado": "IPv4: 2^32 ≈ 4,3 bilhões. IPv6: 2^128 ≈ 3,4×10^38. A diferença de escala é a motivação central da transição.",
        "justificativa": "O espaço de endereçamento é 2 elevado ao número de bits. Como 32 bits geram apenas 4,3 bilhões de endereços e a demanda os superou, o esgotamento motivou o IPv6, cujos 128 bits ampliam o espaço de forma inesgotável.",
        "errosFrequentes": [
          "Confundir 2^32 com 2^64 e superestimar o espaço do IPv4.",
          "Ignorar que endereços reservados e privados reduzem o espaço utilizável do IPv4."
        ],
        "variacao": "Se o enunciado pedir a diferença em ordem de grandeza, o aluno deve responder que o IPv6 oferece 2^96 vezes mais endereços que o IPv4."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um roteador de borda precisa suportar IPv4 e IPv6 simultaneamente. Qual estratégia de migração adotar?",
        "dados": "Cenário: roteador de borda; conexões IPv4 ativas e início da adoção de IPv6; parte dos enlaces internos ainda opera somente em IPv4.",
        "conceitos": [
          "Pilha dupla (dual stack)",
          "Túneis IPv6 sobre IPv4",
          "Tradução NAT64 e DNS64"
        ],
        "estrategia": "Compare as três estratégias de migração e escolha a que opera os dois protocolos em paralelo, descartando túnel e tradução.",
        "execucao": [
          "1) Listar as estratégias: pilha dupla, túnel e tradução.",
          "2) Verificar que a pilha dupla mantém os dois protocolos em paralelo, com rotas e interfaces separadas.",
          "3) Descartar o túnel, indicado quando a rede interna é IPv6 e o caminho é IPv4.",
          "4) Descartar NAT64/DNS64, reservado a cenários só IPv4.",
          "5) Concluir pela pilha dupla como estratégia preferida."
        ],
        "resultado": "Pilha dupla (dual stack): o roteador processa os dois protocolos em paralelo, com tabelas de rotas e interfaces separadas; é a estratégia preferida quando possível.",
        "justificativa": "A pilha dupla configura os dois protocolos no mesmo equipamento, preservando a comunicação fim a fim e evitando conversões de endereço; por isso é a opção preferida quando há suporte nas duas pontas.",
        "errosFrequentes": [
          "Indicar NAT64/DNS64 por associar migração a tradução automática de endereços.",
          "Confundir túnel com pilha dupla: o túnel encapsula um protocolo no outro."
        ],
        "variacao": "Se a rede interna passasse a ser exclusivamente IPv6 e o acesso à Internet seguisse em IPv4, a resposta correta passaria a ser um túnel, como o 6in4."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'IPv6 elimina a necessidade de NAT porque cada dispositivo terá IP público.' — avaliar se procede.",
        "dados": "Afirmação a avaliar. Contexto: organização com IPv6 e faixas ULA internas; parte dos serviços acessados ainda opera somente em IPv4.",
        "conceitos": [
          "Endereçamento fim a fim no IPv6",
          "NAT66 e faixas ULA",
          "Tradução no período de transição"
        ],
        "estrategia": "Separe a parte correta da generalização indevida: o IPv6 acaba com a escassez de endereços, mas a tradução pode persistir por política ou por transição.",
        "execucao": [
          "1) Isolar a afirmação: o IPv6 eliminaria por completo a necessidade de NAT.",
          "2) Verificar que os 128 bits permitem fim a fim, retirando do NAT a justificativa por escassez.",
          "3) Reconhecer que a tradução pode persistir por política (ULA) ou transição (NAT64).",
          "4) Concluir que a afirmação é parcialmente incorreta."
        ],
        "resultado": "Parcialmente incorreta. O IPv6 acaba com a escassez que motiva o NAT, mas a tradução pode persistir por política (ULA) ou por transição; a eliminação não é automática.",
        "justificativa": "A afirmação confunde disponibilidade de endereços com obrigatoriedade de tradução: o IPv6 torna o NAT desnecessário por escassez, mas ele pode persistir por decisão administrativa ou para converter tráfego IPv4.",
        "errosFrequentes": [
          "Marcá-la como certa por associar IPv6 a endereço público único por dispositivo.",
          "Marcá-la como inteiramente errada, ignorando que a abundância de endereços retira a justificativa do NAT."
        ],
        "variacao": "Trocar a afirmação: 'No IPv6, cada dispositivo pode receber endereço global sem NAT' — nesse caso a afirmação é correta e exige explicar o fim a fim."
      }
    ]
  },
  "m2-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O TCP sustenta HTTP, e-mail e transferências de arquivo, e a prova cobra handshake, sequência, ACK, retransmissão e a distinção entre controle de fluxo e de congestionamento. Confundir rwnd com cwnd inverte o gabarito de itens recorrentes.",
      "preRequisitos": [
        "Camada de transporte do modelo OSI e do TCP/IP",
        "Conceito de segmento, porta e conexão"
      ],
      "objetivosObservaveis": [
        "Descrever o three-way handshake SYN, SYN-ACK e ACK",
        "Explicar números de sequência, ACK e retransmissão por estouro do RTO",
        "Diferenciar controle de fluxo (rwnd) de controle de congestionamento (cwnd)",
        "Descrever o encerramento da conexão por FIN/ACK ou por RST"
      ],
      "competencias": [
        "Análise de protocolo e leitura de diagramas de conexão",
        "Diagnóstico de lentidão em transferências de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t1-s3 (UDP: datagramas sem conexão) — contraponto sem conexão e sem confiabilidade",
        "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas) — aplicação que depende do TCP",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — protocolo que opera sobre o TCP"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta (estimativa pedagógica): os mecanismos do TCP integram editais de redes em itens sobre handshake, retransmissão e janelas; sem frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O TCP (Transmission Control Protocol) é orientado à conexão e confiável. A abertura usa three-way handshake: o cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK. Cada byte tem número de sequência e o receptor confirma o próximo esperado; sem confirmação no RTO, o segmento é reenviado. O encerramento ocorre por FIN/ACK ou por RST.",
      "intermediario": "O aluno detalha os mecanismos: a sequência numera cada byte e o ACK confirma o próximo esperado; a retransmissão ocorre quando o RTO expira; o controle de fluxo usa a janela rwnd anunciada pelo receptor; o controle de congestionamento ajusta a cwnd do emissor com slow start e congestion avoidance. HTTP, SMTP, FTP e SSH utilizam o TCP.",
      "avancado": "No nível avançado o aluno separa as duas janelas: rwnd protege o receptor e é anunciada por ele; cwnd protege a rede e é calculada pelo emissor conforme o estado do enlace. Também explica o custo da confiabilidade — cabeçalho maior, latência do handshake e atraso das retransmissões — e por que voz e vídeo ao vivo preferem o UDP.",
      "especialista": "No nível especialista o aluno interpreta falhas: perda de segmento provoca retransmissão e redução da cwnd, derrubando a vazão mesmo sem congestionamento real; atrasos variáveis alteram o RTO e o tempo de resposta percebido. Usa essa leitura para diagnosticar transferências lentas e escolher o transporte adequado."
    },
    "comparacoes": [
      {
        "tema": "Controle de fluxo x controle de congestionamento",
        "a": {
          "rotulo": "Controle de fluxo",
          "texto": "Protege o receptor: ele anuncia a janela rwnd, limitando quantos bytes pode receber sem sobrecarregar seus buffers."
        },
        "b": {
          "rotulo": "Controle de congestionamento",
          "texto": "Protege a rede: o emissor ajusta a janela cwnd conforme o estado do enlace, reduzindo a velocidade em situações de congestionamento."
        },
        "diferencaGabarito": "O fluxo é limitado pelo receptor e o congestionamento pelo emissor, com base no estado da rede; trocar os dois inverte o gabarito de itens sobre quem define a janela."
      },
      {
        "tema": "Abertura x encerramento da conexão",
        "a": {
          "rotulo": "Abertura (handshake)",
          "texto": "O cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK, sincronizando as sequências iniciais dos dois lados."
        },
        "b": {
          "rotulo": "Encerramento",
          "texto": "Cada lado envia FIN para indicar o fim de seu envio e recebe o ACK do outro; o RST encerra a conexão de forma abrupta."
        },
        "diferencaGabarito": "A abertura usa três mensagens (SYN, SYN-ACK e ACK) e o encerramento usa FIN com ACK; o RST não participa do handshake de abertura."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Controle de fluxo e controle de congestionamento são o mesmo mecanismo com nomes diferentes.",
        "porqueErrada": "Cada um protege um agente distinto: o fluxo é limitado pelo receptor para não sobrecarregar seus buffers; o congestionamento é ajustado pelo emissor segundo a rede.",
        "versaoCorreta": "São mecanismos distintos: o controle de fluxo protege o receptor pela janela rwnd, e o controle de congestionamento protege a rede pela cwnd do emissor."
      },
      {
        "afirmacaoEquivocada": "O TCP garante que os dados cheguem dentro de um prazo determinado.",
        "porqueErrada": "O protocolo assegura entrega ordenada e sem duplicação, mas não estabelece prazo: retransmissões e congestionamento tornam o atraso variável.",
        "versaoCorreta": "O TCP garante entrega confiável e ordenada, sem garantia de prazo; aplicações com restrição de atraso usam UDP, aceitando perdas."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'TCP garante entrega em tempo real sem perda.'",
        "porqueErrada": "Mistura confiabilidade com tempo real: o TCP recupera perdas por retransmissão, o que introduz latência variável e o torna inadequado a atrasos rígidos.",
        "versaoCorreta": "Errado. O TCP entrega os dados de forma confiável e ordenada, mas não em tempo real; VoIP e streaming ao vivo usam UDP, que tolera perdas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "TCP orientado à conexão e confiável",
        "Three-way handshake (SYN, SYN-ACK, ACK)",
        "Números de sequência e ACK",
        "Janelas rwnd e cwnd",
        "Retransmissão por estouro do RTO"
      ],
      "regras": [
        "Abertura: SYN, SYN-ACK e ACK; encerramento: FIN com ACK, ou RST",
        "O receptor confirma o próximo byte esperado e o emissor reenvia segmentos não confirmados",
        "A rwnd é anunciada pelo receptor; a cwnd é ajustada pelo emissor"
      ],
      "comparacoes": [
        "O controle de fluxo protege o receptor, enquanto o controle de congestionamento protege a rede"
      ],
      "fluxos": [
        "Abertura da conexão, troca de dados com ACKs e retransmissões, e encerramento por FIN/ACK ou RST"
      ],
      "excecoes": [
        "Aplicações sensíveis a atraso, como VoIP e streaming ao vivo, preferem UDP apesar da perda de confiabilidade"
      ],
      "palavrasChave": [
        "conexão",
        "confiabilidade",
        "sequência",
        "ACK",
        "janela",
        "congestionamento"
      ],
      "checklist": [
        "Descrevo o handshake com as três mensagens?",
        "Explico o que o ACK confirma?",
        "Diferencio rwnd de cwnd e digo quem define cada uma?",
        "Descrevo o encerramento por FIN/ACK e a função do RST?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Descrever o three-way handshake TCP entre cliente e servidor, indicando as mensagens trocadas e o que cada uma sincroniza.",
        "dados": "Cenário: cliente em 10.0.0.5 abre conexão com o servidor na porta 80. ISN definidos por cada lado; flags SYN e ACK do cabeçalho TCP.",
        "conceitos": [
          "Three-way handshake",
          "ISN (Initial Sequence Number)",
          "Flags SYN e ACK"
        ],
        "estrategia": "Ordene as três mensagens da abertura e identifique o que cada uma sincroniza: o ISN do cliente, o do servidor e a confirmação de ambos.",
        "execucao": [
          "1) O cliente envia SYN com seu ISN para solicitar a conexão.",
          "2) O servidor responde SYN-ACK com seu ISN e o ACK do ISN+1 do cliente.",
          "3) O cliente envia ACK confirmando o ISN do servidor somado de um.",
          "4) A conexão fica estabelecida e sincronizada."
        ],
        "resultado": "Cliente envia SYN com ISN; servidor responde SYN-ACK com seu ISN e o ACK do ISN+1 do cliente; cliente envia ACK do ISN+1 do servidor. Conexão estabelecida.",
        "justificativa": "O handshake faz os dois lados conhecerem os números de sequência iniciais um do outro antes da troca de dados; sem essa sincronização, os ACKs não poderiam indicar quais bytes já foram recebidos.",
        "errosFrequentes": [
          "Citar apenas SYN e ACK, esquecendo o SYN-ACK do servidor.",
          "Afirmar que o handshake carrega dados de aplicação, quando apenas sincroniza sequências."
        ],
        "variacao": "Se a pergunta tratar de reconexão após queda, o aluno deve descrever um novo SYN com ISN diferente mantendo o padrão de três mensagens."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um download TCP está lento em uma rede congestionada. Quais mecanismos do TCP reagem?",
        "dados": "Cenário: transferência HTTP por TCP em enlace com perdas; queda de vazão; janela cwnd em slow start.",
        "conceitos": [
          "Controle de congestionamento",
          "Janela cwnd",
          "Slow start e congestion avoidance"
        ],
        "estrategia": "Identifique o sintoma — perda e lentidão — e relacione-o aos mecanismos do emissor: redução da cwnd, com slow start ou congestion avoidance.",
        "execucao": [
          "1) Relacionar a lentidão a perdas de segmento no enlace congestionado.",
          "2) Verificar que o emissor reduz a cwnd ao detectar perda.",
          "3) Reconhecer a retomada por slow start ou congestion avoidance.",
          "4) Concluir que a vazão cai até a rede se restabelecer."
        ],
        "resultado": "Controle de congestionamento: reduz cwnd, entra em slow start ou congestion avoidance e pode usar fast recovery; a vazão cai até a rede se recuperar.",
        "justificativa": "O TCP interpreta a perda de segmentos como sinal de congestionamento e reduz a janela para aliviar a rede; com menos dados em trânsito, a vazão percebida cai até o enlace se restabelecer.",
        "errosFrequentes": [
          "Atribuir a reação ao controle de fluxo, que depende do receptor e não das perdas na rede.",
          "Esperar que o TCP acelere para compensar a perda, quando ele reduz a cwnd."
        ],
        "variacao": "Se o enlace estiver ocioso e o receptor for lento, a limitação passa a ser a janela rwnd anunciada pelo receptor, e não o congestionamento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'TCP garante entrega em tempo real sem perda.' — avaliar se a afirmação procede e corrigi-la.",
        "dados": "Afirmação a avaliar. Contexto: voz sobre IP com restrição de atraso; rede com perdas pontuais e retransmissões TCP ativas.",
        "conceitos": [
          "Confiabilidade do TCP",
          "Retransmissão e RTO",
          "UDP em aplicações de tempo real"
        ],
        "estrategia": "Separe as propriedades citadas: o TCP entrega sem perda, mas a recuperação por retransmissão torna o atraso variável, incompatível com tempo real.",
        "execucao": [
          "1) Isolar a afirmação: entrega em tempo real e sem perda.",
          "2) Confirmar que o TCP recupera perdas, logo entrega sem perda.",
          "3) Verificar que a recuperação depende do RTO, o que impede prazo garantido.",
          "4) Concluir que a afirmação é errada e corrigi-la."
        ],
        "resultado": "Errado. O TCP garante entrega confiável e ordenada, mas não em tempo real: retransmissões e congestionamento tornam a latência variável; tempo real usa UDP (VoIP, streaming).",
        "justificativa": "A afirmação confunde ausência de perda com determinismo de tempo: o TCP não perde dados, mas o preço é a espera por confirmações e retransmissões, que gera atraso variável; daí a preferência por UDP.",
        "errosFrequentes": [
          "Aceitar a afirmação por saber que o TCP não perde dados.",
          "Concluir que o UDP também garante a entrega, quando ele apenas não retransmite."
        ],
        "variacao": "Trocar a afirmação: 'O TCP entrega os dados sem perda, mas sem garantia de prazo' — nesse caso a afirmação é correta e exige explicar o custo da confiabilidade."
      }
    ]
  },
  "m2-u3-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Saber quando o UDP é preferível ao TCP é tema central do conteúdo programático de redes: aborda a comparação direta entre os dois protocolos de transporte e os exemplos clássicos de aplicação. O candidato precisa reconhecer que a ausência de handshake, de confirmação e de controle de fluxo não é defeito, mas escolha de projeto que compra latência baixa e overhead pequeno.",
      "preRequisitos": [
        "Camada de transporte e o conceito de porta lógica",
        "Modelo TCP/IP em camadas",
        "Noção de handshake e confirmação (ACK)"
      ],
      "objetivosObservaveis": [
        "Definir o UDP como protocolo de transporte sem conexão e não confiável",
        "Citar vantagens do UDP: latência, overhead e suporte a broadcast/multicast",
        "Reconhecer limitações: perda, duplicação e reordenação de datagramas",
        "Associar DNS, DHCP, VoIP, streaming e jogos ao UDP"
      ],
      "competencias": [
        "Escolha de protocolo de transporte conforme requisito da aplicação",
        "Leitura de cenários de tempo real sob pressão de prova"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t1-s2 (TCP: confiabilidade, fluxo e congestionamento) — contraponto obrigatório: confiável e ordenado",
        "m2-u3-t2-s2 (DNS: resolução de nomes) — usa UDP/53 nas consultas simples",
        "m2-u3-t2-s3 (DHCP: atribuição dinâmica de endereços) — depende de broadcast, impossível em TCP",
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — UDP sustenta broadcast e multicast"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": " e alternam itens de certo/errado sobre cabeçalho de 8 bytes e ausência de sequência; costuma pedir o protocolo indicado para voz e videoconferência. A classificação é estimativa pedagógica qualitativa de adequação ao edital, não medição de incidência."
      }
    },
    "niveis": {
      "iniciante": "UDP (User Datagram Protocol) é sem conexão e não confiável: envia datagramas independentes, sem handshake, sem ACK, sem retransmissão, sem controle de fluxo/congestionamento, sem ordenação. Cabeçalho mínimo (8 bytes: portas origem/destino, comprimento, checksum). Vantagens: baixa latência, overhead mínimo, suporta broadcast/multicast. Limitações: pode perder, duplicar ou reordenar pacotes; a aplicação deve tratar confiabilidade se necessário. Usado por DNS, DHCP, VoIP, streaming, jogos online e QUIC.",
      "intermediario": "A comparação com o TCP é o eixo da questão: o TCP paga três vias de handshake, números de sequência, ACKs, janelas e retransmissão para entregar fluxo ordenado e confiável; o UDP entrega o datagrama imediatamente, encostando no IP com apenas portas, comprimento e checksum. Em taxa de 20 atualizações por segundo, esperar retransmissão atrasaria o estado do jogo mais do que perder um pacote. O checksum do UDP é opcional no IPv4 e cobre apenas o cabeçalho e os dados do próprio datagrama, sem reconstruir conexão.",
      "avancado": "Como o UDP não oferece garantias, a confiabilidade precisa ser reimplementada acima dele quando a aplicação exigir: o QUIC, base do HTTP/3, adiciona números de sequência, ACKs, controle de congestionamento e TLS dentro do espaço de usuário. Também é o UDP que permite difusão para muitos receptores ao mesmo tempo — DHCP depende de broadcast antes de o cliente ter IP, e multicast de vídeo não escalaria em TCP. Diagnosticar queda de pacotes UDP exige olhar filas, jitter e perda, não retransmissões.",
      "especialista": "Em projeto de serviço, decidir o transporte é decidir onde ficam as garantias: aplicações de tempo real escolhem UDP e tratam perda por interpolação, redundância ou FEC; transferências de arquivo escolhem TCP porque a integridade do bytes importa mais que o atraso. Uma arquitetura pode combinar os dois — sinalização em TCP e mídia em UDP (RTP/RTCP). O argumento de gabarito jamais é 'UDP é pior', e sim 'UDP é o adequado quando latência, difusão ou escala superam a confiabilidade ponto a ponto'."
    },
    "comparacoes": [
      {
        "tema": "TCP e UDP como opções de transporte",
        "a": {
          "rotulo": "TCP",
          "texto": "Orientado a conexão, confiável e ordenado: handshake, ACK, retransmissão, controle de fluxo e congestionamento; cabeçalho maior."
        },
        "b": {
          "rotulo": "UDP",
          "texto": "Sem conexão e não confiável: datagramas independentes, cabeçalho de 8 bytes, sem ACK nem ordenação; permite broadcast e multicast."
        },
        "diferencaGabarito": "TCP garante entrega e ordem com custo de latência; UDP entrega rápido e enxuto, transferindo à aplicação o tratamento de falhas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O UDP é um protocolo inferior ao TCP e por isso está em desuso.",
        "porqueErrada": "A afirmação confunde ausência de garantias com defeito: o UDP é a escolha correta quando latência e difusão pesam mais que confiabilidade.",
        "versaoCorreta": "UDP e TCP servem a requisitos distintos; VoIP, DNS, DHCP, streaming e jogos operam em UDP justamente por ele ser enxuto."
      },
      {
        "afirmacaoEquivocada": "O UDP garante a ordem de chegada dos datagramas, pois usa a mesma porta de origem e destino.",
        "porqueErrada": "O cabeçalho do UDP não tem número de sequência; pacotes podem chegar fora de ordem, duplicados ou perdidos.",
        "versaoCorreta": "A ordenação, quando necessária, é responsabilidade da aplicação — o UDP não carrega número de sequência."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "UDP (User Datagram Protocol)",
        "Datagrama independente",
        "Cabeçalho de 8 bytes",
        "Broadcast e multicast",
        "QUIC sobre UDP"
      ],
      "regras": [
        "Sem handshake, sem ACK, sem retransmissão",
        "Portas de origem e destino identificam os processos",
        "Confiança, se exigida, vem da aplicação"
      ],
      "comparacoes": [
        "TCP: confiável e ordenado; UDP: rápido e sem garantias",
        "UDP permite broadcast/multicast; TCP não"
      ],
      "fluxos": [
        "Aplicação escreve dados na porta UDP → datagrama segue pelo IP → receptor porta → aplicação trata perda"
      ],
      "excecoes": [
        "DNS usa TCP em transferência de zona e respostas grandes",
        "QUIC reimplementa confiabilidade acima do UDP"
      ],
      "palavrasChave": [
        "latência",
        "overhead",
        "ordenação",
        "streaming",
        "tempo real"
      ],
      "checklist": [
        "Defino o UDP?",
        "Cito vantagens e limitações?",
        "Associo DNS, DHCP e VoIP ao UDP?",
        "Escolho UDP sobre TCP com justificativa?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o DNS usa UDP na porta 53 para consultas simples, e em que situação a troca por TCP se torna obrigatória?",
        "dados": "Consulta DNS por www.exemplo.com.br; resposta do tipo A dentro de 512 bytes; resolvedor com cache; porta 53.",
        "conceitos": [
          "Stateless da consulta DNS",
          "Cabeçalho UDP de 8 bytes",
          "Custo de handshake"
        ],
        "estrategia": "Avaliar o tamanho da troca: se uma pergunta e uma resposta pequenas resolvem o problema, pagar handshake e retransmissão só acrescenta latência.",
        "execucao": [
          "1. Medir o volume: uma consulta e uma resposta curtas cabem em um datagrama.",
          "2. Descartar o handshake: UDP dispensa as três vias do TCP.",
          "3. Enviar o datagrama para a porta 53 do servidor.",
          "4. Se a resposta estourar 512 bytes (ou exigir EDNS), reenviar a consulta sobre TCP na mesma porta."
        ],
        "resultado": "UDP na porta 53 para consultas simples; TCP apenas quando a resposta é grande ou há transferência de zona.",
        "justificativa": "A consulta DNS é uma troca única e curta: o UDP entrega com latência mínima e, se o datagrama se perder, o próprio cliente reenvia a pergunta. O TCP só se justifica quando o volume de dados exige fluxo confiável.",
        "errosFrequentes": [
          "Dizer que DNS usa apenas TCP porque 'precisa ser confiável' — ignora que o cliente reconsulta.",
          "Esquecer a exceção: respostas acima de 512 bytes e transferência de zona usam TCP."
        ],
        "variacao": "E se a zona do domínio precisar ser transferida entre servidores autoritativos? Aí o volume é grande e contínuo, e o transporte passa a ser TCP na porta 53."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um jogo de ação online envia a posição do jogador 20 vezes por segundo. TCP ou UDP, e o que a aplicação precisa fazer?",
        "dados": "Taxa de 20 atualizações por segundo; datagrama de posição com cerca de 40 bytes; orçamento de atraso de 100 ms; Interpolação no cliente.",
        "conceitos": [
          "Requisito de tempo real",
          "Custo da retransmissão",
          "Tratamento de perda na aplicação"
        ],
        "estrategia": "Comparar o custo de perder um pacote antigo com o custo de esperar sua retransmissão: em jogo, o dado velho vale menos que o dado novo.",
        "execucao": [
          "1. Fixar a exigência: atraso máximo de 100 ms por atualização.",
          "2. Calcular o efeito do TCP: retransmissão + reordenação elevariam o atraso além do orçamento.",
          "3. Escolher UDP para os pacotes de posição.",
          "4. Implementar na aplicação numeração de pacotes e interpolação entre as duas últimas posições recebidas.",
          "5. Reservar TCP para dados que não admitem perda, como histórico e inventário."
        ],
        "resultado": "UDP para posição, com interpolação no cliente; perda ocasional é aceitável, atraso não.",
        "justificativa": "O valor de uma atualização de posição decai rapidamente: quando a retransmissão chegasse, o estado já estaria superado. O UDP preserva o orçamento de latência e a aplicação resolve a descontinuidade interpolando movimento.",
        "errosFrequentes": [
          "Escolher TCP por 'segurança' e introduzir lag sempre que há perda na rede.",
          "Achar que UDP dispensa qualquer tratamento: sem numeração, o cliente não percebe o pacote perdido."
        ],
        "variacao": "Se o jogo passa a transmitar voz entre jogadores, a decisão se mantém? Sim — voz em tempo real também usa UDP, pois atraso e jitter prejudicam mais que pequenas perdas."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação sob julgamento: 'UDP é inútil porque não garante entrega.' Essa leitura está correta?",
        "dados": "Serviços em uso: consultas DNS, DHCP, VoIP corporativo, streaming de vídeo e jogos online; todos operando sobre UDP.",
        "conceitos": [
          "Ausência de garantia não é ausência de utilidade",
          "Adequação ao requisito",
          "Confiabilidade na camada de aplicação"
        ],
        "estrategia": "Testar a afirmação contra os fatos: se UDP fosse inútil, os serviços citados não funcionariam; procurar o que a garantia custaria em cada caso.",
        "execucao": [
          "1. Listar onde a latência vale mais que a entrega certa: voz, vídeo, posição de jogo.",
          "2. Verificar como cada serviço lida com a perda: reconsulta (DNS), interpolação (jogos), buffers (streaming).",
          "3. Reconhecer que o QUIC acrescenta confiabilidade acima do UDP quando a aplicação precisa.",
          "4. Concluir que a afirmação troca 'sem garantia' por 'sem utilidade'."
        ],
        "resultado": "A afirmação é falsa: UDP é indispensável onde latência, difusão e escala superam a confiabilidade ponto a ponto.",
        "justificativa": "A utilidade de um protocolo depende do requisito, e não de uma escala absoluta de recursos. O UDP entrega o mínimo necessário — endereçar processos e transmitir dados — e deixa as garantias opcionais à aplicação, o que o torna insubstituível em tempo real e em difusão.",
        "errosFrequentes": [
          "Tratar 'não confiável' como 'não utilizável'.",
          "Ignorar que a confiabilidade pode ser reimplementada acima, como faz o QUIC."
        ],
        "variacao": "Se a mesma afirmação mencionar especificamente transferência de arquivos, a conclusão muda? Não: para arquivos, o TCP é o adequado, mas por exigência de integridade, não por o UDP ser inútil."
      }
    ]
  },
  "m2-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "HTTP é o protocolo da web e sustenta boa parte do conteúdo cobrado em provas de redes e de segurança da informação. A banca testa se o candidato sabe o que cada método faz, como interpretar a classe de um código de status e o que o HTTPS acrescenta ao HTTP em termos de confidencialidade, integridade e autenticação.",
      "preRequisitos": [
        "TCP, portas e três vias de handshake",
        "Noções de TLS e certificado digital",
        "Modelo cliente-servidor e URL"
      ],
      "objetivosObservaveis": [
        "Listar métodos HTTP e seus efeitos (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)",
        "Interpretar códigos de status por classe (1xx a 5xx)",
        "Diferenciar HTTP de HTTPS quanto a porta e proteções",
        "Reconhecer que stateless não significa ausência de sessão"
      ],
      "competencias": [
        "Leitura de tráfego web e diagnóstico por método/status",
        "Interpretação de códigos de status em cenários de manutenção"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — camada que dá cifra e autenticação ao HTTPS",
        "m2-u3-t1-s2 (TCP: confiabilidade, fluxo e congestionamento) — transporte do HTTP clássico e do HTTP/2",
        "m2-u3-t1-s3 (UDP: datagramas sem conexão) — base do QUIC, usado pelo HTTP/3",
        "m2-u5-t4-s2 (Diferenças entre falha de DNS, conectividade, roteamento e aplicação) — separar erro 5xx de falha de rede"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Protocolos de aplicação são frequentes em editais de infraestrutura de TI: explora itens C/E sobre stateless e portas 80/443, enquanto e montam cenários com códigos de status e métodos. A classificação é estimativa pedagógica qualitativa, sem medição de incidência."
      }
    },
    "niveis": {
      "iniciante": "HTTP (HyperText Transfer Protocol) é um protocolo de aplicação stateless baseado em requisição-resposta: o cliente pede, o servidor responde. Métodos: GET (obter), POST (enviar dados), PUT (atualizar), DELETE (remover), PATCH, HEAD, OPTIONS. Códigos de status: 1xx informativo, 2xx sucesso (200 OK), 3xx redirecionamento (301, 302), 4xx erro do cliente (400, 401, 403, 404), 5xx erro do servidor (500, 502, 503). HTTP usa TCP porta 80. HTTPS é HTTP sobre TLS: cifra o conteúdo e autentica o servidor via certificado, usando porta 443.",
      "intermediario": "O modelo stateless significa que cada requisição é independente — o protocolo não guarda contexto entre elas. Sessões existem, mas são mantidas pela aplicação com cookies e tokens, não pelo HTTP. A escolha do método indica a intenção: GET obtém recurso (parâmetros na URL, cacheável e idempotente), POST envia dados no corpo e não é cacheável por padrão, PUT substitui um recurso e DELETE o remove. Os códigos organizam o diagnóstico: 4xx aponta falha do cliente (404 = não encontrado, 401 = não autenticado, 403 = proibido) e 5xx aponta falha do servidor (500, 502 gateway, 503 indisponível).",
      "avancado": "As versões mudam o transporte e a eficiência: HTTP/2 multiplexa vários fluxos em uma única conexão TCP e comprime cabeçalhos com HPACK; HTTP/3 abandona o TCP e roda sobre QUIC (UDP), reduzindo o atraso de estabelecimento. O HTTPS não é outro protocolo de aplicação: é o mesmo HTTP sobre TLS, que acrescenta confidencialidade (ninguém fora da sessão lê o conteúdo), integridade (alteração no trânsito invalida a verificação de MAC e derruba a conexão) e autenticação do servidor por certificado. Errar a porta — 80 sem TLS, 443 com TLS — é falha de configuração típica de proxy.",
      "especialista": "Diagnosticar a web exige separar camadas: falha de resolução de nomes (DNS), falha de conectividade (rota, firewall), falha de apresentação (TLS/certificado) e falha de aplicação (código 5xx). Um 503 com conteúdo de proxy difere de um erro de handshake TLS. Em manutenção planejada usa-se 503 com Retry-After; em aplicação quebrada, 500. Cookies só trafegam com atributo Secure por HTTPS, e Mixed Content é reprovado pelos navegadores modernos."
    },
    "comparacoes": [
      {
        "tema": "HTTP e HTTPS quanto a proteção e porta",
        "a": {
          "rotulo": "HTTP",
          "texto": "Texto claro sobre TCP na porta 80; qualquer intermediário no caminho pode ler e alterar as mensagens."
        },
        "b": {
          "rotulo": "HTTPS",
          "texto": "HTTP sobre TLS na porta 443; cifra o conteúdo, garante integridade e autentica o servidor por certificado."
        },
        "diferencaGabarito": "HTTPS não é protocolo diferente: é o mesmo HTTP com TLS, e a diferença cobrada em prova é cifra, integridade, autenticação e porta 443."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "HTTPS é um protocolo de aplicação diferente do HTTP, com métodos e códigos próprios.",
        "porqueErrada": "A troca está em colocar o TLS no lugar do HTTP: métodos, status e semântica continuam sendo os do HTTP.",
        "versaoCorreta": "HTTPS é o HTTP sobre TLS; o que muda é a camada de segurança (porta 443, cifra, integridade e autenticação do servidor)."
      },
      {
        "afirmacaoEquivocada": "404 indica erro do servidor, por isso aparece quando um site está fora do ar.",
        "porqueErrada": "A afirmação confunde classe de status: 404 pertence a 4xx, erro do cliente porque o recurso não foi encontrado.",
        "versaoCorreta": "404 é erro do cliente (recurso inexistente); erro do servidor é a classe 5xx, como 500 ou 503."
      },
      {
        "afirmacaoEquivocada": "Stateless significa que o HTTP não permite login nem sessão de usuário.",
        "porqueErrada": "A afirmação confunde ausência de estado no protocolo com ausência de sessão na aplicação.",
        "versaoCorreta": "O protocolo não guarda estado entre requisições; cookies e tokens, mantidos pela aplicação, sustentam a sessão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "HTTP e modelo requisição-resposta",
        "Stateless e sessão por cookies",
        "Métodos e segurança semântica",
        "Classes de status",
        "HTTPS como HTTP sobre TLS"
      ],
      "regras": [
        "2xx sucesso, 3xx redirecionamento, 4xx cliente, 5xx servidor",
        "HTTP porta 80; HTTPS porta 443",
        "GET obtem; POST envia no corpo"
      ],
      "comparacoes": [
        "4xx: falha do cliente; 5xx: falha do servidor",
        "HTTP/2: TCP multiplexado; HTTP/3: QUIC sobre UDP"
      ],
      "fluxos": [
        "Cliente resolve nome → conexão TCP → requisição com método e URL → resposta com status → recurso renderizado"
      ],
      "excecoes": [
        "HTTP/3 usa UDP via QUIC",
        "Sessão existe, mas é responsabilidade da aplicação"
      ],
      "palavrasChave": [
        "requisição",
        "status",
        "certificado",
        "sessão",
        "redirecionamento"
      ],
      "checklist": [
        "Listo métodos HTTP?",
        "Classifico 404 e 503 corretamente?",
        "Digo o que HTTPS acrescenta?",
        "Indico as portas 80 e 443?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Diferenciar uma requisição GET de uma POST quanto a parâmetros, cache, efeito no servidor e idempotência.",
        "dados": "Formulário de busca com campo q=concurso; envio de cadastro com nome e e-mail no corpo; URL https://exemplo.com/busca.",
        "conceitos": [
          "Método GET",
          "Método POST",
          "Idempotência e cacheabilidade"
        ],
        "estrategia": "Identificar para onde vão os dados e qual efeito a operação causa no servidor, pois isso define método e comportamento de cache.",
        "execucao": [
          "1. Verificar o destino dos parâmetros: URL na query string (GET) ou corpo da mensagem (POST).",
          "2. Avaliar o efeito: obtenção de recurso (GET) ou criação/alteração de estado (POST).",
          "3. Aplicar a regra de cache: respostas GET podem ser cacheadas; POST não por padrão.",
          "4. Concluir que usar GET para alterar estado é erro de projeto."
        ],
        "resultado": "GET transporta parâmetros na URL, é cacheável e idempotente; POST envia dados no corpo e não é cacheável por padrão.",
        "justificativa": "A semântica do método decorre da intenção da operação: obter um recursosão repetível e pode ser reexecutada sem efeito colateral, enquanto enviar dados processa uma alteração e por isso não deve ser cacheado nem reenviado por agentes.",
        "errosFrequentes": [
          "Colocar senha em query string via GET, expondo dado em log e histórico.",
          "Enviar tudo por POST, inclusive buscas que poderiam ser cacheadas."
        ],
        "variacao": "E se a operação precisa substituir integralmente um recurso já identificado na URL? O método adequado passa a ser PUT, não POST."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um site retorna 301 ao acessar http://exemplo.com. O que isso significa e o que cliente e buscadores devem fazer?",
        "dados": "Requisição GET http://exemplo.com; resposta 301 com cabeçalho Location: https://exemplo.com; indicador de migração permanente.",
        "conceitos": [
          "Classe 3xx",
          "Redirecionamento permanente",
          "Atualização de referências"
        ],
        "estrategia": "Ler o código pela classe antes do número: 3xx informa que o recurso está em outro endereço, e 301 especifica que a mudança é permanente.",
        "execucao": [
          "1. Classificar o status: 301 está em 3xx, família de redirecionamento.",
          "2. Ler o cabeçalho Location para obter o novo endereço (https://exemplo.com).",
          "3. Orientar o cliente a repetir a requisição no novo endereço e atualizar favoritos e links.",
          "4. Informar que buscadores transferem relevância para a URL definitiva por se tratar de mudança permanente.",
          "5. Observar que o cliente deixa de usar o endereço antigo em novas requisições."
        ],
        "resultado": "301 indica redirecionamento permanente: o cliente deve passar a usar https://exemplo.com e atualizar referências.",
        "justificativa": "A família 3xx sinaliza que a resposta não está no endereço pedido, e o dígito seguinte qualifica a duração da mudança. Como 301 é permanente, agentes de usuário e indexadores migram definitivamente as referências, diferentemente do 302, que é provisório.",
        "errosFrequentes": [
          "Confundir 301 com 404 e tratar o site como fora do ar.",
          "Ignorar o cabeçalho Location e concluir que não há ação possível."
        ],
        "variacao": "Se o status fosse 503 durante manutenção programada, a leitura muda: o recurso existe, está indisponível e deve-se aguardar ou repetir depois."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação sob julgamento: 'HTTPS garante que o servidor seja quem diz ser e que ninguém leia os dados, mas não impede alteração.' Está correta?",
        "dados": "Conexão HTTPS na porta 443 com certificado válido; tráfego interceptado por proxy transparente; mensagem alterada no trânsito.",
        "conceitos": [
          "Papel do TLS",
          "Verificação de integridade (MAC)",
          "Autenticação por certificado"
        ],
        "estrategia": "Testar a afirmação propriedade por propriedade: confidencialidade, integridade e autenticação são as três entregas do TLS, e a terceira cláusula nega uma delas.",
        "execucao": [
          "1. Confirmar a confidencialidade: o conteúdo circula cifrado, ilegível para terceiros.",
          "2. Confirmar a autenticação: o certificado vincula a chave ao nome do servidor.",
          "3. Testar a integridade: alterar um byte no trânsito invalida o MAC e a sessão é encerrada.",
          "4. Concluir que a afirmação é falsa porque nega justamente a proteção que o TLS oferece contra alteração."
        ],
        "resultado": "A afirmação é incorreta: HTTPS oferece confidencialidade, integridade e autenticidade do servidor — alterar dados no trânsito derruba a conexão.",
        "justificativa": "O TLS protege a mensagem com código de autificação: qualquer modificação no caminho falha na verificação e a conexão é abortada antes de chegar à aplicação. Como confidencialidade e integridade são entregues pelo mesmo registro, não é possível afirmar que o HTTPS esconde o conteúdo mas permite alterá-lo.",
        "errosFrequentes": [
          "Achar que cifrar já basta e que alteração passa despercebida.",
          "Confundir proteção do canal com a legitimidade do conteúdo exibido pelo site."
        ],
        "variacao": "Se o certificado do servidor for autoassinado, o que cai? A autenticação — o navegador alerta, e a garantia de 'quem diz ser' deixa de existir mesmo com o canal cifrado."
      }
    ]
  },
  "m2-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O DNS é a base da Internet por nomes: sem ele, nada funciona. Em concursos cobram a hierarquia raiz/TLD/autoritativo, os tipos de registro (A, AAAA, CNAME, MX, NS, TXT, SOA, PTR), a diferença entre resolução recursiva e iterativa, o cache por TTL e as portas UDP/TCP 53. Dominar esse fluxo resolve questões de configuração, troubleshooting e segurança de rede.",
      "preRequisitos": [
        "UDP/TCP e porta 53",
        "Conceito de endereço IP (IPv4 e IPv6)"
      ],
      "objetivosObservaveis": [
        "Definir o DNS e sua função de tradução nome→IP",
        "Descrever a hierarquia raiz → TLD → autoritativo",
        "Diferenciar resolução recursiva (cliente) de iterativa (resolvedor)",
        "Listar registros A, AAAA, CNAME, MX, NS, TXT, SOA e PTR"
      ],
      "competencias": [
        "Interpretar registros DNS em questões de concurso",
        "Diagnosticar falhas de resolução de nomes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t2-s3 (DHCP: atribuição dinâmica de endereços) — ambos servem configuração automática de rede",
        "m2-u1-t2-s1 (Unicast, broadcast, multicast, anycast) — base dos servidores-raiz DNS"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tópico central de redes em editais de TI: cobram hierarquia, registros e fluxo de resolução em itens de múltipla escolha e C/E, sem exigir estatística de incidência publicada. Classificação é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O DNS (Domain Name System) traduz nomes de domínio (www.exemplo.com.br) em endereços IP. Funciona como uma agenda telefônica da Internet: o usuário digita o nome e o sistema devolve o IP. Sua estrutura é hierárquica: raiz (.), domínios de topo (TLD, como .com e .br), domínios de segundo nível (exemplo.com) e subdomínios (www). Existem servidores-raiz (implementados com anycast), servidores de TLD e servidores autoritativos, que detêm a informação oficial de cada domínio. O cliente consulta um resolvedor recursivo, que percorre a hierarquia e devolve o IP. Os registros mais usados são A (IPv4), AAAA (IPv6), CNAME (apelido para outro nome), MX (servidor de e-mail), NS (servidores de nomes), TXT (texto, usado em SPF/DKIM), SOA (autoridade da zona) e PTR (resolução reversa, IP→nome). As respostas ficam em cache durante o TTL (tempo de vida), acelerando consultas repetidas. Consultas normais usam UDP na porta 53; transferências de zona e respostas grandes usam TCP na 53.",
      "intermediario": "Na resolução recursiva/iterativa, o cliente faz uma consulta recursiva ao resolvedor (pede a resposta final). O resolvedor, por sua vez, faz consultas iterativas aos servidores da hierarquia: primeiro pergunta à raiz, que indica o servidor de TLD (.br); depois pergunta ao TLD, que indica o servidor autoritativo de exemplo.com.br; por fim, o autoritativo devolve o IP. Cada passo retorna um encaminhamento até alcançar a resposta. O resolvedor armazena o resultado em cache pelo TTL, evitando consultas repetidas. DNSSEC assina os registros para autenticidade; DoH (DNS sobre HTTPS) e DoT (DNS sobre TLS) criptografam as consultas. Diferença crítica: registro A resolve para IPv4, AAAA para IPv6; CNAME aponta para outro nome, não para IP direto.",
      "avancado": "O cache por TTL controla por quanto tempo um resolvedor guarda uma resposta; alterações só se propagam após expirar o TTL. DNSSEC adiciona assinaturas digitais aos registros, protegendo contra envenenamento de cache (cache poisoning). DoH e DoT criptografam o tráfego DNS: DoH usa HTTPS (443) e DoT usa TLS dedicado (853). Um erro comum é afirmar que \"o DNS só usa UDP\": transferências de zona e respostas grandes usam TCP na 53.",
      "especialista": "Para diagnosticar falhas de DNS, distinga camadas: cache local do cliente/resolvedor (esvaziar ou aguardar TTL), delegação incorreta no servidor autoritativo (verificar registros NS e glue records) e falha de DNSSEC (assinatura inválida impede validação). Ferramentas: nslookup e dig (unidade 5.3). dig +trace mostra cada passo iterativo raiz→TLD→autoritativo. Anycast permite que muitos servidores-raiz compartilhem o mesmo IP, roteando o cliente para o mais próximo. "
    },
    "comparacoes": [
      {
        "tema": "Resolução recursiva vs. iterativa",
        "a": {
          "rotulo": "Recursiva (cliente)",
          "texto": "O cliente pede ao resolvedor a resposta final e aguarda; o resolvedor faz todo o trabalho de consulta."
        },
        "b": {
          "rotulo": "Iterativa (resolvedor)",
          "texto": "O resolvedor consulta servidores passo a passo (raiz → TLD → autoritativo), cada um devolvendo o próximo encaminhamento."
        },
        "diferencaGabarito": "Recursiva é a consulta do cliente ao resolvedor; iterativa é a consulta do resolvedor aos servidores. Trocar os termos erro em gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O DNS só usa UDP.",
        "porqueErrada": "Esquece que transferências de zona e respostas grandes usam TCP na porta 53.",
        "versaoCorreta": "O DNS usa UDP na porta 53 para consultas normais e TCP na 53 para transferências de zona e respostas grandes."
      },
      {
        "afirmacaoEquivocada": "Resolver o nome garante que o serviço responde.",
        "porqueErrada": "O DNS apenas mapeia nome→IP; não verifica se o servidor de destino está ativo.",
        "versaoCorreta": "A disponibilidade do serviço é uma verificação separada; o DNS só fornece o endereço IP."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DNS",
        "Hierarquia (raiz, TLD, domínio de segundo nível, subdomínio)",
        "Servidor autoritativo",
        "Resolução recursiva e iterativa",
        "Registro A e AAAA",
        "TTL e cache"
      ],
      "regras": [
        "Nome → IP; cache pelo TTL",
        "Consultas usam UDP/TCP porta 53",
        "Registros podem ser assinados por DNSSEC"
      ],
      "comparacoes": [
        "A resolve IPv4; AAAA resolve IPv6",
        "CNAME aponta para nome; A aponta para IP"
      ],
      "fluxos": [
        "Cliente → resolvedor recursivo → raiz → TLD → autoritativo → IP ao cliente"
      ],
      "excecoes": [
        "DNSSEC/DoH/DoT acrescentam segurança ao DNS clássico",
        "Transferências de zona usam TCP, não apenas UDP"
      ],
      "palavrasChave": [
        "resolução",
        "zona",
        "autoridade",
        "cache",
        "registro",
        "TTL"
      ],
      "checklist": [
        "Defino o DNS?",
        "Descrevo a hierarquia?",
        "Diferencio recursão de iteração?",
        "Listo registros A, AAAA, MX, NS, TXT?",
        "Exploro o TTL e o cache?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Resolver www.exemplo.com.br: quais servidores são consultados na ordem da hierarquia DNS?",
        "dados": "Nome www.exemplo.com.br; resolvedor recursivo do ISP; servidores-raiz, TLD .br e autoritativo de exemplo.com.br.",
        "conceitos": [
          "Hierarquia DNS",
          "Resolvedor recursivo",
          "Servidor autoritativo"
        ],
        "estrategia": "O cliente consulta o resolvedor recursivo; este percorre raiz → TLD (.br) → autoritativo (exemplo.com.br) e devolve o IP.",
        "execucao": [
          "1. Cliente pergunta ao resolvedor recursivo por www.exemplo.com.br.",
          "2. Resolvedor consulta servidor-raiz, que aponta o TLD .br.",
          "3. Resolvedor consulta o TLD .br, que aponta o autoritativo de exemplo.com.br.",
          "4. Resolvedor consulta o autoritativo e obtém o IP.",
          "5. Resolvedor devolve o IP ao cliente e cacheia pelo TTL."
        ],
        "resultado": "Resolvedor recursivo → servidor raiz → servidor TLD (.br) → servidor autoritativo de exemplo.com.br → resposta com IP; cache conforme TTL.",
        "justificativa": "A resposta segue a delegação hierárquica do DNS: cada nível encaminha para o próximo até o servidor que detém o registro oficial do domínio, que devolve o IP final.",
        "errosFrequentes": [
          "Acreditar que o cliente consulta todos os servidores diretamente; na verdade só consulta o resolvedor recursivo.",
          "Confundir ordem da hierarquia: a raiz vem antes do TLD e do autoritativo."
        ],
        "variacao": "Resolver api.empresa.com.br com subdomínio adicional: o cliente ainda consulta raiz → TLD .br → autoritativo empresa.com.br, que pode delegar api para outro servidor autoritativo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa quer apontar mail.exemplo.com para o servidor de e-mail. Qual registro criar?",
        "dados": "Domínio exemplo.com; nome mail.exemplo.com; IP do servidor de e-mail 203.0.113.10; necessidade de prioridade de entrega.",
        "conceitos": [
          "Registro A",
          "Registro MX",
          "Prioridade MX"
        ],
        "estrategia": "Criar registro A para mail.exemplo.com apontando ao IP do servidor de e-mail e registro MX no domínio exemplo.com apontando para mail.exemplo.com com prioridade definida.",
        "execucao": [
          "1. Criar registro A: mail.exemplo.com → 203.0.113.10 (mapeia nome do servidor de e-mail para IP).",
          "2. Criar registro MX: exemplo.com → mail.exemplo.com com prioridade 10.",
          "3. Servidores de e-mail remotos consultam MX de exemplo.com e recebem mail.exemplo.com.",
          "4. Resolvem mail.exemplo.com via A para 203.0.113.10 e entregam o e-mail."
        ],
        "resultado": "Registro A (ou AAAA) para mail.exemplo.com apontando para o IP do servidor de e-mail, mais registro MX no domínio exemplo.com apontando para mail.exemplo.com com prioridade.",
        "justificativa": "O MX indica qual servidor de e-mail é responsável pelo domínio; o A converte esse nome em IP. Prioridade menor = servidor preferencial; igual padrão permite balanceamento.",
        "errosFrequentes": [
          "Criar apenas MX sem A: o servidor remoto não sabe o IP do alvo.",
          "Colocar endereço IP diretamente no MX; o MX exige nome de host, não IP."
        ],
        "variacao": "Adicionar segundo servidor de e-mail backup: criar MX com prioridade 20 apontando para mail2.exemplo.com, com seu próprio registro A."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'O DNS é um protocolo de transporte da camada de aplicação.'",
        "dados": "DNS usa portas 53 (UDP/TCP); traduz nomes de domínio em endereços IP.",
        "conceitos": [
          "Protocolo de aplicação",
          "Transporte UDP/TCP"
        ],
        "estrategia": "Identificar que o DNS opera na camada de aplicação e depende de UDP/TCP para transporte, não sendo ele próprio um protocolo de transporte.",
        "execucao": [
          "1. O DNS recebe um nome de domínio do cliente.",
          "2. Usa UDP na porta 53 (consulta normal) ou TCP (transferência de zona/resposta grande).",
          "3. Devolve o endereço IP correspondente.",
          "4. Não transporta dados de aplicação entre hosts."
        ],
        "resultado": "Errado. DNS é protocolo de aplicação que usa transporte (UDP/TCP 53). Ele traduz nomes em IPs; não transporta dados de aplicação.",
        "justificativa": "Protocolos de transporte (TCP/UDP) movem dados entre processos; o DNS apenas resolve nomes, usando esses protocolos como meio de transporte.",
        "errosFrequentes": [
          "Confundir camada de aplicação com camada de transporte.",
          "Acreditar que qualquer protocolo que usa porta é de transporte."
        ],
        "variacao": "Afirmação: 'O DNS entrega o conteúdo do site.' — Errado: o DNS só devolve o IP; o conteúdo vem via HTTP/HTTPS após a conexão."
      }
    ]
  },
  "m2-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O DHCP permite ligar um dispositivo e usar a rede sem configuração manual. Em concursos cobram o processo DORA (Discover, Offer, Request, Acknowledge), o que é entregue além do IP (máscara, gateway, DNS, domínio, lease), as portas UDP 67/68 e os riscos de rogue DHCP. Dominar isso resolve questões de configuração de rede e segurança.",
      "preRequisitos": [
        "Endereçamento IPv4",
        "Broadcast"
      ],
      "objetivosObservaveis": [
        "Definir o DHCP",
        "Descrever as quatro mensagens do DORA",
        "Listar o que o DHCP entrega além do IP",
        "Explicar lease, renovação (T1/T2) e o risco de rogue DHCP"
      ],
      "competencias": [
        "Configurar rede automaticamente via DHCP",
        "Analisar risco de serviço de rogue DHCP"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t2-s2 (DNS: resolução de nomes) — ambos servem configuração automática de rede",
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — base do IP atribuído pelo DHCP"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tópico integrante do conteúdo programático de TI: abrange o DORA, os parâmetros entregues e as portas; classificação é estimativa pedagógica qualitativa, sem estatística de incidência publicada."
      }
    },
    "niveis": {
      "iniciante": "O DHCP (Dynamic Host Configuration Protocol) atribui configuração de rede automaticamente a hosts. O cliente, sem IP, faz um broadcast Discovery procurando servidores; o servidor responde com um Offer (oferta de endereço); o cliente envia Request solicitando a oferta; o servidor confirma com Acknowledge. Além do IP, o DHCP entrega máscara de sub-rede, gateway padrão, servidores DNS, domínio de busca e tempo de concessão (lease). Usa UDP: porta 67 no servidor e 68 no cliente. O lease tem prazo de validade; o cliente renova tipicamente na metade do prazo (T1) e, se falhar, aos 87,5% (T2).",
      "intermediario": "O processo DORA tem quatro mensagens: Discover (cliente broadcast sem IP, \"preciso de IP\"), Offer (servidor propõe um endereço, ex.: 192.168.1.50), Request (cliente solicita formalmente a oferta escolhida) e Acknowledge (servidor confirma com máscara, gateway, DNS e lease). Além do IP, entrega máscara, gateway padrão, DNS, domínio e lease. UDP 67 (servidor) e 68 (cliente). O lease expira; o cliente renova em T1 (50% do prazo) e T2 (87,5%). Um servidor DHCP não autorizado (rogue DHCP) pode distribuir configuração maliciosa (ex.: DNS falso); a mitigação usual é o DHCP snooping nos switches.",
      "avancado": "O DHCPv6 existe para IPv6, mas o IPv6 frequentemente usa SLAAC (autoconfiguração sem estado), que dispensa servidor DHCP. Diferença: DHCP centraliza e entrega opções; SLAAC autoconfigura no IPv6 sem servidor. Rogue DHCP distribui gateway/DNS falsos, habilitando ataques man-in-the-middle; DHCP snooping filtra mensagens DHCP não confiáveis nos switches de porta.",
      "especialista": "Comparar DHCP com SLAAC em IPv6: use DHCPv6 quando precisar de controle centralizado e entrega de opções (ex.: DNS, domínio); use SLAAC quando apenas autoconfiguração de endereço for suficiente. Em redes IPv4, DHCP é quase obrigatório para escala. Rogue DHCP é mitigado com DHCP snooping + IP source guard. O Discover é broadcast (destinado a todos); o Request, após Offer, já é direcionado ao servidor escolhido. Reservas DHCP vinculam MAC a IP fixo: o cliente continua usando DHCP, mas sempre recebe o mesmo IP, útil para impressoras e servidores locais."
    },
    "comparacoes": [
      {
        "tema": "DHCP vs. configuração manual de IP",
        "a": {
          "rotulo": "DHCP (automático)",
          "texto": "Atribui IP e parâmetros automaticamente; escala bem e evita conflitos de endereço."
        },
        "b": {
          "rotulo": "Configuração manual",
          "texto": "Administrador define IP, máscara e gateway em cada dispositivo; controle total, mas suscetível a erro humano."
        },
        "diferencaGabarito": "DHCP escala e evita conflitos; manual dá controle, mas é trabalhoso e propenso a erro."
      },
      {
        "tema": "Discover vs. Request no DORA",
        "a": {
          "rotulo": "Discover",
          "texto": "Broadcast do cliente sem IP, procurando qualquer servidor DHCP disponível."
        },
        "b": {
          "rotulo": "Request",
          "texto": "Cliente solicita formalmente a oferta escolhida, já direcionado ao servidor."
        },
        "diferencaGabarito": "Discover é para todos (broadcast); Request já é direcionado ao servidor escolhido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O DHCP entrega apenas o endereço IP.",
        "porqueErrada": "Esquece que DHCP também entrega máscara, gateway, DNS, domínio e lease.",
        "versaoCorreta": "O DHCP entrega IP, máscara, gateway, DNS, domínio e lease, entre outros parâmetros (opções DHCP)."
      },
      {
        "afirmacaoEquivocada": "Todo IPv6 exige DHCPv6.",
        "porqueErrada": "Ignora que o IPv6 pode autoconfigurar-se via SLAAC, sem servidor DHCP.",
        "versaoCorreta": "O IPv6 pode usar SLAAC (autoconfiguração sem estado) e dispensar o DHCPv6."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DHCP",
        "DORA (Discover, Offer, Request, Acknowledge)",
        "Lease e renovação (T1/T2)",
        "Gateway padrão",
        "Rogue DHCP",
        "DHCP snooping"
      ],
      "regras": [
        "Discover → Offer → Request → Acknowledge",
        "UDP porta 67 (servidor) e 68 (cliente)",
        "Renovação do lease em T1 (50%) e T2 (87,5%)"
      ],
      "comparacoes": [
        "DHCP escala e evita conflitos; configuração manual dá controle mas erra mais",
        "DHCP centraliza e entrega opções; SLAAC autoconfigura IPv6 sem servidor"
      ],
      "fluxos": [
        "Cliente sem IP → Discover (broadcast) → Offer → Request → Acknowledge com configuração completa"
      ],
      "excecoes": [
        "IPv6 pode usar SLAAC em vez de DHCPv6",
        "Reserva DHCP vincula MAC a IP fixo, mantendo o protocolo DHCP"
      ],
      "palavrasChave": [
        "configuração automática",
        "concessão",
        "renovação",
        "broadcast",
        "segurança"
      ],
      "checklist": [
        "Defino o DHCP?",
        "Descrevo o DORA?",
        "Listo o que entrega além do IP?",
        "Exploro lease e renovação?",
        "Identifico o risco de rogue DHCP?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um notebook conecta ao Wi-Fi e recebe IP automaticamente. Descrever as quatro mensagens do DORA.",
        "dados": "Notebook sem IP; rede Wi-Fi com servidor DHCP; endereço oferecido 192.168.1.50; broadcast UDP porta 67.",
        "conceitos": [
          "DORA",
          "Broadcast",
          "Endereçamento automático"
        ],
        "estrategia": "O cliente sem IP faz Discover em broadcast; o servidor oferta um IP; o cliente aceita com Request; o servidor confirma com Acknowledge, incluindo máscara, gateway e DNS.",
        "execucao": [
          "1. Notebook envia Discover em broadcast UDP porta 67: \"preciso de IP\".",
          "2. Servidor DHCP responde Offer propondo 192.168.1.50.",
          "3. Notebook envia Request aceitando a oferta.",
          "4. Servidor envia Acknowledge confirmando a concessão com máscara, gateway, DNS e lease.",
          "5. Notebook configura a rede e começa a navegar."
        ],
        "resultado": "Discover (broadcast UDP 67): \"preciso de IP\". Offer: servidor propõe 192.168.1.50. Request: cliente aceita. ACK: servidor confirma com máscara, gateway, DNS e lease.",
        "justificativa": "O DORA é a sequência obrigatória de quatro mensagens que leva o cliente de sem IP a configurado, cada etapa com papel distinto na negociação de endereço.",
        "errosFrequentes": [
          "Acreditar que o cliente já conhece o servidor DHCP antes do Discover; na verdade é broadcast para descobrir.",
          "Pular o Request e assumir que o Offer já configura a rede."
        ],
        "variacao": "Dois servidores DHCP respondem ao Discover: o cliente aceita a oferta que chegar primeiro (ou a de melhor prioridade) e ignora a outra."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um IP fixo (reserva DHCP) é necessário para uma impressora de rede. Como configurar?",
        "dados": "Impressora de rede; endereço MAC AA:BB:CC:DD:EE:FF; IP fixo desejado 192.168.1.100; servidor DHCP da rede.",
        "conceitos": [
          "Reserva DHCP",
          "Endereço MAC",
          "IP fixo"
        ],
        "estrategia": "Reservar um endereço fixo no servidor DHCP para a impressora, associando o endereço MAC ao IP; o equipamento segue utilizando DHCP e recebe sempre o mesmo IP.",
        "execucao": [
          "1. Anotar o MAC da impressora: AA:BB:CC:DD:EE:FF.",
          "2. No servidor DHCP, criar reserva vinculando esse MAC ao IP 192.168.1.100.",
          "3. A impressora faz Discover normalmente; o servidor reconhece o MAC.",
          "4. O servidor responde Offer e Acknowledge sempre com 192.168.1.100 para esse MAC.",
          "5. A impressora mantém IP fixo sem configuração manual em cada reinicialização."
        ],
        "resultado": "Criar reserva no servidor DHCP vinculando o MAC da impressora a um IP fixo. A impressora continua usando DHCP, mas sempre recebe o mesmo IP.",
        "justificativa": "A reserva DHCP associa identidade de hardware (MAC) a um endereço, garantindo previsibilidade de IP sem abandonar o gerenciamento centralizado do DHCP.",
        "errosFrequentes": [
          "Configurar IP estático na impressora e fora do DHCP: risco de conflito se outro dispositivo receber o mesmo IP.",
          "Esquecer de informar o MAC; a reserva não funciona sem identificar o hardware."
        ],
        "variacao": "Várias impressoras: criar uma reserva por aparelho, cada uma com seu MAC e IP fixo distinto, todas gerenciadas pelo mesmo servidor DHCP."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'O processo DORA do DHCP se resume a três mensagens: Discover, Offer e Request.'",
        "dados": "DORA = Discover, Offer, Request, Acknowledge; quatro mensagens no total.",
        "conceitos": [
          "DORA",
          "Quatro mensagens DHCP"
        ],
        "estrategia": "Identificar que o acrônimo DORA tem exatamente quatro letras e quatro mensagens; omitir qualquer uma invalida o processo.",
        "execucao": [
          "1. Discover: cliente procura servidor.",
          "2. Offer: servidor oferta endereço.",
          "3. Request: cliente solicita a oferta.",
          "4. Acknowledge: servidor confirma a concessão.",
          "5. Concluir que são quatro, não três."
        ],
        "resultado": "Errado. O processo DORA do DHCP compreende quatro mensagens, e não três: o cliente inicia com Discover, o servidor responde com Offer, o cliente formaliza a escolha em Request e o servidor confirma a concessão com Acknowledge.",
        "justificativa": "Cada letra do acrônimo corresponde a uma mensagem obrigatória; remover uma etapa deixa o cliente sem configuração válida.",
        "errosFrequentes": [
          "Confundir DORA com outros acrônimos de três itens.",
          "Acreditar que o Acknowledge é opcional; ele é obrigatório para confirmar."
        ],
        "variacao": "Afirmação: 'O DHCP usa TCP.' — Errado: o DHCP usa UDP, portas 67 (servidor) e 68 (cliente)."
      }
    ]
  },
  "m2-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Transferir arquivos sem cifra expõe credenciais e dados a captura na rede (sniffing). Concursos cobram a diferença entre FTP, FTPS e SFTP: escolher o protocolo seguro e interpretar firewall/NAT. Confundi-los leva erro de configuração e segurança.",
      "preRequisitos": [
        "TCP e suas portas (controle e dados)",
        "TLS/SSL (cifra de transporte)",
        "SSH (acesso remoto seguro)"
      ],
      "objetivosObservaveis": [
        "Descrever o FTP e suas duas conexões TCP (controle 21, dados 20/efêmera)",
        "Explicar o modo ativo e o modo passivo do FTP e seu comportamento com NAT/firewall",
        "Diferenciar FTPS (FTP + TLS) de SFTP (SSH File Transfer Protocol) quanto a protocolo base e porta",
        "Recomendar a opção mais segura para transferência de arquivos"
      ],
      "competencias": [
        "Escolha de protocolo de transferência seguro",
        "Leitura de configuração de serviços de rede"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t3-s2 (SSH e ICMP) — base do SFTP, que roda sobre SSH",
        "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — base do FTPS, que adiciona TLS ao FTP"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica: FTP/FTPS/SFTP aparece em editais de TI como item de diferença conceitual e escolha segura, sem frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "FTP (File Transfer Protocol) transfere arquivos usando DUAS conexões TCP: controle na porta 21 e dados na porta 20 (modo ativo) ou porta efêmera (passivo). No modo ativo, o servidor conecta de volta ao cliente e falha atrás de NAT/firewall; no passivo, o cliente inicia a conexão de dados (preferível hoje). O FTP não cifra credenciais nem dados: viajam em texto claro, passíveis de sniffing.",
      "intermediario": "FTPS (FTP over SSL/TLS) acrescenta TLS ao FTP, mantendo porta 21 para controle e cifrando o canal de dados; autentica o servidor e protege o conteúdo. SFTP (SSH File Transfer Protocol) é um protocolo DIFERENTE que roda sobre SSH na porta 22, cifra toda a sessão e permite autenticação por chave ou senha. São implementações distintas.",
      "avancado": "O SFTP é o mais recomendado por usar um único canal cifrado (SSH, porta 22) e simplificar a passagem por firewalls. O FTPS persiste por compatibilidade com clientes/servidores legados, mas exige gerenciar canais de controle e dados cifrados, complicando regras de firewall. Em concursos, priorize SFTP quando o enunciado pedir \"protocolo seguro sobre SSH\".",
      "especialista": "O especialista avalia implantação: FTPS requer certificados TLS e abertura de portas de dados (desafiador com NAT); SFTP depende de servidor SSH e chaves de host, mas usa uma única porta (22) e cifra tudo. Auditar qual protocolo está em uso (21/20 vs. 22) e se credenciais viajam em texto claro é essencial para evitar vazamento."
    },
    "comparacoes": [
      {
        "tema": "FTPS vs. SFTP (o que os diferencia em prova)",
        "a": {
          "rotulo": "FTPS",
          "texto": "FTP encapsulado em TLS/SSL. Mantém porta 21 para controle e cifra o canal de dados. Requer gerenciar duas conexões (controle e dados) e certificados TLS."
        },
        "b": {
          "rotulo": "SFTP",
          "texto": "Protocolo próprio sobre SSH (porta 22). Cifra toda a sessão em um único canal, autentica servidor (host key) e cliente (senha ou chave pública). Não é \"FTP sobre SSH\", mas sim um protocolo distinto."
        },
        "diferencaGabarito": "Em prova, \"FTPS e SFTP são a mesma coisa\" é FALSO. FTPS = FTP + TLS (portas 21/20); SFTP = SSH + transferência (porta 22). São implementações distintas, com modelos de segurança e portas diferentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "FTPS e SFTP são o mesmo protocolo, apenas com nomes diferentes.",
        "porqueErrada": "Confunde duas tecnologias separadas. FTPS é FTP sobre TLS; SFTP roda sobre SSH (porta 22).",
        "versaoCorreta": "Errado. FTPS é FTP encapsulado em TLS (controle 21, dados cifrados). SFTP é subsistema do SSH (porta 22) com protocolo próprio."
      },
      {
        "afirmacaoEquivocada": "O modo ativo do FTP funciona em qualquer rede, inclusive atrás de NAT e firewall.",
        "porqueErrada": "No modo ativo, o servidor inicia a conexão de dados de volta para o cliente. Redes com NAT/firewall bloqueiam conexões entrantes, fazendo o modo ativo falhar.",
        "versaoCorreta": "Modo ativo: servidor conecta de volta ao cliente (problema com NAT/firewall). Modo passivo: cliente inicia a conexão de dados ao servidor."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "FTP: protocolo de aplicação para transferência de arquivos, duas conexões TCP (controle 21, dados 20/efêmera)",
        "Modo ativo vs. passivo: quem inicia a conexão de dados (servidor vs. cliente) e impacto em NAT/firewall",
        "FTPS: FTP com TLS/SSL (porta 21 controle, canal de dados cifrado)",
        "SFTP: protocolo sobre SSH (porta 22), cifra toda a sessão, autentica por chave ou senha"
      ],
      "regras": [
        "FTP não cifra: credenciais e dados viajam em texto claro (inseguro em redes não confiáveis)",
        "Modo passivo é preferível atrás de NAT/firewall (cliente inicia conexão de dados)",
        "FTPS != SFTP: são protocolos distintos (FTP+TLS vs. SSH+transferência)",
        "Opção mais segura hoje: SFTP, por ser um único canal cifrado sobre porta 22"
      ],
      "comparacoes": [
        "FTPS (FTP+TLS, portas 21/20, duas conexões) vs. SFTP (SSH, porta 22, único canal cifrado)",
        "FTP clássico (texto claro, inseguro) vs. FTPS/SFTP (cifrados, seguros)"
      ],
      "fluxos": [
        "Escolher protocolo: requisito de segurança? → sim → usar SFTP (SSH, porta 22) ou FTPS (TLS); não → evitar FTP clássico",
        "FTP transferir arquivo: abrir controle (21) → autenticar → abrir dados (20 ativo/efêmera passivo) → transferir → fechar"
      ],
      "excecoes": [
        "FTPS exige gerenciar duas conexões cifradas, o que complica regras de firewall e NAT",
        "SFTP depende de servidor SSH e host key; sem servidor SSH não há SFTP"
      ],
      "palavrasChave": [
        "FTP",
        "FTPS",
        "SFTP",
        "SSH",
        "TLS",
        "porta 21",
        "porta 22",
        "modo ativo",
        "modo passivo",
        "cifra",
        "NAT",
        "firewall",
        "sniffing"
      ],
      "checklist": [
        "Saber que FTP usa duas conexões TCP (controle 21, dados 20/efêmera)",
        "Diferenciar modo ativo (servidor conecta de volta) e passivo (cliente inicia dados)",
        "Diferenciar FTPS (FTP+TLS) de SFTP (SSH, porta 22)",
        "Reconhecer que FTP clássico não cifra credenciais nem dados",
        "Escolher SFTP como opção mais segura para transferência de arquivos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o FTP clássico é considerado inseguro para transferir arquivos em redes não confiáveis, sem qualquer cifra?",
        "dados": "FTP usa porta 21 (controle) e porta 20 (dados, modo ativo); usuário e senha viajam em texto claro.",
        "conceitos": [
          "FTP",
          "texto claro",
          "sniffing",
          "porta 21"
        ],
        "estrategia": "O FTP não cifra nem o canal de controle nem o de dados, então credenciais e arquivos ficam expostos a captura por qualquer host na mesma rede.",
        "execucao": [
          "1. O cliente abre conexão TCP de controle na porta 21.",
          "2. Envia usuário e senha em texto claro pelo canal de controle.",
          "3. Um atacante captura o tráfego e lê as credenciais.",
          "4. Os arquivos viajam sem cifra pelo canal de dados."
        ],
        "resultado": "O FTP é inseguro porque credenciais e dados viajam em texto claro, podendo ser capturados por sniffing em redes não confiáveis.",
        "justificativa": "O gabarito procede porque a ausência de cifra no FTP é a causa direta da exposição: sem criptografia, qualquer pacote interceptado revela usuário, senha e conteúdo.",
        "errosFrequentes": [
          "Achar que o FTP cifra pelo menos a senha (não cifra nada).",
          "Achar que apenas o canal de dados é inseguro (ambos os canais viajam em texto claro)."
        ],
        "variacao": "Usuário transfere relatório pelo FTP em Wi-Fi pública: credenciais e o documento podem ser capturados na mesma rede."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador precisa transferir arquivos de um cliente para um servidor atrás de um firewall que bloqueia conexões entrantes. Qual modo do FTP usar e por quê?",
        "dados": "Firewall bloqueia conexões entrantes ao cliente; servidor FTP na porta 21; cliente tenta modo ativo e a conexão de dados falha.",
        "conceitos": [
          "modo ativo",
          "modo passivo",
          "NAT",
          "firewall",
          "porta 20"
        ],
        "estrategia": "No modo ativo o servidor inicia a conexão de dados de volta ao cliente (bloqueada pelo firewall); no modo passivo o cliente inicia a conexão ao servidor, que costuma passar.",
        "execucao": [
          "1. Tentar modo ativo: servidor abre conexão de dados de volta para o cliente → falha (firewall bloqueia entrada).",
          "2. Mudar para modo passivo: cliente inicia a conexão de dados ao servidor.",
          "3. O servidor informa porta efêmera para o canal de dados.",
          "4. O cliente se conecta nessa porta e transfere o arquivo."
        ],
        "resultado": "Usar o modo passivo, porque o cliente inicia a conexão de dados ao servidor, contornando o firewall que bloqueia conexões entrantes.",
        "justificativa": "O gabarito procede porque o modo passivo inverte quem inicia a conexão de dados (cliente → servidor), evitando o bloqueio de conexões entrantes do firewall/NAT.",
        "errosFrequentes": [
          "Manter o modo ativo mesmo com firewall bloqueando conexões entrantes.",
          "Achar que abrir só a porta 21 basta para qualquer modo do FTP."
        ],
        "variacao": "Cliente atrás de NAT rígido e servidor exige modo ativo: use SFTP na porta 22 ou FTPS com porta de controle fixa e portas de dados liberadas no firewall."
      },
      {
        "tipo": "erro",
        "problema": "Uma questão de concurso afirma que \"FTPS e SFTP são o mesmo protocolo com nomes diferentes\".",
        "dados": "Questão C/E iguala FTPS e SFTP; portas: FTPS usa 21 (controle) e dados cifrados; SFTP usa 22 (SSH).",
        "conceitos": [
          "FTPS",
          "SFTP",
          "TLS",
          "SSH",
          "porta 21",
          "porta 22"
        ],
        "estrategia": "Rejeitar a igualdade: FTPS é FTP sobre TLS (duas conexões, portas 21/20/efêmera); SFTP é protocolo próprio sobre SSH (única porta 22, cifra completa).",
        "execucao": [
          "1. FTPS é FTP encapsulado em TLS (controle 21, dados cifrados).",
          "2. SFTP é subsistema do SSH (porta 22, protocolo próprio).",
          "3. Comparar: protocolos base diferentes (FTP vs. SSH), portas diferentes (21/20 vs. 22), modelo diferente (duas vs. uma).",
          "4. Concluir que a afirmação é falsa."
        ],
        "resultado": "A afirmação é falsa: FTPS e SFTP são implementações distintas; FTPS = FTP + TLS, SFTP = SSH + transferência.",
        "justificativa": "O gabarito procede porque FTPS e SFTP diferem em protocolo base, porta padrão e arquitetura; equalizá-los é o erro clássico explorado pela prova.",
        "errosFrequentes": [
          "Achar que \"SFTP\" significa apenas \"FTP seguro\" genérico (é protocolo sobre SSH).",
          "Usar a porta 21 para SFTP ou a porta 22 para FTPS."
        ],
        "variacao": "Enunciado diz \"o SFTP roda sobre TLS na porta 443\": avaliar (não, SFTP roda sobre SSH na porta 22)."
      }
    ]
  },
  "m2-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "SSH substituiu o Telnet inseguro para acesso remoto e o ICMP sustenta diagnóstico como ping e traceroute. Concursos cobram as funções, portas e camadas de cada protocolo, e a diferença entre acesso remoto seguro e mensagens de controle de rede.",
      "preRequisitos": [
        "TCP e camada de transporte",
        "Camada de rede e endereçamento IP",
        "Noção de diagnóstico de rede"
      ],
      "objetivosObservaveis": [
        "Explicar o SSH como protocolo de aplicação para acesso remoto seguro",
        "Citar recursos do SSH (túneis, chaves, autenticação)",
        "Descrever o ICMP e suas mensagens de controle e erro",
        "Associar o ICMP ao ping e ao traceroute"
      ],
      "competencias": [
        "Acesso remoto seguro",
        "Interpretação de mensagens de controle de rede"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t3-s1 (FTP, FTPS e SFTP) — o SFTP roda sobre SSH, desta mesma unidade",
        "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — segurança de transporte, relacionada ao ciframento de sessões"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica: SSH e ICMP aparecem em editais de TI como itens de função, porta e uso de diagnóstico, sem frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "SSH (Secure Shell) é protocolo de aplicação para acesso remoto seguro, execução de comandos e criação de túneis; usa TCP na porta 22. Autentica o servidor por chave de host e o cliente por senha ou chave pública, e cifra toda a sessão. Substituiu o Telnet (porta 23), que transmitia tudo em texto claro, inclusive a senha. Oferece encaminhamento de portas (túneis) e é a base do SFTP e do SCP.",
      "intermediario": "ICMP (Internet Control Message Protocol) é protocolo da camada de rede, auxiliar do IP, usado para mensagens de controle e erro: echo request/reply (base do ping), destination unreachable, time exceeded (base do traceroute). O ICMP não transporta dados de aplicação e não possui portas. Pode ser bloqueado por firewalls, fazendo o ping falhar mesmo com TCP/UDP operantes. No IPv6, o ICMPv6 integra o Neighbor Discovery (NDP).",
      "avancado": "Distinguir SSH (aplicação, porta 22) de ICMP (rede, sem portas) é essencial em prova. O SSH cifra toda a sessão e permite port forwarding; o ICMP apenas reporta erro e controle. Ping bem-sucedido prova alcance ICMP, não que todos os serviços estejam ativos; ping falho pode ser firewall, não falta de rota.",
      "especialista": "No nível especialista, avaliar túneis SSH como mecanismo de encaminhamento de portas e possível desvio de controle de acesso, e entender que o ICMPv6 no IPv6 substitui o ARP pelo NDP, obrigatório para funcionamento do enlace. Firewalls que filtram ICMP dificultam diagnóstico, mas não eliminam a conectividade TCP/UDP."
    },
    "comparacoes": [
      {
        "tema": "SSH vs. ICMP (o que os diferencia em prova)",
        "a": {
          "rotulo": "SSH",
          "texto": "Protocolo de aplicação, TCP porta 22, acesso remoto seguro, execução de comandos, túneis, cifra toda a sessão, autentica servidor e cliente."
        },
        "b": {
          "rotulo": "ICMP",
          "texto": "Protocolo da camada de rede, auxiliar do IP, sem portas, mensagens de controle e erro (ping, traceroute), não transporta dados de aplicação."
        },
        "diferencaGabarito": "Afirmar que SSH e ICMP são ambos de transporte é FALSO. SSH é aplicação (porta 22); ICMP é rede (sem portas). Servem a propósitos diferentes: acesso remoto seguro versus diagnóstico de rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "ICMP é um protocolo de transporte como TCP e UDP.",
        "porqueErrada": "O ICMP pertence à camada de rede, é auxiliar do IP, não tem portas e não entrega dados de aplicação. TCP e UDP são transporte.",
        "versaoCorreta": "Errado. ICMP é protocolo de controle da camada de rede (IP), sem portas e sem entrega de dados de aplicação."
      },
      {
        "afirmacaoEquivocada": "Se o ping ao servidor responde, então todos os serviços dele (SSH, HTTP) estão funcionando.",
        "porqueErrada": "O ping usa ICMP echo request/reply, independente de TCP/UDP.",
        "versaoCorreta": "Ping bem-sucedido apenas confirma alcance ICMP do host; não garante que serviços específicos estejam ativos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "SSH: protocolo de aplicação, TCP porta 22, acesso remoto seguro, cifra toda a sessão",
        "Telnet: protocolo inseguro (texto claro, porta 23) substituído pelo SSH",
        "ICMP: protocolo da camada de rede, auxiliar do IP, sem portas",
        "Mensagens ICMP: echo request/reply (ping), destination unreachable, time exceeded (traceroute), redirect"
      ],
      "regras": [
        "SSH cifra toda a sessão e autentica servidor (host key) e cliente (senha ou chave pública)",
        "ICMP não transporta dados de aplicação e não possui números de porta",
        "Ping bem-sucedido prova alcance ICMP, não que serviços TCP/UDP estejam ativos",
        "Firewall pode bloquear ICMP e fazer o ping falhar mesmo com rede operante"
      ],
      "comparacoes": [
        "SSH (aplicação, porta 22, cifrado) vs. Telnet (aplicação, porta 23, texto claro)",
        "SSH (aplicação, acesso remoto) vs. ICMP (rede, controle e erro, sem portas)"
      ],
      "fluxos": [
        "Acesso remoto seguro: cliente inicia TCP 22 → handshake SSH → autentica servidor e cliente → sessão cifrada → execução de comandos ou transferência via SFTP/SCP",
        "Diagnóstico com ICMP: enviar echo request → aguardar echo reply → medir RTT; ausência de resposta pode indicar host desligado, firewall ou perda, não apenas falta de rota"
      ],
      "excecoes": [
        "ICMP pode ser bloqueado por firewall, então ping falho não prova ausência de conectividade TCP/UDP",
        "No IPv6, o ICMPv6 integra o Neighbor Discovery (NDP), substituindo o ARP"
      ],
      "palavrasChave": [
        "SSH",
        "ICMP",
        "Telnet",
        "porta 22",
        "porta 23",
        "TCP",
        "camada de rede",
        "ping",
        "traceroute",
        "cifra",
        "host key",
        "firewall",
        "NDP"
      ],
      "checklist": [
        "Saber que SSH usa TCP porta 22 e cifra toda a sessão",
        "Diferenciar SSH (seguro) de Telnet (texto claro, porta 23)",
        "Saber que ICMP é da camada de rede e não tem portas",
        "Associar ICMP a ping (echo request/reply) e traceroute (time exceeded)",
        "Reconhecer que ping bem-sucedido não garante serviços ativos no host"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o SSH substituiu o Telnet como padrão para acesso remoto seguro a servidores?",
        "dados": "Telnet usa TCP porta 23 e envia tudo em texto claro, inclusive a senha; SSH usa TCP porta 22 e cifra toda a sessão.",
        "conceitos": [
          "SSH",
          "Telnet",
          "texto claro",
          "cifra",
          "porta 22"
        ],
        "estrategia": "O Telnet expõe credenciais e comandos à captura na rede, enquanto o SSH cifra a sessão e autentica servidor e cliente, prevenindo interceptação.",
        "execucao": [
          "1. No Telnet, usuário digita senha em texto claro pela porta 23.",
          "2. Um atacante captura o tráfego e lê a senha.",
          "3. No SSH, a sessão é cifrada e o servidor é autenticado por host key.",
          "4. Credenciais e comandos ficam protegidos contra sniffing."
        ],
        "resultado": "O SSH substituiu o Telnet porque cifra a sessão e autentica o servidor, evitando captura de credenciais em texto claro.",
        "justificativa": "O gabarito procede porque a vantagem decisiva do SSH sobre o Telnet é a criptografia da sessão, que impede o sniffing de senhas e dados.",
        "errosFrequentes": [
          "Achar que o Telnet cifra a senha (não cifra nada).",
          "Achar que SSH e Telnet usam a mesma porta (22 vs. 23)."
        ],
        "variacao": "Administrador acessa servidor por Telnet em rede corporativa: risque exposição da senha e use SSH na porta 22."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador precisa acessar um servidor remoto de forma segura e transferir arquivos. Qual solução usar?",
        "dados": "Servidor remoto acessível pela rede; necessidade de execução de comandos e transferência de arquivos; segurança exigida.",
        "conceitos": [
          "SSH",
          "porta 22",
          "SFTP",
          "SCP",
          "chave pública"
        ],
        "estrategia": "Usar SSH para acesso remoto na porta 22 e SFTP/SCP para transferência de arquivos, tudo cifrado, com autenticação por chave pública recomendada.",
        "execucao": [
          "1. Conectar via SSH na porta 22, autenticando com chave pública.",
          "2. Executar comandos remotos pela sessão SSH cifrada.",
          "3. Transferir arquivos usando SFTP ou SCP sobre o mesmo canal SSH.",
          "4. Verificar a chave de host do servidor na primeira conexão para prevenir MITM."
        ],
        "resultado": "SSH para acesso remoto (porta 22) e SFTP/SCP para transferência — tudo cifrado, autenticação por chave pública recomendada.",
        "justificativa": "O gabarito procede porque SSH/SFTP/SCP cifram toda a comunicação, protegendo credenciais e dados contra interceptação na rede.",
        "errosFrequentes": [
          "Usar FTP ou Telnet em vez de SSH/SFTP, expondo credenciais em texto claro.",
          "Aceitar qualquer chave de host sem verificar, sujeitando-se a ataque MITM."
        ],
        "variacao": "Cliente com porta 22 bloqueada pelo firewall local: use túnel SSH ou VPN para alcançar o servidor remoto com segurança."
      },
      {
        "tipo": "erro",
        "problema": "Uma questão de concurso C/E afirma que ICMP é um protocolo de transporte como TCP e UDP.",
        "dados": "Questão C/E iguala ICMP a TCP/UDP; ICMP é da camada de rede, sem portas; TCP e UDP são transporte com portas.",
        "conceitos": [
          "ICMP",
          "TCP",
          "UDP",
          "camada de rede",
          "camada de transporte",
          "portas"
        ],
        "estrategia": "Rejeitar a igualdade: ICMP é protocolo de controle da camada de rede, sem portas e sem dados de aplicação; TCP/UDP são transporte, com portas.",
        "execucao": [
          "1. ICMP opera na camada de rede, ao lado do IP.",
          "2. ICMP não possui números de porta nem entrega dados de aplicação.",
          "3. TCP e UDP são transporte, usam portas e entregam dados a processos.",
          "4. Concluir que a afirmação é falsa."
        ],
        "resultado": "A afirmação é falsa: ICMP pertence à camada de rede, não ao transporte; não tem portas nem dados de aplicação.",
        "justificativa": "O gabarito procede porque ICMP e TCP/UDP pertencem a camadas diferentes e têm funções distintas; igualá-los é erro conceitual cobrado em prova.",
        "errosFrequentes": [
          "Achar que ICMP usa portas como TCP/UDP (não tem portas).",
          "Achar que o ping depende de TCP ou UDP (usa ICMP)."
        ],
        "variacao": "Enunciado diz que o traceroute usa TCP para mapear a rota: avaliar (no Linux o traceroute padrão usa UDP; no Windows o tracert usa ICMP)."
      }
    ]
  },
  "m2-u3-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Sem resolver IP em MAC não há entrega de quadros no enlace: o ARP liga a camada de rede à camada de enlace. Em prova, comparece em itens sobre broadcast, spoofing, intermediário (MITM), mitigação e na oposição IPv4 e IPv6.",
      "preRequisitos": [
        "Endereçamento IPv4 e máscara de sub-rede",
        "Domínio de broadcast e endereço MAC",
        "Unicast, broadcast e multicast"
      ],
      "objetivosObservaveis": [
        "explicará a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing)",
        "Descrever ARP request em broadcast e reply em unicast, com o cache",
        "Reconhecer spoofing de ARP em ataque de intermediário e citar mitigações"
      ],
      "competencias": [
        "Análise de protocolo de enlace e resolução de endereços",
        "Análise de risco em mecanismo sem autenticação",
        "Leitura de cache ARP e tabela de vizinhos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t3-s2 (SSH e ICMP) — protocolos de apoio do mesmo bloco",
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — define IP e MAC da resolução",
        "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — inspeção do cache e dos vizinhos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica: ARP e NDP aparecem em itens sobre resolução de endereço e em segurança de rede, sobretudo na oposição IPv4 e IPv6."
      }
    },
    "niveis": {
      "iniciante": "O ARP resolve um endereço IP em um endereço MAC dentro da mesma sub-rede: o host pergunta em broadcast 'quem tem o IP X?' e recebe o MAC em reply unicast, guardando o par no cache. É stateless e não autenticado.",
      "intermediario": "A consulta alcança todo o domínio de broadcast e a resposta é unicast; o cache evita repetições. Como nada é validado, qualquer host pode injectar um par IP-MAC falso, caracterizando spoofing e viabilizando ataque de intermediário. A defesa fica no switch, com Dynamic ARP Inspection.",
      "avancado": "No IPv6 o ARP não existe: o NDP roda sobre ICMPv6, com Neighbor Solicitation em multicast e Neighbor Advertisement, e também descobre roteadores e sustenta o SLAAC. Sem autenticação por padrão, também sofre spoofing; a extensão SEND é rara em redes comuns.",
      "especialista": "A diferença é de arquitetura: ARP é protocolo independente do IPv4 e depende de broadcast; NDP é função do ICMPv6 em multicast, integrada ao IPv6. Decidir onde aplicar inspeção ARP e quando fixar entradas estáticas é tarefa de projeto."
    },
    "comparacoes": [
      {
        "tema": "Resolução de endereço no enlace: ARP x NDP",
        "a": {
          "rotulo": "ARP no IPv4",
          "texto": "Protocolo independente, consultado por broadcast e respondido em unicast; resolve IP em MAC."
        },
        "b": {
          "rotulo": "NDP no IPv6",
          "texto": "Função do ICMPv6 com NS/NA em multicast solicitado, sem broadcast; descobre roteadores e apoia SLAAC."
        },
        "diferencaGabarito": "Não é troca de nome: o IPv6 abandona o broadcast e integra a resolução ao ICMPv6, somando roteador e SLAAC, mas segue exposto a resposta falsa."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'ARP funciona entre redes diferentes.'",
        "porqueErrada": "O ARP depende de quadro local: a consulta em broadcast não ultrapassa o roteador, então não se pergunta pelo MAC de outra sub-rede.",
        "versaoCorreta": "Errado. ARP resolve apenas na mesma rede (broadcast domain). Para alcançar outra rede, o host envia ao gateway padrão (cujo MAC é obtido por ARP)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O ARP é autenticado, então respostas falsas são descartadas.'",
        "porqueErrada": "O protocolo não traz autenticação nem verificação de origem: um reply não solicitado pode entrar no cache do host.",
        "versaoCorreta": "A falta de autenticação é a própria vulnerabilidade: existem spoofing e poisoning, e a defesa depende de controles externos no switch."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ARP: resolução de IP para MAC na mesma sub-rede",
        "ARP request em broadcast e reply em unicast",
        "Cache ARP com validade limitada",
        "ARP spoofing e ataque de intermediário"
      ],
      "regras": [
        "O ARP resolve apenas na mesma sub-rede; para outra rede, o MAC alvo é o do gateway",
        "IPv4 usa ARP e IPv6 usa NDP por ICMPv6, sem broadcast",
        "O ARP não autentica respostas: qualquer host pode injectar par IP-MAC falso"
      ],
      "comparacoes": [
        "ARP x NDP: protocolo independente com broadcast (IPv4) contra função do ICMPv6 em multicast (IPv6)"
      ],
      "fluxos": [
        "Precisa do MAC? → consulta o cache → request em broadcast → reply unicast → grava o par → encapsula e envia"
      ],
      "excecoes": [
        "Entre sub-redes distintas, a consulta recai sobre o gateway e o IP destino permanece no pacote"
      ],
      "palavrasChave": [
        "resolução de endereço",
        "broadcast",
        "multicast",
        "spoofing"
      ],
      "checklist": [
        "Explico o que o ARP resolve e quando",
        "Descrevo request, reply e cache",
        "Reconheço spoofing e seu impacto",
        "Cito mitigações e o substituto no IPv6"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um PC da rede 192.168.1.0/24 precisa enviar um pacote a 192.168.1.5 na mesma LAN, mas desconhece o MAC do destino. Como ele o obtém?",
        "dados": "Origem 192.168.1.10/24 e destino 192.168.1.5/24 na sub-rede 192.168.1.0/24; switch sem VLANs; cache ARP vazio no início.",
        "conceitos": [
          "ARP request em broadcast",
          "ARP reply em unicast e cache"
        ],
        "estrategia": "Confirmar pela máscara /24 que ambos estão na mesma sub-rede e descrever a troca request/reply.",
        "execucao": [
          "Comparar 192.168.1.10 e 192.168.1.5 com 255.255.255.0: mesma rede",
          "Emitir ARP request em broadcast perguntando quem tem 192.168.1.5",
          "Receber o reply unicast com o MAC e gravar o par no cache"
        ],
        "resultado": "Envia ARP request broadcast: 'quem tem 192.168.1.5?'. O host com esse IP responde com seu MAC. O PC cacheia o par IP-MAC.",
        "justificativa": "O destino está no mesmo enlace, logo a entrega exige o MAC dele próprio; o ARP descobre esse MAC e o cache evita repetir a consulta.",
        "errosFrequentes": [
          "Confundir ARP com DNS: o DNS traduz nome em IP, o ARP traduz IP em MAC",
          "Ignorar a consulta broadcast e supor quadro direto ao destino final"
        ],
        "variacao": "Repita o cenário com o destino em 192.168.2.5/24 e explique qual MAC passa a ser consultado."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um atacante envia ARP reply falsos associando o IP do gateway ao seu MAC. Qual ataque e qual impacto?",
        "dados": "Rede 192.168.1.0/24, gateway 192.168.1.1; atacante 192.168.1.77 enviando replies não solicitados; caches das vítimas voltados ao seu MAC.",
        "conceitos": [
          "ARP spoofing/poisoning",
          "Interceptação de tráfego (MITM)"
        ],
        "estrategia": "Identificar o vetor (reply falso sem solicitação), o efeito no cache das vítimas e as contramedidas no switch.",
        "execucao": [
          "Reconhecer que o reply falso associa o IP do gateway ao MAC do atacante",
          "Concluir que as vítimas passam a enviar ao atacante o tráfego de saída",
          "Indicar mitigações: inspeção ARP, VLANs e monitoramento"
        ],
        "resultado": "ARP spoofing/poisoning — tráfego destinado ao gateway é desviado ao atacante (MITM). Mitigar com DAI, segmentação e monitoramento de ARP.",
        "justificativa": "O ataque explora a falta de autenticação do ARP: com um par IP-MAC falso, o atacante se coloca entre as vítimas e o gateway e inspeciona o fluxo.",
        "errosFrequentes": [
          "Tratar o caso como indisponibilidade: a rede parece normal, mas o tráfego é interceptado",
          "Supor que cifra de aplicação anula o risco: ela não corrige o desvio"
        ],
        "variacao": "Admita que os replies falsos associem o IP de um servidor interno ao MAC do gateway e compare os impactos."
      },
      {
        "tipo": "erro",
        "problema": "Um host 192.168.1.10/24 não alcança 10.0.0.5. O analista conclui: 'o ARP falhou porque 10.0.0.5 não respondeu ao request'. A leitura está correta?",
        "dados": "Host 192.168.1.10/24, gateway 192.168.1.1, destino remoto 10.0.0.5/8; a captura traz request por 192.168.1.1 e nenhum por 10.0.0.5.",
        "conceitos": [
          "Escopo local do ARP",
          "MAC do próximo salto x IP destino"
        ],
        "estrategia": "Verificar qual IP foi perguntado na captura e separar falha de enlace, quando o gateway não responde, de falha de roteamento além dele.",
        "execucao": [
          "Verificar que a única consulta ARP busca o endereço 192.168.1.1",
          "Concluir que o quadro vai ao gateway e o pacote IP mantém destino 10.0.0.5",
          "Atribuir a falha a rota ou filtro além do gateway, não ao ARP"
        ],
        "resultado": "A leitura é improcedente: nenhuma consulta ARP visa 10.0.0.5, pois o destino é remoto; o host resolve o MAC do gateway e a entrega depende do encaminhamento além dele.",
        "justificativa": "O ARP opera no domínio de broadcast e por isso só resolve endereços locais; para outra rede, o MAC resolvido é o do gateway e o IP destino permanece no pacote. A captura confirma: não há request pelo destino remoto.",
        "errosFrequentes": [
          "Interpretar o silêncio do destino remoto como falha de ARP, embora a consulta nunca o visasse",
          "Confundir o MAC do quadro com o IP do pacote: próximo salto x destino final"
        ],
        "variacao": "Admita que a captura não contenha request algum, nem por 192.168.1.1, e reinterprete o diagnóstico."
      }
    ]
  },
  "m2-u3-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Serviço de correio é tema consolidado no conteúdo programático: o item mistura protocolo, função e porta. SMTP empurra mensagens; POP3 e IMAP puxam, e as portas mudam conforme o uso e a cifragem.",
      "preRequisitos": [
        "Transporte TCP e portas bem conhecidas de serviço",
        "Cliente de correio x servidor de correio",
        "Sessão persistente e criptografia TLS"
      ],
      "objetivosObservaveis": [
        "Associar SMTP, POP3 e IMAP às funções de envio, recepção com remoção e recepção sincronizada",
        "Indicar as portas 25, 587 e 465, 110 e 995, 143 e 993",
        "Diferenciar TLS implícito de STARTTLS",
        "Explicar SPF, DKIM e DMARC na autenticação do domínio remetente"
      ],
      "competencias": [
        "Leitura de item que associa protocolo, função e porta",
        "Diagnóstico de falha de envio ou de recebimento pela porta e pelo modo de conexão",
        "Separação entre autenticar o domínio e legitimar o conteúdo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t3-s1 (FTP, FTPS e SFTP) — protocolo de aplicação com sessão e porta própria",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — sustenta a cifragem das sessões",
        "m2-u3-t4-s3 (NAT, PAT, proxy e VPN) — publicação de servidores exige tradução de endereços"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático: o trio de correio e suas portas aparece em itens de rede."
      }
    },
    "niveis": {
      "iniciante": "SMTP envia e transporta mensagens; POP3 e IMAP recebem. Portas: 25 (retransmissão entre servidores), 587 (submissão com STARTTLS) e 465 (SMTPS) no SMTP; 110 e 995 no POP3; 143 e 993 no IMAP. O IMAP guarda a mensagem no servidor; o POP3 a remove por padrão.",
      "intermediario": "O SMTP empurra: o cliente entrega a mensagem ao servidor, que a retransmite. POP3 e IMAP puxam, mas o POP3 baixa e costuma apagar a cópia no servidor, o que impede a leitura em outro dispositivo; o IMAP conserva e sincroniza. A porta 587 exige credencial.",
      "avancado": "Dois modos protegem a sessão. No TLS implícito, a conexão nasce cifrada na porta segura (465, 995 e 993). No STARTTLS, o cliente abre a porta comum (587, 110 e 143) em texto claro e pede a elevação; se recusada, aborta. SPF, DKIM e DMARC autenticam o domínio.",
      "especialista": "O diagnóstico separa envio de recepção: recusa na porta 25 ou 587 aponta política de retransmissão ou autenticação; recusa em 993 ou 995 indica acesso bloqueado. O POP3 pode manter a mensagem no servidor. SPF, DKIM e DMARC publicam políticas que o receptor consulta para aceitar ou rejeitar."
    },
    "comparacoes": [
      {
        "tema": "SMTP x POP3 e IMAP: o sentido do fluxo",
        "a": {
          "rotulo": "SMTP",
          "texto": "Empurrar: o cliente entrega ao servidor, que retransmite. Portas 25, 587, 465."
        },
        "b": {
          "rotulo": "POP3 e IMAP",
          "texto": "Puxar: o cliente busca no servidor. POP3 em 110 e 995; IMAP em 143 e 993."
        },
        "diferencaGabarito": "SMTP leva a mensagem ao servidor; POP3 e IMAP trazem do servidor para o cliente."
      },
      {
        "tema": "POP3 x IMAP: a cópia no servidor",
        "a": {
          "rotulo": "POP3",
          "texto": "Baixa a mensagem e, por padrão, remove a cópia do servidor."
        },
        "b": {
          "rotulo": "IMAP",
          "texto": "Mantém no servidor e sincroniza estado, pastas e marcadores."
        },
        "diferencaGabarito": "POP3 libera espaço no servidor; IMAP mantém a caixa igual em todos os dispositivos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'SMTP baixa as mensagens do servidor para o dispositivo do usuário.'",
        "porqueErrada": "A função do SMTP é entregar e retransmitir a mensagem, não trazê-la de volta. Quem busca a mensagem no servidor para o cliente é o POP3 ou o IMAP.",
        "versaoCorreta": "Errado. O SMTP empurra a mensagem do cliente para o servidor e a retransmite; a recepção no dispositivo é feita por POP3 (110 e 995) ou IMAP (143 e 993)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'IMAP apaga as mensagens do servidor assim que o usuário as lê.'",
        "porqueErrada": "A remoção da cópia no servidor é o comportamento típico do POP3. O IMAP conserva a mensagem e sincroniza o estado de leitura entre os dispositivos.",
        "versaoCorreta": "Errado. O IMAP mantém as mensagens no servidor e sincroniza o estado; quem tende a apagar a cópia no servidor é o POP3, que pode ser configurado para preservar o original."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'SPF, DKIM e DMARC garantem que o conteúdo da mensagem é legítimo.'",
        "porqueErrada": "Os mecanismos autenticam o domínio remetente e orientam a política do servidor receptor. Não examinam texto, link ou anexo: o phishing autêntico passa sem verificação.",
        "versaoCorreta": "Errado. SPF, DKIM e DMARC autenticam o domínio remetente e reduzem a falsificação de origem; não atestam a legitimidade do conteúdo, que exige atenção do usuário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "SMTP: empurra e retransmite, nas portas 25, 587 e 465",
        "POP3: puxa e remove a cópia do servidor, nas portas 110 e 995",
        "IMAP: puxa e conserva no servidor, nas portas 143 e 993",
        "TLS implícito em 465, 995 e 993 contra STARTTLS em 587, 110 e 143",
        "SPF, DKIM e DMARC autenticam o domínio, não o conteúdo"
      ],
      "regras": [
        "SMTP envia; POP3 e IMAP recebem: inverter a função leva à porta errada",
        "Porta 25 retransmite, 587 submete com autenticação, 465 cifra de início",
        "POP3 remove por padrão a cópia do servidor; IMAP conserva e sincroniza",
        "TLS implícito nasce cifrado; STARTTLS só eleva a conexão se o servidor aceitar"
      ],
      "comparacoes": [
        "SMTP empurra ao servidor; POP3 e IMAP puxam do servidor",
        "POP3 baixa e libera espaço; IMAP conserva e sincroniza entre dispositivos"
      ],
      "fluxos": [
        "Cliente autentica na 587, negocia STARTTLS e entrega a mensagem ao servidor",
        "Cliente abre a 993 ou 995, autentica e busca a mensagem, mantendo ou removendo a cópia"
      ],
      "excecoes": [
        "O POP3 pode manter a mensagem no servidor, embora o padrão seja remover",
        "A porta 25 é de retransmissão entre servidores; provedores bloqueiam envio de clientes"
      ],
      "palavrasChave": [
        "SMTP",
        "POP3",
        "IMAP",
        "empurrar",
        "puxar",
        "STARTTLS",
        "TLS implícito",
        "SPF, DKIM e DMARC"
      ],
      "checklist": [
        "Associo cada protocolo à função de envio ou de recepção",
        "Indico a porta sem esquecer a variante com TLS",
        "Digo o que o POP3 faz com a cópia no servidor",
        "Separo TLS implícito de STARTTLS",
        "SPF, DKIM e DMARC autenticam o domínio, não o conteúdo"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma servidora lê a mensagem no computador e depois não a encontra no celular. Que protocolo de recepção explica isso?",
        "dados": "Cliente com POP3 na 995; mensagem removida do servidor após a leitura no computador; celular depois, com a caixa vazia.",
        "conceitos": [
          "POP3: baixa a mensagem e remove a cópia do servidor",
          "IMAP: mantém a mensagem e sincroniza o estado"
        ],
        "estrategia": "Identificar o protocolo configurado, observar a retirada da mensagem do servidor e comparar POP3 e IMAP.",
        "execucao": [
          "Reconhecer que o cliente usa POP3, na porta 995",
          "Verificar a retirada da mensagem após a leitura no computador",
          "Concluir que o IMAP manteria a mensagem no servidor"
        ],
        "resultado": "É o POP3, que baixa e remove a cópia do servidor; com IMAP a mensagem ficaria nele e o estado seria sincronizado.",
        "justificativa": "A inconsistência nasce da remoção da cópia no servidor, padrão do POP3. Como o IMAP conserva a mensagem e sincroniza o estado, ambos veem a mesma caixa.",
        "errosFrequentes": [
          "Confundir a porta 995 com indício de IMAP, quando o número indica o transporte",
          "Supor falha de conectividade quando o sintoma é a retirada da mensagem do servidor"
        ],
        "variacao": "Se a servidora usar IMAP na porta 993 e marcar a mensagem como lida no celular, o que o computador mostraria?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão implanta cliente de correio para servidores públicos e precisa definir a porta de envio. A norma exige autenticação e cifragem: qual porta adotar?",
        "dados": "Servidor institucional; envio pela estação; exigência de credencial e sessão cifrada; porta 25 bloqueada.",
        "conceitos": [
          "Porta 587: submissão autenticada",
          "STARTTLS: elevação da sessão iniciada em texto claro"
        ],
        "estrategia": "Descartar a porta de retransmissão entre servidores e verificar qual porta de submissão atende às exigências de credencial e cifragem.",
        "execucao": [
          "Excluir a porta 25, de retransmissão e bloqueada para clientes",
          "Adotar a porta 587, de submissão com autenticação da conta",
          "Exigir a elevação para STARTTLS e abortar o envio se recusada"
        ],
        "resultado": "Porta 587, com autenticação da conta e negociação STARTTLS; a 465 vale quando a sessão nasce cifrada.",
        "justificativa": "A exigência de autenticação e cifragem aponta para a porta de submissão: na 587 o cliente se autentica e solicita a elevação da sessão.",
        "errosFrequentes": [
          "Indicar a porta 25 por ser a mais conhecida do SMTP, esquecendo a retransmissão",
          "Confundir STARTTLS com TLS implícito e dizer que a 587 já nasce cifrada"
        ],
        "variacao": "Se a política proibir elevar uma sessão iniciada em texto claro, indique a porta alternativa e o que muda no envio."
      },
      {
        "tipo": "erro",
        "problema": "Um técnico afirma: 'as portas 993 e 995 protegem o correio com TLS, logo POP3S e IMAPS são o mesmo protocolo'. A afirmação se sustenta?",
        "dados": "Cliente na 993, com pastas e marcadores; servidor que apaga a mensagem após o download na 995; ambos com TLS.",
        "conceitos": [
          "Protocolos de aplicação distintos sob o mesmo transporte cifrado",
          "Sincronizar o estado ou remover a mensagem no servidor"
        ],
        "estrategia": "Separar a camada de transporte, o TLS nos dois casos, da camada de aplicação, e confrontar a afirmação com o efeito observado no servidor.",
        "execucao": [
          "Reconhecer que a cifragem é o mesmo mecanismo nas duas portas",
          "Lembrar que o protocolo de aplicação define o comportamento",
          "Contrastar o sintoma: sincronização na 993, remoção da mensagem na 995"
        ],
        "resultado": "Improcedente: o TLS é apenas o transporte cifrado. IMAP na 993 sincroniza; POP3 na 995 baixa e apaga a mensagem.",
        "justificativa": "A leitura ingênua confunde proteção com protocolo: o ciframento é idêntico nas portas, mas muda o que o cliente faz com a mensagem, visível nas pastas e na cópia retirada.",
        "errosFrequentes": [
          "Concluir que, cifrado o transporte, as duas opções têm o mesmo comportamento",
          "Não confrontar a afirmação com o sintoma: a remoção da mensagem no servidor"
        ],
        "variacao": "Se as duas conexões passarem a usar a porta 143 sem cifra, o que muda na análise da falha e na recomendação de segurança?"
      }
    ]
  },
  "m2-u3-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O TLS garante confidencialidade, integridade e autenticidade do servidor sobre o TCP, mas não protege o endpoint. Provas cobram essa fronteira e o contraste entre os dois modos de TLS.",
      "preRequisitos": [
        "TCP e portas de serviço bem conhecidos",
        "Criptografia de chave pública e assinatura digital"
      ],
      "objetivosObservaveis": [
        "Definir confidencialidade, integridade e autenticidade no TLS",
        "Descrever o handshake: ClientHello, ServerHello, certificado",
        "Explicar o vínculo do certificado X.509 e o papel da CA",
        "Distinguir TLS implícito de STARTTLS"
      ],
      "competencias": [
        "Separar proteção de transporte de proteção de endpoint",
        "Julgar a conduta segura diante de certificado inválido"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas) — TLS implícito na 443",
        "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — TLS ou STARTTLS",
        "m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — base do handshake"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens C/E e de múltipla escolha cobram garantias do TLS, handshake, certificado X.509 e a diferença entre TLS implícito e STARTTLS."
      }
    },
    "niveis": {
      "iniciante": "O TLS protege o tráfego sobre o TCP com confidencialidade, integridade e autenticidade do servidor. O handshake começa com o ClientHello; o servidor responde com ServerHello, certificado e Finished; o cliente valida o certificado.",
      "intermediario": "No ClientHello o cliente anuncia versões e suítes de cifra; o servidor devolve ServerHello, certificado X.509 e Finished; o cliente valida o certificado e deriva as chaves de sessão. TLS implícito nasce cifrado; STARTTLS eleva a porta padrão.",
      "avancado": "Certificado expirado, revogado ou de CA desconhecida gera alerta. A autenticação do cliente é opcional e rara. O TLS protege o transporte, não o endpoint: com servidor comprometido, os dados ficam legíveis.",
      "especialista": "A análise de um alerta de certificado exige validar cadeia de confiança, domínio, validade e revogação, e então rejeitar a conexão. O TLS protege a aplicação sobre TCP; o IPsec atua na rede."
    },
    "comparacoes": [
      {
        "tema": "TLS implícito e STARTTLS",
        "a": {
          "rotulo": "TLS implícito",
          "texto": "A conexão nasce cifrada em porta dedicada (443, 465, 993 e 995), sem fase em claro nem comando de elevação."
        },
        "b": {
          "rotulo": "STARTTLS",
          "texto": "A conexão parte do texto claro na porta padrão (587, 143, 110 e 25) e só se torna cifrada após o comando STARTTLS."
        },
        "diferencaGabarito": "Os dois entregam canal cifrado; mudam o momento e a porta: no implícito há cifragem desde o primeiro byte; no STARTTLS há fase em claro até a elevação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'TLS garante segurança fim-a-fim incluindo o servidor e o cliente.'",
        "porqueErrada": "O TLS protege o canal entre cliente e servidor. No destino o servidor descriptografa os dados, e um endpoint comprometido expõe o conteúdo.",
        "versaoCorreta": "O TLS entrega confidencialidade, integridade e autenticidade do servidor no transporte; a proteção do endpoint depende de outros controles."
      },
      {
        "afirmacaoEquivocada": "STARTTLS e TLS implícito são idênticos porque ambos cifram o tráfego.",
        "porqueErrada": "O efeito é o mesmo, mas o início difere: no implícito a porta já é cifrada; no STARTTLS a sessão parte do texto claro e depende do comando.",
        "versaoCorreta": "O TLS implícito começa cifrado na porta segura; o STARTTLS parte do texto claro e se eleva por comando, com autenticação após o handshake."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "TLS: confidencialidade, integridade e autenticidade no TCP",
        "Handshake: ClientHello, ServerHello, certificado e Finished",
        "Certificado X.509 vincula chave pública a uma identidade (CA)"
      ],
      "regras": [
        "Validar certificado (CA, validade, domínio) antes de autenticar",
        "O TLS protege o transporte, não o endpoint"
      ],
      "comparacoes": [
        "TLS implícito (cifrado desde o início) contra STARTTLS (em claro até o upgrade)"
      ],
      "fluxos": [
        "Cliente: ClientHello → servidor: ServerHello, certificado e Finished → validação → chaves de sessão"
      ],
      "excecoes": [
        "O TLS não protege o endpoint: servidor comprometido expõe os dados",
        "Autenticação do cliente é opcional; CA comprometida permitiria certificado falso"
      ],
      "palavrasChave": [
        "TLS",
        "handshake",
        "certificado X.509",
        "CA",
        "STARTTLS"
      ],
      "checklist": [
        "Defino as garantias do TLS",
        "Descrevo o handshake e o certificado",
        "Distingo TLS implícito de STARTTLS",
        "Reconheço o que o TLS não protege"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um navegador abre https://portal.exemplo.com na porta 443: a conexão nasce cifrada ou passa por texto claro?",
        "dados": "Esquema https, host portal.exemplo.com, porta TCP 443, serviço que só aceita TLS.",
        "conceitos": [
          "TLS implícito",
          "Porta segura 443"
        ],
        "estrategia": "Associar o esquema https e a porta 443 ao TLS implícito, em que a proteção vale desde o primeiro byte.",
        "execucao": [
          "Passo 1: ler o esquema https e a porta 443.",
          "Passo 2: associar a porta 443 ao TLS implícito.",
          "Passo 3: concluir que a cifragem vale já no primeiro byte."
        ],
        "resultado": "A conexão nasce cifrada na porta 443 (TLS implícito): sem fase em texto claro.",
        "justificativa": "No TLS implícito a negociação é a finalidade da porta 443, de modo que o primeiro byte já trafega cifrado.",
        "errosFrequentes": [
          "Supor que tráfego cifrado de web nasça em texto claro",
          "Confundir a porta 443 com a 587, que usa STARTTLS"
        ],
        "variacao": "O mesmo aluno acessa IMAP na porta 993: a resposta permanece TLS implícito, pois a conexão nasce cifrada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cliente conecta a um SMTP na porta 587, que anuncia STARTTLS. As credenciais vão antes ou depois da elevação?",
        "dados": "Servidor SMTP em mail.exemplo.org, porta 587, STARTTLS no banner e certificado X.509 depois.",
        "conceitos": [
          "STARTTLS",
          "Validação do certificado"
        ],
        "estrategia": "Tratar a porta 587 como conexão em texto claro: enviar STARTTLS, validar o certificado e só então autenticar, sem expor usuário e senha.",
        "execucao": [
          "Passo 1: conectar na 587 e ler o banner.",
          "Passo 2: enviar STARTTLS e aguardar o certificado.",
          "Passo 3: validar o certificado contra a CA confiável.",
          "Passo 4: se falhar, encerrar; senão, autenticar cifrado."
        ],
        "resultado": "O cliente eleva a sessão com STARTTLS, valida o certificado e só depois envia as credenciais; com certificado inválido, recusa.",
        "justificativa": "Enviar credenciais antes da elevação as exporia na rede; o certificado validado impede aceitar um impostor.",
        "errosFrequentes": [
          "Autenticar na porta 587 sem executar STARTTLS",
          "Aceitar o certificado sem conferir emissor e validade"
        ],
        "variacao": "O mesmo cliente usa IMAP na porta 143, que também anuncia STARTTLS: conectar em claro, elevar, validar e autenticar."
      },
      {
        "tipo": "erro",
        "problema": "Um auditor afirma: 'com o tráfego cifrado por TLS, o servidor não consegue ler o que o usuário enviou'. Julgar.",
        "dados": "Usuário envia formulário ao portal https://portal.exemplo.com; o servidor processa os campos sob TLS.",
        "conceitos": [
          "TLS protege o transporte, não o endpoint",
          "Descriptografia no destino"
        ],
        "estrategia": "O TLS se inicia e termina no servidor: a chave de sessão permite ao destino descriptografar o que recebe, então a cifragem impede escuta, não leitura pelo destinatário.",
        "execucao": [
          "Passo 1: identificar quem termina o túnel TLS.",
          "Passo 2: o servidor precisa da chave de sessão.",
          "Passo 3: o TLS impede leitura por terceiros, não pelo servidor."
        ],
        "resultado": "A afirmação é errada: o TLS impede a escuta no trajeto, mas o servidor de destino descriptografa e processa os dados.",
        "justificativa": "O canal cifrado tem como destino o próprio servidor, que precisa da chave de sessão para responder; a garantia é contra interceptação, não sigilo frente a ele.",
        "errosFrequentes": [
          "Confundir confidencialidade no trajeto com sigilo do servidor",
          "Acreditar que o TLS impediria o processamento dos dados"
        ],
        "variacao": "Afirmação: 'o TLS impede que um servidor comprometido exponha os dados'. Resposta: errada, pois os dados são descriptografados no servidor e expostos se o endpoint for comprometido."
      }
    ]
  },
  "m2-u3-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "NAT, proxy e VPN resolvem problemas distintos de borda: reutilizar endereços públicos, intermediar requisições e estender redes privadas com sigilo.",
      "preRequisitos": [
        "Endereçamento IPv4 e faixas privadas (RFC 1918)",
        "TCP e UDP: portas e multiplexação"
      ],
      "objetivosObservaveis": [
        "Explicar a tradução de endereços do NAT na borda",
        "Descrever o PAT, que traduz também portas",
        "Distinguir proxy direto, transparente e reverso",
        "Caracterizar VPN site a site e acesso remoto"
      ],
      "competencias": [
        "Escolher NAT, proxy ou VPN conforme o requisito",
        "Diagnosticar falhas de tradução de endereços e portas"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t1-s2 (Endereços públicos, privados, loopback e link-local) — base do NAT e do PAT",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — análogo ao túnel da VPN"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de arquitetura de rede testam cada mecanismo: NAT na tradução, PAT nas portas, proxy reverso na carga e VPN na extensão cifrada."
      }
    },
    "niveis": {
      "iniciante": "O NAT traduz endereços privados em públicos na borda; o PAT (NAT overload) traduz também as portas e permite várias conexões com um único IP público. Tipos: estático, dinâmico e PAT.",
      "intermediario": "O proxy intermedeia requisições em nome do cliente, transparente ou explícito, e oferece cache, filtragem e registro de tráfego. O proxy reverso distribui carga; a VPN cria um túnel cifrado.",
      "avancado": "O NAT quebra o princípio fim a fim: dificulta servidores internos, P2P e VoIP, atrapalha protocolos que embutem IP no payload e consome a tabela de estados. A VPN soma overhead e latência.",
      "especialista": "Na escolha entre NAT, proxy reverso e VPN, avalie posição e escopo: o NAT resolve endereçamento, o proxy reverso distribui carga e oculta a origem, a VPN estende a rede privada com sigilo."
    },
    "comparacoes": [
      {
        "tema": "NAT e PAT",
        "a": {
          "rotulo": "NAT",
          "texto": "Traduz apenas endereços: privados viram públicos, com um mapeamento por host."
        },
        "b": {
          "rotulo": "PAT",
          "texto": "Traduz endereço e porta: cada sessão recebe par distinto no IP público."
        },
        "diferencaGabarito": "O NAT mapeia por endereço; o PAT acrescenta a porta e multiplexa sessões. Dizer que o PAT admite um acesso por vez confunde o mapeamento com a tabela."
      },
      {
        "tema": "Proxy direto e proxy reverso",
        "a": {
          "rotulo": "Proxy direto",
          "texto": "Fica entre o cliente e a Internet, representando o cliente; transparente ou explícito, com cache."
        },
        "b": {
          "rotulo": "Proxy reverso",
          "texto": "Fica entre o cliente e os servidores, representando o servidor; distribui carga e oculta a origem."
        },
        "diferencaGabarito": "O proxy direto representa o cliente e o reverso o servidor; a posição na cadeia define o papel. Item que põe o reverso entre cliente e Internet troca os papéis."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'NAT aumenta a segurança como um firewall.'",
        "porqueErrada": "O NAT é endereçamento: oculta endereços internos e dificulta certos acessos, mas não decide por política o que atravessa a borda; filtrar é do firewall.",
        "versaoCorreta": "Parcialmente correta: o NAT oculta os endereços internos e dificulta o reconhecimento da rede, mas não filtra tráfego; quem filtra é o firewall."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Proxy e VPN são equivalentes porque ambos protegem a comunicação.'",
        "porqueErrada": "Atuam em camadas distintas: a VPN cifra o tráfego de rede em um túnel; o proxy intermedeia requisições de aplicação em nome do cliente ou do servidor.",
        "versaoCorreta": "Proxy e VPN não são equivalentes: um intermedeia a aplicação; a outra cria um túnel cifrado de rede, com IPsec, OpenVPN ou WireGuard."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "NAT: tradução de endereços privados em públicos na borda",
        "PAT: traduz endereço e porta, com muitos hosts por IP",
        "Proxy reverso representa o servidor e distribui carga",
        "VPN: túnel cifrado que estende a rede privada"
      ],
      "regras": [
        "NAT traduz endereço; PAT traduz endereço e porta",
        "NAT não substitui firewall: ocultação não é filtragem"
      ],
      "comparacoes": [
        "NAT (traduz endereço) contra PAT (traduz endereço e porta)",
        "VPN (túnel cifrado) contra proxy (intermediação de aplicação)"
      ],
      "fluxos": [
        "Host interno abre conexão: a borda traduz IP e porta e roteia a resposta pelo mapeamento"
      ],
      "excecoes": [
        "O NAT quebra o fim a fim: dificulta servidores internos, P2P e VoIP",
        "A VPN tem overhead, latência e gestão de chaves"
      ],
      "palavrasChave": [
        "NAT",
        "PAT",
        "proxy reverso",
        "VPN"
      ],
      "checklist": [
        "Explico o que o NAT traduz",
        "Distingo NAT estático, dinâmico e PAT",
        "Separo proxy direto de proxy reverso",
        "Descrevo a VPN e suas limitações"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma residência tem dez dispositivos na Internet e um único IP público. Como todos acessam?",
        "dados": "Rede interna 192.168.0.0/24 com 10 hosts; o provedor entrega um IP público (203.0.113.7).",
        "conceitos": [
          "PAT (NAT overload)",
          "Multiplexação por portas"
        ],
        "estrategia": "Notar que um IP público comporta várias sessões quando a tradução distingue as portas de origem.",
        "execucao": [
          "Passo 1: os hosts saem com endereços privados.",
          "Passo 2: há um IP público do provedor.",
          "Passo 3: a coexistência exige tradução de portas."
        ],
        "resultado": "PAT: o roteador traduz IP e porta de cada sessão e mantém tabela de estados.",
        "justificativa": "Só a tradução de portas gera pares distintos de IP e porta, e a tabela de estados devolve cada resposta à sessão certa.",
        "errosFrequentes": [
          "Responder que o NAT simples resolve, sem as portas",
          "Confundir o IP do provedor com pool do NAT"
        ],
        "variacao": "Se o provedor entregar oito endereços públicos, o NAT dinâmico (pool) torna-se opção e o PAT não é necessário."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa quer que 30 funcionários remotos alcancem folha de pagamento e ERP internos, com sigilo.",
        "dados": "30 usuários remotos; sistemas em 10.0.0.0/16; exigência de autenticação multifator e auditoria.",
        "conceitos": [
          "VPN de acesso remoto",
          "Túnel cifrado"
        ],
        "estrategia": "Alcançar a rede privada a partir de host externo pede VPN de acesso remoto, com túnel cifrado entre o usuário e a rede.",
        "execucao": [
          "Passo 1: o acesso parte de host externo e alcança a rede.",
          "Passo 2: VPN de acesso remoto; o proxy não estende a rede.",
          "Passo 3: configurar túnel cifrado e autenticação multifator."
        ],
        "resultado": "VPN de acesso remoto (IPsec/SSL/WireGuard) com autenticação forte (MFA), túnel cifrado e split tunneling conforme política.",
        "justificativa": "Alcançar a rede privada com sigilo e rastreabilidade é o escopo da VPN de acesso remoto; proxy e NAT não entregam ambos.",
        "errosFrequentes": [
          "Propor só NAT, que não cria sigilo",
          "Confundir proxy reverso com VPN, pois só ela cifra"
        ],
        "variacao": "Para publicar o ERP com balanceamento e proteção da origem, sem acesso remoto, a solução é proxy reverso."
      },
      {
        "tipo": "erro",
        "problema": "Um administrador afirma: 'como o roteador oculta os endereços internos, ninguém alcança o servidor'. Julgar.",
        "dados": "Rede 10.0.0.0/8 com servidor; NAT traduz endereços; firewall sem liberação.",
        "conceitos": [
          "NAT como endereçamento, não filtro",
          "Encaminhamento e firewall"
        ],
        "estrategia": "Separar endereçamento de filtragem: o NAT reescreve endereços; a entrada depende de encaminhamento e firewall.",
        "execucao": [
          "Passo 1: o NAT traduz endereços privados em públicos.",
          "Passo 2: a alcançabilidade depende de encaminhamento e firewall.",
          "Passo 3: a ocultação não é controle de acesso."
        ],
        "resultado": "Parcial. NAT oculta IPs internos (segurança por obscuridade) mas não filtra tráfego por política. Não substitui firewall; NAT + firewall é a combinação típica.",
        "justificativa": "O NAT resolve endereçamento e esconde endereços internos; quem filtra tráfego é o firewall. Confundir os dois expõe serviços ou promete proteção.",
        "errosFrequentes": [
          "Tomar ocultação como bloqueio",
          "Dizer que NAT e firewall são sinônimos ou exclusivos"
        ],
        "variacao": "Afirmação: 'com NAT dinâmico, os servidores ficam protegidos porque seus IPs são desconhecidos'. Resposta: errada; o NAT não filtra."
      }
    ]
  },
  "m2-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Entender a estrutura de 32 bits do IPv4, a divisão em octetos e a separação entre parte de rede e parte de host é pré-requisito para máscaras, sub-redes e CIDR. O item cobra octetos, endereços especiais e o cálculo de rede/broadcast. Sem essa base, o aluno erra conversões e itens C/E sobre endereçamento.",
      "preRequisitos": [
        "Camada de rede (IP)",
        "Binário básico (bits e potências de 2)"
      ],
      "objetivosObservaveis": [
        "Descrever o endereço IPv4 de 32 bits como quatro octetos decimais",
        "Converter um octeto entre decimal e binário",
        "Separar a parte de rede da parte de host usando a máscara",
        "Citar os principais endereços especiais (loopback, link-local, multicast, broadcast)"
      ],
      "competencias": [
        "Representar endereços IPv4 em binário e decimal",
        "Ler e interpretar endereços IP com máscara"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t1-s2 (Endereços públicos, privados, loopback e link-local) — aprofunda os endereços especiais",
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base para separar rede e host"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Estrutura IPv4 e endereços especiais são tema central do conteúdo programático de redes: cobram octetos, conversão binário/decimal, endereços especiais e cálculo de rede/broadcast em múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "Um endereço IPv4 tem 32 bits, escritos como quatro octetos decimais separados por ponto (ex.: 192.168.1.10). Cada octeto vai de 0 a 255 porque representa 8 bits (2^8 = 256 valores). A máscara de sub-rede divide o endereço em parte de REDE (prefixo) e parte de HOST. Historicamente, as classes definiam o tamanho: Classe A (/8), Classe B (/16) e Classe C (/24); hoje usa-se o roteamento sem classes (CIDR), que trata o prefixo de forma explícita. Endereços especiais incluem 0.0.0.0 (rota padrão/origem indefinida), 255.255.255.255 (broadcast limitado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local/APIPA), 224.0.0.0/4 (multicast) e 240.0.0.0/4 (reservado).",
      "intermediario": "Conversão prática: o octeto 192 em binário é 11000000 (128+64); o octeto 255 é 11111111. O endereço 192.168.1.10 fica 11000000.10101000.00000001.00001010. Cálculo ilustrativo: em uma rede /24, os bits de host são 32 − 24 = 8, então 2^8 = 256 endereços, dos quais 254 são hosts válidos (excluídos rede e broadcast). Em /25, os bits de host são 7 → 2^7 = 128 endereços e 126 hosts válidos. A máscara determina onde termina a rede e começa o host; mudar a máscara muda a separação sem alterar o endereço IP.",
      "avancado": "As classes históricas (A/B/C/D/E) ainda aparecem em questões de concurso como referência, mas o roteamento moderno usa CIDR: qualquer prefixo de /0 a /32, não apenas /8, /16, /24. O endereço de rede é obtido por AND bit a bit entre IP e máscara; o broadcast coloca todos os bits de host em 1. Endereços reservados da RFC 1918 (privados: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) não são roteáveis na Internet pública e precisam de NAT para sair. RFC 791 define IPv4; RFC 4632 define CIDR; RFC 3021 define /31 para links ponto-a-ponto.",
      "especialista": "Em arquitetura corporativa, o planejamento de endereçamento IPv4 integra VLSM e sumarização: alocar blocos de tamanhos variados sem sobreposição e agregar rotas para reduzir tabelas de roteamento. A escassez de endereços públicos motivou o NAT e a transição para IPv6 (128 bits). Em concursos de nível superior (analista de rede, auditor de TI), a cobrança incide sobre desenho de plano de endereçamento e validação de sobreposição, não sobre conversão isolada de octetos. Nunca confundir máscara de sub-rede com endereço de broadcast."
    },
    "comparacoes": [
      {
        "tema": "Parte de rede vs. parte de host",
        "a": {
          "rotulo": "Parte de rede (prefixo)",
          "texto": "Identifica a sub-rede; obtida por AND bit a bit entre IP e máscara. Ex.: 172.16.5.20 com /16 → rede 172.16.0.0."
        },
        "b": {
          "rotulo": "Parte de host",
          "texto": "Identifica o host dentro da sub-rede; os bits restantes após o prefixo. Ex.: 172.16.5.20 com /16 → host 5.20."
        },
        "diferencaGabarito": "A parte de rede é comum a todos os hosts da sub-rede; a parte de host é única por host. Não confundir endereço de rede com endereço de host."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Endereços de classe A são sempre públicos.",
        "porqueErrada": "A classe define o tamanho do prefixo, não se o endereço é público ou privado. 10.0.0.0/8 é classe A e é privado (RFC 1918); não é roteável na Internet pública.",
        "versaoCorreta": "A classe (histórica) define tamanho do prefixo, não publicidade. 10.0.0.0/8 é classe A e privado (RFC 1918). Público vs. privado depende da faixa, não da classe."
      },
      {
        "afirmacaoEquivocada": "O endereço 255.255.255.255 é o broadcast de toda rede IPv4.",
        "porqueErrada": "255.255.255.255 é o broadcast limitado (não roteável, usado na rede local). O broadcast de uma sub-rede específica depende da máscara: em 192.168.1.0/24 o broadcast é 192.168.1.255, mas em 192.168.0.0/16 o broadcast é 192.168.255.255.",
        "versaoCorreta": "255.255.255.255 é broadcast limitado (link local). O broadcast de uma sub-rede se calcula com a máscara (todos os bits de host = 1) e varia com o prefixo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Endereço IPv4 = 32 bits em quatro octetos decimais (0-255)",
        "Máscara separa parte de rede (prefixo) de parte de host",
        "Classes históricas A (/8), B (/16), C (/24); hoje usa CIDR",
        "Endereço de rede = IP AND máscara (bits de host = 0)",
        "Broadcast = bits de host todos 1"
      ],
      "regras": [
        "Cada octeto vale 0 a 255 (2^8 valores)",
        "Hosts válidos = 2^(bits de host) − 2 (exceto /31, /32)",
        "Endereço de rede e broadcast não são atribuíveis a hosts",
        "0.0.0.0 = rota padrão/origem; 255.255.255.255 = broadcast limitado"
      ],
      "comparacoes": [
        "Classe A (/8) vs. Classe B (/16) vs. Classe C (/24): tamanho do prefixo",
        "Rede (bits de host = 0) vs. Broadcast (bits de host = 1) vs. Host válido (intervalo)"
      ],
      "fluxos": [
        "IP + máscara → AND bit a bit → endereço de rede",
        "Rede + bits de host = 1 → broadcast",
        "Rede+1 até broadcast−1 → intervalo de hosts válidos"
      ],
      "excecoes": [
        "127.0.0.0/8 = loopback (não sai da máquina)",
        "169.254.0.0/16 = link-local/APIPA (sem DHCP)",
        "/31 (RFC 3021) = 2 hosts em ponto-a-ponto sem rede/broadcast reservados"
      ],
      "palavrasChave": [
        "IPv4",
        "octeto",
        "máscara de sub-rede",
        "prefixo CIDR",
        "endereço de rede",
        "broadcast",
        "loopback",
        "link-local",
        "multicast",
        "RFC 1918"
      ],
      "checklist": [
        "Converto octeto decimal↔binário",
        "Separo parte de rede e parte de host com a máscara",
        "Identifico endereços especiais (loopback, link-local, multicast)",
        "Calculo endereço de rede e broadcast",
        "Lembro que rede e broadcast não são hosts válidos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quantos bits tem um endereço IPv4 e como ele se representa em notação decimal pontuada?",
        "dados": "Endereço IPv4 de 32 bits. Resposta: quatro octetos decimais (0-255), exemplo 10.0.0.1.",
        "conceitos": [
          "Endereço IPv4 de 32 bits",
          "Quatro octetos decimais separados por ponto"
        ],
        "estrategia": "Lembrar que IPv4 = 32 bits, agrupados em 4 octetos de 8 bits cada, exibidos em decimal pontuado.",
        "execucao": [
          "Passo 1: IPv4 tem 32 bits no total.",
          "Passo 2: 32 bits divididos em 4 octetos de 8 bits cada.",
          "Passo 3: Cada octeto vai de 0 a 255 (2^8 = 256).",
          "Passo 4: Notação decimal pontuada, ex.: 10.0.0.1."
        ],
        "resultado": "32 bits, representados como quatro octetos decimais (0-255), exemplo 10.0.0.1.",
        "justificativa": "O IPv4 usa 32 bits; esses são divididos em quatro blocos de 8 bits (octetos), cada um convertido para decimal (0-255) e separado por ponto.",
        "errosFrequentes": [
          "Achar que IPv4 tem 4 bits (um por octeto)",
          "Esquecer que cada octeto vai até 255, não 999"
        ],
        "variacao": "Quantos endereços distintos um IPv4 pode representar? Resposta: 2^32 ≈ 4,29 bilhões de endereços."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dado o IP 172.16.5.20 com máscara 255.255.0.0, qual é a parte de rede e qual a parte de host?",
        "dados": "IP: 172.16.5.20. Máscara de sub-rede: 255.255.0.0, equivalente a prefixo /16. Separar parte de rede e parte de host.",
        "conceitos": [
          "Parte de rede obtida por AND bit a bit",
          "Máscara 255.255.0.0 = prefixo /16"
        ],
        "estrategia": "A máscara /16 mantém os dois primeiros octetos como rede e os dois últimos como host. 172.16 são os octetos de rede; 5.20 são os octetos de host.",
        "execucao": [
          "Passo 1: Máscara 255.255.0.0 = /16 (primeiros 16 bits = rede).",
          "Passo 2: Parte de rede = 172.16.0.0 (dois primeiros octetos mantidos, dois últimos zerados).",
          "Passo 3: Parte de host = 5.20 (dois últimos octetos).",
          "Passo 4: Prefixo = /16."
        ],
        "resultado": "Rede: 172.16.0.0. Host: 5.20 (últimos 16 bits). Prefixo: /16.",
        "justificativa": "Com máscara /16, os primeiros 16 bits (dois octetos) identificam a rede e os últimos 16 bits identificam o host dentro dessa rede. Logo rede = 172.16.0.0 e host = 5.20.",
        "errosFrequentes": [
          "Responder 172.16.5.0 (mantém o terceiro octeto, que é de host)",
          "Esquecer que com /16 os dois últimos octetos são host"
        ],
        "variacao": "Dado 10.0.5.100 com máscara 255.0.0.0 (/8). Resposta: rede = 10.0.0.0, host = 0.5.100, prefixo /8."
      },
      {
        "tipo": "erro",
        "problema": "Item C/E de concurso: a afirmação 'Endereços de classe A são sempre públicos' está correta ou errada?",
        "dados": "Cenário: item C/E de concurso. Afirmação: classe A → sempre público. Exemplo contrário: 10.0.0.0/8 é classe A e privado (RFC 1918).",
        "conceitos": [
          "Classe define tamanho do prefixo, não publicidade",
          "10.0.0.0/8 é classe A e privado (RFC 1918)"
        ],
        "estrategia": "A classe histórica (A/B/C) diz apenas o tamanho do bloco, não se é público ou privado. A faixa 10.0.0.0/8 é classe A, mas é privada e não roteável na Internet pública.",
        "execucao": [
          "Passo 1: Reconhecer que classe A = prefixo /8 (bloco grande).",
          "Passo 2: Reconhecer que 10.0.0.0/8 é classe A.",
          "Passo 3: Verificar que 10.0.0.0/8 é listada como privada na RFC 1918.",
          "Passo 4: Concluir que a afirmação é falsa: classe A não implica público."
        ],
        "resultado": "Errado. A classe define tamanho do prefixo, não publicidade. 10.0.0.0/8 é classe A e privado (RFC 1918).",
        "justificativa": "Público vs. privado depende da faixa de endereços (RFC 1918), não da classe histórica. 10.0.0.0/8 é classe A e é privado, desmentindo a afirmação.",
        "errosFrequentes": [
          "Achar que o valor do primeiro octeto sozinho determina público/privado",
          "Confundir tamanho do bloco (classe) com roteabilidade na Internet"
        ],
        "variacao": "Afirmação: 'Todo endereço começando com 172 é privado.' Resposta: errado — apenas 172.16.0.0/12 é privado; 172.32.x.x é público."
      }
    ]
  },
  "m2-u4-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar um endereço IPv4 como público, privado, loopback ou link-local é decisão frequente e ponto de pegadinha em concursos de redes. A prova cobra as faixas privadas da RFC 1918, o loopback, o link-local (APIPA) e o fato de que um endereço privado só acessa a Internet por NAT. Dominar essas classificações evita erros em itens C/E e múltipla escolha.",
      "preRequisitos": [
        "Estrutura de endereço IPv4 (octetos, 32 bits)",
        "Máscaras de sub-rede e prefixo CIDR"
      ],
      "objetivosObservaveis": [
        "Listar as faixas privadas da RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)",
        "Explicar o loopback (127.0.0.0/8, tipicamente 127.0.0.1)",
        "Explicar o link-local (169.254.0.0/16, APIPA, sem DHCP)",
        "Classificar endereços IPv4 como público, privado, loopback ou link-local"
      ],
      "competencias": [
        "Classificar endereços IPv4 por tipo e roteabilidade",
        "Diferenciar endereço privado de endereço público em um cenário de rede"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — base: octetos e máscara",
        "m2-u3-t4-s3 (NAT, PAT, proxy e VPN) — privados saem para a Internet por NAT"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação de endereços IPv4 (público/privado/loopback/link-local) é tema central do conteúdo programático de redes: cobram as faixas privadas, loopback, link-local e o papel do NAT em múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "Os endereços privados, definidos na RFC 1918, são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16; eles não são roteáveis na Internet pública e são usados em redes locais, sendo traduzidos para um IP público pelo NAT na borda. O loopback (127.0.0.0/8, tipicamente 127.0.0.1) designa o próprio host: o tráfego não sai da máquina e serve para testes locais. O link-local (169.254.0.0/16) é autoatribuído quando não há DHCP disponível (mecanismo APIPA), permitindo comunicação apenas no próprio link — é um sinal clássico de falha na obtenção de IP. Os endereços públicos são todos os demais e são roteáveis na Internet. Existem ainda o multicast (224.0.0.0/4), que endereça grupos, e o broadcast, que corresponde ao endereço com todos os bits de host em 1 na sub-rede, além do broadcast limitado 255.255.255.255. A classificação é funcional: um endereço privado só se comunica com a Internet por meio de NAT. Exemplo: 192.168.1.10 é privado (prefixo 192.168.0.0/16) e 8.8.8.8 é público. Variação: 172.20.5.3 é privado (dentro de 172.16.0.0/12), mas 172.32.5.3 é público (fora dessa faixa).",
      "intermediario": "Faixas privadas da RFC 1918: 10.0.0.0/8 (16.777.216 endereços), 172.16.0.0/12 (1.048.576 endereços, de 172.16.0.0 a 172.31.255.255) e 192.168.0.0/16 (65.536 endereços). Nenhuma é roteável na Internet pública; precisam de NAT para acessá-la. Loopback 127.0.0.0/8: todo tráfego com destino nesse bloco retorna ao próprio host (não sai da interface); 127.0.0.1 é o mais usado para testes locais de serviços. Link-local 169.254.0.0/16: o host se autoatribui um endereço desse bloco quando não consegue contato com o DHCP (APIPA); permite comunicação apenas no link local (mesma sub-rede) e indica falha de configuração. Endereços públicos são os restantes, roteáveis na Internet, alocados por registros regionais (ex.: LACNIC para a América Latina). Multicast (224.0.0.0/4) envia para um grupo de hosts; broadcast (bits de host = 1) envia para todos da sub-rede; 255.255.255.255 é o broadcast limitado da rede local.",
      "avancado": "A faixa 172.16.0.0/12 é fonte de pegadinha: apenas 172.16.0.0 a 172.31.255.255 é privado; 172.32.0.0 a 172.255.255.255 é público. Assim, 172.20.5.3 é privado, mas 172.32.5.3 é público — o primeiro octeto 172 sozinho não decide. O loopback inteiro 127.0.0.0/8 funciona internamente, não apenas 127.0.0.1. O link-local 169.254.0.0/16 não é roteável nem por NAT: um host com apenas APIPA não acessa a Internet. Endereço 0.0.0.0 significa \"esta rede\"/origem indefinida (uso em rotas padrão), não um host válido. Multicast 224.0.0.0/4 é para grupos (ex.: protocolos de roteamento); endereços 240.0.0.0/4 são reservados (futuro). IPv6 (módulo 4.4) amplia o espaço e muda as categorias (não há broadcast; usa anycast e link-local fe80::/10).",
      "especialista": "Em arquitetura corporativa, faixas privadas são planejadas por site para evitar sobreposição em fusões e VPNs; NAT/PAT traduz para o pool público na borda; link-local persistente indica falha de DHCP a investigar; loopback de interface (lo) é usado para gerenciamento e protocolos de roteamento (ID de roteador OSPF/BGP). Em concursos de nível superior (analista de rede, auditor de TI), a cobrança incide sobre classificação correta em cenários mistos e sobre a implicação de roteabilidade, não sobre decoreba de faixas. Nunca considerar 172.x.x.x como sempre privado: somente 172.16.0.0/12."
    },
    "comparacoes": [
      {
        "tema": "Endereço privado vs. endereço público",
        "a": {
          "rotulo": "Privado (RFC 1918)",
          "texto": "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Não roteável na Internet pública; usado em LANs e traduzido por NAT para sair."
        },
        "b": {
          "rotulo": "Público",
          "texto": "Todos os demais endereços IPv4. Roteável na Internet; alocado por registros regionais; necessário para serviços acessíveis externamente."
        },
        "diferencaGabarito": "Privado não sai para a Internet sem NAT; público é roteável diretamente. Um endereço privado nunca aparece como origem/destino em roteamento público da Internet."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Endereços 172.16.0.0/12 são públicos porque começam com 172.",
        "porqueErrada": "Só 172.16.0.0 a 172.31.255.255 (172.16.0.0/12) é privado. 172.32.0.0 a 172.255.255.255 é público. O primeiro octeto 172 sozinho não decide; é preciso olhar os 12 bits de prefixo.",
        "versaoCorreta": "Apenas 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) é privado; o restante de 172.x.x.x é público. Não decidir apenas pelo primeiro octeto."
      },
      {
        "afirmacaoEquivocada": "Um host com endereço link-local 169.254.x.x consegue acessar a Internet.",
        "porqueErrada": "Link-local não é roteável e não é traduzido por NAT. Serve apenas para comunicação no próprio link (mesma sub-rede) e indica que o host não obteve IP do DHCP.",
        "versaoCorreta": "Link-local (169.254.0.0/16) é autoatribuído sem DHCP, não roteável, não acessa a Internet. Indica falha na obtenção de endereço."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Privados RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
        "Loopback 127.0.0.0/8 (tipicamente 127.0.0.1): comunicação interna ao host",
        "Link-local 169.254.0.0/16 (APIPA): autoatribuído sem DHCP, apenas no link",
        "Públicos: todos os demais, roteáveis na Internet",
        "Multicast 224.0.0.0/4: um-para-muitos; broadcast: bits de host = 1"
      ],
      "regras": [
        "Privado não é roteável na Internet pública; precisa de NAT",
        "Loopback não sai da máquina; serve para testes locais",
        "Link-local indica falha de DHCP; não acessa a Internet",
        "172.16.0.0/12 é privado; 172.32.x.x é público (não decidir só pelo primeiro octeto)"
      ],
      "comparacoes": [
        "Privado (RFC 1918) vs. público (roteável na Internet)",
        "Loopback (interno ao host) vs. link-local (mesmo link, sem DHCP)",
        "Multicast (grupo) vs. broadcast (toda a sub-rede)"
      ],
      "fluxos": [
        "Classificar endereço: verificar faixa privada → loopback → link-local → caso contrário público",
        "Privado quer Internet? → precisa de NAT na borda",
        "Host obteve 169.254.x.x? → falha de DHCP, verificar rede/DHCP"
      ],
      "excecoes": [
        "172.16.0.0/12 privado; 172.32.0.0 a 172.255.255.255 público",
        "Link-local não é traduzido por NAT nem roteável",
        "0.0.0.0 = origem indefinida/rota padrão, não host válido"
      ],
      "palavrasChave": [
        "privado",
        "público",
        "RFC 1918",
        "loopback",
        "link-local",
        "APIPA",
        "NAT",
        "multicast",
        "broadcast",
        "roteável"
      ],
      "checklist": [
        "Lembro as três faixas privadas (RFC 1918)",
        "Sei que loopback é 127.0.0.0/8 e não sai da máquina",
        "Reconheço link-local 169.254.x.x como falha de DHCP",
        "Não confundo 172.16.x.x (privado) com 172.32.x.x (público)",
        "Sei que privado precisa de NAT para acessar a Internet"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classificar os endereços 8.8.8.8, 192.168.0.1, 127.0.0.1 e 169.254.1.5 como público, privado, loopback ou link-local.",
        "dados": "Endereços a classificar: 8.8.8.8, 192.168.0.1, 127.0.0.1 e 169.254.1.5, usando as faixas privadas, loopback e link-local.",
        "conceitos": [
          "Endereço público",
          "Endereço privado (RFC 1918)",
          "Loopback",
          "Link-local (APIPA)"
        ],
        "estrategia": "Verificar cada endereço contra as faixas: 192.168.0.0/16 (privado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local); tudo o que não cai nesses é público.",
        "execucao": [
          "Passo 1: 8.8.8.8 não está em faixa privada/loopback/link-local → público.",
          "Passo 2: 192.168.0.1 está em 192.168.0.0/16 → privado.",
          "Passo 3: 127.0.0.1 está em 127.0.0.0/8 → loopback.",
          "Passo 4: 169.254.1.5 está em 169.254.0.0/16 → link-local."
        ],
        "resultado": "8.8.8.8 público; 192.168.0.1 privado; 127.0.0.1 loopback; 169.254.1.5 link-local.",
        "justificativa": "A classificação segue as faixas definidas: privado (RFC 1918), loopback (127.x), link-local (169.254.x); qualquer outro endereço é público e roteável na Internet.",
        "errosFrequentes": [
          "Achar que todo 192.168.x.x é público",
          "Esquecer que 127.x.x.x inteiro é loopback, não só 127.0.0.1"
        ],
        "variacao": "Classificar 10.50.2.3, 172.30.1.10, 203.0.113.5, 127.0.0.5. Resposta: privado, privado, público, loopback."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um notebook não obtém IP do DHCP e autoatribui 169.254.x.x. Consegue acessar a Internet?",
        "dados": "Notebook sem DHCP, autoatribuiu 169.254.x.x (link-local/APIPA). Pergunta: acessa a Internet?",
        "conceitos": [
          "Link-local 169.254.0.0/16 não é roteável",
          "Não é traduzido por NAT",
          "Indica falha de DHCP"
        ],
        "estrategia": "Endereço 169.254.x.x é link-local: não roteável, não passado por NAT, serve apenas para comunicação no próprio link. Logo não acessa a Internet; indica falha ao obter IP via DHCP.",
        "execucao": [
          "Passo 1: Reconhecer 169.254.x.x como endereço link-local (APIPA).",
          "Passo 2: Confirmar que não houve resposta do DHCP (falha de configuração).",
          "Passo 3: Lembrar que link-local não é roteável e não é traduzido por NAT.",
          "Passo 4: Concluir que o notebook não acessa a Internet; verificar cabo/Wi-Fi, servidor DHCP e configuração."
        ],
        "resultado": "Não — link-local não é roteável. Indica falha de DHCP. Verificar cabo/Wi-Fi, servidor DHCP e configuração.",
        "justificativa": "O endereço 169.254.x.x é autoatribuído e só funciona no link local; não sai da sub-rede nem passa por NAT, portanto não alcança a Internet.",
        "errosFrequentes": [
          "Achar que link-local acessa a Internet normalmente",
          "Esquecer que 169.254.x.x sinaliza ausência de DHCP"
        ],
        "variacao": "Um servidor recebe 169.254.10.20 após reiniciar. Resposta: não obteve DHCP; só comunica no link local; investigar servidor DHCP e conectividade."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'Endereços 172.16.0.0/12 são públicos porque começam com 172.'",
        "dados": "Item C/E. Afirmação: 172.16.0.0/12 públicos por começarem com 172. Fato: 172.16.0.0/12 é privado (172.16.0.0 a 172.31.255.255); 172.32.x.x é público.",
        "conceitos": [
          "Somente 172.16.0.0/12 é privado",
          "172.32.0.0 a 172.255.255.255 é público",
          "Não decidir pelo primeiro octeto sozinho"
        ],
        "estrategia": "A faixa privada do bloco 172 é apenas 172.16.0.0/12 (172.16.0.0 a 172.31.255.255). Endereços como 172.32.5.3 são públicos. Portanto a afirmação é falsa: nem todo 172.x.x.x é privado.",
        "execucao": [
          "Passo 1: Identificar o bloco 172.x.x.x como classe B histórica.",
          "Passo 2: Lembrar que só 172.16.0.0/12 é privado (172.16.0.0 a 172.31.255.255).",
          "Passo 3: Verificar exemplo contrário: 172.32.5.3 está fora de /12 → é público.",
          "Passo 4: Concluir que a afirmação é falsa; o primeiro octeto 172 não decide sozinho."
        ],
        "resultado": "Errado. 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) é privado. Apenas parte dessa faixa é privada; o resto (ex.: 172.32.x.x) é público.",
        "justificativa": "A roteabilidade depende do prefixo completo (/12), não do primeiro octeto. 172.16.0.0/12 é privado; 172.32.0.0 a 172.255.255.255 é público, desmentindo a afirmação.",
        "errosFrequentes": [
          "Decidir público/privado só pelo primeiro octeto (172)",
          "Achar que todo 172.x.x.x é privado"
        ],
        "variacao": "Afirmação: '172.31.255.255 é privado.' Resposta: certo — é o último endereço do bloco privado 172.16.0.0/12. Variação testa o limite do prefixo."
      }
    ]
  },
  "m2-u4-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A máscara de sub-rede separa a parte de rede da parte de host de um endereço IPv4 e é a base de todo cálculo de sub-rede. Concorre ao core de questões de redes: equivalência decimal↔CIDR, máscaras inválidas e tamanho da sub-rede. Sem entender a máscara, o aluno não resolve nem o cálculo de rede/broadcast da unidade seguinte.",
      "preRequisitos": [
        "Estrutura do endereço IPv4 (32 bits, 4 octetos)",
        "Representação binária de um octeto (0-255)"
      ],
      "objetivosObservaveis": [
        "Explicar o papel da máscara (1s = rede, 0s = host)",
        "Converter máscara decimal pontuada em prefixo CIDR e vice-versa",
        "Reconhecer uma máscara inválida (1s não contíguos)",
        "Calcular o tamanho da sub-rede a partir do prefixo"
      ],
      "competencias": [
        "Converter máscara decimal ↔ prefixo com precisão",
        "Identificar máscara inválida em itens C/E de concurso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — usa a máscara para achar rede e broadcast",
        "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — depende da máscara para contar bits emprestados"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Máscara de sub-rede é tema central em redes: cobram conversão máscara↔prefixo e reconhecimento de máscara inválida em itens de múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa, sem estatística de incidência publicada."
      }
    },
    "niveis": {
      "iniciante": "A máscara de sub-rede é um número de 32 bits com 1s contíguos na parte de rede e 0s na parte de host. Ex.: 255.255.255.0 = /24 (24 bits de rede, 8 de host). Onde há 1, o bit pertence à rede; onde há 0, pertence ao host. Máscaras com 1s descontínuos (ex.: 255.0.255.0) são inválidas em IPv4 clássico. A notação decimal pontuada e a CIDR (/24) são formas diferentes de escrever o mesmo prefixo. A máscara determina o tamanho da sub-rede: bits de host = 32 − prefixo; total de endereços = 2^(bits de host). Ex.: /24 → 2^8 = 256 endereços (254 hosts); /30 → 2^2 = 4 endereços (2 hosts).",
      "intermediario": "Conversão prática: /26 = 255.255.255.192 (últimos octetos: 128+64 = 192, dois bits em 1). Para 255.255.255.224, o último octeto 224 = 128+64+32 → 3 bits em 1, logo prefixo = 24+3 = /27, com 2^5 = 32 endereços e 30 hosts. Variação: 255.255.255.192 é /26, com 62 hosts. Regra: cada bit emprestado dobra o número de sub-redes e reduz pela metade os hosts por sub-rede. Máscara inválida quebra o AND bit a bit usado no cálculo de rede.",
      "avancado": "O cálculo de rede usa AND bit a bit entre IP e máscara; o broadcast coloca todos os bits de host em 1; os hosts válidos vão de rede+1 até broadcast−1. A contiguidade dos 1s é requisito da especificação: sem ela, o roteador não consegue separar rede de host por prefixo único. Em VLSM e sumarização, a máscara de cada bloco define o alinhamento; máscara errada sobrepõe sub-redes e causa perda de pacotes. RFC 4632 (CIDR) e RFC 791 (IPv4) definem a reserva de endereço de rede e broadcast.",
      "especialista": "Em arquitetura corporativa, a máscara define o plano de endereçamento: escolha de prefixo por tamanho de LAN/WAN, sumarização em borda e validação de sobreposição de blocos. IPAM e ferramentas de automação (Ansible/Terraform) calculam sub-redes a partir de prefixo base e requisitos. Máscara assimétrica entre dois hosts do mesmo link cria conectividade intermitente. Em concursos de nível superior (analista de redes sênior), a cobrança incide sobre desenho de plano de endereçamento, não sobre cálculo isolado de máscara."
    },
    "comparacoes": [
      {
        "tema": "Máscara decimal pontuada vs. Prefixo CIDR",
        "a": {
          "rotulo": "Máscara decimal pontuada",
          "texto": "Notação 255.255.255.0: quatro octetos de 0 a 255. Cada octeto com 255 = 8 bits de rede; 0 = 8 bits de host. Ex.: 255.255.255.192 tem 26 bits de rede (255.255.255 = 24, mais 2 no último octeto)."
        },
        "b": {
          "rotulo": "Prefixo CIDR",
          "texto": "Notação /26: número de bits de rede contíguos a partir da esquerda. /26 = 26 bits de rede, 6 bits de host. Equivalente a 255.255.255.192. Compacta e usada em roteamento classless (RIPv2, OSPF, BGP)."
        },
        "diferencaGabarito": "São a mesma informação escrita de formas diferentes. Em questão de concurso, '255.255.255.192' e '/26' são equivalentes; responder que são coisas diferentes é erro de gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A máscara 255.255.255.128 (/25) permite 128 hosts.",
        "porqueErrada": "Esquece de subtrair os dois endereços reservados (rede e broadcast). /25 tem 7 bits de host: 2^7 = 128 endereços totais, menos 2 = 126 hosts utilizáveis.",
        "versaoCorreta": "/25 permite 126 hosts utilizáveis (128 endereços − 2 reservados). Rede e broadcast não podem ser atribuídos a interfaces."
      },
      {
        "afirmacaoEquivocada": "Máscara com 1s descontínuos, como 255.0.255.0, é válida em IPv4.",
        "porqueErrada": "A máscara de sub-rede exige 1s contíguos à esquerda. 255.0.255.0 tem 1s separados por 0s, o que quebra a separação rede/host por prefixo e é inválida em IPv4 clássico.",
        "versaoCorreta": "Máscaras válidas têm 1s contíguos, como /24 (255.255.255.0) e /25 (255.255.255.128); 255.0.255.0, com 1s descontínuos, é inválida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Máscara de sub-rede (32 bits, 1s = rede, 0s = host)",
        "Notação decimal pontuada (255.255.255.0)",
        "Prefixo CIDR (/24)",
        "Máscara inválida (1s não contíguos)",
        "Tamanho da sub-rede (2^(bits de host) endereços)"
      ],
      "regras": [
        "1s contíguos à esquerda; máscara não contígua é inválida",
        "Hosts utilizáveis = 2^(32−prefixo) − 2",
        "Rede = IP AND máscara; broadcast = rede com bits de host = 1"
      ],
      "comparacoes": [
        "255.255.255.0 (máscara decimal) = /24 (prefixo CIDR)",
        "A máscara válida tem 1s contíguos, enquanto a máscara inválida apresenta 1s descontínuos, o que impede a separação entre rede e host."
      ],
      "fluxos": [
        "Do prefixo, obtém-se a máscara decimal, conta-se os bits de host, calcula-se o total de endereços e subtrai-se 2 para chegar aos hosts utilizáveis."
      ],
      "excecoes": [
        "/31 (RFC 3021): 2 hosts em link ponto-a-ponto, sem rede/broadcast reservados",
        "/32: host único (loopback), máscara 255.255.255.255"
      ],
      "palavrasChave": [
        "máscara de sub-rede",
        "CIDR",
        "prefixo",
        "bits de rede",
        "bits de host",
        "máscara inválida",
        "sub-rede",
        "hosts utilizáveis"
      ],
      "checklist": [
        "Converto máscara decimal ↔ prefixo CIDR (/24 a /30)",
        "Identifico máscara inválida (1s não contíguos)",
        "Calculo hosts = 2^(bits de host) − 2",
        "Reconheço que rede e broadcast são reservados"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Converter a máscara de sub-rede 255.255.255.0 para a notação de prefixo CIDR, informando bits de rede e de host.",
        "dados": "Máscara decimal pontuada: 255.255.255.0 (três octetos 255 e um octeto 0, ou seja, 24 bits em 1 seguidos de 8 bits em 0).",
        "conceitos": [
          "Conversão máscara decimal ↔ prefixo CIDR",
          "Contagem de bits em 1"
        ],
        "estrategia": "Contar os bits em 1 de cada octeto: 255 = 8 bits. Três octetos 255 dão 24 bits; o octeto 0 dá 0 bits. Total = 24 bits de rede → prefixo /24.",
        "execucao": [
          "Passo 1: 255 = 8 bits em 1 (11111111).",
          "Passo 2: 255.255.255 = 8+8+8 = 24 bits em 1.",
          "Passo 3: O último octeto 0 contribui 0 bits.",
          "Passo 4: Prefixo = 24 → /24."
        ],
        "resultado": "255.255.255.0 equivale ao prefixo CIDR /24 (24 bits de rede e 8 bits de host).",
        "justificativa": "Cada octeto 255 contribui 8 bits de rede; três octetos 255 somam 24. O prefixo /24 equivale exatamente à máscara 255.255.255.0, conforme a contagem de bits contíguos em 1.",
        "errosFrequentes": [
          "Contar só os octetos não-zero (3) em vez dos bits (24)",
          "Esquecer que 255 = 8 bits, não 1 bit"
        ],
        "variacao": "Converter 255.255.255.128 para CIDR. 255.255.255 = 24 bits, mais 128 = 1 bit → /25."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dado o prefixo CIDR /27, determinar a máscara decimal pontuada equivalente e a quantidade de hosts por sub-rede.",
        "dados": "Prefixo: /27 (27 bits de rede, 5 bits de host; equivalente a 255.255.255.224 no último octeto: 128+64+32).",
        "conceitos": [
          "Prefixo CIDR → máscara decimal",
          "Bits de host = 32 − prefixo"
        ],
        "estrategia": "Os 27 bits de rede preenchem três octetos cheios (24) mais 3 bits no quarto octeto. 128+64+32 = 224. Máscara = 255.255.255.224. Hosts = 2^5 − 2 = 30.",
        "execucao": [
          "Passo 1: 27 bits = 3 octetos cheios (24) + 3 bits no 4º octeto.",
          "Passo 2: Os 3 bits mais significativos do 4º octeto são 128+64+32 = 224.",
          "Passo 3: Máscara = 255.255.255.224.",
          "Passo 4: Bits de host = 32−27 = 5; hosts = 2^5 − 2 = 30."
        ],
        "resultado": "A máscara decimal 255.255.255.224 corresponde a /27 e fornece 30 hosts por sub-rede, pois 32 endereços menos os 2 reservados (rede e broadcast) resultam em 30.",
        "justificativa": "/27 significa 27 bits de rede; os 3 bits extras além de 24 preenchem 128, 64 e 32, somando 224 no último octeto. Os 5 bits de host restantes dão 32 endereços, menos 2 reservados = 30 hosts.",
        "errosFrequentes": [
          "Responder 255.255.255.32 (confunde valor do bit com posição)",
          "Esquecer o −2 e responder 32 hosts"
        ],
        "variacao": "Dado /28, qual a máscara e quantos hosts? /28 = 255.255.255.240 (4 bits em 1: 128+64+32+16 = 240), hosts = 2^4 − 2 = 14."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'A máscara 255.255.255.128 (/25) permite 128 hosts utilizáveis.'",
        "dados": "Máscara /25 = 255.255.255.128; 7 bits de host (32 − 25 = 7); endereços totais = 2^7 = 128.",
        "conceitos": [
          "Hosts utilizáveis = 2^(bits de host) − 2",
          "Endereços reservados: rede e broadcast"
        ],
        "estrategia": "Calcular endereços totais = 2^7 = 128. Subtrair rede (bits de host = 0) e broadcast (bits de host = 1): 128 − 2 = 126 hosts. A afirmação omite a subtração dos reservados.",
        "execucao": [
          "Passo 1: /25 → 7 bits de host.",
          "Passo 2: Endereços totais = 2^7 = 128.",
          "Passo 3: Reservados = rede + broadcast = 2.",
          "Passo 4: Hosts utilizáveis = 128 − 2 = 126."
        ],
        "resultado": "Errado. /25 permite 126 hosts utilizáveis, não 128 (128 endereços totais menos 2 reservados: rede e broadcast).",
        "justificativa": "A fórmula de hosts é 2^(bits de host) − 2, pois rede e broadcast são reservados (RFC 791). 2^7 − 2 = 126. Afirmar 128 ignora os dois endereços não atribuíveis a hosts.",
        "errosFrequentes": [
          "Responder 2^7 = 128 sem subtrair os reservados",
          "Assumir que rede e broadcast são atribuíveis"
        ],
        "variacao": "Em /30, quantos hosts? 2^2 − 2 = 2 (ideal para link ponto-a-ponto). Em /31 (RFC 3021), 2 hosts sem reserva."
      }
    ]
  },
  "m2-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O cálculo de endereço de rede e broadcast via CIDR é habilidade técnica de maior peso no conteúdo programático de redes. Aparece em questões de dimensionamento de sub-redes, validação de endereçamento, troubleshooting de conectividade e planejamento de VLSM. Dominar a operação AND bit a bit e a identificação de bits de host permite resolver qualquer variação: dado IP/máscara achar rede/broadcast/hosts; verificar se dois IPs estão na mesma sub-rede.",
      "preRequisitos": [
        "Representação binária de números (8 bits = 0-255)",
        "Operação lógica AND bit a bit",
        "Estrutura do endereço IPv4 (32 bits, 4 octetos)",
        "Noção de máscara de sub-rede (1s contíguos = rede, 0s = host)"
      ],
      "objetivosObservaveis": [
        "Converter máscara decimal pontuada para prefixo CIDR e vice-versa (ex.: 255.255.255.192 = /26)",
        "Calcular endereço de rede: IP AND máscara (bit a bit) em cada octeto",
        "Calcular endereço de broadcast: endereço de rede com todos os bits de host = 1",
        "Determinar intervalo de hosts válidos: rede+1 até broadcast-1",
        "Calcular quantidade de hosts: 2^(32-prefixo) - 2 (exceto /31 e /32 per RFC 3021)",
        "Validar se um IP pertence a uma sub-rede: comparar rede calculada do IP com rede da sub-rede"
      ],
      "competencias": [
        "Raciocínio binário: operar em base 2 para decisões de rede",
        "Atenção a detalhes: um bit errado muda toda a sub-rede",
        "Resolução de problemas sob pressão de tempo (simulado)",
        "Verificação de plausibilidade: conferir se resultado faz sentido (ex.: broadcast > rede)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t1-s3 (Máscaras de sub-rede) — base para conversão decimal↔CIDR",
        "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — extensão natural: bits emprestados",
        "m2-u4-t2-s3 (Intervalos de hosts e validação) — aplicação direta do cálculo de rede"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Cálculo CIDR é tópico 'core' de redes e integrante do conteúdo programático de TI. cobra itens C/E sobre 'o broadcast de X/Y é Z' e 'IP A pertence à sub-rede B'. e apresentam cenários de dimensionamento (ex.: 'empresa precisa de 300 hosts, qual menor prefixo?'). testa conversão máscara↔prefixo e identificação de rede/broadcast. Questões numéricas sem calculadora exigem agilidade mental com potências de 2 e máscaras comuns (/24 a /30)."
      }
    },
    "niveis": {
      "iniciante": "CIDR (Classless Inter-Domain Routing): notação IP/prefixo (ex.: 192.168.1.0/24). Endereço de rede = IP AND máscara (bit a bit). Broadcast = endereço de rede com todos os bits de host em 1. Hosts válidos = rede+1 até broadcast-1. Exemplo: IP 192.168.1.130/25. Máscara /25 = 255.255.255.128. Rede = 192.168.1.128 (130 AND 128 = 128). Broadcast = 192.168.1.255. Hosts: 192.168.1.129 a 192.168.1.254 (126 hosts). Máscaras comuns: /24=255.255.255.0 (254 hosts), /25=255.255.255.128 (126), /26=255.255.255.192 (62), /27=255.255.255.224 (30), /28=255.255.255.240 (14), /29=255.255.255.248 (6), /30=255.255.255.252 (2). Potências de 2: 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128, 2^8=256. Regra prática: hosts = 2^(bits de host) - 2. Bits de host = 32 - prefixo.",
      "intermediario": "No nível intermediário, o cálculo torna-se mental e bidirecional. Dado IP 172.16.30.5/20: máscara /20 = 255.255.240.0. Terceiro octeto: 30 (00011110) AND 240 (11110000) = 16 (00010000). Rede = 172.16.16.0. Broadcast = 172.16.31.255 (próxima rede .32.0 menos 1). Hosts: 172.16.16.1 a 172.16.31.254 (4094 hosts). Pegadinha clássica: IP 192.168.1.100/25 — rede não é .0, é .128 (100 AND 128 = 128). Sempre recalcular a rede do IP com a máscara; nunca assumir pelo 'último octeto'. Validação de pertinência: dois IPs estão na mesma sub-rede se (IP1 AND máscara) == (IP2 AND máscara). Ex.: 10.0.5.193/26 e 10.0.5.200/26 — ambos dão rede 10.0.5.192 → mesma sub-rede. /31 (RFC 3021): 2 hosts sem rede/broadcast (links ponto-a-ponto). /32: host único (loopback).",
      "avancado": "Nível avançado aborda cenários compostos e exceções. (1) VLSM: alocação sequencial exige calcular rede/broadcast de cada sub-rede e garantir não-sobreposição. Ex.: 192.168.10.0/24 → LAN A /26 (0-63), LAN B /27 (64-95), WAN /30 (96-99). Erro comum: alocar menor primeiro fragmenta o espaço. (2) Sumarização: dado blocos 192.168.0.0/24 a 192.168.7.0/24, achar prefixo comum: 8 redes = 2^3 → prefixo 24-3 = /21. Rede agregada = 192.168.0.0/21. Validação: todos os blocos devem estar contidos no agregado. (3) IPv6: prefixo /64 por sub-rede (SLAAC). Cálculo análogo mas em 128 bits; ferramentas (ipcalc, sipcalc) recomendadas. (4) Troubleshooting: sintoma 'ping funciona mas aplicação falha' → verificar MTU, fragmentação, não endereçamento. Sintoma 'dois hosts não se veem' → conferir máscara de cada um (asymmetric mask). (5) RFC 3021 (/31) e RFC 4632 (CIDR) são referências normativas; em prova, /31 = 2 hosts válidos para P2P.",
      "especialista": "No nível especialista, o cálculo CIDR integra arquitetura de rede e automação. (a) IPAM (IP Address Management): alocação hierárquica com validação de sobreposição, sumarização automática em borda, auditoria de utilização (%), recuperação de blocos órfãos. (b) Automação: Ansible/Terraform geram sub-redes a partir de prefixo base + requisitos (ex.: '3 AZs × 2 tiers × /24'). Validação de plano antes de apply. (c) BGP: agregação de anúncios (aggregate-address) com attribute suppression; risco de black hole se agregado anunciar blocos não alocados. (d) Segurança: IP spoofing prevention (uRPF strict mode exige que IP fonte pertença à sub-rede da interface). (e) Troubleshooting avançado: asymmetric routing mascara problemas de máscara; ICMP redirect revela gateway mal configurado. (f) Referências: RFC 4632 (CIDR), RFC 3021 (/31), RFC 1918 (privados), RFC 791 (IPv4). Em concursos de nível superior (analista de redes sênior, auditor de TI), a cobrança incide sobre desenho de plano de endereçamento corporativo, não cálculo isolado."
    },
    "comparacoes": [
      {
        "tema": "Máscara decimal pontuada vs. Prefixo CIDR vs. Classes históricas (A/B/C)",
        "a": {
          "rotulo": "Classes históricas (Classful)",
          "texto": "Classe A: 0.0.0.0 a 127.255.255.255, máscara /8 (255.0.0.0), ~16M hosts. Classe B: 128.0.0.0 a 191.255.255.255, máscara /16 (255.255.0.0), ~65k hosts. Classe C: 192.0.0.0 a 223.255.255.255, máscara /24 (255.255.255.0), 254 hosts. Rígido, desperdiça endereços (ex.: org com 500 hosts precisa Classe B = 65k). Obsoleto desde 1993 (RFC 1518/1519 → CIDR)."
        },
        "b": {
          "rotulo": "CIDR (Classless Inter-Domain Routing)",
          "texto": "Prefixo variável /0 a /32. Máscara = 1s contíguos à esquerda. Permite alocação exata: 500 hosts → /23 (510 hosts). Notação: IP/prefixo (192.168.1.0/24). Roteamento classless carrega máscara no pacote de roteamento (RIPv2, OSPF, BGP). Sumarização e VLSM só funcionam com CIDR."
        },
        "diferencaGabarito": "Em prova: 'A classe do endereço 172.16.0.0 é B, logo sua máscara é 255.255.0.0' — FALSO se a rede usa CIDR (pode ser /20, /24, etc.). A classe histórica define apenas o range do primeiro octeto; a máscara real vem do prefixo CIDR. Confundir classe com máscara atual é erro conceitual grave. adora esse item C/E."
      },
      {
        "tema": "Endereço de rede vs. Primeiro host vs. Broadcast vs. Último host",
        "a": {
          "rotulo": "Endereço de rede (Network ID)",
          "texto": "Todos os bits de host = 0. Identifica a sub-rede. NÃO pode ser atribuído a interface. Ex.: 192.168.1.0/24 → rede = 192.168.1.0."
        },
        "b": {
          "rotulo": "Primeiro host utilizável",
          "texto": "Rede + 1. Primeiro endereço atribuível. Ex.: 192.168.1.1/24."
        },
        "diferencaGabarito": "A pegadinha clássica: 'Quantos hosts em /24?' Resposta certa: 254 (256 - 2). Erro: 256 (esquece rede e broadcast) ou 255 (subtrai só um). Outra: 'O endereço 10.0.0.0/8 pode ser usado como IP de servidor?' — NÃO, é endereço de rede. Em /30 (P2P): rede .0, hosts .1 e .2, broadcast .3. Em /31: sem rede/broadcast, hosts .0 e .1 (RFC 3021)."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O endereço de rede pode ser atribuído a um host (interface de servidor, roteador, etc.).",
        "porqueErrada": "O endereço de rede (todos os bits de host = 0) identifica a sub-rede como um todo no roteamento. Atribuí-lo a uma interface quebraria a entrega de pacotes: o roteador não saberia distinguir 'pacote para a sub-rede' de 'pacote para este host'. O mesmo vale para o broadcast (todos bits de host = 1): é endereço de destinatário 'todos na sub-rede', não de um host específico.",
        "versaoCorreta": "Endereço de rede (host bits = 0) e broadcast (host bits = 1) são reservados pela especificação IPv4 (RFC 791, RFC 1812, RFC 4632) e não podem ser atribuídos a interfaces. Hosts válidos = rede+1 até broadcast-1. Exceção: /31 (RFC 3021) para links P2P não tem rede/broadcast reservados; /32 é host único (loopback)."
      },
      {
        "afirmacaoEquivocada": "Em qualquer sub-rede /24, o endereço .0 é sempre a rede e .255 sempre o broadcast.",
        "porqueErrada": "Isso só vale se a sub-rede for /24 alinhada em fronteira de octeto (ex.: 192.168.1.0/24). Em /23 (ex.: 192.168.0.0/23), a rede é 192.168.0.0, broadcast é 192.168.1.255, e 192.168.1.0 é um host válido! Em /25 (ex.: 192.168.1.128/25), a rede é .128, broadcast .255, e .0 é host de outra sub-rede. A regra é: calcule SEMPRE com a máscara do prefixo em questão.",
        "versaoCorreta": "Rede e broadcast dependem do prefixo, não do valor do último octeto. Para qualquer IP/prefixo: rede = IP AND máscara; broadcast = rede com host bits = 1. Nunca assuma pelo 'último octeto'; recalcule."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "CIDR: notação IP/prefixo, máscara = 1s contíguos à esquerda",
        "Endereço de rede = IP AND máscara (bit a bit) — identifica a sub-rede",
        "Broadcast = rede com todos bits de host = 1 — destino 'todos na sub-rede'",
        "Hosts válidos = rede+1 até broadcast-1 — total = 2^(32-prefixo) - 2",
        "Validação de pertinência: (IP AND máscara) == rede da sub-rede",
        "Máscara decimal ↔ prefixo: /24=255.255.255.0, /25=255.255.255.128, /26=255.255.255.192, /27=255.255.255.224, /28=255.255.255.240, /29=255.255.255.248, /30=255.255.255.252"
      ],
      "regras": [
        "Regra do AND: rede = IP & máscara (faça por octeto: 130 & 128 = 128)",
        "Regra do -2: hosts utilizáveis = 2^(bits de host) - 2 (exceto /31, /32)",
        "Regra da não-assunção: nunca assuma rede/broadcast pelo último octeto; recalcule",
        "Regra da pertinência: mesmo prefixo + mesma rede calculada = mesma sub-rede"
      ],
      "comparacoes": [
        "Classe histórica (A/B/C) vs. CIDR: classe define range do 1º octeto; CIDR define máscara real",
        "O endereço de rede e o broadcast são reservados, enquanto o primeiro host e o último host são endereços utilizáveis para interfaces da sub-rede.",
        "A máscara decimal 255.255.255.192 equivale ao prefixo /26, que define um bloco de 64 endereços e 62 hosts utilizáveis."
      ],
      "fluxos": [
        "A partir do IP e do prefixo, converte-se o prefixo em máscara decimal, aplica-se o AND bit a bit por octeto, obtém-se o endereço de rede e o broadcast e, por fim, lista-se o intervalo de hosts",
        "Dada a rede original e a nova máscara, calcula-se os bits emprestados pela diferença entre os prefixos, deriva-se o número de sub-redes como 2 elevada aos bits emprestados e encontra-se os hosts por sub-rede como 2 elevada aos bits de host restantes, menos 2"
      ],
      "excecoes": [
        "/31 (RFC 3021): 2 hosts válidos em link P2P, sem endereços de rede/broadcast reservados",
        "/32: host único (loopback, rota de host), máscara 255.255.255.255",
        "IPv6: /64 por sub-rede (SLAAC), cálculo análogo em 128 bits"
      ],
      "palavrasChave": [
        "CIDR",
        "prefixo",
        "máscara de sub-rede",
        "endereço de rede",
        "broadcast",
        "hosts válidos",
        "operação AND",
        "bit a bit",
        "RFC 4632",
        "RFC 3021",
        "RFC 1918",
        "VLSM",
        "sumarização"
      ],
      "checklist": [
        "Converto máscara decimal ↔ prefixo CIDR mentalmente (/24 a /30)",
        "Calculo rede, broadcast e hosts de qualquer IP/prefixo em < 60 segundos",
        "Identifico a pegadinha '.0/.255 são sempre rede/broadcast' e sei contrapor com /23 ou /25",
        "Aplico a regra do -2 para hosts utilizáveis e conheço as exceções /31 e /32",
        "Valido se dois IPs estão na mesma sub-rede comparando (IP & máscara)",
        "Resolvo questões de dimensionamento: 'N hosts → menor prefixo' (ex.: 300 hosts → /23)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular rede, broadcast e hosts válidos do endereço IPv4 10.0.5.200/26, informando o intervalo completo.",
        "dados": "IP: 10.0.5.200. Prefixo: /26. Máscara: /26 = 26 bits de 1 = 255.255.255.192 (11111111.11111111.11111111.11000000). Bloco no último octeto = 2^(32-26) = 64 endereços.",
        "conceitos": [
          "Conversão prefixo → máscara decimal",
          "Operação AND bit a bit por octeto",
          "Identificação de bits de host (últimos 6 bits no /26)",
          "Cálculo de broadcast: rede + tamanho_bloco - 1"
        ],
        "estrategia": "Converter /26 em máscara decimal (255.255.255.192). Aplicar AND bit a bit entre IP e máscara em cada octeto. Os 3 primeiros octetos: 10 & 255 = 10, 0 & 255 = 0, 5 & 255 = 5. Último octeto: 200 (11001000) & 192 (11000000) = 192 (11000000). Rede = 10.0.5.192. Broadcast = rede + 64 - 1 = 10.0.5.255. Hosts = 10.0.5.193 a 10.0.5.254 (62 hosts).",
        "execucao": [
          "Passo 1: Máscara /26 = 255.255.255.192. (Decore: /24=0, /25=128, /26=192, /27=224, /28=240, /29=248, /30=252 no último octeto não-zero).",
          "Passo 2: aplica-se o AND bit a bit por octeto. No octeto 1, 10 AND 255 resulta em 10; no octeto 2, 0 AND 255 resulta em 0; no octeto 3, 5 AND 255 resulta em 5; e no octeto 4, 200 AND 192 resulta em 192 (200 é 11001000, 192 é 11000000, e o resultado é 11000000, ou seja, 192).",
          "Passo 3: Rede = 10.0.5.192. Tamanho do bloco = 2^(32-26) = 2^6 = 64 endereços.",
          "Passo 4: Broadcast = 10.0.5.192 + 64 - 1 = 10.0.5.255. (Ou: rede com bits de host=1 → 192 | 63 = 255).",
          "Passo 5: Hosts válidos = 10.0.5.193 a 10.0.5.254. Total = 64 - 2 = 62 hosts."
        ],
        "resultado": "Rede: 10.0.5.192/26. Broadcast: 10.0.5.255. Hosts válidos: 10.0.5.193 a 10.0.5.254 (62 hosts).",
        "justificativa": "A operação AND bit a bit é a definição formal de endereço de rede (RFC 4632). O prefixo /26 indica 26 bits de rede, 6 bits de host. O último octeto da máscara (192 = 11000000) preserva os 2 bits mais significativos (parte de rede) e zera os 6 bits menos significativos (parte de host). 200 (11001000) & 192 (11000000) = 192 (11000000) mantém os 2 bits de rede do IP e zera os 6 bits de host. O bloco de 64 endereços no último octeto (múltiplo de 64: 0, 64, 128, 192) confirma alinhamento correto. Broadcast é o último endereço do bloco. A subtração de 2 (rede e broadcast) é regra geral IPv4 (RFC 791, RFC 1812).",
        "errosFrequentes": [
          "Esquecer de converter /26 para máscara decimal e tentar fazer AND com '26'",
          "Calcular broadcast como 10.0.5.191 (rede - 1) em vez de rede + bloco - 1",
          "Responder 64 hosts (esquecer -2) ou 63 hosts (subtrair só rede)",
          "Assumir que rede é 10.0.5.0 por ser '/26' (confunde com /24)"
        ],
        "variacao": "Dado 172.16.100.50/27, calcule-se a rede, o broadcast e os hosts. A máscara /27 é 255.255.255.224, que define um bloco de 32 endereços. Fazendo 50 AND 224 (50 é 00110010 e 224 é 11100000), obtém-se 00100000, ou seja, 32. A rede é 172.16.100.32, o broadcast é 172.16.100.63 e os hosts válidos vão de 33 a 62, totalizando 30 hosts. Testa-se o alinhamento em blocos de 32."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dado 172.16.30.5/20, determinar a sub-rede, o broadcast e o intervalo de hosts válidos.",
        "dados": "IP: 172.16.30.5. Prefixo: /20. Máscara: /20 = 255.255.240.0 (20 bits de 1: 11111111.11111111.11110000.00000000). O terceiro octeto é onde a máscara muda (240 = 11110000). Bloco no 3º octeto = 16 (256-240).",
        "conceitos": [
          "Máscara com octeto não-255 nem 0 (240 no 3º octeto)",
          "Bloco de tamanho 16 no terceiro octeto",
          "Cálculo de broadcast atravessando octetos (31.255)",
          "Grande quantidade de hosts (4094)"
        ],
        "estrategia": "Focar no octeto 'interessante' (3º octeto, onde máscara ≠ 255 e ≠ 0). Máscara 240 = bloco 16. IP 3º octeto = 30. 30 & 240: 30=00011110, 240=11110000 → 00010000 = 16. Rede = 172.16.16.0. Próxima rede = 172.16.32.0. Broadcast = 172.16.31.255. Hosts: 172.16.16.1 a 172.16.31.254. Total = 2^(32-20) - 2 = 4094 hosts.",
        "execucao": [
          "Passo 1: a máscara /20 é 255.255.240.0. Nos octetos 1 e 2, o valor 255 mantém a rede fixa. No octeto 3, 240 forma um bloco de 16 endereços. No octeto 4, o valor 0 indica a parte de host.",
          "Passo 2: Octetos 1-2: 172 & 255 = 172, 16 & 255 = 16. Octeto 3: 30 & 240. 30=00011110, 240=11110000 → 00010000=16. Octeto 4: 5 & 0 = 0.",
          "Passo 3: Rede = 172.16.16.0. Bloco no 3º octeto = 16 (múltiplos: 0, 16, 32, 48...). 30 está no bloco 16-31.",
          "Passo 4: Próxima rede = 172.16.32.0. Broadcast = 172.16.32.0 - 1 = 172.16.31.255. (O -1 'estoura' do 3º para o 4º octeto: 32.0 - 1 = 31.255).",
          "Passo 5: Hosts = 172.16.16.1 a 172.16.31.254. Total = 2^(32-20) - 2 = 4096 - 2 = 4094."
        ],
        "resultado": "Rede: 172.16.16.0/20. Broadcast: 172.16.31.255. Hosts: 172.16.16.1 a 172.16.31.254 (4094 hosts).",
        "justificativa": "O /20 coloca a fronteira de rede no 3º octeto (bits 17-20). A máscara 240 (11110000) cria blocos de 16 no 3º octeto. A operação AND isola os 4 bits de rede do 3º octeto (30 → 16). O broadcast calculado como 'próxima rede - 1' funciona para qualquer prefixo e evita erro de 'setar bits de host = 1' manualmente em múltiplos octetos. O resultado 31.255 confirma: 3º octeto 31 (último do bloco 16-31), 4º octeto 255 (todos bits de host = 1). Quantidade 4094 = 2^12 - 2 (12 bits de host) valida a contagem.",
        "errosFrequentes": [
          "Calcular broadcast como 172.16.16.255 (só muda último octeto, ignora 3º octeto)",
          "Achar que 30 & 240 = 30 (esquece que 240 zera os 4 bits baixos)",
          "Responder hosts = 4096 (esquece -2)",
          "Assumir rede 172.16.0.0 por ser 'Classe B' (ignora CIDR)"
        ],
        "variacao": "IP 192.168.100.200/21. Máscara /21 = 255.255.248.0 (bloco 8 no 3º octeto). 200 & 248: 200=11001000, 248=11111000 → 11001000=200. Rede = 192.168.200.0. Broadcast = 192.168.207.255. Hosts: 200.1 a 207.254 (2046 hosts). Testa: bloco 8, alinhamento em múltiplos de 8, broadcast atravessa 3º octeto."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'O endereço de rede pode ser atribuído a um host (interface de servidor ou roteador).'",
        "dados": "Cenário: administrador configura interface de servidor com IP 192.168.1.0/24 alegando que 'é o primeiro endereço da rede'.",
        "conceitos": [
          "Endereço de rede (network ID) = identificador da sub-rede no roteamento",
          "Bits de host todos zerados = endereço reservado",
          "Quebra de entrega de pacotes se atribuído a host",
          "RFC 791, RFC 1812, RFC 4632 proíbem atribuição"
        ],
        "estrategia": "Explicar por que o endereço de rede é reservado: (1) função no roteamento (identifica a sub-rede como destino agregado), (2) ambiguidade se atribuído a host (roteador não distingue 'para a rede' de 'para o host'), (3) broadcast análogo (todos 1s) também reservado. Demonstrar com exemplo de tabela de roteamento: rota 192.168.1.0/24 via interface X. Se host tem .0, pacote para 192.168.1.0 — vai para o host ou é 'para a rede'?",
        "execucao": [
          "Passo 1: Definir endereço de rede: resultado de IP & máscara, bits de host = 0. Em 192.168.1.0/24, identifica a sub-rede 192.168.1.0/24 nas tabelas de roteamento.",
          "Passo 2: Mostrar conflito: rota agregada '192.168.1.0/24' existe na tabela de roteamento. Se host usa .0, pacote destinado a 192.168.1.0 tem dois destinos possíveis: a rota agregada (encaminha para gateway) ou o host local. Ambiguidade inaceitável.",
          "Passo 3: Analogia com broadcast (192.168.1.255): bits de host = 1. Significa 'todos os hosts desta sub-rede'. Atribuí-lo a um host quebraria a semântica de 'entrega a todos'.",
          "Passo 4: cite as RFC 791 (IPv4), RFC 1812 (roteadores) e RFC 4632 (CIDR), segundo as quais o endereço de rede (todos os bits de host em zero) e o endereço de broadcast (todos os bits de host em um) são reservados. As exceções documentadas são o /31 (RFC 3021) e o /32."
        ],
        "resultado": "Configurar 192.168.1.0/24 em interface quebra roteamento. O correto: usar 192.168.1.1 a 192.168.1.254. Em /30 P2P: .1 e .2 (rede .0, broadcast .3 reservados). Em /31: .0 e .1 (sem reserva).",
        "justificativa": "A reserva de endereço de rede e broadcast não é arbitrariedade; é requisito arquitetural do IPv4 para roteamento sem ambiguidade. A tabela de roteamento usa o endereço de rede como chave de agregação (prefixo). Se um host 'rouba' esse endereço, a agregação falha e pacotes para a sub-rede podem ser mal entregues. O mesmo princípio vale para o broadcast: é endereço de destino especial (entrega a todos), não endereço de host. Em provas, itens C/E como 'O endereço de rede pode ser usado como IP de servidor' são SEMPRE falsos. A exceção /31 (RFC 3021) é específica para links ponto-a-ponto onde não há broadcast nem necessidade de identificação de rede distinta dos dois hosts.",
        "errosFrequentes": [
          "Confundir 'primeiro endereço utilizável' (rede+1) com 'endereço de rede' (rede+0)",
          "Achar que em /24 o .0 é utilizável porque 'sobra espaço'",
          "Não conhecer a exceção /31 e marcar item sobre /31 como falso",
          "Aplicar a regra a IPv6 da mesma forma (IPv6 tem ::/128 loopback, mas ::1 é válido; sub-redes /64 não reservam primeiro/último da mesma forma)"
        ],
        "variacao": "Item C/E: 'Em uma sub-rede 10.0.0.0/30, os endereços utilizáveis para hosts são 10.0.0.1 e 10.0.0.2.' — CERTO. Rede = 10.0.0.0, broadcast = 10.0.0.3, hosts = .1 e .2. Variação testa: em /30 (P2P clássico), ainda há rede e broadcast reservados; só /31 remove a reserva. Em /32: só 1 host (loopback), sem rede/broadcast separados."
      }
    ]
  },
  "m2-u4-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calcular o número de sub-redes e de hosts por sub-rede é central em endereçamento IPv4. A prova cobra as fórmulas (sub-redes = 2^bits emprestados; hosts = 2^bits de host − 2) e os casos especiais (/30, /31, /32). Sem isso, o aluno não consegue dimensionar redes, escolher o prefixo adequado a uma demanda de hosts nem responder itens C/E sobre quantidade de sub-redes.",
      "preRequisitos": [
        "Máscara de sub-rede e prefixo CIDR",
        "Bits de rede vs. bits de host (32 − prefixo)"
      ],
      "objetivosObservaveis": [
        "Calcular o número de sub-redes a partir de um prefixo original e um novo prefixo",
        "Calcular o número de hosts por sub-rede a partir do prefixo",
        "Interpretar bits emprestados da parte de host para a parte de rede",
        "Reconhecer casos especiais /30, /31 e /32"
      ],
      "competencias": [
        "Aplicar as fórmulas de sub-redes e hosts com aritmética correta",
        "Escolher o prefixo adequado para uma demanda de hosts dada"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base: prefixo e máscara",
        "m2-u4-t2-s3 (Intervalos de hosts e validação) — usa a contagem de hosts para validar endereços"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Quantidade de sub-redes e hosts é tema central do conteúdo programático de redes: cobram as fórmulas e casos especiais em múltipla escolha e C/E, sem exigir estatística de incidência publicada. Classificação é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "Fórmulas: número de sub-redes = 2^(bits emprestados) (quando se divide uma rede original). Número de hosts por sub-rede = 2^(bits de host) − 2 (subtrai rede e broadcast). Bits de host = 32 − prefixo. Exemplo: rede 192.168.0.0/16 dividida em /24: bits emprestados = 8, sub-redes = 2^8 = 256, hosts por sub-rede = 2^8 − 2 = 254. Para /30: hosts = 2^2 − 2 = 2 (ideal para links ponto-a-ponto). Para /31 (RFC 3021): 2 hosts sem rede/broadcast (usado em links ponto-a-ponto). /32: um único host (loopback/rota de host).",
      "intermediario": "Na divisão de uma rede original, cada bit emprestado dobra o número de sub-redes e reduz pela metade os hosts por sub-rede. Exemplo: 192.168.0.0/16 dividido em /20 empresta 4 bits → 2^4 = 16 sub-redes, cada uma com 2^(32−20) − 2 = 4094 hosts. Para decidir o prefixo a partir de uma demanda de hosts, teste prefixos sucessivos: 100 hosts → /25 (126 hosts), 300 hosts → /23 (510 hosts), 1000 hosts → /22 (1022 hosts). Sempre arredonde para o menor prefixo que comporte a demanda. Exceções: /31 (2 hosts P2P, sem reserva) e /32 (1 host).",
      "avancado": "Cenários compostos com VLSM: alocação sequencial exige calcular rede/broadcast de cada sub-rede e garantir não-sobreposição. Ex.: 192.168.10.0/24 → LAN A /26 (62 hosts), LAN B /27 (30 hosts), WAN /30 (2 hosts). Ordem importa: alocar blocos maiores primeiro evita fragmentação. Sumarização: blocos 192.168.0.0/24 a 192.168.7.0/24 (8 redes) → prefixo comum = 24 − 3 = /21, agregado 192.168.0.0/21. Valide que todos os blocos estejam contidos no agregado. IPv6 usa /64 por sub-rede (SLAAC), cálculo análogo em 128 bits. RFC 3021 (/31) e RFC 4632 (CIDR) são referências normativas.",
      "especialista": "Em arquitetura corporativa, o dimensionamento integra IPAM: alocação hierárquica, validação de sobreposição, sumarização em borda, auditoria de utilização (%) e recuperação de blocos órfãos. Automação (Ansible/Terraform) gera sub-redes a partir de prefixo base + requisitos (ex.: '3 AZs × 2 tiers × /24'). BGP agrega anúncios (aggregate-address) com risco de black hole se anunciar blocos não alocados. Segurança: uRPF strict mode exige IP fonte na sub-rede da interface. Em concursos de nível superior (analista sênior, auditor de TI), a cobrança incide sobre desenho de plano de endereçamento corporativo, não sobre cálculo isolado de sub-redes."
    },
    "comparacoes": [
      {
        "tema": "Número de sub-redes vs. número de hosts por sub-rede",
        "a": {
          "rotulo": "Número de sub-redes",
          "texto": "O número de sub-redes é 2 elevada aos bits emprestados, onde bits emprestados igualam o novo prefixo menos o prefixo original; cada bit emprestado dobra o número de sub-redes. Exemplo: de /16 para /24, emprestam-se 8 bits, gerando 256 sub-redes."
        },
        "b": {
          "rotulo": "Hosts por sub-rede",
          "texto": "Fórmula: 2^(bits de host restantes) − 2, onde bits de host = 32 − novo prefixo. Subtrai rede e broadcast. Ex.: /24 → 8 bits de host → 254 hosts."
        },
        "diferencaGabarito": "São grandezas inversas: emprestar mais bits para rede aumenta sub-redes e diminui hosts por sub-rede. Não confunda 'número de sub-redes' com 'hosts por sub-rede' na resposta do item."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A fórmula de hosts utilizáveis é 2^(bits de host), sem subtrair nada.",
        "porqueErrada": "Esquece de subtrair os dois endereços reservados: rede (bits de host = 0) e broadcast (bits de host = 1). A correta é 2^(bits de host) − 2, exceto /31 e /32.",
        "versaoCorreta": "Hosts utilizáveis = 2^(bits de host) − 2, onde bits de host = 32 − prefixo. Exceções: /31 = 2 hosts (sem reserva, RFC 3021), /32 = 1 host."
      },
      {
        "afirmacaoEquivocada": "Em /31 há 0 hosts utilizáveis.",
        "porqueErrada": "Confunde com a regra geral −2. A /31 (RFC 3021) é caso especial para links ponto-a-ponto: permite 2 hosts sem reservar rede/broadcast.",
        "versaoCorreta": "/31 permite 2 hosts em links ponto-a-ponto (sem endereços de rede/broadcast reservados). /30 tem 2 hosts com rede e broadcast reservados (2^2 − 2 = 2)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Bits emprestados = novo prefixo − prefixo original",
        "Número de sub-redes = 2^(bits emprestados)",
        "Bits de host = 32 − prefixo",
        "Hosts por sub-rede = 2^(bits de host) − 2 (rede e broadcast reservados)",
        "Casos especiais: /31 (2 hosts, sem reserva) e /32 (1 host)"
      ],
      "regras": [
        "Cada bit emprestado dobra o número de sub-redes",
        "Hosts utilizáveis = 2^(bits de host) − 2 (exceto /31, /32)",
        "Escolha o menor prefixo que comporte a demanda de hosts",
        "Em VLSM, alocar blocos maiores primeiro evita fragmentação"
      ],
      "comparacoes": [
        "O número de sub-redes é 2 elevada aos bits emprestados, enquanto o número de hosts por sub-rede é 2 elevada aos bits de host restantes, menos 2.",
        "Regra geral (−2) vs. exceções /31 e /32 (sem subtração total)"
      ],
      "fluxos": [
        "Do prefixo original para o novo prefixo, calcula-se os bits emprestados e eleva-se 2 a essa potência para obter o número de sub-redes.",
        "Novo prefixo → bits de host = 32 − prefixo → 2^bits de host − 2 = hosts"
      ],
      "excecoes": [
        "/31 (RFC 3021): 2 hosts em link ponto-a-ponto, sem rede/broadcast reservados",
        "/32: host único (loopback/rota de host), máscara 255.255.255.255"
      ],
      "palavrasChave": [
        "sub-redes",
        "hosts",
        "bits emprestados",
        "prefixo",
        "CIDR",
        "VLSM",
        "RFC 3021",
        "RFC 4632"
      ],
      "checklist": [
        "Calculo sub-redes = 2^(bits emprestados)",
        "Calculo hosts = 2^(bits de host) − 2",
        "Conheço as exceções /31 e /32",
        "Escolho o prefixo mínimo para uma demanda de hosts",
        "Evito fragmentação em VLSM alocando blocos grandes primeiro"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quantas sub-redes /28 cabem na rede 10.0.0.0/24 e quantos hosts cada sub-rede tem?",
        "dados": "A rede original é 10.0.0.0/24 e o novo prefixo é /28; emprestam-se 4 bits (28 menos 24) e restam 4 bits de host (32 menos 28).",
        "conceitos": [
          "Bits emprestados = novo prefixo − prefixo original",
          "Sub-redes = 2^(bits emprestados)",
          "Hosts = 2^(bits de host) − 2"
        ],
        "estrategia": "Calcular bits emprestados (4) e elevar 2 a essa potência para obter sub-redes. Calcular bits de host (4) e aplicar 2^4 − 2 para obter hosts por sub-rede.",
        "execucao": [
          "Passo 1: Bits emprestados = 28 − 24 = 4.",
          "Passo 2: Sub-redes = 2^4 = 16.",
          "Passo 3: Bits de host = 32 − 28 = 4.",
          "Passo 4: Hosts por sub-rede = 2^4 − 2 = 14."
        ],
        "resultado": "16 sub-redes /28, cada uma com 14 hosts utilizáveis (16 endereços menos 2 reservados).",
        "justificativa": "4 bits emprestados geram 16 sub-redes (2^4). Restam 4 bits de host, dando 16 endereços, menos 2 reservados (rede e broadcast) = 14 hosts por sub-rede.",
        "errosFrequentes": [
          "Responder 16 hosts (esquece o −2)",
          "Esquecer de calcular bits emprestados e usar diretamente o novo prefixo"
        ],
        "variacao": "Quantas sub-redes /27 cabem em 10.0.0.0/24 e quantos hosts cada uma? Bits emprestados = 3 → 8 sub-redes. Bits de host = 5 → 30 hosts cada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um provedor recebe o bloco 200.0.0.0/24 e precisa criar 8 sub-redes iguais. Qual prefixo usar e quantos hosts cada sub-rede terá?",
        "dados": "Bloco: 200.0.0.0/24 (rede Classe C com 256 endereços). Demanda: criar 8 sub-redes iguais a partir desse bloco.",
        "conceitos": [
          "Sub-redes = 2^(bits emprestados)",
          "Novo prefixo = prefixo original + bits emprestados",
          "Hosts = 2^(bits de host) − 2"
        ],
        "estrategia": "Para 8 sub-redes, que são 2 elevado a 3, empresta-se 3 bits; o novo prefixo é 24 mais 3, ou seja, /27, com 5 bits de host (32 menos 27) e 30 hosts (2 elevado a 5 menos 2).",
        "execucao": [
          "Passo 1: 8 = 2^3, então empresta 3 bits.",
          "Passo 2: Novo prefixo = 24 + 3 = /27.",
          "Passo 3: Bits de host = 32 − 27 = 5.",
          "Passo 4: Hosts por sub-rede = 2^5 − 2 = 30."
        ],
        "resultado": "O prefixo é /27, e cada sub-rede tem 30 hosts utilizáveis, pois 32 endereços menos os 2 reservados (rede e broadcast) resultam em 30.",
        "justificativa": "Para criar 8 sub-redes iguais a partir de /24, empresta-se 3 bits (2^3 = 8). O novo prefixo é /27, deixando 5 bits de host, ou seja, 32 − 2 = 30 hosts utilizáveis por sub-rede.",
        "errosFrequentes": [
          "Responder 32 hosts (esquece o −2)",
          "Escolher /26 (64 sub-redes, mais que o necessário) ou /28 (16 sub-redes, também serve mas não é a pergunta)"
        ],
        "variacao": "O mesmo provedor precisa de 4 sub-redes em vez de 8. Prefixo: empresta 2 bits → /26. Hosts = 2^6 − 2 = 62 cada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: 'Em uma sub-rede /31 há 0 hosts utilizáveis.' (item C/E de concurso de redes)",
        "dados": "Prefixo /31. Bits de host = 32 − 31 = 1. Regra geral −2 daria 2^1 − 2 = 0.",
        "conceitos": [
          "Casos especiais /31 e /32 (RFC 3021)",
          "Regra geral hosts = 2^(bits de host) − 2"
        ],
        "estrategia": "Identificar que /31 é exceção à regra −2: permite 2 hosts em links ponto-a-ponto sem reservar rede/broadcast. A regra geral (0 hosts) não se aplica a /31.",
        "execucao": [
          "Passo 1: /31 tem 1 bit de host (32 − 31).",
          "Passo 2: Regra geral daria 2^1 − 2 = 0, mas /31 é exceção (RFC 3021).",
          "Passo 3: /31 permite 2 hosts em links ponto-a-ponto.",
          "Passo 4: Conclusão: a afirmação '0 hosts' está errada para /31."
        ],
        "resultado": "Errado. /31 permite 2 hosts em links ponto-a-ponto (sem rede/broadcast reservados, RFC 3021).",
        "justificativa": "A /31 é caso especial da RFC 3021 para enlaces ponto-a-ponto, onde não há necessidade de endereços de rede e broadcast distintos dos dois hosts. Portanto tem 2 hosts utilizáveis, não 0. A regra geral −2 só vale para prefixos /0 a /30.",
        "errosFrequentes": [
          "Aplicar a regra geral −2 a /31 e concluir 0 hosts",
          "Confundir /31 com /32 (1 host) ou /30 (2 hosts com reserva)"
        ],
        "variacao": "Item C/E: 'Em /30 há 2 hosts utilizáveis.' — CERTO (2^2 − 2 = 2, com rede e broadcast reservados). Variação testa se o aluno distingue /30 (com reserva) de /31 (sem reserva)."
      }
    ]
  },
  "m2-u4-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Determinar o intervalo de hosts válidos e validar se um IP pertence a uma sub-rede evita configurar hosts em endereços inválidos (rede ou broadcast). A prova cobra a verificação de pertinência e a identificação de endereços reservados. Dominar a recálculo da rede (AND) impede erros causados por confiar apenas na aparência do endereço.",
      "preRequisitos": [
        "Cálculo de endereço de rede e broadcast (AND bit a bit)",
        "Máscara de sub-rede e prefixo CIDR"
      ],
      "objetivosObservaveis": [
        "Determinar o intervalo de hosts válidos de uma sub-rede (rede+1 até broadcast−1)",
        "Validar se um IP pertence a uma sub-rede comparando redes calculadas",
        "Identificar endereços de rede e broadcast como não atribuíveis a hosts",
        "Recalcular a rede de um IP com a máscara da sub-rede"
      ],
      "competencias": [
        "Validar endereçamento IPv4 antes de configurar hosts",
        "Detectar máscaras inconsistentes entre IP e sub-rede"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base: rede e broadcast",
        "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — usa a contagem de hosts válidos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Validação de endereços e intervalo de hosts é tema central do conteúdo programático de redes em itens de múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa, sem estatística de incidência publicada."
      }
    },
    "niveis": {
      "iniciante": "Para uma sub-rede, o intervalo de hosts válidos vai do endereço de rede +1 até o broadcast −1. Para verificar se um IP pertence a uma sub-rede: calcular a rede do IP com a máscara (AND) e comparar com a rede da sub-rede. Se forem iguais, pertence. Pegadinhas comuns: IP com host bits todos 0 (é rede, não host); IP com host bits todos 1 (é broadcast); máscara inconsistente; confundir /n com número de hosts. Sempre recalcular a rede em vez de confiar na aparência do IP.",
      "intermediario": "Exemplo: sub-rede 192.168.1.128/25 (rede .128, broadcast .255). Hosts válidos: 192.168.1.129 a 192.168.1.254. O IP .128 é a rede e o .255 é o broadcast, ambos inválidos como host. Validação de 192.168.1.200/25: AND com 255.255.255.128 dá 192.168.1.128, igual à rede da sub-rede → pertence. Exemplo de máscara inconsistente: IP 10.0.0.127/25 — rede calculada = 10.0.0.0 (127 AND 128 = 0), broadcast = 10.0.0.127, então .127 é broadcast, não host válido.",
      "avancado": "Validação em cenários compostos: VLSM com blocos de tamanhos variados exige recalcular a rede de cada IP com a máscara de sua sub-rede específica; não há máscara única para todos. Ex.: 192.168.10.0/24 dividido em /26 (0-63), /27 (64-95), /30 (96-99). IP 192.168.10.70/27 pertence à sub-rede .64/27, não à .0/26. Sumarização: validar se todos os blocos agregados estão contidos no prefixo comum. IPv6: /64 por sub-rede, validação análoga em 128 bits com ferramentas (ipcalc, sipcalc).",
      "especialista": "Em arquitetura corporativa, validação de endereçamento integra IPAM: detectar IPs fora do intervalo da sub-rede atribuída, máscaras assimétricas entre hosts do mesmo link (conectividade intermitente), e IPs duplicados em sub-redes diferentes. Troubleshooting avançado: 'dois hosts não se veem' → conferir máscara de cada um; 'ping funciona mas aplicação falha' → verificar MTU/fragmentação, não endereçamento. uRPF strict mode exige que o IP fonte pertença à sub-rede da interface. Referências: RFC 791 (IPv4), RFC 4632 (CIDR), RFC 3021 (/31), RFC 1918 (privados)."
    },
    "comparacoes": [
      {
        "tema": "Host válido vs. endereço de rede vs. broadcast",
        "a": {
          "rotulo": "Host válido",
          "texto": "Endereço entre rede+1 e broadcast−1. Pode ser atribuído a interface. Ex.: 192.168.1.129/25."
        },
        "b": {
          "rotulo": "Rede e broadcast (reservados)",
          "texto": "Rede = todos bits de host = 0; broadcast = todos bits de host = 1. Não podem ser atribuídos a hosts. Ex.: .128 (rede) e .255 (broadcast) em /25."
        },
        "diferencaGabarito": "O endereço de rede identifica a sub-rede; o broadcast entrega a todos; apenas o intervalo entre eles é atribuível a hosts. Confundir qualquer um com host é erro de gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "192.168.1.255 é sempre broadcast global.",
        "porqueErrada": "Depende do prefixo. Em 192.168.1.0/24, .255 é broadcast dessa sub-rede. Em 192.168.0.0/16, 192.168.1.255 é um host válido (bits de host não são todos 1).",
        "versaoCorreta": "Broadcast depende do prefixo calculado com a máscara. Não existe 'broadcast global' por valor do último octeto; sempre recalcule (IP AND máscara para a rede, depois bits de host = 1 para o broadcast)."
      },
      {
        "afirmacaoEquivocada": "Se o último octeto do IP for .0 ou .255, não é host válido.",
        "porqueErrada": "Isso só vale para /24 alinhado. Em /23 (192.168.0.0/23), 192.168.1.0 é host válido (rede é .0, broadcast é .1.255). Em /25 (192.168.1.128/25), .0 é host de outra sub-rede. O que importa é o prefixo, não o valor aparente do último octeto.",
        "versaoCorreta": "Sempre recalcule a rede com (IP AND máscara). Só é inválido se for exatamente o endereço de rede ou o broadcast da sub-rede calculada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Intervalo de hosts válidos = rede+1 até broadcast−1",
        "Endereço de rede (bits de host = 0) não é atribuível a host",
        "Broadcast (bits de host = 1) não é atribuível a host",
        "Validação de pertinência: (IP AND máscara) == rede da sub-rede",
        "Recalcular sempre a rede com a máscara da sub-rede"
      ],
      "regras": [
        "Hosts válidos: rede + 1 até broadcast − 1",
        "IP pertence à sub-rede se (IP AND máscara) == rede da sub-rede",
        "Não assumir pelo último octeto; recalcular com a máscara",
        "Máscaras assimétricas entre hosts do mesmo link quebram conectividade"
      ],
      "comparacoes": [
        "O host válido é atribuível a uma interface, ao passo que o endereço de rede e o broadcast são reservados e não podem ser usados por hosts.",
        "Broadcast por prefixo (recalcular) vs. suposição pelo último octeto (.0/.255)"
      ],
      "fluxos": [
        "Dado IP + máscara da sub-rede → AND bit a bit → rede do IP → comparar com rede da sub-rede → pertence ou não",
        "A partir do endereço de rede e do broadcast, lista-se de rede mais um até broadcast menos um para obter o intervalo de hosts válidos."
      ],
      "excecoes": [
        "/31 (RFC 3021): 2 hosts em link ponto-a-ponto, sem rede/broadcast reservados",
        "/32: host único (loopback/rota de host)",
        "Máscara inconsistente entre IP e sub-rede: o IP não pertence a ela"
      ],
      "palavrasChave": [
        "intervalo de hosts",
        "endereço de rede",
        "broadcast",
        "validação de pertinência",
        "AND bit a bit",
        "máscara",
        "CIDR",
        "RFC 3021"
      ],
      "checklist": [
        "Determino o intervalo de hosts válidos (rede+1 a broadcast−1)",
        "Valido se um IP pertence à sub-rede com (IP AND máscara)",
        "Identifico rede e broadcast como não atribuíveis",
        "Não confio no valor aparente do último octeto",
        "Detecto máscara inconsistente entre IP e sub-rede"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Dado 192.168.10.64/26, listar o endereço de rede, o broadcast e o intervalo de hosts válidos.",
        "dados": "IP: 192.168.10.64. Prefixo: /26. Máscara: 255.255.255.192. Último octeto: 64 (01000000) AND 192 (11000000) = 64.",
        "conceitos": [
          "Endereço de rede = IP AND máscara",
          "Broadcast = rede com bits de host = 1",
          "Intervalo de hosts válidos = rede+1 até broadcast−1"
        ],
        "estrategia": "Converter /26 em máscara decimal (255.255.255.192). Aplicar AND no último octeto: 64 & 192 = 64. Rede = 192.168.10.64. Bloco = 64 endereços. Broadcast = 64 + 64 − 1 = 127 → 192.168.10.127. Hosts = 192.168.10.65 a 192.168.10.126.",
        "execucao": [
          "Passo 1: Máscara /26 = 255.255.255.192.",
          "Passo 2: Último octeto: 64 & 192 = 64 (rede = 192.168.10.64).",
          "Passo 3: Bloco = 2^(32−26) = 64 endereços.",
          "Passo 4: Broadcast = 64 + 64 − 1 = 127 → 192.168.10.127.",
          "Passo 5: Hosts válidos = 192.168.10.65 a 192.168.10.126 (62 hosts)."
        ],
        "resultado": "Rede: 192.168.10.64/26. Broadcast: 192.168.10.127. Hosts válidos: 192.168.10.65 a 192.168.10.126 (62 hosts).",
        "justificativa": "O prefixo /26 dá 6 bits de host (64 endereços). O bloco de 64 alinha em múltiplos de 64 (0, 64, 128...), então 64 é rede válida. O broadcast é o último endereço do bloco (.127), e os hosts são os 62 endereços entre rede e broadcast (regra −2 do IPv4).",
        "errosFrequentes": [
          "Esquecer o −2 e responder 64 hosts",
          "Assumir que .64 não é rede válida porque 'parece' um octeto do meio",
          "Calcular broadcast como .63 (rede − 1) em vez de .127"
        ],
        "variacao": "Dado 10.0.5.200/26, liste rede, broadcast e hosts. Rede = 10.0.5.192, broadcast = 10.0.5.255, hosts = .193 a .254 (62 hosts). Testa outro alinhamento de bloco 64."
      },
      {
        "tipo": "aplicacao",
        "problema": "O IP 10.0.0.127/25 pertence à sub-rede 10.0.0.0/25 ou à 10.0.0.128/25? É um host válido?",
        "dados": "O IP é 10.0.0.127, com prefixo /25 e máscara 255.255.255.128; as duas sub-redes candidatas são 10.0.0.0/25 e 10.0.0.128/25.",
        "conceitos": [
          "Validação de pertinência: (IP AND máscara) == rede da sub-rede",
          "Broadcast como não-host",
          "Intervalo de hosts válidos"
        ],
        "estrategia": "Calcular a rede do IP com a máscara /25: último octeto 127 (01111111) AND 128 (10000000) = 0. Rede calculada = 10.0.0.0. Então o IP pertence à sub-rede 10.0.0.0/25. O broadcast dessa sub-rede é 10.0.0.127, então .127 é broadcast, não host válido.",
        "execucao": [
          "Passo 1: Máscara /25 = 255.255.255.128.",
          "Passo 2: Último octeto: 127 & 128 = 0 → rede calculada = 10.0.0.0.",
          "Passo 3: Comparar com as candidatas: 10.0.0.0/25 é igual → pertence a essa sub-rede.",
          "Passo 4: Broadcast de 10.0.0.0/25 = 10.0.0.127 (próxima rede .128 menos 1).",
          "Passo 5: Como o IP é .127 = broadcast, não é um host válido."
        ],
        "resultado": "Pertence à sub-rede 10.0.0.0/25, mas é o endereço de broadcast (não é host válido).",
        "justificativa": "A validação usa AND bit a bit, não a aparência do último octeto. 127 AND 128 = 0, então a rede calculada é 10.0.0.0, não 10.0.0.128. Como o broadcast de 10.0.0.0/25 é exatamente .127, esse endereço é reservado e não pode ser atribuído a um host.",
        "errosFrequentes": [
          "Achar que .127 é o último host da sub-rede .0/25 (esquece que é broadcast)",
          "Assumir que pertence à .128/25 por 'parecer' próximo de 128",
          "Não recalcular a rede com a máscara e confiar no valor do último octeto"
        ],
        "variacao": "O IP 192.168.1.200/25 pertence à 192.168.1.128/25? Rede = 200 & 128 = 128 → sim, pertence à .128/25. É host válido (não é rede .128 nem broadcast .255)."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de gabarito: '192.168.1.255 é sempre broadcast global, independentemente da máscara.'",
        "dados": "IP: 192.168.1.255. Comparar duas sub-redes: 192.168.1.0/24 e 192.168.0.0/16.",
        "conceitos": [
          "Broadcast depende do prefixo/máscara",
          "Endereço de rede calculado por AND",
          "Host válido vs. broadcast"
        ],
        "estrategia": "Em 192.168.1.0/24: máscara 255.255.255.0, rede = 192.168.1.0, broadcast = 192.168.1.255 → aqui .255 é broadcast. Em 192.168.0.0/16: máscara 255.255.0.0, bits de host são os 2 últimos octetos; 192.168.1.255 tem bits de host = 1.255 (não todos 1), então é um host válido, não broadcast. O broadcast de 192.168.0.0/16 é 192.168.255.255.",
        "execucao": [
          "Passo 1: Em /24, 192.168.1.255 é broadcast da sub-rede 192.168.1.0/24.",
          "Passo 2: Em /16, máscara 255.255.0.0, rede de 192.168.1.255 = 192.168.0.0 (AND).",
          "Passo 3: Broadcast de 192.168.0.0/16 = 192.168.255.255 (todos bits de host = 1).",
          "Passo 4: 192.168.1.255 ≠ 192.168.255.255 → é um host válido na sub-rede /16."
        ],
        "resultado": "Errado. 192.168.1.255 é broadcast apenas da sub-rede 192.168.1.0/24. Em 192.168.0.0/16 é um host válido.",
        "justificativa": "Não existe 'broadcast global' por valor do último octeto. O broadcast é sempre o último endereço do bloco definido pelo prefixo. Em /24 é .255 dentro do mesmo terceiro octeto; em /16 o broadcast é 192.168.255.255, e 192.168.1.255 é apenas um endereço de host dentro desse bloco maior. Sempre recalcular com a máscara da sub-rede em questão.",
        "errosFrequentes": [
          "Assumir que qualquer .255 no último octeto é broadcast",
          "Não considerar que o prefixo muda o que é broadcast",
          "Confundir broadcast de sub-rede /24 com broadcast de super-rede /16"
        ],
        "variacao": "Item C/E: 'Em 10.0.0.0/8, o endereço 10.255.255.255 é broadcast.' — CERTO (broadcast da rede /8). Variação testa se o aluno sabe que o broadcast depende do prefixo da rede citada."
      }
    ]
  },
  "m2-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "VLSM divide um bloco em sub-redes de tamanhos diferentes, com prefixo escolhido pela demanda de hosts. Em provas, surge em dimensionamento e ordem de alocação: definir /n por necessidade e explicar por que as maiores sub-redes vão primeiro.",
      "preRequisitos": [
        "Cálculo de hosts por sub-rede: 2^(32 - prefixo) - 2",
        "Notação CIDR e alinhamento de blocos em fronteiras de potência de 2",
        "Identificação do endereço de rede e de broadcast de uma sub-rede"
      ],
      "objetivosObservaveis": [
        "explicará VLSM e aplicará divisão de sub-redes de tamanhos diferentes a partir de um bloco original",
        "Calcular o prefixo mínimo que atende a uma demanda de hosts",
        "Ordenar a alocação das sub-redes da maior para a menor necessidade",
        "Alocar blocos consecutivos sem sobreposição",
        "Explicar por que VLSM exige roteamento classless"
      ],
      "competencias": [
        "Planejar endereçamento com desperdício mínimo",
        "Dimensionar prefixos a partir da demanda de hosts",
        "Validar alinhamento e ausência de sobreposição entre blocos"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t2-s2 (Quantidade de sub-redes e hosts) — base do cálculo de hosts por prefixo",
        "m2-u4-t2-s3 (Intervalos de hosts e validação) — usado para conferir cada bloco alocado",
        "m2-u4-t3-s2 (Sumarização de rotas (agregação)) — operação inversa: agregar blocos contíguos",
        "m2-u4-t3-s3 (Planejamento de endereçamento e roteamento classless) — aplica VLSM no plano do site"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "VLSM é tema central do conteúdo programático de TI: itens pedem o prefixo para uma demanda de hosts, a ordem correta de alocação e a relação com roteamento classless (RIPv1, RIPv2, OSPF). A classificação é qualitativa e configura estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "VLSM (Variable Length Subnet Mask) divide uma rede em sub-redes de tamanhos diferentes: cada uma recebe o prefixo que sua demanda exige, em vez de um tamanho único para todas. No bloco 192.168.10.0/24, a LAN de 50 hosts usa /26 (62 endereços), a de 25 hosts usa /27 (30) e o link entre roteadores usa /30 (2 hosts). A alocação começa pelas maiores: 192.168.10.0/26, depois 192.168.10.64/27 e 192.168.10.96/30, restando espaço livre no bloco.",
      "intermediario": "A escolha do prefixo parte da demanda: encontrar o menor /n tal que 2^(32 - n) - 2 ≥ hosts. Para 50 hosts, /26; para 25, /27; para 2, /30. Depois de definidos os prefixos, a alocação em ordem decrescente garante que cada bloco caiba alinhado: /26 ocupa múltiplos de 64 no último octeto, /27 múltiplos de 32 e /30 múltiplos de 4. Alocar os menores primeiro fragmenta o bloco e pode inviabilizar as sub-redes maiores.",
      "avancado": "Em um plano com vários sites, VLSM exige controlar fronteiras: cada bloco deve iniciar em múltiplo do próprio tamanho e não sobrepor o anterior. A técnica é ordenar as demandas, calcular os prefixos, alocar sequencialmente e registrar o restante como reserva de crescimento. Também é preciso verificar o suporte do roteamento: protocolos classful, como o RIPv1, assumem a máscara pela classe e não propagam máscaras distintas, inviabilizando VLSM entre roteadores.",
      "especialista": "No desenho corporativo, VLSM integra IPAM e sumarização: blocos hierárquicos por região e site permitem agregar rotas nas bordas, e a alocação por função (LAN, voz, links, gerência) facilita auditoria e políticas de segurança. Riscos avançados incluem sobreposição silenciosa entre blocos documentados e reservas, perda de espaço por alocação em ordem crescente e dependência de classless também nas rotas redistribuídas. Revisões periódicas do plano recuperam blocos órfãos."
    },
    "comparacoes": [
      {
        "tema": "Ordem de alocação: maiores primeiro vs. menores primeiro",
        "a": {
          "rotulo": "Maiores primeiro",
          "texto": "Alocar a sub-rede com mais hosts no início do bloco: 50 hosts → /26 em 192.168.10.0/26, 25 hosts → /27 em .64/27 e o link → /30 em .96/30. Cada bloco encontra fronteira livre e o restante permanece contíguo."
        },
        "b": {
          "rotulo": "Menores primeiro",
          "texto": "Alocar o link /30 em .0/30 e a LAN de 25 hosts em .4/27 consome pequenas fatias iniciais, mas deixa o restante fragmentado; a LAN de 50 hosts passa a exigir realocação ou um bloco adicional."
        },
        "diferencaGabarito": "A alocação decrescente preserva blocos contíguos e garante que toda demanda caiba no bloco original; a ordem crescente fragmenta o espaço e pode impedir a maior sub-rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Deve-se alocar as sub-redes menores primeiro para não desperdiçar endereços.",
        "porqueErrada": "A intenção é poupar endereços, mas o efeito é o oposto: fatias pequenas iniciais fragmentam o bloco e a maior sub-rede pode não encontrar fronteira alinhada livre.",
        "versaoCorreta": "Alocar as sub-redes maiores primeiro e deixar que as menores preencham as sobras, como em /26, depois /27 e /30."
      },
      {
        "afirmacaoEquivocada": "Um link ponto a ponto entre roteadores precisa de uma sub-rede /24.",
        "porqueErrada": "Confunde legibilidade com dimensionamento: /24 oferece 254 hosts para 2 interfaces, desperdiçando 252 endereços do bloco.",
        "versaoCorreta": "Link ponto a ponto usa /30 (2 hosts utilizáveis) ou /31 em cenários que admitam a exceção de não reservar rede e broadcast."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'VLSM pode ser usado com RIPv1.'",
        "porqueErrada": "RIPv1 é classful: anuncia a rota sem a máscara e o destinatário a infere pela classe do endereço, descartando a informação de prefixo necessária ao VLSM.",
        "versaoCorreta": "VLSM exige protocolo classless que carregue a máscara — RIPv2, OSPF, EIGRP ou BGP — ou rotas estáticas com máscara informada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "VLSM: sub-redes de tamanhos diferentes no mesmo bloco",
        "Prefixo por necessidade: menor /n com 2^(32 - n) - 2 ≥ hosts",
        "Ordem decrescente de alocação",
        "Fronteira alinhada: bloco inicia em múltiplo do próprio tamanho",
        "Requisito de roteamento classless"
      ],
      "regras": [
        "Escolher /n tal que 2^(32 - n) - 2 atenda à demanda com folga mínima",
        "Alocar da maior para a menor sub-rede",
        "Cada bloco deve iniciar em múltiplo do seu tamanho (ex.: /26 em múltiplos de 64)"
      ],
      "comparacoes": [
        "FLSM (tamanho único, desperdiça) vs. VLSM (tamanho variável, otimiza)",
        "Alocação decrescente (preserva blocos) vs. crescente (fragmenta)"
      ],
      "fluxos": [
        "Demanda de hosts → prefixo /n → ordenação decrescente → alocação sequencial → registro do restante"
      ],
      "excecoes": [
        "Links ponto a ponto podem usar /30 ou /31",
        "Protocolos classful (RIPv1) impedem VLSM, mesmo com máscaras configuradas localmente"
      ],
      "palavrasChave": [
        "VLSM",
        "prefixo variável",
        "ordem decrescente",
        "alinhamento",
        "classless"
      ],
      "checklist": [
        "Sei definir VLSM e diferenciá-lo de FLSM?",
        "Consigo calcular o prefixo para uma demanda de hosts?",
        "Ordeno a alocação da maior para a menor?",
        "Verifico alinhamento e ausência de sobreposição?",
        "Sei explicar o requisito de roteamento classless?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o VLSM é melhor que a divisão em sub-redes de tamanho fixo (FLSM) quando um bloco IPv4 atende a demandas diferentes de hosts?",
        "dados": "Bloco 192.168.10.0/24 com três demandas: LAN de 50 hosts, LAN de 25 hosts e um link entre roteadores. Em divisão fixa por /26, cada uma das três sub-redes teria 62 endereços.",
        "conceitos": [
          "VLSM e FLSM",
          "Desperdício de endereços",
          "Prefixo conforme a demanda"
        ],
        "estrategia": "Comparar o total de endereços consumidos nas duas abordagens: no FLSM todas as sub-redes têm o mesmo tamanho; no VLSM cada uma recebe o prefixo que sua demanda exige. O ganho aparece na diferença entre endereços alocados e endereços efetivamente usados.",
        "execucao": [
          "Em FLSM com /26, três sub-redes consomem 192 endereços para 77 hosts necessários (50 + 25 + 2)",
          "Em VLSM: /26 para 50 hosts, /27 para 25 e /30 para o link",
          "Somar a ocupação VLSM: 64 + 32 + 4 = 100 endereços",
          "Comparar os totais: 100 endereços alocados contra 192 no FLSM"
        ],
        "resultado": "Porque evita desperdício: uma sub-rede /24 fixa para um link ponto-a-ponto desperdiça 252 endereços; /30 usa apenas 4.",
        "justificativa": "O VLSM ajusta a máscara a cada necessidade, e a economia é a diferença entre os totais alocados. No exemplo, as demandas somam 77 hosts; com FLSM /26 o bloco consome 192 endereços, enquanto o VLSM usa 100 e preserva o restante para crescimento, sem reduzir a capacidade de nenhuma sub-rede.",
        "errosFrequentes": [
          "Escolher o prefixo pela quantidade de sub-redes em vez da quantidade de hosts por sub-rede",
          "Supor que VLSM dispensa roteamento classless porque as máscaras foram configuradas em cada roteador"
        ],
        "variacao": "Repita a comparação com o bloco 10.0.0.0/24 e demandas de 100, 20 e 2 hosts: calcule os prefixos VLSM e o total de endereços economizados em relação a três sub-redes /25 fixas."
      },
      {
        "tipo": "aplicacao",
        "problema": "A partir de 10.0.0.0/24, alocar sub-redes para: site A (100 hosts), site B (50 hosts), link (2 hosts).",
        "dados": "Bloco inicial 10.0.0.0/24 (endereços .0 a .255). Demandas: site A com 100 hosts, site B com 50 hosts e um link ponto a ponto com 2 hosts. A rede usa OSPF, protocolo classless.",
        "conceitos": [
          "Cálculo de hosts por prefixo",
          "Ordem decrescente de alocação",
          "Alinhamento de blocos"
        ],
        "estrategia": "Calcular o prefixo mínimo de cada demanda, ordenar da maior para a menor e alocar sequencialmente a partir de 10.0.0.0, verificando que cada bloco comece em múltiplo do seu tamanho.",
        "execucao": [
          "Site A (100 hosts): 2^7 - 2 = 126 ≥ 100 → /25; alocar 10.0.0.0/25 (.0 a .127)",
          "Site B (50 hosts): 2^6 - 2 = 62 ≥ 50 → /26; próximo múltiplo de 64 é .128 → 10.0.0.128/26 (.128 a .191)",
          "Link (2 hosts): /30; próximo múltiplo de 4 é .192 → 10.0.0.192/30 (.192 a .195)",
          "Restante .196 a .255 fica livre para crescimento"
        ],
        "resultado": "Site A: /25 (126 hosts) -> 10.0.0.0/25. Site B: /26 (62 hosts) -> 10.0.0.128/26. Link: /30 -> 10.0.0.192/30. (Verificar alinhamento dos blocos.)",
        "justificativa": "Cada prefixo é o menor que comporta a demanda com folga mínima: 100 hosts exigem /25 porque 2^6 - 2 = 62 é insuficiente. A alocação em ordem decrescente faz cada bloco iniciar em fronteira livre — .0 para /25, .128 para /26 e .192 para /30 —, o que garante ausência de sobreposição e coerência com o requisito classless do OSPF.",
        "errosFrequentes": [
          "Alocar o link /30 em 10.0.0.0/30 e depois tentar encaixar a LAN de 50 hosts em 10.0.0.0/26, sobrepondo ou fragmentando o bloco",
          "Escolher /24 para o site A por ser mais seguro, desperdiçando 154 endereços e impedindo as demais alocações"
        ],
        "variacao": "Altere as demandas para 60, 25 e 2 hosts no mesmo bloco 10.0.0.0/24 e refaça a alocação; depois some os endereços livres restantes e identifique o maior bloco contíguo ainda disponível."
      },
      {
        "tipo": "erro",
        "problema": "Um administrador configura máscaras VLSM (/26, /27 e /30) em uma rede que ainda anuncia rotas por RIPv1 e afirma que o VLSM está em uso. A afirmação está correta?",
        "dados": "Rede com três sub-redes: 192.168.10.0/26, 192.168.10.64/27 e 192.168.10.96/30. Os roteadores aprendem rotas por RIPv1; não há protocolo classless ativo nem rotas estáticas com máscara.",
        "conceitos": [
          "Roteamento classful x classless",
          "Propagação da máscara",
          "Suporte a VLSM"
        ],
        "estrategia": "Verificar como o protocolo propaga a informação de prefixo: no classful a máscara é inferida pela classe do endereço; no classless ela acompanha a rota. Sem essa informação, roteadores diferentes interpretam o mesmo endereço com máscaras distintas.",
        "execucao": [
          "RIPv1 anunciaria 192.168.10.0 sem máscara, como rede de classe C /24",
          "O roteador destinatário infere /24 e as distinções de /26, /27 e /30 desaparecem",
          "Sem a máscara correta, as rotas das sub-redes não são distinguidas e o tráfego falha ou é encaminhado de forma incorreta",
          "A correção exige migrar para RIPv2, OSPF, EIGRP ou BGP"
        ],
        "resultado": "A afirmação é incorreta: as máscaras VLSM existem apenas localmente nas interfaces, pois o RIPv1 não as propaga e o VLSM não opera entre roteadores.",
        "justificativa": "VLSM não é apenas configuração local de máscaras distintas; ele exige que o protocolo carregue o prefixo para que cada roteador calcule a mesma sub-rede. O RIPv1 é classful e infere a máscara pela classe, tornando indistinguíveis duas sub-redes do mesmo bloco /24 nos anúncios. Por isso o VLSM requer protocolos classless.",
        "errosFrequentes": [
          "Confundir máscara configurada na interface com máscara propagada pelo protocolo",
          "Achar que RIPv1 e RIPv2 diferem apenas por autenticação, ignorando a ausência de CIDR no primeiro"
        ],
        "variacao": "Suponha que a mesma rede use RIPv2 sem autenticação e rotas estáticas apontando para as sub-redes VLSM: o VLSM passa a funcionar? Justifique pela propagação da máscara em cada caso."
      }
    ]
  },
  "m2-u4-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A sumarização combina rotas contíguas em uma rota de prefixo menor, reduzindo a tabela de roteamento. Em provas, cobra-se o cálculo do prefixo agregado e a verificação de contiguidade e alinhamento; agregar blocos não alocados cria buraco negro.",
      "preRequisitos": [
        "Notação CIDR e conversão entre prefixo e máscara",
        "Cálculo de endereço de rede e de broadcast",
        "Noção de tabela de roteamento e próximo salto"
      ],
      "objetivosObservaveis": [
        "explicará sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos",
        "Verificar se blocos são contíguos e alinhados",
        "Calcular o prefixo agregado pelos bits comuns",
        "Determinar a faixa de endereços coberta pelo agregado",
        "Citar os riscos da agregação excessiva"
      ],
      "competencias": [
        "Calcular o prefixo comum de um conjunto de rotas",
        "Analisar a tabela de roteamento e propor agregação",
        "Avaliar risco de black hole antes de anunciar um agregado"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base do cálculo de prefixo e faixa",
        "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — operação inversa: dividir em vez de agregar",
        "m2-u4-t3-s3 (Planejamento de endereçamento e roteamento classless) — contiguidade planejada viabiliza a agregação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Sumarização aparece em itens de cálculo de rota agregada e em questões conceituais sobre redução de tabela, contiguidade e black hole. A cobrança é menos numérica que a de CIDR e VLSM, porém integrante do conteúdo programático de redes de nível médio e superior."
      }
    },
    "niveis": {
      "iniciante": "Sumarização (route aggregation/supernetting) combina múltiplas rotas contíguas em uma rota mais curta (prefixo menor), reduzindo tabelas de roteamento. Requer blocos contíguos alinhados (boundary). Exemplo: rotas 192.168.0.0/24, 192.168.1.0/24, ..., 192.168.7.0/24 agregam em 192.168.0.0/21 (8 sub-redes /24). A agregação só é válida se todos os blocos pertencerem ao agregado e estiverem alocados. Benefícios: tabelas menores, menos atualizações, estabilidade. Risco: agregação excessiva pode anunciar blocos inexistentes.",
      "intermediario": "Para agregar, conta-se o número de blocos em potência de 2 e subtrai-se o expoente do prefixo original: oito redes /24 formam 2^3 blocos, e o prefixo agregado é 24 - 3 = /21. A faixa coberta vai de 192.168.0.0 a 192.168.7.255. Blocos desalinhados, como 192.168.1.0/24 a 192.168.8.0/24, não compartilham a mesma fronteira e não formam um agregado único sem cobrir endereços estranhos ao conjunto.",
      "avancado": "O cálculo exato identifica os bits comuns a todos os endereços: 192.168.0.0 a 192.168.7.0 compartilham os 21 primeiros bits, e o agregado é 192.168.0.0/21, com 32 - 21 = 11 bits de host. Antes de anunciar, confirme que todos os blocos do agregado existem: um agregado que inclua blocos não alocados descarta o tráfego destinado a eles (black hole). Em BGP, a agregação de anúncios segue a mesma validação: só se agregam prefixos efetivamente anunciados.",
      "especialista": "Em arquitetura de provedor, a sumarização estrutura o roteamento hierárquico: agregados de clientes na borda, agregados regionais no núcleo e rota padrão na saída. A análise de impacto considera crescimento (um agregado /20 hoje pode exigir desagregação depois), convergência (menos rotas e atualizações mais rápidas) e resiliência (black holes por agregação excessiva). Auditorias comparam a tabela de roteamento com o IPAM para detectar agregados que cobrem espaço não alocado."
    },
    "comparacoes": [
      {
        "tema": "Sumarização vs. manutenção de rotas individuais",
        "a": {
          "rotulo": "Rota sumarizada",
          "texto": "Oito redes /24 contíguas anunciadas como 192.168.0.0/21: uma entrada na tabela, cobertura de 192.168.0.0 a 192.168.7.255 e menos atualizações."
        },
        "b": {
          "rotulo": "Rotas individuais",
          "texto": "As oito redes /24 anunciadas separadamente: oito entradas na tabela, granularidade por rede e maior volume de atualizações a cada mudança de topologia."
        },
        "diferencaGabarito": "A sumarização troca detalhe por estabilidade: o agregado é válido apenas quando cobre exatamente blocos existentes e alocados; fora disso, perde-se alcance ou cria-se buraco negro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Qualquer conjunto de rotas pode ser agregado.'",
        "porqueErrada": "A agregação depende de bits comuns no início dos endereços; blocos fora de uma mesma fronteira de potência de 2 não compartilham prefixo, e qualquer agregado que os una cobre endereços estranhos.",
        "versaoCorreta": "Errado. A agregação exige contiguidade e alinhamento ao boundary do prefixo agregado. Rotas não contíguas não agregam sem perda/overlap."
      },
      {
        "afirmacaoEquivocada": "Agregar rotas aumenta o prefixo (ex.: /24 para /27).",
        "porqueErrada": "Inverte a direção do cálculo: juntar blocos reduz o número de bits de rede do prefixo, porque o agregado cobre uma faixa maior que a de cada bloco individual.",
        "versaoCorreta": "Agregar reduz o prefixo: oito /24 formam 2^3 blocos e o agregado é /21 (24 - 3), com faixa de 192.168.0.0 a 192.168.7.255."
      },
      {
        "afirmacaoEquivocada": "Agregação excessiva é inofensiva, pois apenas reduz a tabela de roteamento.",
        "porqueErrada": "Ignora que o agregado passa a atrair tráfego para todos os endereços da faixa, inclusive blocos não alocados, que são descartados no roteador de borda.",
        "versaoCorreta": "Agregar somente blocos existentes; blocos não alocados dentro do agregado geram black hole e perda silenciosa de tráfego."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Sumarização: várias rotas contíguas em uma rota de prefixo menor",
        "Contiguidade e alinhamento em fronteira de potência de 2",
        "Prefixo agregado = bits comuns aos blocos",
        "Black hole: tráfego descartado em bloco não alocado"
      ],
      "regras": [
        "2^k blocos /n contíguos e alinhados agregam em /(n - k)",
        "O agregado deve cobrir apenas blocos existentes e alocados",
        "A faixa do agregado vai do endereço de rede ao último endereço do prefixo calculado"
      ],
      "comparacoes": [
        "Rotas individuais (granularidade) vs. rota agregada (estabilidade)",
        "Agregado válido (só blocos alocados) vs. inválido (inclui espaço livre)"
      ],
      "fluxos": [
        "Listar blocos contíguos → contar em potência de 2 → subtrair do prefixo → validar alocação → anunciar"
      ],
      "excecoes": [
        "Blocos não contíguos não agregam sem cobrir endereços estranhos",
        "Blocos não alocados dentro do agregado criam black hole"
      ],
      "palavrasChave": [
        "sumarização",
        "supernetting",
        "prefixo agregado",
        "contiguidade",
        "black hole"
      ],
      "checklist": [
        "Sei definir sumarização?",
        "Verifico contiguidade e alinhamento dos blocos?",
        "Calculo o prefixo agregado pela contagem de blocos?",
        "Confirmo que todos os blocos do agregado estão alocados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um roteador anuncia separadamente 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 e 172.16.3.0/24. Qual rota única resume essas quatro redes?",
        "dados": "Quatro blocos /24 consecutivos: 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 e 172.16.3.0/24. Todos pertencem à mesma política de roteamento e estão alocados.",
        "conceitos": [
          "Contiguidade de blocos",
          "Prefixo agregado",
          "Contagem em potência de 2"
        ],
        "estrategia": "Contar os blocos como potência de 2 e subtrair o expoente do prefixo original; quatro blocos são 2^2, logo o prefixo agregado reduz dois bits em relação a /24.",
        "execucao": [
          "Contar os blocos: 4 redes /24 = 2^2",
          "Subtrair do prefixo: 24 - 2 = 22",
          "Formar a rota a partir do primeiro bloco: 172.16.0.0/22",
          "Conferir a faixa coberta: 172.16.0.0 a 172.16.3.255"
        ],
        "resultado": "A rota agregada é 172.16.0.0/22: as quatro redes /24 passam a ocupar uma única entrada na tabela, com prefixo 22 e faixa de 172.16.0.0 a 172.16.3.255.",
        "justificativa": "Os quatro blocos são contíguos e começam em 172.16.0.0, múltiplo de 4 no terceiro octeto, o que os alinha na fronteira de um /22. Como 4 = 2^2, o prefixo agregado é 24 - 2 = 22, e a rota 172.16.0.0/22 cobre exatamente os quatro blocos, sem endereços estranhos.",
        "errosFrequentes": [
          "Calcular o prefixo somando em vez de subtrair (24 + 2 = /26)",
          "Esquecer de verificar o alinhamento e construir o agregado a partir de um bloco que não é o primeiro"
        ],
        "variacao": "Agregue 172.16.0.0/24 a 172.16.7.0/24, indique a rota única e a faixa coberta, e verifique se 172.16.4.0/24 continuaria anunciável separadamente."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um roteador tem 16 rotas /24 contíguas (10.10.0.0/24 ... 10.10.15.0/24). Qual rota agregada?",
        "dados": "Dezesseis redes /24 contíguas: de 10.10.0.0/24 a 10.10.15.0/24. O roteador de borda deve anunciar uma única rota ao provedor.",
        "conceitos": [
          "Contagem de blocos",
          "Prefixo agregado",
          "Redução da tabela de roteamento"
        ],
        "estrategia": "Contar os blocos como potência de 2, subtrair o expoente do prefixo /24 e validar que o primeiro bloco seja múltiplo do tamanho do agregado.",
        "execucao": [
          "Contar os blocos: 16 redes /24 = 2^4",
          "Subtrair do prefixo: 24 - 4 = 20",
          "Formar a rota 10.10.0.0/20 (múltiplo de 16 no segundo octeto)",
          "Conferir a cobertura: 10.10.0.0 a 10.10.15.255, exatamente as 16 redes"
        ],
        "resultado": "A rota agregada é 10.10.0.0/20: 16 sub-redes /24 contíguas (2^4 blocos) resumidas em um prefixo 20, cobrindo 10.10.0.0 a 10.10.15.255.",
        "justificativa": "Os dezesseis blocos formam 2^4 unidades e o prefixo agregado reduz quatro bits: 24 - 4 = /20. O endereço base 10.10.0.0 é múltiplo de 16 no segundo octeto, portanto alinhado na fronteira do /20, e a faixa resultante cobre somente as dezesseis redes existentes, o que torna o agregado válido e sem black hole.",
        "errosFrequentes": [
          "Usar /19 por confundir 16 blocos com 2^5",
          "Construir o agregado a partir de um bloco diferente de 10.10.0.0/24, quebrando o alinhamento da fronteira do /20"
        ],
        "variacao": "Suponha 32 rotas /24 contíguas iniciando em 10.20.0.0/24: calcule a rota agregada e a quantidade de entradas economizadas na tabela de roteamento."
      },
      {
        "tipo": "erro",
        "problema": "Um analista resume as redes 192.168.0.0/24 a 192.168.2.0/24 em uma única rota 192.168.0.0/22 e a anuncia ao vizinho. A agregação está correta?",
        "dados": "Blocos existentes: 192.168.0.0/24, 192.168.1.0/24 e 192.168.2.0/24 (três redes). O agregado anunciado foi 192.168.0.0/22, que cobre 192.168.0.0 a 192.168.3.255.",
        "conceitos": [
          "Alinhamento do agregado",
          "Blocos não alocados",
          "Black hole"
        ],
        "estrategia": "Conferir se o agregado cobre apenas blocos existentes: um /22 exige quatro blocos /24 alinhados; com três blocos, a quarta fatia da faixa passa a atrair tráfego sem destino.",
        "execucao": [
          "Contar os blocos do conjunto: 3 redes /24, quantidade que não é potência de 2",
          "Escolher o menor prefixo alinhado que os cubra: /22 cobre 4 blocos (0 a 3)",
          "Identificar a sobra: 192.168.3.0/24 não existe, mas faz parte da rota anunciada",
          "Concluir que o tráfego destinado a 192.168.3.0/24 é descartado no roteador de borda"
        ],
        "resultado": "A agregação é inválida: o /22 cobre quatro blocos /24, mas só três existem; 192.168.3.0/24 vira destino sem rota específica e o tráfego é descartado.",
        "justificativa": "Sumarizar exige que o agregado seja formado por potência de 2 de blocos alinhados e que todos estejam alocados. Com três blocos, qualquer agregado único inclui espaço não alocado, neste caso 192.168.3.0/24. O roteador que anuncia o /22 atrai o tráfego dessa fatia e, sem rota mais específica, descarta os pacotes, caracterizando black hole.",
        "errosFrequentes": [
          "Achar que três blocos /24 sempre agregam em /22 porque são quase quatro",
          "Ignorar a necessidade de rota mais específica ou de descarte controlado para a fatia não alocada"
        ],
        "variacao": "Refaça o caso com cinco blocos /24 contíguos (192.168.0.0/24 a 192.168.4.0/24): determine o menor agregado alinhado, a fração não alocada incluída e uma forma de evitar o black hole."
      }
    ]
  },
  "m2-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Planejar o endereçamento antes de implantar evita renumeração custosa e habilita sumarização. Em provas, surgem boas práticas (documentar, usar blocos contíguos, evitar sobreposição) e a distinção entre roteamento classless e classful, condição para VLSM e agregação.",
      "preRequisitos": [
        "VLSM e escolha de prefixo por demanda de hosts",
        "Sumarização e requisitos de contiguidade",
        "Noção de protocolos de roteamento interno"
      ],
      "objetivosObservaveis": [
        "explicará boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM",
        "Listar boas práticas de planejamento de endereçamento",
        "Distinguir protocolos classless de classful",
        "Indicar prefixos típicos para links IPv4 e sub-redes IPv6",
        "Apontar as limitações de um planejamento ruim"
      ],
      "competencias": [
        "Documentar um plano de endereçamento por site e função",
        "Projetar blocos contíguos que permitam agregação",
        "Avaliar o impacto de renumeração em rede em produção"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — o plano define os prefixos variáveis alocados",
        "m2-u4-t3-s2 (Sumarização de rotas (agregação)) — depende de blocos contíguos planejados",
        "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — base para documentar endereços IPv6",
        "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — origem do /64 por sub-rede"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Boas práticas de planejamento e a dicotomia classless/classful são cobradas em itens conceituais e de associação de protocolos. A parte numérica é menor que em CIDR e VLSM, mas o tema sustenta questões de arquitetura e justifica itens sobre RIPv1 e RIPv2."
      }
    },
    "niveis": {
      "iniciante": "Planejamento de endereçamento: documentar blocos por site e função, reservar espaço para crescimento, usar VLSM para otimizar e manter a sumarização nas bordas. Roteamento classless (CIDR): protocolos que carregam a máscara junto com o prefixo (RIPv2, OSPF, EIGRP, BGP, IS-IS) — necessários para VLSM e sumarização. Roteamento classful (RIPv1, IGRP) assume a máscara pela classe e não suporta VLSM nem agregação. Boas práticas: alocar blocos contíguos para facilitar a agregação; evitar sobreposição; reservar /30 ou /31 para links ponto a ponto e /64 por sub-rede no IPv6.",
      "intermediario": "Um plano começa pelo inventário de demanda: hosts por site, links entre roteadores e folga de crescimento. Cada demanda recebe um prefixo (2^(32 - n) - 2 ≥ hosts) e a alocação em ordem decrescente preserva blocos contíguos. A escolha do protocolo vem depois: apenas protocolos classless carregam a máscara no anúncio, condição para VLSM e sumarização; protocolos classful inferem a máscara pela classe e restringem a rede a uma máscara por classe.",
      "avancado": "Na prática, o plano é um documento versionado: tabela de blocos por site, função e responsável, reservas de crescimento e regra de agregação nas bordas. A validação inclui teste de sobreposição (nenhum endereço em dois blocos), contiguidade para agregação e suporte classless em todos os roteadores do domínio, inclusive nas rotas estáticas redistribuídas. Prefixos típicos: /30 ou /31 para links IPv4 e /64 por sub-rede IPv6, tamanho exigido pelo SLAAC.",
      "especialista": "Em ambiente corporativo e de provedor, o planejamento integra IPAM, automação e governança: alocação hierárquica por região, vínculo com o inventário de serviços e auditoria periódica de utilização. Riscos monitorados: sobreposição entre blocos documentados e reservas, perda de contiguidade por crescimento orgânico e migração de classful para classless no legado. Planos maduros preveem renumeração controlada por fases e agregação progressiva nas bordas."
    },
    "comparacoes": [
      {
        "tema": "Roteamento classless vs. classful no planejamento",
        "a": {
          "rotulo": "Classless (CIDR)",
          "texto": "Protocolos como RIPv2, OSPF, EIGRP e BGP anunciam a rota com a máscara; o plano pode usar VLSM, prefixos fora da classe e sumarização nas bordas."
        },
        "b": {
          "rotulo": "Classful",
          "texto": "Protocolos como RIPv1 e IGRP anunciam a rota sem máscara e a inferem pela classe; o plano fica limitado a uma máscara por classe e não suporta VLSM nem agregação."
        },
        "diferencaGabarito": "A diferença está no que é anunciado: com a máscara, o roteamento é classless e o planejamento variável é viável; sem ela, a máscara é inferida pela classe e o VLSM deixa de funcionar."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'RIPv1 suporta VLSM porque é um protocolo de roteamento.'",
        "porqueErrada": "Ser protocolo de roteamento não implica carregar máscara: o RIPv1 é classful, anuncia a rota sem prefixo e o destinatário infere a máscara pela classe, o que inviabiliza máscaras distintas no mesmo bloco.",
        "versaoCorreta": "A afirmação é falsa: RIPv1 é classful, não propaga a máscara e por isso não suporta VLSM nem sumarização; a rede deve usar RIPv2, OSPF ou outro protocolo classless."
      },
      {
        "afirmacaoEquivocada": "No IPv6, cada sub-rede pode receber qualquer prefixo, como /80 ou /96.",
        "porqueErrada": "Ignora a dependência do SLAAC: a autoconfiguração sem estado espera interface de 64 bits, e prefixos menores quebram esse mecanismo e a atribuição automática de endereços.",
        "versaoCorreta": "Usar /64 por sub-rede IPv6, tamanho esperado pelo SLAAC; /128 identifica um host e /48 ou /56 são comuns para uma organização."
      },
      {
        "afirmacaoEquivocada": "Renumerar uma rede em produção é trivial: basta trocar os endereços.",
        "porqueErrada": "Subestima o alcance da mudança: endereços aparecem em rotas, listas de controle, DNS, certificados, monitoramento e regras de firewall, e cada omissão gera falha intermitente.",
        "versaoCorreta": "Renumeração é custosa e arriscada; a alternativa é planejar antes, com folga de crescimento e blocos documentados por função."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Planejamento de endereçamento documentado por site e função",
        "Blocos contíguos como condição de agregação",
        "Roteamento classless x classful",
        "Prefixos típicos: /30 e /31 em links IPv4, /64 por sub-rede IPv6"
      ],
      "regras": [
        "Documentar blocos, finalidades e reservas antes da implantação",
        "Alocar blocos contíguos e sem sobreposição para permitir sumarização",
        "Usar protocolos classless onde houver VLSM ou agregação"
      ],
      "comparacoes": [
        "Classless (carrega a máscara, suporta VLSM) vs. classful (infere pela classe)",
        "Planejar (evita renumeração) vs. improvisar (gera custo futuro)"
      ],
      "fluxos": [
        "Inventariar demanda → definir prefixos → alocar em ordem decrescente → documentar → validar classless e contiguidade"
      ],
      "excecoes": [
        "/30 ou /31 em links ponto a ponto",
        "/64 por sub-rede IPv6, exigência do SLAAC"
      ],
      "palavrasChave": [
        "planejamento",
        "documentação",
        "contiguidade",
        "classless",
        "renumeração"
      ],
      "checklist": [
        "Listo boas práticas de planejamento?",
        "Distingo classless de classful?",
        "Indico prefixos típicos para links e IPv6?",
        "Aponto as limitações de um plano ruim?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que a documentação do plano de endereçamento é considerada uma boa prática indispensável antes da implantação de uma rede?",
        "dados": "Uma empresa com três sites e dois links WAN atribui endereços sem registro: cada técnico escolhe blocos distintos e dois sites acabam usando faixas que se sobrepõem parcialmente.",
        "conceitos": [
          "Documentação de blocos",
          "Sobreposição de endereços",
          "Renumeração"
        ],
        "estrategia": "Rastrear as consequências da ausência de registro: sem documentação não há como detectar sobreposição, reservar crescimento nem garantir contiguidade para agregação.",
        "execucao": [
          "Sem registro, dois sites podem receber blocos com endereços comuns",
          "A sobreposição provoca conflito de endereços e falhas intermitentes de roteamento",
          "Corrigir exige renumeração de roteadores, hosts, DNS e regras de firewall",
          "Com documentação, blocos, finalidades e reservas ficam auditáveis antes do uso"
        ],
        "resultado": "Para evitar sobreposição, facilitar sumarização e permitir crescimento sem renumeração.",
        "justificativa": "A documentação transforma o endereçamento em decisão verificável: cada bloco tem finalidade, responsável e reserva de crescimento, o que permite detectar sobreposição antes da implantação e manter blocos contíguos, condição para sumarização. Sem ela, a correção depende de renumeração em produção, procedimento custoso por alcançar rotas, serviços e regras de filtragem.",
        "errosFrequentes": [
          "Confundir documentação com etiquetagem de cabo: o plano registra blocos e finalidades, não a fiação",
          "Achar que a sobreposição pode ser detectada depois, em produção, sem impacto"
        ],
        "variacao": "Descreva o conteúdo mínimo de uma tabela de plano de endereçamento para três sites e dois links, indicando quais colunas permitem detectar sobreposição antes da implantação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa com 3 filiais (50, 30 e 10 hosts) e 2 links WAN. Como planejar a partir de 10.0.0.0/22?",
        "dados": "Bloco disponível 10.0.0.0/22 (10.0.0.0 a 10.0.3.255). Demandas: filiais de 50, 30 e 10 hosts e dois links ponto a ponto.",
        "conceitos": [
          "Escolha de prefixo por demanda",
          "Ordem decrescente",
          "Blocos contíguos para agregação"
        ],
        "estrategia": "Calcular o prefixo mínimo de cada demanda, alocar em ordem decrescente dentro do /22 e documentar as sobras como reserva de crescimento.",
        "execucao": [
          "Filial de 50 hosts: 2^6 - 2 = 62 ≥ 50 → /26 em 10.0.0.0/26",
          "Filial de 30 hosts: 2^5 - 2 = 30 ≥ 30 → /27 em 10.0.0.64/27",
          "Filial de 10 hosts: 2^4 - 2 = 14 ≥ 10 → /28 em 10.0.0.96/28",
          "Links WAN: /30 em 10.0.0.112/30 e 10.0.0.116/30",
          "Restante (10.0.0.120 a 10.0.3.255) documentado como reserva"
        ],
        "resultado": "Filiais: /26 (62 hosts) para 50, /27 (30) para 30, /28 (14) para 10; links: /30 cada. Alocar em ordem decrescente para evitar fragmentação.",
        "justificativa": "Cada prefixo é o menor que atende à demanda com folga mínima: 50 hosts exigem /26 porque 2^5 - 2 = 30 é insuficiente; 30 hosts cabem exatamente em /27 e 10 hosts em /28. A alocação decrescente mantém os blocos alinhados e contíguos dentro do /22, o que preserva a possibilidade de sumarizar o conjunto na borda, enquanto cada link consome apenas 4 endereços.",
        "errosFrequentes": [
          "Alocar as filiais em ordem crescente, o que fragmenta o /22 e pode impedir o encaixe da filial de 50 hosts",
          "Reservar /24 para cada filial por simplicidade, esgotando o /22 com apenas três demandas"
        ],
        "variacao": "Refaça o plano para demandas de 100, 60 e 20 hosts mais dois links no bloco 10.0.0.0/22 e indique se ainda há espaço contíguo para crescimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'RIPv1 suporta VLSM porque é um protocolo de roteamento.' A afirmação está correta em uma rede com sub-redes /26, /27 e /30?",
        "dados": "Rede com três sub-redes VLSM: 10.0.0.0/26, 10.0.0.64/27 e 10.0.0.96/28, mais dois links /30. Os roteadores usam RIPv1 para aprender rotas entre os sites.",
        "conceitos": [
          "Classful x classless",
          "Propagação da máscara",
          "Viabilidade de VLSM"
        ],
        "estrategia": "Verificar o que o protocolo anuncia: no classful a máscara não acompanha a rota e é inferida pela classe, de modo que sub-redes do mesmo bloco se tornam indistinguíveis.",
        "execucao": [
          "RIPv1 anuncia 10.0.0.0 sem máscara, como rede de classe A /8",
          "O roteador vizinho infere /8 e não distingue /26, /27, /28 e /30",
          "As rotas das sub-redes ficam inalcançáveis de forma confiável entre os sites",
          "A correção é migrar para RIPv2, OSPF ou outro protocolo classless"
        ],
        "resultado": "Errado. RIPv1 é classful e não carrega máscara; não suporta VLSM nem sumarização. Usar RIPv2 ou OSPF.",
        "justificativa": "VLSM depende de o protocolo carregar o prefixo, pois cada roteador precisa calcular a mesma sub-rede a partir do anúncio recebido. O RIPv1 não anuncia máscara e o destinatário a infere pela classe do endereço, o que colapsa todas as sub-redes do bloco em uma única rota. Assim, mesmo com máscaras corretas nas interfaces, o VLSM não opera entre roteadores sem protocolo classless.",
        "errosFrequentes": [
          "Confundir máscara de interface com máscara propagada no anúncio",
          "Atribuir a limitação à distância administrativa ou ao limite de saltos do RIPv1, e não à ausência de CIDR"
        ],
        "variacao": "Suponha que a mesma rede substitua o RIPv1 por OSPF e mantenha duas rotas estáticas sem máscara explícita: o VLSM passa a operar? Justifique pelo que cada mecanismo propaga."
      }
    ]
  },
  "m2-u4-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Abreviar e expandir endereços IPv6 é integrante do conteúdo programático: o candidato precisa reconhecer a forma canônica, aplicar as duas regras de compressão e detectar endereços malformados. O tema sustenta itens sobre endereços especiais, como o loopback e o endereço não especificado.",
      "preRequisitos": [
        "Noção de hexadecimal e de conversão entre hexadecimal e binário",
        "Estrutura de endereços IPv4 e notação CIDR",
        "Conceito de máscara e bits de rede"
      ],
      "objetivosObservaveis": [
        "representará e abreviará endereços IPv6 corretamente, aplicando as regras de compressão",
        "Aplicar as duas regras de abreviação de endereços IPv6",
        "Expandir um endereço abreviado com '::' para a forma completa",
        "Identificar os endereços especiais ::1 e ::"
      ],
      "competencias": [
        "Manipular representações hexadecimais de 128 bits",
        "Interpretar endereços abreviados em configurações e diagnósticos",
        "Detectar endereços IPv6 inválidos por ambiguidade de compressão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — usa a representação abreviada para classificar tipos",
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — contraste decimal pontuado x hexadecimal com dois-pontos",
        "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — mesma lógica de prefixo aplicada a 128 bits"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A representação IPv6 é cobrada em itens de associação e C/E sobre compressão, expansão e endereços especiais. A exigência é conceitual e de leitura, sem cálculo extenso, o que a torna integrante do conteúdo programático de nível médio sem grande peso numérico."
      }
    },
    "niveis": {
      "iniciante": "IPv6: 128 bits = 8 grupos de 16 bits em hexadecimal, separados por dois-pontos (ex.: 2001:0db8:0000:0000:0000:ff00:0042:8329). Regras de abreviação: (1) omitir zeros à esquerda em cada grupo (0db8 -> db8, 0042 -> 42); (2) substituir um único bloco de grupos consecutivos todos zero por :: (apenas uma vez por endereço). Exemplo abreviado: 2001:db8::ff00:42:8329. :: não pode ser usado mais de uma vez (ambiguidade). Endereço loopback: ::1. Endereço não especificado: ::.",
      "intermediario": "As duas regras são independentes e se aplicam em qualquer ordem. A omissão de zeros à esquerda vale grupo a grupo e é sempre permitida; a compressão com :: só pode substituir uma sequência contígua de grupos inteiramente zero e apenas uma vez. Ao expandir, conte os grupos presentes e complete com grupos 0000 até oito: 2001:db8::ff00:42:8329 tem 5 grupos, logo :: representa 3 grupos zero, resultando em 2001:0db8:0000:0000:0000:ff00:0042:8329.",
      "avancado": "A checagem de validade exige dois testes: nenhum grupo pode exceder quatro dígitos hexadecimais (FFFF) e o endereço deve ter exatamente oito grupos após a expansão. Um endereço com dois :: é ambíguo porque a quantidade de zeros de cada ocorrência não pode ser determinada; endereços como 2001:db8::1::2 são portanto inválidos. Em diagnósticos, a expansão completa evita erro de leitura ao comparar prefixos ou aplicar filtros.",
      "especialista": "Em ambientes de produção, a representação canônica importa para bases IPAM, comparação de prefixos e normalização de logs: ferramentas distintas podem exibir formas abreviadas diferentes para o mesmo endereço, e a ordenação textual não corresponde à ordenação numérica. Casos de borda incluem :: (todos os bits zero, endereço não especificado), ::1 (loopback /128) e endereços com :: no início ou no fim, como ::ffff:0:0. A validação por expressão regular e a expansão antes de comparar são práticas defensivas."
    },
    "comparacoes": [
      {
        "tema": "Omissão de zeros à esquerda vs. compressão com ::",
        "a": {
          "rotulo": "Zeros à esquerda",
          "texto": "Regra por grupo: 0db8 -> db8 e 0042 -> 42. Pode ser aplicada em todos os grupos e não altera o número de grupos do endereço."
        },
        "b": {
          "rotulo": "Compressão com ::",
          "texto": "Regra por bloco: substitui uma sequência de grupos inteiramente zero, como em 2001:db8::ff00:42:8329. Só vale para um bloco e apenas uma vez por endereço."
        },
        "diferencaGabarito": "A primeira regra encurta grupos e sempre é válida; a segunda encurta sequências de grupos zero e é única. Aplicar :: duas vezes torna o endereço ambíguo e, por isso, inválido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Pode-se usar :: mais de uma vez no mesmo endereço para comprimir múltiplos blocos de zeros.'",
        "porqueErrada": "Com duas ocorrências, não se pode determinar quantos grupos de zero cada uma representa: a expansão produziria endereços diferentes para a mesma escrita.",
        "versaoCorreta": "Errado. :: pode ser usado apenas uma vez por endereço; caso contrário, o endereço seria ambíguo."
      },
      {
        "afirmacaoEquivocada": "O endereço 2001:db8::1 tem apenas quatro grupos e, por isso, é um endereço curto válido.",
        "porqueErrada": "Confunde a forma abreviada com a forma completa: :: representa grupos omitidos, e todo endereço IPv6 válido tem oito grupos após a expansão.",
        "versaoCorreta": "2001:db8::1 expande para oito grupos: 2001:0db8:0000:0000:0000:0000:0000:0001."
      },
      {
        "afirmacaoEquivocada": "Os zeros à esquerda de cada grupo hexadecimal são obrigatórios na forma completa.",
        "porqueErrada": "A obrigatoriedade vale apenas para a forma expandida didática; a regra de abreviação permite omitir zeros à esquerda sem alterar o endereço representado.",
        "versaoCorreta": "Zeros à esquerda podem ser omitidos: 0db8 e db8, ou 0042 e 42, representam o mesmo grupo de 16 bits."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Endereço IPv6 com 128 bits em oito grupos de 16 bits",
        "Notação hexadecimal separada por dois-pontos",
        "Regra 1: omitir zeros à esquerda de cada grupo",
        "Regra 2: comprimir uma única sequência de grupos zero com ::",
        "Endereços especiais: ::1 (loopback) e :: (não especificado)"
      ],
      "regras": [
        ":: pode aparecer no máximo uma vez por endereço",
        "Após a expansão, o endereço deve ter exatamente oito grupos",
        "Nenhum grupo pode ter mais de quatro dígitos hexadecimais"
      ],
      "comparacoes": [
        "Zeros à esquerda (por grupo, sempre permitido) vs. :: (por bloco, uma única vez)",
        "IPv4 decimal pontuado com 4 octetos vs. IPv6 hexadecimal com 8 grupos"
      ],
      "fluxos": [
        "Forma completa → omitir zeros à esquerda → localizar a maior sequência de grupos zero → aplicar :: uma vez"
      ],
      "excecoes": [
        ":: representa todos os oito grupos zero (endereço não especificado)",
        "Endereços com dois :: são inválidos por ambiguidade"
      ],
      "palavrasChave": [
        "IPv6",
        "abreviação",
        "expansão",
        "loopback",
        "hexadecimal"
      ],
      "checklist": [
        "Reconheço os oito grupos de 16 bits?",
        "Aplico as duas regras de abreviação?",
        "Expando corretamente um endereço com ::?",
        "Identifico ::1 e ::"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Abreviar 2001:0db8:0000:0000:0000:0000:0000:0001 aplicando as duas regras de compressão do IPv6.",
        "dados": "Endereço completo com oito grupos: 2001, 0db8, 0000, 0000, 0000, 0000, 0000 e 0001. Há seis grupos consecutivos inteiramente zero no meio do endereço.",
        "conceitos": [
          "Regra de zeros à esquerda",
          "Regra de compressão com ::"
        ],
        "estrategia": "Aplicar as duas regras em sequência: primeiro encurtar cada grupo removendo zeros à esquerda e depois comprimir a única sequência de grupos zero.",
        "execucao": [
          "Remover zeros à esquerda: 2001:db8:0:0:0:0:0:1",
          "Identificar a maior sequência de grupos zero: do terceiro ao sétimo grupo",
          "Aplicar :: uma única vez no lugar dessa sequência",
          "Conferir o resultado: 2001:db8::1"
        ],
        "resultado": "2001:db8::1 (zeros à esquerda removidos e bloco de zeros comprimido com ::).",
        "justificativa": "A omissão de zeros à esquerda é válida grupo a grupo, e a sequência de zeros do meio pode ser comprimida uma única vez por ::. A escrita 2001:db8::1 preserva os oito grupos na expansão e é a forma abreviada canônica do endereço apresentado, sem ambiguidade.",
        "errosFrequentes": [
          "Comprimir também os grupos não zero subsequentes, escrevendo formas como 2001:db8::",
          "Aplicar :: em duas sequências separadas do mesmo endereço"
        ],
        "variacao": "Abreviar 2001:0db8:0000:0000:0000:ff00:0042:8329 e, em seguida, abreviar fe80:0000:0000:0000:0202:b3ff:fe1e:8329, indicando em cada caso qual sequência foi comprimida."
      },
      {
        "tipo": "aplicacao",
        "problema": "Expandir o endereço abreviado ::1 para a forma completa, com oito grupos de 16 bits escritos em hexadecimal.",
        "dados": "Endereço abreviado ::1, usado como loopback IPv6. Nenhum grupo é explicitado antes do 1, portanto o :: ocupa a posição inicial.",
        "conceitos": [
          "Expansão de ::",
          "Endereço de loopback"
        ],
        "estrategia": "Contar os grupos explicitados e completar com grupos 0000 até oito, posicionando os grupos ausentes onde o :: aparece.",
        "execucao": [
          "Contar os grupos explicitados: apenas o grupo 1",
          "Calcular os grupos omitidos: 8 - 1 = 7 grupos zero",
          "Preencher com 0000 os grupos anteriores, mantendo 0001 no final",
          "Escrever a forma completa: 0000:0000:0000:0000:0000:0000:0000:0001"
        ],
        "resultado": "A forma completa é 0000:0000:0000:0000:0000:0000:0000:0001, endereço de loopback do IPv6, em que o :: representa sete grupos zero.",
        "justificativa": "A regra de expansão exige oito grupos de 16 bits; como apenas um grupo está explícito, o :: representa sete grupos zero. O resultado 0000:0000:0000:0000:0000:0000:0000:0001 corresponde ao endereço de loopback IPv6, equivalente funcional ao 127.0.0.1 do IPv4.",
        "errosFrequentes": [
          "Expandir gerando oito grupos iguais a 0001",
          "Interpretar ::1 como um prefixo /1 em vez de um endereço de host"
        ],
        "variacao": "Expandir 2001:db8::1 e :: para a forma completa e indique, em cada caso, quantos grupos zero o :: representa."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato escreve o endereço 2001:db8::1::2 e afirma que a compressão com :: pode ser repetida para abreviar vários blocos de zeros. Essa leitura está correta?",
        "dados": "Endereço proposto: 2001:db8::1::2. Há duas ocorrências de :: separadas por grupos explicitados, o que torna a expansão ambígua.",
        "conceitos": [
          "Unicidade da compressão",
          "Ambiguidade de expansão"
        ],
        "estrategia": "Testar a expansão: se duas escritas distintas de zeros satisfazem a forma abreviada, o endereço não identifica um destino único e a notação é inválida.",
        "execucao": [
          "Contar os grupos explicitados: 2001, db8, 1 e 2 (quatro grupos)",
          "Calcular os grupos zero a distribuir: 8 - 4 = 4 grupos entre as duas ocorrências",
          "Testar divisões possíveis: 3 e 1, ou 2 e 2, produzindo endereços diferentes",
          "Concluir que a escrita não corresponde a um único endereço IPv6 válido"
        ],
        "resultado": "A escrita é inválida: com duas ocorrências de :: a expansão deixa de ser única, e a norma admite no máximo uma compressão por endereço.",
        "justificativa": "A compressão com :: substitui uma sequência de grupos zero, e a regra limita seu uso a uma ocorrência justamente para que a expansão seja única. Com quatro grupos zero a distribuir entre duas ocorrências, existem várias expansões possíveis, e o destinatário não saberá qual delas foi pretendida; por isso a notação é rejeitada como inválida.",
        "errosFrequentes": [
          "Achar que a compressão é permitida em cada bloco de zeros, como se cada bloco fosse independente",
          "Validar o endereço apenas pela contagem de grupos, sem testar a unicidade da expansão"
        ],
        "variacao": "Avalie se fe80::202:b3ff:fe1e::8329 é válido e reescreva o endereço de forma abreviada correta, comprimindo apenas a maior sequência de grupos zero."
      }
    ]
  },
  "m2-u4-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Reconhecer o tipo de um endereço IPv6 pelo prefixo é item frequente de prova: a distinção entre global unicast, unique local, link-local e multicast determina se o endereço é roteável, privado ou restrito ao enlace.",
      "preRequisitos": [
        "Representação hexadecimal e compressão de endereços IPv6",
        "Noções de prefixo e notação CIDR",
        "Diferença entre endereço de unicast e de grupo"
      ],
      "objetivosObservaveis": [
        "Classificar um endereço IPv6 pelo prefixo que o inicia",
        "Explicar a função e o alcance de cada tipo de endereço",
        "Relacionar prefixos de /48, /56 e /64, usados na definição de sub-rede e de organização",
        "Diferenciar o link-local do IPv6 do link-local do IPv4"
      ],
      "competencias": [
        "Classificação de endereços IPv6",
        "Planejamento de prefixos por organização e sub-rede",
        "Leitura de itens sobre endereçamento global e local"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u4-t4-s1 (Representação e abreviação de endereços IPv6) — base para ler os prefixos",
        "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — analogia IPv4 entre público e privado"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens que pedem a classificação de endereços IPv6 pelo prefixo aparecem com regularidade em provas de redes, com o contraste entre global unicast e unique local como distrator mais frequente. A classificação é estimativa pedagógica qualitativa."
      },
      "prequisitos": []
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece que o endereço global unicast começa em 2000::/3 e é o equivalente ao endereço público do IPv4, e que o endereço link-local começa em fe80::/10 e serve apenas à comunicação dentro do mesmo enlace.",
      "intermediario": "Nível intermediário: o aluno associa cada prefixo ao tipo: unique local em fc00::/7, multicast em ff00::/8, loopback em ::1 e endereço não especificado em ::; distingue endereços de documentation, como 2001:db8::, dos globais atribuídos.",
      "avancado": "Nível avançado: o aluno explica por que o IPv6 eliminou o broadcast e o substituiu por grupos multicast, como ff02::1 para todos os nós do enlace e ff02::2 para todos os roteadores, e reconhece a economia de processamento resultante.",
      "especialista": "Nível especialista: o aluno planeja o endereçamento IPv6, adotando /64 por sub-rede conforme o mecanismo de autoconfiguração sem estado, /48 ou /56 por organização e /128 para um host específico, e sabe que o anycast reutiliza um endereço global unicast em vários nós."
    },
    "comparacoes": [
      {
        "tema": "Global unicast x unique local",
        "a": {
          "rotulo": "Global unicast",
          "texto": "Prefixo 2000::/3, com endereços roteáveis na Internet, equivalentes aos endereços públicos do IPv4, atribuídos por registro e roteados pelos provedores."
        },
        "b": {
          "rotulo": "Unique local",
          "texto": "Prefixo fc00::/7, com endereços de uso interno, não roteáveis na Internet, análogos às faixas privadas reservadas no IPv4."
        },
        "diferencaGabarito": "A diferença é o alcance do roteamento: o global unicast é publicado na Internet, enquanto o unique local existe apenas dentro do domínio interno e não é roteado externamente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O IPv6 mantém o broadcast, com difusão para todos os hosts do enlace.",
        "porqueErrada": "O IPv6 eliminou o broadcast porque a difusão indiscriminada desperta processamento em todos os nós; as funções correspondentes passaram a ser exercidas por grupos multicast específicos.",
        "versaoCorreta": "Não há broadcast em IPv6; as difusões são feitas por multicast, como ff02::1 para todos os nós e ff02::2 para todos os roteadores do enlace."
      },
      {
        "afirmacaoEquivocada": "O endereço fe80::/10 é roteável na Internet, assim como os endereços globais.",
        "porqueErrada": "Esse prefixo identifica endereços de escopo local ao enlace, usados no protocolo de descoberta de vizinhos e na autoconfiguração; roteadores não os anunciam para fora do segmento.",
        "versaoCorreta": "fe80::/10 é link-local, vale apenas dentro do enlace e não é roteável na Internet, ao contrário dos endereços 2000::/3."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Global unicast (2000::/3)",
        "Unique local (fc00::/7)",
        "Link-local (fe80::/10)",
        "Multicast (ff00::/8)",
        "Loopback (::1) e não especificado (::)",
        "Anycast"
      ],
      "regras": [
        "O tipo do endereço é reconhecido pelo prefixo que o inicia",
        "Sub-rede IPv6 usa /64 por padrão; /128 identifica um único host",
        "Não existe broadcast em IPv6; as funções são cobertas por grupos multicast"
      ],
      "comparacoes": [
        "Global unicast (roteável) x unique local (privado)",
        "Link-local IPv6 fe80::/10 x link-local IPv4 169.254.0.0/16"
      ],
      "fluxos": [
        "Ler o prefixo do endereço → classificar o tipo → verificar o alcance do roteamento → conferir o tamanho do prefixo da sub-rede"
      ],
      "excecoes": [
        "O anycast não tem prefixo próprio e usa um endereço global unicast replicado em vários nós",
        "O prefixo de documentation 2001:db8:: não deve ser usado em produção"
      ],
      "palavrasChave": [
        "prefixo",
        "roteável",
        "privado",
        "enlace",
        "multicast",
        "autoconfiguração"
      ],
      "checklist": [
        "Classifiquei o endereço pelo prefixo?",
        "Verifiquei se o alcance pretendido é o enlace ou a Internet?",
        "Confirmei o tamanho do prefixo de sub-rede?",
        "Evitei confundir fe80::/10 com 169.254.0.0/16?",
        "Tratei a ausência de broadcast no IPv6 corretamente?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classificar os endereços fe80::1, 2001:db8::1, fd00::1 e ff02::1 quanto ao tipo e ao alcance.",
        "dados": "Endereços IPv6: fe80::1, 2001:db8::1, fd00::1 e ff02::1; prefixes correspondentes fe80::/10, 2000::/3, fc00::/7 e ff00::/8.",
        "conceitos": [
          "Classificação por prefixo",
          "Link-local",
          "Multicast"
        ],
        "estrategia": "Ler o início de cada endereço, associá-lo ao prefixo correspondente e indicar a função e o alcance de cada tipo.",
        "execucao": [
          "fe80::1 começa em fe80, dentro de fe80::/10: link-local do enlace.",
          "2001:db8::1 começa em 2000::/3: global unicast, reservado à documentação.",
          "fd00::1 começa em fd00, dentro de fc00::/7: unique local, de uso interno.",
          "ff02::1 começa em ff00::/8: multicast do grupo de todos os nós do enlace."
        ],
        "resultado": "fe80::1 é link-local, 2001:db8::1 é global unicast de documentação, fd00::1 é unique local e ff02::1 é multicast de todos os nós.",
        "justificativa": "O tipo é definido pelo prefixo: fe80 indica escopo de enlace, fd00 indica uso interno, o bloco 2000 indica endereçamento global e o byte ff inicial indica endereço de grupo.",
        "errosFrequentes": [
          "Classificar fe80::1 como endereço global por não ter a forma do IPv4",
          "Confundir o endereço de documentação com um endereço em produção",
          "Ler ff02::1 como endereço de host individual"
        ],
        "variacao": "Se o endereço for 2003::1, ele permanece no bloco global unicast 2000::/3, mas deixa de ser o prefixo de documentação e passa a representar um endereço global atribuído."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explicar por que o IPv6 eliminou o broadcast e quais mecanismos substituem essa função em uma rede local.",
        "dados": "Rede IPv6 local comalink de Ethernet; comparação de custo de processamento entre difusão para todos e grupos multicast específicos.",
        "conceitos": [
          "Ausência de broadcast",
          "Multicast",
          "Grupos de enlace"
        ],
        "estrategia": "Descrever o custo do broadcast para os hosts que não precisam da mensagem, apontar os grupos multicast que cobrem as mesmas funções e relacionar o mecanismo à eficiência do enlace.",
        "execucao": [
          "Descrever o broadcast IPv4: todos os hosts do segmento processam o quadro.",
          "Relacionar ao IPv6: a difusão indiscriminada foi removida do protocolo.",
          "Indicar os grupos substitutos: ff02::1 para todos os nós e ff02::2 para todos os roteadores.",
          "Explicar o ganho: apenas os hosts inscritos no grupo recebem a mensagem."
        ],
        "resultado": "O broadcast foi substituído por grupos multicast: as funções de difusão são cobertas por endereços de grupo, e apenas os nós interessados recebem a mensagem.",
        "justificativa": "No IPv6, a entrega é feita por grupos identificados por prefixo ff, o que evita o processamento desnecessário de quadros de difusão em hosts que não participam do grupo solicitado.",
        "errosFrequentes": [
          "Afirmar que o IPv6 ainda suporta broadcast para compatibilidade",
          "Confundir grupo multicast com endereço de unicast de servidor",
          "Citar ff02::2 como grupo de todos os nós em vez de todos os roteadores"
        ],
        "variacao": "Em redes com muitos dispositivos móveis e sensores, a redução de processamento é proporcional ao número de hosts que não pertencem ao grupo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'fe80::/10 é roteável na Internet.' Julgar a afirmação e apresentar a leitura correta.",
        "dados": "Prefixo fe80::/10 apresentado como rota pública; contexto de protocolo de descoberta de vizinhos e autoconfiguração de endereço.",
        "conceitos": [
          "Escopo do endereço",
          "Link-local",
          "Roteabilidade"
        ],
        "estrategia": "Ligar o prefixo à função que ele atende no protocolo, mostrar por que o escopo é restrito e delimitar onde o endereço pode circular.",
        "execucao": [
          "Associar fe80::/10 ao prefixo de endereços de enlace.",
          "Relacionar o uso à descoberta de vizinhos e à autoconfiguração.",
          "Explicar que roteadores não anunciam esses endereços fora do segmento.",
          "Contrastar com o bloco global unicast 2000::/3."
        ],
        "resultado": "Errado: fe80::/10 é o prefixo link-local, válido apenas dentro do enlace e jamais roteado na Internet, ao contrário dos endereços do bloco 2000::/3.",
        "justificativa": "O escopo de um endereço é definido pelo bloco alocado a ele; endereços link-local existem para a comunicação local e não são propagados por roteadores, que ignoram qualquer rota para esse prefixo.",
        "errosFrequentes": [
          "Confundir o endereço link-local do IPv6 com o do IPv4, 169.254.0.0/16",
          "Supor que a autoconfiguração gera endereço global",
          "Considerar que o NAT é dispensado apenas por haver endereços link-local"
        ],
        "variacao": "Se a organização adotar endereços unique local fd00::/8 em sua rede interna, o tráfego continua sem roteamento para a Internet, mas pode ser roteado entre segmentos internos."
      }
    ]
  },
  "m2-u4-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A maioria dos erros em questões de endereçamento decorre de armadilhas previsíveis, como confundir prefixo com número de hosts, esquecer a subtração de rede e broadcast,(classificar) faixas pela aparência e ignorar o alinhamento do bloco; reconhecê-las evita perda de pontos.",
      "preRequisitos": [
        "Cálculo de máscara decimal e prefixo CIDR",
        "Operação lógica AND entre endereço e máscara",
        "Regras de sub-rede e endereçamento VLSM"
      ],
      "objetivosObservaveis": [
        "Listar as armadilhas mais comuns do endereçamento IPv4 e IPv6",
        "Recalcular rede e broadcast a partir do AND com a máscara",
        "Classificar faixas privadas e públicas sem rely na aparência",
        "Verificar o alinhamento de um endereço dentro do bloco"
      ],
      "competencias": [
        "Autoverificação de cálculos de rede",
        "Precisão em itens quantitativos de prova",
        "Auditoria de listas de endereçamento"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u4-t3-s1 (VLSM: máscara de comprimento variável) — a ordem de alocação é uma das armadilhas do plano",
        "m2-u4-t4-s2 (Prefixos e tipos de endereço IPv6) — antecipa a confusão entre link-local IPv4 e IPv6"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "As armadilhas de endereçamento organizam boa parte dos itens de cálculo de rede em provas de TI, e o erro de alinhamento é o distrator mais frequente. A classificação é estimativa pedagógica qualitativa, não medição de incidência."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno memoriza que o número de hosts utilizáveis de uma sub-rede é 2 elevado ao número de bits de host, menos dois, e que o /24 corresponde a 256 endereços totais e 254 endereços utilizáveis.",
      "intermediario": "Nível intermediário: o aluno converte prefixo em máscara decimal e calcula o endereço de rede pelo AND lógico do endereço com a máscara, obtendo a partir dele o broadcast e o intervalo de hosts.",
      "avancado": "Nível avançado: o aluno verifica o alinhamento do bloco, identifica o erro em afirmações como dizer que 192.168.1.100/25 pertence à rede .128 e reconhece que 172.32.0.0 é público, embora pareça privado.",
      "especialista": "Nível especialista: o aluno audita uma lista inteira de endereços, sinalizando cada armadilha presente, checandoclassification Ranges, prefixos IPv6 duplicados, alocação VLSM fora de ordem e classificações feitas por aparência."
    },
    "comparacoes": [
      {
        "tema": "Classificação por aparência x classificação por cálculo",
        "a": {
          "rotulo": "Por aparência",
          "texto": "Deduz a faixa a partir do primeiro octeto, supondo que todo endereço iniciado por 192 ou 172 seja privado, o que leva a erro sobre a faixa 172.32.0.0 em diante."
        },
        "b": {
          "rotulo": "Por cálculo",
          "texto": "Confere o bloco reservado pela máscara e o endereço de rede calculado, o que permite afirmar com segurança se o endereço é privado, público ou de enlace."
        },
        "diferencaGabarito": "A aparência falha em faixas de transição, como 172.16.0.0/12, que termina em 172.31; somente o cálculo com a máscara delimita o bloco corretamente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O endereço 192.168.1.100/25 pertence à rede 192.168.1.128/25.",
        "porqueErrada": "O AND do último octeto 100, em binário 01100100, com a máscara 255.255.255.128 resulta em zero, de modo que o endereço pertence ao bloco que começa em .0 e não ao que começa em .128.",
        "versaoCorreta": "192.168.1.100/25 pertence à rede 192.168.1.0/25, com hosts de .1 a .126 e broadcast em .127."
      },
      {
        "afirmacaoEquivocada": "O endereço 172.32.5.3 é privado, pois começa com 172.",
        "porqueErrada": "A faixa privada 172.16.0.0/12 cobre de 172.16.0.0 até 172.31.255.255; a partir de 172.32.0.0 os endereços são públicos, embora mantenham o mesmo primeiro octeto.",
        "versaoCorreta": "172.32.5.3 é público; o bloco privado dessa faixa termina em 172.31.255.255."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Prefixo e máscara",
        "Endereço de rede e broadcast",
        "Alinhamento de bloco",
        "Operação AND",
        "Faixas privadas",
        "Link-local IPv4 e IPv6"
      ],
      "regras": [
        "Hosts utilizáveis = 2^(32 − n) − 2",
        "Rede = endereço IP AND máscara; broadcast = rede OR máscara invertida",
        "O último octeto igual a 255 não é, por si só, indicador de broadcast"
      ],
      "comparacoes": [
        "Alinhamento por cálculo x classificação por aparência",
        "Link-local IPv4 169.254.0.0/16 x link-local IPv6 fe80::/10"
      ],
      "fluxos": [
        "Converter prefixo em máscara → calcular rede por AND → derivar broadcast e intervalo → verificar alinhamento → classificar a faixa pela máscara"
      ],
      "excecoes": [
        "O prefixo /31 dispensa a reserva de rede e broadcast em enlaces ponto a ponto",
        "O endereço 255.255.255.255 é o broadcast limitado, e não o indicador de uma rede"
      ],
      "palavrasChave": [
        "armadilha",
        "alinhamento",
        "AND",
        "broadcast",
        "faixa privada",
        "recalcular"
      ],
      "checklist": [
        "Converti o prefixo em máscara decimal?",
        "Recalculei a rede pelo AND em vez de confiar na aparência?",
        "Descontei rede e broadcast ao contar os hosts?",
        "Verifiquei a classificação da faixa pela máscara?",
        "Chequei a duplicação do operador dois pontos no IPv6?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular a rede, o broadcast e o intervalo de hosts do endereço 10.20.30.40/26, mostrando o recálculo pelo AND.",
        "dados": "Endereço 10.20.30.40 com prefixo /26; máscara correspondente 255.255.255.192; último octeto 40 em binário igual a 00101000.",
        "conceitos": [
          "Máscara decimal",
          "Operação AND",
          "Contagem de hosts"
        ],
        "estrategia": "Converter o prefixo em máscara, calcular o AND do último octeto com o valor da máscara e derivar do resultado o endereço de rede, o broadcast e o intervalo útil.",
        "execucao": [
          "Converter /26 em máscara: 255.255.255.192.",
          "Calcular o AND do último octeto: 00101000 AND 11000000 resulta em 00000000, ou seja, zero.",
          "Formar a rede: 10.20.30.0/26.",
          "Calcular o broadcast: todos os bits de host em um, o que resulta em 10.20.30.63.",
          "Contar os hosts: 2^6 − 2 = 62, de .1 a .62."
        ],
        "resultado": "Rede 10.20.30.0/26, broadcast 10.20.30.63 e 62 endereços utilizáveis, de .1 a .62.",
        "justificativa": "Como a máscara de /26 deixa seis bits de host, o AND zera os bits menos significativos do octeto 40 e fixa o endereço de rede em .0, whence o intervalo de .1 a .62 e o broadcast em .63.",
        "errosFrequentes": [
          "Assumir rede .64 por causa do terceiro bit do octeto",
          "Contar 64 hosts em vez de 62, esquecendo rede e broadcast",
          "Usar o valor 40 como broadcast sem recalcular"
        ],
        "variacao": "Para 10.20.30.200/26, o AND do octeto 200 com 192 resulta em 192, logo a rede é 10.20.30.192/26, com hosts de .193 a .254 e broadcast em .255."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explicar por que a ordem de alocação das sub-redes no VLSM precisa ser decrescente e o que falha quando se começa pelas menores.",
        "dados": "Bloco 192.168.10.0/24; demandas de 50, 25 e 2 endereços; tentativa de alocar primeiro a sub-rede de 2 endereços.",
        "conceitos": [
          "VLSM",
          "Alinhamento de blocos",
          "Fragmentação do espaço"
        ],
        "estrategia": "Comparar a sequência de alocação, mostrar como o primeiro bloco pequeno ocupa o início do espaço e impedir que a maior demanda encontre faixa alinhada disponível.",
        "execucao": [
          "Calcular os prefixos por demanda: /26, /27 e /30.",
          "Alocar primeiro o /30, que ocupa os quatro primeiros endereços do bloco.",
          "Verificar que a faixa seguinte deixa de estar alinhada ao tamanho do /26 exigido.",
          "Concluir que a alocação decrescente preserva blocos contíguos e alinhados para as maiores demandas."
        ],
        "resultado": "Começar pelas sub-redes pequenas fragmenta o espaço e impede a alocação contígua e alinhada do /26, obrigando a refazer o plano inteiro.",
        "justificativa": "Cada sub-rede precisa ocupar um múltiplo do próprio tamanho dentro do bloco; consumir o início do espaço com um bloco pequeno desloca as fronteiras e quebra a condição de alinhamento exigida pela maior demanda.",
        "errosFrequentes": [
          "Alocar na ordem em que os blocos aparecem na demanda",
          "Supor que qualquer sequência de prefixos cabe no bloco",
          "Não conferir as fronteiras após cada alocação"
        ],
        "variacao": "Se as demandas forem 100, 50 e 2 endereços, a ordem decrescente produz /25, /26 e /30, e a sobra fica concentrada no fim do bloco, o que amplia a folga para crescimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Para descobrir o broadcast, basta olhar se o último octeto vale 255.' Julgar a afirmação e apresentar o método correto.",
        "dados": "Três endereços com máscara /24, /26 e /30, Respectivamente; apenas um deles apresenta último octeto igual a 255.",
        "conceitos": [
          "Broadcast",
          "Máscara",
          "Bits de host"
        ],
        "estrategia": "Mostrar que o broadcast depende dos bits de host em um dentro da máscara, e não do valor numérico do último octeto, comparando os três casos.",
        "execucao": [
          "Lembrar que o broadcast se obtém ligando todos os bits de host.",
          "Com /24, os oito bits de host em um produzem o último octeto 255.",
          "Com /26, restam seis bits de host, logo o broadcast termina em 63.",
          "Com /30, restam dois bits de host, logo o broadcast termina em 3."
        ],
        "resultado": "Errado: o valor 255 aparece como último octeto do broadcast apenas com a máscara /24; nos demais casos o broadcast é determinado pela quantidade de bits de host.",
        "justificativa": "O broadcast é o maior endereço do bloco, obtido da máscara, e não um valor fixo; com máscara /26, o maior endereço é .63, e com /30, é .3, o que mostra que a máscara determina o resultado.",
        "errosFrequentes": [
          "Usar 255 como broadcast em qualquer máscara",
          "Confundir o endereço de broadcast com o endereço 255.255.255.255",
          "Esquecer que o endereço de rede também deriva da máscara"
        ],
        "variacao": "Com um prefixo /22, o bloco tem dez bits de host e o broadcast do segmento 192.168.0.0/22 é 192.168.3.255, mostrando que o valor 255 aparece apenas no último dos quatro octetos."
      }
    ]
  },
  "m2-u5-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "ping é o primeiro teste de conectividade em redes locais e de acesso, e concursos cobram sua interpretação para distinguir latência, perda e bloqueio de ICMP, evitando conclusões precipitadas sobre falha total de serviço.",
      "preRequisitos": [
        "ICMP echo request e echo reply",
        "Noção de RTT e TTL",
        "Comando básico em terminal Linux/Windows"
      ],
      "objetivosObservaveis": [
        "explicará a função do ping, sua sintaxe básica e interpretará a saída (RTT, perda, TTL)",
        "executará ping com -c ou -n para limitar envios e comparar tempos",
        "identificará mensagens Destination Host Unreachable versus Request timed out"
      ],
      "competencias": [
        "Diagnóstico inicial de conectividade IP",
        "Leitura crítica de saída de ferramenta de rede",
        "Evitar inferência incorreta a partir de bloqueio de ICMP"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Questões de diagnóstico aparecem em provas de redes do , e , exigindo leitura de RTT, perda e mensagens de erro do ping para localizar camadas IP versus aplicação."
      }
    },
    "niveis": {
      "iniciante": "ping envia ICMP echo request e espera echo reply, medindo RTT (round-trip time) e perda de pacotes. Sintaxe: ping <host> (Linux/macOS contínuo; Windows envia 4 por padrão). Opções: -c (quantidade, Linux), -n (quantidade, Windows), -t (TTL), -i (intervalo). Interpretação: RTT baixo e estável = boa conectividade; RTT alto = latência/congestionamento; perda = problema de enlace/roteamento/firewall; 'Destination Host Unreachable' = roteamento; 'Request timed out' = sem resposta (firewall, host desligado ou perda).",
      "intermediario": "Com TTL e intervalo ajustados, o aluno calcula variação de RTT, interpreta porcentagem de perda e relaciona mensagens de erro a causas prováveis: bloqueio de ICMP, host inativo ou roteamento quebrado, distinguindo problemas de camada 3 de indisponibilidade de serviço de aplicação.",
      "avancado": "Analisa sequências de ping com latência crescente, correlaciona com congestionamento, jitter e perda intermitente, e avalia impacto de MTU e fragmentação, propondo testes complementares (traceroute) quando ping isolado gera ambiguidade.",
      "especialista": "Modela cenários de bloqueio seletivo de ICMP por políticas de firewall, explica por que serviços TCP permanecem acessíveis mesmo com ping falhando e projeta procedimentos de diagnóstico que combinam ping, traceroute e teste de porta sem assumir simetria de rota."
    },
    "comparacoes": [
      {
        "tema": "Ping versus teste de conectividade de aplicação",
        "a": {
          "rotulo": "Ping ICMP",
          "texto": "Envia echo request e mede RTT e perda na camada 3, podendo ser bloqueado por firewall sem indicar falha de serviço."
        },
        "b": {
          "rotulo": "Teste de porta TCP",
          "texto": "Tenta estabelecer conexão TCP no porto do serviço, confirmando disponibilidade da aplicação independentemente de ICMP."
        },
        "diferencaGabarito": "Ping avalia caminho IP; teste de porta avalia serviço. Sucesso de porta com ping falho indica bloqueio de ICMP, não falha total da rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Se o ping falha, a rede está totalmente inoperante.'",
        "porqueErrada": "Ignora que firewalls podem bloquear ICMP enquanto TCP/UDP continuam funcionando, e confunde conectividade IP com disponibilidade de aplicação.",
        "versaoCorreta": "Errado. Firewall pode bloquear ICMP enquanto HTTP/HTTPS funcionam. Ping é indicador, não prova absoluta."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'RTT alto sempre significa cabo defeituoso.'",
        "porqueErrada": "RTT reflete distância, carga de roteadores e filas; latência alta pode ser normal em links internacionais ou por congestionamento temporário.",
        "versaoCorreta": "RTT alto indica latência elevada, que pode decorrer de distância geográfica, congestionamento ou roteamento subótimo, não necessariamente falha física."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ICMP echo request/reply",
        "Round-trip time RTT",
        "TTL Time To Live"
      ],
      "regras": [
        "Ping limitado a camada 3, não testa aplicação",
        "Ausência de resposta não prova indisponibilidade de serviço"
      ],
      "comparacoes": [
        "Ping indica caminho IP; teste de porta indica serviço"
      ],
      "fluxos": [
        "Emitir echo request → aguardar reply → calcular RTT e perda"
      ],
      "excecoes": [
        "ICMP bloqueado por política de segurança",
        "Host pode responder TCP mesmo sem responder ICMP"
      ],
      "palavrasChave": [
        "ICMP",
        "RTT",
        "perda",
        "TTL",
        "timeout"
      ],
      "checklist": [
        "Verificar sintaxe correta do comando",
        "Interpretar RTT médio e desvio",
        "Distinguir timeout de host unreachable",
        "Testar complementarmente com teste de porta"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Saída do ping mostra '64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.3 ms'. O que indica?",
        "dados": "Host 8.8.8.8 respondeu em 12.3 ms, TTL 117, pacote de 64 bytes, sequência 1. Sem perdas relatadas nesta amostra.",
        "conceitos": [
          "ICMP echo reply",
          "RTT"
        ],
        "estrategia": "Ler campos da linha de resposta, identificar RTT, TTL e ausência de perda, concluir conectividade IP funcional.",
        "execucao": [
          "Observar endereço de origem na resposta",
          "Registrar tempo time=12.3 ms",
          "Inferir TTL 117 como número de saltos percorridos",
          "Concluir que pacote chegou ao destino e retornou"
        ],
        "resultado": "Resposta recebida com sucesso; RTT 12,3 ms; TTL 117 (passou por ~11 roteadores, se TTL inicial 128). Conectividade IP ok.",
        "justificativa": "A presença de echo reply comprova caminho IP bidirecional; RTT baixo indica baixa latência; TTL decrescente indica saltos percorridos, compatível com conectividade funcional.",
        "errosFrequentes": [
          "Confundir TTL com número exato de roteadores sem considerar TTL inicial",
          "Interpretar RTT único como garantia de estabilidade"
        ],
        "variacao": "Mudar host para 1.1.1.1 e observar RTT diferente, mantendo a mesma lógica de interpretação de TTL e tempo."
      },
      {
        "tipo": "aplicacao",
        "problema": "ping ao gateway (192.168.1.1) funciona, mas ping a 8.8.8.8 falha. Onde está o problema?",
        "dados": "Ping para 192.168.1.1 retorna RTT 1 ms sem perda. Ping para 8.8.8.8 gera Request timed out em 100% das tentativas com -c 4.",
        "conceitos": [
          "Roteamento local",
          "NAT e ISP"
        ],
        "estrategia": "Comparar alcance local versus remoto, inferir que problema está além do gateway e verificar roteamento padrão, NAT ou bloqueio.",
        "execucao": [
          "Confirmar resposta do gateway",
          "Registrar falta de resposta ao destino externo",
          "Verificar rota padrão no host",
          "Considerar modem/ISP como possível ponto de falha"
        ],
        "resultado": "Conectividade local ok; problema de roteamento/NAT/ISP além do gateway. Verificar rota padrão, NAT, modem/ISP.",
        "justificativa": "Resposta do gateway prova camada local; ausência de resposta externa aponta falha de encaminhamento além do primeiro salto, típica de configuração de rota, NAT ou serviço de acesso.",
        "errosFrequentes": [
          "Atribuir falha ao host remoto sem testar gateway",
          "Assumir que ping falho significa internet inoperante"
        ],
        "variacao": "Trocar destino externo por outro IP público e repetir ping, verificando se falha é específica ou geral de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se o ping falha, a rede está totalmente inoperante.' Avalie essa afirmação considerando firewall que bloqueia ICMP e serviço de aplicação funcionando.",
        "dados": "Ambiente corporativo com firewall bloqueando ICMP. Acesso HTTP ao servidor interno funciona normalmente, porém ping ao mesmo servidor retorna timeout.",
        "conceitos": [
          "Bloqueio de ICMP",
          "Camada de aplicação"
        ],
        "estrategia": "Contrastar teste de camada 3 com teste de serviço, evidenciar que ping mede ICMP, não disponibilidade da aplicação.",
        "execucao": [
          "Executar ping ao servidor e registrar timeout",
          "Acessar serviço via navegador e confirmar funcionamento",
          "Identificar política de firewall bloqueando ICMP",
          "Concluir que rede opera, apenas ICMP filtrado"
        ],
        "resultado": "Errado. Firewall pode bloquear ICMP enquanto HTTP/HTTPS funcionam. Ping é indicador, não prova absoluta.",
        "justificativa": "ICMP é protocolo independente; bloqueio por política de segurança impede echo reply, mas fluxos TCP para portas de serviço podem estar liberados, mantendo aplicação acessível.",
        "errosFrequentes": [
          "Equiparar ausência de resposta ICMP a falha total de rede",
          "Ignorar possibilidade de filtragem seletiva por protocolo"
        ],
        "variacao": "Substituir ping por teste de porta TCP 80 e observar sucesso mesmo com ping falho, reforçando distinção entre camada 3 e aplicação."
      }
    ]
  },
  "m2-u5-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "traceroute mapeia saltos até destino usando TTL crescente, permitindo localizar onde latência aumenta ou pacotes desaparecem, habilidade essencial para diagnóstico de roteamento cobrado em concursos de redes.",
      "preRequisitos": [
        "ICMP time exceeded",
        "Conceito de TTL",
        "Noção de roteamento"
      ],
      "objetivosObservaveis": [
        "explicará como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência)",
        "executará traceroute/tracert com sintaxe correta",
        "identificará ausência de resposta * e relacionará a bloqueio ou perda"
      ],
      "competencias": [
        "Diagnóstico de rota",
        "Interpretação de caminho lógico",
        "Criticar conclusões apressadas sobre falha"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": " e pedem interpretação de saída de traceroute, identificando * como ausência de resposta e explicando mecanismo de TTL crescente para descoberta de saltos."
      }
    },
    "niveis": {
      "iniciante": "traceroute (Linux/macOS) / tracert (Windows) mapeia a rota (saltos) até o destino, enviando pacotes com TTL crescente e capturando ICMP 'time exceeded' de cada roteador. Sintaxe: traceroute <host> (Linux, UDP por padrão ou ICMP com -I), tracert <host> (Windows, ICMP). Saída: lista de saltos com IP/nome e RTT de cada um. '*' indica ausência de resposta (roteador não responde ICMP, perda ou firewall). Limitações: roteadores podem não responder; rotas assimétricas; NAT; load balancing causa saltos variáveis.",
      "intermediario": "Compreende que cada salto responde com time exceeded quando TTL expira, mede RTT por salto, diferencia * de latência alta e reconhece que três tentativas por salto reduzem ruído de perda temporária.",
      "avancado": "Interpreta rotas assimétricas, identifica saltos que não respondem ICMP por política, correlaciona variação de RTT entre tentativas com balanceamento e avalia impacto de NAT e tunelamento no mapeamento.",
      "especialista": "Projeta procedimentos de diagnóstico combinando traceroute com ping e teste de porta, explica limitações de mapeamento quando roteadores silenciam ICMP e propõe interpretação cautelosa em ambientes com políticas de segurança rígidas."
    },
    "comparacoes": [
      {
        "tema": "Traceroute versus ping",
        "a": {
          "rotulo": "Traceroute",
          "texto": "Varre TTL crescente para descobrir cada salto e medir latência por trecho, expondo caminho."
        },
        "b": {
          "rotulo": "Ping",
          "texto": "Mede RTT ponta a ponta sem expor intermediários, útil para teste rápido de conectividade."
        },
        "diferencaGabarito": "Traceroute detalha rota; ping resume conectividade total."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'traceroute mostra a rota exata e simétrica de ida e volta.'",
        "porqueErrada": "O traceroute mostra caminho de ida baseado em TTL; roteamento de retorno pode usar caminhos diferentes e roteadores podem não responder ICMP.",
        "versaoCorreta": "Errado. Mostra a rota de ida (com base em TTL). A rota de volta pode ser diferente (roteamento assimétrico)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: '* no traceroute significa roteador quebrado definitivamente.'",
        "porqueErrada": "* indica ausência de resposta ICMP, que pode ser política de segurança, perda temporária ou filtragem, não falha física comprovada.",
        "versaoCorreta": "* indica que o salto não respondeu ICMP nesse momento, exigindo confirmação com outros testes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "TTL crescente",
        "ICMP time exceeded",
        "Salto"
      ],
      "regras": [
        "Cada salto decrementa TTL",
        "Roteador responde time exceeded quando TTL chega a zero"
      ],
      "comparacoes": [
        "Traceroute detalha caminho; ping testa extremidade"
      ],
      "fluxos": [
        "Enviar pacote com TTL=1 → receber time exceeded do primeiro salto → repetir com TTL+1"
      ],
      "excecoes": [
        "Roteadores silenciam ICMP",
        "Rotas assimétricas alteram caminho de volta"
      ],
      "palavrasChave": [
        "TTL",
        "salto",
        "time exceeded",
        "latência",
        "asterisco"
      ],
      "checklist": [
        "Verificar sintaxe do comando",
        "Analisar RTT por salto",
        "Interpretar * sem assumir falha",
        "Comparar com ping para validar"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Saída do traceroute mostra 3 saltos até o destino com RTTs 1ms, 5ms, 12ms. O que isso significa?",
        "dados": "Salto 1 192.168.1.1 1 ms, salto 2 10.0.0.1 5 ms, salto 3 8.8.8.8 12 ms. Sem asteriscos, três tentativas por salto consistentes.",
        "conceitos": [
          "TTL crescente",
          "RTT por salto"
        ],
        "estrategia": "Ler sequência de saltos, observar acúmulo de latência e ausência de perda para inferir rota curta.",
        "execucao": [
          "Identificar número de saltos",
          "Registrar RTT de cada salto",
          "Somar latência acumulada",
          "Concluir rota direta"
        ],
        "resultado": "O pacote passou por 3 roteadores; latência acumulada ~12 ms no destino. Rota curta, sem perda.",
        "justificativa": "RTT crescente por salto indica caminho estável; ausência de * indica respostas ICMP time exceeded em todos os intermediários, compatível com rota funcional.",
        "errosFrequentes": [
          "Confundir RTT do último salto com RTT total",
          "Assumir que número de saltos é constante"
        ],
        "variacao": "Mudar destino para servidor distante e observar aumento de saltos e RTT, mantendo interpretação de acúmulo."
      },
      {
        "tipo": "aplicacao",
        "problema": "traceroute mostra saltos 1-5 normais, depois '*' até o fim. Como interpretar ausência de resposta nos saltos seguintes e qual teste complementar usar?",
        "dados": "Saltos 1 a 5 respondem com RTTs 1-10 ms. A partir do salto 6, três tentativas retornam * * *. Destino é 1.1.1.1.",
        "conceitos": [
          "Ausência de resposta ICMP",
          "Filtro de segurança"
        ],
        "estrategia": "Distinguir saltos respondentes de silenciosos, considerar bloqueio de ICMP versus perda, complementar com ping.",
        "execucao": [
          "Confirmar respostas dos primeiros saltos",
          "Verificar padrão de * nos saltos seguintes",
          "Executar ping ao destino",
          "Avaliar necessidade de teste de porta"
        ],
        "resultado": "Roteadores intermediários não respondem ICMP (firewall) ou há perda; não prova falha de rota. Complementar com ping e teste de aplicação.",
        "justificativa": "Respostas iniciais provam conectividade até salto 5; * posteriores indicam silêncio ou perda, não necessariamente ruptura, pois ICMP pode ser filtrado.",
        "errosFrequentes": [
          "Interpretar * como rota quebrada",
          "Desconsiderar filtragem de ICMP por política"
        ],
        "variacao": "Trocar destino por outro IP na mesma rede e observar se padrão de * se repete, isolando problema específico."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'traceroute mostra a rota exata e simétrica de ida e volta.' Discuta por que o caminho de retorno pode diferir e como TTL mapeia apenas ida.",
        "dados": "Traceroute de A para B mostra saltos X-Y-Z. Traceroute de B para A mostra saltos W-K-Z, com diferentes IPs intermediários.",
        "conceitos": [
          "Roteamento assimétrico",
          "Caminho de ida"
        ],
        "estrategia": "Comparar traceroutes inversos, evidenciar que TTL mapeia apenas ida e políticas de roteamento podem divergir.",
        "execucao": [
          "Executar traceroute A→B",
          "Executar traceroute B→A",
          "Comparar listas de saltos",
          "Concluir assimetria"
        ],
        "resultado": "Errado. Mostra a rota de ida (com base em TTL). A rota de volta pode ser diferente (roteamento assimétrico).",
        "justificativa": "Roteadores escolhem próximo salto conforme tabelas dinâmicas e políticas; caminhos de ida e volta não são obrigatoriamente iguais, e traceroute só revela caminho de ida.",
        "errosFrequentes": [
          "Assumir simetria de rota",
          "Usar traceroute como prova de caminho de retorno"
        ],
        "variacao": "Repetir teste em horário de pico e observar mudanças de saltos por balanceamento de carga."
      }
    ]
  },
  "m2-u5-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "mtr, pathping e hping3 ampliam o diagnóstico além do ping e do traceroute. O mtr e o pathping observam a rota de forma contínua e estatística, revelando o salto em que a perda se concentra; o hping3 constrói pacotes sob medida para testar firewalls, MTU e portas. Provas de diagnóstico de rede cobram a finalidade de cada ferramenta, a leitura de perda por salto e o uso ético da injeção de pacotes.",
      "preRequisitos": [
        "Funcionamento do ping (ICMP echo request/reply, RTT e perda de pacotes)",
        "Leitura da saída do traceroute (saltos numerados e TTL decrecente)",
        "Noção de TCP, UDP e ICMP e do papel dos firewalls",
        "Conceito de MTU e de fragmentação de pacotes IP"
      ],
      "objetivosObservaveis": [
        "Diferenciar mtr, pathping e hping3 quanto à finalidade e ao modo de operação",
        "Interpretar uma saída de mtr/pathping com perda e latência por salto",
        "Indicar o que o hping3 permite testar (regras de firewall, MTU do caminho, portas)",
        "Selecionar a ferramenta adequada a um objetivo de diagnóstico apresentado",
        "Reconhecer a exigência de autorização para injeção de pacotes em redes de terceiros"
      ],
      "competencias": [
        "Seleção da ferramenta de diagnóstico conforme o sintoma observado",
        "Leitura estatística de rotas: distinguir perda concentrada de perda propagada",
        "Ética e legalidade no uso de ferramentas de injeção de pacotes"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação) — base pontual de latência e perda que o mtr estende no tempo",
        "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação) — rota instantânea que o mtr e o pathping transformam em série estatística",
        "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — interpreta o caminho e a MTU que o hping3 testa"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "mtr, pathping e hping3 aparecem em itens sobre diagnóstico de rede em algumas bancas, com ênfase na diferença entre medição contínua e injeção de pacotes. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "O mtr (My Traceroute) combina ping e traceroute de modo contínuo: para cada salto, mostra a perda e a latência ao longo do tempo, o que ajuda a localizar perda intermitente que um ping único não revela. O pathping, do Windows, faz algo semelhante ao enviar pacotes por um período e calcular estatísticas por salto. O hping3 é uma ferramenta de crafting: monta pacotes TCP, UDP ou ICMP sob medida para testar regras de firewall, descobrir a MTU do caminho e sondar portas, e costuma exigir privilégios administrativos.",
      "intermediario": "mtr e pathping respondem a 'onde está a perda?': comparando cada salto, distinguem um salto que perde pacotes de um salto que apenas não responde ICMP. O hping3 responde a perguntas hipotéticas: o firewall descarta SYN na porta 443? Qual o maior pacote que atravessa o caminho sem fragmentar? Como as três ferramentas atuam em camadas e protocolos distintos (ICMP de medição versus pacotes TCP/UDP construídos), o diagnóstico se apoia em evidências diferentes.",
      "avancado": "A leitura correta de uma saída de mtr exige comparar a perda entre saltos consecutivos: se o salto 3 perde 5% e o salto 4 perde 8%, a perda se propaga e o problema tende a estar antes do salto 3; se o salto 3 perde 5% e o salto 4 volta a 0%, aquele roteador provavelmente limita a taxa de ICMP. O mesmo raciocínio se aplica ao pathping no Windows. Resultados variam com a carga da rede, e o bloqueio de ICMP pode esconder saltos reais.",
      "especialista": "No plano de diagnóstico, mtr/pathping localizam o salto problemático com visão estatística, enquanto o hping3 testa uma hipótese específica, como uma regra de firewall ou o tamanho máximo de pacote. O hping3 também é usado em auditoria ofensiva, o que impõe restrição de uso a redes próprias ou com autorização explícita, conforme as normas de segurança. O diagnóstico competente articula as três ferramentas e documenta as evidências de cada etapa."
    },
    "comparacoes": [
      {
        "tema": "mtr e pathping versus hping3 no diagnóstico de rede",
        "a": {
          "rotulo": "mtr e pathping",
          "texto": "Ferramentas de medição contínua: combinam ping e traceroute e acumulam estatísticas de perda e latência por salto durante um período. O mtr é multiplataforma e o pathping é nativo do Windows. Servem para localizar em qual salto a perda se concentra."
        },
        "b": {
          "rotulo": "hping3",
          "texto": "Ferramenta de injeção: constrói pacotes TCP, UDP ou ICMP com campos definidos pelo operador, dispensando a medição por salto. Serve para testar regras de firewall, descobrir a MTU do caminho e sondar portas. Em geral exige privilégios administrativos."
        },
        "diferencaGabarito": "mtr e pathping medem o caminho de forma contínua e estatística; o hping3 testa uma hipótese pontual por meio de pacotes construídos sob medida, sem produzir estatísticas por salto."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "mtr e traceroute executam a mesma função, diferindo apenas no nome do comando.",
        "porqueErrada": "O traceroute produz uma fotografia instantânea da rota, enquanto o mtr reenvia sondas continuamente e acumula perda e latência por salto, o que permite identificar perda intermitente.",
        "versaoCorreta": "Errado. O mtr é contínuo e estatístico: reenvia sondas e mantém histórico por salto; o traceroute mostra uma única medição instantânea da rota."
      },
      {
        "afirmacaoEquivocada": "O hping3 pode ser utilizado em qualquer rede, desde que o operador tenha privilégios administrativos na própria máquina.",
        "porqueErrada": "A injeção de pacotes em redes de terceiros configura uso não autorizado, com implicações éticas e legais; o privilégio administrativo local não concede autorização sobre a rede alvo.",
        "versaoCorreta": "Errado. O hping3 deve ser aplicado apenas em redes próprias ou com autorização explícita do responsável, independentemente dos privilégios locais do operador."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "mtr: ping e traceroute contínuos, com perda e latência acumuladas por salto",
        "pathping: equivalente do Windows, com estatísticas por salto ao longo de um período",
        "hping3: construção de pacotes TCP, UDP ou ICMP sob medida (crafting)",
        "Perda propagada versus perda local: comparação entre saltos consecutivos"
      ],
      "regras": [
        "mtr e pathping medem latência e perda; o hping3 testa hipóteses como regras de firewall e MTU",
        "O hping3 geralmente requer privilégios administrativos para criar pacotes brutos"
      ],
      "comparacoes": [
        "Medição contínua (mtr/pathping) difere de injeção de pacotes (hping3) pelo tipo de evidência produzida"
      ],
      "fluxos": [
        "Diagnosticar perda intermitente: executar mtr por alguns minutos, comparar a perda de cada salto, confirmar com teste de porta via hping3"
      ],
      "excecoes": [
        "O bloqueio de ICMP pode ocultar saltos ou inflar a perda aparente, distorcendo a leitura do mtr e do pathping"
      ],
      "palavrasChave": [
        "mtr",
        "pathping",
        "hping3",
        "perda por salto",
        "MTU",
        "firewall",
        "crafting",
        "autorização"
      ],
      "checklist": [
        "Explicar o que o mtr acrescenta ao traceroute",
        "Explicar a função do pathping no Windows",
        "Explicar o que o hping3 permite construir e testar",
        "Escolher a ferramenta adequada a um objetivo de diagnóstico",
        "Reconhecer a exigência de autorização para injeção de pacotes"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um técnico executou ping e traceroute e ambos indicaram caminho normal, mas usuários relatam lentidão intermitente. Qual ferramenta usar e por quê?",
        "dados": "Cenário: rota com 8 saltos até o destino; ping com 0% de perda em 4 pacotes; traceroute sem saltos com asterisco; reclamações de lentidão em horários variados.",
        "conceitos": [
          "Medição contínua versus medição pontual",
          "Perda intermitente",
          "Estatística por salto"
        ],
        "estrategia": "Reconhecer que medições pontuais não capturam perda intermitente e escolher uma ferramenta que acumule estatísticas ao longo do tempo, como o mtr.",
        "execucao": [
          "Identificar que ping e traceroute oferecem apenas um retrato instantâneo",
          "Selecionar o mtr por observar a rota continuamente",
          "Executar mtr <destino> por alguns minutos",
          "Comparar a perda de cada salto para localizar onde ela se concentra"
        ],
        "resultado": "Deve-se usar o mtr: ele monitora a rota de forma contínua e identifica salto com perda intermitente que o ping pontual não captura.",
        "justificativa": "A perda intermitente, por definição, não aparece em uma amostra pequena; o mtr reenvia sondas e acumula dados por salto, o que permite separar um salto defeituoso da variação momentânea da rede.",
        "errosFrequentes": [
          "Concluir que a rede está saudável porque um ping de 4 pacotes não acusou perda",
          "Confundir mtr com traceroute e esperar que a rota instantânea revele falha periódica"
        ],
        "variacao": "Se a medição contínua mostrar perda apenas em um salto intermediário, com os saltos seguintes sem perda, a conclusão passa a ser de limitação de ICMP naquele roteador, e não de falha de enlace."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador executa mtr até um servidor e obtém, no salto 3, 6% de perda com latência média de 40 ms; o salto 4 mantém latência próxima e 0% de perda. Como interpretar?",
        "dados": "Saída de mtr: salto 1 (1 ms, 0%), salto 2 (12 ms, 0%), salto 3 (40 ms, 6%), salto 4 (41 ms, 0%), salto 5 (39 ms, 0%); destino final com 0% de perda.",
        "conceitos": [
          "Perda propagada versus perda local",
          "Latência por salto",
          "Não resposta ICMP"
        ],
        "estrategia": "Comparar a perda entre saltos consecutivos: se ela não se propaga, o salto provavelmente apenas limita a taxa de ICMP em vez de descartar tráfego real.",
        "execucao": [
          "Ler a coluna de perda do salto 3 e anotar os 6%",
          "Verificar a perda dos saltos seguintes",
          "Constatar que o salto 4 e o destino estão com 0%",
          "Concluir que a perda não se propaga e tratá-la como candidata a limitação de ICMP, confirmando com o hping3"
        ],
        "resultado": "A perda de 6% no salto 3 não se propaga aos saltos seguintes, o que sugere limitação de ICMP naquele roteador, e não congestionamento real do caminho.",
        "justificativa": "Quando um roteador descarta tráfego de verdade, a perda aparece também nos saltos posteriores, pois os pacotes perdidos não chegam adiante; a ausência de perda nos saltos seguintes indica que as sondas ICMP foram apenas limitadas.",
        "errosFrequentes": [
          "Tratar toda perda exibida em um salto como falha da rede, sem verificar os saltos seguintes",
          "Ignorar a coluna de perda e decidir apenas pela latência"
        ],
        "variacao": "Se o salto 3 perdesse 6% e o salto 4 registrasse 9%, a perda estaria se propagando, e a investigação deveria recuar até o último salto sem perda para isolar o enlace responsável."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em questão: 'o hping3 serve apenas para medir latência e perda de pacotes, como um ping com mais opções.'",
        "dados": "Afirmação reduz o hping3 a medição; funcionalidades reais: montar pacotes TCP, UDP ou ICMP com campos definidos, testar regras de firewall, descobrir MTU do caminho e sondar portas.",
        "conceitos": [
          "Injeção de pacotes",
          "Teste de regra de firewall",
          "Descoberta de MTU"
        ],
        "estrategia": "Desmontar a afirmação mostrando que o hping3 não mede estatísticas de caminho: ele produz pacotes sob medida para testar hipóteses específicas.",
        "execucao": [
          "Listar o que a afirmação atribui ao hping3",
          "Contrapor a função de crafting de pacotes TCP, UDP e ICMP",
          "Exemplificar o teste de uma regra de firewall ou da MTU",
          "Concluir que medir latência é papel do ping, do mtr e do pathping"
        ],
        "resultado": "Errado. O hping3 constrói pacotes sob medida para testar firewalls, MTU e portas; medir latência e perda é função do ping, do mtr e do pathping.",
        "justificativa": "A leitura ingênua confunde medição com injeção: o hping3 decide o conteúdo dos pacotes que envia, o que permite diagnosticar filtragem e tamanho máximo, coisas que uma medição de RTT não revela.",
        "errosFrequentes": [
          "Classificar o hping3 como evolução do ping sem perceber a diferença de finalidade",
          "Desconhecer que o teste de MTU e de firewall exige pacotes construídos, não sondas padrão"
        ],
        "variacao": "Se a questão perguntasse qual ferramenta confirma se um firewall descarta pacotes na porta 443, a resposta seria o hping3, e não o mtr nem o pathping, pois apenas ele define os campos do pacote enviado."
      }
    ]
  },
  "m2-u5-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Verificar a configuração da interface é o primeiro passo de grande parte dos diagnósticos de rede. O ipconfig, no Windows, e o ifconfig, no Linux e macOS, exibem endereço IP, máscara, gateway, DNS e MAC, além de renovarem a concessão DHCP e limparem o cache DNS. Bancas cobram as opções desses comandos e a interpretação de saídas que indicam falha de DHCP ou ausência de rota padrão.",
      "preRequisitos": [
        "Endereçamento IPv4, máscara de sub-rede e gateway padrão",
        "Funcionamento do DHCP (descoberta, oferta, requisição e concessão)",
        "Noção de cache DNS e de resolução de nomes",
        "Diferença entre interface de rede e endereço MAC"
      ],
      "objetivosObservaveis": [
        "Identificar o que o ipconfig exibe e o que cada opção faz (/all, /release, /renew, /flushdns, /displaydns)",
        "Interpretar os campos do ifconfig: inet, netmask, broadcast, ether e estado UP/DOWN",
        "Reconhecer um endereço 169.254.x.x como sinal de falha na obtenção por DHCP",
        "Renovar a concessão DHCP e limpar o cache DNS com os comandos adequados",
        "Diferenciar ipconfig (Windows), ifconfig e o comando ip (Linux atual)"
      ],
      "competencias": [
        "Inspeção da configuração de interfaces antes de qualquer conclusão diagnóstica",
        "Renovação de concessão DHCP e limpeza de cache DNS como ações corretivas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u3-t2-s3 (DHCP: atribuição dinâmica de endereços) — origem do endereço que ipconfig exibe",
        "m2-u5-t2-s2 (comando ip e netstat/ss) — sucessor moderno do ifconfig no Linux",
        "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — analisa o gateway que a configuração indica",
        "m2-u5-t3-s3 (Ferramentas complementares e cache DNS) — cache que /flushdns limpa"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "ipconfig e ifconfig são tradicionais em questões de diagnóstico de rede, sobretudo em itens que associam um sintoma ao comando correto. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "O ipconfig, no Windows, exibe a configuração das interfaces: endereço IP, máscara, gateway e servidores DNS. As opções úteis são /all, que traz o detalhamento incluindo MAC e informações de DHCP, /release, que libera o IP obtido por DHCP, /renew, que solicita nova concessão, /flushdns, que limpa o cache DNS, e /displaydns, que o exibe. O ifconfig, no Linux e no macOS, é o comando legado equivalente e também permite alterar a configuração das interfaces.",
      "intermediario": "A saída do ifconfig traz inet com o endereço IPv4, netmask, broadcast, ether com o MAC e o estado UP ou DOWN da interface. No Linux atual ele foi substituído pelo comando ip. O uso típico é verificar qual IP foi obtido, identificar a interface ativa, renovar a concessão DHCP e limpar o cache DNS quando um nome passa a resolver para um endereço antigo, o que exige interpretar cada campo antes de concluir.",
      "avancado": "A interpretação correta evita conclusões apressadas: interface sem IP ou com endereço 169.254.x.x indica falha na obtenção por DHCP; ausência do gateway esperado sugere rota padrão inexistente. Convém ainda conferir se o IP pertence à rede do gateway, pois uma configuração estática incorreta pode exibir endereço válido em sub-rede incompatível.",
      "especialista": "No diagnóstico, ipconfig e ifconfig situam o problema por camada: falha de DHCP, quando o endereço é link-local; falha de enlace, quando a interface está DOWN; falha de configuração, quando falta o gateway. A sequência renovar concessão, limpar cache DNS e re testar isola o serviço do cliente, e a comparação com o comando ip evita depender de ferramentas legadas em distribuições atuais."
    },
    "comparacoes": [
      {
        "tema": "ipconfig e ifconfig na verificação da configuração de interface",
        "a": {
          "rotulo": "ipconfig (Windows)",
          "texto": "Exibe IP, máscara, gateway e DNS das interfaces, com opções /all (MAC, DHCP e servidores), /release, /renew, /flushdns e /displaydns. Comando nativo do Windows, sem equivalentes de configuração de interface no Linux."
        },
        "b": {
          "rotulo": "ifconfig (Linux e macOS)",
          "texto": "Exibe e altera a configuração das interfaces, com os campos inet (IPv4), netmask, broadcast, ether (MAC) e o estado UP ou DOWN. Comando legado, hoje substituído pelo comando ip no Linux."
        },
        "diferencaGabarito": "ipconfig é o comando do Windows e ifconfig o do Linux e macOS, sendo este último legado e substituído pelo ip; ambos leem a configuração, mas ifconfig também a modifica."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um endereço 169.254.x.x indica que a interface recebeu uma configuração normal do servidor DHCP.",
        "porqueErrada": "A faixa 169.254.0.0/16 é de endereço link-local, atribuído pelo próprio host quando a obtenção por DHCP falha; não há concessão de servidor algum envolvida.",
        "versaoCorreta": "Errado. O endereço 169.254.x.x é link-local (APIPA) e indica falha na obtenção por DHCP; deve-se verificar o servidor DHCP, o cabo ou a rede sem fio."
      },
      {
        "afirmacaoEquivocada": "A opção /flushdns do ipconfig exibe o conteúdo do cache de resolução de nomes.",
        "porqueErrada": "O /flushdns limpa o cache do resolvedor local; quem exibe o conteúdo das entradas em cache é o /displaydns.",
        "versaoCorreta": "Errado. O /flushdns limpa o cache DNS; para visualizar as entradas em cache utiliza-se /displaydns."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ipconfig: exibe e gerencia a configuração de interface no Windows",
        "ifconfig: exibe e altera interfaces no Linux e macOS, em desuso",
        "Comando ip: sucessor do ifconfig no Linux atual",
        "Endereço link-local 169.254.x.x: sinal de falha de DHCP"
      ],
      "regras": [
        "/all detalha a configuração, incluindo MAC, DHCP e servidores DNS",
        "/release libera o IP obtido por DHCP e /renew solicita nova concessão",
        "/flushdns limpa o cache DNS, enquanto /displaydns o exibe"
      ],
      "comparacoes": [
        "ifconfig é legado no Linux, enquanto o comando ip é a ferramenta atual da suíte iproute2"
      ],
      "fluxos": [
        "Diagnóstico de conectividade: ler a configuração, identificar o IP e o gateway, renovar o DHCP, limpar o cache DNS e testar novamente"
      ],
      "excecoes": [
        "Interface sem IP ou com 169.254.x.x falha em DHCP mesmo com o cabo conectado, pois o problema pode estar no servidor ou na oferta"
      ],
      "palavrasChave": [
        "ipconfig",
        "ifconfig",
        "ip",
        "/all",
        "/renew",
        "/flushdns",
        "APIPA",
        "gateway"
      ],
      "checklist": [
        "Executar ipconfig e identificar IP, máscara e gateway",
        "Usar ipconfig /all para obter MAC e dados de DHCP",
        "Diferenciar /release de /renew",
        "Reconhecer 169.254.x.x como falha de DHCP",
        "Limpar o cache DNS com /flushdns e conferir com /displaydns"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Ao executar ipconfig em uma estação Windows, a saída mostra IPv4 Address como 169.254.10.44 e o gateway não aparece. O que isso indica?",
        "dados": "Saída: Adaptador Ethernet; IPv4 Address: 169.254.10.44; Subnet Mask: 255.255.0.0; Gateway padrão: ausente; DHCP habilitado.",
        "conceitos": [
          "Endereço link-local APIPA",
          "Atribuição por DHCP",
          "Gateway padrão"
        ],
        "estrategia": "Reconhecer a faixa 169.254.0.0/16 como atribuição automática local, sinal de que o DHCP não respondeu, e concluir que a configuração está incompleta.",
        "execucao": [
          "Identificar que 169.254.10.44 pertence à faixa link-local",
          "Interpretar a máscara 255.255.0.0 como padrão dessa atribuição",
          "Constatar a ausência de gateway padrão",
          "Concluir pela falha de DHCP e verificar cabo, Wi-Fi e servidor"
        ],
        "resultado": "Indica falha de DHCP: a interface autoatribuiu um endereço link-local 169.254.10.44 e ficou sem gateway, devendo-se verificar o servidor DHCP e o enlace.",
        "justificativa": "A faixa link-local só é usada quando o host não obtém endereço de um servidor DHCP; a ausência de gateway decorre da mesma falha, pois nenhuma concessão completa foi recebida.",
        "errosFrequentes": [
          "Tratar 169.254.10.44 como endereço válido da rede corporativa",
          "Culpar o DNS antes de verificar se a própria camada de rede está sem endereço"
        ],
        "variacao": "Se o ipconfig mostrasse 192.168.1.20 com gateway 192.168.1.1, a camada de rede estaria configurada e a investigação deveria seguir para o teste de conectividade com o gateway."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um site mudou de servidor e, apesar de o IP novo estar correto no DNS, a estação Windows continua acessando o endereço antigo. Qual comando corrige isso?",
        "dados": "Cenário: estação Windows 11; mudança de DNS registrada; acesso ao site ainda resolve o IP antigo; cabo e Wi-Fi funcionando para outros hosts.",
        "conceitos": [
          "Cache do resolvedor local",
          "Flushdns",
          "Renovação de concessão"
        ],
        "estrategia": "Suspeitar do cache do resolvedor local, limpá-lo com ipconfig /flushdns e confirmar a resolução com nslookup ou dig.",
        "execucao": [
          "Levantar a hipótese de cache DNS desatualizado",
          "Executar ipconfig /flushdns para limpar o cache do resolvedor",
          "Testar o nome com nslookup ou dig",
          "Confirmar que o acesso passa a usar o IP novo"
        ],
        "resultado": "Deve-se executar ipconfig /flushdns, que limpa o cache do resolvedor local; em seguida testar com nslookup ou dig para confirmar o IP novo.",
        "justificativa": "O resolvedor local guarda respostas anteriores e, sem TTL vencido, continua devolvendo o IP antigo; limpar o cache força uma nova consulta ao servidor DNS autoritativo.",
        "errosFrequentes": [
          "Usar /displaydns esperando limpar o cache, quando ele apenas exibe as entradas",
          "Executar /renew e esperar que a renovação de IP altere a resolução de nomes"
        ],
        "variacao": "Se após o /flushdns o site ainda resolvesse o IP antigo, o cache estaria em um proxy ou no servidor DNS da rede, e a verificação deveria partir para o teste da porta e do caminho até o serviço."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em questão: 'ipconfig /renew sempre atribui à estação um endereço IP diferente do anterior.'",
        "dados": "Afirmação sobre /renew; comportamento real: /renew envia requisição DHCP ao servidor e, se a concessão anterior ainda for válida, o servidor costuma devolver o mesmo endereço.",
        "conceitos": [
          "Renovação de concessão DHCP",
          "Lease válido",
          "/release e /renew"
        ],
        "estrategia": "Desmontar a afirmação distinguindo renovar uma concessão vigente de obtê-la novamente após liberação completa.",
        "execucao": [
          "Descrever o que a afirmação espera do /renew",
          "Explicar que /renew pede a renovação da concessão existente",
          "Notar que o servidor tende a devolver o mesmo IP se o lease for válido",
          "Concluir que a sequência /release e /renew não garante endereço diferente"
        ],
        "resultado": "Errado. O /renew solicita renovação ao servidor DHCP e geralmente devolve o mesmo IP; /release seguido de /renew pode gerar endereço diferente, mas sem garantia.",
        "justificativa": "A leitura ingênua trata renovação como sorteio de endereço; o protocolo DHCP conserva o vínculo com o cliente enquanto a concessão é válida, de modo que a continuidade do endereço é o comportamento esperado.",
        "errosFrequentes": [
          "Confundir /renew com /release e achar que o IP sempre muda",
          "Assumir que a mudança de endereço é a forma correta de resolver conflito de IP sem verificar o servidor"
        ],
        "variacao": "Se a questão descrevesse um conflito de IP na rede, a conduta seria /release, verificador do servidor DHCP e reserva do endereço, e não a expectativa de que o /renew resolva sozinho."
      }
    ]
  },
  "m2-u5-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O comando ip e os utilitários netstat e ss permitem inspecionar endereços, rotas, sockets e portas em escuta, revelando se um serviço está ativo e quem está conectado. Provas de diagnóstico de rede cobram as opções ‑t, ‑u, ‑l, ‑n e ‑p e a leitura da diferença entre escuta em 0.0.0.0 e em 127.0.0.1, ponto que separa serviço exposto de serviço restrito ao próprio host.",
      "preRequisitos": [
        "Portas e sockets TCP/UDP e o conceito de escuta (LISTEN)",
        "Comando ifconfig e a transição para o ip no Linux",
        "Noção de endereço de loopback 127.0.0.1 e de endereço curinga 0.0.0.0",
        "Leitura básica de tabela de rotas"
      ],
      "objetivosObservaveis": [
        "Usar ip addr, ip link, ip route e ip neigh para inspecionar endereços, enlaces, rotas e vizinhos",
        "Executar ss -tlnp e netstat -tlnp e explicar o significado de cada opção",
        "Diferenciar netstat, ferramenta legada, do ss, seu sucessor moderno",
        "Interpretar uma porta em escuta em 0.0.0.0 em comparação a uma em 127.0.0.1",
        "Detectar conexões estabelecidas suspeitas na saída de ss"
      ],
      "competencias": [
        "Inspeção de sockets para confirmar se um serviço está escutando",
        "Análise de segurança: avaliar endereço de escuta e portas inesperadas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t2-s1 (ipconfig e ifconfig: configuração de interface) — comando legado que o ip substitui no Linux",
        "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — uso de ip route e ip neigh no diagnóstico de caminho",
        "m2-u5-t3-s2 (dig: consulta DNS avançada) — inspeção da camada de aplicação que complementa a de transporte"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "ss, netstat e o comando ip aparecem em itens sobre diagnóstico e verificação de serviços, com ênfase na sintaxe e na leitura de portas em escuta. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "O comando ip, da suíte iproute2 no Linux, substitui ifconfig, route e arp: ip addr lista endereços das interfaces, ip link mostra o estado dos enlaces, ip route exibe a tabela de rotas e ip neigh traz o cache de vizinhos. O netstat é legado e exibe conexões ativas, portas em escuta, rotas e estatísticas; o ss é o sucessor moderno, mais rápido e com as mesmas finalidades.",
      "intermediario": "As opções essenciais de netstat e ss são ‑t para TCP, ‑u para UDP, ‑l para escuta, ‑n para saída numérica sem resolução de nomes e ‑p para exibir o processo responsável. O comando ss -tlnp lista as portas TCP em escuta com o processo que as detém, sendo a forma mais direta de confirmar que um serviço subiu na porta esperada.",
      "avancado": "A leitura correta exige atenção ao endereço de escuta: uma porta em 0.0.0.0 aceita conexões de qualquer origem, enquanto em 127.0.0.1 fica restrita ao próprio host. Porta desconhecida em escuta em servidor é indicador que merece investigação, especialmente se o processo responsável não corresponder a um serviço conhecido.",
      "especialista": "Em investigação de incidente, ss e netstat permitem correlacionar portas em escuta, conexões estabelecidas e processos para identificar serviços inesperados ou padrões de beaconing para destinos externos. Associados a ip addr e ip route, situam o socket na configuração do host; a opção ‑p pode exigir privilégio elevado para processos de outros usuários, e o ss lê as tabelas do kernel por netlink, sendo mais rápido que o netstat."
    },
    "comparacoes": [
      {
        "tema": "netstat e ss na inspeção de conexões",
        "a": {
          "rotulo": "netstat",
          "texto": "Ferramenta legada, disponível em Linux, Windows e Unix, que exibe conexões ativas, portas em escuta, tabela de roteamento e estatísticas. Sintaxe netstat -tlnp. Continua amplamente aceita em provas, embora esteja em desuso no Linux atual."
        },
        "b": {
          "rotulo": "ss",
          "texto": "Socket statistics, sucessor moderno do netstat no Linux, lê diretamente as tabelas do kernel e é mais rápido. Sintaxe ss -tlnp, com as mesmas opções principais e comportamento equivalente para listar sockets em escuta."
        },
        "diferencaGabarito": "Ambos listam sockets e portas, mas o ss consulta o kernel de forma mais eficiente e é a ferramenta atual no Linux; a semelhança de finalidade não se estende à sintaxe completa, que difere em opções secundárias."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "netstat e ss exibem apenas conexões TCP, não sendo possível listar sockets UDP.",
        "porqueErrada": "As duas ferramentas aceitam a opção ‑u, que seleciona sockets UDP, e exibem também sockets Unix; a listagem padrão não se restringe a TCP.",
        "versaoCorreta": "Errado. netstat e ss listam TCP e UDP com as opções ‑t e ‑u, além de sockets Unix; a escolha do protocolo é feita pelo operador."
      },
      {
        "afirmacaoEquivocada": "ifconfig continua sendo o comando atual para exibir endereços no Linux, ao lado do ip.",
        "porqueErrada": "O ifconfig é legado e foi substituído pelo comando ip, da suíte iproute2, que passou a concentrar endereços, enlaces, rotas e vizinhos.",
        "versaoCorreta": "Errado. No Linux atual utiliza-se ip addr; ifconfig é considerado legado e substituído pelo comando ip."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ip addr, ip link, ip route e ip neigh: subcomandos do ip que substituem ifconfig, route e arp",
        "netstat: ferramenta legada de conexões, portas em escuta e rotas",
        "ss: socket statistics, sucessor moderno do netstat no Linux",
        "Endereço de escuta 0.0.0.0 versus 127.0.0.1"
      ],
      "regras": [
        "‑t seleciona TCP, ‑u seleciona UDP, ‑l lista apenas sockets em escuta",
        "‑n desativa a resolução de nomes e ‑p exibe o processo responsável",
        "ss -tlnp lista portas TCP em escuta com o processo"
      ],
      "comparacoes": [
        "ss lê as tabelas do kernel e é mais rápido que o netstat, embora ambos tenham finalidade equivalente"
      ],
      "fluxos": [
        "Verificar serviço ativo: executar ss -tlnp, filtrar a porta desejada, conferir o processo e o endereço de escuta"
      ],
      "excecoes": [
        "A ausência de uma porta em escuta pode indicar firewall local, privilégios insuficientes para ‑p ou socket ligado a outro endereço"
      ],
      "palavrasChave": [
        "ip",
        "iproute2",
        "netstat",
        "ss",
        "LISTEN",
        "porta",
        "processo",
        "0.0.0.0"
      ],
      "checklist": [
        "Executar ip addr e identificar os endereços das interfaces",
        "Executar ss -tlnp e listar as portas em escuta",
        "Diferenciar netstat de ss quanto a legado e modernidade",
        "Interpretar escuta em 0.0.0.0 como exposta a qualquer origem",
        "Investigar porta desconhecida pelo processo responsável"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor web subiu e o administrador precisa confirmar se ele está escutando na porta 80 antes de testar pelo navegador.",
        "dados": "Cenário: serviço web em execução; porta esperada 80/TCP; sistema Linux; acesso à linha de comando com privilégio para leitura de processos.",
        "conceitos": [
          "Socket em escuta",
          "ss -tlnp",
          "Filtro por porta"
        ],
        "estrategia": "Listar as portas TCP em escuta com o processo responsável e filtrar a porta 80 para confirmar o estado LISTEN.",
        "execucao": [
          "Executar ss -tlnp",
          "Filtrar a saída pela porta 80",
          "Verificar o estado LISTEN na linha retornada",
          "Conferir o processo indicado na coluna de processo"
        ],
        "resultado": "Deve-se executar ss -tlnp | grep :80, ou netstat -tlnp | grep :80, e confirmar uma linha com estado LISTEN na porta 80.",
        "justificativa": "A opção ‑l restringe a listagem aos sockets em escuta e ‑n evita a resolução de nomes; se a linha da porta 80 existe com LISTEN, o serviço está apto a receber conexões naquela porta.",
        "errosFrequentes": [
          "Concluir que o serviço caiu só porque o navegador falhou, sem inspecionar a porta",
          "Esquecer a opção ‑l e interpretar como falha a lista vazia de conexões estabelecidas"
        ],
        "variacao": "Se o serviço esperasse na porta 8080, o filtro passaria a :8080 e a ausência de linha LISTEN indicaria que o processo não subiu ou está ligado a outro endereço."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma aplicação não responde na porta 8080 e o netstat, executado com -tlnp, não retorna nenhuma linha para 8080. O que isso indica?",
        "dados": "Cenário: porta 8080/TCP; saída de netstat -tlnp lista portas 22, 80 e 443 em escuta e nenhuma em 8080; conexão do cliente falha.",
        "conceitos": [
          "Porta em escuta",
          "Firewall local",
          "Estado do processo"
        ],
        "estrategia": "Interpretar a ausência de LISTEN como indício de que o serviço não está rodando ou não está ligado àquela porta, e então verificar processo, configuração e filtragem local.",
        "execucao": [
          "Executar netstat -tlnp e confirmar a ausência da porta 8080",
          "Verificar se o processo da aplicação está em execução",
          "Conferir a configuração de bind do serviço",
          "Checar o firewall local antes de investigar a rede"
        ],
        "resultado": "Indica que o serviço não está rodando ou não está escutando naquela porta; deve-se verificar processo, configuração e firewall local.",
        "justificativa": "Uma porta que não aparece com LISTEN não pode aceitar conexões, logo a falha do cliente decorre da ausência do socket, e não do caminho de rede; a inspeção do processo é o passo seguinte natural.",
        "errosFrequentes": [
          "Atribuir a falha ao firewall remoto sem antes confirmar a existência do socket em escuta",
          "Confundir porta fechada, que gera recusa, com porta filtrada, que gera silêncio"
        ],
        "variacao": "Se a porta 8080 aparecesse em LISTEN apenas em 127.0.0.1, o serviço estaria restrito ao próprio host e clientes externos falhariam por falta de rota até o socket, não por processo parado."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em questão: 'netstat e ss mostram apenas conexões TCP, sendo necessário outro utilitário para inspecionar UDP.'",
        "dados": "Afirmação sobre o escopo das ferramentas; as opções ‑t e ‑u selecionam TCP e UDP em ambas, e a listagem cobre também sockets Unix.",
        "conceitos": [
          "Opção ‑u",
          "Sockets UDP",
          "Sockets Unix"
        ],
        "estrategia": "Desmontar a afirmação mostrando que a seleção de protocolo é feita por opção e que UDP é suportado nativamente pelas duas ferramentas.",
        "execucao": [
          "Descrever o que a afirmação nega",
          "Contrapor a existência da opção ‑u em netstat e ss",
          "Exemplificar ss -ulnp para listar UDP em escuta",
          "Concluir que a limitação afirmada não existe"
        ],
        "resultado": "Errado. netstat e ss suportam TCP e UDP por meio das opções ‑t e ‑u, além de sockets Unix; nenhum utilitário adicional é necessário.",
        "justificativa": "A leitura ingênua trata a listagem padrão, centrada em TCP, como limite da ferramenta; a opção ‑u existe justamente para ampliar o escopo ao UDP, o que invalida a afirmação.",
        "errosFrequentes": [
          "Confundir o conteúdo padrão da listagem com a capability da ferramenta",
          "Supor que portas UDP exigem software distinto por não aparecerem sem ‑u"
        ],
        "variacao": "Se a questão perguntasse como listar serviços UDP em escuta, a resposta seria ss -ulnp ou netstat -ulnp, com ‑u, ‑l, ‑n e ‑p no mesmo padrão do caso TCP."
      }
    ]
  },
  "m2-u5-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Tabela de rotas, cache ARP e estado das interfaces localizam a falha entre enlace, roteamento e configuração do host. A prova cobra os comandos ip route, route print, ip neigh e arp -a e a interpretação da ausência de rota padrão, de gateway sem entrada ARP e de interface DOWN, além do teste de MTU com ping -M do -s 1472.",
      "preRequisitos": [
        "Gateway padrão, tabela de rotas e métrica de rota",
        "Funcionamento do ARP no IPv4 e do Neighbor Discovery no IPv6",
        "Estado de interface UP e DOWN e endereço MAC",
        "Noção de MTU, PMTU e fragmentação"
      ],
      "objetivosObservaveis": [
        "Listar a tabela de rotas com ip route no Linux e route print no Windows",
        "Inspecionar o cache de vizinhos com ip neigh e arp -a",
        "Verificar o estado das interfaces com ip link",
        "Relacionar a ausência de ARP do gateway a falha de camada 2",
        "Testar a MTU do caminho com ping -M do -s 1472"
      ],
      "competencias": [
        "Verificação sequencial de conectividade: interface, rota, gateway e vizinhos",
        "Diagnóstico de enlace e de configuração de roteamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t2-s2 (comando ip e netstat/ss) — mesmo conjunto iproute2 aplicado a sockets e endereços",
        "m2-u3-t3-s3 (ARP e Neighbor Discovery) — protocolo cujo cache ip neigh e arp -a exibem",
        "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — critérios de isolamento da falha por camada"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comandos de rota, ARP e estado de interface são frequentes em itens de diagnóstico de rede, principalmente na associação entre sintoma e camada afetada. A classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "A tabela de rotas é exibida por ip route, no Linux, e por route print, no Windows, mostrando as rotas conhecidas, o gateway padrão e as métricas. O cache de vizinhos aparece em ip neigh, no Linux, e em arp -a, no Windows, com os pares de IP e MAC já resolvidos. O estado das interfaces é visto com ip link, que indica se cada enlace está UP ou DOWN.",
      "intermediario": "A verificação útil segue uma sequência: existe rota padrão com a entrada padrão via <gateway>? O gateway responde? Há entrada ARP resolvida para ele? A interface está UP com IP válido? A ausência de ARP para o gateway aponta falha de enlace, como cabo ou Wi-Fi; rota padrão apontando para endereço inexistente aponta falha de configuração.",
      "avancado": "Quando a rota existe mas o gateway não tem entrada ARP, a falha tende a estar na camada 2; quando a interface está DOWN, nenhuma verificação das camadas superiores produz resultado. A MTU pode ser testada no Linux com ping -M do -s 1472 <host>, que envia payload de 1472 bytes, equivalente a uma MTU de 1500 com os cabeçalhos.",
      "especialista": "Fragmentação indevida ou descoberta de PMTU defeituosa produz sintomas como páginas que não carregam por completo, ainda com rota e ARP corretos; o teste com -M do diferencia pacote grande aceito de pacote descartado por MTU do caminho. A análise integrada de rota, vizinhos, MTU e estado da interface delimita a camada responsável antes de qualquer mudança de configuração."
    },
    "comparacoes": [
      {
        "tema": "rota presente e gateway alcançável no diagnóstico",
        "a": {
          "rotulo": "Rota padrão presente",
          "texto": "A tabela contém uma entrada padrão via <gateway>, o que indica que o host sabe para onde encaminhar tráfego destinado a outras redes. É condição necessária de roteamento, verificada com ip route ou route print."
        },
        "b": {
          "rotulo": "Gateway alcançável",
          "texto": "O gateway responde na camada 2, com entrada ARP resolvida em ip neigh ou arp -a e interface UP. É condição adicional, pois o host pode ter rota para um gateway inacessível."
        },
        "diferencaGabarito": "Ter rota padrão não garante que o gateway responda: a rota é informação de encaminhamento, enquanto o alcance depende do enlace e da resolução ARP, que devem ser verificadas em separado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "'ip neigh' exibe a tabela de rotas do sistema Linux.",
        "porqueErrada": "O ip neigh exibe o cache de vizinhos, com pares de IP e MAC resolvidos por ARP ou NDP; as rotas ficam em ip route.",
        "versaoCorreta": "Errado. ip neigh mostra vizinhos (IP e MAC); a tabela de rotas é exibida por ip route."
      },
      {
        "afirmacaoEquivocada": "MTU e MSS designam o mesmo limite de tamanho na comunicação de rede.",
        "porqueErrada": "A MTU limita o pacote na camada de rede, considerando os cabeçalhos; o MSS limita a porção de dados do segmento TCP, excluindo os cabeçalhos.",
        "versaoCorreta": "Errado. A MTU limita o pacote IP inteiro, enquanto o MSS limita os dados do segmento TCP; o MSS deriva da MTU subtraindo os cabeçalhos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ip route e route print: tabela de rotas, gateway padrão e métricas",
        "ip neigh e arp -a: cache de vizinhos ARP/NDP com pares IP e MAC",
        "ip link: estado UP ou DOWN das interfaces",
        "MTU, PMTU e fragmentação"
      ],
      "regras": [
        "A rota padrão aparece como padrão via <gateway> dev <interface>",
        "ping -M do -s 1472 testa payload de 1472 bytes, equivalente a MTU 1500"
      ],
      "comparacoes": [
        "MTU limita o pacote IP; MSS limita os dados do segmento TCP"
      ],
      "fluxos": [
        "Diagnóstico de conectividade: interface UP, rota padrão presente, gateway com ARP resolvido, teste de MTU se houver sintoma de carga parcial"
      ],
      "excecoes": [
        "Encapsulamentos como túneis e VPN reduzem a MTU efetiva do caminho, exigindo teste além da configuração local"
      ],
      "palavrasChave": [
        "ip route",
        "route print",
        "ip neigh",
        "arp -a",
        "gateway",
        "MTU",
        "MSS",
        "UP"
      ],
      "checklist": [
        "Listar rotas e confirmar a rota padrão",
        "Inspecionar o cache ARP do gateway",
        "Verificar o estado das interfaces",
        "Relacionar ausência de ARP a falha de enlace",
        "Testar a MTU do caminho antes de suspeitar da aplicação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um operador precisa saber se um host Linux possui rota padrão antes de testar o acesso a um site externo.",
        "dados": "Cenário: host Linux com interface eth0; necessidade de confirmar saída para redes externas; acesso à linha de comando.",
        "conceitos": [
          "Rota padrão",
          "ip route show padrão",
          "Gateway"
        ],
        "estrategia": "Exibir apenas a rota padrão com ip route show padrão e verificar a presença das palavras padrão, via e dev.",
        "execucao": [
          "Executar ip route show padrão",
          "Procurar a entrada padrão",
          "Ler o endereço após via",
          "Ler a interface após dev"
        ],
        "resultado": "Deve-se executar ip route show padrão, que exibe uma linha no formato padrão via <gateway> dev <interface> quando a rota existe.",
        "justificativa": "A palavra padrão identifica a rota usada para destinos fora das redes conhecidas; a presença da entrada confirma que o host tem caminho de saída, e a ausência indica que o tráfego externo não será encaminhado.",
        "errosFrequentes": [
          "Confundir tabela completa com a rota padrão ao usar ip route sem filtro",
          "Interpretar rota para a rede local como rota de saída para a Internet"
        ],
        "variacao": "Se o comando não retornasse nada, a verificação seguinte seria o estado da interface e o endereço obtido, pois ausência de rota padrão costuma decorrer de configuração ausente ou DHCP incompleto."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um host está configurado, mas não acessa a rede; arp -a não traz nenhuma entrada para o gateway. O que isso indica?",
        "dados": "Cenário: IP 192.168.0.50/24; gateway 192.168.0.1; saída de arp -a sem linha para 192.168.0.1; outras máquinas da mesma rede funcionam.",
        "conceitos": [
          "Resolução ARP",
          "Camada de enlace",
          "Alcance do gateway"
        ],
        "estrategia": "Interpretar a ausência de entrada ARP como falha de resolução na camada 2 e investigar enlace físico, switch, Wi-Fi ou estado do gateway.",
        "execucao": [
          "Confirmar o IP e o gateway configurados",
          "Executar arp -a e constatar a ausência do gateway",
          "Testar o gateway com ping para forçar a resolução",
          "Verificar cabo, Wi-Fi e estado do gateway se o ARP persistir vazio"
        ],
        "resultado": "Indica que o ARP do gateway não foi resolvido, o que aponta problema de enlace, como cabo ou Wi-Fi, ou gateway inacessível na camada 2.",
        "justificativa": "Sem resposta ARP o host não consegue montar o quadro para o gateway, de modo que a falha está abaixo da camada de rede; a configuração de IP correta não substitui a entrega no enlace.",
        "errosFrequentes": [
          "Culpar o servidor DNS ou a aplicação antes de verificar a camada 2",
          "Supor que ARP vazio é normal e não requer investigação quando há IP configurado"
        ],
        "variacao": "Se arp -a contivesse o gateway mas o ping falhasse, a investigação se deslocaria para roteamento, filtragem e MTU, pois a resolução de endereço estaria comprovada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em questão: 'se a tabela de rotas está correta, a conectividade do host está garantida.'",
        "dados": "Afirmação sobre suficiência da rota; contraexemplos: gateway sem ARP, firewall que descarta, NAT sem tradução, DNS sem resposta e aplicação parada.",
        "conceitos": [
          "Necessário e suficiente",
          "Camadas de rede",
          "Firewall e NAT"
        ],
        "estrategia": "Desmontar a afirmação distinguindo condição necessária de condição suficiente e listando as camadas que podem falhar depois do roteamento.",
        "execucao": [
          "Reconhecer que a rota correta é necessária",
          "Apontar que firewall, NAT, DNS e aplicação podem falhar independentemente",
          "Citar o gateway sem ARP como falha anterior à rota",
          "Concluir que a conectividade exige verificação por camadas"
        ],
        "resultado": "Errado. A rota correta é necessária, mas não suficiente: firewall, NAT, DNS e a própria aplicação também podem falhar mesmo com roteamento em ordem.",
        "justificativa": "A leitura ingênua reduz a conectividade ao encaminhamento; como o tráfego depende também de resolução ARP, tradução de endereços, permissão de firewall e resposta da aplicação, a rota intacta não pode garantir o desempenho fim a fim.",
        "errosFrequentes": [
          "Encerrar o diagnóstico ao encontrar rota correta",
          "Ignorar que rotas estáticas podem coexistir com NAT ou firewall bloqueantes"
        ],
        "variacao": "Se o host tivesse rota correta, ARP resolvido e ping externo funcionando, mas o site falhasse, a falha estaria em DNS, firewall de aplicação ou no serviço remoto, fora do escopo da tabela de rotas."
      }
    ]
  },
  "m2-u5-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O nslookup consulta servidores DNS e exibe o resultado, sendo útil para confirmar ou descartar falhas de resolução de nomes. Concursos de TI cobram a sintaxe básica, a consulta de tipos específicos (A, MX, TXT) e a leitura da saída com Server, Name, Address e códigos de erro como NXDOMAIN e SERVFAIL.",
      "preRequisitos": [
        "Noção de DNS e de registros de nome (A, MX, TXT)",
        "Endereço IPv4 e o conceito de resolvedor DNS"
      ],
      "objetivosObservaveis": [
        "Consultar um nome com nslookup <nome> e identificar Server, Name e Address",
        "Consultar um tipo específico de registro com nslookup -type=MX exemplo.com",
        "Indicar o servidor DNS a consultar com nslookup nome 8.8.8.8",
        "Interpretar códigos de erro NXDOMAIN e SERVFAIL na saída"
      ],
      "competencias": [
        "Verificação de resolução de nomes via DNS",
        "Leitura e interpretação da saída do nslookup"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t3-s2 (dig: consulta DNS avançada)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A consulta DNS com nslookup aparece em questões de TI sobre diagnóstico de rede, mas com menor centralidade que o cálculo CIDR. Classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "nslookup consulta servidores DNS. Sintaxe: nslookup <nome> (consulta A/AAAA padrão) ou nslookup -type=MX exemplo.com. Pode especificar servidor: nslookup exemplo.com 8.8.8.8. Saída: Server (resolvedor usado), Name, Address(es). Limitações: saída menos detalhada que dig; comportamento varia entre sistemas; em alguns sistemas está deprecated em favor de dig/host. Útil para testes rápidos. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
      "intermediario": "No nslookup, a consulta padrão busca registros A/AAAA, mas -type=MX, -type=NS e -type=TXT retornam outros registros. O terceiro argumento define o servidor consultado, permitindo comparar resolvedores: se um resolve e outro não, o problema está no cache ou no servidor, não no nome. A saída traz Server, Name e Address(es), com codes NXDOMAIN (nome inexistente) e SERVFAIL (falha do servidor).",
      "avancado": "O nslookup tem comportamento diferente entre sistemas: no Windows é nativo, no Linux depende do pacote instalado e, em algumas distribuições, é considerado legado em favor de dig e host. Não exibe TTL nem flags com clareza, ao contrário do dig, o que limita a análise de cache e de delegação. Para diagnóstico profundo, prefira dig; use nslookup apenas para verificações rápidas de resolução.",
      "especialista": "O nslookup consulta o resolvedor configurado no sistema por padrão, mas aceita um servidor alternativo como terceiro argumento, isolando problemas de resolvedor local versus servidor autoritativo. Combine com dig para comparar TTL, flags de recursão e resposta de DNSSEC. Lembre-se de que um resultado em cache pode mascarar alterações recentes no DNS do domínio."
    },
    "comparacoes": [
      {
        "tema": "nslookup vs dig na consulta de registros DNS",
        "a": {
          "rotulo": "nslookup",
          "texto": "Consulta DNS simples e rápida; sintaxe nslookup <nome> [-type=tipo] [servidor]. Exibe Server, Name e Address(es); saída menos detalhada, não mostra TTL nem flags de forma clara."
        },
        "b": {
          "rotulo": "dig",
          "texto": "Consulta DNS avançada; sintaxe dig <nome> [tipo] [@servidor]. Exibe cabeçalho com status (NOERROR/NXDOMAIN/SERVFAIL), flags, QUERY TIME, seções QUESTION, ANSWER (com TTL), AUTHORITY e ADDITIONAL. Opções +short, +trace e -x."
        },
        "diferencaGabarito": "O dig é mais detalhado que o nslookup, mostrando TTL, flags e todas as seções da resposta; o nslookup é mais simples e rápido para verificações pontuais, mas carece desses metadados."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O nslookup sempre usa o DNS configurado no sistema e não permite escolher outro servidor.",
        "porqueErrada": "O nslookup aceita um terceiro argumento com o endereço do servidor DNS a ser consultado, como nslookup exemplo.com 8.8.8.8, permitindo comparar resolvedores e isolar falhas de cache ou de servidor.",
        "versaoCorreta": "Errado. O nslookup permite especificar outro servidor com nslookup nome 8.8.8.8, útil para isolar se o problema está no resolvedor local ou no servidor autoritativo."
      },
      {
        "afirmacaoEquivocada": "O nslookup exibe TTL e flags de recursão com a mesma clareza que o dig.",
        "porqueErrada": "O nslookup não exibe TTL nem flags de recursão com clareza; esses metadados estão presentes na saída detalhada do dig, nas seções ANSWER e cabeçalho.",
        "versaoCorreta": "Errado. O nslookup não mostra TTL nem flags de recursão de forma clara; para esses dados use dig, que exibe TTL na seção ANSWER e flags no cabeçalho."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "nslookup: consulta de registros DNS por linha de comando",
        "Registros A/AAAA (endereço), MX (e-mail), NS (servidor de nome), TXT",
        "Códigos de erro: NXDOMAIN (nome inexistente), SERVFAIL (falha do servidor)"
      ],
      "regras": [
        "A consulta padrão do nslookup busca registros A/AAAA",
        "O terceiro argumento do nslookup define o servidor DNS consultado"
      ],
      "comparacoes": [
        "O nslookup é mais simples que o dig e não exibe TTL nem flags de forma clara"
      ],
      "fluxos": [
        "Diagnóstico de DNS: consultar nome, verificar Server/Name/Address, interpretar NXDOMAIN ou SERVFAIL, comparar resolvedores"
      ],
      "excecoes": [
        "Em alguns sistemas o nslookup é considerado legado, sendo substituído por dig e host"
      ],
      "palavrasChave": [
        "nslookup",
        "DNS",
        "registro A",
        "registro MX",
        "NXDOMAIN",
        "SERVFAIL",
        "resolvedor",
        "dig"
      ],
      "checklist": [
        "Executar nslookup <nome> e identificar Server, Name e Address",
        "Usar nslookup -type=MX para consultar servidores de e-mail",
        "Especificar servidor com nslookup nome 8.8.8.8",
        "Interpretar NXDOMAIN como nome inexistente",
        "Interpretar SERVFAIL como falha do servidor DNS",
        "Comparar resultado de dois resolvedores para isolar cache"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Ao executar nslookup www.exemplo.com, a saída mostra 'Address: 93.184.216.34'. O que isso indica sobre a resolução?",
        "dados": "Comando: nslookup www.exemplo.com; saída: Server: 8.8.8.8, Name: www.exemplo.com, Address: 93.184.216.34.",
        "conceitos": [
          "Registro A (endereço IPv4)",
          "Resolvedor DNS padrão"
        ],
        "estrategia": "Identificar que a saída com Address e um IP significa que o nome foi resolvido com sucesso pelo resolvedor indicado em Server.",
        "execucao": [
          "Ler o campo Server para confirmar o resolvedor usado",
          "Ler o campo Name para confirmar o nome consultado",
          "Ler o campo Address para obter o IP resolvido",
          "Concluir que a resolução funcionou para aquele resolvedor"
        ],
        "resultado": "O nome www.exemplo.com foi resolvido para o IP 93.184.216.34 pelo resolvedor padrão; DNS ok para esse nome.",
        "justificativa": "A presença de Address com um IP válido indica que o resolvedor conseguiu traduzir o nome em endereço, confirmando que a resolução DNS funciona para aquele nome naquele resolvedor.",
        "errosFrequentes": [
          "Acreditar que qualquer saída indica sucesso, sem verificar se há erro NXDOMAIN",
          "Confundir o IP do resolvedor (Server) com o IP do nome consultado (Address)"
        ],
        "variacao": "Se a saída mostrasse 'NXDOMAIN' em vez de Address, o nome não existiria ou haveria erro de digitação, e a resolução falharia."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador precisa verificar os servidores de e-mail do domínio exemplo.com usando nslookup.",
        "dados": "Comando: nslookup -type=MX exemplo.com; saída esperada: exemplo.com MX preference = 10, mail exchanger = mx1.exemplo.com; exemplo.com MX preference = 20, mail exchanger = mx2.exemplo.com.",
        "conceitos": [
          "Registro MX (servidor de e-mail)",
          "Prioridade/preferência do MX (menor número = maior prioridade)"
        ],
        "estrategia": "Consultar o tipo MX com nslookup -type=MX e interpretar a lista de servidores de e-mail ordenados por prioridade.",
        "execucao": [
          "Executar nslookup -type=MX exemplo.com",
          "Ler os registros MX retornados com suas preferências",
          "Identificar o servidor com menor número de preferência como o primário",
          "Verificar se os servidores apontam para IPs válidos"
        ],
        "resultado": "O domínio exemplo.com tem dois servidores de e-mail: mx1 (preferência 10, primário) e mx2 (preferência 20, secundário).",
        "justificativa": "O registro MX lista os servidores de e-mail e a preferência define a ordem de tentativa; o menor número tem maior prioridade, então mx1 é tentado primeiro.",
        "errosFrequentes": [
          "Ignorar a preferência e assumir que qualquer servidor MX serve em qualquer ordem",
          "Confundir registro MX com registro A, que retorna endereço IP do servidor web"
        ],
        "variacao": "Se o domínio tivesse um único registro MX com preferência 5, esse seria o único servidor de e-mail e não haveria ordem de fallback."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O nslookup sempre consulta o DNS configurado no sistema, não sendo possível escolher outro servidor.'",
        "dados": "Afirmação sobre a impossibilidade de escolher servidor alternativo no nslookup; comando alternativo: nslookup exemplo.com 8.8.8.8.",
        "conceitos": [
          "Servidor DNS alternativo como terceiro argumento",
          "Isolamento de problemas de resolvedor local"
        ],
        "estrategia": "Desmontar a afirmação mostrando que o nslookup aceita um servidor DNS alternativo como terceiro argumento, permitindo comparar resolvedores.",
        "execucao": [
          "Executar nslookup exemplo.com sem servidor (usa o configurado no sistema)",
          "Executar nslookup exemplo.com 8.8.8.8 (força o servidor 8.8.8.8)",
          "Comparar os resultados: se diferirem, o problema está no resolvedor local",
          "Concluir que é possível escolher outro servidor"
        ],
        "resultado": "Errado. O nslookup permite especificar outro servidor com nslookup nome 8.8.8.8, útil para isolar problemas de resolvedor.",
        "justificativa": "A leitura ingênua assume que o nslookup é limitado ao resolvedor do sistema, mas o terceiro argumento permite consultar qualquer servidor, diferenciando falha de cache local de falha do servidor autoritativo.",
        "errosFrequentes": [
          "Acreditar que o nslookup está preso ao DNS configurado no sistema",
          "Não usar um servidor alternativo para testar se o resolvedor local está com problema"
        ],
        "variacao": "Se nslookup exemplo.com 8.8.8.8 retornasse NXDOMAIN enquanto o servidor local resolvesse, o problema estaria no servidor local ou em seu cache, não no nome."
      }
    ]
  },
  "m2-u5-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O dig é a ferramenta de referência para depurar DNS, oferecendo saída detalhada com status, flags, TTL e seções de resposta. Concursos de TI cobram a leitura do cabeçalho (NOERROR, NXDOMAIN, SERVFAIL), das flags e do TTL, além de opções como +short, +trace e consulta reversa -x para diagnóstico avançado.",
      "preRequisitos": [
        "DNS e registros de nome (A, MX, NS, TXT)",
        "Noção de resolvedor DNS e de TTL (time to live)"
      ],
      "objetivosObservaveis": [
        "Consultar um nome com dig <nome> [tipo] [@servidor]",
        "Interpretar status NOERROR, NXDOMAIN e SERVFAIL e as flags da resposta",
        "Usar +short para resposta enxuta e +trace para rastrear desde a raiz",
        "Realizar consulta reversa com dig -x IP para nome via registros PTR"
      ],
      "competencias": [
        "Depuração de DNS com saída detalhada",
        "Leitura de TTL, status e seções da resposta DNS"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t3-s1 (nslookup: consulta DNS)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O dig aparece em questões de TI que exigem leitura de status DNS, flags e TTL, sendo mais detalhado que o nslookup. Classificação média é estimativa pedagógica de adequação ao programa, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "dig (Domain Information Groper) é ferramenta avançada de consulta DNS, disponível no Linux e no macOS e no Windows com o pacote BIND. Sintaxe: dig <nome> [tipo] [@servidor]. A saída traz cabeçalho com status (NOERROR/NXDOMAIN/SERVFAIL), flags, QUERY TIME, seção QUESTION, ANSWER (registros com TTL), AUTHORITY e ADDITIONAL. Opções úteis: +short mostra apenas a resposta, +trace rastreia desde a raiz e -x faz consulta reversa.",
      "intermediario": "O cabeçalho do dig mostra o status da consulta: NOERROR (resposta obtida), NXDOMAIN (nome não existe) e SERVFAIL (falha do servidor). A seção ANSWER lista os registros com seus TTL, indicando por quanto tempo o cache mantém a resposta. A opção +short exibe apenas a resposta, enquanto +trace percorre a resolução iterativa desde os servidores raiz, útil para verificar delegação.",
      "avancado": "O dig é mais detalhado que o nslookup e permite verificar o suporte a DNSSEC com +dnssec. No diagnóstico, responde a 'o registro existe?', 'qual o TTL e por quanto tempo o cache mantém a resposta?' e 'a delegação a partir da raiz está correta?'. A consulta reversa -x IP usa registros PTR para obter o nome a partir de um endereço.",
      "especialista": "Interpretar corretamente o status e as seções do dig separa um nome inexistente (NXDOMAIN) de uma falha do servidor (SERVFAIL). O +trace ignora o cache do resolvedor local, revelando problemas de delegação. Combine TTL de ANSWER com +short para avaliar caches, e use -x para confirmar registros PTR em consultas reversas."
    },
    "comparacoes": [
      {
        "tema": "dig vs nslookup na consulta DNS",
        "a": {
          "rotulo": "dig",
          "texto": "Saída detalhada com cabeçalho (status, flags, QUERY TIME), QUESTION, ANSWER com TTL, AUTHORITY e ADDITIONAL. Opções +short, +trace, -x e +dnssec. Mais adequado para diagnóstico avançado."
        },
        "b": {
          "rotulo": "nslookup",
          "texto": "Saída simples com Server, Name e Address(es). Sintaxe nslookup <nome> [-type=tipo] [servidor]. Não mostra TTL nem flags com clareza. Mais adequado para verificações rápidas de resolução."
        },
        "diferencaGabarito": "O dig fornece metadados como TTL, flags e todas as seções da resposta, enquanto o nslookup é mais simples e rápido, mas carece desses detalhes para diagnóstico profundo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O comando dig +trace consulta apenas o resolvedor local configurado no sistema.",
        "porqueErrada": "O +trace faz resolução iterativa desde os servidores raiz, ignorando o cache do resolvedor local, o que é justamente útil para diagnosticar problemas de delegação e cadeia de autoridades.",
        "versaoCorreta": "Errado. O comando dig +trace percorre a cadeia de delegação desde a raiz e não consulta o cache local, servindo para diagnosticar falhas de delegação."
      },
      {
        "afirmacaoEquivocada": "O status NXDOMAIN do dig indica que o servidor DNS falhou ao responder.",
        "porqueErrada": "NXDOMAIN significa que o nome consultado não existe (resposta autoritativa de que não há registro), enquanto SERVFAIL indica que o servidor encontrou um problema ao tentar resolver, como falha de DNSSEC ou de delegação.",
        "versaoCorreta": "Errado. NXDOMAIN indica que o nome não existe, não uma falha do servidor; já SERVFAIL é que indica problema do servidor ao resolver."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "dig: consulta avançada de registros DNS",
        "Status DNS: NOERROR, NXDOMAIN, SERVFAIL",
        "TTL e seções QUESTION, ANSWER, AUTHORITY, ADDITIONAL"
      ],
      "regras": [
        "A seção ANSWER exibe os registros com seus TTL",
        "O +trace rastreia a resolução desde os servidores raiz ignorando o cache local"
      ],
      "comparacoes": [
        "O dig é mais detalhado que o nslookup, exibindo TTL, flags e todas as seções da resposta"
      ],
      "fluxos": [
        "Diagnóstico com dig: consultar nome, ler status e flags, verificar TTL da ANSWER, usar +trace para delegação e -x para reverso"
      ],
      "excecoes": [
        "O dig não está instalado por padrão em algumas distribuições Linux e requer o pacote BIND no Windows"
      ],
      "palavrasChave": [
        "dig",
        "DNS",
        "NOERROR",
        "NXDOMAIN",
        "SERVFAIL",
        "TTL",
        "+trace",
        "-x"
      ],
      "checklist": [
        "Executar dig <nome> e ler o cabeçalho com status e flags",
        "Verificar a seção ANSWER e os TTL dos registros",
        "Usar dig +short para resposta enxuta",
        "Usar dig +trace para rastrear desde a raiz",
        "Usar dig -x IP para consulta reversa via PTR",
        "Diferenciar NXDOMAIN (nome não existe) de SERVFAIL (falha do servidor)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Ao executar dig www.exemplo.com, a saída mostra status NOERROR e seção ANSWER com A 93.184.216.34 TTL 3600. O que isso indica?",
        "dados": "Comando: dig www.exemplo.com; saída: status NOERROR, seção ANSWER com A 93.184.216.34 TTL 3600.",
        "conceitos": [
          "Registro A (endereço IPv4)",
          "TTL (time to live) e cache de DNS"
        ],
        "estrategia": "Ler o status NOERROR para confirmar sucesso e o TTL da seção ANSWER para saber por quanto tempo o cache mantém a resposta.",
        "execucao": [
          "Confirmar que o status é NOERROR (resolução bem-sucedida)",
          "Ler o registro A na seção ANSWER: 93.184.216.34",
          "Ler o TTL associado: 3600 segundos",
          "Concluir que o nome resolve e fica em cache por até 3600 s"
        ],
        "resultado": "Resolução bem-sucedida: IP 93.184.216.34; o registro permanece em cache por até 3600 segundos (TTL).",
        "justificativa": "O status NOERROR indica que o servidor respondeu com sucesso, e o TTL de 3600 informa o tempo máximo de retenção da resposta em cache, de modo que a resolução funciona para aquele nome naquele resolvedor.",
        "errosFrequentes": [
          "Ignorar o status e assumir sucesso apenas porque há uma seção ANSWER",
          "Confundir TTL com o tempo de vida do pacote na rede em vez do cache de DNS"
        ],
        "variacao": "Se o status fosse NXDOMAIN, o nome não existiria, independentemente do TTL mostrado em outras seções."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um administrador quer listar apenas os servidores de e-mail (MX) do domínio exemplo.com, sem metadados, usando dig.",
        "dados": "Comando: dig exemplo.com MX +short; saída: 10 mx1.exemplo.com\n20 mx2.exemplo.com.",
        "conceitos": [
          "Registro MX (servidor de e-mail)",
          "Opção +short do dig (resposta enxuta)"
        ],
        "estrategia": "Usar dig com o tipo MX e a opção +short para obter apenas a lista de servidores de e-mail e suas prioridades.",
        "execucao": [
          "Executar dig exemplo.com MX +short",
          "Ler cada linha: prioridade seguida do servidor de e-mail",
          "Identificar que menor número de prioridade indica maior prioridade",
          "Confirmar que mx1 (10) é primário e mx2 (20) é secundário"
        ],
        "resultado": "Lista de servidores de e-mail com prioridade: mx1.exemplo.com (10, primário) e mx2.exemplo.com (20, secundário).",
        "justificativa": "O +short remove metadados e exibe somente a resposta; o registro MX associa prioridade a cada servidor, sendo o menor número tentado primeiro na entrega de e-mail.",
        "errosFrequentes": [
          "Assumir que o primeiro servidor listado é sempre o primário, sem olhar a prioridade",
          "Confundir prioridade MX com ordem alfabética ou de aparição na saída"
        ],
        "variacao": "Se a saída fosse dig exemplo.com MX +short com uma única linha '5 mx.exemplo.com', haveria um único servidor de e-mail com prioridade 5."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O comando dig +trace consulta apenas o resolvedor local configurado no sistema.'",
        "dados": "Afirmação sobre o escopo do dig +trace; comportamento correto: resolução iterativa desde os servidores raiz.",
        "conceitos": [
          "Opção +trace do dig (resolução iterativa desde a raiz)",
          "Cache do resolvedor local versus servidores raiz"
        ],
        "estrategia": "Desmontar a afirmação explicando que o +trace ignora o cache do resolvedor local e percorre a cadeia desde os servidores raiz até o servidor autoritativo.",
        "execucao": [
          "Executar dig exemplo.com +trace",
          "Observar a consulta aos servidores raiz e a descentralização até o autoritativo",
          "Comparar com dig exemplo.com (usa cache do resolvedor local)",
          "Concluir que o +trace não se limita ao resolvedor local"
        ],
        "resultado": "Errado. O dig +trace faz resolução iterativa desde os servidores raiz, ignorando o cache do resolvedor local, útil para diagnosticar delegação.",
        "justificativa": "A leitura ingênua confunde +trace com uma consulta comum ao resolvedor local; na verdade, o +trace ignora esse cache e revela a cadeia completa de delegação, expondo problemas que uma consulta normal mascararia.",
        "errosFrequentes": [
          "Acreditar que o +trace apenas repete a consulta do resolvedor local",
          "Não perceber que o +trace ignora o cache e pode mostrar resultados diferentes da consulta normal"
        ],
        "variacao": "Se dig exemplo.com +trace parasse em um servidor intermediário sem chegar ao autoritativo, haveria um problema de delegação nessa parte da cadeia."
      }
    ]
  },
  "m2-u5-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Existem ferramentas complementares de DNS (host, getent, resolvectl) e o arquivo hosts, que sobrescreve a resolução externa. O cache DNS explica por que um cliente continua usando um IP antigo após a alteração do registro. Concursos cobram esses comandos e o papel do cache na resolução de nomes.",
      "preRequisitos": [
        "DNS e registros de nome (A, MX, NS, TXT)",
        "nslookup e dig (consulta de registros DNS)"
      ],
      "objetivosObservaveis": [
        "Usar host para consulta DNS simples e concisa",
        "Usar getent hosts para consultar o resolvedor do sistema, incluindo /etc/hosts",
        "Usar resolvectl para status, query e flush-caches do cache DNS",
        "Limpar o cache DNS com ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)"
      ],
      "competencias": [
        "Identificar ferramentas complementares de diagnóstico DNS",
        "Explicar o papel do cache DNS e como limpá-lo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t3-s1 (nslookup: consulta DNS)",
        "m2-u5-t3-s2 (dig: consulta DNS avançada)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Ferramentas complementares de DNS e cache aparecem em questões de TI sobre diagnóstico de rede, com relevância mediana. Classificação média é estimativa pedagógica, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "host: comando simples de consulta DNS (Linux/macOS), saída concisa. getent hosts: consulta o resolvedor do sistema, incluindo /etc/hosts antes do DNS, útil para verificar como o sistema resolve o nome. resolvectl (systemd-resolved): status, query e flush-caches. Cache DNS: sistemas e navegadores mantêm cache local; ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux) limpa o cache. Problemas de cache: DNS alterado, cliente ainda usa IP antigo até expirar. /etc/hosts e C:\\Windows\\System32\\drivers\\etc\\hosts (Windows) sobrescrevem o DNS para nomes específicos.",
      "intermediario": "O host faz consultas simples com saída concisa; o getent hosts consulta o resolvedor do sistema, incluindo /etc/hosts antes do DNS, útil para verificar como o sistema resolve o nome. O resolvectl oferece status, query e flush-caches. O cache DNS acelera consultas armazenando respostas durante o TTL, mas pode deixar o cliente com IP antigo após a mudança do registro. Limpar o cache resolve isso sem afetar roteamento, ARP ou conectividade IP.",
      "avancado": "O arquivo hosts tem prioridade sobre o DNS para nomes listados nele, override local antes de qualquer consulta externa. Útil para testes, mas vetor de sequestro se alterado maliciosamente. O cache pode existir em múltiplas camadas: sistema, navegador e aplicações, cada qual com seu TTL. O resolvectl inspeciona e esvazia o cache do systemd-resolved; ipconfig /flushdns faz o mesmo no Windows.",
      "especialista": "Ao diagnosticar falhas de resolução, considere a ordem: hosts primeiro, depois cache do sistema/navegador, e só então o DNS externo. Nome que resolve via getent hosts mas não via dig indica override em /etc/hosts. Limpar o cache (flushdns ou resolvectl flush-caches) remove respostas antigas, mas não corrige roteamento, ARP ou conectividade IP, que exigem outras ferramentas."
    },
    "comparacoes": [
      {
        "tema": "getent hosts vs dig na resolução de nomes",
        "a": {
          "rotulo": "getent hosts",
          "texto": "Consulta o resolvedor do sistema, incluindo primeiro /etc/hosts e depois o DNS; mostra como o próprio sistema resolve o nome, respeitando overrides locais."
        },
        "b": {
          "rotulo": "dig",
          "texto": "Consulta diretamente um servidor DNS, ignorando /etc/hosts; exibe resposta detalhada com status, flags e TTL, independente do resolvedor configurado no sistema."
        },
        "diferencaGabarito": "O getent hosts reflete a resolução real do sistema (incluindo /etc/hosts), enquanto o dig consulta diretamente o servidor DNS, ignorando overrides locais."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O comando ipconfig /flushdns resolve problemas de roteamento e conectividade IP.",
        "porqueErrada": "O ipconfig /flushdns limpa apenas o cache DNS do Windows; não afeta roteamento, ARP ou conectividade IP, que são questões de camadas inferiores.",
        "versaoCorreta": "Errado. O flushdns limpa apenas o cache DNS; não afeta roteamento, ARP ou conectividade IP."
      },
      {
        "afirmacaoEquivocada": "O arquivo hosts só é consultado depois que o DNS falha em resolver um nome.",
        "porqueErrada": "O arquivo hosts é consultado antes do DNS e tem prioridade sobre ele para nomes listados nele, funcionando como override local.",
        "versaoCorreta": "Errado. O arquivo hosts é consultado antes do DNS e sobrescreve a resolução externa para nomes nele listados."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "host: consulta DNS simples e concisa",
        "getent hosts: resolução do sistema incluindo /etc/hosts",
        "resolvectl: status, query e flush-caches do cache DNS",
        "Arquivo hosts: override local nome para IP antes do DNS",
        "Cache DNS: armazena respostas durante o TTL"
      ],
      "regras": [
        "O arquivo hosts tem prioridade sobre o DNS para nomes listados nele",
        "ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux) limpa o cache DNS"
      ],
      "comparacoes": [
        "O getent hosts consulta o resolvedor do sistema incluindo /etc/hosts; o dig consulta diretamente o servidor DNS"
      ],
      "fluxos": [
        "Diagnóstico de resolução: verificar /etc/hosts, limpar cache DNS, consultar com host/getent/dig, identificar override ou cache desatualizado"
      ],
      "excecoes": [
        "O resolvectl está disponível em sistemas com systemd-resolved; em outros, use outros meios de gerenciar o cache"
      ],
      "palavrasChave": [
        "host",
        "getent",
        "resolvectl",
        "cache DNS",
        "flushdns",
        "/etc/hosts",
        "TTL",
        "resolvedor do sistema"
      ],
      "checklist": [
        "Usar host para consulta DNS simples",
        "Usar getent hosts para verificar resolução do sistema incluindo /etc/hosts",
        "Usar resolvectl query e flush-caches para gerenciar cache",
        "Limpar cache com ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)",
        "Suspeitar de override em /etc/hosts se o nome resolver de forma diferente via dig",
        "Lembrar que limpar cache não corrige problemas de roteamento ou IP"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que é o arquivo hosts e como ele afeta a resolução de nomes, sobrescrevendo o DNS?",
        "dados": "Arquivo: /etc/hosts (Linux/macOS) ou C:\\Windows\\System32\\drivers\\etc\\hosts (Windows); conteúdo de exemplo: 192.168.1.10 servidor.local.",
        "conceitos": [
          "Arquivo hosts (override local nome para IP)",
          "Prioridade do hosts sobre o DNS"
        ],
        "estrategia": "Explicar que o arquivo hosts mapeia nomes para IP localmente, é consultado antes do DNS e sobrescreve a resolução externa para nomes listados nele.",
        "execucao": [
          "Identificar o caminho do arquivo hosts no sistema operacional",
          "Ler uma entrada exemplo: 192.168.1.10 servidor.local",
          "Entender que o sistema consulta hosts antes de consultar o DNS",
          "Concluir que servidor.local resolverá para 192.168.1.10 independentemente do DNS"
        ],
        "resultado": "O arquivo hosts mapeia nomes para IPs localmente, sobrescrevendo o DNS; útil para testes, mas risco de sequestro se alterado maliciosamente.",
        "justificativa": "Como o hosts é consultado antes do DNS, qualquer nome nele listado terá o IP do arquivo em vez do IP do servidor DNS, como override local.",
        "errosFrequentes": [
          "Acreditar que o hosts é consultado somente após falha do DNS",
          "Não perceber que alterações no hosts afetam imediatamente a resolução local"
        ],
        "variacao": "Se o arquivo hosts contivesse 10.0.0.5 exemplo.com, o sistema resolveria exemplo.com para 10.0.0.5, ignorando o registro DNS público."
      },
      {
        "tipo": "aplicacao",
        "problema": "O DNS de um domínio foi alterado no servidor, mas um cliente continua resolvendo o endereço IP antigo. Qual a causa e a correção?",
        "dados": "Cenário: registro DNS alterado; cliente ainda obtém IP antigo; comandos: ipconfig /flushdns ou resolvectl flush-caches.",
        "conceitos": [
          "Cache DNS local desatualizado",
          "TTL e retenção de resposta em cache"
        ],
        "estrategia": "Identificar que o cliente usa resposta antiga em cache e que limpar o cache força nova consulta ao DNS.",
        "execucao": [
          "Confirmar que o servidor DNS já tem o registro atualizado",
          "Verificar que o cliente ainda recebe o IP antigo (cache desatualizado)",
          "Executar ipconfig /flushdns no Windows ou resolvectl flush-caches no Linux",
          "Consultar novamente o nome para confirmar que agora recebe o IP novo"
        ],
        "resultado": "Cache DNS local desatualizado; a correção é limpar o cache com ipconfig /flushdns ou resolvectl flush-caches e testar novamente.",
        "justificativa": "O cache guarda a resposta antiga durante o TTL; limpar o cache descarta essa resposta e obriga o cliente a consultar o DNS novamente, obtendo o IP atualizado.",
        "errosFrequentes": [
          "Acreditar que alterar o DNS no servidor é suficiente e que o cliente atualiza imediatamente",
          "Confundir limpar cache DNS com reiniciar a rede ou o roteador"
        ],
        "variacao": "Se após limpar o cache o cliente ainda obtivesse o IP antigo, o problema poderia estar em um override no arquivo hosts ou em um cache intermediário de provedor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O comando flushdns resolve problemas de roteamento, conectividade IP e também DNS.'",
        "dados": "Afirmação sobre o escopo do flushdns; correção: ele limpa apenas o cache DNS, não afeta roteamento, ARP ou conectividade IP.",
        "conceitos": [
          "Escopo do ipconfig /flushdns e resolvectl flush-caches",
          "Diferença entre cache DNS e roteamento/IP"
        ],
        "estrategia": "Desmontar a afirmação mostrando que flushdns atua somente no cache DNS e não toca em roteamento, ARP ou conectividade IP.",
        "execucao": [
          "Executar ipconfig /flushdns (Windows) ou resolvectl flush-caches (Linux)",
          "Observar que apenas as entradas de cache DNS são removidas",
          "Verificar que rotas, tabelas ARP e interfaces de rede permanecem inalteradas",
          "Concluir que problemas de roteamento exigem outras ferramentas (ip route, ping, traceroute)"
        ],
        "resultado": "Errado. O flushdns limpa apenas o cache DNS; não afeta roteamento, ARP ou conectividade IP.",
        "justificativa": "A leitura ingênua associa 'rede' a qualquer comando de rede, mas o flushdns é escopo exclusivo do cache DNS; problemas de roteamento exigem diagnóstico de camadas inferiores.",
        "errosFrequentes": [
          "Acreditar que limpar o cache DNS conserta qualquer problema de rede",
          "Não distinguir falha de resolução de nome de falha de conectividade IP"
        ],
        "variacao": "Se a afirmação fosse 'flushdns resolve problemas de resolução de nome causados por cache desatualizado', ela seria correta, pois esse é exatamente o escopo do comando."
      }
    ]
  },
  "m2-u5-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O diagnóstico estruturado por camadas (bottom-up e top-down) organiza as verificações de rede do físico à aplicação, evitando chutes e isolando a causa rapidamente. Concursos cobram a ordem das verificações e a escolha da abordagem pela pista disponível, além da documentação dos testes.",
      "preRequisitos": [
        "Modelo de camadas de rede (físico, enlace, rede, transporte, aplicação)",
        "Comandos básicos de diagnóstico (ip, ping, ss, curl)"
      ],
      "objetivosObservaveis": [
        "Aplicar a abordagem bottom-up, começando pela camada física/enlace",
        "Aplicar a abordagem top-down, começando pela aplicação quando o sintoma é claro",
        "Escolher a abordagem adequada de acordo com a pista disponível",
        "Documentar cada teste e seu resultado para evitar repetição de passos"
      ],
      "competencias": [
        "Diagnóstico estruturado de falhas de rede",
        "Raciocínio por camadas para isolar a causa raiz"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m2-u5-t3-s1 (nslookup: consulta DNS)",
        "m2-u5-t3-s3 (Ferramentas complementares e cache DNS)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O diagnóstico por camadas aparece em questões de TI sobre ordem de verificações de rede, com relevância mediana. Classificação média é estimativa pedagógica, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Método bottom-up: (1) Físico/Enlace — cabo conectado? Luz de link? ip addr mostra interface UP? (2) Rede — IP válido? Ping ao gateway funciona? Rota padrão (ip route)? (3) Transporte — porta em escuta (ss)? Firewall bloqueando? (4) Aplicação — serviço responde? HTTP 200? (5) Nome — DNS resolve? Testar IP direto separa nome de conectividade. Também top-down (aplicação para baixo) quando o sintoma aponta para a camada. Princípio: isolar a camada que falha antes de culpar a aplicação e documentar cada teste.",
      "intermediario": "No bottom-up, começa pelo físico/enlace (cabo, link, IP), depois rede (ping ao gateway, rota padrão), transporte (porta em escuta com ss, firewall) e aplicação (serviço responde, HTTP 200, DNS). Top-down é preferível quando o sintoma indica a camada, ex. HTTP 500 aponta para a aplicação. Chave: isolar a camada que falha antes de culpar a aplicação e documentar cada teste, evitando repetir passos.",
      "avancado": "O diagnóstico por camadas transforma um problema difuso ('a Internet não funciona') em hipóteses verificáveis. Teste por caminho alternativo (IP direto em vez do nome, outro resolvedor) para separar DNS de conectividade. Erro comum: pular etapas e testar a aplicação antes de confirmar link e IP, causando diagnósticos incorretos e retrabalho.",
      "especialista": "A documentação sistemática de cada teste e resultado diferencia um diagnóstico profissional de um palpite. Registre camada testada, comando, resultado e conclusão parcial, para que qualquer pessoa continue a investigação sem repetir etapas. O método escala para equipes e evita que técnicos repitam testes com interpretações divergentes."
    },
    "comparacoes": [
      {
        "tema": "Diagnóstico bottom-up vs top-down",
        "a": {
          "rotulo": "Bottom-up",
          "texto": "Começa pela camada física/enlace e sobe até a aplicação. Útil quando não há pista clara sobre onde está a falha; verifica cabo, link, IP, gateway, porta e serviço em sequência."
        },
        "b": {
          "rotulo": "Top-down",
          "texto": "Começa pela aplicação e desce até o físico. Útil quando o sintoma já aponta para uma camada (ex.: código 500 indica aplicação); desce até encontrar a causa raiz."
        },
        "diferencaGabarito": "O bottom-up é adequado sem pista prévia, verificando do físico para cima; o top-down é preferível quando o sintoma já indica a camada, descendo até a causa."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Diagnóstico por camadas é desnecessário; basta reiniciar o roteador para resolver qualquer problema de rede.",
        "porqueErrada": "Reiniciar o roteador pode mascarar o sintoma sem identificar a causa raiz, fazendo o problema reaparecer. O diagnóstico por camadas isola a camada com falha e permite correção definitiva.",
        "versaoCorreta": "Errado. Reiniciar pode mascarar o problema; o diagnóstico por camadas identifica a causa raiz e evita recorrência."
      },
      {
        "afirmacaoEquivocada": "Se o ping ao IP funciona, o problema está sempre na aplicação e não na rede.",
        "porqueErrada": "O ping ao IP testar apenas a camada de rede/conectividade; falhas de DNS, TLS/HTTP ou porta da aplicação podem impedir o acesso mesmo com ping funcionando.",
        "versaoCorreta": "Errado. Ping ao IP funcionando testa apenas conectividade de rede; ainda é preciso verificar DNS, porta (TLS/HTTP) e serviço da aplicação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Diagnóstico por camadas (bottom-up e top-down)",
        "Isolamento da camada que falha antes de culpar a aplicação",
        "Documentação de testes e resultados",
        "Caminho alternativo (IP direto vs nome) para separar DNS de conectividade"
      ],
      "regras": [
        "Começar pelo físico/enlace no bottom-up se não houver pista clara",
        "Usar top-down quando o sintoma já indica a camada (ex.: HTTP 500)",
        "Documentar cada teste e seu resultado para evitar repetições"
      ],
      "comparacoes": [
        "O bottom-up verifica do físico para cima; o top-down desce da aplicação até o físico"
      ],
      "fluxos": [
        "Diagnóstico: físico/enlace → rede → transporte → aplicação → nome; ou top-down do sintoma para a causa"
      ],
      "excecoes": [
        "Um código 500 aponta diretamente para a aplicação, justificando começar pelo top-down"
      ],
      "palavrasChave": [
        "bottom-up",
        "top-down",
        "camadas",
        "causa raiz",
        "documentação",
        "ping",
        "gateway",
        "DNS",
        "HTTP"
      ],
      "checklist": [
        "Verificar cabo/link e interface UP (físico/enlace)",
        "Fazer ping ao gateway e conferir rota padrão (rede)",
        "Verificar porta em escuta com ss e firewall (transporte)",
        "Testar serviço e HTTP 200 (aplicação)",
        "Verificar DNS com nslookup/dig (nome)",
        "Documentar cada teste e resultado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um site não carrega. Qual é a primeira verificação na abordagem bottom-up, começando pela camada física ou enlace?",
        "dados": "O cenário é o de um site que não carrega. A primeira verificação percorre a pilha de baixo para cima: começa pela camada física e de enlace, confirmando se o cabo ou o Wi-Fi está conectado, se o link está ativo e se o endereço IP foi atribuído (via ipconfig ou ip addr).",
        "conceitos": [
          "Camada física/enlace como primeiro passo do bottom-up",
          "ipconfig/ip addr para verificar IP atribuído"
        ],
        "estrategia": "Começar pela camada física/enlace: sem IP nem link ativo, o problema está abaixo da rede; não vale testar DNS ou aplicação ainda.",
        "execucao": [
          "Verificar se o cabo/Wi-Fi está conectado e há luz de link",
          "Executar ipconfig/ip addr para confirmar que a interface tem IP",
          "Se não houver IP, parar e corrigir DHCP ou o cabo antes de prosseguir",
          "Somente com IP válido, seguir para a camada de rede (ping ao gateway)"
        ],
        "resultado": "A primeira verificação percorre a pilha de baixo para cima e começa pela camada física e de enlace: sem cabo ou Wi-Fi conectado, sem link ativo e sem endereço IP atribuído, nada acima disso funciona. Sem IP, o diagnóstico para aí e a correção é no DHCP ou no cabo, antes de qualquer teste de aplicação.",
        "justificativa": "Sem camada física/enlace funcionando, nenhuma camada acima (rede, transporte, aplicação) terá chance de funcionar, então deve ser verificada primeiro.",
        "errosFrequentes": [
          "Pular a camada física e testar DNS ou aplicação sem saber se há IP",
          "Assumir que 'site não carrega' é sempre problema do servidor web"
        ],
        "variacao": "Se o computador tem IP mas o site ainda não carrega, segue-se para a camada de rede (ping ao gateway)."
      },
      {
        "tipo": "aplicacao",
        "problema": "O ping ao IP do servidor funciona, mas o site não carrega. Quais são os próximos passos?",
        "dados": "Cenário: ping ao IP funciona; próximo passo: testar DNS (nslookup/dig do nome), porta 443 (ss/curl), certificado TLS e HTTP (curl -I).",
        "conceitos": [
          "Isolamento DNS vs conectividade (ping ao IP versus nome)",
          "Teste de porta 443/TLS e HTTP (ss/curl/curl -I)"
        ],
        "estrategia": "Como o ping ao IP está OK, o problema está acima da rede: verificar DNS do nome, porta 443, TLS e HTTP.",
        "execucao": [
          "Confirmar que o ping ao IP funciona (conectividade de rede OK)",
          "Testar a resolução DNS do nome com nslookup/dig",
          "Testar a porta 443 com ss ou curl",
          "Verificar o certificado TLS e a resposta HTTP com curl -I"
        ],
        "resultado": "Como o ping ao IP funciona, os próximos passos são testar DNS do nome, porta 443 (TLS) e HTTP para isolar se o problema está em DNS, TLS ou na aplicação web.",
        "justificativa": "O ping ao IP prova que a rede opera; a falha está em DNS (nome não resolve), TLS (certificado/porta 443) ou HTTP (serviço da aplicação).",
        "errosFrequentes": [
          "Assumir que, como o ping funciona, o problema está apenas na aplicação",
          "Esquecer de testar DNS e concluir erroneamente que o servidor está fora do ar"
        ],
        "variacao": "Se o ping ao IP falhasse, o problema estaria na camada de rede (roteamento, gateway), não em DNS ou aplicação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Diagnóstico por camadas é desnecessário; basta reiniciar o roteador.'",
        "dados": "Afirmação sobre o diagnóstico por camadas; correção: reiniciar pode mascarar o sintoma sem identificar a causa raiz, gerando recorrência.",
        "conceitos": [
          "Limitação do reinício como diagnóstico",
          "Causa raiz versus sintoma mascarado"
        ],
        "estrategia": "Desmontar a afirmação mostrando que reiniciar o roteador limpa estados temporários mas não identifica a camada com falha, deixando o problema voltar.",
        "execucao": [
          "Reconhecer que reiniciar o roteador pode restaurar conectividade temporariamente",
          "Perceber que a causa raiz (ex.: porta bloqueada, DNS incorreto, IP conflitante) permanece",
          "Concluir que sem diagnóstico por camadas o problema tende a recorrer",
          "Defender o diagnóstico estruturado para correção definitiva"
        ],
        "resultado": "Errado. Reiniciar pode mascarar o problema; o diagnóstico por camadas identifica a causa raiz e evita recorrência.",
        "justificativa": "A leitura ingênua confunde 'sintoma sumiu' com 'problema resolvido'; o reinício limpa estado, mas o diagnóstico por camadas isola a falha para correção permanente.",
        "errosFrequentes": [
          "Acreditar que reiniciar equipamentos resolve qualquer falha de rede",
          "Não documentar a causa raiz, fazendo o problema reaparecer após o reinício"
        ],
        "variacao": "Se a afirmação fosse 'reiniciar o roteador pode restaurar conectividade temporariamente', seria correta, mas não substitui o diagnóstico por camadas."
      }
    ]
  },
  "m2-u5-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A mesma tela de \"site não abre\" pode nascer de DNS, conectividade, roteamento ou aplicação, e cada causa exige uma correção distinta. Em concurso, a banca apresenta cenários em que o sintoma é idêntico e só o teste diferencial revela a camada afetada: comparar nome com IP, pingar o gateway, pingar um IP externo e por fim testar a porta do serviço. Errar essa atribuição leva o candidato a consertar a coisa errada — por exemplo, culpar o provedor quando o resolvedor de nomes está fora do ar.",
      "preRequisitos": [
        "Diagnóstico estruturado por camadas (físico até aplicação)",
        "Uso de ping, nslookup/dig e traceroute",
        "Noção de gateway, rota padrão e serviço de nomes"
      ],
      "objetivosObservaveis": [
        "Reconhecer os sintomas típicos de falha de DNS, conectividade, roteamento e aplicação",
        "Escolher o teste diferencial que isola a camada afetada em um cenário dado",
        "Indicar a correção correspondente a cada tipo de falha",
        "Interpretar uma saída de ping/traceroute para decidir a hipótese seguinte"
      ],
      "competencias": [
        "Diagnóstico diferencial por eliminação de hipóteses",
        "Decisão de correção a partir da camada identificada",
        "Leitura de mensagens de ferramentas de rede"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — método base que ordena os testes",
        "m2-u5-t3-s1 (nslookup: consulta DNS) — confirma ou descarta falha de resolução",
        "m2-u5-t1-s1 (ping: finalidade, sintaxe e interpretação) — teste de enlace e de roteamento",
        "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — serviço usado no exemplo de falha de aplicação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": " e exploram a distinção entre as falhas em itens de certo/errado e em cenários de diagnóstico; costuma cobrar a associação entre mensagem de erro e camada. Tema de aplicação, exige raciocínio sobre testes diferenciais, e não decoreba de portas. A classificação é qualitativa e pedagógica, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "DNS: 'ERR_NAME_NOT_RESOLVED', nslookup falha, mas IP direto funciona. Conectividade (enlace/físico): sem IP, sem link, ping ao gateway falha. Roteamento: ping ao gateway ok, mas ping a IP externo falha, 'destination net unreachable', traceroute para no gateway. Aplicação: ping e DNS ok, mas HTTP falha (4xx/5xx, timeout na porta), certificado inválido. A distinção orienta a correção: DNS -> verificar resolvedor/cache/delegação; conectividade -> cabo/Wi-Fi/DHCP; roteamento -> rota padrão/NAT/provedor; aplicação -> serviço, porta, certificado e código.",
      "intermediario": "O procedimento isola a camada por etapas: se o nome não resolve mas o IP responde, a falha é de DNS; se nem o gateway responde, o problema está no enlace, no cabo, no Wi-Fi ou na configuração de IP; se o gateway responde e o destino externo não, falta rota ou o provedor está indisponível; se ambos respondem e o serviço falha, a causa está na aplicação, na porta ou no certificado. Cada teste deve descartar uma hipótese antes de passar à seguinte, para não confundir sintoma com causa.",
      "avancado": "Um único sintoma admite causas em camadas distintas, e a ordem dos testes define a economia do diagnóstico. \"Destination net unreachable\" vindo do próprio gateway indica rota ausente na tabela local; vindo de um roteador intermediário no traceroute, indica falha no provedor. Ausência de resposta ao ping não prova queda de rede: firewall pode descartar ICMP, e a conectividade continua íntegra. Por isso o diagnóstico diferencial crucia evidências: IP/diretório, resposta do gateway, resposta externa e estado da porta.",
      "especialista": "No diagnóstico de campo, a camada é apenas o ponto de partida: após isolar a falha, o técnico mede impacto e decide a correção. Falha de DNS aponta para resolvedor, cache ou delegação; falha de roteamento, para rota padrão, NAT ou contrato com o provedor; falha de aplicação, para serviço, porta, certificado e código. Em arquiteturas com balanceadores e proxies, o sintoma aparece na borda, mas a causa costuma estar no backend, o que exige correlacionar registros de diferentes camadas antes de agir."
    },
    "comparacoes": [
      {
        "tema": "Falha de DNS versus falha de conectividade",
        "a": {
          "rotulo": "Falha de DNS",
          "texto": "O nome não é resolvido (\"ERR_NAME_NOT_RESOLVED\", NXDOMAIN no nslookup), mas o acesso ao mesmo servidor pelo endereço IP funciona normalmente. A camada física e a rede estão íntegras; a resolução de nomes é que falha."
        },
        "b": {
          "rotulo": "Falha de conectividade",
          "texto": "A interface fica sem endereço válido, o link cai ou o ping ao gateway da própria rede local não responde. Nenhum teste além do enlace chega a ser executado, porque não há caminho até o destino."
        },
        "diferencaGabarito": "O teste que separa as duas hipóteses é acessar o destino por IP: se funcionar, a falha é de DNS; se nem o gateway responde, a falha é de conectividade. Confundir os dois casos leva a verificar o resolvedor quando o problema é o cabo ou o DHCP."
      },
      {
        "tema": "Falha de roteamento versus falha de aplicação",
        "a": {
          "rotulo": "Falha de roteamento",
          "texto": "O gateway responde ao ping, mas o ping a um endereço IP externo falha com \"destination net unreachable\" e o traceroute para no primeiro salto. O caminho até a saída da rede local está ausente ou bloqueado."
        },
        "b": {
          "rotulo": "Falha de aplicação",
          "texto": "Ping a hosts internos e externos e resolução de nomes funcionam, mas o serviço não responde: erros HTTP 4xx/5xx, tempo esgotado na conexão com a porta ou certificado inválido."
        },
        "diferencaGabarito": "Se o IP externo responde e o serviço falha, a rede provou que entrega pacotes: a causa está na aplicação, na porta ou no certificado. Culpar o roteamento nesse cenário é erro clássico de gabarito, porque a conectividade já foi comprovada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o site não abre, o problema é da Internet.",
        "porqueErrada": "Trata sintoma genérico como causa única. A página pode falhar por resolução de nomes, por rota ausente na rede local ou por erro do próprio serviço, e as correções são completamente diferentes.",
        "versaoCorreta": "Antes de concluir, aplique testes diferenciais: compare acesso por nome e por IP, pingue o gateway e depois um IP externo. Só então atribua a falha a DNS, conectividade, roteamento ou aplicação."
      },
      {
        "afirmacaoEquivocada": "O ping ao gateway funcionando garante acesso à Internet.",
        "porqueErrada": "O gateway é apenas o primeiro salto. O roteamento externo, o NAT e o enlace com o provedor podem falhar depois dele, e o ping a um endereço externo continua sem resposta.",
        "versaoCorreta": "Confirme a conectividade de saída pingando um endereço IP externo conhecido; a resposta do gateway isoladamente só comprova o enlace local."
      },
      {
        "afirmacaoEquivocada": "Um erro HTTP 500 indica falha na rede do usuário.",
        "porqueErrada": "O código 500 é uma resposta do servidor, logo o pacote percorreu a rede e chegou ao destino. A falha ocorreu no processamento da aplicação ou do serviço, não no transporte.",
        "versaoCorreta": "Erro 500 é falha da aplicação ou do servidor: a rede funcionou. A investigação deve recair sobre o serviço, seus registros e o código, não sobre o enlace."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Falha de DNS: nome não resolvido, acesso por IP preservado",
        "Falha de conectividade: interface sem IP, link down ou gateway inacessível",
        "Falha de roteamento: gateway responde, destino externo não",
        "Falha de aplicação: rede e nomes íntegros, serviço indisponível",
        "Teste diferencial: comparação que isola a camada afetada"
      ],
      "regras": [
        "Se o nome falha e o IP responde, a falha é de resolução de nomes",
        "Se o gateway não responde, a falha é de enlace ou de configuração local",
        "Se o gateway responde e o IP externo não, a falha é de roteamento",
        "Se tudo na rede responde e o serviço falha, a falha é da aplicação"
      ],
      "comparacoes": [
        "DNS x conectividade: uma preserva o acesso por IP, a outra impede qualquer teste além do enlace",
        "Roteamento x aplicação: na primeira o caminho falta, na segunda o caminho funciona e o serviço falha"
      ],
      "fluxos": [
        "Testar o nome; testar o gateway; testar um IP externo; testar a porta e o serviço — nessa ordem, eliminando uma camada por vez"
      ],
      "excecoes": [
        "Firewall que descarta ICMP pode fazer o ping falhar em rede saudável; bloquear o ping não é prova de queda de conectividade"
      ],
      "palavrasChave": [
        "sintoma",
        "causa",
        "camada",
        "teste diferencial",
        "gateway",
        "resolução de nomes"
      ],
      "checklist": [
        "Reconheço os sintomas de cada tipo de falha?",
        "Sei qual teste separa uma hipótese da outra?",
        "Consigo indicar a correção de cada caso?",
        "Evito concluir \"falta de Internet\" sem pingar um IP externo?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um site não abre no navegador, mas o ping ao endereço IP 93.184.216.34 responde normalmente. Qual é a suspeita e qual teste a confirma?",
        "dados": "Domínio acessado: exemplo.com.br. Ping ao IP 93.184.216.34: 4 respostas recebidas. Ping ao nome exemplo.com.br: falha. Consulta nslookup exemplo.com.br: \"server can't find\". Acesso a outros sites por nome: normal.",
        "conceitos": [
          "Resolução de nomes por DNS",
          "Distinção entre falha de DNS e falha de conectividade"
        ],
        "estrategia": "Como o acesso por IP funciona, a parte de rede está comprovada. Compara-se então o comportamento do nome com o do IP para localizar a falha na camada de aplicação, no serviço de nomes.",
        "execucao": [
          "Pingar o endereço IP do site e confirmar resposta, o que descarta conectividade e roteamento",
          "Repetir o acesso pelo nome e observar a mensagem de falha do navegador",
          "Consultar o nome com nslookup ou dig para verificar se o servidor responde a consulta",
          "Testar outro servidor DNS, se disponível, para separar falha de resolvedor de falha de delegação"
        ],
        "resultado": "A suspeita é falha de DNS: o nome não resolve, embora o IP responda. Se o nslookup também falhar, a causa está no resolvedor, no cache ou na delegação do domínio, e não na rede física.",
        "justificativa": "A conectividade foi comprovada pelo ping bem-sucedido ao IP, e a resolução de nomes foi refutada pela consulta que não retorna endereço. Como o IP direto funciona e o nome não, a falha está restrita ao serviço que traduz nomes em endereços.",
        "errosFrequentes": [
          "Concluir \"a Internet caiu\" sem testar o acesso por IP, ignorando que apenas o nome falha",
          "Confundir falha de resolução com falha do site: se o IP responde, o servidor está alcançável e a página pode estar com problemas próprios"
        ],
        "variacao": "O ping ao IP também falha, mas o ping ao gateway responde: a suspeita passa a ser de roteamento, e o teste seguinte é pingar um endereço IP externo e examinar o traceroute."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma estação da rede 192.168.1.0/24, o ping ao gateway 192.168.1.1 responde, mas o ping a 8.8.8.8 retorna \"destination net unreachable\". Qual o diagnóstico e a correção?",
        "dados": "IP da estação: 192.168.1.50/24. Gateway: 192.168.1.1 (responde em 2 ms). Destino: 8.8.8.8 (\"destination net unreachable\" do próprio gateway). Traceroute: interrompido no primeiro salto. Outras estações da mesma rede: mesmo sintoma.",
        "conceitos": [
          "Rota padrão e função do gateway",
          "Mensagem destination net unreachable"
        ],
        "estrategia": "Com o gateway respondendo, o enlace local está íntegro. A falha ocorre ao encaminhar pacotes para fora da rede local, o que aponta para rota padrão ausente, NAT desativado ou indisponidade do provedor.",
        "execucao": [
          "Confirmar que o gateway responde ao ping, provando o enlace local",
          "Pingar um segundo endereço IP externo para verificar que o sintoma não é do destino específico",
          "Consultar a tabela de rotas da estação e verificar a existência da rota padrão pelo gateway",
          "Verificar no roteador a configuração de NAT e o estado do enlace com o provedor"
        ],
        "resultado": "Diagnóstico: falha de roteamento. A rota padrão está ausente ou o NAT não está configurado no roteador; a correção é restaurar a rota padrão e a tradução de endereços, ou acionar o provedor se o enlace externo estiver caído.",
        "justificativa": "A resposta do gateway comprova a conectividade local, e a mensagem \"destination net unreachable\" indica que não há caminho conhecido até a rede de destino. Como o traceroute para no primeiro salto, a falha está entre a rede local e a Internet, e não na estação.",
        "errosFrequentes": [
          "Atribuir o sintoma ao cabo ou ao Wi-Fi, já refutados pela resposta do gateway",
          "Reiniciar a estação sem verificar a rota padrão, o que não corrige a ausência de caminho externo"
        ],
        "variacao": "O ping a 8.8.8.8 funciona, mas o site por nome não abre: volta-se ao teste de DNS, consultando o nome com nslookup para inspecionar o resolvedor e o cache."
      },
      {
        "tipo": "erro",
        "problema": "O ping a 8.8.8.8 retorna \"request timed out\" e o operador conclui que a Internet está fora, acionando o provedor. No entanto, os usuários navegam normalmente. Onde está o erro de leitura?",
        "dados": "Ping 8.8.8.8: \"request timed out\" em 4 tentativas. Navegador: páginas HTTP e HTTPS abrendo normalmente. nslookup: nomes resolvidos. traceroute: saltos completos até o destino. Política de firewall da borda: ICMP de entrada descartado.",
        "conceitos": [
          "ICMP como ferramenta de diagnóstico, não como prova de conectividade",
          "Descarte seletivo de pacotes por firewall"
        ],
        "estrategia": "Cruzam-se as evidências: se o tráfego HTTP flui e o traceroute completa os saltos, a rede entrega pacotes. O tempo esgotado do ping reflete uma escolha de filtragem, não uma ausência de caminho.",
        "execucao": [
          "Testar um serviço que exija conectividade real, como abrir uma página ou consultar um nome",
          "Executar o traceroute até o destino e verificar se os saltos intermediários respondem",
          "Consultar a política de firewall da borda quanto ao tratamento do ICMP",
          "Registrar que o ping é inconclusivo quando o ICMP é filtrado e adotar outro teste como referência"
        ],
        "resultado": "A leitura ingênua está errada: a conectividade existe e o tempo esgotado do ping decorre do descarte de ICMP pelo firewall. A Internet não está fora, e o acionamento do provedor seria infundado.",
        "justificativa": "O ping depende de mensagens ICMP, que podem ser bloqueadas sem afetar o tráfego TCP. Como as páginas abrem e o traceroute completa o caminho, há entrega de pacotes; logo, a ausência de resposta ao ping não pode ser lida como queda de conectividade.",
        "errosFrequentes": [
          "Tratar o ping como prova absoluta de conectividade, ignorando a filtragem de ICMP",
          "Descartar o teste por completo, quando o correto é interpretá-lo junto a outras evidências"
        ],
        "variacao": "Além do ping, o traceroute também expira em todos os saltos e nenhuma página abre: agora a hipótese de falha de conectividade se sustenta, e o teste seguinte é verificar o gateway e o enlace."
      }
    ]
  },
  "m2-u5-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Mensagens de erro são pistas, não diagnósticos: cada uma indica a camada envolvida e a causa provável, e a prova cobra justamente essa associação entre mensagem, camada e conduta. Leitura apressada transforma um tempo esgotado em \"host desligado\" e um recusado em \"rede fora\", gerando a correção errada. Dominar o mapa mensagem → camada → causa → próximo teste permite resolver cenários simulados sem decorar listas soltas.",
      "preRequisitos": [
        "Ferramentas de diagnóstico (ping, traceroute, clientes TCP)",
        "Modelo de camadas e noção de porta e serviço",
        "Diferença entre falha de rede, de transporte e de aplicação"
      ],
      "objetivosObservaveis": [
        "Reconhecer as mensagens de erro mais comuns em diagnóstico de redes",
        "Mapear cada mensagem à camada e à causa provável",
        "Escolher o próximo teste que confirma ou descarta a hipótese",
        "Distinguir recusa de conexão de tempo esgotado quanto ao comportamento do firewall"
      ],
      "competencias": [
        "Interpretação de mensagens de erro em múltiplas camadas",
        "Seleção do próximo teste de diagnóstico",
        "Leitura de códigos de status HTTP e de erro de TLS"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u5-t4-s1 (Diagnóstico estruturado por camadas) — ordem de eliminação de hipóteses",
        "m2-u5-t4-s2 (Diferenças entre falha de DNS, conectividade, roteamento e aplicação) — classifica o sintoma antes da mensagem",
        "m2-u5-t1-s2 (traceroute/tracert: finalidade, sintaxe e interpretação) — interpreta \"TTL expired in transit\"",
        "m3-u2-t1-s1 (Calendários e convites de reunião) — erros de aplicação em videoconferência"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Bancas como e associam a mensagem à camada em itens de certo/errado, e apresenta cenários em que o candidato deve escolher a conduta correta diante de um erro específico. Exige raciocínio sobre camadas, não memorização de listas. A classificação é qualitativa e pedagógica, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Cada mensagem de erro aponta uma camada distinta, e o significado muda conforme o texto: 'Request timed out' no ping indica host desligado, firewall bloqueando o ICMP ou perda de pacotes; 'Destination Host Unreachable' aponta ARP que falhou ou rota ausente; 'TTL expired in transit' revela laço de roteamento ou TTL muito baixo; 'Connection refused' significa porta fechada, por serviço parado ou firewall em modo REJECT; 'Connection timed out' indica pacote descartado, por firewall em modo DROP ou host inacessível; 'ERR_NAME_NOT_RESOLVED' e 'NXDOMAIN' pertencem à camada de DNS; 'ERR_CERT_AUTHORITY_INVALID' acusa certificado não confiável; '502 Bad Gateway' mostra que o proxy reverso não alcançou o servidor de aplicação; '503' indica sobrecarga ou manutenção; '404' corresponde a recurso inexistente; '401' a falha de autenticação; e '403' a falta de permissão.",
      "intermediario": "Cada mensagem pertence a uma camada: unreachable e TTL expired indicam problemas de rede; refused e timed out indicam comportamento de transporte; códigos 4xx e 5xx indicam respostas da aplicação. A conduta é sempre o próximo teste que confirma ou descarta a hipótese. Diante de refused, verifica-se se o serviço está em escuta na porta; diante de timed out, verifica-se firewall e rota; diante de NXDOMAIN, testa-se a resolução com outro servidor.",
      "avancado": "Refused e timed out separam duas políticas de firewall: REJECT responde com recusa, DROP descarta em silêncio. Unreachable vem do próprio hospedeiro ou de um roteador sem rota, enquanto timed out indica ausência de resposta. No HTTP, 4xx atribui a falha ao cliente e 5xx ao servidor; 502 localiza a falha entre o proxy e o backend, e 503 indica indisponibilidade temporária. O diagnóstico correto cruza a camada da mensagem com o resultado dos testes já feitos.",
      "especialista": "Em incidentes reais, várias mensagens convivem e a causa raiz só aparece na correlação: timeouts generalizados com 502 na borda apontam para o backend; refused em uma porta específica aponta para o serviço. É preciso distinguir norma de sintoma — o código HTTP é resposta do servidor, não da rede — e escolher a evidência que fecha o caso. A leitura de registros de aplicação, firewall e roteador, nessa ordem, evita corrigir a camada errada."
    },
    "comparacoes": [
      {
        "tema": "Connection refused versus Connection timed out",
        "a": {
          "rotulo": "Connection refused",
          "texto": "O hospedeiro responde ativamente com uma recusa: a porta não tem serviço em escuta ou o firewall aplica política REJECT. Prova que a máquina está alcançável e ativa na rede."
        },
        "b": {
          "rotulo": "Connection timed out",
          "texto": "Nenhuma resposta chega dentro do prazo: o pacote foi descartado por firewall com DROP, houve perda, congestionamento ou o hospedeiro está inacessível. Não prova nem que a porta está fechada nem que a máquina caiu."
        },
        "diferencaGabarito": "A recusa é uma resposta do destino; o tempo esgotado é ausência de resposta. Concluir \"host desligado\" a partir de um tempo esgotado é erro, porque descarte silencioso de firewall produz o mesmo sintoma."
      },
      {
        "tema": "Destination Host Unreachable versus Request timed out",
        "a": {
          "rotulo": "Destination Host Unreachable",
          "texto": "Resposta afirmativa de falha: o emissor não encontrou rota ou não resolveu o endereço físico do vizinho. Indica problema de roteamento ou de ARP na camada de rede."
        },
        "b": {
          "rotulo": "Request timed out",
          "texto": "Silêncio do destino após o prazo: pode ser hospedeiro desligado, ICMP filtrado, perda de pacotes ou caminho congestionado. Não identifica a camada sem teste adicional."
        },
        "diferencaGabarito": "Unreachable informa que não há caminho; timed out apenas informa que não houve resposta. Somente o unreachable autoriza conclusão imediata de falha de roteamento ou de ARP."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Connection refused indica queda da rede.",
        "porqueErrada": "A mensagem é uma resposta do hospedeiro de destino, o que pressupõe entrega de pacotes pela rede. Se a rede estivesse caída, não existiria resposta alguma, e sim um tempo esgotado.",
        "versaoCorreta": "Connection refused indica que o hospedeiro está ativo, mas a porta não aceita conexões: serviço parado ou firewall com política de rejeição."
      },
      {
        "afirmacaoEquivocada": "NXDOMAIN é um problema do servidor web.",
        "porqueErrada": "NXDOMAIN é resposta do serviço de nomes, não do serviço HTTP. O servidor web pode estar íntegro; o que falhou foi a tradução do nome em endereço IP.",
        "versaoCorreta": "NXDOMAIN indica que o nome não existe ou não resolve: a falha está no DNS, no cache ou na delegação do domínio, e não no servidor web."
      },
      {
        "afirmacaoEquivocada": "Timeout sempre significa que o host está desligado.",
        "porqueErrada": "Tempo esgotado também ocorre com firewall descartando pacotes, com perda de pacotes, congestionamento ou rota ausente. A ausência de resposta não identifica a causa por si só.",
        "versaoCorreta": "Timeout é ausência de resposta e admite várias causas; a máquina ativa com porta fechada produz Connection refused, enquanto firewall com DROP produz tempo esgotado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Timed out: ausência de resposta dentro do prazo",
        "Unreachable: resposta de falha por rota ou ARP ausente",
        "TTL expired: laço de roteamento ou TTL reduzido",
        "Refused: porta fechada, hospedeiro ativo",
        "NXDOMAIN: nome inexistente ou não resolvido",
        "502 e 503: falha do proxy ou indisponibilidade do serviço"
      ],
      "regras": [
        "Mensagem → camada → causa provável → próximo teste",
        "Firewall com DROP gera timed out; com REJECT gera refused",
        "Código 4xx atribui a falha ao cliente; 5xx, ao servidor"
      ],
      "comparacoes": [
        "Refused x timed out: um é resposta ativa de recusa, o outro é silêncio do destino",
        "4xx x 5xx: o primeiro culpa a requisição do cliente, o segundo o processamento no servidor"
      ],
      "fluxos": [
        "Identificar a mensagem; situar a camada; levantar a causa provável; executar o teste que confirma ou descarta a hipótese"
      ],
      "excecoes": [
        "ICMP filtrado produz timed out em rede funcional; certificado expirado produz erro de TLS mesmo com conectividade perfeita"
      ],
      "palavrasChave": [
        "mensagem",
        "camada",
        "causa",
        "hipótese",
        "diagnóstico",
        "próximo teste"
      ],
      "checklist": [
        "Reconheço as mensagens mais comuns?",
        "Consigo mapear cada uma à camada e à causa?",
        "Sei situar a camada antes de agir?",
        "Escolho o teste seguinte em vez de supor a causa?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Ao tentar abrir uma sessão SSH com o comando ssh admin@10.0.0.5, o cliente retorna \"Connection refused\" na porta 22. Como interpretar a mensagem?",
        "dados": "Destino: 10.0.0.5, porta 22 (SSH). Mensagem: \"Connection refused\". Ping a 10.0.0.5: responde em 1 ms. Serviço sshd no destino: parado. Firewall do destino: sem regra para a porta 22.",
        "conceitos": [
          "Connection refused como resposta ativa do destino",
          "Relação entre porta e serviço em escuta"
        ],
        "estrategia": "A recusa prova que o destino respondeu, portanto a conectividade foi descartada. A investigação se restringe à porta 22: serviço em escuta, firewall local ou permissão de acesso.",
        "execucao": [
          "Pingar o destino para confirmar que a máquina está alcançável",
          "Testar outra porta do mesmo hospedeiro para verificar que a recusa é específica da 22",
          "Verificar no destino se o serviço SSH está em escuta na porta 22",
          "Inspecionar as regras de firewall para a porta 22 e o estado do serviço"
        ],
        "resultado": "A mensagem indica hospedeiro ativo e rede íntegra, com a porta 22 fechada. A correção é iniciar o serviço SSH ou liberar a porta no firewall.",
        "justificativa": "Só é possível recusar uma conexão se o destino recebeu o pedido e respondeu; logo a camada de rede funciona. A recusa localiza a falha na camada de transporte, na porta, e a conduta seguinte é verificar o serviço em escuta.",
        "errosFrequentes": [
          "Interpretar a recusa como queda de rede, ignorando que ela é uma resposta do destino",
          "Reiniciar o roteador ou o cabo, quando a falha está no serviço ou na porta"
        ],
        "variacao": "A mesma tentativa retorna \"Connection timed out\" em vez de recusa: agora a hipótese é descarte de pacotes, e o teste seguinte é verificar a rota e as regras de firewall no caminho."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um navegador exibe \"ERR_CERT_DATE_INVALID\" ao acessar o portal da organização, enquanto outros sites abrem normalmente. Qual a causa provável e a correção?",
        "dados": "Endereço: portal.org.br (ping e resolução de nomes OK). Erro: \"ERR_CERT_DATE_INVALID\". Data do certificado do servidor: validade encerrada em 30/06/2026. Relógio do cliente: 04/11/2026. Outros sites HTTPS: funcionando.",
        "conceitos": [
          "Validade de certificado TLS",
          "Erro de aplicação em rede saudável"
        ],
        "estrategia": "Como ping e DNS funcionam, a falha está na camada de aplicação, na verificação de TLS. Compara-se a data do certificado com o relógio do cliente para decidir entre renovação e ajuste de hora.",
        "execucao": [
          "Confirmar que o destino responde ao ping e que o nome resolve, descartando rede e DNS",
          "Ler a validade informada ao inspecionar o certificado apresentado pelo servidor",
          "Confrontar essa validade com a data e o fuso do relógio do cliente",
          "Renovar o certificado no servidor se estiver expirado, ou corrigir a hora do cliente se estiver errada"
        ],
        "resultado": "O certificado do servidor está expirado em relação ao relógio do cliente, que está correto. A correção é renovar o certificado no servidor; o ajuste de hora do cliente seria a via alternativa em caso de relógio errado.",
        "justificativa": "O erro de data do certificado ocorre após o handshake TCP e a verificação de nome, ou seja, depois que a rede provou entregar pacotes. A falha é da camada de aplicação, e a causa é a validade do certificado, não a conectividade.",
        "errosFrequentes": [
          "Culpar a rede ou o provedor, embora ping e DNS respondam normalmente",
          "Ajustar o relógio do cliente sem antes verificar a data de validade do certificado apresentado"
        ],
        "variacao": "O erro passa a ser \"ERR_CERT_AUTHORITY_INVALID\" com datas corretas: a causa muda para cadeia de certificação não confiável, e a correção é instalar a cadeia completa ou o certificado do emissor."
      },
      {
        "tipo": "erro",
        "problema": "O ping a um hospedeiro retorna \"request timed out\" e o técnico afiança que o hospedeiro está desligado. A equipe de redes mostra que o hospedeiro responde a serviços TCP. Onde está o erro de interpretação?",
        "dados": "Ping 10.0.0.5: \"request timed out\" em todas as tentativas. Conexão TCP na porta 443 de 10.0.0.5: estabelecida. Política da borda: ICMP de entrada descartado. Logs do hospedeiro: atividade normal de serviço.",
        "conceitos": [
          "ICMP como ferramenta de diagnóstico",
          "Descarte seletivo de ICMP por firewall"
        ],
        "estrategia": "Comparar o resultado do ping com evidências de outra camada: se a conexão TCP se completa, o caminho de rede existe e o silêncio do ICMP é consequência da filtragem, não de máquina inativa.",
        "execucao": [
          "Estabelecer uma conexão TCP a uma porta conhecida do hospedeiro",
          "Consultar registros de firewall para verificar o tratamento do ICMP no caminho",
          "Confirmar a atividade do hospedeiro por outro meio, como serviço ou autenticação",
          "Registrar a conclusão de que o ping é inconclusivo sob filtragem de ICMP"
        ],
        "resultado": "A leitura está errada: o hospedeiro está ativo e o silêncio do ping decorre do descarte de ICMP pelo firewall. Tempo esgotado não pode ser lido como máquina desligada.",
        "justificativa": "Uma conexão TCP concluída exige troca de pacotes nas duas direções, o que só é possível com o caminho de rede íntegro. Como o handshake foi completado enquanto o ping silenciou, a ausência de resposta ao ICMP é filtragem, não queda do hospedeiro.",
        "errosFrequentes": [
          "Converter ausência de resposta em diagnóstico definitivo de host desligado",
          "Prescindir de teste complementar quando o ping falha, deixando de cruzar evidências de outras camadas"
        ],
        "variacao": "Além do ping, a conexão TCP também expira e nenhum serviço responde: a hipótese de hospedeiro inacessível passa a valer, e o próximo teste é examinar a rota com traceroute."
      }
    ]
  }
};
