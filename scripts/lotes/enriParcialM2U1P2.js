const enriParcialM2U1P2 = {
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
 }
};
