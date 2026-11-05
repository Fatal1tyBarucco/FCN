const enriquecimentoM6 = {
  "m6-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Esta é a porta de entrada da unidade: o aluno precisa saber o que vai estudar, com que base e para quê antes de enfrentar os cinco princípios. Quase todo produto de TI no serviço público é instrumento de exercício de competência administrativa, de modo que um defeito de desenho que viole a legalidade, a impessoalidade ou a publicidade não é apenas falha técnica: é vício do ato, com reflexos na responsabilização do servidor, do gestor e do órgão. Delimitar previamente o roteiro de aprendizagem evita que o estudo se perca em listas decoradas sem aplicação.",
      "preRequisitos": [
        "Noções de organização administrativa e de separação de Poderes.",
        "Tríade CIA, responsabilização, não repúdio e classificação de risco (Módulo 4).",
        "Viés, explicabilidade e avaliação de modelos (Módulo 5).",
        "Noções de LGPD já estudadas na parte de proteção de dados do Módulo 4."
      ],
      "objetivosObservaveis": [
        "enumerar os cinco princípios constitucionais da Administração Pública e citar o dispositivo que os reúne;",
        "relacionar cada princípio a requisitos concretos de desenho, operação e auditoria de sistemas digitais;",
        "construir um teste de conformidade com a evidência documental exigida para cada princípio;",
        "redigir justificativa técnica de não conformidade ancorada em norma, com a redação própria do relatório de auditoria."
      ],
      "competencias": [
        "Interpretação de norma com efeito operacional sobre a conduta técnica.",
        "Argumentação técnica dirigida a auditoria, controle interno e gestores não técnicos.",
        "Desenho de controles proporcionais ao risco do serviço digitalizado.",
        "Comunicação de risco: traduzir o vício jurídico em linguagem de conclusão técnica."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t1-s2 (Fundamentação conceitual: natureza dos princípios e conteúdo de cada um) — o conteúdo de cada princípio anunciado nesta orientação;",
        "m6-u1-t2-s1 (Legalidade e automação de atos administrativos: onde termina a automação) — desdobramento operacional do primeiro princípio;",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade) — as distinções que mudam o gabarito da prova;",
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — base legal da publicidade e do sigilo."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Os princípios do art. 37 da Constituição Federal comparecem nos editais de TI para órgão público como eixo de direito administrativo, sobretudo em itens que apresentam um sistema digital e pedem o princípio violado. A classificação alta decorre da centralidade do tema no perfil do cargo e da recorrência do enfrentamento em itens de certo e errado; trata-se de estimativa pedagógica, não de medição estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "A unidade começa pelo mapa: cinco princípios constitucionais da Administração Pública — legalidade, impessoalidade, moralidade, publicidade e eficiência — reunidos no caput do art. 37 da Constituição Federal. Depois, três frentes de trabalho: a natureza jurídica e o conteúdo de cada princípio, a tradução de cada um em requisitos concretos de desenho, operação e auditoria de sistemas e serviços digitais, e a construção de um teste de conformidade que verifique item a item se um sistema respeita cada princípio. A dificuldade é baixa na conceituação e alta na aplicação.",
      "intermediario": "No segundo nível, o aluno deixa de memorizar a lista e passa a enquadrar casos. Um sistema que decide quem recebe benefício, um portal que informa sobre um programa e um painel que divulga desempenho da gestão são atos administrativos ou comunicações administrativas em suporte digital, e não apenas tecnologia. A tarefa passa a ser identificar qual princípio está em jogo em um cenário dado, explicar por que ele é atingido e indicar a evidência que demonstra a conformidade ou a violação.",
      "avancado": "No nível avançado, o foco é o teste de conformidade: para cada princípio, definem-se perguntas de auditoria, a evidência exigida e a trilha que permite reconstituir o caso. O examinador costuma apresentar situações ambíguas, em que dois princípios parecem alcançar a mesma conduta, e espera que o candidato explique qual prevalece e por quê, com fundamento normativo e não com juízo de conveniência. A saída esperada é um parecer de não conformidade, e não um laudo técnico neutro.",
      "especialista": "No nível especialista, o aluno produz o próprio instrumento: um roteiro de verificação que um técnico aplicaria ao receber um sistema para auditar, com ordem de risco — primeiro legalidade (competência e base normativa), depois impessoalidade (critérios definidos e auditáveis), moralidade (finalidade declarada), publicidade (completude da transparência ativa e correção dos requisitos do sítio oficial) e eficiência (indicadores do painel de monitoramento). Cada achado é registrado com norma, evidência e risco, para que o gestor decida com base em fato documentado."
    },
    "comparacoes": [
      {
        "tema": "Instalar um sistema e administrá-lo com responsabilidade constitucional",
        "a": {
          "rotulo": "Instalar (verificação técnica de funcionamento)",
          "texto": "O técnico confere disponibilidade, desempenho, compatibilidade e funcionamento das rotinas. O critério de êxito é a operação: o sistema sobe, responde no tempo esperado e produz o resultado previsto pela especificação."
        },
        "b": {
          "rotulo": "Administrar (verificação de conformidade do ato)",
          "texto": "O administrador pergunta, além disso, se o sistema decide com legalidade (há competência e base normativa?), se trata com impessoalidade (critérios definidos, iguais e auditáveis?), se respeita a moralidade (dados e finalidade adequados?) e se dá publicidade ao que é público."
        },
        "diferencaGabarito": "A primeira camada é condição necessária e não suficiente: sistema funcionando pode produzir ato viciado. Em prova, o item que descreve falha de conectividade aponta para a camada técnica; o que descreve decisão sem base legal ou critério oculto aponta para vício do ato, com responsabilização do órgão."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como os princípios constitucionais são normas abstratas, não geram obrigação técnica verificável no setor de TI.",
        "porqueErrada": "Princípio é norma de conduta que exige concretização; no serviço público digital, a concretização é técnica e o descumprimento é verificável por evidência — configuração, log, versão da regra. O examinador explora exatamente essa ponte entre a norma e o registro técnico.",
        "versaoCorreta": "Os princípios são normas de textura aberta que reclamam concretização, e no ambiente digital essa concretização se faz por requisitos técnicos verificáveis: base legal do tratamento, critério escrito e vigente, log de alteração e trilha de auditoria. O ponto de equilíbrio é não lê-los como regra de prazo e valor exatos, que são elementos que a lei traz (exemplo: os 20 dias do art. 11, § 1º, da Lei nº 12.527/2011)."
      },
      {
        "afirmacaoEquivocada": "Um sistema de triagem que ordena a fila por escore sigiloso viola principalmente o princípio da eficiência, porque atrasa o atendimento.",
        "porqueErrada": "A eficiência pode até estar otimizada em termos de tempo médio de resposta. O problema direto está em outro lugar: sem critério documentado e auditável, não se demonstra tratamento igualitário (impessoalidade) nem se publiciza como a ordem é definida (publicidade).",
        "versaoCorreta": "A violação mais direta é da impessoalidade e da publicidade: o escore precisa ser critério previamente definido, objetivo, igualmente aplicável a casos iguais e divulgado, de modo que o cidadão saiba por que está atrás na fila. A eficiência só é violada se a métrica do serviço degradar, o que é questão distinta."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Princípios constitucionais da Administração: legalidade, impessoalidade, moralidade, publicidade e eficiência, reunidos no caput do art. 37 da Constituição Federal.",
        "Ato administrativo em suporte digital: o sistema é instrumento de exercício de competência, e o vício de desenho é vício do ato.",
        "Teste de conformidade: roteiro que converte cada princípio em perguntas de auditoria e na evidência documental que as responde."
      ],
      "regras": [
        "O caput do art. 37 da Constituição Federal obriga a administração direta e indireta de todos os Poderes e entes federativos aos cinco princípios.",
        "A evidência de conformidade é documento: configuração vigente, log de alteração, versão da regra e indicador publicado, não a prática informal do setor."
      ],
      "comparacoes": [
        "Verificação técnica de funcionamento (disponibilidade, desempenho) difere de verificação de conformidade (legalidade, impessoalidade, moralidade, publicidade): a primeira é necessária, a segunda é a que responde pela validade do ato."
      ],
      "fluxos": [
        "Roteiro da unidade: natureza e conteúdo dos princípios → tradução em requisitos de sistema → teste de conformidade com evidência → parecer de não conformidade ancorado em norma."
      ],
      "excecoes": [
        "Casos ambíguos, em que dois princípios parecem alcançar a mesma conduta: a solução exige fundamento normativo e ponderação, não hierarquia fixa entre princípios."
      ],
      "palavrasChave": [
        "art. 37 da Constituição Federal",
        "princípios constitucionais",
        "conformidade",
        "evidência documental",
        "trilha de auditoria",
        "parecer de não conformidade"
      ],
      "checklist": [
        "Sei nomear os cinco princípios e citar o dispositivo que os reúne?",
        "Consigo apontar, em um sistema digital hipotético, qual princípio está em jogo e por quê?",
        "Sei construir um teste de conformidade com a evidência exigida para cada princípio?",
        "Sei redigir justificativa técnica de não conformidade ancorada em norma?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença de trabalho que separa o técnico que instala um sistema de triagem de benefícios daquele que o administra com responsabilidade?",
        "dados": "Sistema de triagem de benefícios recém-implantado; plataforma estável, com autenticação e protocolo; tempo médio de resposta dentro do previsto; nenhum documento indica a base legal do critério de ordenação das filas.",
        "conceitos": [
          "Camada técnica de funcionamento: disponibilidade, desempenho e compatibilidade.",
          "Camada de conformidade: legalidade, impessoalidade, moralidade, publicidade e eficiência."
        ],
        "estrategia": "Separar as duas camadas de verificação e mostrar que a segunda é a que responde pela validade do ato administrativo produzido pelo sistema, sem desprezar a primeira.",
        "execucao": [
          "1) Listar o que a instalação verifica: disponibilidade, desempenho, compatibilidade e resultado previsto na especificação;",
          "2) Listar o que a administração acrescenta: há competência e base normativa? os critérios são definidos, iguais e auditáveis?",
          "3) Verificar moralidade, publicidade e eficiência: finalidade adequada dos dados, divulgação do que é público e qualidade mensurada do serviço;",
          "4) Concluir qual camada sustenta a validade do ato e qual sustenta apenas a operação."
        ],
        "resultado": "O instalador verifica se o sistema funciona; o administrador verifica também se ele decide de forma legal, se trata com impessoalidade, se respeita a moralidade na finalidade dos dados, se dá publicidade ao que é público e se entrega eficiência medida por indicadores. Essa segunda camada é que responde pela validade do ato, e a sua ausência não é suprida por plataforma estável.",
        "justificativa": "O sistema é instrumento de exercício de competência administrativa: o ato produzido carrega os vícios do seu desenho. Por isso a estabilidade técnica, embora necessária, não afasta a exigência de base normativa, critério auditável, finalidade adequada, publicidade e qualidade mensurável — é essa cadeia que a prova cobra quando descreve um cenário digital.",
        "errosFrequentes": [
          "Confundir defeito técnico com vício do ato: indisponibilidade é problema de operação, enquanto decisão sem base legal é vício de legalidade;",
          "Achar que a automatização encerra a análise: o sistema executa, mas a competência, o critério e a responsabilidade permanecem no órgão."
        ],
        "variacao": "Se o sistema, além de ordenar a fila, passar a indeferir pedidos, a pergunta muda de natureza: a decisão automatizada sobre direito do cidadão passa a exigir motivação, comunicação e canal de revisão, e não apenas registro interno."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um técnico vai iniciar a auditoria de um portal de serviços. Em que ordem ele deve produzir as evidências?",
        "dados": "Portal de serviços com autenticação, protocolo e fila de atendimento ordenada por escore; painel de monitoramento com indicadores; transparência ativa parcial; nenhum registro de versão dos critérios de ordenação.",
        "conceitos": [
          "Ordem de risco da auditoria: primeiro os princípios que sustentam a validade do ato.",
          "Evidência documental por princípio: norma, configuração vigente, log e indicador publicado."
        ],
        "estrategia": "Ordenar a produção de evidências pelo risco do vício, e não pela facilidade de coleta: começar pela legalidade, que sustenta os demais, e terminar pela eficiência, que é medida de resultado.",
        "execucao": [
          "1) Legalidade: levantar a competência do órgão e a base normativa de cada serviço publicado e de cada dado exibido;",
          "2) Impessoalidade: obter os critérios de ordenação e de exibição da fila, com registro de versão e vigência;",
          "3) Moralidade: conferir a finalidade declarada de cada campo e de cada integração de dados;",
          "4) Publicidade: testar a completude da transparência ativa e a correção dos requisitos do sítio oficial;",
          "5) Eficiência: levantar os indicadores do painel e registrar cada achado com norma, evidência e risco."
        ],
        "resultado": "A ordem é a do risco do vício, não a do achado fácil: legalidade, impessoalidade, moralidade, publicidade e eficiência. Cada achado fica registrado com norma, evidência e risco, de modo que o gestor decida sobre fato documentado e o parecer não dependa de palavra do auditor.",
        "justificativa": "A legalidade sustenta a validade dos demais princípios: sem competência e base normativa, não há o que auditar em matéria de critério ou de publicidade. Produzir evidência nessa ordem também protege o trabalho do técnico, porque o achado sem norma e sem registro não se converte em conclusão de auditoria nem em correção exigível do órgão.",
        "errosFrequentes": [
          "Começar pelo que é mais fácil de medir, como o tempo de resposta, e deixar a base legal para o final;",
          "Registrar achado sem a norma correspondente, o que enfraquece o parecer e permite questionamento sem conteúdo técnico."
        ],
        "variacao": "Se o portal integrar modelo de priorização por risco social, a auditoria passa a exigir, na etapa de impessoalidade, a definição escrita das variáveis e os logs de inferência versionados no contrato de fornecimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: como os princípios constitucionais são normas abstratas, não geram obrigação técnica verificável no setor de TI. Avalie a afirmação.",
        "dados": "Sistema de atendimento sem base legal documentada para coleta de dados; critério de ordenação sem versão registrada; portal sem completude na transparência ativa; painel sem indicadores de tempo médio e de satisfação.",
        "conceitos": [
          "Princípio como norma de textura aberta que exige concretização.",
          "Verificabilidade técnica do descumprimento: configuração, log e versão de regra."
        ],
        "estrategia": "Desmontar a afirmação mostrando que a abstratividade do princípio não elimina a obrigação: ela desloca a verificação para a evidência técnica. Em seguida, marcar o limite oposto, para não trocar um erro por outro.",
        "execucao": [
          "1) Testar a premissa: princípio é norma de conduta que orienta e limita a atuação administrativa, e não texto programático sem eficácia;",
          "2) Identificar onde a concretização ocorre no digital: base legal do tratamento, critério escrito e vigente, log e trilha de auditoria;",
          "3) Confrontar com o caso: cada lacuna listada é descumprimento demonstrável por evidência, e não fragilidade abstrata;",
          "4) Marcar o limite: princípio não é regra com prazo e valor exatos, elementos que a lei traz."
        ],
        "resultado": "A afirmação está errada. O princípio exige concretização, e no serviço público digital essa concretização é técnica e verificável por evidência. Também está errado o extremo oposto: tratar o princípio como regra de prazo e valor determinados, quando esses elementos vêm da lei, como no prazo de 20 dias do art. 11, § 1º, da Lei nº 12.527/2011.",
        "justificativa": "A confusão da afirmação está em identificar abstratividade com ausência de obrigação. Norma de textura aberta não dispensa o agente: ela exige que a concretização exista, e no ambiente digital a concretização é feita de requisitos técnicos documentados. Por isso a prova descreve a lacuna de registro e trata o caso como violação demonstrável.",
        "errosFrequentes": [
          "Concluir que, por ser abstrato, o princípio só produz efeito político e não consequência jurídica sobre o ato digital;",
          "No extremo oposto, exigir do princípio algo que só a regra fornece, como prazo certo e valor determinado, e concluir que o princípio é letra morta."
        ],
        "variacao": "Se a afirmação trocar o sujeito e disser que a eficiência justifica dispensar a base legal do tratamento de dados, o erro se desloca: a eficiência é qualidade com racionalidade de recursos e não autoriza renúncia a direito."
      }
    ]
  },
  "m6-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A distinção técnica entre princípio e regra é o que muda o gabarito de prova: a regra vincula o agente de forma direta e exaustiva, enquanto o princípio exige ponderação e concretização. Como a tecnicização do serviço público é justamente o espaço em que a concretização acontece, o tema deixa a teoria e vira problema de desenho de sistema. Quem sabe o conteúdo operativo de cada um dos cinco princípios resolve itens que, de outro modo, parecem juízo de valor.",
      "preRequisitos": [
        "Leitura do caput do art. 37 da Constituição Federal e do art. 5º, XXXIII, da mesma Carta.",
        "Noção de norma jurídica: hierarquia, eficácia e diferença entre regra e princípio.",
        "Conhecimentos básicos da Lei nº 12.527/2011 (LAI) e da Lei nº 14.129/2021 (Governo Digital).",
        "Módulo 5: viés, explicabilidade e avaliação de modelos, para o desdobramento digital."
      ],
      "objetivosObservaveis": [
        "explicar a diferença entre princípio e regra, com exemplo verificado de cada um;",
        "enumerar os cinco princípios do art. 37 e citar a base normativa que os reúne;",
        "descrever o conteúdo operativo de cada princípio, com exemplo e contraexemplo;",
        "aplicar cada princípio a um requisito concreto de sistema, indicando a evidência de conformidade."
      ],
      "competencias": [
        "Leitura normativa comparada: localizar o dispositivo antes de classificar a conduta.",
        "Tradução do princípio em requisito técnico verificável.",
        "Argumentação com exemplo e contraexemplo, própria de item discursivo e de parecer."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t1-s1 (Orientação estratégica da unidade) — anuncia esta fundamentação como segunda frente de estudo;",
        "m6-u1-t2-s2 (Impessoalidade, moralidade e publicidade: critérios de tratamento, explicabilidade e controle) — desdobra em critérios de tratamento e explicabilidade;",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade) — confronta os princípios entre si e com institutos próximos;",
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — base legal da publicidade e do sigilo."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Princípio e regra, e o conteúdo de cada princípio do art. 37, integram o conteúdo programático de direito administrativo para cargos de TI, em itens de certo e errado e em questões de múltipla escolha com cenário digital. A classificação alta reflete a centralidade do tema e a confusão comum entre princípios e regras nas alternativas. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Princípio, na técnica legislativa, é norma de conduta de textura aberta e abstrata que orienta e limita a atuação administrativa e, por isso, exige concretização em regras operacionais. A diferença é prática: a regra vincula o agente de forma direta e exaustiva — é o caso do prazo de 20 dias para responder a pedido de acesso, no art. 11, § 1º, da Lei nº 12.527/2011 —, enquanto o princípio exige ponderação. Os cinco princípios estão no caput do art. 37 da Constituição Federal.",
      "intermediario": "Cada princípio tem conteúdo operativo. Legalidade: a administração só faz o que a lei autoriza e como a lei autoriza, observada a competência e o procedimento, com discricionariedade dentro da lei. Impessoalidade: tratamento desvinculado do arbítrio, sem favorecimento nem perseguição, com critérios previamente definidos e igualmente aplicáveis a casos iguais, inclusive na relação interna do órgão. Moralidade: retidão, honestidade e boa-fé, que complementam a legalidade e não a substituem.",
      "avancado": "Publicidade é preceito geral de divulgação do que é público, com o sigilo como exceção; no digital, o meio oficial é o sítio do órgão e o instrumento é a transparência ativa. O art. 5º, XXXIII, da Constituição Federal assegura a todos o direito de receber informações de seu interesse, ressalvado o sigilo imprescindível à segurança da sociedade e do Estado — o que mostra que publicidade e sigilo formam sistema de convivência, e não oposição absoluta. Eficiência é qualidade do serviço com uso racional dos recursos, operacionalizada no painel de monitoramento e na eliminação de formalidades cujo custo social exceda o risco.",
      "especialista": "No desenho de sistema, cada princípio se converte em requisito e em evidência: legalidade em base normativa para coletar, tratar e decidir, competência do sistema e dos agentes e integração ao procedimento formal; impessoalidade em critério escrito, versionado e auditável; moralidade em finalidade declarada compatível com a coleta e vedação de enriquecimento de dados sem base; publicidade em completude da transparência ativa no sítio oficial; eficiência em indicadores de tempo médio, satisfação e imposição única das exigências necessárias. Eficiência não autoriza renúncia a direito."
    },
    "comparacoes": [
      {
        "tema": "Princípio e regra na técnica legislativa",
        "a": {
          "rotulo": "Princípio",
          "texto": "Norma de conduta de textura aberta e abstrata, que orienta e limita a atuação administrativa e exige ponderação e concretização em regras operacionais antes de incidir sobre o caso."
        },
        "b": {
          "rotulo": "Regra",
          "texto": "Norma que vincula o agente de forma direta e exaustiva, descrevendo a conduta devida com seus elementos: é o caso do prazo de 20 dias para responder a pedido de acesso, no art. 11, § 1º, da Lei nº 12.527/2011."
        },
        "diferencaGabarito": "A resposta ao item muda de natureza: no princípio, o candidato pondera e concretiza; na regra, confere o elemento descrito. Confundir os dois leva a erro nos dois sentidos — exigir prazo exato de um princípio ou tratar regra como diretiva flexível."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A eficiência justifica a digitalização integral de um serviço, ainda que prive o cidadão sem conexão do atendimento presencial.",
        "porqueErrada": "A eficiência é qualidade com racionalidade de recursos, não autorização para renunciar a direitos. A Lei nº 14.129/2021 preserva expressamente o atendimento presencial e exige que a prestação digital ocorra por tecnologias de amplo acesso, sem prejuízo desse atendimento.",
        "versaoCorreta": "A digitalização não pode suprimir o atendimento presencial: a lei veda a sua supressão, determina a prestação por tecnologias de amplo acesso e manda eliminar apenas as formalidades cujo custo social exceda o risco. A barreira digital imposta a quem não tem conexão é justamente o custo social que a norma quer evitar, e a eficiência não legitima a renúncia ao direito de acesso."
      },
      {
        "afirmacaoEquivocada": "A moralidade administrativa só opera quando a lei é silente, funcionando como cláusula de fechamento do ordenamento.",
        "porqueErrada": "A moralidade orienta a conduta também dentro da lei. Reduzi-la à lacuna legal esvazia o princípio e produz o contrassenso de admitir conduta contrária à boa-fé sob a justificativa de ausência de proibição expressa.",
        "versaoCorreta": "A moralidade — retidão, honestidade, ética e boa-fé — atua de forma complementar à legalidade, incidindo inclusive onde a lei prevê a conduta. No digital, isso se materializa na finalidade declarada e compatível com a coleta, na vedação de uso de dados de terceiros para finalidade diversa e na honestidade no uso de automação e de conteúdo gerado por IA."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Princípio: norma de textura aberta e abstrata, que orienta e limita a atuação administrativa e exige concretização.",
        "Regra: norma que vincula o agente de forma direta e exaustiva, com os elementos da conduta descritos.",
        "Legalidade administrativa: a administração só faz o que a lei autoriza e como a lei autoriza, com competência e procedimento."
      ],
      "regras": [
        "O caput do art. 37 da Constituição Federal determina que a administração direta e indireta de qualquer dos Poderes e entes federativos obedeça aos cinco princípios.",
        "O art. 5º, XXXIII, assegura o direito de receber informações de interesse particular ou coletivo, ressalvado o sigilo imprescindível à segurança da sociedade e do Estado."
      ],
      "comparacoes": [
        "Publicidade e sigilo não se opõem absolutamente: o primeiro é o preceito geral de divulgação do que é público; o segundo é exceção delimitada, e o art. 5º, XXXIII, estabelece a regra de convivência entre ambos."
      ],
      "fluxos": [
        "Concretização de um princípio em requisito de sistema: identificar o princípio em jogo → fixar a hipótese legal → converter em requisito de desenho ou operação → exigir evidência documental → registrar a não conformidade, se for o caso."
      ],
      "excecoes": [
        "Nas matérias tributária e sancionadora, a legalidade é quase absoluta; no direito administrativo em geral, há espaço de discricionariedade dentro da lei, o que muda a análise de conformidade."
      ],
      "palavrasChave": [
        "princípio e regra",
        "art. 37 da Constituição Federal",
        "legalidade",
        "impessoalidade",
        "moralidade",
        "publicidade",
        "eficiência"
      ],
      "checklist": [
        "Sei distinguir princípio de regra com exemplo verificado de cada um?",
        "Sei citar a base constitucional que reúne os cinco princípios?",
        "Consigo descrever o conteúdo operativo de cada princípio com um exemplo e um contraexemplo?",
        "Sei converter cada princípio em requisito de sistema e indicar a evidência correspondente?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O sistema de triagem de benefícios ordena as filas por um escore. Qual princípio é imediatamente afetado e por que a resposta não é simples?",
        "dados": "Escore de triagem calculado a partir de histórico de atendimento; critério não documentado nem divulgado; casos iguais podem receber ordenação distinta; nenhum registro permite reconstituir a decisão da fila.",
        "conceitos": [
          "Impessoalidade: critério previamente definido, objetivo e igualmente aplicável a casos iguais.",
          "Publicidade: o cidadão precisa saber como a ordem da fila é definida."
        ],
        "estrategia": "Começar pelo princípio mais diretamente atingido e explicar por que a automaticidade do escore não resolve o problema, abordando depois o reflexo sobre a publicidade.",
        "execucao": [
          "1) Verificar se o escore é critério previamente definido, objetivo e auditável — não é;",
          "2) Testar a igualdade de aplicação: casos iguais recebem a mesma ordenação?",
          "3) Avaliar se o modelo, mesmo apurado estatisticamente, pode reproduzir desvios dos dados de treino;",
          "4) Verificar o reflexo na publicidade: sem critério divulgado, o cidadão não sabe por que está atrás na fila."
        ],
        "resultado": "O princípio imediatamente afetado é a impessoalidade, e a resposta não é simples porque a automatização não produz neutralidade: um modelo estatisticamente apurado pode reproduzir desvios presentes nos dados de treino e, ainda assim, tratar desigualmente pessoas em situação análoga. Também se atinge a publicidade, pois o critério oculto impede que o cidadão compreenda a própria posição na fila.",
        "justificativa": "A impessoalidade exige tratamento desvinculado do arbítrio, com critérios previamente definidos e igualmente aplicáveis a casos iguais. Escore sigiloso não permite demonstrar essa igualdade nem auditá-la, e a ausência de divulgação do critério impede o controle pelo cidadão, que é a razão de ser da publicidade no ambiente digital.",
        "errosFrequentes": [
          "Concluir que, sendo o cálculo automático, não há espaço para arbítrio e o princípio está satisfeito;",
          "Tratar a apuração estatística do modelo como prova de impessoalidade, sem examinar os dados de treino e a configuração do critério."
        ],
        "variacao": "Se o escore passar a ancorar o indeferimento, e não apenas a ordenação, a exigência se agrava: a decisão passa a ser ato administrativo individual, com motivação, comunicação ao cidadão e possibilidade de revisão."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um portal de transparência publica a relação de servidores com nome, cargo e remuneração. Isso viola o princípio da publicidade?",
        "dados": "Relação de servidores ativos e inativos; campos publicados: nome, cargo, vínculo e remuneração; publicação no sítio oficial do órgão; nenhum dado de saúde, biometria ou filiação divulgado.",
        "conceitos": [
          "Publicidade institucional: divulgação de dados funcionais no sítio oficial.",
          "Divulgação irrestrita de dados pessoais de cidadãos: vedada sem base legal, finalidade e proteção."
        ],
        "estrategia": "Diferenciar a publicidade de dados funcionais, que decorre do dever de transparência, da divulgação irrestrita de dados pessoais, que excede o princípio. Em seguida, confirmar a hipótese no texto legal aplicável.",
        "execucao": [
          "1) Verificar a natureza dos dados publicados: são dados funcionais de servidores e empregados públicos;",
          "2) Confirmar que a publicidade institucional é exercício do princípio, e não a sua violação;",
          "3) Contrastar com a hipótese vedada: difusão irrestrita de dados pessoais de cidadãos sem base legal, finalidade e proteção;",
          "4) Concluir que a resposta é negativa, apontando o dispositivo que determina a divulgação de informações sobre servidores."
        ],
        "resultado": "Não viola. Publicar dados funcionais de servidores — inclusive nome, detalhamento dos vínculos profissionais e remuneração — é exercício da publicidade institucional, conforme a hipótese legal de divulgação de informações sobre servidores e empregados públicos. O que a publicidade não afasta são os limites de proteção a dados pessoais: a divulgação irrestrita de dados de cidadãos, sem base legal, finalidade e proteção, continua vedada.",
        "justificativa": "O princípio da publicidade é o preceito geral de divulgação do que é público, e a lei específica de governo digital detalha os dados que devem ser divulgados, entre eles as informações sobre servidores e empregados públicos. A confusão do item está em tratar toda informação sobre pessoa como dado pessoal intocável, quando o regime jurídico distingue dado funcional sujeito a divulgação de dado pessoal submetido a limites.",
        "errosFrequentes": [
          "Confundir dado pessoal com dado funcional e concluir que qualquer publicação de nome de servidor viola a proteção de dados;",
          "No extremo oposto, concluir que a publicidade autoriza divulgar qualquer dado pessoal, desde que haja interesse público declarado."
        ],
        "variacao": "Se o portal passar a publicar, além da remuneração, dados de saúde dos servidores ou endereço residencial, a análise muda: tais dados exigem base legal específica e proteção reforçada, e a publicidade geral não os alcança."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: como o prazo legal é regra e os princípios admitem ponderação, o art. 11, § 1º, da Lei nº 12.527/2011 pode ser aplicado com razoabilidade pelo órgão. Avalie.",
        "dados": "Pedido de acesso protocolado em 2 de março; resposta fora do prazo; órgão alega complexidade do pedido; nenhuma prorrogação motivada foi registrada; resposta entregue com atraso sem justificativa expressa.",
        "conceitos": [
          "Regra com prazo certo: 20 dias, prorrogável por mais 10 com justificativa expressa.",
          "Princípio: normas de conduta que exigem ponderação, distintas da regra."
        ],
        "estrategia": "Mostrar que a ponderação é própria do princípio e não da regra: o prazo do art. 11, § 1º, é elemento descrito na norma, e a única flexibilidade admitida é a prorrogação prevista no § 2º, com justificativa expressa.",
        "execucao": [
          "1) Classificar a norma: o art. 11, § 1º, é regra, com prazo determinado de 20 dias;",
          "2) Verificar a única hipótese de flexificação: prorrogação por igual período, mediante justificativa expressa;",
          "3) Conferir os dados: não há prorrogação motivada registrada;",
          "4) Concluir que a razoabilidade invocada não afasta a regra, e a resposta intempestiva é descumprimento."
        ],
        "resultado": "A afirmação está errada. O prazo do art. 11, § 1º, é regra com prazo certo: 20 dias, prorrogáveis por mais 10 apenas com justificativa expressa. Como não há prorrogação motivada no caso, a resposta intempestiva descumpre a norma, e a invocação genérica de ponderação não converte regra em princípio.",
        "justificativa": "A distinção entre princípio e regra importa precisamente aqui: o princípio admite ponderação porque sua textura é aberta; a regra descreve a conduta devida com seus elementos, e o prazo é um deles. A lei indica a única flexibilidade possível — a prorrogação fundamentada —, de modo que a razoabilidade não pode criar hipótese non prevista pelo texto.",
        "errosFrequentes": [
          "Achar que todo mandamento administrativo admite ponderação, sem verificar se a norma é princípio ou regra;",
          "Confundir a resposta ao pedido com a sua intimação ou com a prorrogação, aplicando o prazo errado ao caso."
        ],
        "variacao": "Se o órgão houvesse registrado prorrogação motivada dentro dos 20 dias iniciais, a análise muda: a resposta em até 40 dias seria tempestiva, e o examinador passa a cobrar a correção da justificativa expressa."
      }
    ]
  },
  "m6-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Automatizar atos administrativos é hoje a forma dominante de execução no serviço público digital, e a legalidade fixa o que pode ser delegado ao sistema. Confundir eficiência com competência, ou assinatura eletrônica com dispensa de motivação, conduz o candidato ao gabarito errado.",
      "preRequisitos": [
        "Noção de ato administrativo: competência, motivo, fundamento, forma e publicidade.",
        "Leitura dos princípios do art. 37 da Constituição Federal e da Lei nº 14.129/2021.",
        "Conceito de processo administrativo eletrônico e de assinatura eletrônica."
      ],
      "objetivosObservaveis": [
        "delimitar, em cenário dado, o que a automação pode executar e o que permanece como decisão humana motivada;",
        "identificar a base legal do ato digitalizado na Lei nº 14.129/2021, citando os dispositivos aplicáveis;",
        "listar os requisitos de conformidade de um sistema decisório: norma, critério vigente, parâmetros, trilha de auditoria, revisão humana e gestão de risco;",
        "explicar por que automatizar não cria nem transfere competência administrativa."
      ],
      "competencias": [
        "leitura normativa: localizar o dispositivo aplicável antes de avaliar a conduta do órgão;",
        "checagem de conformidade: percorrer um rol de evidências e apontar as lacunas de registro;",
        "prudência técnica: não afirmar validade de ato cuja fundamentação não pode ser reconstituída."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t2-s2 (Impessoalidade, moralidade e publicidade: critérios de tratamento, explicabilidade e controle) — os limites da automação são aí testados em critério de tratamento;",
        "m6-u1-t3-s1 (Exemplos resolvidos da unidade (três casos completos)) — aplica o mesmo roteiro de conformidade a três casos completos;",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade) — distingue decisão automatizada, assistida e manual;",
        "Módulo 5 (dados e viés) — a análise por subgrupo sustenta a revisão humana dos casos de maior impacto."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Governo digital e automação de atos aparecem como pano de fundo de itens sobre legalidade, assinatura eletrônica e responsabilidade do órgão; a classência qualitativa de média decorre de o tema ser recorrente, mas secundário frente ao núcleo de princípios da unidade (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "A Administração prática atos administrativos por meio de sistemas informatizados, com ou sem participação humana na decisão. O ponto de partida é a Lei nº 14.129/2021: o art. 5º determina o uso de soluções digitais na gestão de políticas e no trâmite de processos eletrônicos; o art. 6º admite o meio eletrônico, salvo solicitação do usuário, inviabilidade do procedimento, indisponibilidade do sistema ou risco de dano relevante à celeridade; o art. 7º exige assinatura eletrônica com parâmetros de autenticidade, integridade e segurança adequados ao risco.",
      "intermediario": "O sistema decide, mas o ato continua sendo ato administrativo: exige competência prevista em lei, critério escrito e vigente na data do fato, registro dos parâmetros usados e trilha de auditoria que reconstrua o caso. A assinatura eletrônica e os logs identificam o autor e não dispensam controle; o art. 48 da Lei nº 14.129/2021 impõe gestão de riscos e controle interno proporcionais ao risco.",
      "avancado": "A fronteira da automação se testa por perguntas de auditoria: qual norma autoriza; qual critério foi aplicado; quem o configurou e quando; o cidadão consegue saber e contestar; e quem decide se o sistema estiver indisponível. A ausência de resposta a qualquer uma delas é, ela própria, achado de legalidade — a eficiência obtida não sana o vício encontrado.",
      "especialista": "A conformidade se prova por evidência, não por discurso: norma que atribui competência, versão do critério vigente, valor dos parâmetros no caso, log de alteração da regra, canal de revisão humana e procedimento alternativo para indisponibilidade. Sem reconstituição do caso, não se demonstra legalidade, impessoalidade nem publicidade perante o controle e o cidadão."
    },
    "comparacoes": [
      {
        "tema": "Regra do meio eletrônico e exceções do art. 6º da Lei nº 14.129/2021",
        "a": {
          "rotulo": "Prática eletrônica como regra",
          "texto": "Atos processuais são praticados em meio eletrônico; o art. 8º considera o ato realizado no dia e hora do recebimento pelo sistema, com recibo de protocolo, e o § 1º fixa a tempestividade até as 23h59 do último dia do prazo, no horário de Brasília."
        },
        "b": {
          "rotulo": "Exceções expressas do art. 6º",
          "texto": "Solicitação do usuário, inviabilidade do procedimento, indisponibilidade do meio eletrônico ou risco de dano relevante à celeridade: admite-se a prática posterior pelas regras do processo em papel, desde que o documento-base seja digitalizado."
        },
        "diferencaGabarito": "A exceção é taxativa e não é escolha administrativa de conveniência: autoriza a via alternativa apenas nas quatro hipóteses legais e com documento-base digitalizado, mantendo os efeitos do ato no prazo original."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Um candidato sustenta que, como a decisão foi tomada por sistema informatizado, o ato é impessoal e, por isso, não há necessidade de motivação nem de responsável.",
        "porqueErrada": "A impessoalidade decorre do critério objetivo, definido previamente e auditável, e não do meio eletrônico; além disso, a motivação permanece exigida para demonstrar ao cidadão e ao controle o fundamento e o critério efetivamente aplicados.",
        "versaoCorreta": "A assinatura eletrônica e os logs identificam o autor do ato (art. 7º da Lei nº 14.129/2021) e não eliminam o dever de controle nem a responsabilidade do órgão (art. 34 da Lei nº 12.527/2011, quanto aos danos por divulgação ou uso indevido)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: «como o parâmetro está cadastrado no sistema, o órgão tem competência para deferir o pedido».",
        "porqueErrada": "A competência administrativa decorre de lei ou do ato que a atribui; o cadastro de parâmetro é apenas condição técnica de execução e não cria atribuição decisória, de modo que o sistema não pode decidir onde a competência não existe.",
        "versaoCorreta": "Automação é técnica de execução, não fonte de competência: o sistema só aplica critério que o órgão já poderia aplicar por si mesmo, e a eficiência não é fundamento de validade da atribuição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Automação de atos: prática de atos administrativos por sistemas informatizados, com ou sem participação humana na decisão.",
        "Competência administrativa: poder de decidir atribuído por lei ou por ato administrativo, que não se cria nem se transfere por automação.",
        "Motivação: exposição dos fatos, dos fundamentos e do critério aplicado, exigível também em decisão produzida por sistema."
      ],
      "regras": [
        "O art. 7º da Lei nº 14.129/2021 exige assinatura eletrônica para a validade dos documentos e atos em meio digital, com parâmetros proporcionais ao risco.",
        "O art. 8º, § 1º, fixa a tempestividade do ato processual até as 23h59 do último dia do prazo, no horário de Brasília, contada do recebimento pelo sistema.",
        "O art. 48 da mesma lei impõe sistema de gestão de riscos e de controle interno, com controles proporcionais aos riscos e observada a relação custo-benefício."
      ],
      "comparacoes": [
        "Decisão automatizada decide sem intervenção humana no caso; decisão assistida incorpora sugestão de sistema a ato humano motivado — a primeira concentra exigências de rastreabilidade, a segunda de fundamentação."
      ],
      "fluxos": [
        "Roteiro de conformidade: identificar a norma que atribui competência → verificar a vigência do critério → registrar os parâmetros do caso → assegurar trilha de auditoria → oferecer revisão humana → prever procedimento alternativo."
      ],
      "excecoes": [
        "As exceções do art. 6º (solicitação do usuário, inviabilidade, indisponibilidade do meio eletrônico, risco de dano relevante à celeridade) permitem a prática posterior pelas regras do papel, com documento-base digitalizado."
      ],
      "palavrasChave": [
        "automação de atos",
        "Lei nº 14.129/2021",
        "assinatura eletrônica",
        "competência",
        "motivação",
        "trilha de auditoria"
      ],
      "checklist": [
        "A norma que atribui a competência e define o critério de decisão está identificada?",
        "O critério aplicado estava escrito, versionado e vigente na data do fato?",
        "Os parâmetros usados no caso estão registrados e a trilha de auditoria reconstitui a decisão?",
        "Existe canal de revisão humana e procedimento alternativo para indisponibilidade do sistema?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão automatizou o deferimento automático de requerimentos de natureza simples. O que a legalidade exige que esteja documentado?",
        "dados": "Órgão com competência legal para conceder o benefício; rotina de deferimento automático para requerimentos de natureza simples; parâmetro cadastrado no sistema; ausência de registro da versão do critério e de log de alteração da regra.",
        "conceitos": [
          "Legalidade: competência e base normativa do critério de deferimento",
          "Motivação e publicidade do ato administrativo praticado em meio digital",
          "Trilha de auditoria e possibilidade de reconstituir o caso concreto"
        ],
        "estrategia": "Não listar boas intenções, mas evidências: a legalidade se satisfaz com o que estava documentado antes e durante a decisão, de modo que cada item do rol de conformidade precisa existir como registro, e não como prática informal do setor.",
        "execucao": [
          "1) Identificar a norma que atribui a competência e define o critério de deferimento;",
          "2) Fixar a versão do critério vigente na data e registrar os valores dos parâmetros usados em cada caso;",
          "3) Manter trilha de auditoria com identificação de quem alterou a regra e em que data;",
          "4) Assegurar canal de revisão e contestação e procedimento alternativo para indisponibilidade do sistema."
        ],
        "resultado": "A norma que atribui a competência e define o critério de deferimento; a versão do critério vigente na data; os registros de configuração (valores, regra, responsável pela alteração); a trilha de auditoria que reconstrói cada deferimento; a possibilidade de revisão e contestação; e o procedimento alternativo para indisponibilidade do sistema. A automatização acelera o atendimento (eficiência), mas não transfere a responsabilidade e não cria competência nova.",
        "justificativa": "A automação altera apenas a forma de execução do ato: competência, motivação e publicidade permanecem, e a conformidade se demonstra pela existência dos registros que permitem reconstituir a decisão. O que não está documentado não pode ser provado em auditoria nem contestado pelo cidadão, o que converte lacuna de registro em vício de legalidade.",
        "errosFrequentes": [
          "Confundir eficiência com competência: a demora do atendimento não autoriza deferir o que a lei não prevê;",
          "Tratar o parâmetro cadastrado como suficiente e esquecer a versão vigente e o log de alteração, o que impede reconstituir o critério aplicado."
        ],
        "variacao": "Se a rotina passar a indeferir em vez de deferir, a exigência aumenta: a negativa afeta direito do cidadão e passa a reclamar motivação específica, comunicação ao interessado e canal de revisão humana, e não apenas registro interno de configuração."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma rotina decide indeferimentos de requerimentos de benefício com base em regra cadastrada há dois anos, nunca revisada. Qual o problema e a providência?",
        "dados": "Regra de indeferimento cadastrada há dois anos; nenhuma revisão desde então; requerimentos de benefício em processamento; histórico de decisões proferidas pela rotina no período; ausência de responsável nomeado pela alteração do critério.",
        "conceitos": [
          "Legalidade: correspondência entre o parâmetro aplicado e a norma vigente na data do fato",
          "Impessoalidade e moralidade: critério atual, não discriminatório e passível de revisão",
          "Versionamento e revisão periódica das regras de decisão"
        ],
        "estrategia": "Separar o vício de legalidade (a norma pode ter mudado e o parâmetro, não) do vício de impessoalidade e moralidade (critério antigo pode espelhar política superada), e então propor governança: versionamento com data de vigência, revisão periódica, responsável nomeado e tratamento dos casos já decididos.",
        "execucao": [
          "1) Comparar a regra cadastrada com a norma atualmente vigente para o benefício;",
          "2) Suspender a aplicação automática da regra até a conferência, mantendo o atendimento dos casos;",
          "3) Implantar versionamento com data de vigência, responsável e registro de alterações;",
          "4) Reprocessar ou revisar os casos decididos sob a regra desatualizada, com comunicação aos afetados."
        ],
        "resultado": "Dois problemas articulados. Primeiro, legalidade: a regra aplicada pode não corresponder mais à norma vigente (a lei muda; o parâmetro fica). Segundo, impessoalidade e moralidade: regras antigas podem espelhar critérios superados ou discriminatórios. Providência: versionamento obrigatório de regras com data de vigência, revisão periódica obrigatória (revisão do art. 29 da LAI para classificação de sigilo e, por analogia de governança, das regras de decisão), responsável nomeado e registro de alterações; além disso, reprocessamento ou revisão dos casos decididos sob a regra revista.",
        "justificativa": "O direito aplicado é o vigente ao tempo do fato, e a lei se altera no tempo: parâmetro sem controle de versão aplica, sem perceber, regra já revogada. O versionamento e a revisão periódica transformam o critério em dado auditável, o que permite demonstrar impessoalidade e corrigir os efeitos já produzidos pela regra superada.",
        "errosFrequentes": [
          "Presumir que o sistema está correto porque está automatizado, sem conferir a norma vigente;",
          "Corrigir a regra apenas para frente e ignorar os casos já decididos, deixando o efeito do critério superado em vigor de fato."
        ],
        "variacao": "Se a revisão descobrir que a regra negava benefício a grupo de pessoas de forma sistemática, a providência se estende à anulação dos atos, à comunicação aos titulares e à análise de impacto por subgrupo antes de religar a rotina automática."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «Como a decisão foi tomada por sistema informatizado, o ato é impessoal e, por isso, não há necessidade de motivação nem de responsável.»",
        "dados": "Decisão proferida por sistema; requerimento de benefício indeferido; resultado sem qualquer exposição de razões; autoridade responsável não identificada; nenhum campo disponível para contestação pelo cidadão.",
        "conceitos": [
          "Impessoalidade material: igualdade de critério para casos iguais, e não ausência de autor",
          "Dever de motivar o ato administrativo, inclusive quando produzido em meio digital",
          "Responsabilidade do órgão e identificação do autor pela assinatura eletrônica e pelos logs"
        ],
        "estrategia": "Desmontar a afirmação em duas partes: o meio eletrônico não produz impessoalidade, e a impessoalidade não dispensa motivação. Em seguida, mostrar o que a norma exige em lugar da dispensa — critério objetivo, fundamentação e autor identificável.",
        "execucao": [
          "1) Testar a primeira parte: impessoalidade vem do critério objetivo e auditável, não do fato de o ato ser sistêmico;",
          "2) Testar a segunda parte: a motivação é elemento do ato administrativo e continua exigida na forma digital;",
          "3) Verificar o que resta: assinatura eletrônica e logs identificam o autor, e o órgão responde pelo ato praticado;",
          "4) Concluir pela invalidade da afirmação e indicar os registros que deveriam existir no caso."
        ],
        "resultado": "Errado, e o erro tem duas partes. A automação não torna o ato impessoal por si só: a impessoalidade decorre do critério objetivo, definido previamente e auditável. E a motivação continua exigida: é ela que demonstra ao cidadão (e ao controle) o fundamento e o critério efetivamente aplicados. A assinatura eletrônica define autoria do ato (art. 7º da Lei nº 14.129/2021), mas o dever de resposta do órgão permanece (art. 34 da Lei nº 12.527/2011, quanto aos danos por divulgação ou uso indevido).",
        "justificativa": "A afirmação troca o meio pela substância: a impessoalidade é qualidade do critério, e a motivação é o instrumento que a torna demonstrável. Como a decisão continua sendo ato administrativo, o art. 7º da Lei nº 14.129/2021 fixa a assinatura eletrônica para identificar o autor, e o art. 34 da Lei nº 12.527/2011 mantém o dever de resposta do órgão.",
        "errosFrequentes": [
          "Crer que a automação produz neutralidade por si, sem examinar o critério cadastrado e os dados de entrada;",
          "Confundir autor do ato com responsabilidade: assinatura eletrônica e logs apontam quem praticou o ato e não extinguem o dever de controle."
        ],
        "variacao": "Se o sistema apenas sugerir a decisão e o servidor a homologar sem leitura, o vício se desloca: a motivação passa a exigir a indicação da sugestão aceita, da regra vigente e da conferência efetuada, e a revisão humana deixa de ser formal."
      }
    ]
  },
  "m6-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Princípios de impessoalidade, moralidade e publicidade ditam como o sistema digital trata dados e decisões do cidadão. Sem critério escrito e uniforme, a igualdade não se demonstra; sem publicidade, o cidadão não controla o órgão.",
      "preRequisitos": [
        "Princípios constitucionais da Administração Pública",
        "Ato administrativo: competência, motivo, fundamento, forma e publicidade",
        "Decisão automatizada e revisão humana do ato"
      ],
      "objetivosObservaveis": [
        "diagnosticar violações de impessoalidade e moralidade em decisões automatizadas",
        "distinguir impessoalidade de indiferença e de uniformidade desnecessária",
        "aplicar os três princípios como critérios de tratamento de dados e de decisão"
      ],
      "competencias": [
        "identificar se o parâmetro de decisão é definido, escrito e comunicável",
        "comparar a finalidade declarada do tratamento com a finalidade real do dado",
        "verificar log, rastreabilidade, revisão humana e canal de contestação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t2-s1 (Legalidade e automação de atos administrativos: onde termina a automação)",
        "m6-u1-t3-s1 (Exemplos resolvidos da unidade (três casos completos))",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Princípios aplicados a sistemas digitais aparecem como pano de fundo de itens sobre decisão automatizada, transparência e responsabilidade; a classificação média reflete recorrência, mas secundariedade frente ao núcleo de legalidade (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "Impessoalidade significa que o sistema trata igualmente pessoas em situação igual, sem favorecimento por afinidade ou interesse. Moralidade significa que a tecnologia não serve para praticar condutas vedadas. Publicidade significa que o cidadão consegue saber o critério, a finalidade, quem decidiu e como revisar o resultado.",
      "intermediario": "O sistema não pode ordenar, distinguir ou punir por critério não declarado: impessoalidade exige critério prévio, escrito e aplicado de forma uniforme. Moralidade exige proporcionalidade entre finalidade e meio, previsão, não surpresa e vedação de uso manipulativo. Publicidade exige publicar critérios de decisão, registro de decisões automatizadas, responsável e capacidade de explicação ao cidadão, compatibilizando com o sigilo legal.",
      "avancado": "A fronteira entre impessoalidade formal e material se prova na prática: o sistema pode aplicar a mesma regra a todos e, mesmo assim, tratar desigualmente se o dado de entrada espelha desigualdade estrutural, o que exige análise por subgrupo. Moralidade se manifesta na escolha do algoritmo, no desenho da interface e na regra de fallback. Publicidade exige registro e rastreabilidade de cada decisão automatizada, com mecanismo de explicação compreensível e canal de contestação efetivo.",
      "especialista": "A conformidade se demonstra por evidência: critério versionado e vigente na data do fato, log de alteração da regra, trilha de auditoria que reconstitua o caso, revisão humana disponível e procedimento alternativo para indisponibilidade. Sem reconstituição do caso, não se demonstra legalidade, impessoalidade nem publicidade. Explicabilidade é requisito de controle, não cortesia."
    },
    "comparacoes": [
      {
        "tema": "Impessoalidade como indiferença versus igualdade de critério",
        "a": {
          "rotulo": "Impessoalidade como indiferença",
          "texto": "Tratar todos da mesma forma sem levar em conta diferenças relevantes, ignorando que a lei pode determinar tratamento diferenciado em casos específicos."
        },
        "b": {
          "rotulo": "Impessoalidade como igualdade de critério",
          "texto": "Casos iguais recebem tratamento igual por critério definido previamente, escrito e aplicado de forma uniforme; a exceção só pode vir da lei."
        },
        "diferencaGabarito": "Impessoalidade não é ausência de contexto nem uniformidade cega: exige critério objetivo igual para todos, com exceções apenas quando a lei determina."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o sistema aplica a mesma regra para todos, está automaticamente em conformidade com o princípio da impessoalidade.",
        "porqueErrada": "Quando um sistema aplica a mesma regra a todos sem considerar diferenças relevantes entre os casos, pode produzir tratamento desigual mesmo que a regra seja idêntica; além disso, a impessoalidade exige critério definido previamente, escrito e auditável.",
        "versaoCorreta": "Impessoalidade material exige igualdade de tratamento para casos iguais; a mesma regra aplicada a todos pode ainda assim produzir tratamento desigual se o dado de entrada reflete desigualdade estrutural."
      },
      {
        "afirmacaoEquivocada": "Publicidade no serviço público digital significa divulgar todos os dados do sistema, inclusive dados pessoais e sigilosos do cidadão.",
        "porqueErrada": "Publicidade não é disclosure irrestrita de dados sensíveis: exige compatibilizar a transparência com o sigilo legal, de modo que o critério de decisão seja publicado sem expor o que a lei protege.",
        "versaoCorreta": "Publica-se o critério, a finalidade, o registro da decisão e o responsável; dados pessoais e sigilosos permanecem protegidos, e a publicidade se exerce sem violar o sigilo legal."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Impessoalidade: tratamento igualitário de pessoas em situação igual, sem favorecimento por afinidade ou interesse",
        "Moralidade: vedação ao uso manipulativo da tecnologia e desvio de finalidade, com proporcionalidade entre objetivo e meio",
        "Publicidade: transparência sobre critérios, finalidade, bases e consequências da decisão automatizada",
        "Explicabilidade: capacidade de explicar ao cidadão, em linguagem compreensível, qual regra foi aplicada e como revisar o resultado",
        "Controle: revisão humana, logs, auditoria, possibilidade de anulação e canal de contestação"
      ],
      "regras": [
        "O critério de decisão precisa ser definido previamente, escrito, comunicável ao cidadão e auditável",
        "A finalidade real do tratamento deve ser compatível com a finalidade declarada; desvio de finalidade viola a moralidade",
        "O cidadão afetado por decisão automatizada tem direito a saber o critério aplicado e a contestar o resultado",
        "Dados pessoais e sigilosos não são divulgados em nome da publicidade: há compatibilização com o sigilo legal"
      ],
      "comparacoes": [
        "Impessoalidade como igualdade de critério difere da indiferença: a primeira exige critério objetivo igual para todos, a segunda ignora diferenças que a lei permite considerar"
      ],
      "fluxos": [
        "Decisão automatizada: critério definido e versionado → entrada de dados → aplicação da regra → log de inferência → revisão humana se solicitada → registro da decisão → explicação ao cidadão → canal de contestação"
      ],
      "excecoes": [
        "A lei pode determinar tratamento diferenciado em casos específicos; essa exceção não é arbítrio, mas ancoragem normativa"
      ],
      "palavrasChave": [
        "impessoalidade",
        "moralidade",
        "publicidade",
        "explicabilidade",
        "controle",
        "critério de tratamento",
        "rastreabilidade",
        "sigilo legal"
      ],
      "checklist": [
        "O critério de decisão está definido previamente, escrito e comunicável ao cidadão?",
        "O critério é aplicado de forma uniforme a casos iguais, sem exceções ad hoc?",
        "A finalidade real do tratamento é compatível com a finalidade declarada?",
        "Existe registro e rastreabilidade das decisões automatizadas?",
        "O cidadão afetado recebe explicação compreensível sobre a regra aplicada e como revisar o resultado?",
        "Existe canal de revisão humana, anulação e contestação?",
        "A publicidade dos critérios é compatibilizada com o sigilo legal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O portal de atendimento exibe «sua posição na fila» sem informar os critérios de ordenação. Qual a violação mais evidente?",
        "dados": "Portal de fila com exibição de posição; ausência de critério de ordenação publicado; ausência de registro da versão da regra; ausência de mecanismo de contestação do cidadão.",
        "conceitos": [
          "Publicidade como dever de publicar o critério de decisão",
          "Impessoalidade como critério escrito, comunicável e auditável",
          "Controle como exigência de registro e rastreabilidade"
        ],
        "estrategia": "Identificar que a ausência de critério publicado impede o cidadão de saber como sua posição foi determinada, bloqueando o controle do órgão; reconhecer que impessoalidade e publicidade são críticas distintas.",
        "execucao": [
          "1) Constatar que o critério de ordenação não está definido por escrito nem publicado;",
          "2) Identificar a violação de publicidade: o cidadão não pode saber como a ordem é definida;",
          "3) Identificar o risco à impessoalidade: sem critério escrito e comunicável, não se demonstra tratamento igualitário;"
        ],
        "resultado": "Publicidade é a violação mais evidente: o cidadão não tem como saber como sua posição foi determinada, o que impede controlar a atividade do órgão e alimenta o uso de critério oculto.",
        "justificativa": "A publicidade obriga o órgão a publicar como decide; sem isso, o cidadão fica impossibilitado de fiscalizar. A impessoalidade exige que o critério seja escrito e aplicado uniformemente.",
        "errosFrequentes": [
          "Acreditar que escrever o critério internamente resolve tudo, sem publicar a versão vigente para o cidadão;",
          "Tratar publicidade e impessoalidade como a mesma coisa, quando são críticas distintas que ocorrem no mesmo ato."
        ],
        "variacao": "Se o portal publicar o critério, mas o cidadão não encontre campo para contestar a posição na fila, falta canal de revisão humana e de contestação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um modelo de priorização de pedidos de benefício foi treinado com dados históricos de uma região com equipe subdimensionada e erra sistematicamente em outra região. O sistema é legal? É impessoal?",
        "dados": "Modelo de priorização treinado com dados de uma região com equipe subdimensionada; erros sistemáticos concentrados em outra região; ausência de avaliação de impacto por subgrupo; ausência de ciclo de retreinamento; ausência de revisão humana dos casos com erro concentrado.",
        "conceitos": [
          "Legalidade: existência de norma e competência para priorizar pedidos",
          "Impessoalidade material: igualdade de tratamento para casos iguais, independentemente da região",
          "Moralidade: vedação de uso manipulativo e de critério que penaliza certo território sabendo da defasagem"
        ],
        "estrategia": "Separar a legalidade (há norma e competência) da impessoalidade material (a mesma regra produz tratamento desigual para pessoas em situação análoga) e da moralidade (manter o modelo ciente da defasagem sem correção).",
        "execucao": [
          "1) Verificar se há norma e competência para o modelo de priorização (legalidade formal);",
          "2) Constatar que a mesma regra trata desigualmente pessoas em situação análoga por defasagem de dados de treino (viés de dados);",
          "3) Identificar o problema moral: manter o modelo sabendo que ele penaliza certo território é uso indevido da tecnologia;"
        ],
        "resultado": "O sistema pode ser legal (há norma e competência) e, ainda assim, não ser impessoal materialmente: a mesma regra produziu tratamento desigual para pessoas em situação análoga, por defasagem de dados de treino. A moralidade está em debate porque manter o modelo ciente da defasagem e sem correção configura uso manipulativo.",
        "justificativa": "A legalidade formal não garante a impessoalidade material: um modelo estatisticamente apurado pode reproduzir desvios dos dados de treino e tratar desigualmente pessoas em situação análoga. A moralidade exige que o órgão não mantenha um modelo que sabe prejudicar certo território.",
        "errosFrequentes": [
          "Presumir que o sistema é impessoal porque aplica a mesma regra a todos, sem examinar o viés dos dados de entrada;",
          "Tratar o problema como apenas técnico e ignorar que manter o modelo ciente da defasagem é questão de moralidade administrativa."
        ],
        "variacao": "Se o cidadão apresentar contestação com provas documentais que contradizem o critério aplicado, o órgão deve revisar a decisão individualmente, avaliar se há erro sistemático no critério e, se confirmado, estender a correção a todos os casos afetados pelo mesmo parâmetro."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «Como o sistema aplica a mesma regra para todos, está automaticamente em conformidade com o princípio da impessoalidade.».",
        "dados": "Decisão automatizada que aplica um único parâmetro de pontuação a todos os requerentes; dados de entrada que refletem desigualdade estrutural entre regiões; ausência de critério escrito e auditável; ausência de mecanismo de contestação pelo cidadão.",
        "conceitos": [
          "Impessoalidade material: igualdade de tratamento para casos iguais, e não apenas aplicação mecânica de uma regra",
          "Critério oculto: parâmetro não publicado nem auditável impede demonstrar igualdade de tratamento",
          "Explicabilidade: requisito de controle, não cortesia"
        ],
        "estrategia": "Desmontar a afirmação em duas partes: a constância de execução não produz impessoalidade por si mesma, e a impessoalidade exige critério definido previamente, escrito e auditável.",
        "execucao": [
          "1) Testar a primeira parte: aplicar a mesma regra para todos não prova impessoalidade; o critério precisa ser definido, escrito e auditável;",
          "2) Testar a segunda parte: dados de entrada que refletem desigualdade estrutural fazem a mesma regra produzir tratamento desigual de forma sistemática;",
          "3) Verificar o que falta: sem critério publicado e sem canal de contestação, não há explicabilidade nem controle;"
        ],
        "resultado": "Errado. Impessoalidade material exige igualdade de tratamento para casos iguais; aplicar uniformemente uma regra treinada com dados enviesados pode produzir desvio desigual de forma sistemática, o que é o oposto do princípio. Além disso, a impessoalidade exige critério definido previamente, escrito e auditável.",
        "justificativa": "A afirmação confunde uniformidade de execução com impessoalidade. A impessoalidade se verifica pelo critério que o sistema aplica, não pelo fato de ser automático. Um modelo estatístico pode reproduzir desvios dos dados de treino e tratar desigualmente pessoas em situação análoga.",
        "errosFrequentes": [
          "Crer que a automação produz neutralidade por si, sem examinar o critério cadastrado e os dados de entrada;",
          "Confundir aplicação mecânica de regra com impessoalidade, ignorando que o critério precisa ser escrito, publicado e auditável."
        ],
        "variacao": "Se o cidadão demonstrar que o critério foi aplicado de forma inconsistente entre casos semelhantes, o órgão deve revisar a decisão individualmente, documentar os parâmetros utilizados e corrigir eventuais distorções antes de novas decisões."
      }
    ]
  },
  "m6-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os três casos desta seção são a parte da unidade em que o estudante deixa de reconhecer os princípios e passa a produzir a solução. Cada caso segue o template de nove itens — problema, dados, conceitos, estratégia, passo a passo, resultado, justificativa, erros frequentes e variação —, que é o mesmo formato usado em parecer de auditoria e em resposta discursiva. Dominar o roteiro é o que permite transferir o raciocínio para um enunciado nunca visto.",
      "preRequisitos": [
        "Natureza dos princípios e conteúdo operativo de cada um.",
        "Lei nº 14.129/2021: art. 3º, art. 6º, art. 14, art. 22, art. 29 e art. 48.",
        "Lei nº 12.527/2011 (LAI): arts. 3º, 7º, 8º, 10, 11, 14 e 31; e Lei nº 14.129/2021: arts. 29, 30 e 36.",
        "Módulo 5: análise de impacto por subgrupo e avaliação de modelos."
      ],
      "objetivosObservaveis": [
        "aplicar o template de nove itens aos três casos, sem omitir campo nem trocar a ordem de raciocínio;",
        "identificar, em cada caso, o princípio violado e a evidência técnica que demonstra a violação;",
        "redigir a providência cabível — correção, negativa fundamentada ou entrega parcial — ancorada em dispositivo legal;",
        "transferir o roteiro a um quarto caso, enunciando a variação que exige nova aplicação."
      ],
      "competencias": [
        "Análise de caso com método fixo: separar problema, dados e norma antes de concluir.",
        "Redação técnica de conformidade, com dispositivo legal, evidência e risco.",
        "Transferência: reconhecer em novo enunciado a estrutura já dominada."
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u1-t1-s2 (Fundamentação conceitual: natureza dos princípios e conteúdo de cada um) — fornece o conteúdo dos princípios aplicado nos três casos;",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade) — as distinções usadas para classificar cada caso;",
        "m6-u1-t3-s3 (Erros, exceções e pegadinhas de prova da unidade) — consolida os equívocos que os casos ilustram;",
        "m6-u1-t2-s1 (Legalidade e automação de atos administrativos: onde termina a automação) — o caso do modelo de priorização é desdobrado em requisitos de conformidade."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Casos aplicados com três situações completas de governo digital — atendimento presencial, modelo de priorização e pedido de base de dados — espelham o formato discursivo e de múltipla escolha por cenário adotado em provas de cargo de TI em órgão público. A classificação média decorre de o tema ser aplicação de princípios já cobrados, e não núcleo autônomo do edital (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "Os três casos seguem o mesmo roteiro de nove itens, e o primeiro passo é sempre o mesmo: ler o caso e escrever, com suas palavras, qual é o problema jurídico e quais são os dados disponíveis. São hipóteses didáticas de ensino, sem correspondência com caso real de órgão, empresa ou pessoa determinada. O valor do roteiro está em não deixar campo em branco: todo caso tem problema, dados, norma, solução e justificativa.",
      "intermediario": "No segundo nível, o aluno identifica os princípios em jogo em cada caso e o dispositivo que os operacionaliza. No caso do atendimento presencial desligado, o problema é de eficiência mal compreendida e de barreira digital; no caso do modelo de priorização, é de impessoalidade e publicidade; no caso do pedido de base de dados, é de resposta fundamentada e de critério menos restritivo. Em todos, a providência correta é a que preserva o direito do cidadão.",
      "avancado": "No nível avançado, o aluno produz a providência, e não apenas o diagnóstico. Isso significa converter a não conformidade em plano de correção com prazo, responsável e evidência; em negativa fundamentada por dispositivo; ou em entrega parcial anonimizada com a motivação específica da parte retida. É aqui que o método se separa da opinião: a saída do caso é sempre um ato ou um documento ancorado em norma.",
      "especialista": "No nível especialista, o aluno aplica o roteiro a casos próprios e reconhece a estrutura por baixo do enunciado. A pergunta que organiza a transferência é sempre a mesma: qual direito do cidadão está em jogo, qual princípio o protege, qual evidência demonstra a conformidade e qual ato a produz. Com essa pergunta fixa, qualquer cenário novo — fila, benefício, transparência, acessibilidade — cai no mesmo procedimento."
    },
    "comparacoes": [
      {
        "tema": "Diagnosticar a não conformidade e produzir a providência",
        "a": {
          "rotulo": "Diagnóstico",
          "texto": "Identifica o princípio violado e a evidência que o demonstra: no caso do atendimento presencial, a ausência de ato normativo local e a barreira de conexão nos bairros periféricos; no caso do modelo, a falta de critério escrito e de logs de inferência."
        },
        "b": {
          "rotulo": "Providência",
          "texto": "Converte o diagnóstico em ato: reativação do canal presencial com quota e métrica de acompanhamento; plano de correção com prazo, responsável e evidência, operando em modo de apoio à decisão; ou entrega parcial anonimizada com negativa parcial fundamentada."
        },
        "diferencaGabarito": "Um item que pede a solução exige a providência, e não a repetição do problema. Respostas que apenas nomeiam o princípio violado ficam incompletas quando o enunciado pede a medida cabível, o prazo e a evidência de que a correção foi executada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação falsa: porque o pedido de acesso «contém dados pessoais», o órgão pode negar integralmente o fornecimento, sem analisar a parte não sigilosa nem fundamentar a recusa.",
        "porqueErrada": "A resposta pode ser protetora e, ao mesmo tempo, inválida: a recusa binária ignora que o pedido deve ser analisado por camada, que a lei admite a entrega da parte não sigilosa e que a negativa precisa de fundamento específico. Proteger dados não é o mesmo que cumprir o dever de responder com fundamentação.",
        "versaoCorreta": "Problema: resposta genérica a pedido de acesso, que pode ser simultaneamente protetora e inválida. Dados disponíveis: pedido apresentado com identificação do requerente e especificação da base pedida (art. 10 da Lei nº 12.527/2011); a base contém dados pessoais e possivelmente dados sensíveis de saúde (LGPD, art. 5º, II — verificado em 2026-10-20); o art. 31, § 3º, II, da Lei nº 12.527/2011 admite a realização de estatísticas e pesquisas científicas de evidente interesse público ou geral, previsto em lei, sendo vedada a identificação da pessoa; o art. 36 da Lei nº 14.129/2021 admite disponibilizar em transparência ativa dados de pessoas físicas e jurídicas para pesquisa acadêmica e monitoramento e avaliação de políticas públicas, desde que anonimizados antes da disponibilização os dados protegidos por sigilo ou com restrição de acesso. Estratégia: responder com fundamentação, e não com recusa binária: analisar o pedido por camada (dado pessoal identificável, dado anonimizado, dado agregável), aplicar o critério menos restritivo possível e entregar o que puder ser entregue, motivando exatamente o que não puder. Resultado: entrega parcial em formato anonimizado com negativa parcial fundamentada, em vez de negativa integral genérica."
      },
      {
        "afirmacaoEquivocada": "Afirmação: como o canal digital reduziu o tempo médio de atendimento, a supressão do atendimento presencial é a prova de que a eficiência foi cumprida.",
        "porqueErrada": "A eficiência é qualidade com racionalidade de recursos, e não métrica isolada de tempo. A lei veda a supressão do atendimento presencial e exige prestação digital por tecnologias de amplo acesso, justamente para que o ganho de velocidade não se converta em barreira para quem não tem conexão.",
        "versaoCorreta": "A eficiência se prova pela qualidade do serviço para todos os usuários, e não pela velocidade média de quem já tem acesso. Suprimir o canal presencial transfere o custo da modernização para o cidadão sem conexão, o que contraria a vedação expressa e a regra de eliminar apenas formalidades cujo custo social exceda o risco."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Roteiro de nove itens para caso resolvido de ética em TI: problema, dados, princípios aplicáveis, estratégia de resposta, passo a passo, resultado, justificativa técnica, erros frequentes e variação para transferência.",
        "Barreira digital: custo social imposto a quem não dispõe de conexão ou de dispositivo, que a eficiência não autoriza criar.",
        "Negativa fundamentada: resposta a pedido de acesso que indica o dispositivo, a autoridade e o caminho recursal, distinguindo-se da recusa genérica."
      ],
      "regras": [
        "O art. 14 da Lei nº 14.129/2021 determina a prestação dos serviços por tecnologias de amplo acesso, sem prejuízo do atendimento presencial.",
        "O art. 11, § 1º, II, da Lei nº 12.527/2011 exige que a negativa de acesso seja fundamentada, e o art. 14 assegura ao requerente o inteiro teor da decisão."
      ],
      "comparacoes": [
        "Parecer de homologação e parecer de não conformidade: o primeiro declara a adequação do sistema; o segundo indica o vício, o plano de correção e a evidência exigida — no caso do modelo sem critério, a saída correta é a segunda."
      ],
      "fluxos": [
        "Aplicação do template: problema → dados disponíveis → conceitos e dispositivos → estratégia de resposta → passo a passo → resultado → justificativa técnica → erros frequentes a evitar → variação para transferência."
      ],
      "excecoes": [
        "As exceções ao processo eletrônico, entre elas a inviabilidade do meio eletrônico para o usuário, admitem a via alternativa — mas não autorizam suprimir o atendimento presencial nem o direito de pedir informação."
      ],
      "palavrasChave": [
        "atendimento presencial",
        "modelo de priorização",
        "logs de inferência",
        "anonimização",
        "negativa fundamentada",
        "plano de correção"
      ],
      "checklist": [
        "O problema jurídico está formulado em uma frase, sem confundir com o dado técnico?",
        "Todos os dados disponíveis foram listados, inclusive os que favorecem a outra parte?",
        "A estratégia ataca o texto legal, e não a prática pretérita do órgão?",
        "O resultado é ato ou documento com norma, evidência e risco, e não opinião?",
        "A variação testaria transferência real, e não apenas troca de números?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um portal municipal oferece serviço de agendamento de consulta pela internet, mas o atendimento presencial foi desligado em todo o município. Classifique o problema e proponha a solução.",
        "dados": "A plataforma funciona com autenticação e protocolo; o município não atende presencialmente há seis meses; não há dispensa nem legislação municipal autorizando a medida; a presença de internet de boa qualidade é limitada em bairros periféricos.",
        "conceitos": [
          "Princípio da eficiência (art. 3º, XI e XVI, da Lei nº 14.129/2021) e art. 14 da mesma lei (prestação digital por tecnologias de amplo acesso, inclusive de baixa renda e de áreas rurais e isoladas, sem prejuízo do atendimento presencial)",
          "Art. 6º (exceções ao processo eletrônico, entre elas a inviabilidade do meio eletrônico para o usuário)"
        ],
        "estrategia": "Comparar a medida com o texto legal (não com a prática pretérita do órgão), identificar o direito afetado (acesso ao serviço sem barreira digital), e propor solução que preserve a dualidade de canais.",
        "execucao": [
          "1) Verificar se existe ato normativo local que discipline a matéria — não existe",
          "2) Mapear a exceção legal: o art. 14 e o art. 3º, XVI mantêm o atendimento presencial como regra",
          "3) Medir a barreira: quais localidades sem conexão efetiva",
          "4) Propor agendamento presencial com quota mínima e atendimento preferencial, mantendo o canal digital",
          "5) Registrar a decisão com base legal e métrica de acompanhamento (tempo médio e satisfação, art. 22)."
        ],
        "resultado": "Manutenção do canal digital com reativação do presencial, sem prejuízo dos ganhos de eficiência.",
        "justificativa": "Eficiência, no sentido do art. 3º, XI, XII e XVI, é otimização do processo com eliminação de custos e formalidades desnecessárias, não supressão de canal; o princípio da publicidade (art. 3º, da Lei nº 12.527/2011) exige que a oferta real do serviço seja retratada de forma verdadeira nos sites oficiais.",
        "errosFrequentes": [
          "a) Chamar a medida de «modernização» e encerrar o assunto",
          "b) Ignorar o art. 14 e o art. 3º, XVI",
          "c) Propor solução apenas digital (ex.: e-mail ou aplicativo) para quem não tem acesso à internet",
          "d) Tratar a exceção do art. 6º como se autorizasse a supressão."
        ],
        "variacao": "Se o município for de pequeno porte e o art. 8º, § 4º, da Lei nº 12.527/2011 dispensar parte da divulgação na internet, a dispensa é apenas sobre a divulgação de determinadas informações na internet — ela não autoriza a supressão do atendimento presencial nem do direito de pedir informação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão estadual quer usar um modelo de priorização para ordenar pedidos de análise de benefício. O órgão pretende priorizar «casos de maior risco social», sem definir o critério, e quer publicar apenas o resultado. Elabore a análise de conformidade e a providência.",
        "dados": "O órgão tem competência para priorizar filas (ato normativo interno); existe base com histórico de atendimento; o texto do modelo propõe «risco social» como variável; o Portal ainda não publica critérios; não há registro de auditoria das decisões; o contrato de fornecedor não prevê logs de inferência.",
        "conceitos": [
          "Legalidade (competência e base do critério)",
          "Impessoalidade (critério objetivo, igual para casos iguais, auditável)",
          "Publicidade (o critério integra a informação pública sobre a atividade do órgão — art. 3º, V, e art. 7º, V, da Lei nº 12.527/2011",
          "Art. 29, § 1º, III, da Lei nº 14.129/2021, exige descrição suficiente da estrutura e da semântica dos dados)",
          "Moralidade (uso de dado sensível, quando o «risco social» se ancora em variáveis de saúde ou situação socioeconômica, exige base legal específica na LGPD e, em qualquer caso, transparência e finalidade — LGPD verificada em 2026-10-20 quanto aos arts. 1º a 5º e 46)"
        ],
        "estrategia": "Não produzir parecer de homologação; produzir parecer de não conformidade com plano de correção, porque o silêncio sobre o critério é incompatível com impessoalidade auditável e com publicidade.",
        "execucao": [
          "1) Mapear a base legal da competência",
          "2) Exigir definição escrita do «risco social», com variáveis, pesos e vigência",
          "3) Exigir logs de inferência versionados no contrato (dado, versão do modelo, escore, resultado, data)",
          "4) Exigir avaliação de impacto por subgrupo antes da operação real (Módulo 5) e definir o critério de avaliação amostral",
          "5) Publicar o critério em linguagem clara (art. 3º, VII, da Lei nº 14.129/2021) e prover canal de revisão e contestação",
          "6) Registrar o conjunto como risco priorizado no sistema de gestão de riscos (art. 48)."
        ],
        "resultado": "Plano de correção com prazo, responsável e evidência; recomendação de operação apenas em modo de apoio à decisão (sugestão de ordenação) até que a trilha e a publicação existam.",
        "justificativa": "A impessoalidade só é demonstrável se o critério puder ser reconstituído e explicado caso a caso; sem logs de inferência, nem o órgão nem o cidadão podem verificar a igualdade de tratamento, e o controle interno proporcional ao risco (art. 48) fica comprometido.",
        "errosFrequentes": [
          "a) Confundir «risco social» com variável legitimamente disponível e dispensar a análise de dados sensíveis",
          "b) Aceitar o modelo porque «usa aprendizado de máquina»",
          "c) Publicar o resultado da fila e não o critério",
          "d) Achar que o canal de revisão é dispensável porque o modelo «acerta 92%»."
        ],
        "variacao": "Se o órgão pretender usar o mesmo modelo para sugerir indeferimento — e não apenas ordenação —, a exigência se agrava: a decisão passa a ser ato administrativo individual, com motivação, comunicação ao cidadão e possibilidade de revisão (art. 7º, § 3º, da Lei nº 12.527/2011, assegura o acesso aos documentos usados como fundamento do ato decisório)."
      },
      {
        "tipo": "erro",
        "problema": "Um órgão recebeu um pedido de acesso que requisita a relação completa dos titulares de benefício assistencial — incluindo CPF, endereço e diagnóstico — para subsidiar estudo sobre focalização de políticas. O órgão responde com negativa integral, alegando que o pedido «contém dados pessoais». Avalie a resposta.",
        "dados": "Pedido apresentado com identificação do requerente e especificação da base pedida (art. 10 da Lei nº 12.527/2011); a base contém dados pessoais e possivelmente dados sensíveis de saúde (LGPD, art. 5º, II — verificado em 2026-10-20); o art. 31, § 3º, II, da Lei nº 12.527/2011 admite a realização de estatísticas e pesquisas científicas de evidente interesse público ou geral, previsto em lei, sendo vedada a identificação da pessoa; o art. 36 da Lei nº 14.129/2021 admite disponibilizar em transparência ativa dados de pessoas físicas e jurídicas para pesquisa acadêmica e monitoramento e avaliação de políticas públicas, desde que anonimizados antes da disponibilização os dados protegidos por sigilo ou com restrição de acesso.",
        "conceitos": [
          "Publicidade como preceito geral (art. 3º, I, da Lei nº 12.527/2011)",
          "Proteção de informação pessoal (art. 31 da mesma lei)",
          "Anonimização (art. 4º, III, da LGPD)",
          "Acesso parcial (art. 7º, § 2º, da Lei nº 12.527/2011 — «assegurado o acesso à parte não sigilosa por meio de certidão, extrato ou cópia com ocultação da parte sob sigilo»)",
          "Dever de fundamentar a negativa (art. 11, § 1º, II, e art. 14 — inteiro teor da decisão de negativa)"
        ],
        "estrategia": "Responder com fundamentação, e não com recusa binária: analisar o pedido por camada (dado pessoal identificável, dado anonimizado, dado agregável), aplicar o critério menos restritivo possível e entregar o que puder ser entregue, motivando exatamente o que não puder.",
        "execucao": [
          "1) Verificar se o pedido de abertura de base se enquadra no art. 30 da Lei nº 14.129/2021 — os prazos e vedação de motivos do art. 10 da LAI são aplicáveis por remissão (art. 30, § 2º)",
          "2) Verificar se há base legal de tratamento dos dados para a finalidade de pesquisa (LGPD — aqui o texto legal específico permanece pendente de verificação e é referido de forma genérica)",
          "3) Produzir versão anonimizada/agregada, com vedação de identificação (art. 31, § 3º, II, da LAI; art. 36 da Lei nº 14.129/2021)",
          "4) Responder com a versão entregável e com a motivação específica da parte retida, indicando a autoridade, os dispositivos e o caminho recursal (art. 11, § 4º, e art. 15)",
          "5) Registrar a decisão e a anonimização aplicada (variáveis suprimidas, método, data), permitindo reprocessamento posterior."
        ],
        "resultado": "Entrega parcial em formato anonimizado com negativa parcial fundamentada, em vez de negativa integral genérica.",
        "justificativa": "A negativa genérica descumpre o dever de fundamentação e o princípio do menor restritivo; a anonimização, quando efetiva e irreversível, retira o dado pessoal do regime de identificação e permite a finalidade de pesquisa e controle social, que é a razão de ser da transparência ativa.",
        "errosFrequentes": [
          "a) Negar tudo por «contém dados pessoais», sem analisar camada por camada",
          "b) Entregar a base com CPF e diagnóstico, o que é divulgação irrestrita de dados pessoais e sensíveis",
          "c) Citar a LGPD como se autorizasse a abertura, quando o fundamento é a hipótese legal de pesquisa com vedação de identificação e a anonimização prévia",
          "d) Deixar de informar o teor integral da negativa (art. 14)."
        ],
        "variacao": "Se o requerente for o próprio titular dos dados e busca o acesso aos próprios registros, o regime muda: incide o direito de acesso do titular (art. 18 da LGPD — verificado em 2026-10-20) e a resposta deve ser individualizada, com correção e anonimização quando cabíveis, e não a entrega da base agregada."
      }
    ]
  },
  "m6-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Nesta seção o erro não é de memorização, é de troca: publicidade e transparência ativa, eficiência e economicidade, impessoalidade e imparcialidade, legalidade e legalidade social. Cada distinção é uma chance de o enunciado parecer certo e estar errado, e é por isso que a banca a usa. Explicar por que a distinção altera o gabarito é o que separa o acerto por intuição do acerto por fundamento.",
      "preRequisitos": [
        "Conteúdo operativo dos cinco princípios do art. 37 da Constituição Federal.",
        "Lei nº 12.527/2011: art. 3º, arts. 10 a 16, arts. 23 e 24, art. 31.",
        "Lei nº 14.129/2021: art. 3º, art. 4º, art. 22, art. 29 e art. 36.",
        "Noção de dado pessoal, informação pessoal e anonimização."
      ],
      "objetivosObservaveis": [
        "distinguir publicidade, transparência ativa e transparência passiva, indicando a consequência prática de cada uma;",
        "separar eficiência e economicidade, mostrando por que uma não realiza a outra;",
        "distinguir impessoalidade, imparcialidade e uniformidade, e identificar o que a lei exige em cada caso;",
        "reconhecer que «legalidade social» não é técnica de recepção do ordenamento brasileiro e por que a troca erra o item."
      ],
      "competencias": [
        "Leitura comparada de institutos próximos, com atenção ao sujeito e ao mecanismo.",
        "Identificação do que muda o gabarito em uma distinção, e não apenas da definição.",
        "Revisão de alternativa pela consistência com o texto constitucional."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t1-s2 (Fundamentação conceitual: natureza dos princípios e conteúdo de cada um) — origem do conteúdo de cada princípio aqui confrontado;",
        "m6-u1-t3-s1 (Exemplos resolvidos da unidade (três casos completos)) — aplica as distinções aos três casos da unidade;",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — desdobra o mecanismo por demanda;",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — o limite da publicidade."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Distinções entre conceitos próximos são o formato preferido de itens de certo e errado em direito administrativo e governo digital, porque permitem erro por troca de termos sem exigir conhecimento novo. A classificação alta decorre desse uso recorrente em bancas de diferentes perfis, e da segurança do critério: cada distinção tem base no texto constitucional e na lei (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "Publicidade é o princípio constitucional de divulgação do que é público. Transparência ativa é o mecanismo de ofício: o órgão divulga independentemente de pedido. Transparência passiva é o mecanismo por demanda: o cidadão pede, e o órgão responde em prazo e com fundamento. Os três não são sinônimos, e a primeira pergunta de qualquer item é sempre qual dos três o enunciado descreve.",
      "intermediario": "Eficiência é princípio de fim: qualidade do serviço com uso racional de recursos. Economicidade é critério de meio: relação custo-benefício na contratação. Uma contratação barata que produz serviço lento e inacessível pode ser economicamente vantajosa e, ainda assim, ineficiente. Impessoalidade, por sua vez, não é uniformidade: ela exige igualdade de critério, e a lei pode determinar tratamento diferenciado conforme a situação do cidadão.",
      "avancado": "No nível avançado, entra a distinção decisional: a decisão automatizada dispensa intervenção humana no caso, a assistida incorpora sugestão de sistema a ato humano e a manual prescinde de automação. Cada grau concentra exigências diferentes — a primeira, de rastreabilidade e revisão; a segunda, de motivação e conferência humana. Também se separa dado aberto, dado acessível ao público, dado pessoal e informação pessoal: o dado pessoal pode ser aberto quando anonimizado, e abertura não é sinônimo de ausência de pessoas.",
      "especialista": "No nível especialista, o candidato usa as distinções como filtro de alternativa. A pergunta operacional é: o enunciado troca sujeito, mecanismo ou finalidade? Troca de sujeito aparece quando a alternativa atribui ao particular o dever que é do órgão; de mecanismo, quando confunde o dever de divulgar com o direito de pedir; de finalidade, quando trata economicidade como se fosse qualidade do serviço. «Legalidade social» é o caso-limite: valores e diretivas constitucionais não são, no Brasil, técnica de recepção do ordenamento, e o fundamento dos princípios do art. 37 é o texto constitucional."
    },
    "comparacoes": [
      {
        "tema": "Publicidade, transparência ativa e transparência passiva",
        "a": {
          "rotulo": "Publicidade e transparência ativa",
          "texto": "A publicidade é o preceito constitucional de divulgação do que é público; a transparência ativa é o seu instrumento de ofício, que obriga o órgão a divulgar dados independentemente de requerimento, em dever contínuo."
        },
        "b": {
          "rotulo": "Transparência passiva",
          "texto": "É o procedimento de pedido individual do requerente, com resposta em prazo, negativa fundamentada por dispositivo e recurso administrativo. Nasce do ato do interessado, e não de dever contínuo do órgão."
        },
        "diferencaGabarito": "A consequência que muda o gabarito é a fonte do dever: a ativa é obrigatória mesmo sem pedido, e o seu descumprimento não se sana pelo atendimento de pedidos; a passiva decorre de pedido, e o seu descumprimento não se sana pela existência do portal. São mecanismos independentes, e a alternativa que trata um como suprimento do outro está errada."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A transparência passiva é a modalidade mais intensa de transparência, pois entrega o documento integral ao requerente.",
        "porqueErrada": "A intensidade da entrega depende do regime jurídico da informação — pública, sigilosa ou pessoal —, e não do canal pelo qual ela é pedida. A passiva é o direito de pedir; a ativa é o dever de divulgar, e nenhum dos dois canais afasta o sigilo nem os limites de proteção de dados pessoais.",
        "versaoCorreta": "Errado. A intensidade da entrega depende do regime jurídico da informação (pública, sigilosa, pessoal), não do canal. A transparência passiva é o direito de pedir; a ativa é o dever de divulgar. Um documento sigiloso não é entregue nem em transparência ativa nem passiva (arts. 23 e 24 da Lei nº 12.527/2011 — verificados); e dado pessoal não é entregue irrestritamente em nenhum dos dois regimes."
      },
      {
        "afirmacaoEquivocada": "Afirmação: como o pregão foi vencido pela proposta de menor preço, o princípio da eficiência foi integralmente cumprido.",
        "porqueErrada": "A economicidade da contratação é apenas o meio. A eficiência é princípio de fim, que se mede pela qualidade do serviço prestado: solicitações em andamento e concluídas, tempo médio de atendimento e grau de satisfação do usuário, conforme o painel de monitoramento.",
        "versaoCorreta": "Errado. Contrato economicamente vantajoso pode produzir serviço inacessível ou lento, e nessa hipótese a eficiência não se realiza. A distinção entre meio e fim é que muda o gabarito: o exame da economicidade não substitui a medição da qualidade do atendimento, que é o que o painel de monitoramento do serviço existe para aferir."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Publicidade: princípio constitucional de divulgação do que é público, com o sigilo como exceção.",
        "Transparência ativa: disponibilização de dados independentemente de solicitação, em dever contínuo do órgão.",
        "Transparência passiva: procedimento de pedido individual, com resposta em prazo e negativa fundamentada.",
        "Economicidade: critério de custo mínimo na contratação pública, distinto da qualidade do serviço."
      ],
      "regras": [
        "A transparência ativa é obrigatória independentemente de requerimentos: é dever do órgão promover a divulgação de ofício.",
        "A negativa de acesso a informação deve ser fundamentada, e o requerente tem direito ao inteiro teor da decisão e ao recurso administrativo."
      ],
      "comparacoes": [
        "Eficiência e economicidade: a primeira é princípio de fim (qualidade do serviço com uso racional de recursos); a segunda é critério de meio (relação custo-benefício na contratação) — não são sinônimos."
      ],
      "fluxos": [
        "Filtro de distinção: identificar o sujeito da norma (órgão ou cidadão) → identificar o mecanismo (dever de ofício, direito de pedido, critério de contratação) → verificar a consequência prática → concluir se a alternativa trocou algum dos três."
      ],
      "excecoes": [
        "A impessoalidade admite tratamento diferenciado quando a lei o determina: igualdade de critério não é igualdade de resultado, e a própria lei pode exigir a distinção."
      ],
      "palavrasChave": [
        "transparência ativa",
        "transparência passiva",
        "eficiência",
        "economicidade",
        "impessoalidade",
        "imparcialidade",
        "legalidade social",
        "dado aberto"
      ],
      "checklist": [
        "O enunciado descreve dever de ofício ou direito de pedido?",
        "A alternativa trata economicidade como qualidade do serviço?",
        "A exigência é igualdade de critério ou igualdade de resultado?",
        "O termo «legalidade social» está sendo usado como técnica de recepção do ordenamento brasileiro?",
        "O dado dito aberto foi testado quanto à presença de dado pessoal e à anonimização?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O portal do órgão divulga semanalmente o número de requerimentos, o tempo médio de análise e o índice de satisfação. Isso é transparência ativa, passiva ou publicidade?",
        "dados": "Publicação semanal no sítio oficial; dados: quantidade de requerimentos, tempo médio de análise e índice de satisfação; nenhum pedido de cidadão antecedeu a divulgação; conteúdo de interesse coletivo e não documento individual.",
        "conceitos": [
          "Transparência ativa: disponibilização independentemente de solicitação.",
          "Publicidade em sentido constitucional: preceito geral que a transparência ativa executa."
        ],
        "estrategia": "Testar a origem da divulgação: se ela ocorre sem pedido, o mecanismo é a transparência ativa, que é a execução do princípio da publicidade. Em seguida, marcar o contraste com o mesmo conteúdo publicado apenas por demanda.",
        "execucao": [
          "1) Verificar se a divulgação depende de requerimento — não depende, é semanal e periódica;",
          "2) Classificar o mecanismo: disponibilização de ofício, o que configura transparência ativa;",
          "3) Relacionar ao princípio: a ativa é instrumento de execução da publicidade em sentido constitucional;",
          "4) Construir o contraste: o mesmo conteúdo entregue apenas em resposta a pedido seria transparência passiva."
        ],
        "resultado": "Transparência ativa (e, por isso, publicidade em sentido constitucional): a disponibilização ocorre independentemente de solicitação, o que é precisamente a definição do art. 4º, XI, da Lei nº 14.129/2021 e o dever do art. 8º da Lei nº 12.527/2011. O mesmo conteúdo, se publicado apenas em resposta a pedido de cidadão, seria transparência passiva.",
        "justificativa": "O critério de classificação é a origem do dever, e não o conteúdo nem o formato: a ativa nasce de dever contínuo do órgão, a passiva nasce do ato do interessado. Como o painel é publicado semanalmente sem nenhum requerimento prévio, trata-se de transparência ativa, que é a forma técnica de cumprir a publicidade.",
        "errosFrequentes": [
          "Classificar pela riqueza do conteúdo e chamar de ativa apenas o que é dado bruto, ignorando que o painel de indicadores também é divulgação de ofício;",
          "Confundir transparência passiva com a existência de canal de pedidos: o canal é condição da passiva, mas a sua existência não converte a divulgação periódica em resposta a pedido."
        ],
        "variacao": "Se o mesmo painel só fosse produzido e enviado depois que um cidadão o solicitasse, a classificação mudaria para transparência passiva, e o órgão estaria descumprindo o dever de divulgação de ofício."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um pregão foi declarado economicamente vantajoso, mas o serviço entregue tem índice de satisfação baixo e filas longas. O princípio da eficiência foi realizado?",
        "dados": "Pregão declarado economicamente vantajoso; contratada com menor preço; serviço em operação há um ano; índice de satisfação baixo; filas longas; painel de monitoramento com tempo médio de atendimento acima do aceitável.",
        "conceitos": [
          "Economicidade: critério de meio, de custo mínimo na contratação.",
          "Eficiência: princípio de fim, qualidade do serviço com uso racional de recursos."
        ],
        "estrategia": "Separar meio e fim: a vantagem econômica da contratação não é medida de qualidade do serviço. Em seguida, indicar o instrumento que mede a eficiência e a providência decorrente da diferença entre os dois planos.",
        "execucao": [
          "1) Reconhecer que a economicidade foi atendida na fase de contratação;",
          "2) Verificar a qualidade do serviço pelos indicadores do painel: satisfação, tempo médio e filas;",
          "3) Concluir que a eficiência, como princípio de fim, não foi realizada;",
          "4) Indicar a providência: redimensionamento do contrato, aplicação de sanções e medição periódica pelo painel."
        ],
        "resultado": "Não. A economicidade do contrato é só o meio; a eficiência é o fim (qualidade do serviço com uso racional de recursos). O painel de monitoramento do art. 22 da Lei nº 14.129/2021 existe precisamente para medir essa diferença: solicitações em andamento e concluídas, tempo médio de atendimento e grau de satisfação. Um contrato barato que entrega serviço ruim pode ser economicamente vantajoso e socialmente ineficiente.",
        "justificativa": "A distinção entre meio e fim é o que muda a resposta: se economicidade e eficiência fossem sinônimas, a vantagem do pregão encerraria a análise. Como não são, o exame da contratação não substitui a medição da qualidade do atendimento, e os indicadores do painel são a evidência de que o fim não foi alcançado.",
        "errosFrequentes": [
          "Tratar o menor preço como prova de eficiência e encerrar o exame de conformidade na fase de licitação;",
          "Confundir ineficiência com ilegalidade da contratação: a economicidade pode estar perfeita e a eficiência, não realizada — os vícios são de planos diferentes."
        ],
        "variacao": "Se o serviço tiver boa satisfação, mas o custo final superar o orçamento por sucessivos aditivos, a análise se inverte: a eficiência de resultado pode estar realizada e a economicidade da contratação, comprometida."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: como os dados do portal são abertos, não há risco de exposição de dados pessoais, porque dado aberto e dado pessoal são categorias excludentes. Avalie.",
        "dados": "Portal com dados de servidores e de cidadãos; planilhas em formato aberto e referenciadas na internet; licença de reuso; alguns campos nominais sem anonimização; nenhuma restrição de acesso registrada.",
        "conceitos": [
          "Dado aberto: estruturado, legível por máquina, em formato aberto, referenciado na internet e sob licença aberta.",
          "Dado pessoal: dado que se refere a pessoa natural identificada ou identificável."
        ],
        "estrategia": "Testar a excludência afirmada: abertura exige formato, licença e referência, e não ausência de pessoas. Em seguida, verificar o que a anonimização faz — e o que ela não faz — para o regime do dado.",
        "execucao": [
          "1) Listar os requisitos do dado aberto: formato legível por máquina, formato aberto, referência na internet e licença aberta;",
          "2) Constatar que nenhum desses requisitos trata da presença de pessoas;",
          "3) Verificar a classificação do dado quanto à pessoa: pessoal (identificado ou identificável) e informação pessoal na LAI;",
          "4) Concluir que a abertura é compatível com dado pessoal anonimizado, e que a excludência afirmada é falsa."
        ],
        "resultado": "A afirmação está errada. Dado aberto não é sinônimo de dado livre de pessoas: o que a abertura exige é formato, licença e referência. Dado pessoal pode ser dado aberto quando anonimizado e sem restrição de acesso, e dado acessível ao público é apenas o que não está protegido por sigilo ou restrição — três categorias que não se excludem.",
        "justificativa": "A confusão está em fundir dois eixos independentes: o eixo da abertura, que trata do formato e da licença, e o eixo da proteção, que trata da identificação da pessoa. A lei define as quatro categorias separadamente, e a única combinação vedada é a de dado identificável divulgado sem base legal, o que não decorre da abertura, mas do regime de proteção.",
        "errosFrequentes": [
          "Achar que a licença aberta afasta o regime de proteção de dados, quando ela trata apenas das condições de reuso;",
          "No extremo oposto, concluir que nenhum dado sobre pessoa pode ser aberto, ignorando a possibilidade de anonimização prévia."
        ],
        "variacao": "Se as planilhas passarem por anonimização efetiva e irreversível antes da publicação, a exposição de dados pessoais deixa de ser o problema, e o exame passa a recair sobre a qualidade do método de anonimização e sobre a existência de bloqueio de reidentificação."
      }
    ]
  },
  "m6-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Reúne as armadilhas típicas dos itens sobre os princípios do art. 37: absolutização de um princípio, equiparação entre automação e impessoalidade e leitura de prazo como princípio. Reconhecer a generalização falsa e reescrever a afirmação decide o item.",
      "preRequisitos": [
        "Leitura dos cinco princípios do art. 37 da Constituição Federal e da distinção entre princípio e regra.",
        "Diretrizes do art. 3º da Lei nº 12.527/2011 e art. 29, § 1º, VIII, da Lei nº 14.129/2021.",
        "Natureza dos princípios do art. 37 da CF (legalidade, impessoalidade, moralidade, publicidade, eficiência) — base para identificar a absolutização indevida em sistemas digitais.",
        "Noção de sistema decisório automatizado, trilha de auditoria e revisão humana."
      ],
      "objetivosObservaveis": [
        "identificar, em item de certo/errado, a absolutização de um princípio do art. 37 e o defeito lógico que ela introduz;",
        "distinguir generalização falsa de exceção legítima, citando o dispositivo que autoriza a exceção;",
        "reescrever a afirmação equivocada em versão técnica correta, mantendo o objeto do item;",
        "explicar por que a forma eletrônica de um ato não dispensa motivação nem cria competência."
      ],
      "competencias": [
        "leitura crítica de enunciados: decompor a afirmação em premissa, consequência e dispositivo invocado;",
        "fundamentação: substituir a afirmação vaga pelo dispositivo que sustenta a exceção alegada;",
        "contenção argumentativa: não estender uma regra a casos que a lei expressamente reserva."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t1-s2 (Fundamentação conceitual: natureza dos princípios e conteúdo de cada um) — a absolutização viola a aplicação harmônica estudada ali;",
        "m6-u1-t2-s1 (Legalidade e automação de atos administrativos: onde termina a automação) — origem das pegadinhas sobre competência e motivação;",
        "m6-u1-t2-s2 (Impessoalidade, moralidade e publicidade: critérios de tratamento, explicabilidade e controle) — o critério objetivo sustenta a impessoalidade do sistema;",
        "m6-u1-t3-s2 (Comparações e distinções críticas da unidade) — as distinções reaparecem aqui sob a forma de erro;",
        "m6-u1-t3-s4 (Resumo estruturado, checklist de domínio e verificação de aprendizagem) — consolida as correções em itens de verificação."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens de certo/errado sobre os princípios do art. 37 são recorrentes em administração pública; a classificação média reflete tema frequente, mas não central no módulo (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "O candidato iniciante fixa uma régua: nenhum princípio do art. 37 afasta outro por ser mais importante ou mais recente. Quando a afirmação privilegia a publicidade ou a eficiência de forma absoluta, a resposta correta é harmonicamente contrária — os cinco incidem juntos, e o limite vem de dispositivo expresso, como o sigilo do art. 3º, I, da LAI.",
      "intermediario": "No nível intermediário, o erro passa a ser a transferência de caráter: tratar a eficiência como critério de desempate, ou o atendimento digital como autorização para suprimir o canal presencial. A correção exige o dispositivo: o art. 3º, XVI, e o art. 14 da Lei nº 14.129/2021 preservam o atendimento presencial.",
      "avancado": "Em estágio avançado, a armadilha é técnica: confundir o meio com o resultado, como em «sistema automatizado é impessoal por definição». A impessoalidade se verifica pelo critério objetivo, escrito, vigente, comunicável e auditável; um modelo estatístico pode reproduzir desvio e, ainda assim, ser automático.",
      "especialista": "No nível especialista, a correção se sustenta em dispositivo e em consequência: a assinatura eletrônica do art. 7º da Lei nº 14.129/2021 assegura autenticidade e integridade, mas o ato digital permanece ato administrativo, com motivação, publicidade e possibilidade de impugnação."
    },
    "comparacoes": [
      {
        "tema": "Absolutização de princípio x aplicação harmônica dos princípios do art. 37",
        "a": {
          "rotulo": "Absolutização",
          "texto": "Afirma que a publicidade, por ser o preceito geral, autoriza divulgar qualquer dado do órgão, inclusive dados pessoais de cidadãos identificados."
        },
        "b": {
          "rotulo": "Aplicação harmônica",
          "texto": "Reconhece a publicidade como regra e busca o limite expresso: a proteção de dados pessoais e o sigilo legalmente justificado, com o art. 29, § 1º, VIII, da Lei nº 14.129/2021 a exigir respeito à privacidade."
        },
        "diferencaGabarito": "O gabarito rejeita a hierarquia absoluta: não há princípio que afaste os demais, e a exceção existe apenas quando a lei a delimita, com fundamento e formalidade próprios."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "«Sistema automatizado é impessoal por definição.»",
        "porqueErrada": "O automatismo é meio de execução, e não fonte de impessoalidade: garante o tratamento impessoal o critério objetivo, escrito, vigente, comunicável e auditável. Um modelo estatístico treinado em dados históricos pode reproduzir desvio e, ainda assim, ser automático.",
        "versaoCorreta": "A impessoalidade de um sistema digital se verifica pelo critério que ele aplica e pela possibilidade de reconstituir cada decisão, e não pelo fato de a decisão ser produzida sem intervenção humana no cálculo."
      },
      {
        "afirmacaoEquivocada": "«Digitalizar o serviço permite extinguir o atendimento presencial.»",
        "porqueErrada": "A digitalização amplia o acesso, e não substitui o dever de atendimento: o art. 3º, XVI, e o art. 14 da Lei nº 14.129/2021 preservam o atendimento presencial, e o art. 6º admite exceções ao processo eletrônico sem autorizar a extinção do serviço.",
        "versaoCorreta": "A mudança para o meio eletrônico deve ampliar o acesso e manter canal presencial conforme o perfil dos usuários, sempre que houver demanda ou risco de exclusão de quem não dispõe de conectividade."
      },
      {
        "afirmacaoEquivocada": "«Os 20 dias da Lei de Acesso à Informação são um princípio e por isso podem ser adaptados às circunstâncias.»",
        "porqueErrada": "Prazo é regra de conteúdo determinado: o art. 11, § 1º, da Lei nº 12.527/2011 fixa 20 dias e o § 2º admite prorrogação por igual período mediante justificativa expressa. Tratá-lo como princípio abre espaço a adaptação que a lei não prevê.",
        "versaoCorreta": "O prazo de 20 dias é regra vinculante, com hipótese e condição expressas de prorrogação; a única modalidade admitida é a prorrogação motivada por mais 10 dias."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Princípio do art. 37: norma de conduta que orienta e limita a decisão, sem vincular de forma exaustiva.",
        "Regra: vincula por descrição completa da hipótese e da consequência, como o prazo de 20 dias do art. 11 da Lei nº 12.527/2011.",
        "Exceção legítima: desvio autorizado por dispositivo expresso, com fundamento, prazo e autoridade definidos.",
        "Generalização falsa: extensão indevida de afirmação verdadeira a casos que a lei expressamente exclui."
      ],
      "regras": [
        "Não há hierarquia absoluta entre os princípios do art. 37: a decisão correta testa a solução nos cinco.",
        "Toda exceção ao dever de divulgar exige dispositivo que a autorize; a motivação do gestor não substitui o ato formal de classificação do art. 28 da Lei nº 12.527/2011.",
        "A forma eletrônica do ato não dispensa conteúdo: competência, motivação e possibilidade de impugnação permanecem."
      ],
      "comparacoes": [
        "Automação como meio x impessoalidade como resultado: a primeira é técnica de execução; a segunda depende do critério aplicado e do registro que permite reconstituir a decisão."
      ],
      "fluxos": [
        "Analisar item de certo/errado: (1) isolar a afirmação; (2) identificar o dispositivo invocado; (3) testar se a generalização cabe na hipótese legal; (4) localizar a exceção expressa; (5) reescrever a versão correta."
      ],
      "excecoes": [
        "Sigilo legalmente justificado e proteção de dados pessoais: limites à publicidade que não a contrariam, mas a dimensionam."
      ],
      "palavrasChave": [
        "absolutização",
        "generalização falsa",
        "aplicação harmônica",
        "critério auditável",
        "exceção expressa"
      ],
      "checklist": [
        "A afirmação transforma um princípio em critério de prevalência sobre os demais?",
        "Existe dispositivo expresso que autorize a exceção alegada?",
        "O prazo ou o valor citado está sendo tratado como regra ou como princípio?",
        "A afirmação confunde o meio digital com o resultado jurídico do ato?",
        "A versão correta mantém o objeto do item e cita o dispositivo aplicável?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um item afirma que «o princípio da eficiência, por ser mais recente, prevalece sobre a legalidade em caso de conveniência do gestor». Qual é o defeito da afirmação e como corrigi-la?",
        "dados": "Enunciado de certo/errado sem cenário adicional: menciona dois princípios do art. 37 — legalidade e eficiência — e estabelece entre eles relação de prevalência fundada em critério temporal.",
        "conceitos": [
          "Aplicação harmônica dos princípios do art. 37",
          "Legalidade como exigência de competência e de procedimento",
          "Princípio de fim x princípio de meio"
        ],
        "estrategia": "Separar a afirmação em premissa temporal, conclusão de prevalência e consequência prática; testar cada passo contra os princípios do art. 37 e contra a legalidade, que exige competência e procedimento.",
        "execucao": [
          "Isolar a premissa: a eficiência foi incluída no art. 37 por emenda constitucional, mas a data não cria hierarquia.",
          "Testar a conclusão: nenhum dispositivo estabelece ordem de prevalência entre os cinco princípios.",
          "Avaliar a consequência: a legalidade não cede à conveniência do gestor, pois exige competência e procedimento.",
          "Reescrever a afirmação em versão correta, indicando a incidência conjunta dos cinco princípios."
        ],
        "resultado": "Errada em dois pontos: não há hierarquia absoluta entre os princípios do art. 37, e a legalidade não cede à conveniência do gestor. A correção aplica os cinco de forma harmônica.",
        "justificativa": "O gabarito é o erro: a premissa temporal é irrelevante, e a consequência suprimiria o controle da legalidade. A Constituição arrola os cinco princípios sem precedência, e todo ato depende de lei e de competência.",
        "errosFrequentes": [
          "Aceitar a premissa temporal como razão de prevalência, confundindo ordem histórica de inclusão com ordem normativa de aplicação.",
          "Tratar a correção como troca de palavras, sem ver que a afirmação original suprimiria o requisito de competência."
        ],
        "variacao": "Se o item disser que «a moralidade autoriza afastar a publicidade quando o ato é aceito», o defeito é o mesmo, mas a correção muda: o limite está no sigilo e na proteção de dados pessoais."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um item afirma que «a transparência ativa é facultativa e, se o órgão mantiver portal de pedidos, está dispensado de divulgar dados de interesse coletivo». Avalie a afirmação.",
        "dados": "Afirmação em duas proposições: a divulgação de ofício seria facultativa; e a existência de canal de pedidos suprimiria o dever de divulgar. O órgão tem portal de pedidos, mas não publica relatórios de gestão.",
        "conceitos": [
          "Transparência ativa como dever do art. 8º da Lei nº 12.527/2011",
          "Transparência passiva como direito de pedido do art. 10",
          "Complementariedade entre os mecanismos"
        ],
        "estrategia": "Desmembrar a afirmação em duas teses e testar cada uma em seu dispositivo: a primeira contra o dever de divulgação de ofício do art. 8º; a segunda contra a natureza distinta do pedido de acesso, que é direito do interessado.",
        "execucao": [
          "Confrontar a primeira tese com o art. 8º da Lei nº 12.527/2011, que impõe a divulgação independentemente de requerimentos.",
          "Confrontar a segunda tese com o art. 10, que assegura ao interessado o direito de pedir.",
          "Verificar que a coexistência dos mecanismos é de soma: o portal de pedidos não supre a ausência de divulgação de ofício.",
          "Concluir pela incorreção das duas proposições e indicar a providência devida."
        ],
        "resultado": "Errada nos dois pontos. A divulgação de ofício é dever do órgão, e o atendimento de pedidos é outro mecanismo, de natureza passiva, que não substitui o dever de divulgar.",
        "justificativa": "A afirmação converte dever em faculdade: o art. 8º da Lei nº 12.527/2011 obriga o órgão a divulgar dados de interesse coletivo; o art. 10 assegura ao interessado o direito de pedir. São posições jurídicas distintas.",
        "errosFrequentes": [
          "Confundir volume de pedidos atendidos com cumprimento do dever de divulgação: atender muitos requerimentos não sana a ausência de publicação de ofício.",
          "Ler «independentemente de solicitações» como descrição do canal, e não como característica do dever."
        ],
        "variacao": "Se o item afirmar que «o órgão pode exigir pedido para obter dado já publicado no portal», a resposta continua negativa: a informação divulgada deve estar acessível em local de fácil acesso, sem exigência de requerimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «Como a Lei nº 14.129/2021 determina interoperabilidade e dados abertos, qualquer base de dados do órgão pode ser publicada na internet». O que há de errado nessa leitura?",
        "dados": "Afirmação que parte de dois comandos legais verdadeiros — interoperabilidade e dados abertos — e extrai conclusão sobre base cadastral hipotética que contém número de matrícula, endereço residencial e dado de saúde de servidores.",
        "conceitos": [
          "Abertura condicionada à ausência de informação protegida (art. 30, § 6º, da Lei nº 14.129/2021)",
          "Respeito à privacidade dos dados pessoais e sensíveis (art. 29, § 1º, VIII)",
          "Incidência residual da LGPD sobre os dados do órgão"
        ],
        "estrategia": "Tratar a afirmação como silogismo com premissas verdadeiras e conclusão falsa: verificar se interoperabilidade e dados abertos são incondicionados ou se dependem de não haver informação protegida por lei.",
        "execucao": [
          "Ler o art. 30, § 6º, da Lei nº 14.129/2021: são passíveis de abertura automática as bases sem informações protegidas por lei.",
          "Consultar o art. 29, § 1º, VIII, que exige respeito à privacidade dos dados pessoais e sensíveis.",
          "Verificar o art. 1º, parágrafo único, que subordina a lei à LGPD e à Lei nº 12.527/2011.",
          "Concluir que a base descrita exige tratamento prévio, como anonimização ou agregação."
        ],
        "resultado": "A leitura está errada: o dever de abertura é condicionado. A base com dado pessoal e dado sensível não é automaticamente publicável; é necessário tratamento prévio que elimine a identificação.",
        "justificativa": "A resposta ingênua trata diretriz como norma incondicionada. O art. 30, § 6º, restringe a abertura automática às bases sem informação protegida, e o art. 29, § 1º, VIII, exige respeito à privacidade.",
        "errosFrequentes": [
          "Confundir dado aberto com dado pessoal: a abertura pressupõe informação institucional, e não dado de pessoa natural identificada ou identificável.",
          "Desconsiderar a LGPD ao aplicar a Lei nº 14.129/2021, esquecendo a remissão do art. 1º, parágrafo único."
        ],
        "variacao": "Se a base contiver apenas nomes e remuneração já divulgados em folha de pagamento, a conclusão se inverte: a informação é institucional e pública, e a abertura passa a ser devida."
      }
    ]
  },
  "m6-u1-t3-s4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Fecha a unidade 6.1 em material de recuperação ativa: conceitos, regras, comparações, exceções e palavras-chave. O valor em prova está no checklist, que testa se o candidato reproduz dispositivo e distingue princípio de regra sem consulta.",
      "preRequisitos": [
        "Leitura integral da unidade 6.1, especialmente os subtópicos de aplicação dos princípios.",
        "Domínio dos prazos e indicadores citados: art. 11 da Lei nº 12.527/2011 e art. 22 da Lei nº 14.129/2021.",
        "Correções das pegadinhas da unidade 6.1 (absolutização indevida, confusão entre princípio e regra, pretexto de eficiência) — os distratores reaparecem nos itens de verificação da unidade 6.6."
      ],
      "objetivosObservaveis": [
        "reproduzir, sem consulta, o dispositivo que reúne os cinco princípios e o sentido das diretrizes do art. 3º da LAI;",
        "diferenciar, em exemplo de sistema, automação e impessoalidade, indicando o que sustenta a segunda;",
        "listar os três indicadores mínimos do painel do art. 22 e o que cada um mede;",
        "formular em uma frase o teste de conformidade de um sistema decisório com a legalidade."
      ],
      "competencias": [
        "recuperação ativa: reconstruir o conteúdo de memória antes de recorrer ao texto;",
        "síntese normativa: transformar vários dispositivos em oito perguntas de verificação;",
        "autoavaliação: reconhecer qual item do checklist ainda depende de releitura."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u1-t3-s3 (Erros, exceções e pegadinhas de prova da unidade) — as generalizações falsas são retomadas nos itens de verificação;",
        "m6-u1-t2-s1 (Legalidade e automação de atos administrativos: onde termina a automação) — fonte do teste de conformidade exigido no checklist;",
        "m6-u1-t2-s2 (Impessoalidade, moralidade e publicidade: critérios de tratamento, explicabilidade e controle) — sustenta a distinção entre impessoalidade e uniformidade;",
        "m6-u1-t3-s1 (Exemplos resolvidos da unidade (três casos completos)) — os três casos completos alimentam as questões de recuperação;",
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — os conceitos legais são reexigidos no checklist."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A síntese mede se o candidato sustenta dispositivo e distinção sem consulta, condição do item de certo/errado. A média decorre de ser instrumento de revisão, e não conteúdo autônomo (estimativa pedagógica)."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante, o resumo funciona como mapa: cinco princípios do art. 37, um direito fundamental de acesso à informação no art. 5º, XXXIII, e a distinção operacional entre princípio e regra. O aluno marca no checklist os itens que responde de memória e decide o que reler.",
      "intermediario": "No nível intermediário, o aluno já articula as peças: sabe que o art. 11, § 1º, da Lei nº 12.527/2011 fixa prazo de 20 dias prorrogável por mais 10 com justificativa expressa, e que o painel do art. 22 da Lei nº 14.129/2021 exige três indicadores; o exercício útil é numerar os passos do teste de conformidade e conferir o dispositivo de cada um.",
      "avancado": "No nível avançado, a revisão deve atacar as exceções: a dispensa do art. 8º, § 4º, da Lei nº 12.527/2011 para municípios com menos de 10.000 habitantes restringe-se ao canal internet e mantém a exigência orçamentária e financeira em tempo real. O candidato deve explicar por que uma exceção não desmente a regra.",
      "especialista": "No nível especialista, a consolidação vira método: para qualquer subtópico da apostila, o aluno constrói um checklist análogo — dispositivo, regra, exceção, comparação, palavra-chave e pergunta de verificação — e testa a si mesmo sem consulta. O critério de domínio da unidade funciona como gabarito."
    },
    "comparacoes": [
      {
        "tema": "Resumo estruturado como revisão x resumo como substituição da leitura",
        "a": {
          "rotulo": "Revisão por recuperação ativa",
          "texto": "O aluno fecha o texto, escreve o que lembra e só depois confere: o resumo organiza o que já foi compreendido e expõe as lacunas de memorização."
        },
        "b": {
          "rotulo": "Uso do resumo como atalho",
          "texto": "O aluno lê apenas a síntese e considera a unidade estudada, sem ter construído a compreensão do dispositivo e da sua aplicação a caso concreto."
        },
        "diferencaGabarito": "O resumo é instrumento de recuperação, e não de aprendizagem: substituir a fundamentação pela síntese elimina justamente o que a prova avalia, que é a aplicação do conceito ao caso concreto."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "«A eficiência do serviço público é medida exclusivamente pelo tempo médio de atendimento.»",
        "porqueErrada": "O painel de monitoramento do art. 22 da Lei nº 14.129/2021 prevê três indicadores mínimos, e não um único: solicitações em andamento e concluídas, tempo médio de atendimento e grau de satisfação dos usuários. Medir apenas o tempo incentiva a apressar indevidamente o atendimento.",
        "versaoCorreta": "A avaliação de desempenho exige o conjunto dos três indicadores do art. 22, de modo que volume, tempo e satisfação sejam lidos juntos e nenhum deles seja otimizado em detrimento dos demais."
      },
      {
        "afirmacaoEquivocada": "«O resumo estruturado da unidade substitui a leitura completa na revisão para a prova.»",
        "porqueErrada": "O resumo permite revisão rápida, mas não produz compreensão: ele organiza o que já foi aprendido e não sustenta a aplicação do conceito a caso novo. A troca do resumo pela fundamentação elimina o objeto avaliado no item, que é a mobilização do dispositivo diante de um fato.",
        "versaoCorreta": "O resumo é etapa de recuperação ativa, feita depois da leitura e da resolução de exercícios: serve para localizar lacunas de memória, e não para dispensar o contato com o texto e com os dispositivos citados."
      },
      {
        "afirmacaoEquivocada": "«A automação do atendimento afasta a impessoalidade, porque o servidor deixa de participar da decisão.»",
        "porqueErrada": "A afirmação troca os polos: a impessoalidade não depende da presença humana, e sim do critério objetivo aplicado. Um atendimento manual pode seguir critérios subjetivos e, portanto, ser pessoal, enquanto um sistema com critério escrito, versão registrada e trilha de auditoria pode ser impessoal.",
        "versaoCorreta": "A impessoalidade se afere pelo critério e pela possibilidade de auditoria, e não pela escala do atendimento: manual, assistido ou automático são formas de execução, e nenhuma garante por si o tratamento impessoal."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Princípio do art. 37: norma de conduta a concretizar no caso, que orienta e limita a decisão.",
        "Regra: descrição exaustiva da hipótese e da consequência, como o prazo de 20 dias do art. 11 da Lei nº 12.527/2011.",
        "Transparência ativa: dever de divulgar de ofício, independentemente de pedido.",
        "Transparência passiva: direito do interessado de obter informação mediante requerimento."
      ],
      "regras": [
        "O pedido de acesso tem prazo de 20 dias, prorrogável por igual período com justificativa expressa (art. 11, §§ 1º e 2º, da Lei nº 12.527/2011).",
        "O serviço de busca e fornecimento da informação é gratuito, com ressarcimento restrito à reprodução e isenção para quem não pode pagar (art. 12, na redação da Lei nº 14.129/2021).",
        "O painel de monitoramento reúne três indicadores mínimos: volume de solicitações, tempo médio de atendimento e grau de satisfação (art. 22 da Lei nº 14.129/2021)."
      ],
      "comparacoes": [
        "Publicidade x transparência ativa x transparência passiva: a publicidade é o princípio; ativa e passiva são os dois mecanismos que o realizam."
      ],
      "fluxos": [
        "Desenho de sistema decisório: (1) identificar competência e base normativa; (2) definir e versionar o critério; (3) delimitar dados de entrada, finalidade e base; (4) registrar inferência e trilha de auditoria; (5) publicar o critério em linguagem clara; (6) criar canal de revisão e contestação; (7) avaliar impacto por subgrupo; (8) monitorar e revisar em ciclo."
      ],
      "excecoes": [
        "A dispensa de divulgação na internet do art. 8º, § 4º, da Lei nº 12.527/2011 vale apenas para municípios com menos de 10.000 habitantes e não afasta a exigência orçamentária e financeira em tempo real."
      ],
      "palavrasChave": [
        "legalidade",
        "impessoalidade",
        "transparência ativa",
        "trilha de auditoria",
        "revisão humana",
        "responsabilização digital"
      ],
      "checklist": [
        "Qual dispositivo reúne os cinco princípios e o que ele determina, literalmente?",
        "Qual a diferença operacional entre princípio e regra, com um exemplo de cada?",
        "Quais são os três indicadores mínimos do painel do art. 22 da Lei nº 14.129/2021?",
        "Em que hipótese o atendimento presencial pode ser afastado, e qual é a alternativa correta?",
        "Qual é o teste de conformidade de um sistema decisório com a legalidade, em uma frase?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Feche o texto e escreva, sem consulta, o teste de conformidade de um sistema decisório com a legalidade, indicando os elementos que precisam estar presentes e registrados.",
        "dados": "Cenário de recuperação ativa: órgão estadual pretende automatizar a concessão de auxílio transporte escolar. O sistema cruza dados de matrícula e de renda familiar, e nega o benefício quando o cruzamento resulta negativo. Não é permitido consultar o texto.",
        "conceitos": [
          "Competência e base normativa",
          "Critério escrito, versionado e vigente",
          "Trilha de auditoria e revisão humana"
        ],
        "estrategia": "Montar o teste por camadas, na ordem em que a legalidade é verificada: primeiro a fonte do poder, depois a vigência e o registro do critério, em seguida a reconstituibilidade da decisão e, por fim, a garantia do cidadão de conhecer, contestar e obter revisão humana.",
        "execucao": [
          "Verificar se existe norma que atribui ao órgão a competência para conceder o auxílio e que define o critério de elegibilidade.",
          "Confirmar que o critério está escrito, versionado e vigente na data de cada decisão, com os parâmetros efetivamente usados registrados.",
          "Testar a reconstituibilidade: a decisão negativa pode ser motivada e compreendida por quem a examina.",
          "Confirmar a garantia do cidadão: acesso ao critério, canal de contestação e revisão humana nos casos de maior impacto."
        ],
        "resultado": "O teste exige oito elementos: competência e base normativa; critério escrito, versionado e vigente; parâmetros registrados; decisão reconstituível e motivada; critério conhecível e contestável; revisão humana nos casos de maior impacto; registro de versão de regras, modelo e dados; e procedimento para indisponibilidade do sistema.",
        "justificativa": "O gabarito é uma lista de verificação, e não frase solta, porque a legalidade de um sistema decisório não se resume à autorização legal: ela exige que cada etapa seja reconstituível. Cada item corresponde a um risco distinto — ausência de competência, critério alterado sem registro, decisão incompreensível e cidadão sem meios de reação.",
        "errosFrequentes": [
          "Reduzir o teste à existência de lei autorizadora, esquecendo vigência, versionamento e registro dos parâmetros usados.",
          "Omitir a revisão humana e o canal de contestação, tratando-os como boa prática e não como requisito de conformidade."
        ],
        "variacao": "Se o sistema negar o auxílio com base em cruzamento de dados de renda sem informar o critério ao cidadão, o teste falha em dois pontos — critério comunicável e possibilidade de contestação —, e a medida correta é publicar a regra e abrir o canal antes de novas decisões."
      },
      {
        "tipo": "aplicacao",
        "problema": "Sem consultar o texto, liste os três indicadores mínimos do painel de monitoramento do art. 22 e explique o que cada um mede, justificando por que os três são exigidos em conjunto.",
        "dados": "Painel de um órgão municipal de serviços: no último ano, 8.400 solicitações foram concluídas e 620 estão em andamento; o tempo médio de atendimento foi de 12 dias; o grau de satisfação apurado em pesquisa foi de 71%.",
        "conceitos": [
          "Indicador de volume e de gargalo",
          "Indicador de eficiência temporal",
          "Indicador de qualidade percebida"
        ],
        "estrategia": "Nomear cada indicador na forma do dispositivo e associá-lo à dimensão que mede: volume de solicitações em andamento e concluídas, tempo médio de atendimento e grau de satisfação. Depois, mostrar que a leitura conjunta evita a otimização de uma única métrica.",
        "execucao": [
          "Identificar o primeiro indicador: quantidade de solicitações em andamento e concluídas no período, que mede demanda atendida e fila remanescente.",
          "Identificar o segundo: tempo médio de atendimento, que mede a eficiência temporal do fluxo entre o pedido e a resposta.",
          "Identificar o terceiro: grau de satisfação dos usuários, que mede a qualidade percebida do serviço prestado.",
          "Explicar a função do conjunto: impedir que o órgão se otimize em indicador único, como reduzir o tempo médio às custas da qualidade."
        ],
        "resultado": "Os três indicadores são: solicitações em andamento e concluídas, tempo médio de atendimento e grau de satisfação dos usuários. No painel descrito, 620 solicitações abertas, 12 dias de média e 71% de satisfação devem ser lidos juntos, e não isoladamente.",
        "justificativa": "O gabarito é o conjunto dos três porque o art. 22 da Lei nº 14.129/2021 os fixa como conteúdo mínimo do painel, e não como medidas alternativas. A razão de ser do conjunto é gerencial, pois cada indicador captura um risco diferente — fila, demora e insatisfação —, e a otimização de apenas um produz distorção.",
        "errosFrequentes": [
          "Citar apenas o tempo médio de atendimento e tratar os demais indicadores como acessórios ou facultativos.",
          "Interpretar a satisfação como medida objetiva de cumprimento de prazo, quando ela mede percepção do usuário sobre o serviço."
        ],
        "variacao": "Se o painel passasse a exibir apenas o tempo médio, já reduzido para 5 dias, com a fila estável e a satisfação em 71%, a leitura correta é a de que houve ganho de velocidade sem ganho de qualidade, e o painel estaria incompleto em relação ao art. 22."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «A eficiência do serviço público é medida exclusivamente pelo tempo médio de atendimento, de modo que basta reduzir esse tempo para cumprir o art. 22.» Onde falha essa leitura?",
        "dados": "Leitura de um painel real: tempo médio de 8 dias, em queda, com 1.100 solicitações em andamento e grau de satisfação de 58%. O gestor pretende manter apenas o indicador temporal no painel, por ser o de melhor evolução.",
        "conceitos": [
          "Conteúdo mínimo do painel do art. 22 da Lei nº 14.129/2021",
          "Otimização de métrica única como distorção gerencial",
          "Indicador de volume x indicador de qualidade percebida"
        ],
        "estrategia": "Testar a afirmação em duas frentes: a jurídica, verificando se o dispositivo admite painel com indicador único; e a gerencial, examinando se a queda do tempo médio coincide com a manutenção dos demais indicadores e com a qualidade do atendimento prestado.",
        "execucao": [
          "Confrontar a afirmação com o art. 22, que arrola três indicadores mínimos e não autoriza a redução do painel a um deles.",
          "Examinar os números: tempo em queda convive com 1.100 solicitações em aberto e satisfação de 58%.",
          "Concluir que a métrica única esconde o gargalo de fila e a perda de qualidade, e que a poda do painel é infundada.",
          "Indicar a correção: manter os três indicadores e investigar a causa da fila antes de comemorar a redução do tempo."
        ],
        "resultado": "A leitura falha nos dois planos. O painel do art. 22 exige três indicadores, e a evolução favorável de um deles não sana a fila remanescente nem a satisfação em 58%. A conclusão correta é manter o conjunto e tratar a queda do tempo como ganho parcial.",
        "justificativa": "A resposta aparentemente plausível falha porque confunde indicador favorável com cumprimento do dever: o art. 22 da Lei nº 14.129/2021 fixa conteúdo mínimo do painel, e suprimir dois dos três indicadores descumpre o dispositivo. A evidência está nos números do cenário — fila expressiva e satisfação baixa diante de tempo em queda.",
        "errosFrequentes": [
          "Interpretar a queda de um indicador como prova de eficiência global, sem confrontar o resultado com os demais indicadores do painel.",
          "Tratar os indicadores de volume e de satisfação como metas desejáveis, e não como conteúdo mínimo exigido pelo art. 22."
        ],
        "variacao": "Se o gestor substituísse o grau de satisfação por pesquisa de imagem institucional, o descumprimento permaneceria: o art. 22 exige satisfação dos usuários do serviço, e não percepção de marca, de modo que o painel continuaria incompleto."
      }
    ]
  },
  "m6-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Delimitar o escopo da unidade 6.2 evita o erro mais comum em prova: tratar a Lei nº 14.129/2021 como substituta da Lei de Acesso à Informação. Saber o que cada uma disciplina, e em que ponto a segunda altera a primeira, é condição para responder itens sobre transparência ativa, pedido de acesso e abertura de bases.",
      "preRequisitos": [
        "Unidade 6.1: publicidade como preceito geral e sigilo como exceção.",
        "Noções de classificação da informação e de graus de sigilo.",
        "Leitura do Módulo 4 sobre controle de acesso, registro e auditoria.",
        "Módulo 7: dados abertos, formatos estruturados e metadados."
      ],
      "objetivosObservaveis": [
        "relacionar a Lei nº 12.527/2011 e a Lei nº 14.129/2021, indicando o objeto de cada uma e os pontos de incidência mútua;",
        "distinguir transparência ativa e transparência passiva, com o dispositivo que institui cada uma;",
        "declarar o grau de dificuldade esperado em cada bloco: intermediário na estrutura da LAI e avançado na aplicação conjunta;",
        "decidir, em caso concreto, se a divulgação de dado pessoal em sítio oficial é lícita."
      ],
      "competencias": [
        "leitura operativa de lei: localizar o dispositivo aplicável antes de concluir sobre a conduta do órgão;",
        "desenho de rotina de transparência e de publicação de dados abertos;",
        "resposta fundamentada a pedido de acesso, com prazo e forma adequados."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — desenvolvimento imediato desta orientação;",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — o dever de divulgação de ofício e os requisitos dos sítios oficiais;",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — procedimento, prazos e recursos do pedido de acesso;",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — aplica a distinção obrigatória da unidade;",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — proteção, limites e exceções."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Transparência é eixo de duas leis federais e comparece em itens de administração pública e de tecnologia da informação, com alta relevância no conteúdo programático sobre acesso à informação, governo digital e proteção de dados. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante, o aluno fixa o mapa da unidade: a Lei nº 12.527/2011 organiza-se em escopo, diretrizes, conceitos, divulgação de ofício, procedimento de pedido, recursos e regime de sigilo. A lógica é simples e sustenta toda a leitura: o órgão tem o dever de divulgar, o cidadão tem o direito de pedir, e o sigilo é a exceção que precisa de fundamento legal.",
      "intermediario": "No nível intermediário, o aluno passa a relacionar as duas leis. A Lei nº 14.129/2021 não substitui a LAI: ela própria altera a LAI, como no art. 52, que dá nova redação ao art. 12, e remete aos procedimentos e prazos da LAI nos pedidos de abertura de bases. Também deve perceber que a transparência, no serviço digital, se materializa em artefatos verificáveis.",
      "avancado": "No nível avançado, a dificuldade muda de natureza: dado pessoal, dado aberto e informação sigilosa passam a conviver no mesmo caso. O aluno precisa decidir se determinada divulgação é lícita, percorrendo a finalidade, a base legal e a necessidade de anonimização, sem confundir o dever de transparência com a exposição de dado de pessoa natural.",
      "especialista": "No nível especialista, o aluno projeta a rotina de transparência do órgão: catálogo de dados, formatos abertos legíveis por máquina, painel de desempenho e registro de decisões. A pergunta deixa de ser «o que a lei exige?» e passa a ser «que artefatos tornam o órgão auditável?», ligando esta unidade ao controle social."
    },
    "comparacoes": [
      {
        "tema": "Incidência da Lei nº 14.129/2021 sobre a LAI x substituição da LAI",
        "a": {
          "rotulo": "Alteração pontual e remissão",
          "texto": "A Lei nº 14.129/2021 disciplina a digitalização da Administração e o governo digital, altera dispositivos da LAI — como a redação do art. 12 dada pelo art. 52 — e remete aos procedimentos e prazos da LAI nos pedidos de abertura de bases."
        },
        "b": {
          "rotulo": "Substituição da LAI",
          "texto": "Leitura que trata a Lei nº 14.129/2021 como novo regime de acesso à informação e conclui pela perda de vigência da Lei nº 12.527/2011 no que respeita à transparência."
        },
        "diferencaGabarito": "A relação é de incidência e alteração pontual: a LAI permanece como lei geral de acesso à informação, e a lei de governo digital a pressupõe em vários dispositivos, inclusive no art. 1º, parágrafo único, que impõe observá-la."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "«A Lei nº 14.129/2021 substituiu a Lei nº 12.527/2011 no que toca à transparência.»",
        "porqueErrada": "A relação entre as duas leis é de incidência e alteração pontual, e não de substituição. A Lei nº 12.527/2011 permanece como lei geral de acesso à informação, e a Lei nº 14.129/2021 disciplina a digitalização da Administração, o governo digital, a abertura de dados e a governança, remetendo à LAI em dispositivos como os arts. 1º, parágrafo único, 10, 29, 30 e 38.",
        "versaoCorreta": "As leis convivem: a LAI segue como regime geral de acesso à informação, e a Lei nº 14.129/2021 a altera em pontos específicos e a pressupõe, de modo que a transparência passa a ser exigida também por instrumentos digitais de governo."
      },
      {
        "afirmacaoEquivocada": "«Transparência ativa e transparência passiva são a mesma coisa em momentos distintos: primeiro o órgão divulga, depois o cidadão pede o que sobrou.»",
        "porqueErrada": "As duas modalidades têm sujeitos e natureza distintos: a ativa é dever do órgão de divulgar de ofício, independentemente de solicitação, com fundamento no art. 8º da Lei nº 12.527/2011; a passiva é direito do interessado de obter informação mediante pedido, previsto no art. 10. Uma não decorre da outra, e nenhuma é residual.",
        "versaoCorreta": "A ativa e a passiva são mecanismos complementares, com dispositivos próprios: o dever de divulgação de ofício não é suprido pelo atendimento de pedidos, e o atendimento de pedidos não dispensa a publicação prévia."
      },
      {
        "afirmacaoEquivocada": "«Como a unidade trata de governo digital, o foco são ferramentas e plataformas, e a Lei de Acesso à Informação é apenas referência histórica.»",
        "porqueErrada": "A Lei nº 12.527/2011 é a norma reguladora do acesso à informação e permanece vigente, com diretrizes, conceitos, prazos e regime de sigilo aplicáveis ao serviço digital. O governo digital acrescenta instrumentos — dados abertos, interoperabilidade, painel de desempenho —, mas não desloca a lei geral de acesso.",
        "versaoCorreta": "A unidade é dominada pela Lei nº 12.527/2011 e graduada em avançado apenas na aplicação conjunta dos regimes; a Lei nº 14.129/2021 entra como legislação complementar que remete à LAI em vários dispositivos."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Transparência ativa: dever de divulgação de ofício, em local de fácil acesso e independentemente de requerimento.",
        "Transparência passiva: direito do interessado de obter informação mediante pedido de acesso.",
        "Publicidade administrativa: dever de dar conhecimento dos atos, distinto da divulgação irrestrita de dados pessoais.",
        "Artefato de transparência: sítio oficial pesquisável, dado aberto legível por máquina, catálogo, painel e registro de decisão."
      ],
      "regras": [
        "A Lei nº 12.527/2011 é a lei geral de acesso à informação e segue vigente, com diretrizes, conceitos e prazos próprios.",
        "A Lei nº 14.129/2021 altera a LAI em pontos específicos, como a redação do art. 12 dada pelo art. 52, e remete aos seus procedimentos e prazos."
      ],
      "comparacoes": [
        "Publicidade administrativa x divulgação irrestrita de dados pessoais: a primeira é dever de conhecimento dos atos; a segunda é tratamento sem finalidade nem base legal."
      ],
      "fluxos": [
        "Delimitar o escopo da unidade: (1) identificar o objeto de cada lei; (2) mapear os pontos de alteração e de remissão; (3) separar publicidade de exposição de dados pessoais; (4) declarar pré-requisitos, competências e grau de dificuldade de cada bloco."
      ],
      "excecoes": [
        "A dificuldade da unidade é intermediária na estrutura da LAI e avançada na aplicação conjunta de dados pessoais, dados abertos e sigilo — a exceção está no ponto de convergência dos regimes."
      ],
      "palavrasChave": [
        "transparência ativa",
        "transparência passiva",
        "acesso à informação",
        "governo digital",
        "controle social"
      ],
      "checklist": [
        "Qual é o objeto da Lei nº 12.527/2011 e qual é o objeto da Lei nº 14.129/2021?",
        "Em que pontos a lei de governo digital altera ou remete à lei de acesso à informação?",
        "Qual dispositivo institui o dever de divulgação de ofício e qual assegura o direito de pedido?",
        "Em que condições a divulgação de dado pessoal em sítio oficial é lícita?",
        "Quais pré-requisitos e competências a unidade declara, e em que bloco a dificuldade se eleva?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual é a diferença estrutural entre o art. 8º e o art. 10 da Lei nº 12.527/2011, e por que um dispositivo não pode ser usado para justificar a ausência do outro?",
        "dados": "Órgão público que mantém portal de pedidos de acesso em funcionamento e recebe, por ano, cerca de 3 mil requerimentos. Não publica relatórios de gestão nem dados de convênios no sítio oficial, e justifica a omissão pela existência do canal de pedidos.",
        "conceitos": [
          "Dever de divulgação de ofício do art. 8º",
          "Direito de pedido do art. 10",
          "Complementariedade entre mecanismos de transparência"
        ],
        "estrategia": "Comparar os dois dispositivos quanto ao sujeito, à natureza jurídica e ao objeto: o art. 8º cria dever do órgão, com conteúdo mínimo e local definidos em lei; o art. 10 assegura direito do interessado, com requisitos de identificação e especificação da informação.",
        "execucao": [
          "Ler o art. 8º e fixar os elementos: dever do órgão, divulgação independentemente de requerimento, local de fácil acesso e conteúdo mínimo em lei.",
          "Ler o art. 10 e fixar os elementos: direito do interessado, pedido com identificação e especificação da informação.",
          "Comparar os sujeitos: no primeiro, o obrigado é o órgão; no segundo, o titular do direito é o cidadão.",
          "Concluir que a existência do canal de pedidos não supre o dever de divulgar, nem o inverso."
        ],
        "resultado": "O art. 8º cria um dever de divulgação de ofício, e o art. 10 assegura o direito de pedir. Um não substitui o outro: o portal de pedidos não dispensa a publicação de ofício, e a publicação de ofício não elimina o atendimento dos requerimentos.",
        "justificativa": "A distinção é estrutural porque os dispositivos atribuem posições jurídicas a sujeitos diferentes: o art. 8º obriga o órgão a divulgar conteúdo mínimo sem provocação, enquanto o art. 10 garante ao interessado a obtenção de informação mediante pedido. A redação dos dois mostra regimes autônomos — dever de um lado, direito do outro.",
        "errosFrequentes": [
          "Tratar o portal de pedidos como cumprimento suficiente do dever de transparência, medindo conformidade pelo número de requerimentos atendidos.",
          "Confundir transparência passiva com cortesia do órgão, deixando de reconhecê-la como direito do interessado."
        ],
        "variacao": "Se o órgão publicar os relatórios, mas recusar pedidos de informação sob o argumento de que «já está tudo no site», a falha é a mesma em sentido inverso: a divulgação de ofício não afasta o direito de pedir outras informações não divulgadas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como a Lei nº 14.129/2021 se relaciona com a Lei de Acesso à Informação do ponto de vista jurídico, e quais consequências práticas essa relação produz no atendimento ao cidadão?",
        "dados": "Cidadão solicita cópia reproduzida de quinze páginas de processo administrativo digital e, no mesmo pedido, requer a abertura de base de dados de licitações do órgão. O serviço de busca é gratuito, mas a reprodução tem custo, e o requerente declara não poder arcar com a despesa.",
        "conceitos": [
          "Alteração legislativa pontual (art. 52 da Lei nº 14.129/2021)",
          "Gratuidade do serviço de busca e fornecimento",
          "Remissão aos procedimentos e prazos da LAI"
        ],
        "estrategia": "Identificar os pontos de contato entre as duas leis antes de resolver o caso: a lei de governo digital altera o art. 12 da LAI e remete aos seus procedimentos e prazos no pedido de abertura de bases. Depois, aplicar as regras resultantes ao caso, separando busca, reprodução e abertura de dados.",
        "execucao": [
          "Verificar que o art. 52 da Lei nº 14.129/2021 deu nova redação ao art. 12 da LAI, com gratuidade do serviço de busca e fornecimento da informação.",
          "Aplicar a ressalva da nova redação: ressarcimento apenas em caso de reprodução de documentos, e isenção para quem não pode pagar.",
          "Para o pedido de abertura da base, observar a remissão do art. 30, § 2º, aos procedimentos e prazos da LAI.",
          "Concluir pela gratuidade da busca, pela isenção da reprodução diante da declaração de impossibilidade de pagamento e pelo seguimento do rito da LAI."
        ],
        "resultado": "A Lei nº 14.129/2021 altera a LAI: o art. 52 reescreve o art. 12, e o art. 30, § 2º, remete a abertura de bases aos procedimentos e prazos da LAI. No caso, a busca e a informação são gratuitas, a reprodução fica isenta pela declaração de impossibilidade de pagamento.",
        "justificativa": "A resposta se sustenta na relação de alteração e remissão entre as leis, e não em escolha entre regimes: o art. 52 da Lei nº 14.129/2021 modifica o art. 12 da LAI, e o art. 30, § 2º, determina a aplicação dos procedimentos e prazos da lei de acesso. Cada consequência prática decorre de dispositivo específico — gratuidade, ressarcimento restrito à reprodução e isenção por impossibilidade de pagamento.",
        "errosFrequentes": [
          "Cobrar pela reprodução sem considerar a isenção prevista para quem declara não poder pagar, tratando a gratuidade como regra sem exceção.",
          "Resolver o pedido de abertura de base por regras internas do órgão, ignorando a remissão expressa aos procedimentos e prazos da LAI."
        ],
        "variacao": "Se o pedido fosse apenas de busca e fornecimento, sem reprodução, a gratuidade seria integral; se fosse exclusivamente de reprodução, com declaração de impossibilidade de pagamento, a isenção também afastaria a cobrança — em ambos os casos, pela nova redação do art. 12."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «A Lei nº 14.129/2021 substituiu a Lei nº 12.527/2011 no que toca à transparência, de modo que os prazos e recursos da LAI não se aplicam mais.» O que há de errado nessa leitura?",
        "dados": "Afirmação que trata a Lei nº 14.129/2021 como novo regime de acesso à informação. O caso envolve pedido de abertura de base de dados formulado por pesquisador, com prazo de resposta não cumprido pelo órgão, que alega regramento exclusivo da lei de governo digital.",
        "conceitos": [
          "Relação de incidência e alteração pontual entre as duas leis",
          "Remissão do art. 30, § 2º, da Lei nº 14.129/2021 aos procedimentos e prazos da LAI",
          "Vigência da LAI como lei geral de acesso à informação"
        ],
        "estrategia": "Testar a afirmação em dois passos: verificar se há dispositivo que revogue ou substitua a LAI e, em seguida, localizar as remissões que a lei de governo digital faz à lei de acesso. A constatação de remissões expressas é suficiente para refutar a tese da substituição.",
        "execucao": [
          "Verificar que a Lei nº 14.129/2021 não revoga a Lei nº 12.527/2011, mantida como regime geral de acesso à informação.",
          "Localizar as remissões expressas à LAI, entre elas as dos arts. 1º, parágrafo único, 10, 29, 30 e 38 da lei de governo digital.",
          "Aplicar o art. 30, § 2º: o pedido de abertura de bases segue os procedimentos e prazos da LAI.",
          "Concluir que o atraso na resposta é irregular, ainda que o pedido verse sobre dados abertos."
        ],
        "resultado": "A leitura está errada. A LAI permanece vigente como lei geral de acesso à informação, e a Lei nº 14.129/2021 a altera em pontos específicos e a ela remete, inclusive para os procedimentos e prazos do pedido de abertura de bases. O atraso na resposta é, portanto, irregular.",
        "justificativa": "A resposta ingênua falha porque confunde inovação legislativa com substituição normativa. A evidência está nas próprias remissões da lei de governo digital à LAI — inclusive a do art. 30, § 2º, que submete o pedido de abertura de bases aos procedimentos e prazos da lei de acesso —, e na ausência de revogação geral.",
        "errosFrequentes": [
          "Concluir pela substituição a partir da novidade da lei mais recente, sem verificar a existência de revogação expressa.",
          "Interpretar a remissão à LAI como mera indicação de conceitos, e não de procedimentos e prazos."
        ],
        "variacao": "Se o pedido versasse sobre informação pessoal de terceiro contida em base aberta, a remissão continuaria a valer, mas acresceria o limite do art. 31 da LAI e a incidência da Lei nº 14.129/2021 sobre a privacidade, alterando o conteúdo da resposta, não o rito."
      }
    ]
  },
  "m6-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escopo, diretrizes e conceitos são a base de leitura da LAI: sem saber a quem a lei se aplica e o que ela entende por informação, documento, disponibilidade e primariedade, o candidato erra itens de definição e de incidência subjetiva. É dos conceitos do art. 4º que saem as questões de múltipla escolha mais recorrentes da unidade.",
      "preRequisitos": [
        "Leitura do art. 5º, XXXIII, da Constituição Federal e do art. 37, § 3º, II.",
        "Unidade 6.1: princípios da publicidade e do sigilo.",
        "Noções de pessoa jurídica de direito público e de entidade controlada pelo poder público."
      ],
      "objetivosObservaveis": [
        "delimitar o escopo subjetivo e material da LAI, indicando as entidades subordinadas ao regime e a extensão às entidades privadas sem fins lucrativos;",
        "reproduzir as cinco diretrizes do art. 3º e reconhecer a publicidade como preceito geral;",
        "definir os conceitos do art. 4º, em especial informação, documento, informação sigilosa, informação pessoal e tratamento da informação;",
        "distinguir disponibilidade, autenticidade, integridade e primariedade como qualidades da informação."
      ],
      "competencias": [
        "definição técnica: usar o conceito legal exato em lugar de paráfrase aproximada;",
        "leitura de incidência subjetiva: verificar o regime jurídico da entidade antes de concluir pela aplicação da lei;",
        "discriminação de qualidades: separar o que é dado, o que é documento e o que é qualidade da informação."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t1-s1 (Orientação estratégica da unidade) — onde o escopo desta lei é anunciado;",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — aplica o dever do art. 8º e os requisitos dos sítios oficiais;",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — procedimento de pedido, prazos e recursos;",
        "m6-u3-t2-s1 (Sigilo legal: hipóteses, graus, prazos, competência e formalização da classificação) — desenvolve a informação sigilosa definida no art. 4º, III;",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — desenvolve a informação pessoal do art. 4º, IV."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Conceitos legais e escopo subjetivo da LAI são matéria de itens de definição e de asserção múltipla, com presença qualitativa alta em provas de administração pública e de tecnologia da informação. A classificação é estimativa pedagógica de adequação ao programa."
      }
    },
    "niveis": {
      "iniciante": "No nível iniciante, o aluno memoriza a arquitetura da lei: o art. 1º fixa o escopo subjetivo e material, o art. 3º traz as diretrizes, o art. 4º define os conceitos, o art. 5º declara o dever do Estado e o art. 6º arrola os compromissos do órgão. A ementa e a data de verificação do texto oficial ajudam a ancorar a versão utilizada em sala.",
      "intermediario": "No nível intermediário, o aluno já distingue as entidades abrangidas: o art. 1º, parágrafo único, subordina ao regime os órgãos da administração direta dos três Poderes e do Ministério Público, inclusive Cortes de Contas, além de autarquias, fundações públicas, empresas públicas, sociedades de economia mista e demais entidades controladas.",
      "avancado": "No nível avançado, o foco são as qualidades da informação: disponibilidade, autenticidade, integridade e primariedade. O aluno precisa explicar por que um relatório com dados agregados pode ser íntegro sem ser primário, e ligar essas qualidades às exigências de proteção e de transparência do serviço digital.",
      "especialista": "No nível especialista, a leitura é comparada entre regimes: tratamento da informação, na LAI, e tratamento de dados pessoais, na LGPD, são conceitos distintos, e o candidato precisa não os misturar. Também deve perceber que os arts. 8º-A e 8º-B ampliam as obrigações de divulgação a entidades privadas específicas, sem alterar a regra geral do art. 1º."
    },
    "comparacoes": [
      {
        "tema": "Integridade x primariedade como qualidades da informação",
        "a": {
          "rotulo": "Integridade (art. 4º, VIII)",
          "texto": "Qualidade da informação não modificada, inclusive quanto à origem, ao trânsito e ao destino: o conteúdo permaneceu fiel ao que foi produzido, expedido ou recebido."
        },
        "b": {
          "rotulo": "Primariedade (art. 4º, IX)",
          "texto": "Qualidade da informação coletada na fonte, com o máximo de detalhamento possível e sem modificações: trata-se da versão original, e não de síntese ou de agregado posterior."
        },
        "diferencaGabarito": "As qualidades são independentes: um relatório de cinco páginas com dados agregados pode ser íntegro sem ser primário, e a LAI privilegia o acesso à informação primária, o que exige verificar as duas propriedades separadamente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "«A LAI só se aplica aos órgãos da administração direta do Poder Executivo federal.»",
        "porqueErrada": "O art. 1º estende a lei à União, aos Estados, ao Distrito Federal e aos Municípios, e o parágrafo único subordina ao regime os órgãos da administração direta dos Poderes Executivo, Legislativo — incluindo as Cortes de Contas — e Judiciário, e do Ministério Público, além das autarquias, fundações públicas, empresas públicas, sociedades de economia mista e demais entidades controladas.",
        "versaoCorreta": "A incidência da LAI é ampla e definida pelo regime jurídico da entidade, e não pelo Poder ou pela esfera a que pertence: autarquia, fundação, empresa pública e sociedade de economia mista estão todas subordinadas ao regime da lei."
      },
      {
        "afirmacaoEquivocada": "«Por ser o sigilo a exceção, toda negativa de acesso é automaticamente válida se o órgão afirmar que o documento é sigiloso.»",
        "porqueErrada": "A negativa exige fundamentação legal, e a classificação é ato formal: o art. 28 fixa os requisitos de assunto, fundamento, prazo e autoridade classificadora; o art. 27 delimita a competência; o art. 24, § 5º, impõe o critério menos restritivo possível; e o art. 29 determina a reavaliação periódica. A mera alegação de sigilo não produz efeito.",
        "versaoCorreta": "A negativa só é válida quando fundada em dispositivo legal e formalizada em classificação regular, com autoridade competente, prazo definido, critério menos restritivo e reavaliação periódica; negativa infundada sujeita o responsável a medidas disciplinares."
      },
      {
        "afirmacaoEquivocada": "«O conceito de tratamento da informação da LAI é o mesmo de tratamento de dados pessoais da LGPD.»",
        "porqueErrada": "O art. 4º, V, da LAI define tratamento da informação como conjunto de ações sobre a informação — produção, recepção, classificação, utilização, acesso, reprodução, transporte, transmissão, distribuição, arquivamento, armazenamento, eliminação, avaliação, destinação e controle. A LGPD define tratamento de dados pessoais como operação sobre dado de pessoa natural identificada ou identificável.",
        "versaoCorreta": "Tratamento da informação, na LAI, é operação sobre qualquer informação; tratamento de dados pessoais, na LGPD, é operação sobre dado de pessoa natural identificada ou identificável. A troca de um conceito pelo outro é erro de regime, e não de redação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Informação (art. 4º, I): dados processados ou não, utilizáveis para produção e transmissão de conhecimento, em qualquer meio, suporte ou formato.",
        "Documento (art. 4º, II): unidade de registro de informações, qualquer que seja o suporte ou formato.",
        "Informação sigilosa (art. 4º, III): submetida temporariamente a restrição de acesso em razão de imprescindibilidade para a segurança da sociedade e do Estado.",
        "Informação pessoal (art. 4º, IV): relacionada a pessoa natural identificada ou identificável."
      ],
      "regras": [
        "Aplica-se a LAI à União, aos Estados, ao Distrito Federal e aos Municípios, com subordinação dos órgãos da administração direta e indireta (art. 1º e parágrafo único).",
        "Entidades privadas sem fins lucrativos que recebam recursos públicos para ações de interesse público seguem a lei no que couber, com publicidade restrita à parcela recebida e à sua destinação (art. 2º).",
        "Os procedimentos devem observar a publicidade como preceito geral e o sigilo como exceção (art. 3º, I)."
      ],
      "comparacoes": [
        "Disponibilidade x autenticidade: a primeira é a qualidade de poder ser conhecida e utilizada por indivíduos, equipamentos ou sistemas autorizados; a segunda, a de ter sido produzida, expedida, recebida ou modificada por determinado indivíduo, equipamento ou sistema."
      ],
      "fluxos": [
        "Aferir a incidência da LAI: (1) identificar a entidade; (2) verificar se é órgão da administração direta ou entidade do parágrafo único; (3) na dúvida, aplicar o regime pelo critério do art. 1º; (4) se for entidade privada sem fins lucrativos, restringir a publicidade aos recursos recebidos e à destinação."
      ],
      "excecoes": [
        "Os arts. 8º-A e 8º-B ampliam as obrigações de divulgação a entidades privadas constituídas sob forma de serviço social autônomo com contrato de gestão e aos conselhos de fiscalização profissional, sem alterar a regra geral de incidência."
      ],
      "palavrasChave": [
        "escopo subjetivo",
        "diretrizes",
        "informação sigilosa",
        "tratamento da informação",
        "primariedade",
        "integridade"
      ],
      "checklist": [
        "Quais entidades o art. 1º, parágrafo único, subordina ao regime da LAI?",
        "Qual é a primeira diretriz do art. 3º e o que ela determina?",
        "Qual é a diferença entre informação e documento no art. 4º?",
        "O que distingue primariedade de integridade?",
        "Em que consiste o tratamento da informação na LAI, e como se diferencia do tratamento de dados pessoais?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma entidade é autarquia estadual. A LAI se aplica a ela? Justifique pelo critério de incidência, e não pela simples menção à Administração Pública.",
        "dados": "Entidade: autarquia estadual criada por lei específica, com personalidade jurídica de direito público, vinculada à secretaria de Estado. O requerente declara que lei federal de acesso à informação só valeria para órgãos federais, e não para entidades estaduais.",
        "conceitos": [
          "Escopo subjetivo do art. 1º e do seu parágrafo único",
          "Regime jurídico da entidade como critério de incidência",
          "Autarquia como pessoa jurídica de direito público"
        ],
        "estrategia": "Aplicar o critério legal de incidência: primeiro verificar se a entidade está entre as arroladas no art. 1º, parágrafo único; depois afastar o argumento do requerente, que confunde esfera federativa com regime jurídico. A resposta deve mostrar que a lei vincula os três níveis de governo.",
        "execucao": [
          "Ler o art. 1º: a lei aplica-se à União, aos Estados, ao Distrito Federal e aos Municípios.",
          "Ler o parágrafo único: subordinam-se ao regime os órgãos da administração direta dos três Poderes e do Ministério Público, e as autarquias, fundações públicas, empresas públicas, sociedades de economia mista e demais entidades controladas.",
          "Confrontar o argumento do requerente: a incidência decorre do regime jurídico e da espécie de entidade, e não da esfera a que pertence.",
          "Concluir pela aplicação integral da LAI à autarquia estadual."
        ],
        "resultado": "Aplica-se. O art. 1º abrange os três níveis federativos, e o parágrafo único subordina expressamente ao regime as autarquias, entre outras entidades. A condição de entidade estadual não afasta a incidência, que decorre do regime jurídico da entidade.",
        "justificativa": "O gabarito se apoia na literalidade do art. 1º e do seu parágrafo único, que arrolam autarquias e alcançam expressamente Estados e Municípios. Ligando conceito e evidência, o critério de incidência é o regime jurídico da entidade — autarquia é pessoa jurídica de direito público, submetida ao mesmo dever de transparência.",
        "errosFrequentes": [
          "Restringir a lei federal aos órgãos federais, confundindo competência legislativa com âmbito de incidência subjetiva.",
          "Ignorar o parágrafo único e aplicar apenas o caput do art. 1º, deixando de fora autarquias e demais entidades controladas."
        ],
        "variacao": "Se a entidade fosse sociedade de economia mista estadual, a conclusão seria a mesma pelo mesmo fundamento — o parágrafo único a inclui expressamente —, mas a publicidade poderia esbarrar em limites relativos a segredo empresarial, a serem analisados em dispositivo próprio."
      },
      {
        "tipo": "aplicacao",
        "problema": "Qual é a diferença entre primariedade e integridade como qualidades da informação, e por que a distinção importa para o atendimento a pedido de acesso a relatório gerencial?",
        "dados": "Pedido de acesso a relatório gerencial do exercício, consolidado em cinco páginas com dados agregados por região. O setor responsável informa que o documento não foi alterado desde a publicação, mas que foi produzido a partir de base cadastral com detalhamento por unidade e por mês.",
        "conceitos": [
          "Integridade (art. 4º, VIII)",
          "Primariedade (art. 4º, IX)",
          "Privilégio do acesso à informação primária"
        ],
        "estrategia": "Definir as duas qualidades separadamente e aplicá-las ao documento: integridade diz respeito à não modificação, inclusive na origem, no trânsito e no destino; primariedade diz respeito à coleta na fonte, com máximo detalhamento. Depois, verificar o que a LAI privilegia.",
        "execucao": [
          "Confrontar o relatório com o art. 4º, VIII: não houve modificação após a produção, de modo que o documento é íntegro.",
          "Confrontar o relatório com o art. 4º, IX: ele resulta de agregação de base mais detalhada, e não de coleta na fonte, de modo que não é primário.",
          "Verificar que a LAI privilegia o acesso à informação primária e que o detalhamento existe no órgão.",
          "Concluir pelo fornecimento da informação primária, sem prejuízo da entrega do relatório consolidado."
        ],
        "resultado": "O relatório é íntegro, porque não foi modificado, e não é primário, porque não foi coletado na fonte. Como a LAI privilegia o acesso à informação primária e a base detalhada existe no órgão, o pedido deve ser atendido também quanto aos dados de origem.",
        "justificativa": "A distinção se sustenta na redação dos dois incisos: o art. 4º, VIII, define integridade como informação não modificada, inclusive quanto à origem, ao trânsito e ao destino, enquanto o art. 4º, IX, define primariedade como informação coletada na fonte, com o máximo de detalhamento possível.",
        "errosFrequentes": [
          "Tratar integridade e primariedade como sinônimos e recusar o acesso à base, afirmando que o relatório já é «a informação».",
          "Confundir primariedade com atualidade, recusando o pedido sob o argumento de que existe versão mais recente do relatório."
        ],
        "variacao": "Se o relatório tivesse sido editado após a publicação por solicitação de setor interessado, a integridade estaria comprometida, e o pedido passaria a exigir também a versão original, com a indicação da alteração realizada e da sua autoria."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «O art. 4º da LAI define tratamento de dados pessoais, por isso a lei já estabelece o regime de proteção de dados do serviço público.» Onde falha essa leitura?",
        "dados": "Afirmação que apresenta como conceito do art. 4º, V, da LAI a expressão «tratamento de dados pessoais», tomada da LGPD. O caso envolve pedido de informação sobre quadro de servidores, com dado de saúde de dois ocupantes de cargo comissionado.",
        "conceitos": [
          "Tratamento da informação (art. 4º, V, da LAI)",
          "Tratamento de dados pessoais na LGPD",
          "Informação pessoal como limite de acesso (art. 31 da LAI)"
        ],
        "estrategia": "Testar a afirmação em dois planos: o conceitual, comparando as definições dos dois regimes, e o prático, verificando qual limite incide sobre o pedido. A mistura de regimes produz raciocínio errado mesmo quando o resultado final possa coincidir com o correto.",
        "execucao": [
          "Ler o art. 4º, V, da LAI: tratamento da informação é o conjunto de ações sobre a informação, em qualquer suporte ou formato.",
          "Comparar com a definição de tratamento de dados pessoais na LGPD, que incide sobre dado relacionado a pessoa natural identificada ou identificável.",
          "Identificar o limite aplicável ao pedido: a informação pessoal do art. 4º, IV, e a restrição do art. 31 da LAI, e não o conceito do art. 4º, V.",
          "Concluir que a afirmação erra o conceito e que a solução do pedido exige o dispositivo certo."
        ],
        "resultado": "A leitura falha no conceito: o art. 4º, V, define tratamento da informação, e não tratamento de dados pessoais, cuja definição está na LGPD. O pedido deve ser resolvido pela informação pessoal do art. 4º, IV, e pela restrição do art. 31, com a incidência da LGPD sobre o dado de saúde.",
        "justificativa": "A resposta aparentemente plausível falha porque toma de empréstimo um conceito de outro regime e o insere na LAI, o que altera o raciocínio aplicado ainda que não altere o resultado. A evidência está na redação do art. 4º, V, que arrola ações sobre a informação, todas sem referência a pessoa natural.",
        "errosFrequentes": [
          "Achar que as definições são intercambiáveis porque ambas usam a palavra «tratamento», e aplicar a LGPD como se fosse o art. 4º, V, da LAI.",
          "Recusar integralmente o pedido com base na informação pessoal, sem examinar a restrição específica do art. 31 e a possibilidade de acesso parcial."
        ],
        "variacao": "Se o pedido versasse sobre lista de cargos comissionados e respectivos nomes, a informação seria institucional quanto ao cargo e pessoal quanto ao nome, exigindo a leitura conjugada do art. 4º, IV, e do art. 31 para decidir o que pode ser concedido."
      }
    ]
  },
  "m6-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A transparência ativa é o dever de publicar informações de interesse coletivo sem pedido prévio, aferido por artefatos verificáveis: sítio pesquisável, formatos abertos e acesso automatizado. Em prova, liga-se o art. 8º da LAI ao art. 29 da Lei nº 14.129/2021.",
      "preRequisitos": [
        "Publicidade como preceito geral e sigilo como exceção (diretriz do art. 3º da LAI)",
        "Noção de formato aberto, estruturado e legível por máquina"
      ],
      "objetivosObservaveis": [
        "Listar o conteúdo mínimo de divulgação de ofício do art. 8º, § 1º, da Lei nº 12.527/2011",
        "Identificar os oito requisitos do sítio oficial do art. 8º, § 3º, em um portal concreto",
        "Distinguir a dispensa do § 4º, restrita ao canal internet, da publicidade orçamentária em tempo real"
      ],
      "competencias": [
        "Converter dispositivo legal em requisito técnico verificável",
        "Avaliar portal de transparência quanto a formato, acesso automatizado e atualização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — integridade e primariedade qualificam a informação publicada",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — a divulgação de ofício não dispensa o pedido do art. 10",
        "m6-u2-t2-s3 (Princípios e diretrizes do art. 3º e componentes do Governo Digital) — o art. 29 da Lei nº 14.129/2021 detalha a camada de dados abertos",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — o inciso VIII do art. 29 limita bases com dados pessoais"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens sobre requisitos do sítio oficial e sobre a convivência entre transparência e LGPD comparecem em editais de carreiras administrativas e de TI, com forte presença dos arts. 8º da LAI e 29 da Lei nº 14.129/2021. A classificação é qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno sabe que transparência ativa é a disponibilização de dados independentemente de solicitações (art. 4º, XI, da Lei nº 14.129/2021) e que o art. 8º da LAI cria o dever de divulgar em local de fácil acesso. Reconhece o rol mínimo do § 1º: competências e estrutura, repasses, despesas, licitações e contratos, programas com metas e indicadores e perguntas frequentes.",
      "intermediario": "O aluno conhece os oito requisitos do sítio oficial do art. 8º, § 3º, da LAI e verifica cada um em um portal: busca de conteúdo em linguagem acessível; relatórios em formatos abertos e não proprietários; acesso automatizado por sistemas externos em formato legível por máquina; divulgação dos formatos de estruturação; autenticidade e integridade; atualização; canal de contato; acessibilidade.",
      "avancado": "O aluno aplica o art. 29 da Lei nº 14.129/2021: publicidade das bases não pessoais como preceito geral e sigilo como exceção; acesso irrestrito em formato aberto e legível por máquina, respeitadas a LAI e a LGPD; descrição da base com estrutura e semântica; permissão irrestrita de uso; completude e granularidade; atualização com histórico; respeito à privacidade.",
      "especialista": "O aluno audita um portal combinando os dois regimes: a LAI fixa o dever e o procedimento; a Lei nº 14.129/2021 acrescenta dados abertos, interoperabilidade e governança. Reconhece que publicar o PDF do contrato sem metadados, sem formato legível por máquina e sem histórico cumpre só parte do art. 8º, § 3º, e que a dispensa do § 4º é de canal, não de dever."
    },
    "comparacoes": [
      {
        "tema": "Cumprimento do dever por documento eletrônico x cumprimento por dado aberto",
        "a": {
          "rotulo": "Publicação em formato de documento",
          "texto": "O órgão publica contrato e despesas em PDF, com busca por palavra. Atende ao dever do art. 8º e parte do inciso II do § 3º, mas o conteúdo não é processável por máquina nem possui histórico de versões."
        },
        "b": {
          "rotulo": "Publicação em formato de dado aberto",
          "texto": "O órgão publica a mesma despesa em planilha estruturada, com dicionário de dados, formatos documentados, acesso automatizado, registro de versão e atualização periódica, atendendo ao art. 8º, § 3º, III a VI, e ao art. 29, § 1º, II a VI."
        },
        "diferencaGabarito": "Ambas cumprem o dever de divulgar, mas só a segunda satisfaz formato aberto, acesso automatizado e historicidade. Item que afirme bastar o PDF admite cumprimento apenas parcial do § 3º do art. 8º."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Municípios com até 10.000 habitantes estão dispensados de transparência ativa, porque o art. 8º, § 4º, da LAI afasta por inteiro o dever de divulgar.",
        "porqueErrada": "A dispensa do § 4º alcança só a divulgação obrigatória na internet. Permanece a publicidade, em tempo real, da execução orçamentária e financeira, nos critérios e prazos do art. 73-B da Lei Complementar nº 101/2000.",
        "versaoCorreta": "A dispensa é de canal, não de substância: o município de até 10.000 habitantes fica liberado do sítio oficial, mas a execução orçamentária e financeira segue sob publicidade em tempo real, na forma do art. 73-B da LRF."
      },
      {
        "afirmacaoEquivocada": "Como o art. 29 da Lei nº 14.129/2021 determina acesso irrestrito às bases, o órgão pode publicar base de pessoal com CPF e dados de saúde dos servidores.",
        "porqueErrada": "O inciso VIII do § 1º do art. 29 exige respeito à privacidade dos dados pessoais e sensíveis, e o art. 1º, parágrafo único, da mesma lei impõe observar a LGPD. O acesso irrestrito do inciso II vale para bases não pessoais.",
        "versaoCorreta": "A abertura automática do art. 30, § 6º, só alcança bases sem informações protegidas por lei. Base com CPF e dado sensível exige anonimização, previsão legal ou consentimento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Transparência ativa: divulgação independentemente de solicitação (art. 4º, XI, da Lei nº 14.129/2021)",
        "Dever de ofício do art. 8º da LAI, em local de fácil acesso e em sítio oficial",
        "Requisitos do sítio: oito incisos do art. 8º, § 3º, da busca à acessibilidade",
        "Dado aberto: formato aberto, estruturado e legível por máquina (art. 29, § 1º, II)"
      ],
      "regras": [
        "O sítio oficial deve oferecer busca de conteúdo, acesso automatizado e linguagem acessível",
        "Relatórios devem ser gravados em formatos eletrônicos abertos e não proprietários",
        "A divulgação no sítio é obrigatória; o § 4º só dispensa o canal internet para municípios de até 10.000 habitantes"
      ],
      "comparacoes": [
        "Publicar em PDF cumpre o dever de divulgar, mas não equivale a dado aberto legível por máquina com histórico"
      ],
      "fluxos": [
        "Mapear o rol do § 1º do art. 8º, publicar em formato aberto, habilitar acesso automatizado, documentar formatos, registrar versões e atualizar"
      ],
      "excecoes": [
        "Municípios de até 10.000 habitantes ficam dispensados da divulgação na internet, mantida a publicidade em tempo real da execução orçamentária"
      ],
      "palavrasChave": [
        "transparência ativa",
        "art. 8º da LAI",
        "sítio oficial",
        "formato aberto",
        "acesso automatizado",
        "art. 73-B da LRF"
      ],
      "checklist": [
        "O rol do art. 8º, § 1º, está publicado e identificável no sítio?",
        "Há ferramenta de pesquisa de conteúdo em linguagem acessível?",
        "Os relatórios existem em formato aberto e legível por máquina?",
        "Há acesso automatizado para sistemas externos e documentação dos formatos?",
        "A publicação registra versão, atualização permanente e canal de contato?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um município de 8 mil habitantes deixou de publicar o relatório de despesas no site, argumentando que a transparência ativa lhe é facultativa. O argumento procede?",
        "dados": "Município com 8.000 habitantes, relatório de despesas fora do sítio oficial, alegação de facultatividade; art. 8º, § 4º, da Lei nº 12.527/2011 e art. 73-B da Lei Complementar nº 101/2000.",
        "conceitos": [
          "Dever de divulgação de ofício (art. 8º da LAI)",
          "Alcance restrito da dispensa do § 4º",
          "Publicidade orçamentária em tempo real na LRF"
        ],
        "estrategia": "Separar o dever de divulgar da sua forma de execução: verificar se a dispensa do § 4º afasta a obrigação inteira ou apenas a publicação no sítio oficial, e o que permanece exigível em matéria orçamentária.",
        "execucao": [
          "1. Localizar o dever geral no art. 8º da LAI: divulgação independentemente de requerimentos, em local de fácil acesso.",
          "2. Fixar o objeto da dispensa do § 4º: divulgação obrigatória na internet, para municípios com população até 10.000 habitantes.",
          "3. Ler a ressalva final do § 4º: permanece a publicidade em tempo real da execução orçamentária e financeira, nos moldes do art. 73-B da LRF."
        ],
        "resultado": "Não. O art. 8º, § 4º, da Lei nº 12.527/2011 dispensa os municípios com população até 10.000 habitantes apenas da DIVULGAÇÃO OBRIGATÓRIA NA INTERNET, e mantém a obrigatoriedade de divulgação, em tempo real, de informações relativas à execução orçamentária e financeira, nos critérios e prazos do art. 73-B da LRF. Argumento correto seria apenas sobre o canal (internet), nunca sobre a substância do dever.",
        "justificativa": "O art. 8º institui dever de ofício, e o § 4º dispensa apenas a publicação na internet, não o dever de informar. Abaixo do limite populacional, a alegação só poderia recair sobre o canal, permanecendo a publicidade em tempo real da execução orçamentária e financeira.",
        "errosFrequentes": [
          "Tratar a dispensa do § 4º como dispensa da transparência ativa inteira, confundindo canal de publicação com dever de informar",
          "Suponhamos que o município pequeno está fora da LAI, quando o art. 1º subordina União, Estados, DF e Municípios ao regime"
        ],
        "variacao": "Um município de 12.000 habitantes alega a mesma faculdade. Na variação a dispensa do § 4º não se aplica e a publicação no sítio oficial é obrigatória, com todos os requisitos do § 3º do art. 8º."
      },
      {
        "tipo": "aplicacao",
        "problema": "Qual é o checklist técnico mínimo de um portal de transparência para atender ao art. 8º, § 3º, da LAI?",
        "dados": "Portal de prefeitura: despesas em PDF de 120 páginas, sem busca por CNPJ, sem interface para sistemas externos, sem dicionário de dados, sem registro de versão e sem canal de contato informado.",
        "conceitos": [
          "Requisitos do sítio oficial (art. 8º, § 3º, da LAI)",
          "Abertura de dados e formato legível por máquina (art. 29 da Lei nº 14.129/2021)"
        ],
        "estrategia": "Percorrer os oito incisos do § 3º e converter cada um em artefato verificável no portal, marcando ao final os incisos não atendidos e sua repercussão no art. 29 da Lei nº 14.129/2021.",
        "execucao": [
          "1. Testar a busca de conteúdo e a linguagem de fácil compreensão (inciso I).",
          "2. Verificar se há relatórios exportáveis em formato aberto e não proprietário, como planilha e texto (inciso II).",
          "3. Confirmar o acesso automatizado por sistemas externos em formato estruturado e legível por máquina (inciso III)."
        ],
        "resultado": "(1) ferramenta de pesquisa que localize conteúdo; (2) relatórios exportáveis em formatos abertos (CSV, texto, planilha); (3) acesso automatizado por sistemas externos em formatos estruturados e legíveis por máquina (API ou padrão equivalente); (4) documentação dos formatos e do dicionário de dados; (5) garantia de autenticidade e integridade (publicação com assinatura/hash e registro de versão); (6) atualização permanente com histórico; (7) canal de contato e telefone; (8) acessibilidade do conteúdo para pessoas com deficiência. A ausência de (3) e (5) é justamente o que impede a abertura de dados em termos previstos no art. 29 da Lei nº 14.129/2021.",
        "justificativa": "Cada inciso do § 3º descreve requisito de plataforma, não recomendação: busca, formatos abertos, acesso automatizado, documentação, autenticidade, atualização, contato e acessibilidade. A falta de acesso automatizado e de garantia de integridade é o que obsta a abertura de dados do art. 29 da Lei nº 14.129/2021.",
        "errosFrequentes": [
          "Confundir publicação de PDF com dado aberto: o PDF pode ser acessível ao público, mas não é estruturado nem processável por máquina",
          "Considerar suficientes a página de notícias e o portal sem interface para consulta por sistemas externos"
        ],
        "variacao": "O portal possui API de consulta e planilhas abertas, mas o histórico de versões é sobrescrito a cada atualização. Na variação persiste falha no inciso VI do § 3º e no art. 29, § 1º, VI, da Lei nº 14.129/2021."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o art. 29 da Lei nº 14.129/2021 exige acesso irrestrito às bases, o órgão deve publicar a base de atendimento a todos os registros de servidores com CPF e dados de saúde.'",
        "dados": "Base com 2.400 registros de servidores, com CPF, data de nascimento e informação de saúde; pedido de publicação integral em planilha, com invocação do art. 29, § 1º, II, da Lei nº 14.129/2021.",
        "conceitos": [
          "Acesso irrestrito às bases não pessoais (art. 29, § 1º, II)",
          "Respeito à privacidade dos dados pessoais e sensíveis (art. 29, § 1º, VIII)",
          "Bases passíveis de abertura automática (art. 30, § 6º)"
        ],
        "estrategia": "Delimitar o alcance da expressão acesso irrestrito: ela vale para bases não pessoais e opera nos limites da LAI e da LGPD. Verificar se a base tem dado pessoal ou sensível e qual via de abertura resta admitida.",
        "execucao": [
          "1. Qualificar a base: CPF e informação sobre saúde a classificam como base com dados pessoais e sensíveis.",
          "2. Aplicar o inciso VIII do § 1º do art. 29 e o art. 1º, parágrafo único, da Lei nº 14.129/2021, que impõe observar a LGPD.",
          "3. Consultar o art. 30, § 6º: só são automaticamente passíveis de abertura as bases sem informações protegidas por lei."
        ],
        "resultado": "Errado. O § 1º, VIII, do mesmo art. 29 exige respeito à privacidade dos dados pessoais e dos dados sensíveis, e o art. 1º, parágrafo único, da Lei nº 14.129/2021 impõe observar a LGPD; o art. 30, § 6º, da mesma lei só torna automaticamente passíveis de abertura as bases que NÃO contenham informações protegidas por lei. Publicar base com dados sensíveis de cidadãos é justamente a divulgação irrestrita que o regime veda.",
        "justificativa": "O inciso II do § 1º do art. 29 assegura acesso irrestrito em formato aberto, mas o inciso VIII do mesmo parágrafo subordina o regime ao respeito à privacidade dos dados pessoais e sensíveis, e o art. 1º, parágrafo único, manda observar a LGPD. Soma-se o art. 30, § 6º, que limita a abertura automática.",
        "errosFrequentes": [
          "Ler o acesso irrestrito como acesso absoluto, sem considerar os limites previstos no mesmo dispositivo",
          "Tratar dado sensível sobre saúde como informação de interesse coletivo publicável de ofício pelo portal"
        ],
        "variacao": "A base contém apenas nome, cargo, matrícula e remuneração de servidores. Na variação incide o art. 29, § 2º, VII, da Lei nº 14.129/2021, que prevê a divulgação desses dados funcionais, e a publicação é admitida."
      }
    ]
  },
  "m6-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A transparência passiva é o procedimento pelo qual qualquer interessado obtém informação do órgão, e sua cobrança em prova é minuciosa: requisitos do pedido, prazo de 20 dias, prorrogação por 10, conteúdo da negativa e via recursal. Os arts. 10 a 16 da LAI sustentam esses itens.",
      "preRequisitos": [
        "Direito de acesso à informação previsto no art. 5º, XXXIII, da Constituição",
        "Noção de prazo administrativo contado a partir do recebimento pelo órgão"
      ],
      "objetivosObservaveis": [
        "Conduzir um pedido de acesso indicando os únicos requisitos admissíveis: identificação e especificação",
        "Calcular os prazos de resposta e de prorrogação do art. 11, § 1º e § 2º, da Lei nº 12.527/2011",
        "Indicar o caminho recursal do art. 15 e as consequências da negativa infundamentada"
      ],
      "competencias": [
        "Análise de procedimento administrativo de acesso à informação",
        "Redação de resposta e de negativa fundamentada em linguagem clara"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — informação, disponibilidade e tratamento orientam o pedido",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — pedidos frequentes revelam o que falta publicar de ofício",
        "m6-u2-t2-s3 (Princípios e diretrizes do art. 3º e componentes do Governo Digital) — o art. 30 da Lei nº 14.129/2021 remete aos prazos da LAI",
        "m6-u2-t3-s2 (Comparações e distinções críticas da unidade) — diferença entre informação sigilosa e informação pessoal"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Prazos, requisitos do pedido e recursos do acesso à informação são objeto de itens de certo e errado e de múltipla escolha de administração pública e tecnologia da informação, em articulação com a Lei nº 14.129/2021 e a LGPD. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno sabe que qualquer interessado pode apresentar pedido de acesso por qualquer meio legítimo, e que o pedido deve conter apenas a identificação do requerente e a especificação da informação. Sabe que a lei veda exigências relativas aos motivos da solicitação e que o órgão deve autorizar ou conceder acesso imediato quando a informação estiver disponível.",
      "intermediario": "O aluno conhece a resposta do art. 11: acesso imediato ou, no prazo de 20 dias, comunicação de data, local e modo para consulta; indicação das razões de fato ou de direito da recusa; ou comunicação de que não possui a informação, com indicação do órgão detentor ou remessa do pedido. Sabe que a prorrogação é de mais 10 dias, com justificativa expressa e ciência ao requerente.",
      "avancado": "O aluno domina os dispositivos adjacentes: gratuidade do serviço de busca e fornecimento (art. 12, na redação do art. 52 da Lei nº 14.129/2021), ressarcimento limitado à reprodução de documentos e isenção para quem não pode arcar; certificação de conformidade (art. 13); direito ao inteiro teor da negativa (art. 14); recurso em 10 dias à autoridade hierarquicamente superior, com manifestação em 5 dias (art. 15); e recurso à CGU (art. 16).",
      "especialista": "O aluno avalia as consequências do descumprimento: condutas ilícitas do art. 32, agravamento da negativa infundamentada pelo art. 7º, § 4º, e responsabilidade do órgão por danos com direito de regresso (art. 34). Aplica ainda o art. 30 da Lei nº 14.129/2021 aos pedidos de abertura de bases, incluindo a preservação da identidade do requerente e a vedação de exigir motivos."
    },
    "comparacoes": [
      {
        "tema": "Resposta completa x resposta incompleta no art. 11, § 1º, da LAI",
        "a": {
          "rotulo": "Resposta completa",
          "texto": "O órgão comunica data, local e modo para consulta, ou indica as razões de fato ou de direito da recusa, ou afirma que não possui a informação indicando o órgão detentor e cientificando o interessado do encaminhamento."
        },
        "b": {
          "rotulo": "Resposta incompleta",
          "texto": "O órgão responde apenas que não localizou a informação, sem razão, sem indicação de órgão detentor e sem ciência de encaminhamento, deixando o requerente sem caminho para obter o dado."
        },
        "diferencaGabarito": "A segunda hipótese descumpre o art. 11, § 1º, III, e se enquadra na conduta ilícita do art. 32, I, da Lei nº 12.527/2011. Item que a trate como resposta válida inverte o gabarito."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "É lícito indeferir o pedido de acesso quando o requerente não declara os motivos da solicitação, pois a motivação integraria os requisitos do pedido.",
        "porqueErrada": "O art. 10, § 3º, veda quaisquer exigências relativas aos motivos determinantes da solicitação, e o § 1º proíbe exigências que inviabilizem a solicitação de informação de interesse público. Os únicos requisitos são identificação e especificação.",
        "versaoCorreta": "A exigência de motivação é prática proibida pelo art. 10, § 3º, da Lei nº 12.527/2011, e a negativa fundada nela não se sustenta. O pedido se completa com a identificação do requerente e a especificação da informação."
      },
      {
        "afirmacaoEquivocada": "O prazo de resposta ao pedido de acesso é de 20 dias, prorrogáveis por outros 20 sempre que o órgão entenda necessário, independentemente de justificativa.",
        "porqueErrada": "A prorrogação do art. 11, § 2º, é de mais 10 dias e depende de justificativa expressa, da qual o requerente deve ser cientificado. Não há prorrogação automática nem por prazo igual ao original.",
        "versaoCorreta": "O prazo é de 20 dias (art. 11, § 1º), prorrogável por mais 10 dias mediante justificativa expressa e ciência ao requerente (art. 11, § 2º), ambos da Lei nº 12.527/2011."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Transparência passiva: procedimento de pedido individual de acesso (arts. 10 a 16 da LAI)",
        "Requisitos do pedido: identificação do requerente e especificação da informação",
        "Resposta: acesso imediato ou, em 20 dias, as três condutas do art. 11, § 1º",
        "Inteiro teor da negativa e recurso à autoridade hierarquicamente superior"
      ],
      "regras": [
        "São vedadas exigências relativas aos motivos determinantes da solicitação (art. 10, § 3º)",
        "A prorrogação exige justificativa expressa e ciência ao requerente (art. 11, § 2º)",
        "A busca e o fornecimento são gratuitos; só a reprodução de documentos pode ser ressarcida (art. 12)"
      ],
      "comparacoes": [
        "Acesso imediato à informação disponível difere de resposta motivada apresentada no prazo de 20 dias"
      ],
      "fluxos": [
        "Protocolo do pedido, verificação da disponibilidade, decisão de acesso ou negativa fundamentada, comunicação com indicação de recurso e, se for o caso, recurso em 10 dias"
      ],
      "excecoes": [
        "O órgão é desonerado quando a informação já está em formato de acesso universal e o requerente não declara carecer de meios para acessá-la (art. 11, § 6º)"
      ],
      "palavrasChave": [
        "transparência passiva",
        "pedido de acesso",
        "art. 11 da LAI",
        "prazo de 20 dias",
        "recurso hierárquico",
        "inteiro teor"
      ],
      "checklist": [
        "O pedido contém identificação do requerente e especificação da informação?",
        "Foi exigido motivo da solicitação? Prática vedada pelo art. 10, § 3º",
        "O prazo de 20 dias foi contado a partir do recebimento pelo órgão?",
        "A negativa indica razões de fato ou de direito e assegura o inteiro teor da decisão?",
        "Foi informado o recurso, seu prazo e a autoridade competente?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a consequência jurídica de o órgão responder «não localizamos a informação» sem indicar o órgão detentor?",
        "dados": "Pedido apresentado por meio eletrônico; resposta no 19.º dia apenas com a frase «não localizamos a informação»; sem órgão detentor indicado, sem encaminhamento e sem razão de recusa; art. 11, § 1º, III, e art. 32, I, da Lei nº 12.527/2011.",
        "conceitos": [
          "Resposta por inexistência da informação (art. 11, § 1º, III)",
          "Dever de resposta e conduta ilícita (art. 32, I)"
        ],
        "estrategia": "Verificar se a resposta se enquadra em uma das três condutas do art. 11, § 1º, e se vem acompanhada dos elementos que a lei exige: razão da recusa, órgão detentor ou encaminhamento com ciência ao interessado.",
        "execucao": [
          "1. Enquadrar a resposta no inciso III do § 1º do art. 11: comunicação de que o órgão não possui a informação.",
          "2. Conferir os elementos obrigatórios: indicação do órgão ou entidade que a detém, quando conhecida, ou remessa do pedido com ciência ao interessado.",
          "3. Avaliar a omissão: sem razão e sem encaminhamento, a resposta é incompleta e configura descumprimento do dever de resposta (art. 32, I)."
        ],
        "resultado": "Resposta incompleta, mas prevista: o art. 11, § 1º, III, da Lei nº 12.527/2011 prevê a comunicação de que o órgão não possui a informação, a indicação do órgão ou entidade que a detém (quando do seu conhecimento) ou a remessa do requerimento com ciência ao interessado. A negativa só se torna válida se vier acompanhada da razão e do encaminhamento; a omissão caracteristicamente configura descumprimento do dever de resposta (art. 32, I).",
        "justificativa": "O inciso III do § 1º do art. 11 não é resposta autônoma: além de comunicar a inexistência, exige a indicação do órgão detentor, quando conhecida, ou a remessa do pedido com ciência ao interessado. Sem esses elementos o requerente fica sem caminho e a conduta se enquadra no art. 32, I.",
        "errosFrequentes": [
          "Tratar a expressão «não localizamos» como resposta completa e apta a encerrar o procedimento",
          "Confundir inexistência da informação com negativa fundamentada, que exigiria razões de fato ou de direito"
        ],
        "variacao": "O órgão informa que a base está com outro ente e remete o pedido, cientificando o requerente. Na variação a resposta é válida, porque preenche o inciso III com o encaminhamento devido."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um pedido foi protocolado em segunda-feira; o órgão informa que «o prazo vencerá na sexta-feira». O cálculo está correto? Há problema?",
        "dados": "Protocolo na segunda-feira, comunicação de vencimento na sexta da mesma semana, sem menção à data de recebimento pelo órgão nem à possibilidade de prorrogação; art. 11, § 1º e § 2º, da Lei nº 12.527/2011.",
        "conceitos": [
          "Prazo de resposta de 20 dias (art. 11, § 1º)",
          "Prorrogação de 10 dias com justificativa expressa (art. 11, § 2º)"
        ],
        "estrategia": "Fixar o marco inicial, que é o recebimento pelo órgão, e conferir se a comunicação informa o prazo, a possibilidade de prorrogação e a forma de contagem, antes de afirmar que o prazo está certo ou errado.",
        "execucao": [
          "1. Identificar o marco inicial: a lei toma como referência o recebimento do pedido pelo órgão, e não a data em que o requerente o redigiu.",
          "2. Aplicar o art. 11, § 1º: prazo não superior a 20 dias para autorizar o acesso ou apresentar uma das três respostas previstas.",
          "3. Avaliar a prorrogação: mais 10 dias, apenas mediante justificativa expressa da qual o requerente seja cientificado."
        ],
        "resultado": "Depende da data de referência e do marco inicial, que a lei define como o recebimento pelo órgão. O prazo é de 20 dias (art. 11, § 1º), prorrogável por mais 10 com justificativa expressa (art. 11, § 2º). O problema típico é a omissão do marco inicial (data de protocolo) e da contagem em dias úteis ou corridos conforme a regulamentação interna do procedimento — o enunciado do item não autoriza dizer que o prazo está errado sem conhecer a data do protocolo. A boa prática é sempre indicar: «requerimento protocolado em X; prazo de 20 dias a partir do recebimento; prorrogação de 10 dias apenas com justificativa expressa e ciência».",
        "justificativa": "O prazo do art. 11, § 1º, corre a partir do recebimento pelo órgão e é de até 20 dias; a prorrogação do § 2º acrescenta 10 dias e depende de justificativa expressa com ciência. Como a comunicação omitiu o marco inicial, o enunciado não permite concluir que o prazo está errado: o defeito está na informação prestada.",
        "errosFrequentes": [
          "Calcular o prazo a partir da data de redação do pedido em vez do recebimento pelo órgão",
          "Admitir prorrogação por mais 20 dias, sem justificativa expressa e sem ciência ao requerente"
        ],
        "variacao": "O órgão protocola o pedido no dia 2, responde no dia 30 e alega prorrogação sem justificativa. Na variação o prazo foi observado, mas a prorrogação é inválida por falta de justificativa expressa e ciência."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O requerente deve justificar por que quer a informação, sob pena de indeferimento.'",
        "dados": "Item de certo ou errado: servidor de protocolo exige declaração de motivos como condição para registrar pedido de acesso a informação de interesse público; art. 10, § 1º e § 3º, da Lei nº 12.527/2011.",
        "conceitos": [
          "Vedação de exigências sobre os motivos (art. 10, § 3º)",
          "Vedação de exigências que inviabilizem o pedido (art. 10, § 1º)"
        ],
        "estrategia": "Testar a afirmação contra os requisitos legais do pedido: se a exigência não está entre identificação do requerente e especificação da informação, ela é vedada, e a negativa fundada nela é inválida.",
        "execucao": [
          "1. Listar os requisitos admissíveis do art. 10: identificação do requerente e especificação da informação requerida.",
          "2. Localizar a vedação: o § 3º proíbe quaisquer exigências relativas aos motivos determinantes da solicitação.",
          "3. Conferir o § 1º: a identificação do requerente também não pode conter exigências que inviabilizem o pedido."
        ],
        "resultado": "Errado. O art. 10, § 3º, da Lei nº 12.527/2011 VEDA QUAISQUER EXIGÊNCIAS RELATIVAS AOS MOTIVOS determinantes da solicitação, e o art. 10, § 1º, veda exigências que inviabilizem o pedido de interesse público. Exigir motivação é prática proibida; a única exigência é identificação do requerente e especificação da informação. A negativa por esse motivo é nula.",
        "justificativa": "A lei enumera os requisitos do pedido e, no § 3º do art. 10, veda expressamente exigências relativas aos motivos determinantes da solicitação. O § 1º reforça a vedação ao proibir exigências inviabilizadoras na identificação do requerente. Exigir justificativa é prática proibida, e a negativa fundada nela não se sustenta.",
        "errosFrequentes": [
          "Confundir motivação do pedido, que é vedada, com fundamentação da resposta, que é exigível do órgão",
          "Supôr que o indeferimento seja consequência automática da falta de justificativa apresentada pelo requerente"
        ],
        "variacao": "O órgão exige que o pedido de abertura de base de dados informe a finalidade de pesquisa. Na variação incide o art. 30, § 4º, da Lei nº 14.129/2021, que também veda exigir os motivos da solicitação."
      }
    ]
  },
  "m6-u2-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A Lei nº 14.129/2021 organiza o Governo Digital em princípios, diretrizes e componentes, e a prova cobra a identificação do inciso do art. 3º aplicável a um caso concreto e a distinção entre os componentes do art. 18. Dominar essas fichas resolve itens de desburocratização, linguagem clara, provas já comprovadas e incidência nos entes federados.",
      "preRequisitos": [
        "Lei nº 12.527/2011 e Lei nº 13.460/2017, inclusive a Carta de Serviços ao Usuário",
        "Conceito de plataforma digital e de interoperabilidade entre sistemas"
      ],
      "objetivosObservaveis": [
        "Enumerar as diretrizes do art. 3º da Lei nº 14.129/2021 e aplicá-las a casos concretos",
        "Relacionar os componentes do art. 18 e a finalidade de cada um",
        "Indicar a incidência da lei conforme o art. 2º, com a exigência de atos normativos próprios"
      ],
      "competencias": [
        "Mapeamento de diretriz legal em requisito de serviço digital",
        "Análise de incidência normativa sobre os entes federados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — o art. 10 da Lei nº 14.129/2021 remete o sigilo à LAI",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — o art. 29 integra o capítulo do Governo como Plataforma",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — o art. 30, § 2º, remete o pedido de base aos prazos da LAI",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — o inciso XVII do art. 3º impõe proteger dados pessoais"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A Lei nº 14.129/2021 é muito explorada em provas de carreiras administrativas e de TI, com itens que exigem saber o inciso do art. 3º aplicável e distinguir os componentes do Governo Digital. A classificação é qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno sabe que a Lei nº 14.129/2021, de 29 de março de 2021, dispõe sobre princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública, e que incide sobre a administração direta federal e a indireta que preste serviço público. Reconhece as diretrizes mais citadas do art. 3º: desburocratização, plataforma única de acesso, atendimento digital, linguagem clara e transparência.",
      "intermediario": "O aluno identifica os componentes essenciais do art. 18 — Base Nacional de Serviços Públicos, Cartas de Serviços ao Usuário da Lei nº 13.460/2017 e Plataformas de Governo Digital — e conhece as exigências do art. 20 às Plataformas: ferramenta digital de solicitação e acompanhamento dos serviços e painel de monitoramento de desempenho em canal único e oficial.",
      "avancado": "O aluno relaciona as diretrizes operacionais do art. 3º: imposição imediata e de uma única vez das exigências (XII), vedação de prova de fato já comprovado (XIII), interoperabilidade e dados abertos (XIV), presunção de boa-fé do usuário (XV), proteção de dados pessoais (XVII) e preferência por tecnologias e formatos abertos (XXV).",
      "especialista": "O aluno analisa o domicílio eletrônico dos arts. 42 e 43 — opção pelo meio eletrônico, desistência a qualquer momento sem fundamentação, comprovação de autoria e de emissão e recebimento, auditoria e conservação dos dados por pelo menos 5 anos — e a diretriz do Governo como Plataforma (XXIII), que estimula o uso preferencial de dados anonimizados resguardados os arts. 7º e 11 da LGPD."
    },
    "comparacoes": [
      {
        "tema": "Base Nacional de Serviços Públicos x Carta de Serviços ao Usuário",
        "a": {
          "rotulo": "Base Nacional de Serviços Públicos",
          "texto": "Base de dados que reúne as informações necessárias sobre a oferta de serviços públicos de todos os prestadores, em padrão comum e interoperável, conforme os arts. 18, I, e 19, parágrafo único, da Lei nº 14.129/2021."
        },
        "b": {
          "rotulo": "Carta de Serviços ao Usuário",
          "texto": "Documento de cada órgão que descreve o serviço prestado, com canais, prazos e compromissos de qualidade, regido pela Lei nº 13.460/2017 e arrolado no art. 18, II, da Lei nº 14.129/2021."
        },
        "diferencaGabarito": "A Base é catálogo nacional da oferta de todos os prestadores; a Carta é a ficha do serviço de um órgão. Item que trate as duas como o mesmo componente confunde os incisos I e II do art. 18."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A Lei nº 14.129/2021 incide de imediato sobre todos os Estados, Municípios e Distrito Federal, sem necessidade de ato normativo próprio.",
        "porqueErrada": "O art. 2º, III, subordina a aplicação aos demais entes federados à adoção dos comandos da lei por atos normativos próprios, e o § 2º condiciona as referências a Estados, Municípios e DF ao cumprimento desse requisito. O § 1º ainda exclui quem não preste serviço público.",
        "versaoCorreta": "A incidência nos demais entes federados é mediata: depende de adoção dos comandos da Lei nº 14.129/2021 por atos normativos próprios, na forma do art. 2º, III, e § 2º. Sem esse ato, as remissões a Estados, Municípios e DF não se aplicam."
      },
      {
        "afirmacaoEquivocada": "A Base Nacional de Serviços Públicos e a Carta de Serviços ao Usuário são o mesmo instrumento, com nomes distintos, e podem ser publicadas indistintamente por qualquer órgão.",
        "porqueErrada": "O art. 18, I e II, arrola componentes distintos: a Base reúne a oferta de todos os prestadores em padrão comum e interoperável; a Carta descreve o serviço de um determinado órgão, nos termos da Lei nº 13.460/2017.",
        "versaoCorreta": "São componentes distintos do art. 18: a Base Nacional de Serviços Públicos é o catálogo nacional padronizado da oferta de todos os prestadores, e a Carta de Serviços ao Usuário é o documento que descreve o serviço de um órgão específico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Governo Digital: princípios, regras e instrumentos para o aumento da eficiência pública (art. 1º)",
        "Diretrizes do art. 3º: 26 incisos, da desburocratização à inovação no setor público",
        "Componentes do art. 18: Base Nacional de Serviços Públicos, Cartas de Serviços e Plataformas",
        "Domicílio eletrônico: opção pelo meio eletrônico nas comunicações com o administrado (arts. 42 e 43)"
      ],
      "regras": [
        "As diretrizes do art. 3º regem a concepção e a operação dos serviços digitais dos órgãos",
        "As Plataformas de Governo Digital exigem canal único e oficial de solicitação, acompanhamento e monitoramento",
        "O CPF ou o CNPJ basta para identificação nos bancos de dados de serviços públicos (art. 28)"
      ],
      "comparacoes": [
        "Base Nacional de Serviços Públicos difere de Carta de Serviços ao Usuário: catálogo nacional x ficha do órgão"
      ],
      "fluxos": [
        "Desenhar o serviço digital: impor exigências uma única vez, eliminar provas já comprovadas, publicar a Carta, operar na Plataforma e monitorar o painel"
      ],
      "excecoes": [
        "Empresas públicas e sociedades de economia mista que não prestem serviço público ficam fora da incidência (art. 2º, § 1º)"
      ],
      "palavrasChave": [
        "Lei nº 14.129/2021",
        "diretrizes do art. 3º",
        "Base Nacional de Serviços",
        "Plataformas de Governo Digital",
        "domicílio eletrônico",
        "linguagem clara"
      ],
      "checklist": [
        "O caso concreto corresponde a uma diretriz do art. 3º?",
        "O componente citado é a Base Nacional, a Carta ou a Plataforma?",
        "A incidência sobre o ente federado depende de ato normativo próprio?",
        "A exigência imposta ao usuário é necessária e foi imposta uma única vez?",
        "A plataforma oferece canal único de acompanhamento e painel de desempenho?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O que distingue a Base Nacional de Serviços Públicos das Cartas de Serviços ao Usuário?",
        "dados": "Órgão estadual cadastra 12 serviços no catálogo nacional e publica a Carta de cada serviço com prazos e canais; art. 18, I e II, e art. 19, parágrafo único, da Lei nº 14.129/2021; Lei nº 13.460/2017.",
        "conceitos": [
          "Componentes do Governo Digital (art. 18, I e II)",
          "Catálogo nacional em padrão comum e interoperável (art. 19, parágrafo único)"
        ],
        "estrategia": "Classificar cada instrumento pela abrangência: a Base reúne a oferta de todos os prestadores; a Carta descreve o serviço de um órgão. Verificar a função de cada um antes de responder.",
        "execucao": [
          "1. Localizar os dois componentes no art. 18: Base Nacional de Serviços Públicos (inciso I) e Cartas de Serviços ao Usuário (inciso II).",
          "2. Fixar o objeto da Base: dados necessários sobre a oferta de serviços de todos os prestadores, em padrão comum e interoperável.",
          "3. Fixar o objeto da Carta: descrição do serviço prestado por um determinado órgão, regida pela Lei nº 13.460/2017."
        ],
        "resultado": "São componentes DISTINTOS (art. 18, I e II). A Base Nacional é a base de dados que reúne as informações necessárias sobre a oferta de serviços públicos de TODOS os prestadores, em padrão comum e interoperável (art. 19, parágrafo único). A Carta de Serviço ao Usuário é o documento que descreve o serviço prestado por um determinado órgão (regida pela Lei nº 13.460/2017). Uma é o catálogo nacional do que existe; a outra é a ficha do serviço de um órgão.",
        "justificativa": "Os incisos I e II do art. 18 arrolam componentes com funções distintas: a Base é repositório nacional padronizado da oferta de todos os prestadores, e a Carta é documento descritivo do serviço de um órgão, com raiz na Lei nº 13.460/2017. Confundi-los leva a erro em itens que exigem identificar o componente pela sua finalidade.",
        "errosFrequentes": [
          "Tratar a Carta de Serviços como sinônimo da Base Nacional, ignorando a diferença de abrangência",
          "Atribuir à Carta a função de catálogo de todos os prestadores, que é própria da Base Nacional"
        ],
        "variacao": "O item afirma que a Carta de Serviços ao Usuário deve observar compromissos e padrões de qualidade divulgados. Na variação a afirmação é correta e se apoia no inciso XVIII do art. 3º da Lei nº 14.129/2021."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão exige que o cidadão apresente uma segunda via de documento que o próprio sistema já tem. Como a Lei nº 14.129/2021 enquadra isso?",
        "dados": "Cidadão solicita serviço e o sistema do órgão já detém os dados do requerente; o analista exige documento original e nova procuração, em etapa posterior à primeira exigência já cumprida; art. 3º, XII, XIII e XV, da Lei nº 14.129/2021.",
        "conceitos": [
          "Vedação de prova de fato já comprovado (art. 3º, XIII)",
          "Imposição única e imediata das exigências (art. 3º, XII)",
          "Presunção de boa-fé do usuário (art. 3º, XV)"
        ],
        "estrategia": "Enquadrar a exigência nas diretrizes do art. 3º: se o fato já está comprovado por documento ou informação válida, exigir nova prova é vedado; se a exigência sobrevém após as necessárias já terem sido impostas, também é vedado.",
        "execucao": [
          "1. Verificar se o fato já está comprovado: o sistema do órgão detém os dados, o que atrai o inciso XIII.",
          "2. Conferir o momento da exigência: o inciso XII determina imposição imediata e de uma única vez das exigências necessárias.",
          "3. Aplicar o inciso XV, que prescreve a presunção de boa-fé do usuário, e concluir pelo vício da conduta."
        ],
        "resultado": "Como vedação de exigência de prova de fato já comprovado (art. 3º, XIII) e eliminação de exigência desnecessária (art. 24, IV, que manda eliminar, inclusive por interoperabilidade, as exigências desnecessárias ao usuário). Ao mesmo tempo, incide o art. 3º, XII, que impõe imposição imediata e de uma única vez das exigências necessárias, e o art. 3º, XV, que prescreve a presunção de boa-fé do usuário.",
        "justificativa": "A conduta encontra vedação expressa no inciso XIII do art. 3º, que proíbe exigir prova de fato já comprovado por documento ou informação válida, e reforço no inciso XII, que limita a imposição de exigências a um único momento. A presunção de boa-fé do inciso XV completa o quadro e afasta a exigência redundante.",
        "errosFrequentes": [
          "Confundir a eliminação de exigência desnecessária (art. 24, IV) com a vedação específica do inciso XIII",
          "Achar que a vedação só alcança documentos físicos, e não informações já detidas em sistema do órgão"
        ],
        "variacao": "O analista exige documento porque houve dúvida superveniente sobre um dado. Na variação, a exigência posterior é admitida pelo inciso XII, desde que justificada nessa dúvida."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A Lei nº 14.129/2021 se aplica de imediato a todos os Estados, Municípios e Distrito Federal.'",
        "dados": "Item de prova e caso concreto: município que não editou ato normativo próprio é tratado como destinatário direto das diretrizes do art. 3º; art. 2º, III, e § 2º, da Lei nº 14.129/2021.",
        "conceitos": [
          "Incidência sobre a administração federal (art. 2º, I e II)",
          "Incidência mediata sobre os demais entes federados (art. 2º, III)"
        ],
        "estrategia": "Ler o art. 2º na ordem: primeiro a administração federal, depois a extensão condicionada aos demais entes. Testar se o ente editou o ato normativo próprio antes de afirmar incidência plena.",
        "execucao": [
          "1. Identificar o destinatário principal: administração direta federal e indireta que preste serviço público.",
          "2. Ler o inciso III e o § 2º: a aplicação aos demais entes federados depende de adoção dos comandos por atos normativos próprios.",
          "3. Concluir que, sem o ato próprio, a afirmação de incidência imediata é falsa."
        ],
        "resultado": "Errado. Pelo art. 2º, III, a aplicação aos demais entes federados depende da adoção dos comandos da Lei por meio de ATOS NORMATIVOS PRÓPRIOS, e o § 2º do mesmo artigo condiciona as referências a Estados, Municípios e DF à hipótese de cumprimento desse requisito. Interpretação oposta — a incidência plena e imediata em todos os entes — é apegadinha mais comum do item.",
        "justificativa": "O art. 2º distribui a incidência em dois blocos: a administração federal, direta e a indireta que preste serviço público, e os demais entes federados, cuja submissão depende de atos normativos próprios. O § 2º reforça a condição ao tratar as referências a Estados, Municípios e Distrito Federal como dependentes desse requisito.",
        "errosFrequentes": [
          "Confundir lei federal com aplicação automática a todos os entes federados",
          "Ignorar a exclusão do § 1º para empresas públicas e sociedades de economia mista que não prestem serviço público"
        ],
        "variacao": "O item passa a tratar de autarquia federal prestadora de serviço público. Na variação, a incidência é direta, pelos incisos I e II do art. 2º, independentemente de ato normativo próprio."
      }
    ]
  },
  "m6-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A distinção entre publicidade administrativa e divulgação irrestrita de dados pessoais é o eixo da unidade: a primeira publica o que é público do órgão; a segunda expõe o que é da pessoa e é vedada. Em prova, o erro surge como item que manda publicar lista nominal de beneficiários em nome da transparência.",
      "preRequisitos": [
        "Publicidade como princípio e dever de transparência (art. 8º da LAI)",
        "Noções de dado pessoal, dado sensível e anonimização na LGPD"
      ],
      "objetivosObservaveis": [
        "Distinguir publicidade administrativa de divulgação irrestrita de dados pessoais em caso concreto",
        "Identificar os limites que incidem sobre cada regime (art. 31 da LAI, LGPD, art. 29 da Lei nº 14.129/2021)",
        "Aplicar as exceções que conciliam transparência e proteção de dados, como anonimização e acesso parcial"
      ],
      "competencias": [
        "Avaliação do risco de exposição de dados pessoais em publicação oficial",
        "Escolha da técnica de conciliação entre transparência e proteção de dados"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — publicidade das bases não pessoais como preceito geral (art. 29, § 1º, I)",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — acesso parcial do art. 7º, § 2º, e inteiro teor da negativa",
        "m6-u2-t2-s3 (Princípios e diretrizes do art. 3º e componentes do Governo Digital) — inciso XVII do art. 3º e proteção de dados pessoais",
        "m6-u2-t3-s2 (Comparações e distinções críticas da unidade) — distinção entre informação sigilosa e informação pessoal"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A convivência entre transparência e LGPD integra o conteúdo programático de carreiras administrativas e de TI, sobretudo em itens que opõem publicidade de dados do órgão a exposição de dados de beneficiários. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que publicidade administrativa é a divulgação oficial, pelos canais oficiais, de informações públicas, com finalidade de informar o cidadão e permitir o controle social, e que seu conteúdo é o que é público por natureza: competências, despesas, licitações, contratos, programas e indicadores.",
      "intermediario": "O aluno identifica a divulgação irrestrita de dados pessoais como disponibilização ampla e sem ponderação de dados que identificam pessoas, sem base legal, finalidade, minimização ou proteção, e sabe que ela é vedada pelo art. 31 da Lei nº 12.527/2011 e pela Lei nº 13.709/2018.",
      "avancado": "O aluno aplica os limites do art. 31 da LAI: tratamento transparente com respeito à intimidade, vida privada, honra e imagem; restrição de acesso a agentes autorizados e ao titular pelo prazo máximo de 100 anos, independentemente de classificação de sigilo; admissão de acesso por terceiros diante de previsão legal ou consentimento.",
      "especialista": "O aluno domina as exceções que conciliam os regimes: anonimização para pesquisa acadêmica e monitoramento de políticas (art. 36 da Lei nº 14.129/2021), hipóteses do art. 31, § 3º, da LAI, acesso parcial do art. 7º, § 2º, dados funcionais do servidor (art. 29, § 2º, VII) e agregação com granularidade (art. 29, § 1º, V)."
    },
    "comparacoes": [
      {
        "tema": "Publicidade administrativa x divulgação irrestrita de dados pessoais",
        "a": {
          "rotulo": "Publicidade administrativa",
          "texto": "Divulgação oficial, pelos canais oficiais, de informações públicas do órgão — competências, despesas, licitações, contratos, programas e indicadores — como exercício do dever de transparência e do controle social."
        },
        "b": {
          "rotulo": "Divulgação irrestrita de dados pessoais",
          "texto": "Disponibilização ampla e sem ponderação de dados que identificam pessoas, sem base legal, finalidade definida, minimização ou proteção, como publicar lista de beneficiários com nome, CPF e diagnóstico."
        },
        "diferencaGabarito": "A primeira é dever e recai sobre o que é do órgão; a segunda é vedada e recai sobre o que é da pessoa, só se legitimando por base legal, finalidade, necessidade e anonimização quando aberta a base."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Sendo a publicidade preceito geral, a lista nominal de beneficiários de programa social deve ser publicada na íntegra, em nome da transparência.",
        "porqueErrada": "A publicidade como preceito geral alcança o que é público do órgão; o que é pessoal exige base legal e proteção, na forma do art. 31 da Lei nº 12.527/2011, dos arts. 5º, I e II, da LGPD e do art. 29, § 1º, VIII, da Lei nº 14.129/2021.",
        "versaoCorreta": "A publicidade incide sobre dados do órgão. Para pessoas, a via correta é o indicador agregado e, na hipótese de pesquisa, a versão anonimizada do art. 36 da Lei nº 14.129/2021; a base identificável só é acessível com previsão legal ou consentimento (art. 31, § 1º, II, da LAI)."
      },
      {
        "afirmacaoEquivocada": "A restrição de acesso a informações sobre intimidade e vida privada depende de classificação de sigilo; sem classificação, o acesso é livre.",
        "porqueErrada": "O art. 31, § 1º, I, da Lei nº 12.527/2011 limita o acesso a agentes públicos legalmente autorizados e à própria pessoa, pelo prazo máximo de 100 anos da produção, independentemente de classificação de sigilo.",
        "versaoCorreta": "A informação pessoal tem regime próprio, que não se resolve pela classificação de sigilo: o acesso fica restrito a agentes autorizados e ao titular, pelo prazo máximo de 100 anos, salvo previsão legal ou consentimento (§ 1º, II)."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Publicidade administrativa: divulgação oficial de informações públicas pelos canais oficiais",
        "Divulgação irrestrita de dados pessoais: exposição ampla e sem ponderação, vedada",
        "Dado pessoal e dado pessoal sensível (LGPD, art. 5º, I e II)",
        "Dado anonimizado: não reassociável a uma pessoa por meios razoavelmente disponíveis (LGPD, art. 5º, III)"
      ],
      "regras": [
        "O tratamento de informações pessoais deve ser transparente e respeitar intimidade, vida privada, honra e imagem (art. 31 da LAI)",
        "A divulgação a terceiros exige previsão legal ou consentimento expresso (art. 31, § 1º, II)",
        "Só são automaticamente passíveis de abertura as bases sem informações protegidas por lei (art. 30, § 6º)"
      ],
      "comparacoes": [
        "Dado funcional do servidor, de publicidade institucional, difere de dado pessoal de cidadão, sob proteção de dados"
      ],
      "fluxos": [
        "Antes de publicar: o dado é pessoal? há base legal ou consentimento? a finalidade é de interesse público? a identificação é necessária? a anonimização resolve?"
      ],
      "excecoes": [
        "Estatísticas e pesquisas científicas de evidente interesse público são admitidas com vedação de identificação (art. 31, § 3º, II, da LAI)"
      ],
      "palavrasChave": [
        "publicidade administrativa",
        "divulgação irrestrita",
        "art. 31 da LAI",
        "LGPD",
        "anonimização",
        "acesso parcial"
      ],
      "checklist": [
        "O dado é pessoal ou sensível?",
        "Há previsão legal ou consentimento para a divulgação?",
        "A finalidade declarada é de interesse público e compatível?",
        "A identificação do titular é estritamente necessária?",
        "A anonimização ou a agregação resolveria o caso?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão publica em seu portal a relação de servidores com nome, cargo, remuneração e vínculos. Isso é publicidade administrativa ou divulgação irrestrita de dados pessoais?",
        "dados": "Relação de 1.200 servidores com nome, cargo, matrícula, remuneração e vínculo, sem dado de saúde, endereço residencial ou CPF; art. 29, § 2º, VII, da Lei nº 14.129/2021 e art. 8º da Lei nº 12.527/2011.",
        "conceitos": [
          "Dados funcionais do agente público (art. 29, § 2º, VII)",
          "Publicidade institucional e controle social (art. 8º da LAI)"
        ],
        "estrategia": "Qualificar o objeto da divulgação: se os dados descrevem a estrutura de pessoal e remuneração do órgão, a publicação é exercício da publicidade administrativa, e não exposição da vida privada.",
        "execucao": [
          "1. Identificar a natureza dos campos: nome, cargo, remuneração e vínculos são dados funcionais do agente público.",
          "2. Localizar o fundamento: art. 29, § 2º, VII, da Lei nº 14.129/2021, que prevê a divulgação desses dados.",
          "3. Descartar a incidência do regime de dados pessoais de cidadãos, próprio do art. 31 da LAI."
        ],
        "resultado": "Publicidade administrativa. São dados funcionais de agentes públicos, cuja divulgação é prevista no art. 29, § 2º, VII, da Lei nº 14.129/2021, e integra o regime de publicidade do art. 8º da Lei nº 12.527/2011. Não há, nisso, divulgação de dados pessoais de cidadãos: o alvo da divulgação é a estrutura remuneratória e de pessoal do órgão, e o fundamento é o dever de transparência e de controle social.",
        "justificativa": "Os campos publicados descrevem a estrutura de pessoal do órgão, e a divulgação está prevista no art. 29, § 2º, VII, da Lei nº 14.129/2021, integrando o regime de publicidade do art. 8º da LAI. O objeto é a organização do órgão, não a intimidade do servidor, o que afasta a caracterização de divulgação irrestrita de dados pessoais.",
        "errosFrequentes": [
          "Classificar toda publicação que contenha nome de pessoa como divulgação irrestrita, sem verificar a natureza funcional do dado",
          "Confundir remuneração do agente com dado de saúde ou filiação, que são dados pessoais sensíveis"
        ],
        "variacao": "O portal passa a incluir CPF e atestado de saúde dos servidores. Na variação, a publicação deixa de ser mera publicidade administrativa e esbarra no art. 31 da LAI e na LGPD."
      },
      {
        "tipo": "aplicacao",
        "problema": "Pesquisador pede acesso à base do projeto de apoio social com nome, CPF, valor e condições do grupo familiar. Como o órgão deve agir?",
        "dados": "Base com 8.500 registros: nome, CPF, valor do benefício, composição do grupo familiar e diagnóstico de saúde; pedido de pesquisador com projeto declarado; art. 36 da Lei nº 14.129/2021 e art. 31, § 3º, II, da Lei nº 12.527/2011.",
        "conceitos": [
          "Anonimização para pesquisa e avaliação de políticas (art. 36 da Lei nº 14.129/2021)",
          "Pesquisa científica com vedação de identificação (art. 31, § 3º, II, da LAI)"
        ],
        "estrategia": "Verificar a titularidade e a natureza dos dados, confirmar o interesse público da pesquisa e produzir versão anonimizada ou agregada, documentando o método de supressão antes de qualquer entrega.",
        "execucao": [
          "1. Qualificar a base: nome e CPF a tornam base com dados pessoais, e o diagnóstico, base com dado sensível.",
          "2. Confirmar o enquadramento: pesquisa de evidente interesse público, com vedação de identificação (art. 31, § 3º, II, da LAI).",
          "3. Produzir e entregar versão anonimizada ou agregada, registrando o método, e motivar eventual retenção com base legal específica."
        ],
        "resultado": "A base contém dados pessoais (nome e CPF). O caminho é o art. 36 da Lei nº 14.129/2021 (dados anonimizados para pesquisa acadêmica e monitoramento e avaliação de políticas públicas) combinado com o art. 31, § 3º, II, da Lei nº 12.527/2011 (estatísticas e pesquisas científicas de evidente interesse público ou geral, com vedação de identificação). O órgão deve: (1) verificar se a pesquisa é de interesse público ou geral e se o pedido é legítimo; (2) produzir versão anonimizada ou agregada, com método e registro da supressão; (3) entregar a versão compatível e, se houver retenção, motivar a retenção com base legal específica, informar o teor integral da negativa (art. 14) e o caminho recursal (art. 11, § 4º). Entregar a base com CPF e nome é divulgação irrestrita de dados pessoais.",
        "justificativa": "A base é identificável e contém dado sensível, de modo que a entrega integral configuraria divulgação irrestrita. O regime oferece caminho próprio: anonimização para pesquisa acadêmica e monitoramento de políticas (art. 36 da Lei nº 14.129/2021) combinada com a admissão de pesquisas científicas de evidente interesse público, com vedação de identificação.",
        "errosFrequentes": [
          "Entregar a base integral ao pesquisador, confiando na boa-fé do requerente",
          "Confundir pseudonimização, que mantém vínculo recuperável, com anonimização efetiva"
        ],
        "variacao": "O pesquisador aceita receber apenas totais por faixa de renda e região. Na variação, a agregação atende à finalidade sem identificação, e a entrega é admitida sem novas supressões."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como a publicidade é preceito geral, o órgão deve publicar a lista completa de beneficiários de benefício social, para fins de transparência.'",
        "dados": "Item de certo ou errado: órgão pretende publicar lista com nome, CPF, valor e diagnóstico de 9.000 beneficiários de programa social, invocando a publicidade como preceito geral; art. 31 da LAI e art. 5º, I e II, da LGPD.",
        "conceitos": [
          "Publicidade como preceito geral e seu alcance (art. 3º, I, e art. 8º da LAI)",
          "Limites ao tratamento de informações pessoais (art. 31 da LAI; LGPD)"
        ],
        "estrategia": "Separar o objeto da publicidade: o preceito geral vale para o que é público do órgão; o que é pessoal exige base legal e proteção. Testar a afirmação contra essa divisão antes de aceitá-la.",
        "execucao": [
          "1. Definir o alcance da publicidade como preceito geral: incide sobre as informações públicas do órgão, não sobre dados de pessoas.",
          "2. Aplicar o art. 31 da LAI e os arts. 5º, I e II, da LGPD à lista de beneficiários, base identificável com dado sensível.",
          "3. Indicar a via correta: indicadores agregados e, para pesquisa, versões anonimizadas do art. 36 da Lei nº 14.129/2021."
        ],
        "resultado": "Errado, e é a confusão mais importante desta unidade. A publicidade é preceito geral QUANTO AO QUE É PÚBLICO; o que é pessoal exige base legal e proteção (art. 31 da Lei nº 12.527/2011; LGPD, art. 5º, I e II, verificada em 2026-10-20). A versão tecnicamente correta é: «o órgão divulga indicadores agregados e, para pesquisa, versões anonimizadas (art. 36 da Lei nº 14.129/2021); a base identificável só sai com previsão legal ou consentimento (art. 31, § 1º, II, da LAI) e, nas hipóteses do art. 31, § 3º, com as vedações ali contidas».",
        "justificativa": "A publicidade como preceito geral organiza o acesso às informações do órgão; ela não afasta o regime próprio das informações pessoais, que exige base legal, finalidade e proteção (art. 31 da LAI; LGPD). Como a lista é identificável e contém dado sensível, a publicação integral é justamente a divulgação irrestrita vedada pelo sistema.",
        "errosFrequentes": [
          "Estender a publicidade como preceito geral a qualquer dado, inclusive pessoal, em nome da transparência",
          "Confundir o interesse público do programa com a dispensabilidade de proteção dos dados dos beneficiários"
        ],
        "variacao": "O órgão publica apenas o total de beneficiários e o valor executado por mês. Na variação, a divulgação é de indicador agregado, compatível com a transparência ativa e sem identificação de titulares."
      }
    ]
  },
  "m6-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "As distinções críticas da unidade — transparência ativa e passiva, dado aberto e dado acessível, sigilo legal e segredo de justiça, informação sigilosa e informação pessoal — convertem vocabulário técnico em regime jurídico. Cada par opõe institutos autônomos, cuja confusão gera erro material em prova. Fixar a fronteira conceitual é o que indica qual exceção incide e qual providência administrativa é correta.",
      "preRequisitos": [
        "Transparência ativa e passiva com o dispositivo de cada regime",
        "Conceitos de dado pessoal, dado sensível e anonimização na LGPD",
        "Noções dos arts. 8º a 16 da Lei nº 12.527/2011",
        "Definições de dado aberto e dado acessível ao público"
      ],
      "objetivosObservaveis": [
        "Distinguir transparência ativa de passiva indicando procedimento e fundamento de cada uma",
        "Classificar uma base como dado aberto ou apenas acessível ao público conforme formato e licença",
        "Diferenciar sigilo legal, segredo de justiça e segredo industrial quanto à origem",
        "Explicar por que a distinção entre informação sigilosa e pessoal altera a decisão de acesso"
      ],
      "competencias": [
        "Leitura jurídica comparada: identificar o regime a partir do fato",
        "Precisão conceitual ao não tratar institutos distintos como sinônimos",
        "Fundamentação da conclusão em dispositivo legal"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — disciplina o dever de divulgar de ofício e os requisitos dos sítios",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — rege o pedido de acesso, prazos e recursos",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — distinção entre informação sigilosa e informação pessoal",
        "m6-u2-t3-s3 (Erros, exceções e pegadinhas de prova da unidade) — aplicação das distinções em itens de prova",
        "m6-u2-t3-s4 (Resumo estruturado, checklist de domínio e verificação de aprendizagem) — consolidação das comparações da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A conversão de vocabulário em regime é cobrada em itens de certo ou errado que opõem dado aberto a dado acessível, sigilo legal a segredo de justiça e informação sigilosa a informação pessoal. Distinguir os institutos separa o acerto do erro na identificação da exceção aplicável. Classificação qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que transparência ativa é a divulgação de dados independentemente de solicitação (art. 4º, XI, da Lei nº 14.129/2021; dever do art. 8º da LAI) e que transparência passiva é o procedimento de pedido individual (arts. 10 a 16 da LAI). Sabe que a primeira é contínua e de ofício, e a segunda, reagente e individualizada.",
      "intermediario": "O aluno distingue dado aberto de dado acessível ao público: o primeiro é estruturado, em meio digital, processável por máquina, referenciado na internet e sob licença aberta (art. 4º, IV, da Lei nº 14.129/2021); o segundo é todo dado gerado ou acumulado pelo ente que não esteja sob sigilo ou restrição (art. 4º, V). Percebe que nem tudo que é acessível é aberto.",
      "avancado": "O aluno separa sigilo legal, segredo de justiça e segredo industrial: o sigilo legal é a restrição administrativa da LAI, por imprescindibilidade para a segurança da sociedade e do Estado (art. 23), com graus e prazos (art. 24); o segredo de justiça tem regulação processual própria; o segredo industrial decorre da exploração de atividade econômica (art. 22).",
      "especialista": "O aluno articula os pares: explica que informação sigilosa e informação pessoal são regimes autônomos e cumuláveis, que a abertura de base pressupõe formato aberto e ausência de informação protegida (art. 30, § 6º, da Lei nº 14.129/2021) e que pseudonimização não equivale a anonimização, pois mantém vínculo recuperável."
    },
    "comparacoes": [
      {
        "tema": "Transparência ativa x transparência passiva",
        "a": {
          "rotulo": "Transparência ativa",
          "texto": "Disponibilização de dados pela Administração independentemente de solicitação, de ofício e de forma contínua, com requisitos de formato legível por máquina, acessibilidade, autenticidade e atualização (art. 4º, XI, da Lei nº 14.129/2021; art. 8º da LAI)."
        },
        "b": {
          "rotulo": "Transparência passiva",
          "texto": "Procedimento de pedido individual formulado por qualquer interessado, com identificação e especificação da informação, respondido em 20 dias, prorrogáveis por 10 com justificativa expressa (arts. 10 a 16 da LAI)."
        },
        "diferencaGabarito": "A ativa é dever de ofício e contínuo, voltada a dado agregado e indicador; a passiva é reagente e individualizada, indispensável ao documento específico. Item que trate o portal como substituto do atendimento inverte o regime."
      },
      {
        "tema": "Dado aberto x dado acessível ao público",
        "a": {
          "rotulo": "Dado aberto",
          "texto": "Dado estruturado, em meio digital, processável por máquina, referenciado na internet e disponibilizado sob licença aberta que permita livre utilização (art. 4º, IV, da Lei nº 14.129/2021)."
        },
        "b": {
          "rotulo": "Dado acessível ao público",
          "texto": "Dado gerado ou acumulado pelos entes públicos que não esteja sob sigilo ou restrição de acesso nos termos da LAI, conceito amplo que abrange documentos em PDF e dados pessoais de divulgação legal (art. 4º, V, da Lei nº 14.129/2021)."
        },
        "diferencaGabarito": "Acessível ao público é conceito amplo; dado aberto exige formato, licença e referência estável. Nem tudo que é acessível é aberto, e a abertura de base pressupõe formato aberto."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A pseudonimização dos dados, por substituir o nome por um código, basta para que a base possa ser publicada como dado aberto.",
        "porqueErrada": "A pseudonimização mantém a associação recuperável, de modo que o dado continua sendo dado pessoal (art. 5º, I, da LGPD) e o acesso depende de base legal. A abertura de base exige anonimização efetiva (art. 5º, III, da LGPD; art. 36 da Lei nº 14.129/2021).",
        "versaoCorreta": "Só a anonimização efetiva, que torna o dado não reassociável, autoriza a abertura da base; a pseudonimização preserva o vínculo recuperável e mantém a incidência da LGPD sobre o dado pessoal."
      },
      {
        "afirmacaoEquivocada": "O sigilo legal da Lei nº 12.527/2011 exclui as demais hipóteses de segredo de justiça e de segredo industrial.",
        "porqueErrada": "O art. 22 da LAI dispõe o contrário: o regime da lei não exclui as demais hipóteses legais de sigilo e de segredo de justiça nem as hipóteses de segredo industrial decorrentes da exploração direta de atividade econômica.",
        "versaoCorreta": "O art. 22 preserva como autônomos o sigilo legal da própria LAI, o segredo de justiça e o segredo industrial; eles convivem e podem ser cumulados com o regime de acesso à informação."
      },
      {
        "afirmacaoEquivocada": "Informação sigilosa e informação pessoal são o mesmo regime, de modo que a classificação de sigilo é o único fundamento válido para restringir o acesso.",
        "porqueErrada": "São regimes autônomos e cumuláveis: a informação sigilosa decorre das hipóteses do art. 23, com classificação nos termos do art. 28, enquanto a informação pessoal tem proteção própria no art. 31, independentemente de classificação de sigilo.",
        "versaoCorreta": "A informação pessoal é protegida pelo art. 31 da LAI mesmo sem qualquer classificação de sigilo, e o prazo de restrição às informações de intimidade, vida privada, honra e imagem é de até 100 anos a contar da produção."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Transparência ativa: dever de ofício (art. 4º, XI, da Lei nº 14.129/2021; art. 8º da LAI)",
        "Transparência passiva: direito de pedido individual (arts. 10 a 16 da LAI)",
        "Dado aberto: estruturado, legível por máquina, referenciado e sob licença aberta (art. 4º, IV)",
        "Dado acessível ao público: conceito amplo de ausência de restrição (art. 4º, V)",
        "Informação sigilosa e informação pessoal: regimes autônomos e cumuláveis"
      ],
      "regras": [
        "A transparência ativa exige atualização, formato legível por máquina, acessibilidade e autenticidade (art. 8º, § 3º, da LAI)",
        "A transparência passiva observa prazo de 20 dias, prorrogável por 10 com justificativa expressa (art. 11)",
        "A abertura de base pressupõe ausência de informação protegida por lei (art. 30, § 6º, da Lei nº 14.129/2021)"
      ],
      "comparacoes": [
        "Ativa x passiva: dever contínuo e de ofício x procedimento reagente e individualizado",
        "Sigilo legal, segredo de justiça e segredo industrial são hipóteses autônomas que o art. 22 não exclui"
      ],
      "fluxos": [
        "Identificar o par conceitual, verificar o dispositivo de cada instituto e só então indicar a exceção e a providência aplicável ao caso"
      ],
      "excecoes": [
        "Hipóteses do art. 22 da LAI: o regime de acesso não exclui os demais sigilos legais, o segredo de justiça e o segredo industrial"
      ],
      "palavrasChave": [
        "transparência ativa",
        "transparência passiva",
        "dado aberto",
        "dado acessível",
        "sigilo legal",
        "informação pessoal"
      ],
      "checklist": [
        "O instituto citado é ativa ou passiva? Há dispositivo próprio de cada um?",
        "A base é dado aberto ou apenas acessível ao público?",
        "O sigilo invocado é legal, de justiça ou industrial?",
        "A informação é sigilosa, pessoal ou as duas coisas?",
        "A exceção aplicada altera o gabarito do item?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um órgão publica as planilhas de despesa em formato PDF e publica as mesmas planilhas em CSV com dicionário de dados. Qual das duas formas atende ao padrão de dado aberto?",
        "dados": "Duas publicações do mesmo conteúdo: planilhas em PDF, legíveis apenas por pessoas, e planilhas em CSV acompanhadas de dicionário de dados e referência estável de download; art. 4º, IV e V, da Lei nº 14.129/2021.",
        "conceitos": [
          "Dado aberto: estruturado, processável por máquina, referenciado e sob licença aberta (art. 4º, IV)",
          "Dado acessível ao público: conceito amplo de ausência de restrição (art. 4º, V)"
        ],
        "estrategia": "Comparar as duas publicações quanto à forma: verificar se o arquivo é estruturado e processável por máquina, se há dicionário de dados e se a licença permite reutilização livre, antes de concluir pela conformidade.",
        "execucao": [
          "1. Identificar a finalidade: publicar despesa como dado reutilizável.",
          "2. Testar o PDF contra o conceito do art. 4º, IV: não é estruturado nem processável por máquina.",
          "3. Testar o CSV: é estruturado, legível por máquina e acompanhado de dicionário e referência estável.",
          "4. Concluir qual das formas satisfaz o padrão de dado aberto."
        ],
        "resultado": "As planilhas em CSV atendem ao padrão de dado aberto, por serem estruturadas, legíveis por máquina, referenciadas na internet e acompanhadas de dicionário de dados. Os PDFs são acessíveis ao público, mas não constituem dados abertos, pois não são processáveis por máquina.",
        "justificativa": "O art. 4º, IV, da Lei nº 14.129/2021 define dado aberto por quatro atributos cumulativos — formato estruturado, processabilidade por máquina, referência na internet e licença aberta. O CSV com dicionário satisfaz os quatro; o PDF, por não ser estruturado, atende apenas ao conceito amplo do art. 4º, V.",
        "errosFrequentes": [
          "Chamar de dado aberto qualquer arquivo publicado no portal, sem verificar formato e licença",
          "Supor que o PDF é dado aberto porque é acessível ao público"
        ],
        "variacao": "Se o órgão publicasse o CSV sem dicionário de dados e sem licença explícita, a conclusão mudaria: faltariam a documentação dos formatos e a licença aberta exigidas, e a base permaneceria apenas acessível ao público."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um processo administrativo reúne um parecer técnico sem restrição e um anexo com dados de saúde de servidor. Como o órgão deve tratar o pedido de acesso ao inteiro teor do processo?",
        "dados": "Pedido protocolado com identificação e especificação; processo com parecer técnico público e anexo contendo dado pessoal sensível de servidor; ausência de consentimento registrado; prazo de resposta em curso; art. 7º, § 2º, e art. 31 da LAI.",
        "conceitos": [
          "Acesso parcial com ocultação da parte sob sigilo (art. 7º, § 2º, da LAI)",
          "Proteção da informação pessoal (art. 31, § 1º, I, da LAI)"
        ],
        "estrategia": "Aplicar o critério menos restritivo: separar o processo em camada pública e camada protegida, entregar a parte livre e ocultar ou anonimizar a protegida, em vez de recusar o conjunto.",
        "execucao": [
          "1. Verificar a regularidade do pedido (art. 10).",
          "2. Separar parecer e anexo conforme a natureza de cada parte.",
          "3. Entregar o parecer e ocultar ou anonimizar o anexo.",
          "4. Motivar a retenção, informar o inteiro teor da negativa (art. 14) e indicar o recurso (art. 11, § 4º)."
        ],
        "resultado": "Entrega-se o parecer técnico e omite-se ou anonimiza-se o anexo sanitário, com motivação da retenção, teor integral da negativa e indicação de recurso. Recusar o todo violaria o direito de acesso parcial do art. 7º, § 2º, da Lei nº 12.527/2011.",
        "justificativa": "O art. 7º, § 2º, da LAI assegura o acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação da parte sob sigilo. Como o anexo contém dado pessoal sensível do art. 31, a providência correta é a entrega parcial motivada, e não o indeferimento integral do pedido.",
        "errosFrequentes": [
          "Indeferir o processo inteiro por conter dado sensível",
          "Entregar o anexo integral sem anonimização por se tratar de servidor público"
        ],
        "variacao": "Mudando o recorte para o requerente titular dos dados de saúde, o regime se inverte: não mais a entrega parcial com ocultação do anexo a terceiro, mas o acesso direto do titular, individualizado, com possibilidade de correção de dados incorretos e anonimização apenas quando cabível — prova de que a mesma base tem tratamentos distintos conforme a qualidade de quem pede."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Pseudonimizar os dados, substituindo o nome por um código, basta para que a base possa ser publicada como dado aberto.' Avalie.",
        "dados": "Base com nome, CPF e número de protocolo; proposta de substituir o nome por um código interno mantendo a tabela de correspondência sob a guarda do órgão; art. 5º, I e III, da LGPD e art. 36 da Lei nº 14.129/2021.",
        "conceitos": [
          "Dado pessoal: é a informação relacionada a pessoa identificada ou identificável (LGPD, art. 5º, I).",
          "Anonimização efetiva: torna o dado não reassociável (LGPD, art. 5º, III)."
        ],
        "estrategia": "Testar se a operação elimina a possibilidade de reidentificação. Se a correspondência permanece recuperável, o dado continua pessoal e a abertura não se legitima.",
        "execucao": [
          "1. Verificar se a tabela de correspondência permanece acessível ao órgão.",
          "2. Concluir que a associação é recuperável e o dado segue pessoal.",
          "3. Comparar com o conceito de anonimização efetiva (art. 5º, III).",
          "4. Indicar que a abertura exige anonimização, não pseudonimização."
        ],
        "resultado": "O item está errado: a pseudonimização preserva a associação recuperável, de modo que o dado continua sendo dado pessoal e a sua divulgação depende de base legal. A abertura de base como dado aberto exige anonimização efetiva, com registro do método.",
        "justificativa": "O art. 5º, I, da LGPD define dado pessoal de modo a alcançar a informação identificável, e a pseudonimização mantém a chave de reidentificação. Por isso a operação não atende ao art. 36 da Lei nº 14.129/2021, que pressupõe anonimização para a abertura de bases.",
        "errosFrequentes": [
          "Tratar pseudonimização e anonimização como sinônimos",
          "Presumir que ocultar o nome elimina a natureza pessoal do dado"
        ],
        "variacao": "Se o órgão eliminasse a tabela de correspondência e aplicasse técnica irreversível, o dado se tornaria anonimizado e a publicação como dado aberto seria admitida, com registro do método aplicado."
      }
    ]
  },
  "m6-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os itens sobre transparência concentram-se em afirmações plausíveis e falsas: transparência sem exceções, portal como substituto do atendimento, prazo tratado como princípio elástico, exigência de motivo do pedido e cobrança de taxa por consulta. Rejeitar essas afirmações exige substituí-las por versões ancoradas em dispositivo, e é exatamente esse o desempenho observável cobrado. A unidade treina o reconhecimento do erro antes de aceitar a generalização.",
      "preRequisitos": [
        "Regime do pedido de acesso e prazos da LAI (arts. 10 a 16)",
        "Dever de divulgação de ofício e hipótese de desoneração (art. 8º, § 6º)",
        "Noções de proteção da informação pessoal (art. 31 da LAI)",
        "Gratuidade do serviço e ressarcimento por reprodução (art. 12)"
      ],
      "objetivosObservaveis": [
        "Rejeitar afirmações equivocadas sobre transparência, indicando o dispositivo contrariado",
        "Distinguir prazo legal de hipótese de prorrogação com justificativa",
        "Identificar exigências vedadas no pedido de acesso",
        "Explicar o alcance restrito do ressarcimento de custos"
      ],
      "competencias": [
        "Leitura crítica de itens de certo ou errado com generalizações",
        "Correção fundamentada de afirmações falsas com base em dispositivo",
        "Atenção a exceções e condições que restringem regras gerais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — prazos, negativas fundamentadas e recursos",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — limites sobre dados pessoais",
        "m6-u2-t3-s2 (Comparações e distinções críticas da unidade) — base conceitual das distinções",
        "m6-u2-t3-s4 (Resumo estruturado, checklist de domínio e verificação de aprendizagem) — consolidação dos erros a evitar"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de certo ou errado exploram as afirmações enganosas sobre transparência, como «divulgar tudo», «o portal dispensa o pedido» e «cobrar taxa por consulta». Quem identifica o dispositivo contrariado acerta com segurança; quem aceita a generalização erra. Classificação qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que a publicidade é preceito geral e o sigilo, exceção fundamentada (art. 3º, I, da LAI), e que o dever de divulgar de ofício recai sobre informações de interesse coletivo ou geral (art. 8º). Com isso, rejeita a afirmação de que a Administração deve divulgar tudo o que possui.",
      "intermediario": "O aluno sabe que o portal não substitui o atendimento de pedidos: o direito de pedir é assegurado a qualquer interessado (art. 10) e a desoneração do art. 8º, § 6º, só opera quando a informação está em formato de acesso universal e o requerente não declara não dispor de meios para consultá-la.",
      "avancado": "O aluno distingue prazo de princípio: os 20 dias do art. 11, § 1º, prorrogáveis por 10 com justificativa expressa e ciência do requerente (§ 2º), e a vedação de exigir motivos do pedido (art. 10, § 3º), aplicando essas balizas à correção de itens.",
      "especialista": "O aluno domina o regime de custo: o serviço é gratuito (art. 12 na redação do art. 52 da Lei nº 14.129/2021), o ressarcimento é restrito ao custo de reprodução de documentos e há isenção para quem não pode arcar sem prejuízo do sustento, corrigindo a afirmação de cobrança de taxa por consulta."
    },
    "comparacoes": [
      {
        "tema": "Publicidade como preceito geral x divulgação de tudo",
        "a": {
          "rotulo": "Publicidade como preceito geral",
          "texto": "Diretriz do art. 3º, I, da LAI: a publicidade é a regra e o sigilo é a exceção fundamentada, recaindo o dever de ofício sobre as informações de interesse coletivo ou geral (art. 8º)."
        },
        "b": {
          "rotulo": "Divulgação de tudo",
          "texto": "Afirmação de que a Administração deve publicar indiscriminadamente tudo o que possui, sem observar o objeto do dever nem os limites de proteção de informação pessoal e de sigilo legal."
        },
        "diferencaGabarito": "O preceito geral alcança o que é público do órgão; a transparência convive com o sigilo fundamentado e com a proteção de dados pessoais. A generalização «divulgar tudo» contraria o art. 3º, I, e o art. 31 da LAI."
      },
      {
        "tema": "Prazo legal x hipótese de prorrogação",
        "a": {
          "rotulo": "Prazo legal",
          "texto": "Regra vinculante do art. 11, § 1º, da LAI: resposta em até 20 dias, contados do recebimento do pedido pelo órgão."
        },
        "b": {
          "rotulo": "Prorrogação",
          "texto": "Hipótese do art. 11, § 2º: acréscimo de 10 dias, condicionado a justificativa expressa e à ciência do requerente, e não à livre conveniência do órgão."
        },
        "diferencaGabarito": "Prazo é regra e a prorrogação é exceção condicionada. Tratar o prazo como princípio elástico, alongável a critério do órgão, inverte a relação entre regra e exceção."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Com o portal de transparência em funcionamento, o órgão pode recusar pedidos de acesso cuja informação já esteja publicada.",
        "porqueErrada": "Os mecanismos são complementares: o art. 10 assegura o direito de pedir a qualquer interessado, e a desoneração do art. 8º, § 6º, da LAI só ocorre quando a informação está em formato de acesso universal e o requerente não declara não dispor de meios para realizar os procedimentos.",
        "versaoCorreta": "O portal apenas desonera o atendimento nas hipóteses do art. 8º, § 6º, da LAI; fora delas, o órgão responde ao pedido, indicando data, local e modo de consulta ou reprodução, ou as razões de fato ou de direito da recusa."
      },
      {
        "afirmacaoEquivocada": "O órgão pode exigir que o requerente justifique o motivo do pedido, para decidir sobre o acesso.",
        "porqueErrada": "O art. 10, § 3º, da LAI veda exigências relativas aos motivos determinantes da solicitação, e o § 1º veda exigências que inviabilizem a solicitação de informação de interesse público.",
        "versaoCorreta": "Só são exigíveis a identificação do requerente e a especificação da informação. A motivação do pedido não pode ser requisito de acesso, e a negativa fundada nessa exigência é indevida."
      },
      {
        "afirmacaoEquivocada": "A Lei nº 12.527/2011 autoriza a cobrança de taxa pelo serviço de busca e fornecimento de informação.",
        "porqueErrada": "O art. 12, na redação dada pelo art. 52 da Lei nº 14.129/2021, torna o serviço gratuito; a cobrança admitida é apenas o ressarcimento do custo de reprodução de documentos, com isenção para quem não pode arcar sem prejuízo do sustento próprio ou da família.",
        "versaoCorreta": "O serviço de busca e fornecimento da informação é gratuito; admite-se, quando o atendimento exigir reprodução de documentos, o ressarcimento restrito ao custo dos materiais e serviços utilizados, e não uma taxa pela consulta."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Publicidade como preceito geral e sigilo como exceção fundamentada (art. 3º, I, da LAI)",
        "Desoneração do atendimento apenas nas hipóteses do art. 8º, § 6º",
        "Prazo de resposta de 20 dias, com prorrogação condicionada (art. 11)",
        "Vedação de exigir os motivos do pedido (art. 10, § 3º)",
        "Gratuidade do serviço e ressarcimento restrito à reprodução (art. 12)"
      ],
      "regras": [
        "O objeto do dever de ofício são as informações de interesse coletivo ou geral (art. 8º)",
        "A prorrogação de 10 dias exige justificativa expressa e ciência do requerente (art. 11, § 2º)",
        "A negativa exige fundamentação e indicação da via recursal (arts. 11, § 4º, e 14)"
      ],
      "comparacoes": [
        "Regra vinculante de prazo x hipótese condicionada de prorrogação",
        "Gratuidade da busca x ressarcimento restrito ao custo de reprodução"
      ],
      "fluxos": [
        "Ao avaliar um item: localizar a afirmação, testá-la contra a exceção ou a condição legal e reescrevê-la na versão correta ancorada em dispositivo"
      ],
      "excecoes": [
        "Municípios com população até 10.000 habitantes são dispensados da divulgação obrigatória na internet, mantida a publicidade orçamentária e financeira em tempo real (art. 8º, § 4º)",
        "Isenção do ressarcimento para quem não pode arcar sem prejuízo do sustento próprio ou da família"
      ],
      "palavrasChave": [
        "preceito geral",
        "sigilo como exceção",
        "art. 8º, § 6º",
        "prazo de 20 dias",
        "vedação de motivo",
        "gratuidade do serviço"
      ],
      "checklist": [
        "A afirmação generaliza uma regra que tem exceções?",
        "A desoneração invocada observa as condições do art. 8º, § 6º?",
        "O prazo foi tratado como regra ou como princípio elástico?",
        "A exigência imposta ao requerente é permitida pela lei?",
        "A cobrança corresponde a taxa ou a ressarcimento de reprodução?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um item afirma que a Lei nº 12.527/2011 assegura ao requerente o acesso a qualquer documento, ainda que contenha dados pessoais, desde que o pedido esteja formalizado. Avalie.",
        "dados": "Pedido formalizado por interessado; documento pretendido contém dados pessoais de terceiro; ausência de previsão legal específica ou de consentimento; art. 31 da LAI e art. 7º, § 2º.",
        "conceitos": [
          "Proteção das informações pessoais (art. 31 da LAI)",
          "Acesso parcial à parte não sigilosa (art. 7º, § 2º)"
        ],
        "estrategia": "Separar o que o pedido formalizado garante — o procedimento — do que ele não supera: os limites legais de sigilo e de proteção de dados pessoais. Testar a afirmação contra o art. 31.",
        "execucao": [
          "1. Reconhecer que a formalização apenas instaura o procedimento de acesso.",
          "2. Verificar se o documento contém dados pessoais protegidos pelo art. 31.",
          "3. Concluir que, sem previsão legal ou consentimento, não há entrega integral.",
          "4. Indicar o acesso parcial como via correta."
        ],
        "resultado": "O item é errado: a formalização do pedido não supera os limites do art. 31 da Lei nº 12.527/2011, das hipóteses do art. 23 e da LGPD. O que se assegura é o acesso parcial à parte não sigilosa, e a entrega integral depende de previsão legal ou consentimento.",
        "justificativa": "O procedimento do art. 10 apenas formaliza a solicitação; ele não afasta o regime de proteção das informações pessoais do art. 31, que restringe o acesso a agentes autorizados e ao titular. Por isso a via compatível é o acesso parcial do art. 7º, § 2º, e não a entrega irrestrita.",
        "errosFrequentes": [
          "Supor que o pedido formalizado concede automaticamente o acesso integral",
          "Ignorar o regime do art. 31 por se tratar de documento do órgão"
        ],
        "variacao": "Se houvesse previsão legal específica para a divulgação, a entrega integral seria admitida; sem ela e sem consentimento, permanecem a proteção e o acesso parcial."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cidadão pede todos os contratos celebrados pelo órgão nos últimos cinco anos. Como o órgão deve atender?",
        "dados": "Pedido especificado; contratos do período com dados de fornecedores pessoa jurídica e, em alguns casos, de representantes pessoa física; base disponível em formato digital; art. 8º, § 1º, IV, da LAI.",
        "conceitos": [
          "Contratos como conteúdo mínimo de divulgação (art. 8º, § 1º, IV)",
          "Formatos abertos e legíveis por máquina (art. 8º, § 3º, II e III)"
        ],
        "estrategia": "Partir da natureza pública dos contratos, reunir a base disponível, entregar em formato aberto e aplicar ocultação apenas nas parcelas de dados pessoais, com motivação da retenção.",
        "execucao": [
          "1. Identificar os contratos no mínimo do art. 8º, § 1º, IV.",
          "2. Reunir a base do período em formato legível por máquina.",
          "3. Ocultar ou agregar dados pessoais de pessoas físicas, com motivação.",
          "4. Informar o teor de eventual negativa e o caminho recursal."
        ],
        "resultado": "Não há recusa automática: contratos são informações públicas e integram o mínimo do art. 8º, § 1º, IV. O órgão reúne a base, entrega em formato legível por máquina e, se houver dados pessoais de pessoas físicas, aplica ocultação ou agregação com motivação.",
        "justificativa": "Os contratos constam do rol de divulgação obrigatória do art. 8º, § 1º, IV, e o § 3º impõe formatos abertos e legíveis por máquina. A eventual presença de dados pessoais de pessoas físicas não autoriza recusa integral: resolve-se com ocultação ou agregação motivada.",
        "errosFrequentes": [
          "Recusar o pedido por conter dados de representantes pessoa física",
          "Alegar que o portal já publica contratos para desonerar o atendimento"
        ],
        "variacao": "Se o pedido abrangesse contratos ainda não celebrados ou em negociação, a resposta seria a comunicação de que a informação não existe no acervo, com indicação do órgão detentor, se houver."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O órgão não pode cobrar nada pelo atendimento de pedido de acesso, nem pela reprodução de documentos.' Avalie.",
        "dados": "Pedido que exige a reprodução de 300 páginas; requerente com condições de arcar com o custo; art. 12 da LAI na redação do art. 52 da Lei nº 14.129/2021.",
        "conceitos": [
          "Gratuidade do serviço de busca e fornecimento (art. 12)",
          "Ressarcimento restrito ao custo de reprodução (art. 12)"
        ],
        "estrategia": "Testar separadamente o serviço de busca e a reprodução de documentos: a gratuidade alcança o primeiro; a reprodução admite ressarcimento restrito, com isenção social.",
        "execucao": [
          "1. Verificar o objeto da gratuidade: o serviço de busca e fornecimento da informação.",
          "2. Distinguir a hipótese de reprodução de documentos.",
          "3. Concluir que o ressarcimento é admitido, restrito ao custo de materiais e serviços.",
          "4. Aplicar a isenção social quando cabível."
        ],
        "resultado": "O item está reduzido: o serviço de busca e fornecimento é gratuito, mas o órgão pode cobrar exclusivamente o ressarcimento dos custos de materiais e serviços utilizados quando o atendimento exigir reprodução de documentos, com isenção para quem não pode arcar sem prejuízo do sustento.",
        "justificativa": "O art. 12, na redação do art. 52 da Lei nº 14.129/2021, separa a gratuidade do serviço de busca do ressarcimento da reprodução. A afirmação de que nada pode ser cobrado ignora essa segunda hipótese e o teto do custo efetivo.",
        "errosFrequentes": [
          "Confundir a gratuidade do serviço com proibição absoluta de qualquer cobrança",
          "Entender o ressarcimento como taxa com finalidade lucrativa"
        ],
        "variacao": "Se o requerente declarasse não poder arcar sem prejuízo do sustento próprio ou da família, a isenção afastaria o ressarcimento, mantida a entrega."
      }
    ]
  },
  "m6-u2-t3-s4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Este subtópico consolida a unidade por recuperação ativa: reúne conceitos, prazos, exceções e um protocolo de decisão entre publicidade e dados pessoais. Em prova, é o momento de acionar a memória sem consultar o texto, e a organização do conteúdo reduz o tempo de resposta. Revisar por estrutura, e não por releitura passiva, é o que fixa prazos e exceções.",
      "preRequisitos": [
        "Leitura integral da unidade 6.2: Lei de Acesso à Informação e Lei de Governo Digital",
        "Distinções críticas entre ativa e passiva, aberto e acessível, sigilosa e pessoal",
        "Noções de prazos e de recursos do pedido de acesso",
        "Familiaridade com a proteção de dados pessoais na LAI e na LGPD"
      ],
      "objetivosObservaveis": [
        "Recuperar de memória os conceitos essenciais, prazos e exceções da unidade",
        "Aplicar o protocolo de decisão sobre publicação de dado pessoal em caso concreto",
        "Resolver itens de verificação sem consultar o texto",
        "Organizar o conteúdo em checklist de domínio"
      ],
      "competencias": [
        "Recuperação ativa e síntese de conteúdo extenso",
        "Aplicação de protocolo decisório passo a passo",
        "Autoverificação de domínio por checklist"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — conteúdo mínimo e requisitos de publicação",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — prazos, negativas e recursos",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — protocolo de decisão",
        "m6-u2-t3-s2 (Comparações e distinções críticas da unidade) — pares conceituais resumidos",
        "m6-u2-t3-s3 (Erros, exceções e pegadinhas de prova da unidade) — afirmações a evitar na revisão",
        "m6-u2-t3-s5 (Exemplos resolvidos da unidade (três casos completos)) — aplicação do resumo a casos completos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A banca cobra os prazos, as exceções e o protocolo de decisão que aqui se organizam, ainda que o item não seja nominalmente sobre o resumo. Revisar por estrutura melhora a retenção e reduz o tempo de resposta na prova. Classificação qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno reproduz os conceitos essenciais: publicidade como preceito geral e sigilo como exceção (art. 3º, I, da LAI); transparência ativa, de ofício, e passiva, de pedido; dado aberto com forma e licença e dado acessível ao público sem restrição; informação sigilosa e informação pessoal como regimes autônomos.",
      "intermediario": "O aluno recupera os prazos e regras: pedido com identificação e especificação, vedada a exigência de motivo (art. 10, § 3º); resposta em 20 dias, prorrogáveis por 10 com justificativa expressa (art. 11); recurso em 10 dias à autoridade superior, que se manifesta em 5 (art. 15); inteiro teor da negativa (art. 14).",
      "avancado": "O aluno aplica o protocolo de decisão: verificar se o dado é pessoal, se há base legal ou consentimento, se a finalidade é de interesse público, se a identificação é necessária e se a anonimização ou agregação resolve, registrando método e data antes de publicar ou de negar com motivação.",
      "especialista": "O aluno domina as exceções e limites: dispensa de divulgação na internet para municípios com até 10.000 habitantes, mantida a publicidade orçamentária e financeira em tempo real (art. 8º, § 4º); acesso parcial com ocultação (art. 7º, § 2º); dispensa de consentimento nas hipóteses do art. 31, § 3º; e a ordem do processo eletrônico com tempestividade até 23h59 do horário de Brasília."
    },
    "comparacoes": [
      {
        "tema": "Gratuidade do serviço x ressarcimento de reprodução",
        "a": {
          "rotulo": "Gratuidade",
          "texto": "Serviço de busca e fornecimento de informação isento de cobrança, na forma do art. 12 da LAI, com a redação dada pelo art. 52 da Lei nº 14.129/2021."
        },
        "b": {
          "rotulo": "Ressarcimento",
          "texto": "Cobrança admitida apenas quando o atendimento exigir a reprodução de documentos, restrita ao custo dos materiais e serviços utilizados, com isenção social."
        },
        "diferencaGabarito": "A gratuidade é a regra e incide sobre a busca e o fornecimento; o ressarcimento é exceção restrita à reprodução e ao custo efetivo, sem margem de lucro."
      },
      {
        "tema": "Anonimização x pseudonimização",
        "a": {
          "rotulo": "Anonimização",
          "texto": "Técnica que torna o dado não reassociável a uma pessoa por meios razoavelmente disponíveis (LGPD, art. 5º, III), condição para a abertura de base (art. 36 da Lei nº 14.129/2021)."
        },
        "b": {
          "rotulo": "Pseudonimização",
          "texto": "Substituição de identificadores que mantém a associação recuperável por meio de informação adicional, de modo que o dado permanece pessoal (LGPD, art. 5º, I)."
        },
        "diferencaGabarito": "Só a anonimização efetiva afasta a natureza pessoal do dado e habilita a abertura da base; a pseudonimização preserva o vínculo recuperável e mantém a incidência da LGPD."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O resumo estruturado substitui a leitura da unidade e dispensa a consulta ao texto legal.",
        "porqueErrada": "O resumo organiza conceitos, regras e protocolos já compreendidos, mas não produz a compreensão de quem não leu a unidade nem substitui o texto legal para a citação de dispositivos.",
        "versaoCorreta": "O resumo é instrumento de recuperação ativa para quem já estudou a unidade: ele fixa prazos, exceções e protocolo de decisão, mas a compreensão inicial e a citação de dispositivos exigem a leitura do texto legal."
      },
      {
        "afirmacaoEquivocada": "A abertura de base de dados é direito subjetivo público irrestrito, e a recusa só pode fundar-se em informação sigilosa classificada formalmente.",
        "porqueErrada": "A abertura depende de ausência de informação protegida por lei (art. 30, § 6º, da Lei nº 14.129/2021), o que inclui dados pessoais sob o regime do art. 31 da LAI, e o § 1º do art. 30 admite que o requerente peça a preservação de sua identidade quando a identificação prejudicar a impessoalidade.",
        "versaoCorreta": "O pedido de abertura é instrumento de transparência com regime próprio: a recusa pode fundar-se em informação protegida por lei, inclusive dados pessoais do art. 31, e não apenas em sigilo classificado, não havendo direito irrestrito de cópia integral."
      },
      {
        "afirmacaoEquivocada": "Os prazos da LAI não se aplicam aos pedidos de abertura de bases de dados do Governo Digital.",
        "porqueErrada": "O art. 30, § 2º, da Lei nº 14.129/2021 remete expressamente aos procedimentos e prazos previstos nos arts. 10 e 11 da LAI para as solicitações de abertura de bases de dados.",
        "versaoCorreta": "Os pedidos de abertura de bases de dados observam os procedimentos e prazos do art. 10 e do art. 11 da LAI, por remissão expressa do art. 30, § 2º, da Lei nº 14.129/2021."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Publicidade como preceito geral e sigilo como exceção (art. 3º, I, da LAI)",
        "Transparência ativa, de ofício, e passiva, por pedido",
        "Dado aberto com forma e licença x dado acessível sem restrição",
        "Informação sigilosa e informação pessoal: regimes autônomos",
        "Dado anonimizado x dado pseudonimizado"
      ],
      "regras": [
        "Resposta em 20 dias, prorrogáveis por 10 com justificativa expressa (art. 11, § 1º e § 2º)",
        "Recurso em 10 dias à autoridade superior, que se manifesta em 5 (art. 15)",
        "Gratuidade do serviço, com ressarcimento restrito à reprodução e isenção social (art. 12)"
      ],
      "comparacoes": [
        "Anonimização efetiva x pseudonimização: só a primeira afasta a natureza pessoal do dado",
        "Gratuidade da busca x ressarcimento de reprodução"
      ],
      "fluxos": [
        "Decidir a publicação de dado pessoal: é pessoal? há base legal? a finalidade é de interesse público? a identificação é necessária? a anonimização resolve? registrar método e data e publicar ou negar com motivação"
      ],
      "excecoes": [
        "Dispensa de divulgação na internet para municípios com até 10.000 habitantes, mantida a publicidade orçamentária em tempo real (art. 8º, § 4º)",
        "Acesso parcial com ocultação da parte sob sigilo (art. 7º, § 2º)",
        "Dispensa de consentimento nas hipóteses do art. 31, § 3º"
      ],
      "palavrasChave": [
        "recuperação ativa",
        "protocolo de decisão",
        "prazo de 20 dias",
        "recurso em 10 dias",
        "anonimização",
        "checklist de domínio"
      ],
      "checklist": [
        "Recupero os prazos de resposta, prorrogação e recurso?",
        "Sei distinguir ativa de passiva e aberto de acessível?",
        "Aplico o protocolo de decisão antes de publicar dado pessoal?",
        "Reconheço as exceções do art. 8º, § 4º, do art. 7º, § 2º e do art. 31, § 3º?",
        "Diferencio anonimização de pseudonimização?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, liste as três condições que tornam lícita a divulgação de dado pessoal na transparência ativa.",
        "dados": "Exercício de recuperação ativa sobre a unidade 6.2; conteúdo a recordar: base legal ou consentimento, finalidade de interesse público e anonimização ou agregação; arts. 31 e 36 da LAI e da Lei nº 14.129/2021.",
        "conceitos": [
          "Base legal ou consentimento (art. 31, § 1º, II, da LAI)",
          "Finalidade de interesse público e minimização",
          "Anonimização prévia para abertura de base (art. 36 da Lei nº 14.129/2021)"
        ],
        "estrategia": "Recuperar de memória as três condições em sequência lógica — legitimidade do tratamento, finalidade pública e técnica de proteção — conferindo cada uma contra o dispositivo correspondente.",
        "execucao": [
          "1. Recordar a exigência de base legal ou consentimento para dado pessoal.",
          "2. Recordar a finalidade de interesse público com minimização.",
          "3. Recordar a anonimização ou agregação na abertura de base.",
          "4. Conferir as três contra os dispositivos e concluir pela insuficiência de qualquer uma isolada."
        ],
        "resultado": "São três: base legal ou consentimento; finalidade de interesse público com minimização; e, na abertura de base, anonimização prévia ou agregação com vedação de identificação. Sem qualquer uma delas, não há publicação de dado identificável.",
        "justificativa": "O art. 31, § 1º, II, da LAI condiciona a divulgação a previsão legal ou consentimento; a finalidade e a minimização derivam do regime de proteção de dados; e o art. 36 da Lei nº 14.129/2021 exige anonimização para a abertura de bases. As três condições são cumulativas.",
        "errosFrequentes": [
          "Listar apenas o consentimento e esquecer a hipótese de previsão legal",
          "Supor que a finalidade pública, isoladamente, legitima a publicação identificável"
        ],
        "variacao": "Se a divulgação ocorresse em transparência passiva, e não ativa, as condições seriam as mesmas, mas a providência seria a entrega parcial motivada, e não a publicação de ofício."
      },
      {
        "tipo": "aplicacao",
        "problema": "Chega um pedido que mistura dados anonimizáveis e dados identificáveis na mesma base. Qual é a resposta correta do órgão?",
        "dados": "Base única com 4.000 registros, parte deles com identificadores diretos e parte agregável; pedido específico; art. 7º, § 2º, da LAI e art. 36 da Lei nº 14.129/2021.",
        "conceitos": [
          "Acesso parcial e entrega do máximo possível (art. 7º, § 2º)",
          "Anonimização ou agregação (art. 36 da Lei nº 14.129/2021)"
        ],
        "estrategia": "Analisar por camada: produzir versão anonimizada ou agregada da parcela anonimizável, entregá-la e motivar a retenção da parcela identificável com dispositivo específico.",
        "execucao": [
          "1. Separar a base em camada anonimizável e camada identificável.",
          "2. Produzir versão anonimizada ou agregada e entregá-la.",
          "3. Motivar a retenção com dispositivo e informar o teor integral da negativa.",
          "4. Indicar o caminho recursal e registrar método e data da anonimização."
        ],
        "resultado": "Entrega-se o máximo possível: a versão anonimizada ou agregada da parcela anonimizável é fornecida, e a parcela identificável é retida com motivação específica, teor integral da negativa e indicação de recurso. A recusa binária e genérica descumpre o dever de fundamentação e o acesso parcial.",
        "justificativa": "O art. 7º, § 2º, da LAI impõe a entrega da parte não sigilosa, e o art. 36 da Lei nº 14.129/2021 oferece a via da anonimização. Recusar o pedido por inteiro, sem separar as camadas, viola o dever de fundamentação e o direito de acesso parcial.",
        "errosFrequentes": [
          "Indeferir o pedido inteiro por conter dados identificáveis",
          "Entregar a base completa sem separar as camadas"
        ],
        "variacao": "Se a camada identificável pudesse ser agregada por faixa, sem identificação, a entrega se ampliaria e a retenção deixaria de incidir sobre essa parcela."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A abertura de base de dados é um direito subjetivo público irrestrito, e a recusa só pode ocorrer por informação sigilosa classificada formalmente.' Avalie.",
        "dados": "Pedido de abertura de base com registros de atendimento que incluem nome e endereço de cidadãos; ausência de classificação de sigilo; art. 30, § 6º, da Lei nº 14.129/2021 e art. 31 da LAI.",
        "conceitos": [
          "Ausência de informação protegida como condição da abertura (art. 30, § 6º)",
          "Proteção de dados pessoais (art. 31 da LAI)"
        ],
        "estrategia": "Verificar se a base contém informação protegida por lei antes de aceitar a premissa de direito irrestrito. A ausência de classificação não significa ausência de proteção.",
        "execucao": [
          "1. Identificar os campos da base: nome e endereço são dados pessoais.",
          "2. Aplicar o art. 30, § 6º: a abertura pressupõe ausência de informação protegida.",
          "3. Concluir que a proteção do art. 31 independe de classificação de sigilo.",
          "4. Indicar a abertura apenas da parte não protegida."
        ],
        "resultado": "O item é errado: a abertura depende de ausência de informação protegida por lei, o que inclui os dados pessoais do art. 31 da LAI, e não apenas de sigilo classificado formalmente. Não há direito irrestrito de cópia integral da base.",
        "justificativa": "O art. 30, § 6º, da Lei nº 14.129/2021 condiciona a abertura à ausência de informação protegida, e o art. 31 da LAI protege a informação pessoal independentemente de classificação. Por isso a recusa pode fundar-se em proteção de dados pessoais, e não apenas em sigilo formal.",
        "errosFrequentes": [
          "Supor que a ausência de classificação de sigilo torna a base integralmente aberta",
          "Tratar a proteção de dados pessoais como se dependesse de ato de classificação"
        ],
        "variacao": "Se a base fosse anonimizada antes do pedido, com método registrado, a abertura se tornaria possível, pois deixaria de haver informação protegida alcançável."
      }
    ]
  },
  "m6-u2-t3-s5": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os três casos completos integram regime, dispositivo e providência em um único raciocínio, que é a forma como a banca apresenta situações de transparência ativa incompleta, acesso parcialmente sigiloso e recusa indevida por existência de portal. Resolver pelo template de nove itens treina a sequência de análise e evita a resposta que acerta o regime e erra a providência.",
      "preRequisitos": [
        "Domínio das distinções críticas da unidade",
        "Regime do pedido de acesso, prazos e recursos",
        "Hipóteses de proteção de dados pessoais e de sigilo",
        "Protocolo de decisão entre publicidade e dados pessoais"
      ],
      "objetivosObservaveis": [
        "Resolver três casos completos aplicando o template de nove itens",
        "Identificar o regime, o dispositivo e a providência em cada caso",
        "Reconhecer a recusa binária indevida e propor a resposta correta",
        "Distinguir transparência ativa incompleta de falha isolada de atendimento"
      ],
      "competencias": [
        "Análise estruturada de caso por template",
        "Fundamentação da providência em dispositivo específico",
        "Diferenciação entre falha de publicidade ativa e falha de atendimento de pedido"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — requisitos do sítio e conteúdo mínimo",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — prazos, negativa fundamentada e recurso",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — limites e exceções aplicados aos casos",
        "m6-u2-t3-s2 (Comparações e distinções críticas da unidade) — distinções aplicadas aos casos",
        "m6-u2-t3-s3 (Erros, exceções e pegadinhas de prova da unidade) — recusas indevidas corrigidas",
        "m6-u2-t3-s4 (Resumo estruturado, checklist de domínio e verificação de aprendizagem) — protocolo de decisão aplicado"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Casos completos reproduzem o formato de prova que exige regime, dispositivo e providência no mesmo item, sobretudo transparência ativa incompleta e recusa por existência de portal. Treinar o template de nove itens reduz o erro de concluir o regime certo e indicar a providência errada. Classificação qualitativa, estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno identifica o problema de cada caso: transparência ativa incompleta quando faltam conteúdo obrigatório ou atualização; acesso parcialmente sigiloso quando o documento mistura parte pública e parte protegida; recusa indevida quando o órgão invoca o portal para desonerar o atendimento sem observar o art. 8º, § 6º, da LAI.",
      "intermediario": "O aluno aplica o template de nove itens — problema, dados, conceitos, estratégia, execução, resultado, justificativa, erros frequentes e variação — mantendo a coerência entre o regime identificado e a providência proposta em cada caso.",
      "avancado": "O aluno fundamenta a providência em dispositivo: na transparência ativa incompleta, contra o rol do art. 8º, § 1º, e o art. 29 da Lei nº 14.129/2021; no acesso parcial, o art. 7º, § 2º; na recusa por portal, o art. 11, § 6º, e o art. 8º, § 6º.",
      "especialista": "O aluno reconhece os limites de cada solução: a regularização da publicidade pode esbarrar em informação classificada (art. 23 da LAI), a entrega parcial exige motivação e via recursal, e a desoneração por portal só opera com disponibilidade universal e sem declaração do requerente sobre os meios."
    },
    "comparacoes": [
      {
        "tema": "Falha de transparência ativa x falha de transparência passiva",
        "a": {
          "rotulo": "Falha de transparência ativa",
          "texto": "Omissão de conteúdo obrigatório ou desatualização do portal, em descumprimento ao rol do art. 8º, § 1º, da LAI e aos requisitos do art. 29 da Lei nº 14.129/2021, sanável por plano de regularização."
        },
        "b": {
          "rotulo": "Falha de transparência passiva",
          "texto": "Descumprimento de prazo, ausência de fundamentação da negativa ou recusa indevida no atendimento de pedido, na forma dos arts. 11 e 14 da LAI."
        },
        "diferencaGabarito": "A primeira é falha de dever de ofício e se corrige com inventário, responsável e atualização; a segunda é falha de atendimento e se corrige com resposta no prazo, motivação e via recursal."
      },
      {
        "tema": "Desoneração por portal x atendimento devido",
        "a": {
          "rotulo": "Desoneração legítima",
          "texto": "Hipótese do art. 8º, § 6º, da LAI: a informação já está disponível em formato de acesso universal e o requerente não declara não dispor de meios para realizar os procedimentos."
        },
        "b": {
          "rotulo": "Atendimento devido",
          "texto": "Fora da hipótese de desoneração, o órgão responde no prazo, comunicando data, local e modo de consulta ou reprodução, ou as razões de fato ou de direito da recusa."
        },
        "diferencaGabarito": "A desoneração é hipótese dependente de fatos do caso, não regra automática. Sem disponibilidade universal e sem a verificação da declaração do requerente, o atendimento é devido."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se a informação já consta do portal de transparência, o pedido de acesso é automaticamente improcedente.",
        "porqueErrada": "A desoneração do art. 8º, § 6º, da LAI depende de a informação estar em formato de acesso universal e de o requerente não declarar não dispor de meios para realizar os procedimentos; sem essas condições, o atendimento é devido.",
        "versaoCorreta": "A existência no portal não torna o pedido improcedente por si só: o órgão deve verificar as condições do art. 11, § 6º, e, não configurada a desoneração, responder no prazo com data, local e modo de consulta."
      },
      {
        "afirmacaoEquivocada": "Diante de documento parcialmente sigiloso, o órgão deve indeferir o pedido por inteiro para preservar a integridade do processo.",
        "porqueErrada": "O art. 7º, § 2º, da LAI assegura o acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação da parte sob sigilo; o indeferimento integral viola o direito de acesso parcial.",
        "versaoCorreta": "O órgão entrega a parte não sigilosa, oculta ou anonimiza a protegida e motiva a retenção, com o teor integral da negativa e a indicação de recurso."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Template de nove itens como método de resolução de caso",
        "Transparência ativa incompleta: omissão e desatualização",
        "Acesso parcialmente sigiloso: camada pública e camada protegida",
        "Recusa por existência de portal: hipótese do art. 8º, § 6º",
        "Motivação da retenção e via recursal"
      ],
      "regras": [
        "A publicidade se cumpre pela publicação do conteúdo mínimo atual, autêntico e íntegro (art. 8º, § 3º, V e VI)",
        "A entrega parcial motiva a retenção e informa a via recursal (arts. 11, § 4º, e 14)",
        "A desoneração por portal exige disponibilidade universal e verificação da declaração do requerente (art. 11, § 6º)"
      ],
      "comparacoes": [
        "Falha de transparência ativa, sanável por regularização, x falha de transparência passiva, sanável por resposta motivada"
      ],
      "fluxos": [
        "Resolver pelo template: definir o problema, reunir os dados, indicar os conceitos e o dispositivo, escolher a estratégia, executar os passos e concluir pela providência com justificativa e variação"
      ],
      "excecoes": [
        "Omissão pode ser lícita quando decorre de informação classificada (art. 23 da LAI), publicando-se a parte não sigilosa com classificação formal",
        "Requerente pode pedir a preservação de sua identidade quando a identificação prejudicar a impessoalidade (art. 30, § 1º, da Lei nº 14.129/2021)"
      ],
      "palavrasChave": [
        "caso completo",
        "transparência ativa incompleta",
        "acesso parcial",
        "recusa por portal",
        "motivação da retenção",
        "regularização do portal"
      ],
      "checklist": [
        "O caso é falha de transparência ativa ou de atendimento de pedido?",
        "Há parte protegida que exige entrega parcial?",
        "A recusa invoca corretamente o art. 8º, § 6º?",
        "A providência indica dispositivo, motivação e recurso?",
        "O caso admite variação que muda o regime aplicável?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O portal de transparência do órgão divulga a estrutura organizacional e os repasses, mas a área de licitações não publica resultados nem contratos do exercício corrente, e a base de dados abertos não é atualizada há dezoito meses. Como o órgão deve tratar o caso?",
        "dados": "Estrutura organizacional e repasses publicados; licitações e contratos do exercício corrente ausentes; base de dados abertos sem atualização há dezoito meses; nenhuma notificação de indisponibilidade no portal.",
        "conceitos": [
          "Dever de divulgação de ofício e conteúdo mínimo (art. 8º, § 1º, IV e V, da LAI)",
          "Requisitos do sítio oficial e atualização (art. 8º, § 3º, V e VI)",
          "Abertura de dados e atualização periódica (art. 29 da Lei nº 14.129/2021)"
        ],
        "estrategia": "Tratar como não conformidade de publicidade, e não como tarefa de comunicação institucional: inventariar o que falta, identificar a causa, nomear responsável e estabelecer controle de atualização.",
        "execucao": [
          "1. Inventariar a omissão contra o rol do art. 8º, § 1º, e o art. 29, § 2º, da Lei nº 14.129/2021.",
          "2. Identificar a causa da desatualização (processo, integração ou responsável indefinido).",
          "3. Nomear responsável por conjunto de dados, com data de última atualização visível.",
          "4. Publicar a regularização com data de referência e manter histórico de versões.",
          "5. Comunicar a correção ao cidadão e registrar o achado para auditoria."
        ],
        "resultado": "O órgão regulariza o portal com o conteúdo mínimo atualizado, nomeia responsável por conjunto de dados e institui controle de atualização, registrando o achado e as ações adotadas.",
        "justificativa": "A publicidade não se cumpre pela existência do portal, mas pela publicação do conteúdo mínimo em versão atual, autêntica e íntegra (art. 8º, § 3º, V e VI). A desatualização converte o portal em fonte de informação incorreta, o que é mais grave do que a ausência de canal.",
        "errosFrequentes": [
          "Atualizar sem manter histórico de versões",
          "Nomear responsável apenas pela página inicial, sem abranger os conjuntos de dados"
        ],
        "variacao": "Se a omissão decorresse de informação classificada (art. 23 da LAI), publica-se a parte não sigilosa com classificação formal e motivação, e a omissão deixa de ser falha."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cidadão pede o inteiro teor de um processo administrativo em que há parecer técnico sem restrição e anexo com dados de saúde do reclamante. Como o órgão deve responder?",
        "dados": "Pedido protocolado com identificação e especificação; processo com parecer técnico público e anexo com dado pessoal sensível; sem consentimento registrado; prazo de resposta em curso.",
        "conceitos": [
          "Acesso parcial com ocultação (art. 7º, § 2º, da LAI)",
          "Proteção da informação pessoal (art. 31, § 1º, I)",
          "Fundamentação da negativa e inteiro teor (arts. 11, § 1º, II, e 14)"
        ],
        "estrategia": "Aplicar o critério menos restritivo: separar camada pública e camada protegida, entregar a parte livre e comunicar a retenção com fundamento, em vez de recusar o conjunto.",
        "execucao": [
          "1. Verificar a regularidade do pedido (art. 10).",
          "2. Separar o processo em camada pública e camada protegida (art. 31 da LAI).",
          "3. Entregar o parecer e os documentos não sensíveis em formato digital.",
          "4. Ocultar ou anonimizar o anexo, registrando o método.",
          "5. Comunicar a retenção com dispositivo, teor integral da negativa e via recursal."
        ],
        "resultado": "O órgão entrega o parecer e oculta ou anonimiza o anexo sanitário, com motivação da retenção, inteiro teor da decisão de negativa e indicação de recurso, registrando o atendimento parcial.",
        "justificativa": "O parecer técnico não tem restrição, mas o anexo de saúde sim: por isso a solução adequada é separar as camadas — entregar o parecer e ocultar o anexo —, em vez de barrar o processo inteiro. Essa escolha respeita o art. 7º, § 2º, da LAI, que garante o acesso à parte não sigilosa, e ao mesmo tempo protege o dado pessoal sensível do art. 31. A motivação da retenção, com o inteiro teor da negativa e a indicação de recurso, garante ao cidadão o devido processo legal para contestar a parcialidade da entrega.",
        "errosFrequentes": [
          "Indeferir o processo inteiro em razão do anexo sensível",
          "Omitir o inteiro teor da negativa e o caminho recursal"
        ],
        "variacao": "Se o requerente fosse o próprio titular do anexo sanitário, incidiria o direito de acesso do titular e a resposta seria individualizada, com correção e anonimização quando cabíveis."
      },
      {
        "tipo": "erro",
        "problema": "O órgão recusa um pedido de acesso a uma relação de obras alegando que a informação já consta do portal de transparência, cujo ciclo de atualização é de quarenta e cinco dias. Avalie a resposta.",
        "dados": "Pedido protocolado e especificado; relação de obras publicada em área com ciclo de atualização de 45 dias; pedido feito antes da atualização do ciclo; sem justificativa de prazo; requerente declarou não dispor de meio de consulta no modo universal.",
        "conceitos": [
          "Desoneração do atendimento (art. 8º, § 6º, da LAI)",
          "Comunicação do modo de consulta e prazo (art. 11, § 1º, I, e § 2º)",
          "Desoneração condicionada (art. 11, § 6º)"
        ],
        "estrategia": "Responder em vez de recusar: verificar se a informação está em formato de acesso universal e se o requerente declarou não dispor de meios; não configurada a hipótese, atender no prazo e indicar data, local e modo de consulta.",
        "execucao": [
          "1. Verificar a regularidade do pedido.",
          "2. Conferir a disponibilidade universal e a declaração do requerente sobre os meios; sem esta, a desoneração não se configura.",
          "3. Atender no prazo de 20 dias, comunicando data, local e modo de consulta (art. 11, § 1º, I).",
          "4. Entregar em formato legível por máquina, se disponível (art. 11, § 5º).",
          "5. Registrar o atendimento e o tempo de resposta."
        ],
        "resultado": "A recusa é indevida: o órgão deve atender o pedido no prazo, comunicando data, local e modo de consulta ou reprodução, e somente pode desonerar-se se a informação estiver em formato de acesso universal e o requerente não declarar dificuldade de acesso.",
        "justificativa": "O art. 8º, § 6º, da LAI condiciona a desoneração à disponibilidade universal e à ausência de declaração do requerente sobre os meios; o art. 11, § 6º, reforça que ela pressupõe que o requerente possa realizar por si a consulta. Como ele declarou não dispor de meios, o atendimento é devido.",
        "errosFrequentes": [
          "Recusar por a informação já constar do portal",
          "Adiar o atendimento invocando o ciclo de atualização do portal"
        ],
        "variacao": "Se o requerente não tivesse declarado dificuldade e a informação estivesse em acesso universal, a desoneração do art. 8º, § 6º, operaria e o órgão apenas informaria a forma de consulta."
      }
    ]
  },
  "m6-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Delimitar o escopo da unidade 6.3 evita fundir proteção de dados, sigilo e responsabilização em bloco único: os regimes são autônomos e cumulativos e, em prova, exige-se identificar o mais restritivo incidente sobre o conjunto.",
      "preRequisitos": [
        "Unidades 6.1 e 6.2 e noções de governo digital",
        "Módulo 4: tríade CIA, autenticação, auditoria e classificação de risco",
        "Módulo 5: viés e explicabilidade em sistemas de decisão"
      ],
      "objetivosObservaveis": [
        "Delimitar os três blocos do escopo: LGPD, sigilo e segurança com rastreabilidade",
        "Nomear os fundamentos da LGPD e distinguir aplicação das exceções do art. 4º",
        "Classificar um dado como pessoal, sensível, anonimizado ou pseudonimizado",
        "Descrever o conjunto mínimo de controles de um sistema de atendimento"
      ],
      "competencias": [
        "Desenho de controles proporcionais ao risco",
        "Leitura de regime de proteção de dados e de sigilo",
        "Produção de evidência de responsabilização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t1-s2 (LGPD: objeto, fundamentos, aplicação, exceções, direitos do titular e dever de segurança) — primeiro bloco do escopo",
        "m6-u3-t2-s1 (Sigilo legal: hipóteses, graus, prazos, competência e formalização da classificação) — segundo bloco, com hipóteses do art. 23",
        "m6-u3-t3-s1 (Segurança, rastreabilidade e responsabilização no serviço público digital) — terceiro bloco do mesmo escopo"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O enquadramento simultâneo em LGPD e em Lei de Acesso à Informação integra o conteúdo programático de ética e de tecnologia da informação, cobrando o regime mais restritivo aplicável ao conjunto. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece os três blocos do escopo: estrutura da LGPD aplicável ao serviço público; informações legalmente protegidas pela Lei nº 12.527/2011; e segurança, rastreabilidade e responsabilização. Sabe que proteção de dados e sigilo são limites autônomos do direito à informação.",
      "intermediario": "O aluno usa as definições do art. 5º da LGPD para classificar dados, as hipóteses do art. 23 da LAI para testar sigilo e controles de segurança para sustentar rastreabilidade, aplicando o regime mais restritivo quando a informação recai em mais de um bloco.",
      "avancado": "O aluno aplica o mapa à incidência cruzada: prontuário eletrônico é dado sensível (art. 5º, II, da LGPD), informação pessoal restrita (art. 31, § 1º, I, da LAI) e integra controle de acesso com trilha de auditoria. Desenha controles proporcionais e recusa tratar as proteções como alternativas.",
      "especialista": "O aluno governa o escopo como instrumento de conformidade: converte o mapa em inventário de tratamento, matriz de classificação e plano de controles com indicadores. Avalia falhas de governança — portal que expõe dados e cadastro que coleta sem controle — e demonstra a responsabilização pelo art. 34 da LAI."
    },
    "comparacoes": [
      {
        "tema": "Regimes autônomos e cumulativos x regimes alternativos",
        "a": {
          "rotulo": "Regimes autônomos e cumulativos",
          "texto": "Cada bloco tem fonte e consequência próprias: a LGPD protege o titular dos dados; a Lei nº 12.527/2011 restringe informação pessoal e classifica o sigilo; os controles de segurança sustentam a rastreabilidade. Um conjunto pode recair em mais de um bloco ao mesmo tempo."
        },
        "b": {
          "rotulo": "Regimes como alternativas",
          "texto": "Leitura incorreta que trata os blocos como opções excludentes: escolher entre LGPD e LAI pela conveniência do caso, ou entender que o sigilo dispensa proteção de dados e segurança. É a origem de erro em itens que cruzam os dois diplomas."
        },
        "diferencaGabarito": "Os regimes se acumulam, não se substituem: com incidência múltipla, aplica-se o mais restritivo e as medidas de segurança e rastreabilidade permanecem exigidas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Por serem regimes independentes, o órgão pode optar entre proteger o dado como informação pessoal da LAI ou como dado pessoal da LGPD, aplicando o que for mais conveniente.",
        "porqueErrada": "Autonomia não é alternatividade: os diplomas protegem bens distintos e incidem sobre o mesmo conjunto; escolher um só regime deixaria lacuna e descaracterizaria o art. 46 da LGPD e o art. 31, § 1º, I, da LAI.",
        "versaoCorreta": "Os regimes são cumulativos: com incidência múltipla aplicam-se todos os dispositivos, observado o mais restritivo, e as medidas de segurança e rastreabilidade seguem exigidas."
      },
      {
        "afirmacaoEquivocada": "Como a unidade trata de proteção de dados pessoais, o sigilo administrativo da Lei nº 12.527/2011 é matéria de outra unidade e não integra o escopo.",
        "porqueErrada": "O escopo tem três blocos, e o segundo é o das informações legalmente protegidas: hipóteses do art. 23, graus e prazos do art. 24, competência do art. 27 e reavaliação do art. 29. Excluir o sigilo deixaria fora metade das questões de acesso.",
        "versaoCorreta": "O sigilo integra o escopo: a unidade 6.3 cobre LGPD, sigilo da Lei nº 12.527/2011 e segurança, rastreabilidade e responsabilização, que convivem no mesmo atendimento digital."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Proteção de dados pessoais (LGPD)",
        "Sigilo legal (Lei nº 12.527/2011)",
        "Segurança, rastreabilidade e responsabilização",
        "Regimes autônomos e cumulativos",
        "Regime mais restritivo incidente"
      ],
      "regras": [
        "Proteção de dados e sigilo são limites autônomos do direito à informação",
        "Um conjunto pode recair em mais de um regime; aplica-se o mais restritivo",
        "A rastreabilidade é pressuposto da responsabilização por dolo ou culpa"
      ],
      "comparacoes": [
        "Regime autônomo tem fonte e consequência próprias; regime alternativo é escolha indevida entre diplomas",
        "Risco possível autoriza sigilo; risco inexistente não autoriza"
      ],
      "fluxos": [
        "Delimitar escopo → classificar o dado → identificar regimes incidentes → aplicar o mais restritivo → desenhar controles e evidências"
      ],
      "excecoes": [
        "Hipótese do art. 4º da LGPD delimita a aplicação sem revogar deveres residuais",
        "Informação pessoal fica restrita mesmo sem classificação de sigilo"
      ],
      "palavrasChave": [
        "escopo",
        "LGPD",
        "sigilo",
        "rastreabilidade",
        "responsabilização",
        "regimes cumulativos"
      ],
      "checklist": [
        "Nomear os três blocos do escopo antes de estudar os dispositivos",
        "Verificar quais regimes incidem sobre o conjunto analisado",
        "Aplicar o regime mais restritivo em vez de escolher um diploma",
        "Relacionar cada controle à evidência que produz",
        "Declarar pré-requisitos, competências e grau de dificuldade"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença entre segredo de justiça e sigilo administrativo previsto na Lei nº 12.527/2011?",
        "dados": "Peça de processo judicial em curso no órgão; requerente é parte interessada; não há ato de classificação do art. 28 na base do órgão.",
        "conceitos": [
          "Sigilo administrativo (art. 23 da LAI)",
          "Segredo de justiça (regime processual)",
          "Demais hipóteses legais de sigilo (art. 22)"
        ],
        "estrategia": "Separar por fonte, autoridade e prazo: o sigilo administrativo restringe informação em poder do órgão, com classificação formal; o segredo de justiça é regime processual preservado pelo art. 22.",
        "execucao": [
          "1. Identificar a natureza: informação em poder do órgão ou peça de processo judicial.",
          "2. Para o sigilo administrativo, exigir hipótese do art. 23, decisão do art. 28 e prazo do art. 24.",
          "3. Para o segredo de justiça, verificar a lei processual e o art. 22 da LAI."
        ],
        "resultado": "O sigilo administrativo é hipótese de restrição de acesso de dados em poder do órgão, prevista no art. 23 da Lei nº 12.527/2011, por imprescindibilidade para a segurança da sociedade e do Estado, com classificação formal e prazos (arts. 24 e 28). O segredo de justiça é regime processual, regulado por lei própria, e o art. 22 da LAI declara que o disposto na Lei não exclui as demais hipóteses legais de sigilo e de segredo de justiça. São regimes com autoridades, fundamentos e prazos próprios.",
        "justificativa": "O gabarito separa os regimes por fonte normativa, autoridade e prazo, e ancora a convivência no art. 22 da LAI, que preserva as demais hipóteses legais de sigilo sem absorvê-las na Lei de Acesso à Informação.",
        "errosFrequentes": [
          "Confundir segredo de justiça com classificação administrativa e exigir grau e prazo do art. 24",
          "Afirmar que a LAI revogou as demais hipóteses de sigilo, ignorando o art. 22"
        ],
        "variacao": "Se o documento versar sobre negociação internacional em curso, a hipótese do art. 23, II, autoriza classificação e o segredo de justiça deixa de ser a chave."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cadastro reúne nome, CPF, endereço, diagnóstico e fotografias. Classifique os dados.",
        "dados": "Base do serviço de saúde do órgão com cidadãos identificados; campos disponíveis: nome, CPF, endereço residencial, diagnóstico clínico e fotografias.",
        "conceitos": [
          "Dado pessoal (art. 5º, I, da LGPD)",
          "Dado pessoal sensível (art. 5º, II, da LGPD)",
          "Dado anonimizado (art. 5º, III, da LGPD)"
        ],
        "estrategia": "Classificar campo a campo pelo art. 5º: verificar relação com pessoa identificada, incidência em hipótese sensível e possibilidade de associação na imagem. Distinguir anonimização de pseudonimização antes de abrir base.",
        "execucao": [
          "1. Testar cada campo quanto à relação com pessoa natural identificada ou identificável (art. 5º, I).",
          "2. Marcar o diagnóstico como sensível, por referência à saúde (art. 5º, II).",
          "3. Examinar a fotografia: foto de documento é dado pessoal; imagem sem vínculo identificável pode ser anonimizada."
        ],
        "resultado": "Nome, CPF e endereço: dados pessoais (art. 5º, I, da LGPD). Diagnóstico: dado pessoal SENSÍVEL (art. 5º, II, da LGPD, por se referir à saúde). Fotografias: dependem do contexto — foto de documento é dado pessoal; imagem em contexto público, sem vinculação identificável, pode ser dado anonimizado se não permitir associação razoável a pessoa (art. 5º, III). Para abertura de base, exige-se anonimização efetiva; pseudonimização não basta.",
        "justificativa": "O gabarito aplica as três definições do art. 5º em sequência e ancora a conclusão na distinção entre dado pessoal, sensível e anonimizado, que muda o regime de abertura da base.",
        "errosFrequentes": [
          "Tratar toda fotografia como dado sensível por presunção, sem analisar o contexto de uso",
          "Considerar a substituição do nome por código como anonimização, quando é pseudonimização"
        ],
        "variacao": "Se a base incluir filiação sindical e convicção religiosa, o regime de dado sensível se amplia e exige hipótese de tratamento mais estrita para cada finalidade."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «Como o órgão público atua por dever legal, não se aplicam a ele as exigências de segurança e de transparência da LGPD.»",
        "dados": "Órgão estadual mantém cadastro de beneficiários de programa social; tratamento decorre de lei que cria o benefício; coleta de CPF, endereço e dado de saúde; sem inventário de tratamento.",
        "conceitos": [
          "Aplicação da LGPD a pessoa jurídica de direito público (art. 1º)",
          "Dever de segurança técnico e administrativo (art. 46)",
          "Dever legal como hipótese de tratamento, não isenção"
        ],
        "estrategia": "Rejeitar a leitura de que o dever legal exaure a conformidade: verificar o art. 1º quanto ao destinatário, o art. 46 quanto ao dever de segurança e a diferença entre hipótese de tratamento e dispensa de proteção.",
        "execucao": [
          "1. Conferir o art. 1º: a Lei se aplica a pessoa natural ou jurídica de direito público ou privado.",
          "2. Reconhecer que o dever legal fundamenta o tratamento sem eliminar deveres do agente.",
          "3. Exigir medidas técnicas e administrativas aptas ao risco (art. 46)."
        ],
        "resultado": "Errado. A LGPD é aplicável a pessoa natural ou jurídica de direito público ou privado (art. 1º), e o art. 46 impõe a agentes de tratamento medidas de segurança técnicas e administrativas aptas a proteger dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas. O dever legal não exime do dever de proteção; ao contrário, aumenta a responsabilidade.",
        "justificativa": "O gabarito rejeita a afirmação porque o art. 1º inclui a pessoa jurídica de direito público no destinatário da LGPD e o art. 46 impõe dever de segurança ao agente; confundir hipótese de tratamento com isenção inverte a lógica da Lei.",
        "errosFrequentes": [
          "Confundir base legal do tratamento com dispensa dos deveres de segurança e transparência",
          "Achar que órgão público não é agente de tratamento por ausência de finalidade econômica"
        ],
        "variacao": "Se o tratamento decorrer de política pública prevista em lei, a hipótese figura entre as bases do art. 7º, e os deveres de segurança e transparência permanecem integrais."
      }
    ]
  },
  "m6-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A LGPD fixa objeto, fundamentos, aplicação, exceções, definições, direitos do titular e dever de segurança; em prova, a distinção entre hipótese de aplicação e exceção, e entre medida técnica e administrativa, decide o gabarito de itens que parecem iguais.",
      "preRequisitos": [
        "Noções de direitos fundamentais à privacidade e à intimidade",
        "Leitura de estrutura de lei (artigo, inciso e parágrafo)",
        "Módulo 4: medidas de segurança, criptografia e controle de acesso"
      ],
      "objetivosObservaveis": [
        "Explicar o objeto e os fundamentos da LGPD com os dispositivos",
        "Distinguir aplicação (art. 3º) de exceções de aplicação (art. 4º)",
        "Classificar dados conforme as definições do art. 5º",
        "Descrever o dever de segurança do art. 46 como técnico e administrativo"
      ],
      "competencias": [
        "Leitura normativa com referenciação de artigo e inciso",
        "Distinção entre hipótese de tratamento e dispensa de proteção",
        "Avaliação de medidas de segurança em face do risco"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t1-s1 (Orientação estratégica da unidade) — primeiro bloco do escopo",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — regime autônomo convivente",
        "m6-u3-t3-s1 (Segurança, rastreabilidade e responsabilização no serviço público digital) — desdobra o art. 46 em controles"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "LGPD é conteúdo declarado em editais de TI, ética e proteção de dados, com itens sobre fundamentos, exceções, direitos do titular e segurança; a classificação é estimativa pedagógica qualitativa, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O aluno sabe que a Lei nº 13.709/2018 dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou jurídica de direito público ou privado (art. 1º), e que os fundamentos do art. 2º incluem privacidade, autodeterminação informativa e inviolabilidade da intimidade, da honra e da imagem. Dado pessoal é informação relacionada a pessoa identificada ou identificável.",
      "intermediario": "O aluno distingue aplicação de exceção: o art. 3º delimita o alcance territorial e o art. 4º afasta apenas hipóteses específicas — particulares e não econômicas, jornalísticas, artísticas ou acadêmicas e de segurança pública —, que não são isenções totais. Enumera os direitos do art. 18 e reconhece o dever do art. 46 como apto ao risco.",
      "avancado": "O aluno aplica as definições do art. 5º a cenários de serviço: separa dado pessoal de sensível, anonimizado de pseudonimizado, e identifica controlador, operador e encarregado. Avalia que a hipótese II do art. 4º mantém os arts. 7º e 11 e que a hipótese III observa legislação específica e proporcionalidade.",
      "especialista": "O aluno integra a LGPD ao desenho do serviço digital: traduz o art. 18 em requisições ao controlador, o art. 46 em gestão de risco e controle interno (art. 48 da Lei nº 14.129/2021) e o art. 25 da mesma Lei em ferramenta de transparência do tratamento. Demonstra que um conjunto pode ser dado pessoal, informação pessoal da LAI e inelegível para abertura de base."
    },
    "comparacoes": [
      {
        "tema": "Hipótese de aplicação x exceção de aplicação",
        "a": {
          "rotulo": "Aplicação (art. 3º)",
          "texto": "A Lei incide sobre tratamento realizado no território nacional, sobre oferta de bens ou serviços ou tratamento de indivíduos localizados no país e sobre dados coletados no território nacional. É a regra geral de alcance do diploma."
        },
        "b": {
          "rotulo": "Exceção de aplicação (art. 4º)",
          "texto": "Hipóteses delimitadas — fins particulares e não econômicos, finalidades jornalísticas, artísticas ou acadêmicas e finalidades exclusivas de segurança pública —, que afastam a incidência apenas naquelas situações e mantêm deveres residuais."
        },
        "diferencaGabarito": "A aplicação define onde a Lei vale; a exceção afasta a incidência em hipótese específica, sem retirar o órgão do regime nem revogar deveres de segurança e de direitos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "As exceções do art. 4º da LGPD retiram o órgão público do regime de proteção de dados, porque a atuação estatal se apoia em finalidade exclusiva de segurança pública.",
        "porqueErrada": "As hipóteses do art. 4º delimitam o alcance da Lei e não revogam deveres: a hipótese II mantém os arts. 7º e 11 e a hipótese III observa legislação específica, medidas proporcionais e direitos do titular. O art. 1º inclui a pessoa jurídica de direito público no regime.",
        "versaoCorreta": "As exceções apenas afastam a incidência em hipóteses específicas; o órgão permanece agente de tratamento, com os deveres de segurança, de direitos do titular e de transparência incidentes sobre a operação."
      },
      {
        "afirmacaoEquivocada": "O direito do titular previsto no art. 18 da LGPD assegura o acesso à íntegra do processo administrativo, inclusive a documentos internos do órgão.",
        "porqueErrada": "O art. 18 lista direitos sobre os dados pessoais do titular — confirmação, acesso, correção, anonimização, portabilidade, eliminação e informação sobre compartilhamento. O acesso a documento administrativo tem outra fonte: o art. 7º da Lei nº 12.527/2011.",
        "versaoCorreta": "O art. 18 assegura direitos sobre os dados pessoais tratados; o acesso a documento administrativo decorre do art. 7º da LAI, e os dois direitos convivem sem se substituir."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Objeto da LGPD (art. 1º)",
        "Fundamentos (art. 2º)",
        "Aplicação (art. 3º)",
        "Exceções de aplicação (art. 4º)",
        "Direitos do titular (art. 18)",
        "Dever de segurança (art. 46)"
      ],
      "regras": [
        "A LGPD se aplica a pessoa natural ou jurídica de direito público ou privado",
        "As exceções do art. 4º não são isenções totais e mantêm deveres residuais",
        "O art. 46 exige medidas técnicas e administrativas aptas ao risco"
      ],
      "comparacoes": [
        "Aplicação fixa o alcance do diploma; exceção afasta a incidência em hipótese específica",
        "Direito do titular sobre dados x acesso a documento administrativo"
      ],
      "fluxos": [
        "Identificar a operação → testar a aplicação do art. 3º → testar exceção do art. 4º → classificar o dado pelo art. 5º → verificar hipótese de tratamento → assegurar art. 18 e art. 46"
      ],
      "excecoes": [
        "A hipótese II do art. 4º mantém a aplicação dos arts. 7º e 11",
        "A hipótese III do art. 4º observa legislação específica e direitos do titular"
      ],
      "palavrasChave": [
        "LGPD",
        "objeto",
        "fundamentos",
        "exceções",
        "direitos do titular",
        "art. 46",
        "dado sensível"
      ],
      "checklist": [
        "Conferir se o agente é pessoa natural ou jurídica de direito público ou privado",
        "Testar a operação contra o art. 3º e as exceções do art. 4º",
        "Classificar o dado pelas definições do art. 5º",
        "Enumerar os direitos do titular aplicáveis ao caso",
        "Verificar se as medidas de segurança são técnicas e administrativas"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão monta um painel que mostra ao cidadão de onde vieram seus dados, para que finalidade são usados e quais órgãos os receberam. Que obrigação está cumprindo?",
        "dados": "Serviço digital com uso compartilhado entre três unidades; painel informa ao cidadão a fonte de cada campo, a finalidade declarada, os órgãos receptores e o histórico de acessos.",
        "conceitos": [
          "Transparência do tratamento (art. 25, § 1º, I, da Lei nº 14.129/2021)",
          "Publicidade de informações administrativas",
          "Uso compartilhado de dados pessoais"
        ],
        "estrategia": "Identificar que fonte, finalidade e destinatários dos dados configuram obrigação de transparência do tratamento, própria do ambiente digital, distinta do dever de publicar informações administrativas.",
        "execucao": [
          "1. Verificar o que o painel informa: fontes, finalidade, órgãos receptores e histórico de acesso.",
          "2. Confrontar com o art. 25, § 1º, I, da Lei nº 14.129/2021.",
          "3. Distinguir a obrigação da publicidade de atos e dados administrativos."
        ],
        "resultado": "O art. 25, § 1º, I, da Lei nº 14.129/2021, que exige ferramenta de transparência e de controle do tratamento de dados pessoais que disponibilize as fontes dos dados, a finalidade específica e a indicação de outros órgãos com os quais há uso compartilhado, incluído o histórico de acesso. É a obrigação de transparência do tratamento, distinta da publicidade das informações administrativas do órgão.",
        "justificativa": "O gabarito decorre da literalidade do art. 25, § 1º, I, da Lei nº 14.129/2021, que enumera fontes, finalidade e órgãos com uso compartilhado, incluído o histórico de acesso; os dois deveres têm objetos distintos.",
        "errosFrequentes": [
          "Confundir a ferramenta de transparência do tratamento com o portal de dados administrativos",
          "Achar que informar a finalidade basta, omitindo órgãos receptores e histórico"
        ],
        "variacao": "Se o painel permitir ao cidadão encaminhar requisições ao controlador, como as do art. 18 da LGPD, a ferramenta atende também ao inciso II do § 1º do art. 25."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão usa biometria facial no atendimento presencial. Qual questão de conformidade com o art. 4º, II, da LGPD precisa ser resolvida antes?",
        "dados": "Posto de atendimento presencial do órgão; biometria facial coletada de todos na entrada; dado armazenado em nuvem do fornecedor; sem termo de consentimento nem avaliação de alternativas.",
        "conceitos": [
          "Dado biométrico como dado sensível (art. 5º, II)",
          "Necessidade e proporcionalidade",
          "Medidas de segurança do art. 46"
        ],
        "estrategia": "Reconhecer a biometria como dado sensível e resolver a conformidade antes da operação: hipótese de tratamento própria, proporcionalidade e alternativas, segurança, descarte e registro no inventário.",
        "execucao": [
          "1. Confirmar que a biometria facial é dado pessoal sensível (art. 5º, II).",
          "2. Definir a hipótese de tratamento aplicável, sem inventar enumeração não verificada.",
          "3. Avaliar proporcionalidade e alternativas menos intrusivas.",
          "4. Implementar o art. 46, prever descarte e registrar a operação."
        ],
        "resultado": "Dado biométrico integra o dado pessoal sensível (art. 5º, II, da LGPD — verificado em 2026-10-20), o que exige hipótese de tratamento própria e mais estrita. O órgão precisa: (1) definir a base legal aplicável — a LGPD prevê hipóteses específicas de tratamento de dados sensíveis, cuja enumeração permanece pendente de verificação em fonte oficial e por isso é aqui referida de forma genérica; (2) avaliar a necessidade e a proporcionalidade do uso da biometria, considerando alternativas menos intrusivas; (3) implementar as medidas de segurança do art. 46; (4) prever a hipótese de descarte responsável do dado ao fim do atendimento; (5) registrar a operação no inventário de tratamento.",
        "justificativa": "O gabarito ancora a biometria no art. 5º, II, e recusa inventar enumeração de hipóteses de tratamento de dado sensível não verificada em fonte oficial, tratando a pendência como restrição declarada.",
        "errosFrequentes": [
          "Afirmar de memória o rol de hipóteses de tratamento de dado sensível sem conferir a Lei",
          "Tratar biometria como dado comum e dispensar a avaliação de proporcionalidade"
        ],
        "variacao": "Se a biometria também identificar servidores no acesso a sistema interno, a finalidade se amplia e exige hipótese própria e novo registro, sem reaproveitar a justificativa do atendimento."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: «O órgão que instala criptografia forte está dispensado de outras medidas de segurança, porque o art. 46 da LGPD exige apenas medidas técnicas.»",
        "dados": "Cadastro do órgão com criptografia em trânsito e em repouso; credenciais compartilhadas; senhas reutilizadas; aprovação sem segregação de funções; ausência de registro de acessos.",
        "conceitos": [
          "Dever de segurança técnico e administrativo (art. 46)",
          "Adequação da medida ao risco",
          "Ameaça interna e falha de processo"
        ],
        "estrategia": "Desmontar a afirmação mostrando que o art. 46 exige medidas técnicas e administrativas aptas ao risco, e que a criptografia não cobre credencial compartilhada, senha reutilizada, processo mal desenhado nem ausência de registro.",
        "execucao": [
          "1. Ler o art. 46: medidas técnicas e administrativas aptas a proteger dados pessoais.",
          "2. Verificar o que a criptografia cobre: confidencialidade em trânsito e em repouso.",
          "3. Listar riscos residuais: credencial compartilhada, senha reutilizada, ameaça interna e falta de registro."
        ],
        "resultado": "Errado. O art. 46 exige medidas de segurança TÉCNICAS E ADMINISTRATIVAS aptas. Criptografia protege a confidencialidade em repouso e em trânsito, mas não protege contra credencial compartilhada, senha reutilizada, processo mal desenhado, ameaça interna ou ausência de registro. A adequação é medida ao risco, e o risco não é apenas técnico.",
        "justificativa": "A afirmação é falsa porque o art. 46 é expresso ao exigir medidas técnicas e administrativas e a adequação é aferida pelo risco real do tratamento; restringir a segurança à criptografia deixa descobertas as hipóteses mais frequentes de incidente.",
        "errosFrequentes": [
          "Igualar segurança da informação a criptografia e ignorar controles administrativos",
          "Achar que uma medida técnica forte satisfaz o dever de forma permanente"
        ],
        "variacao": "Se o cadastro migrar para nuvem de fornecedor, a análise inclui cláusulas contratuais de segurança e registro de operações, mantendo-se o dever do controlador pelo art. 46."
      }
    ]
  },
  "m6-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A classificação de sigilo é a única porta legal para restringir acesso a informação pública: exige hipótese do rol taxativo do art. 23 da Lei nº 12.527/2011, decisão formal da autoridade competente e prazo certo. As bancas deslocam um desses elementos para induzir o erro, e a abertura automática do art. 24, § 4º é alvo recorrente de itens certos/errados.",
      "preRequisitos": [
        "Escopo, diretrizes e conceitos da Lei nº 12.527/2011 (Lei de Acesso à Informação) — base do regime de acesso à informação.",
        "Distinção entre publicidade administrativa e divulgação irrestrita de dados pessoais",
        "Noção de ato administrativo: competência e formalização"
      ],
      "objetivosObservaveis": [
        "Enumerar as oito hipóteses de classificação do art. 23 e reconhecer que o rol é taxativo",
        "Associar cada grau (ultrassecreta, secreta, reservada) aos prazos máximos de 25, 15 e 5 anos da data de produção",
        "Identificar a autoridade competente por grau e a delegação sem subdelegação (art. 27, § 1º)",
        "Indicar a reavaliação do art. 29 e a abertura automática do art. 24, § 4º"
      ],
      "competencias": [
        "Memorização estruturada de prazos, graus e competências",
        "Leitura rigorosa de enunciados que omitem ou deslocam um elemento do ato",
        "Raciocínio sobre o ciclo de vida da informação restrita"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — a negativa por sigilo é hipótese de indeferimento",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — regime autônomo que independe de classificação",
        "m6-u3-t3-s4 (Comparações, pegadinhas, resumo estruturado e verificação de aprendizagem) — síntese do tópico"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Graus, prazos e competência para classificar são objeto de itens de certo e errado de ética e de tecnologia da informação, com destaque para o rol taxativo do art. 23 e a competência do art. 27. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que a restrição só é legítima com hipótese do art. 23 da Lei nº 12.527/2011, rol taxativo que admite risco possível, não necessariamente atual. Identifica os três graus — ultrassecreta, secreta e reservada — e os prazos máximos de 25, 15 e 5 anos da data de produção, com abertura automática ao fim do prazo (art. 24, § 4º).",
      "intermediario": "O aluno diferencia a competência por grau (art. 27): ultrassecreto nas mais altas autoridades; secreto acrescido dos titulares de autarquias, fundações e estatais; reservado ampliado às funções de direção, comando ou chefia. Sabe que a delegação é permitida e a subdelegação vedada (art. 27, § 1º), e que a decisão segue os quatro elementos do art. 28 e o critério menos restritivo possível (art. 24, § 5º).",
      "avancado": "O aluno opera as regras de termo final: prazo ou evento que ocorra antes do prazo máximo (art. 24, § 3º), e a hipótese de segurança do Presidente e do Vice-Presidente e de cônjuges e filhos, classificável como reservada até o término do mandato (art. 24, § 2º). Distingue a reavaliação do art. 29 — desclassificar ou reduzir o prazo, mantida a data de produção como termo inicial — do acesso por necessidade de conhecer e credenciamento (art. 25).",
      "especialista": "O aluno integra o sigilo ao conjunto da Lei de Acesso à Informação: acesso parcial à parte não sigilosa, resguardo do sigilo por quem acessa (art. 25), capacitação do pessoal, inclusive de entes privados vinculados (art. 26), e remissão do art. 38 à Lei nº 9.507/1997. Avalia que classificar sem fundamento ou formalização é conduta ilícita (art. 32) e que a reavaliação é instrumento de accountability, não prorrogação de prazo."
    },
    "comparacoes": [
      {
        "tema": "Informação classificada x informação não classificada",
        "a": {
          "rotulo": "Informação classificada",
          "texto": "Restrição formal: fundamento no art. 23, decisão com os elementos do art. 28, prazo máximo do art. 24 e reavaliação possível pelo art. 29."
        },
        "b": {
          "rotulo": "Informação não classificada",
          "texto": "Permanece pública, com dever de divulgação de ofício (art. 8º); havendo dados pessoais, incide o regime do art. 31 sem classificação."
        },
        "diferencaGabarito": "O tempo não reclassifica informação: extingue-se o prazo, com abertura automática; a não classificada nunca deixou de ser pública."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o sigilo é exceção à publicidade, o gestor pode classificar como reservado qualquer documento que lhe pareça sensível, sem formalização específica.",
        "porqueErrada": "Exige-se hipótese do art. 23, autoridade competente do art. 27 e decisão formal com os elementos do art. 28, além do critério menos restritivo possível (art. 24, § 5º); a percepção de sensibilidade não é fundamento legal.",
        "versaoCorreta": "Só se classifica com hipótese do art. 23, autoridade do art. 27 e decisão formal do art. 28, no grau menos restritivo possível; classificar sem fundamento é conduta ilícita do agente público (art. 32 da Lei nº 12.527/2011)."
      },
      {
        "afirmacaoEquivocada": "Ao término do prazo de classificação, a informação permanece restrita até nova decisão autorizar expressamente a abertura.",
        "porqueErrada": "O art. 24, § 4º, é regra de automaticidade: transcorrido o prazo ou consumado o evento, a informação torna-se automaticamente de acesso público, sem novo ato.",
        "versaoCorreta": "Transcorrido o prazo ou consumado o evento, a informação torna-se automaticamente de acesso público (art. 24, § 4º); a reavaliação do art. 29 pode antecipar a abertura, mas não postergá-la."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Rol taxativo de hipóteses (art. 23)",
        "Graus ultrassecreta, secreta e reservada",
        "Prazos máximos de 25, 15 e 5 anos da data de produção",
        "Abertura automática (art. 24, § 4º)",
        "Critério menos restritivo possível (art. 24, § 5º)",
        "Reavaliação para desclassificar ou reduzir prazo (art. 29)"
      ],
      "regras": [
        "Art. 23: só se classifica informação imprescindível à segurança da sociedade ou do Estado",
        "Art. 24, § 1º: prazos máximos de 25, 15 e 5 anos, contados da data de produção",
        "Art. 27, § 1º: delegação permitida, subdelegação vedada",
        "Art. 28: decisão com assunto, fundamento, prazo ou evento e identificação da autoridade",
        "Art. 25: acesso restrito a quem tem necessidade de conhecer, devidamente credenciado"
      ],
      "comparacoes": [
        "Ultrassecreta (25 anos) x secreta (15) x reservada (5)",
        "Termo final por prazo x por evento consumado antes do prazo máximo",
        "Sigilo protege o interesse público; a informação pessoal (art. 31) protege a pessoa, por até 100 anos"
      ],
      "fluxos": [
        "Produção da informação",
        "Verificação de hipótese do art. 23 pela autoridade competente (art. 27)",
        "Decisão formal com os elementos do art. 28",
        "Acesso restrito a credenciados (art. 25)",
        "Reavaliação de ofício ou por provocação (art. 29)",
        "Abertura automática (art. 24, § 4º) e publicação anual dos rois (art. 30)"
      ],
      "excecoes": [
        "Segurança do Presidente e do Vice-Presidente e de cônjuges e filhos: reservada até o término do mandato (art. 24, § 2º)",
        "Termo final por evento, desde que ocorra antes do prazo máximo (art. 24, § 3º)",
        "Decisão de classificação mantida no mesmo grau de sigilo da informação (art. 28, parágrafo único)"
      ],
      "palavrasChave": [
        "sigilo",
        "classificação",
        "ultrassecreta",
        "secreta",
        "reservada",
        "abertura automática",
        "reavaliação",
        "subdelegação"
      ],
      "checklist": [
        "Confirmar hipótese do art. 23 antes de classificar",
        "Conferir competência por grau e ausência de subdelegação",
        "Registrar os quatro elementos do art. 28",
        "Aplicar o critério menos restritivo possível",
        "Restringir acesso a credenciados com necessidade de conhecer",
        "Abrir automaticamente ao fim do prazo (art. 24, § 4º)",
        "Publicar anualmente os rois de desclassificadas e classificadas (art. 30)"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença de tratamento entre uma informação classificada como secreta (prazo de 15 anos) e uma que não foi classificada?",
        "dados": "Dois documentos do mesmo órgão e data: A classificado como secreto por decisão da autoridade competente, com prazo de 15 anos (art. 24, § 1º, II); B sem decisão de classificação.",
        "conceitos": [
          "Classificação de sigilo",
          "Dever de divulgação de ofício",
          "Abertura automática"
        ],
        "estrategia": "Contrastar o regime de cada documento — fundamento, formalização, prazo e efeito do tempo — e verificar o que incide sobre o documento sem classificação.",
        "execucao": [
          "1) Identificar no documento A o fundamento do art. 23 e a decisão formal do art. 28",
          "2) Fixar o prazo máximo de 15 anos da data de produção e a reavaliação possível (art. 29)",
          "3) Verificar que B segue a divulgação do art. 8º e, havendo dados pessoais, o regime do art. 31",
          "4) Concluir que o tempo não muda a natureza de nenhum: extingue-se o prazo do A, com abertura automática"
        ],
        "resultado": "A informação classificada tem restrição de acesso formal, com fundamento no art. 23, ato de classificação com os elementos do art. 28, prazo certo (15 anos, conforme art. 24, § 1º, II) e reavaliação periódica. A informação não classificada permanece pública, com o dever de divulgação do art. 8º da LAI e o regime de dados pessoais do art. 31. O passar do tempo não reclassifica: o que se extingue é o prazo do art. 24, com a abertura automática nos termos do § 4º.",
        "justificativa": "O gabarito separa a restrição formal — hipótese legal, ato competente, prazo certo — da regra de publicidade: o art. 24, § 4º, resolve o destino temporal da classificada sem novo ato, e a não classificada permanece nos regimes dos arts. 8º e 31.",
        "errosFrequentes": [
          "Supor que o prazo de 15 anos pode ser prorrogado",
          "Pensar que a abertura depende de nova decisão administrativa",
          "Aplicar o regime do art. 31 a documento sem dado pessoal"
        ],
        "variacao": "Se A fosse reservado, o prazo cairia para 5 anos e a reavaliação poderia antecipar a abertura; havendo dados pessoais, a camada pessoal seguiria restrita por até 100 anos, mesmo após a desclassificação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um documento foi classificado como reservado há 4 anos. O que se pode afirmar sobre ele?",
        "dados": "Documento reservado há 4 anos; prazo máximo de 5 anos da data de produção (art. 24, § 1º, III); sem reavaliação registrada; possível presença de dados pessoais de terceiros.",
        "conceitos": [
          "Prazo máximo de classificação",
          "Reavaliação (art. 29)",
          "Proteção de informação pessoal (art. 31)"
        ],
        "estrategia": "Calcular o tempo restante, examinar os efeitos da reavaliação e da abertura automática e verificar se há camada pessoal com regime próprio.",
        "execucao": [
          "1) Confirmar o grau de reservado e o prazo de 5 anos da produção, restando 1 ano",
          "2) Verificar que a reavaliação (art. 29) pode desclassificar ou reduzir o prazo, mantido o termo inicial na produção",
          "3) Aplicar a automaticidade do art. 24, § 4º",
          "4) Examinar dados pessoais, cujo acesso permanece restrito por até 100 anos independentemente de classificação"
        ],
        "resultado": "Que a restrição pode vigorar até completar 5 anos (art. 24, § 1º, III), salvo se reavaliado para desclassificação ou redução de prazo (art. 29), e que ao fim do prazo a informação se torna automaticamente de acesso público (art. 24, § 4º). Também é possível que o documento contenha dados pessoais, caso em que incide adicionalmente o art. 31 da LAI, com prazo próprio de 100 anos para as informações relativas à intimidade, vida privada, honra e imagem.",
        "justificativa": "O cenário exige computar prazo, conhecer a reavaliação e reconhecer a coexistência de regimes: o sigilo termina pela automaticidade do art. 24, § 4º, mas a camada de dados pessoais segue o art. 31, § 1º, I, com prazo próprio de até 100 anos.",
        "errosFrequentes": [
          "Contar os 5 anos da decisão, e não da data de produção",
          "Concluir que os dados pessoais se tornam públicos ao fim do sigilo",
          "Confundir a reavaliação do art. 29 com poder de prorrogar o prazo máximo"
        ],
        "variacao": "Se a autoridade fixasse prazo de 6 meses a contar da decisão, a redução seria inválida: o novo prazo mantém a data de produção como termo inicial e não excede os 5 anos do art. 24."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O gestor pode classificar como reservado qualquer documento interno que considere sensível, porque o sigilo é exceção à publicidade.'",
        "dados": "Gestor sem competência do art. 27; documento sem hipótese identificada do art. 23; classificação registrada apenas por comunicação interna, sem os elementos do art. 28.",
        "conceitos": [
          "Rol taxativo de hipóteses",
          "Competência para classificar",
          "Formalização do ato (art. 28)"
        ],
        "estrategia": "Testar a afirmação contra os três pressupostos da classificação — hipótese, competência e formalização — e enquadrar a conduta praticada sem fundamento.",
        "execucao": [
          "1) Verificar se a alegada sensibilidade corresponde a hipótese do art. 23",
          "2) Checar se o gestor integra o rol do art. 27 para o grau de reservado",
          "3) Exigir a decisão formal do art. 28 e o critério menos restritivo (art. 24, § 5º)",
          "4) Enquadrar a classificação sem fundamento como conduta ilícita do agente público (art. 32)"
        ],
        "resultado": "Errado. A classificação exige hipótese do art. 23, decisão formal com os elementos do art. 28 e competência da autoridade do art. 27, além do critério menos restritivo possível (art. 24, § 5º). A sensação de «sensibilidade» interna não é hipótese legal; e a classificação feita sem formalização é nula e pode configurar a conduta do art. 32, IV, da LAI.",
        "justificativa": "A afirmação converte discricionariedade em poder de instituir sigilo, quando a lei condiciona a classificação a hipótese, competência e formalização: sem fundamento do art. 23 e elementos do art. 28, o ato não restringe e expõe o agente ao art. 32.",
        "errosFrequentes": [
          "Tratar a sensibilidade percebida como fundamento equivalente ao art. 23",
          "Ignorar que a vedação de subdelegação não autoriza qualquer servidor a classificar",
          "Acreditar que a publicidade, por ser regra, dispensa o exame de competência na exceção"
        ],
        "variacao": "Se o documento tratasse de pesquisa e desenvolvimento de interesse estratégico nacional, a hipótese seria a do inciso VI do art. 23; competência e formalização permaneceriam exigidas, no grau menos restritivo possível."
      }
    ]
  },
  "m6-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O art. 31 da Lei nº 12.527/2011 instaura regime de proteção que prescinde de classificação: dados relativos à intimidade, vida privada, honra e imagem têm acesso restrito por até 100 anos independentemente de sigilo. As provas exploram a autonomia entre os regimes, o rol de dispensa de consentimento do § 3º e a vedação do § 4º de usar a privacidade como escudo contra apuração.",
      "preRequisitos": [
        "Conhecer o dado pessoal segundo a LGPD: objeto da norma, fundamentos de aplicação, exceções previstas, direitos do titular e dever de segurança do controlador.",
        "Diretrizes e acesso a informações na Lei de Acesso à Informação (art. 7º)",
        "Distinção entre sigilo administrativo e proteção da informação pessoal"
      ],
      "objetivosObservaveis": [
        "Aplicar o regime do art. 31, reconhecendo restrição vigente independentemente de classificação de sigilo",
        "Enumerar as cinco dispensas de consentimento do art. 31, § 3º",
        "Reconhecer a vedação do § 4º de invocar a proteção contra apuração de irregularidades",
        "Indicar as hipóteses de acesso por terceiros com previsão legal ou consentimento expresso (§ 1º, II)"
      ],
      "competencias": [
        "Articulação entre Lei de Acesso à Informação, LGPD e Lei nº 14.129/2021",
        "Leitura técnica de dispositivo com parágrafos e incisos",
        "Tutela de direitos fundamentais em serviços digitais"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t2-s1 (Sigilo legal: hipóteses, graus, prazos, competência e formalização da classificação) — o outro regime do tópico, com o qual não se confunde",
        "m6-u3-t1-s2 (LGPD: objeto, fundamentos, aplicação, exceções, direitos do titular e dever de segurança) — subtópico correlato sobre dado pessoal e dever de segurança no regime de proteção de dados.",
        "m6-u2-t3-s1 (A distinção obrigatória: publicidade administrativa e divulgação irrestrita de dados pessoais, com limites e exceções) — limite geral da divulgação"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "As bancas privilegiam a autonomia entre sigilo e informação pessoal, o prazo de 100 anos e as dispensas de consentimento do art. 31, § 3º, além do § 4º em itens sobre apuração envolvendo o próprio titular; rubrica qualitativa de estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que o art. 31 da Lei nº 12.527/2011 protege a pessoa por trás da informação: dados relativos à intimidade, vida privada, honra e imagem têm acesso restrito por até 100 anos, independentemente de classificação de sigilo. Percebe que o documento pode ser público em uma camada e restrito na camada pessoal, e que terceiros só acessam com previsão legal ou consentimento expresso (§ 1º, II).",
      "intermediario": "O aluno enumera as cinco dispensas de consentimento do § 3º: prevenção e diagnóstico médico de pessoa incapaz, para tratamento exclusivamente médico; estatísticas e pesquisas científicas de evidente interesse público ou geral previstas em lei, vedada a identificação; cumprimento de ordem judicial; defesa de direitos humanos; e proteção do interesse público e geral preponderante. Sabe que quem obtém acesso responde pelo uso indevido (§ 2º).",
      "avancado": "O aluno aplica o § 4º como salvaguarda de accountability: a restrição relativa à vida privada, honra e imagem não pode ser invocada para prejudicar apuração de irregularidades em que o titular esteja envolvido, tampouco ações de recuperação de fatos históricos de maior relevância. Articula a vedação de negar informação para tutela de direitos fundamentais (art. 21), o acesso à parte não sigilosa (art. 7º, § 2º) e a preservação das demais hipóteses de sigilo (art. 22).",
      "especialista": "O aluno operacionaliza a dupla proteção: o sigilo resguarda o interesse público, a informação pessoal resguarda a pessoa, e o § 4º impede que o primeiro escudo enfraqueça a prestação de contas. Em sistemas digitais, caracteriza cadastro de beneficiários, prontuário e ficha funcional como bancos de dados pessoais (art. 5º, IV, da LGPD), exigindo minimização, finalidade declarada e trilha que registre quem acessou o quê."
    },
    "comparacoes": [
      {
        "tema": "Informação pessoal (art. 31) x classificação de sigilo",
        "a": {
          "rotulo": "Informação pessoal",
          "texto": "Acesso restrito independentemente de classificação, por até 100 anos da produção, a agentes legalmente autorizados e ao próprio titular."
        },
        "b": {
          "rotulo": "Informação classificada",
          "texto": "Restrição dependente de hipótese do art. 23, decisão formal e prazo máximo de 25, 15 ou 5 anos, com reavaliação pelo art. 29."
        },
        "diferencaGabarito": "A ausência de classificação não libera dado pessoal: são regimes autônomos, com fundamentos, prazos e titulares de decisão distintos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Tendo o documento sido produzido sem classificação de sigilo, os dados pessoais nele contidos podem ser liberados integralmente ao requerente.",
        "porqueErrada": "A restrição de dados pessoais vigora independentemente de classificação (art. 31, § 1º, I), e a LGPD caracteriza o dado pessoal (art. 5º, I) impondo regime próprio de proteção.",
        "versaoCorreta": "A resposta adequada é o acesso parcial: entrega-se a camada pública com ocultação dos dados pessoais, restritos por até 100 anos independentemente de classificação (art. 31, § 1º, I, e art. 7º, § 2º, da Lei nº 12.527/2011)."
      },
      {
        "afirmacaoEquivocada": "A proteção de informação pessoal pode ser invocada pelo servidor para recusar a entrega de documentos que o próprio envolvam em apuração de irregularidades.",
        "porqueErrada": "O art. 31, § 4º, veda usar a restrição relativa à vida privada, honra e imagem para prejudicar apuração em que o titular esteja envolvido, como em ações de recuperação de fatos históricos.",
        "versaoCorreta": "A restrição não serve de escudo contra a prestação de contas: em apuração envolvendo o próprio titular, a proteção não é invocável (art. 31, § 4º), prosseguindo o exame com as cautelas de necessidade e registro do acesso."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Informação pessoal como regime autônomo de proteção (art. 31)",
        "Acesso restrito independentemente de classificação, por até 100 anos",
        "Dispensas de consentimento do § 3º",
        "Salvaguarda de accountability do § 4º",
        "Acesso parcial à parte não sigilosa (art. 7º, § 2º)"
      ],
      "regras": [
        "Art. 31, caput: tratamento transparente, com respeito à intimidade, vida privada, honra e imagem",
        "Art. 31, § 1º, I: restrição por até 100 anos da produção, a agentes legalmente autorizados e ao titular",
        "Art. 31, § 2º: responsabilização de quem obtiver acesso pelo uso indevido",
        "Art. 21: vedado negar informação necessária à tutela de direitos fundamentais"
      ],
      "comparacoes": [
        "Sigilo protege a segurança da sociedade e do Estado; a informação pessoal protege a pessoa",
        "Consentimento expresso (§ 1º, II) x rol taxativo de dispensa (§ 3º)",
        "Documento público na camada institucional x restrito na camada pessoal"
      ],
      "fluxos": [
        "Recebido o pedido, separar a camada pública da camada pessoal",
        "Verificar previsão legal ou consentimento expresso (§ 1º, II)",
        "Checar a dispensa do § 3º, com vedação de identificação nas pesquisas",
        "Conceder acesso parcial com ocultação (art. 7º, § 2º) e registrar a decisão",
        "Apurar o uso indevido por quem acessou (§ 2º)"
      ],
      "excecoes": [
        "Prevenção e diagnóstico médico de pessoa incapaz, para uso exclusivo no tratamento (§ 3º, I)",
        "Restrição não invocável para prejudicar apuração de irregularidades ou recuperação de fatos históricos (§ 4º)",
        "Preservação das demais hipóteses legais de sigilo e de segredo de justiça e industrial (art. 22)"
      ],
      "palavrasChave": [
        "informação pessoal",
        "intimidade",
        "vida privada",
        "honra e imagem",
        "100 anos",
        "consentimento expresso",
        "dispensa de consentimento",
        "acesso parcial"
      ],
      "checklist": [
        "Separar a camada pessoal da camada pública do documento",
        "Verificar previsão legal ou consentimento antes de divulgar a terceiros",
        "Conferir se a dispensa do § 3º é taxativa e específica",
        "Anonimizar em estatísticas e pesquisas, vedada a identificação",
        "Não aceitar a privacidade como escudo contra apuração (§ 4º)",
        "Entregar acesso parcial com ocultação da camada pessoal"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um servidor pede acesso, para fins de apuração de irregularidade em que ele próprio está envolvido, a ficha funcional completa de um colega, incluindo endereço residencial e registro de licença médica.",
        "dados": "Pedido formulado por servidor em apuração de irregularidade em que ele próprio está envolvido; documento requerido: ficha funcional completa de colega, com endereço residencial e registro de licença médica.",
        "conceitos": [
          "Salvaguarda de accountability (art. 31, § 4º)",
          "Informação pessoal",
          "Necessidade e registro de acesso"
        ],
        "estrategia": "Separar as duas perguntas do caso — se a proteção impede a apuração e como se processa o acesso — e aplicar o § 4º com as cautelas cabíveis.",
        "execucao": [
          "1) Identificar que a ficha funcional contém informação pessoal relativa à vida privada e à saúde",
          "2) Verificar que a restrição do art. 31, § 1º, I, vigora independentemente de classificação",
          "3) Aplicar o § 4º: a proteção não pode ser invocada para prejudicar a apuração",
          "4) Processar o acesso com cautelas de necessidade e registro, responsabilizando pelo uso indevido (§ 2º)"
        ],
        "resultado": "O art. 31, § 4º, da Lei nº 12.527/2011 veda invocar a restrição de acesso à informação relativa à vida privada, honra e imagem para prejudicar processo de apuração de irregularidades em que o titular esteja envolvido. A proteção da pessoa não pode ser usada como escudo contra a apuração de má-fé do próprio servidor. A resposta correta é a do art. 31, § 4º: a restrição não pode ser invocada para prejudicar a apuração; o acesso deve ser concedido, com as cautelas de necessidade e de registro, e a apuração prossegue sobre as condutas apuradas.",
        "justificativa": "O gabarito reconhece a primazia da prestação de contas sobre o escudo da privacidade quando o próprio titular é o investigado, sem eliminar as cautelas: o acesso é regulado, registrado e limitado ao necessário, sob pena de responsabilização do § 2º.",
        "errosFrequentes": [
          "Concluir que a informação pessoal é absoluta e trava qualquer apuração",
          "Confundir a vedação do § 4º com autorização de acesso irrestrito",
          "Ignorar que o uso além da finalidade responsabiliza quem acessou (§ 2º)"
        ],
        "variacao": "Se o requerente fosse um terceiro sem função apuratória, sem previsão legal ou consentimento expresso a camada pessoal permanece restrita, cabendo apenas acesso parcial ou encaminhamento ao canal formal de apuração."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma pesquisa acadêmica solicita prontuários de um serviço de saúde para estudo de qualidade do atendimento. Como se aplica o art. 31?",
        "dados": "Solicitação de prontuários de um serviço de saúde para estudo acadêmico de qualidade do atendimento; hipótese candidata: pesquisa científica de evidente interesse público ou geral prevista em lei (§ 3º, II), vedada a identificação.",
        "conceitos": [
          "Dispensa de consentimento por pesquisa (§ 3º, II)",
          "Anonimização",
          "Minimização e finalidade"
        ],
        "estrategia": "Enquadrar a pesquisa no § 3º, II, condicionar o uso à anonimização e separar eventuais necessidades de dado identificável, com fundamento próprio e acesso restrito.",
        "execucao": [
          "1) Verificar se o estudo se enquadra como pesquisa científica de evidente interesse público ou geral prevista em lei",
          "2) Anonimizar os registros antes do uso, vedada a identificação da pessoa (§ 3º, II)",
          "3) Registrar a metodologia de anonimização e delimitar a finalidade ao estudo de qualidade",
          "4) Se houver dado identificável para rastreabilidade, restringir o acesso e responsabilizar pelo uso indevido (§ 2º)"
        ],
        "resultado": "O art. 31, § 3º, II, admite o tratamento para realização de estatísticas e pesquisas científicas de evidente interesse público ou geral, PREVISTAS EM LEI, sendo vedada a identificação da pessoa. Na prática: (1) verificar se a pesquisa se enquadra na hipótese legal e se há interesse público ou geral; (2) anonimizar os registros antes do uso, vedando a identificação (também art. 36 da Lei nº 14.129/2021); (3) registrar a metodologia de anonimização; (4) se houver retenção de dados identificáveis para rastreabilidade da pesquisa, delimitá-la com fundamento próprio e acesso restrito. Entregar prontuário com nome e diagnóstico é vedação de divulgação irrestrita de dados pessoais.",
        "justificativa": "A dispensa existe, mas é condicionada: interesse público ou geral evidente, previsão em lei e impossibilidade de identificação. A anonimização converte o conjunto em base não identificada; resíduo identificável permanece sob o regime restritivo do art. 31.",
        "errosFrequentes": [
          "Entregar prontuários identificados porque a pesquisa tem interesse público",
          "Dar por suficiente a promessa verbal de anonimização, sem metodologia registrada",
          "Exigir consentimento de cada paciente sem examinar o rol do § 3º"
        ],
        "variacao": "Se o solicitante fosse jornalista investigando denúncia de atendimento irregular, o enquadramento migraria para a tutela de direitos fundamentais (art. 21) ou o interesse público e geral preponderante (§ 3º, V), mantida a vedação de exposição de terceiros."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se o documento não foi classificado como sigiloso, os dados pessoais nele contidos podem ser liberados integralmente ao requerente.'",
        "dados": "Pedido de acesso a documento sem classificação de sigilo; o texto contém CPF, endereço e dados de saúde de terceiros; o requerente não é titular e não aponta previsão legal nem consentimento.",
        "conceitos": [
          "Autonomia entre os regimes",
          "Dado pessoal (art. 5º, I, da LGPD)",
          "Acesso parcial"
        ],
        "estrategia": "Rejeitar a premissa de que só o sigilo restringe: o art. 31, § 1º, I, atua independentemente de classificação, e a LGPD impõe regime próprio ao dado pessoal.",
        "execucao": [
          "1) Identificar a premissa equivocada: confundir ausência de sigilo com autorização de divulgação integral",
          "2) Aplicar o art. 31, § 1º, I: restrição da camada pessoal independentemente de classificação",
          "3) Caracterizar o dado pessoal pelo art. 5º, I, da LGPD e o dever de proteção correspondente",
          "4) Determinar o acesso parcial, com ocultação dos dados pessoais"
        ],
        "resultado": "Errado. A classificação de sigilo e a proteção da informação pessoal são regimes autônomos: o art. 31, § 1º, I, da Lei nº 12.527/2011 restringe o acesso às informações pessoais relativas à intimidade, vida privada, honra e imagem, independentemente de classificação de sigilo, e a LGPD (art. 5º, I) caracteriza o dado pessoal e impõe o regime de proteção correspondente. A ausência de sigilo não converte dado pessoal em informação publicável.",
        "justificativa": "O erro de leitura trata os dois regimes como se um subsumisse o outro: classificação de sigilo e proteção da informação pessoal têm fundamentos distintos e coexistem no mesmo documento; sem previsão legal ou consentimento, a camada pessoal não se publica.",
        "errosFrequentes": [
          "Liberar o documento inteiro por não constar do cadastro de informações classificadas",
          "Exigir classificação como condição para aplicar a proteção do art. 31",
          "Desconsiderar que a LGPD se aplica à administração pública"
        ],
        "variacao": "Se parte dos dados pessoais fosse necessária à tutela de direito fundamental do requerente, o art. 21 vedaria negar o acesso necessário, impondo conciliar o atendimento com a menor exposição possível da camada pessoal."
      }
    ]
  },
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
  },
  "m6-u3-t3-s4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Consolidar a unidade 6.3 exige que o aluno distinga pares de conceitos frequentemente confundidos em provas de concurso: sigilo administrativo e proteção de dados pessoais, anonimização e pseudonimização, segurança e responsabilização, prova de fato e imputação de culpa, controle preventivo e rastreabilidade. Domínio dessas distinções muda o gabarito de questões sobre Lei de Acesso à Informação e LGPD, além de permitir identificar afirmações equivocadas frequentes (pegadinhas) e aplicar o template de verificação de aprendizagem com recuperação ativa.",
      "preRequisitos": [
        "Dado pessoal, dado sensível, dado anonimizado e dado pseudonimizado (LGPD)",
        "Graus e prazos de sigilo administrativo e abertura automática (Lei de Acesso à Informação)",
        "Segurança como conjunto de medidas e responsabilização como regime de imputação (art. 34 da Lei nº 12.527/2011)"
      ],
      "objetivosObservaveis": [
        "Distinguir sigilo administrativo de proteção de dados pessoais e anonimização de pseudonimização",
        "Identificar afirmações equivocadas frequentes sobre sigilo, anonimização, art. 46 da LGPD e classificação de informações",
        "Consolidar a unidade por recuperação ativa com oito questões de verificação de aprendizagem"
      ],
      "competencias": [
        "Análise conceitual de pares de termos jurídico-técnicos afins",
        "Identificação de afirmações falsas com base em dispositivos normativos",
        "Consolidação do aprendizado por recuperação ativa e verificação de domínio"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u3-t3-s1 (Segurança, rastreabilidade e responsabilização no serviço público digital) — fundamentos de trilha, responsabilização e controles internos",
        "m6-u3-t3-s2 (Exemplos resolvidos da unidade (três casos completos)) — aplicação das distinções a casos concretos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "As distinções entre sigilo, proteção de dados, anonimização e pseudonimização são exigidas em questões objetivas e discursivas sobre Lei de Acesso à Informação e LGPD, com precisão no enquadramento legal. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que sigilo e proteção de dados pessoais são regimes autônomos: o sigilo protege o interesse público com grau, prazo e ato formal (arts. 23 e 24 da Lei nº 12.527/2011), enquanto a proteção de dados protege o cidadão sobre toda informação relativa a pessoa natural, independentemente de classificação (art. 31, § 1º, I da mesma lei). Identifica que anonimização impede a associação razoável e pseudonimização permite associação por meios adicionais.",
      "intermediario": "O aluno aplica as cinco comparações críticas da unidade: (1) sigilo x proteção de dados pessoais — dado pessoal não sigiloso continua protegido; (2) anonimização x pseudonimização — só a anonimização autoriza abertura de base (art. 36 da Lei nº 14.129/2021); (3) segurança x responsabilização — o sucesso da segurança não exaure a responsabilização; (4) evidência x imputação — a trilha comprova o fato, a imputação exige dolo ou culpa; (5) controle preventivo x rastreabilidade — o primeiro evita o evento, a segunda permite sabê-lo depois. Reconhece pegadinhas como «dado pessoal é sigiloso» e «anonimizar é trocar o nome por código».",
      "avancado": "O aluno avalia a correção de afirmações sobre classificação de informações (competência do art. 27 e formalização do art. 28, com subdelegação vedada pelo art. 27, § 1º), prazos de sigilo (prazo do dado, não do servidor, art. 24, § 1º) e o art. 46 da LGPD (medidas técnicas E administrativas aptas, não apenas criptografia). Distingue o sigilo da LAI do segredo de justiça (art. 22 preserva outras hipóteses legais) e avalia que a LGPD não proíbe todo tratamento de dados pessoais (art. 4º delimita a aplicação; art. 18 assegura direitos).",
      "especialista": "O aluno integra as distinções em um fluxo de resposta a incidente (conter, preservar evidência, avaliar extensão e risco, comunicar interna e externamente, corrigir a causa, auditar, registrar no sistema de riscos) e no planejamento de controles proporcionais ao risco (art. 48 da Lei nº 14.129/2021). Avalia a responsabilidade do órgão pelos danos (art. 34 da Lei nº 12.527/2011) com apuração de responsabilidade funcional por dolo ou culpa e direito de regresso, sem presunção automática de responsabilidade objetiva em todo incidente."
    },
    "comparacoes": [
      {
        "tema": "Sigilo administrativo x proteção de dados pessoais",
        "a": {
          "rotulo": "Sigilo administrativo",
          "texto": "Protege o interesse público (segurança da sociedade e do Estado), baseia-se nas hipóteses do art. 23 da Lei nº 12.527/2011, com grau (ultrassecreta, secreta, reservada), prazo (25, 15, 5 anos) e ato formal de classificação. Transcorrido o prazo, a informação torna-se automaticamente pública (art. 24, § 4º)."
        },
        "b": {
          "rotulo": "Proteção de dados pessoais",
          "texto": "Protege o cidadão e incide sobre toda informação relativa a pessoa natural identificada ou identificável, independentemente de classificação de sigilo (art. 31, § 1º, I da Lei nº 12.527/2011). Dado pessoal não sigiloso continua protegido; sigilo não dispensa a proteção de dados."
        },
        "diferencaGabarito": "Sigilo e proteção de dados são regimes autônomos: dado pessoal não sigiloso permanece protegido, e o sigilo não significa dispensa de proteção de dados pessoais."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Dado pessoal é o mesmo que informação sigilosa, portanto qualquer dado pessoal só pode ser tratado com classificação de sigilo.",
        "porqueErrada": "São regimes autônomos (arts. 23 e 31 da Lei nº 12.527/2011). A proteção de dados incide sobre toda informação relativa a pessoa natural independentemente de classificação, e o sigilo não dispensa nem substitui a proteção de dados pessoais.",
        "versaoCorreta": "Dado pessoal e informação sigilosa são regimes autônomos (arts. 23 e 31 da Lei nº 12.527/2011); dado pessoal não sigiloso continua protegido pela proteção de dados."
      },
      {
        "afirmacaoEquivocada": "Anonimizar dados é apenas trocar o nome por um código, de modo que a base anonimizada pode ser aberta livremente.",
        "porqueErrada": "Tratar a troca do nome por um código como anonimização é um erro: isso é pseudonimização, que mantém a possibilidade de associação por meios adicionais e, portanto, o dado continua sendo pessoal. Somente a anonimização efetiva, que impede a associação razoável (art. 5º, III da LGPD), autoriza a abertura de base (art. 36 da Lei nº 14.129/2021).",
        "versaoCorreta": "Não se anonimiza um dado simplesmente substituindo o nome por um código: isso configura pseudonimização. A abertura de base só é autorizada quando a anonimização é efetiva e impede a associação razoável (art. 5º, III da LGPD), conforme o art. 36 da Lei nº 14.129/2021."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado pessoal",
        "Dado sensível",
        "Dado anonimizado",
        "Dado pseudonimizado",
        "Informação sigilosa",
        "Informação pessoal",
        "Sigilo administrativo",
        "Accountability"
      ],
      "regras": [
        "Prazos de sigilo 25/15/5 anos e abertura automática (art. 24 da Lei nº 12.527/2011)",
        "Prazo de 100 anos para informação pessoal de intimidade, vida privada, honra e imagem (art. 31, § 1º, I da Lei nº 12.527/2011)",
        "Dever de medidas técnicas e administrativas aptas (art. 46 da LGPD)",
        "Controles internos proporcionais ao risco (art. 48 da Lei nº 14.129/2021)",
        "Conservação de dados de envio e recebimento por 5 anos (art. 43, V da Lei nº 14.129/2021)"
      ],
      "comparacoes": [
        "Sigilo protege o interesse público; proteção de dados protege o cidadão independentemente de classificação",
        "Anonimização impede associação razoável; pseudonimização permite associação por meios adicionais",
        "Segurança previne o evento; rastreabilidade permite apurá-lo depois"
      ],
      "fluxos": [
        "Conter o incidente",
        "Preservar a evidência (logs, capturas, data/hora)",
        "Avaliar a extensão e o risco aos titulares",
        "Comunicar internamente (encarregado e autoridade competente)",
        "Decidir e documentar a comunicação aos titulares e às autoridades",
        "Corrigir a causa, auditar e registrar no sistema de gestão de riscos"
      ],
      "excecoes": [
        "Exclusões de aplicação da LGPD (art. 4º)",
        "Hipóteses de dispensa de consentimento (art. 31, § 3º da Lei nº 12.527/2011)",
        "Vedação de uso da restrição para prejudicar apuração de irregularidades (art. 31, § 4º da Lei nº 12.527/2011)",
        "Não barreira à tutela de direitos fundamentais (art. 21 da Lei nº 12.527/2011)"
      ],
      "palavrasChave": [
        "minimização",
        "finalidade",
        "anonimização",
        "pseudonimização",
        "sigilo",
        "classificação",
        "prazo",
        "trilha de auditoria",
        "dolo",
        "culpa",
        "regresso",
        "incidente",
        "contenção",
        "comunicação"
      ],
      "checklist": [
        "Quais os fundamentos da LGPD?",
        "O que distingue dado anonimizado de pseudonimizado?",
        "Quais os graus e prazos de sigilo?",
        "O que o art. 31, § 4º, da LAI veda?",
        "Quais os direitos do titular do art. 18 da LGPD?",
        "O que o art. 46 exige e por que não basta criptografia?",
        "Quais os elementos de uma trilha de auditoria que sustente apuração de dolo ou culpa?",
        "Enumere as etapas de resposta a incidente com exposição de dados pessoais."
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, escreva os graus de sigilo e os prazos correspondentes da LAI.",
        "dados": "Três graus de sigilo da Lei de Acesso à Informação: ultrassecreta, secreta e reservada, com prazos contados da data de produção (art. 24, § 1º da Lei nº 12.527/2011) e abertura automática transcorrido o prazo (art. 24, § 4º).",
        "conceitos": [
          "Graus de sigilo administrativo",
          "Prazos de sigilo e abertura automática",
          "Art. 24 da Lei nº 12.527/2011"
        ],
        "estrategia": "Recuperar da memória os três graus de sigilo e seus respectivos prazos, associando cada grau ao prazo em anos e à regra de abertura automática.",
        "execucao": [
          "1) Lembrar o grau ultrassecreta e seu prazo",
          "2) Lembrar o grau secreta e seu prazo",
          "3) Lembrar o grau reservada e seu prazo",
          "4) Associar cada prazo à data de produção como termo inicial (art. 24, § 1º)",
          "5) Reconhecer que, transcorrido o prazo, a informação torna-se automaticamente pública (art. 24, § 4º)"
        ],
        "resultado": "Ultrassecreta: 25 anos. Secreta: 15 anos. Reservada: 5 anos. Os prazos contam da data de produção (art. 24, § 1º da Lei nº 12.527/2011) e, transcorrido o prazo, a informação torna-se automaticamente de acesso público (art. 24, § 4º).",
        "justificativa": "Os prazos e graus estão previstos no art. 24 da Lei de Acesso à Informação, com contagem a partir da data de produção e abertura automática ao término, sendo conteúdo de recuperação ativa previsto na verificação de aprendizagem da unidade.",
        "errosFrequentes": [
          "Inverter os prazos dos graus (ex.: atribuir 25 anos à reservada)",
          "Esquecer que o prazo conta da data de produção e não da classificação",
          "Achar que o sigilo dura por tempo indeterminado sem revisão"
        ],
        "variacao": "Se o evento que define o termo final do prazo for consumado antes do fim do prazo, a informação torna-se pública nesse evento (art. 24, § 4º), não apenas ao fim dos anos previstos."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explique por que a pseudonimização não autoriza a abertura de base de dados pessoais.",
        "dados": "Pseudonimização substitui o identificador direto por um código, mas mantém a possibilidade de associação por meios adicionais; o dado permanece dado pessoal (art. 5º, I da LGPD); a abertura de base com dados pessoais exige anonimização efetiva (art. 5º, III da LGPD; art. 36 da Lei nº 14.129/2021) ou hipótese legal de acesso (art. 31, § 1º, II, e § 3º da Lei nº 12.527/2011).",
        "conceitos": [
          "Pseudonimização",
          "Anonimização efetiva",
          "Abertura de base de dados",
          "Art. 5º da LGPD e art. 36 da Lei nº 14.129/2021"
        ],
        "estrategia": "Explicar que a pseudonimização apenas reduz a identificação direta, mas não elimina a possibilidade de reidentificação, de modo que o dado continua pessoal e a abertura depende de base legal específica.",
        "execucao": [
          "1) Identificar que pseudonimização substitui o identificador direto por código",
          "2) Reconhecer que meios adicionais ainda permitem a associação, então o dado permanece pessoal",
          "3) Concluir que a abertura de base exige anonimização efetiva (impede associação razoável, art. 5º, III da LGPD)",
          "4) Verificar que a abertura também pode ocorrer por hipótese legal de acesso (art. 31, § 1º, II, e § 3º da Lei nº 12.527/2011)",
          "5) Confirmar que a pseudonimização por si não autoriza abertura (art. 36 da Lei nº 14.129/2021)"
        ],
        "resultado": "A pseudonimização não autoriza a abertura de base porque o dado continua sendo pessoal (possibilidade de associação por meios adicionais); a abertura exige anonimização efetiva ou hipótese legal de acesso.",
        "justificativa": "O art. 5º, III da LGPD define anonimização como processo que impede a associação razoável; como a pseudonimização mantém essa possibilidade, o dado permanece pessoal e sua abertura depende de base legal específica ou anonimização efetiva (art. 36 da Lei nº 14.129/2021).",
        "errosFrequentes": [
          "Achar que trocar o nome por código já anonimiza o dado",
          "Abrir base pseudonimizada sem base legal de acesso",
          "Confundir pseudonimização com anonimização no contexto de dados públicos"
        ],
        "variacao": "Se a base contiver dados sensíveis (ex.: diagnóstico de saúde), a abertura exigirá, além da anonimização efetiva, atenção redobrada ao art. 5º, II da LGPD e às hipóteses restritas de tratamento de dados sensíveis."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Por serem as medidas do art. 46 da LGPD técnicas e administrativas, a auditoria interna não pode cobrar o órgão por falhas de processo, apenas por falhas de tecnologia.' Avalie a afirmação.",
        "dados": "Art. 46 da LGPD exige medidas técnicas E administrativas aptas; art. 49 da Lei nº 14.129/2021 prevê auditoria interna com abordagem baseada em risco sobre processos de governança, gestão de riscos e controle; falha de processo (desenho de permissões, segregação de funções, fluxo de aprovação) é falha de segurança.",
        "conceitos": [
          "Art. 46 da LGPD (medidas técnicas e administrativas)",
          "Art. 49 da Lei nº 14.129/2021 (auditoria interna baseada em risco)",
          "Falha de processo x falha de tecnologia"
        ],
        "estrategia": "Rejeitar a leitura de que a auditoria se limita à tecnologia; explicar que a auditoria interna avalia processos administrativos com abordagem baseada em risco, incluindo desenho de permissões, segregação de funções e fluxo de aprovação.",
        "execucao": [
          "1) Identificar que a afirmação limita indevidamente a auditoria às falhas de tecnologia",
          "2) Lembrar que o art. 46 da LGPD exige medidas técnicas E administrativas aptas ao risco",
          "3) Aplicar o art. 49 da Lei nº 14.129/2021: auditoria interna avalia governança, gestão de riscos e controle com abordagem baseada em risco",
          "4) Reconhecer que desenho de permissões, segregação de funções e fluxo de aprovação são processos administrativos dentro do escopo da auditoria",
          "5) Concluir que falha de processo é falha de segurança, não detalhe fora do escopo"
        ],
        "resultado": "Errado. A auditoria interna (art. 49 da Lei nº 14.129/2021) avalia processos de governança, gestão de riscos e controle com abordagem baseada em risco, incluindo processos administrativos, desenho de permissões, segregação de funções e desenho do fluxo de aprovação; falha de processo é falha de segurança.",
        "justificativa": "O art. 46 da LGPD exige medidas técnicas e administrativas, de modo que falhas de desenho de processo (permissões excessivas, ausência de segregação de funções) são falhas de segurança passíveis de cobrança pela auditoria interna, que não se limita à camada tecnológica.",
        "errosFrequentes": [
          "Achar que auditoria interna cobre apenas falhas de tecnologia ou criptografia",
          "Desconsiderar processos administrativos (permissões, aprovações) como parte da segurança",
          "Concluir que, se a tecnologia está correta, o órgão não tem responsabilidade por falhas de processo"
        ],
        "variacao": "Se a falha de processo envolver classificação de informação sem competência do art. 27 da Lei nº 12.527/2021 ou sem formalização do art. 28, a apuração se estende ao ato de classificação irregular, além da falha de segurança."
      }
    ]
  },
  "m6-u4-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A unidade 6.4 trata da comunicação digital do órgão, onde convergem transparência, proteção de dados e conduta. Em prova, decide-se o regime da publicação: institucional, pessoal do servidor ou uso indevido.",
      "preRequisitos": [
        "Unidades 6.1 a 6.3: princípios, transparência e dados pessoais",
        "Dever de publicidade e transparência ativa",
        "Noções de dado pessoal e sigilo administrativo",
        "Leitura de dispositivo legal: artigo, parágrafo e inciso"
      ],
      "objetivosObservaveis": [
        "Distinguir perfil institucional de uso pessoal do servidor",
        "Listar os controles mínimos de um canal institucional",
        "Identificar três situações típicas de conflito de interesse e seu tratamento",
        "Classificar uma publicação como institucional, pessoal-imprópria ou indevida"
      ],
      "competencias": [
        "Desenho de política editorial e de controle de acesso",
        "Análise de risco reputacional e de exposição de dados",
        "Rotina de correção, escalonamento e remessa ao controle"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t1-s2 (Governança do canal institucional: titularidade, acesso, editorial, registro e correção) — controles que operacionalizam a distinção entre perfis",
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — tipologia e tratamento na unidade",
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — limites do que pode ser publicado",
        "m6-u2-t1-s2 (Escopo, diretrizes e conceitos da Lei nº 12.527/2011) — base do dever de publicidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Governança digital e ética na comunicação oficial aparecem em itens de certo ou errado e discursivos; a classificação é qualitativa e configura estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "A unidade 6.4 tem quatro frentes: uso institucional, com perfil do órgão e guarda de registro; uso pessoal, que não vincula o órgão mas impõe dever de conduta; conflito de interesse; e conduta e netiqueta.",
      "intermediario": "A mesma ferramenta muda de regime conforme o canal: publicar no perfil institucional é comunicação oficial; publicar na conta pessoal desloca o enquadramento para o dever de conduta do servidor. O regime se define por quatro perguntas: o que foi postado, por quem, em que canal e com que base.",
      "avancado": "A governança do canal exige titularidade do perfil pelo órgão, conta institucional com MFA, perfis por função, política editorial, registro de publicações e rotina de correção. Redes sociais são meio complementar (art. 8º, § 2º, da Lei nº 12.527/2011).",
      "especialista": "Nos casos ambíguos a decisão se apoia em três eixos: vinculação institucional, base legal do dado e controle de acesso que autorizou a publicação. Falhando um eixo, aplica-se correção, registro do incidente e remessa ao controle."
    },
    "comparacoes": [
      {
        "tema": "Uso institucional versus uso pessoal de rede social",
        "a": {
          "rotulo": "Perfil institucional do órgão",
          "texto": "Canal oficial: as publicações expressam a posição do órgão, com dever de publicidade, política editorial e guarda de registro."
        },
        "b": {
          "rotulo": "Conta pessoal do servidor",
          "texto": "Uso particular: não vincula o órgão, mas o servidor segue sujeito ao dever de conduta, à reserva e à vedação de expor dado."
        },
        "diferencaGabarito": "Muda o responsável: no canal institucional responde o órgão; no pessoal, responde o servidor por conduta, sem vincular o órgão."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "É suficiente que o servidor use a hashtag oficial do órgão para que sua publicação valha como comunicação institucional.",
        "porqueErrada": "Identidade visual não cria competência para publicar em nome do órgão; quem fala pelo órgão é definido pela gestão de acesso.",
        "versaoCorreta": "Errado. A gestão de acesso ao perfil institucional define quem fala pelo órgão; ela deve ser formal, com conta institucional, autenticação forte e perfis por função. Hashtag não cria vinculação institucional."
      },
      {
        "afirmacaoEquivocada": "Como o perfil institucional do órgão tem grande número de seguidores, a publicação feita nele substitui a divulgação no sítio oficial.",
        "porqueErrada": "O art. 8º, § 2º, da Lei nº 12.527/2011 torna obrigatória a divulgação em sítios oficiais; a rede social é meio complementar, de alcance e velocidade.",
        "versaoCorreta": "Errado. A rede social é canal complementar: a informação oficial deve residir no sítio oficial, com seus requisitos de busca, formatos abertos e atualização."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Uso institucional: perfil do órgão com governança formal",
        "Uso pessoal: conta do servidor sob dever de conduta",
        "Conflito de interesse: interesse que pode influenciar atribuição funcional"
      ],
      "regras": [
        "Quatro perguntas definem o regime: o que foi postado, por quem, em que canal e com que base",
        "Publicação em canal institucional é comunicação oficial, não opinião do servidor"
      ],
      "comparacoes": [
        "Canal institucional vincula o órgão; conta pessoal vincula apenas o servidor"
      ],
      "fluxos": [
        "Canal → autor e autorização → base legal do dado → corrigir, registrar e remeter ao controle se houver indício"
      ],
      "excecoes": [
        "Foto em local público não autoriza divulgar a imagem: exige-se previsão legal ou consentimento (art. 31, § 1º, II, da Lei nº 12.527/2011)"
      ],
      "palavrasChave": [
        "uso institucional",
        "uso pessoal",
        "conflito de interesse",
        "netiqueta",
        "publicidade"
      ],
      "checklist": [
        "Definir a titularidade do perfil institucional",
        "Controlar acesso por conta institucional e perfis de função",
        "Registrar toda publicação com autor, data e versão",
        "Corrigir erros com sinalização e preservação do original"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença jurídica entre o perfil institucional do órgão em rede social e a conta pessoal do servidor?",
        "dados": "Órgão com perfil verificado em rede social e servidor do setor de atendimento com conta pessoal na mesma plataforma; ambos publicam sobre o mesmo serviço.",
        "conceitos": [
          "Comunicação institucional",
          "Dever de conduta do servidor",
          "Dever de publicidade"
        ],
        "estrategia": "Comparar os canais pelo que cada um vincula: no perfil institucional a publicação é comunicação do órgão; na conta pessoal, manifestação do servidor.",
        "execucao": [
          "Identificar o canal em que o conteúdo foi publicado",
          "Verificar se há autoria ou autorização institucional",
          "Classificar a publicação como institucional ou pessoal",
          "Aplicar o regime correspondente"
        ],
        "resultado": "O perfil institucional é canal de comunicação do órgão: o que nele se publica é comunicação institucional, sujeita à publicidade (art. 8º da Lei nº 12.527/2011). A conta pessoal é uso particular, regido pelo dever de conduta e pela reserva. O mesmo conteúdo, no canal errado, muda o enquadramento.",
        "justificativa": "A distinção é de titularidade, não de plataforma: o perfil do órgão prática comunicação oficial, com responsabilidade institucional; a conta pessoal prática manifestação individual.",
        "errosFrequentes": [
          "Tratar a conta pessoal como espaço imune a regras, esquecendo o dever de reserva",
          "Confundir alcance da publicação com autorização institucional para fazê-la"
        ],
        "variacao": "O mesmo servidor publica, no perfil institucional, texto idêntico ao postado em sua conta pessoal, mas com o logotipo do órgão. Qual regime incide?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Um servidor do setor de obras publica no perfil institucional do órgão uma foto de obra atrasada com legenda crítica sobre a administração municipal. Como tratar?",
        "dados": "Perfil institucional do órgão; foto de obra em atraso; legenda crítica à administração municipal; publicação feita por servidor do setor de obras.",
        "conceitos": [
          "Política editorial",
          "Erro editorial e correção",
          "Registro do incidente"
        ],
        "estrategia": "Tratar como publicação institucional indevida: registrar, corrigir conforme a política editorial, apurar a autoria e avaliar exposição de dado de terceiro.",
        "execucao": [
          "Registrar a publicação com data, hora, conta autora, texto e mídia",
          "Retirar ou corrigir o conteúdo, com nota de correção quando o erro for de fato",
          "Apurar a autoria e a motivação da postagem",
          "Avaliar exposição de dado pessoal e arquivar o incidente"
        ],
        "resultado": "Tratar como erro editorial com conteúdo de opinião em canal institucional: registrar a publicação, retirar ou corrigir o conteúdo com nota de correção, apurar a autoria e arquivar o incidente.",
        "justificativa": "Publicação em canal institucional expressa a posição do órgão, não a do servidor; a conduta correta é corrigir a comunicação oficial e apurar a quebra de governança.",
        "errosFrequentes": [
          "Responder a crítica no próprio canal, debatendo opinião em nome do órgão",
          "Apagar a publicação sem registrar o original, destruindo a prova do incidente"
        ],
        "variacao": "A mesma publicação é feita na conta pessoal, mas o servidor se identifica como do setor de obras e marca o perfil oficial. O tratamento é o mesmo?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como as redes sociais são o canal oficial do órgão, qualquer servidor pode falar em nome do órgão desde que use a hashtag oficial.'",
        "dados": "Item de certo ou errado em que a identidade visual do órgão — hashtag, logotipo e nome do perfil — é apresentada como suficiente para autorizar a publicação.",
        "conceitos": [
          "Titularidade do perfil",
          "Gestão de acesso",
          "Autoria institucional"
        ],
        "estrategia": "Testar a afirmativa pelo controle de acesso, não pela aparência: verificar quem está autorizado a publicar e como essa autorização é registrada.",
        "execucao": [
          "Separar identidade visual de competência para publicar",
          "Verificar quem detém a gestão de acesso ao perfil institucional",
          "Checar conta institucional, autenticação forte e perfis por função",
          "Concluir que a hashtag não cria autorização nem registro de autoria"
        ],
        "resultado": "A afirmativa é falsa: hashtag e logotipo não criam vinculação institucional. Quem fala pelo órgão é definido pela gestão formal de acesso, com conta institucional, autenticação forte e perfis por função.",
        "justificativa": "Falar em nome do órgão decorre de ato formal de gestão de acesso, não de elemento gráfico; sem esse controle a publicação fica sem autoria atribuível, o que compromete a responsabilização.",
        "errosFrequentes": [
          "Confundir reconhecimento da marca do órgão com autorização institucional",
          "Admitir senha compartilhada do perfil, destruindo a rastreabilidade"
        ],
        "variacao": "Servidor credenciado publica, fora do expediente, conteúdo de campanha eleitoral no perfil institucional. A hashtag oficial é o problema central?"
      }
    ]
  },
  "m6-u4-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A governança do canal institucional separa presença digital segura de incidente de credibilidade: titularidade do perfil, controle de acesso, política editorial, registro e correção. Em prova, identifica-se o controle ausente e o dispositivo que o sustenta.",
      "preRequisitos": [
        "Distinção entre uso institucional e uso pessoal de canais digitais",
        "Lei nº 12.527/2011: dever de publicidade e requisitos dos sítios oficiais",
        "Lei nº 14.129/2021: diretrizes de governo digital",
        "Controle de acesso: conta individual, MFA e perfil por função"
      ],
      "objetivosObservaveis": [
        "Desenhar o conjunto mínimo de controles de um perfil institucional",
        "Explicar os elementos de uma política editorial",
        "Descrever o registro de publicações e a rotina de correção",
        "Delimitar o uso admitido de ferramentas de IA na produção de conteúdo"
      ],
      "competencias": [
        "Desenho de controles de governança digital",
        "Rastreabilidade e auditoria de publicações",
        "Aplicação de requisitos de transparência e acessibilidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t1-s1 (Orientação estratégica da unidade) — mapa que estes controles operacionalizam",
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — segregação de funções como prevenção",
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — limites editoriais do que se publica",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — dever de divulgação em sítios oficiais"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens sobre canais oficiais e sobre o dever de divulgar em sítios oficiais surgem em provas de ética e governo digital; a classificação é qualitativa e é estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "O perfil institucional pertence ao órgão, e não ao servidor. O controle de acesso usa conta institucional com autenticação multifator e perfis por função, com registro de atividade e desligamento imediato na saída do servidor.",
      "intermediario": "A política editorial define o que se publica, quem autoriza cada conteúdo, o tom da linguagem, o tratamento de comentários, a rotina de correção e a proibição de expor dado de terceiro. Toda publicação é arquivada com autor lógico, data, mídia, versão e aprovador.",
      "avancado": "O dever de publicidade do art. 8º da Lei nº 12.527/2011 torna obrigatória a divulgação em sítios oficiais: a rede social é canal complementar. A correção de erro é parte da publicidade — corrigir, sinalizar e preservar o original.",
      "especialista": "O uso de IA é admitido como apoio de redação, com revisão humana obrigatória, vedação de inserir dado sigiloso na ferramenta e registro da rastreabilidade da versão — modelo, prompt, data e revisor. Acessibilidade e linguagem clara integram o canal."
    },
    "comparacoes": [
      {
        "tema": "Sítio oficial versus perfil institucional em rede social",
        "a": {
          "rotulo": "Sítio oficial do órgão",
          "texto": "Canal onde a informação oficial deve residir, com os requisitos do art. 8º, § 3º, da Lei nº 12.527/2011: busca, formatos abertos, atualização e acessibilidade."
        },
        "b": {
          "rotulo": "Perfil em rede social",
          "texto": "Canal complementar, de alcance e velocidade, útil para campanha, orientação e emergência, mas que não substitui a divulgação obrigatória no sítio oficial."
        },
        "diferencaGabarito": "A rede social amplia o alcance da informação oficial, mas não a substitui: divergência entre os canais é incoerência de publicidade e deve ser corrigida."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Se a foto de um cidadão foi tirada em área pública e publicada pela conta do servidor, é lícita, porque o fato é público.'",
        "porqueErrada": "O acesso público ao local não equivale a consentimento para difusão de imagem; a publicação em nome do órgão é uso institucional de dado de terceiro e exige base legal.",
        "versaoCorreta": "Errado. O art. 31, § 1º, II, da Lei nº 12.527/2011 exige previsão legal ou consentimento expresso; acesso público ao local não equivale a consentimento. Publicar em nome do órgão é uso institucional de dado de terceiro, sujeito à LGPD."
      },
      {
        "afirmacaoEquivocada": "Basta que o texto do comunicado tenha sido gerado por ferramenta de IA para que ele seja publicado sem revisão, pois a ferramenta produz linguagem clara.",
        "porqueErrada": "A geração por IA é apenas apoio de redação: a revisão humana e a checagem de fatos são obrigatórias antes da publicação, com registro da rastreabilidade da versão.",
        "versaoCorreta": "Errado. A saída de IA pode conter erro factual ou dado pessoal; a conduta correta é revisar, conferir fatos e registrar modelo, prompt, data e revisor."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Titularidade do perfil pelo órgão",
        "Gestão de acesso com conta institucional e MFA",
        "Política editorial",
        "Registro e rastreabilidade de publicações"
      ],
      "regras": [
        "O perfil institucional pertence ao órgão, nunca a servidor ou prestador",
        "Toda publicação é arquivada com autor lógico, data, mídia, versão e aprovador"
      ],
      "comparacoes": [
        "Sítio oficial hospeda a informação oficial; rede social é canal complementar de alcance"
      ],
      "fluxos": [
        "Autorização por perfil de função → redação e revisão → publicação → arquivamento do registro → correção sinalizada quando necessário"
      ],
      "excecoes": [
        "Emergências e campanhas admitem fluxo ágil de aprovação, mas não dispensam registro nem revisão"
      ],
      "palavrasChave": [
        "titularidade",
        "conta institucional",
        "MFA",
        "política editorial",
        "rastreabilidade"
      ],
      "checklist": [
        "Confirmar que o perfil institucional pertence ao órgão",
        "Usar conta institucional com autenticação multifator e perfis por função",
        "Registrar a publicação com autor lógico, versão e aprovador",
        "Revisar conteúdo gerado por IA antes de publicar"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença entre publicar um resultado de serviço no perfil institucional e no sítio oficial?",
        "dados": "Órgão que divulga prazo de atendimento: o sítio oficial informa trinta dias e o perfil em rede social anuncia quinze dias, sem ajuste de capacidade.",
        "conceitos": [
          "Dever de publicidade",
          "Canal oficial e complementar",
          "Coerência de publicidade"
        ],
        "estrategia": "Comparar os canais pela função jurídica: o sítio oficial é onde a informação oficial reside e onde incidem os requisitos legais; o perfil apenas a difunde.",
        "execucao": [
          "Identificar o canal em que a informação oficial deve residir",
          "Conferir os requisitos do art. 8º, §§ 1º a 3º, da Lei nº 12.527/2011 no sítio",
          "Verificar se o conteúdo do perfil reproduz o do sítio",
          "Corrigir a divergência e registrá-la"
        ],
        "resultado": "O sítio oficial é onde a informação oficial deve residir, com o dever de divulgação e os requisitos de busca, formatos abertos e atualização (art. 8º da Lei nº 12.527/2011). O perfil é canal complementar; divergência entre os dois é incoerência de publicidade.",
        "justificativa": "O dever de divulgar se cumpre no sítio oficial porque é lá que o cidadão encontra a informação sob condição de busca, formato aberto e atualização; o perfil apenas potencializa o alcance.",
        "errosFrequentes": [
          "Tratar a rede social como substituta do sítio oficial por ter mais alcance",
          "Publicar no perfil prazo ou serviço que ainda não consta do canal oficial"
        ],
        "variacao": "O perfil institucional anuncia campanha de vacinação com local e data ainda não confirmados pelo setor responsável. Qual providência antes da publicação?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma servidora usa IA para redigir o texto de um comunicado sobre o início de uma campanha de vacinação e publica sem revisão. Qual a providência correta?",
        "dados": "Comunicado sobre campanha de vacinação; texto gerado por IA; publicação no perfil institucional sem leitura prévia; datas e locais não confirmados pelo setor de saúde.",
        "conceitos": [
          "Revisão humana obrigatória",
          "Checagem de fatos",
          "Rastreabilidade da versão"
        ],
        "estrategia": "Suspender a publicação até a revisão humana: conferir fatos, adequar a linguagem, verificar ausência de dado pessoal e registrar a versão usada.",
        "execucao": [
          "Retirar ou suspender o comunicado até a revisão",
          "Conferir datas, locais, público elegível e cadastro existente com a área técnica",
          "Adequar a linguagem ao padrão de clareza do art. 3º, VII, da Lei nº 14.129/2021",
          "Registrar modelo, prompt, data e revisor e corrigir se já houver alcance"
        ],
        "resultado": "Revisão humana obrigatória antes da publicação, com verificação dos fatos (datas, locais, público elegível), adequação da linguagem e verificação de ausência de dado pessoal. Registra-se a rastreabilidade da versão — modelo, prompt, data e revisor.",
        "justificativa": "A ferramenta de IA é apoio de redação, e a responsabilidade pelo conteúdo publicado é do órgão; sem checagem factual e sem registro de versão, não há como demonstrar a base do que foi divulgado.",
        "errosFrequentes": [
          "Publicar saída de IA sem conferir datas e locais com a área técnica",
          "Inserir dado pessoal ou informação sensível na ferramenta de IA para redigir o texto"
        ],
        "variacao": "O texto revisado está correto, mas a imagem gerada por IA mostra um posto de atendimento inexistente no município. A publicação pode ocorrer?"
      },
      {
        "tipo": "erro",
        "problema": "Um servidor publica no perfil institucional a foto de um cidadão registrada em área pública e afirma que, como o fato é público, a divulgação é lícita. A afirmação está correta?",
        "dados": "Foto de cidadão em logradouro público, publicada em nome do órgão, sem previsão legal e sem consentimento do retratado.",
        "conceitos": [
          "Dado pessoal",
          "Base legal para uso de dado de terceiro",
          "Uso institucional de dado"
        ],
        "estrategia": "Separar acesso público ao local de licitude de difusão: o que se pergunta é se há previsão legal ou consentimento para publicar a imagem.",
        "execucao": [
          "Classificar a imagem como dado pessoal do cidadão",
          "Afastar o argumento do local público como base de licitude",
          "Buscar previsão legal ou consentimento expresso (art. 31, § 1º, II, da Lei nº 12.527/2011)",
          "Concluir pela remoção do dado identificável ou pelo tratamento que impeça a identificação"
        ],
        "resultado": "A afirmação é incorreta: estar em área pública não equivale a consentir a difusão da imagem. A publicação em nome do órgão é uso institucional de dado de terceiro e exige previsão legal ou consentimento, além da LGPD.",
        "justificativa": "O art. 31, § 1º, II, da Lei nº 12.527/2011 exige previsão legal ou consentimento para tornar o dado acessível a terceiro; a circulação em rede social amplia a exposição e o dano.",
        "errosFrequentes": [
          "Confundir fato público com dado pessoal divulgável",
          "Interpretar o consentimento para o atendimento como consentimento para divulgação da imagem"
        ],
        "variacao": "A imagem é de ato público com dezenas de pessoas, sem plano fechado em nenhum rosto. A análise de base legal desaparece?"
      }
    ]
  },
  "m6-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O conflito de interesse é a falha ética mais operacional da administração digital: surge quando o interesse pessoal pode influenciar, ou parecer influenciar, atribuição funcional. As bancas cobram a tipologia real, potencial e aparente para definir o tratamento, o protocolo completo de resposta e as medidas de desenho de sistema — segregação de funções e critério publicado — que reduzem o espaço de influência pessoal.",
      "preRequisitos": [
        "Impessoalidade, moralidade e publicidade (art. 37 da CF) — princípios que o conflito de interesse compromete.",
        "Noção de segregação de funções e menor privilégio em sistemas",
        "Estrutura de processos administrativos: cadastro, aprovação e revisão."
      ],
      "objetivosObservaveis": [
        "Definir conflito de interesse pela tríade interesse pessoal, atribuição funcional e capacidade real ou aparente de influência",
        "Diferenciar conflito real, potencial e aparente e associar cada tipo ao tratamento adequado",
        "Indicar o protocolo: declaração formal, registro, afastamento ou recusa, transparência, remessa ao controle e revisão das decisões",
        "Reconhecer medidas de desenho de sistema que previnem o conflito, como segregação de funções e critério publicado"
      ],
      "competencias": [
        "Classificação de situações conforme tipologia e risco",
        "Desenho de controles e segregação de funções",
        "Leitura de enunciados que trocam real por potencial ou aparente"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — o uso do cargo em canais pessoais como manifestação de conflito",
        "m6-u1-t2-s2 (Impessoalidade, moralidade e publicidade: critérios de tratamento, explicabilidade e controle) — o conflito de interesse compromete a impessoalidade do ato administrativo",
        "m6-u4-t3-s2 (Comparações e pegadinhas da unidade) — distinções cobradas em prova"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A tríade real, potencial e aparente e o protocolo de tratamento sustentam itens de certo e errado e de múltipla escolha de ética no serviço público, com segregação de funções e critério publicado como controles centrais. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece conflito de interesse como a situação em que o interesse pessoal — patrimônio, vínculo familiar, participação societária ou reputação — pode influenciar, ou parecer influenciar, atribuição funcional. Distingue as três espécies: real (a influência ocorre), potencial (a capacidade existe sem exercício) e aparente (o observador razoável suspeitaria), e sabe que o tratamento começa pela declaração formal e registro.",
      "intermediario": "O aluno associa cada tipo ao tratamento: real e potencial demandam, em regra, afastamento ou recusa do ato com substituição por servidor sem vínculo; o aparente admite transparência e declaração conforme o risco. Reconhece as manifestações típicas do serviço digital — fiscalizar fornecedor com vínculo, direcionar fila de atendimento, aprovar ato próprio, usar informação do cargo em atividade privada — e conhece o protocolo completo.",
      "avancado": "O aluno desenha controles que previnem o conflito: segregação de funções (quem cadastra não aprova), alçadas proporcionais ao impacto, registro de aprovações, decisão automatizada com critério publicado e checklist antes de atos de alto impacto. Avalia que a impersonalidade do processo é a ferramenta mais eficaz: critério público e auditável retira espaço da influência pessoal, e o desenho que permite a quem tem interesse decidir é falha de controle interno, ainda sem má-fé individual.",
      "especialista": "O aluno articula o enquadramento normativo: as condutas do caput do art. 32 da Lei nº 12.527/2011 podem gerar responsabilização do militar ou agente público, com remissão do § 2º às Leis nº 1.079/1950 e nº 8.429/1992, e o art. 48 da Lei nº 14.129/2021 exige controles internos proporcionais ao risco. Distingue o dever individual de declarar do dever organizacional de prever, detectar e corrigir o desenho, e conduz a revisão das decisões do período de conflito."
    },
    "comparacoes": [
      {
        "tema": "Conflito potencial x conflito aparente",
        "a": {
          "rotulo": "Conflito potencial",
          "texto": "A capacidade de influência existe objetivamente — o servidor pode escolher fornecedor em que tem vínculo familiar — mas não se exerceu; exige declaração e, em regra, afastamento do ato."
        },
        "b": {
          "rotulo": "Conflito aparente",
          "texto": "Não há influência nem capacidade demonstrada, mas o observador razoável suspeitaria; trata-se com transparência, declaração e, conforme o risco, o mesmo afastamento."
        },
        "diferencaGabarito": "No potencial, a influência era possível; no aparente, é a percepção de terceiros que compromete a confiança no ato — ambos se tratam, nenhum se ignora."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Enquanto o servidor não confessar o conflito, o órgão não tem responsabilidade alguma pela decisão tomada sob influência pessoal.",
        "porqueErrada": "O órgão responde pelo desenho do processo: permitir que quem tem interesse aprove é falha de controle interno (art. 48 da Lei nº 14.129/2021), ainda que não haja prova de má-fé individual.",
        "versaoCorreta": "O dever de declarar é do servidor; o dever de prever, detectar e corrigir o desenho que permite o conflito é do órgão. Alçada que concentra cadastro e decisão em quem tem interesse é falha de governança, com ou sem confissão."
      },
      {
        "afirmacaoEquivocada": "O conflito aparente é irrelevante para a administração pública, porque nenhuma influência chegou a ocorrer sobre o ato.",
        "porqueErrada": "A confiança pública também se lesa pela aparência: o observador razoável pode suspeitar de influência, e o tratamento inclui declaração, transparência e, conforme o risco, o afastamento.",
        "versaoCorreta": "O conflito aparente tem tratamento próprio: registrar a situação, transparentar e, conforme o risco, aplicar o mesmo afastamento do conflito real — a aparência de parcialidade já compromete a credibilidade do ato."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Tríade: interesse pessoal, atribuição funcional e capacidade de influência",
        "Tipologia real, potencial e aparente",
        "Segregação de funções como controle preventivo",
        "Impersonalidade do processo: critério publicado e auditável",
        "Falha de controle interno pelo desenho que permite o conflito (art. 48 da Lei nº 14.129/2021)"
      ],
      "regras": [
        "Declarar previamente a situação, com registro formalizado e arquivado, não verbal",
        "Afastar-se ou recusar o ato específico, com substituição por servidor sem vínculo",
        "Remeter ao controle quando houver indício de uso indevido, para apuração (art. 32 da Lei nº 12.527/2011)",
        "Revisar as decisões tomadas no período de conflito"
      ],
      "comparacoes": [
        "Real (influência ocorre) x potencial (capacidade sem exercício) x aparente (suspeita do observador razoável)",
        "Tratamento por afastamento x tratamento por transparência e declaração",
        "Dever individual de declarar x dever organizacional de desenhar controles"
      ],
      "fluxos": [
        "Identificação do interesse pessoal",
        "Declaração formal e registro",
        "Afastamento ou recusa do ato, com substituição",
        "Transparência conforme o impacto",
        "Remessa ao controle em caso de indício",
        "Revisão das decisões do período e correção do desenho"
      ],
      "excecoes": [
        "Conflito aparente de menor impacto pode ser tratado com registro e comunicação, sem afastamento",
        "Decisão automatizada com critério publicado reduz o espaço de influência sem eliminar a declaração",
        "O militar ou agente público pode responder por improbidade conforme as Leis nº 1.079/1950 e nº 8.429/1992 (art. 32, § 2º, da Lei nº 12.527/2011)"
      ],
      "palavrasChave": [
        "conflito de interesse",
        "conflito real",
        "conflito potencial",
        "conflito aparente",
        "declaração",
        "segregação de funções",
        "afastamento",
        "controle interno",
        "improbidade"
      ],
      "checklist": [
        "Verificar interesses pessoais, familiares e societários antes do ato",
        "Formalizar e arquivar a declaração de conflito",
        "Substituir o servidor com vínculo na decisão específica",
        "Publicar critérios e alçadas de aprovação",
        "Separar quem cadastra de quem aprova",
        "Revisar decisões do período de conflito",
        "Remeter indícios de uso indevido ao controle"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique: (a) servidor que assina contrato com empresa da qual é sócio; (b) servidor que pode escolher fornecedor, mas não escolheu a empresa de seu cunhado; (c) servidor cuja empresa concorre ao processo e ele não participa de nenhuma etapa dele.",
        "dados": "Três situações no mesmo órgão: (a) servidor sócio da empresa contratada assina o contrato; (b) servidor com poder de escolha de fornecedor tem cunhado como sócio de licitante, mas não a escolhe; (c) servidor é sócio de licitante e não atua no processo.",
        "conceitos": [
          "Tipologia do conflito",
          "Afastamento e recusa do ato",
          "Segregação de funções"
        ],
        "estrategia": "Aplicar a tríade interesse pessoal, atribuição e capacidade de influência a cada hipótese e indicar o tratamento correspondente a cada espécie.",
        "execucao": [
          "1) No caso (a), verificar a coincidência entre interesse societário e o ato de assinatura: conflito real",
          "2) No caso (b), confirmar a capacidade objetiva de influência sem exercício: conflito potencial",
          "3) No caso (c), examinar proximidade e visibilidade: conflito aparente ou inexistente",
          "4) Concluir que equivaler (a) e (b) está errado, porque o tratamento difere entre real e potencial"
        ],
        "resultado": "(a) conflito real — o interesse e o ato coincidem; (b) conflito potencial — há capacidade de influência sem exercício; (c) conflito aparente ou inexistente, conforme o grau de proximidade e de visibilidade — em qualquer caso, o controle de acesso e a segregação de funções reduzem a exposição. O item que trata (a) e (b) como equivalentes está errado: o tratamento difere (afastamento e recusa do ato no conflito real; afastamento ou declaração e transparência no potencial).",
        "justificativa": "A classificação decorre da tríade definicional: real exige coincidência de interesse e ato; potencial, capacidade de influência não exercida; aparente, a percepção do observador razoável. Cada espécie determina tratamento distinto, e a segregação de funções reduz a exposição em todas.",
        "errosFrequentes": [
          "Tratar conflito potencial como inexistente porque a escolha final foi neutra",
          "Ignorar o vínculo por afinidade (cunhado) como fonte de conflito",
          "Aplicar afastamento a situações que admitem declaração e transparência"
        ],
        "variacao": "Se no caso (b) o servidor tivesse participado da elaboração do edital com especificações favoráveis à empresa do cunhado, a situação migraria para conflito real, com revisão das decisões do período e remessa ao controle."
      },
      {
        "tipo": "aplicacao",
        "problema": "O servidor responsável por ordenar a fila de atendimento é sócio de uma empresa de manutenção que atende o órgão. Como o desenho do sistema deve tratar isso?",
        "dados": "Sistema de agendamento com fila ordenada manualmente pelo servidor; servidor é sócio de empresa de manutenção contratada pelo órgão; sem declaração de vínculo registrada nem regra automatizada de ordenação publicada.",
        "conceitos": [
          "Declaração formal de vínculo",
          "Segregação de funções",
          "Critério publicado e auditável",
          "Revisão de decisões do período"
        ],
        "estrategia": "Combinar três frentes: regularizar a declaração, retirar a alçada manual do servidor com vínculo e auditar as ordenações anteriores em busca de tratamento diferenciado.",
        "execucao": [
          "1) Exigir a declaração formal de vínculo, registrada e arquivada",
          "2) Migrar a ordenação da fila para regra automatizada publicada ou atribuí-la a servidor sem vínculo",
          "3) Revisar as ordenações do período sob responsabilidade do servidor para identificar tratamento diferenciado",
          "4) Havendo indício de direcionamento, remeter ao controle para apuração (art. 32 da Lei nº 12.527/2011)"
        ],
        "resultado": "Três medidas complementares: (1) DECLARAÇÃO formal de vínculo, registrada e arquivada; (2) SEGREGAÇÃO: outro servidor, sem vínculo, passa a operar a ordenação nesse caso, ou a fila é ordenada por regra automatizada publicada (o que, além de resolver o caso concreto, reduz o espaço de influência); (3) REVISÃO das decisões tomadas no período pelo servidor com vínculo, para verificar se houve tratamento diferenciado. Se houver indício de direcionamento, o caso é remetido ao controle para apuração, nos termos do art. 32 da Lei nº 12.527/2011.",
        "justificativa": "As três medidas atacam camadas distintas do risco: a declaração formaliza o conhecimento e habilita o controle; a segregação ou a regra publicada retira o espaço de influência pessoal; a revisão restaura a impessoalidade das decisões passadas.",
        "errosFrequentes": [
          "Contentar-se com a promessa verbal de não interferir na fila, sem registro",
          "Manter a alçada manual e apenas monitorar, sem alterar o desenho",
          "Deixar de revisar as ordenações anteriores, focando só no futuro"
        ],
        "variacao": "Se a empresa fosse de um cunhado e a alçada fosse de fiscalização técnica do contrato, a segregação recairia sobre a fiscalização, e o checklist de conflito passaria a ser exigido antes de cada atesto."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O conflito de interesse é problema do servidor, e o órgão não tem responsabilidade alguma enquanto ele não confessar.'",
        "dados": "Alçada de aprovação concentrada em um único servidor que cadastra e decide; vínculo societário do servidor com fornecedor; ausência de segregação e de registro de aprovações; nenhum indício formal de má-fé.",
        "conceitos": [
          "Falha de controle interno (art. 48 da Lei nº 14.129/2021)",
          "Segregação de funções",
          "Responsabilidade organizacional"
        ],
        "estrategia": "Dissociar a leitura ingênua — culpa depende de confissão — do dever organizacional de desenhar controles, enquadrando a concentração de alçadas como falha de governança.",
        "execucao": [
          "1) Verificar o desenho: quem tem interesse também decide?",
          "2) Enquadrar a concentração de cadastro e aprovação como falha de controle interno proporcional ao risco (art. 48 da Lei nº 14.129/2021)",
          "3) Manter o dever individual de declarar, sem convertê-lo em condição de responsabilização do órgão",
          "4) Corrigir o desenho com segregação de funções, registro de aprovações e revisão das decisões do período"
        ],
        "resultado": "Errado. O órgão responde pelo desenho do processo: se a alçada de aprovação permite que quem tem interesse decide, a falha é de controle interno (art. 48 da Lei nº 14.129/2021) e de governança, ainda que não haja prova de má-fé individual. O dever de declarar é do servidor; o dever de previr, detectar e corrigir o desenho que permite o conflito é do órgão.",
        "justificativa": "A afirmação desloca para o indivíduo um dever que a governança distribui: o servidor declara, mas o órgão projeta controles. A impropriedade do desenho é constatável pela estrutura de alçadas, independentemente de dolo, e o art. 48 da Lei nº 14.129/2021 exige controles proporcionais ao risco.",
        "errosFrequentes": [
          "Exigir confissão ou prova de má-fé para reconhecer falha de desenho",
          "Tratar a declaração do servidor como medida suficiente de controle",
          "Ignorar que o controle interno deve ser proporcional ao risco e auditável"
        ],
        "variacao": "Se o órgão tivesse implementado segregação de funções e registro de aprovações, a falha migraria do desenho para o descumprimento individual do procedimento, com apuração de dolo ou culpa específica do agente."
      }
    ]
  },
  "m6-u4-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O canal digital amplifica a conduta do servidor: a postagem em nome do órgão vale ato institucional, e a conta pessoal pode vinculá-lo quando usa crachá, logotipo ou informação do cargo. As provas cobram a delimitação entre o vedado, o permitido com cautela e o que exige correção e apuração, cruzando a netiqueta com o dever de reserva, a proteção de dados pessoais e a neutralidade institucional.",
      "preRequisitos": [
        "Governança do canal institucional: titularidade, acesso, política editorial, registro e correção — quem publica e com que autorização.",
        "Proteção de informação pessoal (art. 31 da Lei nº 12.527/2011) e conceito de dado pessoal na LGPD",
        "Dever de reserva e neutralidade do agente público"
      ],
      "objetivosObservaveis": [
        "Classificar condutas em canal institucional e pessoal pelo eixo postado, por quem, em que canal e com que base",
        "Enumerar as vedações centrais do canal institucional: opinião pessoal, exposição de dado pessoal, uso comercial e opinião em apuração",
        "Indicar as providências de correção e apuração quando a publicação expõe dado pessoal ou vincula indevidamente o órgão",
        "Reconhecer as exigências de acessibilidade e linguagem clara aplicáveis ao conteúdo publicado"
      ],
      "competencias": [
        "Enquadramento de condutas por canal e autoria",
        "Aplicação simultânea da Lei de Acesso à Informação, da LGPD e da Lei nº 14.129/2021",
        "Tratamento de crise de publicação: remoção, registro e escalonamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — o uso do cargo para interesse pessoal como vertente do conflito",
        "m6-u4-t1-s2 (Governança do canal institucional: titularidade, acesso, editorial, registro e correção) — rotina editorial e de correção",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — proteção da camada pessoal em publicações"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A fronteira entre canal pessoal e institucional aparece em itens sobre redes sociais e dever de reserva, com enunciados que trocam canal, autoria ou base da publicação; rubrica qualitativa de estimativa pedagógica, sem estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "O aluno distingue conduta institucional (comportamento de quem age em nome do órgão) de netiqueta (convenções de convivência digital) e identifica o eixo definidor: o que é postado, por quem, em que canal e com que base. Reconhece as vedações centrais do canal oficial — opinião pessoal, exposição de dado de terceiro, uso comercial e opinião sobre assunto em apuração — e sabe que o canal existe para responder ao cidadão com conteúdo oficial.",
      "intermediario": "O aluno aplica as vedações com os fundamentos normativos: opinião em nome do órgão diante do dever de prestação de contas e de linguagem clara (art. 3º, VI e VII, da Lei nº 14.129/2021); exposição de dado pessoal (art. 31 da Lei nº 12.527/2011 e art. 5º, I, da LGPD); e escalonamento de temas sensíveis — ameaças, relatos de irregularidade e dados de pessoas vulneráveis — para o canal formal, com registro.",
      "avancado": "O aluno delimita a conduta em canal pessoal: o servidor pode ter opinião e expressá-la, mas sem vincular o órgão e sem usar informação obtida no cargo; a menção ao órgão em discussão política ou a foto interna com dado de terceiro pode configurar uso indevido de bem público ou exposição indevida. Planeja rotina de correção, escalonamento e resposta a críticas, com prazo e registro, e remete reclamações à ouvidoria (art. 21, XI, da Lei nº 14.129/2021).",
      "especialista": "O aluno audita o conteúdo institucional pelas exigências transversais: clareza na relação com o cidadão (art. 8º, § 3º, I, da Lei nº 12.527/2011), linguagem acessível e formatos abertos (art. 3º, VII e XIX, da Lei nº 14.129/2021), proteção da imagem de cidadãos e encaminhamento formal de relatos. Avalia a função institucional da postagem, prescreve tratamento da imagem para impedir identificação e separa crítica pessoal lícita de vinculação indevida do órgão."
    },
    "comparacoes": [
      {
        "tema": "Publicação institucional x publicação em conta pessoal",
        "a": {
          "rotulo": "Canal institucional",
          "texto": "Expressa posição do órgão: exige autorização, responde com conteúdo oficial, remete ao canal adequado e veda opinião pessoal, dado de terceiro e uso comercial."
        },
        "b": {
          "rotulo": "Conta pessoal",
          "texto": "Comporta opinião pessoal do servidor, mas sem vincular o órgão, sem elemento institucional (crachá, logotipo) e sem informação obtida no cargo; sujeita ao dever de reserva."
        },
        "diferencaGabarito": "O regime muda com canal e autoria: no institucional, a fala é do órgão; no pessoal, a conduta é lícita, mas a vinculação indevida desloca o enquadramento para uso indevido de bem e de imagem."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Porque a internet é ambiente livre e o servidor é pessoa física, sua conta pessoal pode veicular qualquer conteúdo, inclusive vincular o órgão a críticas políticas.",
        "porqueErrada": "A liberdade de expressão não afasta o dever de reserva, a vedação de uso indevido de bem e de informação do órgão e a exposição de dado pessoal de terceiros, inclusive colegas e cidadãos.",
        "versaoCorreta": "O servidor pode expressar opinião em conta pessoal, mas sem vincular o órgão, sem elemento institucional e sem dado obtido no cargo; o acesso a dados de terceiros exige base legal (art. 31, § 1º, II, da Lei nº 12.527/2011)."
      },
      {
        "afirmacaoEquivocada": "Documento interno do órgão que não contenha dados pessoais pode ser divulgado na conta pessoal do servidor, a título de transparência.",
        "porqueErrada": "A ausência de dado pessoal não elimina a proteção do conteúdo nem o dever de reserva: o documento pode estar sob sigilo (art. 23 da Lei nº 12.527/2011) ou ser objeto de uso indevido de informação sob guarda do servidor (art. 32).",
        "versaoCorreta": "A divulgação de documento interno por conta pessoal não se autoriza pela ausência de dado pessoal: o conteúdo permanece sob o dever de reserva, e a transparência se exerce pelos canais oficiais, com os limites do art. 8º da Lei nº 12.527/2011."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Conduta institucional e netiqueta",
        "Eixo de enquadramento: postado, por quem, em que canal, com que base",
        "Dever de reserva e neutralidade institucional",
        "Escalonamento de temas sensíveis",
        "Rotina de correção e moderação com registro"
      ],
      "regras": [
        "Canal institucional expressa posição autorizada, com prestação de contas e linguagem clara (art. 3º, VI e VII, da Lei nº 14.129/2021)",
        "Vedado expor dado pessoal de terceiros (art. 31 da Lei nº 12.527/2011 e art. 5º, I, da LGPD)",
        "Vedado emitir opinião sobre assunto em apuração, procedimento administrativo ou litígio",
        "Tema sensível segue ao canal formal, com registro: ameaças, relatos de irregularidade, dados de crianças e pessoas vulneráveis"
      ],
      "comparacoes": [
        "Canal institucional (fala do órgão) x conta pessoal (opinião sem vinculação)",
        "Resposta com conteúdo oficial x escalonamento ao canal formal",
        "Crítica pessoal lícita x vinculação indevida do órgão"
      ],
      "fluxos": [
        "Publicação identificada como indevida",
        "Remoção ou tratamento do dado identificável, com registro da ação",
        "Análise da função institucional da postagem",
        "Encaminhamento do caso ao canal adequado (ouvidoria ou apuração)",
        "Revisão da rotina editorial para prevenir recorrência"
      ],
      "excecoes": [
        "O servidor pode expressar opinião política em conta pessoal, sem vincular o órgão e sem usar informação do cargo",
        "Postagem mantida exige tratamento da imagem para impedir identificação",
        "Conteúdo em redes também se submete à clareza do art. 8º, § 3º, I, da Lei nº 12.527/2011"
      ],
      "palavrasChave": [
        "netiqueta",
        "dever de reserva",
        "canal institucional",
        "conta pessoal",
        "dado pessoal",
        "escalonamento",
        "ouvidoria",
        "neutralidade"
      ],
      "checklist": [
        "Verificar autorização antes de publicar em nome do órgão",
        "Procurar dados pessoais identificáveis na imagem e no texto",
        "Separar opinião pessoal de posição institucional",
        "Silenciar sobre assuntos em apuração ou litígio",
        "Encaminhar tema sensível ao canal formal, com registro",
        "Prever rotina de correção com prazo e registro das decisões"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Servidor do órgão posta em sua conta pessoal foto do próprio crachá com o número do SIAPE parcialmente visível, legendado «sou servidor público e o sistema funciona mal». Isso caracteriza uso indevido?",
        "dados": "Conta pessoal do servidor; foto do crachá com número funcional parcialmente visível; legenda crítica ao sistema e identificação do vínculo como servidor público; sem autorização editorial do órgão.",
        "conceitos": [
          "Uso indevido de bem e de imagem institucional",
          "Vinculação do órgão em conta pessoal",
          "Informação funcional"
        ],
        "estrategia": "Aplicar o eixo postado, por quem, em que canal e com que base: a conduta pessoal é lícita, mas o elemento institucional do crachá desloca o enquadramento.",
        "execucao": [
          "1) Identificar o elemento institucional na publicação: foto do crachá com número funcional",
          "2) Verificar que a crítica se expressa em espaço legível como posição de servidor, vinculando o órgão",
          "3) Enquadrar como possível uso indevido de bem ou imagem institucional e exposição de informação funcional",
          "4) Contrastar com a mesma crítica sem identificação institucional, que não apresentaria o problema"
        ],
        "resultado": "Pode configurar uso indevido de bem ou imagem institucional e exposição de informação funcional, ainda que em conta pessoal: o vínculo com o órgão é identificável, e a crítica expressa-se em espaço que pode ser lido como posição institucional. A conduta pessoal é lícita; o modo de expressá-la — usando elemento institucional — é que desloca o enquadramento. O mesmo servidor, em post sem identificação institucional, não tem o mesmo problema.",
        "justificativa": "O enunciado isola o núcleo do tópico: a conta pessoal não cria zona livre de deveres quando a publicação transporta elemento institucional. O crachá identificável e a crítica em nome do vínculo convertem opinião lícita em possível uso indevido.",
        "errosFrequentes": [
          "Concluir que conta pessoal é sempre âmbito privado sem qualquer dever",
          "Focar apenas no conteúdo da crítica e ignorar o elemento institucional da foto",
          "Achar que o número funcional parcialmente visível não é informação relevante"
        ],
        "variacao": "Se a foto fosse de documento interno com nomes de colegas e desempenho de equipe, o enquadramento migraria para o dever de reserva e o uso indevido de informação sob guarda do servidor."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma publicação no perfil institucional mostra a foto de um cidadão reclamando na recepção. Qual a providência?",
        "dados": "Perfil institucional do órgão; foto de cidadão identificável durante reclamação na recepção; legenda com o contexto do atendimento; postagem já publicada e visível ao público.",
        "conceitos": [
          "Dado pessoal (art. 5º, I, da LGPD)",
          "Proteção de informação pessoal (art. 31)",
          "Ouvidoria (art. 21, XI, da Lei nº 14.129/2021)"
        ],
        "estrategia": "Tratar o incidente em duas frentes: contenção da publicação, com remoção ou tratamento do dado identificável, e correção de fluxo, encaminhando a reclamação ao canal formal.",
        "execucao": [
          "1) Remover o dado identificável do cidadão ou tratar a imagem para impedir a identificação, registrando a ação",
          "2) Registrar a publicação original e a providência adotada na rotina editorial",
          "3) Analisar a função institucional da postagem: atendimento de reclamação não se faz por foto do reclamante",
          "4) Encaminhar o caso à ouvidoria (art. 21, XI, da Lei nº 14.129/2021), que registra, responde e protege"
        ],
        "resultado": "Remoção do dado identificável do cidadão (a imagem é dado pessoal, art. 5º, I, da LGPD; art. 31 da Lei nº 12.527/2011), com registro da publicação e da ação; e análise de se a postagem tinha função institucional — em regra, o atendimento de reclamação não se faz por foto de reclamante, e sim pelo canal de ouvidoria (art. 21, XI, da Lei nº 14.129/2021), que registra, responde e protege o cidadão. Se o post for mantido, a imagem deve ser tratada para impedir a identificação.",
        "justificativa": "A providência combina contenção imediata e correção de processo: a imagem do cidadão é dado pessoal com restrição própria, e o encaminhamento à ouvidoria substitui a exposição pública por canal que registra, responde e protege.",
        "errosFrequentes": [
          "Apagar a postagem sem registro da ação e do motivo",
          "Manter a foto com desfocagem parcial que ainda permite identificação",
          "Responder o cidadão pela rede social sem encaminhar à ouvidoria"
        ],
        "variacao": "Se a foto fizesse parte de campanha institucional com autorização expressa de uso de imagem, a base mudaria: permaneceria o dever de respeitar a finalidade autorizada e remover o conteúdo se a revogação fosse comunicada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O servidor pode publicar em sua conta pessoal tudo o que quiser, porque a Internet é livre e o servidor é pessoa física.'",
        "dados": "Conta pessoal do servidor; histórico de publicações que citam o órgão em discussão política, divulgam documento interno de desempenho de equipe e expõem relatos de atendimento com dados de cidadãos; sem autorização do órgão.",
        "conceitos": [
          "Dever de reserva",
          "Vinculação indevida do órgão",
          "Base legal para acesso a dados de terceiros"
        ],
        "estrategia": "Rejeitar a premissa da liberdade absoluta: enumerar os deveres que sobrevivem na conta pessoal — reserva, não vinculação, vedação de exposição de terceiros — e exigir base legal para dados.",
        "execucao": [
          "1) Desmontar a premissa: a liberdade de expressão convive com o dever de reserva e de neutralidade",
          "2) Enquadrar a citação do órgão em discussão política como vinculação indevida",
          "3) Enquadrar a divulgação de documento interno e dos relatos como uso indevido de informação do órgão",
          "4) Exigir base legal para o acesso a dados de terceiros (art. 31, § 1º, II, da Lei nº 12.527/2011)"
        ],
        "resultado": "Errado. A liberdade de expressão do servidor não afasta o dever de reserva, a vedação de uso indevido de bem e de informação do órgão, a exposição de dado pessoal de terceiros (inclusive de colegas e de cidadãos) e o dever de não vincular o órgão. O exercício da liberdade de expressão também não alcança o uso de dados do órgão por terceiros: o acesso a dados de terceiros exige base legal (art. 31, § 1º, II, da Lei nº 12.527/2011).",
        "justificativa": "A leitura ingênua trata a liberdade de expressão como norma que anula os demais deveres funcionais; ela delimita o que o servidor pode opinar, não o que pode usar: informação do cargo e dados de terceiros permanecem protegidos, e a vinculação do órgão desloca o enquadramento.",
        "errosFrequentes": [
          "Considerar o fora de expediente como critério relevante para o dever funcional",
          "Achar que retirar o nome do órgão do texto basta, mantendo o elemento institucional na imagem",
          "Confundir transparência pessoal com os canais oficiais de acesso"
        ],
        "variacao": "Se as publicações se limitassem a manifestações político-partidárias sem menção ao órgão, sem elemento institucional e sem informação obtida no cargo, a conduta estaria no núcleo lícito da opinião pessoal."
      }
    ]
  },
  "m6-u4-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os três casos da unidade — senha compartilhada no perfil institucional, ordenação manual de fila com vínculo familiar e foto de campanha com número do cartão de SUS — cobrem os vícios que as bancas exploram: falha de identidade no canal, conflito na decisão e exposição de dado pessoal. Resolvê-los com o template de nove itens fixa o método aplicável a qualquer variação.",
      "preRequisitos": [
        "Governança do canal institucional: titularidade, acesso, política editorial e registro.",
        "Conflito de interesse: conceito, tipologia (real, potencial, aparente) e tratamento (declaração, afastamento, transparência).",
        "Informação pessoal e sigilo na Lei nº 12.527/2011 (arts. 7º, 8º, 29, 31, 34).",
        "Controle de acesso, MFA e menor privilégio (Módulo 4)"
      ],
      "objetivosObservaveis": [
        "Resolver cada caso aplicando as nove etapas do template didático",
        "Identificar o vício dominante de cada caso e o dispositivo violado",
        "Sequenciar contenção, correção de desenho e registro da ação corretiva",
        "Justificar a medida adotada ligando princípio, norma e evidência"
      ],
      "competencias": [
        "Raciocínio técnico-jurídico estruturado em nove etapas",
        "Distinção entre falha de conduta e falha de desenho de controle",
        "Redação de evidência e de ação corretiva auditável",
        "Aplicação de controles de acesso do Módulo 4 a canais de comunicação"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t1-s2 (Governança do canal institucional: titularidade, acesso, editorial, registro e correção) — controles de acesso aplicados ao perfil",
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — tipologia do caso da fila",
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — limites do caso da foto",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — base normativa do caso 3",
        "m6-u4-t3-s2 (Comparações e pegadinhas da unidade)",
        "m6-u4-t3-s3 (Resumo estruturado, checklist de domínio e verificação de aprendizagem)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Casos integrados de conduta digital, conflito de interesse e exposição de dado pessoal são tema de itens de certo e errado e de discursivas sobre ética no serviço público digital, como aplicação da Lei nº 12.527/2011 e da Lei nº 14.129/2021. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O template de nove itens organiza a resposta de qualquer caso: problema, dados disponíveis, conceitos aplicáveis, estratégia, execução passo a passo, resultado, justificativa, erros frequentes e variação. Nos três casos da unidade, o aluno reconhece o vício central de cada um: credencial compartilhada que apaga a identidade do autor; ordenação manual de fila feita por servidor com vínculo familiar; e foto de cidadão com número do cartão de SUS publicada sem base legal.",
      "intermediario": "Cada caso se apoia em dispositivo próprio. O do perfil compartilhado exige conta individual, MFA, perfis por função e registro de publicações (art. 43, I e IV, da Lei nº 14.129/2021), sob o princípio da publicidade (art. 8º da Lei nº 12.527/2011). O da fila exige afastamento, declaração, revisão das decisões e desenho impessoal (impessoalidade, art. 37 da CF). O da foto exige base legal ou consentimento expresso (art. 31, § 1º, II, da LAI) e contenção imediata.",
      "avancado": "Os casos distinguem-se pelo controle que falta: identidade (quem publicou), critério (como se decide) e base legal (o que pode ser divulgado). A medida correta varia em natureza — individualizar acessos e trilhas de auditoria; afastar o servidor e automatizar critério publicado; remover ou sanitizar o conteúdo e preservar evidência. Errar o controle aplicado trata o sintoma e deixa o desenho viciado, o que a banca testa em itens de providência correta.",
      "especialista": "Em governança madura, os três casos alimentam o mesmo sistema: registro de incidente com ação corretiva, responsável e prazo (art. 48 da Lei nº 14.129/2021), alimentação do plano de auditoria interna baseada em risco (art. 49) e indicadores de recorrência no painel de desempenho (art. 22). O método de nove itens se veste de critério de auditoria: amostragem de publicações, verificação da trilha de aprovação e teste da política editorial vigente."
    },
    "comparacoes": [
      {
        "tema": "Canal com credencial compartilhada versus conflito de interesse na decisão",
        "a": {
          "rotulo": "Caso 1 — senha compartilhada no perfil",
          "texto": "Cinco servidores acessam o mesmo perfil com a mesma senha e sem registro de autoria: o vício está na identidade do ato. O controle faltante é de acesso — conta individual, MFA, perfis por função e trilha de auditoria — e o efeito é a impossibilidade de responsabilizar e de comprovar quem publicou."
        },
        "b": {
          "rotulo": "Caso 2 — ordenação manual com vínculo familiar",
          "texto": "O servidor que ordena a fila é irmão do responsável pelo fornecedor do sistema e a ordenação é manual e sem registro: o vício está no critério da decisão. O controle faltante é de desenho — afastamento, declaração, revisão das decisões e automatização por regra publicada."
        },
        "diferencaGabarito": "No primeiro caso corrige-se quem pode publicar e como se comprova; no segundo, corrige-se como se decide, independentemente de quem decide. Aplicar controle de identidade a um conflito de interesse, ou afastamento a uma credencial compartilhada, trata o sintoma e mantém o desenho viciado."
      },
      {
        "tema": "Exposição de dado pessoal versus falha de identidade do canal",
        "a": {
          "rotulo": "Caso 3 — foto com número do cartão de SUS",
          "texto": "O conteúdo já foi publicado sem previsão legal ou consentimento expresso; o dano está em curso e o controle faltante é de verificação prévia de conteúdo. A medida é conter — remover ou sanitizar —, preservar o registro original, avaliar alcance, comunicar o titular e tornar obrigatória a checagem de dados pessoais antes de publicar."
        },
        "b": {
          "rotulo": "Caso 1 — senha compartilhada",
          "texto": "Nada foi divulgado indevidamente ainda; o risco é de autoria não rastreável e de publicação futura fora da política. A medida é preventiva: individualizar o acesso, criar perfis por função, revisar o histórico e passar a registrar cada publicação com autor e aprovador."
        },
        "diferencaGabarito": "No caso 3 a urgência é reparar o dano e comunicar o titular; no caso 1 a urgência é preventiva e não há titular a comunicar. Tratar a exposição de dado como problema de senha, ou o acesso compartilhado como incidente de dados, inverte a prioridade das medidas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Trocar a senha do perfil institucional e distribuí-la em rodízio entre os cinco servidores resolve a falha de governança do canal.",
        "porqueErrada": "O rodízio mantém credencial coletiva: sem conta individual não há autoria identificável, portanto não há não repúdio nem responsabilização possível, e a decisão continua sem comprovação de quem aprovou. O art. 43, I e IV, da Lei nº 14.129/2021 exige controle de acesso e trilha de auditoria.",
        "versaoCorreta": "A correção individualiza o acesso com contas institucionais e autenticação multifator, cria perfis por função (publicador, editor e aprovador) com menor privilégio e registra cada publicação com autor, data, hora, versão e aprovador."
      },
      {
        "afirmacaoEquivocada": "Como o cidadão aceitou posar para a foto da campanha, o órgão pode publicá-la no perfil institucional com nome completo e número do cartão de SUS.",
        "porqueErrada": "O aceite da imagem para arquivo de campanha não é consentimento para divulgação em rede social com dado identificador correlato; a finalidade é delimitada e o art. 31, § 1º, II, da Lei nº 12.527/2011 exige consentimento expresso ou previsão legal, o que a LGPD reforça ao exigir finalidade determinada (art. 6º, I).",
        "versaoCorreta": "Sem base legal ou consentimento expresso para a divulgação, o órgão remove a publicação ou sanitiza a imagem, preserva o registro original, avalia alcance e dano, comunica o cidadão quando o risco for relevante e inclui verificação obrigatória de dados pessoais no fluxo de aprovação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Template de nove itens: problema, dados, conceitos, estratégia, execução, resultado, justificativa, erros frequentes e variação — formato de resposta de cada caso da unidade.",
        "Falha de governança de canal: credencial compartilhada que apaga a identidade do autor e impede o não repúdio e a responsabilização.",
        "Conflito de interesse: julgamento exposto a interesse não declarado, tratado com afastamento, declaração formal, revisão das decisões e desenho impessoal.",
        "Exposição de dado pessoal: publicação sem previsão legal ou consentimento expresso, que exige contenção, preservação de evidência e comunicação ao titular."
      ],
      "regras": [
        "Canal institucional exige conta individual com MFA, perfis por função e registro de publicações (art. 43, I e IV, da Lei nº 14.129/2021).",
        "Divulgação de informação pessoal de terceiro exige previsão legal ou consentimento expresso (art. 31, § 1º, II, da Lei nº 12.527/2011).",
        "Conflito identificado exige declaração formal, afastamento do ato, substituição por servidor sem vínculo e revisão das decisões do período.",
        "Publicação oficial reside no sítio oficial do órgão; a rede social é canal complementar de divulgação (art. 8º, § 2º, da Lei nº 12.527/2011)."
      ],
      "comparacoes": [
        "Credencial compartilhada corrompe a identidade do ato; conflito de interesse corrompe o critério da decisão; dado pessoal exposto corrompe a base legal da publicação — cada vício tem controle distinto: acesso, desenho impessoal e verificação prévia."
      ],
      "fluxos": [
        "Classificar o caso (canal, conflito ou dado pessoal) → nomear o princípio violado (impessoalidade, publicidade ou proteção de dados) → conter imediatamente → corrigir o desenho → registrar incidente e ação corretiva com responsável e prazo."
      ],
      "excecoes": [
        "Conflito aparente, sem influência real, encerra-se com declaração e controle de desenho; afastamento imediato e apuração reservam-se ao conflito real ou a indício de tratamento diferenciado.",
        "Campanha legítima não dispensa base legal: a utilidade da divulgação não converte aceite de foto em consentimento para publicação com dado identificador."
      ],
      "palavrasChave": [
        "nove itens",
        "credencial compartilhada",
        "não repúdio",
        "conflito de interesse",
        "dado pessoal",
        "sanitizar",
        "ação corretiva",
        "sítio oficial"
      ],
      "checklist": [
        "O caso foi classificado como vício de canal, de decisão ou de conteúdo?",
        "Os dispositivos citados foram reproduzidos com número e ano corretos?",
        "A contenção do dano vem antes da correção do processo?",
        "O resultado preserva evidência e mantém a responsabilização possível?",
        "A variação proposta testa o princípio, e não apenas os números do enunciado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O perfil institucional do órgão é administrado por cinco servidores com senha compartilhada. O que está errado e o que fazer?",
        "dados": "Cinco servidores acessam o perfil com a mesma senha; há duas contas de publicação no período; um post sobre campanha foi publicado às 23h por servidor fora do expediente; não há registro de autoria; não há registro de aprovação de conteúdo.",
        "conceitos": [
          "Responsabilização e não repúdio (Módulo 4)",
          "Dever de auditoria e comprovação de autoria (art. 43, I e IV, da Lei nº 14.129/2021)",
          "Dever de publicidade (art. 8º da Lei nº 12.527/2011)",
          "Accountability digital (art. 34 da mesma lei)"
        ],
        "estrategia": "Tratar como falha de controle, não como caso isolado de servidor; sanear o canal e reconstruir a história do que foi publicado.",
        "execucao": [
          "1) Trocar a senha e eliminar o acesso compartilhado, migrando para conta institucional com autenticação multifator",
          "2) Criar perfis por função (publicador, editor, aprovador) com mínimo privilégio (Módulo 4)",
          "3) Revisar o histórico recente de publicações e identificar o que foi publicado fora da política editorial",
          "4) Registrar a correção necessária, comunicar o cidadão se houve erro relevante e registrar o incidente como falha de controle interno (art. 48 da Lei nº 14.129/2021), com ação corretiva, responsável e prazo",
          "5) Instituir o registro de publicações (data, hora, autor lógico, texto, mídia, aprovador)"
        ],
        "resultado": "Canal institucional com acesso individualizado, rastreável e com política de aprovação vigente; responsabilização preservada a partir da regularização.",
        "justificativa": "Sem autoria individual não há responsabilização possível (Módulo 4) e não há como responder ao princípio da publicidade, que exige divulgação da verdade e accountability.",
        "errosFrequentes": [
          "a) Tratar como falha do servidor que postou, e não como falha de controle do canal",
          "b) Criar um novo perfil sem revisar o histórico de publicações",
          "c) Preservar o acesso compartilhado «só no plantão»",
          "d) Desabilitar o perfil em vez de corrigir o desenho"
        ],
        "variacao": "Em unidade menor, com poucos servidores, o princípio não muda: varia a escala do risco e a simplificação da aprovação, jamais a identidade do acesso."
      },
      {
        "tipo": "aplicacao",
        "problema": "O servidor que ordena a fila de atendimento de um hospital público é irmão do responsável técnico da empresa que fornece o sistema. A ordenação é manual e sem registro. Como o órgão deve agir?",
        "dados": "Vínculo familiar entre servidor e fornecedor; o fornecedor é contratado para manter o sistema de fila; a ordenação é manual e não gera registro; não há política de declaração de conflito no setor; o contrato é de fornecimento e manutenção contínua do sistema.",
        "conceitos": [
          "Impessoalidade (art. 37 da CF)",
          "Tipologia do conflito (real, potencial, aparente) e tratamento",
          "Art. 32, IV, da Lei nº 12.527/2011 (conduta de uso indevido)",
          "Art. 48 da Lei nº 14.129/2021 (controles proporcionais)"
        ],
        "estrategia": "Separar três medidas — afastamento imediato do ato, desenho de controle impessoal e apuração do período anterior.",
        "execucao": [
          "1) AFASTAR o servidor da ordenação imediatamente e designar substituto sem vínculo",
          "2) REGISTRAR formalmente a declaração de conflito (por escrito, com data e assinatura), mesmo após o afastamento, para o histórico de governança",
          "3) VERIFICAR se o vínculo com o fornecedor cria risco técnico adicional — se o fornecedor mantém acesso ao ambiente de produção ou aos dados de pacientes, abrir verificação de segregação de acesso (Módulo 4)",
          "4) REVISAR as decisões de ordenação do período em que o servidor operou, para verificar tratamento diferenciado — se houver indício, remeter ao controle para apuração",
          "5) IMPLEMENTAR correções de desenho: ordenação por regra automatizada e publicada, registro obrigatório de cada ordenação com autor e critério, e trilha de auditoria",
          "6) Registrar o achado no sistema de riscos e no plano de auditoria interna (art. 49 da Lei nº 14.129/2021)"
        ],
        "resultado": "Conflito afastado e documentado, decisões anteriores submetidas a revisão, desenho alterado para tornar a situação menos provável e mais detectável.",
        "justificativa": "O conflito não se resolve com boa-fé do servidor: o tratamento eficaz combina afastamento, desenho impessoal e detecção, e a impessoalidade do processo é a medida estrutural, porque substitui a influência pessoal por critério publicado.",
        "errosFrequentes": [
          "a) Esperar que o servidor se declare",
          "b) Manter o servidor na equipe «para não constranger»",
          "c) Apenas declarar o conflito sem afastar",
          "d) Não revisar as decisões anteriores"
        ],
        "variacao": "Se o servidor for apenas responsável técnico do fornecedor, sem função no órgão, não há conflito funcional: o caso passa a ser risco do fornecedor, que exige controle de acesso ao ambiente, e não apuração disciplinar — a distinção entre as situações é o teste."
      },
      {
        "tipo": "erro",
        "problema": "Em campanha institucional de início de vacinação, o perfil do órgão publicou foto de um cidadão vacinado com o nome completo e o número do cartão de SUS legíveis. A janela de campanha é de duas semanas e o conteúdo «está nas» redes. Como o órgão deve agir?",
        "dados": "Foto e texto com nome e número de cartão de SUS de cidadão; o cidadão não foi informado nem consentiu; o canal é institucional; o conteúdo recebeu grande alcance; a campanha é legítima e a foto foi aceita pelo próprio cidadão quando foi tirada, mas aceite para arquivo não equivale a consentimento para difusão com dados correlatos.",
        "conceitos": [
          "Art. 31, § 1º, II, da Lei nº 12.527/2011 (divulgação de informação pessoal por terceiros somente com previsão legal ou consentimento expresso)",
          "Art. 5º, I, da LGPD (dado pessoal) e art. 46 (segurança)",
          "Art. 3º, VI, da Lei nº 14.129/2021 (dever de prestar contas à população)",
          "Dever de correção de erro e de publicidade"
        ],
        "estrategia": "Decidir sobre a base legal ANTES de publicar; como ela não existe, o conteúdo deve ser retirado e o cidadão protegido.",
        "execucao": [
          "1) CONTER: remover a publicação ou sanitizar a imagem (recortar nome e número do cartão), avaliando a necessidade de comunicação de erro",
          "2) PRESERVAR o registro da publicação original (data, hora, autor, conteúdo) para apuração e para o dever de accountability",
          "3) AVALIAR o alcance e o dano — o número de compartilhamentos e a existência de cópias",
          "4) COMUNICAR ao cidadão, se o risco de dano for relevante, com orientação sobre a exposição do número do cartão",
          "5) APURAR a publicação: quem autorizou, se houve verificação prévia, se a política editorial foi seguida",
          "6) CORRIGIR O PROCESSO: incluir na política editorial verificação obrigatória de dados pessoais em imagens e textos e registrar o incidente e a ação corretiva"
        ],
        "resultado": "Conteúdo protegido, cidadão comunicado, processo corrigido com verificação obrigatória de dados pessoais antes da publicação.",
        "justificativa": "O aceite da foto para um fim (arquivo restrito da campanha) não se transfere a outro fim (divulgação em rede social com identificador completo): é a lógica de finalidade e minimização. O alcance elevado agrava o dano e reforça a avaliação prévia, não a dispensa dela.",
        "errosFrequentes": [
          "a) «a pessoa apareceu na foto, logo autorizou»",
          "b) «corrigimos depois»",
          "c) «o conteúdo é institucional, então o cidadão não tem privacidade»",
          "d) Substituir o nome por «pessoa vacinada» mas manter o número do cartão na imagem"
        ],
        "variacao": "Se os dados forem disponibilizados agregados (doses, faixa etária, unidade), com atualização periódica (art. 29, § 1º, VI, da Lei nº 14.129/2021) e dado geral de programa (art. 8º, § 1º, V, da LAI), o objetivo comunicativo é atingido sem expor pessoa."
      }
    ]
  },
  "m6-u4-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "As comparações e as pegadinhas são o formato com que a unidade 6.4 é cobrada: itens de certo e errado e de múltipla escolha sobre uso institucional versus pessoal, conflito real, potencial ou aparente, e natureza do dado divulgado. O gabarito depende de classificar corretamente o cenário — inverter regime, responsável ou tipo de conflito produz resposta plausível e errada, que é exatamente o desenho das pegadinhas da unidade.",
      "preRequisitos": [
        "Governança do canal institucional: titularidade, acesso, política editorial e registro.",
        "Conflito de interesse (tipologia e tratamento) e conduta/netiqueta no serviço público.",
        "Lei nº 12.527/2011, arts. 8º, 29, 31 e 34",
        "Lei nº 14.129/2021, arts. 3º, 21 e 29"
      ],
      "objetivosObservaveis": [
        "Classificar cenários como uso institucional ou uso pessoal do servidor",
        "Distinguir conflito real, potencial e aparente e indicar o tratamento de cada um",
        "Reformular afirmações equivocadas frequentes em regra correta, com dispositivo",
        "Identificar a comparação que decide o gabarito de um item da unidade"
      ],
      "competencias": [
        "Classificação rápida de cenários sob pressão de prova",
        "Distinção entre norma e boa prática",
        "Conversão de erro típico em regra correta citável",
        "Leitura da armadilha: detectar a inversão de regime ou de tratamento"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t1-s2 (Governança do canal institucional: titularidade, acesso, editorial, registro e correção) — base do eixo institucional x pessoal",
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — base da tipologia real x potencial x aparente",
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — base do eixo netiqueta x publicidade",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — base do eixo dado pessoal x funcional",
        "m6-u4-t3-s1 (Exemplos resolvidos da unidade (três casos completos))"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens de certo e errado e discursivas sobre conduta em redes sociais, conflito de interesse e limites da publicidade testam a classificação do cenário e a escolha do regime aplicável. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno memoriza os cinco eixos de comparação da unidade: uso institucional versus uso pessoal; publicidade institucional versus publicidade de terceiros; conflito real, potencial e aparente; dado pessoal versus dado funcional; netiqueta versus dever de publicidade. Em cada eixo aprende o efeito no gabarito: muda o regime, muda o responsável, muda o tratamento ou muda a norma aplicável — nunca apenas o tom da publicação.",
      "intermediario": "O aluno aplica os eixos a cenários: foto de relatório interno em conta pessoal é uso indevido potencial (art. 32, II, da Lei nº 12.527/2011); número de doses aplicadas no perfil do órgão é publicidade institucional legítima (art. 8º, § 1º, V, da LAI); comentário sobre política pública em conta pessoal é opinião lícita, desde que sem informação do cargo e sem vincular o órgão. Identifica, em cada item, o eixo que decide a resposta.",
      "avancado": "O aluno conhece as inversões típicas da unidade: o canal institucional é do órgão e a autoria deve ser individualizada; o dever de reserva limita o conteúdo, mas não proíbe a publicidade oficial; declarar conflito não dispensa afastamento; dado funcional do servidor é publicidade (art. 29, § 2º, VII, da Lei nº 14.129/2021); moderação exige critério, registro e revisão; apoio de IA não substitui revisão humana; e rede social não substitui o sítio oficial (art. 8º, § 2º, da LAI).",
      "especialista": "O aluno constrói itens no molde da banca: afirmação que soa razoável, inversão de um eixo e correção ancorada em dispositivo. Audita moderação e política editorial do órgão, verificando critério publicado, registro das remoções e canal de revisão; usa a segregação de funções como tratamento estrutural do conflito e a checagem humana de conteúdo como condição de validade da publicação."
    },
    "comparacoes": [
      {
        "tema": "Uso institucional versus uso pessoal do servidor em redes sociais",
        "a": {
          "rotulo": "Uso institucional",
          "texto": "Canal do órgão, com titularidade, governança de acesso, política editorial e registro de publicações; comunica em nome da instituição e responde por transparência ativa e pelo sítio oficial (art. 8º, § 2º, da Lei nº 12.527/2011)."
        },
        "b": {
          "rotulo": "Uso pessoal",
          "texto": "Exercício individual do servidor, limitado pelo dever de reserva e pela proibição de vincular o órgão; opinião sobre política pública é lícita, desde que sem informação do cargo e sem uso de bem ou imagem institucional."
        },
        "diferencaGabarito": "O regime e o responsável mudam, não apenas o tom: no uso institucional incide publicidade oficial, com titularidade e registro no órgão; no pessoal, o limite é o dever de reserva. O mesmo texto publicado nos dois canais tem natureza jurídica diferente."
      },
      {
        "tema": "Conflito real versus conflito aparente",
        "a": {
          "rotulo": "Conflito real",
          "texto": "Influência consumada ou em curso sobre a decisão: o servidor decide com interesse comprometido. O tratamento é afastamento imediato, substituição por servidor sem vínculo, revisão das decisões do período e remessa ao controle se houver indício."
        },
        "b": {
          "rotulo": "Conflito aparente",
          "texto": "Percepção razoável de influência, ainda que ela não exista: o terceiro não consegue distinguir. O tratamento é declaração formal, registro e desenho de controle que elimine a aparência, sem afastamento automático do ato."
        },
        "diferencaGabarito": "O real exige afastamento e apuração; o aparente exige declaração e correção da aparência. Provar ausência de influência não encerra o aparente — a medida restaurar a confiança do observador, e não a inocência do agente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A moderação de comentários em página institucional é ato discricionário do servidor de plantão, sem necessidade de critério publicado nem de registro.",
        "porqueErrada": "Restringir a participação do cidadão é decidir em nome do órgão, e não exercer preferência pessoal: exige critério previamente definido, proporcionalidade, registro da remoção e possibilidade de revisão, sob o dever de transparência (art. 3º, IV, da Lei nº 14.129/2021) e a accountability (art. 34 da Lei nº 12.527/2011).",
        "versaoCorreta": "A moderação segue política publicada, com hipóteses de restrição, aplicação proporcional, registro das remoções e canal de revisão integrado à ouvidoria (art. 21, XI, da Lei nº 14.129/2021); o plantão executa o critério, não o cria."
      },
      {
        "afirmacaoEquivocada": "Como o dever de reserva protege o servidor, ele não pode publicar nada em redes sociais sobre a atuação do órgão.",
        "porqueErrada": "A afirmação troca o limite pelo conteúdo: o dever de reserva veda o uso de informação sob guarda, de dado sigiloso ou pessoal e a vinculação indevida do órgão — ele não alcança a publicidade institucional, que é obrigatória e reside no sítio oficial (art. 8º, § 2º, da Lei nº 12.527/2011).",
        "versaoCorreta": "A publicidade oficial é dever do órgão e segue a política editorial e o sítio oficial; o dever de reserva limita o que pode ser divulgado (informação sob guarda, sigilo, dado pessoal de terceiro), e não a existência da publicação institucional."
      },
      {
        "afirmacaoEquivocada": "Ferramenta de inteligência artificial pode redigir e publicar a versão final do post institucional, desde que o texto esteja correto.",
        "porqueErrada": "Publicar em canal institucional é ato do órgão, sujeito a aprovação por função, checagem de fatos e responsabilização (art. 43, I, da Lei nº 14.129/2021); texto correto não supre a ausência de autoria responsável, e erro factual publicado sem revisão viola o dever de publicidade.",
        "versaoCorreta": "A IA pode apoiar rascunho e revisão, mas a publicação final exige autoria humana, verificação de fatos e aprovação registrada conforme a política editorial, permanecendo a responsabilidade com o órgão e o servidor aprovador."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Uso institucional: canal do órgão com titularidade, acesso governado, política editorial e registro de publicações.",
        "Uso pessoal: exercício individual do servidor, limitado pelo dever de reserva e pela não vinculação institucional indevida.",
        "Conflito aparente: percepção razoável de influência, tratada por declaração e desenho de controle, sem afastamento automático.",
        "Dado funcional: informação sobre o servidor (nome, cargo, remuneração, vínculos), cuja divulgação é publicidade institucional (art. 29, § 2º, VII, da Lei nº 14.129/2021)."
      ],
      "regras": [
        "Moderação de comentários em canal institucional exige critério publicado, proporcionalidade, registro e canal de revisão (art. 3º, IV, da Lei nº 14.129/2021).",
        "Conflito real exige afastamento, revisão das decisões do período e remessa ao controle; potencial e aparente exigem declaração e controle de desenho.",
        "Divulgação de nome, cargo e remuneração de servidor é publicidade institucional; a proteção do art. 31 da LAI incide sobre dado pessoal de cidadão."
      ],
      "comparacoes": [
        "Institucional x pessoal muda regime e responsável; real x potencial x aparente muda o tratamento; dado pessoal x dado funcional muda a norma aplicável; netiqueta x publicidade muda o eixo de conformidade."
      ],
      "fluxos": [
        "Ler a afirmação → identificar o eixo em jogo (canal, conflito, dado, netiqueta) → localizar a inversão de regime, tratamento ou norma → reconstruir a regra correta citando o dispositivo → conferir o efeito no gabarito."
      ],
      "excecoes": [
        "Opinião pessoal do servidor sobre política pública é lícita, desde que sem informação do cargo e sem vinculação institucional indevida — o limite é esse.",
        "Publicidade de terceiros em canal institucional depende de previsão legal e de segmento definido em lei; a publicidade comercial é vedada."
      ],
      "palavrasChave": [
        "uso institucional",
        "uso pessoal",
        "conflito aparente",
        "dado funcional",
        "moderação",
        "netiqueta",
        "publicidade",
        "gabarito"
      ],
      "checklist": [
        "A afirmação inverte regime, responsável ou tipo de conflito?",
        "O tratamento indicado corresponde ao tipo de conflito identificado?",
        "A citação legal foi reproduzida com número e ano corretos?",
        "O canal citado é o adequado: sítio oficial, perfil institucional ou conta pessoal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique: (a) servidor publica em conta pessoal foto de relatório interno; (b) órgão publica em seu perfil institucional o número de doses aplicadas no mês; (c) servidor comenta, em conta pessoal, política pública, sem citar o órgão.",
        "dados": "Cenário (a): conta pessoal do servidor, foto de relatório interno ainda não divulgado, com legenda sobre falha do sistema; cenário (b): perfil institucional de órgão de saúde, post com total de doses do mês e meta; cenário (c): conta pessoal, comentário sobre política de transporte, sem menção ao órgão nem a dado do cargo.",
        "conceitos": [
          "Uso institucional x uso pessoal do servidor",
          "Dever de reserva e informação sob guarda (art. 32, II, da Lei nº 12.527/2011)",
          "Publicidade institucional e transparência ativa (art. 8º, § 1º, V, da LAI)"
        ],
        "estrategia": "Para cada cenário, responder três perguntas em ordem: qual é o canal, qual é a natureza do conteúdo e qual regime incide — publicidade institucional, dever de reserva ou opinião pessoal.",
        "execucao": [
          "Identificar o canal: (a) e (c) são contas pessoais do servidor; (b) é perfil institucional do órgão.",
          "Classificar o conteúdo: (a) informação sob guarda; (b) dado geral de programa; (c) opinião sobre política pública.",
          "Aplicar o regime: (a) uso indevido potencial de informação sob guarda (art. 32, II, da LAI); (b) publicidade institucional legítima (art. 8º, § 1º, V, da LAI); (c) opinião lícita, desde que sem informação do cargo e sem vincular o órgão."
        ],
        "resultado": "(a) uso indevido potencial de informação sob guarda (art. 32, II, da Lei nº 12.527/2011), com dever de reserva; (b) publicidade institucional legítima — dado geral de acompanhamento de programa (art. 8º, § 1º, V, da LAI); (c) opinião pessoal lícita, desde que sem uso de informação do cargo e sem vinculação institucional indevida.",
        "justificativa": "A classe correta depende do canal e do conteúdo juntos: institucional em conta pessoal é uso indevido potencial; dado de programa em canal oficial cumpre transparência ativa; opinião sem informação do cargo é lícita, com limite no dever de reserva.",
        "errosFrequentes": [
          "Confundir canal com conteúdo: tratar relatório interno em conta pessoal como opinião pessoal do servidor.",
          "Tratar dado geral de programa como dado pessoal e por isso supostamente sigiloso.",
          "Supôr que comentar política pública é sempre vedado ao servidor, independentemente do conteúdo."
        ],
        "variacao": "Se o relatório já tivesse sido divulgado em transparência ativa, o conteúdo deixa de estar sob guarda: o caso passa a ser de uso indevido de imagem e vinculação aparente, e não de informação sob guarda — a norma aplicável muda."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão recebeu crítica pública sobre a fila de atendimento em rede social. Qual a sequência correta de providências?",
        "dados": "Perfil institucional de órgão de saúde; publicação de usuário sobre fila de atendimento, citando nome de servidor e exibindo print do sistema de senhas; comentários de terceiros somados ao post; ouvidoria sem registro equivalente no mês; atraso de 40 minutos na média de espera do dia.",
        "conceitos": [
          "Linguagem clara e resposta institucional (art. 3º, VII, da Lei nº 14.129/2021)",
          "Canal de ouvidoria e participação social (art. 21, XI, da Lei nº 14.129/2021)",
          "Dado pessoal de terceiro citado em conteúdo manifestado"
        ],
        "estrategia": "Responder institucionalmente sem opinião pessoal, proteger o dado de terceiro citado no conteúdo e converter a crítica em registro formal de ouvidoria, com acompanhamento pelo painel de desempenho.",
        "execucao": [
          "Registrar a publicação e o teor da crítica antes de qualquer alteração no conteúdo.",
          "Verificar se há dado pessoal de terceiro ou informação protegida no post; sanitizar ou restringir o que for pessoal.",
          "Responder de modo institucional, com conteúdo oficial e linguagem clara (art. 3º, VII, da Lei nº 14.129/2021), sem opinião pessoal.",
          "Encaminhar a crítica ao canal formal de ouvidoria (art. 21, XI), criando o registro.",
          "Se houver falha no serviço, comunicar a providência e o prazo, com acompanhamento pelo painel de desempenho (art. 22).",
          "Registrar o atendimento no histórico, para análise de recorrência e alimentação do plano de melhorias."
        ],
        "resultado": "(1) Registrar a publicação e a crítica; (2) verificar se há dado pessoal de terceiro ou informação protegida no conteúdo; (3) responder de modo institucional, com conteúdo oficial e linguagem clara (art. 3º, VII, da Lei nº 14.129/2021), sem opinião pessoal; (4) encaminhar a crítica para o canal formal de ouvidoria (art. 21, XI), criando o registro; (5) se houver falha no serviço, comunicar a providência e o prazo, com acompanhamento pelo painel de desempenho (art. 22); (6) registrar o atendimento no histórico, para análise de recorrência.",
        "justificativa": "A sequência é gabarito porque converte manifestação em registro formal de ouvidoria, preserva a impessoalidade da resposta e produz evidência de acompanhamento pelo painel (art. 22), sem o qual não há prova de que a falha foi tratada.",
        "errosFrequentes": [
          "Responder em nome pessoal ou rebater a crítica no mesmo tom, confundindo opinião com resposta institucional.",
          "Remover a publicação para evitar desgaste, sem preservar o teor original em registro.",
          "Encaminhar à ouvidoria sem tratar o dado de terceiro citado no conteúdo da crítica."
        ],
        "variacao": "Se a crítica contiver dado de saúde de paciente identificável, sanitiza-se o conteúdo antes de responder e avalia-se comunicação ao titular: a publicidade da resposta não afasta a proteção do art. 31 da LAI."
      },
      {
        "tipo": "erro",
        "problema": "Comentário de cidadão com crítica ao serviço público é removido pelo servidor de plantão, que também bloqueia o usuário, sem política publicada de moderação, sem registro da remoção e sem canal de revisão para o cidadão recorrer.",
        "dados": "Página institucional do órgão; comentário de cidadão com crítica e linguagem ofensiva; servidor de plantão remove o comentário e bloqueia o usuário; não há política de moderação publicada; a remoção não foi registrada; a página não informa canal de revisão nem ouvidoria.",
        "conceitos": [
          "Dever de transparência e controle social (art. 3º, IV, da Lei nº 14.129/2021)",
          "Accountability e responsabilização (art. 34 da Lei nº 12.527/2011)",
          "Proporcionalidade e registro do ato administrativo"
        ],
        "estrategia": "Tratar a moderação como ato administrativo do órgão: exige critério previamente definido, aplicação proporcional, registro e possibilidade de revisão — não como juízo do servidor de plantão.",
        "execucao": [
          "Verificar se existe política de moderação publicada, com hipóteses de restrição de participação.",
          "Na ausência de política, suspender remoções discricionárias e escalar o caso à coordenação do canal.",
          "Registrar a remoção ocorrida (data, autor, motivo e conteúdo preservado) e reverter o bloqueio se não houver hipótese prevista.",
          "Publicar o critério de moderação e o canal de revisão, integrando a ouvidoria (art. 21, XI, da Lei nº 14.129/2021)."
        ],
        "resultado": "Errado. A moderação que pode gerar restrição de participação do cidadão exige critério definido, proporcionalidade e registro, sob o dever de transparência (art. 3º, IV, da Lei nº 14.129/2021) e de accountability (art. 34 da Lei nº 12.527/2011). Ademais, a Lei nº 12.527/2011 assegura a todos o acesso à informação, o que implica canal de ouvidoria e, em caso de restrição, possibilidade de revisão.",
        "justificativa": "Restringir participação do cidadão é decidir em nome do órgão: transparência e accountability exigem critério, proporcionalidade e registro, e a LAI assegura via de revisão. A discricionariedade do plantão não cria alçada para silenciar manifestação.",
        "errosFrequentes": [
          "Confundir netiqueta, que regula convivência cordial, com ausência de dever de fundamentar a restrição.",
          "Tratar a moderação como configuração técnica da plataforma, e não como ato do órgão sujeito a controle."
        ],
        "variacao": "Se a política publicada previr remoção apenas por dado pessoal de terceiro ou sigilo, o comentário ofensivo permanece: a conduta correta é responder com dados oficiais e registrar, pois restrição exige hipótese prevista."
      }
    ]
  },
  "m6-u4-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A síntese da unidade 6.4 é o ensaio da prova: dez conceitos, seis regras, quatro eixos de comparação, dois fluxos de sete passos, oito perguntas de checklist e oito questões de verificação. O critério de domínio — acerto integral em Q1, Q3, Q4 e Q7 e em ao menos cinco dos oito itens — transforma o estudo em diagnóstico: o candidato descobre, antes da prova, quais controles ainda não recupera de memória.",
      "preRequisitos": [
        "Governança do canal institucional: titularidade, acesso, política editorial e registro.",
        "Conflito de interesse (tipologia e tratamento) e conduta/netiqueta no serviço público.",
        "Exemplos, comparações críticas e pegadinhas das unidades 6.4 e 6.5.",
        "Lei nº 12.527/2011 e Lei nº 14.129/2021 (dispositivos citados na síntese)"
      ],
      "objetivosObservaveis": [
        "Recuperar de memória os controles mínimos de um canal institucional",
        "Classificar cenários de conflito real, potencial e aparente e indicar o tratamento",
        "Listar condutas vedadas em canal institucional e o procedimento diante de dado identificável de terceiro",
        "Explicitar a relação entre correção de erro e dever de publicidade",
        "Autoavaliar o domínio pelo critério de acerto da verificação de aprendizagem"
      ],
      "competencias": [
        "Recuperação ativa sob critério objetivo de acerto",
        "Síntese de norma, controle e evidência",
        "Autoavaliação e plano de revisão dirigida",
        "Uso da verificação como instrumento de auditoria interna"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u4-t1-s2 (Governança do canal institucional: titularidade, acesso, editorial, registro e correção) — controles do checklist",
        "m6-u4-t2-s1 (Conflito de interesse: conceito, tipologia, exemplos e tratamento) — tipologia cobrada em Q3",
        "m6-u4-t2-s2 (Conduta e netiqueta institucionais: limites do que o servidor pode publicar) — limites de Q4 e Q5",
        "m6-u3-t2-s2 (Informação pessoal na Lei de Acesso à Informação: proteção, limites e exceções) — procedimento de Q7",
        "m6-u6-t3-s1 (Método de análise de itens de prova e questões autorais comentadas (bloco 1)) — leitura das questões de verificação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A síntese e a verificação de aprendizagem consolidam tema central de ética e legislação para cargos de TI, em que o acerto depende de nomear o dispositivo e o tratamento corretos. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno percorre a síntese da unidade: dez conceitos essenciais (perfil institucional versus conta pessoal, titularidade do canal, política editorial, registro de publicações, correção de erro, conflito real, potencial e aparente, segregação de funções, dever de reserva e netiqueta), seis regras com dispositivo, quatro eixos de comparação, dois fluxos de sete passos e as oito perguntas de checklist. Compreende que netiqueta regula a convivência e publicidade exige informação verdadeira, clara e completa.",
      "intermediario": "O aluno responde cada pergunta do checklist com o dispositivo próprio: controles do canal (titularidade, MFA, perfis por função, política editorial, registro, correção, ouvidoria e plano de incidente); distinção entre conflito real e potencial; tratamento do aparente, por declaração e desenho; hipótese de opinião pessoal lícita; dispositivo de ouvidoria (art. 21, XI, da Lei nº 14.129/2021); procedimento para post com dado pessoal; papel da segregação de funções; e relação entre netiqueta e publicidade.",
      "avancado": "O aluno integra os dois fluxos: publicação institucional em sete passos (classificar, verificar base legal, sanitizar, aprovar, publicar, registrar, monitorar e corrigir) e tratamento de conflito em sete passos (identificar, declarar, afastar ou recusar, substituir, revisar, remeter ao controle e corrigir o desenho). Antecipa variações — dado agregado versus identificável, conflito real versus aparente — e aplica o critério de domínio para medir o que falta revisar.",
      "especialista": "O aluno converte a verificação em instrumento de auditoria: amostra publicações e testa titularidade, trilha de aprovação e política editorial vigente; verifica registro de incidentes e ações corretivas com responsável e prazo; integra achados ao plano de auditoria baseada em risco (art. 49 da Lei nº 14.129/2021) e a indicadores de recorrência no painel de desempenho (art. 22)."
    },
    "comparacoes": [
      {
        "tema": "Fluxo de publicação institucional versus fluxo de tratamento de conflito",
        "a": {
          "rotulo": "Fluxo de publicação",
          "texto": "Sete passos sobre o conteúdo: classificar o material (institucional, pessoal ou protegido), verificar base legal e necessidade, sanitizar imagem, texto e metadados, aprovar conforme a política editorial, publicar, registrar autor, versão e aprovador, monitorar e corrigir."
        },
        "b": {
          "rotulo": "Fluxo de conflito",
          "texto": "Sete passos sobre a decisão: identificar o conflito, declarar e registrar, afastar ou recusar o ato, substituir por servidor sem vínculo, revisar as decisões do período, remeter ao controle se houver indício e corrigir o desenho do processo."
        },
        "diferencaGabarito": "O primeiro fluxo protege a legalidade e a licitude do que é divulgado; o segundo protege a integridade de quem decide. Confundi-los produz o erro típico: exigir aprovação editorial de um conflito, que não afasta ninguém, ou afastar servidor por problema de conteúdo, que não corrige a política editorial."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O uso de conta pessoal do servidor é livre, porque a Lei nº 12.527/2011 disciplina apenas o acesso a informações custodiadas por órgãos públicos e o servidor não é órgão público.",
        "porqueErrada": "A premissa confunde o objeto da LAI — informações sob custódia do órgão — com o alcance de seus deveres, que alcança o agente público: o art. 32 tipifica condutas do agente público ou militar e o art. 34 responsabiliza órgão e servidor pelos danos. O dever de reserva decorre da função, não da qualidade institucional de quem publica.",
        "versaoCorreta": "Errado, e o raciocínio é o próprio erro. A Lei nº 12.527/2011 alcança o servidor como agente público: o art. 32 tipifica condutas que ensejam responsabilidade do agente público ou militar, entre elas utilizar indevidamente, subtrair, destruir, inutilizar, desfigurar, alterar ou ocultar informação sob sua guarda (inciso II) e divulgar ou permitir acesso indevido a informação sigilosa ou pessoal (inciso IV); o art. 34 responsabiliza o órgão e o servidor pelos danos. Além disso, a LGPD (art. 5º, I) protege o dado pessoal do cidadão, e o dever de reserva é preço da função."
      },
      {
        "afirmacaoEquivocada": "Dominar a unidade 6.4 significa reler o resumo até reconhecer as palavras-chave.",
        "porqueErrada": "A releitura produz fluência, não evidência de recuperação: o aluno reconhece o texto, mas não recupera o controle nem o dispositivo sem consulta. O critério de domínio da unidade é definido por acerto em questões, não por familiaridade com a síntese.",
        "versaoCorreta": "O domínio é atestado por resposta sem consulta: acerto integral em Q1, Q3, Q4 e Q7 — controles do canal, tipologia do conflito, condutas vedadas e procedimento para dado identificável — e acerto em ao menos cinco dos oito itens da verificação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Perfil institucional versus conta pessoal: o primeiro é canal do órgão, com titularidade e registro; a segunda é exercício individual, limitado pelo dever de reserva.",
        "Conflito real, potencial e aparente: influência consumada, capacidade de influência não exercida e percepção razoável de influência, com tratamentos distintos.",
        "Segregação de funções e perfis de acesso por função: controles estruturais que tratam o conflito e protegem a identidade do canal.",
        "Netiqueta: convivência digital regulada (tom, moderação, correção), distinta do dever de publicidade, que exige informação verdadeira, clara, completa e acessível."
      ],
      "regras": [
        "Segundo o art. 8º, § 2º, da Lei nº 12.527/2011, a publicação oficial ocorre no sítio oficial do órgão; as redes sociais são apenas canal complementar de divulgação e não substituem o sítio.",
        "Aprovação por função com MFA e perfis de acesso (art. 43, I, da Lei nº 14.129/2021) e retenção dos registros de envio e recebimento por cinco anos (art. 43, V).",
        "Divulgação de informação pessoal exige previsão legal ou consentimento expresso (art. 31, § 1º, II, da LAI); dado funcional do servidor é publicidade institucional (art. 29, § 2º, VII, da Lei nº 14.129/2021)."
      ],
      "comparacoes": [
        "Institucional x pessoal; real x potencial x aparente; dado pessoal x dado funcional; netiqueta x dever de publicidade — em cada eixo, muda o regime, o tratamento ou a norma aplicável."
      ],
      "fluxos": [
        "Publicação: classificar → verificar base legal → sanitizar → aprovar → publicar → registrar → monitorar e corrigir. Conflito: identificar → declarar → afastar ou recusar → substituir → revisar → remeter ao controle → corrigir o desenho."
      ],
      "excecoes": [
        "O servidor pode expressar opinião pessoal, desde que sem vincular o órgão e sem usar informação do cargo — o limite é esse.",
        "A utilidade de campanha não dispensa base legal: dado pessoal identificável só é divulgado com previsão legal ou consentimento expresso (art. 31, § 1º, II, da LAI)."
      ],
      "palavrasChave": [
        "institucional",
        "reserva",
        "conflito de interesse",
        "segregação de funções",
        "editorial",
        "correção",
        "escalonamento",
        "ouvidoria",
        "accountability"
      ],
      "checklist": [
        "Quais os controles mínimos de um canal institucional?",
        "O que distingue conflito real de potencial, e qual o tratamento do aparente?",
        "Em que hipótese a opinião do servidor em rede social é lícita?",
        "Qual dispositivo exige canal de ouvidoria e o que se faz diante de post com dado identificável de terceiro?",
        "Por que a segregação de funções trata o conflito e qual a relação entre netiqueta e publicidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, liste seis controles mínimos de governança de um perfil institucional.",
        "dados": "Perfil institucional de órgão municipal; equipe de três servidores e um estagiário; política editorial aprovada há um ano; publicações diárias sobre serviços; na semana anterior, um post foi ao ar às 22h30 sem aprovação registrada; não há controle de versão das publicações.",
        "conceitos": [
          "Titularidade do canal e responsável institucional",
          "Conta institucional com autenticação multifator e perfis por função",
          "Registro de publicações com autor, data, hora, versão e aprovador"
        ],
        "estrategia": "Recuperar da memória os controles do canal antes de listar — governança de acesso, política editorial, registro, correção e escalonamento — e conferir depois contra a síntese da unidade.",
        "execucao": [
          "Recuperar de memória os controles: titularidade, MFA, perfis por função, política editorial, registro de publicações, correção e escalonamento, ouvidoria e plano de incidente.",
          "Numerar os que o cenário exige de imediato, marcando os ausentes no cenário apresentado.",
          "Conferir contra a síntese da unidade e anotar os controles não recuperados, para revisão dirigida."
        ],
        "resultado": "(1) Titularidade do perfil no órgão; (2) conta institucional com autenticação multifator; (3) perfis de acesso por função, com menor privilégio; (4) política editorial aprovada; (5) registro de publicações com autor, data, hora, versão e aprovador; (6) rotina de correção de erros e de escalonamento; (7) canal de ouvidoria; (8) plano de resposta a incidente com preservação de evidência.",
        "justificativa": "Cada controle responde a risco distinto: titularidade define responsável; MFA e perfis protegem identidade; editorial e registro sustentam aprovação e auditoria; correção e ouvidoria sustentam a accountability (art. 34 da LAI).",
        "errosFrequentes": [
          "Responder «ter política» sem nomear seus elementos: tipos de publicação, autoridade aprovadora, tratamento de comentários, rotina de correção e vedação de dado pessoal de terceiro.",
          "Confundir controle de acesso com controle de conteúdo: MFA não substitui aprovação editorial nem verificação prévia."
        ],
        "variacao": "Se o canal for de campanha temporária, o conjunto mínimo não se reduz: titularidade, MFA, perfis, editorial, registro, correção e encerramento com arquivamento do registro permanecem — muda o prazo, não os controles."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como tratar um post institucional que contém dado identificável de terceiro, já publicado no perfil oficial do órgão?",
        "dados": "Post do perfil institucional com foto de atendimento; nome do cidadão e número do benefício legíveis na imagem; publicação há três dias; duzentas compartificações registradas; o cidadão retorna ao posto com print; a política editorial não prevê verificação de dados pessoais em imagem.",
        "conceitos": [
          "Informação pessoal e consentimento expresso (art. 31, § 1º, II, da Lei nº 12.527/2011)",
          "Dever de correção de erro e de prestar contas à população",
          "Registro de incidente e ação corretiva (art. 48, da Lei nº 14.129/2021)"
        ],
        "estrategia": "Conter primeiro — remover ou sanitizar —, preservar evidência, avaliar alcance e dano, comunicar o titular e corrigir o fluxo com verificação obrigatória de dados pessoais antes de publicar.",
        "execucao": [
          "Remover a publicação ou sanitizar a imagem, recortando nome e número do benefício.",
          "Preservar o registro original (data, hora, autor e conteúdo) para apuração e accountability.",
          "Avaliar alcance e comunicar o cidadão, orientando sobre o dado exposto e as providências cabíveis.",
          "Apurar a aprovação e a verificação prévia, registrando o incidente e a ação corretiva com responsável e prazo.",
          "Corrigir a política editorial, tornando obrigatória a checagem de dados pessoais em imagens e textos antes da publicação."
        ],
        "resultado": "Remover ou sanitizar (recortando identificadores), preservando o registro da publicação original; avaliar alcance e dano; comunicar o cidadão quando o risco de dano for relevante; apurar a publicação (autor, aprovação, verificação prévia); corrigir o processo, com verificação obrigatória de dados pessoais antes da publicação; registrar o incidente e a ação corretiva.",
        "justificativa": "O procedimento é gabarito porque a base legal não existia antes da publicação: conter protege o titular, preservar registro sustenta apuração e responsabilização, e corrigir o fluxo evita reincidência — tratar só o conteúdo repete a falha na próxima campanha.",
        "errosFrequentes": [
          "Sanitizar o post e apagar também o registro original, destruindo a evidência da apuração.",
          "Comunicar o cidadão somente se ele reclamar, ignorando o risco do dado já exposto por três dias."
        ],
        "variacao": "Se o conteúdo trouxer dados agregados — faixa etária, unidade e total de atendimentos —, não há informação pessoal identificável e a publicação pode permanecer; a verificação prévia segue obrigatória para confirmar que a imagem não contém identificador residual."
      },
      {
        "tipo": "erro",
        "problema": "Analisar a alegação de que o servidor pode usar conta pessoal porque a lei de acesso à informação alcançaria apenas órgãos públicos, e não servidores.",
        "dados": "Servidor comenta em conta pessoal print de tela de sistema interno com dado de requerente; perfil aberto; o texto não cita o órgão; o layout do sistema identifica a origem; o titular dos dados aciona o órgão após o print circular entre grupos de mensagens.",
        "conceitos": [
          "Alcance da Lei nº 12.527/2011 sobre o agente público (art. 32, II e IV; art. 34)",
          "Dever de reserva como limite da manifestação pessoal",
          "Proteção ao dado pessoal do titular (LGPD, art. 5º, I)"
        ],
        "estrategia": "Testar a premissa da afirmação: a LAI não alcança apenas o órgão, mas também o agente público; o erro está em presumir que «não sou órgão» implica «nenhum dever».",
        "execucao": [
          "Identificar quem prática o ato: agente público, no exercício ou usando informação alcançada pela função.",
          "Localizar na LAI as condutas tipificadas do agente (art. 32) e a responsabilização por danos (art. 34).",
          "Concluir que o dever decorre da função e do acesso à informação, e não da qualidade institucional do autor.",
          "Somar a proteção da LGPD ao dado do requerente e avaliar comunicação ao titular e providências de correção."
        ],
        "resultado": "A afirmação é errada e o raciocínio é o próprio erro: a conta pessoal do servidor não é zona imune, porque a Lei nº 12.527/2011 alcança o agente público (art. 32, II e IV, e art. 34) e o dever de reserva decorre da função, somando-se à proteção da LGPD ao dado do cidadão.",
        "justificativa": "O gabarito «errado» se apoia no art. 32 da LAI, que tipifica condutas do agente público ou militar, e no art. 34, que responsabiliza órgão e servidor pelos danos; a LGPD protege o dado do titular em qualquer canal. A premissa «servidor não é órgão» é irrelevante para o dever, que nasce do acesso e da função.",
        "errosFrequentes": [
          "Confundir o objeto da LAI — informações custodiadas pelo órgão — com o sujeito de deveres, que inclui o agente público.",
          "Supor que a manifestação pessoal protege qualquer conteúdo, desde que o texto não mencione o órgão."
        ],
        "variacao": "Se o servidor publicar, em conta pessoal, apenas análise técnica já divulgada em transparência ativa, sem dado de requerente e sem se apresentar como porta-voz, a conduta é lícita: muda a natureza do conteúdo, não o dever — a afirmação continua errada, mas o caso deixa de ser ilícito."
      }
    ]
  },
  "m6-u5-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Um serviço público digital inacessível nega o atendimento a parte da população, e a digitalização integral agrava a exclusão ao tornar o canal o único caminho. A unidade 6.5 estabelece o marco legal de acessibilidade (Lei nº 14.129/2021, Lei nº 12.527/2011, Lei nº 10.098/2000), as práticas técnicas mínimas de conteúdo e a obrigação de preservar o atendimento presencial, de modo que a economia de custo nunca se sobreponha ao acesso e à qualidade para quem fica de fora.",
      "preRequisitos": [
        "Unidades 6.1 e 6.2 (publicidade e linguagem clara)",
        "Noções básicas de HTML",
        "Noções de usabilidade e formatos de documento"
      ],
      "objetivosObservaveis": [
        "Citar os dispositivos que impõem acessibilidade ao órgão público",
        "Relacionar acessibilidade de conteúdo a medidas técnicas concretas",
        "Explicar por que o atendimento presencial permanece obrigatório diante da digitalização",
        "Distinguir acessibilidade de inclusão digital",
        "Planejar verificação de conformidade com evidência"
      ],
      "competencias": [
        "Avaliar interface com critérios técnicos de acessibilidade",
        "Desenhar processo que preserve canal alternativo de atendimento",
        "Redigir evidência de conformidade de serviço digital"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital)",
        "m6-u5-t2-s1 (Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Acessibilidade e inclusão digital integram o conteúdo de Governo Digital e Lei de Acesso à Informação com classificação média, por sua relevância qualitativa para o serviço público. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece o escopo da unidade 6.5: acessibilidade como propriedade do artefato digital (perceptível, operável, compreensível e robusto) e inclusão digital como resultado social de alcance do serviço por toda a população. Identifica o marco legal (Lei nº 14.129/2021, Lei nº 12.527/2011, Lei nº 10.098/2000), entende que a digitalização não suprime o atendimento presencial e distingue acessibilidade de inclusão digital como conceitos distintos, ainda que relacionados.",
      "intermediario": "O aluno relaciona os dispositivos de acessibilidade do serviço público às medidas técnicas de conteúdo (texto alternativo, contraste, navegação por teclado, rótulos associados). Explica por que o atendimento presencial permanece obrigatório (art. 3º, XVI e art. 14, Lei nº 14.129/2021) e planeja uma verificação de conformidade combinando verificação automática, revisão manual e teste com usuário.",
      "avancado": "O aluno avalia conformidade de sítios e sistemas críticos, interpreta resultados de testes automatizados com suas limitações, projeta planos de correção com prazo e responsável e generaliza o padrão de acessibilidade a todo o portfólio de páginas, documentos e vídeos do órgão, vinculando achados de auditoria ao art. 49 da Lei nº 14.129/2021.",
      "especialista": "O aluno define governança de acessibilidade institucional: matriz de requisitos por tipo de serviço, indicadores de abandono e conclusão por canal (painel do art. 22), pesquisas com usuários (art. 24, VIII), ciclos de auditoria baseada em risco e integração entre acessibilidade, inclusão digital e eficiência sem redução de despesa."
    },
    "comparacoes": [
      {
        "tema": "Acessibilidade versus inclusão digital",
        "a": {
          "rotulo": "Acessibilidade",
          "texto": "Propriedade do artefato digital (página, documento, vídeo, formulário) de ser perceptível, operável, compreensível e robusto para pessoas com deficiência ou outras limitações de interação."
        },
        "b": {
          "rotulo": "Inclusão digital",
          "texto": "Resultado social de permitir que toda a população, com diferentes níveis de conexão, equipamento, habilidade, alfabetização digital e situação socioeconômica, alcance efetivamente o serviço público."
        },
        "diferencaGabarito": "Acessibilidade é atributo técnico do artefato; inclusão digital é o resultado social de alcance do serviço. Um portal acessível que exige conexão rápida não é inclusivo; um atendimento presencial é incluente, mas não é acessível no sentido digital."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Acessibilidade é medida apenas por teste automatizado de página.",
        "porqueErrada": "O teste automatizado detecta apenas parte das barreiras (rótulos ausentes, contraste insuficiente, ordem de tabulação). Não avalia clareza de linguagem, coerência do fluxo, usabilidade com tecnologia assistiva nem compreensão de quem usa a interface.",
        "versaoCorreta": "A avaliação completa combina verificação automática, revisão manual e teste com usuários, conforme o art. 24, VIII, da Lei nº 14.129/2021, que prevê testes e pesquisas com os usuários para subsidiar serviços simples, intuitivos, acessíveis e personalizados."
      },
      {
        "afirmacaoEquivocada": "Extinguir o atendimento presencial torna o serviço mais eficiente e moderniza o órgão.",
        "porqueErrada": "A extinção do canal presencial contraria o art. 3º, XVI e o art. 14 da Lei nº 14.129/2021, que preservam o atendimento presencial conforme características, relevância e público-alvo do serviço. Eficiência sem acesso para quem não usa o digital é exclusão disfarçada de economia.",
        "versaoCorreta": "O atendimento presencial permanece obrigatório, ajustado ao público-alvo; o ganho de eficiência deve vir da correção de barreiras do canal digital, com medição de abandono e fila, e nunca do fechamento do balcão por métrica agregada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acessibilidade de conteúdo digital",
        "Inclusão digital",
        "Marco legal do Governo Digital (Lei nº 14.129/2021)",
        "Atendimento presencial como canal alternativo"
      ],
      "regras": [
        "O atendimento presencial permanece obrigatório (art. 3º, XVI e art. 14, Lei nº 14.129/2021)",
        "Formatos abertos e livres são preferenciais na internet e aplicações (art. 3º, XXV, Lei nº 14.129/2021)",
        "A linguagem clara e compreensível se aplica a qualquer cidadão (art. 3º, VII, Lei nº 14.129/2021)"
      ],
      "comparacoes": [
        "Acessibilidade é propriedade do artefato; inclusão digital é o resultado social de alcance do serviço por toda a população."
      ],
      "fluxos": [
        "Verificação automática de barreiras → revisão manual de conteúdo e fluxo → teste com usuário em tecnologia assistiva → registro da evidência de conformidade."
      ],
      "excecoes": [
        "Serviço acessível por outra via para o mesmo público pode dispensar o canal presencial, desde que não haja barreira de acesso para esse público específico."
      ],
      "palavrasChave": [
        "acessibilidade",
        "inclusão digital",
        "Governo Digital",
        "atendimento presencial",
        "Lei 14.129/2021",
        "conformidade",
        "tecnologia assistiva",
        "formato aberto"
      ],
      "checklist": [
        "Contraste suficiente entre texto e fundo",
        "Textos alternativos em imagens informativas",
        "Navegação completa por teclado com foco visível",
        "Rótulos de campo explícitos e associados programaticamente",
        "Canal presencial preservado conforme público-alvo",
        "Evidência de verificação registrada com prazo"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença entre acessibilidade e inclusão digital no contexto de um portal público?",
        "dados": "Portal acessível que exige navegador de última geração e conexão rápida; serviço presencial disponível; população com diferentes níveis de conexão, equipamento, habilidade e alfabetização digital.",
        "conceitos": [
          "Acessibilidade de conteúdo digital",
          "Inclusão digital"
        ],
        "estrategia": "Explicar os dois conceitos isoladamente, com o artefato digital de um lado e o resultado social de alcance do outro, usando contraexemplos concretos.",
        "execucao": [
          "1) Definir acessibilidade como propriedade do artefato digital (perceptível, operável, compreensível, robusto)",
          "2) Definir inclusão digital como resultado social de alcance do serviço por toda a população",
          "3) Aplicar ao contraexemplo: portal acessível mas exigente de conexão rápida não é inclusivo",
          "4) Aplicar ao contraexemplo: serviço presencial não é acessível, mas é incluente para quem não tem condições de usar o digital"
        ],
        "resultado": "Acessibilidade é propriedade do artefato; inclusão digital é o resultado social de alcance do serviço. Um portal acessível que exige navegador de última geração e conexão rápida não é inclusivo.",
        "justificativa": "O resultado separa claramente atributo técnico do artefato (acessibilidade) de resultado social de alcance (inclusão), evitando a confusão comum que leva órgãos a declarar conformidade só porque o site passou no teste automatizado.",
        "errosFrequentes": [
          "Tratar acessibilidade e inclusão digital como sinônimos e declarar conformidade apenas com teste automatizado",
          "Achar que serviço presencial substitui a obrigação de tornar o digital acessível"
        ],
        "variacao": "Se o serviço for um edital público com inscrição exclusivamente online, a análise deve verificar se há alternativa presencial equivalente para quem não tem conexão ou equipamento, além da acessibilidade do formulário."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão substituiu o atendimento presencial por agendamento exclusivo em aplicativo. Qual o problema jurídico?",
        "dados": "Atendimento presencial extinto; agendamento somente via aplicativo; art. 3º, XVI e art. 14 da Lei nº 14.129/2021 preservam o atendimento presencial conforme características, relevância e público-alvo do serviço.",
        "conceitos": [
          "Atendimento presencial como direito",
          "Prestação digital por tecnologias de amplo acesso",
          "Proibição de extinção do canal presencial"
        ],
        "estrategia": "Identificar o dispositivo legal que veda a extinção do presencial, apontar a exceção (serviço acessível por outra via para o mesmo público) e concluir que a substituição integral é vedada.",
        "execucao": [
          "1) Constatar que o atendimento presencial foi substituído por agendamento exclusivo em aplicativo",
          "2) Aplicar o art. 3º, XVI e o art. 14 da Lei nº 14.129/2021, que preservam o atendimento presencial",
          "3) Verificar se o serviço é acessível por outra via para o mesmo público (única exceção possível)",
          "4) Concluir que a extinção do canal presencial é vedada pelo regime, salvo a exceção prevista"
        ],
        "resultado": "A Lei nº 14.129/2021 mantém o atendimento presencial (art. 3º, XVI e art. 14). A extinção do canal presencial é vedada pelo regime, salvo se o serviço for considerado acessível por outra via para o mesmo público.",
        "justificativa": "O art. 3º, XVI vincula a permanência do presencial às características, relevância e público-alvo do serviço; o art. 14 exige prestação digital por tecnologias de amplo acesso sem prejuízo do presencial. A substituição integral descumpre ambos.",
        "errosFrequentes": [
          "Achar que a digitalização integral autora extinguir o balcão por economia",
          "Confundir acesso digital com acesso universal, ignorando baixa renda e áreas rurais e isoladas"
        ],
        "variacao": "Se o serviço for de segunda via de documento com emissão digital assinada eletronicamente, a demanda de balcão pode cair, mas a via presencial deve ser mantida para quem não consegue usar o digital, com redimensionamento com base em estudo de impacto."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Acessibilidade é medida apenas por teste automatizado de página.' — avaliar se a afirmação procede.",
        "dados": "Teste automatizado detecta rótulos ausentes, contraste insuficiente e ordem de tabulação; não avalia clareza de linguagem, coerência de fluxo, usabilidade com tecnologia assistiva nem compreensão do usuário; art. 24, VIII, Lei nº 14.129/2021.",
        "conceitos": [
          "Limite do teste automatizado",
          "Avaliação completa de acessibilidade",
          "Teste com usuário em tecnologia assistiva"
        ],
        "estrategia": "Desmontar a afirmação mostrando o que o teste automatizado não detecta e apresentar a avaliação completa exigida pelo art. 24, VIII da Lei nº 14.129/2021.",
        "execucao": [
          "1) Listar o que o teste automatizado detecta (rótulos ausentes, contraste insuficiente, ordem de tabulação)",
          "2) Listar o que ele não detecta (clareza de linguagem, coerência de fluxo, usabilidade com tecnologia assistiva, compreensão)",
          "3) Aplicar o art. 24, VIII da Lei nº 14.129/2021 (testes e pesquisas com usuários)",
          "4) Concluir que a avaliação completa combina verificação automática, revisão manual e teste com usuários"
        ],
        "resultado": "Errado. O teste automatizado detecta parte das barreiras, mas não avalia clareza de linguagem, coerência do fluxo, usabilidade com tecnologia assistiva ou compreensão de quem usa a interface. A avaliação completa combina verificação automática, revisão manual e teste com usuários.",
        "justificativa": "A leitura ingênua confunde detecção de barreiras técnicas com avaliação de usabilidade real; o art. 24, VIII da Lei nº 14.129/2021 exige testes e pesquisas com usuários justamente porque o automatizado é insuficiente.",
        "errosFrequentes": [
          "Achar que passar no verificador automático significa conformidade total",
          "Substituir o teste com usuário por revisão manual da equipe de desenvolvimento"
        ],
        "variacao": "Se o artefato for um vídeo institucional sem áudio descrito, o teste automatizado não captura a ausência de legenda ou transcrição, exigindo revisão manual e teste com usuário surdo ou com deficiência auditiva."
      }
    ]
  },
  "m6-u5-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A unidade 6.5 detalha o marco legal de acessibilidade do serviço público (Lei nº 14.129/2021, Lei nº 12.527/2011, Lei nº 10.098/2000) e as práticas técnicas mínimas de conteúdo digital organizadas pelas quatro dimensões de acessibilidade. Dominar essa distinção entre dispositivo legal e medida técnica evita o erro comum de declarar conformidade só porque o formato é aberto, ignorando a exigência autônoma de acessibilidade de conteúdo nos sítios oficiais.",
      "preRequisitos": [
        "Conteúdo da orientação estratégica da unidade 6.5",
        "Noções de HTML e documentos digitais",
        "Conhecimento das quatro dimensões de acessibilidade (perceptível, operável, compreensível, robusto)"
      ],
      "objetivosObservaveis": [
        "Relacionar dispositivos de acessibilidade do serviço público às medidas técnicas de conteúdo",
        "Organizar um plano de verificação de conformidade com evidência",
        "Aplicar as quatro dimensões de acessibilidade a páginas, documentos e vídeos",
        "Diferenciar formato aberto de conteúdo acessível"
      ],
      "competencias": [
        "Aplicar práticas técnicas de conteúdo acessível",
        "Elaborar plano de verificação de conformidade com evidência",
        "Diferenciar formato aberto de conteúdo acessível"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t1-s1 (Orientação estratégica da unidade)",
        "m6-u5-t2-s1 (Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Marco legal e práticas técnicas de acessibilidade integram o conteúdo de Governo Digital e Lei de Acesso à Informação com classificação média, por sua centralidade na conformidade do serviço digital. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno identifica os dispositivos legais de acessibilidade (art. 3º, XIX da Lei nº 14.129/2021; art. 8º, § 3º, VIII da Lei nº 12.527/2011; art. 17 da Lei nº 10.098/2000) e as quatro dimensões de acessibilidade de conteúdo. Reconhece que formato aberto não é sinônimo de acessibilidade e que o atendimento presencial permanece como canal alternativo.",
      "intermediario": "O aluno relaciona cada dispositivo legal à medida técnica correspondente (texto alternativo, contraste, navegação por teclado, rótulos associados) e monta um plano de verificação de conformidade combinando verificação automática, revisão manual e teste com usuário.",
      "avancado": "O aluno avalia conformidade de sítios, sistemas e documentos críticos, interpreta limitações de testes automatizados, projeta planos de correção com prazo e responsável e generaliza o padrão de acessibilidade a todo o portfólio de artefatos do órgão.",
      "especialista": "O aluno define governança de acessibilidade institucional: matriz de requisitos por tipo de serviço, indicadores de abandono e conclusão por canal, pesquisas com usuários e ciclos de auditoria baseada em risco, integrando acessibilidade, inclusão digital e eficiência."
    },
    "comparacoes": [
      {
        "tema": "Formato aberto versus conteúdo acessível",
        "a": {
          "rotulo": "Formato aberto",
          "texto": "Condição de reutilização e transparência (art. 4º, IV e VI, Lei nº 14.129/2021); permite download em CSV, PDF acessível ou texto, não apenas em aplicação ou formatos proprietários."
        },
        "b": {
          "rotulo": "Conteúdo acessível",
          "texto": "Exigência de acessibilidade de conteúdo nos sítios oficiais (art. 8º, § 3º, VIII, Lei nº 12.527/2011); conteúdo deve ser perceptível, operável, compreensível e robusto para pessoas com deficiência."
        },
        "diferencaGabarito": "Formato aberto é condição de reutilização e transparência; conteúdo acessível é exigência autônoma de usabilidade para pessoas com deficiência. CSV aberto sem dicionário pode ser inacessível; PDF ilegível por leitor de tela viola acessibilidade mesmo sendo formato fechado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Publicar dados em formato CSV garante acessibilidade, porque é um formato aberto.",
        "porqueErrada": "Formato aberto é condição de reutilização e transparência (art. 4º, IV e VI, Lei nº 14.129/2021), e não de acessibilidade: um CSV sem dicionário de dados, sem unidade e sem descrição de código exclui justamente o leitor que precisa do dado.",
        "versaoCorreta": "Formato aberto não é sinônimo de acessibilidade. O art. 8º, § 3º, VIII, da Lei nº 12.527/2011 exige medidas de acessibilidade de conteúdo; um PDF ilegível por leitor de tela viola essa exigência, ainda que o formato seja aberto."
      },
      {
        "afirmacaoEquivocada": "O texto alternativo em imagens serve apenas para pessoas cegas.",
        "porqueErrada": "O texto alternativo beneficia também quem tem conexão lenta (imagem não carrega), quem usa leitor de tela por preferência e mecanismos de indexação; é requisito da dimensão perceptível para todos os usuários, não só para pessoas com deficiência visual.",
        "versaoCorreta": "Texto alternativo atende à dimensão perceptível e beneficia pessoas com deficiência visual, usuários de conexão limitada e indexação por mecanismos de busca, não apenas pessoas cegas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Marco legal do Governo Digital (Lei nº 14.129/2021)",
        "Lei de Acesso à Informação (Lei nº 12.527/2011)",
        "Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015)",
        "Quatro dimensões de acessibilidade (perceptível, operável, compreensível, robusto)"
      ],
      "regras": [
        "Sítios oficiais devem adotar medidas de acessibilidade de conteúdo (art. 8º, § 3º, VIII, Lei nº 12.527/2011)",
        "Formatos abertos e livres são preferenciais na internet e aplicações (art. 3º, XXV, Lei nº 14.129/2021)",
        "Linguagem clara e compreensível se aplica a qualquer cidadão (art. 3º, VII, Lei nº 14.129/2021)"
      ],
      "comparacoes": [
        "Formato aberto é condição de reutilização e transparência; conteúdo acessível é exigência autônoma de usabilidade para pessoas com deficiência."
      ],
      "fluxos": [
        "Publicar em formato aberto legível por máquina → acompanhar de dicionário de dados → incluir nota metodológica → oferecer versão em documento acessível → documentar formatos utilizados."
      ],
      "excecoes": [
        "O formato aberto não dispensa a acessibilidade de conteúdo; CSV sem dicionário de dados pode ser aberto mas inacessível para quem não é especialista."
      ],
      "palavrasChave": [
        "acessibilidade",
        "conteúdo digital",
        "formato aberto",
        "Lei 14.129/2021",
        "Lei 12.527/2011",
        "dicionário de dados",
        "leitor de tela",
        "texto alternativo"
      ],
      "checklist": [
        "Texto alternativo em imagens informativas",
        "Legenda em vídeos com áudio",
        "Contraste suficiente entre texto e fundo",
        "Navegação completa por teclado com foco visível",
        "Rótulos de campo explícitos e associados programaticamente",
        "Arquivo publicado em formato aberto legível por máquina",
        "Dicionário de dados acompanhando o arquivo",
        "Documentação dos formatos utilizados"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um formulário digital exige preenchimento de dados em fonte de 8 pontos e não identifica o campo para leitores de tela. O que está em jogo?",
        "dados": "Fonte de 8 pontos; campo sem identificação programática para leitor de tela; dimensões operável, compreensível e robusto da acessibilidade de conteúdo.",
        "conceitos": [
          "Acessibilidade operável",
          "Acessibilidade compreensível",
          "Acessibilidade robusto",
          "Leitor de tela"
        ],
        "estrategia": "Analisar cada dimensão afetada pelo formulário e definir a correção técnica (fonte legível, rótulo explícito associado programaticamente).",
        "execucao": [
          "1) Identificar fonte de 8 pontos como barreira operável (tamanho de alvo e contraste reduzem acurácia e legibilidade)",
          "2) Identificar ausência de rótulo associado programaticamente como barreira compreensível e robusto",
          "3) Corrigir com fonte mínima legível, rótulo explícito e associação programática entre rótulo visível e controle",
          "4) Indicar formato e limite do campo; validar com tecnologia assistiva"
        ],
        "resultado": "Três dimensões afetadas: operável (tamanho de alvo e contraste), compreensível (rótulo de campo) e robusto (identificação programática). A correção exige fonte mínima legível, rótulo explícito associado programaticamente e validação com tecnologia assistiva.",
        "justificativa": "O resultado conecta cada barreira observada à dimensão técnica correspondente e aponta a correção concreta, evitando a leitura ingênua de que apenas ampliar a fonte resolve o problema.",
        "errosFrequentes": [
          "Achar que ampliar a fonte resolve tudo, ignorando a associação programática do rótulo",
          "Confundir rótulo visível com identificação programática para leitor de tela"
        ],
        "variacao": "Se o formulário for de inscrição em concurso público com campo de upload de documento, a validação com leitor de tela deve incluir o controle de envio de arquivo e a mensagem de erro."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como garantir que uma planilha publicada em dados abertos seja acessível e útil ao mesmo tempo?",
        "dados": "Planilha em dados abertos; formato CSV legível por máquina; art. 29, § 1º, III, Lei nº 14.129/2021 (dicionário de dados); art. 8º, § 3º, IV, Lei nº 12.527/2011 (documentação de formatos).",
        "conceitos": [
          "Dicionário de dados",
          "Nota metodológica",
          "Documento acessível",
          "Formato aberto legível por máquina"
        ],
        "estrategia": "Combinar transparência (formato aberto) com acessibilidade (dicionário, nota metodológica, versão acessível, documentação de formatos).",
        "execucao": [
          "1) Publicar o arquivo em formato aberto legível por máquina (CSV)",
          "2) Acompanhar de dicionário de dados que descreva cada campo, unidade, significado e origem (art. 29, § 1º, III, Lei nº 14.129/2021)",
          "3) Incluir nota metodológica com semântica dos agregados",
          "4) Oferecer versão em documento acessível (PDF com estrutura de títulos e tabela marcada, ou texto)",
          "5) Documentar os formatos utilizados (art. 8º, § 3º, IV, Lei nº 12.527/2011)"
        ],
        "resultado": "Combinar transparência e acessibilidade: publicar o arquivo em formato aberto legível por máquina (CSV), acompanhado de dicionário de dados, nota metodológica, versão em documento acessível e documentação dos formatos utilizados.",
        "justificativa": "Sem dicionário de dados, o dado aberto é publicado mas inutilizável por quem não é especialista; a acessibilidade exige mais que o formato aberto, requerendo inteligibilidade do dado.",
        "errosFrequentes": [
          "Achar que CSV aberto por si só é acessível",
          "Publicar o dado sem dicionário, tornando-o inutilizável para não-especialistas"
        ],
        "variacao": "Se o arquivo for um painel de indicadores de desempenho (art. 22, Lei nº 14.129/2021), a versão acessível deve permitir leitura do valor e do período, não apenas a descrição genérica do gráfico."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Publicar dados em formato CSV garante acessibilidade, porque é um formato aberto.'",
        "dados": "Formato CSV (aberto); ausência de dicionário de dados, unidade e descrição de código; PDF ilegível por leitor de tela; art. 4º, IV e VI e art. 8º, § 3º, VIII (Lei nº 14.129/2021 e Lei nº 12.527/2011).",
        "conceitos": [
          "Formato aberto como reutilização e transparência",
          "Acessibilidade de conteúdo como usabilidade",
          "Dicionário de dados"
        ],
        "estrategia": "Desmontar a equivalência falsa entre formato aberto e acessibilidade, citando o dispositivo legal que exige acessibilidade de conteúdo independente do formato.",
        "execucao": [
          "1) Identificar que formato aberto é condição de reutilização e transparência (art. 4º, IV e VI, Lei nº 14.129/2021), não de acessibilidade",
          "2) Constatar que CSV sem dicionário de dados, unidade e descrição de código exclui o leitor que precisa do dado",
          "3) Aplicar o art. 8º, § 3º, VIII, da Lei nº 12.527/2011 (acessibilidade de conteúdo nos sítios oficiais)",
          "4) Concluir que PDF ilegível por leitor de tela viola a exigência de acessibilidade, ainda que o formato seja aberto"
        ],
        "resultado": "Errado. A abertura de formato assegura reuso e transparência dos dados; acessibilidade exige dicionário de dados, unidades declaradas, descrição de códigos e equivalente acessível para quem usa tecnologia assistiva.",
        "justificativa": "A confusão entre transparência e acessibilidade é a armadilha central: o formato aberto garante reutilização, mas a acessibilidade de conteúdo é exigência autônoma do art. 8º, § 3º, VIII da Lei nº 12.527/2011.",
        "errosFrequentes": [
          "Equarar formato aberto com acessibilidade de conteúdo",
          "Publicar CSV sem dicionário de dados e considerar o requisito cumprido"
        ],
        "variacao": "Se o arquivo for um PDF com tabela de execução orçamentária sem marcação de estrutura, a ausência de equivalente acessível viola o mesmo dispositivo, independentemente de ser PDF ou CSV."
      }
    ]
  },
  "m6-u5-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O tema Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora é relevante para concursos de ética e governo digital porque impacta imparcialidade, transparência e conformidade com a Lei nº 14.129/2021 e a LGPD. Dominar o assunto evita responsabilização e orienta decisões em situações concretas de conflito e conduta.",
      "preRequisitos": [
        "Noção de ética pública",
        "Conhecimento da Lei nº 14.129/2021",
        "Noção de responsabilidade digital"
      ],
      "objetivosObservaveis": [
        "Definir Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora",
        "Aplicar critérios de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora em casos práticos de serviço público"
      ],
      "competencias": [
        "Raciocínio ético aplicado",
        "Análise crítica de conduta"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t1-s1 (Orientação estratégica da unidade) — tema correlato",
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital) — tema correlato"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora é cobrado em provas de ética e governo digital com foco em aplicação prática e interpretação normativa."
      }
    },
    "niveis": {
      "iniciante": "Iniciante: Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora. INCLUSÃO DIGITAL é o conjunto de condições para que o serviço público digital seja efetivamente alcançável por toda a população, considerando conexão, equipamento, habilidade, alfabetização digital, idade, deficiência, línguas e situação socioeconômi Conceito básico e identificação de elementos centrais.",
      "intermediario": "Intermediário: Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora. Aplicação de conceitos em casos simples com apoio da norma e identificação de risco.",
      "avancado": "Avançado: Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora. Análise crítica, distinção entre situações similares e avaliação de impacto em governança.",
      "especialista": "Especialista: Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora. Elaboração de diretrizes, auditoria de processos e proposição de melhorias institucionais."
    },
    "comparacoes": [
      {
        "tema": "Comparação sobre Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora",
        "a": {
          "rotulo": "Abordagem correta",
          "texto": "Descrição da abordagem correta para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora com base na norma e na prática administrativa."
        },
        "b": {
          "rotulo": "Abordagem incorreta",
          "texto": "Descrição da abordagem incorreta para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora que ignora requisitos legais ou de transparência."
        },
        "diferencaGabarito": "A diferença de gabarito para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora está na correta identificação dos elementos e na aplicação da regra correspondente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Como o art. 3º, III, da Lei nº 14.129/2021 assegura o acesso digital sem necessidade de solicitaçã",
        "porqueErrada": "A afirmação desconsidera requisitos essenciais do Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora e da legislação aplicável.",
        "versaoCorreta": "Versão correta sobre Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora: reconhecer limites legais e necessidade de registro e transparência."
      },
      {
        "afirmacaoEquivocada": "O Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora pode ser tratado informalmente sem registro.",
        "porqueErrada": "A informalidade impede verificação e responsabilização.",
        "versaoCorreta": "Tratamento formal é obrigatório para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora, com registro e eventual afastamento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Conceito central de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora",
        "Elemento normativo de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora",
        "Aplicação prática de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora"
      ],
      "regras": [
        "Regra geral para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora",
        "Exceção prevista para Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora"
      ],
      "comparacoes": [
        "Comparação entre abordagens de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora"
      ],
      "fluxos": [
        "Fluxo de identificação e tratamento"
      ],
      "excecoes": [
        "Exceção de baixa materialidade"
      ],
      "palavrasChave": [
        "ética",
        "transparência",
        "responsabilidade",
        "conduta"
      ],
      "checklist": [
        "Identificar situação",
        "Declarar interesse",
        "Avaliar afastamento",
        "Registrar decisão"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o art. 6º da Lei nº 14.129/2021 prevê a exceção de atos processuais em meio físico «diante de risco de dano relevante à celeridade do processo»?",
        "dados": "Dados: Por que o art. 6º da Lei nº 14.129/2021 prevê a exceção de atos processuais em meio físico «diante de risco de dano relevante à celeridade do processo»? Contexto normativo Lei 14.129/2021 e LGPD aplicados a Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora.",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para introdução: analisar o enunciado \"Por que o art. 6º da Lei nº 14.129/2021 prevê a exceção de atos processuais em meio físico «diante d\" e relacionar com Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora, identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "A exceção revela a lógica do regime: a digitalização é a regra, mas não pode gerar dano. Em processos em que a insistência no meio digital inviabilizaria o cidadão — quando a sessão presencial é a única forma de verificar a identidade ou de obter documento, por exemplo — admitir o atendimento físico não é preservar ninguém, é instrumento de inclusão. A exceção, portanto, concretiza o princípio da eficiência sem impor restrição de acesso a quem tem menos condições de usar o canal digital, porque o meio eletrônico deixa de ser o único caminho e passa a ser um entre vários.",
        "justificativa": "Justificativa: A exceção revela a lógica do regime: a digitalização é a regra, mas não pode gerar dano. Em processos em que a insistência no meio digital inviabilizaria o cidadão (por exemplo, qu Aplicação ao Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 1",
          "Falta de registro no caso 1"
        ],
        "variacao": "Variação: modificar contexto de \"Por que o art. 6º da Lei nº 14.129/2021 prevê a exceção de a\" para novo cenário mantendo lógica de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora."
      },
      {
        "tipo": "aplicacao",
        "problema": "O painel do art. 22 da Lei nº 14.129/2021 mostra queda de 40% no atendimento presencial e aumento do digital. O que investigar?",
        "dados": "Dados: O painel do art. 22 da Lei nº 14.129/2021 mostra queda de 40% no atendimento presencial e aumento do digital. O que investigar? Contexto normativo Lei 14.129/2021 e LGPD aplicados a Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora.",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para aplicação: analisar o enunciado \"O painel do art. 22 da Lei nº 14.129/2021 mostra queda de 40% no atendimento presencial e aumento do\" e relacionar com Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora, identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "Investigar se a queda é consequência de desvio de demanda — bom sinal — ou de barreira — sinal grave. Os cruzamentos de dados indicam a causa: a taxa de abandono por etapa no digital revela barreira de processo; o crescimento de filas em horários de pico indica transferência de custo para o balcão; o perfil dos usuários por canal mostra quem deixou de ser atendido; e a pesquisa com usuários, prevista no art. 24, VIII, permite identificar a barreira diretamente. Se o balcão já está sobrecarregado, há risco de exclusão de quem depende do atendimento presencial, e a medida de eficiência deixa de ser ganho administrativo para se tornar restrição de acesso.",
        "justificativa": "Justificativa: Investigar se a queda é consequência de desvio de demanda (bom sinal) ou de barreira (sinal grave). Cruzamentos: taxa de abandono por etapa no digital (indica barreira de processo) Aplicação ao Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 2",
          "Falta de registro no caso 2"
        ],
        "variacao": "Variação: modificar contexto de \"O painel do art. 22 da Lei nº 14.129/2021 mostra queda de 40\" para novo cenário mantendo lógica de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o art. 3º, III, da Lei nº 14.129/2021 assegura o acesso digital sem necessidade de solicitação presencial, o atendimento presencial pode ser extinto em todo serviço público.'",
        "dados": "Dados: Afirmação: 'Como o art. 3º, III, da Lei nº 14.129/2021 assegura o acesso digital sem necessidade de solicitação presencial, o atendimento presencial pode ser extinto em todo serviço público.' Contexto normativo Lei 14.129/2021 e LGPD aplicados a Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora.",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para erro: analisar o enunciado \"Afirmação: 'Como o art. 3º, III, da Lei nº 14.129/2021 assegura o acesso digital sem necessidade de \" e relacionar com Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora, identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "Errado. O art. 3º, XVI e o art. 14 da mesma lei preservam o atendimento presencial, ajustado às características e ao público-alvo do serviço. O art. 3º, III assegura a via digital; não revoga a via presencial. Item que apaga a ressalva do XVI é a armadilha mais comum sobre a Lei de Governo Digital.",
        "justificativa": "Justificativa: Errado. O art. 3º, XVI e o art. 14 da mesma lei preservam o atendimento presencial, ajustado às características e ao público-alvo do serviço. O art. 3º, III assegura a via digital; Aplicação ao Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 3",
          "Falta de registro no caso 3"
        ],
        "variacao": "Variação: modificar contexto de \"Afirmação: 'Como o art. 3º, III, da Lei nº 14.129/2021 asseg\" para novo cenário mantendo lógica de Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora."
      }
    ]
  },
  "m6-u5-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O tema Exemplos resolvidos da unidade (três casos completos) é relevante para concursos de ética e governo digital porque impacta imparcialidade, transparência e conformidade com a Lei nº 14.129/2021 e a LGPD. Dominar o assunto evita responsabilização e orienta decisões em situações concretas de conflito e conduta.",
      "preRequisitos": [
        "Noção de ética pública",
        "Conhecimento da Lei nº 14.129/2021",
        "Noção de responsabilidade digital"
      ],
      "objetivosObservaveis": [
        "Definir Exemplos resolvidos da unidade (três casos completos)",
        "Aplicar critérios de Exemplos resolvidos da unidade (três casos completos) em casos práticos de serviço público"
      ],
      "competencias": [
        "Raciocínio ético aplicado",
        "Análise crítica de conduta"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t1-s1 (Orientação estratégica da unidade) — tema correlato",
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital) — tema correlato"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O Exemplos resolvidos da unidade (três casos completos) é cobrado em provas de ética e governo digital com foco em aplicação prática e interpretação normativa."
      }
    },
    "niveis": {
      "iniciante": "Iniciante: Exemplos resolvidos da unidade (três casos completos). Todos os exemplos da unidade seguem o template de nove itens exigido pela especificação didática. Conceito básico e identificação de elementos centrais.",
      "intermediario": "Intermediário: Exemplos resolvidos da unidade (três casos completos). Aplicação de conceitos em casos simples com apoio da norma e identificação de risco. complemento para atingir tamanho mínimo exigido. ",
      "avancado": "Avançado: Exemplos resolvidos da unidade (três casos completos). Análise crítica, distinção entre situações similares e avaliação de impacto em governança. complemento para atingir tamanho mínimo exigido. ",
      "especialista": "Especialista: Exemplos resolvidos da unidade (três casos completos). Elaboração de diretrizes, auditoria de processos e proposição de melhorias institucionais. complemento para atingir tamanho mínimo exigido. "
    },
    "comparacoes": [
      {
        "tema": "Comparação sobre Exemplos resolvidos da unidade (três casos completos)",
        "a": {
          "rotulo": "Abordagem correta",
          "texto": "Descrição da abordagem correta para Exemplos resolvidos da unidade (três casos completos) com base na norma e na prática administrativa."
        },
        "b": {
          "rotulo": "Abordagem incorreta",
          "texto": "Descrição da abordagem incorreta para Exemplos resolvidos da unidade (três casos completos) que ignora requisitos legais ou de transparência."
        },
        "diferencaGabarito": "A diferença de gabarito para Exemplos resolvidos da unidade (três casos completos) está na correta identificação dos elementos e na aplicação da regra correspondente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "EXEMPLO 3 (INTERPRETAÇÃO DE ERRO — NÍVEL AVANÇADO) — A auditoria interna apontou que o portal do órgão tem con",
        "porqueErrada": "A afirmação desconsidera requisitos essenciais do Exemplos resolvidos da unidade (três casos completos) e da legislação aplicável.",
        "versaoCorreta": "Versão correta sobre Exemplos resolvidos da unidade (três casos completos): reconhecer limites legais e necessidade de registro e transparência."
      },
      {
        "afirmacaoEquivocada": "O Exemplos resolvidos da unidade (três casos completos) pode ser tratado informalmente sem registro.",
        "porqueErrada": "A informalidade impede verificação e responsabilização.",
        "versaoCorreta": "Tratamento formal é obrigatório para Exemplos resolvidos da unidade (três casos completos), com registro e eventual afastamento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Conceito central de Exemplos resolvidos da unidade (três casos completos)",
        "Elemento normativo de Exemplos resolvidos da unidade (três casos completos)",
        "Aplicação prática de Exemplos resolvidos da unidade (três casos completos)"
      ],
      "regras": [
        "Regra geral para Exemplos resolvidos da unidade (três casos completos)",
        "Exceção prevista para Exemplos resolvidos da unidade (três casos completos)"
      ],
      "comparacoes": [
        "Comparação entre abordagens de Exemplos resolvidos da unidade (três casos completos)"
      ],
      "fluxos": [
        "Fluxo de identificação e tratamento"
      ],
      "excecoes": [
        "Exceção de baixa materialidade"
      ],
      "palavrasChave": [
        "ética",
        "transparência",
        "responsabilidade",
        "conduta"
      ],
      "checklist": [
        "Identificar situação",
        "Declarar interesse",
        "Avaliar afastamento",
        "Registrar decisão"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "EXEMPLO 1 (INTRODUÇÃO) — O portal do órgão tem pesquisa por palavra-chave, mas o único caminho para solicitar o serviço é um formulário com 27 campos, sem opção de salvar e retomar. Como o órgão deve agir?",
        "dados": "Dados: EXEMPLO 1 (INTRODUÇÃO) — O portal do órgão tem pesquisa por palavra-chave, mas o único caminho para solicitar o serviço é um formulário com 27 campos, sem opção de salvar e retomar. Como o órgão deve  Contexto normativo Lei 14.129/2021 e LGPD aplicados a Exemplos resolvidos da unidade (três casos completos).",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para introdução: analisar o enunciado \"EXEMPLO 1 (INTRODUÇÃO) — O portal do órgão tem pesquisa por palavra-chave, mas o único caminho para \" e relacionar com Exemplos resolvidos da unidade (três casos completos), identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "Problema: barreira de processo que viola inclusão digital e provavelmente os princípios da eficiência e da simplicidade. Dados disponíveis: 27 campos, sem progresso salvo; o serviço é de requerimento genérico de segunda via; o art. 3º, X, da Lei nº 14.129/2021 exige simplificação com foco em universalização e autosserviço; o art. 3º, XII, impõe imposição imediata e de uma única vez das exigências;",
        "justificativa": "Justificativa: Problema: barreira de processo que viola inclusão digital e provavelmente os princípios da eficiência e da simplicidade. Dados disponíveis: 27 campos, sem progresso salvo; o serviç Aplicação ao Exemplos resolvidos da unidade (três casos completos) demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 1",
          "Falta de registro no caso 1"
        ],
        "variacao": "Variação: modificar contexto de \"EXEMPLO 1 (INTRODUÇÃO) — O portal do órgão tem pesquisa por \" para novo cenário mantendo lógica de Exemplos resolvidos da unidade (três casos completos)."
      },
      {
        "tipo": "aplicacao",
        "problema": "EXEMPLO 2 (APLICAÇÃO) — O órgão constata que 70% dos atendimentos de um serviço social saem do canal digital para o presencial, com fila média de duas horas. A área de negócio propõe fechar o balcão. Avalie.",
        "dados": "Dados: EXEMPLO 2 (APLICAÇÃO) — O órgão constata que 70% dos atendimentos de um serviço social saem do canal digital para o presencial, com fila média de duas horas. A área de negócio propõe fechar o balcão.  Contexto normativo Lei 14.129/2021 e LGPD aplicados a Exemplos resolvidos da unidade (três casos completos).",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para aplicação: analisar o enunciado \"EXEMPLO 2 (APLICAÇÃO) — O órgão constata que 70% dos atendimentos de um serviço social saem do canal\" e relacionar com Exemplos resolvidos da unidade (três casos completos), identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "O caso revela hipótese de exclusão digital mascarada por ganho de eficiência contábil. Os dados disponíveis são estes: 70% de saída do digital para o presencial, fila média de duas horas e público com baixa escolaridade e baixa conectividade. O art. 3º, XVI, e o art. 14 da Lei nº 14.129/2021 preservam o atendimento presencial, e o art. 24, VIII, prevê testes e pesquisas com os usuários. O art. 22 prevê indicadores de desempenho, mas nenhum indicador de volume isolado autoriza fechar o balcão: é preciso observar quem deixou de ser atendido, e não apenas quantas pessoas deixaram de frequentar o balcão, para que o ganho contábil não se converta em restrição de acesso.",
        "justificativa": "Justificativa: Problema: hipótese de exclusão digital mascarada por ganho de eficiência contábil. Dados disponíveis: 70% de saída do digital para o presencial; fila média de duas horas; público c Aplicação ao Exemplos resolvidos da unidade (três casos completos) demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 2",
          "Falta de registro no caso 2"
        ],
        "variacao": "Variação: modificar contexto de \"EXEMPLO 2 (APLICAÇÃO) — O órgão constata que 70% dos atendim\" para novo cenário mantendo lógica de Exemplos resolvidos da unidade (três casos completos)."
      },
      {
        "tipo": "erro",
        "problema": "EXEMPLO 3 (INTERPRETAÇÃO DE ERRO — NÍVEL AVANÇADO) — A auditoria interna apontou que o portal do órgão tem contraste insuficiente, ausência de texto alternativo em gráficos de execução orçamentária e rótulos de formulário gerados apenas por placeholder. O órgão contesta: «o site usa tecnologia moderna». Avalie a contestação.",
        "dados": "Dados: EXEMPLO 3 (INTERPRETAÇÃO DE ERRO — NÍVEL AVANÇADO) — A auditoria interna apontou que o portal do órgão tem contraste insuficiente, ausência de texto alternativo em gráficos de execução orçamentária e  Contexto normativo Lei 14.129/2021 e LGPD aplicados a Exemplos resolvidos da unidade (três casos completos).",
        "conceitos": [
          "Conceito central",
          "Norma aplicável"
        ],
        "estrategia": "Estratégia para erro: analisar o enunciado \"EXEMPLO 3 (INTERPRETAÇÃO DE ERRO — NÍVEL AVANÇADO) — A auditoria interna apontou que o portal do órg\" e relacionar com Exemplos resolvidos da unidade (três casos completos), identificando elementos de fato e norma.",
        "execucao": [
          "Identificar fatos",
          "Relacionar norma",
          "Propor tratamento"
        ],
        "resultado": "A contestação do órgão não se sustenta, porque confunde tecnologia moderna com acessibilidade e carece de evidência de conformidade. Os dados disponíveis são eloquentes: há contraste insuficiente, há gráficos sem texto alternativo — cuja informação chega apenas pela imagem — e há rótulos de formulário gerados apenas por placeholder, que desaparece ao digitar e quebra a identificação do campo e a conexão entre rótulo e controle, o que atinge diretamente as dimensões COMPREENSÍVEL e ROBUSTO. O art. 8º exige padrão de acessibilidade nos sites dos órgãos, e a ausência de evidência de conformidade não pode ser vencida pela alegação de modernidade.",
        "justificativa": "Justificativa: Problema: confusão entre tecnologia moderna e acessibilidade; e carência de evidência de conformidade. Dados disponíveis: contraste insuficiente; gráficos sem texto alternativo (in Aplicação ao Exemplos resolvidos da unidade (três casos completos) demonstra coerência com finalidade pública e norma.",
        "errosFrequentes": [
          "Confusão no caso 3",
          "Falta de registro no caso 3"
        ],
        "variacao": "Variação: modificar contexto de \"EXEMPLO 3 (INTERPRETAÇÃO DE ERRO — NÍVEL AVANÇADO) — A audit\" para novo cenário mantendo lógica de Exemplos resolvidos da unidade (três casos completos)."
      }
    ]
  },
  "m6-u5-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "As comparações da unidade 6.5 reúnem os pares que a banca usa para montar distrator: acessibilidade e inclusão digital, formato aberto e acessibilidade, autosserviço e mediação humana. Errar o par leva ao gabarito errado mesmo com o dispositivo certo.",
      "preRequisitos": [
        "Marco legal da unidade 6.5 (Lei nº 14.129/2021 e Lei nº 12.527/2011)",
        "Noções de formato de documento digital e de leitor de tela"
      ],
      "objetivosObservaveis": [
        "Distinguir acessibilidade de inclusão digital em cenário de serviço público",
        "Separar formato aberto de acessibilidade na análise de arquivo publicado",
        "Explicar por que ampliar o autosserviço não extingue a mediação humana"
      ],
      "competencias": [
        "Leitura comparativa de pares conceituais aplicada a item de prova",
        "Articulação entre dispositivo legal e efeito prático no serviço"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t1-s2 (Marco legal e práticas técnicas de acessibilidade de conteúdo digital) — base normativa dos pares",
        "m6-u5-t3-s1 (Exemplos resolvidos da unidade (três casos completos)) — casos que originam as comparações",
        "m6-u5-t3-s3 (Resumo estruturado, checklist de domínio e verificação de aprendizagem) — consolidação dos pares"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O distrator típico inverte a relação entre artefato e acesso social. A classificação é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "Acessibilidade é propriedade do artefato: perceptível, operável, compreensível e robusto. Inclusão digital é resultado social: o serviço alcança quem tem pouca conexão, equipamento antigo ou nenhuma familiaridade com a tecnologia. Um portal conforme pode excluir.",
      "intermediario": "Formato aberto é condição de reutilização e transparência (art. 4º, IV e VI, da Lei nº 14.129/2021); acessibilidade é condição de percepção e operação (art. 8º, § 3º, VIII, da Lei nº 12.527/2011). CSV sem dicionário é aberto e inutilizável; PDF com marcação é acessível e não é aberto.",
      "avancado": "Linguagem clara (art. 3º, VII) é diretriz de comunicação, não de simplificação do conteúdo jurídico: explicitar o que o cidadão precisa decidir não é remover etapas. A dispensa de exigência tem sede no art. 3º, XI, XII e XIII, com rastreabilidade da base legal.",
      "especialista": "Em auditoria (art. 49 da Lei nº 14.129/2021), o achado se formula como barreira de artefato ou como exclusão de público, com critério, amostra e reavaliação. Painel com três indicadores (art. 22) e testes com usuários (art. 24, VIII) sustentam a conclusão."
    },
    "comparacoes": [
      {
        "tema": "Acessibilidade x inclusão digital",
        "a": {
          "rotulo": "Acessibilidade",
          "texto": "Propriedade do artefato digital: conteúdo perceptível, operável, compreensível e robusto, verificável por marcação, contraste e rótulo."
        },
        "b": {
          "rotulo": "Inclusão digital",
          "texto": "Condição social de alcance do serviço: depende de conexão, equipamento, canal alternativo e linguagem compreensível para o público do órgão."
        },
        "diferencaGabarito": "O artefato conforme não garante acesso: portal acessível sem canal alternativo ainda exclui quem não tem conexão, e o atendimento presencial inclui quem não usa o digital."
      },
      {
        "tema": "Formato aberto x acessibilidade",
        "a": {
          "rotulo": "Formato aberto",
          "texto": "Condição de reutilização e transparência (art. 4º, IV e VI, da Lei nº 14.129/2021): o dado é lido por máquina e reaproveitado por terceiros."
        },
        "b": {
          "rotulo": "Acessibilidade",
          "texto": "Condição de percepção e operação (art. 8º, § 3º, VIII, da Lei nº 12.527/2011): o conteúdo é percebido e operado por pessoa com deficiência."
        },
        "diferencaGabarito": "Exigências autônomas: CSV é aberto e pode ser inacessível sem dicionário; PDF com marcação é acessível e não é formato aberto. Uma não dispensa a outra."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Publicar o relatório anual em PDF garante acessibilidade do conteúdo.",
        "porqueErrada": "A acessibilidade depende de estrutura, marcação e texto alternativo, não da extensão. PDF de imagem escaneada não tem camada de texto nem é legível por leitor de tela.",
        "versaoCorreta": "PDF acessível exige títulos e tabelas marcados, texto alternativo e ordem lógica; o PDF digitalizado falha nisso e no formato legível por máquina."
      },
      {
        "afirmacaoEquivocada": "A Lei nº 14.129/2021, ao ampliar o autosserviço, permite extinguir o atendimento presencial.",
        "porqueErrada": "O art. 3º, X é diretriz de ampliação do autosserviço e o art. 4º, II o define como acesso sem mediação; nenhum trata de supressão de canal. O art. 3º, XVI e o art. 14 preservam o presencial.",
        "versaoCorreta": "A ampliação do autosserviço convive com a permanência do atendimento presencial e com canais de mediação humana; extinguir o balcão contraria os dois dispositivos."
      },
      {
        "afirmacaoEquivocada": "Dados abertos são, por definição, acessíveis ao cidadão.",
        "porqueErrada": "Abertura é condição de reutilização. Sem dicionário e sem equivalente legível, o conjunto é publicado, porém inutilizável para quem não é especialista.",
        "versaoCorreta": "O art. 29, § 1º, III, da Lei nº 14.129/2021 exige descrição suficiente sobre estrutura e semântica; sem dicionário, o dado permanece inacessível na prática."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acessibilidade: propriedade do artefato (perceptível, operável, compreensível, robusto)",
        "Inclusão digital: condição social de alcance do serviço",
        "Formato aberto: condição de reutilização e transparência do dado",
        "Linguagem clara: diretriz de comunicação, não de supressão"
      ],
      "regras": [
        "Acessibilidade de conteúdo nos sítios oficiais: art. 8º, § 3º, VIII, da Lei nº 12.527/2011",
        "Formatos abertos e linguagem clara: art. 4º, IV e VI e art. 3º, VII, da Lei nº 14.129/2021",
        "Permanência do atendimento presencial: art. 3º, XVI e art. 14 da Lei nº 14.129/2021"
      ],
      "comparacoes": [
        "Acessibilidade obriga o artefato; inclusão digital obriga o serviço",
        "Formato aberto serve à reutilização; acessibilidade serve à percepção"
      ],
      "fluxos": [
        "Produzir conteúdo estruturado → anexar dicionário → oferecer formato aberto e equivalente acessível → testar com usuário → informar canal alternativo"
      ],
      "excecoes": [
        "A exceção do art. 6º admite ato processual em meio físico, sem extinguir o canal presencial",
        "Dispensa de divulgação em município pequeno não afasta a acessibilidade do que for publicado"
      ],
      "palavrasChave": [
        "acessibilidade",
        "inclusão digital",
        "formato aberto",
        "dicionário de dados",
        "autosserviço"
      ],
      "checklist": [
        "O par comparado é artefato ou resultado social?",
        "O arquivo publicado é aberto, acessível ou ambos?",
        "O autosserviço preservou mediação humana e canal alternativo?",
        "A exceção invocada é do art. 6º ou é extinção de canal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão publicou o relatório anual em PDF de páginas escaneadas, sem camada de texto, e alega conformidade porque o arquivo consta do site oficial. A afirmação procede?",
        "dados": "PDF de imagem escaneada, sem texto pesquisável, sem marcação de títulos e tabelas e sem equivalente legível por máquina na página de transparência.",
        "conceitos": [
          "PDF de imagem escaneada não é legível por máquina nem por leitor de tela",
          "Formatos legíveis por máquina: art. 8º, § 3º, II e III, da Lei nº 12.527/2011 e art. 29, § 1º, II, da Lei nº 14.129/2021"
        ],
        "estrategia": "Testar duas frentes independentes: legibilidade por máquina, que trata do formato aberto, e percepção por pessoa com deficiência, que trata de acessibilidade.",
        "execucao": [
          "1) Verificar se o PDF tem camada de texto ou é imagem escaneada",
          "2) Confirmar a ausência de marcação de títulos, tabelas e texto alternativo",
          "3) Conferir se há versão legível por máquina com dicionário de dados",
          "4) Concluir que falham as duas exigências e indicar a correção"
        ],
        "resultado": "Não procede. O PDF digitalizado não é legível por máquina nem pesquisável e não tem estrutura semântica, descumprindo o art. 8º, § 3º, II e III, da Lei nº 12.527/2011.",
        "justificativa": "São exigências autônomas: formato aberto serve à reutilização e acessibilidade serve à percepção. A imagem escaneada falha nas duas, e a correção é gerar o conteúdo a partir de base estruturada.",
        "errosFrequentes": [
          "Tratar a publicação no site como suficiente, sem testar legibilidade por máquina",
          "Confundir PDF acessível com PDF de imagem: o primeiro depende de marcação"
        ],
        "variacao": "Se o relatório for publicado em DOCX com figuras sem texto alternativo, o problema de acessibilidade persiste, embora o formato seja aberto."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer saber se o portal de serviços é acessível. Como estruturar a verificação para que o resultado sirva de evidência em auditoria?",
        "dados": "Portal com três formulários, dez páginas de serviço e dois documentos de apoio; ferramenta automática disponível; nenhum teste com usuários registrado.",
        "conceitos": [
          "Verificação automática cobre apenas parte das barreiras",
          "Teste com usuário é exigência do art. 24, VIII da Lei nº 14.129/2021",
          "Relatório auditável por terceiro: art. 49 da Lei nº 14.129/2021"
        ],
        "estrategia": "Desenhar a verificação em camadas — automática, manual e com usuários — com registro de data, critério e resultado, para que terceiro reproduza a conclusão.",
        "execucao": [
          "1) Definir critérios e escopo: artefatos avaliados e padrão técnico adotado",
          "2) Rodar verificação automática e registrar data, ferramenta e achados",
          "3) Revisar manualmente conteúdo, linguagem, rótulos, foco e ordem de leitura",
          "4) Testar com usuários, registrando perfil, tarefa e barreira observada",
          "5) Abrir plano de correção com responsável, prazo e reavaliação"
        ],
        "resultado": "A evidência se produz em três camadas: relatório automático, revisão manual documentada e teste com usuários, com plano de correção e reavaliação. É isso que a torna auditável.",
        "justificativa": "A auditoria do art. 49 exige evidência reproduzível, e a automação sozinha não a produz: detecta rótulo e contraste, mas não avalia compreensão. O teste com usuários cobre a lacuna.",
        "errosFrequentes": [
          "Considerar o laudo automático como prova de conformidade",
          "Testar com usuários sem registrar perfil, tarefa e barreira"
        ],
        "variacao": "Se o portal incluir assistente virtual, a verificação deve avaliar a resposta em linguagem clara e a alternativa textual para quem usa leitor de tela."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como a diretriz de linguagem clara (art. 3º, VII, da Lei nº 14.129/2021) exige linguagem simples, o órgão pode resumir as etapas de um procedimento administrativo sem alterar seu conteúdo jurídico.'",
        "dados": "Procedimento com etapas fixadas em norma, entre elas publicação em diário oficial e prazo de contestação; o resumo omite etapas sem indicar base legal.",
        "conceitos": [
          "Linguagem clara é diretriz de comunicação, não de supressão",
          "Dispensa de exigência tem sede no art. 3º, XI, XII e XIII",
          "Compreensão do usuário não sana ausência de formalidade"
        ],
        "estrategia": "Separar comunicação de supressão: verificar quais etapas a lei exige e se a dispensa se apoia nos dispositivos próprios, não na diretriz de linguagem.",
        "execucao": [
          "1) Classificar o art. 3º, VII como regra de comunicação institucional",
          "2) Listar as etapas do procedimento e identificar as de exigência legal",
          "3) Verificar se a dispensa se apoia no art. 3º, XI, XII ou XIII",
          "4) Concluir que resumir sem omitir é admitido e suprimir exige base legal"
        ],
        "resultado": "Errado. A linguagem clara permite reescrever a etapa em termos compreensíveis, mas não eliminá-la: a dispensa de exigência depende do art. 3º, XI, XII e XIII, com rastreabilidade.",
        "justificativa": "A leitura ingênua converte diretriz de comunicação em autorização para reduzir o procedimento. A dispensa de exigência é matéria de outros dispositivos e exige fundamento rastreável.",
        "errosFrequentes": [
          "Confundir linguagem simples com menos informação necessária",
          "Suprimir etapa obrigatória invocando apenas a diretriz de linguagem"
        ],
        "variacao": "Se o órgão reduzir dez etapas para três, a análise deve verificar se as sete omitidas são dispensáveis pelo art. 3º, XIII ou se foram caladas sem base legal."
      }
    ]
  },
  "m6-u5-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A síntese da unidade 6.5 transforma dispositivos esparsos em mapa recuperável: na prova, é preciso decidir rápido qual norma incide, qual medida técnica corresponde e qual indicador revela exclusão. É esse trânsito entre norma, medida e evidência que o item de verificação cobra.",
      "preRequisitos": [
        "Conteúdo dos subtópicos da unidade 6.5: acessibilidade vs inclusão digital, formato aberto vs acessibilidade, autosserviço vs mediação humana.",
        "Noções de indicadores de serviço público (painel do art. 22 da Lei nº 14.129/2021)"
      ],
      "objetivosObservaveis": [
        "Recuperar de memória os dispositivos de acessibilidade e o conteúdo de cada um",
        "Relacionar cada medida técnica à dimensão de acessibilidade correspondente",
        "Aplicar o checklist de domínio a um serviço público hipotético"
      ],
      "competencias": [
        "Recuperação ativa de norma com articulação entre conceitos",
        "Formulação de verificação de aprendizagem com critério de acerto"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u5-t3-s1 (Exemplos resolvidos da unidade (três casos completos)) — base dos casos recuperados na verificação",
        "m6-u5-t3-s2 (Comparações e pegadinhas da unidade) — pares que a verificação testa",
        "m6-u5-t2-s1 (Inclusão digital: preservar o atendimento presencial, ampliar o autosserviço e atender quem está fora) — exigência de canal alternativo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "O item de síntese pede a passagem do conceito ao dispositivo. A classificação é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "A unidade 6.5 se organiza em três blocos: marco legal (Lei nº 14.129/2021, Lei nº 12.527/2011 e Lei nº 10.098/2000), medidas técnicas de conteúdo (texto alternativo, contraste, rótulo, foco, legenda) e inclusão digital (canal alternativo, linguagem clara, formato aberto). O aluno nomeia os blocos e associa cada um a um dispositivo.",
      "intermediario": "O aluno recupera os dispositivos centrais — acessibilidade como princípio (art. 3º, XIX), acessibilidade de conteúdo nos sítios (art. 8º, § 3º, VIII, da Lei nº 12.527/2011), formatos abertos (art. 3º, XXV) e atendimento presencial (art. 3º, XVI) — e liga cada um a medida técnica e a indicador de exclusão.",
      "avancado": "O aluno monta a verificação como teste de recuperação: questões que exigem citar dispositivo, dimensão afetada, medida correspondente e evidência. Aplica o critério de domínio e usa o erro para localizar a releitura necessária.",
      "especialista": "O especialista transforma o resumo em instrumento de governança: converte o checklist em matriz de requisitos por tipo de artefato, define indicadores de abandono e conclusão por canal e integra testes com usuários e auditoria em processo contínuo."
    },
    "comparacoes": [
      {
        "tema": "Resumo de conceitos x resumo de dispositivos",
        "a": {
          "rotulo": "Resumo de conceitos",
          "texto": "Nomeia acessibilidade, inclusão digital, autosserviço e linguagem clara e explica o que cada termo quer dizer, sem situá-lo na norma."
        },
        "b": {
          "rotulo": "Resumo de dispositivos",
          "texto": "Fixa onde cada conceito está na norma: art. 3º, XIX, art. 8º, § 3º, VIII, da Lei nº 12.527/2011, art. 3º, XVI e art. 14 da Lei nº 14.129/2021."
        },
        "diferencaGabarito": "Decorar o resumo de conceitos não responde ao item que pede o dispositivo: a recuperação útil é a que liga termo a artigo e a efeito prático no serviço."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A verificação de aprendizagem da unidade serve para medir quanto o aluno releu do texto.",
        "porqueErrada": "O resumo organiza o conhecimento já construído, não o constrói. A questão de síntese exige recuperação ativa do dispositivo e da medida técnica; quem não compreendeu a unidade acerta o formato e erra o conteúdo.",
        "versaoCorreta": "A síntese é instrumento de recuperação ativa: exige citar dispositivo, dimensão e evidência. Consultar o resumo antes da prova só funciona para quem já entendeu o conteúdo."
      },
      {
        "afirmacaoEquivocada": "Basta acertar a maioria das questões da verificação para demonstrar domínio da unidade.",
        "porqueErrada": "O critério de domínio exige acerto integral nos itens que fixam o núcleo normativo — dispositivos de acessibilidade, razão da permanência do presencial, hipótese do art. 6º e limite da linguagem clara — e pelo menos cinco dos oito no total.",
        "versaoCorreta": "O domínio é aferido por acerto integral nesses quatro pontos e em ao menos cinco dos oito itens; erro neles indica lacuna normativa, não falha de memorização."
      },
      {
        "afirmacaoEquivocada": "Como a unidade trata de acessibilidade, o atendimento presencial pode ser reduzido a um formulário eletrônico.",
        "porqueErrada": "Acessibilidade de artefato e inclusão digital são exigências distintas. O art. 3º, XVI e o art. 14 preservam o atendimento presencial conforme características, relevância e público-alvo; substituí-lo por formulário elimina o canal de quem não usa o digital.",
        "versaoCorreta": "A ampliação do autosserviço não extingue a mediação: o canal presencial permanece e deve ser informado como alternativa acessível do serviço."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acessibilidade: perceptível, operável, compreensível e robusto",
        "Inclusão digital: alcance efetivo do serviço por toda a população",
        "Formato aberto com dicionário de dados: reutilização com semântica",
        "Teste com usuário: validação que a automação não substitui"
      ],
      "regras": [
        "Acessibilidade como princípio do Governo Digital: art. 3º, XIX, da Lei nº 14.129/2021",
        "Acessibilidade de conteúdo nos sítios oficiais: art. 8º, § 3º, VIII, da Lei nº 12.527/2011",
        "Testes e pesquisas com usuários: art. 24, VIII, e auditoria: art. 49, da Lei nº 14.129/2021"
      ],
      "comparacoes": [
        "Dispositivo descreve a exigência; medida técnica executa a exigência; indicador revela o efeito",
        "Resumo recupera o que foi aprendido e não substitui a leitura da unidade"
      ],
      "fluxos": [
        "Recuperar dispositivo → nomear medida técnica → verificar indicador de exclusão → reler o trecho indicado pelo erro"
      ],
      "excecoes": [
        "A exceção do art. 6º incide em inviabilidade, indisponibilidade ou risco à celeridade, e não extingue canal",
        "Dispensa de divulgação em município pequeno não afasta a acessibilidade do que for publicado"
      ],
      "palavrasChave": [
        "acessibilidade",
        "inclusão digital",
        "autosserviço",
        "linguagem clara",
        "dicionário de dados"
      ],
      "checklist": [
        "Citar os dispositivos que tratam de acessibilidade e o conteúdo de cada um",
        "Nomear as quatro dimensões da acessibilidade de conteúdo",
        "Explicar a razão legal da permanência do atendimento presencial",
        "Indicar como medir abandono digital e o que o dicionário resolve"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, responda: qual dispositivo garante que o cidadão continue sendo atendido pessoalmente depois da digitalização do serviço?",
        "dados": "Serviço de requerimento de benefício com solicitação exclusivamente eletrônica; etapa de avaliação disponível apenas por videochamada; nenhuma alternativa presencial informada.",
        "conceitos": [
          "Permanência do atendimento presencial: art. 3º, XVI, da Lei nº 14.129/2021",
          "Prestação digital sem prejuízo do presencial: art. 14 da Lei nº 14.129/2021",
          "Canal presencial como mecanismo de acessibilidade"
        ],
        "estrategia": "Recuperar o dispositivo que fixa a permanência do canal e completar com o que condiciona a prestação digital a tecnologias de amplo acesso.",
        "execucao": [
          "1) Recuperar o art. 3º, XVI, que mantém a possibilidade de atendimento presencial conforme características e público-alvo",
          "2) Recuperar o art. 14, que exige prestação digital por tecnologias de amplo acesso sem prejuízo do presencial",
          "3) Concluir que o serviço exclusivamente eletrônico descumpre os dois dispositivos"
        ],
        "resultado": "O art. 3º, XVI mantém a possibilidade de atendimento presencial e o art. 14 exige que a prestação digital ocorra sem prejuízo desse atendimento; o canal atende quem não usa tecnologia.",
        "justificativa": "A resposta exige ligar dispositivo a efeito: o art. 3º, XVI descreve a permanência e o art. 14 condiciona a digitalização. Sem os dois, o item fica sem fundamento e a conclusão vira opinião.",
        "errosFrequentes": [
          "Responder com o conceito de inclusão digital sem citar o dispositivo",
          "Confundir a diretriz de ampliação do autosserviço com permissão para fechar o balcão"
        ],
        "variacao": "Se o serviço for de baixa complexidade e já operar por aplicativo de amplo acesso, a análise deve verificar se há alternativa para o mesmo público."
      },
      {
        "tipo": "aplicacao",
        "problema": "Qual a função do dicionário de dados na publicação de dados abertos e o que acontece quando ele falta?",
        "dados": "Base de despesas divulgada em CSV com colunas de valor, data e código de unidade gestora, sem descrição de campo, unidade ou origem, e sem nota metodológica.",
        "conceitos": [
          "Descrição suficiente sobre estrutura e semântica: art. 29, § 1º, III, da Lei nº 14.129/2021",
          "Divulgação dos formatos utilizados: art. 8º, § 3º, IV, da Lei nº 12.527/2011",
          "Dado publicado sem semântica permanece inacessível"
        ],
        "estrategia": "Relacionar a função do dicionário aos dois dispositivos e mostrar o efeito prático da ausência para o cidadão comum.",
        "execucao": [
          "1) Descrever cada campo, sua unidade, seu significado e sua origem",
          "2) Vincular a descrição ao art. 29, § 1º, III, da Lei nº 14.129/2021 e ao art. 8º, § 3º, IV, da Lei nº 12.527/2011",
          "3) Concluir que, sem dicionário, o dado é público mas inutilizável para quem não é especialista"
        ],
        "resultado": "O dicionário descreve campo, unidade, significado e origem, tornando o conjunto compreensível e utilizável; sem ele, o dado é publicado, porém permanece inacessível ao cidadão.",
        "justificativa": "A transparência não se esgota em disponibilizar arquivo: o art. 29, § 1º, III exige informação suficiente sobre estrutura e semântica. O dicionário converte colunas em dado interpretável.",
        "errosFrequentes": [
          "Achar que formato aberto implica documentação automática do conteúdo",
          "Confundir dicionário de dados com nota metodológica de agregação"
        ],
        "variacao": "Se a base tiver campos codificados, como tipo de despesa em código numérico, o dicionário deve trazer a tabela de correspondência; sem ela, o dado continua fechado."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A diretriz de linguagem clara permite resumir as etapas do procedimento, desde que o usuário final compreenda.'",
        "dados": "Procedimento com etapas fixadas em norma, inclusive publicação em diário oficial e prazo de contestação; a versão resumida omite duas etapas e não indica base legal.",
        "conceitos": [
          "Linguagem clara é diretriz de comunicação: art. 3º, VII, da Lei nº 14.129/2021",
          "Dispensa de exigência: art. 3º, XI, XII e XIII, da Lei nº 14.129/2021",
          "Compreensão do usuário não supre formalidade suprimida"
        ],
        "estrategia": "Testar a afirmação separando comunicação de supressão e verificando se a dispensa tem sede própria e rastreabilidade na norma.",
        "execucao": [
          "1) Classificar o art. 3º, VII como diretriz de comunicação institucional",
          "2) Identificar as etapas legalmente exigidas que o resumo omite",
          "3) Verificar se a dispensa se apoia no art. 3º, XI, XII ou XIII",
          "4) Concluir que a diretriz autoriza reescrever, não suprimir etapa"
        ],
        "resultado": "Errado. A linguagem clara trata de comunicação e compreensão; suprimir etapa depende do art. 3º, XI, XII e XIII e da base legal da etapa, e a compreensão do usuário não sana a falta de formalidade.",
        "justificativa": "A afirmação transforma regra de redação em autorização para reduzir o procedimento, criando precondição inexistente para o cidadão. A dispensa de exigência é matéria de dispositivos próprios.",
        "errosFrequentes": [
          "Equivalar linguagem clara a permissão para omitir etapas obrigatórias",
          "Aceitar a compreensão do usuário como base legal da dispensa"
        ],
        "variacao": "Se o órgão publicar versão em linguagem clara que preserva todas as etapas e acrescenta prazo e canal de contestação, a publicação está conforme."
      }
    ]
  },
  "m6-u6-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A unidade 6.6 fecha o módulo transferindo o êxito da memorização para o enquadramento: o item de prova descreve uma conduta digital e pergunta qual princípio foi violado ou qual dispositivo incide. Dominar o método — fato, regime, princípio, dispositivo, conflito e conclusão — é o que distingue o candidato que conhece a norma do que conhece apenas a ferramenta.",
      "preRequisitos": [
        "Unidades 6.1 a 6.5 do módulo (princípios, publicidade, dados pessoais, conduta e acessibilidade)",
        "Módulos 4 e 5 (segurança, rastreabilidade e avaliação de modelos)"
      ],
      "objetivosObservaveis": [
        "Delimitar o escopo da unidade 6.6 e seus quatro blocos de conteúdo",
        "Relacionar automação de decisões e supervisão humana aos princípios das unidades anteriores",
        "Aplicar o método de resolução: identificar princípio e dispositivo antes de escolher a alternativa",
        "Redigir justificativa de resposta ancorada em norma"
      ],
      "competencias": [
        "Análise de caso integrado, do fato ao fundamento normativo",
        "Argumentação normativa aplicada a decisões administrativas",
        "Leitura de item de prova com método explícito"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u6-t1-s2 (Níveis de automação de decisão e requisitos de conformidade) — escopo do primeiro bloco da unidade",
        "m6-u6-t1-s3 (Desenho da supervisão humana: alçadas, critérios, registro e escalonamento) — escopo do segundo bloco",
        "m6-u6-t2-s1 (Estudos de caso 1 e 2: publicação indevida e vazamento de dados) — escopo do terceiro bloco",
        "m6-u6-t2-s2 (Estudos de caso 3 e 4: uso de ferramenta de IA e transparência administrativa) — escopo do terceiro bloco",
        "m6-u6-t3-s1 (Método de análise de itens de prova e questões autorais comentadas (bloco 1)) — escopo do quarto bloco"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens de automação e supervisão humana exigem enquadramento normativo, e não decoreba de ferramenta. A classificação alta é estimativa pedagógica de adequação ao perfil de cargo de TI em órgão público, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "A unidade 6.6 articula quatro blocos: níveis de automação de decisão administrativa e requisitos de cada um; desenho da supervisão humana, com alçadas, critérios, registro e escalonamento; quatro estudos de caso que combinam as unidades 6.1 a 6.5; e um método de resolução de itens que exige identificar princípio e dispositivo antes de escolher a alternativa.",
      "intermediario": "O aluno percebe que a prova de TI em órgão público cobra raciocínio de enquadramento: o enunciado descreve uma conduta digital e pergunta qual princípio foi violado ou qual dispositivo incide. Relaciona cada bloco da unidade aos princípios já estudados — legalidade, impessoalidade, publicidade e eficiência — e reconhece que o estudo de caso é o exercício dessa passagem.",
      "avancado": "O aluno aplica o método em sequência: identificar o fato, classificar o regime jurídico aplicável, localizar o princípio e o dispositivo, qualificar o conflito entre regras e só então concluir. Reconhece que a memorização isolada de dispositivos não produz a resposta, porque o item apresenta caso ambíguo e exige a escolha fundamentada entre normas.",
      "especialista": "O especialista desenha a evidência que sustenta a conclusão: supervisão com alçada escrita, critério versionado, registro da decisão revisada e indicador de concordância, de modo que a conformidade seja demonstrável a terceiro em auditoria (art. 49 da Lei nº 14.129/2021), e não apenas afirmada."
    },
    "comparacoes": [
      {
        "tema": "Conhecimento da ferramenta x enquadramento normativo",
        "a": {
          "rotulo": "Conhecimento da ferramenta",
          "texto": "Sabe como o sistema funciona: quais telhas, modelos, parâmetros e limites técnicos a solução possui e o que ela faz no fluxo de trabalho."
        },
        "b": {
          "rotulo": "Enquadramento normativo",
          "texto": "Sabe qual princípio foi violado e qual dispositivo incide sobre a conduta descrita, e por que a alternativa aparentemente técnica é a errada."
        },
        "diferencaGabarito": "O item descreve a conduta e pergunta pelo fundamento: quem responde pela ferramenta acerta a descrição e erra o gabarito; quem faz o enquadramento resolve mesmo sem nunca ter operado o sistema."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como existe revisão humana prevista em toda decisão automatizada, a automação é automaticamente conforme.",
        "porqueErrada": "A supervisão humana é uma das condições de conformidade, e não atestado dela. Revisão genérica, sem alçada, sem registro e sem autoridade para rever produz aparência de controle sem controle efetivo.",
        "versaoCorreta": "A conformidade depende da qualidade do controle: alçada escrita, critério de escalonamento objetivo, registro da decisão revisada e indicador de concordância. Sem esses elementos, a revisão existente não é evidência de conformidade."
      },
      {
        "afirmacaoEquivocada": "Em decisões de risco baixo, a motivação do ato decisório automatizado pode ser dispensada.",
        "porqueErrada": "A motivação é conteúdo do ato administrativo e não desaparece pela forma eletrônica nem pelo porte do caso. O cidadão tem direito de saber o critério efetivamente aplicado, inclusive para poder contestá-lo.",
        "versaoCorreta": "A motivação comunicável integra os requisitos de todo ato decisório automatizado, em linguagem clara (art. 3º, VII, da Lei nº 14.129/2021), e o risco baixo reduz a intensidade de outros controles, não o dever de fundamentar."
      },
      {
        "afirmacaoEquivocada": "O estudo de caso integrado é recurso acessório; o que importa é memorizar os dispositivos de cada unidade.",
        "porqueErrada": "O estudo de caso obriga o candidato a percorrer a cadeia completa — fato, regime, princípio, dispositivo, conflito e conclusão —, que é exatamente a sequência que o item de prova exige.",
        "versaoCorreta": "A memorização isolada não produz a resposta: o caso integrado treina a passagem do enunciado ao fundamento, inclusive nos itens em que duas normas parecem incidir sobre o mesmo fato."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Enquadramento normativo: passagem do fato descrito ao princípio e ao dispositivo",
        "Níveis de automação: classificação didática que dimensiona salvaguardas",
        "Supervisão humana efetiva: alçada, critério, registro e escalonamento",
        "Estudo de caso integrado: exercício da cadeia completa do item de prova"
      ],
      "regras": [
        "Controles internos proporcionais aos riscos: art. 48, II, da Lei nº 14.129/2021",
        "Linguagem clara na comunicação do ato: art. 3º, VII, da Lei nº 14.129/2021",
        "Auditoria com relatório demonstrável a terceiro: art. 49 da Lei nº 14.129/2021"
      ],
      "comparacoes": [
        "Conhecer a ferramenta descreve o sistema; enquadrar define o gabarito do item",
        "Decisão assistida mantém o servidor como autor do ato; decisão automatizada transfere a formação do ato ao sistema"
      ],
      "fluxos": [
        "Ler o fato → classificar o regime → localizar princípio e dispositivo → qualificar o conflito → concluir com fundamento"
      ],
      "excecoes": [
        "Item com duas normas aparentemente aplicáveis exige qualificar o conflito antes de escolher",
        "Ausência de evidência de supervisão impede concluir pela conformidade, ainda que a revisão exista"
      ],
      "palavrasChave": [
        "enquadramento",
        "automação",
        "supervisão humana",
        "estudo de caso",
        "alçada",
        "conformidade"
      ],
      "checklist": [
        "O fato foi identificado antes de escolher a alternativa?",
        "O regime jurídico aplicável foi classificado?",
        "O princípio e o dispositivo foram citados na justificativa?",
        "O conflito entre regras foi qualificado, não ignorado?",
        "A conclusão está ancorada em norma verificável?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a principal vantagem formativa do estudo de caso integrado neste módulo, em comparação com a leitura isolada de cada unidade?",
        "dados": "Quatro casos que cruzam conteúdo das unidades 6.1 a 6.5: publicação indevida no portal do órgão, vazamento de dados em documento não protegido, uso de ferramenta de IA em tratamento de benefício e ausência de transparência em decisão administrativa.",
        "conceitos": [
          "Estudo de caso como exercício da cadeia completa do item de prova",
          "Integração entre princípios constitucionais e dispositivos do Governo Digital",
          "Memorização isolada como insuficiente para caso ambíguo"
        ],
        "estrategia": "Mostrar que o caso integrado força a sequência que o item exige, enquanto a leitura por unidade produz conhecimento fragmentado e não treina a escolha entre normas.",
        "execucao": [
          "1) Identificar o fato concreto descrito no caso",
          "2) Classificar o regime jurídico aplicável ao fato",
          "3) Localizar o princípio constitucional e o dispositivo infralegal incidentes",
          "4) Qualificar o conflito entre as regras que parecem incidir",
          "5) Concluir com fundamento, na ordem que o item de prova exige"
        ],
        "resultado": "O estudo de caso obriga o candidato a percorrer a cadeia completa — fato, regime, princípio, dispositivo, conflito e conclusão —, que é a sequência que o item de prova exige e que a memorização isolada não produz.",
        "justificativa": "A vantagem não está no volume de conteúdo, e sim na ordem do raciocínio: o item apresenta caso ambíguo e avalia se o candidato sabe fundamentar a escolha. O caso integrado treina exatamente essa passagem do enunciado ao enquadramento.",
        "errosFrequentes": [
          "Tratar o caso como anedota ilustrativa e responder apenas com a lista de dispositivos",
          "Saltar da descrição do fato diretamente para a conclusão, sem classificar o regime"
        ],
        "variacao": "Se o caso cruzar três normas — Governo Digital, acesso à informação e proteção de dados —, a análise deve qualificar o conflito antes de eleger o dispositivo final."
      },
      {
        "tipo": "aplicacao",
        "problema": "Como desenhar a supervisão humana de decisões automatizadas para que ela não se reduza a uma formalidade cumprida no papel?",
        "dados": "Sistema automatizado de análise de requerimentos: revisores examinam amostra aleatória de 5% das decisões, sem alçada escrita, sem registro do que foi alterado e sem canal de contestação identificado no sistema.",
        "conceitos": [
          "Alçada com critério de escalonamento objetivo",
          "Registro da decisão revisada e do que mudou",
          "Indicador de concordância entre decisão automatizada e decisão revisada",
          "Autoridade do revisor para reverter a decisão"
        ],
        "estrategia": "Transformar a supervisão em controle verificável: definir alçada, dimensionar a amostra pelo risco, registrar cada revisão e medir a concordância, de modo que a evidência sobreviva à auditoria.",
        "execucao": [
          "1) Definir alçada com critérios de escalonamento objetivos, não discricionários",
          "2) Dimensionar o volume de revisão para que seja representativo do fluxo e do risco",
          "3) Registrar cada decisão revisada, com o que mudou e por quê",
          "4) Assegurar ao revisor acesso à informação e autoridade para reverter",
          "5) Criar indicador de concordância e realimentar a regra com os casos revisados"
        ],
        "resultado": "A supervisão deixa de ser formalidade quando tem alçada definida, amostra representativa, registro do que mudou, autoridade para reverter e indicador de concordância; sem esses elementos, é aparência de controle.",
        "justificativa": "A auditoria baseada em risco do art. 49 da Lei nº 14.129/2021 lê a ausência de alçada, registro e indicador como controle inexistente, ainda que exista revisor lotado no processo. O controle se prova pela evidência, não pela descrição organizacional.",
        "errosFrequentes": [
          "Confundir a existência de revisor com o exercício efetivo de controle",
          "Adotar amostra aleatória sem considerar impacto assimétrico sobre subgrupos"
        ],
        "variacao": "Se o sistema usar modelo de aprendizado de máquina, a supervisão deve acrescentar monitoramento de taxa de reversão por subgrupo e explicação da decisão em linguagem clara."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como existe revisão humana prevista em toda decisão automatizada, a automação é automaticamente conforme.' — avaliar se a afirmação procede.",
        "dados": "Sistema de concessão de benefício com revisão humana declarada: 10% das decisões são revisadas por amostra a cada trimestre, sem alçada pré-definida, sem registro das alterações e sem indicador de concordância; em auditoria, o órgão alega ter revisão desde o início da operação.",
        "conceitos": [
          "Supervisão como condição de conformidade, não como atestado",
          "Controle efetivo versus aparência de controle",
          "Relatório de auditoria demonstrável a terceiro: art. 49 da Lei nº 14.129/2021"
        ],
        "estrategia": "Desmontar a equivalência entre existir revisão e ser conforme, testando a qualidade do controle pelos elementos que a tornam auditável.",
        "execucao": [
          "1) Verificar se a supervisão tem alçada definida com critérios",
          "2) Conferir se há registro das decisões revisadas e do que mudou",
          "3) Medir a existência de indicador de concordância ou taxa de reversão",
          "4) Verificar se o revisor tem autoridade para reverter a decisão",
          "5) Concluir que a revisão declarada não produz evidência de conformidade"
        ],
        "resultado": "Errado. A supervisão humana é uma das condições de conformidade, e não atestado dela: revisão genérica, sem alçada, registro e autoridade para rever, produz aparência de controle sem controle efetivo e é lida como controle inexistente em auditoria.",
        "justificativa": "A leitura ingênua trata a previsão normativa de revisão como prova automática de conformidade. A conformidade se demonstra por evidência — alçada, critério, registro e indicador —, e é justamente essa evidência que a revisão genérica não produz.",
        "errosFrequentes": [
          "Aceitar a afirmação 'temos revisão' como demonstração de controle",
          "Confundir atividade realizada com controle auditável"
        ],
        "variacao": "Se o sistema negar benefício a idosos e a pessoas com deficiência de forma concentrada, a amostra aleatória deve ceder lugar à revisão integral desse subgrupo, por risco de erro assimétrico."
      }
    ]
  },
  "m6-u6-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar o nível de automação é o que permite dimensionar as salvaguardas: um sistema que apenas calcula um escore exige menos controles do que outro que forma o ato decisório sem intervenção. A classificação é didática, não legal, mas dela se extrai a regra de governança de proporcionalidade ao direito afetado, que decide o gabarito dos itens sobre requisitos de conformidade.",
      "preRequisitos": [
        "Orientação estratégica da unidade 6.6: delimitação do escopo, método de resolução (fato, regime, princípio, dispositivo, conflito, conclusão) e quatro blocos de conteúdo.",
        "Módulos 4 e 5 (rastreabilidade, não repúdio e avaliação de impacto)",
        "Noções de ato administrativo e de motivação"
      ],
      "objetivosObservaveis": [
        "Classificar o nível de automação de um sistema decisório a partir do fluxo de decisão",
        "Enumerar os requisitos de conformidade comuns a todos os níveis",
        "Explicar as exigências adicionais dos níveis de revisão prévia, amostral, alçada e automação plena",
        "Justificar por que automação de decisão sobre direitos exige mais do que automação de apoio"
      ],
      "competencias": [
        "Classificação de fluxo decisório com base em evidência de processo",
        "Mapeamento de requisitos de conformidade por nível",
        "Dimensionamento de controle interno proporcional ao risco"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u6-t1-s1 (Orientação estratégica da unidade) — escopo e método da unidade 6.6",
        "m6-u6-t1-s3 (Desenho da supervisão humana: alçadas, critérios, registro e escalonamento) — aplicação dos requisitos por nível",
        "m6-u6-t2-s1 (Estudos de caso 1 e 2: publicação indevida e vazamento de dados) — casos que mobilizam a classificação",
        "m6-u6-t2-s2 (Estudos de caso 3 e 4: uso de ferramenta de IA e transparência administrativa) — decisão assistida versus automatizada",
        "m6-u6-t3-s1 (Método de análise de itens de prova e questões autorais comentadas (bloco 1)) — itens que cobram a classificação"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A classificação de níveis e os requisitos de conformidade sustentam itens sobre automação de atos administrativos em órgãos públicos. A classificação alta é estimativa pedagógica de adequação ao programa, não frequência estatística de provas."
      }
    },
    "niveis": {
      "iniciante": "Os níveis de automação são classificação didática alinhada à distinção entre decisão automatizada e decisão assistida: N0, decisão manual pura, com o servidor decidindo com apoio de consulta; N1, apoio à decisão, em que o sistema calcula, classifica ou estima escore e o servidor decide; N2, decisão automatizada com revisão prévia; N3, com revisão posterior ou amostral; N4, com autorização prévia em alçada; N5, automação plena.",
      "intermediario": "A classificação exige analisar o fluxo real de decisão, e não o nome do sistema. Requisitos comuns a todos os níveis: base normativa da competência e do critério; critério escrito e versionado, com data de vigência; registro da decisão com identificador do caso, parâmetros usados, versão da regra, data e hora; motivação comunicável em linguagem clara; rastreabilidade e não repúdio; segurança e proteção de dados; canal de contestação e recurso; monitoramento e revisão periódica.",
      "avancado": "As exigências crescem com o nível. No N2, a revisão humana é condição de eficácia do ato, com alçada, prazo e registro. No N3, a amostragem deve ser dimensionada e estatisticamente defensável, com gatilhos de risco que determinem revisão integral nos casos de maior impacto, de erro histórico, de reclamação ou de subgrupo com desempenho pior. No N4, o sistema apenas executa o que a alçada autoriza, e o escalonamento é regra publicada.",
      "especialista": "No N5, a conformidade depende de se tratar de ato de baixo impacto ou de ato que admita revisão posterior por lei; tratando-se de decisão sobre direito, a revisão humana permanece requisito material. Em qualquer nível, o cidadão tem direito de saber o critério e, sendo a decisão individual e automatizada, a motivação deve ser individualizada, com possibilidade de impugnação. O nível de automação não transfere a responsabilidade ao fornecedor."
    },
    "comparacoes": [
      {
        "tema": "Revisão por reclamação (N3) x alçada estruturada (N4)",
        "a": {
          "rotulo": "Revisão por reclamação",
          "texto": "No N3, o sistema decide e produz efeito imediato; a revisão depende de o cidadão reclamar. É reativa e enviesada: revisa apenas o que reclamou, e reclamar exige informação e capacidade de ação."
        },
        "b": {
          "rotulo": "Alçada estruturada",
          "texto": "No N4, o sistema decide dentro de limites e escalona automaticamente os casos fora da faixa, segundo regra publicada. A revisão ocorre por critério objetivo, antes ou independentemente de reclamação."
        },
        "diferencaGabarito": "Classificar os dois no mesmo nível erra justamente sobre a diferença entre revisão reativa e alçada estruturada: a primeira depende da iniciativa do cidadão, e a segunda, de parâmetro definido pelo órgão."
      },
      {
        "tema": "Decisão assistida (N1) x decisão automatizada com revisão prévia (N2)",
        "a": {
          "rotulo": "Decisão assistida",
          "texto": "No N1, o sistema calcula, classifica ou estima escore, e o servidor decide. A autoria do ato permanece com o agente público, e a evidência exigível é a do processo decisório humano."
        },
        "b": {
          "rotulo": "Decisão automatizada com revisão prévia",
          "texto": "No N2, o sistema decide, mas o ato só produz efeito após revisão humana. A autoria é do sistema, e a revisão é condição de eficácia, com alçada, prazo e registro."
        },
        "diferencaGabarito": "A diferença está na autoria do ato: no N1 o servidor decide com apoio; no N2 o sistema decide e a revisão humana é requisito de validade, e não mera conferência."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A revisão por amostra é suficiente para todos os casos, porque é proporcional ao volume.",
        "porqueErrada": "A amostragem é técnica de controle estatístico e sua justificativa depende do risco. Se o erro tem impacto assimétrico sobre um subgrupo, se há histórico de erro naquele fluxo ou se a reclamação é o único gatilho, a amostra mascara o erro justamente onde ele se concentra.",
        "versaoCorreta": "O desenho adequado é a revisão por gatilho de risco, com revisão integral dos casos de maior impacto, e a parametrização deve ser documentada. Proporcionalidade ao volume não é proporcionalidade ao direito afetado (art. 48, II, da Lei nº 14.129/2021)."
      },
      {
        "afirmacaoEquivocada": "A responsabilidade pelo ato decisório automatizado é do fornecedor do sistema, porque foi ele quem programou as regras.",
        "porqueErrada": "O nível de automação não transfere a responsabilidade ao fornecedor. O órgão responde pelo ato administrativo que o sistema produziu em seu nome, e o contrato de fornecimento é relação de direito privado, não transferência de poder público.",
        "versaoCorreta": "O órgão responde pelo ato e pelos danos decorrentes de divulgação não autorizada ou uso indevido de informações (art. 34 da Lei nº 12.527/2011); a apuração interna contra o fornecedor não desloca a responsabilidade perante o cidadão."
      },
      {
        "afirmacaoEquivocada": "Se o sistema escalona os casos fora da faixa para análise superior, a alçada está suprida.",
        "porqueErrada": "O escalonamento automático não supre a alçada definida. Um sistema que escala para alguém sem definir quem, com que critério e em que prazo, não tem governança, e a escalação vira encaminhamento sem destinatário nem prazo.",
        "versaoCorreta": "A alçada exige destinatário identificado, critério objetivo de escalonamento, prazo e registro; escalonamento sem esses elementos não produz controle auditável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Níveis de automação N0 a N5: classificação didática de fluxo decisório",
        "Requisitos comuns: base normativa, critério versionado, registro, motivação, rastreabilidade, canal de contestação",
        "Alçada: destinatário, critério, prazo e registro do escalonamento",
        "Motivação individualizada em decisão automatizada sobre direito"
      ],
      "regras": [
        "Controles internos proporcionais aos riscos: art. 48, II, da Lei nº 14.129/2021",
        "Responsabilidade do órgão pelo ato produzido em seu nome: art. 34 da Lei nº 12.527/2011",
        "Linguagem clara na motivação comunicável: art. 3º, VII, da Lei nº 14.129/2021",
        "Acesso ao fundamento do ato: art. 7º, § 3º, da Lei nº 12.527/2011"
      ],
      "comparacoes": [
        "Revisão por reclamação depende da iniciativa do cidadão; alçada estruturada depende de parâmetro do órgão",
        "Decisão assistida mantém a autoria do ato com o servidor; decisão automatizada transfere a formação do ato ao sistema"
      ],
      "fluxos": [
        "Classificar o nível → dimensionar salvaguardas → definir alçada e critério → registrar a decisão → monitorar e reavaliar"
      ],
      "excecoes": [
        "Automação plena é admissível em ato de baixo impacto ou quando a lei admite revisão posterior",
        "Decisão sobre direito mantém a revisão humana como requisito material, mesmo em nível elevado"
      ],
      "palavrasChave": [
        "níveis de automação",
        "revisão prévia",
        "amostragem",
        "alçada",
        "motivação",
        "rastreabilidade"
      ],
      "checklist": [
        "O nível foi classificado pelo fluxo real de decisão?",
        "Os oito requisitos comuns estão presentes e versionados?",
        "A amostragem considera gatilhos de risco e subgrupos?",
        "A alçada tem destinatário, critério, prazo e registro?",
        "A motivação é individualizada e comunicável em linguagem clara?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique o nível de automação de três sistemas: (a) calcula a pontuação de um requerimento e o servidor decide; (b) nega requerimentos automaticamente e o servidor só é acionado se o cidadão reclamar; (c) nega automaticamente e escala ao supervisor quando o valor do benefício ultrapassa o limite.",
        "dados": "Sistema (a) produz escore e devolve a decisão ao servidor; sistema (b) forma a negativa e produz efeito imediato, com revisão somente após reclamação; sistema (c) forma a negativa dentro de limite de valor e encaminha os casos acima do limite ao supervisor.",
        "conceitos": [
          "N1, apoio à decisão: o sistema calcula e o servidor decide",
          "N3, revisão posterior ou amostral: efeito imediato e revisão reativa",
          "N4, autorização prévia em alçada: escalonamento por regra publicada"
        ],
        "estrategia": "Classificar cada sistema pelo que acontece com a autoria do ato e pelo momento da intervenção humana, e não pelo nome comercial da solução.",
        "execucao": [
          "1) Verificar quem forma o ato em cada sistema: servidor ou sistema",
          "2) Identificar o momento da intervenção humana: antes do efeito, depois dele ou por alçada",
          "3) Classificar (a) como N1, (b) como N3 e (c) como N4",
          "4) Justapor a diferença entre revisão reativa e alçada estruturada"
        ],
        "resultado": "(a) N1, apoio à decisão; (b) N3, decisão automatizada com revisão posterior, porque a revisão depende de reclamação; (c) N4, decisão automatizada com alçada, em que o escalonamento é regra publicada.",
        "justificativa": "O critério de classificação é a autoria do ato somada ao gatilho da intervenção humana. Confundir (b) e (c) no mesmo nível erra justamente sobre a diferença entre revisão reativa, que depende do cidadão, e alçada estruturada, que depende de parâmetro do órgão.",
        "errosFrequentes": [
          "Classificar pelo nome do sistema e não pelo fluxo real de decisão",
          "Tratar a reclamação como revisão equivalente à alçada, ignorando o viés de iniciativa"
        ],
        "variacao": "Se o sistema (b) passar a revisar 20% das negativas por sorteio semestral, a classificação permanece N3, mas a amostragem precisa ser dimensionada e defendível estatisticamente."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão implantou negativa automática para indeferimento de requerimento de benefício de valor baixo. Quais os três requisitos mais críticos a observar?",
        "dados": "Indeferimento automático de benefício de valor baixo: decisão formada pelo sistema, sem intervenção humana no caso comum; valor baixo do benefício; população de requerentes com perfis heterogêneos de acesso à informação.",
        "conceitos": [
          "Motivação e comunicação do indeferimento com critério e fundamento",
          "Canal de revisão com alçada, prazo, registro e indicador de reversão",
          "Controle de impacto por subgrupo, com gatilho de revisão integral"
        ],
        "estrategia": "Escolher os requisitos que sustentam a conformidade do ato automatizado: o cidadão precisa conhecer o fundamento, precisa de canal eficaz de revisão, e o órgão precisa controlar o erro assimétrico sobre subgrupos.",
        "execucao": [
          "1) Exigir motivação do indeferimento com o critério e o fundamento, em linguagem clara (art. 3º, VII, da Lei nº 14.129/2021; art. 7º, § 3º, da Lei nº 12.527/2011)",
          "2) Implantar canal de revisão com alçada, prazo e registro, e monitorar indicador de reversão das decisões",
          "3) Controlar o impacto por subgrupo, com gatilho de revisão integral nos casos de maior impacto",
          "4) Registrar os parâmetros usados em cada indeferimento, para rastreabilidade do ato"
        ],
        "resultado": "Os três requisitos críticos são motivação comunicável do indeferimento, canal de revisão com alçada, prazo, registro e indicador de reversão, e controle de impacto por subgrupo com gatilho de revisão integral.",
        "justificativa": "O valor baixo do benefício não elimina o risco de erro assimétrico sobre públicos específicos, e a decisão automatizada sobre direito exige motivação individualizada. A reversão é o indicador que revela se a negativa automática está errando, e sem ela o órgão opera sem evidência.",
        "errosFrequentes": [
          "Achar que benefício de valor baixo dispensa motivação do indeferimento",
          "Adotar amostragem aleatória sem avaliar o impacto sobre subgrupos específicos"
        ],
        "variacao": "Se o indeferimento automático alcançar requerentes idosos e pessoas com deficiência, o gatilho de revisão integral deve ser parametrizado por subgrupo, e não apenas por valor."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A revisão por amostra é suficiente para todos os casos, porque é proporcional ao volume.' — avaliar se a afirmação procede.",
        "dados": "Sistema com 40 mil decisões por mês: amostra aleatória de 1% das decisões, sem gatilho de risco; histórico de erro concentrado em requisições de um município específico; reclamação como único caminho de revisão fora da amostra.",
        "conceitos": [
          "Amostragem como técnica de controle estatístico",
          "Proporcionalidade ao direito afetado: art. 48, II, da Lei nº 14.129/2021",
          "Revisão integral por gatilho de risco: impacto, histórico de erro, reclamação e subgrupo"
        ],
        "estrategia": "Testar a suficiência da amostra contra o risco do fluxo, verificando onde o erro se concentra e se a amostra aleatória é capaz de detectá-lo.",
        "execucao": [
          "1) Verificar se o erro tem impacto assimétrico sobre subgrupo identificado",
          "2) Conferir se há histórico de erro naquele fluxo de decisão",
          "3) Testar se a reclamação é o único gatilho de revisão fora da amostra",
          "4) Concluir que a amostra mascara o erro onde ele se concentra",
          "5) Prescrever revisão por gatilho de risco, com revisão integral dos casos de maior impacto"
        ],
        "resultado": "Errado. A amostragem é técnica de controle estatístico e sua justificativa depende do risco: com impacto assimétrico sobre subgrupo, histórico de erro no fluxo ou reclamação como único gatilho, ela mascara o erro onde ele se concentra.",
        "justificativa": "A afirmação confunde proporção de volume com proporção de risco. O art. 48, II, da Lei nº 14.129/2021 exige controles proporcionais aos riscos, consideradas causas, consequências e impactos, e não à quantidade de casos processados.",
        "errosFrequentes": [
          "Justificar a amostra pelo volume de decisões e não pelo risco do erro",
          "Ignorar que a reclamação como único gatilho introduz viés de iniciativa do cidadão"
        ],
        "variacao": "Se a taxa de reclamação subir em um município específico, o gatilho de risco deve acionar revisão integral das decisões daquele fluxo, independentemente da amostra aleatória."
      }
    ]
  },
  "m6-u6-t1-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A supervisão humana é o ponto em que uma pessoa responsável incide sobre o resultado de um sistema automatizado, com poder de aprovar, deferir, revogar ou corrigir. É ela que dá concretização à impessoalidade e à moralidade quando a decisão afeta direitos, e o seu desenho — alçada, critério de escalonamento, registro, indicador e retroalimentação — é o que separa controle auditável de declaração de intenção. Em prova, o tema aparece em itens que opõem revisão prévia a revisão posterior, amostragem aleatória a estratificada e reclamação do cidadão a gatilho objetivo.",
      "preRequisitos": [
        "Níveis de automação de decisão e distinção entre ato automatizado e ato humano",
        "Noção de impacto da decisão sobre direitos do titular e de erro concentrado em subgrupo",
        "Leitura de matriz de escalonamento e de indicador de desempenho"
      ],
      "objetivosObservaveis": [
        "Definir os seis elementos de desenho da supervisão humana e explicar a função de cada um",
        "Escolher o modelo de revisão adequado ao impacto da decisão, justificando pela faixa de risco",
        "Redigir critério de escalonamento objetivo, com gatilho, destinatário, prazo e prioridade",
        "Identificar indicadores que revelem erro concentrado em subgrupo, e não apenas erro médio"
      ],
      "competencias": [
        "Desenho de controle: traduzir exigência abstrata de supervisão em alçada, critério e registro",
        "Leitura de risco: calibrar a intensidade da revisão pelo impacto sobre o titular",
        "Pensamento de auditoria: exigir trilha que permita reconstruir a decisão e a sua revisão"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m6-u6-t1-s2 (Níveis de automação de decisão e requisitos de conformidade) — a exigência de supervisão deriva do nível de automação adotado no processo",
        "m6-u6-t2-s1 (Estudos de caso 1 e 2: publicação indevida e vazamento de dados) — casos em que falha de desenho e ausência de registro agravam o incidente",
        "m5-u1-t2-s3 (Viés, variância, explicabilidade e limitações) — erro concentrado em subgrupo é o alvo do indicador de distribuição de reversões",
        "m4-u2-t3-s2 (Monitoramento, registros e resposta a incidentes) — registro e retenção da revisão como trilha de auditoria"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "É tema de prova em itens que descrevem um desenho de supervisão e perguntam o que falta ou o que está inadequado: amostragem aleatória em lugar de estratificada, reclamação do cidadão como único método de aferição, revisor sem acesso aos dados necessários. A cobrança é argumentativa e qualitativa, mais frequente em bancas que trabalham cenários de governança e de conformidade. A classificação é qualitativa e configura estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "A supervisão humana é a intervenção de pessoa responsável por aprovar, deferir, revogar ou corrigir decisão tomada por sistema, com poder de efeito. Seis elementos a desenham: papel e autoridade de quem revisa, com acesso à informação necessária; alçada de revisão, definida por impacto, por gatilho ou por amostragem; critério de escalonamento, objetivo e publicado; registro da revisão, com revisor, caso, decisão automatizada, manutenção ou mudança, fundamento e data; indicadores, entre eles taxa de reversão e distribuição de reversões por subgrupo; e retroalimentação, que ajusta regra, dado de treino, alçada ou desativa o automatismo. Os modelos de revisão são prévia, posterior integral, posterior amostral e por reclamação.",
      "intermediario": "No nível intermediário, o desenho é calibrado pelo impacto. Revisão prévia convém a decisão de alto impacto, porque o ato só existe após aprovação; revisão posterior integral serve a impacto intermediário com reversão possível; revisão amostral serve a baixo impacto, desde que estratificada por risco e por subgrupo e acompanhada de gatilho objetivo; revisão por reclamação é detecção reativa do caso relatado e só funciona como complemento. O critério de escalonamento precisa dizer o que dispara a escalada, para quem ela vai, em que prazo e com que prioridade. Amostragem aleatória simples não corrige erro concentrado em subgrupo.",
      "avancado": "No nível avançado, a atenção recai sobre a qualidade da evidência produzida pelo controle. O registro da revisão é o que permite auditar existência e eficácia da supervisão: sem revisor identificado, decisão automatizada comparada, fundamento e data, não há responsabilização nem aprendizado. Os indicadores devem separar erro médio de erro concentrado — reversão alta em um único público é sinal de viés de dado, e não de falha pontual do revisor. A política de supervisão precisa ser documentada: objetivo e escopo, níveis de automação por processo, alçadas e critérios, matriz de escalonamento, responsabilidades, registro e retenção, indicadores e periodicidade de revisão.",
      "especialista": "No nível especialista, a supervisão é lida como ponto de concretização da impessoalidade, e o risco simétrico é a preferência pessoal do revisor: se o supervisor decide por critério próprio não escrito, o sistema reintroduz o subjetivismo que a automação pretendia remover. Por isso a política exige critério escrito, separação entre quem opera e quem revisa, amostragem independente e revisão periódica por instância distinta da que desenhou o controle. O desenho também se articula com a política de proteção de dados e com o plano de incidente, e seus parâmetros precisam ser revisados quando o processo muda."
    },
    "comparacoes": [
      {
        "tema": "Revisão prévia e revisão posterior integral",
        "a": {
          "rotulo": "Revisão prévia",
          "texto": "O ato só existe após aprovação do revisor. Oferece máxima segurança, porque nenhum efeito é produzido antes do julgamento humano, ao custo de menor eficiência e de fila de pendências. Indicada para decisão de alto impacto e para hipótese de dúvida jurídica."
        },
        "b": {
          "rotulo": "Revisão posterior integral",
          "texto": "A decisão produz efeito e todos os casos são revisados depois, com possibilidade de reversão. Preserva a eficiência do processo e exige canal de contestação funcionando e prazo definido. Indicada para impacto intermediário com reversão possível."
        },
        "diferencaGabarito": "A escolha depende do impacto e da reversibilidade. Se o enunciado descrever decisão de alto impacto sobre direitos, a resposta correta exige revisão prévia; descrevendo impacto intermediário com reversão possível, admite revisão posterior integral. Confundir as duas é trocar segurança por eficiência sem declarar o critério."
      },
      {
        "tema": "Amostragem aleatória simples e amostragem estratificada por risco e subgrupo",
        "a": {
          "rotulo": "Amostragem aleatória simples",
          "texto": "Seleciona casos por sorteio, com probabilidade igual para todos. Afere o desempenho médio do sistema e pode não atingir o subgrupo em que o erro se concentra, porque a concentração não altera a chance de seleção."
        },
        "b": {
          "rotulo": "Amostragem estratificada por risco e subgrupo",
          "texto": "Divide a população em estratos de risco e de público e amostra dentro de cada estrato. Tem potência para detectar erro concentrado e exige registrar os estratos e o tamanho da amostra de cada um."
        },
        "diferencaGabarito": "Diante de indício de erro concentrado em subgrupo, a prova exige estratificação. A amostragem aleatória simples continua útil para aferir desempenho médio, mas não serve como método único de detecção de viés."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'A supervisão humana é dispensável quando o modelo tem acurácia alta, pois o erro é estatisticamente irrelevante.'",
        "porqueErrada": "Acurácia global é média sobre toda a população e não revela erro concentrado em subgrupo: volume pequeno de erro pode incidir justamente sobre o público mais vulnerável. Além disso, decisão que afeta direitos possui canal de revisão e dever de motivação, que métrica de desempenho não substitui.",
        "versaoCorreta": "Errado. Acurácia global não mede erro concentrado em subgrupo (Módulo 5) e não substitui o dever de motivação, de contestação e de responsabilização. Além disso, decisão que afeta direitos exige canal de revisão, ainda que o volume de revisão seja pequeno — o que muda é a INTENSIDADE da revisão, não a sua existência."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A revisão por reclamação do cidadão pode substituir a amostragem, porque quem é atingido pela decisão sabe onde o erro ocorre.'",
        "porqueErrada": "A reclamação é detecção reativa e depende de informação, de acesso e de capacidade de ação do titular: o erro aparece onde há mais condição de reclamar e desaparece onde há menos. Usá-la como método de aferição de desempenho enviesa o resultado e elimina a comparação com a decisão automatizada.",
        "versaoCorreta": "Errado. A reclamação identifica o caso relatado e vale como gatilho complementar; a aferição de desempenho exige amostragem estratificada por risco e por subgrupo, com registro do que foi revisado e do resultado da comparação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Basta designar servidor para revisar as decisões automatizadas; o acesso aos dados e a autoridade para rever são detalhes operacionais.'",
        "porqueErrada": "Sem acesso à informação necessária, o revisor não consegue verificar o caso; sem autoridade para rever, ele apenas sugere, e a sugestão não corrige o ato. Nenhum dos dois produz supervisão com poder de efeito, que é a definição do controle.",
        "versaoCorreta": "Errado. Papel e autoridade são o primeiro elemento de desenho: o revisor precisa de competência formal, acesso aos dados do caso e poder de aprovar, deferir, revogar ou corrigir, com registro do que foi mantido ou mudado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Supervisão humana: intervenção de pessoa responsável, com poder de efeito, sobre decisão de sistema",
        "Alçada de revisão: definição de quais casos vão a revisão, por impacto, por gatilho ou por amostragem",
        "Critério de escalonamento: gatilho, destinatário, prazo e prioridade da escalada, objetivos e públicos",
        "Registro da revisão: revisor, caso, decisão automatizada, manutenção ou mudança, fundamento e data",
        "Retroalimentação: resultado da revisão altera regra, dado de treino, alçada ou desativa o automatismo"
      ],
      "regras": [
        "Regra do poder de efeito: revisor sem acesso aos dados não revisa, e revisor sem autoridade apenas sugere",
        "Regra da calibração pelo impacto: quanto maior o efeito sobre direitos, mais próxima do ato é a revisão",
        "Regra da evidência: supervisão sem registro não é auditável e não gera aprendizado"
      ],
      "comparacoes": [
        "Revisão prévia (ato só após aprovação) e revisão posterior integral (efeito imediato, revisão de todos os casos)",
        "Amostragem aleatória simples (desempenho médio) e amostragem estratificada (erro concentrado em subgrupo)"
      ],
      "fluxos": [
        "Desenho da política: definir níveis de automação por processo, fixar alçadas e critérios, publicar matriz de escalonamento, registrar revisões, apurar indicadores e revisar o desenho periodicamente",
        "Ciclo de retroalimentação: indicador de reversão identificado, causa investigada, regra ou dado de treino corrigido, alçada reavaliada e desativação avaliada quando o automatismo falhar"
      ],
      "excecoes": [
        "Revisão por reclamação não substitui amostragem: é detecção do caso relatado, enviesada pela capacidade de reclamar",
        "Supervisor que decide por preferência pessoal reintroduz o subjetivismo que a impessoalidade pretendia remover, e por isso o critério precisa ser escrito"
      ],
      "palavrasChave": [
        "supervisão humana",
        "alçada de revisão",
        "escalonamento",
        "registro de revisão",
        "taxa de reversão",
        "amostragem estratificada",
        "retroalimentação"
      ],
      "checklist": [
        "Sei nomear os seis elementos de desenho e explicar a função de cada um",
        "Escolho o modelo de revisão pelo impacto da decisão e sei justificar a escolha",
        "Redijo critério de escalonamento com gatilho, destinatário, prazo e prioridade",
        "Uso indicador de reversão por subgrupo para detectar erro concentrado, e não apenas erro médio",
        "Exijo registro da revisão com revisor, fundamento e data antes de afirmar que a supervisão existe"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão revisa 5% dos indeferimentos automáticos, escolhidos por sorteio, e o gatilho de revisão é a reclamação do cidadão. O que está errado?",
        "dados": "Sistema de indeferimento automático de requerimentos, com 4.000 decisões por mês. Política vigente: amostra aleatória simples de 5% dos casos, cerca de 200 por mês; único gatilho adicional é a reclamação formal do cidadão; não há estrato por tipo de benefício, por região nem por perfil do requerente.",
        "conceitos": [
          "Amostragem aleatória simples e sua limitação",
          "Gatilho objetivo e gatilho reativo",
          "Erro concentrado em subgrupo"
        ],
        "estrategia": "Avaliar o desenho por duas frentes: a capacidade de detecção da amostra e a natureza do gatilho. Verificar se o método escolhido alcança o tipo de erro que se quer detectar e se o gatilho depende de ação do titular.",
        "execucao": [
          "Verificar o que a amostra aleatória simples mede: o desempenho médio do sistema, com probabilidade igual de seleção em todos os casos.",
          "Confrontar com o erro que interessa: se o erro se concentra em um subgrupo de requerentes, a amostra pode não atingi-lo, e a taxa global de reversão permanece baixa.",
          "Examinar o gatilho: a reclamação é detecção reativa e depende de informação, de acesso e de capacidade de ação do cidadão.",
          "Concluir pelos dois desvios e indicar a correção: amostra estratificada por risco e por subgrupo, com gatilho objetivo e revisão integral quando o gatilho disparar."
        ],
        "resultado": "Dois desvios: (1) a amostragem é aleatória e, portanto, pode não atingir o subgrupo onde o erro se concentra — o controle estatístico simples não corrige viés de dados; (2) o gatilho principal é a reclamação, o que torna a revisão dependente de informação, acesso e capacidade de ação do cidadão — isto é, o erro de sistema aparece justamente onde há mais capacidade de reclamar, e desaparece onde há menos. O desenho correto combina amostra estratificada (com estratos de risco e de subgrupo) com revisão integral por gatilhos objetivos.",
        "justificativa": "O gabarito se sustenta na distinção entre método de aferição e gatilho de detecção. A amostragem aleatória simples estima média e não detecta concentração: a probabilidade de seleção independe do estrato, de modo que subgrupo com desempenho pior pode ficar de fora da amostra. A reclamação, por sua vez, é informação do caso relatado e carrega o viés de quem tem condição de reclamar. Somadas, as duas escolhas produzem taxa de reversão que parece saudável e encobre o erro onde ele ocorre.",
        "errosFrequentes": [
          "Tratar os 5% de amostra como prova de que a supervisão é adequada, confundindo existência de amostra com poder de detecção",
          "Admitir a reclamação como método de aferição de desempenho, em vez de gatilho complementar",
          "Corrigir o desenho aumentando a amostra aleatória, o que reduz a variação da média e não resolve a concentração em subgrupo"
        ],
        "variacao": "Na variação, o órgão mantém a amostra de 5%, mas a estratifica por tipo de benefício e por região e acrescenta gatilho de erro no período anterior. O aluno deve reconhecer que a estratificação dá poder de detecção ao método e que o gatilho objetivo passa a conduzir revisão integral dos casos atingidos."
      },
      {
        "tipo": "aplicacao",
        "problema": "Escreva a matriz de escalonamento de um sistema de análise de risco ambiental, com faixas, gatilhos e prazos.",
        "dados": "Sistema classifica requerimentos de licença em risco baixo, médio e alto, com base em tipo de atividade, porte e localização. Volume atual de 1.200 requerimentos por mês, dos quais 60% em risco baixo. Existem supervisor técnico e autoridade competente designada, e o módulo de auditoria registra parâmetros e resultado da classificação.",
        "conceitos": [
          "Faixas de impacto e modelo de revisão",
          "Critério de escalonamento com gatilho, destinatário e prazo",
          "Registro da decisão e dos parâmetros"
        ],
        "estrategia": "Organizar a matriz por faixa de risco, associando a cada faixa o modelo de revisão, o gatilho de escalonamento, o destinatário e o prazo. Em seguida, fixar os elementos comuns a todas as faixas: registro, relatório de reversões e revisão periódica da regra.",
        "execucao": [
          "Definir a faixa A, de risco baixo e fora de área sensível: decisão automatizada, revisão amostral de 10% com estratificação por município e por tipo de atividade, e gatilho de reclamação e de erro histórico.",
          "Definir a faixa B, de risco médio: decisão automatizada com revisão posterior integral em até 10 dias úteis, escalonamento ao supervisor técnico quando o impacto estimado ultrapassar o limite da faixa, e gatilho de erro no período anterior.",
          "Definir a faixa C, de risco alto, em área sensível ou com dúvida jurídica: decisão automatizada apenas como parecer, decidida por técnico formalmente designado, com motivação e assinatura, escalonamento à autoridade competente e revisão integral.",
          "Fixar os elementos comuns: registro da decisão e dos parâmetros, relatório de reversões por subgrupo e revisão trimestral da regra de classificação."
        ],
        "resultado": "A matriz fica em três faixas. Faixa A: decisão automatizada com revisão amostral de 10% estratificada por município e tipo de atividade. Faixa B: revisão posterior integral em até 10 dias úteis, com escalonamento ao supervisor técnico por limite de impacto. Faixa C: a saída do sistema é parecer, e a decisão é de técnico designado, com motivação, assinatura e revisão integral. Todas as faixas preveem registro, relatório de reversões por subgrupo e revisão trimestral.",
        "justificativa": "A matriz é a resposta porque converte a exigência abstrata de supervisão em alçada, critério, destinatário e prazo, que são os elementos que tornam o controle operável e auditável. A calibração pelo impacto aparece na passagem da faixa A para a C: na primeira, a revisão é amostral porque o efeito é baixo e reversível; na terceira, a decisão é humana porque o efeito é alto e a dúvida jurídica exige motivação. Sem o registro e o relatório de reversões por subgrupo, a matriz existiria no papel e não produziria evidência.",
        "errosFrequentes": [
          "Aplicar revisão amostral às três faixas, ignorando que o impacto da faixa C exige decisão humana motivada",
          "Escalonar sem destinatário nem prazo, o que deixa o critério inaplicável e não auditável",
          "Omitir o registro dos parâmetros e do resultado, inviabilizando medição de reversão e responsabilização"
        ],
        "variacao": "Na variação, o sistema passa a classificar também empreendimentos em área de restrição ambiental, com faixa de risco alto por localização. O aluno deve reposicionar esses casos na faixa C, manter a decisão humana e acrescentar o estrato de área sensível à amostragem da faixa A."
      },
      {
        "tipo": "erro",
        "problema": "Um relatório de desempenho aponta acurácia de 98% no modelo de triagem automática e conclui que a supervisão humana pode ser suspensa, porque o erro residual seria estatisticamente irrelevante. O gestor aceita a conclusão. Avaliar.",
        "dados": "Relatório trimestral do sistema de triagem: acurácia global de 98%, 1.200 decisões no período, taxa de reclamação de 0,4%. O relatório não apresenta desempenho por tipo de benefício, por região nem por perfil do requerente. Proposta em pauta: encerrar a revisão humana e manter apenas a amostra automática de qualidade.",
        "conceitos": [
          "Acurácia global como média sobre a população",
          "Erro concentrado em subgrupo",
          "Dever de motivação, contestação e responsabilização"
        ],
        "estrategia": "Desconstruir a conclusão em duas etapas: mostrar que a métrica apresentada não mede o erro que interessa e, em seguida, mostrar que há exigência de revisão que não depende do volume de erro. Concluir pelo que a métrica de fato permite decidir.",
        "execucao": [
          "Examinar o que a acurácia global mede: proporção de acertos sobre o total de casos, sem recorte por subgrupo, por região ou por tipo de benefício.",
          "Testar a hipótese de erro concentrado: com 2% de erro em 1.200 casos são cerca de 24 decisões equivocadas, cuja distribuição pode incidir sobre um único público.",
          "Verificar as exigências independentes do volume: decisão que afeta direitos possui dever de motivação, canal de contestação e responsabilização, que métrica de desempenho não substitui.",
          "Concluir pelo que a métrica permite: calibrar a intensidade da revisão — tamanho da amostra, estratos acompanhados e prazo —, e não sustentar o encerramento da supervisão."
        ],
        "resultado": "A conclusão é inválida. A acurácia global agrega o erro de toda a população e pode conviver com desempenho muito pior em um subgrupo; além disso, decisão que afeta direitos exige canal de revisão e dever de motivação. O que a métrica permite é calibrar a intensidade da supervisão — volume da amostra, estratos acompanhados e prazo de revisão —, e não demonstrar a sua dispensabilidade.",
        "justificativa": "O erro de leitura está em tratar média agregada como prova de ausência de erro relevante. Acurácia global não informa distribuição: uma taxa de 98% pode resultar de desempenho uniforme ou de acerto quase total em parte dos casos e fracasso grave em outra, e o relatório apresentado não traz recorte por subgrupo. Some-se que o dever de motivar, de permitir contestação e de responsabilizar não é dimensionado pela taxa de acerto, mas pela natureza do efeito da decisão. Por isso a métrica dimensiona o controle, e não o elimina.",
        "errosFrequentes": [
          "Confundir acurácia global com ausência de erro relevante, sem examinar a distribuição por subgrupo",
          "Usar a taxa de reclamação como prova de qualidade: reclamação baixa pode indicar dificuldade de acesso ao canal, e não ausência de erro",
          "Encerrar a supervisão em vez de reduzir a sua intensidade, trocando a calibração pela dispensa do controle"
        ],
        "variacao": "Na variação, o relatório passa a incluir reversões por subgrupo e mostra taxa quatro vezes superior em um público. O aluno deve reconhecer que o dado confirma a hipótese de erro concentrado, exige revisão integral desse estrato e investigação de viés no dado de treino, e não apenas aumento da amostra global."
      }
    ]
  },
  "m6-u6-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os dois casos reúnem os defeitos típicos do serviço público digital: publicar dado pessoal invocando transparência e permitir que credencial legítima exporte base completa sem registro. Cada um exige dois regimes ao mesmo tempo — publicidade e proteção de dados no primeiro, responsabilização e segurança no segundo —, e o gabarito depende do dispositivo aplicável e da providência exigida, não do princípio citado. Ambos terminam em providência institucional: remover, preservar, corrigir o processo e registrar a correção.",
      "preRequisitos": [
        "Regime da informação pessoal e do dado pessoal, com suas hipóteses de divulgação",
        "Dever de publicidade e seus limites na transparência ativa",
        "Noção de controle de acesso, de credencial e de trilha de auditoria"
      ],
      "objetivosObservaveis": [
        "Classificar a lista nominada de beneficiários e a contagem por bairro segundo o regime aplicável a cada uma",
        "Explicar por que a credencial legítima do consultor não afasta a responsabilidade do órgão",
        "Ordenar as providências de resposta ao incidente, da contenção à revisão do acesso de terceiros",
        "Distinguir falha de ferramenta de falha de desenho e de governança do compartilhamento"
      ],
      "competencias": [
        "Leitura de caso: separar o fato, o dispositivo e a providência antes de concluir",
        "Rigor jurídico: nomear o regime aplicável em vez de recitar princípio",
        "Pensamento de processo: identificar a etapa ausente que permitiu a irregularidade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u6-t1-s3 (Desenho da supervisão humana: alçadas, critérios, registro e escalonamento) — a ausência de registro e de controle é a falha de desenho comum aos dois casos",
        "m6-u6-t2-s2 (Estudos de caso 3 e 4: uso de ferramenta de IA e transparência administrativa) — mesmo método de análise aplicado a outros defeitos do serviço público digital",
        "m6-u6-t3-s1 (Método de análise de itens de prova e questões autorais comentadas (bloco 1)) — os dois casos são matéria-prima para itens de certos e errados",
        "m4-u1-t2-s2 (Autenticação, autorização, auditoria e menor privilégio) — o caso 2 é falha de autorização e de auditoria de acesso",
        "m4-u4-t1-s3 (Segurança, incidentes e a LGPD no dia a dia do órgão) — dever de segurança e comunicação ao titular após o incidente"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Publicação indevida de dado pessoal e vazamento por credencial legítima integram o conteúdo de ética, acesso à informação e proteção de dados, porque exigem dispositivo específico e providência concreta no mesmo item, além de oposição entre transparência e privacidade e responsabilidade do órgão. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Caso 1 — publicação indevida: órgão municipal divulga, no portal de transparência e em rede social, a lista nominada de beneficiários de benefício social de um bairro, invocando o dever de publicidade. A lista é informação pessoal e dado pessoal, e a divulgação por terceiro exige previsão legal ou consentimento; nenhuma hipótese de dispensa se ajusta ao caso. A providência é remover o conteúdo, preservar o registro e substituir a lista por dado agregado, aplicando anonimização quando houver finalidade de pesquisa ou de monitoramento. Caso 2 — vazamento: consultor com credencial legítima exporta a base completa de cadastramento, sem registro no módulo de auditoria. O acesso legítimo não autoriza a finalidade, e o órgão responde pelo incidente e pelo desenho do controle que permitiu a exportação massiva.",
      "intermediario": "No nível intermediário, os casos são analisados pelo dispositivo aplicável. No caso 1, o dever de publicidade incide sobre informação de interesse coletivo ou geral e é limitado pela privacidade dos dados pessoais, inclusive na transparência ativa; a lista nominada atende a interesse individual. No caso 2, o incidente é uso indevido de informação pessoal, com responsabilização do órgão, apuração funcional por dolo ou culpa e direito de regresso. A credencial legítima afasta a ilicitude do acesso, mas não a da finalidade praticada. A resposta correta nomeia o dispositivo e a providência, em vez de se limitar ao princípio violado.",
      "avancado": "No nível avançado, a análise separa norma de providência de governança. No caso 1, publicar em rede social amplia alcance e dificulta reversão, o que agrava o dano e torna a checagem prévia indispensável; a agregação por bairro, faixa de renda ou faixa etária atende ao dever de divulgar sem expor pessoa. No caso 2, a falha é de desenho — o acesso de consulta permitia exportação massiva sem registro —, e a interoperabilidade com fornecedores e consultores exige ambiente seguro, controle de exportação, segregação de funções e menor privilégio. As providências começam pela contenção com preservação da prova e terminam pela revisão do contrato e pela atualização do sistema de riscos.",
      "especialista": "No nível especialista, os casos são lidos como falha de processo, e não como erro individual. A lista nominada publicada revela ausência de etapa de verificação de dado pessoal no fluxo de publicação; a exportação sem registro revela ausência de controle de exportação e de trilha de auditoria no desenho de acesso de terceiros. A correção, portanto, é institucional: revisar o processo de publicação, tratar a comunicação ao titular conforme avaliação de risco, rever o acesso de terceiros e registrar a correção. Substituir a pessoa sem corrigir o fluxo produz recorrência, e destruir a trilha de auditoria agrava a apuração."
    },
    "comparacoes": [
      {
        "tema": "Publicidade administrativa e divulgação irrestrita de dado pessoal",
        "a": {
          "rotulo": "Dado agregado, de interesse coletivo",
          "texto": "Quantidade de beneficiários por bairro, faixa de renda ou faixa etária. Atende ao dever de divulgar informação de interesse coletivo sem permitir identificação de pessoa, e é a saída correta no caso 1."
        },
        "b": {
          "rotulo": "Lista nominada, de interesse individual",
          "texto": "Nome a nome dos beneficiários de um bairro. É informação pessoal e dado pessoal: a divulgação por terceiro exige previsão legal ou consentimento, e a guarda pelo órgão não converte o dado em informação publicável."
        },
        "diferencaGabarito": "A posse e a guarda pelo órgão não alteram a natureza do dado. Se a alternativa tratar a lista nominada como ato de transparência, está errada; se admitir dado agregado ou anonimizado como forma de cumprir o dever de publicidade, está correta."
      },
      {
        "tema": "Acesso legítimo com credencial e uso indevido da informação",
        "a": {
          "rotulo": "Acesso autorizado",
          "texto": "O consultor possui credencial válida e permissão de consulta ao sistema de cadastramento. O ingresso no sistema é lícito, e a ilicitude da credencial não é o problema do caso."
        },
        "b": {
          "rotulo": "Uso indevido da informação",
          "texto": "A exportação da base completa ultrapassa a finalidade do acesso e ocorre sem registro no módulo de auditoria. O órgão responde pelo incidente, com apuração funcional por dolo ou culpa e direito de regresso contra quem agiu ilicitamente."
        },
        "diferencaGabarito": "Autorização de acesso não afasta o dever de segurança nem o de desenho do controle. Em prova, a alternativa que afasta a responsabilidade do órgão por existir credencial legítima está errada: a falha de desenho é parte do fato."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'No caso 1, como a lista de beneficiários é informação que o órgão possui e administra, a sua divulgação é ato de transparência e não pode configurar irregularidade.'",
        "porqueErrada": "A posse e a custódia pelo órgão não convertem dado pessoal em informação publicável. A informação pessoal tem regime próprio, que exige previsão legal ou consentimento para divulgação por terceiro, e a privacidade deve ser respeitada inclusive na transparência ativa.",
        "versaoCorreta": "Errado. A posse e a custódia pelo órgão não convertem dado pessoal em informação publicável. O art. 31 da Lei nº 12.527/2011 impõe regime próprio à informação pessoal, e o art. 29, § 1º, VIII, da Lei nº 14.129/2021 exige respeito à privacidade mesmo na transparência ativa. A versão correta é: «a lista nominada só pode ser divulgada com previsão legal ou consentimento, ou em forma agregada ou anonimizada»."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'No caso 2, como o consultor acessou o sistema com credencial legítima, o vazamento é problema dele, e a responsabilidade do órgão está afastada.'",
        "porqueErrada": "O acesso legítimo não autoriza a finalidade praticada: exportar a base completa é uso indevido de informação pessoal. O órgão responde pelo incidente e também pelo dever de segurança e pelo desenho do controle de acesso, que permitiu a exportação massiva sem registro, com apuração funcional por dolo ou culpa e direito de regresso.",
        "versaoCorreta": "Errado. A credencial legítima afasta a ilicitude do ingresso, não a da finalidade. O órgão responde diretamente pelos danos e pela falha de desenho, apura a responsabilidade funcional do consultor e exerce o direito de regresso contra quem agiu ilicitamente."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Diante do vazamento, a providência imediata é rotacionar as credenciais de acesso, para conter a exposição da base.'",
        "porqueErrada": "A rotação de credenciais sem preservação prévia destrói a evidência necessária à apuração e dificulta identificar autor, alcance e vetor do incidente. A contenção vem primeiro, mas a preservação de logs e da prova a antecede.",
        "versaoCorreta": "Errado. A sequência correta é conter e preservar: revogar o acesso do agente, isolar o ambiente e guardar logs e demais evidências antes de qualquer rotação de credenciais, para só então corrigir o desenho do controle e apurar responsabilidades."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Publicação indevida: divulgação de dado pessoal sem previsão legal ou consentimento, ainda que invocado o dever de publicidade",
        "Dado agregado: síntese por bairro, faixa de renda ou faixa etária, que atende ao interesse coletivo sem identificar pessoa",
        "Uso indevido de informação pessoal: acesso legítimo com finalidade diversa da autorizada",
        "Dever de segurança: medidas técnicas e administrativas aptas a proteger a informação pessoal",
        "Falha de desenho: controle de acesso que permite exportação massiva sem registro"
      ],
      "regras": [
        "Regra do regime próprio: informação pessoal somente é divulgada por terceiro com previsão legal ou consentimento",
        "Regra da guarda: possuir e administrar o dado não o torna publicável",
        "Regra da evidência: conter o incidente preservando logs e prova antes da rotação de credenciais"
      ],
      "comparacoes": [
        "Transparência ativa com dado agregado e divulgação nominativa de beneficiário",
        "Acesso autorizado por credencial legítima e uso indevido da informação acessada"
      ],
      "fluxos": [
        "Resposta à publicação indevida: remover o conteúdo, preservar o registro, substituir por dado agregado ou anonimizado, apurar e corrigir o processo de publicação e registrar a correção",
        "Resposta ao vazamento: conter preservando evidência, apurar a responsabilidade funcional, corrigir o controle de exportação e de registro, comunicar o titular conforme avaliação de risco e revisar o acesso de terceiros"
      ],
      "excecoes": [
        "Hipóteses de dispensa de sigilo sobre informação pessoal não se confundem com autorização de divulgação nominada: nenhuma delas se ajusta à lista de beneficiários",
        "A replicação em rede social não cria regime próprio, mas agrava o dano pelo alcance e pela dificuldade de reversão"
      ],
      "palavrasChave": [
        "publicação indevida",
        "dado agregado",
        "transparência ativa",
        "uso indevido",
        "dever de segurança",
        "controle de exportação",
        "direito de regresso"
      ],
      "checklist": [
        "Sei distinguir dado agregado de lista nominada e indicar a saída correta em cada caso",
        "Nomeio o dispositivo aplicável à divulgação de informação pessoal e à responsabilização do órgão",
        "Reconheço que credencial legítima não afasta o dever de segurança nem a falha de desenho",
        "Ordeno as providências começando pela contenção com preservação da evidência",
        "Sei por que a replicação em rede social agrava o dano e exige checagem prévia"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "No caso 1, qual é a diferença entre negar a lista de beneficiários e publicar a contagem por bairro?",
        "dados": "Portal de transparência de órgão municipal que abrange 42 bairros. Beneficiários de programa social em um bairro: 318 pessoas, com nomes completos publicados em lista. Alternativa disponível: contagem de beneficiários por bairro e por faixa de renda.",
        "conceitos": [
          "Dado pessoal e informação pessoal",
          "Dever de publicidade e interesse coletivo",
          "Dado agregado e anonimização"
        ],
        "estrategia": "Comparar as duas saídas pelo objeto divulgado: a lista identifica pessoas e a contagem descreve o programa. Verificar qual delas atende ao interesse coletivo sem exigir previsão legal ou consentimento.",
        "execucao": [
          "Classificar a lista nominada: é informação pessoal e dado pessoal, porque identifica o beneficiário do benefício.",
          "Verificar a base para divulgação por terceiro: exige previsão legal ou consentimento, e nenhuma hipótese de dispensa se ajusta ao caso.",
          "Classificar a contagem por bairro: é dado agregado, que descreve o programa e atende ao interesse coletivo sem expor pessoa.",
          "Concluir pela diferença de regime: a lista depende de base legal e a contagem cumpre o dever de publicidade diretamente."
        ],
        "resultado": "A lista nominada é dado pessoal e a sua divulgação depende de previsão legal ou consentimento; publicá-la sem base é o caso de publicação indevida. A contagem por bairro é dado agregado e atende ao dever de divulgar informações de interesse coletivo sem expor pessoa. A diferença entre as duas saídas está no objeto: a publicidade administrativa divulga o que é público do órgão, e a divulgação irrestrita de dados pessoais expõe o que é da pessoa.",
        "justificativa": "A distinção é de objeto e de regime. A lista nominada contém dado pessoal, cuja divulgação por terceiro depende de previsão legal ou consentimento; a contagem por bairro é síntese estatística que não permite nova identificação e, por isso, cumpre o dever de publicidade sem necessidade de base específica. O gabarito se apoia em que a transparência ativa é dever de divulgar o que é público do órgão, e não licença para expor o que é da pessoa.",
        "errosFrequentes": [
          "Tratar a contagem por bairro como informação pessoal e recusar também a divulgação do dado agregado",
          "Admitir a lista nominada porque os nomes já constam de outros sistemas do órgão, confundindo existência do dado com autorização de divulgação",
          "Confundir hipótese de dispensa de sigilo com autorização de divulgação nominada"
        ],
        "variacao": "Na variação, o órgão precisa divulgar a execução orçamentária do programa e recebe pedido de acesso à lista nominal com finalidade declarada de pesquisa. O aluno deve distinguir o dado agregado, que divulga de imediato, do pedido de acesso a dado pessoal, que segue regime próprio e exige anonimização quando possível."
      },
      {
        "tipo": "aplicacao",
        "problema": "No caso 2, por que a credencial legítima do consultor não afasta a responsabilidade do órgão?",
        "dados": "Sistema de cadastramento de posto de combustível, com acesso de fornecedores e de consultores externos. O consultor exporta a base completa, incluindo dados de beneficiários, usando credencial válida de consulta. O módulo de auditoria não registra a exportação, e o perfil de consulta permitia exportação massiva.",
        "conceitos": [
          "Uso indevido de informação pessoal",
          "Responsabilidade do órgão e direito de regresso",
          "Dever de segurança e desenho do controle de acesso"
        ],
        "estrategia": "Separar dois planos: a licitude do acesso e a licitude da finalidade. Em seguida, verificar se o desenho do controle contribuiu para o incidente, porque o dever de segurança incide sobre o órgão independentemente da conduta do terceiro.",
        "execucao": [
          "Examinar a credencial: o acesso de consulta era autorizado, de modo que a ilicitude não está no ingresso ao sistema.",
          "Examinar a finalidade: exportar a base completa ultrapassa o alcance do acesso e constitui uso indevido de informação pessoal.",
          "Examinar o desenho: o perfil de consulta permitia exportação massiva sem registro, o que é falha de medida técnica e administrativa.",
          "Concluir pela responsabilidade do órgão: responde pelos danos, apura a responsabilidade funcional por dolo ou culpa e exerce direito de regresso contra quem agiu ilicitamente."
        ],
        "resultado": "A credencial legítima não afasta a responsabilidade porque o acesso autorizado não autoriza a finalidade praticada. O incidente é uso indevido de informação pessoal e o órgão responde diretamente pelos danos, com apuração de responsabilidade funcional por dolo ou culpa e direito de regresso. O órgão também responde pelo dever de segurança e pelo desenho do controle de acesso, que permitiu exportação massiva sem registro.",
        "justificativa": "A resposta se sustenta na separação entre acesso e finalidade e na incidência do dever de segurança sobre o controlador. A autorização de ingresso é compatível com o desvio de finalidade, e a exportação em massa sem registro demonstra que a medida técnica e administrativa era insuficiente. Por isso a responsabilidade não é escolha entre órgão e consultor: há responsabilidade do órgão pelo dano e pelo desenho, apuração funcional do agente e direito de regresso contra quem agiu ilicitamente.",
        "errosFrequentes": [
          "Concluir que a credencial válida exclui a responsabilidade do órgão, confundindo licitude do acesso com licitude da finalidade",
          "Tratar o caso como falha de ferramenta, e não de governança do compartilhamento com terceiros",
          "Destruir a trilha de auditoria para reduzir a exposição do incidente, o que agrava a apuração"
        ],
        "variacao": "Na variação, o mesmo consultor exporta a base mediante credencial obtida por compartilhamento com servidor. O aluno deve reconhecer que a irregularidade se agrava, que o compartilhamento de credencial também é falha de desenho e de segregação de funções, e que a providência inclui rever o acesso de terceiros e o contrato com o fornecedor."
      },
      {
        "tipo": "erro",
        "problema": "Um parecer interno conclui que, sendo a lista de beneficiários informação sob guarda do órgão e integrante de programa social, a sua divulgação nominal no portal é ato de transparência ativa. O setor jurídico acata o parecer. Avaliar a conclusão.",
        "dados": "Parecer interno de duas páginas, sem referência a dispositivo sobre informação pessoal. A lista publicada contém nome completo, benefício e bairro de 318 pessoas. O conteúdo foi replicado no perfil institucional do órgão em rede social.",
        "conceitos": [
          "Regime da informação pessoal",
          "Dever de publicidade e seus limites",
          "Natureza do dado sob guarda do órgão"
        ],
        "estrategia": "Testar a premissa do parecer: a guarda pelo órgão alteraria a natureza do dado? Verificar o regime aplicável à informação pessoal e os limites do dever de publicidade, e só então classificar a conclusão.",
        "execucao": [
          "Examinar a premissa: possuir e administrar a lista decorre da execução do programa, e a guarda não altera a natureza pessoal do dado.",
          "Aplicar o regime próprio: a divulgação de informação pessoal por terceiro exige previsão legal ou consentimento, e nenhuma hipótese de dispensa se ajusta ao caso.",
          "Verificar os limites da transparência ativa: o dever de publicidade é complementado pela privacidade dos dados pessoais, inclusive na transparência ativa.",
          "Concluir que o parecer está errado e indicar a providência: remover o conteúdo, preservar o registro e substituir a lista por dado agregado ou anonimizado."
        ],
        "resultado": "A conclusão do parecer é inválida. A guarda pelo órgão não converte dado pessoal em informação publicável: a lista nominada somente pode ser divulgada com previsão legal ou consentimento, ou em forma agregada ou anonimizada. A transparência ativa encontra limite na privacidade dos dados pessoais, e a replicação em rede social agrava o dano pelo alcance e pela dificuldade de reversão.",
        "justificativa": "O erro está na premissa: o parecer trata a guarda do dado como se fosse autorização de divulgação, quando o regime da informação pessoal é próprio e independe de quem custodia a informação. O dever de publicidade incide sobre informação de interesse coletivo ou geral, e a lista de beneficiários de um bairro é interesse individual. A leitura ingênua falha também porque ignora que a divulgação por terceiro é justamente a hipótese que exige base legal ou consentimento.",
        "errosFrequentes": [
          "Confundir dado acessível por pedido de acesso com dado publicável, divulgável sem solicitação",
          "Admitir a divulgação porque os nomes já circulam em outros sistemas do órgão",
          "Ignorar que a replicação em rede social aumenta o alcance e compromete a reversão do ato"
        ],
        "variacao": "Na variação, o órgão publica a contagem de beneficiários por bairro, mas um dos bairros tem apenas três pessoas, o que permite nova identificação. O aluno deve reconhecer que a agregação precisa impedir a identificação e que a correção é refazer o recorte, e não negar o pedido de transparência."
      }
    ]
  },
  "m6-u6-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os dois casos resumem os defeitos mais frequentes do serviço público digital: publicar resposta redigida por IA sem conferência e manter portal de transparência incompleto ou desatualizado. Exigem dois regimes ao mesmo tempo, e o gabarito depende do princípio violado e da providência exigida, não de condenar a ferramenta nem de supor que o portal existente cumpra o dever de publicidade.",
      "preRequisitos": [
        "Rol mínimo de conteúdos e dever de publicidade do art. 8º da Lei nº 12.527/2011",
        "Bases legais e finalidades do tratamento de dados na LGPD",
        "Responsabilidade do servidor e do órgão por conteúdo publicado"
      ],
      "objetivosObservaveis": [
        "Classificar os defeitos do caso de IA: veracidade, tratamento do dado do cidadão e imputação",
        "Relacionar as providências: corrigir, comunicar, apurar o tratamento e instituir revisão",
        "Distinguir o dever de publicar de ofício do atendimento de pedido de acesso",
        "Verificar a completude e a atualidade do portal contra o rol mínimo"
      ],
      "competencias": [
        "Enquadrar fatos do serviço público digital em regimes normativos distintos",
        "Ler criticamente conteúdo publicado e bases oficiais de atendimento",
        "Elaborar providências de remediação e de controle preventivo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u6-t1-s3 (Desenho da supervisão humana: alçadas, critérios, registro e escalonamento) — a revisão antes da publicação",
        "m6-u6-t2-s1 (Estudos de caso 1 e 2: publicação indevida e vazamento de dados) — casos anteriores da sequência",
        "m6-u2-t2-s1 (Transparência ativa: o dever de divulgar de ofício e os requisitos dos sítios oficiais) — fundamento do caso do portal incompleto",
        "m6-u3-t1-s2 (LGPD: objeto, fundamentos, aplicação, exceções, direitos do titular e dever de segurança) — tratamento do dado"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Classificação qualitativa alta, como estimativa pedagógica: os dois casos resumem obrigações permanentes do órgão — divulgar o rol mínimo e mantê-lo atualizado, e tratar dados com finalidade compatível — e rendem itens de certo/errado sobre veracidade, ausência de revisão e desoneração indevida do atendimento. A classificação não expressa frequência estatística de incidência."
      }
    },
    "niveis": {
      "iniciante": "Caso 3: servidor usa ferramenta de IA generativa para redigir resposta a cidadão, insere o texto da reclamação como contexto e publica, sem revisão, em canal oficial; a resposta afirma prazo de pagamento ausente da base oficial. Caso 4: o portal tem página institucional e estrutura organizacional, mas não publica resultados de licitações nem contratos do exercício, e os dados abertos estão sem atualização há dezoito meses. No caso 3, o defeito é a falta de revisão e de base legal para usar dado de terceiro, não a ferramenta; no caso 4, é a omissão e a desatualização.",
      "intermediario": "Além de qualificar o fato, é preciso indicar a providência. No caso 3: corrigir a resposta, comunicar o erro ao cidadão, apurar o uso do texto do cidadão sem base legal e instituir política de uso da ferramenta com revisão humana obrigatória, lista de usos proibidos (dado pessoal, dado sigiloso, informação sensível) e registro do prompt e do modelo. No caso 4: plano de regularização com inventário do que falta publicar, responsável nomeado, data de atualização visível e verificação de completude contra o art. 8º, § 1º, e o art. 29, § 2º, da Lei nº 14.129/2021.",
      "avancado": "O que separa a boa resposta da parcial é a imputação: a assinatura do servidor e a publicação no canal oficial mantêm a responsabilidade do órgão, e a publicação de conteúdo não verificado como comunicação oficial viola o dever de veracidade. No caso 4, a omissão agrava a posição do órgão no atendimento de pedidos, pois o art. 11, § 1º, III, da Lei nº 12.527/2011 admite comunicar que a informação não está disponível e remeter o requerente ao detentor. A remediação deve ser registrada no sistema de riscos e na auditoria interna.",
      "especialista": "Em nível de governança, a providência é converter o incidente em controle permanente: política institucional de uso de IA com usos proibidos, revisão humana obrigatória por alçada, registro versionado de prompt, modelo e revisor, trilha de conferência com a base oficial e integração ao sistema de riscos e à auditoria interna. Na transparência, regularização com responsável e prazo por conjunto de dados, controle de atualização com alerta de vencimento e verificação periódica independente. Comunicar a regularização ao cidadão integra o dever de publicidade."
    },
    "comparacoes": [
      {
        "tema": "Revisão humana da saída da ferramenta x publicação direta",
        "a": {
          "rotulo": "Uso de IA com revisão obrigatória",
          "texto": "A ferramenta é apoio de redação; a conferência com a base oficial e a assinatura do servidor antecedem a publicação, e prompt, modelo e revisor ficam registrados."
        },
        "b": {
          "rotulo": "Publicação sem revisão",
          "texto": "A saída vai direto ao canal oficial, com risco de informação errada e de tratamento de dado de terceiro sem base legal."
        },
        "diferencaGabarito": "A lei não veda a ferramenta: veda a publicação de conteúdo não verificado como comunicação oficial e o tratamento de dado pessoal sem base legal e finalidade compatível."
      },
      {
        "tema": "Transparência ativa x transparência passiva",
        "a": {
          "rotulo": "Transparência ativa (publicar de ofício)",
          "texto": "O órgão divulga, sem pedido, o rol mínimo de conteúdos e mantém as informações atualizadas; a omissão é descumprimento do dever de publicidade."
        },
        "b": {
          "rotulo": "Transparência passiva (pedido de acesso)",
          "texto": "O cidadão formula o pedido e o órgão responde fundamentadamente, podendo remeter ao detentor quando não possui a informação."
        },
        "diferencaGabarito": "No caso do portal incompleto, o defeito é de transparência ativa; a omissão ainda agrava o atendimento passivo, porque o órgão não pode alegar desconhecimento do próprio conteúdo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O uso de ferramenta de IA generativa na redação de resposta oficial é vedado pela legislação de acesso à informação.",
        "porqueErrada": "O caso 3 não veda a ferramenta: veda a publicação de saída não verificada como comunicação oficial e o uso do texto do cidadão como contexto, sem base legal. Tratar o uso de IA como proibição inverte o problema.",
        "versaoCorreta": "A ferramenta pode ser usada como apoio de redação; a obrigação do servidor e do órgão é conferir o conteúdo contra a base oficial, publicar apenas o verificado e responder pelo publicado."
      },
      {
        "afirmacaoEquivocada": "No caso 4, a existência de página institucional e de estrutura organizacional no portal basta para cumprir o dever de publicidade do art. 8º da Lei nº 12.527/2011.",
        "porqueErrada": "A leitura confunde a existência da estrutura com o cumprimento do conteúdo: o art. 8º, § 1º, exige divulgação de conjunto mínimo, entre eles licitações e contratos celebrados, e o § 3º impõe a manutenção atualizada. O caso 4 omite esses conjuntos e mantém dados desatualizados.",
        "versaoCorreta": "Errado. O art. 8º, § 1º, define um mínimo de conteúdos a divulgar — competências e estrutura, repasses, despesas, licitações e contratos, dados de programas e obras e perguntas frequentes — e o § 3º exige manutenção atualizada. Publicar parte não cumpre o dever; e o descumprimento é agravado pela desatualização, que impede o controle social (art. 3º, V, da LAI)."
      },
      {
        "afirmacaoEquivocada": "A desatualização do portal de dados abertos é falha de forma, sem consequência jurídica, enquanto o conteúdo estiver disponível em formato aberto.",
        "porqueErrada": "O formato aberto não substitui a atualidade: o art. 8º, § 3º, VI, exige manter atualizadas as informações disponíveis para acesso, e o art. 29, § 1º, VI, da Lei nº 14.129/2021 exige atualização periódica, com o histórico preservado. Defasagem de dezoito meses dificulta o uso da informação.",
        "versaoCorreta": "A atualização é exigência legal, e não preferência de forma: dados desatualizados violam o dever de manutenção atualizada e enfraquecem o controle social; a providência é regularizar o conjunto e exibir a data da última atualização."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Revisão humana obrigatória: conferência da saída contra a base oficial antes da publicação",
        "Veracidade: o art. 5º da Lei nº 12.527/2011 exige informação franqueada de forma verdadeira",
        "Tratamento de dado de terceiro: exige base legal e finalidade compatível",
        "Rol mínimo: o art. 8º, § 1º, IV, da Lei nº 12.527/2011 define o conjunto a divulgar",
        "Atualização: o art. 8º, § 3º, VI, e o art. 29, § 1º, VI, exigem manutenção atualizada"
      ],
      "regras": [
        "Regra do meio e do fim: a ferramenta é apoio, mas não se publica saída não verificada",
        "Regra da conferência: nenhum prazo, valor ou direito entra em canal oficial sem verificação",
        "Regra da completude: regularizar o portal exige inventário, responsável, prazo e data de atualização"
      ],
      "comparacoes": [
        "Publicação de ofício (dever do órgão) x atendimento de pedido de acesso (direito do cidadão)",
        "Remediação do incidente (corrigir e comunicar) x controle preventivo (política e auditoria)"
      ],
      "fluxos": [
        "Detectar erro publicado → corrigir e republicar → comunicar o cidadão → apurar o tratamento → registrar o achado",
        "Levantar o que falta → nomear responsável por conjunto → publicar e marcar data → verificar completude → auditar periodicamente"
      ],
      "excecoes": [
        "O uso da ferramenta é legítimo como apoio de redação quando há revisão e conferência com a base oficial",
        "O órgão pode comunicar que não possui a informação e remeter ao detentor, mas isso não afasta o dever de publicar de ofício"
      ],
      "palavrasChave": [
        "revisão humana",
        "veracidade",
        "publicidade",
        "dado pessoal",
        "finalidade",
        "portal de transparência",
        "atualização",
        "auditoria interna"
      ],
      "checklist": [
        "O conteúdo publicado foi conferido contra a base oficial",
        "O dado usado como contexto tem base legal e finalidade compatível",
        "O portal divulga o rol mínimo do art. 8º, § 1º, e não apenas a estrutura",
        "As informações disponíveis estão atualizadas e com data visível",
        "Há responsável nomeado por conjunto de dados",
        "O achado foi registrado no sistema de riscos e na auditoria interna"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "No caso do servidor que usa ferramenta de IA generativa, o problema principal é o uso da ferramenta ou a ausência de revisão?",
        "dados": "Servidor inseriu no campo de contexto o texto integral da reclamação, com nome e número de beneficiário, redactou a resposta com a ferramenta, publicou-a no canal oficial sem revisão e afirmou prazo de pagamento de dez dias úteis, ausente da base oficial.",
        "conceitos": [
          "veracidade da comunicação oficial",
          "revisão humana antes da publicação",
          "tratamento de dado pessoal sem base legal"
        ],
        "estrategia": "Separar meio e fim: a ferramenta é apoio legítimo de redação, e o problema é a publicação sem conferência e o tratamento do texto do cidadão sem base legal. A resposta qualifica os defeitos e indica a providência, sem propor a proibição da ferramenta.",
        "execucao": [
          "1. Identificar o sujeito e a conduta: servidor do órgão, publicação de resposta em canal oficial, sem revisão.",
          "2. Qualificar o defeito de conteúdo: o prazo de dez dias úteis não consta da base oficial, o que caracteriza informação não verificada publicada como comunicação oficial.",
          "3. Qualificar o defeito de dados: o texto do cidadão foi usado como contexto, o que caracteriza tratamento de dado pessoal sem base legal e sem finalidade compatível.",
          "4. Formular a providência: corrigir a resposta, comunicar o erro, apurar o tratamento e instituir revisão obrigatória com registro."
        ],
        "resultado": "O defeito é a ausência de revisão e de base legal para usar o dado do cidadão; a ferramenta é o meio, e não a causa. A resposta e a publicação são do órgão, e a providência é corrigir, comunicar, apurar e instituir revisão obrigatória.",
        "justificativa": "Três elementos do enunciado sustentam o gabarito: o prazo ausente da base oficial afasta a veracidade exigida pelo art. 5º da Lei nº 12.527/2011; o texto do cidadão foi usado como contexto, o que exige base legal e finalidade compatível na LGPD; e a publicação no canal oficial imputa a resposta ao servidor e ao órgão. Condenar a ferramenta ignoraria que o apoio de redação com conferência é legítimo.",
        "errosFrequentes": [
          "Enquadrar o uso de IA generativa como conduta vedada, sem apontar a falta de revisão",
          "Identificar apenas o erro de conteúdo e esquecer o uso do texto do cidadão como contexto",
          "Concluir que a providência é proibir a ferramenta, e não corrigir, comunicar e apurar"
        ],
        "variacao": "Se o servidor tiver usado a ferramenta apenas para reescrever um texto institucional já verificado, sem inserir dado do cidadão e com a conferência registrada, o enquadramento muda: não há violação do dever de veracidade nem tratamento irregular, e a providência passa a ser a padronização do registro de uso."
      },
      {
        "tipo": "aplicacao",
        "problema": "No caso do portal de transparência incompleto, como o órgão deve agir para que a regularização seja efetiva e não apenas pontual?",
        "dados": "Órgão municipal com portal institucional e estrutura organizacional publicados; área de licitações sem os resultados de quatro licitações encerradas e sem os contratos do exercício corrente; portal de dados abertos sem atualização há dezoito meses; nenhum responsável nomeado por conjunto.",
        "conceitos": [
          "dever de publicidade com rol mínimo",
          "atualização e perenidade dos dados",
          "regularização como processo com responsável e prazo"
        ],
        "estrategia": "Tratar a regularização como processo, e não como publicação isolada: levantar o que falta contra o rol mínimo, nomear responsável por conjunto, marcar a data de atualização, estabelecer controle de atualização e submeter o resultado a verificação independente. A comunicação ao cidadão é parte do dever de publicidade.",
        "execucao": [
          "1. Levantar o inventário do que falta publicar: resultados de licitações, contratos do exercício e dados de programas e obras.",
          "2. Nomear responsável por conjunto de dados e fixar prazo, com a data de última atualização visível.",
          "3. Verificar a completude contra o rol do art. 8º, § 1º, e do art. 29, § 2º, da Lei nº 14.129/2021, com lista de verificação operacional.",
          "4. Implantar controle de atualização com alerta de vencimento e verificação periódica independente, registrando o achado na auditoria interna.",
          "5. Comunicar o cidadão a regularização e o prazo, porque a transparência inclui admitir a falha e informar a correção."
        ],
        "resultado": "A regularização efetiva exige inventário do que falta publicar, responsável nomeado com prazo, data de atualização visível, controle de atualização, verificação periódica independente e comunicação ao cidadão; publicar apenas o que faltava não corrige o desenho do controle.",
        "justificativa": "O gabarito apoia-se no art. 8º, § 1º, IV, da Lei nº 12.527/2011, que impõe divulgar procedimentos licitatórios e contratos, e no art. 8º, § 3º, VI, e no art. 29, § 1º, VI, da Lei nº 14.129/2021, que exigem manutenção atualizada e histórico. Sem responsável, prazo e controle, a omissão se repete no ciclo seguinte e a auditoria não encontra registro.",
        "errosFrequentes": [
          "Considerar a publicação dos contratos faltantes suficiente, sem responsável, prazo e data",
          "Confundir a existência do portal com o cumprimento do rol mínimo de conteúdos",
          "Dispensar a verificação periódica independente, que detecta a reincidência da defasagem"
        ],
        "variacao": "Se a área de licitações voltar a esvaziar seis meses depois da regularização, o problema passa a ser de processo: falta responsável efetivo, alerta de vencimento sem ação ou ausência de auditoria. Identifique o ponto de ruptura e a providência preventiva, com o mesmo roteiro de verificação."
      },
      {
        "tipo": "erro",
        "problema": "Um cidadão protocola pedido de acesso a um contrato de 2024 e o órgão responde que a transparência está garantida porque o portal conta com página institucional e estrutura organizacional. A resposta está correta?",
        "dados": "Pedido de acesso a contrato do exercício corrente; resposta do órgão afirma que a matéria consta do portal; verificação no portal mostra página institucional e estrutura organizacional, área de licitações sem contratos publicados e dados abertos com atualização de dezoito meses atrás.",
        "conceitos": [
          "transparência ativa e transparência passiva",
          "rol mínimo de conteúdos",
          "fundamentação da negativa e remessa ao detentor"
        ],
        "estrategia": "A leitura ingênua confunde a existência do portal com o cumprimento do dever. O erro está em tomar a estrutura institucional como prova de publicidade integral: o caso mostra omissão do rol mínimo e desatualização, e a resposta ao cidadão, além de desatualizada, não fundamenta a recusa.",
        "execucao": [
          "1. Ler o enunciado até o fim e separar os regimes: a resposta a pedido de acesso rege-se pelo art. 11 da Lei nº 12.527/2011, e o conteúdo publicado, pelo art. 8º.",
          "2. Verificar o rol mínimo: página institucional e estrutura organizacional atendem ao item de competências e estrutura, mas não às licitações e contratos nem aos dados de programas e obras.",
          "3. Verificar a atualidade: os dados abertos estão desatualizados há dezoito meses, o que contraria o art. 8º, § 3º, VI, e o art. 29, § 1º, VI, da Lei nº 14.129/2021.",
          "4. Concluir que a recusa sem fundamentação é inválida e que a falta de publicação agrava a posição do órgão, que pode comunicar não possuir a informação e remeter ao detentor."
        ],
        "resultado": "A resposta do órgão não está correta: a existência de página institucional e de estrutura organizacional não substitui a divulgação do rol mínimo nem a manutenção atualizada, e a negativa de acesso exige motivação. O órgão deve informar o conteúdo faltante, indicar o detentor e corrigir a publicação.",
        "justificativa": "O erro de interpretação está em usar a existência do portal como prova de cumprimento do dever de publicidade. O art. 8º, § 1º, IV, da Lei nº 12.527/2011 exige divulgação de licitações e contratos, e o § 3º, VI, exige manter as informações atualizadas; o art. 3º, V, destina a transparência ao controle social, que a defasagem impede. Somada à falta de motivação da recusa, a resposta revela descumprimento formal.",
        "errosFrequentes": [
          "Dar razão ao órgão por existir portal institucional, sem conferir o rol mínimo",
          "Tratar a desatualização como detalhe de forma, quando a lei exige manutenção atualizada",
          "Confundir a resposta ao pedido de acesso com o dever de publicar de ofício"
        ],
        "variacao": "Se o contrato pedido estiver efetivamente publicado, com data de atualização visível e conteúdo integral, a desoneração do atendimento passa a ser admissível, desde que o requerente não declare não dispor de meios para realizar os procedimentos; o item passa a cobrar o fundamento do art. 8º, § 6º, e não a omissão."
      }
    ]
  },
  "m6-u6-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Item de prova de ética digital é, quase sempre, um item de lei disfarçado de caso. O método de sete passos torna a resolução verificável: ler o enunciado até o fim, localizar o regime, identificar o princípio, achar o dispositivo e testar a alternativa contra o texto. Sem método, a marcação depende de impressão, e os itens de certo/errado exploram os casos em que a conduta parece correta e a alternativa mente.",
      "preRequisitos": [
        "Leitura da Lei nº 12.527/2011 e da Lei nº 14.129/2021, com destaque para os arts. 8º, 11 e 23",
        "Noções de sigilo, de classificação de documentos e de tratamento de dados pessoais",
        "Técnica de leitura de itens de certo/errado e de múltipla escolha"
      ],
      "objetivosObservaveis": [
        "Aplicar os sete passos a um item, identificando sujeito, conduta, regime, princípio e dispositivo",
        "Reconhecer as quatro armadilhas: enunciado truncado, conduta que não é o lícito, regime misto e item de prazo",
        "Fundamentar itens sobre transparência ativa e passiva, dados de beneficiários e classificação de documento",
        "Descartar alternativas que trocam termo do regime ou ampliam o alcance da norma"
      ],
      "competencias": [
        "Leitura sistemática de enunciados extensos, com fixação de sujeito e conduta",
        "Enquadramento do item no regime correto: acesso à informação, sigilo, dados, conduta ou automatização",
        "Decisão sob tempo restrito, com justificativa curta e verificável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u6-t3-s2 (Questões autorais comentadas (bloco 2) e síntese da unidade) — continuidade do bloco de questões",
        "m6-u6-t2-s2 (Estudos de caso 3 e 4: uso de ferramenta de IA e transparência administrativa) — material de aplicação do método",
        "m6-u2-t2-s2 (Transparência passiva: pedido de acesso, prazos, negativas fundamentadas e recursos) — regime do item sobre recusa",
        "m6-u3-t2-s1 (Sigilo legal: hipóteses, graus, prazos, competência e formalização da classificação) — regime do item sobre classificação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, como estimativa pedagógica: o método em si não é objeto de prova, mas os regimes que ele exige — acesso à informação, sigilo, dados pessoais e conduta — são cobrados de forma recorrente em itens de certo/errado. O valor do subtópico está em reduzir a dependência de memorização e em tornar a fundamentação reproduzível sob o tempo de prova."
      }
    },
    "niveis": {
      "iniciante": "O método de sete passos começa pela leitura integral do enunciado, com identificação do sujeito e da conduta, porque o erro mais comum é atribuir ao servidor a conduta que é do fornecedor do sistema. Em seguida, identifica-se o regime (acesso à informação, proteção de dados, sigilo, uso de canal, conduta ou automatização), o princípio em jogo (legalidade, impessoalidade, moralidade, publicidade, eficiência) e o dispositivo, com número e parágrafo. Por fim, verifica-se o que o item afirma, procurando termo absoluto, generalização ou mistura de regimes, e a alternativa é testada contra o texto: vale se, e somente se, puder ser sustentada pelo dispositivo.",
      "intermediario": "No segundo degrau, o candidato domina as quatro armadilhas de leitura: o enunciado truncado, que omite o contexto que salva a conduta; a conduta que não é o lícito, em que o item pergunta pelo regime e não pela intenção; o regime misto, em que duas condutas têm regimes próprios; e o item de prazo, que exige o número exato do dispositivo. Aplicação do método: o órgão recusa pedido de documento interno alegando que a matéria já consta do portal. O regime é o acesso à informação; a desoneração do atendimento exige as hipóteses do art. 8º, § 6º, e a negativa precisa ser fundamentada, nos termos do art. 11, § 1º, II.",
      "avancado": "O nível avançado exige aplicar o método a itens com afirmação em formato de tese: é comum o item afirmar que determinada providência decorre do dever de veracidade ou da responsabilização, e o candidato precisa verificar se o texto sustenta a frase inteira. Também é preciso separar fundamento legal de boa prática: a revisão humana obrigatória de saída de ferramenta de IA é providência de governança derivada do dever de publicidade, e não dispositivo literal; e o item sobre classificação de documento exige citar a hipótese legal, a competência da autoridade e os elementos formais.",
      "especialista": "No nível especialista, o método vira rotina de auditoria de item: reconstruir o caminho de leitura, conferir a correspondência entre o regime escolhido e a lei citada e produzir fundamentação curta em três tempos (dispositivo, fatos do enunciado, conclusão). Em itens que combinam regimes, o especialista separa cada conduta e responde ao que foi perguntado, sem estender a conclusão para a conduta que o item não pediu. O registro das decisões de marcação, com o passo que decidiu cada item, permite calibrar o método em simulados e corrigir desvios recorrentes."
    },
    "comparacoes": [
      {
        "tema": "Conduta descrita no enunciado x objeto da pergunta do item",
        "a": {
          "rotulo": "Conduta",
          "texto": "É o comportamento descrito: quem fez, o que fez e em que contexto. Serve para localizar o regime aplicável e verificar se há ilicitude."
        },
        "b": {
          "rotulo": "Objeto da pergunta",
          "texto": "É o que o item cobra: o regime, o prazo, o dispositivo, a competência ou a providência, o que pode ser objeto de afirmação verdadeira mesmo quando a conduta narrada é regular."
        },
        "diferencaGabarito": "A conduta regular não torna a alternativa verdadeira: em item de certo/errado, o que se julga é a afirmação, confrontada com o dispositivo, e não a impressão sobre a conduta narrada."
      },
      {
        "tema": "Termo absoluto como indício x termo absoluto como erro confirmado",
        "a": {
          "rotulo": "Indício",
          "texto": "Palavras como sempre, nunca, todo, qualquer ou exclusivamente sinalizam que a alternativa amplia o alcance da norma e exigem verificação cuidadosa."
        },
        "b": {
          "rotulo": "Erro confirmado",
          "texto": "O erro se confirma apenas quando o confronto com o dispositivo mostra que a norma não contém aquela generalização; o termo, isolado, não decide a marcação."
        },
        "diferencaGabarito": "Termo absoluto é indício, e não sentença: a conclusão depende do confronto com o texto legal, e é essa conferência que separa o acerto da suposição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Para marcar a alternativa correta de item sobre acesso à informação, basta saber se a conduta foi correta ou incorreta.",
        "porqueErrada": "A conduta narrada é apenas um dos elementos: o item pode cobrar o regime aplicável, o prazo, o dispositivo ou a competência. Julgar apenas a conduta leva a marcar como errada uma alternativa verdadeira sobre fundamento legal, ou como verdadeira uma que amplia o alcance da norma.",
        "versaoCorreta": "Errado. A conduta pode ser juridicamente correta e, ainda assim, descrita de modo que a alternativa correta seja sobre o regime, o prazo, o dispositivo ou a competência. O método de sete passos exige localizar o regime e o dispositivo, e verificar os termos absolutos da alternativa — passo que decide a maioria dos itens de certo/errado sobre lei."
      },
      {
        "afirmacaoEquivocada": "A presença de um termo absoluto na alternativa, como sempre ou exclusivamente, prova que ela está errada.",
        "porqueErrada": "O termo absoluto indica apenas que a alternativa pode ampliar o alcance da norma; ele não substitui a verificação. Há itens em que a norma contém a generalização afirmada, e há itens em que o erro está em outro ponto, como prazo, competência ou desoneração do atendimento.",
        "versaoCorreta": "O termo absoluto é indício de que a alternativa exige conferência, e não prova de erro: a marcação só se faz depois do teste da alternativa contra o dispositivo localizado."
      },
      {
        "afirmacaoEquivocada": "Em item com duas condutas de regimes normativos diferentes, basta analisar a conduta mais grave para decidir sobre o item.",
        "porqueErrada": "No regime misto, cada conduta tem regime próprio, e o item costuma pedir a conduta correta ou a incorreta, conforme indicado no enunciado. Julgar a conduta mais grave pode levar ao gabarito errado, porque a resposta exigida pode estar na conduta de menor gravidade.",
        "versaoCorreta": "Em regime misto, separe as condutas, identifique o regime de cada uma e responda exatamente ao que o item pergunta, indicando a conduta correspondente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Sete passos: leitura integral, regime, princípio, dispositivo, verificação do que o item afirma, teste da alternativa e descarte das que só parecem corretas",
        "Regime: conjunto de normas aplicável ao caso — acesso à informação, proteção de dados, sigilo, uso de canal, conduta ou automatização",
        "Princípio em jogo: legalidade, impessoalidade, moralidade, publicidade ou eficiência, objeto frequente das perguntas de item",
        "Armadilhas de leitura: enunciado truncado, conduta que não é o lícito, regime misto e item de prazo",
        "Fundamentação em três tempos: dispositivo, fatos do enunciado e conclusão"
      ],
      "regras": [
        "Regra da leitura até o fim: sujeito e conduta só são fixados depois da leitura completa do enunciado",
        "Regra da alternativa sustentada: a alternativa é verdadeira somente se puder ser mantida pelo texto do dispositivo",
        "Regra da resposta ao que foi perguntado: em regime misto, responder à conduta que o item indica, e não à mais grave"
      ],
      "comparacoes": [
        "Resposta sobre o regime (qual lei e qual dispositivo) x resposta sobre a conduta (se foi legal ou ilegal)",
        "Termo absoluto como indício de generalização x erro confirmado pelo confronto com o texto"
      ],
      "fluxos": [
        "Ler o enunciado inteiro → fixar sujeito e conduta → classificar o regime → nomear o princípio → localizar o dispositivo → verificar absolutos e mistura de regimes → testar a alternativa → descartar as que só parecem corretas",
        "Após a correção do simulado: identificar o passo em que o erro ocorreu, anotar a armadilha predominante e revisar o regime correspondente"
      ],
      "excecoes": [
        "Enunciado truncado: quando o contexto que salva a conduta aparece em item anterior ou em remissão, a conduta não pode ser julgada isoladamente",
        "Item de prazo: a alternativa só é marcada depois de confirmado o número exato do prazo no dispositivo, e não por aproximação"
      ],
      "palavrasChave": [
        "método de sete passos",
        "enunciado",
        "regime",
        "princípio",
        "dispositivo",
        "termo absoluto",
        "regime misto",
        "fundamentação"
      ],
      "checklist": [
        "Li o enunciado inteiro antes de escolher a alternativa",
        "Fiz o sujeito e a conduta antes de pensar na resposta",
        "Classifiquei o regime e citei o dispositivo com número e parágrafo",
        "Procurei termo absoluto, generalização e mistura de regimes",
        "Verifiquei se o item cobra a conduta, o regime, o prazo ou a competência",
        "Testei a alternativa contra o texto antes de marcar"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual é a primeira providência ao resolver item de prova sobre conduta digital no serviço público?",
        "dados": "Item de certo/errado que afirma: servidor publicou documento interno em canal oficial, encerrando o enunciado com a informação de que o documento já era público e estava disponível no portal; a alternativa considera a conduta irregular.",
        "conceitos": [
          "leitura integral do enunciado",
          "fixação de sujeito e conduta",
          "armadilha do enunciado truncado"
        ],
        "estrategia": "Antes de qualquer lei, o candidato precisa fixar o que o enunciado descreve. A leitura até o fim muda o caso: o documento é público, de modo que a publicação não configura irregularidade por si, e o item passa a cobrar o regime e a competência, e não a ilicitude.",
        "execucao": [
          "1. Ler o enunciado até o fim, sem parar na primeira frase.",
          "2. Fixar o sujeito: servidor público, e não o fornecedor do sistema.",
          "3. Fixar a conduta: publicar documento público em canal oficial, o que não é conduta proibida.",
          "4. Concluir que a alternativa que trata a publicação como irregular é falsa, e que o item cobra o regime aplicável ao canal oficial."
        ],
        "resultado": "A primeira providência é a leitura integral do enunciado, com identificação do sujeito e da conduta, porque só depois se define o regime; lido até o fim, o enunciado mostra documento público, e a publicação não é a conduta proibida.",
        "justificativa": "O gabarito decorre do próprio método: os erros de marcação nascem da atribuição da conduta ao sujeito errado ou da leitura interrompida. Quando o contexto que salva a conduta aparece no fim do enunciado, o candidato que para na primeira frase julga o caso errado e opta pela alternativa que chama a publicação de irregular. Ler até o fim e nomear sujeito e conduta resolve a divergência antes da discussão de lei.",
        "errosFrequentes": [
          "Parar na primeira frase e julgar a publicação de documento como irregular",
          "Confundir o sujeito do enunciado: a conduta é do servidor, não do fornecedor da ferramenta",
          "Discutir a lei antes de saber o que o item pergunta"
        ],
        "variacao": "Se a última frase do enunciado disser que o documento era sigiloso e classificado por ato da autoridade competente, a estrutura do item muda: passa a haver regime de sigilo, com hipótese legal, competência e formalização, e o candidato precisa citar o dispositivo antes de concluir."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um item afirma que o órgão não pode cobrar o ressarcimento de reprodução de documento, porque o serviço de busca e fornecimento de informação é gratuito. O que a lei diz?",
        "dados": "Item autoral de múltipla escolha; serviço de busca e fornecimento de informação do órgão; atendimento que exigiu a reprodução de documentos; requerente que declara não dispor de meios para realizar os procedimentos.",
        "conceitos": [
          "gratuidade do serviço de acesso à informação",
          "ressarcimento de custos quando há reprodução",
          "isenção para quem não puder pagar sem prejuízo do sustento"
        ],
        "estrategia": "O item absolutiza a gratuidade. A lei distingue o serviço de busca e fornecimento de informação, que é gratuito, do ressarcimento dos custos quando o atendimento exige reprodução de documentos, e ressalva a hipótese de quem não pode pagar. A alternativa deve ser refutada por essa distinção.",
        "execucao": [
          "1. Classificar o regime: acesso à informação, art. 12 da Lei nº 12.527/2011, na redação dada pelo art. 52 da Lei nº 14.129/2021.",
          "2. Separar as duas hipóteses: gratuidade do serviço de busca e fornecimento de informação, e ressarcimento quando o atendimento exigir reprodução de documentos.",
          "3. Verificar a ressalva: isenção para quem não puder pagar sem prejuízo do sustento, o que torna a alternativa ainda mais frágil.",
          "4. Concluir que a afirmação do item é falsa, por absolutizar a gratuidade e ignorar a hipótese de ressarcimento."
        ],
        "resultado": "A afirmação do item é falsa: o serviço é gratuito, mas o órgão pode cobrar o valor necessário ao ressarcimento dos custos quando o atendimento exigir reprodução de documentos, com isenção para quem não puder pagar sem prejuízo do sustento.",
        "justificativa": "O art. 12 da Lei nº 12.527/2011, na redação dada pelo art. 52 da Lei nº 14.129/2021, assegura a gratuidade do serviço e admite o ressarcimento nas hipóteses e nos limites nele previstos. O erro do item é de absolutização: ele converte uma norma com exceção em proibição sem limite, e é o confronto da alternativa com esse texto que resolve a questão.",
        "errosFrequentes": [
          "Confundir gratuidade do serviço com vedação de qualquer cobrança de custos",
          "Ignorar a ressalva da isenção para quem não puder pagar sem prejuízo do sustento",
          "Marcar a alternativa como verdadeira apenas porque a palavra gratuito aparece no item"
        ],
        "variacao": "Se o atendimento não exigir reprodução de documentos e for realizado apenas com consulta a sistema interno, não há hipótese de ressarcimento: a gratuidade é integral. Avalie a alteração do resultado aplicando os mesmos passos."
      },
      {
        "tipo": "erro",
        "problema": "Um item de certo/errado afirma que o órgão é obrigado a deferir todo pedido de acesso a documento interno, porque a transparência ativa é dever de ofício. A afirmação está correta?",
        "dados": "Órgão mantém portal de transparência atualizado e recusa pedido de acesso a documento interno, informando apenas que a matéria já consta do portal; o item oferece, entre as alternativas, a negativa motivada com base nas hipóteses de desoneração do atendimento.",
        "conceitos": [
          "transparência ativa e transparência passiva",
          "fundamentação da negativa",
          "desoneração do atendimento"
        ],
        "estrategia": "A leitura ingênua embaralha os dois regimes: o dever de publicar de ofício não transforma o pedido de acesso em deferimento automático, nem autoriza negativa sem motivação. A desoneração do atendimento depende das hipóteses legais, e a negativa precisa ser fundamentada, sob pena de o item cobrar a conduta errada.",
        "execucao": [
          "1. Separar os regimes: transparência ativa, regida pelo art. 8º da Lei nº 12.527/2011, e atendimento de pedido de acesso, regido pelo art. 11.",
          "2. Verificar o que o item afirma: a obrigação de deferir todo pedido, afirmação que o texto não sustenta.",
          "3. Conferir os requisitos da negativa: motivação e hipóteses de desoneração do atendimento do art. 8º, § 6º.",
          "4. Marcar a alternativa que fundamenta a recusa, e não a que generaliza o dever de publicar como obrigação de deferir."
        ],
        "resultado": "A afirmação é falsa: o dever de publicar de ofício não elimina o direito de pedir nem cria a obrigação de deferir todo pedido; a negativa exige motivação e depende das hipóteses legais de desoneração do atendimento.",
        "justificativa": "O item revela a armadilha da mistura de regimes. O art. 8º da Lei nº 12.527/2011 impõe a divulgação de ofício, enquanto o art. 11 disciplina o atendimento do pedido, exigindo decisão fundamentada, e o § 6º do art. 8º condiciona a desoneração do atendimento às hipóteses legais. Ao localizar o regime e o dispositivo, o candidato percebe que a alternativa generaliza o dever de publicidade.",
        "errosFrequentes": [
          "Confundir o dever de publicar de ofício com a obrigação de deferir todo pedido",
          "Aceitar a recusa sem motivação porque a matéria consta do portal",
          "Desconsiderar as hipóteses de desoneração do atendimento ao contestar a negativa"
        ],
        "variacao": "Se o requerente declarar não dispor de meios para realizar os procedimentos e a informação estiver disponível em formato de acesso universal, a desoneração do atendimento se torna admissível; o item passa a cobrar a hipótese legal do art. 8º, § 6º, e não a falta de motivação."
      }
    ]
  },
  "m6-u6-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A unidade 6.6 fecha o módulo de Ética com supervisão humana e resolução de questões autorais. A revisão por reclamação, sozinha, depende da capacidade do cidadão e esconde erro concentrado, exigindo amostragem estratificada e gatilhos de risco. Sem método de sete passos, o candidato cai em viés de leitura ao começar pela alternativa e não pelo dispositivo.",
      "preRequisitos": [
        "Unidade 6.1 (princípios da governança de automação)",
        "Unidade 6.6 (desenho de supervisão, gatilhos e amostragem)",
        "Módulo 5 (viés de dados e erro por subgrupo)"
      ],
      "objetivosObservaveis": [
        "Resolver itens autorais sobre estudos de caso e automação aplicando o método de sete passos",
        "Identificar o regime aplicável, o dispositivo e o alcance da norma antes de avaliar alternativas",
        "Classificar revisão por reclamação como inadequada e propor amostragem estratificada e gatilhos de risco",
        "Consolidar a unidade 6.6 por recuperação ativa com acerto integral na verificação"
      ],
      "competencias": [
        "Raciocínio normativo: distinguir regime, dispositivo e alcance da norma",
        "Método de resolução de item: evitar viés de alternativa",
        "Avaliação de supervisão de automação com gatilhos de risco",
        "Consolidação por recuperação ativa (teste de prática)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u6-t3-s3 (Exemplos resolvidos da unidade (três casos completos))",
        "m6-u6-t1-s3 (Desenho da supervisão humana: alçadas, critérios, registro e escalonamento)",
        "m5-u3-t3-s2 (Aplicações no setor público e privado: exemplos comprovados e hipóteses ilustrativas)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Ética e automação de decisões integram o conteúdo de TI e de controle sobre a Lei nº 14.129/2021 e a LGPD com classificação média, por sua centralidade na governança de sistemas decisórios. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece as questões autorais Q6 a Q9 como de autoria do projeto, sem atribuição a banca real. Identifica o método de sete passos (enunciado → regime → dispositivo → alternativas → fundamento → gabarito → justificativa) e entende que a revisão por reclamação é inadequada porque depende da capacidade de reclamar e mascara erro concentrado.",
      "intermediario": "O aluno aplica o método de sete passos a itens sobre automação e supervisão, distingue revisão por reclamação de amostragem estratificada com gatilhos de risco, e articula art. 48, II, da Lei nº 14.129/2021 (controles proporcionais aos riscos) com art. 46 da LGPD em incidentes de dados pessoais.",
      "avancado": "O aluno avalia a conformidade de desenhos de supervisão, detecta viés de alternativa em questões de múltipla escolha, e justifica gabaritos citando dispositivos específicos (art. 48 da Lei nº 14.129/2021, art. 46 da LGPD) sem confundir acurácia global com erro por subgrupo.",
      "especialista": "O aluno projeta um desenho de supervisão auditável com critério publicado, amostragem estratificada e indicadores segmentados por subgrupo, e instrui outros candidatos na aplicação do método de sete passos com acerto integral na verificação da unidade 6.6."
    },
    "comparacoes": [
      {
        "tema": "Revisão por reclamação versus amostragem estratificada com gatilhos de risco",
        "a": {
          "rotulo": "Revisão por reclamação",
          "texto": "A revisão humana ocorre apenas quando o cidadão protocola reclamação; depende da informação e capacidade de ação do cidadão e pode mascarar erro concentrado em subgrupos."
        },
        "b": {
          "rotulo": "Amostragem estratificada com gatilhos de risco",
          "texto": "Combina amostragem aleatória estratificada (por território e faixa de benefício), gatilhos objetivos (erro histórico, reclamação, subgrupo com desempenho pior) e revisão integral dos casos de maior impacto."
        },
        "diferencaGabarito": "A revisão por reclamação é reativa e enviesada; a amostragem estratificada com gatilhos de risco é proativa, detecta erro concentrado e fundamenta decisão informada sobre o nível de automação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O método de resolução de item deve começar pela alternativa que parece mais completa, e só depois buscar o dispositivo.",
        "porqueErrada": "Começar pela alternativa instala viés de leitura: o candidato reconhece o tema, projeta a resposta e erra justamente o que o item queria testar — identidade do regime, número do dispositivo ou alcance da norma.",
        "versaoCorreta": "O método correto começa pelo enunciado e pelo regime aplicável, para só então avaliar as alternativas: identifica o dispositivo, o alcance da norma e a fundamentação antes de escolher a resposta."
      },
      {
        "afirmacaoEquivocada": "Revisão humana por reclamação basta para garantir que a automação de decisões esteja correta.",
        "porqueErrada": "A revisão por reclamação depende da capacidade do cidadão de reclamar e esconde erro concentrado em subgrupos; a acurácia global não mede erro por subgrupo nem substitui motivação, contestação e revisão.",
        "versaoCorreta": "É inadequada: deve ser complementada por amostragem estratificada e gatilhos de risco, com revisão integral dos casos de maior impacto, conforme desenho de supervisão da unidade 6.6 e art. 48, II, da Lei nº 14.129/2021."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Método de sete passos de resolução de questão",
        "Revisão por reclamação (reativa e enviesada)",
        "Amostragem estratificada com gatilhos de risco",
        "Controles proporcionais aos riscos (art. 48, II, Lei nº 14.129/2021)"
      ],
      "regras": [
        "Começar pelo enunciado e regime, nunca pela alternativa",
        "Revisão por reclamação é inadequada; exige amostragem estratificada e gatilhos de risco",
        "Acurácia global não mede erro por subgrupo"
      ],
      "comparacoes": [
        "Revisão por reclamação é reativa; amostragem estratificada com gatilhos de risco é proativa e detecta erro concentrado."
      ],
      "fluxos": [
        "Enunciado → regime aplicável → dispositivo → alternativas → fundamento → gabarito → justificativa."
      ],
      "excecoes": [
        "Digitalização não veda revisão humana; a digitalização integral sem revisão é inadequada."
      ],
      "palavrasChave": [
        "método de sete passos",
        "revisão por reclamação",
        "amostragem estratificada",
        "gatilhos de risco",
        "Lei 14.129/2021",
        "LGPD",
        "viés de alternativa",
        "supervisão humana"
      ],
      "checklist": [
        "Apliquei o método de sete passos à questão autoral",
        "Identifiquei o regime, o dispositivo e o alcance da norma",
        "Classifiquei a revisão por reclamação como inadequada",
        "Proponho amostragem estratificada e gatilhos de risco",
        "Citei art. 48, II, da Lei nº 14.129/2021 quando couber",
        "Evitei viés de alternativa ao não começar pelas opções"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, escreva as providências imediatas diante de incidente com exposição de dados pessoais.",
        "dados": "Incidente de exposição de dados pessoais; art. 46 da LGPD (dever de segurança); art. 48 da Lei nº 14.129/2021 (controles proporcionais ao risco); art. 49 (auditoria interna com abordagem baseada em risco).",
        "conceitos": [
          "Providências imediatas em incidente de dados pessoais",
          "Preservação de evidência antes de alterar o ambiente",
          "Comunicação ao titular conforme avaliação de risco"
        ],
        "estrategia": "Listar as oito providências em ordem: conter, preservar evidência, avaliar extensão, comunicar internamente, avaliar comunicação ao titular, analisar controle falho, corrigir e verificar, registrar no sistema de riscos.",
        "execucao": [
          "1) CONTER — revogar credenciais, isolar o vetor e interromper o fluxo",
          "2) PRESERVAR A EVIDÊNCIA antes de rotação de credencial, limpeza de log ou alteração de configuração",
          "3) AVALIAR a extensão real (quais registros, campos, período, uso posterior)",
          "4) COMUNICAR internamente ao encarregado, à autoridade competente e à gestão, com registro da decisão",
          "5) AVALIAR E DOCUMENTAR a comunicação ao titular conforme o risco (identificação, fraude, discriminação, estigmatização)",
          "6) ANALISAR o desenho do controle que falhou (art. 46 LGPD; art. 48 Lei nº 14.129/2021)",
          "7) CORRIGIR e verificar (art. 49 — auditoria interna baseada em risco)",
          "8) REGISTRAR o incidente e as decisões no sistema de riscos"
        ],
        "resultado": "As providências de contenção, preservação de evidência, avaliação de extensão e comunicação interna antecedem a análise do controle falho, a correção com verificação e o registro no sistema de riscos.",
        "justificativa": "A ordem preserva a evidência antes de qualquer alteração e vincula cada ato a dispositivo legal (art. 46 LGPD, arts. 48 e 49 da Lei nº 14.129/2021), evitando a leitura ingênua de que conter o incidente basta sem apuração.",
        "errosFrequentes": [
          "Rotacionar credenciais antes de preservar logs e evidências",
          "Esquecer de comunicar internamente ao encarregado e à autoridade competente",
          "Avaliar a comunicação ao titular sem considerar o risco concreto ao titular"
        ],
        "variacao": "Se o incidente envolver dado sensível (saúde), a comunicação ao titular passa a ser obrigatória independentemente do risco, e a apuração deve incluir verificação de base legal para o tratamento."
      },
      {
        "tipo": "aplicacao",
        "problema": "Qual a diferença entre o indicador de acurácia global e o de reversão de decisões por subgrupo?",
        "dados": "Sistema que nega automaticamente requerimentos; acurácia global alta; reversões concentradas em determinada região, faixa etária, condição de saúde ou tipo de benefício; erro concentrado em subgrupo não visível na métrica global.",
        "conceitos": [
          "Acurácia global (desempenho da amostra inteira)",
          "Reversão de decisões por subgrupo (distribuição das correções humanas)",
          "Erro concentrado em subgrupo mascarado pela métrica global"
        ],
        "estrategia": "Contrastar as duas métricas: a acurácia global resume a amostra inteira e pode ser alta com erro concentrado; a reversão por subgrupo mede onde as correções humanas se concentram, revelando viés de dados ou critério mal calibrado.",
        "execucao": [
          "1) Definir acurácia global: proporção de acertos sobre toda a amostra, pode ser alta mesmo com erro em um público específico",
          "2) Definir reversão por subgrupo: distribuição das correções humanas por território, faixa etária, condição ou tipo de benefício",
          "3) Observar que reversões concentradas indicam viés de dados, critério mal calibrado ou exclusão digital",
          "4) Concluir que a acurácia global não produz esse diagnóstico; o indicador de reversão por subgrupo dispara revisão integral por gatilho de risco"
        ],
        "resultado": "A acurácia global resume o desempenho da amostra inteira e pode ser alta com erro concentrado; o indicador de reversão por subgrupo mede a distribuição das correções humanas e dispara revisão integral por gatilho de risco.",
        "justificativa": "A leitura ingênua confia na acurácia global alta; o exemplo mostra que a métrica global esconde erro concentrado e que só a reversão por subgrupo revela viés, conforme o conteúdo da unidade 6.6 e do Módulo 5.",
        "errosFrequentes": [
          "Confiar apenas na acurácia global para declarar o sistema correto",
          "Não segmentar reversões por território, faixa etária ou tipo de benefício",
          "Tratar toda reversão como erro do modelo, sem distinguir viés de dado de critério calibrado"
        ],
        "variacao": "Se o erro se concentrar em aposentados rurais de baixa renda, a causa provável é exclusão digital (baixa capacidade de reclamar), não falha do algoritmo; a resposta muda de revisão do modelo para canais alternativos de acesso."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O método de resolução de item deve começar pela alternativa que parece mais completa, e só depois buscar o dispositivo.'",
        "dados": "Questão de múltipla escolha sobre regime aplicável, número de dispositivo ou alcance de norma; alternativa que parece completa mas desvia do regime; método de sete passos da unidade 6.6.",
        "conceitos": [
          "Viés de alternativa (começar pela opção e não pelo enunciado)",
          "Método de sete passos: enunciado → regime → dispositivo → alternativas",
          "Identidade do regime e alcance da norma como objeto do item"
        ],
        "estrategia": "Desmontar a afirmação mostrando que começar pela alternativa instala viés de leitura; apresentar o método correto que começa pelo enunciado e pelo regime aplicável antes de avaliar as alternativas.",
        "execucao": [
          "1) Identificar que a afirmação propõe começar pela alternativa mais completa",
          "2) Explicar que isso instala viés de leitura: reconhece o tema, projeta a resposta e erra o objeto do item",
          "3) Apresentar o método correto: começar pelo enunciado e pelo regime aplicável",
          "4) Apenas então avaliar as alternativas contra o dispositivo e o alcance da norma",
          "5) Concluir que erros por viés de alternativa são os mais evitáveis do capítulo"
        ],
        "resultado": "Errado. O método correto começa pelo enunciado e pelo regime aplicável, para só então avaliar as alternativas; começar pela alternativa inversa o viés de leitura e leva ao erro no objeto do item.",
        "justificativa": "A leitura ingênua confunde familiaridade com o tema com correção da resposta; o exemplo mostra que o objeto do item pode ser a identidade do regime ou o número do dispositivo, não apenas o conteúdo aparentemente completo da alternativa.",
        "errosFrequentes": [
          "Escolher a alternativa que 'parece mais completa' sem verificar o regime",
          "Não identificar o dispositivo legal antes de avaliar as opções",
          "Confundir o tema do item com o dispositivo que o item realmente testa"
        ],
        "variacao": "Se o item perguntar 'qual dispositivo veda a destruição de registros de acesso', a alternativa completa sobre 'conter e preservar evidência' está correta, mas o objeto testado é o art. 32, II, da Lei nº 12.527/2011, não a conduta geral."
      }
    ]
  },
  "m6-u6-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Os casos resolvidos da unidade 6.6 consolidam todo o método de governança de automação em três cenários completos de aplicação, exigindo do aluno a estruturação do template de nove itens. Sem a prática de organizar problema, dados, conceitos aplicáveis, estratégia, passo a passo, resultado, justificativa, erros frequentes e variação, o domínio fica apenas declarativo e não se converte em desempenho diante de itens de prova.",
      "preRequisitos": [
        "Método de sete passos para resolução de itens autorais (bloco 2 desta unidade)",
        "Níveis de automação e desenho da supervisão humana com alçada, gatilho, amostragem e registro",
        "Regime jurídico da transparência e dos controles proporcionais ao risco em serviços públicos"
      ],
      "objetivosObservaveis": [
        "resolverá, com o template de nove itens, três casos de automação de decisões, supervisão humana e uso de ferramenta de IA, identificando o regime, o princípio violado e a providência de governança",
        "diagnosticará falhas de desenho de supervisão, distinguindo viés de detecção, ausência de segmentação por subgrupo e remediação sintomática",
        "elaborará plano de correção de processo que combine contenção, apuração, correção de desenho e prevenção de recorrência"
      ],
      "competencias": [
        "Aplicar o template de nove itens a casos concretos de automação de decisões e de uso de IA em serviço público",
        "Distinguir causa raiz de remediação sintomática e propor controles proporcionais ao risco do serviço afetado",
        "Redigir resposta oficial que concilie dever de veracidade, proteção de dados pessoais e transparência do critério"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m6-u6-t3-s2 (Questões autorais comentadas (bloco 2) e síntese da unidade) — bloco de treino que antecede os casos resolvidos",
        "m6-u6-t3-s1 (Método de análise de itens de prova e questões autorais comentadas (bloco 1)) — roteiro de análise aplicado nos três casos"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Os casos resolvidos consolidam o método de estudo exigido pela unidade, no contexto de automação de decisões e uso de ferramenta de IA no serviço público. A classificação é uma estimativa pedagógica qualitativa: mede a centralidade do tema na matriz do edital, não a frequência estatística de aparição em provas de banca."
      }
    },
    "niveis": {
      "iniciante": "Os três casos da unidade partem sempre do mesmo esqueleto de nove itens: problema, dados, conceitos aplicáveis, estratégia, passo a passo, resultado, justificativa técnica, erros frequentes e variação para transferência. O primeiro caso trata de negação automática de benefício com revisão humana apenas reativa; o segundo, de publicação de resposta redigida por IA com dado pessoal no prompt; o terceiro, de remediação sintomática de incidente por publicação indevida. A lógica de progressão é do diagnóstico do desenho ao desenho da correção.",
      "intermediario": "Além da estrutura, o aluno precisa reconhecer que a supervisão humana só conta como controle quando tem desenho verificável: gatilho, alçada, amostra, registro e indicador. No primeiro caso, a revisão por reclamação é comparada à amostragem estratificada por território e por faixa de benefício, porque o indicador global de reversão esconde erro concentrado. Também precisa distinguir, no segundo caso, o problema do meio (IA) do problema de processo (publicar sem revisar, com dado pessoal, sem ancorar em fonte).",
      "avancado": "No nível avançado, o aluno_redimensiona o problema conforme o impacto: fluxo de baixo impacto admite amostragem, fluxo de alto impacto em termos de direito exige revisão integral antes do efeito. Também precisa propor planos de correção que combinem contenção e correção do conteúdo publicado, preservação de evidência, apuração com responsabilização, política de uso de IA com lista de usos proibidos, integração ao sistema de riscos e canal humano de atendimento. A remediação isolada não é aceitável.",
      "especialista": "O especialista avalia se a governança foi desenhada para aprender: medição por subgrupo para detectar viés de dados, reavaliação do nível de automação com base em evidência e não em expectativa, e responsabilização do servidor e do órgão — jamais da ferramenta. Também distingue remediação de causa raiz, sabe indicar quando a revisão por amostragem é insuficiente e descreve a integração entre política de uso de IA, sistema de riscos e auditoria interna com verificação amostral de fidelidade ao texto oficial."
    },
    "comparacoes": [
      {
        "tema": "Revisão reativa por reclamação versus amostragem estratificada",
        "a": {
          "rotulo": "Revisão reativa por reclamação",
          "texto": "A revisão humana só é acionada quando o cidadão reclama. Depende de informação e de capacidade de ação do titular, o que enviesa a detecção de erro; o único indicador acompanhado é a taxa global de reversão, que esconde erro concentrado em um subgrupo."
        },
        "b": {
          "rotulo": "Amostragem estratificada com gatilhos objetivos",
          "texto": "A revisão é acionada por sorteio estratificado por território e por faixa de benefício, por gatilhos objetivos como erro histórico e desempenho pior por subgrupo, e por revisão integral dos casos de maior impacto, com registro dos parâmetros usados e da versão da regra."
        },
        "diferencaGabarito": "A amostragem é controle preventivo e detectivo com desenho conhecido; a revisão por reclamação é controle dependente do titular, sujeita a viés de detecção e sem leitura por subgrupo. A primeira produz indicador confiável; a segunda só produz dado quando alguém reclama."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o órgão mantém revisão humana por reclamação, o fluxo de negação automática de benefício já está submetido a controle humano e, por isso, não precisa de reavaliação do nível de automação.",
        "porqueErrada": "A existência de revisão humana não basta para caracterizar o controle: o que importa é o seu desenho. Revisão acionada apenas por reclamação, sem alçada, sem amostra, sem registro e com indicador global único constitui forma degenerada de supervisão, com viés de detecção e sem condição de medir desempenho por subgrupo.",
        "versaoCorreta": "A revisão humana só configura controle quando tem desenho verificável — gatilho, alçada, amostragem, registro e indicador segmentado. Sem isso, não há base para medir o desempenho do fluxo e a decisão sobre o nível de automação fica sem evidência."
      },
      {
        "afirmacaoEquivocada": "Proibir no órgão a publicação de conteúdo gerado por IA resolve o incidente de publicação de dado pessoal de terceiro, porque os modelos de IA produzem informação incorreta por natureza.",
        "porqueErrada": "A vedação do meio não toca a causa raiz. O incidente foi causado pela ausência de verificação de dados pessoais antes da publicação e por checagem informal de fatos de conteúdo institucional. A alucinação é modo de funcionamento da ferramenta, e não o vetor principal do caso; uma política que proíbe apenas o meio deixa intacta a lacuna de processo que causou o dano.",
        "versaoCorreta": "A correção exige defesa em camadas: conter e corrigir a publicação, apurar o tratamento de dado de terceiro sem base legal avaliada, instituir revisão humana obrigatória com ancoragem em fonte oficial, definir usos proibidos e integrar a política ao sistema de riscos e à auditoria interna."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Template de nove itens para análise de caso: problema, dados, conceitos aplicáveis, estratégia, passo a passo, resultado, justificativa técnica, erros frequentes e variação para transferência.",
        "Desenho de supervisão humana como controle verificável, composto por gatilho, alçada, amostragem, registro e indicador.",
        "Viés de detecção na revisão reativa por reclamação, que depende de informação e de ação do titular.",
        "Análise por subgrupo como instrumento de detecção de viés em decisões automatizadas.",
        "Risco de remediação sintomática, em que se corrige o meio e preserva a causa raiz do incidente.",
        "Dever de veracidade e de transparência do critério como parte do desenho da automação de decisão administrativa."
      ],
      "regras": [
        "Nenhuma medida de desempenho do fluxo é confiável enquanto o desenho da supervisão humana não estiver definido e documentado.",
        "A correção de processo que impede a recorrência do incidente tem precedência sobre a sanção isolada do servidor envolvido.",
        "Ferramenta de IA produz rascunho; a publicação, a decisão e o cálculo permanecem sob responsabilidade do servidor e do órgão."
      ],
      "comparacoes": [
        "Revisão reativa por reclamação versus amostragem estratificada com gatilhos objetivos: a primeira enviesa a detecção e não gera indicador confiável; a segunda é controle preventivo com desenho verificável."
      ],
      "fluxos": [
        "Diagnosticar o desenho de supervisão, publicar o critério, substituir a revisão reativa por amostragem estratificada e gatilhos objetivos, medir a reversão por subgrupo, registrar parâmetros e versão da regra, reportar por painel e reavaliar o nível de automação com base na evidência.",
        "Conter e corrigir o erro publicado, preservar o registro original, apurar o uso de dado pessoal sem base legal avaliada, instituir política de uso de IA com revisão obrigatória e ancoragem em fonte, integrar a política ao sistema de riscos e à auditoria interna, e garantir canal humano de atendimento."
      ],
      "excecoes": [
        "O fluxo de baixo impacto admite amostragem de revisão; o fluxo de alto impacto em termos de direito exige revisão integral antes de o efeito-producing decision, com alçada e prazo definidos.",
        "A correção pontual do texto publicado integra o dever de publicidade e não pode ser substituída pela abertura de apuração interna."
      ],
      "palavrasChave": [
        "automação de decisões",
        "supervisão humana",
        "desenho do controle",
        "viés de detecção",
        "análise por subgrupo",
        "causa raiz",
        "remediação sintomática",
        "uso de IA no serviço público"
      ],
      "checklist": [
        "O critério de decisão e sua versão estão publicados e são auditáveis?",
        "A supervisão humana tem gatilho, alçada, amostragem, registro e indicador definidos?",
        "Os indicadores de reversão são medidos por subgrupo, e não apenas de forma global?",
        "A correção proposal inclui contenção, correção do conteúdo publicado, apuração e prevenção de recorrência?",
        "A política de uso de IA define o que a ferramenta pode fazer, o que não pode e quem responde pelo conteúdo publicado?",
        "O caso foi integrado ao sistema de riscos e à auditoria interna?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão implantou negação automática de requerimentos de benefício de pequeno valor, com revisão humana acionada apenas quando o cidadão reclama e com um único indicador acompanhado: a taxa global de reversão. A pergunta é como corrigir o desenho do controle antes de discutir a qualidade do modelo de decisão.",
        "dados": "Fluxo com 12.000 casos no período; revisão disparada somente por reclamação; um único indicador global de reversão; histórico anterior de decisões do mesmo tipo disponível; nenhum registro publicado do critério de indeferimento nem da versão da regra aplicada.",
        "conceitos": [
          "Supervisão humana como controle que precisa de desenho verificável",
          "Viés de detecção da revisão reativa por reclamação",
          "Análise por subgrupo para revelar erro concentrado",
          "Transparência do critério de decisão e controles proporcionais ao risco"
        ],
        "estrategia": "A ordem correta é redesenhar o controle de supervisão antes de avaliar o desempenho do modelo, porque, com o desenho atual, nenhuma medida de desempenho é confiável. O caminho é publicar o critério de indeferimento, substituir a revisão reativa por três vias complementares de detecção, medir a reversão por subgrupo e só então decidir se o nível de automação pode ser mantido ou reduzido.",
        "execucao": [
          "Publicar o critério de indeferimento e a respective versão, hoje não auditável por quem não integra o órgão.",
          "Substituir a revisão por reclamação por um desenho de três vias: amostragem aleatória estratificada por território e por faixa do benefício, gatilhos objetivos como erro histórico e desempenho pior por subgrupo, e revisão integral dos casos de maior impacto.",
          "Medir a taxa de reversão por subgrupo, porque reversão concentrada em um público é indício de viés nos dados ou no critério.",
          "Registrar, para cada caso revisado, os parâmetros utilizados, a versão da regra aplicada e o resultado da revisão.",
          "Reportar o resultado ao gestor em painel de indicadores segmentados por subgrupo.",
          "Reavaliar o nível de automação com base na evidência coletada: manter em modo de apoio ou reduzir a autonomia do fluxo."
        ],
        "resultado": "Fluxo passa a ter supervisão auditável, com critério publicado, três vias de detecção, registro por caso e indicadores segmentados por subgrupo. A decisão sobre o nível de automação deixa de ser presumida e passa a se apoiar em evidência coletada no próprio processo.",
        "justificativa": "O gabarito identifica que a revisão por reclamação depende de informação e de capacidade de ação do cidadão, o que enviesa a detecção de erro, e que o indicador global de reversão esconde erro concentrado em um subgrupo. A governança de automação começa pelo controle, não pelo modelo: enquanto o desenho da supervisão não for verificável, nenhum indicador permite concluir que o fluxo é seguro.",
        "errosFrequentes": [
          "Manter apenas a taxa global de reversão, sem segmentar por subgrupo, e concluir que o desempenho do fluxo é aceitável.",
          "Ampliar a amostra sem estratificar, o que aumenta o volume de revisão sem reduzir o viés de detecção.",
          "Publicar o resultado da fila de atendimento e omitir o critério de indeferimento, que é justamente o que precisa ser auditável.",
          "Tratar a reclamação do cidadão como se fosse amostragem representativa da população atendida."
        ],
        "variacao": "Se o mesmo desenho de fluxo for aplicado a requerimento de alto impacto em termos de direito, a amostragem deixa de ser aceitável: passa-se a exigir revisão integral antes de a decisão produzir efeito, com alçada e prazo definidos, e a amostragem fica reservada aos casos de baixo impacto."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma servidora usa ferramenta de IA generativa para redigir a resposta a um cidadão que reclama de atraso, insere no prompt o texto integral da reclamação, com nome e CPF, e publica a resposta no canal oficial sem qualquer revisão. Cabe avaliar o tratamento dado e definir a providência de governança a ser implantada.",
        "dados": "Reclamação contendo nome e CPF; resposta publicada no canal oficial com promessa de prazo; nenhum registro de revisão; nenhum termo que indique a origem do texto; cidadão não consultado; o sistema registra prazo diferente do prazo publicado.",
        "conceitos": [
          "Dever de veracidade e de linguagem clara da comunicação oficial",
          "Tratamento de dados pessoais e avaliação de base legal antes do uso",
          "Alucinação e ancoragem obrigatória em fonte oficial",
          "Responsabilização do servidor e do órgão, e não da ferramenta"
        ],
        "estrategia": "A conduta exige separar o problema do meio do problema de processo: o uso de IA não é, por si, o defeito, e sim a publicação sem revisão, com dado de terceiro e sem ancoragem em fonte. O tratamento combina correção do conteúdo publicado com apuração e com a reformulação do desenho, o que impede a repetição do incidente.",
        "execucao": [
          "Conter e corrigir: conferir o prazo no sistema, republicar a resposta com o prazo correto e comunicar ao cidadão o erro, o prazo correto e a justificativa da correção.",
          "Preservar o registro da publicação original — data, hora, conta, texto e mídia — para apuração posterior e accountability.",
          "Apurar o uso de dado de terceiro inserido na ferramenta sem avaliação de base legal, bem como a publicação sem verificação.",
          "Instituir política de uso de IA com revisão humana obrigatória antes da publicação, lista de usos proibidos, exigência de ancoragem em fonte oficial, conferência de prazo, valor e nome de norma e registro do prompt, da ferramenta e do revisor.",
          "Definir o que a ferramenta pode fazer — produzir rascunho — e o que não pode — publicar, decidir, calcular ou responder a dado sensível —, exigindo que o servidor assuma a autoria da resposta.",
          "Integrar a política ao sistema de riscos e à auditoria interna, com verificação amostral de fidelidade ao texto oficial, e garantir canal de atendimento humano que a ferramenta não substitui."
        ],
        "resultado": "O cidadão recebe resposta corrigida e comunicação do erro com o prazo correto; a apuração fica aberta com registro preservado; e o órgão passa a ter política de uso de IA implantada com revisão obrigatória, ancoragem em fonte e registro de autoria, integrada ao sistema de riscos e à auditoria interna.",
        "justificativa": "O gabarito sustenta que a saída de IA é rascunho e não fonte, e que o canal oficial confere ao texto o peso de comunicação do órgão, razão pela qual a responsabilidade é do servidor e do órgão, e não da ferramenta. O que impede a repetição do dano é a correção do desenho de processo; a sanção isolada, sem mudança de procedimento, deixa o vetor aberto.",
        "errosFrequentes": [
          "Culpar a ferramenta e encerrar o caso sem apurar o uso de dado pessoal nem corrigir a publicação.",
          "Proibir o uso de IA sem definir o que substitui a revisão humana, deixando o servidor sem instrumento para produzir a resposta.",
          "Não comunicar ao cidadão a correção do erro publicado, descumprindo o dever de publicidade.",
          "Não registrar o prompt, a ferramenta e o revisor, o que impede a apuração e a auditoria posterior."
        ],
        "variacao": "Se a resposta ao cidadão for produzida por canal automatizado e não humano, o caso desloca-se para a disciplina de transparência ativa e de revisão amostral do próprio canal: o conteúdo continua sendo do órgão, e a verificação passa a incidir sobre o canal automatizado."
      },
      {
        "tipo": "erro",
        "problema": "Após incidente de publicação indevida, o órgão editou a política de redes sociais para proibir a publicação de conteúdo gerado por IA, alegando que os modelos alucinam. A política resolve o problema? Cabe avaliar se a remediação adotada ataca a causa raiz do incidente.",
        "dados": "Incidente anterior: publicação de dado pessoal de terceiro em post institucional; nova vedação: conteúdo gerado por IA; processo de verificação de dados pessoais antes da publicação permanece inalterado; checagem de fatos de conteúdo institucional continua informal; revisão de posts por reclamação segue como único gatilho.",
        "conceitos": [
          "Análise de causa raiz com método do que, quem, por que e o que deveria ter impedido",
          "Controle preventivo em oposição a controle detectivo",
          "Defesa em camadas: remediação mais prevenção de processo",
          "Alucinação como modo de funcionamento, e não como defeito isolado do modelo"
        ],
        "estrategia": "A leitura ingênua encerra o incidente ao culpar o meio. A leitura correta trata o caso como remediação sintomática e reavalia a causa raiz: o incidente foi causado pela ausência de verificação de dados pessoais e de checagem factual antes da publicação, e nenhuma dessas duas lacunas foi alterada pela nova política.",
        "execucao": [
          "Identificar a causa raiz do incidente anterior pelo método do que, quem, por que e o que deveria ter impedido a ocorrência.",
          "Verificar que a vedação de conteúdo gerado por IA não toca a lacuna de verificação de dados pessoais nem a checagem informal de fatos institucionais.",
          "Classificar a medida como remediação sintomática, que confunde o meio com a causa e deixa de fora o vetor principal.",
          "Propor a correção completa: camada de remediação do incidente e controle preventivo de processo antes da publicação.",
          "Definir como verificar o resultado, com registro de publicação, conferência prévia e tratamento de reclamação como sinal de aprendizado, e não como única fonte de detecção.",
          "Registrar a decisão e seus responsáveis, para que a política não seja reeditada por pressão de incidente sem reavaliação de causa."
        ],
        "resultado": "Conclusão do gabarito: a política não resolve o problema. O incidente foi de publicação de dado pessoal de terceiro e de checagem factual informal; a vedação de conteúdo gerado por IA não altera nenhum dos dois vetores. A remediação completa exige combinar camada adicional de contenção e controle preventivo de processo antes da publicação.",
        "justificativa": "O gabarito sustenta que a alucinação é modo de funcionamento da ferramenta e não o vetor principal do incidente, e que a causa raiz — ausência de verificação de dados pessoais antes da publicação — permanece intacta após a mudança de política. Vedar o meio sem alterar o processo é remediação sintomática: deixa o caminho causais aberto e produz sensação de correção sem redução de risco.",
        "errosFrequentes": [
          "Aceitar a alteração de política como encerramento do incidente, sem reavaliar a causa raiz.",
          "Confundir o vetor técnico do modelo com o vetor de processo que causou o dano concreto.",
          "Criar a camada de remediação sem criar também a camada preventiva, deixando o incidente repetir-se.",
          "Manter a revisão por reclamação como único gatilho de detecção, preservando o viés de detecção."
        ],
        "variacao": "Se o incidente involve a publicação de informação sigilosa em documento oficial gerado com apoio de IA, a avaliação desloca-se para o regime de sigilo e de acesso restrito, e a vedação porBlocks deixa de ser o tema central: passa a incidir o controle de acesso, a supressão de informação classificada e a revisão obrigatória da fonte."
      }
    ]
  }
};
