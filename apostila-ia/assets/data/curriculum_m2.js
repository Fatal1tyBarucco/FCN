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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é uma rede de computadores; (b) os conceitos de nó e enlace; (c) os papéis de cliente e servidor; (d) o modelo requisição-resposta; (e) por que compartilhar recursos motiva a existência da rede. POR QUE O CONHECIMENTO É IMPORTANTE: esses termos fundamentam todo o restante do módulo; sem eles não se compreendem protocolos, camadas nem diagnóstico. PRÉ-REQUISITOS: nenhum além de noções gerais de computação. OBJETIVOS OBSERVÁVEIS: (1) definir rede; (2) distinguir nó de enlace; (3) diferenciar cliente de servidor; (4) descrever o fluxo requisição-resposta. COMPETÊNCIAS DESENVOLVIDAS: vocabulário de redes; leitura de topologias simples. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 (classificação e topologias); unidade 2.1 (camadas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: rede de computadores é um conjunto de dispositivos autônomos interconectados que compartilham recursos e trocam informação. Nó (node) é cada dispositivo conectado — computador, servidor, impressora, roteador, switch — e classifica-se em nó final (origem/destino do tráfego) ou intermediário (que apenas encaminha). Enlace (link) é o canal de comunicação entre nós, seja físico (cabo de par trançado, fibra, coaxial) ou sem fio (rádio). Cliente é o dispositivo que SOLICITA um recurso ou serviço; servidor é o que FORNECE. A interação segue o modelo requisição-resposta: o cliente envia um pedido, o servidor processa e devolve uma resposta. Essa assimetria de papéis é lógica, não física: um mesmo computador pode ser cliente em uma interação e servidor em outra. Compartilhar recursos (arquivos, impressoras, acesso à Internet) e permitir comunicação são as motivações centrais das redes, e é sobre essa base que se constroem protocolos e camadas.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: analogia de uma sala com pessoas — os nós são as pessoas, os enlaces são as conversas que as ligam.\n- Nível intermediário: distinguir nó final de intermediário em um diagrama simples.\n- Nível avançado: reconhecer que o papel de cliente/servidor depende da interação, não do equipamento.\n- Nível especialista: identificar gargalos ao analisar quais enlaces concentram o tráfego entre clientes e servidores.\nCOMPARAÇÕES CRÍTICAS:\n- nó final x nó intermediário: o primeiro gera/consome dados; o segundo só encaminha — a classificação muda a interpretação do diagrama.\n- cliente x servidor: papéis definidos pela interação, não pelo hardware — confundir isso gera erro.\n- enlace físico x enlace lógico: o primeiro é o meio; o segundo é a ligação estabelecida entre camadas/protocolos.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Servidor é sempre um computador grande e dedicado.\" — Motivo: o papel é definido pela função — Versão tecnicamente correta: qualquer dispositivo que fornece um serviço é servidor naquela interação.\n- Afirmação errada: \"Switch e roteador são nós finais.\" — Motivo: são intermediários — Versão tecnicamente correta: encaminham tráfego em nome de outros.\n- Afirmação errada: \"Rede exige cabo.\" — Motivo: há enlaces sem fio — Versão tecnicamente correta: o enlace pode ser físico ou sem fio.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: rede, nó, enlace, cliente, servidor, requisição-resposta.\n- Regras e fórmulas: cliente solicita; servidor responde.\n- Exceções: papéis podem se inverter entre interações.\n- Palavras-chave: dispositivo, canal, serviço, comunicação, compartilhamento.\n- Checklist de domínio: (1) Defino rede? (2) Distingo nó de enlace? (3) Diferencio cliente de servidor? (4) Descrevo o fluxo?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é um nó? (2) O que é um enlace? (3) Qual a diferença entre cliente e servidor? (4) Como funciona o modelo requisição-resposta? (5) Um mesmo computador pode ser ambos?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de definir rede de computadores e identificará nós, enlaces, clientes e servidores, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u1-t1-s2",
                "titulo": "Classificação de redes: LAN, WLAN, MAN, WAN, PAN",
                "objetivoAprendizagem": "Aluno distinguirá LAN, WLAN, MAN, WAN, PAN e intranet/extranet.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as classificações por abrangência geográfica (PAN, LAN, WLAN, MAN, WAN); (b) intranet e extranet; (c) critérios para distinguir esses tipos. POR QUE O CONHECIMENTO É IMPORTANTE: questões classificam redes pela abrangência e pelo escopo organizacional; a confusão entre intranet e extranet é frequente. PRÉ-REQUISITOS: conceito de rede, nó e enlace. OBJETIVOS OBSERVÁVEIS: (1) definir cada classificação; (2) dar exemplo de cada; (3) distinguir intranet de extranet; (4) relacionar alcance e uso. COMPETÊNCIAS DESENVOLVIDAS: classificação de redes; leitura de cenários organizacionais. GRAU DE DIFICULDADE: básico. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 (componentes); unidade 1.4 (meios); Módulo 4 (segurança de perímetro). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: as redes classificam-se por abrangência: a PAN (Personal Area Network) cobre poucos metros, tipicamente ligando dispositivos pessoais (celular e fone por Bluetooth); a LAN (Local Area Network) cobre um ambiente, edifício ou campus; a WLAN (Wireless LAN) é uma LAN cujos enlaces são sem fio, como o Wi-Fi; a MAN (Metropolitan Area Network) cobre uma cidade ou região metropolitana; e a WAN (Wide Area Network) cobre longas distâncias, países ou continentes — a Internet é o exemplo maior. Intranet é a rede interna de uma organização, privada, que usa as mesmas tecnologias da Internet (protocolos TCP/IP) para serviços internos; extranet é a extensão controlada da intranet para parceiros, fornecedores ou clientes externos, mediante autenticação e regras de acesso. Assim, LAN/WAN/MAN descrevem alcance físico-geográfico, enquanto intranet/extranet descrevem o ESCOPO de acesso (quem pode entrar). Os critérios são independentes: uma intranet pode apoiar-se em LANs e WANs.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: ordenar as classificações por alcance (PAN < LAN < MAN < WAN).\n- Nível intermediário: associar cada tipo a um exemplo concreto.\n- Nível avançado: distinguir alcance geográfico de escopo de acesso.\n- Nível especialista: analisar a arquitetura de uma rede organizacional combinando LAN, WAN, intranet e extranet.\nCOMPARAÇÕES CRÍTICAS:\n- LAN x WLAN: a WLAN é uma LAN sem fio — a diferença é o meio, não o alcance.\n- intranet x extranet: a intranet é interna; a extranet estende o acesso a terceiros controlados — muda quem entra.\n- MAN x WAN: a MAN cobre a cidade; a WAN cobre distâncias maiores.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Intranet e Internet são a mesma coisa.\" — Motivo: a intranet é privada e restrita — Versão tecnicamente correta: usa tecnologias semelhantes, mas acesso controlado.\n- Afirmação errada: \"WLAN e LAN se opõem.\" — Motivo: WLAN é um tipo de LAN — Versão tecnicamente correta: difere apenas por usar enlace sem fio.\n- Afirmação errada: \"Extranet é aberta a qualquer um.\" — Motivo: o acesso é controlado — Versão tecnicamente correta: restrita a parceiros autorizados.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: PAN, LAN, WLAN, MAN, WAN, intranet, extranet.\n- Regras e fórmulas: alcance geográfico (PAN→WAN) x escopo de acesso (intranet/extranet).\n- Exceções: a Internet é uma WAN pública que interliga redes menores.\n- Palavras-chave: abrangência, Wi-Fi, privada, parceiros, TCP/IP.\n- Checklist de domínio: (1) Defino cada tipo? (2) Dou exemplos? (3) Distingo intranet de extranet? (4) Relaciono alcance e uso?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é uma LAN? (2) O que diferencia WLAN de LAN? (3) O que é uma MAN? (4) Intranet e extranet diferem em quê? (5) A Internet se enquadra em qual classificação?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir LAN, WLAN, MAN, WAN, PAN e intranet/extranet, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u1-t1-s3",
                "titulo": "Topologias físicas e lógicas",
                "objetivoAprendizagem": "Aluno identificará topologias estrela, anel, barra (bus), malha e híbrida.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é topologia física e lógica; (b) as topologias estrela, anel, barra, malha e híbrida; (c) vantagens e fragilidades de cada uma. POR QUE O CONHECIMENTO É IMPORTANTE: a topologia determina custo, tolerância a falhas e desempenho; a prova cobra a diferença entre a disposição física e o fluxo lógico. PRÉ-REQUISITOS: conceito de nó e enlace. OBJETIVOS OBSERVÁVEIS: (1) definir topologia física; (2) definir topologia lógica; (3) descrever estrela, anel, barra e malha; (4) identificar a fragilidade central de cada uma. COMPETÊNCIAS DESENVOLVIDAS: leitura de topologias; avaliação de tolerância a falhas. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 (componentes e classificações); unidade 1.2 (comutação). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: topologia física é a disposição real dos dispositivos e cabos; topologia lógica é a forma como os dados efetivamente circulam. Na estrela, todos os nós se ligam a um ponto central (switch ou hub): a falha de um nó não afeta os demais, mas a falha do central derruba a rede. No anel, os nós se conectam em círculo e os dados percorrem uma direção; a falha de um nó pode romper o anel, dependendo da implementação (anel duplo ou token passa a contornar). Na barra (bus), todos compartilham o mesmo cabo: a instalação é simples, porém há colisões frequentes e a ruptura do cabo derruba o segmento. Na malha, cada nó se conecta a vários outros (malha completa = todos com todos): alta redundância e tolerância a falhas, com custo elevado. A topologia híbrida combina duas ou mais. O ponto clássico: o Ethernet moderno tem topologia física em estrela (ligado ao switch), mas topologia lógica em barramento (o meio é compartilhado logicamente). Física e lógica, portanto, não coincidem necessariamente.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: associar cada nome a um desenho.\n- Nível intermediário: indicar pontos únicos de falha de cada topologia.\n- Nível avançado: explicar por que Ethernet físico em estrela tem lógica de barramento.\n- Nível especialista: recomendar topologia para um cenário considerando custo, redundância e desempenho.\nCOMPARAÇÕES CRÍTICAS:\n- topologia física x lógica: podem divergir (estrela física com barramento lógico) — a distinção altera o gabarito.\n- estrela x malha: estrela tem ponto único de falha (o central); malha tem redundância — muda a tolerância.\n- barra x estrela: barra usa meio compartilhado e sofre colisões; estrela isola cada enlace.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Topologia física e lógica são sempre iguais.\" — Motivo: Ethernet clássico as separa — Versão tecnicamente correta: física em estrela e lógica em barramento.\n- Afirmação errada: \"Na estrela, a falha de qualquer nó derruba a rede.\" — Motivo: o isolamento é a vantagem — Versão tecnicamente correta: só o nó central é ponto único de falha.\n- Afirmação errada: \"Malha é sempre a melhor escolha.\" — Motivo: custo elevado — Versão tecnicamente correta: depende do requisito de redundância e orçamento.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: topologia física, topologia lógica, estrela, anel, barra, malha, híbrida.\n- Regras e fórmulas: estrela = ponto central; malha = redundância; barra = meio compartilhado.\n- Exceções: uma topologia física pode esconder outra lógica.\n- Palavras-chave: disposição, fluxo, ponto de falha, colisão, redundância.\n- Checklist de domínio: (1) Defino física e lógica? (2) Descrevo as topologias? (3) Aponto o ponto de falha? (4) Reconheço a divergência?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é topologia física? (2) E lógica? (3) Qual o ponto único de falha da estrela? (4) Por que a malha é mais tolerante? (5) Que combinação física/lógica o Ethernet usa?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de identificar topologias estrela, anel, barra (bus), malha e híbrida, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u1-t1-s4",
                "titulo": "Comutação de circuitos vs. comutação de pacotes",
                "objetivoAprendizagem": "Aluno diferenciará comutação de circuitos e comutação de pacotes.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como funciona a comutação de circuitos; (b) como funciona a comutação de pacotes; (c) vantagens e desvantagens de cada uma; (d) por que a Internet adota pacotes. POR QUE O CONHECIMENTO É IMPORTANTE: a escolha do modelo de comutação explica latência, jitter e tolerância a falhas; a prova compara os dois. PRÉ-REQUISITOS: conceito de rede e de enlace. OBJETIVOS OBSERVÁVEIS: (1) descrever circuitos; (2) descrever pacotes; (3) comparar custo e desempenho; (4) justificar o modelo da Internet. COMPETÊNCIAS DESENVOLVIDAS: análise comparativa de modelos de comutação. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.3 (métricas de desempenho); unidade 2 (protocolos e camadas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: na comutação de circuitos, um caminho dedicado é reservado entre origem e destino antes de a comunicação começar, e permanece reservado durante toda a conversa — é o modelo da telefonia tradicional. Suas vantagens são latência previsível e largura de banda garantida; suas desvantagens são o desperdício de recursos quando o circuito fica ocioso e o tempo de estabelecimento. Na comutação de pacotes, os dados são divididos em pacotes que caminham independentemente, cada um com seu endereçamento, e podem seguir rotas diferentes. As vantagens são a eficiência (o meio é compartilhado, aproveitando janelas de ociosidade) e a tolerância a falhas (se um caminho cai, os pacotes podem ser reencaminhados); as desvantagens são a latência variável (jitter), a possibilidade de perda e a necessidade de reordenação e de retransmissão. A Internet adota comutação de pacotes; a telefonia tradicional usava circuitos. A escolha determina o comportamento sob congestionamento e a capacidade de multiplexar vários fluxos no mesmo enlace.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: analogia da estrada — circuito é uma faixa reservada; pacotes são carros que compartilham a via.\n- Nível intermediário: comparar garantia de banda e uso de recursos.\n- Nível avançado: relacionar comutação de pacotes a jitter, perda e reordenação.\n- Nível especialista: decidir o modelo adequado para um serviço sensível a atraso, justificando tecnicamente.\nCOMPARAÇÕES CRÍTICAS:\n- circuitos x pacotes: o primeiro garante recursos e previsibilidade; o segundo ganha em eficiência e resiliência — muda custo e comportamento sob carga.\n- banda garantida x banda compartilhada: circuitos reservam; pacotes disputam.\n- latência estável x variável: circuitos reduzem jitter; pacotes o introduzem.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Circuitos são sempre obsoletos.\" — Motivo: ainda há cenários sensíveis a atraso — Versão tecnicamente correta: o modelo se adequa conforme o requisito.\n- Afirmação errada: \"Pacotes viajam sempre pelo mesmo caminho.\" — Motivo: podem seguir rotas distintas — Versão tecnicamente correta: cada pacote é roteado independentemente.\n- Afirmação errada: \"Comutação de pacotes desperdiça banda.\" — Motivo: ela a compartilha — Versão tecnicamente correta: o desperdício é característico de circuitos ociosos.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: comutação de circuitos, comutação de pacotes, circuito dedicado, pacote, jitter.\n- Regras e fórmulas: circuitos = recurso reservado; pacotes = recurso compartilhado.\n- Exceções: redes híbridas combinam características conforme o serviço.\n- Palavras-chave: caminho dedicado, multiplexação, reordenação, resiliência, latência.\n- Checklist de domínio: (1) Descrevo circuitos? (2) Descrevo pacotes? (3) Comparo vantagens? (4) Justifico a Internet?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que caracteriza a comutação de circuitos? (2) E a de pacotes? (3) Cite uma vantagem de cada. (4) O que é jitter e a qual modelo se associa? (5) Por que a Internet usa pacotes?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar comutação de circuitos e comutação de pacotes, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os quatro modos de endereçamento (unicast, broadcast, multicast, anycast); (b) exemplos de cada; (c) o alcance de cada um; (d) protocolos associados. POR QUE O CONHECIMENTO É IMPORTANTE: o modo de endereçamento define como uma mensagem atinge destinatários e afeta protocolos como ARP, DHCP e DNS; a prova cobra a distinção. PRÉ-REQUISITOS: conceito de nó e de endereço. OBJETIVOS OBSERVÁVEIS: (1) definir cada modo; (2) dar exemplo; (3) explicar o alcance do broadcast; (4) associar IGMP ao multicast. COMPETÊNCIAS DESENVOLVIDAS: análise de destinatários; leitura de tráfego de rede. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.3 (ARP/NDP); unidade 3.2 (DNS/DHCP); unidade 1.3 (métricas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: unicast é a comunicação um-para-um: um emissor envia a um destinatário específico — é o que ocorre ao acessar um site. Broadcast é um-para-todos dentro do mesmo domínio de broadcast: a mensagem alcança todos os nós da mesma rede, como na descoberta do DHCP (o cliente ainda não conhece o servidor) e em algumas consultas ARP. Multicast é um-para-muitos dirigido: a mensagem vai a um grupo de nós que se inscreveu para recebê-la, como em transmissões de vídeo; a associação ao grupo costuma ser gerenciada pelo protocolo IGMP. Anycast é um-para-o-mais-próximo: o mesmo endereço é atribuído a vários servidores e o roteamento entrega ao mais próximo segundo a métrica da rede — é usado por servidores-raiz de DNS e por redes de distribuição de conteúdo. Um ponto decisivo: o broadcast NÃO atravessa roteadores (fica restrito à sub-rede); o multicast pode ser roteado quando há suporte; o anycast é um conceito de roteamento, não um novo tipo de endereço. Em IPv6 não existe broadcast: suas funções são cobertas por multicast específicos.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir \"um\" de \"todos\" e de \"grupo\".\n- Nível intermediário: associar cada modo a um protocolo (DHCP, ARP, IGMP, DNS).\n- Nível avançado: explicar por que o broadcast não cruza sub-redes e como o anycast escolhe o destino.\n- Nível especialista: escolher o modo adequado para distribuir conteúdo a muitos clientes com eficiência.\nCOMPARAÇÕES CRÍTICAS:\n- unicast x multicast: o primeiro atinge um; o segundo, um grupo inscrito — muda a eficiência de transmissões em massa.\n- broadcast x multicast: o primeiro atinge todos da sub-rede; o segundo, só quem se inscreveu — o alcance muda o comportamento.\n- multicast x anycast: o multicast entrega a MUITOS; o anycast entrega ao MAIS PRÓXIMO de um grupo de servidores.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Broadcast atravessa roteadores.\" — Motivo: fica no domínio de broadcast — Versão tecnicamente correta: roteadores o bloqueiam por padrão.\n- Afirmação errada: \"Anycast é um endereço especial como o multicast.\" — Motivo: é um modo de roteamento — Versão tecnicamente correta: usa endereços unicast replicados e entrega ao mais próximo.\n- Afirmação errada: \"IPv6 tem broadcast.\" — Motivo: o broadcast foi eliminado — Versão tecnicamente correta: funções equivalentes usam multicast.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: unicast, broadcast, multicast, anycast, IGMP, domínio de broadcast.\n- Regras e fórmulas: um-para-um / um-para-todos / um-para-grupo / um-para-o-mais-próximo.\n- Exceções: IPv6 elimina o broadcast; o alcance do broadcast é a sub-rede.\n- Palavras-chave: destinatário, grupo, inscrição, raiz DNS, CDN.\n- Checklist de domínio: (1) Defino os quatro? (2) Dou exemplos? (3) Explico o alcance? (4) Associo IGMP?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é unicast? (2) Onde o broadcast fica restrito? (3) Como o multicast identifica o grupo? (4) O que caracteriza o anycast? (5) IPv6 tem broadcast?",
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) largura de banda; (b) throughput; (c) latência; (d) jitter; (e) perda de pacotes; (f) cálculo do tempo de transferência. POR QUE O CONHECIMENTO É IMPORTANTE: essas métricas caracterizam o desempenho e explicam problemas percebidos pelo usuário; a prova cobra a diferença entre capacidade e taxa real. PRÉ-REQUISITOS: conceito de rede e de unidades de dados (bit, byte). OBJETIVOS OBSERVÁVEIS: (1) definir cada métrica; (2) distinguir largura de banda de throughput; (3) calcular tempo de transferência; (4) relacionar jitter e perda a aplicações. COMPETÊNCIAS DESENVOLVIDAS: medição de desempenho; cálculo com unidades. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.2 (comutação); unidade 5.1 (ping); unidade 3 (protocolos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: largura de banda (bandwidth) é a capacidade MÁXIMA teórica do enlace, medida em bits por segundo (bps, kbps, Mbps, Gbps). Throughput é a taxa REAL obtida na prática, sempre menor ou igual à largura de banda, por causa de sobrecarga de protocolo, congestionamento e perdas. Latência é o tempo de trânsito de um pacote, composto por atraso de propagação (distância/velocidade), de transmissão (tamanho/banda), de fila (congestionamento) e de processamento; costuma-se medir o RTT (tempo de ida e volta). Jitter é a VARIAÇÃO da latência entre pacotes consecutivos e é crítico para voz e vídeo em tempo real. Perda de pacotes é a fração que não chega ao destino e pode indicar congestionamento, erro de transmissão ou bloqueio por firewall. Cálculo de tempo de transferência: tempo ≈ tamanho / throughput. Exemplo: transferir 100 MB (100 × 8 = 800 Mb) a 100 Mbps resulta em 800/100 = 8 s em condições ideais; com overhead e throughput real de 80 Mbps, o tempo sobe para 10 s. Variação do problema: a mesma transferência a 1 Gbps cairia para 0,8 s teóricos. Unidades importam: 1 byte = 8 bits.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que banda é capacidade e throughput é o que se obtém.\n- Nível intermediário: calcular tempo de transferência convertendo unidades.\n- Nível avançado: decompor a latência em seus componentes e relacionar jitter a aplicações.\n- Nível especialista: diagnosticar uma chamada de voz ruim distinguindo latência, jitter e perda.\nCOMPARAÇÕES CRÍTICAS:\n- largura de banda x throughput: capacidade teórica x taxa real — confundir as duas muda o cálculo e o gabarito.\n- latência x jitter: latência é o atraso; jitter é a variação do atraso — aplicações de tempo real sofrem mais com jitter.\n- perda x latência alta: a primeira descarta pacotes; a segunda apenas atrasa.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Throughput pode superar a largura de banda.\" — Motivo: a taxa real não excede a capacidade — Versão tecnicamente correta: throughput ≤ largura de banda.\n- Afirmação errada: \"100 MB a 100 Mbps leva 1 s.\" — Motivo: confunde bytes com bits — Versão tecnicamente correta: 800 Mb / 100 Mbps = 8 s.\n- Afirmação errada: \"Jitter e latência são a mesma coisa.\" — Motivo: um é variação, o outro é atraso — Versão tecnicamente correta: o jitter é a variação da latência.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: largura de banda, throughput, latência, RTT, jitter, perda de pacotes.\n- Regras e fórmulas: tempo ≈ tamanho / throughput; 1 byte = 8 bits.\n- Exceções: o throughput real é limitado pelo gargalo do caminho, não só pelo enlace local.\n- Palavras-chave: bps, capacidade, taxa real, atraso, variação.\n- Checklist de domínio: (1) Defino as métricas? (2) Distingo banda de throughput? (3) Calculo tempo? (4) Relaciono jitter e perda?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é largura de banda? (2) E throughput? (3) Quanto tempo levam 10 MB a 10 Mbps? (4) O que é jitter? (5) O que a perda de pacotes pode indicar?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de definir e distinguirá largura de banda, throughput, latência, jitter e perda de pacotes, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) os meios guiados (par trançado UTP/STP, fibra óptica, coaxial); (b) os meios não guiados (Wi-Fi, rádio); (c) características, vantagens e limitações de cada um. POR QUE O CONHECIMENTO É IMPORTANTE: o meio determina banda, alcance, imunidade a interferência e custo; a prova associa meio, categoria e cenário. PRÉ-REQUISITOS: conceito de enlace. OBJETIVOS OBSERVÁVEIS: (1) classificar meios em guiados e não guiados; (2) citar características de cada; (3) associar categorias de par trançado a taxas; (4) escolher o meio para um cenário. COMPETÊNCIAS DESENVOLVIDAS: seleção de meio de transmissão; leitura de especificações. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.1 (enlace); unidade 2.1 (camada física). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: meios guiados conduzem o sinal por um caminho físico. O par trançado UTP (Unshielded Twisted Pair) é barato e fácil de instalar, mas suscetível a interferência; categorias comuns incluem Cat5e (1 Gbps) e Cat6/Cat6a (até 10 Gbps, com limitações de distância). O STP (Shielded Twisted Pair) acrescenta blindagem e é usado em ambientes com alta interferência. A fibra óptica transmite luz e é imune à interferência eletromagnética, com alta banda e longo alcance; o modo monomodo usa laser para longas distâncias e o multimodo usa LED para curtas distâncias. O cabo coaxial foi muito usado em redes antigas e na TV a cabo. Meios não guiados propagam o sinal pelo ar: o Wi-Fi (IEEE 802.11) opera em faixas como 2,4 GHz (maior alcance, mais interferência) e 5 GHz (menor alcance, maior taxa); enlaces de rádio ponto a ponto, micro-ondas e satélite atendem longas distâncias. A escolha equilibra banda, distância, imunidade a interferência, mobilidade e custo.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir meio guiado de não guiado.\n- Nível intermediário: associar categoria/meio a taxa e alcance aproximados.\n- Nível avançado: escolher o meio conforme interferência, distância e mobilidade.\n- Nível especialista: projetar o cabeamento de um campus combinando fibra, par trançado e Wi-Fi.\nCOMPARAÇÕES CRÍTICAS:\n- fibra x par trançado: a fibra tem alta banda e imunidade, mas custo maior; o par trançado é barato e fácil — muda o custo do projeto.\n- UTP x STP: a blindagem do STP reduz interferência em ambientes ruidosos.\n- 2,4 GHz x 5 GHz: o primeiro alcança mais e sofre mais interferência; o segundo é mais rápido e de menor alcance.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Fibra óptica sofre interferência eletromagnética.\" — Motivo: transmite luz — Versão tecnicamente correta: é imune a interferência eletromagnética.\n- Afirmação errada: \"Wi-Fi e rádio são a mesma coisa.\" — Motivo: Wi-Fi é um padrão (802.11) sobre radiofrequência — Versão tecnicamente correta: o rádio é o meio; o Wi-Fi é a tecnologia.\n- Afirmação errada: \"Cat6 sempre entrega 10 Gbps a qualquer distância.\" — Motivo: há limite de distância — Versão tecnicamente correta: a taxa depende do comprimento do cabo.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: UTP, STP, fibra monomodo/multimodo, coaxial, Wi-Fi, rádio.\n- Regras e fórmulas: guiado conduz o sinal; não guiado o irradia.\n- Exceções: a taxa nominal depende da distância e do ambiente.\n- Palavras-chave: par trançado, luz, interferência, alcance, mobilidade.\n- Checklist de domínio: (1) Classifico os meios? (2) Cito características? (3) Associo categorias a taxas? (4) Escolho para um cenário?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é meio guiado? (2) Por que a fibra é imune a interferência? (3) O que diferencia 2,4 GHz de 5 GHz? (4) Quando usar STP? (5) O que limita a taxa do Cat6?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de identificar os principais meios de transmissão e suas características, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as sete camadas do modelo OSI e suas funções; (b) a ordem das camadas; (c) a PDU de cada camada; (d) por que dividir em camadas. POR QUE O CONHECIMENTO É IMPORTANTE: o modelo OSI é referência para localizar funções e diagnosticar falhas; a prova cobra ordem, função e PDU. PRÉ-REQUISITOS: vocabulário de redes (nó, enlace, endereço). OBJETIVOS OBSERVÁVEIS: (1) enumerar as sete camadas; (2) associar função a cada uma; (3) indicar a PDU; (4) explicar o princípio da divisão em camadas. COMPETÊNCIAS DESENVOLVIDAS: organização mental do funcionamento de rede; localização de funções. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (encapsulamento); unidade 2.2 (TCP/IP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o modelo OSI (Open Systems Interconnection), padronizado pela ISO, organiza a comunicação em sete camadas, da mais baixa (física) à mais alta (aplicação). Camada 1 — Física: transmite bits pelo meio, definindo tensões, taxas e características elétricas/ópticas; PDU: bit. Camada 2 — Enlace de dados: entrega nó a nó dentro do mesmo segmento, com endereçamento físico (MAC), detecção de erros e controle de acesso ao meio; PDU: quadro. Camada 3 — Rede: entrega fim a fim entre redes distintas, com roteamento e endereçamento lógico (IP); PDU: pacote. Camada 4 — Transporte: entrega processo a processo, com confiabilidade (TCP) ou não (UDP), controle de fluxo e de congestionamento; PDU: segmento (TCP) ou datagrama (UDP). Camada 5 — Sessão: estabelece, mantém e encerra diálogos entre aplicações. Camada 6 — Apresentação: trata formato, tradução, compressão e criptografia. Camada 7 — Aplicação: interface com o usuário e serviços de rede (HTTP, SMTP, DNS, FTP). Nas camadas 5 a 7 a PDU costuma ser chamada de dados. O modelo permite que cada camada resolva um problema específico e que implementações diferentes interoperem, isolando responsabilidades.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: memorizar a ordem com mnemônicos.\n- Nível intermediário: associar função e PDU a cada camada.\n- Nível avançado: situar protocolos como TLS e ICMP no modelo.\n- Nível especialista: localizar, em um sintoma, a camada mais provável de falha.\nCOMPARAÇÕES CRÍTICAS:\n- enlace x rede: o enlace entrega no mesmo segmento (MAC); a rede entrega entre redes (IP) — muda o endereço usado.\n- transporte x sessão: o transporte garante a entrega fim a fim; a sessão gerencia o diálogo — funções distintas.\n- rede x aplicação: a rede encaminha pacotes; a aplicação interpreta o conteúdo (HTTP, DNS).\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"A camada de transporte endereça hosts.\" — Motivo: ela endereça processos por portas — Versão tecnicamente correta: o endereçamento de host é da camada de rede.\n- Afirmação errada: \"A PDU da camada 3 é o quadro.\" — Motivo: confunde camadas — Versão tecnicamente correta: camada 3 = pacote; camada 2 = quadro.\n- Afirmação errada: \"OSI é um protocolo.\" — Motivo: é um modelo de referência — Versão tecnicamente correta: descreve camadas; protocolos são implementações.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: OSI, sete camadas, PDU, bit, quadro, pacote, segmento.\n- Regras e fórmulas: ordem 1 Física → 7 Aplicação; PDU por camada.\n- Exceções: sessão e apresentação raramente existem como camadas separadas na prática.\n- Palavras-chave: camada, função, PDU, ISO, identificação.\n- Checklist de domínio: (1) Enumero as camadas? (2) Associo funções? (3) Indico PDUs? (4) Explico a divisão?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais as camadas 1, 2 e 3? (2) Qual a PDU da camada 4? (3) O que a camada 6 trata? (4) Por que dividir em camadas? (5) Onde atua o IP?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de enumerar as sete camadas do modelo OSI em ordem, associará a cada uma sua função principal e identificará o tipo de PDU correspondente, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "WO1uGJRqrwI",
                    "titulo": "Curso de Redes - Vídeo 03 - Modelo OSI",
                    "canal": "Bóson Treinamentos",
                    "urlOriginal": "https://www.youtube.com/watch?v=WO1uGJRqrwI",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/WO1uGJRqrwI",
                    "descricao": "Videoaula explicativa sobre o modelo OSI (Open Systems Interconnection), detalhando as sete camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação), suas funções, PDUs (Protocol Data Units) e a relação com equipamentos de rede (hub, switch, roteador). Aborda encapsulamento, comunicação entre camadas e a importância do modelo como referência didática para redes.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              },
              {
                "id": "m2-u2-t1-s2",
                "titulo": "Encapsulamento e desencapsulamento",
                "objetivoAprendizagem": "Aluno explicará o processo de encapsulamento ao enviar dados e de desencapsulamento ao receber, identificando os cabeçalhos adicionados em cada camada.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é encapsulamento; (b) os cabeçalhos adicionados em cada camada; (c) o desencapsulamento; (d) a analogia do envelope. POR QUE O CONHECIMENTO É IMPORTANTE: encapsulamento explica como dados atravessam camadas e onde residem endereços e portas; a prova cobra a ordem e o conteúdo de cada cabeçalho. PRÉ-REQUISITOS: as sete camadas do OSI. OBJETIVOS OBSERVÁVEIS: (1) definir encapsulamento; (2) ordenar a adição de cabeçalhos; (3) descrever o desencapsulamento; (4) localizar portas, IP e MAC. COMPETÊNCIAS DESENVOLVIDAS: leitura de diagramas de pacote; compreensão do fluxo de dados. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (camadas OSI); unidade 2.3 (fluxo HTTP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: encapsulamento é o processo pelo qual, ao ENVIAR, cada camada acrescenta seu próprio cabeçalho (e, às vezes, um trailer) à unidade de dados recebida da camada superior, formando a PDU daquela camada. A ordem de envio é descendente: a aplicação gera os dados; a camada de transporte acrescenta portas e números de sequência, formando o segmento; a camada de rede acrescenta os endereços IP, formando o pacote; a camada de enlace acrescenta os endereços MAC e um código de verificação (FCS), formando o quadro; e a camada física converte tudo em bits no meio. O desencapsulamento é o processo inverso, na recepção: cada camada remove e interpreta SEU cabeçalho e entrega o conteúdo (payload) à camada superior, até a aplicação. A analogia do envelope ajuda: os dados são a carta; cada camada coloca a carta em um novo envelope com seu próprio endereçamento. O encapsulamento é a base da interoperabilidade: cada camada trata apenas da sua parte e ignora os detalhes das demais. Assim, portas identificam processos, IPs identificam hosts e MACs identificam interfaces no enlace.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender a ideia de \"envelope dentro de envelope\".\n- Nível intermediário: ordenar cabeçalhos da aplicação à física.\n- Nível avançado: localizar portas, IP e MAC em uma PDU representada.\n- Nível especialista: analisar uma captura e identificar as camadas de cada campo.\nCOMPARAÇÕES CRÍTICAS:\n- cabeçalho de transporte x de rede: o primeiro traz portas; o segundo, IPs — muda o que se identifica.\n- encapsulamento x desencapsulamento: o primeiro adiciona; o segundo remove — a ordem inversa importa.\n- trailer x cabeçalho: o trailer (como o FCS) vai ao fim do quadro; o cabeçalho ao início.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O endereço MAC identifica o processo.\" — Motivo: MAC identifica a interface no enlace — Versão tecnicamente correta: o processo é identificado pela porta.\n- Afirmação errada: \"Cada camada reescreve os dados da anterior.\" — Motivo: ela os encapsula sem alterar — Versão tecnicamente correta: adiciona cabeçalho e preserva o payload.\n- Afirmação errada: \"Desencapsulamento ocorre no emissor.\" — Motivo: ocorre na recepção — Versão tecnicamente correta: o emissor encapsula; o receptor desencapsula.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: encapsulamento, desencapsulamento, cabeçalho, trailer, payload, PDU.\n- Regras e fórmulas: aplicação → transporte (portas) → rede (IPs) → enlace (MACs) → física (bits).\n- Exceções: alguns protocolos (ex.: TLS) se posicionam entre camadas.\n- Palavras-chave: envelope, porta, IP, MAC, FCS.\n- Checklist de domínio: (1) Defino encapsulamento? (2) Ordeno cabeçalhos? (3) Descrevo o inverso? (4) Localizo porta/IP/MAC?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que cada camada adiciona? (2) Onde ficam as portas? (3) E os endereços IP? (4) E os MACs? (5) O que é desencapsulamento?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o processo de encapsulamento ao enviar dados e de desencapsulamento ao receber, identificando os cabeçalhos adicionados em cada camada, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t1-s3",
                "titulo": "Comunicação entre camadas e entre dispositivos",
                "objetivoAprendizagem": "Aluno distinguirá comunicação vertical (entre camadas do mesmo host) e horizontal (entre camadas equivalentes de hosts diferentes), e identificará quais dispositivos operam em quais camadas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) comunicação vertical (entre camadas); (b) comunicação horizontal (entre hosts); (c) quais dispositivos atuam em quais camadas. POR QUE O CONHECIMENTO É IMPORTANTE: a distinção entre comunicação vertical e horizontal esclarece como as camadas \"conversam\"; a prova cobra a camada de atuação dos equipamentos. PRÉ-REQUISITOS: camadas OSI e encapsulamento. OBJETIVOS OBSERVÁVEIS: (1) definir comunicação vertical; (2) definir comunicação horizontal; (3) associar dispositivos a camadas; (4) explicar a comunicação lógica entre camadas iguais. COMPETÊNCIAS DESENVOLVIDAS: leitura de arquitetura em camadas; identificação de dispositivos. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (OSI e encapsulamento); unidade 1.1 (nós). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a comunicação vertical ocorre DENTRO de um mesmo host, entre camadas adjacentes, por meio de interfaces de serviço: a camada superior solicita um serviço à inferior, que o executa (por exemplo, a aplicação pede ao transporte que entregue dados de forma confiável). A comunicação horizontal é a conversa LÓGICA entre camadas equivalentes de hosts diferentes: a camada de transporte do host A \"fala\" com a de B por meio dos cabeçalhos TCP, embora fisicamente os dados tenham de descer por toda a pilha de A e subir por toda a de B. Ou seja, a comunicação horizontal é conceitual (peer-to-peer lógico), implementada sobre a vertical. Quanto aos dispositivos: repetidor e hub atuam na camada 1 (física); switch atua na camada 2 (enlace); roteador atua na camada 3 (rede); firewalls podem atuar em várias camadas (inspeção de estado nas camadas 3/4, filtragem de aplicação na 7); gateways de aplicação atuam na camada 7. Essa atribuição é didática: equipamentos reais frequentemente combinam funções — um switch de camada 3 roteia, um roteador doméstico faz NAT e firewall, e um firewall pode inspecionar a aplicação.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que camadas do mesmo host trocam serviços.\n- Nível intermediário: distinguir vertical de horizontal e associar dispositivos a camadas.\n- Nível avançado: reconciliar a comunicação horizontal lógica com o percurso físico vertical.\n- Nível especialista: justificar por qual camada um equipamento deve atuar conforme o requisito de filtragem.\nCOMPARAÇÕES CRÍTICAS:\n- vertical x horizontal: vertical é dentro do host; horizontal é entre hosts (lógica) — confundir gera erro.\n- switch x roteador: o switch decide por MAC (camada 2); o roteador por IP (camada 3) — muda o domínio de atuação.\n- hub x switch: o hub repete sem inteligência (camada 1); o switch aprende MACs (camada 2).\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"A comunicação horizontal é física direta entre camadas iguais.\" — Motivo: os dados percorrem a pilha — Versão tecnicamente correta: a comunicação horizontal é lógica.\n- Afirmação errada: \"Roteador opera na camada 2.\" — Motivo: decide por IP — Versão tecnicamente correta: opera na camada 3.\n- Afirmação errada: \"Todo firewall atua só na camada 3.\" — Motivo: há firewalls de aplicação — Versão tecnicamente correta: pode atuar em várias camadas.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: comunicação vertical, horizontal, interface de serviço, hub, switch, roteador, firewall, gateway.\n- Regras e fórmulas: hub[1], switch[2], roteador[3], firewall[3/4/7], gateway[7].\n- Exceções: equipamentos reais combinam funções de várias camadas.\n- Palavras-chave: serviço, par lógico, camada, dispositivo, encapsulamento.\n- Checklist de domínio: (1) Defino vertical? (2) Defino horizontal? (3) Associo dispositivos? (4) Explico a comunicação lógica?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é comunicação vertical? (2) E horizontal? (3) Em que camada atua o switch? (4) E o roteador? (5) Um firewall pode atuar na camada 7?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir comunicação vertical (entre camadas do mesmo host) e horizontal (entre camadas equivalentes de hosts diferentes), e identificará quais dispositivos operam em quais camadas, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as quatro camadas do modelo TCP/IP; (b) protocolos típicos de cada uma; (c) a correspondência aproximada com o OSI; (d) por que o TCP/IP é o modelo prático. POR QUE O CONHECIMENTO É IMPORTANTE: a Internet real usa o modelo TCP/IP; a prova cobra a associação entre camadas e protocolos. PRÉ-REQUISITOS: modelo OSI. OBJETIVOS OBSERVÁVEIS: (1) enumerar as quatro camadas; (2) associar protocolos; (3) comparar com o OSI; (4) explicar a ausência de sessão/apresentação. COMPETÊNCIAS DESENVOLVIDAS: organização do conhecimento de protocolos. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (OSI); unidade 2.2 (comparação); unidade 3 (protocolos). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o modelo TCP/IP (também chamado DoD) tem quatro camadas. Acesso à rede (enlace): cuida do meio e do enlace, reunindo funções das camadas 1 e 2 do OSI, com protocolos como Ethernet, Wi-Fi e PPP. Internet: trata o endereçamento lógico e o roteamento entre redes, equivalente à camada 3 do OSI, com IP (v4 e v6) e ICMP. Transporte: entrega processo a processo, equivalente à camada 4 do OSI, com TCP e UDP. Aplicação: reúne as camadas 5, 6 e 7 do OSI, abrigando HTTP, HTTPS, DNS, SMTP, FTP, SSH, DHCP e TLS. A diferença estrutural mais cobrada é que o TCP/IP NÃO separa sessão e apresentação: essas funções são incorporadas pela aplicação ou por bibliotecas. Outra característica é a robustez: o modelo foi projetado para funcionar sobre redes heterogêneas, delegando a confiabilidade ao TCP nas pontas, e não à rede. O OSI permanece como referência didática e de projeto; o TCP/IP é o que efetivamente opera na Internet.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: memorizar as quatro camadas.\n- Nível intermediário: associar protocolos a cada camada.\n- Nível avançado: comparar com o OSI e explicar as fusões (5/6/7 → Aplicação).\n- Nível especialista: situar protocolos transversais (TLS, ICMP) no modelo.\nCOMPARAÇÕES CRÍTICAS:\n- OSI x TCP/IP: 7 camadas x 4; sessão e apresentação colapsam em Aplicação — a contagem muda o gabarito.\n- Internet x Transporte: IP endereça hosts; TCP/UDP endereçam processos.\n- Acesso à rede x Internet: o primeiro cobre enlace/físico; o segundo cobre roteamento.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O TCP/IP tem camada de sessão.\" — Motivo: o modelo não a separa — Versão tecnicamente correta: sessão/apresentação são absorvidas pela Aplicação.\n- Afirmação errada: \"ARP pertence à camada de transporte.\" — Motivo: atua no enlace/Internet — Versão tecnicamente correta: resolve IP em MAC no acesso à rede.\n- Afirmação errada: \"O TCP/IP exige rede confiável.\" — Motivo: a confiabilidade fica nas pontas — Versão tecnicamente correta: a rede pode ser simples; o TCP garante a entrega.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: TCP/IP, acesso à rede, Internet, transporte, aplicação, protocolos.\n- Regras e fórmulas: Acesso=1/2; Internet=3; Transporte=4; Aplicação=5/6/7 (OSI).\n- Exceções: protocolos como TLS situam-se entre transporte e aplicação.\n- Palavras-chave: DoD, IP, TCP, UDP, HTTP, fusão de camadas.\n- Checklist de domínio: (1) Enumero as camadas? (2) Associo protocolos? (3) Comparo com OSI? (4) Explico a fusão?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais as quatro camadas? (2) Cite protocolos da camada de aplicação. (3) Quais camadas do OSI a Aplicação reúne? (4) Onde atua o IP? (5) Por que não há camada de sessão?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de enumerar as quatro camadas do modelo TCP/IP e associará a cada uma protocolos típicos, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "bH29oltn8Cw",
                    "titulo": "Curso de redes - Vídeo 04 - Introdução ao TCP/IP",
                    "canal": "Bóson Treinamentos",
                    "urlOriginal": "https://www.youtube.com/watch?v=bH29oltn8Cw",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/bH29oltn8Cw",
                    "descricao": "Videoaula introdutória sobre o modelo TCP/IP, explicando as quatro camadas (Acesso à Rede, Internet, Transporte, Aplicação) e seus protocolos associados (Ethernet, IP, ICMP, ARP, TCP, UDP, HTTP, DNS, DHCP). Compara com o modelo OSI, aborda encapsulamento no TCP/IP e a correspondência aproximada entre as camadas dos dois modelos.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              },
              {
                "id": "m2-u2-t2-s2",
                "titulo": "Protocolos e serviços associados a cada camada",
                "objetivoAprendizagem": "Aluno associará protocolos e serviços às camadas do TCP/IP e explicará a diferença entre protocolo e serviço.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a diferença entre protocolo, serviço, porta e aplicação; (b) o que é uma porta e sua faixa; (c) a relação entre camadas; (d) exemplos de associação. POR QUE O CONHECIMENTO É IMPORTANTE: a prova distingue com frequência esses quatro conceitos próximos; confundi-los altera a resposta. PRÉ-REQUISITOS: camadas TCP/IP. OBJETIVOS OBSERVÁVEIS: (1) definir protocolo; (2) definir serviço; (3) definir porta; (4) definir aplicação e relacioná-los. COMPETÊNCIAS DESENVOLVIDAS: precisão conceitual; leitura de configuração de serviços. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1 (camadas); unidade 3 (protocolos e portas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: protocolo é o conjunto de REGRAS que define formato, sequência de mensagens e ações da comunicação (HTTP, TCP, IP). Serviço é a CAPACIDADE que uma camada oferece à superior — por exemplo, o transporte oferece à aplicação uma entrega confiável e ordenada (através do TCP). Porta é um NÚMERO de 16 bits (0 a 65535) que identifica o processo/aplicação dentro de um host, permitindo que várias aplicações compartilhem o mesmo endereço IP; as portas bem conhecidas (0 a 1023) são atribuídas a serviços padronizados, como 80 (HTTP), 443 (HTTPS), 53 (DNS), 25/587 (SMTP), 22 (SSH). Aplicação é o PROGRAMA que usa a rede — navegador, servidor web, cliente de e-mail. A relação é hierárquica: uma camada PRESTA serviço à superior e USA o serviço da inferior. Exemplo completo: o serviço de transferência de hipertexto é implementado pelo protocolo HTTP, que usa a porta 80 (ou 443 quando sob TLS) e é consumido por uma aplicação (navegador ou servidor web). Guardar essas quatro noções separadas é decisivo em prova.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir \"regra\" (protocolo) de \"programa\" (aplicação).\n- Nível intermediário: associar protocolo, porta e serviço em exemplos.\n- Nível avançado: explicar por que a porta identifica o processo e não o host.\n- Nível especialista: diagnosticar conflito de portas e serviços em um servidor.\nCOMPARAÇÕES CRÍTICAS:\n- protocolo x serviço: regras x capacidade oferecida à camada superior — trocar os termos inverte o gabarito.\n- porta x endereço IP: a porta identifica o processo; o IP identifica o host.\n- porta bem conhecida x efêmera: a primeira é padronizada (ex.: 80); a efêmera é escolhida pelo cliente para a conexão.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"HTTP é uma porta.\" — Motivo: HTTP é protocolo; a porta é 80 — Versão tecnicamente correta: o protocolo usa a porta.\n- Afirmação errada: \"A porta identifica o computador.\" — Motivo: identifica o processo — Versão tecnicamente correta: o IP identifica o host.\n- Afirmação errada: \"Dentro de um host, dois serviços podem usar a mesma porta TCP ao mesmo tempo.\" — Motivo: haveria conflito — Versão tecnicamente correta: a mesma porta não pode ser usada por dois serviços no mesmo protocolo.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: protocolo, serviço, porta, aplicação, porta bem conhecida, porta efêmera.\n- Regras e fórmulas: protocolo = regras; serviço = capacidade; porta = identificador de processo (0–65535).\n- Exceções: serviços podem usar portas não padrão, se configurados.\n- Palavras-chave: regra, capacidade, identificador, programa, camada.\n- Checklist de domínio: (1) Defino protocolo? (2) Defino serviço? (3) Defino porta? (4) Relaciono com a aplicação?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é protocolo? (2) O que é serviço? (3) O que uma porta identifica? (4) Qual a faixa de portas? (5) Qual porta o HTTP usa por padrão?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de associar protocolos e serviços às camadas do TCP/IP e explicará a diferença entre protocolo e serviço, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t2-s3",
                "titulo": "Limitações da correspondência entre camadas OSI e TCP/IP",
                "objetivoAprendizagem": "Aluno reconhecerá que a correspondência entre camadas OSI e TCP/IP é aproximada e identificará casos em que a equivalência não é direta.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) por que a correspondência OSI↔TCP/IP é aproximada; (b) casos em que a equivalência não é direta; (c) como usar a correspondência sem errar na classificação. POR QUE O CONHECIMENTO É IMPORTANTE: a prova pode cobrar a função de um protocolo, não sua camada exata; assumir correspondência rígida gera erro. PRÉ-REQUISITOS: modelos OSI e TCP/IP. OBJETIVOS OBSERVÁVEIS: (1) explicar que a correspondência é didática; (2) citar protocolos que \"atravessam\" camadas; (3) evitar classificações rígidas; (4) priorizar a função. COMPETÊNCIAS DESENVOLVIDAS: análise crítica de modelos; precisão de classificação. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.1/2.2 (modelos); unidade 3.4 (TLS); unidade 3.3 (ARP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a correspondência entre OSI e TCP/IP é uma simplificação didática, não uma equivalência biunívoca. Primeiro, a contagem difere: o OSI tem sete camadas e o TCP/IP quatro, de modo que sessão, apresentação e aplicação do OSI colapsam na camada de aplicação do TCP/IP. Segundo, alguns protocolos não se encaixam em uma única camada: o ARP opera entre o enlace e a rede (resolve IP em MAC); o ICMP é integrado ao IP, embora transporte mensagens de controle; e o TLS funciona entre o transporte e a aplicação, protegendo protocolos como HTTP. Terceiro, o TCP incorpora mecanismos (como o controle de congestionamento) que o modelo OSI não detalha na camada de transporte, e o IP real depende de funções auxiliares. Quarto, algumas tecnologias operam deliberadamente \"entre\" camadas (por exemplo, MPLS e certos túneis de VPN). Por isso, a postura correta é usar a correspondência como ferramenta de organização e, em prova, priorizar a FUNÇÃO do protocolo e o problema que ele resolve, em vez de decorar uma camada exata que pode variar com a convenção adotada.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer que os modelos têm contagens diferentes.\n- Nível intermediário: apontar protocolos que não se encaixam limpidamente.\n- Nível avançado: explicar por que TLS e ICMP resistem a uma classificação rígida.\n- Nível especialista: argumentar, em uma questão, pela função do protocolo em vez de sua camada.\nCOMPARAÇÕES CRÍTICAS:\n- correspondência exata x aproximada: tratá-la como exata gera erro de classificação.\n- função x camada: a primeira é estável; a segunda varia com a convenção — em prova, a função é mais segura.\n- protocolo de camada única x transversal: TLS e ARP não se encaixam em uma só.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Cada protocolo pertence a exatamente uma camada.\" — Motivo: vários atravessam fronteiras — Versão tecnicamente correta: a classificação é aproximada.\n- Afirmação errada: \"TLS é camada de transporte.\" — Motivo: atua entre transporte e aplicação — Versão tecnicamente correta: protege a aplicação sobre o transporte.\n- Afirmação errada: \"ARP é puramente camada 3.\" — Motivo: resolve endereços de enlace — Versão tecnicamente correta: opera entre enlace e rede.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: correspondência aproximada, sessão/apresentação colapsadas, protocolos transversais (TLS, ARP, ICMP).\n- Regras e fórmulas: 5+6+7 (OSI) → Aplicação (TCP/IP); classificação é didática.\n- Exceções: MPLS e túneis operam \"entre\" camadas.\n- Palavras-chave: modelo, camada, função, transversal, convenção.\n- Checklist de domínio: (1) Explico que é aproximada? (2) Cito protocolos transversais? (3) Evito classificação rígida? (4) Priorizo a função?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Por que a correspondência é aproximada? (2) O que ocorre com sessão e apresentação? (3) Dê um exemplo de protocolo transversal. (4) Onde o TLS atua? (5) Em prova, o que priorizar?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de reconhecer que a correspondência entre camadas OSI e TCP/IP é aproximada e identificará casos em que a equivalência não é direta, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o fluxo completo de uma requisição HTTP, do nome à resposta; (b) o papel do DNS, do TCP e do TLS; (c) o encapsulamento em cada etapa. POR QUE O CONHECIMENTO É IMPORTANTE: integrar DNS, TCP, TLS e HTTP em um fluxo é a aplicação prática dos modelos; a prova cobra a ordem das etapas. PRÉ-REQUISITOS: camadas, encapsulamento, DNS, TCP, TLS, HTTP. OBJETIVOS OBSERVÁVEIS: (1) ordenar as etapas; (2) associar cada etapa a uma camada/protocolo; (3) descrever o handshake TCP; (4) explicar o encapsulamento. COMPETÊNCIAS DESENVOLVIDAS: raciocínio integrado; leitura de fluxo de rede. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.2 (modelos); unidade 3.2 (DNS/HTTP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o fluxo simplificado de uma requisição HTTPS é: (1) o usuário digita um nome; (2) o navegador consulta o cache DNS local e, se não houver resposta, envia uma consulta ao resolvedor configurado, obtendo o endereço IP; (3) abre-se uma conexão TCP na porta 443, com o three-way handshake (SYN, SYN-ACK, ACK); (4) ocorre a negociação TLS, com verificação do certificado e acordo de chaves; (5) o navegador envia a requisição HTTP GET pelo túnel cifrado; (6) cada camada encapsula os dados — HTTP sobre TLS sobre TCP (segmento com as portas) sobre IP (pacote com os IPs) sobre Ethernet (quadro com os MACs) até os bits; (7) na rede, roteadores encaminham pelo IP e switches pelo MAC; (8) o servidor desencapsula até a aplicação, processa e responde; (9) a resposta percorre o caminho inverso; (10) a conexão é encerrada ou mantida para reutilização. Esse único fluxo exercita DNS, TCP, TLS, HTTP e o modelo de camadas — por isso é um excelente exercício de integração. A ordem importa: sem resolver o nome não há IP; sem conexão TCP não há TLS; sem TLS não há HTTPS.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: narrar as etapas em linguagem simples.\n- Nível intermediário: associar cada etapa a um protocolo e a uma camada.\n- Nível avançado: situar o TLS antes do HTTP e explicar o three-way handshake.\n- Nível especialista: identificar, dado um sintoma, em qual etapa o fluxo travou.\nCOMPARAÇÕES CRÍTICAS:\n- HTTP x HTTPS: o segundo acrescenta a etapa TLS — muda portas (80 x 443) e segurança.\n- handshake TCP x handshake TLS: o primeiro estabelece a conexão; o segundo, o canal cifrado.\n- DNS x conexão: o DNS resolve o nome antes de haver qualquer conexão TCP.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O TLS vem antes do TCP.\" — Motivo: o TLS roda sobre o TCP — Versão tecnicamente correta: primeiro TCP, depois TLS, depois HTTP.\n- Afirmação errada: \"O DNS usa o mesmo handshake do TCP.\" — Motivo: o DNS costuma usar UDP (consultas) — Versão tecnicamente correta: não há three-way handshake de TCP por padrão no DNS.\n- Afirmação errada: \"A ordem das etapas não afeta o resultado.\" — Motivo: cada etapa depende da anterior — Versão tecnicamente correta: a sequência é determinante.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: resolução DNS, three-way handshake, handshake TLS, GET, encapsulamento, keep-alive.\n- Regras e fórmulas: nome → IP → TCP → TLS → HTTP → dados → resposta.\n- Exceções: cache DNS e keep-alive podem encurtar etapas.\n- Palavras-chave: fluxo, porta 443, certificado, SYN/ACK, camada.\n- Checklist de domínio: (1) Ordeno as etapas? (2) Associo protocolos? (3) Descrevo handshakes? (4) Explico o encapsulamento?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual a primeira etapa? (2) Em que porta a conexão é aberta no HTTPS? (3) O que o three-way handshake estabelece? (4) Quando o TLS entra? (5) Como cada camada encapsula?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de descrever, camada por camada, o fluxo completo de uma requisição HTTP de um navegador a um servidor web, incluindo resolução DNS, estabelecimento TCP e encapsulamento, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t3-s2",
                "titulo": "Etapas e pontos de falha",
                "objetivoAprendizagem": "Aluno identificará, em um fluxo completo, em qual etapa ocorre cada função e quais sintomas indicam falha em cada etapa.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) quais funções ocorrem em cada etapa do fluxo; (b) os sintomas de falha em cada etapa; (c) como isolar a etapa problemática. POR QUE O CONHECIMENTO É IMPORTANTE: identificar a etapa correta evita \"chutes\" no diagnóstico; a prova cobra a associação sintoma-etapa. PRÉ-REQUISITOS: fluxo da requisição HTTP. OBJETIVOS OBSERVÁVEIS: (1) associar função e etapa; (2) reconhecer mensagens de erro; (3) isolar a etapa falha; (4) ordenar o diagnóstico. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico estruturado; leitura de mensagens de erro. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.3 (fluxo HTTP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: cada etapa do fluxo tem funções e falhas características. DNS: converte nome em IP; falhas aparecem como \"não foi possível resolver o nome do host\" ou \"NXDOMAIN\". TCP: estabelece a conexão e garante entrega; falhas aparecem como \"connection timed out\" (sem resposta) ou \"connection refused\" (porta fechada). TLS: cifra e autentica; falhas aparecem como certificado inválido ou expirado. HTTP: processa a requisição; erros aparecem como códigos de status (404 recurso inexistente, 500 erro do servidor, 503 serviço indisponível). Roteamento: entrega os pacotes entre redes; falhas aparecem como \"destination net unreachable\" ou \"TTL expired\". Enlace/físico: transporta bits; a falha é a ausência de link. A competência central é ISOLAR a etapa que falhou ANTES de culpar a aplicação: se o ping ao IP funciona mas o nome não resolve, o problema é DNS; se o nome resolve mas a conexão é recusada, o problema é a porta/serviço; se a conexão se estabelece mas o HTTP retorna 500, o problema é a aplicação. Essa sequência é a base do diagnóstico por camadas (unidade 5.4).\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a mensagem de falha de DNS.\n- Nível intermediário: associar cada mensagem à etapa correspondente.\n- Nível avançado: ordenar os testes para isolar a etapa rapidamente.\n- Nível especialista: distinguir \"connection refused\" de \"connection timed out\" quanto à causa.\nCOMPARAÇÕES CRÍTICAS:\n- conexão recusada x expirada: a primeira indica porta fechada; a segunda, ausência de resposta (firewall DROP, host inacessível).\n- falha de DNS x falha de roteamento: a primeira ocorre antes de qualquer conexão; a segunda, na entrega dos pacotes.\n- erro 4xx x 5xx: o primeiro é do cliente; o segundo, do servidor — muda a responsabilidade.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Connection refused significa que a rede caiu.\" — Motivo: o pacote chegou e foi recusado — Versão tecnicamente correta: o serviço/porta não está aceitando conexões.\n- Afirmação errada: \"404 é erro de rede.\" — Motivo: é resposta da aplicação — Versão tecnicamente correta: o servidor respondeu que o recurso não existe.\n- Afirmação errada: \"Se o ping falha, o site está fora.\" — Motivo: o ICMP pode estar bloqueado — Versão tecnicamente correta: testar por outro caminho antes de concluir.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: etapa, função, sintoma, NXDOMAIN, connection refused, timed out, 4xx/5xx.\n- Regras e fórmulas: isolar a etapa antes de culpar a aplicação.\n- Exceções: ICMP bloqueado faz o ping falhar mesmo com TCP/UDP funcionando.\n- Palavras-chave: DNS, TCP, TLS, HTTP, roteamento, enlace.\n- Checklist de domínio: (1) Associo função e etapa? (2) Reconheço mensagens? (3) Isolo a etapa? (4) Ordeno o diagnóstico?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual mensagem indica falha de DNS? (2) O que significa connection refused? (3) E connection timed out? (4) Qual código é erro do servidor? (5) Como isolar a etapa?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de identificar, em um fluxo completo, em qual etapa ocorre cada função e quais sintomas indicam falha em cada etapa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u2-t3-s3",
                "titulo": "Conexões persistentes, cache e otimização",
                "objetivoAprendizagem": "Aluno explicará HTTP keep-alive, cache e compressão e seu impacto no desempenho.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é keep-alive; (b) como funciona o cache HTTP; (c) o papel da compressão; (d) HTTP/2 e HTTP/3; (e) limitações. POR QUE O CONHECIMENTO É IMPORTANTE: essas técnicas explicam por que a web é rápida e quando o cache causa problemas; a prova cobra seus efeitos. PRÉ-REQUISITOS: HTTP/HTTPS e TCP. OBJETIVOS OBSERVÁVEIS: (1) explicar conexões persistentes; (2) descrever o cache e seus cabeçalhos; (3) citar compressão; (4) reconhecer limitações. COMPETÊNCIAS DESENVOLVIDAS: análise de desempenho web; configuração de cache. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (HTTP); unidade 1.3 (métricas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o HTTP/1.0 abria uma conexão TCP nova para cada recurso, repetindo o handshake. O HTTP/1.1 introduziu conexões persistentes (keep-alive), reutilizando a mesma conexão TCP para várias requisições, o que reduz a latência. O cache HTTP armazena respostas no cliente ou em proxies intermediários, controlado por cabeçalhos como Cache-Control, ETag, Last-Modified e Expires: se o recurso está válido no cache, evita-se ir ao servidor, reduzindo latência e carga. A compressão (por exemplo, gzip ou brotli) reduz o tamanho do corpo transferido. Já o HTTP/2 multiplexa vários fluxos sobre uma única conexão, e o HTTP/3 baseia-se em QUIC (sobre UDP) para reduzir o tempo de estabelecimento. As limitações são reais: cache mal configurado serve conteúdo desatualizado; o keep-alive consome recursos do servidor; compactar conteúdo já compactado (imagens) desperdiça processamento; e versões mais novas exigem suporte de ambos os lados. O desempenho resulta da combinação equilibrada dessas técnicas, não de uma isolada.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender por que reutilizar conexão é mais rápido.\n- Nível intermediário: explicar cache e seus cabeçalhos.\n- Nível avançado: relacionar HTTP/2 (multiplexação) e HTTP/3 (QUIC).\n- Nível especialista: decidir a política de cache adequada a conteúdos dinâmicos x estáticos.\nCOMPARAÇÕES CRÍTICAS:\n- HTTP/1.0 x 1.1: sem e com keep-alive — muda o overhead de handshake.\n- cache x ausência de cache: o cache acelera, mas pode servir conteúdo velho — a política decide.\n- HTTP/2 x HTTP/3: o segundo usa QUIC/UDP e reduz o estabelecimento.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Cache é sempre benéfico.\" — Motivo: pode servir conteúdo desatualizado — Versão tecnicamente correta: depende da política de validade.\n- Afirmação errada: \"Compressão ajuda em qualquer arquivo.\" — Motivo: conteúdo já comprimido não reduz — Versão tecnicamente correta: comprimir apenas quando há ganho.\n- Afirmação errada: \"O keep-alive elimina a necessidade de TCP.\" — Motivo: apenas reutiliza a conexão — Versão tecnicamente correta: o TCP continua sendo a base.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: keep-alive, cache, Cache-Control, ETag, compressão, HTTP/2, HTTP/3, QUIC.\n- Regras e fórmulas: menos handshakes + cache válido + compressão = menor latência.\n- Exceções: cache mal configurado prejudica.\n- Palavras-chave: persistência, validade, multiplexação, UDP, desempenho.\n- Checklist de domínio: (1) Explico keep-alive? (2) Descrevo cache? (3) Cito compressão? (4) Reconheço limitações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o keep-alive evita? (2) Que cabeçalho controla o cache? (3) O que a compressão reduz? (4) O que caracteriza HTTP/3? (5) Qual o risco de cache mal configurado?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar HTTP keep-alive, cache e compressão e seu impacto no desempenho, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) características do IPv4; (b) características do IPv6; (c) a motivação da transição; (d) os mecanismos de migração. POR QUE O CONHECIMENTO É IMPORTANTE: a transição IPv4→IPv6 é tema recorrente; a prova compara tamanho, formato e recursos. PRÉ-REQUISITOS: camada de rede; endereçamento básico. OBJETIVOS OBSERVÁVEIS: (1) comparar tamanho e notação; (2) explicar o esgotamento do IPv4; (3) citar recursos do IPv6; (4) descrever dual stack, túneis e tradução. COMPETÊNCIAS DESENVOLVIDAS: comparação de protocolos; análise de transição tecnológica. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.4 (IPv6); unidade 3.3 (ARP/NDP); unidade 4.1 (estrutura IPv4). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o IPv4 usa endereços de 32 bits, escritos em notação decimal pontuada (por exemplo, 192.168.1.10), o que totaliza cerca de 4,3 bilhões de endereços; esse número se esgotou, motivando a transição. Seu cabeçalho tem tamanho mínimo de 20 bytes e inclui campos como TTL, protocolo, checksum e fragmentação. O IPv6 usa 128 bits, escritos em notação hexadecimal separada por dois-pontos (por exemplo, 2001:db8::1), com espaço de endereçamento praticamente inesgotável. Seu cabeçalho é fixo em 40 bytes, sem checksum (delegado a camadas superiores) e sem fragmentação pelos roteadores (apenas pela origem), com extensões opcionais. O IPv6 incorpora o IPsec de forma nativa (com uso opcional), substitui o ARP pelo Neighbor Discovery (NDP) e oferece autoconfiguração sem estado (SLAAC). A migração ocorre por três estratégias: pilha dupla (dual stack), em que o dispositivo suporta ambos os protocolos; túneis (transportar IPv6 sobre IPv4 ou vice-versa); e tradução (converter entre eles, como NAT64/DNS64). A coexistência é, na prática, o cenário predominante.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: comparar 32 x 128 bits e as notações.\n- Nível intermediário: associar recursos do IPv6 (NDP, SLAAC, cabeçalho simplificado).\n- Nível avançado: explicar os mecanismos de transição e quando usar cada um.\n- Nível especialista: analisar os impactos de escolher tradução em vez de pilha dupla.\nCOMPARAÇÕES CRÍTICAS:\n- IPv4 x IPv6: 32 x 128 bits; decimal x hexadecimal; com x sem checksum de cabeçalho — muda formato e cálculo.\n- ARP x NDP: o IPv6 substitui ARP por Neighbor Discovery sobre ICMPv6.\n- dual stack x tradução: a primeira preserva o fim a fim; a segunda introduz conversão e possíveis perdas de função.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"IPv6 é o IPv4 com mais bits, sem outras mudanças.\" — Motivo: mudam cabeçalho, descoberta e autoconfiguração — Versão tecnicamente correta: há diferenças estruturais.\n- Afirmação errada: \"IPv6 usa ARP.\" — Motivo: ARP é do IPv4 — Versão tecnicamente correta: usa NDP sobre ICMPv6.\n- Afirmação errada: \"A transição exigiu desligar o IPv4.\" — Motivo: a coexistência é possível — Versão tecnicamente correta: usa-se pilha dupla, túneis e tradução.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: IPv4 (32 bits), IPv6 (128 bits), dual stack, túnel, NAT64/DNS64, NDP, SLAAC.\n- Regras e fórmulas: 2^32 x 2^128 endereços; cabeçalho IPv6 fixo em 40 bytes.\n- Exceções: o IPsec é nativo no IPv6, mas seu uso é opcional.\n- Palavras-chave: esgotamento, hexadecimal, cabeçalho, transição, coexistência.\n- Checklist de domínio: (1) Comparo tamanho? (2) Explico o esgotamento? (3) Cito recursos? (4) Descrevo a transição?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantos bits tem cada endereço? (2) Por que o IPv4 se esgotou? (3) O que substitui o ARP no IPv6? (4) Cite dois mecanismos de transição. (5) O IPv6 tem checksum de cabeçalho?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de comparar IPv4 e IPv6 quanto a tamanho de endereço, formato, tipos e motivação da transição, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t1-s2",
                "titulo": "TCP: confiabilidade, fluxo e congestionamento",
                "objetivoAprendizagem": "Aluno explicará os mecanismos de confiabilidade do TCP: sequência, ACK, retransmissão, controle de fluxo e de congestionamento, e three-way handshake.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que torna o TCP confiável; (b) o three-way handshake; (c) controle de fluxo e de congestionamento; (d) encerramento da conexão. POR QUE O CONHECIMENTO É IMPORTANTE: a confiabilidade do TCP sustenta HTTP, e-mail e transferências; a prova cobra os mecanismos e o handshake. PRÉ-REQUISITOS: camada de transporte; conceito de pacote. OBJETIVOS OBSERVÁVEIS: (1) descrever o handshake; (2) explicar sequência e ACK; (3) diferenciar fluxo de congestionamento; (4) descrever o encerramento. COMPETÊNCIAS DESENVOLVIDAS: análise de protocolo; leitura de diagramas de conexão. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (UDP); unidade 3.2 (HTTP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o TCP (Transmission Control Protocol) é orientado à conexão e confiável, garantindo entrega ordenada e sem duplicação. Seus mecanismos incluem: (a) three-way handshake — o cliente envia SYN, o servidor responde SYN-ACK e o cliente confirma com ACK, sincronizando os números de sequência; (b) números de sequência e ACK — cada byte é numerado e o receptor confirma o próximo byte esperado; (c) retransmissão — se o ACK não chega dentro do tempo (RTO), o segmento é reenviado; (d) controle de fluxo — o receptor anuncia uma janela (rwnd) para não ser sobrecarregado; (e) controle de congestionamento — o emissor ajusta a janela de congestionamento (cwnd) com algoritmos como slow start e congestion avoidance, reagindo a perdas; (f) encerramento — via FIN/ACK ou RST. O TCP é usado por HTTP, HTTPS, SMTP, FTP e SSH. O custo da confiabilidade é o overhead (cabeçalho maior) e a latência adicional dos handshakes e retransmissões; por isso aplicações sensíveis a atraso podem preferir UDP. A escolha do protocolo de transporte é uma decisão de projeto baseada no requisito.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o TCP confirma o que chega.\n- Nível intermediário: descrever sequência/ACK e retransmissão.\n- Nível avançado: distinguir controle de fluxo de controle de congestionamento.\n- Nível especialista: explicar como o TCP reage a perdas e por que isso afeta o desempenho.\nCOMPARAÇÕES CRÍTICAS:\n- fluxo x congestionamento: o fluxo protege o RECEPTOR (rwnd); o congestionamento protege a REDE (cwnd) — confundir inverte o gabarito.\n- handshake de abertura x encerramento: SYN/SYN-ACK/ACK abre; FIN/ACK fecha.\n- confiabilidade x atraso: mais confiabilidade costuma custar mais latência.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O TCP garante que os dados cheguem sem atraso.\" — Motivo: garante entrega, não prazo — Versão tecnicamente correta: a entrega é garantida, mas o tempo não.\n- Afirmação errada: \"Controle de fluxo e de congestionamento são o mesmo.\" — Motivo: um protege o receptor; o outro, a rede.\n- Afirmação errada: \"O TCP não retransmite.\" — Motivo: a retransmissão é central — Versão tecnicamente correta: reenvia segmentos não confirmados.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: TCP, three-way handshake, sequência, ACK, retransmissão, rwnd, cwnd, FIN.\n- Regras e fórmulas: SYN → SYN-ACK → ACK; entrega ordenada e sem duplicação.\n- Exceções: aplicações sensíveis a atraso podem preferir UDP.\n- Palavras-chave: conexão, confiabilidade, janela, congestionamento, retransmissão.\n- Checklist de domínio: (1) Descrevo o handshake? (2) Explico sequência/ACK? (3) Diferencio fluxo de congestionamento? (4) Descrevo o encerramento?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais mensagens formam o handshake? (2) O que o ACK confirma? (3) O que é rwnd? (4) E cwnd? (5) Cite protocolos que usam TCP.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar os mecanismos de confiabilidade do TCP: sequência, ACK, retransmissão, controle de fluxo e de congestionamento, e three-way handshake, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t1-s3",
                "titulo": "UDP: datagramas sem conexão",
                "objetivoAprendizagem": "Aluno explicará as características do UDP, suas vantagens e limitações, e identificará aplicações típicas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as características do UDP; (b) seu cabeçalho mínimo; (c) vantagens e limitações; (d) aplicações típicas. POR QUE O CONHECIMENTO É IMPORTANTE: saber quando o UDP é preferível ao TCP é decisão recorrente; a prova cobra a comparação e os exemplos. PRÉ-REQUISITOS: camada de transporte. OBJETIVOS OBSERVÁVEIS: (1) definir o UDP; (2) citar vantagens; (3) reconhecer limitações; (4) associar aplicações. COMPETÊNCIAS DESENVOLVIDAS: escolha de protocolo de transporte. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.1 (TCP); unidade 3.2 (DNS/DHCP); unidade 1.2 (comutação). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o UDP (User Datagram Protocol) é um protocolo de transporte sem conexão e não confiável: envia datagramas independentes, sem handshake, sem confirmação (ACK), sem retransmissão, sem controle de fluxo/congestionamento e sem garantia de ordem. Seu cabeçalho é mínimo, com 8 bytes: portas de origem e destino, comprimento e checksum. Isso traz vantagens: baixa latência, overhead reduzido e suporte a broadcast e multicast (que o TCP não oferece). As limitações decorrem da ausência de garantias — datagramas podem perder-se, duplicar-se ou chegar fora de ordem, e a aplicação precisa tratar isso se a confiabilidade for necessária. O UDP é usado por DNS (consultas), DHCP, VoIP, streaming, jogos online e pelo QUIC, que reimplementa a confiabilidade sobre UDP. A escolha entre TCP e UDP deriva do requisito: confiabilidade e ordem pedem TCP; latência mínima, overhead baixo ou broadcast/multicast pedem UDP. Não há protocolo \"melhor\" em absoluto — há adequação ao problema.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o UDP \"dispara\" sem confirmar.\n- Nível intermediário: comparar overhead e latência com o TCP.\n- Nível avançado: explicar por que a confiabilidade fica na aplicação (ex.: QUIC).\n- Nível especialista: decidir o transporte para um serviço em tempo real justificando tecnicamente.\nCOMPARAÇÕES CRÍTICAS:\n- TCP x UDP: confiável e ordenado x rápido e sem garantias — muda a escolha por aplicação.\n- header TCP x header UDP: o UDP tem cabeçalho mínimo (8 bytes); o TCP, maior.\n- UDP x QUIC: o QUIC fornece confiabilidade e segurança SOBRE o UDP.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O UDP é pior que o TCP.\" — Motivo: depende do requisito — Versão tecnicamente correta: para tempo real, o UDP é preferível.\n- Afirmação errada: \"O UDP garante ordem.\" — Motivo: não há ordenação — Versão tecnicamente correta: a aplicação deve reordenar se precisar.\n- Afirmação errada: \"DNS usa TCP.\" — Motivo: consultas usam UDP (TCP em transferências/zone e respostas grandes) — Versão tecnicamente correta: o padrão das consultas é UDP.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: UDP, datagrama, sem conexão, cabeçalho de 8 bytes, broadcast/multicast, QUIC.\n- Regras e fórmulas: UDP = sem handshake, sem ACK, sem retransmissão.\n- Exceções: o DNS usa TCP em casos específicos (transferência de zona, respostas grandes).\n- Palavras-chave: latência, overhead, ordenação, streaming, tempo real.\n- Checklist de domínio: (1) Defino o UDP? (2) Cito vantagens? (3) Reconheço limitações? (4) Associo aplicações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O UDP é confiável? (2) Qual o tamanho mínimo do seu cabeçalho? (3) Cite duas vantagens. (4) Cite três aplicações. (5) Quando escolher UDP em vez de TCP?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar as características do UDP, suas vantagens e limitações, e identificará aplicações típicas, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) HTTP: métodos e códigos de status; (b) o que significa stateless; (c) HTTPS e o papel do TLS; (d) portas e versões. POR QUE O CONHECIMENTO É IMPORTANTE: HTTP é o protocolo da web e base de quase todo conteúdo; a prova cobra métodos, códigos e a diferença HTTP x HTTPS. PRÉ-REQUISITOS: TCP, TLS (noções). OBJETIVOS OBSERVÁVEIS: (1) listar métodos; (2) interpretar códigos de status; (3) diferenciar HTTP de HTTPS; (4) indicar portas. COMPETÊNCIAS DESENVOLVIDAS: leitura de tráfego web; interpretação de códigos. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 2.3 (fluxo HTTP); unidade 3.4 (TLS). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o HTTP (HyperText Transfer Protocol) é um protocolo de aplicação sem estado (stateless), baseado em requisição-resposta: cada requisição é independente, e o estado de sessão é mantido por mecanismos como cookies e tokens. Os métodos definem a intenção: GET (obter), POST (enviar dados), PUT (atualizar/substituir), DELETE (remover), PATCH (atualizar parcialmente), HEAD (só cabeçalhos) e OPTIONS (capacidades). Os códigos de status resumem o resultado: 1xx informativo, 2xx sucesso (200 OK), 3xx redirecionamento (301, 302), 4xx erro do cliente (400, 401, 403, 404), 5xx erro do servidor (500, 502, 503). O HTTP usa TCP na porta 80; o HTTPS é HTTP sobre TLS, cifrando o conteúdo e autenticando o servidor por certificado, usando TCP na porta 443. Quanto às versões, o HTTP/2 multiplexa fluxos e comprime cabeçalhos, e o HTTP/3 roda sobre QUIC (UDP). Stateless não significa \"sem sessão\": significa que o protocolo não guarda estado entre requisições — quem guarda é a aplicação (via cookies/tokens).\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: distinguir GET de POST.\n- Nível intermediário: interpretar a classe dos códigos de status.\n- Nível avançado: explicar o que o HTTPS adiciona ao HTTP.\n- Nível especialista: diagnosticar um problema pela combinação método/status/porta.\nCOMPARAÇÕES CRÍTICAS:\n- HTTP x HTTPS: o segundo adiciona TLS (confidencialidade, integridade e autenticação) — muda portas e segurança.\n- 4xx x 5xx: o primeiro é erro do cliente; o segundo, do servidor.\n- GET x POST: o primeiro obtém; o segundo envia dados no corpo — muda o efeito e o cache.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"HTTPS é um protocolo diferente do HTTP.\" — Motivo: é o HTTP sobre TLS — Versão tecnicamente correta: o protocolo de aplicação continua sendo HTTP.\n- Afirmação errada: \"Stateless significa que não há login.\" — Motivo: o estado é mantido pela aplicação — Versão tecnicamente correta: cookies/tokens preservam a sessão.\n- Afirmação errada: \"404 indica erro do servidor.\" — Motivo: é erro do cliente (recurso não encontrado) — Versão tecnicamente correta: 404 pertence à classe 4xx.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: HTTP, stateless, métodos, códigos de status, HTTPS, TLS, portas 80/443.\n- Regras e fórmulas: 2xx sucesso; 3xx redirecionamento; 4xx cliente; 5xx servidor.\n- Exceções: HTTP/3 usa UDP (QUIC).\n- Palavras-chave: requisição-resposta, método, status, certificado, sessão.\n- Checklist de domínio: (1) Listo métodos? (2) Interpreto códigos? (3) Diferencio HTTP/HTTPS? (4) Indico portas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que significa stateless? (2) Diferença entre GET e POST? (3) O que é 503? (4) Qual porta o HTTPS usa? (5) O que o HTTPS adiciona?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o funcionamento do HTTP e HTTPS, métodos, códigos de status e a diferença entre os dois, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t2-s2",
                "titulo": "DNS: resolução de nomes",
                "objetivoAprendizagem": "Aluno explicará o funcionamento do DNS, tipos de registros, hierarquia e resolução recursiva/iterativa.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que o DNS faz; (b) a hierarquia e os tipos de servidores; (c) resolução recursiva e iterativa; (d) tipos de registro; (e) segurança (DNSSEC, DoH, DoT). POR QUE O CONHECIMENTO É IMPORTANTE: sem DNS, a Internet por nomes não funciona; a prova cobra a hierarquia, os registros e o fluxo de resolução. PRÉ-REQUISITOS: UDP/TCP; conceito de endereço IP. OBJETIVOS OBSERVÁVEIS: (1) definir o DNS; (2) descrever a hierarquia; (3) diferenciar recursão de iteração; (4) listar registros e explicar o cache. COMPETÊNCIAS DESENVOLVIDAS: compreensão da resolução de nomes; leitura de registros. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.3 (nslookup/dig); unidade 2.3 (fluxo HTTP); unidade 1.2 (unicast/anycast). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o DNS (Domain Name System) traduz nomes de domínio em endereços IP, funcionando como a \"agenda telefônica\" da Internet. Sua estrutura é hierárquica: a raiz (.), os domínios de topo (TLD, como .com e .br), os domínios de segundo nível (exemplo.com) e os subdomínios (www). Existem servidores-raiz (implementados com anycast), servidores de TLD e servidores autoritativos, que detêm a informação do domínio. Na resolução, o cliente consulta um resolvedor (recursivo), que percorre a hierarquia — consultando raiz, TLD e autoritativo — e devolve o IP; diz-se que a consulta do cliente é recursiva e as consultas do resolvedor aos servidores são iterativas. Os registros incluem: A (IPv4), AAAA (IPv6), CNAME (alias), MX (servidores de correio), NS (servidores de nomes), TXT (texto, usado também por SPF/DKIM), SOA (autoridade da zona) e PTR (resolução reversa). As respostas são armazenadas em cache durante o TTL (tempo de vida), acelerando consultas repetidas. Por segurança, existem o DNSSEC (assinatura dos registros), o DoH (DNS sobre HTTPS) e o DoT (DNS sobre TLS). As consultas usam UDP na porta 53; transferências de zona e respostas grandes usam TCP na 53.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o DNS troca nome por IP.\n- Nível intermediário: percorrer a hierarquia raiz → TLD → autoritativo.\n- Nível avançado: distinguir resolução recursiva (cliente) de iterativa (resolvedor) e explicar o cache/TTL.\n- Nível especialista: diagnosticar falha de DNS distinguindo cache, delegação e DNSSEC.\nCOMPARAÇÕES CRÍTICAS:\n- recursiva x iterativa: o cliente pede a resposta final (recursiva); o resolvedor consulta servidores passo a passo (iterativa) — trocar os termos erra o gabarito.\n- registro A x AAAA: o primeiro resolve IPv4; o segundo, IPv6.\n- CNAME x A: o CNAME aponta para outro nome; o A aponta para um IP.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O DNS só usa UDP.\" — Motivo: transferências de zona e respostas grandes usam TCP — Versão tecnicamente correta: usa UDP (53) e TCP (53) conforme o caso.\n- Afirmação errada: \"Resolver o nome garante que o serviço responde.\" — Motivo: o DNS só mapeia nome→IP — Versão tecnicamente correta: a disponibilidade do serviço é outra verificação.\n- Afirmação errada: \"O TTL não influencia a propagação.\" — Motivo: ele define quanto o cache mantém a resposta — Versão tecnicamente correta: mudanças demoram até o TTL expirar.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: DNS, hierarquia, raiz, TLD, autoritativo, recursiva/iterativa, A, AAAA, CNAME, MX, NS, TXT, SOA, PTR, TTL, DNSSEC, DoH, DoT.\n- Regras e fórmulas: nome → IP; cache pelo TTL; UDP/TCP porta 53.\n- Exceções: DNSSEC/DoH/DoT acrescentam segurança ao DNS clássico.\n- Palavras-chave: resolução, zona, autoridade, cache, registro.\n- Checklist de domínio: (1) Defino o DNS? (2) Descrevo a hierarquia? (3) Diferencio recursão de iteração? (4) Listo registros?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o DNS faz? (2) Qual a diferença entre consulta recursiva e iterativa? (3) Para que serve o registro MX? (4) O que o TTL controla? (5) Que portas o DNS usa?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o funcionamento do DNS, tipos de registros, hierarquia e resolução recursiva/iterativa, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t2-s3",
                "titulo": "DHCP: atribuição dinâmica de endereços",
                "objetivoAprendizagem": "Aluno explicará o processo DORA do DHCP e as informações entregues além do IP.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que o DHCP faz; (b) o processo DORA; (c) o que ele entrega além do IP; (d) lease, renovação e riscos. POR QUE O CONHECIMENTO É IMPORTANTE: a configuração automática é o que permite ligar um dispositivo e usar a rede; a prova cobra as mensagens do DORA e os riscos. PRÉ-REQUISITOS: endereçamento IPv4; broadcast. OBJETIVOS OBSERVÁVEIS: (1) definir o DHCP; (2) descrever o DORA; (3) listar o que é entregue; (4) explicar lease/renovação e o rogue DHCP. COMPETÊNCIAS DESENVOLVIDAS: configuração de rede; análise de risco de serviço. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (endereçamento); unidade 1.2 (broadcast); Módulo 4 (segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o DHCP (Dynamic Host Configuration Protocol) atribui configuração de rede automaticamente. O processo tem quatro mensagens, conhecido pelo acrônimo DORA: Discover (o cliente, ainda sem IP, faz um broadcast procurando servidores), Offer (o servidor oferece um endereço), Request (o cliente solicita formalmente a oferta escolhida) e Acknowledge (o servidor confirma a concessão). Além do endereço IP, o DHCP entrega a máscara de sub-rede, o gateway padrão, os servidores DNS, o domínio de busca e o tempo de concessão (lease). O DHCP usa UDP: porta 67 no servidor e 68 no cliente. O lease tem prazo de validade; o cliente renova tipicamente na metade do prazo (T1) e, se falhar, em 87,5% (T2). Existe também o DHCPv6 para IPv6, mas o IPv6 frequentemente usa a autoconfiguração sem estado (SLAAC), que dispensa servidor DHCP. Há riscos de segurança: um servidor DHCP não autorizado (rogue DHCP) pode distribuir configuração maliciosa (por exemplo, um DNS falso), e a mitigação usual é o DHCP snooping nos switches. O broadcast inicial é justamente o que permite ao cliente encontrar o servidor sem conhecer a rede.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o dispositivo recebe IP automaticamente.\n- Nível intermediário: nomear as quatro mensagens do DORA e o que é entregue.\n- Nível avançado: explicar lease, renovação e o risco de rogue DHCP.\n- Nível especialista: comparar DHCP com SLAAC em IPv6 e decidir quando usar cada um.\nCOMPARAÇÕES CRÍTICAS:\n- DHCP x configuração manual: o primeiro escala e evita conflitos; o segundo dá controle, mas é suscetível a erro.\n- Discover (broadcast) x Request (com destino): o primeiro é para todos; o segundo já direcionado ao servidor escolhido.\n- DHCP x SLAAC: o primeiro centraliza e entrega opções; o segundo autoconfigura no IPv6 sem servidor.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O DHCP entrega apenas o endereço IP.\" — Motivo: entrega máscara, gateway, DNS e mais — Versão tecnicamente correta: fornece a configuração completa.\n- Afirmação errada: \"O DORA tem três mensagens.\" — Motivo: são quatro — Versão tecnicamente correta: Discover, Offer, Request, Acknowledge.\n- Afirmação errada: \"Todo IPv6 exige DHCPv6.\" — Motivo: SLAAC dispensa servidor — Versão tecnicamente correta: o IPv6 pode autoconfigurar-se.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: DHCP, DORA, lease, T1/T2, gateway, DNS, porta 67/68, rogue DHCP, DHCP snooping.\n- Regras e fórmulas: Discover → Offer → Request → Acknowledge; UDP 67/68.\n- Exceções: IPv6 pode usar SLAAC em vez de DHCPv6.\n- Palavras-chave: configuração automática, concessão, renovação, broadcast, segurança.\n- Checklist de domínio: (1) Defino o DHCP? (2) Descrevo o DORA? (3) Listo o que entrega? (4) Explico lease e risco?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Que mensagens formam o DORA? (2) O que o DHCP entrega além do IP? (3) Quais portas UDP ele usa? (4) O que é lease? (5) O que é rogue DHCP?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o processo DORA do DHCP e as informações entregues além do IP, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) FTP, FTPS e SFTP; (b) portas e modos do FTP; (c) a diferença entre FTPS e SFTP; (d) escolha segura. POR QUE O CONHECIMENTO É IMPORTANTE: transferência de arquivos é tarefa comum e alvo de ataques quando feita sem cifra; a prova distingue os protocolos. PRÉ-REQUISITOS: TCP; TLS; SSH. OBJETIVOS OBSERVÁVEIS: (1) descrever o FTP e suas conexões; (2) explicar mode ativo/passivo; (3) diferenciar FTPS de SFTP; (4) recomendar a opção segura. COMPETÊNCIAS DESENVOLVIDAS: escolha de protocolo seguro; leitura de configuração. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.4 (TLS); unidade 3.3 (SSH). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o FTP (File Transfer Protocol) transfere arquivos e usa DUAS conexões TCP: uma de controle (porta 21) e outra de dados (porta 20 no modo ativo, ou uma porta efêmera no modo passivo). No modo ativo, o servidor abre a conexão de dados de volta para o cliente, o que costuma falhar atrás de NAT/firewall; no modo passivo, é o cliente que se conecta ao servidor, sendo o preferido em redes atuais. O FTP não cifra credenciais nem dados, o que o torna inseguro em redes não confiáveis. O FTPS (FTP sobre SSL/TLS) acrescenta TLS às conexões (tipicamente mantendo a porta 21 para o controle e cifrando o canal de dados), autenticando o servidor e cifrando o conteúdo. Já o SFTP (SSH File Transfer Protocol) é um protocolo DIFERENTE, que roda sobre o SSH (porta 22), cifrando toda a sessão e permitindo autenticação por chave ou senha. O erro clássico de prova é confundir FTPS (FTP + TLS) com SFTP (SSH + transferência). Hoje, o SFTP é o mais recomendado por ser um único canal cifrado; o FTPS persiste por compatibilidade.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o FTP clássico não cifra.\n- Nível intermediário: explicar as duas conexões e os modos ativo/passivo.\n- Nível avançado: distinguir FTPS de SFTP quanto ao protocolo-base e à porta.\n- Nível especialista: escolher o protocolo conforme requisitos de segurança e infraestrutura.\nCOMPARAÇÕES CRÍTICAS:\n- FTPS x SFTP: o FTPS é FTP com TLS; o SFTP é SSH — mudam protocolo-base, porta e arquitetura.\n- modo ativo x passivo: no ativo o servidor conecta ao cliente (problemas com firewall); no passivo, o inverso.\n- FTP x SFTP: o primeiro é texto claro; o segundo é cifrado.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"SFTP e FTPS são a mesma coisa.\" — Motivo: derivam de protocolos distintos — Versão tecnicamente correta: FTPS = FTP+TLS; SFTP = sobre SSH.\n- Afirmação errada: \"O FTP usa uma só conexão.\" — Motivo: usa controle e dados — Versão tecnicamente correta: duas conexões TCP.\n- Afirmação errada: \"O modo ativo é o preferido hoje.\" — Motivo: falha com NAT/firewall — Versão tecnicamente correta: o modo passivo é preferido.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: FTP, FTPS, SFTP, porta 21, porta 20, modo ativo/passivo, TLS, SSH.\n- Regras e fórmulas: FTP = controle + dados; SFTP = SSH porta 22.\n- Exceções: portas de dados no modo passivo são negociadas dinamicamente.\n- Palavras-chave: transferência, cifra, canal, autenticação, compatibilidade.\n- Checklist de domínio: (1) Descrevo o FTP? (2) Explico os modos? (3) Diferencio FTPS de SFTP? (4) Recomendo o seguro?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantas conexões o FTP usa? (2) Qual a diferença entre modo ativo e passivo? (3) O que é FTPS? (4) E SFTP? (5) Qual é o mais recomendado?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar FTP, FTPS e SFTP quanto a protocolo base, portas, segurança e uso, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t3-s2",
                "titulo": "SSH e ICMP",
                "objetivoAprendizagem": "Aluno explicará as funções do SSH e do ICMP, suas portas/protocolos e usos de diagnóstico.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é o SSH e como protege o acesso remoto; (b) o que é o ICMP e suas funções; (c) portas e camadas; (d) usos de diagnóstico. POR QUE O CONHECIMENTO É IMPORTANTE: SSH substituiu o Telnet inseguro e o ICMP sustenta ping e traceroute; a prova cobra suas funções e diferenças. PRÉ-REQUISITOS: TCP; camada de rede; noção de diagnóstico. OBJETIVOS OBSERVÁVEIS: (1) explicar o SSH; (2) citar recursos (túneis, chaves); (3) descrever o ICMP; (4) associar ICMP a ping/traceroute. COMPETÊNCIAS DESENVOLVIDAS: acesso remoto seguro; interpretação de mensagens de controle. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.3 (SFTP); unidade 5.1 (ping/traceroute); unidade 3.3 (ARP/NDP). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o SSH (Secure Shell) é um protocolo de aplicação para acesso remoto seguro, execução de comandos e criação de túneis; usa TCP na porta 22. Ele autentica o servidor por uma chave de host e o cliente por senha ou chave pública, e cifra toda a sessão. Substituiu o Telnet (porta 23), que transmitia tudo em texto claro, inclusive a senha. Além do terminal remoto, o SSH oferece encaminhamento de portas (túneis) e é a base do SFTP e do SCP. O ICMP (Internet Control Message Protocol) é um protocolo da camada de REDE, auxiliar do IP, usado para mensagens de controle e erro: echo request/reply (base do ping), destination unreachable, time exceeded (base do traceroute) e redirect. O ICMP não transporta dados de aplicação e não possui portas. Embora seja essencial ao diagnóstico, pode ser bloqueado por firewalls, o que faz o ping falhar mesmo com TCP/UDP operantes — por isso o resultado do ping deve ser interpretado com cautela. No IPv6, o ICMPv6 integra o Neighbor Discovery (NDP). Distinguir o SSH (aplicação, porta 22) do ICMP (rede, sem porta) é ponto frequente de prova.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o SSH cifra e o Telnet não.\n- Nível intermediário: explicar autenticação por chave e túneis.\n- Nível avançado: situar o ICMP na camada de rede e relacionar a ping/traceroute.\n- Nível especialista: interpretar a ausência de resposta ao ICMP sem concluir queda de serviço.\nCOMPARAÇÕES CRÍTICAS:\n- SSH x Telnet: o primeiro cifra; o segundo é texto claro — muda a segurança.\n- ICMP x TCP/UDP: o ICMP é da camada de rede e não tem portas; TCP/UDP têm portas.\n- SSH x SFTP: o segundo roda SOBRE o SSH — um é acesso, o outro é transferência.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O ICMP tem portas.\" — Motivo: portas são do transporte — Versão tecnicamente correta: o ICMP não usa portas.\n- Afirmação errada: \"Ping falhar prova que o serviço caiu.\" — Motivo: o ICMP pode ser bloqueado — Versão tecnicamente correta: confirmar por outro protocolo.\n- Afirmação errada: \"Telnet é seguro como o SSH.\" — Motivo: o Telnet não cifra — Versão tecnicamente correta: o SSH é o substituto seguro.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: SSH, porta 22, chave de host, túnel, Telnet, ICMP, echo, time exceeded, ICMPv6/NDP.\n- Regras e fórmulas: SSH = aplicação (TCP 22); ICMP = rede, sem porta.\n- Exceções: firewalls podem bloquear o ICMP, afetando ping/traceroute.\n- Palavras-chave: acesso remoto, cifra, controle, erro, diagnóstico.\n- Checklist de domínio: (1) Explico o SSH? (2) Cito recursos? (3) Descrevo o ICMP? (4) Associo a ping/traceroute?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual porta o SSH usa? (2) O que ele substituiu? (3) O ICMP pertence a qual camada? (4) Que mensagens servem ao ping e ao traceroute? (5) O ICMP tem portas?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar as funções do SSH e do ICMP, suas portas/protocolos e usos de diagnóstico, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t3-s3",
                "titulo": "ARP e Neighbor Discovery",
                "objetivoAprendizagem": "Aluno explicará a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing).",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que o ARP faz no IPv4; (b) o que é o NDP no IPv6; (c) o risco de ARP/NDP spoofing; (d) mitigações. POR QUE O CONHECIMENTO É IMPORTANTE: sem resolver IP em MAC não há comunicação no enlace; o ARP é, ao mesmo tempo, essencial e vulnerável. PRÉ-REQUISITOS: endereçamento; camada de enlace; broadcast/multicast. OBJETIVOS OBSERVÁVEIS: (1) explicar o ARP; (2) descrever o NDP; (3) reconhecer o spoofing; (4) citar mitigações. COMPETÊNCIAS DESENVOLVIDAS: análise de protocolo de enlace; análise de risco. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (IPv4); unidade 4.4 (IPv6); unidade 5.2 (ARP cache). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o ARP (Address Resolution Protocol) resolve um endereço IP em um endereço MAC DENTRO da mesma rede. Quando um host quer enviar a outro na mesma sub-rede, ele faz um ARP request em broadcast (\"quem tem o IP X?\"); o dono responde com ARP reply em unicast, informando seu MAC. O resultado é guardado no cache ARP por um tempo. O ARP é stateless e não autenticado: nada impede que um host mal-intencionado responda falsamente a um pedido, associando seu próprio MAC a um IP de terceiro. Isso é o ARP spoofing/poisoning, usado para interceptar tráfego e realizar ataques de intermediário (MITM). As mitigações incluem o Dynamic ARP Inspection (DAI), a segmentação por VLANs e o monitoramento. No IPv6, o ARP é substituído pelo NDP (Neighbor Discovery Protocol), que usa ICMPv6: Neighbor Solicitation (em multicast, equivalente ao \"quem tem\") e Neighbor Advertisement (resposta). O NDP também faz descoberta de roteadores (Router Solicitation/Advertisement) e apoia a autoconfiguração (SLAAC). Ele usa multicast em vez de broadcast e admite a extensão de segurança SEND, mas também pode sofrer NDP spoofing. A resolução de endereços é, portanto, um ponto sensível de segurança no enlace.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o ARP descobre o MAC a partir do IP.\n- Nível intermediário: descrever request (broadcast) e reply (unicast) e o cache.\n- Nível avançado: explicar o ARP spoofing e as mitigações.\n- Nível especialista: comparar as funções do ARP e do NDP e seus riscos.\nCOMPARAÇÕES CRÍTICAS:\n- ARP x NDP: o primeiro é IPv4 e usa broadcast; o segundo é IPv6 e usa multicast via ICMPv6 — muda o mecanismo.\n- request x reply: o primeiro é broadcast; o segundo, unicast.\n- IP x MAC: o IP é lógico e roteável entre redes; o MAC é físico e local ao enlace.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O ARP funciona entre redes diferentes.\" — Motivo: ele resolve na mesma sub-rede — Versão tecnicamente correta: é local ao enlace; entre redes atua o IP/roteador.\n- Afirmação errada: \"O ARP é autenticado e seguro.\" — Motivo: não há autenticação — Versão tecnicamente correta: é vulnerável a spoofing.\n- Afirmação errada: \"O IPv6 usa ARP.\" — Motivo: usa NDP — Versão tecnicamente correta: o NDP substitui o ARP.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ARP, ARP request/reply, cache ARP, ARP spoofing, DAI, NDP, NS/NA, SLAAC, SEND.\n- Regras e fórmulas: IP → MAC na mesma sub-rede; IPv4 usa ARP; IPv6 usa NDP.\n- Exceções: entre redes, o destino é o MAC do roteador (gateway).\n- Palavras-chave: resolução, broadcast, multicast, spoofing, MITM.\n- Checklist de domínio: (1) Explico o ARP? (2) Descrevo o NDP? (3) Reconheço o spoofing? (4) Cito mitigações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o ARP resolve? (2) O request é broadcast ou unicast? (3) O que é ARP spoofing? (4) O que substitui o ARP no IPv6? (5) Cite uma mitigação.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing), evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) SMTP, POP3 e IMAP no contexto de redes; (b) portas e segurança de cada um; (c) push x pull; (d) autenticação de domínio. POR QUE O CONHECIMENTO É IMPORTANTE: o correio é um dos serviços mais cobrados; a prova associa protocolo, função e porta. PRÉ-REQUISITOS: TCP; modelos de camadas. OBJETIVOS OBSERVÁVEIS: (1) associar protocolo e função; (2) indicar portas; (3) diferenciar push de pull; (4) citar TLS e SPF/DKIM/DMARC. COMPETÊNCIAS DESENVOLVIDAS: análise de fluxo de correio; configuração segura. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: Módulo 3 (correio); unidade 3.4 (TLS); unidade 1.2 (unicast). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o SMTP (Simple Mail Transfer Protocol) envia e retransmite mensagens entre clientes e servidores; é um protocolo de \"empurrar\" (push). Suas portas usuais são 25 (relay entre servidores), 587 (submissão autenticada pelo cliente, tipicamente com STARTTLS) e 465 (SMTPS, com TLS implícito). O POP3 (Post Office Protocol v3) \"puxa\" (pull) as mensagens do servidor para o cliente e, por padrão, as remove do servidor; usa as portas 110 (sem cifra) e 995 (com TLS). O IMAP (Internet Message Access Protocol) também \"puxa\", mas mantém as mensagens no servidor e as sincroniza entre dispositivos, com suporte a pastas; usa as portas 143 (sem cifra) e 993 (com TLS). A segurança do correio apoia-se no TLS, seja de forma implícita (porta segura, conexão já cifrada) ou via STARTTLS (upgrade a partir da porta padrão). Além disso, SPF, DKIM e DMARC ajudam a autenticar o domínio remetente e a reduzir a falsificação. Um ponto que a prova explora: SMTP envia; POP3 e IMAP recebem.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: lembrar que SMTP envia e POP3/IMAP recebem.\n- Nível intermediário: associar cada protocolo à sua porta.\n- Nível avançado: distinguir TLS implícito de STARTTLS e citar a autenticação de domínio.\n- Nível especialista: diagnosticar falha de envio x falha de recebimento pelo protocolo envolvido.\nCOMPARAÇÕES CRÍTICAS:\n- SMTP x POP3/IMAP: push x pull — invertê-los erra a função.\n- POP3 x IMAP: o POP3 tende a remover do servidor; o IMAP sincroniza — muda o multi-dispositivo.\n- TLS implícito x STARTTLS: o primeiro inicia cifrado; o segundo eleva a conexão.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"SMTP recebe e-mail.\" — Motivo: ele envia/transporta — Versão tecnicamente correta: quem recebe é POP3/IMAP.\n- Afirmação errada: \"IMAP apaga as mensagens do servidor.\" — Motivo: ele mantém — Versão tecnicamente correta: o POP3 é que tende a remover.\n- Afirmação errada: \"SPF/DKIM/DMARC garantem que o conteúdo é legítimo.\" — Motivo: autenticam o domínio, não o conteúdo — Versão tecnicamente correta: reduzem o spoofing, não o phishing.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: SMTP (25/587/465), POP3 (110/995), IMAP (143/993), push/pull, TLS, SPF/DKIM/DMARC.\n- Regras e fórmulas: SMTP envia; POP3/IMAP recebem; STARTTLS x TLS implícito.\n- Exceções: o POP3 pode manter cópia, mas o padrão é remover.\n- Palavras-chave: envio, recebimento, submissão, relay, autenticação.\n- Checklist de domínio: (1) Associo protocolo e função? (2) Indico portas? (3) Diferencio push de pull? (4) Cito TLS e autenticação?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual protocolo envia? (2) Quais recebem? (3) Qual porta é a de submissão? (4) POP3 x IMAP quanto ao servidor? (5) O que SPF/DKIM/DMARC autenticam?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de diferenciar SMTP, POP3 e IMAP quanto a função, portas e segurança, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t4-s2",
                "titulo": "TLS: segurança na camada de transporte",
                "objetivoAprendizagem": "Aluno explicará a função do TLS, handshake, certificados e a diferença entre TLS implícito e STARTTLS.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que o TLS garante; (b) o handshake; (c) certificados; (d) TLS implícito x STARTTLS; (e) limitações. POR QUE O CONHECIMENTO É IMPORTANTE: o TLS protege quase todo tráfego moderno; a prova cobra o que ele garante e o que não garante. PRÉ-REQUISITOS: TCP; criptografia básica (chave pública). OBJETIVOS OBSERVÁVEIS: (1) definir o TLS; (2) descrever o handshake; (3) explicar certificados e CA; (4) diferenciar implícito de STARTTLS. COMPETÊNCIAS DESENVOLVIDAS: análise de segurança de transporte. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (HTTPS); unidade 3.4 (correio); Módulo 4 (criptografia). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o TLS (Transport Layer Security) fornece confidencialidade, integridade e autenticidade sobre o TCP; autentica o servidor (e, opcionalmente, o cliente). No handshake, o cliente envia um ClientHello com versões e suítes de cifra suportadas; o servidor responde com ServerHello, seu certificado e a mensagem Finished; o cliente verifica o certificado, deriva as chaves de sessão e confirma. Os certificados X.509 vinculam uma chave pública a uma identidade e são emitidos por uma Autoridade Certificadora (CA) confiável. Há duas formas de proteger um serviço: o TLS implícito, em que a conexão já começa cifrada na porta segura (por exemplo, 443, 993, 995 e 465), e o STARTTLS, em que a conexão começa em texto claro na porta padrão e faz upgrade para TLS por um comando, como nas portas 587, 143, 110 e 25. As limitações são importantes: o TLS protege o TRANSPORTE, não o endpoint — se o servidor ou o cliente está comprometido, o TLS não ajuda; um certificado expirado ou inválido gera alerta; e um atacante com uma CA comprometida poderia, em tese, interceptar. Ainda assim, o TLS é a base da segurança na web e no correio modernos.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o TLS cifra e autentica o servidor.\n- Nível intermediário: descrever o handshake e o papel do certificado.\n- Nível avançado: diferenciar TLS implícito de STARTTLS.\n- Nível especialista: analisar um alerta de certificado e decidir a conduta segura.\nCOMPARAÇÕES CRÍTICAS:\n- TLS implícito x STARTTLS: o primeiro inicia cifrado; o segundo eleva — muda a porta e o fluxo.\n- confidencialidade x autenticidade: o TLS provê ambas; a autenticidade depende dos certificados.\n- TLS x IPsec: o TLS protege a aplicação sobre TCP; o IPsec protege na camada de rede.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O TLS protege o servidor contra invasão.\" — Motivo: protege o transporte — Versão tecnicamente correta: um endpoint comprometido não é salvo pelo TLS.\n- Afirmação errada: \"STARTTLS e TLS implícito são idênticos.\" — Motivo: diferem no início da cifra — Versão tecnicamente correta: um começa na porta padrão e eleva; o outro já inicia cifrado.\n- Afirmação errada: \"Certificado válido garante que o site é honesto.\" — Motivo: garante a identidade do domínio — Versão tecnicamente correta: não atesta a intenção do conteúdo.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: TLS, handshake, ClientHello/ServerHello, certificado X.509, CA, TLS implícito, STARTTLS.\n- Regras e fórmulas: confidencialidade + integridade + autenticidade sobre TCP.\n- Exceções: o TLS não protege os endpoints.\n- Palavras-chave: criptografia, certificado, upgrade, porta segura, transporte.\n- Checklist de domínio: (1) Defino o TLS? (2) Descrevo o handshake? (3) Explico certificados? (4) Diferencio implícito de STARTTLS?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o TLS garante? (2) O que ocorre no handshake? (3) O que um certificado vincula? (4) O que é STARTTLS? (5) O que o TLS não protege?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar a função do TLS, handshake, certificados e a diferença entre TLS implícito e STARTTLS, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u3-t4-s3",
                "titulo": "NAT, PAT, proxy e VPN",
                "objetivoAprendizagem": "Aluno explicará NAT/PAT, proxy e VPN, suas funções, tipos e limitações.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) NAT e PAT; (b) proxy (direto e reverso); (c) VPN (tipos e protocolos); (d) finalidades e limitações. POR QUE O CONHECIMENTO É IMPORTANTE: NAT, proxy e VPN resolvem endereçamento, intermediação e privacidade de comunicação — temas frequentes. PRÉ-REQUISITOS: endereçamento IP; TCP/UDP; noções de criptografia. OBJETIVOS OBSERVÁVEIS: (1) explicar NAT/PAT; (2) distinguir proxy direto de reverso; (3) descrever a VPN; (4) citar limitações. COMPETÊNCIAS DESENVOLVIDAS: análise de arquitetura de borda; decisão de segurança. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (endereços privados); unidade 3.4 (TLS); Módulo 4 (segurança). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o NAT (Network Address Translation) traduz endereços IP privados em públicos (e vice-versa) no roteador de borda, permitindo que vários hosts internos compartilhem um ou poucos IPs públicos. O PAT (Port Address Translation, ou NAT overload) traduz também as PORTAS, de modo que muitas conexões simultâneas compartilhem um único IP público — é o NAT típico das redes domésticas. Os tipos incluem estático (1:1), dinâmico (pool) e PAT (muitos:1). As limitações são relevantes: o NAT quebra o princípio fim a fim, dificultando servidores internos, aplicações P2P e VoIP; complica protocolos que embutem IP no payload; e consome a tabela de estados do equipamento. O proxy é um intermediário que faz requisições em nome do cliente; pode ser transparente (sem configuração no cliente) ou explícito, e oferece cache, filtragem, controle de acesso e registro. O proxy reverso fica à frente dos SERVIDORES, distribuindo carga e protegendo a origem. A VPN (Virtual Private Network) cria um túnel cifrado sobre uma rede pública, estendendo uma rede privada: pode ser site a site (conecta redes) ou de acesso remoto (um cliente); usa protocolos como IPsec, OpenVPN, WireGuard e SSL VPN. Suas limitações incluem overhead, latência adicional, possível ponto único de falha e a necessidade de gestão de chaves.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o NAT reaproveita um IP público.\n- Nível intermediário: distinguir NAT de PAT e proxy direto de reverso.\n- Nível avançado: explicar as limitações do NAT no fim a fim.\n- Nível especialista: escolher entre proxy reverso e VPN para um requisito de publicação e acesso seguros.\nCOMPARAÇÕES CRÍTICAS:\n- NAT x PAT: o NAT traduz endereços; o PAT traduz também portas — o PAT permite muitos:1.\n- proxy direto x reverso: o direto representa o CLIENTE; o reverso representa o SERVIDOR.\n- VPN x proxy: a VPN cria um túnel cifrado de rede; o proxy intermedeia a aplicação — mudam o escopo da proteção.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"NAT é uma medida de segurança forte.\" — Motivo: é, sobretudo, de endereçamento — Versão tecnicamente correta: pode dificultar certos acessos, mas não substitui firewall.\n- Afirmação errada: \"Proxy e VPN são equivalentes.\" — Motivo: atuam em camadas e escopos diferentes — Versão tecnicamente correta: um intermedeia aplicação; a outra cifra o tráfego de rede.\n- Afirmação errada: \"PAT permite um único acesso por vez.\" — Motivo: o PAT multiplexa por portas — Versão tecnicamente correta: suporta muitas conexões simultâneas.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: NAT, PAT, NAT estático/dinâmico/overload, proxy direto, proxy reverso, VPN, IPsec, WireGuard.\n- Regras e fórmulas: NAT traduz IP; PAT traduz IP+porta; VPN = túnel cifrado.\n- Exceções: o NAT dificulta, mas não impede, comunicações de entrada (requer encaminhamento de porta).\n- Palavras-chave: tradução, intermediação, túnel, fim a fim, carga.\n- Checklist de domínio: (1) Explico NAT/PAT? (2) Distingo proxy direto/reverso? (3) Descrevo VPN? (4) Cito limitações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o NAT traduz? (2) O que o PAT acrescenta? (3) Proxy direto x reverso? (4) O que a VPN cria? (5) Cite uma limitação do NAT.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar NAT/PAT, proxy e VPN, suas funções, tipos e limitações, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a estrutura de 32 bits do IPv4; (b) a divisão em quatro octetos; (c) a separação entre parte de rede e parte de host; (d) as classes históricas e endereços especiais. POR QUE O CONHECIMENTO É IMPORTANTE: entender a estrutura é pré-requisito para máscaras, sub-redes e CIDR; a prova cobra octetos e endereços especiais. PRÉ-REQUISITOS: camada de rede; binário básico. OBJETIVOS OBSERVÁVEIS: (1) descrever o endereço de 32 bits; (2) converter octeto para decimal e vice-versa; (3) separar rede e host; (4) citar endereços especiais. COMPETÊNCIAS DESENVOLVIDAS: representação binária; leitura de endereços. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (máscaras); unidade 4.2 (CIDR). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: um endereço IPv4 tem 32 bits, escritos como quatro octetos decimais separados por ponto (por exemplo, 192.168.1.10); cada octeto vai de 0 a 255, pois representa 8 bits (2^8 = 256 valores). A máscara de sub-rede divide o endereço em parte de REDE (prefixo) e parte de HOST. Historicamente, as classes definiam o tamanho: Classe A (/8), Classe B (/16) e Classe C (/24); hoje usa-se o roteamento sem classes (CIDR), que trata o prefixo de forma explícita. Existem endereços de uso especial: 0.0.0.0 (rota padrão/origem indefinida), 255.255.255.255 (broadcast limitado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local/APIPA), 224.0.0.0/4 (multicast) e 240.0.0.0/4 (reservado). Conversão prática: o octeto 192 em binário é 11000000 (128+64); o octeto 255 é 11111111. Cálculo ilustrativo: quantos endereços há em uma rede /24? O número de bits de host é 32 − 24 = 8, então 2^8 = 256 endereços, dos quais 254 são hosts (excluídos rede e broadcast). Variação: em /25, os bits de host são 7 → 2^7 = 128 endereços e 126 hosts. Unidades e interpretação importam para não confundir endereços totais com hosts utilizáveis.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: ler e escrever endereços em quatro octetos.\n- Nível intermediário: separar rede e host e converter octeto em binário.\n- Nível avançado: relacionar prefixo ao número de endereços/hosts.\n- Nível especialista: reconhecer endereços especiais e sua implicação em uma configuração.\nCOMPARAÇÕES CRÍTICAS:\n- parte de rede x parte de host: a primeira identifica a rede; a segunda, o dispositivo — a máscara define o limite.\n- endereços totais x hosts utilizáveis: uma /24 tem 256 endereços e 254 hosts — confundir muda a conta.\n- classes x CIDR: as classes são históricas; o CIDR usa prefixo explícito.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Cada octeto pode ir até 512.\" — Motivo: 8 bits vão até 255 — Versão tecnicamente correta: cada octeto é 0–255.\n- Afirmação errada: \"127.0.0.1 é um endereço público.\" — Motivo: é loopback — Versão tecnicamente correta: 127.0.0.0/8 é loopback.\n- Afirmação errada: \"Uma /24 tem 256 hosts.\" — Motivo: dois endereços são reservados — Versão tecnicamente correta: tem 254 hosts utilizáveis.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: IPv4, 32 bits, octeto, máscara, prefixo, classes, endereços especiais.\n- Regras e fórmulas: 2^(bits de host) endereços; −2 para hosts utilizáveis (rede e broadcast).\n- Exceções: /31 e /32 têm tratamentos especiais para links ponto a ponto.\n- Palavras-chave: binário, octeto, rede, host, CIDR.\n- Checklist de domínio: (1) Descrevo os 32 bits? (2) Converto octetos? (3) Separo rede e host? (4) Cito especiais?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantos bits tem um IPv4? (2) Qual o valor máximo de um octeto? (3) O que é a máscara? (4) Quantos hosts tem uma /24? (5) O que é 127.0.0.0/8?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de descrever a estrutura de 32 bits do IPv4, a divisão em octetos e a separação entre parte de rede e parte de host, evidenciado por resposta correta a item de verificação associado ao subtópico.",
                "videos": [
                  {
                    "id": "XPWd08tLAuo",
                    "titulo": "Curso de Redes - Vídeo 05 - Endereço IP",
                    "canal": "Bóson Treinamentos",
                    "urlOriginal": "https://www.youtube.com/watch?v=XPWd08tLAuo",
                    "embedUrl": "https://www.youtube-nocookie.com/embed/XPWd08tLAuo",
                    "descricao": "Videoaula detalhada sobre endereçamento IPv4, cobrindo a estrutura de 32 bits, notação decimal pontuada, classes de endereço (A, B, C, D, E), endereços privados (RFC 1918), loopback, link-local (APIPA), multicast e broadcast. Explica a máscara de sub-rede, CIDR, cálculo de rede e broadcast, e a distinção entre endereços públicos e privados para NAT.",
                    "dataValidacao": "2026-10-24"
                  }
                ]
              },
              {
                "id": "m2-u4-t1-s2",
                "titulo": "Endereços públicos, privados, loopback e link-local",
                "objetivoAprendizagem": "Aluno classificará endereços IPv4 em públicos/privados/loopback/link-local e explicará o uso de cada um.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) endereços privados (RFC 1918); (b) loopback; (c) link-local (APIPA); (d) públicos; (e) multicast e broadcast. POR QUE O CONHECIMENTO É IMPORTANTE: classificar um endereço como público ou privado é decisão frequente e ponto de pegadinha; a prova cobra as faixas. PRÉ-REQUISITOS: estrutura IPv4; máscaras. OBJETIVOS OBSERVÁVEIS: (1) listar as faixas privadas; (2) explicar loopback; (3) explicar link-local; (4) classificar endereços. COMPETÊNCIAS DESENVOLVIDAS: classificação de endereços; análise de roteabilidade. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (estrutura); unidade 3.4 (NAT); unidade 4.4 (IPv6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: os endereços privados, definidos na RFC 1918, são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16; eles NÃO são roteáveis na Internet pública e são usados em redes locais, sendo traduzidos para um IP público pelo NAT na borda. O loopback (127.0.0.0/8, tipicamente 127.0.0.1) designa o próprio host: o tráfego não sai da máquina e serve para testes locais. O link-local (169.254.0.0/16) é autoatribuído quando não há DHCP disponível (mecanismo APIPA), permitindo comunicação apenas no próprio link — é um sinal clássico de falha na obtenção de IP. Os endereços públicos são todos os demais e são roteáveis na Internet. Existem ainda o multicast (224.0.0.0/4), que endereça grupos, e o broadcast, que corresponde ao endereço com todos os bits de host em 1 na sub-rede, além do broadcast limitado 255.255.255.255. A classificação é funcional: um endereço privado só se comunica com a Internet por meio de NAT. Exemplo: 192.168.1.10 é privado (prefixo 192.168.0.0/16) e 8.8.8.8 é público. Variação: 172.20.5.3 é privado (dentro de 172.16.0.0/12), mas 172.32.5.3 é público (fora dessa faixa) — detalhe que a prova explora.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer 192.168.x.x como privado.\n- Nível intermediário: aplicar as três faixas privadas e explicar loopback e link-local.\n- Nível avançado: classificar endereços na fronteira das faixas (ex.: 172.16–172.31).\n- Nível especialista: analisar a roteabilidade de um endereço e a necessidade de NAT.\nCOMPARAÇÕES CRÍTICAS:\n- privado x público: o primeiro só alcança a Internet via NAT; o segundo é roteável — muda a configuração.\n- loopback x link-local: o primeiro é o próprio host; o segundo é autoatribuído no link.\n- multicast x broadcast: o primeiro endereça um grupo; o segundo, todos da sub-rede.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Todo 172.x.x.x é privado.\" — Motivo: a faixa privada é 172.16–172.31 — Versão tecnicamente correta: 172.32.x.x é público.\n- Afirmação errada: \"169.254.x.x é um IP válido de Internet.\" — Motivo: é link-local/APIPA — Versão tecnicamente correta: indica ausência de DHCP.\n- Afirmação errada: \"127.0.0.1 alcança outros hosts.\" — Motivo: é o próprio host — Versão tecnicamente correta: fica na máquina.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: RFC 1918, 10/8, 172.16/12, 192.168/16, loopback, link-local, público, multicast, broadcast.\n- Regras e fórmulas: privados não são roteáveis; NAT faz a tradução.\n- Exceções: 172.32.x.x já é público.\n- Palavras-chave: roteável, tradução, APIPA, grupo, sub-rede.\n- Checklist de domínio: (1) Listo as faixas privadas? (2) Explico loopback? (3) Explico link-local? (4) Classifico endereços?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quais são as três faixas privadas? (2) O que é 127.0.0.1? (3) O que 169.254 indica? (4) 172.32.5.3 é privado? (5) O que o multicast endereça?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de classificar endereços IPv4 em públicos/privados/loopback/link-local e explicará o uso de cada um, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t1-s3",
                "titulo": "Máscaras de sub-rede",
                "objetivoAprendizagem": "Aluno explicará o papel da máscara e converterá entre notação decimal e prefixo CIDR.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o papel da máscara; (b) a conversão entre notação decimal e CIDR; (c) máscaras inválidas; (d) o tamanho da sub-rede. POR QUE O CONHECIMENTO É IMPORTANTE: a máscara define rede e host e é base de todo cálculo de sub-rede; a prova cobra a equivalência decimal ↔ prefixo. PRÉ-REQUISITOS: estrutura IPv4. OBJETIVOS OBSERVÁVEIS: (1) explicar a máscara; (2) converter decimal ↔ /n; (3) reconhecer máscara inválida; (4) calcular o tamanho. COMPETÊNCIAS DESENVOLVIDAS: conversão de máscaras; cálculo de tamanho. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (CIDR); unidade 4.2 (sub-redes/hosts). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a máscara de sub-rede é um número de 32 bits com 1s CONTÍGUOS na parte de rede e 0s na parte de host (por exemplo, 255.255.255.0, equivalente a /24). Onde a máscara tem 1, o bit pertence à rede; onde tem 0, pertence ao host. Máscaras com 1s descontínuos (como 255.0.255.0) são INVÁLIDAS no IPv4 clássico, pois a máscara precisa ser contígua. A notação decimal pontuada (255.255.255.0) e a notação CIDR (/24) são equivalentes, apenas formas diferentes de escrever o mesmo prefixo. A máscara determina o tamanho da sub-rede: o número de bits de host é 32 − prefixo, e o total de endereços é 2^(bits de host). Assim, /24 → 2^8 = 256 endereços (254 hosts); /16 → 2^16 = 65536 endereços (65534 hosts); /30 → 2^2 = 4 endereços (2 hosts), ideal para links ponto a ponto. Conversão: /26 = 255.255.255.192 (os dois primeiros bits do último octeto em 1: 128+64 = 192). Cálculo ilustrativo: para a máscara 255.255.255.224, o último octeto é 224 = 128+64+32, ou seja, 3 bits em 1, logo o prefixo é 24+3 = /27, com 2^5 = 32 endereços e 30 hosts. Variação: a máscara 255.255.255.192 é /26, com 62 hosts.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer 255.255.255.0 como /24.\n- Nível intermediário: converter octetos de máscara em bits e prefixo.\n- Nível avançado: calcular o número de hosts a partir da máscara.\n- Nível especialista: detectar máscaras inválidas e inconsistências em uma configuração.\nCOMPARAÇÕES CRÍTICAS:\n- decimal x CIDR: formas equivalentes de representar o mesmo prefixo.\n- máscara válida x inválida: a válida tem 1s contíguos; a inválida, não — muda a aceitação em prova.\n- /n x número de hosts: /n não é o número de hosts; é o prefixo — confundir erra a conta.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"255.0.255.0 é uma máscara válida.\" — Motivo: os 1s não são contíguos — Versão tecnicamente correta: máscaras exigem 1s contíguos.\n- Afirmação errada: \"/24 tem 24 hosts.\" — Motivo: /24 é o prefixo — Versão tecnicamente correta: tem 254 hosts utilizáveis.\n- Afirmação errada: \"A máscara não afeta o número de hosts.\" — Motivo: é ela que define os bits de host — Versão tecnicamente correta: quanto maior o prefixo, menos hosts.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: máscara, 1s contíguos, notação decimal, CIDR, bits de host.\n- Regras e fórmulas: hosts = 2^(32 − prefixo) − 2; /26 = 255.255.255.192.\n- Exceções: /31 e /32 têm uso especial.\n- Palavras-chave: prefixo, contiguidade, tamanho, conversão, host.\n- Checklist de domínio: (1) Explico a máscara? (2) Converto notações? (3) Reconheço inválidas? (4) Calculo o tamanho?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que a máscara separa? (2) 255.255.255.192 equivale a qual prefixo? (3) Quantos hosts tem uma /30? (4) Por que 255.0.255.0 é inválida? (5) Quantos hosts tem uma /27?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o papel da máscara e converterá entre notação decimal e prefixo CIDR, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a notação CIDR; (b) o cálculo do endereço de rede por AND; (c) o cálculo do broadcast; (d) o intervalo de hosts. POR QUE O CONHECIMENTO É IMPORTANTE: calcular rede e broadcast é a operação mais cobrada de endereçamento; erro de bit altera toda a resposta. PRÉ-REQUISITOS: estrutura IPv4; máscaras. OBJETIVOS OBSERVÁVEIS: (1) escrever IP/prefixo; (2) calcular a rede por AND; (3) calcular o broadcast; (4) determinar o intervalo de hosts. COMPETÊNCIAS DESENVOLVIDAS: cálculo binário de sub-redes. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.1 (máscaras); unidade 4.2 (sub-redes/hosts). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a notação CIDR (Classless Inter-Domain Routing) escreve um endereço e seu prefixo como IP/prefixo (por exemplo, 192.168.1.0/24), dispensando as classes. Para achar o ENDEREÇO DE REDE, aplica-se o E lógico (AND) bit a bit entre o IP e a máscara. Para achar o BROADCAST, tomam-se os bits de host do endereço de rede e colocam-se todos em 1. Os hosts válidos vão do endereço de rede +1 até o broadcast −1. Exemplo completo: IP 192.168.1.130/25. A máscara /25 é 255.255.255.128. O último octeto em binário: 130 = 10000010; a máscara 128 = 10000000. AND = 10000000 = 128, logo a rede é 192.168.1.128. O broadcast é 192.168.1.255 (bits de host em 1). Os hosts válidos são 192.168.1.129 a 192.168.1.254, ou seja, 2^(32−25) − 2 = 2^7 − 2 = 128 − 2 = 126 hosts. Variação: o IP 192.168.1.100/25 pertence à rede 192.168.1.0/25 (pois 100 = 01100100 e AND com 128 = 0), e não à rede .128 — pegadinha clássica.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: aplicar AND no último octeto quando a máscara é /24.\n- Nível intermediário: calcular rede e broadcast para prefixos diversos.\n- Nível avançado: localizar o intervalo de hosts e o número de hosts.\n- Nível especialista: decidir a qual sub-rede um IP pertence quando há várias.\nCOMPARAÇÕES CRÍTICAS:\n- endereço de rede x broadcast: o primeiro tem bits de host em 0; o segundo, em 1 — ambos não são atribuíveis a hosts.\n- AND com máscara /25 x /24: a mesma faixa pode gerar redes diferentes conforme o prefixo.\n- 192.168.1.130/25 x 192.168.1.100/25: pertencem a redes distintas — a máscara muda o resultado.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O IP 192.168.1.130/25 está na rede 192.168.1.0.\" — Motivo: o AND com /25 dá .128 — Versão tecnicamente correta: pertence a 192.168.1.128/25.\n- Afirmação errada: \"O broadcast é sempre x.x.x.255.\" — Motivo: depende da máscara — Versão tecnicamente correta: é o endereço com bits de host em 1.\n- Afirmação errada: \"O endereço de rede pode ser atribuído a um host.\" — Motivo: identifica a rede — Versão tecnicamente correta: rede e broadcast não são atribuíveis.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: CIDR, AND, endereço de rede, broadcast, intervalo de hosts.\n- Regras e fórmulas: rede = IP AND máscara; broadcast = rede com bits de host em 1; hosts = 2^(32−prefixo) − 2.\n- Exceções: /31 e /32 tratam rede/broadcast de forma especial.\n- Palavras-chave: prefixo, AND, intervalo, hosts utilizáveis.\n- Checklist de domínio: (1) Escrevo IP/prefixo? (2) Calculo a rede? (3) Calculo o broadcast? (4) Determino o intervalo?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como se calcula a rede? (2) Qual a rede de 192.168.1.130/25? (3) Qual o broadcast? (4) Quantos hosts tem essa sub-rede? (5) 192.168.1.100/25 pertence a qual rede?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de calcular endereço de rede e broadcast a partir de IP e prefixo, usando operação AND, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t2-s2",
                "titulo": "Quantidade de sub-redes e hosts",
                "objetivoAprendizagem": "Aluno calculará número de sub-redes e hosts a partir de um prefixo dado e de um prefixo original.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a fórmula de número de sub-redes; (b) a fórmula de número de hosts; (c) o efeito dos bits emprestados; (d) casos especiais (/30, /31, /32). POR QUE O CONHECIMENTO É IMPORTANTE: calcular sub-redes e hosts é central em endereçamento; a prova cobra as fórmulas e os casos especiais. PRÉ-REQUISITOS: máscaras; CIDR. OBJETIVOS OBSERVÁVEIS: (1) calcular sub-redes; (2) calcular hosts; (3) interpretar bits emprestados; (4) reconhecer casos especiais. COMPETÊNCIAS DESENVOLVIDAS: cálculo de dimensionamento de rede. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (CIDR); unidade 4.3 (VLSM). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: ao dividir uma rede original em sub-redes, emprestam-se bits da parte de host para a parte de rede. O número de sub-redes resultantes é 2^(bits emprestados). O número de hosts por sub-rede é 2^(bits de host restantes) − 2, pois o endereço com todos os bits de host em 0 identifica a rede e o com todos em 1 identifica o broadcast; ambos não são atribuíveis. Os bits de host são 32 − prefixo. Exemplo 1: a rede 192.168.0.0/16 dividida em /24 empresta 24 − 16 = 8 bits, gerando 2^8 = 256 sub-redes, cada uma com 2^(32−24) − 2 = 2^8 − 2 = 254 hosts. Exemplo 2: uma /30 tem 2^(32−30) − 2 = 2^2 − 2 = 2 hosts, sendo ideal para links ponto a ponto. Há casos especiais definidos na RFC 3021: a /31 permite 2 endereços sem reservar rede/broadcast (para enlaces ponto a ponto) e a /32 identifica um único endereço (usado em loopback e rotas de host). Um erro frequente é esquecer de subtrair 2 e informar o total de endereços como se fossem hosts. Interpretar o resultado é essencial: escolhe-se o prefixo conforme a necessidade de hosts, respeitando os limites.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: calcular hosts por sub-rede para prefixos comuns.\n- Nível intermediário: calcular o número de sub-redes a partir dos bits emprestados.\n- Nível avançado: dimensionar o prefixo para uma quantidade de hosts requerida.\n- Nível especialista: aplicar /31 e /32 corretamente em links e rotas.\nCOMPARAÇÕES CRÍTICAS:\n- total de endereços x hosts utilizáveis: a /24 tem 256 endereços e 254 hosts — confundir erra a conta.\n- sub-redes x hosts: emprestar bits aumenta sub-redes e reduz hosts — relação inversa.\n- /30 x /31: a /30 tem 2 hosts e reserva rede/broadcast; a /31 tem 2 hosts sem reservá-los.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Uma /24 tem 256 hosts.\" — Motivo: dois endereços são reservados — Versão tecnicamente correta: 254 hosts.\n- Afirmação errada: \"Dividir /16 em /24 dá 8 sub-redes.\" — Motivo: os bits emprestados são 8 — Versão tecnicamente correta: 2^8 = 256 sub-redes.\n- Afirmação errada: \"/32 não pode ser usado.\" — Motivo: identifica um host/rota — Versão tecnicamente correta: é usado em loopback e rotas de host.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: bits emprestados, bits de host, sub-redes, hosts, RFC 3021.\n- Regras e fórmulas: sub-redes = 2^(emprestados); hosts = 2^(32 − prefixo) − 2.\n- Exceções: /31 (2 hosts sem rede/broadcast) e /32 (host único).\n- Palavras-chave: dimensionamento, prefixo, reserva, relação inversa.\n- Checklist de domínio: (1) Calculo sub-redes? (2) Calculo hosts? (3) Interpreto bits emprestados? (4) Reconheço casos especiais?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantos hosts tem uma /26? (2) E uma /30? (3) Dividir /16 em /24 dá quantas sub-redes? (4) O que a /31 permite? (5) Por que subtrair 2?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de calcular número de sub-redes e hosts a partir de um prefixo dado e de um prefixo original, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t2-s3",
                "titulo": "Intervalos de hosts e validação",
                "objetivoAprendizagem": "Aluno determinará o intervalo de hosts válidos de uma sub-rede e validará se um IP pertence a ela.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como determinar o intervalo de hosts válidos; (b) como validar se um IP pertence a uma sub-rede; (c) as pegadinhas de validação. POR QUE O CONHECIMENTO É IMPORTANTE: validar endereços evita configurar hosts em endereços inválidos; a prova cobra a verificação. PRÉ-REQUISITOS: cálculo de rede e broadcast. OBJETIVOS OBSERVÁVEIS: (1) determinar o intervalo de hosts; (2) validar um IP; (3) identificar rede/broadcast; (4) recalcular a rede. COMPETÊNCIAS DESENVOLVIDAS: validação de endereçamento. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (CIDR); unidade 4.3 (VLSM); unidade 5 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: para uma sub-rede, o intervalo de hosts VÁLIDOS vai do endereço de rede MAIS UM até o broadcast MENOS UM. Para validar se um endereço pertence a uma sub-rede, calcula-se o endereço de rede do IP com a máscara (AND) e compara-se com o endereço de rede da sub-rede: se forem iguais, o IP pertence a ela. As pegadinhas comuns são: atribuir um IP cujos bits de host estão todos em 0 (é o endereço de rede, não um host); atribuir um cujo bits de host estão todos em 1 (é o broadcast); combinar um IP com uma máscara inconsistente (o IP não pertenceria à sub-rede configurada); e confundir o prefixo (/n) com o número de hosts. A regra de ouro é RECALCULAR a rede em vez de confiar na aparência do endereço. Exemplo: na sub-rede 192.168.1.128/25 (rede .128, broadcast .255), os hosts válidos são 192.168.1.129 a 192.168.1.254; o IP 192.168.1.128 é a rede e o 192.168.1.255 é o broadcast, ambos inválidos como host. Variação: para validar 192.168.1.200/25, o AND com 255.255.255.128 dá 192.168.1.128, confirmando que pertence à sub-rede.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: listar o intervalo a partir da rede e do broadcast.\n- Nível intermediário: validar um IP com AND.\n- Nível avançado: detectar rede e broadcast usados indevidamente como hosts.\n- Nível especialista: diagnosticar um conflito de endereço por sobreposição de sub-redes.\nCOMPARAÇÕES CRÍTICAS:\n- endereço de rede x host válido: o primeiro é o \"primeiro endereço\"; os hosts começam no segundo.\n- broadcast x último host: o broadcast é o último endereço; o último host é o penúltimo.\n- pertencer x aparecer próximo: a validação é por cálculo (AND), não por semelhança visual.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"O primeiro endereço da sub-rede serve para um host.\" — Motivo: é o endereço de rede — Versão tecnicamente correta: hosts começam em rede+1.\n- Afirmação errada: \"192.168.1.255 é sempre broadcast.\" — Motivo: depende da máscara — Versão tecnicamente correta: é broadcast apenas se todos os bits de host forem 1.\n- Afirmação errada: \"Dois IPs parecidos pertencem à mesma sub-rede.\" — Motivo: o prefixo decide — Versão tecnicamente correta: recalcular com AND.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: intervalo de hosts, validação por AND, endereço de rede, broadcast.\n- Regras e fórmulas: válidos = [rede+1, broadcast−1]; pertence se AND(IP, máscara) = rede.\n- Exceções: /31 dispensa rede/broadcast.\n- Palavras-chave: validação, intervalo, AND, sobreposição.\n- Checklist de domínio: (1) Determino o intervalo? (2) Valido um IP? (3) Identifico rede/broadcast? (4) Recalculo a rede?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual o intervalo de 192.168.1.128/25? (2) 192.168.1.128 pode ser host? (3) 192.168.1.200/25 pertence a qual rede? (4) Como validar um IP? (5) /31 tem broadcast?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de determinar o intervalo de hosts válidos de uma sub-rede e validará se um IP pertence a ela, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é VLSM; (b) a estratégia de alocação; (c) um exemplo de divisão; (d) o requisito de roteamento classless. POR QUE O CONHECIMENTO É IMPORTANTE: o VLSM evita desperdício de endereços; a prova cobra a ordem de alocação e o cálculo. PRÉ-REQUISITOS: sub-redes e hosts; CIDR. OBJETIVOS OBSERVÁVEIS: (1) definir VLSM; (2) ordenar a alocação (maior primeiro); (3) calcular prefixos por necessidade; (4) explicar o requisito classless. COMPETÊNCIAS DESENVOLVIDAS: planejamento eficiente de endereçamento. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (sub-redes/hosts); unidade 4.3 (sumarização). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa alta, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o VLSM (Variable Length Subnet Mask) permite dividir uma rede em sub-redes de TAMANHOS DIFERENTES, ajustando o prefixo a cada necessidade e reduzindo o desperdício. A estratégia é alocar primeiro as sub-redes que precisam de MAIS hosts e depois as menores, escolhendo o prefixo cujo número de hosts atenda com folga mínima. Exemplo: bloco 192.168.10.0/24, com necessidades de uma LAN de 50 hosts, uma de 25 hosts e um link entre roteadores. Cálculo: a LAN de 50 hosts precisa de 2^(bits de host) − 2 ≥ 50; 2^6 − 2 = 62 ≥ 50, então prefixo /26 (bits de host = 6). A de 25 hosts: 2^5 − 2 = 30 ≥ 25, então /27. O link ponto a ponto: 2 hosts, então /30. Alocação em ordem decrescente: LAN A = 192.168.10.0/26 (endereços .0 a .63); LAN B = 192.168.10.64/27 (.64 a .95); WAN = 192.168.10.96/30 (.96 a .99); o restante fica livre. O VLSM exige roteamento CLASSLESS (que carrega a máscara junto ao prefixo), como RIPv2, OSPF, EIGRP e BGP; protocolos classful antigos (como RIPv1) não o suportam, pois assumem a máscara pela classe.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que sub-redes podem ter tamanhos diferentes.\n- Nível intermediário: escolher o prefixo para uma quantidade de hosts.\n- Nível avançado: alocar blocos em ordem decrescente sem sobreposição.\n- Nível especialista: planejar o endereçamento completo de um site com necessidades mistas.\nCOMPARAÇÕES CRÍTICAS:\n- FLSM x VLSM: no FLSM todas as sub-redes têm o mesmo tamanho (desperdício); no VLSM os tamanhos variam — muda a eficiência.\n- ordem crescente x decrescente: alocar as menores primeiro fragmenta e pode inviabilizar as maiores.\n- classful x classless: o primeiro não suporta VLSM; o segundo, sim.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Deve-se alocar as sub-redes menores primeiro.\" — Motivo: a fragmentação dificulta as maiores — Versão tecnicamente correta: alocar as maiores primeiro.\n- Afirmação errada: \"RIPv1 suporta VLSM.\" — Motivo: é classful — Versão tecnicamente correta: exige protocolo classless.\n- Afirmação errada: \"Um link ponto a ponto precisa de /24.\" — Motivo: desperdiça endereços — Versão tecnicamente correta: usa /30 (ou /31).\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: VLSM, prefixo por necessidade, ordem decrescente, classless.\n- Regras e fórmulas: escolher /n tal que 2^(32−n) − 2 ≥ hosts necessários.\n- Exceções: links ponto a ponto podem usar /31.\n- Palavras-chave: tamanho variável, alocação, desperdício, sobreposição, máscara.\n- Checklist de domínio: (1) Defino VLSM? (2) Ordeno a alocação? (3) Calculo prefixos? (4) Explico o requisito classless?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é VLSM? (2) Por que alocar as maiores primeiro? (3) Que prefixo atende 50 hosts? (4) E um link ponto a ponto? (5) O que é roteamento classless?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar VLSM e aplicará divisão de sub-redes de tamanhos diferentes a partir de um bloco original, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t3-s2",
                "titulo": "Sumarização de rotas (agregação)",
                "objetivoAprendizagem": "Aluno explicará sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o que é sumarização de rotas; (b) o requisito de contiguidade/alinhamento; (c) como calcular uma rota agregada; (d) riscos. POR QUE O CONHECIMENTO É IMPORTANTE: a agregação reduz tabelas de roteamento e melhora a estabilidade; a prova cobra o cálculo do prefixo agregado. PRÉ-REQUISITOS: CIDR; sub-redes. OBJETIVOS OBSERVÁVEIS: (1) definir sumarização; (2) verificar contiguidade; (3) calcular o prefixo agregado; (4) citar riscos. COMPETÊNCIAS DESENVOLVIDAS: agregação de rotas; análise de tabela. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (VLSM); unidade 4.3 (planejamento). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a sumarização (ou agregação de rotas, supernetting) combina várias rotas contíguas em uma única rota com prefixo MENOR, reduzindo o tamanho da tabela de roteamento e a frequência de atualizações. O requisito é que os blocos sejam CONTÍGUOS e ALINHADOS em uma fronteira comum. Para calcular o prefixo agregado, identificam-se os bits COMUNS ao início de todos os blocos: o número desses bits é o prefixo da rota agregada. Exemplo: as rotas 192.168.0.0/24 até 192.168.7.0/24 (oito redes /24) compartilham os primeiros 21 bits, pois 8 = 2^3, o que \"encurta\" o prefixo de 24 para 24 − 3 = 21; a rota agregada é 192.168.0.0/21. Cálculo: 2^3 = 8 blocos; 32 − 21 = 11 bits de host; a faixa agregada cobre 192.168.0.0 a 192.168.7.255. A agregação só é VÁLIDA se todos os blocos pertencerem ao agregado e estiverem efetivamente alocados; anunciar um agregado que inclua blocos não alocados cria um \"buraco negro\" (black hole), em que o tráfego é descartado. Os benefícios são tabelas menores, menos processamento e maior estabilidade; o risco é justamente a agregação excessiva.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que várias rotas viram uma.\n- Nível intermediário: verificar se os blocos são contíguos.\n- Nível avançado: calcular o prefixo agregado pelos bits comuns.\n- Nível especialista: avaliar o risco de black hole ao agregar.\nCOMPARAÇÕES CRÍTICAS:\n- sumarização x rotas individuais: a primeira reduz a tabela; as segundas dão granularidade — a escolha afeta a estabilidade.\n- prefixo maior x menor: agregar reduz o prefixo (ex.: /24 → /21).\n- agregado válido x inválido: o válido cobre apenas blocos alocados; o inválido anuncia endereços inexistentes.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Qualquer conjunto de rotas pode ser sumarizado.\" — Motivo: exige contiguidade/alinhamento — Versão tecnicamente correta: blocos fora do agregado invalidam a soma.\n- Afirmação errada: \"Agregar aumenta o prefixo.\" — Motivo: reduz — Versão tecnicamente correta: /24 → /21.\n- Afirmação errada: \"Agregação excessiva é inofensiva.\" — Motivo: cria black hole — Versão tecnicamente correta: só agregar o que existe.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: sumarização, supernetting, contiguidade, alinhamento, prefixo agregado, black hole.\n- Regras e fórmulas: prefixo agregado = bits comuns; 8 blocos /24 → /21.\n- Exceções: blocos não alocados não podem ser incluídos.\n- Palavras-chave: agregação, tabela de rotas, estabilidade, fronteira, buraco negro.\n- Checklist de domínio: (1) Defino sumarização? (2) Verifico contiguidade? (3) Calculo o agregado? (4) Cito riscos?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que é sumarização? (2) Qual o requisito dos blocos? (3) Qual o agregado de 8 rotas /24? (4) O que é black hole? (5) Como se calcula o prefixo agregado?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar sumarização de rotas e calculará uma rota agregada a partir de blocos contíguos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t3-s3",
                "titulo": "Planejamento de endereçamento e roteamento classless",
                "objetivoAprendizagem": "Aluno explicará boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) boas práticas de planejamento de endereçamento; (b) roteamento classless x classful; (c) uso de /30, /31 e /64; (d) limitações do planejamento ruim. POR QUE O CONHECIMENTO É IMPORTANTE: o planejamento evita renumeração custosa e facilita a agregação; a prova cobra as boas práticas e o requisito classless. PRÉ-REQUISITOS: VLSM; sumarização. OBJETIVOS OBSERVÁVEIS: (1) listar boas práticas; (2) distinguir classless de classful; (3) indicar prefixos típicos; (4) apontar limitações. COMPETÊNCIAS DESENVOLVIDAS: planejamento de rede; documentação. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.3 (VLSM/sumarização); unidade 4.4 (IPv6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: planejar o endereçamento é decidir, de forma documentada, quais blocos serão usados por site, função ou tipo de dispositivo, reservando espaço para crescimento e mantendo a sumarização nas bordas. Boas práticas: documentar os blocos e suas finalidades; alocar blocos CONTÍGUOS para facilitar a agregação; evitar sobreposição; reservar blocos específicos para links ponto a ponto (com /30 ou /31); e, no IPv6, usar /64 por sub-rede (o tamanho esperado pelo SLAAC). O roteamento pode ser classless (CIDR), que carrega a máscara junto ao prefixo e suporta VLSM e sumarização — exemplos: RIPv2, OSPF, EIGRP, BGP e IS-IS; ou classful, que assume a máscara pela classe e NÃO suporta VLSM nem sumarização — exemplos: RIPv1 e IGRP. As limitações de um planejamento ruim são sérias: renumerar uma rede em produção é custoso e arriscado; a falta de contiguidade impede a agregação; e a agregação excessiva pode anunciar blocos não alocados. O planejamento deve ser feito ANTES da implantação, com folga para o crescimento e coerência com a topologia.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender por que planejar antes de configurar.\n- Nível intermediário: listar boas práticas e distinguir classless de classful.\n- Nível avançado: desenhar um esquema de endereçamento com blocos contíguos.\n- Nível especialista: revisar um plano existente e corrigir riscos de renumeração e agregação.\nCOMPARAÇÕES CRÍTICAS:\n- classless x classful: o primeiro suporta VLSM/sumarização; o segundo não — muda o que se pode projetar.\n- /30 x /31 x /64: /30 e /31 para links IPv4; /64 para sub-redes IPv6.\n- planejar x improvisar: o primeiro evita renumeração; o segundo gera custo futuro.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"RIPv1 suporta VLSM.\" — Motivo: é classful — Versão tecnicamente correta: requer protocolo classless.\n- Afirmação errada: \"IPv6 pode usar qualquer prefixo por sub-rede.\" — Motivo: o SLAAC espera /64 — Versão tecnicamente correta: usar /64 por sub-rede.\n- Afirmação errada: \"Renumeração é trivial.\" — Motivo: afeta muitos dispositivos e serviços — Versão tecnicamente correta: é custosa e deve ser evitada por planejamento.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: planejamento, documentação, contiguidade, classless/classful, /30, /31, /64.\n- Regras e fórmulas: blocos contíguos → agregação; classless → VLSM/sumarização.\n- Exceções: o IPv6 padroniza /64 por sub-rede.\n- Palavras-chave: renumeração, crescimento, sobreposição, agregação, protocolo.\n- Checklist de domínio: (1) Listo boas práticas? (2) Distingo classless/classful? (3) Indico prefixos típicos? (4) Aponto limitações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Cite três boas práticas. (2) O que distingue classless de classful? (3) Que prefixo usar em link ponto a ponto? (4) Que prefixo usar por sub-rede IPv6? (5) Por que evitar renumeração?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar boas práticas de planejamento de endereçamento e a necessidade de roteamento classless para VLSM, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a representação de 128 bits do IPv6; (b) as regras de abreviação; (c) o uso de \"::\"; (d) endereços especiais. POR QUE O CONHECIMENTO É IMPORTANTE: abreviar e desabreviar corretamente é exigência frequente; a prova cobra as regras de compressão. PRÉ-REQUISITOS: noção de hexadecimal e de binário. OBJETIVOS OBSERVÁVEIS: (1) representar um endereço; (2) abreviar corretamente; (3) expandir um endereço abreviado; (4) citar endereços especiais. COMPETÊNCIAS DESENVOLVIDAS: manipulação de endereços IPv6. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.4 (prefixos/tipos); unidade 3.1 (IPv4 x IPv6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: um endereço IPv6 tem 128 bits, escritos como oito grupos de 16 bits em hexadecimal, separados por dois-pontos (por exemplo, 2001:0db8:0000:0000:0000:ff00:0042:8329). Há duas regras de abreviação. A primeira: omitir zeros à ESQUERDA de cada grupo (0db8 → db8; 0042 → 42). A segunda: substituir UM único bloco de grupos consecutivos totalmente zeros por \"::\", podendo usar \"::\" apenas UMA vez por endereço, sob pena de ambiguidade. O exemplo acima abrevia-se para 2001:db8::ff00:42:8329. Endereços especiais: o loopback é ::1 e o endereço não especificado é :: (todos os bits em zero). A expansão exige cuidado: ao ver \"::\", deve-se preencher com grupos de zeros até completar oito. Por exemplo, 2001:db8::1 expande para 2001:0db8:0000:0000:0000:0000:0000:0001. A tentação de usar \"::\" duas vezes gera endereços inválidos, pois não se sabe quantos zeros cada ocorrência representa. Interpretar e reescrever endereços IPv6 é uma habilidade prática para configuração e diagnóstico.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer os oito grupos e o separador.\n- Nível intermediário: aplicar as duas regras de abreviação.\n- Nível avançado: expandir um endereço abreviado com \"::\".\n- Nível especialista: detectar um endereço IPv6 malformado (dois \"::\" ou grupos a mais).\nCOMPARAÇÕES CRÍTICAS:\n- zEROS à esquerda x bloco de zeros: a primeira abreviação de cada grupo é sempre possível; a segunda, só para um bloco contíguo.\n- \"::\" x \":\" — \"::\" representa um ou mais grupos de zeros; \":\" é o separador.\n- IPv4 x IPv6: decimal pontuado x hexadecimal com dois-pontos.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Pode-se usar :: duas vezes no mesmo endereço.\" — Motivo: gera ambiguidade — Versão tecnicamente correta: no máximo uma vez.\n- Afirmação errada: \"2001:db8::1 tem 4 grupos.\" — Motivo: \"::\" representa grupos omitidos — Versão tecnicamente correta: expanDe para 8 grupos.\n- Afirmação errada: \"Zeros à esquerda são obrigatórios.\" — Motivo: podem ser omitidos — Versão tecnicamente correta: sua omissão é permitida.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: 128 bits, 8 grupos, hexadecimal, abreviação, \"::\", loopback ::1, ::.\n- Regras e fórmulas: omitir zeros à esquerda; usar \"::\" uma vez; completar para 8 grupos.\n- Exceções: \"::\" não pode ser usado duas vezes.\n- Palavras-chave: representação, compressão, ambiguidade, expansão.\n- Checklist de domínio: (1) Represento um endereço? (2) Abrevio? (3) ExpanDo? (4) Cito especiais?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantos bits tem um IPv6? (2) Quantos grupos? (3) Quantas vezes se usa \"::\"? (4) O que é ::1? (5) Expanda 2001:db8::1.",
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
                "criterioDominio": "PoC (A): o aluno é capaz de representar e abreviará endereços IPv6 corretamente, aplicando as regras de compressão, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t4-s2",
                "titulo": "Prefixos e tipos de endereço IPv6",
                "objetivoAprendizagem": "Aluno identificará os principais tipos de endereço IPv6 (global unicast, link-local, unique local, multicast, loopback) e seus prefixos.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) global unicast; (b) unique local; (c) link-local; (d) multicast; (e) loopback e prefixos comuns. POR QUE O CONHECIMENTO É IMPORTANTE: reconhecer o tipo de endereço IPv6 pelo prefixo é cobrado com frequência; a prova explora os prefixos. PRÉ-REQUISITOS: representação IPv6. OBJETIVOS OBSERVÁVEIS: (1) identificar os tipos pelo prefixo; (2) explicar cada tipo; (3) associar prefixos comuns; (4) classificar um endereço. COMPETÊNCIAS DESENVOLVIDAS: classificação de endereços IPv6. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.4 (representação); unidade 3.3 (NDP/SLAAC); unidade 4.1 (tipos IPv4). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: os tipos de endereço IPv6 são reconhecidos pelo prefixo. O Global Unicast Address (GUA) está em 2000::/3 e é roteável globalmente, equivalente ao endereço público do IPv4. O Unique Local Address (ULA) está em fc00::/7 (na prática, fd00::/8) e é privado, não roteável na Internet — análogo às faixas privadas do IPv4. O Link-Local está em fe80::/10 e serve à comunicação no mesmo enlace; é autoconfigurado e obrigatório em toda interface IPv6. O Multicast está em ff00::/8 e endereça grupos, substituindo o broadcast (que NÃO existe no IPv6). O loopback é ::1/128 e o endereço não especificado é ::/128. O anycast não tem prefixo próprio: usa um endereço global unicast atribuído a vários nós, sendo entregue ao mais próximo. Quanto ao tamanho dos prefixos, /64 é o padrão para sub-redes (o SLAAC assume /64), /128 identifica um único host e /48 ou /56 são comuns para uma organização. Classificar um endereço pelo prefixo é uma habilidade prática: fe80:: é link-local; fd00:: é ULA; 2001:db8:: (documentação) pertence ao GUA. Não confundir o link-local IPv6 (fe80::/10) com o link-local IPv4 (169.254.0.0/16).\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer fe80:: e 2000::/3.\n- Nível intermediário: associar cada prefixo ao tipo.\n- Nível avançado: explicar por que não há broadcast e como o multicast o substitui.\n- Nível especialista: planejar o uso de /64 por sub-rede e /48 por organização.\nCOMPARAÇÕES CRÍTICAS:\n- GUA x ULA: o primeiro é roteável; o segundo é privado — análogo a público x privado no IPv4.\n- link-local x global: o primeiro vale no enlace; o segundo, globalmente.\n- multicast x broadcast: o IPv6 elimina o broadcast e usa multicast.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"IPv6 tem broadcast.\" — Motivo: foi eliminado — Versão tecnicamente correta: funções equivalentes usam multicast.\n- Afirmação errada: \"fe80:: é um endereço global.\" — Motivo: é link-local — Versão tecnicamente correta: fe80::/10 é local ao enlace.\n- Afirmação errada: \"ULA é roteável na Internet.\" — Motivo: é privado — Versão tecnicamente correta: fc00::/7 não roteia globalmente.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: GUA (2000::/3), ULA (fc00::/7), link-local (fe80::/10), multicast (ff00::/8), ::1, ::, anycast, /64.\n- Regras e fórmulas: tipo pelo prefixo; /64 por sub-rede; /128 por host.\n- Exceções: o anycast usa endereço GUA replicado.\n- Palavras-chave: prefixo, roteável, privado, enlace, grupo.\n- Checklist de domínio: (1) Identifico pelo prefixo? (2) Explico cada tipo? (3) Associo prefixos? (4) Classifico endereços?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual o prefixo do GUA? (2) E do ULA? (3) E do link-local? (4) O IPv6 tem broadcast? (5) Que prefixo se usa por sub-rede?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de identificar os principais tipos de endereço IPv6 (global unicast, link-local, unique local, multicast, loopback) e seus prefixos, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u4-t4-s3",
                "titulo": "Pegadinhas de endereçamento",
                "objetivoAprendizagem": "Aluno reconhecerá armadilhas comuns em questões de endereçamento e sub-redes.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as armadilhas mais comuns de endereçamento e sub-redes; (b) o método seguro de calcular; (c) casos de IPv4 e IPv6; (d) boas práticas de verificação. POR QUE O CONHECIMENTO É IMPORTANTE: a maioria dos erros em questões de endereçamento decorre de armadilhas previsíveis; reconhecê-las evita perder pontos. PRÉ-REQUISITOS: todo o tópico 4.4 e 4.2. OBJETIVOS OBSERVÁVEIS: (1) listar armadilhas; (2) aplicar o recálculo; (3) evitar confusões IPv4/IPv6; (4) validar resultados. COMPETÊNCIAS DESENVOLVIDAS: autoverificação; precisão de cálculo. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 4.2 (CIDR/sub-redes); unidade 4.4 (IPv6). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: as armadilhas mais comuns em endereçamento são: (1) confundir o prefixo /n com o número de hosts — /24 tem 256 endereços e 254 hosts; (2) esquecer de subtrair os endereços de rede e broadcast; (3) supor que o último octeto 255 é sempre broadcast — depende da máscara; (4) confundir máscara decimal com prefixo; (5) não verificar o ALINHAMENTO do bloco — 192.168.1.130/25 pertence à rede .128, enquanto 192.168.1.100/25 pertence à rede .0; (6) no VLSM, alocar sub-redes pequenas primeiro e fragmentar o espaço; (7) classificar um endereço como público/privado pela aparência — 172.32.x.x é público, embora pareça privado; (8) no IPv6, usar \"::\" mais de uma vez; (9) confundir link-local IPv4 (169.254) com IPv6 (fe80); (10) usar 2^(bits) sem o \"−2\" para hosts. O método seguro é sempre recalcular o endereço de rede com E lógico (AND) e derivar broadcast e intervalo a partir dele, em vez de confiar na aparência. Exercício ilustrativo: para 10.20.30.40/26, a máscara é 255.255.255.192; o AND do último octeto (40 = 00101000) com 192 (11000000) resulta em 0, logo a rede é 10.20.30.0/26, o broadcast é 10.20.30.63 e os hosts vão de .1 a .62 (62 hosts). Variação: 10.20.30.200/26 tem AND igual a 192, então pertence à rede 10.20.30.192/26.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: lembrar de subtrair 2 para hosts.\n- Nível intermediário: aplicar o recálculo por AND.\n- Nível avançado: detectar alinhamento e classificação incorretos.\n- Nível especialista: auditar uma lista de endereços e apontar todas as armadilhas.\nCOMPARAÇÕES CRÍTICAS:\n- prefixo x hosts: /n é o prefixo; hosts = 2^(32−n) − 2.\n- aparência x cálculo: a classificação e o pertencimento exigem cálculo.\n- IPv4 x IPv6: 169.254 (IPv4) x fe80 (IPv6) são link-local distintos.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"192.168.1.100/25 está na rede .128.\" — Motivo: AND dá .0 — Versão tecnicamente correta: pertence à rede .0.\n- Afirmação errada: \"172.32.5.3 é privado.\" — Motivo: a faixa privada termina em 172.31 — Versão tecnicamente correta: é público.\n- Afirmação errada: \"Basta olhar o último octeto para achar o broadcast.\" — Motivo: depende da máscara — Versão tecnicamente correta: calcular com bits de host em 1.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: prefixo x hosts, subtração de 2, alinhamento, AND, VLSM, link-local.\n- Regras e fórmulas: rede = IP AND máscara; hosts = 2^(32−n) − 2.\n- Exceções: 172.32.x.x é público; /31 dispensa rede/broadcast.\n- Palavras-chave: armadilha, recálculo, alinhamento, classificação.\n- Checklist de domínio: (1) Listo armadilhas? (2) Aplico o recálculo? (3) Evito confusões IPv4/IPv6? (4) Valido resultados?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Quantos hosts tem uma /26? (2) 192.168.1.100/25 pertence a qual rede? (3) 172.32.5.3 é privado? (4) 169.254 e fe80 são o quê? (5) Qual o broadcast de 10.20.30.40/26?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de reconhecer armadilhas comuns em questões de endereçamento e sub-redes, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a finalidade do ping; (b) a sintaxe básica; (c) a interpretação da saída (RTT, perda, TTL); (d) limitações. POR QUE O CONHECIMENTO É IMPORTANTE: o ping é o primeiro teste de conectividade; a prova cobra como interpretar seus resultados e suas limitações. PRÉ-REQUISITOS: ICMP; noção de RTT. OBJETIVOS OBSERVÁVEIS: (1) explicar a finalidade; (2) usar a sintaxe; (3) interpretar RTT e perda; (4) reconhecer limitações. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico inicial; leitura de saída. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 1.3 (métricas); unidade 5.2 (ip/rotas); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o ping envia uma mensagem ICMP echo request e espera um echo reply, medindo o RTT (tempo de ida e volta) e a perda de pacotes. A sintaxe é \"ping <host>\": no Linux e no macOS o comando continua até ser interrompido; no Windows, envia 4 pacotes por padrão. Opções úteis: limitar a quantidade (‑c no Linux, ‑n no Windows), definir TTL (‑t) e intervalo (‑i). Interpretação: RTT baixo e estável indica boa conectividade; RTT alto sugere latência ou congestionamento; perda de pacotes aponta problemas de enlace, roteamento ou bloqueio; \"Destination Host Unreachable\" indica problema de roteamento/ARP; \"Request timed out\" indica ausência de resposta (firewall, host desligado ou perda). A principal LIMITAÇÃO é que o ping usa ICMP, que pode ser BLOQUEADO por firewalls mesmo com TCP/UDP funcionando: ausência de resposta ao ping NÃO prova que o serviço está fora. Além disso, o ping testa conectividade de camada 3, não a aplicação — se o alvo bloqueia ICMP, é preciso testar a porta específica. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: usar ping a um gateway para testar conectividade.\n- Nível intermediário: interpretar RTT, perda e TTL.\n- Nível avançado: distinguir \"timed out\" de \"unreachable\" pelas causas.\n- Nível especialista: concluir corretamente mesmo quando o ICMP está bloqueado.\nCOMPARAÇÕES CRÍTICAS:\n- timed out x unreachable: o primeiro é ausência de resposta; o segundo indica falha de roteamento/ARP.\n- RTT alto x perda: o primeiro é atraso; a segunda é descarte — sintomas distintos.\n- ping x teste de porta: o ping testa a camada 3; o teste de porta avalia o serviço.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se o ping falha, o serviço está fora.\" — Motivo: o ICMP pode ser bloqueado — Versão tecnicamente correta: testar a porta específica.\n- Afirmação errada: \"O ping mede a velocidade da conexão.\" — Motivo: mede o RTT — Versão tecnicamente correta: o RTT é latência, não banda.\n- Afirmação errada: \"O TTL mede o tempo de vida em segundos.\" — Motivo: conta saltos — Versão tecnicamente correta: o TTL limita o número de roteadores.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ping, ICMP echo, RTT, perda, TTL, timed out, unreachable.\n- Regras e fórmulas: ping <host>; ‑c/‑n para quantidade; sinais lidos a partir do RTT e da perda.\n- Exceções: firewalls podem bloquear o ICMP, mascarando o estado real.\n- Palavras-chave: conectividade, latência, perda, bloqueio, simulação.\n- Checklist de domínio: (1) Explico a finalidade? (2) Uso a sintaxe? (3) Interpreto RTT/perda? (4) Reconheço limitações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Que mensagens o ping usa? (2) O que o RTT mede? (3) O que \"Request timed out\" indica? (4) E \"Destination Host Unreachable\"? (5) Por que a falha do ping não prova queda do serviço?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar a função do ping, sua sintaxe básica e interpretará a saída (RTT, perda, TTL), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t1-s2",
                "titulo": "traceroute/tracert: finalidade, sintaxe e interpretação",
                "objetivoAprendizagem": "Aluno explicará como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência).",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como o traceroute mapeia a rota; (b) a sintaxe; (c) a interpretação da saída; (d) limitações. POR QUE O CONHECIMENTO É IMPORTANTE: o traceroute localiza em que salto está o problema; a prova cobra o mecanismo (TTL crescente) e a leitura dos \"*\". PRÉ-REQUISITOS: ICMP; TTL; roteamento. OBJETIVOS OBSERVÁVEIS: (1) explicar o mecanismo; (2) usar a sintaxe; (3) interpretar saltos e \"*\"; (4) reconhecer limitações. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico de rota; interpretação de saída. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.1 (ping); unidade 3.3 (ICMP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o traceroute (Linux/macOS) e o tracert (Windows) mapeiam a rota até um destino enviando pacotes com TTL (Time To Live) CRESCENTE. Como cada roteador decrementa o TTL e, ao chegar a zero, descarta o pacote e devolve uma mensagem ICMP \"time exceeded\", o comando descobre sucessivamente cada salto. A sintaxe é \"traceroute <host>\" no Linux (que usa UDP por padrão, ou ICMP com ‑I) e \"tracert <host>\" no Windows (que usa ICMP). A saída lista os saltos, com endereço IP (e, se houver, nome) e os RTTs medidos; cada salto costuma exibir três tempos. O símbolo \"*\" indica ausência de resposta daquele salto — o roteador pode não responder ICMP, pode haver perda ou bloqueio por firewall. As limitações são relevantes: roteadores podem não responder; as rotas podem ser ASSIMÉTRICAS (ida diferente da volta); o NAT pode interferir; o balanceamento de carga faz um mesmo destino usar caminhos variados, tornando os saltos inconstantes; e o comando não mede a rota de retorno. Por isso, o traceroute deve ser interpretado como indicativo, não como verdade absoluta. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que o comando lista os saltos.\n- Nível intermediário: explicar o truque do TTL crescente.\n- Nível avançado: interpretar os \"*\" e a assimetria de rotas.\n- Nível especialista: concluir qual salto provavelmente concentra a falha.\nCOMPARAÇÕES CRÍTICAS:\n- traceroute x tracert: nomes diferentes por sistema (Linux/macOS x Windows).\n- \"*\" x salto com RTT: o primeiro é ausência de resposta; o segundo, salto que respondeu.\n- rota de ida x de volta: podem diferir (assimetria) — o comando mostra a ida.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Um '*' significa que o salto está quebrado.\" — Motivo: pode ser só bloqueio de ICMP — Versão tecnicamente correta: indica ausência de resposta, não necessariamente falha.\n- Afirmação errada: \"O traceroute mostra a rota de volta.\" — Motivo: mostra o caminho de ida — Versão tecnicamente correta: a volta pode ser diferente.\n- Afirmação errada: \"Os saltos são sempre os mesmos.\" — Motivo: há balanceamento de carga — Versão tecnicamente correta: podem variar entre execuções.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: traceroute, tracert, TTL crescente, time exceeded, salto, \"*\", assimetria.\n- Regras e fórmulas: TTL incrementado a cada tentativa; cada roteador devolve \"time exceeded\".\n- Exceções: roteadores podem não responder ICMP.\n- Palavras-chave: rota, salto, RTT, bloqueio, balanceamento.\n- Checklist de domínio: (1) Explico o mecanismo? (2) Uso a sintaxe? (3) Interpreto saltos/\"*\"? (4) Reconheço limitações?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como o traceroute descobre os saltos? (2) Qual a diferença entre traceroute e tracert? (3) O que \"*\" indica? (4) Por que a rota pode variar? (5) O comando mostra a rota de retorno?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar como traceroute mapeia a rota e interpretará sua saída (saltos, *, latência), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t1-s3",
                "titulo": "Ferramentas complementares: mtr, pathping, hping3",
                "objetivoAprendizagem": "Aluno explicará o uso de mtr, pathping e hping3 e quando utilizá-los.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o mtr; (b) o pathping; (c) o hping3; (d) quando usar cada ferramenta. POR QUE O CONHECIMENTO É IMPORTANTE: ferramentas contínuas e de injeção de pacotes vão além do ping/traceroute; a prova cobra sua finalidade e uso ético. PRÉ-REQUISITOS: ping; traceroute; TCP/UDP/ICMP. OBJETIVOS OBSERVÁVEIS: (1) explicar o mtr; (2) explicar o pathping; (3) explicar o hping3; (4) escolher a ferramenta por objetivo. COMPETÊNCIAS DESENVOLVIDAS: seleção de ferramenta; diagnóstico avançado. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.1 (ping/traceroute); unidade 5.2 (ip/ss); Módulo 4 (uso ético). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa baixa a média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o mtr (My Traceroute) combina ping e traceroute de forma CONTÍNUA, exibindo, para cada salto, a perda e a latência ao longo do tempo — é útil para identificar um salto com perda intermitente. O pathping (Windows) faz algo semelhante: envia pacotes por um período e calcula estatísticas por salto, revelando onde a perda se concentra. O hping3 permite CONSTRUIR pacotes TCP, UDP ou ICMP sob medida, servindo para testar regras de firewall, descobrir a MTU do caminho e sondar portas; geralmente exige privilégios administrativos. O uso em diagnóstico: mtr/pathping localizam o salto problemático com visão estatística; hping3 testa hipóteses específicas (uma regra de firewall, o tamanho máximo de pacote). As limitações incluem bloqueio de ICMP, variação de resultados conforme a carga e o fato de que o hping3 pode ser usado de forma maliciosa — portanto, deve ser aplicado apenas em redes próprias ou com autorização explícita. Ferramentas de injeção de pacotes exigem responsabilidade e observância das normas de segurança. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: entender que são ferramentas além do ping.\n- Nível intermediário: associar cada ferramenta ao seu objetivo.\n- Nível avançado: interpretar estatísticas por salto para localizar perda.\n- Nível especialista: escolher a ferramenta e justificar a abordagem em um cenário.\nCOMPARAÇÕES CRÍTICAS:\n- mtr x traceroute: o primeiro é contínuo e estatístico; o segundo é uma fotografia da rota.\n- mtr/pathping x hping3: os primeiros medem latência/perda; o hping3 injeta pacotes sob medida.\n- uso legítimo x abusivo: o hping3 pode ser ofensivo se mal usado — a autorização é condição.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"mtr e traceroute são idênticos.\" — Motivo: o mtr é contínuo e estatístico — Versão tecnicamente correta: o mtr acompanha ao longo do tempo.\n- Afirmação errada: \"hping3 é apenas um ping melhorado.\" — Motivo: ele constrói pacotes arbitrários — Versão tecnicamente correta: serve para testar firewalls e MTU.\n- Afirmação errada: \"Qualquer um pode usar hping3 em qualquer rede.\" — Motivo: exige autorização — Versão tecnicamente correta: usar apenas em redes próprias/autorizadas.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: mtr, pathping, hping3, pacote forjado, MTU, firewall, autorização.\n- Regras e fórmulas: mtr/pathping = latência/perda por salto; hping3 = pacotes sob medida.\n- Exceções: bloqueio de ICMP distorce resultados.\n- Palavras-chave: contínuo, estatística, injeção, ética, diagnóstico.\n- Checklist de domínio: (1) Explico o mtr? (2) Explico o pathping? (3) Explico o hping3? (4) Escolho por objetivo?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o mtr acrescenta ao traceroute? (2) Para que serve o pathping? (3) O que o hping3 permite fazer? (4) Que autorização é exigida? (5) Quando usar cada um?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o uso de mtr, pathping e hping3 e quando utilizá-los, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) as funções do ipconfig; (b) as funções do ifconfig; (c) a interpretação das saídas; (d) o comando moderno \"ip\". POR QUE O CONHECIMENTO É IMPORTANTE: verificar a configuração de interface é o primeiro passo de muitos diagnósticos; a prova cobra opções e saídas. PRÉ-REQUISITOS: endereçamento; DHCP. OBJETIVOS OBSERVÁVEIS: (1) usar ipconfig e opções; (2) usar ifconfig; (3) interpretar a saída; (4) renovar DHCP e limpar cache DNS. COMPETÊNCIAS DESENVOLVIDAS: inspeção de configuração; renovação de concessão. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (DHCP); unidade 5.2 (ip/ss); unidade 5.3 (cache DNS). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o ipconfig (Windows) exibe a configuração das interfaces: endereço IP, máscara, gateway e DNS. Opções úteis: /all (detalhado, incluindo MAC, DHCP e servidores), /release (libera o IP obtido por DHCP), /renew (renova a concessão), /flushdns (limpa o cache DNS) e /displaydns (mostra o cache). O ifconfig (Linux/macOS, legado) exibe e altera a configuração das interfaces: inet (endereço IPv4), netmask, broadcast, ether (MAC) e o estado UP/DOWN. Hoje, no Linux, ele foi substituído pelo comando \"ip\". O uso típico é verificar qual IP foi obtido, identificar a interface ativa, renovar a concessão DHCP e limpar o cache DNS quando um nome resolve para um endereço antigo. A interpretação correta da saída evita conclusões apressadas: se a interface aparece sem IP ou com um endereço link-local 169.254.x.x, provavelmente o DHCP falhou. Se o gateway esperado não aparece, a rota padrão pode estar ausente. Comparar \"ipconfig\" (Windows) com \"ifconfig\" (Linux/macOS) é ponto frequente de prova, junto com a transição para o comando \"ip\". Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: exibir a configuração da interface.\n- Nível intermediário: usar /all e interpretar MAC, DHCP e DNS.\n- Nível avançado: renovar DHCP e limpar cache DNS como parte do diagnóstico.\n- Nível especialista: distinguir falha de DHCP de falha de rota pela saída.\nCOMPARAÇÕES CRÍTICAS:\n- ipconfig x ifconfig: o primeiro é do Windows; o segundo, do Linux/macOS (legado).\n- release x renew: o primeiro libera o IP; o segundo solicita um novo.\n- ifconfig x ip: o ifconfig é legado; o \"ip\" é o comando atual do Linux.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"ipconfig é do Linux.\" — Motivo: é do Windows — Versão tecnicamente correta: no Linux usa-se \"ip\" (ou \"ifconfig\" legado).\n- Afirmação errada: \"169.254.x.x é um IP normal.\" — Motivo: é link-local/APIPA — Versão tecnicamente correta: indica falha na obtenção por DHCP.\n- Afirmação errada: \"/flushdns mostra o cache.\" — Motivo: ele limpa — Versão tecnicamente correta: /displaydns mostra; /flushdns limpa.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ipconfig, ifconfig, \"ip\", /all, /release, /renew, /flushdns, UP/DOWN.\n- Regras e fórmulas: ipconfig (Windows) x ifconfig/ip (Linux/macOS).\n- Exceções: 169.254 indica ausência de DHCP.\n- Palavras-chave: interface, concessão, gateway, MAC, cache.\n- Checklist de domínio: (1) Uso ipconfig? (2) Uso ifconfig? (3) Interpreto a saída? (4) Renovo DHCP e limpo cache?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que ipconfig exibe? (2) O que faz /renew? (3) E /flushdns? (4) O que ifconfig mostra? (5) O que 169.254.x.x sugere?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar as funções de ipconfig (Windows) e ifconfig (Linux/macOS legado) e interpretará saídas típicas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t2-s2",
                "titulo": "comando ip e netstat/ss",
                "objetivoAprendizagem": "Aluno explicará o uso do comando 'ip' (Linux) e de netstat/ss para inspecionar conexões e portas.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o comando ip do Linux; (b) o netstat e o ss; (c) a interpretação de conexões e portas; (d) o uso no diagnóstico. POR QUE O CONHECIMENTO É IMPORTANTE: inspecionar portas e conexões revela se um serviço está ativo e quem está conectado; a prova cobra as opções e a leitura. PRÉ-REQUISITOS: TCP/UDP; portas. OBJETIVOS OBSERVÁVEIS: (1) usar o comando ip; (2) usar netstat/ss; (3) ler portas em escuta; (4) detectar conexões suspeitas. COMPETÊNCIAS DESENVOLVIDAS: inspeção de sockets; análise de segurança. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.2 (rotas/ARP); unidade 3 (portas); Módulo 4 (detecção). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o comando \"ip\" (do pacote iproute2, Linux) inspeciona e configura a rede: \"ip addr\" exibe os endereços das interfaces, \"ip link\" mostra o estado dos enlaces, \"ip route\" apresenta a tabela de rotas e \"ip neigh\" o cache de vizinhos (ARP/NDP). Ele substitui os antigos ifconfig, route e arp. O netstat (legado) exibe conexões ativas, portas em escuta, tabela de roteamento e estatísticas; o ss (socket statistics) é o sucessor moderno, mais rápido, com as mesmas finalidades. As opções mais úteis de netstat/ss são: ‑t (TCP), ‑u (UDP), ‑l (listening/escuta), ‑n (numérico, sem resolver nomes) e ‑p (mostra o processo). Um exemplo clássico é \"ss -tlnp\", que lista as portas TCP em escuta com o processo responsável. No diagnóstico, essas ferramentas respondem a perguntas como: \"o serviço está escutando na porta esperada?\", \"há conexões estabelecidas suspeitas?\", \"alguma porta inesperada está aberta?\". A interpretação exige atenção: uma porta em escuta em 0.0.0.0 aceita conexões de qualquer origem, enquanto 127.0.0.1 restringe ao próprio host. Detectar uma porta desconhecida em escuta é um sinal que merece investigação, especialmente em servidores. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: listar portas em escuta.\n- Nível intermediário: filtrar por protocolo e mostrar o processo.\n- Nível avançado: distinguir escuta local de global e avaliar o risco.\n- Nível especialista: usar essas ferramentas para investigar um indicador de comprometimento.\nCOMPARAÇÕES CRÍTICAS:\n- netstat x ss: o ss é mais rápido e moderno; o netstat é legado — a sintaxe difere.\n- -l x sem -l: ‑l mostra só escuta; sem ele, todas as conexões.\n- 0.0.0.0 x 127.0.0.1: o primeiro aceita qualquer origem; o segundo, só o host.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"ifconfig é o comando atual do Linux.\" — Motivo: foi substituído — Versão tecnicamente correta: usa-se \"ip\".\n- Afirmação errada: \"ss e netstat são sinônimos exatos.\" — Motivo: o ss é o sucessor com opções próprias — Versão tecnicamente correta: finalidade semelhante, sintaxe distinta.\n- Afirmação errada: \"Uma porta em escuta é sempre segura.\" — Motivo: depende do serviço e da origem que aceita — Versão tecnicamente correta: avaliar o serviço e o endereço de escuta.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ip addr/link/route/neigh, netstat, ss, ‑t/‑u/‑l/‑n/‑p, escuta.\n- Regras e fórmulas: ss -tlnp lista portas TCP em escuta com processo.\n- Exceções: escutar em 0.0.0.0 amplia o alcance das conexões aceitas.\n- Palavras-chave: socket, porta, conexão, processo, diagnóstico.\n- Checklist de domínio: (1) Uso o comando ip? (2) Uso netstat/ss? (3) Leio portas em escuta? (4) Detecto conexões suspeitas?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que \"ip route\" mostra? (2) E \"ip neigh\"? (3) Qual comando lista portas em escuta? (4) O que a opção ‑p mostra? (5) 0.0.0.0 x 127.0.0.1 diferem em quê?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar o uso do comando 'ip' (Linux) e de netstat/ss para inspecionar conexões e portas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t2-s3",
                "titulo": "Verificação de rotas, ARP e vizinhos",
                "objetivoAprendizagem": "Aluno verificará tabela de rotas, cache ARP/NDP e estado de interfaces.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) como verificar a tabela de rotas; (b) como inspecionar o cache ARP/NDP; (c) como checar o estado das interfaces; (d) o teste de MTU. POR QUE O CONHECIMENTO É IMPORTANTE: verificar rota, gateway e vizinhos isola rapidamente falhas de enlace e roteamento; a prova cobra os comandos e a interpretação. PRÉ-REQUISITOS: rotas; ARP/NDP; interfaces. OBJETIVOS OBSERVÁVEIS: (1) listar rotas; (2) inspecionar ARP/NDP; (3) verificar interfaces; (4) testar MTU. COMPETÊNCIAS DESENVOLVIDAS: verificação de conectividade; diagnóstico de enlace. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.2 (ip/ss); unidade 3.3 (ARP/NDP); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: a tabela de rotas é exibida por \"ip route\" (Linux) ou \"route print\" (Windows) e mostra as rotas conhecidas, o gateway padrão e as métricas. O cache de vizinhos (ARP no IPv4, NDP no IPv6) aparece em \"ip neigh\" (Linux) ou \"arp -a\" (Windows) e mostra os pares IP-MAC resolvidos. O estado das interfaces é visto com \"ip link\", que indica se estão UP (ativa) ou DOWN. Verificações úteis em sequência: a rota padrão está presente (\"default via X\")? O gateway é alcançável? O ARP do gateway está resolvido (há entrada para ele)? A interface está UP com um IP válido? Se o gateway não tem entrada ARP, o problema tende a ser de enlace (cabo/Wi-Fi); se a rota padrão aponta para um endereço inexistente, o problema é de configuração; se a interface está DOWN, nada acima funcionará. Quanto à MTU, pode-se testar o tamanho máximo do pacote que atravessa o caminho; no Linux, \"ping -M do -s 1472 <host>\" testa um payload de 1472 bytes (que, somado aos cabeçalhos, equivale a uma MTU de 1500). Fragmentação indevida ou PMTU mal descoberta causa sintomas como páginas que não carregam inteiramente. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: listar as rotas e identificar o gateway padrão.\n- Nível intermediário: inspecionar o cache ARP/NDP e o estado da interface.\n- Nível avançado: relacionar ausência de ARP do gateway a falha de enlace.\n- Nível especialista: testar MTU/PMTU e interpretar o efeito da fragmentação.\nCOMPARAÇÕES CRÍTICAS:\n- rota presente x gateway alcançável: ter a rota não garante que o gateway responda.\n- entrada ARP presente x ausente: a ausência sugere falha de camada 2.\n- MTU x MSS: a MTU limita o pacote; o MSS limita o segmento TCP.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se há rota padrão, a Internet funciona.\" — Motivo: o gateway pode estar inacessível — Versão tecnicamente correta: verificar também o enlace e o ARP.\n- Afirmação errada: \"'ip neigh' mostra rotas.\" — Motivo: mostra vizinhos (IP-MAC) — Versão tecnicamente correta: rotas ficam em \"ip route\".\n- Afirmação errada: \"MTU e MSS são o mesmo.\" — Motivo: um é do pacote; o outro, do segmento.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: ip route, route print, ip neigh, arp -a, ip link, gateway, MTU, MSS.\n- Regras e fórmulas: ping -M do -s 1472 testa MTU 1500 no Linux.\n- Exceções: protocolos com encapsulamento reduzem a MTU efetiva.\n- Palavras-chave: rota, vizinho, interface, enlace, fragmentação.\n- Checklist de domínio: (1) Listo rotas? (2) Inspeciono ARP/NDP? (3) Verifico interfaces? (4) Testo MTU?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Qual comando mostra as rotas? (2) E o cache ARP? (3) O que \"ip link\" indica? (4) O que a ausência de ARP do gateway sugere? (5) O que o teste -s 1472 verifica?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de verificar tabela de rotas, cache ARP/NDP e estado de interfaces, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a finalidade do nslookup; (b) sua sintaxe; (c) a interpretação da saída; (d) limitações frente ao dig. POR QUE O CONHECIMENTO É IMPORTANTE: consultar o DNS manualmente confirma ou descarta falhas de resolução; a prova cobra a sintaxe e a leitura. PRÉ-REQUISITOS: DNS; registros. OBJETIVOS OBSERVÁVEIS: (1) consultar um nome; (2) consultar um tipo de registro; (3) indicar um servidor; (4) interpretar a saída. COMPETÊNCIAS DESENVOLVIDAS: verificação de resolução DNS. GRAU DE DIFICULDADE: básico a intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (DNS); unidade 5.3 (dig); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o nslookup consulta servidores DNS e exibe o resultado. A sintaxe básica é \"nslookup <nome>\", que busca registros A/AAAA por padrão; pode-se pedir um tipo específico com \"nslookup -type=MX exemplo.com\" (útil para verificar servidores de correio) e indicar o servidor DNS a consultar com \"nslookup exemplo.com 8.8.8.8\". A saída típica mostra o resolvedor utilizado (Server), o nome consultado (Name) e os endereços retornados (Address). A interpretação é direta: se o nome resolve, a resolução funciona para aquele resolvedor; se falha com \"NXDOMAIN\" (domínio inexistente), o nome não existe ou há erro de digitação; se retorna \"SERVFAIL\", o servidor encontrou um problema (por exemplo, falha de DNSSEC ou de delegação). Limitações: a saída é menos detalhada que a do dig (não mostra TTL nem flags com clareza), o comportamento varia entre sistemas e, em alguns, o comando é considerado legado em favor de dig/host. Ainda assim, é útil para testes rápidos. Um bom uso no diagnóstico é comparar o resultado com o de outro resolvedor: se um resolve e o outro não, o problema pode estar no cache ou no resolvedor configurado. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: consultar um nome simples.\n- Nível intermediário: consultar um tipo específico e indicar o servidor.\n- Nível avançado: interpretar NXDOMAIN e SERVFAIL.\n- Nível especialista: comparar resolvedores para isolar a causa.\nCOMPARAÇÕES CRÍTICAS:\n- nslookup x dig: o dig é mais detalhado (TTL, flags, seções); o nslookup é mais simples.\n- A x MX: o A resolve para IP; o MX aponta servidores de correio.\n- NXDOMAIN x SERVFAIL: o primeiro é \"não existe\"; o segundo é \"falha ao resolver\".\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"nslookup mostra o TTL com destaque.\" — Motivo: isso é característico do dig — Versão tecnicamente correta: o nslookup é menos detalhado.\n- Afirmação errada: \"Se um resolvedor falha, o domínio não existe.\" — Motivo: pode ser cache/delegação — Versão tecnicamente correta: testar outro resolvedor.\n- Afirmação errada: \"nslookup consulta apenas registros A.\" — Motivo: aceita tipos — Versão tecnicamente correta: pode consultar MX, NS, TXT etc.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: nslookup, -type, servidor DNS, A/AAAA, MX, NXDOMAIN, SERVFAIL, Server/Name/Address.\n- Regras e fórmulas: nslookup <nome> [tipo] [@servidor].\n- Exceções: comportamento varia entre sistemas; pode estar legado.\n- Palavras-chave: consulta, resolução, tipo de registro, resposta.\n- Checklist de domínio: (1) Consulto um nome? (2) Consulto um tipo? (3) Indico o servidor? (4) Interpreto a saída?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Para que serve o nslookup? (2) Como pedir um registro MX? (3) Como indicar o servidor? (4) O que é NXDOMAIN? (5) O que o dig oferece a mais?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de usar nslookup para consultar registros DNS e interpretará a saída, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t3-s2",
                "titulo": "dig: consulta DNS avançada",
                "objetivoAprendizagem": "Aluno usará dig para consultas DNS detalhadas e interpretará a saída (status, flags, TTL, seção answer).",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) a finalidade do dig; (b) a sintaxe e as opções; (c) a interpretação das seções; (d) usos avançados. POR QUE O CONHECIMENTO É IMPORTANTE: o dig é a ferramenta de referência para depurar DNS; a prova cobra a leitura do status, das flags e do TTL. PRÉ-REQUISITOS: DNS; registros. OBJETIVOS OBSERVÁVEIS: (1) consultar com dig; (2) interpretar status e flags; (3) usar +short e +trace; (4) usar consulta reversa. COMPETÊNCIAS DESENVOLVIDAS: depuração de DNS; leitura de resposta detalhada. GRAU DE DIFICULDADE: intermediário a avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (DNS); unidade 5.3 (nslookup); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o dig (Domain Information Groper) é uma ferramenta avançada de consulta DNS, disponível no Linux e no macOS (e no Windows com o pacote BIND). A sintaxe é \"dig <nome> [tipo] [@servidor]\". A saída é organizada em seções: o cabeçalho traz o status (NOERROR quando houve resposta, NXDOMAIN quando o nome não existe, SERVFAIL quando há falha na resolução), as flags (por exemplo, autoridade e recursão) e o tempo de consulta; a seção QUESTION repete a pergunta; a ANSWER apresenta os registros com seus TTL; seguem as seções AUTHORITY e ADDITIONAL. Opções úteis: \"+short\" mostra apenas a resposta, \"+trace\" rastreia a resolução desde a raiz (útil para verificar delegação), e \"-x\" faz a consulta reversa (de IP para nome, usando registros PTR). O dig é mais detalhado que o nslookup e permite verificar o TTL dos registros e o suporte a DNSSEC (com \"+dnssec\"). No diagnóstico, ele responde a perguntas como: \"o registro existe?\", \"qual o TTL e, portanto, quanto tempo o cache mantém a resposta?\", \"a delegação a partir da raiz está correta?\". Interpretar corretamente o status e as seções é a habilidade central. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: obter a resposta de um nome.\n- Nível intermediário: ler status, seção ANSWER e TTL.\n- Nível avançado: usar +trace e -x e interpretar a delegação.\n- Nível especialista: usar o dig para investigar falhas de DNSSEC e cache.\nCOMPARAÇÕES CRÍTICAS:\n- dig x nslookup: o dig mostra status, flags e TTL com clareza.\n- +short x resposta completa: o primeiro resume; o segundo traz todas as seções.\n- consulta direta x reversa (-x): a primeira vai de nome a IP; a segunda, de IP a nome.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"NXDOMAIN é um erro de servidor.\" — Motivo: significa que o nome não existe — Versão tecnicamente correta: NXDOMAIN é resposta válida de \"não existe\".\n- Afirmação errada: \"O dig não mostra o TTL.\" — Motivo: mostra — Versão tecnicamente correta: o TTL aparece na seção ANSWER.\n- Afirmação errada: \"+trace usa só o cache local.\" — Motivo: ele percorre a hierarquia desde a raiz — Versão tecnicamente correta: rastreia a delegação.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: dig, status (NOERROR/NXDOMAIN/SERVFAIL), flags, seções, TTL, +short, +trace, -x, PTR, DNSSEC.\n- Regras e fórmulas: dig <nome> [tipo] [@servidor]; +short resume; -x faz reversa.\n- Exceções: o dig pode não estar instalado por padrão no Windows.\n- Palavras-chave: depuração, delegação, cache, reversa, assinatura.\n- Checklist de domínio: (1) Consulto com dig? (2) Interpreto status/flags? (3) Uso +short e +trace? (4) Uso reversa?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que o dig mostra a mais que o nslookup? (2) O que significa NXDOMAIN? (3) O que +short faz? (4) E +trace? (5) O que -x consulta?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de usar dig para consultas DNS detalhadas e interpretará a saída (status, flags, TTL, seção answer), evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t3-s3",
                "titulo": "Ferramentas complementares e cache DNS",
                "objetivoAprendizagem": "Aluno explicará outras ferramentas de diagnóstico DNS e o papel do cache.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) ferramentas complementares de DNS (host, getent, resolvectl); (b) o papel do cache DNS; (c) comandos para limpar o cache; (d) o arquivo hosts. POR QUE O CONHECIMENTO É IMPORTANTE: muitas falhas de resolução decorrem de cache desatualizado ou de override local; a prova cobra os comandos e o fluxo. PRÉ-REQUISITOS: DNS; nslookup/dig. OBJETIVOS OBSERVÁVEIS: (1) usar host/getent/resolvectl; (2) explicar o cache; (3) limpar o cache; (4) explicar o arquivo hosts. COMPETÊNCIAS DESENVOLVIDAS: resolução de problemas de cache; verificação de nomes. GRAU DE DIFICULDADE: intermediário. RELAÇÃO COM OUTROS TÓPICOS: unidade 3.2 (DNS); unidade 5.3 (nslookup/dig); unidade 5.4 (diagnóstico). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa baixa a média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: além do nslookup e do dig, há ferramentas complementares: o host faz consultas simples com saída concisa; o getent hosts consulta o resolvedor do SISTEMA (incluindo primeiro o arquivo /etc/hosts e, depois, o DNS), o que o torna útil para verificar como o próprio sistema resolve um nome; e o resolvectl (do systemd-resolved) permite consultar estatísticas e cache, com subcomandos como \"query\" e \"flush-caches\". O cache DNS é o mecanismo que acelera consultas: o sistema operacional, os aplicativos e os navegadores guardam respostas durante o TTL. Isso explica um problema clássico: o DNS do domínio muda, mas o cliente ainda usa o endereço antigo até o cache expirar; limpar o cache resolve. No Windows, usa-se \"ipconfig /flushdns\"; no Linux com systemd-resolved, \"resolvectl flush-caches\". Além do cache, o arquivo /etc/hosts (no Linux/macOS) e C:\\Windows\\System32\\drivers\\etc\\hosts (no Windows) soBRESCREVeM o DNS para nomes específicos, mapeando nome→IP antes da consulta externa — útil para testes, mas também uma fonte de confusão quando esquecido. A verificação de DNSSEC pode ser feita com \"dig +dnssec\". Compreender cache, hosts e ferramentas complementares fecha o ciclo do diagnóstico de nomes. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: usar host para uma consulta rápida.\n- Nível intermediário: distinguir a consulta do sistema (getent) da consulta direta.\n- Nível avançado: explicar por que o cache mantém uma resposta antiga e como limpá-lo.\n- Nível especialista: diagnosticar um nome que resolve errado por causa do arquivo hosts.\nCOMPARAÇÕES CRÍTICAS:\n- cache x servidor: o cache acelera e pode ficar desatualizado; o servidor é a fonte.\n- /etc/hosts x DNS: o arquivo local tem precedência sobre a consulta externa.\n- getent x dig: o primeiro respeita hosts e a configuração do sistema; o segundo fala direto com o DNS.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Mudar o DNS propaga na hora.\" — Motivo: o TTL do cache mantém a resposta antiga — Versão tecnicamente correta: aguardar o TTL ou limpar o cache.\n- Afirmação errada: \"O arquivo hosts é consultado depois do DNS.\" — Motivo: tem precedência — Versão tecnicamente correta: entra antes da consulta externa.\n- Afirmação errada: \"getent ignora o /etc/hosts.\" — Motivo: ele o considera — Versão tecnicamente correta: mostra como o sistema resolve.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: host, getent, resolvectl, cache DNS, TTL, /etc/hosts, ipconfig /flushdns, resolvectl flush-caches.\n- Regras e fórmulas: cache válido durante o TTL; hosts precede o DNS.\n- Exceções: aplicativos podem manter cache próprio além do sistema.\n- Palavras-chave: cache, propagação, precedência, flush, diagnóstico.\n- Checklist de domínio: (1) Uso host/getent/resolvectl? (2) Explico o cache? (3) Limpo o cache? (4) Explico o arquivo hosts?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Para que serve o getent? (2) O que é o cache DNS? (3) Como limpar o cache no Windows? (4) E no Linux com systemd-resolved? (5) O que o arquivo hosts faz?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de explicar outras ferramentas de diagnóstico DNS e o papel do cache, evidenciado por resposta correta a item de verificação associado ao subtópico."
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
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) o método de diagnóstico por camadas; (b) a abordagem bottom-up; (c) a abordagem top-down; (d) a documentação dos testes. POR QUE O CONHECIMENTO É IMPORTANTE: um método estruturado evita \"chutes\" e isola a causa rapidamente; a prova cobra a ordem das verificações. PRÉ-REQUISITOS: camadas; comandos de diagnóstico. OBJETIVOS OBSERVÁVEIS: (1) aplicar o bottom-up; (2) aplicar o top-down; (3) escolher pela pista; (4) documentar os testes. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico estruturado; raciocínio por camadas. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.1/5.2/5.3 (ferramentas); unidade 2 (camadas). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: o diagnóstico por camadas organiza as verificações de baixo para cima (bottom-up) ou de cima para baixo (top-down). No bottom-up: (1) Físico/Enlace — o cabo está conectado? A interface está UP (ip link)? Há luz de link? O endereço é válido? (2) Rede — o IP é válido? O ping ao GATEWAY funciona? A rota padrão existe (ip route)? (3) Transporte — a porta está em escuta (ss)? Há firewall bloqueando? (4) Aplicação — o serviço responde? O HTTP retorna 200? (5) Nome — o DNS resolve? Vale testar com o IP direto para separar nome de conectividade. O top-down é preferível quando o sintoma já indica a camada (por exemplo, um código 500 aponta para a aplicação), descendo até encontrar a causa. A chave é ISOLAR a camada que falha antes de culpar a aplicação, e DOCUMENTAR cada teste e seu resultado, o que evita repetir passos e permite escalar o problema com informação precisa. O método transforma um problema difuso (\"a Internet não funciona\") em uma sequência de hipóteses verificáveis. Um princípio importante: sempre que possível, testar por um caminho alternativo (IP direto, outro resolvedor, outra máquina) para confirmar a origem. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: começar pelo básico (cabo, interface, gateway).\n- Nível intermediário: ordenar as verificações por camada.\n- Nível avançado: escolher bottom-up ou top-down conforme a pista.\n- Nível especialista: documentar e escalar um incidente com evidências.\nCOMPARAÇÕES CRÍTICAS:\n- bottom-up x top-down: o primeiro parte do físico; o segundo, da aplicação — a pista define qual usar.\n- isolar x adivinhar: o método substitui o palpite por verificação.\n- testar por IP x por nome: separa falha de conectividade de falha de DNS.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Convém começar reinstalando a aplicação.\" — Motivo: pode ser falha de enlace — Versão tecnicamente correta: começar pelas camadas inferiores (bottom-up).\n- Afirmação errada: \"Uma única ferramenta resolve todo o diagnóstico.\" — Motivo: cada camada tem sua ferramenta — Versão tecnicamente correta: combinar ping, ss, dig etc.\n- Afirmação errada: \"Documentar é perda de tempo.\" — Motivo: evita repetição e permite escalar — Versão tecnicamente correta: registrar os testes.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: bottom-up, top-down, isolar camada, testar por IP, documentar.\n- Regras e fórmulas: enlace → rede → transporte → aplicação → nome.\n- Exceções: a pista do sintoma pode justificar começar pela camada alta.\n- Palavras-chave: método, hipótese, evidência, camada, escalonamento.\n- Checklist de domínio: (1) Aplico bottom-up? (2) Aplico top-down? (3) Escolho pela pista? (4) Documento os testes?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que verificar primeiro no bottom-up? (2) E depois? (3) Quando usar top-down? (4) Por que testar por IP direto? (5) Por que documentar?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de aplicar um método de diagnóstico por camadas, do físico à aplicação, para isolar falhas, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t4-s2",
                "titulo": "Diferenças entre falha de DNS, conectividade, roteamento e aplicação",
                "objetivoAprendizagem": "Aluno distinguirá sintomas de falhas de DNS, conectividade, roteamento e aplicação.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) sintomas de falha de DNS; (b) de conectividade; (c) de roteamento; (d) de aplicação; (e) como distinguir cada uma. POR QUE O CONHECIMENTO É IMPORTANTE: atribuir o sintoma à causa correta orienta a correção; a prova explora a distinção entre as falhas. PRÉ-REQUISITOS: diagnóstico por camadas; ferramentas. OBJETIVOS OBSERVÁVEIS: (1) reconhecer cada sintoma; (2) distinguir as causas; (3) indicar a correção; (4) usar testes diferenciais. COMPETÊNCIAS DESENVOLVIDAS: diagnóstico diferencial; decisão de correção. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.4 (método); unidade 5.3 (DNS); unidade 2.3 (pontos de falha). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: cada tipo de falha tem sintomas e testes diferenciais. Falha de DNS: aparece como erro de resolução (por exemplo, nome não resolvido), mas o acesso por IP direto funciona — teste: comparar nome x IP e consultar com nslookup/dig. Falha de conectividade (enlace/físico): a interface não tem IP válido, o link está DOWN ou o ping ao gateway falha — teste: verificar a interface e o gateway. Falha de roteamento: o ping ao gateway funciona, mas o ping a um IP EXTERNO falha, com mensagens como \"destination net unreachable\", e o traceroute para no gateway — teste: pingar além da rede local. Falha de aplicação: o ping e o DNS funcionam, mas o serviço falha (erros 4xx/5xx, timeout na porta, certificado inválido) — teste: verificar a porta e o serviço. A distinção orienta a CORREÇÃO: DNS → verificar resolvedor, cache e delegação; conectividade → cabo/Wi-Fi/DHCP; roteamento → rota padrão, NAT e provedor; aplicação → serviço, porta, certificado e código. O raciocínio-chave é eliminar hipóteses na ordem: se a resolução falha, não adianta investigar a aplicação; se o ping a IP externo falha mas o gateway responde, o problema é de roteamento, não de enlace. Testes diferenciais são a base para não corrigir a coisa errada.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer a falha de DNS por nome não resolvido.\n- Nível intermediário: diferenciar conectividade de roteamento pelo teste do gateway.\n- Nível avançado: separar falha de aplicação de falha de rede.\n- Nível especialista: conduzir o diagnóstico diferencial completo e propor a correção.\nCOMPARAÇÕES CRÍTICAS:\n- DNS x conectividade: no DNS, o IP funciona e o nome não; na conectividade, nem o gateway responde.\n- roteamento x enlace: o gateway responde, mas o destino externo não.\n- aplicação x rede: ping e DNS funcionam, mas o serviço falha.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Se o site não abre, é problema de Internet.\" — Motivo: pode ser DNS ou aplicação — Versão tecnicamente correta: aplicar testes diferenciais.\n- Afirmação errada: \"Ping ao gateway funcionando garante Internet.\" — Motivo: o roteamento externo pode falhar — Versão tecnicamente correta: testar um IP externo.\n- Afirmação errada: \"Erro 500 é falha de rede.\" — Motivo: é resposta da aplicação — Versão tecnicamente correta: a rede funcionou; o servidor falhou.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: falha de DNS, conectividade, roteamento, aplicação, testes diferenciais.\n- Regras e fórmulas: nome+IP (DNS); gateway (enlace); IP externo (roteamento); porta/serviço (aplicação).\n- Exceções: ICMP bloqueado pode mascarar o teste de ping.\n- Palavras-chave: sintoma, causa, correção, hipótese, diferencial.\n- Checklist de domínio: (1) Reconheço cada sintoma? (2) Distingo as causas? (3) Indico a correção? (4) Uso testes diferenciais?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) Como identificar falha de DNS? (2) E de conectividade? (3) E de roteamento? (4) E de aplicação? (5) O que um erro 500 indica?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de distinguir sintomas de falhas de DNS, conectividade, roteamento e aplicação, evidenciado por resposta correta a item de verificação associado ao subtópico."
              },
              {
                "id": "m2-u5-t4-s3",
                "titulo": "Cenários simulados de falhas e mensagens de erro",
                "objetivoAprendizagem": "Aluno interpretará mensagens de erro comuns e mapeará a causas prováveis.",
                "conteudo": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: (a) mensagens de erro comuns; (b) a causa provável de cada uma; (c) a camada associada; (d) a conduta de diagnóstico. POR QUE O CONHECIMENTO É IMPORTANTE: interpretar mensagens corretamente acelera a solução; a prova cobra a associação mensagem-causa-camada. PRÉ-REQUISITOS: ferramentas de diagnóstico; camadas. OBJETIVOS OBSERVÁVEIS: (1) reconhecer mensagens; (2) mapear causas; (3) situar a camada; (4) escolher o teste seguinte. COMPETÊNCIAS DESENVOLVIDAS: interpretação de erros; diagnóstico. GRAU DE DIFICULDADE: avançado. RELAÇÃO COM OUTROS TÓPICOS: unidade 5.1/5.2/5.3 (ferramentas); unidade 2.3 (pontos de falha). RELEVÂNCIA PARA CONCURSOS: classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística de incidência em provas. FUNDAMENTAÇÃO CONCEITUAL: interpretar mensagens de erro exige associá-las à camada e à causa. Exemplos comuns: \"Request timed out\" (ping) — host desligado, firewall bloqueando ICMP ou perda; \"Destination Host Unreachable\" — falha de ARP ou rota ausente; \"TTL expired in transit\" — laço de roteamento ou TTL muito baixo; \"Connection refused\" — porta fechada (serviço parado ou firewall com REJECT); \"Connection timed out\" — pacote descartado (firewall com DROP ou host inacessível); \"NXDOMAIN\"/nome não resolvido — falha de DNS; certificado inválido — problema de TLS/certificado; \"502 Bad Gateway\" — o proxy reverso não alcançou o backend; \"503 Service Unavailable\" — sobrecarga ou manutenção; \"404 Not Found\" — recurso inexistente; \"403 Forbidden\" — permissão; \"401 Unauthorized\" — autenticação. A leitura correta considera a camada: erros de rede (unreachable, TTL), de transporte (refused, timed out) e de aplicação (4xx/5xx). A conduta é sempre o próximo teste que confirma ou descarta a hipótese: diante de \"connection refused\", verificar se o serviço está em escuta; diante de \"timed out\", verificar firewall e rota; diante de NXDOMAIN, testar a resolução. Mensagens são pistas, não diagnósticos finais. Os laboratórios desta apostila são simulações didáticas e não executam comandos reais no sistema operacional.\nPROGRESSÃO DE DIFICULDADE:\n- Nível iniciante: reconhecer as mensagens mais comuns.\n- Nível intermediário: associar cada mensagem a uma causa e a uma camada.\n- Nível avançado: distinguir refused de timed out quanto ao comportamento do firewall.\n- Nível especialista: conduzir um caso com várias mensagens e determinar a causa raiz.\nCOMPARAÇÕES CRÍTICAS:\n- refused x timed out: o primeiro indica porta fechada (resposta); o segundo, descarte sem resposta.\n- unreachable x timed out: o primeiro é falha de roteamento/ARP; o segundo, ausência de resposta.\n- 4xx x 5xx: o primeiro é erro do cliente; o segundo, do servidor.\nERROS, EXCEÇÕES E PEGADINHAS:\n- Afirmação errada: \"Connection refused indica queda da rede.\" — Motivo: houve resposta da máquina — Versão tecnicamente correta: o serviço/porta não aceita conexões.\n- Afirmação errada: \"NXDOMAIN é problema de servidor web.\" — Motivo: é resposta do DNS — Versão tecnicamente correta: o nome não existe ou não resolve.\n- Afirmação errada: \"502 Bad Gateway é erro do navegador.\" — Motivo: é do servidor/proxy — Versão tecnicamente correta: o proxy não alcançou o backend.\nRESUMO ESTRUTURADO:\n- Conceitos essenciais: timed out, unreachable, TTL expired, refused, NXDOMAIN, 4xx/5xx, 502, certificado.\n- Regras e fórmulas: mensagem → camada → causa → próximo teste.\n- Exceções: firewall com DROP gera \"timed out\"; com REJECT, \"refused\".\n- Palavras-chave: mensagem, causa, camada, hipótese, diagnóstico.\n- Checklist de domínio: (1) Reconheço mensagens? (2) Mapeio causas? (3) Situo a camada? (4) Escolho o próximo teste?\nVERIFICAÇÃO DE APRENDIZAGEM: (1) O que \"Connection refused\" indica? (2) E \"Destination Host Unreachable\"? (3) O que é NXDOMAIN? (4) O que é 502? (5) Como distinguir DROP de REJECT?",
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
                "criterioDominio": "PoC (A): o aluno é capaz de interpretar mensagens de erro comuns e mapeará a causas prováveis, evidenciado por resposta correta a item de verificação associado ao subtópico."
              }
            ]
          }
        ]
      }
    ]
  }
};
