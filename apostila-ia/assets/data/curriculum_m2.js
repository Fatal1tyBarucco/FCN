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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno definirá rede de computadores e identificará nós, enlaces, clientes e servidores, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno distinguirá LAN, WLAN, MAN, WAN, PAN e intranet/extranet, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará topologias estrela, anel, barra (bus), malha e híbrida, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno diferenciará comutação de circuitos e comutação de pacotes, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de alvo identificará os 4 tipos de comunicação em rede, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno definirá e distinguirá largura de banda, throughput, latência, jitter e perda de pacotes, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará os principais meios de transmissão e suas características, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-2-unidade-2",
        "titulo": "2.2 Modelos OSI e TCP/IP",
        "topicos": [
          {
            "id": "modulo-2-unidade-2-topico-1",
            "titulo": "Modelo OSI: camadas, funções, PDU e encapsulamento",
            "subtopicos": [
              {
                "id": "m2-u2-t1-s1",
                "titulo": "As sete camadas do modelo OSI e suas funções",
                "objetivoAprendizagem": "Aluno enumerará as sete camadas do modelo OSI em ordem, associará a cada uma sua função principal e identificará o tipo de PDU correspondente.",
                "conteudo": "O modelo OSI (Open Systems Interconnection), padronizado pela ISO, divide a comunicação em rede em sete camadas, da mais baixa (física) à mais alta (aplicação). Camada 1 - Física: transmissão de bits pelo meio (cabos, fibra, rádio), tensões, taxas, topologia física. PDU: bit. Camada 2 - Enlace de dados: entrega nó-a-nó no mesmo segmento, endereçamento físico (MAC), detecção de erros, controle de acesso ao meio (CSMA/CD, CSMA/CA). PDU: quadro (frame). Camada 3 - Rede: entrega fim-a-fim entre redes diferentes, roteamento, endereçamento lógico (IP). PDU: pacote. Camada 4 - Transporte: entrega processo-a-processo, confiabilidade (TCP) ou não (UDP), controle de fluxo e congestionamento. PDU: segmento (TCP) ou datagrama (UDP). Camada 5 - Sessão: estabelecimento, manutenção e encerramento de sessões entre aplicações. Camada 6 - Apresentação: tradução, criptografia, compressão, formato de dados. Camada 7 - Aplicação: interface com o usuário e serviços de rede (HTTP, SMTP, DNS, FTP). PDU nas camadas 5-7: dados (payload). A divisão em camadas permite que cada uma resolva um problema específico e que implementações diferentes coexistam.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em qual camada do modelo OSI atua um roteador ao decidir para onde enviar um pacote IP?",
                    "resposta": "Camada 3 (Rede) — o roteador examina o endereço IP de destino e consulta sua tabela de rotas para encaminhar o pacote para a próxima interface."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um switch de camada 2 (switch convencional) comuta tráfego dentro de uma VLAN. Em qual camada ele opera e qual PDU manipula?",
                    "resposta": "Camada 2 (Enlace) — manipula quadros Ethernet e toma decisão com base no endereço MAC de destino. Não examina o IP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'O modelo OSI é o protocolo usado pela Internet.'",
                    "correcao": "Errado. O modelo OSI é um modelo de referência conceitual. A Internet utiliza o modelo TCP/IP (quatro camadas) e seus protocolos (IP, TCP, UDP, HTTP etc.). O OSI serve para descrever e comparar funções, não é implementado como um todo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A camada de transporte do modelo OSI é responsável pelo roteamento entre redes.",
                    "resposta": "Errado. Roteamento entre redes é função da camada 3 (Rede). A camada 4 (Transporte) entrega processo-a-processo e controla confiabilidade/fluxo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual PDU corresponde à camada de enlace? A) Bit; B) Quadro; C) Pacote; D) Segmento.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno enumerará as sete camadas do modelo OSI em ordem, associará a cada uma sua função principal e identificará o tipo de PDU correspondente, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t1-s2",
                "titulo": "Encapsulamento e desencapsulamento",
                "objetivoAprendizagem": "Aluno explicará o processo de encapsulamento ao enviar dados e de desencapsulamento ao receber, identificando os cabeçalhos adicionados em cada camada.",
                "conteudo": "Encapsulamento é o processo pelo qual, ao enviar dados, cada camada adiciona seu próprio cabeçalho (e às vezes trailer) à unidade de dados recebida da camada superior, criando a PDU da camada. Ordem de envio (de cima para baixo): a aplicação gera os dados; a camada de apresentação/sessão os passa; a camada de transporte adiciona cabeçalho com portas e número de sequência (segmento); a camada de rede adiciona cabeçalho com endereços IP (pacote); a camada de enlace adiciona cabeçalho e trailer com MACs e FCS (quadro); a camada física converte em bits. Desencapsulamento é o inverso: ao receber, cada camada remove seu cabeçalho, processa as informações e entrega o payload à camada superior. A analogia do envelope: dados são a carta; cada camada coloca a carta em um envelope maior com endereçamento próprio. O encapsulamento permite que cada camada trate apenas sua parte e ignore os detalhes das outras, o que é a base da interoperabilidade.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Descrever, em ordem, os cabeçalhos adicionados a uma mensagem HTTP ao ser enviada por Ethernet.",
                    "resposta": "Dados HTTP -> cabeçalho TCP (porta 80/443, sequência) -> cabeçalho IP (IP origem/destino) -> cabeçalho+trailer Ethernet (MAC origem/destino, FCS) -> bits no meio físico."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um analista de rede captura um quadro Ethernet e vê dentro dele um pacote IP, dentro do qual há um segmento TCP, dentro do qual há uma requisição HTTP. Como isso é possível?",
                    "resposta": "É o encapsulamento em ação: cada camada empacota a PDU da camada superior. A captura mostra o quadro completo; ao desencapsular camada por camada, recuperam-se IP, TCP e HTTP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Encapsulamento significa comprimir os dados para economizar banda.'",
                    "correcao": "Errado. Encapsulamento é adicionar cabeçalhos de controle, não comprimir. Compressão é função da camada de apresentação (opcional) e não é o mesmo conceito."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) No desencapsulamento, a camada física entrega bits à camada de enlace, que remove o cabeçalho Ethernet e entrega o pacote IP à camada de rede.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual camada adiciona o endereço MAC de origem e destino? A) Física; B) Enlace; C) Rede; D) Transporte.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o processo de encapsulamento ao enviar dados e de desencapsulamento ao receber, identificando os cabeçalhos adicionados em cada camada, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t1-s3",
                "titulo": "Comunicação entre camadas e entre dispositivos",
                "objetivoAprendizagem": "Aluno distinguirá comunicação vertical (entre camadas do mesmo host) e horizontal (entre camadas equivalentes de hosts diferentes), e identificará quais dispositivos operam em quais camadas.",
                "conteudo": "Comunicação vertical (inter-camadas): ocorre dentro de um mesmo host, entre camadas adjacentes, via interfaces de serviço (ex.: a camada de transporte pede à camada de rede que envie um pacote). Comunicação horizontal (peer-to-peer lógica): ocorre entre camadas equivalentes de hosts diferentes, como se conversassem diretamente, embora fisicamente os dados desçam e subam pela pilha. Exemplo: a camada de transporte do host A 'conversa' logicamente com a camada de transporte do host B via cabeçalhos TCP. Dispositivos por camada: repetidor/hub atuam na camada 1; switch (camada 2) na enlace; roteador (camada 3) na rede; firewall pode atuar em múltiplas camadas (stateful inspection na 3/4, aplicação na 7). Gateway de aplicação na camada 7. A correspondência dispositivo-camada é didática: equipamentos reais frequentemente combinam funções (switch L3, roteador com NAT, firewall de aplicação).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um pacote IP viaja de um PC a outro passando por um switch e um roteador. Quais dispositivos leem quais cabeçalhos?",
                    "resposta": "Switch lê cabeçalho Ethernet (MAC) para encaminhar; roteador lê cabeçalho IP (IP) para rotear; o host destino lê tudo até a aplicação. Cada dispositivo processa apenas até sua camada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um firewall stateful inspeciona conexões TCP. Em quais camadas ele atua?",
                    "resposta": "Camadas 3 e 4 no mínimo (IP e TCP: endereços, portas, flags, estado da conexão); firewalls de aplicação (WAF) também na camada 7 (conteúdo HTTP)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Um switch convencional examina o endereço IP para encaminhar quadros.'",
                    "correcao": "Errado. Switch de camada 2 encaminha com base no MAC. Switch L3 (roteador disfarçado) examina IP, mas não é o switch convencional."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A comunicação horizontal entre camadas equivalentes de hosts diferentes ocorre fisicamente pelos cabeçalhos adicionados no encapsulamento.",
                    "resposta": "Certo — a 'conversa' lógica é materializada pelos cabeçalhos."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual dispositivo atua primariamente na camada de rede (3)? A) Hub; B) Switch L2; C) Roteador; D) Repetidor.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno distinguirá comunicação vertical (entre camadas do mesmo host) e horizontal (entre camadas equivalentes de hosts diferentes), e identificará quais dispositivos operam em quais camadas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-2-topico-2",
            "titulo": "Modelo TCP/IP: camadas e protocolos associados",
            "subtopicos": [
              {
                "id": "m2-u2-t2-s1",
                "titulo": "As quatro camadas do modelo TCP/IP",
                "objetivoAprendizagem": "Aluno enumerará as quatro camadas do modelo TCP/IP e associará a cada uma protocolos típicos.",
                "conteudo": "O modelo TCP/IP (DoD) tem quatro camadas: (1) Acesso à rede (Network Access/Link): Ethernet, Wi-Fi, ARP, PPP — equivale às camadas 1 e 2 do OSI. (2) Internet: IP (v4/v6), ICMP, ARP (às vezes), roteamento — equivale à camada 3 do OSI. (3) Transporte: TCP, UDP — equivale à camada 4 do OSI. (4) Aplicação: HTTP, HTTPS, DNS, SMTP, FTP, SSH, DHCP, TLS — equivale às camadas 5, 6 e 7 do OSI. Diferente do OSI, o TCP/IP não separa sessão e apresentação; essas funções são absorvidas pela aplicação ou por bibliotecas. O modelo TCP/IP é o que a Internet realmente usa; o OSI é referência didática.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em qual camada do TCP/IP opera o protocolo DNS?",
                    "resposta": "Camada de Aplicação — DNS é um protocolo de aplicação que usa UDP (e TCP em transferências de zona) na camada de transporte."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um administrador configura uma VLAN e um trunk 802.1Q. Em qual camada isso ocorre?",
                    "resposta": "Camada de Acesso à rede (Link) — VLANs são uma função de enlace (camada 2), embora o roteamento entre VLANs seja camada 3."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'O modelo TCP/IP tem sete camadas, como o OSI.'",
                    "correcao": "Errado. O TCP/IP tem quatro camadas. A confusão surge porque alguns materiais didáticos 'esticam' o TCP/IP para cinco camadas separando física e enlace — mas o modelo clássico DoD tem quatro."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) ICMP pertence à camada de Transporte do TCP/IP.",
                    "resposta": "Errado. ICMP pertence à camada Internet (rede), usada para diagnóstico e mensagens de erro de IP."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual camada do TCP/IP corresponde às camadas 5, 6 e 7 do OSI? A) Transporte; B) Internet; C) Aplicação; D) Acesso à rede.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno enumerará as quatro camadas do modelo TCP/IP e associará a cada uma protocolos típicos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t2-s2",
                "titulo": "Protocolos e serviços associados a cada camada",
                "objetivoAprendizagem": "Aluno associará protocolos e serviços às camadas do TCP/IP e explicará a diferença entre protocolo e serviço.",
                "conteudo": "Protocolo é um conjunto de regras que define formato, sequência e ações na comunicação (ex.: HTTP, TCP, IP). Serviço é a capacidade oferecida por uma camada à camada superior (ex.: serviço de entrega confiável do TCP à aplicação). Uma camada presta serviços à superior e usa serviços da inferior. Porta é um número (0-65535) que identifica o processo/aplicação dentro de um host (ex.: 80 para HTTP, 443 para HTTPS). Aplicação é o programa que usa a rede (navegador, servidor web). A distinção é cobrada em prova: protocolo ≠ serviço ≠ porta ≠ aplicação. Exemplo: o serviço de transferência de hipertexto é implementado pelo protocolo HTTP, que usa a porta 80 (ou 443 no HTTPS), e é consumido por uma aplicação (navegador/servidor).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Diferenciar protocolo, serviço, porta e aplicação no caso do e-mail.",
                    "resposta": "Aplicação: cliente de e-mail (Thunderbird). Protocolo: SMTP/IMAP. Serviço: entrega de mensagens / acesso a caixa. Porta: 25/587 (SMTP), 143/993 (IMAP)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Por que o mesmo servidor pode hospedar site (HTTP) e e-mail (SMTP) simultaneamente?",
                    "resposta": "Porque portas diferentes identificam serviços diferentes no mesmo IP: 80/443 para web, 25/587/110/143 para e-mail. O sistema operacional demultiplexa pelo número da porta."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Porta 443 é um protocolo.'",
                    "correcao": "Errado. 443 é um número de porta associado ao protocolo HTTPS. Protocolo é o conjunto de regras (HTTPS/TLS sobre HTTP); porta é o ponto de acesso."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Um mesmo protocolo pode usar portas diferentes em contextos diferentes.",
                    "resposta": "Certo — HTTP usa 80, HTTPS 443; DNS usa 53 UDP/TCP."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual item identifica o processo dentro do host? A) Endereço IP; B) Endereço MAC; C) Porta; D) Protocolo.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno associará protocolos e serviços às camadas do TCP/IP e explicará a diferença entre protocolo e serviço, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t2-s3",
                "titulo": "Limitações da correspondência entre camadas OSI e TCP/IP",
                "objetivoAprendizagem": "Aluno reconhecerá que a correspondência entre camadas OSI e TCP/IP é aproximada e identificará casos em que a equivalência não é direta.",
                "conteudo": "A correspondência OSI↔TCP/IP é didática e aproximada, não biunívoca. Pontos de atrito: (a) OSI tem 7 camadas, TCP/IP 4; as camadas 5, 6 e 7 do OSI colapsam na Aplicação do TCP/IP. (b) O protocolo IP não é 'puro' camada 3: ele depende de ARP (camada 2/3) e de ICMP (integrado ao IP). (c) TCP e UDP não correspondem exatamente à camada 4 do OSI em todos os aspectos (ex.: TCP inclui controle de congestionamento não previsto no OSI). (d) Protocolos como TLS (que protege HTTP) não têm camada OSI única: funciona entre transporte e aplicação. (e) Alguns protocolos (MPLS, VPN) operam 'entre' camadas. (f) O modelo OSI prevê serviços de sessão/presentação que raramente são implementados como camadas separadas. Conclusão: use a correspondência como ferramenta de organização, não como regra rígida de classificação de protocolos em prova — a banca pode cobrar a função, não a camada exata.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em qual camada 'encaixar' o protocolo TLS?",
                    "resposta": "Não há encaixe único: TLS opera acima do TCP (transporte) e abaixo da aplicação (HTTP). Muitos textos o colocam como 'camada de apresentação' (OSI 6) ou 'segurança na aplicação' — a função importa mais que a camada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma questão de concurso afirma que 'ARP é um protocolo da camada de rede'. Está correta?",
                    "resposta": "Depende da referência: no TCP/IP, ARP é associado à camada de acesso à rede/Internet; no OSI, costuma-se colocar na camada 2 (enlace) ou 3. A resposta correta depende do modelo adotado pela banca — leia o enunciado."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Todo protocolo pode ser classificado sem ambiguidade em uma única camada OSI.'",
                    "correcao": "Errado. Protocolos modernos (TLS, QUIC, MPLS) atravessam ou não se encaixam bem nas sete camadas. A classificação é ferramenta didática, não lei física."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A correspondência entre as camadas OSI e TCP/IP é exata e biunívoca.",
                    "resposta": "Errado — é aproximada e didática."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo não se encaixa confortavelmente em uma única camada OSI? A) HTTP; B) IP; C) TLS; D) Ethernet.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno reconhecerá que a correspondência entre camadas OSI e TCP/IP é aproximada e identificará casos em que a equivalência não é direta, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-2-topico-3",
            "titulo": "Comunicação completa cliente-servidor",
            "subtopicos": [
              {
                "id": "m2-u2-t3-s1",
                "titulo": "Exemplo de requisição HTTP completa",
                "objetivoAprendizagem": "Aluno descreverá, camada por camada, o fluxo completo de uma requisição HTTP de um navegador a um servidor web, incluindo resolução DNS, estabelecimento TCP e encapsulamento.",
                "conteudo": "Fluxo completo (simplificado): (1) O usuário digita www.exemplo.com no navegador. (2) O navegador consulta o cache DNS local; se não houver, envia consulta DNS (UDP 53) ao resolvedor configurado, que resolve para um IP (ex.: 192.0.2.10). (3) O navegador abre conexão TCP com o IP na porta 443 (HTTPS): three-way handshake (SYN, SYN-ACK, ACK). (4) Negociação TLS: troca de certificado, acordo de chaves, estabelecimento de canal cifrado. (5) O navegador envia a requisição HTTP GET / dentro do túnel TLS. (6) Cada camada encapsula: HTTP -> TLS -> TCP (segmento com portas 49152->443, sequência) -> IP (pacote com IPs) -> Ethernet (quadro com MACs) -> bits. (7) Na rede, roteadores encaminham pelo IP; switches pelo MAC. (8) O servidor desencapsula até a aplicação, processa e responde. (9) A resposta percorre o caminho inverso. (10) A conexão é encerrada (FIN) ou reutilizada (keep-alive). Esse fluxo combina DNS, TCP, TLS, HTTP e o modelo de camadas.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Listar as etapas de uma visita a https://www.exemplo.com desde a digitação até o recebimento da página.",
                    "resposta": "DNS (resolver IP) -> TCP handshake (porta 443) -> TLS handshake -> HTTP GET -> resposta HTTP -> renderização. Cada etapa pode falhar de forma independente."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um usuário acessa um site pelo IP diretamente (ex.: https://192.0.2.10). Qual etapa é eliminada e qual problema pode surgir?",
                    "resposta": "Elimina a resolução DNS. Problema: o certificado TLS é emitido para o nome de domínio, não para o IP; o navegador exibirá erro de certificado (hostname mismatch)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'HTTPS dispensa a resolução DNS porque a conexão é cifrada.'",
                    "correcao": "Errado. HTTPS cifra o conteúdo, mas ainda precisa resolver o nome para IP antes de estabelecer a conexão TCP/TLS. DNS ocorre antes e, sem DNSSEC, pode ser manipulado (DNS spoofing)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) No HTTPS, a negociação TLS ocorre após o estabelecimento da conexão TCP.",
                    "resposta": "Certo — TLS roda sobre TCP (exceto QUIC, que roda sobre UDP)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo resolve nomes de domínio em endereços IP? A) DHCP; B) DNS; C) ARP; D) ICMP.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno descreverá, camada por camada, o fluxo completo de uma requisição HTTP de um navegador a um servidor web, incluindo resolução DNS, estabelecimento TCP e encapsulamento, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t3-s2",
                "titulo": "Etapas e pontos de falha",
                "objetivoAprendizagem": "Aluno identificará, em um fluxo completo, em qual etapa ocorre cada função e quais sintomas indicam falha em cada etapa.",
                "conteudo": "Pontos de falha e sintomas: (DNS) 'não foi possível resolver o nome do host' / 'DNS_PROBE_FINISHED_NXDOMAIN' — falha de resolução. (TCP) 'connection timed out' / 'connection refused' — host inacessível ou porta fechada. (TLS) 'certificado inválido/expirado' / 'ERR_CERT_AUTHORITY_INVALID' — problema de certificado ou MITM. (HTTP) '404 Not Found', '500 Internal Server Error', '503 Service Unavailable' — aplicação/servidor. (Rede) 'destination net unreachable', 'TTL expired' — roteamento. (Enlace) sem link, cabo desconectado — camada física/enlace. O diagnóstico por camadas (unidade 2.5) explora isso. A chave é isolar a etapa que falhou antes de culpar a aplicação.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um site não carrega e o navegador mostra 'ERR_NAME_NOT_RESOLVED'. Qual etapa falhou?",
                    "resposta": "Resolução DNS — o nome não foi resolvido em IP. Verificar DNS, cache, conectividade e configuração de resolvedor."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O ping ao IP do servidor funciona, mas o navegador mostra 'connection refused' na porta 443. O que isso indica?",
                    "resposta": "Conectividade IP ok, mas não há serviço escutando na porta 443 (servidor web parado, firewall bloqueando ou porta diferente). Problema na camada de transporte/aplicação, não de rede."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se o ping funciona, o site deveria carregar normalmente.'",
                    "correcao": "Errado. Ping testa ICMP (camada de rede), não a aplicação. O servidor pode responder a ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Um erro HTTP 500 indica problema na camada de rede.",
                    "resposta": "Errado — 5xx é erro do servidor (aplicação), não de rede."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual mensagem indica falha de resolução de nome? A) connection refused; B) ERR_NAME_NOT_RESOLVED; C) 404 Not Found; D) TTL expired.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará, em um fluxo completo, em qual etapa ocorre cada função e quais sintomas indicam falha em cada etapa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t3-s3",
                "titulo": "Conexões persistentes, cache e otimização",
                "objetivoAprendizagem": "Aluno explicará HTTP keep-alive, cache e compressão e seu impacto no desempenho.",
                "conteudo": "HTTP/1.0 abria uma conexão TCP por requisição; HTTP/1.1 introduziu conexões persistentes (keep-alive) reutilizando a mesma conexão TCP para múltiplas requisições, reduzindo overhead de handshake. Cache HTTP: respostas armazenadas no cliente ou em proxies intermediários, controladas por cabeçalhos (Cache-Control, ETag, Last-Modified, Expires), reduzindo latência e carga no servidor. Compressão (gzip, brotli) reduz tamanho do payload. HTTP/2 multiplexa múltiplos streams em uma conexão; HTTP/3 (QUIC) usa UDP para reduzir latência de estabelecimento. Limitações: cache mal configurado pode servir conteúdo desatualizado; keep-alive consome recursos do servidor; compressão de conteúdo já comprimido (imagens) desperdiça CPU.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que HTTP/1.1 é mais rápido que HTTP/1.0 para páginas com muitos recursos?",
                    "resposta": "Por causa do keep-alive: reutiliza a conexão TCP, evitando múltiplos handshakes e slow starts."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um navegador recebe Cache-Control: max-age=3600. O que isso significa?",
                    "resposta": "A resposta pode ser reutilizada do cache por 3600 segundos sem revalidar no servidor."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Cache HTTP sempre serve o conteúdo mais recente.'",
                    "correcao": "Errado. Cache serve conteúdo dentro do TTL; se o servidor atualizou, o cliente pode ver versão antiga até expirar ou revalidar (ETag/Last-Modified)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) HTTP keep-alive reutiliza a conexão TCP para múltiplas requisições.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual cabeçalho controla o tempo de vida do cache? A) ETag; B) Cache-Control; C) Content-Type; D) Connection.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará HTTP keep-alive, cache e compressão e seu impacto no desempenho, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-2-unidade-3",
        "titulo": "2.3 Protocolos",
        "topicos": [
          {
            "id": "modulo-2-unidade-3-topico-1",
            "titulo": "IPv4, IPv6, TCP e UDP",
            "subtopicos": [
              {
                "id": "m2-u3-t1-s1",
                "titulo": "IPv4 e IPv6: finalidade e características",
                "objetivoAprendizagem": "Aluno comparará IPv4 e IPv6 quanto a tamanho de endereço, formato, tipos e motivação da transição.",
                "conteudo": "IPv4: endereços de 32 bits, notação decimal pontuada (ex.: 192.168.1.10), ~4,3 bilhões de endereços, esgotamento motivou a transição. Cabeçalho de tamanho fixo (20 bytes mínimo), com campos de fragmentação, TTL, protocolo, checksum. IPv6: endereços de 128 bits, notação hexadecimal com dois-pontos (ex.: 2001:db8::1), espaço praticamente inesgotável, cabeçalho simplificado (40 bytes fixo) sem fragmentação intermediária (apenas origem), sem checksum de cabeçalho (delegado a camadas superiores), com extensões opcionais. IPv6 incorpora IPsec nativamente (embora uso seja opcional), descoberta de vizinhos (NDP) substituindo ARP, e autoconfiguração stateless (SLAAC). A transição ocorre por pilha dupla (dual stack), túneis (6to4, Teredo) e tradução (NAT64/DNS64).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quantos endereços IPv4 e IPv6 existem aproximadamente?",
                    "resposta": "IPv4: 2^32 ≈ 4,3 bilhões. IPv6: 2^128 ≈ 3,4×10^38. A diferença de escala é a motivação central da transição."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um roteador de borda precisa suportar IPv4 e IPv6 simultaneamente. Qual estratégia usar?",
                    "resposta": "Pilha dupla (dual stack): o roteador processa ambos os protocolos em paralelo, com tabelas de rotas e interfaces separadas. É a estratégia preferida quando possível."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'IPv6 elimina a necessidade de NAT porque cada dispositivo terá IP público.'",
                    "correcao": "Parcialmente incorreto. IPv6 fornece endereços suficientes para endereçamento fim-a-fim, mas NAT pode ainda existir por política (ULA, NAT66) ou transição. A eliminação do NAT não é automática nem obrigatória."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O cabeçalho IPv6 tem tamanho fixo de 40 bytes e não inclui checksum.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo substitui o ARP no IPv6? A) ICMPv6; B) NDP; C) DHCPv6; D) SLAAC.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno comparará IPv4 e IPv6 quanto a tamanho de endereço, formato, tipos e motivação da transição, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t1-s2",
                "titulo": "TCP: confiabilidade, fluxo e congestionamento",
                "objetivoAprendizagem": "Aluno explicará os mecanismos de confiabilidade do TCP: sequência, ACK, retransmissão, controle de fluxo e de congestionamento, e three-way handshake.",
                "conteudo": "TCP (Transmission Control Protocol) é orientado à conexão e confiável. Mecanismos: (a) Three-way handshake: SYN (cliente), SYN-ACK (servidor), ACK (cliente) — estabelece conexão e sincroniza números de sequência. (b) Números de sequência e ACK: cada byte tem número; o receptor confirma o próximo byte esperado. (c) Retransmissão: se ACK não chega em tempo (RTO), retransmite. (d) Controle de fluxo: janela deslizante (rwnd) anunciada pelo receptor para não sobrecarregar. (e) Controle de congestionamento: slow start, congestion avoidance, fast retransmit/recovery, baseados em cwnd e detecção de perda. (f) Encerramento: FIN/ACK (four-way) ou RST. TCP garante entrega ordenada e sem duplicação, ao custo de latência e overhead. Usado por HTTP, HTTPS, SMTP, FTP, SSH.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Descrever o three-way handshake TCP entre cliente e servidor.",
                    "resposta": "Cliente envia SYN com ISN (Initial Sequence Number). Servidor responde SYN-ACK com seu ISN e ACK do ISN+1 do cliente. Cliente envia ACK confirmando ISN do servidor+1. Conexão estabelecida."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um download TCP está lento em uma rede congestionada. Quais mecanismos do TCP reagem?",
                    "resposta": "Controle de congestionamento: reduz cwnd (janela de congestionamento), entra em slow start ou congestion avoidance, e pode usar fast recovery. O throughput cai até a rede se recuperar."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'TCP garante entrega em tempo real sem perda.'",
                    "correcao": "Errado. TCP garante entrega confiável e ordenada, mas não em tempo real — retransmissões e controle de congestionamento introduzem latência variável. Para tempo real, usa-se UDP com tolerância a perdas (VoIP, streaming)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O three-way handshake do TCP usa as flags SYN, SYN-ACK e ACK.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual mecanismo evita que o remetente sobrecarregue o receptor? A) Controle de congestionamento; B) Controle de fluxo; C) Retransmissão; D) Fragmentação.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará os mecanismos de confiabilidade do TCP: sequência, ACK, retransmissão, controle de fluxo e de congestionamento, e three-way handshake, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t1-s3",
                "titulo": "UDP: datagramas sem conexão",
                "objetivoAprendizagem": "Aluno explicará as características do UDP, suas vantagens e limitações, e identificará aplicações típicas.",
                "conteudo": "UDP (User Datagram Protocol) é sem conexão e não confiável: envia datagramas independentes, sem handshake, sem ACK, sem retransmissão, sem controle de fluxo/congestionamento, sem ordenação. Cabeçalho mínimo (8 bytes: portas origem/destino, comprimento, checksum). Vantagens: baixa latência, overhead mínimo, suporta broadcast/multicast. Limitações: pode perder, duplicar ou reordenar pacotes; a aplicação deve tratar confiabilidade se necessário. Usado por DNS, DHCP, VoIP, streaming, jogos online, QUIC (que reimplementa confiabilidade sobre UDP). A escolha TCP vs UDP depende do requisito: confiabilidade/ordem (TCP) vs latência/broadcast (UDP).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que o DNS usa UDP na porta 53 para consultas simples?",
                    "resposta": "Porque a consulta é pequena e única; UDP tem menor latência e overhead. Se a resposta exceder 512 bytes (ou EDNS), usa TCP."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um jogo online de ação precisa enviar posição do jogador 20 vezes por segundo. TCP ou UDP?",
                    "resposta": "UDP — perda ocasional de um pacote de posição é preferível a esperar retransmissão (que causaria lag). A aplicação interpola posições."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'UDP é inútil porque não garante entrega.'",
                    "correcao": "Errado. UDP é essencial onde latência importa mais que confiabilidade (VoIP, DNS, streaming, jogos). A confiabilidade pode ser implementada na aplicação quando necessário."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O cabeçalho UDP tem 8 bytes e não inclui número de sequência.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo é sem conexão? A) TCP; B) UDP; C) HTTP; D) FTP.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará as características do UDP, suas vantagens e limitações, e identificará aplicações típicas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-3-topico-2",
            "titulo": "HTTP, HTTPS, DNS e DHCP",
            "subtopicos": [
              {
                "id": "m2-u3-t2-s1",
                "titulo": "HTTP e HTTPS: finalidade, fluxo e portas",
                "objetivoAprendizagem": "Aluno explicará o funcionamento do HTTP e HTTPS, métodos, códigos de status e a diferença entre os dois.",
                "conteudo": "HTTP (HyperText Transfer Protocol) é um protocolo de aplicação stateless (sem estado) baseado em requisição-resposta. Métodos: GET (obter), POST (enviar dados), PUT (atualizar), DELETE (remover), PATCH, HEAD, OPTIONS. Códigos de status: 1xx informativo, 2xx sucesso (200 OK), 3xx redirecionamento (301, 302), 4xx erro do cliente (400, 401, 403, 404), 5xx erro do servidor (500, 502, 503). HTTP usa TCP porta 80. HTTPS é HTTP sobre TLS: cifra o conteúdo e autentica o servidor via certificado, usando TCP porta 443. A versão HTTP/2 multiplexa streams e usa compressão de cabeçalhos; HTTP/3 roda sobre QUIC (UDP). Stateless significa que cada requisição é independente; sessões são mantidas por cookies/tokens.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Diferenciar uma requisição GET de uma POST.",
                    "resposta": "GET solicita um recurso (parâmetros na URL, cacheável, idempotente). POST envia dados ao servidor (corpo da requisição, não cacheável por padrão). Usar GET para alterar estado é erro de design."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um site retorna 301 ao acessar http://exemplo.com. O que isso significa?",
                    "resposta": "Redirecionamento permanente para outra URL (provavelmente https://exemplo.com). O cliente deve atualizar favoritos e links; buscadores transferem ranking."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'HTTPS garante que o servidor seja quem diz ser e que ninguém leia os dados, mas não impede alteração.'",
                    "correcao": "Errado. HTTPS (via TLS) também garante integridade: qualquer alteração no trânsito invalida a verificação de MAC, e a conexão é encerrada. Confidencialidade + integridade + autenticidade do servidor."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) HTTP é stateless: o servidor não mantém estado entre requisições por padrão.",
                    "resposta": "Certo — sessões usam cookies/tokens."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual código HTTP indica 'não encontrado'? A) 200; B) 301; C) 404; D) 500.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o funcionamento do HTTP e HTTPS, métodos, códigos de status e a diferença entre os dois, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t2-s2",
                "titulo": "DNS: resolução de nomes",
                "objetivoAprendizagem": "Aluno explicará o funcionamento do DNS, tipos de registros, hierarquia e resolução recursiva/iterativa.",
                "conteudo": "DNS (Domain Name System) traduz nomes de domínio (www.exemplo.com) em endereços IP. Hierarquia: raiz (.), TLD (.com, .br), domínio de segundo nível (exemplo.com), subdomínios (www). Servidores: raiz (13 lógicos, anycast), TLD, autoritativo. Resolução recursiva: o resolvedor recursivo (do ISP ou público como 8.8.8.8) consulta iterativamente raiz->TLD->autoritativo e retorna o IP ao cliente. Registros: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (servidor de nomes), TXT (texto/SPF/DKIM), SOA (autoridade), PTR (reverso). Cache com TTL. DNS usa UDP 53 (consultas) e TCP 53 (transferências de zona, respostas grandes). Segurança: DNSSEC (assinatura dos registros), DoH (DNS over HTTPS), DoT (DNS over TLS).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Resolver www.exemplo.com.br: quais servidores são consultados?",
                    "resposta": "Resolvedor recursivo -> servidor raiz -> servidor TLD (.br) -> servidor autoritativo de exemplo.com.br -> resposta com IP. O resolvedor cacheia conforme TTL."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa quer apontar mail.exemplo.com para o servidor de e-mail. Qual registro criar?",
                    "resposta": "Registro A (ou AAAA) para mail.exemplo.com apontando para o IP do servidor de e-mail, mais registro MX no domínio exemplo.com apontando para mail.exemplo.com com prioridade."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'DNS é um protocolo de transporte.'",
                    "correcao": "Errado. DNS é protocolo de aplicação que usa transporte (UDP/TCP 53). Ele traduz nomes em IPs; não transporta dados de aplicação."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O registro MX indica o servidor de e-mail responsável por um domínio.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual registro retorna um endereço IPv6? A) A; B) AAAA; C) CNAME; D) MX.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o funcionamento do DNS, tipos de registros, hierarquia e resolução recursiva/iterativa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t2-s3",
                "titulo": "DHCP: atribuição dinâmica de endereços",
                "objetivoAprendizagem": "Aluno explicará o processo DORA do DHCP e as informações entregues além do IP.",
                "conteudo": "DHCP (Dynamic Host Configuration Protocol) atribui automaticamente configuração de rede a hosts. Processo DORA: Discover (cliente broadcast), Offer (servidor oferece IP), Request (cliente solicita), Acknowledge (servidor confirma). Além do IP, entrega máscara, gateway padrão, DNS, domínio, tempo de concessão (lease). DHCP usa UDP: cliente 68, servidor 67. O lease tem tempo de vida; o cliente renova em T1 (50% do lease) e T2 (87,5%). DHCPv6 existe para IPv6; SLAAC (autoconfiguração stateless) é alternativa que usa NDP e não requer servidor DHCP. Riscos: servidor DHCP não autorizado (rogue DHCP) pode distribuir configuração maliciosa; DHCP snooping mitiga.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um notebook conecta ao Wi-Fi e recebe IP automaticamente. Descrever o DORA.",
                    "resposta": "Discover (broadcast UDP 67): 'preciso de IP'. Offer: servidor propõe 192.168.1.50. Request: cliente aceita. ACK: servidor confirma com máscara, gateway, DNS e lease."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um IP fixo (reserva DHCP) é necessário para uma impressora de rede. Como configurar?",
                    "resposta": "Criar reserva no servidor DHCP vinculando o MAC da impressora a um IP fixo. A impressora continua usando DHCP, mas sempre recebe o mesmo IP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'DHCP atribui apenas o endereço IP.'",
                    "correcao": "Errado. DHCP entrega IP, máscara, gateway, DNS, domínio e lease, entre outros parâmetros (opções DHCP)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) DORA significa Discover, Offer, Request, Acknowledge.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quais portas UDP o DHCP usa? A) 53 e 53; B) 67 (servidor) e 68 (cliente); C) 80 e 443; D) 20 e 21.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o processo DORA do DHCP e as informações entregues além do IP, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-3-topico-3",
            "titulo": "FTP, FTPS, SFTP, SSH e ICMP",
            "subtopicos": [
              {
                "id": "m2-u3-t3-s1",
                "titulo": "FTP, FTPS e SFTP",
                "objetivoAprendizagem": "Aluno diferenciará FTP, FTPS e SFTP quanto a protocolo base, portas, segurança e uso.",
                "conteudo": "FTP (File Transfer Protocol): protocolo de aplicação para transferência de arquivos, usa duas conexões TCP: controle (porta 21) e dados (porta 20 em modo ativo, ou porta efêmera em modo passivo). Não cifra credenciais nem dados — inseguro em redes não confiáveis. Modo ativo: servidor conecta de volta ao cliente (problema com NAT/firewall); modo passivo: cliente conecta ao servidor (preferido). FTPS (FTP over SSL/TLS): FTP com TLS sobre as mesmas portas (21 controle, dados em canal cifrado) — autenticação do servidor e cifragem. SFTP (SSH File Transfer Protocol): protocolo diferente, roda sobre SSH (porta 22), cifra tudo, autentica por chave ou senha. SFTP é preferido hoje; FTPS mantém compatibilidade com FTP. Não confundir FTPS (FTP+TLS) com SFTP (SSH).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que o FTP é considerado inseguro?",
                    "resposta": "Porque envia usuário, senha e dados em texto claro. Qualquer pessoa na rede pode capturar credenciais (sniffing)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um firewall bloqueia o modo ativo do FTP. Qual modo usar e por quê?",
                    "resposta": "Modo passivo — o cliente inicia a conexão de dados ao servidor, compatível com NAT/firewall que bloqueia conexões entrantes."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'FTPS e SFTP são o mesmo protocolo com nomes diferentes.'",
                    "correcao": "Errado. FTPS é FTP encapsulado em TLS (portas 21/20). SFTP é um subsistema do SSH (porta 22) com protocolo próprio. São implementações distintas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O FTP usa duas conexões TCP: controle (21) e dados (20/passivo).",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo de transferência roda sobre SSH (porta 22)? A) FTPS; B) SFTP; C) TFTP; D) SCP apenas.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno diferenciará FTP, FTPS e SFTP quanto a protocolo base, portas, segurança e uso, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t3-s2",
                "titulo": "SSH e ICMP",
                "objetivoAprendizagem": "Aluno explicará as funções do SSH e do ICMP, suas portas/protocolos e usos de diagnóstico.",
                "conteudo": "SSH (Secure Shell): protocolo de aplicação para acesso remoto seguro a sistemas, execução de comandos e túneis. Usa TCP porta 22. Autentica servidor (host key) e cliente (senha ou chave pública). Cifra toda a sessão. Substituiu Telnet (porta 23, texto claro). Permite port forwarding (túneis) e SFTP/SCP. ICMP (Internet Control Message Protocol): protocolo da camada de rede (não de transporte) para mensagens de controle e erro: echo request/reply (ping), destination unreachable, time exceeded (traceroute), redirect. ICMP não transporta dados de aplicação e não tem portas. É essencial para diagnóstico, mas pode ser bloqueado por firewalls (o que afeta ping/traceroute). ICMPv6 integra NDP no IPv6.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que SSH substituiu Telnet?",
                    "resposta": "Porque Telnet envia tudo em texto claro (credenciais capturáveis). SSH cifra a sessão e autentica o servidor, prevenindo MITM."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um administrador precisa acessar um servidor remoto de forma segura e transferir arquivos. Qual solução?",
                    "resposta": "SSH para acesso remoto (porta 22) e SFTP/SCP para transferência — tudo cifrado, autenticação por chave pública recomendada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'ICMP é um protocolo de transporte como TCP e UDP.'",
                    "correcao": "Errado. ICMP é protocolo de controle da camada de rede (IP), sem portas e sem entrega de dados de aplicação. TCP/UDP são transporte."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) ICMP não possui números de porta.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual porta padrão do SSH? A) 21; B) 22; C) 23; D) 25.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará as funções do SSH e do ICMP, suas portas/protocolos e usos de diagnóstico, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t3-s3",
                "titulo": "ARP e Neighbor Discovery",
                "objetivoAprendizagem": "Aluno explicará a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing).",
                "conteudo": "ARP (Address Resolution Protocol): resolve endereço IP em endereço MAC na mesma rede. O host envia ARP request (broadcast) 'quem tem o IP X?'; o dono responde com ARP reply (unicast) contendo seu MAC. O resultado é cacheado (ARP cache) com TTL. ARP é stateless e não autenticado — vulnerável a ARP spoofing/poisoning (atacante responde falsamente para interceptar tráfego / MITM). Mitigações: Dynamic ARP Inspection (DAI), VLANs, monitoramento. No IPv6, ARP é substituído pelo NDP (Neighbor Discovery Protocol), que usa ICMPv6: Neighbor Solicitation (multicast) e Neighbor Advertisement. NDP também faz descoberta de roteadores (Router Solicitation/Advertisement) e autoconfiguração (SLAAC). NDP usa multicast (não broadcast) e tem opções de segurança (SEND), mas também pode ser atacado (NDP spoofing).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um PC precisa enviar pacote para 192.168.1.5 na mesma LAN. Como obtém o MAC?",
                    "resposta": "Envia ARP request broadcast: 'quem tem 192.168.1.5?'. O host com esse IP responde com seu MAC. O PC cacheia o par IP-MAC."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um atacante envia ARP reply falsos associando o IP do gateway ao seu MAC. Qual ataque e qual impacto?",
                    "resposta": "ARP spoofing/poisoning — tráfego destinado ao gateway é desviado ao atacante (MITM). Mitigar com DAI, segmentação e monitoramento de ARP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'ARP funciona entre redes diferentes.'",
                    "correcao": "Errado. ARP resolve apenas na mesma rede (broadcast domain). Para alcançar outra rede, o host envia ao gateway padrão (cujo MAC é obtido por ARP)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) No IPv6, o ARP é substituído pelo NDP.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo resolve IP em MAC no IPv4? A) DNS; B) ARP; C) ICMP; D) DHCP.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing), evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-3-topico-4",
            "titulo": "SMTP, POP3, IMAP, TLS, NAT/PAT, proxy e VPN",
            "subtopicos": [
              {
                "id": "m2-u3-t4-s1",
                "titulo": "SMTP, POP3 e IMAP no contexto de redes",
                "objetivoAprendizagem": "Aluno diferenciará SMTP, POP3 e IMAP quanto a função, portas e segurança.",
                "conteudo": "SMTP (Simple Mail Transfer Protocol): envia e retransmite e-mail entre servidores/clientes. Portas: 25 (relé entre servidores), 587 (submissão autenticada pelo cliente — preferido), 465 (SMTPS, TLS implícito, legado mas usado). POP3 (Post Office Protocol v3): baixa e-mail do servidor para o cliente, geralmente removendo do servidor. Portas: 110 (texto), 995 (POP3S/TLS). IMAP (Internet Message Access Protocol): sincroniza e-mail entre cliente e servidor, mantendo cópia no servidor, suporta pastas. Portas: 143 (texto), 993 (IMAPS/TLS). SMTP é 'empurrar' (push); POP3/IMAP são 'puxar' (pull). Segurança: usar TLS (implícito, porta segura) ou STARTTLS (upgrade na porta texto). Autenticação e SPF/DKIM/DMARC mitigam spoofing.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um usuário quer acessar o mesmo e-mail no celular e no desktop. POP3 ou IMAP?",
                    "resposta": "IMAP — mantém cópia no servidor e sincroniza estado (lido/não lido, pastas) entre clientes. POP3 baixaria e removeria, causando inconsistência."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Qual porta usar para envio autenticado de e-mail por um cliente?",
                    "resposta": "587 (SMTP submission com STARTTLS) — preferida. 465 (SMTPS) também usado. Evitar 25 para clientes (bloqueado por muitos ISPs)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'POP3S na porta 995 e IMAPS na porta 993 são a mesma coisa.'",
                    "correcao": "Errado. São protocolos diferentes (POP3 vs IMAP) com comportamentos distintos (download vs sincronização), apenas compartilham o uso de TLS implícito."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) SMTP usa a porta 25 para relé entre servidores e 587 para submissão autenticada.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo mantém o e-mail no servidor e sincroniza pastas? A) SMTP; B) POP3; C) IMAP; D) FTP.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno diferenciará SMTP, POP3 e IMAP quanto a função, portas e segurança, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t4-s2",
                "titulo": "TLS: segurança na camada de transporte",
                "objetivoAprendizagem": "Aluno explicará a função do TLS, handshake, certificados e a diferença entre TLS implícito e STARTTLS.",
                "conteudo": "TLS (Transport Layer Security) fornece confidencialidade, integridade e autenticidade (do servidor, e opcionalmente do cliente) sobre TCP. Handshake TLS 1.3: ClientHello (versões, cipher suites, key share), ServerHello + certificado + Finished, cliente verifica certificado e envia Finished, chaves de sessão derivadas. Certificados X.509 vinculam chave pública a identidade, emitidos por CA (Certificate Authority) confiável. TLS implícito: a conexão já começa cifrada na porta segura (443, 993, 995, 465). STARTTLS: começa em texto na porta padrão e faz upgrade para TLS via comando STARTTLS (587, 143, 110, 25). TLS 1.3 remove cifras fracas e reduz round-trips. Limitações: TLS protege o transporte, não o endpoint; certificados expirados/inválidos geram alertas; MITM com CA comprometida possível.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Diferenciar TLS implícito de STARTTLS.",
                    "resposta": "TLS implícito: porta dedicada já cifrada (443). STARTTLS: porta padrão em texto, upgrade via comando (587 com STARTTLS). Ambos resultam em canal cifrado, mas a negociação difere."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um servidor SMTP na porta 587 anuncia STARTTLS. O que o cliente deve fazer?",
                    "resposta": "Enviar comando STARTTLS, verificar o certificado do servidor e, se válido, negociar TLS. Se falhar, não enviar credenciais em texto."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'TLS garante segurança fim-a-fim incluindo o servidor e o cliente.'",
                    "correcao": "Errado. TLS protege o canal entre cliente e servidor; não protege o endpoint (se o servidor for comprometido, os dados são legíveis lá). Autenticação de cliente é opcional e rara."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) TLS 1.3 reduz o número de round-trips no handshake em relação ao TLS 1.2.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual função o certificado X.509 cumpre? A) Cifrar dados; B) Vincular chave pública a identidade; C) Gerar chaves simétricas; D) Comprimir tráfego.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará a função do TLS, handshake, certificados e a diferença entre TLS implícito e STARTTLS, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t4-s3",
                "titulo": "NAT, PAT, proxy e VPN",
                "objetivoAprendizagem": "Aluno explicará NAT/PAT, proxy e VPN, suas funções, tipos e limitações.",
                "conteudo": "NAT (Network Address Translation): traduz endereços IP privados em públicos (e vice-versa) no roteador de borda, permitindo que muitos hosts internos compartilhem um (ou poucos) IPs públicos. PAT (Port Address Translation / NAT overload): traduz também portas, permitindo múltiplas conexões simultâneas com um único IP público — é o NAT típico de redes domésticas. Tipos: estático (1:1), dinâmico (pool), PAT (muitos:1). Limitações: quebra o fim-a-fim (dificulta servidores internos, P2P, VoIP), complica protocolos com IP embutido, consome tabela de estado. Proxy: intermediário que faz requisições em nome do cliente — pode ser transparente (sem configuração do cliente) ou explícito. Funções: cache, filtragem, anonimização, controle de acesso, logging. Proxy reverso: fica em frente ao servidor, distribui carga e protege origem. VPN (Virtual Private Network): cria túnel cifrado sobre rede pública, estendendo a rede privada. Tipos: site-to-site (conecta redes) e remote access (cliente individual). Protocolos: IPsec (ESP/AH, IKE), OpenVPN, WireGuard, SSL VPN. Limitações: overhead, latência, ponto único de falha, gestão de chaves.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Uma residência com 10 dispositivos acessa a Internet com um único IP público. Como é possível?",
                    "resposta": "PAT (NAT overload): o roteador traduz IP:porta internos para IP público:porta única, mantendo tabela de estado para demultiplexar respostas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa quer que funcionários remotos acessem sistemas internos com segurança. Qual solução?",
                    "resposta": "VPN de acesso remoto (IPsec/SSL/WireGuard) com autenticação forte (MFA), túnel cifrado e split tunneling conforme política."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'NAT aumenta a segurança como um firewall.'",
                    "correcao": "Parcial. NAT oculta IPs internos (segurança por obscuridade) mas não filtra tráfego por política. Não substitui firewall; NAT + firewall é a combinação típica."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) PAT permite que múltiplos hosts internos compartilhem um único IP público usando portas distintas.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual componente fica em frente ao servidor para distribuir carga e ocultar a origem? A) Proxy forward; B) Proxy reverso; C) NAT estático; D) VPN site-to-site.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará NAT/PAT, proxy e VPN, suas funções, tipos e limitações, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-2-unidade-4",
        "titulo": "2.4 Endereçamento e sub-redes",
        "topicos": [
          {
            "id": "modulo-2-unidade-4-topico-1",
            "titulo": "Estrutura IPv4 e tipos de endereço",
            "subtopicos": [
              {
                "id": "m2-u4-t1-s1",
                "titulo": "Estrutura de um endereço IPv4",
                "objetivoAprendizagem": "Aluno descreverá a estrutura de 32 bits do IPv4, a divisão em octetos e a separação entre parte de rede e parte de host.",
                "conteudo": "Um endereço IPv4 tem 32 bits, representados como quatro octetos decimais separados por ponto (ex.: 192.168.1.10). Cada octeto vai de 0 a 255. A máscara de sub-rede divide o endereço em parte de rede (prefixo) e parte de host. A classe (histórica) determinava o tamanho: Classe A (/8), B (/16), C (/24). Hoje usa-se CIDR (sem classes). Endereços especiais: 0.0.0.0 (rota padrão/origem), 255.255.255.255 (broadcast limitado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local/APIPA), 224.0.0.0/4 (multicast), 240.0.0.0/4 (reservado).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quantos bits tem um endereço IPv4 e como se representa?",
                    "resposta": "32 bits, em 4 octetos decimais (0-255), ex.: 10.0.0.1."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dado o IP 172.16.5.20 com máscara 255.255.0.0, qual a parte de rede?",
                    "resposta": "Rede: 172.16.0.0 (primeiros 16 bits). Host: 5.20 (últimos 16 bits). Prefixo /16."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Endereços de classe A são sempre públicos.'",
                    "correcao": "Errado. A classe define tamanho do prefixo, não publicidade. 10.0.0.0/8 é classe A e é privado (RFC 1918)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 127.0.0.1 é um endereço de loopback.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual faixa é link-local (APIPA)? A) 10.0.0.0/8; B) 172.16.0.0/12; C) 169.254.0.0/16; D) 192.168.0.0/16.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno descreverá a estrutura de 32 bits do IPv4, a divisão em octetos e a separação entre parte de rede e parte de host, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t1-s2",
                "titulo": "Endereços públicos, privados, loopback e link-local",
                "objetivoAprendizagem": "Aluno classificará endereços IPv4 em públicos/privados/loopback/link-local e explicará o uso de cada um.",
                "conteudo": "Privados (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — não roteáveis na Internet pública; usados em LANs e traduzidos por NAT. Loopback (127.0.0.0/8, tipicamente 127.0.0.1): comunicação interna ao próprio host, não sai da máquina. Link-local (169.254.0.0/16): autoatribuído quando não há DHCP (APIPA); comunicação apenas no link local. Públicos: todos os demais (roteáveis na Internet). Multicast (224.0.0.0/4): comunicação um-para-muitos. Broadcast: endereço de broadcast da sub-rede (todos os bits de host em 1) e 255.255.255.255 (limitado).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classificar 8.8.8.8, 192.168.0.1, 127.0.0.1 e 169.254.1.5.",
                    "resposta": "8.8.8.8 público; 192.168.0.1 privado; 127.0.0.1 loopback; 169.254.1.5 link-local."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um notebook não obtém IP do DHCP e autoatribui 169.254.x.x. Consegue acessar a Internet?",
                    "resposta": "Não — link-local não é roteável. Indica falha de DHCP. Verificar cabo/Wi-Fi, servidor DHCP e configuração."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Endereços 172.16.0.0/12 são públicos porque começam com 172.'",
                    "correcao": "Errado. 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) é privado. Apenas parte dessa faixa é privada; o resto é público."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16 são faixas privadas.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual endereço um host usa para falar consigo mesmo? A) 0.0.0.0; B) 127.0.0.1; C) 255.255.255.255; D) 169.254.0.1.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno classificará endereços IPv4 em públicos/privados/loopback/link-local e explicará o uso de cada um, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t1-s3",
                "titulo": "Máscaras de sub-rede",
                "objetivoAprendizagem": "Aluno explicará o papel da máscara e converterá entre notação decimal e prefixo CIDR.",
                "conteudo": "A máscara de sub-rede é um número de 32 bits com 1s contínuos na parte de rede e 0s na parte de host (ex.: 255.255.255.0 = /24). Ela define onde termina a rede e começa o host. Máscaras não contíguas (ex.: 255.0.255.0) são inválidas em IPv4 clássico. Notação decimal pontuada (255.255.255.0) e CIDR (/24) são equivalentes. A máscara determina o tamanho da sub-rede: /24 = 256 endereços (254 hosts), /16 = 65536, /30 = 4 (2 hosts).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Converter 255.255.255.0 para CIDR.",
                    "resposta": "/24 (24 bits em 1 = 255.255.255.0)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dado /27, qual a máscara decimal?",
                    "resposta": "255.255.255.224 (27 bits = 255.255.255.11100000 = 224)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A máscara 255.255.255.128 (/25) permite 128 hosts.'",
                    "correcao": "Errado. /25 tem 7 bits de host = 128 endereços, dos quais 2 são reservados (rede e broadcast), restando 126 hosts."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A máscara deve ter 1s contíguos à esquerda.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual máscara corresponde a /30? A) 255.255.255.240; B) 255.255.255.252; C) 255.255.255.248; D) 255.255.255.224.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o papel da máscara e converterá entre notação decimal e prefixo CIDR, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-4-topico-2",
            "titulo": "CIDR, endereço de rede e broadcast, cálculos",
            "subtopicos": [
              {
                "id": "m2-u4-t2-s1",
                "titulo": "Notação CIDR e cálculo de endereço de rede/broadcast",
                "objetivoAprendizagem": "Aluno calculará endereço de rede e broadcast a partir de IP e prefixo, usando operação AND.",
                "conteudo": "CIDR (Classless Inter-Domain Routing): notação IP/prefixo (ex.: 192.168.1.0/24). Endereço de rede = IP AND máscara (bit a bit). Broadcast = endereço de rede com todos os bits de host em 1. Hosts válidos = rede+1 até broadcast-1. Exemplo: IP 192.168.1.130/25. Máscara /25 = 255.255.255.128. Rede = 192.168.1.128 (130 AND 128 = 128). Broadcast = 192.168.1.255. Hosts: 192.168.1.129 a 192.168.1.254 (126 hosts).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular rede e broadcast de 10.0.5.200/26.",
                    "resposta": "Máscara /26 = 255.255.255.192. Rede = 10.0.5.192 (200 AND 192 = 192). Broadcast = 10.0.5.255. Hosts: 10.0.5.193 a 10.0.5.254 (62 hosts)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Dado 172.16.30.5/20, determinar a sub-rede e o broadcast.",
                    "resposta": "Máscara /20 = 255.255.240.0. Rede = 172.16.16.0 (30 AND 240 = 16 no terceiro octeto). Broadcast = 172.16.31.255. Hosts: 172.16.16.1 a 172.16.31.254."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'O endereço de rede pode ser atribuído a um host.'",
                    "correcao": "Errado. O endereço de rede (todos os bits de host em 0) identifica a sub-rede e não pode ser usado por host. O broadcast (todos em 1) também não."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em /24, o broadcast é o último endereço da sub-rede.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quantos hosts utilizáveis em /26? A) 64; B) 62; C) 30; D) 32.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno calculará endereço de rede e broadcast a partir de IP e prefixo, usando operação AND, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t2-s2",
                "titulo": "Quantidade de sub-redes e hosts",
                "objetivoAprendizagem": "Aluno calculará número de sub-redes e hosts a partir de um prefixo dado e de um prefixo original.",
                "conteudo": "Fórmulas: número de sub-redes = 2^(bits emprestados) (quando se divide uma rede original). Número de hosts por sub-rede = 2^(bits de host) - 2 (subtrai rede e broadcast). Bits de host = 32 - prefixo. Exemplo: rede 192.168.0.0/16 dividida em /24: bits emprestados = 8, sub-redes = 2^8 = 256, hosts por sub-rede = 2^8 - 2 = 254. Para /30: hosts = 2^2 - 2 = 2 (ideal para links ponto-a-ponto). Para /31 (RFC 3021): 2 hosts sem rede/broadcast (usado em links ponto-a-ponto). /32: um único host (loopback/rota).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quantas sub-redes /28 cabem em 10.0.0.0/24 e quantos hosts cada uma tem?",
                    "resposta": "Bits emprestados = 4, sub-redes = 16. Hosts por sub-rede = 2^4 - 2 = 14."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um provedor recebe 200.0.0.0/24 e precisa criar 8 sub-redes iguais. Qual prefixo usar?",
                    "resposta": "Precisa de 8 sub-redes = 2^3, empresta 3 bits. Prefixo = 24+3 = /27. Cada sub-rede tem 2^5 - 2 = 30 hosts."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em /31 há 0 hosts utilizáveis.'",
                    "correcao": "Errado em contexto moderno. /31 (RFC 3021) permite 2 hosts em links ponto-a-ponto, sem endereços de rede/broadcast. Em /30 são 2 hosts com rede/broadcast."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A fórmula de hosts utilizáveis é 2^(bits de host) - 2.",
                    "resposta": "Certo (exceto /31 e /32, casos especiais)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quantos hosts utilizáveis em /27? A) 32; B) 30; C) 14; D) 62.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno calculará número de sub-redes e hosts a partir de um prefixo dado e de um prefixo original, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t2-s3",
                "titulo": "Intervalos de hosts e validação",
                "objetivoAprendizagem": "Aluno determinará o intervalo de hosts válidos de uma sub-rede e validará se um IP pertence a ela.",
                "conteudo": "Para uma sub-rede, o intervalo de hosts válidos vai do endereço de rede +1 até o broadcast -1. Para verificar se um IP pertence a uma sub-rede: calcular a rede do IP com a máscara e comparar com a rede da sub-rede. Pegadinhas comuns: IP com host bits todos 0 (é rede, não host); IP com host bits todos 1 (é broadcast); máscara inconsistente; confundir /n com número de hosts. Sempre recalcular a rede em vez de confiar no 'aparência' do IP.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Dado 192.168.10.64/26, listar rede, broadcast e hosts.",
                    "resposta": "Rede 192.168.10.64, broadcast 192.168.10.127, hosts 192.168.10.65 a 192.168.10.126."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "O IP 10.0.0.127/25 pertence à rede 10.0.0.0/25 ou à 10.0.0.128/25?",
                    "resposta": "10.0.0.127/25: rede = 10.0.0.0 (127 AND 128 = 0 no último bit do prefixo). Pertence à 10.0.0.0/25. É o último host dessa sub-rede (broadcast é 10.0.0.127? não — broadcast de /25 é .127? Sim: rede .0, broadcast .127). Portanto 10.0.0.127 é o broadcast, não host válido."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: '192.168.1.255 é sempre broadcast global.'",
                    "correcao": "Errado. 192.168.1.255 é broadcast apenas da sub-rede 192.168.1.0/24. Em 192.168.0.0/16, 192.168.1.255 é um host válido."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em 10.0.0.0/8, o endereço 10.255.255.255 é broadcast.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é o broadcast de 172.16.5.0/23? A) 172.16.5.255; B) 172.16.6.255; C) 172.16.7.255; D) 172.16.4.255.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno determinará o intervalo de hosts válidos de uma sub-rede e validará se um IP pertence a ela, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-4-topico-3",
            "titulo": "VLSM e sumarização de rotas",
            "subtopicos": [
              {
                "id": "m2-u4-t3-s1",
                "titulo": "VLSM: máscara de comprimento variável",
                "objetivoAprendizagem": "Aluno explicará VLSM e aplicará divisão de sub-redes de tamanhos diferentes a partir de um bloco original.",
                "conteudo": "VLSM (Variable Length Subnet Mask) permite dividir uma rede em sub-redes de tamanhos diferentes, otimizando o uso de endereços. Estratégia: alocar primeiro as sub-redes maiores (mais hosts), depois as menores; usar prefixos adequados a cada necessidade (ex.: /30 para links ponto-a-ponto, /26 para LAN de 60 hosts). Exemplo: bloco 192.168.10.0/24. Necessidades: LAN A 50 hosts -> /26 (62 hosts); LAN B 25 hosts -> /27 (30 hosts); link WAN -> /30 (2 hosts). Alocar LAN A: 192.168.10.0/26 (0-63). LAN B: 192.168.10.64/27 (64-95). WAN: 192.168.10.96/30 (96-99). Resto livre. VLSM exige roteamento classless (CIDR) — protocolos antigos (RIPv1) não suportam.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que VLSM é melhor que divisão em sub-redes de tamanho fixo?",
                    "resposta": "Porque evita desperdício: uma sub-rede /24 fixa para um link ponto-a-ponto desperdiça 252 endereços; /30 usa apenas 4."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "A partir de 10.0.0.0/24, alocar sub-redes para: site A (100 hosts), site B (50 hosts), link (2 hosts).",
                    "resposta": "Site A: /25 (126 hosts) -> 10.0.0.0/25. Site B: /26 (62 hosts) -> 10.0.0.128/26. Link: /30 -> 10.0.0.192/30. (Verificar alinhamento dos blocos.)"
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'VLSM pode ser usado com RIPv1.'",
                    "correcao": "Errado. RIPv1 é classful e não carrega máscara; VLSM exige protocolos classless (RIPv2, OSPF, EIGRP, BGP) ou rotas estáticas."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em VLSM, deve-se alocar primeiro as sub-redes maiores.",
                    "resposta": "Certo — evita fragmentação e sobreposição."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prefixo atende a 14 hosts com folga mínima? A) /28; B) /27; C) /26; D) /30.",
                    "resposta": "A (14 hosts cabem em /28 com 14 utilizáveis)"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará VLSM e aplicará divisão de sub-redes de tamanhos diferentes a partir de um bloco original, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t3-s2",
                "titulo": "Sumarização de rotas (agregação)",
                "objetivoAprendizagem": "Aluno explicará sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos.",
                "conteudo": "Sumarização (route aggregation/supernetting) combina múltiplas rotas contíguas em uma rota mais curta (prefixo menor), reduzindo tabelas de roteamento. Requer blocos contíguos alinhados (boundary). Exemplo: rotas 192.168.0.0/24, 192.168.1.0/24, ..., 192.168.7.0/24 agregam em 192.168.0.0/21 (8 sub-redes /24). A agregação só é válida se todos os blocos pertencerem ao agregado e estiverem alocados. Benefícios: tabelas menores, menos atualizações, estabilidade. Risco: agregação excessiva pode anunciar blocos não alocados (black hole).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Agregue as redes 172.16.0.0/24 a 172.16.3.0/24.",
                    "resposta": "172.16.0.0/22 (4 sub-redes /24; prefixo 22)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um roteador tem 16 rotas /24 contíguas (10.10.0.0/24 ... 10.10.15.0/24). Qual rota agregada?",
                    "resposta": "10.10.0.0/20 (16 sub-redes /24 = 2^4, prefixo 24-4=20)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Qualquer conjunto de rotas pode ser agregado.'",
                    "correcao": "Errado. A agregação exige contiguidade e alinhamento ao boundary do prefixo agregado. Rotas não contíguas não agregam sem perda/overlap."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Sumarização reduz o tamanho da tabela de rotas.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quantas rotas /24 cabem em um /20? A) 4; B) 8; C) 16; D) 32.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t3-s3",
                "titulo": "Planejamento de endereçamento e roteamento classless",
                "objetivoAprendizagem": "Aluno explicará boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM.",
                "conteudo": "Planejamento de endereçamento: documentar blocos por site/função, reservar espaço para crescimento, usar VLSM para otimizar, manter sumarização nas bordas. Roteamento classless (CIDR): protocolos que carregam a máscara junto com o prefixo (RIPv2, OSPF, EIGRP, BGP, IS-IS) — necessários para VLSM e sumarização. Roteamento classful (RIPv1, IGRP) assume máscara pela classe e não suporta VLSM/sumarização. Boas práticas: alocar blocos contíguos para facilitar agregação; evitar sobreposição; reservar blocos para links ponto-a-ponto (/30 ou /31); usar /64 em IPv6 por sub-rede (SLAAC). Limitações: planejamento ruim leva a renumeração custosa; agregação excessiva pode anunciar blocos não alocados.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Por que documentar o plano de endereçamento é importante?",
                    "resposta": "Para evitar sobreposição, facilitar sumarização e permitir crescimento sem renumeração."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma empresa com 3 filiais (50, 30 e 10 hosts) e 2 links WAN. Como planejar a partir de 10.0.0.0/22?",
                    "resposta": "Filiais: /26 (62 hosts) para 50, /27 (30) para 30, /28 (14) para 10; links: /30 cada. Alocar em ordem decrescente para evitar fragmentação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'RIPv1 suporta VLSM porque é um protocolo de roteamento.'",
                    "correcao": "Errado. RIPv1 é classful e não carrega máscara; não suporta VLSM nem sumarização. Usar RIPv2 ou OSPF."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Roteamento classless é necessário para VLSM.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo NÃO suporta VLSM? A) OSPF; B) RIPv2; C) RIPv1; D) BGP.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-4-topico-4",
            "titulo": "IPv6: representação, abreviação e tipos",
            "subtopicos": [
              {
                "id": "m2-u4-t4-s1",
                "titulo": "Representação e abreviação de endereços IPv6",
                "objetivoAprendizagem": "Aluno representará e abreviará endereços IPv6 corretamente, aplicando as regras de compressão.",
                "conteudo": "IPv6: 128 bits = 8 grupos de 16 bits em hexadecimal, separados por dois-pontos (ex.: 2001:0db8:0000:0000:0000:ff00:0042:8329). Regras de abreviação: (1) omitir zeros à esquerda em cada grupo (0db8 -> db8, 0042 -> 42); (2) substituir um único bloco de grupos consecutivos todos zero por :: (apenas uma vez por endereço). Exemplo abreviado: 2001:db8::ff00:42:8329. :: não pode ser usado mais de uma vez (ambiguidade). Endereço loopback: ::1. Endereço não especificado: ::.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Abreviar 2001:0db8:0000:0000:0000:0000:0000:0001.",
                    "resposta": "2001:db8::1 (zeros à esquerda removidos e bloco de zeros comprimido com ::)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Expandir ::1 para a forma completa.",
                    "resposta": "0000:0000:0000:0000:0000:0000:0000:0001 (loopback)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Pode-se usar :: mais de uma vez no mesmo endereço para comprimir múltiplos blocos de zeros.'",
                    "correcao": "Errado. :: pode ser usado apenas uma vez por endereço; caso contrário, o endereço seria ambíguo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 2001:db8::1 e 2001:0db8:0000:...:0001 representam o mesmo endereço.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é o endereço de loopback em IPv6? A) ::; B) ::1; C) fe80::1; D) ff02::1.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno representará e abreviará endereços IPv6 corretamente, aplicando as regras de compressão, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t4-s2",
                "titulo": "Prefixos e tipos de endereço IPv6",
                "objetivoAprendizagem": "Aluno identificará os principais tipos de endereço IPv6 (global unicast, link-local, unique local, multicast, loopback) e seus prefixos.",
                "conteudo": "Tipos: Global Unicast (GUA): 2000::/3 (prefixo 2000-3fff) — roteável globalmente, equivalente a IP público. Unique Local Address (ULA): fc00::/7 (tipicamente fd00::/8) — privado, não roteável na Internet (equivalente a RFC 1918). Link-Local: fe80::/10 — comunicação no mesmo link, autoconfigurado (obrigatório em toda interface). Multicast: ff00::/8 — um-para-muitos (substitui broadcast, que não existe em IPv6). Loopback: ::1/128. Não especificado: ::/128. Anycast: mesmo endereço atribuído a múltiplos nós, roteado ao mais próximo (usa GUA). Prefixos comuns: /64 para sub-redes (SLAAC assume /64), /128 para host, /48 ou /56 para organização.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classificar fe80::1, 2001:db8::1, fd00::1 e ff02::1.",
                    "resposta": "fe80::1 link-local; 2001:db8::1 global unicast (documentação); fd00::1 unique local; ff02::1 multicast (all-nodes)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Por que não existe broadcast em IPv6?",
                    "resposta": "IPv6 usa multicast para funções que o broadcast fazia (ex.: ff02::1 all-nodes, ff02::2 all-routers). Isso reduz processamento em hosts que não participam."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'fe80::/10 é roteável na Internet.'",
                    "correcao": "Errado. Link-local (fe80::/10) não é roteável além do link local; é usado para NDP, autoconfiguração e comunicação local."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) IPv6 não possui endereço de broadcast.",
                    "resposta": "Certo — usa multicast."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prefixo identifica endereços global unicast? A) fe80::/10; B) fc00::/7; C) 2000::/3; D) ff00::/8.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno identificará os principais tipos de endereço IPv6 (global unicast, link-local, unique local, multicast, loopback) e seus prefixos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t4-s3",
                "titulo": "Pegadinhas de endereçamento",
                "objetivoAprendizagem": "Aluno reconhecerá armadilhas comuns em questões de endereçamento e sub-redes.",
                "conteudo": "Armadilhas frequentes: (1) Confundir /n com número de hosts (ex.: /24 tem 256 endereços, 254 hosts). (2) Esquecer de subtrair rede e broadcast. (3) Assumir que IP com último octeto 255 é sempre broadcast (depende da máscara). (4) Confundir máscara decimal com prefixo. (5) Não verificar alinhamento do bloco (ex.: 192.168.1.130/25 é válido, mas 192.168.1.100/25 pertence à rede .0, não .128). (6) VLSM: alocar sub-redes pequenas primeiro causa fragmentação. (7) Confundir IP privado com IP público por aparência. (8) Em IPv6, esquecer que :: pode ser usado uma vez. (9) Confundir link-local IPv4 (169.254) com IPv6 (fe80). (10) Usar 2^(bits) sem -2 para hosts. Sempre recalcular rede/broadcast com AND.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Qual o erro em '192.168.1.128/25 tem 128 hosts'?",
                    "resposta": "128 é o número de endereços; hosts utilizáveis = 126 (subtrai rede e broadcast)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um IP 10.0.0.65/26 pertence a qual rede: 10.0.0.0/26 ou 10.0.0.64/26?",
                    "resposta": "10.0.0.64/26 (65 AND 192 = 64). A rede 10.0.0.0/26 cobre 0-63, então 65 está na próxima."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em qualquer /24, o endereço .0 é sempre a rede e .255 sempre o broadcast.'",
                    "correcao": "Só se a sub-rede for /24 alinhada. Em /23, o broadcast de 192.168.0.0/23 é 192.168.1.255, e 192.168.1.0 é um host válido."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em /23, o endereço x.x.x.255 pode ser um host válido.",
                    "resposta": "Certo (se não for o broadcast da sub-rede)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é a rede de 172.16.37.200/22? A) 172.16.36.0; B) 172.16.32.0; C) 172.16.0.0; D) 172.16.37.0.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno reconhecerá armadilhas comuns em questões de endereçamento e sub-redes, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-2-unidade-5",
        "titulo": "2.5 Diagnóstico de redes",
        "topicos": [
          {
            "id": "modulo-2-unidade-5-topico-1",
            "titulo": "ping e traceroute/tracert",
            "subtopicos": [
              {
                "id": "m2-u5-t1-s1",
                "titulo": "ping: finalidade, sintaxe e interpretação",
                "objetivoAprendizagem": "Aluno explicará a função do ping, sua sintaxe básica e interpretará a saída (RTT, perda, TTL).",
                "conteudo": "ping envia ICMP echo request e espera echo reply, medindo RTT (round-trip time) e perda de pacotes. Sintaxe: ping <host> (Linux/macOS contínuo; Windows envia 4 por padrão). Opções: -c (quantidade, Linux), -n (quantidade, Windows), -t (TTL), -i (intervalo). Interpretação: RTT baixo e estável = boa conectividade; RTT alto = latência/congestionamento; perda = problema de enlace/roteamento/firewall; 'Destination Host Unreachable' = roteamento; 'Request timed out' = sem resposta (firewall, host desligado, perda). Limitações: ping usa ICMP, que pode ser bloqueado por firewalls mesmo com TCP/UDP funcionando; não testa aplicação. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Saída do ping mostra '64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.3 ms'. O que indica?",
                    "resposta": "Resposta recebida com sucesso; RTT 12,3 ms; TTL 117 (passou por ~11 roteadores, se TTL inicial 128). Conectividade IP ok."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "ping ao gateway (192.168.1.1) funciona, mas ping a 8.8.8.8 falha. Onde está o problema?",
                    "resposta": "Conectividade local ok; problema de roteamento/NAT/ISP além do gateway. Verificar rota padrão, NAT, modem/ISP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se o ping falha, a rede está totalmente inoperante.'",
                    "correcao": "Errado. Firewall pode bloquear ICMP enquanto HTTP/HTTPS funcionam. Ping é indicador, não prova absoluta."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) ping mede latência de ida e volta (RTT).",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual protocolo o ping utiliza? A) TCP; B) UDP; C) ICMP; D) ARP.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará a função do ping, sua sintaxe básica e interpretará a saída (RTT, perda, TTL), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t1-s2",
                "titulo": "traceroute/tracert: finalidade, sintaxe e interpretação",
                "objetivoAprendizagem": "Aluno explicará como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência).",
                "conteudo": "traceroute (Linux/macOS) / tracert (Windows) mapeia a rota (saltos) até o destino, enviando pacotes com TTL crescente e capturando ICMP 'time exceeded' de cada roteador. Sintaxe: traceroute <host> (Linux, UDP por padrão ou ICMP com -I), tracert <host> (Windows, ICMP). Saída: lista de saltos com IP/nome e RTT de cada um. '*' indica ausência de resposta (roteador não responde ICMP, perda ou firewall). Limitações: roteadores podem não responder; rotas assimétricas; NAT; load balancing causa saltos variáveis; não mede a rota de retorno. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Saída do traceroute mostra 3 saltos até o destino com RTTs 1ms, 5ms, 12ms. O que isso significa?",
                    "resposta": "O pacote passou por 3 roteadores; latência acumulada ~12 ms no destino. Rota curta, sem perda."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "traceroute mostra saltos 1-5 normais, depois '*' até o fim. O que indica?",
                    "resposta": "Roteadores intermediários não respondem ICMP (firewall) ou há perda; não prova falha de rota. Complementar com ping e teste de aplicação."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'traceroute mostra a rota exata e simétrica de ida e volta.'",
                    "correcao": "Errado. Mostra a rota de ida (com base em TTL). A rota de volta pode ser diferente (roteamento assimétrico)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) traceroute usa TTL crescente para descobrir cada salto.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O que '*' na saída do traceroute indica? A) Rota bloqueada definitivamente; B) Ausência de resposta ICMP; C) Sucesso; D) Timeout de DNS.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t1-s3",
                "titulo": "Ferramentas complementares: mtr, pathping, hping3",
                "objetivoAprendizagem": "Aluno explicará o uso de mtr, pathping e hping3 e quando utilizá-los.",
                "conteudo": "mtr (My Traceroute): combina ping e traceroute em tempo real, mostrando perda e latência por salto de forma contínua. Útil para identificar salto com perda intermitente. pathping (Windows): similar ao mtr, envia pacotes por um período e calcula estatísticas por salto. hping3: ferramenta de crafting de pacotes (TCP/UDP/ICMP) para testar firewalls, MTU, portas; requer privilégios. Uso em diagnóstico: mtr/pathping para localizar salto problemático; hping3 para testar regras de firewall ou PMTU. Limitações: ferramentas podem ser bloqueadas; resultados variam com carga; hping3 pode ser usado maliciosamente — usar apenas em redes próprias/autorizadas. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Quando usar mtr em vez de ping/traceroute?",
                    "resposta": "Para monitorar continuamente a rota e identificar salto com perda intermitente que ping pontual não captura."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "pathping mostra 5% de perda no salto 3. O que isso indica?",
                    "resposta": "Possível congestionamento ou problema no roteador do salto 3; verificar se a perda se propaga aos saltos seguintes (perda real) ou é apenas não-resposta ICMP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'mtr executa comandos reais no sistema operacional desta apostila.'",
                    "correcao": "Errado. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no SO."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) mtr combina ping e traceroute em tempo real.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual ferramenta do Windows combina ping e traceroute com estatísticas? A) tracert; B) pathping; C) nslookup; D) netstat.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o uso de mtr, pathping e hping3 e quando utilizá-los, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-5-topico-2",
            "titulo": "ipconfig/ifconfig, ip, netstat/ss",
            "subtopicos": [
              {
                "id": "m2-u5-t2-s1",
                "titulo": "ipconfig e ifconfig: configuração de interface",
                "objetivoAprendizagem": "Aluno explicará as funções de ipconfig (Windows) e ifconfig (Linux/macOS legado) e interpretará saídas típicas.",
                "conteudo": "ipconfig (Windows): exibe configuração de interfaces (IP, máscara, gateway, DNS). Opções: /all (detalhado, inclui MAC, DHCP, DNS), /release (libera IP DHCP), /renew (renova), /flushdns (limpa cache DNS), /displaydns. ifconfig (Linux/macOS, legado): exibe/altera configuração de interfaces (inet, netmask, broadcast, ether/MAC, status UP/DOWN). Hoje substituído por 'ip'. Uso típico: verificar IP obtido, identificar interface, renovar DHCP, limpar cache DNS. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "ipconfig mostra 'IPv4 Address: 169.254.x.x'. O que isso indica?",
                    "resposta": "APIPA — falha de DHCP. A interface autoatribuiu link-local. Verificar servidor DHCP, cabo/Wi-Fi."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um site não resolve após mudança de DNS. Qual comando limpa o cache no Windows?",
                    "resposta": "ipconfig /flushdns — limpa o cache do resolvedor local. Em seguida testar nslookup/dig."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'ipconfig /renew força um novo IP diferente do anterior.'",
                    "correcao": "Errado. /renew solicita renovação ao servidor DHCP; geralmente retorna o mesmo IP (se o lease ainda for válido). Para forçar IP diferente, /release + /renew, sem garantia."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) ipconfig /flushdns limpa o cache DNS local no Windows.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando exibe o MAC (endereço físico) no Windows? A) ipconfig /all; B) ping; C) tracert; D) netstat.",
                    "resposta": "A"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará as funções de ipconfig (Windows) e ifconfig (Linux/macOS legado) e interpretará saídas típicas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t2-s2",
                "titulo": "comando ip e netstat/ss",
                "objetivoAprendizagem": "Aluno explicará o uso do comando 'ip' (Linux) e de netstat/ss para inspecionar conexões e portas.",
                "conteudo": "Comando ip (iproute2, Linux): ip addr (endereços de interfaces), ip link (estado de interfaces), ip route (tabela de rotas), ip neigh (cache ARP/NDP). Substitui ifconfig/route/arp. netstat (legado): exibe conexões ativas, portas em escuta, tabela de roteamento, estatísticas. ss (socket statistics, moderno): mais rápido, substitui netstat. Opções: -t (TCP), -u (UDP), -l (listening), -n (numérico), -p (processo). Uso típico: verificar se um serviço está escutando na porta esperada; identificar conexões estabelecidas; detectar portas suspeitas. Ex.: 'ss -tlnp' lista portas TCP em escuta com processo. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como verificar se o servidor web está escutando na porta 80?",
                    "resposta": "ss -tlnp | grep :80 ou netstat -tlnp | grep :80. Deve mostrar LISTEN na porta 80."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um serviço não responde na porta 8080. netstat não mostra nada na 8080. O que isso indica?",
                    "resposta": "O serviço não está rodando ou não está escutando naquela porta. Verificar processo, configuração e firewall."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'netstat e ss mostram apenas conexões TCP.'",
                    "correcao": "Errado. Ambos suportam TCP e UDP (opção -u), além de outros protocolos e sockets Unix."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 'ss' é o substituto moderno de 'netstat' no Linux.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando exibe a tabela de rotas no Linux moderno? A) route; B) ip route; C) netstat -r; D) todas as anteriores.",
                    "resposta": "D (route e netstat -r são legados; ip route é o moderno)"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará o uso do comando 'ip' (Linux) e de netstat/ss para inspecionar conexões e portas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t2-s3",
                "titulo": "Verificação de rotas, ARP e vizinhos",
                "objetivoAprendizagem": "Aluno verificará tabela de rotas, cache ARP/NDP e estado de interfaces.",
                "conteudo": "Tabela de rotas: 'ip route' (Linux) ou 'route print' (Windows) mostra rotas, gateway padrão e métricas. Cache ARP/NDP: 'ip neigh' (Linux) ou 'arp -a' (Windows) mostra pares IP-MAC. Verificações úteis: rota padrão presente (default via X); gateway alcançável; ARP resolvido para o gateway; interface UP com IP válido. Se o gateway não tem entrada ARP, problema de enlace. Se a rota padrão aponta para IP inexistente, problema de configuração. MTU e fragmentação: 'ping -M do -s 1472' (Linux) testa PMTU. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como verificar se existe rota padrão no Linux?",
                    "resposta": "ip route show default — deve exibir 'default via <gateway> dev <interface>'."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "'arp -a' não mostra o gateway. O que isso indica?",
                    "resposta": "ARP não foi resolvido — problema de enlace (cabo/Wi-Fi) ou gateway desligado/inacessível na camada 2."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se a tabela de rotas está correta, a conectividade está garantida.'",
                    "correcao": "Errado. Rota correta é necessária, mas não suficiente: firewall, NAT, DNS e aplicação também podem falhar."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 'ip neigh' exibe o cache ARP/NDP no Linux.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando exibe a tabela de rotas no Windows? A) ipconfig; B) route print; C) arp -a; D) netstat -r (também).",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno verificará tabela de rotas, cache ARP/NDP e estado de interfaces, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-5-topico-3",
            "titulo": "nslookup e dig",
            "subtopicos": [
              {
                "id": "m2-u5-t3-s1",
                "titulo": "nslookup: consulta DNS",
                "objetivoAprendizagem": "Aluno usará nslookup para consultar registros DNS e interpretará a saída.",
                "conteudo": "nslookup consulta servidores DNS. Sintaxe: nslookup <nome> (consulta A/AAAA padrão) ou nslookup -type=MX exemplo.com. Pode especificar servidor: nslookup exemplo.com 8.8.8.8. Saída: Server (resolvedor usado), Name, Address(es). Limitações: saída menos detalhada que dig; comportamento varia entre sistemas; em alguns sistemas está deprecated em favor de dig/host. Útil para testes rápidos. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "nslookup www.exemplo.com retorna 'Address: 93.184.216.34'. O que isso indica?",
                    "resposta": "O nome foi resolvido para o IP 93.184.216.34 pelo resolvedor padrão. DNS ok."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Consultar o registro MX de um domínio com nslookup.",
                    "resposta": "nslookup -type=MX exemplo.com — retorna os servidores de e-mail e prioridades."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'nslookup sempre usa o DNS configurado no sistema.'",
                    "correcao": "Errado. É possível especificar outro servidor: nslookup nome 8.8.8.8. Útil para isolar problemas de resolvedor."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) nslookup pode consultar tipos específicos de registro (MX, NS, TXT).",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando especifica o servidor DNS a consultar? A) nslookup nome; B) nslookup nome servidor; C) ping nome; D) dig nome.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno usará nslookup para consultar registros DNS e interpretará a saída, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t3-s2",
                "titulo": "dig: consulta DNS avançada",
                "objetivoAprendizagem": "Aluno usará dig para consultas DNS detalhadas e interpretará a saída (status, flags, TTL, seção answer).",
                "conteudo": "dig (Domain Information Groper) é ferramenta avançada de consulta DNS (Linux/macOS; disponível no Windows via BIND). Sintaxe: dig <nome> [tipo] [@servidor]. Saída: cabeçalho (status: NOERROR/NXDOMAIN/SERVFAIL, flags, QUERY TIME), seção QUESTION, ANSWER (registros com TTL), AUTHORITY, ADDITIONAL. Opções: +short (só resposta), +trace (rastreia resolução desde a raiz), -x (reverso). Mais detalhado que nslookup. Útil para depurar DNS, verificar TTL, DNSSEC. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "dig www.exemplo.com retorna status NOERROR e seção ANSWER com A 93.184.216.34 TTL 3600. O que indica?",
                    "resposta": "Resolução bem-sucedida; IP 93.184.216.34; registro em cache por até 3600 s."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "dig exemplo.com MX +short retorna dois servidores. Como interpretar?",
                    "resposta": "Lista de servidores de e-mail com prioridade (menor número = maior prioridade). Verificar se apontam para IPs válidos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'dig +trace consulta apenas o resolvedor local.'",
                    "correcao": "Errado. +trace faz resolução iterativa desde os servidores raiz, ignorando o cache do resolvedor local — útil para diagnosticar delegação."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) dig +short exibe apenas a resposta, sem metadados.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual status DNS indica 'nome não existe'? A) NOERROR; B) NXDOMAIN; C) SERVFAIL; D) REFUSED.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno usará dig para consultas DNS detalhadas e interpretará a saída (status, flags, TTL, seção answer), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t3-s3",
                "titulo": "Ferramentas complementares e cache DNS",
                "objetivoAprendizagem": "Aluno explicará outras ferramentas de diagnóstico DNS e o papel do cache.",
                "conteudo": "host: comando simples de consulta DNS (Linux/macOS), saída concisa. getent hosts: consulta o resolvedor do sistema (inclui /etc/hosts e DNS). resolvectl (systemd-resolved): status, flush-caches, query. Cache DNS: sistemas operacionais e navegadores mantêm cache local; 'ipconfig /flushdns' (Windows) ou 'resolvectl flush-caches' (Linux) limpa. Problemas de cache: DNS alterado mas cliente ainda usa IP antigo; limpar cache resolve. /etc/hosts e C:\\Windows\\System32\\drivers\\etc\\hosts sobrescrevem DNS para nomes específicos. Verificação de DNSSEC: dig +dnssec. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O que é o arquivo hosts e como afeta a resolução?",
                    "resposta": "Mapeia nomes para IPs localmente, sobrescrevendo DNS. Útil para testes; risco de sequestro se alterado maliciosamente."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "DNS foi alterado no servidor, mas o cliente ainda resolve o IP antigo. Causa e correção?",
                    "resposta": "Cache DNS local. Limpar cache (ipconfig /flushdns ou resolvectl flush-caches) e testar novamente."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'flushdns resolve problemas de roteamento.'",
                    "correcao": "Errado. flushdns limpa apenas o cache DNS; não afeta roteamento, ARP ou conectividade IP."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O arquivo hosts tem prioridade sobre o DNS para nomes listados nele.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual comando limpa o cache DNS no Linux com systemd-resolved? A) ipconfig /flushdns; B) resolvectl flush-caches; C) dig +trace; D) nslookup.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno explicará outras ferramentas de diagnóstico DNS e o papel do cache, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          },
          {
            "id": "modulo-2-unidade-5-topico-4",
            "titulo": "Diagnóstico por camadas e cenários simulados",
            "subtopicos": [
              {
                "id": "m2-u5-t4-s1",
                "titulo": "Diagnóstico estruturado por camadas",
                "objetivoAprendizagem": "Aluno aplicará um método de diagnóstico por camadas, do físico à aplicação, para isolar falhas.",
                "conteudo": "Método bottom-up: (1) Físico/Enlace: cabo conectado? Link light? ip addr mostra UP? (2) Rede: IP válido? Ping ao gateway funciona? Rota padrão presente (ip route)? (3) Transporte: porta escutando (ss)? Firewall bloqueando? (4) Aplicação: serviço responde? HTTP 200? DNS resolve? (5) Nome: DNS ok? Testar com IP direto. Também top-down (da aplicação para baixo) quando o sintoma é claro. Isolar a camada que falha evita 'chutes'. Documentar cada teste. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Site não carrega. Qual a primeira verificação bottom-up?",
                    "resposta": "Camada física/enlace: cabo/Wi-Fi conectado, link ativo, IP atribuído (ipconfig/ip addr). Sem IP, parar e corrigir DHCP/cabo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Ping ao IP funciona, mas o site não carrega. Próximos passos?",
                    "resposta": "Testar DNS (nslookup/dig do nome), testar porta 443 (ss/curl), verificar certificado TLS, verificar HTTP (curl -I). Isolar DNS vs TLS vs HTTP."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Diagnóstico por camadas é desnecessário; basta reiniciar o roteador.'",
                    "correcao": "Errado. Reiniciar pode mascarar o problema. Diagnóstico por camadas identifica a causa raiz e evita recorrência."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O método bottom-up começa pela camada física.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Ping ao gateway falha. Qual camada provavelmente afetada? A) Aplicação; B) Transporte; C) Rede/Enlace; D) Sessão.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno aplicará um método de diagnóstico por camadas, do físico à aplicação, para isolar falhas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t4-s2",
                "titulo": "Diferenças entre falha de DNS, conectividade, roteamento e aplicação",
                "objetivoAprendizagem": "Aluno distinguirá sintomas de falhas de DNS, conectividade, roteamento e aplicação.",
                "conteudo": "DNS: 'ERR_NAME_NOT_RESOLVED', nslookup falha, mas IP direto funciona. Conectividade (enlace/físico): sem IP, sem link, ping ao gateway falha. Roteamento: ping ao gateway ok, mas ping a IP externo falha, 'destination net unreachable', traceroute para no gateway. Aplicação: ping e DNS ok, mas HTTP falha (4xx/5xx, timeout na porta), certificado inválido. A distinção orienta a correção: DNS -> verificar resolvedor/cache/delegação; conectividade -> cabo/Wi-Fi/DHCP; roteamento -> rota padrão/NAT/ISP; aplicação -> serviço, porta, certificado, código.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Um site não abre, mas ping ao IP (93.184.216.34) funciona. Qual é a suspeita?",
                    "resposta": "Falha de DNS (se o nome não resolve) ou de aplicação/TLS (se o IP direto também falhar no navegador). Testar nslookup e acesso por IP."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Ping ao gateway (192.168.1.1) funciona, mas ping a 8.8.8.8 retorna 'destination net unreachable'. Diagnóstico?",
                    "resposta": "Roteamento: rota padrão ausente ou NAT não configurado. Verificar ip route e configuração do roteador."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se o DNS falha, a rede física está com defeito.'",
                    "correcao": "Errado. DNS é camada de aplicação; a física pode estar perfeita. Causas de falha de DNS: resolvedor, cache, delegação, firewall na porta 53."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 'Destination net unreachable' indica problema de roteamento.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Ping ao IP externo funciona, mas o nome não resolve. Falha de: A) conectividade; B) roteamento; C) DNS; D) aplicação.",
                    "resposta": "C"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno distinguirá sintomas de falhas de DNS, conectividade, roteamento e aplicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t4-s3",
                "titulo": "Cenários simulados de falhas e mensagens de erro",
                "objetivoAprendizagem": "Aluno interpretará mensagens de erro comuns e mapeará a causas prováveis.",
                "conteudo": "Mensagens e causas: 'Request timed out' (ping) — host desligado, firewall bloqueando ICMP, perda. 'Destination Host Unreachable' — ARP falhou ou rota ausente. 'TTL expired in transit' — loop de roteamento ou TTL muito baixo. 'Connection refused' — porta fechada (serviço parado/firewall REJECT). 'Connection timed out' — pacote descartado (firewall DROP, host inacessível). 'ERR_NAME_NOT_RESOLVED' / 'NXDOMAIN' — DNS. 'ERR_CERT_AUTHORITY_INVALID' — certificado não confiável. '502 Bad Gateway' — proxy/reverso não alcançou backend. '503 Service Unavailable' — sobrecarga/manutenção. '404 Not Found' — recurso inexistente. '403 Forbidden' — permissão. '401 Unauthorized' — autenticação. A interpretação deve considerar a camada: rede vs transporte vs aplicação. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Interpretar 'Connection refused' ao tentar SSH na porta 22.",
                    "resposta": "O host respondeu (rede ok) mas a porta 22 está fechada (serviço SSH parado ou firewall REJECT). Verificar serviço e configuração."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um navegador exibe 'ERR_CERT_DATE_INVALID'. Qual a causa e correção?",
                    "resposta": "Certificado do servidor expirado ou relógio do cliente errado. Corrigir data/hora do cliente e renovar certificado no servidor."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Timeout sempre significa que o host está desligado.'",
                    "correcao": "Errado. Timeout pode ser firewall descartando (DROP), perda de pacotes, congestionamento ou rota ausente. 'Connection refused' é que indica host ativo com porta fechada."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) 'Connection refused' indica que o host está ativo mas a porta está fechada.",
                    "resposta": "Certo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual mensagem indica problema de certificado TLS? A) ERR_NAME_NOT_RESOLVED; B) ERR_CERT_AUTHORITY_INVALID; C) Connection refused; D) 404 Not Found.",
                    "resposta": "B"
                  }
                ],
                "criterioDominio": "PoC (A): o aluno é capaz de aluno interpretará mensagens de erro comuns e mapeará a causas prováveis, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};
