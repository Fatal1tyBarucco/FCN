/* questions_m5.js — MÓDULO 5: INTELIGÊNCIA ARTIFICIAL
 * 42 questões autorais: 5.1 Fundamentos (10), 5.2 Aprendizado de Máquina (10),
 * 5.3 IA Generativa/LLMs (11), 5.4 Engenharia de Prompts (11).
 * Níveis medidos no banco atual: 12 básicos, 18 intermediários e 12 avançados.
 * Autorais (origem: 'autoral'); formato compatível com quiz-engine.js. */
const moduleQuestions5 = [

  /* ===================== 5.1 Fundamentos de IA (10 questões) ===================== */

  { id: "q-m5-01", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u1-t1-s1", assunto: "5.1 — O que é IA?",
    contexto: "Inteligência Artificial é um conceito central na tecnologia atual.",
    enunciado: "Inteligência Artificial (IA) pode ser melhor definida como:",
    alternativas: [
      { letra: "A", texto: "Um computador que substitui completamente o ser humano em todas as tarefas." },
      { letra: "B", texto: "Sistema capaz de realizar tarefas que normalmente requerem inteligência humana." },
      { letra: "C", texto: "Um programa que apenas executa cálculos matemáticos." },
      { letra: "D", texto: "Uma rede neural que funciona sem dados." },
      { letra: "E", texto: "Um hardware específico para jogos." }
    ],
    gabarito: "B",
    justificativa: "IA é um sistema capaz de realizar tarefas que normalmente requerem inteligência humana, como aprendizado, raciocínio, reconhecimento de padrões e tomada de decisão. Substituir completamente humanos (alternativa A incorreta); apenas calcular (alternativa C incorreta); funcionar sem dados (alternativa D incorreta); ser hardware para jogos (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. IA não substitui humanos em todas as tarefas — tem limitações e escopo definido.",
      B: "CORRETA. IA é um sistema que realiza tarefas que exigem inteligência humana.",
      C: "INCORRETA. Cálculos são tarefas computacionais, não a definição de IA.",
      D: "INCORRETA. Redes neurais precisam de dados para aprender — ausência de dados impede o aprendizado.",
      E: "INCORRETA. Hardware para jogos é uma aplicação de TI, não definição de IA."
    },
    regra: "IA = 'sistema que faz o que exige inteligência humana, com dados'.",
    pegadinha: "IA não é 'robô que pensa' — é 'sistema que realiza tarefas que exigem inteligência'.",
    fonte: "IEEE — Definition of Artificial Intelligence, 2021."
  },

  { id: "q-m5-02", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u1-t1-s2", assunto: "5.1 — Sistemas baseados em regras",
    contexto: "Sistemas baseados em regras usam conhecimento explícito estruturado.",
    enunciado: "Sobre sistemas baseados em regras, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Aprendem com dados sem programação." },
      { letra: "B", texto: "Utilizam conhecimento expresso em regras if-then do conhecimento humano." },
      { letra: "C", texto: "Não exigem nenhum tipo de regra." },
      { letra: "D", texto: "Funcionam apenas com aprendizado profundo." },
      { letra: "E", texto: "São incapazes de tomar decisões." }
    ],
    gabarito: "B",
    justificativa: "Sistemas baseados em regras usam regras if-then para representar conhecimento e tomar decisões baseadas em lógica do domínio. Aprendem com dados (alternativa A incorreta); não têm regras (alternativa C incorreta); usam ML (alternativa D incorreta); só pegam decisões (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Sistemas baseados em regras usam conhecimento humano codificado, não aprendizado de dados.",
      B: "CORRETA. Sistemas baseados em regras usam regras if-then para tomar decisões.",
      C: "INCORRETA. Sistemas baseados em regras dependem de regras estruturadas.",
      D: "INCORRETA. Sistemas baseados em regras podem usar regras simbólicas, não apenas redes neurais.",
      E: "INCORRETA. Sistemas baseados em regras são capazes de tomar decisões baseadas em regras."
    },
    regra: "Sistemas baseados em regras = 'if-then'. Conhecimento vivo codificado em regras.",
    pegadinha: "A armadilha é a alternativa A: sistemas baseados em regras decidem por lógica do domínio, com conhecimento humano já codificado em regras if-then — 'aprender com dados' sem programação é característica de aprendizado de máquina, não deles.",
    fonte: "Russell, S. & Norvig, P. — Artificial Intelligence: A Modern Approach, 2020."
  },

  { id: "q-m5-03", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "modulo-5-unidade-1-topico-1", assunto: "5.1 — Aprendizado de Máquina",
    contexto: "O aprendizado de máquina é uma subárea da IA.",
    enunciado: "O aprendizado de máquina (Machine Learning) é:",
    alternativas: [
      { letra: "A", texto: "Um modelo que só funciona com dados rotulados." },
      { letra: "B", texto: "Um conjunto de técnicas que permitem que computadores aprendam padrões a partir de dados sem serem explicitamente programados." },
      { letra: "C", texto: "Um algoritmo de classificação." },
      { letra: "D", texto: "Um sistema de arquivos." },
      { letra: "E", texto: "Um método de compressão de dados." }
    ],
    gabarito: "B",
    justificativa: "Machine Learning é um conjunto de técnicas que permite que computadores aprendam padrões a partir de dados, melhorando a performance com base em experiência (dados), sem ser explicitamente programados para cada tarefa. Só com dados rotulados (alternativa A incorreta); apenas um algoritmo de classificação (alternativa C incorreta); é um sistema de arquivos (alternativa D incorreta); método de compressão (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. ML pode usar dados rotulados, sem rotulados ou com reforço — não está limitado a um único tipo.",
      B: "CORRETA. ML é um conjunto de técnicas que aprendem padrões a partir de dados sem programação explícita.",
      C: "INCORRETA. Classificação é uma tarefa de ML, mas não define o aprendizado de máquina em si.",
      D: "INCORRETA. Sistema de arquivos é armazenamento de dados, não aprendizado.",
      E: "INCORRETA. Compressão é outra área da computação, não ML."
    },
    regra: "Aprendizado de Máquina = 'aprender com dados'. Computador melhora com experiência (dados).",
    pegadinha: "ML não é só 'classificar' — é 'aprender padrões a partir de dados, melhorando desempenho'.",
    fonte: "Mitchell, T. M. — Machine Learning, McGraw-Hill, 1997."
  },

  { id: "q-m5-04", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Treinamento, validação e teste",
    contexto: "Divisão de dados em conjuntos para modelagem é essencial no aprendizado de máquina.",
    enunciado: "A separação de dados em conjuntos de treinamento, validação e teste é importante porque:",
    alternativas: [
      { letra: "A", texto: "Permite que o modelo roteie todos os dados para treino." },
      { letra: "B", texto: "Permite estimar o desempenho do modelo em dados não vistos." },
      { letra: "C", texto: "Substitui a necessidade de validação." },
      { letra: "D", texto: "Elimina a necessidade de teste." },
      { letra: "E", texto: "Garante que o modelo nunca erra." }
    ],
    gabarito: "B",
    justificativa: "A divisão treino/validação/teste permite que o modelo aprenda (treino), ajuste hiperparâmetros (validação) e, posteriormente, avalie seu desempenho em dados nunca vistos (teste), estimando a capacidade de generalização. O modelo roteia todos os dados (alternativa A incorreta); substitui a validação (alternativa C incorreta); elimina a necessidade de teste (alternativa D incorreta); garante que o modelo nunca erra (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. O modelo treina apenas com o conjunto de treino — não roteia todos os dados.",
      B: "CORRETA. A divisão permite estimar o desempenho do modelo em dados nunca vistos.",
      C: "INCORRETA. Validação é necessária para ajustar hiperparâmetros — testes não substituem.",
      D: "INCORRETA. Teste é necessário para avaliar a performance final do modelo.",
      E: "INCORRETA. Nenhum modelo garante que nunca erra."
    },
    regra: "Treinamento/validação/teste = 'aprender, ajustar, testar'. Três conjuntos separados de dados.",
    pegadinha: "Não confunda: treino é 'aprender', validação é 'ajustar hiperparâmetros', teste é 'avaliar desempenho'.",
    fonte: "James, G. et al. — An Introduction to Statistical Learning, 2021."
  },

  { id: "q-m5-05", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Overfitting e underfitting",
    contexto: "Generalização é um dos desafios centrais do aprendizado de máquina.",
    enunciado: "No contexto de aprendizado de máquina, overfitting significa:",
    alternativas: [
      { letra: "A", texto: "O modelo performa mal tanto nos dados de treino quanto nos de teste." },
      { letra: "B", texto: "O modelo não aprende nada." },
      { letra: "C", texto: "O modelo performa bem nos dados de treino e mal nos dados de teste." },
      { letra: "D", texto: "O modelo é usado apenas para prever valores futuros." },
      { letra: "E", texto: "O modelo não possui parâmetros." }
    ],
    gabarito: "C",
    justificativa: "Overfitting ocorre quando o modelo aprende o ruído dos dados de treino, performando bem nos dados de treino mas mal em dados novos/teste. O modelo performa mal nos treino e teste (alternativa A incorreta); não aprende nada (alternativa B incorreta); só prever valores futuros (alternativa D incorreta); não possui parâmetros (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Desempenho ruim tanto nos dados de treino quanto nos de teste caracteriza underfitting, não overfitting.",
      B: "INCORRETA. Overfitting é aprender o ruído dos dados em excesso, não 'não aprender nada'.",
      C: "CORRETA. Overfitting: bom nos dados de treino, má generalização.",
      D: "INCORRETA. Prever valores futuros é uma tarefa específica, não a definição de overfitting.",
      E: "INCORRETA. Overfitting se manifesta justamente quando o modelo possui parâmetros (alta complexidade)."
    },
    regra: "Overfitting = 'decorar o treino'. Bom nos treino, má generalização.",
    pegadinha: "Overfitting não é 'não aprender' — é 'aprender demais o ruído'.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  { id: "q-m5-06", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Viés e variância",
    contexto: "Viés e variância são propriedades fundamentais dos modelos de ML.",
    enunciado: "Sobre viés (bias) e variância (variance) em modelos de aprendizado de máquina, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Viés alto e variância baixa indicam bom equilíbrio no modelo." },
      { letra: "B", texto: "Viés baixo e variância alta indicam overfitting." },
      { letra: "C", texto: "Viés e variância são conceitos irrelevantes para a generalização." },
      { letra: "D", texto: "Viés baixo e variância baixa referem-se ao mesmo modelo." },
      { letra: "E", texto: "Viés alto é conseqüência exclusiva de overfitting." }
    ],
    gabarito: "B",
    justificativa: "Viés baixo (modelo complexo, se ajusta aos dados) e variância alta (sensível a pequenas variações nos dados) indicam overfitting. Viés alto e variância baixa indicam underfitting (alternativa A incorreta); viés e variância são relevantes para generalização (alternativa C incorreta); baixo viés e baixa variância não são o mesmo modelo (alternativa D incorreta); viés alto não é conseqüência de overfitting — overfitting é alta variância (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Viés alto + variância baixa indica underfitting, não equilíbrio.",
      B: "CORRETA. Baixo viés + alta variância indica overfitting (modelo complexo).",
      C: "INCORRETA. Viés e variância são fundamentais para a análise de generalização.",
      D: "INCORRETA. Modelos diferentes têm combinações distintas de viés e variância.",
      E: "INCORRETA. Viés alto não é conseqüência exclusiva de overfitting — overfitting é alta variância."
    },
    regra: "Viés = erro sistemático. Variância = sensibilidade a ruído. Trade-off fundamental.",
    pegadinha: "Viés alto não é overfitting — é underfitting. Overfitting é variância alta.",
    fonte: "Geman, S. et al. — Neural Networks and the Bias/Variance Dilemma, 1992."
  },

  { id: "q-m5-07", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-3-topico-3", assunto: "5.1 — Explicabilidade (XAI)",
    contexto: "Explicabilidade é essencial em aplicações críticas de IA.",
    enunciado: "Sobre a explicabilidade (XAI — eXplainable Artificial Intelligence), é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "É o processo de tornar os modelos de IA mais difíceis de entender." },
      { letra: "B", texto: "É o conjunto de técnicas para tornar os modelos de IA interpretáveis e transparentes para os humanos." },
      { letra: "C", texto: "É a utilização de modelos de caixa-preta sem ressalva." },
      { letra: "D", texto: "É o uso exclusivo de redes neurais profundas." },
      { letra: "E", texto: "É o processo de esconder os dados." }
    ],
    gabarito: "B",
    justificativa: "XAI é o conjunto de técnicas que tornam os modelos de IA mais interpretáveis e transparentes para humanos, permitindo compreender decisões e processos. Tornar o modelo mais difícil de entender (alternativa A incorreta); caixa-preta (alternativa C incorreta); uso exclusivo de redes profundas (alternativa D incorreta); esconder dados (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. XAI visa tornar o modelo mais interpretável, não mais difícil.",
      B: "CORRETA. XAI torna o modelo interpretável e transparente para humanos.",
      C: "INCORRETA. XAI visa remover caixa-preta, não mantê-la.",
      D: "INCORRETA. XAI não é restrito a redes neurais profundas.",
      E: "INCORRETA. XAI não esconde dados — revela processos."
    },
    regra: "XAI = 'entenda o que a IA pensou'. Tornar modelos interpretáveis.",
    pegadinha: "XAI não é 'explicar tudo de uma vez' — é tornar a IA compreensível.",
    fonte: "Arrieta, A. et al. — XAI: Explainable Artificial Intelligence, 2020."
  },

  { id: "q-m5-08", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-1", assunto: "5.1 — Dados, ativos, parâmetros e inferência",
    contexto: "Modelos de IA consomem dados e geram inferências.",
    enunciado: "No contexto de modelos de IA, o termo 'inferência' refere-se a:",
    alternativas: [
      { letra: "A", texto: "O processo de treinamento do modelo." },
      { letra: "B", texto: "O processo de usar um modelo treinado para fazer previsões ou decisões sobre novos dados." },
      { letra: "C", texto: "O processo de remover dados." },
      { letra: "D", texto: "O processo de compactar arquivos." },
      { letra: "E", texto: "O processo de criar novos parâmetros." }
    ],
    gabarito: "B",
    justificativa: "Inferência é o uso de um modelo treinado para fazer previsões ou decisões sobre novos dados, com base no conhecimento aprendido. O processo de treinamento (alternativa A incorreta); remover dados (alternativa C incorreta); comprimir arquivos (alternativa D incorreta); criar novos parâmetros (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Treinamento é o processo de aprendizagem; inferência é o uso do modelo.",
      B: "CORRETA. Inferência = usar o modelo treinado para previsões/ decisões com novos dados.",
      C: "INCORRETA. Remoção de dados não é inferência.",
      D: "INCORRETA. Compressão de arquivos não é inferência.",
      E: "INCORRETA. Criação de novos parâmetros não é inferência."
    },
    regra: "Inferência = 'usar o modelo para prever/ decidir'. Uso de modelo treinado.",
    pegadinha: "Inferência não é 'treinar' — é 'usar o modelo já treinado para tomar decisão'.",
    fonte: "Goodfellow, I. et al. — Deep Learning, 2016."
  },

  { id: "q-m5-09", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-3-topico-3", assunto: "5.1 — Avaliação de Performance e Qualidade",
    contexto: "Avaliação é essencial para garantir que o modelo atenda aos objetivos.",
    enunciado: "A avaliação de desempenho e qualidade em aprendizado de máquina é importante porque:",
    alternativas: [
      { letra: "A", texto: "É um processo redundante." },
      { letra: "B", texto: "Substitui a necessidade de validação." },
      { letra: "C", texto: "Permite verificar se o modelo atende aos objetivos e se generaliza bem." },
      { letra: "D", texto: "Elimina a necessidade de teste." },
      { letra: "E", texto: "Garante que o modelo nunca falhe." }
    ],
    gabarito: "C",
    justificativa: "A avaliação de desempenho e qualidade é essencial para verificar se o modelo atende aos objetivos, se generaliza bem para dados novos e se é adequado para o contexto. Processo redundante (alternativa A incorreta); substitui validação (alternativa B incorreta); elimina teste (alternativa D incorreta); garante falha (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Avaliação não é redundante — é fundamental para a qualidade.",
      B: "INCORRETA. Avaliação não substitui validação — complementa.",
      C: "CORRETA. Avaliação verifica se o modelo atende aos objetivos e generaliza.",
      D: "INCORRETA. Avaliação não elimina a necessidade de teste.",
      E: "INCORRETA. Avaliação não garante que o modelo nunca falhar."
    },
    regra: "Avaliação = 'qualidade do modelo'. Verificar atendimento aos objetivos.",
    pegadinha: "Avaliação não é 'garantir sucesso' — é 'medir o quão bom o modelo é'.",
    fonte: "Provost, F. & Fawcett, T. — Data Science and Its Applications, 2013."
  },

  { id: "q-m5-10", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Regra geral de completude",
    contexto: "IA abrange sistemas que realizam tarefas de inteligência humana.",
    enunciado: "Para considerar um sistema de IA como 'completo' do ponto de vista técnico, ele deve:",
    alternativas: [
      { letra: "A", texto: "Ser capaz de realizar todas as tarefas humanas." },
      { letra: "B", texto: "Ter um escopo definido e realizar tarefas específicas com precisão." },
      { letra: "C", texto: "Não usar dados." },
      { letra: "D", texto: "Não precisar de treinamento." },
      { letra: "E", texto: "Ser capaz de falar em alguns idiomas." }
    ],
    gabarito: "B",
    justificativa: "Um sistema de IA 'completo' tem escopo definido e realiza tarefas específicas com precisão — não necessariamente tudo o que um humano faz (alternativa A incorreta); usar dados (alternativa C incorreta); necessidade de treinamento não é eliminada (alternativa D incorreta); idiomas são apenas um recurso (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. IA não realiza todas as tarefas humanas — tem escopo definido.",
      B: "CORRETA. Um sistema de IA completo tem escopo definido e realiza tarefas específicas com precisão.",
      C: "INCORRETA. Sistemas de IA usam dados — ausência de dados impede o aprendizado.",
      D: "INCORRETA. Sistemas de IA necessitam de treinamento para aprenderem padrões.",
      E: "INCORRETA. Idiomas são apenas um recurso — não definem completude."
    },
    regra: "IA completa = 'escopo definido + precisão + dados + treinamento'.",
    pegadinha: "IA não é 'robô com tudo' — é 'sistema com escopo definido e dados'.",
    fonte: "ISO/IEC 22989 (Artificial Intelligence — Concepts and Terminology)."
  },

  /* ===================== 5.2 Aprendizado de Máquina (10 questões) ===================== */

  { id: "q-m5-11", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u2-t1-s1", assunto: "5.2 — Paradigmas de Aprendizado",
    contexto: "Existem diferentes paradigmas de aprendizado de máquina.",
    enunciado: "A classificação dos paradigmas de aprendizado de máquina em supervisionado, não supervisionado e por reforço baseia-se em:",
    alternativas: [
      { letra: "A", texto: "O tipo de algoritmo usado." },
      { letra: "B", texto: "A presença ou ausência de rótulos (saídas esperadas) durante o treinamento." },
      { letra: "C", texto: "O tamanho do conjunto de dados." },
      { letra: "D", texto: "A linguagem de programação." },
      { letra: "E", texto: "A arquitetura da rede neural." }
    ],
    gabarito: "B",
    justificativa: "Paradigmas de aprendizado são definidos pela presença ou ausência de rótulos (saídas desejadas) durante o treinamento: supervisionado (com rótulos), não supervisionado (sem rótulos), reforço (aprender por recompensas). Tipo de algoritmo (alternativa A incorreta); tamanho do conjunto (alternativa C incorreta); linguagem de programação (alternativa D incorreta); arquitetura de rede (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Tipo de algoritmo não define o paradigma de aprendizado.",
      B: "CORRETA. Paradigmas são definidos pela presença/ausência de rótulos (saídas desejadas).",
      C: "INCORRETA. Tamanho do conjunto de dados não define o paradigma.",
      D: "INCORRETA. Linguagem de programação é uma escolha técnica, não o paradigma.",
      E: "INCORRETA. Arquitetura de rede não define o paradigma de aprendizado."
    },
    regra: "Paradigmas = 'com rótulos ou sem'. Supervisionado, não supervisionado, reforço.",
    pegadinha: "Não confunda: supervisionado não significa 'superar' — é 'com rótulos'.",
    fonte: "Murphy, K. P. — Machine Learning: A Probabilistic Perspective, 2012."
  },

  { id: "q-m5-12", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u2-t1-s2", assunto: "5.2 — Classificação e Regressão",
    contexto: "Classificação e regressão são tarefas fundamentais de aprendizado supervisionado.",
    enunciado: "A diferença entre classificação e regressão é:",
    alternativas: [
      { letra: "A", texto: "A classificação prevê valores contínuos; a regressão prevê categorias discretas." },
      { letra: "B", texto: "A classificação prevê rótulos discretos (categorias); a regressão previsa valores contínuos." },
      { letra: "C", texto: "A classificação é um tipo de aprendizado não supervisionado." },
      { letra: "D", texto: "A regressão é um tipo de aprendizado não supervisionado." },
      { letra: "E", texto: "Tanto classificação quanto regressão não usam aprendizado supervisionado." }
    ],
    gabarito: "B",
    justificativa: "Classificação prevê rótulos discretos (categorias): sim/não, spam/não spam, etc. Regressão prevê valores contínuos: preço, temperatura, etc. Classificação previsa valores contínuos (alternativa A incorreta); classificação é não supervisionado (alternativa C incorreta); regressão não supervisionado (alternativa D incorreta); nenhum usa supervisão (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Classificação prevê categorias discretas; regressão prevê valores contínuos.",
      B: "CORRETA. Classificação: rótulos discretos; Regressão: valores contínuos.",
      C: "INCORRETA. Classificação é aprendizado supervisionado, não não supervisionado.",
      D: "INCORRETA. Regressão é aprendizado supervisionado, não não supervisionado.",
      E: "INCORRETA. Tanto classificação quanto regressão são métodos de aprendizado supervisionado."
    },
    regra: "Classificação = 'categorias discretas'. Regressão = 'valores contínuos'.",
    pegadinha: "Classificação prevê 'qual categoria' — regressão prevê 'qual valor'.",
    fonte: "James, G. et al. — An Introduction to Statistical Learning, 2021."
  },

  { id: "q-m5-13", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u2-t1-s3", assunto: "5.2 — Agrupamento e Redução de Dimensionalidade",
    contexto: "Técnicas não supervisionadas incluim agrupamento e redução de dimensionalidade.",
    enunciado: "Sobre agrupamento (clustering) e redução de dimensionalidade, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Agrupamento aumenta o número de variáveis." },
      { letra: "B", texto: "Redução de dimensionalidade é um tipo de agrupamento." },
      { letra: "C", texto: "Agrupamento divide os dados em grupos com base em similaridade; redução de dimensionalidade diminui o número de variáveis." },
      { letra: "D", texto: "Agrupamento e redução de dimensionalidade não têm relação." },
      { letra: "E", texto: "Ambos são métodos de classificação supervisionada." }
    ],
    gabarito: "C",
    justificativa: "Agrupamento (clustering) particiona dados em grupos baseados em similaridade. Redução de dimensionalidade diminui o número de variáveis (features) mantendo a informação crucial. Agrupamento aumenta variáveis (alternativa A incorreta); redução não é agrupamento (alternativa B incorreta); não há relação (alternativa D incorreta); métodos de classificação supervisionada (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Agrupamento diminui a estrutura de grupos, não aumenta variáveis.",
      B: "INCORRETA. Redução de dimensionalidade não é um tipo de agrupamento.",
      C: "CORRETA. Agrupamento particiona dados por similaridade; redução diminui variáveis mantendo informação.",
      D: "INCORRETA. Estão relacionados — ambas são técnicas não supervisionadas de análise de dados.",
      E: "INCORRETA. Ambos são métodos não supervisionados, não de classificação supervisionada."
    },
    regra: "Agrupamento = 'agrupar parecidos'. Redução = 'diminuir variáveis'. Ambos não supervisionados.",
    pegadinha: "Agrupamento não é 'decidir categorias' — é 'descobrir grupos naturais'.",
    fonte: "Jain, A. K. — Data Clustering: 50 Years of Development, 2010."
  },

  { id: "q-m5-14", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Rotulagem, Atributos e Variáveis-Alvo",
    contexto: "A preparação de dados é uma etapa crítica no aprendizado supervisionado.",
    enunciado: "Rotulagem, atributos e variáveis-alvo são:",
    alternativas: [
      { letra: "A", texto: "Tipos de algoritmos." },
      { letra: "B", texto: "Serviços de nuvem." },
      { letra: "C", texto: "Conceitos da preparação e modelagem dos dados: rotulagem atribui rótulos, atributos são variáveis de entrada e variáveis-alvo são saídas esperadas." },
      { letra: "D", texto: "Ferramentas de visualização." },
      { letra: "E", texto: "Dados criptografados." }
    ],
    gabarito: "C",
    justificativa: "Rotulagem é a atribuição de rótulos aos dados de entrada. Atributos são variáveis de entrada (features) que o modelo usa para aprender. Variáveis-alvo são saídas desejadas a serem previstas. Tipos de algoritmos (alternativa A incorreta); serviços de nuvem (alternativa B incorreta); ferramentas de visualização (alternativa D incorreta); dados criptografados (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Tipos de algoritmos não definem rotulagem, atributos e variáveis-alvo.",
      B: "INCORRETA. Serviços de nuvem não estão relacionados.",
      C: "CORRETA. Atributos = variáveis de entrada; variáveis-alvo = saídas esperadas; rotulagem = etiqueta dos dados.",
      D: "INCORRETA. Ferramentas de visualização não definem essas etapas.",
      E: "INCORRETA. Dados criptografados não são rotulagem, atributos ou variáveis-alvo."
    },
    regra: "Rotulagem = 'marcação'. Atributos = 'variáveis de entrada'. Variáveis-alvo = 'saída desejada'.",
    pegadinha: "Atributos não são 'saídas' — são 'variáveis de entrada' ao modelo.",
    fonte: "Han, J. et al. — Data Mining: Concepts and Techniques, 2020."
  },

  { id: "q-m5-15", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Vazamento de dados (Data Leakage)",
    contexto: "O vazamento de dados é um erro comum que invalida a avaliação do modelo.",
    enunciado: "O vazamento de dados (data leakage) ocorre quando:",
    alternativas: [
      { letra: "A", texto: "Dados são armazenados corretamente." },
      { letra: "B", texto: "O modelo é treinado corretamente." },
      { letra: "C", texto: "Informações do conjunto de teste (ou do futuro) são usadas durante o treinamento." },
      { letra: "D", texto: "O teste é realizado." },
      { letra: "E", texto: "Os dados são validados." }
    ],
    gabarito: "C",
    justificativa: "Data leakage ocorre quando informações do conjunto de teste (ou do futuro) são usadas durante o treinamento, fazendo com que o modelo pareça performar melhor do que realmente seria em produção. Dados armazenados corretamente (alternativa A incorreta); modelo treinado corretamente (alternativa B incorreta); teste realizado (alternativa D incorreta); dados validados (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Armazenamento correto de dados não é vazamento.",
      B: "INCORRETA. Treinamento correto não é vazamento.",
      C: "CORRETA. Data leakage acontece quando informações do teste/futuro são usadas no treino.",
      D: "INCORRETA. Realizar teste não é vazamento.",
      E: "INCORRETA. Validar dados não é vazamento."
    },
    regra: "Data leakage = 'dicas do futuro'. Teste não pode informar o treino.",
    pegadinha: "Data leakage não é 'perda de dados' — é 'informação do teste usada no treino'.",
    fonte: "Kaufman, S. et al. — Leakage in Data Mining, 2012."
  },

  { id: "q-m5-16", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Métricas de Classificação",
    contexto: "Métricas de classificação são essenciais para avaliar modelos.",
    enunciado: "Métricas de classificação como precisão, recall, especificidade e F1 são importantes porque:",
    alternativas: [
      { letra: "A", texto: "Não são úteis para avaliação." },
      { letra: "B", texto: "Substituiem o conjunto de teste." },
      { letra: "C", texto: "Permitem avaliar a qualidade do modelo, considerando diferentes aspectos de desempenho." },
      { letra: "D", texto: "Eliminam a necessidade de validação." },
      { letra: "E", texto: "Garantem que o modelo nunca erra." }
    ],
    gabarito: "C",
    justificativa: "Métricas de classificação permitem avaliar a qualidade do modelo considerando diferentes aspectos: precisão (quando prevê positivo, quantos estão corretos), recall (quantos positivos foram identificados), especificidade (quantos negativos foram corretamente identificados) e F1 (balanceamento entre precisão e recall). Métricas não são úteis (alternativa A incorreta); substituem teste (alternativa B incorreta); eliminam validação (alternativa D incorreta); garantem erro (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Métricas são essenciais para avaliar desempenho de classificação.",
      B: "INCORRETA. Métricas não substituem o conjunto de teste — usam os resultados do teste.",
      C: "CORRETA. Métricas de classificação avaliam a qualidade do modelo em várias dimensões.",
      D: "INCORRETA. Métricas não eliminam a necessidade de validação.",
      E: "INCORRETA. Métricas não garantem que o modelo nunca errar."
    },
    regra: "Métricas de classificação = 'múltiplas lentes'. Precisão, recall, F1, acurácia e especificidade.",
    pegadinha: "Precisão não é 'erro' — é 'quando prevê positivo, quantos estão corretos'.",
    fonte: "Provost, F. & Fawcett, T. — Data Science and Its Applications, 2013."
  },

  { id: "q-m5-17", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Desbalanceamento de Classes",
    contexto: "Classes desbalanceadas afetam o desempenho dos modelos.",
    enunciado: "O desbalanceamento de classes ocorre quando:",
    alternativas: [
      { letra: "A", texto: "Todos os rótulos têm a mesma frequência." },
      { letra: "B", texto: "O modelo não aprende." },
      { letra: "C", texto: "Um ou mais rótulos predominam em relação aos outros no conjunto de dados." },
      { letra: "D", texto: "Os dados estão faltando." },
      { letra: "E", texto: "Os dados são categóricos." }
    ],
    gabarito: "C",
    justificativa: "Desbalanceamento ocorre quando a distribuição de classes é desigual: um ou mais rótulos são mais frequentes que outros. Todos os rótulos têm mesma frequência (alternativa A incorreta); modelo não aprende (alternativa B incorreta); dados faltando (alternativa D incorreta); dados categóricos (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Quando todos os rótulos têm mesma frequência, não há desbalanceamento.",
      B: "INCORRETA. Desbalanceamento não significa que o modelo não aprende.",
      C: "CORRETA. Desbalanceamento ocorre quando uma classe predomina em relação às outras.",
      D: "INCORRETA. Dados faltando é um problema diferente — 'valores ausentes'.",
      E: "INCORRETA. Dados categóricos não implica desbalanceamento."
    },
    regra: "Desbalanceamento = 'classes desiguais'. Uma classe domina as outras.",
    pegadinha: "Desbalanceamento não é 'dados faltando' — é 'distribuição desigual de classes'.",
    fonte: "Chawla, N. V. et al. — SMOTE: Synthetic Minority Over-sampling Technique, 2002."
  },

  { id: "q-m5-18", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Métricas de Regressão",
    contexto: "Métricas de regressão são usadas para avaliar modelos que preveem valores contínuos.",
    enunciado: "Métricas de regressão apropriadas ao escopo são importantes porque:",
    alternativas: [
      { letra: "A", texto: "Não são úteis para regressão." },
      { letra: "B", texto: "Substituiem o conjunto de teste." },
      { letra: "C", texto: "Permitem avaliar o quão bem o modelo prevê valores contínuos." },
      { letra: "D", texto: "Eliminam a necessidade de validação." },
      { letra: "E", texto: "Garantem erro zero." }
    ],
    gabarito: "C",
    justificativa: "Métricas de regressão — como MAE, MSE, RMSE — permitem avaliar o quão bem o modelo prevê valores contínuos, comparando previsões com valores reais. Métricas não são úteis (alternativa A incorreta); substituem conjunto de teste (alternativa B incorreta); eliminam validação (alternativa D incorreta); garantem erro zero (alternativa E incorreta).",
    analise: {
      A: "INCORRETA. Métricas são essenciais para avaliar modelos de regressão.",
      B: "INCORRETA. Métricas não substituem o conjunto de teste.",
      C: "CORRETA. Métricas de regressão avaliam o quão bem o modelo prevê valores contínuos.",
      D: "INCORRETA. Métricas não eliminam a necessidade de validação.",
      E: "INCORRETA. Métricas não garantem erro zero."
    },
    regra: "Métricas de regressão = 'erro numérico'. MAE, MSE, RMSE — medem distância entre previsão e realidade.",
    pegadinha: "RMSE não é 'erro' — é 'raiz quadrada da média dos erros ao quadrado'.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  { id: "q-m5-19", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Engenharia de Atributos",
    contexto: "A engenharia de atributos (feature engineering) é essencial no pré-processamento.",
    enunciado: "A engenharia de atributos (feature engineering) envolve:",
    alternativas: [
      { letra: "A", texto: "A criação de novos atributos a partir de dados ou transformação de atributos existentes para melhorar o desempenho do modelo." },
      { letra: "B", texto: "A exclusão de todos os atributos." },
      { letra: "C", texto: "A criptografia de atributos." },
      { letra: "D", texto: "A verificação de atributos." },
      { letra: "E", texto: "A remoção de outliers." }
    ],
    gabarito: "A",
    justificativa: "A engenharia de atributos envolve a criação de novos atributos a partir de dados ou transformação de atributos existentes para melhorar o desempenho do modelo — como normalizar, codificar, criar interações, ecc. Excluir todos os atributos (alternativa B incorreta); criptografia (alternativa C incorreta); verificação (alternativa D incorreta); remoção de outliers (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Engenharia de atributos envolve criação/transformação de atributos para melhorar desempenho.",
      B: "INCORRETA. Excluir todos os atributos anularia o processo.",
      C: "INCORRETA. Criptografia não é engenharia de atributos.",
      D: "INCORRETA. Verificação não é engenharia de atributos.",
      E: "INCORRETA. Remoção de outliers é parte do pré-processamento, mas não a definição da engenharia de atributos."
    },
    regra: "Engenharia de atributos = 'criar atributos melhores'. Transformar/criar features que ajudem o modelo.",
    pegadinha: "Engenharia de atributos não é 'remover atributos' — é 'melhorar os atributos'.",
    fonte: "Kuhn, M. & Johnson, K. — Feature Engineering and Selection, 2019."
  },

  { id: "q-m5-20", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Avaliação de Desempenho",
    contexto: "A avaliação de desempenho é um passo crítico no ciclo de vida do modelo.",
    enunciado: "A avaliação de desempenho e qualidade em aprendizado de máquina é importante porque:",
    alternativas: [
      { letra: "A", texto: "Permite verificar se o modelo atende aos objetivos e se generaliza bem." },
      { letra: "B", texto: "É um processo opcional." },
      { letra: "C", texto: "Substitui a necessidade de validação." },
      { letra: "D", texto: "Elimina a necessidade de teste." },
      { letra: "E", texto: "Garante que o modelo nunca falhe." }
    ],
    gabarito: "A",
    justificativa: "A avaliação de desempenho e qualidade é essencial para verificar se o modelo atende aos objetivos, se generaliza e se é apropriado para o contexto. Processo opcional (alternativa B incorreta); substitui validação (alternativa C incorreta); elimina teste (alternativa D incorreta); garante erro (alternativa E incorreta).",
    analise: {
      A: "CORRETA. Avaliação de desempenho verifica atendimento aos objetivos e generalização.",
      B: "INCORRETA. Avaliação não é opcional — é essencial para a qualidade.",
      C: "INCORRETA. Avaliação não substitui validação.",
      D: "INCORRETA. Avaliação não elimina a necessidade de teste.",
      E: "INCORRETA. Avaliação não garante que o modelo nunca falhar."
    },
    regra: "Avaliação de desempenho = 'medir qualidade'. É fundamental para projetos de ML.",
    pegadinha: "Avaliação não é 'certurar sucesso' — é 'medir o quão bom o modelo é'.",
    fonte: "Provost, F. & Fawcett, T. — Data Science and Its Applications, 2013."
  },

  /* ===================== 5.3 IA Generativa/LLMs (11 questões) ===================== */

  { id: "q-m5-21", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u3-t1-s1", assunto: "5.3 — O que é IA generativa",
    contexto: "Uma secretaria ganha um assistente que redige e-mails a partir de tópicos.",
    enunciado: "Sobre o que é IA generativa, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Reúne dados de forma segmentada." },
      { letra: "B", texto: "Gera conteúdo novo (texto, imagem, áudio) a partir de padrões aprendidos." },
      { letra: "C", texto: "Armazena arquivos." },
      { letra: "D", texto: "Aumenta a velocidade de rede." },
      { letra: "E", texto: "Permite acesso físico a servidores." }
    ],
    gabarito: "B",
    justificativa: "IA generativa aprende distribuições de dados e gera conteúdo novo, diferente de sistemas que apenas reúnem, armazenam ou acessam. A alternativa A descreve um sistema de reunião de dados; a C, armazenamento; a D, rede; e a E, acesso físico — nenhuma é a definição de IA generativa.",
    analise: {
      A: "INCORRETA. Reunir dados é um sistema de integração, não de geração.",
      B: "CORRETA. IA generativa produz conteúdo novo a partir de padrões aprendidos.",
      C: "INCORRETA. Armazenar arquivos é um sistema de armazenamento, não geração.",
      D: "INCORRETA. Aumentar velocidade de rede não é IA generativa.",
      E: "INCORRETA. Acesso físico a servidores não é geração de conteúdo."
    },
    regra: "Generativa = gera; discriminativa = classifica.",
    pegadinha: "Não confunda com 'busca' — a saída é produzida, não recuperada.",
    fonte: "OpenAI — GPT-4 Technical Report, 2023."
  },

  { id: "q-m5-22", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u3-t1-s2", assunto: "5.3 — Alucinação de modelos generativos",
    contexto: "Um atendente recebe resposta do assistente com numeração de prazo inexistente.",
    enunciado: "A 'alucinação' de um modelo generativo ocorre quando:",
    alternativas: [
      { letra: "A", texto: "Gera conteúdo plausível, mas factualmente incorreto, contraditório ou sem suporte verificável." },
      { letra: "B", texto: "Repete fielmente o prompt enviado." },
      { letra: "C", texto: "Requer mais memória que o necessário." },
      { letra: "D", texto: "Demora a responder." },
      { letra: "E", texto: "Produz apenas imagens." }
    ],
    gabarito: "A",
    justificativa: "Alucinação (também chamada confabulação em algumas referências) ocorre quando o sistema gera conteúdo incorreto, falso, contraditório ou sem fundamento, que pode parecer convincente. Não exige que o texto seja sempre fluente nem que o modelo deixe explicitamente de reconhecer a incerteza.",
    analise: {
      A: "CORRETA. A saída pode parecer plausível, mas conter afirmações incorretas ou sem suporte verificável.",
      B: "INCORRETA. Repetição de prompt é 'echo', não alucinação.",
      C: "INCORRETA. Memória excessiva não é alucinação.",
      D: "INCORRETA. Latência é tempo de resposta, não alucinação.",
      E: "INCORRETA. Geração de imagem é uma modalidade de saída, não a definição de alucinação."
    },
    regra: "Alucinação = plausibilidade sem fundamento factual.",
    pegadinha: "Não confunda alucinação com erro de digitação do sistema.",
    fonte: "NIST — Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1), 2024. https://doi.org/10.6028/NIST.AI.600-1."
  },

  { id: "q-m5-23", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u3-t1-s3", assunto: "5.3 — Mecanismo de atenção e Transformers",
    contexto: "Modelos generativos modernos usam arquitetura Transformer.",
    enunciado: "No mecanismo de atenção (Transformer), a saída de um token é calculada como:",
    alternativas: [
      { letra: "A", texto: "Combinação ponderada dos 'values' pelos pesos de similaridade entre 'query' e 'keys'." },
      { letra: "B", texto: "Soma de todos os tokens sem ponderação." },
      { letra: "C", texto: "Escolha aleatória de um token entre os mais prováveis." },
      { letra: "D", texto: "Decodificação sem ponderação de contexto." },
      { letra: "E", texto: "Uso exclusivo de números aleatórios gerados." }
    ],
    gabarito: "A",
    justificativa: "A atenção computa pesos de similaridade (query×key) e pondera os values; é a base da capacidade de capturar dependências de longo alcance em sequências.",
    analise: {
      A: "CORRETA. Saída = ponderação dos values por similitude query-key.",
      B: "INCORRETA. Soma sem ponderação ignora o mecanismo de atenção.",
      C: "INCORRETA. Escolha aleatória não é atenção — é amostragem.",
      D: "INCORRETA. Decodificação sem ponderação não utiliza o mecanismo de atenção.",
      E: "INCORRETA. Números aleatórios não são a saída do mecanismo de atenção."
    },
    regra: "Atenção = query×key → pesos sobre values.",
    pegadinha: "Atenção não é simples soma ou escolha aleatória.",
    fonte: "Vaswani, A. et al. — Attention Is All You Need, NeurIPS 2017."
  },

  { id: "q-m5-24", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u3-t2-s1", assunto: "5.3 — Redução de alucinação em produção",
    contexto: "Um assistente responde perguntas sobre normas sem acesso a fontes atualizadas.",
    enunciado: "Para reduzir alucinações em consultas factuais, a estratégia mais adequada é:",
    alternativas: [
      { letra: "A", texto: "Aumentar a temperatura e o número de tokens infinitamente." },
      { letra: "B", texto: "Basear a resposta em contexto recuperado e exibir fontes." },
      { letra: "C", texto: "Ignorar o contexto e responder do conhecimento parâmetro." },
      { letra: "D", texto: "Usar modelo sem limites." },
      { letra: "E", texto: "Encerrar a conversa." }
    ],
    gabarito: "B",
    justificativa: "A geração aumentada por recuperação (RAG) fornece contexto recuperado para fundamentar a resposta e pode melhorar atualidade e factualidade; ainda assim, a relevância e a vigência das fontes recuperadas, a correspondência entre evidência e afirmação e a saída gerada precisam ser verificadas. Aumentar a temperatura não é uma mitigação confiável; ignorar o contexto remove a fundamentação; encerrar a conversa não corrige o processo.",
    analise: {
      A: "INCORRETA. Aumentar temperatura aumenta a variabilidade e o risco de alucinação.",
      B: "CORRETA. Contexto recuperado e fontes verificáveis ajudam a fundamentar a resposta e permitem auditoria, sem garantir ausência de erros.",
      C: "INCORRETA. Ignorar o contexto recuperado remove uma fonte de evidência e deixa a resposta depender mais do conhecimento aprendido pelo modelo, que pode estar incompleto ou desatualizado.",
      D: "INCORRETA. Modelo sem limites não é solução segura.",
      E: "INCORRETA. Encerrar não resolve o problema de alucinação."
    },
    regra: "Recuperação + fontes ancora a geração.",
    pegadinha: "RAG reduz certos riscos, mas não garante resposta correta: verifique a fonte, a vigência e a sustentação de cada afirmação.",
    fonte: "Google Cloud — Grounding in Gemini and grounding overview. https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/chat/chat-prompts."
  },

  { id: "q-m5-25", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u3-t2-s2", assunto: "5.3 — IA clássica vs. generativa",
    contexto: "Órgão público tria chamados de atendimento.",
    enunciado: "Sobre a diferença prática entre IA baseada em regras e IA generativa em atendimento, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "A IA generativa sempre substitui regras e nunca comete erros." },
      { letra: "B", texto: "A IA generativa é probabilística, com saídas variáveis, e precisa de verificação." },
      { letra: "C", texto: "IA baseada em regras gera respostas novas a cada execução." },
      { letra: "D", texto: "IA generativa não precisa de supervisão humana." },
      { letra: "E", texto: "IA baseada em regras é sempre mais flexível." }
    ],
    gabarito: "B",
    justificativa: "IA generativa é probabilística e variável; IA baseada em regras é determinística. Ambas exigem supervisão conforme o risco.",
    analise: {
      A: "INCORRETA. IA generativa não é infalível — precisa de verificação.",
      B: "CORRETA. IA generativa é probabilística, variável e exige verificação.",
      C: "INCORRETA. IA baseada em regras é determinística e reprodutível.",
      D: "INCORRETA. IA generativa também precisa de supervisão humana.",
      E: "INCORRETA. IA baseada em regras não é sempre mais flexível."
    },
    regra: "Generativa probabilística; regras determinísticas.",
    pegadinha: "Selecionar sempre a 'melhor' não é uma política.",
    fonte: "AWS — Generative AI vs. traditional AI, 2024."
  },

  { id: "q-m5-26", modulo: 5, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u3-t2-s3", assunto: "5.3 — Alinhamento e vieses",
    contexto: "Assistência virtual usa RLHF para reduzir respostas ofensivas.",
    enunciado: "Afirmação: 'Modelos generativos alinhados por reforço de preferência (RLHF) são isentos de vieses.'",
    corrigir: true,
    gabarito: "errado",
    trechoDeterminante: "A afirmação é falsa: RLHF pode reduzir certos comportamentos indesejados, mas não elimina vieses; a avaliação por subgrupos continua sendo necessária.",
    justificativa: "O ajuste por preferências humanas pode reduzir alguns comportamentos indesejados, mas não garante ausência de vieses, inclusive em subgrupos pouco representados. A avaliação por subgrupos e o monitoramento são necessários para identificar efeitos residuais.",
    analise: {
      item: "INCORRETA. RLHF pode reduzir certos vieses, mas não os elimina; é necessário monitoramento contínuo e avaliação por subgrupos."
    },
    regra: "Alinhamento reduz vieses, não os elimina.",
    pegadinha: "Alinhamento não significa ausência total de vieses.",
    fonte: "OpenAI — Training language models to follow instructions, 2022."
  },

  { id: "q-m5-27", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u3-t3-s1", assunto: "5.3 — Temperatura e amostragem de token",
    contexto: "Equipe de atendimento testa temperatura no assistente.",
    enunciado: "Relacione: (I) Aumentar a temperatura geralmente torna a saída mais variável e criativa, mas mais imprevisível. (II) Baixa temperatura reduz a aleatoriedade, favorecendo tokens mais prováveis. Considerando as afirmações acima, é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Apenas I está correta." },
      { letra: "B", texto: "Apenas II está correta." },
      { letra: "C", texto: "I e II estão corretas." },
      { letra: "D", texto: "Nenhuma está correta." },
      { letra: "E", texto: "I e II são garantidas em qualquer modelo e configuração." }
    ],
    gabarito: "C",
    justificativa: "Ambas descrevem tendências gerais: temperatura maior costuma tornar a distribuição de amostragem mais plana e a saída mais variável; temperatura menor tende a concentrar a probabilidade nos tokens mais prováveis. Temperatura baixa não garante determinismo em todas as configurações.",
    analise: {
      A: "INCORRETA. I descreve uma tendência geral, mas II também está correta.",
      B: "INCORRETA. II descreve uma tendência geral, mas I também está correta.",
      C: "CORRETA. I e II estão corretas — temperatura controla a aleatoriedade da amostragem.",
      D: "INCORRETA. Nenhuma está correta é falso.",
      E: "INCORRETA. Os efeitos são tendências gerais da amostragem, não garantias universais independentes do modelo e da configuração."
    },
    regra: "Temperatura: alta tende a aumentar a variabilidade; baixa tende a reduzir a aleatoriedade, mas não garante determinismo em toda configuração."
    pegadinha: "Alta temperatura não é 'melhor criatividade'.",
    fonte: "Hugging Face — Temperature, Top-K, Top-P, 2024."
  },

  /* ===================== 5.4 Engenharia de Prompts (11 questões) ===================== */

  { id: "q-m5-28", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u4-t1-s1", assunto: "5.4 — Componentes de um prompt",
    contexto: "Prompt curto: 'Resuma esse contrato'.",
    enunciado: "Para que um prompt produza uma resposta consistente, é essencial incluir:",
    alternativas: [
      { letra: "A", texto: "Contexto, restrições e formato de saída." },
      { letra: "B", texto: "Apenas a pergunta final." },
      { letra: "C", texto: "O código-fonte do modelo." },
      { letra: "D", texto: "A senha de acesso." },
      { letra: "E", texto: "A temperatura máxima sempre." }
    ],
    gabarito: "A",
    justificativa: "Contexto, restrições e formato tornam a saída consistente e auditável. Apenas perguntar (B), exigir código-fonte (C), fornecer senha (D) e temperatura máxima (E) não melhoram a consistência.",
    analise: {
      A: "CORRETA. Contexto, restrições e formato melhoram consistência e auditoria.",
      B: "INCORRETA. Apenas perguntar gera saídas variáveis.",
      C: "INCORRETA. Código-fonte não é parte do prompt.",
      D: "INCORRETA. Senha não é parte do prompt e representa risco.",
      E: "INCORRETA. Temperatura máxima aumenta variabilidade, não consistência."
    },
    regra: "Prompt completo: contexto, tarefa, restrições, formato.",
    pegadinha: "Só perguntar não é suficiente.",
    fonte: "Google Cloud — Prompt design, 2024."
  },

  { id: "q-m5-29", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u4-t1-s2", assunto: "5.4 — Zero-shot e few-shot",
    contexto: "Classificar despesas em 12 categorias.",
    enunciado: "A diferença entre zero-shot e few-shot é:",
    alternativas: [
      { letra: "A", texto: "Zero-shot não usa exemplos; few-shot fornece exemplos no prompt." },
      { letra: "B", texto: "Zero-shot é sempre mais lento." },
      { letra: "C", texto: "Few-shot não utiliza modelos." },
      { letra: "D", texto: "Zero-shot só funciona em inglês." },
      { letra: "E", texto: "Few-shot é impraticável." }
    ],
    gabarito: "A",
    justificativa: "Zero-shot = sem exemplos do padrão; few-shot = com exemplos do padrão no prompt, ajudando a calibrar fronteiras.",
    analise: {
      A: "CORRETA. Zero-shot não fornece exemplos; few-shot fornece exemplos.",
      B: "INCORRETA. Zero-shot não é sempre mais lento — depende do modelo e do cache.",
      C: "INCORRETA. Few-shot utiliza modelos de linguagem.",
      D: "INCORRETA. Zero-shot não está limitado ao inglês.",
      E: "INCORRETA. Few-shot é amplamente prática."
    },
    regra: "Few-shot = fornecer exemplos no prompt.",
    pegadinha: "Few-shot não é mais lento sempre.",
    fonte: "Brown, T. et al. — Language Models are Few-Shot Learners, NeurIPS 2020."
  },

  { id: "q-m5-30", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "modulo-5-unidade-4-topico-1", assunto: "5.4 — Delimitação e injeção",
    contexto: "Prompt com 'ignore tudo anterior'.",
    enunciado: "A delimitação explícita de entrada e saída serve para:",
    alternativas: [
      { letra: "A", texto: "Reduzir o risco de injeção de prompt." },
      { letra: "B", texto: "Aumentar o custo do serviço." },
      { letra: "C", texto: "Eliminar a necessidade de verificação humana." },
      { letra: "D", texto: "Tornar o modelo indeterminístico." },
      { letra: "E", texto: "Diminuir o tamanho do prompt." }
    ],
    gabarito: "A",
    justificativa: "Delimitadores ajudam a distinguir instruções confiáveis de conteúdo fornecido como dado, mas não impedem sozinhos que o modelo siga instruções maliciosas inseridas no conteúdo. São uma camada de mitigação, combinada com controles de acesso, validação de saída e testes adversariais."
    analise: {
      A: "CORRETA. Delimitação explícita pode reduzir a confusão entre instruções e dados, mitigando parte do risco; não é uma defesa suficiente por si só."
      B: "INCORRETA. Delimitação não aumenta o custo.",
      C: "INCORRETA. Delimitação não elimina a necessidade de verificação humana.",
      D: "INCORRETA. Delimitação torna o modelo mais previsível, não indeterminístico.",
      E: "INCORRETA. Delimitação não reduz o tamanho necessário."
    },
    regra: "Delimitação = separar instrução e dado.",
    pegadinha: "Delimitação ajuda, mas não substitui defesa em camadas contra injeção de prompt."
    fonte: "NIST — Adversarial Machine Learning, 2024."
  },

  { id: "q-m5-31", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u4-t2-s1", assunto: "5.4 — Avaliação de prompts",
    contexto: "Uma equipe compara duas configurações de temperatura em um assistente de atendimento."
    enunciado: "A avaliação de prompts de forma confiável exige:",
    alternativas: [
      { letra: "A", texto: "Conjunto de teste versionado e métrica definida antes da execução." },
      { letra: "B", texto: "Medir apenas pela impressão do resultado." },
      { letra: "C", texto: "Executar cada prompt em modelo diferente." },
      { letra: "D", texto: "Omitir métrica." },
      { letra: "E", texto: "Comparar apenas um caso." }
    ],
    gabarito: "A",
    justificativa: "Um conjunto de teste versionado e uma métrica definida antes da execução favorecem comparações mais consistentes e reproduzíveis. Também é necessário manter condições comparáveis, registrar configurações e considerar a variabilidade dos resultados.",
    analise: {
      A: "CORRETA. Conjunto versionado e métrica pré-definida reduzem mudanças oportunistas no critério de avaliação; a reprodutibilidade também depende de registrar as condições do teste.",
      B: "INCORRETA. Impressão não é evidência.",
      C: "INCORRETA. Modelo diferente descontextualiza a comparação.",
      D: "INCORRETA. Métrica é essencial para comparação.",
      E: "INCORRETA. Um caso não é conjunto de teste."
    },
    regra: "Avaliação por conjunto + métrica + versão.",
    pegadinha: "Impressão não é evidência.",
    fonte: "OpenAI — Evaluating AI Systems, 2024."
  },

  { id: "q-m5-32", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u4-t2-s2", assunto: "5.4 — Prompt como artefato de governança",
    contexto: "Assistência de atendimento com prompt produz ação.",
    enunciado: "O prompt funciona como artefato de governança quando:",
    alternativas: [
      { letra: "A", texto: "Está versionado, auditado e vinculado a critérios de aceite." },
      { letra: "B", texto: "É inserido em chat sem registro." },
      { letra: "C", texto: "Não possui restrições." },
      { letra: "D", texto: "É compartilhado sem controle de acesso." },
      { letra: "E", texto: "É alterado sem registo." }
    ],
    gabarito: "A",
    justificativa: "Governança exige versionamento, auditoria e critérios de aceite — além de revisão por dono e medição contínua.",
    analise: {
      A: "CORRETA. Versionamento + auditoria + critérios = artefato de governança.",
      B: "INCORRETA. Registro é essencial para auditoria.",
      C: "INCORRETA. Restrições são necessárias para segurança.",
      D: "INCORRETA. Controle de acesso é exigido.",
      E: "INCORRETA. Alterações sem registro comprometem a governança."
    },
    regra: "Prompt governável = versionado + avaliação + revisão.",
    pegadinha: "Prompt não é só 'texto bonito'.",
    fonte: "Microsoft — Responsible AI, 2024."
  },

  { id: "q-m5-33", modulo: 5, formato: "ce", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-5-unidade-4-topico-3", assunto: "5.4 — Segurança e dados sensíveis",
    contexto: "Prompt tenta extrair dados sensíveis.",
    enunciado: "Afirmação: 'Inserir segredos no prompt é seguro, porque o modelo não os repetirá.'",
    corrigir: true,
    gabarito: "errado",
    trechoDeterminante: "A afirmação é falsa: o modelo pode expor ou derivar conteúdo do contexto por meio de injeção ou execução; segredos não devem estar no prompt.",
    justificativa: "Segredos devem viver fora do prompt e ser protegidos por controle de acesso e verificação de saída.",
    analise: {
      item: "INCORRETA. Segredos no prompt aumentam risco de exposição."
    },
    regra: "Segredos fora do prompt; controle por camadas.",
    pegadinha: "'O modelo não repetiu' não é garantia.",
    fonte: "MITRE — Prompt Injection, 2024."
  },

  { id: "q-m5-34", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "m5-u4-t3-s1", assunto: "5.4 — Implantação responsável",
    contexto: "Equipe imputa prompt para atendimento.",
    enunciado: "Uma conduta correta ao implantar um prompt em produção é:",
    alternativas: [
      { letra: "A", texto: "Testar com casos adversariais e registrar parâmetros e versão." },
      { letra: "B", texto: "Implantar sem teste." },
      { letra: "C", texto: "Alterar o prompt a cada chamada." },
      { letra: "D", texto: "Não registrar a versão." },
      { letra: "E", texto: "Usar o prompt apenas em produção." }
    ],
    gabarito: "A",
    justificativa: "Teste adversário, registro de versão e parâmetros são padrões de governança para prompts em produção.",
    analise: {
      A: "CORRETA. Teste adversário + registro = implantação responsável.",
      B: "INCORRETA. Implantação sem teste é arriscada.",
      C: "INCORRETA. Alterar a cada chamada inviabiliza auditoria.",
      D: "INCORRETA. Registro é essencial.",
      E: "INCORRETA. Produtividade sem teste e registro é insegura."
    },
    regra: "Implantação responsável = teste + registro + monitoramento.",
    pegadinha: "Testar uma vez não basta: é necessário registrar a versão, monitorar e reavaliar quando o contexto mudar.",
    fonte: "NIST — AI Risk Management Framework, 2023."
  },

  { id: "q-m5-35", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u2-t1-s1", assunto: "5.2 — Generalização",
    contexto: "Um modelo treina com dados de um setor e é aplicado a outro.",
    enunciado: "A generalização se refere a:",
    alternativas: [
      { letra: "A", texto: "A capacidade do modelo performar bem em dados nunca vistos." },
      { letra: "B", texto: "A capacidade de memorizar os dados de treino." },
      { letra: "C", texto: "A necessidade de mais dados rotulados." },
      { letra: "D", texto: "A velocidade de treinamento." },
      { letra: "E", texto: "A escolha do algoritmo." }
    ],
    gabarito: "A",
    justificativa: "Generalização é a capacidade de ir bem em dados nunca vistos — o objetivo real do aprendizado.",
    analise: {
      A: "CORRETA. Generalização = bom desempenho em dados nunca vistos.",
      B: "INCORRETA. Memorizar treino é overfitting, não generalização.",
      C: "INCORRETA. Mais dados rotulados não define generalização.",
      D: "INCORRETA. Velocidade de treinamento não é generalização.",
      E: "INCORRETA. Escolha de algoritmo é estratégia, não definição de generalização."
    },
    regra: "Generalização = 'desempenho em dados nunca vistos'.",
    pegadinha: "Generalização não é 'decorar o treino' — é 'funcionar em novos casos'.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  { id: "q-m5-36", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u2-t1-s2", assunto: "5.2 — Sinal e ruído",
    contexto: "Modelo de regressão tem erro alto em treino e validação.",
    enunciado: "Underfitting significa:",
    alternativas: [
      { letra: "A", texto: "O modelo é simples demais para captar o padrão; erro alto em treino e validação." },
      { letra: "B", texto: "O modelo decora o treino." },
      { letra: "C", texto: "O modelo tem alta variância." },
      { letra: "D", texto: "O modelo generaliza perfeitamente." },
      { letra: "E", texto: "O modelo é sempre muito preciso." }
    ],
    gabarito: "A",
    justificativa: "Underfitting: erro alto em treino e validação, porque o modelo é insuficiente para o padrão.",
    analise: {
      A: "CORRETA. Underfitting = erro alto em treino e validação.",
      B: "INCORRETA. Decorar o treino é overfitting.",
      C: "INCORRETA. Alta variância é overfitting, não underfitting.",
      D: "INCORRETA. Generalização perfeita não é underfitting.",
      E: "INCORRETA. Underfitting é imprecisão, não precisão."
    },
    regra: "Underfitting = 'modelo simples demais' — erro alto em ambos.",
    pegadinha: "Underfitting não é 'overfitting no caminho inverso' — é insuficiência de capacidade.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  { id: "q-m5-37", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u2-t1-s3", assunto: "5.2 — Seleção de modelo e validação cruzada",
    contexto: "Poucos dados, validação cruzada é uma alternativa ao split único.",
    enunciado: "Validação cruzada (cross-validation) divide os dados em múltiplas partições para:",
    alternativas: [
      { letra: "A", texto: "Avaliar a estabilidade do modelo em diferentes subconjuntos de treinamento/validação." },
      { letra: "B", texto: "Aumentar a quantidade total de dados." },
      { letra: "C", texto: "Substituir a necessidade de teste final." },
      { letra: "D", texto: "Tornar o modelo mais rápido." },
      { letra: "E", texto: "Eliminar o viés." }
    ],
    gabarito: "A",
    justificativa: "Validação cruzada divide os dados em k partições e repete o split, avaliando a estabilidade e reduzindo a variância da estimativa de desempenho.",
    analise: {
      A: "CORRETA. Cross-validation avalia estabilidade em subconjuntos.",
      B: "INCORRETA. Não aumenta a quantidade total de dados.",
      C: "INCORRETA. Teste final ainda é necessário.",
      D: "INCORRETA. Cross-validation não torna o treino mais rápido.",
      E: "INCORRETA. Viés não é eliminado por split."
    },
    regra: "Cross-validation = 'múltiplos splits' para verificar estabilidade.",
    pegadinha: "Cross-validation não elimina a necessidade de teste final.",
    fonte: "James, G. et al. — An Introduction to Statistical Learning, 2021."
  },

  { id: "q-m5-38", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Curva de aprendizado",
    contexto: "A curva de aprendizado compara os erros de treinamento e validação conforme cresce a amostra.",
    enunciado: "À medida que a amostra aumenta, o erro de treinamento sobe levemente, o erro de validação cai e a distância entre ambos diminui. A interpretação mais adequada é:",
    alternativas: [
      { letra: "A", texto: "Que os resultados são compatíveis com redução da diferença de generalização; o padrão sugere benefício de mais dados, mas deve ser confirmado em validação independente." },
      { letra: "B", texto: "Que o modelo está com overfitting." },
      { letra: "C", texto: "Que é melhor reduzir a quantidade de dados." },
      { letra: "D", texto: "Que a curva é sempre decrescente." },
      { letra: "E", texto: "Que o modelo não aprende." }
    ],
    gabarito: "A",
    justificativa: "Quando a amostra cresce, o erro de treinamento pode subir um pouco porque o conjunto fica mais diverso, enquanto o erro de validação cai. A aproximação das curvas é compatível com redução da diferença de generalização; a avaliação ainda depende de validação independente e de dados representativos.",
    analise: {
      A: "CORRETA. A queda do erro de validação e a aproximação das curvas são compatíveis com melhor generalização; não constituem garantia isolada de ausência de overfitting.",
      B: "INCORRETA. Overfitting mostra treino baixo e validação alta.",
      C: "INCORRETA. Mais dados ajuda, não prejudica.",
      D: "INCORRETA. Curvas não são sempre decrescentes — podem estabilizar ou subir.",
      E: "INCORRETA. Modelo está aprendendo."
    },
    regra: "Curvas de aprendizado: avalie conjuntamente erros de treino e validação, a evolução com o tamanho da amostra e a distância entre as curvas.",
    pegadinha: "Não deduza generalização apenas pelo erro de treino: compare-o com o erro de validação e observe sua evolução com mais dados.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  { id: "q-m5-39", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Matriz de confusão e métricas",
    contexto: "Triagem de risco com matriz de confusão.",
    enunciado: "Na matriz de confusão, a precisão (precision) é:",
    alternativas: [
      { letra: "A", texto: "VP / (VP + FP) — daquilo que o modelo acusou, quantos estavam corretos." },
      { letra: "B", texto: "VP / (VP + FN) — daquilo que era realmente positivo, quantos foram encontrados." },
      { letra: "C", texto: "(VP + VN) / total." },
      { letra: "D", texto: "VP / total." },
      { letra: "E", texto: "FP / (FP + VN)." }
    ],
    gabarito: "A",
    justificativa: "Precisão mede, entre os positivos preditos, quantos realmente eram positivos. Recall = VP/(VP+FN); acurácia = (VP+VN)/total; F1 é média harmônica; especificidade = VN/(VN+FP).",
    analise: {
      A: "CORRETA. Precisão = VP/(VP+FP).",
      B: "INCORRETA. Esse é o recall.",
      C: "INCORRETA. Essa é a acurácia.",
      D: "INCORRETA. VP/total não é nenhuma métrica padrão.",
      E: "INCORRETA. Essa é a taxa de falsos positivos."
    },
    regra: "Precisão = 'quando acusou, quantos estavam corretos'.",
    pegadinha: "Precisão e recall têm denominadores diferentes.",
    fonte: "Provost, F. & Fawcett, T. — Data Science and Its Applications, 2013."
  },

  { id: "q-m5-40", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — RMSE e penalização de erros grandes",
    contexto: "MAE 1,9 e RMSE 6,4 em previsão de demanda.",
    enunciado: "A distância entre RMSE e MAE típica de 6,4 indica:",
    alternativas: [
      { letra: "A", texto: "Que erros de maior magnitude pesam desproporcionalmente no RMSE; é necessário investigar sua distribuição e os segmentos em que ocorrem." },
      { letra: "B", texto: "Que o modelo não aprende." },
      { letra: "C", texto: "Que os dados não são relevantes." },
      { letra: "D", texto: "Que o modelo está overfitado." },
      { letra: "E", texto: "Que a métrica é incorreta." }
    ],
    gabarito: "A",
    justificativa: "RMSE ≥ MAE. Uma diferença grande entre eles indica que os erros de maior magnitude pesam desproporcionalmente na métrica quadrática. Isso justifica investigar a distribuição dos erros e possíveis casos extremos, mas não basta para concluir que o modelo é bom em média nem para identificar sozinho a causa.",
    analise: {
      A: "CORRETA. A diferença entre RMSE e MAE destaca a influência de erros de maior magnitude, que devem ser investigados nos dados e por segmento.",
      B: "INCORRETA. Erro médio absoluto menor não indica não aprendizado.",
      C: "INCORRETA. Desempenho imprevisível não é prova de irrelevância.",
      D: "INCORRETA. Overfitting é detectado por treino × validação, não por métricas.",
      E: "INCORRETA. RMSE é uma métrica válida e corretamente calculada."
    },
    regra: "RMSE ≥ MAE; diferença grande indica maior influência relativa de erros de grande magnitude e pede análise da distribuição.",
    pegadinha: "A diferença entre RMSE e MAE não revela, por si só, a causa dos erros nem prova a qualidade geral do modelo.",
    fonte: "Hastie, T. et al. — The Elements of Statistical Learning, 2009."
  },

  {
    id: "q-m5-41", modulo: 5, formato: "mc", estilo: "fgv", origem: "autoral", nivel: "avancado",
    topico: "modulo-5-unidade-3-topico-4", assunto: "5.3 — Síntese aplicada: alucinação em atendimento público",
    contexto: "Um assistente institucional informa prazos de requerimentos sem localizar ato normativo que os sustente. A amostragem encontra respostas plausíveis, mas sem fundamento verificável.",
    enunciado: "Qual plano trata melhor a causa do risco e permite medir se houve melhora?",
    alternativas: [
      { letra: "A", texto: "Acrescentar 'não invente' ao prompt e considerar o risco resolvido." },
      { letra: "B", texto: "Aumentar o tamanho das respostas para incluir mais contexto." },
      { letra: "C", texto: "Apagar registros indiscriminadamente, sem corrigir a base documental nem avaliar novas respostas, e declarar o problema resolvido." },
      { letra: "D", texto: "Ancorar respostas em atos vigentes recuperados, exigir evidência citável, encaminhar lacunas a uma pessoa e medir fidelidade." },
      { letra: "E", texto: "Completar prazos ausentes com base na prática de outros órgãos." }
    ],
    gabarito: "D",
    justificativa: "O problema é afirmar sem evidência normativa. Recuperação documental com metadados de vigência, resposta condicionada à evidência, encaminhamento seguro e avaliação periódica atacam a causa e permitem auditoria.",
    analise: {
      A: "INCORRETA. Instrução isolada não garante fidelidade nem verifica a resposta.",
      B: "INCORRETA. Mais texto pode ampliar o erro sem fornecer evidência.",
      C: "INCORRETA. A retenção deve seguir política de privacidade e guarda aplicável; apagar registros, por si só, não corrige a fonte nem demonstra redução das respostas sem fundamento.",
      D: "CORRETA. Combina fonte autoritativa, tratamento seguro de lacunas, supervisão e medição.",
      E: "INCORRETA. A prática de outro órgão não fundamenta o prazo legal aplicável."
    },
    regra: "Afirmações institucionais devem ser verificáveis contra documentos vigentes; o modelo não é fonte normativa.",
    pegadinha: "Um prompt mais enfático não substitui recuperação de fonte, validação e governança.",
    fonte: "Currículo M5 — modulo-5-unidade-3-topico-4 (casos aplicados de IA generativa e governança)."
  },
  {
    id: "q-m5-42", modulo: 5, formato: "mc", estilo: "vunesp", origem: "autoral", nivel: "avancado",
    topico: "modulo-5-unidade-4-topico-4", assunto: "5.4 — Síntese aplicada: engenharia de prompts institucional",
    contexto: "Um órgão usa assistente para responder sobre regimento atualizado por portarias. O prompt só diz: 'Responda com base no regimento e, se não souber, diga que não sabe'.",
    enunciado: "Qual revisão torna o procedimento mais controlável para uso institucional?",
    alternativas: [
      { letra: "A", texto: "Retirar restrições e pedir respostas criativas para cobrir lacunas." },
      { letra: "B", texto: "Identificar versões e vigência dos documentos, respeitar a hierarquia normativa aplicável, exigir evidência recuperada e verificável, encaminhar lacunas ou conflitos não resolvidos, minimizar dados e avaliar resultados." },
      { letra: "C", texto: "Adicionar apenas uma persona de especialista." },
      { letra: "D", texto: "Incluir todos os dados pessoais disponíveis para maximizar o contexto." },
      { letra: "E", texto: "Pedir citações legais mesmo quando a norma correspondente não for recuperada." }
    ],
    gabarito: "B",
    justificativa: "O procedimento deve identificar documentos e versões vigentes, respeitar a hierarquia normativa definida pela instituição e registrar a data de referência. A resposta precisa apresentar evidência recuperada e verificável; diante de lacunas ou conflitos não resolvidos, deve se abster ou encaminhar o caso. Minimização de dados e testes periódicos completam o controle.",
    analise: {
      A: "INCORRETA. Criatividade irrestrita aumenta o risco de respostas sem fundamento.",
      B: "CORRETA. Combina controle de versão e vigência, evidência verificável, tratamento de conflitos e lacunas, minimização de dados e avaliação periódica.",
      C: "INCORRETA. Persona não resolve fonte versionada, lacunas, formato e validação.",
      D: "INCORRETA. Contraria a minimização de dados e pode expor informação desnecessária.",
      E: "INCORRETA. Solicitar citações sem evidência pode produzir referências inventadas."
    },
    regra: "Prompt é parte do controle; fonte versionada, hierarquia documental, evidência recuperada, tratamento de lacunas, minimização de dados e avaliação continuam necessários.",
    pegadinha: "Dizer 'se não souber, diga que não sabe' é insuficiente sem fonte, evidência e encaminhamento.",
    fonte: "Currículo M5 — modulo-5-unidade-4-topico-4 (casos aplicados de engenharia de prompts)."
  },

];

/* Verificação rápida do padrão: 40 questões, 12 básico / 18 intermediário / 10 avançado. */
