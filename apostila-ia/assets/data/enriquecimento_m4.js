const enriquecimentoM4 = {
  "m4-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Toda questão de segurança da informação parte da tríade CIA: sem nomear a propriedade afetada, o candidato não justifica controles nem descarta alternativas. O erro recorrente é tomar um controle isolado como solução completa, sem ver que a criptografia protege a confidencialidade, mas não devolve dado indisponível nem evidência arquivo adulterado.",
      "preRequisitos": [
        "Noção de informação como ativo institucional e de sigilo em documentos com dados pessoais",
        "Diferença entre controle de acesso físico e controle de acesso lógico",
        "Leitura de enunciados que descrevem indisponibilidade, vazamento ou adulteração de dados"
      ],
      "objetivosObservaveis": [
        "Definir confidencialidade, integridade e disponibilidade, com exemplo próprio para cada uma",
        "Classificar cenários de incidente conforme a propriedade violada",
        "Relacionar cada propriedade a controles preventivos, detectivos e de restauração",
        "Reconhecer quando uma medida isolada deixa uma das propriedades sem cobertura"
      ],
      "competencias": [
        "Diagnóstico de incidente: identificar a propriedade afetada a partir dos fatos narrados",
        "Raciocínio de proporcionalidade: equilibrar restrição de acesso e continuidade do serviço",
        "Leitura crítica de itens que resumem um controle isolado como solução completa"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s2 (Autenticidade, responsabilização e não repúdio) — complementa a tríade dentro do mesmo tópico",
        "m4-u1-t1-s3 (Ativos, ameaças, vulnerabilidades, risco e impacto) — explica por que cada propriedade precisa ser preservada",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — classifica os controles citados por propriedade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A tríade CIA estrutura boa parte dos itens de segurança da informação: enunciados sobre serviço fora do ar, vazamento de dados e adulteração de registros exigem identificar a propriedade afetada e escolher o controle correspondente."
      }
    },
    "niveis": {
      "iniciante": "Confidencialidade, integridade e disponibilidade são as três propriedades que a segurança da informação preserva. Confidencialidade: só quem tem autorização acessa a informação, com criptografia em repouso e em trânsito, perfis de acesso e classificação do conteúdo. Integridade: o dado permanece exato, completo e rastreável, com hash, assinatura digital, versionamento e registros de auditoria. Disponibilidade: serviço e informação acessíveis quando necessários, com backup testado, redundância e plano de continuidade.",
      "intermediario": "As três propriedades entram em tensão prática: exigir múltiplas aprovações eleva a confidencialidade e atrasa o atendimento, prejudicando a disponibilidade; cifrar grandes volumes protege o conteúdo, mas consome desempenho e exige gestão de chaves. Uma única falha pode atingir mais de uma propriedade: o ransomware cifra arquivos, altera o que foi cifrado e ameaça publicá-los. A análise do incidente deve listar as propriedades afetadas, não apenas uma.",
      "avancado": "Cada propriedade exige controles de naturezas distintas: o preventivo evita o dano, o detectivo sinaliza o episódio e o corretivo restaura o estado anterior. A criptografia protege a confidencialidade, mas não a integridade, porque um arquivo cifrado pode ser substituído por outra versão igualmente cifrada; a disponibilidade só se prova com restauração testada do backup. Avaliar uma proposta de segurança exige verificar quais propriedades ela efetivamente cobre.",
      "especialista": "Em ambientes críticos, a tríade vira critério de projeto e de aceite: tempo de recuperação e ponto de recuperação para disponibilidade, versionamento e hash para integridade, criptografia e segregação de acesso para confidencialidade. Cada requisito deve registrar qual propriedade está em jogo, quem responde pelo risco remanescente e em que prazo a lacuna será fechada, para que o aceite seja auditável."
    },
    "comparacoes": [
      {
        "tema": "Confidencialidade versus integridade",
        "a": {
          "rotulo": "Confidencialidade",
          "texto": "A informação só pode ser lida por quem tem autorização; a violação ocorre quando alguém indevido obtém acesso, vê ou copia o conteúdo."
        },
        "b": {
          "rotulo": "Integridade",
          "texto": "A informação conserva forma, conteúdo e completude; a violação ocorre quando o dado é alterado, truncado, duplicado ou substituído sem autorização."
        },
        "diferencaGabarito": "A confidencialidade é violada por acesso indevido ao conteúdo; a integridade, por alteração indevida de dados que podem continuar restritos ao mesmo grupo autorizado."
      },
      {
        "tema": "Criptografia de dados versus hash de verificação",
        "a": {
          "rotulo": "Criptografia",
          "texto": "Cifra o conteúdo com chave e permite recuperar o original a quem possui a chave; protege o sigilo, mas aceita nova versão cifrada no lugar da original."
        },
        "b": {
          "rotulo": "Hash",
          "texto": "Gera valor de tamanho fixo a partir do conteúdo; qualquer alteração muda o resultado, servindo para verificar se o dado permaneceu intacto."
        },
        "diferencaGabarito": "A criptografia impede a leitura sem a chave e não detecta adulteração por si só; o hash não oculta o conteúdo e evidência qualquer mudança no arquivo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Se os dados estão criptografados, a segurança da informação está garantida.'",
        "porqueErrada": "A criptografia é um controle de confidencialidade. Ela não impede a substituição do arquivo por outra versão cifrada, não restaura dados indisponíveis e, sozinha, não impede a leitura por quem tem a chave.",
        "versaoCorreta": "Errado. A criptografia sustenta principalmente a confidencialidade. Ela não garante integridade (um arquivo cifrado pode ser substituído por outra versão cifrada) nem disponibilidade (perda da chave, exclusão do backup ou cifragem pelo próprio ransomware deixam o dado inacessível). Segurança exige controles combinados para as três propriedades."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um backup criptografado, mas nunca restaurado, garante a disponibilidade da informação.'",
        "porqueErrada": "Criptografar a cópia protege o sigilo dela contra leitura indevida. A disponibilidade depende de restauração testada, porque uma cópia nunca restaurada pode estar corrompida, incompleta ou inacessível por perda de chave.",
        "versaoCorreta": "Errado. O backup só sustenta a disponibilidade quando a restauração é testada periodicamente; criptografar a cópia protege o sigilo, não comprova a possibilidade de recuperar os dados."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Confidencialidade: acesso restrito aos autorizados (criptografia, perfis de acesso, classificação, sigilo)",
        "Integridade: exatidão, completude e rastreabilidade do dado (hash, assinatura digital, versionamento, auditoria)",
        "Disponibilidade: acesso ao serviço e aos dados no momento necessário (backup testado, redundância, continuidade)",
        "Tensão entre propriedades: restrição de acesso e cifragem têm custo de agilidade e de desempenho"
      ],
      "regras": [
        "Antes de escolher um controle, identifique qual propriedade ele protege; nenhum controle isolado cobre a tríade",
        "Backup só comprova disponibilidade depois de restaurado e testado em ambiente controlado",
        "Criptografia protege confidencialidade; integridade exige hash, assinatura ou versionamento"
      ],
      "comparacoes": [
        "Confidencialidade: violação por acesso indevido ao conteúdo; integridade: violação por alteração indevida do dado",
        "Criptografia oculta o conteúdo e depende de chave; hash não oculta e serve para verificar a integridade"
      ],
      "fluxos": [
        "Identificar fatos do incidente, classificar a propriedade violada, escolher controle coerente e verificar se outra propriedade foi atingida",
        "Detectar indisponibilidade, acionar continuidade, restaurar a partir de backup testado e conferir a integridade dos dados recuperados"
      ],
      "excecoes": [
        "Criptografia de volumes muito grandes pode degradar o desempenho e, indiretamente, a disponibilidade",
        "Múltiplas aprovações elevam o sigilo, mas aumentam o tempo de atendimento e podem comprometer a disponibilidade operacional"
      ],
      "palavrasChave": [
        "tríade CIA",
        "confidencialidade",
        "integridade",
        "disponibilidade",
        "criptografia",
        "hash",
        "backup testado",
        "controle de acesso",
        "trilha de auditoria"
      ],
      "checklist": [
        "Nomear as três propriedades e o que cada uma preserva",
        "Classificar o incidente do enunciado pela propriedade afetada",
        "Verificar se o controle citado cobre todas as propriedades em jogo",
        "Confirmar que backups são restaurados e testados",
        "Relacionar a propriedade à evidência observável no cenário: acesso, alteração ou tempo fora do ar"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor de e-mail do setor de recursos humanos fica fora do ar por seis horas no dia de pagamento de subsídio. Qual propriedade da tríade foi violada e o que pode ser descartado?",
        "dados": "Servidor de e-mail indisponível por seis horas; dia de pagamento de subsídio; nenhum acesso indevido registrado; nenhuma alteração indevida de conteúdo comprovada.",
        "conceitos": [
          "Disponibilidade",
          "Confidencialidade",
          "Integridade"
        ],
        "estrategia": "Descreva o fato central — o serviço não respondeu — e teste cada propriedade: houve leitura indevida? houve alteração indevida? Se ambas forem negativas, a violação recai sobre a disponibilidade.",
        "execucao": [
          "Confirme o fato: seis horas sem resposta do servidor de e-mail.",
          "Teste a confidencialidade: não há registro de leitura por pessoa não autorizada.",
          "Teste a integridade: nenhuma alteração indevida de conteúdo foi comprovada.",
          "Conclua que a indisponibilidade no dia de pagamento é violação de disponibilidade."
        ],
        "resultado": "Disponibilidade. O serviço ficou inacessível justamente quando o pagamento exigia seu uso; confidencialidade e integridade não foram violadas, pois não houve leitura nem alteração indevida comprovada.",
        "justificativa": "O gabarito está correto porque a tríade descreve o que deve ser preservado, e o enunciado registra apenas a falta de acesso ao serviço; como nenhuma leitura ou alteração indevida aparece, as outras duas propriedades permanecem intactas.",
        "errosFrequentes": [
          "Marcar confidencialidade porque o e-mail contém dados de servidores e subsídios.",
          "Escolher integridade por confusão entre indisponibilidade do servidor e alteração de conteúdo.",
          "Aceitar que nenhuma propriedade foi violada supondo que a queda foi programada, sem verificar a data."
        ],
        "variacao": "Na semana de fechamento de inscrições, o portal fica inacessível e os candidatos reclamam; o mesmo raciocínio de fatos deve sustentar a classificação da propriedade violada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cartório digital pede a definição de controles para o ambiente de consultas de registros. A resposta deve indicar, para cada propriedade da tríade, os controles adequados.",
        "dados": "Cartório digital com registros de clientes; consultas feitas por atendentes; arquivos de carga e formulários versionados; exigência de retorno rápido ao atendimento; sem plano de continuidade definido.",
        "conceitos": [
          "Tríade CIA",
          "Controle de acesso por perfil",
          "Backup testado",
          "Auditoria de consultas"
        ],
        "estrategia": "Separe o pedido por propriedade: o que impede acesso indevido (confidencialidade), o que evidência e restringe alterações (integridade) e o que garante o retorno do serviço (disponibilidade), sempre citando um controle para cada grupo.",
        "execucao": [
          "Confidencialidade: autenticação forte e perfis por tipo de serviço, com criptografia dos registros em repouso.",
          "Integridade: auditoria de cada consulta e alteração, verificação por hash dos arquivos de carga e versionamento dos formulários.",
          "Disponibilidade: backup diário com restauração testada, servidor redundante e plano de continuidade com procedimento de retomada.",
          "Verifique a compatibilidade entre as medidas: exigir aprovações extras atrasaria o atendimento e afetaria a disponibilidade.",
          "Consolide a resposta em três linhas, uma por propriedade, ligando cada controle ao risco que ele cobre."
        ],
        "resultado": "Confidencialidade: autenticação forte, perfis por serviço e criptografia em repouso. Integridade: auditoria de consultas e alterações, hash dos arquivos de carga e versionamento de formulários. Disponibilidade: backup diário com restauração testada, redundância e plano de continuidade.",
        "justificativa": "O gabarito está correto porque o enunciado exige o mapeamento propriedade-controle: cada medida apresentada ataca a falha correspondente, leitura indevida, alteração indevida ou indisponibilidade, sem alegar que um controle sozinho resolve a tríade.",
        "errosFrequentes": [
          "Citar criptografia como resposta para integridade e para disponibilidade.",
          "Oferecer backup sem mencionar restauração testada, tratando a cópia como garantia de retorno.",
          "Esquecer a auditoria de consultas, que é justamente o que evidência alterações indevidas."
        ],
        "variacao": "O mesmo cartório passa a emitir certidões em PDF para entrega externa; reinvista o mapeamento e acrescenta, no grupo de integridade, o controle de assinatura digital do documento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se os dados estão criptografados, a segurança da informação está garantida.' Análise a afirmação e indique o que falta no raciocínio.",
        "dados": "Base de dados com criptografia em repouso e em trânsito; equipe afirma que o sistema está protegido; nenhum teste de restauração do backup foi registrado; chave reside no servidor de aplicação.",
        "conceitos": [
          "Confidencialidade",
          "Integridade",
          "Disponibilidade"
        ],
        "estrategia": "Avalie a afirmação propriedade por propriedade: a criptografia guarda o segredo, mas não impede a troca do arquivo por outra versão cifrada nem garante o retorno dos dados após cifragem por ransomware ou perda da chave.",
        "execucao": [
          "Identifique a propriedade efetivamente coberta: confidencialidade, pela cifragem do conteúdo.",
          "Teste a integridade: um arquivo cifrado pode ser substituído por outra versão igualmente cifrada.",
          "Teste a disponibilidade: perda da chave, exclusão do backup ou cifragem pelo ransomware deixam o dado inacessível.",
          "Conclua que a segurança exige controles combinados, um para cada propriedade."
        ],
        "resultado": "Errado. A criptografia protege a confidencialidade do dado, e nada além disso: o arquivo pode ser trocado por outra versão cifrada e o backup cifrado pode ser inacessível sem a chave. Segurança da informação exige a combinação de controles.",
        "justificativa": "A leitura ingênua falha porque atribui à criptografia o poder de resolver a tríade inteira; ela é apenas um controle de confidencialidade, e os cenários de troca de arquivo e de chave indisponível comprometeriam integridade e disponibilidade.",
        "errosFrequentes": [
          "Aceitar que garantida equivale a reduzida quando se trata de um controle técnico isolado.",
          "Supor que a cifragem impede alteração do arquivo, confundindo sigilo com integridade.",
          "Considerar o backup cifrado como prova de disponibilidade, sem menção a teste de restauração."
        ],
        "variacao": "A afirmação muda para 'com firewall e antivírus, o ambiente está seguro'; identifique quais propriedades ficam sem controle explícito nessa nova formulação."
      }
    ]
  },
  "m4-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Autenticidade, responsabilização e não repúdio separam controle de acesso de prova de autoria: o item exige dizer quem era o sujeito, se a ação é atribuível a ele e se ele poderia negar o ato.",
      "preRequisitos": [
        "Autenticação como verificação de identidade",
        "Autorização concede permissão; responsabilização presta contas",
        "Registro de auditoria e assinatura digital"
      ],
      "objetivosObservaveis": [
        "Definir autenticidade, responsabilização e não repúdio com exemplo para cada uma",
        "Distinguir a prova de identidade no acesso da evidência do ato",
        "Indicar o mecanismo que sustenta cada propriedade",
        "Diagnosticar a falha de conta funcional compartilhada"
      ],
      "competencias": [
        "Classificação de cenário pela propriedade em jogo",
        "Análise de controles de registro e de assinatura diante da prova",
        "Leitura crítica de item que promete garantia só com autenticação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — complementa o tópico",
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — base da responsabilização",
        "m4-u1-t3-s3 (Hashes e assinaturas digitais) — evidência do não repúdio"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo: o tema aparece em itens de assinatura, auditoria e conta compartilhada."
      }
    },
    "niveis": {
      "iniciante": "Autenticidade é a garantia de que a identidade do emissor ou do acessante é a declarada: a senha prova que quem entrou conhece o segredo, e o certificado prova que a chave pública é de quem se apresenta. Responsabilização é atribuir a ação a pessoa identificável; não repúdio é impedir a negação.",
      "intermediario": "Os três se apoiam, mas não se confundem. A autenticação acontece no instante do acesso e não revela o que foi feito depois. A responsabilização exige identificação individual e registro protegido. O não repúdio exige evidência que sobrevive ao ato, como assinatura digital.",
      "avancado": "Conta funcional compartilhada é o defeito clássico: a autenticação pode estar correta e, ainda assim, nenhum ato é atribuível a um indivíduo, pois todos usam a mesma credencial. A falha atinge responsabilização e não repúdio e só se corrige com contas individuais.",
      "especialista": "Em ambiente regulado, a prova de autoria vira requisito de aceite: cada ato gera registro com identificador do sujeito, data, hora e ação, em armazenamento protegido contra exclusão; documentos de valor legal dependem de assinatura digital com certificado confiável."
    },
    "comparacoes": [
      {
        "tema": "Autenticação x evidência do ato",
        "a": {
          "rotulo": "Autenticação",
          "texto": "Confere, no acesso, que quem entra é quem declara ser."
        },
        "b": {
          "rotulo": "Evidência do ato",
          "texto": "Documenta o que foi feito, com autor, data e hora."
        },
        "diferencaGabarito": "A autenticação diz quem entra; a evidência do ato diz o que ela fez."
      },
      {
        "tema": "Responsabilização x não repúdio",
        "a": {
          "rotulo": "Responsabilização",
          "texto": "Atribui a ação a sujeito identificável e presta contas."
        },
        "b": {
          "rotulo": "Não repúdio",
          "texto": "Impede a negação com evidência que sobrevive ao ato."
        },
        "diferencaGabarito": "Responsabilização é atribuição; não repúdio é impossibilidade de negação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Como o sistema exige senha na entrada, ele comprova o não repúdio das ações.'",
        "porqueErrada": "A senha mostra apenas que quem entrou conhecia o segredo. Não documenta o ato, e a credencial compartilhada facilita a negativa futura.",
        "versaoCorreta": "Errado. A senha prova autenticação no acesso; não repúdio exige evidência do ato (assinatura digital ou registro íntegro). Senha compartilhada facilita a negação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O uso de contas compartilhadas é compatível com a responsabilização de ações.'",
        "porqueErrada": "Com credencial única, o sistema não distingue qual sujeito executou cada ação; a atribuição individual é impossível e a trilha de auditoria aponta para um nome genérico.",
        "versaoCorreta": "Errado. Com conta compartilhada, não há como identificar o autor real da ação; responsabilidade e não repúdio ficam comprometidos."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Uma assinatura digital sobre certificado confiável comprova que o conteúdo da mensagem é verdadeiro.'",
        "porqueErrada": "A assinatura digital vincula o signatário ao documento e detecta alterações, mas não julga a veracidade do texto: resolve a autoria, não a certeza.",
        "versaoCorreta": "Errado. A assinatura sobre certificado confiável sustenta a autenticidade do signatário e o não repúdio do documento; o conteúdo assinado pode ser verdadeiro ou falso."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Autenticidade: a identidade declarada corresponde à pessoa ou à chave",
        "Responsabilização: atribuição da ação a sujeito identificável",
        "Não repúdio: impossibilidade de o agente negar a participação",
        "Assinatura digital sobre certificado confiável como evidência do ato",
        "Registro de auditoria protegido contra adulteração, base da responsabilização"
      ],
      "regras": [
        "Autenticar não é provar o ato: a senha cobre o acesso, o registro cobre a ação",
        "Sem registro íntegro não há responsabilização; sem evidência assinada, não há não repúdio",
        "Conta compartilhada compromete responsabilização e não repúdio",
        "Identificação individual e chave privada sustentam a prova de autoria"
      ],
      "comparacoes": [
        "Autenticidade prova quem é; responsabilização prova a quem atribuir a ação",
        "Senha autentica no acesso; assinatura e registro protegido documentam o ato"
      ],
      "fluxos": [
        "Identificar o sujeito, autenticar, registrar a ação com autor e data e proteger o registro",
        "Coletar o documento, assinar com a chave privada e distribuir a prova"
      ],
      "excecoes": [
        "A autenticação multifator reduz o roubo de credencial, mas não identifica o autor",
        "Registro sem proteção contra exclusão não produz prova de não repúdio"
      ],
      "palavrasChave": [
        "autenticidade",
        "responsabilização",
        "não repúdio",
        "conta individual",
        "registro de auditoria",
        "assinatura digital"
      ],
      "checklist": [
        "Digo o que cada propriedade prova e em que momento",
        "Separo a prova de identidade do acesso da evidência da ação",
        "Verifico se existe identificação individual no cenário",
        "Confiro se o registro de auditoria resiste à adulteração",
        "Relaciono o não repúdio a assinatura ou a registro protegido"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um relatório é assinado digitalmente e a assinatura é verificável junto à autoridade certificadora. Quais propriedades estão em jogo e o que ela prova?",
        "dados": "Certificado de autoridade confiável; chave privada sob controle do signatário; verificador confere a cadeia.",
        "conceitos": [
          "Autenticidade do signatário",
          "Integridade do documento",
          "Não repúdio"
        ],
        "estrategia": "Separar o que a assinatura vincula, o signatário e o conteúdo, do que ela não decide, como a veracidade.",
        "execucao": [
          "Verificar a cadeia do certificado até a autoridade confiável",
          "Confirmar que a chave privada estava sob controle do signatário",
          "Separar os efeitos: autoria, alteração e impossibilidade de negação"
        ],
        "resultado": "A assinatura vincula o documento ao signatário e invalida alterações; com certificado confiável, ele não nega a autoria.",
        "justificativa": "A assinatura resolve duas questões objetivas, de quem é o documento e se foi alterado, e produz prova de não repúdio com certificado confiável; não julga o conteúdo.",
        "errosFrequentes": [
          "Dizer que a assinatura garante que os dados do relatório são verdadeiros",
          "Aceitar a assinatura sem verificar a cadeia do certificado e a chave privada"
        ],
        "variacao": "Se a chave privada for compartilhada por dois assinantes da mesma unidade, o que muda na prova de não repúdio?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um sistema de despacho registra alterações feitas por três operadores que usam uma única conta funcional. Que falha isso representa e como corrigir?",
        "dados": "Três operadores em turnos distintos; um único identificador de acesso; registro com identificador, data e ação.",
        "conceitos": [
          "Responsabilização",
          "Não repúdio",
          "Conta individual"
        ],
        "estrategia": "Verificar o que o registro prova quando o identificador é o mesmo para três pessoas e listar as correções.",
        "execucao": [
          "Identificar a lacuna: o registro aponta a conta, não o operador",
          "Relacionar a lacuna a responsabilização e a não repúdio, mesmo com senha forte",
          "Propor contas individuais com menor privilégio e registro protegido"
        ],
        "resultado": "É falha de responsabilização e de não repúdio: ninguém é identificável. Exige conta individual e registro protegido.",
        "justificativa": "A identificação individual é requisito de responsabilização: com credencial única, o registro mostra o nome da função, e nenhuma ação é atribuível a uma pessoa.",
        "errosFrequentes": [
          "Considerar a autenticação forte como solução, já que impede acesso de terceiros sem identificar quem agiu",
          "Propor a troca de senha da conta institucional, o que não altera a falta de atribuição"
        ],
        "variacao": "Se o órgão mantiver a conta única, mas exigir o número do processo atendido na ordem, que garantia isso agrega?"
      },
      {
        "tipo": "erro",
        "problema": "O manual afirma: 'Como o portal exige senha e registra a data da sessão, a organização dispõe de não repúdio'. A análise está correta?",
        "dados": "Senha forte trocada periodicamente; registro de sessão com usuário e data; sem assinatura digital nem cópia protegida.",
        "conceitos": [
          "Autenticidade no acesso",
          "Responsabilização",
          "Não repúdio"
        ],
        "estrategia": "Testar a afirmação em cada propriedade: o que a senha prova, o que o registro permite atribuir e o que a negativa exigiria.",
        "execucao": [
          "Verificar o alcance da senha: ela autentica o acesso e nada mais",
          "Verificar o registro: usuário e data, sem proteção, podem ser editados",
          "Concluir que o não repúdio exigiria assinatura digital ou registro protegido"
        ],
        "resultado": "A análise está incompleta: senha e registro comum provam autenticação, mas não impedem a negação do ato.",
        "justificativa": "A leitura ingênua confunde registro comum com prova de não repúdio: um registro editável pelo administrador não sobrevive à contestação, e falta evidência robusta.",
        "errosFrequentes": [
          "Aceitar que a troca periódica de senha resolva a prova de autoria",
          "Não notar que a edição do registro pelo administrador enfraquece a evidência"
        ],
        "variacao": "Se a organização assinar digitalmente as ordens de serviço e manter cópia do registro fora do servidor, que parte da objeção permanece?"
      }
    ]
  },
  "m4-u1-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A cadeia ativo-ameaça-vulnerabilidade-risco-impacto é o vocabulário das questões de segurança: sem dominá-la, troca-se a fraqueza pelo agente ou o evento pela consequência. Os itens apresentam um cenário e pedem o elemento correto ou o tratamento adequado.",
      "preRequisitos": [
        "Noção de bem e serviço essencial em uma organização",
        "Extração de elementos relevantes de cenários descritivos"
      ],
      "objetivosObservaveis": [
        "Construir a cadeia conceitual ativo-ameaça-vulnerabilidade-risco-impacto e classificar tratamentos em situações concretas",
        "Distinguir ameaça (agente ou evento) de vulnerabilidade (fraqueza explorável)",
        "Classificar medidas descritas em evitar, mitigar, transferir ou aceitar",
        "Explicar por que o risco residual nunca é zero e como documentar seu aceite"
      ],
      "competencias": [
        "Modelagem conceitual de risco em cenários organizacionais",
        "Classificação de medidas conforme sua natureza",
        "Leitura crítica de declarações absolutas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o impacto materializa-se como violação de uma das propriedades",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — instrumentos concretos do tratamento mitigar",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — atua sobre a probabilidade na cadeia de risco",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — dados pessoais como ativo e o vazamento como impacto"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Sustenta os enunciados de todo o módulo de segurança e surge como item autônomo de definição e classificação de tratamento. A classificação é estimativa pedagógica, não levantamento estatístico."
      }
    },
    "niveis": {
      "iniciante": "Ativo é tudo o que tem valor para o órgão: dados, hardware e software, instalações e reputação. Ameaça é o evento ou agente capaz de provocar dano — atacante, erro operacional ou incêndio. Vulnerabilidade é a fraqueza explorável: senha padrão de fábrica, software sem correção, ausência de controle de acesso. Risco combina probabilidade e impacto; o impacto é a consequência materializada, como multa ou vazamento.",
      "intermediario": "Aplicar a cadeia a cenários: na senha padrão de fábrica, separar ativo (rede e informações), ameaça (agente que tenta acesso indevido), vulnerabilidade (credencial pública) e risco (probabilidade × impacto). Expressar o risco em escala qualitativa.",
      "avancado": "Escolher o tratamento conforme o contexto: evitar, não realizando a atividade; mitigar, reduzindo probabilidade ou impacto; transferir, por seguro ou contrato; aceitar, com decisão consciente registrada. O residual nunca é zero e exige aceite formal com responsável e data.",
      "especialista": "Estruturar o processo: inventário de ativos, identificação de ameaças e vulnerabilidades, avaliação qualitativa, seleção de tratamento, registro do residual aceito e revisão periódica. Criticar afirmações absolutas (risco zero, segurança total) ante o surgimento contínuo de ameaças."
    },
    "comparacoes": [
      {
        "tema": "Ameaça versus vulnerabilidade",
        "a": {
          "rotulo": "Ameaça",
          "texto": "Evento ou agente capaz de provocar dano ao ativo: atacante, erro operacional, incêndio ou inundação."
        },
        "b": {
          "rotulo": "Vulnerabilidade",
          "texto": "Fraqueza explorável que permite concretizar o dano: senha padrão, software sem correção, processo inexistente."
        },
        "diferencaGabarito": "A ameaça ataca; a vulnerabilidade é a condição que facilita. Na credencial padrão, a ameaça é o agente externo; a fragilidade é a senha conhecida."
      },
      {
        "tema": "Risco versus impacto",
        "a": {
          "rotulo": "Risco",
          "texto": "Combinação da probabilidade de exploração da vulnerabilidade com a severidade da consequência, em escala qualitativa."
        },
        "b": {
          "rotulo": "Impacto",
          "texto": "Consequência materializada do incidente: multa, paralisação, vazamento de dados pessoais, perda de confiança."
        },
        "diferencaGabarito": "O impacto é componente do risco: pode ser alto e o risco moderado se a probabilidade for baixa. Itens exploram a troca indevida dos termos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Depois de implantar firewall, MFA e backup, o risco do sistema ficou zero.",
        "porqueErrada": "Nenhum conjunto de controles elimina o risco: novas ameaças surgem e fragilidades remanescentes persistem, como a engenharia social no suporte.",
        "versaoCorreta": "Os controles reduzem o risco a um patamar residual, aceito formalmente — com responsável e data — e revisado periodicamente."
      },
      {
        "afirmacaoEquivocada": "Contratar seguro contra fraude elimina o risco da atividade.",
        "porqueErrada": "Transferir desloca parte do ônus financeiro; a probabilidade do evento e os danos não indenizáveis permanecem com o órgão.",
        "versaoCorreta": "O seguro é transferência: não impede o incidente nem dispensa os controles que reduzem probabilidade e impacto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Ativo: tudo o que tem valor para o órgão — dados, equipamentos, serviços, reputação",
        "Ameaça: evento ou agente capaz de provocar dano, intencional ou não",
        "Vulnerabilidade: fraqueza explorável, técnica ou de processo",
        "Risco: combinação qualitativa de probabilidade e impacto",
        "Risco residual: parcela que permanece após o tratamento e se aceita formalmente"
      ],
      "regras": [
        "Risco expressa-se como probabilidade × impacto em escala qualitativa, não cálculo financeiro exato",
        "O risco residual nunca é zero: aceita-se com registro de responsável e data",
        "Aceite de risco é decisão consciente e documentada; aceite implícito não é gestão de risco"
      ],
      "comparacoes": [
        "Ameaça é o agente ou evento; vulnerabilidade é a fraqueza explorável"
      ],
      "fluxos": [
        "Cadeia de risco: ativo exposto → ameaça encontra vulnerabilidade → incidente → impacto → tratamento → residual monitorado"
      ],
      "excecoes": [
        "A escala de risco é qualitativa: serve para priorizar decisões, sem pretender precisão financeira"
      ],
      "palavrasChave": [
        "ativo",
        "ameaça",
        "vulnerabilidade",
        "risco residual",
        "tratamento",
        "impacto"
      ],
      "checklist": [
        "Identifico ativo, ameaça, vulnerabilidade, risco e impacto no cenário?",
        "Distinguo probabilidade de impacto ao estimar o risco?",
        "Classifico a medida em evitar, mitigar, transferir ou aceitar?",
        "Explico por que o residual permanece e como se documenta?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identifique ativo, ameaça, vulnerabilidade e risco no cenário: 'a página do órgão usa a senha padrão de fábrica do fabricante do roteador'.",
        "dados": "Página institucional hospedada em rede cujo roteador mantém a senha padrão de fábrica, credencial publicamente conhecida; pelo equipamento acessa-se a rede interna.",
        "conceitos": [
          "Ativo",
          "Vulnerabilidade",
          "Risco"
        ],
        "estrategia": "Percorrer a cadeia em ordem: o que tem valor, o agente capaz de danificar, a fraqueza explorável e a combinação probabilidade × impacto.",
        "execucao": [
          "Listar o ativo: a rede e as informações acessíveis por ela.",
          "Identificar a vulnerabilidade: credencial padrão conhecida publicamente.",
          "Identificar a ameaça: agente externo ou interno que tenta acesso indevido.",
          "Estimar o risco: probabilidade elevada pela credencial pública, impacto alto pela extensão do dano."
        ],
        "resultado": "Ativo: a rede e as informações acessíveis por ela. Ameaça: agente externo ou interno que tenta acesso indevido. Vulnerabilidade: credencial padrão conhecida publicamente. Risco: probabilidade de exploração multiplicada pelo impacto do acesso à rede interna, que tende a ser alto pela extensão do dano.",
        "justificativa": "Cada termo está ancorado no cenário: a senha de fábrica é a vulnerabilidade por ser fraqueza conhecida; o agente que tenta acesso é a ameaça; o dano potencial define o impacto. O risco resulta da combinação dos dois fatores.",
        "errosFrequentes": [
          "Responder que a vulnerabilidade é o 'atacante', invertendo fraqueza e agente.",
          "Avaliar o risco apenas pela probabilidade, sem considerar o impacto."
        ],
        "variacao": "Troque a senha padrão por software sem correção conhecida publicamente: a cadeia é a mesma, com a fragilidade deslocada para o programa sem atualização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Após implantar MFA e treinamento, o risco de fraude por roubo de senha caiu, mas não desapareceu (ex.: engenharia social dirigida ao suporte). Que tipo de risco restou e qual tratamento cabe?",
        "dados": "Órgão implantou segundo fator e treinamento; o suporte recebe ligações de supostos servidores pedindo redefinição de cadastro; não há verificação formal de identidade no atendimento.",
        "conceitos": [
          "Risco residual",
          "Aceite formal"
        ],
        "estrategia": "Classificar o que restou após os controles como residual e responder com mitigação complementar somada a aceite documentado.",
        "execucao": [
          "Reconhecer que MFA e treinamento reduziram a probabilidade de fraude por senha.",
          "Mapear o vetor remanescente: engenharia social dirigida ao suporte.",
          "Propor mitigação adicional: verificação de identidade no atendimento e bloqueio de alteração por canal não autenticado.",
          "Registrar o aceite formal do que restar, com responsável e data."
        ],
        "resultado": "Risco residual. Cabe tratamento de mitigação adicional (procedimento de verificação de identidade no suporte, bloqueio de alteração de cadastro por canal não autenticado) e aceite formal documentado do que restar, com responsável e data — aceite implícito não é gestão de risco.",
        "justificativa": "O enunciado diz que o risco 'caiu, mas não desapareceu' — definição literal de residual. A resposta combina nova mitigação, porque há vetor tratável, com aceite formal, porque nenhum processo elimina tudo.",
        "errosFrequentes": [
          "Declarar que o risco foi eliminado pelos controles implantados.",
          "Confundir aceite formal com tolerância não documentada."
        ],
        "variacao": "Suponha que o órgão contrate apólice para cobrir prejuízos dessa fraude: identifica-se tratamento por transferência, que convive com as mitigações."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Depois de todos os controles implantados, o risco do sistema ficou zero.'",
        "dados": "Relatório de projeto declara 'risco eliminado' após firewall, MFA e backup; não há registro de aceite de residual nem calendário de revisão.",
        "conceitos": [
          "Risco residual",
          "Afirmações absolutas"
        ],
        "estrategia": "Submeter a afirmação à definição de residual: se os controles apenas reduzem, qualquer promessa de zero é falsa.",
        "execucao": [
          "Isolar a palavra-chave do enunciado: 'zero'.",
          "Confrontar com o surgimento contínuo de ameaças e fragilidades novas.",
          "Reformular: risco reduzido a nível residual, aceito formalmente e revisado."
        ],
        "resultado": "Errado. Controles reduzem risco a um patamar residual; eliminação total é inatingível porque novas ameaças e vulnerabilidades surgem continuamente. O correto é declarar o risco residual aceito formalmente e revisá-lo periodicamente.",
        "justificativa": "A afirmativa troca redução por eliminação: o patamar alcançado com controles é o residual, não o zero. Novas ameaças surgem sem cessar; aceitar formalmente e revisar distingue gestão de risco de propaganda.",
        "errosFrequentes": [
          "Ler 'risco baixo' como 'risco zero' e marcar a afirmação como correta.",
          "Tratar a ausência de incidentes passados como prova de risco futuro nulo."
        ],
        "variacao": "Mude a afirmação para 'com backup, não existe risco de indisponibilidade': o erro análogo é ignorar que backup é corretivo e reduz impacto, não probabilidade."
      }
    ]
  },
  "m4-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar controles pela natureza — evitar, avisar, restaurar, cobrir — é habilidade cobrada em itens que descrevem uma medida e pedem sua categoria. O erro comum é ler o alerta como correção ou o paliativo temporário como solução definitiva.",
      "preRequisitos": [
        "Cadeia ativo-ameaça-vulnerabilidade-risco-impacto",
        "Noção de incidente de segurança e de resposta"
      ],
      "objetivosObservaveis": [
        "Classificar controles de segurança por sua natureza e justificar controles compensatórios temporários",
        "Classificar medidas descritas em preventivas, detectivas, corretivas ou compensatórias",
        "Explicar por que o alerta de IDS não corrige nada por si só",
        "Formalizar compensatório com prazo, responsável e critério de substituição"
      ],
      "competencias": [
        "Classificação de controles pelo momento de atuação",
        "Governança de exceções de segurança",
        "Leitura de cenários de defesa em profundidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t1-s3 (Ativos, ameaças, vulnerabilidades, risco e impacto) — os controles materializam o tratamento de risco",
        "m4-u2-t2-s1 (Firewall de pacotes) — controle preventivo de rede",
        "m4-u2-t3-s1 (IDS e IPS) — controle detectivo clássico",
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — controle corretivo de restauração",
        "m4-u2-t4-s3 (Defesa em profundidade) — combinação das quatro naturezas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia preventivo/detectivo/corretivo/compensatório é tema em itens que trocam a natureza de controles conhecidos (IDS, backup, MFA). A classificação é estimativa pedagógica, não levantamento estatístico de frequência."
      }
    },
    "niveis": {
      "iniciante": "Controles preventivos evitam o incidente: firewall com negação padrão, MFA, bloqueio de macros. Detectivos identificam que ele ocorreu ou está ocorrendo: alertas de login fora do padrão, IDS, revisão de registros. Corretivos eliminam a causa ou restauram o estado: restauração de backup, revogação de credencial comprometida. Compensatórios são alternativas temporárias enquanto o principal não pode ser aplicado.",
      "intermediario": "Aplicar o critério do momento: o que age antes é preventivo; o que percebe durante ou depois é detectivo; o que elimina causa ou restaura é corretivo; o que cobre a ausência do principal é compensatório. O antivírus pode ter dupla natureza: bloqueia (preventivo) e remove (corretivo).",
      "avancado": "Governar o compensatório: toda medida alternativa exige prazo, responsável nomeado e data de substituição pelo controle principal; sem isso, a exceção se torna permanente silenciosa. Exemplo: sistema legado sem MFA recebe lista de endereços permitidos e revisão diária até a migração.",
      "especialista": "Projetar defesa em profundidade: o preventivo reduz a chance do incidente, o detectivo encurta a percepção, o corretivo restaura o estado e o compensatório cobre a janela de exposição. Avaliar proporcionalidade e revisar o compensatório periodicamente até a extinção."
    },
    "comparacoes": [
      {
        "tema": "Controle preventivo versus controle detectivo",
        "a": {
          "rotulo": "Preventivo",
          "texto": "Firewall com negação padrão e bloqueio de macros: impedem que o incidente aconteça."
        },
        "b": {
          "rotulo": "Detectivo",
          "texto": "IDS e alerta de login fora do padrão: informam que o incidente ocorreu ou está ocorrendo."
        },
        "diferencaGabarito": "Preventivo evita; detectivo informa. O alerta não significa dano evitado — significa dano percebido."
      },
      {
        "tema": "Controle corretivo versus controle compensatório",
        "a": {
          "rotulo": "Corretivo",
          "texto": "Restauração após a perda: reage ao incidente consumado para voltar ao estado desejado."
        },
        "b": {
          "rotulo": "Compensatório",
          "texto": "Bloqueio manual de acessos enquanto a MFA não existe: alternativa temporária à ausência do principal."
        },
        "diferencaGabarito": "O corretivo responde ao incidente; o compensatório substitui provisoriamente o controle principal e exige prazo, responsável e data de substituição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um alerta disparado pelo IDS é exemplo de controle corretivo.",
        "porqueErrada": "O alerta informa que algo ocorreu ou está ocorrendo; por si só, não contém, não restaura e não elimina causa alguma.",
        "versaoCorreta": "O IDS é detectivo: a contenção e a recuperação dependem de controles posteriores de resposta, como isolar o equipamento afetado."
      },
      {
        "afirmacaoEquivocada": "Controles compensatórios podem ser mantidos indefinidamente, desde que funcionem.",
        "porqueErrada": "A medida nasceu para ganhar tempo até que o controle principal exista; transformá-la em permanente é conviver com a fragilidade original sob outro nome.",
        "versaoCorreta": "O compensatório é exceção temporária: exige prazo, responsável nomeado e data de substituição pelo controle principal."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Controle preventivo: impede a ocorrência do incidente",
        "Controle detectivo: percebe o incidente em curso ou consumado",
        "Controle corretivo: elimina a causa ou restaura o estado desejado",
        "Controle compensatório: alternativa temporária ao controle principal ausente",
        "Defesa em profundidade: combinação das quatro naturezas"
      ],
      "regras": [
        "Todo controle compensatório exige prazo, responsável e data de substituição pelo controle principal",
        "Alertar não é corrigir: responder ao detectivo é atribuição de outro controle",
        "A política de negação padrão do firewall exemplifica a prevenção"
      ],
      "comparacoes": [
        "Detectivo informa; corretivo repara — a diferença está em reparar ou apenas perceber"
      ],
      "fluxos": [
        "Ciclo da defesa: preventivo reduz a chance → detectivo encurta a percepção → corretivo restaura o estado → compensatório cobre a janela de exposição"
      ],
      "excecoes": [
        "Uma mesma medida pode ter mais de uma natureza: o antivírus bloqueia o código conhecido e o remove após a execução"
      ],
      "palavrasChave": [
        "preventivo",
        "detectivo",
        "corretivo",
        "compensatório",
        "exceção temporária"
      ],
      "checklist": [
        "Classifico a medida pela natureza e pelo momento de atuação?",
        "Distinguo alertar de corrigir em itens sobre IDS?",
        "Formalizo o compensatório com prazo, responsável e substituição?",
        "Combino as quatro naturezas ao explicar defesa em profundidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique: 'antivírus com atualização de assinaturas', 'alerta de tentativa de login recusada' e 'restauração de arquivos a partir de cópia de segurança'.",
        "dados": "Três medidas em avaliação: antivírus com atualização de assinaturas; alerta a cada tentativa de login recusada; restauração de arquivos a partir de cópia de segurança.",
        "conceitos": [
          "Classificação de controles",
          "Momento de atuação"
        ],
        "estrategia": "Perguntar, para cada medida, quando ela atua — antes, durante ou depois — e se repara algo ou apenas informa.",
        "execucao": [
          "Analisar o antivírus: bloqueia código conhecido antes (preventivo) e o remove depois (corretivo).",
          "Analisar o alerta de login recusado: informa a tentativa, sem reparar nada (detectivo).",
          "Analisar a restauração: recupera o estado após a perda (corretivo)."
        ],
        "resultado": "Antivírus atua de forma preventiva (bloqueia código malicioso conhecido) e, quando identifica após a execução, de forma corretiva ao remover. Alerta de login recusada é detectivo. Restauração a partir de backup é corretivo.",
        "justificativa": "A classificação decorre do momento e do efeito: bloquear precede o incidente, alertar apenas comunica, restaurar repara o dano. O antivírus ilustra a dupla natureza, e o alerta não vira corretivo por indicar a tentativa recusada.",
        "errosFrequentes": [
          "Classificar o alerta como corretivo por ocorrer 'depois' da tentativa.",
          "Ignorar a dupla natureza do antivírus, classificando-o só como preventivo."
        ],
        "variacao": "Acrescente à lista a exigência de MFA e a revisão humana diária de registros enquanto a automação não existe: surgem um preventivo e um compensatório a classificar."
      },
      {
        "tipo": "aplicacao",
        "problema": "O sistema legado do órgão não suporta MFA e a substituição levará 12 meses. Que controle compensatório é proporcional e como ele deve ser governado?",
        "dados": "Sistema legado de folha de pagamento sem suporte a MFA; migração em 12 meses; quarenta usuários acessam apenas da rede administrativa.",
        "conceitos": [
          "Controle compensatório",
          "Governança de exceção"
        ],
        "estrategia": "Propor medidas alternativas proporcionais à janela de exposição e formalizá-las como exceção governada, com prazo e responsável.",
        "execucao": [
          "Restringir o acesso do sistema à rede interna e a lista de endereços permitidos.",
          "Exigir verificação de identidade por canal registrado antes de qualquer alteração de acesso.",
          "Instituir revisão diária dos registros de acesso dos perfis do sistema.",
          "Registrar a exceção com prazo de 12 meses, responsável nomeado e revisão mensal."
        ],
        "resultado": "Controle compensatório: acesso restrito a rede interna e lista de endereços permitidos, verificação de identidade por canal registrado no atendimento ao usuário e revisão diária dos registros de acesso daquele perfil. Governança: registrar prazo de 12 meses (ou menos), responsável nomeado e critério objetivo de substituição, com revisão mensal até a migração para MFA.",
        "justificativa": "O compensatório deve cobrir a fraqueza que a MFA cobriria — o acesso com credencial comprometida — por meios disponíveis hoje, e ser proporcional à janela de 12 meses. A governança explícita é o que impede a exceção de se perpetuar.",
        "errosFrequentes": [
          "Adotar o compensatório sem registro formal de prazo e responsável.",
          "Tratar o paliativo como solução definitiva em lugar da MFA."
        ],
        "variacao": "Suponha que os 12 meses se esgotem e a migração atrase: renovar a exceção exige nova análise formal e redefinição de prazo, não continuidade automática."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Controles compensatórios podem ser mantidos indefinidamente, desde que funcionem.'",
        "dados": "Bloqueio manual de acessos implantado como provisório há dois anos; sem registro de prazo, responsável ou data de substituição; a MFA segue inexistindo.",
        "conceitos": [
          "Exceção temporária",
          "Normalização da exceção"
        ],
        "estrategia": "Confrontar a duração prática da medida com sua natureza de exceção temporária, procurando os elementos de governança ausentes.",
        "execucao": [
          "Verificar que o 'provisório' completou dois anos sem revisão.",
          "Conferir a ausência de prazo, responsável e data de substituição.",
          "Avaliar o efeito: a fragilidade original segue sem correção e o risco acumula.",
          "Concluir pela substituição pelo controle principal, com cronograma formal."
        ],
        "resultado": "Errado. Compensatório é exceção temporária: sem prazo e substituição pelo controle principal, a exceção se normaliza, acumula risco e impede a correção da vulnerabilidade original.",
        "justificativa": "A afirmação é atraente porque a medida 'funciona' no dia a dia. Mas compensatório é categoria temporal, não de eficácia: mantido indefinidamente, deixa de compensar e passa a ser a configuração do sistema, perpetuando a ausência da MFA.",
        "errosFrequentes": [
          "Avaliar o controle pelo funcionamento atual, ignorando a governança ausente.",
          "Confundir a persistência da medida com aprovação institucional dela."
        ],
        "variacao": "Transponha o caso para a revisão humana diária de registros que virou rotina permanente: a mesma falha de governança — exceção sem prazo — reaparece em contexto detectivo."
      }
    ]
  },
  "m4-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Autenticação, autorização e auditoria formam o ciclo de controle de acesso; o erro mais comum em concursos é tratar autenticado como autorizado. Menor privilégio limita o dano de contas comprometidas e é exigido pela Lei nº 13.709/2018 (LGPD) como medida de segurança para tratamento de dados.",
      "preRequisitos": [
        "Noção de identidade de usuário e credencial de acesso",
        "Diferença entre sistema, arquivo, tela e comando como recurso",
        "Boas práticas de senha forte e não reutilização"
      ],
      "objetivosObservaveis": [
        "Distinga autenticação (quem é), autorização (o que pode) e auditoria (o que fez)",
        "Desenhe perfis de acesso aplicando menor privilégio e separação de funções",
        "Identifique o dado mínimo que um registro de auditoria deve conter"
      ],
      "competencias": [
        "Raciocínio de controle de acesso: mapear identidade, perfil e permissão",
        "Atenção a detalhes: um perfil excessivo expõe todo o ambiente",
        "Aplicação de normas de proteção de dados ao desenho de acessos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t2-s3 (MFA, senhas, gerenciadores e autenticação resistente a phishing) — reforço do primeiro fator do ciclo de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Controle de acesso e menor privilégio são partes fundamentais do programa. A classificação reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "As três funções formam o ciclo clássico de controle de acesso. Autenticação responde quem é você: verifica credenciais como senha, token, biometria ou certificado. Autorização responde o que você pode fazer: mapeia identidade, perfil e permissões sobre arquivos, telas e comandos. Auditoria responde o que você fez: registra ações com identificador, data/hora e resultado, protegido contra alteração. Menor privilégio concede somente o mínimo necessário à função, nunca mais.",
      "intermediario": "Na prática, autenticação confirmada não implica autorização: o sistema deve avaliar o perfil a cada requisição, não apenas na entrada. Menor privilégio se aplica também a serviços: a conta de um aplicativo acessa apenas o banco de dados que usa e nunca faz login como administrador do domínio. Separar quem aprova de quem executa reduz o impacto de erro ou fraude.",
      "avancado": "Erros críticos incluem dar perfil de administrador a usuário final para facilitar, expor logs de auditoria a alteração e reutilizar contas compartilhadas. A separação de funções impede que uma só pessoa cadastre, aprove e pague. Cada ação relevante deve gerar registro imutável com identificador do usuário, data/hora e resultado da operação.",
      "especialista": "Implementar menor privilégio exige revisão periódica de perfis, revogação imediata de acessos ao desligamento e monitoramento de tentativas de acesso negado. Auditoria eficaz combina logs imutáveis, alerta de anomalias e revisão independente. Isso sustenta conformidade com LGPD e boas práticas de governança de TI."
    },
    "comparacoes": [
      {
        "tema": "Autenticação versus autorização no ciclo de controle de acesso",
        "a": {
          "rotulo": "Autenticação",
          "texto": "Verifica quem é o usuário, checando credenciais (senha, token, biometria, certificado). Responde: quem está acessando?"
        },
        "b": {
          "rotulo": "Autorização",
          "texto": "Define o que o usuário autenticado pode fazer, mapeando perfil a permissões sobre recursos. Responde: ele pode executar esta ação?"
        },
        "diferencaGabarito": "Autenticação confirma a identidade; autorização concede ou nega a ação com base no perfil. Usuário autenticado não está automaticamente autorizado a tudo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Usuário autenticado pode acessar qualquer recurso do sistema.",
        "porqueErrada": "Confunde autenticação com autorização: confirmar a identidade não concede permissão sobre todos os recursos; o perfil de acesso delimita cada operação.",
        "versaoCorreta": "O acesso depende do perfil, avaliado a cada operação, e a regra padrão é negar o que não foi explicitamente permitido."
      },
      {
        "afirmacaoEquivocada": "Separar quem aprova de quem executa é apenas formalidade burocrática, sem efeito sobre segurança.",
        "porqueErrada": "A separação de funções é derivado direto do menor privilégio: reduz poderes acumulados em uma só identidade e diminui o impacto de erro ou fraude.",
        "versaoCorreta": "É uma aplicação obrigatória do menor privilégio: quem aprova não executa e quem cadastra não paga, evitando concentração de poderes."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Autenticação: verificação de credenciais (quem é você)",
        "Autorização: mapeamento identidade, perfil e permissões (o que pode fazer)",
        "Auditoria: registro de ações com identificador, data/hora e resultado",
        "Menor privilégio: conceder somente o mínimo necessário à função"
      ],
      "regras": [
        "Avaliar autorização a cada requisição, não apenas na entrada do sistema",
        "Contas de serviço acessam apenas os recursos que usam, nunca domínio inteiro",
        "Registros de auditoria devem ser protegidos contra alteração"
      ],
      "comparacoes": [
        "Autenticação confirma identidade; autorização concede ou nega a ação com base no perfil."
      ],
      "fluxos": [
        "Credenciais apresentadas; sistema autentica; perfil consultado; ação autorizada ou negada; registro de auditoria gravado."
      ],
      "excecoes": [
        "Conta de emergência com privilégio elevado requer aprovação documentada e registro explícito de uso.",
        "Acesso de suporte temporário deve ter prazo definido e revogação automática."
      ],
      "palavrasChave": [
        "autenticação",
        "autorização",
        "auditoria",
        "menor privilégio",
        "separação de funções",
        "perfil de acesso",
        "credencial",
        "registro de auditoria"
      ],
      "checklist": [
        "Distinguir autenticação, autorização e auditoria em cada cenário",
        "Aplicar menor privilégio ao criar ou editar perfis",
        "Separar quem aprova de quem executa",
        "Registrar identificador, data/hora, ação e resultado para cada operação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor autentica corretamente o usuário, mas ele tenta abrir a pasta de outro setor. Em que etapa do ciclo a falha está?",
        "dados": "Usuário com senha válida; tentativa de abrir pasta de setor diferente; servidor confirma identidade, mas nega a pasta.",
        "conceitos": [
          "Autenticação",
          "Autorização"
        ],
        "estrategia": "Confirme que a identidade foi verificada e verifique se a permissão solicitada corresponde ao perfil do usuário.",
        "execucao": [
          "Verifique se as credenciais foram aceitas (autenticação realizada).",
          "Consulte o perfil do usuário e as permissões sobre a pasta alvo.",
          "Conclua que a falha está na autorização, não na autenticação."
        ],
        "resultado": "Na autorização: a identidade foi confirmada, mas a permissão não corresponde ao perfil. A ação deve ser negada e registrada para auditoria.",
        "justificativa": "O gabarito está correto porque autenticação apenas identifica o usuário; cabe à autorização decidir se o perfil permite acessar aquele recurso específico.",
        "errosFrequentes": [
          "Achar que senha correta garante acesso a qualquer pasta do sistema.",
          "Confundir o momento da falha e atribuí-la à autenticação."
        ],
        "variacao": "O usuário acessa o sistema corretamente, mas tenta excluir um relatório que apenas gestores podem modificar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Desenhe perfis para a seção de licitações: equipe que digita, analista que aprova e auditoria externa.",
        "dados": "Três perfis: equipe de digitação, analista de conformidade, auditoria externa; recursos: registros de licitação, campos de conformidade, logs de auditoria.",
        "conceitos": [
          "Menor privilégio",
          "Separar quem aprova de quem executa",
          "Auditoria"
        ],
        "estrategia": "Atribua a cada perfil somente as permissões mínimas para sua função e garanta registro individual de cada ação.",
        "execucao": [
          "Equipe de digitação: cria e edita registros próprios, sem aprovação e sem exclusão de histórico.",
          "Analista: aprova e edita campos de conformidade, sem excluir o histórico existente.",
          "Auditoria externa: acesso somente leitura a registros e logs, sem permissão de escrita.",
          "Todos com conta individual e registro de auditoria de cada ação."
        ],
        "resultado": "Menor privilégio mais separação de funções: digitação cria/edita próprios; analista aprova campos de conformidade sem excluir histórico; auditoria só lê registros e logs. Todos com conta individual e registro de auditoria.",
        "justificativa": "O fluxo impede que uma única pessoa cadastre, aprove e exclua, reduzindo fraude e erro; a auditoria externa lê sem alterar, preservando a integridade dos logs.",
        "errosFrequentes": [
          "Dar ao analista permissão de exclusão sobre o histórico.",
          "Usar conta compartilhada entre digitação e análise."
        ],
        "variacao": "A mesma seção passa a exigir que um segundo analista revise aprovações acima de um valor limite antes de homologar."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Usuário autenticado pode acessar qualquer recurso do sistema, independentemente do perfil ou da função que exerce na organização.",
        "dados": "Usuário com senha válida autenticado no sistema; tentativa de acesso a recurso de perfil diferente.",
        "conceitos": [
          "Autenticação",
          "Autorização",
          "Menor privilégio"
        ],
        "estrategia": "Reconheça que autenticação identifica, mas não autoriza; o acesso depende do perfil avaliado a cada operação.",
        "execucao": [
          "Identifique que a afirmação equaliza autenticação com autorização total.",
          "Lembre que cada requisição é avaliada pelo perfil do usuário.",
          "Aplique a regra padrão: negar o que não foi explicitamente permitido."
        ],
        "resultado": "Errado. Autenticação identifica; autorização delimita. O acesso depende do perfil, avaliado a cada operação, e a regra padrão é negar o que não foi explicitamente permitido.",
        "justificativa": "A leitura ingênua falha porque pressupõe que logar no sistema libera tudo; o controle de acesso funciona em camadas, sendo a autorização a barreira para cada recurso.",
        "errosFrequentes": [
          "Achar que autenticado significa liberação geral de recursos.",
          "Ignorar que a autorização é reavaliada a cada operação."
        ],
        "variacao": "Um funcionário autenticado tenta acessar o módulo de folha de pagamento, cujo perfil é restrito ao departamento de RH."
      }
    ]
  },
  "m4-u1-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "MFA combina fatores de categorias distintas e reduz muito o risco de uso indevido de credenciais, mas não é absoluto: vetores residuais como troca de chip, phishing em tempo real e engenharia social no suporte continuam exigindo controles adicionais, especialmente em servidores públicos de alta exposição.",
      "preRequisitos": [
        "Noção de fatores de autenticação (sabe, tem, é)",
        "Diferença entre senha única e reutilizada",
        "Conceito de site clonado e phishing"
      ],
      "objetivosObservaveis": [
        "Compare fatores de autenticação por categoria e força",
        "Avalie mecanismos MFA, incluindo SMS, TOTP e passkey/WebAuthn",
        "Indique alternativa resistente a phishing para autenticação"
      ],
      "competencias": [
        "Avaliar força de mecanismos de autenticação em cenários concretos",
        "Identificar vetores residuais mesmo com MFA ativado",
        "Aplicar critério de resistência a phishing na escolha de fatores"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — base do primeiro fator do ciclo de acesso"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "MFA e autenticação resistente a phishing fazem parte do programa. A classificação reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Autenticação fatorada combina categorias independentes: algo que sabe (senha, PIN), algo que tem (aplicativo autenticador, cartão, token) e algo que é (biometria). MFA exige ao menos dois fatores de categorias distintas; 2FA é o caso com exatamente dois. Senhas longas, únicas por serviço e guardadas em gerenciador superam políticas de troca periódica forçada, que geram variantes previsíveis.",
      "intermediario": "SMS e chamada podem sofrer fraude de troca de chip (SIM swap); códigos TOTP podem ser capturados por sites falsos. Autenticação resistente a phishing (passkey/WebAuthn) vincula o fator ao domínio legítimo: o navegador conclui apenas no endereço correto, anulando sites clonados. MFA não substitui senhas fracas nem protege contra engenharia social direcionada ao suporte.",
      "avancado": "A autenticação de recuperação de conta também precisa de fatores, pois é um ponto de fraqueza: atacantes tentam redefinir senha pelo suporte. MFA reduz muito o risco de autenticação indevida, mas não elimina interceptação em tempo real nem contaminação do próprio dispositivo do usuário.",
      "especialista": "Implantar MFA em larga escala exige política de recuperação segura, treinamento contra engenharia social, monitoramento de logins atípicos e revisão periódica de métodos aceitos. Passkeys distribuem a confiança criptográfica ao domínio, reduzindo dependência de códigos transitórios."
    },
    "comparacoes": [
      {
        "tema": "MFA versus autenticação por senha única",
        "a": {
          "rotulo": "Senha única",
          "texto": "Um único fator (algo que sabe); vulnerável a reutilização, phishing e vazamento de banco de dados."
        },
        "b": {
          "rotulo": "MFA",
          "texto": "Ao menos dois fatores de categorias distintas (ex.: senha + aplicativo autenticador); muito mais difícil de romper com credencial roubada."
        },
        "diferencaGabarito": "MFA exige fatores de categorias distintas, enquanto a senha depende de um único segredo que, uma vez vazado, dá acesso total."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "MFA elimina o risco de roubo de credenciais.",
        "porqueErrada": "MFA reduz muito o risco, mas não elimina vetores residuais: troca de chip, captura de códigos em tempo real, aplicativo clonado e engenharia social no suporte continuam possíveis.",
        "versaoCorreta": "MFA é controle forte, não absoluto: reduz muito o risco de autenticação indevida, mas requer fatores também na recuperação de conta e controles contra engenharia social."
      },
      {
        "afirmacaoEquivocada": "Qualquer código de uso único recebido por SMS é tão seguro quanto um aplicativo autenticador.",
        "porqueErrada": "SMS está sujeito a fraude de troca de chip (SIM swap) e interceptação, enquanto o aplicativo autenticador gera o código localmente no dispositivo, sem trafegar por rede móvel.",
        "versaoCorreta": "O aplicativo autenticador (TOTP local) é mais resistente que SMS porque o código não trafega por rede móvel vulnerável a troca de chip."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Fatores de autenticação: algo que sabe, tem e é",
        "MFA: ao menos dois fatores de categorias distintas; 2FA é exatamente dois",
        "Senhas longas e únicas por serviço em gerenciador de senhas",
        "Passkey/WebAuthn: fator criptográfico vinculado ao domínio"
      ],
      "regras": [
        "Combinar fatores de categorias distintas, nunca dois do mesmo tipo",
        "Preferir fator vinculado ao domínio (passkey) para resistência a phishing",
        "Manter fatores também na recuperação de conta"
      ],
      "comparacoes": [
        "Senha única depende de um segredo; MFA exige dois fatores de categorias distintas, mais difícil de romper."
      ],
      "fluxos": [
        "Usuário informa senha; sistema pede segundo fator; código/confirmação validado; acesso concedido apenas se ambos fatores passarem."
      ],
      "excecoes": [
        "Conta de recuperação sem segundo fator cria ponto de fraqueza que atacantes exploram via suporte.",
        "Dispositivo comprometido pode capturar códigos mesmo com MFA ativo."
      ],
      "palavrasChave": [
        "MFA",
        "2FA",
        "fatores de autenticação",
        "senha",
        "aplicativo autenticador",
        "passkey",
        "WebAuthn",
        "phishing",
        "troca de chip",
        "SIM swap"
      ],
      "checklist": [
        "Usar ao menos dois fatores de categorias distintas",
        "Preferir passkey/WebAuthn para alta exposição",
        "Não confiar apenas em SMS como segundo fator",
        "Proteger a recuperação de conta com fatores adicionais"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um sistema corporativo pede senha e, em seguida, um código enviado por SMS no telefone do usuário. Essa configuração é MFA? Justifique.",
        "dados": "Sistema solicita senha (algo que sabe) e código por SMS (algo que tem, receptor do telefone).",
        "conceitos": [
          "MFA",
          "2FA",
          "fatores de autenticação"
        ],
        "estrategia": "Identifique se há ao menos dois fatores de categorias distintas e note a vulnerabilidade do SMS a troca de chip.",
        "execucao": [
          "Confirme que a senha é algo que o usuário sabe.",
          "Confirme que o código SMS é algo que o usuário tem (telefone).",
          "Conclua que são dois fatores de categorias distintas, logo 2FA/caso de MFA."
        ],
        "resultado": "Sim, é 2FA (caso de MFA): combina algo que sabe (senha) com algo que tem (receptor do SMS). Os dois fatores são de categorias distintas, embora o segundo apresente vulnerabilidade a fraude de troca de chip.",
        "justificativa": "O gabarito está correto porque senha e SMS pertencem a categorias distintas, satisfazendo a definição de MFA, com a ressalva técnica da vulnerabilidade do SMS.",
        "errosFrequentes": [
          "Achar que qualquer duas telas de login já são MFA, mesmo usando a mesma categoria.",
          "Ignorar que SMS tem vulnerabilidade específica de troca de chip."
        ],
        "variacao": "O sistema pede senha e resposta a pergunta de segurança secreta; avaliar se constitui MFA."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor público de alta exposição exige autenticação que resista a site clonado. Que tipo de fator você recomenda e por quê?",
        "dados": "Servidor público de alta exposição; risco de site clonado (phishing); necessidade de fator resistente a domínio falso.",
        "conceitos": [
          "Passkey/WebAuthn",
          "Fator vinculado ao domínio",
          "Resistência a phishing"
        ],
        "estrategia": "Recomende fator criptográfico vinculado ao domínio, que só funciona no endereço legítimo, e adicione segundo fator independente com recuperação documentada.",
        "execucao": [
          "Escolha passkey/WebAuthn: chave privada só é usada pelo navegador para o domínio registrado.",
          "O navegador não conclui autenticação em site falso/clonado.",
          "Adicione segundo fator independente para defesa em camadas.",
          "Defina procedimento de recuperação de conta com verificação humana documentada."
        ],
        "resultado": "Fator criptográfico vinculado ao domínio (passkey/WebAuthn): a chave privada só é usada pelo navegador para o domínio registrado, então o código não é digitável em site falso. Complementar: segundo fator independente e procedimento de recuperação de conta com verificação humana documentada.",
        "justificativa": "A escolha está correta porque a vinculação criptográfica ao domínio impede que um site clonado capture e reutilize o fator, diferente de SMS ou TOTP, que trafegam ou são digitáveis.",
        "errosFrequentes": [
          "Recomendar SMS como único segundo fator em ambiente de alta exposição.",
          "Esquecer que a recuperação de conta também precisa de fatores."
        ],
        "variacao": "O servidor precisa ainda atender usuários sem dispositivo compatível com passkey, exigindo alternativa de segundo fator."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: MFA elimina o risco de roubo de credenciais, de modo que uma senha vazada não basta para um atacante acessar a conta.",
        "dados": "Sistema com MFA ativado; credencial de usuário roubada; tentativa de ataque por vetores residuais.",
        "conceitos": [
          "MFA",
          "Vetores residuais",
          "Engenharia social",
          "Troca de chip"
        ],
        "estrategia": "Reconheça que MFA reduz, não elimina; liste vetores que continuam funcionando mesmo com MFA e aponte a recuperação de conta como ponto fraco.",
        "execucao": [
          "Identifique que a afirmação confunde redução de risco com eliminação total.",
          "Liste vetores residuais: troca de chip, captura em tempo real, engenharia social no suporte.",
          "Note que MFA não substitui senha fraca nem protege dispositivo comprometido.",
          "Conclua que MFA é controle forte, não absoluto."
        ],
        "resultado": "Errado. MFA reduz muito o risco de autenticação indevida, mas há vetores residuais: fraude de engenharia social no suporte, interceptação de códigos em tempo real (SIM swap, aplicativo clonado) e contaminação do próprio dispositivo. MFA é controle forte, não absoluto.",
        "justificativa": "A leitura ingênua falha porque assume que o segundo fator bloqueia tudo; na prática, vetores como suporte, SIM swap e dispositivo comprometido ainda permitem ataque mesmo com MFA.",
        "errosFrequentes": [
          "Achar que MFA torna a senha irrelevante.",
          "Desconsiderar a recuperação de conta como ponto de ataque."
        ],
        "variacao": "Um atacante convence o suporte a redefinir a conta e desabilitar o MFA do usuário alvo."
      }
    ]
  },
  "m4-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A criptografia simétrica usa a mesma chave para cifrar e decifrar, tem custo baixo por byte e protege grandes volumes (disco, backup, canal TLS), mas seu problema central é distribuir a chave com segurança. Dominar isso é essencial em concursos de TI para dimensionar soluções e evitar o erro de expor a chave junto ao conteúdo cifrado.",
      "preRequisitos": [
        "Noção de cifra e decifra",
        "Diferença entre texto claro e texto cifrado",
        "Conceito de chave como segredo que protege a comunicação"
      ],
      "objetivosObservaveis": [
        "Explique que a mesma chave cifra e decifra na simétrica",
        "Identifique o problema central: distribuição segura da chave",
        "Indique usos adequados: cifragem de disco, backup, canal de dados TLS"
      ],
      "competencias": [
        "Raciocínio de desempenho: escolher simétrica para grandes volumes",
        "Atenção à separação entre chave e dado cifrado",
        "Conhecimento do ciclo de vida de chaves (geração, armazenamento, rotação, revogação)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — mecanismo que protege a troca da chave simétrica"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Criptografia simétrica e o problema da distribuição de chaves integram o conteúdo programático de TI em questões sobre desempenho de cifras, uso adequado por volume de dados e segurança da chave, com relevância para cargos de segurança da informação."
      }
    },
    "niveis": {
      "iniciante": "Na criptografia simétrica, a mesma chave cifra e decifra. Como o custo computacional é baixo em relação à assimétrica, é a escolha para proteger grandes volumes: cifragem de disco, proteção de backup e o canal de dados de uma sessão TLS, após a negociação inicial. O problema central é a distribuição da chave: ela precisa chegar a ambas as partes sem ser interceptada.",
      "intermediario": "Quando há muitos pares de usuários, o número de chaves cresce rapidamente: n pares exigem n(n−1)/2 chaves em comunicações plenas. Por isso, na prática a simétrica é quase sempre precedida por um acordo de chave por meio assimétrico. O algoritmo é público e a segurança depende da chave, não do segredo do algoritmo.",
      "avancado": "Chaves precisam de ciclo de vida completo: geração, armazenamento seguro, rotação periódica e revogação. Não devem ser reutilizadas de maneira previsível para conteúdos distintos. AES é o padrão de referência e ChaCha20 é outra alternativa amplamente citada em material técnico.",
      "especialista": "Implementar simétrica em produção exige gerenciador de chaves (KMS), rotação automática, separação entre chave de cifração e chave de autenticação de mensagens, e auditoria de acesso às chaves. Isso reduz o impacto de comprometimento de uma única chave."
    },
    "comparacoes": [
      {
        "tema": "Criptografia simétrica versus assimétrica em desempenho e uso",
        "a": {
          "rotulo": "Simétrica",
          "texto": "Mesma chave cifra e decifra; custo baixo por byte; indicada para grandes volumes (disco, backup, canal de dados)."
        },
        "b": {
          "rotulo": "Assimétrica",
          "texto": "Par de chaves pública e privada; custo maior; usada para proteger a troca da chave simétrica e assinaturas."
        },
        "diferencaGabarito": "A simétrica é rápida e protege o conteúdo em volume; a assimétrica é lenta e serve principalmente a negociar a chave simétrica com segurança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Em criptografia simétrica, a chave secreta é enviada junto ao arquivo cifrado para o destinatário.",
        "porqueErrada": "Enviar a chave junto com o conteúdo anula a proteção: quem intercepta ambos cifra e decifra, tornando a cifra inútil.",
        "versaoCorreta": "A chave deve ser distribuída por canal seguro ou por acordo com chave pública, sempre separada do dado cifrado."
      },
      {
        "afirmacaoEquivocada": "A segurança da criptografia simétrica depende de manter o algoritmo em segredo.",
        "porqueErrada": "Algoritmos simétricos são públicos e amplamente auditados; a segurança repousa na chave, conforme o princípio de Kerckhoffs, e não na obscuridade do algoritmo.",
        "versaoCorreta": "Depende da chave: algoritmos são públicos e auditados; manter o algoritmo em segredo é prática considerada frágil."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Mesma chave cifra e decifra",
        "Custo baixo por byte; indicada para grandes volumes",
        "Problema central: distribuição segura da chave",
        "Algoritmo público; segurança depende da chave"
      ],
      "regras": [
        "Nunca enviar a chave junto ao arquivo cifrado",
        "Distribuir chave por canal seguro ou acordo com chave pública",
        "Aplicar ciclo de vida: geração, armazenamento, rotação, revogação"
      ],
      "comparacoes": [
        "Simétrica é rápida para grandes volumes; assimétrica é lenta e protege a troca da chave simétrica."
      ],
      "fluxos": [
        "Acordo de chave simétrica via assimétrica; arquivos cifrados com a chave simétrica; chave destruída ou rotacionada ao fim."
      ],
      "excecoes": [
        "Chave de sessão curta reduz exposição se comprometida, mas exige rotação frequente.",
        "Uso de chave previsível para conteúdos distintos facilita ataques de criptoanálise."
      ],
      "palavrasChave": [
        "criptografia simétrica",
        "mesma chave",
        "cifrar e decifrar",
        "distribuição de chave",
        "AES",
        "ChaCha20",
        "ciclo de vida da chave",
        "princípio de Kerckhoffs"
      ],
      "checklist": [
        "Usar mesma chave para cifrar e decifrar",
        "Preferir simétrica para grandes volumes de dados",
        "Distribuir a chave separadamente do conteúdo cifrado",
        "Aplicar rotação e revogação de chaves"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o mesmo processo que cifra um arquivo de 2 TB usa criptografia simétrica e não assimétrica?",
        "dados": "Arquivo de 2 TB a ser cifrado; alternativa entre simétrica e assimétrica; fator de desempenho por byte.",
        "conceitos": [
          "Criptografia simétrica",
          "Desempenho por byte",
          "Uso adequado por volume"
        ],
        "estrategia": "Compare o custo computacional das duas abordagens para grande volume e defina o papel de cada uma no cenário.",
        "execucao": [
          "Reconheça que o arquivo é grande (2 TB), então o desempenho por byte é decisivo.",
          "Note que a simétrica consome muito menos processamento por byte que a assimétrica.",
          "Conclua que a simétrica cifra o conteúdo e a assimétrica protege apenas a chave."
        ],
        "resultado": "Desempenho: a criptografia simétrica consome muito menos processamento por byte; a assimétrica é reservada, nesse cenário, para proteger a chave simétrica envolvida, e não o conteúdo inteiro.",
        "justificativa": "O gabarito está correto porque, em grande volume, o custo da assimétrica seria proibitivo, enquanto a simétrica é eficiente e a assimétrica protege somente a chave, não todo o conteúdo.",
        "errosFrequentes": [
          "Achar que a assimétrica é mais segura e, portanto, deve cifrar tudo.",
          "Esquecer que a simétrica também precisa de troca segura da chave."
        ],
        "variacao": "A mesma análise aplicada a um banco de dados de 500 GB cifrado em disco, comparando AES com RSA para o conteúdo inteiro."
      },
      {
        "tipo": "aplicacao",
        "problema": "Duas agências precisam trocar arquivos diários criptografados. Descreva o fluxo completo de chaves.",
        "dados": "Duas agências; troca de arquivos diários; fluxo de chaves com troca assimétrica protegendo a chave simétrica de sessão.",
        "conceitos": [
          "Troca de chave simétrica via assimétrica",
          "Chave de sessão",
          "Rotação de chave"
        ],
        "estrategia": "Estabeleça uma chave simétrica de sessão protegida por troca assimétrica, cifre os arquivos com ela e rotacione ou destrua a chave ao fim.",
        "execucao": [
          "Cada agência cifra a chave simétrica de sessão com a chave pública da outra.",
          "Os arquivos diários são cifrados com a chave simétrica de sessão estabelecida.",
          "Ao fim do período, a chave é destruída ou rotacionada para uma nova sessão."
        ],
        "resultado": "1) As agências estabelecem uma chave simétrica de sessão protegida por troca assimétrica (cada uma cifra a chave com a chave pública da outra). 2) Os arquivos são cifrados com a chave simétrica. 3) Ao fim, a chave é destruída ou rotacionada. Assim, resolve-se o problema de distribuição mantendo o desempenho simétrico no conteúdo.",
        "justificativa": "O fluxo está correto porque combina a segurança da troca assimétrica com o desempenho da simétrica, e a rotação/destruição da chave limita o impacto de eventual comprometimento.",
        "errosFrequentes": [
          "Enviar a chave simétrica junto com os arquivos cifrados.",
          "Reutilizar indefinidamente a mesma chave de sessão sem rotação."
        ],
        "variacao": "Uma das agências não possui par de chaves assimétricas, exigindo um canal físico ou out-of-band para entregar a chave simétrica."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Em criptografia simétrica, a chave secreta é enviada junto ao arquivo cifrado para o destinatário.",
        "dados": "Arquivo cifrado e sua chave secreta enviados juntos pelo mesmo canal; atacante intercepta a transmissão.",
        "conceitos": [
          "Distribuição de chave",
          "Separação entre chave e dado cifrado",
          "Canal seguro"
        ],
        "estrategia": "Reconheça que enviar a chave com o conteúdo anula a proteção; a chave deve viajar separada, por canal seguro ou acordo com chave pública.",
        "execucao": [
          "Identifique que a afirmação propõe enviar chave e conteúdo juntos.",
          "Lembre que quem intercepta ambos pode cifrar e decifrar, anulando a cifra.",
          "Conclua que a chave deve ser distribuída separadamente do dado cifrado."
        ],
        "resultado": "Errado. Enviar a chave com o conteúdo anula a proteção: quem intercepta cifra e decifra. A chave deve ser distribuída por canal seguro ou por acordo com chave pública, sempre separada do dado cifrado.",
        "justificativa": "A leitura ingênua falha porque assume que o destinatário precisa da chave junto ao arquivo; na prática, expor a chave com o conteúdo entrega o segredo a quem interceptar a transmissão.",
        "errosFrequentes": [
          "Achar que a cifra protege a própria chave quando enviada junto.",
          "Não distinguir canal de dados do canal de distribuição da chave."
        ],
        "variacao": "A chave simétrica é entregue por mensageiro físico em envelopes lacrados, enquanto o arquivo cifrado viaja por e-mail."
      }
    ]
  },
  "m4-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A criptografia assimétrica usa um par de chaves (pública e privada) para confidencialidade e assinatura, com custo maior, por isso combina à simétrica no TLS. Certificados, cadeia de confiança e revogação são centrais para entender HTTPS, assinatura digital e PKI, temas frequentes em concursos de TI.",
      "preRequisitos": [
        "Noção de chave pública e privada",
        "Conceito de confidencialidade, integridade e autenticidade",
        "Noção básica de certificado e autoridade certificadora"
      ],
      "objetivosObservaveis": [
        "Descrever o par de chaves pública e privada e seus usos",
        "Relatar confidencialidade (cifrar com pública) versus assinatura (assinar com privada)",
        "Explicar certificados, cadeia de confiança e funcionário híbrido do TLS"
      ],
      "competencias": [
        "Raciocínio de confiança: vincular identidade a chave pública via certificado",
        "Atenção à diferença entre cifrar para confidencialidade e assinar para autenticidade",
        "Conhecimento de ciclo de vida de certificados (emissão, validade, revogação)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t3-s1 (Criptografia simétrica) — mecanismo protegido pela troca de chave assimétrica no TLS híbrido"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Assimétrica, certificados, PKI e TLS híbrido integram o conteúdo programático de TI em cenários de HTTPS, assinatura digital e confiança em certificados, com peso para cargos de segurança da informação."
      }
    },
    "niveis": {
      "iniciante": "A criptografia assimétrica usa um par matematicamente relacionado: chave pública (divulgável) e chave privada (sigilosa). Cifrar com a chave pública e decifrar com a privada garante confidencialidade a qualquer remetente; assinar com a privada e verificar com a pública sustenta autenticidade, integridade e não repúdio.",
      "intermediario": "O custo computacional é maior, por isso se combina ao simétrico: no TLS, cliente e servidor usam assimétrico (ou troca efêmera de curva elíptica) para concordar uma chave simétrica de sessão, e todo o tráfego seguinte usa a simétrica. Certificado digital vincula uma identidade a uma chave pública, emitido e assinado por uma autoridade certificadora (AC) confiável.",
      "avancado": "A cadeia de confiança vai do certificado final até uma raiz de confiança pré-instalada no navegador ou sistema, com cada elo verificado por assinatura. O certificado expira intencionalmente (limita o dano de chave comprometida) e pode ser revogado antes do prazo; mecanismos de consulta de revogação existem para isso.",
      "especialista": "PKI é o conjunto de políticas, processos, ACs, registros e softwares que sustentam a cadeia. Implementá-la exige AC raiz e subordinadas, políticas de emissão, repositórios de revogação (CRL e OCSP) e auditoria de emissões. Expirar é desenho, não defeito, e limita o período de abuso."
    },
    "comparacoes": [
      {
        "tema": "Cifrar com chave pública versus cifrar com chave privada",
        "a": {
          "rotulo": "Cifrar com chave pública",
          "texto": "Somente o detentor da chave privada decifra; garante confidencialidade, pois a pública é de todos."
        },
        "b": {
          "rotulo": "Cifrar com chave privada",
          "texto": "Qualquer um com a chave pública decifra; não há confidencialidade, funciona como ato de assinatura/verificação."
        },
        "diferencaGabarito": "Cifrar com a chave pública protege a confidencialidade; cifrar com a chave privada é, na prática, assinatura, não confidencialidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Cifrar com a chave privada protege a confidencialidade da mensagem.",
        "porqueErrada": "Como a chave pública é de todos, todos conseguem decifrar; não há confidencialidade. Cifrar com a chave privada é ato de assinatura/verificação.",
        "versaoCorreta": "Para confidencialidade, cifra-se com a chave pública do destinatário; apenas a chave privada correspondente decifra."
      },
      {
        "afirmacaoEquivocada": "Um certificado digital nunca pode ser revogado antes do vencimento do prazo.",
        "porqueErrada": "A revogação antecipada existe justamente para casos de comprometimento da chave privada, mudança de titularidade ou erro de emissão, limitando o dano antes da data de expiração.",
        "versaoCorreta": "Certo: um certificado pode ser revogado antecipadamente por comprometimento da chave, mudança de titularidade ou erro de emissão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Par de chaves: pública (divulgável) e privada (sigilosa)",
        "Confidencialidade: cifrar com pública, decifrar com privada",
        "Assinatura: assinar com privada, verificar com pública",
        "Certificado digital: vincula identidade a chave pública, emitido por AC"
      ],
      "regras": [
        "Para confidencialidade, cifre com a chave pública do destinatário",
        "Para assinatura, assine com a chave privada e verifique com a pública",
        "Certificado expira intencionalmente e pode ser revogado antes do prazo"
      ],
      "comparacoes": [
        "Cifrar com pública protege confidencialidade; cifrar com privada é assinatura, sem confidencialidade."
      ],
      "fluxos": [
        "TLS híbrido: assimétrico negocia a chave simétrica de sessão; dados trafegam cifrados com a simétrica; certificado prova a identidade do servidor."
      ],
      "excecoes": [
        "Certificado expirado em site legítimo ainda exige renovação ou validação da configuração do servidor.",
        "Chave comprometida exige revogação imediata, não apenas esperar a expiração."
      ],
      "palavrasChave": [
        "criptografia assimétrica",
        "chave pública",
        "chave privada",
        "certificado digital",
        "autoridade certificadora",
        "cadeia de confiança",
        "PKI",
        "TLS híbrido",
        "revogação",
        "assinatura digital"
      ],
      "checklist": [
        "Distinguir cifrar para confidencialidade de assinar para autenticidade",
        "Usar assimétrica para negociar a chave simétrica de sessão no TLS",
        "Verificar cadeia de confiança do certificado até a raiz",
        "Revogar certificados com chave comprometida antes do vencimento"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Numa navegação HTTPS, em que momento a criptografia assimétrica é usada e o que ela protege?",
        "dados": "Conexão HTTPS; negociação TLS no início da conexão; par de chaves e certificado do servidor.",
        "conceitos": [
          "Criptografia assimétrica",
          "Negociação TLS",
          "Certificado do servidor"
        ],
        "estrategia": "Identificar que a assimétrica atua no início da conexão para combinar a chave simétrica e que o certificado prova a identidade do servidor.",
        "execucao": [
          "No início da conexão HTTPS, ocorre a negociação TLS.",
          "As partes usam o par de chaves e o certificado para concordar uma chave simétrica de sessão.",
          "Depois, os dados trafegam cifrados com a chave simétrica; o certificado prova a identidade do servidor."
        ],
        "resultado": "No início da conexão: durante a negociação TLS, as partes combinam a chave simétrica de sessão usando o par de chaves e o certificado do servidor. Depois, os dados trafegam cifrados com a chave simétrica; o certificado prova a identidade do servidor.",
        "justificativa": "O gabarito está correto porque a assimétrica, por ser lenta, é usada apenas no aperto de mãos para estabelecer a chave simétrica, que depois protege o tráfego inteiro com bom desempenho.",
        "errosFrequentes": [
          "Achar que a assimétrica cifra todo o tráfego HTTPS.",
          "Esquecer que o certificado serve para provar a identidade do servidor."
        ],
        "variacao": "O mesmo raciocínio aplicado a uma conexão de email seguro (SMTPS/IMAPS) usando TLS para proteger a troca da chave de sessão."
      },
      {
        "tipo": "aplicacao",
        "problema": "O navegador acusa que um certificado expirou. Explique por que expirar é desenho e não defeito.",
        "dados": "Navegador exibe alerta de certificado expirado; site pode ser legítimo; necessidade de entender o motivo da expiração.",
        "conceitos": [
          "Validade do certificado",
          "Expiração intencional",
          "Limite do dano de chave comprometida"
        ],
        "estrategia": "Explicar que a expiração limita no tempo o poder da chave pública e força renovação com práticas atualizadas; o alerta está correto e exige renovação ou validação do servidor.",
        "execucao": [
          "Reconheça que a expiração limita o período em que uma chave pública pode ser usada.",
          "Note que, se a chave privada for comprometida, o abuso fica restrito ao prazo do certificado.",
          "Entenda que a expiração força renovação com práticas e algoritmos atualizados.",
          "Conclua que o alerta é correto: o site pode ser legítimo, mas a garantia venceu."
        ],
        "resultado": "Expiração limita no tempo o poder de uma chave pública: se a privada for comprometida, o período de abuso é restrito ao prazo do certificado; além disso, força a renovação com práticas atualizadas. O alerta é correto — o site pode ser legítimo, mas a garantia vencida exige renovar (ou validar a configuração do servidor).",
        "justificativa": "A explicação está correta porque a expiração é um controle de risco intencional, não um erro: reduz a janela de exposição de uma chave e obriga a renovação periódica com padrões atuais.",
        "errosFrequentes": [
          "Achar que certificado expirado indica sempre site falso ou ataque.",
          "Ignorar que a expiração força renovação com práticas atualizadas."
        ],
        "variacao": "Um servidor interno mantém um certificado autossignado expirado; avaliar se o alerta deve ser ignorado ou a configuração corrigida."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: Cifrar com a chave privada protege a confidencialidade da mensagem, de modo que apenas o destinatário poderia lê-la.",
        "dados": "Mensagem cifrada com a chave privada do remetente; qualquer interessado possui a chave pública correspondente.",
        "conceitos": [
          "Chave pública de todos",
          "Ausência de confidencialidade",
          "Assinatura versus cifragem"
        ],
        "estrategia": "Reconhecer que, como a chave pública é de todos, qualquer um decifra; não há confidencialidade. Cifrar com a chave privada é assinatura, e confidencialidade exige cifrar com a chave pública do destinatário.",
        "execucao": [
          "Identifique que a afirmação confunde assinatura com cifragem confidencial.",
          "Lembre que a chave pública é acessível a qualquer pessoa, então todos decifrariam.",
          "Conclua que não há confidencialidade; para confidencialidade, cifra-se com a chave pública do destinatário."
        ],
        "resultado": "Errado. Como a chave pública é de todos, todos conseguem decifrar — não há confidencialidade. Cifrar com a chave privada é, na prática, ato de assinatura/verificação; para confidencialidade, cifra-se com a chave pública do destinatário.",
        "justificativa": "A leitura ingênua falha porque assume que apenas o detentor da chave privada pode ler; na prática, cifrar com a privada expõe o conteúdo a qualquer um que tenha a pública, que é o inverso da confidencialidade.",
        "errosFrequentes": [
          "Achar que qualquer cifra com chave privada é confidencial.",
          "Não distinguir o papel da chave pública (de todos) da privada (sigilosa)."
        ],
        "variacao": "Um usuário assina um documento com sua chave privada e outro verifica com a pública, confirmando autenticidade e integridade, não confidencialidade."
      }
    ]
  },
  "m4-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Hash e assinatura digital sustentam integridade, autenticidade e não repúdio. Em prova, aparecem em itens que opõem hash a criptografia e testam o que a assinatura garante.",
      "preRequisitos": [
        "Noções de integridade e de autenticidade da tríade CIA",
        "Criptografia simétrica e par de chaves pública e privada"
      ],
      "objetivosObservaveis": [
        "Enumerar as propriedades do hash: determinismo, efeito avalanche e as três resistências",
        "Distinguir hash, de mão única e sem chave, de criptografia, reversível com chave",
        "Descrever os três passos da assinatura e por que a verificação falha com documento alterado"
      ],
      "competencias": [
        "Leitura crítica de itens que misturam hash, cifra e assinatura",
        "Deduzir de um controle o que ele garante e o que não garante"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t3-s1 (Criptografia simétrica) — contraste: hash não tem chave nem inversa",
        "m4-u1-t3-s2 (Criptografia assimétrica, certificados e PKI) — a assinatura cifra o hash com a chave privada",
        "m4-u1-t1-s2 (Autenticidade, responsabilização e não repúdio) — a assinatura é a evidência do não repúdio",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o hash atua como controle de integridade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens que opõem hash e criptografia ou listam o que a assinatura garante. Classificação qualitativa e estimativa pedagógica, sem medição estatística."
      }
    },
    "niveis": {
      "iniciante": "Hash transforma qualquer entrada em resumo fixo, sempre igual para a mesma entrada, com efeito avalanche: um caractere diferente muda o resumo por completo. Ele resiste a três ataques: achar a entrada pelo resumo, achar outra igual e achar duas iguais.",
      "intermediario": "Hash não usa chave e não se decifra: compara-se o resumo publicado com o recalculado. Senhas exigem hash lento com sal individual (bcrypt, Argon2), nunca texto puro. A assinatura cifra o hash com a chave privada; o verificador recalcula e compara.",
      "avancado": "A lentidão do hash de senha encarece força bruta, e o sal individual impede cálculo reaproveitado entre usuários. Na assinatura, a propriedade vem do sentido de uso da chave: cifrar o hash com a privada prova autoria e integridade, mas não esconde nada.",
      "especialista": "Resistência a colisão e resistência a pré-imagem não se confundem na prática forense. A assinatura cobre o hash do conjunto assinado, logo anexos trocados invalidam a verificação; o ponto frágil passa a ser a guarda da chave privada."
    },
    "comparacoes": [
      {
        "tema": "Hash e criptografia",
        "a": {
          "rotulo": "Função de hash",
          "texto": "Mão única e sem chave: gera resumo fixo e não possui inversa; atesta integridade."
        },
        "b": {
          "rotulo": "Criptografia",
          "texto": "Reversível com chave: protege confidencialidade e devolve o original a quem decifra."
        },
        "diferencaGabarito": "Hash atesta integridade sem segredo algum; cifra protege confidencialidade e depende de chave."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Cifrar a senha do usuário com AES é a forma correta de armazená-la.'",
        "porqueErrada": "Confunde cifra com hash: o servidor não precisa recuperar a senha, e a chave AES vazada devolve a base inteira.",
        "versaoCorreta": "Errado em dois pontos: senhas devem ser armazenadas com hash de propósito lento com sal (não cifradas), pois o servidor não precisa recuperar o texto original; e se a cifragem for usada, o atacante que obtenha a chave recupera todas as senhas de uma vez."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Assinatura digital garante que só o destinatário leia o documento.'",
        "porqueErrada": "Atribui à assinatura propriedade de confidencialidade: ela prova autoria e integridade, mas o conteúdo segue legível.",
        "versaoCorreta": "Assinatura garante integridade, autenticidade e não repúdio; confidencialidade exige cifrar com a chave do destinatário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Hash: entrada qualquer em resumo fixo, determinístico, com efeito avalanche",
        "Resistências: pré-imagem, segunda pré-imagem e colisão",
        "Assinatura: hash do documento cifrado com a chave privada",
        "Sal: valor individual por senha, que impede cálculo reaproveitado"
      ],
      "regras": [
        "Senha se guarda com hash lento e sal individual, nunca em texto puro",
        "Verificação: decifrar com a chave pública, recalcular o hash e comparar",
        "Documento alterado gera hash diferente e a verificação falha"
      ],
      "comparacoes": [
        "Hash é de mão única e sem chave; cifra é reversível com chave"
      ],
      "fluxos": [
        "Assinar: calcular hash → cifrá-lo com a chave privada → anexar. Verificar: decifrar com a pública → recalcular → comparar"
      ],
      "excecoes": [
        "Resumo em canal comprometido não protege: atacante troca arquivo e resumo juntos"
      ],
      "palavrasChave": [
        "hash",
        "SHA-256",
        "assinatura digital",
        "sal",
        "colisão"
      ],
      "checklist": [
        "Identificar se o item trata de integridade ou de confidencialidade",
        "Conferir o sentido de uso da chave na assinatura",
        "Descartar itens que dão confidencialidade à assinatura",
        "Lembrar que senha se guarda com hash lento e sal"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Você baixa um arquivo e o distribuidor publica o resumo SHA-256. Como o resumo é usado?",
        "dados": "Arquivo de 40 MB do site do distribuidor; resumo SHA-256 publicado na mesma página; download pela internet.",
        "conceitos": [
          "Determinismo do hash",
          "Efeito avalanche",
          "Comparação como teste de integridade"
        ],
        "estrategia": "Recalcular o hash do arquivo e comparar com o publicado: igual indica integridade; diferente indica alteração ou corrupção.",
        "execucao": [
          "Calcular o SHA-256 do arquivo baixado",
          "Comparar caractere a caractere com o resumo publicado",
          "Concluir que iguais atestam integridade e diferentes indicam alteração"
        ],
        "resultado": "Recalcula-se o hash do arquivo baixado e compara-se com o publicado: igual → integridade preservada desde a publicação; diferente → arquivo alterado (ou corrompido na transmissão). O resumo não protege contra ataque se o canal de publicação também estiver comprometido.",
        "justificativa": "Hash determinístico com efeito avalanche: um bit diferente muda o resumo, e a comparação passa a ser um teste de integridade. Sem chave, tudo depende de o resumo publicado ser autêntico.",
        "errosFrequentes": [
          "Tratar resumo diferente como arquivo inválido sem reconsiderar download incompleto",
          "Confiar no resumo hospedado no mesmo servidor do arquivo"
        ],
        "variacao": "O resumo passa a ser publicado em página assinada pela chave do projeto. O que muda na conclusão e por quê?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um contrato é assinado digitalmente e depois um dos anexos é trocado. O que acontece na verificação?",
        "dados": "Contrato em PDF com dois anexos; assinatura sobre o conjunto; na conferência, o primeiro anexo aparece substituído.",
        "conceitos": [
          "Assinatura sobre o hash do conjunto",
          "Recálculo do hash na verificação",
          "Integridade e não repúdio"
        ],
        "estrategia": "A verificação decifra a assinatura com a chave pública, recalcula o hash do documento e compara: com o anexo trocado, o hash diverge e falha.",
        "execucao": [
          "Decifrar a assinatura com a chave pública e obter o hash original",
          "Recalcular o hash do documento recebido com todos os anexos",
          "Comparar os dois resumos e concluir que houve alteração após a assinatura"
        ],
        "resultado": "A assinatura cobre o hash do documento original; com o anexo trocado, o hash recalculado diverge e a verificação falha — evidência de adulteração. Por isso a assinatura deve cobrir todos os elementos do ato, inclusive anexos.",
        "justificativa": "A assinatura sela o hash do conjunto, não o texto: qualquer mudança em qualquer parte gera resumo diferente. A verificação compara resumos, então a divergência é prova de alteração.",
        "errosFrequentes": [
          "Achar que a assinatura cobre só o corpo do contrato e ignorar anexos",
          "Interpretar a falha como certificado inválido, e não como documento alterado"
        ],
        "variacao": "A troca atinge o certificado do signatário: a chave pública não decifra a assinatura. O que a falha indica e qual providência cabe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em item de prova: 'Cifrar a senha do usuário com AES é a forma correta de armazená-la no banco de dados.'",
        "dados": "Sistema web com 80 mil usuários; proposta de cifrar senhas com AES-256; chave em arquivo de configuração no mesmo servidor.",
        "conceitos": [
          "Hash lento com sal",
          "Cifra reversível e dependência de chave",
          "Superfície de vazamento da base"
        ],
        "estrategia": "Testar dois eixos: o servidor precisa da senha original ou apenas compará-la? E o que ocorre se a chave vazar? O correto exige hash lento com sal.",
        "execucao": [
          "Verificar que o servidor não precisa da senha em texto claro",
          "Notar que AES é reversível: com a chave, decifra-se a base inteira",
          "Concluir pelo hash lento com sal individual (bcrypt, Argon2)"
        ],
        "resultado": "O item está errado: o correto é hash de propósito lento com sal individual, e a cifra AES concentra o risco na chave, que devolve todas as senhas se vazada.",
        "justificativa": "Hash com sal é de mão única e custoso por construção: testar senhas uma a uma fica caro, e o sal impede cálculo entre usuários. Cifra é reversível, logo a base depende de um único segredo.",
        "errosFrequentes": [
          "Confundir protegido com recuperável: cifrar permite reverter tecnicamente",
          "Esquecer que a chave vira ponto único de falha da base"
        ],
        "variacao": "A proposta muda para MD5 sem sal, por desempenho. Qual é o novo problema e qual família atende à lentidão intencional?"
      }
    ]
  },
  "m4-u1-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Completo, incremental e diferencial trocam custo de execução por custo de restauração. Em prova, cobra-se o número de mídias ou o tempo de recuperação de uma semana.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de controles corretivos de segurança",
        "Noção de volume alterado por dia e de janela noturna de execução"
      ],
      "objetivosObservaveis": [
        "Calcular quantas mídias uma restauração exige em sequência com completo e incrementais",
        "Calcular o volume copiado por um diferencial ao longo da semana",
        "Escolher a estratégia coerente com a janela e a meta de restauração"
      ],
      "competencias": [
        "Leitura de sequências temporais de backup",
        "Decisão sob restrição de janela e de risco de falha de mídia"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — a política que cerca os três tipos",
        "m4-u1-t4-s3 (Continuidade de negócios, recuperação de desastres, RPO e RTO) — as metas que definem a frequência",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a restauração como controle corretivo",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — o backup sustenta a disponibilidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens de disponibilidade e continuidade, em múltipla escolha com sequência semanal e volumes em GB. Classificação qualitativa e estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "Completo copia todos os dados selecionados: gasta mais tempo e espaço, mas restaurar é simples, pois basta uma mídia. Incremental copia o que mudou desde o último backup de qualquer tipo: execução rápida, e restauração que exige o completo mais todas as incrementais em ordem.",
      "intermediario": "Diferencial copia o que mudou desde o último completo: as execuções crescem na semana e a restauração precisa só do completo com a última diferencial. Na sequência canônica, quarta se restaura com duas mídias; pela cadeia incremental seriam três.",
      "avancado": "A escolha é uma troca explícita: janela curta favorece o incremental, restauração rápida favorece completo com diferencial, e o risco de cópia corrompida no meio penaliza o incremental. Política madura combina os dois e sempre testa a restauração.",
      "especialista": "Sob ameaça de ransomware, variar o meio e isolar as cópias importa mais que o tipo: uma cadeia incremental íntegra, porém cifrada junto com o servidor, não restaura nada. Medir o tempo real de restauração comprova a capacidade."
    },
    "comparacoes": [
      {
        "tema": "Incremental e diferencial",
        "a": {
          "rotulo": "Backup incremental",
          "texto": "Copia o que mudou desde o último backup de qualquer tipo; execuções curtas e cadeia longa na restauração."
        },
        "b": {
          "rotulo": "Backup diferencial",
          "texto": "Copia o que mudou desde o último completo; execuções crescem e a restauração usa só a última diferencial."
        },
        "diferencaGabarito": "A referência define tudo: último backup de qualquer tipo para o incremental, último completo para o diferencial."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Backup diferencial pega as alterações desde o último backup de qualquer tipo.'",
        "porqueErrada": "Empresta ao diferencial a regra do incremental: a referência do diferencial é sempre o último completo, e isso muda volume e cadeia.",
        "versaoCorreta": "Errado: é o incremental que copia desde o último backup de qualquer tipo; o diferencial copia sempre desde o último COMPLETO."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Se a execução do backup é rápida, a restauração também será rápida.'",
        "porqueErrada": "Confunde tempo de cópia com tempo de recuperação: o incremental grava pouco, mas exige aplicar o completo e toda a cadeia seguinte.",
        "versaoCorreta": "Execução rápida não implica restauração rápida: cadeias incrementais são baratas de gravar e caras de reconstruir."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Completo: cópia integral dos dados selecionados na execução",
        "Incremental: cópia do que mudou desde o último backup de qualquer tipo",
        "Diferencial: cópia do que mudou desde o último completo",
        "Cadeia de restauração: sequência obrigatória de mídias"
      ],
      "regras": [
        "Restauração incremental exige o completo e todas as incrementais em ordem",
        "Restauração diferencial exige o completo e apenas a última diferencial",
        "Toda política se completa com teste de restauração e verificação de checksum"
      ],
      "comparacoes": [
        "Incremental referência o último backup qualquer; diferencial, o último completo"
      ],
      "fluxos": [
        "Semana canônica: domingo completo, segunda e terça incrementais, quarta diferencial; restaurar quarta exige completo mais a diferencial"
      ],
      "excecoes": [
        "Incremental perdida no meio da cadeia: só se restaura até a última cópia íntegra anterior"
      ],
      "palavrasChave": [
        "backup completo",
        "incremental",
        "diferencial",
        "cadeia de restauração",
        "checksum"
      ],
      "checklist": [
        "Identificar a referência de cada cópia",
        "Contar as mídias exigidas para a data pedida",
        "Comparar o volume por dia com a janela",
        "Desconfiar de item que iguala execução e restauração"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Na sequência 'domingo completo, segunda incremental, terça incremental', quantas mídias são necessárias para restaurar na terça?",
        "dados": "Semana com completo no domingo, incremental na segunda e incremental na terça; base de 100 GB e 10 GB alterados por dia.",
        "conceitos": [
          "Backup completo",
          "Backup incremental",
          "Cadeia ordenada de restauração"
        ],
        "estrategia": "Contar as execuções posteriores ao último completo: cada incremental copia a diferença sobre a anterior, então terça exige aplicar todas em ordem.",
        "execucao": [
          "Localizar o último completo da semana: o de domingo",
          "Listar as incrementais seguintes: segunda e terça",
          "Aplicar o completo e cada incremental na ordem"
        ],
        "resultado": "Três: o completo de domingo, a incremental de segunda e a incremental de terça, nesta ordem. Se qualquer uma faltar ou estiver corrompida, o conjunto pode ficar inutilizável.",
        "justificativa": "Cada incremental guarda apenas a diferença sobre a execução anterior, então o estado de terça fica distribuído na cadeia. A ordem é obrigatória porque cada diferença foi calculada sobre a anterior.",
        "errosFrequentes": [
          "Contar apenas as incrementais e esquecer o completo",
          "Tratar as cópias como independentes, quando a restauração é sequencial"
        ],
        "variacao": "A cópia incremental de segunda está corrompida. O que ainda é possível restaurar e com quais mídias?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão tem janela de 1 hora à noite e meta de restauração em 2 horas. Que combinação é coerente?",
        "dados": "Janela noturna de 1 hora; base de 100 GB com 10 GB alterados por dia útil; meta de restauração em 2 horas.",
        "conceitos": [
          "Janela de execução",
          "Custo de restauração",
          "RTO e teste de restauração"
        ],
        "estrategia": "Dimensionar pela janela: um completo diário de 100 GB não caberia em 1 hora, logo completo periódico com incrementais diários; a meta exige cadeia curta e teste cronometrado.",
        "execucao": [
          "Descartar o completo diário: 100 GB não cabem na janela",
          "Adotar completo semanal e incrementais diários de cerca de 10 GB",
          "Validar os 2 horas com teste de restauração cronometrado e registro"
        ],
        "resultado": "Incrementais diários (execução curta) com um completo semanal e um diferencial intermediário se a janela permitir; além disso, RTO de 2 horas exige restauração treinada com medição real de tempo — estratégia que só funciona se o teste de restauração comprovar o prazo.",
        "justificativa": "A janela limita o volume por noite e elimina o completo diário; a meta limita o tamanho da cadeia. As restrições conflitam, a solução combina tipos de cópia e só o teste a garante.",
        "errosFrequentes": [
          "Projetar apenas pela facilidade de execução, ignorando a meta",
          "Tratar o teste de restauração como etapa opcional"
        ],
        "variacao": "A janela sobe para 4 horas e a meta cai para 30 minutos. Que combinação se torna coerente e que verificação é indispensável?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Backup diferencial pega as alterações desde o último backup de qualquer tipo.'",
        "dados": "Semana com completo no domingo, incrementais de segunda a quarta e diferencial na sexta; base de 100 GB e 10 GB por dia.",
        "conceitos": [
          "Ponto de referência da cópia",
          "Diferencial",
          "Incremental"
        ],
        "estrategia": "Confrontar a afirmação com a definição: o diferencial acumula desde o último completo, e o incremental desde a última execução. Os números da semana mostram que a leitura errada muda volume e mídias.",
        "execucao": [
          "Identificar a referência na afirmação: último backup de qualquer tipo",
          "Confrontar com a definição: diferencial referência o último completo",
          "Verificar que na sexta o diferencial acumula 50 GB desde domingo, não 10 desde quinta"
        ],
        "resultado": "Errado. A descrição é do incremental; o diferencial copia desde o último completo, e é isso que permite restaurar sexta com apenas duas mídias.",
        "justificativa": "A referência determina volume e cadeia: desde o último completo, o diferencial acumula a semana e dispensa incrementais; desde a última execução, o incremental grava pouco e depende da cadeia.",
        "errosFrequentes": [
          "Aplicar ao diferencial a regra do incremental pela semelhança dos nomes",
          "Calcular a sexta como 10 GB, ignorando a acumulação desde domingo"
        ],
        "variacao": "A mesma frase passa a ser sobre o incremental: 'pega o que mudou desde o último backup qualquer'. Está correta, e que consequência tem para sexta?"
      }
    ]
  },
  "m4-u1-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A regra 3-2-1 organiza a defesa contra perda de dados e ransomware: três cópias, dois meios, uma fora do local. A banca cobra essa leitura literal, e nuvem não substitui o conjunto.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de risco, com a cadeia ativo, ameaça e vulnerabilidade",
        "Conhecimento dos tipos de backup completo, incremental e diferencial"
      ],
      "objetivosObservaveis": [
        "Aplicar a regra 3-2-1 a um cenário de órgão público e apontar o que falta",
        "Justificar a imutabilidade da cópia como defesa contra ransomware",
        "Descrever teste de restauração periódico com registro de responsável e resultado"
      ],
      "competencias": [
        "Leitura literal de requisitos numéricos em política de cópias",
        "Avaliação de desenho de backup sob ameaça de ransomware"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — define o que cada cópia guarda",
        "m4-u1-t4-s3 (Continuidade de negócios, recuperação de desastres, RPO e RTO) — as metas que a política precisa atender",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — redundância e isolamento sustentam a disponibilidade",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a restauração como controle corretivo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens sobre ransomware e política de cópias, com frequência qualitativa média em editais de segurança; estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "A regra 3-2-1 pede três cópias dos dados, uma sendo a original, em dois meios diferentes, com pelo menos uma fora do ambiente de produção. A intenção é sobreviver a falha de mídia, incêndio, roubo e ransomware.",
      "intermediario": "Cópia imutável não pode ser alterada nem excluída durante um período definido, nem por administrador comum nem por atacante com credenciais roubadas. Na prática, são objetos só-leitura com retenção (WORM) e credenciais separadas.",
      "avancado": "Sem imutabilidade, o ransomware cifra ou apaga os backups junto com o sistema, e a recuperação colapsa. A defesa real combina redundância (três cópias), diversidade de meio (dois meios) e isolamento (uma cópia fora).",
      "especialista": "Backup só é comprovado quando a restauração foi executada, medida e conferida: arquivos abrem, checksums conferem, aplicativo inicia. O teste precisa ser periódico e registrado, com responsável e resultado."
    },
    "comparacoes": [
      {
        "tema": "Cópia mutável e cópia imutável",
        "a": {
          "rotulo": "Cópia mutável",
          "texto": "Pode ser alterada ou excluída por quem tem credenciais de escrita; sob ransomware, é destruída com a produção."
        },
        "b": {
          "rotulo": "Cópia imutável (WORM)",
          "texto": "Permanece só-leitura durante a retenção, mesmo para administradores; escrita depende de credenciais separadas."
        },
        "diferencaGabarito": "A diferença é a resistência à exclusão forçada: imutabilidade separa cópia utilizável de cópia que o atacante também alcança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Backup na nuvem já garante 3-2-1, porque a nuvem fica fora do local.'",
        "porqueErrada": "A nuvem satisfaz apenas a cópia fora do local; cópia única, sincronizada e mutável pode ser destruída por ransomware.",
        "versaoCorreta": "Errado. A nuvem atende apenas à cópia isolada; se a única cópia na nuvem for sincronizada e mutável, um ransomware com credenciais válidas pode destruí-la. Ainda faltam 3 cópias e 2 meios distintos, além de imutabilidade e teste."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Teste de restauração é desnecessário quando o relatório do job não acusa erros.'",
        "porqueErrada": "Relatório de execução atesta que a cópia foi gravada, não que ela restaura: arquivos podem estar corrompidos.",
        "versaoCorreta": "Só a restauração executada, medida e conferida comprova o backup; o teste deve ser periódico, com responsável e resultado registrados."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Regra 3-2-1: três cópias dos dados, em dois meios distintos, uma fora do ambiente",
        "Cópia imutável (WORM): só-leitura durante a retenção, imune a exclusão forçada",
        "Teste de restauração: execução, medição e conferência da recuperação"
      ],
      "regras": [
        "A cópia original conta como uma das três; as outras duas ficam em meios distintos",
        "Credenciais de escrita do backup devem ser separadas das de produção",
        "Teste de restauração precisa ser periódico e registrado, com responsável e resultado"
      ],
      "comparacoes": [
        "Cópia mutável pode ser apagada pelo atacante; imutável resiste durante a retenção"
      ],
      "fluxos": [
        "Definir cópias e meios → aplicar retenção imutável → isolar fora do ambiente → testar e registrar"
      ],
      "excecoes": [
        "Cópia fora do local que replica a produção em tempo real pode ser alcançada pelo mesmo incidente lógico"
      ],
      "palavrasChave": [
        "3-2-1",
        "WORM",
        "imutabilidade",
        "ransomware"
      ],
      "checklist": [
        "Contar três cópias efetivas, não duas",
        "Verificar que os meios são realmente distintos",
        "Confirmar retenção imutável e credenciais separadas",
        "Exigir teste de restauração com registro de data e resultado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um órgão mantém a pasta de arquivos e seu backup no mesmo servidor de arquivos. Quantas cópias efetivas existem na regra 3-2-1?",
        "dados": "Pasta e backup no mesmo servidor de arquivos; sem storage adicional, sem cópia externa e sem teste de restauração.",
        "conceitos": [
          "Cópia efetiva",
          "Diversidade de meio",
          "Cópia fora do ambiente"
        ],
        "estrategia": "Contar cópias que sobrevivem a um único evento: se arquivos e backup estão no mesmo servidor, falha, roubo ou cifragem do servidor alcançam os dois.",
        "execucao": [
          "Identificar onde residem originais e backup: mesmo servidor de arquivos",
          "Testar eventos únicos: falha de disco, incêndio, roubo e ransomware",
          "Concluir que há uma cópia efetiva e que faltam meios distintos e cópia fora do local"
        ],
        "resultado": "Uma cópia física: se o servidor falhar ou for cifrado, arquivos e backup vão juntos. Faltam diversidade de meio e cópia isolada — a política 3-2-1 não é atendida.",
        "justificativa": "Cópia efetiva é a que sobrevive ao evento que atinge a produção; duas instâncias no mesmo equipamento compartilham o mesmo destino.",
        "errosFrequentes": [
          "Contar original e backup como duas cópias e declarar a política atendida",
          "Ignorar que ransomware no servidor alcança também o backup ali guardado"
        ],
        "variacao": "O backup passa para disco externo conectado ao mesmo servidor e desconectado ao fim da cópia. A regra fica atendida, e o que ainda permanece frágil?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Proponha uma configuração 3-2-1 com imutabilidade para uma secretaria com dados pessoais.",
        "dados": "Secretaria com dados pessoais; servidor de arquivos em produção; storage de rede; contrato com serviço de nuvem.",
        "conceitos": [
          "Regra 3-2-1",
          "Retenção WORM",
          "Credenciais separadas",
          "Teste de restauração"
        ],
        "estrategia": "Distribuir as três cópias por meios e ambientes distintos: originais no servidor, backup diário com retenção imutável e cópia semanal criptografada na nuvem.",
        "execucao": [
          "Manter os arquivos originais no servidor da secretaria",
          "Configurar backup diário no storage de rede com retenção de 90 dias em objetos só-leitura e credenciais exclusivas",
          "Configurar backup semanal criptografado na nuvem, com versionamento e conta de restauração separada, e testar a restauração mensalmente"
        ],
        "resultado": "1) Arquivos originais no servidor de arquivos. 2) Backup diário no storage de rede com retenção de 90 dias em objetos só-leitura (WORM) e credenciais de escrita exclusivas do serviço de backup. 3) Backup semanal criptografado para serviço de nuvem com política de versionamento e restauração por conta separada. Teste de restauração amostral mensal, registrado com data e resultado.",
        "justificativa": "As cópias espalham-se por meios e ambientes distintos, e a retenção WORM bloqueia a exclusão pelo atacante; o teste registrado comprova a capacidade.",
        "errosFrequentes": [
          "Deixar a conta de restauração da nuvem com as mesmas credenciais da produção",
          "Concentrar as duas cópias de backup no mesmo storage de rede"
        ],
        "variacao": "A secretaria alega que o espelhamento síncrono entre dois servidores do mesmo CPD atende ao 3-2-1. Qual requisito permanece descoberto e por quê?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Backup na nuvem já garante 3-2-1, porque a nuvem fica fora do local.'",
        "dados": "Secretaria com pasta sincronizada em serviço de nuvem; nenhum backup local; credenciais de administrador compartilhadas.",
        "conceitos": [
          "Cópia isolada",
          "Redundância e diversidade de meio",
          "Imutabilidade da cópia"
        ],
        "estrategia": "Avaliar a afirmação contra cada número da regra: a nuvem dá a cópia fora do local, mas não garante três cópias, dois meios nem imutabilidade.",
        "execucao": [
          "Mapear o que a nuvem entrega: uma cópia fora do ambiente de produção",
          "Confrontar com os números da regra: faltam duas cópias e um segundo meio",
          "Testar sob ameaça: com credenciais válidas e cópia mutável, o ransomware alcança a nuvem"
        ],
        "resultado": "Errado. A nuvem resolve a cópia fora do local e nada mais: com uma só cópia, um só meio e sem retenção imutável, o conjunto 3-2-1 não existe — e a recuperação falha justamente no ataque que deveria cobrir.",
        "justificativa": "A regra conta propriedades independentes: cópias, meios e isolamento. A nuvem satisfaz uma; se a cópia for mutável, nem essa resiste ao ransomware.",
        "errosFrequentes": [
          "Confundir 'fora do local' com política completa de cópias",
          "Desconsiderar que a sincronização com a produção pode propagar a destruição"
        ],
        "variacao": "A secretaria adota três cópias, duas no mesmo storage de rede e uma na nuvem com retenção imutável. Qual número da regra ainda falha e qual correção resolve?"
      }
    ]
  },
  "m4-u1-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Continuidade de negócios, recuperação de desastres, RPO e RTO formam o vocabulário da disponibilidade sob interrupção, e a troca entre RPO e RTO é a pegadinha mais estável.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de impacto, com a análise de impacto no negócio",
        "Noções de backup e de replicação de dados entre ambientes"
      ],
      "objetivosObservaveis": [
        "Diferenciar continuidade de negócios de recuperação de desastres em cenários de interrupção",
        "Calcular a frequência de backup exigida por um RPO declarado",
        "Traduzir um RTO em requisito de infraestrutura e de teste de comutação"
      ],
      "competencias": [
        "Leitura de indicadores em cenários de interrupção de serviço",
        "Tradução de meta declarada em requisito técnico verificável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — a frequência de cópia que o RPO exige",
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — a política de cópias que sustenta as metas",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — a continuidade é a disponibilidade sob interrupção",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a recuperação como controle após o dano"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Os indicadores comparecem em itens de disponibilidade e de planos de recuperação, com definições e cenários numéricos; estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "Continuidade de negócios mantém as atividades críticas operando durante e após a interrupção: processos, pessoas, comunicação e rotinas manuais. Recuperação de desastres restaura sistemas depois da falha.",
      "intermediario": "A análise de impacto no negócio identifica as atividades críticas e quantifica o dano por tempo de parada; dela derivam dois indicadores. RTO é o maior tempo de indisponibilidade aceitável; RPO é a maior perda de dados aceitável.",
      "avancado": "RPO define a frequência máxima das cópias ou da replicação; RTO define a infraestrutura de retomada e o procedimento de comutação. Metas pequenas custam caro: exigem redundância, replicação frequente e ambiente pronto.",
      "especialista": "Meta sem teste é intenção, não capacidade: RTO de trinta minutos exige comutação exercitada, ambiente pré-configurado e monitoramento contínuo. Os dois indicadores são independentes e podem ter valores diferentes."
    },
    "comparacoes": [
      {
        "tema": "RPO e RTO",
        "a": {
          "rotulo": "RPO (Recovery Point Objective)",
          "texto": "Maior perda de dados aceitável, medida em tempo; define a frequência máxima de backup ou replicação."
        },
        "b": {
          "rotulo": "RTO (Recovery Time Objective)",
          "texto": "Maior tempo de indisponibilidade aceitável; define a infraestrutura de retomada e a comutação."
        },
        "diferencaGabarito": "O RPO olha para trás, quanto dado se pode perder; o RTO olha para frente, quanto tempo se pode ficar parado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'RTO de 2 horas significa que podemos perder até 2 horas de dados.'",
        "porqueErrada": "Atribui ao RTO a medição de perda de dados, que é função do RPO; o RTO mede indisponibilidade.",
        "versaoCorreta": "Errado. RTO é tempo aceitável de indisponibilidade (retomada); a perda de dados aceitável é o RPO. Os dois conceitos são independentes e podem ter valores diferentes no mesmo serviço."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Reduzir o RTO não exige mudança técnica, apenas melhorar a velocidade da equipe.'",
        "porqueErrada": "Ignora que o RTO depende de infraestrutura: sem ambiente pronto e comutação testada, não há como encurtar o prazo.",
        "versaoCorreta": "RTO se traduz em requisito de infraestrutura: ambiente pré-configurado, procedimento escrito, monitoramento e teste de comutação dentro do prazo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Continuidade de negócios (BC): manter atividades críticas em operação durante e após a interrupção",
        "Recuperação de desastres (DR): restaurar infraestrutura e sistemas depois da falha",
        "RPO: maior perda de dados aceitável, expressa em tempo",
        "RTO: maior tempo de indisponibilidade aceitável"
      ],
      "regras": [
        "RPO define a frequência máxima das cópias ou da replicação",
        "RTO define a infraestrutura de retomada e o procedimento de comutação",
        "Metas devem ser documentadas, aprovadas e validadas por teste"
      ],
      "comparacoes": [
        "RPO mede perda de dados; RTO mede tempo de parada do serviço"
      ],
      "fluxos": [
        "BIA identifica atividades críticas → derivam-se RPO e RTO → dimensionam-se cópias e ambiente → testa-se a comutação"
      ],
      "excecoes": [
        "Serviços não críticos podem receber metas relaxadas sem comprometer a continuidade do conjunto"
      ],
      "palavrasChave": [
        "continuidade de negócios",
        "recuperação de desastres",
        "RPO",
        "RTO",
        "BIA",
        "comutação"
      ],
      "checklist": [
        "Classificar o indicador do enunciado: dado (RPO) ou parada (RTO)",
        "Converter a meta em frequência de cópia ou requisito de ambiente",
        "Exigir teste documentado da meta declarada",
        "Desconfiar de item que trata BC e DR como sinônimos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão declara RPO de 6 horas. Qual a consequência direta para a rotina de backup?",
        "dados": "RPO declarado de 6 horas para o sistema de protocolo; base de 40 GB; rotina atual de um único backup noturno às 23h.",
        "conceitos": [
          "RPO como janela de perda",
          "Frequência de cópia",
          "Perda máxima aceitável"
        ],
        "estrategia": "Traduzir o indicador em rotina: se a maior perda aceitável é de 6 horas, o ponto de restauração precisa existir a cada 6 horas no máximo.",
        "execucao": [
          "Ler o RPO declarado: 6 horas de perda máxima aceitável",
          "Comparar com a rotina atual: um backup por dia deixa lacuna de até 24 horas",
          "Definir pontos de restauração a cada 6 horas ou replicação contínua"
        ],
        "resultado": "Os backups devem ocorrer, no mínimo, a cada 6 horas — ou haver replicação contínua equivalente —, de modo que, em um desastre, no máximo 6 horas de registros sejam perdidas.",
        "justificativa": "O RPO é uma janela de perda, não um procedimento: fixa o intervalo máximo entre pontos de restauração, e só o teste comprova o cumprimento.",
        "errosFrequentes": [
          "Confundir RPO com RTO e responder com tempo de retomada do serviço",
          "Achar que um backup diário satisfaz qualquer RPO declarado"
        ],
        "variacao": "O RPO cai para 15 minutos sobre a mesma base de 40 GB. Que tecnologia de cópia passa a ser necessária e qual o impacto na janela noturna?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Sistema de triagem de urgência com RTO de 20 minutos e RPO de 1 hora. Desenhe a solução.",
        "dados": "Triagem 24×7; RTO declarado de 20 minutos; RPO de 1 hora; dados de atendimento gerados continuamente.",
        "conceitos": [
          "RPO e RTO como indicadores independentes",
          "Ambiente secundário pré-configurado",
          "Teste de comutação cronometrado"
        ],
        "estrategia": "Tratar os indicadores separadamente: o RPO de 1 hora pede replicação horária; o RTO de 20 minutos pede ambiente pronto e comutação exercitada.",
        "execucao": [
          "Implantar replicação dos dados para o local alternativo, com intervalo máximo de 1 hora",
          "Pré-configurar o ambiente secundário para entrar em serviço sem instalação do zero",
          "Escrever o procedimento de comutação com responsáveis, treinar o plantão e testar a comutação dentro de 20 minutos"
        ],
        "resultado": "RPO 1 h → replicação de dados no máximo a cada hora (ideal contínua) para local alternativo. RTO 20 min → ambiente secundário pré-configurado (quente/frio controlado) com teste documentado de comutação dentro de 20 minutos, monitoramento 24×7 e procedimento escrito com responsáveis — sem os quais a meta é inatingível.",
        "justificativa": "Os indicadores exigem obras diferentes: replicação resolve a perda de dados, ambiente pronto resolve a retomada. Sem teste, a meta é afirmação.",
        "errosFrequentes": [
          "Tentar cumprir o RTO apenas com backups frequentes, sem ambiente pronto",
          "Esquecer o fator humano: comutação sem treino e sem responsável estoura o prazo"
        ],
        "variacao": "O RTO sobe para 4 horas e o RPO cai para 15 minutos no mesmo sistema. Qual parte da solução pode ser simplificada e qual precisa ser reforçada?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em item de prova: 'RTO de 2 horas significa que podemos perder até 2 horas de dados.'",
        "dados": "Item afirma que RTO de 2 horas permite perder 2 horas de dados; serviço com RTO de 2 horas e RPO de 15 minutos.",
        "conceitos": [
          "RTO como tempo de indisponibilidade",
          "RPO como perda de dados",
          "Indicadores independentes"
        ],
        "estrategia": "Separar as medições: o RTO fala de tempo sem serviço, o RPO de perda de dados. Com os valores do cenário, a perda aceitável é de 15 minutos, não de 2 horas.",
        "execucao": [
          "Identificar o indicador citado na afirmação: RTO de 2 horas",
          "Verificar o que ele mede: tempo aceitável de indisponibilidade",
          "Ler o RPO do serviço: 15 minutos de perda máxima aceitável, não 2 horas"
        ],
        "resultado": "Errado. O RTO mede indisponibilidade; a perda de dados aceitável é o RPO, que neste serviço é de 15 minutos. Os indicadores são independentes e admitem valores distintos.",
        "justificativa": "Cada indicador descreve uma grandeza distinta: um olha o tempo sem serviço, o outro o dado que não volta; a coincidência numérica não os iguala.",
        "errosFrequentes": [
          "Memorizar os nomes sem associar cada um à sua grandeza de medição",
          "Usar a igualdade numérica ocasional entre RPO e RTO como regra de equivalência"
        ],
        "variacao": "A afirmação passa a ser sobre RPO: 'RPO de 4 horas significa que o sistema pode ficar 4 horas fora do ar.' Qual indicador corrige a frase e por quê?"
      }
    ]
  },
  "m4-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir vírus de worm é o que orienta toda a resposta a um incidente de malware: o vírus fica preso às máquinas por onde o arquivo hospedeiro passou e depende de alguém abri-lo, enquanto o worm caminha sozinho pela rede e pode saturar enlaces em poucos minutos. Errar essa classificação leva a isolar a estação errada ou a deixar aberto o vetor de propagação lateral, atrasando a contenção e ampliando o dano.",
      "preRequisitos": [
        "Noção de software malicioso e da finalidade de comprometer o sistema",
        "Funcionamento básico de arquivos executáveis e de macros em documentos",
        "Conceito de rede de computadores e de tráfego entre estações",
        "Ideia de vulnerabilidade em serviço exposto à Internet"
      ],
      "objetivosObservaveis": [
        "Classificar um incidente como vírus ou worm pelos critérios de hospedeiro e propagação autônoma",
        "Reconhecer vetores de infecção comuns: anexos de e-mail, macros, mídias removíveis e downloads",
        "Explicar por que o worm provoca surto em rede e o vírus se restringe às estações por onde o arquivo circulou",
        "Escolher o controle de contenção compatível com o tipo de malware identificado"
      ],
      "competencias": [
        "Análise por critérios: distinguir conceitos por propriedades observáveis, não por exemplos decorados",
        "Diagnóstico sob pressão: definir a contenção diante de um surto em andamento",
        "Atenção ao detalhe: perceber que a ausência de hospedeiro caracteriza a propagação autônoma"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s2 (Trojans, spyware e adware) — malwares distribuídos por engano ao usuário, sem propagação autônoma",
        "m4-u2-t1-s3 (Ransomware, rootkits e botnets) — desdobramentos de impacto direto e de controle remoto sobre redes comprometidas"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema consolidado no conteúdo programático de segurança da informação, com a distinção entre vírus e worm e a identificação de vetores de infecção, reunindo definição conceitual e escolha do controle de contenção em cenário de incidente, conforme estimativa pedagógica de adequação ao edital."
      }
    },
    "niveis": {
      "iniciante": "Malware é todo software feito para prejudicar, espionar ou comprometer um sistema. O vírus é um trecho de código que se gruda a um arquivo hospedeiro e só avança quando alguém executa esse arquivo, por isso depende de ação humana. O worm não precisa de hospedeiro nem de clique: explora serviços de rede expostos e se copia sozinho de uma máquina para outra, o que explica a rapidez com que provoca surtos em rede.",
      "intermediario": "O critério decisivo está em duas perguntas: existe arquivo hospedeiro? depende de ação humana? Se as duas respostas são sim, trata-se de vírus, cuja dispersão acompanha o anexo, o pen drive ou o macro que o transportou. Se a propagação ocorre sem hospedeiro e sem clique, é worm, que costuma explorar falhas de segmentação para alcançar vários setores da rede. Essa leitura define o alcance provável do incidente e a prioridade da contenção.",
      "avancado": "Em campo, a classificação muda a estratégia: contra o vírus, prioriza-se desinfetar arquivos e estações por onde o hospedeiro circulou; contra o worm, é preciso bloquear o tráfego de propagação e fechar o serviço vulnerável, pois isolar uma única máquina não interrompe o surto. Muitos incidentes combinam os dois, com um worm que instala vírus ou abre caminho para outros componentes, exigindo análise do vetor dominante.",
      "especialista": "O especialista lê o tipo de propagação como indicador da arquitetura de defesa: um worm bem-sucedido revela falha de segmentação, serviço exposto sem correção ou ausência de controle de saída. A resposta inclui análise de fluxo para mapear a propagação, bloqueio das portas de exploração, correção do serviço e verificação de que nenhum hospedeiro permaneceu infectado, evitando que a contenção apenas adie o surto."
    },
    "comparacoes": [
      {
        "tema": "Vírus versus worm",
        "a": {
          "rotulo": "Vírus",
          "texto": "Prende-se a um arquivo hospedeiro e só se propaga com ação humana, como abrir o anexo, executar o macro ou conectar a mídia removível; tende a se limitar às estações por onde o arquivo circulou."
        },
        "b": {
          "rotulo": "Worm",
          "texto": "Não usa hospedeiro nem depende do usuário: explora serviços de rede expostos ou falhas de segmentação e se copia sozinho entre máquinas, o que produz surtos rápidos e saturação de enlaces."
        },
        "diferencaGabarito": "A diferença está no binômio hospedeiro e autonomia: o vírus precisa de arquivo para se agarrar e de alguém que o execute, enquanto o worm se propaga por conta própria pela rede."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Vírus e worm são a mesma coisa; o que muda é apenas a época em que foram criados.",
        "porqueErrada": "A afirmação troca um critério técnico por uma noção de cronologia: o que separa os dois não é a data, mas a dependência de hospedeiro e de ação humana para a propagação, algo que se observa no comportamento atual do código.",
        "versaoCorreta": "Errado. O vírus depende de um arquivo hospedeiro e de ação humana; o worm é autônomo e se espalha pela rede. Como a consequência difere, o vírus exige desinfecção das estações e o worm exige bloqueio do vetor de propagação em rede."
      },
      {
        "afirmacaoEquivocada": "Todo worm precisa que o usuário abra um anexo para começar a se espalhar.",
        "porqueErrada": "Confunde worm com vírus: se dependesse de abrir um anexo, o código estaria preso a um hospedeiro e exigiria ação humana, que é justamente a definição do vírus, não a do worm.",
        "versaoCorreta": "Errado. O worm dispensa clique e hospedeiro: ele explora serviços expostos e se copia sozinho entre máquinas. O anexo que só se espalha após ser aberto caracteriza comportamento de vírus."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Malware: software feito para prejudicar, espionar ou comprometer sistemas",
        "Vírus: código que depende de arquivo hospedeiro e de ação humana",
        "Worm: código autônomo que se propaga pela rede sem hospedeiro",
        "Vetor de infecção: caminho pelo qual o código chega à máquina"
      ],
      "regras": [
        "Classificar pelo par de perguntas: existe hospedeiro? depende de ação humana?",
        "Diante de worm, bloquear o tráfego de propagação; diante de vírus, desinfetar arquivos e estações",
        "Tratar anexos, macros, mídias removíveis e downloads como vetores sob suspeita"
      ],
      "comparacoes": [
        "Vírus se limita às estações por onde o arquivo circulou; worm alcança vários setores e satura enlaces"
      ],
      "fluxos": [
        "Vetor chega à máquina (anexo, macro, mídia, download) → código é executado ou explora serviço exposto → o vírus depende de novo clique para avançar, enquanto o worm se copia sozinho para outros hosts → o impacto se manifesta como corrupção local ou surto de rede"
      ],
      "excecoes": [
        "Alguns códigos combinam características, com worm que instala vírus; prevalece a análise do vetor dominante de propagação",
        "A ausência de surto visível não garante ausência de worm; é preciso observar o tráfego, não apenas o desempenho percebido"
      ],
      "palavrasChave": [
        "vírus",
        "worm",
        "hospedeiro",
        "propagação autônoma",
        "vetor de infecção",
        "propagação lateral",
        "malware"
      ],
      "checklist": [
        "Confirmar se há arquivo hospedeiro e ação humana envolvidos",
        "Verificar se o código se propaga sozinho pela rede",
        "Listar os vetores de infecção presentes no ambiente",
        "Definir contenção compatível: desinfecção de arquivos ou bloqueio de tráfego",
        "Registrar as portas e os serviços explorados na propagação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um funcionário abre um anexo de e-mail e, minutos depois, o código passa a se espalhar sozinho pelos computadores da rede. Classifique o malware pelo critério de propagação.",
        "dados": "Anexo aberto em uma estação; em poucos minutos, outras máquinas do mesmo segmento passam a apresentar tráfego elevado e novas infecções, sem que ninguém abra o arquivo original.",
        "conceitos": [
          "Propagação autônoma",
          "Dependência de hospedeiro",
          "Surto em rede"
        ],
        "estrategia": "Isolar o critério hospedeiro e autonomia: observar se a dispersão segue o arquivo (ação humana) ou se ocorre sozinha pela rede, o que separa vírus de worm.",
        "execucao": [
          "Identificar que a propagação ocorreu sem novo clique nas demais máquinas",
          "Notar que o código não ficou preso ao arquivo original, mas alcançou outros hosts",
          "Concluir que a autonomia na rede caracteriza o worm"
        ],
        "resultado": "Trata-se de worm: a propagação sem nova ação humana e sem hospedeiro é a marca desse tipo. Fosse necessário abrir o anexo em cada máquina, seria vírus.",
        "justificativa": "O sinal decisivo é a ausência de hospedeiro e de clique nas máquinas seguintes; como o código viajou sozinho pela rede, o comportamento corresponde à definição de worm, e não à de vírus.",
        "errosFrequentes": [
          "Chamar de vírus qualquer código que chegue por anexo, ignorando que a propagação seguinte não exigiu ação humana",
          "Supor que a ausência de hospedeiro é detalhe irrelevante, quando é justamente o critério de separação"
        ],
        "variacao": "Reescreva o caso supondo que cada nova infecção só ocorre depois de o funcionário abrir o anexo encaminhado. Qual é a classificação e o que muda na contenção?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um setor mantém rotinas diárias em macros de planilha. Proponha controles que reduzam o risco de infecção por vírus de macro e indique a correção de causa raiz.",
        "dados": "Estações com suíte de escritório; planilhas com macro compartilhadas por pasta de rede; macros hoje liberadas sem restrição, inclusive as provenientes da Internet.",
        "conceitos": [
          "Vírus de macro",
          "Vetor de infecção",
          "Correção de causa raiz"
        ],
        "estrategia": "Atacar o vetor (macro vinda de fonte externa) e a rotina que o sustenta, combinando bloqueio, treinamento e correção da origem.",
        "execucao": [
          "Bloquear ou restringir a execução de macros provenientes da Internet e manter a proteção de exibição",
          "Orientar o usuário a não habilitar macro em documento inesperado",
          "Manter antivírus com inspeção de conteúdo e aplicar as correções da suíte de escritório",
          "Migrar a rotina para um processo que não dependa de macro"
        ],
        "resultado": "Os controles reduzem o risco ao cortar o vetor e a causa raiz: a macro deixa de ser liberada sem critério e a rotina passa a dispensar o recurso que sustentava o vírus.",
        "justificativa": "Como o vírus de macro depende de o usuário habilitar o código no documento, restringir a execução e corrigir a rotina remove ao mesmo tempo o gatilho e o motivo de sua existência no ambiente.",
        "errosFrequentes": [
          "Limitar-se a instalar antivírus sem restringir macro, mantendo o vetor ativo",
          "Tratar o alerta como problema de usuário, sem corrigir a rotina que expõe o setor"
        ],
        "variacao": "A rotina migra para um aplicativo web que não executa macro local. Quais controles do conjunto passam a ser dispensáveis e por quê?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, ao detectar propagação, deve isolar apenas a estação onde o arquivo foi aberto. Avalie a leitura desse caso.",
        "dados": "Detecção de código que se espalha por vários hosts do segmento em minutos; a equipe planeja isolar somente a máquina de origem do anexo e manter o restante da rede conectado.",
        "conceitos": [
          "Propagação lateral",
          "Contenção proporcional ao tipo",
          "Leitura ingênua do incidente"
        ],
        "estrategia": "Comparar o alcance real da propagação com a medida proposta: se o código é autônomo, isolar a origem não interrompe o surto nem remove os hosts já alcançados.",
        "execucao": [
          "Reconhecer que a dispersão por vários hosts em minutos indica propagação autônoma",
          "Verificar que a máquina de origem não é o único ponto do surto",
          "Concluir que isolar apenas a origem deixa ativos os vetores nos demais hosts"
        ],
        "resultado": "A leitura é insuficiente: em propagação autônoma, isolar só a origem não contém o surto, pois os demais hosts já alcançados continuam a espalhar o código. A contenção precisa cobrir o vetor de rede.",
        "justificativa": "Se o malware caminha sozinho entre máquinas, o ponto crítico não é o arquivo aberto, e sim o tráfego de propagação; limitar a ação à origem ignora esse mecanismo e prolonga o incidente.",
        "errosFrequentes": [
          "Assumir que todo incidente se origina e se encerra na máquina onde o arquivo foi aberto",
          "Confundir a origem da infecção com o conjunto de máquinas já comprometidas"
        ],
        "variacao": "O mesmo cenário ocorre com um vírus que só avança quando cada usuário abre o anexo. A medida de isolar a origem passa a ser suficiente? Justifique."
      }
    ]
  },
  "m4-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Trojan, spyware e adware não provocam surto: entram por engano ou acompanham algo que o usuário instala, e o dano aparece como função oculta, vigilância e propaganda imposta. Distinguir esses mecanismos é decisivo porque a resposta difere da usada contra vírus e worm e porque a coleta de dados pessoais sem consentimento coloca a organização diante de deveres de proteção de dados previstos na LGPD.",
      "preRequisitos": [
        "Noção de engenharia social e de falsa aparência de legitimidade",
        "Conceito de dados pessoais e de consentimento no tratamento",
        "Funcionamento básico de navegador, extensões e instaladores de software",
        "Ideia de acesso remoto e de credenciais guardadas no sistema"
      ],
      "objetivosObservaveis": [
        "Explicar por que o trojan depende de distribuição enganosa, e não de propagação autônoma",
        "Diferenciar spyware de adware pelo efeito principal: coleta de dados e publicidade imposta",
        "Relacionar a coleta de dados sem consentimento a deveres de proteção de dados pessoais",
        "Indicar as primeiras ações diante de extensões e instaladores não autorizados"
      ],
      "competencias": [
        "Desconfiança calibrada: suspeitar de software que pede privilégios altos e promete demais",
        "Leitura de impacto: separar dano à privacidade de incômodo publicitário",
        "Enquadramento de conformidade: reconhecer quando a falha técnica gera dever de tratamento de dados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s1 (Vírus e worms) — malwares de propagação, contraponto ao trojan, que avança pelo engano",
        "m4-u2-t1-s3 (Ransomware, rootkits e botnets) — outros efeitos do comprometimento, do sequestro de dados ao controle remoto",
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — engenharia social como canal de entrega de software enganoso",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — base legal para tratar a coleta indevida de dados como questão de conformidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema de presença permanente no conteúdo programático de segurança da informação, com a classificação de trojan, spyware e adware e o enquadramento da captura de dados na LGPD, exigindo que o candidato diferencie o modo de distribuição desses malwares do de vírus e worms."
      }
    },
    "niveis": {
      "iniciante": "Trojan, ou cavalo de Troia, é software que parece útil ou legítimo e executa uma função oculta. Ele não se espalha sozinho: chega por engenharia social, como instalador pirata, atualizador falso ou anexo. Suas capacidades típicas incluem abrir acesso remoto, roubar credenciais guardadas e baixar outros componentes. Spyware coleta informações do usuário sem consentimento, como histórico, teclas digitadas e capturas de tela, e as envia a terceiros.",
      "intermediario": "O spyware que grava teclas recebe o nome específico de keylogger. Adware exibe publicidade não solicitada e costuma acompanhar componentes que alteram a busca padrão e redirecionam anúncios, misturando incômodo e risco. O ponto comum é a ausência de propagação autônoma: a distribuição depende de engano ou de instalação consentida sob informação incompleta, por isso a resposta prioriza remover o componente, restaurar configurações e cortar o canal que permitiu a entrada.",
      "avancado": "A coleta não consentida de dados que identifiquem pessoa é tratamento de dados pessoais e atrai obrigações previstas na LGPD, como base legal e transparência. Em máquina corporativa, o spyware deixa de ser apenas problema de segurança e passa a ser questão de conformidade, exigindo apuração do dado alcançado, comunicação aos responsáveis e revisão do controle que falhou.",
      "especialista": "O especialista trata trojan, spyware e adware como falhas de ingestão de software: reforça a procedência dos instaladores, restringe privilégios de administrador, controla extensões de navegador e integra a apuração técnica à avaliação de impacto sobre dados pessoais. A remoção inclui revogar sessões e credenciais que possam ter sido capturadas, pois a coleta silenciosa costuma anteceder o uso dessas credenciais."
    },
    "comparacoes": [
      {
        "tema": "Spyware versus adware",
        "a": {
          "rotulo": "Spyware",
          "texto": "Coleta informações do usuário sem consentimento, como histórico de navegação, teclas digitadas e capturas de tela, e as envia a terceiros; a captura de teclas caracteriza o keylogger."
        },
        "b": {
          "rotulo": "Adware",
          "texto": "Impõe publicidade não solicitada e costuma alterar a busca padrão e redirecionar anúncios, gerando incômodo e exposição; pode acompanhar componentes indesejados."
        },
        "diferencaGabarito": "O spyware tem foco em vigilância e coleta de dados, enquanto o adware tem foco em exibição de propaganda; ambos podem coexistir em um mesmo pacote instalado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O trojan se propaga automaticamente entre as máquinas da rede.",
        "porqueErrada": "Propagação automática é característica do worm. O trojan depende de distribuição enganosa e de instalação pelo usuário, o que o aproxima da fraude e exige controles de engenharia social e de procedência de software.",
        "versaoCorreta": "Errado. O trojan não se espalha sozinho: chega disfarçado e precisa ser instalado. Sem essa instalação enganosa, ele não avança, por isso a defesa prioriza procedência de software, privilégios restritos e treinamento contra fraude."
      },
      {
        "afirmacaoEquivocada": "Spyware é apenas um incômodo e não gera consequências legais para a organização.",
        "porqueErrada": "A coleta não consentida de dados que identifiquem pessoa é tratamento de dados pessoais e demanda base legal e transparência; em máquina corporativa, o caso passa a envolver deveres de proteção de dados, não apenas limpeza técnica.",
        "versaoCorreta": "Errado. A captura de dados pessoais sem consentimento atrai obrigações de proteção de dados; o spyware em ambiente corporativo exige apuração do dado alcançado e revisão do controle, além da remoção do componente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Trojan: software aparentemente legítimo que executa função oculta",
        "Spyware: coleta de dados do usuário sem consentimento",
        "Keylogger: spyware especializado em gravar teclas",
        "Adware: publicidade não solicitada e alteração do navegador"
      ],
      "regras": [
        "Não confundir trojan com worm: o trojan depende de instalação enganosa",
        "Tratar a coleta de dados pessoais como questão também de conformidade",
        "Restringir privilégios e controlar a procedência do software instalado"
      ],
      "comparacoes": [
        "Spyware vigia e coleta; adware impõe propaganda; trojan disfarça a função maliciosa"
      ],
      "fluxos": [
        "Usuário acredita na aparência legítima → instala o software ou habilita a extensão → a função oculta roda com os privilégios concedidos → dados são coletados ou o acesso remoto é aberto → a resposta remove o componente, restaura configurações e revoga credenciais"
      ],
      "excecoes": [
        "Um único pacote pode reunir trojan, spyware e adware; classificar pelo efeito predominante sem ignorar os demais",
        "A presença de adware visível não exclui coleta silenciosa de dados no mesmo componente"
      ],
      "palavrasChave": [
        "trojan",
        "spyware",
        "adware",
        "keylogger",
        "engenharia social",
        "dados pessoais",
        "extensão de navegador"
      ],
      "checklist": [
        "Verificar a procedência do instalador e os privilégios solicitados",
        "Listar extensões e componentes de navegador não autorizados",
        "Revogar sessões e credenciais que possam ter sido capturadas",
        "Avaliar se houve captura de dados pessoais sujeita à LGPD",
        "Restaurar configurações alteradas e fechar o canal de distribuição"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um instalador de utilitários de otimização distribuído em fórum pede privilégios de administrador e instala também um módulo que envia o histórico de navegação. Classifique o que ocorreu.",
        "dados": "Instalador baixado de fórum; solicitação de privilégios administrativos; instalação de módulo adicional não informado que transmite o histórico de navegação a um servidor remoto.",
        "conceitos": [
          "Trojan",
          "Spyware",
          "Engenharia social"
        ],
        "estrategia": "Separar a aparência declarada (utilitário legítimo) do efeito real (envio de dados) e identificar o canal de entrega como engenharia social.",
        "execucao": [
          "Reconhecer que o programa finge ser útil e executa uma função oculta",
          "Identificar o envio de histórico como coleta de dados sem consentimento",
          "Concluir que há um trojan que embute um módulo spyware"
        ],
        "resultado": "Trata-se de um trojan que embute um módulo spyware: o programa se apresenta como utilitário e, na verdade, coleta e transmite dados de navegação do usuário.",
        "justificativa": "A aparência legítima somada à função oculta caracteriza o trojan, e o envio de histórico sem consentimento caracteriza o spyware; a distribuição em fórum mostra que a entrega dependeu de engano, não de propagação autônoma.",
        "errosFrequentes": [
          "Chamar o caso apenas de vírus, ignorando que não houve propagação e que a entrada dependeu de instalação enganosa",
          "Tratar o envio de dados como detalhe secundário, sem reconhecer a coleta de dados pessoais"
        ],
        "variacao": "O mesmo instalador passa a alterar a busca padrão do navegador e a exibir anúncios. Que componente adicional deve ser reconhecido no caso?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O setor de tecnologia identifica estações que instalam extensões de navegador exibindo propaganda e alterando a busca padrão. Indique o tipo provável e a primeira ação de resposta.",
        "dados": "Várias estações com extensões instaladas sem autorização; busca padrão redirecionada; anúncios exibidos em páginas acessadas; suspeita de pacote instalado por usuários a partir de site não confiável.",
        "conceitos": [
          "Adware",
          "Canal de distribuição",
          "Resposta a incidente"
        ],
        "estrategia": "Classificar pelo efeito observado (propaganda e alteração de configuração), isolar a causa e cortar o canal que permitiu a instalação antes de apenas limpar o sintoma.",
        "execucao": [
          "Identificar as extensões e o instalador que as introduziu",
          "Remover extensões e componentes não autorizados e restaurar as configurações",
          "Revogar sessões e credenciais caso haja indício de captura",
          "Corrigir o canal de distribuição que permitiu a instalação"
        ],
        "resultado": "O quadro é compatível com adware que altera a configuração do navegador; a primeira ação é isolar a causa, remover os componentes, restaurar as configurações e fechar o canal de distribuição.",
        "justificativa": "A propaganda imposta e a mudança da busca padrão são o efeito típico do adware; remover apenas o anúncio deixaria a fonte ativa, por isso a resposta prioriza o canal de distribuição.",
        "errosFrequentes": [
          "Limpar apenas os sintomas no navegador, sem remover o instalador que reintroduz as extensões",
          "Descartar a possibilidade de captura de credenciais por trás do adware visível"
        ],
        "variacao": "Após a limpeza, as extensões voltam em poucos dias. Que etapa da resposta provavelmente foi deixada de lado e como corrigi-la?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe conclui que o problema de um trojan será resolvido com antivírus, pois todo malware se espalha e o antivírus contém a propagação. Avalie essa conclusão.",
        "dados": "Detecção de programa disfarçado de atualizador que abriu acesso remoto; a equipe planeja apenas atualizar as assinaturas do antivírus e manter a estação em uso, sem revogar credenciais nem revisar a origem da instalação.",
        "conceitos": [
          "Distribuição enganosa",
          "Credenciais comprometidas",
          "Limite da assinatura de antivírus"
        ],
        "estrategia": "Comparar o mecanismo do trojan (entrada por engano e acesso já aberto) com a medida proposta (apenas atualizar assinaturas), verificando o que permanece sem tratamento.",
        "execucao": [
          "Reconhecer que o trojan entrou por instalação enganosa, não por propagação",
          "Notar que o acesso remoto já pode ter permitido captura de credenciais",
          "Concluir que atualizar assinaturas sem revogar credenciais e revisar a origem deixa o risco ativo"
        ],
        "resultado": "A conclusão é insuficiente: atualizar as assinaturas pode remover o arquivo detectado, mas não fecha o acesso já aberto, não revoga as credenciais expostas e não corrige o canal de instalação enganosa.",
        "justificativa": "Como o trojan já operou com os privilégios concedidos, o risco não se limita ao arquivo; é preciso tratar a credencial capturada e a origem da instalação para que o mesmo engano não se repita.",
        "errosFrequentes": [
          "Acreditar que a detecção por assinatura encerra o incidente de trojan",
          "Ignorar a revisão do canal de instalação, deixando aberta a porta para nova entrada"
        ],
        "variacao": "O mesmo cenário ocorre com um worm que explora um serviço exposto. A medida de apenas atualizar assinaturas seria suficiente? Justifique."
      }
    ]
  },
  "m4-u2-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Ransomware, rootkit e botnet representam os desfechos mais graves de um comprometimento: o ransomware cifra os dados e ainda ameaça publicá-los, o rootkit esconde a presença do invasor e a botnet transforma máquinas em zumbis a serviço de ataques de negação de serviço. Sem conhecer o ciclo de cada um, o gestor não sabe onde cortar o ataque — se na origem do acesso, na recuperação dos dados ou no canal de comando e controle.",
      "preRequisitos": [
        "Noção de criptografia simétrica aplicada a arquivos",
        "Conceito de cópia de segurança e de cópia de sombra do sistema",
        "Ideia de privilégio de conta e de movimentação lateral na rede",
        "Noção de controle remoto e de canal de comando e controle"
      ],
      "objetivosObservaveis": [
        "Descrever as etapas do ciclo de ataque do ransomware, da entrada à nota de resgate",
        "Explicar por que o rootkit exige inspeção fora do sistema comprometido",
        "Caracterizar a botnet como rede de dispositivos controlados por canal de comando e controle",
        "Relacionar cada tipo de ameaça a controles de defesa específicos"
      ],
      "competencias": [
        "Leitura de cadeia de ataque: situar cada controle na etapa que ele interrompe",
        "Julgamento de prioridade: separar contenção imediata de erradicação duradoura",
        "Diagnóstico fora do sistema: reconhecer quando a inspeção local não é confiável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t1-s1 (Vírus e worms) — formas iniciais de comprometimento que podem preceder o ransomware",
        "m4-u2-t1-s2 (Trojans, spyware e adware) — vetores de acesso e de coleta que alimentam a intrusão",
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — base da defesa contra ransomware",
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — tipos de cópia que sustentam a recuperação",
        "m4-u2-t3-s2 (Monitoramento, registros e resposta a incidentes) — detecção e condução do ciclo de resposta"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema de grande peso no conteúdo programático de segurança, com o ciclo do ransomware, a dupla extorsão, o mecanismo do rootkit e a caracterização da botnet, além da escolha do controle de recuperação, como a cópia imutável testada, conforme estimativa pedagógica de adequação ao edital."
      }
    },
    "niveis": {
      "iniciante": "Ransomware cifra os arquivos a que a conta comprometida tem acesso e cobra pagamento pela chave; versões modernas também ameaçam publicar os dados vazados, o que se chama dupla extorsão. Rootkit é um conjunto que esconde a presença do invasor das ferramentas de inspeção, o que torna a detecção local pouco confiável. Botnet é uma rede de dispositivos comprometidos, os zumbis, comandados por um canal de comando e controle para enviar spam, minerar ou atacar.",
      "intermediario": "O ciclo típico do ransomware encadeia entrada por acesso exposto ou credencial fraudada, elevação de privilégio, movimentação lateral, desativação das defesas e das cópias de sombra, cifragem em massa e nota de resgate. A defesa comprovada atua em pontos distintos: a segmentação limita o alcance, a autenticação multifator bloqueia o ponto de entrada, a correção fecha a vulnerabilidade explorada e a cópia imutável e testada garante a recuperação sem pagamento.",
      "avancado": "O rootkit pode operar no aplicativo, no driver ou no núcleo, alterando as listas de processos e de arquivos que o sistema apresenta; por isso a detecção confiável muitas vezes exige inspeção fora do sistema comprometido, como arranque limpo ou varredura a partir de mídia confiável. Uma botnet bem-sucedida revela que os dispositivos não estavam corrigidos nem monitorados, e o canal de comando e controle precisa ser bloqueado para que os zumbis deixem de receber ordens.",
      "especialista": "O especialista encadeia a resposta em fases: contenção imediata, com isolamento e bloqueio do canal de comando e controle; erradicação por reconstrução dos sistemas e rotação de todas as credenciais, já que o rootkit pode persistir escondido; e recuperação a partir de cópias imutáveis verificadas. A presença de botnet exige ainda caça aos dispositivos comprometidos e correção da causa que permitiu o recrutamento."
    },
    "comparacoes": [
      {
        "tema": "Ransomware versus botnet",
        "a": {
          "rotulo": "Ransomware",
          "texto": "Cifra os dados acessíveis pela conta comprometida e cobra resgate, podendo ameaçar publicar o que foi vazado, o que caracteriza a dupla extorsão; o objetivo é obter pagamento."
        },
        "b": {
          "rotulo": "Botnet",
          "texto": "Mantém dispositivos comprometidos sob comando e controle para enviar spam, minerar de forma forçada ou gerar ataques de negação de serviço; o objetivo é usar a capacidade da rede alheia."
        },
        "diferencaGabarito": "O ransomware busca extorquir diretamente o dono dos dados, enquanto a botnet transforma máquinas em recursos de ataque; a primeira gera impacto imediato, a segunda sustenta o tráfego de outras ofensivas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pagar o resgate garante a recuperação dos arquivos e encerra o incidente.",
        "porqueErrada": "O pagamento não assegura a entrega da chave, não revoga o acesso que o invasor manteve e não remove persistências como o rootkit; restaurar a operação depende de cópia íntegra, não do resgate.",
        "versaoCorreta": "Errado. Pagar não garante a chave, não fecha o acesso do invasor nem elimina persistências, e ainda financia a atividade criminosa. A recuperação confiável vem de cópia imutável testada e da reconstrução dos sistemas afetados."
      },
      {
        "afirmacaoEquivocada": "Se o antivírus da própria máquina não encontrou nada, o sistema está livre de rootkit.",
        "porqueErrada": "O rootkit foi feito justamente para enganar as ferramentas que rodam dentro do sistema comprometido, alterando as listas de processos e de arquivos; a ausência de detecção local não prova ausência de infecção.",
        "versaoCorreta": "Errado. Como o rootkit manipula o que o próprio sistema mostra, a verificação confiável exige inspeção fora do ambiente comprometido, como arranque limpo ou varredura a partir de mídia confiável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Ransomware: cifragem de dados com exigência de resgate",
        "Dupla extorsão: ameaça de publicar dados vazados além de cifrá-los",
        "Rootkit: conjunto que oculta a presença do invasor",
        "Botnet: rede de dispositivos comprometidos sob comando e controle"
      ],
      "regras": [
        "Contra ransomware, a defesa decisiva é cópia imutável e testada, com segmentação e autenticação multifator",
        "Detecção confiável de rootkit exige inspeção fora do sistema comprometido",
        "Contra botnet, bloquear o canal de comando e controle e corrigir a causa do recrutamento"
      ],
      "comparacoes": [
        "Ransomware extorque o dono dos dados; botnet usa as máquinas como recurso de ataque"
      ],
      "fluxos": [
        "Entrada por acesso exposto ou credencial fraudada → elevação de privilégio e movimentação lateral → desativação de defesas e cópias de sombra → cifragem em massa e nota de resgate → a resposta isola, remove persistências e restaura a partir de cópia imutável"
      ],
      "excecoes": [
        "Pagamento não garante recuperação nem erradicação; persistências podem reativar o ataque semanas depois",
        "Software aberto e auditável reduz a chance de um rootkit oculto, mas não dispensa a verificação da integridade"
      ],
      "palavrasChave": [
        "ransomware",
        "rootkit",
        "botnet",
        "dupla extorsão",
        "comando e controle",
        "cópia imutável",
        "zumbi"
      ],
      "checklist": [
        "Isolar as máquinas afetadas e bloquear o canal de comando e controle",
        "Preservar evidências e identificar a variante por assinatura ou hash",
        "Verificar a integridade das cópias de backup antes de restaurar",
        "Rotacionar credenciais e revogar certificados após a erradicação",
        "Reconstruir os sistemas em vez de confiar na limpeza local"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Após um clique em anexo, os arquivos de uma estação ganham extensão nova e deixam de abrir, e surge uma instrução de pagamento. Identifique o tipo de malware e o primeiro ciclo de resposta.",
        "dados": "Estação com arquivos renomeados e inacessíveis; nota de resgate exibida na tela; instrução de pagamento em moeda digital; nenhum backup recente verificado no momento da detecção.",
        "conceitos": [
          "Ransomware",
          "Cifragem em massa",
          "Contenção imediata"
        ],
        "estrategia": "Reconhecer o efeito de cifragem com exigência de resgate e iniciar a contenção antes de qualquer tentativa de limpeza.",
        "execucao": [
          "Isolar a máquina da rede para impedir a propagação",
          "Preservar evidências e registrar o hash dos arquivos maliciosos",
          "Iniciar a contenção das demais estações e verificar as cópias de segurança"
        ],
        "resultado": "O caso é de ransomware; o primeiro ciclo consiste em isolar a máquina, preservar evidências, conter a propagação e acionar a recuperação por cópia íntegra, sem pagar o resgate.",
        "justificativa": "A renomeação dos arquivos com exigência de pagamento caracteriza a cifragem típica do ransomware; como o pagamento não garante a chave, a resposta correta prioriza a contenção e a recuperação por cópia confiável.",
        "errosFrequentes": [
          "Tentar limpar a máquina antes de isolar a rede, permitindo que a cifragem continue",
          "Considerar o pagamento como caminho de recuperação, ignorando o backup"
        ],
        "variacao": "A mesma estação possui uma cópia de sombra local, que o invasor apagou antes da cifragem. O que muda na estratégia de recuperação?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão pagou o resgate e, semanas depois, os arquivos voltaram a ficar inacessíveis. Explique tecnicamente o que provavelmente aconteceu.",
        "dados": "Pagamento realizado após a primeira cifragem; recuperação parcial inicial; sem rotação de credenciais e sem reconstrução das estações; semanas depois, nova cifragem em parte do ambiente.",
        "conceitos": [
          "Persistência do invasor",
          "Acesso não revogado",
          "Erradicação incompleta"
        ],
        "estrategia": "Examinar as persistências que sobrevivem ao pagamento: acesso remoto mantido, credencial não revogada e componente residual ativo.",
        "execucao": [
          "Verificar se o invasor manteve acesso por meio de acesso remoto oculto ou de credencial válida",
          "Checar a presença de componente residual que ocultou a presença, como um rootkit",
          "Concluir que faltou erradicação: reconstruir os sistemas e rotacionar as credenciais"
        ],
        "resultado": "O pagamento não erradicou a causa: o invasor manteve acesso ou deixou persistências ativas, o que permitiu nova cifragem. A correção exige reconstrução dos sistemas, rotação de credenciais e revogação de certificados.",
        "justificativa": "Se a credencial e o acesso remoto não foram revogados, o atacante retorna pelo mesmo caminho; por isso a recuperação só é estável após reconstruir os ambientes e invalidar todo segredo que circulou durante o incidente.",
        "errosFrequentes": [
          "Tratar o pagamento como erradicação, sem revogar credenciais nem reconstruir as estações",
          "Reativar máquinas recuperadas sem verificar persistências e integridade do sistema"
        ],
        "variacao": "O órgão havia reconstruído as estações, mas não rotacionou a conta de serviço usada na movimentação lateral. Qual é o risco remanescente?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, como o antivírus da máquina não detectou nada, o sistema está livre de rootkit e o incidente pode ser encerrado. Avalie esse raciocínio.",
        "dados": "Suspeita de invasor com persistência; verificações feitas apenas com ferramentas executadas dentro do próprio sistema; listagem de processos aparentemente normal; nenhuma inspeção externa realizada.",
        "conceitos": [
          "Ocultação pelo rootkit",
          "Confiabilidade da inspeção local",
          "Erradicação por reconstrução"
        ],
        "estrategia": "Questionar a confiança da inspeção feita dentro do sistema comprometido, já que o rootkit foi projetado para manipular exatamente o que essas ferramentas mostram.",
        "execucao": [
          "Reconhecer que o rootkit altera as listas de processos e arquivos vistas pelo próprio sistema",
          "Concluir que a ausência de detecção local não comprova ausência de infecção",
          "Indicar inspeção fora do sistema, por arranque limpo ou varredura externa, e reconstrução quando confirmada"
        ],
        "resultado": "O raciocínio é falho: a verificação feita dentro do sistema comprometido não é confiável contra rootkit, pois ele esconde exatamente o que essas ferramentas exibem. A confirmação exige inspeção externa e, se houver persistência, reconstrução.",
        "justificativa": "Como o rootkit manipula a visão que o sistema apresenta de si mesmo, a ausência de achados locais não é evidência de limpeza; somente a inspeção a partir de ambiente confiável reduz essa incerteza.",
        "errosFrequentes": [
          "Tomar a listagem normal de processos como prova de que não há rootkit",
          "Encerrar o incidente sem inspeção externa nem reconstrução dos sistemas suspeitos"
        ],
        "variacao": "A equipe passa a usar uma mídia de arranque confiável para varredura fora do sistema. Em que esse procedimento muda a confiabilidade do resultado?"
      }
    ]
  },
  "m4-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O firewall de pacotes é a primeira barreira de filtragem de tráfego e aparece em quase todo cenário de prova: decidir com base em endereço, protocolo e porta, aplicar a política de negação padrão e reconhecer o limite de não ver o conteúdo da aplicação. Errar a ordem das regras ou supor que ele inspeciona a mensagem aplicacional leva a configurações inseguras e a respostas incorretas sobre o alcance do controle.",
      "preRequisitos": [
        "Estrutura do cabeçalho de um pacote IP, com endereços e protocolo",
        "Noção de portas TCP e UDP e dos protocolos TCP, UDP e ICMP",
        "Conceito de rede interna, rede externa e zona desmilitarizada",
        "Ideia de política de permissão e de negação padrão"
      ],
      "objetivosObservaveis": [
        "Ler e escrever regras de filtragem com base em IP, protocolo e porta",
        "Explicar por que a política padrão deve ser a negação com permissões explícitas",
        "Ordenar regras do mais específico para o mais geral e documentar cada uma",
        "Reconhecer que o firewall de pacotes não inspeciona o conteúdo da aplicação"
      ],
      "competencias": [
        "Raciocínio por camadas: situar a decisão do firewall no cabeçalho do pacote",
        "Cuidado com a ordem: entender que a primeira regra correspondente decide",
        "Julgamento de escopo: distinguir o que cabe ao filtro de pacotes do que exige inspeção de aplicação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — evolução que lembra conexões e reduz regras de retorno",
        "m4-u2-t2-s3 (Firewall de aplicação e WAF) — camada que inspeciona o conteúdo que o filtro de pacotes não enxerga",
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — organização das zonas cujo tráfego o firewall filtra"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com a leitura de regras, a política de negação padrão e a limitação de não inspecionar o conteúdo aplicacional, com peso alto por combinar conceito e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "O firewall de pacotes decide olhando o cabeçalho de cada pacote: endereço IP de origem e destino, protocolo (TCP, UDP ou ICMP) e portas de origem e destino. Ele não guarda memória das conexões, por isso é chamado de stateless e, para liberar o retorno de uma conexão, exige uma regra explícita no sentido oposto. A boa prática é partir da negação padrão, em que tudo que não foi permitido de forma explícita é bloqueado.",
      "intermediario": "Como o filtro é stateless, cada sentido da conversa precisa de regra própria, o que aumenta o número de linhas e o risco de erro. As regras devem ser ordenadas do caso mais específico para o mais geral, porque a primeira correspondência decide, e cada regra merece documentação com finalidade, responsável e data. Uma revisão periódica remove regras mortas e evita que permissões antigas continuem abrindo caminho sem justificativa.",
      "avancado": "A limitação estrutural está no escopo da decisão: o firewall de pacotes não inspeciona o conteúdo da aplicação nem o conteúdo cifrado, então tráfego malicioso embutido em uma conexão permitida passa como caixa-preta. Exemplo típico é o canal de comando e controle camuflado em TLS na porta 443 liberada. Detectar esse abuso exige inspeção de aplicação, proxy ou monitoramento comportamental, que atuam onde o filtro de cabeçalho não alcança.",
      "especialista": "O especialista desenha a política pela menor permissão: negação padrão, permissões pontuais por origem, destino e porta, regras específicas antes das genéricas e documentação obrigatória. Complementa o filtro com inspeção de estado para reduzir regras de retorno e com controles de aplicação para o que o cabeçalho não revela, além de revisar periodicamente o conjunto para remover o que perdeu finalidade e reduzir a superfície de exposição."
    },
    "comparacoes": [
      {
        "tema": "Firewall de pacotes versus firewall de aplicação",
        "a": {
          "rotulo": "Firewall de pacotes",
          "texto": "Decide pelo cabeçalho — IP, protocolo e portas —, avalia cada pacote isoladamente e não distingue, dentro de uma conexão permitida, tráfego legítimo de malicioso."
        },
        "b": {
          "rotulo": "Firewall de aplicação (WAF ou proxy)",
          "texto": "Interpreta o protocolo da aplicação e inspeciona o conteúdo das requisições, bloqueando padrões de ataque que o filtro de cabeçalho não enxerga, como injeção de comandos em formulários web."
        },
        "diferencaGabarito": "O filtro de pacotes decide por endereço, protocolo e porta; o firewall de aplicação decide pelo conteúdo, e é essa camada que cobre o que passa camuflado em uma conexão permitida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O firewall de pacotes analisa o conteúdo das mensagens da aplicação para decidir o que bloquear.",
        "porqueErrada": "Ele decide apenas pelo cabeçalho, com endereços, protocolos e portas; a análise do conteúdo aplicacional é tarefa de firewall de aplicação, proxy ou sistema de detecção com inspeção profunda.",
        "versaoCorreta": "Errado. O firewall de pacotes não lê o conteúdo: sua decisão se limita a endereço, protocolo e porta. Quem examina a mensagem da aplicação é o firewall de aplicação, o proxy ou o sistema de detecção com inspeção profunda."
      },
      {
        "afirmacaoEquivocada": "Na política de negação padrão, uma porta nova permanece acessível até que alguém crie uma regra para bloqueá-la.",
        "porqueErrada": "Inverte a lógica da negação padrão: nesse modelo, o que não foi permitido de forma explícita já está negado, de modo que uma porta nova só se torna acessível se houver regra de permissão.",
        "versaoCorreta": "Errado. Na negação padrão, tudo que não tem permissão explícita já está bloqueado; a porta nova só fica acessível quando alguém cria uma regra que a permita, e não o contrário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Firewall de pacotes: filtro sem estado baseado no cabeçalho",
        "Política de negação padrão: o que não é permitido é negado",
        "Allowlist: lista explícita de permissões",
        "Regra morta: permissão antiga sem finalidade atual"
      ],
      "regras": [
        "Ordenar regras do mais específico para o mais geral, pois a primeira correspondência decide",
        "Exigir regra explícita para cada sentido, já que o filtro é stateless",
        "Documentar cada regra com finalidade, responsável e data"
      ],
      "comparacoes": [
        "Filtro de pacotes decide por cabeçalho; firewall de aplicação decide por conteúdo"
      ],
      "fluxos": [
        "Pacote chega → o firewall compara com as regras na ordem definida → a primeira regra correspondente decide permitir ou negar → sem correspondência, aplica-se a negação padrão → a conexão liberada segue para o destino"
      ],
      "excecoes": [
        "Não inspeciona conteúdo cifrado nem mensagem aplicacional; tráfego malicioso pode passar em conexão permitida",
        "Como não guarda estado, o retorno exige regra própria, diferente do que ocorre na inspeção de estado"
      ],
      "palavrasChave": [
        "firewall de pacotes",
        "stateless",
        "negação padrão",
        "allowlist",
        "porta",
        "protocolo",
        "filtragem de tráfego"
      ],
      "checklist": [
        "Definir a negação padrão como base da política",
        "Permitir apenas o necessário, com origem, destino e porta explícitos",
        "Ordenar as regras do mais específico para o mais geral",
        "Criar regra de retorno quando necessário, por ser filtro sem estado",
        "Documentar e revisar periodicamente para remover regras mortas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Escreva o conjunto mínimo de regras para um servidor DNS interno que responde em UDP 53 e só deve ser consultado pela rede 192.168.10.0/24.",
        "dados": "Servidor DNS interno no endereço 192.168.1.53; rede autorizada 192.168.10.0/24; firewall de pacotes com negação padrão; nenhuma regra preexistente para a porta 53.",
        "conceitos": [
          "Regra de filtragem",
          "Negação padrão",
          "Especificidade das regras"
        ],
        "estrategia": "Permitir de forma específica apenas a origem autorizada para a porta do serviço e, em seguida, negar o restante, mantendo a permissão antes da negação geral.",
        "execucao": [
          "Criar regra que permita UDP de destino 53, com origem 192.168.10.0/24 e destino 192.168.1.53",
          "Criar regra que negue UDP e TCP de destino 53 para qualquer origem não autorizada",
          "Manter a negação padrão para todo o restante do tráfego"
        ],
        "resultado": "O conjunto permite a consulta apenas da rede autorizada ao servidor DNS e bloqueia o restante: a permissão específica vem antes e a negação padrão cobre o que não foi permitido.",
        "justificativa": "Como o firewall decide pela primeira regra correspondente, a permissão precisa vir antes da negação geral; assim, apenas a origem prevista alcança a porta 53 e todo o demais tráfego permanece bloqueado.",
        "errosFrequentes": [
          "Colocar a negação geral antes da permissão, o que bloqueia até o tráfego autorizado",
          "Permitir a porta 53 para qualquer origem, ampliando o acesso além da rede prevista"
        ],
        "variacao": "O serviço passa a ser consultado também pela rede 192.168.20.0/24. Como ajustar o conjunto sem abrir a porta para qualquer origem?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor web está atrás de um firewall de pacotes com uma única regra que permite TCP na porta 443. Um invasor usa o mesmo túnel TLS para tráfego de comando e controle. Explique por que esse tráfego passou.",
        "dados": "Firewall de pacotes com regra única permitindo TCP de destino 443 para o servidor web; tráfego malicioso encapsulado em TLS na mesma porta; nenhum controle de inspeção de conteúdo ativo.",
        "conceitos": [
          "Decisão por cabeçalho",
          "Limite de inspeção",
          "Canal de comando e controle"
        ],
        "estrategia": "Comparar o que a regra verifica (endereço, protocolo e porta) com o que o invasor acrescentou (conteúdo cifrado), mostrando que a regra continua satisfeita.",
        "execucao": [
          "Identificar que a regra casa apenas endereço, protocolo TCP e porta 443",
          "Notar que o conteúdo cifrado não é examinado pelo filtro de pacotes",
          "Concluir que é preciso inspeção de aplicação ou monitoramento comportamental"
        ],
        "resultado": "O tráfego passou porque a regra se satisfaz com TCP na porta 443, e o filtro de pacotes não enxerga o conteúdo cifrado; distinguir TLS legítimo de malicioso exige inspeção de aplicação ou monitoramento comportamental.",
        "justificativa": "A decisão do filtro de pacotes termina no cabeçalho; como o invasor reutilizou uma conexão permitida, a regra permanece válida e a mensagem maliciosa atravessa sem ser identificada.",
        "errosFrequentes": [
          "Acreditar que liberar a porta 443 garante que só tráfego legítimo trafegue por ela",
          "Supor que o firewall de pacotes identifica o conteúdo por estar cifrado ou não"
        ],
        "variacao": "O mesmo canal de comando e controle usa a porta 53, normalmente liberada para DNS. Como essa escolha dificulta a detecção pelo filtro de pacotes?"
      },
      {
        "tipo": "erro",
        "problema": "Uma equipe afirma que, ao identificar uma conexão indesejada, basta adicionar uma regra de bloqueio no fim da lista, pois a ordem das regras não altera o resultado. Avalie esse raciocínio.",
        "dados": "Política com uma regra genérica de permissão no topo; a equipe pretende acrescentar a negação da conexão indesejada ao final da lista; o firewall processa as regras na ordem em que aparecem.",
        "conceitos": [
          "Primeira correspondência decide",
          "Ordem das regras",
          "Regra genérica permissiva"
        ],
        "estrategia": "Verificar o efeito da ordem: como uma regra genérica de permissão está no topo, a negação adicionada ao final nunca chega a ser avaliada.",
        "execucao": [
          "Reconhecer que o firewall decide pela primeira regra correspondente",
          "Notar que a permissão genérica do topo casa antes da negação do final",
          "Concluir que a negação no fim da lista não produz efeito enquanto a permissão genérica vier primeiro"
        ],
        "resultado": "O raciocínio é incorreto: com a permissão genérica no topo, a negação acrescentada ao final nunca é alcançada, e a conexão indesejada continua permitida. É preciso posicionar a regra específica antes da genérica.",
        "justificativa": "A ordem define o resultado porque a primeira regra correspondente encerra a avaliação; por isso a regra específica deve preceder a genérica para que o bloqueio pretendido tenha efeito.",
        "errosFrequentes": [
          "Acreditar que a posição da regra é indiferente no processamento da lista",
          "Manter uma permissão genérica no topo e esperar que negações posteriores a limitem"
        ],
        "variacao": "A lista é reordenada colocando a negação específica antes da permissão genérica. Qual passa a ser o resultado para a conexão indesejada?"
      }
    ]
  },
  "m4-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A inspeção de estado é o ponto de partida para qualquer firewall moderno: ao lembrar de conexões ativas, o dispositivo libera respostas automaticamente sem exigir regras explícitas para cada sentido. Isso reduz o conjunto de regras, minimiza erros de configuração e ainda bloqueia pacotes órfãos que se passam por respostas de conexões inexistentes. Em provas de concursos, o candidato precisa distinguir essa abordagem da inspeção stateless e reconhecer que o estado não elimina a política de permissão — ele apenas automatiza o tráfego de retorno já autorizado.",
      "preRequisitos": [
        "Representação binária de endereços IP e portas",
        "Noção de firewall stateless e política de negação padrão",
        "Ciclo de vida de uma conexão TCP (SYN, SYN-ACK, ACK, FIN)",
        "O que são flags de pacote TCP, especialmente ACK e SYN"
      ],
      "objetivosObservaveis": [
        "Explicar como a tabela de estados armazena origem, destino, porta e estado da conexão",
        "Descrever como o firewall libera o retorno automático de uma conexão autorizada sem regra extra",
        "Identificar por que um pacote ACK sem sessão anterior é rejeitado como órfão",
        "Diferenciar inspeção de estado de firewall stateless em termos de memória de conexão"
      ],
      "competencias": [
        "Raciocínio sobre estado de conexão como critério de filtragem",
        "Atenção a detalhes: um pacote fora de contexto altera a decisão do firewall",
        "Julgamento de segurança: reconhecer que estado reduz regras, mas não substitui política de permissão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s1 (Firewall de pacotes) — base stateless contra a qual o stateful se contrapõe",
        "m4-u2-t2-s3 (Firewall de aplicação e WAF) — próxima camada, que já inspeciona o payload aplicacional"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com a diferença entre firewall stateless e stateful, o papel da tabela de estados e a rejeição de pacotes órfãos, com peso médio por combinar conceito teórico e aplicação prática de regras."
      }
    },
    "niveis": {
      "iniciante": "A inspeção de estado mantém uma tabela com as conexões em andamento, registrando origem, destino, porta e estado de cada uma (abertura, estabelecida, encerramento) com um tempo de expiração. Com isso, o administrador cria apenas uma regra para permitir novas conexões de saída e o firewall libera automaticamente o tráfego de retorno, porque reconhece que aquele pacote pertence a uma sessão que ele mesmo autorizou. O ganho é menos regras, menos erros de configuração e a rejeição de pacotes soltos que se passam por respostas de conexões que nunca existiram.",
      "intermediario": "O estado introduz o ciclo de vida da conexão TCP como critério de filtragem: o primeiro pacote de uma sessão passa pela regra explícita, cria uma entrada na tabela e os pacotes seguintes são liberados automaticamente por pertencerem a essa sessão. Isso reduz drasticamente o número de regras, mas traz limitações: a tabela consome memória proporcional ao número de conexões (podendo ser esgotada por ataques de volume), não inspeciona o conteúdo da aplicação e deixa tráfego cifrado opaco ao firewall.",
      "avancado": "Um ataque comum que o stateful bloqueia é o pacote TCP com flag ACK vindo de fora sem conexão anterior registrada: em um firewall stateless mal configurado ele seria aceito por uma regra genérica de retorno, mas o stateful o descarta como órfão porque não há sessão correspondente na tabela. O administrador deve dimensionar a tabela de estados para evitar esgotamento por rajadas de conexões e lembrar que o estado não substitui regras de permissão para novas conexões.",
      "especialista": "O especialista projeta a política de regras aproveitando o estado para cortar regras de retorno, define limites de taxa e timeouts adequados ao volume esperado, e complementa a inspeção de estado com mecanismos que vejam o payload (proxy, WAF ou IDS/IPS) quando for necessário analisar o conteúdo da aplicação, especialmente em tráfego não cifrado ou com descriptografia intermediária."
    },
    "comparacoes": [
      {
        "tema": "Firewall stateless versus inspeção de estado (stateful)",
        "a": {
          "rotulo": "Firewall stateless (filtro de pacotes)",
          "texto": "Avalia cada pacote isoladamente pelo cabeçalho (IP, protocolo, porta), sem memória de conexões; para permitir o retorno é necessário regra explícita no sentido oposto."
        },
        "b": {
          "rotulo": "Firewall stateful (inspeção de estado)",
          "texto": "Mantém uma tabela de conexões ativas e libera automaticamente o tráfego de retorno de sessões que ele mesmo autorizou, exigindo menos regras e rejeitando pacotes órfãos."
        },
        "diferencaGabarito": "O stateless não lembra conexões e exige regras para ambos os sentidos; o stateful lembra a sessão, automatiza o retorno e descarta pacotes que não correspondem a nenhuma conexão conhecida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A inspeção de estado substitui completamente a necessidade de regras de permissão para novas conexões.",
        "porqueErrada": "Confunde automação de retorno com dispensa de política: o estado apenas libera respostas de sessões já autorizadas, mas toda nova conexão de entrada ou saída ainda depende de uma regra explícita do administrador.",
        "versaoCorreta": "Errado. A inspeção de estado não substitui a política de permissão: ela somente automatiza o retorno de conexões que o próprio firewall autorizou, e toda nova conexão continua dependendo de uma regra explícita do administrador. Estado reduz regras, não elimina política."
      },
      {
        "afirmacaoEquivocada": "Como o firewall stateful lembra conexões, ele não pode ser sobrecarregado por volume de tráfego.",
        "porqueErrada": "Esquece que cada conexão ativa ocupa uma entrada na tabela de estados e consome memória; uma rajada de conexões pode esgotar a tabela, derrubar o firewall ou forçar timeouts, daí a necessidade de limites de taxa e dimensionamento adequado.",
        "versaoCorreta": "Errado. A tabela de estados consome memória proporcional ao número de conexões; ataques por volume de conexões podem estourá-la, por isso são necessários limites de taxa e dimensionamento correto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tabela de estados de conexão",
        "Ciclo de vida da conexão TCP",
        "Pacote órfão",
        "Timeout de entrada na tabela"
      ],
      "regras": [
        "Permitir apenas novas conexões de saída; o retorno é liberado automaticamente pelo estado",
        "Rejeitar pacotes ACK ou de retorno que não correspondam a sessão registrada",
        "Dimensionar a tabela de estados para evitar esgotamento por volume de conexões"
      ],
      "comparacoes": [
        "Stateless exige regras explícitas para ida e volta; stateful automatiza o retorno de sessões autorizadas"
      ],
      "fluxos": [
        "Pacote SYN de saída passa pela regra de novas conexões → firewall cria entrada na tabela de estados → pacotes de retorno são reconhecidos e liberados sem regra extra → ao encerrar, o registro expira por timeout"
      ],
      "excecoes": [
        "Não inspeciona o payload aplicacional; tráfego cifrado continua opaco quanto ao conteúdo",
        "O consumo de memória cresce com o número de conexões, tornando-a vetor de esgotamento"
      ],
      "palavrasChave": [
        "stateful",
        "inspeção de estado",
        "tabela de estados",
        "conexão TCP",
        "pacote órfão",
        "timeout",
        "stateless"
      ],
      "checklist": [
        "Criar regra apenas para novas conexões de saída",
        "Confirmar que o retorno de sessão autorizada e liberado automaticamente",
        "Rejeitar pacotes de retorno sem sessão registrada na tabela",
        "Definir timeouts adequados para cada estado de conexão",
        "Estabelecer limites de taxa para evitar esgotamento da tabela",
        "Complementar com inspeção de aplicação quando for preciso ver o payload"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um usuário abre um site pela primeira vez em um firewall com inspeção de estado. Descreva o que acontece com os pacotes de ida e de volta.",
        "dados": "Computador do usuário acessa um servidor web na Internet; firewall stateful com regra que permite novas conexões de saída para a Internet; nenhum registro prévio na tabela de estados.",
        "conceitos": [
          "Tabela de estados de conexão",
          "Ciclo de vida da conexão TCP",
          "Liberação automática de retorno"
        ],
        "estrategia": "Acompanhar o primeiro pacote SYN de saída, a criação do registro na tabela de estados e a liberação automática dos pacotes de resposta como parte da mesma sessão.",
        "execucao": [
          "O pacote SYN de saída passa pela regra que permite novas conexões de saída para a Internet",
          "O firewall cria um registro na tabela de estados com origem, destino, porta e estado SYN_SENT",
          "Quando o servidor responde, o firewall reconhece o pacote como parte da sessão já registrada e o libera sem regra extra",
          "Ao encerrar a conexão, o registro expira pelo timeout configurado"
        ],
        "resultado": "O primeiro pacote de saída é permitido pela regra explícita, cria entrada na tabela de estados, e todos os pacotes de resposta são reconhecidos como pertencentes àquela sessão e liberados automaticamente, sem necessidade de uma regra de retorno.",
        "justificativa": "Como o firewall se lembra da conexão ativa, ele pode identificar que os pacotes de volta pertencem a uma sessão que ele mesmo autorizou, eliminando a necessidade de escrever uma regra explícita para o sentido oposto.",
        "errosFrequentes": [
          "Achar que é preciso escrever uma regra explícita também para o tráfego de retorno",
          "Esquecer que o registro na tabela de estados expira por tempo e não dura indefinidamente"
        ],
        "variacao": "Um usuário acessa um servidor de e-mail pelo protocolo IMAP. Como o firewall stateful trata o tráfego de resposta?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um atacante envia pacotes TCP com flag ACK vindo da Internet para um servidor interno, sem que exista conexão anterior iniciada de dentro da rede. Avalie se esses pacotes entram em um firewall stateful bem configurado.",
        "dados": "Firewall stateful com regra genérica que permite tráfego de retorno; pacotes TCP com flag ACK originados de endereço externo para servidor interno; nenhuma entrada correspondente na tabela de estados.",
        "conceitos": [
          "Pacote órfão",
          "Rejeição de pacote sem sessão",
          "Firewall stateful bem configurado"
        ],
        "estrategia": "Verificar se há entrada na tabela de estados para a conexão alegada pelos pacotes ACK; como não há sessão anterior, os pacotes são descartados como órfãos, mesmo que exista uma regra permissiva genérica de retorno.",
        "execucao": [
          "Receber os pacotes TCP com flag ACK de origem externa",
          "Consultar a tabela de estados para verificar se existe sessão correspondente",
          "Confirmar que não existe conexão anterior registrada para aquele par de origem/destino",
          "Descartar os pacotes como orfãos, pois não pertencem a nenhuma sessão autorizada pelo firewall"
        ],
        "resultado": "Os pacotes ACK são descartados porque não existe conexão correspondente na tabela de estados: mesmo com uma regra permissiva genérica de retorno, o pacote não casa com nenhuma sessão autorizada e é tratado como pacote órfão.",
        "justificativa": "O estado do firewall exige que todo tráfego de retorno pertença a uma sessão previamente autorizada; sem registro de conexão, o pacote é rejeitado independentemente de regras genéricas de rede.",
        "errosFrequentes": [
          "Achar que a regra genérica de retorno basta para aceitar qualquer pacote ACK vindo de fora",
          "Esquecer que o firewall stateful verifica a tabela de estados antes de aplicar regras de rede"
        ],
        "variacao": "O mesmo ataque é direcionado a um firewall stateless mal configurado com regra genérica de retorno. Qual é o resultado?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A inspeção de estado substitui completamente a necessidade de regras de permissão para novas conexões.' Avalie se está correta.",
        "dados": "Alegação de que, como o firewall lembra conexões ativas, não seria mais necessário criar regras explícitas para permitir novas conexões de entrada ou saída.",
        "conceitos": [
          "Estado automatiza apenas o retorno",
          "Regra explicita para novas conexões",
          "Estado não substitui política de permissão"
        ],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que o estado apenas libera respostas de sessões já autorizadas, mas toda nova conexão ainda depende de regra explícita do administrador.",
        "execucao": [
          "Reconhecer que o estado automatiza apenas o retorno de conexões que o firewall mesmo autorizou",
          "Identificar que toda nova conexão de entrada ou saída continua dependendo de regra explicita",
          "Concluir que o estado reduz regras, mas não elimina a política de permissão"
        ],
        "resultado": "Errado. Um administrador que supõe que o estado dispensa regras de permissão deixa de criar a regra para uma nova conexão de saída, e o firewall bloqueia o tráfego inicial porque não existe sessão prévia autorizada na tabela de estados. O estado apenas libera respostas de sessões já permitidas; cada nova conexão de entrada ou saída exige sua própria regra explícita.",
        "justificativa": "Sem uma regra explícita permitindo a nova conexão, nunca haveria uma sessão para o estado lembrar, então a política de permissão permanece obrigatória para iniciar qualquer sessão.",
        "errosFrequentes": [
          "Achar que o estado dispensa completamente qualquer regra de firewall",
          "Confundir automação de retorno com dispensa de política de permissão para novas sessões"
        ],
        "variacao": "Afirmação: 'Como o firewall stateful bloqueia pacotes órfãos, não é necessário nenhuma outra regra de segurança na rede.'"
      }
    ]
  },
  "m4-u2-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O firewall de aplicação e o WAF são os únicos controles de rede que entendem o conteúdo do tráfego aplicacional: diferenciam um método HTTP legítimo de uma requisição malformada, bloqueam injeção de SQL e XSS, e atuam como proxy reverso na frente do servidor web. Em concursos, esse tópico aparece em questões sobre arquitetura de defesa por camadas, responsabilidade do WAF versus correção de código, e limitações como falsos positivos e fraudes por usuário autenticado. Confundir WAF com firewall de pacotes, ou acreditar que WAF corrige vulnerabilidades do aplicativo, leva ao gabarito errado.",
      "preRequisitos": [
        "O que é protocolo HTTP e seus métodos (GET, POST)",
        "Noção de proxy reverso e posicionamento entre cliente e servidor",
        "O que são injeção de SQL e scripts entre usuários (XSS)",
        "Diferença entre firewall de pacotes (cabeçalho) e firewall de aplicação (conteúdo)"
      ],
      "objetivosObservaveis": [
        "Diferenciar firewall de aplicação de firewall de pacotes por camada de atuação",
        "Explicar o papel do WAF como proxy reverso que inspeciona requisições e respostas HTTP(S)",
        "Citar ataques de camada aplicacional alvo do WAF: injeção de SQL, XSS, exploração de autenticação",
        "Reconhecer que WAF não corrige falhas de código e exige sintonia para reduzir falsos positivos"
      ],
      "competencias": [
        "Raciocínio por camadas de aplicação: entender gramática do protocolo e política por conteúdo",
        "Julgamento de responsabilidade: distinguir controle externo (WAF) de correção de causa raiz (código)",
        "Atenção a limitações: falsos positivos, fraudes por usuário autenticado e variação entre fabricantes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — camada anterior que filtra por conexao, sem ver o payload aplicacional",
        "m4-u2-t3-s1 (IDS e IPS) — detecção e prevenção de intrusão em rede, complemento ao controle de aplicação do WAF"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de segurança da informação, com a diferença entre firewall de pacotes e WAF, o papel do WAF contra injeção de SQL e XSS, e o limite de que WAF não corrige falhas de código, com peso médio por combinar conceito e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "O firewall de aplicação (ou proxy de aplicação) entende o protocolo da aplicação — HTTP, FTP, SMTP — e valida se o tráfego obedece à gramática do protocolo, aplicando políticas por conteúdo. O WAF é a especialização para aplicações web: fica na frente do site como proxy reverso, inspeciona requisições e respostas HTTP(S) e bloqueia padrões de ataque de camada aplicacional, como injeção de SQL e scripts entre usuários.",
      "intermediario": "O WAF aplica políticas baseadas em regras e, quando disponível, em conjuntos de regras de referência de ataques web. Posiciona-se entre o usuário e o servidor web. Seus limites são importantes: melhora a higiene do perímetro web, mas não corrige falhas de código — é um controle que compra tempo enquanto a aplicação é corrigida; exige sintonia para reduzir falsos positivos; e não protege contra fraudes cometidas por usuário já autenticado em um aplicativo legítimo.",
      "avancado": "Como capacidades variam entre fabricantes e versões, generalizar um recurso de um produto é erro comum em provas. O WAF deve ser ajustado continuamente: verificar logs para identificar falsos positivos, usar modo de observação antes do bloqueio estrito, excluir falsos positivos documentados e manter revisão periódica da política, sem desativar a proteção inteira como atalho.",
      "especialista": "O especialista posiciona o WAF como parte de defesa em profundidade, nunca como substituto da revisão de código, validação de entrada e consulta parametrizada ao banco. Combina WAF com outros controles de camada de aplicação e define responsabilidades claras: o WAF bloqueia padrões conhecidos, mas a causa raiz de vulnerabilidades só é eliminada no código da aplicação."
    },
    "comparacoes": [
      {
        "tema": "Firewall de pacotes versus firewall de aplicação / WAF",
        "a": {
          "rotulo": "Firewall de pacotes",
          "texto": "Decide com base no cabeçalho do pacote: endereços IP, protocolo e portas. Não enxerga o conteúdo da aplicação nem o payload cifrado."
        },
        "b": {
          "rotulo": "Firewall de aplicação / WAF",
          "texto": "Entende o protocolo da aplicação (HTTP, FTP, SMTP), valida a gramática do protocolo e aplica políticas por conteúdo, bloqueando injeção de SQL, XSS e falhas de autenticação."
        },
        "diferencaGabarito": "O firewall de pacotes filtra por endereço e porta; o WAF inspeciona o conteúdo aplicacional e bloqueia ataques de camada de aplicação que o firewall de pacotes não enxerga."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com WAF instalado, a aplicação fica imune a falhas de desenvolvimento.",
        "porqueErrada": "Confunde controle externo com correção de causa raiz: o WAF bloqueia padrões conhecidos, mas falhas lógicas novas ou padrões desconhecidos podem passar; a correção exige revisão de código, validação de entrada e gestão de dependências.",
        "versaoCorreta": "Errado como afirmação absoluta. O WAF é um controle externo baseado em padrões; falha lógica nova ou padrão desconhecido pode passar, então a segurança da aplicação depende de revisão de código, validação de entrada e gestão de dependências, com o WAF como complemento."
      },
      {
        "afirmacaoEquivocada": "WAF em modo bloqueio estrito pode ser ativado e deixado sem ajuste, pois bloqueia tudo que é perigoso.",
        "porqueErrada": "Esquece que o WAF produz falsos positivos: tráfego legítimo pode ser bloqueado, causando erros em formulários e serviços. É obrigatório passar por modo de observação, ajustar políticas e revisar periodicamente, sem desativar a proteção inteira como atalho.",
        "versaoCorreta": "Errado. O WAF exige sintonia para reduzir falsos positivos; ativar bloqueio estrito sem ajuste pode bloquear tráfego legítimo, exigindo verificação de logs, modo de observação e revisão periódica da política."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Firewall de aplicação",
        "Proxy reverso",
        "WAF (Web Application Firewall)",
        "Injeção de SQL",
        "Scripts entre usuários (XSS)",
        "Falso positivo"
      ],
      "regras": [
        "Inspecionar requisições e respostas HTTP(S) em busca de padrões de ataque",
        "Aplicar políticas baseadas em regras e conjuntos de referência de ataques web",
        "Usar modo de observação antes de ativar bloqueio estrito",
        "Revisar periodicamente a política do WAF sem desativar a proteção inteira"
      ],
      "comparacoes": [
        "Firewall de pacotes enxerga cabeçalho; WAF enxerga o conteúdo da aplicação"
      ],
      "fluxos": [
        "Requisição HTTP chega ao WAF → inspeção por padrões de ataque → bloqueio ou passagem → resposta do servidor web também é inspecionada"
      ],
      "excecoes": [
        "Não protege contra fraudes feitas por usuário já autenticado em aplicativo legítimo",
        "Capacidades variam entre fabricantes e versões; não generalizar recurso de um produto"
      ],
      "palavrasChave": [
        "WAF",
        "firewall de aplicação",
        "proxy reverso",
        "HTTP",
        "injeção de SQL",
        "XSS",
        "falso positivo"
      ],
      "checklist": [
        "Posicionar o WAF como proxy reverso na frente do servidor web",
        "Inspecionar requisições e respostas HTTP(S)",
        "Bloquear padrões de injeção de SQL e XSS",
        "Ativar modo de observação antes do bloqueio estrito",
        "Ajustar políticas para reduzir falsos positivos",
        "Revisar periodicamente a política do WAF",
        "Não confiar no WAF para corrigir falhas de código da aplicação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um formulário público recebe um parâmetro que vira consulta direta ao banco de dados. Que ferramenta intercepta o padrão de ataque e quem corrige a causa raiz?",
        "dados": "Formulário público com parâmetro usado em consulta direta ao banco; risco de injeção de SQL via requisição HTTP.",
        "conceitos": [
          "WAF",
          "Injeção de SQL",
          "Consulta parametrizada"
        ],
        "estrategia": "Identificar que o WAF inspeciona a requisição HTTP e bloqueia a sintaxe típica de injeção de SQL, enquanto a correção da causa raiz cabe ao código da aplicação, com consulta parametrizada e validação de entrada.",
        "execucao": [
          "O WAF inspeciona a requisição HTTP entrante e identifica a sintaxe típica de injeção de SQL",
          "O WAF bloqueia a requisição malformada antes que chegue ao servidor web",
          "A causa raiz é corrigida no código: uso de consulta parametrizada, validação de entrada e permissão mínima do banco",
          "O WAF não substitui a correção do código da aplicação"
        ],
        "resultado": "O WAF pode bloquear a sintaxe típica de injeção de SQL inspecionando a requisição HTTP, mas a causa raiz é corrigida no código com consulta parametrizada, validação de entrada e permissão mínima do banco.",
        "justificativa": "O WAF atua como controle externo que bloqueia padrões conhecidos, enquanto a eliminação da vulnerabilidade depende de mudanças no código da aplicação.",
        "errosFrequentes": [
          "Achar que o WAF por si só elimina a vulnerabilidade de injeção de SQL",
          "Esquecer que a correção da causa raiz depende do código, não apenas do WAF"
        ],
        "variacao": "Um formulário permite upload de arquivo sem validação de extensão. Que controle de aplicação bloqueia e quem corrige?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O portal de transparência de um órgão passa a exibir erro 500 em formulários após ativar o WAF em modo bloqueio estrito. Como a equipe deve proceder?",
        "dados": "Portal de transparência com formulários exibindo erro 500; WAF ativado em modo bloqueio estrito; suspeita de falsos positivos bloqueando tráfego legítimo.",
        "conceitos": [
          "Falso positivo",
          "Modo de observação",
          "Revisão de política do WAF"
        ],
        "estrategia": "Verificar os logs do WAF para identificar regras que casam com tráfego legítimo, passar para modo de observação para ajustar, excluir falsos positivos documentados, reativar o bloqueio e manter revisão periódica da política, sem desativar a proteção inteira.",
        "execucao": [
          "Verificar logs do WAF para identificar regras que casam com tráfego legítimo (falsos positivos)",
          "Passar o WAF para modo de observação para ajustar as políticas",
          "Excluir falsos positivos documentados das regras de bloqueio",
          "Reativar o bloqueio após o ajuste e manter revisão periódica da política"
        ],
        "resultado": "A equipe verifica os logs do WAF, identifica falsos positivos, passa para modo de observação, ajusta as políticas, exclui falsos positivos documentados, reativa o bloqueio e mantém revisão periódica — sem desativar a proteção inteira como atalho.",
        "justificativa": "O modo bloqueio estrito sem sintonia gera falsos positivos que bloqueiam tráfego legítimo; o procedimento correto é ajustar gradualmente, preservando a proteção.",
        "errosFrequentes": [
          "Desativar o WAF inteiro como atalho ao enfrentar erros 500",
          "Esquecer de revisar os logs antes de alterar a política de bloqueio"
        ],
        "variacao": "Após o ajuste, um novo formulário começa a apresentar erro intermitente. Qual o próximo passo da equipe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Com WAF, a aplicação fica imune a falhas de desenvolvimento.' Avalie se está correta.",
        "dados": "Alegação de que o WAF, por inspecionar o tráfego HTTP, elimina todas as vulnerabilidades de código da aplicação web.",
        "conceitos": [
          "WAF não corrige código",
          "Falha lógica nova",
          "Padrão desconhecido pode passar"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que o WAF é controle externo baseado em padrões; falhas lógicas novas ou padrões desconhecidos podem passar, exigindo revisão de código e validação de entrada.",
        "execucao": [
          "Reconhecer que o WAF é controle externo e baseado em padrões de ataque",
          "Identificar que falha lógica nova ou padrão desconhecido pode passar pelo WAF",
          "Concluir que segurança de aplicação exige revisão de código, validação de entrada e gestão de dependências"
        ],
        "resultado": "Errado. WAF é controle externo e baseado em padrões; falha lógica nova ou padrão desconhecido pode passar. Segurança de aplicação exige revisão de código, validação de entrada e gestão de dependências — o WAF complementa, não corrige.",
        "justificativa": "O WAF bloqueia padrões conhecidos, mas não elimina vulnerabilidades de código; apenas ganha tempo enquanto a aplicação é corrigida.",
        "errosFrequentes": [
          "Achar que o WAF substitui a correção de vulnerabilidades no código",
          "Esquecer que padrões de ataque desconhecidos podem passar pelo WAF"
        ],
        "variacao": "Afirmação: 'Como o WAF bloqueia injeção de SQL, não é necessário usar consulta parametrizada no banco de dados.'"
      }
    ]
  },
  "m4-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "IDS e IPS são dispositivos de detecção e prevenção de intrusão que aparecem com frequência em concursos de redes e segurança. O candidato precisa saber que o IDS apenas alerta e não bloqueia, enquanto o IPS atua inline e pode interromper tráfego legítimo em caso de falso positivo. Além disso, deve comparar detecção por assinatura (só o conhecido) com detecção por anomalia (pega o inédito, mas gera mais falsos positivos). Confundir as duas ferramentas ou achar que IDS bloqueia pacotes leva diretamente ao gabarito errado.",
      "preRequisitos": [
        "O que é firewall e política de acesso de rede",
        "Noção de tráfego de rede e pacotes TCP/IP",
        "O que é uma assinatura de ataque e um padrão conhecido",
        "Noção de falso positivo e seu impacto operacional"
      ],
      "objetivosObservaveis": [
        "Diferenciar IDS e IPS por atuação: alerta versus bloqueio",
        "Explicar a colocação típica do IDS fora do caminho do tráfego (span/mirror, TAP)",
        "Explicar a colocação do IPS inline e seu risco operacional",
        "Comparar detecção por assinatura e por anomalia/heurística"
      ],
      "competencias": [
        "Raciocínio sobre detecção versus prevenção como funções distintas",
        "Julgamento operacional: reconhecer que falso positivo de IPS interrompe tráfego legítimo",
        "Atenção a detalhes: IDS não substitui firewall, apenas detecta dentro do que foi permitido"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t2-s2 (Inspeção de estado (stateful inspection)) — firewall stateful filtra por conexao, IDS/IPS detectam exploração dentro do que foi permitido",
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — detecção por assinatura e comportamento também aparece em endpoint"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com a diferença operacional entre IDS e IPS, a colocação na rede e a comparação entre detecção por assinatura e por anomalia, com peso médio por combinar conceito e implantação prática."
      }
    },
    "niveis": {
      "iniciante": "IDS (Intrusion Detection System) observa o tráfego de rede e emite alertas quando encontra padrões de ataque; é um dispositivo passivo que normalmente se conecta a um ponto de espelho (span/mirror) de switch ou a um TAP, de modo que não participa do caminho do tráfego e não consegue bloquear nada sozinho. IPS (Intrusion Prevention System) atua no caminho (inline) e bloqueia ou sanea o tráfego malicioso conforme política, mas traz risco próprio: falha ou falso positivo do IPS interrompe tráfego legítimo, exigindo teste em modo de observação antes do bloqueio.",
      "intermediario": "Os mecanismos de detecção são por assinatura e por anomalia. A detecção por assinatura compara o tráfego com uma base de padrões conhecidos: precisa de atualização constante e só identifica o já conhecido. A detecção por anomalia ou heurística compara o tráfego com um comportamento esperado: consegue identificar ataques inéditos, mas produz mais falsos positivos. Existem também variantes por localização, como HIDS/HIPS, que atuam no host (arquivos, configurações, processos). IDS/IPS não substitui firewall: firewalls aplicam política de acesso; IDS/IPS detectam exploração dentro do que foi permitido.",
      "avancado": "A implantação prudente de um IPS segue etapas: primeiro, modo somente alerta (monitoração) por período representativo, coletando falsos positivos; depois, ajuste de política, exclusão de exceções documentadas e testes em janela de manutenção; finalmente, bloqueio ativado por categoria de ataque de alto impacto, com monitoramento 24×7 e procedimento de reversão. Isso evita que um falso positivo derrube um sistema crítico.",
      "especialista": "O especialista integra IDS/IPS com outros controles de defesa em profundidade, define regras de detecção com base no perfil de risco do órgão, ajusta finamente as assinaturas para reduzir ruído, e estabelece procedimentos de resposta a alertas. Lembra que IDS/IPS detectam exploração dentro do tráfego permitido pelo firewall, portanto não dispensam uma política de acesso bem desenhada."
    },
    "comparacoes": [
      {
        "tema": "IDS versus IPS",
        "a": {
          "rotulo": "IDS (Intrusion Detection System)",
          "texto": "Dispositivo passivo que observa o tráfego e emite alertas; instala-se fora do caminho do tráfego (span/mirror ou TAP) e não consegue bloquear pacotes por si só."
        },
        "b": {
          "rotulo": "IPS (Intrusion Prevention System)",
          "texto": "Dispositivo ativo que atua inline no caminho do tráfego e bloqueia ou sanea tráfego malicioso conforme política; falso positivo pode interromper tráfego legítimo."
        },
        "diferencaGabarito": "O IDS apenas detecta e alerta; o IPS detecta e bloqueia ativamente, mas requer cuidado operacional por risco de falso positivo interromper tráfego legítimo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "IDS inline bloqueia pacotes maliciosos automaticamente.",
        "porqueErrada": "Confunde IDS com IPS: inline e bloqueio automático são características do IPS. O IDS, por definição, apenas detecta e alerta; sua posição típica é fora do caminho do tráfego, portanto não bloqueia nada sozinho.",
        "versaoCorreta": "Errado. Inline e bloqueio automático são características do IPS, não do IDS. O IDS apenas detecta e emite alertas, normalmente fora do caminho do tráfego; o bloqueio depende de um IPS ou de ação do operador."
      },
      {
        "afirmacaoEquivocada": "Detecção por assinatura consegue identificar ataque nunca antes visto.",
        "porqueErrada": "A assinatura descreve um ataque já catalogado; contra um ataque inédito não há padrão para comparar. Somente a detecção comportamental ou por anomalia consegue capturar o inédito, mas com mais falsos positivos.",
        "versaoCorreta": "Errado. A detecção por assinatura identifica somente ataques já conhecidos; o inédito só é capturado por detecção comportamental ou por anomalia, que por sua vez gera mais falsos positivos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "IDS",
        "IPS",
        "Detecção por assinatura",
        "Detecção por anomalia",
        "Falso positivo",
        "Modo inline",
        "Ponto de espelho (span/mirror)"
      ],
      "regras": [
        "IDS apenas alerta; não bloqueia tráfego por si só",
        "IPS atua inline e pode bloquear, mas falso positivo interrompe tráfego legítimo",
        "Testar IPS em modo somente alerta antes de ativar o bloqueio",
        "Atualizar constantemente a base de assinaturas"
      ],
      "comparacoes": [
        "IDS alerta e não bloqueia; IPS bloqueia ativamente e exige cuidado com falso positivo"
      ],
      "fluxos": [
        "Tráfego chega ao dispositivo → detecção por assinatura ou anomalia → IDS emite alerta ou IPS bloqueia/saneia → operador tria e responde"
      ],
      "excecoes": [
        "IDS/IPS não substitui firewall: detectam exploração dentro do tráfego que o firewall já permitiu",
        "Ataque inédito não é pego por assinatura; exige detecção por anomalia, com mais falsos positivos"
      ],
      "palavrasChave": [
        "IDS",
        "IPS",
        "assinatura",
        "anomalia",
        "alerta",
        "bloqueio",
        "inline",
        "falso positivo"
      ],
      "checklist": [
        "Diferenciar IDS (alerta) de IPS (bloqueio)",
        "Confirmar colocação do IDS fora do caminho do tráfego",
        "Testar IPS em modo observação antes do bloqueio",
        "Manter base de assinaturas atualizada",
        "Ajustar políticas para reduzir falsos positivos",
        "Não considerar IDS/IPS como substituto do firewall"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um dispositivo alerta sobre uma tentativa de exploração de vulnerabilidade conhecida, mas o tráfego chegou ao servidor. Que ferramenta é e o que isso indica?",
        "dados": "Dispositivo de rede gera alerta sobre exploração de vulnerabilidade conhecida; o tráfego malicioso chegou ao servidor de destino.",
        "conceitos": [
          "IDS",
          "Detecção passiva",
          "Alerta de intrusão"
        ],
        "estrategia": "Identificar que se trata de um IDS, que apenas detecta e alerta sem bloquear, e que o tráfego chegou ao servidor porque o dispositivo não atua no caminho dos pacotes.",
        "execucao": [
          "Reconhecer que o dispositivo apenas emitiu um alerta, não bloqueou o tráfego",
          "Identificar o comportamento como detecção passiva, própria de um IDS",
          "Concluir que o tráfego chegou ao servidor porque o IDS não atua inline",
          "Perceber que, se bloqueio automático fosse exigido, seria necessário um IPS inline"
        ],
        "resultado": "É um IDS (detecção passiva). Indica que houve uma tentativa de exploração e que o alerta depende de um operador para resposta; se o bloqueio automático fosse exigido, a arquitetura precisaria de um IPS inline.",
        "justificativa": "O IDS apenas observa e alerta, sem participar do caminho do tráfego; portanto o pacote malicioso chegou ao servidor, e a resposta depende de intervenção humana.",
        "errosFrequentes": [
          "Achar que o IDS bloqueou o tráfego malicioso",
          "Esquecer que o IDS não atua inline e não pode impedir a chegada do pacote"
        ],
        "variacao": "O mesmo dispositivo é reposicionado para atuar inline e passa a bloquear o tráfego. Que ferramenta é agora?"
      },
      {
        "tipo": "aplicacao",
        "problema": "A equipe quer implantar bloqueio automático, mas teme parar um sistema crítico por falso positivo. Descreva a implantação prudente de um IPS.",
        "dados": "Sistema crítico em produção; equipe deseja bloqueio automático; risco de falso positivo do IPS interromper tráfego legítimo.",
        "conceitos": [
          "IPS",
          "Modo somente alerta",
          "Falso positivo",
          "Janela de manutenção"
        ],
        "estrategia": "Implantar o IPS primeiro em modo somente alerta para coletar falsos positivos, depois ajustar a política com exceções documentadas e testar em janela de manutenção, ativando o bloqueio apenas para categorias de ataque de alto impacto.",
        "execucao": [
          "Fase 1: colocar o IPS em modo somente alerta (monitoração) por período representativo, coletando falsos positivos",
          "Fase 2: ajustar a política, excluir exceções documentadas e testar em janela de manutenção",
          "Fase 3: ativar o bloqueio apenas por categoria de ataque de alto impacto",
          "Manter monitoramento 24×7 e procedimento de reversão pronto"
        ],
        "resultado": "A implantação começa com o IPS em modo somente alerta para coletar falsos positivos, segue com ajuste de política e exceções, testes em janela de manutenção, e ativa o bloqueio apenas para ataques de alto impacto, com monitoramento 24×7 e reversão.",
        "justificativa": "A abordagem gradual evita que um falso positivo derrube um sistema crítico, permitindo ajustar o IPS antes de expor a produção ao bloqueio automático.",
        "errosFrequentes": [
          "Ativar o bloqueio automático imediatamente sem período de observação",
          "Esquecer de manter um procedimento de reversão para casos de falso positivo"
        ],
        "variacao": "Após alguns meses em modo bloqueio, um falso positivo derruba um servidor. Qual a ação imediata da equipe?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'IDS inline bloqueia pacotes maliciosos automaticamente.' Avalie se está correta.",
        "dados": "Alegação de que um dispositivo IDS, posicionado inline, bloqueia pacotes maliciosos de forma automática.",
        "conceitos": [
          "IDS não bloqueia",
          "IPS atua inline",
          "Detecção versus prevenção"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que inline e bloqueio automático são características do IPS; o IDS, por definição, apenas detecta e alerta, normalmente fora do caminho do tráfego.",
        "execucao": [
          "Reconhecer que inline e bloqueio automático pertencem ao IPS, não ao IDS",
          "Identificar que o IDS apenas detecta e emite alertas",
          "Concluir que a afirmação confunde as duas ferramentas e está incorreta"
        ],
        "resultado": "Errado. Inline e bloqueio automático são características do IPS. O IDS, por definição, detecta e alerta; sua posição típica é fora do caminho do tráfego, portanto não bloqueia pacotes sozinho.",
        "justificativa": "A afirmação atribui ao IDS uma função que pertence ao IPS; o IDS não tem capacidade de bloquear, apenas de detectar e reportar.",
        "errosFrequentes": [
          "Achar que qualquer dispositivo de detecção de intrusão também bloqueia",
          "Confundir IDS com IPS pelo fato de ambos usarem assinaturas de ataque"
        ],
        "variacao": "Afirmação: 'Um IPS em modo somente alerta já bloqueia automaticamente todo tráfego malicioso.'"
      }
    ]
  },
  "m4-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Monitoramento, registros e resposta a incidentes formam o ciclo de descobrimento e contenção de incidentes de segurança: sem registrar o que acontece, o incidente só é descoberto quando o usuário reclama, e sem fases ordenadas a recuperação pode reabrir o ataque. Em concursos, aparecem em questões sobre o que registrar, como proteger a integridade dos registros (cadeia de custódia) e a ordem correta das fases de resposta (identificação, contenção, erradicação, recuperação, lições aprendidas). Errar a ordem — por exemplo, erradicar sem conter — espalha o dano.",
      "preRequisitos": [
        "O que é um registro de log e para que serve",
        "Noção de autenticação, sucesso e falha de login",
        "Noção de integridade de dados e não repúdio",
        "Noção de incidente de segurança e seus impactos"
      ],
      "objetivosObservaveis": [
        "Elencar o que deve ser registrado: autenticações, autorizações negadas, alterações de configuração, acessos a dados sensíveis",
        "Explicar boas práticas de proteção de registros: centralização, somente leitura, cadeia de custódia, retenção, sincronização de hora",
        "Descrever as cinco fases da resposta a incidentes na ordem correta",
        "Justificar por que a ordem das fases importa: conter antes de erradicar, erradicar antes de recuperar"
      ],
      "competencias": [
        "Raciocínio sobre evidência: registros íntegros são condição para responsabilização",
        "Julgamento de processo: aplicar as fases de resposta na sequência correta",
        "Atenção a detalhes: log que ninguém lê não detecta nada, então análise é parte do controle"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t3-s1 (IDS e IPS) — IDS/IPS geram alertas que alimentam a identificação do incidente",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — erradicação de incidente inclui correção de vulnerabilidade explorada"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com o que registrar, proteção da integridade dos registros e as fases ordenadas da resposta a incidentes, com peso médio por combinar conceito de governança com procedimento operacional."
      }
    },
    "niveis": {
      "iniciante": "Monitoramento contínuo é a condição de descobrir o incidente antes que o usuário reclamar. O que registrar: autenticações (sucesso e falha), autorizações negadas, alterações de configuração, acessos a dados sensíveis, eventos de sistema e de aplicação, cada um com identificador, data/hora sincronizada e resultado. Boas práticas de registros incluem centralização em servidor dedicado, proteção contra edição ou exclusão (somente leitura e cadeia de custódia), retenção compatível com obrigações e sincronização de hora — um log que ninguém lê não detecta nada.",
      "intermediario": "A resposta a incidentes segue cinco fases em ordem lógica: 1) identificação (detecção e confirmação do incidente); 2) contenção (isolar sistemas, bloquear contas, preservar evidências, limitar o dano); 3) erradicação (remover a causa: malware, backdoor, credencial comprometida, vulnerabilidade explorada); 4) recuperação (restaurar sistemas com verificação e monitorar com atenção redobrada); 5) lições aprendidas (relatório com causa, cronologia, melhorias e prazos). A ordem importa: erradicar sem conter espalha o dano; recuperar sem erradicar traz o incidente de volta.",
      "avancado": "As evidências devem ser preservadas com registro de cadeia de custódia para eventual responsabilização. Correções de erros de digitação em registros de auditoria não são feitas por edição: usam-se novos registros (entradas de ajuste), pois edição destrói a rastreabilidade e o não repúdio. O monitoramento só é efetivo se houver alguém analisando os registros; centralizar sem ler é inoperante.",
      "especialista": "O especialista define a política de retenção compatível com obrigações legais e regulatórias, implementa servidores dedicados de coleta centralizada com acesso restrito, estabelece procedimentos de resposta com responsáveis e prazos para cada fase, e promove exercícios periódicos (tabletop) para validar que a equipe segue a ordem correta das fases sob pressão."
    },
    "comparacoes": [
      {
        "tema": "Edição de registro versus entrada de ajuste",
        "a": {
          "rotulo": "Edição do registro existente",
          "texto": "Modificar um registro de auditoria já gravado para corrigir um erro de digitação; destrói a integridade, a rastreabilidade e o não repúdio do registro original."
        },
        "b": {
          "rotulo": "Entrada de ajuste (novo registro)",
          "texto": "Inserir um novo registro que corrija ou complemente a informação, preservando o registro original inalterado e mantendo a cadeia de custódia."
        },
        "diferencaGabarito": "Editar um registro de auditoria destrói sua integridade; a correção deve ser feita por um novo registro de ajuste, nunca por edição do original."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Registros de auditoria devem permitir edição pelo administrador para correção de erros de digitação.",
        "porqueErrada": "Registros íntegros não devem ser editáveis; qualquer correção é feita por um novo registro de ajuste, pois editar o original destrói a rastreabilidade e o não repúdio, invalidando o registro como evidência.",
        "versaoCorreta": "Errado. Registros de auditoria não devem ser editáveis pelo administrador; correções são feitas por um novo registro de entrada de ajuste, pois a edição do original destrói a cadeia de custódia e o não repúdio."
      },
      {
        "afirmacaoEquivocada": "Basta reinstalar o sistema comprometido para encerrar o incidente.",
        "porqueErrada": "Sem contenção e erradicação da causa (credenciais, backdoors, vulnerabilidade explorada), a reinstalação devolve o sistema ao atacante e ainda descaracteriza as evidências, tornando a responsabilização mais difícil.",
        "versaoCorreta": "Errado. Sem contenção e erradicação de causa, a reinstalação devolve o sistema ao atacante e descaracteriza evidências; as fases devem ser seguidas na ordem: identificar, conter, erradicar, recuperar e lições aprendidas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Registro de auditoria",
        "Cadeia de custódia",
        "Resposta a incidentes",
        "Conteúdo",
        "Erradicação",
        "Lições aprendidas"
      ],
      "regras": [
        "Registrar autenticações, autorizações negadas, alterações de configuração e acessos a dados sensíveis",
        "Centralizar registros em servidor dedicado com acesso restrito",
        "Proteger registros contra edição ou exclusão (somente leitura)",
        "Seguir as cinco fases da resposta na ordem correta",
        "Preservar evidências com cadeia de custódia"
      ],
      "comparacoes": [
        "Edição do registro destrói a integridade; entrada de ajuste preserva o original"
      ],
      "fluxos": [
        "Identificação (detecção e confirmação) → Conteúdo (isolar, bloquear, preservar) → Erradicação (remover causa) → Recuperação (restaurar e monitorar) → Lições aprendidas (relatório e melhorias)"
      ],
      "excecoes": [
        "Recuperar sem erradicar traz o incidente de volta; erradicar sem conter espalha o dano",
        "Log que ninguém lê não detecta nada: a análise dos registros é parte do controle"
      ],
      "palavrasChave": [
        "monitoramento",
        "registro de auditoria",
        "cadeia de custódia",
        "resposta a incidentes",
        "conteúdo",
        "erradicação",
        "lições aprendidas"
      ],
      "checklist": [
        "Registrar autenticações de sucesso e falha",
        "Centralizar registros em servidor dedicado",
        "Proteger registros contra edição ou exclusão",
        "Seguir as cinco fases da resposta na ordem correta",
        "Preservar evidências com cadeia de custódia",
        "Revisar e analisar os registros periodicamente"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um alerta indica login anômalo às 3h da manhã. Qual é a sequência correta de ação na primeira hora?",
        "dados": "Alerta de segurança indica login anômalo fora do horário comercial; é necessário decidir a sequência de resposta nas primeiras horas.",
        "conceitos": [
          "Identificação",
          "Conteúdo",
          "Preservação de registros"
        ],
        "estrategia": "Aplicar as fases iniciais da resposta a incidentes: confirmar o alerta (identificação), isolar a sessão e revogar credenciais (contenção), e preservar os registros antes de qualquer reinstalação.",
        "execucao": [
          "Confirmar o alerta, verificando se o login é realmente anômalo (identificação)",
          "Bloquear a sessão e revogar/rotacionar a credencial e sessões ativas (contenção)",
          "Verificar movimentação lateral e possíveis persistências (preparação para erradicação)",
          "Preservar os registros relacionados antes de qualquer reinstalação do sistema"
        ],
        "resultado": "A sequência correta é: confirmar o alerta (identificação), bloquear a sessão e revogar/rotacionar a credencial e sessões ativas (contenção), verificar lateral movement e persistências, sempre preservando registros antes de qualquer reinstalação.",
        "justificativa": "Seguir a ordem das fases evita que ações precipitadas, como reinstalar sem conter, espalhem o dano ou destruam evidências necessárias para a investigação.",
        "errosFrequentes": [
          "Reinstalar o sistema imediatamente sem conter ou preservar evidências",
          "Esquecer de rotacionar a credencial comprometida durante a contenção"
        ],
        "variacao": "O alerta indica acesso a um banco de dados sensível por uma conta de serviço à noite. Qual a sequência?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Confirmou-se vazamento de planilha com dados pessoais de servidores. O que a equipe de segurança faz e o que o órgão precisa considerar?",
        "dados": "Planilha com dados pessoais de servidores vazada; equipe de segurança confirmou o incidente; órgão público sujeito à LGPD.",
        "conceitos": [
          "Conteúdo",
          "Erradicação",
          "LGPD",
          "Comunicação de incidente"
        ],
        "estrategia": "A equipe de segurança aplica contenção (restringir acesso ao arquivo, revogar links, apagar cópias acessíveis), erradicação (corrigir a permissão que permitiu o compartilhamento) e recuperação; o órgão registra o incidente, avalia comunicação à autoridade e aos titulares conforme dispositivo aplicável da LGPD, e implementa as melhorias apontadas.",
        "execucao": [
          "Conter o incidente: restringir acesso ao arquivo, revogar links de compartilhamento, apagar cópias acessíveis",
          "Eradicar a causa: corrigir a permissão que permitiu o compartilhamento indevido",
          "Recuperar: restaurar o acesso legítimo e monitorar com atenção redobrada",
          "Registrar o incidente e avaliar comunicação à autoridade e aos titulares conforme a LGPD",
          "Implementar as melhorias apontadas na análise pós-incidente"
        ],
        "resultado": "Segurança: contenção, erradicação e recuperação. Órgão: registrar o incidente, avaliar comunicação à autoridade e aos titulares conforme dispositivo aplicável da LGPD (artigo relativo à comunicação de incidente de segurança) e implementar melhorias apontadas no relatório.",
        "justificativa": "A resposta combina ação técnica imediata (conter e erradicar) com obrigações institucionais (registrar e comunicar), evitando que o vazamento se repita e que o órgão descumpra deveres legais.",
        "errosFrequentes": [
          "Esquecer de comunicar o incidente à autoridade e aos titulares quando exigido",
          "Restaurar o acesso sem antes corrigir a permissão que causou o vazamento"
        ],
        "variacao": "O vazamento envolve dados de saúde de pacientes. Quais obrigações adicionais o órgão deve considerar?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Basta reinstalar o sistema comprometido para encerrar o incidente.' Avalie se está correta.",
        "dados": "Alegação de que reinstalar o sistema comprometido é suficiente para encerrar um incidente de segurança.",
        "conceitos": [
          "Conteúdo",
          "Erradicação",
          "Preservação de evidências"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que, sem contenção e erradicação da causa, a reinstalação devolve o sistema ao atacante e ainda descaracteriza evidências; as fases devem ser seguidas na ordem.",
        "execucao": [
          "Reconhecer que reinstalar sem conter espalha o dano e não remove a causa",
          "Identificar que credenciais, backdoors e a vulnerabilidade explorada devem ser erradicados",
          "Concluir que a reinstalação sem ordem correta descaracteriza evidências e reabre o ataque"
        ],
        "resultado": "Errado. Sem contenção e erradicação de causa (credenciais, backdoors, vulnerabilidade explorada), a reinstalação devolve o sistema ao atacante e descaracteriza as evidências; as fases devem ser seguidas na ordem correta.",
        "justificativa": "A ordem das fases existe para garantir que o dano seja contido, a causa removida e as evidências preservadas; pular etapas invalida a resposta ao incidente.",
        "errosFrequentes": [
          "Achar que reinstalar o sistema remove automaticamente toda a causa do incidente",
          "Esquecer que a reinstalação sem preservar registros destrói evidências"
        ],
        "variacao": "Afirmação: 'Como o sistema foi reinstalado, não é necessário mais investigar como o atacante entrou.'"
      }
    ]
  },
  "m4-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A proteção de endpoint divide o alvo do ataque em duas linhas: o antivírus clássico, que para apenas o já conhecido por assinatura, e o EDR, que detecta comportamentos anômalos e dá visibilidade para resposta. Em concursos de TI, essa distinção aparece em questões sobre eficácia contra zero-day, responsabilidade por alertas e requisitos operacionais de ferramentas defensivas. Sem entender que o EDR gera dados, não decisões, o candidato confunde ferramenta com gestão e erra o gabarito.",
      "preRequisitos": [
        "Noção de malware e como se espalha",
        "O que é assinatura de vírus e detecção baseada em padrão",
        "Noção básica de processo, rede e arquivo em um endpoint"
      ],
      "objetivosObservaveis": [
        "Comparar antivírus por assinatura com solução EDR em detecção, escopo e operação",
        "Indicar requisitos operacionais de um EDR: cobertura, atualização, triagem de alertas e integração",
        "Explicar por que detecção comportamental identifica ataques inéditos que assinatura não enxerga",
        "Descrever a resposta possível via EDR: isolar host, matar processo, coletar evidências"
      ],
      "competencias": [
        "Raciocínio sobre camadas de defesa: assinatura versus comportamento",
        "Avaliação de requisitos operacionais, não só de funcionalidades",
        "Interpretação de alertas: distinguir detecção de decisão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — defesa em profundidade que complementa o endpoint",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — endpoints exigem correção de vulnerabilidades além da detecção"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema do conteúdo programático de TI para cargos de suporte e segurança, com a diferença entre antivírus e EDR, eficácia contra zero-day e responsabilidade pela triagem de alertas, com peso pedagógico médio."
      }
    },
    "niveis": {
      "iniciante": "O antivírus clássico compara cada arquivo com uma base de assinaturas de malware já conhecido. É leve e eficaz contra ameaças reconhecidas, mas não detecta um ataque inédito porque não há assinatura ainda. Nesse nível, o aluno identifica essa limitação e entende que a proteção por assinatura sozinha não basta para o desconhecido.",
      "intermediario": "A proteção moderna de endpoints adiciona análise comportamental e aprendizado de máquina: observa ações suspeitas, como processo gravando muitos arquivos, tentativa de desabilitar proteção ou injeção de código, e pode bloquear em tempo real. O EDR vai além, mantendo telemetria contínua de processos, conexões e alterações para investigação retroativa e resposta.",
      "avancado": "O EDR gera telemetria e alertas, mas não toma decisão por si só: exige equipe ou serviço que triage, investigue e responda (isolamento remoto, encerramento de processo, coleta de evidências). Sem triagem, a organização paga licença e acumula alertas ignorados, deixando o risco residual alto apesar da ferramenta instalada.",
      "especialista": "O especialista planeja a cobertura mínima declarada comparando inventário de ativos com instalações reais, define políticas de exclusão mínimas e justificadas, integra o EDR à central de monitoramento e executa testes periódicos de bloqueio. Lembra que o EDR é camada, não base: não substitui correção de vulnerabilidades nem MFA."
    },
    "comparacoes": [
      {
        "tema": "Detecção por assinatura versus detecção comportamental",
        "a": {
          "rotulo": "Antivírus clássico (assinatura)",
          "texto": "Compara arquivos com base de assinaturas de malware conhecido; leve e eficiente contra o reconhecido, incapaz de parar ataque inédito sem assinatura correspondente."
        },
        "b": {
          "rotulo": "EDR (comportamento e telemetria)",
          "texto": "Observa ações suspeitas do endpoint (escrita em massa, injeção de código, desabilitação de proteção) e mantém registro contínuo para investigação e resposta remota."
        },
        "diferencaGabarito": "A assinatura detecta somente o já listado; o EDR detecta pelo comportamento, gera telemetria e apoia a resposta, mas depende de análise humana dos alertas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "EDR detecta qualquer ataque, independentemente de operação humana.",
        "porqueErrada": "Confunde ferramenta com gestão: o EDR apenas coleta telemetria e emite alertas; sem triagem e resposta humana, o ataque pode não ser contido.",
        "versaoCorreta": "Errado. O EDR é detecção e apoio à resposta; sua eficácia depende de implantação ampla, qualidade das regras e análise humana de alertas, não de detecção automática de tudo."
      },
      {
        "afirmacaoEquivocada": "Antivírus por assinatura é suficiente contra ataque inédito (zero-day).",
        "porqueErrada": "A assinatura só existe para malware já catalogado; contra um zero-day não há padrão para comparar, então a defesa precisa de comportamento, correção preventiva e defesa em profundidade.",
        "versaoCorreta": "Errado. Assinatura descreve o já conhecido; contra inédito, a defesa depende de mecanismos comportamentais, correção preventiva e defesa em profundidade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Assinatura de malware",
        "Análise comportamental e heurística",
        "EDR (Endpoint Detection and Response)",
        "Telemetria de endpoint"
      ],
      "regras": [
        "Cobertura mínima declarada: inventário de ativos versus instalações reais",
        "Políticas de exclusão mínimas e justificadas",
        "Integração do EDR com central de monitoramento e teste periódico de bloqueio"
      ],
      "comparacoes": [
        "Antivírus por assinatura detecta o conhecido; EDR detecta comportamento anômalo e telemetria contínua"
      ],
      "fluxos": [
        "Detectar comportamento suspeito → gerar alerta → triar → isolar host ou matar processo → coletar evidências"
      ],
      "excecoes": [
        "EDR não substitui correção de vulnerabilidades nem MFA; é camada, não base da defesa"
      ],
      "palavrasChave": [
        "antivírus",
        "assinatura",
        "EDR",
        "endpoint",
        "comportamental",
        "telemetria",
        "triagem",
        "resposta"
      ],
      "checklist": [
        "Comparar inventário de ativos com instalações do EDR",
        "Manter mecanismos de detecção atualizados",
        "Definir políticas de exclusão mínimas e justificadas",
        "Integrar EDR à central de monitoramento",
        "Executar teste periódico de bloqueio",
        "Designar responsável pela triagem de alertas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um arquivo nunca visto começa a criptografar unidades de rede. Qual mecanismo provavelmente o interrompe e por quê?",
        "dados": "Arquivo desconhecido sem assinatura catalogada; comportamento de escrita em massa e alteração de extensões em unidades de rede.",
        "conceitos": [
          "Análise comportamental",
          "EDR"
        ],
        "estrategia": "Identificar que, sem assinatura correspondente, apenas a detecção por comportamento anômalo pode interromper o ataque em andamento.",
        "execucao": [
          "Reconhecer que o arquivo não tem assinatura conhecida",
          "Observar o comportamento anômalo: escrita massiva e mudança de extensão",
          "Concluir que a proteção comportamental/EDR interrompe pelo comportamento, não pela assinatura"
        ],
        "resultado": "Proteção comportamental/EDR: sem assinatura correspondente, a decisão é por comportamento anômalo (escrita em massa, alteração de extensões), que mecanismos baseados apenas em assinatura não detectam.",
        "justificativa": "O comportamento de escrita massiva e renomeação de extensões é um indicador confiável de ransomware, independente de assinatura, então o EDR bloqueia onde o antivírus clássico falha.",
        "errosFrequentes": [
          "Achar que qualquer antivírus para um zero-day por assinatura",
          "Esperar que o EDR decida sozinho sem análise humana do alerta"
        ],
        "variacao": "Um arquivo desconhecido tenta injetar código em um processo legítimo. Qual mecanismo detém e por quê?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão adquire EDR, instala em 40% das estações e não dimensiona triagem de alertas. Avalie o risco residual.",
        "dados": "40% das estações com EDR instalado; 60% sem telemetria; ausência de responsável por triagem e sem SLA de atendimento a alertas.",
        "conceitos": [
          "Cobertura de endpoint",
          "Triagem de alertas",
          "Risco residual"
        ],
        "estrategia": "Avaliar a cobertura parcial como superfície exposta e a falta de triagem como falha de resposta, combinando ambos no risco residual.",
        "execucao": [
          "Identificar que 60% das estações ficam sem telemetria",
          "Reconhecer que o atacante explora o lado fraco como entrada",
          "Avaliar que, sem triagem, alertas de alto risco passam despercebidos",
          "Definir ações: meta de cobertura com inventário, responsável pela triagem, SLA interno, teste de resposta"
        ],
        "resultado": "Cobertura parcial deixa 60% das estações sem telemetria — o atacante usa o lado fraco como entrada. Sem triagem, alertas de alto risco podem passar despercebidos. Ações: metas de cobertura com inventário confiável, responsável pela triagem, SLA interno de atendimento a alertas e teste de resposta.",
        "justificativa": "A combinação de cobertura incompleta e ausência de triagem deixa o ataque visível em parte da frota e sem resposta na outra, elevando o risco residual apesar da licença adquirida.",
        "errosFrequentes": [
          "Acreditar que instalar EDR em parte das estações resolve o risco do órgão inteiro",
          "Assumir que a compra da ferramenta equivale à detecção efetiva sem triagem"
        ],
        "variacao": "O órgão instala EDR em 100% das estações, mas não designa ninguém para analisar alertas. Qual é o risco?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O EDR detecta qualquer ataque, independentemente de operação humana.'",
        "dados": "Alegação de detecção automática e total de ataques pelo EDR, sem menção a implantação, regras ou análise humana.",
        "conceitos": [
          "EDR",
          "Análise humana de alertas",
          "Limitação de ferramenta"
        ],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que o EDR depende de cobertura, qualidade das regras e decisão humana para conter o ataque.",
        "execucao": [
          "Reconhecer que o EDR gera telemetria e alertas, não decisão automática",
          "Identificar que eficácia requer implantação ampla e regras de qualidade",
          "Concluir que sem análise humana o alerta pode ser ignorado"
        ],
        "resultado": "Errado. EDR é ferramenta de detecção e apoio à resposta; sua eficácia depende de implantação ampla, qualidade das regras e análise humana de alertas.",
        "justificativa": "A detecção depende de o endpoint estar coberto, da regra identificar o comportamento e de alguém analisar o alerta; sem isso, a ferramenta não detém o ataque por si só.",
        "errosFrequentes": [
          "Tratar o EDR como solução autônoma que elimina a necessidade de equipe",
          "Confundir detecção de comportamento com resposta automática ao incidente"
        ],
        "variacao": "Afirmação: 'Instalar antivírus em todos os endpoints garante que nenhum malware entre na rede.'"
      }
    ]
  },
  "m4-u2-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A segmentação de rede limita a movimentação lateral entre zonas e o hardening encolhe a superfície de ataque, reduzindo o blast radius de um comprometimento. Em concursos de redes e segurança, aparecem em questões de arquitetura de defesa, VLAN com ACL, blast radius e hardening de servidor exposto. Confundir segmento com VLAN simples, ou hardening com troca de senha, leva ao gabarito errado.",
      "preRequisitos": [
        "Noção de endereçamento IP e máscara de sub-rede",
        "O que é VLAN e como ela agrupa portas",
        "Noção de serviço, porta e protocolo de rede",
        "Noção de servidor e de superfície de ataque"
      ],
      "objetivosObservaveis": [
        "Projetar segmentação de rede com zonas e políticas de tráfego entre elas",
        "Enumerar ações de hardening de um servidor exposto: desabilitar serviços, trocar credenciais, aplicar correções",
        "Explicar como a segmentação reduz o alcance do dano (blast radius) e a movimentação lateral",
        "Diferenciar segmentação (zonas + controle de tráfego) da simples criação de VLANs"
      ],
      "competencias": [
        "Raciocínio arquitetural: dividir rede em zonas com controles entre elas",
        "Atenção à superfície de ataque: desabilitar o que não é necessário",
        "Verificação de plausibilidade: confiar se o tráfego permitido é o mínimo necessário"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — proteção de endpoint complementa a segmentação de rede",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — endpoints e servidores exigem correção de vulnerabilidades",
        "m4-u2-t4-s3 (Defesa em profundidade) — segmentação e hardening são camadas da defesa em profundidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de redes e segurança, com segmentação, blast radius, VLAN com ACL e hardening de servidor, com peso médio por combinar arquitetura e configuração prática."
      }
    },
    "niveis": {
      "iniciante": "Segmentação de rede divide a rede em zonas com políticas distintas — estações, servidores, banco de dados, convidados, voz — de modo que o comprometimento de uma zona não alcance automaticamente as demais. O ganho é reduzir o alcance do dano (blast radius) e a movimentação lateral. Hardening é reduzir a superfície de ataque de um ativo: desabilitar serviços, portas e contas desnecessárias, trocar credenciais padrão e aplicar correções.",
      "intermediario": "Mecanismos usuais de segmentação incluem VLANs com ACLs e firewalls entre zonas (controle leste-oeste), além de microsegmentação quando o ambiente suporta. O hardening de servidor segue uma sequência prática: inventário de serviços, desativar o que não é requisito, correções de sistema e aplicativo, credenciais fortes e contas individuais, filtro de acesso à gestão apenas da rede administrativa, registro e backup da configuração, varredura de verificação.",
      "avancado": "A segmentação efetiva exige controle de tráfego entre as zonas (ACLs/firewall), monitoramento e revisão de regras; uma VLAN sem políticas apenas agrupa dispositivos. O hardening sem inventário e sem padrão documentado vira prática dependente de cada profissional, e não um controle repetível. A regra gerencial é que cada zona tenha o mínimo de privilégio necessário.",
      "especialista": "O especialista projeta zonas com o menor privilégio possível, define ACLs de leste-oeste restritas, padroniza o hardening por classe de servidor e documenta exceções com responsável e prazo. Combina segmentação, hardening, detecção e resposta em defesa em profundidade, de modo que a falha de um controle seja coberta por outro, sem depender de uma única camada."
    },
    "comparacoes": [
      {
        "tema": "Rede plana versus rede segmentada",
        "a": {
          "rotulo": "Rede plana (sem segmentação)",
          "texto": "Todos os dispositivos estão na mesma zona de broadcast; um dispositivo infectado alcança automaticamente servidores e estações, maximizando o blast radius e a movimentação lateral."
        },
        "b": {
          "rotulo": "Rede segmentada (zonas com ACL)",
          "texto": "A rede é dividida em zonas com políticas de tráfego entre elas; apenas o tráfego necessário é permitido, contendo o comprometimento de uma zona."
        },
        "diferencaGabarito": "Na rede plana não há barreira interna, então o alcance do dano é total; na rede segmentada, o controle entre zonas limita o dano ao escopo da zona comprometida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Segmentar a rede significa criar VLANs e nada mais.",
        "porqueErrada": "Uma VLAN sem políticas entre zonas apenas agrupa dispositivos; não controla o tráfego de leste-oeste, então não contém o comprometimento.",
        "versaoCorreta": "Errado. VLAN sem políticas entre zonas apenas agrupa; segmentação efetiva exige controle de tráfego entre as zonas (ACLs/firewall), monitoramento e revisão de regras."
      },
      {
        "afirmacaoEquivocada": "Hardening de servidor consiste apenas em trocar a senha padrão de fábrica.",
        "porqueErrada": "Trocar a senha padrão é só um passo; o hardening é um conjunto de ações que inclui desabilitar serviços, aplicar correções, restringir privilégios e registrar eventos.",
        "versaoCorreta": "Errado. Trocar a credencial padrão é um passo básico, mas o hardening abrange desabilitar serviços e portas, aplicar correções, restringir privilégios, remover software supérfluo e ativar registro de eventos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Segmentação de rede",
        "VLAN com ACL",
        "Blast radius",
        "Hardening",
        "Superfície de ataque"
      ],
      "regras": [
        "Desabilitar serviços, portas e contas não necessários",
        "Trocar credenciais padrão de fábrica",
        "Aplicar correções de sistema e aplicativo",
        "Restringir privilégios e ativar registro de eventos"
      ],
      "comparacoes": [
        "Rede plana expõe todos os dispositivos; rede segmentada contém o comprometimento na zona"
      ],
      "fluxos": [
        "Inventário de serviços → desativar o não necessário → corrigir → credenciais fortes → filtro de gestão → registro e backup → varredura de verificação"
      ],
      "excecoes": [
        "Hardening sem inventário e padrão documentado vira prática dependente de cada profissional, não um controle repetível"
      ],
      "palavrasChave": [
        "segmentação",
        "VLAN",
        "ACL",
        "hardening",
        "blast radius",
        "servidor",
        "credencial",
        "privilégio"
      ],
      "checklist": [
        "Dividir a rede em zonas por função",
        "Permitir apenas o tráfego necessário entre zonas",
        "Desabilitar serviços, portas e contas não necessários",
        "Trocar credenciais padrão de fábrica",
        "Aplicar correções de sistema e aplicativo",
        "Restringir acesso à gestão à rede administrativa",
        "Registrar eventos e fazer backup da configuração",
        "Executar varredura de verificação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Estação infectada alcança automaticamente todos os servidores da rede. Que falha arquitetural permitiu e como corrigir?",
        "dados": "Rede plana sem segmentação; estação alcança servidores de aplicação, banco de dados e porta de gestão sem restrição.",
        "conceitos": [
          "Segmentação de rede",
          "Blast radius"
        ],
        "estrategia": "Identificar a ausência de segmentação como falha arquitetural e definir zonas com ACL/firewall que permitam apenas o tráfego necessário.",
        "execucao": [
          "Reconhecer que a rede plana permite alcance irrestrito da estação infectada",
          "Definir zonas separando estações de servidores e banco de dados",
          "Aplicar ACL/firewall entre zonas permitindo só o necessário (ex.: estação → servidor web porta 443)",
          "Negar acesso da estação à porta de gestão do banco de dados"
        ],
        "resultado": "Ausência de segmentação: a rede plana faz da estação porta de entrada para tudo. Corrigir com zonas (estações X servidores) e ACL/firewall entre elas, permitindo apenas o tráfego necessário — por exemplo, estação fala com servidor web na porta 443, nunca com a porta de gestão do banco.",
        "justificativa": "Sem segmentação não há barreira interna, então o dano se espalha por toda a rede; com zonas e ACLs o comprometimento fica contido na zona da estação.",
        "errosFrequentes": [
          "Achar que criar VLANs por si só já segmenta a rede",
          "Esquecer de controlar o tráfego de leste-oeste entre as zonas"
        ],
        "variacao": "Um servidor de aplicação alcança diretamente a porta de gestão do banco de dados. Qual controle corrige?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um dispositivo IoT de vídeo deve ficar na rede do órgão. Como segmentá-lo e quais controles aplicar?",
        "dados": "Dispositivo IoT de vídeo (câmera); servidor de gravação; Internet opcional; estações e servidores da zona de dados devem ser bloqueados.",
        "conceitos": [
          "Zona própria para dispositivos",
          "ACL de rede",
          "Credencial padrão"
        ],
        "estrategia": "Criar uma VLAN dedicada para o dispositivo com acesso restrito ao servidor de gravação e, se indispensável, à Internet, negando estações e servidores; trocar credencial, atualizar firmware e restringir gestão.",
        "execucao": [
          "Criar VLAN própria para dispositivos de vídeo",
          "Permitir acesso apenas ao servidor de gravação e, se indispensável, à Internet",
          "Negar acesso do dispositivo a estações e servidores da zona de dados",
          "Trocar credencial padrão, atualizar firmware e restringir gestão à rede administrativa"
        ],
        "resultado": "Zona própria (VLAN de dispositivos) com acesso somente ao servidor de gravação e à Internet se indispensável, negado para estações e servidores; credencial padrão trocada; firmware atualizado; gestão restrita à rede administrativa. Assim, comprometimento da câmera não abre caminho para a zona de dados.",
        "justificativa": "Isolando o IoT em zona própria com tráfego mínimo, um comprometimento da câmera não alcança a zona de dados, limitando o blast radius.",
        "errosFrequentes": [
          "Colocar o dispositivo IoT na mesma VLAN das estações de trabalho",
          "Manter a credencial padrão de fábrica do dispositivo"
        ],
        "variacao": "Uma impressora de rede deve acessar apenas o servidor de impressão. Como segmentá-la?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Segmentar a rede significa criar VLANs e nada mais.' Avalie se está correta.",
        "dados": "Alegação de que segmentação se resume à criação de VLANs, sem controle de tráfego entre zonas.",
        "conceitos": [
          "VLAN",
          "Segmentação de rede",
          "ACL/firewall entre zonas"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que VLAN apenas agrupa e que segmentação efetiva exige controle de tráfego entre zonas.",
        "execucao": [
          "Reconhecer que a VLAN agrupa dispositivos em um domínio de broadcast",
          "Identificar que, sem ACL/firewall, o tráfego entre VLANs é livre",
          "Concluir que segmentação exige controle de tráfego entre zonas, monitoramento e revisão de regras"
        ],
        "resultado": "Errado. Criar VLANs apenas agrupa dispositivos; segmentação efetiva requer controle de tráfego entre zonas com ACLs/firewall, além de monitoramento e revisão periódica de regras.",
        "justificativa": "A VLAN por si só não impede a comunicação entre zonas; só o controle de tráfego (ACL/firewall) contém o comprometimento.",
        "errosFrequentes": [
          "Equivaler segmentação à criação de VLANs sem políticas de tráfego",
          "Assumir que dispositivos em VLANs diferentes estão isolados sem ACL"
        ],
        "variacao": "Afirmação: 'Criar três VLANs para estações, servidores e convidados já é segmentação completa.'"
      }
    ]
  },
  "m4-u2-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A gestão de vulnerabilidades é um ciclo contínuo — inventário, varredura, priorização, correção e verificação — e não apenas aplicar patches. Em concursos, aparece em priorização por risco (severidade + exposição + explorabilidade), CVE, janela de manutenção e aceite formal. Priorizar só pela nota do scanner ou tratar mitigação como solução definitiva leva ao gabarito errado.",
      "preRequisitos": [
        "Noção de ativo de TI e quem é o responsável por ele",
        "O que é uma vulnerabilidade e um CVE",
        "Noção de patch, mitigação e aceite de risco",
        "Noção de severidade e de exposição de um ativo à Internet"
      ],
      "objetivosObservaveis": [
        "Descrever o ciclo inventário–varredura–priorização–correção–verificação",
        "Priorizar vulnerabilidades combinando severidade, exposição e explorabilidade",
        "Diferenciar correção (patch), mitigação e aceite formal de risco",
        "Explicar por que toda decisão deve ser registrada com responsável e prazo"
      ],
      "competencias": [
        "Raciocínio de risco: combinar severidade técnica com contexto do órgão",
        "Julgamento operacional: decidir entre corrigir, mitigar ou aceitar",
        "Documentação: registrar decisões de risco com responsável e prazo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — hardening reduz a superfície e se relaciona com correção",
        "m4-u2-t4-s3 (Defesa em profundidade) — correção de vulnerabilidades é camada de controle",
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — endpoints são ativos do inventário e exigem correção"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de TI e segurança, com o ciclo de gestão de vulnerabilidades, priorização por risco, CVE e aceite formal, com peso médio por combinar conceito e gestão."
      }
    },
    "niveis": {
      "iniciante": "Gestão de vulnerabilidades é um processo contínuo em cinco etapas: 1) inventário de ativos (o que existe, quem é dono, onde roda); 2) varredura periódica com scanner atualizado e, para aplicações, avaliação específica; 3) priorização; 4) correção (patch, mitigação ou aceite formal); 5) verificação de que a correção funcionou. Priorização não é só severidade técnica.",
      "intermediario": "Priorização combina severidade (impacto potencial), exposição (o ativo está na Internet? trata dados sensíveis?) e explorabilidade (existe exploração conhecida e facilitada?). Identificadores CVE padronizam a referência, mas não substituem o contexto do órgão. Nem todo patch entra imediatamente: pode quebrar aplicação legítima, por isso usam-se janelas de manutenção, testes em homologação e, quando o risco de não corrigir supera o de corrigir, correção de emergência.",
      "avancado": "Quando o patch não existe ou não pode ser aplicado, usa-se mitigação alternativa: desativar função afetada, restringir acesso ou compensar com outro controle. Toda decisão — corrigir, mitigar ou aceitar — deve ser registrada com responsável e prazo; aceite implícito não é gestão. O risco aceito deve ser monitorado e revisado periodicamente.",
      "especialista": "O especialista constrói o ciclo com inventário confiável, scanners atualizados e critério de priorização documentado. Define janelas de manutenção, ambiente de homologação equivalente e processo de correção emergencial justificada. Acompanha indicadores de exploração e revisa riscos aceitos, garantindo que a mitigação temporária não se torne permanente."
    },
    "comparacoes": [
      {
        "tema": "Correção por patch versus mitigação temporária",
        "a": {
          "rotulo": "Correção (patch)",
          "texto": "Remove a vulnerabilidade na origem ao aplicar a correção do fornecedor; é a solução definitiva quando não quebra a aplicação."
        },
        "b": {
          "rotulo": "Mitigação temporária",
          "texto": "Reduz o risco sem remover a vulnerabilidade (desativar função, restringir acesso); usada enquanto o patch não pode ser aplicado, com registro e prazo."
        },
        "diferencaGabarito": "O patch elimina a vulnerabilidade; a mitigação apenas reduz a exposição na janela até a correção definitiva e exige registro formal com prazo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Aplicar todos os patches no dia da publicação é sempre a conduta correta.",
        "porqueErrada": "Patches podem quebrar aplicações em produção; por isso a conduta é priorizar por risco, testar quando possível e registrar as decisões, admitindo correção emergencial justificada quando a exposição é iminente.",
        "versaoCorreta": "Errado como regra absoluta. Patches podem quebrar aplicações; a conduta é priorizar por risco, testar quando possível e registrar decisões — incluindo correção emergencial justificada quando a exposição é iminente."
      },
      {
        "afirmacaoEquivocada": "Priorizar vulnerabilidades apenas pela severidade técnica do scanner é suficiente.",
        "porqueErrada": "A severidade sozinha ignora exposição e explorabilidade; uma vulnerabilidade crítica em ativo sem exposição pode ser menos urgente que uma de severidade média em servidor com dados sensíveis na Internet.",
        "versaoCorreta": "Errado. Priorização combina severidade com exposição do ativo e explorabilidade; a nota do scanner por si só não define a ordem de correção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Inventário de ativos",
        "Varredura de vulnerabilidades",
        "CVE",
        "Priorização por risco",
        "Mitigação",
        "Aceite formal de risco"
      ],
      "regras": [
        "Combinar severidade com exposição e explorabilidade na priorização",
        "Testar o patch em ambiente de homologação antes de aplicar",
        "Registrar toda decisão (corrigir, mitigar, aceitar) com responsável e prazo",
        "Usar janela de manutenção para correções em produção"
      ],
      "comparacoes": [
        "Patch remove a vulnerabilidade; mitigação reduz o risco temporariamente com registro e prazo"
      ],
      "fluxos": [
        "Inventário → varredura → priorização → correção/mitigação/aceite → verificação da correção"
      ],
      "excecoes": [
        "Nem todo patch entra imediatamente; pode quebrar aplicação legítima, exigindo correção emergencial ou mitigação temporária"
      ],
      "palavrasChave": [
        "vulnerabilidade",
        "CVE",
        "patch",
        "priorização",
        "mitigação",
        "aceite",
        "explorabilidade",
        "exposição"
      ],
      "checklist": [
        "Manter inventário de ativos atualizado com responsáveis",
        "Executar varredura periódica com scanner atualizado",
        "Priorizar por severidade, exposição e explorabilidade",
        "Testar patches em homologação antes da produção",
        "Registrar decisões de risco com responsável e prazo",
        "Verificar que a correção funcionou"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Vulnerabilidade crítica foi encontrada em servidor de aplicação exposto à Internet com dados pessoais. Como priorizar frente a outras da mesma semana?",
        "dados": "Servidor de aplicação exposto à Internet; armazena dados pessoais; vulnerabilidade classificada como crítica pelo scanner; outras vulnerabilidades da mesma semana aguardam correção.",
        "conceitos": [
          "Priorização por risco",
          "Exposição de ativo",
          "Dados sensíveis"
        ],
        "estrategia": "Priorizar pelo risco combinado — severidade alta mais exposição externa mais dados sensíveis — e não apenas pela nota do scanner.",
        "execucao": [
          "Identificar severidade alta da vulnerabilidade",
          "Confirmar exposição do servidor à Internet",
          "Confirmar que o ativo armazena dados pessoais (sensíveis)",
          "Atribuir prioridade máxima e registrar a decisão com responsável e prazo"
        ],
        "resultado": "Prioridade máxima: severidade alta + exposição externa + dados sensíveis + exploração facilitada. O critério de priorização documentado deve refletir essa combinação, e não apenas a nota do scanner.",
        "justificativa": "A combinação de severidade, exposição e sensibilidade dos dados define o risco real, então esse item passa à frente de vulnerabilidades menos expostas mesmo com nota similar.",
        "errosFrequentes": [
          "Priorizar apenas pela nota crítica do scanner sem considerar exposição",
          "Deixar de registrar a decisão de priorização com responsável e prazo"
        ],
        "variacao": "Duas vulnerabilidades críticas: uma em servidor interno sem Internet, outra em servidor externo com dados públicos. Qual corrigir primeiro?"
      },
      {
        "tipo": "aplicacao",
        "problema": "O patch disponível quebra módulo legado sem substituição prevista. Qual o caminho correto?",
        "dados": "Patch disponível para vulnerabilidade; módulo legado sem substituição prevista; quebrar o módulo impacta operação do órgão.",
        "conceitos": [
          "Mitigação",
          "Aceite formal de risco",
          "Homologação"
        ],
        "estrategia": "Testar em homologação; se quebrar, aplicar mitigação, registrar risco aceito com responsável e prazo, e planejar substituição do legado.",
        "execucao": [
          "Testar o patch em ambiente de homologação equivalente",
          "Confirmar que o patch quebra o módulo legado",
          "Aplicar mitigação temporária: restringir acesso ao componente ou desativar função afetada",
          "Registrar risco aceito formalmente com responsável e prazo; planejar substituição do legado"
        ],
        "resultado": "Testar em ambiente de homologação; se quebrar, aplicar mitigação (restringir acesso ao componente, desativar função afetada), registrar risco aceito formalmente com responsável e prazo, planejar substituição do legado e monitorar indicadores de exploração. Registro é obrigatório: aceite implícito não é gestão.",
        "justificativa": "Quando o patch não pode ser aplicado sem quebrar a operação, a mitigação reduz o risco na janela e o registro formal impede que a exceção vire permanência.",
        "errosFrequentes": [
          "Aplicar o patch direto na produção sabendo que quebra o legado",
          "Tratar o aceite de risco como algo implícito, sem registro de responsável e prazo"
        ],
        "variacao": "O patch corrige a vulnerabilidade mas degrada o desempenho do sistema em 40%. Qual a conduta?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Aplicar todos os patches no dia da publicação é sempre a conduta correta.' Avalie se está correta.",
        "dados": "Alegação de que todo patch deve ser aplicado no dia da publicação, sem exceção, independentemente de impacto na aplicação.",
        "conceitos": [
          "Patch",
          "Janela de manutenção",
          "Homologação"
        ],
        "estrategia": "Desconstruir a afirmação absoluta mostrando que patches podem quebrar aplicações e que a conduta é priorizar por risco e testar.",
        "execucao": [
          "Reconhecer que aplicar patches no dia da publicação não é regra absoluta",
          "Identificar que patches podem quebrar aplicações legítimas",
          "Concluir que a conduta é priorizar por risco, testar quando possível e registrar decisões"
        ],
        "resultado": "A leitura ingênua instala o patch no dia da publicação sem teste e quebra o módulo legado em produção: aplicar patches imediatamente não é regra absoluta. A conduta é priorizar por risco, testar quando possível e registrar a decisão, com correção emergencial apenas quando a exposição é iminente.",
        "justificativa": "A aplicação imediata sem teste pode causar mais dano que a vulnerabilidade, especialmente em sistemas legítimos que dependem do comportamento alterado.",
        "errosFrequentes": [
          "Achar que todo patch deve ser instalado no dia da publicação sem exceção",
          "Confundir correção de emergência com aplicação imediata sem teste"
        ],
        "variacao": "Afirmação: 'Mitigação é sempre preferível a aplicar um patch, porque é mais segura.'"
      }
    ]
  },
  "m4-u2-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Defesa em profundidade sobrepõe camadas independentes de controle, de modo que a falha de uma seja coberta por outra — não é duplicar o mesmo controle. Em concursos de segurança, aparece em camadas de natureza diferente, pressuposto de que a intrusão ocorrerá e casca dura com miolo mole. Achar que dois firewalls iguais em série são profundidade leva ao gabarito errado.",
      "preRequisitos": [
        "Noção de firewall, WAF e IDS/IPS",
        "Noção de autenticação e MFA",
        "Noção de criptografia e backup",
        "Noção de phishing e engenharia social"
      ],
      "objetivosObservaveis": [
        "Argumentar pela sobreposição de camadas de controle independentes",
        "Demonstrar como uma falha isolada não compromete o todo",
        "Diferenciar defesa em profundidade (camadas diversas) de duplicar o mesmo controle",
        "Exemplar camadas: perímetro, rede, endpoint, aplicação, dados e pessoas"
      ],
      "competencias": [
        "Visão sistêmica: enxergar o ataque como caminho que atravessa controles",
        "Avaliação de custo-benefício: escolher camadas com base no risco",
        "Análise de cenários: rastrear como cada camada bloqueia um caminho de ataque"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u2-t4-s1 (Segmentação de rede e hardening) — segmentação e hardening são camadas de rede/endpoint",
        "m4-u2-t4-s2 (Gestão de vulnerabilidades e correções) — correção é camada de endpoint",
        "m4-u2-t3-s3 (Antivírus, EDR e proteção de endpoints) — EDR é camada de endpoint com detecção e resposta"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central do conteúdo programático de segurança, com defesa em profundidade, camadas de controle, pressuposto de intrusão e custo-benefício, com peso médio por combinar arquitetura e gestão de risco."
      }
    },
    "niveis": {
      "iniciante": "Defesa em profundidade é o princípio de empregar múltiplas camadas independentes de controle, de modo que a falha de uma camada seja coberta por outra. Não se trata de duplicar o mesmo controle, mas de combinar controles de naturezas diferentes ao longo do caminho do ataque: perímetro (firewall, WAF), rede (segmentação, IDS/IPS), endpoint (EDR, correções), aplicação (validação de entrada, autenticação), dados (criptografia, backup imutável) e pessoas (treinamento, procedimentos).",
      "intermediario": "Exemplo de caminhos cobertos: phishing que escapa do filtro de e-mail esbarra em MFA; credencial vazada que autentica é limitada por menor privilégio e segmentação; movimentação lateral é vista pelo IDS e pelo monitoramento de registros; cifragem por ransomware é neutralizada por backup imutável fora do alcance. Cada camada tem preço (licença, operação, desempenho), então a escolha segue o risco mapeado.",
      "avancado": "Custo-benefício: profundidade uniforme sem análise de risco desperdiça recursos; profundidade só no perímetro cria a casca dura com miolo mole. O princípio complementar pressupõe que a intrusão ocorrerá — por isso detecção e resposta são parte da profundidade, não opcional. Cada camada deve ter um propósito distinto no caminho do atacante.",
      "especialista": "O especialista desenha o pacote mínimo de camadas com justificativa de risco para cada uma e metas mensuráveis, combinando prevenção, detecção e recuperação. Acompanha indicadores de cada camada, revisa sobreposições redundantes e garante que a falha de um controle seja absorvida por outra sem comprometer o todo."
    },
    "comparacoes": [
      {
        "tema": "Duplicar controle versus camadas independentes",
        "a": {
          "rotulo": "Duplicar o mesmo controle",
          "texto": "Dois firewalls iguais em série: a mesma falha ou ataque que atravessa um atravessa o outro, não criando camada nova."
        },
        "b": {
          "rotulo": "Camadas independentes (defesa em profundidade)",
          "texto": "Controles de naturezas diferentes (ex.: MFA + segmentação + backup + monitoramento); a falha de uma é coberta pela outra."
        },
        "diferencaGabarito": "Duplicar igual não acrescenta proteção; profundidade exige controles de naturezas distintas, de modo que uma falha não comprometa o todo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Defesa em profundidade significa ter dois firewalls iguais em série.",
        "porqueErrada": "Repetir o mesmo controle não cria uma camada nova de defesa: a mesma falha ou o mesmo ataque que atravessa um atravessa o outro. Profundidade exige controles de naturezas distintas.",
        "versaoCorreta": "A defesa em profundidade combina controles de naturezas distintas, de modo que a falha de um seja coberta por outro; dois filtros idênticos em série apenas repetem a mesma barreira."
      },
      {
        "afirmacaoEquivocada": "Defesa em profundidade é só prevenção: impedir o ataque de entrar.",
        "porqueErrada": "A profundidade pressupõe que a intrusão ocorrerá, então detecção e resposta são parte dela, não opcional; sem detecção, uma camada rompida deixa o atacante livre.",
        "versaoCorreta": "Errado. A defesa em profundidade pressupõe que a intrusão ocorrerá, por isso detecção e resposta são parte da profundidade, e não apenas prevenção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Defesa em profundidade",
        "Camadas independentes",
        "Pressuposto de intrusão",
        "Casca dura com miolo mole",
        "Detecção e resposta"
      ],
      "regras": [
        "Combinar controles de naturezas diferentes ao longo do caminho do ataque",
        "Cada camada deve ter um propósito distinto",
        "Detecção e resposta são parte da profundidade, não opcional",
        "Escolher camadas com base no risco mapeado"
      ],
      "comparacoes": [
        "Dois firewalls iguais não são profundidade; MFA + segmentação + backup + monitoramento são"
      ],
      "fluxos": [
        "Ataque tenta perímetro → falha → camada seguinte bloqueia → detecção e resposta contêm o dano"
      ],
      "excecoes": [
        "Profundidade uniforme sem análise de risco desperdiça recursos; profundidade só no perímetro cria casca dura com miolo mole"
      ],
      "palavrasChave": [
        "defesa em profundidade",
        "camada",
        "perímetro",
        "endpoint",
        "dados",
        "pessoas",
        "intrusão",
        "detecção"
      ],
      "checklist": [
        "Mapear caminhos de ataque do perímetro aos dados",
        "Escolher camadas de natureza distinta para cada caminho",
        "Combinar prevenção, detecção e recuperação",
        "Justificar cada camada com base no risco",
        "Testar que uma falha de camada é coberta por outra",
        "Revisar sobreposições redundantes e custo-benefício"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Liste três camadas independentes que impedem o roubo de senha de um servidor público.",
        "dados": "Servidor público; risco de roubo de senha; três camadas de natureza diferente necessárias.",
        "conceitos": [
          "Camadas independentes",
          "MFA",
          "Filtro de e-mail"
        ],
        "estrategia": "Apresentar camadas de naturezas diferentes (pessoas, autenticação e rede) que juntas impedem o roubo de senha.",
        "execucao": [
          "Camada de pessoas: filtro de e-mail e treinamento reduzem phishing",
          "Camada de autenticação: MFA resistente a phishing impede uso da senha roubada sozinha",
          "Camada de rede: restrição de origem e monitoramento de login anômalo contêm tentativa residual"
        ],
        "resultado": "1) Filtro de e-mail e treinamento (reduzem phishing). 2) MFA resistente a phishing (impede uso da senha roubada sozinha). 3) Restrição de origem e monitoramento de login anômalo (contêm tentativa residual). Camadas de naturezas diferentes: pessoas, autenticação e rede.",
        "justificativa": "Cada camada atua em um ponto diferente do caminho do ataque, de modo que o falhamento de uma ainda é contido pela outra.",
        "errosFrequentes": [
          "Listar três camadas do mesmo tipo (ex.: três firewalls)",
          "Esquecer que as camadas devem ser de naturezas distintas"
        ],
        "variacao": "Liste três camadas independentes que impedem a infecção por ransomware em uma estação de trabalho."
      },
      {
        "tipo": "aplicacao",
        "problema": "A gestão pede concentrar orçamento em um único controle 'que resolva o problema'. Como argumentar tecnicamente?",
        "dados": "Gestão quer um único controle; orçamento limitado; necessidade de demonstrar que nenhum controle único cobre todos os caminhos de ataque.",
        "conceitos": [
          "Caminhos de ataque",
          "Custo-benefício",
          "Pacote mínimo de camadas"
        ],
        "estrategia": "Apresentar mapa de caminhos de ataque mostrando que nenhum controle único cobre todos; propor pacote mínimo com MFA, correção priorizada, segmentação, backup imutável e monitoramento.",
        "execucao": [
          "Apresentar o mapa de caminhos de ataque do órgão",
          "Mostrar que nenhum controle único cobre todos os caminhos",
          "Propor pacote mínimo: MFA, correção priorizada, segmentação básica, backup imutável testado, monitoramento",
          "Combinar prevenção, detecção e recuperação com justificativa de risco e metas mensuráveis"
        ],
        "resultado": "Apresentar o mapa de caminhos de ataque: nenhum controle único cobre todos os caminhos. Propor pacote mínimo com MFA, correção priorizada, segmentação básica, backup imutável testado e monitoramento — combinando prevenção, detecção e recuperação —, com justificativa de risco para cada camada e metas mensuráveis.",
        "justificativa": "Sem sobreposição de camadas, um único ponto de falha compromete tudo; com o pacote mínimo, cada caminho de ataque é coberto por mais de uma camada.",
        "errosFrequentes": [
          "Aceitar concentrar orçamento em um único controle",
          "Esquecer de incluir detecção e recuperação, não só prevenção"
        ],
        "variacao": "A gestão quer comprar um firewall de última geração e cortar todos os outros controles de segurança. Qual o argumento?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Defesa em profundidade significa ter dois firewalls iguais em série.' Avalie se está correta.",
        "dados": "Alegação de que defesa em profundidade é duplicar o mesmo controle (dois firewalls iguais em série).",
        "conceitos": [
          "Duplicar controle",
          "Camadas independentes",
          "Defesa em profundidade"
        ],
        "estrategia": "Desconstruir a afirmação mostrando que repetir o mesmo controle não cria camada nova e que profundidade exige controles de naturezas distintas.",
        "execucao": [
          "Reconhecer que repetir o mesmo controle não cria camada nova",
          "Identificar que a mesma falha atravessa ambos os firewalls iguais",
          "Concluir que profundidade exige controles de naturezas distintas ao longo do caminho do ataque"
        ],
        "resultado": "Errado. Dois firewalls iguais em série não criam camada nova: a mesma falha que atravessa um atravessa o outro. Profundidade exige controles de naturezas distintas.",
        "justificativa": "Dois firewalls iguais compartilham a mesma superfície de falha, então um ataque que passa um passa o outro; apenas camadas diversas contêm o dano.",
        "errosFrequentes": [
          "Achar que mais do mesmo já é defesa em profundidade",
          "Confundir quantidade de controles com diversidade de camadas"
        ],
        "variacao": "Afirmação: 'Instalar antivírus em duas estações diferentes já é defesa em profundidade.'"
      }
    ]
  },
  "m4-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "As três variantes exploram a confiança da vítima e se separam pelo volume de alvos e pelo grau de personalização. Essa distinção define a defesa: filtro e treinamento contra o ataque em massa, verificação de procedimento contra a fraude dirigida a lideranças.",
      "preRequisitos": [
        "Conceito de engenharia social como exploração de fatores humanos",
        "Leitura de endereços de e-mail e noção de domínio",
        "Uso de MFA e de verificação por canal independente"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário descrito como phishing, spear phishing ou whaling pelo critério de alvo e personalização",
        "Enumerar indicadores verificáveis de uma tentativa a partir de um cabeçalho ou mensagem",
        "Justificar por que erros de ortografia são indic fraco em ataques direcionados"
      ],
      "competencias": [
        "Leitura crítica de mensagens antes de agir",
        "Verificação de autoria por canal distinto do usado pelo remetente",
        "Aplicação de procedimento institucional sob pressão de urgência"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — distingue persuasão por mensagem de redirecionamento técnico",
        "m4-u3-t1-s3 (Pretexting, baiting e princípios de manipulação) — detalha os princípios psicológicos usados na mensagem",
        "m4-u3-t2-s1 (Força bruta, password spraying e credential stuffing) — a credencial obtida alimenta esses ataques"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia phishing, spear phishing e whaling integra o programa usual de segurança e é cobrada em itens que descrevem cenário e pedem a técnica. Classificação qualitativa de frequência, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Phishing é a fraude de massa em que alguém se passa por entidade confiável para induzir a entrega de credenciais, dados ou a execução de uma ação (pagamento, habilitação de macro, instalação de programa). Caracteriza-se por imitação de aparência, apelo emocional e urgência, enviada a grande volume por e-mail, SMS ou mensagens.",
      "intermediario": "Spear phishing é a versão direcionada: o atacante pesquisa o alvo — site do órgão, lista de servidores, redes sociais — e personaliza a mensagem com remetente plausível, referência a processo real e anexo de nome corriqueiro. A taxa de sucesso sobe porque o conteúdo deixa de ser genérico e passa a dialogar com a rotina do destinatário.",
      "avancado": "Whaling é o spear phishing voltado a autoridades e altas lideranças, em que o ganho e o impacto institucional são maiores e o disfarce usa agendas, decisões e ritos do alto escalão. Os indicadores verificáveis incluem remetente divergente do domínio real, pedido fora de procedimento, link cujo texto difere do endereço e solicitação de sigilo. A defesa se apoia em filtro, MFA e dupla verificação para pagamentos.",
      "especialista": "Em falhas reais coexistem sinais: urgência artificial, pedido fora de procedimento e anexo inesperado. Erros de português são indicador frágil, pois ataques sofisticados são bem redigidos. A defesa combinada exige filtro, MFA, treinamento com simulações defensivas e procedimento de dupla verificação para pagamentos e mudanças de cadastro, com registro das tentativas para auditoria."
    },
    "comparacoes": [
      {
        "tema": "Phishing, spear phishing e whaling: público e personalização",
        "a": {
          "rotulo": "Phishing tradicional",
          "texto": "Mensagem genérica, pouca ou nenhuma pesquisa sobre o destinatário, distribuição em massa por e-mail ou SMS. O sucesso depende do volume: muitos alvos, taxa de conversão pequena. Filtros e reputação de domínio bastam para barrar a maior parte."
        },
        "b": {
          "rotulo": "Spear phishing e whaling",
          "texto": "Mensagem construída a partir de dados reais do alvo, com poucos destinatários ou um único alvo de alto escalão. A aparência de rotina institucional reduz a desconfiança e a defesa passa pela verificação de procedimento."
        },
        "diferencaGabarito": "A quantidade de alvos e o grau de personalização: o primeiro é indiscriminado e o segundo é direcionado, e a direção segue a investigação prévia feita pelo atacante sobre o alvo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Whaling se distingue do spear phishing apenas por visar servidores com maior remuneração salarial.",
        "porqueErrada": "O critério classificatório é o nível hierárquico do alvo e o impacto institucional da ação induzida, não a renda individual do destinatário. Confunde o objetivo da fraude com a característica pessoal da vítima.",
        "versaoCorreta": "Whaling é o spear phishing direcionado a autoridades e altas lideranças; o que muda é o patamar do alvo e a dimensão da decisão que se pretende obter, com disfarce baseado em agendas e ritos do alto escalão."
      },
      {
        "afirmacaoEquivocada": "Mensagem sem nenhum erro de ortografia pode ser considerada legítima por ter sido redigida com cuidado.",
        "porqueErrada": "Erros gramaticais são resquício de campanhas amadoras e não constituem evidência técnica de autenticidade; ataques direcionados são revisados, e até produzidos com auxílio de ferramentas de linguagem.",
        "versaoCorreta": "A autenticidade se verifica pelo domínio remetente e pela confirmação por canal independente previamente conhecido; a qualidade textual da mensagem não é evidência válida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Phishing: imitação de entidade confiável em distribuição de massa",
        "Spear phishing: versão direcionada, com pesquisa prévia sobre o alvo",
        "Whaling: spear phishing contra autoridades e altas lideranças",
        "Indicador verificável: sinal observável na mensagem ou no canal, não suposição sobre intenção"
      ],
      "regras": [
        "Ações sensíveis exigem verificação por canal distinto do usado pelo atacante.",
        "Nenhuma verificação pode ser concluída dentro do próprio canal suspeito."
      ],
      "comparacoes": [
        "Volume elevado com personalização fraca (phishing) versus poucos alvos com personalização forte (spear phishing e whaling)."
      ],
      "fluxos": [
        "Receber mensagem com apelo urgente, inspecionar o domínio, confrontar com procedimento, confirmar por canal conhecido, decidir e relatar a tentativa."
      ],
      "excecoes": [
        "A ausência de erros de português não afasta a hipótese de phishing, e a presença deles não a confirma."
      ],
      "palavrasChave": [
        "engenharia social",
        "personalização",
        "domínio remetente",
        "urgência artificial",
        "dupla verificação",
        "canal independente"
      ],
      "checklist": [
        "O domínio do remetente corresponde ao órgão alegado?",
        "O pedido está previsto em procedimento escrito?",
        "O texto do link coincide com o endereço destino?",
        "O anexo é esperado e nominalmente identificado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Duas mensagens chegam ao setor: uma genérica a cinquenta mil endereços imitando o banco; outra personalizada ao diretor citando um processo licitatório real. Classifique as duas.",
        "dados": "Mensagem A: mesmo texto idêntico para cinquenta mil destinatários, sem menção a dado pessoal. Mensagem B: destinatário único, referência a processo licitatório em curso no órgão e nome do diretor correto no campo exibido.",
        "conceitos": [
          "Volume de envio como marcador de phishing de massa",
          "Personalização como marcador de spear phishing",
          "Nível hierárquico do alvo como marcador de whaling"
        ],
        "estrategia": "Examinar primeiro a extensão do público: número de destinatários e existência de dado específico do alvo. Depois verificar se o endereço remetente pertence ao domínio real da entidade imitada.",
        "execucao": [
          "Contar os destinatários visíveis e observar se há dado pessoal do alvo na mensagem.",
          "Confrontar o domínio do remetente com o domínio oficial da entidade.",
          "Classificar pela combinação de volume e personalização obtida."
        ],
        "resultado": "A primeira é phishing em massa: público extenso e conteúdo uniforme. A segunda é spear phishing, pois usa informação real do alvo; se o destinatário fosse a autoridade máxima do órgão, seria whaling.",
        "justificativa": "A distinção repousa sobre o grau de direcionamento: distribuir a mesma promessa em volume abrange phishing genérico, enquanto referência a processo real exige pesquisa prévia sobre o destinatário. Quando o alvo é a cúpula da instituição, o rótulo passa a whaling.",
        "errosFrequentes": [
          "Classificar como phishing qualquer fraude por e-mail, ignorando a personalização que caracteriza o spear phishing.",
          "Tratar o whaling como categoria independente do spear phishing, quando ele é um caso particular deste."
        ],
        "variacao": "Suponha que a mensagem personalizada seja enviada à ouvido e não à diretoria, sem mencionar processo algum. Reclassifique o caso e indique qual indicador verificável resta."
      },
      {
        "tipo": "aplicacao",
        "problema": "O setor financeiro recebe mensagem do suposto setor contábil pedindo troca urgente de dados bancários de fornecedor para pagamento no mesmo dia. Que verificações independentes impedem a fraude?",
        "dados": "Pedido de substituição da conta bancária de um fornecedor ativo, pagamento previsto para o dia seguinte, remetente com nome exibido do servidor da contabilidade e domínio externo divergente. Nenhum documento assinado acompanha o pedido.",
        "conceitos": [
          "Verificação por canal previamente cadastrado",
          "Regra de dupla autorização para alteração bancária",
          "Confirmação da autoria pelo domínio, não pelo nome exibido"
        ],
        "estrategia": "Suspender a execução sem responder pelo mesmo canal, confirmar a alteração com o setor contábil por telefone cadastrado ou presencialmente, e conferir o domínio do remetente. Por fim, exigir dupla autorização formal para a mudança.",
        "execucao": [
          "Registrar a tentativa e não executar a alteração bancária.",
          "Confirmar o pedido com o contábil por telefone cadastrado, sem usar o número informado na mensagem.",
          "Comparar o domínio remetente com o domínio oficial do órgão.",
          "Aplicar a dupla autorização para cadastramento da nova conta bancária."
        ],
        "resultado": "A fraude é barrada pela confirmação em outro canal, pela conferência de domínio e pela dupla autorização; nenhuma dessas verificações depende de meio fornecido pelo atacante.",
        "justificativa": "O ponto decisivo é que toda verificação legítima ocorre fora do canal controlado pelo fraudador. Confirmação por telefone cadastrado, inspeção do domínio e autorização dupla criam evidências independentes, enquanto responder ao e-mail suspeito apenas alimentaria o golpe.",
        "errosFrequentes": [
          "Usar o telefone ou link informados na própria mensagem para confirmar o pedido, o que mantém a vítima sob controle do atacante.",
          "Aceitar a alteração porque o nome exibido do remetente é conhecido, sem examinar o domínio de origem."
        ],
        "variacao": "Admita que o pedido chegue por telefone, e não por e-mail, com número aparentemente interno. Reordene as verificações e explique qual delas permanece válida."
      },
      {
        "tipo": "erro",
        "problema": "Um analista conclui que a mensagem é legítima porque não contém erros de ortografia e apresenta identidade visual compatível com a do órgão. Avalie a conclusão.",
        "dados": "Mensagem solicitando credenciais para regularizar cadastro, com logomarca do órgão reproduzida por imagem anexada, texto sem erros aparentes e remetente em domínio que difere do oficial por um caractere.",
        "conceitos": [
          "Textura e identidade visual não são prova de autoria",
          "Autenticidade depende de domínio e de canal independente",
          "Indicador frágil gerada por campanhas amadoras"
        ],
        "estrategia": "Separar aparência de autoria: comparar o endereço real do remetente, e não o rótulo exibido, e exigir confirmação por canal conhecido antes de fornecer qualquer credencial.",
        "execucao": [
          "Ler o endereço completo do remetente, ignorando o nome de exibição.",
          "Confrontar o domínio com o endereço oficial publicado do órgão.",
          "Recusar o fornecimento da credencial e relatar a tentativa pelo canal de denúncia."
        ],
        "resultado": "A conclusão do analista está errada: a correção textual e a identidade visual são reprodutíveis pelo atacante, enquanto o domínio divergente é evidência técnica de fraude.",
        "justificativa": "A leitura ingênua falha ao converter critério estético em prova de autenticidade. Autoria se estabelece por verificação de domínio e por confirmação em canal independente; erros de escrita e logomarca não integram esse conjunto de provas.",
        "errosFrequentes": [
          "Confiar na formatação da mensagem por associar cuidado visual a origem institucional.",
          "Descartar a fraude apenas porque a mensagem foi recebida em caixa corporativa com filtro antispam."
        ],
        "variacao": "Considere que o domínio seja legítimo, mas o conteúdo peça senha. Explique qual princípio continua válido e por que o canal de origem não sana o pedido indevido."
      }
    ]
  },
  "m4-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Pharming, spoofing e impersonação atacam a identificação: o primeiro corrompe a resolução de nomes, o segundo falsifica um identificador técnico e o terceiro forja uma identidade pessoal. Nos serviços públicos a distinção importa porque as defesas são distintas — política de autenticação de domínio para o e-mail, confirmação por canal cadastrado para decisões assinadas por gestores e MFA para credenciais. Questões de concurso exploram exatamente o ponto em que a leitura ingênua erra: confiar no nome exibido ou no endereço digitado.",
      "preRequisitos": [
        "Noção de resolução DNS e de arquivo de hosts",
        "Leitura de cabeçalhos e de endereços de e-mail",
        "Conceitos de MFA e de verificação por canal independente"
      ],
      "objetivosObservaveis": [
        "Diferenciar pharming de phishing pelo vetor: redirecionamento da resolução versus persuasão por mensagem",
        "Identificar formas de spoofing aplicáveis ao serviço público a partir de um cenário",
        "Indicar as defesas correspondentes a cada técnica"
      ],
      "competencias": [
        "Exame técnico do endereço exibido e do domínio remetente",
        "Recusa fundamentada de pedido fora de procedimento",
        "Articulação entre autenticação de domínio e confirmação por canal independente"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — base da persuasão por mensagem",
        "m4-u3-t1-s3 (Pretexting, baiting e princípios de manipulação) — descreve a construção do cenário fictício",
        "m4-u3-t3-s3 (Análise segura de mensagens, links e anexos) — procedimento de triagem aplicado à mensagem falsa"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A taxonomia das fraudes de identidade integra o programa usual de segurança da informação e costuma ser cobrada em itens que descrevem um vetor e pedem o nome da técnica. A carga é predominantemente conceitual e de leitura de cenário, incluindo distinções com o phishing e o spoofing de números em chamadas, sem exigir cálculos."
      }
    },
    "niveis": {
      "iniciante": "Pharming redireciona a vítima ao site falso sem que ela perceba: o endereço digitado é legítimo, mas a resolução é corrompida. Quem faz isso corrompe o cache DNS, altera o arquivo de hosts, compromete o roteador ou emprega malware local. Como a vítima visita o endereço que digitou, a fraude não depende de mensagem persuasiva.",
      "intermediario": "Spoofing é a falsificação de um identificador: endereço de e-mail, inclusive o nome exibido e, quando o domínio não é autenticado, até o próprio domínio; endereço de origem de pacotes; número de telefone em chamadas; identificação de aparelho. A falsificação só persiste enquanto não há verificação técnica da procedência.",
      "avancado": "Impersonação é falsificação de pessoa: o atacante se passa por gestor, colega ou fornecedor para obter ação, como liberação de pagamento, envio de dados ou entrega de credenciais. O e-mail sem SPF, DKIM e DMARC fica vulnerável a spoofing de domínio, e a chamada com número falsificado explora a confiança depositada na autoridade exibida.",
      "especialista": "A defesa se organiza em camadas: autenticação de domínio no e-mail, verificação por canal independente para ações sensíveis, MFA e treinamento focado em pedidos fora de fluxo. Em auditoria, a distinção importa porque o pharming deixa rastros na resolução local e o spoofing deixa divergência entre identidade exibida e identidade verificada."
    },
    "comparacoes": [
      {
        "tema": "Phishing e pharming: onde a fraude é introduzida",
        "a": {
          "rotulo": "Phishing",
          "texto": "A fraude entra pela mensagem: o atacante convence a vítima a clicar em link falso, a responder com dados ou a abrir anexo. O canal de persuasão é a comunicação, e a concretização depende da aceitação do destinatário."
        },
        "b": {
          "rotulo": "Pharming",
          "texto": "A fraude entra na infraestrutura de resolução: o usuário digita o endereço correto e, ainda assim, chega a uma cópia do site. A entrega da senha acontece no destino errado sem que o usuário tenha aceitado nada."
        },
        "diferencaGabarito": "O phishing convence por mensagem; o pharming compromete o caminho até o site legítimo, de modo que o desvio ocorre sem participação consciente da vítima."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pharming exige que o usuário clique em link de mensagem fraudulenta para ser bem-sucedido.",
        "porqueErrada": "O vetor é o redirecionamento provocado por envenenamento de cache DNS, alteração do arquivo de hosts, comprometimento de roteador ou malware local. A leitura incorreta atribui ao pharming uma etapa de persuasão que não lhe é necessária.",
        "versaoCorreta": "No pharming a vítima digita o endereço correto e a resolução é corrompida antes da requisição, tornando o ataque bem-sucedido sem que haja mensagem nem clique em link enviado pelo atacante."
      },
      {
        "afirmacaoEquivocada": "Falsificar o número de chamada exibido no telefone do destinatário configura crime de assédio praticado por meios digitais.",
        "porqueErrada": "Confunde o objeto falsificado com o efeito da conduta: o que se manipula é o identificador técnico do originador, e não a intimidade da vítima. O número forjado apenas explora a confiança no número que aparece na tela.",
        "versaoCorreta": "A falsificação do número de chamada é hipótese de spoofing de identificador, prática que se aproxima da impersonação quando serve para se passar por autoridade ou instituição conhecida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pharming: redirecionamento por corrupção da resolução de nomes",
        "Spoofing: falsificação de identificador técnico, como endereço e número",
        "Impersonação: falsificação de identidade pessoal para obter ação",
        "SPF, DKIM e DMARC: mecanismos de verificação da autoria do e-mail"
      ],
      "regras": [
        "A autoria de um e-mail se verifica pelo domínio, e não pelo nome exibido.",
        "Ação sensível exige confirmação por canal previamente cadastrado e distinto do usado no pedido."
      ],
      "comparacoes": [
        "No pharming o desvio ocorre na infraestrutura, antes da requisição; no phishing o desvio ocorre na mensagem que persuade a vítima."
      ],
      "fluxos": [
        "Receber pedido supostamente oficial, confrontar o domínio ou a identificação, confirmar por canal cadastrado, executar se confirmado e registrar a tentativa."
      ],
      "excecoes": [
        "Domínio legítimo não sana pedido indevido: a autoria correta não dispensa o confronto com o procedimento."
      ],
      "palavrasChave": [
        "pharming",
        "spoofing",
        "impersonação",
        "SPF",
        "DKIM",
        "DMARC",
        "canal independente"
      ],
      "checklist": [
        "O endereço digitado confere com o destino realmente acessado?",
        "O domínio remetente é verificável e corresponde ao órgão?",
        "O pedido está previsto no procedimento institucional?",
        "A confirmação foi feita por canal previamente cadastrado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O servidor digita o endereço correto do portal do órgão e chega a uma cópia idêntica que solicita login. Trata-se de phishing ou de pharming?",
        "dados": "Acesso iniciado pela digitação do endereço oficial, sem clique em link recebido; a página reproduz a identidade visual do portal e exige usuário e senha; a resolução do nome está sendo atendida por endereço distinto do institucional.",
        "conceitos": [
          "Vetor de redirecionamento versus vetor de persuasão",
          "Corrupção da resolução de nomes",
          "Ausência de interação prévia como sinal distintivo"
        ],
        "estrategia": "Verificar se houve interação prévia com mensagem suspeita e, na sequência, conferir o destino real da resolução do nome. Sem mensagem e com desvio na resolução, o caso é pharming.",
        "execucao": [
          "Confirmar que o acesso partiu da digitação direta do endereço.",
          "Comparar o endereço resolvido com o utilizado oficialmente pelo órgão.",
          "Inspecionar o arquivo de hosts e o cache DNS da estação em busca de alteração."
        ],
        "resultado": "Trata-se de pharming, cuja base é o redirecionamento da resolução, e não a persuasão. O indício está no endereço exibido continuar aparentemente correto e no desvio ocorrer antes do envio da senha.",
        "justificativa": "A classificação segue a origem do desvio: se a vítima é levada por mensagem, o ataque é phishing; se é levada por corrupção da resolução, é pharming. Como aqui a navegação começou pela digitação direta e a página falsa foi atingida sem interação persuasiva, o vetor é técnico e não comunicativo.",
        "errosFrequentes": [
          "Atribuir qualquer página falsa de login ao phishing, sem examinar como a vítima chegou até ela.",
          "Considerar que a aparência correta do endereço descarta a possibilidade de fraude."
        ],
        "variacao": "Imagine que o servidor tenha recebido mensagem com link disfarçado e, ao clicá-lo, chegue à mesma página falsa. Reclassifique a situação e indique qual evidência muda o diagnóstico."
      },
      {
        "tipo": "aplicacao",
        "problema": "Chega autorização por e-mail pedindo pagamento urgente, assinada pelo gestor. Como blindar o processo contra impersonação?",
        "dados": "Pedido de pagamento a fornecedor novo, valor acima do teto de rotina, remetente com nome do gestor e domínio externo divergente, justificativa de urgência e solicitação de sigilo. O servidor destinatário tem poder de liberar despesas.",
        "conceitos": [
          "Impersonação de gestor",
          "Insuficiência do e-mail como prova de autorização",
          "Autenticação de domínio e de fluxo formal"
        ],
        "estrategia": "Recusar a autorização baseada apenas em e-mail: exigir que pagamentos tramitem em sistema com autenticação forte, confirmar o pedido com o gestor por canal cadastrado e manter registro completo para auditoria.",
        "execucao": [
          "Suspender a liberação e encaminhar o pedido ao canal oficial de pagamentos.",
          "Confirmar com o gestor por meio previamente cadastrado.",
          "Verificar o domínio e conferir SPF, DKIM e DMARC do remetente.",
          "Registrar a tentativa no canal de denúncia para apuração."
        ],
        "resultado": "Com autenticação de domínio, fluxo formal de pagamento, confirmação em canal cadastrado e registro, a tentativa de impersonação não produz efeito financeiro e permanece documentada para auditoria.",
        "justificativa": "A defesa repousa em que autorização não pode se apoiar em meio falsificável. Verificar o domínio ataca o spoofing; o fluxo formal e a confirmação cadastrada atacam a falsificação da pessoa; e o registro garante rastreabilidade da tentativa.",
        "errosFrequentes": [
          "Aceitar urgência e sigilo como justificativa para dispensar o procedimento.",
          "Confirmar o pedido respondendo ao próprio e-mail ou usando telefone informado na mensagem."
        ],
        "variacao": "Admita que o pedido venha do endereço real do gestor, com domínio autenticado. Descreva qual controle adicional permanece necessário e por que ele ainda é indispensável."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor argumenta que a mensagem é oficial porque o nome exibido do remetente está correto e grafia o nome do órgão sem erro. A conclusão procede?",
        "dados": "E-mail exibindo nome do órgão e de servidor real, com endereço remetente em domínio que não pertence à instituição, sem registro SPF publicado pelo suposto remetente e anexo em formato executável.",
        "conceitos": [
          "Nome exibido como campo livremente falsificável",
          "Verificação técnica de domínio",
          "Autenticidade como resultado de verificação, não de aparência"
        ],
        "estrategia": "Desconsiderar o rótulo de exibição e examinar o endereço real e os mecanismos de autenticação do domínio, antes de tratar a mensagem como institucional.",
        "execucao": [
          "Inspecionar o endereço completo do remetente, além do nome exibido.",
          "Verificar a publicação de SPF, DKIM e DMARC do domínio de origem.",
          "Não abrir o anexo e relatar a mensagem pelo canal institucional."
        ],
        "resultado": "A conclusão não procede. O nome exibido é texto livre e falsificável; a autenticidade depende da verificação do domínio e, para ações sensíveis, de confirmação por canal independente.",
        "justificativa": "A leitura ingênua falha ao confundir forma de exibição com prova de origem. Nome exibido é preenchido pelo remetente e pode reproduzir qualquer instituição, enquanto o domínio e seus registros de autenticação permitem verificação objetiva, ainda que imperfeita, da procedência.",
        "errosFrequentes": [
          "Interpretar a grafia correta do nome do órgão como prova de origem institucional.",
          "Confundir a existência de certificado de transporte com a autenticidade do remetente."
        ],
        "variacao": "Suponha que o e-mail tenha domínio e autenticação válidos, mas anexo inesperado. Explique o que ainda assim deve ser verificado e qual princípio de procedimento continua aplicável."
      }
    ]
  },
  "m4-u3-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Pretexting e baiting deslocam o ataque da técnica para o comportamento: nenhuma falha de software é explorada, apenas a disposição humana de aceitar um cenário plausível ou uma oferta conveniente. Em concurso, o tema está no conteúdo programático em blocos de classificação de técnicas e de medidas de conscientização. Dominar a distinção entre convencer por história e atrair por isca permite acertar essas classificações e articular a defesa processual que reduz a chance de sucesso do ataque.",
      "preRequisitos": [
        "Noção de engenharia social com alvo no fator humano",
        "Identificação de autoridade, urgência e confiança em contexto institucional",
        "Conhecimento de canais oficiais de comunicação e denúncia"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário como pretexting ou baiting a partir do mecanismo de indução",
        "Relacionar o cenário ao princípio psicológico explorado pelo atacante",
        "Desenhar um ciclo de treinamento defensivo com simulação, retorno e relatório"
      ],
      "competencias": [
        "Suspeita metódica de pedidos que fogem do procedimento",
        "Comunicação de incidentes sem receio de exposição",
        "Desenho de controles processuais em vez de controles técnicos apenas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — o pretexting costuma usar a mesma mensagem como veículo",
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — a identidade forjada sustenta o cenário fictício",
        "m4-u3-t3-s3 (Análise segura de mensagens, links e anexos) — a triagem da mensagem orienta a decisão antes do relato"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A engenharia social consta dos editais de segurança da informação quase sempre em blocos de classificação de técnicas e de medidas de conscientização. As bancas tendem a apresentar um caso breve e solicitar o nome da técnica ou o princípio psicológico, com itens também sobre a postura institucional correta diante do incidente. Não há exigência de cálculo."
      }
    },
    "niveis": {
      "iniciante": "Engenharia social explora características humanas, não falhas de máquina. Pretexting é a construção de um cenário fictício crível — pesquisa, auditoria, novo colega do suporte, urgência do gestor — e a condução da vítima pelo roteiro. Baiting é a oferta física ou digital irresistível que atiça a curiosidade: pen drive abandonado na recepção, brinde com programa malicioso, cabo USB com logotipo do órgão.",
      "intermediario": "No pretexting, a vítima fornece a informação ou executa a ação porque o roteiro faz sentido; é a base da fraude do suporte técnico por telefone e do pedido urgente em nome do gestor. No baiting, a vítima inicia a ação por conta própria, atraída pela isca, o que torna a defesa mais ligada a política de uso de mídia removível do que a leitura de mensagens.",
      "avancado": "Os princípios explorados são autoridade, urgência, aparência de rotina, reciprocidade e medo de consequência. A defesa prática combina procedimentos escritos que obriguem verificação por canal independente, canal oficial de denúncia, simulações periódicas com retorno não punitivo e autorização explícita para o servidor recusar pedido fora do procedimento.",
      "especialista": "O ciclo de maturidade mede a resistência sem criminalizar quem erra: simulação com conteúdo inofensivo, medição de taxa de clique e de relato por setor, retorno imediato e reforço direcionado, com relatório gerencial de evolução temporal. O material não orienta a execução de ataques; o escopo é reconhecimento, prevenção e resposta."
    },
    "comparacoes": [
      {
        "tema": "Pretexting e baiting: o que move a vítima",
        "a": {
          "rotulo": "Pretexting",
          "texto": "O atacante fornece uma história convincente e pede algo; a vítima age porque acredita no roteiro e na figura que o apresenta. A iniciativa parte de quem ataca, e a defesa recai na verificação do pedido por canal independente."
        },
        "b": {
          "rotulo": "Baiting",
          "texto": "O atacante deposita uma isca e espera; a vítima age por curiosidade ou conveniência, sem que ninguém tenha solicitado nada. A iniciativa parte da vítima, e a defesa recai em política de mídia removível e proibição de instalar o que não foi fornecido pelo suporte."
        },
        "diferencaGabarito": "No pretexting a ação é solicitada dentro de um cenário fictício; no baiting a ação é espontânea, provocada por objeto ou oferta deixados disponíveis pelo atacante."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Funcionário que clica em mensagem de simulação deve ser identificado publicamente e penalizado para servir de exemplo.",
        "porqueErrada": "A punição pública inibe o relato de incidentes, que é justamente a informação que permite detectar campanhas em curso e avaliar a eficácia do treinamento. O efeito observado é a ocultação, não a prevenção.",
        "versaoCorreta": "A conduta defensiva correta é retorno privado, treinamento de reforço e melhoria de processo; a medição de resultados deve ser gerencial e por setor, sem exposição individual."
      },
      {
        "afirmacaoEquivocada": "Pen drive encontrado na recepção pode ser usado no computador do órgão desde que seja feita verificação antivírus antes.",
        "porqueErrada": "A varredura por assinatura não detecta código desconhecido, e o simples ato de conectar o dispositivo pode iniciar execução automática ou explorar falhas do driver. Tratar o objeto como suspeito é a medida eficaz.",
        "versaoCorreta": "Mídia removível de origem não confiável não deve ser conectada em nenhuma estação da instituição; o correto é entregá-la à equipe de segurança para análise em ambiente controlado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pretexting: cenário fictício crível que conduz a vítima por roteiro",
        "Baiting: isca física ou digital que provoca ação espontânea da vítima",
        "Autoridade, urgência, reciprocidade e medo como alavancas psicológicas",
        "Simulação defensiva: exercício inofensivo que mede comportamento e gera retorno"
      ],
      "regras": [
        "Pedido fora do procedimento deve ser recusado até confirmação por canal independente.",
        "Mídia removível de procedência duvidosa não é conectada a equipamentos da instituição."
      ],
      "comparacoes": [
        "Pretexting conta com pedido explícito do atacante; baiting prescinde de pedido e aposta na curiosidade da vítima."
      ],
      "fluxos": [
        "Identificar pedido suspeito, suspender a ação, confirmar por canal oficial conhecido, relatar no canal de denúncia e receber retorno com reforço."
      ],
      "excecoes": [
        "Contexto de crise ou de sobrecarga não dispensa a verificação: é justamente nele que o atacante concentra a urgência."
      ],
      "palavrasChave": [
        "pretexting",
        "baiting",
        "autoridade",
        "urgência",
        "canal independente",
        "simulação defensiva"
      ],
      "checklist": [
        "O pedido corresponde a um procedimento escrito existente?",
        "A origem foi confirmada por canal distinto do usado no contato?",
        "Há exigência de sigilo ou de decisão imediata?",
        "A tentativa foi relatada ao canal oficial de denúncia?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Alguém telefona apresentando-se como suporte interno e pede a senha do usuário para concluir uma migração. Identifique a técnica e o princípio explorado.",
        "dados": "Chamada recebida em horário de Expediente; o interlocutor declara ser do suporte técnico, alega migração de sistema em curso e solicita a senha para último ajuste; nenhum aviso prévio havia sido enviado pela equipe de TI.",
        "conceitos": [
          "Pretexting como construção de cenário fictício",
          "Autoridade e urgência como alavancas do pedido",
          "Regra institucional de que suporte legítimo não solicita senha"
        ],
        "estrategia": "Reconhecer que o pedido contraria regra básica de segurança e que o cenário serve apenas para criar pressão. A resposta correta é encerrar o contato e confirmar por iniciativa própria no canal oficial.",
        "execucao": [
          "Reconhecer que nenhum suporte legítimo solicita senha do usuário.",
          "Encerrar a ligação sem fornecer credencial alguma.",
          "Contatar o suporte pelo número institucional publicado, por iniciativa própria.",
          "Relatar a tentativa ao canal de denúncia."
        ],
        "resultado": "A técnica é pretexting, sustentada pelos princípios de autoridade e urgência. A defesa consiste em negar a senha e confirmar pelo canal oficial conhecido pelo funcionário, sem usar o contato recebido.",
        "justificativa": "O pedido de senha é incompatível com a prática de suporte porque a credencial é pessoal e intransferível. O cenário de migração funciona apenas como pressão, de modo que a verificação por canal independente desmonta a fraude sem depender de julgamento sobre a postura do interlocutor.",
        "errosFrequentes": [
          "Fornecer a senha por entender que o suporte tem autoridade legítima para solicitá-la.",
          "Aceitar a urgência alegada como razão para dispensar a verificação."
        ],
        "variacao": "Admita que a ligação parta do número realmente cadastrado do suporte e peça apenas que o usuário informe um código recebido por SMS. Explique por que a resposta continua sendo a mesma."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer medir a eficácia do treinamento contra engenharia social. Desenhe uma campanha defensiva ética.",
        "dados": "População de quinhentos servidores distribuídos em doze setores; política interna exige autorização prévia da gestão; há canal de denúncia ativo e equipe de segurança responsável pelo programa. Meta é reduzir a taxa de clique em dois trimestres.",
        "conceitos": [
          "Simulação com conteúdo inofensivo",
          "Medição por taxa de clique e taxa de relato",
          "Retorno imediato e não punitivo",
          "Reforço direcionado a grupos com pior desempeno"
        ],
        "estrategia": "Construir campanha que nunca colete credenciais reais nem distribua código malicioso, registre apenas a interação do usuário, devolva explicação imediata sobre os indicadores ignorados e produza relatório gerencial por setor e por período.",
        "execucao": [
          "Obter autorização formal da gestão e definir conteúdo fictício sem coleta de senha.",
          "Enviar mensagem inofensiva apenas a setores autorizados, com marcação clara de exercício interno.",
          "Registrar cliques e relatos, e apresentar retorno imediato ao participante.",
          "Aplicar reforço direcionado e consolidar relatório gerencial com evolução temporal."
        ],
        "resultado": "A campanha produz indicadores de taxa de clique e de relato por setor, retorno educativo imediato e relatório de evolução, sem expor indivíduos nem coletar dados sensíveis.",
        "justificativa": "A mensuração da conscientização exige exercício realista, mas simulação ética dispensa coleta de credencial e código malicioso porque o objeto medido é o comportamento de clique e relato, não a captura do segredo. O retorno imediato converte o erro em aprendizado e sustenta a cultura de reporte.",
        "errosFrequentes": [
          "Simular capturando senhas reais dos servidores, o que expõe a instituição e desrespeita a privacidade.",
          "Divulgar nominalmente quem clicou, o que reduz o relato futuro de incidentes autênticos."
        ],
        "variacao": "Imagine que a campanha seja repetida após seis meses e que dois setores mantenham taxa de clique elevada. Descreva a ação correta e o indicador que deve ser acompanhado em seguida."
      },
      {
        "tipo": "erro",
        "problema": "A gestão propõe punir publicamente o servidor que clicou na simulação, para que o exemplo dissuada os demais. A proposta é adequada sob a ótica de segurança?",
        "dados": "Caso isolado de clique em exercício autorizado, sem prejuízo material, em instituição que possui canal de denúncia oficial e registro histórico de incidentes pouco reportados por receio de repreensão.",
        "conceitos": [
          "Relato de incidente como insumo da defesa",
          "Cultura de culpa versus cultura de aprendizado",
          "Retorno privado como medida corretiva"
        ],
        "estrategia": "Avaliar a proposta pelo seu efeito sobre o comportamento futuro de relato, e não pela aparência de rigor. A consequência previsível é a ocultação de incidentes reais, que é o oposto do objetivo.",
        "execucao": [
          "Identificar que a punição pública desestimula o relato de novas tentativas.",
          "Substituir a exposição por retorno privado ao envolvido.",
          "Aplicar reforço educacional e revisar o processo que permitiu o clique.",
          "Manter a medição em nível gerencial e por setor, sem identificação individual."
        ],
        "resultado": "A proposta é inadequada. A conduta correta é retorno privado, treinamento e melhoria de processos, porque punição pública reduz o relato de incidentes, matéria-prima da defesa.",
        "justificativa": "Segurança da informação depende de comunicação rápida de tentativas para bloquear campanhas em curso. Quando relatar gera exposição, o atacante ganha silêncio; por isso a medida eficaz é a aprendizagem individual reservada combinada com indicadores gerenciais.",
        "errosFrequentes": [
          "Confundir rigor administrativo com eficácia defensiva.",
          "Desconhecer que campanhas de phishing se beneficiam da ausência de relato pelas vítimas."
        ],
        "variacao": "Considere que o clique tenha ocorrido fora de qualquer exercício autorizado, em ataque real com instalação de programa. Descreva quais providências se somam ao retorno educativo."
      }
    ]
  },
  "m4-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Força bruta, password spraying e credential stuffing integram os ataques a credenciais no conteúdo programático de segurança da informação, e a dificuldade costuma residir na distribuição das tentativas: muito volume contra uma conta, pouco volume contra muitas contas, ou nenhuma tentativa de adivinhação porque a credencial já é conhecida. Dominar essa leitura permite associar cada ataque à defesa específica — limite e bloqueio progressivo, monitoramento agregado por origem, ou MFA e senhas únicas. Errar a classificação leva a escolher o controle errado, que é exatamente o que a banca testa.",
      "preRequisitos": [
        "Estrutura de autenticação: usuário, senha e fator adicional",
        "Noção de logs de autenticação e de eventos de falha",
        "Conceito de vazamento de credenciais e reutilização de senha"
      ],
      "objetivosObservaveis": [
        "Classificar um cenário de tentativas de login segundo a distribuição das tentativas",
        "Associar cada ataque à defesa que efetivamente o neutraliza",
        "Justificar por que bloqueio por falhas consecutivas não contém password spraying"
      ],
      "competencias": [
        "Leitura de logs de autenticação em volume",
        "Distinção entre prevenção de acesso e limitação de dano",
        "Avaliação crítica de controles aparentemente suficientes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t1-s1 (Phishing, spear phishing e whaling) — captura credenciais por persuasão",
        "m4-u3-t1-s2 (Pharming, spoofing e fraude por impersonação) — captura credenciais por falsificação",
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas) — a cadeia vazamento e reutilização",
        "m4-u3-t2-s2 (DoS e DDoS) — outro eixo de ataque sobre o mesmo ativo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Ataques a credenciais integram o núcleo dos editais de segurança da informação e são tópico clássico de itens de certo e errado, em geral com foco na diferença entre força bruta e demais técnicas e na defesa correta. A cobrança é conceitual e recorrente em bancas de área de tecnologia, sem exigência de cálculo ou memorização de normas específicas."
      }
    },
    "niveis": {
      "iniciante": "Força bruta testa muitas senhas contra uma única conta, automaticamente, até acertar; exige tempo e produz volume perceptível de falhas naquela conta. Password spraying testa uma ou duas senhas bastante comuns contra muitas contas, para não disparar bloqueio por conta. Credential stuffing reutiliza pares de usuário e senha vazados em outros serviços.",
      "intermediario": "O spraying é silencioso quando a política só conta falhas por conta: cada conta registra uma ou duas falhas, mas o agregado por origem de rede revela a campanha. O stuffing não quebra senha alguma; ele explora o hábito de reutilizar a mesma combinação em vários sistemas, de modo que a credencial testada é verdadeira.",
      "avancado": "As defesas se alinham por ataque. Contra força bruta: limite de tentativas com bloqueio progressivo e alerta. Contra spraying: monitoramento do volume de falhas por origem e por conjunto de contas, com janelas curtas de bloqueio. Contra stuffing: MFA, senha única por serviço gerenciada e verificação de exposição de credenciais.",
      "especialista": "MFA é a defesa mais efetiva contra credential stuffing, porque a senha vazada deixa de bastar. Senha única por serviço é a defesa mais efetiva contra a propagação do dano quando há vazamento, pois limita o alcance da combinação exposta. Alertas de login a partir de local incompatível com o padrão do usuário completam o conjunto."
    },
    "comparacoes": [
      {
        "tema": "Força bruta e password spraying: distribuição das tentativas",
        "a": {
          "rotulo": "Força bruta",
          "texto": "Concentra o esforço em uma conta e percorre o espaço de senhas possíveis; o volume de falhas fica visível na conta visada e o consumo de tempo cresce com a complexidade da senha."
        },
        "b": {
          "rotulo": "Password spraying",
          "texto": "Distribui poucas tentativas por conta usando senhas frequentes, de modo que nenhuma conta isolada atinge o limite de bloqueio; o sinal do ataque aparece no agregado por origem e por conjunto de contas."
        },
        "diferencaGabarito": "A direção do volume: concentrado em um alvo no força bruta, diluído entre muitos alvos no spraying, e por isso o controle que funciona em um caso falha no outro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Bloquear a conta após cinco falhas consecutivas é defesa suficiente contra password spraying.",
        "porqueErrada": "O spraying faz justamente poucas tentativas por conta, mantendo-se abaixo do limite que dispara o bloqueio. A medida é eficaz contra força bruta, mas não enxerga a campanha, que só aparece na soma por origem.",
        "versaoCorreta": "Contra spraying é preciso monitorar o padrão agregado de falhas por origem e por conjunto de contas, pois o volume por conta permanece deliberadamente baixo para não acionar o bloqueio individual."
      },
      {
        "afirmacaoEquivocada": "Credential stuffing consiste em testar combinações aleatórias de usuário e senha em busca de acesso válido.",
        "porqueErrada": "Descreve força bruta ou recheio automatizado. No stuffing as credenciais já são verdadeiras, obtidas em vazamentos externos, e o ataque não depende de descobrir nada: depende de que o usuário as reutilize.",
        "versaoCorreta": "Credential stuffing reutiliza em massa pares de usuário e senha vazados em outros serviços; o sucesso decorre da reutilização de senha pelo usuário, não da capacidade de adivinhar a combinação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Força bruta: muitas senhas contra uma conta",
        "Password spraying: poucas senhas comuns contra muitas contas",
        "Credential stuffing: credenciais reais vazadas aplicadas em outros serviços",
        "Reutilização de senha como vetor de propagação do dano"
      ],
      "regras": [
        "Bloqueio por falhas consecutivas protege conta única, não conjunto de contas.",
        "Credencial vazada não deve permitir acesso: MFA responde por essa exigência."
      ],
      "comparacoes": [
        "Força bruta concentra volume contra um alvo; spraying dispersa poucas tentativas entre muitos alvos; stuffing não adivinha nada."
      ],
      "fluxos": [
        "Observar falhas de autenticação, agregar por origem e por conta, identificar o padrão, bloquear origem suspeita, impor MFA e notificar titulares afetados."
      ],
      "excecoes": [
        "Bloqueio agressivo por falhas pode induzir indisponibilidade em ataque de negação de serviço deliberado contra contas legítimas."
      ],
      "palavrasChave": [
        "força bruta",
        "password spraying",
        "credential stuffing",
        "MFA",
        "reutilização de senha",
        "gerenciador de senhas"
      ],
      "checklist": [
        "As falhas estão concentradas em uma conta ou dispersas entre muitas?",
        "O volume por origem foi comparado com a linha de base do serviço?",
        "As credenciais testadas constam em base de vazamento conhecida?",
        "MFA está exigido para todos os acessos sensíveis?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O log de autenticação registra milhares de falhas de login em contas distintas, com duas tentativas por conta, partindo de poucos endereços. Que ataque é esse?",
        "dados": "Registro de vinte e quatro horas com três mil contas afetadas, exatamente duas falhas em cada uma, origem restrita a um pequeno conjunto de endereços e senhas testadas dentro de uma lista reduzida de combinações muito comuns.",
        "conceitos": [
          "Distribuição das tentativas como critério de classificação",
          "Janela por conta abaixo do limite de bloqueio",
          "Monitoramento agregado por origem como controle correlato"
        ],
        "estrategia": "Não olhar conta por conta: agregar as falhas por origem e por intervalo de tempo, e observar que o volume por conta é insuficiente para acionar bloqueio, enquanto o total por origem é anômalo.",
        "execucao": [
          "Contar as falhas por conta e confirmar que permanecem abaixo do limite de bloqueio.",
          "Agregar as falhas por endereço de origem e por período.",
          "Comparar o total por origem com a linha de base histórica do serviço.",
          "Classificar o ataque com base na dispersão entre contas e na concentração de origem."
        ],
        "resultado": "O ataque é password spraying: volume baixo por conta, que evita o bloqueio, volume alto entre contas e origem concentrada. O que o revela é o monitoramento por origem e por conjunto de contas.",
        "justificativa": "A classificação segue a geometria das tentativas. Se houvesse muitas tentativas em uma conta, seria força bruta; como cada conta recebe apenas duas tentativas e o conjunto de contas afetadas é grande, o agente está borrifando senhas comuns. A concentração de origem completa o diagnóstico.",
        "errosFrequentes": [
          "Descarta o ataque porque nenhuma conta isolada atingiu o limite de falhas.",
          "Confunde o volume alto de registros com força bruta, sem verificar a distribuição."
        ],
        "variacao": "Imagine agora duzentas falhas em uma única conta administrativa, partindo de uma origem só. Reclassifique o caso e indique o controle que passa a ser o prioritário."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um vazamento externo expôs senhas de colaboradores que reutilizavam a senha do portal. Qual defesa teria barrado o acesso e qual reduz o dano?",
        "dados": "Base de vinte mil pares de usuário e senha publicada em fórum; dois por cento da força de trabalho do órgão consta na lista; o portal aceita autenticação apenas por usuário e senha. Acesso detectado a partir de três países em um único dia.",
        "conceitos": [
          "Credential stuffing sobre credenciais verdadeiras",
          "MFA como barreira de acesso",
          "Senha única como limitação de dano",
          "Verificação de exposição de credenciais"
        ],
        "estrategia": "Separar as duas respostas pedidas: a medida que impede o uso da credencial roubada e a medida que reduz o alcance do vazamento quando ele já ocorreu. Depois acrescentar a detecção por comportamento anômalo de origem.",
        "execucao": [
          "Impor MFA em todos os acessos, de modo que a senha vazada não seja suficiente.",
          "Instituir senha única por serviço, com apoio de gerenciador corporativo.",
          "Consultar base de exposição e forçar redefinição das combinações vazadas.",
          "Alertar sobre logins a partir de local incompatível com o padrão de uso."
        ],
        "resultado": "Barraria o acesso o MFA, pois a senha roubada sozinha não autentica. Reduziria o dano a senha única por serviço, que impede que o vazamento de um sistema alcance outro.",
        "justificativa": "As medidas atuam em momentos distintos: MFA invalida a credencial como fator único, enquanto a unicidade de senha impede que a mesma combinação abre outros sistemas. Como o stuffing não quebra senha, apenas reutiliza, a defesa precisa atacar justamente a reutilização.",
        "errosFrequentes": [
          "Aumentar a complexidade da senha do portal como única resposta, deixando os demais sistemas expostos.",
          "Esperar que o bloqueio por falhas consecutivas detenha o ataque, já que as credenciais testadas são válidas."
        ],
        "variacao": "Suponha que o portal já adote MFA e que o atacante use sessão autenticada obtida por phishing. Indique qual controle passa a ser determinante nesse novo cenário."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma que credential stuffing é o mesmo que força bruta e que ambos se combatem com limite de tentativas. A afirmação é correta?",
        "dados": "Campanha observada com alto índice de sucesso já na primeira tentativa de cada conta, credenciais constantes em base de vazamento pública e ausência de variação de senha testada. O limite de cinco falhas por conta não foi acionado em nenhum momento.",
        "conceitos": [
          "Diferença entre descobrir e reutilizar credencial",
          "Taxa de sucesso na primeira tentativa como sinal",
          "Ineficácia do limite de falhas contra credencial válida"
        ],
        "estrategia": "Comparar a taxa de sucesso por tentativa e a procedência das credenciais. Alto sucesso já na primeira tentativa indica credencial verdadeira, o que descarta a lógica de adivinhação da força bruta.",
        "execucao": [
          "Medir a taxa de sucesso por tentativa na campanha observada.",
          "Confrontar as combinações usadas com bases públicas de vazamento.",
          "Concluir que não há quebra de senha e que o limite de falhas não protege.",
          "Indicar MFA e senha única como controles pertinentes."
        ],
        "resultado": "A afirmação é incorreta. Força bruta gera tentativas contra uma conta; credential stuffing usa credenciais reais vazadas em massa, sem quebrar nada, e por isso o limite de falhas não a contém.",
        "justificativa": "O limite de tentativas supõe erro sucessivo até acerto; no stuffing a primeira tentativa pode ser válida, de forma que o controle não chega a ser acionado. Além disso, a escala do ataque deriva do hábito de reutilização, e não da capacidade computacional de adivinhar.",
        "errosFrequentes": [
          "Tratar todo ataque a credenciais como problema de espaço de senhas a percorrer.",
          "Acreditar que senha longa resolve o stuffing, quando a credencial já é conhecida pelo atacante."
        ],
        "variacao": "Admita que as credenciais testadas sejam combinações geradas aleatoriamente. Explique o que muda no diagnóstico e qual controle volta a ser relevante."
      }
    ]
  },
  "m4-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Disponibilidade de serviços públicos depende de reconhecer DoS e DDoS e agir antes da paralisação. Em concursos, questões cobram diferenciação por origem, camada atacada e contramedidas, exigindo raciocínio lógico sobre saturação e proteção em profundidade.",
      "preRequisitos": [
        "Noção de serviços de rede e camada OSI",
        "Conceito de banda, conexão TCP e estado de sessão",
        "Fundamentos de segurança e classificação de ataques"
      ],
      "objetivosObservaveis": [
        "Diferenciar DoS de DDoS pela origem do tráfego e escala",
        "Descrever as três camadas de ataque e exemplos de técnicas",
        "Enumerar contramedidas defensivas em ordem de aplicação"
      ],
      "competencias": [
        "Raciocínio lógico sobre saturação de recursos",
        "Análise de cenário e escolha de defesa adequada",
        "Comunicação técnica sobre riscos de disponibilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t2-s3 (Ataques de intermediário e interceptação)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Integra o conteúdo programático de disponibilidade em segurança da informação, com a diferenciação entre DoS e DDoS e as camadas de ataque, geralmente em questões de certo/errado com ênfase em contramedidas operacionais."
      }
    },
    "niveis": {
      "iniciante": "DoS busca indisponibilizar serviço esgotando um recurso como banda ou conexões. DDoS usa muitas origens coordenadas, normalmente uma botnet, dificultando bloqueio por IP. A taxonomia por camada ajuda a classificar: volumétrico satura banda, de protocolo esgota estado e de aplicação consome processamento com requisições válidas.",
      "intermediario": "Compreende que DoS parte de fonte única e DDoS de fonte múltipla, identificando sinais de cada camada. Sabe calcular impacto de SYN flood na tabela de estado, reconhecer amplificação UDP e avaliar sobrecarga de banco em ataques de aplicação. Relaciona cada tipo com defesas específicas como rate limiting, scrubbing e resiliência.",
      "avancado": "Analisa cenários mistos onde ataque volumétrico mascara ataque de aplicação, diferencia reflexão de amplificação e avalia custo benefício de mitigação. Identifica indicadores de DDoS distribuído por geolocalização de IPs, variação de protocolo e periodicidade. Propõe arquitetura de defesa em camadas com redundância, filtragem perimetral e limites de custo na aplicação.",
      "especialista": "Formula respostas técnicas consistentes com governança e continuidade de serviços, propondo planos de acionamento com métricas de ativação de mitigação e comunicação institucional. Avalia limitações legais de bloqueio, preserva evidências para responsabilização e alinha contramedidas à política de segurança. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "DoS versus DDoS em termos operacionais",
        "a": {
          "rotulo": "DoS",
          "texto": "Origem única ou poucas máquinas, tráfego concentrado, bloqueio por IP pode reduzir impacto, esgota recurso específico do alvo."
        },
        "b": {
          "rotulo": "DDoS",
          "texto": "Múltiplas origens coordenadas, tráfego disperso, bloqueio por IP é ineficaz, exige mitigação distribuída e capacidade extra."
        },
        "diferencaGabarito": "A diferença decisiva é a origem do tráfego: DoS é ponto único, DDoS é distribuído, alterando a estratégia de defesa."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Bloquear o IP de origem resolve um DDoS.",
        "porqueErrada": "Em DDoS as origens são numerosas e frequentemente máquinas comprometidas, de modo que bloquear um IP não reduz volume total.",
        "versaoCorreta": "Em DDoS as origens são dispersas e a mitigação depende de filtragem distribuída, capacidade extra e serviço de scrubbing no provedor."
      },
      {
        "afirmacaoEquivocada": "Ataque de aplicação sempre usa tráfego volumétrico elevado.",
        "porqueErrada": "Ataque de aplicação consome recursos com requisições pequenas porém custosas, podendo manter taxa baixa e ainda indisponibilizar serviço.",
        "versaoCorreta": "Ataque de aplicação pode ser de baixo volume e ainda indisponibilizar serviço por esgotar processamento, banco ou sessões, exigindo limites de custo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "DoS Denial of Service",
        "DDoS Distributed Denial of Service",
        "Botnet",
        "Amplificação por reflexão",
        "Taxonomia por camada"
      ],
      "regras": [
        "DoS usa origem única, DDoS usa múltiplas origens coordenadas",
        "Defesa em camadas combina redundância, filtragem, mitigação e resiliência da aplicação"
      ],
      "comparacoes": [
        "Volumétrico satura banda, de protocolo esgota estado e de aplicação consome processamento"
      ],
      "fluxos": [
        "Detecção de anomalia, correlação de origem, classificação por camada, ativação de mitigação, monitoramento de recuperação"
      ],
      "excecoes": [
        "Ataques de aplicação podem ocorrer com baixo volume e requisições válidas, escapando a filtros apenas de banda"
      ],
      "palavrasChave": [
        "disponibilidade",
        "saturação",
        "botnet",
        "rate limiting",
        "scrubbing"
      ],
      "checklist": [
        "Identificar origem única ou distribuída",
        "Classificar camada do ataque",
        "Verificar indicadores de sobrecarga",
        "Aplicar mitigação proporcional",
        "Registrar incidente e evidências"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O site do órgão cai com tráfego vindo de milhares de IPs distintos em poucos minutos. A equipe suspeita de indisponibilidade e pergunta se o caso caracteriza DoS ou DDoS e qual a principal pista para classificar.",
        "dados": "Tráfego de pico de 12 Gbps, 18 mil IPs distintos, conexões simultâneas crescendo para 200 mil, logs mostram origem variada por continentes, sem padrão de IP único.",
        "conceitos": [
          "Origem do tráfego",
          "Distribuição de ataque"
        ],
        "estrategia": "Analisar padrão de origem e volume, comparar concentração de IPs versus dispersão, verificar se bloqueio de um IP reduz impacto e identificar camada de saturação.",
        "execucao": [
          "Coletar logs de acesso e métricas de rede nos últimos 10 minutos",
          "Contar número de IPs únicos e distribuição geográfica",
          "Comparar redução de carga após bloqueio de IP isolado"
        ],
        "resultado": "DDoS: a multiplicidade de origens coordenadas é a característica, bloquear um IP é inútil e a resposta exige filtragem no provedor ou serviço de mitigação.",
        "justificativa": "A multiplicidade de IPs inviabiliza bloqueio pontual e indica coordenação distribuída. O padrão de origem dispersa é marca de DDoS, exigindo resposta em nível de provedor e aumento de capacidade, pois defesa apenas no servidor não absorve o volume.",
        "errosFrequentes": [
          "Confundir volume alto com origem única e concluir DoS",
          "Achar que firewall local resolve ataque distribuído"
        ],
        "variacao": "Trocar cenário para queda interna causada por script interno gerando requisições repetidas de um único servidor. Exigir identificação de DoS interno versus DDoS externo e defesa adequada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Durante abertura de inscrições, formulário é bombeado com requisições pesadas que sobrecarregam banco. Identificar camada de ataque e propor defesa imediata.",
        "dados": "Formulário abre às 08h, em 20 minutos chegam 50 mil submissões com upload pesado, CPU do banco em 98 por cento, consultas de validação demorando mais de 30 segundos, IPs distintos porém comportamento idêntico.",
        "conceitos": [
          "Ataque de aplicação",
          "Custo de processamento"
        ],
        "estrategia": "Identificar se requisições são válidas mas custosas, medir consumo de CPU e banco por requisição, testar limites de taxa por sessão e avaliar necessidade de cache.",
        "execucao": [
          "Coletar métricas de CPU e tempo de resposta por requisição",
          "Verificar padrão de payload e frequência por sessão",
          "Aplicar limite de taxa e fila de processamento"
        ],
        "resultado": "Ataque de camada de aplicação: consome CPU e banco com requisições individualmente válidas. Defesa inclui limitação de taxa por sessão, cache de páginas públicas, fila com capacidade declarada e limitação do custo de cada consulta.",
        "justificativa": "Requisições válidas porém custosas esgotam recursos de processamento e banco, típico de ataque de aplicação. A defesa precisa reduzir custo por requisição e limitar taxa, pois bloqueio por volume não resolve o problema de processamento.",
        "errosFrequentes": [
          "Tratar como ataque volumétrico e aumentar apenas banda",
          "Ignorar limites de processamento por usuário"
        ],
        "variacao": "Alterar contexto para portal de consulta com busca complexa que é explorada por bots. Exigir análise de padrão de consulta e aplicação de cache e limitação de custo."
      },
      {
        "tipo": "erro",
        "problema": "Em prova, afirmação diz que bloquear IP de origem resolve DDoS. O candidato marca como correta. Explique por que a leitura é equivocada e qual o erro conceitual envolvido.",
        "dados": "Cenário de ataque com 20 mil IPs distintos, tráfego de 8 Gbps, origem inclui hosts residenciais comprometidos.",
        "conceitos": [
          "Origem distribuída",
          "Mitigação"
        ],
        "estrategia": "Revisar definição de DDoS, analisar efeito de bloqueio pontual em volume distribuído, comparar com DoS e avaliar necessidade de mitigação em provedor.",
        "execucao": [
          "Listar número de IPs envolvidos e variação temporal",
          "Simular bloqueio de amostra de IPs e medir redução de carga",
          "Avaliar necessidade de scrubbing e aumento de capacidade"
        ],
        "resultado": "Errado. Em DDoS as origens são dispersas e frequentemente de máquinas inocentes, a mitigação depende de filtragem distribuída, capacidade extra e mitigação no provedor.",
        "justificativa": "Bloqueio por IP é ineficaz quando o ataque provém de milhares de fontes. A estratégia correta envolve filtragem em nível de provedor, aumento de capacidade e análise comportamental, não bloqueio isolado.",
        "errosFrequentes": [
          "Assumir que bloqueio resolve por experiência com DoS",
          "Confundir mitigação local com mitigação distribuída"
        ],
        "variacao": "Trocar afirmação para que ataque de aplicação seja resolvido apenas com firewall de banda. Exigir identificação do erro de confundir camadas."
      }
    ]
  },
  "m4-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Interceptação de tráfego compromete credenciais e integridade em serviços públicos. Conhecer MITM permite reconhecer avisos de certificado, escolher canais seguros e aplicar contramedidas adequadas, competência cobrada em segurança e governança digital em concursos.",
      "preRequisitos": [
        "Noções de criptografia TLS",
        "Modelo cliente servidor e rede local",
        "Conceito de autenticação e sessão"
      ],
      "objetivosObservaveis": [
        "Explicar mecanismo do MITM",
        "Relacionar técnica a contramedida específica",
        "Identificar sinais de interceptação ativa"
      ],
      "competencias": [
        "Análise de risco em comunicação",
        "Avaliação crítica de avisos de segurança",
        "Escolha de controles técnicos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t2-s2 (DoS e DDoS)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Cai em editais de segurança da informação como tópico de confidencialidade. Questões de certo errado abordam avisos de certificado, envenenamento ARP e evil twin, exigindo associação correta entre técnica e defesa."
      }
    },
    "niveis": {
      "iniciante": "MITM ocorre quando atacante se coloca no caminho entre vítima e destino, podendo ler ou alterar tráfego. Técnicas incluem envenenamento ARP, evil twin, spoofing DNS e downgrade SSL. O efeito é captura de credenciais e sessão, exigindo TLS verificado e atenção a avisos de certificado.",
      "intermediario": "Diferencia interceptação passiva de ativa, reconhece avisos de certificado como indicador de risco e associa cada técnica a vetor específico. Sabe que envenenamento ARP afeta rede local, evil twin afeta Wi Fi e spoofing DNS afeta resolução de nomes. Relaciona contramedidas como HSTS, VPN e verificação de cadeia.",
      "avancado": "Analisa cenários combinados onde MITM se apoia em phishing ou malware para instalar proxy. Avalia impacto de downgrade SSL e identifica falhas de configuração que facilitam interceptação. Propõe arquitetura de defesa com segmentação, autenticação de rede e monitoramento de anomalias de certificado.",
      "especialista": "Formula diretrizes de governança para uso seguro de redes públicas, treinamento de usuários sobre avisos de certificado e resposta a incidentes de interceptação. Avalia responsabilidades legais e preserva evidências para apuração. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "ARP poisoning versus DNS spoofing",
        "a": {
          "rotulo": "ARP poisoning",
          "texto": "Ataca camada de enlace local, anuncia gateway falso para vítima, desvia tráfego dentro da rede."
        },
        "b": {
          "rotulo": "DNS spoofing",
          "texto": "Ataca resolução de nomes, responde consultas falsas ao cliente, redireciona para site controlado."
        },
        "diferencaGabarito": "ARP age na rede local e DNS age na resolução de nomes, exigindo controles distintos de segmentação e validação de resposta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "MITM e phishing são a mesma técnica.",
        "porqueErrada": "Phishing induz vítima a entregar dados em canal falso, MITM ocupa caminho legítimo entre as pontas.",
        "versaoCorreta": "Phishing induz a vítima a entregar dados em canal falso, MITM ocupa o caminho legítimo entre as pontas, podem ser combinados mas mecanismos diferem."
      },
      {
        "afirmacaoEquivocada": "Aceitar aviso de certificado inválido é seguro se o site parecer correto.",
        "porqueErrada": "Aviso indica quebra da cadeia de confiança, aceitar equivale a confiar em certificado do atacante.",
        "versaoCorreta": "Aviso de certificado inválido deve ser abortado, pois aceitar valida o certificado apresentado que pode ser do atacante."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Man in the Middle",
        "Envenenamento ARP",
        "Evil twin",
        "Spoofing DNS",
        "Downgrade SSL"
      ],
      "regras": [
        "TLS verificado impede leitura do conteúdo",
        "HSTS impede downgrade para HTTP",
        "Avisos de certificado não devem ser ignorados"
      ],
      "comparacoes": [
        "ARP afeta enlace local, DNS afeta resolução de nomes, proxy afeta aplicação"
      ],
      "fluxos": [
        "Usuário conecta, atacante se insere, tráfego é lido ou alterado, defesa detecta anomalia de certificado"
      ],
      "excecoes": [
        "Rede corporativa com inspeção TLS legitima pode gerar avisos, exige política clara"
      ],
      "palavrasChave": [
        "interceptação",
        "certificado",
        "ARP",
        "evil twin",
        "HSTS"
      ],
      "checklist": [
        "Verificar certificado antes de login",
        "Evitar redes abertas sem VPN",
        "Desconfiar de avisos de segurança",
        "Atualizar sistema e navegador",
        "Relatar incidentes suspeitos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Usuário acessa portal do órgão em Wi Fi público e vê aviso de certificado inválido que decide ignorar. O que está acontecendo e qual conduta correta.",
        "dados": "Rede aberta em aeroporto, portal usa HTTPS, navegador exibe aviso de emissor desconhecido, usuário aceita exceção e insere credenciais.",
        "conceitos": [
          "Aviso de certificado",
          "Interceptação ativa"
        ],
        "estrategia": "Interpretar aviso como possível MITM, avaliar contexto de rede pública, decidir abortar acesso e usar canal seguro.",
        "execucao": [
          "Identificar que rede é pública e não gerenciada",
          "Interpretar aviso de certificado como quebra de confiança",
          "Sugerir abortar acesso e usar VPN oficial"
        ],
        "resultado": "Provável interceptação ativa com certificado próprio aceito pelo usuário, entrega de credenciais e sessão. Conduta correta é abortar, não confiar e usar canal criptografado confiável.",
        "justificativa": "Aviso indica que cadeia de confiança não fecha, aceitar equivale a confiar no certificado apresentado. Em rede pública o risco de MITM é elevado, exigindo abortar e usar VPN.",
        "errosFrequentes": [
          "Ignorar aviso por pressa",
          "Achar que site visualmente correto garante segurança"
        ],
        "variacao": "Trocar cenário para acesso via rede corporativa com inspeção TLS legitima. Exigir diferenciação entre aviso legítimo de inspeção e MITM."
      },
      {
        "tipo": "aplicacao",
        "problema": "Relatórios indicam contas sendo vistas por terceiros sem login suspeito. Hipótese de MITM a verificar e correções.",
        "dados": "Sessões ativas em locais distintos, HTTP usado em parte do sistema, HSTS desativado, rede local sem proteção ARP.",
        "conceitos": [
          "Sessão roubada",
          "Downgrade"
        ],
        "estrategia": "Mapear vetores de interceptação viáveis, correlacionar uso de HTTP e ausência de HSTS, verificar rede local e endpoints.",
        "execucao": [
          "Auditar logs de acesso e protocolos usados",
          "Verificar configuração de HSTS e redirecionamento forçado para HTTPS",
          "Revisar segmentação e proteção ARP na rede local"
        ],
        "resultado": "Verificar sessões roubadas por interceptação, envenenamento ARP, proxy instalado. Correções incluem TLS ponta a ponta, HSTS ativo, remoção de malware e educação sobre avisos.",
        "justificativa": "Uso de HTTP e falta de HSTS permite downgrade, enquanto rede local vulnerável permite envenenamento ARP. A combinação explica acesso não autorizado sem credenciais novas.",
        "errosFrequentes": [
          "Atribuir a vazamento sem verificar rede",
          "Esquecer de corrigir HSTS"
        ],
        "variacao": "Alterar cenário para ataque evil twin em estacionamento. Exigir identificação de SSID falso e defesa por autenticação de rede corporativa."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que MITM e phishing são a mesma técnica. O candidato marca como correta. Explique erro conceitual.",
        "dados": "Material de estudo confunde indução a canal falso com ocupação de caminho legítimo, sem distinguir vetores.",
        "conceitos": [
          "Phishing",
          "MITM"
        ],
        "estrategia": "Definir cada técnica com precisão conceitual, comparar mecanismo de ação entre phishing e MITM e mapear defesas distintas para cada vetor de ataque.",
        "execucao": [
          "Descrever phishing como engenharia social para canal falso",
          "Descrever MITM como inserção no caminho legítimo",
          "Comparar defesas de treinamento versus criptografia e verificação"
        ],
        "resultado": "Errado. Phishing induz vítima a entregar dados em canal falso, MITM ocupa caminho legítimo entre as pontas, mecanismos diferem e defesas também.",
        "justificativa": "A diferença de mecanismo implica controles diferentes: phishing exige treinamento e validação de domínio, MITM exige TLS e verificação de certificado. Confundir leva a defesa inadequada.",
        "errosFrequentes": [
          "Achar que antiphishing resolve MITM",
          "Generalizar controles de comunicação"
        ],
        "variacao": "Trocar afirmação para que aviso de certificado pode ser ignorado com segurança. Exigir identificação do erro de confiar em aparência visual."
      }
    ]
  },
  "m4-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Vazamento de dados gera risco imediato de reutilização de credenciais e roubo de identidade no serviço público. Entender cadeia vazamento comprometimento e deveres de resposta é cobrado em concursos de segurança e governança digital.",
      "preRequisitos": [
        "Noções de privacidade e LGPD",
        "Conceito de incidente de segurança",
        "Práticas de gestão de identidade e acesso"
      ],
      "objetivosObservaveis": [
        "Descrever cadeia vazamento reutilização comprometimento",
        "Enumerar ações iniciais de contenção",
        "Explicar deveres de transparência do órgão"
      ],
      "competencias": [
        "Análise de impacto de exposição de dados",
        "Planejamento de resposta a incidentes",
        "Comunicação institucional responsável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t3-s2 (Indicadores de comprometimento (IoC))"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Gestão de incidentes e proteção de dados integram o conteúdo programático de TI e segurança. Questões sobre vazamento, contenção e transparência focam em LGPD e boa prática."
      }
    },
    "niveis": {
      "iniciante": "Vazamento é divulgação não autorizada de informação, como planilha exposta. Roubo de identidade usa dados vazados para se passar por alguém. Comprometimento de conta é controle indevido da conta real, porta para abuso de permissão.",
      "intermediario": "Reconhece cadeia vazamento credenciais testadas em massa comprometimento de conta abuso. Sabe que primeiras ações são bloquear sessões, rotacionar credenciais e limitar acesso ao dado exposto. Entende necessidade de registro e avaliação de comunicação.",
      "avancado": "Avalia escopo de exposição, quantifica titulares afetados e classifica sensibilidade. Planeja contenção proporcional, preserva evidências e coordena comunicação com áreas jurídicas e de transparência. Diferencia risco de privacidade de incidente concretizado.",
      "especialista": "Formula políticas de resposta a incidentes alinhadas à governança, define métricas de ativação e canais de comunicação. Avalia responsabilidades legais e preserva integridade da apuração. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "Vazamento versus comprometimento de conta",
        "a": {
          "rotulo": "Vazamento",
          "texto": "Exposição não autorizada de informação, pode ser descoberta sem uso imediato, gera risco de reutilização."
        },
        "b": {
          "rotulo": "Comprometimento de conta",
          "texto": "Controle indevido de conta real, evidência uso ativo, permite movimentação lateral e abuso de confiança."
        },
        "diferencaGabarito": "Vazamento é exposição de dado, comprometimento é tomada de conta, o segundo exige contenção imediata de acesso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Vazamento só gera risco de privacidade, sem fraude concreta não há nada a fazer.",
        "porqueErrada": "Vazamento cria risco imediato de reutilização de credenciais e identidade, além de gerar deveres de resposta.",
        "versaoCorreta": "Vazamento gera risco imediato de reutilização e cria deveres de resposta e transparência; a inação converte o risco em incidente."
      },
      {
        "afirmacaoEquivocada": "Trocar senha basta para conter comprometimento de conta.",
        "porqueErrada": "Trocar senha sem revogar sessões deixa atacante autenticado, pois tokens ativos permanecem válidos.",
        "versaoCorreta": "Contenção exige revogar sessões ativas, rotacionar credenciais e monitorar ações recentes, além de trocar senha."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Vazamento de dados",
        "Roubo de identidade",
        "Comprometimento de conta",
        "Credential stuffing",
        "Contenção"
      ],
      "regras": [
        "Exposição indevida gera dever de avaliar risco",
        "Contenção inicial inclui bloqueio de sessões e rotação de credenciais",
        "Comunicação deve ser baseada em fatos confirmados"
      ],
      "comparacoes": [
        "Vazamento é exposição, comprometimento é uso",
        "Risco potencial versus incidente concretizado"
      ],
      "fluxos": [
        "Descoberta de exposição, avaliação de escopo, contenção imediata, registro, comunicação"
      ],
      "excecoes": [
        "Dados públicos não configuram vazamento, mas má configuração pode expor dados sensíveis"
      ],
      "palavrasChave": [
        "exposição",
        "identidade",
        "contenção",
        "transparência",
        "incidente"
      ],
      "checklist": [
        "Identificar o quê foi exposto",
        "Quantificar titulares afetados",
        "Bloquear e rotacionar credenciais",
        "Preservar registros",
        "Comunicar responsáveis"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Planilha com dados de servidores foi publicada em pasta de compartilhamento público por três dias. Classificar o fato e listar escopo a apurar.",
        "dados": "Pasta com permissões abertas na internet, acesso via link direto, planilha contém nome, matrícula e telefone de 1.200 servidores, logs de acesso disponíveis.",
        "conceitos": [
          "Exposição indevida",
          "Escopo de incidentes"
        ],
        "estrategia": "Identificar natureza do acesso, categorizar dados expostos e definir quais evidências coletar para avaliação de risco.",
        "execucao": [
          "Confirmar período de exposição e permissões",
          "Listar tipos de dados presentes na planilha",
          "Verificar logs de acesso para identificar quem visualizou"
        ],
        "resultado": "Vazamento por exposição indevida de acesso. Escopo inclui quais dados, quantos titulares, quem acessou, período de exposição, causa raiz e medidas de contenção imediata.",
        "justificativa": "Acesso público não autorizado caracteriza vazamento. A apuração precisa quantificar impacto e identificar causa para evitar recorrência, além de avaliar necessidade de comunicação.",
        "errosFrequentes": [
          "Assumir que dado não sensível não gera risco",
          "Ignorar logs de acesso na avaliação"
        ],
        "variacao": "Trocar cenário para backup exposto contendo credenciais de serviço. Exigir classificação como vazamento de credenciais e ações prioritárias de rotação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Credenciais de dezenas de servidores apareceram em lista pública. O que fazer nas primeiras horas.",
        "dados": "Lista publicada em fórum de vazamentos há seis horas, contém usuário e senha em texto simples de 42 contas, algumas com acesso a sistemas críticos.",
        "conceitos": [
          "Credential stuffing",
          "Contenção inicial"
        ],
        "estrategia": "Priorizar bloqueio de uso indevido, impedir autenticação com credenciais expostas e monitorar ações recentes.",
        "execucao": [
          "Forçar troca de senhas e revogar sessões ativas das contas afetadas",
          "Exigir autenticação multifator nas contas críticas",
          "Monitorar logs de login e ações recentes para detectar uso"
        ],
        "resultado": "Forçar troca de senhas, revogar sessões, exigir MFA, bloquear acessos fora do padrão, monitorar ações recentes, registrar incidente e notificar responsáveis.",
        "justificativa": "Teste automatizado pode ocorrer minutos após publicação. Revogar sessões evita acesso com tokens válidos, enquanto MFA reduz chance de sucesso de reutilização.",
        "errosFrequentes": [
          "Esperar por uso antes de agir",
          "Trocar senha sem revogar sessões"
        ],
        "variacao": "Alterar contexto para vazamento de e-mails corporativos sem senhas. Exigir avaliação de risco de phishing e ações de conscientização."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que vazamento sem fraude concreta não exige ação. O candidato marca como correta. Explique erro.",
        "dados": "Incidente com exposição de dados pessoais de 800 cidadãos, sem relato de uso indevido até o momento.",
        "conceitos": [
          "Risco versus incidente",
          "Dever de resposta"
        ],
        "estrategia": "Diferenciar risco potencial de dano concretizado e lembrar deveres de avaliação e transparência.",
        "execucao": [
          "Avaliar sensibilidade dos dados expostos",
          "Verificar obrigações legais de comunicação e registro",
          "Plonejar plano de mitigação e comunicação"
        ],
        "resultado": "Errado. Vazamento cria risco imediato de reutilização e gera deveres de resposta e transparência. Inação transforma risco em incidente.",
        "justificativa": "A existência de risco relevante impõe ações de contenção e avaliação, mesmo sem fraude confirmada. A transparência baseada em fatos evita especulação e preserva confiança institucional.",
        "errosFrequentes": [
          "Confundir ausência de dano com ausência de risco",
          "Adiar comunicação até confirmação de uso"
        ],
        "variacao": "Trocar afirmação para que comunicação imediata deve incluir especulações sobre impacto. Exigir identificação do erro de falta de base factual."
      }
    ]
  },
  "m4-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Indicadores de comprometimento orientam triagem de segurança e decisão de resposta. Diferenciar indicador de evidência e reconhecer limites de listas integra o conteúdo programático de segurança e governança.",
      "preRequisitos": [
        "Noções de logs e monitoramento",
        "Conceito de artefato digital",
        "Fundamentos de investigação"
      ],
      "objetivosObservaveis": [
        "Classificar IoCs por tipo",
        "Explicar diferença entre indicador e evidência",
        "Discutir limites da detecção baseada em listas"
      ],
      "competencias": [
        "Interpretação de logs",
        "Correlação de eventos",
        "Tomada de decisão sob incerteza"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u3-t3-s1 (Vazamento de dados, roubo de identidade e comprometimento de contas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Provas de TI avaliam capacidade de interpretar indicadores e evitar conclusões precipitadas. Questões sobre falsos positivos e necessidade de contexto integram o conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "IoC é artefato observável associado a ataque, como hash de arquivo, domínio de C2, IP suspeito ou sequência de eventos. Uso prático inclui listas de bloqueio em filtros e EDR, apoio à triagem do analista.",
      "intermediario": "Diferencia indicador de evidência, reconhece que IoC é pista retroativa e pode gerar falsos positivos. Sabe que detecção avançada usa padrões comportamentais TTPs além de listas estáticas.",
      "avancado": "Avalia qualidade de IoC, correlaciona múltiplos indicadores em contexto temporal e avalia risco de bloqueio de recursos legítimos. Planeja resposta proporcional e coleta de evidências autenticadas.",
      "especialista": "Formula políticas de uso de IoCs, integra fontes de inteligência e define limites de automação. Avalia implicações legais de coleta e preservação de evidências. Sabe distinguir simulação didática de ação real."
    },
    "comparacoes": [
      {
        "tema": "IoC versus evidência",
        "a": {
          "rotulo": "IoC",
          "texto": "Artefato observável usado como pista de detecção, pode ser retroativo e gerar falsos positivos."
        },
        "b": {
          "rotulo": "Evidência",
          "texto": "Pista preservada e autenticada, apta a sustentar responsabilização, exige cadeia de custódia."
        },
        "diferencaGabarito": "IoC orienta triagem, evidência sustenta responsabilização, a segunda exige preservação e autenticidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o antivírus não alertou, não houve comprometimento.",
        "porqueErrada": "Ausência de alerta não é prova negativa, ataque pode ser inédito ou vetor não coberto por assinatura.",
        "versaoCorreta": "Ausência de alerta não prova ausência de comprometimento, avaliação usa registros, comportamento e múltiplas fontes."
      },
      {
        "afirmacaoEquivocada": "Bloqueio de domínio listado prova infecção local.",
        "porqueErrada": "Bloqueio indica apenas contato ou tentativa, confirmação exige correlação com processos, arquivos e comportamento do host.",
        "versaoCorreta": "Domínio bloqueado prova apenas tentativa ou contato, confirmação de comprometimento exige múltiplos indicadores em contexto."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Indicador de comprometimento",
        "Hash de arquivo",
        "Comando e controle",
        "TTP",
        "Evidência"
      ],
      "regras": [
        "IoC é pista, não prova",
        "Múltiplos indicadores em contexto sustentam hipótese",
        "Detecção por lista é retroativa"
      ],
      "comparacoes": [
        "IoC artefato observável, evidência autenticada",
        "Lista estática versus comportamento dinâmico"
      ],
      "fluxos": [
        "Coleta de artefato, correlação com logs, validação de contexto, decisão de resposta"
      ],
      "excecoes": [
        "IPs e domínios legítimos podem ser reutilizados, gerando falsos positivos"
      ],
      "palavrasChave": [
        "IoC",
        "detecção",
        "falso positivo",
        "correlação",
        "TTP"
      ],
      "checklist": [
        "Identificar tipo de IoC",
        "Correlacionar com eventos temporais",
        "Validar contexto do host",
        "Avaliar risco de bloqueio",
        "Preservar evidências"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Lista de bloqueio contém domínio usado por malware ontem. Se tráfego hoje for bloqueado, isso prova infecção local.",
        "dados": "Domínio listado em feed de inteligência, bloqueio ocorre em proxy corporativo, logs mostram requisição de estação de trabalho X.",
        "conceitos": [
          "Lista de bloqueio",
          "Contato versus infecção"
        ],
        "estrategia": "Diferenciar tentativa de contato de comprometimento confirmado, buscar correlação com processos e comportamento.",
        "execucao": [
          "Verificar se estação executou download ou processo associado",
          "Analisar histórico de execução e criação de arquivos",
          "Correlacionar requisição com usuário e horário"
        ],
        "resultado": "Não. Prova apenas tentativa ou contato com domínio listado, confirmação exige correlação com processos, arquivos e comportamento do host.",
        "justificativa": "Bloqueio indica contato, não infecção. Múltiplos indicadores em contexto são necessários para afirmar comprometimento, evitando falsos positivos.",
        "errosFrequentes": [
          "Equiparar bloqueio a infecção",
          "Ignorar contexto de usuário legítimo"
        ],
        "variacao": "Trocar domínio por hash de arquivo conhecido. Exigir verificação de presença do arquivo no host e integridade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Logs mostram login legítimo às 14h, novo acesso 14h07 de outro estado, criação de conta e envio em massa de e-mails. Interpretar.",
        "dados": "Usuário autenticado normalmente, nova sessão de IP diferente, criação de conta interna e disparo de 2.000 e-mails com anexo.",
        "conceitos": [
          "Sequência de eventos",
          "Movimentação lateral"
        ],
        "estrategia": "Reconhecer padrão de conta tomada, correlacionar eventos temporais e identificar abuso de função.",
        "execucao": [
          "Bloquear conta e revogar sessões",
          "Coletar indicadores de origem e hashes de anexos",
          "Varredura de sessões similares e propagação de detecção"
        ],
        "resultado": "Sequência suspeita de comprometimento: acesso tomado, movimentação e abuso de função. Ações incluem bloqueio, coleta de indicadores e varredura de base.",
        "justificativa": "A sequência temporal curta entre acesso inesperado e ações abusivas indica uso indevido. Coleta de indicadores amplia detecção e previne propagação.",
        "errosFrequentes": [
          "Atribuir a erro de usuário",
          "Não investigar anexos enviados"
        ],
        "variacao": "Alterar cenário para acesso via VPN com credenciais vazadas. Exigir análise de geolocalização e verificação de MFA."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação diz que ausência de alerta de antivírus garante que não houve comprometimento. O candidato marca como correta. Explique erro.",
        "dados": "Ambiente com antivírus baseado em assinatura, ataque usa arquivo novo sem assinatura conhecida, logs mostram criação de serviço suspeito.",
        "conceitos": [
          "Limites de assinatura",
          "Prova negativa"
        ],
        "estrategia": "Explicar que detecção por assinatura é retroativa e que ausência de alerta não exclui ataque, necessidade de correlação.",
        "execucao": [
          "Revisar logs de criação de serviço e conexões de rede",
          "Comparar com base de IoCs comportamentais",
          "Avaliar necessidade de análise forense"
        ],
        "resultado": "Errado. Ausência de alerta não é prova negativa, ataque pode ser inédito ou vetor não coberto. Avaliação usa registros, comportamento e múltiplas fontes.",
        "justificativa": "Antivírus por assinatura detecta ameaças conhecidas. Ataques inéditos ou fileless escapam, exigindo detecção comportamental e correlação de eventos.",
        "errosFrequentes": [
          "Confiar apenas em antivírus",
          "Interpretar silêncio como segurança"
        ],
        "variacao": "Trocar afirmação para que bloqueio de IP garante remoção de ameaça. Exigir identificação do erro de confundir prevenção com erradicação."
      }
    ]
  },
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
  },
  "m4-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A LGPD (Lei nº 13.709/2018) é a norma central de proteção de dados no Brasil e sua incidência sobre o setor público é cobrada transversalmente em concursos de todas as carreiras (analista de TI, controle, administração, jurídicas). O art. 1º estende expressamente a lei a pessoas jurídicas de direito público, mas a classificação de controlador/operador no setor público gera dúvidas recorrentes. Em provas, a banca testa: (a) se o órgão é controlador (define finalidade) ou operador (processa por conta de outro); (b) se a base legal é consentimento ou obrigação legal/legítimo interesse; (c) se dado sensível (art. 5º, II) recebe tratamento diferenciado; (d) a articulação com LAI (Lei nº 12.527/2011) e Marco Civil (Lei nº 12.965/2014). A confusão entre 'obrigação legal de tratar' e 'dispensa de conformidade' é a pegadinha nº 1.",
      "preRequisitos": [
        "Conceito de dado pessoal, dado pessoal sensível, dado anonimizado (art. 5º, I-III)",
        "Diferença entre controlador e operador (art. 5º, VI-VII)",
        "Noção de base legal para tratamento (art. 7º e art. 23 para poder público)",
        "Princípios da LGPD (art. 2º, I-VII) e finalidade/adequação/necessidade (art. 6º, I-III)"
      ],
      "objetivosObservaveis": [
        "Aplicar o art. 1º (objeto), art. 3º (aplicação territorial), art. 4º (exceções) e art. 5º (conceitos) para classificar cenários de tratamento no serviço público",
        "Distinguir controlador (define finalidade e meios) de operador (trata em nome do controlador) em contratos de tecnologia do setor público",
        "Classificar dado como pessoal comum ou sensível (art. 5º, II) e identificar o regime mais restritivo aplicável",
        "Identificar exceções do art. 4º (pessoal não econômico, jornalístico/artístico/acadêmico, segurança pública/defesa) e não confundir com regra geral",
        "Articular LGPD com LAI (art. 23 LGPD menciona LAI) e Marco Civil (objetos distintos: dado pessoal vs. uso da Internet)"
      ],
      "competencias": [
        "Leitura técnica de lei: extrair do texto legal (não de resumo) a resposta para o caso concreto",
        "Classificação jurídica: enquadrar agente como controlador/operador e dado como comum/sensível",
        "Pensamento sistêmico: ver LGPD, LAI e Marco Civil como regime articulado, não isolado",
        "Cautela normativa: distinguir 'a lei determina' (dispositivo verificado) de 'boa prática recomenda'"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — arts. 2º, 17, 18",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — art. 46",
        "m4-u4-t2-s1 (Marco Civil da Internet — Lei nº 12.965/2014) — distinção de objetos e arts. 9º §3º, 15, 19",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — método prático de decisão",
        "m6-u3-t1-s1 (Orientação estratégica da unidade) — LGPD no serviço público digital: estrutura, proteção de dados e sigilo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "LGPD no setor público integra o conteúdo programático de TI e segurança da informação, com itens C/E sobre incidência da lei em órgãos públicos, classificação controlador/operador, dado sensível, exceções do art. 4º e precisão na citação de artigos (art. 1º, 3º, 4º, 5º, 7º, 23, 46). A declaração 'a LGPD não se aplica ao poder público' é item falso padrão."
      }
    },
    "niveis": {
      "iniciante": "A Lei nº 13.709/2018 (LGPD) dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade (art. 1º — verificado no texto oficial planalto.gov.br, 2026-10-20). Aplicação (art. 3º — verificado): alcança operação de tratamento no território nacional, atividade de oferta/fornecimento de bens, serviços ou tratamento de indivíduos localizados no Brasil e dados coletados no território nacional. Exceções (art. 4º — verificado): I — pessoa natural para fins exclusivamente particulares e não econômicos; II — finalidades exclusivamente jornalísticas, artísticas ou acadêmicas; III — finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais, com ressalvas dos §§ 1º e 2º. Conceitos do art. 5º (verificado): dado pessoal (I) — informação relacionada a pessoa natural identificada ou identificável; dado pessoal sensível (II) — origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético, biométrico; dado anonimizado (III); banco de dados (IV); titular (V); controlador (VI) — define finalidade e meios; operador (VII) — trata em nome do controlador; encarregado (VIII); agentes de tratamento (IX); relatório de impacto (X). No serviço público, o órgão costuma ser controlador (define finalidade legal) e a empresa de tecnologia operadora (processa sob instruções).",
      "intermediario": "No nível intermediário, a classificação controlador/operador exige análise do caso concreto. Ex.: Prefeitura contrata SaaS para folha de pagamento. Prefeitura = controlador (finalidade legal: pagar servidores, base legal art. 7º, II ou art. 23, I). Empresa = operadora (processa conforme contrato, art. 5º, VII). Mas se a empresa usa os dados para 'melhorar seu produto' (finalidade própria), vira controladora também (co-controlação). Dado sensível (art. 5º, II): opinião política de servidor em sistema de RH = sensível. Tratamento exige base legal específica (art. 11) — consentimento específico e destacado OU hipótese do art. 11, II (cumprimento de obrigação legal). Minimização (art. 6º, III): coletar só o estritamente necessário. Exceção art. 4º, III: não se aplica a 'toda atividade de segurança pública'; apenas a finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado, investigação/repressão penal, com ressalvas. Atividade mista (ex.: guarda municipal que também faz trânsito) não se enquadra automaticamente.",
      "avancado": "Nível avançado aborda tensões entre LGPD e regime administrativo. (1) Base legal no poder público: art. 7º (geral) vs. art. 23 (poder público). Art. 23 exige: finalidade pública, atribuição legal, publicidade dos procedimentos, minimização. Não basta 'tenho lei que manda coletar'; precisa demonstrar necessidade e proporcionalidade. (2) Consentimento no setor público: art. 7º, I (consentimento) vs. art. 23, I (obrigação legal). Em regra, órgão público NÃO usa consentimento como base para tratamento obrigatório (coação invalida consentimento). Usa art. 7º, II (cumprimento de obrigação legal) ou art. 23. (3) Compartilhamento entre órgãos: art. 26 (comunicação entre controladores) exige compatibilidade de finalidades, minimização, segurança. Não é 'livre trânsito de dados entre órgãos'. (4) ANPD: art. 55-A (autarquia especial, Lei nº 14.460/2022, atualizada pela Lei nº 15.352/2026) — fiscaliza poder público. (5) Sanções: art. 52 (advertência, multa até 2% do faturamento, limitada a R$ 50M por infração). Órgão público não paga multa (vedação constitucional), mas responde por danos (art. 42-45) e sanções administrativas internas. (6) Articulação LAI: art. 23 LGPD menciona LAI — transparência pública e proteção de dados se leem juntas. Publicar lista de servidores (nome, matrícula, cargo) = publicidade administrativa (CF art. 37, §3º). Publicar salários nominais = debate: TCU entende que remuneração é dado pessoal, mas publicidade de remuneração é dever (LC nº 131/2009). Solução: publicar faixa salarial + cargo, não nome + valor individual, salvo previsão legal.",
      "especialista": "No nível especialista, a LGPD no setor público integra arquitetura de governança de dados e compliance. (a) DPO/Encarregado (art. 41): no poder público, indicação por ato do dirigente máximo, autonomia funcional, reporte direto à alta administração. (b) Relatório de Impacto (art. 38): obrigatório para tratamento de alto risco (ex.: biometria em controle de acesso, IA para concessão de benefícios). Metodologia: descrição do tratamento, avaliação de necessidade/proporcionalidade, riscos aos direitos, medidas mitigadoras. (c) Internacionalização: art. 33-35 (transferência internacional) — cláusulas-padrão, decisão de adequação, BCR. Órgão público que usa nuvem global (AWS/Azure/GCP) deve garantir salvaguardas. (d) IA e LGPD: art. 20 (decisão automatizada) — direito de solicitar revisão humana. Sistema que nega benefício automaticamente precisa de canal de contestação efetivo (art. 20, §1º). (e) Referências normativas verificadas: Lei nº 13.709/2018 (arts. 1º, 2º, 3º, 4º, 5º, 6º, 7º, 11, 17, 18, 20, 23, 26, 38, 41, 42, 46, 52, 55-A), Lei nº 12.527/2011 (LAI), Lei nº 12.965/2014 (Marco Civil arts. 2º, 3º, 7º, 9º §3º, 15, 19), CF/88 arts. 5º X, LXXIX, 37, 37 §3º, LC nº 131/2009. Em concursos de nível superior (auditor, procurador, analista de controle), a cobrança incide sobre desenho de governança, não decoreba de artigos."
    },
    "comparacoes": [
      {
        "tema": "Controlador vs. Operador no setor público",
        "a": {
          "rotulo": "Controlador (art. 5º, VI)",
          "texto": "Pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais. No serviço público: órgão/entidade que define a finalidade legal do tratamento (ex.: conceder benefício, cadastrar servidor, fiscalizar) e os meios essenciais (qual sistema, quais dados, por quanto tempo). Responsável por atender direitos do titular, adotar medidas de segurança (art. 46), contratar operadores com cláusulas específicas (art. 39), comunicar incidentes (art. 48)."
        },
        "b": {
          "rotulo": "Operador (art. 5º, VII)",
          "texto": "Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador. No serviço público: empresa de tecnologia, nuvem, BPO, call center que processa dados conforme instruções documentadas do controlador (contrato, termo de uso). Não define finalidade; segue instruções. Deve adotar medidas de segurança (art. 46), subcontratar só com autorização, comunicar incidentes ao controlador, apoiar no atendimento a direitos. Não responde diretamente ao titular (exceto solidariedade art. 42-45)."
        },
        "diferencaGabarito": "A pegadinha: 'A empresa de nuvem é controladora porque decide onde os dados ficam armazenados (região, data center).' — FALSO. Decisão sobre infraestrutura técnica (meios acidentais) ≠ decisão sobre finalidade e meios essenciais (art. 5º, VI). O controlador define 'PARA QUÊ' e 'QUAIS DADOS'; o operador define 'COMO TECNICAMENTE' (sob instruções). Em co-controlação (art. 5º, VI, parágrafo único), ambos definem finalidade conjuntamente — exige arranjo transparente."
      },
      {
        "tema": "Dado pessoal comum vs. Dado pessoal sensível (art. 5º, I vs. II)",
        "a": {
          "rotulo": "Dado pessoal comum (art. 5º, I)",
          "texto": "Informação relacionada a pessoa natural identificada ou identificável. Ex.: nome, CPF, matrícula, e-mail, endereço, telefone, IP, cookies, geolocalização não sensível. Regime geral: bases do art. 7º (consentimento, obrigação legal, execução de contrato, legítimo interesse, etc.), princípios do art. 6º."
        },
        "b": {
          "rotulo": "Dado pessoal sensível (art. 5º, II)",
          "texto": "Dado sobre: origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético, biométrico. Regime reforçado: bases do art. 11 (consentimento específico e destacado OU hipóteses taxativas: cumprimento de obrigação legal, políticas públicas, pesquisa, proteção da vida, tutela da saúde, defesa em processo). Princípios do art. 6º aplicam-se com rigor máximo (necessidade, minimização, finalidade)."
        },
        "diferencaGabarito": "Em prova: 'Sistema de RH armazena filiação sindical do servidor para desconto em folha. Qual regime?' — SENSÍVEL (art. 5º, II, 'filiação sindical'). Base legal: art. 11, II, 'a' (cumprimento de obrigação legal — desconto autorizado por lei) OU consentimento específico. Tratar como dado comum (art. 7º) é erro. Outra: 'Biometria para controle de acesso de servidor' — SENSÍVEL (dado biométrico, art. 5º, II). Exige base do art. 11 e relatório de impacto (art. 38)."
      },
      {
        "tema": "LGPD vs. LAI (Lei nº 12.527/2011) vs. Marco Civil (Lei nº 12.965/2014)",
        "a": {
          "rotulo": "LGPD (Lei nº 13.709/2018)",
          "texto": "Objeto: tratamento de dados pessoais (proteção da privacidade e livre desenvolvimento da personalidade). Sujeitos: controlador, operador, titular. Arts. verificados: 1º, 2º, 3º, 4º, 5º, 6º, 7º, 11, 17, 18, 20, 23, 26, 38, 41, 46, 48, 52, 55-A."
        },
        "b": {
          "rotulo": "LAI (Lei nº 12.527/2011) — Acesso à Informação",
          "texto": "Objeto: acesso a informações públicas (transparência ativa e passiva). Sujeitos: órgãos/entidades, cidadãos. Arts. verificados (Bloco 2): 1º a 38. Art. 23 LGPD menciona expressamente a LAI — leitura conjunta."
        },
        "diferencaGabarito": "Três leis, três objetos. Marco Civil = uso da Internet (direitos/deveres de usuários, neutralidade, guarda de logs arts. 15/19). LGPD = dado pessoal. LAI = informação pública. Conflito aparente: publicar nome de servidor = publicidade administrativa (LAI/CF) vs. dado pessoal (LGPD). Solução: art. 23 LGPD + art. 31 LAI + princípios (finalidade, necessidade, proporcionalidade). Publicar nome + cargo + lotação = publicidade administrativa (dado identificador, não sensível). Publicar saúde, vida sexual, opinião política = violação LGPD (dado sensível). Generalização 'LGPD proíbe publicar qualquer nome' = FALSO (pegadinha)."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A LGPD não se aplica a órgãos públicos, pois eles tratam dados por obrigação legal.",
        "porqueErrada": "O art. 1º da LGPD menciona expressamente 'pessoa jurídica de direito público' como sujeito passivo da lei. Órgãos públicos são agentes de tratamento (controladores ou operadores) e devem observar princípios, bases legais, direitos do titular, segurança (art. 46) e governança (art. 41). A 'obrigação legal de tratar' é BASE LEGAL (art. 7º, II ou art. 23), não dispensa de conformidade. O art. 4º, III, prevê exceção RESTRITA para finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal — não se estende à administração geral.",
        "versaoCorreta": "A LGPD APLICA-SE a órgãos públicos (art. 1º, 'pessoa jurídica de direito público'). O tratamento por obrigação legal é hipótese de base legal (art. 7º, II; art. 23), não isenção. A exceção do art. 4º, III, é específica e não abrange a administração geral. Órgão público deve ter encarregado (art. 41), medidas de segurança (art. 46), atender direitos do titular (art. 18) e articular com LAI (art. 23)."
      },
      {
        "afirmacaoEquivocada": "No setor público, o consentimento é a base legal principal para tratamento de dados pessoais.",
        "porqueErrada": "No poder público, o consentimento (art. 7º, I) é base EXCEPCIONAL para tratamentos obrigatórios. A coação inerente à relação cidadão-Estado invalida a livre manifestação de vontade. As bases principais são: art. 7º, II (cumprimento de obrigação legal) e art. 23 (tratamento pelo poder público: finalidade pública, atribuição legal, publicidade, minimização). Usar consentimento para tratamento obrigatório (ex.: 'consinto que meu CPF seja usado para emitir minha certidão') é vício de consentimento (livre? informado? sem coação?).",
        "versaoCorreta": "No setor público, as bases legais predominantes são obrigação legal (art. 7º, II) e finalidade pública/atribuição legal (art. 23). O consentimento (art. 7º, I) é reservado para tratamentos NÃO obrigatórios, onde o titular tem escolha real (ex.: pesquisa de satisfação opcional, adesão a programa de fidelidade). Em tratamento obrigatório (cadastro, tributação, benefício, fiscalização), usar consentimento é erro jurídico."
      },
      {
        "afirmacaoEquivocada": "Dado anonimizado (art. 5º, III) pode ser livremente compartilhado e publicado, pois não é mais dado pessoal.",
        "porqueErrada": "A definição do art. 5º, III, exige que o dado anonimizado tenha perdido a possibilidade de associação DIRETA OU INDIRETA a indivíduo, 'salvo uso de método reversível'. Anonimização malfeita (pseudonimização, hash sem sal, supressão apenas de identificadores diretos) permite reidentificação por linkage attack (cruzamento com bases públicas). Além disso, a LGPD não regula dado anonimizado, mas a ANPD pode exigir demonstração da irreversibilidade. 'Anonimizado' declarado sem metodologia validada é risco de vazamento.",
        "versaoCorreta": "Dado anonimizado (art. 5º, III) é aquele que, por meios técnicos razoáveis e disponíveis no momento do tratamento, não permite a identificação do titular, direta ou indiretamente, exceto se usado método reversível. A anonimização deve ser robusta (k-anonimato e privacidade diferencial, com metodologia documentada). Pseudonimização (art. 5º, §1º) NÃO é anonimização — continua sendo dado pessoal. Compartilhamento de 'dado anonimizado' sem validação técnica é violação potencial."
      },
      {
        "afirmacaoEquivocada": "A LGPD e a LAI são leis conflitantes: uma proíbe divulgar, a outra obriga publicar.",
        "porqueErrada": "Não há conflito, há articulação. O art. 23 da LGPD menciona expressamente a LAI, sinalizando leitura conjunta. A LAI regula acesso a INFORMAÇÕES PÚBLICAS (transparência). A LGPD regula tratamento de DADOS PESSOAIS. A conciliação se faz pela natureza da informação: (1) Informação pública não pessoal (ex.: contratos, licitações, estrutura orgânica) — LAI manda publicar, LGPD não se opõe. (2) Dado pessoal comum identificador (ex.: nome, cargo, lotação de servidor) — publicidade administrativa (CF art. 37, §3º; LC nº 131/2009) prevalece, com base legal art. 7º, II ou art. 23 LGPD. (3) Dado pessoal SENSÍVEL (saúde, vida sexual, opinião política, biométrico) — LGPD prevalece (regime restritivo art. 11); LAI art. 31, §1º, veda divulgação de informação que viole intimidade. Método: 1) Qual a natureza? 2) Qual a finalidade? 3) Há base legal? 4) É necessário e proporcional? 5) O que diz a assessoria jurídica?",
        "versaoCorreta": "LGPD e LAI se complementam (art. 23 LGPD menciona LAI). A transparência pública (LAI/CF) convive com proteção de dados (LGPD) através da análise de finalidade, necessidade, proporcionalidade e base legal. Dado sensível não se publica; dado identificador de servidor em cargo público publica-se (publicidade administrativa). Conflito aparente resolve-se pelo método de decisão articulado, não por hierarquia rígida."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "LGPD (Lei nº 13.709/2018): tratamento de dados pessoais, inclusive no setor público (art. 1º)",
        "Art. 3º: aplicação territorial (território nacional, oferta a brasileiros, dados coletados no Brasil)",
        "Art. 4º: exceções (particular não econômico, jornalístico/artístico/acadêmico, segurança pública/defesa EXCLUSIVAS)",
        "Art. 5º: conceitos — dado pessoal (I), sensível (II), anonimizado (III), controlador (VI), operador (VII)",
        "Controlador = define finalidade e meios; Operador = trata em nome do controlador",
        "Dado sensível (art. 5º, II): racial, religioso, político, sindical, saúde, vida sexual, genético, biométrico — regime art. 11",
        "Art. 23: tratamento pelo poder público — finalidade pública, atribuição legal, publicidade, minimização",
        "Art. 46: medidas de segurança técnicas e administrativas",
        "Art. 23 LGPD menciona LAI — leitura conjunta; Marco Civil = objeto distinto (uso da Internet)"
      ],
      "regras": [
        "Regra da incidência: art. 1º alcança pessoa jurídica de direito público — não há isenção geral",
        "Regra da base legal no poder público: art. 7º, II (obrigação legal) e art. 23 (finalidade pública) prevalecem sobre consentimento",
        "Regra do dado sensível: art. 5º, II + art. 11 — base legal específica, consentimento específico e destacado",
        "Regra da anonimização: irreversibilidade técnica razoável (art. 5º, III), não pseudonimização",
        "Regra da articulação LAI/LGPD: natureza da informação (pública vs. pessoal vs. sensível) define o regime"
      ],
      "comparacoes": [
        "Controlador (define finalidade) vs. Operador (processa sob instruções) — meios essenciais vs. acidentais",
        "O dado pessoal comum, regido pelo art. 7º da LGPD, admite as bases gerais de tratamento; já o dado pessoal sensível, do art. 11, está sujeito a um regime restritivo que exige base legal específica.",
        "A LGPD protege dados pessoais, a LAI garante o acesso a informações públicas e o Marco Civil disciplina o uso da Internet — três objetos distintos que devem ser lidos em conjunto.",
        "A anonimização é irreversível e retira o dado do âmbito da LGPD, ao passo que a pseudonimização é reversível e o dado continua sendo dado pessoal"
      ],
      "fluxos": [
        "Cenário de tratamento → Identificar controlador/operador → Classificar dado (comum/sensível) → Escolher base legal (art. 7º/11/23) → Verificar princípios (art. 6º) → Aplicar medidas (art. 46) → Atender direitos (art. 18)"
      ],
      "excecoes": [
        "Art. 4º, I: pessoa natural para fins exclusivamente particulares e não econômicos",
        "O art. 4º, II da LGPD exclui do seu âmbito as finalidades exclusivamente jornalísticas, artísticas ou acadêmicas.",
        "O art. 4º, III reserva como exceção as finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação ou repressão penal, ressalvados os §§ 1º e 2º do mesmo artigo.",
        "O art. 11, II lista as bases legais que permitem tratar dado sensível sem consentimento, entre elas a obrigação legal, a política pública, a pesquisa, a proteção da vida, a tutela da saúde e a defesa em processo.",
        "Poder público: consentimento não é base para tratamento obrigatório (coação invalida livre manifestação)"
      ],
      "palavrasChave": [
        "LGPD",
        "Lei nº 13.709/2018",
        "dado pessoal",
        "dado sensível",
        "controlador",
        "operador",
        "base legal",
        "consentimento",
        "obrigação legal",
        "finalidade pública",
        "art. 23",
        "art. 46",
        "ANPD",
        "encarregado",
        "DPO",
        "LAI",
        "Lei nº 12.527/2011",
        "Marco Civil",
        "Lei nº 12.965/2014",
        "anonimização",
        "pseudonimização",
        "art. 5º",
        "art. 7º",
        "art. 11",
        "art. 18",
        "art. 20"
      ],
      "checklist": [
        "Sei citar art. 1º (incidência no poder público), art. 3º (aplicação), art. 4º (exceções), art. 5º (conceitos)",
        "Distinguo controlador de operador em contratos de tecnologia pública (SaaS, nuvem, BPO)",
        "Classifico dado como comum ou sensível (art. 5º, II) e sei o regime de cada um (art. 7º vs art. 11)",
        "Identifico a pegadinha 'LGPD não se aplica a órgão público' e contraponho com art. 1º",
        "Sei que consentimento NÃO é base principal no poder público (art. 7º, II e art. 23 prevalecem)",
        "Distinguo anonimização (irreversível) de pseudonimização (reversível, continua dado pessoal)",
        "Aplico método de decisão LAI/LGPD: natureza → finalidade → base legal → necessidade/proporcionalidade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Prefeitura contrata empresa de nuvem (SaaS) para hospedar sistema de cadastro único de cidadãos (nome, CPF, endereço, telefone, renda). Classifique controlador e operador; identifique base legal; verifique se há dado sensível.",
        "dados": "Contrato: prefeitura define finalidade (cadastro único para programas sociais), campos obrigatórios, retenção (10 anos após último acesso). Empresa fornece infraestrutura, backup, criptografia, monitoramento. Empresa NÃO usa dados para analytics próprio. Base legal citada no edital: 'obrigação legal — lei municipal institui o cadastro'. Dados: nome, CPF, endereço, telefone, renda, composição familiar. NÃO há opinião política, saúde, biométrico.",
        "conceitos": [
          "Controlador (art. 5º, VI): define finalidade e meios essenciais",
          "Operador (art. 5º, VII): trata em nome do controlador sob instruções",
          "Nome, CPF, endereço, telefone e renda são exemplos de dado pessoal comum (art. 5º, I), informação que identifica ou torna identificável uma pessoa natural",
          "A base legal do tratamento pela prefeitura é a obrigação legal (art. 7º, II), reforçada pelo art. 23, que disciplina o tratamento realizado pelo poder público",
          "Princípios art. 6º: finalidade, adequação, necessidade, minimização"
        ],
        "estrategia": "Aplicar definições do art. 5º ao caso: quem decide 'para quê' e 'quais dados'? A prefeitura (lei municipal cria cadastro único). Quem executa tecnicamente? A empresa (infraestrutura). Base legal: lei municipal impõe cadastro → obrigação legal (art. 7º, II) + finalidade pública (art. 23). Dados listados são comuns (não sensíveis). Verificar cláusulas de segurança no contrato (art. 39, 46).",
        "execucao": [
          "Passo 1: Controlador = Prefeitura. Fundamento: Lei municipal cria Cadastro Único, define finalidade (programas sociais), campos, retenção. Prefeitura decide 'para quê' e 'quais dados'. Art. 5º, VI verificado.",
          "Passo 2: Operador = Empresa de nuvem. Fundamento: Contrato diz 'processar dados conforme instruções da Prefeitura'. Empresa fornece meios técnicos (servidores, criptografia, backup) — meios acidentais. Não define finalidade nem campos. Art. 5º, VII verificado.",
          "Passo 3: Classificação dos dados. Nome, CPF, endereço, telefone, renda, composição familiar = dados pessoais comuns (art. 5º, I). NÃO há origem racial, opinião política, saúde, biométrico = NÃO há dado sensível (art. 5º, II).",
          "Passo 4: Base legal. Lei municipal impõe cadastro → obrigação legal (art. 7º, II). Poder público com finalidade pública (art. 23). Consentimento (art. 7º, I) NÃO é base (tratamento obrigatório para acesso a benefícios).",
          "Passo 5: Verificações de conformidade. Contrato tem cláusula de segurança (art. 39, 46)? Empresa tem encarregado (art. 41)? Prefeitura tem canal de direitos do titular (art. 18)? Retenção 10 anos compatível com finalidade?"
        ],
        "resultado": "Controlador: Prefeitura (define finalidade legal e meios essenciais). Operador: Empresa de nuvem (processa sob instruções). Dados: todos comuns (art. 5º, I). Base legal: art. 7º, II (obrigação legal) + art. 23 (poder público). Conformidade exige: cláusulas contratuais art. 39, medidas art. 46, canal art. 18, encarregado art. 41.",
        "justificativa": "A classificação controlador/operador deriva do art. 5º, VI-VII: quem tem poder de decisão sobre finalidade e meios essenciais é controlador. No setor público, a lei/ato normativo confere esse poder ao órgão. A empresa de nuvem, embora decida aspectos técnicos (região do data center, tipo de disco, versão do banco), não decide 'para quê' nem 'quais dados' — são meios acidentais. Base legal: tratamento obrigatório por lei municipal = obrigação legal (art. 7º, II) e finalidade pública (art. 23). O consentimento seria inválido (coação: sem cadastro, sem benefício). Dados listados não se enquadram no rol taxativo do art. 5º, II (racial, religioso, político, sindical, saúde, vida sexual, genético, biométrico). Renda e composição familiar são dados econômicos/sociais, não sensíveis.",
        "errosFrequentes": [
          "Classificar empresa de nuvem como controladora porque 'hospeda os dados'",
          "Dizer que base legal é consentimento (tratamento obrigatório invalida livre manifestação)",
          "Classificar renda ou composição familiar como dado sensível (não estão no art. 5º, II)",
          "Esquecer de citar art. 23 (tratamento pelo poder público) como base complementar"
        ],
        "variacao": "Mesmo cenário, mas a empresa de nuvem propõe 'usar dados anonimizados para melhorar seus algoritmos de detecção de fraude'. Análise: se anonimização for robusta (irreversível, art. 5º, III), empresa vira controladora do novo tratamento (finalidade própria). Se for pseudonimização (reversível), continua operadora e precisa de instrução específica do controlador. Testa: distinção anonimização vs pseudonimização e mudança de papel."
      },
      {
        "tipo": "aplicacao",
        "problema": "Órgão público implementa controle de acesso biométrico (digital) para servidores. Dado biométrico é sensível (art. 5º, II). Qual base legal do art. 11? Quais salvaguardas? É necessário Relatório de Impacto (art. 38)?",
        "dados": "Portaria institui controle de acesso por digital em todas as unidades. Finalidade: segurança patrimonial, registro de ponto. Base legal citada: 'interesse legítimo da administração'. Dados: digital (biométrico), nome, matrícula, unidade, timestamp. Retenção: 5 anos. Compartilhamento: empresa de segurança privada (monitoramento).",
        "conceitos": [
          "Dado biométrico = sensível (art. 5º, II, 'dado biométrico')",
          "Bases do art. 11: consentimento específico OU hipóteses taxativas (II, a-g)",
          "Interesse legítimo (art. 7º, IX) NÃO é base para dado sensível",
          "Relatório de Impacto (art. 38): obrigatório para alto risco (biometria em larga escala)",
          "As medidas de segurança reforçadas (art. 46) incluem criptografia e controle de acesso restrito, exigidas para proteger os dados pessoais tratados"
        ],
        "estrategia": "Identificar: digital = biométrico = sensível (art. 5º, II). Art. 11 NÃO admite 'interesse legítimo' como base para sensível. Bases possíveis: (a) consentimento específico e destacado (art. 11, I) — mas servidor pode se recusar? Se recusa, não entra no órgão? Coação invalida. (b) Obrigação legal (art. 11, II, 'a') — precisa de LEI (não portaria) autorizando biometria para ponto/segurança. (c) Proteção da vida/integridade (art. 11, II, 'd') — argumento de segurança patrimonial. (d) Tutela da saúde (art. 11, II, 'e') — não se aplica. Relatório de Impacto (art. 38) é OBRIGATÓRIO: biometria + larga escala + monitoramento = alto risco. Empresa de segurança = operadora (art. 39).",
        "execucao": [
          "Passo 1: Classificação. Digital = dado biométrico = sensível (art. 5º, II, verificado). Regime art. 11.",
          "Passo 2: Base legal. 'Interesse legítimo' (art. 7º, IX) NÃO serve para sensível (art. 11 não lista). Opções do art. 11, II: (a) consentimento específico — servidor pode recusar? Se não, coação. (b) Obrigação legal — precisa LEI (art. 11, II, 'a'), não portaria. (c) Proteção da vida/integridade física (art. 11, II, 'd') — argumento de segurança. (d) Tutela da saúde (art. 11, II, 'e') — não cabe. (e) Defesa em processo (art. 11, II, 'f') — não cabe. (f) Prevenção à fraude (art. 11, II, 'g') — possível, mas precisa de lei.",
          "Passo 3: Relatório de Impacto (art. 38). Biometria + todas as unidades + monitoramento contínuo = alto risco. RIPD OBRIGATÓRIO antes de implantar. Conteúdo: descrição, necessidade/proporcionalidade, riscos (vazamento, uso indevido, falsificação), medidas (criptografia, acesso restrito, logs, retenção).",
          "Passo 4: Medidas de segurança (art. 46). Criptografia em repouso e trânsito. Acesso restrito (need-to-know). Logs de auditoria imutáveis. Teste de penetração anual. Plano de resposta a incidente (art. 48).",
          "Passo 5: Empresa de segurança = operadora. Contrato art. 39: instruções documentadas, segurança, subcontratação só com autorização, comunicação de incidente, apoio a direitos do titular."
        ],
        "resultado": "Base legal viável: art. 11, II, 'a' (obrigação legal) — EXIGE LEI EM SENTIDO FORMAL autorizando biometria para ponto/segurança. Portaria não basta. Alternativa: art. 11, II, 'd' (proteção da vida/integridade) com lei de segurança institucional. RIPD (art. 38) OBRIGATÓRIO. Medidas art. 46 reforçadas. Empresa = operadora (art. 39). Sem lei formal, implementação é irregular.",
        "justificativa": "O art. 11 estabelece regime ESPECIAL para dado sensível: bases taxativas, não admite 'interesse legítimo'. A biometria em controle de acesso de servidores envolve processamento em larga escala de dado sensível (digital), com risco alto de vazamento e uso indevido (falsificação de digital, acesso não autorizado a sistemas). O RIPD (art. 38) é pré-requisito para demonstrar necessidade e proporcionalidade. A base 'obrigação legal' (art. 11, II, 'a') exige LEI (não decreto, não portaria) — princípio da legalidade (CF art. 5º, II). A exceção 'proteção da vida/integridade' (art. 11, II, 'd') também pressupõe previsão legal. Empresa de segurança é operadora (processa digital para autenticação sob instruções do órgão). Contrato deve ter cláusulas art. 39.",
        "errosFrequentes": [
          "Usar 'interesse legítimo' (art. 7º, IX) como base para dado sensível (art. 11 não prevê)",
          "Achar que portaria/ato normativo interno basta para 'obrigação legal' (precisa LEI)",
          "Dispensar RIPD (art. 38) alegando 'é só ponto eletrônico' (biometria + larga escala = alto risco)",
          "Não classificar empresa de segurança como operadora (art. 39) e omitir cláusulas contratuais"
        ],
        "variacao": "Órgão usa reconhecimento facial (biométrico) para acesso a sistema de concessão de benefício (cidão). Análise: mesmo regime (art. 5º, II + art. 11). Base: art. 11, II, 'a' (lei autorizando) OU 'c' (política pública) OU 'g' (prevenção à fraude). RIPD obrigatório. Testa: mesma estrutura, finalidade diferente (benefício vs. ponto), mesmo regime jurídico."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A LGPD não se aplica a órgãos públicos, pois eles tratam dados por obrigação legal.'",
        "dados": "Item C/E de concurso: 'Considerando a LGPD, é correto afirmar que órgãos da administração pública direta estão dispensados de observar a lei quando o tratamento decorre de obrigação legal.'",
        "conceitos": [
          "O art. 1º da LGPD estende a lei à pessoa jurídica de direito público, de modo que órgãos públicos estão expressamente abrangidos pelo seu disposto",
          "A obrigação legal funciona como base legal para o tratamento (art. 7º, II e art. 23 da LGPD), não como isenção de conformidade com a lei de proteção de dados",
          "O art. 4º, III prevê exceção restrita, limitada às finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação ou repressão penal",
          "Princípios (art. 2º, 6º), direitos (art. 18), segurança (art. 46), encarregado (art. 41) — todos se aplicam"
        ],
        "estrategia": "Desconstruir a falácia em 3 pilares: (1) Texto legal: art. 1º menciona 'pessoa jurídica de direito público'. (2) Lógica jurídica: base legal ≠ isenção; obrigação legal AUTORIZA o tratamento, não DISPENSA a conformidade (princípios, direitos, segurança). (3) Exceção real: art. 4º, III é específica e não abrange administração geral. Demonstrar com contraexemplo: órgão que trata dado sensível de servidor (saúde) por obrigação legal — ainda precisa de base art. 11, RIPD, segurança reforçada.",
        "execucao": [
          "Passo 1: Citar art. 1º: 'Esta Lei dispõe sobre o tratamento de dados pessoais [...] por pessoa natural ou por pessoa jurídica de direito público ou privado'. Texto expresso = sem dúvida.",
          "Passo 2: Explicar 'obrigação legal'. Art. 7º, II: 'cumprimento de obrigação legal [...] pelo controlador'. Art. 23: tratamento pelo poder público exige finalidade pública, atribuição legal, publicidade, minimização. A obrigação legal É a base que LEGITIMA o tratamento; não o isenta de observar princípios (art. 6º), direitos (art. 18), segurança (art. 46), encarregado (art. 41).",
          "Passo 3: Analisar exceção real. Art. 4º, III: 'finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais'. Palavra 'exclusivas' + rol taxativo. Administração geral (RH, tributação, benefícios, licenciamento) NÃO se enquadra. Ressalvas dos §§ 1º-2º mantêm princípios e direitos mesmo nas exceções.",
          "Passo 4: contraexemplo prático. A Secretaria de Saúde trata prontuário (dado sensível de saúde) com base na obrigação legal prevista na Lei nº 8.080/90. Mesmo assim, exige base do art. 11, II (consentimento ou obrigação legal), relatório de impacto (art. 38), segurança reforçada (art. 46) e atendimento aos direitos do paciente (art. 18); a obrigação legal não dispensou nenhuma dessas exigências."
        ],
        "resultado": "Item FALSO. A LGPD aplica-se a órgãos públicos (art. 1º). Obrigação legal é base legal (art. 7º, II; art. 23), não isenção. Exceção do art. 4º, III é restrita a segurança/defesa EXCLUSIVAS. Órgão público deve observar princípios, direitos, segurança, encarregado, RIPD quando couber.",
        "justificativa": "A falácia confunde 'autorização para tratar' (base legal) com 'dispensa de conformidade'. No direito administrativo, a lei que obriga a tratar (ex.: cadastrar contribuinte) não afasta a lei que regula COMO tratar (LGPD). Princípio da legalidade (CF art. 5º, II) exige que a restrição a direitos (privacidade) tenha base legal — a LGPD É essa lei de regulação. O art. 23 LGPD menciona expressamente a LAI, mostrando que o legislador previu a convivência de regimes no setor público. Itens que afirmam 'LGPD não se aplica ao poder público' ou 'obrigação legal dispensa LGPD' são SEMPRE falsos. A exceção do art. 4º, III é a ÚNICA isenção parcial, e mesmo assim com ressalvas (§§ 1º-2º).",
        "errosFrequentes": [
          "Confundir base legal (art. 7º, II) com isenção de conformidade",
          "Estender art. 4º, III para 'qualquer atividade de segurança' (ex.: guarda municipal de trânsito não é 'exclusivamente segurança pública')",
          "Esquecer que mesmo nas exceções do art. 4º, III, os §§ 1º-2º mantêm princípios e direitos",
          "Não citar art. 1º como fundamento textual direto da incidência no poder público"
        ],
        "variacao": "Item: 'A LGPD afasta a incidência da LAI sobre conjuntos de dados comuns aos dois regimes.' — FALSO. Art. 23 LGPD menciona LAI; art. 31 LAI veda divulgação que viole intimidade. Leis se complementam. Testa: articulação LAI/LGPD, não conflito."
      }
    ]
  },
  "m4-u4-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Fundamentos e direitos do titular (arts. 2º, 17 e 18) formam o núcleo dos direitos subjetivos da LGPD e são cobrados de forma direta: as bancas pedem a enumeração dos incisos do art. 18 e o enquadramento de pedidos de confirmação, correção e eliminação no serviço público. O erro recorrente é tratar a eliminação como poder absoluto do titular sobre qualquer dado.",
      "preRequisitos": [
        "Conceitos do art. 5º da LGPD: dado pessoal, titular, controlador e operador",
        "Incidência da LGPD sobre o poder público (art. 1º e art. 23)",
        "Noção de base legal para o tratamento (art. 7º e art. 23)"
      ],
      "objetivosObservaveis": [
        "Enumerar os fundamentos do art. 2º e associar cada um ao interesse que protege, da autodeterminação informativa ao desenvolvimento econômico",
        "Reconhecer os direitos do art. 18 e indicar o inciso correspondente a cada pedido do titular, de confirmação a revogação do consentimento",
        "Descrever o fluxo prático de atendimento a um pedido no órgão: canal formal, identificação, verificação, prazo e registro"
      ],
      "competencias": [
        "Leitura normativa dos incisos: associar o pedido do titular ao inciso do art. 18 correspondente",
        "Raciocínio de conformidade: balancear o direito do titular com a obrigação legal de manutenção do dado",
        "Organização de processo administrativo: documentar recebimento, resposta e prazo do pedido"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — conceitos do art. 5º usados aqui",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — dever de segurança que sustenta os direitos",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — convivência entre transparência e proteção de dados",
        "m6-u3-t1-s2 (LGPD: objeto, fundamentos, aplicação, exceções, direitos do titular e dever de segurança) — revisão do tema no Módulo 6"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A enumeração dos direitos do art. 18 integra o conteúdo programático, com incisos isolados como confirmação e portabilidade e cenários de correção de cadastro. Classificação alta em estimativa pedagógica, pela centralidade do tema no conteúdo programático de TI e de controle."
      }
    },
    "niveis": {
      "iniciante": "A LGPD parte de fundamentos como o respeito à privacidade e a autodeterminação informativa (art. 2º) e assegura a toda pessoa natural a titularidade dos próprios dados (art. 17). O titular pode pedir confirmação de que o órgão trata seus dados, acesso ao conteúdo, correção de informações inexatas e eliminação ou anonimização de dados excessivos (art. 18). O pedido é formal, com identificação, e a resposta segue o canal previsto.",
      "intermediario": "Cada direito corresponde a um inciso do art. 18 e a um procedimento: a correção (inciso III) deve propagar-se a todas as bases relacionadas; a anonimização, o bloqueio ou a eliminação (inciso IV) cabem para dados desnecessários, excessivos ou em desconformidade; a portabilidade (inciso V) e a informação sobre compartilhamentos (inciso VI) pressupõem controle de quem recebeu o dado. A publicação de informações de ofício reduz o volume de pedidos.",
      "avancado": "O exercício dos direitos convive com o regime do poder público: dados mantidos por obrigação legal ou para o exercício regular de direitos podem não ser elimináveis, e a resposta deve ser fundamentada caso a caso, com apoio da assessoria jurídica. A revogação do consentimento (inciso VIII) perde objeto quando o tratamento se apoia em obrigação legal, e o órgão comunica ao titular a possibilidade de não fornecer consentimento e suas consequências (inciso VII).",
      "especialista": "Na governança madura, os direitos do titular viram processo medido: canal único, prazo interno documentado, indicadores de atendimento e revisão periódica das bases para eliminar de ofício o dado excessivo, antecipando pedidos. O desenho contempla dados anonimizados para estatística, fora do regime de direitos, desde que a irreversibilidade seja técnica e documentada, e o encarregado articula pedidos, tecnologia e assessoria jurídica."
    },
    "comparacoes": [
      {
        "tema": "Confirmação (art. 18, I) versus acesso (art. 18, II)",
        "a": {
          "rotulo": "Confirmação do tratamento",
          "texto": "Resposta objetiva sobre a existência ou inexistência de tratamento dos dados do titular, sem entrega do conteúdo; cabe quando o cidadão quer saber se o órgão mantém cadastro dele."
        },
        "b": {
          "rotulo": "Acesso aos dados",
          "texto": "Entrega de quais dados são tratados e de sua finalidade, conforme o caso até cópia do conteúdo; pressupõe verificação nos sistemas e controle de identidade do solicitante."
        },
        "diferencaGabarito": "A confirmação responde se há tratamento; o acesso revela quais dados e como são tratados. Em prova, pedido de mera constatação remete ao inciso I, e pedido de conteúdo ou cópia remete ao inciso II."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'O titular pode exigir exclusão de qualquer dado que o órgão mantém por obrigação legal.'",
        "porqueErrada": "Os direitos do art. 18 são exercidos dentro do regime legal de cada tratamento: quando a manutenção decorre de obrigação legal ou é necessária ao exercício regular de direitos, a eliminação pode ser inviável, e a recusa deve ser fundamentada. Tratar o direito como poder absoluto ignora as bases legais que autorizam o tratamento.",
        "versaoCorreta": "Errado. Direitos do titular são exercidos dentro do regime legal: dados mantidos por obrigação legal ou para exercício regular de direitos podem não ser elimináveis — a fundamentação deve ser verificada caso a caso; a eliminação não é poder absoluto."
      },
      {
        "afirmacaoEquivocada": "Portabilidade e revogação do consentimento são direitos exclusivos de clientes de empresas privadas, sem aplicação ao serviço público.",
        "porqueErrada": "O rol do art. 18 vale para todo tratamento alcançado pela LGPD, inclusive o do poder público; o que muda é a base legal. Quando o tratamento não se apoia em consentimento, a revogação perde objeto prático, mas o direito permanece previsto, e a portabilidade depende de viabilidade técnica e regulamentar, não do setor do controlador.",
        "versaoCorreta": "Os direitos do art. 18, inclusive portabilidade (inciso V) e revogação do consentimento (inciso VIII), alcançam também o poder público; o efeito prático de cada um depende da base legal do tratamento, que no serviço público costuma ser a obrigação legal, e não o consentimento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Fundamentos do art. 2º",
        "Autodeterminação informativa",
        "Titularidade (art. 17)",
        "Direitos do titular (art. 18)",
        "Transparência ativa"
      ],
      "regras": [
        "Todo pedido do titular é formal, com identificação do solicitante e resposta registrada",
        "A correção (art. 18, III) deve alcançar todas as bases relacionadas ao dado retificado",
        "Dados mantidos por obrigação legal podem não ser elimináveis a pedido do titular"
      ],
      "comparacoes": [
        "Confirmação (inciso I) constata a existência do tratamento; acesso (inciso II) entrega o conteúdo e a finalidade"
      ],
      "fluxos": [
        "Pedido do titular, identificação, verificação nos sistemas, resposta fundamentada no prazo, registro e, quando cabível, retificação em todas as bases"
      ],
      "excecoes": [
        "A eliminação a pedido (inciso IV) não alcança dado cuja manutenção decorre de obrigação legal ou de exercício regular de direitos"
      ],
      "palavrasChave": [
        "autodeterminação informativa",
        "titular",
        "art. 18",
        "confirmação",
        "portabilidade",
        "revogação do consentimento"
      ],
      "checklist": [
        "Enumero os fundamentos do art. 2º e ligo cada um ao interesse protegido",
        "Associo cada pedido do titular ao inciso do art. 18 correspondente",
        "Descrevo o fluxo administrativo de atendimento ao pedido",
        "Explico por que a eliminação não é absoluta no serviço público",
        "Distingo confirmação (inciso I) de acesso (inciso II)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Cidadão pede confirmação se o órgão trata dados dele. Que direito é esse e como atender?",
        "dados": "Pedido protocolado pelo canal de ouvidoria com nome completo e CPF do solicitante; os sistemas do órgão registram cadastro com dados do cidadão e não há compartilhamento recente a terceiros.",
        "conceitos": [
          "Direito de confirmação (art. 18, I)",
          "Identificação do titular"
        ],
        "estrategia": "Enquadrar o pedido no inciso I do art. 18 e seguir o rito formal: autenticar o solicitante, verificar os sistemas e responder de forma registrada.",
        "execucao": [
          "Protocolar o pedido e validar a identidade do titular",
          "Consultar os sistemas e confirmar a existência de tratamento",
          "Responder pelo canal formal, registrando a existência do tratamento e a finalidade correspondente"
        ],
        "resultado": "Direito de confirmação (art. 18, I — verificado). Atendimento: canal formal, identificação do titular, verificação nos sistemas, resposta objetiva registrando existência ou inexistência de tratamento e finalidade correspondente.",
        "justificativa": "O inciso I do art. 18 assegura ao titular a confirmação da existência de tratamento, e a resposta objetiva documentada é a evidência de conformidade do órgão. O rito formal protege também o titular, impedindo que terceiros consultem dados alheios sob pretexto de pedido.",
        "errosFrequentes": [
          "Responder informalmente, sem protocolo nem registro",
          "Entregar conteúdo completo quando o pedido pedia apenas confirmação"
        ],
        "variacao": "Troque a confirmação por pedido de acesso: a resposta passa a indicar quais dados são tratados e a finalidade, exigindo consulta detalhada às bases em vez de mera constatação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Servidor identifica dados desatualizados em cadastro interno. Quais direitos cabem e qual a resposta esperada?",
        "dados": "Cadastro interno mantém endereço antigo e formação acadêmica incorreta do servidor; há ainda campo de observações pessoais sem finalidade definida, coletado em formulário antigo e não usado por nenhum processo.",
        "conceitos": [
          "Correção (art. 18, III)",
          "Eliminação de dado excessivo (art. 18, IV)"
        ],
        "estrategia": "Separar o pedido em duas frentes: retificar os dados inexatos, propagando a correção às bases relacionadas, e examinar o campo sem finalidade à luz da necessidade.",
        "execucao": [
          "Formalizar o pedido de correção pelo canal interno previsto",
          "Retificar endereço e formação no cadastro e nas bases relacionadas, com registro da alteração",
          "Classificar o campo de observações como desnecessário e solicitar anonimização ou eliminação nos termos do inciso IV"
        ],
        "resultado": "Correção (art. 18, III — verificado) e, se o dado for excessivo para a finalidade, eliminação ou anonimização (art. 18, IV — verificado). A correção deve refletir-se em todas as bases relacionadas, com registro da alteração.",
        "justificativa": "O inciso III assegura a correção de dados incompletos, inexatos ou desatualizados, e o inciso IV alcança dados desnecessários ou excessivos. A retificação deve alcançar as bases derivadas, para não preservar o erro em outro sistema, e o registro documental evidência o atendimento.",
        "errosFrequentes": [
          "Corrigir apenas o cadastro principal, deixando o erro nas bases relacionadas",
          "Manter o campo sem finalidade por comodidade, contra a necessidade"
        ],
        "variacao": "Troque o dado desatualizado por opinião registrada em avaliação funcional: a revisão de mérito segue rito próprio, e o direito do art. 18 não serve para reescrever juízo de valor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O titular pode exigir exclusão de qualquer dado que o órgão mantém por obrigação legal.'",
        "dados": "Item de prova afirma o direito de exclusão sobre dados de folha de pagamento mantidos por determinação legal; o órgão guarda os registros para fiscalização e defesa administrativa.",
        "conceitos": [
          "Eliminação não é poder absoluto",
          "Obrigação legal como base do tratamento"
        ],
        "estrategia": "Desconstruir a generalização identificando a base legal do tratamento e mostrando que a recusa fundamentada é a resposta compatível com o art. 18.",
        "execucao": [
          "Identificar a base legal que sustenta a manutenção dos dados de folha",
          "Verificar se o dado é necessário à finalidade e ao prazo de guarda",
          "Fundamentar a resposta ao titular, indicando a previsão legal aplicável"
        ],
        "resultado": "Errado. O direito de eliminação é exercido dentro do regime de cada tratamento: quando a manutenção decorre de obrigação legal ou é necessária ao exercício regular de direitos, o órgão fundamenta a permanência, e o pedido não vira exclusão automática.",
        "justificativa": "O art. 18 disciplina os direitos dentro do regime legal do tratamento; a eliminação do inciso IV restringe-se a dados desnecessários, excessivos ou em desconformidade. Dado mantido por obrigação legal cumpre finalidade legítima, e a negativa fundamentada, com indicação da previsão aplicável, é resposta conforme a lei.",
        "errosFrequentes": [
          "Afirmar que todo dado pode ser excluído a pedido, sem examinar a base legal",
          "Negar o pedido sem fundamentação, descumprindo o dever de resposta"
        ],
        "variacao": "Troque a folha pelo registro de atendimento médico do servidor: o prazo legal de guarda continua afastando a exclusão automática, agora no regime reforçado do dado sensível de saúde."
      }
    ]
  },
  "m4-u4-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O art. 46 da LGPD é o dispositivo central de segurança da lei e é cobrado em concursos de TI, controle e administrativas. Ele exige que todo agente de tratamento adote medidas técnicas e administrativas aptas a proteger dados pessoais contra acessos não autorizados e contra destruição, perda, alteração ou comunicação ilícita. Para o dia a dia do órgão, isso traduz-se em autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria, backup imutável, política de acesso, contratos com operadores e treinamento. Distinguir 'o que a lei exige' (dispositivo verificado) de 'boa prática recomendável' evita a pegadinha clássica de afirmar obrigações que o texto não prevê.",
      "preRequisitos": [
        "Conceito de dado pessoal e dado pessoal sensível (art. 5º, I e II)",
        "Diferença entre controlador e operador (art. 5º, VI e VII)",
        "Noção de base legal para tratamento no poder público (art. 7º e art. 23)",
        "Princípios da LGPD: finalidade, adequação, necessidade e minimização (art. 6º)"
      ],
      "objetivosObservaveis": [
        "Relacionar o art. 46 da LGPD às medidas técnicas e administrativas exigidas dos agentes de tratamento",
        "Distinguir, em um cenário de órgão público, o que a lei exige do que é boa prática recomendável",
        "Classificar uma medida de segurança como técnica (ex.: criptografia) ou administrativa (ex.: política de acesso)",
        "Aplicar o art. 46 como parâmetro de adequação após a confirmação de um incidente de vazamento de dados"
      ],
      "competencias": [
        "Leitura técnica de dispositivo legal: extrair do texto o que é exigência e o que é recomendação",
        "Classificação de controles de segurança em técnicas e administrativas",
        "Pensamento de governança: ligar a exigência legal à rotina operacional do órgão",
        "Cautela normativa: não citar prazos ou artigos não verificados sem conferir fonte oficial"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s2 (Fundamentos, titularidade e direitos do titular) — arts. 2º, 17, 18",
        "m4-u4-t2-s1 (Marco Civil da Internet — Lei nº 12.965/2014) — distinção de objeto e artes de uso da Internet",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — art. 23 LGPD menciona a LAI"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Segurança da informação e LGPD no setor público integram o conteúdo programático, especialmente em itens C/E sobre medidas técnicas e administrativas do art. 46 e sobre a aplicação da lei a órgãos públicos. A classificação é uma estimativa pedagógica qualitativa baseada na centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "O art. 46 da LGPD determina que os agentes de tratamento adotem medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais contra acessos não autorizados e contra situações acidentais ou ilícitas, como destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito. As medidas técnicas incluem autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria e backup imutável. As medidas administrativas incluem política de acesso, contratos com operadores, treinamento de servidores, procedimento de resposta a incidentes e gestão de licenças e saídas. O texto do dispositivo foi verificado no plano oficial.",
      "intermediario": "No nível intermediário, o aluno aplica o art. 46 a um cenário concreto de órgão público: dado um fluxo de tratamento (ex.: cadastro de servidores em nuvem), identifica quais controles são exigidos e quais são apenas boas práticas. Exemplo: criptografia de disco é técnica e exigida como parcela das medidas aptas; treinamento periódico é administrativa e também exigida. Uma política genérica sem operacionalização não cumpre o dispositivo. O órgão, como controlador, deve exigir do operador (empresa de tecnologia) cláusulas de segurança compatíveis com o art. 46.",
      "avancado": "No nível avançado, o aluno diferencia a obrigação do art. 46 (medidas aptas, genéricas no texto) de especificações operacionais que o dispositivo não lista, como 'backup diário' ou 'MFA obrigatório'. Essas são boas práticas ou decisões de política interna, não exigência literal do art. 46. Também avalia a articulação com a LAI (art. 23 LGPD menciona a LAI) e com o Marco Civil, distinguindo o objeto de cada lei: dado pessoal (LGPD), informação pública (LAI), uso da Internet (Marco Civil). A exceção do art. 4º, III, da LGPD é restrita a finalidades exclusivas de segurança pública, defesa e investigação penal.",
      "especialista": "No nível especialista, o aluno projeta a governança de segurança de dados do órgão: mapeia agentes de tratamento, define quem é controlador e quem é operador, elabora o procedimento de resposta a incidentes com preservação de evidências, e estabelece o relatório de impacto quando houver tratamento de alto risco (ex.: biometria). Integra o art. 46 com o art. 41 (encarregado), art. 38 (relatório de impacto) e art. 52 (sanções), observando que órgão público não paga multa da LGPD, mas responde por danos e sanções administrativas internas. Toda afirmação normativa deve indicar a fonte verificada e a data."
    },
    "comparacoes": [
      {
        "tema": "Medidas de segurança: técnicas vs. administrativas (art. 46 LGPD)",
        "a": {
          "rotulo": "Medidas técnicas",
          "texto": "Controles implementados em tecnologia e arquitetura: autenticação forte, criptografia de dados em repouso e em trânsito, controle de acesso baseado em perfil, registro de auditoria de acessos e alterações, e backup imutável. Exemplos: criptografar disco do servidor, exigir MFA para acesso ao sistema de cadastro."
        },
        "b": {
          "rotulo": "Medidas administrativas",
          "texto": "Controles de gestão, processo e pessoas: política de acesso escrita, contratos com operadores que imponham cláusulas de segurança, treinamento periódico de servidores, procedimento documentado de resposta a incidentes e gestão de licenças e saídas de funcionários. Exemplos: publicar política de acesso no intranet, treinar toda a equipe anualmente."
        },
        "diferencaGabarito": "A pegadinha é afirmar que 'criptografia de disco' é medida administrativa ou que 'política de acesso' é técnica. O art. 46 exige as duas categorias; uma só atende parcialmente. Técnica atua sobre o dado e o sistema; administrativa atua sobre regras, contratos e pessoas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A LGPD determina que o órgão comunique o incidente de vazamento à autoridade e aos titulares em até 3 dias úteis.",
        "porqueErrada": "O dispositivo específico da LGPD sobre comunicação de incidentes e seu prazo não foi verificado nas referências deste material (que cobrem arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46). Repetir um prazo decorado sem conferir a redação oficial é erro grave em concurso.",
        "versaoCorreta": "A LGPD impõe medidas de segurança (art. 46, verificado) e trata da comunicação de incidentes em dispositivo próprio, mas a redação exata e o prazo devem ser confirmados em fonte oficial (planalto.gov.br) antes de qualquer citação em prova ou documento."
      },
      {
        "afirmacaoEquivocada": "O art. 46 da LGPD obriga o órgão a fazer backup diário de todos os sistemas.",
        "porqueErrada": "O art. 46 exige medidas de segurança aptas, mas não especifica frequência de backup nem impõe 'backup diário'. Essa é uma decisão de política interna ou boa prática que atende ao dispositivo, não uma exigência literal do texto legal.",
        "versaoCorreta": "A escolha da frequência de backup (diário, semanal, contínuo) cabe ao órgão, com base em risco, RPO e política interna. O art. 46 apenas exige que haja medida técnica adequada (ex.: backup imutável) como parte do conjunto de proteção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Art. 46 da LGPD: medidas de segurança técnicas e administrativas aptas a proteger dados pessoais",
        "Medidas técnicas: autenticação forte, criptografia em repouso e em trânsito, controle de acesso por perfil, registro de auditoria, backup imutável",
        "Medidas administrativas: política de acesso, contratos com operadores, treinamento, procedimento de resposta a incidentes, gestão de licenças e saídas",
        "Controlador: define finalidade e meios essenciais do tratamento; no serviço público, costuma ser o órgão",
        "Operador: trata dados em nome do controlador, sob instruções (ex.: empresa de tecnologia/nuvem)"
      ],
      "regras": [
        "O art. 46 exige ambas as categorias (técnica e administrativa); uma só atende parcialmente",
        "'O que a lei exige' só se afirma com dispositivo verificado; 'boa prática recomenda' é categoria distinta",
        "O prazo e redação da comunicação de incidentes não foram verificados neste material — conferir em fonte oficial",
        "Órgão público é sujeito da LGPD (art. 1º, pessoa jurídica de direito público); não há isenção geral"
      ],
      "comparacoes": [
        "Medida técnica (atua sobre dado/sistema, ex.: criptografia) vs. medida administrativa (atua sobre regras/pessoas, ex.: política de acesso)"
      ],
      "fluxos": [
        "Confirma vazamento → Conter e erradicar o incidente → Registrar o incidente → Consultar dispositivo de comunicação (fonte oficial) → Comunicar fatos confirmados → Documentar medidas → Aplicar art. 46 como parâmetro de adequação"
      ],
      "excecoes": [
        "Art. 4º, III: exceção restrita a finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal — não se estende à administração geral"
      ],
      "palavrasChave": [
        "LGPD",
        "Lei nº 13.709/2018",
        "art. 46",
        "medidas técnicas",
        "medidas administrativas",
        "controlador",
        "operador",
        "criptografia",
        "backup imutável",
        "registro de auditoria",
        "incidente de vazamento",
        "boa prática"
      ],
      "checklist": [
        "Sei listar medidas técnicas e administrativas exigidas pelo art. 46",
        "Distinguo o que a lei exige (dispositivo verificado) da boa prática recomendada",
        "Não cito prazo de comunicação de incidente sem conferir fonte oficial",
        "Reconheço o órgão público como agente de tratamento (controlador/operador)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Que categorias de medidas de segurança o art. 46 da LGPD exige dos agentes de tratamento, e uma só categoria é suficiente?",
        "dados": "Dispositivo: art. 46 da LGPD (verificado) — 'medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas'. Exemplo de órgão: prefeitura com sistema de cadastro de cidadãos (nome, CPF, endereço).",
        "conceitos": [
          "Medidas técnicas (art. 46)",
          "Medidas administrativas (art. 46)",
          "Agente de tratamento (art. 5º, IX)"
        ],
        "estrategia": "Ler o texto do art. 46: ele nomeia duas categorias cumulativas ('técnicas e administrativas') e exige que sejam 'aptas a proteger'. Uma só categoria não satisfaz a dupla exigência do dispositivo.",
        "execucao": [
          "Passo 1: Identificar o dispositivo aplicável — art. 46 da LGPD (verificado).",
          "Passo 2: Extrair as duas categorias nomeadas — técnicas e administrativas.",
          "Passo 3: Verificar se ambas são exigidas — o texto usa 'e', não 'ou'.",
          "Passo 4: Concluir que uma só categoria atende parcialmente o dispositivo."
        ],
        "resultado": "O art. 46 exige medidas técnicas E administrativas, ambas aptas a proteger dados pessoais. Uma só categoria (por exemplo, apenas criptografia sem política de acesso) atende parcialmente e não cumpre integralmente o dispositivo.",
        "justificativa": "A leitura do art. 46 é cumulativa: 'medidas de segurança, técnicas e administrativas'. O verbo 'aptas a proteger' se aplica ao conjunto, de modo que a omissão de uma categoria deixa o tratamento sem a proteção completa que o dispositivo exige. Isso é confirmado pela transposição prática do conteúdo base (técnicas: criptografia, controle de acesso; administrativas: política, treinamento).",
        "errosFrequentes": [
          "Achar que apenas criptografia (técnica) basta, ignorando a medida administrativa",
          "Achar que apenas política de acesso (administrativa) basta, ignorando a medida técnica",
          "Citar dispositivos não verificados ou prazos de comunicação sem conferir fonte oficial"
        ],
        "variacao": "Cenário: uma secretaria implanta criptografia de disco em todos os servidores, mas não tem política de acesso escrita nem treinamento de servidores. Avaliar se cumpre o art. 46 — resposta: não, porque falta a categoria administrativa."
      },
      {
        "tipo": "aplicacao",
        "problema": "A prefeitura confirma vazamento da planilha de cadastro único (nome, CPF, renda de cidadãos). O que fazer em relação à LGPD, separando o que é exigido do que é boa prática?",
        "dados": "Cenário: vazamento confirmado de dados pessoais (nome, CPF, renda) de cadastro único municipal. Dispositivos aplicáveis citados: art. 46 (verificado, medidas de segurança); dispositivo de comunicação de incidentes NÃO verificado nesta sessão. Boas práticas: conter, erradicar, registrar, comunicar fatos confirmados, documentar.",
        "conceitos": [
          "Art. 46 LGPD (medidas de segurança técnicas e administrativas)",
          "Procedimento de resposta a incidentes (medida administrativa)",
          "Distinção lei exige x boa prática recomenda"
        ],
        "estrategia": "Aplicar o art. 46 como parâmetro de adequação das medidas que faltavam, e tratar a comunicação de incidentes com cautela: afirmar apenas o que o dispositivo verificado cobre e indicar que o prazo e destinatários devem ser confirmados em fonte oficial.",
        "execucao": [
          "Passo 1: Conter o incidente — restringir acesso à planilha exposta e revogar links/compartilhamentos.",
          "Passo 2: Eradicar a causa — corrigir a permissão ampla que permitiu a exposição.",
          "Passo 3: Registrar o incidente internamente (medida administrativa) e preservar evidências.",
          "Passo 4: Comunicar fatos confirmados, sem especular sobre prazos ou destinatários não verificados.",
          "Passo 5: Aplicar o art. 46 como parâmetro — verificar se haviam medidas técnicas (criptografia, controle de acesso) e administrativas (política, treinamento) adequadas."
        ],
        "resultado": "Conter, erradicar e registrar o incidente; comunicar apenas fatos confirmados; confirmar o dispositivo de comunicação e seu prazo em fonte oficial antes de citar; usar o art. 46 para avaliar e corrigir as medidas de segurança que faltavam.",
        "justificativa": "O art. 46 (verificado) impõe medidas de segurança, mas não trata da comunicação de incidentes com prazo definido neste material. A prática correta é separar: o que o dispositivo verificado exige (segurança apta) do que exige confirmação externa (prazo/destinatários de comunicação). Isso evita a pegadinha de afirmar prazos decorados de memória.",
        "errosFrequentes": [
          "Afirmar que a LGPD determina comunicação em '3 dias úteis' sem conferir o dispositivo",
          "Confundir boa prática (comunicar rapidamente) com exigência literal do art. 46",
          "Esquecer de documentar as medidas adotadas (registro de auditoria)"
        ],
        "variacao": "Cenário idêntico, mas o vazamento envolve dado sensível (saúde de servidores). Avaliar se a gravidade muda a classificação da base legal (art. 11) e se o relatório de impacto (art. 38) se torna relevante — mesma estrutura de resposta, regime mais restritivo."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A LGPD determina comunicação de incidente de vazamento em até 3 dias úteis à autoridade e aos titulares.'",
        "dados": "Item C/E de concurso: 'Considerando a LGPD, é correto afirmar que o órgão deve comunicar o incidente de vazamento de dados pessoais à autoridade e aos titulares em até 3 dias úteis.' Referências verificadas: arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46 — dispositivo de comunicação e prazo NÃO estão entre os verificados.",
        "conceitos": [
          "Art. 46 LGPD (verificado — medidas de segurança)",
          "Dispositivo de comunicação de incidentes (não verificado neste material)",
          "Cautela normativa: não citar prazo sem fonte oficial"
        ],
        "estrategia": "Desconstruir a afirmação: o art. 46 é verificado e trata de medidas de segurança, não de prazo de comunicação. O prazo '3 dias úteis' não consta das referências verificadas. Em concurso, afirmar número de artigo ou prazo sem conferir fonte oficial é erro. A resposta correta é que a afirmação não é verificável com base no material.",
        "execucao": [
          "Passo 1: Identificar o que é verificado — art. 46 (medidas de segurança) está entre os dispositivos verificados.",
          "Passo 2: Identificar o que não é verificado — o dispositivo específico de comunicação de incidentes e seu prazo não integram as referências verificadas (arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46).",
          "Passo 3: Concluir que o prazo '3 dias úteis' não pode ser afirmado sem conferir o texto oficial (planalto.gov.br) e registrar a data.",
          "Passo 4: Marcar o item como não verificável/falso com base no material disponível."
        ],
        "resultado": "Afirmação não verificável com base nas referências deste material. O prazo '3 dias úteis' e o dispositivo de comunicação não foram verificados; não se deve repetir prazos decorados de memória sem conferir a redação atual em fonte oficial.",
        "justificativa": "A regra de honestidade normativa do projeto exige afirmar apenas o que a verificação cobre. Como o dispositivo de comunicação e o prazo não estão entre os arts. verificados (1º, 2º, 3º, 4º, 5º, 17, 18, 46), afirmar '3 dias úteis' é inventar dado. A conduta correta é consultar o planoalto.gov.br e registrar a data de verificação.",
        "errosFrequentes": [
          "Decorar e repetir '3 dias úteis' como se fosse do art. 46",
          "Confundir art. 46 (segurança) com dispositivo de comunicação de incidentes",
          "Afirmar número de artigo ou prazo sem conferir fonte oficial e registrar data"
        ],
        "variacao": "Item: 'O art. 46 da LGPD impõe medidas técnicas e administrativas de segurança aos agentes de tratamento.' — CERTO, pois esse dispositivo está verificado. Testa a diferença entre dispositivo verificado (certo) e prazo de comunicação não verificado (incerto)."
      }
    ]
  },
  "m4-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O Marco Civil da Internet (Lei nº 12.965/2014) é a lei-marco do uso da Internet no Brasil e integra o conteúdo programático de TI, redes e segurança. Ele estabelece princípios, garantias, direitos e deveres para o uso da Internet, com dispositivos verificados em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15 e 19). Para o servidor público, é essencial distinguir o objeto do Marco Civil (uso da Internet, direitos e deveres dos usuários, regulação de serviços) do objeto da LGPD (tratamento de dados pessoais) e da LAI (acesso a informações públicas). Citar artigos não conferidos ou confundir as três leis é pegadinha de conteúdo programático.",
      "preRequisitos": [
        "Noção de serviço de Internet e de aplicação de internet (arts. 7º e 9º)",
        "Diferença entre conteúdo de comunicação e metadados/registros de acesso",
        "Noção de responsabilidade do provedor por conteúdo de terceiros (art. 19)",
        "Conceito de guarda de registros de acesso (art. 15)"
      ],
      "objetivosObservaveis": [
        "Situar o Marco Civil no ordenamento de direitos digitais brasileiro",
        "Distinguir o objeto do Marco Civil do objeto da LGPD e da LAI",
        "Citar a lei pelo número e ano (Lei nº 12.965/2014) e limitar a citação de artigos aos verificados",
        "Aplicar a marcação explícita do grau de verificação de cada dispositivo"
      ],
      "competencias": [
        "Leitura responsável de lei: citar apenas dispositivos conferidos com data",
        "Classificação normativa: enquadrar questão em Marco Civil, LGPD ou LAI pelo objeto",
        "Honestidade intelectual: indicar quando um dispositivo exige conferência em fonte oficial",
        "Raciocínio comparativo entre três leis com objetos distintos e zonas de articulação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — distinção de objeto LGPD vs Marco Civil",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — leitura conjunta das três leis",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — art. 23 LGPD menciona a LAI"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Marco Civil da Internet integra o conteúdo programático de TI, redes e segurança, especialmente em itens sobre neutralidade, guarda de registros e responsabilidade de provedores. A classificação é uma estimativa pedagógica qualitativa baseada na relevância do tema."
      }
    },
    "niveis": {
      "iniciante": "O Marco Civil da Internet é a Lei nº 12.965/2014, que estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil. O enquadramento geral foi verificado no texto oficial do planalto.gov.br em 2026-10-23 (Bloco 3 de referências-verificadas.md), abrangendo arts. 2º (fundamentos), 3º (princípios), 7º (direitos do usuário), 9º §3º (vedação de bloquear, monitorar, filtrar ou analisar o conteúdo dos pacotes de dados, ressalvado o disposto no artigo), 15 (guarda de registros de acesso a aplicações por 6 meses) e 19 (responsabilização por conteúdo de terceiros após ordem judicial). Os demais artigos não integram esta verificação e não devem ser citados literalmente sem nova conferência.",
      "intermediario": "No nível intermediário, o aluno aplica o Marco Civil a cenários concretos: dado um fato (ex.: provedor deve guardar logs por 6 meses; conteúdo de terceiros só gera responsabilização após ordem judicial), identifica o dispositivo aplicável entre os verificados e distingue o que pode ser citado do que exige conferência. Também articula com a LGPD: o texto oficial da LGPD indica alterações no Marco Civil (relação confirmada no preâmbulo).",
      "avancado": "No nível avançado, o aluno diferencia os objetos das três leis: Marco Civil = uso da Internet (direitos/deveres de usuários, regulação de serviços); LGPD = tratamento de dados pessoais; LAI = acesso a informações públicas. Identifica zonas de articulação (dados de conexão e registros de acesso tratados em ambas as lógicas) e aplica o método de verificação antes de afirmar: identificar a fonte, confirmar redação atual em fonte oficial, registrar a data.",
      "especialista": "No nível especialista, o aluno integra o Marco Civil em arquitetura de governança digital do órgão: define políticas de uso da Internet alinhadas aos arts. 7º e 9º §3º, estabelece rotinas de guarda de registros de acesso compatíveis com o art. 15, e define fluxo de responsabilização por conteúdo de terceiros (art. 19). Observa que o Marco Civil dialoga com a LGPD e a LAI, e que toda afirmação normativa deve indicar fonte verificada e data — afirmação inventada em documento oficial gera responsabilização."
    },
    "comparacoes": [
      {
        "tema": "Marco Civil vs. LGPD vs. LAI — objetos distintos",
        "a": {
          "rotulo": "Marco Civil (Lei nº 12.965/2014)",
          "texto": "Objeto: uso da Internet no Brasil — princípios, garantias, direitos e deveres dos usuários, regulação de serviços de Internet. Dispositivos verificados (2026-10-23): arts. 2º, 3º, 7º, 9º §3º, 15 e 19."
        },
        "b": {
          "rotulo": "LGPD (Lei nº 13.709/2018)",
          "texto": "Objeto: tratamento de dados pessoais — proteção da privacidade e do livre desenvolvimento da personalidade. Dispositivos verificados: arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46. Art. 23 menciona a LAI."
        },
        "diferencaGabarito": "Três leis, três objetos. Marco Civil trata do ambiente e das relações de uso da Internet; LGPD trata do dado pessoal e dos sujeitos do tratamento; LAI trata do acesso a informações públicas. Zonas de articulação existem (dados de conexão e registros de acesso), mas os objetos são distintos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Marco Civil e LGPD são a mesma lei em versões diferentes.",
        "porqueErrada": "São leis distintas, de anos distintos (Marco Civil: 2014; LGPD: 2018), com objetos diferentes. A LGPD inclusive alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD). Confundir as duas é erro de conteúdo programático.",
        "versaoCorreta": "Marco Civil (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018) são leis distintas, com objetos diferentes: uso da Internet vs. tratamento de dados pessoais. A LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo)."
      },
      {
        "afirmacaoEquivocada": "Qualquer artigo do Marco Civil pode ser citado em prova sem conferir a fonte.",
        "porqueErrada": "Apenas os arts. 2º, 3º, 7º, 9º §3º, 15 e 19 foram verificados em 2026-10-23. Os demais artigos não integram a verificação e não devem ser citados literalmente sem nova conferência em fonte oficial. Citar dispositivo não conferido é erro de honestidade intelectual.",
        "versaoCorreta": "Cite o Marco Civil pelo número e ano (Lei nº 12.965/2014) e limite a citação de artigos aos verificados (2º, 3º, 7º, 9º §3º, 15, 19), registrando a data de verificação. Demais dispositivos exigem conferência em fonte oficial antes de qualquer citação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Marco Civil da Internet (Lei nº 12.965/2014): princípios, garantias, direitos e deveres para o uso da Internet",
        "Art. 2º: fundamentos; Art. 3º: princípios; Art. 7º: direitos do usuário",
        "Art. 9º §3º: vedação de bloquear, monitorar, filtrar ou analisar conteúdo dos pacotes de dados (ressalvado o disposto no artigo)",
        "Art. 15: guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses",
        "Art. 19: responsabilização por conteúdo de terceiros após ordem judicial"
      ],
      "regras": [
        "Cite a lei pelo número e ano (Lei nº 12.965/2014); limite citação de artigos aos verificados",
        "Dispositivos verificados em 2026-10-23: arts. 2º, 3º, 7º, 9º §3º, 15 e 19",
        "Objeto do Marco Civil (uso da Internet) é mais amplo que o da LGPD (dado pessoal) e da LAI (informação pública)",
        "Art. 23 da LGPD menciona a LAI — leitura conjunta das três leis"
      ],
      "comparacoes": [
        "Marco Civil (uso da Internet) vs. LGPD (tratamento de dados pessoais) vs. LAI (acesso a informações públicas)"
      ],
      "fluxos": [
        "Identificar o objeto da questão → Enquadrar em Marco Civil/LGPD/LAI → Verificar se o dispositivo está entre os verificados → Citar com número, ano e data de verificação, ou indicar necessidade de conferência"
      ],
      "excecoes": [
        "Art. 9º §3º: vedação de analisar conteúdo dos pacotes tem ressalva 'ressalvado o disposto no artigo'"
      ],
      "palavrasChave": [
        "Marco Civil",
        "Lei nº 12.965/2014",
        "uso da Internet",
        "direitos do usuário",
        "registros de acesso",
        "art. 15",
        "art. 19",
        "art. 9º",
        "LGPD",
        "Lei nº 13.709/2018",
        "LAI",
        "Lei nº 12.527/2011",
        "verificação",
        "planalto.gov.br"
      ],
      "checklist": [
        "Sei situar o Marco Civil no ordenamento de direitos digitais",
        "Distinguo o objeto do Marco Civil do da LGPD e da LAI",
        "Cito apenas dispositivos verificados (2º, 3º, 7º, 9º §3º, 15, 19) com data",
        "Indico quando um dispositivo exige conferência em fonte oficial"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual lei trataria de (a) regras gerais de uso da Internet e (b) base legal para tratar nome de cidadão em cadastro?",
        "dados": "(a) Regras gerais de uso da Internet → Marco Civil (Lei nº 12.965/2014), verificada em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15 e 19). (b) Tratar nome de cidadão em cadastro → LGPD (Lei nº 13.709/2018), art. 1º e art. 5º, I (verificados). Demais dispositivos exigem conferência em fonte oficial.",
        "conceitos": [
          "Marco Civil (uso da Internet)",
          "LGPD (tratamento de dados pessoais)",
          "Grau de verificação dos dispositivos"
        ],
        "estrategia": "Separar as duas perguntas por objeto: uso da Internet é Marco Civil; tratar dado pessoal (nome) é LGPD. Citar cada lei com número e ano, e limitar a citação de artigos aos verificados, indicando que os demais exigem conferência.",
        "execucao": [
          "Passo 1: Identificar o objeto da parte (a) — regras gerais de uso da Internet — enquadrar no Marco Civil (Lei nº 12.965/2014).",
          "Passo 2: Identificar o objeto da parte (b) — tratar nome de cidadão — enquadrar na LGPD (Lei nº 13.709/2018), dado pessoal (art. 5º, I).",
          "Passo 3: Citar cada lei pelo número e ano, e limitar a citação de artigos aos verificados com data de verificação.",
          "Passo 4: Indicar que demais dispositivos exigem conferência em fonte oficial antes de qualquer citação."
        ],
        "resultado": "(a) Marco Civil (Lei nº 12.965/2014); (b) LGPD (Lei nº 13.709/2018), art. 1º e art. 5º, I. Cada lei citada com número, ano e grau de verificação explícito; demais dispositivos marcados como pendentes de conferência.",
        "justificativa": "A distinção de objetos é o ponto-chave: Marco Civil rege o uso da Internet; LGPD rege o tratamento de dados pessoais. A marcação do grau de verificação (verificado em 2026-10-23 para arts. 2º, 3º, 7º, 9º §3º, 15 e 19 do Marco Civil; arts. 1º e 5º, I da LGPD) cumpre a exigência de honestidade intelectual do material.",
        "errosFrequentes": [
          "Confundir Marco Civil com LGPD (mesmo objeto)",
          "Citar artigos do Marco Civil não verificados sem indicar necessidade de conferência",
          "Esquecer de indicar o grau de verificação de cada dispositivo"
        ],
        "variacao": "Pergunta: qual lei trata de acesso a informações públicas (ex.: pedido de transparência)? Resposta: LAI (Lei nº 12.527/2011). Mesma estrutura de resposta, terceiro objeto."
      },
      {
        "tipo": "aplicacao",
        "problema": "Projeto menciona 'obrigação do art. 15 do Marco Civil' sem conferir a fonte. Como o material didático deve tratar isso?",
        "dados": "O art. 15 do Marco Civil foi verificado em 2026-10-23 (Bloco 3) e trata da guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses (parte verificada: caput). As regras de disponibilização desses registros aos requerentes não integram a lista de dispositivos verificados e devem ser conferidas em fonte oficial antes de qualquer citação.",
        "conceitos": [
          "Art. 15 do Marco Civil (guarda de registros de acesso, 6 meses, verificado)",
          "Disponibilização de registros aos requerentes (não verificada)",
          "Honestidade intelectual: afirmar apenas o que a verificação cobre"
        ],
        "estrategia": "Afirmar apenas o que a verificação cobre (caput do art. 15: guarda de registros por 6 meses) e indicar que as regras de disponibilização exigem conferência em fonte oficial. Não inventar prazos nem destinatários.",
        "execucao": [
          "Passo 1: Confirmar que o art. 15 do Marco Civil foi verificado em 2026-10-23 (Bloco 3 de referências-verificadas.md).",
          "Passo 2: Identificar o que é verificado — guarda de registros de acesso a aplicações de internet pelo provedor por 6 meses (caput).",
          "Passo 3: Identificar o que NÃO é verificado — regras de disponibilização desses registros aos requerentes.",
          "Passo 4: Escrever o material afirmando apenas a parte verificada e indicando que o restante exige conferência em fonte oficial."
        ],
        "resultado": "O material afirma que o art. 15 do Marco Civil (verificado em 2026-10-23) trata da guarda de registros de acesso por 6 meses (caput), e indica que as regras de disponibilização aos requerentes devem ser conferidas em fonte oficial antes de qualquer citação.",
        "justificativa": "A conduta segue a regra de honestidade intelectual: afirmar apenas o que a verificação cobre e indicar explicitamente o que exige conferência. Isso evita a pegadinha de citar dispositivo não conferido como se fosse certeza.",
        "errosFrequentes": [
          "Afirmar regras de disponibilização de registros como se estivessem no art. 15 sem conferir",
          "Inventar prazo ou destinatário da disponibilização sem fonte oficial",
          "Esquecer de registrar a data de verificação (2026-10-23)"
        ],
        "variacao": "Cenário: projeto cita 'art. 7º do Marco Civil garante direito do usuário à proteção de seus dados pessoais'. Avaliar: art. 7º é verificado (direitos do usuário), mas a formulação exata exige conferência da redação — mesma cautela, dispositivo diferente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de item de verificação de concurso: 'Marco Civil e LGPD são a mesma lei em versões diferentes.'",
        "dados": "Item de verificação: 'Marco Civil (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018) são a mesma lei em versões diferentes.' Dados: anos distintos, objetos distintos; a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD).",
        "conceitos": [
          "Marco Civil (Lei nº 12.965/2014) — objeto: uso da Internet",
          "LGPD (Lei nº 13.709/2018) — objeto: tratamento de dados pessoais",
          "Relação verificada no preâmbulo da LGPD"
        ],
        "estrategia": "Desconstruir a afirmação em três pontos: (1) leis distintas de anos distintos; (2) objetos diferentes (uso da Internet vs. tratamento de dados pessoais); (3) a LGPD alterou o Marco Civil, o que já prova que não é 'a mesma lei'. Concluir que a afirmação é falsa.",
        "execucao": [
          "Passo 1: Identificar que Marco Civil (2014) e LGPD (2018) são leis de anos distintos.",
          "Passo 2: Identificar que os objetos são diferentes — uso da Internet (Marco Civil) vs. tratamento de dados pessoais (LGPD).",
          "Passo 3: Observar que a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo), o que incompatibiliza a tese de 'mesma lei'.",
          "Passo 4: Concluir que a afirmação é falsa e marcar como erro."
        ],
        "resultado": "Falso. Marco Civil e LGPD são leis distintas, de anos distintos, com objetos diferentes; a LGPD alterou disposições do Marco Civil (relação verificada no preâmbulo do texto oficial da LGPD).",
        "justificativa": "A afirmação confunde leis com objetos distintos. Marco Civil regula o uso da Internet (direitos/deveres de usuários, regulação de serviços); LGPD regula o tratamento de dados pessoais (proteção da privacidade). O fato de a LGPD ter alterado o Marco Civil prova que são diplomas diferentes. É armadilha de conteúdo programático.",
        "errosFrequentes": [
          "Achar que \"versões diferentes\" significa a mesma lei atualizada",
          "Esquecer que a LGPD alterou o Marco Civil (prova de que são leis distintas)",
          "Não citar os anos (2014 vs. 2018) e os objetos distintos"
        ],
        "variacao": "Item: 'A LAI trata do mesmo objeto que a LGPD (dados pessoais).' — FALSO. LAI trata de acesso a informações públicas; LGPD de dados pessoais. Testa o terceiro objeto, mesma lógica."
      }
    ]
  },
  "m4-u4-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A articulação entre LGPD, Marco Civil e LAI é cobrada em concursos de TI, controle e transparência porque o mesmo ato administrativo digital pode envolver as três leis. O servidor deve decidir se uma informação é pública (LAI), dado pessoal (LGPD) ou dado sensível (LGPD, art. 5º, II), e aplicar a base legal correta. O art. 23 da LGPD menciona expressamente a LAI, sinalizando leitura conjunta, não antagonista. Confundir as leis ou afirmar proibição absoluta (ex.: 'LGPD proíbe publicar nome de servidor') é pegadinha clássica. A verificação de cada dispositivo (planalto.gov.br, com data) é obrigatória antes de qualquer citação.",
      "preRequisitos": [
        "Conceito de dado pessoal e dado pessoal sensível (LGPD, art. 5º, I e II)",
        "Noção de informação pública e transparência ativa (LAI)",
        "Objeto do Marco Civil (uso da Internet) vs. objeto da LGPD (dado pessoal)",
        "Art. 23 da LGPD menciona a LAI (relação verificada)"
      ],
      "objetivosObservaveis": [
        "Resolver conflitos aparentes entre transparência e proteção de dados usando a distinção entre informação pública e dado pessoal",
        "Classificar uma informação como pública, dado pessoal comum ou dado pessoal sensível",
        "Aplicar o método de decisão de 4 passos (natureza, finalidade/base legal, sigilo, política interna)",
        "Citar cada dispositivo com fonte verificada e data, indicando o que exige conferência"
      ],
      "competencias": [
        "Classificação de informação por natureza (pública x pessoal x sensível)",
        "Leitura articulada de três leis com objetos distintos",
        "Cautela normativa: distinguir exceção de permissão geral e não inventar prazos",
        "Decisão de governança: fundamentar a resposta ao pedido de acesso"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t2-s1 (Marco Civil da Internet — Lei nº 12.965/2014) — objeto: uso da Internet, arts. 2º, 3º, 7º, 9º §3º, 15, 19",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — art. 5º, II dado sensível; art. 4º, III exceção",
        "m4-u4-t2-s3 (Obrigação legal, norma técnica e boa prática) — classificação do grau de obrigatoriedade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Articulação LGPD/Marco Civil/LAI integra o conteúdo programático de controle, transparência e TI, especialmente em itens sobre pedido de acesso a dados de servidores e dados sensíveis. A classificação é uma estimativa pedagógica qualitativa baseada na centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Três leis convivem no mesmo ato administrativo digital. A LAI (Lei nº 12.527/2011) disciplina o acesso a informações públicas; enquadramento geral verificado no planalto.gov.br em 2026-10-21 (Bloco 2 de referências-verificadas.md). A LGPD protege dados pessoais no tratamento (dispositivos verificados: arts. 1º, 2º, 3º, 4º, 5º, 17, 18 e 46). O Marco Civil trata do uso da Internet (verificado em 2026-10-23, Bloco 3; arts. 2º, 3º, 7º, 9º §3º, 15 e 19). A articulação se resolve pela natureza da informação: publicar lista de servidores com nome e matrícula é publicidade administrativa de dados que identificam; publicar dados de saúde ou conta bancária é expor dado pessoal (sensível no caso da saúde, art. 5º, II verificado). O art. 23 da LGPD menciona expressamente a LAI (relação verificada), sinalizando leitura conjunta.",
      "intermediario": "No nível intermediário, o aplicao método de decisão de 4 passos a um pedido de acesso: 1) natureza da informação (pública x dado pessoal x sensível); 2) finalidade e base legal; 3) informação protegida por sigilo?; 4) o que a política interna e a assessoria jurídica determinam? Exemplo: pedido de 'todos os dados do servidor X' — conceder matrícula, lotação, atos e remuneração conforme política de transparência (informação pública), esclarecendo que dados pessoais que excedam a finalidade exigem fundamentação; não confundir transparência com divulgação irrestrita.",
      "avancado": "No nível avançado, o aluno diferencia exceção de permissão geral: o art. 4º, III da LGPD afasta a aplicação para finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão de infrações penais, com ressalvas dos §§ 1º e 2º — não confundir exceção com permissão geral. Também avalia o dado sensível (art. 5º, II) e o regime restritivo do art. 11, e a relação verificada do art. 23 LGPD com a LAI.",
      "especialista": "No nível especialista, o aluno projeta o fluxo de atendimento a pedidos de acesso do órgão: triagem por natureza da informação, fundamentação legal, registro da decisão, e canal de recurso. Integra LGPD (art. 46 segurança, art. 41 encarregado), LAI (prazos e sigilos) e Marco Civil (registros de acesso, art. 15), observando que toda afirmação normativa deve indicar fonte verificada e data. Afirmação inventada em documento oficial gera responsabilização."
    },
    "comparacoes": [
      {
        "tema": "Informação pública vs. dado pessoal vs. dado pessoal sensível",
        "a": {
          "rotulo": "Informação pública (LAI)",
          "texto": "Dado de gestão pública sujeito à transparência ativa (ex.: valor de contratos, nome de fornecedor pessoa jurídica, matrícula, lotação, atos do servidor). Publicação decorre da execução contratual ou do dever de publicidade (CF art. 37, §3º)."
        },
        "b": {
          "rotulo": "Dado pessoal sensível (LGPD, art. 5º, II)",
          "texto": "Dado sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, genético ou biométrico. Regime mais restritivo (art. 11); publicar dados de saúde ou conta bancária é expor dado pessoal sensível e exige base legal específica."
        },
        "diferencaGabarito": "A pegadinha é afirmar que 'LGPD proíbe publicar qualquer nome de servidor'. Nome e matrícula de servidor em cargo público são publicidade administrativa (dado identificador, não sensível); dado sensível (saúde, opinião política) não se publica. A análise é de finalidade, necessidade e proporcionalidade."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Pela LGPD, o órgão não pode publicar nomes de servidores em nenhuma hipótese.",
        "porqueErrada": "Errado. A LGPD convive com deveres de transparência (o art. 23 menciona a LAI — verificado); a análise é de finalidade, necessidade e proporcionalidade, não proibição absoluta. Generalizações absolutas são armadilha de conteúdo programático.",
        "versaoCorreta": "O órgão pode publicar nome, matrícula, lotação e atos do servidor (publicidade administrativa, dado identificador não sensível). Dado sensível (saúde, opinião política) não se publica sem base legal do art. 11. Generalização absoluta é falsa."
      },
      {
        "afirmacaoEquivocada": "O art. 4º, III da LGPD isenta qualquer atividade de segurança do órgão de cumprir a lei.",
        "porqueErrada": "Errado. A exceção do art. 4º, III é restrita a finalidades EXCLUSIVAS de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal, com ressalvas dos §§ 1º e 2º. Não se estende à administração geral (RH, tributação, benefícios).",
        "versaoCorreta": "A exceção do art. 4º, III da LGPD é específica (finalidades exclusivas de segurança/defesa) e não abrange a administração geral; mesmo nela, os §§ 1º e 2º mantêm princípios e direitos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "LAI (Lei nº 12.527/2011): acesso a informações públicas, transparência ativa e passiva",
        "LGPD (Lei nº 13.709/2018): tratamento de dados pessoais, dispositivos verificados arts. 1º, 2º, 3º, 4º, 5º, 17, 18, 46",
        "Marco Civil (Lei nº 12.965/2014): uso da Internet, verificado em 2026-10-23 (arts. 2º, 3º, 7º, 9º §3º, 15, 19)",
        "Dado pessoal sensível (art. 5º, II): racial, religioso, político, sindical, saúde, vida sexual, genético, biométrico",
        "Art. 23 LGPD menciona a LAI — leitura conjunta, não antagonista"
      ],
      "regras": [
        "A articulação se resolve pela natureza da informação (pública x dado pessoal x sensível)",
        "Art. 4º, III LGPD: exceção restrita a finalidades exclusivas de segurança/defesa, não regra geral",
        "Dado sensível exige base legal do art. 11; dado identificador de servidor pode ser publicidade administrativa",
        "Toda afirmação normativa deve indicar fonte verificada e data (planalto.gov.br)"
      ],
      "comparacoes": [
        "Informação pública (LAI) vs. dado pessoal (LGPD) vs. dado sensível (LGPD, art. 5º, II)"
      ],
      "fluxos": [
        "Pedido de acesso → 1) natureza da informação → 2) finalidade e base legal → 3) sigilo? → 4) política interna/assessoria jurídica → fundamentar e registrar a resposta"
      ],
      "excecoes": [
        "No método de articulação LAI/LGPD/Marco Civil, o art. 4º, III da LGPD opera como exceção de alcance restrito: afasta a aplicação da lei apenas para finalidades exclusivas de segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal, com ressalvas dos §§ 1º e 2º; não se confunde com permissão geral à administração."
      ],
      "palavrasChave": [
        "LGPD",
        "Lei nº 13.709/2018",
        "LAI",
        "Lei nº 12.527/2011",
        "Marco Civil",
        "Lei nº 12.965/2014",
        "dado pessoal",
        "dado sensível",
        "informação pública",
        "art. 5º",
        "art. 4º",
        "art. 23",
        "art. 11",
        "transparência",
        "planalto.gov.br"
      ],
      "checklist": [
        "Sei classificar informação como pública, dado pessoal ou dado sensível",
        "Aplico o método de decisão de 4 passos a pedidos de acesso",
        "Não afirmo proibição absoluta de publicar nome de servidor (é dado identificador)",
        "Cito apenas dispositivos verificados com data de verificação"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Transparência ativa publica valor de contratos e nomes de fornecedores pessoa jurídica. Isso é dado pessoal?",
        "dados": "Cenário: portal de transparência publica valor do contrato e nome do fornecedor. Se o fornecedor for pessoa jurídica, é informação pública de gestão; se for pessoa física, o nome é dado pessoal, mas a publicidade decorre da execução contratual. Dispositivo: art. 5º, I (dado pessoal) da LGPD.",
        "conceitos": [
          "Informação pública (LAI)",
          "Dado pessoal (LGPD, art. 5º, I)",
          "Pessoa jurídica vs. pessoa física"
        ],
        "estrategia": "Separar por natureza: pessoa jurídica = informação pública de gestão (não é dado pessoal da LGPD, que protege pessoa natural); pessoa física = dado pessoal, mas a publicidade decorre da execução contratual. Avaliar minimização do que excede a finalidade de transparência.",
        "execucao": [
          "Passo 1: Identificar a natureza — fornecedor pessoa jurídica = informação pública de gestão.",
          "Passo 2: Se fornecedor pessoa física, o nome é dado pessoal (art. 5º, I LGPD).",
          "Passo 3: Verificar se a publicidade decorre da execução contratual (sim, para contratos públicos).",
          "Passo 4: Aplicar minimização — publicar só o necessário à finalidade de transparência."
        ],
        "resultado": "Valor de contrato e contratante pessoa jurídica são informação pública de gestão. Se fornecedor for pessoa física, o nome é dado pessoal, mas a publicidade decorre da execução contratual — aplicar minimização do que excede a finalidade de transparência.",
        "justificativa": "A LGPD protege dados de pessoa natural (art. 5º, I); pessoa jurídica não é titular. A publicidade de contratos públicos é dever de transparência (LAI/CF). A distinção entre natureza da informação resolve o conflito aparente, sem invocar proibição absoluta da LGPD.",
        "errosFrequentes": [
          "Achar que qualquer nome publicado é dado pessoal da LGPD (esquece pessoa jurídica)",
          "Achar que a LGPD proíbe publicar nome de fornecedor pessoa física em contrato (é público por execução contratual)",
          "Esquecer a minimização do que excede a finalidade de transparência"
        ],
        "variacao": "Cenário: portal publica nome e CPF de fornecedor pessoa física. Avaliar: CPF é dado pessoal identificador; publicar CPF excede a finalidade de transparência (nome basta) — deve minimizar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Pedido de acesso solicita 'todos os dados do servidor X'. Como responder tecnicamente?",
        "dados": "Pedido genérico de 'todos os dados do servidor X'. Informações públicas típicas: matrícula, lotação, atos e remuneração conforme política de transparência. Dados pessoais que excedem a finalidade exigem fundamentação. Dispositivo: art. 23 LGPD menciona LAI (verificado).",
        "conceitos": [
          "Informação pública pertinente à finalidade",
          "Dado pessoal que excede a finalidade exige fundamentação",
          "Resposta motivada e registrada"
        ],
        "estrategia": "Conceder a informação pública pertinente à finalidade (matrícula, lotação, atos, remuneração conforme política de transparência) e esclarecer que dados pessoais que excedam a finalidade exigem fundamentação. Não confundir transparência com divulgação irrestrita de tudo; a resposta deve ser motivada e registrada.",
        "execucao": [
          "Passo 1: Identificar o que é informação pública pertinente (matrícula, lotação, atos, remuneração conforme política de transparência).",
          "Passo 2: Identificar dados pessoais que excedem a finalidade (ex.: endereço residencial, telefone particular, dados de saúde).",
          "Passo 3: Para dados que excedem, exigir fundamentação legal antes de conceder.",
          "Passo 4: Elaborar resposta motivada e registrada, sem divulgação irrestrita de tudo."
        ],
        "resultado": "Conceder matrícula, lotação, atos e remuneração conforme política de transparência; esclarecer que dados pessoais que excedam a finalidade exigem fundamentação; resposta motivada e registrada, não divulgação irrestrita.",
        "justificativa": "A transparência não é divulgação irrestrita. O art. 23 LGPD menciona a LAI (leitura conjunta), e a análise se faz pela natureza da informação e pela finalidade. Dados que excedem a finalidade exigem fundamentação, e a resposta deve ser motivada e registrada para garantir rastreabilidade.",
        "errosFrequentes": [
          "Conceder 'todos os dados' sem filtrar pela finalidade (divulgação irrestrita)",
          "Recusar tudo sob a LGPD sem distinguir informação pública de dado pessoal",
          "Esquecer de fundamentar e registrar a decisão de concessão ou recusa"
        ],
        "variacao": "Pedido inclui dados de saúde do servidor. Avaliar: dado sensível (art. 5º, II), regime restritivo art. 11, não se publica sem base legal específica — mesmo regime, dado mais sensível."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Pela LGPD, o órgão não pode publicar nomes de servidores em nenhuma hipótese.'",
        "dados": "Item C/E de concurso: 'Pela LGPD, o órgão público está proibido de publicar nomes de servidores em qualquer hipótese.' Referência: art. 23 LGPD menciona a LAI (verificado); dado identificador de servidor é publicidade administrativa.",
        "conceitos": [
          "Art. 23 LGPD menciona a LAI (leitura conjunta)",
          "Nome e matrícula de servidor = dado identificador, não sensível",
          "Publicidade administrativa (CF art. 37, §3º)"
        ],
        "estrategia": "Desconstruir a afirmação: (1) a LGPD convive com deveres de transparência (art. 23 menciona LAI); (2) nome, matrícula, lotação de servidor são dados identificadores, não sensíveis, sujeitos à publicidade administrativa; (3) a análise é de finalidade, necessidade e proporcionalidade, não proibição absoluta. Concluir que a afirmação é falsa.",
        "execucao": [
          "Passo 1: Identificar que o art. 23 da LGPD menciona expressamente a LAI (relação verificada) — leitura conjunta.",
          "Passo 2: Classificar nome/matrícula/lotação do servidor como dado identificador não sensível, sujeito a publicidade administrativa.",
          "Passo 3: Observar que dado sensível (saúde, opinião política) não se publica sem base legal do art. 11.",
          "Passo 4: Concluir que a proibição absoluta é falsa; a regra é análise de finalidade, necessidade e proporcionalidade."
        ],
        "resultado": "Falso. A LGPD convive com deveres de transparência (art. 23 menciona a LAI); nome, matrícula e lotação de servidor são publicidade administrativa (dado identificador não sensível). A análise é de finalidade, necessidade e proporcionalidade, não proibição absoluta.",
        "justificativa": "A afirmação generaliza absolutamente ('nenhuma hipótese'), o que é armadilha de conteúdo programático. O art. 23 LGPD menciona a LAI, mostrando que as leis se complementam. Dado identificador de servidor público é publicidade administrativa (CF art. 37, §3º); só dado sensível exige restrição do art. 11.",
        "errosFrequentes": [
          "Afirmar proibição absoluta de publicar qualquer nome de servidor",
          "Confundir dado identificador (nome, matrícula) com dado sensível (saúde, opinião política)",
          "Esquecer o art. 23 LGPD que menciona a LAI (leitura conjunta)"
        ],
        "variacao": "Item: 'Dados de saúde de servidor podem ser publicados no portal de transparência.' — FALSO. Dado sensível (art. 5º, II), regime restritivo art. 11, não se publica sem base legal. Mesmo estrutura, dado mais sensível."
      }
    ]
  },
  "m4-u4-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar afirmações por grau de obrigatoriedade é essencial em concursos e na prática do órgão: confundir norma técnica com lei, ou boa prática com exigência legal, gera erros de cobrança e riscos jurídicos. O material adota uma hierarquia útil: (1) Constituição e leis (obrigatórias; ex.: LGPD, arts. 1º a 46 verificados); (2) regulamentos e atos da autoridade (obrigatórios no âmbito delegado, conferir vigência); (3) normas técnicas e padrões (obrigatórios só se incorporados por contrato, política interna ou referência normativa; caso contrário, orientam); (4) boas práticas de mercado (recomendadas, não são lei). Erros clássicos: tratar recomendação de framework como exigência legal, citar prazo/sanção decorado sem conferir, confundir norma com política interna. O método de verificação antes de afirmar — identificar fonte, confirmar redação em fonte oficial, registrar data, escrever com o grau correto — é proteção profissional: afirmação inventada em documento oficial gera responsabilização.",
      "preRequisitos": [
        "Hierarquia de normas (Constituição, leis, regulamentos, normas técnicas, boas práticas)",
        "Diferença entre norma obrigatória e recomendação",
        "Noção de incorporação de norma técnica por contrato, edital ou política",
        "Método de verificação: fonte, redação oficial, data, grau de obrigatoriedade"
      ],
      "objetivosObservaveis": [
        "Classificar afirmações normativas por grau de obrigatoriedade (lei, regulamento, norma técnica, boa prática)",
        "Corrigir generalizações típicas de provas e de políticas internas",
        "Aplicar o método de verificação antes de afirmar (fonte, redação oficial, data, grau correto)",
        "Distinguir norma técnica incorporada (obrigatória) de norma técnica isolada (orientativa)"
      ],
      "competencias": [
        "Classificação normativa: enquadrar afirmação no grau correto de obrigatoriedade",
        "Leitura crítica de documentos: identificar fonte e grau de vinculatividade",
        "Cautela normativa: não citar prazo ou sanção decorado sem conferir fonte oficial",
        "Honestidade intelectual: afirmação inventada em documento oficial gera responsabilização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — art. 46, medidas de segurança vs. política interna",
        "m4-u4-t2-s2 (Articulação entre LGPD, Marco Civil e LAI) — art. 23 LGPD menciona a LAI",
        "m4-u4-t1-s1 (Objeto, aplicação, sujeitos e conceitos da LGPD) — leis obrigatórias, art. 1º"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação de normas e honestidade intelectual integra o conteúdo programático de controle, TI e jurídicas, especialmente em itens sobre LGPD, normas técnicas e políticas internas. A classificação é uma estimativa pedagógica qualitativa baseada na centralidade do tema."
      }
    },
    "niveis": {
      "iniciante": "Classificação hierárquica útil para a prática e para concursos: 1) Constituição e leis são obrigatórias (exemplo verificado: LGPD, arts. 1º a 46 citados neste material); 2) regulamentos e atos da autoridade competente são obrigatórios no âmbito delegado — conferir vigência; 3) normas técnicas e padrões são obrigatórios quando incorporados por contrato, política interna ou referência normativa, caso contrário orientam; 4) orientações e boas práticas de mercado são recomendadas — adotá-las pode virar parâmetro de cuidado esperado, mas não é 'lei'. Erros clássicos: tratar recomendação de framework como exigência legal; citar prazo ou sanção decorado sem conferir; confundir norma com política interna do órgão (que obriga servidores, mas não é lei).",
      "intermediario": "No nível intermediário, o aluno aplica a classificação a casos concretos: ex., relatório interno afirma 'a LGPD obriga backup diário'. A LGPD exige medidas de segurança aptas (art. 46, verificado), mas backup diário é medida técnica específica não descrita no dispositivo. A correção: 'a política interna do órgão determina backup diário como medida técnica que atende ao art. 46'. Assim separa lei de política. Também aplica o método de verificação: identificar fonte, confirmar redação em fonte oficial, registrar data, escrever com o grau correto.",
      "avancado": "No nível avançado, o aluno discute limites: norma técnica vincula quando incorporada por referência em lei, edital, contrato ou política; por si só, orienta. Política interna obriga servidores, mas não cria obrigação para terceiros sem base contratual ou legal. O método de verificação exige registrar a data e a fonte (planalto.gov.br), e escrever a afirmação com o grau correto ('a lei determina', 'a norma recomenda', 'a política interna obriga').",
      "especialista": "No nível especialista, o aluno integra a classificação na governança do órgão: elabora políticas internas com base legal clara, incorpora normas técnicas por referência em contratos, e treina servidores para distinguir obrigação legal de boa prática. Observa que afirmação inventada em documento oficial gera responsabilização, e que toda afirmação normativa deve indicar fonte verificada e data. A honestidade normativa é proteção profissional."
    },
    "comparacoes": [
      {
        "tema": "Lei vs. norma técnica vs. boa prática — grau de obrigatoriedade",
        "a": {
          "rotulo": "Lei (ex.: LGPD, Lei nº 13.709/2018)",
          "texto": "Obrigatória para todos os sujeitos a que se aplica. Exemplo verificado: LGPD, arts. 1º a 46. A lei determina e sanciona o descumprimento. Deve ser citada pelo número e ano, com dispositivo conferido em fonte oficial e data de verificação."
        },
        "b": {
          "rotulo": "Norma técnica / boa prática",
          "texto": "Norma técnica vincula só se incorporada por referência em lei, edital, contrato ou política interna; por si só, orienta. Boa prática de mercado é recomendada; adotá-la pode virar parâmetro de cuidado esperado, mas não é 'lei'. Exemplo: 'backup diário' é boa prática/política interna, não exigência literal do art. 46 da LGPD."
        },
        "diferencaGabarito": "A pegadinha é afirmar que 'norma técnica tem sempre força de lei' ou que 'boa prática de mercado é obrigação legal'. Norma técnica só vincula quando incorporada; boa prática é recomendação. A lei (LGPD) determina medidas aptas (art. 46), mas não especifica frequências nem ferramentas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Norma técnica brasileira tem sempre força de lei.",
        "porqueErrada": "Errado. Norma técnica vincula quando é incorporada por referência a lei, edital, contrato ou política; sozinha, apenas orienta.",
        "versaoCorreta": "Norma técnica é obrigatória somente quando incorporada por referência em lei, edital, contrato ou política interna; isoladamente, apenas orienta. Incorporação sem referência normativa não cria obrigação legal."
      },
      {
        "afirmacaoEquivocada": "Boa prática de mercado (ex.: backup diário) é obrigação legal direta da LGPD.",
        "porqueErrada": "Errado. A LGPD exige medidas de segurança aptas (art. 46, verificado) mas não especifica 'backup diário'. Essa é uma decisão de política interna ou boa prática que atende ao dispositivo, não uma exigência literal do texto legal.",
        "versaoCorreta": "A frequência e a ferramenta de backup (diário, semanal, contínuo) cabem ao órgão, com base em risco, RPO e política interna. O art. 46 exige medida técnica adequada, não impõe 'backup diário'."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Hierarquia: 1) Constituição e leis (obrigatórias); 2) regulamentos e atos da autoridade (obrigatórios no âmbito delegado); 3) normas técnicas (obrigatórias se incorporadas); 4) boas práticas (recomendadas)",
        "LGPD (Lei nº 13.709/2018): lei obrigatória, arts. 1º a 46 verificados neste material",
        "Norma técnica: vincula se incorporada por referência em lei, edital, contrato ou política",
        "Boa prática de mercado: recomendada, não é lei; pode virar parâmetro de cuidado esperado",
        "Política interna do órgão: obriga servidores, mas não cria obrigação para terceiros sem base contratual ou legal"
      ],
      "regras": [
        "Norma técnica vincula somente quando incorporada por referência normativa; isoladamente orienta",
        "Boa prática de mercado não é obrigação legal direta",
        "Método de verificação: identificar fonte, confirmar redação oficial, registrar data, usar grau correto",
        "Afirmação inventada em documento oficial gera responsabilização (honestidade normativa)"
      ],
      "comparacoes": [
        "Lei (obrigatória, ex.: LGPD) vs. norma técnica (obrigatória se incorporada) vs. boa prática (recomendada)"
      ],
      "fluxos": [
        "Afirmação normativa → 1) identificar a fonte (lei/regulamento/norma/política) → 2) confirmar redação atual em fonte oficial → 3) registrar a data de verificação → 4) escrever com o grau correto de obrigatoriedade"
      ],
      "excecoes": [
        "Política interna obriga servidores do órgão, mas não terceiros sem base contratual ou legal",
        "Dado sensível (art. 5º, II LGPD) exige base legal do art. 11, não apenas boa prática"
      ],
      "palavrasChave": [
        "Obrigação legal",
        "Norma técnica",
        "Boa prática",
        "Política interna",
        "LGPD",
        "Lei nº 13.709/2018",
        "art. 46",
        "art. 11",
        "incorporação por referência",
        "honestidade normativa",
        "grau de obrigatoriedade",
        "fonte oficial",
        "planalto.gov.br"
      ],
      "checklist": [
        "Sei classificar afirmação por grau de obrigatoriedade (lei/norma/boa prática)",
        "Distinguo norma técnica incorporada de norma isolada que apenas orienta",
        "Não cito prazo ou sanção decorado sem conferir fonte oficial e registrar data",
        "Reconheço que política interna obriga servidores, não terceiros sem base contratual/legal"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Cláusula de edital diz 'o órgão adotará as melhores práticas de mercado'. Isso é obrigação legal determinada?",
        "dados": "Cláusula genérica de edital: 'o órgão adotará as melhores práticas de mercado'. Sem critérios verificáveis, não é exigência normativa autoexecutável. O correto é especificar norma ou política aplicável e responsáveis. Dispositivo: nenhum dispositivo legal específico impõe 'melhores práticas de mercado' como obrigação direta.",
        "conceitos": [
          "Boa prática de mercado (recomendada, não é lei)",
          "Exigência normativa autoexecutável",
          "Especificação de norma/política e responsáveis"
        ],
        "estrategia": "A cláusula é genérica ('melhores práticas de mercado') sem critérios verificáveis; não é obrigação legal determinada. O correto é especificar norma ou política aplicável e responsáveis, tornando a exigência executável.",
        "execucao": [
          "Passo 1: Identificar que a cláusula é genérica ('melhores práticas de mercado') sem critérios verificáveis.",
          "Passo 2: Reconhecer que boa prática de mercado é recomendada, não é obrigação legal direta.",
          "Passo 3: Concluir que não é exigência normativa autoexecutável.",
          "Passo 4: Definir a correção — especificar norma ou política aplicável e responsáveis."
        ],
        "resultado": "Não é obrigação legal determinada. É compromisso genérico a ser detalhado; sem critérios verificáveis, não é exigência normativa autoexecutável. O correto é especificar norma ou política aplicável e responsáveis.",
        "justificativa": "Boa prática de mercado não tem força de lei por si só; uma cláusula genérica que não especifica critérios nem responsáveis não cria obrigação jurídica exeqúvel. A correção transforma a recomendação em especificação normativa com responsável.",
        "errosFrequentes": [
          "Tratar recomendação de framework como exigência legal",
          "Achar que 'melhores práticas de mercado' em edital obriga diretamente sem especificação",
          "Esquecer de definir responsáveis e critérios verificáveis"
        ],
        "variacao": "Edital diz 'o sistema seguirá a norma ISO 27001'. Avaliar: a norma só obriga se incorporada por referência contratual ou legal; caso contrário, orienta. Mesmo estrutura, norma técnica em vez de boa prática."
      },
      {
        "tipo": "aplicacao",
        "problema": "Afirmação de relatório interno: 'A LGPD obriga backup diário.' Qual a correção adequada?",
        "dados": "Relatório interno com afirmação 'A LGPD obriga backup diário'. Dispositivo aplicável: art. 46 da LGPD (verificado) exige medidas de segurança aptas, mas não especifica frequência de backup. Correção: 'A política interna do órgão determina backup diário como medida técnica que atende ao art. 46'.",
        "conceitos": [
          "Art. 46 LGPD (medidas de segurança aptas, verificado)",
          "Backup diário como medida técnica específica (boa prática/política interna)",
          "Separação lei x política interna"
        ],
        "estrategia": "A LGPD exige medidas de segurança aptas (art. 46), mas não impõe 'backup diário'. Corrigir dizendo que a política interna do órgão determina backup diário como medida técnica que atende ao art. 46, separando lei de política.",
        "execucao": [
          "Passo 1: Identificar que o art. 46 da LGPD (verificado) exige medidas de segurança aptas, sem especificar frequência de backup.",
          "Passo 2: Reconhecer que 'backup diário' é medida técnica específica, boa prática ou decisão de política interna.",
          "Passo 3: Corrigir a afirmação para atribuir o backup diário à política interna do órgão, não à LGPD diretamente.",
          "Passo 4: Manter a referência ao art. 46 como parâmetro que a política interna atende."
        ],
        "resultado": "A correção é: 'A política interna do órgão determina backup diário como medida técnica que atende ao art. 46'. Assim separa lei (exige medidas aptas) de política (define frequência diária).",
        "justificativa": "A afirmação original confunde exigência legal com decisão de gestão. O art. 46 exige medidas de segurança aptas, mas deixa a frequência e a ferramenta ao órgão. Atribuir 'backup diário' à LGPD é inventar exigência que o texto não tem.",
        "errosFrequentes": [
          "Afirmar que a LGPD 'obriga backup diário' (o dispositivo não especifica frequência)",
          "Não separar lei (art. 46) de política interna (frequência diária)",
          "Esquecer que o art. 46 exige medidas aptas, não ferramentas específicas"
        ],
        "variacao": "Relatório afirma 'a LGPD exige criptografia AES-256'. Avaliar: o art. 46 exige criptografia como medida apta, mas não especifica algoritmo AES-256. Mesmo lógica, algoritmo diferente."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação de item de verificação de concurso: 'Norma técnica brasileira tem sempre força de lei.'",
        "dados": "Item C/E de concurso: 'Norma técnica brasileira tem sempre força de lei e vincula todos os órgãos públicos.' Conteúdo: norma técnica vincula quando incorporada por referência em lei, edital, contrato ou política; por si só, orienta.",
        "conceitos": [
          "Norma técnica (obrigatória só se incorporada por referência)",
          "Força de lei (exclusiva de lei/regulamento)",
          "Incorporação por contrato, edital ou política interna"
        ],
        "estrategia": "Desconstruir a afirmação: norma técnica por si só orienta, não vincula. Vincula somente quando incorporada por referência em lei, edital, contrato ou política interna. Tratá-la como lei é generalização falsa, armadilha recorrente. Concluir que a afirmação é falsa.",
        "execucao": [
          "Passo 1: Identificar que norma técnica, isoladamente, apenas orienta (não tem força de lei).",
          "Passo 2: Reconhecer que vincula somente se incorporada por referência em lei, edital, contrato ou política.",
          "Passo 3: Concluir que 'sempre tem força de lei' é falso — a vinculação depende da incorporação.",
          "Passo 4: Marcar a afirmação como falsa (generalização falsa, armadilha recorrente)."
        ],
        "resultado": "Errado. Norma técnica vincula quando é incorporada por referência em lei, edital, contrato ou política; por si só, orienta. Tratá-la como lei é generalização falsa — armadilha recorrente.",
        "justificativa": "A força de lei é exclusiva de atos normativos com poder vinculante geral (lei, decreto, regulamento). Norma técnica é um padrão privado/setorial que só se torna obrigatório se o ato legal ou contratual a referenciar. A generalização 'sempre tem força de lei' ignora essa condição de incorporação.",
        "errosFrequentes": [
          "Achar que toda norma técnica vincula automaticamente",
          "Esquecer a condição de incorporação por referência normativa",
          "Não distinguir norma técnica (orienta) de lei (obriga)"
        ],
        "variacao": "Item: 'Boa prática de mercado é obrigatória para todos os órgãos públicos.' — FALSO. Boa prática é recomendada, não é lei. Mesmo estrutura, boa prática em vez de norma técnica."
      }
    ]
  }
};
