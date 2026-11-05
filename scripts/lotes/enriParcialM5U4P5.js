const enriParcialM5U4P5 = {
  "m5-u4-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Distinguir zero-shot de few-shot, delimitação de concatenação e prompt de ajuste fino evita escolhas de engenharia de prompts que parecem corretas a primeira vista, mas falham em produção. Um enunciado que afirme que «few-shot sempre melhora» ou que «pedir JSON dispensa validação» é rapidamente desmascarado quando se conhecem as consequências reais de cada recurso. Para concursos, essas distinções são itens de certo ou errado e de múltipla escolha direcionados, pois misturam mecanismo com efeito.",
      "preRequisitos": [
        "Estrutura básica de um prompt (instrução e dados de entrada)",
        "Noção de entrada e saída de um modelo de linguagem",
        "Conceito de exemplo de few-shot (par entrada-saída)"
      ],
      "objetivosObservaveis": [
        "Distinguir zero-shot e few-shot pela presença ou ausência de exemplos de entrada e saída no prompt",
        "Diferenciar delimitação de concatenação simples na separação entre instrução e dados",
        "Distinguir prompt como instrução textual de ajuste fino como alteração de parâmetros do modelo",
        "Diferenciar validação de esquema (forma) de validação semântica (veracidade)"
      ],
      "competencias": [
        "Leitura crítica de saídas de modelo para identificar formato e veracidade",
        "Escolha de técnica de engenharia de prompts adequada ao problema",
        "Avaliação de risco de injeção e de enviesamento por exemplos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t1-s2 (Delimitação de entradas e saídas, zero-shot e few-shot) — define zero-shot, few-shot e a marcação de entrada e saída",
        "m5-u4-t2-s2 (Formatos estruturados de saída e validação) — trata de esquema e validação de resposta do modelo",
        "m5-u4-t3-s2 (Laboratório interativo de prompts: comparação entre versões com critérios explícitos e feedback reproduzível) — compara versões de prompt com critérios explícitos e retorno"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Engenharia de prompts aparece em itens de certo ou errado e múltipla escolha sobre escolha de técnica, injeção e validação de resposta; a classificação média reflete a centralidade do tema na unidade 5.4 e constitui estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O aluno entende que zero-shot é um prompt com apenas instrução e esquema, enquanto few-shot adiciona exemplos de entrada e saída. Reconhece que a delimitação marca explicitamente onde termina a instrução e começam os dados, ao contrário da concatenação simples, que justapõe ambos sem fronteira clara. Identifica o prompt como instrução textual e o ajuste fino como mudança de parâmetros do modelo.",
      "intermediario": "O aluno compara zero-shot e few-shot em critérios de fronteira e entende que few-shot pode enviesar categorias e ser prejudicial quando os exemplos distorcem as classes. Explica por que a concatenação deixa a fronteira ambígua e amplia a superfície de injeção, enquanto a delimitação fecha essa brecha. Distingue prompt (instrução) de ajuste fino (parâmetros) e de validação de esquema (forma) de validação semântica (veracidade).",
      "avancado": "O aluno analisa quando few-shot é contraindicado, por enviesamento de categorias ou ordem dos exemplos, e quando a validação semântica é obrigatória além do esquema, pois um campo preenchido com nome de norma inexistente passa na validação de forma. Avalia se um enunciado confunde persona com instrução de escopo e reconhece que mostrar o raciocínio privado não é boa prática de auditoria; pede justificativa verificável.",
      "especialista": "O aluno projeta um fluxo de engenharia de prompts auditável: delimitação de entradas, seleção de zero-shot ou few-shot com medição de regressão por categoria, validação de esquema e de semântica, e registro de versão, responsável e decisão de promoção do prompt. Documenta por que cada técnica foi escolhida e como a conformidade de saída é mantida sem expor cadeia privada de raciocínio."
    },
    "comparacoes": [
      {
        "tema": "Zero-shot versus few-shot na engenharia de prompts",
        "a": {
          "rotulo": "Zero-shot",
          "texto": "O prompt traz apenas a instrução e o esquema de saída, sem exemplos de entrada e saída. Funciona bem quando a tarefa é direta e o critério de avaliação é claro, mas pode falhar em critérios de fronteira que exigem ilustração do padrão esperado."
        },
        "b": {
          "rotulo": "Few-shot",
          "texto": "O prompt acrescenta exemplos de entrada e saída que demonstram o padrão desejado. É mais proveitoso para critérios de fronteira, mas pode enviesar as categorias quando os exemplos distorcem as classes, e a ordem dos exemplos influência o resultado."
        },
        "diferencaGabarito": "A diferença decisiva está na presença de exemplos demonstrativos no prompt. Zero-shot depende da instrução pura; few-shot ilustra o padrão, mas requer medição de regressão por categoria, pois exemplos enviesados pioram o resultado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Usar exemplos no prompt (few-shot) sempre melhora o desempenho, porque o modelo aprende com eles.",
        "porqueErrada": "Few-shot não faz o modelo aprender: os exemplos apenas demonstram um padrão no contexto daquela execução. Eles podem enviesar as fronteiras das categorias e a ordem influência o resultado, de modo que a afirmação universal é falsa.",
        "versaoCorreta": "Few-shot funciona como demonstração de padrão, não como aprendizado do modelo. Pode ser prejudicial quando os exemplos enviesam as categorias, e seu efeito deve ser medido no conjunto de teste, por categoria."
      },
      {
        "afirmacaoEquivocada": "Pedir ao modelo que produza JSON dispensa qualquer validação da resposta.",
        "porqueErrada": "Pedir JSON é apenas uma instrução de formato; o modelo pode retornar cercas, comentários, campos a mais ou texto truncado, e não há garantia de conformidade com o esquema.",
        "versaoCorreta": "A saída estruturada nativa usa o esquema como restrição de decodificação, elevando a taxa de conformidade e dispensando parsers tolerantes; pedir JSON por instrução é último recurso, sempre com validação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "zero-shot",
        "few-shot",
        "delimitação de entradas e saídas",
        "concatenação simples",
        "prompt",
        "ajuste fino",
        "validação de esquema",
        "validação semântica"
      ],
      "regras": [
        "zero-shot usa apenas instrução e esquema; few-shot adiciona exemplos de entrada e saída",
        "delimitação marca explicitamente a fronteira entre instrução e dados",
        "validação de esquema confere a forma; validação semântica confere a veracidade",
        "prompt é instrução textual; ajuste fino altera parâmetros do modelo"
      ],
      "comparacoes": [
        "zero-shot depende da instrução pura; few-shot ilustra o padrão, mas pode enviesar categorias",
        "concatenação justapõe instrução e dados sem fronteira; delimitação marca explicitamente as regiões"
      ],
      "fluxos": [
        "definir tarefa → escolher zero-shot ou few-shot → delimitar entradas e saídas → validar esquema e semântica → registrar versão do prompt"
      ],
      "excecoes": [
        "few-shot é prejudicial quando os exemplos enviesam as categorias ou a ordem influência o resultado",
        "pedir JSON por instrução não garante conformidade; exige validação"
      ],
      "palavrasChave": [
        "zero-shot",
        "few-shot",
        "delimitação",
        "concatenação",
        "prompt",
        "ajuste fino",
        "validação de esquema",
        "validação semântica"
      ],
      "checklist": [
        "identificar se o prompt é zero-shot ou few-shot",
        "verificar se a fronteira entre instrução e dados está delimitada",
        "distinguir validação de esquema de validação semântica",
        "não confiar apenas em pedir JSON para garantir o formato"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Qual a diferença operacional entre pedir JSON por instrução e usar saída estruturada nativa do modelo?",
        "dados": "O modelo recebe a instrução 'responda em JSON' para extrair dados de um documento; a alternativa é declarar um esquema como restrição de decodificação da geração.",
        "conceitos": [
          "saída estruturada nativa",
          "validação de esquema"
        ],
        "estrategia": "Comparar o comportamento do modelo quando o formato é apenas uma instrução versus quando o esquema restringe a decodificação, observando cercas, comentários e campos a mais.",
        "execucao": [
          "1. Pedir ao modelo que retorne JSON apenas por instrução de texto.",
          "2. Observar que o texto pode vir com cercas, comentários, campos a mais ou truncado.",
          "3. Declarar um esquema como restrição de decodificação e gerar novamente.",
          "4. Confirmar que a saída agora respeita o esquema sem parsers tolerantes."
        ],
        "resultado": "Pedir JSON por instrução não garante conformidade; a saída estruturada nativa usa o esquema como restrição de decodificação e eleva a taxa de conformidade.",
        "justificativa": "O gabarito é a saída estruturada nativa porque o esquema imposto na decodificação restringe o que o modelo pode gerar, enquanto pedir JSON é apenas uma sugestão que o modelo pode ignorar ou distorcer.",
        "errosFrequentes": [
          "Acreditar que pedir JSON garante que a resposta será JSON válido",
          "Esquecer que a saída pode conter cercas, comentários ou campos a mais"
        ],
        "variacao": "Se o esquema exigisse um campo obrigatório ausente na instrução, o modelo com restrição de decodificação ainda falharia em produzir o campo, enquanto um parser tolerante mascararia o problema."
      },
      {
        "tipo": "aplicacao",
        "problema": "Por que validar apenas o esquema não basta em um assistente que responde a perguntas de servidores?",
        "dados": "Um campo 'norma_aplicável' preenchido com o nome de uma norma que não existe no documento recuperado passa na validação de esquema, mas a afirmação é falsa.",
        "conceitos": [
          "validação de esquema",
          "validação semântica"
        ],
        "estrategia": "Aplicar as duas camadas de validação: primeiro a forma (JSON válido, campos obrigatórios) e depois o conteúdo (trecho citado existe no documento, resposta decorre dele).",
        "execucao": [
          "1. Validar o esquema do JSON gerado (forma, tipos, campos obrigatórios).",
          "2. Conferir se o trecho citado existe no documento recuperado.",
          "3. Verificar se a resposta decorre logicamente do trecho citado.",
          "4. Rejeitar a resposta se a camada semântica falhar, mesmo que o esquema esteja correto."
        ],
        "resultado": "O esquema garante a forma, não a veracidade; somente a validação semântica impede que uma norma inexistente chegue ao servidor como resposta.",
        "justificativa": "O gabarito é a necessidade das duas camadas, pois a validação de esquema confere apenas a forma e deixa passar conteúdos falsos desde que o formato esteja correto.",
        "errosFrequentes": [
          "Confiar somente na validação de esquema e achar que a resposta está correta",
          "Não verificar se o trecho citado realmente existe no documento recuperado"
        ],
        "variacao": "Se o campo 'prazo' contivesse uma data coerente em formato, mas anterior à data do edital, a validação de esquema aprovaria e a semântica rejeitaria pelo descolamento com a fonte."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Usar exemplos no prompt (few-shot) sempre melhora o desempenho, porque o modelo aprende com eles.'",
        "dados": "Um item de certo ou errado apresenta a afirmação universal sobre few-shot em um contexto de classificação de documentos com exemplos de treino.",
        "conceitos": [
          "few-shot",
          "enviesamento de categorias",
          "regressão"
        ],
        "estrategia": "Testar a afirmação universal contra o contraexemplo de exemplos que enviesam categorias e cuja ordem influência o resultado, exigindo medição no conjunto de teste.",
        "execucao": [
          "1. Ler a afirmação como universal: few-shot 'sempre' melhora o desempenho.",
          "2. Identificar que os exemplos demonstram padrão, não fazem o modelo aprender.",
          "3. Reconhecer que exemplos enviesados podem piorar as fronteiras de categoria.",
          "4. Concluir que um contraexemplo falsifica a afirmação universal."
        ],
        "resultado": "Errado. Few-shot funciona como demonstração de padrão, não como aprendizado; pode enviesar categorias e seu efeito deve ser medido no conjunto de teste.",
        "justificativa": "A afirmação é universal e uma única situação em que few-shot piora o resultado a falsifica. Os exemplos não alteram os parâmetros do modelo, apenas ilustram o padrão naquele contexto.",
        "errosFrequentes": [
          "Achar que few-shot faz o modelo aprender com os exemplos",
          "Supor que mais exemplos sempre equivalem a melhor desempenho"
        ],
        "variacao": "Se os exemplos fossem cuidadosamente selecionados e balanceados por categoria, few-shot poderia melhorar o critério de fronteira, mas a afirmação original continua falsa por dizer 'sempre'."
      }
    ]
  },
  "m5-u4-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Rejeitar afirmações equivocadas frequentes sobre engenharia de prompts é a habilidade que separa o gabarito correto do erro plausível em itens de concurso. Afirmações como «prompt resolve tudo», «few-shot sempre melhora» ou «persona substitui instrução de escopo» circulam como senso comum, mas são falsas quando confrontadas com o funcionamento real do modelo. Consolidar a unidade 5.4 por recuperação ativa fixa essas distinções e evita que o aluno reproduza mitos como se fossem regras.",
      "preRequisitos": [
        "Anatomia básica do prompt (persona, contexto, tarefa, restrições, formato de saída)",
        "Noção de que o modelo não adquire conhecimento novo com o prompt",
        "Conceito de injeção de prompt e de entrada não confiável"
      ],
      "objetivosObservaveis": [
        "Rejeitar afirmações equivocadas frequentes sobre engenharia de prompts",
        "Diferenciar persona de instrução de escopo",
        "Distinguir validação de esquema de validação semântica",
        "Reconhecer que o prompt não adiciona conhecimento, não cria conformidade legal e não substitui fonte"
      ],
      "competencias": [
        "Leitura crítica de afirmações sobre comportamento de modelo",
        "Consolidação de conteúdos por recuperação ativa",
        "Julgamento de plausibilidade de itens de certo ou errado"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u4-t1-s1 (Persona, contexto, tarefa, restrições e formato de saída) — define os seis componentes do prompt estruturado",
        "m5-u4-t1-s2 (Delimitação de entradas e saídas, zero-shot e few-shot) — aborda few-shot e delimitação",
        "m5-u4-t2-s2 (Formatos estruturados de saída e validação) — trata de esquema e validação semântica"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Erros e pegadinhas de engenharia de prompts aparecem em itens de certo ou errado que testam a leitura crítica do aluno; a classificação média reflete a recorrência do tema na unidade 5.4 e constitui estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "O aluno identifica afirmações comuns sobre engenharia de prompts e aprende a rejeitá-las quando contrariam o funcionamento do modelo. Reconhece que o prompt não acrescenta conhecimento ao modelo, que a persona não substitui a instrução de escopo e que few-shot não melhora sempre. Consolidará a unidade 5.4 recuperando ativamente esses pontos.",
      "intermediario": "O aluno rejeita afirmações equivocadas frequentes, como «prompt resolve tudo», «mostrar o raciocínio é boa prática de auditoria», «few-shot sempre melhora», «persona substitui instrução de escopo» e «peça JSON e dispense validação». Explica por que cada uma é falsa e distingue validação de esquema (forma) de validação semântica (veracidade).",
      "avancado": "O analisa cada pegadinha ligando conceito à evidência: o prompt não cria conformidade legal, expor a cadeia privada de raciocínio não é auditoria, e delimitar a entrada não elimina injeção por si só. Reconhece que otimizar o prompt desloca o problema quando a causa raiz está fora dele, como fonte desatualizada ou permissão indevida.",
      "especialista": "O aluno consolida a unidade 5.4 por recuperação ativa, conectando as oito pegadinhas aos conceitos da unidade e aos tópicos relacionados (delimitação, few-shot, validação de esquema e semântica). Justifica cada rejeição com base no comportamento real do modelo e mantém um critério uniforme de avaliação de itens de certo ou errado."
    },
    "comparacoes": [
      {
        "tema": "Validação de esquema versus validação semântica",
        "a": {
          "rotulo": "Validação de esquema",
          "texto": "Verifica a forma da resposta: JSON válido, tipos corretos, campos obrigatórios presentes e limites respeitados. Não garante que o conteúdo seja verdadeiro."
        },
        "b": {
          "rotulo": "Validação semântica",
          "texto": "Verifica o conteúdo: a afirmação consta da fonte? o trecho citado existe no documento recuperado? o cálculo fecha? os valores são coerentes entre si? É a camada que impede informação falsa de chegar ao cidadão."
        },
        "diferencaGabarito": "A diferença decisiva está no que cada camada confere: a de esquema confere a forma e a semântica confere a veracidade. Um resultado pode passar na primeira e falhar na segunda, e é a segunda que protege contra afirmações falsas bem formatadas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Otimizar o prompt é a forma mais econômica de resolver um erro de qualidade, porque não exige alteração de processo.",
        "porqueErrada": "Quando o erro decorre de fonte desatualizada, de ausência de validação ou de permissão indevida, a correção é de processo e a alteração do prompt apenas desloca o problema. Otimizar o prompt é a camada mais barata, e por isso mesmo não resolve a causa raiz quando a causa está fora dele.",
        "versaoCorreta": "Otimizar o prompt é a camada mais barata, mas não resolve erros de processo, como fonte desatualizada ou ausência de validação; nesses casos a correção deve ser no processo, não no texto do prompt."
      },
      {
        "afirmacaoEquivocada": "Instruir o modelo a mostrar o raciocínio é boa prática de auditoria.",
        "porqueErrada": "A diretriz correta é pedir justificativa verificável, passos de cálculo e evidência de saída, sem expor a cadeia privada de raciocínio do modelo. Expor esse raciocínio privado não constitui auditoria e pode revelar detalhes internos que não devem ser compartilhados.",
        "versaoCorreta": "A boa prática de auditoria é pedir justificativa verificável, passos de cálculo e evidência de saída, sem exigir que o modelo exponha sua cadeia privada de raciocínio."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "engenharia de prompts",
        "persona",
        "instrução de escopo",
        "few-shot",
        "validação de esquema",
        "validação semântica",
        "injeção de prompt",
        "recuperação ativa"
      ],
      "regras": [
        "o prompt não adiciona conhecimento ao modelo, apenas instrui",
        "persona não substitui instrução de escopo",
        "few-shot não melhora sempre e pode enviesar categorias",
        "validação de esquema confere a forma; validação semântica confere a veracidade"
      ],
      "comparacoes": [
        "validação de esquema confere a forma; validação semântica confere a veracidade",
        "pedir justificativa verificável é auditoria; expor cadeia privada de raciocínio não é"
      ],
      "fluxos": [
        "ler afirmação → identificar a pegadinha → ligar conceito à evidência → rejeitar ou confirmar → registrar o motivo da rejeição"
      ],
      "excecoes": [
        "few-shot é prejudicial quando os exemplos enviesam as categorias",
        "otimizar o prompt não corrige erros de processo fora do prompt"
      ],
      "palavrasChave": [
        "engenharia de prompts",
        "persona",
        "instrução de escopo",
        "few-shot",
        "validação de esquema",
        "validação semântica",
        "injeção",
        "recuperação ativa"
      ],
      "checklist": [
        "identificar se a afirmação atribui conhecimento ao prompt",
        "verificar se persona é confundida com instrução de escopo",
        "distinguir validação de esquema de validação semântica",
        "rejeitar afirmações universais como 'sempre melhora'"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, liste os seis componentes de um prompt estruturado e a função de cada um.",
        "dados": "O aluno deve nomear, de memória, os componentes que compõem um prompt estruturado: persona, contexto, tarefa, restrições, formato de saída e exemplos.",
        "conceitos": [
          "persona",
          "contexto",
          "tarefa",
          "restrições",
          "formato de saída",
          "exemplos"
        ],
        "estrategia": "Recuperar ativamente os seis componentes do prompt estruturado, associando cada um à sua função na orientação do modelo.",
        "execucao": [
          "1. Lembrar que persona define o papel e o vocabulário do modelo.",
          "2. Lembrar que contexto traz os fatos, a base e o escopo a considerar.",
          "3. Lembrar que tarefa declara o verbo observável e o objetivo.",
          "4. Lembrar que restrições indicam o que não fazer e quando declarar incerteza.",
          "5. Lembrar que formato de saída define esquema, ordem, tamanho e tom.",
          "6. Lembrar que exemplos indicam o padrão desejado quando houver."
        ],
        "resultado": "Os seis componentes são: persona, contexto, tarefa, restrições, formato de saída e exemplos, cada um com uma função distinta na orientação do modelo.",
        "justificativa": "O gabarito lista os seis componentes da anatomia do prompt estruturado, definidos na unidade 5.4, sem recorrer a consulta externa, o que é o ponto do exercício de recuperação ativa.",
        "errosFrequentes": [
          "Esquecer um dos seis componentes",
          "Confundir restrições com formato de saída"
        ],
        "variacao": "Se o enunciado pedisse apenas os componentes que orientam o modelo a não inventar informações, a resposta seria restrições e contexto, e não todos os seis."
      },
      {
        "tipo": "aplicacao",
        "problema": "Qual a diferença entre validação de esquema e validação semântica, e o que cada uma detecta?",
        "dados": "Um assistente responde a perguntas de servidores com um campo JSON. A validação de esquema confere JSON válido, tipos e campos obrigatórios; a validação semântica confere se a afirmação consta da fonte e se o trecho citado existe no documento recuperado.",
        "conceitos": [
          "validação de esquema",
          "validação semântica"
        ],
        "estrategia": "Aplicar as duas camadas separadamente: primeiro a forma, depois o conteúdo, e observar que um resultado pode passar na primeira e falhar na segunda.",
        "execucao": [
          "1. Validar o esquema do JSON gerado (forma, tipos, campos obrigatórios).",
          "2. Conferir se a afirmação consta da fonte e se o trecho citado existe no documento recuperado.",
          "3. Verificar se o cálculo fecha e se os valores são coerentes entre si.",
          "4. Concluir que a camada semântica é a que impede informação falsa de chegar ao cidadão."
        ],
        "resultado": "A validação de esquema confere a forma e a validação semântica confere a veracidade; somente a segunda impede que uma afirmação falsa, mas bem formatada, chegue ao cidadão.",
        "justificativa": "O gabarito diferencia as duas camadas e destaca que a semântica é a barreira contra conteúdo falso, pois a esquema sozinha não detecta veracidade.",
        "errosFrequentes": [
          "Acreditar que a validação de esquema garante que a resposta é verdadeira",
          "Não verificar se o trecho citado realmente existe no documento recuperado"
        ],
        "variacao": "Se o campo citasse uma norma inexistente no contexto, a validação de esquema aprovaria pelo formato e a semântica rejeitaria pela ausência na fonte."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Otimizar o prompt é a forma mais econômica de resolver um erro de qualidade, porque não exige alteração de processo.'",
        "dados": "Um item de certo ou errado apresenta a afirmação sobre otimização de prompt como solução universal para erros de qualidade, sem especificar a causa do erro.",
        "conceitos": [
          "otimização de prompt",
          "correção de processo",
          "causa raiz"
        ],
        "estrategia": "Testar a afirmação contra casos em que a causa do erro está fora do prompt (fonte desatualizada, ausência de validação, permissão indevida), exigindo correção de processo.",
        "execucao": [
          "1. Ler a afirmação como universal sobre otimização de prompt.",
          "2. Identificar causas de erro fora do prompt: fonte desatualizada, ausência de validação, permissão indevida.",
          "3. Reconhecer que nesses casos a correção é de processo, não de prompt.",
          "4. Concluir que a afirmação universal é falsa."
        ],
        "resultado": "Errado. Quando o erro decorre de fonte desatualizada, de ausência de validação ou de permissão indevida, a correção é de processo; otimizar o prompt apenas desloca o problema.",
        "justificativa": "A afirmação é universal e um único caso de causa fora do prompt a falsifica. Otimizar o prompt é barato, mas não resolve a causa raiz quando ela está fora dele.",
        "errosFrequentes": [
          "Achar que todo erro de qualidade se resolve ajustando o prompt",
          "Não identificar quando a causa raiz está fora do prompt"
        ],
        "variacao": "Se o erro fosse de formulação ambígua da instrução, então ajustar o prompt seria de fato a correção adequada, mas a afirmação original continua falsa por dizer que é a forma para todo erro."
      }
    ]
  }
};
