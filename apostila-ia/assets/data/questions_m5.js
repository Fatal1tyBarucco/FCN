/* questions_m5.js — MÓDULO 5: INTELIGÊNCIA ARTIFICIAL
 * 42 questões autorais: 5.1 Fundamentos (10), 5.2 Aprendizado de Máquina (10),
 * 5.3 IA Generativa/LLMs (11), 5.4 Engenharia de Prompts (11).
 * Níveis medidos no banco atual: 12 básicos, 18 intermediários e 12 avançados.
 * Autorais (origem: 'autoral'); formato compatível com quiz-engine.js. */
const moduleQuestions5 = [

  /* ===================== 5.1 Fundamentos de IA (10 questões) ===================== */

  { id: "q-m5-01", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u1-t1-s1", assunto: "5.1 — O que é inteligência artificial?",
    contexto: "Um órgão compara um sistema que aplica regras fixas para encaminhar processos e outro que reconhece padrões em documentos e sugere classificações.",
    enunciado: "Qual definição de inteligência artificial é mais adequada para analisar esses sistemas?",
    alternativas: [
      { letra: "A", texto: "Qualquer programa de computador, independentemente da tarefa ou do método utilizado." },
      { letra: "B", texto: "Um programa que sempre aprende sozinho e nunca utiliza regras explícitas." },
      { letra: "C", texto: "Somente robôs físicos que imitam movimentos humanos." },
      { letra: "D", texto: "Um sistema que necessariamente possui consciência e emoções humanas." },
      { letra: "E", texto: "Um campo que desenvolve sistemas capazes de executar tarefas associadas a capacidades como percepção, previsão, geração, raciocínio ou tomada de decisão, conforme o método e o contexto." }
    ],
    gabarito: "E",
    justificativa: "IA é um campo amplo que abrange diferentes métodos para construir sistemas que realizam tarefas como percepção, previsão, geração de conteúdo, raciocínio ou apoio à decisão. Nem todo sistema de IA é um robô, tem consciência ou aprende autonomamente durante o uso. Sistemas baseados em regras e modelos treinados a partir de dados podem ambos integrar soluções de IA, dependendo de sua concepção e finalidade.",
    analise: {
      A: "INCORRETA. Nem todo programa é classificado como IA; a classificação depende do problema, das capacidades e do método do sistema.",
      B: "INCORRETA. Há sistemas de IA baseados em regras explícitas e sistemas que aprendem com dados.",
      C: "INCORRETA. IA também existe em software sem corpo físico.",
      D: "INCORRETA. Sistemas de IA não precisam ter consciência ou emoções humanas.",
      E: "CORRETA. A definição cobre diferentes tarefas e abordagens sem atribuir capacidades humanas universais."
    },
    regra: "IA é um campo de métodos e sistemas para tarefas como percepção, previsão, geração e decisão; não implica robô, consciência ou aprendizado autônomo.",
    pegadinha: "Não confunda IA com robótica, consciência ou aprendizado de máquina: são conceitos relacionados, mas não equivalentes.",
    fonte: "OECD, Explanatory memorandum on the updated OECD definition of an AI system: https://oecd.ai/en/wonk/ai-system-definition-update."
  },

  { id: "q-m5-02", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u1-t1-s2", assunto: "5.1 — Sistemas baseados em regras",
    contexto: "Um sistema de triagem usa regras explícitas, como encaminhar solicitações com determinado código para uma fila específica. A equipe avalia se esse desenho é apropriado para as regras institucionais conhecidas.",
    enunciado: "Qual afirmação descreve melhor um sistema baseado em regras?",
    alternativas: [
      { letra: "A", texto: "É sinônimo de rede neural treinada com milhões de parâmetros." },
      { letra: "B", texto: "Aprende necessariamente novas regras a partir de exemplos sem qualquer configuração ou intervenção." },
      { letra: "C", texto: "É incapaz de executar decisões condicionais." },
      { letra: "D", texto: "Suas decisões decorrem de regras e condições explicitamente representadas; mudanças no domínio podem exigir revisão das regras, e a abordagem pode ser combinada com métodos de aprendizado." },
      { letra: "E", texto: "Dispensa testes, porque regras explícitas não podem conter conflitos ou lacunas." }
    ],
    gabarito: "D",
    justificativa: "Sistemas baseados em regras representam conhecimento por condições e ações explícitas, por exemplo regras SE–ENTÃO. Podem ser transparentes e adequados quando as regras são conhecidas, mas precisam de manutenção, testes de conflitos e tratamento de exceções. A existência de regras não impede que a solução seja combinada com modelos estatísticos ou aprendizado de máquina.",
    analise: {
      A: "INCORRETA. Regras explícitas e redes neurais são abordagens diferentes, embora possam coexistir.",
      B: "INCORRETA. Aprender regras automaticamente não é uma propriedade necessária de um sistema puramente baseado em regras.",
      C: "INCORRETA. Condições e decisões são parte central desse tipo de sistema.",
      D: "CORRETA. A alternativa descreve regras explícitas, manutenção e possibilidade de arquiteturas híbridas.",
      E: "INCORRETA. Regras podem entrar em conflito, ficar desatualizadas ou não cobrir exceções; testes continuam necessários."
    },
    regra: "Sistema baseado em regras aplica condições e ações explicitamente definidas; mantenha, teste e documente as regras e suas exceções.",
    pegadinha: "Transparência das regras não significa ausência de conflitos nem dispensa validação; também não significa que a solução nunca possa ser híbrida.",
    fonte: "Russell, S. J. e Norvig, P. — Artificial Intelligence: A Modern Approach, 4th ed., 2020."
  },

  { id: "q-m5-03", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u1-t1-s3", assunto: "5.1 — Aprendizado de máquina",
    contexto: "Uma equipe fornece exemplos históricos a um algoritmo para ajustar um modelo que prevê a categoria de novas solicitações.",
    enunciado: "Qual descrição de aprendizado de máquina é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Uma técnica que exige que cada decisão futura seja programada manualmente como uma regra individual." },
      { letra: "B", texto: "Uma garantia de que qualquer modelo melhora sempre que recebe mais dados, mesmo que sejam inadequados." },
      { letra: "C", texto: "Um sinônimo de armazenamento de arquivos em banco de dados." },
      { letra: "D", texto: "Uma abordagem que utiliza exclusivamente dados rotulados e não pode aprender estrutura sem rótulos." },
      { letra: "E", texto: "Um conjunto de métodos que ajustam modelos a partir de dados ou experiência para identificar padrões e produzir previsões ou decisões, conforme o objetivo e o paradigma." }
    ],
    gabarito: "E",
    justificativa: "Aprendizado de máquina reúne métodos que ajustam modelos a partir de dados ou experiência para executar tarefas como previsão, classificação, agrupamento ou decisão. Existem paradigmas supervisionados, não supervisionados e por reforço, entre outros. A qualidade depende da adequação dos dados, da formulação, do procedimento de treinamento e da avaliação; mais dados não garantem melhoria se forem inadequados ou enviesados.",
    analise: {
      A: "INCORRETA. Aprender padrões a partir de dados pode reduzir a necessidade de programar cada regra individual, embora a lógica explícita também seja útil em outros sistemas.",
      B: "INCORRETA. Dados irrelevantes, enviesados ou de baixa qualidade podem não melhorar e até prejudicar o modelo.",
      C: "INCORRETA. Armazenamento é distinto do treinamento de modelos.",
      D: "INCORRETA. Aprendizado não supervisionado não exige rótulos fornecidos para cada exemplo.",
      E: "CORRETA. A alternativa define o ajuste de modelos a partir de dados/experiência e admite diferentes tarefas e paradigmas."
    },
    regra: "Aprendizado de máquina ajusta modelos a partir de dados ou experiência; desempenho depende de dados, método, objetivo e avaliação.",
    pegadinha: "Mais dados não garantem automaticamente melhor desempenho, e aprendizado de máquina não se limita a exemplos rotulados.",
    fonte: "Mitchell, T. M. — Machine Learning, McGraw-Hill, 1997."
  },

  { id: "q-m5-04", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Separação de treino, validação e teste",
    contexto: "Uma equipe compara modelos e ajusta hiperparâmetros várias vezes. Ela quer estimar o desempenho em dados novos sem contaminar a avaliação final.",
    enunciado: "Qual procedimento reduz melhor o risco de superestimar a capacidade de generalização do modelo?",
    alternativas: [
      { letra: "A", texto: "Usar o conjunto de teste a cada ajuste de hiperparâmetros e informar o melhor resultado observado como desempenho final." },
      { letra: "B", texto: "Ajustar o modelo no conjunto de teste e depois tratá-lo como dado independente." },
      { letra: "C", texto: "Duplicar registros entre treino e teste para garantir que os dois conjuntos tenham a mesma distribuição de exemplos." },
      { letra: "D", texto: "Escolher o modelo somente pelo desempenho no treino, pois dados não vistos não são relevantes." },
      { letra: "E", texto: "Treinar com o conjunto de treino, usar validação para selecionar modelos/hiperparâmetros e reservar o teste para uma avaliação final após as decisões de modelagem." }
    ],
    gabarito: "E",
    justificativa: "O conjunto de treino ajusta os parâmetros do modelo; a validação apoia a seleção de modelos e hiperparâmetros; o teste deve permanecer separado das decisões de modelagem para fornecer uma estimativa final menos enviesada do desempenho em dados não vistos. Consultar repetidamente o teste e escolher com base nesses resultados transforma-o, na prática, em parte do processo de ajuste e pode produzir estimativas otimistas. Também é necessário prevenir vazamento de dados e respeitar dependências temporais ou por grupo na divisão.",
    analise: {
      A: "INCORRETA. A seleção repetida com base no teste adapta o processo a esse conjunto e compromete sua independência.",
      B: "INCORRETA. Depois de usado para ajustar decisões, o conjunto deixa de funcionar como avaliação independente.",
      C: "INCORRETA. Registros duplicados entre conjuntos podem causar vazamento e inflar artificialmente o desempenho.",
      D: "INCORRETA. O desempenho no treino não estima, por si só, a generalização para dados novos.",
      E: "CORRETA. A separação preserva o teste para a avaliação final e reduz o risco de estimativa otimista."
    },
    regra: "Treino ajusta parâmetros; validação orienta escolhas; teste fica reservado à avaliação final. Evite vazamento entre conjuntos.",
    pegadinha: "Um teste consultado repetidamente para escolher modelos deixa de ser uma avaliação final independente.",
    fonte: "scikit-learn, Cross-validation: evaluating estimator performance: https://scikit-learn.org/stable/modules/cross_validation.html; Google, Machine Learning Crash Course — Data preparation and feature engineering: https://developers.google.com/machine-learning/crash-course."
  },

