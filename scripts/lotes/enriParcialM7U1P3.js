const enriParcialM7U1P3 = {
  "m7-u1-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O nível de mensuração determina quais estatísticas são legítimas: em nominal valem contagem e moda; em ordinal acrescenta-se a mediana; só em discreto e contínuo valem média e desvio padrão. A pegadinha de prova está no zero da escala de intervalo, que proíbe afirmar que 20 °C é o dobro de 10 °C.",
      "preRequisitos": [
        "Noção de categoria e de ordem entre categorias",
        "Cálculo de média, mediana e moda",
        "Diferença entre contagem e medição, observada no subtópico anterior da unidade."
      ],
      "objetivosObservaveis": [
        "Determinar o nível de mensuração de uma variável a partir do significado de suas distâncias",
        "Indicar quais medidas de tendência central e de dispersão são legítimas em cada nível",
        "Reconhecer a escala de intervalo e nela recusar operações de razão"
      ],
      "competencias": [
        "Seleção da medida estatística compatível com a escala da variável",
        "Argumentação sobre zero de convenção e zero de razão"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t2-s2 (Dados qualitativos e quantitativos) — base da distinção entre discreto e contínuo",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — a escala só é analisável se o conjunto estiver acessível",
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — escala, unidade e regra de cálculo são metadados de negócio"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de estatística em editais de concurso; o tema aparece em itens sobre estatística legítima por escala e sobre o erro de razão aplicado a temperatura em Celsius."
      }
    },
    "niveis": {
      "iniciante": "No nível nominal as categorias não têm ordem — UF, gênero informado, espécie de trâmite — e valem apenas contagem, frequência e moda. No ordinal há ordem, mas as distâncias entre graus não são comparáveis — satisfação de ruim a bom, escolaridade por grau, faixa de pontuação — e à moda soma-se a mediana. No discreto a contagem tem ordem e distâncias iguais, e no contínuo a medição em intervalo admite toda a estatística descritiva.",
      "intermediario": "A média exige suposição que a escala ordinal não garante: somar graus pressupõe distâncias iguais entre eles. Em discreto e contínuo, média, mediana e desvio padrão são legítimos porque a diferença de um valor significa o mesmo em toda a escala. O zero diferencia razão de intervalo: em peso ele é ausência de quantidade, e em Celsius é ponto de convenção, o que proíbe dizer que 20 °C é o dobro de 10 °C.",
      "avancado": "A decisão em prova começa pela pergunta sobre o significado da diferença entre dois valores: se ela não significa o mesmo em toda a escala, a variável está no ordinal ou abaixo. Aplicar estatística acima do nível da variável produz número sem interpretação, e o resultado costuma parecer razoável, o que torna o item difícil. Em faixa de pontuação, a mediana é sempre defensável, enquanto a média depende de suposição adicional declarada.",
      "especialista": "Na prática de relatório, o nível de mensuração deve constar do metadado de negócio, junto da unidade e da regra de cálculo, para que ninguém aplique média a categórica. A auditoria de indicador verifica se a medida usada é compatível com a escala e se as razões proclamadas — dobro, metade, triplo — têm zero absoluto por fundamento. Temperatura em Celsius e ano-calendário exigem diferenças; proporção exige escala Kelvin ou contagem."
    },
    "comparacoes": [
      {
        "tema": "Escala de intervalo versus escala de razão: o papel do zero",
        "a": {
          "rotulo": "Intervalo (Celsius)",
          "texto": "Zero é ponto de convenção, não ausência da grandeza; diferenças são válidas, mas dobro e metade não têm significado."
        },
        "b": {
          "rotulo": "Razão (Kelvin, peso)",
          "texto": "Zero indica ausência de quantidade; diferenças e razões são legítimas, e a afirmação de que um valor é o dobro do outro tem interpretação."
        },
        "diferencaGabarito": "A diferença está no zero: a razão permite proporção e o intervalo permite apenas subtração. Afirmar que 20 °C é o dobro de 10 °C confunde as duas escalas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Média, mediana e moda são sempre válidas, independentemente do nível de mensuração.'",
        "porqueErrada": "Cada medida pressupõe operações que a escala pode não garantir: a média exige distâncias iguais entre valores, que só existem a partir do nível discreto.",
        "versaoCorreta": "Errado. Em nominal, só moda (e contagens). Em ordinal, mediana e moda são seguras; média é discutível. Média e desvio padrão pressupõem escala de intervalo ou razão. Aplicar estatística acima do nível da variável produz número sem interpretação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A temperatura passou de 10 °C para 20 °C, portanto o calor dobrou.'",
        "porqueErrada": "Celsius é escala de intervalo com zero de convenção; a razão entre valores só teria significado com zero absoluto.",
        "versaoCorreta": "Errado. Em Celsius só a diferença é interpretável: 20 °C menos 10 °C corresponde a 10 °C de acréscimo. Para afirmar proporção seria preciso zero absoluto, como na escala Kelvin."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "nível nominal",
        "nível ordinal",
        "nível discreto",
        "nível contínuo",
        "zero de convenção"
      ],
      "regras": [
        "nominal admite contagem, frequência e moda",
        "ordinal admite mediana além da moda",
        "média e desvio padrão exigem escala de intervalo ou de razão"
      ],
      "comparacoes": [
        "intervalo versus razão: zero de convenção versus zero de ausência"
      ],
      "fluxos": [
        "contar casos por categoria para obter frequência e moda",
        "ordenar valores e localizar o centro para obter a mediana"
      ],
      "excecoes": [
        "faixa de pontuação é ordinal, mesmo trazendo números nas faixas",
        "temperatura em Celsius é intervalo, e razão nela é proibida"
      ],
      "palavrasChave": [
        "mensuração",
        "mediana",
        "moda",
        "zero absoluto",
        "escala"
      ],
      "checklist": [
        "Pergunto o que a diferença entre dois valores significa?",
        "Se não há ordem, limito-me a contagem e moda?",
        "Se há ordem sem distância, uso mediana?",
        "Antes de razão, confirmo que o zero é absoluto?",
        "Registro a escala da variável no metadado?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Determinar o nível de mensuração e as estatísticas legítimas para três variáveis de um serviço público: classificação do atendimento em A, B e C; tempo de resposta em minutos; porte do órgão em pequeno, médio e grande.",
        "dados": "Classificação A, B e C sem regra documentada de precedência; tempos de resposta medidos em minutos, de 4 a 52; porte declarado em três categorias ordenadas sem unidade comum.",
        "conceitos": [
          "nominal",
          "ordinal",
          "contínuo",
          "legitimidade da medida"
        ],
        "estrategia": "Para cada variável, testar se há ordem entre as categorias e se a distância entre valores é comparável; disso decorrem as medidas admitidas.",
        "execucao": [
          "1) Verificar se A, B e C têm ordem entre si ou apenas identificam classes.",
          "2) Verificar se o tempo em minutos tem distâncias iguais e unidade definida.",
          "3) Verificar se pequeno, médio e grande têm ordem sem distância medida.",
          "4) Associar a cada nível as medidas legítimas e recusar as demais."
        ],
        "resultado": "A classificação A/B/C é nominal e admite contagem e moda; o tempo em minutos é contínuo e admite média, mediana, desvio padrão e quartis; o porte é ordinal e admite contagem, moda e mediana, sem média natural.",
        "justificativa": "O gabarito decorre do significado da diferença em cada escala: no nominal ela não existe, no ordinal não é comparável entre graus e no contínuo é medida em unidade comum. Por isso a média é legítima apenas no tempo de resposta, enquanto a mediana permanece defensável nos casos com ordem.",
        "errosFrequentes": [
          "Calcular a média das classificações A, B e C como se fossem notas.",
          "Tratar porte como quantitativo apenas por haver três categorias nomeadas."
        ],
        "variacao": "Se o porte fosse expresso em número de servidores, a variável passaria a quantitativa discreta e a média se tornaria legítima, com unidade declarada."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um boletim registra temperaturas de 10 °C e 20 °C e afirma que o segundo dia ficou duas vezes mais quente. A afirmação é admissível?",
        "dados": "Registros de dois dias: 10 °C e 20 °C, medidos na mesma estação e no mesmo horário; boletim com a conclusão de que o segundo dia teve o dobro de calor.",
        "conceitos": [
          "escala de intervalo",
          "zero de convenção",
          "razão proibida"
        ],
        "estrategia": "Identificar a escala antes de julgar a operação: em Celsius o zero é convenção, logo apenas diferenças têm interpretação, e qualquer conclusão de proporção depende de zero absoluto.",
        "execucao": [
          "1) Reconhecer a temperatura em Celsius como escala de intervalo.",
          "2) Verificar que 0 °C não significa ausência de calor.",
          "3) Calcular a diferença válida: 20 °C menos 10 °C igual a 10 °C de acréscimo.",
          "4) Corrigir o boletim e declarar que razão exigiria escala Kelvin."
        ],
        "resultado": "A afirmação não é admissível. Em Celsius vale a diferença de 10 °C entre os dois dias; a conclusão de 'duas vezes mais quente' é erro de escala, porque o zero de Celsius é ponto de convenção. Proporção só teria sentido com zero absoluto, como na escala Kelvin.",
        "justificativa": "O gabarito decorre da natureza do zero: em escala de intervalo, razões entre valores não têm significado físico, e multiplicar a temperatura por dois não dobra a energia térmica do ambiente. Como estação e horário são os mesmos, a comparação legítima é a diferença de 10 °C.",
        "errosFrequentes": [
          "Converter para Fahrenheit e manter a mesma conclusão de proporção.",
          "Afirmar que 0 °C corresponde a ausência total de calor."
        ],
        "variacao": "Se as medidas fossem em Kelvin, 300 K e 600 K, a razão de dois para um seria legítima, porque o zero Kelvin representa ausência de energia térmica."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato sustenta que média, mediana e moda são sempre válidas, independentemente do nível de mensuração, e calcula a média da variável 'espécie de trâmite' com quatro categorias. Ele está correto?",
        "dados": "Variável nominal 'espécie de trâmite' com categorias protocolo, requerimento, denúncia e recurso; 400 registros; relatório com média calculada por codificação numérica das categorias.",
        "conceitos": [
          "nível nominal",
          "média",
          "moda"
        ],
        "estrategia": "Verificar quais operações a escala garante: a média exige distâncias iguais entre valores, que uma categoria nominal não possui, de modo que o resultado não descreve a variável.",
        "execucao": [
          "1) Reconhecer a variável como nominal, sem ordem entre as categorias.",
          "2) Verificar que a média das codificações depende da ordem arbitrária de numeração.",
          "3) Concluir que o valor obtido não é medida de tendência da variável.",
          "4) Substituir a média por contagem, frequência e moda das espécies."
        ],
        "resultado": "O candidato está errado. Em nominal só valem contagem e moda; a média das codificações varia conforme a numeração escolhida para as categorias e não resume nada. Mediana e moda são seguras no ordinal, e média e desvio padrão pressupõem intervalo ou razão.",
        "justificativa": "A leitura ingênua trata o número da codificação como se fosse medida. Como a numeração das categorias é arbitrária, trocar a ordem dos códigos muda a média sem mudar o dado, o que evidência que a operação não é compatível com a escala e produz número sem interpretação.",
        "errosFrequentes": [
          "Codificar categorias em números e depois calcular média como se fossem medidas.",
          "Admitir mediana em variável nominal por haver valores passíveis de ordenação artificial."
        ],
        "variacao": "Se as espécies fossem substituídas por faixas de prazo ordenadas — até 5 dias, de 6 a 15, acima de 15 — a variável passaria a ordinal e a mediana se tornaria a medida segura."
      }
    ]
  },
  "m7-u1-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Metadado é o dado sobre o dado: sem ele, nenhum número pode ser interpretado com segurança. Em prova, a distinção entre metadados técnicos, de negócio e de processo decide itens que perguntam qual informação responde 'como está armazenado', 'o que significa' ou 'como chegou aqui'.",
      "preRequisitos": [
        "Noção de tabela, coluna e tipo de dado",
        "Conceito de rotina de extração e carga",
        "Leitura de relatório com unidade de medida"
      ],
      "objetivosObservaveis": [
        "Classificar metadados em técnicos, de negócio e de processo",
        "Associar cada classe a um uso concreto de descoberta, interpretação, qualidade, governança ou automação",
        "Explicar por que metadado desatualizado é pior que metadado ausente"
      ],
      "competencias": [
        "Leitura de dicionário de dados e de catálogo",
        "Avaliação da confiabilidade de um indicador antes de usá-lo"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t2-s3 (Escalas nominal, ordinal, discreta e contínua (níveis de mensuração)) — escala e unidade da variável são metadados de negócio",
        "m7-u1-t3-s2 (Linhagem (lineage) e catálogo de dados) — o catálogo organiza metadados e a linhagem registra a trajetória do dado",
        "m7-u1-t3-s3 (Ciclo de vida dos dados) — cada fase do ciclo é governada por metadados de criação, dono e prazo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de governança de dados em editais de concurso; o tema costuma ser cobrado em itens que opõem metadado técnico, de negócio e operacional e em questões sobre indicador publicado sem unidade."
      }
    },
    "niveis": {
      "iniciante": "Metadado é dado sobre dado: descreve, contextualiza ou administra outro dado sem ser o conteúdo em si. Os técnicos, também chamados estruturais, informam nome da tabela e da coluna, tipo, tamanho, formato do arquivo, chave primária, partição e codificação, e respondem como o dado está armazenado. Os de negócio informam significado do campo, dono, unidade de medida, regra de cálculo e classificação de sensibilidade.",
      "intermediario": "Os metadados de processo, ou operacionais, registram data e hora da extração, versão da rotina, quem consultou e de qual sistema o dado veio, e respondem como ele chegou e quem mexeu. As três classes coexistem para o mesmo campo, mas servem a públicos distintos: quem mantém o banco, quem lê o relatório e quem audita a operação. Confundir as classes leva a gabarito errado em item de classificação.",
      "avancado": "A utilidade do metadado se distribui em cinco usos: descoberta, para localizar o dado; interpretação, para entendê-lo sem consultar o autor; qualidade, para validar tipo e domínio; governança, para classificar e controlar acesso; e automação, para alimentar catálogos e rotinas. Sem metadado de negócio, um valor como 0,04 é ambíguo entre dia e hora, e a leitura correta do indicador fica impossível.",
      "especialista": "Metadado ruim — ausente, desatualizado ou contraditório — degrada todo o conjunto: um dicionário de dados em versão antiga é pior que nenhum, porque gera confiança indevida. A conduta de governança é versionar o metadado, indicar dono responsável e data de atualização, e reconciliar a descrição com o esquema efetivo antes de publicar o indicador."
    },
    "comparacoes": [
      {
        "tema": "Metadado técnico versus metadado de negócio",
        "a": {
          "rotulo": "Técnico (estrutural)",
          "texto": "Descreve o armazenamento: nome da coluna, tipo, tamanho, formato, chave primária e partição; é conferido no banco e alimenta validação automática."
        },
        "b": {
          "rotulo": "De negócio (descritivo)",
          "texto": "Descreve significado e titularidade: regra do campo, unidade de medida, dono responsável e classificação de sensibilidade; é conferido com a área usuária."
        },
        "diferencaGabarito": "A diferença está na pergunta respondida: o técnico diz como o dado está guardado; o de negócio diz o que ele significa e a quem pertence. Ambos são necessários para usar o dado com segurança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Metadado é a descrição escrita que alguém faz do relatório em um manual em PDF.'",
        "porqueErrada": "A definição captura apenas a parcela descritiva e ignora o metadado técnico e o operacional, que costumam ser gerados pelo próprio sistema.",
        "versaoCorreta": "Parcialmente errado. Essa é uma forma de metadado descritivo, mas há também metadado técnico (esquema, tipos) e operacional (carimbo de execução), frequentemente gerados automaticamente pelo próprio sistema. Reduzir metadado a 'manual' ignora a parte que permite validação e rastreio automático."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Um dicionário de dados desatualizado é tão inofensivo quanto a ausência de dicionário.'",
        "porqueErrada": "O metadado errado não é neutro: ele é consultado como se fosse verdadeiro e produz confiança indevida no indicador.",
        "versaoCorreta": "Errado. Metadado desatualizado é pior que metadado ausente, porque o usuário confia na descrição antiga e não pede confirmação. A correção exige versionar o dicionário, indicar dono e data, e reconciliar a descrição com o esquema vigente."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "metadado técnico",
        "metadado de negócio",
        "metadado de processo",
        "dicionário de dados",
        "classificação de sensibilidade"
      ],
      "regras": [
        "metadado técnico responde como o dado está armazenado",
        "metadado de negócio responde o que o campo significa e a quem pertence",
        "metadado de processo responde como o dado chegou e quem o consultou"
      ],
      "comparacoes": [
        "técnico versus de negócio: armazenamento versus significado"
      ],
      "fluxos": [
        "descobrir o dado no catálogo, interpretar pelo metadado de negócio e validar pelo técnico",
        "rastrear a extração pelo metadado de processo até o sistema de origem"
      ],
      "excecoes": [
        "manual em PDF é metadado descritivo, mas não esgota a classe de negócio",
        "carimbo de execução é gerado pelo sistema, não digitado por pessoa"
      ],
      "palavrasChave": [
        "esquema",
        "significado",
        "dono",
        "extração",
        "catálogo"
      ],
      "checklist": [
        "Sei qual classe de metadado responde à pergunta do enunciário?",
        "Confiro unidade e regra de cálculo antes de ler o número?",
        "Verifico a data de atualização do metadado?",
        "Identifico o dono responsável pelo campo?",
        "Desconfio de indicador sem metadado de negócio?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique três informações sobre a coluna valor_venda como metadado técnico, de negócio ou de processo: o tipo DECIMAL(12,2); a regra de que o prazo é contado em dias úteis; o registro de extração executada em 20 de outubro de 2026 às 03h00.",
        "dados": "Coluna valor_venda da tabela de vendas, com tipo DECIMAL(12,2); regra de negócio declarando prazo em dias úteis; carimbo de execução da rotina de 20/10/2026 às 03h00, com identificação da rotina responsável.",
        "conceitos": [
          "metadado técnico",
          "metadado de negócio",
          "metadado de processo"
        ],
        "estrategia": "Perguntar, para cada informação, qual dúvida ela resolve: como o valor está guardado, o que ele significa ou por qual caminho ele chegou.",
        "execucao": [
          "1) Associar o tipo e a precisão da coluna à estrutura de armazenamento.",
          "2) Associar a regra de contagem de prazo ao significado declarado pela área de negócio.",
          "3) Associar data, hora e versão da extração ao histórico operacional.",
          "4) Nomear a classe de cada informação e o público que a utiliza."
        ],
        "resultado": "O tipo DECIMAL(12,2) é metadado técnico; a regra de prazo em dias úteis é metadado de negócio; o carimbo de extração é metadado de processo. As três classes descrevem o mesmo campo e atendem a públicos diferentes, do banco de dados ao auditor da operação.",
        "justificativa": "O gabarito decorre da pergunta que cada metadado responde: estrutura de armazenamento é técnica, regra de cálculo e titularidade são de negócio, e histórico de execução é de processo. Como as três informações descrevem o mesmo campo, a classificação correta exige olhar a função, e não o conteúdo.",
        "errosFrequentes": [
          "Classificar a regra de prazo como técnica por estar documentada no sistema.",
          "Tratar o carimbo de execução como metadado de negócio por conter data."
        ],
        "variacao": "Se a informação fosse a classificação de sensibilidade do campo, ela permaneceria metadado de negócio, porque trata de titularidade e de controle de acesso."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um relatório gerencial exibe 'tempo médio de espera = 0,04'. Interpretar esse valor sem metadados de negócio pode conduzir a erro? Justifique.",
        "dados": "Indicador com valor 0,04; relatório sem unidade declarada e sem regra de cálculo; duas hipóteses em uso na organização: 0,04 dia, equivalente a cerca de 58 minutos, ou 0,04 hora, equivalente a cerca de 2,4 minutos.",
        "conceitos": [
          "unidade de medida",
          "regra de cálculo",
          "ambiguidade de indicador"
        ],
        "estrategia": "Testar se o número é interpretável sem unidade e sem regra de cálculo; se não for, concluir que o metadado de negócio é condição para a leitura correta.",
        "execucao": [
          "1) Verificar se o relatório declara a unidade do indicador.",
          "2) Verificar se a regra prevê média simples ou ponderada por posto.",
          "3) Calcular as duas leituras possíveis do mesmo valor.",
          "4) Exigir o metadado de negócio antes de usar o número em decisão."
        ],
        "resultado": "Sim, pode conduzir a erro. Sem unidade e sem regra de cálculo, 0,04 é ambíguo: corresponde a cerca de 58 minutos se a unidade for o dia, ou a cerca de 2,4 minutos se for a hora. O metadado de negócio resolve a ambiguidade; sem ele, a leitura correta do número é impossível.",
        "justificativa": "O gabarito decorre de o valor numérico não transmitir unidade nem regra: como as duas hipóteses diferem por fator de 24, a decisão tomada com a leitura errada se afasta em ordens de grandeza. Por isso o metadado de negócio não é enfeite do relatório, e sim condição de interpretação.",
        "errosFrequentes": [
          "Presumir que o valor está em horas por ser relatório gerencial diário.",
          "Publicar o indicador sem declarar unidade e regra de cálculo."
        ],
        "variacao": "Se o metadado declarasse 'média ponderada por posto, em minutos', o mesmo número deveria ser lido como 0,04 minuto e o relatório precisaria de correção de escala."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que metadado é apenas a descrição escrita que alguém faz do relatório em um manual em PDF, e que o resto é responsabilidade da equipe de banco de dados. A afirmação está correta?",
        "dados": "Organização com manual em PDF descrevendo dois relatórios; esquema do banco com 46 colunas tipadas; rotina noturna que grava data, hora e versão de cada extração; nenhum desses registros aparece no manual.",
        "conceitos": [
          "metadado descritivo",
          "metadado técnico",
          "metadado operacional"
        ],
        "estrategia": "Confrontar a definição dada com as três classes de metadado previstas e verificar quais registros essa definição deixa de fora.",
        "execucao": [
          "1) Reconhecer o manual como metadado descritivo, da classe de negócio.",
          "2) Listar os registros técnicos existentes no esquema do banco.",
          "3) Listar os registros operacionais gravados pela rotina noturna.",
          "4) Concluir que a definição é parcial e corrigi-la."
        ],
        "resultado": "A afirmação é parcialmente errada. O manual é uma forma de metadado descritivo, mas existem também metadados técnicos, como o esquema e os tipos das 46 colunas, e operacionais, como o carimbo de execução da rotina noturna. Reduzir metadado a manual ignora a parte que permite validação e rastreio automático.",
        "justificativa": "A leitura ingênua limita o conceito ao que foi escrito por uma pessoa, quando a maior parte do metadado útil é produzida pelo próprio sistema. Como o esquema e o carimbo de execução sustentam validação e rastreio, excluí-los da definição enfraquece controles de qualidade e de auditoria.",
        "errosFrequentes": [
          "Ignorar metadados gerados automaticamente por não estarem em documento.",
          "Atribuir à equipe de banco a guarda de metadados de negócio, que pertencem à área usuária."
        ],
        "variacao": "Se o manual descrevesse também dono, unidade e regra de cálculo de cada campo, ele passaria a cobrir a classe de negócio, mas continuaria sem substituir os metadados técnico e operacional."
      }
    ]
  }
};
