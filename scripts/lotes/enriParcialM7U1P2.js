const enriParcialM7U1P2 = {
  "m7-u1-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Classificar um conjunto como estruturado, semiestruturado ou não estruturado define qual técnica de leitura é viável e qual custo de preparo o projeto terá. Em prova, a armadilha aparece quando o enunciário oferece JSON, XML ou arquivo de log como alternativa de dado estruturado.",
      "preRequisitos": [
        "Noção de tabela com linhas e colunas (planilha ou banco relacional)",
        "Conceito de marcador em arquivo de texto, como tag, chave ou cabeçalho",
        "Diferença entre conteúdo de um documento e formato de armazenamento"
      ],
      "objetivosObservaveis": [
        "Classificar tabela, JSON e gravação em vídeo nos três formatos, citando o critério usado em cada caso",
        "Justificar por que um arquivo de log é semiestruturado e não estruturado",
        "Explicar por que a classificação trata da forma do conjunto, e não do valor do conteúdo"
      ],
      "competencias": [
        "Leitura crítica de alternativas que trocam estruturado por semiestruturado",
        "Argumentação técnica baseada no grau de estrutura do conjunto"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t2-s2 (Dados qualitativos e quantitativos) — classificação complementar, agora pela natureza do valor",
        "m7-u1-t2-s3 (Escalas nominal, ordinal, discreta e contínua (níveis de mensuração)) — as estatísticas legítimas pressupõem dado acessível e estruturado",
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — o metadado técnico descreve o formato e o tipo do dado estruturado",
        "m7-u1-t1-s1 (Dado, informação, conhecimento e sabedoria) — o dado bruto circula nos trêsformatos antes de virar informação"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de fundamentos de dados em editais de concurso; o tema rende itens que exigem justificar o formato de JSON, XML, log e texto livre, e sustenta o raciocínio sobre extração e preparo de dados."
      }
    },
    "niveis": {
      "iniciante": "Dados estruturados seguem um schema rígido: linhas e colunas com tipo, regra e domínio definidos de antemão, como planilhas e tabelas de banco relacional. Dados semiestruturados não têm schema imposto de fora, mas trazem marcadores internos que descrevem a estrutura — JSON, XML, CSV com cabeçalho livre, arquivos de log e páginas HTML. Dados não estruturados não têm formato computável de campos: texto livre, PDF digitalizado, imagens, áudio e vídeo.",
      "intermediario": "No semiestruturado, o marcador permite parsing por ferramenta, ainda que campos apareçam ou faltem conforme o registro: cada registro pode declarar chaves próprias. No estruturado, a validação automática, a consulta SQL e a integração por chave são possíveis justamente porque o schema é fixo e conhecido antes da carga. O mesmo fato pode existir nos trêsformatos — um endereço em coluna de tabela, dentro de um JSON ou escrito em texto livre.",
      "avancado": "Classificar não é julgar qualidade: dado não estruturado não é dado pior, apenas exige técnica distinta de extração. Um e-mail ilustra a fronteira, porque o corpo é texto livre e os cabeçalhos têm forma fixa. Em projeto de dados, a classificação decide o caminho — leitura direta, extração por marcador ou captura assistida — e a etapa de conversão deve ser registrada como risco de qualidade, não ignorada.",
      "especialista": "Em governança, a distinção sustenta o inventário de ativos e o controle de acesso: o formato condiciona varredura, anonimização e backup. A classificação também determina o custo de preparo, já que extrair JSON é tarefa de rotina, enquanto converter PDF digitalizado em dado computável exige captura com conferência. Nenhuma promessa de reconhecimento automático é assumida sem verificação prévia."
    },
    "comparacoes": [
      {
        "tema": "Estruturado versus semiestruturado: quem impõe o schema",
        "a": {
          "rotulo": "Estruturado",
          "texto": "Schema rígido e externo: colunas, tipos e domínios fixados antes da carga; todos os registros obedecem à mesma forma e a validação é automática."
        },
        "b": {
          "rotulo": "Semiestruturado",
          "texto": "Marcadores internos descrevem cada registro, mas nenhum schema único é imposto; campos podem faltar, mudar de nome ou de ordem entre registros."
        },
        "diferencaGabarito": "A diferença está em quem fixa a forma: no estruturado o schema manda no registro; no semiestruturado o registro se descreve e a ferramenta interpreta."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Arquivos JSON e XML são dados estruturados, pois sempre têm formato fixo.'",
        "porqueErrada": "A presença de marcadores organizados não equivale a schema fixo: em JSON e XML a forma é declarada pelo próprio registro, e o conjunto pode misturar estruturas diferentes.",
        "versaoCorreta": "Errado. São semiestruturados: os marcadores descrevem cada registro, mas não existe um schema único imposto sobre todos — campos podem faltar, mudar de nome ou de ordem. O estruturado exige schema fixo e validação de domínio (como tabela de banco relacional)."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Como o corpo do e-mail é texto livre, o e-mail é dado inteiramente não estruturado.'",
        "porqueErrada": "A generalização ignora que a mensagem tem partes de forma fixa: remetente, destinatário, data e assunto são campos legíveis por ferramenta.",
        "versaoCorreta": "Parcialmente errado. O corpo do e-mail é texto livre, mas os cabeçalhos são estruturados; a classificação correta é mista e deve ser feita por parte do documento, e não pela mensagem inteira."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "dado estruturado",
        "dado semiestruturado",
        "dado não estruturado",
        "schema",
        "marcador interno"
      ],
      "regras": [
        "estruturado = schema rígido com tipo, regra e domínio definidos de antemão",
        "semiestruturado = marcadores internos sem schema único imposto sobre os registros",
        "não estruturado = ausência de formato computável de campos"
      ],
      "comparacoes": [
        "estruturado versus semiestruturado: schema fixo versus autodescrição do registro"
      ],
      "fluxos": [
        "leitura direta por SQL quando o schema é rígido",
        "extração por parsing dos marcadores quando o conjunto é semiestruturado",
        "captura assistida quando não há campos computáveis"
      ],
      "excecoes": [
        "e-mail tem corpo em texto livre e cabeçalhos estruturados",
        "CSV com cabeçalho livre fica no semiestruturado, apesar da aparência de tabela"
      ],
      "palavrasChave": [
        "schema",
        "marcador",
        "parsing",
        "coluna",
        "texto livre"
      ],
      "checklist": [
        "Identifico se existe schema fixo antes da leitura?",
        "Se não há schema, procuro marcadores internos?",
        "Se não há marcadores, classifico como não estruturado?",
        "Justifico pela forma e não pelo valor do conteúdo?",
        "Registro a etapa de conversão como risco de qualidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique três conjuntos recebidos por um setor de protocolo: uma tabela de servidores com colunas definidas, um arquivo JSON com leituras de sensores e a gravação em vídeo de uma audiência pública.",
        "dados": "Conjunto A: planilha com colunas matrícula, nome e lotação, com tipo e domínio fixados. Conjunto B: arquivo JSON em que cada leitura traz id_sensor, valor e hora, e apenas algumas trazem também bateria. Conjunto C: arquivo de vídeo de 40 minutos sem transcrição.",
        "conceitos": [
          "schema rígido",
          "marcador interno",
          "ausência de campos computáveis"
        ],
        "estrategia": "Testar cada conjunto em ordem: primeiro procuro schema fixo e externo; se não existir, procuro marcadores que descrevam o registro; se também não existirem, concluo que não há formato computável de campos.",
        "execucao": [
          "1) Verificar se a tabela tem colunas, tipos e domínios definidos antes da carga.",
          "2) Verificar se o JSON declara os campos em cada registro e se a presença deles varia.",
          "3) Verificar se o vídeo expõe campos legíveis por ferramenta sem transcrição.",
          "4) Classificar os três conjuntos e nomear o critério usado em cada caso."
        ],
        "resultado": "A tabela é estruturada, porque tem schema rígido com validação de domínio. O JSON é semiestruturado, porque os campos são declarados no próprio registro e a presença de bateria varia entre eles. O vídeo é não estruturado, pois não expõe campos computáveis sem transcrição.",
        "justificativa": "O gabarito segue o critério do grau de estrutura: schema externo fixo caracteriza o estruturado, marcadores internos com ocorrência variável caracterizam o semiestruturado, e ausência de campos legíveis por ferramenta caracteriza o não estruturado. Como os três conjuntos foram testados pelo mesmo critério, a classificação é defensável.",
        "errosFrequentes": [
          "Classificar o JSON como estruturado apenas porque tem aparência de tabela.",
          "Chamar o vídeo de dado ruim por ser não estruturado, confundindo forma com valor."
        ],
        "variacao": "Se o terceiro conjunto fosse a transcrição textual da audiência em arquivo de texto puro, ele permaneceria não estruturado, pois texto livre não traz delimitadores de campo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria recebe 500 formulários em PDF digitalizado e, em paralelo, o extrato das mesmas solicitações já em tabela. Qual caminho exige menos transformação para a apuração mensal de prazo de resposta?",
        "dados": "Volume de 500 solicitações no mês. Fonte 1: PDF digitalizado, sem camada de texto pesquisável. Fonte 2: extrato em tabela com colunas protocolo, data de entrada, data de resposta e tipo de serviço. Ambas descrevem as mesmas 500 solicitações.",
        "conceitos": [
          "dado estruturado",
          "dado não estruturado",
          "etapa de captura"
        ],
        "estrategia": "Comparar o número de transformações exigidas por cada fonte: a tabela permite filtro e cálculo imediatos, enquanto o PDF exige captura dos valores antes de qualquer apuração, etapa que introduz erro e demanda conferência.",
        "execucao": [
          "1) Listar as operações da apuração: filtrar o mês, calcular o intervalo entre datas e totalizar por tipo de serviço.",
          "2) Verificar quais operações a tabela executa sem preparo adicional.",
          "3) Verificar que o PDF digitalizado exige leitura ou digitação campo a campo antes do cálculo.",
          "4) Escolher a tabela e registrar a conversão do PDF como etapa de risco de qualidade."
        ],
        "resultado": "A tabela exige menos transformação: filtra e calcula o prazo de resposta diretamente. O PDF digitalizado só entra na apuração depois de captura, que introduz erro e demanda conferência por amostragem; por isso a conversão é registrada como risco, e não ignorada.",
        "justificativa": "O gabarito é a tabela porque o formato estruturado permite cálculo automático sobre colunas já tipadas e validadas, enquanto o PDF digitalizado não oferece campos computáveis: toda apuração depende de etapa intermediária de leitura, cuja taxa de erro precisa ser controlada para que o número final seja confiável.",
        "errosFrequentes": [
          "Tratar o PDF digitalizado como fonte pronta para soma, ignorando a captura.",
          "Descartar o PDF sem registrar a etapa de conversão e seu risco de qualidade."
        ],
        "variacao": "Se o PDF fosse pesquisável, com posição fixa dos campos, a extração poderia ser automatizada, mas a conferência por amostragem continuaria obrigatória antes de publicar o resultado."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que arquivos JSON e XML são dados estruturados porque sempre têm formato fixo e por isso aceitam validação igual à de uma tabela relacional. A afirmação está correta?",
        "dados": "Arquivo JSON de sensores em que 30 registros trazem id, valor e hora e 12 trazem também bateria; arquivo XML de notas fiscais em que dois emissores usam nomes de elementos diferentes para o mesmo dado.",
        "conceitos": [
          "schema externo fixo",
          "autodescrição do registro",
          "validação de domínio"
        ],
        "estrategia": "Separar a existência de marcadores da existência de schema fixo: o primeiro viabiliza parsing, e o segundo viabiliza validação automática de tipo e domínio com regra única para todos os registros.",
        "execucao": [
          "1) Observar que os marcadores do JSON declaram os campos dentro de cada registro.",
          "2) Observar que a presença de bateria varia e que o XML usa nomes distintos para o mesmo dado.",
          "3) Concluir que não há schema único imposto sobre todos os registros.",
          "4) Classificar os dois arquivos como semiestruturados, e não como estruturados."
        ],
        "resultado": "A afirmação está errada. JSON e XML são semiestruturados: os marcadores descrevem cada registro, mas nenhum schema único é imposto ao conjunto, e campos podem faltar ou mudar de nome. A validação de tipo e domínio própria de tabela relacional pressupõe schema fixo, que esses formatos não garantem.",
        "justificativa": "A leitura ingênua confunde aparência organizada com estrutura rígida. Como a presença de campos varia entre registros e os nomes de elementos diferem entre emissores, não existe regra única de validação aplicável ao conjunto inteiro — sinal de que o formato é semiestruturado e a validação precisa de esquema declarado.",
        "errosFrequentes": [
          "Confundir delimitador de campo com schema fixo.",
          "Assumir que todo JSON tem o mesmo conjunto de chaves em todos os registros."
        ],
        "variacao": "Se fosse imposto um JSON Schema com todos os campos obrigatórios e validado na entrada, o conjunto passaria a ter schema fixo e a validação automática de tipo e domínio se tornaria legítima."
      }
    ]
  },
  "m7-u1-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Diferenciar dado qualitativo de quantitativo decide quais operações são legítimas: média e desvio padrão só valem sobre quantitativos. A armadilha de prova é o código numérico — matrícula, CEP e telefone parecem quantitativos pelos dígitos, mas são identificadores, e a média deles não informa nada.",
      "preRequisitos": [
        "Noção de categoria e de atributo, como cor, tipo de serviço e bairro",
        "Cálculo de média e entendimento do que ela resume",
        "Diferença entre contar ocorrências e medir com instrumento"
      ],
      "objetivosObservaveis": [
        "Classificar variáveis em qualitativa ou quantitativa e, nesta última, em discreta ou contínua",
        "Detectar a armadilha da codificação numérica em matrícula, CEP e telefone",
        "Justificar a classificação pela validade da operação aritmética, e não pelo tipo de armazenamento"
      ],
      "competencias": [
        "Avaliação da legitimidade de uma estatística antes de aplicá-la",
        "Leitura de planilha distinguindo formato de célula e natureza da variável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — classificação complementar, pela forma do conjunto",
        "m7-u1-t2-s3 (Escalas nominal, ordinal, discreta e contínua (níveis de mensuração)) — detalha os níveis nominal, ordinal, discreto e contínuo",
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — o metadado de negócio registra unidade e regra de cálculo da variável"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de estatística descritiva em editais de concurso; o tema rende itens de certo ou errado sobre classificação de variáveis e sobre uso indevido de média em códigos identificadores."
      }
    },
    "niveis": {
      "iniciante": "Dados qualitativos, ou categóricos, descrevem atributos: cor da via, tipo de serviço prestado, satisfação relatada, bairro. Dados quantitativos são valores numéricos sobre os quais a aritmética é válida. Eles se subdividem em discretos, de contagem — número de atendimentos, de servidores, de reclamações, sempre inteiros — e contínuos, de medição em intervalo — tempo de espera, temperatura, salário, peso.",
      "intermediario": "No quantitativo discreto, entre dois valores possíveis existe sempre um impossível: não há 2,5 atendimentos. No contínuo, qualquer valor intermediário é admissível em princípio, e a precisão depende do instrumento de medição. A regra que decide questão de prova é que número escrito não significa dado quantitativo: matrícula, CEP e telefone são códigos de natureza qualitativa nominal.",
      "avancado": "Ordenar e subtrair um CEP não produz distância geográfica, e a média de matrículas não identifica nenhum aluno: em ambos os casos a operação é aritmeticamente executável, porém semanticamente vazia. O critério decisivo é a validade da operação para o significado da variável. Aplicar estatística de quantitativo a um código gera número aparentemente plausível, o que dificulta perceber o erro no relatório.",
      "especialista": "Em auditoria de dados, a confusão entre formato e natureza produz indicadores inválidos que atravessam relatórios e painéis. A conduta correta é declarar, no metadado de negócio, a natureza da variável e a regra de cálculo admitida, recusando operações fora dela. Limpeza de dados converte o tipo de armazenamento sem reclassificar a variável: '3 atendimentos' digitado como texto continua contagem."
    },
    "comparacoes": [
      {
        "tema": "Discreto versus contínuo: o que separa dois valores",
        "a": {
          "rotulo": "Quantitativo discreto",
          "texto": "Resulta de contagem; só admite valores inteiros e, entre dois valores possíveis, existe sempre um impossível."
        },
        "b": {
          "rotulo": "Quantitativo contínuo",
          "texto": "Resulta de medição em intervalo; qualquer valor intermediário é possível em princípio e a precisão depende do instrumento."
        },
        "diferencaGabarito": "A diferença está na origem do número: contar produz degraus sem valores intermediários, enquanto medir produz escala contínua limitada pela resolução do instrumento."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Como o número de atendimentos está registrado como texto na planilha, ele é um dado qualitativo.'",
        "porqueErrada": "A classificação depende do significado da variável, e não do tipo de armazenamento escolhido na planilha; texto é formato de célula, não natureza do dado.",
        "versaoCorreta": "Errado. A classificação depende do SIGNIFICADO, não do tipo de armazenamento. '3 atendimentos' é contagem: quantitativo discreto, mesmo que digitado como texto. Tratar corretamente exige converter o tipo (limpeza de dados), não reclassificar o dado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A média das matrículas dos alunos admitidos indica a matrícula típica da turma e pode ir para o relatório.'",
        "porqueErrada": "Matrícula é código identificador, não medida: somar e dividir códigos produz número que não corresponde a nenhum aluno e não resume nada.",
        "versaoCorreta": "Errado. Matrícula é qualitativa nominal codificada, e média sobre códigos é operação sem sentido. O relatório deve trazer contagem de admitidos, data de admissão e curso, que são variáveis com operações legítimas."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "dado qualitativo (categórico)",
        "dado quantitativo discreto",
        "dado quantitativo contínuo",
        "codificação numérica",
        "validade da operação aritmética"
      ],
      "regras": [
        "qualitativo descreve atributo e não admite média",
        "discreto vem de contagem e só possui valores inteiros",
        "contínuo vem de medição e admite valores intermediários"
      ],
      "comparacoes": [
        "discreto versus contínuo: contagem em degraus versus medição em escala"
      ],
      "fluxos": [
        "contar ocorrências para obter um discreto",
        "medir com instrumento e registrar a unidade para obter um contínuo"
      ],
      "excecoes": [
        "matrícula, CEP e telefone são numéricos na aparência e qualitativos na natureza",
        "valor digitado como texto continua quantitativo quando o significado é contagem"
      ],
      "palavrasChave": [
        "categoria",
        "contagem",
        "medição",
        "código",
        "média"
      ],
      "checklist": [
        "Pergunto o que a variável significa antes de calcular?",
        "Se é atributo, evito média e desvio padrão?",
        "Se é contagem, confirmo que só há inteiros?",
        "Se é medição, registro unidade e instrumento?",
        "Desconfio de número que apenas parece quantitativo?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Classifique quatro variáveis de um relatório de atendimento: número de reclamações por mês, tempo médio de espera na fila, bairro do reclamante e satisfação registrada em ruim, regular e bom.",
        "dados": "Mês de referência com 212 reclamações; espera média de 18 minutos; bairros como Centro, Vila Nova e Industrial; satisfação em três graus sem escala numérica atribuída às categorias.",
        "conceitos": [
          "contagem",
          "medição de duração",
          "categoria nominal",
          "categoria ordinal"
        ],
        "estrategia": "Perguntar, para cada variável, qual operação a produz: contar registros gera discreto, medir duração gera contínuo, nomear lugar ou atributo gera categórico, e graduar opinião gera categórico com ordem.",
        "execucao": [
          "1) Identificar que reclamações por mês resulta de contagem de registros.",
          "2) Identificar que o tempo de espera resulta de medição com relógio.",
          "3) Identificar que bairro é atributo sem ordem entre as categorias.",
          "4) Identificar que satisfação em três graus tem ordem, mas sem distância medida entre eles."
        ],
        "resultado": "Reclamações por mês é quantitativa discreta; tempo médio de espera é quantitativa contínua; bairro é qualitativa nominal; satisfação em três graus é qualitativa ordinal, porque há ordem sem distâncias comparáveis.",
        "justificativa": "O gabarito decorre da origem de cada número: contagem produz inteiros separados, medição produz escala contínua e categorias, com ou sem ordem, descrevem atributos. A ordinalidade da satisfação vem da sequência ruim, regular e bom, e não de uma unidade de medida entre os graus.",
        "errosFrequentes": [
          "Tratar satisfação como quantitativa só porque foram usados três rótulos.",
          "Confundir bairro com ordinal por haver bairros maiores e menores em população."
        ],
        "variacao": "Se a satisfação fosse convertida em nota de 0 a 10, a variável passaria a quantitativa discreta, desde que a conversão preservasse intervalos iguais entre as notas."
      },
      {
        "tipo": "aplicacao",
        "problema": "A equipe de pessoal calculou a média das matrículas dos alunos admitidos no semestre e obteve 20260431. O que esse número informa sobre o grupo?",
        "dados": "Admitidos com matrículas 20259877, 20260110, 20260400 e 20261337; relatório gerado com o valor médio 20260431; nenhum aluno possui essa matrícula.",
        "conceitos": [
          "codificação numérica",
          "média",
          "natureza nominal"
        ],
        "estrategia": "Testar se a operação aplicada é legítima para o significado da variável: matrícula identifica o aluno, não mede quantidade, portanto soma e divisão sobre códigos não produzem informação sobre o grupo.",
        "execucao": [
          "1) Reconhecer a matrícula como identificador de natureza qualitativa nominal.",
          "2) Verificar que a média exige escala quantitativa com intervalos iguais.",
          "3) Concluir que o valor 20260431 não descreve nenhum aluno nem o grupo.",
          "4) Substituir o indicador por contagem de admitidos, data de admissão e curso."
        ],
        "resultado": "Nada de útil. A matrícula é identificador qualitativo codificado, e média sobre códigos é operação semanticamente vazia: 20260431 não corresponde a nenhuma matrícula real e não deve aparecer em relatório. As variáveis informativas são contagem de admitidos, data de admissão e curso.",
        "justificativa": "O resultado é gabarito porque a validade de uma estatística depende da escala da variável, e não de o valor ser numérico. Sobre um código, a média é calculável, porém sem interpretação, e o número produzido parece plausível justamente por manter o padrão de dígitos da matrícula.",
        "errosFrequentes": [
          "Publicar a média de matrículas como indicador de porte da turma.",
          "Tentar corrigir o problema mudando a fórmula, em vez de trocar a variável."
        ],
        "variacao": "Se a variável fosse ano de ingresso, a média passaria a ser legítima, porque ano é quantitativo discreto com intervalos iguais e a diferença entre anos tem significado."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma que, como o número de atendimentos está gravado como texto na planilha, a variável é qualitativa e por isso não pode entrar no cálculo de média mensal. A afirmação está correta?",
        "dados": "Coluna com valores '3', '7' e '12' armazenados como texto; planilha importada de sistema legado; nenhum valor nulo na coluna; requisito de apurar a média mensal de atendimentos por servidor.",
        "conceitos": [
          "tipo de armazenamento",
          "natureza da variável",
          "limpeza de dados"
        ],
        "estrategia": "Separar o plano do armazenamento do plano do significado: texto é formato de célula, enquanto a natureza da variável vem do que ela representa. A resposta correta exige limpar o tipo, não reclassificar a variável.",
        "execucao": [
          "1) Verificar que os valores representam contagens de atendimentos.",
          "2) Reconhecer que o armazenamento como texto é defeito de importação, não natureza categórica.",
          "3) Converter a coluna para número antes de apurar a média.",
          "4) Conferir a conversão por amostragem e documentar a regra usada."
        ],
        "resultado": "A afirmação está errada. A variável é quantitativa discreta, porque '3 atendimentos' é contagem, e o armazenamento como texto é apenas formato. O caminho correto é converter o tipo na limpeza e então calcular a média, e não reclassificar o dado como qualitativo.",
        "justificativa": "A leitura ingênua trata o sintoma — texto na célula — como se fosse a natureza da variável. Como a contagem permanece contagem independentemente do formato de gravação, recusar o cálculo descarta informação legítima; o defeito real é de tipo e se resolve com conversão e conferência.",
        "errosFrequentes": [
          "Concluir que dado gravado em texto é sempre categórico.",
          "Converter a coluna sem conferir valores não numéricos introduzidos na importação."
        ],
        "variacao": "Se a coluna contivesse 'três' e 'sete' por extenso, a conversão exigiria tradução dos termos para número, mas a natureza da variável continuaria discreta."
      }
    ]
  }
};
