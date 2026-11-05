const enriParcialM4U2P5 = {
  "m4-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A proteção de endpoint divide o alvo do ataque em duas linhas: o antivírus clássico, que para apenas o já conhecido por assinatura, e o EDR, que detecta comportamentos anômalos e dá visibilidade para resposta. Em concursos de TI, essa distinção aparece em questões sobre eficácia contra zero-day, responsabilidade por alertas e requisitos operacionais de ferramentas defensivas. Sem entender que o EDR gera dados, não decisões, o candidato confunde ferramenta com gestão e erra o gabarito.",
      "preRequisitos": [
        "Noção de malware e como se espalha",
        "O que é assinatura de vírus e detecção baseada em padrão",
        "Noção básica de processo, rede e arquivo em um endpoint"
      ],
      "objetivosObservaveis": [
        "Comparar antivírus por assinatura com solução EDR em detecção, escopo e operação",
        "Indicar requisitos operacionais de um EDR: cobertura, atualização, triagem de alertas e integração",
        "Explicar por que detecção comportamental identifica ataques inéditos que assinatura não enxerga",
        "Descrever a resposta possível via EDR: isolar host, matar processo, coletar evidências"
      ],
      "competencias": [
        "Raciocínio sobre camadas de defesa: assinatura versus comportamento",
        "Avaliação de requisitos operacionais, não só de funcionalidades",
        "Interpretação de alertas: distinguir detecção de decisão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — defesa em profundidade que complementa o endpoint",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — endpoints exigem correção de vulnerabilidades além da detecção"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema do conteúdo programático de TI para cargos de suporte e segurança, com a diferença entre antivírus e EDR, eficácia contra zero-day e responsabilidade pela triagem de alertas, com peso pedagógico médio."
      }
    },
    "niveis": {
      "iniciante": "O antivírus clássico compara cada arquivo com uma base de assinaturas de malware já conhecido. É leve e eficaz contra ameaças reconhecidas, mas não detecta um ataque inédito porque não há assinatura ainda. Nesse nível, o aluno identifica essa limitação e entende que a proteção por assinatura sozinha não basta para o desconhecido.",
      "intermediario": "A proteção moderna de endpoints adiciona análise comportamental e aprendizado de máquina: observa ações suspeitas, como processo gravando muitos arquivos, tentativa de desabilitar proteção ou injeção de código, e pode bloquear em tempo real. O EDR vai além, mantendo telemetria contínua de processos, conexões e alterações para investigação retroativa e resposta.",
      "avancado": "O EDR gera telemetria e alertas, mas não toma decisão por si só: exige equipe ou serviço que triage, investigue e responda (isolamento remoto, encerramento de processo, coleta de evidências). Sem triagem, a organização paga licença e acumula alertas ignorados, deixando o risco residual alto apesar da ferramenta instalada.",
      "especialista": "O especialista planeja a cobertura mínima declarada comparando inventário de ativos com instalações reais, define políticas de exclusão mínimas e justificadas, integra o EDR à central de monitoramento e executa testes periódicos de bloqueio. Lembra que o EDR é camada, não base: não substitui correção de vulnerabilidades nem MFA."
    },
    "comparacoes": [
      {
        "tema": "Detecção por assinatura versus detecção comportamental",
        "a": {
          "rotulo": "Antivírus clássico (assinatura)",
          "texto": "Compara arquivos com base de assinaturas de malware conhecido; leve e eficiente contra o reconhecido, incapaz de parar ataque inédito sem assinatura correspondente."
        },
        "b": {
          "rotulo": "EDR (comportamento e telemetria)",
          "texto": "Observa ações suspeitas do endpoint (escrita em massa, injeção de código, desabilitação de proteção) e mantém registro contínuo para investigação e resposta remota."
        },
        "diferencaGabarito": "A assinatura detecta somente o já listado; o EDR detecta pelo comportamento, gera telemetria e apoia a resposta, mas depende de análise humana dos alertas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "EDR detecta qualquer ataque, independentemente de operação humana.",
        "porqueErrada": "Confunde ferramenta com gestão: o EDR apenas coleta telemetria e emite alertas; sem triagem e resposta humana, o ataque pode não ser contido.",
        "versaoCorreta": "Errado. O EDR é detecção e apoio à resposta; sua eficácia depende de implantação ampla, qualidade das regras e análise humana de alertas, não de detecção automática de tudo."
      },
      {
        "afirmacaoEquivocada": "Antivírus por assinatura é suficiente contra ataque inédito (zero-day).",
        "porqueErrada": "A assinatura só existe para malware já catalogado; contra um zero-day não há padrão para comparar, então a defesa precisa de comportamento, correção preventiva e defesa em profundidade.",
        "versaoCorreta": "Errado. Assinatura descreve o já conhecido; contra inédito, a defesa depende de mecanismos comportamentais, correção preventiva e defesa em profundidade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Assinatura de malware",
        "Análise comportamental e heurística",
        "EDR (Endpoint Detection and Response)",
        "Telemetria de endpoint"
      ],
      "regras": [
        "Cobertura mínima declarada: inventário de ativos versus instalações reais",
        "Políticas de exclusão mínimas e justificadas",
        "Integração do EDR com central de monitoramento e teste periódico de bloqueio"
      ],
      "comparacoes": [
        "Antivírus por assinatura detecta o conhecido; EDR detecta comportamento anômalo e telemetria contínua"
      ],
      "fluxos": [
        "Detectar comportamento suspeito → gerar alerta → triar → isolar host ou matar processo → coletar evidências"
      ],
      "excecoes": [
        "EDR não substitui correção de vulnerabilidades nem MFA; é camada, não base da defesa"
      ],
      "palavrasChave": [
        "antivírus",
        "assinatura",
        "EDR",
        "endpoint",
        "comportamental",
        "telemetria",
        "triagem",
        "resposta"
      ],
      "checklist": [
        "Comparar inventário de ativos com instalações do EDR",
        "Manter mecanismos de detecção atualizados",
        "Definir políticas de exclusão mínimas e justificadas",
        "Integrar EDR à central de monitoramento",
        "Executar teste periódico de bloqueio",
        "Designar responsável pela triagem de alertas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um arquivo nunca visto começa a criptografar unidades de rede. Qual mecanismo provavelmente o interrompe e por quê?",
        "dados": "Arquivo desconhecido sem assinatura catalogada; comportamento de escrita em massa e alteração de extensões em unidades de rede.",
        "conceitos": [
          "Análise comportamental",
          "EDR"
        ],
        "estrategia": "Identificar que, sem assinatura correspondente, apenas a detecção por comportamento anômalo pode interromper o ataque em andamento.",
        "execucao": [
          "Reconhecer que o arquivo não tem assinatura conhecida",
          "Observar o comportamento anômalo: escrita massiva e mudança de extensão",
          "Concluir que a proteção comportamental/EDR interrompe pelo comportamento, não pela assinatura"
        ],
        "resultado": "Proteção comportamental/EDR: sem assinatura correspondente, a decisão é por comportamento anômalo (escrita em massa, alteração de extensões), que mecanismos baseados apenas em assinatura não detectam.",
        "justificativa": "O comportamento de escrita massiva e renomeação de extensões é um indicador confiável de ransomware, independente de assinatura, então o EDR bloqueia onde o antivírus clássico falha.",
        "errosFrequentes": [
          "Achar que qualquer antivírus para um zero-day por assinatura",
          "Esperar que o EDR decida sozinho sem análise humana do alerta"
        ],
        "variacao": "Um arquivo desconhecido tenta injetar código em um processo legítimo. Qual mecanismo detém e por quê?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão adquire EDR, instala em 40% das estações e não dimensiona triagem de alertas. Avalie o risco residual.",
        "dados": "40% das estações com EDR instalado; 60% sem telemetria; ausência de responsável por triagem e sem SLA de atendimento a alertas.",
        "conceitos": [
          "Cobertura de endpoint",
          "Triagem de alertas",
          "Risco residual"
        ],
        "estrategia": "Avaliar a cobertura parcial como superfície exposta e a falta de triagem como falha de resposta, combinando ambos no risco residual.",
        "execucao": [
          "Identificar que 60% das estações ficam sem telemetria",
          "Reconhecer que o atacante explora o lado fraco como entrada",
          "Avaliar que, sem triagem, alertas de alto risco passam despercebidos",
          "Definir ações: meta de cobertura com inventário, responsável pela triagem, SLA interno, teste de resposta"
        ],
        "resultado": "Cobertura parcial deixa 60% das estações sem telemetria — o atacante usa o lado fraco como entrada. Sem triagem, alertas de alto risco podem passar despercebidos. Ações: metas de cobertura com inventário confiável, responsável pela triagem, SLA interno de atendimento a alertas e teste de resposta.",
        "justificativa": "A combinação de cobertura incompleta e ausência de triagem deixa o ataque visível em parte da frota e sem resposta na outra, elevando o risco residual apesar da licença adquirida.",
        "errosFrequentes": [
          "Acreditar que instalar EDR em parte das estações resolve o risco do órgão inteiro",
          "Assumir que a compra da ferramenta equivale à detecção efetiva sem triagem"
        ],
        "variacao": "O órgão instala EDR em 100% das estações, mas não designa ninguém para analisar alertas. Qual é o risco?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O EDR detecta qualquer ataque, independentemente de operação humana.'",
        "dados": "Alegação de detecção automática e total de ataques pelo EDR, sem menção a implantação, regras ou análise humana.",
        "conceitos": [
          "EDR",
          "Análise humana de alertas",
          "Limitação de ferramenta"
        ],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que o EDR depende de cobertura, qualidade das regras e decisão humana para conter o ataque.",
        "execucao": [
          "Reconhecer que o EDR gera telemetria e alertas, não decisão automática",
          "Identificar que eficácia requer implantação ampla e regras de qualidade",
          "Concluir que sem análise humana o alerta pode ser ignorado"
        ],
        "resultado": "Errado. EDR é ferramenta de detecção e apoio à resposta; sua eficácia depende de implantação ampla, qualidade das regras e análise humana de alertas.",
        "justificativa": "A detecção depende de o endpoint estar coberto, da regra identificar o comportamento e de alguém analisar o alerta; sem isso, a ferramenta não detém o ataque por si só.",
        "errosFrequentes": [
          "Tratar o EDR como solução autônoma que elimina a necessidade de equipe",
          "Confundir detecção de comportamento com resposta automática ao incidente"
        ],
        "variacao": "Afirmação: 'Instalar antivírus em todos os endpoints garante que nenhum malware entre na rede.'"
      }
    ]
  },
  "m4-u2-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A segmentação de rede limita a movimentação lateral entre zonas e o hardening encolhe a superfície de ataque, reduzindo o blast radius de um comprometimento. Em concursos de redes e segurança, aparecem em questões de arquitetura de defesa, VLAN com ACL, blast radius e hardening de servidor exposto. Confundir segmento com VLAN simples, ou hardening com troca de senha, leva ao gabarito errado.",
      "preRequisitos": [
        "Noção de endereçamento IP e máscara de sub-rede",
        "O que é VLAN e como ela agrupa portas",
        "Noção de serviço, porta e protocolo de rede",
        "Noção de servidor e de superfície de ataque"
      ],
      "objetivosObservaveis": [
        "Projetar segmentação de rede com zonas e políticas de tráfego entre elas",
        "Enumerar ações de hardening de um servidor exposto: desabilitar serviços, trocar credenciais, aplicar correções",
        "Explicar como a segmentação reduz o alcance do dano (blast radius) e a movimentação lateral",
        "Diferenciar segmentação (zonas + controle de tráfego) da simples criação de VLANs"
      ],
      "competencias": [
        "Raciocínio arquitetural: dividir rede em zonas com controles entre elas",
        "Atenção à superfície de ataque: desabilitar o que não é necessário",
        "Verificação de plausibilidade: confiar se o tráfego permitido é o mínimo necessário"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — proteção de endpoint complementa a segmentação de rede",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — endpoints e servidores exigem correção de vulnerabilidades",
        "m4-u2-t4-s3 (Defesa em profundidade) — segmentação e hardening são camadas da defesa em profundidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com segmentação, blast radius, VLAN com ACL e hardening de servidor, com peso médio por combinar arquitetura e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "Segmentação de rede divide a rede em zonas com políticas distintas — estações, servidores, banco de dados, convidados, voz — de modo que o comprometimento de uma zona não alcance automaticamente as demais. O ganho é reduzir o alcance do dano (blast radius) e a movimentação lateral. Hardening é reduzir a superfície de ataque de um ativo: desabilitar serviços, portas e contas desnecessárias, trocar credenciais padrão e aplicar correções.",
      "intermediario": "Mecanismos usuais de segmentação incluem VLANs com ACLs e firewalls entre zonas (controle leste-oeste), além de microsegmentação quando o ambiente suporta. O hardening de servidor segue uma sequência prática: inventário de serviços, desativar o que não é requisito, correções de sistema e aplicativo, credenciais fortes e contas individuais, filtro de acesso à gestão apenas da rede administrativa, registro e backup da configuração, varredura de verificação.",
      "avancado": "A segmentação efetiva exige controle de tráfego entre as zonas (ACLs/firewall), monitoramento e revisão de regras; uma VLAN sem políticas apenas agrupa dispositivos. O hardening sem inventário e sem padrão documentado vira prática dependente de cada profissional, e não um controle repetível. A regra gerencial é que cada zona tenha o mínimo de privilégio necessário.",
      "especialista": "O especialista projeta zonas com o menor privilégio possível, define ACLs de leste-oeste restritas, padroniza o hardening por classe de servidor e documenta exceções com responsável e prazo. Combina segmentação, hardening, detecção e resposta em defesa em profundidade, de modo que a falha de um controle seja coberta por outro, sem depender de uma única camada."
    },
    "comparacoes": [
      {
        "tema": "Rede plana versus rede segmentada",
        "a": {
          "rotulo": "Rede plana (sem segmentação)",
          "texto": "Todos os dispositivos estão na mesma zona de broadcast; um dispositivo infectado alcança automaticamente servidores e estações, maximizando o blast radius e a movimentação lateral."
        },
        "b": {
          "rotulo": "Rede segmentada (zonas com ACL)",
          "texto": "A rede é dividida em zonas com políticas de tráfego entre elas; apenas o tráfego necessário é permitido, contendo o comprometimento de uma zona."
        },
        "diferencaGabarito": "Na rede plana não há barreira interna, então o alcance do dano é total; na rede segmentada, o controle entre zonas limita o dano ao escopo da zona comprometida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Segmentar a rede significa criar VLANs e nada mais.",
        "porqueErrada": "Uma VLAN sem políticas entre zonas apenas agrupa dispositivos; não controla o tráfego de leste-oeste, então não contém o comprometimento.",
        "versaoCorreta": "Errado. VLAN sem políticas entre zonas apenas agrupa; segmentação efetiva exige controle de tráfego entre as zonas (ACLs/firewall), monitoramento e revisão de regras."
      },
      {
        "afirmacaoEquivocada": "Hardening de servidor consiste apenas em trocar a senha padrão de fábrica.",
        "porqueErrada": "Trocar a senha padrão é só um passo; o hardening é um conjunto de ações que inclui desabilitar serviços, aplicar correções, restringir privilégios e registrar eventos.",
        "versaoCorreta": "Errado. Trocar a credencial padrão é um passo básico, mas o hardening abrange desabilitar serviços e portas, aplicar correções, restringir privilégios, remover software supérfluo e ativar registro de eventos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Segmentação de rede",
        "VLAN com ACL",
        "Blast radius",
        "Hardening",
        "Superfície de ataque"
      ],
      "regras": [
        "Desabilitar serviços, portas e contas não necessários",
        "Trocar credenciais padrão de fábrica",
        "Aplicar correções de sistema e aplicativo",
        "Restringir privilégios e ativar registro de eventos"
      ],
      "comparacoes": [
        "Rede plana expõe todos os dispositivos; rede segmentada contém o comprometimento na zona"
      ],
      "fluxos": [
        "Inventário de serviços → desativar o não necessário → corrigir → credenciais fortes → filtro de gestão → registro e backup → varredura de verificação"
      ],
      "excecoes": [
        "Hardening sem inventário e padrão documentado vira prática dependente de cada profissional, não um controle repetível"
      ],
      "palavrasChave": [
        "segmentação",
        "VLAN",
        "ACL",
        "hardening",
        "blast radius",
        "servidor",
        "credencial",
        "privilégio"
      ],
      "checklist": [
        "Dividir a rede em zonas por função",
        "Permitir apenas o tráfego necessário entre zonas",
        "Desabilitar serviços, portas e contas não necessários",
        "Trocar credenciais padrão de fábrica",
        "Aplicar correções de sistema e aplicativo",
        "Restringir acesso à gestão à rede administrativa",
        "Registrar eventos e fazer backup da configuração",
        "Executar varredura de verificação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Estação infectada alcança automaticamente todos os servidores da rede. Que falha arquitetural permitiu e como corrigir?",
        "dados": "Rede plana sem segmentação; estação alcança servidores de aplicação, banco de dados e porta de gestão sem restrição.",
        "conceitos": [
          "Segmentação de rede",
          "Blast radius"
        ],
        "estrategia": "Identificar a ausência de segmentação como falha arquitetural e definir zonas com ACL/firewall que permitam apenas o tráfego necessário.",
        "execucao": [
          "Reconhecer que a rede plana permite alcance irrestrito da estação infectada",
          "Definir zonas separando estações de servidores e banco de dados",
          "Aplicar ACL/firewall entre zonas permitindo só o necessário (ex.: estação → servidor web porta 443)",
          "Negar acesso da estação à porta de gestão do banco de dados"
        ],
        "resultado": "Ausência de segmentação: a rede plana faz da estação porta de entrada para tudo. Corrigir com zonas (estações X servidores) e ACL/firewall entre elas, permitindo apenas o tráfego necessário — por exemplo, estação fala com servidor web na porta 443, nunca com a porta de gestão do banco.",
        "justificativa": "Sem segmentação não há barreira interna, então o dano se espalha por toda a rede; com zonas e ACLs o comprometimento fica contido na zona da estação.",
        "errosFrequentes": [
          "Achar que criar VLANs por si só já segmenta a rede",
          "Esquecer de controlar o tráfego de leste-oeste entre as zonas"
        ],
        "variacao": "Um servidor de aplicação alcança diretamente a porta de gestão do banco de dados. Qual controle corrige?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um dispositivo IoT de vídeo deve ficar na rede do órgão. Como segmentá-lo e quais controles aplicar?",
        "dados": "Dispositivo IoT de vídeo (câmera); servidor de gravação; Internet opcional; estações e servidores da zona de dados devem ser bloqueados.",
        "conceitos": [
          "Zona própria para dispositivos",
          "ACL de rede",
          "Credencial padrão"
        ],
        "estrategia": "Criar uma VLAN dedicada para o dispositivo com acesso restrito ao servidor de gravação e, se indispensável, à Internet, negando estações e servidores; trocar credencial, atualizar firmware e restringir gestão.",
        "execucao": [
          "Criar VLAN própria para dispositivos de vídeo",
          "Permitir acesso apenas ao servidor de gravação e, se indispensável, à Internet",
          "Negar acesso do dispositivo a estações e servidores da zona de dados",
          "Trocar credencial padrão, atualizar firmware e restringir gestão à rede administrativa"
        ],
        "resultado": "Zona própria (VLAN de dispositivos) com acesso somente ao servidor de gravação e à Internet se indispensável, negado para estações e servidores; credencial padrão trocada; firmware atualizado; gestão restrita à rede administrativa. Assim, comprometimento da câmera não abre caminho para a zona de dados.",
        "justificativa": "Isolando o IoT em zona própria com tráfego mínimo, um comprometimento da câmera não alcança a zona de dados, limitando o blast radius.",
        "errosFrequentes": [
          "Colocar o dispositivo IoT na mesma VLAN das estações de trabalho",
          "Manter a credencial padrão de fábrica do dispositivo"
        ],
        "variacao": "Uma impressora de rede deve acessar apenas o servidor de impressão. Como segmentá-la?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Segmentar a rede significa criar VLANs e nada mais.' Avalie se está correta.",
        "dados": "Alegação de que segmentação se resume à criação de VLANs, sem controle de tráfego entre zonas.",
        "conceitos": [
          "VLAN",
          "Segmentação de rede",
          "ACL/firewall entre zonas"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que VLAN apenas agrupa e que segmentação efetiva exige controle de tráfego entre zonas.",
        "execucao": [
          "Reconhecer que a VLAN agrupa dispositivos em um domínio de broadcast",
          "Identificar que, sem ACL/firewall, o tráfego entre VLANs é livre",
          "Concluir que segmentação exige controle de tráfego entre zonas, monitoramento e revisão de regras"
        ],
        "resultado": "Errado. Criar VLANs apenas agrupa dispositivos; segmentação efetiva requer controle de tráfego entre zonas com ACLs/firewall, além de monitoramento e revisão periódica de regras.",
        "justificativa": "A VLAN por si só não impede a comunicação entre zonas; só o controle de tráfego (ACL/firewall) contém o comprometimento.",
        "errosFrequentes": [
          "Equivaler segmentação à criação de VLANs sem políticas de tráfego",
          "Assumir que dispositivos em VLANs diferentes estão isolados sem ACL"
        ],
        "variacao": "Afirmação: 'Criar três VLANs para estações, servidores e convidados já é segmentação completa.'"
      }
    ]
  }
};
