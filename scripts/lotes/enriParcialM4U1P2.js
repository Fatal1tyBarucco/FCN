const enriParcialM4U1P2 = {
  "m4-u1-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A cadeia ativo-ameaça-vulnerabilidade-risco-impacto é o vocabulário das questões de segurança: sem dominá-la, troca-se a fraqueza pelo agente ou o evento pela consequência. Os itens apresentam um cenário e pedem o elemento correto ou o tratamento adequado.",
      "preRequisitos": [
        "Noção de bem e serviço essencial em uma organização",
        "Extração de elementos relevantes de cenários descritivos"
      ],
      "objetivosObservaveis": [
        "Construir a cadeia conceitual ativo-ameaça-vulnerabilidade-risco-impacto e classificar tratamentos em situações concretas",
        "Distinguir ameaça (agente ou evento) de vulnerabilidade (fraqueza explorável)",
        "Classificar medidas descritas em evitar, mitigar, transferir ou aceitar",
        "Explicar por que o risco residual nunca é zero e como documentar seu aceite"
      ],
      "competencias": [
        "Modelagem conceitual de risco em cenários organizacionais",
        "Classificação de medidas conforme sua natureza",
        "Leitura crítica de declarações absolutas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o impacto materializa-se como violação de uma das propriedades",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — instrumentos concretos do tratamento mitigar",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — atua sobre a probabilidade na cadeia de risco",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — dados pessoais como ativo e o vazamento como impacto"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Sustenta os enunciados de todo o módulo de segurança e surge como item autônomo de definição e classificação de tratamento. A classificação é estimativa pedagógica, não levantamento estatístico."
      }
    },
    "niveis": {
      "iniciante": "Ativo é tudo o que tem valor para o órgão: dados, hardware e software, instalações e reputação. Ameaça é o evento ou agente capaz de provocar dano — atacante, erro operacional ou incêndio. Vulnerabilidade é a fraqueza explorável: senha padrão de fábrica, software sem correção, ausência de controle de acesso. Risco combina probabilidade e impacto; o impacto é a consequência materializada, como multa ou vazamento.",
      "intermediario": "Aplicar a cadeia a cenários: na senha padrão de fábrica, separar ativo (rede e informações), ameaça (agente que tenta acesso indevido), vulnerabilidade (credencial pública) e risco (probabilidade × impacto). Expressar o risco em escala qualitativa.",
      "avancado": "Escolher o tratamento conforme o contexto: evitar, não realizando a atividade; mitigar, reduzindo probabilidade ou impacto; transferir, por seguro ou contrato; aceitar, com decisão consciente registrada. O residual nunca é zero e exige aceite formal com responsável e data.",
      "especialista": "Estruturar o processo: inventário de ativos, identificação de ameaças e vulnerabilidades, avaliação qualitativa, seleção de tratamento, registro do residual aceito e revisão periódica. Criticar afirmações absolutas (risco zero, segurança total) ante o surgimento contínuo de ameaças."
    },
    "comparacoes": [
      {
        "tema": "Ameaça versus vulnerabilidade",
        "a": {
          "rotulo": "Ameaça",
          "texto": "Evento ou agente capaz de provocar dano ao ativo: atacante, erro operacional, incêndio ou inundação."
        },
        "b": {
          "rotulo": "Vulnerabilidade",
          "texto": "Fraqueza explorável que permite concretizar o dano: senha padrão, software sem correção, processo inexistente."
        },
        "diferencaGabarito": "A ameaça ataca; a vulnerabilidade é a condição que facilita. Na credencial padrão, a ameaça é o agente externo; a fragilidade é a senha conhecida."
      },
      {
        "tema": "Risco versus impacto",
        "a": {
          "rotulo": "Risco",
          "texto": "Combinação da probabilidade de exploração da vulnerabilidade com a severidade da consequência, em escala qualitativa."
        },
        "b": {
          "rotulo": "Impacto",
          "texto": "Consequência materializada do incidente: multa, paralisação, vazamento de dados pessoais, perda de confiança."
        },
        "diferencaGabarito": "O impacto é componente do risco: pode ser alto e o risco moderado se a probabilidade for baixa. Itens exploram a troca indevida dos termos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Depois de implantar firewall, MFA e backup, o risco do sistema ficou zero.",
        "porqueErrada": "Nenhum conjunto de controles elimina o risco: novas ameaças surgem e fragilidades remanescentes persistem, como a engenharia social no suporte.",
        "versaoCorreta": "Os controles reduzem o risco a um patamar residual, aceito formalmente — com responsável e data — e revisado periodicamente."
      },
      {
        "afirmacaoEquivocada": "Contratar seguro contra fraude elimina o risco da atividade.",
        "porqueErrada": "Transferir desloca parte do ônus financeiro; a probabilidade do evento e os danos não indenizáveis permanecem com o órgão.",
        "versaoCorreta": "O seguro é transferência: não impede o incidente nem dispensa os controles que reduzem probabilidade e impacto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Ativo: tudo o que tem valor para o órgão — dados, equipamentos, serviços, reputação",
        "Ameaça: evento ou agente capaz de provocar dano, intencional ou não",
        "Vulnerabilidade: fraqueza explorável, técnica ou de processo",
        "Risco: combinação qualitativa de probabilidade e impacto",
        "Risco residual: parcela que permanece após o tratamento e se aceita formalmente"
      ],
      "regras": [
        "Risco expressa-se como probabilidade × impacto em escala qualitativa, não cálculo financeiro exato",
        "O risco residual nunca é zero: aceita-se com registro de responsável e data",
        "Aceite de risco é decisão consciente e documentada; aceite implícito não é gestão de risco"
      ],
      "comparacoes": [
        "Ameaça é o agente ou evento; vulnerabilidade é a fraqueza explorável"
      ],
      "fluxos": [
        "Cadeia de risco: ativo exposto → ameaça encontra vulnerabilidade → incidente → impacto → tratamento → residual monitorado"
      ],
      "excecoes": [
        "A escala de risco é qualitativa: serve para priorizar decisões, sem pretender precisão financeira"
      ],
      "palavrasChave": [
        "ativo",
        "ameaça",
        "vulnerabilidade",
        "risco residual",
        "tratamento",
        "impacto"
      ],
      "checklist": [
        "Identifico ativo, ameaça, vulnerabilidade, risco e impacto no cenário?",
        "Distinguo probabilidade de impacto ao estimar o risco?",
        "Classifico a medida em evitar, mitigar, transferir ou aceitar?",
        "Explico por que o residual permanece e como se documenta?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identifique ativo, ameaça, vulnerabilidade e risco no cenário: 'a página do órgão usa a senha padrão de fábrica do fabricante do roteador'.",
        "dados": "Página institucional hospedada em rede cujo roteador mantém a senha padrão de fábrica, credencial publicamente conhecida; pelo equipamento acessa-se a rede interna.",
        "conceitos": [
          "Ativo",
          "Vulnerabilidade",
          "Risco"
        ],
        "estrategia": "Percorrer a cadeia em ordem: o que tem valor, o agente capaz de danificar, a fraqueza explorável e a combinação probabilidade × impacto.",
        "execucao": [
          "Listar o ativo: a rede e as informações acessíveis por ela.",
          "Identificar a vulnerabilidade: credencial padrão conhecida publicamente.",
          "Identificar a ameaça: agente externo ou interno que tenta acesso indevido.",
          "Estimar o risco: probabilidade elevada pela credencial pública, impacto alto pela extensão do dano."
        ],
        "resultado": "Ativo: a rede e as informações acessíveis por ela. Ameaça: agente externo ou interno que tenta acesso indevido. Vulnerabilidade: credencial padrão conhecida publicamente. Risco: probabilidade de exploração multiplicada pelo impacto do acesso à rede interna, que tende a ser alto pela extensão do dano.",
        "justificativa": "Cada termo está ancorado no cenário: a senha de fábrica é a vulnerabilidade por ser fraqueza conhecida; o agente que tenta acesso é a ameaça; o dano potencial define o impacto. O risco resulta da combinação dos dois fatores.",
        "errosFrequentes": [
          "Responder que a vulnerabilidade é o 'atacante', invertendo fraqueza e agente.",
          "Avaliar o risco apenas pela probabilidade, sem considerar o impacto."
        ],
        "variacao": "Troque a senha padrão por software sem correção conhecida publicamente: a cadeia é a mesma, com a fragilidade deslocada para o programa sem atualização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Após implantar MFA e treinamento, o risco de fraude por roubo de senha caiu, mas não desapareceu (ex.: engenharia social dirigida ao suporte). Que tipo de risco restou e qual tratamento cabe?",
        "dados": "Órgão implantou segundo fator e treinamento; o suporte recebe ligações de supostos servidores pedindo redefinição de cadastro; não há verificação formal de identidade no atendimento.",
        "conceitos": [
          "Risco residual",
          "Aceite formal"
        ],
        "estrategia": "Classificar o que restou após os controles como residual e responder com mitigação complementar somada a aceite documentado.",
        "execucao": [
          "Reconhecer que MFA e treinamento reduziram a probabilidade de fraude por senha.",
          "Mapear o vetor remanescente: engenharia social dirigida ao suporte.",
          "Propor mitigação adicional: verificação de identidade no atendimento e bloqueio de alteração por canal não autenticado.",
          "Registrar o aceite formal do que restar, com responsável e data."
        ],
        "resultado": "Risco residual. Cabe tratamento de mitigação adicional (procedimento de verificação de identidade no suporte, bloqueio de alteração de cadastro por canal não autenticado) e aceite formal documentado do que restar, com responsável e data — aceite implícito não é gestão de risco.",
        "justificativa": "O enunciado diz que o risco 'caiu, mas não desapareceu' — definição literal de residual. A resposta combina nova mitigação, porque há vetor tratável, com aceite formal, porque nenhum processo elimina tudo.",
        "errosFrequentes": [
          "Declarar que o risco foi eliminado pelos controles implantados.",
          "Confundir aceite formal com tolerância não documentada."
        ],
        "variacao": "Suponha que o órgão contrate apólice para cobrir prejuízos dessa fraude: identifica-se tratamento por transferência, que convive com as mitigações."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Depois de todos os controles implantados, o risco do sistema ficou zero.'",
        "dados": "Relatório de projeto declara 'risco eliminado' após firewall, MFA e backup; não há registro de aceite de residual nem calendário de revisão.",
        "conceitos": [
          "Risco residual",
          "Afirmações absolutas"
        ],
        "estrategia": "Submeter a afirmação à definição de residual: se os controles apenas reduzem, qualquer promessa de zero é falsa.",
        "execucao": [
          "Isolar a palavra-chave do enunciado: 'zero'.",
          "Confrontar com o surgimento contínuo de ameaças e fragilidades novas.",
          "Reformular: risco reduzido a nível residual, aceito formalmente e revisado."
        ],
        "resultado": "Errado. Controles reduzem risco a um patamar residual; eliminação total é inatingível porque novas ameaças e vulnerabilidades surgem continuamente. O correto é declarar o risco residual aceito formalmente e revisá-lo periodicamente.",
        "justificativa": "A afirmativa troca redução por eliminação: o patamar alcançado com controles é o residual, não o zero. Novas ameaças surgem sem cessar; aceitar formalmente e revisar distingue gestão de risco de propaganda.",
        "errosFrequentes": [
          "Ler 'risco baixo' como 'risco zero' e marcar a afirmação como correta.",
          "Tratar a ausência de incidentes passados como prova de risco futuro nulo."
        ],
        "variacao": "Mude a afirmação para 'com backup, não existe risco de indisponibilidade': o erro análogo é ignorar que backup é corretivo e reduz impacto, não probabilidade."
      }
    ]
  },
  "m4-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar controles pela natureza — evitar, avisar, restaurar, cobrir — é habilidade cobrada em itens que descrevem uma medida e pedem sua categoria. O erro comum é ler o alerta como correção ou o paliativo temporário como solução definitiva.",
      "preRequisitos": [
        "Cadeia ativo-ameaça-vulnerabilidade-risco-impacto",
        "Noção de incidente de segurança e de resposta"
      ],
      "objetivosObservaveis": [
        "Classificar controles de segurança por sua natureza e justificar controles compensatórios temporários",
        "Classificar medidas descritas em preventivas, detectivas, corretivas ou compensatórias",
        "Explicar por que o alerta de IDS não corrige nada por si só",
        "Formalizar compensatório com prazo, responsável e critério de substituição"
      ],
      "competencias": [
        "Classificação de controles pelo momento de atuação",
        "Governança de exceções de segurança",
        "Leitura de cenários de defesa em profundidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s3 (Ativos, ameaças, vulnerabilidades, risco e impacto) — os controles materializam o tratamento de risco",
        "m4-u2-t2-s1 (Firewall de pacotes) — controle preventivo de rede",
        "m4-u2-t3-s1 (IDS e IPS) — controle detectivo clássico",
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — controle corretivo de restauração",
        "m4-u2-t4-s3 (Defesa em profundidade) — combinação das quatro naturezas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia preventivo/detectivo/corretivo/compensatório é tema em itens que trocam a natureza de controles conhecidos (IDS, backup, MFA). A classificação é estimativa pedagógica, não levantamento estatístico de frequência."
      }
    },
    "niveis": {
      "iniciante": "Controles preventivos evitam o incidente: firewall com negação padrão, MFA, bloqueio de macros. Detectivos identificam que ele ocorreu ou está ocorrendo: alertas de login fora do padrão, IDS, revisão de registros. Corretivos eliminam a causa ou restauram o estado: restauração de backup, revogação de credencial comprometida. Compensatórios são alternativas temporárias enquanto o principal não pode ser aplicado.",
      "intermediario": "Aplicar o critério do momento: o que age antes é preventivo; o que percebe durante ou depois é detectivo; o que elimina causa ou restaura é corretivo; o que cobre a ausência do principal é compensatório. O antivírus pode ter dupla natureza: bloqueia (preventivo) e remove (corretivo).",
      "avancado": "Governar o compensatório: toda medida alternativa exige prazo, responsável nomeado e data de substituição pelo controle principal; sem isso, a exceção se torna permanente silenciosa. Exemplo: sistema legado sem MFA recebe lista de endereços permitidos e revisão diária até a migração.",
      "especialista": "Projetar defesa em profundidade: o preventivo reduz a chance do incidente, o detectivo encurta a percepção, o corretivo restaura o estado e o compensatório cobre a janela de exposição. Avaliar proporcionalidade e revisar o compensatório periodicamente até a extinção."
    },
    "comparacoes": [
      {
        "tema": "Controle preventivo versus controle detectivo",
        "a": {
          "rotulo": "Preventivo",
          "texto": "Firewall com negação padrão e bloqueio de macros: impedem que o incidente aconteça."
        },
        "b": {
          "rotulo": "Detectivo",
          "texto": "IDS e alerta de login fora do padrão: informam que o incidente ocorreu ou está ocorrendo."
        },
        "diferencaGabarito": "Preventivo evita; detectivo informa. O alerta não significa dano evitado — significa dano percebido."
      },
      {
        "tema": "Controle corretivo versus controle compensatório",
        "a": {
          "rotulo": "Corretivo",
          "texto": "Restauração após a perda: reage ao incidente consumado para voltar ao estado desejado."
        },
        "b": {
          "rotulo": "Compensatório",
          "texto": "Bloqueio manual de acessos enquanto a MFA não existe: alternativa temporária à ausência do principal."
        },
        "diferencaGabarito": "O corretivo responde ao incidente; o compensatório substitui provisoriamente o controle principal e exige prazo, responsável e data de substituição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um alerta disparado pelo IDS é exemplo de controle corretivo.",
        "porqueErrada": "O alerta informa que algo ocorreu ou está ocorrendo; por si só, não contém, não restaura e não elimina causa alguma.",
        "versaoCorreta": "O IDS é detectivo: a contenção e a recuperação dependem de controles posteriores de resposta, como isolar o equipamento afetado."
      },
      {
        "afirmacaoEquivocada": "Controles compensatórios podem ser mantidos indefinidamente, desde que funcionem.",
        "porqueErrada": "A medida nasceu para ganhar tempo até que o controle principal exista; transformá-la em permanente é conviver com a fragilidade original sob outro nome.",
        "versaoCorreta": "O compensatório é exceção temporária: exige prazo, responsável nomeado e data de substituição pelo controle principal."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Controle preventivo: impede a ocorrência do incidente",
        "Controle detectivo: percebe o incidente em curso ou consumado",
        "Controle corretivo: elimina a causa ou restaura o estado desejado",
        "Controle compensatório: alternativa temporária ao controle principal ausente",
        "Defesa em profundidade: combinação das quatro naturezas"
      ],
      "regras": [
        "Todo controle compensatório exige prazo, responsável e data de substituição pelo controle principal",
        "Alertar não é corrigir: responder ao detectivo é atribuição de outro controle",
        "A política de negação padrão do firewall exemplifica a prevenção"
      ],
      "comparacoes": [
        "Detectivo informa; corretivo repara — a diferença está em reparar ou apenas perceber"
      ],
      "fluxos": [
        "Ciclo da defesa: preventivo reduz a chance → detectivo encurta a percepção → corretivo restaura o estado → compensatório cobre a janela de exposição"
      ],
      "excecoes": [
        "Uma mesma medida pode ter mais de uma natureza: o antivírus bloqueia o código conhecido e o remove após a execução"
      ],
      "palavrasChave": [
        "preventivo",
        "detectivo",
        "corretivo",
        "compensatório",
        "exceção temporária"
      ],
      "checklist": [
        "Classifico a medida pela natureza e pelo momento de atuação?",
        "Distinguo alertar de corrigir em itens sobre IDS?",
        "Formalizo o compensatório com prazo, responsável e substituição?",
        "Combino as quatro naturezas ao explicar defesa em profundidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique: 'antivírus com atualização de assinaturas', 'alerta de tentativa de login recusada' e 'restauração de arquivos a partir de cópia de segurança'.",
        "dados": "Três medidas em avaliação: antivírus com atualização de assinaturas; alerta a cada tentativa de login recusada; restauração de arquivos a partir de cópia de segurança.",
        "conceitos": [
          "Classificação de controles",
          "Momento de atuação"
        ],
        "estrategia": "Perguntar, para cada medida, quando ela atua — antes, durante ou depois — e se repara algo ou apenas informa.",
        "execucao": [
          "Analisar o antivírus: bloqueia código conhecido antes (preventivo) e o remove depois (corretivo).",
          "Analisar o alerta de login recusado: informa a tentativa, sem reparar nada (detectivo).",
          "Analisar a restauração: recupera o estado após a perda (corretivo)."
        ],
        "resultado": "Antivírus atua de forma preventiva (bloqueia código malicioso conhecido) e, quando identifica após a execução, de forma corretiva ao remover. Alerta de login recusada é detectivo. Restauração a partir de backup é corretivo.",
        "justificativa": "A classificação decorre do momento e do efeito: bloquear precede o incidente, alertar apenas comunica, restaurar repara o dano. O antivírus ilustra a dupla natureza, e o alerta não vira corretivo por indicar a tentativa recusada.",
        "errosFrequentes": [
          "Classificar o alerta como corretivo por ocorrer 'depois' da tentativa.",
          "Ignorar a dupla natureza do antivírus, classificando-o só como preventivo."
        ],
        "variacao": "Acrescente à lista a exigência de MFA e a revisão humana diária de registros enquanto a automação não existe: surgem um preventivo e um compensatório a classificar."
      },
      {
        "tipo": "aplicacao",
        "problema": "O sistema legado do órgão não suporta MFA e a substituição levará 12 meses. Que controle compensatório é proporcional e como ele deve ser governado?",
        "dados": "Sistema legado de folha de pagamento sem suporte a MFA; migração em 12 meses; quarenta usuários acessam apenas da rede administrativa.",
        "conceitos": [
          "Controle compensatório",
          "Governança de exceção"
        ],
        "estrategia": "Propor medidas alternativas proporcionais à janela de exposição e formalizá-las como exceção governada, com prazo e responsável.",
        "execucao": [
          "Restringir o acesso do sistema à rede interna e a lista de endereços permitidos.",
          "Exigir verificação de identidade por canal registrado antes de qualquer alteração de acesso.",
          "Instituir revisão diária dos registros de acesso dos perfis do sistema.",
          "Registrar a exceção com prazo de 12 meses, responsável nomeado e revisão mensal."
        ],
        "resultado": "Controle compensatório: acesso restrito a rede interna e lista de endereços permitidos, verificação de identidade por canal registrado no atendimento ao usuário e revisão diária dos registros de acesso daquele perfil. Governança: registrar prazo de 12 meses (ou menos), responsável nomeado e critério objetivo de substituição, com revisão mensal até a migração para MFA.",
        "justificativa": "O compensatório deve cobrir a fraqueza que a MFA cobriria — o acesso com credencial comprometida — por meios disponíveis hoje, e ser proporcional à janela de 12 meses. A governança explícita é o que impede a exceção de se perpetuar.",
        "errosFrequentes": [
          "Adotar o compensatório sem registro formal de prazo e responsável.",
          "Tratar o paliativo como solução definitiva em lugar da MFA."
        ],
        "variacao": "Suponha que os 12 meses se esgotem e a migração atrase: renovar a exceção exige nova análise formal e redefinição de prazo, não continuidade automática."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Controles compensatórios podem ser mantidos indefinidamente, desde que funcionem.'",
        "dados": "Bloqueio manual de acessos implantado como provisório há dois anos; sem registro de prazo, responsável ou data de substituição; a MFA segue inexistindo.",
        "conceitos": [
          "Exceção temporária",
          "Normalização da exceção"
        ],
        "estrategia": "Confrontar a duração prática da medida com sua natureza de exceção temporária, procurando os elementos de governança ausentes.",
        "execucao": [
          "Verificar que o 'provisório' completou dois anos sem revisão.",
          "Conferir a ausência de prazo, responsável e data de substituição.",
          "Avaliar o efeito: a fragilidade original segue sem correção e o risco acumula.",
          "Concluir pela substituição pelo controle principal, com cronograma formal."
        ],
        "resultado": "Errado. Compensatório é exceção temporária: sem prazo e substituição pelo controle principal, a exceção se normaliza, acumula risco e impede a correção da vulnerabilidade original.",
        "justificativa": "A afirmação é atraente porque a medida 'funciona' no dia a dia. Mas compensatório é categoria temporal, não de eficácia: mantido indefinidamente, deixa de compensar e passa a ser a configuração do sistema, perpetuando a ausência da MFA.",
        "errosFrequentes": [
          "Avaliar o controle pelo funcionamento atual, ignorando a governança ausente.",
          "Confundir a persistência da medida com aprovação institucional dela."
        ],
        "variacao": "Transponha o caso para a revisão humana diária de registros que virou rotina permanente: a mesma falha de governança — exceção sem prazo — reaparece em contexto detectivo."
      }
    ]
  }
};
