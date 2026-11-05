const enriParcialM3U1P1 = {
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
  }
};
