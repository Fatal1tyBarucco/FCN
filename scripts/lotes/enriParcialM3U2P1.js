const enriParcialM3U2P1 = {
  "m3-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Calendários digitais reúnem compromissos, participantes e lembretes em um repositório sincronizado entre dispositivos. Mal configurada, a agenda expõe dados pessoais, vaza o link da reunião ou concede edição indevida; por isso a banca cobra a função dos convites, a marcação de obrigatório e opcional e os níveis de permissão.",
      "preRequisitos": [
        "Uso básico de conta institucional e de correio eletrônico",
        "Noção de agenda compartilhada e de sincronização entre dispositivos",
        "Conceito de permissão de acesso aplicado a recursos compartilhados"
      ],
      "objetivosObservaveis": [
        "Listar os componentes de um evento: título, data, hora, duração, local, participantes e descrição",
        "Diferenciar participante obrigatório de participante opcional e o efeito disso na lista de presença",
        "Explicar os níveis de permissão de compartilhamento de calendário e o princípio do menor privilégio",
        "Configurar recorrência e lembretes, escolhendo entre editar uma ocorrência ou toda a série"
      ],
      "competencias": [
        "Organizar a agenda e coordenar reuniões sem expor compromissos pessoais",
        "Avaliar riscos de privacidade em convites, anexos e links de reunião",
        "Aplicar o menor privilégio ao compartilhar o calendário com pessoas e grupos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u3-t1-s2 (Comunicação síncrona versus assíncrona) — a agenda serve à reunião síncrona, reservada ao que exige presença",
        "m3-u5-t2-s2 (Exposição em calendários e convites) — detalha o risco de vazar dados pelo convite e pelo link",
        "m3-u4-t1-s3 (Autenticação e controle de acesso) — os níveis de permissão da agenda seguem o mesmo princípio do acesso a outros recursos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca descreve um convite ou um compartilhamento de agenda e pergunta quem pode alterar o evento, o que representa um participante opcional ou qual o risco de um calendário público. Cobra-se interpretar a função das permissões e a edição isolada de ocorrências recorrentes."
      }
    },
    "niveis": {
      "iniciante": "Calendários digitais (Google Calendar, Outlook Calendar) permitem agendar eventos, convidar participantes e definir permissões. Convites de reunião incluem: título, data/hora, local (físico ou virtual), participantes (obrigatórios, opcionais), descrição, anexos. Tipos de permissão: proprietário (controle total), editor (pode modificar), comentar, somente visualização. Recorrência: eventos diários, semanais, mensais. Lembretes: notificações automáticas antes do evento.",
      "intermediario": "No nível intermediário, o candidato distingue a função dos campos do convite e o efeito de editar uma ocorrência: percebe que alterar apenas um dia da série não muda as demais datas e que remarcar o evento existente preserva pauta e respostas, enquanto criar um segundo evento divide a lista de presença. A questão típica apresenta a situação concreta e pergunta pela ação correta na agenda.",
      "avancado": "No nível avançado, o candidato avalia o risco de compartilhar o calendário: percebe que conceder edição permite alterar ou cancelar eventos de terceiros e que tornar a agenda pública expõe títulos, participantes e o link da reunião. Exige aplicar o menor privilégio, preferindo o nível de disponibilidade quando basta mostrar horários ocupados sem revelar o conteúdo do compromisso.",
      "especialista": "No nível especialista, o candidato monta um convite seguro para uma reunião sensível: minimiza dados na descrição, restringe o link ao público necessário, evita anexar documentos com dados pessoais e revisa quem pode editar. A tarefa é decidir o que trafega no convite e o que permanece em área restrita, conciliando coordenação e privacidade."
    },
    "comparacoes": [
      {
        "tema": "Participante obrigatório x participante opcional",
        "a": {
          "rotulo": "Obrigatório",
          "texto": "Convidado cuja presença é esperada e cuja ausência é registrada; entra na expectativa de quórum e responde pela decisão tomada na reunião."
        },
        "b": {
          "rotulo": "Opcional",
          "texto": "Recebe o evento para ciência, sem exigência de comparecer; sua ausência não compromete a reunião nem a deliberação."
        },
        "diferencaGabarito": "O primeiro exige presença e responde pela decisão; o segundo apenas se informa. Trocar a marcação distorce a lista de respostas e a leitura do quórum."
      },
      {
        "tema": "Permissão de editor x somente leitura",
        "a": {
          "rotulo": "Editor",
          "texto": "Pode criar, alterar, mover e cancelar eventos do calendário compartilhado, inclusive os de outra pessoa, o que exige confiança e necessidade real."
        },
        "b": {
          "rotulo": "Somente leitura",
          "texto": "Consulta os eventos sem modificá-los: enxerga a agenda, mas não interfere em compromissos alheios nem cancela reuniões."
        },
        "diferencaGabarito": "Editor altera e cancela; leitura apenas consulta. Conceder edição quando bastava consultar é excesso de privilégio e falha de segurança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Calendários não permitem definir permissões diferentes para cada participante.'",
        "porqueErrada": "O compartilhamento de agenda é granular: cada pessoa recebe um nível próprio, e existe ainda o nível de disponibilidade, que mostra os horários ocupados sem revelar títulos nem participantes.",
        "versaoCorreta": "Errado. Calendários permitem definir permissões: proprietário, editor, comentar, somente visualização."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Editar um evento recorrente sempre altera todas as ocorrências da série.'",
        "porqueErrada": "O recurso de recorrência oferece a escolha explícita entre alterar apenas a ocorrência selecionada ou toda a série, justamente para acomodar mudanças pontuais sem desfazer o padrão.",
        "versaoCorreta": "A edição de uma ocorrência isolada não afeta as demais datas; a série só muda quando a alteração é aplicada a todas as ocorrências."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um calendário público não expõe informação relevante.'",
        "porqueErrada": "Títulos, descrições, participantes e o link da reunião podem conter dados pessoais ou institucionais; a agenda pública é lida por qualquer pessoa e vira vetor de acesso indevido.",
        "versaoCorreta": "O calendário deve ser tratado conforme a sensibilidade do conteúdo, compartilhando-se com pessoas específicas em vez de publicá-lo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Evento de calendário: registro com título, data, hora, duração, local, participantes e descrição, sincronizado entre dispositivos",
        "Convite de reunião: evento que gera resposta de aceitação, recusa ou provisório de cada participante",
        "Recorrência: série de ocorrências que compartilham a mesma definição e podem ser editadas em conjunto ou isoladamente",
        "Nível de permissão: definição do que o outro pode ver ou alterar no calendário compartilhado"
      ],
      "regras": [
        "Aplicar o princípio do menor privilégio: conceder apenas a permissão necessária para a tarefa",
        "Remarcar o evento existente preserva pauta e respostas, enquanto criar um segundo evento duplica o compromisso"
      ],
      "comparacoes": [
        "Obrigatório x opcional: o primeiro exige presença, o segundo apenas informa, e a marcação errada distorce a lista de presença"
      ],
      "fluxos": [
        "Criar o evento com título, data, fuso e duração → incluir pauta, local e link → adicionar participantes obrigatórios e opcionais → enviar o convite e acompanhar as respostas"
      ],
      "excecoes": [
        "Em série recorrente, é possível editar uma única ocorrência sem alterar as demais datas"
      ],
      "palavrasChave": [
        "agenda",
        "convite",
        "permissão",
        "recorrência",
        "privacidade"
      ],
      "checklist": [
        "Listo os campos essenciais de um evento?",
        "Distingo participante obrigatório de opcional?",
        "Explico os níveis de permissão e aplico o menor privilégio?",
        "Sei editar uma ocorrência sem alterar toda a série?",
        "Avalio o risco de tornar o calendário público?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Montar um convite de reunião para participantes de três cidades, com pauta, documento de apoio e horário que não seja ambíguo para nenhum deles.",
        "dados": "Participantes em três fusos distintos, reunião de cinquenta minutos, documento de apoio de duas páginas e duas pessoas que participam apenas como ouvintes.",
        "conceitos": [
          "convite de reunião: evento de calendário com participantes e respostas",
          "participante obrigatório e opcional: exigência de presença e participação informativa",
          "fuso horário do evento: referência usada para calcular o horário local de cada participante"
        ],
        "estrategia": "Preencher o evento com os campos de que o convidado precisa para decidir e comparecer, e fixar o fuso na criação, para que a conversão seja feita pelo calendário.",
        "execucao": [
          "Criar o evento com título objetivo, data, hora de início, duração e fuso horário definido na criação.",
          "Incluir local ou link da reunião e a pauta na descrição, anexando o documento de apoio quando necessário.",
          "Adicionar os participantes obrigatórios e marcar os dois ouvintes como opcionais.",
          "Enviar o convite e conferir, na resposta de cada participante, o horário exibido no fuso local."
        ],
        "resultado": "Convite com pauta, link e documento, participantes obrigatórios e opcionais distinguidos e horário correto nos três fusos; o calendário registra aceite, recusa ou resposta provisória de cada convidado.",
        "justificativa": "O calendário converte o horário a partir do fuso definido no evento, e não do fuso de quem lê, por isso fixar o fuso na criação evita erro de uma hora em períodos de horário de verão. A distinção entre obrigatório e opcional informa a expectativa de presença e organiza a lista de respostas.",
        "errosFrequentes": [
          "Escrever o fuso apenas na descrição e deixar o campo do evento no fuso padrão.",
          "Marcar todos como obrigatórios e distorcer a expectativa de presença.",
          "Anexar o documento ao convite sem verificar o acesso dos convidados externos."
        ],
        "variacao": "A reunião passa a ser semanal por três meses. Explique como criar a série e como alterar apenas uma ocorrência sem afetar as demais."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa reorganizar uma reunião que será remarcada duas vezes em uma semana, sem que os participantes percam o histórico de mensagens e a pauta já enviada.",
        "dados": "Evento com nove participantes, pauta com cinco itens, duas remarcações previstas e uma pessoa que entrará apenas na segunda data.",
        "conceitos": [
          "atualização de evento: alteração que reenvia o convite aos participantes",
          "série recorrente: conjunto de ocorrências que compartilham a mesma definição",
          "resposta do participante: estado de aceite associado ao evento"
        ],
        "estrategia": "Atualizar o evento existente em vez de criar outro, preservando pauta e respostas, e incluir a nova pessoa na data em que ela participará.",
        "execucao": [
          "Abrir o evento existente e alterar data e hora, mantendo a pauta e o documento anexado.",
          "Enviar a atualização aos participantes e conferir quais respostas foram redefinidas.",
          "Incluir a nova participante apenas na ocorrência correspondente, sem convertê-la em convidada da primeira data.",
          "Confirmar na agenda de cada participante que restou apenas a data vigente."
        ],
        "resultado": "Evento único com a data correta, pauta preservada, respostas atualizadas e a nova participante presente apenas na data prevista, sem eventos duplicados nas agendas.",
        "justificativa": "Criar um segundo evento duplicaria o compromisso e dividiria as respostas, dificultando saber quem comparecerá. A atualização mantém o vínculo entre convite, pauta e respostas, e a inclusão pontual da nova participante evita que ela receba um convite para uma data em que não deve estar presente.",
        "errosFrequentes": [
          "Criar um evento novo e deixar o antigo ativo nas agendas.",
          "Alterar a série inteira quando apenas uma ocorrência mudou.",
          "Incluir a nova participante na série e gerar convites para todas as datas."
        ],
        "variacao": "A reunião passa a ter duas ocorrências na mesma semana, com públicos distintos. Explique como estruturar os eventos para não misturar respostas e listas de presença."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que calendários compartilhados não permitem permissões diferentes por pessoa e que, por isso, compartilhar a agenda com a equipe necessariamente expõe todos os compromissos.",
        "dados": "Agenda com compromissos pessoais e profissionais, equipe de oito pessoas, necessidade de mostrar apenas disponibilidade e um caso em que se deseja mostrar detalhes.",
        "conceitos": [
          "nível de permissão: define o que o outro pode ver ou alterar",
          "disponibilidade: exibição de horários ocupados sem detalhes do evento",
          "agenda privada: configuração que restringe o acesso ao proprietário"
        ],
        "estrategia": "Verificar os níveis de compartilhamento disponíveis e configurar por pessoa, usando o nível que mostra apenas disponibilidade para a equipe e detalhes para o caso específico.",
        "execucao": [
          "Abrir as configurações de compartilhamento da agenda e listar os níveis disponíveis.",
          "Conceder à equipe o nível que exibe apenas disponibilidade, sem títulos nem participantes.",
          "Conceder ao segundo caso o nível com detalhes, conforme a necessidade declarada.",
          "Conferir, com uma pessoa de cada grupo, o que cada uma consegue ver."
        ],
        "resultado": "A afirmação é incorreta: a agenda fica compartilhada com níveis distintos por pessoa, exibindo apenas disponibilidade para a equipe e detalhes para quem precisa deles.",
        "justificativa": "O compartilhamento de calendário é granular: cada concessão define o que o destinatário vê, e o nível de disponibilidade oculta títulos e participantes. Por isso a exposição de compromissos pessoais decorre de configuração inadequada, e não de limitação da ferramenta.",
        "errosFrequentes": [
          "Compartilhar a agenda no nível mais amplo por desconhecer as opções.",
          "Tornar a agenda pública em vez de compartilhar com pessoas específicas.",
          "Conferir a configuração apenas na própria visão, sem testar com outro usuário."
        ],
        "variacao": "Um dos integrantes precisa apenas propor horários, sem ver detalhes dos compromissos. Explique qual nível atende a esse caso e por que conceder edição seria excesso de permissão."
      }
    ]
  },
  "m3-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Teams, Google Meet e Zoom resolvem o mesmo problema — reunião e colaboração a distância —, mas diferem na integração com o ambiente de arquivos e no modelo de licenciamento. Recursos como gravação em nuvem, transcrição, legendas ao vivo e webinars dependem do plano ou da edição, de modo que generalizá-los entre plataformas gera erro no gabarito.",
      "preRequisitos": [
        "Uso básico de videoconferência e de compartilhamento de tela",
        "Noção de licenciamento e de planos de contratação de software",
        "Conceito de ecossistema de produtividade integrado (conta, armazenamento e aplicativos)"
      ],
      "objetivosObservaveis": [
        "Situar Microsoft Teams, Google Meet e Zoom no respectivo ecossistema de produtividade",
        "Citar capacidades comuns às três plataformas, como compartilhamento de tela, chat, levantar mão e reações",
        "Indicar que gravação, transcrição, duração e limite de participantes dependem do plano ou da edição",
        "Escolher a plataforma a partir de requisitos do cenário, e não da familiaridade do anfitrião"
      ],
      "competencias": [
        "Avaliar comparativamente ferramentas de videoconferência sem generalizar recursos",
        "Decidir a adoção com base em requisitos eliminatórios e na integração com o ambiente já existente",
        "Testar o ingresso de participantes externos antes de padronizar uma plataforma"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u2-t2-s2 (Controle de participantes, lobby e gravação) — aprofunda os controles de sala comuns às plataformas comparadas",
        "m3-u2-t3-s1 (Políticas de gravação e consentimento) — a gravação como recurso condicionado ao plano e sujeito a regra",
        "m3-u5-t2-s3 (Exposição em plataformas de colaboração) — o risco de vazamento nos ambientes comparados",
        "m3-u4-t1-s1 (Lobby e sala de espera) — recurso de acesso que varia entre as plataformas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca pede a comparação de plataformas e costuma embutir armadilha no recurso condicionado ao plano, como gravar na nuvem ou exibir legendas em qualquer licença. Cobra-se situar cada ferramenta no ecossistema e escolher conforme o requisito, sem presumir paridade de recursos."
      }
    },
    "niveis": {
      "iniciante": "Microsoft Teams integra reunião, conversa e arquivos ao Microsoft 365, sendo natural para organizações que já usam esse ambiente; Google Meet integra-se ao Google Workspace e costuma funcionar pelo navegador, sem instalação; Zoom é muito usado em reuniões com participantes externos e em eventos ampliados. As três compartilham recursos básicos, como tela, chat, levantar mão e reações, mas gravação, transcrição, legendas ao vivo, duração e número de participantes variam conforme o plano ou a edição.",
      "intermediario": "No nível intermediário, o candidato identifica recursos comuns e separa o que depende do plano: reconhece que compartilhar tela e conversar por chat estão nas três plataformas, enquanto gravação em nuvem, transcrição e webinars exigem licença específica. A questão típica descreve a necessidade e pergunta se a capacidade pode ser presumida, e a resposta correta verifica a licença antes de afirmar.",
      "avancado": "No nível avançado, o candidato compara plataformas a partir de requisitos eliminatórios, como gravação obrigatória ou integração com o ambiente de ensino, e descarta alternativas cuja licença não cobre o recurso essencial. Exige perceber que a interface não decide a escolha: a decisão vem do requisito do cenário e das restrições de acesso dos convidados.",
      "especialista": "No nível especialista, o candidato estrutura a adoção de uma plataforma para toda uma organização: testa o ingresso de participantes externos, valida limites de participantes e a retenção de gravação na licença vigente e documenta os recursos condicionados. A tarefa é padronizar sem prometer capacidade que o plano não inclui, ajustando o uso ao contrato."
    },
    "comparacoes": [
      {
        "tema": "Recurso comum x recurso condicionado ao plano",
        "a": {
          "rotulo": "Comum",
          "texto": "Capacidades presentes nas três plataformas em suas configurações usuais, como compartilhamento de tela, chat, levantar mão e reações."
        },
        "b": {
          "rotulo": "Condicionado ao plano",
          "texto": "Capacidades que dependem da licença ou da edição, como gravação em nuvem, transcrição, legendas ao vivo, webinars e limite ampliado de participantes."
        },
        "diferencaGabarito": "O recurso comum pode ser afirmado em qualquer cenário; o condicionado só vale após conferir a licença contratada, e generalizá-lo é o erro típico apontado pela banca."
      },
      {
        "tema": "Acesso pelo navegador x aplicativo dedicado",
        "a": {
          "rotulo": "Navegador",
          "texto": "Dispensa instalação local e atende a quem não pode instalar software, embora alguns recursos possam ficar limitados conforme o navegador."
        },
        "b": {
          "rotulo": "Aplicativo dedicado",
          "texto": "Programa instalado que costuma oferecer recursos adicionais, mas impõe o requisito de instalação e de permissão na máquina do participante."
        },
        "diferencaGabarito": "A existência do aplicativo não elimina o modo de navegador; a viabilidade se decide confrontando os recursos exigidos pela reunião com os disponíveis no acesso permitido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Google Meet requer instalação de software.'",
        "porqueErrada": "O Meet foi projetado para uso pelo navegador, sem instalação; a existência de aplicativo móvel ou de atalho não transforma a instalação em requisito para participar da reunião.",
        "versaoCorreta": "Errado. Google Meet funciona no navegador sem instalação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Como as plataformas oferecem recursos semelhantes, qualquer uma serve para qualquer reunião.'",
        "porqueErrada": "Recursos como gravação, transcrição, número de participantes e webinars variam por plano e edição; presumir paridade leva a escolher uma licença que não cobre o requisito da reunião.",
        "versaoCorreta": "A escolha parte dos requisitos do cenário e da licença disponível; recursos condicionados ao plano não se presumem entre plataformas."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O recurso de gravação está incluído em todos os planos das três plataformas.'",
        "porqueErrada": "A gravação, sobretudo em nuvem, costuma depender do plano ou da edição; tratá-la como universal ignora a diferença de licenciamento que separa as ofertas.",
        "versaoCorreta": "A disponibilidade da gravação deve ser conferida na licença de cada plataforma antes de ser prometida aos participantes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Plataforma de videoconferência: serviço de reunião a distância com tela, chat e áudio",
        "Ecossistema: conjunto de serviços integrados da mesma plataforma, como reunião, arquivo e conversa",
        "Recurso condicionado ao plano: capacidade que só existe em determinada licença ou edição",
        "Modo de acesso: navegador, sem instalação, ou aplicativo dedicado, com recursos adicionais"
      ],
      "regras": [
        "Comparar plataformas a partir de requisitos eliminatórios antes de avaliar recursos secundários",
        "Não presumir paridade de recursos entre planos e edições: verificar a licença contratada"
      ],
      "comparacoes": [
        "Recurso comum x recurso condicionado: o primeiro vale em qualquer cenário, o segundo depende da licença e não se generaliza"
      ],
      "fluxos": [
        "Levantar requisitos do cenário → conferir a licença de cada plataforma → testar o acesso de convidado externo → padronizar a ferramenta"
      ],
      "excecoes": [
        "Um recurso condicionado pode estar disponível por tempo limitado em versão de avaliação, o que não o torna contratado"
      ],
      "palavrasChave": [
        "Teams",
        "Meet",
        "Zoom",
        "webinar",
        "licença",
        "navegador"
      ],
      "checklist": [
        "Situo cada plataforma no respectivo ecossistema?",
        "Cito as capacidades comuns às três?",
        "Reconheço o recurso que depende do plano?",
        "Escolho conforme o requisito do cenário?",
        "Testo o ingresso de participantes externos?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Escolher a plataforma para uma organização que já usa um pacote de produtividade corporativo e precisa de reuniões internas com acesso aos arquivos no mesmo ambiente.",
        "dados": "Organização com pacote corporativo contratado, reuniões internas de até trinta pessoas, necessidade de editar documentos durante a reunião e convidados externos ocasionais.",
        "conceitos": [
          "ecossistema: conjunto de serviços integrados da mesma plataforma",
          "recurso condicionado ao plano: capacidade que depende de licença ou edição",
          "convidado externo: participante sem conta na organização"
        ],
        "estrategia": "Partir do requisito de integração com o ambiente já contratado e verificar, antes de decidir, quais capacidades dependem do plano em uso.",
        "execucao": [
          "Listar os requisitos: reunião interna, edição de documentos durante a sessão e convidados externos ocasionais.",
          "Verificar que a plataforma do próprio pacote integra reunião, conversa e arquivos no mesmo ambiente.",
          "Conferir no plano contratado os limites aplicáveis a participantes, gravação e transcrição.",
          "Testar o ingresso de um convidado externo antes de padronizar a ferramenta para toda a organização."
        ],
        "resultado": "Plataforma do pacote adotada para as reuniões internas, com arquivos acessados no próprio ambiente e ingresso de externos validado por teste; os limites do plano ficam documentados.",
        "justificativa": "As três plataformas resolvem reunião a distância e compartilham recursos básicos, mas diferem na integração com o ambiente de arquivos e colaboração. Quando a organização já opera no pacote corporativo, a plataforma integrada reduz etapas porque reunião, conversa e documento estão no mesmo serviço, e a verificação do plano evita prometer capacidade que a licença não cobre.",
        "errosFrequentes": [
          "Generalizar recursos entre plataformas e planos, prometendo gravação ou limites iguais em todos.",
          "Escolher pela familiaridade do usuário sem verificar a integração com o ambiente de arquivos.",
          "Testar apenas com contas internas e descobrir o problema de acesso externo no dia da reunião."
        ],
        "variacao": "A mesma organização precisa realizar um evento aberto para quinhentos participantes externos, com moderação. Indique o que muda na escolha e por que o recurso de evento ampliado não pode ser presumido em qualquer plano."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa comparar duas plataformas para uma aula remota com alunos de uma instituição que usa ambiente de ensino próprio e exige gravação das sessões.",
        "dados": "Turma de quarenta alunos, ambiente de ensino institucional já adotado, gravação obrigatória de todas as aulas, recursos disponíveis dependentes da licença educacional.",
        "conceitos": [
          "integração com ambiente de ensino: ligação entre a plataforma de reunião e o repositório de conteúdo",
          "gravação como recurso de plano: disponibilidade sujeita à licença",
          "critério de escolha: requisito obrigatório que elimina alternativas"
        ],
        "estrategia": "Tratar a gravação obrigatória como requisito eliminatório e verificar, em cada plataforma e licença, se a capacidade está incluída antes de comparar recursos secundários.",
        "execucao": [
          "Listar os requisitos e marcar a gravação obrigatória como eliminatória.",
          "Verificar, na licença institucional de cada plataforma, se a gravação está incluída e por quanto tempo é retida.",
          "Comparar a integração com o ambiente de ensino já adotado, que reduz etapas para os alunos.",
          "Registrar a comparação e indicar a plataforma que atende ao requisito eliminatório com menor atrito de acesso."
        ],
        "resultado": "Plataforma escolhida com base no requisito de gravação confirmado na licença institucional, com integração ao ambiente de ensino e acesso dos alunos sem cadastro adicional.",
        "justificativa": "Quando um requisito é eliminatório, a comparação precisa começar por ele, porque um recurso atraente que dependa de licença não contratada não resolve o problema. A integração com o ambiente já adotado é critério secundário, que desempata entre alternativas igualmente viáveis.",
        "errosFrequentes": [
          "Comparar recursos sem verificar a licença efetivamente contratada.",
          "Escolher pela interface e descobrir a limitação de gravação depois da primeira aula.",
          "Prometer retenção de gravação sem conhecer a política aplicável."
        ],
        "variacao": "A instituição decide manter a gravação por apenas trinta dias. Explique o que muda na comparação e qual requisito novo passa a pesar na escolha."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que uma das plataformas exige instalação de programa em todos os casos e que, por isso, não pode ser usada por participantes externos que não podem instalar software.",
        "dados": "Participante externo com acesso apenas ao navegador, reunião de uma hora, computador corporativo sem permissão de instalação e conexão estável.",
        "conceitos": [
          "acesso pelo navegador: uso sem instalação local, sujeito a recursos do navegador",
          "aplicativo dedicado: programa instalado, com recursos adicionais",
          "requisito do participante: restrição que define a viabilidade da ferramenta"
        ],
        "estrategia": "Verificar o modo de acesso disponível na plataforma e testar com um participante sem permissão de instalação, em vez de concluir pela via de aplicativo.",
        "execucao": [
          "Verificar na plataforma se existe acesso por navegador para participantes.",
          "Testar o ingresso com uma conta sem permissão de instalação.",
          "Comparar os recursos disponíveis no navegador com os do aplicativo dedicado.",
          "Registrar o que o participante consegue fazer no modo de navegador e o que exigiria instalação."
        ],
        "resultado": "A afirmação é incorreta: o acesso pelo navegador dispensa instalação, ainda que alguns recursos possam ser limitados; a conclusão correta é verificar quais requisitos a reunião exige.",
        "justificativa": "A existência de aplicativo dedicado não elimina o modo de navegador. O que decide a viabilidade é o conjunto de recursos exigidos pela reunião em confronto com os disponíveis no modo de acesso permitido ao participante, e a conclusão precisa vir de teste, não de suposição.",
        "errosFrequentes": [
          "Concluir a limitação de acesso sem testar o modo de navegador.",
          "Generalizar a exigência de instalação para todos os participantes.",
          "Escolher a plataforma pela experiência do anfitrião e ignorar a restrição dos convidados."
        ],
        "variacao": "O participante externo também não pode criar conta. Explique o que muda na análise e qual teste comprova o ingresso sem cadastro."
      }
    ]
  }
};
