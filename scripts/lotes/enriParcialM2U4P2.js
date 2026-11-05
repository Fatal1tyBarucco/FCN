const enriParcialM2U4P2 = {
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
 }
};
