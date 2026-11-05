const enriParcialM1U5P3 = {
  "modulo-1-unidade-5-topico-1-sub-5": {
    "orientacaoEstrategica": {
      "porqueImporta": "Perda de acesso, exclusão acidental e falta de recuperação colocam em risco arquivos organizacionais no OneDrive. Quando uma conta é desativada, uma licença expira ou um colaborador é desligado, o acesso aos documentos pode ser interrompido e a equipe precisa saber como reter, restaurar ou transferir o conteúdo. Dominar esses estudos de caso permite planejar a recuperação, respeitar prazos de retenção e evitar perda definitiva de informações críticas em concursos e no ambiente corporativo.",
      "preRequisitos": [
        "Conta e licença do Microsoft 365",
        "Noção de OneDrive e sincronização de arquivos",
        "Conceito de lixeira e retenção de itens excluídos"
      ],
      "objetivosObservaveis": [
        "Mapear causas de perda de acesso (conta, licença, colaborador)",
        "Definir responsabilidades de recuperação e retenção de arquivos",
        "Planejar restauração a partir da lixeira, versões anteriores ou backup",
        "Avaliar tempo de recuperação e critérios de sucesso do plano"
      ],
      "competencias": [
        "Gestão de acesso: identificar quem perdeu acesso e por quê",
        "Planejamento de recuperação: definir etapas, responsáveis e prazos de retenção"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-6 (Segurança de arquivos organizacionais) — complementa a recuperação com rotulagem, DLP e controle de dispositivo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Perda de acesso e recuperação no OneDrive são objeto de avaliação em questões de informática de concursos sobre nuvem, colaboração e segurança da informação. O tema é classificado como de média relevância no conteúdo programático de informática, por ser menos central que redes e LGPD. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "Estudo de caso: colaborador com conta desativada ou licença expirada perde acesso aos arquivos; a equipe deve considerar retenção, eDiscovery (administradores Enterprise) e backup. Estudo de caso: exclusão de arquivo relevante → lixeira → restauração conforme política; ou perda sem exclusão → versões anteriores. A recomendação de backup separado (3-2-1) permanece. O estudo de caso deve mapear causas da perda de acesso (conta, licença, colaborador) e definir responsabilidades de recuperação e retenção.",
      "intermediario": "A recuperação começa identificando a causa da perda: conta desativada, licença expirada ou desligamento do colaborador. Em seguida, avalia-se se o arquivo está na lixeira, se há versões anteriores disponíveis ou se existe backup separado (recomendação 3-2-1). A equipe define quem é responsável pela restauração, dentro de qual prazo de retenção, e valida o acesso após a recuperação. Para contas desligadas, a transferência de propriedade para uma conta ativa preserva os documentos do setor sem depender da licença antiga.",
      "avancado": "O estudo de caso em cadeia simula exclusão, retenção, versão anterior e backup externo, avaliando tempo de recuperação e responsabilidades. Mapeia gatilhos de perda (inativação, expiração, desligamento) e define o fluxo de retenção e recuperação associado a cada um. Inclui teste de restauração com critérios de sucesso mensuráveis, verificando quanto conteúdo é recuperável por cada camada e onde ficam as lacunas que exigem cópia independente.",
      "especialista": "O especialista estabelece a política organizacional de retenção e recuperação, define responsáveis e prazos para cada cenário de perda de acesso, conduz testes periódicos de restauração e documenta evidências para auditoria. Avalia a eficácia da estratégia considerando conformidade com legislação aplicável, periodicidade de revisão e integração com controles de acesso e rotulagem vigentes."
    },
    "comparacoes": [
      {
        "tema": "Retenção vs. backup independente",
        "a": {
          "rotulo": "Retenção do serviço",
          "texto": "Mantém itens excluídos por um prazo limitado definido pela organização ou plano."
        },
        "b": {
          "rotulo": "Backup independente (3-2-1)",
          "texto": "Cópia externa ao serviço, fora do ambiente sincronizado, que sobrevive à exclusão em massa e ao fim da retenção."
        },
        "diferencaGabarito": "A retenção cobre apenas a janela de prazo do serviço; o backup independente é a camada que garante recuperação além desse limite."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário confunde backup do OneDrive com backup imutável.",
        "porqueErrada": "O OneDrive sincroniza arquivos, mas não é um backup imutável; exclusões se propagam e a retenção é limitada por prazo.",
        "versaoCorreta": "Incorreto: OneDrive é sincronização, não backup imutável."
      },
      {
        "afirmacaoEquivocada": "A lixeira do OneDrive mantém arquivos para sempre.",
        "porqueErrada": "O período de retenção da lixeira varia conforme a configuração da organização ou conta e expira.",
        "versaoCorreta": "Errado. O período de retenção varia conforme a configuração da organização/conta."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "perda de acesso",
        "retenção",
        "transferência de propriedade",
        "backup 3-2-1"
      ],
      "regras": [
        "transferir arquivos antes de remover a conta",
        "restaurar dentro do prazo de retenção",
        "manter cópia independente dos documentos críticos"
      ],
      "comparacoes": [
        "retenção do serviço cobre prazo limitado; backup independente vai além"
      ],
      "fluxos": [
        "mapear causa da perda → escolher camada de recuperação → executar restauração → validar acesso"
      ],
      "excecoes": [
        "itens fora da janela de retenção exigem cópia independente para serem recuperados"
      ],
      "palavrasChave": [
        "OneDrive",
        "perda de acesso",
        "recuperação",
        "retenção",
        "backup"
      ],
      "checklist": [
        "mapear causa da perda de acesso",
        "transferir propriedade para conta ativa",
        "restaurar dentro do prazo de retenção",
        "registrar operação e responsável",
        "validar acesso da equipe após recuperação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Planejar a recuperação dos arquivos de um colaborador desligado cuja conta será removida, garantindo que a equipe continue com os documentos do setor.",
        "dados": "Colaborador desligado, conta com 30 GB armazenados, arquivos compartilhados com a equipe, prazo de retenção definido pela política e processo de desligamento em andamento.",
        "conceitos": [
          "perda de acesso: interrupção do acesso por conta, licença ou permissão",
          "transferência de propriedade: repasse dos arquivos a outra conta",
          "retenção: manutenção temporária de dados após o desligamento"
        ],
        "estrategia": "Tratar a perda de acesso como evento planejado: antes de remover a conta, transferir o que precisa ser mantido e registrar a decisão.",
        "execucao": [
          "Levantar os arquivos e pastas compartilhados que o setor precisa manter.",
          "Transferir a propriedade ou copiar os itens para a conta da equipe antes da remoção da conta.",
          "Registrar a transferência, o destino, a data e o responsável, para rastreabilidade.",
          "Após a remoção, validar o acesso da equipe e conferir se a cópia independente cobre o que a política exige reter."
        ],
        "resultado": "Documentos do setor preservados em conta ativa, com registro de quem transferiu e para onde, e a conta desligada pode ser removida sem perda de conteúdo necessário.",
        "justificativa": "O acesso ao serviço depende de identidade e licença ativas: encerrada a conta, o conteúdo deixa de estar acessível ao usuário, ainda que permaneça por prazo de retenção administrativa. Por isso a recuperação se faz por transferência planejada e registro, e não pela tentativa de reabrir a conta após o desligamento.",
        "errosFrequentes": [
          "Remover a conta antes de mapear o conteúdo compartilhado.",
          "Supor que o arquivo compartilhado por link continua acessível após a exclusão do proprietário.",
          "Deixar a transferência sem registro, impedindo a rastreabilidade exigida em auditoria."
        ],
        "variacao": "O colaborador sai em licença prolongada, sem desligamento. Indique o que muda no plano de recuperação e qual precaução evita bloqueio de acesso durante a ausência."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa recuperar arquivos de um projeto cujo proprietário perdeu a licença, sem que a equipe tenha cópia local dos documentos.",
        "dados": "Projeto com 60 arquivos, proprietário sem licença ativa, três integrantes sem cópia local, prazo de retenção administrativa ainda vigente e política de retenção definida.",
        "conceitos": [
          "licença: direito de uso que habilita o acesso ao serviço",
          "recuperação administrativa: ação de administrador fora do alcance do usuário comum",
          "transferência de propriedade: mudança do responsável pelos arquivos"
        ],
        "estrategia": "Acionar a recuperação administrativa dentro do prazo de retenção e transferir a propriedade para uma conta ativa, em vez de tentar restaurar a licença do antigo proprietário.",
        "execucao": [
          "Confirmar com o administrador se o prazo de retenção administrativa ainda está vigente.",
          "Solicitar a transferência da propriedade dos 60 arquivos para a conta de um integrante ativo.",
          "Após a transferência, validar o acesso dos três integrantes e conferir a integridade dos arquivos.",
          "Registrar a operação com data e responsável e incluir o caso na rotina de revisão de acessos."
        ],
        "resultado": "Arquivos do projeto sob titularidade de conta ativa, acessíveis aos três integrantes, com registro da operação e sem dependência da licença do antigo proprietário.",
        "justificativa": "A licença habilita o acesso e não é transferível por conveniência operacional; o caminho correto é administrativo e depende do prazo de retenção vigente. A transferência de propriedade resolve o acesso sem recriar a conta original e mantém a rastreabilidade do processo.",
        "errosFrequentes": [
          "Reativar a licença do antigo proprietário para liberar o acesso, mantendo a dependência.",
          "Esperar o prazo de retenção expirar para acionar a recuperação.",
          "Compartilhar por link como solução definitiva, sem proprietário ativo."
        ],
        "variacao": "O prazo de retenção administrativa já expirou. Explique quais camadas ainda podem responder e por que a cópia independente se torna a única alternativa confiável."
      },
      {
        "tipo": "erro",
        "problema": "Um gestor afirma que a sincronização em nuvem já garante a recuperação dos arquivos do setor em caso de exclusão em massa e que, por isso, não é necessário manter cópia separada nem plano de recuperação.",
        "dados": "Setor com 200 GB sincronizados, exclusão acidental de uma pasta com 40 GB, histórico de versões com prazo limitado e nenhuma cópia fora do serviço.",
        "conceitos": [
          "exclusão em massa: remoção de muitos itens em uma única operação",
          "propagação: replicação da exclusão para todos os dispositivos sincronizados",
          "plano de recuperação: procedimento documentado com camadas e responsáveis"
        ],
        "estrategia": "Reconstruir o cenário e verificar até onde as camadas do serviço respondem, comparando com o que uma cópia independente permitiria recuperar.",
        "execucao": [
          "Verificar o estado dos três dispositivos sincronizados após a exclusão da pasta.",
          "Constatar que a exclusão se propagou e que a recuperação depende da lixeira e do histórico.",
          "Testar a recuperação dentro do prazo e identificar os itens que já saíram da janela de retenção.",
          "Concluir quais itens ficaram irrecuperáveis e qual camada teria coberto essa lacuna."
        ],
        "resultado": "A afirmação é incorreta: a sincronização propaga a exclusão, e a recuperação fica limitada às janelas de retenção do serviço; itens fora delas exigem cópia independente, que não existia.",
        "justificativa": "Sincronizar mantém as réplicas iguais, inclusive quando o estado replicado é uma exclusão. As camadas de retenção do serviço cobrem apenas um intervalo, e o plano de recuperação é o que garante uma camada adicional fora do ambiente afetado, com responsáveis e prazos definidos.",
        "errosFrequentes": [
          "Presumir que a nuvem impede a propagação de exclusões.",
          "Não documentar o prazo de retenção e descobrir o limite durante o incidente.",
          "Tratar a recuperação como tarefa improvisada, sem responsável definido."
        ],
        "variacao": "A pasta excluída continha arquivos com prazo legal de guarda. Explique o que muda na avaliação do incidente e qual registro deve ser produzido."
      }
    ]
  },
  "modulo-1-unidade-5-topico-1-sub-6": {
    "orientacaoEstrategica": {
      "porqueImporta": "Arquivos organizacionais contêm dados sensíveis que precisam de rotulagem, controle de vazamento e restrição de dispositivo. Sem essas medidas, o compartilhamento inadequado e a cópia para mídia removível expõem a organização a vazamentos e descumprimento de legislação de proteção de dados. A segurança de arquivos complementa permissões e compartilhamento, depende do plano/licença contratado e deve estar atrelada a políticas de retenção e auditoria, com evidências para comprovar a eficácia.",
      "preRequisitos": [
        "Permissões e compartilhamento no OneDrive",
        "Conceito de classificação de confidencialidade de dados",
        "Noção de Microsoft 365 admin e administração centralizada"
      ],
      "objetivosObservaveis": [
        "Aplicar rótulo de confidencialidade a arquivos com dados pessoais",
        "Configurar política de prevenção à perda de dados para bloquear envio externo",
        "Aplicar controle de dispositivo para restringir cópia em mídia removível",
        "Revisar eficácia periodicamente e registrar evidências para auditoria"
      ],
      "competencias": [
        "Classificação de dados: rotular arquivos conforme sensibilidade",
        "Governança de dados: configurar políticas e revisar eficácia periodicamente"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-5-topico-1-sub-5 (Estudo de caso: perda de acesso, exclusão e recuperação) — recuperação depende da classificação e retenção definidas na segurança de arquivos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Segurança de arquivos (rotulagem, DLP, controle de dispositivo) é objeto de avaliação em questões de concursos sobre LGPD, proteção de dados e governança de TI. O tema é classificado como de média relevância no conteúdo programático de informática, por ser relevante em cenários organizacionais, mas menos central que redes e cálculo de endereçamento. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Arquivos organizacionais podem receber rotulagem de confidencialidade (taxonomia de sensível/confidencial/Interno — vocabulário varia), controle via Microsoft Purview (DLP — Data Loss Prevention) e controle de dispositivo (Intune). Essas medidas dependem do plano/licença contratado; em planos sem o recurso, a organização deve adotar outras salvaguardas. A segurança de arquivos organizacionais complementa permissões e compartilhamento. A implementação depende de controle centralizado (Microsoft 365 admin) e deve estar atrelada a políticas de retenção e auditoria. A avaliação da eficácia deve considerar periodicidade de revisão, testes de recuperação e conformidade com a legislação aplicável.",
      "intermediario": "A rotulagem de confidencialidade classifica arquivos como sensível, confidencial ou Interno, de acordo com a taxonomia da organização, e o rótulo acompanha o arquivo. O Microsoft Purview DLP detecta e bloqueia o envio de conteúdo classificado para fora da organização. O controle de dispositivo restringe cópia para mídia removível. Essas medidas dependem do plano/licença contratado; onde não houver, a organização adota outras salvaguardas. A implementação é centralizada no Microsoft 365 admin e deve estar atrelada a políticas de retenção e auditoria.",
      "avancado": "A segurança de arquivos complementa permissões e compartilhamento, não as substitui. A avaliação de eficácia considera periodicidade de revisão, testes de recuperação e conformidade com legislação aplicável. A rotulagem deve ser avaliada com os controles de acesso vigentes, com registro de evidências para auditoria. A periodicidade de revisão e os testes de recuperação ficam registrados em plano de ação, garantindo que a proteção permaneça efetiva ao longo do tempo.",
      "especialista": "O especialista define a taxonomia de sensibilidade da organização, implanta DLP e controle de dispositivo por plano de licença, integra rotulagem com controle de acesso e compartilhamento, conduz auditorias periódicas com evidências registradas e ajusta políticas conforme mudanças na legislação e nas necessidades do negócio."
    },
    "comparacoes": [
      {
        "tema": "Segurança de arquivos vs. permissões de compartilhamento",
        "a": {
          "rotulo": "Segurança de arquivos",
          "texto": "Rotulagem, DLP e controle de dispositivo protegem o conteúdo independentemente de quem o acessa."
        },
        "b": {
          "rotulo": "Permissões de compartilhamento",
          "texto": "Controlam quem pode abrir ou editar o arquivo, mas não impedem o vazamento por quem já tem acesso."
        },
        "diferencaGabarito": "Permissões regulam o acesso; segurança de arquivos protege o conteúdo mesmo após o acesso, com classificação e bloqueio de vazamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um usuário afirma que DLP se aplica a qualquer plano.",
        "porqueErrada": "O DLP depende do plano/licença contratado; em planos sem o recurso, não está disponível.",
        "versaoCorreta": "Incorreto: depende do plano/licença; verificar na documentação oficial."
      },
      {
        "afirmacaoEquivocada": "O controle de dispositivo para arquivos organizacionais é independente do plano.",
        "porqueErrada": "O controle de dispositivo depende do plano/licença contratado; planos sem o recurso não oferecem essa restrição.",
        "versaoCorreta": "Errado. Depende do plano/licença contratado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "rótulo de confidencialidade",
        "DLP (prevenção à perda de dados)",
        "controle de dispositivo",
        "Microsoft Purview"
      ],
      "regras": [
        "o rótulo acompanha o arquivo",
        "a DLP bloqueia envio externo de conteúdo classificado",
        "o controle de dispositivo restringe cópia em mídia removível"
      ],
      "comparacoes": [
        "segurança de arquivos protege o conteúdo; permissões regulam o acesso"
      ],
      "fluxos": [
        "classificar arquivo → configurar DLP → testar bloqueio → revisar eficácia periodicamente"
      ],
      "excecoes": [
        "em planos sem DLP, a organização deve adotar outras salvaguardas"
      ],
      "palavrasChave": [
        "rotulagem",
        "DLP",
        "controle de dispositivo",
        "segurança de arquivos",
        "Microsoft Purview"
      ],
      "checklist": [
        "aplicar rótulo de confidencialidade",
        "configurar política DLP",
        "testar bloqueio de envio externo",
        "revisar eficácia periodicamente",
        "registrar evidências para auditoria"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Definir como impedir que uma planilha com dados de titulares seja enviada por e-mail para fora da organização, sem depender apenas de orientação verbal à equipe.",
        "dados": "Planilha com dados pessoais, quarenta colaboradores com acesso à pasta, recursos de rótulo de confidencialidade e de prevenção à perda de dados disponíveis no plano contratado.",
        "conceitos": [
          "rótulo de confidencialidade: classificação aplicada ao arquivo, que o acompanha",
          "prevenção à perda de dados: política que detecta e bloqueia o envio de conteúdo classificado",
          "controle de dispositivo: restrição de cópia para mídia removível, quando disponível"
        ],
        "estrategia": "Combinar classificação e política: o rótulo identifica o conteúdo e a política aplica a regra de bloqueio sobre o que foi classificado.",
        "execucao": [
          "Aplicar o rótulo de confidencialidade à planilha conforme a taxonomia vigente na organização.",
          "Configurar a política de prevenção para reconhecer o rótulo e o tipo de dado e bloquear o envio externo, com aviso ao usuário.",
          "Testar o envio para um destino externo controlado, verificando o bloqueio e a mensagem de orientação exibida.",
          "Registrar a política e o teste, e revisar a eficácia periodicamente."
        ],
        "resultado": "Tentativa de envio externo da planilha bloqueada pela política, com aviso ao usuário e registro em log, mantendo o acesso aos quarenta colaboradores autorizados.",
        "justificativa": "A proteção depende de duas camadas complementares: o rótulo descreve a sensibilidade e acompanha o arquivo, e a política transforma a classificação em ação de bloqueio. Sem rótulo, a política não tem o que reconhecer; sem política, o rótulo é apenas uma marca.",
        "errosFrequentes": [
          "Tratar a prevenção à perda de dados como recurso presente em qualquer plano: a disponibilidade depende da licença.",
          "Classificar o arquivo sem configurar política e esperar bloqueio automático.",
          "Bloquear sem mensagem de orientação, o que leva o usuário a procurar caminhos alternativos."
        ],
        "variacao": "A mesma planilha precisa ser enviada para um parceiro autorizado. Descreva como a política pode permitir a exceção sem liberar o envio para qualquer destino."
      },
      {
        "tipo": "aplicacao",
        "problema": "O aluno precisa adequar uma pasta departamental para que documentos com dados pessoais recebam classificação e restrição de compartilhamento externo por padrão.",
        "dados": "Pasta com 1.200 arquivos, parte com dados pessoais, compartilhamento externo habilitado, plano com recursos de classificação e política de proteção de dados vigente.",
        "conceitos": [
          "classificação padrão: rótulo aplicado automaticamente a novos arquivos",
          "herança de rótulo: propagação da classificação da pasta para os itens",
          "restrição de compartilhamento: bloqueio de link externo para conteúdo classificado"
        ],
        "estrategia": "Definir o rótulo padrão na biblioteca e verificar quais arquivos já existentes precisam de reclassificação, porque a herança cobre novos itens, mas não substitui a revisão do acervo.",
        "execucao": [
          "Aplicar o rótulo padrão na biblioteca, com herança para novos arquivos.",
          "Identificar, por relatório de conteúdo, os arquivos existentes com dados pessoais que precisam de reclassificação.",
          "Reclassificar os arquivos apontados e revisar as concessões de compartilhamento externo existentes.",
          "Testar um compartilhamento externo em arquivo classificado para confirmar o bloqueio e registrar a verificação."
        ],
        "resultado": "Biblioteca com classificação padrão, acervo revisado, compartilhamento externo bloqueado para o conteúdo classificado e registro do teste de verificação.",
        "justificativa": "A herança garante consistência para o que for criado, mas não corrige retroativamente todo o acervo. Por isso a revisão por relatório é necessária, e a conferência da concessão de compartilhamento evita que um link antigo mantenha acesso externo ao conteúdo já classificado.",
        "errosFrequentes": [
          "Aplicar o rótulo padrão e considerar o acervo existente já classificado.",
          "Manter links externos criados antes da classificação.",
          "Classificar sem testar o efeito prático do bloqueio."
        ],
        "variacao": "Um setor precisa compartilhar externamente relatórios que não contêm dados pessoais. Explique como a classificação pode distinguir esse caso e qual registro comprova a decisão."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma que a política de prevenção à perda de dados está disponível em qualquer plano do serviço e que, portanto, basta ligá-la para que todos os arquivos da organização fiquem protegidos.",
        "dados": "Organização com plano básico, 1.200 arquivos sem classificação, política não configurada e expectativa de bloqueio imediato de envios externos.",
        "conceitos": [
          "disponibilidade por licença: recurso presente apenas em determinados planos",
          "condição de eficácia: necessidade de classificação e de política configurada",
          "cobertura: proporção do acervo efetivamente sujeita à regra"
        ],
        "estrategia": "Verificar a disponibilidade do recurso na licença contratada e, se disponível, se há classificação e política configuradas, porque sem esses elementos não existe cobertura efetiva.",
        "execucao": [
          "Conferir na documentação do plano contratado se o recurso de prevenção está incluído.",
          "Constatar a ausência de classificação nos 1.200 arquivos.",
          "Verificar se existe política configurada e a qual escopo ela se aplica.",
          "Concluir o que precisa ser implantado antes de esperar bloqueio e registrar a limitação do plano, se for o caso."
        ],
        "resultado": "A afirmação é incorreta em dois pontos: a disponibilidade depende da licença e a eficácia depende de classificação e política configuradas; ligar o recurso sem esses elementos não protege o acervo.",
        "justificativa": "A prevenção à perda de dados é um recurso licenciado que aplica políticas sobre conteúdo reconhecido. A cadeia depende de três elos — licença, classificação e política —, e a ausência de qualquer um deles deixa os arquivos fora do escopo da regra, ainda que a interface apresente a funcionalidade.",
        "errosFrequentes": [
          "Presumir que todo plano inclui o recurso.",
          "Configurar a política e não classificar o conteúdo que ela deve proteger.",
          "Comunicar proteção total sem testar o bloqueio em um envio real."
        ],
        "variacao": "O plano é atualizado para uma licença que inclui o recurso. Explique a ordem de implantação e o teste mínimo que comprova eficácia antes de comunicar a proteção à organização."
      }
    ]
  }
};
