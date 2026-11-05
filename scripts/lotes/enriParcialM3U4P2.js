const enriParcialM3U4P2 = {
  "m3-u4-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A autenticação é o primeiro filtro de ingresso na reunião institucional, antes do lobby e da moderação. A prova descreve configurações — link divulgado, domínio restrito, login exigido — e cobra o efeito de cada uma sobre a intrusão e a fricção de convidados externos.",
      "preRequisitos": [
        "Noção de identidade digital: conta, credencial e perfil",
        "Função do lobby como camada de controle de ingresso"
      ],
      "objetivosObservaveis": [
        "Citar os mecanismos de autenticação: senha, link com token, login obrigatório, domínio restrito e sala pessoal com senha",
        "Explicar o que o login obrigatório garante quanto à identidade verificada",
        "Restringir o acesso ao domínio organizacional quando não houver convidados externos",
        "Aplicar boas práticas: não publicar links em canais abertos e rotacionar senhas de salas recorrentes"
      ],
      "competencias": [
        "Controle de acesso a ambientes colaborativos",
        "Configuração segura de reuniões conforme o público",
        "Ponderação entre segurança e fricção de acesso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t1-s1 (Lobby e sala de espera) — retém quem já passou pela autenticação",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — atua depois do ingresso",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — incidente que a autenticação dificulta",
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — fundamentos gerais de autenticação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Aparece em afirmações de certo/errado que associam login obrigatório, domínio restrito e divulgação de link ao risco de intrusão; a classificação é estimativa pedagógica de adequação ao conteúdo programático, não levantamento estatístico."
      }
    },
    "niveis": {
      "iniciante": "Autenticação: senha da reunião; link com token; login obrigatório (apenas usuários autenticados da organização); domínio restrito; sala pessoal com senha. Boas práticas institucionais: exigir login para reuniões internas; restringir a domínio organizacional; não publicar links em canais abertos; rotacionar senhas de salas recorrentes. A disponibilidade de cada método varia por plataforma e plano.",
      "intermediario": "Escolher o mecanismo conforme o público: sem externos, login obrigatório e domínio restrito bastam; com externos, flexibiliza-se o domínio e compensa-se com lobby, senha e aprovação nominal. Mais exigência, menos intrusão e mais fricção.",
      "avancado": "Combinar camadas: o domínio filtra contas, o login vincula identidade verificada e o lobby dá ao anfitrião a decisão final sobre cada entrada. A senha e o link protegem o convite; publicá-lo em canal aberto anula essa proteção.",
      "especialista": "Desenhar a política por tipo de reunião: recorrentes de equipe com login e domínio; encontros com parceiros com login, lobby e lista de convidados; eventos abertos com registro prévio. Prever rotação de senhas e revisão periódica das exceções."
    },
    "comparacoes": [
      {
        "tema": "Link com token versus senha de reunião",
        "a": {
          "rotulo": "Link com token",
          "texto": "Endereço exclusivo e difícil de adivinhar, que perde o valor protetivo ao ser encaminhado ou publicado."
        },
        "b": {
          "rotulo": "Senha de reunião",
          "texto": "Segredo compartilhado, informado a cada participante e válido nas reuniões seguintes se não for trocado."
        },
        "diferencaGabarito": "O token protege pela unicidade do endereço; a senha, pela confidencialidade. Vazou o link, gera-se outro; vazou a senha, é preciso trocá-la."
      },
      {
        "tema": "Login obrigatório versus acesso livre",
        "a": {
          "rotulo": "Login obrigatório",
          "texto": "Somente contas autenticadas ingressam, vinculando a participação a uma identidade verificada."
        },
        "b": {
          "rotulo": "Acesso livre",
          "texto": "Qualquer pessoa com o convite entra, inclusive anônimos, sem comprovação de vínculo."
        },
        "diferencaGabarito": "O login habilita rastreabilidade e bloqueia anônimos; o acesso livre facilita a intrusão, ainda que reduza a fricção de entrada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O link secreto da reunião dispensa qualquer autenticação adicional.",
        "porqueErrada": "Links são encaminhados, copiados e publicados sem controle; a unicidade do endereço não verifica identidade alguma.",
        "versaoCorreta": "Combine o link com login obrigatório, senha ou lobby, para que a entrada dependa de identidade verificada e aprovação do anfitrião."
      },
      {
        "afirmacaoEquivocada": "Reunião interna pode aceitar qualquer conta autenticada, desde que não seja anônima.",
        "porqueErrada": "Conta autenticada de outro domínio é desconhecida para a organização; admiti-la expõe informações internas.",
        "versaoCorreta": "Sem convidados externos, restrinja o ingresso ao domínio organizacional, admitindo apenas contas da própria instituição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Autenticação: verificação da identidade do participante antes de conceder acesso",
        "Link com token: endereço exclusivo de convite, cuja proteção se perde quando divulgado",
        "Login obrigatório: ingresso apenas com conta autenticada, vinculada a uma identidade",
        "Domínio restrito: admissão apenas de contas do domínio organizacional",
        "Sala pessoal com senha: espaço recorrente cujo segredo deve ser rotacionado"
      ],
      "regras": [
        "Quanto mais forte a exigência de autenticação, menor a intrusão e maior a fricção para externos",
        "Reunião interna sem convidados externos deve restringir o ingresso ao domínio organizacional",
        "Não publicar links em canais abertos; rotacionar senhas de salas recorrentes"
      ],
      "comparacoes": [
        "Login obrigatório vincula identidade verificada; acesso livre admite anônimos e facilita a intrusão"
      ],
      "fluxos": [
        "Camadas de ingresso: convite protegido (link ou senha) → autenticação (login e domínio) → lobby com aprovação do anfitrião"
      ],
      "excecoes": [
        "A disponibilidade de cada mecanismo varia por plataforma e plano, devendo ser confirmada na documentação oficial"
      ],
      "palavrasChave": [
        "identidade",
        "domínio",
        "token",
        "login obrigatório",
        "fricção",
        "rotação de senha"
      ],
      "checklist": [
        "Cito os cinco mecanismos de autenticação e o efeito de cada um?",
        "Explico por que o link divulgado deixa de ser proteção?",
        "Restrinjo ao domínio quando não há convidados externos?",
        "Rotaciono senhas de salas recorrentes e combino autenticação com lobby?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que exigir login obrigatório para reuniões internas, se o convite já é enviado apenas a servidores da equipe?",
        "dados": "Reunião de equipe semanal, sem externos; convites por e-mail institucional; plataforma permite login obrigatório, domínio restrito ou acesso livre.",
        "conceitos": [
          "Login obrigatório",
          "Domínio restrito"
        ],
        "estrategia": "Comparar quem pode entrar em cada configuração e o que a identidade verificada acrescenta ao controle do acesso.",
        "execucao": [
          "Mapear o público: apenas servidores com conta no domínio da organização.",
          "Avaliar o acesso livre: qualquer pessoa com o convite ingressa, inclusive quem o recebeu por encaminhamento.",
          "Avaliar o login obrigatório: apenas contas autenticadas ingressam, sem anônimos e sem fricção para quem já tem conta."
        ],
        "resultado": "Garante que apenas pessoas autenticadas da organização entrem, reduzindo acesso anônimo e intrusão.",
        "justificativa": "A entrada passa a depender de identidade autenticada, e não da posse do convite. Em reunião interna todos os legitimados já têm conta, de modo que a exigência filtra intrusos sem prejudicar participantes.",
        "errosFrequentes": [
          "Supor que o convite enviado a poucos dispensa autenticação, ignorando o encaminhamento.",
          "Confundir login obrigatório com domínio restrito: um verifica identidade; o outro limita as contas ao domínio."
        ],
        "variacao": "Suponha que um fornecedor externo precise participar da mesma reunião semanal: o login permanece, mas o domínio deve ser flexibilizado, compensando com lobby e aprovação nominal."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma reunião tratará dados pessoais de servidores e se repete semanalmente com o mesmo grupo. Que camadas de proteção configurar?",
        "dados": "Sala recorrente de comissão, pauta com dados pessoais; apenas membros do domínio; a plataforma permite login, domínio restrito, lobby, senha, restrição de tela e gravação controlada.",
        "conceitos": [
          "Domínio restrito",
          "Defesa em camadas"
        ],
        "estrategia": "Sobrepor os controles para que cada camada cubra a falha da anterior: filtro de contas, identidade verificada, aprovação de entrada e proteção do exibido.",
        "execucao": [
          "Exigir login e restringir a sala ao domínio, pois não há convidados externos.",
          "Ativar o lobby, reservando ao anfitrião a aprovação final de cada entrada.",
          "Definir senha com rotação periódica, restringir o compartilhamento de tela ao anfitrião e tratar a gravação como ato controlado."
        ],
        "resultado": "Login obrigatório, domínio restrito, lobby, senha, compartilhamento de tela restrito ao anfitrião e gravação controlada.",
        "justificativa": "Nenhuma camada isolada cobre todos os vetores: o domínio filtra contas, o login verifica identidade, o lobby decide caso a caso e as restrições de tela e gravação limitam o que se propaga. A combinação é o gabarito.",
        "errosFrequentes": [
          "Escolher apenas uma camada (por exemplo, a senha) e considerar a reunião protegida.",
          "Manter domínio restrito em reunião que passa a receber externos, bloqueando participantes legítimos."
        ],
        "variacao": "Se a comissão passar a receber um auditor externo mensalmente, qual camada cede? Abre-se o domínio para o convidado, mantendo login, lobby e aprovação nominal."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma: 'Publicar o link da reunião em rede social é seguro, pois apenas quem tiver o endereço conseguirá entrar.' Avalie.",
        "dados": "Reunião administrativa às 14h; link publicado às 9h em perfil público; sem senha e com lobby desativado; a equipe considera o endereço 'difícil de adivinhar'.",
        "conceitos": [
          "Link com token",
          "Divulgação de convite"
        ],
        "estrategia": "Submeter a afirmação ao critério de quem controla a propagação do link: publicado em rede social, o endereço sai do controle da organização.",
        "execucao": [
          "Observar que a publicação transfere o convite para canal sem restrição de público.",
          "Verificar que, sem senha e sem lobby, quem obtém o link entra sem verificação alguma.",
          "Concluir que a unicidade do endereço não é autenticação: a ameaça é a divulgação, não a adivinhação."
        ],
        "resultado": "Errado. Publicar links abertamente permite acesso de qualquer pessoa; compartilhe por canais seguros e restritos.",
        "justificativa": "A leitura ingênua equipara 'difícil de adivinhar' a 'seguro', mas a ameaça é a divulgação: tornado público, o link alcança desconhecidos sem barreira adicional, pois senha e lobby estavam desativados.",
        "errosFrequentes": [
          "Avaliar a segurança pela dificuldade de adivinhar o endereço, e não pelo controle da propagação.",
          "Subestimar o alcance de publicações abertas, tratando o interesse em entrar como raro."
        ],
        "variacao": "Mude o canal: o link é enviado por e-mail a uma lista ampla, com endereços externos no campo de cópia visível. A estrutura do erro é a mesma — divulgação sem controle."
      }
    ]
  },
  "m3-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Compartilhar a tela é a ação que mais expõe conteúdo não intencional em uma reunião: notificações, abas e arquivos entram no quadro junto com o que se pretendia mostrar. A prova cobra o risco da tela inteira, os controles preventivos e o papel do anfitrião.",
      "preRequisitos": [
        "Noção de reunião online e de seus papéis (anfitrião e participantes)",
        "Distinção entre informação pública e informação sensível"
      ],
      "objetivosObservaveis": [
        "Identificar o que o compartilhamento expõe além do conteúdo pretendido",
        "Explicar por que a tela inteira amplia o risco frente à janela específica",
        "Aplicar os controles: janela específica, modo não perturbe e revisão prévia",
        "Encerrar o compartilhamento ao término da exibição"
      ],
      "competencias": [
        "Condução segura de compartilhamento de tela",
        "Prevenção de vazamento em ambientes colaborativos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u5-t1-s2 (Compartilhamento acidental de tela) — estudo de caso do risco tratado aqui",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — restringir quem compartilha é ação de moderação",
        "m3-u4-t2-s2 (Coautoria e documentos compartilhados em reunião) — colaboração com exposição controlada",
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas) — consequência do vazamento por tela"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Surge em afirmações de certo/errado sobre exposição acidental e em questões que pedem a prática recomendada ao apresentar dados sensíveis. A classificação é estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Compartilhamento de tela: exibir conteúdo do dispositivo aos participantes. Riscos: exposição acidental de dados sensíveis (notificações, abas, arquivos), compartilhamento de tela inteira em vez de janela específica, esquecer de parar o compartilhamento. Controles: compartilhar apenas janela/aplicativo específico; desativar notificações; usar modo 'não perturbe'; verificar antes de compartilhar; parar ao terminar. Anfitrião pode restringir quem compartilha.",
      "intermediario": "Distinguir os modos: a tela inteira exibe tudo o que aparece no monitor, incluindo notificações e abas não relacionadas; a janela ou o aplicativo específico restringe a exibição ao conteúdo escolhido. Fechar programas sensíveis e silenciar notificações reduz a superfície exposta.",
      "avancado": "Montar o procedimento pré-compartilhamento: fechar abas e aplicativos sensíveis, ativar o modo não perturbe, selecionar a janela exata, revisar o que ficará visível e encerrar ao término. Com dados sensíveis, o anfitrião restringe quem pode compartilhar.",
      "especialista": "Diante de um vazamento por tela, reconstruir a falha: o que foi exibido além do previsto, qual controle faltou (janela específica, silenciamento, revisão ou encerramento) e como o anfitrião poderia limitar a permissão. Ajustar o procedimento institucional para impedir a repetição."
    },
    "comparacoes": [
      {
        "tema": "Tela inteira versus janela específica",
        "a": {
          "rotulo": "Tela inteira",
          "texto": "Exibe todo o conteúdo visível do dispositivo: notificações, abas, janelas sobrepostas e barras de ferramentas."
        },
        "b": {
          "rotulo": "Janela específica",
          "texto": "Exibe apenas o aplicativo escolhido, mantendo o restante da área de trabalho fora da transmissão."
        },
        "diferencaGabarito": "O modo define a superfície de exposição: quanto mais restrita a janela, menor a chance de exibir conteúdo não intencional."
      },
      {
        "tema": "Notificações ativas versus modo não perturbe",
        "a": {
          "rotulo": "Notificações ativas",
          "texto": "Alertas surgem sobre a tela compartilhada no instante em que chegam, exibindo remetente e trecho do conteúdo."
        },
        "b": {
          "rotulo": "Modo não perturbe",
          "texto": "Suprime as notificações durante a reunião, impedindo que conteúdo privado apareça sobre a apresentação."
        },
        "diferencaGabarito": "O controle elimina o vetor: silenciar notificações antes de compartilhar é mais confiável do que reagir ao alerta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Compartilhar a tela inteira é mais prático e, por isso, seguro o suficiente.",
        "porqueErrada": "A praticidade não reduz a exposição: a tela inteira transmite notificações, abas e arquivos que não fazem parte da apresentação.",
        "versaoCorreta": "Compartilhe a janela ou o aplicativo específico, mantendo o restante do ambiente fora da transmissão."
      },
      {
        "afirmacaoEquivocada": "Notificações não aparecem durante o compartilhamento de tela.",
        "porqueErrada": "Notificações surgem sobre a área compartilhada no instante em que chegam, exibindo remetente e conteúdo a todos.",
        "versaoCorreta": "Ative o modo não perturbe ou desative as notificações antes de compartilhar, suprimindo o vetor de exposição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Compartilhamento de tela: exibição do conteúdo do dispositivo aos participantes",
        "Janela ou aplicativo específico: modo que limita a transmissão ao programa escolhido",
        "Modo não perturbe: supressão temporária de notificações durante a reunião",
        "Permissão do anfitrião: restrição de quem pode compartilhar tela",
        "Superfície de exposição: tudo o que aparece junto ao conteúdo pretendido"
      ],
      "regras": [
        "Compartilhar janela ou aplicativo específico em vez da tela inteira quando houver dados sensíveis",
        "Silenciar notificações e fechar abas e programas sensíveis antes de iniciar",
        "Encerrar explicitamente o compartilhamento ao terminar a exibição"
      ],
      "comparacoes": [
        "Tela inteira amplia a superfície de exposição; janela específica restringe a transmissão ao pretendido"
      ],
      "fluxos": [
        "Procedimento seguro: revisar a área de trabalho → fechar conteúdo sensível → silenciar notificações → compartilhar a janela exata → encerrar ao fim"
      ],
      "excecoes": [
        "A permissão para compartilhar pode ser restrita pelo anfitrião, concentrando a ação em pessoas confiáveis"
      ],
      "palavrasChave": [
        "exposição acidental",
        "tela inteira",
        "janela específica",
        "não perturbe",
        "encerramento"
      ],
      "checklist": [
        "Identifico tudo o que o compartilhamento pode exibir além do pretendido?",
        "Explico o risco adicional da tela inteira?",
        "Silencio notificações e fecho conteúdo sensível antes de compartilhar?",
        "Encerro o compartilhamento ao terminar?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença prática entre compartilhar a tela inteira e compartilhar uma janela específica em uma reunião online?",
        "dados": "Servidor apresenta uma planilha de despesas; no mesmo monitor há navegador com webmail pessoal, mensageiro com notificações ativas e janelas sobrepostas.",
        "conceitos": [
          "Tela inteira",
          "Janela específica"
        ],
        "estrategia": "Comparar o que fica visível em cada modo: tudo o que o monitor exibe versus apenas o aplicativo escolhido.",
        "execucao": [
          "Inventariar o visível no monitor: planilha, webmail, mensageiro e janelas sobrepostas.",
          "Verificar o modo tela inteira: todo o inventário é transmitido.",
          "Verificar o modo janela específica: apenas a planilha é transmitida, reduzindo a exposição."
        ],
        "resultado": "Tela inteira expõe tudo (notificações, abas); janela específica expõe apenas o aplicativo escolhido, reduzindo risco.",
        "justificativa": "A transmissão da tela inteira acompanha tudo o que aparece no monitor, inclusive o não pretendido; a janela específica limita o sinal ao aplicativo selecionado. A diferença é de escopo, não de habilidade do apresentador.",
        "errosFrequentes": [
          "Tratar o compartilhamento como exibição apenas do pretendido, ignorando o que surge ao lado.",
          "Atribuir o risco ao aplicativo de reunião, e não à escolha do modo."
        ],
        "variacao": "Substitua a planilha por um relatório aberto em aba do navegador: o modo correto passa a ser compartilhar aquela janela, e a análise de exposição se repete."
      },
      {
        "tipo": "aplicacao",
        "problema": "Antes de compartilhar a tela em reunião institucional com dados sensíveis, que verificações e ajustes o apresentador deve executar?",
        "dados": "Reunião de prestação de contas; slides em aplicativo próprio; mensageiro com notificações ativas; abas de banco e webmail abertas; anfitrião restringiu quem compartilha.",
        "conceitos": [
          "Modo não perturbe",
          "Revisão prévia"
        ],
        "estrategia": "Aplicar o procedimento pré-compartilhamento na ordem que elimina cada vetor: fechar o sensível, silenciar alertas, escolher a janela exata e revisar.",
        "execucao": [
          "Fechar as abas de banco e webmail e encerrar conversas sensíveis do mensageiro.",
          "Ativar o modo não perturbe ou desativar as notificações do sistema.",
          "Compartilhar a janela do aplicativo de slides, revisar o primeiro slide e encerrar ao término."
        ],
        "resultado": "Fechar abas/arquivos sensíveis, desativar notificações, compartilhar apenas a janela necessária e confirmar com participantes o que será exibido.",
        "justificativa": "Cada passo neutraliza um vetor: abas fechadas não surgem por descuido, notificações silenciadas não aparecem sobre a apresentação e a janela exata impede a transmissão do restante do monitor. Revisão e encerramento completam o ciclo.",
        "errosFrequentes": [
          "Escolher tela inteira por praticidade, confiando em fechar rapidamente o que não deve aparecer.",
          "Esquecer o mensageiro corporativo, cujas notificações surgem sobre a área compartilhada."
        ],
        "variacao": "Mude o cenário para demonstração de sistema no navegador com login em tela inicial: acrescenta-se verificar credenciais visíveis e histórico de endereços antes de transmitir."
      },
      {
        "tipo": "erro",
        "problema": "Um apresentador afirma: 'Compartilhar a tela inteira é sempre seguro, pois controlo o mouse e posso fechar o que não deve aparecer.' Avalie.",
        "dados": "Durante a apresentação, chega mensagem pessoal; a notificação surge sobre a tela transmitida com remetente e trecho do texto; há aba de banco minimizada no navegador.",
        "conceitos": [
          "Exposição acidental",
          "Controle do apresentador"
        ],
        "estrategia": "Testar a afirmação contra o que o apresentador não controla: o momento e o conteúdo das notificações, que surgem sem ação dele.",
        "execucao": [
          "Identificar o pressuposto: a segurança dependeria só da ação deliberada do apresentador.",
          "Confrontar com o evento real: a notificação chega sozinha e é exibida a todos, como o conteúdo minimizado.",
          "Concluir que o controle manual não substitui os controles preventivos de escopo e silenciamento."
        ],
        "resultado": "Errado. Pode expor dados sensíveis; prefira compartilhamento de janela específica.",
        "justificativa": "A resposta plausível assume risco gerido em tempo real, mas o vetor aparece justamente quando o apresentador não age: notificações automáticas e conteúdo em segundo plano. A recomendação técnica é reduzir o escopo transmitido, não confiar na reação manual.",
        "errosFrequentes": [
          "Igualar segurança a capacidade de reagir rápido, em vez de eliminar o vetor.",
          "Esquecer que a tela inteira transmite também o minimizado e o sobreposto."
        ],
        "variacao": "Suponha que a notificação contenha dado pessoal de servidor: além do modo de compartilhamento, cabe comunicar o incidente e revisar o procedimento de apresentação."
      }
    ]
  }
};