{ id: "q-m5-05", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Overfitting e generalização",
    contexto: "Um modelo obtém desempenho muito alto nos exemplos de treinamento, mas comete muito mais erros em um conjunto de avaliação que não foi usado para ajustá-lo.",
    enunciado: "Qual interpretação é mais compatível com esse resultado?",
    alternativas: [
      { letra: "A", texto: "O modelo não possui parâmetros ajustáveis, porque há diferença entre os conjuntos." },
      { letra: "B", texto: "Há prova de underfitting, pois o modelo necessariamente falha tanto no treino quanto no teste." },
      { letra: "C", texto: "O modelo generaliza perfeitamente, pois o resultado de treino é alto." },
      { letra: "D", texto: "Há evidência de overfitting: o modelo se ajustou excessivamente às características do treino e generaliza pior para dados não vistos." },
      { letra: "E", texto: "O resultado demonstra que qualquer conjunto de teste está incorreto e deve ser descartado." }
    ],
    gabarito: "D",
    justificativa: "Overfitting ocorre quando o modelo se ajusta em excesso aos dados de treinamento, incluindo padrões específicos ou ruído que não se repetem em novos exemplos. Um sinal comum é o desempenho elevado no treino e significativamente pior na validação ou no teste. A interpretação deve considerar a representatividade dos conjuntos, possíveis mudanças de distribuição, vazamento e a métrica utilizada; a diferença observada é evidência a investigar, não diagnóstico automático em qualquer contexto.",
    analise: {
      A: "INCORRETA. A diferença de desempenho não significa ausência de parâmetros; modelos ajustáveis podem sobreajustar.",
      B: "INCORRETA. Underfitting costuma aparecer como desempenho insuficiente já no treino, além de desempenho ruim fora dele.",
      C: "INCORRETA. Desempenho no treino não garante generalização.",
      D: "CORRETA. O contraste entre treino muito bom e desempenho inferior em dados não vistos é compatível com overfitting.",
      E: "INCORRETA. O resultado exige investigação da avaliação e dos dados, não descarte automático do teste."
    },
    regra: "Overfitting: bom ajuste ao treino e generalização prejudicada; confirme a interpretação com dados e avaliação adequados.",
    pegadinha: "A diferença treino/teste é um sinal de possível sobreajuste, mas também pode refletir vazamento, amostragem inadequada ou mudança de distribuição.",
    fonte: "scikit-learn, Underfitting vs. Overfitting: https://scikit-learn.org/stable/auto_examples/model_selection/plot_underfitting_overfitting.html; Hastie, Tibshirani e Friedman, The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/."
  },

