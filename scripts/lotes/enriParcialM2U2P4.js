const enriParcialM2U2P4 = {
  "m2-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Integrar DNS, TCP, TLS e HTTP num único fluxo e a aplicação prática dos modelos de camadas cobrada em concursos. A prova exige a ordem exata: sem resolução de nome não há IP; sem TCP não há conexão confiável; sem TLS não há canal cifrado.",
      "preRequisitos": [
        "Camadas OSI e TCP/IP",
        "Encapsulamento por camada",
        "Resolução de nomes por DNS",
        "Conexão TCP"
      ],
      "objetivosObservaveis": [
        "Ordenar as etapas de uma requisição HTTP do nome a resposta",
        "Associar cada etapa a sua camada e protocolo responsáveis",
        "Descrever o three-way handshake TCP (SYN, SYN-ACK, ACK)"
      ],
      "competencias": [
        "Raciocínio integrado entre protocolos de camadas diferentes",
        "Leitura e interpretação de fluxos de rede"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u2-t1-s1 (As sete camadas do modelo OSI e suas funções) — camadas e encapsulamento",
        "m2-u2-t2-s1 (As quatro camadas do modelo TCP/IP) — camadas de transporte e internet"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Fluxo completo HTTP/DNS/TCP/TLS e tema central de redes em editais de TI. Questões avaliam ordem das etapas, associando sintoma a camada. Classificação qualitativa alta como estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O usuário digita www.exemplo.com; o navegador consulta o DNS e obtem o IP (192.0.2.10). Abre conexão TCP na porta 443 (SYN, SYN-ACK, ACK). Negocia TLS, criando túnel cifrado. Envia HTTP GET dentro do túnel. Cada camada encapsula: HTTP sobre TLS sobre TCP sobre IP sobre Ethernet.",
      "intermediario": "Na porta 443, o handshake TCP ocorre primeiro: SYN do cliente, SYN-ACK do servidor, ACK do cliente. Só então começa o TLS (Client Hello, certificado do servidor, acordo de chaves). Dentro do túnel TLS viajam os cabeçalhos HTTP.",
      "avancado": "O TLS cifra o conteúdo, mas não dispensa o DNS: o nome deve ser resolvido para IP antes da conexão TCP/TLS. Sem DNSSEC, a resposta DNS pode ser forjada (DNS spoofing). O certificado TLS e emitido para um nome de domínio, não para IP.",
      "especialista": "Diagnosticar esse fluxo exige isolar a etapa falha antes de culpar a aplicação. Se ping ao IP funciona mas nome não resolve: problema DNS. Se nome resolve mas conexão e recusada na 443: serviço parado, firewall ou porta errada. Se conexão estabelece mas HTTP retorna 500: aplicação."
    },
    "comparacoes": [
      {
        "tema": "DNS vs HTTP na requisição completa",
        "a": {
          "rotulo": "DNS",
          "texto": "Resolve nomes de domínio (ex.: www.exemplo.com) em endereços IP (ex.: 192.0.2.10). Ocorre antes da conexão TCP, usa porta 53 (geralmente UDP), e e pre-requisito para saber a quem conectar."
        },
        "b": {
          "rotulo": "HTTP",
          "texto": "Transporta a requisição web (GET, cabeçalhos, corpo) após a conexão TCP e o túnel TLS estarem estabelecidos. Usa porta 80 (HTTP) ou 443 (HTTPS/TLS) e define o método e recurso solicitados."
        },
        "diferencaGabarito": "DNS traduz nome em IP e acontece primeiro; HTTP envia a requisição de conteúdo e acontece depois, dentro do túnel cifrado. Sem DNS não se sabe o IP destino; sem HTTP não se solicita a página."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "HTTPS dispensa a resolução DNS porque a conexão e cifrada.",
        "porqueErrada": "O ciframento TLS protege o conteúdo da conexão, mas não remove a necessidade de saber o IP do servidor antes de conectar. O DNS e consultado antes do handshake TCP e do TLS; sem ele o navegador não sabe para qual endereço enviar o SYN.",
        "versaoCorreta": "Errado. O HTTPS cifra o conteúdo, mas antes precisa resolver o nome em IP e estabelecer a sessão TCP/TLS. A consulta DNS precede a conexão e, sem DNSSEC, pode ser falsificada, redirecionando o tráfego para um IP do atacante."
      },
      {
        "afirmacaoEquivocada": "O three-way handshake TCP ocorre após a negociação TLS.",
        "porqueErrada": "O TLS e um protocolo que roda sobre TCP; precisa de uma conexão TCP já estabelecida para trocar mensagens (Client Hello, certificado, chaves). Inverter a ordem e impossível porque o handshake TLS trafega dentro do segmento TCP.",
        "versaoCorreta": "Errado. A conexão TCP (SYN, SYN-ACK, ACK) e estabelecida primeiro, e somente depois ocorre a negociação TLS (Client Hello, certificado, acordo de chaves) dentro do túnel TCP. TLS não funciona sem TCP subjacente no modelo clássico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Encapsulamento HTTP sobre TLS sobre TCP sobre IP sobre Ethernet",
        "Three-way handshake TCP (SYN, SYN-ACK, ACK)",
        "Resolução DNS de nome para IP"
      ],
      "regras": [
        "DNS antes de abrir conexão TCP",
        "TLS requer conexão TCP estabelecida",
        "Cada camada encapsula com seu próprio cabeçalho"
      ],
      "comparacoes": [
        "DNS traduz nome em IP; HTTP transporta requisição web no túnel cifrado"
      ],
      "fluxos": [
        "Digite nome -> DNS resolve IP -> TCP handshake 443 -> TLS negocia -> HTTP GET -> resposta HTTP"
      ],
      "excecoes": [
        "IP direto elimina DNS, mas causa erro de hostname mismatch no certificado TLS"
      ],
      "palavrasChave": [
        "DNS",
        "TCP",
        "TLS",
        "HTTP",
        "encapsulamento"
      ],
      "checklist": [
        "Ordem das etapas do fluxo",
        "Cada etapa com camada e protocolo corretos",
        "Three-way handshake TCP",
        "Encapsulamento HTTP/TLS/TCP/IP/Ethernet"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Listar as etapas de uma visita a https://www.exemplo.com desde a digitação até o recebimento da página, na ordem correta.",
        "dados": "URL: https://www.exemplo.com; porta HTTPS: 443; protocolo: HTTP sobre TLS sobre TCP sobre IP; etapas: DNS, TCP handshake, TLS handshake, HTTP GET, resposta, renderização.",
        "conceitos": [
          "DNS",
          "TCP handshake",
          "TLS",
          "HTTP GET",
          "encapsulamento"
        ],
        "estrategia": "O aluno ordena cronologicamente cada ação do navegador, associando cada uma ao protocolo e a camada responsáveis, do nome até os bits físicos.",
        "execucao": [
          "1. O usuário digita www.exemplo.com no navegador.",
          "2. O navegador consulta o DNS e obtem o IP (192.0.2.10).",
          "3. Abre conexão TCP na porta 443 (three-way handshake: SYN, SYN-ACK, ACK) e negocia TLS.",
          "4. Envia HTTP GET dentro do túnel cifrado; o servidor responde e o navegador renderiza a página."
        ],
        "resultado": "DNS -> TCP handshake (443) -> TLS handshake -> HTTP GET -> resposta HTTP -> renderização.",
        "justificativa": "O resultado segue a ordem de dependências: só se conecta a um IP conhecido (DNS primeiro), só se cifra sobre TCP pronto (TLS depois) e só se requisita conteúdo dentro do túnel cifrado (HTTP por último).",
        "errosFrequentes": [
          "Colocar o HTTP GET antes do DNS, ignorando que o IP destino e desconhecido sem resolução de nome",
          "Colocar o TLS antes do TCP, esquecendo que o TLS trafega dentro de um segmento TCP já estabelecido"
        ],
        "variacao": "O usuário acessa http://www.exemplo.com (sem TLS, porta 80): elimina o handshake TLS, mas mantém DNS, TCP handshake na porta 80 e HTTP GET, exigindo nova aplicação das etapas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um usuário acessa um site diretamente pelo IP (ex.: https://192.0.2.10). Identificar a etapa eliminada e o problema que pode surgir.",
        "dados": "URL: https://192.0.2.10 (IP direto); porta 443; certificado TLS emitido para nome de domínio, não para IP; etapa eliminada: resolução DNS; problema esperado: erro de certificado (hostname mismatch).",
        "conceitos": [
          "DNS",
          "certificado TLS",
          "hostname mismatch",
          "HTTPS"
        ],
        "estrategia": "O aluno percebe que, ao informar o IP diretamente, não há nome a resolver, pula o DNS, e que o certificado TLS (vinculado a um nome) não confere com o IP, gerando aviso de segurança.",
        "execucao": [
          "1. O navegador recebe o IP 192.0.2.10 diretamente; não consulta DNS (etapa eliminada).",
          "2. Abre conexão TCP na porta 443 com o IP informado.",
          "3. Inicia negociação TLS; o servidor apresenta certificado de um nome de domínio.",
          "4. O navegador compara o certificado com o IP e detecta divergência (hostname mismatch); exibe erro de certificado."
        ],
        "resultado": "Elimina a resolução DNS. O certificado TLS e emitido para o nome de domínio, não para o IP; o navegador exibe erro de certificado (hostname mismatch).",
        "justificativa": "Sem DNS não há nome a validar contra o certificado; como vincula identidade a nome, não a IP, o navegador não confirma que o IP corresponde a entidade certificada, gerando o erro.",
        "errosFrequentes": [
          "Acreditar que acessar por IP direto e sempre mais rápido e seguro, ignorando a validação de identidade do certificado",
          "Assumir que o HTTPS por IP funciona como por nome, sem entender que o certificado esta atrelado ao domínio"
        ],
        "variacao": "O usuário acessa http://192.0.2.10 (sem TLS, porta 80): elimina DNS e TLS, não há certificado, mas o servidor pode exigir cabeçalho Host correto."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'HTTPS dispensa a resolução DNS porque a conexão e cifrada.'",
        "dados": "Afirmação: HTTPS dispensa DNS por ser cifrada; protocolo: HTTPS (porta 443); mecanismo: ciframento TLS sobre TCP; pre-requisito oculto: conhecer o IP destino antes do handshake TCP.",
        "conceitos": [
          "DNS",
          "TLS",
          "ciframento",
          "endereço IP",
          "handshake TCP"
        ],
        "estrategia": "O aluno deve reconhecer que o ciframento protege o conteúdo da comunicação, mas não remove a necessidade de identificar o destino (IP) antes de conectar; o DNS ocorre antes do TLS e e indispensável.",
        "execucao": [
          "1. O navegador recebe um nome (ex.: www.exemplo.com) e precisa saber o IP antes de qualquer conexão.",
          "2. Consulta o DNS (geralmente UDP 53) para obter o IP (ex.: 192.0.2.10).",
          "3. Só então abre conexão TCP na porta 443 e inicia o handshake TLS dentro dela."
        ],
        "resultado": "Errado. HTTPS cifra o conteúdo, mas ainda precisa resolver o nome para IP antes de estabelecer a conexão TCP/TLS. DNS ocorre antes e, sem DNSSEC, pode ser manipulado (DNS spoofing).",
        "justificativa": "O ciframento TLS opera sobre uma conexão TCP já existente; sem o IP obtido pelo DNS não há para onde enviar o SYN inicial, então o DNS e pre-requisito, não algo dispensado pelo HTTPS.",
        "errosFrequentes": [
          "Confundir 'cifrar o conteúdo' com 'não precisar identificar o destino', achando que o TLS resolve o nome sozinho",
          "Acreditar que o DNS só serve para HTTP simples e não para conexões cifradas"
        ],
        "variacao": "Um atacante forja a resposta DNS (sem DNSSEC) para um nome de banco, redirecionando o usuário para um IP malicioso; o TLS estabelece conexão com o servidor falso, que apresenta certificado inválido ou auto-assinado, revelando o ataque."
      }
    ]
  },
  "m2-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Identificar em qual etapa ocorre cada função e quais sintomas indicam falha evita chutes no diagnóstico; a prova cobra a associação sintoma-etapa. Cada etapa tem falhas características: DNS converte nome em IP; TCP estabelece conexão; TLS cifra; HTTP processa a requisição. Isolar a etapa antes de culpar a aplicação é a competência central.",
      "preRequisitos": [
        "Fluxo da requisição HTTP",
        "Camadas OSI e TCP/IP",
        "DNS",
        "TCP",
        "TLS",
        "HTTP"
      ],
      "objetivosObservaveis": [
        "Associar função e etapa do fluxo",
        "Reconhecer mensagens de erro",
        "Isolar a etapa falha",
        "Ordenar o diagnóstico"
      ],
      "competencias": [
        "Diagnóstico estruturado",
        "Leitura de mensagens de erro"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m2-u2-t3-s1 (Exemplo de requisição HTTP completa) — fluxo base",
        "m2-u3-t1-s1 (IPv4 e IPv6: finalidade e características) — contexto da aplicação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Diagnóstico por camadas e associação sintoma-etapa integram editais de TI em questões de troubleshooting. Classificação qualitativa média como estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "DNS: converte nome em IP; falha como 'não foi possível resolver o nome do host'. TCP: estabelece conexão e garante entrega; falha como 'connection timed out' ou 'connection refused'. TLS: cifra e autentica; falha como certificado inválido ou expirado. HTTP: erros como códigos de status (404, 500, 503). Roteamento: falha como 'destination net unreachable'. Enlace/físico: falha é ausência de link.",
      "intermediario": "O diagnóstico é por eliminação: se o ping ao IP funciona mas o nome não resolve, o problema é DNS; se o nome resolve mas a conexão é recusada, o problema é a porta/serviço; se a conexão se estabelece mas o HTTP retorna 500, o problema é a aplicação. Cada sintoma aponta a camada responsável, evitando culpar a aplicação indevidamente.",
      "avancado": "O ping testa ICMP (camada de rede), não a aplicação; um servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443. A falha de DNS aparece antes de qualquer conexão TCP; a falha de TLS aparece após a conexão TCP, durante o handshake; a falha de HTTP aparece após o túnel TLS, com códigos de status. Isolar a etapa antes de culpar a aplicação é a base do diagnóstico por camadas (unidade 5.4).",
      "especialista": "Se ping ao IP funciona mas nome não resolve: DNS. Se nome resolve mas conexão recusada na 443: serviço parado, firewall ou porta errada (transporte/aplicação). Se conexão estabelece mas HTTP retorna 500: aplicação. Erros TLS (certificado expirado/inválido) indicam problema de autenticação, não de rede. Erro 404 indica recurso inexistente (aplicação); 503 indica serviço indisponível (aplicação sobrecarregada). Cada falha tem sintoma característico que aponta à camada."
    },
    "comparacoes": [
      {
        "tema": "Falha de DNS vs falha de TCP",
        "a": {
          "rotulo": "DNS",
          "texto": "Falha de resolução de nome; sintomas: 'não foi possível resolver o nome do host', 'NXDOMAIN', 'ERR_NAME_NOT_RESOLVED'. Ocorre antes de qualquer conexão TCP."
        },
        "b": {
          "rotulo": "TCP",
          "texto": "Falha de conexão; sintomas: 'connection timed out' (host inacessível) ou 'connection refused' (porta fechada). Ocorre após o DNS, ao tentar estabelecer a conexão."
        },
        "diferencaGabarito": "DNS falha na resolução de nome (antes do TCP); TCP falha no estabelecimento da conexão (após o DNS). Sintomas distintos apontam a camada responsável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o ping funciona, o site deveria carregar normalmente.",
        "porqueErrada": "O ping exercita o ICMP, na camada de rede, e não a aplicação. O servidor pode responder ao ping e ainda assim ter o HTTP parado, certificado expirado ou as portas bloqueadas no firewall.",
        "versaoCorreta": "Errado. Ping testa ICMP (camada de rede), não a aplicação. O servidor pode responder a ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443."
      },
      {
        "afirmacaoEquivocada": "Um erro HTTP 500 indica problema na camada de rede.",
        "porqueErrada": "O código 500 é um erro do servidor (aplicação), não de rede. Indica que a aplicação web falhou ao processar a requisição, não um problema de conectividade ou roteamento.",
        "versaoCorreta": "Errado — 5xx é erro do servidor (aplicação), não de rede. O HTTP 500 indica que o servidor web falhou ao processar a requisição, independentemente da conectividade de rede."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DNS — resolução de nome em IP",
        "TCP — conexão confiável e portas",
        "TLS — ciframento e autenticação",
        "HTTP — requisição web e códigos de status"
      ],
      "regras": [
        "Falha de DNS ocorre antes da conexão TCP",
        "Falha de TCP ocorre após o DNS, ao estabelecer conexão",
        "Falha de TLS ocorre após o TCP, no handshake",
        "Falha de HTTP ocorre após o túnel TLS, com códigos de status"
      ],
      "comparacoes": [
        "DNS traduz nome em IP; HTTP processa a requisição web"
      ],
      "fluxos": [
        "Ping ao IP ok + nome não resolve = DNS; nome resolve + conexão recusada = porta/serviço; conexão estabelece + HTTP 500 = aplicação"
      ],
      "excecoes": [
        "Ping funciona mas site não carrega: problema de aplicação, não de rede"
      ],
      "palavrasChave": [
        "DNS",
        "TCP",
        "TLS",
        "HTTP",
        "ICMP",
        "ping",
        "código de status",
        "diagnóstico"
      ],
      "checklist": [
        "Associar função e etapa do fluxo",
        "Reconhecer mensagens de erro",
        "Isolar a etapa falha",
        "Ordenar o diagnóstico por camadas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um site não carrega e o navegador mostra 'ERR_NAME_NOT_RESOLVED'. Qual etapa falhou?",
        "dados": "Navegador mostra 'ERR_NAME_NOT_RESOLVED'; sintoma de falha de resolução de nome; etapa suspeita: DNS.",
        "conceitos": [
          "DNS",
          "resolução de nome",
          "ERR_NAME_NOT_RESOLVED"
        ],
        "estrategia": "O aluno deve associar a mensagem de erro à etapa DNS (resolução de nome), que ocorre antes de qualquer conexão TCP.",
        "execucao": [
          "1. O navegador exibe 'ERR_NAME_NOT_RESOLVED'.",
          "2. Essa mensagem indica falha de resolução de nome (DNS).",
          "3. O problema está no DNS, não na conexão TCP nem na aplicação."
        ],
        "resultado": "Resolução DNS — o nome não foi resolvido em IP. Verificar DNS, cache, conectividade e configuração de resolvedor.",
        "justificativa": "A mensagem 'ERR_NAME_NOT_RESOLVED' é específica de falha de DNS: o navegador não conseguiu converter o nome em IP, etapa que precede toda a conexão.",
        "errosFrequentes": [
          "Acreditar que o erro é do servidor web, quando na verdade o nome nunca foi resolvido",
          "Assumir que conectividade de rede está ok apenas porque o navegador abriu"
        ],
        "variacao": "O navegador mostra 'DNS_PROBE_FINISHED_NXDOMAIN': mesmo diagnóstico (falha de DNS), nome não existe no DNS, exigindo verificação do nome digitado."
      },
      {
        "tipo": "aplicacao",
        "problema": "O ping ao IP do servidor funciona, mas o navegador mostra 'connection refused' na porta 443. O que isso indica?",
        "dados": "Ping ao IP funciona (conectividade IP ok); navegador mostra 'connection refused' na porta 443; etapa suspeita: serviço/porta, não rede.",
        "conceitos": [
          "ping",
          "ICMP",
          "TCP",
          "porta 443",
          "connection refused"
        ],
        "estrategia": "O aluno deve perceber que ping ok prova conectividade de rede (IP), mas 'connection refused' na 443 indica que não há serviço escutando nessa porta (serviço parado, firewall ou porta diferente).",
        "execucao": [
          "1. O ping ao IP funciona: conectividade de rede (IP) está ok.",
          "2. O navegador mostra 'connection refused' na porta 443: nada escutando nessa porta.",
          "3. Conclusão: problema no serviço/porta (transporte/aplicação), não na rede."
        ],
        "resultado": "Conectividade IP ok, mas não há serviço escutando na porta 443 (servidor web parado, firewall bloqueando ou porta diferente). Problema na camada de transporte/aplicação, não de rede.",
        "justificativa": "O ping testa ICMP (rede) e confirma que o IP é alcançável; o 'connection refused' na 443 prova que o servidor não está aceitando conexões TCP nessa porta, isolando o problema à camada de transporte/aplicação.",
        "errosFrequentes": [
          "Concluir que a rede está com problema porque o site não carrega, ignorando que o ping ao IP funciona",
          "Assumir que 'connection refused' indica falha de DNS ou roteamento"
        ],
        "variacao": "O ping funciona mas o navegador mostra 'connection timed out' na 443: host inacessível ou firewall descartando pacotes (sem resposta), diferente de 'connection refused' (porta fechada ativamente)."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'Se o ping funciona, o site deveria carregar normalmente.' (ping testa ICMP, não a aplicação)",
        "dados": "Afirmação: ping funciona implica site carrega; protocolo: ping usa ICMP (camada de rede); site carrega exige HTTP (aplicação) nas portas 80/443.",
        "conceitos": [
          "ping",
          "ICMP",
          "HTTP",
          "aplicação vs rede"
        ],
        "estrategia": "O aluno deve reconhecer que o ping testa apenas ICMP (rede), não a aplicação HTTP; o servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443.",
        "execucao": [
          "1. O ping usa ICMP (camada de rede) e testa apenas alcançabilidade do IP.",
          "2. O site carregar exige HTTP nas portas 80/443 (camada de aplicação).",
          "3. Servidor pode responder ao ping mas ter HTTP parado, certificado expirado ou firewall bloqueando 80/443.",
          "4. Conclusão: ping ok não garante que o site carregue."
        ],
        "resultado": "A leitura ingênua conclui que, como o ping ao IP respondeu, o site deve carregar — mas o ping testa apenas a camada de rede (ICMP), não a aplicação HTTP. O servidor pode responder ao ping e, mesmo assim, ter o servidor web parado, o certificado expirado ou o firewall bloqueando as portas 80/443, de modo que o site não abre.",
        "justificativa": "O ping valida apenas a camada de rede (ICMP); o carregamento do site depende da aplicação HTTP nas portas 80/443, que pode estar parada ou bloqueada mesmo com rede funcionando.",
        "errosFrequentes": [
          "Confundir alcançabilidade de IP (ping) com disponibilidade da aplicação web",
          "Acreditar que resposta ao ping prova que todos os serviços do servidor estão ativos"
        ],
        "variacao": "O servidor responde ao ping e à conexão TCP na 443, mas o HTTP retorna 404: rede e transporte estão ok, o problema é o recurso inexistente na aplicação."
      }
    ]
  }
};
