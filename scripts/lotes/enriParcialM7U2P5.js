const enriParcialM7U2P5 = {
  "m7-u2-t4-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Agregação e agrupamento aparecem em itens que exploram o erro da média de médias e a soma de percentuais com denominadores diferentes; o candidato precisa pesar cada grupo pelo seu tamanho e reconhecer que a granularidade escolhida define a pergunta que o dado consegue responder.",
      "preRequisitos": [
        "Cálculo de média, soma e contagem",
        "Noção de razão, percentual e denominador",
        "Filtros e agrupamentos em ferramentas de análise"
      ],
      "objetivosObservaveis": [
        "Calcular a média global de grupos com tamanhos diferentes usando ponderação",
        "Explicar quando agregar por uma chave esconde o problema que se queria medir",
        "Verificar se a soma de percentuais é interpretável, conferindo os denominadores",
        "Reconhecer por que mediana e percentis não são agregáveis por soma nem por média"
      ],
      "competencias": [
        "Escolha de granularidade para análise",
        "Cálculo de médias ponderadas",
        "Leitura crítica de indicadores agregados"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t2-s2 (ETL e ELT: diferenças e quando aplicar cada um) — qualidade do dado que alimenta o agrupamento",
        "m8-u2-t1-s2 (Densidade e o efeito da escolha dos intervalos) — outra decisão de granularidade que altera a leitura"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O erro da média de médias e a soma de percentuais sem denominador comum são itens frequentes de prova em dados e estatística aplicada, justamente porque o resultado errado parece plausível. A classificação é estimativa pedagógica qualitativa."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno distingue agregar, que resume registros por uma função como soma, contagem, média ou mediana, de agrupar, que particiona os registros por uma chave como unidade, mês ou categoria antes de resumir. Compreende que a escolha da chave define a pergunta que o relatório responde.",
      "intermediario": "Nível intermediário: o aluno calcula a média global de grupos com quantidades diferentes pela média ponderada pelo tamanho de cada grupo, e reconhece que a média simples das médias só equivale à global quando os grupos têm o mesmo tamanho.",
      "avancado": "Nível avançado: o aluno examina denominadores antes de somar percentuais, distingue grandezas que se somam, como valores absolutos, das que não se somam, como taxas, medianas e percentis, e avalia o risco de agregar demais, que apaga a unidade com pior desempenho dentro do total.",
      "especialista": "Nível especialista: o aluno desenha agregações com métricas adequadas ao tipo de grandeza, publica o denominador e o nível de granularidade junto de cada indicador, testa a sensibilidade do resultado a escolhas de chave e documenta o risco de interpretação indevida nos relatórios executive."
    },
    "comparacoes": [
      {
        "tema": "Média simples das médias x média global ponderada",
        "a": {
          "rotulo": "Média simples",
          "texto": "Soma as médias dos grupos e divide pelo número de grupos, dando o mesmo peso a todos, independentemente de quantos registros cada um contém."
        },
        "b": {
          "rotulo": "Média ponderada",
          "texto": "Soma as médias dos grupos multiplicadas pelo tamanho de cada um e divide pelo total de registros, reproduzindo a média de todo o conjunto."
        },
        "diferencaGabarito": "As duas coincidem apenas com grupos de mesmo tamanho; em tamanhos diferentes, a média simples subestima ou superestima conforme a distribuição, porque iguala grupos grandes e pequenos."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A média geral de um conjunto é a média aritmética simples das médias dos subgrupos.",
        "porqueErrada": "Essa igualdade só vale quando os subgrupos têm exatamente o mesmo número de registros; caso contrário, o pequeno grupo pesa como o grande e o resultado não representa o todo.",
        "versaoCorreta": "A média global é a média ponderada pelo tamanho de cada grupo: soma das médias vezes tamanhos, dividida pelo total de registros."
      },
      {
        "afirmacaoEquivocada": "Somar os percentuais de participação das unidades sempre reproduz o total geral.",
        "porqueErrada": "A soma só fecha quando todos os percentuais têm o mesmo denominador; com denominadores distintos, o número obtido não representa nenhuma grandeza do conjunto.",
        "versaoCorreta": "Antes de somar percentuais, é preciso confirmar o denominador de cada um e, havendo bases diferentes, recalcular as taxas sobre o total comum."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Agregação",
        "Agrupamento",
        "Granularidade",
        "Média ponderada",
        "Denominador",
        "Indicador agregado"
      ],
      "regras": [
        "Média global = Σ(média do grupo × tamanho do grupo) ÷ Σ(tamanho do grupo)",
        "Somar percentuais exige denominador comum",
        "Medianas e percentis não são agregáveis por soma nem por média"
      ],
      "comparacoes": [
        "Média simples das médias x média global ponderada",
        "Agregação por unidade x agregação por período: cada granularidade responde a uma pergunta"
      ],
      "fluxos": [
        "Definir a pergunta → escolher a chave de agrupamento → conferir denominadores → agregar com a função adequada → validar com o total → publicar a granularidade"
      ],
      "excecoes": [
        "Mediana de medianas não é a mediana do conjunto; exige manter os dados brutos",
        "Agregar municipalities no nível estadual pode esconder a unidade com pior desempenho"
      ],
      "palavrasChave": [
        "agregação",
        "agrupamento",
        "granularidade",
        "ponderação",
        "denominador",
        "percentual"
      ],
      "checklist": [
        "Verifiquei se a média global foi ponderada pelo tamanho dos grupos?",
        "Confirmei o denominador de cada percentual somado?",
        "A granularidade escolhida responde à pergunta formulada?",
        "Publiquei o nível de agregação junto do indicador?",
        "Testei o efeito de agregar mais sobre a leitura do resultado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Três postos de atendimento registraram 4, 6 e 10 atendimentos por dia, com tempos médios de espera de 20, 30 e 40 minutos. Calcular o tempo médio de espera global.",
        "dados": "Posto A: 4 atendimentos e média de 20 minutos. Posto B: 6 atendimentos e média de 30 minutos. Posto C: 10 atendimentos e média de 40 minutos. Total de 20 atendimentos.",
        "conceitos": [
          "Média ponderada",
          "Tamanho do grupo",
          "Tempo médio de espera"
        ],
        "estrategia": "Multiplicar a média de cada posto pelo número de atendimentos, somar os produtos e dividir pelo total de atendimentos, comparando com a média simples para evidenciar o viés.",
        "execucao": [
          "Calcular o produto de cada grupo: 4 × 20 = 80; 6 × 30 = 180; 10 × 40 = 400.",
          "Somar os produtos: 80 + 180 + 400 = 660 minutos.",
          "Somar os atendimentos: 4 + 6 + 10 = 20.",
          "Dividir: 660 ÷ 20 = 33 minutos.",
          "Comparar com a média simples: (20 + 30 + 40) ÷ 3 = 30 minutos."
        ],
        "resultado": "Tempo médio global de espera igual a 33 minutos, e não 30 minutos como obteria a média simples das três médias.",
        "justificativa": "Cada minuto de espera foi experienced em um número diferente de atendimentos, e o posto mais lento atendeu mais gente; ponderar pelo volume recupera o total de minutos dividido pelo total de atendimentos.",
        "errosFrequentes": [
          "Dividir a soma das médias pelo total de atendimentos, misturando unidades",
          "Usar média simples e subestimar o tempo por ignorar o volume do posto mais lento",
          "Confundir tempo médio por posto com tempo médio por atendimento"
        ],
        "variacao": "Se o posto C passar a atender 20 atendimentos por dia, a média ponderada sobe para (80 + 180 + 800) ÷ 30, DIRIGIDO a 35,3 minutos, aproximando-se da média do posto de maior espera."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um relatório soma as participações de cinco unidades, obtendo 22% + 25% + 18% + 20% + 15% = 100%, e afirma que os dados são consistentes. Avaliar a afirmação.",
        "dados": "Cinco unidades com participações de 22%, 25%, 18%, 20% e 15%; desconhecido o denominador usado em cada percentual; total declarado de 100%.",
        "conceitos": [
          "Denominador",
          "Percentual de participação",
          "Consistência de indicador"
        ],
        "estrategia": "Verificar a origem de cada percentual, distinguir denominador comum de denominadores próprios e concluir sobre o que a soma significa em cada cenário.",
        "execucao": [
          "Identificar o denominador de cada percentual informado.",
          "Supor o caso de denominador comum: total geral igual à soma das partes.",
          "Supor o caso de denominadores próprios: cada taxa refere-se à sua unidade.",
          "Concluir que a soma só tem significado no primeiro caso."
        ],
        "resultado": "A afirmação não se sustenta: a soma fecha por construção quando há denominador comum e perde significado quando cada percentual usa o total da própria unidade.",
        "justificativa": "Percentuais são razões e só podem ser somados quando representam partes de uma mesma base; com bases diferentes, a adição produz um número sem interpretação e não serve como teste de consistência.",
        "errosFrequentes": [
          "Assumir denominador comum sem conferir a fonte do percentual",
          "Tratar a soma igual a 100% como prova de qualidade dos dados",
          "Recalcular a taxa sobre o total comum sem registrar a mudança de base"
        ],
        "variacao": "Se cada percentual for recalculado sobre o total geral de 10 mil atendimentos, a soma volta a fechar em 100% e passa a permitir comparações entre unidades."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'A média geral de um conjunto é a média aritmética simples das médias dos grupos.' Julgar a afirmação e apresentar a leitura correta.",
        "dados": "Dois grupos: um com 10 registros e média 5, outro com 30 registros e média 7; média simples proposta igual a 6,0.",
        "conceitos": [
          "Média de médias",
          "Ponderação por frequência",
          "Granularidade"
        ],
        "estrategia": "Comparar a média simples com a média ponderada do conjunto e mostrar em que condição a igualdade se verifica.",
        "execucao": [
          "Calcular a média simples das médias: (5 + 7) ÷ 2 = 6,0.",
          "Calcular a média ponderada: (10 × 5 + 30 × 7) ÷ 40 = 260 ÷ 40 = 6,5.",
          "Comparar os dois valores e perceber a diferença de 0,5 ponto.",
          "Identificar a condição de validade: grupos com o mesmo tamanho."
        ],
        "resultado": "Errado: a média simples das médias resulta em 6,0, enquanto a média global dos 40 registros é 6,5; a igualdade só ocorre com grupos de mesmo tamanho.",
        "justificativa": "A média global é a razão entre o total dos valores e o total dos registros, de modo que o peso de cada grupo é proporcional ao seu tamanho; ignorar essa proporção altera o resultado na direção do grupo pequeno.",
        "errosFrequentes": [
          "Aplicar a média simples a grupos com tamanhos diferentes",
          "Confundir a média de médias com a média de um subgrupo",
          "Publicar a média simples sem informar os tamanhos dos grupos"
        ],
        "variacao": "Se os grupos passarem a ter 20 e 20 registros, as duas médias coincidem em 6,0, o que explica por que a prática incorreta às vezes parece funcionar."
      }
    ]
  },
  "m7-u2-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Deduplicação de bases públicas exige reconhecer o grau de risco de cada chave de identidade e o custo dos dois erros fundamentais — fundir pessoas diferentes e deixar a mesma pessoa duplicada —, porque a decisão de limiar e de prevalência é de risco, não apenas técnica.",
      "preRequisitos": [
        "Conceito de chave primária e identificador único",
        "Normalização de textos e de cadastros",
        "Noções de similaridade e distância entre strings"
      ],
      "objetivosObservaveis": [
        "Classificar chaves de identidade pelo grau de risco de falso positivo e falso negativo",
        "Definir regras de fusão com base em fonte autoritativa, completude ou recência",
        "Reconhecer os efeitos clínicos e jurídicos da fusão indevida de registros",
        "Descrever as ações de higiene que permiten auditar e reverter uma deduplicação"
      ],
      "competencias": [
        "Gestão de qualidade de dados cadastrais",
        "Decisão de risco com regra documentada",
        "Auditoria de processos de tratamento de dados"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m7-u2-t3-s2 (Duplicidades, inconsistências e erros de tipo) — diagnóstico das anomalias que a deduplicação corrige",
        "m7-u2-t4-s1 (Agregação e agrupamento (e o erro da média de médias)) — a contagem de registros duplicados distorce qualquer agregação"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens sobre deduplicação, chaves de identidade e fusão de cadastros integram o conteúdo programático de governança de dados e de TI, com ênfase no risco de confundir homônimos. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que deduplicação é reconhecer registros que representam a mesma entidade real e tratá-los segundo regra escrita, e sabe que identificadores exatos e confiáveis, como CPF, CNPJ ou protocolo, são mais seguros que a comparação de nomes.",
      "intermediario": "Nível intermediário: o aluno ordena as chaves de identidade pelo grau de risco, distingue composição de campos normalizados de similaridade por distância de edição, e reconhece que a similaridade exige limiar declarado e sempre carrega incerteza.",
      "avancado": "Nível avançado: o aluno define a regra de fusão escolhendo a fonte autoritativa, a completude ou a recência, pesa o falso positivo contra o falso negativo conforme o dano de cada um e planeja a revisão humana para os pares de baixa margem.",
      "especialista": "Nível especialista: o aluno implementa higiene de processo: cópia dos originais, registro do registro sobrevivente e do motivo da decisão, parâmetros versionados e reexecução controlável, porque deduplicação irreversível sem trilha impede auditoria, contestação e reparo."
    },
    "comparacoes": [
      {
        "tema": "Falso positivo x falso negativo na deduplicação",
        "a": {
          "rotulo": "Falso positivo",
          "texto": "Pessoas diferentes são fundidas por haverem nomes e dados iguais; em cadastros de saúde ou de benefício, o efeito é clínico ou jurídico direto sobre a pessoa."
        },
        "b": {
          "rotulo": "Falso negativo",
          "texto": "A mesma pessoa permanece em registros separados por diferença de grafia, abreviação ou endereço antigo, o que fragmenta a contagem e o histórico."
        },
        "diferencaGabarito": "Ambos são erros, mas com consequências diferentes: o falso positivo transfere atributos e histórico de uma pessoa a outra, o falso negativo apenas duplica. O limiar é decisão de risco."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "A deduplicação é uma rotina técnica cuja execução não depende de decisão de negócio.",
        "porqueErrada": "A chave de identidade, o limiar de similaridade e a regra de prevalência definem quem é a mesma pessoa e qual registro prevalece; são decisões de risco com consequências sobre as pessoas afetadas.",
        "versaoCorreta": "A ferramenta executa a regra defineda por quem responde pelo processo: chave, limiar e prevalência precisam ser documentados, testados e versionados."
      },
      {
        "afirmacaoEquivocada": "Remover a linha duplicada da base resolve o problema de forma definitiva.",
        "porqueErrada": "A remoção destrói a informação dos dois registros sem indicar qual prevaleceu, impede auditoria e correção posterior e pode apagar atributos válidos que estavam só em uma das linhas.",
        "versaoCorreta": "A deduplicação deve manter os originais, registrar a decisão de fusão e os campos preservados, permitindo reexecução controlada e reversão."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Deduplicação",
        "Chave de identidade",
        "Similaridade e limiar",
        "Fusão (merge)",
        "Prevalência por fonte autoritativa",
        "Falso positivo e falso negativo"
      ],
      "regras": [
        "Identificador exato e confiável é a chave mais segura; similaridade exige limiar declarado",
        "A regra de fusão precisa indicar qual registro sobrevive e como os campos complementares foram combinados",
        "Deduplicação deve conservar os originais e a trilha de decisão"
      ],
      "comparacoes": [
        "Chave exata (CPF, protocolo) x chave por campos x chave por similaridade",
        "Prevalência por fonte autoritativa x por completude x por recência"
      ],
      "fluxos": [
        "Definir a entidade e a chave → normalizar campos → gerar candidatos → aplicar limiar → revisar casos de baixa margem → fundir com regra de prevalência → registrar a trilha"
      ],
      "excecoes": [
        "Gêmeos e homônimos com dados coincidentes exigem revisão manual",
        "Regras de similaridade mudar entre execuções invalidam comparações históricas"
      ],
      "palavrasChave": [
        "deduplicação",
        "chave de identidade",
        "similaridade",
        "limiar",
        "fusão",
        "homônimo"
      ],
      "checklist": [
        "A chave de identidade foi definida e justificada por risco?",
        "O limiar de similaridade está documentado e testado?",
        "A regra de prevalência indica o que sobrevive à fusão?",
        "Os casos de baixa margem foram encaminhados para revisão?",
        "Os registros originais e a trilha de decisão foram preservados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Dois registros de cadastro apresentam o mesmo CPF, nomes 'João P. Silva' e 'JOAO PAULO SILVA' e endereços diferentes, um antigo e outro atual. Indicar o tratamento correto.",
        "dados": "CPF idêntico nos dois registros; grafias de nome diferentes; endereço divergente, sendo um deles o endereço atualizado.",
        "conceitos": [
          "Chave de identidade por identificador",
          "Atributos divergentes",
          "Prevalência por recência"
        ],
        "estrategia": "Reconhecer o identificador como chave confiável, listar os atributos divergentes, aplicar a regra de prevalência por recência e definir a necessidade de preservar histórico e decisão.",
        "execucao": [
          "Identificar o CPF idêntico como chave de identidade confiável.",
          "Normalizar a comparação do nome, ignorando acentuação e caixa.",
          "Aplicar a prevalência por recência para o endereço divergente.",
          "Registrar o registro sobrevivente, o motivo e o histórico preservado."
        ],
        "resultado": "Os dois registros devem ser fundidos em um, com o endereço mais recente prevalecendo, os demais campos completados e a decisão registrada, mantendo os originais para auditoria.",
        "justificativa": "Com o mesmo identificador, tratar os registros como entidades distintas apenas fragmenta a contagem; como os atributos divergem, a fusão precisa de regra explícita de prevalência para decidir o que sobrevive.",
        "errosFrequentes": [
          "Excluir a linha mais antiga sem registrar a decisão",
          "Usar a similaridade de nome como chave quando há CPF disponível",
          "Substituir todos os campos do registro absorvido pelos do sobrevivente"
        ],
        "variacao": "Se além do CPF houver protocolo de atendimento idêntico, o grau de certeza sobe e a revisão manual pode ser dispensada para aquele par."
      },
      {
        "tipo": "aplicacao",
        "problema": "Base de pacientes sem CPF, contendo apenas nome e data de nascimento. Explicar o risco principal de deduplicar somente por similaridade de nome e apontar mitigações.",
        "dados": "Base de pacientes com nome e data de nascimento, sem documento identificador; homônimos com a mesma data de nascimento; necessidade de individualizar prontuários.",
        "conceitos": [
          "Falso positivo",
          "Limiar de similaridade",
          "Revisão humana"
        ],
        "estrategia": "Identificar o modo de falha dominante, dimensionar o dano e propor alternativas de chave e de governança do processo de matching.",
        "execucao": [
          "Avaliar a similaridade de nome como único critério disponível.",
          "Reconhecer que homônimos com a mesma data geram falso positivo.",
          "Descrever o dano clínico de juntar prontuários de pacientes distintos.",
          "Propor combinação de campos, marcação de incerteza e revisão humana."
        ],
        "resultado": "O risco principal é o falso positivo, isto é, fundir pacientes distintos com nomes e datas iguais, o que pode anexar histórico clínico de uma pessoa a outra.",
        "justificativa": "Sem identificador forte, a similaridade de nomes é probabilística; como o erro de vínculo clínico indevido entre pacientes tem efeito direto, a mitigação passa por exigir mais campos, limiar conservador e revisão humana nos casos limítrofes.",
        "errosFrequentes": [
          "Confundir alta taxa de correspondência com alta qualidade do casamento",
          "Aplicar o mesmo limiar a bases com composição diferente",
          "Tratar todo par aceito como certeza, sem marcação de incerteza"
        ],
        "variacao": "Ao acrescentar a unidade de cadastro ao critério, a chance de colisão entre homônimos de instituições diferentes diminui e a revisão manual se concentra nos casos de mesma instituição."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Deduplicação é uma rotina técnica sem decisão de negócio, pois a ferramenta decide sozinha.' Julgar a afirmação e apontar quem responde pelo processo.",
        "dados": "Pipeline de deduplicação rodando com parâmetros padrão de similaridade; cadastro unificado de benefícios; equipe técnica responsável apenas pela execução.",
        "conceitos": [
          "Parâmetros de decisão",
          "Regra de prevalência",
          "Responsabilidade pelo processo"
        ],
        "estrategia": "Separar execução técnica de definição de regra e mostrar que os parâmetros escolhidos determinam quem será fundido e quem permanecerá duplicado.",
        "execucao": [
          "Identificar quais parâmetros a ferramenta exige: chave, limiar e prevalência.",
          "Relacionar cada parâmetro a um efeito sobre as pessoas cadastradas.",
          "Mostrar que a execução apenas aplica a regra definida por outro.",
          "Atribuir a responsabilidade pela escolha e pela revisão dos casos ambíguos."
        ],
        "resultado": "Errado: chave de identidade, limiar e regra de prevalência são decisões de negócio e de risco; a ferramenta executa a regra e alguém precisa responder pelas consequências.",
        "justificativa": "Os parâmetros da deduplicação definem o que é a mesma entidade e qual registro prevalece, traduzindo-se em efeitos concretos sobre os direitos das pessoas; por isso não podem ser delegáveis à execução automática.",
        "errosFrequentes": [
          "Considerar que a escolha do limiar é detalhe técnico",
          "Rodar a deduplicação em produção sem teste e sem registro de parâmetros",
          "Deixar a revisão dos casos ambíguos sem responsável definido"
        ],
        "variacao": "Se o cadastro agregar dados de saúde, a exigência de revisão humana cresce, porque o erro de fusão deixa de ser estatístico e passa a ter efeito clínico."
      }
    ]
  }
};
