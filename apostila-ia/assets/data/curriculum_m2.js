/* curriculum_m2.js — Módulo 2: Redes de Computadores
 * Conteúdo didático real para as 5 unidades do M2.
 * Cada subtópico tem: objetivoAprendizagem, conteudo, exemplos (3+), exercícios (2+).
 */

const curriculumM2 = {
  "modulo-2": {
    "titulo": "REDES DE COMPUTADORES",
    "unidades": [
      {
        "id": "modulo-2-unidade-1",
        "titulo": "2.1 Fundamentos de Redes",
        "topicos": [
          {
            "id": "modulo-2-unidade-1-topico-1",
            "titulo": "Conceitos fundamentais: nós, enlaces, clientes e servidores",
            "subtopicos": [
              {
                "id": "m2-u1-t1-s1",
                "titulo": "Definição de rede e componentes básicos",
                "objetivoAprendizagem": "Aluno definirá rede de computadores e identificará nós, enlaces, clientes e servidores.",
                "conteudo": "Rede de computadores é um conjunto de dispositivos interconectados que compartilham recursos e informações. Nós (nodes) são os dispositivos finais ou intermediários (computadores, servidores, roteadores, switches). Enlaces (links) são os canais de comunicação (cabos, fibra, rádio). Clientes são dispositivos que solicitam recursos; servidores são dispositivos que fornecem recursos. A comunicação entre cliente e servidor segue o modelo requisição-resposta, onde o cliente inicia o pedido e o servidor processa e responde.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar os componentes de uma rede doméstica simples com um roteador e 3 computadores.",
                    "resposta": "Nós: roteador + 3 computadores (4 nós). Enlaces: cabos Ethernet ou Wi-Fi. Clientes: computadores ao acessarem páginas web. Servidor: o roteador como servidor DNS/DHCP, e servidores remotos (ex: Google DNS 8.8.8.8)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa tem 20 estações de trabalho, 1 servidor de arquivos e 1 impressora de rede. Mapear clientes e servidores.",
                    "resposta": "Servidores: servidor de arquivos (fornece arquivos) e servidor de impressão (gerencia impressora). Clientes: as 20 estações ao acessarem arquivos ou enviarem impressões. Nós: todos os dispositivos. Enlaces: cabos Cat6 ou Wi-Fi."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em uma rede P2P (peer-to-peer), não há distinção entre cliente e servidor.'",
                    "correcao": "Parcialmente incorreto. Em P2P cada nó pode ser cliente E servidor simultaneamente (ex: BitTorrent), mas isso não elimina os papéis — apenas os torna dinâmicos. Um nó pode solicitar (cliente) e fornecer (servidor) ao mesmo tempo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em uma rede cliente-servidor, o servidor nunca assume o papel de cliente.",
                    "resposta": "Errado. Servidores podem ser clientes de outros servidores (ex: um servidor web que consulta um servidor de banco de dados)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual a função principal de um servidor em uma rede? A) Acessar recursos de outros dispositivos; B) Fornecer recursos e serviços para outros dispositivos; C) Interconectar redes diferentes.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m2-u1-t1-s2",
                "titulo": "Classificação de redes: LAN, WLAN, MAN, WAN, PAN",
                "objetivoAprendizagem": "Aluno distinguirá LAN, WLAN, MAN, WAN, PAN e intranet/extranet.",
                "conteudo": "LAN (Local Area Network): rede local, limitada a um edifício ou campus (ex: rede doméstica, WLAN (Wireless LAN): LAN sem fio (ex: Wi-Fi). MAN (Metropolitan Area Network): rede metropolitana, cobre uma cidade (ex: rede de uma prefeitura). WAN (Wide Area Network): rede de longa distância, cobre países/continentes (ex: Internet). PAN (Personal Area Network): rede pessoal, curto alcance (ex: Bluetooth entre celular e fone). Intranet: rede interna de uma organização, privada, usando protocolos TCP/IP. Extranet: extensão da intranet para parceiros externos, com acesso controlado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classificar a rede de uma universidade com 5 campi distribuídos por uma cidade.",
                    "resposta": "Cada campus tem uma LAN (ou WLAN). A interconexão entre campi é uma MAN (se a cidade for pequena) ou WAN (se os campi estiverem em cidades diferentes). A rede interna da universidade é uma intranet."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa com matriz em São Paulo e filial em Rio de Janeiro precisa conectar suas redes. Que tipo de rede usar?",
                    "resposta": "WAN — interconexão entre redes geograficamente distantes. Pode ser via Internet (com VPN para segurança) ou via circuito dedicado (MPLS, fibra alugada)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Intranet e Internet são a mesma coisa, só muda o nome.'",
                    "correcao": "Errado. Intranet é uma rede privada interna de uma organização, não acessível publicamente. Internet é a rede pública global. A intranet usa protocolos TCP/IP iguais, mas com acesso restrito."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Uma WLAN é um tipo de LAN que usa comunicação sem fio.",
                    "resposta": "Certo. WLAN = Wireless LAN (ex: Wi-Fi)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual tipo de rede cobre a maior área geográfica? A) LAN; B) MAN; C) WAN; D) PAN.",
                    "resposta": "C"
                  }
                ]
              },
              {
                "id": "m2-u1-t1-s3",
                "titulo": "Topologias físicas e lógicas",
                "objetivoAprendizagem": "Aluno identificará topologias estrela, anel, barra (bus), malha e híbrida.",
                "conteudo": "Topologia física: disposição cabada dos dispositivos. Estrela: todos conectados a um switch/hub central — falha em um nó não afeta os demais; falha no switch derruba tudo. Anel: dispositivos conectados em círculo — dados viajam em uma direção; falha em um nó pode quebrar o anel (token ring). Barra (bus): todos conectam ao mesmo cabo coaxial — simples mas colisões frequentes e falha no cabo derruba tudo. Malha: cada nó conectado a todos os outros — alta redundância, mas custo elevado. Híbrida: combinação de duas ou mais topologias. Topologia lógica: como os dados fluem (ex: barramento lógico sobre topologia física estrela — Ethernet moderno).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar a topologia de uma rede onde todos os computadores conectam a um switch central.",
                    "resposta": "Topologia estrela. O switch é o ponto central. Se um cabo falha, só aquele computador é afetado; se o switch falha, toda a rede cai."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma rede industrial precisa de alta disponibilidade e tolerância a falhas. Qual topologia é mais adequada?",
                    "resposta": "Malha — cada nó tem múltiplos caminhos. Se um enlace falha, o tráfego é redirecionado. O custo é maior, mas a justificativa é a disponibilidade crítica."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Na topologia em estrela, se um computador falha, toda a rede para.'",
                    "correcao": "Errado. Na estrela, a falha de um nó afeta apenas esse nó. A falha do dispositivo central (switch/hub) é o que derruba toda a rede."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Na topologia em barra (bus), a falha do cabo principal derruba toda a rede.",
                    "resposta": "Certo. O cabo backbone é ponto único de falha na topologia bus."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual topologia oferece maior redundância? A) Estrela; B) Anel; C) Malha; D) Barra.",
                    "resposta": "C"
                  }
                ]
              },
              {
                "id": "m2-u1-t1-s4",
                "titulo": "Comutação de circuitos vs. comutação de pacotes",
                "objetivoAprendizagem": "Aluno diferenciará comutação de circuitos e comutação de pacotes.",
                "conteudo": "Comutação de circuitos: estabelece um caminho dedicado (circuito) entre origem e destino antes da comunicação (ex: telefonia tradicional). Vantagens: latência previsível, banda garantida. Desvantagens: desperdício de recursos quando ocioso, setup lento. Comutação de pacotes: dados divididos em pacotes que caminham independentemente pela rede (ex: Internet). Vantagens: eficiência (compartilha largura de banda), tolerância a falhas. Desvantagens: latência variável (jitter), perda de pacotes, necessidade de reordenação. A Internet usa comutação de pacotes; redes telefônicas tradicionais usam comutação de circuitos.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Comparar uma ligação telefônica tradicional (PSTN) com uma chamada VoIP.",
                    "resposta": "PSTN: comutação de circuitos — caminho dedicado estabelecido pela duração da chamada, banda fixa. VoIP: comutação de pacotes — voz dividida em pacotes que competem com outros tráfegos, latência variável."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa precisa transmitir dados entre duas filiais com garantia de banda. Qual tecnologia escolher?",
                    "resposta": "Comutação de circuitos ou circuito virtual (MPLS) — garante banda e latência previsível. Se a rede for pacote puro (Internet), contratar circuito dedicado (E1/T1)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Na comutação de pacotes, os pacotes sempre seguem o mesmo caminho.'",
                    "correcao": "Errado. Na comutação de pacotes (como na Internet), cada pacote é roteado independentemente e pode seguir caminhos diferentes. Na comutação de circuitos virtuais (Frame Relay, MPLS), há um caminho lógico predefinido."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A Internet utiliza comutação de pacotes.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual a principal vantagem da comutação de pacotes sobre a de circuitos? A) Menor latência; B) Melhor aproveitamento de largura de banda; C) Mais simples de implementar.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-2-unidade-1-topico-2",
            "titulo": "Comunicação: unicast, broadcast, multicast e anycast",
            "subtopicos": [
              {
                "id": "m2-u1-t2-s1",
                "titulo": "Unicast, broadcast, multicast, anycast",
                "objetivoAprendizagem": "Alvo identificará os 4 tipos de comunicação em rede.",
                "conteudo": "Unicast: comunicação um-para-um (ex: acessar um site). Broadcast: um-para-todos na mesma rede/domínio de broadcast (ex: ARP, DHCP discovery). Multicast: um-para-muitos (grupo específico que se inscreveu) — ex: streaming de vídeo IPTV. Anycast: um-para-o-mais-próximo (ex: DNS root servers, CDN). Broadcast é limitado por roteadores (não atravessa sub-redes); multicast usa IGMP para gerenciamento de grupo.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar o tipo de comunicação quando um computador acessa um site.",
                    "resposta": "Unicast — comunicação um-para-um entre o navegador (cliente) e o servidor web."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa faz streaming de treinamento para 50 funcionários simultaneamente. Unicast ou multicast é mais eficiente?",
                    "resposta": "Multicast — o servidor envia um fluxo único que é replicado pela rede apenas nos pontos de ramificação. Unicast exigiria 50 fluxos separados, consumindo 50x a largura de banda."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Broadcast atravessa roteadores e chega a toda a Internet.'",
                    "correcao": "Errado. Broadcast é limitado ao domínio de broadcast (sub-rede local). Roteadores não encaminham broadcasts (255.255.255.255) para evitar tempestades de broadcast."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Multicast exige que o receptor se inscreva em um grupo.",
                    "resposta": "Certo. O receptor envia IGMP join para receber tráfego multicast."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual tipo de comunicação um servidor DNS raiz (como 8.8.8.8) tipicamente usa? A) Unicast; B) Broadcast; C) Anycast; D) Multicast.",
                    "resposta": "C"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-2-unidade-1-topico-3",
            "titulo": "Largura de banda, throughput, latência, jitter e perda de pacotes",
            "subtopicos": [
              {
                "id": "m2-u1-t3-s1",
                "titulo": "Métricas de desempenho de rede",
                "objetivoAprendizagem": "Aluno definirá e distinguirá largura de banda, throughput, latência, jitter e perda de pacotes.",
                "conteudo": "Largura de banda (bandwidth): capacidade máxima teórica do canal de comunicação (ex: 1 Gbps). Throughput: taxa real de transferência alcançada (sempre menor que a largura de banda). Latência (ping): tempo de ida (ou ida e volta) de um pacote — inclui propagação, transmissão, fila e processamento. Jitter: variação na latência entre pacotes consecutivos — crítico para VoIP e streaming. Perda de pacotes: porcentagem de pacotes que não chegam ao destino — pode indicar congestionamento, erro de transmissão ou firewall.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um link de 100 Mbps tem throughput de 85 Mbps. Explique a diferença.",
                    "resposta": "Largura de banda = 100 Mbps (capacidade teórica). Throughput = 85 Mbps (real). A diferença se deve a overhead de protocolo (cabeçalhos TCP/IP), colisões, congestionamento e qualidade do sinal."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma chamada VoIP está com áudio interrompido. O ping está estável (30 ms) mas o jitter é alto (50 ms). Qual a causa provável?",
                    "resposta": "Jitter alto — variação na latência. Solução: habilitar QoS (Quality of Service) para priorizar tráfego de voz, ou usar buffer de jitter no receptor."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Largura de banda e throughput são sinônimos.'",
                    "correcao": "Errado. Largura de banda é a capacidade teórica do canal; throughput é a taxa real medida. Throughput nunca excede largura de banda."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Jitter é a variação na latência entre pacotes consecutivos.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual métrica é mais crítica para VoIP? A) Largura de banda; B) Throughput; C) Jitter; D) Perda de pacotes.",
                    "resposta": "C (jitter alto causa áudio interrompido; perda >1% também é problemática, mas jitter é o principal)"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-2-unidade-1-topico-4",
            "titulo": "Meios de transmissão: cabeados e sem fio",
            "subtopicos": [
              {
                "id": "m2-u1-t4-s1",
                "titulo": "Cabos UTP, STP, fibra óptica, coaxial, Wi-Fi, rádio",
                "objetivoAprendizagem": "Aluno identificará os principais meios de transmissão e suas características.",
                "conteudo": "UTP (Unshielded Twisted Pair): par trançado sem blindagem — Cat5e (1 Gbps), Cat6 (10 Gbps até 55m), Cat6a (10 Gbps até 100m). Barato, fácil de instalar, suscetível a interferência. STP (Shielded Twisted Pair): com blindagem — usado em ambientes com alta interferência. Fibra óptica: transmissão por luz — monomodo (longa distância, laser) e multimodo (curta distância, LED). Alta largura de banda, imune a interferência eletromagnética, custo maior. Coaxial: usado em TV a cabo e redes antigas (10BASE2). Wi-Fi (IEEE 802.11): 2.4 GHz (maior alcance, mais interferência) e 5 GHz (menor alcance, mais rápido). Rádio: enlaces ponto-a-ponto (ex: 5 GHz outdoor), microondas, satélite.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual meio de transmissão usar para conectar dois prédios a 500m de distância?",
                    "resposta": "Fibra óptica monomodo — imune a interferência eletromagnética (raios), suporta 500m sem repetidor. UTP Cat6 limita-se a 100m."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma fábrica com máquinas elétricas de alta potência precisa de rede cabeada. UTP ou STP?",
                    "resposta": "STP — blindagem reduz interferência eletromagnética. Em casos extremos, fibra óptica é a solução definitiva (imune a EMI)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Fibra óptica é mais lenta que UTP porque a luz é mais lenta que eletricidade.'",
                    "correcao": "Errado. A velocidade da luz na fibra (~200.000 km/s) é comparável à velocidade do sinal elétrico no cobre. A vantagem da fibra é a largura de banda (múltiplas frequências de luz) e imunidade a interferência, não a velocidade do sinal."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) UTP Cat6 suporta 10 Gbps até 100 metros.",
                    "resposta": "Errado. Cat6 suporta 10 Gbps até 55m; Cat6a suporta 10 Gbps até 100m."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual meio é imune a interferência eletromagnética? A) UTP; B) STP; C) Fibra óptica; D) Coaxial.",
                    "resposta": "C"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