{ id: "q-m5-06", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u1-t2-s2", assunto: "5.1 — Viés, variância e generalização",
    contexto: "Dois modelos são avaliados em diferentes amostras de treino. O modelo X apresenta erro alto tanto no treino quanto na validação; o modelo Y apresenta erro muito baixo no treino, mas varia bastante entre amostras e tem erro alto na validação.",
    enunciado: "Qual interpretação é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Erro de treino baixo garante erro baixo em dados novos." },
      { letra: "B", texto: "X necessariamente sofre overfitting; Y necessariamente sofre underfitting." },
      { letra: "C", texto: "Viés e variância são sinônimos e não afetam a generalização." },
      { letra: "D", texto: "X sugere subajuste (underfitting); Y sugere sobreajuste (overfitting), frequentemente associado a alta variância." },
      { letra: "E", texto: "A variância mede exclusivamente o número de atributos do conjunto de dados." }
    ],
    gabarito: "D",
    justificativa: "Erro elevado no treino e na validação sugere que o modelo não capturou adequadamente os padrões, situação compatível com subajuste e viés elevado. Desempenho muito bom no treino, mas fraco ou instável em dados não vistos, sugere sobreajuste e maior variância. Essa interpretação é diagnóstica, não uma identidade absoluta: os resultados também dependem da qualidade dos dados, da distribuição, da regularização e do procedimento de avaliação.",
    analise: {
      A: "INCORRETA. Ajuste excelente no treino pode coexistir com desempenho ruim em dados novos.",
      B: "INCORRETA. Inverte as interpretações típicas dos padrões de treino e validação.",
      C: "INCORRETA. Viés e variância são conceitos distintos que ajudam a compreender fontes de erro e generalização.",
      D: "CORRETA. Os padrões de erro descritos são compatíveis, respectivamente, com subajuste e sobreajuste.",
      E: "INCORRETA. Variância não é o número de atributos; refere-se, nesse contexto, à sensibilidade do modelo aos dados de treinamento."
    },
    regra: "Erro alto no treino e validação sugere subajuste; treino muito bom e validação ruim ou instável sugere sobreajuste/alta variância.",
    pegadinha: "Use viés e variância como diagnóstico no contexto; não trate a associação como regra absoluta independente dos dados e do método.",
    fonte: "Geman, S., Bienenstock, E. e Doursat, R. — Neural Networks and the Bias/Variance Dilemma, Neural Computation, 1992: https://doi.org/10.1162/neco.1992.4.1.1."
  },

  { id: "q-m5-07", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-3-topico-3", assunto: "5.1 — Explicabilidade (XAI)",
    contexto: "Técnicas de explicabilidade podem ajudar a analisar o comportamento de modelos de IA, inclusive modelos complexos.",
    enunciado: "Sobre explicabilidade em inteligência artificial (XAI), é correto afirmar que:",
    alternativas: [
      { letra: "A", texto: "Uma explicação local de uma previsão garante que o modelo inteiro seja transparente." },
      { letra: "B", texto: "XAI consiste em ocultar os dados de entrada para proteger o modelo." },
      { letra: "C", texto: "XAI é uma técnica exclusiva de redes neurais profundas." },
      { letra: "D", texto: "Uma explicação gerada pelo modelo prova que a decisão é justa e correta." },
      { letra: "E", texto: "Técnicas de XAI podem oferecer explicações úteis sobre previsões ou comportamento do modelo, mas não garantem explicação completa nem causalidade." }
    ],
    gabarito: "E",
    justificativa: "XAI reúne métodos para tornar certos aspectos das previsões ou do comportamento de modelos mais compreensíveis. O alcance depende da técnica, do modelo e do contexto: uma explicação local não descreve necessariamente todo o modelo, e uma explicação não prova causalidade, justiça ou correção factual.",
    analise: {
      A: "INCORRETA. Uma explicação local se refere a uma previsão ou região específica e não garante transparência global.",
      B: "INCORRETA. Ocultar dados de entrada não define XAI.",
      C: "INCORRETA. Há técnicas de explicabilidade aplicáveis a diferentes famílias de modelos, não apenas redes profundas.",
      D: "INCORRETA. Explicabilidade não prova, por si só, justiça, validade ou correção da decisão.",
      E: "CORRETA. A explicação pode apoiar análise e auditoria, mas possui escopo e limitações que devem ser avaliados."
    },
    regra: "XAI = métodos para compreender aspectos das previsões ou do comportamento de um modelo, com limitações explícitas.",
    pegadinha: "Uma explicação plausível não é prova de causalidade, justiça ou correção; confira o escopo da técnica usada.",
    fonte: "Arrieta, A. et al. — Explainable Artificial Intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI, Information Fusion, 58 (2020), DOI: https://doi.org/10.1016/j.inffus.2019.12.012."
  },

    { id: "q-m5-08", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "basico", topico: "m5-u1-t1-s3", assunto: "5.1 — Treinamento e inferência",
    contexto: "Um modelo de classificação já foi treinado e validado. Agora, uma aplicação envia novas solicitações para que o modelo indique a categoria provável de cada uma.",
    enunciado: "Nesse fluxo, qual etapa corresponde à inferência?",
    alternativas: [
      { letra: "A", texto: "Ajustar os parâmetros do modelo usando exemplos de treinamento." },
      { letra: "B", texto: "Executar o modelo treinado sobre novas entradas e produzir previsões ou saídas." },
      { letra: "C", texto: "Selecionar hiperparâmetros usando exclusivamente os resultados do conjunto de teste." },
      { letra: "D", texto: "Reunir e rotular os dados antes de iniciar o treinamento." },
      { letra: "E", texto: "Excluir os registros históricos sem executar o modelo." }
    ],
    gabarito: "B",
    justificativa: "Inferência é a execução de um modelo já treinado para produzir previsões, classificações, gerações ou outras saídas a partir de entradas. Treinamento ajusta parâmetros; validação pode orientar a seleção de modelos e hiperparâmetros; preparação de dados e rotulagem são atividades distintas. Em sistemas reais, a inferência também exige monitoramento de desempenho, latência e possíveis mudanças nos dados.",
    analise: {
      A: "INCORRETA. Ajustar parâmetros com exemplos é parte do treinamento, não da inferência.",
      B: "CORRETA. A aplicação usa o modelo já treinado para gerar saídas a partir de novas entradas.",
      C: "INCORRETA. Selecionar hiperparâmetros é uma atividade de modelagem e usar repetidamente o teste compromete sua independência.",
      D: "INCORRETA. Preparação e rotulagem dos dados ocorrem antes ou durante a construção do conjunto de treinamento.",
      E: "INCORRETA. Excluir registros não corresponde à execução de um modelo."
    },
    regra: "Treinamento ajusta o modelo; inferência usa o modelo treinado para produzir saídas em novas entradas.",
    pegadinha: "Inferência não significa necessariamente raciocínio humano: é a etapa de aplicação do modelo, inclusive para classificação, previsão ou geração.",
    fonte: "Google, Machine Learning Glossary — Inference: https://developers.google.com/machine-learning/glossary#inference."
  },

