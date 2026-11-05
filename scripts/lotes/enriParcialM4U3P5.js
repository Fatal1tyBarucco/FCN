const enriParcialM4U3P5 = {
  "m4-u3-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Triagem de mensagem suspeita é a habilidade que o usuário comum precisa ter antes de qualquer decisão técnica, e o que separa uma postura defensiva de uma postura de risco. Em provas de segurança da informação, o item costuma descrever um e-mail com anexo de dupla extensão, um link que imita o domínio oficial ou um pedido urgente fora do procedimento, e a resposta esperada é sempre a mesma: não abrir, não clicar, reportar pelo canal oficial e, se já houver interagido, comunicar imediatamente. O detalhe técnico relevante é que abrir o anexo já executa o código e que ler o endereço real do link não exige clicar.",
      "preRequisitos": [
        "Noções de phishing, spoofing e engenharia social",
        "Diferença entre abrir um arquivo, executá-lo e visualizá-lo",
        "Noções de autenticação de mensagem e de SPF, DKIM e DMARC"
      ],
      "objetivosObservaveis": [
        "Executar a triagem de uma mensagem suspeita sem abrir anexos nem clicar em links",
        "Reconhecer indícios de falsificação de remetente e de imitação de domínio",
        "Descrever o procedimento correto quando o usuário já clicou ou abriu o arquivo",
        "Diferenciar a análise técnica em ambiente isolado, privativa da equipe de segurança, da triagem do usuário"
      ],
      "competencias": [
        "Decisão segura diante de ambiguidade, com histórico de execução de procedimento defensivo",
        "Leitura crítica de indícios técnicos de falsificação em cabeçalhos de mensagem",
        "Comunicação de incidente de segurança por canal institucional oficial",
        "Fundamentação da separação entre o que cabe ao usuário e o que cabe à equipe especializada"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas)",
        "m4-u3-t3-s2 (Indicadores de comprometimento (IoC)) — o que a execução de um anexo efetivamente provoca",
        "m4-u1-t3-s1 (Criptografia simétrica) — base conceitual de tríade e de risco residual"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A triagem de mensagem suspeita aparece em itens de segurança da informação e de ética em uso de tecnologia, com enunciados que descrevem a decisão correta do usuário diante de anexo, link e urgência. A classificação é qualitativa, ancorada na centralidade curricular do tema, e não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece os três sinais que mais importam na triagem. Primeiro, o remetente: confere o domínio real e não o nome exibido. Segundo, o conteúdo: pedido de urgência, sigilo, ação fora do procedimento ou discrepância de endereço bancário. Terceiro, o arquivo: extensão executável ou dupla extensão, ou documento que peça habilitação de macro. O aluno aprende a não abrir e a reportar pelo canal oficial, semforward o anexo para colegas.",
      "intermediario": "Nível intermediário: o aluno executa a triagem completa, passo a passo. Lê o endereço de destino sem clicar, comparando o domínio exibido com o domínio verdadeiro, e identifica imitação por troca de letras ou por subdomínio extra. Verifica a autenticação da mensagem quando houver indicator. Para anexos, recusa a abertura na máquina de produção. Quando precisa acessar o serviço legítimo, digita o endereço no navegador em vez de seguir o link da mensagem. E, se já interagiu, isola, informa a equipe de tecnologia e troca as credenciais a partir de outro dispositivo.",
      "avancado": "Nível avançado: o aluno distingue a camada de triagem da camada de análise. Análise profunda, com abertura em máquina virtual, extração de hash e engenharia reversa, é trabalho de equipe treinada em ambiente isolado; o usuário comum não tem essa capacidade nem essa autorização. O aluno justifica por que a separação é de segurança: mensagem suspeita não deve ser aberta nem no computador do setor, porque o custo de uma execução indevida é o comprometimento do posto de trabalho. Também sabe que reportar cedo preserva a evidência e a chance de bloquear o remetente.",
      "especialista": "Nível especialista: o aluno desenha o programa institucional de tratamento de phishing. Isso inclui canal único de denúncia com registro do caso, bloqueio de remetentes e de domínios semelhantes, regra de não execução de macro em documentos recebidos, política de redefinição de credencial a partir de dispositivo limpo, integração do alerta ao processo de resposta a incidente e ação de comunicação para os colegas afetados sem repassar o artefato. Cada elemento reduz a superfície de execução e preserva a evidência do que chegou ao usuário."
    },
    "comparacoes": [
      {
        "tema": "Triagem do usuário e análise técnica especializada",
        "a": {
          "rotulo": "Triagem pelo usuário",
          "texto": "Acontece no posto de trabalho, sem abrir nem executar. Consiste em ler remetente, conteúdo, endereço do link e extensão do anexo, recusar a interação e reportar pelo canal oficial do órgão."
        },
        "b": {
          "rotulo": "Análise técnica especializada",
          "texto": "Acontece em ambiente isolado, por equipe treinada e autorizada. Consiste em abrir a amostra em máquina virtual, extrair hash, observar comportamento e produzir relatório técnico de bloqueio e remediação."
        },
        "diferencaGabarito": "A separação é de segurança e de competência: o usuário não tem ferramental nem autorização para abrir amostra suspeita, e a equipe especializada não substitui a obrigação de o usuário reportar. Quem tenta validar malware na própria máquina converte uma triagem segura em um incidente consumado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Para saber se um anexo é perigoso, basta abri-lo no computador do setor e fechá-lo se parecer estranho.'",
        "porqueErrada": "A execução do código ocorre no momento da abertura, e não da perception visual. Fechar a janela não desfaz a execução nem remove a persistência que o código já criou. Um teste informal na máquina de produção transforma uma suspeita em incidente e expõe dados do posto de trabalho e da rede.",
        "versaoCorreta": "Anexo suspeito não é aberto na máquina de trabalho; ele é reportado e analisado, se for o caso, por equipe treinada em ambiente isolado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Se o endereço do link for idêntico ao do portal do órgão, o link é seguro e pode ser clicado.'",
        "porqueErrada": "A aparência do texto do link não é o endereço de destino. O endereço real pode usar domínio imitado com troca de letras, subdomínio adicional ou redirecionamento. Além disso, mesmo em domínio legítimo, o conteúdo do site pode ter sido invadido. A prática segura é digitar o endereço no navegador quando o acesso for legítimo.",
        "versaoCorreta": "O que precisa ser conferido é o endereço real de destino, e o acesso legítimo se faz digitando o endereço conhecido, sem seguir o link da mensagem."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Encaminhar o anexo suspeito para os colegas do setor ajuda a identificarem se o arquivo é perigoso.'",
        "porqueErrada": "Encaminhar multiplica a exposição para novas estações e distribuição fora do canal oficial. Cada destinatário passa a ter uma cópia do artefato e um possível vetor de execução. O procedimento correto é usar o canal de denúncia do órgão, que centraliza a análise e permite bloquear remetente e domínios relacionados.",
        "versaoCorreta": "Suspeita se reporta pelo canal oficial do órgão, sem repassar o anexo a colegas, para que a análise fique centralizada e a contenção alcance todos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Triagem: procedimento defensivo de identificação de mensagem suspeita, executado sem abrir nem clicar",
        "Spoofing: falsificação do remetente, que pode exploration display name sem alterar o domínio real",
        "Dupla extensão: técnica de disguise de arquivo executável, com nome de documento seguido de extensão de programa"
      ],
      "regras": [
        "Nenhum anexo suspeito é aberto em máquina de produção, ainda que o servidor esteja protegido",
        "Todo acesso legítimo a serviço do órgão é feito digitando o endereço conhecido no navegador",
        "A suspeita é reportada pelo canal oficial, sem repassar o artefato a terceiros"
      ],
      "comparacoes": [
        "Triagem do usuário atua sem abrir; análise técnica atua sobre a amostra, em ambiente isolado e por equipe autorizada"
      ],
      "fluxos": [
        "Conferir remetente e domínio, ler conteúdo, verificar destino do link e extensão do anexo, recusar interação, reportar"
      ],
      "excecoes": [
        "A abertura de amostra fica reservada à equipe de segurança, em ambiente isolado, com registro do procedimento"
      ],
      "palavrasChave": [
        "phishing",
        "triagem",
        "spoofing",
        "domínio",
        "dupla extensão",
        "macro",
        "canal de denúncia",
        "credencial"
      ],
      "checklist": [
        "Conferir o domínio real do remetente, e não apenas o nome exibido",
        "Ler o endereço de destino do link sem clicar e comparar com o domínio legítimo",
        "Verificar a presença de dupla extensão ou de pedido de habilitação de macro",
        "Acessar serviços legítimos digitando o endereço no navegador",
        "Reportar a suspeita pelo canal oficial do órgão, sem encaminhar o anexo",
        "Se houver interação, isolar o equipamento, informar a equipe e trocar a credencial de outro dispositivo"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um usuário recebe mensagem do setor de beneficiário pedindo para reabrir um cadastro e anexar um arquivo chamado Relatório.pdf.exe, com aviso de que o documento está bloqueado. Descreva a triagem e justifique cada passo.",
        "dados": "Mensagem chega às 9h12, remetente exibido como Cadastro@Benefício. gov. br, com domínio real cadastro-beneficiário.net; anexo de 2,4 MB com duplo sufixo; o texto pede resposta em até duas horas sob ameaça de bloqueio do benefício.",
        "conceitos": [
          "Dupla extensão como indício de executável disfarçado",
          "Urgência como mecanismo de engenharia social"
        ],
        "estrategia": "Aplicar a triagem na ordem dos três sinais, sem executar o arquivo e sem seguir o link. Cada passo da sequência encontra um indício independente, e a combinação justifica a recusa mesmo que cada indício isolado pareça discutível.",
        "execucao": [
          "Conferir o domínio real do remetente e observar que ele não corresponde ao domínio institucional exibido",
          "Ler o conteúdo e identificar pressão de prazo e ameaça de suspensão, padrão típico de engenharia social",
          "Notar a dupla extensão no nome do anexo e concluir que se trata de executável disfarçado",
          "Recusar a abertura do arquivo e não responder à mensagem",
          "Reportar pelo canal oficial de denúncia do órgão, sem encaminhar o anexo a colegas",
          "Se o usuário já tiver aberto o arquivo antes da triagem, isolar a estação e comunicar a equipe de tecnologia"
        ],
        "resultado": "Triagem concluída sem execução do artefato e sem resposta à mensagem, com o caso reportado pelo canal oficial. A estação não foi exposta e o padrão de remetente pode ser bloqueado.",
        "justificativa": "Cada indício isolado permitiria uma leitura tolerante, mas a combinação de domínio divergente, urgência host ile e dupla extensão é exatamente o padrão que a triagem existe para detectar. A recusa de abertura é o que preserva o posto de trabalho, e o reporte pelo canal oficial é o que permite contenção coletiva em vez de contenção individual.",
        "errosFrequentes": [
          "Confiar no nome exibido do remetente e não verificar o domínio real",
          "Abrir o arquivo para conferir se é o relatório esperado, porque o documento parece legítimo",
          "Responder pedindo o reenvio para confirmar a legitimidade, o que valida o canal do fraudador"
        ],
        "variacao": "Se o anexo vier com extensão simples, mas o documento pedir a habilitação de macro para exibir o conteúdo, a decisão permanece a mesma: recusar e reportar, porque a habilitação de macro em arquivo recebido é o mecanismo equivalente de execução."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor recebe e-mail com botão que promete atualizar cadastro, e o endereço exibido no botão sugere o portal do órgão. Descreva a triagem sem risco e indique a conduta se o usuário já tiver clicado.",
        "dados": "Botão com texto Atualizar cadastro; o endereço exibido termina em .gov.br, mas a inspeção do texto do botão aponta para um domínio comercial de intermediação com redirecionamento; o servidor é a única pessoa da unidade que recebeu a mensagem.",
        "conceitos": [
          "Divergência entre texto exibido e endereço real de destino",
          "Resposta a incidente após interação já ocorrida"
        ],
        "estrategia": "Conduzir a triagem sem seguir o link, usando a leitura do endereço de destino, e preparar desde já a conduta de contenção para o caso de interação já ocorrida, porque o tempo entre o clique e a troca de credencial é determinante.",
        "execucao": [
          "Ler o endereço real de destino do link, sem clicar, e identificar o domínio de intermediação e o redirecionamento",
          "Comparar o endereço lido com o domínio institucional conhecido e registrar a divergência",
          "Acessar o portal digitando o endereço no navegador, sem usar o link da mensagem",
          "Reportar o caso ao canal oficial de denúncia, com o endereço de destino observado",
          "Se já houver clique, orientar a troca imediata da credencial a partir de outro dispositivo e avisar a equipe de tecnologia",
          "Verificar os cadastros do próprio usuário, como conta bancária e cadastro de benefício, para actividade suspeita"
        ],
        "resultado": "Triagem feita sem navegação pelo link, acesso legítimo preservado pelo endereço digitado e plano de contenção definido para o caso de interação prévia, com revisão de cadastros pessoais do usuário.",
        "justificativa": "O texto exibido no botão não estabelece o destino, e é por isso que a leitura do endereço de destino, sem clique, é a verificação decisiva. A segunda parte do procedimento é a que mais importa em campo: se o clique já ocorreu, a medida de contenção precisa ser imediata e parallelamente a troca de credencial e a revisão das contas associadas.",
        "errosFrequentes": [
          "Confiar no sufixo institucional exibido no texto do link e clicar",
          "Trocar a senha no mesmo equipamento comprometido, em vez de partir de outro dispositivo",
          "Esquecer de verificar se o usuário inseriu credenciais ou dados bancários na página"
        ],
        "variacao": "Se o clique não tiver acontecido, mas o usuário tiver digitado a senha em uma página de aparência semelhante, sem perceber a troca de contexto, a contenção passa a exigir troca de credencial e revisão de sessões ativas, mesmo sem download de arquivo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o arquivo suspiciouso é uma planilha comum, basta abrir no modo de leitura protegida para ver se o conteúdo é verdadeiro sem qualquer risco.'",
        "dados": "Anexo de 1,8 MB com extensão .xlsx que, segundo a description do remetente, traria a relação de pagamentos; o arquivo, ao ser aberto com a proteção padrão do programa de planilha, solicita conexão com um serviço externo para exibir parte do conteúdo.",
        "conceitos": [
          "Extensão de arquivo não comprova o tipo real do artefato",
          "Ativação de recurso externo por documento como mecanismo de execução"
        ],
        "estrategia": "Identificar o erro na crença de que a extensão e a visualização protegida bastam para neutralizar o risco. O pedido de conexão externa mostra que o arquivo pode acionar recursos além da leitura, e qualquer aberturamanual é exposição desnecessária em posto de trabalho.",
        "execucao": [
          "Reconhecer que a extensão .xlsx não garante o tipo real do arquivo, que pode conter objeto executável",
          "Registrar o pedido de conexão com serviço externo como indício de que o documento tentará executar algo",
          "Abortar a abertura sem aceitar a conexão nem habilitar conteúdo",
          "Reportar o arquivo pelo canal oficial, sem encaminhá-lo",
          "Verificar se o usuário já aceitou a conexão em sessão anterior e, se sim, isolar a estação"
        ],
        "resultado": "Abertura abortada antes de qualquer interação, com o pedido de conexão externa registrado como evidência do caso e a estação preservada.",
        "justificativa": "A extensão é um rótulo que o remetente escolhe, e a proteção padrão do programa de planilha não impede a ativação de recursos externos. Ao pedir conexão com serviço externo, o documento sinaliza execução de código, e é justamente esse o risco que a triagem existe para evitar, independentemente de o arquivo ter cara de planilha.",
        "errosFrequentes": [
          "Confiar na extensão do arquivo como prova de que o conteúdo é inofensivo",
          "Aceitar a solicitação de conexão por curiosidade de ver o conteúdo completo",
          "Encaminhar o arquivo para o próprio antivírus do desktop, o que já conta como execução"
        ],
        "variacao": "Se o anexo for um PDF que solicita abertura de aplicativo externo para visualizar o conteúdo, o raciocínio é o mesmo: recusar a abertura pelo aplicativo externo, reportar e deixar a verificação para a equipe autorizada."
      }
    ]
  }
};
