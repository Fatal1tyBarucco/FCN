const enriParcialM4U1P3 = {
  "m4-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Autenticação, autorização e auditoria formam o ciclo de controle de acesso; o erro mais comum em concursos é tratar autenticado como autorizado. Menor privilégio limita o dano de contas comprometidas e é exigido pela Lei nº 13.709/2018 (LGPD) como medida de segurança para tratamento de dados.",
      "preRequisitos": [
        "Noção de identidade de usuário e credencial de acesso",
        "Diferença entre sistema, arquivo, tela e comando como recurso",
        "Boas práticas de senha forte e não reutilização"
      ],
      "objetivosObservaveis": [
        "Distinga autenticação (quem é), autorização (o que pode) e auditoria (o que fez)",
        "Desenhe perfis de acesso aplicando menor privilégio e separação de funções",
        "Identifique o dado mínimo que um registro de auditoria deve conter"
      ],
      "competencias": [
        "Raciocínio de controle de acesso: mapear identidade, perfil e permissão",
        "Atenção a detalhes: um perfil excessivo expõe todo o ambiente",
        "Aplicação de normas de proteção de dados ao desenho de acessos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t2-s3 (MFA, senhas, gerenciadores e autenticação resistente a phishing) — reforço do primeiro fator do ciclo de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Controle de acesso e menor privilégio são partes fundamentais do programa. A classificação reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "As três funções formam o ciclo clássico de controle de acesso. Autenticação responde quem é você: verifica credenciais como senha, token, biometria ou certificado. Autorização responde o que você pode fazer: mapeia identidade, perfil e permissões sobre arquivos, telas e comandos. Auditoria responde o que você fez: registra ações com identificador, data/hora e resultado, protegido contra alteração. Menor privilégio concede somente o mínimo necessário à função, nunca mais.",
      "intermediario": "Na prática, autenticação confirmada não implica autorização: o sistema deve avaliar o perfil a cada requisição, não apenas na entrada. Menor privilégio se aplica também a serviços: a conta de um aplicativo acessa apenas o banco de dados que usa e nunca faz login como administrador do domínio. Separar quem aprova de quem executa reduz o impacto de erro ou fraude.",
      "avancado": "Erros críticos incluem dar perfil de administrador a usuário final para facilitar, expor logs de auditoria a alteração e reutilizar contas compartilhadas. A separação de funções impede que uma só pessoa cadastre, aprove e pague. Cada ação relevante deve gerar registro imutável com identificador do usuário, data/hora e resultado da operação.",
      "especialista": "Implementar menor privilégio exige revisão periódica de perfis, revogação imediata de acessos ao desligamento e monitoramento de tentativas de acesso negado. Auditoria eficaz combina logs imutáveis, alerta de anomalias e revisão independente. Isso sustenta conformidade com LGPD e boas práticas de governança de TI."
    },
    "comparacoes": [
      {
        "tema": "Autenticação versus autorização no ciclo de controle de acesso",
        "a": {
          "rotulo": "Autenticação",
          "texto": "Verifica quem é o usuário, checando credenciais (senha, token, biometria, certificado). Responde: quem está acessando?"
        },
        "b": {
          "rotulo": "Autorização",
          "texto": "Define o que o usuário autenticado pode fazer, mapeando perfil a permissões sobre recursos. Responde: ele pode executar esta ação?"
        },
        "diferencaGabarito": "Autenticação confirma a identidade; autorização concede ou nega a ação com base no perfil. Usuário autenticado não está automaticamente autorizado a tudo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Usuário autenticado pode acessar qualquer recurso do sistema.",
        "porqueErrada": "Confunde autenticação com autorização: confirmar a identidade não concede permissão sobre todos os recursos; o perfil de acesso delimita cada operação.",
        "versaoCorreta": "O acesso depende do perfil, avaliado a cada operação, e a regra padrão é negar o que não foi explicitamente permitido."
      },
      {
        "afirmacaoEquivocada": "Separar quem aprova de quem executa é apenas formalidade burocrática, sem efeito sobre segurança.",
        "porqueErrada": "A separação de funções é derivado direto do menor privilégio: reduz poderes acumulados em uma só identidade e diminui o impacto de erro ou fraude.",
        "versaoCorreta": "É uma aplicação obrigatória do menor privilégio: quem aprova não executa e quem cadastra não paga, evitando concentração de poderes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Autenticação: verificação de credenciais (quem é você)",
        "Autorização: mapeamento identidade, perfil e permissões (o que pode fazer)",
        "Auditoria: registro de ações com identificador, data/hora e resultado",
        "Menor privilégio: conceder somente o mínimo necessário à função"
      ],
      "regras": [
        "Avaliar autorização a cada requisição, não apenas na entrada do sistema",
        "Contas de serviço acessam apenas os recursos que usam, nunca domínio inteiro",
        "Registros de auditoria devem ser protegidos contra alteração"
      ],
      "comparacoes": [
        "Autenticação confirma identidade; autorização concede ou nega a ação com base no perfil."
      ],
      "fluxos": [
        "Credenciais apresentadas; sistema autentica; perfil consultado; ação autorizada ou negada; registro de auditoria gravado."
      ],
      "excecoes": [
        "Conta de emergência com privilégio elevado requer aprovação documentada e registro explícito de uso.",
        "Acesso de suporte temporário deve ter prazo definido e revogação automática."
      ],
      "palavrasChave": [
        "autenticação",
        "autorização",
        "auditoria",
        "menor privilégio",
        "separação de funções",
        "perfil de acesso",
        "credencial",
        "registro de auditoria"
      ],
      "checklist": [
        "Distinguir autenticação, autorização e auditoria em cada cenário",
        "Aplicar menor privilégio ao criar ou editar perfis",
        "Separar quem aprova de quem executa",
        "Registrar identificador, data/hora, ação e resultado para cada operação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor autentica corretamente o usuário, mas ele tenta abrir a pasta de outro setor. Em que etapa do ciclo a falha está?",
        "dados": "Usuário com senha válida; tentativa de abrir pasta de setor diferente; servidor confirma identidade, mas nega a pasta.",
        "conceitos": [
          "Autenticação",
          "Autorização"
        ],
        "estrategia": "Confirme que a identidade foi verificada e verifique se a permissão solicitada corresponde ao perfil do usuário.",
        "execucao": [
          "Verifique se as credenciais foram aceitas (autenticação realizada).",
          "Consulte o perfil do usuário e as permissões sobre a pasta alvo.",
          "Conclua que a falha está na autorização, não na autenticação."
        ],
        "resultado": "Na autorização: a identidade foi confirmada, mas a permissão não corresponde ao perfil. A ação deve ser negada e registrada para auditoria.",
        "justificativa": "O gabarito está correto porque autenticação apenas identifica o usuário; cabe à autorização decidir se o perfil permite acessar aquele recurso específico.",
        "errosFrequentes": [
          "Achar que senha correta garante acesso a qualquer pasta do sistema.",
          "Confundir o momento da falha e atribuí-la à autenticação."
        ],
        "variacao": "O usuário acessa o sistema corretamente, mas tenta excluir um relatório que apenas gestores podem modificar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Desenhe perfis para a seção de licitações: equipe que digita, analista que aprova e auditoria externa.",
        "dados": "Três perfis: equipe de digitação, analista de conformidade, auditoria externa; recursos: registros de licitação, campos de conformidade, logs de auditoria.",
        "conceitos": [
          "Menor privilégio",
          "Separar quem aprova de quem executa",
          "Auditoria"
        ],
        "estrategia": "Atribua a cada perfil somente as permissões mínimas para sua função e garanta registro individual de cada ação.",
        "execucao": [
          "Equipe de digitação: cria e edita registros próprios, sem aprovação e sem exclusão de histórico.",
          "Analista: aprova e edita campos de conformidade, sem excluir o histórico existente.",
          "Auditoria externa: acesso somente leitura a registros e logs, sem permissão de escrita.",
          "Todos com conta individual e registro de auditoria de cada ação."
        ],
        "resultado": "Menor privilégio mais separação de funções: digitação cria/edita próprios; analista aprova campos de conformidade sem excluir histórico; auditoria só lê registros e logs. Todos com conta individual e registro de auditoria.",
        "justificativa": "O fluxo impede que uma única pessoa cadastre, aprove e exclua, reduzindo fraude e erro; a auditoria externa lê sem alterar, preservando a integridade dos logs.",
        "errosFrequentes": [
          "Dar ao analista permissão de exclusão sobre o histórico.",
          "Usar conta compartilhada entre digitação e análise."
        ],
        "variacao": "A mesma seção passa a exigir que um segundo analista revise aprovações acima de um valor limite antes de homologar."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Usuário autenticado pode acessar qualquer recurso do sistema, independentemente do perfil ou da função que exerce na organização.",
        "dados": "Usuário com senha válida autenticado no sistema; tentativa de acesso a recurso de perfil diferente.",
        "conceitos": [
          "Autenticação",
          "Autorização",
          "Menor privilégio"
        ],
        "estrategia": "Reconheça que autenticação identifica, mas não autoriza; o acesso depende do perfil avaliado a cada operação.",
        "execucao": [
          "Identifique que a afirmação equaliza autenticação com autorização total.",
          "Lembre que cada requisição é avaliada pelo perfil do usuário.",
          "Aplique a regra padrão: negar o que não foi explicitamente permitido."
        ],
        "resultado": "Errado. Autenticação identifica; autorização delimita. O acesso depende do perfil, avaliado a cada operação, e a regra padrão é negar o que não foi explicitamente permitido.",
        "justificativa": "A leitura ingênua falha porque pressupõe que logar no sistema libera tudo; o controle de acesso funciona em camadas, sendo a autorização a barreira para cada recurso.",
        "errosFrequentes": [
          "Achar que autenticado significa liberação geral de recursos.",
          "Ignorar que a autorização é reavaliada a cada operação."
        ],
        "variacao": "Um funcionário autenticado tenta acessar o módulo de folha de pagamento, cujo perfil é restrito ao departamento de RH."
      }
    ]
  },
  "m4-u1-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "MFA combina fatores de categorias distintas e reduz muito o risco de uso indevido de credenciais, mas não é absoluto: vetores residuais como troca de chip, phishing em tempo real e engenharia social no suporte continuam exigindo controles adicionais, especialmente em servidores públicos de alta exposição.",
      "preRequisitos": [
        "Noção de fatores de autenticação (sabe, tem, é)",
        "Diferença entre senha única e reutilizada",
        "Conceito de site clonado e phishing"
      ],
      "objetivosObservaveis": [
        "Compare fatores de autenticação por categoria e força",
        "Avalie mecanismos MFA, incluindo SMS, TOTP e passkey/WebAuthn",
        "Indique alternativa resistente a phishing para autenticação"
      ],
      "competencias": [
        "Avaliar força de mecanismos de autenticação em cenários concretos",
        "Identificar vetores residuais mesmo com MFA ativado",
        "Aplicar critério de resistência a phishing na escolha de fatores"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — base do primeiro fator do ciclo de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "MFA e autenticação resistente a phishing fazem parte do programa. A classificação reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Autenticação fatorada combina categorias independentes: algo que sabe (senha, PIN), algo que tem (aplicativo autenticador, cartão, token) e algo que é (biometria). MFA exige ao menos dois fatores de categorias distintas; 2FA é o caso com exatamente dois. Senhas longas, únicas por serviço e guardadas em gerenciador superam políticas de troca periódica forçada, que geram variantes previsíveis.",
      "intermediario": "SMS e chamada podem sofrer fraude de troca de chip (SIM swap); códigos TOTP podem ser capturados por sites falsos. Autenticação resistente a phishing (passkey/WebAuthn) vincula o fator ao domínio legítimo: o navegador conclui apenas no endereço correto, anulando sites clonados. MFA não substitui senhas fracas nem protege contra engenharia social direcionada ao suporte.",
      "avancado": "A autenticação de recuperação de conta também precisa de fatores, pois é um ponto de fraqueza: atacantes tentam redefinir senha pelo suporte. MFA reduz muito o risco de autenticação indevida, mas não elimina interceptação em tempo real nem contaminação do próprio dispositivo do usuário.",
      "especialista": "Implantar MFA em larga escala exige política de recuperação segura, treinamento contra engenharia social, monitoramento de logins atípicos e revisão periódica de métodos aceitos. Passkeys distribuem a confiança criptográfica ao domínio, reduzindo dependência de códigos transitórios."
    },
    "comparacoes": [
      {
        "tema": "MFA versus autenticação por senha única",
        "a": {
          "rotulo": "Senha única",
          "texto": "Um único fator (algo que sabe); vulnerável a reutilização, phishing e vazamento de banco de dados."
        },
        "b": {
          "rotulo": "MFA",
          "texto": "Ao menos dois fatores de categorias distintas (ex.: senha + aplicativo autenticador); muito mais difícil de romper com credencial roubada."
        },
        "diferencaGabarito": "MFA exige fatores de categorias distintas, enquanto a senha depende de um único segredo que, uma vez vazado, dá acesso total."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "MFA elimina o risco de roubo de credenciais.",
        "porqueErrada": "MFA reduz muito o risco, mas não elimina vetores residuais: troca de chip, captura de códigos em tempo real, aplicativo clonado e engenharia social no suporte continuam possíveis.",
        "versaoCorreta": "MFA é controle forte, não absoluto: reduz muito o risco de autenticação indevida, mas requer fatores também na recuperação de conta e controles contra engenharia social."
      },
      {
        "afirmacaoEquivocada": "Qualquer código de uso único recebido por SMS é tão seguro quanto um aplicativo autenticador.",
        "porqueErrada": "SMS está sujeito a fraude de troca de chip (SIM swap) e interceptação, enquanto o aplicativo autenticador gera o código localmente no dispositivo, sem trafegar por rede móvel.",
        "versaoCorreta": "O aplicativo autenticador (TOTP local) é mais resistente que SMS porque o código não trafega por rede móvel vulnerável a troca de chip."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Fatores de autenticação: algo que sabe, tem e é",
        "MFA: ao menos dois fatores de categorias distintas; 2FA é exatamente dois",
        "Senhas longas e únicas por serviço em gerenciador de senhas",
        "Passkey/WebAuthn: fator criptográfico vinculado ao domínio"
      ],
      "regras": [
        "Combinar fatores de categorias distintas, nunca dois do mesmo tipo",
        "Preferir fator vinculado ao domínio (passkey) para resistência a phishing",
        "Manter fatores também na recuperação de conta"
      ],
      "comparacoes": [
        "Senha única depende de um segredo; MFA exige dois fatores de categorias distintas, mais difícil de romper."
      ],
      "fluxos": [
        "Usuário informa senha; sistema pede segundo fator; código/confirmação validado; acesso concedido apenas se ambos fatores passarem."
      ],
      "excecoes": [
        "Conta de recuperação sem segundo fator cria ponto de fraqueza que atacantes exploram via suporte.",
        "Dispositivo comprometido pode capturar códigos mesmo com MFA ativo."
      ],
      "palavrasChave": [
        "MFA",
        "2FA",
        "fatores de autenticação",
        "senha",
        "aplicativo autenticador",
        "passkey",
        "WebAuthn",
        "phishing",
        "troca de chip",
        "SIM swap"
      ],
      "checklist": [
        "Usar ao menos dois fatores de categorias distintas",
        "Preferir passkey/WebAuthn para alta exposição",
        "Não confiar apenas em SMS como segundo fator",
        "Proteger a recuperação de conta com fatores adicionais"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um sistema corporativo pede senha e, em seguida, um código enviado por SMS no telefone do usuário. Essa configuração é MFA? Justifique.",
        "dados": "Sistema solicita senha (algo que sabe) e código por SMS (algo que tem, receptor do telefone).",
        "conceitos": [
          "MFA",
          "2FA",
          "fatores de autenticação"
        ],
        "estrategia": "Identifique se há ao menos dois fatores de categorias distintas e note a vulnerabilidade do SMS a troca de chip.",
        "execucao": [
          "Confirme que a senha é algo que o usuário sabe.",
          "Confirme que o código SMS é algo que o usuário tem (telefone).",
          "Conclua que são dois fatores de categorias distintas, logo 2FA/caso de MFA."
        ],
        "resultado": "Sim, é 2FA (caso de MFA): combina algo que sabe (senha) com algo que tem (receptor do SMS). Os dois fatores são de categorias distintas, embora o segundo apresente vulnerabilidade a fraude de troca de chip.",
        "justificativa": "O gabarito está correto porque senha e SMS pertencem a categorias distintas, satisfazendo a definição de MFA, com a ressalva técnica da vulnerabilidade do SMS.",
        "errosFrequentes": [
          "Achar que qualquer duas telas de login já são MFA, mesmo usando a mesma categoria.",
          "Ignorar que SMS tem vulnerabilidade específica de troca de chip."
        ],
        "variacao": "O sistema pede senha e resposta a pergunta de segurança secreta; avaliar se constitui MFA."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor público de alta exposição exige autenticação que resista a site clonado. Que tipo de fator você recomenda e por quê?",
        "dados": "Servidor público de alta exposição; risco de site clonado (phishing); necessidade de fator resistente a domínio falso.",
        "conceitos": [
          "Passkey/WebAuthn",
          "Fator vinculado ao domínio",
          "Resistência a phishing"
        ],
        "estrategia": "Recomende fator criptográfico vinculado ao domínio, que só funciona no endereço legítimo, e adicione segundo fator independente com recuperação documentada.",
        "execucao": [
          "Escolha passkey/WebAuthn: chave privada só é usada pelo navegador para o domínio registrado.",
          "O navegador não conclui autenticação em site falso/clonado.",
          "Adicione segundo fator independente para defesa em camadas.",
          "Defina procedimento de recuperação de conta com verificação humana documentada."
        ],
        "resultado": "Fator criptográfico vinculado ao domínio (passkey/WebAuthn): a chave privada só é usada pelo navegador para o domínio registrado, então o código não é digitável em site falso. Complementar: segundo fator independente e procedimento de recuperação de conta com verificação humana documentada.",
        "justificativa": "A escolha está correta porque a vinculação criptográfica ao domínio impede que um site clonado capture e reutilize o fator, diferente de SMS ou TOTP, que trafegam ou são digitáveis.",
        "errosFrequentes": [
          "Recomendar SMS como único segundo fator em ambiente de alta exposição.",
          "Esquecer que a recuperação de conta também precisa de fatores."
        ],
        "variacao": "O servidor precisa ainda atender usuários sem dispositivo compatível com passkey, exigindo alternativa de segundo fator."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: MFA elimina o risco de roubo de credenciais, de modo que uma senha vazada não basta para um atacante acessar a conta.",
        "dados": "Sistema com MFA ativado; credencial de usuário roubada; tentativa de ataque por vetores residuais.",
        "conceitos": [
          "MFA",
          "Vetores residuais",
          "Engenharia social",
          "Troca de chip"
        ],
        "estrategia": "Reconheça que MFA reduz, não elimina; liste vetores que continuam funcionando mesmo com MFA e aponte a recuperação de conta como ponto fraco.",
        "execucao": [
          "Identifique que a afirmação confunde redução de risco com eliminação total.",
          "Liste vetores residuais: troca de chip, captura em tempo real, engenharia social no suporte.",
          "Note que MFA não substitui senha fraca nem protege dispositivo comprometido.",
          "Conclua que MFA é controle forte, não absoluto."
        ],
        "resultado": "Errado. MFA reduz muito o risco de autenticação indevida, mas há vetores residuais: fraude de engenharia social no suporte, interceptação de códigos em tempo real (SIM swap, aplicativo clonado) e contaminação do próprio dispositivo. MFA é controle forte, não absoluto.",
        "justificativa": "A leitura ingênua falha porque assume que o segundo fator bloqueia tudo; na prática, vetores como suporte, SIM swap e dispositivo comprometido ainda permitem ataque mesmo com MFA.",
        "errosFrequentes": [
          "Achar que MFA torna a senha irrelevante.",
          "Desconsiderar a recuperação de conta como ponto de ataque."
        ],
        "variacao": "Um atacante convence o suporte a redefinir a conta e desabilitar o MFA do usuário alvo."
      }
    ]
  }
};