{ id: "q-m5-09", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Métricas de avaliação",
    contexto: "Um modelo apresenta boa métrica média em um conjunto de teste, mas a equipe ainda precisa decidir se ele está pronto para apoiar um serviço público.",
    enunciado: "Qual procedimento oferece a avaliação mais responsável?",
    alternativas: [
      { letra: "A", texto: "Considerar a métrica média suficiente, sem verificar erros por classe, subgrupo ou cenário de uso." },
      { letra: "B", texto: "Escolher o modelo com maior número de parâmetros, pois complexidade comprova qualidade." },
      { letra: "C", texto: "Definir critérios alinhados ao uso, avaliar em dados adequados e não usados no ajuste, examinar tipos de erro e subgrupos relevantes e documentar limitações e monitoramento." },
      { letra: "D", texto: "Usar apenas os resultados do treino para evitar variações no conjunto de teste." },
      { letra: "E", texto: "Interpretar qualquer métrica alta como garantia de justiça, segurança e desempenho futuro." }
    ],
    gabarito: "C",
    justificativa: "A avaliação deve corresponder ao uso pretendido e considerar dados representativos, métricas adequadas, erros relevantes, possíveis diferenças entre subgrupos e limitações. O conjunto de teste deve permanecer separado do processo de ajuste e seleção, e o desempenho precisa ser acompanhado quando o sistema entra em operação, pois dados e condições podem mudar. Uma métrica isolada não prova justiça, segurança ou sucesso futuro.",
    analise: {
      A: "INCORRETA. Uma média pode ocultar erros graves em classes, subgrupos ou cenários específicos.",
      B: "INCORRETA. Maior complexidade não comprova melhor generalização nem adequação ao problema.",
      C: "CORRETA. A alternativa reúne critérios ligados ao uso, avaliação isolada, análise de erros e acompanhamento.",
      D: "INCORRETA. O desempenho de treino tende a ser otimista e não substitui avaliação em dados não usados no ajuste.",
      E: "INCORRETA. Métricas são evidências limitadas, não garantias de justiça, segurança ou estabilidade futura."
    },
    regra: "Avalie modelos contra critérios do uso real, com dados isolados e métricas adequadas; analise erros e acompanhe o desempenho em produção.",
    pegadinha: "Uma métrica alta não garante ausência de viés, segurança ou estabilidade após mudanças nos dados e no contexto.",
    fonte: "NIST, AI Risk Management Framework 1.0: https://www.nist.gov/itl/ai-risk-management-framework."
  },

  { id: "q-m5-10", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-1-topico-2", assunto: "5.1 — Definição de escopo e avaliação de sistemas de IA",
    contexto: "Uma equipe pretende adotar um sistema de IA para apoiar a triagem de solicitações em um serviço público.",
    enunciado: "Antes de colocar o sistema em uso, qual abordagem técnica é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Exigir que o sistema realize todas as tarefas humanas para considerá-lo tecnicamente válido." },
      { letra: "B", texto: "Definir tarefas e limites de uso, critérios de desempenho e riscos, e avaliar o sistema com dados adequados ao contexto pretendido." },
      { letra: "C", texto: "Dispensar avaliação quando o sistema apresenta bons resultados em exemplos escolhidos pela equipe." },
      { letra: "D", texto: "Presumir que um sistema de IA funciona sem dados, validação ou supervisão após a implantação." },
      { letra: "E", texto: "Usar a capacidade de conversar em vários idiomas como critério suficiente de qualidade para qualquer tarefa." }
    ],
    gabarito: "B",
    justificativa: "A avaliação de um sistema de IA deve partir de um caso de uso definido, critérios de desempenho verificáveis, dados pertinentes e análise de riscos e limitações. Não existe requisito geral de que todo sistema execute todas as tarefas humanas, e uma demonstração favorável ou capacidade linguística não substitui avaliação apropriada ao uso pretendido.",
    analise: {
      A: "INCORRETA. Um sistema pode ser projetado para uma tarefa delimitada; não precisa substituir todas as capacidades humanas.",
      B: "CORRETA. Escopo, critérios de desempenho, adequação dos dados e riscos devem ser definidos e avaliados para o contexto de uso.",
      C: "INCORRETA. Exemplos selecionados podem ser enviesados e não substituem uma avaliação planejada e representativa.",
      D: "INCORRETA. Necessidades de dados, validação, monitoramento e supervisão dependem do sistema e do risco; não podem ser presumidas ausentes.",
      E: "INCORRETA. Fluência linguística é apenas uma capacidade e não demonstra qualidade para tarefas não relacionadas."
    },
    regra: "Avalie sistemas de IA contra objetivos, dados, métricas, riscos e limites definidos para o caso de uso.",
    pegadinha: "Não trate 'IA completa' como uma categoria técnica universal: a adequação é relativa à tarefa, aos critérios e ao contexto de implantação.",
    fonte: "ISO/IEC 22989 — Artificial intelligence — Concepts and terminology."
  },

  /* ===================== 5.2 Aprendizado de Máquina (10 questões) ===================== */

  { id: "q-m5-11", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u2-t1-s1", assunto: "5.2 — Paradigmas de aprendizado",
    contexto: "Uma equipe tem três problemas: prever a categoria de um pedido com exemplos rotulados, encontrar grupos em dados sem rótulos e treinar um agente que escolhe ações com base em recompensas.",
    enunciado: "Qual associação entre problema e paradigma de aprendizado está correta?",
    alternativas: [
      { letra: "A", texto: "Prever categoria: não supervisionado; agrupar sem rótulos: reforço; escolher ações por recompensa: supervisionado." },
      { letra: "B", texto: "Prever categoria com alvos: supervisionado; buscar grupos sem alvos: não supervisionado; aprender ações por interação e recompensa: por reforço." },
      { letra: "C", texto: "Os três problemas são supervisionados porque todos usam dados." },
      { letra: "D", texto: "O paradigma é determinado apenas pelo tamanho do conjunto de dados." },
      { letra: "E", texto: "Aprendizado por reforço é sempre classificação com duas categorias." }
    ],
    gabarito: "B",
    justificativa: "No aprendizado supervisionado, exemplos são associados a alvos conhecidos. Métodos não supervisionados buscam estrutura sem receber esses alvos como resposta desejada. No aprendizado por reforço, um agente interage com um ambiente, escolhe ações e recebe recompensas ou penalidades que influenciam a política aprendida. Há métodos híbridos e variações, mas esses sinais de aprendizado distinguem os paradigmas no cenário apresentado.",
    analise: {
      A: "INCORRETA. Troca os três paradigmas e associa cada tarefa ao sinal de aprendizagem errado.",
      B: "CORRETA. As associações correspondem aos alvos conhecidos, à descoberta de estrutura e à interação com recompensa.",
      C: "INCORRETA. Usar dados não torna automaticamente o método supervisionado; importa o sinal de aprendizagem.",
      D: "INCORRETA. O tamanho da base não define o paradigma.",
      E: "INCORRETA. Reforço não se limita a classificação binária; envolve decisões sequenciais e recompensas."
    },
    regra: "Supervisionado aprende com alvos; não supervisionado procura estrutura sem alvos fornecidos; reforço aprende decisões por interação e recompensa.",
    pegadinha: "Não confunda 'há dados' com 'há rótulos': o tipo de sinal disponível é central para distinguir paradigmas.",
    fonte: "Murphy, K. P. — Machine Learning: A Probabilistic Perspective, MIT Press, 2012."
  },

  { id: "q-m5-12", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u2-t1-s2", assunto: "5.2 — Classificação e regressão",
    contexto: "Uma equipe treina dois modelos supervisionados: o primeiro prevê se uma solicitação deve ser encaminhada para revisão (sim/não); o segundo estima o tempo de atendimento em minutos.",
    enunciado: "Como as tarefas devem ser classificadas?",
    alternativas: [
      { letra: "A", texto: "Ambas são regressão porque o resultado é produzido por um modelo numérico." },
      { letra: "B", texto: "A primeira é classificação por prever categorias; a segunda é regressão por estimar uma quantidade numérica contínua." },
      { letra: "C", texto: "A primeira é não supervisionada porque tem duas classes; a segunda é reforço porque prevê tempo." },
      { letra: "D", texto: "A primeira é regressão e a segunda é classificação, independentemente da variável-alvo." },
      { letra: "E", texto: "A distinção depende da linguagem de programação e não do objetivo da previsão." }
    ],
    gabarito: "B",
    justificativa: "Classificação prevê categorias ou rótulos, como sim/não. Regressão estima uma quantidade numérica, como duração ou custo. O tipo de tarefa depende da variável-alvo e da formulação do problema, não da linguagem de programação. Em casos específicos, variáveis numéricas discretizadas podem ser tratadas como classes, mas isso altera a pergunta que o modelo responde.",
    analise: {
      A: "INCORRETA. O fato de um programa calcular números internamente não transforma a tarefa em regressão.",
      B: "CORRETA. O primeiro alvo é categórico e o segundo é uma quantidade numérica contínua.",
      C: "INCORRETA. Duas classes não tornam a tarefa não supervisionada, e prever duração não é aprendizado por reforço.",
      D: "INCORRETA. A alternativa inverte as tarefas e ignora o tipo de alvo.",
      E: "INCORRETA. O paradigma é determinado pela tarefa e pelos dados, não pela linguagem."
    },
    regra: "Classificação prevê categorias; regressão estima valores numéricos. Defina a tarefa a partir do alvo e do objetivo de negócio.",
    pegadinha: "Não classifique a tarefa pelo formato interno do código; observe o que se pretende prever e como o alvo foi definido.",
    fonte: "James et al., An Introduction to Statistical Learning, 2nd ed., 2021: https://www.statlearning.com/."
  },

  { id: "q-m5-13", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u2-t1-s3", assunto: "5.2 — Agrupamento e redução de dimensionalidade",
    contexto: "Uma equipe explora registros sem rótulos. Primeiro procura segmentos de comportamento; depois deseja representar cada registro com menos variáveis para visualização.",
    enunciado: "Qual afirmação diferencia corretamente as duas técnicas?",
    alternativas: [
      { letra: "A", texto: "Agrupamento exige necessariamente uma variável-alvo rotulada." },
      { letra: "B", texto: "Agrupamento e redução de dimensionalidade são sinônimos e sempre produzem a mesma saída." },
      { letra: "C", texto: "Redução de dimensionalidade sempre aumenta o número de atributos." },
      { letra: "D", texto: "Agrupamento reúne observações segundo similaridade; redução de dimensionalidade representa os dados em menos dimensões, podendo descartar parte da variação ou informação." },
      { letra: "E", texto: "Toda técnica de redução de dimensionalidade é não supervisionada e não envolve escolhas sobre informação preservada." }
    ],
    gabarito: "D",
    justificativa: "Agrupamento procura organizar observações em grupos segundo critérios de similaridade ou distância. Redução de dimensionalidade busca uma representação com menos dimensões, por exemplo para visualização, compressão ou preparação de dados. As técnicas podem ser combinadas, mas têm objetivos diferentes; a redução pode perder informação relevante e nem todo método de redução é necessariamente não supervisionado.",
    analise: {
      A: "INCORRETA. Muitos algoritmos de agrupamento operam sem rótulos de classe.",
      B: "INCORRETA. Os resultados e objetivos são diferentes, ainda que as técnicas possam ser usadas em sequência.",
      C: "INCORRETA. Redução de dimensionalidade busca diminuir o número de dimensões da representação.",
      D: "CORRETA. A alternativa descreve os objetivos distintos e reconhece o possível compromisso de informação na redução.",
      E: "INCORRETA. Existem métodos supervisionados de redução, e a informação preservada depende do método e dos dados."
    },
    regra: "Clustering busca grupos; redução de dimensionalidade busca uma representação menor. São objetivos distintos e podem ser combinados.",
    pegadinha: "PCA é um exemplo comum de redução não supervisionada, mas não representa todas as técnicas de redução de dimensionalidade.",
    fonte: "Jain, A. K. — Data Clustering: 50 Years Beyond K-means, Pattern Recognition Letters, 2010: https://doi.org/10.1016/j.patrec.2009.09.011."
  },

  { id: "q-m5-14", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Rotulagem, atributos e variável-alvo",
    contexto: "Para treinar um modelo que priorize solicitações, uma equipe revisa exemplos históricos, define a prioridade correta de cada caso e seleciona informações disponíveis no momento da triagem.",
    enunciado: "Qual alternativa distingue corretamente rótulo, atributo e variável-alvo?",
    alternativas: [
      { letra: "A", texto: "Rótulo é sempre uma variável de entrada; atributo é a resposta correta; variável-alvo é o identificador do registro." },
      { letra: "B", texto: "Rotulagem atribui a resposta esperada aos exemplos; atributos são informações de entrada; variável-alvo é o resultado que o modelo deve prever." },
      { letra: "C", texto: "Atributos são sempre dados pessoais, enquanto rótulos são sempre números contínuos." },
      { letra: "D", texto: "A variável-alvo deve ser incluída como atributo para que o modelo aprenda diretamente a resposta." },
      { letra: "E", texto: "Rotulagem é a etapa que criptografa todos os dados antes de treinar." }
    ],
    gabarito: "B",
    justificativa: "Rotulagem associa exemplos a respostas esperadas segundo critérios definidos. Atributos (features) são variáveis usadas como entradas; a variável-alvo é aquilo que se pretende prever e, em classificação, costuma representar a classe. A definição do alvo exige regras consistentes e controle de qualidade dos rótulos. Incluir no conjunto de entrada informação que revela diretamente o alvo causa vazamento e invalida a avaliação.",
    analise: {
      A: "INCORRETA. A alternativa troca os papéis de atributos, rótulo e alvo.",
      B: "CORRETA. A alternativa distingue a construção dos rótulos, as entradas e o resultado previsto.",
      C: "INCORRETA. Atributos podem ser numéricos, categóricos ou outros tipos; rótulos também variam conforme a tarefa.",
      D: "INCORRETA. Usar o alvo como entrada causa vazamento, não aprendizado válido.",
      E: "INCORRETA. Criptografia é uma técnica de proteção, não o significado de rotulagem."
    },
    regra: "Atributos = entradas; variável-alvo = resultado a prever; rotulagem = atribuição consistente das respostas esperadas aos exemplos.",
    pegadinha: "Se um atributo contém a resposta ou informação posterior ao resultado, o modelo pode aparentar ótimo desempenho por vazamento.",
    fonte: "Han, Kamber e Pei — Data Mining: Concepts and Techniques, 3rd ed., 2011."
  },

  { id: "q-m5-15", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Vazamento de dados (data leakage)",
    contexto: "Um analista normaliza a base inteira antes de separar treino e teste. Em outro experimento, usa uma variável calculada somente após a decisão que o modelo deveria prever.",
    enunciado: "Qual diagnóstico é mais adequado para esses experimentos?",
    alternativas: [
      { letra: "A", texto: "Nenhum envolve vazamento, porque os dados vieram do mesmo sistema institucional." },
      { letra: "B", texto: "Ambos podem introduzir vazamento: o primeiro permite que estatísticas do teste influenciem a transformação; o segundo usa informação futura em relação ao momento da previsão." },
      { letra: "C", texto: "Somente o segundo é vazamento; calcular estatísticas da base completa antes da divisão é sempre seguro." },
      { letra: "D", texto: "Vazamento significa apenas perder registros durante a importação." },
      { letra: "E", texto: "Vazamento é aceitável se melhorar a métrica no conjunto de teste." }
    ],
    gabarito: "B",
    justificativa: "Data leakage ocorre quando informação que não estaria legitimamente disponível no treinamento ou no instante de previsão influencia o ajuste ou a avaliação. Ajustar transformações usando a base completa antes da divisão permite que estatísticas do teste influenciem o pipeline; usar variáveis posteriores ao resultado cria vazamento temporal ou de alvo. Separe os conjuntos primeiro e ajuste as transformações apenas no treino, aplicando depois os parâmetros aprendidos aos dados de validação/teste.",
    analise: {
      A: "INCORRETA. A origem comum dos dados não impede vazamento entre treino, teste e futuro.",
      B: "CORRETA. Os dois cenários deixam informação inadequada influenciar a avaliação ou a previsão.",
      C: "INCORRETA. Estatísticas calculadas com o teste podem contaminar a avaliação, mesmo sem usar explicitamente o rótulo.",
      D: "INCORRETA. Perda de registros é outro problema; leakage é uso indevido de informação.",
      E: "INCORRETA. Melhorar artificialmente a métrica torna a estimativa menos confiável, não mais aceitável."
    },
    regra: "Separe treino e teste antes de ajustar transformações; use apenas atributos disponíveis no momento real da previsão.",
    pegadinha: "Vazamento pode ocorrer sem incluir diretamente o rótulo: estatísticas do teste ou dados do futuro também podem contaminar o processo.",
    fonte: "scikit-learn, Common pitfalls and recommended practices: https://scikit-learn.org/stable/common_pitfalls.html."
  },

  { id: "q-m5-16", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Métricas de classificação",
    contexto: "Um órgão avalia um classificador que identifica solicitações que exigem atendimento prioritário. Falsos negativos e falsos positivos têm custos diferentes.",
    enunciado: "Qual abordagem de avaliação é mais adequada?",
    alternativas: [
      { letra: "A", texto: "Usar somente acurácia, pois ela resume todos os tipos de erro independentemente da distribuição das classes." },
      { letra: "B", texto: "Escolher métricas alinhadas ao objetivo e aos custos dos erros, examinando a matriz de confusão e medidas como precisão, recall e especificidade." },
      { letra: "C", texto: "Usar F1 como garantia de que o modelo será justo e correto em produção." },
      { letra: "D", texto: "Substituir os dados de teste pelas métricas calculadas no conjunto de treino." },
      { letra: "E", texto: "Escolher a métrica com o valor numérico mais alto, sem considerar sua definição." }
    ],
    gabarito: "B",
    justificativa: "A matriz de confusão permite identificar verdadeiros e falsos positivos e negativos. Precisão (precision) é a proporção de previsões positivas que são corretas; recall/sensibilidade é a proporção de positivos reais identificados; especificidade é a proporção de negativos reais corretamente identificados. A escolha depende da tarefa, da distribuição dos dados e do custo de cada erro; nenhuma métrica isolada garante qualidade em produção.",
    analise: {
      A: "INCORRETA. Acurácia pode mascarar falhas na classe minoritária e não expressa todos os custos de erro.",
      B: "CORRETA. A avaliação combina medidas interpretáveis com o contexto e as consequências dos erros.",
      C: "INCORRETA. F1 resume precisão e recall por uma média harmônica, mas não garante justiça nem desempenho futuro.",
      D: "INCORRETA. Dados de treino servem ao ajuste; avaliação final exige dados não usados para treinar ou escolher o modelo.",
      E: "INCORRETA. Métricas diferentes têm definições e escalas distintas; maior valor não significa automaticamente melhor modelo."
    },
    regra: "Escolha métricas conforme objetivo, classes e custo dos erros; interprete matriz de confusão, precisão, recall e especificidade no contexto.",
    pegadinha: "Precisão (precision) não é sinônimo de acurácia; F1 não inclui diretamente verdadeiros negativos e não garante desempenho em produção.",
    fonte: "scikit-learn, Model evaluation: https://scikit-learn.org/stable/modules/model_evaluation.html."
  },

  { id: "q-m5-17", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Desbalanceamento de classes",
    contexto: "Em uma base de triagem, 98% dos registros pertencem à classe comum e 2% à classe que exige análise especializada.",
    enunciado: "Qual estratégia trata o desbalanceamento sem produzir uma avaliação artificialmente otimista?",
    alternativas: [
      { letra: "A", texto: "Avaliar somente a acurácia, pois a classe majoritária representa a maior parte dos registros." },
      { letra: "B", texto: "Aplicar oversampling antes de separar treino e teste, para garantir que todos os conjuntos tenham exemplos sintéticos semelhantes." },
      { letra: "C", texto: "Usar divisão de dados adequada, métricas por classe e, se necessário, técnicas de reamostragem ou ponderação aplicadas apenas ao treino, avaliando em dados representativos não usados no ajuste." },
      { letra: "D", texto: "Eliminar a classe minoritária para tornar o treinamento mais rápido." },
      { letra: "E", texto: "Duplicar a classe minoritária em todo o conjunto e reportar a acurácia resultante como desempenho esperado em produção." }
    ],
    gabarito: "C",
    justificativa: "Desbalanceamento é uma distribuição desigual entre classes e pode fazer a acurácia parecer alta mesmo quando o modelo falha na classe minoritária. A avaliação deve considerar métricas por classe, como precisão, recall, F1 e, conforme a tarefa, curvas precision-recall. Reamostragem e ponderação podem ajudar, mas devem ser ajustadas sem contaminar validação ou teste; o conjunto de avaliação deve representar o cenário de uso.",
    analise: {
      A: "INCORRETA. Acurácia isolada pode ocultar a baixa detecção da classe minoritária.",
      B: "INCORRETA. Reamostrar antes da divisão pode vazar informação e produzir estimativas otimistas.",
      C: "CORRETA. A estratégia separa treinamento e avaliação e mede o desempenho relevante para ambas as classes.",
      D: "INCORRETA. Eliminar a classe de interesse impede avaliar ou aprender a detectá-la.",
      E: "INCORRETA. Alterar artificialmente a distribuição de teste distorce a estimativa de desempenho no cenário real."
    },
    regra: "No desbalanceamento, use métricas por classe e mantenha reamostragem dentro do treino; avalie em dados representativos e isolados.",
    pegadinha: "Oversampling ou SMOTE antes da divisão pode causar vazamento; não altere a distribuição do teste para inflar métricas.",
    fonte: "Chawla et al., SMOTE: Synthetic Minority Over-sampling Technique (2002): https://doi.org/10.1613/jair.953; imbalanced-learn, Common pitfalls and recommended practices: https://imbalanced-learn.org/stable/common_pitfalls.html."
  },

  { id: "q-m5-18", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Métricas de regressão",
    contexto: "Um modelo prevê o tempo de atendimento em minutos. A equipe compara MAE e RMSE antes de selecionar uma versão para avaliação final.",
    enunciado: "Qual afirmação sobre MAE e RMSE é correta?",
    alternativas: [
      { letra: "A", texto: "MAE e RMSE são sempre iguais, independentemente dos erros observados." },
      { letra: "B", texto: "RMSE calcula a média simples dos erros com sinal e, por isso, erros positivos e negativos se cancelam." },
      { letra: "C", texto: "MAE calcula a média dos valores absolutos dos erros; RMSE calcula a raiz da média dos erros ao quadrado e penaliza relativamente mais erros grandes." },
      { letra: "D", texto: "Um RMSE menor prova que o modelo é imparcial e generaliza para qualquer população." },
      { letra: "E", texto: "As métricas de regressão dispensam comparação com uma linha de base e inspeção dos resíduos." }
    ],
    gabarito: "C",
    justificativa: "MAE é a média dos valores absolutos das diferenças entre previsões e valores observados. RMSE é a raiz quadrada da média dos erros ao quadrado; o quadrado dá maior peso relativo a erros de grande magnitude. Ambas são expressas na unidade da variável-alvo quando calculadas nessa escala, mas resumem aspectos distintos e devem ser interpretadas com a distribuição dos erros, uma linha de base e o contexto do problema.",
    analise: {
      A: "INCORRETA. MAE e RMSE podem diferir, especialmente quando há erros de magnitudes muito distintas.",
      B: "INCORRETA. RMSE não usa a média simples dos erros com sinal; ele eleva os erros ao quadrado antes da média.",
      C: "CORRETA. A alternativa apresenta as definições e a maior sensibilidade do RMSE a erros grandes.",
      D: "INCORRETA. Uma métrica menor, isoladamente, não demonstra ausência de viés nem generalização universal.",
      E: "INCORRETA. Linhas de base, validação e análise de resíduos ajudam a contextualizar o desempenho."
    },
    regra: "MAE = média dos erros absolutos; RMSE = raiz da média dos erros ao quadrado, mais sensível a erros grandes.",
    pegadinha: "RMSE não é a média simples dos erros; uma melhora agregada não revela, sozinha, viés, subgrupos problemáticos ou generalização.",
    fonte: "scikit-learn, Regression metrics: https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics."
  },

  { id: "q-m5-19", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "modulo-5-unidade-2-topico-2", assunto: "5.2 — Engenharia de atributos e vazamento de dados",
    contexto: "Uma equipe prepara dados para prever a concessão de um benefício. Um atributo foi calculado a partir de uma decisão registrada somente depois da concessão.",
    enunciado: "Qual procedimento é mais adequado ao desenvolver atributos para esse modelo?",
    alternativas: [
      { letra: "A", texto: "Manter o atributo posterior, pois qualquer variável correlacionada aumenta legitimamente a precisão." },
      { letra: "B", texto: "Criar ou transformar atributos disponíveis no momento da previsão, ajustar transformações usando somente dados de treino e verificar vazamento de informação." },
      { letra: "C", texto: "Criptografar todos os atributos, pois isso garante que o modelo não aprenderá padrões espúrios." },
      { letra: "D", texto: "Remover obrigatoriamente todo atributo categórico antes do treinamento." },
      { letra: "E", texto: "Calcular normalização com toda a base, incluindo teste, para garantir que as escalas sejam idênticas." }
    ],
    gabarito: "B",
    justificativa: "Engenharia de atributos inclui criar, selecionar ou transformar variáveis para representar melhor o problema. Os atributos devem estar disponíveis no instante real da previsão e não podem incorporar direta ou indiretamente informações posteriores ao resultado. Transformações que aprendem parâmetros, como imputação, normalização e seleção, devem ser ajustadas no treino e aplicadas aos demais conjuntos sem recalcular seus parâmetros a partir do teste.",
    analise: {
      A: "INCORRETA. Atributos posteriores ao resultado geram vazamento e estimativas irreais de desempenho.",
      B: "CORRETA. A alternativa considera disponibilidade temporal dos dados e separação correta entre treino e avaliação.",
      C: "INCORRETA. Criptografia protege confidencialidade em certos contextos, mas não corrige vazamento ou seleção inadequada de atributos.",
      D: "INCORRETA. Atributos categóricos podem ser codificados de forma apropriada ao modelo.",
      E: "INCORRETA. Ajustar transformações com o teste permite que informação do teste influencie o processo de treinamento."
    },
    regra: "Use atributos disponíveis no momento da previsão e ajuste transformações no treino; evite vazamento de alvo ou do conjunto de teste.",
    pegadinha: "Uma variável que melhora muito a métrica pode ser inválida se só existir depois do evento previsto.",
    fonte: "scikit-learn, Common pitfalls and recommended practices: https://scikit-learn.org/stable/common_pitfalls.html."
  },

  { id: "q-m5-20", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "avancado", topico: "modulo-5-unidade-2-topico-3", assunto: "5.2 — Avaliação de Desempenho",
    contexto: "Um serviço público classifica solicitações urgentes em uma base na qual apenas 1% dos casos são realmente urgentes. Um modelo que prevê todos os casos como não urgentes alcança 99% de acurácia, mas deixa passar todos os casos urgentes.",
    enunciado: "Qual conclusão é tecnicamente mais adequada para avaliar esse classificador?",
    alternativas: [
      { letra: "A", texto: "A acurácia de 99% demonstra que o modelo atende ao objetivo, mesmo sem identificar casos urgentes." },
      { letra: "B", texto: "A acurácia isolada é insuficiente; é necessário examinar recall da classe urgente e outras métricas alinhadas ao custo dos erros." },
      { letra: "C", texto: "O F1-score será necessariamente 99%, pois a acurácia é 99%." },
      { letra: "D", texto: "A especificidade será zero, porque o modelo não prevê nenhum caso urgente." },
      { letra: "E", texto: "O conjunto de teste deve ser descartado porque a distribuição das classes é desigual." }
    ],
    gabarito: "B",
    justificativa: "Como apenas 1% dos registros é urgente, prever todos como não urgentes produz 99% de acurácia, mas recall zero para a classe urgente: nenhum positivo real foi identificado. A avaliação deve incluir métricas por classe, como recall e precisão, e considerar os custos relativos de falsos negativos e falsos positivos. A métrica escolhida não deve ser interpretada isoladamente nem substituir a avaliação em dados adequados.",
    analise: {
      A: "INCORRETA. A acurácia elevada decorre da classe majoritária e oculta a falha total em identificar urgências.",
      B: "CORRETA. O recall da classe urgente revela que nenhum caso urgente foi encontrado; a escolha das métricas deve refletir o objetivo e o custo dos erros.",
      C: "INCORRETA. A acurácia não determina o F1-score. Neste exemplo, a precisão e o recall da classe urgente são zero ou indefinidos conforme a convenção de cálculo, e o F1 dessa classe é zero quando a convenção usual trata a precisão indefinida como zero.",
      D: "INCORRETA. Se todos os casos são previstos como negativos, todos os negativos reais são identificados; a especificidade é 100%, assumindo que há negativos reais.",
      E: "INCORRETA. Desbalanceamento não invalida automaticamente o conjunto de teste; exige desenho de avaliação e métricas adequados, mantendo uma amostra representativa do uso pretendido."
    },
    regra: "Em classes desbalanceadas, acurácia pode ocultar desempenho ruim na classe minoritária. Examine métricas por classe e o custo dos falsos positivos e falsos negativos.",
    pegadinha: "Uma taxa de acerto alta não prova utilidade: o modelo pode acertar quase sempre a classe majoritária e falhar justamente no evento que importa.",
    fonte: "Saito, T. & Rehmsmeier, M. — The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets, PLOS ONE, 2015: https://doi.org/10.1371/journal.pone.0118432."
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
    regra: "Temperatura: alta tende a aumentar a variabilidade; baixa tende a reduzir a aleatoriedade, mas não garante determinismo em toda configuração.",
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
    justificativa: "Delimitadores ajudam a distinguir instruções confiáveis de conteúdo fornecido como dado, mas não impedem sozinhos que o modelo siga instruções maliciosas inseridas no conteúdo. São uma camada de mitigação, combinada com controles de acesso, validação de saída e testes adversariais.",
    analise: {
      A: "CORRETA. Delimitação explícita pode reduzir a confusão entre instruções e dados, mitigando parte do risco; não é uma defesa suficiente por si só.",
      B: "INCORRETA. Delimitação não aumenta o custo.",
      C: "INCORRETA. Delimitação não elimina a necessidade de verificação humana.",
      D: "INCORRETA. Delimitação torna o modelo mais previsível, não indeterminístico.",
      E: "INCORRETA. Delimitação não reduz o tamanho necessário."
    },
    regra: "Delimitação = separar instrução e dado.",
    pegadinha: "Delimitação ajuda, mas não substitui defesa em camadas contra injeção de prompt.",
    fonte: "NIST — Adversarial Machine Learning, 2024."
  },

  { id: "q-m5-31", modulo: 5, formato: "mc", estilo: "cespe", origem: "autoral",
    nivel: "intermediario", topico: "m5-u4-t2-s1", assunto: "5.4 — Avaliação de prompts",
    contexto: "Uma equipe compara duas configurações de temperatura em um assistente de atendimento.",
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
