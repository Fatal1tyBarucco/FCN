const enriParcialM2U4P3 = {
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
 }
};
