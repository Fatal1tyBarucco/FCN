const enriParcialM2U3P4 = {
 "m2-u3-t3-s1": {
  "orientacaoEstrategica": {
   "porqueImporta": "Transferir arquivos sem cifra expõe credenciais e dados a captura na rede (sniffing). Concursos cobram a diferença entre FTP, FTPS e SFTP: escolher o protocolo seguro e interpretar firewall/NAT. Confundi-los leva erro de configuração e segurança.",
   "preRequisitos": [
    "TCP e suas portas (controle e dados)",
    "TLS/SSL (cifra de transporte)",
    "SSH (acesso remoto seguro)"
   ],
   "objetivosObservaveis": [
    "Descrever o FTP e suas duas conexões TCP (controle 21, dados 20/efêmera)",
    "Explicar o modo ativo e o modo passivo do FTP e seu comportamento com NAT/firewall",
    "Diferenciar FTPS (FTP + TLS) de SFTP (SSH File Transfer Protocol) quanto a protocolo base e porta",
    "Recomendar a opção mais segura para transferência de arquivos"
   ],
   "competencias": [
    "Escolha de protocolo de transferência seguro",
    "Leitura de configuração de serviços de rede"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t3-s2 (SSH e ICMP) — base do SFTP, que roda sobre SSH",
    "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — base do FTPS, que adiciona TLS ao FTP"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Classificação qualitativa média, estimativa pedagógica: FTP/FTPS/SFTP aparece em editais de TI como item de diferença conceitual e escolha segura, sem frequência estatística comprovada em provas recentes."
   }
  },
  "niveis": {
   "iniciante": "FTP (File Transfer Protocol) transfere arquivos usando DUAS conexões TCP: controle na porta 21 e dados na porta 20 (modo ativo) ou porta efêmera (passivo). No modo ativo, o servidor conecta de volta ao cliente e falha atrás de NAT/firewall; no passivo, o cliente inicia a conexão de dados (preferível hoje). O FTP não cifra credenciais nem dados: viajam em texto claro, passíveis de sniffing.",
   "intermediario": "FTPS (FTP over SSL/TLS) acrescenta TLS ao FTP, mantendo porta 21 para controle e cifrando o canal de dados; autentica o servidor e protege o conteúdo. SFTP (SSH File Transfer Protocol) é um protocolo DIFERENTE que roda sobre SSH na porta 22, cifra toda a sessão e permite autenticação por chave ou senha. São implementações distintas.",
   "avancado": "O SFTP é o mais recomendado por usar um único canal cifrado (SSH, porta 22) e simplificar a passagem por firewalls. O FTPS persiste por compatibilidade com clientes/servidores legados, mas exige gerenciar canais de controle e dados cifrados, complicando regras de firewall. Em concursos, priorize SFTP quando o enunciado pedir \"protocolo seguro sobre SSH\".",
   "especialista": "O especialista avalia implantação: FTPS requer certificados TLS e abertura de portas de dados (desafiador com NAT); SFTP depende de servidor SSH e chaves de host, mas usa uma única porta (22) e cifra tudo. Auditar qual protocolo está em uso (21/20 vs. 22) e se credenciais viajam em texto claro é essencial para evitar vazamento."
  },
  "comparacoes": [
   {
    "tema": "FTPS vs. SFTP (o que os diferencia em prova)",
    "a": {
     "rotulo": "FTPS",
     "texto": "FTP encapsulado em TLS/SSL. Mantém porta 21 para controle e cifra o canal de dados. Requer gerenciar duas conexões (controle e dados) e certificados TLS."
    },
    "b": {
     "rotulo": "SFTP",
     "texto": "Protocolo próprio sobre SSH (porta 22). Cifra toda a sessão em um único canal, autentica servidor (host key) e cliente (senha ou chave pública). Não é \"FTP sobre SSH\", mas sim um protocolo distinto."
    },
    "diferencaGabarito": "Em prova, \"FTPS e SFTP são a mesma coisa\" é FALSO. FTPS = FTP + TLS (portas 21/20); SFTP = SSH + transferência (porta 22). São implementações distintas, com modelos de segurança e portas diferentes."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "FTPS e SFTP são o mesmo protocolo, apenas com nomes diferentes.",
    "porqueErrada": "Confunde duas tecnologias separadas. FTPS é FTP sobre TLS; SFTP roda sobre SSH (porta 22).",
    "versaoCorreta": "Errado. FTPS é FTP encapsulado em TLS (controle 21, dados cifrados). SFTP é subsistema do SSH (porta 22) com protocolo próprio."
   },
   {
    "afirmacaoEquivocada": "O modo ativo do FTP funciona em qualquer rede, inclusive atrás de NAT e firewall.",
    "porqueErrada": "No modo ativo, o servidor inicia a conexão de dados de volta para o cliente. Redes com NAT/firewall bloqueiam conexões entrantes, fazendo o modo ativo falhar.",
    "versaoCorreta": "Modo ativo: servidor conecta de volta ao cliente (problema com NAT/firewall). Modo passivo: cliente inicia a conexão de dados ao servidor."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "FTP: protocolo de aplicação para transferência de arquivos, duas conexões TCP (controle 21, dados 20/efêmera)",
    "Modo ativo vs. passivo: quem inicia a conexão de dados (servidor vs. cliente) e impacto em NAT/firewall",
    "FTPS: FTP com TLS/SSL (porta 21 controle, canal de dados cifrado)",
    "SFTP: protocolo sobre SSH (porta 22), cifra toda a sessão, autentica por chave ou senha"
   ],
   "regras": [
    "FTP não cifra: credenciais e dados viajam em texto claro (inseguro em redes não confiáveis)",
    "Modo passivo é preferível atrás de NAT/firewall (cliente inicia conexão de dados)",
    "FTPS != SFTP: são protocolos distintos (FTP+TLS vs. SSH+transferência)",
    "Opção mais segura hoje: SFTP, por ser um único canal cifrado sobre porta 22"
   ],
   "comparacoes": [
    "FTPS (FTP+TLS, portas 21/20, duas conexões) vs. SFTP (SSH, porta 22, único canal cifrado)",
    "FTP clássico (texto claro, inseguro) vs. FTPS/SFTP (cifrados, seguros)"
   ],
   "fluxos": [
    "Escolher protocolo: requisito de segurança? → sim → usar SFTP (SSH, porta 22) ou FTPS (TLS); não → evitar FTP clássico",
    "FTP transferir arquivo: abrir controle (21) → autenticar → abrir dados (20 ativo/efêmera passivo) → transferir → fechar"
   ],
   "excecoes": [
    "FTPS exige gerenciar duas conexões cifradas, o que complica regras de firewall e NAT",
    "SFTP depende de servidor SSH e host key; sem servidor SSH não há SFTP"
   ],
   "palavrasChave": [
    "FTP",
    "FTPS",
    "SFTP",
    "SSH",
    "TLS",
    "porta 21",
    "porta 22",
    "modo ativo",
    "modo passivo",
    "cifra",
    "NAT",
    "firewall",
    "sniffing"
   ],
   "checklist": [
    "Saber que FTP usa duas conexões TCP (controle 21, dados 20/efêmera)",
    "Diferenciar modo ativo (servidor conecta de volta) e passivo (cliente inicia dados)",
    "Diferenciar FTPS (FTP+TLS) de SFTP (SSH, porta 22)",
    "Reconhecer que FTP clássico não cifra credenciais nem dados",
    "Escolher SFTP como opção mais segura para transferência de arquivos"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Por que o FTP clássico é considerado inseguro para transferir arquivos em redes não confiáveis, sem qualquer cifra?",
    "dados": "FTP usa porta 21 (controle) e porta 20 (dados, modo ativo); usuário e senha viajam em texto claro.",
    "conceitos": [
     "FTP",
     "texto claro",
     "sniffing",
     "porta 21"
    ],
    "estrategia": "O FTP não cifra nem o canal de controle nem o de dados, então credenciais e arquivos ficam expostos a captura por qualquer host na mesma rede.",
    "execucao": [
     "1. O cliente abre conexão TCP de controle na porta 21.",
     "2. Envia usuário e senha em texto claro pelo canal de controle.",
     "3. Um atacante captura o tráfego e lê as credenciais.",
     "4. Os arquivos viajam sem cifra pelo canal de dados."
    ],
    "resultado": "O FTP é inseguro porque credenciais e dados viajam em texto claro, podendo ser capturados por sniffing em redes não confiáveis.",
    "justificativa": "O gabarito procede porque a ausência de cifra no FTP é a causa direta da exposição: sem criptografia, qualquer pacote interceptado revela usuário, senha e conteúdo.",
    "errosFrequentes": [
     "Achar que o FTP cifra pelo menos a senha (não cifra nada).",
     "Achar que apenas o canal de dados é inseguro (ambos os canais viajam em texto claro)."
    ],
    "variacao": "Usuário transfere relatório pelo FTP em Wi-Fi pública: credenciais e o documento podem ser capturados na mesma rede."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um administrador precisa transferir arquivos de um cliente para um servidor atrás de um firewall que bloqueia conexões entrantes. Qual modo do FTP usar e por quê?",
    "dados": "Firewall bloqueia conexões entrantes ao cliente; servidor FTP na porta 21; cliente tenta modo ativo e a conexão de dados falha.",
    "conceitos": [
     "modo ativo",
     "modo passivo",
     "NAT",
     "firewall",
     "porta 20"
    ],
    "estrategia": "No modo ativo o servidor inicia a conexão de dados de volta ao cliente (bloqueada pelo firewall); no modo passivo o cliente inicia a conexão ao servidor, que costuma passar.",
    "execucao": [
     "1. Tentar modo ativo: servidor abre conexão de dados de volta para o cliente → falha (firewall bloqueia entrada).",
     "2. Mudar para modo passivo: cliente inicia a conexão de dados ao servidor.",
     "3. O servidor informa porta efêmera para o canal de dados.",
     "4. O cliente se conecta nessa porta e transfere o arquivo."
    ],
    "resultado": "Usar o modo passivo, porque o cliente inicia a conexão de dados ao servidor, contornando o firewall que bloqueia conexões entrantes.",
    "justificativa": "O gabarito procede porque o modo passivo inverte quem inicia a conexão de dados (cliente → servidor), evitando o bloqueio de conexões entrantes do firewall/NAT.",
    "errosFrequentes": [
     "Manter o modo ativo mesmo com firewall bloqueando conexões entrantes.",
     "Achar que abrir só a porta 21 basta para qualquer modo do FTP."
    ],
    "variacao": "Cliente atrás de NAT rígido e servidor exige modo ativo: use SFTP na porta 22 ou FTPS com porta de controle fixa e portas de dados liberadas no firewall."
   },
   {
    "tipo": "erro",
    "problema": "Uma questão de concurso afirma que \"FTPS e SFTP são o mesmo protocolo com nomes diferentes\".",
    "dados": "Questão C/E iguala FTPS e SFTP; portas: FTPS usa 21 (controle) e dados cifrados; SFTP usa 22 (SSH).",
    "conceitos": [
     "FTPS",
     "SFTP",
     "TLS",
     "SSH",
     "porta 21",
     "porta 22"
    ],
    "estrategia": "Rejeitar a igualdade: FTPS é FTP sobre TLS (duas conexões, portas 21/20/efêmera); SFTP é protocolo próprio sobre SSH (única porta 22, cifra completa).",
    "execucao": [
     "1. FTPS é FTP encapsulado em TLS (controle 21, dados cifrados).",
     "2. SFTP é subsistema do SSH (porta 22, protocolo próprio).",
     "3. Comparar: protocolos base diferentes (FTP vs. SSH), portas diferentes (21/20 vs. 22), modelo diferente (duas vs. uma).",
     "4. Concluir que a afirmação é falsa."
    ],
    "resultado": "A afirmação é falsa: FTPS e SFTP são implementações distintas; FTPS = FTP + TLS, SFTP = SSH + transferência.",
    "justificativa": "O gabarito procede porque FTPS e SFTP diferem em protocolo base, porta padrão e arquitetura; equalizá-los é o erro clássico explorado pela prova.",
    "errosFrequentes": [
     "Achar que \"SFTP\" significa apenas \"FTP seguro\" genérico (é protocolo sobre SSH).",
     "Usar a porta 21 para SFTP ou a porta 22 para FTPS."
    ],
    "variacao": "Enunciado diz \"o SFTP roda sobre TLS na porta 443\": avaliar (não, SFTP roda sobre SSH na porta 22)."
   }
  ]
 },
 "m2-u3-t3-s2": {
  "orientacaoEstrategica": {
   "porqueImporta": "SSH substituiu o Telnet inseguro para acesso remoto e o ICMP sustenta diagnóstico como ping e traceroute. Concursos cobram as funções, portas e camadas de cada protocolo, e a diferença entre acesso remoto seguro e mensagens de controle de rede.",
   "preRequisitos": [
    "TCP e camada de transporte",
    "Camada de rede e endereçamento IP",
    "Noção de diagnóstico de rede"
   ],
   "objetivosObservaveis": [
    "Explicar o SSH como protocolo de aplicação para acesso remoto seguro",
    "Citar recursos do SSH (túneis, chaves, autenticação)",
    "Descrever o ICMP e suas mensagens de controle e erro",
    "Associar o ICMP ao ping e ao traceroute"
   ],
   "competencias": [
    "Acesso remoto seguro",
    "Interpretação de mensagens de controle de rede"
   ],
   "dificuldade": "intermediario",
   "relacoes": [
    "m2-u3-t3-s1 (FTP, FTPS e SFTP) — o SFTP roda sobre SSH, desta mesma unidade",
    "m2-u3-t4-s1 (SMTP, POP3 e IMAP no contexto de redes) — segurança de transporte, relacionada ao ciframento de sessões"
   ],
   "relevanciaConcurso": {
    "classificacao": "media",
    "justificativa": "Classificação qualitativa média, estimativa pedagógica: SSH e ICMP aparecem em editais de TI como itens de função, porta e uso de diagnóstico, sem frequência estatística comprovada em provas recentes."
   }
  },
  "niveis": {
   "iniciante": "SSH (Secure Shell) é protocolo de aplicação para acesso remoto seguro, execução de comandos e criação de túneis; usa TCP na porta 22. Autentica o servidor por chave de host e o cliente por senha ou chave pública, e cifra toda a sessão. Substituiu o Telnet (porta 23), que transmitia tudo em texto claro, inclusive a senha. Oferece encaminhamento de portas (túneis) e é a base do SFTP e do SCP.",
   "intermediario": "ICMP (Internet Control Message Protocol) é protocolo da camada de rede, auxiliar do IP, usado para mensagens de controle e erro: echo request/reply (base do ping), destination unreachable, time exceeded (base do traceroute). O ICMP não transporta dados de aplicação e não possui portas. Pode ser bloqueado por firewalls, fazendo o ping falhar mesmo com TCP/UDP operantes. No IPv6, o ICMPv6 integra o Neighbor Discovery (NDP).",
   "avancado": "Distinguir SSH (aplicação, porta 22) de ICMP (rede, sem portas) é essencial em prova. O SSH cifra toda a sessão e permite port forwarding; o ICMP apenas reporta erro e controle. Ping bem-sucedido prova alcance ICMP, não que todos os serviços estejam ativos; ping falho pode ser firewall, não falta de rota.",
   "especialista": "No nível especialista, avaliar túneis SSH como mecanismo de encaminhamento de portas e possível desvio de controle de acesso, e entender que o ICMPv6 no IPv6 substitui o ARP pelo NDP, obrigatório para funcionamento do enlace. Firewalls que filtram ICMP dificultam diagnóstico, mas não eliminam a conectividade TCP/UDP."
  },
  "comparacoes": [
   {
    "tema": "SSH vs. ICMP (o que os diferencia em prova)",
    "a": {
     "rotulo": "SSH",
     "texto": "Protocolo de aplicação, TCP porta 22, acesso remoto seguro, execução de comandos, túneis, cifra toda a sessão, autentica servidor e cliente."
    },
    "b": {
     "rotulo": "ICMP",
     "texto": "Protocolo da camada de rede, auxiliar do IP, sem portas, mensagens de controle e erro (ping, traceroute), não transporta dados de aplicação."
    },
    "diferencaGabarito": "Afirmar que SSH e ICMP são ambos de transporte é FALSO. SSH é aplicação (porta 22); ICMP é rede (sem portas). Servem a propósitos diferentes: acesso remoto seguro versus diagnóstico de rede."
   }
  ],
  "pegadinhas": [
   {
    "afirmacaoEquivocada": "ICMP é um protocolo de transporte como TCP e UDP.",
    "porqueErrada": "O ICMP pertence à camada de rede, é auxiliar do IP, não tem portas e não entrega dados de aplicação. TCP e UDP são transporte.",
    "versaoCorreta": "Errado. ICMP é protocolo de controle da camada de rede (IP), sem portas e sem entrega de dados de aplicação."
   },
   {
    "afirmacaoEquivocada": "Se o ping ao servidor responde, então todos os serviços dele (SSH, HTTP) estão funcionando.",
    "porqueErrada": "O ping usa ICMP echo request/reply, independente de TCP/UDP.",
    "versaoCorreta": "Ping bem-sucedido apenas confirma alcance ICMP do host; não garante que serviços específicos estejam ativos."
   }
  ],
  "resumoEstruturado": {
   "conceitos": [
    "SSH: protocolo de aplicação, TCP porta 22, acesso remoto seguro, cifra toda a sessão",
    "Telnet: protocolo inseguro (texto claro, porta 23) substituído pelo SSH",
    "ICMP: protocolo da camada de rede, auxiliar do IP, sem portas",
    "Mensagens ICMP: echo request/reply (ping), destination unreachable, time exceeded (traceroute), redirect"
   ],
   "regras": [
    "SSH cifra toda a sessão e autentica servidor (host key) e cliente (senha ou chave pública)",
    "ICMP não transporta dados de aplicação e não possui números de porta",
    "Ping bem-sucedido prova alcance ICMP, não que serviços TCP/UDP estejam ativos",
    "Firewall pode bloquear ICMP e fazer o ping falhar mesmo com rede operante"
   ],
   "comparacoes": [
    "SSH (aplicação, porta 22, cifrado) vs. Telnet (aplicação, porta 23, texto claro)",
    "SSH (aplicação, acesso remoto) vs. ICMP (rede, controle e erro, sem portas)"
   ],
   "fluxos": [
    "Acesso remoto seguro: cliente inicia TCP 22 → handshake SSH → autentica servidor e cliente → sessão cifrada → execução de comandos ou transferência via SFTP/SCP",
    "Diagnóstico com ICMP: enviar echo request → aguardar echo reply → medir RTT; ausência de resposta pode indicar host desligado, firewall ou perda, não apenas falta de rota"
   ],
   "excecoes": [
    "ICMP pode ser bloqueado por firewall, então ping falho não prova ausência de conectividade TCP/UDP",
    "No IPv6, o ICMPv6 integra o Neighbor Discovery (NDP), substituindo o ARP"
   ],
   "palavrasChave": [
    "SSH",
    "ICMP",
    "Telnet",
    "porta 22",
    "porta 23",
    "TCP",
    "camada de rede",
    "ping",
    "traceroute",
    "cifra",
    "host key",
    "firewall",
    "NDP"
   ],
   "checklist": [
    "Saber que SSH usa TCP porta 22 e cifra toda a sessão",
    "Diferenciar SSH (seguro) de Telnet (texto claro, porta 23)",
    "Saber que ICMP é da camada de rede e não tem portas",
    "Associar ICMP a ping (echo request/reply) e traceroute (time exceeded)",
    "Reconhecer que ping bem-sucedido não garante serviços ativos no host"
   ]
  },
  "exemplosDetalhados": [
   {
    "tipo": "introducao",
    "problema": "Por que o SSH substituiu o Telnet como padrão para acesso remoto seguro a servidores?",
    "dados": "Telnet usa TCP porta 23 e envia tudo em texto claro, inclusive a senha; SSH usa TCP porta 22 e cifra toda a sessão.",
    "conceitos": [
     "SSH",
     "Telnet",
     "texto claro",
     "cifra",
     "porta 22"
    ],
    "estrategia": "O Telnet expõe credenciais e comandos à captura na rede, enquanto o SSH cifra a sessão e autentica servidor e cliente, prevenindo interceptação.",
    "execucao": [
     "1. No Telnet, usuário digita senha em texto claro pela porta 23.",
     "2. Um atacante captura o tráfego e lê a senha.",
     "3. No SSH, a sessão é cifrada e o servidor é autenticado por host key.",
     "4. Credenciais e comandos ficam protegidos contra sniffing."
    ],
    "resultado": "O SSH substituiu o Telnet porque cifra a sessão e autentica o servidor, evitando captura de credenciais em texto claro.",
    "justificativa": "O gabarito procede porque a vantagem decisiva do SSH sobre o Telnet é a criptografia da sessão, que impede o sniffing de senhas e dados.",
    "errosFrequentes": [
     "Achar que o Telnet cifra a senha (não cifra nada).",
     "Achar que SSH e Telnet usam a mesma porta (22 vs. 23)."
    ],
    "variacao": "Administrador acessa servidor por Telnet em rede corporativa: risque exposição da senha e use SSH na porta 22."
   },
   {
    "tipo": "aplicacao",
    "problema": "Um administrador precisa acessar um servidor remoto de forma segura e transferir arquivos. Qual solução usar?",
    "dados": "Servidor remoto acessível pela rede; necessidade de execução de comandos e transferência de arquivos; segurança exigida.",
    "conceitos": [
     "SSH",
     "porta 22",
     "SFTP",
     "SCP",
     "chave pública"
    ],
    "estrategia": "Usar SSH para acesso remoto na porta 22 e SFTP/SCP para transferência de arquivos, tudo cifrado, com autenticação por chave pública recomendada.",
    "execucao": [
     "1. Conectar via SSH na porta 22, autenticando com chave pública.",
     "2. Executar comandos remotos pela sessão SSH cifrada.",
     "3. Transferir arquivos usando SFTP ou SCP sobre o mesmo canal SSH.",
     "4. Verificar a chave de host do servidor na primeira conexão para prevenir MITM."
    ],
    "resultado": "SSH para acesso remoto (porta 22) e SFTP/SCP para transferência — tudo cifrado, autenticação por chave pública recomendada.",
    "justificativa": "O gabarito procede porque SSH/SFTP/SCP cifram toda a comunicação, protegendo credenciais e dados contra interceptação na rede.",
    "errosFrequentes": [
     "Usar FTP ou Telnet em vez de SSH/SFTP, expondo credenciais em texto claro.",
     "Aceitar qualquer chave de host sem verificar, sujeitando-se a ataque MITM."
    ],
    "variacao": "Cliente com porta 22 bloqueada pelo firewall local: use túnel SSH ou VPN para alcançar o servidor remoto com segurança."
   },
   {
    "tipo": "erro",
    "problema": "Uma questão de concurso C/E afirma que ICMP é um protocolo de transporte como TCP e UDP.",
    "dados": "Questão C/E iguala ICMP a TCP/UDP; ICMP é da camada de rede, sem portas; TCP e UDP são transporte com portas.",
    "conceitos": [
     "ICMP",
     "TCP",
     "UDP",
     "camada de rede",
     "camada de transporte",
     "portas"
    ],
    "estrategia": "Rejeitar a igualdade: ICMP é protocolo de controle da camada de rede, sem portas e sem dados de aplicação; TCP/UDP são transporte, com portas.",
    "execucao": [
     "1. ICMP opera na camada de rede, ao lado do IP.",
     "2. ICMP não possui números de porta nem entrega dados de aplicação.",
     "3. TCP e UDP são transporte, usam portas e entregam dados a processos.",
     "4. Concluir que a afirmação é falsa."
    ],
    "resultado": "A afirmação é falsa: ICMP pertence à camada de rede, não ao transporte; não tem portas nem dados de aplicação.",
    "justificativa": "O gabarito procede porque ICMP e TCP/UDP pertencem a camadas diferentes e têm funções distintas; igualá-los é erro conceitual cobrado em prova.",
    "errosFrequentes": [
     "Achar que ICMP usa portas como TCP/UDP (não tem portas).",
     "Achar que o ping depende de TCP ou UDP (usa ICMP)."
    ],
    "variacao": "Enunciado diz que o traceroute usa TCP para mapear a rota: avaliar (no Linux o traceroute padrão usa UDP; no Windows o tracert usa ICMP)."
   }
  ]
 }
};
