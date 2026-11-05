const enriParcialM2U3P3 = {
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
 }
};
