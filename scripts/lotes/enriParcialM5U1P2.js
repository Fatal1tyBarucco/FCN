const enriParcialM5U1P2 = {
  "m5-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra o papel de cada conjunto de dados e o vazamento de informação entre eles, porque avaliação inválida produz métrica inflada e modelo que falha em produção. Saber ordenar as operações — dividir antes, ajustar o pré-processamento só no treino e manter o teste intocado — permite responder itens sobre separação de dados e validação cruzada.",
      "preRequisitos": ["Conceitos de modelo, parâmetro e erro", "Noção de divisão de um conjunto de dados em partes", "Função de perda e métrica de desempenho"],
      "objetivosObservaveis": ["Justificar a separação em três conjuntos e atribuir a cada conjunto um papel correto no ciclo de desenvolvimento", "Explicar o que é vazamento de dados e citar três fontes dele em um pipeline", "Ordenar as operações de pré-processamento e seleção de atributos para evitar vazamento", "Descrever como a validação cruzada k-fold estima o desempenho"],
      "competencias": ["Desenho de experimento de avaliação de modelos", "Auditoria de pipeline quanto a vazamento de dados", "Leitura crítica de métricas reportadas em projeto"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u1-t2-s2 (Generalização, overfitting e underfitting) — o diagnóstico depende da separação correta entre treino e validação", "m5-u2-t2-s2 (Separação treino/validação/teste e vazamento de dados) — retoma o tema na unidade 5.2", "m5-u1-t1-s2 (Dados, atributos, modelos, parâmetros e inferência) — fornece o vocabulário de treino e inferência usado aqui"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Papel dos conjuntos de treino, validação e teste e vazamento de dados são cobrados em itens de certo ou errado e em questões de múltipla escolha sobre avaliação de modelos; a classificação alta decorre da centralidade do tema no Módulo 5 e é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende por que se separa os dados: medir o desempenho nos mesmos exemplos usados no treino não informa se o modelo acerta casos novos. Reconhece a existência de três conjuntos com funções distintas e sabe que o conjunto de teste deve ficar guardado até o fim, sem ser consultado durante o desenvolvimento.",
      "intermediario": "O aluno descreve o papel de cada conjunto: treino ajusta parâmetros, validação compara variantes e escolhe hiperparâmetros, teste fornece a estimativa final de generalização e é usado uma única vez. Explica a validação cruzada k-fold, que particiona o treino em k partes e alterna a parte de validação, e identifica fontes comuns de vazamento, como alvo usado como atributo.",
      "avancado": "O aluno identifica vazamento em um pipeline: normalização ou seleção de atributos ajustada em todo o conjunto antes da divisão, registros correlacionados distribuídos nos dois lados e uso de informação futura em problema temporal. Propõe a ordem correta — dividir, ajustar o pré-processamento apenas no treino e aplicar a transformação à validação e ao teste — e justifica o teste intocado.",
      "especialista": "O aluno audita um experimento completo: reconstrói a ordem das operações, verifica independência entre registros, confirma que o teste foi consultado uma única vez e reestima o desempenho quando encontra vazamento. Propõe correção com divisão por grupo ou temporal, validação cruzada aninhada em bases pequenas e registro das métricas de cada conjunto para comparação."
    },
    "comparacoes": [
      {
        "tema": "Conjunto de validação versus conjunto de teste",
        "a": { "rotulo": "Conjunto de validação", "texto": "Usado durante o desenvolvimento para comparar variantes de modelo e escolher hiperparâmetros. Pode ser consultado repetidamente, e a validação cruzada k-fold é uma forma de obter várias estimativas a partir dele sem abandonar a ideia de dado reservado." },
        "b": { "rotulo": "Conjunto de teste", "texto": "Reservado para uma única estimativa final de generalização, depois de todas as decisões tomadas. Não deve orientar escolha nenhuma; consulta repetida transforma o teste em validação e infla a métrica reportada." },
        "diferencaGabarito": "A diferença está no papel: validação decide, teste estima. Consultar o conjunto de teste mais de uma vez contamina a estimativa final, e é exatamente esse ponto que a prova cobra em itens sobre avaliação."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Usar o conjunto de teste para escolher o melhor modelo é aceitável, desde que a escolha seja documentada.'",
        "porqueErrada": "Cada consulta ao teste acrescenta informação de seleção ao resultado, e a métrica final deixa de ser estimativa independente de generalização. O conjunto passa a funcionar como validação, e o desempenho publicado fica otimista em relação ao uso real.",
        "versaoCorreta": "O conjunto de teste é consultado uma única vez, ao final do desenvolvimento, para estimar a generalização; comparação de modelos e escolha de hiperparâmetros pertencem ao conjunto de validação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A normalização e a seleção de atributos podem ser ajustadas em todos os dados antes da divisão em treino e teste.'",
        "porqueErrada": "Ajustar a transformação em todo o conjunto transporta informação de validação e de teste para o treinamento, o que caracteriza vazamento de dados. A métrica sobe artificialmente e o desempenho em produção decepciona, porque a transformação já conhecia os dados reservados.",
        "versaoCorreta": "A divisão vem primeiro: cada transformação é ajustada apenas no conjunto de treino e depois aplicada à validação e ao teste, preservando a independência entre os conjuntos."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A validação cruzada k-fold dispensa a existência de um conjunto de teste separado.'",
        "porqueErrada": "A validação cruzada reutiliza partes do treinamento como validação e serve para comparar modelos e escolher hiperparâmetros; ela compartilha dados com o treinamento. Sem bloco final independente, a última estimativa continua viciada pela seleção já realizada.",
        "versaoCorreta": "A validação cruzada substitui a validação única em bases pequenas, mas o conjunto de teste separado continua necessário para a estimativa final de generalização."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Conjunto de treino (ajuste de parâmetros)", "Conjunto de validação (seleção de modelo e hiperparâmetros)", "Conjunto de teste (estimativa final)", "Vazamento de dados", "Validação cruzada k-fold", "Pipeline de pré-processamento"],
      "regras": ["Dividir os dados antes de qualquer ajuste de transformação ou de atributo", "Ajustar o pré-processamento apenas no treino e aplicar o resultado à validação e ao teste", "Consultar o conjunto de teste uma única vez, após todas as decisões"],
      "comparacoes": ["Validação decide e pode ser consultada várias vezes; teste estima e é consultado uma vez", "Vazamento infla a métrica por informação indevida; overfitting memoriza ruído do treino"],
      "fluxos": ["Dividir → ajustar pré-processamento no treino → aplicar a validação e ao teste → selecionar modelo em validação → estimar uma vez no teste"],
      "excecoes": ["Em bases muito pequenas, a validação cruzada aninhada reduz a variância da estimativa, com custo computacional maior", "Em dados temporais, a divisão aleatória é inválida e a separação segue a ordem cronológica"],
      "palavrasChave": ["treino", "validação", "teste", "vazamento", "validação cruzada", "k-fold", "generalização", "pipeline"],
      "checklist": ["Descrever o papel de cada conjunto no cenário apresentado", "Confirmar que a divisão ocorreu antes de qualquer ajuste", "Verificar se há alvo, dado futuro ou transformação vazada", "Confirmar que o teste foi usado uma única vez", "Avaliar se a validação cruzada é adequada ao porte da base"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Por que medir o desempenho no próprio conjunto de treinamento é enganoso, e qual conjunto deve servir de referência?",
        "dados": "Um classificador treinado em 4.000 requerimentos atinge 1% de erro nesses mesmos 4.000 registros e 21% de erro em 1.000 registros nunca vistos, oriundos da mesma central de atendimento.",
        "conceitos": ["erro de treinamento", "dados não vistos", "generalização"],
        "estrategia": "Comparar a avaliação feita sobre exemplos já vistos com a avaliação em dados novos e interpretar a distância entre elas como medida de memorização, não de qualidade.",
        "execucao": ["1. Reconhecer que os parâmetros foram ajustados justamente para acertar os 4.000 registros de treino.", "2. Ler os dois números: 1% de erro no treino e 21% em dados novos.", "3. Concluir que o erro de treino subestima o erro real.", "4. Adotar validação ou teste como referência de desempenho."],
        "resultado": "O modelo já viu aqueles exemplos: o erro medido subestima o erro real, porque inclui memória dos dados. O desempenho que interessa é em dados nunca vistos (validação/teste).",
        "justificativa": "O gabarito apoia-se no fato de que os parâmetros foram ajustados para minimizar o erro exatamente naqueles registros: a métrica de treino mede ajuste, e a de dados novos mede utilidade do modelo.",
        "errosFrequentes": ["Usar acurácia de treino como indicador de qualidade do modelo", "Supor que bom desempenho no treino se transfere automaticamente a casos novos"],
        "variacao": "Se o erro no treino e na validação fossem ambos próximos de 21%, a conclusão seria outra: o problema não seria memorização, e sim falta de capacidade ou de atributos úteis."
      },
      {
        "tipo": "aplicacao",
        "problema": "Previsão de demanda mensal com 36 meses de histórico: como separar os dados corretamente em treino, validação e teste?",
        "dados": "Série com 36 meses de demanda mensal por unidade de atendimento; o modelo deve prever meses futuros a partir dos anteriores, e há indício de repetição anual do comportamento.",
        "conceitos": ["separação temporal", "validação", "ordem cronológica"],
        "estrategia": "Respeitar a ordem cronológica: treinar em meses antigos, validar em meses intermediários e testar no bloco mais recente, sem embaralhar registros entre os conjuntos.",
        "execucao": ["1. Ordenar os 36 meses cronologicamente.", "2. Destinar os 24 primeiros meses ao treinamento.", "3. Destinar os 6 meses seguintes à validação e à escolha de hiperparâmetros.", "4. Reservar os 6 meses finais para o teste único.", "5. Evitar divisão aleatória, que misturaria meses futuros no treino."],
        "resultado": "Separação temporal: treinar com meses anteriores, validar com meses seguintes e testar com o período mais recente ainda não usado. Emular o futuro com dados passados é o único modo honesto de avaliação para séries temporais.",
        "justificativa": "O gabarito sustenta-se na estrutura do problema: em série temporal o dado futuro não está disponível no momento da previsão, e a divisão aleatória usaria informação futura no treino, configurando vazamento.",
        "errosFrequentes": ["Aplicar divisão aleatória 80/20 em dados com ordem temporal", "Reaproveitar o bloco final para ajuste depois de realizado o teste"],
        "variacao": "Se houvesse apenas 12 meses de histórico e comportamento anual, a separação em três blocos ficaria inviável e a alternativa seria validação com janelas deslizantes, mantendo o bloco final intocado."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Basta dividir 80/20 para obter avaliação confiável.' Ela se sustenta em uma base com registros correlacionados?",
        "dados": "Base de 20.000 requisições de serviço, em que várias pertencem ao mesmo requerente e foram registradas no mesmo dia. A divisão aleatória 80/20 produz 92% de acurácia; em produção, o modelo acerta 68%.",
        "conceitos": ["independência dos registros", "vazamento de dados", "representatividade"],
        "estrategia": "Questionar a suficiência da divisão aleatória verificando a independência entre registros e a representatividade das classes em cada conjunto antes de aceitar a métrica.",
        "execucao": ["1. Verificar se registros do mesmo requerente ou do mesmo dia ficaram nos dois conjuntos.", "2. Reconhecer que registros correlacionados transportam informação de um conjunto para o outro.", "3. Comparar os 92% medidos com os 68% observados em produção.", "4. Concluir que a divisão aleatória inflou a estimativa."],
        "resultado": "Errado como garantia: depende da independência dos registros e da representatividade; com dados agrupados ou temporais, divisão aleatória simples vaza informação e infla a métrica.",
        "justificativa": "O gabarito decorre de a confiabilidade da avaliação depender da independência entre os conjuntos, e não da proporção 80/20; registros correlacionados ou ordenados no tempo quebram exatamente essa independência.",
        "errosFrequentes": ["Tratar a proporção 80/20 como garantia de avaliação válida", "Ignorar agrupamentos naturais, como requerente, lote ou data de registro"],
        "variacao": "Se a divisão fosse feita por requerente, com todos os registros de uma pessoa no mesmo conjunto, a métrica cairia para perto do valor observado em produção, confirmando o diagnóstico."
      }
    ]
  },
  "m5-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova cobra o diagnóstico de overfitting e de underfitting a partir dos erros de treino e de validação, e a correção adequada a cada caso. Confundir os dois sinais leva à resposta oposta: aumentar a complexidade de um modelo superajustado ou simplificar um modelo incapaz de aprender. Ler curvas de desempenho é a habilidade central do subtópico.",
      "preRequisitos": ["Separação entre treino, validação e teste", "Noção de função de perda e de erro de avaliação", "Conceito de complexidade de modelo e de parâmetros"],
      "objetivosObservaveis": ["Diagnosticar overfitting e underfitting a partir de curvas de desempenho e indicar correções adequadas a cada caso", "Definir generalização e explicar por que ela é o objetivo real do aprendizado", "Explicar a relação entre viés e variância", "Interpretar curvas de aprendizado em função do tamanho do treino"],
      "competencias": ["Diagnóstico de modelo a partir de curvas de erro", "Decisão de complexidade e de técnica de regularização", "Leitura crítica de resultado de treinamento reportado"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u1-t2-s1 (Treinamento, validação e teste) — fornece os conjuntos em que o diagnóstico é realizado", "m5-u2-t3-s1 (Matriz de confusão, precisão e recall) — métricas usadas para medir o erro diagnosticado", "m5-u2-t2-s2 (Separação treino/validação/teste e vazamento de dados) — distingue overfitting de vazamento"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Overfitting, underfitting e trade-off entre viés e variância comparecem em itens de certo ou errado e em questões de múltipla escolha sobre interpretação de erro de treino e de validação; a classificação alta decorre da centralidade do tema no Módulo 5 e é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O aluno distingue memorizar de aprender com base na diferença entre acertar o que já foi visto e acertar casos novos. Reconhece os nomes overfitting e underfitting e associa o primeiro ao modelo que decora o treinamento e o segundo ao modelo simples demais para capturar o padrão.",
      "intermediario": "O aluno explica viés como erro sistemático por simplificação excessiva e variância como sensibilidade a pequenas mudanças no treinamento, e lê curvas de aprendizado comparando erro de treino e erro de validação. Identifica overfitting quando o primeiro é muito menor que o segundo e underfitting quando ambos são altos e próximos.",
      "avancado": "O aluno escolhe a técnica de controle conforme o diagnóstico: regularização L1 ou L2, early stopping, validação cruzada, aumento de dados ou simplificação do modelo para overfitting; atributos mais informativos ou modelo mais expressivo para underfitting. Decide a complexidade pelo erro de validação, e não pelo erro de treino.",
      "especialista": "O aluno integra qualidade de dados, complexidade e validação em um laudo de modelo: quantifica a distância entre erro de treino e de validação, estima o efeito de cada técnica de controle, define o critério de parada do treinamento e documenta a justificativa da complexidade escolhida, incluindo o risco de viés estrutural que mais dados não corrigem."
    },
    "comparacoes": [
      {
        "tema": "Overfitting versus underfitting do modelo",
        "a": { "rotulo": "Overfitting (excesso de ajuste)", "texto": "Erro de treino baixo e erro de validação alto: o modelo memorizou o ruído como se fosse sinal. Surge com excesso de complexidade, poucos dados ou atributo vazado, e a correção pede redução de complexidade, regularização ou mais dados." },
        "b": { "rotulo": "Underfitting (ajuste insuficiente)", "texto": "Erro alto no treino e na validação, em níveis próximos: o modelo é simples demais ou os atributos são insuficientes. A correção pede modelo mais expressivo ou atributos melhores, e não apenas mais dados de treinamento." },
        "diferencaGabarito": "A direção da correção se inverte: overfitting se trata com regularização, menos complexidade ou mais dados; underfitting, com mais capacidade ou atributos úteis. A prova cobra justamente essa inversão de resposta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Erro de treinamento baixo prova que o modelo está bom.'",
        "porqueErrada": "Erro de treino baixo é compatível com overfitting: o modelo pode ter memorizado os exemplos vistos. A qualidade só se atesta em dados nunca vistos, que é onde o modelo encontra casos diferentes dos memorizados no ajuste.",
        "versaoCorreta": "Erro de treino baixo indica ajuste, não qualidade. A prova de qualidade é o desempenho em validação ou teste, medido em registros que o modelo não viu durante o treinamento."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Aumentar a complexidade do modelo sempre melhora o resultado final.'",
        "porqueErrada": "Acima da complexidade adequada, o ganho de capacidade passa a capturar ruído e a variância cresce, elevando o erro de validação. Modelo mais complexo não é melhor por definição: a complexidade ótima é a que minimiza o erro medido em dados não vistos.",
        "versaoCorreta": "A complexidade adequada é a que minimiza o erro de validação; acima dela, o modelo passa a memorizar ruído e o desempenho em dados novos piora."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Aplicar regularização sempre melhora o modelo, portanto quanto mais forte, melhor.'",
        "porqueErrada": "Regularização em excesso restringe a capacidade do modelo e produz underfitting, com erro alto até no conjunto de treino. A força da penalidade é um hiperparâmetro de configuração e precisa ser ajustada por validação cruzada.",
        "versaoCorreta": "A força da regularização é definida por validação cruzada; em excesso, ela restringe a capacidade do modelo e causa underfitting em vez de melhorar o resultado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Generalização (desempenho em dados não vistos)", "Overfitting (ajuste excessivo ao treino)", "Underfitting (modelo simples demais)", "Viés (erro sistemático)", "Variância (sensibilidade ao treino)", "Early stopping"],
      "regras": ["O erro de generalização é estimado em conjunto de teste independente", "A complexidade ótima é a que minimiza o erro de validação", "Regularização, validação cruzada, early stopping, mais dados e ensemble são técnicas de controle"],
      "comparacoes": ["Overfitting erra por excesso de complexidade; underfitting, por falta dela", "Erro de treino mede ajuste; erro de generalização mede utilidade real", "Regularização L1 zera coeficientes; L2 apenas os encolhe"],
      "fluxos": ["Treinar → medir erro de treino e de validação → diagnosticar → aplicar técnica de controle → revalidar até fechar a distância"],
      "excecoes": ["Mais dados não corrigem viés estrutural do modelo ou do atributo", "Regularização em excesso converte overfitting em underfitting"],
      "palavrasChave": ["generalização", "overfitting", "underfitting", "viés", "variância", "regularização", "validação cruzada", "early stopping", "curva de aprendizado"],
      "checklist": ["Comparar erro de treino e erro de validação antes de concluir", "Classificar o diagnóstico como excesso ou falta de capacidade", "Escolher a técnica de controle na direção correta", "Confirmar a melhora em validação, não apenas no treino", "Verificar se a curva de aprendizado se fecha com mais dados"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Treino com 2% de erro e validação com 31% de erro. Qual o diagnóstico e o que fazer?",
        "dados": "Modelo de classificação de assuntos treinado em 6.000 e-mails: 2% de erro no conjunto de treino e 31% de erro em 1.500 e-mails de validação, com mesmos atributos nas duas medições.",
        "conceitos": ["overfitting", "erro de treino", "erro de validação"],
        "estrategia": "Comparar os dois erros: distância grande, com treino muito baixo, indica memorização do treinamento; a correção mira redução de complexidade, regularização ou aumento de dados.",
        "execucao": ["1. Anotar os dois erros: 2% no treino e 31% na validação.", "2. Calcular a distância entre eles: 29 pontos percentuais.", "3. Reconhecer o padrão de memorização: acerto quase perfeito no treino e erro alto fora dele.", "4. Diagnosticar overfitting e descartar mais épocas de treino como solução."],
        "resultado": "Overfitting típico: o modelo decorou o treinamento e não generaliza. Ações: regularizar, reduzir complexidade ou obter mais dados — não adianta treinar mais.",
        "justificativa": "O gabarito decorre da assinatura do overfitting, erro de treino muito abaixo do erro de validação, e da correspondência entre diagnóstico e ação: mais dados, regularização ou complexidade menor atacam a memorização, enquanto mais épocas não surtem efeito.",
        "errosFrequentes": ["Interpretar erro de treino baixo como sinal de modelo bom", "Prescrever mais épocas de treinamento para um caso de overfitting"],
        "variacao": "Se os erros fossem 2% no treino e 4% na validação, o modelo estaria generalizando bem; se fossem 28% e 31%, o diagnóstico seria underfitting, com correção oposta à do caso original."
      },
      {
        "tipo": "aplicacao",
        "problema": "Modelo de triagem tem treino 28% e validação 29%. O que isso indica e qual o próximo passo?",
        "dados": "Modelo de triagem de requerimentos com 30 atributos disponíveis, erro de 28% no treino e 29% na validação: ambos altos e próximos, medidos nos mesmos períodos.",
        "conceitos": ["underfitting", "capacidade do modelo", "atributos úteis"],
        "estrategia": "Ler erros altos e próximos nos dois conjuntos como falta de capacidade ou de informação e atacar o lado dos atributos ou da expressividade do modelo, verificando depois em validação.",
        "execucao": ["1. Comparar os erros: 28% no treino e 29% na validação.", "2. Descartar memorização, que exigiria distância grande entre os dois valores.", "3. Concluir que o modelo não aprendeu o padrão disponível nos dados.", "4. Testar modelo mais expressivo e acrescentar atributos informativos.", "5. Reavaliar em validação e confirmar que os dois erros caem juntos."],
        "resultado": "Underfitting: falta de capacidade ou de atributos úteis. Próximo passo: usar modelo mais expressivo ou enriquecer atributos (ex.: histórico do requerente, completude documental), reavaliando em validação.",
        "justificativa": "O gabarito decorre da assinatura do underfitting, erro alto nos dois conjuntos, e da correção correspondente: aumentar capacidade ou qualidade dos atributos, conferindo em validação que os erros caem sem abrir distância entre eles.",
        "errosFrequentes": ["Confundir underfitting com overfitting e aplicar regularização", "Atribuir o erro alto apenas ao modelo, sem examinar os atributos fornecidos"],
        "variacao": "Se, após enriquecer os atributos, o erro de treino caísse para 3% e o de validação subisse para 35%, o caso passaria a ser overfitting e a correção seria invertida."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Erro de treinamento baixo prova que o modelo está bom.' A afirmação se sustenta em um relatório sem métrica de validação?",
        "dados": "Relatório de projeto apresenta somente o resultado de treino: 1,5% de erro em 8.000 registros, sem métrica de validação nem de teste, e o modelo é encaminhado diretamente para produção.",
        "conceitos": ["erro de generalização", "overfitting", "avaliação independente"],
        "estrategia": "Identificar a ausência de avaliação em dados não vistos e explicar por que a métrica de treino não sustenta a conclusão de qualidade do modelo.",
        "execucao": ["1. Verificar quais conjuntos o relatório avalia: apenas o de treinamento.", "2. Reconhecer que erro de treino baixo é compatível com overfitting.", "3. Exigir medição em validação ou teste, com registros nunca vistos.", "4. Concluir que a afirmação é falsa e que o relatório é insuficiente para liberar o modelo."],
        "resultado": "Errado. Baixo erro de treino pode ser overfitting; a prova de qualidade é desempenho em validação/teste, representativos do uso real.",
        "justificativa": "O gabarito sustenta-se na distinção entre ajuste e generalização: a métrica de treino mede o quanto o modelo se ajustou aos exemplos vistos, e apenas dados nunca vistos representam as condições de uso real.",
        "errosFrequentes": ["Aceitar relatório sem métrica de validação ou de teste", "Interpretar memorização dos exemplos como aprendizagem bem-sucedida"],
        "variacao": "Se o relatório acrescentasse 27% de erro em um conjunto de teste separado antes do treino, o diagnóstico seria overfitting e o modelo não deveria ir a produção sem correção prévia."
      }
    ]
  }
};
