const enriParcialM2U3P6 = {
 "m2-u3-t4-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "O TLS garante confidencialidade, integridade e autenticidade do servidor sobre o TCP, mas não protege o endpoint. Provas cobram essa fronteira e o contraste entre os dois modos de TLS.",
   "preRequisitos": [
    "TCP e portas de serviço bem conhecidos",
    "Criptografia de chave pública e assinatura digital"
   ],
   "objetivosObservaveis": [
    "Definir confidencialidade, integridade e autenticidade no TLS",
    "Descrever o handshake: ClientHello, ServerHello, certificado",
    "Explicar o vínculo do certificado X.509 e o papel da CA",
    "Distinguir TLS implícito de STARTTLS"
   ],
   "competencias": [
    "Separar proteção de transporte de proteção de endpoint",
    "Julgar a conduta segura diante de certificado inválido"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t2-s1 (HTTP e HTTPS: finalidade, fluxo e portas) — TLS implícito na 443",
    "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — TLS ou STARTTLS",
    "m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — base do handshake"
   ],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Itens C/E e de múltipla escolha cobram garantias do TLS, handshake, certificado X.509 e a diferença entre TLS implícito e STARTTLS."
   }
  },
  "niveis": {
   "iniciante": "O TLS protege o tráfego sobre o TCP com confidencialidade, integridade e autenticidade do servidor. O handshake começa com o ClientHello; o servidor responde com ServerHello, certificado e Finished; o cliente valida o certificado.",
   "intermediario": "No ClientHello o cliente anuncia versões e suítes de cifra; o servidor devolve ServerHello, certificado X.509 e Finished; o cliente valida o certificado e deriva as chaves de sessão. TLS implícito nasce cifrado; STARTTLS eleva a porta padrão.",
   "avancado": "Certificado expirado, revogado ou de CA desconhecida gera alerta. A autenticação do cliente é opcional e rara. O TLS protege o transporte, não o endpoint: com servidor comprometido, os dados ficam legíveis.",
   "especialista": "A análise de um alerta de certificado exige validar cadeia de confiança, domínio, validade e revogação, e então rejeitar a conexão. O TLS protege a aplicação sobre TCP; o IPsec atua na rede."
  },
  "comparacoes": [
   {
    "tema": "TLS implícito e STARTTLS",
    "a": {
     "rotulo": "TLS implícito",
     "texto": "A conexão nasce cifrada em porta dedicada (443, 465, 993 e 995), sem fase em claro nem comando de elevação."
    },
    "b": {
     "rotulo": "STARTTLS",
     "texto": "A conexão parte do texto claro na porta padrão (587, 143, 110 e 25) e só se torna cifrada após o comando STARTTLS."
    },
    "diferencaGabarito": "Os dois entregam canal cifrado; mudam o momento e a porta: no implícito há cifragem desde o primeiro byte; no STARTTLS há fase em claro até a elevação."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'TLS garante segurança fim-a-fim incluindo o servidor e o cliente.'",
    "porqueErrada": "O TLS protege o canal entre cliente e servidor. No destino o servidor descriptografa os dados, e um endpoint comprometido expõe o conteúdo.",
    "versaoCorreta": "O TLS entrega confidencialidade, integridade e autenticidade do servidor no transporte; a proteção do endpoint depende de outros controles."
   },
   {
    "afirmacaoEquivocada": "STARTTLS e TLS implícito são idênticos porque ambos cifram o tráfego.",
    "porqueErrada": "O efeito é o mesmo, mas o início difere: no implícito a porta já é cifrada; no STARTTLS a sessão parte do texto claro e depende do comando.",
    "versaoCorreta": "O TLS implícito começa cifrado na porta segura; o STARTTLS parte do texto claro e se eleva por comando, com autenticação após o handshake."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "TLS: confidencialidade, integridade e autenticidade no TCP",
    "Handshake: ClientHello, ServerHello, certificado e Finished",
    "Certificado X.509 vincula chave pública a uma identidade (CA)"
   ],
   "regras": [
    "Validar certificado (CA, validade, domínio) antes de autenticar",
    "O TLS protege o transporte, não o endpoint"
   ],
   "comparacoes": [
    "TLS implícito (cifrado desde o início) contra STARTTLS (em claro até o upgrade)"
   ],
   "fluxos": [
    "Cliente: ClientHello → servidor: ServerHello, certificado e Finished → validação → chaves de sessão"
   ],
   "excecoes": [
    "O TLS não protege o endpoint: servidor comprometido expõe os dados",
    "Autenticação do cliente é opcional; CA comprometida permitiria certificado falso"
   ],
   "palavrasChave": [
    "TLS",
    "handshake",
    "certificado X.509",
    "CA",
    "STARTTLS"
   ],
   "checklist": [
    "Defino as garantias do TLS",
    "Descrevo o handshake e o certificado",
    "Distingo TLS implícito de STARTTLS",
    "Reconheço o que o TLS não protege"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Um navegador abre https://portal.exemplo.com na porta 443: a conexão nasce cifrada ou passa por texto claro?",
    "dados": "Esquema https, host portal.exemplo.com, porta TCP 443, serviço que só aceita TLS.",
    "conceitos": [
     "TLS implícito",
     "Porta segura 443"
    ],
    "estrategia": "Associar o esquema https e a porta 443 ao TLS implícito, em que a proteção vale desde o primeiro byte.",
    "execucao": [
     "Passo 1: ler o esquema https e a porta 443.",
     "Passo 2: associar a porta 443 ao TLS implícito.",
     "Passo 3: concluir que a cifragem vale já no primeiro byte."
    ],
    "resultado": "A conexão nasce cifrada na porta 443 (TLS implícito): sem fase em texto claro.",
    "justificativa": "No TLS implícito a negociação é a finalidade da porta 443, de modo que o primeiro byte já trafega cifrado.",
    "errosFrequentes": [
     "Supor que tráfego cifrado de web nasça em texto claro",
     "Confundir a porta 443 com a 587, que usa STARTTLS"
    ],
    "variacao": "O mesmo aluno acessa IMAP na porta 993: a resposta permanece TLS implícito, pois a conexão nasce cifrada."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um cliente conecta a um SMTP na porta 587, que anuncia STARTTLS. As credenciais vão antes ou depois da elevação?",
    "dados": "Servidor SMTP em mail.exemplo.org, porta 587, STARTTLS no banner e certificado X.509 depois.",
    "conceitos": [
     "STARTTLS",
     "Validação do certificado"
    ],
    "estrategia": "Tratar a porta 587 como conexão em texto claro: enviar STARTTLS, validar o certificado e só então autenticar, sem expor usuário e senha.",
    "execucao": [
     "Passo 1: conectar na 587 e ler o banner.",
     "Passo 2: enviar STARTTLS e aguardar o certificado.",
     "Passo 3: validar o certificado contra a CA confiável.",
     "Passo 4: se falhar, encerrar; senão, autenticar cifrado."
    ],
    "resultado": "O cliente eleva a sessão com STARTTLS, valida o certificado e só depois envia as credenciais; com certificado inválido, recusa.",
    "justificativa": "Enviar credenciais antes da elevação as exporia na rede; o certificado validado impede aceitar um impostor.",
    "errosFrequentes": [
     "Autenticar na porta 587 sem executar STARTTLS",
     "Aceitar o certificado sem conferir emissor e validade"
    ],
    "variacao": "O mesmo cliente usa IMAP na porta 143, que também anuncia STARTTLS: conectar em claro, elevar, validar e autenticar."
   },
   {
    "tipo": "erro",
    "problema": "Um auditor afirma: 'com o tráfego cifrado por TLS, o servidor não consegue ler o que o usuário enviou'. Julgar.",
    "dados": "Usuário envia formulário ao portal https://portal.exemplo.com; o servidor processa os campos sob TLS.",
    "conceitos": [
     "TLS protege o transporte, não o endpoint",
     "Descriptografia no destino"
    ],
    "estrategia": "O TLS se inicia e termina no servidor: a chave de sessão permite ao destino descriptografar o que recebe, então a cifragem impede escuta, não leitura pelo destinatário.",
    "execucao": [
     "Passo 1: identificar quem termina o túnel TLS.",
     "Passo 2: o servidor precisa da chave de sessão.",
     "Passo 3: o TLS impede leitura por terceiros, não pelo servidor."
    ],
    "resultado": "A afirmação é errada: o TLS impede a escuta no trajeto, mas o servidor de destino descriptografa e processa os dados.",
    "justificativa": "O canal cifrado tem como destino o próprio servidor, que precisa da chave de sessão para responder; a garantia é contra interceptação, não sigilo frente a ele.",
    "errosFrequentes": [
     "Confundir confidencialidade no trajeto com sigilo do servidor",
     "Acreditar que o TLS impediria o processamento dos dados"
    ],
    "variacao": "Afirmação: 'o TLS impede que um servidor comprometido exponha os dados'. Resposta: errada, pois os dados são descriptografados no servidor e expostos se o endpoint for comprometido."
   }
  ]
 },
 "m2-u3-t4-s3": {
  "orientacaoEstrategica": {
   "porqueImporta": "NAT, proxy e VPN resolvem problemas distintos de borda: reutilizar endereços públicos, intermediar requisições e estender redes privadas com sigilo.",
   "preRequisitos": [
    "Endereçamento IPv4 e faixas privadas (RFC 1918)",
    "TCP e UDP: portas e multiplexação"
   ],
   "objetivosObservaveis": [
    "Explicar a tradução de endereços do NAT na borda",
    "Descrever o PAT, que traduz também portas",
    "Distinguir proxy direto, transparente e reverso",
    "Caracterizar VPN site a site e acesso remoto"
   ],
   "competencias": [
    "Escolher NAT, proxy ou VPN conforme o requisito",
    "Diagnosticar falhas de tradução de endereços e portas"
   ],
   "dificuldade": "avancado",
   "relacoes": [
    "m2-u4-t1-s2 (Endereços públicos, privados, loopback e link-local) — base do NAT e do PAT",
    "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — análogo ao túnel da VPN"
   ],
   "relevanciaConcurso": {
    "classificacao": "alta",
    "justificativa": "Itens de arquitetura de rede testam cada mecanismo: NAT na tradução, PAT nas portas, proxy reverso na carga e VPN na extensão cifrada."
   }
  },
  "niveis": {
   "iniciante": "O NAT traduz endereços privados em públicos na borda; o PAT (NAT overload) traduz também as portas e permite várias conexões com um único IP público. Tipos: estático, dinâmico e PAT.",
   "intermediario": "O proxy intermedeia requisições em nome do cliente, transparente ou explícito, e oferece cache, filtragem e registro de tráfego. O proxy reverso distribui carga; a VPN cria um túnel cifrado.",
   "avancado": "O NAT quebra o princípio fim a fim: dificulta servidores internos, P2P e VoIP, atrapalha protocolos que embutem IP no payload e consome a tabela de estados. A VPN soma overhead e latência.",
   "especialista": "Na escolha entre NAT, proxy reverso e VPN, avalie posição e escopo: o NAT resolve endereçamento, o proxy reverso distribui carga e oculta a origem, a VPN estende a rede privada com sigilo."
  },
  "comparacoes": [
   {
    "tema": "NAT e PAT",
    "a": {
     "rotulo": "NAT",
     "texto": "Traduz apenas endereços: privados viram públicos, com um mapeamento por host."
    },
    "b": {
     "rotulo": "PAT",
     "texto": "Traduz endereço e porta: cada sessão recebe par distinto no IP público."
    },
    "diferencaGabarito": "O NAT mapeia por endereço; o PAT acrescenta a porta e multiplexa sessões. Dizer que o PAT admite um acesso por vez confunde o mapeamento com a tabela."
   },
   {
    "tema": "Proxy direto e proxy reverso",
    "a": {
     "rotulo": "Proxy direto",
     "texto": "Fica entre o cliente e a Internet, representando o cliente; transparente ou explícito, com cache."
    },
    "b": {
     "rotulo": "Proxy reverso",
     "texto": "Fica entre o cliente e os servidores, representando o servidor; distribui carga e oculta a origem."
    },
    "diferencaGabarito": "O proxy direto representa o cliente e o reverso o servidor; a posição na cadeia define o papel. Item que põe o reverso entre cliente e Internet troca os papéis."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "Afirmação: 'NAT aumenta a segurança como um firewall.'",
    "porqueErrada": "O NAT é endereçamento: oculta endereços internos e dificulta certos acessos, mas não decide por política o que atravessa a borda; filtrar é do firewall.",
    "versaoCorreta": "Parcialmente correta: o NAT oculta os endereços internos e dificulta o reconhecimento da rede, mas não filtra tráfego; quem filtra é o firewall."
   },
   {
    "afirmacaoEquivocada": "Afirmação: 'Proxy e VPN são equivalentes porque ambos protegem a comunicação.'",
    "porqueErrada": "Atuam em camadas distintas: a VPN cifra o tráfego de rede em um túnel; o proxy intermedeia requisições de aplicação em nome do cliente ou do servidor.",
    "versaoCorreta": "Proxy e VPN não são equivalentes: um intermedeia a aplicação; a outra cria um túnel cifrado de rede, com IPsec, OpenVPN ou WireGuard."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "NAT: tradução de endereços privados em públicos na borda",
    "PAT: traduz endereço e porta, com muitos hosts por IP",
    "Proxy reverso representa o servidor e distribui carga",
    "VPN: túnel cifrado que estende a rede privada"
   ],
   "regras": [
    "NAT traduz endereço; PAT traduz endereço e porta",
    "NAT não substitui firewall: ocultação não é filtragem"
   ],
   "comparacoes": [
    "NAT (traduz endereço) contra PAT (traduz endereço e porta)",
    "VPN (túnel cifrado) contra proxy (intermediação de aplicação)"
   ],
   "fluxos": [
    "Host interno abre conexão: a borda traduz IP e porta e roteia a resposta pelo mapeamento"
   ],
   "excecoes": [
    "O NAT quebra o fim a fim: dificulta servidores internos, P2P e VoIP",
    "A VPN tem overhead, latência e gestão de chaves"
   ],
   "palavrasChave": [
    "NAT",
    "PAT",
    "proxy reverso",
    "VPN"
   ],
   "checklist": [
    "Explico o que o NAT traduz",
    "Distingo NAT estático, dinâmico e PAT",
    "Separo proxy direto de proxy reverso",
    "Descrevo a VPN e suas limitações"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Uma residência tem dez dispositivos na Internet e um único IP público. Como todos acessam?",
    "dados": "Rede interna 192.168.0.0/24 com 10 hosts; o provedor entrega um IP público (203.0.113.7).",
    "conceitos": [
     "PAT (NAT overload)",
     "Multiplexação por portas"
    ],
    "estrategia": "Notar que um IP público comporta várias sessões quando a tradução distingue as portas de origem.",
    "execucao": [
     "Passo 1: os hosts saem com endereços privados.",
     "Passo 2: há um IP público do provedor.",
     "Passo 3: a coexistência exige tradução de portas."
    ],
    "resultado": "PAT: o roteador traduz IP e porta de cada sessão e mantém tabela de estados.",
    "justificativa": "Só a tradução de portas gera pares distintos de IP e porta, e a tabela de estados devolve cada resposta à sessão certa.",
    "errosFrequentes": [
     "Responder que o NAT simples resolve, sem as portas",
     "Confundir o IP do provedor com pool do NAT"
    ],
    "variacao": "Se o provedor entregar oito endereços públicos, o NAT dinâmico (pool) torna-se opção e o PAT não é necessário."
   },
   {
    "tipo": "aplicacao",
    "problema": "Uma empresa quer que 30 funcionários remotos alcancem folha de pagamento e ERP internos, com sigilo.",
    "dados": "30 usuários remotos; sistemas em 10.0.0.0/16; exigência de autenticação multifator e auditoria.",
    "conceitos": [
     "VPN de acesso remoto",
     "Túnel cifrado"
    ],
    "estrategia": "Alcançar a rede privada a partir de host externo pede VPN de acesso remoto, com túnel cifrado entre o usuário e a rede.",
    "execucao": [
     "Passo 1: o acesso parte de host externo e alcança a rede.",
     "Passo 2: VPN de acesso remoto; o proxy não estende a rede.",
     "Passo 3: configurar túnel cifrado e autenticação multifator."
    ],
    "resultado": "VPN de acesso remoto (IPsec/SSL/WireGuard) com autenticação forte (MFA), túnel cifrado e split tunneling conforme política.",
    "justificativa": "Alcançar a rede privada com sigilo e rastreabilidade é o escopo da VPN de acesso remoto; proxy e NAT não entregam ambos.",
    "errosFrequentes": [
     "Propor só NAT, que não cria sigilo",
     "Confundir proxy reverso com VPN, pois só ela cifra"
    ],
    "variacao": "Para publicar o ERP com balanceamento e proteção da origem, sem acesso remoto, a solução é proxy reverso."
   },
   {
    "tipo": "erro",
    "problema": "Um administrador afirma: 'como o roteador oculta os endereços internos, ninguém alcança o servidor'. Julgar.",
    "dados": "Rede 10.0.0.0/8 com servidor; NAT traduz endereços; firewall sem liberação.",
    "conceitos": [
     "NAT como endereçamento, não filtro",
     "Encaminhamento e firewall"
    ],
    "estrategia": "Separar endereçamento de filtragem: o NAT reescreve endereços; a entrada depende de encaminhamento e firewall.",
    "execucao": [
     "Passo 1: o NAT traduz endereços privados em públicos.",
     "Passo 2: a alcançabilidade depende de encaminhamento e firewall.",
     "Passo 3: a ocultação não é controle de acesso."
    ],
    "resultado": "Parcial. NAT oculta IPs internos (segurança por obscuridade) mas não filtra tráfego por política. Não substitui firewall; NAT + firewall é a combinação típica.",
    "justificativa": "O NAT resolve endereçamento e esconde endereços internos; quem filtra tráfego é o firewall. Confundir os dois expõe serviços ou promete proteção.",
    "errosFrequentes": [
     "Tomar ocultação como bloqueio",
     "Dizer que NAT e firewall são sinônimos ou exclusivos"
    ],
    "variacao": "Afirmação: 'com NAT dinâmico, os servidores ficam protegidos porque seus IPs são desconhecidos'. Resposta: errada; o NAT não filtra."
   }
  ]
 }
};
