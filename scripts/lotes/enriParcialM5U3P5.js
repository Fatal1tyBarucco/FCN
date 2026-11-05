const enriParcialM5U3P5 = {
  "m5-u3-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Resolver três casos de IA generativa no serviço público exige unir mecanismo, risco e providência: quem só nomeia a alucinação, sem ancoragem em fonte, ou só aponta falha de governança, sem dizer o que medir, deixa a questão pela metade.",
      "preRequisitos": [
        "Geração probabilística e alucinação (unidade 5.3)",
        "Recuperação aumentada por geração e bases vetoriais (unidade 5.3)",
        "Avaliação por subgrupo e separação entre treino e teste (unidade 5.2)"
      ],
      "objetivosObservaveis": [
        "Preencher os nove campos do template de análise em cada caso apresentado",
        "Classificar o defeito como alucinação, erro de dado, erro de lógica ou alegação não verificada",
        "Propor providência de governança mensurável, com fonte, registro e revisão humana"
      ],
      "competencias": [
        "Leitura crítica de saída de modelo, separando falha do modelo de falha de processo",
        "Desenho de fluxo institucional com recuperação de fonte e canal de revisão",
        "Formulação de política de uso com indicador mensurável e critério de interrupção"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m5-u3-t3-s1 (Privacidade, segurança, direitos autorais e avaliação de resultados) — critérios de avaliação",
        "m5-u3-t3-s2 (Aplicações no setor público e privado: exemplos comprovados e hipóteses ilustrativas) — separa caso verificado de hipótese",
        "m5-u3-t4-s2 (Comparações e distinções críticas da unidade) — distinções usadas no diagnóstico"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Editais de TI cobram cenários de IA generativa aplicada ao serviço público, com classificação do defeito e indicação de providência de governança. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece a sequência comum aos três casos: identificar o defeito, nomear o mecanismo, propor a correção e medir o efeito. Classifica o primeiro como alucinação, porque o prazo informado não consta de ato normativo; o segundo, como decisão automatizada com variável mal definida; o terceiro, como alegação comercial sem base verificável.",
      "intermediario": "O aluno preenche o template do primeiro caso: classifica a alucinação, aponta a ausência de base de conhecimento como causa, propõe ancoragem em fonte com metadados de vigência, exige citação e encaminhamento quando não houver trecho e prevê validação de números e datas contra o texto recuperado.",
      "avancado": "O aluno conduz o caso da fila de requerimentos: publica o critério de triagem com variáveis e pesos, verifica se alguma variável é dado sensível, exige partição temporal no treino, avaliação por subgrupo, registro dos parâmetros de cada caso e lançamento em modo de apoio com revisão humana antes de automatizar a ordenação.",
      "especialista": "O aluno trata a alegação de desempenho do fornecedor como governança contratual: converte percentuais sem metodologia em indicadores com definição, base e método, exige acesso aos registros para auditoria, exige trilha com usuário, ação, parâmetros, fonte e versão do modelo e define critérios de aceite e gatilhos de suspensão."
    },
    "comparacoes": [
      {
        "tema": "Falha da geração e falha da base de conhecimento",
        "a": {
          "rotulo": "Alucinação de geração",
          "texto": "O modelo afirma prazo, número ou fundamento que não existe em fonte recuperada; a saída é coerente na forma e falsa no conteúdo."
        },
        "b": {
          "rotulo": "Erro de dado da base",
          "texto": "O modelo é fiel ao conteúdo recuperado, mas esse conteúdo está desatualizado ou incorreto, e a correção é de saneamento e versionamento."
        },
        "diferencaGabarito": "Na alucinação, o defeito está na geração sem lastro; no erro de dado, no material consultado. Trocar os diagnósticos leva a otimizar o prompt quando o problema era a base."
      },
      {
        "tema": "Indicador auditável e número comercial sem metodologia",
        "a": {
          "rotulo": "Indicador auditável",
          "texto": "Percentual definido de casos em que a resposta final não exigiu correção substancial, apurado sobre base conhecida, com método declarado e registro para verificação."
        },
        "b": {
          "rotulo": "Número alegado sem metodologia",
          "texto": "Percentual apresentado em material de divulgação, sem definição de acerto, base de teste, condição de operação ou verificação independente, e usado como requisito de contratação."
        },
        "diferencaGabarito": "O indicador auditável tem definição, base, método e trilha de verificação; o número alegado não tem nenhum desses elementos e, sozinho, não entra em edital."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Basta acrescentar ao prompt a instrução de não inventar informações para eliminar as alucinações do chatbot.",
        "porqueErrada": "A instrução orienta o estilo da resposta e não muda o mecanismo de geração, que otimiza plausibilidade, e não verdade. Sem base de conhecimento, exigência de citação e validação de números, o chatbot continua produzindo afirmações sem lastro.",
        "versaoCorreta": "A mitigação é de processo: ancorar a resposta em trecho recuperado, exigir citação, validar números e datas contra a fonte e manter revisão humana com encaminhamento."
      },
      {
        "afirmacaoEquivocada": "O modelo de linguagem é a ferramenta adequada para ordenar a fila de 12.000 requerimentos por risco social, por produzir justificativa legível.",
        "porqueErrada": "Ordenação de fila é tarefa de classificação, com saída fechada e critério verificável, que admite avaliação por subgrupo. A justificativa legível não substitui o critério publicado, e a definição de risco social inclui variável socioeconômica e informação de saúde.",
        "versaoCorreta": "A priorização combina critério de triagem escrito e publicado, abordagem discriminativa, avaliação por subgrupo, registro dos parâmetros, supervisão humana e canal de revisão."
      },
      {
        "afirmacaoEquivocada": "Como o fornecedor garante em material comercial 80% do atendimento com 95% de acurácia, o edital pode fixar esses percentuais como exigência mínima.",
        "porqueErrada": "Alegação comercial não verificada não é requisito técnico: sem definição do que se considera acerto, sem base de teste e sem método, o número não é comparável nem auditável, e fixá-lo transfere ao órgão o risco de uma expectativa que ninguém consegue medir.",
        "versaoCorreta": "O órgão converte a alegação em indicador com definição, base e método, mede em piloto próprio, exige acesso aos registros e apoia a contratação em medição institucional."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Alucinação como consequência estrutural da geração probabilística",
        "Recuperação aumentada como ancoragem em fonte institucional",
        "Abordagem discriminativa como instrumento de triagem",
        "Avaliação por subgrupo como contraponto à acurácia global",
        "Indicador com definição, base e método como requisito verificável"
      ],
      "regras": [
        "Toda afirmação factual da saída precisa ser rastreada até trecho recuperado e vigente",
        "Ausência de trecho recuperável exige resposta de ausência com encaminhamento, nunca inferência",
        "Medida global de desempenho nunca substitui a análise por subgrupo",
        "Critério de triagem usado em decisão sobre direito deve ser escrito, publicado e revisado"
      ],
      "comparacoes": [
        "Alucinação de geração e erro de dado da base nascem em momentos distintos do mesmo fluxo",
        "Indicador auditável e número comercial se distinguem pela presença de definição, base e método",
        "Modelo generativo serve à redação; modelo discriminativo serve à ordenação com critério"
      ],
      "fluxos": [
        "Pergunta do cidadão → recuperação com filtro de vigência → resposta ancorada ou aviso de ausência → conferência de números → revisão humana → registro de trecho, prompt e saída",
        "Definição de critério → verificação de dado sensível e base legal → treino com partição temporal → avaliação por subgrupo → modo de apoio com revisão → automação com gatilho"
      ],
      "excecoes": [
        "Recuperação aumentada reduz alucinação, mas não a elimina sobre o material recuperado",
        "Alta acurácia global não dispensa análise por subgrupo nem revisão com alçada",
        "Alegação de desempenho sem base verificável não pode constar como requisito técnico"
      ],
      "palavrasChave": [
        "alucinação",
        "recuperação aumentada",
        "critério de triagem",
        "subgrupo",
        "fidelidade",
        "indicador auditável"
      ],
      "checklist": [
        "Classifiquei o defeito: geração, dado, lógica ou alegação sem verificação",
        "Verifiquei se toda afirmação factual tem trecho de origem vigente",
        "Confirmei se existe encaminhamento quando não há fonte",
        "Avaliei se a tarefa pedida é de classificação ou de criação de texto",
        "Verifiquei se as variáveis do critério são lícitas e se há base legal",
        "Previ revisão humana, canal de contestação e gatilho de interrupção"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um órgão implantou um chat que responde a perguntas sobre o prazo de análise de requerimentos. Em 10% das conversas, o chat informa prazo sem que exista ato normativo que o estabeleça. Como classificar o problema e propor a correção?",
        "dados": "Taxa de erro de 10% medida por amostragem das conversas; os prazos são afirmados sem fonte; não há trecho normativo no contexto entregue ao modelo; o chat é o canal oficial de primeira resposta ao cidadão.",
        "conceitos": [
          "Geração probabilística otimizada para plausibilidade, e não para verdade",
          "Alucinação com efeito operacional sobre o cidadão",
          "Recuperação aumentada como ancoragem em fonte"
        ],
        "estrategia": "Não desativar o serviço de imediato, mas ancorar as respostas em fonte e medir o efeito da correção: recuperar os atos normativos vigentes, exigir citação, bloquear a saída sem correspondência e medir a fidelidade em amostra revisada por pessoas.",
        "execucao": [
          "1) Identificar a causa: falta de base de conhecimento e ausência de exigência de citação",
          "2) Indexar os atos normativos e configurar a recuperação com metadados de vigência",
          "3) Exigir ancoragem em trecho recuperado e, sem trecho, exibir aviso com encaminhamento ao setor responsável",
          "4) Validar números, prazos e datas contra a fonte e bloquear a saída sem correspondência",
          "5) Revisar amostra das conversas e medir o indicador de fidelidade antes e depois da correção",
          "6) Registrar prompt, trecho e resposta para auditoria, com critério de interrupção do serviço"
        ],
        "resultado": "Chat com resposta ancorada em ato normativo vigente, fonte exibida ao cidadão, advertência de ausência com encaminhamento efetivo, indicador de fidelidade acompanhado em amostra revisada e registro de auditoria de cada resposta.",
        "justificativa": "O modelo não é fonte: gera a sequência de tokens mais plausível a partir do contexto recebido. Sem base de conhecimento e sem exigência de citação, a ausência de lastro é previsível, e por isso a correção é de processo, e não de ajuste de prompt ou de desativação imediata.",
        "errosFrequentes": [
          "Desativar o chat sem medir nem corrigir a causa do erro",
          "Acrescentar ao prompt a instrução de não inventar e considerar o problema resolvido",
          "Ocultar o erro do cidadão em vez de corrigir o fluxo e medir a fidelidade"
        ],
        "variacao": "Se a pergunta for sobre a composição de uma comissão interna, não prevista em ato, o fluxo permanece o mesmo: reconhecer a ausência de base, informar o setor competente e oferecer o encaminhamento, exatamente como no caso do prazo."
      },
      {
        "tipo": "aplicacao",
        "problema": "O órgão quer usar um modelo de linguagem para priorizar uma fila de 12.000 requerimentos, ordenando por risco social. Como conduzir o desenho e a validação dessa priorização?",
        "dados": "Histórico de 12.000 casos; a métrica de risco social foi definida como risco de abandono, o que inclui variável socioeconômica e, em parte dos casos, informação de saúde; não há registro das decisões tomadas; o quadro normativo prevê triagem por critério objetivo e revisão.",
        "conceitos": [
          "Abordagem discriminativa aplicada a tarefa de triagem",
          "Viés de dados e avaliação por subgrupo",
          "Dado sensível e necessidade de base legal específica"
        ],
        "estrategia": "Usar abordagem discriminativa com critério escrito e publicado, reservar o modelo generativo, se houver, para apoio textual, e conduzir a validação por partição temporal, avaliação por subgrupo e lançamento em modo de apoio com revisão humana antes de automatizar a ordenação.",
        "execucao": [
          "1) Definir e publicar o critério de triagem, com variáveis e pesos, submetido a revisão jurídica",
          "2) Verificar se alguma variável é dado sensível e se há base legal específica; havendo dado sensível sem base, retirar a variável ou tratar a ordenação como automatizada de alto impacto, com revisão integral",
          "3) Treinar e validar com partição temporal, para que o passado não preveja o presente, e sem vazamento entre etapas",
          "4) Avaliar por subgrupo, além da métrica global, e investigar concentração de erro em públicos específicos",
          "5) Registrar, para cada caso, os parâmetros usados e o escore atribuído, para permitir rastreabilidade e contestação",
          "6) Lançar em modo de apoio, com revisão humana obrigatória, medindo a taxa de reversão por subgrupo, e automatizar só com evidência"
        ],
        "resultado": "Triagem com critério publicado e auditável, avaliação por subgrupo, registro dos parâmetros de cada caso, revisão humana com alçada e canal de contestação, com a ordenação definitiva automatizada apenas após evidência de reversão aceitável.",
        "justificativa": "A legalidade, a impessoalidade e a auditabilidade do ordenamento vêm da justificativa do critério, e não do modelo empregue: é a definição publicada de risco social que permite impugnar a decisão. O modelo apenas implementa o critério, e a definição de risco inclui variável socioeconômica e informação de saúde, o que exige base legal específica.",
        "errosFrequentes": [
          "Usar modelo generativo para tarefa de classificação, que o discriminativo resolve com saída fechada e critério verificável",
          "Manter o critério de risco social em documento interno, sem publicação, o que impede a impugnação",
          "Medir apenas a acurácia global e ignorar a concentração de erro em subgrupos"
        ],
        "variacao": "Se a priorização passar a decidir indeferimento, e não apenas a ordem da fila, passa a exigir, a todos os efeitos de ato administrativo individual, motivação, comunicação ao interessado e revisão, além do canal de contestação já previsto."
      },
      {
        "tipo": "erro",
        "problema": "Um fornecedor propõe ao órgão um copilot que, segundo o material do fornecedor, automatiza 80% do atendimento com acurácia de 95%. O edital exige produto com auditoria. Como o órgão deve proceder diante dessa proposta?",
        "dados": "Material comercial do fornecedor; nenhuma das métricas é acompanhada de metodologia de medição, base de teste ou verificação independente; o edital exige auditoria e rastreabilidade; o serviço lida com dados pessoais de cidadãos.",
        "conceitos": [
          "Regra de honestidade factual sobre desempenho alegado",
          "Conversão de alegação comercial em indicador com definição, base e método",
          "Requisitos de auditoria, registro e rastreabilidade"
        ],
        "estrategia": "Não discutir o número, mas o que deve ser verificável e como: transformar cada percentual alegado em indicador com definição, base e método, exigir metodologia e acesso aos registros, medir em piloto próprio e fundar a contratação na medição institucional.",
        "execucao": [
          "1) Converter a alegação em requisito verificável, definindo o que se entende por atendimento automatizado e por acurácia",
          "2) Exigir do fornecedor metodologia de medição, base utilizada e possibilidade de auditoria independente, com acesso aos registros",
          "3) Pilotar com base real do órgão, medindo os mesmos indicadores, com verificação de fidelidade das respostas às fontes",
          "4) Exigir trilha de auditoria com usuário, ação, parâmetros, fonte e versão do modelo, além do registro do conteúdo publicado",
          "5) Definir critérios de aceite, gatilhos de suspensão e revisão periódica da qualidade do serviço",
          "6) Registrar que o desempenho alegado é material publicitário não verificado e que a contratação se apoia em medição própria"
        ],
        "resultado": "Contrato com indicadores definidos e auditáveis, apurados por medição institucional e não por número não verificado, com acesso aos registros para auditoria, trilha completa, critérios de aceite, gatilhos de suspensão e revisão periódica.",
        "justificativa": "Alegação comercial não verificada não é requisito técnico: o que torna o contrato verificável é a conversão do número em indicador com definição, base e método, com trilha que permita verificação independente. Aceitar o percentual como premissa contratual importaria uma expectativa de desempenho que o órgão não tem como medir nem fiscalizar.",
        "errosFrequentes": [
          "Aceitar os percentuais do material comercial como exigência do edital, sem definí-los e sem pedir metodologia",
          "Recusar a proposta por desconfiança genérica, sem solicitar metodologia e acesso aos registros",
          "Medir apenas acurácia global, sem decompor o resultado por subgrupo e sem verificar fidelidade às fontes"
        ],
        "variacao": "Se o fornecedor alegar que o modelo não é usado para treinamento com os dados do cliente, a exigência se desloca: a afirmação de política pública deve ser convertida em previsão contratual expressa, com cláusula de auditoria e sanção para o descumprimento."
      }
    ]
  },
  "m5-u3-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir os pares críticos da unidade 5.3 evita que o candidato escolha a abordagem errada para a tarefa: um LLM generativo não serve para triagem fechada, RAG não adapta comportamento, alucinação não é erro de dado e reprodutibilidade depende do registro do processo, não do modelo. Essas distinções aparecem em itens de C/E e de múltipla escolha e mudam o gabarito.",
      "preRequisitos": [
        "Geração probabilística e alucinação (unidade 5.3)",
        "Recuperação aumentada por geração e bases vetoriais (unidade 5.3)",
        "Avaliação por subgrupo e separação entre treino e teste (unidade 5.2)"
      ],
      "objetivosObservaveis": [
        "Distinguir modelo generativo de modelo discriminativo pela natureza da saída",
        "Escolher entre RAG e ajuste fino conforme a necessidade de atualização de base ou de comportamento",
        "Diferenciar alucinação, erro de lógica e erro de dado em uma saída de modelo",
        "Aplicar critério de decisão para buscar semântica, textual ou híbrida em um sistema de recuperação"
      ],
      "competencias": [
        "Leitura crítica de saída de modelo, separando falha de geração de falha de base",
        "Escolha de abordagem técnica adequada a cada tarefa de linguagem",
        "Construção de processo com registro para reproduzir respostas de modelo",
        "Avaliação de qualidade por subgrupo e em dados não vistos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u3-t4-s1 (Exemplos resolvidos da unidade (três casos completos)) — aplica as distinções a três casos concretos",
        "m5-u3-t3-s1 (Privacidade, segurança, direitos autorais e avaliação de resultados) — critérios de avaliação",
        "m5-u3-t4-s3 (Erros, exceções, pegadinhas e resumo estruturado da unidade) — fecha as distinções com erros e exceções da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Editais de TI cobram distinções entre abordagens de linguagem, com itens que apresentam LLM para tarefa de triagem e exigem análise de adequação. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno reconhece que modelo generativo cria texto novo e variável, enquanto modelo discriminativo retorna rótulo ou valor fechado, e que triagem é tarefa discriminativa. Identifica alucinação como afirmação falsa com coerência verbal e distingue busca por forma de busca por sentido.",
      "intermediario": "O aluno escolhe RAG para base que muda com frequência e exige citação, e ajuste fino para adaptar comportamento ou estilo. Diferencia alucinação, erro de lógica e erro de dado, sabendo que cada um exige providência distinta: ancoragem, revisão de premissa ou saneamento da base.",
      "avancado": "O aluno projeta recuperação híbrida, combinando busca semântica para linguagem natural e busca textual para códigos e termos exatos, e estabelece registro de processo com parâmetros, semente e cache para reproduzir respostas. Aplica avaliação por subgrupo e em dados não vistos.",
      "especialista": "O aluno governa a implantação de agentes e fluxos determinísticos, definindo quando cada um se aplica, com previsibilidade e auditabilidade a favor do fluxo e flexibilidade a favor do agente. Constrói memória externa com histórico, resumo ou base para superar o limite da janela de contexto."
    },
    "comparacoes": [
      {
        "tema": "Modelo generativo e modelo discriminativo",
        "a": {
          "rotulo": "Generativo",
          "texto": "Aprende a distribuição de sequências e produz conteúdo novo, com saída livre e variável."
        },
        "b": {
          "rotulo": "Discriminativo",
          "texto": "Estima a probabilidade de rótulo ou valor a partir da entrada, com saída fechada."
        },
        "diferencaGabarito": "Triagem e priorização são, em regra, discriminativas; item que apresenta LLM para essa tarefa deve ser analisado quanto à adequação, não quanto ao acerto."
      },
      {
        "tema": "Determinismo e amostragem probabilística",
        "a": {
          "rotulo": "Amostragem probabilística",
          "texto": "A geração textual padrão amostra de uma distribuição, de modo que o mesmo prompt pode produzir saídas diferentes."
        },
        "b": {
          "rotulo": "Determinismo",
          "texto": "É atributo do processo, não do modelo: fixação de parâmetros, cache, semente e registro tornam a saída reproduzível."
        },
        "diferencaGabarito": "A reprodutibilidade de uma resposta é responsabilidade do registro do processo, e não uma propriedade intrínseca do modelo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Saber distinguir generativo de discriminativo basta para dominar o assunto de IA generativa.",
        "porqueErrada": "Dominar exige definição, mecanismo, exemplo e limitação de cada distinção, e não apenas reconhecer o nome.",
        "versaoCorreta": "O domínio completo requer saber quando aplicar cada abordagem, qual mecanismo está em jogo, um exemplo concreto e qual limitação impede o uso inadequado."
      },
      {
        "afirmacaoEquivocada": "A distinção entre RAG e ajuste fino se aplica de forma idêntica em todo contexto.",
        "porqueErrada": "Há condições de validade e exceções: RAG serve para base que muda com frequência e exige citação, enquanto ajuste fino serve para adaptar comportamento ou estilo.",
        "versaoCorreta": "A escolha depende do contexto: base volátil com citação aponta para RAG; adaptação de comportamento ou estilo aponta para ajuste fino."
      },
      {
        "afirmacaoEquivocada": "A acurácia global isolada prova a qualidade da resposta do modelo.",
        "porqueErrada": "A avaliação exige subgrupos e dados não vistos, pois a métrica global mascara erros concentrados.",
        "versaoCorreta": "A qualidade se comprova com medição por subgrupo e em dados nunca vistos, e não por um número isolado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Modelo generativo",
        "Modelo discriminativo",
        "Recuperação aumentada por geração",
        "Ajuste fino",
        "Alucinação",
        "Erro de lógica",
        "Erro de dado",
        "Embedding",
        "Busca textual",
        "Amostragem probabilística",
        "Janela de contexto",
        "Memória externa",
        "Agente",
        "Fluxo determinístico"
      ],
      "regras": [
        "Toda afirmação factual precisa de ancoragem em fonte recuperada",
        "Base que muda com frequência e exige citação aponta para RAG, não para ajuste fino",
        "Reprodutibilidade depende do registro do processo, não do modelo isoladamente",
        "Avaliação de qualidade exige subgrupos e dados não vistos"
      ],
      "comparacoes": [
        "Generativo produz conteúdo novo; discriminativo retorna rótulo ou valor fechado",
        "RAG atualiza o conhecimento sem retreinar; ajuste fino altera os parâmetros do modelo",
        "Busca semântica casa o sentido; busca textual casa a forma"
      ],
      "fluxos": [
        "Pergunta → recuperação de trechos → resposta ancorada com citação → verificação de fontes",
        "Definição de critério → verificação de dado sensível → avaliação por subgrupo → revisão humana"
      ],
      "excecoes": [
        "Recuperação aumentada reduz, mas não elimina, a alucinação sobre o material recuperado",
        "Alta acurácia global não dispensa análise por subgrupo nem revisão humana"
      ],
      "palavrasChave": [
        "generativo",
        "discriminativo",
        "RAG",
        "ajuste fino",
        "alucinação",
        "embedding",
        "busca híbrida",
        "reprodutibilidade"
      ],
      "checklist": [
        "Classifiquei a tarefa como geração de texto ou classificação com saída fechada",
        "Escolhi RAG para base volátil com citação ou ajuste fino para adaptar comportamento",
        "Distingui alucinação, erro de lógica e erro de dado antes de propor a correção",
        "Verifiquei se a busca é semântica, textual ou híbrida conforme o tipo de consulta",
        "Registrei parâmetros, semente e versão do modelo para reproduzir a resposta",
        "Avaliei a qualidade por subgrupo e em dados não vistos",
        "Defini quando usar fluxo determinístico e quando usar agente"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença prática entre «o modelo errou o prazo» e «o índice estava desatualizado»?",
        "dados": "O modelo informa um prazo que não consta de ato normativo; o índice da base contém versão desatualizada de um regulamento; ambas as saídas parecem corretas na forma.",
        "conceitos": [
          "Alucinação",
          "Erro de dado"
        ],
        "estrategia": "Classificar a origem do defeito antes de propor a correção: se a afirmação não tem lastro na fonte, é alucinação; se o modelo é fiel a um material incorreto, é erro de dado.",
        "execucao": [
          "1) Verificar se a afirmação do modelo encontra correspondência na fonte recuperada",
          "2) Se não houver correspondência, classificar como alucinação e propor ancoragem com citação",
          "3) Se houver correspondência com material desatualizado, classificar como erro de dado e propor saneamento e versionamento da base",
          "4) Não otimizar o prompt quando o problema está na base de conhecimento"
        ],
        "resultado": "Classificação precisa do defeito, com correção direcionada ao mecanismo real: ancoragem e verificação para alucinação, governança e atualização para erro de dado.",
        "justificativa": "Confundir alucinação com erro de dado leva a equipe a otimizar o prompt quando o problema era a base; cada defeito exige providência distinta, e a classificação correta é o primeiro passo da correção.",
        "errosFrequentes": [
          "Tratar toda afirmação incorreta como alucinação, ignorando que a base pode estar desatualizada",
          "Otimizar o prompt sem investigar se o material recuperado está correto e vigente"
        ],
        "variacao": "Se a afirmação incorreta for sobre um valor numérico de uma tabela, o mesmo fluxo se aplica: verificar a fonte, classificar a origem e corrigir o mecanismo adequado."
      },
      {
        "tipo": "aplicacao",
        "problema": "Por que a busca textual ainda é útil em um sistema de RAG institucional, quando já existe a busca semântica por embeddings?",
        "dados": "Consultas por códigos de norma, números de processo e termos técnicos raros; base heterogênea com documentos em diferentes formatos; sistema de recuperação com busca semântica e busca literal.",
        "conceitos": [
          "Embedding",
          "Busca textual",
          "Busca híbrida"
        ],
        "estrategia": "Usar busca semântica para perguntas em linguagem natural e busca textual para códigos, números exatos e termos técnicos raros, combinando as duas em busca híbrida.",
        "execucao": [
          "1) Mapear os tipos de consulta do órgão: linguagem natural, códigos, números exatos, termos técnicos raros",
          "2) Configurar busca semântica (embedding) para consultas em linguagem natural e base heterogênea",
          "3) Configurar busca textual (correspondência literal) para códigos, números de norma e identificadores de processo",
          "4) Combinar as duas pontuações em busca híbrida para reduzir omissões e irrelevâncias",
          "5) Testar a recuperação separadamente para cada tipo de consulta antes de integrar"
        ],
        "resultado": "Sistema de recuperação que encontra trechos relevantes tanto por sentido quanto por correspondência literal, com redução de omissões e de resultados irrelevantes.",
        "justificativa": "A busca semântica tolera paráfrases e sinônimos, mas falha em códigos e termos técnicos raros; a busca textual casa a forma e é exata para esses casos; a combinação híbrida cobre ambas as necessidades.",
        "errosFrequentes": [
          "Usar apenas busca semântica para consultas de códigos e números exatos, onde o embedding pode falhar",
          "Usar apenas busca textual para perguntas em linguagem natural, que exige casamento de sentido"
        ],
        "variacao": "Se a consulta for por um trecho de lei com número exato, a busca textual é a escolha adequada; se for por o significado de um conceito, a busca semântica é mais apropriada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o modelo de linguagem é amostrado, não é possível garantir reprodutibilidade de uma resposta administrativa no sistema do órgão.'",
        "dados": "O modelo gera texto por amostragem de uma distribuição; o sistema do órgão registra prompt, versão do modelo, parâmetros e fontes; o cidadão exige a mesma resposta para a mesma pergunta.",
        "conceitos": [
          "Amostragem probabilística",
          "Determinismo",
          "Registro do processo"
        ],
        "estrategia": "A reprodutibilidade é atributo do processo, não do modelo: fixar parâmetros, registrar prompt, versão, parâmetros e fontes, e usar cache determinístico quando necessário.",
        "execucao": [
          "1) Reconhecer que a geração padrão é amostragem e pode produzir saídas diferentes para o mesmo prompt",
          "2) Fixar parâmetros de geração (temperatura, top-p, semente) para reduzir variabilidade",
          "3) Registrar o prompt completo, a versão do modelo, os parâmetros e as fontes usadas em cada resposta",
          "4) Implementar cache determinístico para consultas repetidas, quando a regra do órgão exigir a mesma saída",
          "5) Não prometer que o modelo, isoladamente, reproduza a mesma saída sem registro do processo"
        ],
        "resultado": "Resposta administrativa reproduzível por meio do registro do processo, com parâmetros fixados, fontes citadas e trilha de auditoria, e não por promessa do modelo isolado.",
        "justificativa": "O mesmo prompt pode produzir saídas diferentes porque a geração é amostragem; a reprodutibilidade depende do registro do processo, e não de uma propriedade intrínseca do modelo.",
        "errosFrequentes": [
          "Concluir que a reprodutibilidade é impossível por causa da amostragem, ignorando o registro do processo",
          "Esperar que o modelo, sozinho, garanta a mesma saída sem fixação de parâmetros nem cache"
        ],
        "variacao": "Se o órgão exigir que a mesma resposta seja dada a todos os cidadãos para a mesma pergunta, a solução é o registro do processo com parâmetros fixos e cache, e não a substituição do modelo."
      }
    ]
  }
};
