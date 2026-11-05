const enriParcialM5U1P3 = {
  "m5-u1-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Viés, variância e explicabilidade formam uma tríade decisiva na avaliação de IA em concursos porque exigem distinguir erro de modelo, instabilidade do treino e capacidade de justificar a decisão. No serviço público, uma decisão automatizada sem explicação pode ferir a transparência, e não detectar viés por subgrupo pode reproduzir desigualdades entre cidadãos. Dominar essa tríade evita confusão entre acurácia global e justiça do modelo.",
      "preRequisitos": ["Representação do ciclo treino/validação/teste de um modelo", "Conceitos de generalização, overfitting e underfitting"],
      "objetivosObservaveis": ["Definir viés (bias) como erro sistemático por simplificação ou desvio nos dados", "Definir variância como sensibilidade do modelo a mudanças nos dados de treino", "Explicar o que é explicabilidade e por que importa em decisões automatizadas públicas", "Listar limitações dos modelos de ML: dados, escopo, causalidade e deriva"],
      "competencias": ["Análise crítica de modelo: identificar fontes de viés e de variância", "Comunicação de risco a gestores: traduzir limitações do modelo em linguagem acessível", "Avaliação por subgrupo: verificar se a métrica global esconde falhas em parte da população"],
      "dificuldade": "intermediario",
      "relacoes": ["m5-u1-t2-s1 (Treinamento, validação e teste) — base de generalização do modelo", "m5-u1-t2-s2 (Generalização, overfitting e underfitting) — origem do viés e da variância"],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Viés algorítmico e explicabilidade integram o conteúdo programático de TI porque o serviço público adota decisões automatizadas em benefícios, contratações e fiscalização. Os itens podem perguntar se alta acurácia garante justiça, se a explicabilidade é exigência e qual viés explica erro sistemático. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende viés como erro de sistema do modelo e variância como instabilidade diante de mudanças nos dados de treino. Aprende que o viés pode vir da simplificação excessiva (underfitting) ou dos próprios dados (viés social), e que variância alta indica overfitting. Explicabilidade entra como a capacidade de dizer por que o modelo chegou a determinada resposta, ainda que de forma simples.",
      "intermediario": "Nível intermediário: o aluno explica explicabilidade (interpretabilidade) e sua importância em decisões públicas, diferenciando modelos intrinsecamente interpretáveis de métodos pós-hoc. Identifica viés algorítmico e entende que a acurácia global pode esconder erros concentrados em subgrupos. Conhece as limitações dos modelos: dependência da qualidade dos dados, escopo restrito, incapacidade de inferir causalidade e deriva ao longo do tempo.",
      "avancado": "Nível avançado: o aluno identifica fontes concretas de viés algorítmico nos dados de treino e reconhece sinais de deriva de conceito e de dados em produção. Sabe escolher entre explicabilidade intrínseca e pós-hoc conforme a complexidade do modelo e a necessidade de auditoria, e recomenda avaliação por subgrupo quando a decisão afeta cidadãos.",
      "especialista": "Nível especialista: o aluno integra explicabilidade, auditoria e governança de IA, definindo trilhas de revisão de decisões automatizadas e protocolos de monitoramento de deriva. Avalia se o modelo é robusto fora do domínio de treino e propõe controles para evitar que o sistema reproduza desigualdades presentes nos dados históricos do órgão público."
    },
    "comparacoes": [
      {
        "tema": "viés estatístico x viés social",
        "a": {
          "rotulo": "Viés estatístico (viés de modelo)",
          "texto": "Erro sistemático decorrente da simplificação excessiva do modelo (underfitting), que tende a errar consistentemente na mesma direção independentemente dos dados."
        },
        "b": {
          "rotulo": "Viés social (viés de dados)",
          "texto": "Desvio presente nos dados de treino que o modelo aprende e reproduz, como amostras não representativas da população atendida, gerando discriminação indireta."
        },
        "diferencaGabarito": "O viés estatístico é propriedade do modelo e se reduz com complexidade adequada; o viés social vem dos dados e exige correção da amostra e avaliação por subgrupo, não apenas ajuste de hiperparâmetros."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Alta acurácia global garante que o modelo não tem viés.",
        "porqueErrada": "A acurácia é uma média que pode mascarar erros concentrados em subgrupos específicos da população; um modelo pode ter acurácia alta e, ainda assim, falhar sistematicamente com um segmento de cidadãos.",
        "versaoCorreta": "É preciso avaliar o desempenho por subgrupo, não confiar apenas na métrica global, para revelar se o viés está afetando determinado grupo de cidadãos."
      },
      {
        "afirmacaoEquivocada": "Um modelo sem viés é possível se os dados forem grandes o suficiente.",
        "porqueErrada": "Todo modelo simplifica a realidade, então carrega algum viés; aumentar o volume de dados não elimina viés sistêmico nem converte correlação em causalidade.",
        "versaoCorreta": "O objetivo não é eliminar o viés, mas gerenciá-lo e medi-lo, identificando suas fontes nos dados e no modelo e monitorando o impacto nas decisões."
      }
    ],
    "resumoEstruturado": {
      "conceitos": ["Viés (bias)", "Variância", "Explicabilidade (interpretabilidade)", "Deriva de conceito e de dados", "Causalidade versus correlação", "Avaliação por subgrupo"],
      "regras": ["Viés e variância compõem o erro total do modelo; reduzir um pode aumentar o outro.", "Explicabilidade exige evidência verificável da razão da decisão, não apenas intuição do analista."],
      "comparacoes": ["Modelos complexos tendem a maior desempenho e menor explicabilidade; a escolha depende da prioridade da decisão pública."],
      "fluxos": ["Dados de treino levam ao modelo e à decisão; se houver viés nos dados ou no modelo, a decisão herda o viés; a avaliação por subgrupo é o ponto de controle."],
      "excecoes": ["Modelos complexos de baixa explicabilidade ainda podem ser auditados por métodos pós-hoc, mas com limitações de fidelidade à decisão original."],
      "palavrasChave": ["viés", "variância", "explicabilidade", "deriva", "causalidade", "subgrupo"],
      "checklist": ["Defino viés e variância com exemplos?", "Explico por que explicabilidade importa no serviço público?", "Listo as limitações dos modelos de ML?", "Avalio o modelo por subgrupo, e não apenas pela média global?"]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma secretaria treina um modelo de priorização de atendimento com dados coletados apenas em uma região rica da cidade e o implanta em toda a municipalidade, incluindo a periferia; o modelo avalia mal a população periférica. Que tipo de viés está presente?",
        "dados": "Dados de treino coletados exclusivamente em região de alta renda; população atendida inclui regiões periféricas com perfil socioeconômico diferente; erro de avaliação concentrado no grupo periférico.",
        "conceitos": ["viés de dados", "amostra não representativa"],
        "estrategia": "Identificar que a amostra de treino não espelha a população atendida, classificar o fenômeno como viés de dados (não de modelo) e propor correção com coleta de dados das subpopulações ausentes.",
        "execucao": ["Comparar o perfil socioeconômico dos dados de treino com o da população total atendida.", "Confirmar que regiões periféricas estão sub-representadas ou ausentes no treino.", "Classificar o erro como viés de dados, pois o modelo reproduz a amostra e não a população real.", "Recomendar coleta de dados nas subpopulações periféricas e reavaliação por subgrupo."],
        "resultado": "Viés de dados (amostra não representativa da população atendida). A correção exige dados das subpopulações periféricas e avaliação por subgrupo, e não apenas a média global de acurácia.",
        "justificativa": "O resultado ocorre porque o modelo aprende o padrão dos dados que recebeu: se esses dados vêm só de uma região rica, o modelo não aprendeu o comportamento da periferia. A métrica global esconde isso, por isso a avaliação deve ser feita por subgrupo.",
        "errosFrequentes": ["Confundir viés de dados com viés de modelo, atribuindo o erro à complexidade do algoritmo em vez da amostra.", "Acreditar que aumentar o volume de dados da mesma região rica resolve o problema, quando o que falta é diversidade da amostra."],
        "variacao": "Se o mesmo modelo fosse treinado com dados de apenas um bairro periférico e aplicado à cidade inteira, o viés se inverteria, prejudicando os moradores das regiões ricas; o problema continua sendo amostra não representativa."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um sistema automatizado negou um benefício a um cidadão e o servidor não consegue explicar quais critérios levaram à decisão; o órgão precisa definir a trilha de auditoria que permita revisão e reprocessamento do caso.",
        "dados": "Versão do modelo usada, data da decisão, atributos de entrada informados pelo cidadão, saída e ranking gerados, fatores principais que influenciaram a decisão, limite de corte aplicado e registro de qualquer intervenção humana.",
        "conceitos": ["explicabilidade", "trilha de auditoria"],
        "estrategia": "Listar os elementos que devem ser registrados a cada decisão automatizada para permitir reprodução, revisão humana e prestação de contas, atendendo ao dever de segurança e responsabilização.",
        "execucao": ["Registrar a versão do modelo e a data exata da decisão automatizada.", "Guardar os atributos de entrada usados na decisão e a saída e ranking produzidos.", "Anotar os fatores principais que influenciaram a decisão e o limite de corte aplicado.", "Documentar a intervenção humana, se houver, e permitir o reprocessamento do caso com a trilha completa."],
        "resultado": "Versão do modelo, data, atributos de entrada usados, saída e ranking, fatores principais da decisão, limite aplicado e registro de intervenção humana, permitindo reprocessar e justificar a decisão e atender ao dever de segurança e responsabilização.",
        "justificativa": "Sem esses registros não é possível reproduzir nem contestar a decisão; a trilha torna a automação auditável e permite ao cidadão e ao gestor verificar se os critérios foram aplicados corretamente, cumprindo o dever de transparência da administração pública.",
        "errosFrequentes": ["Acreditar que salvar apenas a decisão final (aprova ou nega) é suficiente, sem guardar os atributos e fatores que a produziram.", "Confiar que a versão do modelo pode ser reconstruída depois, sem registro explícito da versão e da data de cada decisão."],
        "variacao": "Se o cidadão recorrer meses depois e o modelo tiver sido atualizado entre a decisão e o recurso, só a trilha com versão e data permite saber qual modelo realmente decidiu o caso."
      },
      {
        "tipo": "erro",
        "problema": "Um modelo de priorização de benefícios apresenta acurácia global de 92 %, mas um servidor afirma que não é preciso analisar o desempenho por subgrupos porque a métrica geral já está alta. Essa leitura está correta?",
        "dados": "Acurácia global de 92 %; erro de priorização concentrado em um segmento específico de cidadãos; decisão automatizada que afeta pessoas e depende de justiça no atendimento.",
        "conceitos": ["acurácia global", "análise por subgrupo"],
        "estrategia": "Rejeitar a leitura ingênua de que acurácia alta descarta análise por subgrupo e explicar que a média global pode esconder falhas sistemáticas em grupos específicos, especialmente quando a decisão afeta pessoas.",
        "execucao": ["Observar que a acurácia global de 92 % é uma média e não revela onde os erros ocorrem.", "Buscar o desempenho do modelo separado por subgrupo de cidadãos, como região, renda e perfil.", "Constatar se há subgrupos com taxa de erro muito acima da média global.", "Concluir que a análise por subgrupo é obrigatória quando a decisão afeta pessoas, independentemente da acurácia geral."],
        "resultado": "Errado. A métrica global mascara erros concentrados em subgrupos; quando a decisão afeta pessoas, o erro deve ser examinado por subgrupo, e não avaliado apenas pela média geral.",
        "justificativa": "A acurácia média pode ser alta mesmo se o modelo falhar sistematicamente com um segmento de cidadãos, porque os acertos dos outros grupos compensam. No serviço público, essa falha oculta gera desigualdade no tratamento, por isso a análise por subgrupo é indispensável.",
        "errosFrequentes": ["Assumir que alta acurácia global significa desempenho bom para todos os grupos de cidadãos.", "Deixar de checar a distribuição de erros por subgrupo antes de implantar um modelo que toma decisões sobre pessoas."],
        "variacao": "Se o mesmo modelo mantiver 92 % de acurácia global mas passar a errar sistematicamente cidadãos de uma determinada faixa etária, a análise por subgrupo continua sendo a única forma de detectar o problema."
      }
    ]
  }
};
