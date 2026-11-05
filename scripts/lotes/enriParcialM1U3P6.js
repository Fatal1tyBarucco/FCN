const enriParcialM1U3P6 = {
  "modulo-1-unidade-3-topico-6-sub-1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O Power Query resolve o problema da importação e limpeza repetível de dados externos no Excel: acessível por Dados > Obter Dados, conecta a fontes como CSV, web, banco de dados e pasta, aplica transformações (remover colunas, filtrar, definir tipo, mesclar, acrescentar) gravadas como etapas e entrega o resultado em planilha ou modelo de dados. A prova cobra a ferramenta e o comportamento corretos: afirmar que a atualização é automática ao mudar o arquivo-fonte, ou confundir Power Query com Power Pivot, muda o gabarito. Dominar o modelo de etapas e a linguagem M posiciona o aluno para itens de ETL introdutório.",
      "preRequisitos": [
        "Estrutura de dados do Excel (células, intervalos e referências A1 — tópico 1)",
        "Noção de tabela com cabeçalhos de coluna"
      ],
      "objetivosObservaveis": [
        "Importar uma fonte externa (CSV, web, banco de dados, pasta) com Dados > Obter Dados",
        "Aplicar transformações básicas: remover colunas, filtrar linhas e definir tipo de dado",
        "Explicar o modelo de etapas gravadas e a necessidade de executar Atualizar",
        "Posicionar o Power Query no fluxo ETL (extração, transformação, carregamento)"
      ],
      "competencias": [
        "Preparação de dados a partir de fontes externas",
        "Automação de rotina repetível de importação e limpeza"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-1-sub-2 (Tabelas estruturadas e referências estruturadas) — mesmo tópico, subtópico anterior da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Cenários de importação e limpeza de dados externos são objeto de avaliação nas questões de informática de concursos, pedindo a ferramenta e o comportamento corretos; o tema é classificado como de média relevância no programa de informática. A relevância estimada é qualitativa e decorre da centralidade do tema no conteúdo programático."
      }
    },
    "niveis": {
      "iniciante": "O iniciante importa um arquivo de texto ou CSV com Dados > Obter Dados > De Texto/CSV, abre o editor do Power Query por Transformar Dados e executa Fechar e Carregar para entregar o resultado numa planilha, sem aplicar transformações. Reconhece as fontes típicas: arquivo de texto/CSV, dados da web, banco de dados e pasta com vários arquivos. Entende que o arquivo-fonte não é alterado pelas transformações, que ocorrem na cópia em memória da consulta. O simulador Excel do projeto não executa Power Query (limitação declarada); o conteúdo é teórico para provas.",
      "intermediario": "O intermediário aplica transformações básicas no editor: remover colunas desnecessárias, filtrar linhas, alterar tipo de dados (texto, número, data), dividir e renomear colunas, mesclar consultas por coluna-chave com tipo de junção (interna ou esquerda) e acrescentar consultas empilhando linhas de fontes com mesma estrutura. Define o tipo de dado como etapa obrigatória para cálculo correto e executa Atualizar para reaplicar as etapas gravadas após trocar o arquivo-fonte pela nova versão mensal.",
      "avancado": "O avançado entende que cada transformação é gravada como etapa da consulta, reaplicada em ordem sempre que os dados são atualizados, o que torna a preparação repetível para um novo arquivo de mesma estrutura. Conhece a linguagem M, que descreve as etapas por trás da interface gráfica, e diferencia Power Query (obtém e transforma dados) de Power Pivot (modela e calcula sobre o modelo de dados). Para limpar e estruturar um CSV recebido mensalmente, o gabarito é Power Query, não Power Pivot.",
      "especialista": "O especialista desenha uma rotina mensal de importação com pasta de arquivos padronizada, explica por que a preparação gravada elimina o retrabalho manual, diagnostica erros de tipo de dado que quebram cálculos e declara corretamente as limitações: a atualização não é automática ao mudar o arquivo-fonte (é preciso executar Atualizar), a disponibilidade de conectores depende da versão/plano, e o simulador do projeto não executa Power Query."
    },
    "comparacoes": [
      {
        "tema": "Power Query versus Power Pivot",
        "a": {
          "rotulo": "Power Query",
          "texto": "Obtém e transforma dados externos (ETL de entrada): importa de CSV, web, banco de dados e pasta, aplica transformações gravadas e carrega o resultado em planilha ou modelo de dados. Para limpar e estruturar um CSV recebido mensalmente, o gabarito é Power Query."
        },
        "b": {
          "rotulo": "Power Pivot",
          "texto": "Modela e calcula sobre o modelo de dados do Excel, criando relacionamentos entre tabelas e medidas com DAX. Não é a ferramenta de importação e limpeza repetível de fontes externas."
        },
        "diferencaGabarito": "Power Query importa e transforma (entrada de dados); Power Pivot modela e calcula (modelo de dados). Questão sobre limpeza repetível de CSV aponta para Power Query."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O Power Query atualiza automaticamente os dados quando o arquivo-fonte muda.",
        "porqueErrada": "Essa afirmação generaliza o recálculo automático de fórmulas de planilha ao Power Query. As etapas gravadas são reaplicadas apenas ao executar Atualizar (Dados > Atualizar Tudo); sem essa ação, a carga permanece com os dados anteriores.",
        "versaoCorreta": "Incorreto: as etapas gravadas só voltam a ser aplicadas quando se executa Atualizar; sem isso a carga permanece no estado anterior e o arquivo-fonte não é tocado."
      },
      {
        "afirmacaoEquivocada": "Power Query e Power Pivot são a mesma ferramenta do ecossistema do Excel.",
        "porqueErrada": "Troca as duas ferramentas do ecossistema de BI. Power Query obtém e transforma dados externos; Power Pivot modela e calcula sobre o modelo de dados. Confundi-las muda o gabarito de questões que pedem a ferramenta de limpeza repetível.",
        "versaoCorreta": "Incorreto: Power Query obtém e transforma dados; Power Pivot modela e calcula sobre o modelo de dados. Para limpar e estruturar um CSV mensal, o gabarito é Power Query."
      },
      {
        "afirmacaoEquivocada": "As transformações do Power Query alteram o arquivo-fonte original.",
        "porqueErrada": "Confunde leitura com edição. As transformações ocorrem na cópia em memória da consulta; o arquivo-fonte permanece intacto e só é reconsultado ao executar Atualizar.",
        "versaoCorreta": "Incorreto: as transformações ocorrem na cópia em memória da consulta; o arquivo-fonte permanece intacto e não é editado pelo Power Query."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Obter Dados",
        "Editor do Power Query",
        "Etapas gravadas da consulta",
        "Tipos de dado (texto, número, data)",
        "Mesclar e acrescentar consultas",
        "Fechar e Carregar",
        "Linguagem M"
      ],
      "regras": [
        "Rotina repetível = consulta gravada + executar Atualizar após trocar o arquivo-fonte.",
        "Junção por coluna-chave = mesclar consultas, escolhendo tipo de junção (interna ou esquerda).",
        "Empilhar fontes com mesma estrutura = acrescentar consultas.",
        "Definir tipo de dado é etapa obrigatória para cálculo correto."
      ],
      "comparacoes": [
        "Power Query importa e transforma (ETL de entrada); Power Pivot modela e calcula sobre o modelo de dados."
      ],
      "fluxos": [
        "Conectar à fonte (Dados > Obter Dados) > Transformar Dados (abre o editor) > aplicar transformações > Fechar e Carregar (entrega resultado em planilha ou modelo de dados)."
      ],
      "excecoes": [
        "A atualização não é automática ao mudar o arquivo-fonte: é preciso executar Atualizar.",
        "Conectores e disponibilidade dependem da versão/plano do Excel.",
        "O simulador Excel do projeto não executa Power Query (limitação declarada)."
      ],
      "palavrasChave": [
        "Power Query",
        "Obter Dados",
        "ETL",
        "linguagem M",
        "mesclar",
        "acrescentar",
        "tipo de dado",
        "Atualizar"
      ],
      "checklist": [
        "Importo fonte externa com Dados > Obter Dados",
        "Aplico transformações básicas (remover colunas, filtrar, definir tipo)",
        "Explico o modelo de etapas gravadas e a atualização",
        "Distingo Power Query de Power Pivot",
        "Não prometo atualização automática ao mudar o arquivo-fonte"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Importar um arquivo CSV de vendas e remover as colunas vazias antes de carregar o resultado na planilha.",
        "dados": "Arquivo de texto/CSV de vendas; colunas vazias a remover; ação: Dados > Obter Dados > De Arquivo > De Texto/CSV > selecionar arquivo > Transformar Dados > Remover Colunas > Fechar e Carregar.",
        "conceitos": [
          "Obter Dados",
          "Remover colunas",
          "Fechar e Carregar"
        ],
        "estrategia": "Conectar ao CSV por Dados > Obter Dados > De Texto/CSV, abrir o editor pelo botão Transformar Dados, selecionar as colunas vazias e removê-las, então carregar o resultado limpo na planilha como tabela, guardando as etapas aplicadas na consulta.",
        "execucao": [
          "1. Selecionar Dados > Obter Dados > De Arquivo > De Texto/CSV e escolher o arquivo de vendas.",
          "2. Clicar em Transformar Dados para abrir o editor do Power Query.",
          "3. No editor, selecionar as colunas vazias e aplicar Remover Colunas.",
          "4. Clicar em Fechar e Carregar para entregar o resultado numa planilha.",
          "5. Confirmar que a consulta guarda as etapas aplicadas para reuso."
        ],
        "resultado": "O CSV é importado, as colunas vazias são removidas e o resultado chega à planilha como uma tabela, com a consulta armazenando as etapas de limpeza aplicadas.",
        "justificativa": "O resultado é o gabarito porque o fluxo Dados > Obter Dados > Transformar Dados > Fechar e Carregar é o procedimento padrão do Power Query para importar e limpar dados externos, mantendo a consulta reutilizável.",
        "errosFrequentes": [
          "Achar que o resultado aparece direto na célula sem passar por Transformar Dados e Fechar e Carregar.",
          "Esquecer que as etapas ficam gravadas na consulta e podem ser reaplicadas com Atualizar."
        ],
        "variacao": "Importar um CSV de estoque e remover colunas em branco antes de carregar, mantendo a consulta para reaplicar no próximo arquivo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Todo mês chega um CSV de execuções com colunas extras e datas em texto; a análise precisa apenas de Data, Valor e Status, com Data como tipo data.",
        "dados": "CSV mensal de execuções com colunas extras; colunas desejadas: Data, Valor e Status; Data inicialmente em texto e deve ser convertida para tipo data; ação repetida todo mês após substituir o arquivo.",
        "conceitos": [
          "Remover colunas",
          "Definir tipo de dado",
          "Etapas gravadas",
          "Atualizar consulta"
        ],
        "estrategia": "Criar a consulta uma vez: Obter Dados > De Texto/CSV > Transformar Dados > remover colunas desnecessárias > selecionar Data > Alterar Tipo > Data > conferir tipos de Status e Valor > Fechar e Carregar. No mês seguinte, substituir o arquivo pela nova versão e executar Atualizar para reaplicar remoção e conversão de tipo automaticamente.",
        "execucao": [
          "1. Executar Dados > Obter Dados > De Texto/CSV e selecionar o CSV de execuções.",
          "2. No editor, remover as colunas desnecessárias, mantendo Data, Valor e Status.",
          "3. Selecionar a coluna Data e aplicar Alterar Tipo > Data.",
          "4. Conferir os tipos de Valor e Status e clicar em Fechar e Carregar.",
          "5. No mês seguinte, substituir o arquivo-fonte pela nova versão e clicar em Dados > Atualizar Tudo para reaplicar as etapas gravadas."
        ],
        "resultado": "A consulta entrega apenas Data (tipo data), Valor e Status; ao trocar o arquivo-fonte e clicar em Atualizar, as etapas gravadas reaplicam a remoção de colunas e a conversão de tipo sem retrabalho manual.",
        "justificativa": "O gabarito está na repetibilidade da consulta gravada: cada etapa fica registrada e é reaplicada em ordem ao executar Atualizar, então o novo CSV de mesma estrutura recebe automaticamente as mesmas limpezas.",
        "errosFrequentes": [
          "Achar que a conversão de tipo é opcional e pode ser feita depois na planilha, sem definir Data como tipo data na consulta.",
          "Esperar que o Excel atualize a tabela sozinha ao trocar o arquivo, sem executar Atualizar Tudo."
        ],
        "variacao": "Aplicar o mesmo procedimento a um CSV mensal de pagamentos, mantendo apenas Data, Pagamento e Situação, com Data como tipo data, e atualizar no mês seguinte."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que o Power Query atualiza automaticamente os dados sempre que o arquivo-fonte muda, sem qualquer ação do usuário.",
        "dados": "Cenário: arquivo-fonte CSV alterado externamente; afirmação do usuário: atualização é automática; correção: as etapas gravadas são reaplicadas apenas ao executar Atualizar (Dados > Atualizar Tudo).",
        "conceitos": [
          "Etapas gravadas da consulta",
          "Executar Atualizar",
          "Atualização não é automática"
        ],
        "estrategia": "Explicar que a atualização não é automática: a consulta reflete o arquivo-fonte apenas quando o usuário executa Atualizar (Dados > Atualizar Tudo), que reaplica as etapas gravadas em ordem; prometer atualização automática é a pegadinha clássica da prova.",
        "execucao": [
          "1. Identificar a afirmação do usuário: o Power Query atualiza automaticamente ao mudar o arquivo-fonte.",
          "2. Confrontar com o comportamento real: as etapas gravadas só são reaplicadas ao executar Atualizar.",
          "3. Concluir que, sem a ação do usuário, a carga permanece com os dados anteriores.",
          "4. Corrigir: é necessário executar Dados > Atualizar Tudo para refletir o novo arquivo-fonte."
        ],
        "resultado": "Incorreto: as etapas gravadas são reaplicadas ao executar Atualizar; sem essa ação, a carga permanece no estado anterior e o arquivo-fonte nunca é alterado pelas transformações.",
        "justificativa": "O gabarito considera que a atualização exige ação explícita (Atualizar Tudo); não há recálculo automático ao mudar o arquivo-fonte, diferentemente de fórmulas de planilha.",
        "errosFrequentes": [
          "Generalizar o recálculo automático de fórmulas de planilha para o Power Query, prometendo atualização espontânea.",
          "Achar que alterar o arquivo-fonte externo basta para a planilha carregada refletir os novos dados."
        ],
        "variacao": "Um usuário afirma que, ao editar o CSV de origem, a tabela carregada pelo Power Query se atualiza sozinha; a resposta correta é que só se atualiza com Atualizar Tudo."
      }
    ]
  },
  "modulo-1-unidade-3-topico-6-sub-2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A proteção de planilhas e pastas de trabalho, o desempenho de fórmulas, a depuração de erros e a compatibilidade entre versões são itens que integram o conteúdo programático de informática para concursos. Saber distinguir proteger planilha (bloqueia edição de células) de proteger pasta de trabalho (bloqueia alteração de estrutura), evitar fórmulas voláteis excessivas (AGORA, ALEATÓRIO), usar Rastrear Precedentes/Dependentes e Avaliar Fórmula, e conhecer a diferença entre PROCV (disponível em todas as versões) e PROCX (versões recentes) evita erros de gabarito. Conhecer o escopo do simulador Excel do projeto (suporta referências A1 e intervalos; não suporta tabelas estruturadas) evita afirmar suporte inexistente.",
      "preRequisitos": [
        "Estrutura de dados do Excel (células, intervalos e referências A1 — tópico 1)",
        "Noção de fórmulas e funções básicas do Excel"
      ],
      "objetivosObservaveis": [
        "Diferenciar proteger planilha de proteger pasta de trabalho",
        "Identificar práticas de desempenho: evitar fórmulas voláteis excessivas e limitar intervalos inteiros (A:A)",
        "Usar ferramentas de depuração: Rastrear Precedentes/Dependentes e Avaliar Fórmula",
        "Diferenciar PROCV e PROCX por disponibilidade de versão",
        "Declarar corretamente o escopo e as limitações do simulador Excel do projeto"
      ],
      "competencias": [
        "Proteção de dados e estrutura de arquivos do Excel",
        "Otimização de desempenho e depuração de fórmulas",
        "Comunicação honesta de limitações de ferramenta (simulador)"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "modulo-1-unidade-3-topico-6-sub-1 (Power Query: importação, limpeza e transformação de dados) — mesmo tópico, subtópico anterior da unidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Proteção de planilhas, desempenho de fórmulas, depuração e compatibilidade de funções são objeto de avaliação em questões de informática de concursos; o tema é classificado como de média relevância no conteúdo programático de informática. Trata-se de estimativa pedagógica qualitativa, e não de frequência estatística comprovada."
      }
    },
    "niveis": {
      "iniciante": "O iniciante entende que proteger planilha impede a edição de células bloqueadas, enquanto proteger pasta de trabalho impede a alteração da estrutura (inserir, excluir, renomear ou mover planilhas). No desempenho, aprende a evitar fórmulas voláteis excessivas como AGORA e ALEATÓRIO, que recalculam a cada alteração, e a usar tabelas estruturadas e limitar intervalos inteiros (A:A). Na depuração, conhece Rastrear Precedentes/Dependentes e Avaliar Fórmula. Na compatibilidade, sabe que PROCV está disponível em todas as versões e PROCX em versões recentes (Microsoft 365/Excel 2021+). O simulador Excel do projeto suporta referências A1 e intervalos, mas não tabelas estruturadas (limitação declarada).",
      "intermediario": "O intermediário aplica proteção de planilha selecionando o intervalo editável (ex.: B2:B10), desmarcando Bloqueada em Formatar Células > Proteção e ativando Revisar > Proteger Planilha (senha opcional). Para desempenho, substitui fórmulas voláteis excessivas por alternativas estáveis e evita referências a colunas inteiras (A:A). Na depuração, usa Rastrear Precedentes para ver de onde uma célula recebe valores, Rastrear Dependentes para ver quem depende dela e Avaliar Fórmula para percorrer o cálculo passo a passo. Na compatibilidade, escolhe PROCV quando a planilha deve abrir em versões antigas e PROCX apenas em versões recentes.",
      "avancado": "O avançado combina proteção de estrutura de pasta de trabalho com proteção de células específicas, diagnostica lentidão de planilhas causada por fórmulas voláteis e intervalos inteiros, e corrige erros de fórmula usando Avaliar Fórmula e a verificação de erros. Diferencia erros comuns (#REF!, #VALOR!, #N/D, #DIV/0!) e sabe que PROCX foi introduzido em versões recentes (Microsoft 365/Excel 2021+), enquanto PROCV é universal. Declara corretamente que o simulador do projeto suporta SOMA, MÉDIA, MEDIANA, MÁXIMO, MÍNIMO, CONT.VALORES, SE, SES, E, OU, NÃO, SEERRO, CONT.SE, CONT.SES, SOMASE, SOMASES, MÉDIASE, PROCV, PROCH, PROCX, CORRESP, ÍNDICE, HOJE, operadores aritméticos/relacionais/lógicos/texto e referências A1, mas não suporta tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, spilling, LET/LAMBDA, formatação de célula nem arquivos externos.",
      "especialista": "O especialista modela planilhas protegidas com células de entrada delimitadas, audita o desempenho eliminando fórmulas voláteis e referências a colunas inteiras, depura fórmulas complexas com precedentes e dependentes, escolhe funções compatíveis com a versão alvo do Excel e documenta honestamente as limitações do simulador (não testado em navegador real; verificado com node --check e smoke test em Node/vm). Orienta outros usuários sobre a diferença entre proteger planilha e proteger pasta de trabalho e sobre o escopo real do simulador: apenas referências A1 e intervalos, sem tabelas estruturadas nem nomes definidos."
    },
    "comparacoes": [
      {
        "tema": "Proteger planilha versus proteger pasta de trabalho",
        "a": {
          "rotulo": "Proteger planilha",
          "texto": "Impede a edição de células bloqueadas na planilha ativa; permite definir quais células podem ser editadas (desmarcando Bloqueada em Formatar Células > Proteção) e pode exigir senha opcional em Revisar > Proteger Planilha."
        },
        "b": {
          "rotulo": "Proteger pasta de trabalho",
          "texto": "Impede a alteração da estrutura do arquivo: inserir, excluir, renomear ou mover planilhas. Não controla a edição de células individuais, apenas a estrutura da pasta de trabalho."
        },
        "diferencaGabarito": "Proteger planilha controla edição de células; proteger pasta de trabalho controla alteração da estrutura (planilhas). São ações distintas com finalidades diferentes."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "O simulador Excel do projeto executa tabelas estruturadas (Tabela[Coluna]).",
        "porqueErrada": "Incorreto: o escopo documentado do simulador Excel cobre funções, operadores e referências A1 com intervalos, mas deixa de fora tabelas estruturadas e nomes definidos; qualquer tentativa de usar Tabela[Coluna] no simulador resulta em erro de entrada, pois esse recurso não faz parte do que o simulador se propõe a executar.",
        "versaoCorreta": "Incorreto: o simulador suporta apenas referências A1 e intervalos; tabelas estruturadas estão fora do escopo documentado (limitação declarada em assets/js/simulators.js)."
      },
      {
        "afirmacaoEquivocada": "PROCX está disponível em todas as versões do Excel, igual ao PROCV.",
        "porqueErrada": "PROCX foi introduzido em versões recentes (Microsoft 365/Excel 2021+); PROCV está disponível em todas as versões. Afirmar que PROCX é universal muda o gabarito de questões de compatibilidade de versão.",
        "versaoCorreta": "Incorreto: PROCX está disponível apenas em versões recentes (Microsoft 365/Excel 2021+); PROCV é a função disponível em todas as versões."
      },
      {
        "afirmacaoEquivocada": "As transformações do Power Query alteram o arquivo-fonte original.",
        "porqueErrada": "Não se aplica a este subtópico (pertence ao Power Query, sub-1); incluído apenas como exemplo de confusão entre leitura e edição que não deve ser transferida para proteção/desempenho.",
        "versaoCorreta": "Não se aplica a este subtópico."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Proteger planilha",
        "Proteger pasta de trabalho",
        "Fórmula volátil (AGORA, ALEATÓRIO)",
        "Rastrear Precedentes/Dependentes",
        "Avaliar Fórmula",
        "PROCV versus PROCX",
        "Simulador Excel (escopo e limitações)"
      ],
      "regras": [
        "Proteger planilha bloqueia edição de células bloqueadas; proteger pasta de trabalho bloqueia alteração de estrutura.",
        "Evitar fórmulas voláteis excessivas (AGORA, ALEATÓRIO) para preservar desempenho.",
        "Limitar intervalos inteiros (A:A) e preferir tabelas estruturadas para desempenho.",
        "Usar PROCV para compatibilidade com todas as versões; PROCX apenas em versões recentes."
      ],
      "comparacoes": [
        "Proteger planilha controla edição de células; proteger pasta de trabalho controla alteração da estrutura."
      ],
      "fluxos": [
        "Selecionar intervalo editável (B2:B10) > Formatar Células > Proteção > desmarcar Bloqueada > Revisar > Proteger Planilha (senha opcional)."
      ],
      "excecoes": [
        "O simulador do projeto não suporta tabelas estruturadas, nomes definidos, R1C1, matrizes dinâmicas, spilling, LET/LAMBDA, formatação de célula nem arquivos externos; cada um desses itens está fora do escopo e o simulador exibe erro de entrada quando tentado.",
        "PROCX não está disponível em versões antigas do Excel (não é universal como o PROCV).",
        "O simulador não foi testado em navegador real (verificado com node --check e smoke test em Node/vm)."
      ],
      "palavrasChave": [
        "proteger planilha",
        "proteger pasta de trabalho",
        "desempenho",
        "fórmula volátil",
        "Rastrear Precedentes",
        "Avaliar Fórmula",
        "PROCV",
        "PROCX",
        "simulador",
        "compatibilidade"
      ],
      "checklist": [
        "Distingo proteger planilha de proteger pasta de trabalho",
        "Evito fórmulas voláteis excessivas (AGORA, ALEATÓRIO)",
        "Uso Rastrear Precedentes/Dependentes e Avaliar Fórmula para depurar",
        "Escolho PROCV para compatibilidade com todas as versões",
        "Declaro que o simulador não suporta tabelas estruturadas nem nomes definidos",
        "Lembro que PROCX é só para versões recentes"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Depurar uma fórmula da planilha que retorna o erro #REF!, indicando referência inválida a uma célula excluída ou movida, e corrigi-la.",
        "dados": "A fórmula exibe o erro #REF! porque aponta para uma célula excluída ou movida; a ação correta é abrir Fórmulas > Rastrear Erro > Rastrear Precedentes para identificar a referência inválida e corrigi-la.",
        "conceitos": [
          "Depuração de fórmulas",
          "Rastrear Precedentes",
          "Erro #REF!"
        ],
        "estrategia": "Usar Fórmulas > Rastrear Erro > Rastrear Precedentes para ver de onde a célula com erro recebe valores, identificar a referência inválida (célula excluída ou movida) e corrigir a fórmula apontando para um endereço válido.",
        "execucao": [
          "1. Selecionar a célula que exibe o erro #REF!.",
          "2. Ir em Fórmulas > Rastrear Erro > Rastrear Precedentes.",
          "3. Observar as setas que apontam para as células de origem da fórmula.",
          "4. Identificar a célula de referência inválida (excluída ou movida).",
          "5. Corrigir a fórmula substituindo a referência inválida por um endereço válido."
        ],
        "resultado": "A referência inválida é identificada pelas setas de precedentes e corrigida, eliminando o erro #REF! e restaurando o cálculo da fórmula.",
        "justificativa": "O gabarito está em usar a ferramenta de depuração correta (Rastrear Precedentes) para localizar a origem do erro de referência, em vez de digitar a fórmula novamente às cegas.",
        "errosFrequentes": [
          "Achar que #REF! significa erro de sintaxe de função, quando na verdade indica referência inválida a célula excluída.",
          "Tentar corrigir reescrevendo a fórmula inteira sem identificar qual referência ficou inválida."
        ],
        "variacao": "Depurar uma fórmula que retorna #VALOR! usando Rastrear Dependentes para ver quem depende da célula com erro e corrigir o tipo de dado envolvido."
      },
      {
        "tipo": "aplicacao",
        "problema": "Proteger uma planilha permitindo edição apenas do intervalo B2:B10, com o restante das células bloqueado.",
        "dados": "Neste exemplo, o intervalo que deve permanecer editável é B2:B10, enquanto todas as demais células da planilha ficam bloqueadas; o procedimento é selecionar B2:B10, abrir Formatar Células > Proteção, desmarcar a opção Bloqueada e, em seguida, ativar Revisar > Proteger Planilha (com senha opcional).",
        "conceitos": [
          "Proteger planilha",
          "Célula bloqueada/desbloqueada",
          "Formatar Células > Proteção"
        ],
        "estrategia": "Selecionar o intervalo que deve permanecer editável (B2:B10), abrir Formatar Células > Proteção e desmarcar a opção Bloqueada para essas células, então ativar Revisar > Proteger Planilha (com ou sem senha) para bloquear todas as outras células.",
        "execucao": [
          "1. Selecionar o intervalo B2:B10 na planilha.",
          "2. Abrir Formatar Células > guia Proteção e desmarcar a opção Bloqueada para essas células.",
          "3. Clicar em OK para aplicar a desbloqueio de B2:B10.",
          "4. Ir em Revisar > Proteger Planilha e definir senha opcional.",
          "5. Confirmar que apenas B2:B10 pode ser editado; as demais células ficam bloqueadas."
        ],
        "resultado": "Apenas o intervalo B2:B10 permanece editável; todas as outras células da planilha ficam bloqueadas após a proteção ser ativada.",
        "justificativa": "O gabarito está no procedimento correto: desbloquear primeiro as células que devem ser editáveis e só então proteger a planilha, que bloqueia o restante por padrão.",
        "errosFrequentes": [
          "Esquecer de desmarcar Bloqueada em B2:B10 antes de proteger, o que deixaria todo o intervalo bloqueado.",
          "Proteger a planilha sem definir quais células podem ser editadas, bloqueando tudo indiscriminadamente."
        ],
        "variacao": "Proteger uma planilha permitindo edição apenas de C5:C15, bloqueando o restante das células."
      },
      {
        "tipo": "erro",
        "problema": "Um usuário afirma que o simulador Excel do projeto executa tabelas estruturadas (referências como Tabela[Coluna]).",
        "dados": "Afirmação do usuário: o simulador executa tabelas estruturadas; correção: o simulador suporta apenas referências A1 e intervalos; tabelas estruturadas estão fora do escopo documentado (assets/js/simulators.js).",
        "conceitos": [
          "Tabelas estruturadas",
          "Limitação do simulador",
          "Referências A1 versus referências estruturadas"
        ],
        "estrategia": "Explicar que o simulador Excel documentado suporta apenas referências A1 (relativas, absolutas e mistas) e intervalos; tabelas estruturadas (Tabela[Coluna]), nomes definidos, R1C1 e matrizes dinâmicas estão fora do escopo e produzem erro de entrada, portanto a afirmação do usuário é incorreta.",
        "execucao": [
          "1. Identificar a afirmação: o simulador executa tabelas estruturadas (Tabela[Coluna]).",
          "2. Consultar o escopo documentado do simulador (assets/js/simulators.js): suporta referências A1 e intervalos.",
          "3. Constatar que tabelas estruturadas estão na lista de não suportados (limitação declarada).",
          "4. Concluir que a afirmação é incorreta e o simulador rejeitaria referências como Tabela[Coluna]."
        ],
        "resultado": "Incorreto: apenas referências A1 e intervalos são suportados pelo simulador; tabelas estruturadas estão fora do escopo documentado (assets/js/simulators.js) e geram erro de entrada.",
        "justificativa": "O gabarito considera o escopo real do simulador: apenas referências A1 e intervalos são suportados; tabelas estruturadas produzem erro de entrada, então a afirmação do usuário não procede.",
        "errosFrequentes": [
          "Assumir que, porque o Excel real suporta tabelas estruturadas, o simulador do projeto também suporta.",
          "Confundir referências A1 (suportadas) com referências estruturadas Tabela[Coluna] (não suportadas)."
        ],
        "variacao": "Um usuário afirma que o simulador executa nomes definidos e matrizes dinâmicas; a resposta correta é que ambos estão fora do escopo documentado (limitação declarada)."
      }
    ]
  }
};
