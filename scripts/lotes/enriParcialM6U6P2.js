const enriParcialM6U6P2 = {
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
  }
};
