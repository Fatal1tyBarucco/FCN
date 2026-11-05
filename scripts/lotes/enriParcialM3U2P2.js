const enriParcialM3U2P2 = {
  "m3-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Reuniões sem controle de acesso concentram três riscos: entrada de não convidados, exibição indevida de tela e registro não autorizado. A prova cobra a função de cada recurso de moderação — lobby, senha, silenciar todos, restrição de compartilhamento — e o princípio de que reunião mais sensível exige configuração mais restritiva.",
      "preRequisitos": [
        "Noção de reunião online e de sessão com papéis definidos",
        "Distinção entre anfitrião, coanfitrião e participante comum"
      ],
      "objetivosObservaveis": [
        "Explicar a função do lobby e a diferença em relação à senha da reunião",
        "Descrever as ações de moderação disponíveis ao anfitrião e ao coanfitrião",
        "Indicar os controles de áudio, vídeo e compartilhamento de tela",
        "Reconhecer que a disponibilidade dos recursos depende de plataforma, plano e versão"
      ],
      "competencias": [
        "Condução segura de reuniões com controle de entrada",
        "Aplicação de controles de acesso conforme a sensibilidade do assunto"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s1 (Teams, Meet e Zoom — comparação) — panorama das plataformas antes dos controles",
        "m3-u2-t3-s1 (Políticas de gravação e consentimento) — complementa os controles técnicos com a base jurídica",
        "m3-u4-t1-s1 (Lobby e sala de espera) — aprofunda o funcionamento da sala de espera",
        "m3-u4-t1-s2 (Remoção e moderação de participantes) — detalha as ações de moderação",
        "m3-u5-t1-s1 (Zoombombing e intrusão em reuniões) — caso de risco que os controles devem conter"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Adequação ao conteúdo programático de concursos que tratam de segurança em reuniões e de ferramentas de videoconferência; a classificação média é estimativa pedagógica qualitativa de centralidade do tema, e não frequência estatística medida em provas."
      }
    },
    "niveis": {
      "iniciante": "Lobby (sala de espera): participantes aguardam aprovação do anfitrião antes de entrar. Remover participante: anfitrião pode expulsar participantes. Bloquear vídeo/microfone: anfitrião pode desativar dispositivos de participantes. Gravação: anfitrião pode gravar a reunião (vídeo, áudio, chat). Compartilhamento de tela: controle de quem pode compartilhar. Chat: mensagens durante a reunião. Senha da reunião: proteção por senha para acesso. Espera: participantes entram em ordem de aprovação.",
      "intermediario": "Ordenar a configuração conforme o risco: em reunião interna aberta bastam senha e silenciar todos; em reunião com dado sensível somam-se lobby, autenticação obrigatória e restrição do compartilhamento a dois papéis. Quem modera é o anfitrião ou o coanfitrião, nunca o participante comum. A gravação só é acionada com aviso prévio e quando a licença do plano incluir o recurso.",
      "avancado": "Combinar lobby, autenticação e restrição de compartilhamento para conter intrusão: o lobby retém quem chegou pelo link, a autenticação impede a entrada de não identificados e o bloqueio da tela evita a exposição acidental. A revisão passa a ocorrer antes da reunião: conferir a lista de convidados, a senha, a exigibilidade de conta e quem está autorizado a apresentar.",
      "especialista": "Diante de uma intrusão, a resposta é ordenada: remover o participante, bloquear novas entradas, avaliar o encerramento da sessão e registrar o incidente com horário, link e ações adotadas. O registro do incidente alimenta a revisão periódica da configuração e a definição de quem pode admitir estranhos ao grupo."
    },
    "comparacoes": [
      {
        "tema": "Lobby x senha da reunião",
        "a": {
          "rotulo": "Lobby (sala de espera)",
          "texto": "Retém quem tentou entrar e exige aprovação individual do anfitrião antes da admissão; funciona mesmo quando o link da reunião vazou."
        },
        "b": {
          "rotulo": "Senha da reunião",
          "texto": "Exige o conhecimento de um segredo compartilhado com os convidados; protege o acesso, mas o segredo costuma circular junto com o link."
        },
        "diferencaGabarito": "A senha barra quem não conhece o segredo; o lobby barra quem possui o link sem autorização, o que a torna a defesa mais forte contra divulgação de convite."
      },
      {
        "tema": "Anfitrião x participante comum",
        "a": {
          "rotulo": "Anfitrião e coanfitrião",
          "texto": "Removem participantes, silenciam todos, desativam microfone ou câmera e bloqueiam ou restringem o compartilhamento de tela."
        },
        "b": {
          "rotulo": "Participante comum",
          "texto": "Conversa, usa o chat e, em geral, compartilha a própria tela, mas não modera os demais nem altera as permissões da sessão."
        },
        "diferencaGabarito": "A moderação é privativa dos papéis elevados: afirmar que qualquer participante pode expulsar outro é erro."
      },
      {
        "tema": "Gravação x privacidade",
        "a": {
          "rotulo": "Gravação",
          "texto": "Amplia o registro e a memória da sessão, mas também o volume de dados expostos, exigindo aviso, base legal e política de retenção."
        },
        "b": {
          "rotulo": "Privacidade",
          "texto": "Reduz a exposição por não criar registro permanente, ao custo de perder a memória da reunião e depender de ata ou de resumo."
        },
        "diferencaGabarito": "Gravar amplia o que fica registrado e, por isso, exige consentimento ou base legal aplicável, além de política de acesso e descarte."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com senha, o lobby é desnecessário.",
        "porqueErrada": "A senha costuma ser enviada junto com o link, de modo que conhecer o segredo não impede a entrada indevida; o lobby exige aprovação caso a caso.",
        "versaoCorreta": "Use os dois recursos: o lobby contém quem possui o link sem autorização, e a senha evita entradas por tentativa automática."
      },
      {
        "afirmacaoEquivocada": "Qualquer participante pode remover outro participante da reunião.",
        "porqueErrada": "A moderação é privativa de papéis elevados; o participante comum não tem permissão de expulsar os demais nem de bloquear o compartilhamento de tela.",
        "versaoCorreta": "Apenas o anfitrião e os coanfitriões moderam a sessão, removendo participantes e restringindo microfone, câmera e tela."
      },
      {
        "afirmacaoEquivocada": "Todos os planos das plataformas permitem gravar a reunião na nuvem.",
        "porqueErrada": "A gravação depende da licença contratada e pode ter limites de armazenamento, de participantes ou de disponibilidade por versão da plataforma.",
        "versaoCorreta": "Confira o plano e a documentação oficial da plataforma antes de prometer a gravação como recurso garantido."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A gravação de reuniões não requer consentimento.'",
        "porqueErrada": "A gravação captura dados pessoais, como voz, imagem e conteúdo exibido em tela; por isso depende de base legal aplicável e de informação prévia aos participantes.",
        "versaoCorreta": "Depende da legislação. No Brasil, a LGPD e o Marco Civil podem exigir consentimento para gravação de comunicações. Sempre informar os participantes e obter consentimento quando aplicável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Lobby (sala de espera): retenção do participante até a aprovação do anfitrião",
        "Senha da reunião: barreira de acesso por segredo compartilhado",
        "Coanfitrião: papel que auxilia o anfitrião na moderação",
        "Silenciar todos: controle em massa dos microfones dos presentes",
        "Gravação: captura de áudio, vídeo e chat, condicionada à licença do plano"
      ],
      "regras": [
        "Reunião mais sensível exige configuração mais restritiva",
        "Quem modera é apenas o anfitrião e o coanfitrião",
        "A gravação só começa após aviso prévio aos participantes"
      ],
      "comparacoes": [
        "Lobby exige aprovação caso a caso; a senha exige apenas o conhecimento do segredo",
        "Anfitrião e coanfitrião moderam; participante comum apenas participa"
      ],
      "fluxos": [
        "Convidar → configurar senha e lobby → admitir pelo lobby → restringir compartilhamento → silenciar todos → iniciar a gravação após o aviso"
      ],
      "excecoes": [
        "Nomenclatura e disponibilidade dos controles variam por plataforma, plano e versão; o princípio de restringir conforme a sensibilidade da reunião é o que permanece estável"
      ],
      "palavrasChave": [
        "lobby",
        "senha",
        "moderação",
        "coanfitrião",
        "silenciar todos",
        "compartilhamento de tela",
        "gravação"
      ],
      "checklist": [
        "Explico a diferença entre lobby e senha?",
        "Sei quem pode remover e silenciar participantes?",
        "Indico os controles de áudio, vídeo e compartilhamento?",
        "Verifiquei se o plano contratado inclui a gravação?",
        "Avisei sobre a gravação antes de iniciá-la?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Realizar uma reunião com fornecedor externo sobre assunto sensível, reduzindo o risco de entrada de pessoa não convidada e de exposição acidental de tela.",
        "dados": "Reunião de quarenta e cinco minutos com quatro participantes internos e dois externos, link divulgado por correio eletrônico, apresentação com dados de clientes e gravação prevista.",
        "conceitos": [
          "lobby: retenção de participantes até a aprovação do anfitrião",
          "coanfitrião: papel que auxilia a moderação",
          "compartilhamento restrito: permissão que limita a apresentação de tela a papéis definidos"
        ],
        "estrategia": "Aplicar os controles na ordem do risco: quem entra, quem apresenta e o que é gravado, informando os participantes antes de iniciar.",
        "execucao": [
          "Ativar o lobby e conferir a lista de convidados antes de admitir cada participante.",
          "Restringir o compartilhamento de tela ao anfitrião e ao apresentador designado.",
          "Silenciar os participantes na entrada e liberar o microfone apenas para quem for falar.",
          "Informar sobre a gravação antes de iniciá-la e confirmar a concordância dos presentes."
        ],
        "resultado": "Reunião com entrada controlada, apresentação restrita a dois papéis, áudio organizado e gravação iniciada somente após o aviso e a concordância dos participantes.",
        "justificativa": "Cada controle fecha uma via distinta de exposição: o lobby limita quem entra, a restrição de compartilhamento impede que um participante exponha conteúdo não previsto e o aviso de gravação trata o registro de dados pessoais. A combinação é mais eficaz que qualquer controle isolado, porque a configuração disponível varia por plataforma e plano.",
        "errosFrequentes": [
          "Confiar apenas na senha da reunião e deixar o link disponível para reenvio.",
          "Permitir compartilhamento livre e depender de pedido verbal para não exibir dados.",
          "Iniciar a gravação antes de informar os participantes."
        ],
        "variacao": "Um participante entra com nome de convidado e tenta compartilhar a tela sem autorização. Descreva a sequência de ações do anfitrião e o ajuste de configuração que evita a repetição."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa conduzir uma reunião de conselho com votação nominal, garantindo que apenas membros votem e que o resultado seja registrado sem ambiguidade.",
        "dados": "Doze membros com direito a voto, cinco ouvintes, pauta com três deliberações, gravação obrigatória por norma interna e integrantes externos sem conta institucional.",
        "conceitos": [
          "papel na reunião: conjunto de permissões atribuídas a cada participante",
          "votação nominal: registro individual da manifestação de cada membro",
          "registro de presença: lista que comprova quem participou"
        ],
        "estrategia": "Separar membros e ouvintes por papel antes da sessão e registrar a votação de forma nominal, para que o resultado seja auditável e o direito de voto não se estenda a quem não o possui.",
        "execucao": [
          "Atribuir papel de membro aos doze votantes e de ouvinte aos cinco demais, restringindo microfone e voto aos membros.",
          "Admitir externos pelo lobby, conferindo identidade antes de cada admissão.",
          "Registrar presença no início e conduzir a votação nominal de cada deliberação.",
          "Anexar a lista de presença e o registro da votação ao arquivo da reunião, junto com a gravação."
        ],
        "resultado": "Deliberações com votação nominal registrada apenas por membros, ouvintes sem direito a voto, presença comprovada e gravação arquivada com os registros da sessão.",
        "justificativa": "A atribuição de papéis é o que garante que o direito de voto corresponda ao regimento, e o registro nominal torna o resultado verificável depois da sessão. Sem essa separação, o controle depende de disciplina dos participantes, e a ata perde rastreabilidade.",
        "errosFrequentes": [
          "Deixar todos com o mesmo papel e conduzir a votação por contagem informal.",
          "Admitir externos sem conferir identidade no lobby.",
          "Arquivar apenas a gravação, sem a lista de presença e o registro da votação."
        ],
        "variacao": "Um membro perde a conexão durante a votação de um item. Explique como registrar a ocorrência e por que a ata precisa refletir a interrupção."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a gravação de reunião dispensa consentimento porque a sessão é interna e que, além disso, o recurso está disponível em qualquer plano contratado.",
        "dados": "Reunião interna com participantes de dois setores, gravação iniciada sem aviso, plano contratado sem confirmação de inclusão do recurso e gravação disponibilizada por link.",
        "conceitos": [
          "base legal: fundamento que autoriza o tratamento de dados pessoais",
          "aviso prévio: informação ao participante antes do início da captura",
          "disponibilidade por licença: recurso presente apenas em determinados planos"
        ],
        "estrategia": "Separar as duas afirmações e verificar cada uma: a natureza interna da reunião não elimina a necessidade de base legal e de informação, e a disponibilidade do recurso depende da licença.",
        "execucao": [
          "Verificar se a gravação estava prevista na pauta e se houve aviso antes do início.",
          "Identificar a base legal aplicável ao tratamento e o que a norma interna da organização exige.",
          "Conferir na licença contratada se o recurso de gravação está incluído e qual retenção se aplica.",
          "Corrigir o procedimento e registrar a decisão sobre o uso e o compartilhamento do arquivo."
        ],
        "resultado": "A afirmação é incorreta nos dois pontos: reunião interna não dispensa base legal nem informação prévia, e a gravação depende da licença contratada, com retenção definida.",
        "justificativa": "A finalidade interna reduz o escopo do tratamento, mas não elimina a exigência de fundamento legal e de transparência com os participantes, cujas vozes e imagens são dados pessoais. A disponibilidade técnica do recurso, por sua vez, é questão de licenciamento e não altera a obrigação de informar e de restringir o acesso ao arquivo.",
        "errosFrequentes": [
          "Presumir que reunião interna dispensa consentimento ou aviso.",
          "Iniciar a gravação por padrão e informar depois.",
          "Compartilhar o link da gravação sem avaliar conteúdo e permissões."
        ],
        "variacao": "A organização precisa comprovar que informou os participantes. Explique quais registros sustentam essa comprovação e onde eles devem ser mantidos."
      }
    ]
  },
  "m3-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Gravar cria registro permanente e exige aviso, finalidade, retenção e descarte definidos. A prova cobra os elementos de uma política de gravação — quando, quem, o quê, onde, retenção e acesso — e o consentimento como uma das bases legais disponíveis.",
      "preRequisitos": [
        "Noção de reunião online e de captura de áudio, vídeo e chat",
        "Noção de proteção de dados pessoais e de base legal de tratamento"
      ],
      "objetivosObservaveis": [
        "Enumerar os itens que compõem uma política de gravação",
        "Explicar em que consiste consentimento livre, informado e inequívoco",
        "Definir prazo de retenção, rotina de descarte e regras de acesso ao arquivo",
        "Indicar o papel da LGPD (Lei nº 13.709/2018) no tratamento de dados pessoais captados em reunião"
      ],
      "competencias": [
        "Elaboração de política de gravação institucional",
        "Proteção de informações e de dados pessoais registrados em reuniões"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s2 (Controle de participantes, lobby e gravação) — trata do aspecto técnico da captura em reunião",
        "m3-u4-t3-s1 (Políticas de gravação institucional) — aplica os mesmos itens ao uso institucional de plataformas",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD)) — detalha as hipóteses de tratamento de dados pessoais",
        "m3-u4-t3-s3 (Retenção, descarte e proteção de gravações) — aprofunda prazo, descarte e proteção dos arquivos",
        "m3-u5-t1-s3 (Gravação não autorizada e vazamento) — evidência o risco de gravar sem política",
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — base normativa dos direitos invocados nos pedidos de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Adequação ao conteúdo programático de concursos de TI e de gestão pública: o tema reúne proteção de dados e gestão documental e reúne itens sobre consentimento, retenção e descarte; a classificação alta é estimativa pedagógica qualitativa de centralidade, e não frequência estatística apurada em provas."
      }
    },
    "niveis": {
      "iniciante": "Políticas de gravação: definir quando e como gravar, quem pode gravar, onde armazenar, quanto tempo manter. Consentimento: informar participantes sobre gravação e obter consentimento (especialmente exigido por LGPD para dados pessoais). Retenção: definir prazo de retenção de gravações. Acesso: restringir acesso a gravações autorizadas. Compartilhamento: regras para distribuir gravações. Proteção: criptografar gravações sensíveis.",
      "intermediario": "Redigir a política com sete campos: quando gravar (finalidade legítima), quem pode iniciar a captura, o que é registrado (vídeo, áudio, chat, transcrição), onde o arquivo é armazenado, quem acessa, por quanto tempo é retido e como é descartado. A gravação não é automática: muitas reuniões são mais bem conduzidas sem registro permanente.",
      "avancado": "Avaliar se determinada reunião deve ser gravada, à luz da LGPD (Lei nº 13.709/2018): quando a captação gera dados pessoais, é preciso identificar a finalidade, a base legal aplicável e a necessidade. O consentimento é uma das bases, não a única, e a gravação silenciosa compromete qualquer concordância que se pretendesse obter.",
      "especialista": "Revisar a política de uma instituição e apontar lacunas: consentimento não documentado, retenção indeterminada, descarte não executado e acesso concedido sem finalidade registrada. A revisão deve produzir plano de correção com responsável e prazo, e conferir se o atendimento a pedidos de acesso dos titulares está procedimentalizado."
    },
    "comparacoes": [
      {
        "tema": "Gravar x não gravar",
        "a": {
          "rotulo": "Gravar",
          "texto": "Cria registro permanente, útil para memória institucional e auditoria, mas amplia a exposição e exige política, aviso e descarte."
        },
        "b": {
          "rotulo": "Não gravar",
          "texto": "Preserva a privacidade e reduz o risco, ao custo de perder a memória da sessão e depender de ata ou de resumo."
        },
        "diferencaGabarito": "A decisão é por finalidade e necessidade, e não por disponibilidade do botão: gravar só quando o registro for legítimo e proporcional ao risco."
      },
      {
        "tema": "Consentimento x obrigação legal",
        "a": {
          "rotulo": "Consentimento",
          "texto": "Manifestação livre, informada e inequívoca do titular; exige que ele saiba que está sendo gravado e concorde com isso."
        },
        "b": {
          "rotulo": "Obrigação legal (outra base)",
          "texto": "Cumprimento de obrigação legal ou regulatória, hipótese em que o tratamento pode ocorrer sem consentimento individual, mas com deveres de transparência."
        },
        "diferencaGabarito": "O consentimento é uma das bases legais: havendo obrigação legal aplicável, a análise muda, mas os deveres de informação, de segurança e de registro permanecem."
      },
      {
        "tema": "Retenção x descarte",
        "a": {
          "rotulo": "Retenção",
          "texto": "Prazo de manutenção do arquivo, justificado pela finalidade ou por dever de guarda, com acesso controlado durante todo o período."
        },
        "b": {
          "rotulo": "Descarte",
          "texto": "Eliminação ao fim do prazo, com rotina registrada que impede o acúmulo indefinido de gravações nos repositórios."
        },
        "diferencaGabarito": "Guardar além do necessário contraria a minimização, mas descartar cedo demais pode violar dever de guarda: o prazo decorre da finalidade e da norma aplicável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Gravações de reuniões podem ser compartilhadas livremente.'",
        "porqueErrada": "Reunião interna não é conteúdo público: a gravação pode conter dados pessoais de participantes e de terceiros atendidos, e o link aberto amplia o círculo de acesso sem registro de finalidade.",
        "versaoCorreta": "Errado. Gravações podem conter dados pessoais e informações sensíveis. O compartilhamento deve seguir políticas de segurança e proteção de dados."
      },
      {
        "afirmacaoEquivocada": "Se todos os participantes são da própria casa, não é preciso consentimento nem aviso.",
        "porqueErrada": "O vínculo institucional não afasta a aplicação da LGPD: vozes, imagens e mensagens são dados pessoais e exigem base legal e informação prévia ao titular.",
        "versaoCorreta": "Observe a LGPD e a política institucional: identifique a base legal aplicável e, quando o consentimento for a base, obtenha-o de forma livre, informada e inequívoca."
      },
      {
        "afirmacaoEquivocada": "Gravar é sempre a prática recomendada, pois o registro facilita a auditoria.",
        "porqueErrada": "A minimização recomenda captar apenas o necessário; gravar toda reunião cria exposição de dados sem contrapartida proporcional à finalidade.",
        "versaoCorreta": "Grave apenas quando houver finalidade legítima e necessidade, com política que defina aviso, acesso, retenção e descarte do arquivo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Política de gravação: conjunto de regras sobre captura, acesso, retenção e descarte",
        "Consentimento: manifestação livre, informada e inequívoca do titular",
        "Minimização: princípio de captar apenas o necessário para a finalidade",
        "Retenção: prazo de manutenção do arquivo antes do descarte",
        "Base legal: fundamento que autoriza o tratamento de dados pessoais"
      ],
      "regras": [
        "Quando, quem, o quê, onde, retenção, acesso e descarte: campos mínimos da política",
        "Gravar somente com finalidade legítima e necessidade",
        "Informar antes de gravar e obter concordância quando o consentimento for a base aplicável"
      ],
      "comparacoes": [
        "Consentimento é uma das bases legais, e não a única",
        "Gravar cria registro permanente; não gravar preserva a privacidade"
      ],
      "fluxos": [
        "Definir a finalidade → classificar a reunião → autorizar a captura e o aviso → controlar o acesso → reter pelo prazo → descartar e registrar"
      ],
      "excecoes": [
        "Existem bases legais além do consentimento; em contexto de guarda documental, o descarte pode não ser imediato"
      ],
      "palavrasChave": [
        "gravação",
        "consentimento",
        "minimização",
        "retenção",
        "descarte",
        "LGPD",
        "transparência"
      ],
      "checklist": [
        "Enumerei todos os itens da política?",
        "Expliquei o consentimento livre, informado e inequívoco?",
        "Defini a retenção e a rotina de descarte?",
        "Citei a LGPD como referência?",
        "Avaliei se a reunião devia ser gravada?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Definir a política de gravação para as reuniões de um órgão, considerando que algumas sessões tratam de dados pessoais de cidadãos.",
        "dados": "Reuniões semanais de equipe, sessões de atendimento com dados de titulares, recurso de gravação disponível na plataforma e exigência de transparência e de gestão documental.",
        "conceitos": [
          "política de gravação: regras de quando gravar, quem acessa e por quanto tempo",
          "consentimento: manifestação livre, informada e inequívoca do titular",
          "retenção: prazo de manutenção do registro antes do descarte"
        ],
        "estrategia": "Decidir primeiro se a gravação é necessária para a finalidade e só então definir captura, acesso, retenção e descarte, porque gravar sem finalidade cria risco sem contrapartida.",
        "execucao": [
          "Classificar as reuniões: as de rotina interna podem não exigir gravação; as que geram decisão registrada podem exigir.",
          "Definir quem pode iniciar a gravação e como o aviso é dado antes do início.",
          "Estabelecer onde o arquivo é armazenado, quem acessa e por quanto tempo é retido.",
          "Prever o descarte ao fim do prazo e o procedimento de atendimento a pedidos de acesso ou eliminação."
        ],
        "resultado": "Política que distingue reuniões gravadas das não gravadas, com aviso prévio, acesso restrito, prazo de retenção definido e rotina de descarte registrada.",
        "justificativa": "A gravação cria registro permanente que pode conter dados pessoais, por isso a decisão começa pela finalidade e pela necessidade, não pela disponibilidade do botão. O consentimento, quando é a base aplicável, exige que o participante saiba e concorde, e a gravação silenciosa compromete essa base e a própria finalidade declarada.",
        "errosFrequentes": [
          "Gravar todas as reuniões por padrão, sem finalidade definida.",
          "Guardar a gravação indefinidamente por falta de rotina de descarte.",
          "Divulgar o link da gravação para toda a organização sem avaliar o conteúdo."
        ],
        "variacao": "A plataforma passa a gerar transcrição automática além do vídeo. Explique por que a política precisa ser revista e qual item novo ela deve cobrir."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa atender a um pedido de titular que solicita acesso ao conteúdo de uma reunião gravada da qual participou, sem expor dados de terceiros.",
        "dados": "Gravação de sessenta minutos com seis participantes, um deles solicitante, trechos com dados de clientes e prazo interno de resposta definido pela organização.",
        "conceitos": [
          "direito de acesso: faculdade do titular de conhecer o tratamento de seus dados",
          "minimização: fornecimento apenas do que se refere ao solicitante",
          "dados de terceiros: informações de outras pessoas que não podem ser expostas"
        ],
        "estrategia": "Atender ao pedido fornecendo o conteúdo que se refere ao solicitante e suprimindo dados de terceiros, registrando o procedimento adotado.",
        "execucao": [
          "Identificar os trechos da gravação em que o solicitante aparece ou é mencionado.",
          "Verificar quais passagens contêm dados de outros participantes ou de clientes.",
          "Preparar o recorte ou o resumo que atende ao pedido sem expor terceiros.",
          "Registrar o atendimento, a data e o critério aplicado, dentro do prazo interno definido."
        ],
        "resultado": "Solicitante recebe o conteúdo que lhe diz respeito, sem dados de terceiros, com registro do atendimento e do critério de recorte aplicado.",
        "justificativa": "O direito de acesso alcança os dados do próprio titular e não autoriza expor informação de outras pessoas. A minimização é o critério que concilia o atendimento ao pedido com a proteção dos demais participantes, e o registro comprova o procedimento adotado em caso de questionamento.",
        "errosFrequentes": [
          "Enviar a gravação integral e expor dados de terceiros.",
          "Negar o pedido por conter informações de outros participantes.",
          "Atender sem registrar o critério, dificultando a comprovação posterior."
        ],
        "variacao": "O pedido é de eliminação de um trecho da gravação. Explique quais verificações precedem a decisão e por que a eliminação pode não ser imediata em contexto de guarda documental."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma que, como a gravação é feita em plataforma institucional, ela pode ser compartilhada livremente com qualquer setor, inclusive por link aberto, porque o conteúdo é público por natureza.",
        "dados": "Gravação de reunião com dados de atendimento, link criado sem restrição de acesso, dois setores interessados e ausência de registro sobre a finalidade do compartilhamento.",
        "conceitos": [
          "princípio da finalidade: uso compatível com a razão pela qual o dado foi coletado",
          "controle de acesso: restrição a quem realmente precisa do conteúdo",
          "transparência: dever de informar, que não se confunde com divulgação irrestrita"
        ],
        "estrategia": "Distinguir transparência de divulgação e verificar se o compartilhamento guarda compatibilidade com a finalidade da gravação e com o número de pessoas que realmente precisa do conteúdo.",
        "execucao": [
          "Identificar a finalidade registrada para a gravação.",
          "Verificar quais setores precisam do conteúdo e para qual tarefa.",
          "Substituir o link aberto por acesso restrito às pessoas identificadas.",
          "Registrar a base do compartilhamento e revisar os acessos concedidos."
        ],
        "resultado": "A afirmação é incorreta: reunião interna não é conteúdo público, e o compartilhamento precisa observar finalidade e restrição de acesso, com registro da base utilizada.",
        "justificativa": "Transparência é dever de informar o titular e a sociedade sobre o tratamento, e não autorização para divulgação irrestrita. A gravação de atendimento contém dados pessoais, cujo uso por outro setor exige compatibilidade com a finalidade original e acesso limitado a quem efetivamente precisa.",
        "errosFrequentes": [
          "Tratar transparência como sinônimo de publicação.",
          "Criar link aberto por conveniência de compartilhamento.",
          "Ampliar o acesso sem registrar a finalidade do novo uso."
        ],
        "variacao": "Um órgão de controle solicita a gravação. Explique o que muda no procedimento e por que o atendimento ao pedido não se confunde com publicação aberta."
      }
    ]
  }
};
