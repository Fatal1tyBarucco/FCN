const enriParcialM3U5P1 = {
  "m3-u5-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Intrusão em reuniões online (zoombombing) está no conteúdo programático de segurança da informação e LGPD, com classificação média por estimativa pedagógica de adequação ao edital. Reuniões invadidas causam dano à imagem e vazamento de dados. O candidato deve identificar vetores de entrada, aplicar mitigações (senha, lobby, login, restrição de tela) e executar contenção (remover intruso, bloquear entradas, encerrar e recriar com link novo, registrar o incidente).",
      "preRequisitos": ["Unidade 4.1 (lobby, moderação e autenticação)", "Noção de autenticação e autorização", "Controles de reunião online (senha, sala de espera)"],
      "objetivosObservaveis": ["Definir intrusão em reunião online", "Citar vetores de entrada do intruso", "Aplicar mitigações de prevenção", "Executar contenção de incidente de intrusão"],
      "competencias": ["Prevenção de incidentes de reunião", "Resposta a incidentes de segurança"],
      "dificuldade": "intermediario",
      "relacoes": ["m3-u5-t1-s2 (Compartilhamento acidental de tela)", "m3-u5-t1-s3 (Gravação não autorizada e vazamento)"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A integração de segurança da informação e LGPD faz parte do conteúdo programático. A classificação reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Zoombombing é a entrada de pessoas não autorizadas em uma reunião online para exibir conteúdo ofensivo, interromper ou coletar informação. Os vetores típicos são link publicado em redes sociais, ausência de senha, lobby desativado e configurações permissivas. Mitigações básicas: usar senha, ativar o lobby, exigir login, restringir o compartilhamento de tela ao anfitrião e impedir que participantes entrem antes do anfitrião.",
      "intermediario": "O aluno associa cada vetor de entrada à mitigação correspondente e configura uma reunião resiliente: senha + lobby + login obrigatório + restrição de tela ao anfitrião + bloqueio de entrada antecipada + bloqueio da reunião após o início + monitoramento ativo por coanfitriões. Diante de uma intrusão, remove o intruso, bloqueia novas entradas, encerra e recria a reunião com link novo quando necessário e registra o ocorrido.",
      "avancado": "O aluno conduz a contenção completa de um incidente de intrusão: remoção do intruso, bloqueio de novas entradas, encerramento e recriação com link novo, documentação do ocorrido e, se houver vazamento de dados, comunicação conforme a política institucional e a LGPD. Avalia se reuniões recorrentes com endereço fixo divulgado precisam de rotação de link e revisa permissões de tela e entrada.",
      "especialista": "O aluno arquiteta a política institucional de reuniões seguras, definindo controles padrão (senha, lobby, login, tela restrita), procedimentos de contenção e registro de incidentes, rotação de links de reuniões recorrentes, treinamento de anfitriões e coanfitriões, e integração com a resposta a incidentes de dados pessoais da LGPD quando houver vazamento."
    },
    "comparacoes": [
      {
        "tema": "Reunião aberta x reunião com lobby",
        "a": {
          "rotulo": "Reunião aberta",
          "texto": "Aceita qualquer pessoa que possua o link, sem aprovação prévia do anfitrião."
        },
        "b": {
          "rotulo": "Reunião com lobby",
          "texto": "Exige que cada participante seja admitido pelo anfitrião ou coanfitrião antes de entrar."
        },
        "diferencaGabarito": "A reunião aberta expõe a reunião a qualquer pessoa com o link; a reunião com lobby filtra o acesso, reduzindo drasticamente o risco de intrusão por link divulgado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Só reuniões públicas são invadidas.",
        "porqueErrada": "Links internos também vazam e reuniões sem controles podem ser alvo mesmo sem divulgação pública.",
        "versaoCorreta": "Aplicar controles (senha, lobby, login, tela restrita) em todas as reuniões, internas ou públicas."
      },
      {
        "afirmacaoEquivocada": "Expulsar o intruso encerra o incidente.",
        "porqueErrada": "O intruso pode ter coletado informações ou gravado antes de ser removido, e pode tentar reentrar.",
        "versaoCorreta": "Além de expulsar, bloquear novas entradas, avaliar o impacto, documentar o incidente e, se houver vazamento, comunicar conforme a política e a LGPD."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["zoombombing", "vetor", "senha", "lobby", "login", "contenção", "registro"],
      "regras": ["link divulgado sem controle = risco", "senha + lobby + restrição de tela = mitigação"],
      "comparacoes": ["reunião aberta aceita qualquer pessoa com o link; reunião com lobby exige aprovação — muda o risco"],
      "fluxos": ["intrusão detectada → remover intruso → bloquear novas entradas → encerrar e recriar com link novo → registrar o ocorrido"],
      "excecoes": ["reuniões internas também podem ser alvo de intrusão"],
      "palavrasChave": ["intrusão", "link", "lobby", "remoção", "incidente"],
      "checklist": ["Defino intrusão?", "Cito vetores?", "Aplico mitigações?", "Executo contenção?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que é zoombombing e como ocorre em uma reunião online aberta sem controles de acesso?",
        "dados": "Reunião aberta com link divulgado em rede social, sem senha e sem lobby, invadida por desconhecidos que compartilharam conteúdo ofensivo.",
        "conceitos": ["zoombombing", "vetor de entrada"],
        "estrategia": "Explicar que zoombombing é a intrusão não autorizada em reunião online e identificar o vetor: link divulgado sem controles de acesso (senha, lobby).",
        "execucao": ["Identificar que o link foi divulgado publicamente.", "Confirmar a ausência de senha e de lobby.", "Relatar que desconhecidos entraram e compartilharam conteúdo ofensivo.", "Concluir que o vetor foi o link sem controle de acesso."],
        "resultado": "Intrusão não autorizada em reunião online, geralmente para compartilhar conteúdo ofensivo ou perturbar.",
        "justificativa": "A causa raiz é o link divulgado sem controles de acesso; sem senha e sem lobby, qualquer pessoa com o link pode entrar e perturbar a reunião.",
        "errosFrequentes": ["Achar que apenas reuniões públicas são invadidas.", "Confundir zoombombing com problema de conexão de rede."],
        "variacao": "Mudar para uma reunião interna com link vazado por e-mail e reaplicar a identificação do vetor de entrada e a necessidade de controles."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como configurar uma reunião online institucional com dados sensíveis para prevenir zoombombing?",
        "dados": "Reunião institucional com dados sensíveis; plataforma que oferece senha, lobby, login obrigatório, restrição de tela ao anfitrião e bloqueio de entrada antecipada.",
        "conceitos": ["senha", "lobby", "login obrigatório", "restrição de compartilhamento de tela"],
        "estrategia": "Aplicar as mitigações combinadas: definir senha, ativar lobby, exigir login, restringir o compartilhamento de tela ao anfitrião, impedir entrada antes do anfitrião e bloquear a reunião após o início.",
        "execucao": ["Definir uma senha de acesso à reunião.", "Ativar o lobby (sala de espera) para aprovação de participantes.", "Exigir login obrigatório antes de entrar.", "Restringir o compartilhamento de tela ao anfitrião.", "Impedir que participantes entrem antes do anfitrião e bloquear a reunião após o início."],
        "resultado": "Não publicar links publicamente; usar senha e lobby; exigir login; restringir compartilhamento de tela; monitorar participantes.",
        "justificativa": "A combinação de senha, lobby e login reduz a chance de entrada não autorizada; restringir tela e bloquear entrada antecipada limita o abuso caso alguém entre indevidamente.",
        "errosFrequentes": ["Achar que a senha sozinha é suficiente, ignorando que ela pode vazar com o link.", "Esquecer de ativar o lobby e permitir entrada livre com o link."],
        "variacao": "Mudar para uma reunião recorrente com endereço fixo divulgado e reaplicar as mesmas mitigações, acrescentando a rotação periódica do link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A senha sozinha impede qualquer invasão de reunião online sem outros controles.'",
        "dados": "Reunião com senha definida, mas o link contendo a senha foi divulgado publicamente em rede social e o lobby está desativado.",
        "conceitos": ["senha", "vazamento de link", "lobby"],
        "estrategia": "Mostrar que a senha não é suficiente quando o próprio link (com senha embutida) é divulgado e não há lobby para filtrar quem entra.",
        "execucao": ["Observar que a reunião tem senha.", "Verificar que o link com senha embutida foi divulgado publicamente.", "Confirmar que o lobby está desativado.", "Concluir que qualquer pessoa com o link entra, pois a senha não protege contra divulgação do próprio link."],
        "resultado": "Errado. A senha vaza com o link; é necessário combinar senha e lobby (e outros controles).",
        "justificativa": "A leitura ingênua confunde ter senha com estar protegido: se o link contendo a senha é público e não há lobby, a senha não impede a entrada de não autorizados.",
        "errosFrequentes": ["Achar que a senha sozinha é suficiente para proteger a reunião.", "Não considerar que o link com senha embutida pode ser divulgado."],
        "variacao": "Mudar para uma reunião com senha e lobby ativos, mas com compartilhamento de tela liberado para todos, e reaplicar a análise de quais controles faltam."
      }
    ]
  },
  "m3-u5-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A exposição acidental por compartilhamento de tela é causa de incidente em concursos de TI por unir segurança da informação e LGPD. Mostrar dados não pretendidos durante uma reunião pode vazá-los para todos os participantes. O candidato deve reconhecer como ocorre, identificar casos típicos, aplicar mitigações (janela específica, modo não perturbe, fechar abas sensíveis, revisar a tela) e adotar uma rotina de prevenção.",
      "preRequisitos": ["Unidade 4.2 (compartilhamento de tela)", "Noção de dado pessoal e dado sensível", "Controles de reunião online (compartilhamento de tela)" ],
      "objetivosObservaveis": ["Explicar como ocorre a exposição acidental", "Citar casos típicos de exposição", "Aplicar mitigações de prevenção", "Adotar uma rotina pré-compartilhamento"],
      "competencias": ["Prevenção de vazamento", "Condução segura de reunião"],
      "dificuldade": "intermediario",
      "relacoes": ["m3-u5-t1-s1 (Zoombombing e intrusão em reuniões)", "m3-u5-t1-s3 (Gravação não autorizada e vazamento)"],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A exposição acidental por compartilhamento de tela faz parte do conteúdo programático. A classificação reflete a centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "A exposição acidental ocorre quando o compartilhamento de tela revela informação que não se pretendia mostrar. Casos típicos: compartilhar a tela inteira e uma notificação exibir dado pessoal, manter abas com documentos confidenciais visíveis, mostrar uma janela de planilha com dados de terceiros e revelar o histórico de navegação ou a área de trabalho com arquivos sensíveis. A causa raiz costuma ser a combinação de notificações ativas com o compartilhamento de tela inteira.",
      "intermediario": "O aluno identifica as causas da exposição acidental e aplica mitigações: compartilhar apenas a janela ou o aplicativo específico, ativar o modo não perturbe ou desativar notificações, fechar abas e programas sensíveis antes, revisar o que está visível e encerrar o compartilhamento ao terminar. Em ambiente institucional, usar uma conta de trabalho separada reduz a chance de aparecer conteúdo pessoal.",
      "avancado": "O aluno estabelece uma rotina pré-compartilhamento padronizada e revisa um incidente de exposição acidental, propondo controles técnicos e procedimentais. Avalia janela específica versus tela inteira, notificações ativas versus modo não perturbe, e decide quando encerrar o compartilhamento. Considera exceções como contas separadas para reduzir exposição pessoal e documenta o ocorrido conforme a política institucional.",
      "especialista": "O aluno arquiteta a política institucional de condução segura de reuniões, definindo o padrão de prevenção (janela específica, notificações off, revisão de tela, conta de trabalho separada), procedimentos de revisão de incidentes de exposição, treinamento de apresentadores e integração com a resposta a incidentes de dados pessoais da LGPD quando houver vazamento de dados de terceiros."
    },
    "comparacoes": [
      {
        "tema": "Compartilhar aplicativo x tela inteira",
        "a": {
          "rotulo": "Compartilhar aplicativo",
          "texto": "Mostra apenas a janela do aplicativo selecionado, reduzindo a superfície de exposição."
        },
        "b": {
          "rotulo": "Compartilhar tela inteira",
          "texto": "Mostra tudo o que aparece na tela, incluindo notificações, abas e arquivos, ampliando a superfície de exposição."
        },
        "diferencaGabarito": "Compartilhar o aplicativo restringe o que é visto; compartilhar a tela inteira expõe notificações, abas e arquivos, aumentando o risco de vazamento acidental."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Compartilhar só a tela do aplicativo em uso é o mais seguro.",
        "porqueErrada": "Ainda pode exibir janelas sobrepostas e não elimina notificações nem abas sensíveis em segundo plano.",
        "versaoCorreta": "Compartilhar a janela específica, silenciar notificações e revisar a tela antes de iniciar."
      },
      {
        "afirmacaoEquivocada": "Fechar a aba sensível resolve tudo.",
        "porqueErrada": "Notificações e outros programas podem continuar vazando dados mesmo com a aba fechada.",
        "versaoCorreta": "Silenciar notificações, revisar a tela completa e encerrar o compartilhamento ao terminar."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["exposição acidental", "notificação", "tela inteira", "janela específica", "não perturbe"],
      "regras": ["janela específica + notificações off + revisão = prevenção", "encerrar o compartilhamento ao terminar a reunião"],
      "comparacoes": ["exposição intencional é deliberada; exposição acidental decorre de falta de controle — a prevenção difere"],
      "fluxos": ["fechar abas sensíveis → desativar notificações → compartilhar janela específica → revisar tela → encerrar compartilhamento"],
      "excecoes": ["contas separadas reduzem exposição pessoal em ambiente institucional"],
      "palavrasChave": ["vazamento", "notificação", "aba", "tela", "revisão"],
      "checklist": ["Explico como ocorre?", "Cito casos?", "Aplico mitigações?", "Adoto rotina?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Como ocorre a exposição acidental por notificação durante o compartilhamento de tela?",
        "dados": "Durante uma reunião, o anfitrião compartilha a tela inteira e uma notificação de mensagem exibe um dado pessoal de cliente para todos os participantes.",
        "conceitos": ["exposição acidental", "notificação"],
        "estrategia": "Explicar que a exposição acontece porque o compartilhamento de tela inteira mostra as notificações pop-up para todos, revelando dados não pretendidos.",
        "execucao": ["Identificar que a tela inteira está sendo compartilhada.", "Observar que as notificações estão ativas.", "Constatar que uma notificação exibe dado pessoal de cliente.", "Concluir que a causa raiz é tela inteira com notificações ativas."],
        "resultado": "Ao compartilhar tela inteira, notificações pop-up exibem conteúdo para todos os participantes.",
        "justificativa": "A tela inteira exibe tudo, incluindo notificações; portanto o dado pessoal da notificação ficou visível para todos os participantes da reunião.",
        "errosFrequentes": ["Achar que notificações não aparecem para quem vê a tela compartilhada.", "Confundir exposição acidental com invasão externa à reunião."],
        "variacao": "Mudar para uma apresentação em que uma aba com documento confidencial fica visível e reaplicar a identificação do caso de exposição acidental."
      },
      {
        "tipo": "aplicacao",
        "problema": "Quais passos seguir antes de compartilhar tela em uma reunião institucional com dados sensíveis?",
        "dados": "Reunião com dados de clientes; o apresentador precisa mostrar uma planilha e tem abas com documentos confidenciais, notificações ativas e conta pessoal logada.",
        "conceitos": ["janela específica", "não perturbe", "conta de trabalho separada"],
        "estrategia": "Aplicar a rotina de prevenção: fechar abas e programas sensíveis, desativar notificações (modo não perturbe), compartilhar apenas a janela da planilha, revisar o que está visível e usar conta de trabalho separada.",
        "execucao": ["Fechar abas e programas sensíveis antes da reunião.", "Ativar o modo não perturbe ou desativar notificações.", "Compartilhar apenas a janela da planilha, não a tela inteira.", "Revisar o que está visível para os participantes.", "Encerrar o compartilhamento ao terminar."],
        "resultado": "Fechar abas sensíveis, desativar notificações, compartilhar apenas janela necessária, verificar com participantes.",
        "justificativa": "Cada passo remove uma fonte de exposição: abas fechadas evitam documentos visíveis, notificações off evitam pop-ups, janela específica restringe o que é mostrado e conta de trabalho separada reduz conteúdo pessoal.",
        "errosFrequentes": ["Achar que fechar a aba sensível resolve tudo, ignorando notificações e outros programas.", "Esquecer de encerrar o compartilhamento ao terminar a reunião."],
        "variacao": "Mudar para uma apresentação de área de trabalho com histórico de navegação sensível e reaplicar a mesma rotina de prevenção."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Notificações não aparecem para quem vê a tela compartilhada na reunião.'",
        "dados": "Apresentador compartilha a tela inteira com notificações ativas; os participantes veem uma notificação pop-up com dado de cliente durante a reunião.",
        "conceitos": ["notificação", "tela inteira", "recuperabilidade"],
        "estrategia": "Mostrar que a afirmação é falsa: as notificações aparecem na tela compartilhada quando estão ativas, expondo conteúdo para todos os participantes.",
        "execucao": ["Identificar que a tela inteira está compartilhada.", "Verificar que as notificações estão ativas.", "Constatar que uma notificação com dado pessoal é visível para os participantes.", "Concluir que a afirmação está errada porque notificações aparecem na tela compartilhada."],
        "resultado": "Errado. Notificações aparecem na tela compartilhada se estiverem ativas.",
        "justificativa": "A leitura ingênua pressupõe que notificações são ocultas durante o compartilhamento; na verdade, a tela inteira exibe as notificações pop-up para todos os participantes.",
        "errosFrequentes": ["Achar que notificações não aparecem para quem vê a tela compartilhada.", "Não desativar notificações antes de compartilhar a tela inteira."],
        "variacao": "Mudar para compartilhamento de janela específica com notificações ativas e reaplicar a conclusão de que janela específica reduz, mas não elimina, a exposição por notificação."
      }
    ]
  }
};
