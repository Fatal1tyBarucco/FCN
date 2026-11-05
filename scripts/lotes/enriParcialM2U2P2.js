const enriParcialM2U2P2 = {
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
 }
};
