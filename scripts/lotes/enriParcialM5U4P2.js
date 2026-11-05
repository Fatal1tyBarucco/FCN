const enriParcialM5U4P2 = {
  "m5-u4-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Dominar decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio é fundamental para responder com segurança a itens de prova e para aplicar conhecimento em serviços públicos, pois garante reproduzibilidade, auditoria e redução de riscos de alucinação em sistemas de IA.",
      "preRequisitos": [
        "Noções básicas de engenharia de prompts",
        "Diferença entre dado e instrução",
        "Conceito de validação de saída"
      ],
      "objetivosObservaveis": [
        "decompor tarefas complexas em subtarefas verificáveis, aplicando a diretriz de raciocínio estruturado -- justificativa verificável, passos de cálculo e evidência de saída -- sem exigir a exposição de cadeias privadas de raciocínio",
        "aplicar decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio em cenário prático com restrições explícitas"
      ],
      "competencias": [
        "Análise técnica de instruções",
        "Leitura crítica de saída",
        "Tomada de decisão fundamentada"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t2-s2 (Formatos estruturados de saída e validação)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média: a decomposição de tarefas em subtarefas verificáveis, a verificação de resultados contra a fonte e a diretriz de não expor cadeia privada de raciocínio tornam o prompt institucional confiável e auditável em serviço público; estimativa pedagógica de adequação ao conteúdo programático, não frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Orientação ESTRATÉGICA -- O QUE SERÁ APRENDIDO: estudo aprofundado do subtópico 'decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio', incluindo seus conceitos, mecanismos, aplicações e limitações, conforme o conteúdo programático do Módulo 5. POR QUE O CONHECIMENTO É IMPORTANTE: o domínio de 'Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio' é necessário para responder com segurança a itens de prova e para aplicar o conhecimento em situações reais de serviço público e privado, permitindo identificar erros comuns e sustentar decisões com evidências verificáveis.",
      "intermediario": "Intermediário aplica decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio em cenários típicos de serviço público. O domínio de 'Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio' permite identificar erros comuns, propor melhorias e sustentar decisões com evidências verificáveis, utilizando pontos de inspeção entre etapas.",
      "avancado": "Avançado projeta decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio para cadeias de extração e validação. O domínio de 'Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio' permite identificar erros comuns, propor melhorias e sustentar decisões com evidências verificáveis, com governança de processos e relatório de descartes de itens inválidos.",
      "especialista": "Especialista lidera governança de decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio em processos institucionais. O domínio de 'Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio' permite identificar erros comuns, propor melhorias e sustentar decisões com evidências verificáveis em governança institucional, com relatório de quantos itens foram descartados e por quê em cada etapa de validação."
    },
    "comparacoes": [
      {
        "tema": "Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio estruturado versus genérico",
        "a": {
          "rotulo": "Genérico",
          "texto": "Prompt vago sem componentes explícitos gera saída variável e de difícil auditoria, sem pontos de inspeção identificáveis."
        },
        "b": {
          "rotulo": "Estruturado",
          "texto": "Uso de decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio com componentes claros garante determinismo e rastreabilidade, com registro de itens descartados e motivos."
        },
        "diferencaGabarito": "Estruturado permite validação automática e comparação entre lotes com relatório de descartes; genérico não."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: Se o modelo entrega JSON, não e necessário validar o esquema, pois o JSON e sempre confiável.",
        "porqueErrada": "O JSON garante a forma (sintaxe), mas não garante a correção dos valores, a coerência interna ou a fidelidade à fonte: o modelo pode preencher campos obrigatórios com valores inventados que passaram em validação de esquema, ou truncar dados em texto longo que o parser detecta, mas a correção exige teste de limite.",
        "versaoCorreta": "Errado. A justificativa verificável fundamenta a decisão pelos passos de cálculo e pela evidência de saída, sem depender da narrativa interna do modelo, que varia entre execuções e não pode ser comparada como base de auditoria. Exigir raciocínio estendido eleva custo, contamina contexto e e inadequado em decisões de direito, pois não gera material auditável."
      },
      {
        "afirmacaoEquivocada": "Afirmação: Omitir decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio não afeta qualidade da saída.",
        "porqueErrada": "Sem explicitação o modelo generaliza e pode inventar informações, sem pontos de inspeção para verificar coerência.",
        "versaoCorreta": "Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio é essencial para determinismo e auditoria, pois permite inspeção de itens em cada etapa de processamento."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Decomposição de tarefas",
        "Prompt estruturado",
        "Validação de saída",
        "Determinismo",
        "Evidência de saída"
      ],
      "regras": [
        "Definir componentes do prompt com entradas e saídas bem definidas",
        "Validar saída contra fonte depois de cada etapa de processamento"
      ],
      "comparacoes": [
        "Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio versus abordagem vaga"
      ],
      "fluxos": [
        "Identificar objetivo → definir componentes → validar saída após cada ponto de inspeção"
      ],
      "excecoes": [
        "Tarefas atômicas podem dispensar detalhamento quando não há múltiplos objetivos"
      ],
      "palavrasChave": [
        "prompt",
        "componente",
        "validação",
        "auditoria",
        "determinismo",
        "inspeção"
      ],
      "checklist": [
        "Componentes explícitos definidos?",
        "Restrições proíbem invenção em etapa?",
        "Formato fixo para saída?",
        "Saída verificável após inspeção?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença operacional entre pedir 'mostre seu raciocínio passo a passo' e pedir 'justifique sua conclusão com as cláusulas do contrato e apresente o cálculo dos valores'? A primeira abordagem expõe cadeia privada variável entre execuções, não comparável e não auditável; a segunda pede justificativa verificável com cláusulas e cálculo.",
        "dados": "Documento contrato 2024/001, partes, cláusulas de extração de obrigações, vigência 180 dias, prazo de fiscalização, valores cobrados. Dados concretos do enunciado para comparação operacional.",
        "conceitos": [
          "Componente de prompt",
          "Validação de saída"
        ],
        "estrategia": "Identificamos os componentes centrais do prompt (responsável, obrigação, prazo, cláusula) e definimos saídas parciais com restrições explícitas; cada subtarefa é inspecionada separadamente para garantir rastreabilidade sem revelar a cadeia privada de raciocínio do modelo.",
        "execucao": [
          "Identificar objetivo da tarefa",
          "Dividir em subtarefas verificáveis com entradas/saídas definidas",
          "Aplicar verificação de resultados contra fonte documentada"
        ],
        "resultado": "A primeira abordagem expõe raciocínio privado variável entre execuções, não e comparável entre runs e não e auditável. A segunda produz justificativa verificável: as cláusulas usadas e o cálculo podem ser conferidos contra o documento por terceiro, tornando o processo auditável e sustentando revisão em uso institucional.",
        "justificativa": "A diretriz de não expor cadeia privada de raciocínio existe porque pedir 'raciocínio passo a passo' narrativa interna é instável entre executos, não comparável e não auditável. O que interessa para auditoria e revisão é a justificativa verificável: as cláusulas contratuais usadas, o cálculo e a evidência de saída, que podem serem conferidas por terceiro contra o documento. Em uso institucional, o que precisa ser comprovado é o fundamento da conclusão, não o percurso mental que a produziu.",
        "errosFrequentes": [
          "Exibir cadeia privada de raciocínio como se fosse evidência auditável",
          "Omitir verificação de resultados após cada etapa de decomposição"
        ],
        "variacao": "Mantém a estrutura de decomposição em subtarefas inspeccionadas, mas altera o foco para análise de erro em enunciado de prova, exigindo identificação do passo onde a inferência não guardada na fonte gera conclusão incorreta."
      },
      {
        "tipo": "aplicacao",
        "problema": "Desenhe a decomposição de um prompt que resume um contrato e verifica se as Obrigações listadas constam do documento. Enuncie restrições explícitas de formato e verificação em cada etapa.",
        "dados": "Documento contrato 2024/002, partes envolvidas, cláusulas específicas de pagamento, prazos de cumprimento, valores R$ 15.000,00, prazo 180 dias, fiscalização trimestral. Dados da aplicação prática para demonstração de validação de esquema.",
        "conceitos": [
          "Componente de prompt",
          "Validação de saída"
        ],
        "estrategia": "Definimos campos estruturados para cada subtarefa (responsável, obrigação, prazo, cláusula) com validação de esquema após cada etapa; a saída segue formato fixo e os itens sem confirmação são descartados com motivo registrado, tornando o processo auditável em camada de esquema e de fidelidade à fonte.",
        "execucao": [
          "Liste as obrigações em campos: responsável, obrigação, prazo, cláusula",
          "Descarte itens sem cláusula identificada ou com campo obrigatório vazio",
          "Para cada item, copie o trecho da cláusula correspondente; se não houver trecho, marque 'não localizado'",
          "Verifique se os valores citados existem no documento; se algum não existir, remova o item",
          "Apresente tabela com os campos e o trecho; ao final, informe quantos itens foram descartados e por quê"
        ],
        "resultado": "Etapa 1 (EXTRAÇÃO): 'liste as obrigações em campos: responsável, obrigação, prazo, cláusula'; Etapa 2 (VALIDAÇÃO): 'descartar itens sem cláusula identificada ou com campo obrigatório vazio'; Etapa 3 (VERIFICAÇÃO DE COERÊNCIA): 'verifique se os valores citados existem no documento; se algum não existir, remova o item'; Etapa 4 (CONFERÊNCIA DE COERÊNCIA): 'apresente tabela com os campos e o trecho; ao final, informe quantos itens foram descartados e por quê'. Ponto de inspeção nas etapas 2 e 4, e relatório de descartes torna o processo auditável.",
        "justificativa": "A aplicação prática de decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio demonstra conexão conceito-evidência: o processo de inspeção entre etapas (2 e 4) garante que itens sem cláusula ou sem valores no documento sejam descartados com motivo registrado, tornando a saída final auditável e compatível com requisitos de concurso público.",
        "errosFrequentes": [
          "Não descartar itens sem cláusula identificada, acumulando informações não comprovadas no relatório final",
          "Não conferir coerência dos valores citados contra o documento em etapa separada, aceitando dados não verificados"
        ],
        "variacao": "Mantém a mesma estrutura de campos e validação de esquema, mas o enunciado solicita extração de dados de enunciado de prova com foco em identificação de passos errôneos, exigindo nova aplicação da mesma lógica de inspeção entre etapas."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Exigir que o modelo exiba seu raciocínio passo a passo é boa prática de auditoria, porque permite reconstruir a decisão.' Esse enunciado confunde raciocínio privado narrativo com justificativa verificável para fins de concurso.",
        "dados": "Cenário de questão de concurso sobre julgamento de recurso administrativo com análise de cláusulas contratuais e valores de multa. Dados consistentes com enunciado de erro.",
        "conceitos": [
          "Componente de prompt",
          "Validação de saída"
        ],
        "estrategia": "Na análise de erro, identificamos o componente do prompt que gerou a inferência incorreta e mapeia a cláusula contratuais relevante; verificamos se a saída do modelo reflete corretamente o trecho da fonte, evitando revelar a cadeia privada de raciocínio que originou o erro.",
        "execucao": [
          "Identificar afirmação do enunciado",
          "Verificar se a exposição de raciocínio privado é comparável entre execuções",
          "Verificar se a justificativa verificável com cláusulas está disponível"
        ],
        "resultado": "Errado. O que permite reconstruir e auditar a decisão é a JUSTIFICATIVA VERIFICÁVEL, os passos de cálculo e a evidência de saída — não a narrativa interna, que é instável e não conferível. Além disso, exigir raciocínio estendido aumenta o custo, polui o contexto e, em contextos de decisão sobre direito, é tecnicamente inadequado registrar um material que não é auditável. O processo auditável usa justificativa com cláusulas e cálculo, não narrativa interna.",
        "justificativa": "A diretriz de não expor cadeia privada de raciocínio existe porque pedir 'raciocínio passo a passo' expõe narrativa interna variável entre execuções, não comparável entre runs e não auditável por terceiro. O que permite reconstruir e auditar a decisão é a justificativa verificável: as cláusulas usadas, o cálculo, a evidência de saída, com conferência por terceiro contra o documento. Em uso institucional, o que precisa ser comprovado é o fundamento da conclusão, não o percurso mental que a produziu. Pedir raciocínio estendido aumenta custo, polui contexto e é inadequado quando a decisão afeta direito.",
        "errosFrequentes": [
          "Achar que exibir raciocínio interno passo a passo garante auditoria, quando apenas narrativa instável é produzida",
          "Não distinguir justificativa verificável (cláusulas + cálculo) de raciocínio privado narrativo (instável, não auditável)"
        ],
        "variacao": "Mantém a mesma lógica de inspeção de componentes e validação de cláusulas, mas o enunciado apresenta uma situação de recurso administrativo onde o modelo ignora uma cláusula de exclusão, exigindo identificação do item descarte e do motivo."
      }
    ]
  },
  "m5-u4-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Em contextos de concursos públicos e automação de serviços, a definição de formato estruturado de saída é fundamental para garantir que respostas de sistemas de IA sejam deterministas, auditáveis e comparáveis entre execuções. Sem um esquema explícito, o modelo pode gerar variações textuais que inviabilizam a validação automática, o tratamento de contestações e a integração com painéis de gestão. A delimitação clara de campos, tipos e restrições transforma saída livre em dado confiável para decisão administrativa, reduzindo riscos de interpretação indevida e assegurando que evidências possam ser conferidas por terceiros contra documentos de referência.",
      "preRequisitos": [
        "Noções básicas de esquemas de saída (JSON, CSV, TSV)",
        "Diferença entre dado estruturado e texto livre não formatado",
        "Conceitos de validação de tipo e coerência de dados"
      ],
      "objetivosObservaveis": [
        "definirá formatos estruturados de saída, aplicando restrições de tipo e validação de esquema, garantindo que cada subtarefa produza output verificável",
        "aplicará validação de formato e conferência de fidelidade à fonte em cenários de automação com restrições explícitas"
      ],
      "competencias": [
        "Análise de esquema de saída e tipagem de campos",
        "Construção de restrições de formato para automação de processos",
        "Fidelidade à fonte em dados estruturados e conferência de coerência"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t2-s1 (Decomposição de tarefas, verificação de resultados e a diretriz de não expor cadeia privada de raciocínio)"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média: o tema é objeto de questões de aplicação prática e formatação de saída em concursos de TI e administração, exigindo compreensão de componentes de esquema e seus efeitos sobre determinismo. A classificação qualitativa é estimativa pedagógica de adequação ao conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "ORIENTAÇÃO ESTRATÉGICA — O QUE SERÁ APRENDIDO: estudo introductorário dos conceitos de formatos estruturados de saída, incluindo definição de esquema, tipos de dado e validação básica, conforme o conteúdo programático do Módulo 5. POR QUE O CONHECIMENTO É IMPORTANTE: a familiarização com formatos estruturados permite ao aluno reconhecer quando uma saída está organizada e quando texto livre é mais adequado, evitando confusões em itens de prova que exigem resposta formatada. Além disso, o iniciante compreenderá que a ausência de formato estruturado dificulta a comparação entre respostas e a geração automática de relatórios em serviço público.",
      "intermediario": "Intermediário aplica formatos estruturados de saída em tarefas de extração e resumo, utilizando esquemas pré-definidos para organizar informações. O domínio de formatos estruturados permite ao intermediário inspecionar cada campo e tipo, garantindo que a saída contenha os elementos esperados e que valores estejam no formato correto (data, número, texto). Points of inspection entre etapas permitem detectar itens mal formatados ou faltantes antes da montagem da saída final.",
      "avancado": "Avançado projeta esquemas de saída para cadeias de automação, definindo restrições de tipo, obrigatoriedade e coerência interna. O domínio de formatos estruturados permite ao avançado governar processos de extração e validação em massa, com relatório de quantos itens foram descartados e por quê em cada etapa de processamento. Governança de processos e relatório de descartes são marcas registradas do nível avançado.",
      "especialista": "Especialista lidera governança de formatos estruturados de saída em processos institucionais, definindo políticas de esquema, validação de fidelidade e tratamento de lacunas. O domínio de formatos estruturados permite ao especialista identificar erros comuns, propor melhorias e sustentar decisões com evidências verificáveis em governança institucional, com relatório de quantos itens foram descartados e por quê em cada etapa de validação."
    },
    "comparacoes": [
      {
        "tema": "Formatos estruturados de saída versus texto livre em validação de itens",
        "a": {
          "rotulo": "Texto livre",
          "texto": "Saída sem esquema definido varia entre execuções, não possui pontos de inspeção identificáveis e não permite comparação automática entre respostas ou geração de relatórios agregados em administração pública."
        },
        "b": {
          "rotulo": "Estruturado",
          "texto": "Uso de esquema fixo com campos nomeados e tipos declarados garante determinismo, rastreabilidade e comparação entre lotes com relatório de descartes, atendendo requisitos de transparência em concursos públicos."
        },
        "diferencaGabarito": "Formato estruturado permite validação automática e comparação entre lotes com relatório de descartes; texto livre não permite inspeção de campo a campo ou agregação estatística."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: Se o modelo entrega JSON, não e necessário validar o esquema, pois o JSON e sempre confiável.",
        "porqueErrada": "Em agregações e comparações, o JSON não indica quando um dado esta ausente versus sendo zero: o pipeline pode somar ou comparar o campo sem perceber a diferença. O correto e usar 'null' e registrar a ausência, diferenciando claramente entre dado ausente, zero e não aplicável.",
        "versaoCorreta": "Errado. A validação é Obrigatória em camada de esquema E em camada de fidelidade à fonte. JSON garante a forma, não a correção: o modelo pode preencher campo obrigatório com valor inventado (que a validação de esquema não detecta) ou truncá-lo em texto longo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: O campo N/A e equivalente a dado ausente quando se trabalha com números.",
        "porqueErrada": "Em agregações e comparações, N/A e 0 passam a ter o mesmo efeito práctico: o pipeline pode somar, ordenar ou comparar o campo sem perceber a ambiguidade. O correto e tipar o campo corretamente (número ou nullo) e declarar 'null' explicitamente quando o dado não consta.",
        "versaoCorreta": "Errado. A distinção entre ausente, zero e não aplicável é requisito de qualidade de dado (Módulo 7) e de segurança de processamento. N/A e zero são estados distintos; a confusão corrompe agregações, médias e comparações estatísticas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Formato estruturado de saída",
        "Esquema de validação",
        "Tipagem de campos",
        "Fidelidade à fonte",
        "Coerência interna",
        "ISO 8601"
      ],
      "regras": [
        "Definir campos nomeados e tipos para cada subtarefa de saída",
        "Utilizar 'null' para valores ausentes, nunca '0' ou 'N/A' como substituto de ausência"
      ],
      "comparacoes": [
        "Formatos estruturados de saída versus texto livre em validação e agregação"
      ],
      "fluxos": [
        "Identificar campos obrigatórios -> definir tipos e restrições -> validar esquema após cada etapa de processamento"
      ],
      "excecoes": [
        "Tarefas atômicas e únicas podem dispensar esquema detalhado quando saída livre for suficiente"
      ],
      "palavrasChave": [
        "saída estruturada",
        "esquema",
        "tipagem",
        "validação",
        "fidelidade",
        "coerência",
        "determinismo",
        "ISO 8601"
      ],
      "checklist": [
        "Campos obrigatórios definidos?",
        "Tipos de dados declarados para cada campo?",
        "Validação de esquema executada?",
        "Ausências registradas com 'null' em campo separado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença entre pedir ao modelo 'formato JSON livre' e 'esquema estruturado com validação'? A primeira gera saída variável entre execuções, sem tipos definidos e sem pontos de inspeção; a segunda impõe restrições de tipo, campos obrigatórios e esquema fixo que permitem validação automática e conferência por terceiro.",
        "dados": "Exemplo concreto de extração de dados de termo de responsabilidade: órgão Secretaria de Finanças, contratante Empresa X, objeto aquisição de materiais de escritório, vigência de 01/01/2024 a 31/12/2024, valor total R$ 25.000,00, garantias fiança bancária, cláusulas relevantes cláusula 5ª e cláusula 12ª, lacunas informações não localizadas no documento.",
        "conceitos": [
          "Componente de prompt",
          "Esquema de saída",
          "Validação de formato"
        ],
        "estrategia": "Identificamos os componentes centrais do prompt de extração e definem saídas parciais com restrições explícitas; cada subtarefa é inspecionada separadamente para garantir rastreabilidade e fidelidade à fonte sem revelar cadeia privada de raciocínio.",
        "execucao": [
          "Liste os componentes centrais do prompt de extração",
          "Defina esquema fixo com campos nomeados e tipos para cada subtarefa",
          "Aplique validação de esquema após cada etapa de processamento",
          "Verifique fidelidade dos trechos extraídos contra o documento de origem"
        ],
        "resultado": "A abordagem 'formato JSON livre' produz saída variável entre execuções, sem tipos definidos e sem pontos de inspeção; não permite comparação automática nem conferência por terceiro. A abordagem 'esquema estruturado com validação' produz saída determinista: cada campo tem tipo e restrição definidos, validação de esquema detecta inconsistências e a fidelidade à fonte é conferida em cada etapa, tornando o processo auditável.",
        "justificativa": "O que permite reconstruir e auditar a decisão não é a narrativa interna do modelo, mas a justificativa verificável: esquema definido, tipos declarados, valores conferidos contra documento e evidência de saída registrada. Em uso institucional, o que precisa ser comprovado é o fundamento da conclusão, não o percurso mental que a produziu. Formato estruturado garante que terceiros possam verificar a saída campo a campo.",
        "errosFrequentes": [
          "Não definir tipos de campos obrigatórios, aceitando qualquer tipo de dado na saída",
          "Omitir validação de esquema e confiar apenas na sintaxe JSON superficial"
        ],
        "variacao": "Mantém a estrutura de esquema definido e validação de formato, mas o enunciado solicita análise de componentes de prompt com níveis de complexidade crescentes, exigindo reestruturação da lógica de inspeção entre etapas e atenção à fidelidade à fonte dos dados."
      },
      {
        "tipo": "aplicacao",
        "problema": "Escreva a especificação de saída para extração de dados de um Termo de Responsabilidade, garantindo formato estruturado com tipos corretos, campos obrigatórios e regras de não inferência.",
        "dados": "Termo de Responsabilidade 2024/015, órgão contratante: Secretaria de Finanças, contratante: Empresa X, objeto: aquisição de materiais de escritório, vigência_início: 2024-01-01, vigência_fim: 2024-12-31, valor_total: R$ 15.000,00, multa_pct: 10%, garantias: fiança bancária, clausulas_relevantes: cláusula 5ª e cláusula 12ª, lacunas: informações não localizadas no documento.",
        "conceitos": [
          "Componente de prompt",
          "Esquema de saída",
          "Validação de formato",
          "ISO 8601"
        ],
        "estrategia": "Definimos campos estruturados para cada subtarefa (orgao_contratante, contratante, objeto, vigência_início, vigência_fim, valor_total, multa_pct, garantias, clausulas_relevantes, lacunas) com validação de esquema após cada etapa; a saída segue formato fixo e os itens sem confirmação são descartados com motivo registrado, tornando o processo auditável em camada de esquema e de fidelidade à fonte.",
        "execucao": [
          "Liste as informações necessárias em campos: orgao_contratante, contratante, objeto, vigência_início, vigência_fim, valor_total, multa_pct, garantias, clausulas_relevantes, lacunas",
          "Descarte itens sem identificação de cláusula ou com campo obrigatório vazio",
          "Para cada item, copie o trecho da cláusula correspondente; se não houver trecho, marque 'não localizado' no campo lacunas",
          "Verifique se os valores citados existem no documento; se algum não existir, remova o item ou marque em lacunas",
          "Apresente saída final no formato JSON com esquema fixo; ao final, informe quantos itens foram descartados e por quê"
        ],
        "resultado": "Etapa 1 (EXTRAÇÃO): 'liste as informações necessárias em campos: orgao_contratante, contratante, objeto, vigência_início, vigência_fim, valor_total, multa_pct, garantias, clausulas_relevantes, lacunas'; Etapa 2 (VALIDAÇÃO): 'descartar itens sem cláusula identificada ou com campo obrigatório vazio'; Etapa 3 (VERIFICAÇÃO DE COERÊNCIA): 'vigência_fim maior que a inicial, quando ambas existe'; Etapa 4 (SAÍDA): 'apresente saída final no formato JSON com esquema fixo; ao final, informe quantos itens foram descartados e por quê'. Ponto de inspeção nas etapas 2 e 4, e relatório de descartes torna o processo auditável.",
        "justificativa": "A aplicação prática de formatos estruturados de saída demonstra conexão conceito-evidência: o processo de inspeção entre etapas (2 e 4) garante que itens sem cláusula ou sem valores no documento sejam descartados com motivo registrado, tornando a saída final auditável e compatível com requisitos de concurso público. A distinção entre ausente, zero e não aplicável é rigorosamente mantida usando 'null' e campos de status.",
        "errosFrequentes": [
          "Não descartar itens sem cláusula identificada, acumulando informações não comprovadas no relatório final",
          "Não conferir coerência dos valores citados contra o documento em etapa separada, aceitando dados não verificados",
          "Converter percentual escrito em extenso ('dez por cento') sem declarar regra de conversão"
        ],
        "variacao": "Mantém a mesma estrutura de campos e validação de esquema, mas o enunciado solicita extração de dados de aditivo contratual com prazos diferentes e inclusão de campo de garantias adicionais, exigindo nova aplicação da lógica de inspeção com restrições de formatação e conferência de coerência em cada etapa."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Se peço a resposta em JSON, não preciso validar, porque o modelo entrega JSON valido.' Esse enunciado confunde a garantia de forma (sintaxe JSON) com a garantia de conteúdo (correção, completude e fidelidade à fonte).",
        "dados": "Cenário de extração de dados de termo de responsabilidade com campos: orgao_contratante, contratante, objeto, vigência_início, valor_total. Dados consistentes com enunciado de erro sobre saída de modelo.",
        "conceitos": [
          "Componente de prompt",
          "Esquema de saída",
          "Validação de formato"
        ],
        "estrategia": "Na análise de erro, identificamos o componente do prompt que gerou a inferência incorreta e mapeia o campo do esquema relevante; verificamos se a saída do modelo reflete corretamente o trecho da fonte, evitando revelar a cadeia privada de raciocínio que originou o erro e conferindo fidelidade aos trechos extraídos.",
        "execucao": [
          "Identificar a afirmação do enunciado sobre saída JSON",
          "Verificar se a exposição de formato é comparável entre execuções",
          "Verificar se a justificativa verificável com esquema e conferência de trechos está disponível"
        ],
        "resultado": "Errado. O JSON garante a FORMA, não a CORREÇÃO dos valores nem a completude: o modelo pode preencher campo obrigatório com valor inventado (que a validação de esquema não detecta) ou truncá-lo em texto longo (que o parser detecta, mas a correção exige teste de limite). A validação é Obrigatória em camada de esquema E em camada de fidelidade à fonte. O que permite reconstruir e auditar a decisão é a justificativa verificável: esquema definido, tipos declarados, valores conferidos contra documento e evidência de saída, com conferência por terceiro contra o documento.",
        "justificativa": "A diretriz de validação em três camadas (esquema, coerência, fidelidade à fonte) existe porque o JSON garante apenas a forma (sintaxe), não a correção dos valores nem a completude. O que permite reconstruir e auditar a decisão é a justificativa verificável: as cláusulas usadas, o cálculo, a evidência de saída, com conferência por terceiro contra o documento. Em uso institucional, o que precisa ser comprovado é o fundamento da conclusão, não o percurso mental que a produziu. Pedir JSON não substitui validação de esquema e conferência de fidelidade.",
        "errosFrequentes": [
          "Achar que exibir JSON valido garante auditoria, quando apenas a sintaxe e conferida e não a correção dos valores",
          "Não distinguir justificativa verificável (esquema + calculo + conferência de trechos) de sintaxe JSON superficial (apenas forma)"
        ],
        "variacao": "Mantém a mesma lógica de inspeção de componentes e validação de esquema, mas o enunciado apresenta uma situação de termo de aditivo onde o modelo ignora uma cláusula de exclusão, exigindo identificação do item descarte e do motivo."
      }
    ]
  }
};
