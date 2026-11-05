const enriParcialM2U1P3 = {
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
  }
};
