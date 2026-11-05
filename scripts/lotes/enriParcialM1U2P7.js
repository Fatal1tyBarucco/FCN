const enriParcialM1U2P7 = {
  "modulo-1-unidade-2-topico-10-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Questões de concurso de informática apresentam cenários de revisão colaborativa em que o candidato precisa distinguir comentário de alteração rastreada, e comparar de combinar documentos. Trocar esses pares muda o gabarito: o comentário apenas anota um trecho sem mudar o corpo, enquanto a alteração rastreada insere, exclui ou formata texto e só é incorporada quando aceita. Comparar trabalha com duas versões (original x revisado) e Combina alterações de múltiplas versões num resultado consolidado. Dominar esse fluxo é também higiene documental: distribuir um arquivo com marcações pendentes expõe rascunhos e identifica quem sugeriu cada trecho.",
      "preRequisitos": [
        "Conhecimento da interface básica do Microsoft Word (faixas de opções, guia Revisão)",
        "Abertura e edição de documentos de texto (.docx)"
      ],
      "objetivosObservaveis": [
        "Ativar e desativar o controle de alterações (Track Changes) e interpretar as marcações de inserção, exclusão e formatação",
        "Inserir, responder e resolver comentários ancorados a trechos do documento",
        "Executar a comparação de duas versões e a combinação de múltiplas versões, escolhendo o recurso adequado ao cenário",
        "Aceitar ou rejeitar marcações e excluir comentários antes de distribuir o documento final"
      ],
      "competencias": [
        "Revisão colaborativa de documentos em equipe",
        "Auditoria de mudanças e identificação de autoria de cada edição",
        "Higiene documental para distribuição segura de versões finais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-11-sub-1 (Restrições de edição e senhas) — outra camada de proteção e controle de documentos do Word"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Revisão, comentários e comparação ou combinação de documentos integram o conteúdo programático de informática para concursos porque testam o domínio do fluxo colaborativo do Word, especialmente a distinção entre anotação (comentário) e mudança efetiva no texto (alteração rastreada), e entre comparar duas versões e combinar várias versões. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O controle de alterações (Track Changes) registra cada edição como marcação: inserções aparecem destacadas (sublinhado ou cor), exclusões permanecem visíveis riscadas ou na margem, e mudanças de formatação são anotadas, com identificação do autor quando disponível. O texto do corpo não é alterado até que alguém aceite ou rejeite cada marcação. Comentários são anotações ancoradas a trechos (Revisão > Novo Comentário), servem ao diálogo entre revisores e podem ser respondidos, resolvidos ou removidos sem alterar o corpo do texto. Comparar gera o conjunto de diferenças entre duas versões; Combinar reúne alterações de múltiplas versões num documento resultante. Esses recursos são essenciais para revisão colaborativa.",
      "intermediario": "O fluxo completo de revisão envolve: ativar o rastreamento antes de editar, revisar cada marcação no painel de alterações, aceitar as que devem ser incorporadas e rejeitar as que devem ser descartadas, gerenciar comentários (inserir, responder, resolver e excluir), e executar Comparar (duas versões) ou Combinar (várias versões) conforme o número de documentos a reconciliar. Antes de distribuir, o revisor deve aceitar/rejeitar todas as marcações e excluir todos os comentários, conferindo que não resta marcação pendente, pois exibir o documento como Final ou Sem marcações apenas oculta as marcações na tela, não remove o conteúdo de revisão.",
      "avancado": "Ao combinar versões de múltiplos revisores, o Word produz um documento resultante consolidado que preserva as alterações de cada autor como marcações individuais, permitindo aceitação ou rejeição seletiva. A comparação de documentos exige a escolha correta do documento original e do revisado; inverter a ordem inverte o sentido das marcações (o que foi adicionado passa a parecer removido e vice-versa). Em ambientes Microsoft 365 com coautoria, as alterações podem ser sincronizadas em tempo real, mas o controle de alterações local continua sendo o mecanismo de auditoria explícito para revisão formal.",
      "especialista": "O especialista avalia o impacto de cada recurso no cenário de entrega: usar Combinar quando há várias versões revisadas por diferentes pessoas, reservar Comparar para pares original/revisado, e aplicar Restringir Edição (tópico relacionado) quando se quer impedir alterações enquanto permite comentários. Também sabe que excluir comentários e aceitar todas as alterações é irreversível salvo se houver backup, e que a exibição Final/Sem marcações não sanitiza o documento para distribuição externa; somente a remoção efetiva de marcações e comentários garante que rascunhos e autoria não sejam expostos."
    },
    "comparacoes": [
      {
        "tema": "Comparar vs Combinar documentos no Word",
        "a": {
          "rotulo": "Comparar",
          "texto": "Recebe exatamente duas versões de um documento (original e revisado) e produz um terceiro documento resultante que destaca as diferenças entre elas. É indicado quando se quer conferir o que mudou entre uma versão base e uma revisada."
        },
        "b": {
          "rotulo": "Combinar",
          "texto": "Recebe múltiplas versões de um mesmo documento, cada uma revisada por uma pessoa diferente, e produz um único documento resultante consolidado que reúne as alterações de cada revisor como marcações individuais. É indicado para reconciliar contribuições de vários revisores."
        },
        "diferencaGabarito": "Escolha Comparar quando houver um par original x revisado; escolha Combinar quando houver mais de duas versões a reconciliar. Usar Comparar com múltiplas versões ou Combinar com apenas duas versões inverte ou perde a rastreabilidade das alterações por revisor."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Comentários alteram o texto do documento porque ficam visíveis ao lado do trecho anotado.",
        "porqueErrada": "Comentários são anotações ancoradas a trechos que convivem com o texto sem modificá-lo; servem ao diálogo entre revisores e podem ser respondidos, resolvidos ou removidos. O corpo do documento só muda por alterações rastreadas que forem aceitas.",
        "versaoCorreta": "Correto: comentários são apenas anotações ao lado do trecho e não alteram o corpo do documento; quem modifica o texto são as alterações rastreadas aceitas."
      },
      {
        "afirmacaoEquivocada": "Exibir o documento como Final ou Sem marcações remove as alterações rastreadas e comentários do arquivo.",
        "porqueErrada": "A exibição Final ou Sem marcações apenas oculta as marcações na tela para leitura limpa, mas não exclui o conteúdo de revisão. Somente aceitar/rejeitar as alterações rastreadas e excluir os comentários remove efetivamente o rastro de revisão antes da distribuição.",
        "versaoCorreta": "Correto: exibir como Final/Sem marcações apenas oculta as marcações na tela; para removê-las de fato é necessário aceitar/rejeitar as alterações rastreadas e excluir os comentários."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Controle de alterações (Track Changes)",
        "Marcação de inserção, exclusão e formatação",
        "Comentário ancorado a trecho",
        "Comparar documentos (duas versões)",
        "Combinar documentos (múltiplas versões)"
      ],
      "regras": [
        "O texto só muda quando uma alteração rastreada é aceita; rejeitada, é descartada",
        "Comentários não alteram o corpo do documento e podem ser respondidos, resolvidos e removidos",
        "Comparar exige exatamente duas versões; Combinar aceita múltiplas versões",
        "Exibir como Final/Sem marcações oculta, mas não remove, marcações e comentários"
      ],
      "comparacoes": [
        "Comparar = duas versões, diferença entre original e revisado; Combinar = múltiplas versões, resultado consolidado com alterações por revisor"
      ],
      "fluxos": [
        "Ativar rastreamento > revisar marcações > aceitar/rejeitar > gerenciar comentários > distribuir versão limpa"
      ],
      "excecoes": [
        "Sem senha de proteção, a restrição de edição é cooperativa e pode ser desativada pelo próprio usuário (tópico de restrições)"
      ],
      "palavrasChave": [
        "rastreamento",
        "alterações",
        "comentários",
        "comparar",
        "combinar",
        "revisão",
        "marcação",
        "aceitar",
        "rejeitar"
      ],
      "checklist": [
        "Ativar o controle de alterações antes de revisar",
        "Interpretar marcações de inserção, exclusão e formatação",
        "Inserir, responder e resolver comentários",
        "Escolher Comparar (duas versões) ou Combinar (várias versões)",
        "Aceitar ou rejeitar cada marcação antes de distribuir",
        "Excluir todos os comentários e conferir que não resta marcação pendente"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Ativar o rastreamento de alterações num documento em revisão para que cada edição fique registrada como marcação.",
        "dados": "Documento de texto aberto no Microsoft Word; guia Revisão disponível; opção Controlar Alterações desativada inicialmente.",
        "conceitos": [
          "Controle de alterações (Track Changes)",
          "Marcação de inserção, exclusão e formatação"
        ],
        "estrategia": "Acessar a guia Revisão, localizar o grupo Rastreamento e ativar o controle de alterações, confirmando que as edições subsequentes gerarão marcações visíveis aguardando aceitação ou rejeição.",
        "execucao": [
          "Abrir o documento no Microsoft Word",
          "Ir para a guia Revisão na faixa de opções",
          "Clicar em Controlar Alterações para ativar o rastreamento",
          "Fazer uma edição de teste (inserir ou excluir texto) e observar a marcação gerada"
        ],
        "resultado": "Revisão > Controlar Alterações > Ativar. A partir daí, inserções aparecem destacadas, exclusões ficam riscadas ou na margem, e mudanças de formatação são anotadas, cada uma aguardando aceitar ou rejeitar.",
        "justificativa": "O resultado é o gabarito porque, com o rastreamento ativo, toda edição passa a ser registrada como marcação visível e identificada por autor, permitindo que revisores vejam exatamente o que mudou antes de incorporar ou descartar as alterações.",
        "errosFrequentes": [
          "Achar que salvar o arquivo incorpora automaticamente as alterações rastreadas; apenas a ação aceitar/rejeita incorpora ou descarta",
          "Achar que comentários modificam o corpo do texto; comentários apenas anotam trechos e não alteram o documento"
        ],
        "variacao": "O documento já contém marcações pendentes de um revisor anterior; o aluno deve revisar cada marcação, aceitar ou rejeitar individualmente, e só então considerar o texto revisado definitivo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Três técnicos revisaram cópias distintas do mesmo relatório e a coordenação quer um único documento com todas as contribuições identificadas por revisor.",
        "dados": "Documento base original e três versões revisadas (uma por técnico); guia Revisão > Comparar e Combinar disponível.",
        "conceitos": [
          "Combinar documentos (múltiplas versões)",
          "Marcação de alteração por revisor",
          "Aceitar/rejeitar marcações"
        ],
        "estrategia": "Usar Revisão > Combinar, indicar o documento base e as três versões revisadas para que o Word gere um documento resultante consolidado com as alterações de cada revisor como marcações individuais, depois aceitar ou rejeitar marcação por marcação.",
        "execucao": [
          "Abrir o documento base no Microsoft Word",
          "Ir para a guia Revisão e escolher Combinar",
          "Indicar o documento base e as três versões revisadas nas caixas correspondentes",
          "Gerar o documento resultante consolidado com marcações de cada revisor",
          "Revisar e aceitar ou rejeitar cada marcação individualmente antes de distribuir"
        ],
        "resultado": "Revisão > Comparar > Combinar: indicar o documento base e as três versões revisadas — o Word produz um documento resultante consolidado, com as alterações de cada revisor como marcações. Em seguida, a coordenação aceita/rejeita marcação por marcação.",
        "justificativa": "O resultado é o gabarito porque Combinar é o recurso destinado a reunir alterações de múltiplas versões num único resultado, preservando a autoria de cada edição como marcação separada, ao contrário de Comparar, que serve apenas a pares original x revisado.",
        "errosFrequentes": [
          "Usar Comparar em vez de Combinar com mais de duas versões, perdendo a rastreabilidade por revisor",
          "Distribuir o documento resultante sem aceitar ou rejeitar as marcações, deixando o rastro de revisão exposto"
        ],
        "variacao": "Caso haja apenas duas versões (original e revisada), o recurso correto passa a ser Comparar, não Combinar, pois Comparar trabalha com pares e Combina com múltiplas versões."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que comentários alteram o texto do documento porque aparecem vinculados a trechos específicos.",
        "dados": "Documento com comentários inseridos por revisores; corpo do texto inalterado; opção Exibir marcações ativada para visualizar comentários.",
        "conceitos": [
          "Comentário ancorado a trecho",
          "Diferença entre anotação e alteração rastreada"
        ],
        "estrategia": "Diagnosticar que o comentário é apenas uma anotação ao lado do trecho, sem modificar o corpo; demonstrar que o texto só muda quando uma alteração rastreada é aceita, e que comentários podem ser respondidos, resolvidos ou removidos sem afetar o documento.",
        "execucao": [
          "Abrir o documento e observar que os comentários aparecem como balões ao lado dos trechos anotados",
          "Confirmar que o corpo do texto permanece exatamente como estava antes dos comentários",
          "Selecionar um comentário e verificar que editar o corpo do texto não é afetado pela presença do comentário",
          "Resolver ou excluir o comentário e constatar que o texto do corpo não sofreu alteração"
        ],
        "resultado": "Incorreto: comentários são anotações vinculadas a trechos — servem ao diálogo entre revisores e podem ser respondidos/resolvidos; o texto do corpo só muda por alterações rastreadas que forem aceitas.",
        "justificativa": "O resultado é o gabarito porque comentários não integram o corpo do documento: eles são anotações independentes ancoradas a trechos, enquanto apenas alterações rastreadas aceitas modificam efetivamente o texto.",
        "errosFrequentes": [
          "Confundir a presença visível do comentário ao lado do texto com uma modificação do corpo do documento",
          "Achar que excluir um comentário altera o texto ao qual ele estava ancorado; excluir o comentário apenas remove a anotação"
        ],
        "variacao": "O usuário também confunde Comparar com Combinar, afirmando que ambos fazem a mesma coisa; deve-se esclarecer que Comparar serve a duas versões e Combinar a múltiplas versões."
      }
    ]
  },
  "modulo-1-unidade-2-topico-11-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Questões de concurso de informática apresentam cenários de proteção de documentos em que o candidato precisa escolher o mecanismo correto: permitir apenas comentários, bloquear leitura sem senha ou permitir abrir sem editar. Trocar senha de abertura por senha de modificação muda o gabarito, pois a primeira criptografa o conteúdo (ilegível sem a senha) enquanto a segunda permite abrir e ler, impedindo apenas salvar alterações sobre o original sem a senha. Conhecer as marcas d'água como sinalizador visual e as permissões do SharePoint/OneDrive como camada complementar em nuvem completa o domínio do controle de acesso a documentos.",
      "preRequisitos": [
        "Conhecimento da interface básica do Microsoft Word (guias Revisão e Arquivo)",
        "Abertura e edição de documentos de texto (.docx)"
      ],
      "objetivosObservaveis": [
        "Aplicar restrição de edição por nível (somente leitura, comentários, preenchimento de formulários, edição sem restrições em exceções)",
        "Escolher corretamente entre senha de abertura (criptografia) e senha de modificação conforme o requisito do cenário",
        "Reconhecer a camada de permissões em SharePoint/OneDrive e suas condições, incluindo expiração de link quando disponível no plano",
        "Avaliar os limites da proteção local do Word e o que ela não garante"
      ],
      "competencias": [
        "Controle de acesso a documentos",
        "Triagem de requisitos de proteção conforme cenário de uso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-2-topico-10-sub-1 (Rastreamento de alterações e comentários) — outra camada de controle e revisão de documentos do Word"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Proteção, restrições de edição e senhas de proteção integram o conteúdo programático de informática para concursos porque testam o entendimento dos mecanismos de controle de acesso do Word, especialmente a diferença crítica entre senha de abertura e senha de modificação, que altera diretamente o gabarito de questões de cenário. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Proteção inclui restrições de edição (limitar quem pode editar, comentar ou somente visualizar), senhas de abertura e modificação, e marcas d'água. 'Restrição de Edição' (Revisão > Restringir Edição) define áreas permitidas e níveis de acesso. Senhas: 'senha para abrir' (criptografa o conteúdo) e 'senha para modificar' (permite abrir e ler, mas impede salvar alterações sobre o original sem a senha). Permissões no SharePoint/OneDrive controlam edição, comentário ou visualização, com opções de expiração de link e proteção por senha para links compartilhados quando disponíveis no plano.",
      "intermediario": "Na camada de edição, Revisão > Restringir Edição permite limitar o que o destinatário pode fazer — somente leitura, comentários, preenchimento de formulários ou edição sem restrições apenas em exceções marcadas — ativando a proteção com senha opcional para liberar. Sem senha, a restrição é cooperativa (o usuário pode desativá-la); com senha, ela impõe barreira efetiva. Na camada de conteúdo, Arquivo > Informações > Proteger Documento > Criptografar com Senha define a senha para abrir; sem ela, o conteúdo permanece ilegível. Marcas d'água servem como sinalizador visual de status do documento (ex.: rascunho, confidencial).",
      "avancado": "A senha de modificação permite abrir e ler o documento, mas impede salvar alterações sobre o original sem a senha; quem impede a abertura é a senha de criptografia (para abrir). A senha deve ser transmitida por canal distinto do arquivo para não comprometer a proteção. Combinar camadas conforme o requisito: Restringir Edição (somente leitura) para desencorajar alterações e senha para modificar para impedir que a versão original seja sobrescrita, mantendo a leitura livre. Registrando o limite técnico: cópias podem ser salvas como novo arquivo, e o controle de circulação pertence às permissões do ambiente em nuvem (quando disponível no plano).",
      "especialista": "O especialista avalia qual camada de proteção aplicar a cada requisito: senha de abertura para impedir leitura não autorizada, senha de modificação para permitir leitura sem alterar o original, Restringir Edição para permitir apenas comentários ou preenchimento de formulários, e permissões do SharePoint/OneDrive para controle de circulação com expiração de link. Sabe que a proteção local do Word não impede cópias do arquivo salvas como novo documento, nem substitui criptografia de disco ou políticas de retenção; o controle de circulação efetivo pertence ao ambiente em nuvem, quando disponível no plano contratado."
    },
    "comparacoes": [
      {
        "tema": "Senha de abertura vs senha de modificação no Word",
        "a": {
          "rotulo": "Senha de abertura (criptografia)",
          "texto": "Definida em Arquivo > Informações > Proteger Documento > Criptografar com Senha. Sem a senha, o conteúdo permanece ilegível; impede a abertura do documento."
        },
        "b": {
          "rotulo": "Senha de modificação",
          "texto": "Permite abrir e ler o documento livremente, mas impede salvar alterações sobre o original sem a senha. Não impede a leitura, apenas a gravação de modificações sobre o arquivo original."
        },
        "diferencaGabarito": "Escolha senha de abertura quando o requisito for bloquear a leitura sem autorização; escolha senha de modificação quando o requisito for permitir abrir e ler, mas impedir alterações sobre o original. Trocar um pelo outro inverte o comportamento esperado e muda o gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A senha de modificação impede a leitura do documento.",
        "porqueErrada": "A afirmação está incorreta porque confunde os dois tipos de senha: a senha de modificação não trava a abertura nem a leitura — ela apenas bloqueia a gravação de mudanças sobre o arquivo original sem a senha. Só a senha de abertura, que criptografa o conteúdo, impede que o documento seja lido sem autorização.",
        "versaoCorreta": "Correto: a senha de modificação permite abrir e ler, mas impede salvar alterações sobre o original sem a senha; somente a senha de abertura (criptografia) impede a leitura."
      },
      {
        "afirmacaoEquivocada": "Restringir Edição ativada sem senha de proteção impede que qualquer pessoa edite o documento.",
        "porqueErrada": "Sem senha, a restrição de edição é cooperativa: o próprio usuário pode desativá-la. A senha opcional é que impõe barreira efetiva para liberar a edição.",
        "versaoCorreta": "Correto: Restringir Edição sem senha é cooperativa e pode ser desativada pelo usuário; com senha, ela impõe barreira efetiva para liberar a edição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Restrições de edição (Revisão > Restringir Edição)",
        "Senha de abertura (criptografia)",
        "Senha de modificação",
        "Marca d'água",
        "Permissões em SharePoint/OneDrive"
      ],
      "regras": [
        "Senha de abertura criptografa o conteúdo; sem ela, o documento é ilegível",
        "Senha de modificação permite abrir e ler, mas impede salvar alterações sobre o original",
        "Restrição de edição sem senha é cooperativa (pode ser desativada); com senha, impõe barreira",
        "Marcas d'água servem como sinalizador visual de status do documento"
      ],
      "comparacoes": [
        "Senha de abertura = impede leitura sem senha; senha de modificação = permite leitura, impede gravação de alterações sobre o original"
      ],
      "fluxos": [
        "Escolher requisito de proteção > aplicar camada adequada (restrição, senha abertura, senha modificação, nuvem) > verificar limites"
      ],
      "excecoes": [
        "Cópias podem ser salvas como novo arquivo; o controle de circulação pertence às permissões do ambiente em nuvem (quando disponível no plano)"
      ],
      "palavrasChave": [
        "restrição",
        "edição",
        "senha",
        "abertura",
        "modificação",
        "criptografia",
        "marca d'água",
        "OneDrive",
        "SharePoint"
      ],
      "checklist": [
        "Aplicar restrição de edição por nível conforme requisito",
        "Escolher senha de abertura para bloquear leitura",
        "Escolher senha de modificação para impedir gravação sobre o original",
        "Usar marcas d'água como sinalizador visual de status",
        "Complementar com permissões do SharePoint/OneDrive quando disponível",
        "Avaliar limites da proteção local do Word"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Restringir a edição do documento para que os revisores apenas comentem, sem alterar o corpo do texto.",
        "dados": "Documento aberto no Microsoft Word; guia Revisão disponível; opção Restringir Edição desativada inicialmente.",
        "conceitos": [
          "Restrições de edição (Revisão > Restringir Edição)",
          "Nível de acesso: somente comentários"
        ],
        "estrategia": "Acessar Revisão > Restringir Edição, selecionar o nível que permite apenas comentários e ativar a proteção, com ou senza senha conforme o grau de barreira desejado.",
        "execucao": [
          "Abrir o documento no Microsoft Word",
          "Ir para a guia Revisão na faixa de opções",
          "Clicar em Restringir Edição e selecionar o nível 'somente comentários'",
          "Ativar a proteção (definir senha opcional para liberar a edição)"
        ],
        "resultado": "Revisão > Restringir Edição > selecionar o nível (comentários) > Ativar Proteção (senha opcional). Sem senha, a restrição é cooperativa (pode ser desativada pelo usuário); com senha, há barreira efetiva.",
        "justificativa": "O resultado é o gabarito porque Restringir Edição no nível comentários permite que revisores adicionem anotações sem modificar o corpo do texto, e a ativação com ou senza senha define se a restrição é cooperativa ou impõe barreira efetiva.",
        "errosFrequentes": [
          "Achar que sem senha a restrição é absoluta; sem senha ela é cooperativa e pode ser desativada pelo usuário",
          "Confundir Restringir Edição com criptografia do documento; a restrição limita ações no Word, não torna o conteúdo ilegível"
        ],
        "variacao": "O requisito muda para permitir apenas preenchimento de formulários; o aluno deve selecionar o nível correspondente em Restringir Edição, não o de somente comentários."
      },
      {
        "tipo": "aplicacao",
        "problema": "Documento com dados sigilosos precisa ser enviado a um único destinatário que não deve abrir sem autorização.",
        "dados": "Documento contendo dados sigilosos; guia Arquivo > Informações > Proteger Documento disponível; canal separado para transmissão da senha.",
        "conceitos": [
          "Senha de abertura (criptografia)",
          "Transmissão da senha por canal distinto"
        ],
        "estrategia": "Usar Arquivo > Informações > Proteger Documento > Criptografar com Senha para definir a senha de abertura, de modo que sem a senha o conteúdo permaneça ilegível, e transmitir a senha por canal distinto do arquivo.",
        "execucao": [
          "Abrir o documento no Microsoft Word",
          "Ir para Arquivo > Informações > Proteger Documento > Criptografar com Senha",
          "Definir a senha de abertura e confirmá-la",
          "Transmitir a senha ao destinatário por canal distinto do arquivo (ex.: telefone ou mensagem separada)",
          "Enviar o documento criptografado por e-mail ou outro meio"
        ],
        "resultado": "Arquivo > Informações > Proteger Documento > Criptografar com Senha: define a senha para abrir; sem ela, o conteúdo permanece ilegível. Transmitir a senha por canal distinto do arquivo. Complemento: se o envio for por SharePoint/OneDrive, restringir o compartilhamento a pessoas específicas — a criptografia local e as permissões em nuvem são camadas complementares.",
        "justificativa": "O resultado é o gabarito porque a senha de abertura (criptografia) é o mecanismo que impede a leitura do conteúdo sem a senha, atendendo ao requisito de que o destinatário não possa abrir sem autorização, e o envio da senha por canal distinto preserva a confidencialidade.",
        "errosFrequentes": [
          "Usar senha de modificação em vez de senha de abertura, que não impede a leitura",
          "Enviar a senha no mesmo e-mail que o documento, comprometendo a proteção caso o e-mail seja interceptado"
        ],
        "variacao": "O envio é feito por SharePoint/OneDrive; além da criptografia local, o aluno deve restringir o compartilhamento a pessoas específicas e, quando disponível no plano, definir expiração de link."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a senha de modificação impede a leitura do documento protegido no Word.",
        "dados": "Documento protegido com senha de modificação; o usuário tenta abrir o arquivo e consegue ler o conteúdo, mas não consegue salvar alterações sobre o original.",
        "conceitos": [
          "Senha de modificação",
          "Diferença entre senha de abertura e senha de modificação"
        ],
        "estrategia": "Diagnosticar que a senha de modificação permite abrir e ler o documento, impedindo apenas salvar alterações sobre o original sem a senha; esclarecer que quem impede a abertura e a leitura é a senha de criptografia (senha para abrir).",
        "execucao": [
          "Abrir o documento protegido com senha de modificação e confirmar que a leitura é possível",
          "Tentar salvar alterações sobre o original e observar que é bloqueado sem a senha",
          "Comparar com o comportamento da senha de abertura, que impediria até a abertura do arquivo",
          "Concluir que a afirmação do usuário está incorreta: a senha de modificação não impede a leitura"
        ],
        "resultado": "Incorreto: a senha para modificar permite abrir e ler o documento, mas impede salvar alterações sobre o original sem a senha; quem impede a abertura é a senha de criptografia (para abrir).",
        "justificativa": "O resultado é o gabarito porque a senha de modificação não restringe a leitura: ela apenas bloqueia a gravação de alterações sobre o arquivo original, enquanto a senha de abertura (criptografia) é quem torna o conteúdo ilegível sem a senha.",
        "errosFrequentes": [
          "Confundir senha de modificação com senha de abertura, atribuindo à primeira o poder de impedir a leitura",
          "Achar que salvar o documento como novo arquivo contorna a senha de modificação de forma proibida; salvar como novo arquivo é possível, mas não altera a proteção do original"
        ],
        "variacao": "O usuário também confunde Restringir Edição com criptografia, afirmando que ambas tornam o documento ilegível; deve-se esclarecer que Restringir Edição limita ações no Word, não criptografa o conteúdo."
      }
    ]
  }
};
