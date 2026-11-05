const enriParcialM3U4P5 = {
  "m3-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Retenção e descarte de gravações aparecem em concursos de TI por ligarem governança de dados à LGPD. Guardar além do necessário amplia o risco de vazamento e contraria a minimização; descartar inseguramente deixa dados recuperáveis. O candidato deve distinguir apagar referência de eliminação segura, conhecer a tabela de temporalidade documental e as medidas de proteção para resolver itens de múltipla escolha e verdadeiro/falso sobre responsabilidade do agente público.",
      "preRequisitos": [
        "Unidade 4.3 (consentimento e LGPD)",
        "Noção de dado pessoal e dado sensível",
        "Gestão documental básica e tabela de temporalidade"
      ],
      "objetivosObservaveis": [
        "Definir retenção de gravações",
        "Explicar descarte seguro e sua diferença de apagar referência",
        "Citar medidas de proteção (criptografia, controle de acesso, auditoria)",
        "Relacionar retenção à tabela de temporalidade documental"
      ],
      "competencias": [
        "Gestão do ciclo de vida da informação",
        "Proteção de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m3-u4-t3-s1 (Políticas de gravação institucional)",
        "m3-u4-t3-s2 (Consentimento e bases legais (LGPD))"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Retenção e descarte seguro de gravações ligam governança documental à LGPD (arts. 6º, 7º, 16, 46, 48) e integram o conteúdo programático em itens de múltipla escolha e C/E sobre responsabilidade do agente público, com itens sobre distinção entre apagar referência e eliminação segura, alinhamento à tabela de temporalidade documental, criptografia em repouso, controle de acesso por perfil e verificação de que guarda indefinida amplia superfície de vazamento. A classificação média reflete a presença do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Retenção é o período durante o qual uma gravação é mantida, definido por norma de gestão documental e pela LGPD. O aluno aprende que nem toda gravação deve ser guardada para sempre: o princípio da minimização orienta a não reter além do necessário. Descarte significa eliminar o arquivo, não apenas remover o link ou mover para a lixeira. Proteção básica inclui controle de acesso por perfil e backups seguros. Em serviço público, a retenção observa a tabela de temporalidade documental, que fixa prazos de guarda e destinação.",
      "intermediario": "O aluno distingue retenção de descarte: reter preserva a gravação por um prazo definido; descartar elimina-a de forma que não seja recuperável. Aplica criptografia em repouso e em trânsito, controle de acesso por perfil e registro de auditoria (logs) de quem acessou o conteúdo. Verifica se a plataforma oferece retenção automática e marca d'água, conferindo a documentação oficial do plano contratado. Alinha a retenção à tabela de temporalidade e evita o acúmulo indefinido que amplia a superfície de vazamento.",
      "avancado": "O aluno desenha o ciclo de vida da gravação: criação, uso, retenção (prazo da tabela de temporalidade) e descarte seguro. Implementa eliminação irreversível (sobrescrita ou cripto-shredding), remove cópias de backups e registra o descarte em log de auditoria. Combina criptografia, controle de acesso e auditoria, pois a criptografia sozinha não elimina o risco se chaves e permissões falharem. Trata exceções em que obrigação de guarda exige retenção maior que o prazo padrão e documenta decisões de retenção e descarte.",
      "especialista": "O aluno arquiteta a governança completa de gravações institucionais, definindo políticas de retenção, descarte e proteção por tipo de conteúdo e plano de plataforma. Estabelece rotinas de eliminação segura, verificação de backups e logs de auditoria integrados à gestão documental. Coordena exceções de guarda por obrigação legal, avalia fornecedores de nuvem quanto a criptografia e retenção automática, e reporta incidentes de vazamento conforme a política institucional e a LGPD, incluindo comunicação de incidente de dados pessoais quando aplicável."
    },
    "comparacoes": [
      {
        "tema": "Retenção x descarte seguro",
        "a": {
          "rotulo": "Retenção",
          "texto": "Preservar a gravação por um prazo definido pela tabela de temporalidade documental e pela LGPD, respeitando o princípio da minimização."
        },
        "b": {
          "rotulo": "Descarte seguro",
          "texto": "Eliminar a gravação de forma irreversível (sobrescrita ou cripto-shredding), remover cópias de backup e registrar o descarte em log de auditoria."
        },
        "diferencaGabarito": "Retenção mantém o dado disponível pelo prazo necessário; descarte seguro o torna irrecuperável. Ambos exigem regra definida, nunca improviso, e o descarte só ocorre após o término do prazo de retenção."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Mover para a lixeira é descarte seguro.",
        "porqueErrada": "O arquivo permanece recuperável na lixeira e em backups; não houve eliminação irreversível do conteúdo.",
        "versaoCorreta": "Descarte seguro exige exclusão irreversível (sobrescrita/cripto-shredding), remoção de backups e registro em log de auditoria."
      },
      {
        "afirmacaoEquivocada": "Quanto mais tempo guardar a gravação, melhor.",
        "porqueErrada": "Contraria o princípio da minimização da LGPD e amplia a superfície de vazamento sem necessidade.",
        "versaoCorreta": "Seguir o prazo definido na tabela de temporalidade documental, descartando com eliminação segura ao término do prazo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "retenção",
        "descarte seguro",
        "criptografia",
        "controle de acesso",
        "auditoria",
        "temporalidade"
      ],
      "regras": [
        "criação → uso → retenção (prazo) → descarte seguro",
        "minimização: não reter além do prazo definido pela tabela de temporalidade"
      ],
      "comparacoes": [
        "reter preserva a gravação; descartar elimina-a — ambos precisam de regra, não de improviso"
      ],
      "fluxos": [
        "gravação criada → usada → retida pelo prazo da tabela → descartada com eliminação segura"
      ],
      "excecoes": [
        "obrigação de guarda legal pode exigir retenção maior que o prazo padrão"
      ],
      "palavrasChave": [
        "ciclo de vida",
        "retenção",
        "descarte",
        "criptografia",
        "log",
        "temporalidade"
      ],
      "checklist": [
        "Defino retenção?",
        "Explico descarte seguro?",
        "Cito medidas de proteção?",
        "Relaciono com temporalidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que definir um prazo de retenção para gravações institucionais antes de armazená-las no servidor?",
        "dados": "Reunião de treinamento gravada e armazenada por tempo indeterminado no servidor da instituição, sem prazo definido nem procedimento de descarte.",
        "conceitos": [
          "retenção",
          "minimização"
        ],
        "estrategia": "Explicar que retenção é o período de guarda definido por norma e que manter além do necessário amplia o risco de vazamento e custo, contrariando a LGPD.",
        "execucao": [
          "Identificar o tipo de gravação e o conteúdo envolvido.",
          "Consultar a tabela de temporalidade documental da instituição.",
          "Fixar o prazo de guarda e agendar o descarte ao término do prazo."
        ],
        "resultado": "Evita manter dados além do necessário, reduz risco e custo, e atende a LGPD e às normas de gestão documental.",
        "justificativa": "Definir prazo alinha a retenção ao princípio da minimização e à tabela de temporalidade, impedindo o acúmulo indefinido que amplia a superfície de vazamento e exposição da instituição.",
        "errosFrequentes": [
          "Achar que reter para sempre é mais seguro do que descartar.",
          "Confundir retenção com armazenamento permanente sem prazo."
        ],
        "variacao": "Mudar para uma gravação de processo seletivo contendo dados de candidatos e reaplicar a definição de prazo de retenção com base na tabela de temporalidade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como descartar com segurança uma gravação com dados pessoais após o prazo de retenção?",
        "dados": "Gravação de reunião com dados de clientes, prazo de 24 meses encerrado, armazenada em nuvem institucional e em backup diário automático.",
        "conceitos": [
          "descarte seguro",
          "eliminação irreversível",
          "backup seguro"
        ],
        "estrategia": "Aplicar exclusão segura (sobrescrita ou cripto-shredding), remover cópias de backups e registrar o descarte em log de auditoria com data e responsável.",
        "execucao": [
          "Confirmar que o prazo de retenção de 24 meses expirou.",
          "Excluir o arquivo com sobrescrita ou cripto-shredding para torná-lo irrecuperável.",
          "Localizar e remover cópias presentes nos backups diários.",
          "Registrar data, responsável e método no log de descarte."
        ],
        "resultado": "Exclusão segura (sobrescrita/cripto-shredding), registro de descarte e verificação de backups.",
        "justificativa": "Apagar a referência apenas remove o acesso, não o dado; somente a eliminação segura somada à remoção de backups garante que o conteúdo não permaneça recuperável e não cause vazamento.",
        "errosFrequentes": [
          "Achar que mover o arquivo para a lixeira já é descarte seguro.",
          "Esquecer de verificar e remover cópias armazenadas em backups."
        ],
        "variacao": "Mudar para uma gravação armazenada apenas em disco local, sem backup, e reaplicar o procedimento de eliminação segura e registro de descarte."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Apagar o link da gravação é suficiente para considerar o descarte seguro da reunião.'",
        "dados": "Gravação de reunião pública compartilhada por link; o link foi removido da página, mas o arquivo permanece no servidor e em backups da instituição.",
        "conceitos": [
          "descarte seguro",
          "recuperabilidade",
          "backup"
        ],
        "estrategia": "Mostrar que remover o link elimina apenas a referência de acesso, não o arquivo, e que o dado continua recuperável até que se aplique eliminação segura e limpeza de backups.",
        "execucao": [
          "Identificar que remover o link não exclui o arquivo de gravação.",
          "Verificar se o arquivo ainda está armazenado no servidor.",
          "Verificar se há cópias em backups da instituição.",
          "Aplicar eliminação segura e remover os backups antes de considerar o descarte concluído."
        ],
        "resultado": "Errado. É necessário excluir o arquivo e verificar backups; caso contrário os dados permanecem.",
        "justificativa": "A leitura ingênua confunde referência com conteúdo: sem o link o dado não é acessível pela página, mas continua no armazenamento e em backups, onde pode ser recuperado e vazado.",
        "errosFrequentes": [
          "Confiar que apagar o link equivale a descartar o dado.",
          "Não checar se o arquivo e seus backups ainda existem após remover o link."
        ],
        "variacao": "Mudar para uma gravação movida para a lixeira sem exclusão segura e reaplicar a conclusão de que a lixeira não é descarte seguro."
      }
    ]
  }
};
