const enriParcialM7U2P4 = {
  "m7-u2-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A prova exige que o candidato reconheça a padronização pelo z-score e o redimensionamento min-max, aplique as duas fórmulas e interprete o resultado em desvios-padrão ou na faixa de zero a um, pois a troca entre os métodos altera o gabarito e a leitura da escala.",
      "preRequisitos": [
        "Cálculo de média e desvio padrão",
        "Noções de mínimo, máximo e amplitude",
        "Leitura de gráficos e tabelas de valores"
      ],
      "objetivosObservaveis": [
        "Calcular o z-score de um valor e interpretar sua posição em desvios-padrão",
        "Aplicar o redimensionamento min-max a um conjunto de valores",
        "Comparar variáveis de unidades diferentes por meio de escores padronizados",
        "Reconhecer os limites da normalização estatística e a dependência dos parâmetros amostrais"
      ],
      "competencias": [
        "Cálculo e interpretação de escalas padronizadas",
        "Comparação de variáveis com unidades distintas",
        "Análise crítica de limites de método"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t3-s4 (Normalização de BANCOS DE DADOS: formas normais e contraste com a estatística) — homônimo de sentido oposto: escala de valores x estrutura de tabelas",
        "m8-u2-t1-s1 (Histograma: construção, classes e frequências) — a forma da distribuição não muda com a normalização linear"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens de z-score e min-max integram o conteúdo programático de dados e de estatística aplicada, com foco no cálculo e na interpretação da escala. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que normalizar estatisticamente é transformar os valores de uma variável para colocá-los numa escala comum, preservando a ordem relativa. Distingue a padronização, que resulta em z = (x − média) ÷ desvio padrão, do redimensionamento, que leva os valores à faixa de zero a um por (x − mínimo) ÷ (máximo − mínimo).",
      "intermediario": "Nível intermediário: o aluno calcula o z-score e o min-max, interpreta o primeiro em unidades de desvio-padrão e o segundo em fração da amplitude observada, e usa a escala comum para comparar variáveis de unidades diferentes, como idade e renda, em um mesmo índice. Registra os parâmetros usados para permitir a reversão.",
      "avancado": "Nível avançado: o aluno percebe que os parâmetros vêm da amostra: no min-max, um extremo comprime o resto da distribuição; outliers contaminam média, desvio, mínimo e máximo. Sabe que a transformação linear não altera a forma da distribuição e que, para dados novos, precisa reaplicar a mesma régua aprendida.",
      "especialista": "Nível especialista: o aluno decide quando normalizar e quando não, separa normalização de padronização de interestandardização, documenta média, desvio, mínimo e máximo para reverter a escala, e verifica se a normalização resolve o problema real da escala sem criar artificialidade no espaço das variáveis."
    },
    "comparacoes": [
      {
        "tema": "Padronização z-score x redimensionamento min-max",
        "a": {
          "rotulo": "Z-score",
          "texto": "Mede o desvio do valor em relação à média, dividido pelo desvio padrão; produz escala com média zero e desvio um, interpretável em desvios-padrão."
        },
        "b": {
          "rotulo": "Min-max",
          "texto": "Mede a posição do valor entre o mínimo e o máximo observados; produz escala de zero a um, mas fica sensível aos valores extremos da amostra."
        },
        "diferencaGabarito": "O z-score preserva a informação de dispersão da distribuição e resiste a unidades; o min-max depende da amplitude observada e é choice para algoritmos que exigem entrada entre zero e um."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Aplicar o z-score torna a distribuição dos dados normal.",
        "porqueErrada": "A transformação é linear: ela recentraliza em zero e mede em desvios-padrão, mas preserva a forma da distribuição, incluindo a assimetria.",
        "versaoCorreta": "O z-score padroniza a escala, não a forma; obter distribuição normal exige transformação não linear, como a transformação logarítmica ou o método de Box-Cox."
      },
      {
        "afirmacaoEquivocada": "O valor normalizado pode ser lido como medida da qualidade do dado analisado.",
        "porqueErrada": "O valor padronizado é uma posição na escala da própria amostra; ele não expressa qualidade, desempenho ou validade do dado original.",
        "versaoCorreta": "O z-score indica quantos desvios-padrão o valor dista da média, o que permite comparações internas e entre variáveis, mas não julga a qualidade do registro."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Normalização estatística",
        "Padronização (z-score)",
        "Redimensionamento (min-max)",
        "Escala comum",
        "Desvio-padrão",
        "Inversão da escala"
      ],
      "regras": [
        "z = (x − média) ÷ desvio padrão",
        "x' = (x − mínimo) ÷ (máximo − mínimo)",
        "Os parâmetros da normalização dependem da amostra e devem ser guardados para reverter a escala"
      ],
      "comparacoes": [
        "Z-score (média zero, desvio um, escala em desvios-padrão) x min-max (faixa de zero a um)",
        "Normalização estatística (escala dos valores) x normalização de banco de dados (estrutura das tabelas)"
      ],
      "fluxos": [
        "Verificar necessidade → escolher método → calcular parâmetros na amostra de referência → aplicar a transformação → interpretar na escala de origem"
      ],
      "excecoes": [
        "Valores fora da faixa observada geram escores fora de zero e um no min-max",
        "Outliers deslocam média e desvio, alterando todos os escores calculados"
      ],
      "palavrasChave": [
        "z-score",
        "min-max",
        "normalização",
        "desvio-padrão",
        "escala",
        "inversão"
      ],
      "checklist": [
        "Calculei a média e o desvio-padrão corretos?",
        "Verifiquei se o min-max exige faixa fixa para o algoritmo?",
        "Guardei os parâmetros usados na transformação?",
        "Apliquei a mesma régua aos dados novos?",
        "Evitei confundir normalização com transformação da forma da distribuição?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Calcular o z-score de uma nota 85 em uma prova cuja média foi 70 e o desvio-padrão 10, e interpretar o resultado.",
        "dados": "Nota observada 85; média da turma 70; desvio-padrão 10; prova de outra turma com média 60, desvio 5 e nota 70.",
        "conceitos": [
          "Z-score",
          "Desvio-padrão",
          "Comparação entre escalas"
        ],
        "estrategia": "Aplicar a fórmula do z-score, interpretar o valor em desvios-padrão e repetir o cálculo na segunda prova para mostrar que a comparação não depende da unidade absoluta.",
        "execucao": [
          "Calcular a diferença em relação à média: 85 − 70 = 15.",
          "Dividir pelo desvio-padrão: 15 ÷ 10 = 1,5.",
          "Interpretar: a nota está 1,5 desvio-padrão acima da média.",
          "Repetir na segunda prova: (70 − 60) ÷ 5 = 2,0."
        ],
        "resultado": "z = 1,5 na primeira prova e z = 2,0 na segunda: a nota 70 é relativamente melhor, embora em valor absoluto menor que a nota 85.",
        "justificativa": "O z-score mede posição relativa na distribuição; como a segunda prova tem menor dispersão, a mesma nota 70 representa um afastamento maior em desvios-padrão, o que mostra a vantagem da escala comum.",
        "errosFrequentes": [
          "Dividir a média pelo desvio-padrão em vez de dividir a diferença em relação à média",
          "Comparar notas absolutas e concluir que 85 é melhor que 70 sem considerar a dispersão de cada prova",
          "Confundir o z-score com uma medida de desempenho do aluno"
        ],
        "variacao": "Se o desvio-padrão da primeira prova passar para 20, o z da nota 85 cai para 0,75, mostrando que a mesma nota vale menos quando a turma é mais dispersa."
      },
      {
        "tipo": "aplicacao",
        "problema": "Redimensionar por min-max os valores 85 e 60 de uma variável cujo mínimo é 60 e máximo 100, e verificar o que ocorreria com o valor 110.",
        "dados": "Variável com mínimo 60 e máximo 100; valores a converter 85 e 60; valor fora da faixa observada 110.",
        "conceitos": [
          "Redimensionamento min-max",
          "Faixa de zero a um",
          "Valores fora da amostra"
        ],
        "estrategia": "Aplicar a fórmula a cada valor, conferir os extremos da escala e usar o valor 110 para mostrar o que ocorre quando a régua é aplicada a uma observação não vista.",
        "execucao": [
          "Calcular a amplitude: 100 − 60 = 40.",
          "Converter 85: (85 − 60) ÷ 40 = 0,625.",
          "Converter 60: (60 − 60) ÷ 40 = 0.",
          "Aplicar a fórmula a 110: (110 − 60) ÷ 40 = 1,25."
        ],
        "resultado": "85 vira 0,625 e 60 vira 0; o valor 110 produz 1,25, acima do limite de um, sinal de que a régua foi extrapolada para fora da amostra.",
        "justificativa": "O denominador é a amplitude observada na amostra de referência, de modo que apenas os valores entre o mínimo e o máximo mapeiam para a faixa de zero a um; um valor acima do máximo rompe a escala e exige reestimar os parâmetros.",
        "errosFrequentes": [
          "Dividir pela soma do mínimo com o máximo",
          "Recalcular mínimo e máximo incluindo o valor novo e fingir que a escala original foi preservada",
          "Confundir o valor 0,625 com a posição percentual do valor na amostra"
        ],
        "variacao": "Se a amostra de referência passar a ter mínimo 50 e máximo 100, o valor 85 vira 0,70 e o 110 vira 1,20, ilustrando a dependência da régua em relação aos extremos observados."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Aplicar o z-score torna os dados com distribuição normal.' Julgar a afirmação e apresentar a leitura correta.",
        "dados": "Conjunto com assimetria à direita; aplicação da padronização z = (x − média) ÷ desvio padrão a todos os valores.",
        "conceitos": [
          "Transformação linear",
          "Forma da distribuição",
          "Padronização"
        ],
        "estrategia": "Separar o que a padronização faz — deslocar e escalar — do que a transformação da forma exige, e mostrar que a assimetria permanece.",
        "execucao": [
          "Identificar que a padronização subtrai a média e divide pelo desvio-padrão.",
          "Reconhecer que ambas as operações são lineares e preservam o formato da nuvem de pontos.",
          "Concluir que a assimetria original continua presente.",
          "Indicar que a normalização da forma exige transformação não linear."
        ],
        "resultado": "Errado: o z-score apenas recentraliza em zero e mede em desvios-padrão, mantendo a assimetria da distribuição original.",
        "justificativa": "Como a transformação é linear, ela não altera a ordem dos valores nem a curvatura da distribuição; transformar a forma em normal exigiria outra família de transformações, não a padronização.",
        "errosFrequentes": [
          "Confundir escala comum com distribuição normal",
          "Acreditar que valores Padronizados ficam todos entre zero e um",
          "Aplicar transformação logarítmica e chamar o resultado de z-score"
        ],
        "variacao": "Se os dados forem todos simétricos, a padronização produz uma curva simétrica, o que pode sugerir sucesso do método, embora a forma não tenha sido alterada por ele."
      }
    ]
  },
  "m7-u2-t3-s4": {
    "orientacaoEstrategica": {
      "porqueImporta": "Normalização em banco de dados integra o conteúdo programático: o candidato precisa separar a primeira, a segunda e a terceira forma normal, identificar dependência parcial e transitiva e não confundir a reorganização de tabelas com a mudança de escala dos valores.",
      "preRequisitos": [
        "Conceito de chave primária e chave composta",
        "Dependência funcional entre atributos",
        "Noções de redundância e consistência de dados"
      ],
      "objetivosObservaveis": [
        "Identificar violações da primeira, da segunda e da terceira forma normal em uma tabela",
        "Decompor uma tabela relacional para eliminar redundância",
        "Explicar as anomalias de inserção, atualização e exclusão causadas pela redundância",
        "Diferenciar normalização de banco de dados de normalização estatística"
      ],
      "competencias": [
        "Modelagem de dados relacionais",
        "Diagnóstico de anomalias de atualização",
        "Leitura de itens que exploram homônimos técnicos"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t3-s3 (Normalização ESTATÍSTICA: padronização (z-score) e redimensionamento (min-max)) — homônimo de sentido oposto: estrutura das tabelas x escala dos valores",
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — base conceitual para chaves e relacionamentos"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Formas normais, redundância e dependências funcionais formam bloco de presença permanente no conteúdo programático de banco de dados e de TI, e a confusão entre os dois sentidos da palavra normalização é o distrator principal. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que normalizar um banco de dados é reorganizar tabelas para que cada fato seja gravado uma única vez, e reconhece a primeira forma normal como a exigência de valores atômicos, sem listas nem repetições dentro de uma célula.",
      "intermediario": "Nível intermediário: o aluno distingue a dependência parcial, que aparece quando uma coluna depende de parte de uma chave composta, da dependência transitiva, quando uma coluna não-chave depende de outra coluna não-chave, e sabe decompor a tabela para eliminar essas dependências.",
      "avancado": "Nível avançado: o aluno identifica as anomalias de inserção, atualização e exclusão que a redundância produz, avalia o custo das junções impostas pela normalização e reconhece que ambientes analíticos desnormalizam de propósito, com risco controlado e justificativa de desempenho.",
      "especialista": "Nível especialista: o aluno projeta esquemas normalizados para cargas transacionais, define chaves primárias e alternativas, identifica chaves candidatas, decide níveis de normalização adequados a cada caso e documenta as exceções em que a desnormalização é adotada, com plano de manutenção."
    },
    "comparacoes": [
      {
        "tema": "Normalização estatística x normalização de banco de dados",
        "a": {
          "rotulo": "Normalização estatística",
          "texto": "Transforma os valores de uma variável para uma escala comum, por padronização ou redimensionamento, sem alterar a estrutura de armazenamento."
        },
        "b": {
          "rotulo": "Normalização de banco",
          "texto": "Reorganiza o esquema para eliminar redundância e dependências indesejadas, dividindo tabelas, sem alterar os valores gravados."
        },
        "diferencaGabarito": "Uma talks de valores, a outra de esquema: a primeira muda a régua de medida e a segunda muda onde cada fato mora. O enunciado revela o sentido quando cita z-score e min-max ou formas normais."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Normalizar um banco de dados é transformar os valores das colunas para a faixa de zero a um.",
        "porqueErrada": "Essa descrição corresponde ao escalonamento estatístico; na normalização relacional nenhum valor é reescrito, o que muda é a distribuição dos fatos entre tabelas.",
        "versaoCorreta": "Normalização relacional significa reduzir redundância por meio das formas normais, separando atributos em tabelas relacionadas por chaves."
      },
      {
        "afirmacaoEquivocada": "Como a terceira forma normal elimina a redundância, todo sistema deve ser mantido na terceira forma normal.",
        "porqueErrada": "A normalização em terceira forma normal protege a consistência, mas impõe junções; em ambientes analíticos a desnormalização é usada de propósito para reduzir custo de leitura, com riscos gerenciados.",
        "versaoCorreta": "O nível adequado depende do perfil de uso: transações priorizam consistência e análise prioriza desempenho, com controles de qualidade na desnormalização."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Primeira forma normal (valores atômicos)",
        "Segunda forma normal (dependência parcial)",
        "Terceira forma normal (dependência transitiva)",
        "Redundância",
        "Anomalias de inserção, atualização e exclusão",
        "Desnormalização"
      ],
      "regras": [
        "1FN: cada célula contém um único valor indivisível",
        "2FN: nenhum atributo depende de parte da chave composta",
        "3FN: nenhum atributo não-chave depende de outro atributo não-chave"
      ],
      "comparacoes": [
        "1FN (atomicidade) x 2FN (dependência parcial) x 3FN (dependência transitiva)",
        "Normalização relacional (esquema) x normalização estatística (escala dos valores)"
      ],
      "fluxos": [
        "Identificar chave e dependências → localizar a violação → decompor a tabela → eliminar redundância → verificar anomalias residuais"
      ],
      "excecoes": [
        "Valores multivalorados podem ser mantidos em colunas de conjuntos ou em tabelas de junção, conforme o modelo escolhido",
        "A desnormalização é legítima em ambientes analíticos, com documentação e plano de manutenção"
      ],
      "palavrasChave": [
        "forma normal",
        "redundância",
        "dependência funcional",
        "chave composta",
        "atomicidade",
        "desnormalização"
      ],
      "checklist": [
        "Identifiquei a chave primária ou composta da tabela?",
        "Verifiquei valores atômicos em cada célula?",
        "Avaliei dependências parciais e transitivas?",
        "Liste as anomalias que a redundância atual provoca?",
        "Confirmei que o problema pede normalização de esquema e não de escala?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Aplicar a terceira forma normal à tabela MATRICULA(aluno, disciplina, nota, nome_aluno, curso_do_aluno) e descrever o ganho obtido.",
        "dados": "Tabela com chave composta (aluno, disciplina) e atributos nota, nome_aluno e curso_do_aluno;Changing o curso de um aluno exige atualizar várias linhas.",
        "conceitos": [
          "Terceira forma normal",
          "Dependência transitiva",
          "Chave composta"
        ],
        "estrategia": "Listar as dependências de cada atributo em relação à chave, identificar as dependências transitivas e decompor a tabela, comparando o esforço de atualização antes e depois.",
        "execucao": [
          "Mapear as dependências: nota depende de (aluno, disciplina), nome_aluno depende de aluno e curso_do_aluno depende de aluno.",
          "Reconhecer que dois atributos dependem transitivamente da chave composta.",
          "Decompor em ALUNO(aluno, nome_aluno, curso) e MATRICULA(aluno, disciplina, nota).",
          "Comparar a atualização do curso de um aluno: uma linha na tabela ALUNO."
        ],
        "resultado": "A tabela de matrícula fica apenas com a chave e a nota, enquanto os dados do aluno passam à tabela ALUNO, eliminando a repetição do nome e do curso.",
        "justificativa": "Como nome_aluno e curso_do_aluno não dependem da disciplina, a terceira forma normal exige que residam em uma tabela de entidade, referenciada por chave, de modo que a atualização atinge um único registro.",
        "errosFrequentes": [
          "Manter o nome do aluno na tabela de matrícula por considerá-lo parte do contexto da nota",
          "Criar uma tabela nova para cada atributo, fragmentando excessivamente o esquema",
          "Confundir a dependência da chave composta com dependência transitiva"
        ],
        "variacao": "Se o curso passar a depender também da disciplina, por exemplo em cursos com turmas específicas, a terceira forma normal deixa de exigir a separação do atributo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Explicar por que atualizar o endereço de um cliente em uma tabela não normalizada pode criar inconsistência entre pedidos do mesmo cliente.",
        "dados": "Tabela PEDIDO com uma linha por pedido, repetindo o endereço do cliente; sistema de pedidos de uma loja; atualização parcial de endereço.",
        "conceitos": [
          "Redundância",
          "Anomalia de atualização",
          "Inconsistência"
        ],
        "estrategia": "Descrever a repetição do dado, simular a atualização parcial e mostrar o conflito entre linhas, indicando a solução relacional com tabela de clientes.",
        "execucao": [
          "Contar a repetição do endereço do cliente em uma linha por pedido.",
          "Simular a atualização que atinge apenas as linhas mais recentes.",
          "Comparar o endereço gravado nas linhas antigas com o novo.",
          "Indicar a solução: gravar o endereço uma vez na tabela CLIENTE e referenciá-lo por chave."
        ],
        "resultado": "O mesmo cliente passa a exibir dois endereços, porque a atualização parcial deixou linhas antigas com o valor antigo; na terceira forma normal o endereço é gravado uma única vez.",
        "justificativa": "A inconsistência nasce da redundância: o mesmo fato fica em vários lugares e cada atualização pode atingir um subconjunto deles, produzindo contradições dentro do próprio banco de dados.",
        "errosFrequentes": [
          "Considerar que o problema é de desempenho e não de consistência",
          "Atualizar todas as linhas manualmente e não normalizar o esquema",
          "Confundir a anomalia de atualização com a anomalia de inserção"
        ],
        "variacao": "Se a tabela for normalizada e a consulta precisar do endereço, a junção entre PEDIDO e CLIENTE fornecerá o valor único, mantendo a consistência mesmo com muitos pedidos."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Normalizar significa transformar os valores das colunas para a faixa de zero a um.' Julgar a afirmação e apresentar a leitura correta.",
        "dados": "Enunciado que usa o termo normalização sem contexto;.schema com tabela de vendas; itens de banco de dados e de estatística no mesmo edital.",
        "conceitos": [
          "Normalização relacional",
          "Escalonamento estatístico",
          "Leitura do enunciado"
        ],
        "estrategia": "Identificar qual sentido do termo o enunciado aborda e demonstrar que a descrição apresentada pertence a outra área e que, no contexto de banco, a operação é sobre a estrutura.",
        "execucao": [
          "Reconhecer que a faixa de zero a um corresponde ao redimensionamento min-max.",
          "Relacionar o min-max ao domínio de valores e escala, e não ao desenho de tabelas.",
          "Explicar a normalização relacional como decomposição de tabelas por dependências.",
          "Concluir que a afirmação descreve outro conceito e, por isso, está incorreta."
        ],
        "resultado": "Errado: a descrição corresponde à normalização estatística; no banco de dados, normalizar é reorganizar o esquema para eliminar redundância, sem alterar valores.",
        "justificativa": "Os dois sentidos do termo atuam em objetos distintos: um sobre a escala dos valores de uma variável, outro sobre a organização dos fatos em tabelas, de modo que a afirmação confunde duas técnicas de domínios diferentes.",
        "errosFrequentes": [
          "Aceitar a equivalência entre min-max e normalização de banco",
          "Ler normalização como sinônimo de limpeza de dados",
          "Não observar as pistas do enunciado, como menção a tabelas e chaves"
        ],
        "variacao": "Se o enunciado citar formas normais e dependência parcial, o sentido é inequivocamente relacional; se citar média e desvio-padrão, o sentido é estatístico."
      }
    ]
  }
};
