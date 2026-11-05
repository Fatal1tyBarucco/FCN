const enriParcialM3U5P4 = {
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
  }
};
