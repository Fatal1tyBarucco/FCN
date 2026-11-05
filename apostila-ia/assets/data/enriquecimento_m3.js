const enriquecimentoM3 = {
  "m3-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O SMTP envia e transporta mensagens de correio, base da comunicação institucional. Associar cada porta ao seu uso, separar submissão de relay e interpretar comandos textuais permite diagnosticar falhas de envio e ver por que a proteção do conteúdo depende de TLS.",
      "preRequisitos": [
        "Noção de cliente e servidor na camada de aplicação",
        "TCP, portas e noção de sessão cifrada com TLS"
      ],
      "objetivosObservaveis": [
        "Descrever o fluxo de envio, do cliente ao servidor do destinatário",
        "Associar as portas 25, 587 e 465 ao uso específico de cada uma",
        "Diferenciar submissão autenticada do cliente de relay entre servidores",
        "Explicar a diferença entre STARTTLS e TLS implícito"
      ],
      "competencias": [
        "Leitura do fluxo de comandos de um protocolo de aplicação",
        "Configuração de cliente de e-mail com porta e modo TLS",
        "Diagnóstico de falha de envio por sintoma e mensagem"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s2 (POP3 vs IMAP) — protocolos de recebimento que completam o fluxo de mensagem",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — base do STARTTLS e do SMTPS",
        "m3-u1-t2-s1 (Spam, phishing e spoofing) — riscos do envio sem autenticação e sem cifra"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Portas e a distinção entre enviar e receber são cobradas em itens de certo/errado e de múltipla escolha sobre correio eletrônico. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails, na camada de aplicação. Portas: 25 (relay entre servidores), 587 (submissão com STARTTLS) e 465 (SMTPS com TLS implícito). Comandos textuais: HELO/EHLO, MAIL FROM, RCPT TO, DATA e QUIT. A leitura da caixa é do POP3 ou IMAP; sem TLS, o tráfego fica exposto.",
      "intermediario": "A sessão começa com EHLO, que anuncia as extensões suportadas; seguem MAIL FROM com o remetente, RCPT TO com cada destinatário, DATA com o corpo e QUIT para encerrar. A 25 serve ao relay entre servidores; a 587 atende à submissão do cliente, com autenticação e STARTTLS; a 465 inicia a conexão já cifrada.",
      "avancado": "A porta 25 existe para conversa entre servidores e, por isso, costuma ser bloqueada para clientes externos: aberta, permite que máquinas arbitrárias usem o servidor como retransmissor de spam. A submissão do usuário ocorre na 587, autenticada e com STARTTLS, ou na 465, com TLS implícito — separação que é critério de configuração correta.",
      "especialista": "Quando uma mensagem legítima é marcada como spam, a investigação vai além do SMTP: autenticação do domínio remetente, cifra da conexão e reputação do endereço de envio são verificadas em conjunto. O protocolo apenas transporta; as políticas do destinatário é que decidem a entrega."
    },
    "comparacoes": [
      {
        "tema": "SMTP versus POP3 e IMAP",
        "a": {
          "rotulo": "SMTP",
          "texto": "Protocolo de envio e transporte: leva a mensagem do cliente do remetente até o servidor de destino, onde fica armazenada na caixa postal. Usa os comandos HELO/EHLO, MAIL FROM, RCPT TO, DATA e QUIT."
        },
        "b": {
          "rotulo": "POP3 e IMAP",
          "texto": "Protocolos de recebimento e leitura: o cliente acessa a caixa já entregue no servidor. O POP3 baixa as mensagens e o IMAP as sincroniza, mantendo a cópia central no servidor."
        },
        "diferencaGabarito": "O SMTP não entrega mensagem ao usuário final; ele apenas transporta até o servidor de destino. Afirmar que SMTP serve para receber e-mails inverte o fluxo e é erro de gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O SMTP é usado para receber e-mails.",
        "porqueErrada": "Confunde envio com recebimento: o SMTP transporta a mensagem apenas até o servidor de destino. A leitura da caixa postal é feita por POP3 ou IMAP, protocolos distintos.",
        "versaoCorreta": "O SMTP envia e transporta mensagens entre o cliente e os servidores de correio; POP3 e IMAP recebem e permitem a leitura das mensagens já entregues."
      },
      {
        "afirmacaoEquivocada": "O SMTP sempre criptografa as mensagens.",
        "porqueErrada": "O protocolo transmite em texto claro por padrão. A proteção do conteúdo e das credenciais depende de TLS configurado, via STARTTLS na 587 ou TLS implícito na 465.",
        "versaoCorreta": "Sem STARTTLS ou SMTPS, a sessão SMTP trafega em texto claro; a cifra é opcional e resultado de configuração explícita, não propriedade nativa do protocolo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "SMTP: envio e transporte de mensagens",
        "Comandos HELO/EHLO, MAIL FROM, RCPT TO, DATA e QUIT",
        "Submissão do cliente versus relay entre servidores",
        "STARTTLS: eleva conexão em texto claro para TLS"
      ],
      "regras": [
        "Porta 25: relay entre servidores",
        "Porta 587: submissão do cliente, autenticada, com STARTTLS",
        "Porta 465: SMTPS, com TLS implícito",
        "Sem TLS negociado, a mensagem trafega em texto claro"
      ],
      "comparacoes": [
        "SMTP x POP3/IMAP: um transporta, os outros recebem e leem",
        "STARTTLS x SMTPS: um cifra após negociar, o outro inicia cifrado"
      ],
      "fluxos": [
        "Cliente envia EHLO, MAIL FROM, RCPT TO, DATA e QUIT; o servidor do remetente encaminha ao do destinatário, que armazena a mensagem na caixa"
      ],
      "excecoes": [
        "O protocolo não cifra por padrão: a proteção depende de TLS negociado na sessão"
      ],
      "palavrasChave": [
        "envio",
        "transporte",
        "relay",
        "submissão",
        "comandos textuais",
        "STARTTLS"
      ],
      "checklist": [
        "Descrevo o fluxo de envio em etapas?",
        "Associo cada porta ao uso correto?",
        "Diferencio submissão de relay?",
        "Explico STARTTLS e TLS implícito?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Descreva o fluxo de envio de uma mensagem por SMTP, do cliente do remetente ao servidor do destinatário, indicando os comandos de cada etapa.",
        "dados": "Remetente ana@escola.br; destinatário bruno@orgao.br; cliente autenticado na porta 587; servidor anuncia STARTTLS e autenticação.",
        "conceitos": [
          "Comandos textuais da sessão SMTP",
          "Papel do servidor do remetente no encaminhamento"
        ],
        "estrategia": "Ordenar a sessão do cliente e depois o encaminhamento entre servidores: abertura e negociação de segurança, remetente, destinatários, corpo e encerramento.",
        "execucao": [
          "Abrir a conexão com o servidor SMTP e enviar EHLO, anunciando as extensões do cliente",
          "Autenticar e elevar a conexão para TLS com STARTTLS, quando disponível na porta 587",
          "Informar o remetente com MAIL FROM e cada destinatário com RCPT TO",
          "Enviar o corpo com DATA, finalizado por ponto isolado, e encerrar com QUIT"
        ],
        "resultado": "O cliente autentica no servidor do remetente, envia MAIL FROM, RCPT TO e DATA; o servidor do remetente encaminha a mensagem ao servidor do destinatário, que a armazena na caixa postal até a leitura por POP3 ou IMAP.",
        "justificativa": "O SMTP é protocolo de transporte: a sessão do cliente apenas coloca a mensagem no servidor de saída, e o encaminhamento seguinte é outro diálogo SMTP, agora entre servidores, usualmente na porta 25.",
        "errosFrequentes": [
          "Incluir POP3 ou IMAP no fluxo de envio, quando esses protocolos só atuam no recebimento",
          "Supor que o cliente entrega direto na máquina do destinatário, ignorando o encaminhamento entre servidores"
        ],
        "variacao": "O servidor de destino está inacessível: o servidor do remetente enfileira a mensagem e repete as tentativas, e o sintoma passa a ser atraso na entrega, não falha de envio."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma organização precisa configurar o cliente de e-mail dos funcionários para envio seguro. Qual porta escolher, como negociar a cifra e o que fazer com a porta 25?",
        "dados": "Servidor smtp.orgao.br nas portas 25, 587 e 465; requisito de autenticação e sessão cifrada; firewall com a porta 25 aberta para a Internet.",
        "conceitos": [
          "Portas de submissão e de relay",
          "STARTTLS como proteção da sessão"
        ],
        "estrategia": "Escolher a porta destinada à submissão do cliente, autenticar e negociar TLS, e restringir a porta de relay para impedir uso indevido do servidor institucional.",
        "execucao": [
          "Configurar o cliente na porta 587 com autenticação de usuário no servidor smtp.orgao.br",
          "Habilitar STARTTLS para elevar a sessão a TLS e proteger credenciais e conteúdo",
          "Restringir a porta 25 no firewall aos servidores de correio parceiros",
          "Testar o envio e confirmar nos registros que a sessão foi negociada com cifra"
        ],
        "resultado": "Usa-se a porta 587 com STARTTLS e autenticação; a alternativa é a 465 com TLS implícito. A porta 25 deve ser bloqueada para clientes externos e mantida apenas para relay entre servidores.",
        "justificativa": "A porta 587 é justamente a de submissão autenticada, e o STARTTLS cifra uma conexão que começaria em texto claro. A 25 cumpre outra função, o relay entre servidores, e sua abertura ampla transforma o servidor em retransmissor aberto de spam.",
        "errosFrequentes": [
          "Configurar o cliente na porta 25 por ser a padrão do protocolo, expondo credenciais",
          "Acreditar que a cifra é automática, sem habilitar STARTTLS ou escolher a porta com TLS implícito"
        ],
        "variacao": "O servidor exige TLS desde o primeiro byte e não anuncia STARTTLS: a configuração correta passa a ser a porta 465 com TLS implícito."
      },
      {
        "tipo": "erro",
        "problema": "O cliente retorna \"550 5.7.1 Relay access denied\" e o técnico conclui que o servidor SMTP da organização está fora do ar ou foi bloqueado. O que há de errado nessa leitura?",
        "dados": "Resposta do servidor: \"550 5.7.1 Relay access denied\". Conexão TCP com smtp.orgao.br na 587 estabelecida; cliente sem autenticação; envio interno funciona.",
        "conceitos": [
          "Autenticação de submissão como requisito de relay",
          "Resposta 550 como recusa do servidor, não como indisponibilidade"
        ],
        "estrategia": "Ler o código como resposta ativa do servidor: se houve recusa, há conectividade. A causa é política de relay, e a verificação recai sobre a autenticação do cliente.",
        "execucao": [
          "Confirmar que a conexão TCP foi estabelecida, o que descarta indisponibilidade do servidor",
          "Ler o código e o texto da resposta, identificando recusa de relay por falta de autenticação",
          "Verificar se usuário e senha de submissão estão informados no cliente",
          "Repetir o envio autenticado e confirmar a aceitação da mensagem"
        ],
        "resultado": "A leitura está errada: o servidor está ativo e recusou o relay porque o cliente não se autenticou. Com a autenticação habilitada na submissão, o envio prossegue normalmente.",
        "justificativa": "Um código 550 é resposta do servidor depois que a conexão foi aceita; logo a infraestrutura responde. A recusa ocorre quando o servidor exige autenticação para enviar a domínios que não administra.",
        "errosFrequentes": [
          "Converter recusa do servidor em suspeita de queda de serviço, sem ler o código",
          "Atribuir a falha ao firewall do destinatário, quando a recusa partiu do próprio servidor de saída"
        ],
        "variacao": "A resposta passa a ser \"421 Connection timed out\" na abertura: agora o sintoma é de conectividade com o servidor SMTP, e a verificação recai sobre rota, firewall e disponibilidade."
      }
    ]
  },
  "m3-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "POP3 e IMAP diferem no destino da cópia: um baixa e esvazia a caixa, o outro mantém no servidor e sincroniza. Escolher o errado faz o usuário perder mensagens entre dispositivos; a prova cobra essa oposição, com as respectivas portas.",
      "preRequisitos": [
        "Noção de cliente e servidor na camada de aplicação",
        "Funcionamento básico de caixa postal e de cliente de e-mail"
      ],
      "objetivosObservaveis": [
        "Descrever o comportamento do POP3 quanto à cópia no servidor",
        "Descrever o comportamento do IMAP na sincronização entre dispositivos",
        "Indicar as portas usuais de cada protocolo, com e sem cifra",
        "Escolher o protocolo adequado a um cenário de uso"
      ],
      "competencias": [
        "Configuração de cliente de correio em múltiplos dispositivos",
        "Decisão técnica entre acesso offline e sincronização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s1 (SMTP — Simple Mail Transfer Protocol) — protocolo de envio, que não recebe mensagens",
        "m3-u1-t1-s3 (Cabeçalhos, destinatários, anexos, CC e BCC) — conteúdo acessado pelos dois protocolos",
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — reflexo da escolha do protocolo na guarda e no vazamento"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A oposição entre POP3 e IMAP é cobrada em itens de certo/errado, e cenários com vários dispositivos avaliam a escolha do protocolo; as portas de cada protocolo aparecem em identificação de serviço. A classe média é estimativa pedagógica, sem estatística publicada."
      }
    },
    "niveis": {
      "iniciante": "POP3 (Post Office Protocol versão 3): baixa e-mails do servidor para o dispositivo e, por padrão, apaga do servidor; portas 110 (sem cifra) e 995 (SSL/TLS); ideal para acesso offline em um único dispositivo. IMAP (Internet Message Access Protocol): mantém os e-mails no servidor e sincroniza os clientes; portas 143 e 993; ideal para multi-dispositivo.",
      "intermediario": "O POP3 segue o modelo baixar e esvaziar: a cópia autoritativa passa a ser a local. O IMAP segue o modelo de cópia única no servidor, com várias vistas: pastas, marcação de leitura e busca acontecem no servidor. As portas 110 e 995 indicam POP3; 143 e 993, IMAP, sendo as mais altas com TLS.",
      "avancado": "A escolha impacta disponibilidade, cota e backup: com POP3 a mensagem reside no dispositivo e some se o aparelho falhar; com IMAP ela permanece no servidor, sob política de retenção. O IMAP depende de conectividade; o POP3 permite leitura offline. Ambos exigem autenticação.",
      "especialista": "No diagnóstico de mensagem que aparece em um aparelho e não em outro, a causa costuma ser o protocolo configurado: POP3 sem retenção esvaziou a caixa do servidor. A verificação examina a opção de cópia, a cota e a conectividade antes de suspeitar de falha."
    },
    "comparacoes": [
      {
        "tema": "POP3 versus IMAP",
        "a": {
          "rotulo": "POP3",
          "texto": "Acesso offline em um único dispositivo: o cliente baixa e, por padrão, remove as mensagens do servidor; a cópia local passa a ser a única. Portas 110 e 995 (TLS)."
        },
        "b": {
          "rotulo": "IMAP",
          "texto": "Acesso sincronizado em vários dispositivos: as mensagens ficam no servidor e cada cliente apresenta a mesma caixa, com pastas remotas e estado de leitura. Portas 143 e 993 (TLS)."
        },
        "diferencaGabarito": "POP3 baixa e tende a apagar; IMAP mantém e sincroniza. Em cenário de celular e computador, o protocolo correto é o IMAP, e afirmar que o POP3 atende múltiplos dispositivos é erro de gabarito."
      },
      {
        "tema": "Porta sem cifra versus porta segura",
        "a": {
          "rotulo": "110 e 143",
          "texto": "Portas de origem, em que a sessão começa em texto claro; sem STARTTLS, credenciais e conteúdo trafegam expostos."
        },
        "b": {
          "rotulo": "995 e 993",
          "texto": "Portas dedicadas à proteção: 995 para POP3 e 993 para IMAP sobre SSL/TLS, com a conexão cifrada desde o início."
        },
        "diferencaGabarito": "As portas mais altas indicam a variante protegida do mesmo protocolo: 995 é POP3 seguro e 993 é IMAP seguro; trocar os pares configura o protocolo errado e a sessão falha."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O IMAP apaga as mensagens do servidor após o download.",
        "porqueErrada": "Inverte o comportamento dos protocolos: o IMAP mantém a cópia no servidor justamente para sincronizar vários clientes. Quem remove por padrão é o POP3, e ainda assim com opção de manter cópia.",
        "versaoCorreta": "O IMAP preserva as mensagens no servidor e sincroniza o estado entre dispositivos; a remoção após o download é o comportamento típico do POP3."
      },
      {
        "afirmacaoEquivocada": "O POP3 é o protocolo mais indicado para vários dispositivos.",
        "porqueErrada": "Confunde conforto de leitura offline com sincronização. Como o POP3 baixa e tende a esvaziar a caixa, o segundo dispositivo não encontra mais as mensagens no servidor.",
        "versaoCorreta": "Para vários dispositivos, o indicado é o IMAP, que mantém a cópia central no servidor; o POP3 serve a um único dispositivo com acesso offline."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "POP3: download com remoção padrão do servidor",
        "IMAP: cópia única no servidor, várias vistas",
        "Portas 110 e 995 para POP3; 143 e 993 para IMAP"
      ],
      "regras": [
        "Porta 110: POP3 em texto claro; porta 995: POP3 com TLS",
        "Porta 143: IMAP em texto claro; porta 993: IMAP com TLS",
        "Múltiplos dispositivos exigem IMAP; dispositivo único comporta POP3"
      ],
      "comparacoes": [
        "POP3 x IMAP: um baixa e esvazia, o outro mantém e sincroniza",
        "110/143 x 995/993: os primeiros sem cifra, os segundos protegidos por TLS"
      ],
      "fluxos": [
        "Mensagem entregue pelo SMTP ao servidor; o cliente acessa a caixa por POP3, baixando, ou por IMAP, sincronizando pastas e estado de leitura"
      ],
      "excecoes": [
        "O POP3 pode ser configurado para manter cópia no servidor, mas o padrão é remover após o download"
      ],
      "palavrasChave": [
        "baixar",
        "sincronizar",
        "servidor",
        "multi-dispositivo",
        "offline"
      ],
      "checklist": [
        "Explico o comportamento de cada protocolo?",
        "Informo as portas corretas de cada um?",
        "Escolho o protocolo conforme o cenário de uso?",
        "Evito confundir recebimento com envio por SMTP?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um usuário lê as mensagens no celular, mas ao abrir o cliente do notebook encontra a caixa vazia. Qual protocolo evita isso e por quê?",
        "dados": "Dispositivos: celular e notebook. Protocolo configurado: POP3 na porta 110, sem retenção de cópia no servidor; cota de 5 GB por conta.",
        "conceitos": [
          "Comportamento do POP3 quanto à cópia no servidor",
          "Sincronização de estado pelo IMAP"
        ],
        "estrategia": "Comparar o efeito de cada protocolo sobre a caixa do servidor: o POP3 esvazia após baixar; o IMAP mantém a cópia central e apresenta o mesmo estado em todos os clientes.",
        "execucao": [
          "Identificar o protocolo configurado no cliente onde as mensagens desapareceram",
          "Verificar a opção de retenção de cópia no servidor",
          "Reconfigurar o cliente para IMAP com as portas 143 ou 993",
          "Confirmar que mensagens, pastas e estado de leitura aparecem nos dois dispositivos"
        ],
        "resultado": "O IMAP evita o problema, porque mantém as mensagens no servidor e sincroniza os clientes. Com POP3 sem retenção, o primeiro download esvazia a caixa e o notebook nada encontra.",
        "justificativa": "O sintoma decorre de onde reside a cópia autoritativa: no POP3 ela migra para o dispositivo que baixou; no IMAP permanece no servidor. A escolha do protocolo define a visibilidade das mensagens nos demais aparelhos.",
        "errosFrequentes": [
          "Culpar o servidor pelo sumiço, quando o cliente POP3 removeu por configuração",
          "Manter o POP3 sem retenção de cópia em ambiente com vários dispositivos"
        ],
        "variacao": "A conta passa a usar IMAP e as mensagens voltam, mas a cota enche rápido: a decisão seguinte é política de arquivamento, não o protocolo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma equipe de campo usa notebook em conexão instável e um celular para consultas. Defina o protocolo, as portas e a proteção da sessão para cada necessidade.",
        "dados": "Notebook dedicado em conexão instável e celular de consulta; servidor com suporte a POP3 e IMAP; exigência de sessão protegida por TLS.",
        "conceitos": [
          "Portas 995 e 993 como variantes seguras",
          "Adequação do protocolo ao padrão de uso"
        ],
        "estrategia": "Avaliar o padrão de acesso de cada perfil: o notebook com conexão instável beneficia-se do download local; o celular precisa da cópia central e da sincronização.",
        "execucao": [
          "Configurar o notebook em POP3 com TLS na porta 995, habilitando a retenção de cópia no servidor",
          "Sincronizar a caixa uma vez com conexão disponível, permitindo leitura offline",
          "Configurar o celular em IMAP com TLS na porta 993, para consultar sempre o estado atual",
          "Registrar a decisão e o risco de cada escolha"
        ],
        "resultado": "Notebook em POP3 pela porta 995 com retenção de cópia; celular em IMAP pela porta 993. As portas altas garantem sessão protegida por TLS em ambos os casos.",
        "justificativa": "O POP3 atende ao notebook porque a leitura ocorre após baixar, sem depender da rede; o IMAP atende ao celular porque cada consulta reflete o servidor. As portas 995 e 993 são as variantes cifradas e não se trocam.",
        "errosFrequentes": [
          "Usar POP3 sem reter cópia no servidor, esvaziando a caixa do celular",
          "Configurar o celular na porta 995 do POP3, confundindo a porta segura do IMAP"
        ],
        "variacao": "O notebook passa a ser compartilhado por dois analistas: o POP3 deixa de atender, e a migração para IMAP com pastas por analista é a alternativa correta."
      },
      {
        "tipo": "erro",
        "problema": "O servidor informa caixa vazia e o usuário acusa falha do serviço de correio; o suporte descobre que o notebook baixou tudo ontem. Onde está o erro de interpretação?",
        "dados": "Notebook: POP3 na 110 com remoção após baixar ativada. Celular: IMAP na 143. Caixa vazia após a sincronização do notebook; registros com comandos DELE na sessão POP3.",
        "conceitos": [
          "Comandos de remoção do POP3",
          "Diferença entre ação do cliente e falha do serviço"
        ],
        "estrategia": "Ler os registros do servidor para localizar quem removeu as mensagens: se os comandos vieram de sessão POP3 do notebook, a causa é configuração do cliente, não falha do serviço.",
        "execucao": [
          "Verificar no servidor o estado da caixa e a data da última remoção em massa",
          "Correlacionar os registros com a sessão POP3 do notebook",
          "Confirmar no cliente a opção de remoção após o download",
          "Orientar o usuário a reconfigurar com IMAP ou a reter cópia no POP3"
        ],
        "resultado": "A interpretação está errada: as mensagens foram removidas pelo próprio cliente POP3 do notebook, por configuração padrão; o servidor funcionou e a causa é o protocolo com retenção desativada.",
        "justificativa": "Os registros mostram comandos de remoção da sessão do usuário, o que afasta falha do serviço: o POP3 remove por padrão depois de baixar, e o esvaziamento decorre do comportamento esperado.",
        "errosFrequentes": [
          "Atribuir ao servidor a ausência de mensagens sem consultar os registros de sessão",
          "Restaurar backup antes de identificar a configuração que causou a remoção"
        ],
        "variacao": "Os registros não mostram sessão POP3 alguma e a caixa está vazia por ação administrativa: a hipótese de intervenção no serviço passa a ser a correta, e a investigação recai sobre o servidor."
      }
    ]
  },
  "m3-u1-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os campos do cabeçalho definem quem vê a mensagem e para onde vai a resposta, e um erro neles expõe endereços de terceiros sem intenção. O Bcc é o campo correto para listas; o Cc, ao contrário, mostra todos os destinatários entre si. Em prova, a cobrança recai sobre a função de cada campo e sobre o efeito do 'Responder a todos' em mensagem recebida por cópia oculta.",
      "preRequisitos": [
        "Noção de mensagem de correio e de endereço de e-mail",
        "Formato MIME e ideia de anexo como parte da mensagem",
        "Diferença entre remetente exibido e endereço de resposta"
      ],
      "objetivosObservaveis": [
        "Identificar a função de From, To, Cc, Bcc, Reply-To e Message-ID",
        "Explicar a diferença entre Cc e Bcc quanto à visibilidade dos endereços",
        "Indicar o campo adequado ao envio para listas de destinatários",
        "Reconhecer que anexos são transportados com codificação MIME"
      ],
      "competencias": [
        "Redação de mensagens com uso correto dos campos de destinatário",
        "Proteção de dados pessoais em listas de distribuição"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "m3-u1-t1-s1 (SMTP — Simple Mail Transfer Protocol) — protocolo que transporta a mensagem e seus cabeçalhos",
        "m3-u1-t2-s1 (Spam, phishing e spoofing) — leitura dos cabeçalhos na triagem de fraude",
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — risco de privacidade no uso dos campos",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — proteção de dados pessoais dos destinatários"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens sobre a função do Bcc e sobre exposição de endereços em listas são parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Cabeçalhos de e-mail: From (remetente), To (destinatário principal), Cc (Carbon Copy — destinatários secundários que veem os demais destinatários), Bcc (Blind Carbon Copy — destinatários ocultos; os demais não veem). Assunto (Subject) é o título do e-mail. Anexos são arquivos codificados em base64 e incluídos no corpo MIME. O cabeçalho 'Reply-To' define o endereço de resposta (pode ser diferente do remetente). O cabeçalho 'Message-ID' é um identificador único do e-mail.",
      "intermediario": "O que distingue Cc de Bcc é a visibilidade: em Cc todos os destinatários, inclusive os secundários, aparecem na mensagem; em Bcc os endereços ficam ocultos uns dos outros e também de quem está em To e Cc. Por isso o Bcc é o campo usado em comunicados a listas, enquanto o Cc serve à cópia formal, em que a ciência de todos é desejada e não há dados a resguardar.",
      "avancado": "O Reply-To desvia a resposta do From, o que é legítimo em caixas de atendimento, mas exige leitura atenta antes de responder. O 'Responder a todos' alcança os destinatários visíveis em To e Cc, de modo que uma resposta dada em mensagem recebida por Bcc pode alcançar toda a lista visível; anexos, por sua vez, trafegam codificados pelo MIME e são decodificados apenas pelo cliente.",
      "especialista": "Diante de um incidente de exposição de lista, a reconstrução começa pelos campos da mensagem original: se os endereços estavam em To ou Cc, a visibilidade era inevitável e a falha está no processo de envio; se estavam em Bcc, a reexposição veio do 'Responder a todos'. A correção proposta é padrão de envio com Bcc e orientação de resposta, e não troca de ferramenta."
    },
    "comparacoes": [
      {
        "tema": "Cc versus Bcc",
        "a": {
          "rotulo": "Cc (cópia carbono)",
          "texto": "Destinatários secundários que recebem a mensagem e veem todos os demais endereços, inclusive os de outras pessoas em Cc. Indicado quando a ciência de todos é intencional e não há dados pessoais a resguardar."
        },
        "b": {
          "rotulo": "Bcc (cópia oculta)",
          "texto": "Destinatários que recebem a mensagem sem que seus endereços apareçam para os outros, nem para quem está em To e Cc. É o campo usado em comunicados a listas, justamente para não expor endereços."
        },
        "diferencaGabarito": "Cc é visível e Bcc é oculto: em lista de destinatários, usar Cc expõe todos os endereços e é erro de privacidade. Afirmar que os dois campos têm a mesma função inverte o gabarito."
      },
      {
        "tema": "From versus Reply-To",
        "a": {
          "rotulo": "From",
          "texto": "Endereço do remetente exibido na mensagem. Identifica quem enviou, mas não determina para onde a resposta do destinatário será encaminhada."
        },
        "b": {
          "rotulo": "Reply-To",
          "texto": "Endereço que o cliente usa quando o destinatário responde. Pode divergir legitimamente do From, como ocorre em caixas de atendimento."
        },
        "diferencaGabarito": "A resposta segue o Reply-To quando ele existe, e não o From. Afirmar que a resposta sempre volta ao remetente exibido desconsidera o cabeçalho e leva ao erro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Cc e Bcc têm a mesma funcionalidade.",
        "porqueErrada": "Confunde cópia visível com cópia oculta: em Cc todos os destinatários se veem; em Bcc nenhum endereço é revelado aos demais.",
        "versaoCorreta": "Cc exibe os destinatários secundários para todos; Bcc os mantém ocultos, e é o campo correto para enviar a listas sem expor endereços."
      },
      {
        "afirmacaoEquivocada": "A resposta a uma mensagem sempre vai para o endereço do remetente.",
        "porqueErrada": "Ignora o cabeçalho Reply-To, que quando presente passa a ser o destino das respostas, mesmo divergindo do From.",
        "versaoCorreta": "Se a mensagem trouxer Reply-To, a resposta é dirigida a esse endereço; na ausência dele, volta ao From."
      },
      {
        "afirmacaoEquivocada": "Anexos são transportados em texto puro dentro da mensagem.",
        "porqueErrada": "Desconsidera o padrão MIME: o arquivo é codificado para o transporte, historicamente em base64, e somente o cliente o reconstitui na entrega.",
        "versaoCorreta": "O anexo viaja como parte MIME da mensagem, codificado, e é decodificado pelo cliente de e-mail do destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "From: remetente exibido na mensagem",
        "To: destinatários principais; Cc: cópias visíveis a todos",
        "Bcc: cópias ocultas, invisíveis aos demais destinatários",
        "Reply-To: endereço de destino das respostas",
        "MIME: estrutura que transporta anexos codificados"
      ],
      "regras": [
        "Listas de destinatários devem usar Bcc para não expor endereços",
        "Anexos são codificados pelo MIME, historicamente em base64",
        "A resposta segue o Reply-To quando presente, e o From na ausência dele"
      ],
      "comparacoes": [
        "Cc exibe os endereços de todos; Bcc os oculta de todos"
      ],
      "fluxos": [
        "Remetente redige com From, To e Bcc; o cliente codifica o anexo em MIME; o SMTP transporta a mensagem; o destinatário decodifica e responde conforme o Reply-To"
      ],
      "excecoes": [
        "O Reply-To pode divergir legitimamente do From, como em caixas de atendimento"
      ],
      "palavrasChave": [
        "cabeçalho",
        "cópia oculta",
        "destinatário",
        "anexo",
        "MIME",
        "Reply-To"
      ],
      "checklist": [
        "Identifico a função de cada campo do cabeçalho?",
        "Sei quando usar Bcc em lugar de Cc?",
        "Verifico o Reply-To antes de responder?",
        "Reconheço que anexos são codificados pelo MIME?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma mensagem é enviada com From: ana@escola.br, To: bruno@orgao.br, Cc: clara@escola.br e Bcc: dani@escola.br. Quem consegue ver o endereço de dani?",
        "dados": "Cabeçalhos informados: From ana@escola.br; To bruno@orgao.br; Cc clara@escola.br; Bcc dani@escola.br. Cada destinatário recebe uma cópia da mensagem.",
        "conceitos": [
          "Bcc oculta endereços dos demais destinatários",
          "Cc é visível a todos que recebem a mensagem"
        ],
        "estrategia": "Separar os campos visíveis dos ocultos e analisar a mensagem do ponto de vista de cada destinatário, e não do remetente.",
        "execucao": [
          "Listar os campos visíveis: From, To e Cc aparecem para todos que recebem a mensagem",
          "Reconhecer que o Bcc não é exibido, de modo que dani@escola.br não aparece para ninguém",
          "Verificar o que cada destinatário vê: bruno e clara enxergam ana, um ao outro, e clara em Cc",
          "Concluir que dani recebe a mensagem sem revelar o endereço e sem ver os demais em Bcc"
        ],
        "resultado": "Ninguém vê o endereço de dani: o Bcc fica oculto para todos, inclusive para os destinatários em To e Cc. Apenas ana sabe que a cópia foi enviada.",
        "justificativa": "O Bcc retira o endereço da parte visível da mensagem, e é justamente essa propriedade que o torna o campo adequado a listas. Como o campo não é exibido, cada destinatário recebe a mensagem como se os endereços ocultos não existissem, o que preserva a privacidade de dani sem impedir a entrega.",
        "errosFrequentes": [
          "Supor que o Bcc é visto pelos demais destinatários, comportamento que é do Cc",
          "Achar que o remetente deixa de saber quem recebeu, quando a cópia oculta é conhecida por quem envia"
        ],
        "variacao": "A mensagem passa a trazer To: lista@escola.br com cem destinatários em Bcc: a mesma regra se aplica em escala, e a lista inteira recebe sem expor endereço algum."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma empresa envia um comunicado com extrato em anexo para 500 clientes, sem expor os endereços uns aos outros. Que campo usar e como o anexo trafega?",
        "dados": "Remetente: atendimento@banco.br. Anexo: extrato.pdf de 1,2 MB. Destinatários: 500 clientes, cada um com endereço distinto. Requisito: nenhum endereço visível aos demais.",
        "conceitos": [
          "Bcc como campo oculto para listas de destinatários",
          "Anexos transportados como parte MIME com codificação"
        ],
        "estrategia": "Colocar todos os clientes em Bcc para que cada um receba isoladamente, e tratar o extrato como parte MIME codificada, que o cliente decodifica ao exibir a mensagem.",
        "execucao": [
          "Redigir a mensagem com To no próprio endereço de atendimento e os 500 clientes em Bcc",
          "Anexar o extrato.pdf, que passa a integrar a mensagem como parte MIME codificada",
          "Enviar pelo SMTP, que transporta cabeçalhos, corpo e anexo sem alterar a ocultação do Bcc",
          "Confirmar em um cliente de teste que cada destinatário vê apenas o próprio endereço"
        ],
        "resultado": "Bcc com os 500 clientes, e o extrato.pdf trafega como parte MIME codificada, sendo decodificado pelo cliente de cada destinatário.",
        "justificativa": "O Bcc é o único campo que entrega a mensagem a muitos destinatários sem revelar endereço algum, o que atende ao requisito de privacidade. O anexo não é enviado em texto puro: o MIME o codifica para o transporte e o cliente o reconstrói, de modo que a empresa não precisa de nenhum mecanismo extra para isso.",
        "errosFrequentes": [
          "Usar To ou Cc com os 500 endereços, expondo dados pessoais de todos os clientes",
          "Achar que o anexo exige protocolo próprio, quando ele integra a própria mensagem pelo MIME"
        ],
        "variacao": "O comunicado passa a exigir resposta dos clientes: a orientação é responder somente ao remetente, e não usar 'Responder a todos', que alcançaria os destinatários visíveis em To e Cc."
      },
      {
        "tipo": "erro",
        "problema": "Um funcionário recebe um comunicado da diretoria enviado com Bcc e aciona 'Responder a todos' para comentar com o remetente. A resposta é entregue também aos gestores em To e Cc, e ele alega que o Bcc deveria ter protegido a conversa. O que há de errado nessa leitura?",
        "dados": "Cabeçalhos originais: From diretoria@orgao.br; To 12 gestores; Cc 4 coordenadores; Bcc 210 funcionários; Reply-To ausente. Ação do funcionário: 'Responder a todos'. Resultado observado: 16 destinatários visíveis receberam a resposta.",
        "conceitos": [
          "Bcc oculta endereços, mas não altera o alcance do 'Responder a todos'",
          "Destinatários visíveis em To e Cc são alcançados pela resposta"
        ],
        "estrategia": "Distinguir o que o Bcc oculta no envio do que o 'Responder a todos' alcança na resposta: os dois efeitos são independentes e precisam ser analisados em separado.",
        "execucao": [
          "Listar os destinatários visíveis da mensagem original em To e Cc",
          "Verificar que o Bcc ocultou os 210 endereços uns dos outros, sem participar da visibilidade",
          "Confrontar o alcance do 'Responder a todos', que devolve a resposta a todos os visíveis",
          "Concluir que a exposição veio do comando usado, e não do campo oculto"
        ],
        "resultado": "A leitura está errada: o Bcc protegeu os endereços no envio original, mas o 'Responder a todos' alcança quem está em To e Cc. A conversa teria ficado restrita com o 'Responder' simples.",
        "justificativa": "O Bcc retira endereços da lista visível, mas não transforma a mensagem em correspondência privada. O 'Responder a todos' opera sobre os destinatários que a mensagem declara de forma visível, de modo que a proteção do campo oculto não se estende à resposta, e foi exatamente isso que o funcionário deixou de considerar.",
        "errosFrequentes": [
          "Tratar o Bcc como garantia de privacidade de toda a conversa, incluindo as respostas",
          "Confundir 'Responder' com 'Responder a todos' em mensagem que tem muitos destinatários visíveis"
        ],
        "variacao": "A mensagem trouxer Reply-To: suporte@orgao.br e o funcionário acionar 'Responder': a resposta deixa de ir ao From e passa a ser entregue ao endereço declarado nesse cabeçalho."
      }
    ]
  },
  "m3-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Spam, phishing e falsificação de remetente são fenômenos distintos que chegam à mesma caixa de entrada, e confundi-los leva à resposta errada: filtrar o que é fraude ou tratar como fraude o que é apenas propaganda. A falsificação do endereço exibido é combatida por SPF, DKIM e DMARC, que autenticam o domínio sem avaliar a intenção de quem escreve.",
      "preRequisitos": [
        "Conceito de remetente, cabeçalho e domínio de e-mail",
        "Noção de sessão protegida por TLS no transporte da mensagem",
        "Diferença entre mensagem legítima e mensagem forjada"
      ],
      "objetivosObservaveis": [
        "Definir spam, phishing, spear phishing, whaling e falsificação de remetente",
        "Reconhecer sinais de fraude em uma mensagem suspeita",
        "Explicar o que SPF, DKIM e DMARC autenticam no domínio",
        "Indicar a conduta segura diante de uma suspeita"
      ],
      "competencias": [
        "Triagem defensiva de mensagens antes de qualquer ação",
        "Leitura dos mecanismos de autenticação de domínio"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s3 (Cabeçalhos, destinatários, anexos, CC e BCC) — leitura do remetente exibido e dos cabeçalhos na triagem de fraude",
        "m3-u1-t1-s1 (SMTP — Simple Mail Transfer Protocol) — transporte da mensagem e das respostas do servidor remetente",
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — modalidades de fraude aprofundadas no módulo de segurança",
        "m2-u3-t4-s2 (TLS: segurança na camada de transporte) — proteção do transporte, que não confirma a identidade de quem escreve"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre spam, phishing e falsificação de remetente faz parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Spam: e-mails não solicitados, geralmente comerciais ou maliciosos. Phishing: e-mails fraudulentos que se passam por entidades confiáveis (bancos, empresas) para roubar credenciais ou dados. Spear phishing: phishing direcionado a uma pessoa ou organização específica. Spoofing de remetente: falsificação do endereço 'From' para fazer o e-mail parecer legítimo. Técnicas de autenticação: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication, Reporting and Conformance).",
      "intermediario": "Os sinais de fraude são observáveis: urgência injustificada, link que aponta para endereço diferente do exibido, erros de idioma, anexo inesperado e pedido de credencial ou de pagamento a conta não cadastrada. A conduta correta é não clicar, não responder e confirmar o pedido por outro canal antes de agir.",
      "avancado": "SPF lista os servidores autorizados a enviar em nome do domínio; DKIM assina a mensagem e atesta sua integridade; DMARC define a política quando SPF ou DKIM falham e produz relatórios. Os três reduzem a falsificação direta do domínio, mas não cobrem conta comprometida nem domínio visualmente parecido, que seguem sendo vetores de fraude.",
      "especialista": "A avaliação de uma mensagem parte de três camadas independentes: autenticação do domínio, contexto do pedido e confirmação por canal alternativo. Autenticação aprovada afasta apenas a falsificação de remetente; a decisão de agir depende do conteúdo e da corroboração fora do e-mail."
    },
    "comparacoes": [
      {
        "tema": "Phishing versus spam",
        "a": {
          "rotulo": "Spam",
          "texto": "Mensagem não solicitada, em massa, de conteúdo comercial ou malicioso. Não exige identidade falsa: o objetivo é volume, e a resposta esperada é filtro e descadastro."
        },
        "b": {
          "rotulo": "Phishing",
          "texto": "Fraude que se passa por entidade confiável para obter credencial, dado ou pagamento. Exige identidade falsa e direcionamento, e a resposta esperada é bloqueio, comunicação ao suporte e confirmação por outro canal."
        },
        "diferencaGabarito": "O spam se define pelo envio em massa não solicitado; o phishing, pela falsificação de identidade com intenção de enganar. Todo phishing pode chegar como spam, mas nem todo spam é phishing — inverter a relação é erro de gabarito."
      },
      {
        "tema": "Spoofing versus conta comprometida",
        "a": {
          "rotulo": "Spoofing",
          "texto": "O endereço do remetente é forjado e a mensagem parte de servidor alheio ao domínio. SPF, DKIM e DMARC atuam exatamente aqui, acusando o envio não autorizado."
        },
        "b": {
          "rotulo": "Conta comprometida",
          "texto": "O envio parte de credencial válida roubada, com domínio autenticado e assinatura legítima. Nenhum mecanismo de autenticação de domínio distingue o titular do invasor."
        },
        "diferencaGabarito": "No spoofing o remetente é forjado e a autenticação falha; na conta comprometida ela passa, e a fraude se revela apenas pelo conteúdo e pelo contexto. Afirmar que a autenticação elimina o phishing ignora a segunda situação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "SPF, DKIM e DMARC tornam o phishing impossível.",
        "porqueErrada": "Atribui aos mecanismos uma garantia que eles não têm: autenticam o domínio de envio, mas não avaliam o conteúdo nem confirmam quem escreveu a mensagem.",
        "versaoCorreta": "Eles reduzem a falsificação de remetente; domínios visualmente parecidos e contas comprometidas continuam sendo vetores de fraude."
      },
      {
        "afirmacaoEquivocada": "Spam e phishing são sinônimos.",
        "porqueErrada": "Confunde envio em massa com fraude: o spam é propaganda ou lixo eletrônico não solicitado; o phishing imita entidade confiável para capturar dado.",
        "versaoCorreta": "O spam é mensagem não solicitada; o phishing é fraude por falsificação de identidade. Um pode ocorrer sem o outro, e só o segundo tem intenção de enganar."
      },
      {
        "afirmacaoEquivocada": "O nome exibido do remetente comprova a origem da mensagem.",
        "porqueErrada": "O nome exibido é campo livre da mensagem e pode ser falsificado, o que permite que remetente forjado apareça com o nome de um colega ou de um banco.",
        "versaoCorreta": "A verificação recai sobre o domínio real do endereço e sobre o resultado da autenticação, e não sobre o nome que a mensagem exibe."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Spam: mensagem não solicitada, enviada em massa",
        "Phishing: fraude que se passa por entidade confiável",
        "Spear phishing: versão personalizada e direcionada da fraude",
        "Whaling: fraude direcionada a alvo de alta hierarquia",
        "Spoofing: falsificação do endereço exibido como remetente",
        "SPF, DKIM e DMARC: autenticação do domínio de envio"
      ],
      "regras": [
        "SPF lista os servidores autorizados a enviar pelo domínio",
        "DKIM assina a mensagem e atesta sua integridade",
        "DMARC define a política quando SPF ou DKIM falham e gera relatórios"
      ],
      "comparacoes": [
        "Spam é massa não solicitada; phishing é fraude com identidade falsa"
      ],
      "fluxos": [
        "Mensagem recebida → verificar autenticação do domínio → avaliar sinais de fraude no conteúdo → confirmar por outro canal antes de agir"
      ],
      "excecoes": [
        "A autenticação aprovada não afasta a fraude: conta comprometida e domínio visualmente parecido escapam aos mecanismos"
      ],
      "palavrasChave": [
        "fraude",
        "urgência",
        "autenticação",
        "remetente forjado",
        "engenharia social",
        "spam"
      ],
      "checklist": [
        "Distingo spam de phishing?",
        "Reconheço sinais de fraude na mensagem?",
        "Explico o que SPF, DKIM e DMARC autenticam?",
        "Sei que autenticação aprovada não é garantia de legitimidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Diferencie spam de phishing a partir de duas mensagens recebidas pelo mesmo usuário em um mesmo dia.",
        "dados": "Mensagem 1: oferta não solicitada de colchão ortopédico, enviada a milhares de destinatários, com link de descadastro. Mensagem 2: aviso com o logotipo do banco do usuário, pedindo a senha de acesso por formulário externo, dirigido somente a ele.",
        "conceitos": [
          "Spam como envio em massa não solicitado",
          "Phishing como fraude com identidade falsa"
        ],
        "estrategia": "Comparar volume de destinatários, intenção declarada e presença de solicitação de dado sensível; a intenção de enganar é o que separa as duas categorias.",
        "execucao": [
          "Verificar a origem e o volume do envio: distribuição automatizada em massa indica spam",
          "Examinar a intenção: conteúdo comercial sem pedido de credencial é spam, ainda que indesejado",
          "Examinar a segunda mensagem: imitação de entidade confiável com pedido de senha é phishing",
          "Classificar os dois casos e registrar que o tratamento de cada um é diferente"
        ],
        "resultado": "A mensagem 1 é spam: não solicitada e em massa, sem intenção declarada de fraude. A mensagem 2 é phishing: imita o banco para capturar credencial. Ambas são indesejadas, mas só a segunda é fraude.",
        "justificativa": "O spam se define pelo caráter não solicitado e pelo volume; o phishing se define pela falsificação de identidade e pelo objetivo de obter dado ou pagamento. Por isso a resposta difere: filtro e descadastro para o spam, bloqueio e comunicação ao suporte para o phishing.",
        "errosFrequentes": [
          "Tratar todo indesejado como phishing, ignorando que o spam pode ser apenas propaganda",
          "Esperar que o phishing sempre venha em massa, quando campanhas direcionadas atingem poucos alvos"
        ],
        "variacao": "A mensagem fraudulenta chega personalizada com o nome e o cargo do destinatário, após coleta em rede social: passa a ser spear phishing, a versão direcionada do phishing."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como SPF, DKIM e DMARC protegem o domínio de uma organização contra a falsificação de remetente?",
        "dados": "Domínio: orgao.br. SPF publicado: dois servidores de saída autorizados e nenhum outro. DKIM: chave assimétrica de 2048 bits, com assinatura no cabeçalho. DMARC: política de rejeição, com relatórios ao administrador. Mensagem de teste: From rh@orgao.br enviada por servidor externo não listado.",
        "conceitos": [
          "SPF valida os servidores autorizados a enviar pelo domínio",
          "DKIM assina a mensagem e DMARC define a política a aplicar"
        ],
        "estrategia": "Verificar cada camada em sequência: quem pode enviar pelo domínio, se a mensagem está assinada e íntegra, e qual política aplicar quando alguma verificação falha.",
        "execucao": [
          "Consultar o SPF do domínio e confirmar que o servidor de envio da mensagem de teste não está na lista",
          "Conferir a assinatura DKIM e a integridade dos cabeçalhos da mensagem",
          "Aplicar a política do DMARC: sem SPF nem DKIM válidos, a diretriz de rejeição determina o descarte",
          "Registrar o evento no relatório do DMARC para monitoramento do domínio"
        ],
        "resultado": "O SPF acusa envio fora dos servidores autorizados, o DKIM sustenta a integridade das mensagens legítimas e o DMARC aplica a política de rejeição. Juntos, eles reduzem a falsificação do domínio.",
        "justificativa": "Cada mecanismo cobre uma falha distinta: o SPF atesta a origem do envio, o DKIM a integridade e a autoria da assinatura, e o DMARC a decisão sobre o que fazer quando as verificações falham. A fraude por falsificação de endereço depende de ao menos uma delas para passar, e a combinação das três fecha o caminho mais comum.",
        "errosFrequentes": [
          "Atribuir ao DKIM a função de listar servidores autorizados, que é do SPF",
          "Esperar que os mecanismos barram qualquer fraude, sem considerar conta comprometida e domínio visualmente parecido"
        ],
        "variacao": "A mensagem parte de servidor listado no SPF, mas sem assinatura DKIM: a decisão passa a depender do alinhamento do SPF, e o descarte só ocorre se essa verificação também falhar."
      },
      {
        "tipo": "erro",
        "problema": "Um analista recebe mensagem com From: diretor@orgao.br pedindo pagamento urgente a uma conta bancária não cadastrada. O relatório de autenticação mostra SPF, DKIM e DMARC aprovados, e ele conclui que a mensagem é legítima. O que há de errado nessa leitura?",
        "dados": "Cabeçalho From: diretor@orgao.br. Resultado da autenticação do domínio: SPF, DKIM e DMARC aprovados. Conteúdo: promessa de fatura, urgência e conta bancária não cadastrada. Contexto: nenhum pedido de pagamento foi confirmado por telefone ou outro canal.",
        "conceitos": [
          "SPF, DKIM e DMARC autenticam o domínio, não a intenção",
          "Conta comprometida produz autenticação legítima"
        ],
        "estrategia": "Separar dois planos: o que os mecanismos comprovam, isto é, o domínio e os servidores de envio, e o que eles não comprovam, isto é, a identidade de quem escreveu e a legitimidade do pedido.",
        "execucao": [
          "Ler o resultado da autenticação e reconhecer que ele atesta o domínio de envio",
          "Verificar se o pedido foi confirmado por canal alternativo, o que não ocorreu",
          "Cruzar com o padrão da fraude: urgência, conta nova e ausência de corroboração",
          "Classificar a mensagem como suspeita e acionar o suporte de segurança antes de qualquer pagamento"
        ],
        "resultado": "A leitura está errada: autenticação aprovada não afasta a fraude. A mensagem partiu de conta válida do domínio, possivelmente comprometida, e o pedido segue o padrão de fraude por engenharia social.",
        "justificativa": "O SPF atesta os servidores autorizados, o DKIM a integridade e a assinatura da mensagem, e o DMARC a política aplicada; nenhum deles avalia o conteúdo nem confirma que o titular da conta escreveu. Quando a credencial é roubada, os três passam, e somente a análise do contexto e a confirmação fora do e-mail revelam a fraude.",
        "errosFrequentes": [
          "Interpretar autenticação aprovada como atestado de legitimidade do pedido",
          "Descartar a suspeita porque o domínio é o da própria organização, sem considerar comprometimento de conta"
        ],
        "variacao": "A mensagem parte de domínio com grafia imitativa do legítimo: a autenticação do domínio real falha, e o diagnóstico passa a ser o uso de endereço visualmente semelhante, outro caminho que escapa aos mecanismos."
      }
    ]
  },
  "m3-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calendários digitais reúnem compromissos, participantes e lembretes em um repositório sincronizado entre dispositivos. Mal configurada, a agenda expõe dados pessoais, vaza o link da reunião ou concede edição indevida; por isso a banca cobra a função dos convites, a marcação de obrigatório e opcional e os níveis de permissão.",
      "preRequisitos": [
        "Uso básico de conta institucional e de correio eletrônico",
        "Noção de agenda compartilhada e de sincronização entre dispositivos",
        "Conceito de permissão de acesso aplicado a recursos compartilhados"
      ],
      "objetivosObservaveis": [
        "Listar os componentes de um evento: título, data, hora, duração, local, participantes e descrição",
        "Diferenciar participante obrigatório de participante opcional e o efeito disso na lista de presença",
        "Explicar os níveis de permissão de compartilhamento de calendário e o princípio do menor privilégio",
        "Configurar recorrência e lembretes, escolhendo entre editar uma ocorrência ou toda a série"
      ],
      "competencias": [
        "Organizar a agenda e coordenar reuniões sem expor compromissos pessoais",
        "Avaliar riscos de privacidade em convites, anexos e links de reunião",
        "Aplicar o menor privilégio ao compartilhar o calendário com pessoas e grupos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s2 (Comunicação síncrona versus assíncrona) — a agenda serve à reunião síncrona, reservada ao que exige presença",
        "m3-u5-t2-s2 (Exposição em calendários e convites) — detalha o risco de vazar dados pelo convite e pelo link",
        "m3-u4-t1-s3 (Autenticação e controle de acesso) — os níveis de permissão da agenda seguem o mesmo princípio do acesso a outros recursos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca descreve um convite ou um compartilhamento de agenda e pergunta quem pode alterar o evento, o que representa um participante opcional ou qual o risco de um calendário público. Cobra-se interpretar a função das permissões e a edição isolada de ocorrências recorrentes."
      }
    },
    "niveis": {
      "iniciante": "Calendários digitais (Google Calendar, Outlook Calendar) permitem agendar eventos, convidar participantes e definir permissões. Convites de reunião incluem: título, data/hora, local (físico ou virtual), participantes (obrigatórios, opcionais), descrição, anexos. Tipos de permissão: proprietário (controle total), editor (pode modificar), comentar, somente visualização. Recorrência: eventos diários, semanais, mensais. Lembretes: notificações automáticas antes do evento.",
      "intermediario": "No nível intermediário, o candidato distingue a função dos campos do convite e o efeito de editar uma ocorrência: percebe que alterar apenas um dia da série não muda as demais datas e que remarcar o evento existente preserva pauta e respostas, enquanto criar um segundo evento divide a lista de presença. A questão típica apresenta a situação concreta e pergunta pela ação correta na agenda.",
      "avancado": "No nível avançado, o candidato avalia o risco de compartilhar o calendário: percebe que conceder edição permite alterar ou cancelar eventos de terceiros e que tornar a agenda pública expõe títulos, participantes e o link da reunião. Exige aplicar o menor privilégio, preferindo o nível de disponibilidade quando basta mostrar horários ocupados sem revelar o conteúdo do compromisso.",
      "especialista": "No nível especialista, o candidato monta um convite seguro para uma reunião sensível: minimiza dados na descrição, restringe o link ao público necessário, evita anexar documentos com dados pessoais e revisa quem pode editar. A tarefa é decidir o que trafega no convite e o que permanece em área restrita, conciliando coordenação e privacidade."
    },
    "comparacoes": [
      {
        "tema": "Participante obrigatório x participante opcional",
        "a": {
          "rotulo": "Obrigatório",
          "texto": "Convidado cuja presença é esperada e cuja ausência é registrada; entra na expectativa de quórum e responde pela decisão tomada na reunião."
        },
        "b": {
          "rotulo": "Opcional",
          "texto": "Recebe o evento para ciência, sem exigência de comparecer; sua ausência não compromete a reunião nem a deliberação."
        },
        "diferencaGabarito": "O primeiro exige presença e responde pela decisão; o segundo apenas se informa. Trocar a marcação distorce a lista de respostas e a leitura do quórum."
      },
      {
        "tema": "Permissão de editor x somente leitura",
        "a": {
          "rotulo": "Editor",
          "texto": "Pode criar, alterar, mover e cancelar eventos do calendário compartilhado, inclusive os de outra pessoa, o que exige confiança e necessidade real."
        },
        "b": {
          "rotulo": "Somente leitura",
          "texto": "Consulta os eventos sem modificá-los: enxerga a agenda, mas não interfere em compromissos alheios nem cancela reuniões."
        },
        "diferencaGabarito": "Editor altera e cancela; leitura apenas consulta. Conceder edição quando bastava consultar é excesso de privilégio e falha de segurança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Calendários não permitem definir permissões diferentes para cada participante.'",
        "porqueErrada": "O compartilhamento de agenda é granular: cada pessoa recebe um nível próprio, e existe ainda o nível de disponibilidade, que mostra os horários ocupados sem revelar títulos nem participantes.",
        "versaoCorreta": "Errado. Calendários permitem definir permissões: proprietário, editor, comentar, somente visualização."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Editar um evento recorrente sempre altera todas as ocorrências da série.'",
        "porqueErrada": "O recurso de recorrência oferece a escolha explícita entre alterar apenas a ocorrência selecionada ou toda a série, justamente para acomodar mudanças pontuais sem desfazer o padrão.",
        "versaoCorreta": "A edição de uma ocorrência isolada não afeta as demais datas; a série só muda quando a alteração é aplicada a todas as ocorrências."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um calendário público não expõe informação relevante.'",
        "porqueErrada": "Títulos, descrições, participantes e o link da reunião podem conter dados pessoais ou institucionais; a agenda pública é lida por qualquer pessoa e vira vetor de acesso indevido.",
        "versaoCorreta": "O calendário deve ser tratado conforme a sensibilidade do conteúdo, compartilhando-se com pessoas específicas em vez de publicá-lo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Evento de calendário: registro com título, data, hora, duração, local, participantes e descrição, sincronizado entre dispositivos",
        "Convite de reunião: evento que gera resposta de aceitação, recusa ou provisório de cada participante",
        "Recorrência: série de ocorrências que compartilham a mesma definição e podem ser editadas em conjunto ou isoladamente",
        "Nível de permissão: definição do que o outro pode ver ou alterar no calendário compartilhado"
      ],
      "regras": [
        "Aplicar o princípio do menor privilégio: conceder apenas a permissão necessária para a tarefa",
        "Remarcar o evento existente preserva pauta e respostas, enquanto criar um segundo evento duplica o compromisso"
      ],
      "comparacoes": [
        "Obrigatório x opcional: o primeiro exige presença, o segundo apenas informa, e a marcação errada distorce a lista de presença"
      ],
      "fluxos": [
        "Criar o evento com título, data, fuso e duração → incluir pauta, local e link → adicionar participantes obrigatórios e opcionais → enviar o convite e acompanhar as respostas"
      ],
      "excecoes": [
        "Em série recorrente, é possível editar uma única ocorrência sem alterar as demais datas"
      ],
      "palavrasChave": [
        "agenda",
        "convite",
        "permissão",
        "recorrência",
        "privacidade"
      ],
      "checklist": [
        "Listo os campos essenciais de um evento?",
        "Distingo participante obrigatório de opcional?",
        "Explico os níveis de permissão e aplico o menor privilégio?",
        "Sei editar uma ocorrência sem alterar toda a série?",
        "Avalio o risco de tornar o calendário público?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Montar um convite de reunião para participantes de três cidades, com pauta, documento de apoio e horário que não seja ambíguo para nenhum deles.",
        "dados": "Participantes em três fusos distintos, reunião de cinquenta minutos, documento de apoio de duas páginas e duas pessoas que participam apenas como ouvintes.",
        "conceitos": [
          "convite de reunião: evento de calendário com participantes e respostas",
          "participante obrigatório e opcional: exigência de presença e participação informativa",
          "fuso horário do evento: referência usada para calcular o horário local de cada participante"
        ],
        "estrategia": "Preencher o evento com os campos de que o convidado precisa para decidir e comparecer, e fixar o fuso na criação, para que a conversão seja feita pelo calendário.",
        "execucao": [
          "Criar o evento com título objetivo, data, hora de início, duração e fuso horário definido na criação.",
          "Incluir local ou link da reunião e a pauta na descrição, anexando o documento de apoio quando necessário.",
          "Adicionar os participantes obrigatórios e marcar os dois ouvintes como opcionais.",
          "Enviar o convite e conferir, na resposta de cada participante, o horário exibido no fuso local."
        ],
        "resultado": "Convite com pauta, link e documento, participantes obrigatórios e opcionais distinguidos e horário correto nos três fusos; o calendário registra aceite, recusa ou resposta provisória de cada convidado.",
        "justificativa": "O calendário converte o horário a partir do fuso definido no evento, e não do fuso de quem lê, por isso fixar o fuso na criação evita erro de uma hora em períodos de horário de verão. A distinção entre obrigatório e opcional informa a expectativa de presença e organiza a lista de respostas.",
        "errosFrequentes": [
          "Escrever o fuso apenas na descrição e deixar o campo do evento no fuso padrão.",
          "Marcar todos como obrigatórios e distorcer a expectativa de presença.",
          "Anexar o documento ao convite sem verificar o acesso dos convidados externos."
        ],
        "variacao": "A reunião passa a ser semanal por três meses. Explique como criar a série e como alterar apenas uma ocorrência sem afetar as demais."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa reorganizar uma reunião que será remarcada duas vezes em uma semana, sem que os participantes percam o histórico de mensagens e a pauta já enviada.",
        "dados": "Evento com nove participantes, pauta com cinco itens, duas remarcações previstas e uma pessoa que entrará apenas na segunda data.",
        "conceitos": [
          "atualização de evento: alteração que reenvia o convite aos participantes",
          "série recorrente: conjunto de ocorrências que compartilham a mesma definição",
          "resposta do participante: estado de aceite associado ao evento"
        ],
        "estrategia": "Atualizar o evento existente em vez de criar outro, preservando pauta e respostas, e incluir a nova pessoa na data em que ela participará.",
        "execucao": [
          "Abrir o evento existente e alterar data e hora, mantendo a pauta e o documento anexado.",
          "Enviar a atualização aos participantes e conferir quais respostas foram redefinidas.",
          "Incluir a nova participante apenas na ocorrência correspondente, sem convertê-la em convidada da primeira data.",
          "Confirmar na agenda de cada participante que restou apenas a data vigente."
        ],
        "resultado": "Evento único com a data correta, pauta preservada, respostas atualizadas e a nova participante presente apenas na data prevista, sem eventos duplicados nas agendas.",
        "justificativa": "Criar um segundo evento duplicaria o compromisso e dividiria as respostas, dificultando saber quem comparecerá. A atualização mantém o vínculo entre convite, pauta e respostas, e a inclusão pontual da nova participante evita que ela receba um convite para uma data em que não deve estar presente.",
        "errosFrequentes": [
          "Criar um evento novo e deixar o antigo ativo nas agendas.",
          "Alterar a série inteira quando apenas uma ocorrência mudou.",
          "Incluir a nova participante na série e gerar convites para todas as datas."
        ],
        "variacao": "A reunião passa a ter duas ocorrências na mesma semana, com públicos distintos. Explique como estruturar os eventos para não misturar respostas e listas de presença."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que calendários compartilhados não permitem permissões diferentes por pessoa e que, por isso, compartilhar a agenda com a equipe necessariamente expõe todos os compromissos.",
        "dados": "Agenda com compromissos pessoais e profissionais, equipe de oito pessoas, necessidade de mostrar apenas disponibilidade e um caso em que se deseja mostrar detalhes.",
        "conceitos": [
          "nível de permissão: define o que o outro pode ver ou alterar",
          "disponibilidade: exibição de horários ocupados sem detalhes do evento",
          "agenda privada: configuração que restringe o acesso ao proprietário"
        ],
        "estrategia": "Verificar os níveis de compartilhamento disponíveis e configurar por pessoa, usando o nível que mostra apenas disponibilidade para a equipe e detalhes para o caso específico.",
        "execucao": [
          "Abrir as configurações de compartilhamento da agenda e listar os níveis disponíveis.",
          "Conceder à equipe o nível que exibe apenas disponibilidade, sem títulos nem participantes.",
          "Conceder ao segundo caso o nível com detalhes, conforme a necessidade declarada.",
          "Conferir, com uma pessoa de cada grupo, o que cada uma consegue ver."
        ],
        "resultado": "A afirmação é incorreta: a agenda fica compartilhada com níveis distintos por pessoa, exibindo apenas disponibilidade para a equipe e detalhes para quem precisa deles.",
        "justificativa": "O compartilhamento de calendário é granular: cada concessão define o que o destinatário vê, e o nível de disponibilidade oculta títulos e participantes. Por isso a exposição de compromissos pessoais decorre de configuração inadequada, e não de limitação da ferramenta.",
        "errosFrequentes": [
          "Compartilhar a agenda no nível mais amplo por desconhecer as opções.",
          "Tornar a agenda pública em vez de compartilhar com pessoas específicas.",
          "Conferir a configuração apenas na própria visão, sem testar com outro usuário."
        ],
        "variacao": "Um dos integrantes precisa apenas propor horários, sem ver detalhes dos compromissos. Explique qual nível atende a esse caso e por que conceder edição seria excesso de permissão."
      }
    ]
  },
  "m3-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Teams, Google Meet e Zoom resolvem o mesmo problema — reunião e colaboração a distância —, mas diferem na integração com o ambiente de arquivos e no modelo de licenciamento. Recursos como gravação em nuvem, transcrição, legendas ao vivo e webinars dependem do plano ou da edição, de modo que generalizá-los entre plataformas gera erro no gabarito.",
      "preRequisitos": [
        "Uso básico de videoconferência e de compartilhamento de tela",
        "Noção de licenciamento e de planos de contratação de software",
        "Conceito de ecossistema de produtividade integrado (conta, armazenamento e aplicativos)"
      ],
      "objetivosObservaveis": [
        "Situar Microsoft Teams, Google Meet e Zoom no respectivo ecossistema de produtividade",
        "Citar capacidades comuns às três plataformas, como compartilhamento de tela, chat, levantar mão e reações",
        "Indicar que gravação, transcrição, duração e limite de participantes dependem do plano ou da edição",
        "Escolher a plataforma a partir de requisitos do cenário, e não da familiaridade do anfitrião"
      ],
      "competencias": [
        "Avaliar comparativamente ferramentas de videoconferência sem generalizar recursos",
        "Decidir a adoção com base em requisitos eliminatórios e na integração com o ambiente já existente",
        "Testar o ingresso de participantes externos antes de padronizar uma plataforma"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s2 (Controle de participantes, lobby e gravação) — aprofunda os controles de sala comuns às plataformas comparadas",
        "m3-u2-t3-s1 (Políticas de gravação e consentimento) — a gravação como recurso condicionado ao plano e sujeito a regra",
        "m3-u5-t2-s3 (Exposição em plataformas de colaboração) — o risco de vazamento nos ambientes comparados",
        "m3-u4-t1-s1 (Lobby e sala de espera) — recurso de acesso que varia entre as plataformas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca pede a comparação de plataformas e costuma embutir armadilha no recurso condicionado ao plano, como gravar na nuvem ou exibir legendas em qualquer licença. Cobra-se situar cada ferramenta no ecossistema e escolher conforme o requisito, sem presumir paridade de recursos."
      }
    },
    "niveis": {
      "iniciante": "Microsoft Teams integra reunião, conversa e arquivos ao Microsoft 365, sendo natural para organizações que já usam esse ambiente; Google Meet integra-se ao Google Workspace e costuma funcionar pelo navegador, sem instalação; Zoom é muito usado em reuniões com participantes externos e em eventos ampliados. As três compartilham recursos básicos, como tela, chat, levantar mão e reações, mas gravação, transcrição, legendas ao vivo, duração e número de participantes variam conforme o plano ou a edição.",
      "intermediario": "No nível intermediário, o candidato identifica recursos comuns e separa o que depende do plano: reconhece que compartilhar tela e conversar por chat estão nas três plataformas, enquanto gravação em nuvem, transcrição e webinars exigem licença específica. A questão típica descreve a necessidade e pergunta se a capacidade pode ser presumida, e a resposta correta verifica a licença antes de afirmar.",
      "avancado": "No nível avançado, o candidato compara plataformas a partir de requisitos eliminatórios, como gravação obrigatória ou integração com o ambiente de ensino, e descarta alternativas cuja licença não cobre o recurso essencial. Exige perceber que a interface não decide a escolha: a decisão vem do requisito do cenário e das restrições de acesso dos convidados.",
      "especialista": "No nível especialista, o candidato estrutura a adoção de uma plataforma para toda uma organização: testa o ingresso de participantes externos, valida limites de participantes e a retenção de gravação na licença vigente e documenta os recursos condicionados. A tarefa é padronizar sem prometer capacidade que o plano não inclui, ajustando o uso ao contrato."
    },
    "comparacoes": [
      {
        "tema": "Recurso comum x recurso condicionado ao plano",
        "a": {
          "rotulo": "Comum",
          "texto": "Capacidades presentes nas três plataformas em suas configurações usuais, como compartilhamento de tela, chat, levantar mão e reações."
        },
        "b": {
          "rotulo": "Condicionado ao plano",
          "texto": "Capacidades que dependem da licença ou da edição, como gravação em nuvem, transcrição, legendas ao vivo, webinars e limite ampliado de participantes."
        },
        "diferencaGabarito": "O recurso comum pode ser afirmado em qualquer cenário; o condicionado só vale após conferir a licença contratada, e generalizá-lo é o erro típico apontado pela banca."
      },
      {
        "tema": "Acesso pelo navegador x aplicativo dedicado",
        "a": {
          "rotulo": "Navegador",
          "texto": "Dispensa instalação local e atende a quem não pode instalar software, embora alguns recursos possam ficar limitados conforme o navegador."
        },
        "b": {
          "rotulo": "Aplicativo dedicado",
          "texto": "Programa instalado que costuma oferecer recursos adicionais, mas impõe o requisito de instalação e de permissão na máquina do participante."
        },
        "diferencaGabarito": "A existência do aplicativo não elimina o modo de navegador; a viabilidade se decide confrontando os recursos exigidos pela reunião com os disponíveis no acesso permitido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Google Meet requer instalação de software.'",
        "porqueErrada": "O Meet foi projetado para uso pelo navegador, sem instalação; a existência de aplicativo móvel ou de atalho não transforma a instalação em requisito para participar da reunião.",
        "versaoCorreta": "Errado. Google Meet funciona no navegador sem instalação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Como as plataformas oferecem recursos semelhantes, qualquer uma serve para qualquer reunião.'",
        "porqueErrada": "Recursos como gravação, transcrição, número de participantes e webinars variam por plano e edição; presumir paridade leva a escolher uma licença que não cobre o requisito da reunião.",
        "versaoCorreta": "A escolha parte dos requisitos do cenário e da licença disponível; recursos condicionados ao plano não se presumem entre plataformas."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O recurso de gravação está incluído em todos os planos das três plataformas.'",
        "porqueErrada": "A gravação, sobretudo em nuvem, costuma depender do plano ou da edição; tratá-la como universal ignora a diferença de licenciamento que separa as ofertas.",
        "versaoCorreta": "A disponibilidade da gravação deve ser conferida na licença de cada plataforma antes de ser prometida aos participantes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Plataforma de videoconferência: serviço de reunião a distância com tela, chat e áudio",
        "Ecossistema: conjunto de serviços integrados da mesma plataforma, como reunião, arquivo e conversa",
        "Recurso condicionado ao plano: capacidade que só existe em determinada licença ou edição",
        "Modo de acesso: navegador, sem instalação, ou aplicativo dedicado, com recursos adicionais"
      ],
      "regras": [
        "Comparar plataformas a partir de requisitos eliminatórios antes de avaliar recursos secundários",
        "Não presumir paridade de recursos entre planos e edições: verificar a licença contratada"
      ],
      "comparacoes": [
        "Recurso comum x recurso condicionado: o primeiro vale em qualquer cenário, o segundo depende da licença e não se generaliza"
      ],
      "fluxos": [
        "Levantar requisitos do cenário → conferir a licença de cada plataforma → testar o acesso de convidado externo → padronizar a ferramenta"
      ],
      "excecoes": [
        "Um recurso condicionado pode estar disponível por tempo limitado em versão de avaliação, o que não o torna contratado"
      ],
      "palavrasChave": [
        "Teams",
        "Meet",
        "Zoom",
        "webinar",
        "licença",
        "navegador"
      ],
      "checklist": [
        "Situo cada plataforma no respectivo ecossistema?",
        "Cito as capacidades comuns às três?",
        "Reconheço o recurso que depende do plano?",
        "Escolho conforme o requisito do cenário?",
        "Testo o ingresso de participantes externos?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Escolher a plataforma para uma organização que já usa um pacote de produtividade corporativo e precisa de reuniões internas com acesso aos arquivos no mesmo ambiente.",
        "dados": "Organização com pacote corporativo contratado, reuniões internas de até trinta pessoas, necessidade de editar documentos durante a reunião e convidados externos ocasionais.",
        "conceitos": [
          "ecossistema: conjunto de serviços integrados da mesma plataforma",
          "recurso condicionado ao plano: capacidade que depende de licença ou edição",
          "convidado externo: participante sem conta na organização"
        ],
        "estrategia": "Partir do requisito de integração com o ambiente já contratado e verificar, antes de decidir, quais capacidades dependem do plano em uso.",
        "execucao": [
          "Listar os requisitos: reunião interna, edição de documentos durante a sessão e convidados externos ocasionais.",
          "Verificar que a plataforma do próprio pacote integra reunião, conversa e arquivos no mesmo ambiente.",
          "Conferir no plano contratado os limites aplicáveis a participantes, gravação e transcrição.",
          "Testar o ingresso de um convidado externo antes de padronizar a ferramenta para toda a organização."
        ],
        "resultado": "Plataforma do pacote adotada para as reuniões internas, com arquivos acessados no próprio ambiente e ingresso de externos validado por teste; os limites do plano ficam documentados.",
        "justificativa": "As três plataformas resolvem reunião a distância e compartilham recursos básicos, mas diferem na integração com o ambiente de arquivos e colaboração. Quando a organização já opera no pacote corporativo, a plataforma integrada reduz etapas porque reunião, conversa e documento estão no mesmo serviço, e a verificação do plano evita prometer capacidade que a licença não cobre.",
        "errosFrequentes": [
          "Generalizar recursos entre plataformas e planos, prometendo gravação ou limites iguais em todos.",
          "Escolher pela familiaridade do usuário sem verificar a integração com o ambiente de arquivos.",
          "Testar apenas com contas internas e descobrir o problema de acesso externo no dia da reunião."
        ],
        "variacao": "A mesma organização precisa realizar um evento aberto para quinhentos participantes externos, com moderação. Indique o que muda na escolha e por que o recurso de evento ampliado não pode ser presumido em qualquer plano."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa comparar duas plataformas para uma aula remota com alunos de uma instituição que usa ambiente de ensino próprio e exige gravação das sessões.",
        "dados": "Turma de quarenta alunos, ambiente de ensino institucional já adotado, gravação obrigatória de todas as aulas, recursos disponíveis dependentes da licença educacional.",
        "conceitos": [
          "integração com ambiente de ensino: ligação entre a plataforma de reunião e o repositório de conteúdo",
          "gravação como recurso de plano: disponibilidade sujeita à licença",
          "critério de escolha: requisito obrigatório que elimina alternativas"
        ],
        "estrategia": "Tratar a gravação obrigatória como requisito eliminatório e verificar, em cada plataforma e licença, se a capacidade está incluída antes de comparar recursos secundários.",
        "execucao": [
          "Listar os requisitos e marcar a gravação obrigatória como eliminatória.",
          "Verificar, na licença institucional de cada plataforma, se a gravação está incluída e por quanto tempo é retida.",
          "Comparar a integração com o ambiente de ensino já adotado, que reduz etapas para os alunos.",
          "Registrar a comparação e indicar a plataforma que atende ao requisito eliminatório com menor atrito de acesso."
        ],
        "resultado": "Plataforma escolhida com base no requisito de gravação confirmado na licença institucional, com integração ao ambiente de ensino e acesso dos alunos sem cadastro adicional.",
        "justificativa": "Quando um requisito é eliminatório, a comparação precisa começar por ele, porque um recurso atraente que dependa de licença não contratada não resolve o problema. A integração com o ambiente já adotado é critério secundário, que desempata entre alternativas igualmente viáveis.",
        "errosFrequentes": [
          "Comparar recursos sem verificar a licença efetivamente contratada.",
          "Escolher pela interface e descobrir a limitação de gravação depois da primeira aula.",
          "Prometer retenção de gravação sem conhecer a política aplicável."
        ],
        "variacao": "A instituição decide manter a gravação por apenas trinta dias. Explique o que muda na comparação e qual requisito novo passa a pesar na escolha."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que uma das plataformas exige instalação de programa em todos os casos e que, por isso, não pode ser usada por participantes externos que não podem instalar software.",
        "dados": "Participante externo com acesso apenas ao navegador, reunião de uma hora, computador corporativo sem permissão de instalação e conexão estável.",
        "conceitos": [
          "acesso pelo navegador: uso sem instalação local, sujeito a recursos do navegador",
          "aplicativo dedicado: programa instalado, com recursos adicionais",
          "requisito do participante: restrição que define a viabilidade da ferramenta"
        ],
        "estrategia": "Verificar o modo de acesso disponível na plataforma e testar com um participante sem permissão de instalação, em vez de concluir pela via de aplicativo.",
        "execucao": [
          "Verificar na plataforma se existe acesso por navegador para participantes.",
          "Testar o ingresso com uma conta sem permissão de instalação.",
          "Comparar os recursos disponíveis no navegador com os do aplicativo dedicado.",
          "Registrar o que o participante consegue fazer no modo de navegador e o que exigiria instalação."
        ],
        "resultado": "A afirmação é incorreta: o acesso pelo navegador dispensa instalação, ainda que alguns recursos possam ser limitados; a conclusão correta é verificar quais requisitos a reunião exige.",
        "justificativa": "A existência de aplicativo dedicado não elimina o modo de navegador. O que decide a viabilidade é o conjunto de recursos exigidos pela reunião em confronto com os disponíveis no modo de acesso permitido ao participante, e a conclusão precisa vir de teste, não de suposição.",
        "errosFrequentes": [
          "Concluir a limitação de acesso sem testar o modo de navegador.",
          "Generalizar a exigência de instalação para todos os participantes.",
          "Escolher a plataforma pela experiência do anfitrião e ignorar a restrição dos convidados."
        ],
        "variacao": "O participante externo também não pode criar conta. Explique o que muda na análise e qual teste comprova o ingresso sem cadastro."
      }
    ]
  },
  "m3-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Reuniões sem controle de acesso concentram três riscos: entrada de não convidados, exibição indevida de tela e registro não autorizado. A prova cobra a função de cada recurso de moderação — lobby, senha, silenciar todos, restrição de compartilhamento — e o princípio de que reunião mais sensível exige configuração mais restritiva.",
      "preRequisitos": [
        "Noção de reunião online e de sessão com papéis definidos",
        "Distinção entre anfitrião, coanfitrião e participante comum"
      ],
      "objetivosObservaveis": [
        "Explicar a função do lobby e a diferença em relação à senha da reunião",
        "Descrever as ações de moderação disponíveis ao anfitrião e ao coanfitrião",
        "Indicar os controles de áudio, vídeo e compartilhamento de tela",
        "Reconhecer que a disponibilidade dos recursos depende de plataforma, plano e versão"
      ],
      "competencias": [
        "Condução segura de reuniões com controle de entrada",
        "Aplicação de controles de acesso conforme a sensibilidade do assunto"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s1 (Teams, Meet e Zoom — comparação) — panorama das plataformas antes dos controles",
        "m3-u2-t3-s1 (Políticas de gravação e consentimento) — complementa os controles técnicos com a base jurídica",
        "m3-u4-t1-s1 (Lobby e sala de espera) — aprofunda o funcionamento da sala de espera",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — detalha as ações de moderação",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — caso de risco que os controles devem conter"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Adequação ao conteúdo programático de concursos que tratam de segurança em reuniões e de ferramentas de videoconferência; a classificação média é estimativa pedagógica qualitativa de centralidade do tema, e não frequência estatística medida em provas."
      }
    },
    "niveis": {
      "iniciante": "Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar. Remover participante: anfitrião pode expulsar participantes. Bloquear vídeo/microfone: anfitrião pode desativar dispositivos de participantes. Gravação: anfitrião pode gravar a reunião (vídeo, áudio, chat). Compartilhamento de tela: controle de quem pode compartilhar. Chat: mensagens durante a reunião. Senha da reunião: proteção por senha para acesso. Espera: participantes entram em ordem de aprovação.",
      "intermediario": "Ordenar a configuração conforme o risco: em reunião interna aberta bastam senha e silenciar todos; em reunião com dado sensível somam-se lobby, autenticação obrigatória e restrição do compartilhamento a dois papéis. Quem modera é o anfitrião ou o coanfitrião, nunca o participante comum. A gravação só é acionada com aviso prévio e quando a licença do plano incluir o recurso.",
      "avancado": "Combinar lobby, autenticação e restrição de compartilhamento para conter intrusão: o lobby retém quem chegou pelo link, a autenticação impede a entrada de não identificados e o bloqueio da tela evita a exposição acidental. A revisão passa a ocorrer antes da reunião: conferir a lista de convidados, a senha, a exigibilidade de conta e quem está autorizado a apresentar.",
      "especialista": "Diante de uma intrusão, a resposta é ordenada: remover o participante, bloquear novas entradas, avaliar o encerramento da sessão e registrar o incidente com horário, link e ações adotadas. O registro do incidente alimenta a revisão periódica da configuração e a definição de quem pode admitir estranhos ao grupo."
    },
    "comparacoes": [
      {
        "tema": "Lobby x senha da reunião",
        "a": {
          "rotulo": "Lobby (sala de espera)",
          "texto": "Retém quem tentou entrar e exige aprovação individual do anfitrião antes da admissão; funciona mesmo quando o link da reunião vazou."
        },
        "b": {
          "rotulo": "Senha da reunião",
          "texto": "Exige o conhecimento de um segredo compartilhado com os convidados; protege o acesso, mas o segredo costuma circular junto com o link."
        },
        "diferencaGabarito": "A senha barra quem não conhece o segredo; o lobby barra quem possui o link sem autorização, o que a torna a defesa mais forte contra divulgação de convite."
      },
      {
        "tema": "Anfitrião x participante comum",
        "a": {
          "rotulo": "Anfitrião e coanfitrião",
          "texto": "Removem participantes, silenciam todos, desativam microfone ou câmera e bloqueiam ou restringem o compartilhamento de tela."
        },
        "b": {
          "rotulo": "Participante comum",
          "texto": "Conversa, usa o chat e, em geral, compartilha a própria tela, mas não modera os demais nem altera as permissões da sessão."
        },
        "diferencaGabarito": "A moderação é privativa dos papéis elevados: afirmar que qualquer participante pode expulsar outro é erro."
      },
      {
        "tema": "Gravação x privacidade",
        "a": {
          "rotulo": "Gravação",
          "texto": "Amplia o registro e a memória da sessão, mas também o volume de dados expostos, exigindo aviso, base legal e política de retenção."
        },
        "b": {
          "rotulo": "Privacidade",
          "texto": "Reduz a exposição por não criar registro permanente, ao custo de perder a memória da reunião e depender de ata ou de resumo."
        },
        "diferencaGabarito": "Gravar amplia o que fica registrado e, por isso, exige consentimento ou base legal aplicável, além de política de acesso e descarte."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com senha, o lobby é desnecessário.",
        "porqueErrada": "A senha costuma ser enviada junto com o link, de modo que conhecer o segredo não impede a entrada indevida; o lobby exige aprovação caso a caso.",
        "versaoCorreta": "Use os dois recursos: o lobby contém quem possui o link sem autorização, e a senha evita entradas por tentativa automática."
      },
      {
        "afirmacaoEquivocada": "Qualquer participante pode remover outro participante da reunião.",
        "porqueErrada": "A moderação é privativa de papéis elevados; o participante comum não tem permissão de expulsar os demais nem de bloquear o compartilhamento de tela.",
        "versaoCorreta": "Apenas o anfitrião e os coanfitriões moderam a sessão, removendo participantes e restringindo microfone, câmera e tela."
      },
      {
        "afirmacaoEquivocada": "Todos os planos das plataformas permitem gravar a reunião na nuvem.",
        "porqueErrada": "A gravação depende da licença contratada e pode ter limites de armazenamento, de participantes ou de disponibilidade por versão da plataforma.",
        "versaoCorreta": "Confira o plano e a documentação oficial da plataforma antes de prometer a gravação como recurso garantido."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A gravação de reuniões não requer consentimento.'",
        "porqueErrada": "A gravação captura dados pessoais, como voz, imagem e conteúdo exibido em tela; por isso depende de base legal aplicável e de informação prévia aos participantes.",
        "versaoCorreta": "Depende da legislação. No Brasil, a LGPD e o Marco Civil podem exigir consentimento para gravação de comunicações. Sempre informar os participantes e obter consentimento quando aplicável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Lobby (sala de espera): retenção do participante até a aprovação do anfitrião",
        "Senha da reunião: barreira de acesso por segredo compartilhado",
        "Coanfitrião: papel que auxilia o anfitrião na moderação",
        "Silenciar todos: controle em massa dos microfones dos presentes",
        "Gravação: captura de áudio, vídeo e chat, condicionada à licença do plano"
      ],
      "regras": [
        "Reunião mais sensível exige configuração mais restritiva",
        "Quem modera é apenas o anfitrião e o coanfitrião",
        "A gravação só começa após aviso prévio aos participantes"
      ],
      "comparacoes": [
        "Lobby exige aprovação caso a caso; a senha exige apenas o conhecimento do segredo",
        "Anfitrião e coanfitrião moderam; participante comum apenas participa"
      ],
      "fluxos": [
        "Convidar → configurar senha e lobby → admitir pelo lobby → restringir compartilhamento → silenciar todos → iniciar a gravação após o aviso"
      ],
      "excecoes": [
        "Nomenclatura e disponibilidade dos controles variam por plataforma, plano e versão; o princípio de restringir conforme a sensibilidade da reunião é o que permanece estável"
      ],
      "palavrasChave": [
        "lobby",
        "senha",
        "moderação",
        "coanfitrião",
        "silenciar todos",
        "compartilhamento de tela",
        "gravação"
      ],
      "checklist": [
        "Explico a diferença entre lobby e senha?",
        "Sei quem pode remover e silenciar participantes?",
        "Indico os controles de áudio, vídeo e compartilhamento?",
        "Verifiquei se o plano contratado inclui a gravação?",
        "Avisei sobre a gravação antes de iniciá-la?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Realizar uma reunião com fornecedor externo sobre assunto sensível, reduzindo o risco de entrada de pessoa não convidada e de exposição acidental de tela.",
        "dados": "Reunião de quarenta e cinco minutos com quatro participantes internos e dois externos, link divulgado por correio eletrônico, apresentação com dados de clientes e gravação prevista.",
        "conceitos": [
          "lobby: retenção de participantes até a aprovação do anfitrião",
          "coanfitrião: papel que auxilia a moderação",
          "compartilhamento restrito: permissão que limita a apresentação de tela a papéis definidos"
        ],
        "estrategia": "Aplicar os controles na ordem do risco: quem entra, quem apresenta e o que é gravado, informando os participantes antes de iniciar.",
        "execucao": [
          "Ativar o lobby e conferir a lista de convidados antes de admitir cada participante.",
          "Restringir o compartilhamento de tela ao anfitrião e ao apresentador designado.",
          "Silenciar os participantes na entrada e liberar o microfone apenas para quem for falar.",
          "Informar sobre a gravação antes de iniciá-la e confirmar a concordância dos presentes."
        ],
        "resultado": "Reunião com entrada controlada, apresentação restrita a dois papéis, áudio organizado e gravação iniciada somente após o aviso e a concordância dos participantes.",
        "justificativa": "Cada controle fecha uma via distinta de exposição: o lobby limita quem entra, a restrição de compartilhamento impede que um participante exponha conteúdo não previsto e o aviso de gravação trata o registro de dados pessoais. A combinação é mais eficaz que qualquer controle isolado, porque a configuração disponível varia por plataforma e plano.",
        "errosFrequentes": [
          "Confiar apenas na senha da reunião e deixar o link disponível para reenvio.",
          "Permitir compartilhamento livre e depender de pedido verbal para não exibir dados.",
          "Iniciar a gravação antes de informar os participantes."
        ],
        "variacao": "Um participante entra com nome de convidado e tenta compartilhar a tela sem autorização. Descreva a sequência de ações do anfitrião e o ajuste de configuração que evita a repetição."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa conduzir uma reunião de conselho com votação nominal, garantindo que apenas membros votem e que o resultado seja registrado sem ambiguidade.",
        "dados": "Doze membros com direito a voto, cinco ouvintes, pauta com três deliberações, gravação obrigatória por norma interna e integrantes externos sem conta institucional.",
        "conceitos": [
          "papel na reunião: conjunto de permissões atribuídas a cada participante",
          "votação nominal: registro individual da manifestação de cada membro",
          "registro de presença: lista que comprova quem participou"
        ],
        "estrategia": "Separar membros e ouvintes por papel antes da sessão e registrar a votação de forma nominal, para que o resultado seja auditável e o direito de voto não se estenda a quem não o possui.",
        "execucao": [
          "Atribuir papel de membro aos doze votantes e de ouvinte aos cinco demais, restringindo microfone e voto aos membros.",
          "Admitir externos pelo lobby, conferindo identidade antes de cada admissão.",
          "Registrar presença no início e conduzir a votação nominal de cada deliberação.",
          "Anexar a lista de presença e o registro da votação ao arquivo da reunião, junto com a gravação."
        ],
        "resultado": "Deliberações com votação nominal registrada apenas por membros, ouvintes sem direito a voto, presença comprovada e gravação arquivada com os registros da sessão.",
        "justificativa": "A atribuição de papéis é o que garante que o direito de voto corresponda ao regimento, e o registro nominal torna o resultado verificável depois da sessão. Sem essa separação, o controle depende de disciplina dos participantes, e a ata perde rastreabilidade.",
        "errosFrequentes": [
          "Deixar todos com o mesmo papel e conduzir a votação por contagem informal.",
          "Admitir externos sem conferir identidade no lobby.",
          "Arquivar apenas a gravação, sem a lista de presença e o registro da votação."
        ],
        "variacao": "Um membro perde a conexão durante a votação de um item. Explique como registrar a ocorrência e por que a ata precisa refletir a interrupção."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a gravação de reunião dispensa consentimento porque a sessão é interna e que, além disso, o recurso está disponível em qualquer plano contratado.",
        "dados": "Reunião interna com participantes de dois setores, gravação iniciada sem aviso, plano contratado sem confirmação de inclusão do recurso e gravação disponibilizada por link.",
        "conceitos": [
          "base legal: fundamento que autoriza o tratamento de dados pessoais",
          "aviso prévio: informação ao participante antes do início da captura",
          "disponibilidade por licença: recurso presente apenas em determinados planos"
        ],
        "estrategia": "Separar as duas afirmações e verificar cada uma: a natureza interna da reunião não elimina a necessidade de base legal e de informação, e a disponibilidade do recurso depende da licença.",
        "execucao": [
          "Verificar se a gravação estava prevista na pauta e se houve aviso antes do início.",
          "Identificar a base legal aplicável ao tratamento e o que a norma interna da organização exige.",
          "Conferir na licença contratada se o recurso de gravação está incluído e qual retenção se aplica.",
          "Corrigir o procedimento e registrar a decisão sobre o uso e o compartilhamento do arquivo."
        ],
        "resultado": "A afirmação é incorreta nos dois pontos: reunião interna não dispensa base legal nem informação prévia, e a gravação depende da licença contratada, com retenção definida.",
        "justificativa": "A finalidade interna reduz o escopo do tratamento, mas não elimina a exigência de fundamento legal e de transparência com os participantes, cujas vozes e imagens são dados pessoais. A disponibilidade técnica do recurso, por sua vez, é questão de licenciamento e não altera a obrigação de informar e de restringir o acesso ao arquivo.",
        "errosFrequentes": [
          "Presumir que reunião interna dispensa consentimento ou aviso.",
          "Iniciar a gravação por padrão e informar depois.",
          "Compartilhar o link da gravação sem avaliar conteúdo e permissões."
        ],
        "variacao": "A organização precisa comprovar que informou os participantes. Explique quais registros sustentam essa comprovação e onde eles devem ser mantidos."
      }
    ]
  },
  "m3-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Gravar cria registro permanente e exige aviso, finalidade, retenção e descarte definidos. A prova cobra os elementos de uma política de gravação — quando, quem, o quê, onde, retenção e acesso — e o consentimento como uma das bases legais disponíveis.",
      "preRequisitos": [
        "Noção de reunião online e de captura de áudio, vídeo e chat",
        "Noção de proteção de dados pessoais e de base legal de tratamento"
      ],
      "objetivosObservaveis": [
        "Enumerar os itens que compõem uma política de gravação",
        "Explicar em que consiste consentimento livre, informado e inequívoco",
        "Definir prazo de retenção, rotina de descarte e regras de acesso ao arquivo",
        "Indicar o papel da LGPD (Lei nº 13.709/2018) no tratamento de dados pessoais captados em reunião"
      ],
      "competencias": [
        "Elaboração de política de gravação institucional",
        "Proteção de informações e de dados pessoais registrados em reuniões"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s2 (Controle de participantes, lobby e gravação) — trata do aspecto técnico da captura em reunião",
        "m3-u4-t3-s1 (Políticas de gravação institucional) — aplica os mesmos itens ao uso institucional de plataformas",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD)) — detalha as hipóteses de tratamento de dados pessoais",
        "m3-u4-t3-s3 (Retenção, descarte e proteção de gravações) — aprofunda prazo, descarte e proteção dos arquivos",
        "m3-u5-t1-s3 (Gravação não autorizada e vazamento) — evidência o risco de gravar sem política",
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — base normativa dos direitos invocados nos pedidos de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Adequação ao conteúdo programático de concursos de TI e de gestão pública: o tema reúne proteção de dados e gestão documental e reúne itens sobre consentimento, retenção e descarte; a classificação alta é estimativa pedagógica qualitativa de centralidade, e não frequência estatística apurada em provas."
      }
    },
    "niveis": {
      "iniciante": "Políticas de gravação: definir quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter. Consentimento: informar participantes sobre gravação e obter consentimento (especialmente exigido por LGPD para dados pessoais). Retenção: definir prazo de retenção de gravações. Acesso: restringir acesso a gravações autorizadas. Compartilhamento: regras para distribuir gravações. Proteção: criptografar gravações sensíveis.",
      "intermediario": "Redigir a política com sete campos: quando gravar (finalidade legítima), quem pode iniciar a captura, o que é registrado (vídeo, áudio, chat, transcrição), onde o arquivo é armazenado, quem acessa, por quanto tempo é retido e como é descartado. A gravação não é automática: muitas reuniões são mais bem conduzidas sem registro permanente.",
      "avancado": "Avaliar se determinada reunião deve ser gravada, à luz da LGPD (Lei nº 13.709/2018): quando a captação gera dados pessoais, é preciso identificar a finalidade, a base legal aplicável e a necessidade. O consentimento é uma das bases, não a única, e a gravação silenciosa compromete qualquer concordância que se pretendesse obter.",
      "especialista": "Revisar a política de uma instituição e apontar lacunas: consentimento não documentado, retenção indeterminada, descarte não executado e acesso concedido sem finalidade registrada. A revisão deve produzir plano de correção com responsável e prazo, e conferir se o atendimento a pedidos de acesso dos titulares está procedimentalizado."
    },
    "comparacoes": [
      {
        "tema": "Gravar x não gravar",
        "a": {
          "rotulo": "Gravar",
          "texto": "Cria registro permanente, útil para memória institucional e auditoria, mas amplia a exposição e exige política, aviso e descarte."
        },
        "b": {
          "rotulo": "Não gravar",
          "texto": "Preserva a privacidade e reduz o risco, ao custo de perder a memória da sessão e depender de ata ou de resumo."
        },
        "diferencaGabarito": "A decisão é por finalidade e necessidade, e não por disponibilidade do botão: gravar só quando o registro for legítimo e proporcional ao risco."
      },
      {
        "tema": "Consentimento x obrigação legal",
        "a": {
          "rotulo": "Consentimento",
          "texto": "Manifestação livre, informada e inequívoca do titular; exige que ele saiba que está sendo gravado e concorde com isso."
        },
        "b": {
          "rotulo": "Obrigação legal (outra base)",
          "texto": "Cumprimento de obrigação legal ou regulatória, hipótese em que o tratamento pode ocorrer sem consentimento individual, mas com deveres de transparência."
        },
        "diferencaGabarito": "O consentimento é uma das bases legais: havendo obrigação legal aplicável, a análise muda, mas os deveres de informação, de segurança e de registro permanecem."
      },
      {
        "tema": "Retenção x descarte",
        "a": {
          "rotulo": "Retenção",
          "texto": "Prazo de manutenção do arquivo, justificado pela finalidade ou por dever de guarda, com acesso controlado durante todo o período."
        },
        "b": {
          "rotulo": "Descarte",
          "texto": "Eliminação ao fim do prazo, com rotina registrada que impede o acúmulo indefinido de gravações nos repositórios."
        },
        "diferencaGabarito": "Guardar além do necessário contraria a minimização, mas descartar cedo demais pode violar dever de guarda: o prazo decorre da finalidade e da norma aplicável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Gravações de reuniões podem ser compartilhadas livremente.'",
        "porqueErrada": "Reunião interna não é conteúdo público: a gravação pode conter dados pessoais de participantes e de terceiros atendidos, e o link aberto amplia o círculo de acesso sem registro de finalidade.",
        "versaoCorreta": "Errado. Gravações podem conter dados pessoais e informações sensíveis. O compartilhamento deve seguir políticas de segurança e proteção de dados."
      },
      {
        "afirmacaoEquivocada": "Se todos os participantes são da própria casa, não é preciso consentimento nem aviso.",
        "porqueErrada": "O vínculo institucional não afasta a aplicação da LGPD: vozes, imagens e mensagens são dados pessoais e exigem base legal e informação prévia ao titular.",
        "versaoCorreta": "Observe a LGPD e a política institucional: identifique a base legal aplicável e, quando o consentimento for a base, obtenha-o de forma livre, informada e inequívoca."
      },
      {
        "afirmacaoEquivocada": "Gravar é sempre a prática recomendada, pois o registro facilita a auditoria.",
        "porqueErrada": "A minimização recomenda captar apenas o necessário; gravar toda reunião cria exposição de dados sem contrapartida proporcional à finalidade.",
        "versaoCorreta": "Grave apenas quando houver finalidade legítima e necessidade, com política que defina aviso, acesso, retenção e descarte do arquivo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Política de gravação: conjunto de regras sobre captura, acesso, retenção e descarte",
        "Consentimento: manifestação livre, informada e inequívoca do titular",
        "Minimização: princípio de captar apenas o necessário para a finalidade",
        "Retenção: prazo de manutenção do arquivo antes do descarte",
        "Base legal: fundamento que autoriza o tratamento de dados pessoais"
      ],
      "regras": [
        "Quando, quem, o quê, onde, retenção, acesso e descarte: campos mínimos da política",
        "Gravar somente com finalidade legítima e necessidade",
        "Informar antes de gravar e obter concordância quando o consentimento for a base aplicável"
      ],
      "comparacoes": [
        "Consentimento é uma das bases legais, e não a única",
        "Gravar cria registro permanente; não gravar preserva a privacidade"
      ],
      "fluxos": [
        "Definir a finalidade → classificar a reunião → autorizar a captura e o aviso → controlar o acesso → reter pelo prazo → descartar e registrar"
      ],
      "excecoes": [
        "Existem bases legais além do consentimento; em contexto de guarda documental, o descarte pode não ser imediato"
      ],
      "palavrasChave": [
        "gravação",
        "consentimento",
        "minimização",
        "retenção",
        "descarte",
        "LGPD",
        "transparência"
      ],
      "checklist": [
        "Enumerei todos os itens da política?",
        "Expliquei o consentimento livre, informado e inequívoco?",
        "Defini a retenção e a rotina de descarte?",
        "Citei a LGPD como referência?",
        "Avaliei se a reunião devia ser gravada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Definir a política de gravação para as reuniões de um órgão, considerando que algumas sessões tratam de dados pessoais de cidadãos.",
        "dados": "Reuniões semanais de equipe, sessões de atendimento com dados de titulares, recurso de gravação disponível na plataforma e exigência de transparência e de gestão documental.",
        "conceitos": [
          "política de gravação: regras de quando gravar, quem acessa e por quanto tempo",
          "consentimento: manifestação livre, informada e inequívoca do titular",
          "retenção: prazo de manutenção do registro antes do descarte"
        ],
        "estrategia": "Decidir primeiro se a gravação é necessária para a finalidade e só então definir captura, acesso, retenção e descarte, porque gravar sem finalidade cria risco sem contrapartida.",
        "execucao": [
          "Classificar as reuniões: as de rotina interna podem não exigir gravação; as que geram decisão registrada podem exigir.",
          "Definir quem pode iniciar a gravação e como o aviso é dado antes do início.",
          "Estabelecer onde o arquivo é armazenado, quem acessa e por quanto tempo é retido.",
          "Prever o descarte ao fim do prazo e o procedimento de atendimento a pedidos de acesso ou eliminação."
        ],
        "resultado": "Política que distingue reuniões gravadas das não gravadas, com aviso prévio, acesso restrito, prazo de retenção definido e rotina de descarte registrada.",
        "justificativa": "A gravação cria registro permanente que pode conter dados pessoais, por isso a decisão começa pela finalidade e pela necessidade, não pela disponibilidade do botão. O consentimento, quando é a base aplicável, exige que o participante saiba e concorde, e a gravação silenciosa compromete essa base e a própria finalidade declarada.",
        "errosFrequentes": [
          "Gravar todas as reuniões por padrão, sem finalidade definida.",
          "Guardar a gravação indefinidamente por falta de rotina de descarte.",
          "Divulgar o link da gravação para toda a organização sem avaliar o conteúdo."
        ],
        "variacao": "A plataforma passa a gerar transcrição automática além do vídeo. Explique por que a política precisa ser revista e qual item novo ela deve cobrir."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa atender a um pedido de titular que solicita acesso ao conteúdo de uma reunião gravada da qual participou, sem expor dados de terceiros.",
        "dados": "Gravação de sessenta minutos com seis participantes, um deles solicitante, trechos com dados de clientes e prazo interno de resposta definido pela organização.",
        "conceitos": [
          "direito de acesso: faculdade do titular de conhecer o tratamento de seus dados",
          "minimização: fornecimento apenas do que se refere ao solicitante",
          "dados de terceiros: informações de outras pessoas que não podem ser expostas"
        ],
        "estrategia": "Atender ao pedido fornecendo o conteúdo que se refere ao solicitante e suprimindo dados de terceiros, registrando o procedimento adotado.",
        "execucao": [
          "Identificar os trechos da gravação em que o solicitante aparece ou é mencionado.",
          "Verificar quais passagens contêm dados de outros participantes ou de clientes.",
          "Preparar o recorte ou o resumo que atende ao pedido sem expor terceiros.",
          "Registrar o atendimento, a data e o critério aplicado, dentro do prazo interno definido."
        ],
        "resultado": "Solicitante recebe o conteúdo que lhe diz respeito, sem dados de terceiros, com registro do atendimento e do critério de recorte aplicado.",
        "justificativa": "O direito de acesso alcança os dados do próprio titular e não autoriza expor informação de outras pessoas. A minimização é o critério que concilia o atendimento ao pedido com a proteção dos demais participantes, e o registro comprova o procedimento adotado em caso de questionamento.",
        "errosFrequentes": [
          "Enviar a gravação integral e expor dados de terceiros.",
          "Negar o pedido por conter informações de outros participantes.",
          "Atender sem registrar o critério, dificultando a comprovação posterior."
        ],
        "variacao": "O pedido é de eliminação de um trecho da gravação. Explique quais verificações precedem a decisão e por que a eliminação pode não ser imediata em contexto de guarda documental."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma que, como a gravação é feita em plataforma institucional, ela pode ser compartilhada livremente com qualquer setor, inclusive por link aberto, porque o conteúdo é público por natureza.",
        "dados": "Gravação de reunião com dados de atendimento, link criado sem restrição de acesso, dois setores interessados e ausência de registro sobre a finalidade do compartilhamento.",
        "conceitos": [
          "princípio da finalidade: uso compatível com a razão pela qual o dado foi coletado",
          "controle de acesso: restrição a quem realmente precisa do conteúdo",
          "transparência: dever de informar, que não se confunde com divulgação irrestrita"
        ],
        "estrategia": "Distinguir transparência de divulgação e verificar se o compartilhamento guarda compatibilidade com a finalidade da gravação e com o número de pessoas que realmente precisa do conteúdo.",
        "execucao": [
          "Identificar a finalidade registrada para a gravação.",
          "Verificar quais setores precisam do conteúdo e para qual tarefa.",
          "Substituir o link aberto por acesso restrito às pessoas identificadas.",
          "Registrar a base do compartilhamento e revisar os acessos concedidos."
        ],
        "resultado": "A afirmação é incorreta: reunião interna não é conteúdo público, e o compartilhamento precisa observar finalidade e restrição de acesso, com registro da base utilizada.",
        "justificativa": "Transparência é dever de informar o titular e a sociedade sobre o tratamento, e não autorização para divulgação irrestrita. A gravação de atendimento contém dados pessoais, cujo uso por outro setor exige compatibilidade com a finalidade original e acesso limitado a quem efetivamente precisa.",
        "errosFrequentes": [
          "Tratar transparência como sinônimo de publicação.",
          "Criar link aberto por conveniência de compartilhamento.",
          "Ampliar o acesso sem registrar a finalidade do novo uso."
        ],
        "variacao": "Um órgão de controle solicita a gravação. Explique o que muda no procedimento e por que o atendimento ao pedido não se confunde com publicação aberta."
      }
    ]
  },
  "m3-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Princípios de netiqueta evitam ruído e protegem a imagem institucional em comunicações digitais. Em provas, cobra-se clareza, respeito e uso adequado de canais, pois erros de forma geram má interpretação e conflito desnecessário.",
      "preRequisitos": [
        "Uso básico de e-mail e mensagens instantâneas",
        "Noção de comunicação escrita profissional"
      ],
      "objetivosObservaveis": [
        "Definir netiqueta em ambiente profissional",
        "Aplicar princípios de clareza e respeito em mensagens digitais",
        "Identificar erros comuns como CAIXA ALTA e uso indevido de responder a todos",
        "conhecerá princípios de etiqueta digital aplicáveis a ambientes profissionais"
      ],
      "competencias": [
        "Comunicação escrita profissional",
        "Autocontrole digital em interações mediadas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s2 (Comunicação síncrona versus assíncrona)",
        "m3-u3-t1-s3 (Tom, clareza e estrutura de mensagens profissionais)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Netiqueta está no conteúdo programático de comunicação institucional e redação profissional. É tema de itens de certo e erro sobre uso de caixa alta, responder a todos e registro do histórico, conforme estimativa pedagógica de adequação ao edital."
      }
    },
    "niveis": {
      "iniciante": "Netiqueta (etiqueta da rede) são regras de cortesia e profissionalismo na comunicação digital. Princípios: ser claro e conciso; usar assunto descritivo; evitar CAIXA ALTA (equivale a gritar); não abusar de exclamações; responder em prazo razoável; manter thread (não alterar assunto indevidamente); citar apenas o necessário; não enviar anexos pesados sem aviso; evitar responder a todos quando não necessário; ser respeitoso mesmo em discordâncias.",
      "intermediario": "Reconhecer situações de ambiguidade por falta de tom e adaptar a redação para reduzir riscos. Avaliar quando usar assunto específico, como recortar citações e preservar a linha de assunto. Diferenciar cortesia de informalidade excessiva e ajustar a mensagem ao nível hierárquico e ao canal escolhido.",
      "avancado": "Analisar impacto institucional de mensagens mal formuladas e propor melhorias de fluxo de comunicação. Reescrever e-mails com múltiplos destinatários, controlar exposição de informações e planejar resposta em cadeia com clareza e rastreabilidade.",
      "especialista": "Diagnosticar padrões recorrentes de má netiqueta em equipe e sugerir normas internas consistentes com a comunicação institucional. Mentorar pares na escolha de canal, na gestão de tom e na prevenção de ruídos que comprometem processos decisórios."
    },
    "comparacoes": [
      {
        "tema": "CAIXA ALTA versus ênfase pontual",
        "a": {
          "rotulo": "Uso excessivo de CAIXA ALTA",
          "texto": "Transmite agressividade, equivale a gritar na leitura escrita e dificulta a compreensão."
        },
        "b": {
          "rotulo": "Ênfase pontual",
          "texto": "Utiliza negrito ou palavras-chave em caixa alta para destacar termos essenciais sem gerar desconforto."
        },
        "diferencaGabarito": "CAIXA ALTA contínua é inadequada; ênfase pontual é aceitável para destacar."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Responder a todos é sempre a prática correta.'",
        "porqueErrada": "Por responder a todos sem necessidade gera ruído, expõe informações e sobrecarrega caixas de entrada.",
        "versaoCorreta": "Inadequado. Responda apenas ao remetente para evitar ruído e exposição indevida."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Exclamações múltiplas deixam a mensagem mais cordial.'",
        "porqueErrada": "Excesso de exclamações transmite informalidade e pode ser lido como ansiedade ou falta de seriedade.",
        "versaoCorreta": "Evite múltiplas exclamações em comunicação profissional; prefira marcas de ênfase moderadas e objetivas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Netiqueta",
        "Cortesia digital",
        "Imagem institucional"
      ],
      "regras": [
        "Usar assunto descritivo e manter a linha de assunto",
        "Evitar CAIXA ALTA e excesso de exclamações"
      ],
      "comparacoes": [
        "CAIXA ALTA contínua versus ênfase pontual"
      ],
      "fluxos": [
        "Redigir → revisar destinatários → verificar anexos → enviar"
      ],
      "excecoes": [
        "Siglas técnicas podem usar caixa alta por convenção"
      ],
      "palavrasChave": [
        "netiqueta",
        "assunto descritivo",
        "responder a todos",
        "thread",
        "cortesia"
      ],
      "checklist": [
        "Assunto descritivo?",
        "CAIXA ALTA evitada?",
        "Destinatários corretos?",
        "Citação necessária apenas?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o uso de CAIXA ALTA em e-mails profissionais deve ser evitado e quando pode ser aceitável no contexto institucional?",
        "dados": "E-mail direcionado a gerência com termos escritos em CAIXA ALTA para enfatizar prazo, enviando anexo de relatório.",
        "conceitos": [
          "netiqueta",
          "tom escrito",
          "interpretação de agressividade"
        ],
        "estrategia": "Identificar a convenção de leitura que interpreta CAIXA ALTA como grito; avaliar objetivo de ênfase; comparar alternativas de destaque.",
        "execucao": [
          "Ler a mensagem e localizar trechos em CAIXA ALTA",
          "Interpretar o efeito de tom agressivo na leitura",
          "Sugerir reescrita com ênfase moderada ou termos normais"
        ],
        "resultado": "CAIXA ALTA é interpretada como grito/agressividade. Use apenas para ênfase pontual ou siglas.",
        "justificativa": "A ausência de sinais vocais faz o leitor inferir tom pela forma escrita, então CAIXA ALTA sinaliza irritação. A regra preserva cortesia e reduz risco de conflito institucional.",
        "errosFrequentes": [
          "Assumir que caixa alta aumenta visibilidade sem custo",
          "Usar caixa alta para corrigir o leitor agressivamente"
        ],
        "variacao": "Mudar para caso de mensagem em grupo com reclamação em caixa alta e pedir reescrita mantendo firmeza sem agressividade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um colega envia e-mail com assunto 'URGENTE!!!' e tom alarmista sobre relatório. Como responder de forma profissional sem ecoar a agressividade?",
        "dados": "E-mail chega às 9h com três exclamações, assunto em caixa alta parcial e pedido imediato de revisão sem contexto de prioridade real.",
        "conceitos": [
          "netiqueta",
          "gestão de tom",
          "canal adequado"
        ],
        "estrategia": "Avaliar urgência real, manter calma na redação, evitar espelhar o tom; propor canal síncrono se for realmente crítico.",
        "execucao": [
          "Ler e-mail e verificar grau real de urgência",
          "Redigir resposta com assunto claro e tom neutro",
          "Oferecer alternativa de contato rápido se necessário"
        ],
        "resultado": "Responder com calma, avaliar urgência real, evitar ecoar o tom agressivo e, se necessário, sugerir canal síncrono (telefone/reunião) para questões urgentes.",
        "justificativa": "Manter a calma preserva a imagem institucional e impede escalada de tensão. A escolha do canal evita ruído e mostra critério profissional na gestão de prioridades.",
        "errosFrequentes": [
          "Responder com mesmo tom alarmista",
          "Ignorar e-mail por achar exagero sem avaliar conteúdo"
        ],
        "variacao": "Caso o pedido seja realmente crítico, responder com confirmação de recebimento e prazo de retorno em vez de adotar urgência simbólica."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Responder a todos é sempre a prática correta em e-mails corporativos.' Explique o erro de interpretação e a prática adequada.",
        "dados": "E-mail enviado a uma equipe de dez pessoas com consulta direcionada apenas ao remetente sobre problema individual.",
        "conceitos": [
          "responder a todos",
          "privacidade",
          "ruído comunicacional"
        ],
        "estrategia": "Identificar destinatários necessários, avaliar exposição de informação e aplicar princípio de mínimo privilégio comunicacional.",
        "execucao": [
          "Mapear quem precisa da resposta",
          "Usar resposta direta ao remetente",
          "Encaminhar apenas se houver necessidade institucional"
        ],
        "resultado": "Errado. Responder a todos (Reply All) quando apenas o remetente precisa da resposta gera ruído e pode expor informações a quem não deveria recebê-las.",
        "justificativa": "O Reply All cria ruído, expõe dados a terceiros e compromete eficiência. A netiqueta recomenda resposta direcionada e encaminhamento seletivo quando necessário.",
        "errosFrequentes": [
          "Acreditar que responder a todos demonstra transparência",
          "Temer que resposta individual pareça oculta"
        ],
        "variacao": "Trocar para cenário de anúncio institucional coletivo e avaliar quando responder a todos é adequado e quando é excessivo."
      }
    ]
  },
  "m3-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher entre comunicação síncrona e assíncrona impacta velocidade, qualidade da decisão e registro institucional. Em concursos, cobra-se adequação do canal ao cenário, evitando retrabalho e perda de rastreabilidade.",
      "preRequisitos": [
        "Conhecimento de canais de comunicação como e-mail, chat e reunião",
        "Noção de gestão de tempo e colaboração"
      ],
      "objetivosObservaveis": [
        "Definir comunicação síncrona e assíncrona",
        "Indicar quando cada modo é preferível",
        "Relacionar escolha do canal com fuso horário e registro",
        "distinguirá comunicação síncrona e assíncrona e escolherá o canal adequado"
      ],
      "competencias": [
        "Escolha de canal",
        "Gestão de tempo e colaboração"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s1 (Princípios de netiqueta)",
        "m3-u3-t1-s3 (Tom, clareza e estrutura de mensagens profissionais)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A distinção entre síncrono e assíncrono é cobrada em itens sobre eficiência administrativa e uso de tecnologias de informação. A banca avalia critérios de escolha e riscos de excesso de reuniões."
      }
    },
    "niveis": {
      "iniciante": "Síncrona: ocorre em tempo real (reunião, chat ao vivo, telefone) — exige disponibilidade simultânea, adequada para decisões complexas e emergências. Assíncrona: ocorre com defasagem (e-mail, mensagem gravada, documento colaborativo) — permite reflexão, registro e fuso horário diferente. Escolha do canal: urgência, complexidade, necessidade de registro, disponibilidade dos participantes. Excesso de reuniões síncronas gera fadiga; excesso de e-mails assíncronos pode atrasar decisões.",
      "intermediario": "Avaliar trade-off entre rapidez e registro ao escolher o canal. Identificar quando a urgência justifica reunião síncrona e quando a documentação assíncrona reduz erros. Antecipar conflitos de fuso e planejar janelas comuns apenas para pontos críticos.",
      "avancado": "Modelar fluxos de decisão mistos, combinando assíncrono para informação e síncrono para convergência. Medir custo de tempo em reuniões e propor normas de pauta, registro e follow-up assíncrono para reduzir fadiga colaborativa.",
      "especialista": "Desenhar políticas de comunicação institucional que equilibrem transparência, eficiência e registro auditável. Orientar líderes na redução de reuniões desnecessárias e na adoção de práticas de decisão assíncrona com rastreabilidade."
    },
    "comparacoes": [
      {
        "tema": "Síncrona versus Assíncrona",
        "a": {
          "rotulo": "Comunicação síncrona",
          "texto": "Ocorre em tempo real, exige presença simultânea e favorece debate imediato."
        },
        "b": {
          "rotulo": "Comunicação assíncrona",
          "texto": "Ocorre com defasagem, permite reflexão e gera registro durável."
        },
        "diferencaGabarito": "Síncrona prioriza velocidade de interação; assíncrona prioriza registro e inclusão em fusos diferentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Toda decisão deve ser tomada em reunião síncrona.'",
        "porqueErrada": "Nem toda decisão exige debate em tempo real; muitas se beneficiam de reflexão e registro assíncrono.",
        "versaoCorreta": "Incorreto. Reserve reuniões para temas que exigem debate em tempo real e mantenha registro assíncrono quando possível."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Comunicação assíncrona é sempre mais lenta e ineficiente.'",
        "porqueErrada": "A defasagem permite participação de times distribuídos e reduz retrabalho por decisões precipitadas.",
        "versaoCorreta": "Assíncrona pode ser mais eficiente para documentos e aprovações, pois amplia janela de contribuição e mantém histórico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Comunicação síncrona",
        "Comunicação assíncrona",
        "Registro durável",
        "Fuso horário"
      ],
      "regras": [
        "Reservar síncrono para debate complexo e urgência",
        "Usar assíncrono para informação e documentação"
      ],
      "comparacoes": [
        "Síncrona exige presença simultânea; assíncrona permite defasagem"
      ],
      "fluxos": [
        "Avaliar urgência → escolher canal → registrar decisão"
      ],
      "excecoes": [
        "Urgência real pode exigir síncrono mesmo com fuso desfavorável"
      ],
      "palavrasChave": [
        "síncrona",
        "assíncrona",
        "reunião",
        "e-mail",
        "registro",
        "fuso"
      ],
      "checklist": [
        "Urgência justifica síncrono?",
        "Necessita registro durável?",
        "Participantes em fusos diferentes?",
        "Decisão pode aguardar reflexão?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quando a comunicação síncrona é preferível frente à assíncrona em processos administrativos institucionais?",
        "dados": "Equipe precisa decidir sobre mudança de procedimento com impactos legais e operacionais imediatos.",
        "conceitos": [
          "tempo real",
          "debate imediato",
          "urgência"
        ],
        "estrategia": "Mapear necessidade de troca rápida, complexidade e risco de interpretação errada.",
        "execucao": [
          "Identificar se a decisão exige alinhamento imediato",
          "Verificar disponibilidade simultânea dos envolvidos",
          "Escolher reunião ou chamada como canal"
        ],
        "resultado": "Para decisões complexas, negociações, retorno sensível, emergências e situações que exigem troca rápida de informações.",
        "justificativa": "Síncrono permite esclarecimentos instantâneos e reduz risco de mal-entendido em temas sensíveis que exigem negociação.",
        "errosFrequentes": [
          "Usar reunião para informação simples",
          "Achar que síncrono resolve qualquer conflito sem preparação"
        ],
        "variacao": "Trocar para cenário de retorno de desempenho com colaborador remoto e avaliar necessidade de chamada versus e-mail."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma equipe distribuída em três fusos horários precisa aprovar um relatório antes do prazo institucional.",
        "dados": "Relatório finalizado, revisores em Brasília, Lisboa e Nova York, prazo de 48 horas.",
        "conceitos": [
          "assíncrona",
          "registro",
          "fuso horário"
        ],
        "estrategia": "Priorizar registro e inclusão, usando documento colaborativo e comentários, reservando síncrono apenas para impasse.",
        "execucao": [
          "Publicar relatório em documento compartilhado",
          "Solicitar comentários por escrito com prazo",
          "Agendar breve chamada apenas se houver divergência"
        ],
        "resultado": "Assíncrono (documento colaborativo com comentários + e-mail de fechamento) para permitir participação de todos sem exigir horário comum; reservar síncrono apenas para pontos de impasse.",
        "justificativa": "Assíncrono garante participação em fusos diferentes e deixa rastro auditável, enquanto síncrono focado evita fadiga desnecessária.",
        "errosFrequentes": [
          "Exigir reunião em horário inconveniente para todos",
          "Aprovar por e-mail sem consolidar comentários"
        ],
        "variacao": "Mudar para caso de crise operacional que exige decisão imediata e avaliar quando síncrono se torna obrigatório."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Toda decisão deve ser tomada em reunião síncrona para garantir comprometimento da equipe.'",
        "dados": "Gestor agenda reuniões diárias para aprovar pequenas atualizações de planilha que poderiam ser validadas por comentários.",
        "conceitos": [
          "fadiga de reuniões",
          "registro",
          "eficiência"
        ],
        "estrategia": "Analisar custo de tempo versus benefício de interação em tempo real e propor alternativa assíncrona com registro.",
        "execucao": [
          "Listar decisões rotineiras que não exigem debate",
          "Definir fluxo de aprovação assíncrona por e-mail ou documento",
          "Reservar reunião para itens estratégicos"
        ],
        "resultado": "Errado. Muitas decisões podem ser assíncronas, com registro e rastreabilidade; reuniões devem ser reservadas para casos que exigem interação em tempo real.",
        "justificativa": "Excesso de reuniões reduz tempo de trabalho focado e gera fadiga. Assíncrono mantém rastreabilidade e permite reflexão.",
        "errosFrequentes": [
          "Confundir presença com produtividade",
          "Temer que assíncrono reduza engajamento"
        ],
        "variacao": "Apresentar cenário de equipe presencial com alta urgência e discutir limites da adoção assíncrona."
      }
    ]
  },
  "m3-u3-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Mensagens profissionais mal estruturadas geram retrabalho, erro e perda de prazos no serviço público. A prova de concursos cobra os elementos de uma comunicação eficaz — saudação, contexto, pedido, prazo e fechamento — porque a clareza da mensagem determina se a ação solicitada será executada corretamente pelo destinatário.",
      "preRequisitos": [
        "Netiqueta (regras de etiqueta digital)",
        "Noção de comunicação assíncrona (e-mail e mensagens)"
      ],
      "objetivosObservaveis": [
        "Estruturar saudação, contexto, pedido, prazo e fechamento em uma mensagem",
        "Aplicar uma ideia principal por mensagem",
        "Adequar o tom ao público e à relação institucional",
        "Revisar destinatários, anexos e texto antes do envio"
      ],
      "competencias": [
        "Redação profissional (estrutura de mensagem)",
        "Clareza e objetividade na comunicação escrita"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t2-s1 (Princípios de acessibilidade em comunicação) — ambos tratam de comunicação profissional institucional"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Adequação ao conteúdo programático de concursos de TI e comunicação, classificada como média por estimativa pedagógica qualitativa; não se trata de frequência estatística."
      }
    },
    "niveis": {
      "iniciante": "Estrutura recomendada: saudação adequada ao cargo/relação; contexto breve; pedido/ação clara; prazo; fechamento profissional. Clareza: uma ideia principal por mensagem; listas numeradas para ações; evitar ambiguidades. Tom: formal para institucional, cordial para interno; evitar ironia/sarcasmo (mal interpretados por escrito). Assinatura: nome, cargo, unidade, contato. Revisão antes do envio: destinatários, anexos, erros de digitação.",
      "intermediario": "Reescrever uma mensagem estruturada com ação e prazo: aplicar o esqueleto saudação → contexto → pedido → prazo → fechamento, usar uma ideia principal por mensagem e listas numeradas para várias ações, adequando o tom ao destinatário e revisando anexos antes de enviar.",
      "avancado": "Ajustar o tom de acordo com o destinatário e a sensibilidade do assunto: formal para comunicação externa e autoridades, cordial para equipe interna, evitando ironia e sarcasmo que são mal interpretados por escrito e comprometem a impessoalidade institucional exigida no serviço público.",
      "especialista": "Consolidar um pedido complexo em mensagem única sem ambiguidade: reunir múltiplas ações em uma ideia principal com listas numeradas, definir prazo claro para cada ação, adequar tom à sensibilidade do tema e revisar destinatários, anexos e ortografia antes do envio."
    },
    "comparacoes": [
      {
        "tema": "Mensagem direta vs. mensagem prolixa",
        "a": {
          "rotulo": "Direta",
          "texto": "Preserva a ação e a clareza; o interlocutor identifica rapidamente o que se pede."
        },
        "b": {
          "rotulo": "Prolixa",
          "texto": "Dilui a ação em excesso de texto; aumenta a chance de o interlocutor não identificar a ação solicitada."
        },
        "diferencaGabarito": "A direta foca na ação; a prolixa dilui o conteúdo e dificulta a compreensão do que é pedido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Ironia em e-mail profissional é inofensiva.",
        "porqueErrada": "Ironia e sarcasmo por escrito são frequentemente mal interpretados, pois falta o tom de voz e a expressão facial.",
        "versaoCorreta": "Evite ironia e sarcasmo em comunicação institucional; use tom claro e direto."
      },
      {
        "afirmacaoEquivocada": "O assunto pode ficar vago; o corpo explica.",
        "porqueErrada": "O assunto facilita a busca, o encaminhamento e a priorização da mensagem pelo destinatário.",
        "versaoCorreta": "Use assunto descritivo e específico para que o destinatário identifique o tema imediatamente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "saudação",
        "contexto",
        "pedido",
        "prazo",
        "fechamento",
        "assinatura",
        "revisão"
      ],
      "regras": [
        "Uma ideia principal por mensagem",
        "Use listas numeradas quando houver várias ações",
        "Assinatura com nome, cargo, unidade e contato"
      ],
      "comparacoes": [
        "Tom formal para institucional; tom cordial para equipe interna"
      ],
      "fluxos": [
        "Saudação → contexto → pedido/ação → prazo → fechamento → assinatura"
      ],
      "excecoes": [
        "Ironia e sarcasmo devem ser evitados por escrito (mal interpretados)"
      ],
      "palavrasChave": [
        "clareza",
        "estrutura",
        "tom",
        "assinatura",
        "revisão",
        "prazo"
      ],
      "checklist": [
        "Saudação adequada ao cargo?",
        "Contexto breve?",
        "Pedido ou ação explícito?",
        "Prazo definido?",
        "Destinatários e anexos revisados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual é a estrutura mínima recomendada para um e-mail profissional enviado em ambiente institucional?",
        "dados": "E-mail profissional; elementos: saudação, contexto, pedido, prazo, fechamento, assinatura.",
        "conceitos": [
          "estrutura de mensagem",
          "saudação",
          "fechamento"
        ],
        "estrategia": "Apresentar o esqueleto da mensagem profissional: saudação, contexto, pedido, prazo, fechamento e assinatura, cada um com função definida.",
        "execucao": [
          "1. Escrever saudação adequada ao cargo e à relação.",
          "2. Apresentar contexto breve que situa o assunto.",
          "3. Explicitar o pedido ou ação solicitada.",
          "4. Informar o prazo, quando houver.",
          "5. Fechar cordialmente com assinatura (nome, cargo, unidade, contato)."
        ],
        "resultado": "Saudação + contexto + pedido/ação + prazo + fechamento + assinatura.",
        "justificativa": "O esqueleto garante que o destinatário identifique quem escreve, o assunto, o que se pede e até quando, reduzindo ambiguidades e idas e vindas.",
        "errosFrequentes": [
          "Omitir o prazo, gerando idas e vindas.",
          "Esquecer a assinatura com nome, cargo e unidade."
        ],
        "variacao": "E-mail solicitando aprovação de relatório com prazo de três dias úteis, mantendo a mesma estrutura de seis elementos."
      },
      {
        "tipo": "aplicacao",
        "problema": "Escreva um e-mail solicitando aprovação de um relatório, definindo prazo para resposta.",
        "dados": "Destinatário: gestor da unidade; assunto: aprovação do relatório de março; anexo: relatório PDF; prazo: até 15/04/2026.",
        "conceitos": [
          "pedido explícito",
          "prazo",
          "assinatura",
          "anexo"
        ],
        "estrategia": "Aplicar a estrutura profissional em cenário real: saudação formal, contexto do relatório, pedido de aprovação, prazo concreto, fechamento e assinatura completa.",
        "execucao": [
          "1. Saudação formal: 'Prezado(a) [nome]'.",
          "2. Contexto: segue em anexo o relatório de março para análise.",
          "3. Pedido: solicito aprovação do relatório.",
          "4. Prazo: até 15/04/2026.",
          "5. Fechamento e assinatura com nome, cargo, unidade e contato."
        ],
        "resultado": "'Prezado(a) [nome], segue em anexo o relatório de março para análise. Solicito aprovação até 15/04/2026. Disponível para esclarecimentos. Atenciosamente, [nome], [cargo], [unidade], [contato].'",
        "justificativa": "O pedido fica explícito com prazo concreto e anexo nomeado, permitindo que o gestor decida e responda dentro do prazo esperado.",
        "errosFrequentes": [
          "Esquecer de anexar o relatório antes de enviar.",
          "Não definir prazo, atrasando a resposta do gestor."
        ],
        "variacao": "Solicitar liberação de verificação de diária com prazo de cinco dias úteis, usando a mesma estrutura e tom formal."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Ironia em e-mail profissional é inofensiva porque o destinatário entende o tom.'",
        "dados": "E-mail institucional; afirmação de que ironia/sarcasmo não causam prejuízo na comunicação escrita.",
        "conceitos": [
          "tom adequado",
          "ironia",
          "interpretação por escrito"
        ],
        "estrategia": "Demonstrar que a ironia por escrito carece de tom de voz e expressão facial, sendo frequentemente mal interpretada, e por isso deve ser evitada institucionalmente.",
        "execucao": [
          "1. Identificar a afirmação sobre ironia ser inofensiva.",
          "2. Reconhecer que a escrita não transmite tom de voz nem expressão facial.",
          "3. Concluir que ironia e sarcasmo geram ambiguidade e risco de ofensa.",
          "4. Determinar que devem ser evitados em comunicação institucional."
        ],
        "resultado": "Errado. Ironia e sarcasmo por escrito frequentemente são mal interpretados; evite-os em comunicação institucional.",
        "justificativa": "Sem os sinais não verbais da fala, a ironia pode ser lida como ofensa ou desinteresse, comprometendo a impessoalidade e a clareza exigidas no serviço público.",
        "errosFrequentes": [
          "Acreditar que o destinatário 'entende a brincadeira' por escrito.",
          "Usar sarcasmo para criticar, gerando constrangimento institucional."
        ],
        "variacao": "Afirmação: 'Emoji suaviza qualquer tom informal em e-mail oficial.' — Errado: emojis não substituem a adequação do tom ao cargo e à instituição."
      }
    ]
  },
  "m3-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A comunicação institucional deve alcançar todas as pessoas, independentemente de deficiência visual, auditiva, motora ou cognitiva. Em concursos cobram os quatro princípios da WCAG (perceptível, operável, compreensível, robusto) e suas aplicações práticas, porque acessibilidade é requisito de inclusão, e não favor ou diferencial opcional.",
      "preRequisitos": [
        "Noção de comunicação digital",
        "Noção de público diverso"
      ],
      "objetivosObservaveis": [
        "Definir acessibilidade digital",
        "Listar os princípios perceptível, operável, compreensível e robusto",
        "Aplicar exemplos práticos (alt text, legendas, contraste, estrutura)",
        "Reconhecer o caráter inclusivo da acessibilidade"
      ],
      "competencias": [
        "Comunicação inclusiva",
        "Aplicação de boas práticas de acessibilidade digital"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s3 (Tom, clareza e estrutura de mensagens profissionais) — ambos integram a comunicação profissional institucional"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O tema de acessibilidade digital faz parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Acessibilidade digital: garantir que pessoas com deficiência (visual, auditiva, motora, cognitiva) possam perceber, operar e compreender a comunicação. Princípios (WCAG): perceptível, operável, compreensível, robusto. Aplicação: textos alternativos (alt text) em imagens; legendas/transcrições em vídeos e áudios; contraste adequado; evitar depender apenas de cor; estrutura semântica (títulos, listas); linguagem clara.",
      "intermediario": "Aplicar os quatro princípios da WCAG a exemplos concretos: alt text em imagens para leitores de tela, legendas revisadas em vídeos, contraste mínimo entre texto e fundo, evitar cor como único indicador, estrutura semântica com títulos e listas reais, linguagem clara e previsível.",
      "avancado": "Detectar barreiras em uma peça de comunicação e propor correções: verificar se imagens têm alt text, se vídeos possuem legendas revisadas, se a cor não é o único meio de informação, se a ordem de leitura faz sentido e se o contraste atende ao mínimo exigido.",
      "especialista": "Revisar um fluxo institucional garantindo acessibilidade de ponta a ponta: auditar documentos, mensagens e páginas da instituição contra os quatro princípios WCAG, definir padrões de correção e treinar produtores de conteúdo nas boas práticas de acessibilidade."
    },
    "comparacoes": [
      {
        "tema": "Alt text vs. legenda de imagem",
        "a": {
          "rotulo": "Alt text",
          "texto": "Descreve a imagem para leitores de tela; não é visível a todos."
        },
        "b": {
          "rotulo": "Legenda",
          "texto": "É visível a todos e contextualiza a imagem; não substitui o alt text."
        },
        "diferencaGabarito": "O alt text serve a tecnologia assistiva; a legenda serve a todos os leitores; não se substituem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Acessibilidade é opcional.",
        "porqueErrada": "A acessibilidade é requisito de inclusão, não um diferencial; exclui pessoas com deficiência quando ausente.",
        "versaoCorreta": "Acessibilidade deve ser considerada no design e na produção, como requisito institucional."
      },
      {
        "afirmacaoEquivocada": "Legenda automática dispensa revisão.",
        "porqueErrada": "A legenda automática erra e não cobre todo o conteúdo relevante; legendas críticas precisam ser revisadas.",
        "versaoCorreta": "Revisar legendas automáticas e complementar com transcrição quando necessário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "acessibilidade",
        "WCAG",
        "perceptível",
        "operável",
        "compreensível",
        "robusto",
        "tecnologia assistiva"
      ],
      "regras": [
        "Texto alternativo em imagens",
        "Legendas e transcrições em vídeos e áudios",
        "Contraste adequado; não depender apenas de cor"
      ],
      "comparacoes": [
        "Acessibilidade foca grupos com deficiência; usabilidade foca o uso geral"
      ],
      "fluxos": [
        "Produção → estrutura semântica → alternativa textual → revisão com tecnologia assistiva"
      ],
      "excecoes": [
        "Cor como único indicador de status exclui daltônicos e leitores de tela"
      ],
      "palavrasChave": [
        "acessibilidade",
        "WCAG",
        "alt text",
        "legenda",
        "contraste",
        "inclusão"
      ],
      "checklist": [
        "Imagens têm alt text?",
        "Vídeos têm legendas revisadas?",
        "Contraste mínimo respeitado?",
        "Cor não é único indicador?",
        "Estrutura semântica usada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que é alt text e por que ele é importante para tornar uma imagem acessível na comunicação digital institucional?",
        "dados": "Imagem em página/institucional; leitor de tela; pessoas com deficiência visual.",
        "conceitos": [
          "alt text",
          "leitor de tela",
          "deficiência visual"
        ],
        "estrategia": "Explicar que o texto alternativo descreve a imagem para quem não enxerga, permitindo acesso à informação e também ajudando na indexação.",
        "execucao": [
          "1. Identificar a imagem que precisa de descrição.",
          "2. Escrever texto alternativo conciso e descritivo do conteúdo da imagem.",
          "3. Associar o alt text ao elemento de imagem no código ou editor.",
          "4. Verificar com leitor de tela se a descrição faz sentido."
        ],
        "resultado": "Texto alternativo que descreve a imagem para leitores de tela; essencial para pessoas com deficiência visual e também para indexação.",
        "justificativa": "O alt text converte informação visual em textual, garantindo que pessoas com deficiência visual acessem o mesmo conteúdo dos demais leitores.",
        "errosFrequentes": [
          "Deixar imagens sem alt text.",
          "Usar alt text genérico como 'imagem' ou 'foto' sem descrever o conteúdo."
        ],
        "variacao": "Descrever um gráfico de barras de vendas com alt text que transmita os dados principais, não apenas 'gráfico'."
      },
      {
        "tipo": "aplicacao",
        "problema": "Quais recursos aplicar para tornar um vídeo de reunião institucional acessível a todos os participantes?",
        "dados": "Vídeo de reunião; participantes surdos e com deficiência auditiva; ambiente possivelmente ruidoso.",
        "conceitos": [
          "legenda",
          "transcrição",
          "player acessível"
        ],
        "estrategia": "Aplicar recursos concretos: adicionar legendas (closed captions), fornecer transcrição, descrever visualmente o conteúdo importante e garantir que o player seja acessível.",
        "execucao": [
          "1. Adicionar legendas (closed captions) ao vídeo.",
          "2. Fornecer transcrição completa do áudio.",
          "3. Descrever visualmente o conteúdo importante (slides, demonstrações).",
          "4. Garantir que o player de vídeo seja navegável por teclado e leitor de tela."
        ],
        "resultado": "Quatro recursos em conjunto: legendas (closed captions) no vídeo, transcrição completa do áudio, descrição visual do conteúdo importante e um player que seja acessível ao próprio uso de teclado e a leitor de tela.",
        "justificativa": "Legendas e transcrição convertem o áudio em texto, permitindo que pessoas surdas ou com deficiência auditiva compreendam a reunião.",
        "errosFrequentes": [
          "Depender apenas da legenda automática sem revisão.",
          "Esquecer de descrever o conteúdo visual (slides) para quem não enxerga."
        ],
        "variacao": "Tornar um vídeo de treinamento acessível adicionando legenda em português e transcrição para download."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação equivocada: 'Acessibilidade é responsabilidade apenas da área de TI na instituição pública.'",
        "dados": "Instituição pública; produção de comunicação; afirmação de que acessibilidade cabe somente à TI.",
        "conceitos": [
          "responsabilidade compartilhada",
          "Lei Brasileira de Inclusão",
          "eMAG"
        ],
        "estrategia": "Explicar que acessibilidade é responsabilidade de todos que produzem comunicação, não só da TI, e que a Lei Brasileira de Inclusão (Lei 13.146/2015) e o eMAG orientam o setor público.",
        "execucao": [
          "1. Identificar a afirmação que restringe acessibilidade à TI.",
          "2. Reconhecer que produtores de conteúdo, designers e comunicadores também criam barreiras.",
          "3. Lembrar que a Lei 13.146/2015 e o eMAG orientam o setor público.",
          "4. Concluir que acessibilidade é responsabilidade compartilhada."
        ],
        "resultado": "Errado. Acessibilidade é responsabilidade de todos que produzem comunicação; a Lei Brasileira de Inclusão (Lei 13.146/2015) e normas de acessibilidade digital (eMAG) orientam o setor público.",
        "justificativa": "Barreiras de acessibilidade são criadas na produção de conteúdo (imagens sem alt text, vídeos sem legenda), de modo que todos os envolvidos devem cuidar da inclusão.",
        "errosFrequentes": [
          "Acreditar que apenas desenvolvedores precisam se preocupar com acessibilidade.",
          "Ignorar o eMAG e a Lei de Inclusão na produção institucional."
        ],
        "variacao": "Afirmação: 'Acessibilidade só importa para sites, não para documentos.' — Errado: documentos e mensagens também devem ser acessíveis."
      }
    ]
  },
  "m3-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A disponibilidade de recursos de acessibilidade varia por plataforma, plano e versão; generalizar gera erro e prejudica o usuário. Em concursos cobram os recursos comuns, o caráter condicional deles e o cuidado de verificar a documentação oficial antes de afirmar uma capacidade.",
      "preRequisitos": [
        "Princípios de acessibilidade"
      ],
      "objetivosObservaveis": [
        "Citar recursos comuns de acessibilidade em plataformas",
        "Indicar que os recursos são condicionais (plataforma, plano, versão)",
        "Orientar a verificação na documentação oficial do produto",
        "Relacionar recurso de acessibilidade à necessidade do usuário"
      ],
      "competencias": [
        "Seleção de recurso acessível",
        "Avaliação condicional de funcionalidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t2-s1 (Princípios de acessibilidade em comunicação) — base dos princípios WCAG aplicados às plataformas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Recursos de acessibilidade em plataformas de comunicação (legendas, leitores de tela, alto contraste, atalhos) integram o conteúdo programático de TI e cargos administrativos, com itens sobre disponibilidade condicional por plano/versão, escolha de ferramenta acessível para surdos, cegos ou mobilidade reduzida, distinção entre recurso nativo e gambiarra, e verificação de que legenda automática não garante acessibilidade plena. A classificação média reflete a presença do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Recursos comuns: leitores de tela compatíveis; legendas automáticas (live captions) em reuniões; transcrição de áudio; atalhos de teclado; alto contraste; tamanho de fonte ajustável; intérprete de libras (quando disponível); descrição de slides. A disponibilidade e qualidade desses recursos variam por plataforma e plano; verificar documentação oficial da plataforma e versão utilizada. Não generalizar entre plataformas ou planos.",
      "intermediario": "Relacionar recurso e necessidade (surdo, cego, mobilidade reduzida): legenda para surdo, leitor de tela para cego, atalhos para mobilidade reduzida. Confirmar que cada recurso existe na plataforma, no plano e na versão usados antes de depender dele, e prever alternativa quando faltar.",
      "avancado": "Avaliar se uma plataforma atende a um requisito de acessibilidade específico: verificar leitor de tela, legendas revisadas, alto contraste e atalhos no contexto concreto (qual plataforma, qual plano, qual versão) antes de adotar a ferramenta institucionalmente.",
      "especialista": "Planejar contornar a ausência de um recurso com alternativa equivalente: por exemplo, oferecer material textual complementar à legenda automática quando não houver legenda revisada, garantindo acesso mesmo com limitações da plataforma."
    },
    "comparacoes": [
      {
        "tema": "Legenda automática vs. legenda revisada",
        "a": {
          "rotulo": "Automática",
          "texto": "É imediata, mas sujeita a erros de transcrição."
        },
        "b": {
          "rotulo": "Revisada",
          "texto": "É confiável, pois passou por revisão humana."
        },
        "diferencaGabarito": "A automática é rápida e pode errar; a revisada garante confiabilidade do conteúdo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Toda plataforma tem legendas ao vivo gratuitas.",
        "porqueErrada": "Depende do plano; nem toda plataforma oferece o recurso ou o oferece sem custo.",
        "versaoCorreta": "Conferir a documentação oficial da plataforma e do plano antes de assumir a disponibilidade."
      },
      {
        "afirmacaoEquivocada": "A legenda automática dispensa acessibilidade.",
        "porqueErrada": "Ela erra e não cobre todo o conteúdo relevante; legendas críticas precisam ser revisadas.",
        "versaoCorreta": "Revisar legendas automáticas e complementar com transcrição quando necessário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "leitor de tela",
        "legenda",
        "transcrição",
        "atalhos",
        "contraste",
        "Libras"
      ],
      "regras": [
        "Recursos variam por plataforma, plano e versão",
        "Verificar documentação oficial antes de assumir disponibilidade",
        "Prever alternativa quando o recurso faltar"
      ],
      "comparacoes": [
        "Recurso padrão existe independentemente do plano; recurso condicional depende dele"
      ],
      "fluxos": [
        "Verificar plataforma → plano → versão → confirmar recurso → prever alternativa"
      ],
      "excecoes": [
        "Intérprete de Libras e descrição de conteúdo compartilhado só quando disponível"
      ],
      "palavrasChave": [
        "leitor de tela",
        "legenda",
        "transcrição",
        "atalho",
        "contraste",
        "plataforma"
      ],
      "checklist": [
        "O recurso existe na plataforma?",
        "Depende do plano?",
        "Qual a versão?",
        "Há alternativa se faltar?",
        "Documentação oficial consultada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que são live captions (legendas ao vivo) e para que servem durante uma reunião online?",
        "dados": "Reunião online; legendas geradas em tempo real; pessoas com deficiência auditiva; ambiente ruidoso.",
        "conceitos": [
          "legenda ao vivo",
          "live captions",
          "deficiência auditiva"
        ],
        "estrategia": "Explicar que as live captions são legendas geradas automaticamente em tempo real durante a reunião, úteis para acessibilidade.",
        "execucao": [
          "1. Ativar o recurso de legendas ao vivo na plataforma da reunião.",
          "2. Acompanhar as legendas geradas em tempo real na tela.",
          "3. Usar as legendas para compreender o áudio em ambientes ruidosos.",
          "4. Observar que a precisão pode variar e revisar se crítico."
        ],
        "resultado": "Legendas geradas em tempo real durante uma reunião, úteis para pessoas com deficiência auditiva e para participantes em ambientes ruidosos.",
        "justificativa": "As legendas ao vivo convertem o áudio falado em texto na tela, permitindo acompanhamento mesmo sem ouvir o áudio claramente.",
        "errosFrequentes": [
          "Acreditar que a legenda automática está sempre correta.",
          "Esquecer que o recurso pode não existir em todas as plataformas."
        ],
        "variacao": "Ativar live captions em uma reunião de treinamento com muitos termos técnicos, verificando a precisão da transcrição."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como planejar uma reunião acessível verificando os recursos disponíveis na plataforma e no plano contratado?",
        "dados": "Plataforma de videoconferência; plano contratado; participantes com necessidades diversas (surdo, cego, mobilidade reduzida).",
        "conceitos": [
          "recurso condicional",
          "plataforma",
          "plano",
          "alternativa equivalente"
        ],
        "estrategia": "Planejar a reunião verificando quais recursos de acessibilidade a plataforma oferece no plano contratado e prevendo alternativas quando faltar.",
        "execucao": [
          "1. Verificar quais recursos de acessibilidade a plataforma oferece.",
          "2. Confirmar se os recursos dependem do plano contratado.",
          "3. Enviar pauta e materiais com antecedência.",
          "4. Ativar legendas e disponibilizar gravação com transcrição.",
          "5. Oferecer canal de perguntas acessível e material textual complementar."
        ],
        "resultado": "Enviar pauta e materiais com antecedência, ativar legendas, disponibilizar gravação com transcrição, usar linguagem clara e oferecer canal de perguntas acessível.",
        "justificativa": "A verificação prévia dos recursos e o envio de materiais antecipados garantem que participantes com necessidades diferentes consigam acompanhar a reunião.",
        "errosFrequentes": [
          "Assumir que todas as plataformas oferecem os mesmos recursos.",
          "Não prever alternativa quando um recurso de acessibilidade falta."
        ],
        "variacao": "Planejar uma reunião com intérprete de Libras quando a plataforma não oferecer a janela do intérprete nativamente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação equivocada: 'Todas as plataformas oferecem os mesmos recursos de acessibilidade, independentemente do plano.'",
        "dados": "Múltiplas plataformas de comunicação; planos diferentes; afirmação de uniformidade de recursos.",
        "conceitos": [
          "recurso condicional",
          "plataforma",
          "plano",
          "documentação oficial"
        ],
        "estrategia": "Demonstrar que os recursos de acessibilidade variam por plataforma, plano e versão, e que generalizar gera erro para o usuário.",
        "execucao": [
          "1. Identificar a afirmação de uniformidade entre plataformas.",
          "2. Reconhecer que presença, qualidade e configuração dependem da plataforma, do plano e da versão.",
          "3. Concluir que não se deve generalizar a disponibilidade de recursos.",
          "4. Determinar que se deve consultar a documentação oficial do produto."
        ],
        "resultado": "Errado. Recursos variam por plataforma, plano e versão; consultar documentação oficial antes de assumir disponibilidade.",
        "justificativa": "Cada plataforma implementa acessibilidade de forma diferente, e um recurso presente num plano pode estar ausente noutro, prejudicando o usuário que generaliza.",
        "errosFrequentes": [
          "Acreditar que todos os recursos estão disponíveis em qualquer plano.",
          "Não consultar a documentação oficial antes de assumir a disponibilidade."
        ],
        "variacao": "Afirmação: 'Legendas ao vivo são sempre gratuitas em todas as plataformas.' — Errado: dependem do plano e da versão do produto."
      }
    ]
  },
  "m3-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Documentos e mensagens são a entrega final da comunicação; acessibilidade neles torna o conteúdo utilizável por todos. Concursos cobram estilos de título, listas reais, tabelas com cabeçalho, alt text, links descritivos e contraste, porque acessibilidade torna o conteúdo utilizável inclusive por pessoas com deficiência.",
      "preRequisitos": [
        "Princípios de acessibilidade",
        "Uso de editor de texto"
      ],
      "objetivosObservaveis": [
        "Usar estilos de título (Heading) em vez de negrito",
        "Construir listas e tabelas acessíveis",
        "Nomear links de forma descritiva",
        "Garantir contraste e fontes legíveis"
      ],
      "competencias": [
        "Produção de documentos acessíveis",
        "Revisão de acessibilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t2-s1 (Princípios de acessibilidade em comunicação) — base dos princípios aplicados a documentos e mensagens"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A produção de documentos acessíveis faz parte do conteúdo programático. A classificação é qualitativa e reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Boas práticas: usar estilos de título (Heading) em vez de negrito; listas reais (não hífens manuais); tabelas com cabeçalho; evitar imagens com texto embutido sem alt text; nomear links descritivamente (evitar 'clique aqui'); garantir contraste mínimo; fornecer versão acessível de PDFs; usar fontes legíveis. Em e-mails: texto simples quando possível; evitar excesso de imagens; testar com leitor de tela.",
      "intermediario": "Construir uma tabela acessível com linha de cabeçalho identificada e nomear links descritivamente: usar estilos de título hierárquicos, listas reais em vez de hífens manuais, evitar imagens com texto embutido sem alt text e garantir contraste mínimo entre texto e fundo.",
      "avancado": "Revisar um PDF acessível e corrigir ordem de leitura: verificar que o PDF não é apenas imagem escaneada, aplicar reconhecimento de texto quando necessário, confirmar a ordem lógica de leitura e garantir tags de estrutura adequadas.",
      "especialista": "Auditar um conjunto de documentos e padronizar a acessibilidade: revisar estilos, listas, tabelas, alt text, links e contraste em toda a produção documental da instituição e definir padrões de revisão com tecnologia assistiva."
    },
    "comparacoes": [
      {
        "tema": "Estilo de título vs. negrito manual",
        "a": {
          "rotulo": "Estilo de título",
          "texto": "Cria estrutura navegável para leitores de tela e permite geração de sumário."
        },
        "b": {
          "rotulo": "Negrito manual",
          "texto": "Apenas destaca visualmente o texto, sem criar estrutura navegável."
        },
        "diferencaGabarito": "O estilo de título cria estrutura acessível; o negrito só destaca visualmente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Negrito no lugar do título é equivalente.",
        "porqueErrada": "O negrito não cria estrutura navegável para leitores de tela, apenas destaca visualmente.",
        "versaoCorreta": "Usar estilos de título (Heading) para criar estrutura navegável."
      },
      {
        "afirmacaoEquivocada": "PDF escaneado já é acessível.",
        "porqueErrada": "Uma imagem escaneada não tem camada de texto, portanto não é lida por leitores de tela.",
        "versaoCorreta": "Aplicar reconhecimento de texto (OCR) e corrigir a ordem de leitura do PDF."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "estilo de título",
        "lista real",
        "tabela com cabeçalho",
        "alt text",
        "link descritivo",
        "contraste"
      ],
      "regras": [
        "Usar estilos de título (Heading) em vez de negrito",
        "Listas reais em vez de hífens manuais",
        "Tabelas com linha de cabeçalho identificada"
      ],
      "comparacoes": [
        "Link descritivo informa o destino; 'clique aqui' não faz sentido fora de contexto"
      ],
      "fluxos": [
        "Documento estruturado → estilos de título → listas reais → alt text → PDF com tags"
      ],
      "excecoes": [
        "PDF escaneado sem camada de texto não é acessível"
      ],
      "palavrasChave": [
        "estilo de título",
        "lista real",
        "tabela",
        "alt text",
        "link descritivo",
        "contraste"
      ],
      "checklist": [
        "Estilos de título usados?",
        "Listas reais (não hífens)?",
        "Tabelas com cabeçalho?",
        "Links descritos (não 'clique aqui')?",
        "Contraste mínimo respeitado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que evitar o texto genérico 'clique aqui' em links de documentos e mensagens institucionais?",
        "dados": "Link em documento ou e-mail; leitor de tela lê o texto do link fora de contexto.",
        "conceitos": [
          "link descritivo",
          "leitor de tela",
          "contexto fora do link"
        ],
        "estrategia": "Explicar que leitores de tela leem o texto do link fora de contexto, então 'clique aqui' não informa o destino; usar descrição do destino.",
        "execucao": [
          "1. Identificar o link no documento ou mensagem.",
          "2. Substituir 'clique aqui' por descrição do destino (ex.: 'Acesse o relatório de março').",
          "3. Verificar que o texto do link faz sentido lido sozinho.",
          "4. Testar com leitor de tela, quando relevante."
        ],
        "resultado": "Leitores de tela leem o texto do link fora de contexto; 'clique aqui' não informa o destino. Use descrição do destino, ex.: 'Acesse o relatório de março'.",
        "justificativa": "O texto descritivo do link permite que o usuário, inclusive via leitor de tela, saiba para onde será direcionado sem precisar do contexto ao redor.",
        "errosFrequentes": [
          "Usar 'clique aqui' ou 'acesse aqui' como texto do link.",
          "Deixar o texto do link sem sentido quando lido isoladamente."
        ],
        "variacao": "Substituir 'clique aqui' por 'baixar o edital 2026' em um link de documento oficial."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como estruturar um documento acessível usando estilos de título, listas reais e tabelas com cabeçalho em um editor de texto?",
        "dados": "Documento de texto; editor com estilos (Heading); imagens; tabelas; links.",
        "conceitos": [
          "estilo de título",
          "lista real",
          "tabela com cabeçalho",
          "alt text",
          "contraste"
        ],
        "estrategia": "Aplicar estrutura semântica: estilos de título hierárquicos, listas reais, tabelas com cabeçalho, alt text em imagens e contraste adequado.",
        "execucao": [
          "1. Aplicar estilos de título hierárquicos (H1, H2, H3) em vez de negrito manual.",
          "2. Usar listas reais (bullet/numeração) em vez de hífens manuais.",
          "3. Criar tabelas com linha de cabeçalho identificada.",
          "4. Inserir alt text descritivo em imagens.",
          "5. Garantir contraste mínimo entre texto e fundo."
        ],
        "resultado": "Usar estilos de título hierárquicos (H1, H2...), listas reais, tabelas com cabeçalho, alt text em imagens e contraste adequado.",
        "justificativa": "A estrutura semântica permite navegação por leitores de tela, geração de sumário e leitura acessível do documento por todos os usuários.",
        "errosFrequentes": [
          "Usar negrito manual no lugar de estilos de título.",
          "Fazer listas com hífens manuais em vez de listas reais."
        ],
        "variacao": "Estruturar um relatório institucional com sumário automático gerado a partir dos estilos de título."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação equivocada: 'PDF é sempre um formato acessível, independentemente de como foi gerado.'",
        "dados": "PDF gerado; imagem escaneada sem camada de texto; afirmação de que todo PDF é acessível.",
        "conceitos": [
          "PDF acessível",
          "reconhecimento de texto (OCR)",
          "ordem de leitura",
          "tags de PDF"
        ],
        "estrategia": "Explicar que PDFs podem ser inacessíveis se forem imagens escaneadas ou sem estrutura, e que preferir PDF com texto selecionável e tags ou fornecer versão acessível.",
        "execucao": [
          "1. Identificar a afirmação de que todo PDF é acessível.",
          "2. Reconhecer que PDFs escaneados são imagens sem camada de texto.",
          "3. Concluir que tais PDFs não são lidos por leitores de tela.",
          "4. Determinar aplicar reconhecimento de texto e corrigir ordem de leitura, ou fornecer versão acessível."
        ],
        "resultado": "Errado. PDFs podem ser inacessíveis se forem imagens escaneadas ou sem estrutura; prefira PDF com texto selecionável e tags, ou forneça versão acessível.",
        "justificativa": "Um PDF acessível requer texto selecionável, tags de estrutura e ordem de leitura correta; sem isso, leitores de tela não conseguem ler o conteúdo.",
        "errosFrequentes": [
          "Acreditar que qualquer PDF é acessível por ser digital.",
          "Enviar PDF escaneado sem reconhecimento de texto (OCR)."
        ],
        "variacao": "Afirmação: 'Converter um documento do Word para PDF preserva automaticamente a acessibilidade.' — Errado: depende de usar estilos e exportar com tags."
      }
    ]
  },
  "m3-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Comunicação institucional padroniza canais, identidade visual, tom de voz, modelos de documentos e protocolos de resposta de um órgão. Seus objetivos — clareza, consistência, transparência e rastreabilidade — e o marco legal que a orienta no serviço público são o eixo dos itens de concurso sobre o tema.",
      "preRequisitos": [
        "Noção de comunicação profissional e de administração pública",
        "Distinção entre público interno (colaboradores) e público externo (cidadãos, parceiros e imprensa)",
        "Conceitos básicos de transparência administrativa e de proteção de dados pessoais"
      ],
      "objetivosObservaveis": [
        "Definir comunicação institucional e listar seus objetivos de clareza, consistência, transparência e rastreabilidade",
        "Distinguir comunicação interna de externa quanto a público, registro e canais",
        "Citar a Lei de Acesso à Informação (Lei nº 12.527/2011) e a Lei de Governo Digital (Lei nº 14.129/2021) como marco do setor público",
        "Reconhecer que a publicidade institucional observa os limites legais de proteção de dados pessoais"
      ],
      "competencias": [
        "Alinhar mensagens à identidade e ao tom institucionais do órgão",
        "Conciliar transparência e proteção de dados na divulgação de informações",
        "Avaliar criticamente práticas setoriais que fragmentam o padrão de comunicação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s3 (Tom, clareza e estrutura de mensagens profissionais) — o tom padronizado é insumo do guia de estilo institucional",
        "m3-u3-t3-s2 (Escolha de canais e rastreabilidade) — os canais oficiais são objeto da padronização institucional",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — o limite legal da publicidade do órgão"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Cobra-se a distinção entre comunicação interna e externa e o limite entre transparência e proteção de dados; LAI e Lei de Governo Digital aparecem como marco do dever de publicidade. Avaliação qualitativa do programa, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Comunicação institucional: padronização de canais, identidade visual, tom de voz, templates de documentos e mensagens, assinatura institucional, protocolos de resposta. Objetivos: clareza, consistência, transparência, rastreabilidade. Distinguir comunicação interna (colaboradores) de externa (cidadãos, parceiros). Em órgãos públicos, observar LAI (Lei 12.527/2011) e Lei de Governo Digital (Lei 14.129/2021) quanto a transparência e canais digitais.",
      "intermediario": "No nível intermediário, o candidato aplica o padrão: redige a mensagem no tom e na identidade do órgão, seleciona o modelo de documento adequado ao público e usa assinatura e protocolos institucionais. A questão típica apresenta uma mensagem concreta e pergunta se ela está conforme o padrão de comunicação do órgão.",
      "avancado": "No nível avançado, o desafio é conciliar transparência e proteção de dados: divulgar o ato administrativo sem expor informação pessoal ou protegida. Exige dominar o limite legal da publicidade e saber que a Lei nº 12.527/2011 assegura acesso à informação, mas não autoriza a divulgação irrestrita de dados pessoais.",
      "especialista": "No nível especialista, o candidato revisa o plano de comunicação de um órgão e aponta inconsistências: canais não oficializados, setores com formatos próprios e ausência de protocolo de resposta. A tarefa é diagnosticar os desvios do padrão e propor a correção conforme o marco legal."
    },
    "comparacoes": [
      {
        "tema": "Comunicação interna x comunicação externa",
        "a": {
          "rotulo": "Comunicação interna",
          "texto": "Voltada a colaboradores, circula em canais internos e sustenta-se em registros de trabalho; admite linguagem técnica e menor formalidade, sem perder a rastreabilidade."
        },
        "b": {
          "rotulo": "Comunicação externa",
          "texto": "Voltada a cidadãos, parceiros e imprensa, usa canais oficiais e a identidade institucional; exige clareza, formalidade compatível e observância dos limites de publicidade."
        },
        "diferencaGabarito": "Mudam o público, o canal e o registro exigido: confundir os dois leva a aplicar o padrão errado, e o gabarito depende de identificar a quem a mensagem se dirige."
      },
      {
        "tema": "Transparência administrativa x proteção de dados pessoais",
        "a": {
          "rotulo": "Transparência administrativa",
          "texto": "Dever de publicar atos, contratos e informações de interesse público, orientado pela Lei nº 12.527/2011 e pela Lei de Governo Digital (Lei nº 14.129/2021)."
        },
        "b": {
          "rotulo": "Proteção de dados pessoais",
          "texto": "Limite à publicidade: informações pessoais e legalmente protegidas não se divulgam, ainda que o assunto seja de interesse público."
        },
        "diferencaGabarito": "Transparência não significa divulgar tudo: o gabarito exige publicar o administrativo resguardando o dado pessoal e o sigilo legal."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Comunicação institucional pode ser informal como a pessoal.'",
        "porqueErrada": "A forma da mensagem representa a instituição; informalidade excessiva compromete a clareza, a identificação do remetente e a rastreabilidade, gerando ambiguidade e risco.",
        "versaoCorreta": "A comunicação institucional observa padrões de clareza, respeito e rastreabilidade; a informalidade excessiva pode gerar ambiguidade e risco."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Transparência significa divulgar tudo.'",
        "porqueErrada": "Confunde publicidade do ato administrativo com exposição de dados pessoais; a Lei nº 12.527/2011 assegura acesso à informação, mas a proteção de dados impõe limites à divulgação.",
        "versaoCorreta": "Divulgam-se os atos administrativos, resguardando-se dados pessoais e informações legalmente protegidas."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Cada setor pode adotar seu próprio formato de comunicação.'",
        "porqueErrada": "Formatos setoriais fragmentam a identidade do órgão e produzem mensagens contraditórias, violando a consistência e a rastreabilidade institucionais.",
        "versaoCorreta": "Segue-se o padrão institucional único, com modelos, assinatura e protocolos definidos centralmente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Comunicação institucional: práticas padronizadas de canais, identidade visual, tom de voz, modelos e protocolos",
        "Comunicação interna: voltada a colaboradores, com registro e canais próprios do órgão",
        "Comunicação externa: voltada a cidadãos, parceiros e imprensa, com identidade institucional",
        "Transparência administrativa: publicidade dos atos, distinta da exposição de dados pessoais"
      ],
      "regras": [
        "Toda comunicação oficial segue padrão institucional único, e não formato setorial",
        "Clareza, consistência, transparência e rastreabilidade são objetivos simultâneos da padronização",
        "A divulgação institucional observa os limites legais de proteção de dados pessoais"
      ],
      "comparacoes": [
        "Interna x externa: mudam público, registro e canais; confundir altera o padrão exigido"
      ],
      "fluxos": [
        "Definir guia de estilo e modelos → aplicar identidade e assinatura → responder pelos canais oficiais → arquivar o registro"
      ],
      "excecoes": [
        "Transparência não afasta a proteção de dados pessoais: publica-se o administrativo, protege-se o pessoal"
      ],
      "palavrasChave": [
        "padrão",
        "canal",
        "identidade institucional",
        "transparência",
        "conformidade"
      ],
      "checklist": [
        "Sei definir comunicação institucional?",
        "Listo seus objetivos fundamentais?",
        "Distingo comunicação interna de externa?",
        "Cito a LAI e a Lei de Governo Digital?",
        "Reconheço o limite legal da publicidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma repartição recebe mensagens de vários setores com layouts diferentes e algumas sem identificação do órgão. Por que padronizar as assinaturas de e-mail institucional?",
        "dados": "Servidores usam assinatura livre: uns incluem nome e cargo, outros apenas o primeiro nome; nenhum traz o nome do órgão, o telefone oficial ou o setor responsável.",
        "conceitos": [
          "Assinatura institucional como elemento da identidade visual",
          "Identificação do remetente como requisito de confiança e rastreabilidade"
        ],
        "estrategia": "Relacionar a assinatura à identidade institucional: ela informa quem fala, de onde fala e como retornar. Comparar assinaturas padronizadas e livres quanto a identificação, profissionalismo e rastreabilidade.",
        "execucao": [
          "Listar os elementos que a assinatura institucional deve conter: nome, cargo, unidade, órgão e canal oficial de contato.",
          "Verificar quais desses elementos estão ausentes nas assinaturas em uso na repartição.",
          "Concluir que a padronização reúne identificação completa e apresentação uniforme do órgão."
        ],
        "resultado": "A padronização garante identidade visual, identifica o remetente com cargo e unidade e transmite profissionalismo ao destinatário.",
        "justificativa": "A assinatura é a face escrita do órgão: ao fixar nome, cargo, unidade e canal oficial, o padrão permite ao destinatário saber com quem fala e como retornar, sustentando a confiança e a rastreabilidade exigidas da comunicação institucional.",
        "errosFrequentes": [
          "Confundir assinatura pessoal com institucional: incluir apelidos, citações ou dados privados, o que dilui a identidade do órgão.",
          "Achar que a assinatura é enfeite: ignorar que, sem cargo e unidade, o destinatário não dimensiona a autoridade do remetente."
        ],
        "variacao": "Em vez da assinatura de e-mail, o enunciado pergunta por que o órgão fixa modelos de ofício e memorando; a resposta repete a lógica de padronização, agora aplicada a documentos formais."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão precisa redigir mensagens a cidadãos em canais digitais. Como definir o tom de voz institucional que deve orientar os servidores?",
        "dados": "O canal recebe demandas de públicos diversos: idosos, empresas e imprensa. Hoje convivem mensagens com 'você', 'senhora' e tratamento impessoal, algumas com abreviações de chat.",
        "conceitos": [
          "Tom de voz institucional como escolha de vocabulário e grau de formalidade",
          "Guia de estilo como instrumento de padronização da comunicação"
        ],
        "estrategia": "Definir o tom exige escolher registro linguístico, tratamento e repertório de mensagens padrão, e registrá-los em guia de estilo consultável por todos os setores do órgão.",
        "execucao": [
          "Fixar o grau de formalidade e o tratamento padrão ('você' ou 'senhor(a)') no guia de estilo.",
          "Listar vocabulário recomendado e termos a evitar, com exemplos de mensagens padrão por tipo de demanda.",
          "Validar o guia em uma amostra de mensagens reais antes de publicá-lo como norma interna."
        ],
        "resultado": "O tom de voz fica definido em guia de estilo com vocabulário, grau de formalidade, tratamento e modelos de mensagem padrão.",
        "justificativa": "Tom de voz não é preferência individual: é decisão institucional sobre como o órgão soa. Registrá-lo em guia de estilo converte escolhas difusas em padrão aplicável, o que reduz mensagens contraditórias e o retrabalho de revisão.",
        "errosFrequentes": [
          "Tratar o tom como gosto pessoal do servidor, ignorando que a mensagem fala pelo órgão.",
          "Confundir formalidade com frieza: abolir cortesias e saudações, degradando o atendimento ao cidadão."
        ],
        "variacao": "O enunciado passa a pedir a revisão de uma mensagem já redigida em tom inadequado; a tarefa é reescrevê-la conforme o guia, preservando o conteúdo e o prazo de resposta."
      },
      {
        "tipo": "erro",
        "problema": "Um item de certo ou errado sustenta que, por ser digital, a comunicação institucional pode adotar a informalidade da comunicação pessoal. Como julgar o item?",
        "dados": "A mensagem em questão usa abreviações de chat, não identifica o setor remetente e foi enviada a um cidadão que solicitava informação oficial pelo canal digital do órgão.",
        "conceitos": [
          "Padrão institucional de clareza e rastreabilidade",
          "Risco da ambiguidade em comunicação oficial"
        ],
        "estrategia": "Testar a afirmação contra os objetivos da comunicação institucional: se a mensagem não é clara, identificável e rastreável, ela falha no padrão — a informalidade não elimina o dever de representar a instituição.",
        "execucao": [
          "Identificar os elementos ausentes: identificação do remetente, registro e formalidade compatível com o canal.",
          "Confrontar a mensagem com os objetivos institucionais de clareza, consistência e rastreabilidade.",
          "Julgar o item errado e reformular a mensagem no padrão institucional."
        ],
        "resultado": "O item está errado: a comunicação institucional segue padrões de clareza, respeito e rastreabilidade, e a informalidade excessiva introduz ambiguidade e risco.",
        "justificativa": "A forma da mensagem representa a instituição. Sem padronização, abreviações e ausência de registro impedem reconstruir o histórico da comunicação e expõem o órgão a interpretações divergentes; por isso a banca trata a informalidade como erro, e não como liberdade de estilo.",
        "errosFrequentes": [
          "Achar que o canal digital autoriza informalidade: confundem a ferramenta com o padrão institucional.",
          "Confundir linguagem acessível com informal: dispensar identificação e registro em nome da simplicidade."
        ],
        "variacao": "A variante troca o campo por transparência: 'Como a comunicação é digital, o órgão pode publicar qualquer dado.' A estrutura do erro se repete, agora contra o limite da proteção de dados pessoais."
      }
    ]
  },
  "m3-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher o canal é decidir o grau de formalidade e de registro da comunicação: e-mail para o formal, chat para o ágil, telefone para a urgência, videoconferência para o complexo e protocolo para o ato oficial. Garantir rastreabilidade permite reconstruir quem decidiu, quando e com base em quê — exigência de auditoria e transparência no serviço público.",
      "preRequisitos": [
        "Distinção entre comunicação síncrona e assíncrona",
        "Noção de protocolo administrativo e de autuação de documentos",
        "Conceito de gestão documental e de arquivamento"
      ],
      "objetivosObservaveis": [
        "Associar cada canal (e-mail, chat, telefone, videoconferência, documento colaborativo, protocolo) à sua finalidade",
        "Definir rastreabilidade como capacidade de reconstruir o histórico de uma decisão",
        "Identificar decisões que exigem registro formal e recuperável",
        "Evitar que decisões relevantes existam apenas em canais efêmeros"
      ],
      "competencias": [
        "Selecionar o canal conforme a natureza e a formalidade do ato",
        "Registrar decisões em atas, versionamento e logs de forma recuperável",
        "Recompor o histórico de uma decisão a partir dos registros existentes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t3-s1 (Padrões de comunicação institucional) — define os canais e modelos oficiais do órgão",
        "m3-u3-t1-s2 (Comunicação síncrona versus assíncrona) — classifica os canais pela simultaneidade da interação",
        "m6-u3-t3-s1 (Segurança, rastreabilidade e responsabilização no serviço público digital) — a rastreabilidade como exigência de auditoria"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Questões apresentam um cenário — decisão tomada em reunião, mensagem em chat, documento compartilhado — e perguntam pelo canal adequado ou pelo registro necessário; a rastreabilidade liga a auditoria à gestão documental, em avaliação qualitativa sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Canais: e-mail (formal, rastreável), chat (rápido, menos formal), telefone (urgente), videoconferência (complexo), documento colaborativo (coautoria), sistema de protocolo (oficial). Rastreabilidade: registro de decisões, atas de reunião, versionamento de documentos, logs de acesso. Evitar decisões importantes apenas em canais efêmeros (chat) sem registro. Em serviço público, decisões devem ser documentadas e arquivadas conforme normas de gestão documental.",
      "intermediario": "No nível intermediário, o candidato decide qual canal registra melhor determinada decisão: escolhe o e-mail ou o protocolo para o ato formal, o chat para a tratativa rápida e a videoconferência para o assunto complexo. A questão típica descreve uma situação e pergunta qual canal preserva a decisão.",
      "avancado": "No nível avançado, o candidato monta um fluxo em que a decisão nasce informal — no chat ou na reunião — e é formalizada depois, com ata, versionamento e arquivamento. Exige perceber que a formalização posterior não apaga a fragilidade da origem: o histórico precisa ficar reconstruível.",
      "especialista": "No nível especialista, o candidato audita uma decisão e recompõe seu histórico a partir dos registros existentes: cruzamento de ata, versões do documento e logs de acesso. A tarefa é verificar se a cadeia de registros permite responder quem decidiu, quando, com base em quê e onde o ato está documentado."
    },
    "comparacoes": [
      {
        "tema": "Chat x e-mail para decisão institucional",
        "a": {
          "rotulo": "Chat",
          "texto": "Canal ágil, de baixa formalidade e recuperação frágil: as mensagens se perdem na Timeline e não têm valor probante equivalente ao do registro oficial."
        },
        "b": {
          "rotulo": "E-mail",
          "texto": "Canal formal e rastreável: a mensagem fica registrada com remetente, data e conteúdo, o que permite reconstruir a tratativa e servir de prova do ato."
        },
        "diferencaGabarito": "O chat acelera a conversa, mas não protege a decisão; o gabarito exige o e-mail, a ata ou o protocolo quando a decisão precisa ser recuperável."
      },
      {
        "tema": "Ata x gravação de reunião",
        "a": {
          "rotulo": "Ata de reunião",
          "texto": "Documento que resume participantes, pauta, decisões, responsáveis e prazos; é buscável, leve e própria para consulta e arquivamento."
        },
        "b": {
          "rotulo": "Gravação da reunião",
          "texto": "Registro fiel de tudo o que foi dito, porém volumoso, de consulta lenta e sensível, pois pode conter dados pessoais e informações protegidas."
        },
        "diferencaGabarito": "A ata registra a decisão de forma buscável e arquivável; a gravação apenas preserva o áudio — o gabarito trata a ata como registro institucional da deliberação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Chat institucional é suficiente para decisões formais.'",
        "porqueErrada": "O chat é canal efêmero: as mensagens se perdem, a recuperação é frágil e falta valor probatório e oficialidade para sustentar a decisão em auditoria.",
        "versaoCorreta": "O chat não substitui o registro formal: decisões formais exigem ata, documento ou ato protocolado e arquivado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Rastreabilidade é só guardar tudo.'",
        "porqueErrada": "Guardar tudo sem organizar não permite reconstruir a decisão; acumular mensagens e arquivos dispersos não informa quem decidiu, quando nem com base em quê.",
        "versaoCorreta": "Rastreabilidade é reconstruir a decisão: registrar quem, quando, o quê e com base em quê, em local recuperável."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Qualquer canal serve para qualquer decisão.'",
        "porqueErrada": "A formalidade depende da natureza do ato: decisões relevantes exigem canal com registro e oficialidade, e não a conveniência de quem decidiu.",
        "versaoCorreta": "O canal se adequa à natureza da decisão: quanto mais formal o ato, maior a exigência de registro e oficialidade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Canal de comunicação: meio com vocação própria de formalidade, velocidade e registro",
        "Rastreabilidade: capacidade de reconstruir o histórico de uma decisão",
        "Canal efêmero: mensagem de recuperação frágil e sem valor probatório equivalente",
        "Protocolo administrativo: registro oficial que confere autuação e oficialidade ao ato"
      ],
      "regras": [
        "Decisão relevante exige registro recuperável, em canal com formalidade compatível",
        "A escolha do canal é parte da conformidade, não mera conveniência"
      ],
      "comparacoes": [
        "Chat x e-mail: agilidade sem registro contra formalidade rastreável; a escolha altera a proteção da decisão"
      ],
      "fluxos": [
        "Decisão nasce no chat ou na reunião → formaliza-se em ata ou documento → versiona-se → arquiva-se no sistema institucional"
      ],
      "excecoes": [
        "Conversas exploratórias podem ocorrer em canais informais, desde que a decisão seja formalizada depois"
      ],
      "palavrasChave": [
        "e-mail",
        "chat",
        "ata",
        "protocolo",
        "auditoria"
      ],
      "checklist": [
        "Associo cada canal à sua finalidade?",
        "Sei definir rastreabilidade?",
        "Identifico decisões que exigem registro?",
        "Evito deixar a decisão apenas no chat?",
        "Recomponho o histórico a partir dos registros?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que decisões importantes de uma equipe não devem ficar registradas apenas nas mensagens de chat do grupo de trabalho?",
        "dados": "A definição sobre o cronograma de um projeto foi combinada em chat, sem ata nem e-mail de acompanhamento; dois meses depois, ninguém recupera a mensagem original.",
        "conceitos": [
          "Canal efêmero e fragilidade de recuperação",
          "Rastreabilidade como base da prestação de contas"
        ],
        "estrategia": "Comparar o chat com canais registrados quanto à durabilidade e ao valor do registro: se a decisão não é recuperável, ela não pode ser auditada nem comunicada a quem não participou.",
        "execucao": [
          "Identificar onde a decisão ficou registrada: apenas em mensagens de chat, sem ata ou documento.",
          "Avaliar o que se perde: autoria, data, conteúdo exato e base da decisão.",
          "Concluir que a decisão precisa ser transposta para canal com registro recuperável."
        ],
        "resultado": "O chat é efêmero e de recuperação difícil: sem registro em canal durável, falta rastreabilidade e formalidade para auditoria e prestação de contas.",
        "justificativa": "A rastreabilidade exige reconstruir quem decidiu, quando e com base em quê. Mensagens de chat não oferecem essa cadeia de forma confiável, e a decisão se torna invisível para auditoria, para o arquivamento e para os colegas que não estavam presentes.",
        "errosFrequentes": [
          "Confundir 'a mensagem ainda existe' com 'a decisão está registrada': a existência da mensagem não garante recuperação organizada.",
          "Achar que rastreabilidade é burocracia: esquecem que sem registro a decisão não se prova nem se transmite."
        ],
        "variacao": "O enunciado troca o chat por mensagem de voz em aplicativo de celular corporativo; a estrutura se mantém, e a resposta precisa considerar ainda a ausência de registro textual pesquisável."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma reunião de equipe decidiu pela prorrogação de prazo de uma entrega. Como registrar a decisão para que ela fique rastreável?",
        "dados": "Participaram cinco servidores por videoconferência; a decisão foi por prorrogar de 15 para 30 dias, com o setor de orçamento responsável pela reprogramação e sem gravação autorizada da reunião.",
        "conceitos": [
          "Ata como resumo buscável da deliberação",
          "Arquivamento em repositório institucional"
        ],
        "estrategia": "Transformar a deliberação oral em documento: a ata deve conter participantes, pauta, decisão, responsáveis e prazos, e depois ser compartilhada e arquivada no repositório oficial.",
        "execucao": [
          "Redigir a ata com data, participantes, pauta e a decisão de prorrogação de 15 para 30 dias.",
          "Indicar responsável (setor de orçamento) e prazo da reprogramação no corpo da ata.",
          "Compartilhar a ata com os presentes e arquivá-la no repositório institucional."
        ],
        "resultado": "A decisão fica registrada em ata com participantes, pauta, deliberação, responsáveis e prazos, compartilhada e arquivada em repositório institucional.",
        "justificativa": "A ata converte a fala em registro durável e pesquisável, atendendo à gestão documental do serviço público: qualquer auditoria posterior consegue ler quem decidiu, quando e com que encaminhamento, sem depender da memória dos participantes nem da gravação.",
        "errosFrequentes": [
          "Registrar apenas o resultado e omitir responsáveis e prazos, o que deixa a decisão sem encaminhamento verificável.",
          "Deixar a ata em pasta pessoal sem arquivá-la no repositório institucional, anulando a recuperação."
        ],
        "variacao": "A reunião passa a incluir participante externo e dado pessoal sensível; a variação exige avaliar o que pode constar da ata e onde ela é arquivada."
      },
      {
        "tipo": "erro",
        "problema": "Uma banca afirma em item de certo ou errado que o chat institucional basta para decidir sobre a dispensa de um licenciamento ambiental. Como julgar o item?",
        "dados": "A decisão foi combinada entre dois técnicos em chat, sem processo autuado, sem assinatura e sem arquivamento; o processo nem foi localizado depois pelo setor de protocolo.",
        "conceitos": [
          "Valor probatório do registro oficial",
          "Autuação e oficialidade do ato administrativo"
        ],
        "estrategia": "Contrastar o canal usado com a exigência do ato: decisão com efeito administrativo precisa de registro formal, autuado e arquivado. A leitura ingênua trata o chat como suficiente porque o combinado 'ficou combinado'.",
        "execucao": [
          "Verificar o grau de formalidade da decisão: dispensa de licenciamento é ato administrativo com efeitos.",
          "Confrontar o canal usado (chat) com a exigência de processo autuado e assinado.",
          "Julgar o item errado e indicar a formalização em processo protocolado."
        ],
        "resultado": "A afirmação é falsa: chat não substitui registro formal, e decisão com efeito administrativo exige processo autuado, assinado e arquivado.",
        "justificativa": "O valor de um registro está na oficialidade e na recuperabilidade. O chat não confere autuação nem valor probatório equivalente, de modo que a decisão não se sustenta em auditoria; a banca marca errado justamente porque o item confunde combinar com decidir formalmente.",
        "errosFrequentes": [
          "Equiparar consentimento dos envolvidos com decisão formal: o acordo em chat não supre a autuação.",
          "Ignorar a recuperabilidade: pensar que a existência da conversa já garante a prova do ato."
        ],
        "variacao": "O item troca o chat por telefonema entre os técnicos; a estrutura do erro persiste, e a resposta passa pela impossibilidade de reconstruir o teor da decisão sem registro textual."
      }
    ]
  },
  "m3-u3-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Equipes distribuídas convivem com fusos, idiomas e culturas distintos, e a comunicação precisa ser assíncrona e com prazos explícitos para não excluir quem não pode participar ao vivo. Janelas de sobreposição, acordos de resposta (SLA), documentação de decisões e rotatividade de horários são as práticas que sustentam a colaboração remota.",
      "preRequisitos": [
        "Distinção entre comunicação síncrona e assíncrona",
        "Escolha de canais e noção de rastreabilidade",
        "Uso de calendários e convites de reunião"
      ],
      "objetivosObservaveis": [
        "Listar os desafios de fusos horários, idiomas e culturas em equipes distribuídas",
        "Aplicar comunicação assíncrona com prazos explícitos e documentar as decisões",
        "Definir acordos de nível de serviço (SLA) de resposta por tipo de mensagem",
        "Reconhecer práticas de inclusão de quem não participa das reuniões síncronas"
      ],
      "competencias": [
        "Colaborar em contexto intercultural respeitando fusos e feriados locais",
        "Gerir equipes remotas com acordos de resposta e registro de decisões"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t3-s2 (Escolha de canais e rastreabilidade) — a documentação de decisões sustenta a rastreabilidade remota",
        "m3-u3-t1-s2 (Comunicação síncrona versus assíncrona) — base para decidir entre reunião e mensagem assíncrona",
        "m3-u2-t1-s1 (Calendários e convites de reunião) — a marcação deve respeitar fusos e feriados locais"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca apresenta cenários de equipe remota e pergunta pela prática inclusiva ou pelo acordo de resposta adequado, em itens sobre assincronia, SLA e documentação. Avaliação qualitativa de aderência ao programa, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Equipes distribuídas: fusos horários, idiomas, culturas. Boas práticas: definir horários de sobreposição; usar comunicação assíncrona com prazos claros; documentar decisões; evitar reuniões fora do horário de trabalho; respeitar feriados locais; usar ferramentas colaborativas; estabelecer acordos de nível de serviço (SLA) de resposta. Atenção a inclusão: não excluir quem não pode estar síncrono.",
      "intermediario": "No nível intermediário, o candidato aplica prazos claros e documenta decisões: converte a tratativa em canal assíncrono com data-limite, registra o que foi decidido para quem não participou e usa ferramentas colaborativas compartilhadas. A questão típica descreve uma equipe espalhada e pergunta como comunicar sem excluir ninguém.",
      "avancado": "No nível avançado, o candidato define acordos de nível de serviço (SLA): prazo esperado de resposta para cada tipo de mensagem, com escalonamento quando o prazo estoura. Exige dimensionar a urgência de cada canal e combinar o acordo com a rotatividade das reuniões recorrentes, para que o custo do horário incômodo seja rateado entre os fusos.",
      "especialista": "No nível especialista, o candidato reorganiza o fluxo de uma equipe multinacional: redesenha janelas de sobreposição, redistribui a rotatividade de reuniões, formaliza SLAs por tipo de mensagem e cria ritual de registro de decisões. O objetivo é medir a redução de exclusão, atraso e retrabalho no conjunto da operação."
    },
    "comparacoes": [
      {
        "tema": "Comunicação assíncrona x síncrona em equipe distribuída",
        "a": {
          "rotulo": "Assíncrona",
          "texto": "Mensagem com prazo explícito, respondida no horário de trabalho de cada um: respeita fusos e feriados e deixa registro durável da tratativa."
        },
        "b": {
          "rotulo": "Síncrona",
          "texto": "Reunião em tempo real, útil para assunto complexo ou urgente, mas que impõe horário comum e exclui quem não pode comparecer."
        },
        "diferencaGabarito": "O assíncrono inclui fusos e documenta; o síncrono deve ser reservado ao que exige presença simultânea, com registro para ausentes."
      },
      {
        "tema": "Prazo explícito x expectativa implícita",
        "a": {
          "rotulo": "Prazo explícito",
          "texto": "A mensagem declara a data-limite da resposta, o que permite planejar o trabalho e cobrar o atraso de forma objetiva."
        },
        "b": {
          "rotulo": "Expectativa implícita",
          "texto": "O remetente supõe que o outro responderá 'quando puder': sem prazo, a demanda se arrasta e o conflito aparece na cobrança."
        },
        "diferencaGabarito": "Sem prazo declarado não há acordo de serviço: o gabarito exige SLA explícito por tipo de mensagem, e não boa vontade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Reuniões sempre devem ser no horário do escritório sede.'",
        "porqueErrada": "Fixar o horário da sede transfere o incômodo sempre aos mesmos fusos, o que exclui participantes distantes e degrada a participação de quem paga o custo.",
        "versaoCorreta": "Errado. Isso exclui participantes de outros fusos; rotacionar horários e usar assíncrono é mais inclusivo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Comunicação assíncrona dispensa prazos.'",
        "porqueErrada": "Sem prazo, a mensagem assíncrona perde a função de acordo: ninguém sabe quando a resposta é esperada e o trabalho simplesmente atrasa.",
        "versaoCorreta": "Toda mensagem assíncrona relevante declara prazo de resposta, conforme o SLA definido pela equipe."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Todos entendem o mesmo contexto da decisão.'",
        "porqueErrada": "Culturas e idiomas diferentes interpretam a mesma mensagem de formas distintas; contexto implícito produz decisões divergentes entre fusos.",
        "versaoCorreta": "Explicitam-se contexto, fundamentos e a decisão registrada, para que cada fuso interprete do mesmo modo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Equipe distribuída: grupo de trabalho espalhado por fusos, idiomas e culturas distintos",
        "Janela de sobreposição: período em que todos os fusos estão simultaneamente disponíveis",
        "SLA de resposta: prazo esperado de resposta para cada tipo de mensagem",
        "Comunicação assíncrona com prazo: tratativa que respeita o horário de trabalho de cada participante"
      ],
      "regras": [
        "Janela de sobreposição, prazos explícitos e documentação sustentam a colaboração distribuída",
        "Reuniões recorrentes alternam horários para ratear o incômodo entre os fusos"
      ],
      "comparacoes": [
        "Assíncrono x síncrono: o assíncrono inclui fusos e deixa registro; o síncrono se reserva ao que exige presença"
      ],
      "fluxos": [
        "Definir janela de sobreposição → comunicar por assíncrono com prazo → decidir em reunião com registro → arquivar para ausentes"
      ],
      "excecoes": [
        "Decisões tomadas em reunião síncrona precisam ser registradas e comunicadas a quem faltou"
      ],
      "palavrasChave": [
        "distribuída",
        "fuso",
        "SLA",
        "inclusão",
        "documentação"
      ],
      "checklist": [
        "Listo os desafios de fusos, idiomas e culturas?",
        "Aplico comunicação assíncrona com prazo?",
        "Documento decisões para quem não participou?",
        "Defino SLA de resposta por tipo de mensagem?",
        "Alterno horários das reuniões recorrentes?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma equipe tem membros em três fusos horários com apenas duas horas de coincidência diária. Como lidar com a diferença de fusos na comunicação?",
        "dados": "Os fusos são UTC-3, UTC+1 e UTC+8; a sobreposição possível vai das 9h às 11h no horário do membro de UTC-3, e reuniões foram marcadas sempre nesse intervalo por conveniência da sede.",
        "conceitos": [
          "Fuso horário e janela de sobreposição",
          "Rotatividade de horários como equidade"
        ],
        "estrategia": "Reconhecer que a coincidência de horários é recurso escasso: usa-se a sobreposição para o que exige presença e o assíncrono para o resto, alternando o horário das reuniões recorrentes para ratear o incômodo.",
        "execucao": [
          "Calcular a janela de sobreposição entre os três fusos e dimensionar sua capacidade semanal.",
          "Destinar a sobreposição às reuniões que exigem decisão simultânea e migrar o restante para assíncrono com prazo.",
          "Alternar o horário das reuniões recorrentes entre os fusos, para que o incômodo não recaia sempre no mesmo grupo."
        ],
        "resultado": "Define-se a janela de sobreposição, alterna-se o horário das reuniões e prefere-se o assíncrono sempre que a presença simultânea não for indispensável.",
        "justificativa": "A equidade entre fusos não se obtém ignorando a diferença, e sim rateando o custo: quem participa da reunião às 9h em uma semana assume o horário incômodo em outra. O assíncrono com prazo completa o arranjo ao permitir que cada um responda no próprio horário de trabalho.",
        "errosFrequentes": [
          "Tratar a sobreposição como horário natural de todos: esquecem que para um dos fusos a reunião ocorre de madrugada.",
          "Confundir assíncrono com ausência de prazo: sem data-limite, a mensagem não sustenta a colaboração."
        ],
        "variacao": "O enunciado acrescenta um feriado local em um dos países; a variação exige remarcar a recorrência e comunicar o novo acordo a toda a equipe."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma equipe global precisa decidir sobre uma falha crítica em produção. Como proceder para decidir sem excluir os membros de outros fusos?",
        "dados": "A falha afeta clientes nos três fusos; dois especialistas estão em UTC+8 (madrugada local), o coordenador em UTC-3 (manhã) e o prazo de correção é de seis horas.",
        "conceitos": [
          "Urgência com canal assíncrono",
          "Registro da decisão para ausentes"
        ],
        "estrategia": "Combinar urgência e inclusão: notificar por canal assíncrono com prazo curto, que cada membro leia no horário local, e convocar reunião síncrona apenas se a decisão exigir interação, gravando ou registrando o resultado para quem não pôde participar.",
        "execucao": [
          "Enviar mensagem assíncrona urgente com o diagnóstico, a pergunta objetiva e o prazo de resposta em horas.",
          "Verificar se a decisão exige interação: em caso afirmativo, convocar reunião síncrona na janela viável e registrar a ata.",
          "Comunicar a decisão e os responsáveis a todos os fusos, com o registro arquivado em repositório acessível."
        ],
        "resultado": "Procede-se com comunicação assíncrona urgente de prazo curto e reunião síncrona apenas se necessário, com gravação e registro para os ausentes.",
        "justificativa": "A urgência não suspende a inclusão: o assíncrono com prazo permite que cada fuso contribua no horário possível, e o registro da reunião garante que quem estava offline decida com a mesma informação. Sem o registro, a decisão ficaria restrita a quem pode estar acordado.",
        "errosFrequentes": [
          "Convocar reunião imediata sem registrar: os ausentes deixam de influenciar a decisão que os afeta.",
          "Enviar alerta sem prazo nem pergunta objetiva: cada fuso interpreta a urgência de forma diferente e a resposta se fragmenta."
        ],
        "variacao": "A falha deixa de ser crítica e passa a ser melhoria de rotina; a variação exige migrar todo o fluxo para assíncrono com SLA normal, sem reunião síncrona."
      },
      {
        "tipo": "erro",
        "problema": "Um item de certo ou errado afirma que reuniões recorrentes de equipe distribuída devem manter-se no horário do escritório da sede, por previsibilidade. Como julgar o item?",
        "dados": "A equipe tem membros em dois fusos com seis horas de diferença; a reunião semanal ocorre às 9h da sede, o que corresponde a 3h da manhã para o outro grupo, que participa há dezoito meses sem alternância.",
        "conceitos": [
          "Equidade entre fusos e rotatividade de horários",
          "Inclusão como prática de comunicação profissional"
        ],
        "estrategia": "Testar o item contra o efeito prático da prática descrita: previsibilidade para quem? A leitura ingênua vê organização; o efeito real é a exclusão sistemática de um grupo, com perda de participação e de qualidade da decisão.",
        "execucao": [
          "Identificar quem arca com o horário incômodo na prática descrita e há quanto tempo ele se repete.",
          "Confrontar a prática com a alternativa inclusiva: alternância de horários e assíncrono com registro.",
          "Julgar o item errado e indicar a correção: rotacionar o horário e registrar as decisões."
        ],
        "resultado": "O item é falso: fixar o horário da sede exclui participantes de outros fusos, e a prática inclusiva alterna horários e usa assíncrono com registro.",
        "justificativa": "Previsibilidade não é simetria: um horário fixo na sede é previsível para poucos e penoso para os demais, o que reduz a participação e degrada a decisão. A banca marca errado porque o item confunde comodidade da chefia com prática de comunicação profissional em equipe distribuída.",
        "errosFrequentes": [
          "Confundir pontualidade com equidade: achar que alternar horários é desorganização, e não rateio de custo.",
          "Ignorar o custo acumulado: meses de madrugada para o mesmo grupo produzem silêncio e desistência de participar."
        ],
        "variacao": "O item troca o horário por 'todos devem aprender o idioma da sede'; a estrutura do erro persiste, agora como imposição cultural que ignora a diversidade da equipe."
      }
    ]
  },
  "m3-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O lobby (sala de espera) é o controle de acesso mais eficaz contra intrusão em reuniões online, e concursos cobram sua função. Saber que o lobby retém participantes até a aprovação do anfitrião, distinguir as configurações típicas e aplicar boas práticas institucionais — lobby por padrão em reuniões sensíveis, verificação de identidade e coanfitriões para monitorar a fila — é essencial para responder corretamente a itens de controle de participantes.",
      "preRequisitos": [
        "Noção de reunião online e de link de acesso",
        "Noção de papéis de anfitrião e participante"
      ],
      "objetivosObservaveis": [
        "Definir o que é lobby ou sala de espera",
        "Explicar como o lobby reduz a intrusão (zoombombing)",
        "Distinguir as configurações típicas de lobby",
        "Aplicar o lobby em reuniões que tratam dados sensíveis"
      ],
      "competencias": [
        "Controle de acesso em reuniões virtuais",
        "Condução segura de reuniões institucionais"
      ],
      "dificuldade": "iniciante",
      "relacoes": [
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — controle posterior à admissão",
        "m5-u1-t1-s1 (Abordagens de inteligência artificial: regras, aprendizado de máquina e deep learning) — risco que o lobby mitiga"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O lobby aparece em itens sobre controle de acesso a reuniões virtuais; a classificação média é estimativa pedagógica qualitativa de adequação ao edital, não frequência estatística de incidência publicada."
      }
    },
    "niveis": {
      "iniciante": "O lobby, ou sala de espera, é o recurso que retém os participantes até que o anfitrião os admita. Funciona como uma porta com porteiro: mesmo que um desconhecido obtenha o endereço da reunião, não entra sem aprovação. As configurações típicas são lobby sempre ativo (todos aguardam), lobby apenas para convidados externos (membros da organização entram direto) e lobby desativado.",
      "intermediario": "A forma de identificação de quem espera — nome exibido, conta autenticada — ajuda o anfitrião a decidir a admissão. Boa prática institucional: ativar o lobby por padrão em reuniões que tratam dados sensíveis, verificar a identidade antes de admitir e designar coanfitriões para monitorar a fila de espera.",
      "avancado": "O lobby transfere ao anfitrião a decisão de entrada, reduzindo a superfície de ataque. Combinar lobby com autenticação forte e verificação de identidade amplia a proteção contra intrusos que obtiveram o link da reunião por vazamento ou divulgação indevida.",
      "especialista": "Projetar o fluxo de uma reunião pública minimizando o risco de intrusão envolve definir quem entra direto e quem fica na fila, atribuir coanfitriões para admitir participantes enquanto o anfitrião conduz, e revisar periodicamente a configuração de lobby conforme a sensibilidade dos dados discutidos."
    },
    "comparacoes": [
      {
        "tema": "Lobby versus senha de reunião",
        "a": {
          "rotulo": "Lobby",
          "texto": "Decide caso a caso quem entra; contém quem tem o link, mas não é convidado, exigindo aprovação do anfitrião."
        },
        "b": {
          "rotulo": "Senha",
          "texto": "Exige apenas o segredo para entrar; quem possui a senha acessa direto, sem aprovação individual do anfitrião."
        },
        "diferencaGabarito": "O lobby dá ao anfitrião controle discricionário sobre cada entrada; a senha apenas exige posse do segredo. O lobby contém acessos não autorizados mesmo quando o link é divulgado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com senha, o lobby é dispensável.",
        "porqueErrada": "A senha pode vazar junto com o link; o lobby ainda contém acessos não autorizados porque exige aprovação caso a caso do anfitrião.",
        "versaoCorreta": "A senha não substitui o lobby: o lobby adiciona aprovação individual mesmo para quem possui o link ou a senha."
      },
      {
        "afirmacaoEquivocada": "O lobby bloqueia automaticamente quem é da organização.",
        "porqueErrada": "Depende da configuração: pode-se admitir membros da organização direto, se desejado; o lobby não é um bloqueio automático a internos.",
        "versaoCorreta": "O lobby pode ser configurado para admitir membros da organização direto e reter apenas convidados externos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Lobby ou sala de espera",
        "Anfitrião",
        "Coanfitrião",
        "Configuração de lobby",
        "Controle de acesso"
      ],
      "regras": [
        "Reunião sensível exige lobby ativo",
        "Verificar a identidade antes de admitir participantes",
        "Designar coanfitriões para monitorar a fila"
      ],
      "comparacoes": [
        "Lobby sempre ativo é mais restritivo; lobby só para externos equilibra conveniência",
        "Lobby decide caso a caso; senha exige apenas o segredo"
      ],
      "fluxos": [
        "Participante solicita entrada; fica na sala de espera; anfitrião ou coanfitrião verifica identidade e admite ou rejeita"
      ],
      "excecoes": [
        "A nomenclatura e a disponibilidade exata das opções variam por plataforma e plano"
      ],
      "palavrasChave": [
        "controle de acesso",
        "fila",
        "admissão",
        "intrusão",
        "anfitrião"
      ],
      "checklist": [
        "Defino o que é lobby?",
        "Explico o benefício do lobby?",
        "Distingo as configurações?",
        "Aplico lobby em reuniões sensíveis?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que é o lobby (sala de espera) em uma reunião online e qual é seu principal benefício?",
        "dados": "Reunião com link divulgado; um desconhecido obtém o endereço e tenta entrar. Com o lobby ativo, ele fica retido até o anfitrião admiti-lo.",
        "conceitos": [
          "Lobby ou sala de espera",
          "Anfitrião"
        ],
        "estrategia": "Explicar que o lobby retém participantes até aprovação do anfitrião, funcionando como controle de entrada mesmo quando o link é conhecido.",
        "execucao": [
          "Identificar o lobby como recurso que retém participantes até a admissão",
          "Reconhecer que o link divulgado não garante entrada automática",
          "Concluir que o anfitrião decide quem entra",
          "Associar o lobby à redução de intrusão (zoombombing)"
        ],
        "resultado": "O lobby retém o participante até o anfitrião admiti-lo, impedindo que quem obteve o link entre sem aprovação.",
        "justificativa": "O principal benefício do lobby é transferir ao anfitrião a decisão de entrada, reduzindo a superfície de ataque contra intrusos.",
        "errosFrequentes": [
          "Acreditar que o link da reunião por si só garante a entrada de qualquer pessoa",
          "Esquecer que alguém precisa admitir os participantes na fila"
        ],
        "variacao": "Em reunião com lobby desativado, qualquer pessoa com o link entra automaticamente, sem aprovação do anfitrião."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como reduzir o risco de intrusão em uma reunião pública que trata dados sensíveis?",
        "dados": "Reunião pública com link divulgado; dados sensíveis em discussão; plataforma oferece lobby, senha, restrição de compartilhamento de tela e desativação de entrada após início.",
        "conceitos": [
          "Lobby ativo",
          "Boa prática institucional de reuniões sensíveis"
        ],
        "estrategia": "Ativar o lobby por padrão, exigir senha, restringir o compartilhamento de tela ao anfitrião e desativar a entrada após o início da reunião.",
        "execucao": [
          "Ativar o lobby para que todos aguardem aprovação antes de entrar",
          "Exigir senha de acesso à reunião",
          "Restringir o compartilhamento de tela ao anfitrião",
          "Desativar a entrada de novos participantes após o início"
        ],
        "resultado": "Com lobby ativo, senha, compartilhamento restrito e entrada desativada após o início, o risco de intrusão é minimizado.",
        "justificativa": "Cada camada — lobby, senha, restrição de tela e corte de entrada — reduz um vetor diferente de intrusão, protegendo a reunião e os dados sensíveis.",
        "errosFrequentes": [
          "Depender apenas da senha, que pode vazar com o link",
          "Esquecer de restringir o compartilhamento de tela, permitindo que um intruso exiba conteúdo"
        ],
        "variacao": "A reunião é interna, não pública, mas trata dados sigilosos: o lobby continua recomendado por padrão, mesmo sem divulgação externa do link."
      },
      {
        "tipo": "erro",
        "problema": "A afirmação de que o lobby é desnecessário em reuniões internas está correta, independentemente dos dados tratados?",
        "dados": "Reunião interna de uma organização; afirmação de que o lobby não é necessário; alguns participantes tratam dados sensíveis.",
        "conceitos": [
          "Lobby",
          "Reunião sensível e dados sigilosos"
        ],
        "estrategia": "Reconhecer que a necessidade do lobby depende do risco, não apenas de a reunião ser interna; dados sensíveis justificam o lobby mesmo internamente.",
        "execucao": [
          "Avaliar se a reunião trata dados sensíveis",
          "Reconhecer que reuniões internas também podem ter risco de intrusão ou vazamento",
          "Concluir que o lobby é recomendado para reuniões sensíveis, internas ou não",
          "Verificar a política institucional antes de decidir desativar o lobby"
        ],
        "resultado": "A afirmação está errada: reuniões com dados sensíveis devem usar lobby mesmo quando internas, conforme a política institucional.",
        "justificativa": "O critério é a sensibilidade dos dados e o risco de intrusão, não se a reunião é interna ou externa; o lobby protege independentemente do público.",
        "errosFrequentes": [
          "Supor que reuniões internas são automaticamente seguras e dispensam lobby",
          "Esquecer que a política institucional pode exigir lobby por padrão"
        ],
        "variacao": "A reunião é interna e não trata dados sensíveis: nesse caso, o lobby pode ser desativado para ganhar conveniência, desde que a política institucional o permita."
      }
    ]
  },
  "m3-u4-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Saber moderar uma reunião virtual mantém o encontro seguro e produtivo, e concursos cobram as ações disponíveis ao anfitrião. Conhecer remoção de participantes, desativação de microfone e câmera, silenciamento coletivo, restrição de compartilhamento de tela, designação de coanfitriões e o registro de ocorrências é fundamental para responder corretamente a itens de controle de participantes e gestão de incidentes.",
      "preRequisitos": [
        "Papéis de anfitrião e coanfitrião em reuniões online",
        "Noção de controle de participantes e de microfone/câmera"
      ],
      "objetivosObservaveis": [
        "Listar as principais ações de moderação disponíveis ao anfitrião",
        "Definir e justificar a designação de coanfitriões",
        "Aplicar a comunicação de regras no início da reunião",
        "Registrar ocorrências e incidentes relevantes"
      ],
      "competencias": [
        "Moderação de reuniões virtuais",
        "Gestão de incidentes em ambiente institucional"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t1-s1 (Lobby e sala de espera) — controle de entrada anterior à admissão",
        "m5-u1-t1-s1 (Abordagens de inteligência artificial: regras, aprendizado de máquina e deep learning) — incidente que a moderação deve conter"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Ações de moderação e papéis de anfitrião aparecem em itens sobre reuniões virtuais; a classificação média é estimativa pedagógica qualitativa de adequação ao edital, não frequência estatística de incidência publicada."
      }
    },
    "niveis": {
      "iniciante": "A moderação reúne as ações do anfitrião e dos coanfitriões para conduzir e proteger a reunião: remover participantes, desativar o microfone ou a câmera de alguém, silenciar todos, bloquear ou restringir o compartilhamento de tela e designar outros coanfitriões. Participantes comuns não têm essas permissões.",
      "intermediario": "Boas práticas incluem designar coanfitriões em reuniões grandes — um conduz, outro monitora —, comunicar as regras no início, usar o recurso \"levantar mão\" para organizar a fala e registrar ocorrências relevantes. A remoção de um participante deve ter justificativa.",
      "avancado": "Conter uma perturbação sem interromper toda a reunião exige usar a ação de gravidade adequada: silenciar para ruído reversível, remover para exclusão definitiva. Em serviço público, incidentes devem ser documentados e, conforme o caso, comunicados.",
      "especialista": "Documentar um incidente e propor controles preventivos envolve registrar o ocorrido, identificar a causa (intrusão, conteúdo ofensivo, compartilhamento indevido) e definir medidas como lobby mais restrito, coanfitriões adicionais e regras de fala explícitas."
    },
    "comparacoes": [
      {
        "tema": "Silenciar versus remover participante",
        "a": {
          "rotulo": "Silenciar",
          "texto": "Desativa o microfone de forma reversível; o participante pode continuar ouvindo e, quando permitido, falar novamente."
        },
        "b": {
          "rotulo": "Remover",
          "texto": "Exclui o participante da reunião; a ação é definitiva para aquela sessão, salvo novo convite."
        },
        "diferencaGabarito": "Silenciar é reversível e reduz ruído; remover exclui o participante. A gravidade da situação define qual ação usar."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Qualquer participante pode remover outro da reunião.",
        "porqueErrada": "Remover é uma ação de papéis elevados (anfitrião ou coanfitrião); participantes comuns não têm essa permissão.",
        "versaoCorreta": "Apenas o anfitrião e os coanfitriões podem remover participantes; participantes comuns não podem."
      },
      {
        "afirmacaoEquivocada": "Remover o participante resolve o problema, não sendo necessário registrar nada.",
        "porqueErrada": "Em contexto institucional, incidentes relevantes — intrusão, conteúdo ofensivo, compartilhamento indevido — devem ser documentados e, conforme o caso, comunicados.",
        "versaoCorreta": "A remoção deve ter justificativa e, em serviço público, o incidente deve ser registrado e comunicado quando relevante."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Moderação",
        "Anfitrião",
        "Coanfitrião",
        "Silenciar",
        "Remover",
        "Registro de ocorrências"
      ],
      "regras": [
        "Reunião maior exige mais coanfitriões e regras explícitas",
        "Comunicar as regras no início da reunião",
        "Usar \"levantar mão\" para organizar a fala"
      ],
      "comparacoes": [
        "Silenciar reduz ruído de forma reversível; remover exclui o participante",
        "Anfitrião e coanfitrião moderam; o coanfitrião amplia a capacidade de monitoramento"
      ],
      "fluxos": [
        "Participante perturba; anfitrião ou coanfitrião silêncio ou remove; ocorrência é registrada e, se incidente, comunicada"
      ],
      "excecoes": [
        "Nomes e disponibilidade exata das ações variam por plataforma e plano"
      ],
      "palavrasChave": [
        "ordem",
        "remoção",
        "mute",
        "incidente",
        "registro"
      ],
      "checklist": [
        "Listo as ações de moderação?",
        "Defino coanfitriões?",
        "Comunico as regras?",
        "Registro incidentes?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quem pode remover participantes de uma reunião virtual, e por que essa permissão é restrita?",
        "dados": "Reunião com anfitrião, coanfitriões e participantes comuns; tentativa de um participante comum remover outro.",
        "conceitos": [
          "Papéis de anfitrião e coanfitrião",
          "Permissão de remoção"
        ],
        "estrategia": "Explicar que a remoção é uma ação de papéis elevados, reservada ao anfitrião e aos coanfitriões, não a participantes comuns.",
        "execucao": [
          "Identificar que remover é ação de anfitrião ou coanfitrião",
          "Reconhecer que participantes comuns não têm essa permissão",
          "Concluir que apenas papéis elevados podem remover",
          "Associar a restrição à proteção da reunião contra remoções indevidas"
        ],
        "resultado": "Apenas o anfitrião e os coanfitriões podem remover participantes; participantes comuns não podem.",
        "justificativa": "A remoção é uma ação de impacto sobre a participação alheia, por isso está restrita a papéis com autoridade de moderação.",
        "errosFrequentes": [
          "Acreditar que qualquer participante pode remover outro",
          "Esquecer que apenas anfitrião e coanfitrião têm essa permissão"
        ],
        "variacao": "Um participante comum pede para remover alguém disruptivo: ele deve solicitar ao anfitrião ou coanfitrião, não agir por conta própria."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma reunião com cem participantes, como o anfitrião pode manter a ordem durante o encontro?",
        "dados": "Reunião com cem participantes; recursos disponíveis: coanfitriões, desativação de microfone por padrão, recurso \"levantar mão\", compartilhamento de tela restrito.",
        "conceitos": [
          "Coanfitriões",
          "Regras de fala e \"levantar mão\"",
          "Compartilhamento de tela restrito"
        ],
        "estrategia": "Designar coanfitriões, desativar microfones por padrão, usar \"levantar mão\" para organizar a fala, liberar a fala por vez e restringir o compartilhamento de tela ao anfitrião.",
        "execucao": [
          "Designar coanfitriões para monitorar os participantes enquanto o anfitrião conduz",
          "Desativar os microfones por padrão para evitar ruído",
          "Usar o recurso \"levantar mão\" para organizar a ordem de fala",
          "Restringir o compartilhamento de tela ao anfitrião"
        ],
        "resultado": "Com coanfitriões, microfones desativados por padrão, \"levantar mão\" e tela restrita, a reunião com cem participantes mantém a ordem.",
        "justificativa": "Cada recurso atua em uma dimensão da ordem: coanfitriões ampliam o monitoramento, microfones desativados evitam ruído, \"levantar mão\" organiza a fala e tela restrita evita compartilhamentos indevidos.",
        "errosFrequentes": [
          "Deixar todos os microfones abertos em reunião grande, gerando ruído",
          "Permitir compartilhamento de tela livre, expondo a reunião a conteúdo indevido"
        ],
        "variacao": "A reunião tem duzentos participantes: o número de coanfitriões deve ser aumentado para manter a capacidade de monitoramento."
      },
      {
        "tipo": "erro",
        "problema": "A afirmação de que silenciar e remover um participante são a mesma coisa está correta?",
        "dados": "Reunião com participante disruptivo; afirmação de que silenciar e remover equivalem; diferença entre reversibilidade e gravidade.",
        "conceitos": [
          "Silenciar",
          "Remover",
          "Reversibilidade e gravidade da ação"
        ],
        "estrategia": "Reconhecer que silenciar é reversível e menos grave, enquanto remover exclui definitivamente; a escolha depende da gravidade da situação.",
        "execucao": [
          "Identificar que silenciar desativa o microfone de forma reversível",
          "Identificar que remover exclui o participante da reunião",
          "Comparar reversibilidade e gravidade das duas ações",
          "Concluir que não são a mesma coisa e a escolha depende do caso"
        ],
        "resultado": "Silenciar e remover diferem em reversibilidade e gravidade: silenciar reduz ruído reversívelmente; remover exclui o participante.",
        "justificativa": "Escolher a ação conforme a gravidade evita excessos (remoção desnecessária) e permite contenção adequada (silenciamento suficiente).",
        "errosFrequentes": [
          "Tratar silenciar e remover como equivalentes",
          "Remover um participante quando o silêncio seria suficiente"
        ],
        "variacao": "O participante apenas esqueceu de desligar o microfone: silenciar é a ação proporcional, não remover."
      }
    ]
  },
  "m3-u4-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A autenticação é o primeiro filtro de ingresso na reunião institucional, antes do lobby e da moderação. A prova descreve configurações — link divulgado, domínio restrito, login exigido — e cobra o efeito de cada uma sobre a intrusão e a fricção de convidados externos.",
      "preRequisitos": [
        "Noção de identidade digital: conta, credencial e perfil",
        "Função do lobby como camada de controle de ingresso"
      ],
      "objetivosObservaveis": [
        "Citar os mecanismos de autenticação: senha, link com token, login obrigatório, domínio restrito e sala pessoal com senha",
        "Explicar o que o login obrigatório garante quanto à identidade verificada",
        "Restringir o acesso ao domínio organizacional quando não houver convidados externos",
        "Aplicar boas práticas: não publicar links em canais abertos e rotacionar senhas de salas recorrentes"
      ],
      "competencias": [
        "Controle de acesso a ambientes colaborativos",
        "Configuração segura de reuniões conforme o público",
        "Ponderação entre segurança e fricção de acesso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t1-s1 (Lobby e sala de espera) — retém quem já passou pela autenticação",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — atua depois do ingresso",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — incidente que a autenticação dificulta",
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — fundamentos gerais de autenticação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Aparece em afirmações de certo/errado que associam login obrigatório, domínio restrito e divulgação de link ao risco de intrusão; a classificação é estimativa pedagógica de adequação ao conteúdo programático, não levantamento estatístico."
      }
    },
    "niveis": {
      "iniciante": "Autenticação: senha da reunião; link com token; login obrigatório (apenas usuários autenticados da organização); domínio restrito; sala pessoal com senha. Boas práticas institucionais: exigir login para reuniões internas; restringir a domínio organizacional; não publicar links em canais abertos; rotacionar senhas de salas recorrentes. A disponibilidade de cada método varia por plataforma e plano.",
      "intermediario": "Escolher o mecanismo conforme o público: sem externos, login obrigatório e domínio restrito bastam; com externos, flexibiliza-se o domínio e compensa-se com lobby, senha e aprovação nominal. Mais exigência, menos intrusão e mais fricção.",
      "avancado": "Combinar camadas: o domínio filtra contas, o login vincula identidade verificada e o lobby dá ao anfitrião a decisão final sobre cada entrada. A senha e o link protegem o convite; publicá-lo em canal aberto anula essa proteção.",
      "especialista": "Desenhar a política por tipo de reunião: recorrentes de equipe com login e domínio; encontros com parceiros com login, lobby e lista de convidados; eventos abertos com registro prévio. Prever rotação de senhas e revisão periódica das exceções."
    },
    "comparacoes": [
      {
        "tema": "Link com token versus senha de reunião",
        "a": {
          "rotulo": "Link com token",
          "texto": "Endereço exclusivo e difícil de adivinhar, que perde o valor protetivo ao ser encaminhado ou publicado."
        },
        "b": {
          "rotulo": "Senha de reunião",
          "texto": "Segredo compartilhado, informado a cada participante e válido nas reuniões seguintes se não for trocado."
        },
        "diferencaGabarito": "O token protege pela unicidade do endereço; a senha, pela confidencialidade. Vazou o link, gera-se outro; vazou a senha, é preciso trocá-la."
      },
      {
        "tema": "Login obrigatório versus acesso livre",
        "a": {
          "rotulo": "Login obrigatório",
          "texto": "Somente contas autenticadas ingressam, vinculando a participação a uma identidade verificada."
        },
        "b": {
          "rotulo": "Acesso livre",
          "texto": "Qualquer pessoa com o convite entra, inclusive anônimos, sem comprovação de vínculo."
        },
        "diferencaGabarito": "O login habilita rastreabilidade e bloqueia anônimos; o acesso livre facilita a intrusão, ainda que reduza a fricção de entrada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O link secreto da reunião dispensa qualquer autenticação adicional.",
        "porqueErrada": "Links são encaminhados, copiados e publicados sem controle; a unicidade do endereço não verifica identidade alguma.",
        "versaoCorreta": "Combine o link com login obrigatório, senha ou lobby, para que a entrada dependa de identidade verificada e aprovação do anfitrião."
      },
      {
        "afirmacaoEquivocada": "Reunião interna pode aceitar qualquer conta autenticada, desde que não seja anônima.",
        "porqueErrada": "Conta autenticada de outro domínio é desconhecida para a organização; admiti-la expõe informações internas.",
        "versaoCorreta": "Sem convidados externos, restrinja o ingresso ao domínio organizacional, admitindo apenas contas da própria instituição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Autenticação: verificação da identidade do participante antes de conceder acesso",
        "Link com token: endereço exclusivo de convite, cuja proteção se perde quando divulgado",
        "Login obrigatório: ingresso apenas com conta autenticada, vinculada a uma identidade",
        "Domínio restrito: admissão apenas de contas do domínio organizacional",
        "Sala pessoal com senha: espaço recorrente cujo segredo deve ser rotacionado"
      ],
      "regras": [
        "Quanto mais forte a exigência de autenticação, menor a intrusão e maior a fricção para externos",
        "Reunião interna sem convidados externos deve restringir o ingresso ao domínio organizacional",
        "Não publicar links em canais abertos; rotacionar senhas de salas recorrentes"
      ],
      "comparacoes": [
        "Login obrigatório vincula identidade verificada; acesso livre admite anônimos e facilita a intrusão"
      ],
      "fluxos": [
        "Camadas de ingresso: convite protegido (link ou senha) → autenticação (login e domínio) → lobby com aprovação do anfitrião"
      ],
      "excecoes": [
        "A disponibilidade de cada mecanismo varia por plataforma e plano, devendo ser confirmada na documentação oficial"
      ],
      "palavrasChave": [
        "identidade",
        "domínio",
        "token",
        "login obrigatório",
        "fricção",
        "rotação de senha"
      ],
      "checklist": [
        "Cito os cinco mecanismos de autenticação e o efeito de cada um?",
        "Explico por que o link divulgado deixa de ser proteção?",
        "Restrinjo ao domínio quando não há convidados externos?",
        "Rotaciono senhas de salas recorrentes e combino autenticação com lobby?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que exigir login obrigatório para reuniões internas, se o convite já é enviado apenas a servidores da equipe?",
        "dados": "Reunião de equipe semanal, sem externos; convites por e-mail institucional; plataforma permite login obrigatório, domínio restrito ou acesso livre.",
        "conceitos": [
          "Login obrigatório",
          "Domínio restrito"
        ],
        "estrategia": "Comparar quem pode entrar em cada configuração e o que a identidade verificada acrescenta ao controle do acesso.",
        "execucao": [
          "Mapear o público: apenas servidores com conta no domínio da organização.",
          "Avaliar o acesso livre: qualquer pessoa com o convite ingressa, inclusive quem o recebeu por encaminhamento.",
          "Avaliar o login obrigatório: apenas contas autenticadas ingressam, sem anônimos e sem fricção para quem já tem conta."
        ],
        "resultado": "Garante que apenas pessoas autenticadas da organização entrem, reduzindo acesso anônimo e intrusão.",
        "justificativa": "A entrada passa a depender de identidade autenticada, e não da posse do convite. Em reunião interna todos os legitimados já têm conta, de modo que a exigência filtra intrusos sem prejudicar participantes.",
        "errosFrequentes": [
          "Supor que o convite enviado a poucos dispensa autenticação, ignorando o encaminhamento.",
          "Confundir login obrigatório com domínio restrito: um verifica identidade; o outro limita as contas ao domínio."
        ],
        "variacao": "Suponha que um fornecedor externo precise participar da mesma reunião semanal: o login permanece, mas o domínio deve ser flexibilizado, compensando com lobby e aprovação nominal."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma reunião tratará dados pessoais de servidores e se repete semanalmente com o mesmo grupo. Que camadas de proteção configurar?",
        "dados": "Sala recorrente de comissão, pauta com dados pessoais; apenas membros do domínio; a plataforma permite login, domínio restrito, lobby, senha, restrição de tela e gravação controlada.",
        "conceitos": [
          "Domínio restrito",
          "Defesa em camadas"
        ],
        "estrategia": "Sobrepor os controles para que cada camada cubra a falha da anterior: filtro de contas, identidade verificada, aprovação de entrada e proteção do exibido.",
        "execucao": [
          "Exigir login e restringir a sala ao domínio, pois não há convidados externos.",
          "Ativar o lobby, reservando ao anfitrião a aprovação final de cada entrada.",
          "Definir senha com rotação periódica, restringir o compartilhamento de tela ao anfitrião e tratar a gravação como ato controlado."
        ],
        "resultado": "Login obrigatório, domínio restrito, lobby, senha, compartilhamento de tela restrito ao anfitrião e gravação controlada.",
        "justificativa": "Nenhuma camada isolada cobre todos os vetores: o domínio filtra contas, o login verifica identidade, o lobby decide caso a caso e as restrições de tela e gravação limitam o que se propaga. A combinação é o gabarito.",
        "errosFrequentes": [
          "Escolher apenas uma camada (por exemplo, a senha) e considerar a reunião protegida.",
          "Manter domínio restrito em reunião que passa a receber externos, bloqueando participantes legítimos."
        ],
        "variacao": "Se a comissão passar a receber um auditor externo mensalmente, qual camada cede? Abre-se o domínio para o convidado, mantendo login, lobby e aprovação nominal."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma: 'Publicar o link da reunião em rede social é seguro, pois apenas quem tiver o endereço conseguirá entrar.' Avalie.",
        "dados": "Reunião administrativa às 14h; link publicado às 9h em perfil público; sem senha e com lobby desativado; a equipe considera o endereço 'difícil de adivinhar'.",
        "conceitos": [
          "Link com token",
          "Divulgação de convite"
        ],
        "estrategia": "Submeter a afirmação ao critério de quem controla a propagação do link: publicado em rede social, o endereço sai do controle da organização.",
        "execucao": [
          "Observar que a publicação transfere o convite para canal sem restrição de público.",
          "Verificar que, sem senha e sem lobby, quem obtém o link entra sem verificação alguma.",
          "Concluir que a unicidade do endereço não é autenticação: a ameaça é a divulgação, não a adivinhação."
        ],
        "resultado": "Errado. Publicar links abertamente permite acesso de qualquer pessoa; compartilhe por canais seguros e restritos.",
        "justificativa": "A leitura ingênua equipara 'difícil de adivinhar' a 'seguro', mas a ameaça é a divulgação: tornado público, o link alcança desconhecidos sem barreira adicional, pois senha e lobby estavam desativados.",
        "errosFrequentes": [
          "Avaliar a segurança pela dificuldade de adivinhar o endereço, e não pelo controle da propagação.",
          "Subestimar o alcance de publicações abertas, tratando o interesse em entrar como raro."
        ],
        "variacao": "Mude o canal: o link é enviado por e-mail a uma lista ampla, com endereços externos no campo de cópia visível. A estrutura do erro é a mesma — divulgação sem controle."
      }
    ]
  },
  "m3-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Compartilhar a tela é a ação que mais expõe conteúdo não intencional em uma reunião: notificações, abas e arquivos entram no quadro junto com o que se pretendia mostrar. A prova cobra o risco da tela inteira, os controles preventivos e o papel do anfitrião.",
      "preRequisitos": [
        "Noção de reunião online e de seus papéis (anfitrião e participantes)",
        "Distinção entre informação pública e informação sensível"
      ],
      "objetivosObservaveis": [
        "Identificar o que o compartilhamento expõe além do conteúdo pretendido",
        "Explicar por que a tela inteira amplia o risco frente à janela específica",
        "Aplicar os controles: janela específica, modo não perturbe e revisão prévia",
        "Encerrar o compartilhamento ao término da exibição"
      ],
      "competencias": [
        "Condução segura de compartilhamento de tela",
        "Prevenção de vazamento em ambientes colaborativos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t1-s2 (Compartilhamento acidental de tela) — estudo de caso do risco tratado aqui",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — restringir quem compartilha é ação de moderação",
        "m3-u4-t2-s2 (Coautoria e documentos compartilhados em reunião) — colaboração com exposição controlada",
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas) — consequência do vazamento por tela"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Surge em afirmações de certo/errado sobre exposição acidental e em questões que pedem a prática recomendada ao apresentar dados sensíveis. A classificação é estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Compartilhamento de tela: exibir conteúdo do dispositivo aos participantes. Riscos: exposição acidental de dados sensíveis (notificações, abas, arquivos), compartilhamento de tela inteira em vez de janela específica, esquecer de parar o compartilhamento. Controles: compartilhar apenas janela/aplicativo específico; desativar notificações; usar modo 'não perturbe'; verificar antes de compartilhar; parar ao terminar. Anfitrião pode restringir quem compartilha.",
      "intermediario": "Distinguir os modos: a tela inteira exibe tudo o que aparece no monitor, incluindo notificações e abas não relacionadas; a janela ou o aplicativo específico restringe a exibição ao conteúdo escolhido. Fechar programas sensíveis e silenciar notificações reduz a superfície exposta.",
      "avancado": "Montar o procedimento pré-compartilhamento: fechar abas e aplicativos sensíveis, ativar o modo não perturbe, selecionar a janela exata, revisar o que ficará visível e encerrar ao término. Com dados sensíveis, o anfitrião restringe quem pode compartilhar.",
      "especialista": "Diante de um vazamento por tela, reconstruir a falha: o que foi exibido além do previsto, qual controle faltou (janela específica, silenciamento, revisão ou encerramento) e como o anfitrião poderia limitar a permissão. Ajustar o procedimento institucional para impedir a repetição."
    },
    "comparacoes": [
      {
        "tema": "Tela inteira versus janela específica",
        "a": {
          "rotulo": "Tela inteira",
          "texto": "Exibe todo o conteúdo visível do dispositivo: notificações, abas, janelas sobrepostas e barras de ferramentas."
        },
        "b": {
          "rotulo": "Janela específica",
          "texto": "Exibe apenas o aplicativo escolhido, mantendo o restante da área de trabalho fora da transmissão."
        },
        "diferencaGabarito": "O modo define a superfície de exposição: quanto mais restrita a janela, menor a chance de exibir conteúdo não intencional."
      },
      {
        "tema": "Notificações ativas versus modo não perturbe",
        "a": {
          "rotulo": "Notificações ativas",
          "texto": "Alertas surgem sobre a tela compartilhada no instante em que chegam, exibindo remetente e trecho do conteúdo."
        },
        "b": {
          "rotulo": "Modo não perturbe",
          "texto": "Suprime as notificações durante a reunião, impedindo que conteúdo privado apareça sobre a apresentação."
        },
        "diferencaGabarito": "O controle elimina o vetor: silenciar notificações antes de compartilhar é mais confiável do que reagir ao alerta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Compartilhar a tela inteira é mais prático e, por isso, seguro o suficiente.",
        "porqueErrada": "A praticidade não reduz a exposição: a tela inteira transmite notificações, abas e arquivos que não fazem parte da apresentação.",
        "versaoCorreta": "Compartilhe a janela ou o aplicativo específico, mantendo o restante do ambiente fora da transmissão."
      },
      {
        "afirmacaoEquivocada": "Notificações não aparecem durante o compartilhamento de tela.",
        "porqueErrada": "Notificações surgem sobre a área compartilhada no instante em que chegam, exibindo remetente e conteúdo a todos.",
        "versaoCorreta": "Ative o modo não perturbe ou desative as notificações antes de compartilhar, suprimindo o vetor de exposição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Compartilhamento de tela: exibição do conteúdo do dispositivo aos participantes",
        "Janela ou aplicativo específico: modo que limita a transmissão ao programa escolhido",
        "Modo não perturbe: supressão temporária de notificações durante a reunião",
        "Permissão do anfitrião: restrição de quem pode compartilhar tela",
        "Superfície de exposição: tudo o que aparece junto ao conteúdo pretendido"
      ],
      "regras": [
        "Compartilhar janela ou aplicativo específico em vez da tela inteira quando houver dados sensíveis",
        "Silenciar notificações e fechar abas e programas sensíveis antes de iniciar",
        "Encerrar explicitamente o compartilhamento ao terminar a exibição"
      ],
      "comparacoes": [
        "Tela inteira amplia a superfície de exposição; janela específica restringe a transmissão ao pretendido"
      ],
      "fluxos": [
        "Procedimento seguro: revisar a área de trabalho → fechar conteúdo sensível → silenciar notificações → compartilhar a janela exata → encerrar ao fim"
      ],
      "excecoes": [
        "A permissão para compartilhar pode ser restrita pelo anfitrião, concentrando a ação em pessoas confiáveis"
      ],
      "palavrasChave": [
        "exposição acidental",
        "tela inteira",
        "janela específica",
        "não perturbe",
        "encerramento"
      ],
      "checklist": [
        "Identifico tudo o que o compartilhamento pode exibir além do pretendido?",
        "Explico o risco adicional da tela inteira?",
        "Silencio notificações e fecho conteúdo sensível antes de compartilhar?",
        "Encerro o compartilhamento ao terminar?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença prática entre compartilhar a tela inteira e compartilhar uma janela específica em uma reunião online?",
        "dados": "Servidor apresenta uma planilha de despesas; no mesmo monitor há navegador com webmail pessoal, mensageiro com notificações ativas e janelas sobrepostas.",
        "conceitos": [
          "Tela inteira",
          "Janela específica"
        ],
        "estrategia": "Comparar o que fica visível em cada modo: tudo o que o monitor exibe versus apenas o aplicativo escolhido.",
        "execucao": [
          "Inventariar o visível no monitor: planilha, webmail, mensageiro e janelas sobrepostas.",
          "Verificar o modo tela inteira: todo o inventário é transmitido.",
          "Verificar o modo janela específica: apenas a planilha é transmitida, reduzindo a exposição."
        ],
        "resultado": "Tela inteira expõe tudo (notificações, abas); janela específica expõe apenas o aplicativo escolhido, reduzindo risco.",
        "justificativa": "A transmissão da tela inteira acompanha tudo o que aparece no monitor, inclusive o não pretendido; a janela específica limita o sinal ao aplicativo selecionado. A diferença é de escopo, não de habilidade do apresentador.",
        "errosFrequentes": [
          "Tratar o compartilhamento como exibição apenas do pretendido, ignorando o que surge ao lado.",
          "Atribuir o risco ao aplicativo de reunião, e não à escolha do modo."
        ],
        "variacao": "Substitua a planilha por um relatório aberto em aba do navegador: o modo correto passa a ser compartilhar aquela janela, e a análise de exposição se repete."
      },
      {
        "tipo": "aplicacao",
        "problema": "Antes de compartilhar a tela em reunião institucional com dados sensíveis, que verificações e ajustes o apresentador deve executar?",
        "dados": "Reunião de prestação de contas; slides em aplicativo próprio; mensageiro com notificações ativas; abas de banco e webmail abertas; anfitrião restringiu quem compartilha.",
        "conceitos": [
          "Modo não perturbe",
          "Revisão prévia"
        ],
        "estrategia": "Aplicar o procedimento pré-compartilhamento na ordem que elimina cada vetor: fechar o sensível, silenciar alertas, escolher a janela exata e revisar.",
        "execucao": [
          "Fechar as abas de banco e webmail e encerrar conversas sensíveis do mensageiro.",
          "Ativar o modo não perturbe ou desativar as notificações do sistema.",
          "Compartilhar a janela do aplicativo de slides, revisar o primeiro slide e encerrar ao término."
        ],
        "resultado": "Fechar abas/arquivos sensíveis, desativar notificações, compartilhar apenas a janela necessária e confirmar com participantes o que será exibido.",
        "justificativa": "Cada passo neutraliza um vetor: abas fechadas não surgem por descuido, notificações silenciadas não aparecem sobre a apresentação e a janela exata impede a transmissão do restante do monitor. Revisão e encerramento completam o ciclo.",
        "errosFrequentes": [
          "Escolher tela inteira por praticidade, confiando em fechar rapidamente o que não deve aparecer.",
          "Esquecer o mensageiro corporativo, cujas notificações surgem sobre a área compartilhada."
        ],
        "variacao": "Mude o cenário para demonstração de sistema no navegador com login em tela inicial: acrescenta-se verificar credenciais visíveis e histórico de endereços antes de transmitir."
      },
      {
        "tipo": "erro",
        "problema": "Um apresentador afirma: 'Compartilhar a tela inteira é sempre seguro, pois controlo o mouse e posso fechar o que não deve aparecer.' Avalie.",
        "dados": "Durante a apresentação, chega mensagem pessoal; a notificação surge sobre a tela transmitida com remetente e trecho do texto; há aba de banco minimizada no navegador.",
        "conceitos": [
          "Exposição acidental",
          "Controle do apresentador"
        ],
        "estrategia": "Testar a afirmação contra o que o apresentador não controla: o momento e o conteúdo das notificações, que surgem sem ação dele.",
        "execucao": [
          "Identificar o pressuposto: a segurança dependeria só da ação deliberada do apresentador.",
          "Confrontar com o evento real: a notificação chega sozinha e é exibida a todos, como o conteúdo minimizado.",
          "Concluir que o controle manual não substitui os controles preventivos de escopo e silenciamento."
        ],
        "resultado": "Errado. Pode expor dados sensíveis; prefira compartilhamento de janela específica.",
        "justificativa": "A resposta plausível assume risco gerido em tempo real, mas o vetor aparece justamente quando o apresentador não age: notificações automáticas e conteúdo em segundo plano. A recomendação técnica é reduzir o escopo transmitido, não confiar na reação manual.",
        "errosFrequentes": [
          "Igualar segurança a capacidade de reagir rápido, em vez de eliminar o vetor.",
          "Esquecer que a tela inteira transmite também o minimizado e o sobreposto."
        ],
        "variacao": "Suponha que a notificação contenha dado pessoal de servidor: além do modo de compartilhamento, cabe comunicar o incidente e revisar o procedimento de apresentação."
      }
    ]
  },
  "m3-u4-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Coautoria e documentos compartilhados permitem que vários participantes editem o mesmo arquivo simultaneamente durante a reunião. Quando não há editor responsável nem controle de versão, surgem versões paralelas e decisões ficam dispersas em cópias distintas. A exposição indevida ocorre quando permissões são muito amplas e dados sensíveis ficam visíveis a participantes não autorizados.",
      "preRequisitos": [
        "Noção de documento compartilhado em nuvem",
        "Entendimento básico de permissões de acesso",
        "Conceito de controle de versão"
      ],
      "objetivosObservaveis": [
        "Definir Coautoria e documentos compartilhados em reunião e seu papel em reuniões",
        "Identificar benefícios e riscos associados a Coautoria e documentos compartilhados em reunião",
        "Demonstrar boas práticas de uso seguro de Coautoria e documentos compartilhados em reunião",
        "Aplicar Coautoria e documentos compartilhados em reunião em cenário real de videoconferência"
      ],
      "competencias": [
        "Colaboração digital segura",
        "Gestão de risco de informação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t2-s3 (Chat, reações e recursos auxiliares) — relação contextual com chat, reações e recursos auxiliares"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de comunicação e gestão da informação cobram coautoria e documentos compartilhados em reunião. O tema aparece em itens sobre uso responsável de ferramentas colaborativas, segurança de dados e boas práticas em videoconferência aplicada ao serviço público."
      }
    },
    "niveis": {
      "iniciante": "Coautoria em tempo real: múltiplos participantes editam o mesmo documento (Word/Google Docs) durante a reunião. Benefícios: decisões registradas, menos versões. Riscos: edições não revisadas, perda de controle de versão, exposição de dados. Boas práticas: definir editor responsável, usar controle de versão/comentários, salvar versão final, restringir permissões (edição vs visualização).",
      "intermediario": "No nível intermediário o aluno aplica coautoria em tempo real a documentos de reunião, resolve conflitos de edição simultânea, diferencia níveis de permissão (edição versus visualização) e utiliza o histórico de versões para reverter alterações indevidas. Orienta participantes sobre boas práticas de coautoria e avalia o impacto na rastreabilidade documental das decisões registradas.",
      "avancado": "No nível avançado a análise de coautoria em reunião aborda governança da informação documental, conformidade com políticas institucionais de arquivamento e alinhamento com normas de gestão documental. O aluno antecipa conflitos de versão, avalia riscos de exposição de dados e propõe controles preventivos, como matriz de permissões por perfil e procedimento de resposta a incidentes de edição.",
      "especialista": "No nível especialista o aluno projeta fluxos que integram coautoria e documentos compartilhados em reunião com aprovação formal, assinatura eletrônica e arquivamento seguro. Avalia trade-offs entre agilidade e segurança, define matriz de permissões por perfil e elabora procedimentos de resposta a incidentes relacionados a Coautoria e documentos compartilhados em reunião."
    },
    "comparacoes": [
      {
        "tema": "Coautoria e documentos compartilhados em reunião com governança versus sem governança",
        "a": {
          "rotulo": "Sem governança",
          "texto": "Uso livre de recursos sem definição de responsáveis, permissões amplas e ausência de registro formal de decisões."
        },
        "b": {
          "rotulo": "Com governança",
          "texto": "Definição de responsáveis, permissões por perfil, registro de versões e procedimentos de validação das decisões."
        },
        "diferencaGabarito": "A governança garante rastreabilidade, segurança e conformidade; a ausência gera riscos de inconsistência e vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Coautoria não exige controle de permissões.'",
        "porqueErrada": "Sem controle de permissões, qualquer participante pode alterar ou excluir o conteúdo do documento compartilhado, sem registro de quem fez cada mudança. Isso gera versões conflitantes, perda de rastreabilidade e risco de exclusão acidental de informações relevantes da reunião.",
        "versaoCorreta": "Errado. Sem controle, qualquer participante pode alterar ou excluir conteúdo; defina permissões adequadas."
      },
      {
        "afirmacaoEquivocada": "Coautoria e documentos compartilhados em reunião pode ser usado sem considerar privacidade.",
        "porqueErrada": "Ignorar privacidade expõe dados pessoais e contraria normas de proteção.",
        "versaoCorreta": "O uso deve respeitar privacidade e normas aplicáveis."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Coautoria e documentos compartilhados em reunião",
        "Governança da informação",
        "Controle de acesso",
        "Rastreabilidade"
      ],
      "regras": [
        "Definir responsáveis",
        "Restringir permissões"
      ],
      "comparacoes": [
        "Com governança versus sem governança"
      ],
      "fluxos": [
        "Planejamento -> execução -> revisão -> arquivamento"
      ],
      "excecoes": [
        "Em situações sensíveis, edição pode ser proibida"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "versão",
        "risco",
        "controle"
      ],
      "checklist": [
        "Responsável definido",
        "Permissões configuradas",
        "Versão final salva",
        "Acesso revisado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Introduzir coautoria e documentos compartilhados em reunião explicando seu conceito básico e por que ele importa em reuniões institucionais com registro de decisões.",
        "dados": "Situação de coautoria e documentos compartilhados em reunião em videoconferência com 5 participantes, reunião de planejamento, necessidade de registrar decisões sem gerar versões paralelas.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Explicar definição de coautoria e documentos compartilhados em reunião, destacar benefícios de registro imediato e apontar riscos iniciais de uso sem controle em coautoria e documentos compartilhados em reunião.",
        "execucao": [
          "Apresentar conceito de forma simples",
          "Mostrar exemplo de uso em reunião curta",
          "Listar benefícios observáveis",
          "Alertar para riscos básicos"
        ],
        "resultado": "Compreensão inicial de coautoria e documentos compartilhados em reunião e reconhecimento de sua relevância para registro de decisões.",
        "justificativa": "A introdução conecta conceito a prática, permitindo ao aluno reconhecer onde coautoria e documentos compartilhados em reunião se aplica e quais cuidados iniciais são necessários para evitar erros comuns.",
        "errosFrequentes": [
          "Confundir colaboração com ausência de controle",
          "Achar que tecnologia resolve sozinha"
        ],
        "variacao": "Introduzir coautoria e documentos compartilhados em reunião em contexto de reunião externa com convidados, destacando limites de compartilhamento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Aplicar coautoria e documentos compartilhados em reunião em reunião real com dados concretos, definindo responsáveis, permissões e salvamento da versão final validada.",
        "dados": "Reunião de 8 pessoas sobre contratação envolvendo coautoria e documentos compartilhados em reunião, documento com cláusulas sensíveis, plataforma permite histórico e controle de acesso por perfil.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Definir editor responsável para coautoria e documentos compartilhados em reunião, restringir permissões, orientar uso de comentários e programar salvamento da versão final com registro de aprovação.",
        "execucao": [
          "Configurar permissões por perfil",
          "Designar editor responsável",
          "Orientar uso de sugestões",
          "Salvar versão final com nome padronizado"
        ],
        "resultado": "Documento protegido, comentários organizados e versão final validada pelo editor responsável.",
        "justificativa": "A aplicação prática demonstra como coautoria e documentos compartilhados em reunião reduz riscos operacionais e garante rastreabilidade, alinhando-se a boas práticas de governança da informação.",
        "errosFrequentes": [
          "Manter permissões amplas por comodidade",
          "Esquecer de registrar quem validou a versão"
        ],
        "variacao": "Aplicar coautoria e documentos compartilhados em reunião em reunião com gravação simultânea, avaliando como integrar registro do documento à política de retenção."
      },
      {
        "tipo": "erro",
        "problema": "Identificar erro de interpretação sobre coautoria e documentos compartilhados em reunião e corrigir leitura equivocada que leva a risco de exposição ou inconsistência.",
        "dados": "Afirmação comum sobre coautoria e documentos compartilhados em reunião que dispensa controles, reunião com 12 participantes, permissões abertas, histórico desativado para coautoria e documentos compartilhados em reunião.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Desconstruir premissa sobre coautoria e documentos compartilhados em reunião, mostrar consequências de falta de controle e propor correção imediata com definição de permissões e histórico.",
        "execucao": [
          "Identificar premissa incorreta",
          "Listar consequências práticas",
          "Propor correção de permissões",
          "Verificar ativação de histórico"
        ],
        "resultado": "Reconhecimento de que coautoria e documentos compartilhados em reunião exige controles e necessidade de correção imediata.",
        "justificativa": "A análise de erro sobre coautoria e documentos compartilhados em reunião evidência por que a leitura simplista falha, ligando conceito a evidência de risco e reforçando a importância de governança para coautoria e documentos compartilhados em reunião.",
        "errosFrequentes": [
          "Assumir boa vontade como segurança",
          "Confundir colaboração com ausência de governança"
        ],
        "variacao": "Alterar cenário para reunião com dados pessoais, exigindo avaliação de base legal além do controle técnico."
      }
    ]
  },
  "m3-u4-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Chat, reações, enquetes, quadro branco e salas simultâneas são canais que registram informação durante a reunião. O chat pode produzir texto gravado, as enquetes coletam respostas e, às vezes, dados pessoais, e o quadro branco acumula conteúdo colaborativo. Tratar cada recurso como um canal potencialmente registrado evita exposição acidental de dados sensíveis.",
      "preRequisitos": [
        "Noção de documento compartilhado em nuvem",
        "Entendimento básico de permissões de acesso",
        "Conceito de controle de versão"
      ],
      "objetivosObservaveis": [
        "Definir Chat, reações e recursos auxiliares e seu papel em reuniões",
        "Identificar benefícios e riscos associados a Chat, reações e recursos auxiliares",
        "Demonstrar boas práticas de uso seguro de Chat, reações e recursos auxiliares",
        "Aplicar Chat, reações e recursos auxiliares em cenário real de videoconferência"
      ],
      "competencias": [
        "Colaboração digital segura",
        "Gestão de risco de informação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t2-s2 (Coautoria e documentos compartilhados em reunião) — relação contextual com coautoria e documentos compartilhados em reunião"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de comunicação e gestão da informação cobram chat, reações e recursos auxiliares. O tema aparece em itens sobre uso responsável de ferramentas colaborativas, segurança de dados e boas práticas em videoconferência aplicada ao serviço público."
      }
    },
    "niveis": {
      "iniciante": "Recursos auxiliares: chat (mensagens de texto), reações (emojis), levantar mão, enquetes (polls), quadro branco (whiteboard), salas simultâneas (breakout rooms). Cuidados: chat pode registrar informações sensíveis; enquetes podem coletar dados pessoais; gravação pode incluir chat. Boas práticas: definir se chat será gravado, evitar dados sensíveis no chat, informar sobre coleta em enquetes.",
      "intermediario": "No nível intermediário o aluno gerencia chat, reações, enquetes, quadro branco e salas simultâneas em reuniões reais, decide quando o chat será gravado, evita dados sensíveis nas mensagens de texto e orienta sobre coleta de dados pessoais em enquetes. Avalia o impacto desses recursos na rastreabilidade documental da reunião.",
      "avancado": "No nível avançado a análise de recursos auxiliares de reunião trata da governança de canais como chat, enquetes e quadro branco, da conformidade com políticas de retenção e de gestão documental e do alinhamento com a LGPD quando há coleta de dados pessoais. O aluno antecipa riscos de exposição no chat gravado e propõe controles preventivos, como limitar a gravação do chat e anonimizar respostas de enquetes.",
      "especialista": "No nível especialista o aluno define a retenção da gravação (áudio, vídeo, chat e transcrição), decide quem aprova a gravação com assinatura eletrônica e armazena o conteúdo gravado com acesso restrito e criptografia. Avalia o trade-off entre agilidade e segurança, define a matriz de permissões de acesso à gravação e elabora o procedimento de resposta a incidentes de vazamento do conteúdo gravado."
    },
    "comparacoes": [
      {
        "tema": "Chat, reações e recursos auxiliares com governança versus sem governança",
        "a": {
          "rotulo": "Sem governança",
          "texto": "Uso livre de recursos sem definição de responsáveis, permissões amplas e ausência de registro formal de decisões."
        },
        "b": {
          "rotulo": "Com governança",
          "texto": "Definição de responsáveis, permissões por perfil, registro de versões e procedimentos de validação das decisões."
        },
        "diferencaGabarito": "A governança garante rastreabilidade, segurança e conformidade; a ausência gera riscos de inconsistência e vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Chat de reunião é efêmero e não fica registrado.'",
        "porqueErrada": "O chat da reunião não é efêmero: a maioria das plataformas grava ou arquiva o histórico de mensagens, inclusive quando a reunião é gravada. Informações sensíveis enviadas pelo chat podem permanecer acessíveis após o encontro, devendo ser tratadas como comunicação formal da instituição.",
        "versaoCorreta": "Errado. Chat pode ser gravado e arquivado; trate como comunicação formal."
      },
      {
        "afirmacaoEquivocada": "Chat, reações e recursos auxiliares pode ser usado sem considerar privacidade.",
        "porqueErrada": "Ignorar privacidade expõe dados pessoais e contraria normas de proteção.",
        "versaoCorreta": "O uso deve respeitar privacidade e normas aplicáveis."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Chat, reações e recursos auxiliares",
        "Governança da informação",
        "Controle de acesso",
        "Rastreabilidade"
      ],
      "regras": [
        "Definir responsáveis",
        "Restringir permissões"
      ],
      "comparacoes": [
        "Com governança versus sem governança"
      ],
      "fluxos": [
        "Planejamento -> execução -> revisão -> arquivamento"
      ],
      "excecoes": [
        "Em situações sensíveis, edição pode ser proibida"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "versão",
        "risco",
        "controle"
      ],
      "checklist": [
        "Responsável definido",
        "Permissões configuradas",
        "Versão final salva",
        "Acesso revisado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Introduzir chat, reações e recursos auxiliares explicando seu conceito básico e por que ele importa em reuniões institucionais com registro de decisões.",
        "dados": "Situação de chat, reações e recursos auxiliares em videoconferência com 5 participantes, reunião de planejamento, necessidade de registrar decisões sem gerar versões paralelas.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Explicar definição de chat, reações e recursos auxiliares, destacar benefícios de registro imediato e apontar riscos iniciais de uso sem controle em chat, reações e recursos auxiliares.",
        "execucao": [
          "Apresentar conceito de forma simples",
          "Mostrar exemplo de uso em reunião curta",
          "Listar benefícios observáveis",
          "Alertar para riscos básicos"
        ],
        "resultado": "Compreensão inicial de chat, reações e recursos auxiliares e reconhecimento de sua relevância para registro de decisões.",
        "justificativa": "A introdução conecta conceito a prática, permitindo ao aluno reconhecer onde chat, reações e recursos auxiliares se aplica e quais cuidados iniciais são necessários para evitar erros comuns.",
        "errosFrequentes": [
          "Confundir colaboração com ausência de controle",
          "Achar que tecnologia resolve sozinha"
        ],
        "variacao": "Introduzir chat, reações e recursos auxiliares em contexto de reunião externa com convidados, destacando limites de compartilhamento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Aplicar chat, reações e recursos auxiliares em reunião real com dados concretos, definindo responsáveis, permissões e salvamento da versão final validada.",
        "dados": "Reunião de 8 pessoas sobre contratação envolvendo chat, reações e recursos auxiliares, documento com cláusulas sensíveis, plataforma permite histórico e controle de acesso por perfil.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Definir editor responsável para chat, reações e recursos auxiliares, restringir permissões, orientar uso de comentários e programar salvamento da versão final com registro de aprovação.",
        "execucao": [
          "Configurar permissões por perfil",
          "Designar editor responsável",
          "Orientar uso de sugestões",
          "Salvar versão final com nome padronizado"
        ],
        "resultado": "Documento protegido, comentários organizados e versão final validada pelo editor responsável.",
        "justificativa": "A aplicação prática demonstra como chat, reações e recursos auxiliares reduz riscos operacionais e garante rastreabilidade, alinhando-se a boas práticas de governança da informação.",
        "errosFrequentes": [
          "Manter permissões amplas por comodidade",
          "Esquecer de registrar quem validou a versão"
        ],
        "variacao": "Aplicar chat, reações e recursos auxiliares em reunião com gravação simultânea, avaliando como integrar registro do documento à política de retenção."
      },
      {
        "tipo": "erro",
        "problema": "Identificar erro de interpretação sobre chat, reações e recursos auxiliares e corrigir leitura equivocada que leva a risco de exposição ou inconsistência.",
        "dados": "Afirmação comum sobre chat, reações e recursos auxiliares que dispensa controles, reunião com 12 participantes, permissões abertas, histórico desativado para chat, reações e recursos auxiliares.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Desconstruir premissa sobre chat, reações e recursos auxiliares, mostrar consequências de falta de controle e propor correção imediata com definição de permissões e histórico.",
        "execucao": [
          "Identificar premissa incorreta",
          "Listar consequências práticas",
          "Propor correção de permissões",
          "Verificar ativação de histórico"
        ],
        "resultado": "Reconhecimento de que chat, reações e recursos auxiliares exige controles e necessidade de correção imediata.",
        "justificativa": "A análise de erro sobre chat, reações e recursos auxiliares evidência por que a leitura simplista falha, ligando conceito a evidência de risco e reforçando a importância de governança para chat, reações e recursos auxiliares.",
        "errosFrequentes": [
          "Assumir boa vontade como segurança",
          "Confundir colaboração com ausência de governança"
        ],
        "variacao": "Alterar cenário para reunião com dados pessoais, exigindo avaliação de base legal além do controle técnico."
      }
    ]
  },
  "m3-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Em contexto institucional, a política de gravação estabelece quando gravar, quem pode gravar, onde ficam armazenados os registros e por quanto tempo são retidos, definindo a qualidade das decisões registradas em videoconferência. Compreender esses elementos permite conter versões paralelas, conter vazamentos e assegurar a rastreabilidade documental; a falta de domínio produz inconsistências, perda de controle de versão e exposição indevida de informações sensíveis durante a reunião.",
      "preRequisitos": [
        "Noção de documento compartilhado em nuvem",
        "Entendimento básico de permissões de acesso",
        "Conceito de controle de versão"
      ],
      "objetivosObservaveis": [
        "Definir Políticas de gravação institucional e seu papel em reuniões",
        "Identificar benefícios e riscos associados a Políticas de gravação institucional",
        "Demonstrar boas práticas de uso seguro de Políticas de gravação institucional",
        "Aplicar Políticas de gravação institucional em cenário real de videoconferência"
      ],
      "competencias": [
        "Colaboração digital segura",
        "Gestão de risco de informação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD)) — relação contextual com consentimento e bases legais (lgpd)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de comunicação e gestão da informação cobram políticas de gravação institucional. O tema aparece em itens sobre uso responsável de ferramentas colaborativas, segurança de dados e boas práticas em videoconferência aplicada ao serviço público."
      }
    },
    "niveis": {
      "iniciante": "Política de gravação: definir quando gravar, quem pode gravar, finalidade, armazenamento, acesso, retenção e exclusão. Boas práticas: gravar apenas quando necessário; informar participantes; restringir acesso a autorizados; criptografar; definir prazo de retenção conforme normas de gestão documental e LGPD. A gravação pode incluir vídeo, áudio, chat e transcrição.",
      "intermediario": "No nível intermediário o aluno aplica políticas de gravação institucional em situações práticas, reconhece conflitos de uso, diferencia permissões e utiliza histórico para reverter alterações. Consegue orientar participantes sobre boas práticas específicas de Políticas de gravação institucional e avaliar impactos na rastreabilidade documental.",
      "avancado": "No nível avançado, a análise da política de gravação institucional aborda o mecanismo da gravação — quando gravar, quem pode gravar, o que é capturado (vídeo, áudio, chat e transcrição), armazenamento, controle de acesso, retenção e exclusão — com implicações de governança, aderência às políticas institucionais e observância das normas de gestão documental. O aluno antecipa problemas de versão da gravação, avalia riscos de exposição do conteúdo registrado e propõe controles preventivos adequados ao contexto.",
      "especialista": "No nível especialista o aluno especifica o que a gravação captura (áudio, vídeo, chat e transcrição) e controla as versões da gravação para evitar arquivos paralelos no armazenamento institucional. Define o prazo de retenção, as regras de exclusão e o acesso restrito por perfil a cada versão, e registra quem baixou ou visualizou a gravação, garantindo a rastreabilidade do arquivo ao longo de seu ciclo de vida."
    },
    "comparacoes": [
      {
        "tema": "Políticas de gravação institucional com governança versus sem governança",
        "a": {
          "rotulo": "Sem governança",
          "texto": "Uso livre de recursos sem definição de responsáveis, permissões amplas e ausência de registro formal de decisões."
        },
        "b": {
          "rotulo": "Com governança",
          "texto": "Definição de responsáveis, permissões por perfil, registro de versões e procedimentos de validação das decisões."
        },
        "diferencaGabarito": "A governança garante rastreabilidade, segurança e conformidade; a ausência gera riscos de inconsistência e vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Gravações podem ser compartilhadas livremente.'",
        "porqueErrada": "Errado. Gravações de reunião podem conter dados pessoais, informações sensíveis e registros de decisão; compartilhá-las livremente expõe os titulares e viola a política de gravação e a LGPD. O compartilhamento deve respeitar a finalidade da gravação, o acesso restrito a autorizados e os prazos de retenção definidos na política institucional.",
        "versaoCorreta": "Errado. Gravações podem conter dados pessoais e informações sensíveis; compartilhamento deve seguir política."
      },
      {
        "afirmacaoEquivocada": "Políticas de gravação institucional pode ser usado sem considerar privacidade.",
        "porqueErrada": "Ignorar privacidade expõe dados pessoais e contraria normas de proteção.",
        "versaoCorreta": "O uso deve respeitar privacidade e normas aplicáveis."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Políticas de gravação institucional",
        "Governança da informação",
        "Controle de acesso",
        "Rastreabilidade"
      ],
      "regras": [
        "Definir responsáveis",
        "Restringir permissões"
      ],
      "comparacoes": [
        "Com governança versus sem governança"
      ],
      "fluxos": [
        "Planejamento -> execução -> revisão -> arquivamento"
      ],
      "excecoes": [
        "Em situações sensíveis, edição pode ser proibida"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "versão",
        "risco",
        "controle"
      ],
      "checklist": [
        "Responsável definido",
        "Permissões configuradas",
        "Versão final salva",
        "Acesso revisado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Introduzir políticas de gravação institucional explicando seu conceito básico e por que ele importa em reuniões institucionais com registro de decisões.",
        "dados": "Situação de políticas de gravação institucional em videoconferência com 5 participantes, reunião de planejamento, necessidade de registrar decisões sem gerar versões paralelas.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Explicar definição de políticas de gravação institucional, destacar benefícios de registro imediato e apontar riscos iniciais de uso sem controle em políticas de gravação institucional.",
        "execucao": [
          "Apresentar conceito de forma simples",
          "Mostrar exemplo de uso em reunião curta",
          "Listar benefícios observáveis",
          "Alertar para riscos básicos"
        ],
        "resultado": "Compreensão inicial de políticas de gravação institucional e reconhecimento de sua relevância para registro de decisões.",
        "justificativa": "A introdução conecta conceito a prática, permitindo ao aluno reconhecer onde políticas de gravação institucional se aplica e quais cuidados iniciais são necessários para evitar erros comuns.",
        "errosFrequentes": [
          "Confundir colaboração com ausência de controle",
          "Achar que tecnologia resolve sozinha"
        ],
        "variacao": "Introduzir políticas de gravação institucional em contexto de reunião externa com convidados, destacando limites de compartilhamento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Aplicar políticas de gravação institucional em reunião real com dados concretos, definindo responsáveis, permissões e salvamento da versão final validada.",
        "dados": "Reunião de 8 pessoas sobre contratação envolvendo políticas de gravação institucional, documento com cláusulas sensíveis, plataforma permite histórico e controle de acesso por perfil.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Definir editor responsável para políticas de gravação institucional, restringir permissões, orientar uso de comentários e programar salvamento da versão final com registro de aprovação.",
        "execucao": [
          "Configurar permissões por perfil",
          "Designar editor responsável",
          "Orientar uso de sugestões",
          "Salvar versão final com nome padronizado"
        ],
        "resultado": "Documento protegido, comentários organizados e versão final validada pelo editor responsável.",
        "justificativa": "A aplicação prática demonstra como políticas de gravação institucional reduz riscos operacionais e garante rastreabilidade, alinhando-se a boas práticas de governança da informação.",
        "errosFrequentes": [
          "Manter permissões amplas por comodidade",
          "Esquecer de registrar quem validou a versão"
        ],
        "variacao": "Aplicar políticas de gravação institucional em reunião com gravação simultânea, avaliando como integrar registro do documento à política de retenção."
      },
      {
        "tipo": "erro",
        "problema": "Identificar erro de interpretação sobre políticas de gravação institucional e corrigir leitura equivocada que leva a risco de exposição ou inconsistência.",
        "dados": "Afirmação comum sobre políticas de gravação institucional que dispensa controles, reunião com 12 participantes, permissões abertas, histórico desativado para políticas de gravação institucional.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Desconstruir premissa sobre políticas de gravação institucional, mostrar consequências de falta de controle e propor correção imediata com definição de permissões e histórico.",
        "execucao": [
          "Identificar premissa incorreta",
          "Listar consequências práticas",
          "Propor correção de permissões",
          "Verificar ativação de histórico"
        ],
        "resultado": "Reconhecimento de que políticas de gravação institucional exige controles e necessidade de correção imediata.",
        "justificativa": "A análise de erro sobre políticas de gravação institucional evidência por que a leitura simplista falha, ligando conceito a evidência de risco e reforçando a importância de governança para políticas de gravação institucional.",
        "errosFrequentes": [
          "Assumir boa vontade como segurança",
          "Confundir colaboração com ausência de governança"
        ],
        "variacao": "Alterar cenário para reunião com dados pessoais, exigindo avaliação de base legal além do controle técnico."
      }
    ]
  },
  "m3-u4-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Em contexto institucional, o consentimento e as bases legais da LGPD definem se gravar reuniões com dados pessoais é um tratamento lícito e sob quais condições, o que impacta diretamente a validade das decisões registradas em videoconferência. Dominar o tema permite evitar vazamento de dados, garantir a rastreabilidade e respeitar os direitos dos titulares; a ausência desse domínio gera uso irregular de dados, exposição indevida de informações pessoais e falha de rastreabilidade no curso da reunião.",
      "preRequisitos": [
        "Noção de documento compartilhado em nuvem",
        "Entendimento básico de permissões de acesso",
        "Conceito de controle de versão"
      ],
      "objetivosObservaveis": [
        "Definir Consentimento e bases legais (LGPD) e seu papel em reuniões",
        "Identificar benefícios e riscos associados a Consentimento e bases legais (LGPD)",
        "Demonstrar boas práticas de uso seguro de Consentimento e bases legais (LGPD)",
        "Aplicar Consentimento e bases legais (LGPD) em cenário real de videoconferência"
      ],
      "competencias": [
        "Colaboração digital segura",
        "Gestão de risco de informação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s1 (Políticas de gravação institucional) — relação contextual com políticas de gravação institucional"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de comunicação e gestão da informação cobram consentimento e bases legais (lgpd). O tema aparece em itens sobre uso responsável de ferramentas colaborativas, segurança de dados e boas práticas em videoconferência aplicada ao serviço público."
      }
    },
    "niveis": {
      "iniciante": "LGPD (Lei 13.709/2018): tratamento de dados pessoais exige base legal (consentimento, execução de contrato, obrigação legal, etc.). Gravação de reunião com dados pessoais: informar participantes, obter consentimento quando aplicável, definir finalidade e prazo. Consentimento deve ser livre, informado e inequívoco. Em serviço público, observar também normas de gestão documental e transparência (LAI). Não inventar dispositivos; verificar redação atual em fonte oficial.",
      "intermediario": "No nível intermediário o aluno aplica consentimento e bases legais (lgpd) em situações práticas, reconhece conflitos de uso, diferencia permissões e utiliza histórico para reverter alterações. Consegue orientar participantes sobre boas práticas específicas de Consentimento e bases legais (LGPD) e avaliar impactos na rastreabilidade documental.",
      "avancado": "No nível avançado, a análise do consentimento e das bases legais da LGPD aborda a aplicação casuística do tratamento de dados em gravações — definindo base legal aplicável (consentimento, obrigação legal, execução de contrato etc.), os limites do consentimento (livre, informado e inequívoco) e o equilíbrio entre transparência e proteção de dados pessoais — com implicações de governança, aderência às políticas institucionais e observância das normas de gestão documental. O aluno antecipa problemas de base legal para a gravação, avalia riscos de exposição dos titulares e propõe controles preventivos adequados ao caso concreto.",
      "especialista": "No nível especialista o aluno projeta fluxos que integram consentimento e bases legais (lgpd) com aprovação formal, assinatura eletrônica e arquivamento seguro. Avalia trade-offs entre agilidade e segurança, define matriz de permissões por perfil e elabora procedimentos de resposta a incidentes relacionados a Consentimento e bases legais (LGPD)."
    },
    "comparacoes": [
      {
        "tema": "Consentimento e bases legais (LGPD) com governança versus sem governança",
        "a": {
          "rotulo": "Sem governança",
          "texto": "Uso livre de recursos sem definição de responsáveis, permissões amplas e ausência de registro formal de decisões."
        },
        "b": {
          "rotulo": "Com governança",
          "texto": "Definição de responsáveis, permissões por perfil, registro de versões e procedimentos de validação das decisões."
        },
        "diferencaGabarito": "A governança garante rastreabilidade, segurança e conformidade; a ausência gera riscos de inconsistência e vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Gravação sempre exige consentimento explícito.'",
        "porqueErrada": "Não é sempre. A gravação de reunião é tratamento de dados pessoais e exige uma base legal, que pode ser o consentimento, mas também a execução de contrato, o cumprimento de obrigação legal ou outra base prevista na LGPD, conforme o caso. O consentimento, quando usado, deve ser livre, informado e inequívoco, mas não é a única base legal possível.",
        "versaoCorreta": "Depende da base legal aplicável; em alguns casos a obrigação legal ou execução de contrato pode fundamentar. Verificar caso a caso."
      },
      {
        "afirmacaoEquivocada": "Consentimento e bases legais (LGPD) pode ser usado sem considerar privacidade.",
        "porqueErrada": "Ignorar privacidade expõe dados pessoais e contraria normas de proteção.",
        "versaoCorreta": "O uso deve respeitar privacidade e normas aplicáveis."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Consentimento e bases legais (LGPD)",
        "Governança da informação",
        "Controle de acesso",
        "Rastreabilidade"
      ],
      "regras": [
        "Definir responsáveis",
        "Restringir permissões"
      ],
      "comparacoes": [
        "Com governança versus sem governança"
      ],
      "fluxos": [
        "Planejamento -> execução -> revisão -> arquivamento"
      ],
      "excecoes": [
        "Em situações sensíveis, edição pode ser proibida"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "versão",
        "risco",
        "controle"
      ],
      "checklist": [
        "Responsável definido",
        "Permissões configuradas",
        "Versão final salva",
        "Acesso revisado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Introduzir consentimento e bases legais (lgpd) explicando seu conceito básico e por que ele importa em reuniões institucionais com registro de decisões.",
        "dados": "Situação de consentimento e bases legais (lgpd) em videoconferência com 5 participantes, reunião de planejamento, necessidade de registrar decisões sem gerar versões paralelas.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Explicar definição de consentimento e bases legais (lgpd), destacar benefícios de registro imediato e apontar riscos iniciais de uso sem controle em consentimento e bases legais (lgpd).",
        "execucao": [
          "Apresentar conceito de forma simples",
          "Mostrar exemplo de uso em reunião curta",
          "Listar benefícios observáveis",
          "Alertar para riscos básicos"
        ],
        "resultado": "Compreensão inicial de consentimento e bases legais (lgpd) e reconhecimento de sua relevância para registro de decisões.",
        "justificativa": "A introdução conecta conceito a prática, permitindo ao aluno reconhecer onde consentimento e bases legais (lgpd) se aplica e quais cuidados iniciais são necessários para evitar erros comuns.",
        "errosFrequentes": [
          "Confundir colaboração com ausência de controle",
          "Achar que tecnologia resolve sozinha"
        ],
        "variacao": "Introduzir consentimento e bases legais (lgpd) em contexto de reunião externa com convidados, destacando limites de compartilhamento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Aplicar consentimento e bases legais (lgpd) em reunião real com dados concretos, definindo responsáveis, permissões e salvamento da versão final validada.",
        "dados": "Reunião de 8 pessoas sobre contratação envolvendo consentimento e bases legais (lgpd), documento com cláusulas sensíveis, plataforma permite histórico e controle de acesso por perfil.",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Definir editor responsável para consentimento e bases legais (lgpd), restringir permissões, orientar uso de comentários e programar salvamento da versão final com registro de aprovação.",
        "execucao": [
          "Configurar permissões por perfil",
          "Designar editor responsável",
          "Orientar uso de sugestões",
          "Salvar versão final com nome padronizado"
        ],
        "resultado": "Documento protegido, comentários organizados e versão final validada pelo editor responsável.",
        "justificativa": "A aplicação prática demonstra como consentimento e bases legais (lgpd) reduz riscos operacionais e garante rastreabilidade, alinhando-se a boas práticas de governança da informação.",
        "errosFrequentes": [
          "Manter permissões amplas por comodidade",
          "Esquecer de registrar quem validou a versão"
        ],
        "variacao": "Aplicar consentimento e bases legais (lgpd) em reunião com gravação simultânea, avaliando como integrar registro do documento à política de retenção."
      },
      {
        "tipo": "erro",
        "problema": "Identificar erro de interpretação sobre consentimento e bases legais (lgpd) e corrigir leitura equivocada que leva a risco de exposição ou inconsistência.",
        "dados": "Afirmação comum sobre consentimento e bases legais (lgpd) que dispensa controles, reunião com 12 participantes, permissões abertas, histórico desativado para consentimento e bases legais (lgpd).",
        "conceitos": [
          "Governança",
          "Controle de acesso"
        ],
        "estrategia": "Desconstruir premissa sobre consentimento e bases legais (lgpd), mostrar consequências de falta de controle e propor correção imediata com definição de permissões e histórico.",
        "execucao": [
          "Identificar premissa incorreta",
          "Listar consequências práticas",
          "Propor correção de permissões",
          "Verificar ativação de histórico"
        ],
        "resultado": "Reconhecimento de que consentimento e bases legais (lgpd) exige controles e necessidade de correção imediata.",
        "justificativa": "A análise de erro sobre consentimento e bases legais (lgpd) evidência por que a leitura simplista falha, ligando conceito a evidência de risco e reforçando a importância de governança para consentimento e bases legais (lgpd).",
        "errosFrequentes": [
          "Assumir boa vontade como segurança",
          "Confundir colaboração com ausência de governança"
        ],
        "variacao": "Alterar cenário para reunião com dados pessoais, exigindo avaliação de base legal além do controle técnico."
      }
    ]
  },
  "m3-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Retenção e descarte de gravações aparecem em concursos de TI por ligarem governança de dados à LGPD. Guardar além do necessário amplia o risco de vazamento e contraria a minimização; descartar inseguramente deixa dados recuperáveis. O candidato deve distinguir apagar referência de eliminação segura, conhecer a tabela de temporalidade documental e as medidas de proteção para resolver itens de múltipla escolha e verdadeiro/falso sobre responsabilidade do agente público.",
      "preRequisitos": [
        "Unidade 4.3 (consentimento e LGPD)",
        "Noção de dado pessoal e dado sensível",
        "Gestão documental básica e tabela de temporalidade"
      ],
      "objetivosObservaveis": [
        "Definir retenção de gravações",
        "Explicar descarte seguro e sua diferença de apagar referência",
        "Citar medidas de proteção (criptografia, controle de acesso, auditoria)",
        "Relacionar retenção à tabela de temporalidade documental"
      ],
      "competencias": [
        "Gestão do ciclo de vida da informação",
        "Proteção de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s1 (Políticas de gravação institucional)",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD))"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Retenção e descarte seguro de gravações ligam governança documental à LGPD (arts. 6º, 7º, 16, 46, 48) e integram o conteúdo programático em itens de múltipla escolha e C/E sobre responsabilidade do agente público, com itens sobre distinção entre apagar referência e eliminação segura, alinhamento à tabela de temporalidade documental, criptografia em repouso, controle de acesso por perfil e verificação de que guarda indefinida amplia superfície de vazamento. A classificação média reflete a presença do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Retenção é o período durante o qual uma gravação é mantida, definido por norma de gestão documental e pela LGPD. O aluno aprende que nem toda gravação deve ser guardada para sempre: o princípio da minimização orienta a não reter além do necessário. Descarte significa eliminar o arquivo, não apenas remover o link ou mover para a lixeira. Proteção básica inclui controle de acesso por perfil e backups seguros. Em serviço público, a retenção observa a tabela de temporalidade documental, que fixa prazos de guarda e destinação.",
      "intermediario": "O aluno distingue retenção de descarte: reter preserva a gravação por um prazo definido; descartar elimina-a de forma que não seja recuperável. Aplica criptografia em repouso e em trânsito, controle de acesso por perfil e registro de auditoria (logs) de quem acessou o conteúdo. Verifica se a plataforma oferece retenção automática e marca d'água, conferindo a documentação oficial do plano contratado. Alinha a retenção à tabela de temporalidade e evita o acúmulo indefinido que amplia a superfície de vazamento.",
      "avancado": "O aluno desenha o ciclo de vida da gravação: criação, uso, retenção (prazo da tabela de temporalidade) e descarte seguro. Implementa eliminação irreversível (sobrescrita ou cripto-shredding), remove cópias de backups e registra o descarte em log de auditoria. Combina criptografia, controle de acesso e auditoria, pois a criptografia sozinha não elimina o risco se chaves e permissões falharem. Trata exceções em que obrigação de guarda exige retenção maior que o prazo padrão e documenta decisões de retenção e descarte.",
      "especialista": "O aluno arquiteta a governança completa de gravações institucionais, definindo políticas de retenção, descarte e proteção por tipo de conteúdo e plano de plataforma. Estabelece rotinas de eliminação segura, verificação de backups e logs de auditoria integrados à gestão documental. Coordena exceções de guarda por obrigação legal, avalia fornecedores de nuvem quanto a criptografia e retenção automática, e reporta incidentes de vazamento conforme a política institucional e a LGPD, incluindo comunicação de incidente de dados pessoais quando aplicável."
    },
    "comparacoes": [
      {
        "tema": "Retenção x descarte seguro",
        "a": {
          "rotulo": "Retenção",
          "texto": "Preservar a gravação por um prazo definido pela tabela de temporalidade documental e pela LGPD, respeitando o princípio da minimização."
        },
        "b": {
          "rotulo": "Descarte seguro",
          "texto": "Eliminar a gravação de forma irreversível (sobrescrita ou cripto-shredding), remover cópias de backup e registrar o descarte em log de auditoria."
        },
        "diferencaGabarito": "Retenção mantém o dado disponível pelo prazo necessário; descarte seguro o torna irrecuperável. Ambos exigem regra definida, nunca improviso, e o descarte só ocorre após o término do prazo de retenção."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Mover para a lixeira é descarte seguro.",
        "porqueErrada": "O arquivo permanece recuperável na lixeira e em backups; não houve eliminação irreversível do conteúdo.",
        "versaoCorreta": "Descarte seguro exige exclusão irreversível (sobrescrita/cripto-shredding), remoção de backups e registro em log de auditoria."
      },
      {
        "afirmacaoEquivocada": "Quanto mais tempo guardar a gravação, melhor.",
        "porqueErrada": "Contraria o princípio da minimização da LGPD e amplia a superfície de vazamento sem necessidade.",
        "versaoCorreta": "Seguir o prazo definido na tabela de temporalidade documental, descartando com eliminação segura ao término do prazo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "retenção",
        "descarte seguro",
        "criptografia",
        "controle de acesso",
        "auditoria",
        "temporalidade"
      ],
      "regras": [
        "criação → uso → retenção (prazo) → descarte seguro",
        "minimização: não reter além do prazo definido pela tabela de temporalidade"
      ],
      "comparacoes": [
        "reter preserva a gravação; descartar elimina-a — ambos precisam de regra, não de improviso"
      ],
      "fluxos": [
        "gravação criada → usada → retida pelo prazo da tabela → descartada com eliminação segura"
      ],
      "excecoes": [
        "obrigação de guarda legal pode exigir retenção maior que o prazo padrão"
      ],
      "palavrasChave": [
        "ciclo de vida",
        "retenção",
        "descarte",
        "criptografia",
        "log",
        "temporalidade"
      ],
      "checklist": [
        "Defino retenção?",
        "Explico descarte seguro?",
        "Cito medidas de proteção?",
        "Relaciono com temporalidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que definir um prazo de retenção para gravações institucionais antes de armazená-las no servidor?",
        "dados": "Reunião de treinamento gravada e armazenada por tempo indeterminado no servidor da instituição, sem prazo definido nem procedimento de descarte.",
        "conceitos": [
          "retenção",
          "minimização"
        ],
        "estrategia": "Explicar que retenção é o período de guarda definido por norma e que manter além do necessário amplia o risco de vazamento e custo, contrariando a LGPD.",
        "execucao": [
          "Identificar o tipo de gravação e o conteúdo envolvido.",
          "Consultar a tabela de temporalidade documental da instituição.",
          "Fixar o prazo de guarda e agendar o descarte ao término do prazo."
        ],
        "resultado": "Evita manter dados além do necessário, reduz risco e custo, e atende a LGPD e às normas de gestão documental.",
        "justificativa": "Definir prazo alinha a retenção ao princípio da minimização e à tabela de temporalidade, impedindo o acúmulo indefinido que amplia a superfície de vazamento e exposição da instituição.",
        "errosFrequentes": [
          "Achar que reter para sempre é mais seguro do que descartar.",
          "Confundir retenção com armazenamento permanente sem prazo."
        ],
        "variacao": "Mudar para uma gravação de processo seletivo contendo dados de candidatos e reaplicar a definição de prazo de retenção com base na tabela de temporalidade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como descartar com segurança uma gravação com dados pessoais após o prazo de retenção?",
        "dados": "Gravação de reunião com dados de clientes, prazo de 24 meses encerrado, armazenada em nuvem institucional e em backup diário automático.",
        "conceitos": [
          "descarte seguro",
          "eliminação irreversível",
          "backup seguro"
        ],
        "estrategia": "Aplicar exclusão segura (sobrescrita ou cripto-shredding), remover cópias de backups e registrar o descarte em log de auditoria com data e responsável.",
        "execucao": [
          "Confirmar que o prazo de retenção de 24 meses expirou.",
          "Excluir o arquivo com sobrescrita ou cripto-shredding para torná-lo irrecuperável.",
          "Localizar e remover cópias presentes nos backups diários.",
          "Registrar data, responsável e método no log de descarte."
        ],
        "resultado": "Exclusão segura (sobrescrita/cripto-shredding), registro de descarte e verificação de backups.",
        "justificativa": "Apagar a referência apenas remove o acesso, não o dado; somente a eliminação segura somada à remoção de backups garante que o conteúdo não permaneça recuperável e não cause vazamento.",
        "errosFrequentes": [
          "Achar que mover o arquivo para a lixeira já é descarte seguro.",
          "Esquecer de verificar e remover cópias armazenadas em backups."
        ],
        "variacao": "Mudar para uma gravação armazenada apenas em disco local, sem backup, e reaplicar o procedimento de eliminação segura e registro de descarte."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Apagar o link da gravação é suficiente para considerar o descarte seguro da reunião.'",
        "dados": "Gravação de reunião pública compartilhada por link; o link foi removido da página, mas o arquivo permanece no servidor e em backups da instituição.",
        "conceitos": [
          "descarte seguro",
          "recuperabilidade",
          "backup"
        ],
        "estrategia": "Mostrar que remover o link elimina apenas a referência de acesso, não o arquivo, e que o dado continua recuperável até que se aplique eliminação segura e limpeza de backups.",
        "execucao": [
          "Identificar que remover o link não exclui o arquivo de gravação.",
          "Verificar se o arquivo ainda está armazenado no servidor.",
          "Verificar se há cópias em backups da instituição.",
          "Aplicar eliminação segura e remover os backups antes de considerar o descarte concluído."
        ],
        "resultado": "Errado. É necessário excluir o arquivo e verificar backups; caso contrário os dados permanecem.",
        "justificativa": "A leitura ingênua confunde referência com conteúdo: sem o link o dado não é acessível pela página, mas continua no armazenamento e em backups, onde pode ser recuperado e vazado.",
        "errosFrequentes": [
          "Confiar que apagar o link equivale a descartar o dado.",
          "Não checar se o arquivo e seus backups ainda existem após remover o link."
        ],
        "variacao": "Mudar para uma gravação movida para a lixeira sem exclusão segura e reaplicar a conclusão de que a lixeira não é descarte seguro."
      }
    ]
  },
  "m3-u5-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Intrusão em reuniões online (zoombombing) está no conteúdo programático de segurança da informação e LGPD, com classificação média por estimativa pedagógica de adequação ao edital. Reuniões invadidas causam dano à imagem e vazamento de dados. O candidato deve identificar vetores de entrada, aplicar mitigações (senha, lobby, login, restrição de tela) e executar contenção (remover intruso, bloquear entradas, encerrar e recriar com link novo, registrar o incidente).",
      "preRequisitos": [
        "Unidade 4.1 (lobby, moderação e autenticação)",
        "Noção de autenticação e autorização",
        "Controles de reunião online (senha, sala de espera)"
      ],
      "objetivosObservaveis": [
        "Definir intrusão em reunião online",
        "Citar vetores de entrada do intruso",
        "Aplicar mitigações de prevenção",
        "Executar contenção de incidente de intrusão"
      ],
      "competencias": [
        "Prevenção de incidentes de reunião",
        "Resposta a incidentes de segurança"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t1-s2 (Compartilhamento acidental de tela)",
        "m3-u5-t1-s3 (Gravação não autorizada e vazamento)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A integração de segurança da informação e LGPD faz parte do conteúdo programático. A classificação reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Zoombombing é a entrada de pessoas não autorizadas em uma reunião online para exibir conteúdo ofensivo, interromper ou coletar informação. Os vetores típicos são link publicado em redes sociais, ausência de senha, lobby desativado e configurações permissivas. Mitigações básicas: usar senha, ativar o lobby, exigir login, restringir o compartilhamento de tela ao anfitrião e impedir que participantes entrem antes do anfitrião.",
      "intermediario": "O aluno associa cada vetor de entrada à mitigação correspondente e configura uma reunião resiliente: senha + lobby + login obrigatório + restrição de tela ao anfitrião + bloqueio de entrada antecipada + bloqueio da reunião após o início + monitoramento ativo por coanfitriões. Diante de uma intrusão, remove o intruso, bloqueia novas entradas, encerra e recria a reunião com link novo quando necessário e registra o ocorrido.",
      "avancado": "O aluno conduz a contenção completa de um incidente de intrusão: remoção do intruso, bloqueio de novas entradas, encerramento e recriação com link novo, documentação do ocorrido e, se houver vazamento de dados, comunicação conforme a política institucional e a LGPD. Avalia se reuniões recorrentes com endereço fixo divulgado precisam de rotação de link e revisa permissões de tela e entrada.",
      "especialista": "O aluno arquiteta a política institucional de reuniões seguras, definindo controles padrão (senha, lobby, login, tela restrita), procedimentos de contenção e registro de incidentes, rotação de links de reuniões recorrentes, treinamento de anfitriões e coanfitriões, e integração com a resposta a incidentes de dados pessoais da LGPD quando houver vazamento."
    },
    "comparacoes": [
      {
        "tema": "Reunião aberta x reunião com lobby",
        "a": {
          "rotulo": "Reunião aberta",
          "texto": "Aceita qualquer pessoa que possua o link, sem aprovação prévia do anfitrião."
        },
        "b": {
          "rotulo": "Reunião com lobby",
          "texto": "Exige que cada participante seja admitido pelo anfitrião ou coanfitrião antes de entrar."
        },
        "diferencaGabarito": "A reunião aberta expõe a reunião a qualquer pessoa com o link; a reunião com lobby filtra o acesso, reduzindo drasticamente o risco de intrusão por link divulgado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Só reuniões públicas são invadidas.",
        "porqueErrada": "Links internos também vazam e reuniões sem controles podem ser alvo mesmo sem divulgação pública.",
        "versaoCorreta": "Aplicar controles (senha, lobby, login, tela restrita) em todas as reuniões, internas ou públicas."
      },
      {
        "afirmacaoEquivocada": "Expulsar o intruso encerra o incidente.",
        "porqueErrada": "O intruso pode ter coletado informações ou gravado antes de ser removido, e pode tentar reentrar.",
        "versaoCorreta": "Além de expulsar, bloquear novas entradas, avaliar o impacto, documentar o incidente e, se houver vazamento, comunicar conforme a política e a LGPD."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "zoombombing",
        "vetor",
        "senha",
        "lobby",
        "login",
        "contenção",
        "registro"
      ],
      "regras": [
        "link divulgado sem controle = risco",
        "senha + lobby + restrição de tela = mitigação"
      ],
      "comparacoes": [
        "reunião aberta aceita qualquer pessoa com o link; reunião com lobby exige aprovação — muda o risco"
      ],
      "fluxos": [
        "intrusão detectada → remover intruso → bloquear novas entradas → encerrar e recriar com link novo → registrar o ocorrido"
      ],
      "excecoes": [
        "reuniões internas também podem ser alvo de intrusão"
      ],
      "palavrasChave": [
        "intrusão",
        "link",
        "lobby",
        "remoção",
        "incidente"
      ],
      "checklist": [
        "Defino intrusão?",
        "Cito vetores?",
        "Aplico mitigações?",
        "Executo contenção?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que é zoombombing e como ocorre em uma reunião online aberta sem controles de acesso?",
        "dados": "Reunião aberta com link divulgado em rede social, sem senha e sem lobby, invadida por desconhecidos que compartilharam conteúdo ofensivo.",
        "conceitos": [
          "zoombombing",
          "vetor de entrada"
        ],
        "estrategia": "Explicar que zoombombing é a intrusão não autorizada em reunião online e identificar o vetor: link divulgado sem controles de acesso (senha, lobby).",
        "execucao": [
          "Identificar que o link foi divulgado publicamente.",
          "Confirmar a ausência de senha e de lobby.",
          "Relatar que desconhecidos entraram e compartilharam conteúdo ofensivo.",
          "Concluir que o vetor foi o link sem controle de acesso."
        ],
        "resultado": "Intrusão não autorizada em reunião online, geralmente para compartilhar conteúdo ofensivo ou perturbar.",
        "justificativa": "A causa raiz é o link divulgado sem controles de acesso; sem senha e sem lobby, qualquer pessoa com o link pode entrar e perturbar a reunião.",
        "errosFrequentes": [
          "Achar que apenas reuniões públicas são invadidas.",
          "Confundir zoombombing com problema de conexão de rede."
        ],
        "variacao": "Mudar para uma reunião interna com link vazado por e-mail e reaplicar a identificação do vetor de entrada e a necessidade de controles."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como configurar uma reunião online institucional com dados sensíveis para prevenir zoombombing?",
        "dados": "Reunião institucional com dados sensíveis; plataforma que oferece senha, lobby, login obrigatório, restrição de tela ao anfitrião e bloqueio de entrada antecipada.",
        "conceitos": [
          "senha",
          "lobby",
          "login obrigatório",
          "restrição de compartilhamento de tela"
        ],
        "estrategia": "Aplicar as mitigações combinadas: definir senha, ativar lobby, exigir login, restringir o compartilhamento de tela ao anfitrião, impedir entrada antes do anfitrião e bloquear a reunião após o início.",
        "execucao": [
          "Definir uma senha de acesso à reunião.",
          "Ativar o lobby (sala de espera) para aprovação de participantes.",
          "Exigir login obrigatório antes de entrar.",
          "Restringir o compartilhamento de tela ao anfitrião.",
          "Impedir que participantes entrem antes do anfitrião e bloquear a reunião após o início."
        ],
        "resultado": "Não publicar links publicamente; usar senha e lobby; exigir login; restringir compartilhamento de tela; monitorar participantes.",
        "justificativa": "A combinação de senha, lobby e login reduz a chance de entrada não autorizada; restringir tela e bloquear entrada antecipada limita o abuso caso alguém entre indevidamente.",
        "errosFrequentes": [
          "Achar que a senha sozinha é suficiente, ignorando que ela pode vazar com o link.",
          "Esquecer de ativar o lobby e permitir entrada livre com o link."
        ],
        "variacao": "Mudar para uma reunião recorrente com endereço fixo divulgado e reaplicar as mesmas mitigações, acrescentando a rotação periódica do link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A senha sozinha impede qualquer invasão de reunião online sem outros controles.'",
        "dados": "Reunião com senha definida, mas o link contendo a senha foi divulgado publicamente em rede social e o lobby está desativado.",
        "conceitos": [
          "senha",
          "vazamento de link",
          "lobby"
        ],
        "estrategia": "Mostrar que a senha não é suficiente quando o próprio link (com senha embutida) é divulgado e não há lobby para filtrar quem entra.",
        "execucao": [
          "Observar que a reunião tem senha.",
          "Verificar que o link com senha embutida foi divulgado publicamente.",
          "Confirmar que o lobby está desativado.",
          "Concluir que qualquer pessoa com o link entra, pois a senha não protege contra divulgação do próprio link."
        ],
        "resultado": "Errado. A senha vaza com o link; é necessário combinar senha e lobby (e outros controles).",
        "justificativa": "A leitura ingênua confunde ter senha com estar protegido: se o link contendo a senha é público e não há lobby, a senha não impede a entrada de não autorizados.",
        "errosFrequentes": [
          "Achar que a senha sozinha é suficiente para proteger a reunião.",
          "Não considerar que o link com senha embutida pode ser divulgado."
        ],
        "variacao": "Mudar para uma reunião com senha e lobby ativos, mas com compartilhamento de tela liberado para todos, e reaplicar a análise de quais controles faltam."
      }
    ]
  },
  "m3-u5-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A exposição acidental por compartilhamento de tela é causa de incidente em concursos de TI por unir segurança da informação e LGPD. Mostrar dados não pretendidos durante uma reunião pode vazá-los para todos os participantes. O candidato deve reconhecer como ocorre, identificar casos típicos, aplicar mitigações (janela específica, modo não perturbe, fechar abas sensíveis, revisar a tela) e adotar uma rotina de prevenção.",
      "preRequisitos": [
        "Unidade 4.2 (compartilhamento de tela)",
        "Noção de dado pessoal e dado sensível",
        "Controles de reunião online (compartilhamento de tela)"
      ],
      "objetivosObservaveis": [
        "Explicar como ocorre a exposição acidental",
        "Citar casos típicos de exposição",
        "Aplicar mitigações de prevenção",
        "Adotar uma rotina pré-compartilhamento"
      ],
      "competencias": [
        "Prevenção de vazamento",
        "Condução segura de reunião"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões)",
        "m3-u5-t1-s3 (Gravação não autorizada e vazamento)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A exposição acidental por compartilhamento de tela faz parte do conteúdo programático. A classificação reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "A exposição acidental ocorre quando o compartilhamento de tela revela informação que não se pretendia mostrar. Casos típicos: compartilhar a tela inteira e uma notificação exibir dado pessoal, manter abas com documentos confidenciais visíveis, mostrar uma janela de planilha com dados de terceiros e revelar o histórico de navegação ou a área de trabalho com arquivos sensíveis. A causa raiz costuma ser a combinação de notificações ativas com o compartilhamento de tela inteira.",
      "intermediario": "O aluno identifica as causas da exposição acidental e aplica mitigações: compartilhar apenas a janela ou o aplicativo específico, ativar o modo não perturbe ou desativar notificações, fechar abas e programas sensíveis antes, revisar o que está visível e encerrar o compartilhamento ao terminar. Em ambiente institucional, usar uma conta de trabalho separada reduz a chance de aparecer conteúdo pessoal.",
      "avancado": "O aluno estabelece uma rotina pré-compartilhamento padronizada e revisa um incidente de exposição acidental, propondo controles técnicos e procedimentais. Avalia janela específica versus tela inteira, notificações ativas versus modo não perturbe, e decide quando encerrar o compartilhamento. Considera exceções como contas separadas para reduzir exposição pessoal e documenta o ocorrido conforme a política institucional.",
      "especialista": "O aluno arquiteta a política institucional de condução segura de reuniões, definindo o padrão de prevenção (janela específica, notificações off, revisão de tela, conta de trabalho separada), procedimentos de revisão de incidentes de exposição, treinamento de apresentadores e integração com a resposta a incidentes de dados pessoais da LGPD quando houver vazamento de dados de terceiros."
    },
    "comparacoes": [
      {
        "tema": "Compartilhar aplicativo x tela inteira",
        "a": {
          "rotulo": "Compartilhar aplicativo",
          "texto": "Mostra apenas a janela do aplicativo selecionado, reduzindo a superfície de exposição."
        },
        "b": {
          "rotulo": "Compartilhar tela inteira",
          "texto": "Mostra tudo o que aparece na tela, incluindo notificações, abas e arquivos, ampliando a superfície de exposição."
        },
        "diferencaGabarito": "Compartilhar o aplicativo restringe o que é visto; compartilhar a tela inteira expõe notificações, abas e arquivos, aumentando o risco de vazamento acidental."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Compartilhar só a tela do aplicativo em uso é o mais seguro.",
        "porqueErrada": "Ainda pode exibir janelas sobrepostas e não elimina notificações nem abas sensíveis em segundo plano.",
        "versaoCorreta": "Compartilhar a janela específica, silenciar notificações e revisar a tela antes de iniciar."
      },
      {
        "afirmacaoEquivocada": "Fechar a aba sensível resolve tudo.",
        "porqueErrada": "Notificações e outros programas podem continuar vazando dados mesmo com a aba fechada.",
        "versaoCorreta": "Silenciar notificações, revisar a tela completa e encerrar o compartilhamento ao terminar."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "exposição acidental",
        "notificação",
        "tela inteira",
        "janela específica",
        "não perturbe"
      ],
      "regras": [
        "janela específica + notificações off + revisão = prevenção",
        "encerrar o compartilhamento ao terminar a reunião"
      ],
      "comparacoes": [
        "exposição intencional é deliberada; exposição acidental decorre de falta de controle — a prevenção difere"
      ],
      "fluxos": [
        "fechar abas sensíveis → desativar notificações → compartilhar janela específica → revisar tela → encerrar compartilhamento"
      ],
      "excecoes": [
        "contas separadas reduzem exposição pessoal em ambiente institucional"
      ],
      "palavrasChave": [
        "vazamento",
        "notificação",
        "aba",
        "tela",
        "revisão"
      ],
      "checklist": [
        "Explico como ocorre?",
        "Cito casos?",
        "Aplico mitigações?",
        "Adoto rotina?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Como ocorre a exposição acidental por notificação durante o compartilhamento de tela?",
        "dados": "Durante uma reunião, o anfitrião compartilha a tela inteira e uma notificação de mensagem exibe um dado pessoal de cliente para todos os participantes.",
        "conceitos": [
          "exposição acidental",
          "notificação"
        ],
        "estrategia": "Explicar que a exposição acontece porque o compartilhamento de tela inteira mostra as notificações pop-up para todos, revelando dados não pretendidos.",
        "execucao": [
          "Identificar que a tela inteira está sendo compartilhada.",
          "Observar que as notificações estão ativas.",
          "Constatar que uma notificação exibe dado pessoal de cliente.",
          "Concluir que a causa raiz é tela inteira com notificações ativas."
        ],
        "resultado": "Ao compartilhar tela inteira, notificações pop-up exibem conteúdo para todos os participantes.",
        "justificativa": "A tela inteira exibe tudo, incluindo notificações; portanto o dado pessoal da notificação ficou visível para todos os participantes da reunião.",
        "errosFrequentes": [
          "Achar que notificações não aparecem para quem vê a tela compartilhada.",
          "Confundir exposição acidental com invasão externa à reunião."
        ],
        "variacao": "Mudar para uma apresentação em que uma aba com documento confidencial fica visível e reaplicar a identificação do caso de exposição acidental."
      },
      {
        "tipo": "aplicacao",
        "problema": "Quais passos seguir antes de compartilhar tela em uma reunião institucional com dados sensíveis?",
        "dados": "Reunião com dados de clientes; o apresentador precisa mostrar uma planilha e tem abas com documentos confidenciais, notificações ativas e conta pessoal logada.",
        "conceitos": [
          "janela específica",
          "não perturbe",
          "conta de trabalho separada"
        ],
        "estrategia": "Aplicar a rotina de prevenção: fechar abas e programas sensíveis, desativar notificações (modo não perturbe), compartilhar apenas a janela da planilha, revisar o que está visível e usar conta de trabalho separada.",
        "execucao": [
          "Fechar abas e programas sensíveis antes da reunião.",
          "Ativar o modo não perturbe ou desativar notificações.",
          "Compartilhar apenas a janela da planilha, não a tela inteira.",
          "Revisar o que está visível para os participantes.",
          "Encerrar o compartilhamento ao terminar."
        ],
        "resultado": "Fechar abas sensíveis, desativar notificações, compartilhar apenas janela necessária, verificar com participantes.",
        "justificativa": "Cada passo remove uma fonte de exposição: abas fechadas evitam documentos visíveis, notificações off evitam pop-ups, janela específica restringe o que é mostrado e conta de trabalho separada reduz conteúdo pessoal.",
        "errosFrequentes": [
          "Achar que fechar a aba sensível resolve tudo, ignorando notificações e outros programas.",
          "Esquecer de encerrar o compartilhamento ao terminar a reunião."
        ],
        "variacao": "Mudar para uma apresentação de área de trabalho com histórico de navegação sensível e reaplicar a mesma rotina de prevenção."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Notificações não aparecem para quem vê a tela compartilhada na reunião.'",
        "dados": "Apresentador compartilha a tela inteira com notificações ativas; os participantes veem uma notificação pop-up com dado de cliente durante a reunião.",
        "conceitos": [
          "notificação",
          "tela inteira",
          "recuperabilidade"
        ],
        "estrategia": "Mostrar que a afirmação é falsa: as notificações aparecem na tela compartilhada quando estão ativas, expondo conteúdo para todos os participantes.",
        "execucao": [
          "Identificar que a tela inteira está compartilhada.",
          "Verificar que as notificações estão ativas.",
          "Constatar que uma notificação com dado pessoal é visível para os participantes.",
          "Concluir que a afirmação está errada porque notificações aparecem na tela compartilhada."
        ],
        "resultado": "Errado. Notificações aparecem na tela compartilhada se estiverem ativas.",
        "justificativa": "A leitura ingênua pressupõe que notificações são ocultas durante o compartilhamento; na verdade, a tela inteira exibe as notificações pop-up para todos os participantes.",
        "errosFrequentes": [
          "Achar que notificações não aparecem para quem vê a tela compartilhada.",
          "Não desativar notificações antes de compartilhar a tela inteira."
        ],
        "variacao": "Mudar para compartilhamento de janela específica com notificações ativas e reaplicar a conclusão de que janela específica reduz, mas não elimina, a exposição por notificação."
      }
    ]
  },
  "m3-u5-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Gravação não autorizada é vetor de vazamento difícil de conter: o conteúdo sai do ambiente controlado e circula sem rastro. A prova cobra a diferença entre gravação pela plataforma e captura externa, as mitigações e a resposta ao incidente.",
      "preRequisitos": [
        "Unidade 3.4 — políticas de gravação e consentimento em videoconferência",
        "Noção de dado pessoal e de base legal no tratamento da informação"
      ],
      "objetivosObservaveis": [
        "Distinguir gravação autorizada de gravação não autorizada em um cenário de reunião",
        "Identificar os cenários de vazamento: participante que grava, anfitrião que omite o aviso e arquivo guardado em local inseguro",
        "Aplicar mitigações de consentimento, restrição de permissão e proteção do arquivo gravado",
        "Descrever as etapas de resposta a um vazamento de gravação, da contenção à comunicação"
      ],
      "competencias": [
        "Proteção da informação em ambientes de videoconferência",
        "Resposta a incidentes de vazamento de conteúdo gravado"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s3 (Retenção, descarte e proteção de gravações) — proteção do arquivo gravado contra vazamento",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD)) — fundamento do aviso e do consentimento para gravar",
        "m3-u5-t3-s3 (Boas práticas e resposta a incidentes de comunicação) — resposta ao vazamento de gravação",
        "m3-u5-t1-s2 (Compartilhamento acidental de tela) — outro vetor de exposição em reunião"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Adequação qualitativa média ao programa de concursos de TI e proteção de dados, por estimativa pedagógica: o subtópico sustenta itens sobre gravação, consentimento e vazamento em reuniões, sem configurar tema exclusivo de edital."
      }
    },
    "niveis": {
      "iniciante": "Riscos: participante grava reunião sem consentimento (gravação de tela/áudio) e distribui; anfitrião grava sem informar; gravação armazenada em local inseguro. Mitigações: informar sobre gravação; obter consentimento; restringir gravação ao anfitrião; usar marca d'água (quando disponível); monitorar; política clara. Caso ilustrativo (hipotético): gravação de reunião com dados de clientes distribuída em grupo de mensagens; causa: ausência de política e controle de acesso.",
      "intermediario": "Distinguir os dois caminhos da gravação: a feita pela própria plataforma, que pode ser restrita ao anfitrião e costuma deixar registro administrativo, e a captura externa por software de terceiros, que a plataforma não impede. Escolher a mitigação adequada a cada caso e explicar por que consentimento e comportamento seguem sendo a defesa principal.",
      "avancado": "Reduzir a exposição quando a captura não pode ser bloqueada tecnicamente: limitar a circulação do link de acesso, evitar projetar dado sensível na tela, registrar o aviso de gravação no início da reunião e proteger o arquivo armazenado com permissão mínima e prazo de retenção definido.",
      "especialista": "Conduzir a resposta a um vazamento de gravação: conter o material circulante, avaliar quais dados e pessoas foram atingidos, preservar evidências, comunicar conforme a política institucional e a LGPD, revistar as permissões do repositório e revisar a política de gravação para impedir recorrência."
    },
    "comparacoes": [
      {
        "tema": "Gravação pela plataforma x captura externa",
        "a": {
          "rotulo": "Pela plataforma",
          "texto": "Registro feito pelo próprio serviço de reunião; pode ser limitado ao anfitrião, costuma gerar aviso e deixa rastro administrativo."
        },
        "b": {
          "rotulo": "Captura externa",
          "texto": "Registro feito por software de terceiros na máquina do participante; a plataforma não detecta nem impede o registro."
        },
        "diferencaGabarito": "A gravação pela plataforma é controlável e auditável; a captura externa é quase indetectável, o que desloca a defesa para consentimento, comportamento e minimização do que é exibido."
      },
      {
        "tema": "Conter x divulgar após o vazamento",
        "a": {
          "rotulo": "Conter",
          "texto": "Interromper a circulação do material e restringir o acesso ao arquivo para limitar o dano já ocorrido."
        },
        "b": {
          "rotulo": "Divulgar",
          "texto": "Comunicar o incidente aos envolvidos e à instituição conforme a política interna e a legislação aplicável."
        },
        "diferencaGabarito": "A contenção age sobre o material e reduz o dano; a comunicação atende à política e à transparência, e as duas etapas não se substituem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Só o anfitrião pode gravar, então não há risco.",
        "porqueErrada": "A restrição de gravação ao anfitrião vale para o recurso da plataforma; qualquer participante pode capturar a tela ou o áudio com software próprio, fora do alcance do serviço.",
        "versaoCorreta": "Restringir a gravação na plataforma reduz o risco, mas não elimina a captura externa: é preciso somar consentimento, aviso e proteção do arquivo."
      },
      {
        "afirmacaoEquivocada": "Gravar sem avisar é aceitável se a reunião for interna.",
        "porqueErrada": "Reunião interna ainda trata de dado pessoal e informação institucional; a ausência de aviso retira dos participantes a chance de não expor determinado conteúdo.",
        "versaoCorreta": "Informar a gravação no início e observar a política da instituição, inclusive quando a reunião é restrita a servidores."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Gravação não autorizada: registro feito sem conhecimento ou concordância dos participantes",
        "Captura externa: gravação por software de terceiros na máquina do participante",
        "Vazamento: distribuição do conteúdo gravado a quem não deveria ter acesso",
        "Marca d'água: identificação do participante na gravação, quando o recurso existe"
      ],
      "regras": [
        "Restringir a gravação ao anfitrião reduz o registro pelo recurso nativo",
        "Informar e obter consentimento antes de gravar",
        "Proteger o arquivo gravado com permissão mínima e prazo de retenção definido"
      ],
      "comparacoes": [
        "Gravação pela plataforma é auditável; captura externa é praticamente invisível"
      ],
      "fluxos": [
        "Detecção do vazamento → contenção do material → avaliação dos dados atingidos → comunicação conforme a política → revisão das permissões"
      ],
      "excecoes": [
        "A captura externa não pode ser impedida tecnicamente pela plataforma de reunião"
      ],
      "palavrasChave": [
        "gravação",
        "consentimento",
        "vazamento",
        "captura externa",
        "retenção"
      ],
      "checklist": [
        "Os participantes foram avisados de que a reunião seria gravada?",
        "A gravação está restrita ao anfitrião ou a pessoas autorizadas?",
        "O arquivo gravado está em local com acesso controlado?",
        "Há prazo de retenção e descarte definidos para a gravação?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma equipe marca reunião por videoconferência para tratar de contratos. Quem pode acionar a gravação e em que circunstância o registro se torna não autorizado?",
        "dados": "Plataforma de videoconferência com recurso de gravação; participantes: 3 servidores e 2 participantes externos; nenhum aviso de gravação foi feito na convocação.",
        "conceitos": [
          "Gravação pela plataforma",
          "Consentimento",
          "Captura externa"
        ],
        "estrategia": "Isolar o conceito: separar quem tem o recurso de gravar na plataforma, em regra anfitrião e coanfitrião autorizado, da possibilidade de qualquer participante registrar a tela ou o áudio por software próprio.",
        "execucao": [
          "1. Verificar quais papéis a plataforma autoriza a gravar.",
          "2. Verificar se os participantes foram avisados da gravação.",
          "3. Verificar se alguém registrou a tela ou o áudio por fora da plataforma.",
          "4. Concluir se o registro foi autorizado ou não autorizado."
        ],
        "resultado": "A gravação é autorizada quando há aviso e consentimento; torna-se não autorizada quando alguém registra sem o conhecimento dos participantes, inclusive por captura externa.",
        "justificativa": "A autorização não depende do recurso disponível na plataforma, mas da concordância de quem participa: sem aviso, qualquer registro do conteúdo tratado configura exposição indevida.",
        "errosFrequentes": [
          "Confundir quem pode gravar na plataforma com quem pode registrar o conteúdo.",
          "Supor que a ausência de aviso automático do serviço impede a captura externa."
        ],
        "variacao": "Reunião em que o próprio anfitrião grava e não avisa: o mesmo raciocínio se aplica, agora quanto à omissão do aviso por quem detém o recurso."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria precisa preservar o registro das reuniões de planejamento sem violar a privacidade dos participantes. Que conjunto de controles aplicar?",
        "dados": "Reuniões mensais de planejamento com 8 participantes, dois deles terceirizados; política institucional exige aviso e retenção de 12 meses; a plataforma permite restringir a gravação ao anfitrião.",
        "conceitos": [
          "Restrição de gravação",
          "Consentimento",
          "Retenção e descarte",
          "Marca d'água"
        ],
        "estrategia": "Montar os controles em camadas: aviso e consentimento no início, gravação restrita a quem precisa, marca d'água quando disponível, armazenamento com acesso mínimo e prazo de retenção com descarte programado.",
        "execucao": [
          "1. Anunciar a gravação no início e registrar a concordância dos participantes.",
          "2. Restringir o recurso de gravação ao anfitrião designado.",
          "3. Ativar marca d'água de identificação, quando a plataforma oferecer.",
          "4. Guardar o arquivo em pasta com permissão restrita e prazo de retenção definido.",
          "5. Monitorar o acesso e descartar a gravação ao fim do prazo."
        ],
        "resultado": "Gravação restrita, com aviso e consentimento registrados, marca d'água quando disponível, acesso mínimo ao arquivo e descarte ao término da retenção.",
        "justificativa": "Cada controle cobre uma falha distinta: aviso e consentimento tratam da legalidade; restrição e marca d'água reduzem a escala do registro; acesso mínimo e retenção limitam o dano de um acesso indevido.",
        "errosFrequentes": [
          "Deixar a gravação liberada a todos os participantes para simplificar a operação.",
          "Guardar a gravação em pasta de rede aberta por comodidade de acesso."
        ],
        "variacao": "Cenário em que a reunião trata de dado pessoal sensível: além dos controles, avaliar substituir a reunião por troca documental ou aplicar barreiras adicionais de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se ninguém usou o botão de gravação da plataforma, a reunião não foi registrada e o conteúdo está protegido.'",
        "dados": "Reunião com 12 participantes, dos quais 5 acessaram de computadores pessoais; o registro da plataforma não mostra gravação pelo serviço; captura de tela por software de terceiros não aparece nesse registro.",
        "conceitos": [
          "Captura externa",
          "Limites do registro da plataforma",
          "Exposição acidental"
        ],
        "estrategia": "Mostrar que a leitura ingênua confunde ausência de gravação na plataforma com ausência de registro do conteúdo: o histórico do serviço só prova que o recurso nativo não foi acionado.",
        "execucao": [
          "1. Interpretar o resultado: o registro não exibe gravação pelo serviço.",
          "2. Reconhecer o que esse registro não cobre: captura por software na máquina do participante.",
          "3. Verificar se aviso e restrição de gravação foram aplicados.",
          "4. Concluir que a proteção depende de consentimento e minimização, não do registro."
        ],
        "resultado": "A conclusão está errada: a ausência de gravação na plataforma não afasta a captura externa, e o conteúdo pode ter sido registrado por participante.",
        "justificativa": "O histórico da plataforma é evidência limitada: descreve apenas ações do recurso nativo. Como a captura externa ocorre fora do ambiente do serviço, a defesa está no aviso e na redução do que é exibido.",
        "errosFrequentes": [
          "Tratar o registro vazio como prova de que não houve gravação do conteúdo.",
          "Acreditar que desativar o recurso nativo encerra o risco de vazamento."
        ],
        "variacao": "Afirmação: 'Com a gravação restrita ao anfitrião, o risco está eliminado.' A leitura correta exige notar que a restrição vale somente para o recurso da plataforma."
      }
    ]
  },
  "m3-u5-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O e-mail é o canal mais usado e um dos mais sujeitos a erro humano: campo marcado por engano, anexo trocado ou histórico encaminhado expõem dados a destinatários indevidos. A prova cobra a diferença entre Cc e Bcc e as prevenções.",
      "preRequisitos": [
        "Unidade 3.1 — cabeçalhos, destinatários e anexos de e-mail",
        "Noção de dado pessoal e de incidente de segurança da informação"
      ],
      "objetivosObservaveis": [
        "Identificar as formas de exposição por e-mail: lista em Cc, anexo errado, histórico no encaminhamento e responder a todos",
        "Explicar por que o Cc expõe os endereços dos destinatários e o Bcc os oculta",
        "Aplicar as mitigações de revisão de destinatários, conferência de anexo e limpeza de histórico",
        "Situar o papel da prevenção de perda de dados na detecção do envio indevido"
      ],
      "competencias": [
        "Manuseio seguro de correio eletrônico institucional",
        "Prevenção de vazamento de dados por comunicação escrita"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u1-t1-s3 (Cabeçalhos, destinatários, anexos, CC e BCC) — base técnica dos campos do e-mail",
        "m3-u1-t2-s1 (Spam, phishing e spoofing) — outro vetor de risco no mesmo canal",
        "m3-u5-t2-s2 (Exposição em calendários e convites) — exposição acidental em canal correlato",
        "m3-u5-t2-s3 (Exposição em plataformas de colaboração) — exposição por permissão e compartilhamento"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância qualitativa média por estimativa pedagógica: exposição por e-mail aparece em itens sobre Cc, Bcc, anexos e encaminhamento, em geral dentro de blocos de segurança da informação, sem ser tema exclusivo de edital."
      }
    },
    "niveis": {
      "iniciante": "Casos: enviar lista de clientes em Cc em vez de Bcc (exposição de e-mails); encaminhar e-mail com histórico sensível; anexar arquivo errado (versão com dados pessoais); responder a todos expondo informação. Mitigações: revisar destinatários, usar Bcc para listas, verificar anexos, limpar histórico ao encaminhar, usar DLP (Data Loss Prevention) quando disponível. Caso ilustrativo (hipotético): envio de planilha com CPFs de servidores para lista em Cc.",
      "intermediario": "Aplicar Bcc em listas e conferir anexos antes do envio: escolher o campo correto conforme a necessidade de ocultar destinatários, abrir o arquivo para confirmar a versão, ler o histórico antes de encaminhar e avaliar se o responder a todos é realmente necessário para cada pessoa.",
      "avancado": "Usar recursos de prevenção de perda de dados e limpar o histórico ao encaminhar: apagar trechos com dado sensível da conversa anterior, manter apenas o contexto necessário e apoiar-se em regras automatizadas que detectam conteúdo sensível na saída.",
      "especialista": "Responder a um incidente de envio indevido: conter a mensagem quando o servidor permitir revogação do envio, levantar quem recebeu o conteúdo, avaliar os dados expostos, comunicar conforme a política institucional e a LGPD e rever os controles do canal."
    },
    "comparacoes": [
      {
        "tema": "Cc x Bcc",
        "a": {
          "rotulo": "Cc",
          "texto": "Exibe o endereço de todos os destinatários a cada um deles; uma lista em Cc revela quem mais recebeu a mensagem."
        },
        "b": {
          "rotulo": "Bcc",
          "texto": "Oculta os endereços dos destinatários em cópia oculta; cada pessoa vê apenas o remetente e o próprio endereço."
        },
        "diferencaGabarito": "Em lista grande, Cc expõe os endereços de terceiros e Bcc preserva a privacidade; a escolha do campo determina se a relação de destinatários vaza."
      },
      {
        "tema": "Encaminhar x responder a todos",
        "a": {
          "rotulo": "Encaminhar",
          "texto": "Leva o histórico e os anexos da conversa para um novo destinatário, que pode não ter relação com o conteúdo anterior."
        },
        "b": {
          "rotulo": "Responder a todos",
          "texto": "Devolve a resposta ao grupo inteiro, tornando visível a quem não deveria receber a informação tratada."
        },
        "diferencaGabarito": "Encaminhar carrega o passado da conversa; responder a todos amplia a plateia — ambos exigem revisão de conteúdo e de destinatários antes do envio."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Usar Cc é aceitável para listas internas.",
        "porqueErrada": "Lista interna ainda é lista: todos os destinatários passam a ver os endereços uns dos outros, o que expõe dados de contato e facilita spam e phishing direcionado.",
        "versaoCorreta": "Em listas, usar Bcc; reservar o Cc para destinatários que realmente precisam saber quem mais recebeu a cópia."
      },
      {
        "afirmacaoEquivocada": "Encaminhar não expõe histórico.",
        "porqueErrada": "O encaminhamento costuma incluir a conversa anterior e os anexos já trocados, levando dado sensível a quem nunca teve acesso autorizado a eles.",
        "versaoCorreta": "Antes de encaminhar, revisar e limpar o histórico, mantendo só o contexto necessário ao novo destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Cc: campo que exibe os endereços a todos os destinatários da mensagem",
        "Bcc: campo que oculta os endereços em cópia invisível",
        "Encaminhamento: reenvio que costuma carregar histórico e anexos",
        "Prevenção de perda de dados: recurso que detecta e bloqueia envio de conteúdo sensível"
      ],
      "regras": [
        "Revisar destinatários e anexos antes de enviar",
        "Usar Bcc em listas grandes",
        "Limpar o histórico ao encaminhar mensagem"
      ],
      "comparacoes": [
        "Cc expõe a lista de destinatários; Bcc a oculta"
      ],
      "fluxos": [
        "Revisar destinatários → conferir anexo → limpar histórico → enviar, com prevenção de perda de dados quando disponível"
      ],
      "excecoes": [
        "A prevenção de perda de dados depende de configuração e de disponibilidade na plataforma"
      ],
      "palavrasChave": [
        "exposição",
        "Cc",
        "Bcc",
        "anexo",
        "histórico",
        "prevenção de perda de dados"
      ],
      "checklist": [
        "Os destinatários foram revisados um a um?",
        "O campo é Cc ou Bcc — o ocultamento é necessário?",
        "O anexo é a versão correta e foi aberto antes do envio?",
        "O histórico foi limpo no encaminhamento?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um setor precisa enviar um comunicado a 400 pessoas. O que acontece se todos os endereços forem colocados no campo Cc?",
        "dados": "Lista com 400 endereços de servidores e fornecedores; campos disponíveis: Para, Cc e Bcc; nenhuma regra de prevenção de perda de dados configurada no serviço.",
        "conceitos": [
          "Cc",
          "Bcc",
          "Exposição de endereços"
        ],
        "estrategia": "Isolar o conceito: explicar o comportamento distinto dos campos, mostrando que o Cc torna cada endereço visível aos demais destinatários, enquanto o Bcc os oculta uns dos outros.",
        "execucao": [
          "1. Identificar que a lista tem muitos destinatários.",
          "2. Reconhecer que o Cc exibe cada endereço aos demais.",
          "3. Concluir que a relação inteira fica exposta a todos.",
          "4. Escolher Bcc para preservar os endereços."
        ],
        "resultado": "Com Cc, todos os 400 endereços ficam visíveis a todos os destinatários; com Bcc, cada pessoa vê apenas o remetente e o próprio endereço.",
        "justificativa": "O comportamento do campo é a evidência: Cc compartilha a lista com todos, expondo dados de contato de terceiros e facilitando spam direcionado; Bcc existe para evitar essa exposição.",
        "errosFrequentes": [
          "Achar que endereço de e-mail não é dado pessoal.",
          "Supor que, sendo comunicado interno, o uso de Cc é inofensivo."
        ],
        "variacao": "Envio a 30 destinatários externos em que o remetente quer que todos saibam quem recebeu: nesse caso o Cc é a escolha adequada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um analista deve enviar a versão final de uma planilha de orçamento a um destinatário externo, sem expor a versão interna com dados de servidores.",
        "dados": "Pasta com dois arquivos: 'orçamento_v2_interno.xlsx', com dados de servidores, e 'orçamento_v2_externo.xlsx'; prazo de envio no fim do dia; política proíbe envio de planilha com dado pessoal sem proteção.",
        "conceitos": [
          "Conferência de anexo",
          "Versão de documento",
          "Prevenção de perda de dados"
        ],
        "estrategia": "Tratar o anexo como etapa obrigatória do envio: conferir nome, versão e conteúdo imediatamente antes de enviar, e manter nomenclatura que dificulte a confusão entre versões.",
        "execucao": [
          "1. Abrir o arquivo escolhido e conferir o conteúdo antes de anexar.",
          "2. Comparar o nome com a versão autorizada para envio externo.",
          "3. Revisar destinatário e assunto da mensagem.",
          "4. Enviar e respeitar o bloqueio da prevenção de perda de dados, se houver."
        ],
        "resultado": "A versão externa é enviada após conferência de conteúdo, com destinatário revisado e eventual bloqueio automatizado respeitado.",
        "justificativa": "O erro de anexo nasce da seleção em pastas com nomes parecidos; conferir o conteúdo, e não apenas o nome do arquivo, é o que garante que a versão com dado pessoal não saia da instituição.",
        "errosFrequentes": [
          "Confiar apenas no nome do arquivo sem abri-lo.",
          "Anexar direto da lista de arquivos recentes, que ainda guarda a versão anterior."
        ],
        "variacao": "Cenário em que o anexo correto já foi enviado, mas com histórico sensível na mensagem: aplica-se a limpeza do histórico em novo envio."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Encaminhar uma mensagem transmite somente o texto que o remetente escreveu, sem o conteúdo anterior da conversa.'",
        "dados": "Conversa com 12 mensagens trocadas ao longo de três semanas, contendo números de documento e anexos; o remetente encaminha a última mensagem a um destinatário externo.",
        "conceitos": [
          "Encaminhamento",
          "Histórico de conversa",
          "Minimização"
        ],
        "estrategia": "Mostrar que a leitura ingênua confunde encaminhar com responder: o encaminhamento costuma carregar a conversa completa e os anexos, de modo que o novo destinatário recebe o passado do assunto.",
        "execucao": [
          "1. Identificar o que a afirmação supõe sobre o encaminhamento.",
          "2. Verificar que a conversa e os anexos costumam acompanhar a mensagem encaminhada.",
          "3. Reconhecer que o destinatário externo passa a ter acesso a dado sensível.",
          "4. Concluir que é preciso limpar o histórico antes de encaminhar."
        ],
        "resultado": "A afirmação está errada: o encaminhamento pode incluir histórico e anexos sensíveis, e o conteúdo deve ser revisado e reduzido antes do envio.",
        "justificativa": "O cliente replica a conversa ao encaminhar, e não apenas a última mensagem; o destinatário novo recebe dados nunca autorizados para ele, o que caracteriza exposição acidental e pode configurar incidente.",
        "errosFrequentes": [
          "Confundir encaminhar com responder, que mantém o foco na resposta atual.",
          "Achar que apagar a última mensagem remove o histórico anterior da conversa."
        ],
        "variacao": "Afirmação: 'Responder a todos equivale a encaminhar.' A diferença está nos destinatários alcançados e no volume de histórico transportado."
      }
    ]
  },
  "m3-u5-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calendários e convites são vetores frequentes de exposição acidental: o título do evento, a descrição, a lista de participantes e o link de reunião ficam visíveis a todos os convidados e circulam com encaminhamentos. Um convite com dados sigilosos expõe informações a pessoas que não deveriam vê-las.",
      "preRequisitos": [
        "Unidade 2.1 — calendários e convites"
      ],
      "objetivosObservaveis": [
        "Citar três formas como calendários e convites expõem dados",
        "Explicar o risco de conceder permissão de edição a todos em agenda compartilhada",
        "Aplicar mitigações de minimização de dados e restrição de permissões"
      ],
      "competencias": [
        "Configuração segura de calendário e de convites",
        "Proteção da informação em agendas institucionais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — exposição acidental em outro canal",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — base das permissões de agenda"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático, com foco em exposição acidental em calendários e convites."
      }
    },
    "niveis": {
      "iniciante": "Formas de exposição: título e descrição do evento visíveis a todos os convidados; agenda compartilhada ou pública expõe horários a terceiros; lista de participantes exposta; link do convite reencaminhável fora da organização; anexos e campo de observação carregam dados. Mitigação: minimizar dados na descrição, restringir permissões, manter a agenda sensível privada, revisar convidados e nunca escrever senha no convite.",
      "intermediario": "O candidato distingue o necessário do desnecessário em uma agenda: aplica permissão mínima, somente leitura para quem consulta e edição restrita ao responsável; revisa a lista de convidados antes de confirmar; remove dados estratégicos da descrição; sabe que o link do convite circula com encaminhamentos e exige controle de acesso na reunião, como lobby, senha ou login.",
      "avancado": "O candidato equilibra utilidade e privacidade na agenda institucional: decide quais eventos ficam públicos, ocupados ou privados conforme a sensibilidade do conteúdo. Avalia o risco de um calendário público revelar rotinas individuais e propõe revisão periódica da agenda.",
      "especialista": "O candidato audita as agendas de uma equipe: encontra calendários públicos, exposição excessiva, convites com descrição sensível e links sem controle de acesso; corrige exposições, define o padrão institucional de compartilhamento e documenta a revisão periódica de permissões."
    },
    "comparacoes": [
      {
        "tema": "Calendário público x calendário privado",
        "a": {
          "rotulo": "Calendário público",
          "texto": "Expõe título, horário, descrição e participantes dos eventos a quem obtiver o endereço de visualização."
        },
        "b": {
          "rotulo": "Calendário privado",
          "texto": "Restringe a consulta ao proprietário e somente às pessoas autorizadas pelo contexto institucional."
        },
        "diferencaGabarito": "O calendário público revela agenda e detalhes a terceiros; o privado limita a exposição a autorizados."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: a descrição do evento é invisível aos convidados do convite.",
        "porqueErrada": "A descrição é exibida a todos os convidados e acompanha os encaminhamentos do convite, logo o dado escrito nela circula além do público previsto.",
        "versaoCorreta": "Minimizar dados sensíveis na descrição, evitando dado pessoal, senha e informação estratégica, e remeter a documento em repositório controlado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: compartilhar o calendário com permissão de edição para todos facilita o trabalho e não gera risco.",
        "porqueErrada": "A permissão de edição para todos permite que qualquer convidado altere ou cancele eventos, ocorrendo alteração indevida de compromissos institucionais.",
        "versaoCorreta": "Conceder o mínimo necessário: somente leitura para quem consulta e permissão de edição restrita aos responsáveis pela agenda."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Calendário",
        "Convite",
        "Permissão"
      ],
      "regras": [
        "Minimizar dados sensíveis na descrição do evento",
        "Conceder a permissão mínima e revisar a lista de convidados"
      ],
      "comparacoes": [
        "Calendário público expõe agenda e detalhes; calendário privado restringe a consulta a autorizados"
      ],
      "fluxos": [
        "Criar evento sensível → descrição mínima → restringir permissões → controlar o link → revisar convidados"
      ],
      "excecoes": [
        "Agenda pública institucional exige análise de sensibilidade antes do compartilhamento"
      ],
      "palavrasChave": [
        "calendário",
        "convite",
        "permissão",
        "link"
      ],
      "checklist": [
        "Citei formas de exposição em calendário?",
        "Expliquei o risco de permissão para todos?",
        "Apliquei mitigações de minimização e restrição?",
        "Avaliei o link de reunião no convite?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quais dados devem ser evitados na descrição de um evento de calendário para que o convite não exponha informação sensível?",
        "dados": "Evento de revisão contratual com CPF de cliente, valor da proposta e senha da reunião; doze convidados.",
        "conceitos": [
          "Descrição do evento",
          "Minimização de dados"
        ],
        "estrategia": "Percorrer a descrição e separar o operacional (assunto, horário, local) do sensível (dado pessoal, valor e credencial), mantendo apenas o necessário no convite.",
        "execucao": [
          "Ler a descrição do evento e listar cada informação escrita nela",
          "Separar dados operacionais de dados pessoais, valores e credenciais",
          "Remover da descrição tudo que for sensível"
        ],
        "resultado": "Evitar na descrição dado pessoal, senha e informação estratégica; manter o operacional e remeter a documento protegido.",
        "justificativa": "A descrição é exibida a todos os convidados e acompanha encaminhamentos, logo é tratada como pública. Remover o sensível e remeter a documento protegido reduz a exposição.",
        "errosFrequentes": [
          "Achar que apenas anexos expõem dados e ignorar o texto da descrição",
          "Acumular informações por precaução no convite, ampliando a exposição"
        ],
        "variacao": "Trocar o evento por uma reunião de avaliação de desempenho e reaplicar a triagem."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como compartilhar a agenda de uma secretaria com outras equipes sem expor eventos sensíveis nem permitir alteração indevida?",
        "dados": "Agenda com quarenta eventos, seis sobre processos sigilosos; três equipes consultam horários e apenas um servidor cria e cancela eventos.",
        "conceitos": [
          "Permissão mínima",
          "Somente leitura",
          "Permissão de edição"
        ],
        "estrategia": "Definir o acesso pela necessidade real: leitura a quem consulta, edição somente ao responsável e privacidade aos sigilosos, com revisão de quem recebeu permissão.",
        "execucao": [
          "Identificar quem precisa consultar a agenda e quem precisa alterá-la",
          "Conceder somente leitura somente às equipes de consulta",
          "Reservar a edição ao servidor responsável pela agenda",
          "Marcar os eventos sigilosos como privados, sem descrição sensível"
        ],
        "resultado": "Permissões restritas ao necessário, eventos sensíveis como privados e revisão periódica da lista de acesso.",
        "justificativa": "Cada nível atende uma necessidade: a leitura permite consultar sem risco de alteração e a edição cabe somente quem administra a agenda. Marcar o sigiloso como privado esconde título e descrição mesmo de quem tem leitura.",
        "errosFrequentes": [
          "Conceder edição a todos para evitar questões sobre acesso",
          "Compartilhar a agenda inteira publicamente por praticidade"
        ],
        "variacao": "Levar o cenário a uma agenda cujos eventos tragam link de reunião e reaplicar as permissões somando o controle do link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: calendário público não expõe informações, porque mostra apenas horários livres e ocupados. Como avaliar?",
        "dados": "Calendário institucional compartilhado publicamente com detalhes completos; terceiros veem títulos, participantes e descrições.",
        "conceitos": [
          "Calendário público",
          "Detalhe do evento",
          "Exposição acidental"
        ],
        "estrategia": "Testar a afirmação verificando o que o compartilhamento público publica: título, horário, participantes e descrição, e não somente a indicação de ocupado.",
        "execucao": [
          "Verificar o modo de compartilhamento adotado no calendário",
          "Constatar que os detalhes dos eventos estão sendo publicados",
          "Observar que título, participantes e descrição ficam visíveis"
        ],
        "resultado": "Errado. O calendário público pode expor agenda, participantes e detalhes dos eventos, devendo ser evitado em contexto sensível.",
        "justificativa": "A leitura ingênua confunde a exibição de ocupado ou livre com o padrão do compartilhamento público, que publica detalhes do evento. A agenda revela rotinas de pessoas identificadas, atingindo a privacidade.",
        "errosFrequentes": [
          "Achar que o calendário público mostra somente ocupados e livres",
          "Confundir compartilhamento público com leitura para pessoas específicas"
        ],
        "variacao": "Trocar por um calendário aberto a qualquer pessoa com o link, sem login, e reaplicar a verificação do que fica visível."
      }
    ]
  },
  "m3-u5-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Plataformas de colaboração — repositórios, wikis e canais de equipe — expõem dados quando as permissões são amplas demais ou o compartilhamento externo está liberado. Link permissivo, canais abertos, compartilhamento externo sem restrição de domínio e integrações conectadas são vetores de vazamento.",
      "preRequisitos": [
        "Unidade 4.2 — coautoria"
      ],
      "objetivosObservaveis": [
        "Citar três formas como plataformas de colaboração expõem dados",
        "Explicar o risco de links permissivos e canais abertos com dados sensíveis",
        "Aplicar mitigações de minimização de dados e restrição de permissões"
      ],
      "competencias": [
        "Gestão de permissões em plataformas de colaboração",
        "Prevenção de vazamento de dados em ambientes de coautoria"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t2-s1 (Exposição por e-mail (CC/BCC, anexos, encaminhamento)) — exposição acidental em outro canal",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — comunicação como vetor de exposição"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo programático, com foco em exposição acidental em plataformas de colaboração."
      }
    },
    "niveis": {
      "iniciante": "Formas de exposição: documentos e planilhas com link permissivo que qualquer pessoa pode abrir; canais abertos a toda a organização; compartilhamento externo sem restrição de domínio; comentários e histórico que preservam conteúdo removido; permissões herdadas de grupo não revogadas na saída do colaborador; integrações e aplicativos conectados com acesso amplo ao drive. Mitigações: link com acesso restrito e expiração, sem a opção qualquer pessoa com o link; auditoria periódica de membros e ex-colaboradores; revisão de compartilhamento externo; eliminação de canais abertos sem necessidade; classificação de sensibilidade; trilhas de auditoria; revogação efetiva na saída.",
      "intermediario": "O candidato distingue configuração conforme cliente e contexto: acesso interno, convidado externo, link copiado para fora, aplicativo móvel e integração de terceiros exigem permissões diferentes. Revisar permissões uma vez não basta. Aplica o menor privilégio: acesso mínimo, menor escopo e menor tempo. Define links com expiração e destinatário, remove compartilhamento externo desnecessário e programa revisões periódicas de membros, canais e aplicativos conectados.",
      "avancado": "O candidato audita o espaço de trabalho: encontra documentos com link permissivo, canais abertos com dados sensíveis, ex-colaboradores com acesso persistente e aplicativos de terceiro com alcance amplo. Corrige exposições, define o padrão institucional de compartilhamento e estabelece revogação efetiva na saída de colaboradores e fim de parcerias.",
      "especialista": "O candidato governa a plataforma de colaboração de uma organização: mapeia integrações e aplicativos conectados, revisa condicionalidade das configurações por contexto e cliente, elimina canais abertos sem necessidade, implementa classificação de sensibilidade e assegura revogação efetiva na saída de qualquer pessoa."
    },
    "comparacoes": [
      {
        "tema": "Link permissivo x link restrito",
        "a": {
          "rotulo": "Link permissivo",
          "texto": "Qualquer pessoa com o link pode visualizar ou editar o documento, sem autenticação; o link pode ser copiado e encaminhado a terceiros, perdendo-se o controle de quem acessa o conteúdo."
        },
        "b": {
          "rotulo": "Link restrito",
          "texto": "Acesso somente a usuários autenticados da organização, com controle de domínio e exigência de login; o link não pode ser copiado para fora do ambiente sem perda de controle das permissões."
        },
        "diferencaGabarito": "O link permissivo expande o documento a terceiros não autenticados, risco de divulgação não autorizada; o link restrito mantém o controle de identidade e domínio, reduzindo o risco de vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: compartilhar documento por link na plataforma de colaboração é seguro, pois apenas colaboradores podem acessar.",
        "porqueErrada": "O link permissivo pode ser encaminhado, copiado e sincronizado para pessoas não autorizadas; a segurança depende das permissões técnicas do link, não da intenção inicial de compartilhar apenas com colaboradores.",
        "versaoCorreta": "Usar apenas links restritos a usuários autenticados da organização; qualquer pessoa com o link é um vetor de vazamento comprovado, independentemente de afirmar que apenas colaboradores acessam."
      },
      {
        "afirmacaoEquivocada": "Afirmação: o ex-colaborador perde o acesso automaticamente após o término do contrato ou a demissão.",
        "porqueErrada": "As permissões herdadas de grupo não são revogadas na saída do colaborador, de modo que o acesso persiste mesmo após o término da relação institucional.",
        "versaoCorreta": "A política de saída deve incluir revogação efetiva de todas as permissões nas plataformas de colaboração; o acesso expirado ou revogado impede que o ex-colaborador mantenha acesso a documentos e histórico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Plataforma de colaboração",
        "Link permissivo",
        "Compartilhamento externo",
        "Permissão herdada",
        "Histórico de versões",
        "Classificação de sensibilidade",
        "Revogação de acesso"
      ],
      "regras": [
        "Verificar a permissão antes de compartilhar documento na plataforma de colaboração",
        "Revogar acessos de ex-colaboradores imediatamente após o término da relação"
      ],
      "comparacoes": [
        "Link permissivo expande o documento a terceiros; link restrito mantém o controle de identidade e domínio"
      ],
      "fluxos": [
        "Identificar documento sensível → verificar permissões atuais → restringir link inadequado → revisar lista de colaboradores → classificar sensibilidade"
      ],
      "excecoes": [
        "Nomes, escopos e tipos de link variam por plataforma e plano, devendo ser confirmados na documentação oficial"
      ],
      "palavrasChave": [
        "colaboração",
        "permissão",
        "link",
        "compartilhamento"
      ],
      "checklist": [
        "Citei formas de exposição em plataforma de colaboração?",
        "Expliquei o risco de links permissivos?",
        "Apliquei minimização e restrição de permissões?",
        "Revisei acessos de ex-colaboradores?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Quais dados devem ser evitados no corpo de um documento colaborativo para não expor informação sensível?",
        "dados": "Documento de reunião com CPF de cliente, valores da proposta e credenciais de acesso; link permissivo; dez colaboradores.",
        "conceitos": [
          "Descrição do documento",
          "Minimização de dados"
        ],
        "estrategia": "Percorrer o documento e separar o operacional (assunto, horário, participantes) do sensível (dado pessoal, valor e credencial), mantendo apenas o necessário.",
        "execucao": [
          "Ler o documento e listar cada informação escrita nele",
          "Separar dados operacionais de dados pessoais, valores e credenciais",
          "Remover do documento tudo que for sensível"
        ],
        "resultado": "Evitar no documento dado pessoal, senha e informação estratégica; manter o operacional e remeter a repositório controlado.",
        "justificativa": "O corpo do documento é exibido a todos os participantes com permissão e acompanha sincronizações e encaminhamentos, logo é tratado como público. Remover o sensível e remeter a repositório controlado reduz a exposição.",
        "errosFrequentes": [
          "Achar que apenas o anexo expõe dados e ignorar o texto do documento",
          "Acumular informações por precaução no documento, ampliando a exposição"
        ],
        "variacao": "Trocar o documento por um canal de wiki corporativa compartilhado e reaplicar a triagem, pois o histórico de versões preserva conteúdo removido."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como proteger um documento colaborativo sensível entre equipes sem expor dados nem permitir alteração indevida?",
        "dados": "Documento de vinte páginas sobre processo sigiloso; cinco equipes consultam; um servidor cria e cancela eventos; acesso móvel e integração de terceiros ativos.",
        "conceitos": [
          "Permissão mínima",
          "Somente leitura",
          "Permissão de edição"
        ],
        "estrategia": "Definir o acesso pela necessidade real: leitura a quem consulta, edição restrita ao responsável, privacidade aos sigilosos, revisão de quem recebeu permissão e controle do link com expiração e destinatário.",
        "execucao": [
          "Identificar quem precisa consultar o documento e quem precisa alterá-lo",
          "Conceder somente leitura somente às equipes de consulta",
          "Reservar a edição ao servidor responsável pelo documento",
          "Marcar os conteúdos sigilosos como privados, sem descrição sensível"
        ],
        "resultado": "Permissões restritas ao necessário, conteúdos sigilosos como privados e revisão periódica da lista de acesso e das integrações.",
        "justificativa": "A leitura permite consultar sem risco de alteração e a edição cabe somente quem administra o documento; marcar o sigiloso como privado esconde título e descrição mesmo de quem tem leitura, e o controle do link com expiração impede que terceiros abram o conteúdo.",
        "errosFrequentes": [
          "Conceder edição a todos para evitar questões sobre acesso",
          "Compartilhar o documento inteiro publicamente por praticidade"
        ],
        "variacao": "Levar o cenário a uma plataforma wiki corporativa e reaplicar as permissões somando o controle do histórico de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: compartilhamento por link na plataforma de colaboração é sempre seguro porque apenas colaboradores podem acessar.",
        "dados": "Plataforma de equipe com compartilhamento ativo; link com permissão qualquer pessoa com o link pode visualizar; o link é copiado para fora da organização.",
        "conceitos": [
          "Link permissivo",
          "Colaborador versus qualquer pessoa com o link",
          "Segurança dependente da configuração"
        ],
        "estrategia": "Testar a afirmação verificando as permissões reais do link: se a opção qualquer pessoa com o link está ativada, a afirmação é falsa.",
        "execucao": [
          "Verificar o modo de compartilhamento adotado na plataforma",
          "Constatar que as permissões do link permitem acesso a não autenticados",
          "Observar que a afirmação ignora o cenário de link copiado para fora"
        ],
        "resultado": "Errado. A segurança existe apenas quando restrito a usuários autenticados da organização; qualquer pessoa com o link é vetor de alto risco de vazamento.",
        "justificativa": "A leitura ingênua confunde a intenção de compartilhamento com a configuração real de permissões do link; links copiados para fora chegam a pessoas não autorizadas, comprometendo a privacidade dos dados.",
        "errosFrequentes": [
          "Achar que a restrição para colaboradores se aplica automaticamente ao link compartilhado",
          "Confundir compartilhamento interno com leitura para pessoas específicas fora da organização"
        ],
        "variacao": "Trocar por um cenário de link com senha ou tempo de expiração e reaplicar a verificação do que fica visível quando o link é copiado."
      }
    ]
  },
  "m3-u5-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O phishing direcionado à comunicação institucional explora a confiança em ferramentas do dia a dia, simulando sistemas de reunião, suporte de TI ou mensagens de liderança. Iludem o usuário ao fingir urgência ou solicitação de credenciais. A prova cobra identificação desses sinais e resposta adequada. O spear phishing, com nomes e cargos reais, torna a mensagem verossímil. Sinais de alerta: senso de urgência, links cujo domínio real difere do exibido, anexos inesperados, erros de idioma e remetente incompatível. As mitigações: verificar remetente e domínio (SPF, DKIM, DMARC); não clicar em links nem abrir anexos suspeitos; confirmar por canal alternativo; reportar a mensagem; e usar autenticação multifator (MFA), que reduz o impacto mesmo se a credencial for exposta.",
      "preRequisitos": [
        "Reconhecer tipos de e-mails não solicitados",
        "Identificar sinais de engenharia social em mensagens"
      ],
      "objetivosObservaveis": [
        "Reconhecer características de phishing em contexto institucional",
        "Identificar sinais de alerta em mensagens eletrônicas"
      ],
      "competencias": [
        "Realizar triagem defensiva de mensagens suspeitas",
        "Promover conscientização de segurança em ambientes de comunicação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t3-s2 (Falsificação de remetente (spoofing) e autenticação de e-mail)"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação alta porque o phishing institucional exige do aluno capacidade de identificação e resposta prática, tema de presença permanente em TI e segurança da informação."
      }
    },
    "niveis": {
      "iniciante": "Phishing institucional refere-se a e-mails que se passam por sistemas de reunião, calendário ou suporte de TI dentro de ambientes corporativos. O usuário pode receber mensagens simulando cancelamento de reunião, solicitação de senha ou ordens de liderança. Spear phishing é a versão personalizada com nomes e cargos específicos, aumentando a credibilidade. Os sinais de alerta incluem senso artificial de urgência, links com domínio distinto do exibido na interface, anexos inesperados e erros de formatação ou idioma. As mitigaciones envolvem verificação do remetente e do domínio real (apoiando-se em SPF, DKIM e DMARC), não clicar em links ou abrir anexos suspeitos, confirmar por canal alternativo antes de agir, reportar a mensagem e usar autenticação multifator (MFA), que reduz o impacto mesmo que credenciais sejam expostas.",
      "intermediario": "O aluno deve ser capaz de identificar tentativas de phishing analisando o remetente, examinando links antes de clicar e verificando a plausibilidade da solicitação. Além disso, deve conhecer e aplicar as mitigações técnicas disponíveis, como autenticação multifator e protocolos de verificação de domínio, para reduzir a superfície de ataque.",
      "avancado": "Em cenários de comunicação institucional, o phishing pode atacar múltiplos departamentos simultaneamente. O aluno avançado deve analisar cabeçalhos de e-mail completos, rastrear a rota de entrega e correlacionar eventos de segurança across diferentes sistemas organizacionais. A resposta a incidentes deve incluir isolamento de contas afetas, preservação de evidências forenses e reestabelecimento de comunicação por canais fora da rede comprometida.",
      "especialista": "O especialista em segurança da comunicação institucional conduz auditorias phishing simuladas, avalia a eficácia dos controles de autenticação de domínio e desenvolve políticas de uso aceitável alinhadas com LGPD e normas ISO 27001. Também orienta a implementação de soluções de correio eletrônico com filtros avançados baseados em aprendizado de máquina para detecção heurística de novas variantes de phishing."
    },
    "comparacoes": [
      {
        "tema": "Comparação de técnicas de phishing em contexto institucional",
        "a": {
          "rotulo": "Phishing direcionado",
          "texto": "E-mails que se passam por sistemas de reunião ou liderança para iludir o usuário."
        },
        "b": {
          "rotulo": "Spear phishing",
          "texto": "Versão personalizada com nomes e cargos reais, tornando a mensagem verossímil."
        },
        "diferencaGabarito": "O spear phishing usa informações pessoais específicas; o phishing direto usa simulações gerais de autoridade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'E-mails de reunião são sempre seguros.'",
        "porqueErrada": "Erro ao assumir que convites de reunião legítimos não podem ser falsificados. Phishing pode imitar qualquer comunicação eletrônica.",
        "versaoCorreta": "Errado. Phishing pode imitar convites de reunião; sempre verificar remetente e link."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'MFA compromete a segurança da conta.'",
        "porqueErrada": "Erro ao afirmar que autenticação multifator introduz vulnerabilidades. Na prática, MFA reduz o impacto mesmo se credenciais forem expostas.",
        "versaoCorreta": "Errado. MFA reduz o impacto mesmo se a credencial for exposta, tornando a conta mais segura."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Phishing direcionado",
        "Spear phishing",
        "Engenharia social",
        "Autenticação de domínio"
      ],
      "regras": [
        "Verificar sempre o remetente e domínio real",
        "Não clicar em links ou abrir anexos suspeitos"
      ],
      "comparacoes": [
        "Diferença entre phishing direcionado e spear phishing"
      ],
      "fluxos": [
        "Identificação de sinais de alerta → Verificação de remetente → Ação de mitigação → Reporte"
      ],
      "excecoes": [
        "MFA pode não proteger contra phishing que captura sessão ativa"
      ],
      "palavrasChave": [
        "phishing",
        "engenharia social",
        "spoofing",
        "MFA",
        "DKIM",
        "DMARC"
      ],
      "checklist": [
        "Verificar remetente",
        "Confirmar domínio",
        "Checar urgência artificial",
        "Reportar mensagem suspeita",
        "Usar MFA",
        "Não clicar em links"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "E-mail recebido informando cancelamento de reunião importante com link para reagendamento, solicitando credenciais de acesso sob pretexto de atualização de calendário corporativo.",
        "dados": "E-mail notificando cancelamento de reunião com link para reagendamento, solicitando credenciais de acesso sob pretexto de atualização de calendário corporativo.",
        "conceitos": [
          "Phishing",
          "Engenharia social"
        ],
        "estrategia": "Verificar remetente, analisar domínio do link, observar sinal de urgência solicitando credenciais.",
        "execucao": [
          "Passo 1: Verificar endereço de remetente contra domínio oficial",
          "Passo 2: Passar mouse sobre link para ver URL real",
          "Passo 3: Conferir se há erros de idioma ou formatação"
        ],
        "resultado": "Identificar se o e-mail é tentativa de phishing basilar ou spear phishing personalizado.",
        "justificativa": "Ao verificar o remetente e o domínio real, o aluno confirma se a mensagem pertence a fontes oficiais ou é uma tentativa de engano, aplicando o conceito de autenticação de e-mail.",
        "errosFrequentes": [
          "Ignorar endereço de remetente desconhecido",
          "Clicar no link sem conferir a URL real"
        ],
        "variacao": "E-mail simulando ser de suporte de TI pedindo redefinição de senha sob ameaça de bloqueio de conta."
      },
      {
        "tipo": "aplicacao",
        "problema": "Mensagem de texto com botão de ação azul e link encurtado para suposto portal de login corporativo, afirmando que a conta será desativada se não houver ação imediata.",
        "dados": "Botão azul com link encurtado para portal falso; mensagem afirma que conta expirará em 2 horas se usuário não clicar e inserir credenciais de acesso corporativo.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "Autenticação multifator"
        ],
        "estrategia": "Não clicar no link; verificar por canal oficial (ligação direta ou portal known); reportar à equipe de segurança; alterar senha se suspeitar de comprometimento.",
        "execucao": [
          "Passo 1: Não interagir com o e-mail suspeito",
          "Passo 2: Acessar o portal oficial digitando o endereço diretamente",
          "Passo 3: Alterar credenciais e notificar a equipe de TI"
        ],
        "resultado": "Conta não comprometida; mensagem reportada e credenciais mantidas seguras.",
        "justificativa": "Ao acessar o portal diretamente e não o link do e-mail, o aluno evita a armadilha de login fraudulento, demonstrando aplicação prática das mitigações de phishing.",
        "errosFrequentes": [
          "Clicar no link de urgência para 'salvar a conta'",
          "Digitar credenciais em portal de phishing simulado"
        ],
        "variacao": "E-mail afirmando que houve acesso não autorizado à conta e solicitando login imediato para reverter a ação."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de usuário de que e-mails de reunião são sempre seguros, ignorando riscos de engenharia social e spoofing de remetente em contextos de comunicação institucional.",
        "dados": "Cenário: usuário recebe convite de reunião aparentemente legítimo em seu e-mail corporativo e clica sem verificação, acreditando que e-mail corporativo é seguro por padrão.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "Autenticação de remetente"
        ],
        "estrategia": "Sempre verificar remetente e link, mesmo em convites de reunião. Phishing pode imitar qualquer comunicação eletrônica.",
        "execucao": [
          "Passo 1: Conferir endereço de remetente contra lista de contatos",
          "Passo 2: Passar mouse sobre link para inspeção visual do domínio",
          "Passo 3: Confirmar reunião por canal alternativo (chat ou telefone)"
        ],
        "resultado": "Erro identificado a tempo; possível comprometimento evitado por verificação prévia.",
        "justificativa": "A leitura ingênua assume que e-mail corporativo é seguro por padrão, mas phishing pode imitar qualquer comunicação, incluindo convites de reunião; verificação prévia previne o incidente.",
        "errosFrequentes": [
          "Clique em link de convite sem conferir remetente",
          "Assumir que e-mail corporativo é automáticamente seguro"
        ],
        "variacao": "Convite de reunião via aplicativo de mensagens corporativas (Teams/Slack) com link malicioso."
      }
    ]
  },
  "m3-u5-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Falsificação de remetente (spoofing) em comunicação institucional consiste na alteração do campo 'From' para que a mensagem pareça vir de um remetente legítimo, mesmo partindo de outra origem. O aluno deve aprender a distinguir o nome exibido do endereço real do remetente. Os mecanismos de autenticação de domínio ajudam, mas têm limitações: o SPF autoriza servidores específicos, o DKIM assina criptograficamente as mensagens e o DMARC define a política para falhas e gera relatórios. Esses mecanismos reduzem o spoofing direto, mas não eliminam o phishing: um atacante pode registrar domínios visualmente parecidos (typosquatting), comprometer uma conta legítima (que então passa na autenticação) ou usar texto e contexto convincente. A decisão segura combina verificação técnica (resultado da autenticação) com o bom senso (contexto, urgência, canal alternativo). No caso de uma conta comprometida, a mensagem é autenticada legitimamente e só a análise de contexto a distingue de um envio normal.",
      "preRequisitos": [
        "Identificar o campo 'From' e comparar com o domínio de resposta",
        "Diferenciar nome exibido do endereço real do remetente"
      ],
      "objetivosObservaveis": [
        "Definir spoofing de remetente e seus mecanismos de combate",
        "Explicar o funcionamento e os limites de SPF, DKIM e DMARC"
      ],
      "competencias": [
        "Analisar autenticidade de mensagem baseada em cabeçalhos",
        "Realizar triagem defensiva diante de mensagens com suspeita de falsificação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t3-s1 (Phishing direcionado a comunicação institucional)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação média porque, embora o spoofing de remetente seja técnica fundamental em engenharia social, o tema ocupa posição secundária em relação ao phishing direto; esta classificação reflete estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Spoofing de remetente: falsificação do campo 'From' para parecer legítimo. Autenticação: SPF (servidores autorizados a enviar pelo domínio), DKIM (assinatura digital do e-mail), DMARC (política para falhas e relatórios). Esses mecanismos reduzem spoofing mas não eliminam phishing (domínios parecidos, comprometimento de conta). Sempre verificar contexto e não confiar apenas no nome do remetente.",
      "intermediario": "O aluno deve ser capaz de analisar cabeçalhos de e-mail para identificar sinais de spoofing, comparando o nome exibido do remetente com o endereço real de resposta. Deve conhecer o funcionamento básico de SPF, DKIM e DMARC e aplicar a verificação de contexto ao avaliar mensagens suspeitas, articulando boas práticas de segurança em comunicação institucional.",
      "avancado": "Em cenários de conta comprometida, o aluno avançado deve analisar a cadeia de autenticação completa, correlacionar eventos de spoofing across diferentes sistemas de correio e avaliar a consistência do contexto da mensagem. A resposta a incidentes deve incluir preservação de evidências forenses, isolamento de contas afetadas e reestabelecimento de comunicação por canais fora da rede comprometida.",
      "especialista": "Nível especialista: o especialista em segurança da comunicação institucional conduz simulações de falsificação de remetente controladas, avalia a eficácia dos controles de autenticação de domínio e desenvolve políticas de uso aceitável alinhadas com a LGPD e com a norma ISO 27001. Também orienta a implementação de filtros de correio eletrônico com aprendizado de máquina para detecção de variantes desconhecidas de falsificação e de phishing."
    },
    "comparacoes": [
      {
        "tema": "Comparação de mecanismos de autenticação de e-mail",
        "a": {
          "rotulo": "SPF",
          "texto": "Autoriza quais servidores estão permitidos a enviar e-mail em nome do domínio."
        },
        "b": {
          "rotulo": "DKIM",
          "texto": "Assina criptograficamente o e-mail para verificar integridade e origem."
        },
        "diferencaGabarito": "O SPF atua como lista de autorização de servidores; o DKIM fornece assinatura digital integridade e origem da mensagem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'DMARC elimina todo phishing.'",
        "porqueErrada": "Erro ao supor que a política DMARC bloqueia todas as tentativas de phishing. DMARC atua apenas quando SPF e DKIM falham e gera relatórios, mas phishing pode usar domínios parecidos ou contas comprometidas que passam na autenticação.",
        "versaoCorreta": "Errado. DMARC reduz spoofing de domínio, mas phishing pode usar domínios parecidos ou contas comprometidas."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'SPF impede completamente o spoofing.'",
        "porqueErrada": "Erro ao crer que a lista de servidores autorizados do SPF impede todo e qualquer spoofing. Atacantes podem usar domínios de terceiros ou comprometer contas autorizadas, contornando o SPF.",
        "versaoCorreta": "Errado. O SPF pode ser contornado por meio de typosquatting ou compromisso de contas autorizadas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Spoofing de remetente",
        "Autenticação de domínio (SPF, DKIM, DMARC)",
        "Engenharia social",
        "Typosquatting"
      ],
      "regras": [
        "Verificar sempre o domínio real do remetente",
        "Comparar nome exibido com endereço de resposta"
      ],
      "comparacoes": [
        "Diferença entre SPF e DKIM em autenticação de e-mail"
      ],
      "fluxos": [
        "Identificação de suspeita de spoofing → Verificação de autenticação → Análise de contexto → Ação de mitigação"
      ],
      "excecoes": [
        "SPF e DKIM sozinhos não eliminam o phishing que usa contas comprometidas"
      ],
      "palavrasChave": [
        "spoofing",
        "autenticação",
        "cabeçalhos",
        "typosquatting",
        "DKIM",
        "DMARC"
      ],
      "checklist": [
        "Analisar cabeçalhos de e-mail",
        "Comparar nome exibido com domínio real",
        "Verificar resultados de autenticação (SPF/DKIM/DMARC)",
        "Confirmar contexto da mensagem",
        "Reportar mensagem suspeita"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Mensagem de e-mail com campo 'From' exibindo nome de remetente conhecido, mas endereço real aponta para domínio diferente. O assunto trata de urgência financeira ou acesso a dados, solicitando credenciais de login sob pretexto de atualização de sistema.",
        "dados": "Mensagem de e-mail com campo 'From' exibindo nome de remetente conhecido, mas endereço real aponta para domínio diferente.",
        "conceitos": [
          "Spoofing",
          "Engenharia social"
        ],
        "estrategia": "Verificar sempre o endereço real do remetente comparando com domínios de confiança; não confiar apenas no nome exibido.",
        "execucao": [
          "Passo 1: Passar mouse sobre o nome do remetente para ver o endereço completo",
          "Passo 2: Conferir se o domínio do remetente corresponde ao domínio oficial da organização",
          "Passo 3: Avaliar se o conteúdo da mensagem corresponde ao padrão de comunicação usual da organização"
        ],
        "resultado": "Identificar se a mensagem é tentativa de spoofing ou comunicação legítima, permitindo ao aluno aplicar as verificações de autenticação.",
        "errosFrequentes": [
          "Confiar apenas no nome exibido do remetente",
          "Clicar em links ou baixar anexos sem conferir o endereço de e-mail"
        ],
        "variacao": "E-mail simulando ser do departamento de TI solicitando redefinição de senha via link fraudulento.",
        "justificativa": "Ao analisar o campo From e comparar o domínio real, o aluno demonstra compreensão de como identificar spoofing básico, aplicando o conceito de autenticação de e-mail para distinguir comunicação legítima de tentativa de engano."
      },
      {
        "tipo": "aplicacao",
        "problema": "Recebimento de 100 e-mails de domínios diversos com resultados variados de autenticação SPF, DKIM e DMARC, usados para demonstrar como os mecanismos falham ou aprovam em diferentes condições de spoofing de remetente.",
        "dados": "Recebimento de 100 e-mails de domínios diversos: 40 passam no SPF, 35 têm assinatura DKIM válida e 25 têm política DMARC de quarentena aplicada.",
        "conceitos": [
          "SPF",
          "DKIM",
          "DMARC",
          "Autenticação de domínio"
        ],
        "estrategia": "Verificar resultados combinados dos três mecanismos: SPF valida servidor autorizado, DKIM valida integridade da mensagem, DMARC define política para falhas e gera relatórios de falhas.",
        "execucao": [
          "Passo 1: Verificar se o domínio de retorno corresponde aos servidores autorizados pelo SPF",
          "Passo 2: Confirmar a assinatura DKIM no cabeçalho da mensagem",
          "Passo 3: Revisar relatórios DMARC para identificar padrões de falhas ou abusos"
        ],
        "resultado": "Determinar qual mecanismo falhou ou se a autenticação passou legitimamente, orientando a ação de mitigação subsequente.",
        "justificativa": "Classificação média reflete estimativa pedagógica de que o spoofing de remetente, embora técnico fundamental em engenharia social, apresenta frequência variável em editais de TI; portanto é menos recorrente que o phishing direto, justificando classificação média e não alta, conforme adequação ao conteúdo programático sem afirmar frequência estatística comprovada em provas.",
        "errosFrequentes": [
          "Assumir que DKIM sozinho impede phishing",
          "Acreditando que aprovação do SPF garante legitimidade total da mensagem"
        ],
        "variacao": "Cenário inverso: 80 e-mails falham no SPF, apenas 10 têm DKIM válido e DMARC gera relatórios massivos de falhas."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de que 'DMARC elimina todo phishing', ignorando que o protocolo reduz spoofing de domínio mas não impede phishing que usa domínios de typosquatting ou contas de remetentes comprometidas que passam na autenticação.",
        "dados": "Relatório de exemplo mostrando 50 mensagens de phishing que contornaram o DMARC ao usar domínios de typosquatting e contas de remetentes comprometidos que passaram na autenticação.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "Autenticação de domínio"
        ],
        "estrategia": "Reconhecer que o DMARC reduz spoofing de domínio, mas não elimina phishing que utiliza domínios visualmente parecidos ou contas legítimas comprometidas.",
        "execucao": [
          "Passo 1: Analisar se o domínio aparente corresponde ao domínio real de resposta",
          "Passo 2: Verificar se a mensagem usa typosquatting ou credenciais comprometidas",
          "Passo 3: Aplicar filtros adicionais baseados em contexto e reporte de usuário"
        ],
        "resultado": "Compreender que o DMARC é uma camada de defesa importante mas insuficiente sozinha; a resposta segura requer análise de contexto e boas práticas de usuários.",
        "justificativa": "Entender que o DMARC é uma camada de defesa importante, porém insuficiente quando usada sozinha: a resposta segura depende ainda da análise de contexto e de boas práticas de uso por parte dos usuários.",
        "errosFrequentes": [
          "Supor que aprovação do DMARC garante ausência de phishing",
          "Ignorar a necessidade de verificação de contexto além da autenticação"
        ],
        "variacao": "Afirmação contrária: 'SPF sozinho impede completamente o spoofing', que também está incorreto por motivos análogos."
      }
    ]
  },
  "m3-u5-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Boas práticas de comunicação segura visam proteger dados e reputação institucional diante de ameaças virtuais. É fundamental que usuários compreendam como prevenir incidentes, responder rapidamente a eventos suspeitos e seguir obrigações legais e regulatórias. A prova cobra a sequência adequada de resposta e o conhecimento das boas práticas. O conhecimento é estimativa pedagógica de alta relevância para concursos de TI e segurança da informação. Treinamento periódico, simulações de phishing e autenticação multifator (MFA) reduzem significativamente a superfície de ataque e capacitam o usuário a agir com segurança.",
      "preRequisitos": [
        "Conhecer os conceitos básicos de comunicação segura e proteção de dados",
        "Identificar os diferentes tipos de ameaças a comunicação eletrônica"
      ],
      "objetivosObservaveis": [
        "Listar boas práticas de comunicação segura em ambiente institucional",
        "Descrever a sequência adequada de resposta a incidentes de comunicação"
      ],
      "competencias": [
        "Aplicar boas práticas de uso aceitável de recursos de TI",
        "Executar resposta a incidentes de comunicação seguindo procedimentos internos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t3-s1 (Phishing direcionado a comunicação institucional)"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação alta porque boas práticas e resposta a incidentes integram o conteúdo programático de TI e segurança da informação, com cenários de resposta a vazamentos, procedimentos de contenção e encaminhamento de relatos; esta classificação reflete estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Boas práticas básicas incluem uso de senhas fortes, bloqueio de sessão quando não estiver usando o computador, verificação de links antes de clicar e não abrir anexos de remetentes desconhecidos. Em contexto de phishing, nunca fornecer credenciais por e-mail. MFA (autenticação multifator) adiciona camada extra de proteção. Resposta a incidente inicial: informar ao supervisor e não tentar resolver sozinho.",
      "intermediario": "O aluno deve ser capaz de seguir o procedimento de resposta a incidente: isolar a conta afetada (bloquear, encerrar sessões), alterar credenciais da conta comprometida, notificar a equipe de segurança da informação e registrar o evento nas bases corporativas. Deve conhecer o dever de comunicação de incidente segundo LGPD e normas internas de segurança da informação.",
      "avancado": "Em cenários de vazamento de dados, o aluno avançado deve analisar o escopo da exposição (quais categorias de dados foram comprometidas), avaliar o impacto institucional e coordenar a comunicação com as partes afetadas. Deve ser capaz de revisar os controles de segurança implementados para evitar recorrência do incidente, articulando lições aprendidas com a diretoria de TI.",
      "especialista": "O especialista em segurança da comunicação conduz auditorias pós-incidente, avalia a eficácia dos controles de prevenção e desenvolve políticas de uso aceitável atualizadas alinhadas com LGPD e normas ISO 27001. Também orienta a implementação de soluções de monitoramento de segurança baseadas em aprendizado de máquina para detecção antecipada de novas ameaças à comunicação institucional."
    },
    "comparacoes": [
      {
        "tema": "Comparação de boas práticas e resposta a incidentes de comunicação",
        "a": {
          "rotulo": "Pré-incidente",
          "texto": "Treinamento periódico, MFA, simulações de phishing defensivo, política de uso aceitável."
        },
        "b": {
          "rotulo": "Pós-incidente",
          "texto": "Isolar conta, alterar credenciais, notificar, preservar evidências, revisar controles."
        },
        "diferencaGabarito": "A fase de pré-incidente foca na prevenção e redução de superfície de ataque; a fase pós-incidente foca na contenção, recuperação e melhoria de controles."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Treinamento único é suficiente para prevenir phishing.'",
        "porqueErrada": "Erro ao crer que um único treinamento consegue manter usuários protegidos contra ameaças que evoluem continuamente.",
        "versaoCorreta": "Errado. Ameaças evoluem; treinamento deve ser contínuo e atualizado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'MFA é inconveniente e não vale a pena.'",
        "porqueErrada": "Erro ao subestimar o valor da autenticação multifator, alegando dificuldade de uso. Na prática, MFA reduz significativamente o risco de comprometimento mesmo contra credenciais expostas.",
        "versaoCorreta": "Errado. MFA reduz o risco de comprometimento de conta por phishing, sendo uma camada de segurança essencial."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Comunicação segura",
        "Prevenção de incidentes",
        "Resposta a incidentes",
        "LGPD",
        "MFA"
      ],
      "regras": [
        "Nunca fornecer credenciais por e-mail",
        "Verificar sempre links e anexos antes de interagir"
      ],
      "comparacoes": [
        "Diferença entre abordagem preventiva e resposta a incidentes"
      ],
      "fluxos": [
        "Identificação de suspeita → Isolamento → Notificação → Preservação → Revisão de controles"
      ],
      "excecoes": [
        "MFA pode não proteger contra ataques que capturam sessão ativa"
      ],
      "palavrasChave": [
        "phishing",
        "engenharia social",
        "LGPD",
        "MFA",
        "incidente",
        "boas práticas"
      ],
      "checklist": [
        "Verificar remetente e domínio",
        "Não clicar em links suspeitos",
        "Reportar mensagem à equipe de TI",
        "Alterar credenciais se comprometidas",
        "Registrar evento de incidente"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O usuário suspeita de conta comprometida quando recebe mensagens sobre atividade desconhecida, bloqueio de acesso ou solicitação de credenciais incomum em ambiente institucional, devendo agir seguindo procedimento de segurança.",
        "dados": "Usuário recebe notificação de atividade desconhecida na conta ou sistema de segurança alerta sobre login de localização incomum, solicitando ação imediata.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "Comprometimento de conta"
        ],
        "estrategia": "Não entrar em pânico; seguir sequência procedimental: isolar, alterar credenciais, notificar, preservar evidências.",
        "execucao": [
          "Passo 1: Bloquear a conta afetada e encerrar sessões ativas",
          "Passo 2: Alterar a senha da conta para uma nova e forte",
          "Passo 3: Notificar a equipe de segurança da informação sobre o incidente"
        ],
        "resultado": "Conta bloqueada antes que atacante tenha tempo de exfiltra dados adicionais; equipe de segurança toma ciência do evento.",
        "justificativa": "Ao bloquear a conta e alterar credenciais rapidamente, o aluno impede que o atacante tenha mais tempo de acesso, demonstrando aplicação prática da sequência de resposta a incidente de comunicação.",
        "errosFrequentes": [
          "Tentarisso resolver o problema sozinho sem avisar a equipe de TI",
          "Continuar usando a conta comprometida sem alterar credenciais"
        ],
        "variacao": "Cenário: e-mail de phishing solicitando que usuário clique em link e digite credenciais sob pretexto de verificar atividade suspeita."
      },
      {
        "tipo": "aplicacao",
        "problema": "Turma de 30 servidores participou de simulação de phishing: 8 clicaram no link na primeira rodada, 3 clicaram na segunda após treinamento, e 19 se recusaram na terceira rodada. MFA estava ativado para 15 das 30 contas corporativas, demonstrando redução de risco.",
        "dados": "Turma de 30 servidores participou de simulação de phishing: 8 clicaram no link inicial, 3 clicaram após primeira simulação, 19 se recusaram a clicar na terceira rodada. MFA estava ativado para 15 contas.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "MFA",
          "Simulação defensiva"
        ],
        "estrategia": "Aplicar treinamento periódico, realizar simulações de phishing com retorno e exigir MFA obrigatório em todas as contas corporativas.",
        "execucao": [
          "Passo 1: Aplicar teste de phishing simulado inicial para identificar vulnerabilidades",
          "Passo 2: Apresentar resultados aos servidores e orientar sobre sinais de alerta",
          "Passo 3: Implementar MFA obrigatório em todas as contas de acesso corporativo"
        ],
        "resultado": "Redução de 75% no clique em links de phishing após três rodadas de simulação e treinamento; MFA impede acesso mesmo com credenciais comprometidas.",
        "justificativa": "A combinação de simulação repetida com treinamento e MFA obrigatório demonstra eficácia prática na redução de riscos, mostrando ao aluno que medidas técnicas aliadas à educação continuada produzem resultados mensuráveis na segurança da comunicação institucional.",
        "errosFrequentes": [
          "Assumir que treinamento único resolvesse o problema",
          "Não ativar MFA por considerar inconveniente para os usuários"
        ],
        "variacao": "Cenário: mesma simulação realizada após 6 meses para verificar se os aprendizados foram mantidos ao longo do tempo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Treinamento único é suficiente para garantir segurança da comunicação.'",
        "dados": "Estudo mostra que eficácia de treinamento contra phishing decai para abaixo de 30% após 6 meses sem reforço ou simulação continua.",
        "conceitos": [
          "Phishing",
          "Engenharia social",
          "Treinamento contínuo"
        ],
        "estrategia": "Reconhecer que ameaças evoluem continuamente; treinamento isolado não mantém segurança a longo prazo sem atualizações e simulações repetidas.",
        "execucao": [
          "Passo 1: Aplicar primeira rodada de simulação de phishing e registrar taxas de acerto",
          "Passo 2: Coletar dados após 3 meses e depois de 6 meses, para acompanhar a manutenção dos aprendizados",
          "Passo 3: Programar treinamento de reforço e nova simulação a cada 6 meses"
        ],
        "resultado": "Compreensão de que a segurança da comunicação requer esforço contínuo e repetido, não um evento isolado.",
        "justificativa": "Os dados mostram que a eficácia de treinamento isolado decai significativamente após 6 meses, comprovando que segurança da comunicação exige treinamento contínuo e simulações repetidas para manter a vigilância do aluno contra ameaças evolutivas.",
        "errosFrequentes": [
          "Acreditar que um único evento de treinamento garante segurança permanente",
          "Não planejar reforço ou simulações subsequentes"
        ],
        "variacao": "Afirmação contrária: 'Após um treinamento os usuários estão permanentemente protegidos contra phishing', que também está incorreta por decaimento da eficácia ao longo do tempo."
      }
    ]
  }
};
