const enriParcialM2U3P5 = {
 "m2-u3-t3-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "Sem resolver IP em MAC não há entrega de quadros no enlace: o ARP liga a camada de rede à camada de enlace. Em prova, comparece em itens sobre broadcast, spoofing, intermediário (MITM), mitigação e na oposição IPv4 e IPv6.",
   "preRequisitos": ["Endereçamento IPv4 e máscara de sub-rede", "Domínio de broadcast e endereço MAC", "Unicast, broadcast e multicast"],
   "objetivosObservaveis": ["explicará a função do ARP no IPv4 e do NDP no IPv6, e identificará riscos (ARP spoofing)", "Descrever ARP request em broadcast e reply em unicast, com o cache", "Reconhecer spoofing de ARP em ataque de intermediário e citar mitigações"],
   "competencias": ["Análise de protocolo de enlace e resolução de endereços", "Análise de risco em mecanismo sem autenticação", "Leitura de cache ARP e tabela de vizinhos"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u3-t3-s2 (SSH e ICMP) — protocolos de apoio do mesmo bloco", "m2-u4-t1-s1 (Estrutura de um endereço IPv4) — define IP e MAC da resolução", "m2-u5-t2-s3 (Verificação de rotas, ARP e vizinhos) — inspeção do cache e dos vizinhos"],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Classificação qualitativa média, estimativa pedagógica: ARP e NDP aparecem em itens sobre resolução de endereço e em segurança de rede, sobretudo na oposição IPv4 e IPv6."
   }
  },
  "niveis": {
   "iniciante": "O ARP resolve um endereço IP em um endereço MAC dentro da mesma sub-rede: o host pergunta em broadcast 'quem tem o IP X?' e recebe o MAC em reply unicast, guardando o par no cache. É stateless e não autenticado.",
   "intermediario": "A consulta alcança todo o domínio de broadcast e a resposta é unicast; o cache evita repetições. Como nada é validado, qualquer host pode injectar um par IP-MAC falso, caracterizando spoofing e viabilizando ataque de intermediário. A defesa fica no switch, com Dynamic ARP Inspection.",
   "avancado": "No IPv6 o ARP não existe: o NDP roda sobre ICMPv6, com Neighbor Solicitation em multicast e Neighbor Advertisement, e também descobre roteadores e sustenta o SLAAC. Sem autenticação por padrão, também sofre spoofing; a extensão SEND é rara em redes comuns.",
   "especialista": "A diferença é de arquitetura: ARP é protocolo independente do IPv4 e depende de broadcast; NDP é função do ICMPv6 em multicast, integrada ao IPv6. Decidir onde aplicar inspeção ARP e quando fixar entradas estáticas é tarefa de projeto."
  },
  "comparacoes": [
   {
    "tema": "Resolução de endereço no enlace: ARP x NDP",
    "a": {
     "rotulo": "ARP no IPv4",
     "texto": "Protocolo independente, consultado por broadcast e respondido em unicast; resolve IP em MAC."
    },
    "b": {
     "rotulo": "NDP no IPv6",
     "texto": "Função do ICMPv6 com NS/NA em multicast solicitado, sem broadcast; descobre roteadores e apoia SLAAC."
    },
    "diferencaGabarito": "Não é troca de nome: o IPv6 abandona o broadcast e integra a resolução ao ICMPv6, somando roteador e SLAAC, mas segue exposto a resposta falsa."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'ARP funciona entre redes diferentes.'",
    "porqueErrada": "O ARP depende de quadro local: a consulta em broadcast não ultrapassa o roteador, então não se pergunta pelo MAC de outra sub-rede.",
    "versaoCorreta": "Errado. ARP resolve apenas na mesma rede (broadcast domain). Para alcançar outra rede, o host envia ao gateway padrão (cujo MAC é obtido por ARP)."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'O ARP é autenticado, então respostas falsas são descartadas.'",
    "porqueErrada": "O protocolo não traz autenticação nem verificação de origem: um reply não solicitado pode entrar no cache do host.",
    "versaoCorreta": "A falta de autenticação é a própria vulnerabilidade: existem spoofing e poisoning, e a defesa depende de controles externos no switch."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["ARP: resolução de IP para MAC na mesma sub-rede", "ARP request em broadcast e reply em unicast", "Cache ARP com validade limitada", "ARP spoofing e ataque de intermediário"],
   "regras": ["O ARP resolve apenas na mesma sub-rede; para outra rede, o MAC alvo é o do gateway", "IPv4 usa ARP e IPv6 usa NDP por ICMPv6, sem broadcast", "O ARP não autentica respostas: qualquer host pode injectar par IP-MAC falso"],
   "comparacoes": ["ARP x NDP: protocolo independente com broadcast (IPv4) contra função do ICMPv6 em multicast (IPv6)"],
   "fluxos": ["Precisa do MAC? → consulta o cache → request em broadcast → reply unicast → grava o par → encapsula e envia"],
   "excecoes": ["Entre sub-redes distintas, a consulta recai sobre o gateway e o IP destino permanece no pacote"],
   "palavrasChave": ["resolução de endereço", "broadcast", "multicast", "spoofing"],
   "checklist": ["Explico o que o ARP resolve e quando", "Descrevo request, reply e cache", "Reconheço spoofing e seu impacto", "Cito mitigações e o substituto no IPv6"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um PC da rede 192.168.1.0/24 precisa enviar um pacote a 192.168.1.5 na mesma LAN, mas desconhece o MAC do destino. Como ele o obtém?",
    "dados": "Origem 192.168.1.10/24 e destino 192.168.1.5/24 na sub-rede 192.168.1.0/24; switch sem VLANs; cache ARP vazio no início.",
    "conceitos": ["ARP request em broadcast", "ARP reply em unicast e cache"],
    "estrategia": "Confirmar pela máscara /24 que ambos estão na mesma sub-rede e descrever a troca request/reply.",
    "execucao": ["Comparar 192.168.1.10 e 192.168.1.5 com 255.255.255.0: mesma rede", "Emitir ARP request em broadcast perguntando quem tem 192.168.1.5", "Receber o reply unicast com o MAC e gravar o par no cache"],
    "resultado": "Envia ARP request broadcast: 'quem tem 192.168.1.5?'. O host com esse IP responde com seu MAC. O PC cacheia o par IP-MAC.",
    "justificativa": "O destino está no mesmo enlace, logo a entrega exige o MAC dele próprio; o ARP descobre esse MAC e o cache evita repetir a consulta.",
    "errosFrequentes": ["Confundir ARP com DNS: o DNS traduz nome em IP, o ARP traduz IP em MAC", "Ignorar a consulta broadcast e supor quadro direto ao destino final"],
    "variacao": "Repita o cenário com o destino em 192.168.2.5/24 e explique qual MAC passa a ser consultado."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um atacante envia ARP reply falsos associando o IP do gateway ao seu MAC. Qual ataque e qual impacto?",
    "dados": "Rede 192.168.1.0/24, gateway 192.168.1.1; atacante 192.168.1.77 enviando replies não solicitados; caches das vítimas voltados ao seu MAC.",
    "conceitos": ["ARP spoofing/poisoning", "Interceptação de tráfego (MITM)"],
    "estrategia": "Identificar o vetor (reply falso sem solicitação), o efeito no cache das vítimas e as contramedidas no switch.",
    "execucao": ["Reconhecer que o reply falso associa o IP do gateway ao MAC do atacante", "Concluir que as vítimas passam a enviar ao atacante o tráfego de saída", "Indicar mitigações: inspeção ARP, VLANs e monitoramento"],
    "resultado": "ARP spoofing/poisoning — tráfego destinado ao gateway é desviado ao atacante (MITM). Mitigar com DAI, segmentação e monitoramento de ARP.",
    "justificativa": "O ataque explora a falta de autenticação do ARP: com um par IP-MAC falso, o atacante se coloca entre as vítimas e o gateway e inspeciona o fluxo.",
    "errosFrequentes": ["Tratar o caso como indisponibilidade: a rede parece normal, mas o tráfego é interceptado", "Supor que cifra de aplicação anula o risco: ela não corrige o desvio"],
    "variacao": "Admita que os replies falsos associem o IP de um servidor interno ao MAC do gateway e compare os impactos."
   },
   {
    "tipo": "erro",
    "problema": "Um host 192.168.1.10/24 não alcança 10.0.0.5. O analista conclui: 'o ARP falhou porque 10.0.0.5 não respondeu ao request'. A leitura está correta?",
    "dados": "Host 192.168.1.10/24, gateway 192.168.1.1, destino remoto 10.0.0.5/8; a captura traz request por 192.168.1.1 e nenhum por 10.0.0.5.",
    "conceitos": ["Escopo local do ARP", "MAC do próximo salto x IP destino"],
    "estrategia": "Verificar qual IP foi perguntado na captura e separar falha de enlace, quando o gateway não responde, de falha de roteamento além dele.",
    "execucao": ["Verificar que a única consulta ARP busca o endereço 192.168.1.1", "Concluir que o quadro vai ao gateway e o pacote IP mantém destino 10.0.0.5", "Atribuir a falha a rota ou filtro além do gateway, não ao ARP"],
    "resultado": "A leitura é improcedente: nenhuma consulta ARP visa 10.0.0.5, pois o destino é remoto; o host resolve o MAC do gateway e a entrega depende do encaminhamento além dele.",
    "justificativa": "O ARP opera no domínio de broadcast e por isso só resolve endereços locais; para outra rede, o MAC resolvido é o do gateway e o IP destino permanece no pacote. A captura confirma: não há request pelo destino remoto.",
    "errosFrequentes": ["Interpretar o silêncio do destino remoto como falha de ARP, embora a consulta nunca o visasse", "Confundir o MAC do quadro com o IP do pacote: próximo salto x destino final"],
    "variacao": "Admita que a captura não contenha request algum, nem por 192.168.1.1, e reinterprete o diagnóstico."
   }
  ]
 },
 "m2-u3-t4-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Serviço de correio é tema consolidado no conteúdo programático: o item mistura protocolo, função e porta. SMTP empurra mensagens; POP3 e IMAP puxam, e as portas mudam conforme o uso e a cifragem.",
   "preRequisitos": ["Transporte TCP e portas bem conhecidas de serviço", "Cliente de correio x servidor de correio", "Sessão persistente e criptografia TLS"],
   "objetivosObservaveis": ["Associar SMTP, POP3 e IMAP às funções de envio, recepção com remoção e recepção sincronizada", "Indicar as portas 25, 587 e 465, 110 e 995, 143 e 993", "Diferenciar TLS implícito de STARTTLS", "Explicar SPF, DKIM e DMARC na autenticação do domínio remetente"],
   "competencias": ["Leitura de item que associa protocolo, função e porta", "Diagnóstico de falha de envio ou de recebimento pela porta e pelo modo de conexão", "Separação entre autenticar o domínio e legitimar o conteúdo"],
   "dificuldade": "intermediario",
   "relacoes": ["m2-u3-t3-s1 (FTP, FTPS e SFTP) — protocolo de aplicação com sessão e porta própria", "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — sustenta a cifragem das sessões", "m2-u3-t4-s3 (NAT, PAT, proxy e VPN) — publicação de servidores exige tradução de endereços"],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Classificação qualitativa média, como estimativa pedagógica de adequação ao conteúdo programático: o trio de correio e suas portas aparece em itens de rede."
   }
  },
  "niveis": {
   "iniciante": "SMTP envia e transporta mensagens; POP3 e IMAP recebem. Portas: 25 (retransmissão entre servidores), 587 (submissão com STARTTLS) e 465 (SMTPS) no SMTP; 110 e 995 no POP3; 143 e 993 no IMAP. O IMAP guarda a mensagem no servidor; o POP3 a remove por padrão.",
   "intermediario": "O SMTP empurra: o cliente entrega a mensagem ao servidor, que a retransmite. POP3 e IMAP puxam, mas o POP3 baixa e costuma apagar a cópia no servidor, o que impede a leitura em outro dispositivo; o IMAP conserva e sincroniza. A porta 587 exige credencial.",
   "avancado": "Dois modos protegem a sessão. No TLS implícito, a conexão nasce cifrada na porta segura (465, 995 e 993). No STARTTLS, o cliente abre a porta comum (587, 110 e 143) em texto claro e pede a elevação; se recusada, aborta. SPF, DKIM e DMARC autenticam o domínio.",
   "especialista": "O diagnóstico separa envio de recepção: recusa na porta 25 ou 587 aponta política de retransmissão ou autenticação; recusa em 993 ou 995 indica acesso bloqueado. O POP3 pode manter a mensagem no servidor. SPF, DKIM e DMARC publicam políticas que o receptor consulta para aceitar ou rejeitar."
  },
  "comparacoes": [
   {
    "tema": "SMTP x POP3 e IMAP: o sentido do fluxo",
    "a": {
     "rotulo": "SMTP",
     "texto": "Empurrar: o cliente entrega ao servidor, que retransmite. Portas 25, 587, 465."
    },
    "b": {
     "rotulo": "POP3 e IMAP",
     "texto": "Puxar: o cliente busca no servidor. POP3 em 110 e 995; IMAP em 143 e 993."
    },
    "diferencaGabarito": "SMTP leva a mensagem ao servidor; POP3 e IMAP trazem do servidor para o cliente."
   },
   {
    "tema": "POP3 x IMAP: a cópia no servidor",
    "a": {
     "rotulo": "POP3",
     "texto": "Baixa a mensagem e, por padrão, remove a cópia do servidor."
    },
    "b": {
     "rotulo": "IMAP",
     "texto": "Mantém no servidor e sincroniza estado, pastas e marcadores."
    },
    "diferencaGabarito": "POP3 libera espaço no servidor; IMAP mantém a caixa igual em todos os dispositivos."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'SMTP baixa as mensagens do servidor para o dispositivo do usuário.'",
    "porqueErrada": "A função do SMTP é entregar e retransmitir a mensagem, não trazê-la de volta. Quem busca a mensagem no servidor para o cliente é o POP3 ou o IMAP.",
    "versaoCorreta": "Errado. O SMTP empurra a mensagem do cliente para o servidor e a retransmite; a recepção no dispositivo é feita por POP3 (110 e 995) ou IMAP (143 e 993)."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'IMAP apaga as mensagens do servidor assim que o usuário as lê.'",
    "porqueErrada": "A remoção da cópia no servidor é o comportamento típico do POP3. O IMAP conserva a mensagem e sincroniza o estado de leitura entre os dispositivos.",
    "versaoCorreta": "Errado. O IMAP mantém as mensagens no servidor e sincroniza o estado; quem tende a apagar a cópia no servidor é o POP3, que pode ser configurado para preservar o original."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'SPF, DKIM e DMARC garantem que o conteúdo da mensagem é legítimo.'",
    "porqueErrada": "Os mecanismos autenticam o domínio remetente e orientam a política do servidor receptor. Não examinam texto, link ou anexo: o phishing autêntico passa sem verificação.",
    "versaoCorreta": "Errado. SPF, DKIM e DMARC autenticam o domínio remetente e reduzem a falsificação de origem; não atestam a legitimidade do conteúdo, que exige atenção do usuário."
   }
  ],
  "resumoEstruturado": {
   "conceitos": ["SMTP: empurra e retransmite, nas portas 25, 587 e 465", "POP3: puxa e remove a cópia do servidor, nas portas 110 e 995", "IMAP: puxa e conserva no servidor, nas portas 143 e 993", "TLS implícito em 465, 995 e 993 contra STARTTLS em 587, 110 e 143", "SPF, DKIM e DMARC autenticam o domínio, não o conteúdo"],
   "regras": ["SMTP envia; POP3 e IMAP recebem: inverter a função leva à porta errada", "Porta 25 retransmite, 587 submete com autenticação, 465 cifra de início", "POP3 remove por padrão a cópia do servidor; IMAP conserva e sincroniza", "TLS implícito nasce cifrado; STARTTLS só eleva a conexão se o servidor aceitar"],
   "comparacoes": ["SMTP empurra ao servidor; POP3 e IMAP puxam do servidor", "POP3 baixa e libera espaço; IMAP conserva e sincroniza entre dispositivos"],
   "fluxos": ["Cliente autentica na 587, negocia STARTTLS e entrega a mensagem ao servidor", "Cliente abre a 993 ou 995, autentica e busca a mensagem, mantendo ou removendo a cópia"],
   "excecoes": ["O POP3 pode manter a mensagem no servidor, embora o padrão seja remover", "A porta 25 é de retransmissão entre servidores; provedores bloqueiam envio de clientes"],
   "palavrasChave": ["SMTP", "POP3", "IMAP", "empurrar", "puxar", "STARTTLS", "TLS implícito", "SPF, DKIM e DMARC"],
   "checklist": ["Associo cada protocolo à função de envio ou de recepção", "Indico a porta sem esquecer a variante com TLS", "Digo o que o POP3 faz com a cópia no servidor", "Separo TLS implícito de STARTTLS", "SPF, DKIM e DMARC autenticam o domínio, não o conteúdo"]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Uma servidora lê a mensagem no computador e depois não a encontra no celular. Que protocolo de recepção explica isso?",
    "dados": "Cliente com POP3 na 995; mensagem removida do servidor após a leitura no computador; celular depois, com a caixa vazia.",
    "conceitos": ["POP3: baixa a mensagem e remove a cópia do servidor", "IMAP: mantém a mensagem e sincroniza o estado"],
    "estrategia": "Identificar o protocolo configurado, observar a retirada da mensagem do servidor e comparar POP3 e IMAP.",
    "execucao": ["Reconhecer que o cliente usa POP3, na porta 995", "Verificar a retirada da mensagem após a leitura no computador", "Concluir que o IMAP manteria a mensagem no servidor"],
    "resultado": "É o POP3, que baixa e remove a cópia do servidor; com IMAP a mensagem ficaria nele e o estado seria sincronizado.",
    "justificativa": "A inconsistência nasce da remoção da cópia no servidor, padrão do POP3. Como o IMAP conserva a mensagem e sincroniza o estado, ambos veem a mesma caixa.",
    "errosFrequentes": ["Confundir a porta 995 com indício de IMAP, quando o número indica o transporte", "Supor falha de conectividade quando o sintoma é a retirada da mensagem do servidor"],
    "variacao": "Se a servidora usar IMAP na porta 993 e marcar a mensagem como lida no celular, o que o computador mostraria?"
   },
   {
    "tipo": "aplicacao",
    "problema": "Um órgão implanta cliente de correio para servidores públicos e precisa definir a porta de envio. A norma exige autenticação e cifragem: qual porta adotar?",
    "dados": "Servidor institucional; envio pela estação; exigência de credencial e sessão cifrada; porta 25 bloqueada.",
    "conceitos": ["Porta 587: submissão autenticada", "STARTTLS: elevação da sessão iniciada em texto claro"],
    "estrategia": "Descartar a porta de retransmissão entre servidores e verificar qual porta de submissão atende às exigências de credencial e cifragem.",
    "execucao": ["Excluir a porta 25, de retransmissão e bloqueada para clientes", "Adotar a porta 587, de submissão com autenticação da conta", "Exigir a elevação para STARTTLS e abortar o envio se recusada"],
    "resultado": "Porta 587, com autenticação da conta e negociação STARTTLS; a 465 vale quando a sessão nasce cifrada.",
    "justificativa": "A exigência de autenticação e cifragem aponta para a porta de submissão: na 587 o cliente se autentica e solicita a elevação da sessão.",
    "errosFrequentes": ["Indicar a porta 25 por ser a mais conhecida do SMTP, esquecendo a retransmissão", "Confundir STARTTLS com TLS implícito e dizer que a 587 já nasce cifrada"],
    "variacao": "Se a política proibir elevar uma sessão iniciada em texto claro, indique a porta alternativa e o que muda no envio."
   },
   {
    "tipo": "erro",
    "problema": "Um técnico afirma: 'as portas 993 e 995 protegem o correio com TLS, logo POP3S e IMAPS são o mesmo protocolo'. A afirmação se sustenta?",
    "dados": "Cliente na 993, com pastas e marcadores; servidor que apaga a mensagem após o download na 995; ambos com TLS.",
    "conceitos": ["Protocolos de aplicação distintos sob o mesmo transporte cifrado", "Sincronizar o estado ou remover a mensagem no servidor"],
    "estrategia": "Separar a camada de transporte, o TLS nos dois casos, da camada de aplicação, e confrontar a afirmação com o efeito observado no servidor.",
    "execucao": ["Reconhecer que a cifragem é o mesmo mecanismo nas duas portas", "Lembrar que o protocolo de aplicação define o comportamento", "Contrastar o sintoma: sincronização na 993, remoção da mensagem na 995"],
    "resultado": "Improcedente: o TLS é apenas o transporte cifrado. IMAP na 993 sincroniza; POP3 na 995 baixa e apaga a mensagem.",
    "justificativa": "A leitura ingênua confunde proteção com protocolo: o ciframento é idêntico nas portas, mas muda o que o cliente faz com a mensagem, visível nas pastas e na cópia retirada.",
    "errosFrequentes": ["Concluir que, cifrado o transporte, as duas opções têm o mesmo comportamento", "Não confrontar a afirmação com o sintoma: a remoção da mensagem no servidor"],
    "variacao": "Se as duas conexões passarem a usar a porta 143 sem cifra, o que muda na análise da falha e na recomendação de segurança?"
   }
  ]
 }
};