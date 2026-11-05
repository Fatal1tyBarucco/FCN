const enriParcialM3U5P5 = {
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
