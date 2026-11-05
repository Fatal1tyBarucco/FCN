const enriParcialM6U1P1 = {
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
  }
};
