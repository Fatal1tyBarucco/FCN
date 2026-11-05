const enriParcialM2U2P3 = {
 "m2-u2-t2-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "A prova de redes distingue protocolo, serviço, porta e aplicação, e confundi-los altera a resposta. Saber que HTTP é protocolo, que a entrega confiável é serviço do TCP, que a porta 80 identifica o processo servidor e que o navegador é a aplicação permite classificar itens. Essa precisão é pré-requisito para configurar serviços e firewalls por porta.",
   "preRequisitos": ["Camadas do modelo TCP/IP", "Conceito de protocolo de rede"],
   "objetivosObservaveis": ["Definir protocolo, serviço, porta e aplicação separadamente", "Associar cada protocolo ao seu serviço e à porta que o expõe"],
   "competencias": ["Precisão conceitual: distinguir protocolo, serviço, porta e aplicação", "Leitura de configuração de serviços por número de porta"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — define as camadas onde os protocolos atuam"],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "A distinção entre protocolo, serviço, porta e aplicação integra o conteúdo programático introdutório de redes, pois é central para configurar serviços e interpretar regras de firewall; é uma estimativa pedagógica qualitativa, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "Protocolo é o conjunto de regras que define formato, sequência de mensagens e ações da comunicação (HTTP, TCP, IP). Serviço é a capacidade que uma camada oferece à superior — o transporte oferece à aplicação entrega confiável e ordenada por TCP. Porta é um número de 16 bits (0 a 65535) que identifica o processo dentro de um host, permitindo que várias aplicações compartilhem o mesmo IP; as portas bem conhecidas (0 a 1023) incluem 80 (HTTP), 443 (HTTPS), 53 (DNS), 25/587 (SMTP) e 22 (SSH). Aplicação é o programa que usa a rede (navegador, servidor web, cliente de e-mail). Uma camada presta serviço à superior e usa o serviço da inferior.",
   "intermediario": "O aluno associa cada protocolo ao serviço que implementa e à porta que o expõe: HTTP transfere hipertexto na porta 80, HTTPS com TLS na 443, SMTP envia e-mail na 25/587 e IMAP acessa caixas na 143/993. Entende que o mesmo IP hospeda vários serviços porque o sistema operacional demultiplexa o tráfego pelo número da porta, e que a aplicação usa o transporte, que usa a internet, que usa o enlace.",
   "avancado": "O aluno avançado distingue protocolo de serviço: HTTPS é protocolo (HTTP sobre TLS/SSL), entrega segura é o serviço. Reconhece que uma porta não é um protocolo (a 443 apenas aponta para o processo HTTPS) e que as portas bem conhecidas (0 a 1023) são gerenciadas pela IANA. Classifica um serviço pela camada em que opera: DHCP e DNS são de aplicação, embora usem UDP no transporte.",
   "especialista": "O especialista analisa o tráfego real: identifica que múltiplas instâncias de um mesmo serviço usam portas efêmeras (49152 a 65535) no cliente, que o NAT mapeia portas privadas para públicas e que firewalls filtram por porta e IP. Discute trade-offs de portas não padrão (SSH em 2222) e a diferença entre porta de destino (serviço) e porta de origem (cliente)."
  },
  "comparacoes": [
   {
    "tema": "protocolo x serviço",
    "a": { "rotulo": "Protocolo", "texto": "Conjunto de regras que define formato, sequência de mensagens e ações na comunicação (ex.: HTTP)." },
    "b": { "rotulo": "Serviço", "texto": "Capacidade que uma camada oferece à superior (ex.: transporte via TCP oferece entrega confiável e ordenada)." },
    "diferencaGabarito": "O protocolo é o conjunto de regras de comunicação; o serviço é a capacidade oferecida por uma camada à superior. HTTP é protocolo; entrega confiável é serviço do TCP."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "A porta 443 é um protocolo.",
    "porqueErrada": "443 é apenas um número de porta associado ao serviço HTTPS. Protocolo é o conjunto de regras (HTTPS/TLS sobre HTTP); a porta não define regras, apenas identifica o processo.",
    "versaoCorreta": "Errado. 443 é um número de porta associado ao protocolo HTTPS. Protocolo é o conjunto de regras; porta é o ponto de acesso que identifica o processo."
   },
   {
    "afirmacaoEquivocada": "Endereço IP identifica o processo dentro de um host.",
    "porqueErrada": "O IP identifica a interface de rede do host, não o processo ou aplicação. É o número da porta que distingue qual aplicação recebe cada segmento quando vários serviços compartilham o mesmo IP.",
    "versaoCorreta": "Errado. O IP identifica o host; a porta identifica o processo/aplicação dentro daquele host, permitindo que vários serviços compartilhem o mesmo IP."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["protocolo", "serviço", "porta", "aplicação"],
   "regras": ["uma camada presta serviço à superior e usa o serviço da inferior", "a porta identifica o processo dentro de um host", "as portas bem conhecidas (0 a 1023) são atribuídas a serviços padronizados", "várias aplicações compartilham o mesmo IP por portas diferentes"],
   "comparacoes": ["protocolo define regras de comunicação; serviço é a capacidade da camada", "IP identifica o host; porta identifica o processo dentro do host"],
   "fluxos": ["O cliente inicia a conexão usando porta de origem efêmera e envia o primeiro segmento ao servidor", "O segmento chega ao servidor e é direcionado pela porta de destino ao processo correto", "A aplicação consome o serviço oferecido pelo protocolo e exibe o resultado ao usuário"],
   "excecoes": ["portas efêmeras (49152 a 65535) são usadas pelo cliente", "o mesmo protocolo pode usar portas diferentes (HTTP 80, HTTPS 443)"],
   "palavrasChave": ["protocolo", "serviço", "porta", "aplicação", "TCP", "HTTP", "HTTPS", "IANA"],
   "checklist": ["Sei definir protocolo, serviço, porta e aplicação separadamente?", "Conheço portas bem conhecidas como 80 (HTTP), 443 (HTTPS), 53 (DNS) e 22 (SSH)?", "Entendo que várias aplicações compartilham o mesmo IP por portas?", "Reconheço que porta não é protocolo?", "Associo cada protocolo ao serviço e à camada em que opera?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Diferenciar protocolo, serviço, porta e aplicação no envio de e-mail por um cliente de e-mail.",
    "dados": "Cliente de e-mail (Thunderbird) enviando uma mensagem; protocolo SMTP; serviço de entrega de mensagens; porta 25 (ou 587 com submissão); servidor de e-mail do provedor.",
    "conceitos": ["aplicação", "protocolo", "serviço", "porta"],
    "estrategia": "Identificar o programa que usa a rede (aplicação), as regras de envio (protocolo SMTP), a capacidade oferecida (entrega de mensagens) e o número de porta que direciona o segmento ao processo correto no servidor.",
    "execucao": ["1) Identificar a aplicação: o cliente de e-mail (Thunderbird).", "2) Identificar o protocolo: SMTP define as regras de envio.", "3) Identificar o serviço: entrega de mensagens do remetente ao servidor.", "4) Identificar a porta: 25 (SMTP) ou 587 (submissão) direciona ao processo do servidor."],
    "resultado": "Aplicação: cliente de e-mail. Protocolo: SMTP. Serviço: entrega de mensagens. Porta: 25 (ou 587 com submissão).",
    "justificativa": "O gabarito separa as quatro noções: quem usa a rede é a aplicação, as regras de envio são o protocolo SMTP, a capacidade é o serviço de entrega, e a porta 25/587 direciona o segmento ao processo de SMTP no servidor.",
    "errosFrequentes": ["Confundir protocolo com serviço (dizer que o SMTP é um serviço em vez de um protocolo).", "Acreditar que o IP sozinho identifica o programa de e-mail, sem usar o número da porta."],
    "variacao": "Substituir o envio de e-mail por uma navegação web: o aluno deve identificar navegador como aplicação, HTTP como protocolo, transferência de hipertexto como serviço e porta 80 como ponto de acesso."
   },
   {
    "tipo": "aplicacao",
    "problema": "Explicar por que o mesmo servidor pode hospedar um site (HTTP) e um serviço de e-mail (SMTP) simultaneamente em um único endereço IP.",
    "dados": "Um servidor com um único endereço IP (200.135.80.150) executando um servidor web na porta 80/443 e um servidor de e-mail SMTP na porta 25/587; clientes acessam ambos pelo mesmo IP.",
    "conceitos": ["endereço IP", "porta", "serviço", "demultiplexação"],
    "estrategia": "Reconhecer que o IP identifica o host e que o sistema operacional usa o número da porta de destino para entregar cada segmento ao processo correto, de modo que serviços diferentes coexistem no mesmo IP usando portas diferentes.",
    "execucao": ["1) Identificar que o servidor tem um único endereço IP (200.135.80.150).", "2) Associar o serviço web à porta 80 (HTTP) e à 443 (HTTPS).", "3) Associar o serviço de e-mail SMTP às portas 25 e 587.", "4) Concluir que o sistema operacional demultiplexa os segmentos chegantes pela porta de destino, direcionando ao processo web ou ao de e-mail."],
    "resultado": "O mesmo IP hospeda ambos os serviços porque cada um usa uma porta diferente: 80/443 para web e 25/587 para SMTP; o sistema operacional direciona o tráfego pelo número da porta.",
    "justificativa": "O gabarito explica que o IP identifica o host, não o processo, e que a demultiplexação por porta permite que web e e-mail coexistam no mesmo endereço IP sem conflito.",
    "errosFrequentes": ["Acreditar que cada serviço exige um endereço IP diferente.", "Confundir o número da porta com o endereço IP na identificação do processo."],
    "variacao": "Adicionar um servidor DNS na porta 53 ao mesmo servidor; o aluno deve identificar que o DNS também coexiste no mesmo IP usando a porta 53."
   },
   {
    "tipo": "erro",
    "problema": "Avaliar a afirmação de que a porta 443 é um protocolo de comunicação seguro no contexto de navegação por HTTPS.",
    "dados": "Afirmação de que a porta 443 é um protocolo; contexto de navegação segura por HTTPS; necessidade de distinguir número de porta de conjunto de regras de comunicação.",
    "conceitos": ["protocolo", "porta", "HTTPS", "TLS"],
    "estrategia": "Reconhecer que a afirmação confunde o número de porta (ponto de acesso) com o protocolo (regras de comunicação); HTTPS é o protocolo, 443 é apenas a porta onde o serviço HTTPS costuma ser oferecido.",
    "execucao": ["1) Identificar que a afirmação chama a porta 443 de protocolo.", "2) Lembrar que protocolo é o conjunto de regras (HTTPS/TLS sobre HTTP) e porta é o ponto de acesso numérico.", "3) Concluir que 443 apenas identifica o processo HTTPS no servidor, não define regras de comunicação."],
    "resultado": "Errado. 443 é um número de porta associado ao protocolo HTTPS; o protocolo seguro é o HTTPS (HTTP sobre TLS/SSL), não o número da porta.",
    "justificativa": "O gabarito corrige a afirmação ao separar protocolo (regras de comunicação: HTTPS) de porta (ponto de acesso: 443), mostrando que a porta não é um protocolo.",
    "errosFrequentes": ["Acreditar que o número da porta define regras de comunicação.", "Dizer que mudar a porta invalida a segurança do HTTPS."],
    "variacao": "Apresentar a afirmação de que o SSH é uma porta; o aluno deve reconhecer que SSH é um protocolo e a 22 é apenas sua porta padrão."
   }
  ]
 },
 "m2-u2-t2-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "A prova pode cobrar a função de um protocolo sem exigir sua camada exata, e assumir correspondência rígida entre OSI e TCP/IP gera erro. Reconhecer que a correspondência é uma simplificação didática, não biunívoca, evita classificação incorreta de protocolos como ARP, ICMP e TLS. Essa postura crítica é decisiva em itens de interpretação de concursos.",
   "preRequisitos": ["Modelos OSI e TCP/IP"],
   "objetivosObservaveis": ["Explicar que a correspondência OSI↔TCP/IP é didática, não biunívoca", "Citar protocolos que não se encaixam em uma única camada (ARP, ICMP, TLS)", "Evitar classificações rígidas de protocolo por camada", "Priorizar a função do protocolo em vez da camada"],
   "competencias": ["Análise crítica de modelos de rede", "Precisão de classificação de protocolos"],
   "dificuldade": "avancado",
   "relacoes": ["m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — modelo comparado com o OSI"],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "A correspondência aproximada entre OSI e TCP/IP e a classificação de protocolos que atravessam camadas aparecem em questões de interpretação de redes de concursos, pois testam função sobre decorativismo de camada; é uma estimativa pedagógica qualitativa, não frequência estatística comprovada."
   }
  },
  "niveis": {
   "iniciante": "A correspondência entre OSI e TCP/IP é uma simplificação didática, não uma equivalência biunívoca. O OSI tem sete camadas e o TCP/IP quatro, de modo que sessão (5), apresentação (6) e aplicação (7) do OSI colapsam na camada de aplicação do TCP/IP. Alguns protocolos não se encaixam em uma única camada: ARP opera entre enlace e rede (resolve IP em MAC), ICMP é integrado ao IP e TLS funciona entre transporte e aplicação. Em prova, priorizar a função do protocolo.",
   "intermediario": "O aluno identifica casos em que a equivalência OSI↔TCP/IP não é direta. IP depende de ARP (enlace/rede) e de ICMP (integrado ao IP), de modo que não é um protocolo \"puro\" da camada 3. TCP inclui controle de congestionamento não detalhado no OSI. TLS protege HTTP e opera entre transporte e aplicação, sem camada OSI única. MPLS e túneis de VPN operam entre camadas. A classificação é didática, não lei física.",
   "avancado": "O aluno avançado analisa cada protocolo pela função e pelo problema que resolve, em vez de decorar camadas. ARP resolve IP para MAC entre enlace e rede; ICMP transporta mensagens de controle de erro dentro do IP; TLS estabelece segurança acima do TCP e abaixo da aplicação. O modelo OSI não detalha controle de congestionamento do TCP e o IP real depende de funções auxiliares; a correspondência é aproximada.",
   "especialista": "O especialista discute tecnologias entre camadas, como MPLS e túneis de VPN, e avalia como o TCP delega confiabilidade às pontas. Conhece a não separação de sessão e apresentação no TCP/IP (essas funções ficam na aplicação ou bibliotecas) e argumenta que o OSI permanece como referência didática enquanto o TCP/IP é o modelo que opera na Internet real."
  },
  "comparacoes": [
   {
    "tema": "correspondência OSI x TCP/IP",
    "a": { "rotulo": "OSI", "texto": "Sete camadas (física, enlace, rede, transporte, sessão, apresentação, aplicação); separa sessão e apresentação; modelo de referência conceitual." },
    "b": { "rotulo": "TCP/IP", "texto": "Quatro camadas (acesso à rede, internet, transporte, aplicação); não separa sessão e apresentação; modelo prático que opera na Internet." },
    "diferencaGabarito": "A correspondência é aproximada: sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP; não é uma equivalência biunívoca."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Todo protocolo pode ser classificado sem ambiguidade em uma única camada OSI.",
    "porqueErrada": "Protocolos modernos como TLS, QUIC e MPLS atravessam ou não se encaixam bem nas sete camadas do OSI. ARP opera entre enlace e rede; ICMP é integrado ao IP; TLS funciona entre transporte e aplicação. A classificação é ferramenta didática, não lei física.",
    "versaoCorreta": "Errado. Classificar todo protocolo em uma única camada OSI é um erro: TLS, QUIC e MPLS operam entre camadas ou não se encaixam nas sete. A camada é uma ferramenta de organização didática, e não uma regra física que obriga cada protocolo a uma única posição."
   },
   {
    "afirmacaoEquivocada": "TLS pertence exclusivamente à camada de aplicação do TCP/IP.",
    "porqueErrada": "TLS opera acima do TCP (transporte) e abaixo da aplicação (HTTP), protegendo protocolos como HTTP. Não tem camada única no OSI e não é apenas aplicação no TCP/IP: funciona entre transporte e aplicação.",
    "versaoCorreta": "Errado. TLS opera entre o transporte (TCP) e a aplicação (HTTP), não tem camada OSI única, e não pertence exclusivamente à camada de aplicação do TCP/IP."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["correspondência OSI↔TCP/IP", "simplificação didática", "protocolos entre camadas", "função do protocolo"],
   "regras": ["OSI tem 7 camadas, TCP/IP tem 4", "sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP", "ARP, ICMP e TLS não se encaixam em uma única camada", "em prova, priorizar a função do protocolo sobre a camada"],
   "comparacoes": ["OSI separa sessão e apresentação; TCP/IP não", "correspondência é aproximada, não biunívoca"],
   "fluxos": ["dados descem pela pilha do remetente (aplicação → física)", "cabeçalhos são adicionados camada por camada (encapsulamento)", "dados sobem pela pilha do destino (física → aplicação)"],
   "excecoes": ["ARP opera entre enlace e rede (resolve IP em MAC)", "ICMP é integrado ao IP, embora transporte mensagens de controle", "TLS funciona entre transporte e aplicação, sem camada OSI única"],
   "palavrasChave": ["OSI", "TCP/IP", "correspondência", "camadas", "ARP", "ICMP", "TLS", "MPLS"],
   "checklist": ["Sei que a correspondência OSI↔TCP/IP é aproximada, não biunívoca?", "Conheço exemplos de protocolos que não se encaixam em uma única camada (ARP, ICMP, TLS)?", "Priorizo a função do protocolo em vez da camada em prova?", "Sei que sessão, apresentação e aplicação do OSI colapsam na aplicação do TCP/IP?", "Reconheço que o TCP/IP é o modelo prático da Internet?"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Em qual camada 'encaixar' o protocolo TLS ao proteger o tráfego HTTP entre transporte e aplicação?",
    "dados": "Protocolo TLS protegendo HTTP (HTTPS); TLS opera acima do TCP (transporte) e abaixo da aplicação (HTTP); necessidade de classificar TLS em um modelo de camadas.",
    "conceitos": ["TLS", "HTTP", "TCP", "camada de apresentação"],
    "estrategia": "Reconhecer que não há encaixe único para TLS: opera acima do TCP e abaixo da HTTP, entre transporte e aplicação; alguns materiais o colocam como camada de apresentação (OSI 6), outros como segurança na aplicação, mas a função importa mais que a camada.",
    "execucao": ["1) Identificar que TLS fica acima do TCP (transporte) e abaixo da aplicação (HTTP).", "2) Observar que, no OSI, não há uma camada única para TLS.", "3) Constatar que materiais o colocam como camada de apresentação (OSI 6) ou como segurança na aplicação.", "4) Concluir que a função (proteger HTTP) importa mais que a camada exata."],
    "resultado": "Não há encaixe único: TLS opera entre transporte e aplicação; muitos textos o colocam como camada de apresentação (OSI 6) ou segurança na aplicação; a função importa mais que a camada.",
    "justificativa": "O gabarito explica que TLS não tem camada OSI única e que, em prova, deve-se priorizar sua função (proteger o tráfego entre transporte e aplicação) em vez de decorar uma camada.",
    "errosFrequentes": ["Forçar TLS em uma única camada OSI, ignorando que opera entre camadas.", "Acreditar que TLS é exclusivamente da camada de aplicação."],
    "variacao": "Apresentar o QUIC, que opera sobre UDP e combina transporte e segurança; o aluno deve reconhecer que também não se encaixa em uma única camada."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma questão de concurso afirma que 'ARP é um protocolo da camada de rede'. Avaliar se está correta.",
    "dados": "Afirmação de que ARP é protocolo da camada de rede; ARP resolve endereços IP em endereços MAC; no TCP/IP ARP é associado à camada de acesso à rede/Internet; no OSI costuma-se colocar na camada 2 (enlace) ou 3 (rede).",
    "conceitos": ["ARP", "camada de rede", "camada de enlace", "endereço IP", "endereço MAC"],
    "estrategia": "Reconhecer que a correção depende do modelo adotado pela banca: no TCP/IP ARP é associado ao acesso à rede/Internet, enquanto no OSI costuma-se colocar na camada 2 (enlace) ou 3; o aluno deve ler o enunciado e identificar o modelo de referência.",
    "execucao": ["1) Identificar que a afirmação classifica ARP na camada de rede.", "2) Lembrar que ARP resolve IP para MAC, atuando entre enlace e rede.", "3) Constatar que, no TCP/IP, ARP é associado ao acesso à rede/Internet; no OSI, à camada 2 ou 3.", "4) Concluir que a resposta depende do modelo adotado pela banca e que o enunciado deve ser lido com atenção."],
    "resultado": "Depende da referência: no TCP/IP, ARP é associado à camada de acesso à rede/Internet; no OSI, costuma-se colocar na camada 2 (enlace) ou 3. A resposta correta depende do modelo adotado pela banca.",
    "justificativa": "O gabarito mostra que não há classificação única e absoluta para ARP: depende do modelo de referência, de modo que a afirmação só é avaliável após saber qual modelo o enunciado adota.",
    "errosFrequentes": ["Classificar ARP rigidamente em uma única camada sem considerar o modelo de referência.", "Acreditar que existe uma resposta absoluta independente do modelo OSI ou TCP/IP."],
    "variacao": "Apresentar a mesma questão mas especificando o modelo OSI; o aluno deve então posicionar ARP na camada 2 (enlace) ou 3 conforme o material adotado."
   },
   {
    "tipo": "erro",
    "problema": "Avaliar a afirmação: 'Todo protocolo pode ser classificado sem ambiguidade em uma única camada OSI.'",
    "dados": "Afirmação de classificação unívoca; exemplos de protocolos que atravessam camadas (TLS, QUIC, MPLS); necessidade de reconhecer a correspondência como ferramenta didática.",
    "conceitos": ["classificação de protocolos", "camadas OSI", "TLS", "QUIC", "MPLS"],
    "estrategia": "Reconhecer que a afirmação é falsa porque protocolos modernos atravessam ou não se encaixam nas sete camadas do OSI; TLS protege HTTP entre transporte e aplicação; QUIC combina transporte e segurança sobre UDP; MPLS opera entre camadas; a classificação é didática, não lei física.",
    "execucao": ["1) Identificar que a afirmação nega qualquer ambiguidade na classificação por camada.", "2) Lembrar exemplos de protocolos que não se encaixam em uma única camada (TLS, QUIC, MPLS).", "3) Constatar que a correspondência OSI↔TCP/IP é simplificação didática.", "4) Concluir que a afirmação está errada: a classificação é ferramenta de organização, não lei física."],
    "resultado": "Errado. Um candidato que tenta encaixar TLS ou QUIC em uma única camada OSI classifica mal o protocolo, porque esses padrões atravessam camadas ou não se acomodam nas sete. O resultado prático na prova é marcar a alternativa errada: a função do protocolo vale mais que a camada exata.",
    "justificativa": "O gabarito corrige a afirmação ao apresentar protocolos reais que não se encaixam em uma única camada, mostrando que a classificação por camada é aproximada e didática.",
    "errosFrequentes": ["Acreditar que todo protocolo cabe em exatamente uma camada OSI.", "Ignorar que a escolha da camada depende do modelo de referência e do contexto."],
    "variacao": "Apresentar o MPLS, frequentemente chamado de 'camada 2,5'; o aluno deve reconhecer que o nome já sinaliza que o protocolo opera entre camadas."
   }
  ]
 }
};
