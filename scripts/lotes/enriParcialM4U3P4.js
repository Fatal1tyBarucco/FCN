const enriParcialM4U3P4 = {
  "m4-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Vazamento de dados gera risco imediato de reutilização de credenciais e roubo de identidade no serviço público. Entender cadeia vazamento comprometimento e deveres de resposta é cobrado em concursos de segurança e governança digital.",
      "preRequisitos": [
        "Noções de privacidade e LGPD",
        "Conceito de incidente de segurança",
        "Práticas de gestão de identidade e acesso"
      ],
      "objetivosObservaveis": [
        "Descrever cadeia vazamento reutilização comprometimento",
        "Enumerar ações iniciais de contenção",
        "Explicar deveres de transparência do órgão"
      ],
      "competencias": [
        "Análise de impacto de exposição de dados",
        "Planejamento de resposta a incidentes",
        "Comunicação institucional responsável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t3-s2 (Indicadores de comprometimento (IoC))"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Gestão de incidentes e proteção de dados integram o conteúdo programático de TI e segurança. Questões sobre vazamento, contenção e transparência focam em LGPD e boa prática."
      }
    },
    "niveis": {
      "iniciante": "Vazamento é divulgação não autorizada de informação, como planilha exposta. Roubo de identidade usa dados vazados para se passar por alguém. Comprometimento de conta é controle indevido da conta real, porta para abuso de permissão.",
      "intermediario": "Reconhece cadeia vazamento credenciais testadas em massa comprometimento de conta abuso. Sabe que primeiras ações são bloquear sessões, rotacionar credenciais e limitar acesso ao dado exposto. Entende necessidade de registro e avaliação de comunicação.",
      "avancado": "Avalia escopo de exposição, quantifica titulares afetados e classifica sensibilidade. Planeja contenção proporcional, preserva evidências e coordena comunicação com áreas jurídicas e de transparência. Diferencia risco de privacidade de incidente concretizado.",
      "especialista": "Formula políticas de resposta a incidentes alinhadas à governança, define métricas de ativação e canais de comunicação. Avalia responsabilidades legais e preserva integridade da apuração. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "Vazamento versus comprometimento de conta",
        "a": {
          "rotulo": "Vazamento",
          "texto": "Exposição não autorizada de informação, pode ser descoberta sem uso imediato, gera risco de reutilização."
        },
        "b": {
          "rotulo": "Comprometimento de conta",
          "texto": "Controle indevido de conta real, evidência uso ativo, permite movimentação lateral e abuso de confiança."
        },
        "diferencaGabarito": "Vazamento é exposição de dado, comprometimento é tomada de conta, o segundo exige contenção imediata de acesso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Vazamento só gera risco de privacidade, sem fraude concreta não há nada a fazer.",
        "porqueErrada": "Vazamento cria risco imediato de reutilização de credenciais e identidade, além de gerar deveres de resposta.",
        "versaoCorreta": "Vazamento gera risco imediato de reutilização e cria deveres de resposta e transparência; a inação converte o risco em incidente."
      },
      {
        "afirmacaoEquivocada": "Trocar senha basta para conter comprometimento de conta.",
        "porqueErrada": "Trocar senha sem revogar sessões deixa atacante autenticado, pois tokens ativos permanecem válidos.",
        "versaoCorreta": "Contenção exige revogar sessões ativas, rotacionar credenciais e monitorar ações recentes, além de trocar senha."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Vazamento de dados",
        "Roubo de identidade",
        "Comprometimento de conta",
        "Credential stuffing",
        "Contenção"
      ],
      "regras": [
        "Exposição indevida gera dever de avaliar risco",
        "Contenção inicial inclui bloqueio de sessões e rotação de credenciais",
        "Comunicação deve ser baseada em fatos confirmados"
      ],
      "comparacoes": [
        "Vazamento é exposição, comprometimento é uso",
        "Risco potencial versus incidente concretizado"
      ],
      "fluxos": [
        "Descoberta de exposição, avaliação de escopo, contenção imediata, registro, comunicação"
      ],
      "excecoes": [
        "Dados públicos não configuram vazamento, mas má configuração pode expor dados sensíveis"
      ],
      "palavrasChave": [
        "exposição",
        "identidade",
        "contenção",
        "transparência",
        "incidente"
      ],
      "checklist": [
        "Identificar o quê foi exposto",
        "Quantificar titulares afetados",
        "Bloquear e rotacionar credenciais",
        "Preservar registros",
        "Comunicar responsáveis"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Planilha com dados de servidores foi publicada em pasta de compartilhamento público por três dias. Classificar o fato e listar escopo a apurar.",
        "dados": "Pasta com permissões abertas na internet, acesso via link direto, planilha contém nome, matrícula e telefone de 1.200 servidores, logs de acesso disponíveis.",
        "conceitos": [
          "Exposição indevida",
          "Escopo de incidentes"
        ],
        "estrategia": "Identificar natureza do acesso, categorizar dados expostos e definir quais evidências coletar para avaliação de risco.",
        "execucao": [
          "Confirmar período de exposição e permissões",
          "Listar tipos de dados presentes na planilha",
          "Verificar logs de acesso para identificar quem visualizou"
        ],
        "resultado": "Vazamento por exposição indevida de acesso. Escopo inclui quais dados, quantos titulares, quem acessou, período de exposição, causa raiz e medidas de contenção imediata.",
        "justificativa": "Acesso público não autorizado caracteriza vazamento. A apuração precisa quantificar impacto e identificar causa para evitar recorrência, além de avaliar necessidade de comunicação.",
        "errosFrequentes": [
          "Assumir que dado não sensível não gera risco",
          "Ignorar logs de acesso na avaliação"
        ],
        "variacao": "Trocar cenário para backup exposto contendo credenciais de serviço. Exigir classificação como vazamento de credenciais e ações prioritárias de rotação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Credenciais de dezenas de servidores apareceram em lista pública. O que fazer nas primeiras horas.",
        "dados": "Lista publicada em fórum de vazamentos há seis horas, contém usuário e senha em texto simples de 42 contas, algumas com acesso a sistemas críticos.",
        "conceitos": [
          "Credential stuffing",
          "Contenção inicial"
        ],
        "estrategia": "Priorizar bloqueio de uso indevido, impedir autenticação com credenciais expostas e monitorar ações recentes.",
        "execucao": [
          "Forçar troca de senhas e revogar sessões ativas das contas afetadas",
          "Exigir autenticação multifator nas contas críticas",
          "Monitorar logs de login e ações recentes para detectar uso"
        ],
        "resultado": "Forçar troca de senhas, revogar sessões, exigir MFA, bloquear acessos fora do padrão, monitorar ações recentes, registrar incidente e notificar responsáveis.",
        "justificativa": "Teste automatizado pode ocorrer minutos após publicação. Revogar sessões evita acesso com tokens válidos, enquanto MFA reduz chance de sucesso de reutilização.",
        "errosFrequentes": [
          "Esperar por uso antes de agir",
          "Trocar senha sem revogar sessões"
        ],
        "variacao": "Alterar contexto para vazamento de e-mails corporativos sem senhas. Exigir avaliação de risco de phishing e ações de conscientização."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que vazamento sem fraude concreta não exige ação. O candidato marca como correta. Explique erro.",
        "dados": "Incidente com exposição de dados pessoais de 800 cidadãos, sem relato de uso indevido até o momento.",
        "conceitos": [
          "Risco versus incidente",
          "Dever de resposta"
        ],
        "estrategia": "Diferenciar risco potencial de dano concretizado e lembrar deveres de avaliação e transparência.",
        "execucao": [
          "Avaliar sensibilidade dos dados expostos",
          "Verificar obrigações legais de comunicação e registro",
          "Plonejar plano de mitigação e comunicação"
        ],
        "resultado": "Errado. Vazamento cria risco imediato de reutilização e gera deveres de resposta e transparência. Inação transforma risco em incidente.",
        "justificativa": "A existência de risco relevante impõe ações de contenção e avaliação, mesmo sem fraude confirmada. A transparência baseada em fatos evita especulação e preserva confiança institucional.",
        "errosFrequentes": [
          "Confundir ausência de dano com ausência de risco",
          "Adiar comunicação até confirmação de uso"
        ],
        "variacao": "Trocar afirmação para que comunicação imediata deve incluir especulações sobre impacto. Exigir identificação do erro de falta de base factual."
      }
    ]
  },
  "m4-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Indicadores de comprometimento orientam triagem de segurança e decisão de resposta. Diferenciar indicador de evidência e reconhecer limites de listas integra o conteúdo programático de segurança e governança.",
      "preRequisitos": [
        "Noções de logs e monitoramento",
        "Conceito de artefato digital",
        "Fundamentos de investigação"
      ],
      "objetivosObservaveis": [
        "Classificar IoCs por tipo",
        "Explicar diferença entre indicador e evidência",
        "Discutir limites da detecção baseada em listas"
      ],
      "competencias": [
        "Interpretação de logs",
        "Correlação de eventos",
        "Tomada de decisão sob incerteza"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de TI avaliam capacidade de interpretar indicadores e evitar conclusões precipitadas. Questões sobre falsos positivos e necessidade de contexto integram o conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "IoC é artefato observável associado a ataque, como hash de arquivo, domínio de C2, IP suspeito ou sequência de eventos. Uso prático inclui listas de bloqueio em filtros e EDR, apoio à triagem do analista.",
      "intermediario": "Diferencia indicador de evidência, reconhece que IoC é pista retroativa e pode gerar falsos positivos. Sabe que detecção avançada usa padrões comportamentais TTPs além de listas estáticas.",
      "avancado": "Avalia qualidade de IoC, correlaciona múltiplos indicadores em contexto temporal e avalia risco de bloqueio de recursos legítimos. Planeja resposta proporcional e coleta de evidências autenticadas.",
      "especialista": "Formula políticas de uso de IoCs, integra fontes de inteligência e define limites de automação. Avalia implicações legais de coleta e preservação de evidências. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "IoC versus evidência",
        "a": {
          "rotulo": "IoC",
          "texto": "Artefato observável usado como pista de detecção, pode ser retroativo e gerar falsos positivos."
        },
        "b": {
          "rotulo": "Evidência",
          "texto": "Pista preservada e autenticada, apta a sustentar responsabilização, exige cadeia de custódia."
        },
        "diferencaGabarito": "IoC orienta triagem, evidência sustenta responsabilização, a segunda exige preservação e autenticidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o antivírus não alertou, não houve comprometimento.",
        "porqueErrada": "Ausência de alerta não é prova negativa, ataque pode ser inédito ou vetor não coberto por assinatura.",
        "versaoCorreta": "Ausência de alerta não prova ausência de comprometimento, avaliação usa registros, comportamento e múltiplas fontes."
      },
      {
        "afirmacaoEquivocada": "Bloqueio de domínio listado prova infecção local.",
        "porqueErrada": "Bloqueio indica apenas contato ou tentativa, confirmação exige correlação com processos, arquivos e comportamento do host.",
        "versaoCorreta": "Domínio bloqueado prova apenas tentativa ou contato, confirmação de comprometimento exige múltiplos indicadores em contexto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Indicador de comprometimento",
        "Hash de arquivo",
        "Comando e controle",
        "TTP",
        "Evidência"
      ],
      "regras": [
        "IoC é pista, não prova",
        "Múltiplos indicadores em contexto sustentam hipótese",
        "Detecção por lista é retroativa"
      ],
      "comparacoes": [
        "IoC artefato observável, evidência autenticada",
        "Lista estática versus comportamento dinâmico"
      ],
      "fluxos": [
        "Coleta de artefato, correlação com logs, validação de contexto, decisão de resposta"
      ],
      "excecoes": [
        "IPs e domínios legítimos podem ser reutilizados, gerando falsos positivos"
      ],
      "palavrasChave": [
        "IoC",
        "detecção",
        "falso positivo",
        "correlação",
        "TTP"
      ],
      "checklist": [
        "Identificar tipo de IoC",
        "Correlacionar com eventos temporais",
        "Validar contexto do host",
        "Avaliar risco de bloqueio",
        "Preservar evidências"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Lista de bloqueio contém domínio usado por malware ontem. Se tráfego hoje for bloqueado, isso prova infecção local.",
        "dados": "Domínio listado em feed de inteligência, bloqueio ocorre em proxy corporativo, logs mostram requisição de estação de trabalho X.",
        "conceitos": [
          "Lista de bloqueio",
          "Contato versus infecção"
        ],
        "estrategia": "Diferenciar tentativa de contato de comprometimento confirmado, buscar correlação com processos e comportamento.",
        "execucao": [
          "Verificar se estação executou download ou processo associado",
          "Analisar histórico de execução e criação de arquivos",
          "Correlacionar requisição com usuário e horário"
        ],
        "resultado": "Não. Prova apenas tentativa ou contato com domínio listado, confirmação exige correlação com processos, arquivos e comportamento do host.",
        "justificativa": "Bloqueio indica contato, não infecção. Múltiplos indicadores em contexto são necessários para afirmar comprometimento, evitando falsos positivos.",
        "errosFrequentes": [
          "Equiparar bloqueio a infecção",
          "Ignorar contexto de usuário legítimo"
        ],
        "variacao": "Trocar domínio por hash de arquivo conhecido. Exigir verificação de presença do arquivo no host e integridade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Logs mostram login legítimo às 14h, novo acesso 14h07 de outro estado, criação de conta e envio em massa de e-mails. Interpretar.",
        "dados": "Usuário autenticado normalmente, nova sessão de IP diferente, criação de conta interna e disparo de 2.000 e-mails com anexo.",
        "conceitos": [
          "Sequência de eventos",
          "Movimentação lateral"
        ],
        "estrategia": "Reconhecer padrão de conta tomada, correlacionar eventos temporais e identificar abuso de função.",
        "execucao": [
          "Bloquear conta e revogar sessões",
          "Coletar indicadores de origem e hashes de anexos",
          "Varredura de sessões similares e propagação de detecção"
        ],
        "resultado": "Sequência suspeita de comprometimento: acesso tomado, movimentação e abuso de função. Ações incluem bloqueio, coleta de indicadores e varredura de base.",
        "justificativa": "A sequência temporal curta entre acesso inesperado e ações abusivas indica uso indevido. Coleta de indicadores amplia detecção e previne propagação.",
        "errosFrequentes": [
          "Atribuir a erro de usuário",
          "Não investigar anexos enviados"
        ],
        "variacao": "Alterar cenário para acesso via VPN com credenciais vazadas. Exigir análise de geolocalização e verificação de MFA."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que ausência de alerta de antivírus garante que não houve comprometimento. O candidato marca como correta. Explique erro.",
        "dados": "Ambiente com antivírus baseado em assinatura, ataque usa arquivo novo sem assinatura conhecida, logs mostram criação de serviço suspeito.",
        "conceitos": [
          "Limites de assinatura",
          "Prova negativa"
        ],
        "estrategia": "Explicar que detecção por assinatura é retroativa e que ausência de alerta não exclui ataque, necessidade de correlação.",
        "execucao": [
          "Revisar logs de criação de serviço e conexões de rede",
          "Comparar com base de IoCs comportamentais",
          "Avaliar necessidade de análise forense"
        ],
        "resultado": "Errado. Ausência de alerta não é prova negativa, ataque pode ser inédito ou vetor não coberto. Avaliação usa registros, comportamento e múltiplas fontes.",
        "justificativa": "Antivírus por assinatura detecta ameaças conhecidas. Ataques inéditos ou fileless escapam, exigindo detecção comportamental e correlação de eventos.",
        "errosFrequentes": [
          "Confiar apenas em antivírus",
          "Interpretar silêncio como segurança"
        ],
        "variacao": "Trocar afirmação para que bloqueio de IP garante remoção de ameaça. Exigir identificação do erro de confundir prevenção com erradicação."
      }
    ]
  }
};
