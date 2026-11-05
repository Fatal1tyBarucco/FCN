const enriParcialM2U1P1 = {
 "m2-u1-t1-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Os termos de rede, nó, enlace, cliente e servidor são o vocabulário base de todo o módulo de Redes de Computadores. Sem essa definição clara, o aluno não consegue entender protocolos, camadas de rede, topologias nem procedimentos de diagnóstico de conectividade. Questões de concursos costumam partir justamente da identificação correta de quem solicita e quem fornece um recurso, e da distinção entre dispositivo final e dispositivo que apenas encaminha tráfego. Erros nessa etapa prejudicam o raciocínio em todas as unidades seguintes.",
   "preRequisitos": ["Noções gerais de computação (dispositivo, programa, arquivo)"],
   "objetivosObservaveis": ["Definir rede de computadores", "Distinguir nó de enlace", "Diferenciar cliente de servidor", "Descrever o fluxo requisição-resposta"],
   "competencias": ["Vocabulário de redes", "Leitura de topologias simples"],
   "dificuldade": "iniciante",
   "relacoes": ["m2-u1-t1-s2 (Classificação de redes: LAN, WLAN, MAN, WAN, PAN) — unidade seguinte do mesmo tópico"],
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
    "a": { "rotulo": "Nó final", "texto": "É o dispositivo origem ou destino do tráfego: computador, servidor de arquivos, impressora. Gera ou consome dados." },
    "b": { "rotulo": "Nó intermediário", "texto": "É o dispositivo que apenas encaminha tráfego em nome de outros: roteador, switch. Não gera nem consome os dados que transporta." },
    "diferencaGabarito": "O nó final é ponto de origem ou destino da comunicação; o nó intermediário apenas repassa pacotes entre outros nós. Essa classificação muda a interpretação do diagrama e a localização de falhas."
   },
   {
    "tema": "cliente x servidor",
    "a": { "rotulo": "Cliente", "texto": "Dispositivo que solicita um recurso ou serviço (ex.: estação de trabalho acessando uma página web)." },
    "b": { "rotulo": "Servidor", "texto": "Dispositivo que fornece um recurso ou serviço (ex.: servidor de arquivos, servidor DNS/DHCP)." },
    "diferencaGabarito": "Os papéis são definidos pela interação, não pelo hardware: um mesmo computador pode ser cliente em uma interação e servidor em outra."
   },
   {
    "tema": "enlace físico x enlace lógico",
    "a": { "rotulo": "Enlace físico", "texto": "É o meio de transmissão entre nós: cabo de par trançado, fibra óptica, cabo coaxial, rádio." },
    "b": { "rotulo": "Enlace lógico", "texto": "É a ligação estabelecida entre camadas ou protocolos que permite a troca de informação sobre o meio físico." },
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
   "conceitos": ["rede de computadores", "nó", "enlace", "cliente", "servidor"],
   "regras": ["cliente solicita um recurso ou serviço", "servidor fornece um recurso ou serviço", "o cliente envia um pedido e o servidor devolve uma resposta"],
   "comparacoes": ["nó final gera/consuma dados; nó intermediário apenas encaminha", "cliente x servidor: papéis definidos pela interação, não pelo hardware"],
   "fluxos": ["cliente envia requisição", "servidor processa a requisição", "servidor devolve resposta ao cliente"],
   "excecoes": ["os papéis de cliente e servidor podem se inverter entre interações distintas", "um mesmo computador pode ser cliente em uma interação e servidor em outra"],
   "palavrasChave": ["dispositivo", "canal", "serviço", "comunicação", "compartilhamento", "requisição-resposta"],
   "checklist": ["Defino o que é rede de computadores?", "Distinguo nó de enlace?", "Diferencio cliente de servidor?", "Descrevo o fluxo requisição-resposta?", "Reconheço que um mesmo computador pode ser cliente e servidor?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Identificar os componentes de uma rede doméstica simples com um roteador e 3 computadores.",
    "dados": "1 roteador, 3 computadores ligados por cabos Ethernet ou Wi-Fi; cada computador acessa páginas web; o roteador também oferece serviços DNS/DHCP.",
    "conceitos": ["rede de computadores", "nó", "enlace", "cliente", "servidor"],
    "estrategia": "Contar todos os dispositivos conectados para identificar os nós; verificar quais enlaces (físicos ou sem fio) os ligam; observar quem solicita páginas web (cliente) e quem fornece DNS/DHCP (servidor).",
    "execucao": ["1) Listar os dispositivos: roteador + 3 computadores = 4 nós.", "2) Identificar os enlaces: cabos Ethernet ou Wi-Fi entre roteador e computadores.", "3) Classificar os computadores como clientes ao acessarem páginas web.", "4) Classificar o roteador como servidor ao fornecer DNS/DHCP local."],
    "resultado": "Nós: roteador + 3 computadores (4 nós). Enlaces: cabos Ethernet ou Wi-Fi. Clientes: computadores ao acessarem páginas web. Servidor: o roteador como servidor DNS/DHCP local, e servidores remotos (ex: Google DNS 8.8.8.8).",
    "justificativa": "O gabarito distingue cada dispositivo por sua função na interação: quem pede páginas web é cliente, quem fornece DNS/DHCP é servidor, e o roteador desempenha o papel de servidor na rede local ao prover esses serviços internos.",
    "errosFrequentes": ["Considerar o roteador apenas como intermediário e não reconhecer seu papel de servidor DNS/DHCP local.", "Contar apenas os computadores como nós e esquecer o próprio roteador."],
    "variacao": "Substituir o roteador por um switch e adicionar um servidor de arquivos dedicado; o aluno deve identificar o servidor de arquivos como servidor e as estações como clientes."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma empresa tem 20 estações de trabalho, 1 servidor de arquivos e 1 impressora de rede. Mapear clientes e servidores.",
    "dados": "20 estações de trabalho, 1 servidor de arquivos, 1 impressora de rede; enlaces por cabos Cat6 ou Wi-Fi; estações acessam arquivos e enviam impressões.",
    "conceitos": ["cliente", "servidor", "nó", "enlace"],
    "estrategia": "Listar todos os dispositivos como nós; classificar o servidor de arquivos e o servidor de impressão como servidores porque fornecem recursos; classificar as estações como clientes quando solicitam arquivos ou impressões; identificar os enlaces que interconectam tudo.",
    "execucao": ["1) Contabilizar todos os dispositivos: 20 estações + 1 servidor de arquivos + 1 impressora = nós da rede.", "2) Classificar o servidor de arquivos como servidor (fornece arquivos).", "3) Classificar o servidor de impressão como servidor (gerencia a impressora de rede).", "4) Classificar as 20 estações como clientes ao acessarem arquivos ou enviarem impressões.", "5) Identificar enlaces: cabos Cat6 ou Wi-Fi entre todos os dispositivos."],
    "resultado": "Servidores: servidor de arquivos (fornece arquivos) e servidor de impressão (gerencia impressora). Clientes: as 20 estações ao acessarem arquivos ou enviarem impressões. Nós: todos os dispositivos. Enlaces: cabos Cat6 ou Wi-Fi.",
    "justificativa": "O gabarito identifica quem fornece o recurso (servidor de arquivos fornece arquivos; servidor de impressão gerencia a impressora) e quem solicita (estações), sem confundir o hardware com o papel exercido na interação.",
    "errosFrequentes": ["Acreditar que a impressora de rede é um servidor por si só, quando na verdade é um recurso gerenciado por um servidor de impressão.", "Classificar todas as estações como servidores apenas porque estão conectadas à rede."],
    "variacao": "Adicionar um roteador entre as estações e os servidores; o aluno deve classificar o roteador como nó intermediário que apenas encaminha tráfego, não como cliente nem servidor."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: \"Em uma rede P2P (peer-to-peer), não há distinção entre cliente e servidor.\"",
    "dados": "Rede P2P (exemplo: BitTorrent) em que cada nó pode solicitar arquivos (cliente) e fornecer arquivos (servidor) ao mesmo tempo.",
    "conceitos": ["cliente", "servidor", "rede P2P", "papel lógico"],
    "estrategia": "Reconhecer que a afirmação confunde a ausência de servidores dedicados com a ausência de papéis; em P2P os papéis cliente e servidor existem, mas são dinâmicos e podem coexistir no mesmo nó.",
    "execucao": ["1) Identificar que a afirmação nega qualquer distinção entre cliente e servidor em P2P.", "2) Lembrar que, em redes P2P como BitTorrent, um nó baixa arquivos de outros (age como cliente) e envia partes para outros (age como servidor).", "3) Concluir que os papéis não são eliminados, apenas tornam-se dinâmicos e simultâneos no mesmo nó."],
    "resultado": "Parcialmente incorreto. Em P2P cada nó pode ser cliente E servidor simultaneamente (ex: BitTorrent), mas isso não elimina os papéis — apenas os torna dinâmicos. Um nó pode solicitar (cliente) e fornecer (servidor) ao mesmo tempo.",
    "justificativa": "O erro está em concluir que não há distinção entre papéis; na P2P a distinção continua válida por interação, mas um mesmo nó pode exercer ambos os papéis ao mesmo tempo, ao contrário do modelo cliente-servidor estático.",
    "errosFrequentes": ["Interpretar a ausência de servidores dedicados em P2P como ausência total de papéis cliente/servidor.", "Acreditar que um nó em P2P só pode ser cliente OU servidor, nunca ambos ao mesmo tempo."],
    "variacao": "Apresentar uma rede cliente-servidor clássica e perguntar se um servidor de banco de dados que consulta um serviço de autenticação externo também atua como cliente; o aluno deve reconhecer a inversão de papéis por interação."
   }
  ]
 },
 "m2-u1-t1-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "Saber classificar redes por abrangência geográfica (PAN, LAN, WLAN, MAN, WAN) e por escopo de acesso (intranet, extranet) é essencial para interpretar questões de concursos que apresentam cenários organizacionais e pedem a identificação correta do tipo de rede. A confusão entre intranet e extranet é recorrente e pode levar o aluno a errar itens sobre controle de acesso, autenticação e alcance organizacional. Sem essa classificação, o aluno não consegue dimensionar redes nem compreender a arquitetura da Internet como interconexão de redes menores.",
   "preRequisitos": ["Conceito de rede de computadores", "Nó e enlace"],
   "objetivosObservaveis": ["Definir cada classificação de rede (PAN, LAN, WLAN, MAN, WAN)", "Dar um exemplo concreto de cada tipo", "Distinguir intranet de extranet", "Relacionar alcance geográfico e uso organizacional"],
   "competencias": ["Classificação de redes", "Leitura de cenários organizacionais"],
   "dificuldade": "iniciante",
   "relacoes": ["m2-u1-t1-s1 (Definição de rede e componentes básicos) — base conceitual da mesma unidade"],
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
    "a": { "rotulo": "LAN", "texto": "Rede local com alcance em um ambiente, edifício ou campus; enlaces podem ser com fio ou sem fio." },
    "b": { "rotulo": "WLAN", "texto": "Tipo de LAN cujos enlaces são sem fio, como o Wi-Fi; a diferença em relação à LAN é o meio, não o alcance." },
    "diferencaGabarito": "A WLAN é um tipo de LAN sem fio; a diferença está no meio de transmissão, não no alcance geográfico."
   },
   {
    "tema": "intranet x extranet",
    "a": { "rotulo": "Intranet", "texto": "Rede interna privada de uma organização, usando protocolos TCP/IP para serviços internos, acesso restrito a membros da organização." },
    "b": { "rotulo": "Extranet", "texto": "Extensão controlada da intranet para parceiros, fornecedores ou clientes externos, mediante autenticação e regras de acesso." },
    "diferencaGabarito": "A intranet é interna e privada; a extranet estende o acesso a terceiros autorizados, mudando quem pode entrar."
   },
   {
    "tema": "MAN x WAN",
    "a": { "rotulo": "MAN", "texto": "Rede metropolitana que cobre uma cidade ou região metropolitana (ex: rede de uma prefeitura)." },
    "b": { "rotulo": "WAN", "texto": "Rede de longa distância que cobre países ou continentes (ex: a Internet); alcance maior que a MAN." },
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
   "conceitos": ["PAN", "LAN", "WLAN", "MAN", "WAN", "intranet", "extranet"],
   "regras": ["alcançe geográfico define PAN, LAN, WLAN, MAN, WAN", "escopo de acesso define intranet (interna) e extranet (terceiros autorizados)", "critérios de alcance e de escopo são independentes"],
   "comparacoes": ["WLAN é um tipo de LAN sem fio", "intranet é interna; extranet estende acesso a terceiros controlados"],
   "fluxos": ["dispositivos pessoais se conectam por Bluetooth (PAN)", "estações se conectam a rede local por cabo ou Wi-Fi (LAN/WLAN)", "sede e filial se interconectam por WAN (Internet com VPN ou circuito dedicado)"],
   "excecoes": ["a Internet é uma WAN pública que interliga redes menores", "uma intranet pode apoiar-se em LANs e WANs"],
   "palavrasChave": ["abrangência", "Wi-Fi", "privada", "parceiros", "TCP/IP", "escopo de acesso"],
   "checklist": ["Defino cada tipo de rede (PAN, LAN, WLAN, MAN, WAN)?", "Dou exemplos concretos de cada classificação?", "Distinguo intranet de extranet?", "Relaciono alcance geográfico e uso organizacional?", "Reconheço que a Internet é uma WAN pública?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Classificar corretamente a rede de uma universidade com 5 campi distribuídos por uma única cidade.",
    "dados": "5 campi da mesma universidade em uma única cidade; cada campus tem rede local; os campi estão interconectados; a rede interna da universidade é privada.",
    "conceitos": ["LAN", "WLAN", "MAN", "intranet"],
    "estrategia": "Identificar que cada campus possui sua própria LAN (ou WLAN, se usar Wi-Fi); verificar que a interconexão entre campi na mesma cidade configura uma MAN; reconhecer que a rede interna privada da universidade é uma intranet.",
    "execucao": ["1) Cada campus tem uma LAN (ou WLAN, se os enlaces forem sem fio/Wi-Fi).", "2) A interconexão entre campi na mesma cidade é uma MAN (rede metropolitana).", "3) Se os campi estivessem em cidades diferentes, a interconexão seria uma WAN.", "4) A rede interna privada da universidade, usando TCP/IP para serviços internos, é uma intranet."],
    "resultado": "Cada campus tem uma LAN (ou WLAN). A interconexão entre campi é uma MAN (se a cidade for pequena) ou WAN (se os campi estiverem em cidades diferentes). A rede interna da universidade é uma intranet.",
    "justificativa": "O gabarito classifica cada nível pela abrangência: LAN dentro do campus, MAN entre campi da mesma cidade, WAN entre cidades, e intranet pelo escopo de acesso interno privado da organização.",
    "errosFrequentes": ["Classificar a interconexão entre campi da mesma cidade como WAN em vez de MAN.", "Acreditar que toda rede que usa TCP/IP é Internet, sem reconhecer que a rede privada da universidade é uma intranet."],
    "variacao": "Alterar o cenário para campi em cidades diferentes; o aluno deve reclassificar a interconexão como WAN em vez de MAN."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma empresa com matriz em São Paulo e filial em Rio de Janeiro precisa conectar suas redes. Que tipo de rede usar?",
    "dados": "matriz em São Paulo, filial em Rio de Janeiro, redes locais já existentes em cada local; necessidade de interconectar as duas redes geograficamente distantes; opções: Internet com VPN ou circuito dedicado (MPLS, fibra alugada).",
    "conceitos": ["WAN", "LAN", "intranet", "VPN"],
    "estrategia": "Reconhecer que São Paulo e Rio de Janeiro são cidades distintas, portanto a interconexão é de longa distância; classificar como WAN; avaliar que a conexão pode ser feita pela Internet pública com VPN para segurança ou por circuito dedicado (MPLS, fibra alugada).",
    "execucao": ["1) Identificar que matriz e filial estão em cidades geograficamente distantes (São Paulo e Rio de Janeiro).", "2) Classificar a interconexão como WAN, pois abrange longa distância entre cidades.", "3) Considerar a opção de usar a Internet pública com VPN para garantir segurança na transmissão.", "4) Considerar a opção de circuito dedicado (MPLS ou fibra alugada) como alternativa à Internet pública.", "5) Concluir que a rede corporativa combinada permanece como intranet, agora interligada por uma WAN."],
    "resultado": "WAN — interconexão entre redes geograficamente distantes. Pode ser via Internet (com VPN para segurança) ou via circuito dedicado (MPLS, fibra alugada).",
    "justificativa": "O gabarito identifica a WAN como a classificação correta para interconexão de redes em cidades distintas, e apresenta as duas alternativas de implementação (Internet com VPN ou circuito dedicado) sem inventar estatísticas de uso.",
    "errosFrequentes": ["Classificar a interconexão entre São Paulo e Rio de Janeiro como MAN, quando MAN cobre apenas uma cidade/região metropolitana.", "Acreditar que usar a Internet pública automaticamente torna a rede uma Internet pública, sem reconhecer que a rede corporativa continua sendo uma intranet interligada por WAN."],
    "variacao": "Substituir a filial do Rio de Janeiro por um escritório no mesmo prédio da matriz; o aluno deve reclassificar a interconexão como LAN em vez de WAN."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação: \"Intranet e Internet são a mesma coisa, só muda o nome.\" Avaliar a correção dessa afirmação para uma organização que mantém rede interna privada.",
    "dados": "Rede interna de uma empresa usando protocolos TCP/IP para serviços internos; comparação com a rede pública global da Internet; afirmação de que não há diferença entre elas além do nome.",
    "conceitos": ["intranet", "Internet", "TCP/IP", "acesso restrito"],
    "estrategia": "Reconhecer que a afirmação confunde o uso de protocolos semelhantes (TCP/IP) com identidade de rede; intranet é privada e restrita à organização, Internet é pública e global; usar TCP/IP não torna uma intranet em Internet.",
    "execucao": ["1) Identificar que a afirmação nega qualquer diferença entre intranet e Internet.", "2) Lembrar que a intranet é uma rede privada interna de uma organização, não acessível publicamente.", "3) Lembrar que a Internet é a rede pública global, acessível a qualquer usuário.", "4) Concluir que ambas usam TCP/IP, mas diferem no controle de acesso: a intranet é restrita, a Internet é aberta."],
    "resultado": "Errado. Intranet é uma rede privada interna de uma organização, não acessível publicamente. Internet é a rede pública global. A intranet usa protocolos TCP/IP iguais, mas com acesso restrito.",
    "justificativa": "O gabarito corrige a afirmação ao esclarecer que o uso compartilhado de protocolos TCP/IP não equivale à mesma rede; a diferença fundamental está no escopo de acesso: intranet é privada/restrita, Internet é pública/global.",
    "errosFrequentes": ["Acreditar que usar TCP/IP torna a rede privada uma Internet pública.", "Confundir intranet com extranet, achando que qualquer rede que usa TCP/IP e se conecta externamente é Internet."],
    "variacao": "Apresentar uma extranet de uma empresa para fornecedores e perguntar se ela é Internet pública; o aluno deve reconhecer que a extranet é restrita a parceiros autorizados, não aberta ao público."
   }
  ]
 }
}