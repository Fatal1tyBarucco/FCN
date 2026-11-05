const enriParcialM4U1P1 = {
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
  }
};
