const enriParcialM7U1P4 = {
  "m7-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Linhagem e catálogo respondem a perguntas distintas sobre o dado. A linhagem mostra a trajetória do número; o catálogo é o índice pesquisável do acervo. Sem essa distinção, não se rastreia um valor incorreto.",
      "preRequisitos": [
        "Conceito de tabela, coluna e registro",
        "Noção de rotina de extração e carga de dados",
        "Noção de indicador e de relatório gerencial"
      ],
      "objetivosObservaveis": [
        "Distinguir linhagem de catálogo e explicar para que cada um serve",
        "Identificar quais campos alimentam quais outros em uma rotina de transformação",
        "Localizar um ativo no catálogo e confirmar seu dono e classificação de sensibilidade"
      ],
      "competencias": [
        "Rastrear a causa de um valor incorreto seguindo o caminho do dado",
        "Avaliar o impacto de uma mudança de coluna nos relatórios que consomem essa tabela"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — metadados descritivos sustentam o catálogo e metadados de processo sustentam a linhagem",
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — a linhagem percorre os estágios de coleta, integração, armazenamento, transformação e consumo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de governança de dados; aparece em itens que opõem linhagem e catálogo."
      }
    },
    "niveis": {
      "iniciante": "Linhagem é o caminho percorrido pelo dado, da fonte até o relatório, registrando quais campos alimentaram quais outros. Serve para rastrear um valor incorreto até a causa. Catálogo é o inventário pesquisável do acervo, com descrição, dono e classificação de sensibilidade.",
      "intermediario": "A linhagem completa exige instrumentação nas etapas de transformação, não apenas declarar a fonte de origem. Registrar 'fonte: sistema X' é origem parcial, não linhagem. O catálogo registra metadados de negócio e técnicos. Sem dono e atualização periódica, o catálogo fica desatualizado.",
      "avancado": "O catálogo é um índice do estado atual dos ativos, enquanto a linhagem é um histórico do fluxo. Pode haver catálogo sem registro de transformação. Linhagem sem catálogo não é encontrável; catálogo sem linhagem não permite rastrear.",
      "especialista": "Controles recomendados: proprietário definido por ativo, atualização periódica do catálogo, registro de versão dos pipelines. A linhagem depende de metadados de processamento; o catálogo depende de metadados descritivos.",
    },
    "comparacoes": [
      {
        "tema": "Linhagem versus catálogo: caminho versus acervo",
        "a": {
          "rotulo": "Linhagem",
          "texto": "Registra a trajetória do dado da origem ao relatório, com campos, rotinas, frequência e versão de cada transformação. Responde de onde veio um número.",
        },
        "b": {
          "rotulo": "Catálogo",
          "texto": "É o inventário pesquisável do acervo, com descrição, dono, localização e classificação de sensibilidade. Responde o que existe, onde está e para que serve.",
        },
        "diferencaGabarito": "A diferença está na pergunta: a linhagem rastreia o caminho e a transformação; o catálogo descreve a existência e a propriedade dos ativos. Um não substitui o outro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Ter um catálogo de dados significa que a organização já tem linhagem completa.'",
        "porqueErrada": "O catálogo descreve o estado atual dos ativos e a linhagem registra a trajetória e as transformações. Pode haver um catálogo bem preenchido sem registro de transformação.",
        "versaoCorreta": "Errado. O catálogo diz o que existe e o que significa; a linhagem diz como o valor foi calculado. Um catálogo sem linhagem permite descobrir o ativo.",
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Registrar apenas a fonte de origem, por exemplo sistema X, já constitui linhagem completa do dado.'",
        "porqueErrada": "A declaração de origem parcial informa de onde o dado saiu, mas não registra quais campos alimentaram quais outros. Linhagem exige rastrear cada etapa de transformação.",
        "versaoCorreta": "Errado. Nomear a fonte de origem não é linhagem; é apenas a primeira declaração de procedência. Linhagem completa instrumenta todas as etapas de transformação.",
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "linhagem de dados",
        "catálogo de dados",
        "proveniência",
        "transformação",
        "rastreabilidade"
      ],
      "regras": [
        "a linhagem registra quais campos alimentam quais outros em cada rotina",
        "o catálogo deve ter dono definido e atualização periódica",
        "linhagem depende de metadados de processamento; catálogo depende de metadados descritivos"
      ],
      "comparacoes": [
        "linhagem é histórico do fluxo; catálogo é índice do estado atual dos ativos"
      ],
      "fluxos": [
        "percorrer extração, transformação, carga e agregação para localizar onde um valor divergiu",
        "consultar o catálogo para confirmar a definição do indicador e o dono"
      ],
      "excecoes": [
        "registro apenas da fonte de origem não é linhagem completa",
        "catálogo sem dono e sem revisão fica desatualizado e perde a função de descoberta"
      ],
      "palavrasChave": [
        "linhagem",
        "catálogo",
        "proveniência",
        "rastreabilidade",
        "metadados"
      ],
      "checklist": [
        "Pergunto se a resposta exige caminho do dado ou inventário do acervo?",
        "Verifico se a linhagem cobre todas as etapas de transformação?",
        "Confiro se o catálogo tem dono, localização e classificação de sensibilidade?",
        "Descarto a hipótese de que catálogo sozinho permite rastrear um valor incorreto?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O número de um painel não bate com a base de origem. O aluno deve decidir se consulta primeiro o catálogo ou a linhagem.",
        "dados": "Painel com valor divergente; pipeline com extração, transformação, carga e agregação; catálogo com definição do indicador.",
        "conceitos": [
          "linhagem",
          "catálogo de dados"
        ],
        "estrategia": "Percorrer primeiro a linhagem para localizar onde o valor se alterou, e consultar o catálogo em seguida.",
        "execucao": [
          "1) Seguir a linhagem da agregação do painel até a fonte de origem.",
          "2) Identificar em qual etapa o valor divergiu.",
          "3) Consultar o catálogo para confirmar a definição do indicador e o dono."
        ],
        "resultado": "Consulta-se primeiro a linhagem, para localizar onde o valor divergiu; o catálogo confirma depois a definição do indicador e o dono.",
        "justificativa": "O gabarito distingue o papel de cada recurso: a linhagem rastreia o caminho do dado; o catálogo descreve o ativo e sua propriedade.",
        "errosFrequentes": [
          "Consultar apenas o catálogo e tentar encontrar o erro na descrição do indicador.",
          "Achar que consultar catálogo e linhagem é a mesma coisa, com ordem indiferente."
        ],
        "variacao": "Se a dúvida fosse saber o proprietário da tabela e sua classificação de sensibilidade, o recurso correto seria o catálogo.",
      },
      {
        "tipo": "aplicacao",
        "problema": "Será adicionada uma coluna à tabela de pagamentos. Antes da mudança, o analista precisa avaliar quais relatórios e rotinas serão afetados.",
        "dados": "Tabela de pagamentos com várias colunas; relatórios e agregações que consomem essa tabela; rotinas de processamento.",
        "conceitos": [
          "linhagem de dados",
          "impacto de mudança",
          "campo de destino"
        ],
        "estrategia": "Usar a linhagem para mapear os relatórios e agregações que consomem a tabela de pagamentos, distinguindo os que usam a nova coluna.",
        "execucao": [
          "1) Consultar a linhagem da tabela de pagamentos para listar os relatórios que a consomem.",
          "2) Identificar quais agregações usam colunas vizinhas e quais dependem da coluna a ser adicionada.",
          "3) Listar as rotinas que precisam de reprocessamento e quem deve ser notificado antes da mudança."
        ],
        "resultado": "A linhagem permite avaliar o impacto: quais relatórios e agregações consomem a tabela, quais rotinas precisam de reprocessamento.",
        "justificativa": "Sem linhagem, a mudança é um experimento e o efeito só aparece quando o relatório quebra. Com a linhagem, o impacto é previsível.",
        "errosFrequentes": [
          "Supor que apenas os relatórios que citam a coluna nova serão afetados, ignorando agregações indiretas.",
          "Não notificar os donos dos relatórios que consomem colunas vizinhas, que podem depender de regras ocultas da tabela."
        ],
        "variacao": "Se a mudança fosse remover uma coluna usada por um único relatório, a linhagem ainda avaliaria o impacto, com custo menor.",
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que ter um catálogo equivale a ter linhagem completa, pois ambos descrevem os ativos. Está correto?",
        "dados": "Organização com catálogo bem preenchido (descrição, dono, localização, classificação de sensibilidade) mas sem registro de transformação.",
        "conceitos": [
          "catálogo de dados",
          "linhagem de dados",
          "transformação"
        ],
        "estrategia": "Confrontar a definição de catálogo com a de linhagem e verificar que o catálogo registra o estado atual dos ativos.",
        "execucao": [
          "1) Reconhecer que o catálogo descreve o que existe, quem é o dono e onde está cada ativo.",
          "2) Verificar que não há registro de como os campos foram transformados.",
          "3) Concluir que catálogo sem linhagem não permite saber como o número foi calculado."
        ],
        "resultado": "A afirmação está errada. O catálogo descreve o estado atual dos ativos; a linhagem registra a trajetória e as transformações.",
        "justificativa": "A leitura ingênua trata catálogo e linhagem como sinônimos, mas um é índice do estado e o outro é histórico do fluxo.",
        "errosFrequentes": [
          "Considerar que a presença de descrição e dono no catálogo substitui o registro de transformações.",
          "Achar que linhagem e catálogo são a mesma coisa porque ambos usam metadados."
        ],
        "variacao": "Se o catálogo incluísse um campo 'última transformação conhecida', a resposta continuaria errada, porque isso não é linhagem completa.",
      }
    ]
  },
  "m7-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O ciclo de vida dos dados define as fases por que passa o dado e o controle que cada uma exige. Sem dono, prazo e critério de entrada e saída, a guarda se torna indefinida.",
      "preRequisitos": [
        "Noção de banco de dados e de arquivo",
        "Noção de finalidade de uso de um dado",
        "Conceito de prazo de retenção"
      ],
      "objetivosObservaveis": [
        "Descrever as cinco fases do ciclo de vida dos dados",
        "Associar regras de retenção e descarte a cada fase",
        "Aplicar o princípio de minimização em cada etapa"
      ],
      "competencias": [
        "Definir finalidade e qualidade mínima na origem da coleta",
        "Decidir quando eliminar ou anonimizar um dado ao fim da retenção"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — cada fase do ciclo é governada por metadados de criação, dono e prazo",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a qualidade na origem da coleta depende dessas dimensões"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de governança de dados; aparece em itens sobre fases do ciclo de vida, retenção e descarte seguro."
      }
    },
    "niveis": {
      "iniciante": "O ciclo de vida descreve as fases por que passa o dado. Na criação e coleta, define-se a finalidade e a base de coleta. No armazenamento e integração, guarda-se com estrutura, metadados, backup e controle de acesso. No uso, consulta e envio a terceiros ficam restritos à finalidade declarada.",
      "intermediario": "No arquivamento, guarda-se por obrigação legal. No descarte, elimina-se ao fim da retenção. Descarte sem verificação mantém o dado recuperável. Cada fase tem dono, prazo e critério de entrada e saída.",
      "avancado": "O dado integrado multiplica valor e risco, porque a integração junta origens com permissões. No compartilhamento externo, o órgão entrega apenas o mínimo. A retenção tem dois limites: manter enquanto houver finalidade, e não manter indefinidamente.",
      "especialista": "O ciclo é governado por metadados: sem registro de criação, dono e prazo, o descarte vira arbitrário. Eliminar dado que deveria ser arquivado. A minimização é transversal: o dado que se coleta é o que se guarda, se usa e se mantém.",
    },
    "comparacoes": [
      {
        "tema": "Arquivamento versus descarte: guarda por obrigação versus eliminação segura",
        "a": {
          "rotulo": "Arquivamento",
          "texto": "Guarda por obrigação legal, com custo controlado e acesso mais restrito, aplicável a dados frios.",
        },
        "b": {
          "rotulo": "Descarte",
          "texto": "Eliminação segura e verificável ao fim da retenção; abrange cópias, backups e caches.",
        },
        "diferencaGabarito": "A diferença está no objetivo: arquivar mantém o dado por obrigação, com acesso restrito; descartar encerra o ciclo com eliminação verificável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'No ciclo de vida dos dados, descarte significa apenas apagar o arquivo principal.'",
        "porqueErrada": "O descarte efetivo envolve cópias, backups, caches e exportações. Apagar a base original mantendo cópias distribuídas não encerra o ciclo nem reduz o risco.",
        "versaoCorreta": "Errado. O descarte deve ser seguro e verificável, abrangendo todas as cópias e réplicas do dado. Apagar apenas o arquivo principal deixa o dado recuperável.",
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Manter dados indefinidamente por precaução é uma boa prática de retenção.'",
        "porqueErrada": "A guarda além do necessário aumenta custo de armazenamento, risco de vazamento e obrigações de segurança, sem benefício.",
        "versaoCorreta": "Errado. Manter por precaução sem finalidade viola a minimização. A conduta correta é definir prazo de retenção justificado e eliminar ao término.",
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ciclo de vida dos dados",
        "criação e coleta",
        "armazenamento e integração",
        "descarte",
        "minimização"
      ],
      "regras": [
        "coletar apenas o que será usado, com qualidade mínima na origem",
        "cada fase tem dono, prazo e critério de entrada e saída",
        "descarte deve ser seguro e verificável, com registro da operação"
      ],
      "comparacoes": [
        "arquivamento mantém por obrigação com acesso restrito; descarte elimina de forma verificável ao fim da retenção"
      ],
      "fluxos": [
        "definir finalidade e coletar com qualidade mínima na origem",
        "guardar com estrutura, metadados, backup e controle de acesso",
        "eliminar de forma segura e registrada ao fim da retenção"
      ],
      "excecoes": [
        "eliminar dado que deveria ser arquivado é tão grave quanto o excesso de guarda",
        "descarte sem verificação mantém o dado recuperável em cópias e backups"
      ],
      "palavrasChave": [
        "ciclo de vida",
        "coleta",
        "retenção",
        "descarte",
        "minimização"
      ],
      "checklist": [
        "Pergunto se a fase tem dono, prazo e critério de entrada e saída?",
        "Verifico se a coleta respeita a minimização e a finalidade declarada?",
        "Confiro se o descarte abrange cópias, backups e caches?",
        "Descarto a hipótese de guarda indefinida por precaução?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Listar as cinco fases do ciclo de vida para um registro de ocorrência atendido por uma secretaria.",
        "dados": "Registro de ocorrência criado no atendimento; base com backup, metadados e controle de acesso; guarda pelo prazo e eliminação com registro.",
        "conceitos": [
          "ciclo de vida dos dados",
          "fases",
          "controle por fase"
        ],
        "estrategia": "Percorrer as cinco fases em ordem, associando a cada uma o controle adequado: coleta, armazenamento, uso, arquivamento e descarte.",
        "execucao": [
          "1) Criar o registro no atendimento com finalidade definida.",
          "2) Armazenar em base com backup, metadados e controle de acesso.",
          "3) Arquivar pelo prazo legal com acesso mais restrito.",
          "4) Descartar após o prazo, com eliminação segura e registro da operação."
        ],
        "resultado": "As cinco fases são: criação e coleta com finalidade definida; armazenamento com backup, metadados e controle de acesso; uso restrito à finalidade; arquivamento por obrigação legal; descarte seguro após o prazo de retenção.",
        "justificativa": "O gabarito decorre de cada fase ter controle próprio e de o ciclo ser governado por metadados de criação, dono e prazo.",
        "errosFrequentes": [
          "Pular a fase de arquivamento e passar direto do uso para o descarte.",
          "Tratar todas as fases como iguais, sem dono, prazo e critério próprios."
        ],
        "variacao": "Se a área pedisse guarda indefinida por precaução, a resposta seria definir prazo de retenção justificado e eliminar ao término.",
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma área pede manter indefinidamente, por precaução, a base de candidatos não aprovados em um processo seletivo. Avaliar o pedido.",
        "dados": "Base de candidatos não aprovados; finalidade encerrada; guarda por precaução sem prazo definido; risco de vazamento e custo de armazenamento.",
        "conceitos": [
          "minimização",
          "retenção",
          "finalidade"
        ],
        "estrategia": "Verificar que a finalidade encerrou com o processo, e que o correto é definir prazo de retenção e eliminar ao término.",
        "execucao": [
          "1) Reconhecer que a finalidade da coleta terminou com o processo seletivo.",
          "2) Identificar que guarda indefinida aumenta custo e risco.",
          "3) Definir prazo de retenção justificado.",
          "4) Restringir o acesso e eliminar ou anonimizar ao término."
        ],
        "resultado": "O pedido é incompatível com o ciclo de vida: a finalidade encerrou. O correto é prazo de retenção justificado e eliminação ao término.",
        "justificativa": "A minimização é transversal: o dado que se coleta é o que se guarda, se usa e se mantém. Guardar além do necessário é custo sem benefício.",
        "errosFrequentes": [
          "Aceitar a guarda indefinida como precaução razoável.",
          "Esquecer de restringir o acesso durante o prazo de retenção restante."
        ],
        "variacao": "Se houver contencioso previsível, o prazo de retenção deve cobri-lo, mas termina em data definida.",
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que descarte significa apenas apagar o arquivo principal. Está correto?",
        "dados": "Base original apagada, mas cópias em backups e caches ainda existentes.",
        "conceitos": [
          "descarte",
          "eliminação segura",
          "verificável"
        ],
        "estrategia": "Confrontar a definição estreita do candidato com o descarte efetivo, que envolve todas as cópias e réplicas do dado.",
        "execucao": [
          "1) Apagar o arquivo principal não elimina cópias distribuídas.",
          "2) Verificar que backups e caches mantêm o dado recuperável.",
          "3) Concluir que o descarte efetivo abrange todas as réplicas."
        ],
        "resultado": "A afirmação está errada. Apagar apenas o arquivo principal deixa cópias em backups e caches. Descarte efetivo exige eliminar todas as réplicas.",
        "justificativa": "A leitura ingênua reduz o descarte a uma única exclusão, mas o ciclo exige eliminação segura e verificável de todas as instâncias do dado.",
        "errosFrequentes": [
          "Considerar que apagar o arquivo principal encerra o ciclo de vida.",
          "Esquecer que dados em cache e exportações ainda expõem a organização."
        ],
        "variacao": "Se o dado tivesse sido anonimizado antes do descarte, o risco de reidentificação ainda precisaria ser avaliado."
      }
    ]
  }
};
