const enriParcialM6U3P3 = {
  "m6-u3-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Segurança, rastreabilidade e responsabilização são os três pilares que tornam um serviço público digital confiável e verificável. Sem segurança, os dados ficam expostos; sem rastreabilidade, não se apura quem agiu; sem responsabilização, não há consequência pelo mau uso. No conteúdo programático de ética, LGPD e Lei de Acesso à Informação, o aluno precisa distinguir a prova de fato (trilha de auditoria) da imputação de culpa (exame de dolo ou culpa) e conhecer os deveres do órgão e do servidor.",
      "preRequisitos": [
        "Noção de dado pessoal e dado sensível (LGPD)",
        "Dever de transparência e publicidade (Lei de Acesso à Informação)",
        "Distinção entre ato administrativo e registro técnico de log"
      ],
      "objetivosObservaveis": [
        "Relacionar os deveres de segurança do órgão e do servidor em um sistema de atendimento público",
        "Desenhar o conjunto mínimo de controles e evidências para rastreabilidade de ações",
        "Avaliar se uma trilha de auditoria é suficiente para apurar dolo ou culpa"
      ],
      "competencias": [
        "Análise de riscos e controles proporcionais ao serviço público",
        "Raciocínio jurídico-técnico: ligar norma, fato e responsabilidade",
        "Elaboração de evidências de auditoria com completude e rastreabilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t3-s2 (Exemplos resolvidos da unidade (três casos completos)) — aplicação prática dos conceitos de rastreabilidade",
        "m6-u3-t3-s4 (Comparações, pegadinhas, resumo estruturado e verificação de aprendizagem) — distinções sigilo x proteção de dados e segurança x responsabilização"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Tema central de ética e de tecnologia da informação no serviço público, especialmente em itens sobre LGPD, Lei de Acesso à Informação e responsabilidade funcional do servidor, que exigem distinguir a prova de fato da imputação de culpa. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que segurança é o conjunto de medidas técnicas e administrativas que protegem a informação e o serviço contra acessos não autorizados e situações acidentais ou ilícitas, com três destinatários simultâneos no serviço público: o titular dos dados, o órgão e o controle interno. Identifica que a rastreabilidade reconstrói a cadeia de eventos (quem fez o quê, quando, em que sistema, com que autorização e sobre qual versão da regra) e que a responsabilização exige apuração de dolo ou culpa, não apenas a existência de um registro.",
      "intermediario": "O aluno diferencia a trilha de auditoria (prova de fato, com identificador individual do usuário, data e hora com fuso, ação, objeto afetado, resultado, versão da regra e protocolo) do simples arquivo de log técnico. Conhece o art. 46 da LGPD (medidas de segurança), o art. 48 da Lei nº 14.129/2021 (controles internos proporcionais ao risco) e o art. 34 da Lei nº 12.527/2011 (responsabilização por divulgação não autorizada), sabendo que a auditoria interna segue abordagem baseada em risco (art. 49 da Lei nº 14.129/2021).",
      "avancado": "O aluno desenha o conjunto mínimo de controles para um sistema de atendimento público, incluindo autenticação individual com segundo fator, autorização por perfil, registro imutável de acessos, criptografia em trânsito e em repouso, controle de alteração de dados pessoais, inventário de bases com finalidade e origem, plano de resposta a incidentes, revisão periódica de acessos e teste documentado de restauração. Avalia falhas de processo como falhas de controle interno (art. 48 da Lei nº 14.129/2021), independentemente de culpa individual.",
      "especialista": "O aluno critica a suficiência de trilhas de auditoria em cenários reais, discute a ausência de log como ônus do sistema de controle interno e não como presunção de culpa, e integra segurança, rastreabilidade e responsabilização em um programa de governança de riscos. Distingue responsabilidade objetiva do órgão (art. 34 da Lei nº 12.527/2011) de responsabilidade funcional do servidor por dolo ou culpa, com direito de regresso, e avalia achados de auditoria interna com abordagem baseada em risco."
    },
    "comparacoes": [
      {
        "tema": "Trilha de auditoria x arquivo de log comum",
        "a": {
          "rotulo": "Trilha de auditoria",
          "texto": "Evidência de ato administrativo que identifica o sujeito por conta individual (nunca compartilhada), data e hora com fuso, ação executada, objeto afetado, resultado, versão da regra aplicada e identificador do protocolo ou sessão. Permite reconstituir o caso e apurar dolo ou culpa."
        },
        "b": {
          "rotulo": "Arquivo de log comum",
          "texto": "Registro técnico de eventos do sistema, focado em erros, acessos e operações do software. Geralmente não vincula cada ação a um sujeito identificado individualmente nem registra a versão da regra aplicada, servindo mais ao diagnóstico técnico do que à apuração de responsabilidade administrativa."
        },
        "diferencaGabarito": "A trilha de auditoria é completa e sujeita a responsabilização; o log comum é parcial e técnico. Só a trilha útil sustenta o art. 34 da Lei nº 12.527/2011 e o dever de auditoria do art. 43, IV, da Lei nº 14.129/2021."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o sistema registra todas as operações, a responsabilidade do servidor fica automaticamente demonstrada; o log substitui a apuração de dolo ou culpa.",
        "porqueErrada": "Registrar o fato e identificar o executor prova o que aconteceu, mas não equivale a imputar culpa. A responsabilização depende de exame de dolo ou culpa e de enquadramento normativo (art. 34 da Lei nº 12.527/2011). A trilha de auditoria comprova o fato; não produz responsabilidade por si mesma.",
        "versaoCorreta": "A trilha de auditoria é prova do fato ocorrido, não a imputação automática de culpa. O registro indica o que ocorreu e quem executou; a responsabilização exige exame de dolo ou culpa e enquadramento normativo (art. 34 da Lei nº 12.527/2011). Não havendo registro, não se pode inferir a inexistência da conduta."
      },
      {
        "afirmacaoEquivocada": "A ausência de registro de auditoria em um sistema obrigatório de rastreabilidade apenas dificulta a apuração, mas nunca é avaliada como falha do sistema de controle interno.",
        "porqueErrada": "Quando o registro era obrigatório, a ausência de log integra o sistema de controle interno e pode ser avaliada como falha organizacional (art. 48 da Lei nº 14.129/2021), sem que isso presuma culpa individual do servidor.",
        "versaoCorreta": "A ausência de registro de auditoria, quando a obrigação de registrar existia, pode ser analisada como falha do sistema de controle interno (art. 48 da Lei nº 14.129/2021), sem que isso presuma culpa de servidor específico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Segurança da informação (medidas técnicas e administrativas)",
        "Rastreabilidade (reconstrução da cadeia de eventos)",
        "Responsabilização (apuração de dolo e culpa)",
        "Trilha de auditoria (prova de fato completa)",
        "Controle interno proporcional ao risco"
      ],
      "regras": [
        "Art. 46 da LGPD: medidas de segurança técnicas e administrativas aptas ao risco",
        "Art. 48 da Lei nº 14.129/2021: controles internos proporcionais aos riscos",
        "Art. 34 da Lei nº 12.527/2011: responsabilidade por divulgação não autorizada de informações sigilosas ou pessoais",
        "Art. 49 da Lei nº 14.129/2021: auditoria interna com abordagem baseada em risco"
      ],
      "comparacoes": [
        "Trilha de auditoria identifica o sujeito e a regra aplicada; log comum apenas registra eventos técnicos",
        "Segurança previne o evento; rastreabilidade permite sabê-lo depois",
        "Responsabilidade objetiva do órgão x responsabilidade funcional do servidor por dolo ou culpa"
      ],
      "fluxos": [
        "Evento ocorre no sistema",
        "Trilha registra usuário, ação, objeto, resultado, data/hora com fuso e versão da regra",
        "Auditor apura fato e contexto normativo",
        "Exame de dolo ou culpa define responsabilização",
        "Registro formal no sistema de gestão de riscos"
      ],
      "excecoes": [
        "Conta compartilhada não identifica o sujeito e invalida a trilha para responsabilização",
        "Ausência de log, quando o registro era obrigatório, é falha organizacional, não prova de inocência",
        "O servidor privado que tenha acesso a informação sigilosa por vínculo com o poder público também responde (parágrafo único do art. 34 da Lei nº 12.527/2011)"
      ],
      "palavrasChave": [
        "segurança",
        "rastreabilidade",
        "responsabilização",
        "trilha de auditoria",
        "dolo",
        "culpa",
        "controle interno",
        "LGPD",
        "Lei de Acesso à Informação",
        "incidente"
      ],
      "checklist": [
        "Usar conta individual, nunca compartilhada, para cada servidor",
        "Registrar data e hora com fuso de cada ação",
        "Identificar o objeto afetado e o resultado da operação",
        "Preservar a versão da regra aplicada no momento do ato",
        "Vincular cada registro a um protocolo ou sessão de atendimento",
        "Manter registro imutável com retenção definida",
        "Revisar periodicamente acessos e permissões com aprovação formal",
        "Ter plano de resposta a incidente com prazo e comunicação ao titular e ao encarregado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que diferencia uma trilha de auditoria útil de um arquivo de log comum em um sistema de atendimento público?",
        "dados": "Sistema de atendimento público com registro de operações; comparação entre registro técnico de log e trilha de auditoria completa (identificador do usuário, data e hora com fuso, ação, objeto afetado, resultado, versão da regra, identificador do protocolo).",
        "conceitos": [
          "Trilha de auditoria",
          "Arquivo de log técnico",
          "Identificador individual do usuário"
        ],
        "estrategia": "Comparar os elementos mínimos de cada tipo de registro e explicar por que somente a trilha completa serve como evidência de ato administrativo para apuração de responsabilidade.",
        "execucao": [
          "1) Listar os campos de um arquivo de log comum (data, hora, evento, código de erro)",
          "2) Listar os campos de uma trilha de auditoria útil (usuário individual, data/hora com fuso, ação, objeto, resultado, versão da regra, protocolo)",
          "3) Verificar se o log identifica o sujeito e a regra aplicada",
          "4) Concluir que só a trilha completa permite reconstituir o caso e apurar dolo ou culpa"
        ],
        "resultado": "Uma trilha de auditoria útil é evidência de ato administrativo porque identifica o sujeito, a ação, o objeto afetado, o resultado, a data e hora com fuso, a versão da regra e o protocolo; um log comum apenas registra eventos técnicos.",
        "justificativa": "A completude da trilha permite reconstituir o fato, apurar dolo ou culpa e sustentar o art. 34 da Lei nº 12.527/2011 e o dever de auditoria do art. 43, IV, da Lei nº 14.129/2021; o log técnico, por si, não vincula o ato a um responsável identificado.",
        "errosFrequentes": [
          "Achar que qualquer registro de sistema serve como prova de responsabilidade",
          "Confundir endereço de IP com identificação individual do servidor",
          "Acreditar que a existência de log dispensa o exame de dolo ou culpa"
        ],
        "variacao": "Se o sistema usar conta compartilhada de equipe em vez de conta individual, a trilha deixa de identificar o sujeito e perde validade como evidência de ato administrativo para responsabilização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um relatório com dados de usuários foi enviado a um destinatário externo por erro de preenchimento de campo. Quais são as ações de contenção e responsabilização?",
        "dados": "Relatório enviado por e-mail a destinatário externo; erro no preenchimento de campo de destino; dados pessoais de usuários expostos; sem avaliação preventiva de destinatário externo e sem revisão na etapa de preenchimento; servidor responsável identificado por conta individual.",
        "conceitos": [
          "Contenção de incidente",
          "Preservação de evidência",
          "Responsabilização por dolo ou culpa",
          "Art. 46 da LGPD e art. 34 da Lei nº 12.527/2011"
        ],
        "estrategia": "Aplicar o plano de resposta a incidente: conter o fluxo, preservar a prova com identificador e data/hora, avaliar a exposição, comunicar ao encarregado e à autoridade competente, e apurar a responsabilidade funcional com base na trilha.",
        "execucao": [
          "1) Suspender o fluxo de envio e notificar o destinatário externo para eliminar ou devolver o arquivo sem divulgá-lo",
          "2) Preservar a evidência: registros de envio com identificador, data/hora, conta e destinatário",
          "3) Avaliar a extensão da exposição e comunicar ao encarregado de dados e à autoridade competente conforme o plano de resposta",
          "4) Verificar se as medidas de segurança do art. 46 da LGPD eram aptas ao risco real (falta de avaliação de destinatário externo, ausência de revisão de preenchimento)",
          "5) Apurar dolo ou culpa do servidor com base na trilha (art. 34 da Lei nº 12.527/2011) e tratar a falha de processo como achado de controle interno (art. 48 da Lei nº 14.129/2021)"
        ],
        "resultado": "Contenção do envio, preservação da evidência de envio, avaliação de exposição, comunicação ao encarregado e à autoridade competente, e apuração da responsabilidade funcional com base na trilha de auditoria.",
        "justificativa": "A contenção impede a divulgação adicional; a preservação da trilha permite apurar dolo ou culpa; a avaliação das medidas de segurança verifica se o art. 46 da LGPD foi respeitado; a falha de processo é parte da análise de segurança, não um detalhe fora do escopo.",
        "errosFrequentes": [
          "Notificar o destinatário mas não preservar a prova de envio",
          "Achar que o erro de preenchimento isenta o servidor de responsabilidade",
          "Avaliar apenas a tecnologia e ignorar a falha de processo (revisão de preenchimento)"
        ],
        "variacao": "Se o destinatário externo for um outro órgão público com quem existe acordo de compartilhamento de dados, a contenção deve incluir a verificação do termo de uso e da base legal de compartilhamento, além da devolução ou eliminação do arquivo."
      },
      {
        "tipo": "erro",
        "problema": "Alega-se que, por registrar todas as operações, o sistema demonstraria automaticamente a responsabilidade do servidor e dispensaria a apuração de dolo ou culpa. Avalie se o registro de operações substitui o exame de culpa.",
        "dados": "Sistema que registra todas as operações; servidor executou uma ação indevida registrada por conta individual; não há exame separado de dolo ou culpa nem enquadramento normativo além da existência do registro.",
        "conceitos": [
          "Prova de fato x imputação de culpa",
          "Trilha de auditoria",
          "Exame de dolo ou culpa"
        ],
        "estrategia": "Rejeitar a leitura ingênua de que o registro automático equivale à responsabilidade demonstrada; explicar que a trilha prova o fato e a responsabilização exige exame de dolo ou culpa e enquadramento normativo.",
        "execucao": [
          "1) Identificar que a afirmação confunde prova de fato com imputação de responsabilidade",
          "2) Relembrar que a trilha registra o que ocorreu e quem executou, mas não apura dolo ou culpa",
          "3) Aplicar o art. 34 da Lei nº 12.527/2011: responsabilização exige apuração de dolo ou culpa",
          "4) Reconhecer que a ausência de log, quando obrigatório, é falha organizacional (art. 48 da Lei nº 14.129/2021), não prova de inocência",
          "5) Concluir que o log não substitui a apuração"
        ],
        "resultado": "Errado. A trilha é prova de fato, não imputação de culpa. O registro mostra o que ocorreu e quem executou; a responsabilização exige exame de dolo ou culpa e o enquadramento normativo (art. 34 da Lei nº 12.527/2011).",
        "justificativa": "O registro automático demonstra a ocorrência e o executor, mas a responsabilidade administrativa depende do exame de dolo ou culpa e do enquadramento normativo; tratar o log como prova automática de culpa é o mesmo erro de inferir responsabilidade apenas pela existência do registro.",
        "errosFrequentes": [
          "Acreditar que registro de sistema equivale a culpa demonstrada",
          "Deixar de examinar o contexto normativo e a intenção do servidor",
          "Achar que, sem log, não há como apurar nenhuma conduta"
        ],
        "variacao": "Se o sistema não tiver registro de auditoria obrigatório, a ausência de log não prova a inexistência da conduta, mas integra o sistema de controle interno como falha organizacional, sem presunção de culpa individual."
      }
    ]
  },
  "m6-u3-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Resolver casos completos de proteção de dados, sigilo e responsabilização consolida o aprendizado da unidade 6.3 ao forçar o aluno a aplicar, em sequência, os nove itens do template de exemplo resolvido: problema, dados, conceitos, estratégia, execução, resultado, justificativa, erros frequentes e variação. Essa recuperação ativa prepara para questões de concurso que apresentam um cenário e exigem a identificação do enquadramento legal correto, da medida de contenção adequada e da diferença entre sigilo administrativo e proteção de dados pessoais.",
      "preRequisitos": [
        "Dado pessoal, dado sensível e dado anonimizado x pseudonimizado (LGPD)",
        "Graus e prazos de sigilo administrativo (Lei de Acesso à Informação)",
        "Diferença entre prova de fato (trilha) e imputação de culpa (dolo ou culpa)"
      ],
      "objetivosObservaveis": [
        "Resolver três casos completos de proteção de dados, sigilo e responsabilização usando o template de nove itens",
        "Identificar o enquadramento legal aplicável a cada cenário (LGPD, Lei de Acesso à Informação)",
        "Aplicar medidas de contenção, preservação de evidência e responsabilização em ordem correta"
      ],
      "competencias": [
        "Aplicação de normas (LGPD e LAI) a cenários concretos do serviço público",
        "Elaboração de resposta estruturada com rastreabilidade de decisão",
        "Análise crítica de decisões de comunicação e contenção de incidentes"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t3-s1 (Segurança, rastreabilidade e responsabilização no serviço público digital) — fundamentos conceituais aplicados nos três casos",
        "m6-u3-t3-s4 (Comparações, pegadinhas, resumo estruturado e verificação de aprendizagem) — distinções reforçadas nos exemplos resolvidos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Casos práticos de proteção de dados e responsabilização integram questões discursivas e objetivas de TI e ética pública, exigindo enquadramento legal preciso e aplicação do template de nove itens. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que os exemplos resolvidos são hipóteses didáticas construídas para ensino, sem correspondência com caso real de órgão, empresa ou pessoa determinada, e que todos seguem os nove itens exigidos. Identifica o acesso parcial a informações públicas com dados pessoais, o uso indevido de rede social pessoal para dado de atendimento e o incidente de segurança com exposição de dado sensível como situações distintas que exigem respostas diferentes.",
      "intermediario": "O aluno aplica o template de nove itens a três casos: (1) pedido de acesso a planilha de licitações com CPF de fornecedores pessoa física, usando ocultação ou agregação da camada pessoal (art. 7º, § 2º, e art. 31 da Lei nº 12.527/2011); (2) servidor que publica foto de cidadão em rede social pessoal, enquadrada nos arts. 31 e 32 da Lei nº 12.527/2011 e art. 5º da LGPD; (3) invasão de sistema de triagem com vazamento de 4.000 registros (nome, CPF, diagnóstico), exigindo contenção, preservação de prova e comunicação ao titular e ao encarregado.",
      "avancado": "O aluno diferencia, em cada caso, o que é sigilo administrativo (graus ultrassecreta, secreta e reservada, prazos 25/15/5 anos, abertura automática — arts. 23 e 24 da Lei nº 12.527/2011) do que é proteção de dados pessoais (independentemente de classificação, art. 31, § 1º, I), e distingue anonimização (impede associação razoável, art. 5º, III, da LGPD) de pseudonimização (permite associação por meios adicionais, permanece dado pessoal). Avalia a decisão de «não comunicar o titular para evitar pânico» como inadequada, pois o titular tem direito de saber e a omissão agrava o dano.",
      "especialista": "O aluno critica a variação de cada caso (requerente titular dos dados, servidor em campanha institucional, vazamento por ação de servidor com acesso legítimo) e ajusta o enquadramento conforme o deslocamento do caso (direito de acesso do titular, art. 18 da LGPD; publicidade institucional, unidade 6.4; responsabilização funcional, art. 34 da Lei nº 12.527/2011). Integra os três casos em um plano de resposta a incidente e de gestão de riscos, com revisão pela auditoria interna (art. 49 da Lei nº 14.129/2021)."
    },
    "comparacoes": [
      {
        "tema": "Acesso parcial x entrega integral da base",
        "a": {
          "rotulo": "Acesso parcial com ocultação",
          "texto": "O órgão entrega a planilha de licitações ocultando apenas os dados pessoais (CPF, endereço, dados bancários, dados de saúde), mantendo a camada pública (objeto, valor, contrato, fornecedor). Compatível com o art. 7º, § 2º, da Lei nº 12.527/2011 e com a proteção do art. 31."
        },
        "b": {
          "rotulo": "Entrega integral da base",
          "texto": "O órgão entrega toda a planilha, incluindo CPF de fornecedores pessoa física, sem ocultação. Viola a proteção da informação pessoal do art. 31 da Lei nº 12.527/2011 e expõe o órgão a responsabilização."
        },
        "diferencaGabarito": "Acesso parcial com ocultação é o procedimento correto; entrega integral descumpre o dever de proteger a informação pessoal mesmo quando os dados da licitação são públicos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como a planilha de licitações é pública, o órgão deve entregá-la integralmente, incluindo o CPF dos fornecedores pessoa física, sem qualquer ocultação.",
        "porqueErrada": "A publicidade dos dados de licitação não dispensa a proteção da informação pessoal dos fornecedores pessoa física (art. 31 da Lei nº 12.527/2011). O correto é o acesso parcial, com ocultação ou agregação apenas da camada pessoal.",
        "versaoCorreta": "O acesso público à licitação não dispensa a proteção dos dados pessoais dos fornecedores pessoa física (art. 31 da Lei nº 12.527/2011); deve-se aplicar acesso parcial com ocultação da camada pessoal (art. 7º, § 2º)."
      },
      {
        "afirmacaoEquivocada": "Anonimizar dados é apenas trocar o nome por um código, de modo que a base anonimizada pode ser aberta livremente porque não há mais identificação.",
        "porqueErrada": "Trocar o nome por um código é pseudonimização, que mantém a possibilidade de associação por meios adicionais e o status de dado pessoal. Somente a anonimização efetiva, que impede a associação razoável (art. 5º, III, da LGPD), autoriza a abertura de base (art. 36 da Lei nº 14.129/2021).",
        "versaoCorreta": "Anonimização não é trocar o nome por um código (isso é pseudonimização); somente a anonimização efetiva, que impede a associação razoável (art. 5º, III, da LGPD), autoriza a abertura de base (art. 36 da Lei nº 14.129/2021)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acesso parcial à informação pública",
        "Proteção da informação pessoal (art. 31 da LAI)",
        "Dado pessoal x dado pessoal sensível",
        "Anonimização x pseudonimização",
        "Responsabilização por dolo ou culpa (art. 34 da LAI)"
      ],
      "regras": [
        "Art. 7º, § 2º, da Lei nº 12.527/2011: acesso parcial com ocultação da parte sob sigilo",
        "Art. 31 da Lei nº 12.527/2011: proteção da informação pessoal",
        "Art. 5º, III, da LGPD: anonimização impede associação razoável",
        "Art. 36 da Lei nº 14.129/2021: abertura de base exige anonimização efetiva",
        "Art. 34 da Lei nº 12.527/2011: responsabilidade por divulgação não autorizada"
      ],
      "comparacoes": [
        "Sigilo protege o interesse público; proteção de dados protege o cidadão, independentemente de classificação",
        "Anonimização impede associação; pseudonimização permite associação por meios adicionais",
        "Entrega integral de base pública viola a proteção de dados pessoais dos titulares"
      ],
      "fluxos": [
        "Receber o pedido de acesso e verificar identidade e especificação (art. 10 da LAI)",
        "Identificar colunas com dados pessoais e dados públicos",
        "Aplicar ocultação ou agregação apenas na camada pessoal",
        "Gerar extrato com certificação de conformidade, se necessário (art. 13 da LAI)",
        "Registrar a ocorrência, os campos ocultados e o método"
      ],
      "excecoes": [
        "Se o requerente for o próprio fornecedor pessoa física, incide o direito de acesso do titular (art. 18 da LGPD) e a resposta é individualizada",
        "Conta institucional com autorização de comunicação social muda o enquadramento, mas não autoriza expor dados de terceiros além do necessário",
        "Vazamento por ação de servidor com acesso legítimo desloca o caso da vulnerabilidade técnica para a responsabilização funcional (art. 34 da LAI)"
      ],
      "palavrasChave": [
        "acesso parcial",
        "informação pessoal",
        "anonimização",
        "pseudonimização",
        "sigilo",
        "responsabilização",
        "incidente",
        "LGPD",
        "Lei de Acesso à Informação",
        "template de nove itens"
      ],
      "checklist": [
        "Verificar a identidade e a especificação do pedido (art. 10 da LAI)",
        "Identificar as colunas com dados pessoais na base",
        "Aplicar ocultação ou agregação apenas na camada pessoal",
        "Gerar extrato com certificação de conformidade, quando cabível",
        "Comunicar a data, o local e o modo de consulta ou reprodução (art. 11, § 1º, I)",
        "Registrar a ocorrência, os campos ocultados e o método",
        "Avaliar se o requerente é o titular dos dados (direito de acesso, art. 18 da LGPD)",
        "Documentar a decisão de ocultação em ata e no sistema de gestão de riscos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão recebeu pedido de acesso a uma planilha interna de licitações, contendo nomes, cargos e valores pagos a fornecedores. Parte dos fornecedores são pessoas físicas com CPF no cadastro. Como o órgão deve agir?",
        "dados": "Pedido protocolado com identificação do requerente e especificação da base; a base contém colunas de identificação de pessoas físicas (CPF); a Lei nº 12.527/2011 exige divulgar editais, resultados e contratos (art. 8º, § 1º, IV) e proteger a informação pessoal (art. 31); o art. 30, § 6º, da Lei nº 14.129/2021 trata da abertura de bases.",
        "conceitos": [
          "Acesso parcial (art. 7º, § 2º, da LAI)",
          "Proteção da informação pessoal (art. 31)",
          "Compatibilidade entre publicidade e privacidade",
          "Agregação e pseudonimização como técnicas de conciliação"
        ],
        "estrategia": "Separar a base em camada pública (objeto, valor, contrato, fornecedor) e camada pessoal (CPF, endereço, dados bancários, dados de saúde) e entregar o máximo possível com ocultação apenas do que for necessário.",
        "execucao": [
          "1) Verificar a identidade e a especificação do pedido (art. 10)",
          "2) Identificar as colunas com dados pessoais",
          "3) Aplicar ocultação ou agregação nas colunas pessoais — substituir o CPF por identificador de fornecedor, mantendo a conferência possível apenas por quem tem função específica",
          "4) Gerar o extrato com certificação de conformidade, se a manipulação puder prejudicar a integridade do documento (art. 13)",
          "5) Comunicar a data, o local e o modo de consulta ou reprodução (art. 11, § 1º, I)",
          "6) Registrar a ocorrência, os campos ocultados e o método"
        ],
        "resultado": "Entrega da planilha em formato útil e compatível com o dever de transparência, com a camada pessoal minimizada e motivada.",
        "justificativa": "O art. 7º, § 2º, da LAI assegura o acesso à parte não sigilosa por cópia com ocultação da parte sob sigilo; a minimização preserva o interesse público do art. 8º sem descuidar da proteção do art. 31.",
        "errosFrequentes": [
          "Negar o pedido inteiro por conter CPF",
          "Entregar o CPF alegando que é pessoa jurídica, sem checar se é pessoa física",
          "Gerar relatório tratado sem avisar que não é o original",
          "Não registrar o método de ocultação"
        ],
        "variacao": "Se o requerente for o próprio fornecedor pessoa física, o regime muda: incide o direito de acesso do titular (art. 18 da LGPD) e a resposta é individualizada, com correção e anonimização quando cabíveis."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor público publica em sua conta pessoal de rede social a foto de um cidadão atendido, com o nome completo no texto, sem consentimento. Como a unidade 6.3 enquadra o caso?",
        "dados": "O servidor é agente público; a pessoa retratada é cidadão atendido; dados da foto e do nome são pessoais; o atendimento é serviço público; não há consentimento registrado; a informação diz respeito a pessoa identificável.",
        "conceitos": [
          "Art. 31 da Lei nº 12.527/2011 (proteção da informação pessoal)",
          "Art. 32, IV, da LAI (divulgação indevida de informação pessoal)",
          "Art. 5º, I e II, e art. 46 da LGPD (dado pessoal, dado sensível, dever de segurança)",
          "Princípios da moralidade e da publicidade (unidade 6.1)"
        ],
        "estrategia": "Agir em três frentes — contenção imediata, apuração administrativa e correção do efeito da propagação — com preservação da prova e apuração de responsabilidade funcional.",
        "execucao": [
          "1) Remover o conteúdo ou torná-lo privado de imediato e preservar registro do que foi publicado (a evidência é a própria publicação)",
          "2) Preservar a prova (captura, data/hora, conta), pois a apuração depende da trilha",
          "3) Comunicar ao titular e avaliar a necessidade de apoio, conforme política de incidente",
          "4) Abrir apuração com enquadramento nos arts. 32, IV, e 32, I, da LAI e, se houver dado de saúde, no art. 5º, II, da LGPD",
          "5) Apurar responsabilidade funcional por dolo ou culpa (art. 34 da LAI) e eventual improbidade (art. 32, § 2º)",
          "6) Registrar a ocorrência e as medidas em ata e no sistema de gestão de riscos"
        ],
        "resultado": "Conteúdo retirado, titular comunicado, apuração formal aberta e risco de uso indevido de sistemas e redes registrado como evento crítico.",
        "justificativa": "O regime da informação pessoal protege o cidadão independentemente do canal usado pelo servidor; o perfil pessoal não é extensão do órgão, e o princípio da moralidade proíbe a exposição de dado de atendimento para fins alheios ao serviço.",
        "errosFrequentes": [
          "Tratar como questão disciplinar genérica, sem enquadramento nos arts. 31 e 32 da LAI",
          "Pedir ao cidadão que apague a postagem como solução",
          "Não preservar a prova antes de apagar",
          "Concluir que, por não haver sigilo de Estado, o fato é irrelevante"
        ],
        "variacao": "Se o servidor agiu em campanha institucional do órgão, usando a conta institucional e com autorização de comunicação social, o enquadramento muda (publicidade institucional e uso institucional de redes sociais, unidade 6.4), mas permanece a vedação de expor dados de terceiros além do necessário."
      },
      {
        "tipo": "erro",
        "problema": "Um órgão revelou que o sistema de triagem de benefícios foi invadido, e o invasor exportou a base completa (nome, CPF, diagnóstico) de 4.000 pessoas. A comunicação interna optou por «não comunicar o titular para evitar pânico». Avalie a decisão e o que a unidade 6.3 exige.",
        "dados": "4.000 registros com nome, CPF e diagnóstico (dado pessoal sensível, art. 5º, II, da LGPD — verificado em 2026-10-20); sinais de invasão com autenticação indevida; há registro de auditoria e logs de acesso; a equipe de segurança identificou a falha técnica; o plano de resposta a incidentes do órgão prevê comunicação ao encarregado.",
        "conceitos": [
          "Art. 46 da LGPD (medidas de segurança aptas)",
          "Art. 25 da Lei nº 14.129/2021 (transparência e controle do tratamento)",
          "Art. 34 da Lei nº 12.527/2011 (responsabilidade por divulgação não autorizada)",
          "Art. 32, IV, da LAI (acesso indevido a informação pessoal)",
          "Art. 48 da Lei nº 14.129/2021 (gestão de riscos e controle interno) e art. 49 (auditoria interna)"
        ],
        "estrategia": "Não decidir a comunicação «para evitar pânico» com base em avaliação subjetiva, mas com base no dever legal de proteção, na avaliação de risco ao titular (diagnóstico com CPF — risco de estigmatização, fraude e discriminação) e nos procedimentos internos.",
        "execucao": [
          "1) Conter: revogar credenciais, isolar o vetor, preservar logs e imagens forenses, e preservar a prova sem alterar a base",
          "2) Avaliar a extensão real do vazamento (quantos registros, quais campos, por quanto tempo, houve acesso posterior)",
          "3) Verificar as medidas de segurança existentes à luz do art. 46 e do art. 48; se a exposição decorreu de falha controlável (credencial padrão, ausência de MFA, endpoint sem criptografia, permissão excessiva), o caso é também achado de controle interno",
          "4) Comunicar ao encarregado e à autoridade competente e avaliar a comunicação aos titulares, com linguagem clara sobre o que foi exposto, o que o titular pode fazer e a linha de contato, porque a omissão agrava o dano",
          "5) Comunicar às autoridades de proteção de dados e de segurança, quando cabível",
          "6) Abrir plano de correção com prazo, responsável e revisão pela auditoria interna",
          "7) Registrar tudo no sistema de gestão de riscos"
        ],
        "resultado": "Contenção e apuração do incidente, comunicação efetiva aos afetados e apuração administrativa e técnica do servidor que deu causa, com registro formal das decisões de comunicação.",
        "justificativa": "O dever de segurança é proteger o titular; o titular tem direito de saber do que o órgão tem conhecimento oficial sobre seus dados, e a omissão de comunicação agrava o risco de dano (fraude com diagnóstico, discriminação). A renúncia à comunicação é decisão de risco da instituição, não do servidor isoladamente.",
        "errosFrequentes": [
          "Tratar comunicação ao titular como discussão jurídica e não como decisão de gestão de risco documentada",
          "Destruir ou rotacionar logs antes da preservação forense",
          "Comunicar apenas quando houver «confirmação» de uso indevido, confundindo exposição com uso",
          "Não comunicar o incidente ao encarregado e à autoridade competente"
        ],
        "variacao": "Se o vazamento tiver ocorrido por ação de servidor com acesso legítimo e registro íntegro de downloads, o caso desloca-se da vulnerabilidade técnica para a responsabilização funcional (art. 34 da LAI) e para a apuração de uso indevido de dados (art. 32, IV), exigindo análise do caso individual e do processo, e não uma resposta coletiva e automática."
      }
    ]
  }
};
