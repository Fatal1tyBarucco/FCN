const enriParcialM8U3P3 = {
  "m8-u3-t5-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Correlação e causalidade são noções vizinhas com consequências opostas: a primeira descreve associação entre variáveis, e a segunda exige desenho experimental e controle de confundidores. A prova cobra a distinção em itens que apresentam duas séries covariando e pedem a conclusão legítima.",
      "preRequisitos": [
        "Coeficiente de correlação como medida de associação, com valores entre menos um e um.",
        "Leitura de gráfico de dispersão e noção de variável numérica.",
        "Diferença entre estudo observacional e estudo experimental."
      ],
      "objetivosObservaveis": [
        "Calcular e interpretar coeficientes de correlação de Pearson e de Spearman.",
        "Distinguir associação de causalidade em conclusões apresentadas.",
        "Identificar variáveis de confusão em uma relação observada.",
        "Reconhecer que coeficiente próximo de zero não descarta relação não linear."
      ],
      "competencias": [
        "Analisar pares de variáveis quantitativas e escolher o coeficiente adequado.",
        "Avaliar a legitimidade de conclusões causais em relatórios e painéis.",
        "Enumerar explicações alternativas para uma correlação observada."
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m8-u2-t4-s1 (Dispersão: associação, correlação e outliers) — a inspeção gráfica da nuvem de pontos.",
        "m8-u3-t2-s1 (Amplitude, variância, desvio padrão e coeficiente de variação) — a dispersão entra no coeficiente de correlação.",
        "m8-u3-t4-s1 (Formas de distribuição, assimetria e tratamento de extremos) — dados extremos alteram o coeficiente.",
        "m8-u3-t6-s1 (Métodos de amostragem, erro de amostragem e vieses) — a amostra sustenta a associação.",
        "m8-u5-t3-s1 (Incerteza, limitações e transparência) — declarar os limites da conclusão."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre correlação e causalidade é recorrente em itens que descrevem séries covariando e em questões sobre interpretação de coeficientes. A classificação é qualitativa e configura estimativa pedagógica, não medição de frequência em provas."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno entende que correlação mede associação: dois conjuntos de números variam juntos e o coeficiente resume o quanto essa variação é conjunta. Percebe que a descrição vale para a amostra analisada e não explica por que a variação ocorre.",
      "intermediario": "Nível intermediário: o aluno calcula e interpreta os coeficientes, com Pearson para associação linear, entre menos um e um, e Spearman para relações monotônicas por postos. Associa o sinal à direção da variação e o módulo à força, e sabe que coeficiente alto não é causa.",
      "avancado": "Nível avançado: o aluno identifica confundidores e conclusões indevidas, como a terceira variável que influência as duas observadas, a extrapolação fora do domínio dos dados e a leitura causal de uma associação observacional. Propõe explicações alternativas antes de aceitar a conclusão.",
      "especialista": "Nível especialista: o aluno audita uma análise quanto à causalidade: verifica temporalidade, controle de confundidores, desenho de coleta e limites de generalização, e emite parecer sobre quais afirmações o resultado sustenta e quais extrapolam a evidência disponível."
    },
    "comparacoes": [
      {
        "tema": "Correlação de Pearson x correlação de Spearman",
        "a": {
          "rotulo": "Pearson",
          "texto": "Mede associação linear entre duas variáveis numéricas e varia de menos um a um. Sensível a valores extremos e pressupõe relação aproximadamente proporcional entre as variações."
        },
        "b": {
          "rotulo": "Spearman",
          "texto": "Mede associação monotônica por postos: correlaciona as posições ordenadas, e não os valores. Adequada a relações curvas de sentido único e resistente a extremos."
        },
        "diferencaGabarito": "Se a relação é linear, os dois coeficientes convergem; se é monotônica mas curva, Pearson subestima e Spearman descreve corretamente. A escolha errada produz conclusão de associação fraca onde há associação forte de outra forma."
      },
      {
        "tema": "Correlação x causalidade",
        "a": {
          "rotulo": "Correlação",
          "texto": "Descrição do quanto duas variáveis variam juntas em um conjunto de dados. Obtém-se por observação e sustenta apenas frases sobre a amostra analisada."
        },
        "b": {
          "rotulo": "Causalidade",
          "texto": "Relação de causa e efeito, que exige temporalidade, controle de confundidores e desenho experimental ou quase experimental que isole o fator estudado."
        },
        "diferencaGabarito": "A correlação é condição com frequência necessária e nunca suficiente: duas variáveis podem covariar por confundimento, por relação reversa ou por coincidência amostral, e nenhuma dessas estruturas sustenta a afirmação de que uma causa a outra."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Correlação alta entre duas variáveis prova que uma causa a outra.'",
        "porqueErrada": "A covariação observada é compatível com várias estruturas: confundimento por uma terceira variável, causalidade reversa ou coincidência na amostra. Nenhuma delas é afastada pelo valor do coeficiente.",
        "versaoCorreta": "Errado: correlação alta sustenta associação na amostra; a causalidade exige temporalidade, controle de confundidores e desenho que isole o fator."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O coeficiente de Pearson serve para qualquer tipo de relação entre variáveis.'",
        "porqueErrada": "O coeficiente de Pearson capta apenas o componente linear da associação. Em relação em U ou curva monotônica, o valor próximo de zero convive com dependência forte entre as variáveis.",
        "versaoCorreta": "Errado: use Spearman para relações monotônicas não lineares e inspecione o gráfico de dispersão antes de concluir pela ausência de associação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Coeficiente de correlação zero indica que as variáveis são independentes.'",
        "porqueErrada": "O zero descarta apenas associação linear. Relações em U, em V ou formadas por grupos misturados têm coeficiente nulo e dependência evidente entre as variáveis.",
        "versaoCorreta": "Errado: coeficiente próximo de zero afasta associação linear; independência exige verificação adicional, com inspeção visual e teste adequado ao tipo de relação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Correlação de Pearson: associação linear entre duas variáveis numéricas, de menos um a um.",
        "Correlação de Spearman: associação monotônica medida por postos, útil em relações curvas.",
        "Causalidade: relação de causa e efeito, que exige desenho, temporalidade e controle de confundidores.",
        "Variável de confusão: terceira variável que influência as duas observadas e produz associação sem causa direta.",
        "Conclusão indevida: afirmação que extrapola a evidência, como inferir causa de associação."
      ],
      "regras": [
        "O sinal do coeficiente indica a direção da variação conjunta e o módulo indica a força da associação.",
        "Toda afirmação causal exige evidência além do coeficiente: temporalidade, controle e desenho de estudo."
      ],
      "comparacoes": [
        "Pearson descreve o componente linear; Spearman descreve a ordem e por isso sobrevive a relações curvas."
      ],
      "fluxos": [
        "Calcular o coeficiente → inspecionar a dispersão → levantar explicações alternativas → verificar confundidores → delimitar a conclusão sustentada."
      ],
      "excecoes": [
        "Coeficiente próximo de zero não autoriza a conclusão de independência: relações não lineares e grupos misturados produzem valores baixos com dependência real."
      ],
      "palavrasChave": [
        "correlação",
        "Pearson",
        "Spearman",
        "causalidade",
        "confundidor",
        "associação"
      ],
      "checklist": [
        "O coeficiente calculado corresponde ao tipo de relação presente nos dados?",
        "O gráfico de dispersão foi inspecionado antes de qualquer conclusão sobre independência?",
        "As explicações alternativas, inclusive confundidores e relação reversa, foram enumeradas?",
        "A conclusão está limitada ao que a amostra e o desenho de coleta sustentam?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma amostra de quarenta estudantes apresenta coeficiente de correlação de 0,90 entre horas de estudo e pontuação. Quais frases os dados sustentam e qual não sustentam?",
        "dados": "Amostra de quarenta estudantes; coeficiente de Pearson igual a 0,90 entre horas semanais de estudo e pontuação de zero a cem; média de doze horas de estudo e sessenta e dois pontos; nenhum controle de outras variáveis no estudo.",
        "conceitos": [
          "Coeficiente de correlação como medida de associação",
          "Diferença entre associação e causalidade"
        ],
        "estrategia": "O coeficiente descreve a força e o sentido da variação conjunta na amostra. As frases permitidas falam do que foi medido; a frase proibida transforma descrição em causa. Basta testar cada enunciado contra o que um coeficiente pode afirmar.",
        "execucao": [
          "1) Interpretar o coeficiente: valor positivo e próximo de um indica associação linear forte na amostra.",
          "2) Formular as frases sustentadas em termos de associação, sem mencionar causa.",
          "3) Testar a frase causal: cada hora adicional como causa exige controle de confundidores inexistente.",
          "4) Delimitar a conclusão aos quarenta estudantes observados no estudo."
        ],
        "resultado": "Sustentam-se as frases sobre associação positiva forte na amostra e a coincidência de sentido entre horas e pontuação. Não se sustenta a frase de que cada hora adicional cause determinado aumento de nota, pela ausência de controle de confundidores e de desenho que isole o fator.",
        "justificativa": "Um coeficiente resume variação conjunta, não mecanismo. Como o estudo é observacional e não controla disciplina, renda ou sono, a estrutura causal permanece em aberto: a associação é evidência, e a causalidade seria conclusão sem suporte nos dados.",
        "errosFrequentes": [
          "Ler o valor de 0,90 como prova de causa e converter a associação em recomendação causal sem novo estudo.",
          "Estender a conclusão a todos os estudantes, quando a amostra tem quarenta casos e critérios próprios de seleção."
        ],
        "variacao": "Se o coeficiente passar a menos 0,80 entre horas de lazer e pontuação, a leitura inverte o sentido, mas o limite permanece: só se afirma associação negativa na amostra, não causa."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um painel municipal mostra que os municípios com mais equipes de saúde apresentam mais casos registrados de determinada doença. A análise sustenta a conclusão de que equipes aumentam a doença?",
        "dados": "Painel com trinta municípios; coeficiente de 0,72 entre número de equipes de saúde e casos registrados por cem mil habitantes; recorte de um ano; nenhuma informação sobre capacidade de detecção nem sobre estrutura de vigilância.",
        "conceitos": [
          "Variável de confusão",
          "Relação reversa e viés de detecção"
        ],
        "estrategia": "Antes de aceitar a direção proposta, procurar a variável que influência os dois lados. Municípios com mais equipes têm mais vigilância e, portanto, identificam e registram mais casos: é a capacidade de detecção que move as duas grandezas.",
        "execucao": [
          "1) Calcular e interpretar a associação: 0,72 indica covariação positiva entre as séries.",
          "2) Levantar explicações alternativas: confundimento por vigilância, relação reversa ou heterogeneidade entre municípios.",
          "3) Testar a capacidade de detecção: onde há mais equipes, mais diagnósticos são feitos e registrados.",
          "4) Concluir que a direção proposta inverte relação de medição e buscar dado de ocorrência real."
        ],
        "resultado": "A conclusão causal não se sustenta: a associação é explicada pela capacidade de detecção, terceira variável que influência tanto o número de equipes quanto o de registros. Afirmar que equipes aumentam a doença confunde medição com ocorrência.",
        "justificativa": "O gabarito decorre da estrutura do problema: casos registrados dependem de haver quem registre. Como o painel mede registros e não ocorrências, a covariação é compatível com vigilância maior, e a direção causal proposta fica sem evidência que a sustente.",
        "errosFrequentes": [
          "Tratar casos registrados como casos ocorridos e ignorar que o registro depende da estrutura de vigilância.",
          "Aceitar a direção causal indicada pelo painel sem procurar a variável que move os dois lados da relação."
        ],
        "variacao": "Se a variável analisada passar de casos registrados para óbitos confirmados, com método diagnóstico comum a todos os municípios, a crítica de detecção perde força e a análise pode ser reavaliada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Coeficiente de correlação igual a zero significa que as duas variáveis não têm nenhuma relação.' Avalie a afirmação.",
        "dados": "Duas amostras: na primeira, sessenta pontos com valores de x entre menos três e três e y igual a x ao quadrado mais ruído pequeno, coeficiente de Pearson igual a 0,02; na segunda, x de zero a dez e y em dentes de serra, coeficiente também próximo de zero.",
        "conceitos": [
          "Limite do coeficiente linear",
          "Inspeção gráfica antes da conclusão"
        ],
        "estrategia": "O coeficiente de Pearson responde a uma pergunta estreita: há associação linear? A resposta negativa não cobre as demais formas de dependência. A verificação correta é olhar a dispersão antes de pronunciar independência.",
        "execucao": [
          "1) Calcular os coeficientes das duas amostras: ambos próximos de zero.",
          "2) Lançar os pontos em gráfico de dispersão e inspecionar a forma da nuvem.",
          "3) Identificar a relação em U na primeira amostra e o padrão oscilatório na segunda.",
          "4) Concluir que há dependência estruturada, e não independência entre as variáveis."
        ],
        "resultado": "A afirmação é errada: coeficiente próximo de zero descarta apenas associação linear. A primeira amostra tem relação em U, e a segunda, relação oscilatória por grupos; ambas exibem dependência real com coeficiente nulo.",
        "justificativa": "A leitura ingênua generaliza um resultado sobre o componente linear para todos os tipos de relação. Como o coeficiente é insensível a curvas simétricas e a grupos misturados, só o exame gráfico, eventualmente com teste adequado, sustenta a conclusão de independência.",
        "errosFrequentes": [
          "Concluir independência a partir do coeficiente e dispensar o gráfico de dispersão.",
          "Atribuir o coeficiente baixo a erro de medição, quando ele decorre da forma da relação entre as variáveis."
        ],
        "variacao": "Se a primeira amostra for convertida em postos e recalculada com Spearman, o coeficiente permanece próximo de zero, o que confirma que a relação é não monotônica e exige outra modelagem."
      }
    ]
  },
  "m8-u3-t6-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A qualidade de uma conclusão depende do modo como a amostra foi obtida, e não do tamanho que ela alcança. A prova cobra a distinção entre método de amostragem, erro amostral e viés: aumentar a amostra reduz o erro do acaso, mas não corrige um desenho que seleciona mal.",
      "preRequisitos": [
        "Noções de população, amostra, estatística e parâmetro populacional.",
        "Cálculo de proporções e leitura introdutória de intervalo de confiança.",
        "Distinção entre dados de pesquisa e dados de censo ou de registro administrativo."
      ],
      "objetivosObservaveis": [
        "Distinguir amostragem aleatória simples, estratificada, sistemática e por conglomerados.",
        "Explicar a diferença entre erro de amostragem e viés.",
        "Identificar vieses de seleção, de não resposta, de cobertura e de resposta em um estudo.",
        "Dimensionar o tamanho de amostra para proporção com parâmetros declarados."
      ],
      "competencias": [
        "Escolher o método de amostragem coerente com o objetivo e com a estrutura da população.",
        "Avaliar a qualidade de uma amostra e delimitar as conclusões que ela sustenta.",
        "Comunicar limitações do estudo com taxa de resposta e margem declaradas."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m8-u3-t5-s1 (Correlação, causalidade e conclusões indevidas) — a amostra sustenta qualquer associação observada.",
        "m8-u3-t1-s1 (Média, mediana e moda — quando usar cada uma) — a estatística da amostra estima o parâmetro.",
        "m8-u3-t2-s1 (Amplitude, variância, desvio padrão e coeficiente de variação) — a dispersão amostral orienta o tamanho.",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — qualidade do dado que entra na análise.",
        "m8-u5-t3-s1 (Incerteza, limitações e transparência) — declarar margem e limites do estudo."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Itens apresentam relatos de pesquisa e pedem a classificação do método, do erro ou do viés, além de cálculos de dimensionamento de amostra para proporção. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno separa população de amostra e entende por que se amostra: analisar todos os elementos é caro ou impossível. Reconhece que a amostra só fala pela população quando o sorteio dá chance a cada elemento de ser selecionado.",
      "intermediario": "Nível intermediário: o aluno distingue os quatro métodos. Na aleatória simples cada elemento tem a mesma chance; na estratificada amostra-se dentro de cada estrato; na sistemática toma-se um elemento a cada intervalo; e na de conglomerados sorteiam-se grupos e se estudam por inteiro.",
      "avancado": "Nível avançado: o aluno identifica vieses e seu impacto, de seleção, de não resposta, de cobertura e de resposta. Sabe que o viés é sistemático, não desaparece com o aumento da amostra e só se corrige no desenho da coleta.",
      "especialista": "Nível especialista: o aluno audita um estudo quanto à amostragem: confere o desenho declarado, a taxa de resposta, a margem e a abrangência, e emite parecer sobre quais conclusões o estudo sustenta e quais permanecem restritas à amostra obtida."
    },
    "comparacoes": [
      {
        "tema": "Erro de amostragem x viés",
        "a": {
          "rotulo": "Erro de amostragem",
          "texto": "Diferença entre a estatística da amostra e o parâmetro da população, causada pelo acaso do sorteio. Decresce com o aumento do tamanho da amostra e é quantificável por margem declarada."
        },
        "b": {
          "rotulo": "Viés",
          "texto": "Desvio sistemático introduzido pelo desenho da coleta, de seleção, de não resposta, de cobertura ou de resposta. Mantém direção e magnitude aproximadamente estáveis e não desaparece com mais dados."
        },
        "diferencaGabarito": "Ampliar a amostra reduz o erro e estreita a margem, mas deixa o viés intacto: uma amostra enviesada de dez mil casos continua enviesada. A correção do viés exige mudar o desenho, e não aumentar n."
      },
      {
        "tema": "Amostragem aleatória simples x amostragem estratificada",
        "a": {
          "rotulo": "Aleatória simples",
          "texto": "Cada elemento da população tem a mesma probabilidade de seleção e qualquer combinação possível pode sair. Simples de executar, mas pode sub-representar subgrupos pequenos por acaso."
        },
        "b": {
          "rotulo": "Estratificada",
          "texto": "A população é dividida em estratos definidos previamente e cada estrato é amostrado, de modo proporcional ou com ponderação. Garante a presença dos subgrupos considerados relevantes."
        },
        "diferencaGabarito": "Na aleatória simples a representação dos subgrupos fica sujeita ao acaso; na estratificada ela é assegurada pelo desenho. A estratificada exige conhecer a classificação dos elementos antes do sorteio."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Aumentar o tamanho da amostra elimina o viés do estudo.'",
        "porqueErrada": "O viés é sistemático e decorre do desenho da coleta. Multiplicar observações obtidas pela mesma regra de seleção apenas replica o desvio em escala maior, mantendo a direção do erro.",
        "versaoCorreta": "Errado: ampliar a amostra reduz o erro de amostragem; a correção do viés exige modificar o desenho da coleta."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A amostragem por conveniência é aceitável quando há pouco tempo e poucos recursos.'",
        "porqueErrada": "A conveniência seleciona quem está disponível, e não quem representa a população. Os disponíveis costumam diferir dos demais em interesse e em características, e a conclusão fica restrita a esse grupo.",
        "versaoCorreta": "Errado: use método probabilístico compatível com o prazo e declare a limitação; amostra por conveniência só sustenta afirmações sobre quem respondeu."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Erro de amostragem e erro de medição são a mesma fonte de imprecisão.'",
        "porqueErrada": "São naturezas distintas: o erro de amostragem vem do sorteio e desaparece no censo, enquanto o erro de medição vem do instrumento e permaneceria mesmo com observação completa.",
        "versaoCorreta": "Errado: separe as duas fontes; o dimensionamento trata o erro do sorteio, e a validação do instrumento trata o erro de medição."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Amostragem aleatória simples: cada elemento tem probabilidade igual de seleção.",
        "Amostragem estratificada: divisão em estratos e amostragem dentro de cada um.",
        "Amostragem sistemática: seleção de um elemento a cada intervalo fixo.",
        "Amostragem por conglomerados: sorteio de grupos e estudo de todos os elementos dos grupos sorteados.",
        "Erro de amostragem: desvio do acaso entre estatística e parâmetro; viés: desvio sistemático do desenho."
      ],
      "regras": [
        "Métodos probabilísticos sustentam a generalização; amostras por conveniência sustentam afirmações apenas sobre quem respondeu.",
        "O tamanho da amostra reduz o erro do acaso, e só a mudança de desenho corrige o viés."
      ],
      "comparacoes": [
        "Erro de amostragem é aleatório e decresce com n; viés é sistemático e independe de n."
      ],
      "fluxos": [
        "Definir população e objetivo → escolher método e tamanho → executar a coleta → medir a taxa de resposta → declarar margem e limites."
      ],
      "excecoes": [
        "Em populações homogêneas, a amostragem aleatória simples pode bastar, e a estratificação não acrescenta ganho relevante."
      ],
      "palavrasChave": [
        "amostragem",
        "estratos",
        "conglomerados",
        "erro de amostragem",
        "viés",
        "representatividade"
      ],
      "checklist": [
        "O método declarado é probabilístico e coerente com a estrutura da população?",
        "A taxa de resposta foi medida e os não respondentes foram comparados com os respondentes?",
        "A margem e o nível declarados correspondem ao dimensionamento executado?",
        "As conclusões estão limitadas ao que a amostra efetivamente obtida sustenta?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Dimensionar o tamanho da amostra para estimar uma proporção populacional com nível de confiança de 95%, proporção esperada de 50% e margem de erro de 5 pontos percentuais.",
        "dados": "Nível de confiança de 95%, com valor z igual a 1,96; proporção esperada p igual a 0,50; margem de erro e igual a 0,05; população grande o suficiente para dispensar correção para população finita.",
        "conceitos": [
          "Dimensionamento de amostra para proporção",
          "Arredondamento para cima"
        ],
        "estrategia": "Aplicar a fórmula do tamanho mínimo, com numerador formado por z ao quadrado vezes p vezes um menos p, dividido pelo quadrado da margem, e conferir a aritmética passo a passo antes de converter o resultado em número de indivíduos.",
        "execucao": [
          "1) Organizar os parâmetros: z igual a 1,96, p igual a 0,50 e e igual a 0,05.",
          "2) Calcular o numerador: 1,96 ao quadrado é 3,8416, e o produto por 0,25 resulta em 0,9604.",
          "3) Calcular o denominador: 0,05 ao quadrado é 0,0025.",
          "4) Dividir 0,9604 por 0,0025 e obter 384,16.",
          "5) Arredondar para cima, porque fração de indivíduo não existe: 385 entrevistas."
        ],
        "resultado": "O tamanho mínimo é de 385 indivíduos. Com proporção esperada de 50% e margem de 5 pontos percentuais a 95% de confiança, esse é o valor recorrente em dimensionamentos de proporção.",
        "justificativa": "O gabarito decorre da estrutura da fórmula: o produto de p por um menos p atinge o máximo em 0,50, o que produz o dimensionamento mais conservador possível. Dividir o numerador pelo quadrado da margem e arredondar para cima completa o cálculo sem deixar folga para arredondamento para baixo.",
        "errosFrequentes": [
          "Arredondar para baixo e encerrar com 384 indivíduos, o que deixa a margem ligeiramente acima da declarada.",
          "Esquecer de elevar a margem ao quadrado e dividir por 0,05, obtendo resultado cerca de vinte vezes maior."
        ],
        "variacao": "Se a margem cair para 3 pontos percentuais com os demais parâmetros, o denominador passa a 0,0009 e o tamanho mínimo sobe para 1.068 indivíduos, o que ilustra o efeito quadrático da margem."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma pesquisa por link enviado a mailing obteve 8% de resposta, e 70% dos respondentes aprovaram a política. O que o estudo permite declarar?",
        "dados": "Mailing com 25 mil endereços; 2 mil respostas, correspondentes a 8% de taxa de resposta; 1.400 aprovações entre os respondentes, ou 70%; nenhuma informação sobre os 92% que não responderam.",
        "conceitos": [
          "Viés de seleção e de não resposta",
          "Generalização para a população"
        ],
        "estrategia": "Tratar os 70% como resultado da amostra obtida, e não da população. Como a coleta é por autosseleção e a taxa de resposta é baixa, não há base probabilística para transportar o percentual ao conjunto dos 25 mil destinatários.",
        "execucao": [
          "1) Calcular a taxa de resposta: 2 mil respostas em 25 mil envios resultam em 8%.",
          "2) Classificar o método de coleta: autosseleção por link, sem sorteio probabilístico.",
          "3) Comparar o resultado com a população de destino: os 70% valem para os 2 mil respondentes.",
          "4) Declarar a forma de coleta e a taxa de resposta, limitando a conclusão à amostra obtida."
        ],
        "resultado": "O estudo sustenta que 70% dos 2 mil respondentes aprovaram a política. Afirmar os mesmos 70% para a população exige amostragem probabilística com margem declarada, porque a coleta por link sofre viés de seleção e de não resposta.",
        "justificativa": "O gabarito apoia-se na distinção entre amostra obtida e população alvo: quem clica em pesquisa de mailing tem opinião formada e disposição a responder, e os 92% silenciosos podem diferir. Sem sorteio com probabilidade conhecida, o percentual observado não estima o percentual populacional.",
        "errosFrequentes": [
          "Publicar os 70% como resultado da população sem mencionar a taxa de resposta de 8%.",
          "Tratar o mailing como lista representativa e ignorar que a resposta se deu por autosseleção."
        ],
        "variacao": "Se a taxa de resposta subir para 60% com sorteio aleatório entre os destinatários, a mesma aprovação passa a ter base probabilística e admite margem declarada."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Com dez mil respostas o resultado é representativo, porque o tamanho da amostra elimina o viés.' Avalie a afirmação.",
        "dados": "Pesquisa com 10 mil questionários obtidos em fila de atendimento de uma agência; 65% de aprovação entre os entrevistados; nenhum registro de taxa de resposta nem de comparação entre respondentes e não respondentes.",
        "conceitos": [
          "Erro de amostragem x viés",
          "Representatividade do desenho de coleta"
        ],
        "estrategia": "Separar as duas fontes de imprecisão. O tamanho reduz a flutuação do acaso, mas o desenho por conveniência em fila de agência seleciona quem frequenta o serviço, de modo que o desvio permanece sistemático em qualquer tamanho.",
        "execucao": [
          "1) Identificar o método de coleta: entrevistas em fila de atendimento, sem sorteio.",
          "2) Verificar o que o tamanho reduz: a variação do acaso, e não o desvio de seleção.",
          "3) Testar a direção do desvio: quem está na fila tem relação direta com o serviço avaliado.",
          "4) Concluir que a amostra permanece enviesada e delimitar a conclusão ao grupo entrevistado."
        ],
        "resultado": "A afirmação é errada: dez mil respostas estreitam o erro de amostragem, não o viés. Como a coleta em fila de agência seleciona um grupo específico, o desvio é sistemático e só se corrige mudando o desenho da coleta.",
        "justificativa": "A leitura ingênua confunde precisão com representatividade: uma amostra grande e mal desenhada produz resultado preciso sobre o grupo errado. O tamanho atua sobre a variação do acaso, enquanto o viés de seleção é propriedade do desenho e permanece inalterado.",
        "errosFrequentes": [
          "Cravar representatividade pelo tamanho e ignorar o método de coleta declarado.",
          "Confundir erro de medição do questionário com viés de seleção da amostra."
        ],
        "variacao": "Se as mesmas dez mil entrevistas saírem de sorteio entre usuários cadastrados, com taxa de resposta declarada, o desenho passa a ser probabilístico e a crítica de seleção perde objeto."
      }
    ]
  }
};
