const enriParcialM2U4P1 = {
 "m2-u4-t1-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Entender a estrutura de 32 bits do IPv4, a divisão em octetos e a separação entre parte de rede e parte de host é pré-requisito para máscaras, sub-redes e CIDR. O item cobra octetos, endereços especiais e o cálculo de rede/broadcast. Sem essa base, o aluno erra conversões e itens C/E sobre endereçamento.",
   "preRequisitos": [
    "Camada de rede (IP)",
    "Binário básico (bits e potências de 2)"
   ],
   "objetivosObservaveis": [
    "Descrever o endereço IPv4 de 32 bits como quatro octetos decimais",
    "Converter um octeto entre decimal e binário",
    "Separar a parte de rede da parte de host usando a máscara",
    "Citar os principais endereços especiais (loopback, link-local, multicast, broadcast)"
   ],
   "competencias": [
    "Representar endereços IPv4 em binário e decimal",
    "Ler e interpretar endereços IP com máscara"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u4-t1-s2 (Endereços públicos, privados, loopback e link-local) — aprofunda os endereços especiais",
    "m2-u4-t2-s1 (Notação CIDR e cálculo de endereço de rede/broadcast) — base para separar rede e host"
   ],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Estrutura IPv4 e endereços especiais são tema central do conteúdo programático de redes: cobram octetos, conversão binário/decimal, endereços especiais e cálculo de rede/broadcast em múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa."
   }
  },
  "niveis": {
   "iniciante": "Um endereço IPv4 tem 32 bits, escritos como quatro octetos decimais separados por ponto (ex.: 192.168.1.10). Cada octeto vai de 0 a 255 porque representa 8 bits (2^8 = 256 valores). A máscara de sub-rede divide o endereço em parte de REDE (prefixo) e parte de HOST. Historicamente, as classes definiam o tamanho: Classe A (/8), Classe B (/16) e Classe C (/24); hoje usa-se o roteamento sem classes (CIDR), que trata o prefixo de forma explícita. Endereços especiais incluem 0.0.0.0 (rota padrão/origem indefinida), 255.255.255.255 (broadcast limitado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local/APIPA), 224.0.0.0/4 (multicast) e 240.0.0.0/4 (reservado).",
   "intermediario": "Conversão prática: o octeto 192 em binário é 11000000 (128+64); o octeto 255 é 11111111. O endereço 192.168.1.10 fica 11000000.10101000.00000001.00001010. Cálculo ilustrativo: em uma rede /24, os bits de host são 32 − 24 = 8, então 2^8 = 256 endereços, dos quais 254 são hosts válidos (excluídos rede e broadcast). Em /25, os bits de host são 7 → 2^7 = 128 endereços e 126 hosts válidos. A máscara determina onde termina a rede e começa o host; mudar a máscara muda a separação sem alterar o endereço IP.",
   "avancado": "As classes históricas (A/B/C/D/E) ainda aparecem em questões de concurso como referência, mas o roteamento moderno usa CIDR: qualquer prefixo de /0 a /32, não apenas /8, /16, /24. O endereço de rede é obtido por AND bit a bit entre IP e máscara; o broadcast coloca todos os bits de host em 1. Endereços reservados da RFC 1918 (privados: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) não são roteáveis na Internet pública e precisam de NAT para sair. RFC 791 define IPv4; RFC 4632 define CIDR; RFC 3021 define /31 para links ponto-a-ponto.",
   "especialista": "Em arquitetura corporativa, o planejamento de endereçamento IPv4 integra VLSM e sumarização: alocar blocos de tamanhos variados sem sobreposição e agregar rotas para reduzir tabelas de roteamento. A escassez de endereços públicos motivou o NAT e a transição para IPv6 (128 bits). Em concursos de nível superior (analista de rede, auditor de TI), a cobrança incide sobre desenho de plano de endereçamento e validação de sobreposição, não sobre conversão isolada de octetos. Nunca confundir máscara de sub-rede com endereço de broadcast."
  },
  "comparacoes": [
   {
    "tema": "Parte de rede vs. parte de host",
    "a": {
     "rotulo": "Parte de rede (prefixo)",
     "texto": "Identifica a sub-rede; obtida por AND bit a bit entre IP e máscara. Ex.: 172.16.5.20 com /16 → rede 172.16.0.0."
    },
    "b": {
     "rotulo": "Parte de host",
     "texto": "Identifica o host dentro da sub-rede; os bits restantes após o prefixo. Ex.: 172.16.5.20 com /16 → host 5.20."
    },
    "diferencaGabarito": "A parte de rede é comum a todos os hosts da sub-rede; a parte de host é única por host. Não confundir endereço de rede com endereço de host."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Endereços de classe A são sempre públicos.",
    "porqueErrada": "A classe define o tamanho do prefixo, não se o endereço é público ou privado. 10.0.0.0/8 é classe A e é privado (RFC 1918); não é roteável na Internet pública.",
    "versaoCorreta": "A classe (histórica) define tamanho do prefixo, não publicidade. 10.0.0.0/8 é classe A e privado (RFC 1918). Público vs. privado depende da faixa, não da classe."
   },
   {
    "afirmacaoEquivocada": "O endereço 255.255.255.255 é o broadcast de toda rede IPv4.",
    "porqueErrada": "255.255.255.255 é o broadcast limitado (não roteável, usado na rede local). O broadcast de uma sub-rede específica depende da máscara: em 192.168.1.0/24 o broadcast é 192.168.1.255, mas em 192.168.0.0/16 o broadcast é 192.168.255.255.",
    "versaoCorreta": "255.255.255.255 é broadcast limitado (link local). O broadcast de uma sub-rede se calcula com a máscara (todos os bits de host = 1) e varia com o prefixo."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Endereço IPv4 = 32 bits em quatro octetos decimais (0-255)",
    "Máscara separa parte de rede (prefixo) de parte de host",
    "Classes históricas A (/8), B (/16), C (/24); hoje usa CIDR",
    "Endereço de rede = IP AND máscara (bits de host = 0)",
    "Broadcast = bits de host todos 1"
   ],
   "regras": [
    "Cada octeto vale 0 a 255 (2^8 valores)",
    "Hosts válidos = 2^(bits de host) − 2 (exceto /31, /32)",
    "Endereço de rede e broadcast não são atribuíveis a hosts",
    "0.0.0.0 = rota padrão/origem; 255.255.255.255 = broadcast limitado"
   ],
   "comparacoes": [
    "Classe A (/8) vs. Classe B (/16) vs. Classe C (/24): tamanho do prefixo",
    "Rede (bits de host = 0) vs. Broadcast (bits de host = 1) vs. Host válido (intervalo)"
   ],
   "fluxos": [
    "IP + máscara → AND bit a bit → endereço de rede",
    "Rede + bits de host = 1 → broadcast",
    "Rede+1 até broadcast−1 → intervalo de hosts válidos"
   ],
   "excecoes": [
    "127.0.0.0/8 = loopback (não sai da máquina)",
    "169.254.0.0/16 = link-local/APIPA (sem DHCP)",
    "/31 (RFC 3021) = 2 hosts em ponto-a-ponto sem rede/broadcast reservados"
   ],
   "palavrasChave": [
    "IPv4",
    "octeto",
    "máscara de sub-rede",
    "prefixo CIDR",
    "endereço de rede",
    "broadcast",
    "loopback",
    "link-local",
    "multicast",
    "RFC 1918"
   ],
   "checklist": [
    "Converto octeto decimal↔binário",
    "Separo parte de rede e parte de host com a máscara",
    "Identifico endereços especiais (loopback, link-local, multicast)",
    "Calculo endereço de rede e broadcast",
    "Lembro que rede e broadcast não são hosts válidos"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Quantos bits tem um endereço IPv4 e como ele se representa em notação decimal pontuada?",
    "dados": "Endereço IPv4 de 32 bits. Resposta: quatro octetos decimais (0-255), exemplo 10.0.0.1.",
    "conceitos": [
     "Endereço IPv4 de 32 bits",
     "Quatro octetos decimais separados por ponto"
    ],
    "estrategia": "Lembrar que IPv4 = 32 bits, agrupados em 4 octetos de 8 bits cada, exibidos em decimal pontuado.",
    "execucao": [
     "Passo 1: IPv4 tem 32 bits no total.",
     "Passo 2: 32 bits divididos em 4 octetos de 8 bits cada.",
     "Passo 3: Cada octeto vai de 0 a 255 (2^8 = 256).",
     "Passo 4: Notação decimal pontuada, ex.: 10.0.0.1."
    ],
    "resultado": "32 bits, representados como quatro octetos decimais (0-255), exemplo 10.0.0.1.",
    "justificativa": "O IPv4 usa 32 bits; esses são divididos em quatro blocos de 8 bits (octetos), cada um convertido para decimal (0-255) e separado por ponto.",
    "errosFrequentes": [
     "Achar que IPv4 tem 4 bits (um por octeto)",
     "Esquecer que cada octeto vai até 255, não 999"
    ],
    "variacao": "Quantos endereços distintos um IPv4 pode representar? Resposta: 2^32 ≈ 4,29 bilhões de endereços."
   },
   {
    "tipo": "aplicacao",
    "problema": "Dado o IP 172.16.5.20 com máscara 255.255.0.0, qual é a parte de rede e qual a parte de host?",
    "dados": "IP: 172.16.5.20. Máscara de sub-rede: 255.255.0.0, equivalente a prefixo /16. Separar parte de rede e parte de host.",
    "conceitos": [
     "Parte de rede obtida por AND bit a bit",
     "Máscara 255.255.0.0 = prefixo /16"
    ],
    "estrategia": "A máscara /16 mantém os dois primeiros octetos como rede e os dois últimos como host. 172.16 são os octetos de rede; 5.20 são os octetos de host.",
    "execucao": [
     "Passo 1: Máscara 255.255.0.0 = /16 (primeiros 16 bits = rede).",
     "Passo 2: Parte de rede = 172.16.0.0 (dois primeiros octetos mantidos, dois últimos zerados).",
     "Passo 3: Parte de host = 5.20 (dois últimos octetos).",
     "Passo 4: Prefixo = /16."
    ],
    "resultado": "Rede: 172.16.0.0. Host: 5.20 (últimos 16 bits). Prefixo: /16.",
    "justificativa": "Com máscara /16, os primeiros 16 bits (dois octetos) identificam a rede e os últimos 16 bits identificam o host dentro dessa rede. Logo rede = 172.16.0.0 e host = 5.20.",
    "errosFrequentes": [
     "Responder 172.16.5.0 (mantém o terceiro octeto, que é de host)",
     "Esquecer que com /16 os dois últimos octetos são host"
    ],
    "variacao": "Dado 10.0.5.100 com máscara 255.0.0.0 (/8). Resposta: rede = 10.0.0.0, host = 0.5.100, prefixo /8."
   },
   {
    "tipo": "erro",
    "problema": "Item C/E de concurso: a afirmação 'Endereços de classe A são sempre públicos' está correta ou errada?",
    "dados": "Cenário: item C/E de concurso. Afirmação: classe A → sempre público. Exemplo contrário: 10.0.0.0/8 é classe A e privado (RFC 1918).",
    "conceitos": [
     "Classe define tamanho do prefixo, não publicidade",
     "10.0.0.0/8 é classe A e privado (RFC 1918)"
    ],
    "estrategia": "A classe histórica (A/B/C) diz apenas o tamanho do bloco, não se é público ou privado. A faixa 10.0.0.0/8 é classe A, mas é privada e não roteável na Internet pública.",
    "execucao": [
     "Passo 1: Reconhecer que classe A = prefixo /8 (bloco grande).",
     "Passo 2: Reconhecer que 10.0.0.0/8 é classe A.",
     "Passo 3: Verificar que 10.0.0.0/8 é listada como privada na RFC 1918.",
     "Passo 4: Concluir que a afirmação é falsa: classe A não implica público."
    ],
    "resultado": "Errado. A classe define tamanho do prefixo, não publicidade. 10.0.0.0/8 é classe A e privado (RFC 1918).",
    "justificativa": "Público vs. privado depende da faixa de endereços (RFC 1918), não da classe histórica. 10.0.0.0/8 é classe A e é privado, desmentindo a afirmação.",
    "errosFrequentes": [
     "Achar que o valor do primeiro octeto sozinho determina público/privado",
     "Confundir tamanho do bloco (classe) com roteabilidade na Internet"
    ],
    "variacao": "Afirmação: 'Todo endereço começando com 172 é privado.' Resposta: errado — apenas 172.16.0.0/12 é privado; 172.32.x.x é público."
   }
  ]
 },
 "m2-u4-t1-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "Classificar um endereço IPv4 como público, privado, loopback ou link-local é decisão frequente e ponto de pegadinha em concursos de redes. A prova cobra as faixas privadas da RFC 1918, o loopback, o link-local (APIPA) e o fato de que um endereço privado só acessa a Internet por NAT. Dominar essas classificações evita erros em itens C/E e múltipla escolha.",
   "preRequisitos": [
    "Estrutura de endereço IPv4 (octetos, 32 bits)",
    "Máscaras de sub-rede e prefixo CIDR"
   ],
   "objetivosObservaveis": [
    "Listar as faixas privadas da RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)",
    "Explicar o loopback (127.0.0.0/8, tipicamente 127.0.0.1)",
    "Explicar o link-local (169.254.0.0/16, APIPA, sem DHCP)",
    "Classificar endereços IPv4 como público, privado, loopback ou link-local"
   ],
   "competencias": [
    "Classificar endereços IPv4 por tipo e roteabilidade",
    "Diferenciar endereço privado de endereço público em um cenário de rede"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — base: octetos e máscara",
    "m2-u3-t4-s3 (NAT, PAT, proxy e VPN) — privados saem para a Internet por NAT"
   ],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Classificação de endereços IPv4 (público/privado/loopback/link-local) é tema central do conteúdo programático de redes: cobram as faixas privadas, loopback, link-local e o papel do NAT em múltipla escolha e C/E. Classificação é estimativa pedagógica qualitativa."
   }
  },
  "niveis": {
   "iniciante": "Os endereços privados, definidos na RFC 1918, são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16; eles não são roteáveis na Internet pública e são usados em redes locais, sendo traduzidos para um IP público pelo NAT na borda. O loopback (127.0.0.0/8, tipicamente 127.0.0.1) designa o próprio host: o tráfego não sai da máquina e serve para testes locais. O link-local (169.254.0.0/16) é autoatribuído quando não há DHCP disponível (mecanismo APIPA), permitindo comunicação apenas no próprio link — é um sinal clássico de falha na obtenção de IP. Os endereços públicos são todos os demais e são roteáveis na Internet. Existem ainda o multicast (224.0.0.0/4), que endereça grupos, e o broadcast, que corresponde ao endereço com todos os bits de host em 1 na sub-rede, além do broadcast limitado 255.255.255.255. A classificação é funcional: um endereço privado só se comunica com a Internet por meio de NAT. Exemplo: 192.168.1.10 é privado (prefixo 192.168.0.0/16) e 8.8.8.8 é público. Variação: 172.20.5.3 é privado (dentro de 172.16.0.0/12), mas 172.32.5.3 é público (fora dessa faixa).",
   "intermediario": "Faixas privadas da RFC 1918: 10.0.0.0/8 (16.777.216 endereços), 172.16.0.0/12 (1.048.576 endereços, de 172.16.0.0 a 172.31.255.255) e 192.168.0.0/16 (65.536 endereços). Nenhuma é roteável na Internet pública; precisam de NAT para acessá-la. Loopback 127.0.0.0/8: todo tráfego com destino nesse bloco retorna ao próprio host (não sai da interface); 127.0.0.1 é o mais usado para testes locais de serviços. Link-local 169.254.0.0/16: o host se autoatribui um endereço desse bloco quando não consegue contato com o DHCP (APIPA); permite comunicação apenas no link local (mesma sub-rede) e indica falha de configuração. Endereços públicos são os restantes, roteáveis na Internet, alocados por registros regionais (ex.: LACNIC para a América Latina). Multicast (224.0.0.0/4) envia para um grupo de hosts; broadcast (bits de host = 1) envia para todos da sub-rede; 255.255.255.255 é o broadcast limitado da rede local.",
   "avancado": "A faixa 172.16.0.0/12 é fonte de pegadinha: apenas 172.16.0.0 a 172.31.255.255 é privado; 172.32.0.0 a 172.255.255.255 é público. Assim, 172.20.5.3 é privado, mas 172.32.5.3 é público — o primeiro octeto 172 sozinho não decide. O loopback inteiro 127.0.0.0/8 funciona internamente, não apenas 127.0.0.1. O link-local 169.254.0.0/16 não é roteável nem por NAT: um host com apenas APIPA não acessa a Internet. Endereço 0.0.0.0 significa \"esta rede\"/origem indefinida (uso em rotas padrão), não um host válido. Multicast 224.0.0.0/4 é para grupos (ex.: protocolos de roteamento); endereços 240.0.0.0/4 são reservados (futuro). IPv6 (módulo 4.4) amplia o espaço e muda as categorias (não há broadcast; usa anycast e link-local fe80::/10).",
   "especialista": "Em arquitetura corporativa, faixas privadas são planejadas por site para evitar sobreposição em fusões e VPNs; NAT/PAT traduz para o pool público na borda; link-local persistente indica falha de DHCP a investigar; loopback de interface (lo) é usado para gerenciamento e protocolos de roteamento (ID de roteador OSPF/BGP). Em concursos de nível superior (analista de rede, auditor de TI), a cobrança incide sobre classificação correta em cenários mistos e sobre a implicação de roteabilidade, não sobre decoreba de faixas. Nunca considerar 172.x.x.x como sempre privado: somente 172.16.0.0/12."
  },
  "comparacoes": [
   {
    "tema": "Endereço privado vs. endereço público",
    "a": {
     "rotulo": "Privado (RFC 1918)",
     "texto": "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Não roteável na Internet pública; usado em LANs e traduzido por NAT para sair."
    },
    "b": {
     "rotulo": "Público",
     "texto": "Todos os demais endereços IPv4. Roteável na Internet; alocado por registros regionais; necessário para serviços acessíveis externamente."
    },
    "diferencaGabarito": "Privado não sai para a Internet sem NAT; público é roteável diretamente. Um endereço privado nunca aparece como origem/destino em roteamento público da Internet."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Endereços 172.16.0.0/12 são públicos porque começam com 172.",
    "porqueErrada": "Só 172.16.0.0 a 172.31.255.255 (172.16.0.0/12) é privado. 172.32.0.0 a 172.255.255.255 é público. O primeiro octeto 172 sozinho não decide; é preciso olhar os 12 bits de prefixo.",
    "versaoCorreta": "Apenas 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) é privado; o restante de 172.x.x.x é público. Não decidir apenas pelo primeiro octeto."
   },
   {
    "afirmacaoEquivocada": "Um host com endereço link-local 169.254.x.x consegue acessar a Internet.",
    "porqueErrada": "Link-local não é roteável e não é traduzido por NAT. Serve apenas para comunicação no próprio link (mesma sub-rede) e indica que o host não obteve IP do DHCP.",
    "versaoCorreta": "Link-local (169.254.0.0/16) é autoatribuído sem DHCP, não roteável, não acessa a Internet. Indica falha na obtenção de endereço."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "Privados RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
    "Loopback 127.0.0.0/8 (tipicamente 127.0.0.1): comunicação interna ao host",
    "Link-local 169.254.0.0/16 (APIPA): autoatribuído sem DHCP, apenas no link",
    "Públicos: todos os demais, roteáveis na Internet",
    "Multicast 224.0.0.0/4: um-para-muitos; broadcast: bits de host = 1"
   ],
   "regras": [
    "Privado não é roteável na Internet pública; precisa de NAT",
    "Loopback não sai da máquina; serve para testes locais",
    "Link-local indica falha de DHCP; não acessa a Internet",
    "172.16.0.0/12 é privado; 172.32.x.x é público (não decidir só pelo primeiro octeto)"
   ],
   "comparacoes": [
    "Privado (RFC 1918) vs. público (roteável na Internet)",
    "Loopback (interno ao host) vs. link-local (mesmo link, sem DHCP)",
    "Multicast (grupo) vs. broadcast (toda a sub-rede)"
   ],
   "fluxos": [
    "Classificar endereço: verificar faixa privada → loopback → link-local → caso contrário público",
    "Privado quer Internet? → precisa de NAT na borda",
    "Host obteve 169.254.x.x? → falha de DHCP, verificar rede/DHCP"
   ],
   "excecoes": [
    "172.16.0.0/12 privado; 172.32.0.0 a 172.255.255.255 público",
    "Link-local não é traduzido por NAT nem roteável",
    "0.0.0.0 = origem indefinida/rota padrão, não host válido"
   ],
   "palavrasChave": [
    "privado",
    "público",
    "RFC 1918",
    "loopback",
    "link-local",
    "APIPA",
    "NAT",
    "multicast",
    "broadcast",
    "roteável"
   ],
   "checklist": [
    "Lembro as três faixas privadas (RFC 1918)",
    "Sei que loopback é 127.0.0.0/8 e não sai da máquina",
    "Reconheço link-local 169.254.x.x como falha de DHCP",
    "Não confundo 172.16.x.x (privado) com 172.32.x.x (público)",
    "Sei que privado precisa de NAT para acessar a Internet"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Classificar os endereços 8.8.8.8, 192.168.0.1, 127.0.0.1 e 169.254.1.5 como público, privado, loopback ou link-local.",
    "dados": "Endereços a classificar: 8.8.8.8, 192.168.0.1, 127.0.0.1 e 169.254.1.5, usando as faixas privadas, loopback e link-local.",
    "conceitos": [
     "Endereço público",
     "Endereço privado (RFC 1918)",
     "Loopback",
     "Link-local (APIPA)"
    ],
    "estrategia": "Verificar cada endereço contra as faixas: 192.168.0.0/16 (privado), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local); tudo o que não cai nesses é público.",
    "execucao": [
     "Passo 1: 8.8.8.8 não está em faixa privada/loopback/link-local → público.",
     "Passo 2: 192.168.0.1 está em 192.168.0.0/16 → privado.",
     "Passo 3: 127.0.0.1 está em 127.0.0.0/8 → loopback.",
     "Passo 4: 169.254.1.5 está em 169.254.0.0/16 → link-local."
    ],
    "resultado": "8.8.8.8 público; 192.168.0.1 privado; 127.0.0.1 loopback; 169.254.1.5 link-local.",
    "justificativa": "A classificação segue as faixas definidas: privado (RFC 1918), loopback (127.x), link-local (169.254.x); qualquer outro endereço é público e roteável na Internet.",
    "errosFrequentes": [
     "Achar que todo 192.168.x.x é público",
     "Esquecer que 127.x.x.x inteiro é loopback, não só 127.0.0.1"
    ],
    "variacao": "Classificar 10.50.2.3, 172.30.1.10, 203.0.113.5, 127.0.0.5. Resposta: privado, privado, público, loopback."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um notebook não obtém IP do DHCP e autoatribui 169.254.x.x. Consegue acessar a Internet?",
    "dados": "Notebook sem DHCP, autoatribuiu 169.254.x.x (link-local/APIPA). Pergunta: acessa a Internet?",
    "conceitos": [
     "Link-local 169.254.0.0/16 não é roteável",
     "Não é traduzido por NAT",
     "Indica falha de DHCP"
    ],
    "estrategia": "Endereço 169.254.x.x é link-local: não roteável, não passado por NAT, serve apenas para comunicação no próprio link. Logo não acessa a Internet; indica falha ao obter IP via DHCP.",
    "execucao": [
     "Passo 1: Reconhecer 169.254.x.x como endereço link-local (APIPA).",
     "Passo 2: Confirmar que não houve resposta do DHCP (falha de configuração).",
     "Passo 3: Lembrar que link-local não é roteável e não é traduzido por NAT.",
     "Passo 4: Concluir que o notebook não acessa a Internet; verificar cabo/Wi-Fi, servidor DHCP e configuração."
    ],
    "resultado": "Não — link-local não é roteável. Indica falha de DHCP. Verificar cabo/Wi-Fi, servidor DHCP e configuração.",
    "justificativa": "O endereço 169.254.x.x é autoatribuído e só funciona no link local; não sai da sub-rede nem passa por NAT, portanto não alcança a Internet.",
    "errosFrequentes": [
     "Achar que link-local acessa a Internet normalmente",
     "Esquecer que 169.254.x.x sinaliza ausência de DHCP"
    ],
    "variacao": "Um servidor recebe 169.254.10.20 após reiniciar. Resposta: não obteve DHCP; só comunica no link local; investigar servidor DHCP e conectividade."
   },
   {
    "tipo": "erro",
    "problema": "Afirmação de gabarito: 'Endereços 172.16.0.0/12 são públicos porque começam com 172.'",
    "dados": "Item C/E. Afirmação: 172.16.0.0/12 públicos por começarem com 172. Fato: 172.16.0.0/12 é privado (172.16.0.0 a 172.31.255.255); 172.32.x.x é público.",
    "conceitos": [
     "Somente 172.16.0.0/12 é privado",
     "172.32.0.0 a 172.255.255.255 é público",
     "Não decidir pelo primeiro octeto sozinho"
    ],
    "estrategia": "A faixa privada do bloco 172 é apenas 172.16.0.0/12 (172.16.0.0 a 172.31.255.255). Endereços como 172.32.5.3 são públicos. Portanto a afirmação é falsa: nem todo 172.x.x.x é privado.",
    "execucao": [
     "Passo 1: Identificar o bloco 172.x.x.x como classe B histórica.",
     "Passo 2: Lembrar que só 172.16.0.0/12 é privado (172.16.0.0 a 172.31.255.255).",
     "Passo 3: Verificar exemplo contrário: 172.32.5.3 está fora de /12 → é público.",
     "Passo 4: Concluir que a afirmação é falsa; o primeiro octeto 172 não decide sozinho."
    ],
    "resultado": "Errado. 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) é privado. Apenas parte dessa faixa é privada; o resto (ex.: 172.32.x.x) é público.",
    "justificativa": "A roteabilidade depende do prefixo completo (/12), não do primeiro octeto. 172.16.0.0/12 é privado; 172.32.0.0 a 172.255.255.255 é público, desmentindo a afirmação.",
    "errosFrequentes": [
     "Decidir público/privado só pelo primeiro octeto (172)",
     "Achar que todo 172.x.x.x é privado"
    ],
    "variacao": "Afirmação: '172.31.255.255 é privado.' Resposta: certo — é o último endereço do bloco privado 172.16.0.0/12. Variação testa o limite do prefixo."
   }
  ]
 }
};
