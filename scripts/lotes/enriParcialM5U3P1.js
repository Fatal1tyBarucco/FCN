const enriParcialM5U3P1 = {
  "m5-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Entender a fronteira entre modelos generativos e discriminativos organiza o restante da unidade, pois define o que cada família entrega: um rótulo ou valor dentro de classes conhecidas e um conteúdo novo em formato livre. Dessas escolhas decorrem a necessidade de conferência da saída, o custo medido em tokens e o limite prático da janela de contexto. Sem esse vocabulário, o aluno não explica por que um assistente pode inventar um dado nem por que um documento extenso não cabe em uma única conversa.",
      "preRequisitos": [
        "Noção de classificação e regressão em modelos supervisionados",
        "Representação vetorial de dados e distância entre vetores",
        "Ideia de probabilidade condicional sobre sequências",
        "Leitura crítica de saída de modelo, com verificação de fato e de formato"
      ],
      "objetivosObservaveis": [
        "Classificar uma tarefa como generativa ou discriminativa a partir da natureza da saída",
        "Explicar o processo de tokenização e sua relação com custo e limites",
        "Relacionar embeddings à busca semântica e à recuperação de trechos",
        "Descrever o efeito da janela de contexto sobre a qualidade e a memória entre chamadas"
      ],
      "competencias": [
        "Análise técnica da natureza da tarefa antes da escolha do modelo",
        "Estimativa de custo e de viabilidade a partir da contagem de tokens",
        "Leitura crítica de saída generativa, distinguindo formato de conteúdo",
        "Tomada de decisão sobre uso de recuperação externa"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u3-t1-s2 (Geração probabilística, Transformer, atenção e fases de construção do modelo) — detalha o mecanismo que produz os tokens aqui definidos",
        "m5-u3-t2-s2 (RAG, embeddings e bases vetoriais) — aprofunda o uso de embeddings para recuperação",
        "m5-u3-t2-s1 (Alucinações, limites de contexto e incerteza) — consequência direta da geração livre e da janela finita"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção generativo/discriminativo e os limites de contexto são objeto de itens que cobram raciocínio sobre IA, inclusive em afirmações certo/errado sobre memória, custo e verificação; a classificação é estimativa pedagógica de relevância no conteúdo, não frequência estatística."
      }
    },
    "niveis": {
      "iniciante": "O aluno distingue as duas famílias pela saída: o modelo discriminativo devolve um rótulo ou um número de um conjunto definido no treinamento, como spam ou não spam e tempo estimado; o generativo produz conteúdo novo em formato livre, como texto, imagem ou código. Reconhece que token é a unidade mínima processada, que embeddings posicionam textos próximos pelo significado e que a janela de contexto é o limite de tokens de cada passagem.",
      "intermediario": "O aluno aplica os conceitos na leitura de um caso: verifica que a contagem de tokens determina custo e limite, que embeddings viabilizam busca semântica entre trechos e que o que fica fora da janela não é visto pelo modelo. Identifica que cada chamada é independente, salvo memória externa implementada pelo aplicativo, e justifica por que a saída generativa exige conferência de fato e de formato antes do uso.",
      "avancado": "O aluno analisa casos-limite: documento longo que precisa ser recortado ou recuperado, consulta em que o texto relevante fica diluído em contexto saturado e tarefa em que a família de modelo escolhida não corresponde à natureza da saída. Propõe o recorte de contexto, a recuperação por embeddings e a definição de critérios de conferência como resposta técnica ao cenário.",
      "especialista": "O aluno projeta o uso institucional desses conceitos: dimensiona a janela e o orçamento de tokens por demanda, decide quando a recuperação externa substitui o envio integral do documento e incorpora à política a regra de que o modelo não é fonte de fato. Distingue conhecimento paramétrico de conteúdo recuperado e vincula essa distinção às exigências de rastreabilidade e de verificação."
    },
    "comparacoes": [
      {
        "tema": "Modelo discriminativo versus modelo generativo",
        "a": {
          "rotulo": "Modelo discriminativo",
          "texto": "Estima a probabilidade de um rótulo ou de um valor a partir da entrada; aprende a separar classes e devolve sempre uma saída dentro de um conjunto definido no treinamento, como classificação, regressão ou detecção de anomalia."
        },
        "b": {
          "rotulo": "Modelo generativo",
          "texto": "Aprende a distribuição de sequências e produz conteúdo novo em formato livre; a saída é variável e imprevisível quanto à forma, o que amplia as possibilidades de erro e exige conferência de fato, de formato e de adequação."
        },
        "diferencaGabarito": "O discriminativo escolhe entre opções já conhecidas e o generativo constrói a resposta; por isso o generativo demanda verificação posterior, enquanto o discriminativo é avaliado por métrica sobre classes ou valores."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Como o modelo foi treinado com a internet, ele conhece o documento interno do órgão, desde que este esteja disponível na rede interna.",
        "porqueErrada": "O conhecimento do modelo está fixado nos pesos aprendidos no treinamento e não se estende à rede interna nem à base do órgão. Sem recuperação explícita, o conteúdo interno não entra na conversa, e o modelo pode preencher a lacuna com texto plausível.",
        "versaoCorreta": "O modelo só usa documento interno quando ele é recuperado por mecanismo externo e inserido no contexto; o conhecimento paramétrico não dá acesso à rede interna, e a resposta sobre norma interna precisa de fonte recuperada e verificável."
      },
      {
        "afirmacaoEquivocada": "Janela de contexto é o espaço de armazenamento em que o modelo guarda as conversas anteriores para consultá-las depois.",
        "porqueErrada": "A janela é o limite de tokens processados em uma única passagem, não um arquivo de histórico. Por padrão, cada chamada é independente; a continuidade depende de o aplicativo reenviar o histórico ou de uma memória externa, e confundir os dois leva a supor que o modelo lembra o que nunca foi reenviado.",
        "versaoCorreta": "A janela de contexto é o teto de tokens de cada processamento, e o que fica fora dela não é visto. A lembrança entre chamadas é implementada pelo aplicativo, por reenvio, resumo ou base vetorial, nunca pelo modelo por conta própria."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Modelo discriminativo (rótulo ou valor)",
        "Modelo generativo (conteúdo novo em formato livre)",
        "Tokenização (segmentação em unidades mínimas)",
        "Embeddings (posicionamento vetorial por significado)",
        "Janela de contexto (limite de tokens por passagem)"
      ],
      "regras": [
        "A saída discriminativa pertence a um conjunto definido no treinamento; a generativa é livre",
        "A contagem de tokens define custo e limite de uso",
        "O que fica fora da janela não é visto pelo modelo",
        "Cada chamada é independente, salvo memória externa do aplicativo"
      ],
      "comparacoes": [
        "Discriminativo escolhe entre classes conhecidas; generativo constrói a resposta",
        "Embedding aproxima textos por significado; a janela apenas limita quantidade"
      ],
      "fluxos": [
        "Texto que entra é tokenizado, convertido em embeddings e processado dentro da janela até a saída",
        "Documento extenso é recortado ou recuperado por embeddings, e só os trechos relevantes entram no contexto"
      ],
      "excecoes": [
        "Memória entre chamadas pertence ao aplicativo, não ao modelo",
        "Contexto saturado pode reduzir a recuperação de informação relevante",
        "Documento extenso pode exigir recorte, resumo ou recuperação externa"
      ],
      "palavrasChave": [
        "generativo",
        "discriminativo",
        "token",
        "embedding",
        "janela de contexto",
        "recuperação",
        "memória externa"
      ],
      "checklist": [
        "Identificar a natureza da saída antes de escolher a família de modelo",
        "Estimar custo e viabilidade pela contagem de tokens",
        "Verificar se o conteúdo necessário cabe na janela de contexto",
        "Definir recuperação externa quando o material exceder a janela",
        "Conferir fato e formato da saída generativa",
        "Distinguir conhecimento paramétrico de conteúdo recuperado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique: (a) classificador de e-mails em spam e não spam; (b) modelo que redige resposta a uma pergunta de atendimento; (c) modelo que estima o tempo de análise de um requerimento.",
        "dados": "Três tarefas descritas sem nome de produto: classificar e-mails em spam ou não spam; redigir resposta a pergunta de atendimento; estimar o tempo de análise de um requerimento a partir de dados históricos.",
        "conceitos": [
          "modelo discriminativo",
          "modelo generativo",
          "natureza da saída"
        ],
        "estrategia": "Decidir pela natureza da saída, não pelo nome da tarefa: rótulo ou valor pertencem ao discriminativo; texto novo em formato livre pertence ao generativo, e essa diferença define a forma de avaliar o resultado.",
        "execucao": [
          "1. Verificar o formato da saída de cada tarefa: rótulo, número ou texto livre.",
          "2. Rótulo entre classes conhecidas indica modelo discriminativo.",
          "3. Texto novo em formato livre indica modelo generativo.",
          "4. Concluir a classificação e indicar a forma de avaliação de cada caso."
        ],
        "resultado": "(a) e (c) são discriminativos: a saída é um rótulo ou um valor dentro de um conjunto definido no treinamento. (b) é generativo: a saída é texto novo, variável e livre, o que exige verificação posterior — a mesma razão pela qual o item (c), embora preveja valor, é tratada por métrica de regressão e não por revisão textual.",
        "justificativa": "O gabarito decorre do tipo de saída: os itens (a) e (c) devolvem rótulo ou valor dentro de conjunto definido no treinamento, enquanto (b) produz texto imprevisível, o que o coloca na família generativa e justifica conferência posterior.",
        "errosFrequentes": [
          "Classificar pela aparência da tarefa, sem observar o formato da saída",
          "Tratar a estimativa de tempo como generativa porque o enunciado menciona um modelo"
        ],
        "variacao": "Se a tarefa (c) mudasse para redigir por escrito a justificativa do tempo estimado, ela passaria a gerar texto livre e a exigir conferência de conteúdo, aproximando-se do caso generativo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão tem 40.000 perguntas frequentes respondidas. Quando compensa usar RAG em vez de vetorizar o modelo com esse material?",
        "dados": "Base de 40.000 perguntas frequentes já respondidas; dúvida entre inserir o material no treinamento, parametrizando o modelo, ou recuperá-lo no momento da consulta, com atualização periódica do conteúdo.",
        "conceitos": [
          "janela de contexto",
          "embeddings",
          "RAG",
          "custo de tokens"
        ],
        "estrategia": "Comparar os dois caminhos por três critérios: volume em relação à janela de contexto, necessidade de atualização do conteúdo e exigência de exibir a fonte da resposta.",
        "execucao": [
          "1. Verificar se as 40.000 respostas cabem na janela de contexto, o que não ocorre em uma única passagem.",
          "2. Considerar a frequência de atualização das respostas.",
          "3. Optar por indexar os documentos em embeddings e recuperar os trechos relevantes a cada pergunta.",
          "4. Inserir os trechos recuperados no contexto e pedir que a resposta cite a origem.",
          "5. Manter o modelo estável, atualizando apenas a base quando o conteúdo mudar."
        ],
        "resultado": "Quando o volume excede o que cabe na janela de contexto ou quando a resposta precisa ser atualizada com frequência, sem retreinar o modelo. O RAG índexa os documentos em embeddings, busca os trechos semanticamente mais próximos a cada pergunta e os insere no prompt. Compensa porque mantém o modelo estável, permite atualizar o conhecimento apenas reindexando a base e torna a resposta verificável, pois a fonte pode ser exibida. Não compensa quando a resposta exige raciocínio numérico extenso ou quando a base é pequena e estável.",
        "justificativa": "O gabarito sustenta-se no volume muito acima da janela e na necessidade de atualização sem novo treinamento; a recuperação por embeddings mantém o modelo estável, permite atualizar a base e torna a resposta verificável pela fonte exibida.",
        "errosFrequentes": [
          "Supor que todo o material pode ser ensinado ao modelo em uma chamada",
          "Achar que o RAG substitui a conferência da resposta contra o trecho"
        ],
        "variacao": "Se a base caísse para 30 respostas estáveis sobre um assunto fixo, a inserção direta no contexto seria suficiente e o custo de manter um índice vetorial deixaria de se justificar."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação de que um modelo treinado com a internet conhece documento interno do órgão disponível na rede interna, apontando o que de fato é necessário para o acesso a esse conteúdo.",
        "dados": "Nota interna de 20 páginas disponível apenas na intranet do órgão; a pergunta é feita a uma ferramenta externa sem envio do documento e sem base vetorial configurada.",
        "conceitos": [
          "conhecimento paramétrico",
          "janela de contexto",
          "recuperação externa"
        ],
        "estrategia": "Separar o que o modelo aprendeu no treinamento do que precisa ser fornecido no contexto e apontar a recuperação explícita como única via de acesso ao documento interno.",
        "execucao": [
          "1. Reconhecer que o treinamento fixa o conhecimento nos pesos e não inclui a intranet do órgão.",
          "2. Verificar que o documento não foi enviado nem indexado em base acessível.",
          "3. Concluir que o modelo não tem acesso ao conteúdo interno por conta própria.",
          "4. Indicar a recuperação explícita do trecho e a citação da fonte como uso correto."
        ],
        "resultado": "Errado. O conhecimento do modelo é fixado no treinamento; ele não consulta a rede interna nem a base do órgão por conta própria. Para usar documento interno, é preciso recuperá-lo explicitamente, por RAG ou envio no prompt, dentro do limite da janela de contexto.",
        "justificativa": "O gabarito decorre do mecanismo: o conhecimento é fixado no treinamento e não consulta a rede; sem o documento no contexto, qualquer resposta sobre ele é plausível e não verificada, o que torna obrigatória a recuperação com fonte.",
        "errosFrequentes": [
          "Confundir a disponibilidade do documento na rede interna com acesso do modelo",
          "Aceitar resposta sobre norma interna sem trecho recuperado e citado"
        ],
        "variacao": "Se o órgão configurasse uma base vetorial com a nota interna e recuperasse o trecho antes de responder, a mesma pergunta passaria a ter resposta ancorada e citável, deixando de depender do conhecimento paramétrico."
      }
    ]
  },
  "m5-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Compreender que a geração é probabilística explica a variabilidade das respostas e a impossibilidade de tratá-las como determinísticas. Já a arquitetura Transformer e o mecanismo de atenção esclarecem como o modelo usa o contexto para prever o próximo token. Distinguir treinamento, ajuste fino, alinhamento e inferência evita o erro de supor que o modelo aprende em produção, ponto cobrado em itens sobre IA generativa.",
      "preRequisitos": [
        "Ideia de distribuição de probabilidade sobre um vocabulário",
        "Noção de vetor e de produto escalar entre vetores",
        "Conceito de parâmetro ajustável em um modelo, isto é, de peso",
        "Diferença entre fase de construção e fase de uso do modelo"
      ],
      "objetivosObservaveis": [
        "Explicar a geração token a token como escolha sucessiva sobre uma distribuição",
        "Descrever o mecanismo de atenção em termos de consulta, chave e valor",
        "Explicar o papel do embedding posicional e da máscara causal",
        "Distinguir treinamento, ajuste fino, alinhamento e inferência por objetivo e momento"
      ],
      "competencias": [
        "Análise técnica do funcionamento interno do modelo",
        "Interpretação da variabilidade de saída sob a ótica probabilística",
        "Diferenciação de etapas por dados utilizados e efeito produzido",
        "Tomada de decisão sobre quando recorrer a ajuste fino e quando a recuperação basta"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m5-u3-t1-s1 (Modelos generativos x discriminativos, tokens, embeddings e janela de contexto) — fornece os conceitos de token e embedding usados na atenção",
        "m5-u3-t2-s1 (Alucinações, limites de contexto e incerteza) — decorre da geração probabilística e da modelagem implícita da incerteza",
        "m5-u3-t2-s2 (RAG, embeddings e bases vetoriais) — alternativa ao ajuste fino para incorporar conhecimento atualizável"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A descrição do Transformer, da atenção e das fases de construção é objeto de itens que pedem a função de cada etapa ou o efeito do não determinismo sobre a reprodutibilidade; a classificação é estimativa pedagógica de relevância no conteúdo, não contagem de incidência."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende que o modelo gera um token por vez, escolhendo o seguinte a partir de uma distribuição de probabilidade condicionada ao contexto, e que essa escolha pode ser sorteada. Reconhece que a arquitetura Transformer processa a sequência em paralelo, que a atenção decide quanto pesar cada token do contexto e que a posição precisa ser informada por um embedding específico.",
      "intermediario": "O aluno descreve a atenção em termos de consulta, chave e valor: para cada token calcula-se uma consulta, comparam-se as chaves dos demais, normalizam-se os escores em pesos e combina-se os valores. Explica que a máscara causal impede ver tokens futuros e que treinamento, ajuste fino, alinhamento e inferência se distinguem por objetivo, dados e momento de execução.",
      "avancado": "O aluno analisa implicações: a amostragem explica respostas diferentes para o mesmo prompt; a incerteza é modelada de forma implícita, sem probabilidade calibrada de acerto; e a produção não altera os pesos. Propõe, para tarefas que exigem repetibilidade, a fixação de parâmetros, o registro de versão, prompt e saída, e o uso de cache determinístico.",
      "especialista": "O aluno governa o ciclo de vida do modelo: separa o que cabe ao treinamento, ao ajuste fino e ao alinhamento, reserva o alinhamento para objetivos e preferências definidos por pessoas e trata a inferência como aplicação a caso novo. Estrutura a reprodutibilidade como propriedade do processo, com parâmetros, versão e trilha registrados, e não como garantia do modelo."
    },
    "comparacoes": [
      {
        "tema": "Ajuste fino versus alinhamento",
        "a": {
          "rotulo": "Ajuste fino (fine-tuning)",
          "texto": "Novo treinamento em escala menor sobre conjunto específico, para adaptar o modelo a um domínio ou a um estilo. Altera os pesos e exige dados selecionados, com cuidado contra o overfitting e contra o desvio do comportamento original."
        },
        "b": {
          "rotulo": "Alinhamento",
          "texto": "Etapa que orienta o comportamento do modelo segundo objetivos e preferências definidos por pessoas, como utilidade e segurança. Não é o mesmo que ensinar conteúdo de domínio: busca tornar a conduta do modelo mais adequada ao uso pretendido."
        },
        "diferencaGabarito": "O ajuste fino incorpora conhecimento e estilo de domínio; o alinhamento calibra o comportamento e as preferências. Por isso, adaptar o vocabulário de um regimento é ajuste fino, enquanto tornar a saída mais segura e útil é alinhamento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O ajuste fino do modelo é a etapa em que ele aprende com os erros apontados pelos usuários em produção.",
        "porqueErrada": "A produção gera dados de retorno, mas o modelo não se altera durante o uso: ajuste fino é treinamento adicional, executado fora da linha, com dados selecionados. O que muda em produção é o contexto fornecido e, no máximo, a coleta de retorno para um ciclo futuro.",
        "versaoCorreta": "O ajuste fino ocorre fora da produção, com dados escolhidos, e altera os pesos do modelo; em produção, o que se altera é o contexto e, eventualmente, o registro de retorno para um treinamento posterior, nunca os pesos em tempo real."
      },
      {
        "afirmacaoEquivocada": "Como o modelo processa a sequência inteira, o embedding posicional é dispensável, pois a atenção já captura a ordem das palavras.",
        "porqueErrada": "O mecanismo de atenção puro é invariante à ordem, pois combina valores por peso e não distingue posições por si só. O embedding posicional é que injeta a informação de ordem; sem ele, expressões com as mesmas palavras em ordem trocada teriam a mesma representação de entrada.",
        "versaoCorreta": "O embedding posicional é necessário porque a atenção pura não distingue a ordem; ele acrescenta a posição de cada token e permite que a atenção pondere corretamente tokens que só se diferenciam pela posição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Geração probabilística token a token",
        "Arquitetura Transformer",
        "Mecanismo de atenção (consulta, chave, valor)",
        "Embedding posicional",
        "Máscara causal",
        "Treinamento, ajuste fino, alinhamento e inferência"
      ],
      "regras": [
        "Cada token é escolhido de uma distribuição condicionada ao contexto",
        "A atenção normaliza escores em pesos que somam um",
        "A máscara causal impede o acesso a tokens futuros na geração de texto",
        "A produção não altera os pesos do modelo"
      ],
      "comparacoes": [
        "Ajuste fino adapta domínio; alinhamento orienta comportamento",
        "Treinamento produz o modelo; inferência apenas o aplica"
      ],
      "fluxos": [
        "Contexto vira embeddings de token e de posição, passa por blocos de atenção, gera logits e resulta em distribuição sobre o vocabulário, da qual sai o token escolhido",
        "Treinamento, ajuste fino, alinhamento e inferência formam a sequência de construção e uso"
      ],
      "excecoes": [
        "A incerteza é modelada de forma implícita, sem probabilidade calibrada de acerto",
        "O mesmo prompt pode gerar respostas diferentes por causa da amostragem",
        "Alinhamento reduz, mas não elimina, comportamentos indesejáveis"
      ],
      "palavrasChave": [
        "geração probabilística",
        "Transformer",
        "atenção",
        "consulta",
        "chave",
        "valor",
        "máscara causal",
        "ajuste fino",
        "alinhamento",
        "inferência"
      ],
      "checklist": [
        "Descrever a geração como escolha sucessiva de tokens",
        "Explicar a atenção em termos de consulta, chave e valor",
        "Justificar o papel do embedding posicional",
        "Distinguir treinamento, ajuste fino, alinhamento e inferência",
        "Fixar parâmetros para tarefas que exigem reprodutibilidade",
        "Registrar versão do modelo, prompt e saída",
        "Reconhecer que a produção não altera os pesos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que o mesmo prompt, executado duas vezes no mesmo modelo e com a mesma entrada, pode gerar respostas diferentes?",
        "dados": "Mesmo prompt, mesmo modelo e parâmetros de amostragem que introduzem aleatoriedade; duas execuções são comparadas sem qualquer alteração de entrada.",
        "conceitos": [
          "geração probabilística",
          "amostragem",
          "temperatura"
        ],
        "estrategia": "Ligar a variabilidade à amostragem de uma distribuição em cada passo e mostrar que a reprodutibilidade depende de fixar parâmetros e registrar a execução.",
        "execucao": [
          "1. Identificar que o próximo token é amostrado de uma distribuição, não escolhido de forma fixa.",
          "2. Reconhecer que parâmetros de aleatoriedade ampliam ou reduzem a dispersão.",
          "3. Concluir que duas execuções podem divergir sem erro do sistema.",
          "4. Indicar a fixação de parâmetros e o registro para tarefas que exigem repetição."
        ],
        "resultado": "Porque a geração é probabilística: em cada passo, o token seguinte é amostrado de uma distribuição condicionada ao contexto, e parâmetros que alteram o grau de aleatoriedade ampliam ou reduzem a dispersão. Consequência de governança: para tarefas que exigem reprodutibilidade, é preciso fixar parâmetros e registrar a versão do modelo, o prompt e a saída.",
        "justificativa": "O resultado é o gabarito porque a variabilidade não é falha, mas consequência da amostragem sobre a distribuição; a repetibilidade, quando necessária, vem do processo que fixa parâmetros e registra versão, prompt e saída.",
        "errosFrequentes": [
          "Atribuir a diferença a erro do modelo ou do servidor",
          "Supor que repetir o prompt garante a mesma resposta"
        ],
        "variacao": "Se a tarefa exigir resultado idêntico entre execuções, o caminho é fixar parâmetros e usar cache determinístico, registrando a versão do modelo e o prompt como parte do processo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão quer que o modelo use o vocabulário do seu regimento interno. Ajuste fino ou RAG?",
        "dados": "Regimento interno com atualizações periódicas; o objetivo declarado é que o modelo aplique o vocabulário da casa e que, em perguntas específicas, cite o dispositivo correspondente.",
        "conceitos": [
          "ajuste fino",
          "RAG",
          "frequência de atualização"
        ],
        "estrategia": "Separar o objetivo em dois: adotar estilo e vocabulário, que é comportamento, e citar a norma vigente, que é conhecimento atualizável, escolhendo a técnica correspondente a cada um.",
        "execucao": [
          "1. Verificar se o objetivo é adaptar o comportamento, com estilo e vocabulário, ou citar conteúdo atualizável.",
          "2. Para o comportamento, indicar ajuste fino com exemplos do regimento.",
          "3. Para a citação da norma vigente, indicar recuperação dos trechos antes de responder.",
          "4. Registrar que as duas técnicas são cumuláveis e que a base muda com mais frequência que o estilo."
        ],
        "resultado": "Se o objetivo é que o modelo adote o estilo e o vocabulário e aplique o regimento em casos novos, o ajuste fino é o caminho. Se o objetivo é que ele cite o regimento quando perguntado, o RAG é mais eficiente, mais barato e mais fácil de atualizar quando o regimento muda. Regra prática: base que muda com frequência pede recuperação; comportamento que muda pede ajuste fino; as duas coisas juntas são cumuláveis.",
        "justificativa": "O gabarito segue o critério de estabilidade: conhecimento que muda com frequência favorece a recuperação; comportamento que deve mudar favorece o ajuste fino; e nada impede combinar as duas técnicas quando ambos os objetivos coexistem.",
        "errosFrequentes": [
          "Escolher ajuste fino para conteúdo que muda toda semana",
          "Achar que a recuperação, sozinha, altera o estilo de redação do modelo"
        ],
        "variacao": "Se o regimento fosse estável por anos e a exigência fosse apenas reproduzir o estilo em toda saída, o ajuste fino bastaria e dispensaria a recuperação a cada consulta."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'O ajuste fino do modelo é a etapa em que ele aprende com os erros apontados pelos usuários em produção.'",
        "dados": "Um assistente em produção recebe correções de servidores, e supõe-se que essas correções ajustam o modelo em tempo real, sem ciclo de treinamento separado.",
        "conceitos": [
          "ajuste fino",
          "ciclo de retorno",
          "inferência"
        ],
        "estrategia": "Corrigir a confusão entre operação e treinamento, mostrando que a produção alimenta contexto e coleta de retorno, mas não altera os pesos.",
        "execucao": [
          "1. Separar o que ocorre em produção, que é contexto e retorno, do que ocorre em treinamento, que é alteração de pesos.",
          "2. Reconhecer que o modelo não se modifica enquanto está em uso.",
          "3. Situar o ajuste fino como treinamento adicional fora da linha, com dados selecionados.",
          "4. Indicar que o retorno alimenta um ciclo futuro de treinamento, não o comportamento imediato."
        ],
        "resultado": "Errado. A produção gera dados de retorno, mas o modelo não se altera ali: ajuste fino é treinamento adicional, executado fora da linha, com dados selecionados. O que muda em produção é o contexto e, eventualmente, o mecanismo de coleta de retorno para um futuro ciclo de treinamento.",
        "justificativa": "O gabarito distingue operação de construção: o retorno coletado em produção é insumo para um ciclo posterior, mas a alteração dos pesos só ocorre em treinamento adicional, executado fora da linha e com dados selecionados.",
        "errosFrequentes": [
          "Supor que o modelo aprende automaticamente com as correções do dia a dia",
          "Confundir atualização do contexto com atualização dos pesos"
        ],
        "variacao": "Se o órgão quisesse que o modelo adotasse o estilo das correções recorrentes, seria necessário um ciclo de ajuste fino com exemplos selecionados, e não apenas a operação em produção."
      }
    ]
  }
};
