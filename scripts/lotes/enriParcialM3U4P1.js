const enriParcialM3U4P1 = {
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
  }
};
