const enriParcialM4U3P3 = {
  "m4-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Disponibilidade de serviços públicos depende de reconhecer DoS e DDoS e agir antes da paralisação. Em concursos, questões cobram diferenciação por origem, camada atacada e contramedidas, exigindo raciocínio lógico sobre saturação e proteção em profundidade.",
      "preRequisitos": [
        "Noção de serviços de rede e camada OSI",
        "Conceito de banda, conexão TCP e estado de sessão",
        "Fundamentos de segurança e classificação de ataques"
      ],
      "objetivosObservaveis": [
        "Diferenciar DoS de DDoS pela origem do tráfego e escala",
        "Descrever as três camadas de ataque e exemplos de técnicas",
        "Enumerar contramedidas defensivas em ordem de aplicação"
      ],
      "competencias": [
        "Raciocínio lógico sobre saturação de recursos",
        "Análise de cenário e escolha de defesa adequada",
        "Comunicação técnica sobre riscos de disponibilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t2-s3 (Ataques de intermediário e interceptação)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Integra o conteúdo programático de disponibilidade em segurança da informação, com a diferenciação entre DoS e DDoS e as camadas de ataque, geralmente em questões de certo/errado com ênfase em contramedidas operacionais."
      }
    },
    "niveis": {
      "iniciante": "DoS busca indisponibilizar serviço esgotando um recurso como banda ou conexões. DDoS usa muitas origens coordenadas, normalmente uma botnet, dificultando bloqueio por IP. A taxonomia por camada ajuda a classificar: volumétrico satura banda, de protocolo esgota estado e de aplicação consome processamento com requisições válidas.",
      "intermediario": "Compreende que DoS parte de fonte única e DDoS de fonte múltipla, identificando sinais de cada camada. Sabe calcular impacto de SYN flood na tabela de estado, reconhecer amplificação UDP e avaliar sobrecarga de banco em ataques de aplicação. Relaciona cada tipo com defesas específicas como rate limiting, scrubbing e resiliência.",
      "avancado": "Analisa cenários mistos onde ataque volumétrico mascara ataque de aplicação, diferencia reflexão de amplificação e avalia custo benefício de mitigação. Identifica indicadores de DDoS distribuído por geolocalização de IPs, variação de protocolo e periodicidade. Propõe arquitetura de defesa em camadas com redundância, filtragem perimetral e limites de custo na aplicação.",
      "especialista": "Formula respostas técnicas consistentes com governança e continuidade de serviços, propondo planos de acionamento com métricas de ativação de mitigação e comunicação institucional. Avalia limitações legais de bloqueio, preserva evidências para responsabilização e alinha contramedidas à política de segurança. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "DoS versus DDoS em termos operacionais",
        "a": {
          "rotulo": "DoS",
          "texto": "Origem única ou poucas máquinas, tráfego concentrado, bloqueio por IP pode reduzir impacto, esgota recurso específico do alvo."
        },
        "b": {
          "rotulo": "DDoS",
          "texto": "Múltiplas origens coordenadas, tráfego disperso, bloqueio por IP é ineficaz, exige mitigação distribuída e capacidade extra."
        },
        "diferencaGabarito": "A diferença decisiva é a origem do tráfego: DoS é ponto único, DDoS é distribuído, alterando a estratégia de defesa."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Bloquear o IP de origem resolve um DDoS.",
        "porqueErrada": "Em DDoS as origens são numerosas e frequentemente máquinas comprometidas, de modo que bloquear um IP não reduz volume total.",
        "versaoCorreta": "Em DDoS as origens são dispersas e a mitigação depende de filtragem distribuída, capacidade extra e serviço de scrubbing no provedor."
      },
      {
        "afirmacaoEquivocada": "Ataque de aplicação sempre usa tráfego volumétrico elevado.",
        "porqueErrada": "Ataque de aplicação consome recursos com requisições pequenas porém custosas, podendo manter taxa baixa e ainda indisponibilizar serviço.",
        "versaoCorreta": "Ataque de aplicação pode ser de baixo volume e ainda indisponibilizar serviço por esgotar processamento, banco ou sessões, exigindo limites de custo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DoS Denial of Service",
        "DDoS Distributed Denial of Service",
        "Botnet",
        "Amplificação por reflexão",
        "Taxonomia por camada"
      ],
      "regras": [
        "DoS usa origem única, DDoS usa múltiplas origens coordenadas",
        "Defesa em camadas combina redundância, filtragem, mitigação e resiliência da aplicação"
      ],
      "comparacoes": [
        "Volumétrico satura banda, de protocolo esgota estado e de aplicação consome processamento"
      ],
      "fluxos": [
        "Detecção de anomalia, correlação de origem, classificação por camada, ativação de mitigação, monitoramento de recuperação"
      ],
      "excecoes": [
        "Ataques de aplicação podem ocorrer com baixo volume e requisições válidas, escapando a filtros apenas de banda"
      ],
      "palavrasChave": [
        "disponibilidade",
        "saturação",
        "botnet",
        "rate limiting",
        "scrubbing"
      ],
      "checklist": [
        "Identificar origem única ou distribuída",
        "Classificar camada do ataque",
        "Verificar indicadores de sobrecarga",
        "Aplicar mitigação proporcional",
        "Registrar incidente e evidências"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O site do órgão cai com tráfego vindo de milhares de IPs distintos em poucos minutos. A equipe suspeita de indisponibilidade e pergunta se o caso caracteriza DoS ou DDoS e qual a principal pista para classificar.",
        "dados": "Tráfego de pico de 12 Gbps, 18 mil IPs distintos, conexões simultâneas crescendo para 200 mil, logs mostram origem variada por continentes, sem padrão de IP único.",
        "conceitos": [
          "Origem do tráfego",
          "Distribuição de ataque"
        ],
        "estrategia": "Analisar padrão de origem e volume, comparar concentração de IPs versus dispersão, verificar se bloqueio de um IP reduz impacto e identificar camada de saturação.",
        "execucao": [
          "Coletar logs de acesso e métricas de rede nos últimos 10 minutos",
          "Contar número de IPs únicos e distribuição geográfica",
          "Comparar redução de carga após bloqueio de IP isolado"
        ],
        "resultado": "DDoS: a multiplicidade de origens coordenadas é a característica, bloquear um IP é inútil e a resposta exige filtragem no provedor ou serviço de mitigação.",
        "justificativa": "A multiplicidade de IPs inviabiliza bloqueio pontual e indica coordenação distribuída. O padrão de origem dispersa é marca de DDoS, exigindo resposta em nível de provedor e aumento de capacidade, pois defesa apenas no servidor não absorve o volume.",
        "errosFrequentes": [
          "Confundir volume alto com origem única e concluir DoS",
          "Achar que firewall local resolve ataque distribuído"
        ],
        "variacao": "Trocar cenário para queda interna causada por script interno gerando requisições repetidas de um único servidor. Exigir identificação de DoS interno versus DDoS externo e defesa adequada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Durante abertura de inscrições, formulário é bombeado com requisições pesadas que sobrecarregam banco. Identificar camada de ataque e propor defesa imediata.",
        "dados": "Formulário abre às 08h, em 20 minutos chegam 50 mil submissões com upload pesado, CPU do banco em 98 por cento, consultas de validação demorando mais de 30 segundos, IPs distintos porém comportamento idêntico.",
        "conceitos": [
          "Ataque de aplicação",
          "Custo de processamento"
        ],
        "estrategia": "Identificar se requisições são válidas mas custosas, medir consumo de CPU e banco por requisição, testar limites de taxa por sessão e avaliar necessidade de cache.",
        "execucao": [
          "Coletar métricas de CPU e tempo de resposta por requisição",
          "Verificar padrão de payload e frequência por sessão",
          "Aplicar limite de taxa e fila de processamento"
        ],
        "resultado": "Ataque de camada de aplicação: consome CPU e banco com requisições individualmente válidas. Defesa inclui limitação de taxa por sessão, cache de páginas públicas, fila com capacidade declarada e limitação do custo de cada consulta.",
        "justificativa": "Requisições válidas porém custosas esgotam recursos de processamento e banco, típico de ataque de aplicação. A defesa precisa reduzir custo por requisição e limitar taxa, pois bloqueio por volume não resolve o problema de processamento.",
        "errosFrequentes": [
          "Tratar como ataque volumétrico e aumentar apenas banda",
          "Ignorar limites de processamento por usuário"
        ],
        "variacao": "Alterar contexto para portal de consulta com busca complexa que é explorada por bots. Exigir análise de padrão de consulta e aplicação de cache e limitação de custo."
      },
      {
        "tipo": "erro",
        "problema": "Em prova, afirmação diz que bloquear IP de origem resolve DDoS. O candidato marca como correta. Explique por que a leitura é equivocada e qual o erro conceitual envolvido.",
        "dados": "Cenário de ataque com 20 mil IPs distintos, tráfego de 8 Gbps, origem inclui hosts residenciais comprometidos.",
        "conceitos": [
          "Origem distribuída",
          "Mitigação"
        ],
        "estrategia": "Revisar definição de DDoS, analisar efeito de bloqueio pontual em volume distribuído, comparar com DoS e avaliar necessidade de mitigação em provedor.",
        "execucao": [
          "Listar número de IPs envolvidos e variação temporal",
          "Simular bloqueio de amostra de IPs e medir redução de carga",
          "Avaliar necessidade de scrubbing e aumento de capacidade"
        ],
        "resultado": "Errado. Em DDoS as origens são dispersas e frequentemente de máquinas inocentes, a mitigação depende de filtragem distribuída, capacidade extra e mitigação no provedor.",
        "justificativa": "Bloqueio por IP é ineficaz quando o ataque provém de milhares de fontes. A estratégia correta envolve filtragem em nível de provedor, aumento de capacidade e análise comportamental, não bloqueio isolado.",
        "errosFrequentes": [
          "Assumir que bloqueio resolve por experiência com DoS",
          "Confundir mitigação local com mitigação distribuída"
        ],
        "variacao": "Trocar afirmação para que ataque de aplicação seja resolvido apenas com firewall de banda. Exigir identificação do erro de confundir camadas."
      }
    ]
  },
  "m4-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Interceptação de tráfego compromete credenciais e integridade em serviços públicos. Conhecer MITM permite reconhecer avisos de certificado, escolher canais seguros e aplicar contramedidas adequadas, competência cobrada em segurança e governança digital em concursos.",
      "preRequisitos": [
        "Noções de criptografia TLS",
        "Modelo cliente servidor e rede local",
        "Conceito de autenticação e sessão"
      ],
      "objetivosObservaveis": [
        "Explicar mecanismo do MITM",
        "Relacionar técnica a contramedida específica",
        "Identificar sinais de interceptação ativa"
      ],
      "competencias": [
        "Análise de risco em comunicação",
        "Avaliação crítica de avisos de segurança",
        "Escolha de controles técnicos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t2-s2 (DoS e DDoS)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Cai em editais de segurança da informação como tópico de confidencialidade. Questões de certo errado abordam avisos de certificado, envenenamento ARP e evil twin, exigindo associação correta entre técnica e defesa."
      }
    },
    "niveis": {
      "iniciante": "MITM ocorre quando atacante se coloca no caminho entre vítima e destino, podendo ler ou alterar tráfego. Técnicas incluem envenenamento ARP, evil twin, spoofing DNS e downgrade SSL. O efeito é captura de credenciais e sessão, exigindo TLS verificado e atenção a avisos de certificado.",
      "intermediario": "Diferencia interceptação passiva de ativa, reconhece avisos de certificado como indicador de risco e associa cada técnica a vetor específico. Sabe que envenenamento ARP afeta rede local, evil twin afeta Wi Fi e spoofing DNS afeta resolução de nomes. Relaciona contramedidas como HSTS, VPN e verificação de cadeia.",
      "avancado": "Analisa cenários combinados onde MITM se apoia em phishing ou malware para instalar proxy. Avalia impacto de downgrade SSL e identifica falhas de configuração que facilitam interceptação. Propõe arquitetura de defesa com segmentação, autenticação de rede e monitoramento de anomalias de certificado.",
      "especialista": "Formula diretrizes de governança para uso seguro de redes públicas, treinamento de usuários sobre avisos de certificado e resposta a incidentes de interceptação. Avalia responsabilidades legais e preserva evidências para apuração. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "ARP poisoning versus DNS spoofing",
        "a": {
          "rotulo": "ARP poisoning",
          "texto": "Ataca camada de enlace local, anuncia gateway falso para vítima, desvia tráfego dentro da rede."
        },
        "b": {
          "rotulo": "DNS spoofing",
          "texto": "Ataca resolução de nomes, responde consultas falsas ao cliente, redireciona para site controlado."
        },
        "diferencaGabarito": "ARP age na rede local e DNS age na resolução de nomes, exigindo controles distintos de segmentação e validação de resposta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "MITM e phishing são a mesma técnica.",
        "porqueErrada": "Phishing induz vítima a entregar dados em canal falso, MITM ocupa caminho legítimo entre as pontas.",
        "versaoCorreta": "Phishing induz a vítima a entregar dados em canal falso, MITM ocupa o caminho legítimo entre as pontas, podem ser combinados mas mecanismos diferem."
      },
      {
        "afirmacaoEquivocada": "Aceitar aviso de certificado inválido é seguro se o site parecer correto.",
        "porqueErrada": "Aviso indica quebra da cadeia de confiança, aceitar equivale a confiar em certificado do atacante.",
        "versaoCorreta": "Aviso de certificado inválido deve ser abortado, pois aceitar valida o certificado apresentado que pode ser do atacante."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Man in the Middle",
        "Envenenamento ARP",
        "Evil twin",
        "Spoofing DNS",
        "Downgrade SSL"
      ],
      "regras": [
        "TLS verificado impede leitura do conteúdo",
        "HSTS impede downgrade para HTTP",
        "Avisos de certificado não devem ser ignorados"
      ],
      "comparacoes": [
        "ARP afeta enlace local, DNS afeta resolução de nomes, proxy afeta aplicação"
      ],
      "fluxos": [
        "Usuário conecta, atacante se insere, tráfego é lido ou alterado, defesa detecta anomalia de certificado"
      ],
      "excecoes": [
        "Rede corporativa com inspeção TLS legitima pode gerar avisos, exige política clara"
      ],
      "palavrasChave": [
        "interceptação",
        "certificado",
        "ARP",
        "evil twin",
        "HSTS"
      ],
      "checklist": [
        "Verificar certificado antes de login",
        "Evitar redes abertas sem VPN",
        "Desconfiar de avisos de segurança",
        "Atualizar sistema e navegador",
        "Relatar incidentes suspeitos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Usuário acessa portal do órgão em Wi Fi público e vê aviso de certificado inválido que decide ignorar. O que está acontecendo e qual conduta correta.",
        "dados": "Rede aberta em aeroporto, portal usa HTTPS, navegador exibe aviso de emissor desconhecido, usuário aceita exceção e insere credenciais.",
        "conceitos": [
          "Aviso de certificado",
          "Interceptação ativa"
        ],
        "estrategia": "Interpretar aviso como possível MITM, avaliar contexto de rede pública, decidir abortar acesso e usar canal seguro.",
        "execucao": [
          "Identificar que rede é pública e não gerenciada",
          "Interpretar aviso de certificado como quebra de confiança",
          "Sugerir abortar acesso e usar VPN oficial"
        ],
        "resultado": "Provável interceptação ativa com certificado próprio aceito pelo usuário, entrega de credenciais e sessão. Conduta correta é abortar, não confiar e usar canal criptografado confiável.",
        "justificativa": "Aviso indica que cadeia de confiança não fecha, aceitar equivale a confiar no certificado apresentado. Em rede pública o risco de MITM é elevado, exigindo abortar e usar VPN.",
        "errosFrequentes": [
          "Ignorar aviso por pressa",
          "Achar que site visualmente correto garante segurança"
        ],
        "variacao": "Trocar cenário para acesso via rede corporativa com inspeção TLS legitima. Exigir diferenciação entre aviso legítimo de inspeção e MITM."
      },
      {
        "tipo": "aplicacao",
        "problema": "Relatórios indicam contas sendo vistas por terceiros sem login suspeito. Hipótese de MITM a verificar e correções.",
        "dados": "Sessões ativas em locais distintos, HTTP usado em parte do sistema, HSTS desativado, rede local sem proteção ARP.",
        "conceitos": [
          "Sessão roubada",
          "Downgrade"
        ],
        "estrategia": "Mapear vetores de interceptação viáveis, correlacionar uso de HTTP e ausência de HSTS, verificar rede local e endpoints.",
        "execucao": [
          "Auditar logs de acesso e protocolos usados",
          "Verificar configuração de HSTS e redirecionamento forçado para HTTPS",
          "Revisar segmentação e proteção ARP na rede local"
        ],
        "resultado": "Verificar sessões roubadas por interceptação, envenenamento ARP, proxy instalado. Correções incluem TLS ponta a ponta, HSTS ativo, remoção de malware e educação sobre avisos.",
        "justificativa": "Uso de HTTP e falta de HSTS permite downgrade, enquanto rede local vulnerável permite envenenamento ARP. A combinação explica acesso não autorizado sem credenciais novas.",
        "errosFrequentes": [
          "Atribuir a vazamento sem verificar rede",
          "Esquecer de corrigir HSTS"
        ],
        "variacao": "Alterar cenário para ataque evil twin em estacionamento. Exigir identificação de SSID falso e defesa por autenticação de rede corporativa."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que MITM e phishing são a mesma técnica. O candidato marca como correta. Explique erro conceitual.",
        "dados": "Material de estudo confunde indução a canal falso com ocupação de caminho legítimo, sem distinguir vetores.",
        "conceitos": [
          "Phishing",
          "MITM"
        ],
        "estrategia": "Definir cada técnica com precisão conceitual, comparar mecanismo de ação entre phishing e MITM e mapear defesas distintas para cada vetor de ataque.",
        "execucao": [
          "Descrever phishing como engenharia social para canal falso",
          "Descrever MITM como inserção no caminho legítimo",
          "Comparar defesas de treinamento versus criptografia e verificação"
        ],
        "resultado": "Errado. Phishing induz vítima a entregar dados em canal falso, MITM ocupa caminho legítimo entre as pontas, mecanismos diferem e defesas também.",
        "justificativa": "A diferença de mecanismo implica controles diferentes: phishing exige treinamento e validação de domínio, MITM exige TLS e verificação de certificado. Confundir leva a defesa inadequada.",
        "errosFrequentes": [
          "Achar que antiphishing resolve MITM",
          "Generalizar controles de comunicação"
        ],
        "variacao": "Trocar afirmação para que aviso de certificado pode ser ignorado com segurança. Exigir identificação do erro de confiar em aparência visual."
      }
    ]
  }
};
