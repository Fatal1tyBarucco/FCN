const enriParcialM5U3P6 = {
  "m5-u3-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A unidade 5.3 termina com o momento em que o candidato precisa recusar afirmações. As alternativas de prova sobre IA generativa podem escorregar para o lugar comum: o modelo consulta a internet, mais contexto produz resposta melhor, a alucinação é defeito corrigível, a memória pertence ao modelo. Reconhecer esses desvios e consolidar a unidade por recuperação ativa é o que separa o candidato que decorou da unidade daquele que a compreendeu.",
      "preRequisitos": [
        "Fases de construção do modelo: treinamento, ajuste fino, alinhamento e inferência",
        "Mecanismo de geração probabilística, janela de contexto e alucinação",
        "Etapas de recuperação aumentada por geração e de bases vetoriais",
        "Critérios de avaliação de resultados: fidelidade, completude, clareza, segurança e reprodutibilidade"
      ],
      "objetivosObservaveis": [
        "Recusar afirmações falsas frequentes, indicando o mecanismo que as sustenta",
        "Classificar exceções e limites de validade antes de generalizar uma afirmação",
        "Enumerar as etapas de recuperação aumentada e o papel de cada uma",
        "Consolidar a unidade por recuperação ativa, respondendo às verificações sem consulta ao texto"
      ],
      "competencias": [
        "Leitura crítica de afirmativa técnica com detecção do deslize conceitual",
        "Fundamentação de negativa com base no mecanismo, e não em autoridade de manual",
        "Síntese estruturada da unidade para recuperação sob tempo restrito",
        "Decisão sobre quando a mitigação exige mudança de processo e não de comando"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m5-u3-t2-s1 (Alucinações, limites de contexto e incerteza) — fundamenta a recusa da ideia de alucinação como defeito raro",
        "m5-u3-t2-s2 (RAG, embeddings e bases vetoriais) — descreve as etapas de recuperação enumeradas neste subtópico",
        "m5-u3-t2-s3 (Agentes, ferramentas e fluxos com supervisão) — sustenta a distinção entre agente e automação de ponta a ponta",
        "m5-u3-t4-s1 (Exemplos resolvidos da unidade (três casos completos)) — aplica as exceções a casos de serviço público",
        "m5-u3-t4-s2 (Comparações e distinções críticas da unidade) — reúne as distinções que sustentam as recusas aqui praticadas"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "As afirmações sobre IA generativa são objeto de itens de julgamento de veracidade, em que o candidato precisa identificar a armadilha conceitual e explicar o mecanismo correspondente. A classificação é qualitativa e reflete a centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O aluno identifica as afirmações falsas mais comuns e as reescreve corretamente: o modelo não consulta fontes por conta própria, mais tokens não garantem resposta melhor, a alucinação é modo de funcionamento e não defeito raro, e a memória entre conversas pertence à aplicação. Ele enumera as cinco etapas de recuperação aumentada sem confundir indexação com busca, e reconhece que o excesso de contexto dilui a informação relevante.",
      "intermediario": "O aluno explica o mecanismo por trás de cada recusa: a geração é condicionada ao contexto fornecido, a atenção pondera os tokens pela relevância, o ajuste fino é novo treinamento executado fora da linha e a busca textual continua indispensável para códigos e números exatos. Aplica os oito critérios de avaliação de saída, distinguindo correção, completude, fidelidade às fontes, segurança e reprodutibilidade.",
      "avancado": "O aluno analisa exceções e casos-limite: a recuperação aumentada melhora a verificabilidade, mas não elimina a alucinação sobre o material recuperado; o produto que aparenta memória é a aplicação que a implementa; o agente escolhe a próxima ação e a ferramenta, o que reduz a previsibilidade em relação ao fluxo escrito; e a licença da saída depende dos termos do serviço, o que não transfere titularidade ao usuário.",
      "especialista": "O aluno desenha o protocolo de verificação da unidade: conjunto de perguntas de recuperação ativa com resposta esperada, simulado de decisão sobre cada afirmação controversa e rastreabilidade dos casos. Sustenta que a mitigação de alucinação é de processo, com fonte obrigatória, validação de números, revisão por impacto e registro; e sabe indicar, para cada limite da unidade, qual providência institucional corresponde."
    },
    "comparacoes": [
      {
        "tema": "Origem da falha na saída de um modelo de linguagem",
        "a": {
          "rotulo": "Alucinação",
          "texto": "Afirmação plausível e bem formulada, sem lastro em nenhuma fonte recuperada; decorre da otimização da geração por plausibilidade, e a providência é ancorar a saída em trecho vigente e bloquear a resposta sem correspondência."
        },
        "b": {
          "rotulo": "Erro de dado da base",
          "texto": "Resposta fiel ao conteúdo recuperado, mas esse conteúdo está desatualizado, revogado ou incorreto; a providência é sanear a base, versionar o conteúdo e manter metadados de vigência confiáveis."
        },
        "diferencaGabarito": "O que separa as duas hipóteses é a presença de trecho que sustente a afirmação: se não há lastro, a falha é da geração; se há lastro desatualizado, a falha é da base. A providência troca de natureza, e por isso o diagnóstico não pode ser feito pela aparência da resposta."
      },
      {
        "tema": "Previsibilidade e flexibilidade na automação de processos",
        "a": {
          "rotulo": "Fluxo determinístico",
          "texto": "Passos escritos e executados em ordem definida, com previsibilidade de comportamento, rastreabilidade simples e ponto claro de revisão humana no fim do encadeamento."
        },
        "b": {
          "rotulo": "Agente com ferramentas",
          "texto": "Modelo que decide, a cada passo, qual ação executar e qual ferramenta acionar; oferece flexibilidade para tarefas abertas, ao custo de variabilidade de percurso, com necessidade de supervisão e registro das ações."
        },
        "diferencaGabarito": "A escolha é entre previsibilidade e flexibilidade: em rotinas com caminho regulado e risco elevado, o fluxo escrito prevalece; em tarefas abertas e exploratórias, o agente amplia a capacidade de ação, desde que supervisionado e registrado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O modelo de linguagem consulta a internet para responder à pergunta que lhe é submetida.",
        "porqueErrada": "A geração é condicionada ao conteúdo presente na janela de contexto entregue na chamada. Só existe consulta a fontes externas quando o próprio sistema integra uma ferramenta de busca ou uma base recuperada, e essa integração é uma decisão de arquitetura, não uma capacidade do modelo.",
        "versaoCorreta": "O modelo responde a partir do conteúdo fornecido na chamada; a consulta a fontes externas existe apenas quando o sistema integra busca ou recuperação, com filtros de permissão."
      },
      {
        "afirmacaoEquivocada": "Alucinação é um defeito raro do modelo, que se corrige orientando o prompt a não inventar.",
        "porqueErrada": "A alucinação é consequência estrutural da geração probabilística, que busca a continuação mais plausível e não a afirmação verdadeira. A instrução no prompt orienta o estilo da resposta e não altera o mecanismo, de modo que o defeito permanece e apenas fica menos visível.",
        "versaoCorreta": "A alucinação é modo de funcionamento da geração probabilística; a mitigação é de processo, com ancoragem em fonte, citação, validação automática, revisão humana e canal de encaminhamento."
      },
      {
        "afirmacaoEquivocada": "Com a recuperação aumentada por geração, a resposta passa a estar sempre ancorada no material recuperado.",
        "porqueErrada": "A recuperação amplia a disponibilidade de material e a possibilidade de conferência, mas o modelo continua gerando sequências por plausibilidade. É possível que a resposta combine o trecho recuperado com afirmação que o trecho não sustenta, o que exige verificação de fidelidade antes da publicação.",
        "versaoCorreta": "A recuperação aumentada melhora a verificabilidade e permite exibir a fonte, mas não elimina a alucinação sobre o próprio material; a ancoragem precisa ser conferida antes da resposta ser publicada."
      },
      {
        "afirmacaoEquivocada": "Como o modelo de linguagem é amostrado, ele não conserva memória entre as conversas de um mesmo usuário.",
        "porqueErrada": "A afirmação é verdadeira quanto ao modelo e falsa quanto à ferramenta: o modelo não guarda histórico entre chamadas, mas a aplicação pode registrar o histórico, resumir ou recuperar trechos e injetá-los na nova chamada. É essa memória externa que produz a impressão de continuidade.",
        "versaoCorreta": "O modelo não conserva memória entre chamadas; a continuidade observada no produto é implementada externamente pela aplicação, que reconstrói o contexto a cada requisição."
      },
      {
        "afirmacaoEquivocada": "Agente e automação de ponta a ponta são a mesma coisa, pois ambos executam tarefas sem intervenção do usuário.",
        "porqueErrada": "A automação de ponta a ponta percorre um caminho previamente escrito e previsível. O agente decide, a cada passo, qual ação executar e qual ferramenta acionar, de modo que o percurso pode variar entre execuções; essa flexibilidade é o que exige supervisão e registro.",
        "versaoCorreta": "Automação de ponta a ponta é desenho determinístico, com passos escritos; agente implica decisão do modelo sobre o próximo passo, o que aumenta a flexibilidade e exige supervisão e registro das ações."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Geração probabilística condicionada ao contexto da chamada",
        "Alucinação como modo de funcionamento e não como defeito raro",
        "Janela de contexto como limite de tokens de uma passagem",
        "Memória externa implementada pela aplicação, e não pelo modelo",
        "Recuperação aumentada por geração, com indexação, codificação da consulta, busca, composição e conferência",
        "Ajuste fino como novo treinamento executado fora da linha de produção",
        "Agente com ferramentas contra fluxo determinístico",
        "Oito critérios de qualidade de saída que a consolidação da unidade exige aplicar: fidelidade, completude, conformidade, relevância, clareza, segurança, reprodutibilidade e impacto"
      ],
      "regras": [
        "Afirmação sem trecho que a sustente não é aceita como resposta institucional",
        "Excesso de contexto dilui a informação relevante e eleva custo e latência",
        "Recuperação aumentada exige conferência de fidelidade antes da publicação",
        "Controle de acesso precisa existir na indexação ou na busca, com teste de cenários não autorizados",
        "Toda saída usada em documento institucional exige registro de prompt, parâmetros, fontes e versão do modelo",
        "Avaliação por subgrupo complementa a métrica global e não é substituída por ela"
      ],
      "comparacoes": [
        "Alucinação e erro de dado da base se distinguem pela presença de lastro recuperável",
        "Ajuste fino e uso de erros de produção como material de treino são procedimentos distintos",
        "Janela de contexto e memória da aplicação têm naturezas e responsáveis diferentes",
        "Busca por sentido e busca textual se complementam, e uma não substitui a outra",
        "Fluxo determinístico e agente se distinguem por previsibilidade de percurso e necessidade de supervisão"
      ],
      "fluxos": [
        "Indexação com divisão em trechos, geração de representações vetoriais e gravação com metadados → codificação da consulta → busca por similaridade com filtros de permissão → composição do prompt com os trechos e instrução de citar a fonte → geração → conferência de fidelidade e exibição das fontes",
        "Definição de uso e escopo → verificação da base legal dos dados → preparação da base com metadados de vigência e classificação → ancoragem com citação → validação de números, datas e identificadores → revisão humana por impacto → registro integral → medição de indicadores e reavaliação em ciclo"
      ],
      "excecoes": [
        "Recuperação aumentada não é controle de acesso e não garante resposta correta",
        "Alta acurácia global não dispensa análise por subgrupo",
        "A licença da saída depende dos termos do serviço e não transfere titularidade ao usuário",
        "A memória entre conversas, quando existe, é implementada pela aplicação",
        "Agente não é sinônimo de automação de ponta a ponta, e o fluxo escrito não é sinônimo de rigidez extrema"
      ],
      "palavrasChave": [
        "alucinação",
        "janela de contexto",
        "memória externa",
        "recuperação aumentada",
        "base vetorial",
        "ajuste fino",
        "agente",
        "fluxo determinístico",
        "fidelidade",
        "reprodutibilidade",
        "revisão humana",
        "licença da saída"
      ],
      "checklist": [
        "Verifiquei se a afirmação está ancorada em trecho recuperável e vigente",
        "Avaliei se o contexto está enxuto e relevante, e não apenas volumoso",
        "Confirmei se o controle de permissão está aplicado na indexação ou na busca",
        "Verifiquei se a resposta foi conferida quanto à fidelidade antes da publicação",
        "Avaliei se a tarefa exige fluxo determinístico ou se a decisão do modelo é aceitável",
        "Registrei prompt, parâmetros, fontes e versão do modelo",
        "Avaliei o resultado por subgrupo, e não apenas pela métrica global",
        "Defini o gatilho de revisão e o canal de contestação do cidadão"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Sem consultar o texto, enumere as cinco etapas de um sistema de recuperação aumentada por geração e explique a função de cada uma na produção de uma resposta verificável.",
        "dados": "Base institucional com 4.800 documentos normativos e instruções de serviço, dividido em trechos com metadados de vigência e classificação. Um atendente pergunta sobre o prazo de análise de um requerimento; o sistema precisa devolver a resposta com a indicação do trecho consultado.",
        "conceitos": [
          "Indexação, codificação da consulta, busca, composição do contexto e geração",
          "Representações vetoriais como base da busca por similaridade",
          "Fidelidade da resposta ao material recuperado"
        ],
        "estrategia": "Reconstruir o encadeamento do fluxo, do corpus à resposta, atribuindo a cada etapa o que ela produz e o que ela impede: a indexação organiza e versiona o material, a codificação torna a consulta comparável, a busca seleciona, a composição ancora com instrução de citar, e a conferência final verifica a sustentação da resposta.",
        "execucao": [
          "1) Indexação: dividir o corpus em trechos, gerar a representação vetorial de cada um e gravar com metadados de vigência, classificação e permissão",
          "2) Codificação da consulta: transformar a pergunta do atendente em representação vetorial comparável à dos trechos",
          "3) Busca por similaridade: localizar os trechos mais próximos, aplicando os filtros de permissão do consultante",
          "4) Composição do contexto: reunir os trechos selecionados no prompt, com instrução de citar a fonte e de não responder o que não estiver neles",
          "5) Geração e conferência: produzir a resposta e verificar se ela é sustentada pelos trechos recuperados, exibindo as fontes ao atendente"
        ],
        "resultado": "Sequência de cinco etapas com função atribuída: indexação com metadados e permissão, codificação vetorial da consulta, busca por similaridade filtrada, composição do contexto com citação obrigatória, e geração acompanhada de conferência de fidelidade e exibição das fontes.",
        "justificativa": "A resposta só é verificável quando cada elo do encadeamento é conhecido: sem indexação com metadados não há seleção confiável, sem codificação da consulta não há comparação possível, sem busca filtrada não há material pertinente, sem citação não há conferência, e sem conferência de fidelidade a resposta pode ir além do que o trecho sustenta.",
        "errosFrequentes": [
          "Confundir a etapa de indexação com a de busca, ou listar a indexação duas vezes em lugar de uma etapa distinta",
          "Omitir o passo de codificação da consulta e apresentar a busca como se operasse diretamente sobre a pergunta",
          "Esquecer a conferência final de fidelidade e encerrar o fluxo na geração",
          "Descrever a busca sem o filtro de permissão, o que expõe material que o consultante não pode ver"
        ],
        "variacao": "Se a base receber documentos com correlatos de segurança ou integridade verificável, a indexação ganha metadado próprio de verificação, e a conferência final passa a checar a assinatura do trecho além da sua sustentação textual."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explique por que a recuperação aumentada por geração não substitui o controle de acesso em um sistema institucional, e indique onde a proteção precisa existir e como ela é testada.",
        "dados": "Base com 4.800 documentos, dos quais 312 têm classificação restrita e exigem competência específica para consulta. Um atendente sem essa competência formula pergunta cujo trecho correspondente está entre os 312 documentos restritos.",
        "conceitos": [
          "Recuperação como entrega de material ao modelo, que obedecerá ao que receber",
          "Controle de permissão aplicado na indexação ou na busca, com metadados de classificação",
          "Teste de cenários de acesso não autorizado como verificação do filtro"
        ],
        "estrategia": "Mostrar que a proteção precede a recuperação: o modelo processa o que lhe é entregue, de modo que a filtragem tem de existir na indexação ou na busca, com metadados de classificação e com verificação de cenários não autorizados antes de qualquer uso em produção.",
        "execucao": [
          "1) Verificar se a indexação separa o material por classificação, competência ou sigilo, e não apenas por assunto",
          "2) Confirmar se a busca aplica o filtro correspondente ao consultante, antes de compor o contexto",
          "3) Verificar se o filtro é aplicado também na reordenação dos resultados e não apenas na seleção inicial",
          "4) Executar testes com consultas que simulem tentativa de acesso não autorizado, inclusive por paráfrase da pergunta",
          "5) Registrar o resultado dos testes de permissão e estabelecer rotina de auditoria periódica da indexação",
          "6) Bloquear a entrega quando o material recuperado violar o nível de acesso do consultante"
        ],
        "resultado": "Proteção implementada na indexação e na busca, com metadados de classificação e filtro testado contra cenários não autorizados, de modo que o material restrito não seja recuperado nem entregue ao modelo em nome de consultante sem competência.",
        "justificativa": "A recuperação entrega ao modelo aquilo que recuperou, e o modelo responde a partir do que recebeu; por isso a falha de permissão aparece de imediato no contexto e, nele, na resposta. Sem teste de cenário não autorizado, a ausência de incidente anterior não prova a existência do filtro.",
        "errosFrequentes": [
          "Supor que o modelo recusa material indevido por conta própria, quando apenas obedece ao contexto recebido",
          "Aplicar o filtro somente na indexação, deixando a busca livre para recombinar trechos classificados",
          "Testar apenas o caminho autorizado e concluir, sem evidência, que o bloqueio funciona",
          "Considerar a revisão humana como substituta do controle de permissão da base"
        ],
        "variacao": "Se parte da base passar a ser alimentada por carregamento automático de documentos externos, a classificação e a competência passam a ser atribuídas na entrada, e o teste de cenário não autorizado precisa cobrir também os documentos recém incorporados."
      },
      {
        "tipo": "erro",
        "problema": "A equipe de suporte argue que, quanto maior o número de tokens incluídos na consulta, melhor será a resposta, porque o modelo terá mais contexto disponível. O argumento está correto?",
        "dados": "Consulta de um atendente que reúne, por padrão, 38.000 tokens: três manuais internos, a base normativa integral e o histórico de dez anos de atendimento. Em 1.900 consultas do último trimestre, 22% das respostas foram apontadas como incorretas pela revisão humana, e a equipe atribui as falhas à falta de contexto.",
        "conceitos": [
          "Atenção como ponderação de tokens pela relevância contextual",
          "Diluição da informação relevante pelo excesso de contexto",
          "Busca por trecho pertinente como prática de recuperação",
          "Custo e latência crescentes com o volume de contexto"
        ],
        "estrategia": "Desmontar a premissa: o volume de contexto não é sinônimo de contexto útil, porque a atenção pondera os tokens pela relevância e o excesso dilui o que importa. A providência é selecionar o trecho pertinente, medir a qualidade por critério explícito e avaliar o efeito de reduzir o contexto.",
        "execucao": [
          "1) Reconhecer que o argumento confunde quantidade de contexto com contexto relevante para a pergunta",
          "2) Verificar se a base do argumento é a próprio desempenho medido, e se a amostra de 22% de erro foi analisada por tipo de falha",
          "3) Substituir o envio integral da base por recuperação dos trechos pertinentes à consulta, com metadados de vigência",
          "4) Fixar o tamanho de contexto por tipo de consulta e medir o efeito sobre correção, custo e latência",
          "5) Avaliar a qualidade por critério explícito, comparando o desempenho com contexto enxuto e com contexto integral",
          "6) Registrar o resultado da medição e decidir o padrão de contexto por evidência, e não por suposição"
        ],
        "resultado": "Conclusão de que o argumento está errado: o excesso de contexto dilui a informação relevante e eleva custo e latência, o que exige seleção do trecho pertinente, com tamanho de contexto definido por tipo de consulta e medição do efeito sobre correção, desempenho por subgrupo e custo.",
        "justificativa": "A atenção pondera os tokens pela relevância contextual, de modo que acrescentar material indiscriminado reduz a peso relativo do conteúdo que responde à pergunta. A leitura ingênua trata a falha observada como falta de contexto, quando o próprio volume enviado é o fator que distrai o modelo; por isso a correção passa pela seleção do trecho pertinente e por medição comparativa, e não por acúmulo de material.",
        "errosFrequentes": [
          "Confundir contexto amplo com contexto pertinente e aumentar ainda mais o material enviado",
          "Atribuir todo erro de resposta à falta de contexto, sem analisar o tipo de falha",
          "Manter o envio integral da base sem medir custo, latência e taxa de correção por tipo de consulta",
          "Descartar a recuperação por trecho por receio de omitir material, em vez de definir o que é pertinente"
        ],
        "variacao": "Se a consulta passar a exigir o confronto de duas normas com vigências distintas, o tamanho de contexto cresce de forma justificada, mas a seleção dos trechos e a marcação de vigência permanecem obrigatórias para que a comparação não se apoie em texto revogado."
      }
    ]
  }
};
