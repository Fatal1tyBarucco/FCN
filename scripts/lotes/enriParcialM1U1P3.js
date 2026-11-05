const enriParcialM1U1P3 = {
  "modulo-1-unidade-1-topico-1-sub-5": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova de concurso cobra qual mecanismo mantém o dado atualizado no documento de destino; confundir copiar/colar comum com colar especial vinculado, ou incorporação com vinculação, inverte o gabarito da questão.",
      "preRequisitos": [
        "noções básicas de Word",
        "noções básicas de Excel",
        "noções básicas de PowerPoint"
      ],
      "objetivosObservaveis": [
        "distinguir objeto incorporado de objeto vinculado",
        "escolher o mecanismo de integração adequado a cada cenário",
        "reconhecer as limitações do vínculo em relação ao arquivo-fonte"
      ],
      "competencias": [
        "montar documentos e apresentações com dados vivos",
        "automatizar o fluxo de dados entre aplicações"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "subtópicos de armazenamento e coautoria da unidade 1.1",
        "unidade 1.3 (Excel)",
        "Módulo 3 (colaboração)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O tema de integração entre aplicações tem classificação média a alta nos conteúdos programáticos de informática, pois discrimina o candidato que sabe diferenciar dado estático, incorporado e vinculado. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O copiar/colar comum transfere uma cópia estática: o texto ou a tabela colada no destino não acompanha mudanças feitas depois na fonte, pois não existe relação posterior entre os arquivos.",
      "intermediario": "O objeto vinculado mantém uma referência ao arquivo-fonte e reflete as alterações quando o vínculo é atualizado (no Word, Colar especial > Vincular), enquanto o objeto incorporado carrega uma cópia dentro do documento e não atualiza com a fonte.",
      "avancado": "O Power Automate automatiza fluxos entre aplicações (por exemplo, registrar em planilha o resultado de um formulário), e sua disponibilidade depende do plano ou licença contratada.",
      "especialista": "Se o arquivo-fonte for movido, renomeado ou ficar inacessível, o vínculo quebra e precisa ser reparado; a alternativa é reincorporar o objeto ou adotar coautoria em arquivo único na nuvem."
    },
    "comparacoes": [
      {
        "tema": "Objeto incorporado x objeto vinculado",
        "a": {
          "rotulo": "Objeto incorporado",
          "texto": "Embute uma cópia dos dados dentro do próprio documento de destino; não atualiza quando a fonte muda."
        },
        "b": {
          "rotulo": "Objeto vinculado",
          "texto": "Mantém uma referência ao arquivo-fonte e reflete as alterações quando o vínculo é atualizado, mas exige que a fonte permaneça acessível."
        },
        "diferencaGabarito": "Quando a questão diz que alterações no Excel devem refletir no Word, o gabarito é o objeto vinculado, nunca o incorporado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A integração entre as aplicações do Microsoft 365 exige programação.",
        "porqueErrada": "Generaliza falsamente: a integração básica por colar especial vinculado e gráfico vinculado é nativa da interface, sem programação.",
        "versaoCorreta": "A integração básica (OLE, colar especial vinculado, gráfico vinculado) é nativa da interface; APIs como o Microsoft Graph servem à automação avançada e ao desenvolvimento, e serviços como o Power Automate dependem do plano ou licença."
      },
      {
        "afirmacaoEquivocada": "O objeto incorporado se atualiza automaticamente quando o arquivo-fonte muda.",
        "porqueErrada": "Confunde incorporação com vinculação; o incorporado é uma cópia estática dentro do documento e não acompanha a fonte.",
        "versaoCorreta": "Somente o objeto vinculado reflete mudanças da fonte; o incorporado é uma cópia fixa dentro do documento de destino."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "OLE (Object Linking and Embedding)",
        "incorporação",
        "vinculação",
        "Colar especial",
        "gráfico vinculado",
        "Power Automate",
        "Microsoft Graph"
      ],
      "regras": [
        "Precisa de atualização automática → use vínculo (Colar especial > Vincular ou gráfico vinculado).",
        "Precisa de cópia fixa → use copiar/colar comum ou incorporar o objeto.",
        "O vínculo exige que o arquivo-fonte permaneça acessível no mesmo caminho."
      ],
      "comparacoes": [
        "Copiar/colar comum não cria relação com a fonte; o colar especial vinculado cria um vínculo OLE que permite atualização automática."
      ],
      "fluxos": [
        "Copiar a tabela no Excel → no Word, Colar especial > Vincular → atualizar o vínculo sempre que a planilha-fonte mudar."
      ],
      "excecoes": [
        "Se o arquivo-fonte for movido, renomeado ou ficar inacessível, o vínculo quebra e precisa ser reparado antes da distribuição do documento.",
        "A automação com Power Automate e o Microsoft Graph depende do plano ou licença contratada."
      ],
      "palavrasChave": [
        "OLE",
        "vinculado",
        "incorporado",
        "Colar especial",
        "Power Automate",
        "Microsoft Graph",
        "hub"
      ],
      "checklist": [
        "Distingo dado estático, objeto incorporado e objeto vinculado.",
        "Escolho o mecanismo de integração por cenário de uso.",
        "Explico por que um vínculo quebra quando a fonte se move.",
        "Sei o papel do Teams como centro de colaboração.",
        "Sei o papel do Power Automate na automação de fluxos."
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Inserir uma tabela do Excel num documento Word de modo que a tabela reflita as alterações feitas depois na planilha de origem.",
        "dados": "Planilha Excel com tabela de indicadores; documento Word de destino; comando Colar especial > Vincular (OLE).",
        "conceitos": [
          "cópia estática",
          "vinculação OLE",
          "atualização automática"
        ],
        "estrategia": "Usar o colar especial vinculado para criar um vínculo OLE entre a planilha-fonte e o documento Word, de forma que as alterações na origem sejam refletidas no destino.",
        "execucao": [
          "1. Abra a planilha do Excel e selecione a tabela de indicadores.",
          "2. Copie a tabela (Ctrl+C).",
          "3. No Word, posicione o cursor onde a tabela deve aparecer.",
          "4. Escolha Colar especial > Vincular (OLE).",
          "5. Sempre que a planilha mudar, atualize o vínculo no Word para ver os novos valores."
        ],
        "resultado": "A tabela inserida no Word fica vinculada ao arquivo Excel e reflete as alterações da planilha-fonte sempre que o vínculo é atualizado.",
        "justificativa": "O vínculo OLE mantém uma referência ao arquivo-fonte, ao contrário do copiar/colar comum, que transfere apenas uma cópia estática sem relação com a origem.",
        "errosFrequentes": [
          "Colar com copiar/colar comum, que gera cópia estática e não atualiza com a fonte.",
          "Esquecer de atualizar o vínculo depois de modificar a planilha-fonte."
        ],
        "variacao": "Se o relatório for enviado para quem não tem acesso à planilha-fonte, prefira colar como imagem ou incorporar, para congelar os dados."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um relatório mensal em Word deve exibir a tabela de indicadores mantida numa planilha Excel que muda toda semana, sem que o autor precise redigitar os dados.",
        "dados": "Relatório em Word; planilha Excel de indicadores atualizada semanalmente; rotina de atualizar planilha, abrir Word e atualizar o vínculo.",
        "conceitos": [
          "vínculo OLE",
          "arquivo-fonte",
          "atualização de vínculo",
          "quebra de vínculo"
        ],
        "estrategia": "Inserir a tabela por Colar especial > Vincular, mantendo a conexão com a planilha-fonte, e adotar a rotina mensal de atualizar o vínculo após cada mudança na planilha.",
        "execucao": [
          "1. Copie a tabela de indicadores da planilha Excel.",
          "2. No Word, use Colar especial > Vincular para inserir a tabela vinculada.",
          "3. Toda semana, atualize a planilha com os novos indicadores.",
          "4. Abra o Word e atualize o vínculo para exibir os valores mais recentes.",
          "5. Antes de distribuir o relatório, verifique se a planilha-fonte continua no mesmo caminho e nome de arquivo."
        ],
        "resultado": "A tabela do relatório permanece conectada à planilha-fonte; se a planilha for movida de pasta ou renomeada, o vínculo quebra e deve ser reparado antes da distribuição.",
        "justificativa": "O vínculo depende do acesso contínuo ao arquivo-fonte; mover ou renomear a planilha rompe a referência, então a checagem de caminho é parte do procedimento.",
        "errosFrequentes": [
          "Mover ou renomear a planilha-fonte sem reparar o vínculo, fazendo o relatório exibir dados desatualizados ou erro.",
          "Confundir o vínculo com uma cópia incorporada, que não reflete as mudanças semanais da planilha."
        ],
        "variacao": "Se os valores do orçamento precisarem congelar para envio externo, substitua o vínculo por colagem como imagem ou incorporação, de modo que o destinatário não dependa da planilha original."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que a integração entre as aplicações do Microsoft 365 exige programação para funcionar.",
        "dados": "Afirmação de que toda integração entre Word, Excel, PowerPoint, Teams e Power Automate requer código ou APIs do Microsoft Graph.",
        "conceitos": [
          "integração nativa",
          "colar especial vinculado",
          "API Microsoft Graph",
          "plano e licença"
        ],
        "estrategia": "Desmontar a afirmação mostrando que a integração básica (OLE, colar especial vinculado, gráfico vinculado) é feita pela interface, sem programação, reservando APIs e automação avançada para casos específicos.",
        "execucao": [
          "1. Identificar que a afirmação generaliza a programação a todas as formas de integração.",
          "2. Lembrar que OLE, colar especial vinculado e gráfico vinculado são recursos nativos da interface do Office.",
          "3. Reconhecer que o Microsoft Graph e o Power Automate servem à automação avançada e desenvolvimento.",
          "4. Observar que a disponibilidade de Power Automate depende do plano ou licença contratada."
        ],
        "resultado": "A afirmação é incorreta: a integração básica entre aplicações do Microsoft 365 é nativa da interface; programação é necessária apenas para automação avançada via APIs ou desenvolvimento.",
        "justificativa": "O conteúdo base distingue integração de interface (sem código) de automação programática, de modo que afirmar que toda integração exige programação é um erro de interpretação.",
        "errosFrequentes": [
          "Acreditar que qualquer troca de dados entre aplicações exige escrever código.",
          "Assumir que o Power Automate está disponível em todos os planos sem verificar a licença."
        ],
        "variacao": "Se a tarefa for encaminhar automaticamente respostas de um formulário para uma planilha, então sim é necessário usar automação (Power Automate ou Microsoft Graph), não apenas OLE."
      }
    ]
  },
  "modulo-1-unidade-1-topico-1-sub-6": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova descreve cenários de trabalho colaborativo, como dois editores no mesmo documento e restauração de versão, e cobra a condição do salvamento automático e o caráter configurável da retenção; afirmar prazo fixo ou negar coautoria muda o gabarito.",
      "preRequisitos": [
        "subtópicos 3 (modalidades)",
        "subtópicos 4 (armazenamento)"
      ],
      "objetivosObservaveis": [
        "reconhecer quando o salvamento automático está ativo",
        "descrever o mecanismo de coautoria e seus indicadores",
        "restaurar versão anterior e explicar o que acontece com a versão atual"
      ],
      "competencias": [
        "trabalho colaborativo seguro",
        "recuperação de estado anterior"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "subtópicos 4 (armazenamento) e 8 (permissões)",
        "unidade 1.5 (OneDrive)",
        "Módulo 4 (continuidade)"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O salvamento automático, a coautoria e o histórico de versões têm classificação alta nos conteúdos de informática, pois avaliam se o candidato sabe operar documentos em nuvem e recuperar estados anteriores sem perder o trabalho. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O indicador de salvamento automático aparece no canto superior esquerdo da janela; o autosave contínuo só funciona se o arquivo estiver hospedado em OneDrive/SharePoint, enquanto o arquivo local grava apenas com Ctrl+S ou recuperação automática do aplicativo.",
      "intermediario": "A coautoria permite que múltiplos usuários editem simultaneamente o mesmo documento na nuvem, com indicadores de presença (nome e cursor colorido de cada autor) e alterações visíveis em tempo real, sem fechar o arquivo para o próximo editor.",
      "avancado": "Restaurar uma versão anterior não exclui a versão atual: ela passa a ser também uma versão no histórico, o que torna a operação reversível; prazos e quantidades de versão dependem do plano/serviço e são configuráveis pelo administrador.",
      "especialista": "Diagnosticar perda de trabalho (autosave desativado ou arquivo local) e desenhar a rotina correta para documento colaborativo: arquivo na nuvem, coautoria ativa e uso do histórico de versões para reversões."
    },
    "comparacoes": [
      {
        "tema": "Autosave ativo x arquivo local",
        "a": {
          "rotulo": "Autosave ativo",
          "texto": "Grava as alterações continuamente no serviço; exige que o arquivo esteja em OneDrive/SharePoint, com indicador de estado no canto superior esquerdo da janela."
        },
        "b": {
          "rotulo": "Arquivo local",
          "texto": "Não tem autosave contínuo; gravações são manuais (Ctrl+S) ou de recuperação automática do aplicativo."
        },
        "diferencaGabarito": "Quando a questão pergunta onde o autosave funciona continuamente, o gabarito é o arquivo na nuvem, nunca o arquivo puramente local."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O histórico de versões guarda apenas a última versão do arquivo.",
        "porqueErrada": "Minimiza o mecanismo; o histórico mantém múltiplas versões, não só a mais recente.",
        "versaoCorreta": "O histórico mantém múltiplas versões; o período padrão e a quantidade máxima dependem do plano/serviço e são configuráveis pelo administrador, devendo ser conferidos na documentação oficial do produto."
      },
      {
        "afirmacaoEquivocada": "Para um segundo usuário editar o arquivo, o primeiro precisa fechá-lo.",
        "porqueErrada": "Transporta a mentalidade de arquivo local; na nuvem a coautoria permite edição simultânea com indicadores de presença.",
        "versaoCorreta": "Com o arquivo na nuvem, a coautoria permite edição simultânea, com nome e cursor colorido de cada autor visíveis, sem exigir exclusividade de acesso."
      },
      {
        "afirmacaoEquivocada": "Restaurar uma versão anterior destrói a versão atual do arquivo.",
        "porqueErrada": "Confunde restauração com substituição definitiva; a versão atual é preservada no histórico.",
        "versaoCorreta": "A versão atual é preservada no histórico e a restauração pode ser revertida, portanto a operação não apaga definitivamente nada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "salvamento automático",
        "sincronização",
        "coautoria",
        "presença",
        "cursor colorido",
        "histórico de versões",
        "restauração",
        "retenção configurável"
      ],
      "regras": [
        "Autosave contínuo → arquivo em nuvem (OneDrive/SharePoint).",
        "Edição simultânea → coautoria com presença visível, sem fechar o arquivo.",
        "Erro grave → histórico de versões > restaurar a versão anterior."
      ],
      "comparacoes": [
        "O autosave contínuo exige arquivo na nuvem; no arquivo local a gravação é manual ou de recuperação automática do aplicativo."
      ],
      "fluxos": [
        "Abrir arquivo no serviço (web ou painel) → Histórico de versões → visualizar versão anterior correta → Restaurar; a versão atual entra no histórico e a operação pode ser revertida."
      ],
      "excecoes": [
        "Períodos e quantidades de versão variam por plano/serviço e são administráveis; conferir na documentação oficial, sem afirmar prazos fixos.",
        "Edição feita offline num arquivo local sincronizado depois pode gerar conflito resolvido pelo mecanismo de sincronização (regra de última alteração prevalece fora da coautoria em tempo real)."
      ],
      "palavrasChave": [
        "autosave",
        "coautoria",
        "presença",
        "histórico de versões",
        "restauração",
        "retenção",
        "sincronização"
      ],
      "checklist": [
        "Identifico a condição do salvamento automático (arquivo na nuvem).",
        "Explico a coautoria com indicadores de presença e cursor colorido.",
        "Restauro versão anterior sem perder a versão atual.",
        "Não afirmo prazos fixos de retenção de versões.",
        "Distingo coautoria de edição alternada em arquivo local."
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar se um documento está sendo salvo automaticamente pelo aplicativo no Word.",
        "dados": "Documento aberto no Word; indicador de salvamento automático no canto superior esquerdo da janela; arquivo em OneDrive/SharePoint ou arquivo local.",
        "conceitos": [
          "salvamento automático",
          "indicador de estado",
          "arquivo na nuvem",
          "arquivo local"
        ],
        "estrategia": "Verificar o indicador de salvamento automático no canto superior esquerdo: ativado significa arquivo em OneDrive/SharePoint com gravação contínua; desativado ou ausente significa arquivo local com gravação manual (Ctrl+S).",
        "execucao": [
          "1. Olhe o canto superior esquerdo da janela do aplicativo.",
          "2. Se o indicador 'Salvamento automático' estiver ativado, o arquivo está em OneDrive/SharePoint e cada alteração é gravada no serviço.",
          "3. Se o indicador estiver desativado ou ausente, o arquivo é local e a gravação é manual (Ctrl+S) ou de recuperação automática do aplicativo."
        ],
        "resultado": "O indicador de salvamento automático revela se o arquivo está na nuvem (autosave contínuo ativo) ou é local (gravação manual ou recuperação automática).",
        "justificativa": "O conteúdo base estabelece que a condição essencial do autosave contínuo é o arquivo estar hospedado em OneDrive/SharePoint, com indicador de estado visível na janela.",
        "errosFrequentes": [
          "Assumir que todo arquivo está sendo salvo automaticamente, sem conferir o indicador de estado.",
          "Confundir recuperação automática do aplicativo com salvamento automático contínuo na nuvem."
        ],
        "variacao": "Se o arquivo for copiado para um pendrive e aberto localmente, o autosave contínuo deixa de funcionar e a gravação volta a ser manual (Ctrl+S)."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dois técnicos editam ao mesmo tempo o mesmo documento de especificação hospedado no OneDrive, sem que um precise esperar o outro terminar.",
        "dados": "Dois usuários; documento de especificação no OneDrive; edição simultânea; indicadores de presença (nome e cursor colorido) e alterações visíveis em tempo real.",
        "conceitos": [
          "coautoria",
          "indicadores de presença",
          "cursor colorido",
          "edição simultânea"
        ],
        "estrategia": "Usar a coautoria em tempo real no arquivo na nuvem, de modo que cada técnico veja o nome e o cursor colorido do outro e as alterações apareçam à medida que são digitadas, sem alternar o acesso ao arquivo.",
        "execucao": [
          "1. Hospede o documento no OneDrive para que fique acessível a ambos os técnicos.",
          "2. Cada técnico abre o mesmo documento simultaneamente.",
          "3. Cada um vê o nome e o cursor colorido do outro, com alterações visíveis em tempo real.",
          "4. Mantenha o salvamento automático ativado para que as edições sejam gravadas continuamente.",
          "5. Em caso de erro coletivo, use o histórico de versões para restaurar um estado anterior, preservando a versão atual no histórico."
        ],
        "resultado": "A coautoria permite edição simultânea com presença visível; não é preciso fechar o arquivo para o próximo editor entrar, e o histórico de versões permite reverter erros coletivos.",
        "justificativa": "O conteúdo base descreve que, com o arquivo na nuvem, múltiplos usuários editam simultaneamente com indicadores de presença, sem exigir exclusividade de acesso.",
        "errosFrequentes": [
          "Acreditar que é necessário fechar o arquivo para outro usuário editar, mentalidade de arquivo local.",
          "Desativar o salvamento automático durante a coautoria, perdendo o registro contínuo das alterações."
        ],
        "variacao": "Se um dos técnicos trabalhar offline e sincronizar depois, o conflito entre alterações offline será resolvido pelo mecanismo de sincronização (regra de última alteração prevalece fora da coautoria em tempo real)."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que restaurar uma versão anterior apaga definitivamente a versão atual do histórico.",
        "dados": "Afirmação de que a restauração de versão substitui e destrói a versão atual, eliminando-a do histórico.",
        "conceitos": [
          "histórico de versões",
          "restauração",
          "reversibilidade",
          "versão atual preservada"
        ],
        "estrategia": "Corrigir a interpretação mostrando que restaurar versão não exclui a atual: ela passa a ser também uma versão no histórico, tornando a operação reversível.",
        "execucao": [
          "1. Identificar que a afirmação confunde restauração com substituição definitiva.",
          "2. Lembrar que a versão atual é preservada no histórico ao ser restaurada uma versão anterior.",
          "3. Reconhecer que a operação de restauração pode ser revertida.",
          "4. Confirmar que o período padrão e a quantidade máxima de versões dependem do plano/serviço e do administrador."
        ],
        "resultado": "A afirmação é incorreta: restaurar uma versão anterior não destrói a versão atual; ela entra no histórico e a operação pode ser revertida.",
        "justificativa": "O conteúdo base explicitamente diz que restaurar uma versão anterior não exclui a versão atual, que passa a ser também uma versão no histórico, o que torna a operação reversível.",
        "errosFrequentes": [
          "Acreditar que restaurar versão apaga a versão atual do histórico.",
          "Assumir que existe um número fixo de versões preservadas, independente do plano ou do administrador."
        ],
        "variacao": "Se um relatório for sobrescrito com conteúdo errado, basta abrir o histórico de versões, visualizar a versão correta anterior e restaurá-la, sem perder a versão errada, que permanece registrada."
      }
    ]
  }
};
