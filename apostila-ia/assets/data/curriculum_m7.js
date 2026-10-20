/* curriculum_m7.js — Módulo 7: Fundamentos e Engenharia de Dados
 * Conteúdo didático real para o M7 (Escrita.txt, Seção 6 — MÓDULO 7).
 * Mesmo esquema de curriculum_m3.js: cada subtópico tem objetivoAprendizagem,
 * conteudo, exemplos (introducao/aplicacao/erro) e exercicios (certos_erro/multipla).
 * Nenhuma URL, estatística de incidência em concurso ou referência foi inventada.
 */

const curriculumM7 = {
  "modulo-7": {
    "titulo": "FUNDAMENTOS E ENGENHARIA DE DADOS",
    "unidades": [
      {
        "id": "modulo-7-unidade-1",
        "titulo": "7.1 Fundamentos Conceituais de Dados",
        "topicos": [
          {
            "id": "modulo-7-unidade-1-topico-1",
            "titulo": "DIKW: dado, informação, conhecimento e sabedoria",
            "subtopicos": [
              {
                "id": "m7-u1-t1-s1",
                "titulo": "Dado, informação, conhecimento e sabedoria",
                "objetivoAprendizagem": "Aluno definirá cada nível do modelo DIKW e construirá a passagem entre eles com um exemplo encadeado.",
                "conteudo": "O modelo DIKW organiza o tratamento da informação em quatro níveis. DADO: registro bruto, sem contexto e sem destinatário — um número lido de um sensor, uma linha digitada em formulário, uma leitura de temperatura. INFORMAÇÃO: dado processado e situado — recebe contexto, finalidade e destinatário; a mesma leitura de temperatura, comparada ao limite seguro do equipamento, passa a informar. CONHECIMENTO: informação internalizada, combinada com experiência e julgamento, que permite agir — o técnico reconhece que a leitura está fora do padrão e sabe qual inspeção fazer. SABEDORIA: conhecimento aplicado com discernimento de longo prazo e senso de consequência — decidir rever o processo inteiro para evitar a recorrência do problema, avaliando custo, risco e impacto. Duas propriedades são essenciais: (1) a passagem exige trabalho humano ou regra explícita de interpretação, não acontece por acúmulo automático; (2) informação é relativa ao destinatário — o mesmo dado é informação útil para uma pessoa e ruído para outra.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Encadear os quatro níveis DIKW a partir da leitura de 238 em uma coluna de pressão arterial.",
                    "resposta": "Dado: o número 238, isolado, sem unidade nem contexto. Informação: 238 mmHg (sistólica) do paciente X, medida corretamente, valor acima da faixa de referência usada na clínica. Conhecimento: o profissional sabe que o valor indica hipertensão a confirmar e que há fatores (medicação, horário, café) a verificar antes de concluir. Sabedoria: escolher conduzir o caso com nova aferição domiciliar seriada e ajuste de conduta, considerando o histórico, os efeitos adversos e a preferência do paciente."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um órgão registra 1.000 atendimentos por mês em planilha. Descreva a subida da pirâmide DIKW até a decisão.",
                    "resposta": "Dado: as 1.000 linhas com data, unidade e tipo. Informação: apuração de que 42% dos atendimentos ocorrem às segundas-feiras pela manhã e que o tempo médio de espera subiu. Conhecimento: reconhecer o padrão semanal e associá-lo à escala de pessoal da unidade. Sabedoria: redimensionar a escala de forma preventiva e reavaliar o resultado no mês seguinte, decidindo entre mais equipe ou redirecionamento de demanda — sem prometer efeito antes de medir."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Basta carregar mais dados no sistema para que a organização alcance sabedoria.'",
                    "correcao": "Errado. Acúmulo de dados produz, no máximo, mais matéria-prima. Cada passagem exige trabalho explícito: contextualizar (dado→informação), interpretar com experiência (informação→conhecimento) e julgar consequências (conhecimento→sabedoria). Acervo sem contexto e sem qualidade amplia ruído, não sabedoria."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Conhecimento, no modelo DIKW, é informação combinada com experiência e julgamento, apta a orientar ação.",
                    "resposta": "Certo. É a definição de trabalho adotada no texto: conhecimento é informação aplicada por alguém ou por regra explícita de decisão."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em 'leitura de um sensor comparada ao limite de segurança do equipamento, gerando alerta ao técnico', o que a leitura se tornou? A) dado puro; B) informação; C) sabedoria; D) metadado.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u1-t1-s2",
                "titulo": "Limitações conceituais do modelo DIKW",
                "objetivoAprendizagem": "Aluno apontará as limitações do modelo DIKW e identificará generalizações falsas sobre ele.",
                "conteudo": "O DIKW é um modelo didático, não uma teoria formal. Suas limitações: (1) FRONTEIRAS DIFUSAS — as fronteiras entre dado, informação, conhecimento e sabedoria variam entre autores e contextos; informação é frequentemente definida como 'dado com contexto', mas o que conta como contexto não é padronizado. (2) LINEARIDADE — a representação em pirâmide sugere uma transformação mecânica e cumulativa, quando na prática há retrocesso: informação errada gera conhecimento falso, e sabedoria pode anteceder dados (decisão por princípio ético). (3) QUALIDADE IGNORADA — o modelo não trata de dado ruim: dado incompleto ou inconsistente atravessa a pirâmide sem que o modelo avise. (4) AGENTE INVISÍVEL — não explica quem interpreta nem como o conhecimento é legitimado em uma organização. (5) FALTA DE DEFINIÇÕES OPERACIONAIS — não serve, sozinha, para medir ou auditar nada. Em provas, o cuidado é tratar o DIKW como vocabulário de organização do pensamento e não como lei de transformação automática: 'mais dados' não garante 'mais sabedoria'.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Indique duas limitações do modelo DIKW e uma consequência prática de cada uma.",
                    "resposta": "Limite 1: fronteiras difusas entre os níveis — consequência: definições divergem entre fontes e alternativas de prova que afirmam 'a definição correta é X' costumam exigir a definição adotada pela banca. Limite 2: linearidade — consequência: planejar apenas 'coletar mais dados' não produz decisão melhor; é preciso etapa de interpretação e de revisão da decisão."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma diretoria anuncia implantação de 'base de conhecimento' para 'transformar informação em sabedoria'. Avalie a afirmação.",
                    "resposta": "A afirmação é publicitária. Uma base de conhecimento organiza informação e conhecimento explícito (procedimentos, decisões registradas), mas não transforma automaticamente nada em sabedoria: essa passagem depende de julgamento de pessoas em situações concretas. O ganho verificável está na qualidade da documentação, na busca e na manutenção — e deve ser medido por indicadores de uso e de acerto, não prometido como sabedoria."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'No modelo DIKW, dado, informação, conhecimento e sabedoria são estágios com definições únicas e universalmente aceitas.'",
                    "correcao": "Errado. As definições variam entre autores e o modelo é didático. Existe consenso suficiente para usar o vocabulário (dado bruto; informação contextualizada; conhecimento aplicado; sabedoria como discernimento), mas não há definição operacional única nem relação de causa automática entre os níveis."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A pirâmide DIKW garante que o aumento do volume de dados produz aumento proporcional de sabedoria.",
                    "resposta": "Errado. A pirâmide é representação didática; a passagem entre níveis exige interpretação e julgamento, e dado de qualidade ruim pode rebaixar o resultado em qualquer nível."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual limitação do DIKW decorre da ausência de critério para medir ou auditar seus níveis? A) falta de definições operacionais; B) uso de computadores; C) existência de dados não estruturados; D) necessidade de metadados.",
                    "resposta": "A"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-1-topico-2",
            "titulo": "Tipos e níveis de mensuração de dados",
            "subtopicos": [
              {
                "id": "m7-u1-t2-s1",
                "titulo": "Dados estruturados, semiestruturados e não estruturados",
                "objetivoAprendizagem": "Aluno classificará conjuntos de dados nos três formatos e justificará a classificação pelo grau de estrutura.",
                "conteudo": "ESTRUTURADOS: organizados em schema rígido — linhas e colunas com tipo, regra e domínio definidos de antemão (planilhas, tabelas de banco relacional). Permitem validação automática, consulta SQL e integração por chave. SEMIESTRUTURADOS: não há schema fixo imposto de fora, mas há marcadores internos que descrevem a estrutura — JSON, XML, CSV com cabeçalho livre, arquivos de log, páginas HTML. O marcador permite parsing e extração por ferramenta, ainda que campos apareçam ou faltem conforme o registro. NÃO ESTRUTURADOS: sem formato computável de campos — texto livre, PDF digitalizado, imagens, áudio, vídeo, e-mails (o corpo é texto livre; cabeçalhos, porém, são estruturados). Duas observações importantes: primeiro, o mesmo fato pode existir nos três formatos (um endereço em coluna de tabela, dentro de um JSON ou escrito em texto livre); segundo, a classificação trata da FORMA, não do valor — dado não estruturado não é 'dado pior', exige apenas técnicas distintas de extração (neste curso, sem prometer reconhecimento automático que não foi verificado).",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classifique: tabela de servidores com colunas; arquivo JSON de sensores; gravação em vídeo de uma audiência.",
                    "resposta": "Tabela de servidores: estruturado (schema rígido). JSON de sensores: semiestruturado (pares chave-valor, mas a presença de campos pode variar por registro). Vídeo: não estruturado (sem campos; exigiria transcrição ou extração para virar dado computável)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma secretaria recebe 500 formulários em PDF digitalizado e, em paralelo, o extrato das mesmas solicitações em tabela. Qual caminho exige menos transformação para apuração mensal?",
                    "resposta": "A tabela: é estruturado, permite soma e filtro imediatos. O PDF digitalizado é não estruturado e precisa de captura (digitação, leitura assistida ou extração) antes de qualquer apuração — etapa que introduz erro e demanda conferência. A decisão correta é registrar a etapa de conversão como risco de qualidade, não ignorá-la."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Arquivos JSON e XML são dados estruturados, pois sempre têm formato fixo.'",
                    "correcao": "Errado. São semiestruturados: os marcadores descrevem cada registro, mas não existe um schema único imposto sobre todos — campos podem faltar, mudar de nome ou de ordem. O estruturado exige schema fixo e validação de domínio (como tabela de banco relacional)."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Um arquivo de log de servidor é considerado semiestruturado porque contém marcadores que permitem sua leitura programática.",
                    "resposta": "Certo. O log tem padrão reconhecível (data, nível, mensagem), mas não é tabela com schema rígido — por isso é semiestruturado."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual conjunto é NÃO estruturado? A) tabela de funcionários; B) planilha de orçamento com colunas fixas; C) gravação de áudio de reunião; D) arquivo JSON com registros de sensores.",
                    "resposta": "C"
                  }
                ]
              },
              {
                "id": "m7-u1-t2-s2",
                "titulo": "Dados qualitativos e quantitativos",
                "objetivoAprendizagem": "Aluno diferenciará dados qualitativos de quantitativos e detectará a armadilha da codificação numérica.",
                "conteudo": "QUALITATIVOS (categóricos): descrevem atributos, qualidades ou categorias — cor da via, tipo de serviço prestado, satisfação relatada, bairro. Podem ser descritivos ou numéricos apenas por código. QUANTITATIVOS: valores numéricos sobre os quais aritmética é válida — quantificações e medidas. Subdivisão essencial: DISCRETO (contagem; valores separados; entre dois valores sempre há um impossível: número de atendimentos, de servidores, de reclamações — só existem valores inteiros) e CONTÍNUO (medição em intervalo; qualquer valor intermediário é possível em princípio: tempo de espera, temperatura, salário, peso — a resolução depende do instrumento). REGRA QUE DECIDE QUESTÃO DE PROVA: número escrito não significa dado quantitativo. Matrícula 20260012, CEP e telefone são códigos qualitativos (nominais): a média de matrículas não significa nada, e ordenar e subtrair CEP não produz distância geográfica. O critério é a validade da operação aritmética, não a presença de dígitos.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classifique: número de reclamações por mês; tempo médio de espera; bairro do reclamante; satisfação (ruim/regular/bom).",
                    "resposta": "Reclamações por mês: quantitativo discreto (contagem). Tempo médio de espera: quantitativo contínuo (medição de duração). Bairro: qualitativo nominal. Satisfação em três graus: qualitativo ordinal (há ordem, mas as distâncias não são medíveis)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "A equipe calculou a média das matrículas dos alunos admitidos e obteve 20260431. O que isso informa?",
                    "resposta": "Nada. Matrícula é identificador (qualitativo nominal codificado): média é uma operação aritmética sem sentido para códigos. O valor 20260431 não corresponde a nenhuma matrícula real e não deve ser usado em relatório. Informações úteis seriam contagem de admitidos, data de admissão (quantitativa) e curso (categórica)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Como o número de atendimentos está registrado como texto na planilha, ele é um dado qualitativo.'",
                    "correcao": "Errado. A classificação depende do SIGNIFICADO, não do tipo de armazenamento. '3 atendimentos' é contagem: quantitativo discreto, mesmo que digitado como texto. Tratar corretamente exige converter o tipo (limpeza de dados), não reclassificar o dado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O número de servidores em uma lotação é um dado quantitativo discreto.",
                    "resposta": "Certo. É contagem: só existem valores inteiros e valores intermediários não ocorrem."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual é quantitativo CONTÍNUO? A) cor do crachá; B) número de dependentes; C) tempo de trânsito; D) escolaridade em graus concluídos.",
                    "resposta": "C"
                  }
                ]
              },
              {
                "id": "m7-u1-t2-s3",
                "titulo": "Escalas nominal, ordinal, discreta e contínua (níveis de mensuração)",
                "objetivoAprendizagem": "Aluno determinará o nível de mensuração de uma variável e indicará quais estatísticas são legítimas para ele.",
                "conteudo": "NÍVEL NOMINAL: categorias sem ordem — UF, gênero informado, espécie de trâmite. Operações válidas: contagem, frequência, moda. NÃO vale ordenar nem calcular média. NÍVEL ORDINAL: há ordem, mas as distâncias entre graus não são comparáveis — satisfação (ruim<regular<bom), escolaridade por grau, faixa de pontuação. Valem contagem, moda e MEDIANA; a média exige suposição adicional que a escala não garante. NÍVEL DISCRETO: contagem com ordem e distâncias iguais (diferença de 1 atendimento significa o mesmo em qualquer ponto) — valem média, mediana, desvio padrão. NÍVEL CONTÍNUO: medição em intervalo com zero real ou arbitrário — valem toda a estatística descritiva; atenção ao zero: zero em escala de razão (peso) é ausência de quantidade, já zero em escala de intervalo (temperatura em Celsius) é ponto de convenção, o que proíbe dizer '20 °C é o dobro de 10 °C'. DECISÃO EM CONCURSO: pergunte-se o que a diferença entre dois valores significa — se ela não significa o mesmo em toda a escala, você está em ordinal ou abaixo.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Determinar o nível de mensuração e as estatísticas legítimas para: (a) classificação de serviço (A/B/C); (b) tempo de resposta em minutos; (c) porte do órgão (pequeno/médio/grande).",
                    "resposta": "(a) nominal: valem contagem e moda; ordenar A>B>C só se houver regra documentada de precedência. (b) contínuo: valem média, mediana, desvio padrão, quartis. (c) ordinal: valem contagem, moda e mediana; média não é natural porque a distância entre pequeno e médio pode não igualar a entre médio e grande."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Temperaturas registradas: 10 °C e 20 °C. Alguém afirma que '20 °C é o dobro de 10 °C'. Corrija.",
                    "resposta": "Erro de escala: Celsius é escala de INTERVALO, com zero de convenção — não é ausência de calor. Razões (dobro, metade) não têm significado; só diferenças (20 − 10 = 10 °C de diferença) são válidas. Para falar em proporção seria necessário um zero absoluto (escala Kelvin)."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Média, mediana e moda são sempre válidas, independentemente do nível de mensuração.'",
                    "correcao": "Errado. Em nominal, só moda (e contagens). Em ordinal, mediana e moda são seguras; média é discutível. Média e desvio padrão pressupõem escala de intervalo ou razão. Aplicar estatística acima do nível da variável produz número sem interpretação."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em escala ordinal, a mediana é uma medida de tendência central legitimamente aplicável.",
                    "resposta": "Certo. A mediana só usa ordem, e a ordem existe na escala ordinal."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Variável 'satisfação do cidadão: insatisfatório, satisfatório, muito satisfatório'. Qual nível e qual medida mais segura? A) nominal, média; B) ordinal, mediana; C) contínuo, desvio padrão; D) discreto, moda apenas.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-1-topico-3",
            "titulo": "Metadados, linhagem, catálogo e ciclo de vida",
            "subtopicos": [
              {
                "id": "m7-u1-t3-s1",
                "titulo": "Metadados: o que são e para que servem",
                "objetivoAprendizagem": "Aluno classificará metadados em técnicos, de negócio e de processo, e associará cada classe a um uso concreto.",
                "conteudo": "Metadado é dado sobre dado: descreve, contextualiza ou administra outro dado sem ser o conteúdo em si. TRÊS classes práticas. METADADOS TÉCNICOS (estruturais): nome da tabela e da coluna, tipo (inteiro, data, texto), tamanho, formato do arquivo, chave primária, partição, codificação — respondem 'como está armazenado'. METADADOS DE NEGÓCIO (descritivos): significado do campo ('prazo' é dias corridos ou úteis?), dono responsável, unidade de medida, regra de cálculo, classificação de sensibilidade — respondem 'o que significa e a quem pertence'. METADADOS DE PROCESSO/USO (operacionais): data e hora da extração, versão do job, quem consultou, de qual sistema veio — respondem 'como chegou e quem mexeu'. Utilidade: descoberta (localizar o dado), interpretação (entender sem chamar o autor), qualidade (validar tipo e domínio), governança (classificar e controlar acesso) e automação (alimentar catálogos e rotinas). Metadado ruim — ausente, desatualizado ou contraditório — degrada tudo: um dicionário de dados com versão antiga é pior que nenhum, porque gera confiança indevida.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Classifique como técnico, de negócio ou de processo: 'coluna valor_venda, tipo DECIMAL(12,2)'; 'prazo é contado em dias úteis'; 'extração executada em 2026-10-20 às 03h00'.",
                    "resposta": "Tipo de coluna: técnico. Regra de prazo em dias úteis: de negócio. Data/hora da extração: de processo. Os três coexistem para o mesmo dado e atendem a públicos diferentes (banco de dados, usuário do relatório e auditor de operação)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um relatório mostra 'tempo médio de espera = 0,04'. Interpretar sem metadados de negócio produz erro? Justifique.",
                    "resposta": "Sim. Sem unidade (dias? horas? fração de dia?) e sem regra de cálculo (média ponderada por posto?), 0,04 é ambíguo: pode ser 0,04 dia (≈58 minutos) ou 0,04 hora (≈2,4 minutos). O metadado de negócio resolve a ambiguidade; sem ele, a leitura correta do número é impossível."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Metadado é a descrição escrita que alguém faz do relatório em um manual em PDF.'",
                    "correcao": "Parcialmente errado. Essa é uma forma de metadado descritivo, mas há também metadado técnico (esquema, tipos) e operacional (carimbo de execução), frequentemente gerados automaticamente pelo próprio sistema. Reduzir metadado a 'manual' ignora a parte que permite validação e rastreio automático."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Tipo de dado, tamanho de coluna e chave primária são exemplos de metadados técnicos.",
                    "resposta": "Certo. Descrevem a estrutura de armazenamento."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual metadado responde 'a quem pertence e o que significa este campo'? A) tipo da coluna; B) dono do dado e regra de negócio; C) horário do backup; D) nome do arquivo.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u1-t3-s2",
                "titulo": "Linhagem (lineage) e catálogo de dados",
                "objetivoAprendizagem": "Aluno distinguirá linhagem de catálogo e usará cada um para responder a um problema concreto de auditoria.",
                "conteudo": "LINHAGEM (data lineage) é a trajetória do dado: da fonte de origem, pelas transformações, até o relatório final — quais campos alimentaram quais outros, em qual rotina, com qual frequência e em que versão. Responde 'DE ONDE VEIO ESTE NÚMERO e o que já passou por ele'. É o que permite rastrear um valor incorreto até a causa, medir impacto de uma mudança e atender auditoria. CATÁLOGO (data catalog) é o inventário pesquisável do acervo, com metadados de negócio e técnicos: descrição, dono, localização, classificação de sensibilidade, indicadores de qualidade, exemplos de uso. Responde 'O QUE EXISTE, O QUE SIGNIFICA e COMO ACHAR'. Relação: o catálogo registra a última linha da linhagem; a linhagem explica como a linha chegou lá. DIFERENÇA QUE COBRA GABARITO: catálogo é índice (estado); linhagem é histórico (fluxo). Ausência dos dois produz o sintoma clássico — ninguém confia no número porque ninguém consegue explicá-lo. Linhagem completa exige instrumentação nas etapas de transformação; registrar apenas 'fonte: sistema X' não é linhagem, é declaração de origem parcial.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "O número de um painel não bate com a base de origem. Qual recurso é consultado primeiro: catálogo ou linhagem?",
                    "resposta": "Linhagem — para percorrer as etapas (extração → transformação → carga → agregação do painel) e localizar em qual passo o valor divergiu. O catálogo é consultado em seguida para confirmar a definição do indicador, o dono responsável e a regra de cálculo."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma nova coluna será adicionada à tabela de pagamentos. O que a linhagem permite avaliar antes?",
                    "resposta": "O impacto: quais relatórios, integrações e agregações consomem aquela tabela (e quais consomem apenas colunas vizinhas, permanecendo estáveis), quais rotinas precisam de reprocessamento e quem deve ser notificado. Sem linhagem, a mudança vira experimento: o efeito só aparece quando o relatório do gestor quebra."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Ter um catálogo de dados significa que a organização já tem linhagem completa.'",
                    "correcao": "Errado. O catálogo descreve o estado atual dos ativos; a linhagem registra a trajetória e as transformações. Pode haver catálogo bem preenchido sem qualquer registro de transformação — nesse caso, sabe-se o que existe, mas não se sabe como o número foi calculado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Linhagem responde 'como este valor chegou até aqui'; catálogo responde 'o que existe e o que significa'.",
                    "resposta": "Certo. Fluxo histórico versus índice de ativos — essa é a distinção cobrada em provas."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Para descobrir em qual etapa um indicador foi corrompido, o instrumento adequado é: A) catálogo; B) linhagem; C) gráfico de barras; D) termo de consentimento.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u1-t3-s3",
                "titulo": "Ciclo de vida dos dados",
                "objetivoAprendizagem": "Aluno descreverá as fases do ciclo de vida e associará regras de retenção e descarte a cada fase.",
                "conteudo": "O ciclo de vida descreve as fases por que passa o dado, e cada fase exige controles próprios. 1) CRIAÇÃO/COLETA: definir finalidade, base de coleta, consentimento quando aplicável e qualidade mínima na origem (coletar o que será usado). 2) ARMAZENAMENTO/INTEGRAÇÃO: guardar com estrutura, metadados, backup e controle de acesso — dado integrado multiplica valor e também risco. 3) USO/COMPARTILHAMENTO: consulta, análise, publicação e envio a terceiros, sempre restritos à finalidade declarada. 4) ARQUIVAMENTO: guarda por obrigação legal ou auditável, com custo controlado e acesso mais restrito (dados frios). 5) DESCARTE/ELIMINAÇÃO: exclusão ou anonimização ao término da finalidade ou do prazo de retenção. REGRA DE OURO: retenção tem dois limites — mínimo (manter enquanto houver finalidade ou obrigação) e máximo (não manter indefinidamente 'por precaução'); manter além do necessário aumenta custo e exposição sem benefício. O ciclo é governado por metadados: sem registro de criação, dono e prazo, o descarte vira arbitrário — e a eliminação de dado que deveria ser arquivado é tão grave quanto o excesso de guarda.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Listar as cinco fases do ciclo de vida para um registro de ocorrência atendido por uma secretaria.",
                    "resposta": "1) Criação/coleta: registro no atendimento, com finalidade definida. 2) Armazenamento: base com backup, metadados e controle de acesso. 3) Uso: análise de demanda e resposta ao cidadão. 4) Arquivamento: guarda pelo prazo de accountability/auditabilidade. 5) Descarte: eliminação após o prazo, com registro da operação."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma área pede para manter 'indefinidamente, por precaução' a base de candidatos não aprovados em processo seletivo.",
                    "resposta": "Pedido incompatível com o ciclo de vida: a finalidade termina com o processo; manter além prorroga custo de armazenamento, risco de vazamento e obrigações de segurança. A conduta correta é definir prazo de retenção justificado (inclusive por eventual contencioso), restringir o acesso durante esse prazo e eliminar ou anonimizar ao término."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'No ciclo de vida dos dados, descarte significa apenas apagar o arquivo principal.'",
                    "correcao": "Errado. O descarte efetivo envolve cópias, backups, caches, exportações e extrações em ferramentas de análise. Apagar a base original mantendo cópias distribuídas não encerra o ciclo nem reduz o risco."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Conforme o ciclo de vida, dado deve ser eliminado quando encerrada a finalidade ou expirado o prazo de retenção.",
                    "resposta": "Certo. A guarda indefinida não é precaução: é custo e risco sem finalidade."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual fase exige definir finalidade e qualidade mínima na origem? A) arquivamento; B) coleta; C) descarte; D) compartilhamento.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-7-unidade-2",
        "titulo": "7.2 Qualidade, Integração e Transformação de Dados",
        "topicos": [
          {
            "id": "modulo-7-unidade-2-topico-1",
            "titulo": "Dimensões da qualidade de dados",
            "subtopicos": [
              {
                "id": "m7-u2-t1-s1",
                "titulo": "Acurácia, completude e validade",
                "objetivoAprendizagem": "Aluno diferenciará acurácia, completude e validade e calculará métricas simples de qualidade.",
                "conteudo": "ACURÁCIA: o valor registrado corresponde à realidade que ele representa — o nome do processo existe mesmo, o CPF pertence à pessoa dita, o valor do pagamento bate com o comprovante. Mede-se contra uma REFERÊNCIA EXTERNA (cadastro oficial, conferência manual, leitura física), o que a torna a dimensão mais cara de verificar. COMPLETUDE: os campos necessários estão preenchidos — mede-se pela fração de registros (ou de campo obrigatório) sem valor ausente. ATENÇÃO: completude é relativa à regra: telefone pode ser opcional e CPF obrigatório; contar nulos sem saber a regra não é medir qualidade. VALIDADE: o valor obedece ao formato, ao domínio e às regras definidas — data dentro do intervalo permitido, UF com dois dígitos válidos, valor não negativo, código presente na tabela de referência. A TRINCA COBRA GABARITO: valor válido (formato correto) pode ser falso (não acurado) e estar completo; validade se confere pela REGRA, acurácia pela REALIDADE e completude pela PRESENÇA. Métricas típicas: percentual de registros conformes por dimensão, calculado sobre a população relevante e documentando a regra usada.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Em uma base de 10 cadastros: 9 têm e-mail preenchido; 1 campo obrigatório vazio; 1 UF registrada como 'XX'. Calcular completude do e-mail e validade de UF.",
                    "resposta": "Completude do e-mail = 9/10 = 90%. Validade de UF = 9/10 = 90% (a linha com 'XX' viola o domínio de valores aceitos). Note que são métricas de campos diferentes: cada uma exige sua própria regra e seu próprio denominador."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Sistema mostra CPF 12345678900 com todos os dígitos preenchidos e formato correto, mas o titular real é outro. Qual dimensão está violada?",
                    "resposta": "Acurácia. A completude está ok (campo preenchido) e a validade também (formato e dígitos verificadores passam). A violação é de correspondência com a realidade, que só se detecta confrontando com referência — por isso a acurácia exige conferência ou fonte autoritativa."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se todos os campos estão preenchidos e no formato certo, a base é acurada.'",
                    "correcao": "Errado. Preenchimento (completude) e conformidade de formato (validade) não garantem correspondência com a realidade (acurácia). Formulários obrigatórios ampliam exatamente o risco de preenchimento inventado — é comum encontrar base 100% completa com erro de acurácia."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A validade de um dado é verificada confrontando-o com uma fonte autoritativa da realidade.",
                    "resposta": "Errado. Isso é acurácia. Validade é a aderência à regra/formato/domínio definido, verificável internamente."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Em 100 registros, 6 têm o campo 'data de nascimento' vazio. A completude desse campo é: A) 6%; B) 94%; C) 100%; D) indeterminável sem saber se o campo é obrigatório.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u2-t1-s2",
                "titulo": "Consistência, unicidade e tempestividade",
                "objetivoAprendizagem": "Aluno avaliará consistência, unicidade e tempestividade de uma base e explicará os conflitos entre dimensões.",
                "conteudo": "CONSISTÊNCIA: o mesmo fato é representado de forma compatível — dentro do registro (soma dos itens = total) e entre sistemas (saldo igual nos dois módulos; mesma pessoa com o mesmo nome na filial e na matriz). Mede-se por divergências em regras de reconciliação. Unicidade: cada entidade real aparece uma única vez — mede-se pela taxa de duplicatas (registros idênticos ou quase idênticos por erro de carga, reenvio ou cadastro duplo). TEMPESTIVIDADE: o dado está disponível no momento necessário e com latência aceitável — mede-se por data/hora da última atualização e pelo intervalo entre o fato e sua disponibilidade. Dado antigo pode ser acurado e completo e ainda assim inútil para decidir. CONFLITOS QUE ENRIQUECEM A QUESTÃO: deduplicar para ganhar unicidade pode reduzir completude se a regra de fusão descartar histórico; coletar tudo por precaução melhora completude e piora a minimização (guardar só o necessário) e a tempestividade (processar muito atrasa); exigir validação rígida na entrada reduz erro mas rejeita registros legítimos com formato incomum. Qualidade é gestão de trade-offs com métrica declarada — não um estado absoluto.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Identificar a dimensão violada: (a) filial registra 2,0 m de estante e a matriz, 200 cm, em bases separadas sem conversão; (b) três linhas idênticas do mesmo atendimento; (c) painel atualizado ontem, fato de hoje.",
                    "resposta": "(a) inconsistência (o mesmo fato, unidades incompatíveis — regra de conversão ausente). (b) violação de unicidade (duplicidade). (c) violação de tempestividade (latência inaceitável para a decisão apoiada)."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Base com 10 registros: 2 duplicatas exatas; 1 registro com data do fato posterior à data de atualização. Calcular taxa de duplicidade e apontar o outro problema.",
                    "resposta": "Taxa de duplicidade = 2/10 = 20% (unicidade = 80% dos registros sem duplicidade). O segundo caso viola consistência temporal: a data de atualização não pode ser anterior ao próprio fato — regra de integridade temporal que a conferência de unicidade não captura."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Uma base atualizada há um minuto e com formato perfeito é uma base de qualidade.'",
                    "correcao": "Errado. Apenas tempestividade e validade foram satisfeitas. A base pode estar incompleta, inconsistente com a filial, duplicada e imprecisa — qualidade exige avaliação conjunta das seis dimensões, com regras e denominadores declarados."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Duplicidade de registros é medida pela dimensão da unicidade.",
                    "resposta": "Certo. Unicidade quer uma linha por entidade real; duplicidade é a violação direta dessa expectativa."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O painel precisa do dado das 8h e só recebe às 18h. A dimensão violada é: A) acurácia; B) completude; C) tempestividade; D) validade.",
                    "resposta": "C"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-2-topico-2",
            "titulo": "Pipeline de dados: coleta, integração, armazenamento, transformação e consumo",
            "subtopicos": [
              {
                "id": "m7-u2-t2-s1",
                "titulo": "Estágios do pipeline de dados",
                "objetivoAprendizagem": "Aluno descreverá os cinco estágios do pipeline, indicando entradas, saídos e risco típico de cada um.",
                "conteudo": "Pipeline é o caminho percorrido pelo dado da fonte até o uso. 1) COLETA: captação nas fontes — sistemas transacionais, planilhas, formulários, aquisição externa, sensores. Risco típico: coletar sem direito de usar ou sem regra de qualidade; entrar com dado ruim contamina tudo a jusante ('lixo entra, lixo sai'). 2) INTEGRAÇÃO: junção das fontes em um conjunto coerente — chaves de ligação, reconciliação de conflitos (qual fonte prevalece quando divergem), resolução de granularidade (detalhe diário contra total mensal). Risco típico: chave mal padronizada gerando casamento errado ou linhas órfãs. 3) ARMAZENAMENTO: guarda com estrutura adequada ao uso — banco transacional para operação; repositório analítico (data warehouse/lake, em termos conceituais) para consulta histórica e agregação. Risco típico: guardar sem metadados, sem backup e sem controle de acesso. 4) TRANSFORMAÇÃO: limpeza, padronização, conversão de tipo, derivar campos, normalizar e agregar. Risco típico: regra não versionada — ninguém sabe mais como o número foi produzido. 5) CONSUMO: relatórios, painéis, análises, APIs e decisões. Risco típico: consumo sem definição de indicador, gerando números iguais com sentidos diferentes. GOVERNANÇA atravessa todos os estágios: finalidade, acesso, retenção e responsáveis.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Mapear os cinco estágios para apuração de indicadores de saúde a partir de notificações em planilhas de unidades.",
                    "resposta": "Coleta: envio das planilhas pelas unidades. Integração: consolidar as planilhas em base única, com chave de unidade e data, resolvendo formatos distintos. Armazenamento: repositório com histórico e metadados. Transformação: padronizar nomes de unidade, converter datas, deduplicar notificações repetidas. Consumo: painel de vigilância e relatório gerencial, com definição documentada de cada indicador."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Após carga, o total por unidade não fecha com o detalhe. Em qual estágio está a falha e o que verificar?",
                    "resposta": "Estágio de integração (reconciliação) — verificar chaves (unidade com nome abreviado divergente, por exemplo), granularidade (detalhe diário versus total mensal) e regra de prevalência entre fontes. A verificação é de consistência: soma dos filhos deve igualar o total; a diferença revela linha órfã ou duplicada."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se o consumo (painel) está correto, os estágios anteriores estão corretos.'",
                    "correcao": "Errado. O consumo só mostra o efeito: erro de origem pode ser mascarado por ajuste manual no relatório, e erro de transformação pode coincidir com o total errado. Validar exige conferência em cada estágio — entrada, transformação e saída — e não apenas o resultado final."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Regras de transformação devem ser versionadas e documentadas para permitir reprodução do resultado.",
                    "resposta": "Certo. Sem versão e documentação, o número não é reproduzível e nem auditável."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual estágio é responsável por resolver divergência entre duas fontes para o mesmo fato? A) coleta; B) integração; C) consumo; D) arquivamento.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u2-t2-s2",
                "titulo": "ETL e ELT: diferenças e quando aplicar cada um",
                "objetivoAprendizagem": "Aluno diferenciará ETL e ELT pela ordem das operações e justificará a escolha em cenários concretos.",
                "conteudo": "ETL = Extrair → Transformar → Carregar: os dados são tratados FORA do destino e só entram prontos. ELT = Extrair → Carregar → Transformar: os dados brutos entram primeiro no destino e são transformados LÁ, usando a capacidade de armazenamento e processamento do próprio destino. DIFERENÇA QUE MUDA O GABARITO: a ordem entre transformação e carga. Consequências: (a) ETL — controle do que entra, menor volume carregado, adequado quando o destino não deve receber bruto (por sensibilidade, custo ou regra de negócio) ou quando a origem exige tratamento antes de qualquer coisa; reprocessar com nova regra exige voltar à origem. (b) ELT — bruto disponível para reprocessar quantas vezes for preciso e evoluir regras sem reextrair; exige capacidade no destino e disciplina extra de governança, porque dado sensível fica guardado antes do tratamento. NÃO vale a generalização 'ETL é ultrapassado e ELT é moderno': a escolha depende de volume, capacidade do destino, exigência de auditoria, sensibilidade dos dados e custo de processamento. Nos dois casos o resultado final é dado tratado e pronto para consumo — a diferença é onde e em que ordem o trabalho acontece.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Descrever ETL e ELT com uma frase cada e apontar a diferença central.",
                    "resposta": "ETL: extrai da fonte, transforma em etapa intermediária e carrega pronto no destino. ELT: extrai e carrega bruto no destino e transforma lá dentro. Diferença central: a posição da transformação em relação à carga — ETL transforma antes; ELT transforma depois."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Cenário: dados sensíveis devem ser tratados antes de qualquer armazenamento em ambiente analítico compartilhado. ETL ou ELT?",
                    "resposta": "ETL — porque a transformação (neste caso, anonimização/tratamento) acontece antes da carga, evitando que dado sensível chegue bruto ao destino compartilhado. É o critério de privacidade e de regra de negócio prevalecendo sobre a capacidade técnica do destino."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Em ELT não há transformação: os dados são usados brutos.'",
                    "correcao": "Errado. ELT apenas inverte a ordem: a transformação acontece dentro do destino, depois da carga. O dado consumido é igualmente tratado; o que muda é o local e o momento do processamento."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em ETL, a transformação ocorre antes do carregamento no destino final.",
                    "resposta": "Certo. Essa é a definição literal: Extrair, Transformar, Carregar."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual fluxo caracteriza ELT? A) extrair → transformar → carregar; B) extrair → carregar → transformar; C) transformar → extrair → carregar; D) carregar → extrair → transformar.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-2-topico-3",
            "titulo": "Limpeza, padronização e normalização — os dois sentidos da palavra",
            "subtopicos": [
              {
                "id": "m7-u2-t3-s1",
                "titulo": "Valores ausentes e estratégias de tratamento",
                "objetivoAprendizagem": "Aluno classificará os tipos de ausência e escolherá estratégia de tratamento coerente com a causa.",
                "conteudo": "Valor ausente não é um só fenômeno. Formas de ausência: nulo explícito, string vazia, marcador textual ('N/A', '-'), zero substituto (o pior: mascara ausência com aparência de medida) e ausência lógica (campo que só deveria existir se outra condição fosse verdadeira — estado civil casado exige nome do cônjuge). ESTRATÉGIAS: (1) exclusão da linha — simples, mas perde informação e enviesa quando a ausência não é aleatória; (2) exclusão da coluna — razoável quando o campo está majoritariamente ausente ou sem uso declarado; (3) imputação por valor fixo (média, mediana ou moda) — mantém a quantidade de registros, porém reduz a variabilidade e atenua diferenças reais; (4) imputação por vizinho, modelo ou série temporal — mais fiel quando há informação preditora, mais cara e mais fácil de justificar mal; (5) indicador de ausência (coluna 'valor_faltou') — preserva o fato de que faltou, permitindo análise própria. CRITÉRIO DECISIVO: antes de imputar, classifique a CAUSA. Se a ausência é aleatória (não depende de nada observado ou não observado), a imputação é relativamente segura; se depende de valores observados, use-os na imputação; se depende do valor ausente em si (ex.: pessoas com maior renda omitem renda), qualquer imputação cega introduz viés silencioso — declare a limitação. Ausência pode ser INFORMAÇÃO: 'profissão' vazio para menor de idade é sinal, não falha.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Base de 200 salários com 10 ausentes, distribuídos aleatoriamente. Qual tratamento adequado?",
                    "resposta": "Imputação por mediana (ou exclusão, com registro do total perdido) é aceitável, pois a ausência não segue padrão observável: 10/200 = 5% de perda. Deve-se documentar a taxa de ausência e a regra usada — e conferir se a conclusão muda com os dois tratamentos."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Em pesquisa de satisfação, respondeu apenas quem ficou insatisfeito (80% dos questionários). O que imputar?",
                    "resposta": "Nada: imputar mascararia o problema. A ausência é seletiva (depende da insatisfação — causa não observada naqueles que não responderam), logo a amostra é enviesada. A conduta correta é declarar o viés de não-resposta, buscar nova coleta ou limitar a conclusão ao que os dados suportam."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Campo com ausência deve receber sempre a média — é a regra padrão de limpeza.'",
                    "correcao": "Errado. Imputar média é uma opção entre várias e só é defensável quando a ausência não é seletiva e a média é representativa. Para variáveis com outliers, a mediana costuma ser mais robusta; para variáveis categóricas, a moda; para ausência informativa, o indicador de ausência. Repetir 'sempre média' transforma viés em número arredondado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Substituir valores ausentes por zero é uma boa prática universal de limpeza.",
                    "resposta": "Errado. Zero é um valor legítimo em muitas variáveis; substituir ausência por zero confunde 'não medido' com 'medido e igual a zero' e distorce médias e somas."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quando a ausência de resposta depende do próprio valor não respondido, o tratamento mais honesto é: A) imputar média; B) imputar mediana; C) declarar o viés e limitar a conclusão; D) excluir a coluna inteira.",
                    "resposta": "C"
                  }
                ]
              },
              {
                "id": "m7-u2-t3-s2",
                "titulo": "Duplicidades, inconsistências e erros de tipo",
                "objetivoAprendizagem": "Aluno detectará e tratará duplicidades, inconsistências e erros de tipo sem introduzir efeito colateral.",
                "conteudo": "DUPLICIDADES: causas típicas — reenvio de formulário, carga executada duas vezes, cadastro paralelo em duas unidades. Detecção em três graus: chave exata (mesmo CPF ou mesmo ID), chave normalizada (removendo espaços, caixa, acentos e pontuação — 'Maria Silva' = 'MARIA  SILVA ') e similaridade (aproximada, com limiar declarado). Tratamento: manter a versão mais completa ou mais recente, fundir campos complementares, ou manter ambas com marcador e regra de prevalência. INCONSISTÊNCIAS: regras violadas dentro do registro (data_fim anterior a data_inicio; soma dos itens diferente do total) ou entre sistemas (unidades incompatíveis: 2,0 m contra 200 cm; mesma pessoa com nome divergente). Tratamento: regra de reconciliação documentada e, quando não houver autoridade, escalonar para o dono do dado — inventar o valor 'para fechar' é fabricar dado. ERROS DE TIPO: número guardado como texto ('R$ 1.234,56', '1,5' em campo decimal), data como texto com formato variado, decimal com vírgula em destino que espera ponto. Consequências SILENCIOSAS: soma que ignora linhas não numéricas, comparação lexicográfica ('10' vem antes de '9' em ordem de texto), filtro que não encontra o que existe. Tratamento: conversão explícita com relatório de falhas — nunca coerção automática sem registro. PADRONIZAÇÃO: unificar caixa e espaçamento, datas no padrão internacional ISO 8601 (AAAA-MM-DD), unidades no SI, telefones com código do país quando houver envio internacional.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Uma coluna de valores tem as entradas: '1.234,56', 'R$ 200', '300', 'abc'. Que regra de conversão é segura?",
                    "resposta": "Regra explícita: remover símbolo de moeda, converter o separador de milhar e o decimal conforme convenção declarada (aqui, ponto = milhar e vírgula = decimal) e reportar as linhas que não convertem. A entrada 'abc' não pode virar 0 nem ser descartada em silêncio: deve ser listada para correção na origem."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Na ordenação de texto, os valores '9' e '10' aparecem como 10 antes de 9. Explicar a causa e corrigir.",
                    "resposta": "Causa: a coluna é texto; ordenação lexicográfica compara caracteres, e '1' < '9'. Correção: converter para tipo numérico (int) e ordenar por valor — após a conversão, 9 < 10. O caso ilustra por que erro de tipo passa despercebido: o sistema não avisa, apenas ordena 'errado'."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Para eliminar duplicidades, basta remover linhas com CPF repetido mantendo a primeira.'",
                    "correcao": "Errado por duas razões: a primeira linha pode ser a menos completa ou mais antiga, e fundir pode descartar informação complementar (endereço novo, telefone atualizado). A condução correta é definir chave, regra de prevalência (mais recente/mais completo/fonte autoritativa) e registrar a fusão."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em coluna de texto, '10' ordena antes de '9', porque a comparação é feita caractere a caractere.",
                    "resposta": "Certo. É o efeito clássico de erro de tipo: ordem lexicográfica, não numérica."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Duas unidades reportam '2,0 m' e '200 cm' para a mesma estante. O problema é: A) duplicidade; B) inconsistência por unidade incompatível; C) ausência de valor; D) erro de digitação obrigatório.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u2-t3-s3",
                "titulo": "Normalização ESTATÍSTICA: padronização (z-score) e redimensionamento (min-max)",
                "objetivoAprendizagem": "Aluno aplicará z-score e min-max a valores reais, interpretará o resultado e limitará o uso correto.",
                "conteudo": "PRIMEIRO SENTIDO DA PALAVRA. Normalização estatística = transformar os VALORES de uma variável para que fiquem em uma escala comum, mantendo a ordem relativa. PADRONIZAÇÃO (z-score): z = (x − média) ÷ desvio padrão. O resultado é medido em 'desvios-padrão da média', permite comparar variáveis com unidades diferentes e é insensível a mudança de unidade. REDIMENSIONAMENTO (min-max): x' = (x − mínimo) ÷ (máximo − mínimo), levando tudo para a faixa [0; 1] — útil quando a faixa absoluta importa ou quando algoritmos exigem entradas entre 0 e 1. PARA QUÊ: combinar variáveis em um índice (idade e renda em escores comparáveis), comparar distribuições de unidades distintas, preparar dados para técnicas sensíveis à escala. LIMITAÇÕES E ARMADILHAS: (a) os parâmetros dependem da amostra — min e max extremos esmagam todo o resto em min-max; (b) normalizar NÃO torna a distribuição normal, apenas muda a régua; (c) o dado normalizado perde a unidade original — guarde média, desvio, mínimo e máximo para reverter; (d) outliers contaminam média, desvio, mínimo e máximo — decida antes se eles ficam. REGRA MNEMÔNICA: normalização estatística mexe nos números, nunca na estrutura das tabelas.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Calcular o z-score de uma nota 85 em prova com média 70 e desvio padrão 10, e interpretar.",
                    "resposta": "z = (85 − 70) ÷ 10 = 1,5. Interpretação: a nota está 1,5 desvio-padrão acima da média. Comparando com outra prova (média 60, desvio 5) e nota 70: z = (70 − 60) ÷ 5 = 2,0 — a segunda nota é relativamente melhor, ainda que em valor absoluto menor."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Redimensionar por min-max o valor 85 de uma variável cujo mínimo é 60 e máximo 100; depois, o valor 60.",
                    "resposta": "Para 85: (85 − 60) ÷ (100 − 60) = 25 ÷ 40 = 0,625. Para 60: (60 − 60) ÷ 40 = 0 — o mínimo vira 0 e o máximo vira 1, definindo a régua. Um novo valor fora da faixa (ex.: 110) produziria 1,25, sinal de que a escala foi rompida — típico quando se aplica a fórmula a dados não vistos."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Aplicar z-score torna os dados com distribuição normal.'",
                    "correcao": "Errado. O z-score apenas recentraliza em zero e mede em unidades de desvio-padrão; a forma da distribuição permanece a mesma (a transformação é linear e mantém a assimetria). Tornar a distribuição normal exigiria transformação não linear, que é outra coisa."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A transformação min-max leva os valores para a faixa de 0 a 1, definindo mínimo e máximo como extremos da régua.",
                    "resposta": "Certo. É a definição: x' = (x − min) ÷ (max − min), com x' = 0 no mínimo e 1 no máximo."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Valor 85, média 70, desvio padrão 10. O z-score é: A) 0,7; B) 1,5; C) 15; D) 8,5.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u2-t3-s4",
                "titulo": "Normalização de BANCOS DE DADOS: formas normais e contraste com a estatística",
                "objetivoAprendizagem": "Aluno aplicará 1FN, 2FN e 3FN a uma tabela e formulará a diferença entre os dois sentidos de normalização.",
                "conteudo": "SEGUNDO SENTIDO DA PALAVRA. Normalização de banco de dados = reorganizar a ESTRUTURA das tabelas para eliminar redundância e dependências indesejadas, garantindo que cada fato seja registrado uma única vez. 1FN (primeira forma normal): valores atômicos — nenhuma célula com lista ou repetição; exemplo: coluna 'telefones' com '99999-0001, 3333-0002' viola 1FN; a correção é uma tabela TELEFONES ligada ao cliente. 2FN: nenhuma dependência PARCIAL — colunas que dependem de apenas parte de uma chave composta; exemplo: em PEDIDO_PRODUTO(id_pedido, id_produto, nome_cliente, preço), nome_cliente depende só do pedido, não do par (pedido, produto) — sai para outra tabela. 3FN: nenhuma dependência TRANSITÓRIA — coluna dependente de outra não-chave; exemplo: no mesmo PEDIDO, 'nome_cliente' e 'estado_cliente' — estado depende do cliente, não do pedido; separar em CLIENTE. GANHO: consistência (atualiza-se o cliente em um lugar só) e eliminação de anomalias de inserção, atualização e exclusão. CUSTO: leitura frequentemente exige junção — por isso ambientes analíticos DENORMALIZAM de propósito, com justificativa de desempenho e risco controlado. CONTRASTE EXPLICITAMENTE: normalização ESTATÍSTICA muda a ESCALA dos valores de uma variável (z-score, min-max); normalização de BANCOS muda a ORGANIZAÇÃO das tabelas (formas normais). Um domínio fala de valores, o outro de esquema. A pergunta da prova revela o sentido: 'z-score/min-max' é estatística; '1FN/2FN/3FN, redundância, dependência parcial' é banco de dados.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Tabela MATRICULA(aluno, disciplina, nota, nome_aluno, curso_do_aluno). Aplicar 3FN.",
                    "resposta": "nome_aluno depende de aluno e curso_do_aluno depende de aluno — ambos dependem transitivamente da chave (aluno, disciplina). Correção: ALUNO(aluno, nome_aluno, curso) e MATRICULA(aluno, disciplina, nota). Agora, mudar o curso de um aluno exige atualizar um registro, e não todas as suas matrículas."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Por que atualizar o endereço de um cliente em uma tabela não normalizada pode criar inconsistência?",
                    "resposta": "Porque o endereço está repetido em N linhas (uma por pedido, por exemplo). Se a atualização alcançar apenas parte delas, o mesmo cliente aparece com dois endereços — inconsistência gerada pela redundância. Em 3FN, o endereço mora uma vez em CLIENTE e é referenciado por chave."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Normalizar significa transformar os valores das colunas para a faixa de 0 a 1.'",
                    "correcao": "Errado: isso é normalização/escalonamento ESTATÍSTICO. No contexto de bancos de dados, normalizar significa reduzir redundância dividindo tabelas conforme as formas normais — nenhum valor é alterado; o que muda é a estrutura."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Em 2FN, proíbe-se dependência de coluna que dependa somente de parte da chave composta.",
                    "resposta": "Certo. Dependência parcial é exatamente o que a 2FN elimina."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "'nome_cliente' repetido em todos os pedidos do mesmo cliente, devendo ser atualizado em cada linha. Qual problema e qual forma norma resolve? A) dependência transitória, 3FN; B) dependência parcial, 2FN; C) valor não atômico, 1FN; D) ausência de valor, nenhuma forma norma.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-2-topico-4",
            "titulo": "Agregação, agrupamento e deduplicação",
            "subtopicos": [
              {
                "id": "m7-u2-t4-s1",
                "titulo": "Agregação e agrupamento (e o erro da média de médias)",
                "objetivoAprendizagem": "Aluno agregará dados por grupo calculando corretamente a média global e explicará por que médias de médias erram.",
                "conteudo": "AGREGAÇÃO é reduzir granularidade com uma função de resumo: soma, contagem, média, mediana, mínimo, máximo, percentil, razão. AGRUPAMENTO é particionar os registros por uma chave (unidade, mês, faixa, categoria) antes de agregar. A granularidade escolhida define a pergunta possível: agregar por mês responde sobre tendência, por unidade responde sobre desempenho — e agregar demais pode esconder o problema (agregar municípios no estado apaga a pior região). O ERRO CLÁSSICO DE CONCURSO: média de médias. Somar médias de grupos e dividir pelo número de grupos só está certo se todos os grupos tiverem o mesmo tamanho; caso contrário, a média correta é PONDERADA pelo tamanho de cada grupo. Exemplo verificado: turma A com 10 alunos e média 5; turma B com 30 alunos e média 7. Média simples das médias = (5 + 7) ÷ 2 = 6,0 — ERRADA. Média global ponderada = (10×5 + 30×7) ÷ 40 = (50 + 210) ÷ 40 = 260 ÷ 40 = 6,5 — CORRETA. O mesmo vale para variação percentual (média de percentuais sem ponderar distorce o total) e para razões (somar percentuais de participação não dá 100% se os denominadores diferem). Mediana e percentis NÃO são agregáveis por soma nem por média: a mediana de medianas não é a mediana do todo.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Três postos: 4 atendimentos, 6 atendimentos e 10 atendimentos. Tempo médio de espera: 20, 30 e 40 minutos. Média global de espera?",
                    "resposta": "Ponderada: (4×20 + 6×30 + 10×40) ÷ (4 + 6 + 10) = (80 + 180 + 400) ÷ 20 = 660 ÷ 20 = 33 minutos. A média simples das três médias daria (20 + 30 + 40) ÷ 3 = 30 minutos — subestimaria o tempo real, porque o posto mais lento atendeu mais gente."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Um relatório soma os percentuais de participação de cinco unidades (22% + 25% + 18% + 20% + 15%) e obtém 100%. Isso prova consistência?",
                    "resposta": "Não. A soma fecha por construção quando os cinco percentuais usam o MESMO denominador (total geral). Se cada percentual foi calculado sobre o total da própria unidade, a soma não significa nada — antes de somar percentuais, confirme o denominador de cada um."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'A média geral de um conjunto é a média aritmética simples das médias dos grupos.'",
                    "correcao": "Errado, salvo quando os grupos têm exatamente o mesmo tamanho. Com tamanhos diferentes, é preciso ponderar pela frequência de cada grupo — do contrário, um grupo pequeno pesa tanto quanto um grande, e o resultado é um número arredondado sem correspondência com o todo."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) A mediana global pode ser obtida calculando a média das medianas dos grupos.",
                    "resposta": "Errado. Mediana não é agregável por média de medianas; é preciso recomputar a mediana sobre os dados individuais do conjunto (ou usar método formal de agregação de medianas, que não é simplesmente a média)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Grupo 1: 20 registros, média 10. Grupo 2: 80 registros, média 20. A média global é: A) 15; B) 18; C) 12; D) 25.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u2-t4-s2",
                "titulo": "Deduplicação: chaves de identidade, fusão e riscos",
                "objetivoAprendizagem": "Aluno definirá regra de identidade e fusão para deduplicar, justificando os dois tipos de erro possíveis.",
                "conteudo": "DEDUPLICAÇÃO é identificar registros que representam a mesma entidade real e tratá-los segundo regra documentada. CHAVES DE IDENTIDADE, em grau crescente de risco: (1) identificador exato e confiável (CPF/CNPJ com dígito verificador, matrícula, protocolo) — o mais seguro; (2) composição de campos normalizados (nome sem acento e caixa + data de nascimento + CPF parcial); (3) similaridade (distância de edição, correspondência de e-mail) — exige limiar declarado e sempre produz incerteza. FUSÃO (merge): decidir qual registro sobrevive e como combinar — prevalência por fonte autoritativa (o cadastro oficial prevalece sobre a planilha), por completude ou por recência, unindo campos complementares. OS DOIS ERROS FUNDAMENTAIS: falso positivo (fundir duas pessoas diferentes — homônimos, gêmeos, pessoas com dados iguais por acaso) e falso negativo (deixar a mesma pessoa duplicada por diferença de grafia). Ambos têm custo, e o limiar é uma DECISÃO DE RISCO, não um número universal. HIGIENE DO PROCESSO: manter cópia dos registros originais, registrar qual registro sobreviveu e por quê, e reexecutar de forma controlável — deduplicação irreversível sem trilha impede auditoria e correção.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Dois registros: CPF idêntico, nomes 'João P. Silva' e 'JOAO PAULO SILVA', endereços diferentes (antigo e atual). Tratamento?",
                    "resposta": "Mesma entidade (CPF confiável) com atributos divergentes: fundir por prevalência de recência/endereço mais atualizado, preservando histórico. Registrar a decisão e manter os originais. Não basta apagar uma linha: a fusão precisa justificar o que sobreviveu."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Base de pacientes sem CPF, com apenas nome e data de nascimento. Deduplicar apenas por similaridade de nome traz qual risco principal?",
                    "resposta": "Falso positivo: fundir pacientes diferentes que são homônimos — em base de saúde, o efeito é clínico, não só estatístico. A mitigação é elevar a exigência (combinar nome + data + unidade de cadastro), marcar a incerteza dos casos difíceis e preferir revisão humana nos pares de baixa margem."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Deduplicação é uma rotina técnica sem decisão de negócio — a ferramenta decide sozinha.'",
                    "correcao": "Errado. Chave de identidade, limiar de similaridade e regra de prevalência são decisões de negócio e de risco: definem quem é o mesmo e quem prevalece. Ferramenta executa a regra; ela não pode inventá-la sem que alguém responda pelas consequências."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Deduplicar com regra baseada apenas em nome aumenta o risco de fundir pessoas diferentes (falso positivo).",
                    "resposta": "Certo. Nome é atributo de baixa especificidade; sem identificador confiável, a fusão é uma aposta."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Manter duas linhas para a mesma pessoa real é qual erro? A) falso positivo; B) falso negativo; C) violação de validade; D) erro de tipo.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-7-unidade-3",
        "titulo": "7.3 Governança, Anonimização e Proteção de Dados",
        "topicos": [
          {
            "id": "modulo-7-unidade-3-topico-1",
            "titulo": "Anonimização, pseudonimização e riscos de reidentificação",
            "subtopicos": [
              {
                "id": "m7-u3-t1-s1",
                "titulo": "Anonimização x pseudonimização",
                "objetivoAprendizagem": "Aluno diferenciará anonimização e pseudonimização pela capacidade de reatribuição da identidade.",
                "conteudo": "ANONIMIZAÇÃO: transformação que elimina a possibilidade de reconstruir a identidade do titular a partir do conjunto publicado — remove identificadores diretos e reduz o poder discriminante dos atributos restantes (supressão de campo, generalização em faixas, agregação, troca por valor sintético). O resultado efetivamente anônimo deixa de ser dado pessoal, porque ninguém consegue voltar ao titular. PSEUDONIMIZAÇÃO: substituir o identificador direto por um código (pseudônimo, token), mantendo a tabela de reatribuição separada, protegida e controlada. O dado continua sendo DADO PESSOAL, pois a identificação permanece possível para quem detém a chave. REGRA QUE DECIDE GABARITO: 'anonimizar mantendo a chave em um cofre' é pseudonimização, não anonimização — a chave é o que separa os dois conceitos. Pseudonimização é medida de SEGURANÇA (reduz exposição, permite analysis com reidentificação controlada e trilha de auditoria); anonimização é descaracterização (diferente: não há mais como reatribuir). A escolha é de finalidade: dado para pesquisa agregada pede anonimização; dado para operação com controle de acesso pede pseudonimização. Atenção prática: anonimização mal feita (mantendo quase-identificadores granulares) é pseudonimização disfarçada.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Base de saúde: substituir CPF por id_token e guardar a tabela id_token↔CPF em cofre acessível ao encarregado. O que foi feito?",
                    "resposta": "Pseudonimização. O identificador direto saiu da base de análise, mas a reatribuição é possível pela chave guardada. Por isso a base continua sendo de dados pessoais e exige as mesmas salvaguardas de acesso, registro e finalidade — com a vantagem de menos pessoas terem contato com a identificação direta."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma prefeitura quer publicar base de gastos por servidor para transparência. Que transformações aproximam de anonimização?",
                    "resposta": "Suprimir identificadores diretos (nome, CPF, matrícula) e reduzir a granularidade dos quasi-identificadores (cargo genérico em vez de lotação exata, faixa salarial em vez de valor exato, sem data de pagamento no dia exato), além de suprimir combinações raras. Publicar por agregados (por cargo, unidade e mês) é mais seguro do que publicar linha a linha — e atende a finalidade de transparência."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Se removermos o nome e o CPF, os dados já são anonimizados.'",
                    "correcao": "Errado. A reidentificação costuma ocorrer pela COMBINAÇÃO de atributos remanescentes (idade, CEP, cargo, data) — os chamados quasi-identificadores. Remover apenas identificadores diretos é o primeiro passo, não a conclusão; sem redução de granularidade e avaliação de risco, o dado continua identificável."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Pseudonimização descaracteriza o dado, de modo que ele deixa de ser dado pessoal.",
                    "resposta": "Errado. Enquanto houver chave de reatribuição, o dado continua sendo pessoal; a pseudonimização é medida de segurança, não descaracterização."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "O que separa anonimização de pseudonimização? A) o tipo de banco usado; B) a existência de chave que permite reatribuir a identidade; C) a quantidade de registros; D) o uso de criptografia no trânsito.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u3-t1-s2",
                "titulo": "Riscos de reidentificação",
                "objetivoAprendizagem": "Aluno identificará quasi-identificadores e descreverá ataques de recorte e suas mitigações.",
                "conteudo": "REIDENTIFICAÇÃO é o processo de voltar a identificar titulares em bases que se supunham anônimas, usando QUASI-IDENTIFICADORES: atributos que, isoladamente, não identificam, mas em combinação restringem o espaço até uma pessoa — idade, sexo, CEP, data de nascimento, cargo, lotação, data de atendimento. MECANISMO CLÁSSICO (ataque de recorte / mosaicismo): o publicador filtra a base; quando o recorte restante contém 1 ou 2 pessoas, a identidade é trivial (ex.: 'servidor do setor X, no município Y, com 34 anos' em base de três pessoas). SITUAÇÕES DE ALTO RISCO: bases públicas com granularidade individual, cruzamento com bases livres (listas de eleitores, cadastros, redes), atributos raros (cargos incomuns, endereços específicos) e sequências de tempo/localização finas. MITIGAÇÕES CONCEITUAIS: agregar (faixa etária, faixa de CEP, mensal em vez de diário), suprimir atributos raros, exigir que cada recorte de quasi-identificadores tenha no mínimo k indivíduos (k-anonimato, noção de projeto) e que os atributos sensíveis variem dentro do recorte (noção de diversidade), testar reidentificação antes de publicar e PREFERIR AGREGADOS POR PADRÃO. Princípio prático: quanto mais fina a granularidade publicada, maior o risco — transparência e privacidade se reconciliam no nível agregado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Tabela publicada com colunas idade, CEP e cargo. Por que ainda é identificável?",
                    "resposta": "Porque a tripla (idade, CEP, cargo) é um quasi-identificador de alta capacidade de recorte: combinada com qualquer lista pública que contenha esses atributos, o espaço de pessoas compatíveis frequentemente cai a um único indivíduo. Sem agregação de faixas, a remoção do nome não protege nada."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Antes de publicar microdados de atendimentos, que verificação prática reduziria o risco?",
                    "resposta": "Simular o ataque: agrupar por combinações de quasi-identificadores (sexo + faixa etária + bairro + tipo de atendimento) e verificar o tamanho de cada grupo; recortes com um único indivíduo são auto-reveladores. Mitigar com faixas mais amplas, supressão de combinações raras e, quando necessário, publicar apenas agregados — registrando a decisão e sua justificativa."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Base anônima não pode ser reidentificada, de modo que o risco de publicação é nulo.'",
                    "correcao": "Errado. Anonimização é medida de risco, não garantia absoluta: depende do contexto, das bases disponíveis para cruzamento e da granularidade. Publicação exige avaliação de risco contemporânea — o que era seguro ontem pode deixar de ser quando uma nova base vira pública."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Idade, CEP e cargo são exemplos de quasi-identificadores.",
                    "resposta": "Certo. Isoladamente não identificam; combinados, restringem o recorte até a pessoa."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Publicar base com recorte de 1 pessoa em 'município + cargo + faixa de idade' ilustra qual ataque? A) força bruta; B) recorte (mosaicismo); C) engenharia social; D) negação de serviço.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          },
          {
            "id": "modulo-7-unidade-3-topico-2",
            "titulo": "Governança, acesso, minimização e proteção de dados",
            "subtopicos": [
              {
                "id": "m7-u3-t2-s1",
                "titulo": "Governança de dados: papéis, políticas e padrões",
                "objetivoAprendizagem": "Aluno descreverá a governança de dados e atribuirá responsabilidades aos papéis envolvidos.",
                "conteudo": "Governança de dados é o conjunto de POLÍTICAS, PAPEIS, PADRÕES e PROCESSOS que decidem como o dado é gerenciado — quem responde, com que regras e com que controles — do acesso ao descarte. Objetivos: valor (dado confiável e descobrível para decidir), conformidade (tratamento compatível com a lei e com a política interna) e risco (controle de vazamento, uso indevido e perda). PAPÉIS: DONO DO DADO (accountable pelo conteúdo, pelas regras de negócio e pela qualidade de seu domínio); STEWARD (executa: mantém metadados, dicionário, qualidade e resolve dúvidas de significado); ENCARREGADO (ponto focal de privacidade e de diálogo com titulares — figura exigida pela LGPD); ARQUITETO/ENGENHEIRO (modela, transforma e documenta); COMITÊ DE GOVERNANÇA (resolve conflitos e prioriza). INSTRUMENTOS: política de dados, dicionário e catálogo, padrões de nomenclatura e de codificação, classificação da informação (público, interno, confidencial, sensível), SLA e indicadores de qualidade, trilha de auditoria. SINTOMA DE AUSENCIA: cada área calcula o mesmo indicador de um jeito e o debate vira discussão de números em vez de discussão de decisão. Governança não é comitê eterno: é conjunto de decisões registradas e executadas.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Indicador de 'atendimento médio' diverge entre duas áreas. O que a governança prevê?",
                    "resposta": "O dono do dado do domínio define a regra (o que conta como atendimento, qual período, qual unidade de medida), o steward registra no dicionário/catálogo e as duas áreas passam a consumir a mesma definição. Sem isso, a divergência se repete a cada fechamento."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Uma secretaria quer criar 'base mestre de cidadãos'. Que papéis devem ser definidos antes da tecnologia?",
                    "resposta": "Dono do dado (que responde pela correção e pelas regras de atualização), steward (que mantém metadados e qualidade), encarregado (que responde por privacidade e acesso), além de regras de prevalência entre fontes e critério de classificação da sensibilidade. Definir ferramenta sem papéis produz base órfã, que ninguém corrige."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Governança de dados é sinônimo de implantação de catálogo.'",
                    "correcao": "Errado. Catálogo é um instrumento; governança é o sistema de decisões, papéis e políticas que o torna útil e mantido. Catálogo sem dono definido e sem processo de atualização vira retrato do passado."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) O dono do dado responde pelo significado, pelas regras de negócio e pela qualidade do seu domínio.",
                    "resposta": "Certo. É a definição de trabalho do papel: accountability sobre o conteúdo, não apenas operação."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quem é o ponto focal de privacidade e diálogo com os titulares? A) steward; B) encarregado; C) arquiteto de dados; D) auditor financeiro.",
                    "resposta": "B"
                  }
                ]
              },
              {
                "id": "m7-u3-t2-s2",
                "titulo": "Controle de acesso e minimização de dados",
                "objetivoAprendizagem": "Aluno aplicará os princípios de menor privilégio e minimização a cenários de coleta e compartilhamento.",
                "conteudo": "ACESSO: conceder somente o necessário, pelo menor tempo e com registro. Instrumentos: perfis por função (segregação entre quem coleta, quem aprova e quem audita), princípio do menor privilégio (nenhum usuário com mais permissão que a exigida pela tarefa), autenticação forte, expiração de acesso, trilha de auditoria (quem acessou o quê, quando e por qual finalidade) e revisão periódica de permissões. MINIMIZAÇÃO: coletar e manter apenas o necessário à finalidade declarada — coleta proporcional (campo obrigatório só quando essencial), retenção limitada (não manter 'por precaução'), granularidade mínima (precisa de faixa etária? não colete data de nascimento) e descarte ao fim da finalidade. Os dois princípios convergem: menos dado coletado e menos gente com acesso significa menos superfície de vazamento. Atenção às práticas habituais: formulários com dezenas de campos 'para o futuro' (coleta especulativa), acesso permanente concedido em urgência e nunca revogado, e compartilhamento por planilha em pasta aberta — são as portas mais comuns de incidente, e nenhuma delas exige ataque sofisticado.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Formulário de inscrição tem 25 campos; a análise usa 8. O que a minimização recomenda?",
                    "resposta": "Reduzir a coleta aos 8 campos essenciais à finalidade (e aos que a norma do programa exige) e justificar documentadamente qualquer campo remanescente. Cada campo não usado é custo de proteção, risco de vazamento e obstáculo ao preenchimento — coletar 'por via das dúvidas' viola a minimização."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Analista precisa consultar dados pessoais por duas semanas para um estudo pontual. Como estruturar o acesso?",
                    "resposta": "Conceder perfil restrito ao domínio necessário, com vigência de duas semanas e registro em trilha de auditoria; pseudonimizar quando possível; revisar e revogar ao término. Combinar finalidade declarada, prazo e registro mantém o acesso proporcional e auditável."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Minimização significa apagar o máximo possível o mais rápido possível.'",
                    "correcao": "Errado. Minimização é proporcionalidade: guardar o NECESSÁRIO à finalidade e ao prazo de obrigação. Eliminar cedo demais destrói evidência necessária a auditoria e a responsabilização; guardar demais viola a proteção. A régua é a finalidade declarada."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Permissão concedida em situação de urgência deve ser revogada quando a urgência terminar.",
                    "resposta": "Certo. Acessos temporários que não expiram viram privilégio permanente — falha clássica de controle de acesso."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Qual prática viola a minimização? A) coletar data de nascimento quando a análise usa apenas faixa etária; B) registrar auditoria de acesso; C) expirar perfil após o projeto; D) exigir autenticação forte.",
                    "resposta": "A"
                  }
                ]
              },
              {
                "id": "m7-u3-t2-s3",
                "titulo": "Proteção de dados e a LGPD",
                "objetivoAprendizagem": "Aluno relacionará princípios da LGPD a controles técnicos e organizacionais de proteção.",
                "conteudo": "A LGPD — Lei nº 13.709/2018, verificada neste projeto na fonte oficial do Planalto (referências/referencias-verificadas.md) — regula o tratamento de dados pessoais no Brasil. Conceitos centrais: dado pessoal (relacionado a pessoa natural identificada ou identificável, art. 5º), titular (a pessoa a quem os dados se referem), controlador (decide sobre o tratamento) e operador (trata em nome do controlador), além das finalidades e bases legais para o tratamento (arts. 2º a 4º). O art. 46 determina que o controlador e o operador adotem medidas de segurança e técnicas aptas a proteger os dados, e a LGPD prevê ainda sanções administrativas. CONTROLES TÉCNICOS E ORGANIZACIONAIS que materializam essa exigência: criptografia em repouso e em trânsito, controle de acesso por perfil, pseudonimização de bases de análise, segregação de ambientes (produção x teste sem dados reais), backup e recuperação, gestão de vulnerabilidades, trilha de auditoria, plano de resposta a incidentes (comunicação e registro) e cláusulas contratuais com terceiros. CONTROLES ORGANIZACIONAIS: políticas, treinamento, inventário de tratamentos, encarregado atuando de fato, prazos de retenção. LIMITE DESTE TEXTO: a lei não é reproduzida integralmente; para citar artigos em prova ou projeto, consulte o texto verificado — este curso não substitui a leitura legal nem orientação jurídica.",
                "exemplos": [
                  {
                    "tipo": "introducao",
                    "enunciado": "Como o princípio de segurança (art. 46 da LGPD) se materializa tecnicamente?",
                    "resposta": "Medidas aptas e proporcionais ao risco: criptografia dos dados em repouso e em trânsito, controle de acesso por perfil com menor privilégio, segregação de ambientes (sem dados pessoais reais em testes), trilha de auditoria, backup testado e plano de resposta a incidentes com registro e comunicação."
                  },
                  {
                    "tipo": "aplicacao",
                    "enunciado": "Área de TI propõe usar base de produção (com dados pessoais) em ambiente de homologação. Avalie.",
                    "resposta": "Prática incompatível com proteção proporcional: ambientes de teste têm mais gente com acesso, menos monitoramento e cópias frequentes não rastreadas. A alternativa correta é usar dados sintéticos ou pseudonimizados, com controle de acesso e registro — mantendo a utilidade do teste sem expor titulares."
                  },
                  {
                    "tipo": "erro",
                    "enunciado": "Afirmação: 'Sob a LGPD, qualquer vazamento pode ser resolvido com pedido de desculpas — não há consequência formal.'",
                    "correcao": "Errado. A LGPD prevê sanções administrativas e o art. 46 impõe dever de adotar medidas de segurança; incidentes exigem registro, avaliação de impacto e comunicação. Desculpas não substituem controles nem evidência de que existiam."
                  }
                ],
                "exercicios": [
                  {
                    "tipo": "certos_erro",
                    "enunciado": "(C/E) Segundo a LGPD (art. 46), controlador e operador devem adotar medidas de segurança e técnicas aptas a proteger os dados pessoais.",
                    "resposta": "Certo. Conteúdo conferido na fonte oficial verificada do projeto (Lei nº 13.709/2018)."
                  },
                  {
                    "tipo": "multipla",
                    "enunciado": "Quem decide sobre o tratamento dos dados, segundo a LGPD? A) titular; B) controlador; C) operador; D) encarregado.",
                    "resposta": "B"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
