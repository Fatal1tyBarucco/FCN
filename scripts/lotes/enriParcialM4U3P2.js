const enriParcialM4U3P2 = {
  "m4-u3-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Pretexting e baiting deslocam o ataque da técnica para o comportamento: nenhuma falha de software é explorada, apenas a disposição humana de aceitar um cenário plausível ou uma oferta conveniente. Em concurso, o tema está no conteúdo programático em blocos de classificação de técnicas e de medidas de conscientização. Dominar a distinção entre convencer por história e atrair por isca permite acertar essas classificações e articular a defesa processual que reduz a chance de sucesso do ataque.",
      "preRequisitos": [
        "Noção de engenharia social com alvo no fator humano",
        "Identificação de autoridade, urgência e confiança em contexto institucional",
        "Conhecimento de canais oficiais de comunicação e denúncia"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário como pretexting ou baiting a partir do mecanismo de indução",
        "Relacionar o cenário ao princípio psicológico explorado pelo atacante",
        "Desenhar um ciclo de treinamento defensivo com simulação, retorno e relatório"
      ],
      "competencias": [
        "Suspeita metódica de pedidos que fogem do procedimento",
        "Comunicação de incidentes sem receio de exposição",
        "Desenho de controles processuais em vez de controles técnicos apenas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — o pretexting costuma usar a mesma mensagem como veículo",
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — a identidade forjada sustenta o cenário fictício",
        "m4-u3-t3-s3 (Análise segura de mensagens, links e anexos) — a triagem da mensagem orienta a decisão antes do relato"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A engenharia social consta dos editais de segurança da informação quase sempre em blocos de classificação de técnicas e de medidas de conscientização. As bancas tendem a apresentar um caso breve e solicitar o nome da técnica ou o princípio psicológico, com itens também sobre a postura institucional correta diante do incidente. Não há exigência de cálculo."
      }
    },
    "niveis": {
      "iniciante": "Engenharia social explora características humanas, não falhas de máquina. Pretexting é a construção de um cenário fictício crível — pesquisa, auditoria, novo colega do suporte, urgência do gestor — e a condução da vítima pelo roteiro. Baiting é a oferta física ou digital irresistível que atiça a curiosidade: pen drive abandonado na recepção, brinde com programa malicioso, cabo USB com logotipo do órgão.",
      "intermediario": "No pretexting, a vítima fornece a informação ou executa a ação porque o roteiro faz sentido; é a base da fraude do suporte técnico por telefone e do pedido urgente em nome do gestor. No baiting, a vítima inicia a ação por conta própria, atraída pela isca, o que torna a defesa mais ligada a política de uso de mídia removível do que a leitura de mensagens.",
      "avancado": "Os princípios explorados são autoridade, urgência, aparência de rotina, reciprocidade e medo de consequência. A defesa prática combina procedimentos escritos que obriguem verificação por canal independente, canal oficial de denúncia, simulações periódicas com retorno não punitivo e autorização explícita para o servidor recusar pedido fora do procedimento.",
      "especialista": "O ciclo de maturidade mede a resistência sem criminalizar quem erra: simulação com conteúdo inofensivo, medição de taxa de clique e de relato por setor, retorno imediato e reforço direcionado, com relatório gerencial de evolução temporal. O material não orienta a execução de ataques; o escopo é reconhecimento, prevenção e resposta."
    },
    "comparacoes": [
      {
        "tema": "Pretexting e baiting: o que move a vítima",
        "a": {
          "rotulo": "Pretexting",
          "texto": "O atacante fornece uma história convincente e pede algo; a vítima age porque acredita no roteiro e na figura que o apresenta. A iniciativa parte de quem ataca, e a defesa recai na verificação do pedido por canal independente."
        },
        "b": {
          "rotulo": "Baiting",
          "texto": "O atacante deposita uma isca e espera; a vítima age por curiosidade ou conveniência, sem que ninguém tenha solicitado nada. A iniciativa parte da vítima, e a defesa recai em política de mídia removível e proibição de instalar o que não foi fornecido pelo suporte."
        },
        "diferencaGabarito": "No pretexting a ação é solicitada dentro de um cenário fictício; no baiting a ação é espontânea, provocada por objeto ou oferta deixados disponíveis pelo atacante."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Funcionário que clica em mensagem de simulação deve ser identificado publicamente e penalizado para servir de exemplo.",
        "porqueErrada": "A punição pública inibe o relato de incidentes, que é justamente a informação que permite detectar campanhas em curso e avaliar a eficácia do treinamento. O efeito observado é a ocultação, não a prevenção.",
        "versaoCorreta": "A conduta defensiva correta é retorno privado, treinamento de reforço e melhoria de processo; a medição de resultados deve ser gerencial e por setor, sem exposição individual."
      },
      {
        "afirmacaoEquivocada": "Pen drive encontrado na recepção pode ser usado no computador do órgão desde que seja feita verificação antivírus antes.",
        "porqueErrada": "A varredura por assinatura não detecta código desconhecido, e o simples ato de conectar o dispositivo pode iniciar execução automática ou explorar falhas do driver. Tratar o objeto como suspeito é a medida eficaz.",
        "versaoCorreta": "Mídia removível de origem não confiável não deve ser conectada em nenhuma estação da instituição; o correto é entregá-la à equipe de segurança para análise em ambiente controlado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pretexting: cenário fictício crível que conduz a vítima por roteiro",
        "Baiting: isca física ou digital que provoca ação espontânea da vítima",
        "Autoridade, urgência, reciprocidade e medo como alavancas psicológicas",
        "Simulação defensiva: exercício inofensivo que mede comportamento e gera retorno"
      ],
      "regras": [
        "Pedido fora do procedimento deve ser recusado até confirmação por canal independente.",
        "Mídia removível de procedência duvidosa não é conectada a equipamentos da instituição."
      ],
      "comparacoes": [
        "Pretexting conta com pedido explícito do atacante; baiting prescinde de pedido e aposta na curiosidade da vítima."
      ],
      "fluxos": [
        "Identificar pedido suspeito, suspender a ação, confirmar por canal oficial conhecido, relatar no canal de denúncia e receber retorno com reforço."
      ],
      "excecoes": [
        "Contexto de crise ou de sobrecarga não dispensa a verificação: é justamente nele que o atacante concentra a urgência."
      ],
      "palavrasChave": [
        "pretexting",
        "baiting",
        "autoridade",
        "urgência",
        "canal independente",
        "simulação defensiva"
      ],
      "checklist": [
        "O pedido corresponde a um procedimento escrito existente?",
        "A origem foi confirmada por canal distinto do usado no contato?",
        "Há exigência de sigilo ou de decisão imediata?",
        "A tentativa foi relatada ao canal oficial de denúncia?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Alguém telefona apresentando-se como suporte interno e pede a senha do usuário para concluir uma migração. Identifique a técnica e o princípio explorado.",
        "dados": "Chamada recebida em horário de Expediente; o interlocutor declara ser do suporte técnico, alega migração de sistema em curso e solicita a senha para último ajuste; nenhum aviso prévio havia sido enviado pela equipe de TI.",
        "conceitos": [
          "Pretexting como construção de cenário fictício",
          "Autoridade e urgência como alavancas do pedido",
          "Regra institucional de que suporte legítimo não solicita senha"
        ],
        "estrategia": "Reconhecer que o pedido contraria regra básica de segurança e que o cenário serve apenas para criar pressão. A resposta correta é encerrar o contato e confirmar por iniciativa própria no canal oficial.",
        "execucao": [
          "Reconhecer que nenhum suporte legítimo solicita senha do usuário.",
          "Encerrar a ligação sem fornecer credencial alguma.",
          "Contatar o suporte pelo número institucional publicado, por iniciativa própria.",
          "Relatar a tentativa ao canal de denúncia."
        ],
        "resultado": "A técnica é pretexting, sustentada pelos princípios de autoridade e urgência. A defesa consiste em negar a senha e confirmar pelo canal oficial conhecido pelo funcionário, sem usar o contato recebido.",
        "justificativa": "O pedido de senha é incompatível com a prática de suporte porque a credencial é pessoal e intransferível. O cenário de migração funciona apenas como pressão, de modo que a verificação por canal independente desmonta a fraude sem depender de julgamento sobre a postura do interlocutor.",
        "errosFrequentes": [
          "Fornecer a senha por entender que o suporte tem autoridade legítima para solicitá-la.",
          "Aceitar a urgência alegada como razão para dispensar a verificação."
        ],
        "variacao": "Admita que a ligação parta do número realmente cadastrado do suporte e peça apenas que o usuário informe um código recebido por SMS. Explique por que a resposta continua sendo a mesma."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer medir a eficácia do treinamento contra engenharia social. Desenhe uma campanha defensiva ética.",
        "dados": "População de quinhentos servidores distribuídos em doze setores; política interna exige autorização prévia da gestão; há canal de denúncia ativo e equipe de segurança responsável pelo programa. Meta é reduzir a taxa de clique em dois trimestres.",
        "conceitos": [
          "Simulação com conteúdo inofensivo",
          "Medição por taxa de clique e taxa de relato",
          "Retorno imediato e não punitivo",
          "Reforço direcionado a grupos com pior desempeno"
        ],
        "estrategia": "Construir campanha que nunca colete credenciais reais nem distribua código malicioso, registre apenas a interação do usuário, devolva explicação imediata sobre os indicadores ignorados e produza relatório gerencial por setor e por período.",
        "execucao": [
          "Obter autorização formal da gestão e definir conteúdo fictício sem coleta de senha.",
          "Enviar mensagem inofensiva apenas a setores autorizados, com marcação clara de exercício interno.",
          "Registrar cliques e relatos, e apresentar retorno imediato ao participante.",
          "Aplicar reforço direcionado e consolidar relatório gerencial com evolução temporal."
        ],
        "resultado": "A campanha produz indicadores de taxa de clique e de relato por setor, retorno educativo imediato e relatório de evolução, sem expor indivíduos nem coletar dados sensíveis.",
        "justificativa": "A mensuração da conscientização exige exercício realista, mas simulação ética dispensa coleta de credencial e código malicioso porque o objeto medido é o comportamento de clique e relato, não a captura do segredo. O retorno imediato converte o erro em aprendizado e sustenta a cultura de reporte.",
        "errosFrequentes": [
          "Simular capturando senhas reais dos servidores, o que expõe a instituição e desrespeita a privacidade.",
          "Divulgar nominalmente quem clicou, o que reduz o relato futuro de incidentes autênticos."
        ],
        "variacao": "Imagine que a campanha seja repetida após seis meses e que dois setores mantenham taxa de clique elevada. Descreva a ação correta e o indicador que deve ser acompanhado em seguida."
      },
      {
        "tipo": "erro",
        "problema": "A gestão propõe punir publicamente o servidor que clicou na simulação, para que o exemplo dissuada os demais. A proposta é adequada sob a ótica de segurança?",
        "dados": "Caso isolado de clique em exercício autorizado, sem prejuízo material, em instituição que possui canal de denúncia oficial e registro histórico de incidentes pouco reportados por receio de repreensão.",
        "conceitos": [
          "Relato de incidente como insumo da defesa",
          "Cultura de culpa versus cultura de aprendizado",
          "Retorno privado como medida corretiva"
        ],
        "estrategia": "Avaliar a proposta pelo seu efeito sobre o comportamento futuro de relato, e não pela aparência de rigor. A consequência previsível é a ocultação de incidentes reais, que é o oposto do objetivo.",
        "execucao": [
          "Identificar que a punição pública desestimula o relato de novas tentativas.",
          "Substituir a exposição por retorno privado ao envolvido.",
          "Aplicar reforço educacional e revisar o processo que permitiu o clique.",
          "Manter a medição em nível gerencial e por setor, sem identificação individual."
        ],
        "resultado": "A proposta é inadequada. A conduta correta é retorno privado, treinamento e melhoria de processos, porque punição pública reduz o relato de incidentes, matéria-prima da defesa.",
        "justificativa": "Segurança da informação depende de comunicação rápida de tentativas para bloquear campanhas em curso. Quando relatar gera exposição, o atacante ganha silêncio; por isso a medida eficaz é a aprendizagem individual reservada combinada com indicadores gerenciais.",
        "errosFrequentes": [
          "Confundir rigor administrativo com eficácia defensiva.",
          "Desconhecer que campanhas de phishing se beneficiam da ausência de relato pelas vítimas."
        ],
        "variacao": "Considere que o clique tenha ocorrido fora de qualquer exercício autorizado, em ataque real com instalação de programa. Descreva quais providências se somam ao retorno educativo."
      }
    ]
  },
  "m4-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Força bruta, password spraying e credential stuffing integram os ataques a credenciais no conteúdo programático de segurança da informação, e a dificuldade costuma residir na distribuição das tentativas: muito volume contra uma conta, pouco volume contra muitas contas, ou nenhuma tentativa de adivinhação porque a credencial já é conhecida. Dominar essa leitura permite associar cada ataque à defesa específica — limite e bloqueio progressivo, monitoramento agregado por origem, ou MFA e senhas únicas. Errar a classificação leva a escolher o controle errado, que é exatamente o que a banca testa.",
      "preRequisitos": [
        "Estrutura de autenticação: usuário, senha e fator adicional",
        "Noção de logs de autenticação e de eventos de falha",
        "Conceito de vazamento de credenciais e reutilização de senha"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário de tentativas de login segundo a distribuição das tentativas",
        "Associar cada ataque à defesa que efetivamente o neutraliza",
        "Justificar por que bloqueio por falhas consecutivas não contém password spraying"
      ],
      "competencias": [
        "Leitura de logs de autenticação em volume",
        "Distinção entre prevenção de acesso e limitação de dano",
        "Avaliação crítica de controles aparentemente suficientes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — captura credenciais por persuasão",
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — captura credenciais por falsificação",
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas) — a cadeia vazamento e reutilização",
        "m4-u3-t2-s2 (DoS e DDoS) — outro eixo de ataque sobre o mesmo ativo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Ataques a credenciais integram o núcleo dos editais de segurança da informação e são tópico clássico de itens de certo e errado, em geral com foco na diferença entre força bruta e demais técnicas e na defesa correta. A cobrança é conceitual e recorrente em bancas de área de tecnologia, sem exigência de cálculo ou memorização de normas específicas."
      }
    },
    "niveis": {
      "iniciante": "Força bruta testa muitas senhas contra uma única conta, automaticamente, até acertar; exige tempo e produz volume perceptível de falhas naquela conta. Password spraying testa uma ou duas senhas bastante comuns contra muitas contas, para não disparar bloqueio por conta. Credential stuffing reutiliza pares de usuário e senha vazados em outros serviços.",
      "intermediario": "O spraying é silencioso quando a política só conta falhas por conta: cada conta registra uma ou duas falhas, mas o agregado por origem de rede revela a campanha. O stuffing não quebra senha alguma; ele explora o hábito de reutilizar a mesma combinação em vários sistemas, de modo que a credencial testada é verdadeira.",
      "avancado": "As defesas se alinham por ataque. Contra força bruta: limite de tentativas com bloqueio progressivo e alerta. Contra spraying: monitoramento do volume de falhas por origem e por conjunto de contas, com janelas curtas de bloqueio. Contra stuffing: MFA, senha única por serviço gerenciada e verificação de exposição de credenciais.",
      "especialista": "MFA é a defesa mais efetiva contra credential stuffing, porque a senha vazada deixa de bastar. Senha única por serviço é a defesa mais efetiva contra a propagação do dano quando há vazamento, pois limita o alcance da combinação exposta. Alertas de login a partir de local incompatível com o padrão do usuário completam o conjunto."
    },
    "comparacoes": [
      {
        "tema": "Força bruta e password spraying: distribuição das tentativas",
        "a": {
          "rotulo": "Força bruta",
          "texto": "Concentra o esforço em uma conta e percorre o espaço de senhas possíveis; o volume de falhas fica visível na conta visada e o consumo de tempo cresce com a complexidade da senha."
        },
        "b": {
          "rotulo": "Password spraying",
          "texto": "Distribui poucas tentativas por conta usando senhas frequentes, de modo que nenhuma conta isolada atinge o limite de bloqueio; o sinal do ataque aparece no agregado por origem e por conjunto de contas."
        },
        "diferencaGabarito": "A direção do volume: concentrado em um alvo no força bruta, diluído entre muitos alvos no spraying, e por isso o controle que funciona em um caso falha no outro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Bloquear a conta após cinco falhas consecutivas é defesa suficiente contra password spraying.",
        "porqueErrada": "O spraying faz justamente poucas tentativas por conta, mantendo-se abaixo do limite que dispara o bloqueio. A medida é eficaz contra força bruta, mas não enxerga a campanha, que só aparece na soma por origem.",
        "versaoCorreta": "Contra spraying é preciso monitorar o padrão agregado de falhas por origem e por conjunto de contas, pois o volume por conta permanece deliberadamente baixo para não acionar o bloqueio individual."
      },
      {
        "afirmacaoEquivocada": "Credential stuffing consiste em testar combinações aleatórias de usuário e senha em busca de acesso válido.",
        "porqueErrada": "Descreve força bruta ou recheio automatizado. No stuffing as credenciais já são verdadeiras, obtidas em vazamentos externos, e o ataque não depende de descobrir nada: depende de que o usuário as reutilize.",
        "versaoCorreta": "Credential stuffing reutiliza em massa pares de usuário e senha vazados em outros serviços; o sucesso decorre da reutilização de senha pelo usuário, não da capacidade de adivinhar a combinação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Força bruta: muitas senhas contra uma conta",
        "Password spraying: poucas senhas comuns contra muitas contas",
        "Credential stuffing: credenciais reais vazadas aplicadas em outros serviços",
        "Reutilização de senha como vetor de propagação do dano"
      ],
      "regras": [
        "Bloqueio por falhas consecutivas protege conta única, não conjunto de contas.",
        "Credencial vazada não deve permitir acesso: MFA responde por essa exigência."
      ],
      "comparacoes": [
        "Força bruta concentra volume contra um alvo; spraying dispersa poucas tentativas entre muitos alvos; stuffing não adivinha nada."
      ],
      "fluxos": [
        "Observar falhas de autenticação, agregar por origem e por conta, identificar o padrão, bloquear origem suspeita, impor MFA e notificar titulares afetados."
      ],
      "excecoes": [
        "Bloqueio agressivo por falhas pode induzir indisponibilidade em ataque de negação de serviço deliberado contra contas legítimas."
      ],
      "palavrasChave": [
        "força bruta",
        "password spraying",
        "credential stuffing",
        "MFA",
        "reutilização de senha",
        "gerenciador de senhas"
      ],
      "checklist": [
        "As falhas estão concentradas em uma conta ou dispersas entre muitas?",
        "O volume por origem foi comparado com a linha de base do serviço?",
        "As credenciais testadas constam em base de vazamento conhecida?",
        "MFA está exigido para todos os acessos sensíveis?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O log de autenticação registra milhares de falhas de login em contas distintas, com duas tentativas por conta, partindo de poucos endereços. Que ataque é esse?",
        "dados": "Registro de vinte e quatro horas com três mil contas afetadas, exatamente duas falhas em cada uma, origem restrita a um pequeno conjunto de endereços e senhas testadas dentro de uma lista reduzida de combinações muito comuns.",
        "conceitos": [
          "Distribuição das tentativas como critério de classificação",
          "Janela por conta abaixo do limite de bloqueio",
          "Monitoramento agregado por origem como controle correlato"
        ],
        "estrategia": "Não olhar conta por conta: agregar as falhas por origem e por intervalo de tempo, e observar que o volume por conta é insuficiente para acionar bloqueio, enquanto o total por origem é anômalo.",
        "execucao": [
          "Contar as falhas por conta e confirmar que permanecem abaixo do limite de bloqueio.",
          "Agregar as falhas por endereço de origem e por período.",
          "Comparar o total por origem com a linha de base histórica do serviço.",
          "Classificar o ataque com base na dispersão entre contas e na concentração de origem."
        ],
        "resultado": "O ataque é password spraying: volume baixo por conta, que evita o bloqueio, volume alto entre contas e origem concentrada. O que o revela é o monitoramento por origem e por conjunto de contas.",
        "justificativa": "A classificação segue a geometria das tentativas. Se houvesse muitas tentativas em uma conta, seria força bruta; como cada conta recebe apenas duas tentativas e o conjunto de contas afetadas é grande, o agente está borrifando senhas comuns. A concentração de origem completa o diagnóstico.",
        "errosFrequentes": [
          "Descarta o ataque porque nenhuma conta isolada atingiu o limite de falhas.",
          "Confunde o volume alto de registros com força bruta, sem verificar a distribuição."
        ],
        "variacao": "Imagine agora duzentas falhas em uma única conta administrativa, partindo de uma origem só. Reclassifique o caso e indique o controle que passa a ser o prioritário."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um vazamento externo expôs senhas de colaboradores que reutilizavam a senha do portal. Qual defesa teria barrado o acesso e qual reduz o dano?",
        "dados": "Base de vinte mil pares de usuário e senha publicada em fórum; dois por cento da força de trabalho do órgão consta na lista; o portal aceita autenticação apenas por usuário e senha. Acesso detectado a partir de três países em um único dia.",
        "conceitos": [
          "Credential stuffing sobre credenciais verdadeiras",
          "MFA como barreira de acesso",
          "Senha única como limitação de dano",
          "Verificação de exposição de credenciais"
        ],
        "estrategia": "Separar as duas respostas pedidas: a medida que impede o uso da credencial roubada e a medida que reduz o alcance do vazamento quando ele já ocorreu. Depois acrescentar a detecção por comportamento anômalo de origem.",
        "execucao": [
          "Impor MFA em todos os acessos, de modo que a senha vazada não seja suficiente.",
          "Instituir senha única por serviço, com apoio de gerenciador corporativo.",
          "Consultar base de exposição e forçar redefinição das combinações vazadas.",
          "Alertar sobre logins a partir de local incompatível com o padrão de uso."
        ],
        "resultado": "Barraria o acesso o MFA, pois a senha roubada sozinha não autentica. Reduziria o dano a senha única por serviço, que impede que o vazamento de um sistema alcance outro.",
        "justificativa": "As medidas atuam em momentos distintos: MFA invalida a credencial como fator único, enquanto a unicidade de senha impede que a mesma combinação abre outros sistemas. Como o stuffing não quebra senha, apenas reutiliza, a defesa precisa atacar justamente a reutilização.",
        "errosFrequentes": [
          "Aumentar a complexidade da senha do portal como única resposta, deixando os demais sistemas expostos.",
          "Esperar que o bloqueio por falhas consecutivas detenha o ataque, já que as credenciais testadas são válidas."
        ],
        "variacao": "Suponha que o portal já adote MFA e que o atacante use sessão autenticada obtida por phishing. Indique qual controle passa a ser determinante nesse novo cenário."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma que credential stuffing é o mesmo que força bruta e que ambos se combatem com limite de tentativas. A afirmação é correta?",
        "dados": "Campanha observada com alto índice de sucesso já na primeira tentativa de cada conta, credenciais constantes em base de vazamento pública e ausência de variação de senha testada. O limite de cinco falhas por conta não foi acionado em nenhum momento.",
        "conceitos": [
          "Diferença entre descobrir e reutilizar credencial",
          "Taxa de sucesso na primeira tentativa como sinal",
          "Ineficácia do limite de falhas contra credencial válida"
        ],
        "estrategia": "Comparar a taxa de sucesso por tentativa e a procedência das credenciais. Alto sucesso já na primeira tentativa indica credencial verdadeira, o que descarta a lógica de adivinhação da força bruta.",
        "execucao": [
          "Medir a taxa de sucesso por tentativa na campanha observada.",
          "Confrontar as combinações usadas com bases públicas de vazamento.",
          "Concluir que não há quebra de senha e que o limite de falhas não protege.",
          "Indicar MFA e senha única como controles pertinentes."
        ],
        "resultado": "A afirmação é incorreta. Força bruta gera tentativas contra uma conta; credential stuffing usa credenciais reais vazadas em massa, sem quebrar nada, e por isso o limite de falhas não a contém.",
        "justificativa": "O limite de tentativas supõe erro sucessivo até acerto; no stuffing a primeira tentativa pode ser válida, de forma que o controle não chega a ser acionado. Além disso, a escala do ataque deriva do hábito de reutilização, e não da capacidade computacional de adivinhar.",
        "errosFrequentes": [
          "Tratar todo ataque a credenciais como problema de espaço de senhas a percorrer.",
          "Acreditar que senha longa resolve o stuffing, quando a credencial já é conhecida pelo atacante."
        ],
        "variacao": "Admita que as credenciais testadas sejam combinações geradas aleatoriamente. Explique o que muda no diagnóstico e qual controle volta a ser relevante."
      }
    ]
  }
};
