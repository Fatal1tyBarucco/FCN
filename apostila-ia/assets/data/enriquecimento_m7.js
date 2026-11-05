const enriquecimentoM7 = {
  "m7-u1-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modelo DIKW (Data, Information, Knowledge, Wisdom) é o arcabouço conceitual fundamental para toda engenharia de dados e gestão do conhecimento. É objeto de avaliação em itens de governança de dados, business intelligence, inteligência artificial e gestão da informação. Compreender a hierarquia DIKW permite ao candidato distinguir entre armazenamento bruto e geração de valor analítico, evitando armadilhas clássicas como confundir volume de dados com maturidade analítica ou tratar informação como sinônimo de dado. No serviço público, a capacidade de transformar dados administrativos em conhecimento acionável impacta diretamente a qualidade de políticas públicas e a prestação de contas à sociedade.",
      "preRequisitos": [
        "Conceitos básicos de dado, informação e metadado",
        "Noção de contexto e finalidade no tratamento da informação",
        "Diferença entre dado estruturado e não estruturado"
      ],
      "objetivosObservaveis": [
        "Definir com precisão cada nível do modelo DIKW (dado, informação, conhecimento, sabedoria) usando terminologia técnica correta",
        "Construir a passagem encadeada entre os quatro níveis a partir de um exemplo concreto, explicitando o trabalho de transformação em cada etapa",
        "Identificar generalizações falsas sobre o modelo (ex.: acúmulo automático, linearidade rígida, fronteiras nítidas)",
        "Aplicar o modelo para classificar artefatos organizacionais (relatórios, dashboards, bases de dados, decisões) no nível DIKW apropriado"
      ],
      "competencias": [
        "Pensamento sistêmico: compreender a cadeia de valor do dado à decisão",
        "Análise crítica: distinguir correlação de causalidade e ruído de sinal",
        "Comunicação técnica: explicar conceitos abstratos com exemplos concretos",
        "Tomada de decisão baseada em evidências: reconhecer os limites do que os dados podem dizer"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t1-s2 (Limitações conceituais do modelo DIKW) — aprofunda as fronteiras difusas e a não-linearidade",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — a forma do dado afeta a facilidade de subida na pirâmide",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — o DIKW opera sobre o ciclo de vida completo",
        "m8-u1-t1-s1 (O que a visualização de dados deve realizar) — visualização é ferramenta para subir da informação ao conhecimento"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O DIKW é conceito transversal em editais de analista de sistemas, analista de dados, gestão de TI e carreiras de controle, e aparece em itens que tratam de governança de dados, business intelligence, inteligência artificial e gestão do conhecimento. A distinção entre níveis, a não-automaticidade das passagens e a diferença entre acumular dados e produzir valor analítico formam o núcleocobrado do tema. A classificação é qualitativa e expressa a centralidade curricular do assunto, sem representar frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "O modelo DIKW organiza o tratamento da informação em quatro níveis sucessivos. DADO: registro bruto, sem contexto e sem destinatário definido — exemplos: um número lido de sensor (238), uma linha digitada em formulário, uma leitura de temperatura isolada. O dado por si só não informa; é matéria-prima. INFORMAÇÃO: dado processado e situado — recebe contexto, finalidade e destinatário. A mesma leitura 238, acrescida de unidade (mmHg), paciente, momento e comparação com faixa de referência, passa a informar que a pressão sistólica está elevada. CONHECIMENTO: informação internalizada, combinada com experiência e julgamento, que capacita a ação. O profissional de saúde sabe que 238 mmHg indica hipertensão a confirmar, conhece fatores interferentes (café, medicação, ansiedade) e sabe quais condutas seguir. SABEDORIA: conhecimento aplicado com discernimento de longo prazo e senso de consequência — decidir conduzir o caso com monitoramento domiciliar seriado, ajustar conduta considerando histórico, efeitos adversos e preferência do paciente, e reavaliar — isso é sabedoria. Duas propriedades essenciais: (1) cada passagem exige trabalho humano ou regra explícita de interpretação, não acontece por acúmulo automático; (2) informação é relativa ao destinatário — o mesmo dado é informação útil para um clínico e ruído para um administrador de banco de dados.",
      "intermediario": "No nível intermediário, compreende-se que o DIKW não é uma esteira linear. A transformação dado→informação requer metadados (origem, timestamp, unidade, qualidade, provenance) e regras de negócio (validação, enriquecimento, agregação). Informação→conhecimento exige modelo mental do domínio: ontologias, regras de especialista, heurísticas validadas, aprendizado de máquina supervisionado com validação humana. Conhecimento→sabedoria envolve julgamento ético, visão sistêmica, análise de trade-offs e responsabilidade pela decisão. Na prática organizacional, o dado bruto entra em pipelines de engenharia (ETL/ELT), vira informação em data warehouses/lakehouses, alimenta modelos analíticos (conhecimento explícito) e subsidia decisões de gestão (sabedoria quando há governança madura). Armadilhas: (a) 'data lake' cheio de dados sem metadados não é informação; (b) painel sem contexto de negócio não gera conhecimento; (c) modelo preditivo sem validação de especialista não é conhecimento confiável; (d) decisão baseada apenas em métrica única, sem análise de consequências, não é sabedoria.",
      "avancado": "Nível avançado aborda as limitações estruturais do DIKW e suas extensões contemporâneas. (1) Fronteiras difusas: a distinção dado/informação depende de granularidade — um log de acesso é dado para o analista de segurança mas informação para o sistema de billing. (2) Não-linearidade real: loops de retorno existem — decisões (sabedoria) geram novos dados (ex.: política de retenção altera o que é coletado); conhecimento falso pode retroalimentar dado ruim (viés de confirmação em pipelines). (3) Qualidade como pré-condição: o modelo original ignora qualidade; frameworks modernos (DQAF, ISO 8000) inserem dimensões de qualidade (acurácia, completude, consistência, tempestividade) como guardrails em cada transição. (4) Agente e legitimação: quem valida a passagem informação→conhecimento? Em organizações maduras, há stewards de dados, comitês de governança e processos de certificação de modelos. (5) Extensões: modelos como DIKW+ (com Understanding entre Knowledge e Wisdom) ou KIDS (Knowledge, Information, Data, Signal) adaptam para contextos de ciência de dados e IA. Em concursos avançados (TCU, CGU, carreiras de regulação), espera-se que o candidato identifique quando uma questão descreve 'dado' mas o enunciado pressupõe 'informação', ou quando promete 'sabedoria' a partir de 'big data' sem etapas intermediárias.",
      "especialista": "No nível especialista, o DIKW é instrumentalizado para arquitetura de governança de dados e estratégia organizacional. O especialista desenha: (a) Metamodelo DIKW operacional — define critérios objetivos para classificar cada ativo de dados em D, I, K ou W, com SLAs de transformação (ex.: dado bruto → informação validada em < 4h). (b) Maturidade analítica — usa frameworks como CMMI-DMM ou TDWI para avaliar em que nível a organização opera predominantemente (caos de dados, relatórios descritivos, analytics preditivos, decisões prescritivas/autônomas). (c) Economia do dado — quantifica custo de cada transição (armazenamento, processamento, curadoria, modelagem, governança) vs. valor da decisão habilitada; identifica 'dados zumbis' (custo > valor). (d) IA e DIKW — em ML, o treino é passagem massiva D→I→K (padrões aprendidos); a inferência em produção é K→ação; a sabedoria reside no design do sistema (escolha de objetivo, métricas de fairness, human-in-the-loop, monitoramento de drift). (e) Riscos sistêmicos — viés algorítmico como conhecimento falso legitimado; automação de decisão sem sabedoria (ex.: negação automática de benefício sem revisão humana). Em provas de nível especialista (doutorado, concursos de alta complexidade), a cobrança incide sobre trade-offs arquiteturais, não sobre definições."
    },
    "comparacoes": [
      {
        "tema": "DIKW vs. Pirâmide do Conhecimento (Nonaka & Takeuchi) vs. Hierarquia da Sabedoria (Ackoff)",
        "a": {
          "rotulo": "DIKW (Data-Information-Knowledge-Wisdom)",
          "texto": "Modelo hierárquico sequencial focado na transformação progressiva de matéria-prima bruta em decisão sábia. Enfatiza o trabalho de contextualização, internalização e julgamento em cada passagem. Origem: ciência da informação e engenharia de sistemas (Bellinger, Castro, Milan, 2004; Ackoff, 1989)."
        },
        "b": {
          "rotulo": "Espiral SECI / Pirâmide do Conhecimento (Nonaka & Takeuchi)",
          "texto": "Modelo dinâmico de criação de conhecimento organizacional através de quatro modos de conversão: Socialização (tácito→tácito), Externalização (tácito→explícito), Combinação (explícito→explícito), Internalização (explícito→tácito). Não é hierarquia linear; é ciclo contínuo. Foco no conhecimento tácito vs. explícito e na interação social."
        },
        "diferencaGabarito": "DIKW classifica artefatos por nível de processamento; SECI descreve processos de criação de conhecimento. Em prova: se o enunciado pergunta 'em que nível está este relatório?', use DIKW; se pergunta 'como o conhecimento tácito do especialista virou manual?', use Externalização do SECI. Confundir os dois é erro conceitual grave."
      },
      {
        "tema": "Dado vs. Informação vs. Métrica vs. Indicador (KPI)",
        "a": {
          "rotulo": "Dado / Informação (DIKW)",
          "texto": "Dado = registro bruto; Informação = dado contextualizado. São categorias ontológicas sobre o estado da matéria informacional."
        },
        "b": {
          "rotulo": "Métrica / Indicador / KPI",
          "texto": "Métrica = medida quantitativa padronizada (ex.: tempo médio de atendimento). Indicador = métrica com referência (meta, baseline, benchmark) que sinaliza performance. KPI = indicador estratégico vinculado a objetivo organizacional. São categorias teleológicas (finalísticas) sobre uso da informação para gestão."
        },
        "diferencaGabarito": "Todo KPI é indicador, toda métrica pode virar indicador, mas nem toda informação é métrica (informação qualitativa existe). Em prova: 'O relatório de 50 páginas é um KPI?' — NÃO, é informação (ou conhecimento se houver análise). 'O percentual de SLA cumprido é dado?' — NÃO, é métrica/indicador derivada de dados. A confusão entre categoria ontológica (DIKW) e categoria teleológica (KPI) é pegadinha recorrente."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Basta carregar mais dados no sistema (Big Data) para que a organização alcance sabedoria; volume de dados é proxí de maturidade analítica.",
        "porqueErrada": "Acúmulo de dados produz, no máximo, mais matéria-prima bruta. Cada passagem na pirâmide exige trabalho explícito e custoso: contextualização com metadados e regras de negócio (dado→informação), modelagem com validação de especialista (informação→conhecimento), julgamento ético e sistêmico (conhecimento→sabedoria). Dados sem qualidade, sem metadados, sem governança e sem propósito ampliam ruído e viés, não sabedoria. A falácia do 'mais dados = melhor' ignora a lei de GIGO (Garbage In, Garbage Out) e a economia da curadoria.",
        "versaoCorreta": "Volume de dados é condição necessária mas insuficiente para maturidade analítica. A organização alcança sabedoria quando institui pipelines governados (dado→informação), modelos validados (informação→conhecimento) e processos decisórios com accountability (conhecimento→sabedoria). Maturidade mede-se pela capacidade de gerar decisões acionáveis e auditáveis, não por terabytes armazenados."
      },
      {
        "afirmacaoEquivocada": "O modelo DIKW garante que, ao organizar dados em informação, informação em conhecimento e conhecimento em sabedoria, a organização elimina incerteza e erro.",
        "porqueErrada": "O DIKW é modelo didático, não garantia epistêmica. Informação pode ser imprecisa (dado ruim contextualizado), conhecimento pode ser falso (generalização precipitada, viés de amostragem), sabedoria pode ser equivocada (julgamento baseado em premissas erradas). A passagem amplifica erros se não houver validação em cada etapa. Além disso, o modelo ignora qualidade, agente, legitimação e não-linearidade.",
        "versaoCorreta": "O DIKW organiza o pensamento sobre transformação informacional; não elimina incerteza. Governança de dados (qualidade, lineage, validação), metodologia científica (teste de hipóteses, replicabilidade) e governança de decisão (revisão humana, accountability) é que mitigam erro. O DIKW diz 'como' organizar; a governança diz 'com que confiança'."
      },
      {
        "afirmacaoEquivocada": "Dado, informação, conhecimento e sabedoria são estágios com definições únicas e universalmente aceitas; a pirâmide representa lei de transformação automática.",
        "porqueErrada": "As definições variam entre autores (Ackoff, Zins, Rowley, Frické, Nonaka). Fronteiras são difusas: o que é 'informação' para um analista pode ser 'dado' para outro. A pirâmide sugere linearidade e cumulatividade que não existem na prática — há retroalimentação, saltos, perdas. Não há transformação automática; cada passagem é ato intencional, custoso e falível.",
        "versaoCorreta": "O DIKW fornece vocabulário compartilhado para organizar o pensamento sobre valor da informação, não definições operacionais únicas nem lei de transformação. Consenso mínimo: dado = bruto/sem contexto; informação = contextualizado; conhecimento = aplicável à ação; sabedoria = discernimento de consequências. Use como bússola conceitual, não como régua rigorosa."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado: registro bruto, sem contexto, sem destinatário, matéria-prima informacional",
        "Informação: dado processado e situado — contexto + finalidade + destinatário",
        "Conhecimento: informação internalizada com experiência e julgamento, apta a orientar ação",
        "Sabedoria: conhecimento aplicado com discernimento de longo prazo, senso de consequência e responsabilidade",
        "Passagem não-automática: cada transição exige trabalho explícito (humano ou regra computacional)",
        "Relatividade da informação: o mesmo dado informa uns e é ruído para outros"
      ],
      "regras": [
        "Regra da não-automaticidade: acúmulo não produz passagem; transformação requer intencionalidade",
        "Regra da qualidade: dado ruim → informação ruim → conhecimento falso → sabedoria perigosa (GIGO em cascata)",
        "Regra do agente: toda passagem informação→conhecimento tem autor/validador responsável"
      ],
      "comparacoes": [
        "DIKW (classificação ontológica de artefatos) vs. SECI (processo de criação de conhecimento tácito/explícito)",
        "DIKW vs. KPIs (categoria teleológica de gestão) — não confundir nível de processamento com finalidade de uso"
      ],
      "fluxos": [
        "Dado bruto → (metadados + regras) → Informação validada → (modelagem + validação) → Conhecimento acionável → (julgamento + governança) → Decisão sábia"
      ],
      "excecoes": [
        "Dados de alta frequência (IoT, telemetria) podem pular etapa 'informação humana' e ir direto a modelo (conhecimento algorítmico) — exige governança de ML específica",
        "Decisões por princípio ético (sabedoria) podem preceder coleta de dados — ex.: não coletar dado sensível desnecessário por princípio de minimização (LGPD art. 6º, III)"
      ],
      "palavrasChave": [
        "DIKW",
        "hierarquia do conhecimento",
        "transformação informacional",
        "governança de dados",
        "qualidade de dados",
        "metadados",
        "contexto",
        "julgamento",
        "não-automaticidade",
        "GIGO"
      ],
      "checklist": [
        "Sei definir cada nível do DIKW com exemplo próprio (não decorado)",
        "Consigo encadear os 4 níveis a partir de um caso concreto (ex.: sensor, prontuário, log, transação)",
        "Identifico a pegadinha 'mais dados = mais sabedoria' e sei explicar por que é falsa",
        "Distinguo DIKW de SECI e de KPIs — sei dizer qual modelo usar para cada pergunta de prova",
        "Reconheço as 3 limitações principais (fronteiras difusas, não-linearidade, qualidade ignorada)",
        "Sei que toda passagem tem custo, autor e risco de amplificação de erro"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Encadear os quatro níveis DIKW a partir da leitura de 238 em uma coluna de pressão arterial de um prontuário eletrônico.",
        "dados": "Registro bruto: valor numérico '238' em campo 'pressão_sistólica' de tabela 'sinais_vitais', sem unidade explícita na coluna, sem identificação de paciente na mesma linha, timestamp de inserção 2024-03-15 09:12:03.",
        "conceitos": [
          "Dado bruto (registro isolado)",
          "Metadados implícitos (schema da tabela, tipo de dado)",
          "Contexto clínico (unidade mmHg, faixa de referência, fatores interferentes)",
          "Julgamento profissional (diagnóstico diferencial, conduta)",
          "Decisão compartilhada (preferência do paciente, custo-benefício, risco)"
        ],
        "estrategia": "Subir a pirâmide DIKW explicitando o que é adicionado em cada passagem: (1) metadados e contexto transformam dado em informação; (2) experiência clínica e raciocínio diagnóstico transformam informação em conhecimento; (3) deliberação ética e visão de longo prazo transformam conhecimento em sabedoria.",
        "execucao": [
          "DADO: Identificar o registro isolado — '238' como integer em campo pressure_systolic, sem unidade, sem paciente, sem timestamp clínico. É matéria-prima, não informa.",
          "INFORMAÇÃO: Adicionar metadados contextuais — 238 mmHg (unidade), paciente ID 12345, medido em 2024-03-15 09:12, dispositivo validado. Comparar com faixa de referência (90-120 mmHg para adulto). Resultado: 'Pressão sistólica de 238 mmHg, acima do limite superior de referência, paciente adulto, medida única'. Agora informa.",
          "CONHECIMENTO: Aplicar experiência clínica — valor isolado não confirma hipertensão; protocolo exige reavaliação (regras: duas medidas em ocasiões diferentes, excluir fatores agudos). Conhece fatores interferentes: cafeína nas últimas 30 min, medicação recente, 'efeito avental branco', cuff mal calibrado. Conhecimento actionable: 'Hipertensão a confirmar; repetir medida em 15 min e agendar MAPA se persistir'.",
          "SABEDORIA: Deliberar com paciente — histórico: hipertenso controlado, medicação em uso, relata estresse laboral. Opções: (a) intensificar medicação agora (risco: hipotensão se for pico agudo), (b) MAPA 24h + telemonitoramento 7 dias (padrão-ouro, custo maior), (c) ajustar estilo de vida + reavaliar em 2 semanas (baixo risco, depende de adesão). Decisão sábia: (b) com compartilhamento de decisão — explica incerteza, apresenta evidências, respeita autonomia, agenda reavaliação com critério de parada claro. Documenta racional no prontuário."
        ],
        "resultado": "Dado: '238' isolado. Informação: '238 mmHg sistólica, paciente X, acima da referência'. Conhecimento: 'Hipertensão a confirmar; protocolo exige reavaliação; fatores interferentes conhecidos'. Sabedoria: 'Optar por MAPA + telemonitoramento com decisão compartilhada, reavaliação em 2 semanas, critério de parada documentado'.",
        "justificativa": "Este exemplo demonstra as quatro passagens com trabalho explícito em cada uma: (1) metadados clínicos + comparação com referência = contextualização; (2) protocolo diagnóstico + experiência com fatores confundidores = internalização com julgamento; (3) decisão compartilhada com análise de trade-offs (risco/benefício/custo/autonomia) = sabedoria. A justificativa técnica reside na adesão a guidelines clínicos (ex.: VII Diretrizes Brasileiras de Hipertensão) e no princípio da autonomia do paciente (Código de Ética Médica, Resolução CFM 2.217/2018). A passagem não é automática: sem metadados, o 238 poderia ser glicemia, temperatura em décimos, ou código de erro. Sem protocolo, seria achismo. Sem decisão compartilhada, seria paternalismo.",
        "errosFrequentes": [
          "Tratar o número 238 como se já fosse informação (esquecer unidade, paciente, referência)",
          "Concluir 'hipertensão confirmada' a partir de medida única (confundir informação com conhecimento diagnóstico)",
          "Prescrever intensificação de medicação sem investigar causa do pico (pular de informação para ação sem conhecimento intermediário)",
          "Não documentar o racional da decisão (sabedoria sem rastreabilidade vira opinião)"
        ],
        "variacao": "A mesma leitura 238 mmHg ocorre em triagem de unidade básica: enfermeiro vê valor, anota, encaminha para médico. Aplicar DIKW: Dado = leitura no esfigmomanômetro; Informação = 'PA 238/x mmHg, paciente encaminhado'; Conhecimento (médico) = 'Crise hipertensiva provável; risco de lesão alvo; protocolo de emergência'; Sabedoria = 'Iniciar tratamento parenteral controlado + monitor contínuo + investigar causa secundária + comunicar família com clareza sobre incerteza'. Variação testa transferência: mesmo dado, contexto diferente (emergência vs. rotina), passagem diferente."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um órgão público registra 1.000 atendimentos por mês em planilha. Descreva a subida da pirâmide DIKW até a decisão de gestão.",
        "dados": "Planilha com 1.000 linhas/mês. Colunas: data_atendimento, unidade_organizacional, tipo_demanda, tempo_espera_min, servidor_responsável, desfecho. Período: 12 meses. Qualidade: 5% células vazias em tempo_espera, 3% tipos_demanda inconsistentes (livre preenchimento).",
        "conceitos": [
          "Limpeza e padronização de dados (ETL)",
          "Agregação e sumarização (informação)",
          "Reconhecimento de padrão sazonal e causalidade (conhecimento)",
          "Decisão de alocação de recursos com accountability (sabedoria)"
        ],
        "estrategia": "Pipeline DIKW aplicado à gestão operacional: (1) Limpeza + enriquecimento = dado confiável; (2) Agregação temporal/organizacional + visualização = informação gerencial; (3) Análise de causalidade + benchmark = conhecimento acionável; (4) Simulação de cenários + decisão documentada = sabedoria de gestão.",
        "execucao": [
          "DADO: 12.000 registros brutos (12 meses × ~1.000). Problemas: tempo_espera com nulos, tipo_demanda com 47 variações textuais para 5 categorias reais. Trabalho: imputar nulos (mediana por unidade/mês), padronizar tipo_demanda (dicionário + revisão manual), validar outliers (IQR × 1.5). Resultado: base limpa, 11.850 registros válidos.",
          "INFORMAÇÃO: Agregar por semana e unidade. Descobrir: 42% das demandas concentram-se nas segundas-feiras pela manhã; tempo médio de espera sobe de 12 min (terça-sexta) para 38 min (segunda). Unidade A responde por 60% do volume. Visualização: heatmap semanal + boxplot de espera por unidade. Agora a gestão 've' o padrão.",
          "CONHECIMENTO: Associar padrão à causa — escala de pessoal da Unidade A não cobre pico de segunda (turno único 8h-14h). Benchmark: unidades similares usam turno duplo nas segundas. Simulação: adicionar 2 servidores na segunda reduz espera estimada para 15 min (modelo de filas M/M/c). Conhecimento validado com chefe da unidade: 'Sim, faltam pessoas na segunda; pedimos reforço no último PAD e foi negado'.",
          "SABEDORIA: Decidir com accountability — Opções: (a) contratar temporários (custo alto, prazo longo), (b) redistribuir jornada existente (turno 10h-16h nas segundas, custo zero, requer negociação sindical), (c) implantar agendamento prévio para demandas não-urgentes (reduz pico, muda cultura). Decisão: (b) + (c) combinados — piloto de 60 dias com métricas de acompanhamento (espera média, satisfação, horas extras). Documentar: 'Decisão baseada em padrão de 12 meses, simulação de filas, consulta à unidade, negociação sindical iniciada. Revisão em 60 dias com critério: espera média ≤ 20 min nas segundas'. Não promete efeito antes de medir."
        ],
        "resultado": "Dado: 11.850 registros limpos. Informação: 'Pico de 42% volume nas segundas; espera 38 min vs 12 min; Unidade A = 60% volume'. Conhecimento: 'Causa = escala insuficiente na Unidade A nas segundas; solução = turno duplo + agendamento prévio; simulação projeta espera 15 min'. Sabedoria: 'Piloto 60 dias: turno 10h-16h nas segundas + agendamento prévio; métricas de acompanhamento; revisão com critério objetivo; accountability documentada'.",
        "justificativa": "A justificativa técnica apoia-se em: (a) Engenharia de dados — limpeza e padronização são pré-condição (GIGO); (b) Teoria de filas (M/M/c) — modelo matemático valida a simulação de redução de espera; (c) Gestão baseada em evidências — decisão fundamentada em padrão histórico + causalidade identificada + consulta a stakeholders; (d) Accountability pública — decisão documentada com critérios de revisão atende a princípios de transparência (LAI) e eficiência (CF art. 37). A passagem informação→conhecimento exigiu domínio do negócio (escala de pessoal); a passagem conhecimento→sabedoria exigiu negociação, trade-off custo/benefício e compromisso de reavaliação.",
        "errosFrequentes": [
          "Apresentar apenas o painel (informação) como se fosse a decisão (sabedoria)",
          "Propor contratação imediata sem analisar redistribuição de jornada e causalidade do pico (pular anális de causalidade e trade-offs)",
          "Definir o piloto sem critério de sucesso, o que transforma a sabedoria em intenção (sabedoria sem mensuração vira intenção)",
          "Ignorar a qualidade dos dados originais (5% nulos, 3% inconsistentes) e basear decisão em dados sujos"
        ],
        "variacao": "Se 30% das demandas de segunda-feira forem consultas de status de processo automatizáveis no portal, o dado e a informação permanecem, o conhecimento passa a identificar a alavanca de tecnologia e a sabedoria prioriza o portal de autoatendimento, com reforço temporário de escala até a entrada em produção."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Basta carregar mais dados no sistema para que a organização alcance sabedoria.'",
        "dados": "Organização implanta data lake de 50 TB, ingere logs de 200 sistemas, não define metadados, não tem stewards, não valida qualidade. Diretoria anuncia: 'Agora somos data-driven; a sabedoria virá do volume'.",
        "conceitos": [
          "Falácia do volume",
          "Efeito de entrada e saída de dados ruins em cascata",
          "Custo de curadoria diante do valor da decisão",
          "Viés de confirmação sem hipótese prévia"
        ],
        "estrategia": "Desconstruir a falácia em quatro movimentos: (1) mostrar que dado bruto sem metadados não é informação; (2) demonstrar que informação sem validação vira conhecimento falso; (3) provar que conhecimento falso ampliado por escala gera decisões perigosas; (4) contrapor com exemplo de organização madura que decide bem com poucos dados governados.",
        "execucao": [
          "DADO: 50 TB de logs brutos — timestamps, IPs, códigos de erro, payloads variados. Sem dicionário de dados, sem lineage, sem dono. 40% são duplicatas de retentativa, 15% são ruído de healthcheck, 5% estão corrompidos por truncamento. Volume ≠ qualidade.",
          "INFORMAÇÃO (tentativa): Analista roda query 'TOP 10 erros'. Resultado: 'ERROR 500' (12M ocorrências), 'TIMEOUT' (8M), 'NULL POINTER' (5M). Sem contexto (qual sistema? qual versão? qual impacto no usuário?), isso é ruído categorizado, não informação acionável.",
          "CONHECIMENTO (falso): Equipe conclui 'nosso maior problema é ERROR 500' e prioriza correção genérica. Realidade: 90% dos ERROR 500 vêm de um único microserviço legado em desuso, mas 100% dos TIMEOUTs impactam pagamento de benefícios. Conhecimento falso = priorização errada = recurso desperdiçado.",
          "SABEDORIA (ausente): Diretoria aprova plano de 'corrigir todos ERROR 500 em 6 meses'. Gasto: R$ 2M. Resultado: zero redução em reclamações de cidadãos. Sabedoria exigiria: (a) atribuir dono e criticidade a cada sistema, (b) medir impacto no cidadão, não contagem de logs, (c) decidir com base em risco de negócio, não volume de erro."
        ],
        "resultado": "Organização gastou R$ 2M corrigindo erro de alto volume/baixo impacto, enquanto erro de baixo volume/alto impacto (TIMEOUT em pagamentos) persistiu. Volume de dados não produziu sabedoria; produziu ilusão de controle e desperdício de recurso público.",
        "justificativa": "A falácia do 'mais dados = mais sabedoria' viola princípios fundamentais: (1) Princípio da finalidade (LGPD art. 6º, I) — dado sem finalidade definida é passivo, não ativo; (2) Economia da informação — custo marginal de curadoria supera valor marginal de decisão após certo ponto; (3) Epistemologia da ciência de dados — correlação espúria prolifera em alta dimensionalidade sem hipótese prévia (Bonferroni, multiple testing); (4) Governança pública — accountability exige rastreabilidade da decisão ao dado, não volume do lago. Organizações maduras (ex.: Receita Federal, BCB, TCU) decidem com amostras governadas, metadados completos e modelos validados, não com data lakes não curados.",
        "errosFrequentes": [
          "Citar 'Big Data' como sinônimo de maturidade analítica",
          "Confundir data lake (repositório bruto) com data warehouse (informação modelada e curada)",
          "Acreditar que ferramentas de ML auto-ML dispensam validação humana (conhecimento algorítmico ≠ conhecimento organizacional)",
          "Medir sucesso de iniciativa de dados por TB ingeridos, não por decisões melhoradas"
        ],
        "variacao": "Cenário inverso: organização com 500 MB de dados altamente curados (indicadores fiscais mensais, metadados completos, stewards definidos, validação cruzada com contabilidade) toma decisões de alocação orçamentária de R$ 10B com alto acerto. Variação testa: qualidade + governança + finalidade > volume. A sabedoria reside na cadeia de confiança do dado à decisão, não no tamanho do armazenamento."
      }
    ]
  },
  "m7-u1-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "O modelo DIKW é apresentado em apostilas como pirâmide de quatro níveis, e a prova cobra tanto o vocabulário quanto a leitura crítica dele. Reconhecer as limitações — fronteiras difusas, linearidade aparente, qualidade ignorada, agente invisível e ausência de definições operacionais — é o que permite derrubar alternativas que prometem transformação automática de dado em sabedoria. No serviço público, a mesma crítica sustenta a avaliação de projetos de dados que anunciam resultado sem etapa de interpretação.",
      "preRequisitos": [
        "Definição dos quatro níveis e capacidade de encadeá-los em exemplo próprio",
        "Distinção entre modelo descritivo e norma de transformação",
        "Noção de qualidade de dados, de metadado e de responsável pelo dado"
      ],
      "objetivosObservaveis": [
        "Apontar três limitações do modelo DIKW e relacionar cada uma a uma consequência prática",
        "Classificar generalização sobre o modelo como falsa, indicando a formulação defensável em prova",
        "Distinguir o que o modelo oferece (vocabulário compartilhado) do que não oferece (definição operacional única e garantia de resultado)",
        "Avaliar anúncio institucional de projeto de dados, identificando a etapa ausente entre o insumo disponível e o resultado prometido"
      ],
      "competencias": [
        "Leitura crítica de modelos conceituais: identificar premissa não declarada no enunciado",
        "Rigor terminológico: separar vocabulário de organização do pensamento e lei de transformação",
        "Avaliação de promessa tecnológica: exigir etapa verificável entre insumo e resultado"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t1-s1 (Dado, informação, conhecimento e sabedoria) — o modelo cujas limitações este subtópico examina",
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — metadados suprem parte do contexto que a passagem de nível pressupõe",
        "m7-u1-t3-s2 (Linhagem (lineage) e catálogo de dados) — rastreabilidade responde à crítica do agente invisível",
        "m7-u1-t2-s1 (Dados estruturados, semiestruturados e não estruturados) — a forma do dado condiciona a facilidade de subida de nível"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "A cobrança é indireta: o item apresenta uma generalização sobre a pirâmide e exige que o candidato a reconheça como exagerada. Há itens que opõem modelo didático a teoria formal e itens que trabalham cenários em que a organização anuncia resultado analítico sem a etapa de interpretação. Classificação qualitativa por centralidade curricular, e não por frequência estatística de prova."
      }
    },
    "niveis": {
      "iniciante": "O DIKW é um modelo didático, não uma teoria formal. Suas limitações: (1) FRONTEIRAS DIFUSAS — as fronteiras entre dado, informação, conhecimento e sabedoria variam entre autores e contextos; informação é frequentemente definida como 'dado com contexto', mas o que conta como contexto não é padronizado. (2) LINEARIDADE — a representação em pirâmide sugere uma transformação mecânica e cumulativa, quando na prática há retrocesso: informação errada gera conhecimento falso, e sabedoria pode preceder dados (decisão por princípio ético). (3) QUALIDADE IGNORADA — o modelo não trata de dado ruim: dado incompleto ou inconsistente atravessa a pirâmide sem que o modelo avise. (4) AGENTE INVISÍVEL — não explica quem interpreta nem como o conhecimento é legitimado em uma organização. (5) FALTA DE DEFINIÇÕES OPERACIONAIS — não serve, sozinha, para medir ou auditar nada. Em provas, o cuidado é tratar o DIKW como vocabulário de organização do pensamento e não como lei de transformação automática: 'mais dados' não garante 'mais sabedoria'.",
      "intermediario": "No nível intermediário, o candidato usa as limitações como filtro de leitura: toda afirmação sobre o modelo é testada por duas perguntas — a passagem descrita exige trabalho explícito de alguém? o resultado depende da qualidade do insumo? Com isso, identificam-se os erros clássicos de prova, como confundir informação contextualizada com conhecimento, ou prometer sabedoria a partir de volume de dados. Também se percebe que a crítica não invalida o uso do modelo: ele continua servindo para classificar um artefato em nível e para explicar por que acumular registros não produz decisão melhor.",
      "avancado": "No nível avançado, a análise ocupa as consequências de cada limitação. Fronteiras difusas significam que definições divergem entre autores e que a prova costuma exigir a definição adotada no próprio enunciado. Linearidade falsa significa que há retrocesso: informação errada produz conhecimento falso, e decisão tomada por princípio pode ocorrer antes de qualquer coleta. Qualidade ignorada significa que dado incompleto atravessa a pirâmide sem alerta, o que transfere à governança de dados o papel de ponto de controle em cada transição. Agente invisível significa que ninguém responde pela passagem de nível enquanto não houver papel definido.",
      "especialista": "No nível especialista, o modelo é tratado como camada de comunicação, e não como garantia de resultado. O uso profissional substitui cada passagem prometida por artefato verificável: dicionário e metadado para o contexto, modelo validado por especialista para o conhecimento, e registro de decisão com critério e responsável para a sabedoria. A crítica das definições operacionais se resolve com indicador de uso e de acerto, e não com adesão à figura da pirâmide. Em auditoria, a pergunta deixa de ser em que nível a organização está e passa a ser qual evidência sustenta a passagem."
    },
    "comparacoes": [
      {
        "tema": "DIKW como modelo didático e DIKW como norma de transformação",
        "a": {
          "rotulo": "Uso legítimo: vocabulário de organização do pensamento",
          "texto": "Classifica artefatos em nível e explica por que acumular registros não produz decisão melhor. Aceita divergência de definições entre autores e trata cada passagem como trabalho explícito de interpretação, validação e julgamento."
        },
        "b": {
          "rotulo": "Uso indevido: lei de transformação automática",
          "texto": "Trata a pirâmide como mecanismo: coletar mais dados elevaria o nível da organização sem trabalho intermediário. Gera projeto que promete resultado analítico sem etapa de interpretação e sem responsável definido."
        },
        "diferencaGabarito": "A prova aceita o modelo como vocabulário e reprova a leitura automática. Se a alternativa afirmar que volume de dados produz sabedoria por si mesmo, está errada: falta a etapa explícita de trabalho entre os níveis."
      },
      {
        "tema": "Limite do modelo x governança de dados",
        "a": {
          "rotulo": "Limitação do DIKW",
          "texto": "Não trata de dado ruim, não mostra o agente que interpreta e não define critérios mensuráveis para cada nível."
        },
        "b": {
          "rotulo": "Governança de dados",
          "texto": "Define papéis, políticas, padrões de qualidade, catálogo e linhagem, e estabelece quem responde pela passagem e pela decisão."
        },
        "diferencaGabarito": "O que o modelo deixa implícito, a governança explicita: entre DIKW e governança não há concorrência, e sim complementaridade — por isso a ausência de governança é a limitação mais concreta do modelo."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'No modelo DIKW, dado, informação, conhecimento e sabedoria são estágios com definições únicas e universalmente aceitas.'",
        "porqueErrada": "As definições variam entre autores e contextos, e o que conta como contexto em cada passagem não é padronizado. A figura da pirâmide sugere fronteiras nítidas e transformação cumulativa que não existem na prática, em que há retrocesso, salto e perda. Tratar o modelo como lei operacional leva o candidato a aceitar alternativa que promete resultado automático a partir de acúmulo.",
        "versaoCorreta": "Errado. As definições variam entre autores e o modelo é didático. Existe consenso suficiente para usar o vocabulário (dado bruto; informação contextualizada; conhecimento aplicado; sabedoria como discernimento), mas não há definição operacional única nem relação de causa automática entre os níveis."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A linearidade do modelo garante que, alcançado o nível de conhecimento, a organização não regride ao nível de dado.'",
        "porqueErrada": "A passagem de nível não é irreversível: informação errada alimenta conhecimento falso, e o resultado de decisão anterior pode reinserir dado ruim no processo. A pirâmide descreve ordenação conceitual, não estado permanente da organização.",
        "versaoCorreta": "Errado. Há retrocesso efetivo: dado inconsistente que atravessa a pirâmide sem alerta produz informação e conhecimento falseados, e o nível alcançado se mantém apenas enquanto houver validação, qualidade do insumo e revisão periódica."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Como o modelo não trata da qualidade do dado, a crítica se restringe a bases mal construídas e não afeta o uso do modelo em prova.'",
        "porqueErrada": "A ausência de tratamento da qualidade é limitação do modelo, não defeito de uma base específica: ela significa que nenhum nível informa, por si, se o insumo é confiável. Ignorar isso faz o candidato aceitar enunciado que apresenta dado duvidoso como se já fosse informação.",
        "versaoCorreta": "Errado. A qualidade ignorada é limitação geral: o modelo não distingue dado completo de dado incompleto, e a resposta correta em prova exige verificar a confiabilidade do insumo antes de classificar o nível do artefato apresentado."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Modelo didático: construção de ensino, não teoria formal",
        "Fronteiras difusas: o que separa os níveis varia entre autores e contextos",
        "Linearidade aparente: a pirâmide sugere acúmulo, e o processo real admite retrocesso",
        "Qualidade ignorada: o modelo não avisa sobre dado incompleto ou inconsistente",
        "Agente invisível: o modelo não diz quem interpreta nem quem legitima o conhecimento",
        "Definições operacionais ausentes: o modelo não mede nem audita nada por si"
      ],
      "regras": [
        "Regra do trabalho explícito: nenhuma passagem de nível ocorre por acúmulo; todas exigem interpretação, validação ou julgamento",
        "Regra da qualidade: dado ruim sobe a pirâmide silenciosamente, e o controle precisa vir de fora do modelo",
        "Regra do vocabulário: o uso legítimo classifica artefatos e nomeia níveis, não promete resultado"
      ],
      "comparacoes": [
        "Vocabulário de organização do pensamento x lei automática de transformação",
        "Figura da pirâmide (acúmulo unidirecional) versus processo real (retroalimentação e salto)"
      ],
      "fluxos": [
        "Leitura de alternativa: identificar o nível afirmado, exigir a etapa explícita entre os níveis, verificar a qualidade do insumo, verificar quem responde pela passagem e então concluir",
        "Avaliação de projeto de dados: insumo disponível, contextualização, validação, indicador de uso e de acerto, responsável definido"
      ],
      "excecoes": [
        "Há uso legítimo e cobrado do modelo em prova: classificar relatório, base ou painel em nível de informação e nomear a passagem exigida em cada caso",
        "A decisão por princípio ético pode anteceder a coleta de dados, invertendo a ordem sugerida pela pirâmide sem que isso caracterize erro"
      ],
      "palavrasChave": [
        "DIKW",
        "limitações do modelo",
        "fronteiras difusas",
        "linearidade",
        "qualidade de dados",
        "agente invisível",
        "definição operacional"
      ],
      "checklist": [
        "Sei apontar três limitações do modelo e ligar cada uma a uma consequência prática",
        "Reconheço a generalização falsa típica: volume de dados como garantia de sabedoria",
        "Separo o uso legítimo do modelo (vocabulário) da leitura automática (lei de transformação)",
        "Verifico a qualidade do insumo antes de classificar o nível de um artefato",
        "Exijo etapa explícita e responsável definido antes de aceitar promessa de resultado analítico"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Indique duas limitações do modelo DIKW e uma consequência prática de cada uma, no contexto de uma questão de múltipla escolha sobre o uso do modelo em prova.",
        "dados": "Enunciado com quatro afirmações: (A) as definições dos níveis são únicas e aceitas por todos os autores; (B) a passagem de nível exige interpretação; (C) aumentar o volume de dados eleva o nível da organização; (D) o modelo serve para classificar um relatório como informação.",
        "conceitos": [
          "Fronteiras difusas entre os níveis",
          "Linearidade aparente da pirâmide",
          "Modelo didático versus lei de transformação"
        ],
        "estrategia": "Tratar cada afirmação como teste de duas propriedades do modelo: existência de definição única e existência de transformação automática. Quando a afirmação exigir unanimidade de definições ou automaticidade de passagem, classificá-la como generalização falsa e indicar a formulação correta.",
        "execucao": [
          "Ler a afirmação e identificar qual propriedade do modelo ela supõe: unanimidade de definições, automaticidade de passagem ou suficiência de volume.",
          "Confrontar com as limitações conhecidas: fronteiras difusas, linearidade falsa, qualidade ignorada, agente invisível e ausência de definições operacionais.",
          "Classificar a afirmação como correta somente quando descrever uso legítimo (classificar artefato, exigir etapa de interpretação) e como errada quando prometer resultado automático ou definição única.",
          "Redigir a consequência prática de cada limitação apontada, ligando-a a uma decisão de prova: divergência de fontes e exigência da definição do enunciado; planejamento que só coleta dados sem interpretação."
        ],
        "resultado": "Limitação 1 — fronteiras difusas: consequência prática é que definições divergem entre autores e a questão costuma exigir a definição adotada no próprio enunciado. Limitação 2 — linearidade: consequência é que planejar apenas coletar mais dados não melhora a decisão, porque falta etapa de interpretação e de revisão.",
        "justificativa": "As duas limitações nomeadas estão entre as cinco do texto-base e são as mais exigidas em prova. A primeira decorre de o modelo não fixar o que conta como contexto, o que torna a definição de informação dependente de autor e de situação; a segunda decorre de a figura da pirâmide sugerir acúmulo mecânico, quando o processo real admite retrocesso e perda. O gabarito se sustenta porque liga cada limite a uma consequência observável, e não a uma apreciação vaga sobre a simplicidade do modelo.",
        "errosFrequentes": [
          "Listar as limitações sem associar a cada uma uma consequência observável",
          "Confundir a limitação da linearidade com crítica ao uso de dados no serviço público",
          "Apresentar a ausência de definições operacionais como falha de banco de dados"
        ],
        "variacao": "Se a pergunta pedir a consequência da qualidade ignorada, a resposta deve mostrar que dado incompleto atravessa a pirâmide sem aviso e pode chegar ao topo como conhecimento falso."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma diretoria anuncia a implantação de uma base de conhecimento para transformar informação em sabedoria. Avalie a afirmação.",
        "dados": "Anúncio institucional: a nova base de conhecimento vai transformar a informação do órgão em sabedoria e torná-lo orientado por dados. Recursos previstos: licença de plataforma, migração de três mil documentos e treinamento de duas turmas. Nenhum indicador de uso, de acerto ou de periodicidade de revisão de conteúdo foi definido.",
        "conceitos": [
          "Base de conhecimento como repositório de conhecimento explícito",
          "Passagem de conhecimento a sabedoria como julgamento em situação concreta",
          "Indicador de uso e de acerto como medida verificável de ganho"
        ],
        "estrategia": "Separar o que a ferramenta entrega do que o anúncio promete: a base organiza e dá busca a conhecimento já explícito, enquanto a passagem a sabedoria depende de julgamento de pessoas em situação concreta. Em seguida, substituir a promessa por resultado mensurável.",
        "execucao": [
          "Identificar o que a base de conhecimento faz de fato: armazenar, organizar e recuperar procedimentos e decisões registradas, isto é, conhecimento explícito.",
          "Verificar se a promessa de sabedoria possui etapa explícita de julgamento; não possuindo, classificar o anúncio como publicitário.",
          "Definir medidas verificáveis de ganho: taxa de uso por área, tempo de localização do documento, percentual de acerto em auditoria de conteúdo e periodicidade de revisão.",
          "Reformular o objetivo em termos auditáveis, como reduzir o tempo de localização de procedimento e manter o conteúdo revisado, sem prometer sabedoria."
        ],
        "resultado": "A afirmação é publicitária. Uma base de conhecimento organiza informação e conhecimento explícito, mas não transforma nada em sabedoria, porque essa passagem depende de julgamento de pessoas em situações concretas. O ganho verificável está na qualidade da documentação, na busca e na manutenção, medido por indicadores de uso e de acerto.",
        "justificativa": "A crítica se sustenta na limitação da linearidade e na ausência de definições operacionais: a pirâmide não contém mecanismo que converta repositório em discernimento. O valor do projeto não desaparece — ele se desloca para o que é mensurável, como recuperação da informação e manutenção do conteúdo. Projeto sem indicador de uso e de acerto não permite auditar se o resultado prometido ocorreu, o que é exigência de governança, e não detalhe de implantação.",
        "errosFrequentes": [
          "Aceitar a promessa porque a ferramenta existe e foi implantada, confundindo disponibilidade de tecnologia com resultado de gestão",
          "Recusar o projeto inteiro, em vez de corrigir a promessa e definir indicador",
          "Medir o sucesso por número de documentos migrados, que mede o insumo e não o uso nem o acerto"
        ],
        "variacao": "Na variação, a diretoria anuncia que um painel de indicadores é capaz de gerar conhecimento sozinho. Aplicar o mesmo teste: o painel entrega informação; o conhecimento exige modelo mental do negócio e validação de especialista, e o ganho mensurável está na disponibilidade e na tempestividade do dado."
      },
      {
        "tipo": "erro",
        "problema": "Uma alternativa de prova afirma que os quatro níveis do modelo têm definições únicas e aceitas por todos os autores, e que a pirâmide estabelece relação de causa automática entre eles. O candidato a marcou como correta. Avaliar.",
        "dados": "Alternativa apresentada em prova discursiva: os estágios do modelo possuem definições únicas e universalmente aceitas, e a subida de nível é consequência automática da organização dos dados. Material de estudo do candidato: apostila que apresenta o modelo como pirâmide de quatro níveis, sem registrar divergências entre autores.",
        "conceitos": [
          "Divergência de definições entre autores do modelo",
          "Diferença entre vocabulário compartilhado e definição operacional única",
          "Transformação intencional e falível entre níveis"
        ],
        "estrategia": "Testar a alternativa em duas frentes: a unanimidade das definições e a automaticidade da passagem. Para cada frente, exigir a evidência do enunciado; não existindo, classificar a alternativa como generalização falsa e indicar a formulação defensável.",
        "execucao": [
          "Verificar a primeira afirmação: não há unanimidade, pois autores divergem sobre o que conta como contexto e sobre os limites entre níveis; o que existe é consenso mínimo de vocabulário.",
          "Verificar a segunda afirmação: a passagem de nível exige trabalho explícito de interpretação, validação e julgamento, e pode falhar; portanto, não é automática.",
          "Concluir que a alternativa é falsa e redigir a formulação correta, preservando o uso do modelo como vocabulário.",
          "Registrar a justificativa: o erro do candidato foi tratar figura didática como norma, o que o leva a aceitar qualquer alternativa que soe coerente com a pirâmide."
        ],
        "resultado": "A alternativa é falsa. As definições dos níveis variam entre autores e o modelo é construção didática; existe consenso bastante para usar o vocabulário — dado bruto, informação contextualizada, conhecimento aplicado, sabedoria como discernimento —, mas não existe definição operacional única nem relação de causa automática entre os níveis.",
        "justificativa": "A resposta se apoia em duas partes do texto-base: a crítica das fronteiras difusas, que decorre de o modelo não fixar o que conta como contexto, e a crítica da linearidade, que decorre de a figura da pirâmide sugerir acúmulo mecânico. O gabarito, porém, não anula o modelo: conserva o vocabulário e rejeita apenas a leitura automática, que é a forma como a banca constrói as alternativas erradas.",
        "errosFrequentes": [
          "Marcar a alternativa como correta por ela soar coerente com a figura da pirâmide aprendida de memória",
          "Concluir que, por ser o modelo questionável, ele não deve ser usado em prova, abandonando vocabulário útil",
          "Confundir divergência de autores com ausência total de definição, e passar a aceitar qualquer definição de nível como equivalente"
        ],
        "variacao": "Na variação, a alternativa sustenta que, por não prever tratamento da qualidade, o modelo autoriza decidir com dado incompleto. A resposta correta indica que a crítica transfere à governança de dados o papel de controle em cada transição, e não dispensa a verificação do insumo."
      }
    ]
  },
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
  },
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
  },
  "m7-u1-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Linhagem e catálogo respondem a perguntas distintas sobre o dado. A linhagem mostra a trajetória do número; o catálogo é o índice pesquisável do acervo. Sem essa distinção, não se rastreia um valor incorreto.",
      "preRequisitos": [
        "Conceito de tabela, coluna e registro",
        "Noção de rotina de extração e carga de dados",
        "Noção de indicador e de relatório gerencial"
      ],
      "objetivosObservaveis": [
        "Distinguir linhagem de catálogo e explicar para que cada um serve",
        "Identificar quais campos alimentam quais outros em uma rotina de transformação",
        "Localizar um ativo no catálogo e confirmar seu dono e classificação de sensibilidade"
      ],
      "competencias": [
        "Rastrear a causa de um valor incorreto seguindo o caminho do dado",
        "Avaliar o impacto de uma mudança de coluna nos relatórios que consomem essa tabela"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — metadados descritivos sustentam o catálogo e metadados de processo sustentam a linhagem",
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — a linhagem percorre os estágios de coleta, integração, armazenamento, transformação e consumo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de governança de dados; aparece em itens que opõem linhagem e catálogo."
      }
    },
    "niveis": {
      "iniciante": "Linhagem é o caminho percorrido pelo dado, da fonte até o relatório, registrando quais campos alimentaram quais outros. Serve para rastrear um valor incorreto até a causa. Catálogo é o inventário pesquisável do acervo, com descrição, dono e classificação de sensibilidade.",
      "intermediario": "A linhagem completa exige instrumentação nas etapas de transformação, não apenas declarar a fonte de origem. Registrar 'fonte: sistema X' é origem parcial, não linhagem. O catálogo registra metadados de negócio e técnicos. Sem dono e atualização periódica, o catálogo fica desatualizado.",
      "avancado": "O catálogo é um índice do estado atual dos ativos, enquanto a linhagem é um histórico do fluxo. Pode haver catálogo sem registro de transformação. Linhagem sem catálogo não é encontrável; catálogo sem linhagem não permite rastrear.",
      "especialista": "Controles recomendados: proprietário definido por ativo, atualização periódica do catálogo, registro de versão dos pipelines. A linhagem depende de metadados de processamento; o catálogo depende de metadados descritivos."
    },
    "comparacoes": [
      {
        "tema": "Linhagem versus catálogo: caminho versus acervo",
        "a": {
          "rotulo": "Linhagem",
          "texto": "Registra a trajetória do dado da origem ao relatório, com campos, rotinas, frequência e versão de cada transformação. Responde de onde veio um número."
        },
        "b": {
          "rotulo": "Catálogo",
          "texto": "É o inventário pesquisável do acervo, com descrição, dono, localização e classificação de sensibilidade. Responde o que existe, onde está e para que serve."
        },
        "diferencaGabarito": "A diferença está na pergunta: a linhagem rastreia o caminho e a transformação; o catálogo descreve a existência e a propriedade dos ativos. Um não substitui o outro."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Ter um catálogo de dados significa que a organização já tem linhagem completa.'",
        "porqueErrada": "O catálogo descreve o estado atual dos ativos e a linhagem registra a trajetória e as transformações. Pode haver um catálogo bem preenchido sem registro de transformação.",
        "versaoCorreta": "Errado. O catálogo diz o que existe e o que significa; a linhagem diz como o valor foi calculado. Um catálogo sem linhagem permite descobrir o ativo."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Registrar apenas a fonte de origem, por exemplo sistema X, já constitui linhagem completa do dado.'",
        "porqueErrada": "A declaração de origem parcial informa de onde o dado saiu, mas não registra quais campos alimentaram quais outros. Linhagem exige rastrear cada etapa de transformação.",
        "versaoCorreta": "Errado. Nomear a fonte de origem não é linhagem; é apenas a primeira declaração de procedência. Linhagem completa instrumenta todas as etapas de transformação."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "linhagem de dados",
        "catálogo de dados",
        "proveniência",
        "transformação",
        "rastreabilidade"
      ],
      "regras": [
        "a linhagem registra quais campos alimentam quais outros em cada rotina",
        "o catálogo deve ter dono definido e atualização periódica",
        "linhagem depende de metadados de processamento; catálogo depende de metadados descritivos"
      ],
      "comparacoes": [
        "linhagem é histórico do fluxo; catálogo é índice do estado atual dos ativos"
      ],
      "fluxos": [
        "percorrer extração, transformação, carga e agregação para localizar onde um valor divergiu",
        "consultar o catálogo para confirmar a definição do indicador e o dono"
      ],
      "excecoes": [
        "registro apenas da fonte de origem não é linhagem completa",
        "catálogo sem dono e sem revisão fica desatualizado e perde a função de descoberta"
      ],
      "palavrasChave": [
        "linhagem",
        "catálogo",
        "proveniência",
        "rastreabilidade",
        "metadados"
      ],
      "checklist": [
        "Pergunto se a resposta exige caminho do dado ou inventário do acervo?",
        "Verifico se a linhagem cobre todas as etapas de transformação?",
        "Confiro se o catálogo tem dono, localização e classificação de sensibilidade?",
        "Descarto a hipótese de que catálogo sozinho permite rastrear um valor incorreto?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O número de um painel não bate com a base de origem. O aluno deve decidir se consulta primeiro o catálogo ou a linhagem.",
        "dados": "Painel com valor divergente; pipeline com extração, transformação, carga e agregação; catálogo com definição do indicador.",
        "conceitos": [
          "linhagem",
          "catálogo de dados"
        ],
        "estrategia": "Percorrer primeiro a linhagem para localizar onde o valor se alterou, e consultar o catálogo em seguida.",
        "execucao": [
          "1) Seguir a linhagem da agregação do painel até a fonte de origem.",
          "2) Identificar em qual etapa o valor divergiu.",
          "3) Consultar o catálogo para confirmar a definição do indicador e o dono."
        ],
        "resultado": "Consulta-se primeiro a linhagem, para localizar onde o valor divergiu; o catálogo confirma depois a definição do indicador e o dono.",
        "justificativa": "O gabarito distingue o papel de cada recurso: a linhagem rastreia o caminho do dado; o catálogo descreve o ativo e sua propriedade.",
        "errosFrequentes": [
          "Consultar apenas o catálogo e tentar encontrar o erro na descrição do indicador.",
          "Achar que consultar catálogo e linhagem é a mesma coisa, com ordem indiferente."
        ],
        "variacao": "Se a dúvida fosse saber o proprietário da tabela e sua classificação de sensibilidade, o recurso correto seria o catálogo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Será adicionada uma coluna à tabela de pagamentos. Antes da mudança, o analista precisa avaliar quais relatórios e rotinas serão afetados.",
        "dados": "Tabela de pagamentos com várias colunas; relatórios e agregações que consomem essa tabela; rotinas de processamento.",
        "conceitos": [
          "linhagem de dados",
          "impacto de mudança",
          "campo de destino"
        ],
        "estrategia": "Usar a linhagem para mapear os relatórios e agregações que consomem a tabela de pagamentos, distinguindo os que usam a nova coluna.",
        "execucao": [
          "1) Consultar a linhagem da tabela de pagamentos para listar os relatórios que a consomem.",
          "2) Identificar quais agregações usam colunas vizinhas e quais dependem da coluna a ser adicionada.",
          "3) Listar as rotinas que precisam de reprocessamento e quem deve ser notificado antes da mudança."
        ],
        "resultado": "A linhagem permite avaliar o impacto: quais relatórios e agregações consomem a tabela, quais rotinas precisam de reprocessamento.",
        "justificativa": "Sem linhagem, a mudança é um experimento e o efeito só aparece quando o relatório quebra. Com a linhagem, o impacto é previsível.",
        "errosFrequentes": [
          "Supor que apenas os relatórios que citam a coluna nova serão afetados, ignorando agregações indiretas.",
          "Não notificar os donos dos relatórios que consomem colunas vizinhas, que podem depender de regras ocultas da tabela."
        ],
        "variacao": "Se a mudança fosse remover uma coluna usada por um único relatório, a linhagem ainda avaliaria o impacto, com custo menor."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que ter um catálogo equivale a ter linhagem completa, pois ambos descrevem os ativos. Está correto?",
        "dados": "Organização com catálogo bem preenchido (descrição, dono, localização, classificação de sensibilidade) mas sem registro de transformação.",
        "conceitos": [
          "catálogo de dados",
          "linhagem de dados",
          "transformação"
        ],
        "estrategia": "Confrontar a definição de catálogo com a de linhagem e verificar que o catálogo registra o estado atual dos ativos.",
        "execucao": [
          "1) Reconhecer que o catálogo descreve o que existe, quem é o dono e onde está cada ativo.",
          "2) Verificar que não há registro de como os campos foram transformados.",
          "3) Concluir que catálogo sem linhagem não permite saber como o número foi calculado."
        ],
        "resultado": "A afirmação está errada. O catálogo descreve o estado atual dos ativos; a linhagem registra a trajetória e as transformações.",
        "justificativa": "A leitura ingênua trata catálogo e linhagem como sinônimos, mas um é índice do estado e o outro é histórico do fluxo.",
        "errosFrequentes": [
          "Considerar que a presença de descrição e dono no catálogo substitui o registro de transformações.",
          "Achar que linhagem e catálogo são a mesma coisa porque ambos usam metadados."
        ],
        "variacao": "Se o catálogo incluísse um campo 'última transformação conhecida', a resposta continuaria errada, porque isso não é linhagem completa."
      }
    ]
  },
  "m7-u1-t3-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "O ciclo de vida dos dados define as fases por que passa o dado e o controle que cada uma exige. Sem dono, prazo e critério de entrada e saída, a guarda se torna indefinida.",
      "preRequisitos": [
        "Noção de banco de dados e de arquivo",
        "Noção de finalidade de uso de um dado",
        "Conceito de prazo de retenção"
      ],
      "objetivosObservaveis": [
        "Descrever as cinco fases do ciclo de vida dos dados",
        "Associar regras de retenção e descarte a cada fase",
        "Aplicar o princípio de minimização em cada etapa"
      ],
      "competencias": [
        "Definir finalidade e qualidade mínima na origem da coleta",
        "Decidir quando eliminar ou anonimizar um dado ao fim da retenção"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u1-t3-s1 (Metadados: o que são e para que servem) — cada fase do ciclo é governada por metadados de criação, dono e prazo",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a qualidade na origem da coleta depende dessas dimensões"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Classificação qualitativa média, estimativa pedagógica de adequação ao conteúdo de governança de dados; aparece em itens sobre fases do ciclo de vida, retenção e descarte seguro."
      }
    },
    "niveis": {
      "iniciante": "O ciclo de vida descreve as fases por que passa o dado. Na criação e coleta, define-se a finalidade e a base de coleta. No armazenamento e integração, guarda-se com estrutura, metadados, backup e controle de acesso. No uso, consulta e envio a terceiros ficam restritos à finalidade declarada.",
      "intermediario": "No arquivamento, guarda-se por obrigação legal. No descarte, elimina-se ao fim da retenção. Descarte sem verificação mantém o dado recuperável. Cada fase tem dono, prazo e critério de entrada e saída.",
      "avancado": "O dado integrado multiplica valor e risco, porque a integração junta origens com permissões. No compartilhamento externo, o órgão entrega apenas o mínimo. A retenção tem dois limites: manter enquanto houver finalidade, e não manter indefinidamente.",
      "especialista": "O ciclo é governado por metadados: sem registro de criação, dono e prazo, o descarte vira arbitrário. Eliminar dado que deveria ser arquivado. A minimização é transversal: o dado que se coleta é o que se guarda, se usa e se mantém."
    },
    "comparacoes": [
      {
        "tema": "Arquivamento versus descarte: guarda por obrigação versus eliminação segura",
        "a": {
          "rotulo": "Arquivamento",
          "texto": "Guarda por obrigação legal, com custo controlado e acesso mais restrito, aplicável a dados frios."
        },
        "b": {
          "rotulo": "Descarte",
          "texto": "Eliminação segura e verificável ao fim da retenção; abrange cópias, backups e caches."
        },
        "diferencaGabarito": "A diferença está no objetivo: arquivar mantém o dado por obrigação, com acesso restrito; descartar encerra o ciclo com eliminação verificável."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'No ciclo de vida dos dados, descarte significa apenas apagar o arquivo principal.'",
        "porqueErrada": "O descarte efetivo envolve cópias, backups, caches e exportações. Apagar a base original mantendo cópias distribuídas não encerra o ciclo nem reduz o risco.",
        "versaoCorreta": "Errado. O descarte deve ser seguro e verificável, abrangendo todas as cópias e réplicas do dado. Apagar apenas o arquivo principal deixa o dado recuperável."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Manter dados indefinidamente por precaução é uma boa prática de retenção.'",
        "porqueErrada": "A guarda além do necessário aumenta custo de armazenamento, risco de vazamento e obrigações de segurança, sem benefício.",
        "versaoCorreta": "Errado. Manter por precaução sem finalidade viola a minimização. A conduta correta é definir prazo de retenção justificado e eliminar ao término."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ciclo de vida dos dados",
        "criação e coleta",
        "armazenamento e integração",
        "descarte",
        "minimização"
      ],
      "regras": [
        "coletar apenas o que será usado, com qualidade mínima na origem",
        "cada fase tem dono, prazo e critério de entrada e saída",
        "descarte deve ser seguro e verificável, com registro da operação"
      ],
      "comparacoes": [
        "arquivamento mantém por obrigação com acesso restrito; descarte elimina de forma verificável ao fim da retenção"
      ],
      "fluxos": [
        "definir finalidade e coletar com qualidade mínima na origem",
        "guardar com estrutura, metadados, backup e controle de acesso",
        "eliminar de forma segura e registrada ao fim da retenção"
      ],
      "excecoes": [
        "eliminar dado que deveria ser arquivado é tão grave quanto o excesso de guarda",
        "descarte sem verificação mantém o dado recuperável em cópias e backups"
      ],
      "palavrasChave": [
        "ciclo de vida",
        "coleta",
        "retenção",
        "descarte",
        "minimização"
      ],
      "checklist": [
        "Pergunto se a fase tem dono, prazo e critério de entrada e saída?",
        "Verifico se a coleta respeita a minimização e a finalidade declarada?",
        "Confiro se o descarte abrange cópias, backups e caches?",
        "Descarto a hipótese de guarda indefinida por precaução?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Listar as cinco fases do ciclo de vida para um registro de ocorrência atendido por uma secretaria.",
        "dados": "Registro de ocorrência criado no atendimento; base com backup, metadados e controle de acesso; guarda pelo prazo e eliminação com registro.",
        "conceitos": [
          "ciclo de vida dos dados",
          "fases",
          "controle por fase"
        ],
        "estrategia": "Percorrer as cinco fases em ordem, associando a cada uma o controle adequado: coleta, armazenamento, uso, arquivamento e descarte.",
        "execucao": [
          "1) Criar o registro no atendimento com finalidade definida.",
          "2) Armazenar em base com backup, metadados e controle de acesso.",
          "3) Arquivar pelo prazo legal com acesso mais restrito.",
          "4) Descartar após o prazo, com eliminação segura e registro da operação."
        ],
        "resultado": "As cinco fases são: criação e coleta com finalidade definida; armazenamento com backup, metadados e controle de acesso; uso restrito à finalidade; arquivamento por obrigação legal; descarte seguro após o prazo de retenção.",
        "justificativa": "O gabarito decorre de cada fase ter controle próprio e de o ciclo ser governado por metadados de criação, dono e prazo.",
        "errosFrequentes": [
          "Pular a fase de arquivamento e passar direto do uso para o descarte.",
          "Tratar todas as fases como iguais, sem dono, prazo e critério próprios."
        ],
        "variacao": "Se a área pedisse guarda indefinida por precaução, a resposta seria definir prazo de retenção justificado e eliminar ao término."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma área pede manter indefinidamente, por precaução, a base de candidatos não aprovados em um processo seletivo. Avaliar o pedido.",
        "dados": "Base de candidatos não aprovados; finalidade encerrada; guarda por precaução sem prazo definido; risco de vazamento e custo de armazenamento.",
        "conceitos": [
          "minimização",
          "retenção",
          "finalidade"
        ],
        "estrategia": "Verificar que a finalidade encerrou com o processo, e que o correto é definir prazo de retenção e eliminar ao término.",
        "execucao": [
          "1) Reconhecer que a finalidade da coleta terminou com o processo seletivo.",
          "2) Identificar que guarda indefinida aumenta custo e risco.",
          "3) Definir prazo de retenção justificado.",
          "4) Restringir o acesso e eliminar ou anonimizar ao término."
        ],
        "resultado": "O pedido é incompatível com o ciclo de vida: a finalidade encerrou. O correto é prazo de retenção justificado e eliminação ao término.",
        "justificativa": "A minimização é transversal: o dado que se coleta é o que se guarda, se usa e se mantém. Guardar além do necessário é custo sem benefício.",
        "errosFrequentes": [
          "Aceitar a guarda indefinida como precaução razoável.",
          "Esquecer de restringir o acesso durante o prazo de retenção restante."
        ],
        "variacao": "Se houver contencioso previsível, o prazo de retenção deve cobri-lo, mas termina em data definida."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma que descarte significa apenas apagar o arquivo principal. Está correto?",
        "dados": "Base original apagada, mas cópias em backups e caches ainda existentes.",
        "conceitos": [
          "descarte",
          "eliminação segura",
          "verificável"
        ],
        "estrategia": "Confrontar a definição estreita do candidato com o descarte efetivo, que envolve todas as cópias e réplicas do dado.",
        "execucao": [
          "1) Apagar o arquivo principal não elimina cópias distribuídas.",
          "2) Verificar que backups e caches mantêm o dado recuperável.",
          "3) Concluir que o descarte efetivo abrange todas as réplicas."
        ],
        "resultado": "A afirmação está errada. Apagar apenas o arquivo principal deixa cópias em backups e caches. Descarte efetivo exige eliminar todas as réplicas.",
        "justificativa": "A leitura ingênua reduz o descarte a uma única exclusão, mas o ciclo exige eliminação segura e verificável de todas as instâncias do dado.",
        "errosFrequentes": [
          "Considerar que apagar o arquivo principal encerra o ciclo de vida.",
          "Esquecer que dados em cache e exportações ainda expõem a organização."
        ],
        "variacao": "Se o dado tivesse sido anonimizado antes do descarte, o risco de reidentificação ainda precisaria ser avaliado."
      }
    ]
  },
  "m7-u2-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "A trinca acurácia, completude e validade é onde as questões de qualidade de dados mais trocam as dimensões de propósito. Separar o que se confere pela regra (validade), pela presença (completude) e pela realidade (acurácia) resolve itens de certo/errado e impede atribuir a uma dimensão o defeito que pertence a outra.",
      "preRequisitos": [
        "Reconhecer campos obrigatórios e opcionais em um cadastro ou tabela.",
        "Interpretar percentuais simples como fração de um total de registros."
      ],
      "objetivosObservaveis": [
        "diferenciar acurácia, completude e validade a partir de um caso concreto de cadastro;",
        "calcular o percentual de registros conformes em cada dimensão, declarando a regra e o denominador usados;",
        "justificar por que um valor presente e bem formatado pode não ser acurado."
      ],
      "competencias": [
        "análise crítica de base de dados para separar conformidade de regra, presença e correspondência com a realidade;",
        "cálculo e documentação de métricas de qualidade com denominador explícito."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — completa o conjunto das seis dimensões de qualidade;",
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — a coleta e a transformação são onde a completude e a validade costumam falhar primeiro."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A distinção entre acurácia, completude e validade integra o conteúdo programático de dados e governança, que costuma apresentar um cadastro com campo preenchido e formato correto para testar se o candidato confunde presença com correspondência à realidade."
      }
    },
    "niveis": {
      "iniciante": "A acurácia mede se o valor registrado corresponde à realidade que ele representa: o nome do processo existe, o CPF pertence à pessoa indicada, o valor pago confere com o comprovante. A completude mede se os campos necessários estão preenchidos, pela fração de registros sem ausência. A validade mede se o valor obedece ao formato, ao domínio e à regra definida — data em intervalo permitido, UF válida, valor não negativo.",
      "intermediario": "Cada dimensão tem sua própria regra e seu próprio denominador. A completude depende do que é obrigatório: telefone pode ser opcional e CPF obrigatório, e contar nulos sem conhecer a regra não é medir qualidade. A validade confere-se internamente, contra a lista de domínios aceitos. A acurácia confere-se contra referência externa, como cadastro oficial ou leitura física, o que a torna a dimensão mais cara de verificar. A métrica típica é o percentual de registros conformes por dimensão, sempre com a regra documentada.",
      "avancado": "O ponto que decide o gabarito é que as três dimensões são independentes. Um valor pode ser válido, com formato correto, e estar completo, mas falso em relação à realidade; é comum encontrar base inteiramente preenchida e com erro de acurácia, sobretudo quando o preenchimento é obrigatório e feito com informação inventada. Por isso não se infere acurácia a partir de completude e validade: a conferência exige fonte autoritativa e amostragem.",
      "especialista": "A aplicação madura exige declarar, para cada dimensão, a regra, a população relevante e o denominador, de modo que a métrica seja reproduzível e auditável. A acurácia só se comprova por confronto com referência externa ou amostra conferida, e seu custo deve entrar no desenho do controle. Completude e validade podem ser automatizadas; a acurácia em geral exige amostragem, o que impõe decidir periodicidade e tolerância antes de publicar qualquer percentual."
    },
    "comparacoes": [
      {
        "tema": "Validade versus acurácia",
        "a": {
          "rotulo": "Validade",
          "texto": "Aderência ao formato, ao domínio e à regra definida; confere-se internamente, sem consultar a realidade — data no intervalo permitido, UF existente, valor não negativo."
        },
        "b": {
          "rotulo": "Acurácia",
          "texto": "Correspondência entre o valor registrado e o fato real; confere-se contra referência externa, como base oficial ou conferência manual, o que a torna mais cara de verificar."
        },
        "diferencaGabarito": "A validade se confere pela regra e a acurácia pela realidade: um dado pode passar em todos os testes de formato e ainda assim descrever um fato falso."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se todos os campos estão preenchidos e no formato correto, a base é acurada.",
        "porqueErrada": "Preenchimento mede completude e formato mede validade; nenhuma das duas confronta o dado com a realidade. Exigir preenchimento obrigatório amplia o risco de informação inventada, e é comum haver base totalmente completa com erro de acurácia.",
        "versaoCorreta": "Incorreto: completude e validade não garantem acurácia. A correspondência com a realidade só se verifica contra referência externa; um cadastro completo e bem formatado pode conter valores falsos."
      },
      {
        "afirmacaoEquivocada": "A validade de um dado é apurada confrontando-o com uma fonte autoritativa da realidade.",
        "porqueErrada": "Confronto com fonte autoritativa é o procedimento da acurácia; a validade é a aderência à regra, ao formato e ao domínio definidos, e se verifica internamente, sem referência externa.",
        "versaoCorreta": "Errado: confrontar com fonte autoritativa mede acurácia. A validade verifica apenas se o valor obedece ao formato e ao domínio previstos na regra, o que pode ser feito dentro da própria base."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Acurácia: o valor registrado corresponde ao fato real, comprovado por referência externa.",
        "Completude: os campos exigidos estão preenchidos, medida pela fração de registros sem ausência.",
        "Validade: o valor obedece ao formato, ao domínio e às regras definidas para o campo.",
        "Métrica de qualidade: percentual de registros conformes em uma dimensão, sobre a população relevante."
      ],
      "regras": [
        "Cada dimensão exige sua própria regra e seu próprio denominador; contar nulos sem conhecer a obrigatoriedade do campo não mede completude.",
        "A acurácia só se confirma contra referência externa; completude e validade podem ser verificadas dentro da base.",
        "A métrica só é reproduzível se a regra usada for documentada junto com o percentual."
      ],
      "comparacoes": [
        "Validade se confere pela regra e acurácia pela realidade: um valor pode ser válido e completo sem ser acurado."
      ],
      "fluxos": [
        "Definir a regra do campo → calcular a completude pela fração de registros preenchidos → verificar a validade contra o domínio → confrontar por amostra com referência externa para estimar a acurácia → registrar regra e denominador."
      ],
      "excecoes": [
        "Campo opcional não entra no denominador da completude como ausência: telefone não obrigatório pode estar vazio sem violar a dimensão."
      ],
      "palavrasChave": [
        "acurácia",
        "completude",
        "validade",
        "referência externa",
        "domínio",
        "métrica",
        "denominador"
      ],
      "checklist": [
        "A regra de cada campo (obrigatoriedade, formato e domínio) está declarada?",
        "O denominador da métrica corresponde à população relevante?",
        "A acurácia foi confrontada com referência externa ou amostra conferida?",
        "Foi evitado inferir acurácia a partir de completude e validade?",
        "O percentual está documentado com a regra que o produziu?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Em uma base de 10 cadastros, 9 têm e-mail preenchido, 1 campo obrigatório está vazio e 1 UF foi registrada como 'XX'. Calcular a completude do e-mail e a validade da UF.",
        "dados": "Base com 10 cadastros; 9 registros com e-mail preenchido; e-mail é campo obrigatório; 1 campo obrigatório sem valor; 1 registro com UF igual a 'XX'; conjunto de unidades federativas válidas como domínio do campo.",
        "conceitos": [
          "completude",
          "validade",
          "campo obrigatório"
        ],
        "estrategia": "Tratar cada campo com sua própria regra: o e-mail mede-se por presença sobre os 10 cadastros; a UF mede-se pelo domínio de valores aceitos. Contar o campo obrigatório vazio e a UF inválida como as não conformidades de cada dimensão, sem misturar os denominadores.",
        "execucao": [
          "Contar os cadastros: total de 10.",
          "Completude do e-mail: 9 preenchidos em 10, logo 9/10.",
          "Validade da UF: 9 valores dentro do domínio em 10, descartando o 'XX', logo 9/10.",
          "Expressar cada resultado com sua regra e seu denominador."
        ],
        "resultado": "Completude do e-mail = 9/10 = 90%. Validade da UF = 9/10 = 90%, pois a linha com 'XX' viola o domínio. São métricas de campos distintos, cada uma com sua regra e seu denominador.",
        "justificativa": "O gabarito separa as dimensões: a completude do e-mail conta presença sobre o total de cadastros e a validade da UF conta aderência ao domínio. O campo obrigatório vazio e a UF inexistente são não conformidades de regras diferentes e por isso não se somam nem compartilham o mesmo denominador.",
        "errosFrequentes": [
          "Somar o campo vazio e a UF inválida em uma única métrica, misturando completude com validade.",
          "Calcular a completude da UF, quando a métrica pedida para esse campo é a validade."
        ],
        "variacao": "Se a base tiver 100 cadastros e 6 sem data de nascimento, sendo a data um campo opcional, a completude desse campo deixa de ser exigível e só se mede se houver regra que o torne obrigatório."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um cadastro exibe o CPF com 11 dígitos e máscara correta, mas a conferência junto à base oficial mostra que o número pertence a outra pessoa. Qual dimensão está violada?",
        "dados": "Registro com CPF de 11 dígitos e máscara correta; todos os campos obrigatórios preenchidos; conferência junto à base oficial indica que o número está associado a outro titular.",
        "conceitos": [
          "acurácia",
          "validade",
          "referência externa"
        ],
        "estrategia": "Verificar as três dimensões em ordem: a presença dos campos (completude), o formato e o domínio do CPF (validade) e, por fim, o confronto com a base oficial (acurácia). A conferência com fonte autoritativa é o que expõe a violação.",
        "execucao": [
          "Confirmar que todos os campos obrigatórios estão preenchidos: completude satisfeita.",
          "Confirmar que o CPF tem 11 dígitos e máscara válida: validade satisfeita.",
          "Comparar o número com a base oficial: o titular é outro.",
          "Atribuir a violação à correspondência com a realidade, ou seja, à acurácia."
        ],
        "resultado": "Dimensão violada: acurácia. Completude e validade estão atendidas; o defeito é de correspondência com o fato real e só aparece no confronto com a referência externa.",
        "justificativa": "O CPF preenchido e bem formatado passa em completude e validade, que se verificam dentro da base. A base oficial é referência externa, e é justamente o confronto com ela que revela o vínculo errado entre número e pessoa, caracterizando violação de acurácia e não de formato.",
        "errosFrequentes": [
          "Classificar o caso como validade, supondo que dígitos verificadores corretos garantem titularidade.",
          "Tratar o problema como completude, confundindo presença do campo com exatidão do conteúdo."
        ],
        "variacao": "Se o mesmo cadastro trouxesse o CPF com 10 dígitos, a violação seria de validade, detectável dentro da base pelo formato, antes de qualquer consulta à referência externa."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'se todos os campos estão preenchidos e no formato certo, a base é acurada'.",
        "dados": "Afirmação de um analista de que preenchimento integral e formato correto bastam para a base ser acurada; base com todos os campos obrigatórios preenchidos e valores dentro dos domínios definidos.",
        "conceitos": [
          "acurácia",
          "completude",
          "validade"
        ],
        "estrategia": "Decompor a afirmação em suas duas premissas — campos preenchidos e formato correto — e mapear cada uma à dimensão correspondente; em seguida testar se alguma delas confronta o dado com a realidade, que é a única forma de comprovar acurácia.",
        "execucao": [
          "Identificar a primeira premissa: campos preenchidos, que mede completude.",
          "Identificar a segunda premissa: formato correto, que mede validade.",
          "Verificar que nenhuma das duas compara o valor com o fato real.",
          "Concluir que a afirmação confunde dimensões e não sustenta a acurácia."
        ],
        "resultado": "Afirmação incorreta. Completude e validade descrevem presença e conformidade de regra; nenhuma confronta o valor com a realidade, de modo que a base pode estar integral e bem formatada e ainda conter dados falsos.",
        "justificativa": "O gabarito rejeita a afirmação porque acurácia é a única dimensão que exige referência externa. Exigir preenchimento e formato pode até aumentar o risco de valor inventado, já que o sistema aceita qualquer conteúdo bem formado, sem verificar se ele corresponde ao fato.",
        "errosFrequentes": [
          "Aceitar a afirmação por associar preenchimento e formato à confiabilidade do conteúdo.",
          "Supor que obrigatoriedade de campo reduz erro de acurácia, quando pode apenas disfarçá-lo."
        ],
        "variacao": "Se a afirmação fosse 'uma base sem duplicatas e atualizada hoje é acurada', o erro seria o mesmo tipo de salto: atribuir acurácia a dimensões que não comparam o valor com o fato real."
      }
    ]
  },
  "m7-u2-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Consistência, unicidade e tempestividade são as dimensões que escapam de quem só olha preenchimento e formato. O mesmo fato pode aparecer em unidades incompatíveis entre áreas, repetido em várias linhas por erro de carga ou chegar tarde demais para a decisão, e cada caso exige uma regra de conferência distinta. Reconhecer os conflitos entre dimensões separa a resposta correta da intuitiva.",
      "preRequisitos": [
        "Compreender o conceito de entidade e de chave de identificação em uma base.",
        "Entender a reconciliação entre total e detalhe (soma dos itens igual ao total)."
      ],
      "objetivosObservaveis": [
        "avaliar consistência, unicidade e tempestividade de uma base a partir de casos concretos;",
        "calcular a taxa de duplicidade e interpretar sua relação com a unicidade;",
        "explicar como uma decisão de qualidade reduz uma dimensão e prejudica outra."
      ],
      "competencias": [
        "detecção de duplicidade e de divergência entre fontes por regra de reconciliação;",
        "análise de trade-offs entre dimensões de qualidade com métrica declarada."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s1 (Acurácia, completude e validade) — as três primeiras dimensões do mesmo conjunto;",
        "m7-u2-t2-s2 (ETL e ELT: diferenças e quando aplicar cada um) — a ordem entre transformar e carregar altera a tempestividade e a disciplina de governança."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens de consistência, unicidade e tempestividade integram o conteúdo programático de dados, na forma de identificação da dimensão violada em um cenário narrado, e exploram os conflitos entre dimensões para induzir a alternativa que trata cada exigência como sempre favorável."
      }
    },
    "niveis": {
      "iniciante": "A consistência mede se o mesmo fato é representado de forma compatível, dentro do registro (a soma dos itens igual ao total) e entre sistemas (o saldo coincide nos dois módulos). A unicidade mede se cada entidade real aparece uma única vez, pela taxa de duplicatas. A tempestividade mede se o dado está disponível quando é necessário, pela data da última atualização e pelo intervalo entre o fato e a disponibilidade.",
      "intermediario": "Consistência se apura por regras de reconciliação que comparam representações do mesmo fato; a unicidade compara registros entre si para encontrar repetições por erro de carga, reenvio ou cadastro duplo; a tempestividade compara o instante do fato com o instante em que o dado se torna utilizável. São verificações distintas: uma base pode não ter duplicatas e, ainda assim, apresentar o mesmo saldo com valores diferentes em sistemas separados, ou chegar íntegra e tarde demais.",
      "avancado": "As dimensões entram em conflito e a questão costuma cobrar esse conflito. Deduplicar para ganhar unicidade pode reduzir a completude se a regra de fusão descartar histórico; coletar tudo por precaução melhora a completude e piora a minimização e a tempestividade; validação rígida na entrada reduz o erro e rejeita registros legítimos com formato incomum. Qualidade é gestão de trade-offs, e a resposta correta declara a métrica afetada em cada escolha.",
      "especialista": "A condução madura define, para cada dimensão, a regra, a fonte de verdade e a tolerância, e registra o efeito colateral de cada decisão. A reconciliação exige uma hierarquia declarada de fontes para resolver divergências; a deduplicação exige critério de fusão que preserve o histórico necessário; a tempestividade exige acordo de nível de serviço entre o fato e a disponibilização. Sem essas definições, a métrica aponta o sintoma, mas não orienta a correção nem sustenta a auditoria."
    },
    "comparacoes": [
      {
        "tema": "Consistência versus unicidade",
        "a": {
          "rotulo": "Consistência",
          "texto": "Compara representações do mesmo fato para confirmar compatibilidade: soma dos itens igual ao total e saldo idêntico entre sistemas."
        },
        "b": {
          "rotulo": "Unicidade",
          "texto": "Compara registros entre si para confirmar que cada entidade real aparece uma única vez, medida pela taxa de duplicatas."
        },
        "diferencaGabarito": "A consistência olha o mesmo fato em lugares diferentes; a unicidade olha o mesmo objeto repetido na mesma base — uma trata divergência, a outra trata repetição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Uma base atualizada há um minuto e com formato perfeito é uma base de qualidade.",
        "porqueErrada": "Tempestividade e validade são apenas duas das seis dimensões; a base pode estar incompleta, inconsistente com outra área, duplicada e imprecisa. Qualidade exige avaliação conjunta, com regra e denominador declarados para cada dimensão.",
        "versaoCorreta": "Incorreto: estar atualizada e bem formatada satisfaz apenas tempestividade e validade. Sem conferir completude, consistência, unicidade e acurácia, não há como afirmar que a base seja de qualidade."
      },
      {
        "afirmacaoEquivocada": "Deduplicar uma base sempre melhora sua qualidade.",
        "porqueErrada": "Deduplicar melhora a unicidade, mas pode reduzir a completude se a regra de fusão descartar atributos preenchidos em apenas uma das cópias. É um trade-off: o ganho em uma dimensão pode custar outra, e a resposta correta declara o efeito.",
        "versaoCorreta": "Errado: a deduplicação melhora a unicidade e pode piorar a completude quando a fusão perde dados que existiam em apenas uma das cópias; o resultado depende da regra de fusão adotada."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Consistência: o mesmo fato é representado de forma compatível dentro do registro e entre sistemas.",
        "Unicidade: cada entidade real aparece uma única vez, medida pela taxa de duplicatas.",
        "Tempestividade: o dado está disponível no momento necessário, com latência aceitável.",
        "Reconciliação: regra que compara representações do mesmo fato para revelar divergências."
      ],
      "regras": [
        "Duplicidade é a violação direta da unicidade e se mede pela fração de registros repetidos.",
        "Dado antigo pode ser acurado e completo e ainda assim inútil para a decisão, o que caracteriza falha de tempestividade.",
        "Toda decisão de qualidade troca uma dimensão por outra e deve declarar a métrica afetada."
      ],
      "comparacoes": [
        "A consistência procura divergência entre representações do mesmo fato; a unicidade procura repetição da mesma entidade na mesma base."
      ],
      "fluxos": [
        "Identificar o fato e suas representações → comparar totais e saldos para apurar consistência → buscar registros repetidos para medir unicidade → comparar o instante do fato com o da disponibilização para medir tempestividade → registrar os trade-offs de cada correção."
      ],
      "excecoes": [
        "Duas linhas podem descrever o mesmo atendimento em etapas distintas e não serem duplicata; a unicidade depende da definição da entidade, não da semelhança textual."
      ],
      "palavrasChave": [
        "consistência",
        "unicidade",
        "tempestividade",
        "duplicidade",
        "reconciliação",
        "latência",
        "trade-off"
      ],
      "checklist": [
        "A definição da entidade está clara antes de contar duplicatas?",
        "A regra de reconciliação entre fontes está declarada?",
        "O instante do fato foi comparado ao da disponibilização?",
        "Cada correção teve seu efeito colateral registrado?",
        "Os denominadores das métricas correspondem à população relevante?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Identificar a dimensão violada em três situações: uma filial registra 2,0 m de estante e a matriz registra 200 cm sem conversão; três linhas idênticas do mesmo atendimento; um painel atualizado ontem para um fato de hoje.",
        "dados": "Filial com estante de 2,0 m e matriz com 200 cm em bases separadas sem regra de conversão; três linhas idênticas do mesmo atendimento; painel cuja última atualização é de ontem para um fato ocorrido hoje.",
        "conceitos": [
          "consistência",
          "unicidade",
          "tempestividade"
        ],
        "estrategia": "Classificar cada caso pela pergunta que ele responde: o mesmo fato está compatível entre áreas, a mesma entidade está repetida ou o dado chegou a tempo. Aplicar a cada situação a dimensão correspondente, sem sobrepor as definições.",
        "execucao": [
          "Reconhecer o mesmo fato em unidades incompatíveis: inconsistência por falta de regra de conversão.",
          "Reconhecer o mesmo atendimento repetido: violação de unicidade.",
          "Comparar o instante do fato com o da disponibilização: violação de tempestividade.",
          "Registrar uma dimensão por caso, sem acumular rótulos."
        ],
        "resultado": "Primeiro caso: inconsistência. Segundo caso: violação de unicidade por duplicidade. Terceiro caso: violação de tempestividade, porque a latência entre o fato e a atualização é inaceitável para a decisão apoiada.",
        "justificativa": "O gabarito associa cada sintoma à dimensão que o define: representações incompatíveis do mesmo fato são inconsistência; repetição da mesma entidade é falha de unicidade; atraso entre fato e disponibilidade é falha de tempestividade. As três dimensões são independentes e não se substituem.",
        "errosFrequentes": [
          "Chamar a duplicidade de inconsistência, confundindo repetição da mesma entidade com divergência entre representações.",
          "Tratar o atraso do painel como acurácia, supondo que dado desatualizado está sempre errado."
        ],
        "variacao": "Se as duas unidades registrassem 2,0 m e 2,00 m com conversão declarada, o primeiro caso deixaria de ser inconsistência; restariam as violações de unicidade e de tempestividade, que continuam independentes entre si."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em uma base de 10 registros há 2 duplicatas exatas e 1 registro cuja data do fato é posterior à data de atualização. Calcular a taxa de duplicidade e apontar o segundo problema.",
        "dados": "Base com 10 registros; 2 pares de registros exatamente iguais; 1 registro com data do fato posterior à data de atualização do próprio registro.",
        "conceitos": [
          "unicidade",
          "consistência",
          "integridade temporal"
        ],
        "estrategia": "Medir a unicidade pela fração de registros repetidos sobre o total e, em seguida, aplicar a regra de integridade temporal que exige data de atualização igual ou posterior à data do fato, tratando os dois achados como problemas distintos.",
        "execucao": [
          "Contar o total de registros: 10.",
          "Contar os registros repetidos: 2, o que dá taxa de duplicidade de 2/10 = 20%.",
          "Aplicar a regra temporal ao registro restante: atualização anterior ao fato.",
          "Classificar o segundo achado como violação de consistência temporal."
        ],
        "resultado": "Taxa de duplicidade = 2/10 = 20%, com unicidade de 80%. O segundo achado viola a consistência temporal, pois a atualização não pode anteceder o próprio fato — regra que a conferência de unicidade não alcança.",
        "justificativa": "O gabarito separa as duas verificações: a unicidade se mede pela fração de registros repetidos e não enxerga a incoerência entre datas; a integridade temporal é uma regra de consistência interna do registro, aplicada sobre o campo de datas independentemente da contagem de duplicatas.",
        "errosFrequentes": [
          "Recalcular a taxa de duplicidade incluindo o registro com datas incoerentes, que não é duplicata.",
          "Tratar a data de atualização anterior ao fato como erro de formato, quando é violação de regra temporal."
        ],
        "variacao": "Se os 2 registros repetidos diferissem em um dígito do identificador, deixariam de ser duplicatas exatas e passariam a exigir regra de quase-duplicidade, alterando a taxa sem mudar a conclusão sobre a data incoerente."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'uma base atualizada há um minuto e com formato perfeito é uma base de qualidade'.",
        "dados": "Afirmação de um gestor; base recém-atualizada, com todos os valores dentro do formato e do domínio definidos; ausência de informação sobre completude, consistência com outras áreas, duplicidade e acurácia.",
        "conceitos": [
          "tempestividade",
          "validade",
          "trade-off entre dimensões"
        ],
        "estrategia": "Isolar as dimensões efetivamente atendidas pela afirmação — tempestividade e validade — e verificar quais ficaram de fora; a conclusão depende de perceber que a qualidade exige a avaliação conjunta das seis dimensões.",
        "execucao": [
          "Identificar o que 'atualizada há um minuto' comprova: tempestividade.",
          "Identificar o que 'formato perfeito' comprova: validade.",
          "Listar o que a afirmação não avalia: completude, consistência, unicidade e acurácia.",
          "Concluir que a generalização é indevida."
        ],
        "resultado": "Afirmação incorreta. Apenas tempestividade e validade foram satisfeitas; a base pode estar incompleta, divergente de outra área, com duplicatas e com valores falsos, de modo que a qualidade depende da avaliação conjunta das dimensões.",
        "justificativa": "O gabarito rejeita o salto de duas dimensões para a qualidade global: atualização recente e formato correto não implicam presença, compatibilidade, ausência de repetição nem correspondência com o fato real, que exigem verificações próprias e regras declaradas.",
        "errosFrequentes": [
          "Generalizar de duas dimensões para a qualidade total, ignorando completude, consistência, unicidade e acurácia.",
          "Presumir que dado recente é sempre acurado, quando a atualização apenas indica tempestividade."
        ],
        "variacao": "Se a afirmação fosse 'uma base sem duplicatas é uma base de qualidade', o erro seria o mesmo tipo de salto, agora a partir da unicidade, que também não garante consistência, completude, acurácia nem tempestividade."
      }
    ]
  },
  "m7-u2-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Localizar em que estágio do pipeline reside uma falha é o que permite corrigi-la em vez de maquiar o resultado. Questões de concurso descrevem um sintoma — total que não fecha, indicador que muda de sentido, dado sem origem — e pedem o estágio responsável; responder pelo efeito observado no painel desvia o gabarito. A governança atravessa todos os estágios e é a resposta de quem confunde tecnologia com responsabilidade.",
      "preRequisitos": [
        "Noção de sistema transacional, planilha e base analítica como fontes distintas de dado.",
        "Diferenciar captar, integrar, guardar, tratar e consumir informação."
      ],
      "objetivosObservaveis": [
        "descrever os cinco estágios do pipeline, indicando entrada, saída e risco típico de cada um;",
        "identificar o estágio responsável por uma falha descrita em um cenário;",
        "justificar por que a validação deve ocorrer em cada estágio e não apenas na saída."
      ],
      "competencias": [
        "mapeamento do fluxo de dado da origem ao consumo, com pontos de controle em cada estágio;",
        "diagnóstico de falha pela etapa de origem em vez do sintoma final."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t2-s2 (ETL e ELT: diferenças e quando aplicar cada um) — aprofunda os estágios de transformação e carga e a ordem entre eles;",
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a qualidade entra pela coleta e se decide na transformação."
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "A descrição dos estágios do pipeline e a identificação da etapa responsável por uma falha são itens frequentes em provas de engenharia de dados, porque permitem cobrar tanto a sequência conceitual quanto o diagnóstico de um cenário de carga sem exigir ferramenta específica."
      }
    },
    "niveis": {
      "iniciante": "Pipeline é o caminho percorrido pelo dado da fonte até o uso, em cinco estágios. A coleta capta o dado nas fontes: sistemas transacionais, planilhas, formulários e sensores. A integração reúne as fontes em um conjunto coerente, por chaves de ligação e reconciliação. O armazenamento guarda o dado com estrutura adequada ao uso. A transformação limpa, padroniza, converte e deriva campos. O consumo entrega relatórios, painéis, análises e decisões.",
      "intermediario": "Cada estágio tem um risco típico. Na coleta, captar sem direito de uso ou sem regra de qualidade contamina tudo a jusante. Na integração, chave mal padronizada gera casamento errado ou linhas órfãs. No armazenamento, guardar sem metadados, sem backup e sem controle de acesso compromete a recuperação e a auditoria. Na transformação, regra não versionada impede reproduzir o número. No consumo, indicador sem definição produz valores iguais com sentidos diferentes.",
      "avancado": "A governança atravessa os cinco estágios e define finalidade, acesso, retenção e responsáveis; ela não é um sexto estágio isolado. O erro de um estágio viaja para os seguintes e pode aparecer apenas no consumo, o que exige conferência em cada etapa: entrada, transformação e saída. Chave de ligação, granularidade e regra de prevalência entre fontes divergentes concentram as falhas de integração que fazem o detalhe não fechar com o total.",
      "especialista": "No desenho maduro, cada estágio declara contrato de entrada e saída, regra de qualidade e responsável, e as transformações são versionadas para tornar o resultado reproduzível. A reconciliação entre fontes exige hierarquia declarada de prevalência; a granularidade precisa ser explícita para impedir a comparação entre detalhe diário e total mensal; e o consumo exige definição formal do indicador. Sem esses controles, corrigir o painel apenas esconde a falha de origem."
    },
    "comparacoes": [
      {
        "tema": "Estágio de integração versus estágio de transformação",
        "a": {
          "rotulo": "Integração",
          "texto": "Reúne fontes distintas em um conjunto coerente: padroniza chaves de ligação, reconcilia divergências entre fontes e resolve a granularidade das informações."
        },
        "b": {
          "rotulo": "Transformação",
          "texto": "Atua sobre o dado já reunido: limpa, padroniza valores, converte tipos, deriva campos, normaliza e agrega conforme regra definida."
        },
        "diferencaGabarito": "A integração decide como as fontes se encontram e qual prevalece; a transformação decide como o dado reunido é tratado — confundir as duas desloca a correção para o estágio errado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Se o painel de consumo apresenta os números corretos, os estágios anteriores estão corretos.",
        "porqueErrada": "O consumo mostra apenas o efeito; erro de origem pode ser mascarado por ajuste manual no relatório, e erro de transformação pode coincidir com um total que, por acaso, fecha. A validação exige conferência em entrada, transformação e saída, não apenas no resultado final.",
        "versaoCorreta": "Incorreto: o painel correto não prova que a origem está correta. Um ajuste manual pode esconder erro de coleta ou de integração, e só a conferência em cada estágio, com regra declarada, sustenta a conclusão."
      },
      {
        "afirmacaoEquivocada": "Regras de transformação não precisam de versão nem de documentação, pois o resultado final é o que importa.",
        "porqueErrada": "Sem versionamento e documentação, o número não é reproduzível nem auditável: ninguém consegue explicar como foi produzido nem refazer o cálculo com a mesma regra. A transformação é justamente o estágio em que a ausência de controle é mais danosa.",
        "versaoCorreta": "Errado: regras de transformação devem ser versionadas e documentadas para que o resultado seja reproduzível e auditável; sem isso, o número não pode ser conferido nem reconstruído."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Pipeline de dados: caminho percorrido pelo dado da fonte até o uso, em cinco estágios.",
        "Coleta: captação do dado nas fontes, com direito de uso e regra de qualidade.",
        "Integração: reunião de fontes em conjunto coerente, por chaves, reconciliação e granularidade.",
        "Transformação: limpeza, padronização, conversão, derivação e agregação com regra versionada.",
        "Consumo: entrega do dado em relatórios, painéis, análises e decisões."
      ],
      "regras": [
        "A governança de finalidade, acesso, retenção e responsáveis atravessa todos os estágios e não é um estágio à parte.",
        "Cada estágio tem entrada, saída e risco típico, e a falha de um viaja para os seguintes.",
        "A validação exige conferência na entrada, na transformação e na saída, não somente no resultado final."
      ],
      "comparacoes": [
        "A integração decide como as fontes se encontram; a transformação decide como o dado reunido é tratado."
      ],
      "fluxos": [
        "Coleta na fonte → integração por chave, reconciliação e granularidade → armazenamento com metadados e controle de acesso → transformação versionada → consumo com indicador definido → governança de finalidade, acesso e retenção em todo o percurso."
      ],
      "excecoes": [
        "Um estágio pode estar correto e o resultado ainda parecer errado quando a granularidade comparada é diferente: detalhe diário confrontado com total mensal gera divergência aparente sem defeito de cálculo."
      ],
      "palavrasChave": [
        "pipeline",
        "coleta",
        "integração",
        "transformação",
        "consumo",
        "governança",
        "granularidade"
      ],
      "checklist": [
        "O contrato de entrada e saída de cada estágio está definido?",
        "As chaves de ligação foram padronizadas antes da integração?",
        "A regra de prevalência entre fontes divergentes está declarada?",
        "As transformações estão versionadas e documentadas?",
        "Cada indicador de consumo tem definição formal?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Mapear os cinco estágios do pipeline para apurar indicadores de saúde a partir de notificações enviadas em planilhas pelas unidades.",
        "dados": "Notificações de saúde registradas em planilhas por várias unidades, com formatos e nomes de unidade divergentes; necessidade de painel de vigilância e relatório gerencial; os dados chegam das unidades por envio periódico.",
        "conceitos": [
          "coleta",
          "integração",
          "transformação",
          "consumo"
        ],
        "estrategia": "Percorrer o caminho do dado na ordem dos estágios, atribuindo a cada um a atividade correspondente: receber as planilhas, consolidá-las, guardá-las com histórico, padronizá-las e, por fim, apresentá-las em painel com indicador definido.",
        "execucao": [
          "Coleta: receber as planilhas enviadas pelas unidades.",
          "Integração: consolidar em base única, com chave de unidade e data, resolvendo formatos distintos.",
          "Armazenamento: guardar com histórico e metadados das unidades.",
          "Transformação: padronizar nomes de unidade, converter datas e deduplicar notificações repetidas.",
          "Consumo: publicar painel de vigilância e relatório gerencial com cada indicador definido."
        ],
        "resultado": "A apuração percorre coleta (planilhas das unidades), integração (base única por unidade e data), armazenamento (histórico e metadados), transformação (padronização, conversão e deduplicação) e consumo (painel e relatório com indicador definido).",
        "justificativa": "O gabarito segue a ordem do caminho do dado: cada atividade pertence ao estágio que a executa e o consumo só é o último passo. Mapear os estágios evita tratar a padronização como parte do painel, quando ela pertence à transformação, e a consolidação como coleta, quando pertence à integração.",
        "errosFrequentes": [
          "Colocar a padronização de nomes de unidade no consumo, quando ela pertence à transformação.",
          "Tratar a consolidação das planilhas como coleta, confundindo receber o dado com reuni-lo em base única."
        ],
        "variacao": "Se as unidades enviassem os dados por interface automática em vez de planilhas, a coleta mudaria de meio, mas as etapas de integração, armazenamento, transformação e consumo permaneceriam as mesmas."
      },
      {
        "tipo": "aplicacao",
        "problema": "Após a carga, o total por unidade não fecha com o detalhe. Em qual estágio está a falha e o que deve ser verificado?",
        "dados": "Relatório consolidado em que a soma dos registros detalhados por unidade difere do total apresentado; unidades cadastradas com nomes abreviados diferentes entre fontes; convivência de detalhe diário com total mensal; duas fontes para o mesmo fato.",
        "conceitos": [
          "integração",
          "reconciliação",
          "granularidade"
        ],
        "estrategia": "Como a divergência aparece na comparação entre duas representações do mesmo fato, direcionar a análise ao estágio de integração e verificar, nessa ordem, a padronização das chaves, a compatibilidade de granularidade e a regra de prevalência entre as fontes.",
        "execucao": [
          "Confirmar a divergência: a soma do detalhe por unidade difere do total consolidado.",
          "Verificar as chaves: nomes de unidade abreviados de formas diferentes impedem o casamento correto.",
          "Verificar a granularidade: detalhe diário não se soma diretamente a total mensal sem alinhamento.",
          "Verificar a regra de prevalência: definir qual fonte se sobrepõe quando as duas divergem."
        ],
        "resultado": "A falha está no estágio de integração, na reconciliação entre fontes. Deve-se conferir a padronização das chaves, a compatibilidade de granularidade e a regra de prevalência; a diferença entre a soma dos filhos e o total revela linha órfã ou duplicada.",
        "justificativa": "O gabarito aponta a integração porque é ali que as representações do mesmo fato se encontram e se reconciliam. Chave não padronizada produz casamento errado, granularidade incompatível impede a soma direta e ausência de regra de prevalência faz duas fontes divergentes coexistirem, falhas que a transformação posterior não resolve sozinha.",
        "errosFrequentes": [
          "Atribuir a falha ao consumo, tratando o total que não fecha como erro de painel.",
          "Procurar erro de coleta, quando as duas fontes foram captadas corretamente e divergem entre si."
        ],
        "variacao": "Se o total não fechasse apenas para uma unidade e as demais estivessem corretas, a investigação se concentraria na chave daquela unidade, mantendo o diagnóstico no estágio de integração."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'se o consumo, isto é, o painel, está correto, então os estágios anteriores estão corretos'.",
        "dados": "Afirmação de um analista; painel apresenta os totais esperados pela área; não há registro de conferência na coleta, na integração nem na transformação; o relatório contém ajuste manual lançado para fechar o número.",
        "conceitos": [
          "consumo",
          "governança",
          "validação por estágio"
        ],
        "estrategia": "Testar a implicação pela contraprova: procurar um caminho em que o painel fique correto sem que os estágios anteriores estejam corretos. O ajuste manual no relatório é exatamente esse caminho, pois corrige a saída sem eliminar a causa na origem.",
        "execucao": [
          "Identificar o que a afirmação observa: apenas a saída, no consumo.",
          "Procurar como a saída pode estar correta por meio de ação que não corrige a origem.",
          "Reconhecer o ajuste manual no relatório como correção de efeito, não de causa.",
          "Concluir que a implicação é falsa e que a validação exige conferência em cada estágio."
        ],
        "resultado": "Afirmação incorreta. Um ajuste manual pode fazer o painel fechar mesmo com erro de coleta ou de integração, de modo que a correção no consumo esconde a causa. Validar exige conferir entrada, transformação e saída.",
        "justificativa": "O gabarito rejeita a implicação porque o consumo é o estágio que apenas exibe o efeito. Erros de origem e de transformação podem ser mascarados por ajuste no relatório ou coincidir com o valor esperado; somente a conferência em cada estágio, com regra declarada, comprova que o percurso está correto.",
        "errosFrequentes": [
          "Concluir que o painel correto valida a base, ignorando ajustes manuais na saída.",
          "Confundir ausência de erro visível com ausência de erro no percurso."
        ],
        "variacao": "Se a afirmação fosse 'se a transformação está documentada, o pipeline está correto', o erro seria o mesmo tipo de salto, pois a documentação de um estágio não garante a qualidade da coleta, da integração nem do consumo."
      }
    ]
  },
  "m7-u2-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A diferença entre ETL e ELT não está no resultado entregue, mas na ordem entre transformar e carregar, e essa ordem muda custo, governança e capacidade exigida do destino. Questões de concurso cobram exatamente o critério de escolha em um cenário — dado sensível, volume grande, necessidade de reprocessar — e reprovam quem repete a generalização de que ETL é antigo e ELT é moderno.",
      "preRequisitos": [
        "Conhecer os estágios de extração, transformação, carga e consumo do pipeline.",
        "Diferenciar ambiente de origem e repositório analítico de destino."
      ],
      "objetivosObservaveis": [
        "diferenciar ETL e ELT pela posição da transformação em relação à carga;",
        "escolher entre ETL e ELT em cenários concretos, justificando por sensibilidade, volume, auditoria e capacidade do destino;",
        "reconhecer que ambos entregam dado tratado no consumo."
      ],
      "competencias": [
        "análise de requisitos de privacidade, volume e auditoria para decidir a ordem das operações;",
        "identificação de generalizações indevidas sobre a modernidade das abordagens."
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t2-s1 (Estágios do pipeline de dados) — ETL e ELT são dois arranjos dos estágios de transformação e carga;",
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — a ordem entre transformar e carregar afeta a tempestividade e a disciplina de governança."
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Itens sobre ETL e ELT integram o conteúdo programático de dados, tanto na forma conceitual, exigindo a ordem das operações, quanto em cenários que pedem a escolha justificada; o conteúdo explora a falsa equivalência entre abordagem moderna e qualidade do resultado."
      }
    },
    "niveis": {
      "iniciante": "ETL significa extrair, transformar e carregar: o dado é tratado fora do destino e entra pronto. ELT significa extrair, carregar e transformar: o dado bruto entra primeiro no destino e é transformado ali, com a capacidade de armazenamento e processamento do próprio destino. A diferença central é a posição da transformação em relação à carga, e nos dois arranjos o resultado consumido é dado tratado.",
      "intermediario": "A ordem tem consequências. No ETL há controle do que entra, o volume carregado é menor e o destino não recebe dado bruto, o que atende a exigência de sensibilidade, custo ou regra de negócio; em contrapartida, reprocessar com nova regra exige voltar à origem. No ELT o dado bruto fica disponível para reprocessar quantas vezes for preciso e evoluir regras sem extrair de novo, mas isso exige capacidade no destino e disciplina extra de governança, pois o dado sensível é guardado antes do tratamento.",
      "avancado": "A escolha depende de volume, capacidade do destino, exigência de auditoria, sensibilidade dos dados e custo de processamento. Não vale a generalização de que ETL é ultrapassado e ELT é moderno: cada arranjo atende a um perfil de requisitos. Quando o dado sensível não deve chegar bruto ao ambiente analítico compartilhado, a transformação precisa ocorrer antes da carga, o que caracteriza ETL; quando o objetivo é reprocessar e evoluir regras com liberdade, o carregamento prévio do bruto caracteriza ELT.",
      "especialista": "Em nível avançado, a decisão combina ordem das operações e governança do dado bruto. O ELT exige que o repositório destino trate o dado sensível com controle de acesso, retenção e mascaramento desde a chegada, porque o tratamento passa a ocorrer depois. O ETL centraliza o controle na etapa de transformação anterior à carga, mas paga em flexibilidade de reprocessamento. A escolha correta reconhece que os dois entregam dado tratado e explicita qual restrição prevalece — privacidade, capacidade, auditoria ou custo."
    },
    "comparacoes": [
      {
        "tema": "ETL versus ELT",
        "a": {
          "rotulo": "ETL",
          "texto": "Extrai, transforma e carrega: a transformação ocorre fora do destino, que recebe o dado já tratado. Controla o que entra e reduz o volume carregado, mas reprocessar exige nova extração."
        },
        "b": {
          "rotulo": "ELT",
          "texto": "Extrai, carrega e transforma: o dado bruto entra no destino e é tratado ali. Permite reprocessar e evoluir regras sem reextrair, mas exige capacidade no destino e governança do dado bruto."
        },
        "diferencaGabarito": "A diferença decisiva é a posição da transformação em relação à carga: no ETL ela antecede o carregamento; no ELT ela o sucede, dentro do destino."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Em ELT não há transformação, pois os dados são usados brutos.",
        "porqueErrada": "O ELT apenas inverte a ordem: a transformação acontece dentro do destino, depois da carga. O dado consumido é tratado igualmente; o que muda é o local e o momento do processamento, não a existência da transformação.",
        "versaoCorreta": "Incorreto: o ELT também transforma, mas dentro do destino e após a carga. O dado entregue ao consumo é tratado nos dois arranjos; a diferença está em onde e quando a transformação ocorre."
      },
      {
        "afirmacaoEquivocada": "ETL é uma abordagem ultrapassada e o ELT é sempre a escolha moderna e superior.",
        "porqueErrada": "A escolha depende de volume, capacidade do destino, exigência de auditoria, sensibilidade dos dados e custo de processamento. Quando o dado sensível não deve chegar bruto ao destino, transformar antes da carga é o requisito, o que caracteriza ETL, e não uma opção obsoleta.",
        "versaoCorreta": "Errado: nenhum dos arranjos é superior em absoluto. O ETL é adequado quando o destino não deve receber dado bruto e o ELT quando se quer reprocessar e evoluir regras; a decisão segue os requisitos do cenário."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "ETL: extrair, transformar e carregar, com a transformação fora do destino.",
        "ELT: extrair, carregar e transformar, com a transformação dentro do destino.",
        "Carga: momento em que o dado passa da origem para o repositório de destino.",
        "Governança do dado bruto: controle de acesso, retenção e mascaramento aplicado antes do tratamento."
      ],
      "regras": [
        "A diferença entre ETL e ELT é a ordem entre transformação e carga, e não a existência de transformação.",
        "Nos dois arranjos o resultado consumido é dado tratado e pronto para uso.",
        "A escolha depende de volume, capacidade do destino, auditoria, sensibilidade e custo, e não da modernidade da abordagem."
      ],
      "comparacoes": [
        "No ETL a transformação antecede a carga e o destino recebe dado tratado; no ELT ela sucede a carga e o dado bruto é tratado dentro do destino."
      ],
      "fluxos": [
        "Definir o requisito dominante (privacidade, volume, reprocessamento ou auditoria) → se o destino não deve receber bruto, transformar antes e carregar (ETL) → se é preciso reprocessar com liberdade, carregar bruto e transformar no destino (ELT) → garantir governança do dado bruto no destino no caso do ELT."
      ],
      "excecoes": [
        "Um mesmo ambiente pode combinar os arranjos: dado sensível tratado antes da carga por ETL e dados não sensíveis carregados brutos para transformação posterior por ELT, conforme o tipo de informação."
      ],
      "palavrasChave": [
        "ETL",
        "ELT",
        "extração",
        "transformação",
        "carga",
        "dado bruto",
        "governança"
      ],
      "checklist": [
        "O destino pode receber o dado bruto, por sensibilidade, custo ou regra?",
        "É necessário reprocessar com novas regras sem reextrair da origem?",
        "O destino tem capacidade de armazenamento e processamento para o bruto?",
        "A governança do dado bruto no destino está definida?",
        "A escolha foi justificada pelo requisito, e não pela suposta modernidade?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Descrever ETL e ELT em uma frase cada e apontar a diferença central entre os dois arranjos.",
        "dados": "Dois arranjos possíveis para levar o dado da origem ao consumo; a origem é um sistema transacional e o destino é um repositório analítico; a pergunta pede a ordem das operações em cada arranjo.",
        "conceitos": [
          "ETL",
          "ELT",
          "ordem entre transformação e carga"
        ],
        "estrategia": "Fixar a ordem das operações como critério de identificação: em cada sigla, seguir a sequência das letras e localizar onde a transformação aparece em relação à carga; a diferença central está nessa posição.",
        "execucao": [
          "ETL: extrair da fonte, transformar em etapa intermediária e só então carregar o dado pronto no destino.",
          "ELT: extrair da fonte, carregar o dado bruto no destino e transformá-lo dentro do próprio destino.",
          "Comparar os dois arranjos pela posição da transformação.",
          "Concluir que a diferença é transformar antes ou depois da carga."
        ],
        "resultado": "ETL extrai, transforma fora do destino e carrega pronto; ELT extrai, carrega bruto no destino e transforma ali dentro. A diferença central é a posição da transformação em relação à carga: antes no ETL, depois no ELT.",
        "justificativa": "O gabarito se apoia na ordem literal das operações: a sigla ETL coloca a transformação antes da carga e a sigla ELT a coloca depois. Nenhum dos arranjos dispensa a transformação; o que muda é o momento e o local em que ela acontece.",
        "errosFrequentes": [
          "Afirmar que o ELT não transforma, confundindo transformar depois da carga com não transformar.",
          "Dizer que a diferença é a ferramenta utilizada, quando a definição se baseia apenas na ordem das operações."
        ],
        "variacao": "Se a pergunta pedisse a ordem das operações em um arranjo que carrega e depois transforma, a resposta seria ELT, mantendo o mesmo critério de identificação pela posição da transformação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Dados sensíveis precisam ser tratados antes de qualquer armazenamento em ambiente analítico compartilhado. A escolha correta é ETL ou ELT?",
        "dados": "Dados pessoais sensíveis que não podem permanecer em ambiente analítico compartilhado sem tratamento; risco de que o dado bruto fique acessível a mais usuários; o destino é um repositório analítico usado por várias equipes; a origem é um sistema transacional.",
        "conceitos": [
          "ETL",
          "privacidade",
          "transformação antes da carga"
        ],
        "estrategia": "Identificar o requisito dominante: o destino não pode receber o dado bruto. Como no ETL a transformação precede a carga, é esse arranjo que impede a chegada do dado sensível sem tratamento ao ambiente compartilhado; a decisão é de governança e precede a comparação de capacidade técnica.",
        "execucao": [
          "Reconhecer o requisito: dado sensível não pode ser armazenado sem tratamento.",
          "Verificar em qual arranjo a transformação ocorre antes da carga.",
          "Concluir que o ETL trata o dado antes de ele entrar no destino compartilhado.",
          "Justificar a escolha pela privacidade e pela regra de negócio, e não pela capacidade do destino."
        ],
        "resultado": "ETL: a transformação, no caso o tratamento do dado sensível, ocorre antes da carga, de modo que o dado bruto não chega ao ambiente analítico compartilhado. O critério decisivo é a privacidade e a regra de negócio.",
        "justificativa": "O gabarito é o ETL porque ele posiciona a transformação antes do carregamento e impede que o dado sensível seja armazenado sem tratamento no destino compartilhado. No ELT o dado bruto entraria primeiro, exigindo governança sobre o bruto no próprio destino, o que contraria o requisito declarado.",
        "errosFrequentes": [
          "Escolher ELT por sua flexibilidade de reprocessamento, ignorando a exigência de não armazenar dado sensível sem tratamento.",
          "Supor que a governança no destino dispensa tratar o dado sensível antes da carga, contrariando a regra de negócio."
        ],
        "variacao": "Se os dados não fossem sensíveis e o requisito fosse reprocessar com novas regras sem reextrair da origem, a escolha passaria a ser o ELT, mantendo o mesmo critério de decisão pelo requisito dominante."
      },
      {
        "tipo": "erro",
        "problema": "Avaliar a afirmação: 'em ELT não há transformação, pois os dados são usados brutos'.",
        "dados": "Afirmação de um colega; o arranjo em questão carrega o dado bruto no destino e executa as rotinas de padronização e agregação dentro do próprio repositório; o consumo final recebe campos padronizados.",
        "conceitos": [
          "ELT",
          "transformação no destino",
          "dado tratado no consumo"
        ],
        "estrategia": "Distinguir a ordem da transformação de sua existência: verificar onde as rotinas de padronização e agregação são executadas e se o dado consumido é bruto ou tratado; a conclusão é que o ELT transforma dentro do destino, apenas depois da carga.",
        "execucao": [
          "Registrar a afirmação: o ELT não transformaria e usaria dado bruto.",
          "Localizar onde as rotinas de padronização e agregação são executadas: dentro do destino.",
          "Verificar o dado que chega ao consumo: campos padronizados, portanto tratado.",
          "Concluir que o ELT transforma, apenas em outro momento."
        ],
        "resultado": "Afirmação incorreta. O ELT transforma dentro do destino, depois da carga; o dado consumido é tratado, e o que muda em relação ao ETL é o local e o momento do processamento, não a existência da transformação.",
        "justificativa": "O gabarito rejeita a afirmação porque a definição do ELT inclui a transformação, ainda que posterior à carga. Como as rotinas de padronização e agregação rodam dentro do repositório e o consumo recebe campos tratados, tomar o dado bruto como produto final contradiz o próprio arranjo.",
        "errosFrequentes": [
          "Concluir que transformar depois da carga equivale a não transformar.",
          "Associar o dado bruto do ELT ao dado entregue ao consumo, quando o bruto é apenas a etapa inicial."
        ],
        "variacao": "Se a afirmação fosse 'no ETL o dado é carregado bruto e tratado no destino', o erro seria o mesmo tipo de troca: inverter a posição da transformação, atribuindo ao ETL o comportamento do ELT."
      }
    ]
  },
  "m7-u2-t3-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Escolher o tratamento de valores ausentes evita o erro mais comum da análise: transformar viés em número. A ausência não é fenômeno único, e a estratégia de exclusão, imputação ou indicador só se defende depois de classificar a causa que a produziu.",
      "preRequisitos": [
        "Noção de tabela com linhas, colunas e tipos de dado",
        "Diferença entre valor ausente, valor zero e valor inválido",
        "Leitura de medidas-resumo, como média, mediana e moda"
      ],
      "objetivosObservaveis": [
        "Classificar um valor ausente segundo sua forma e sua causa: aleatória, dependente de atributo observado ou dependente do próprio valor",
        "Escolher a estratégia de tratamento coerente com a causa, entre exclusão, imputação fixa, imputação por modelo e indicador de ausência",
        "Justificar por que substituir ausência por zero mascara a falta com aparência de medida"
      ],
      "competencias": [
        "Diagnóstico da causa da ausência antes de imputar",
        "Avaliação do efeito da imputação sobre a variabilidade e a conclusão",
        "Documentação da regra de tratamento e da taxa de ausência"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s1 (Acurácia, completude e validade) — a completude mede a ausência",
        "m7-u2-t3-s2 (Duplicidades, inconsistências e erros de tipo) — outra família de defeitos no mesmo registro",
        "m7-u2-t4-s1 (Agregação e agrupamento (e o erro da média de médias)) — a imputação fixa altera médias"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de qualidade de dados em editais; a cobrança recai na escolha justificada da estratégia e na crítica ao uso indiscriminado da média como imputação."
      }
    },
    "niveis": {
      "iniciante": "Valor ausente assume várias formas: nulo explícito, string vazia, marcador textual como 'N/A', zero usado no lugar da ausência e ausência lógica, em que o campo só se aplica sob certa condição — o nome do cônjuge só existe para quem é casado. Reconhecer essas formas é o primeiro passo, pois cada uma pede tratamento diferente.",
      "intermediario": "As estratégias têm custos distintos: excluir a linha perde informação e enviesa quando a ausência não é aleatória; excluir a coluna cabe quando o campo é quase todo vazio; imputar média, mediana ou moda preserva os registros, mas comprime a variabilidade; imputar por modelo é mais fiel havendo atributo preditor; e o indicador de ausência preserva a falta.",
      "avancado": "O critério decisivo é a causa da ausência. Se é aleatória, a imputação é relativamente segura; se depende de atributos observados, esses atributos devem entrar no cálculo; se depende do próprio valor omitido, como rendas altas que se omitem, qualquer imputação cega introduz viés silencioso, e a conduta honesta é declarar a limitação.",
      "especialista": "Em governança, documentam-se a taxa de ausência, a regra aplicada e o motivo, porque imputar reescreve a base e apaga a evidência da falta. A ausência também pode ser informação: profissão vazia para menor de idade sinaliza regra de negócio. Testar tratamentos alternativos e verificar se a conclusão muda integra o procedimento."
    },
    "comparacoes": [
      {
        "tema": "Imputação por valor fixo versus indicador de ausência",
        "a": {
          "rotulo": "Imputação fixa",
          "texto": "Preenche o vazio com média, mediana ou moda; mantém a quantidade de registros, mas reduz a variabilidade e atenua diferenças reais."
        },
        "b": {
          "rotulo": "Indicador de ausência",
          "texto": "Cria uma coluna que registra que o valor faltou, preservando o fato e permitindo tratá-lo como variável própria na análise."
        },
        "diferencaGabarito": "A imputação fixa apaga a falta em troca de completude aparente; o indicador preserva a falta e deixa a imputação para quem interpreta o resultado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Como a média é a medida central do campo, todo valor ausente deve ser preenchido por ela.'",
        "porqueErrada": "A média é opção entre várias e só se defende quando a ausência não é seletiva e ela representa bem o campo; com valores extremos, a mediana é mais robusta, e variáveis categóricas pedem moda.",
        "versaoCorreta": "Errado. Imputar a média é apenas uma estratégia e depende da causa e da distribuição. Campos com valores extremos pedem mediana; variáveis categóricas, moda; ausência informativa, indicador próprio. Aplicar a média sempre converte viés em número arredondado."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Substituir ausência por zero é a forma mais neutra de completar a base, pois não altera a média.'",
        "porqueErrada": "Zero é valor legítimo em muitas variáveis; tratá-lo como sinônimo de não medido confunde ausência com medida e distorce somas e médias.",
        "versaoCorreta": "Errado. Zero é um valor medido em contagens e saldos; usá-lo para representar falta inventa observação e rebaixa a média artificialmente. O tratamento correto é imputação declarada ou indicador de ausência, nunca o zero automático."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "valor ausente",
        "ausência lógica",
        "imputação",
        "indicador de ausência",
        "viés de não-resposta"
      ],
      "regras": [
        "classificar a causa da ausência antes de imputar",
        "documentar taxa de ausência e regra de tratamento",
        "zero substituto nunca representa falta medida"
      ],
      "comparacoes": [
        "exclusão versus imputação: perda de informação versus completude aparente"
      ],
      "fluxos": [
        "identificar a forma da ausência, classificar a causa, escolher a estratégia, documentar e testar a robustez"
      ],
      "excecoes": [
        "ausência lógica em campo condicional é regra de negócio, e não falha",
        "ausência seletiva invalida imputação cega mesmo com poucos registros"
      ],
      "palavrasChave": [
        "ausência",
        "imputação",
        "mediana",
        "viés",
        "indicador"
      ],
      "checklist": [
        "A ausência está classificada por forma e causa?",
        "A estratégia escolhida é coerente com a causa?",
        "A taxa de ausência foi registrada?",
        "A conclusão muda se o tratamento alternativo for usado?",
        "O zero foi evitado como preenchimento automático?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma base de recursos humanos reúne 200 salários e tem 10 valores ausentes, sem padrão entre os setores. Qual tratamento é defensável para a média salarial?",
        "dados": "200 registros; 10 ausentes, ou 5% da base; ausência sem relação com setor, cargo ou tempo de serviço; os 190 valores presentes servem de referência para o campo.",
        "conceitos": [
          "ausência aleatória",
          "imputação por mediana",
          "taxa de ausência"
        ],
        "estrategia": "Verificar se a ausência segue padrão; como não segue, comparar duas condutas viáveis, imputar pela mediana ou excluir as linhas, e registrar a perda de informação de cada uma.",
        "execucao": [
          "1) Conferir se a ausência se concentra em algum setor ou cargo.",
          "2) Calcular a mediana dos 190 valores presentes.",
          "3) Imputar os 10 ausentes pela mediana e registrar a taxa de 5%.",
          "4) Refazer a média com exclusão e comparar o resultado."
        ],
        "resultado": "Com ausência aleatória em 5% da base, a imputação pela mediana mantém os 200 registros, e a exclusão perde 10 casos; nos dois caminhos, a média final deve ser registrada junto com a taxa de ausência.",
        "justificativa": "O gabarito aceita as duas condutas porque a ausência não segue padrão: a mediana é mais robusta que a média para imputar salários, e a exclusão de 5% tem impacto limitado. A exigência é documentar a regra e conferir se a conclusão se mantém sob o outro tratamento.",
        "errosFrequentes": [
          "Assumir a média como imputação padrão, sem olhar a distribuição.",
          "Excluir as linhas sem registrar quantos casos se perderam."
        ],
        "variacao": "Se os 10 ausentes se concentrassem no setor de maior remuneração, a ausência deixaria de ser aleatória e a mediana global seria trocada por imputação por grupo ou por declaração da limitação."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma pesquisa de satisfação recebeu 80% dos questionários, preenchidos sobretudo por insatisfeitos, e a secretaria pede que se impute os 20% restantes. Qual é a conduta correta?",
        "dados": "800 de 1.000 questionários respondidos, ou 80%, sobretudo por insatisfeitos; 200 sem resposta, sem motivo informado; a variável de interesse é o nível de satisfação, de 1 a 5.",
        "conceitos": [
          "ausência seletiva",
          "viés de não-resposta",
          "limitação declarada"
        ],
        "estrategia": "Reconhecer que a não-resposta depende do próprio valor investigado, pois quem responde tende a ser insatisfeito, e recusar a imputação, que mascararia a seletividade em vez de corrigi-la.",
        "execucao": [
          "1) Comparar o perfil dos respondentes com o dos ausentes.",
          "2) Constatar que a resposta se concentra nos insatisfeitos.",
          "3) Recusar a imputação e apurar o indicador só sobre os respondentes.",
          "4) Declarar o viés de não-resposta e sugerir nova coleta ou ponderação."
        ],
        "resultado": "A imputação não é a conduta correta: preencher os 20% ausentes esconderia que os insatisfeitos responderam mais. O aceitável é analisar os respondentes e declarar o viés de não-resposta, indicando que a satisfação real tende a ser menor que a medida.",
        "justificativa": "O gabarito recusa a imputação porque a ausência depende do valor omitido, caso em que o preenchimento cego introduz viés. Como a amostra responde de forma seletiva, a estimativa sobre os respondentes é enviesada por construção; a resposta técnica é declarar a limitação.",
        "errosFrequentes": [
          "Imputar a média de satisfação aos ausentes e apresentar o resultado como representativo.",
          "Tratar a não-resposta como falha de digitação, e não como comportamento."
        ],
        "variacao": "Se a pesquisa tivesse respondentes equilibrados entre satisfeitos e insatisfeitos, a não-resposta deixaria de ser seletiva e a imputação por moda poderia ser admitida com registro."
      },
      {
        "tipo": "erro",
        "problema": "Um analista afirma: 'Ausência é sempre falha de medição; como a média é a medida central, basta preencher todo campo vazio com ela.' A afirmação serve como regra geral de limpeza?",
        "dados": "Três campos: idade, 2% ausente; renda, 18% ausente, com omissão maior nas faixas altas; estado civil, 12% ausente, quase todos menores de idade, para quem o campo não se aplica.",
        "conceitos": [
          "causa da ausência",
          "ausência lógica",
          "imputação condicionada"
        ],
        "estrategia": "Separar as três origens: idade, ausência aleatória; renda, ausência dependente do próprio valor; estado civil, ausência lógica por regra de negócio. A regra única pedida não sobrevive a essa separação.",
        "execucao": [
          "1) Classificar a causa de cada campo: aleatória, seletiva e lógica.",
          "2) Verificar que imputar renda pela média subestima as faixas altas que omitem.",
          "3) Verificar que estado civil vazio para menor é regra, não falha.",
          "4) Concluir que cada campo pede tratamento próprio."
        ],
        "resultado": "A afirmação não serve como regra geral. Imputar renda pela média esconde a omissão das faixas altas; preencher estado civil de menores inventa dado; apenas a idade admitiria imputação simples, com a taxa registrada.",
        "justificativa": "A leitura ingênua trata toda ausência como ruído de medição, mas os três campos têm causas distintas: uma aleatória, uma dependente do valor omitido e uma lógica. Preencher os três do mesmo modo contraria a exigência de classificar a causa antes de imputar.",
        "errosFrequentes": [
          "Aplicar a mesma regra de imputação a todos os campos.",
          "Preencher campo condicional sem respeitar a regra de negócio."
        ],
        "variacao": "Se o campo de renda passasse a ter declaração obrigatória e verificada, a omissão seletiva desapareceria e a mediana voltaria a ser defensável para os poucos casos residuais."
      }
    ]
  },
  "m7-u2-t3-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Duplicidade, inconsistência e erro de tipo são defeitos silenciosos: a base parece completa, mas soma linhas repetidas, ordena códigos pela primeira letra e compara textos como números. Tratá-los com regra explícita evita efeito colateral em relatórios e indicadores.",
      "preRequisitos": [
        "Noção de chave de identidade, como CPF, matrícula ou protocolo",
        "Diferença entre armazenamento como texto e tipo numérico ou de data",
        "Leitura de regras de consistência entre campos de um registro"
      ],
      "objetivosObservaveis": [
        "Distinguir duplicidade de chave exata, de chave normalizada e de similaridade aproximada",
        "Identificar inconsistências internas ao registro e entre sistemas, propondo regra de reconciliação",
        "Explicar por que erros de tipo permanecem silenciosos e como a conversão com relatório de falhas os expõe"
      ],
      "competencias": [
        "Definição de chave e de regra de prevalência antes de fundir registros",
        "Leitura crítica de ordenações lexicográficas e de somas que ignoram linhas não numéricas",
        "Documentação das transformações e das perdas aceitas"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u2-t1-s2 (Consistência, unicidade e tempestividade) — a unicidade é a dimensão violada pela duplicidade",
        "m7-u2-t3-s1 (Valores ausentes e estratégias de tratamento) — defeito vizinho no mesmo passo de limpeza",
        "m7-u2-t4-s2 (Deduplicação: chaves de identidade, fusão e riscos) — aprofunda a chave e a fusão iniciadas aqui"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de qualidade de dados em editais; a cobrança pede detectar duplicidade com chave normalizada, apontar inconsistência e explicar por que texto não soma como número."
      }
    },
    "niveis": {
      "iniciante": "Duplicidades nascem de reenvio de formulário, de carga repetida e de cadastro paralelo em duas unidades. Detectá-las tem três graus: chave exata, quando o identificador coincide; chave normalizada, quando se removem espaços, caixa e acentos; e similaridade aproximada, com limiar declarado. Inconsistências violam regras internas ou entre sistemas; erros de tipo guardam o valor no formato errado.",
      "intermediario": "O tratamento de duplicidade exige escolha prévia: manter a versão mais completa ou recente, fundir campos complementares ou conservar ambas com marcador e regra de prevalência. A inconsistência interna surge quando a data final antecede a inicial ou a soma difere do total; entre sistemas, quando a mesma pessoa aparece com nomes divergentes ou a mesma medida em unidades incompatíveis.",
      "avancado": "Erros de tipo enganam porque não geram aviso: a soma ignora linhas não numéricas, a ordenação lexicográfica coloca '10' antes de '9' e o filtro não encontra o valor que existe. A conversão explícita com relatório de falhas torna o erro visível. Não há autoridade para inventar o valor que fecha a conta: sem reconciliação possível, o caso escala para o dono do dado.",
      "especialista": "Limpeza madura separa o que se corrige do que se registra. Padronizar caixa e espaçamento, adotar datas no formato ISO 8601, unificar unidades no Sistema Internacional e registrar telefones com código do país reduzem a duplicidade na origem. Cada transformação deixa trilha: qual chave foi usada, qual regra de prevalência venceu e quantos registros foram fundidos ou descartados."
    },
    "comparacoes": [
      {
        "tema": "Duplicidade exata versus similaridade aproximada",
        "a": {
          "rotulo": "Chave exata",
          "texto": "Compara o identificador sem transformação: mesmo CPF ou mesmo código. É objetiva, mas só captura o que coincide caractere a caractere."
        },
        "b": {
          "rotulo": "Similaridade aproximada",
          "texto": "Compara registros parecidos por medida de distância, com limiar declarado; alcança variações de digitação, ao custo de falsos positivos."
        },
        "diferencaGabarito": "A chave exata é determinística; a similaridade exige calibrar o limiar e revisar à mão, pois aproxima demais e pode juntar pessoas distintas."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Para eliminar duplicidades, basta remover as linhas com CPF repetido e manter a primeira ocorrida.'",
        "porqueErrada": "A primeira linha pode ser a menos completa ou a mais antiga, e a exclusão simples descarta dado complementar, como endereço atualizado ou telefone novo da linha posterior.",
        "versaoCorreta": "Errado. Deduplicar exige definir a chave, escolher a regra de prevalência — mais recente, mais completa ou fonte autoritativa — e decidir entre fundir campos ou manter ambas com marcador. Remover pela ordem de chegada descarta dado sem critério e sem registro."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Valores numéricos gravados como texto somam normalmente, desde que não haja vírgula.'",
        "porqueErrada": "O tipo de armazenamento decide a operação: ao somar uma coluna textual, a ferramenta pode ignorar as linhas não numéricas e devolver um total incompleto sem avisar.",
        "versaoCorreta": "Errado. Soma exige tipo numérico; sobre texto, a operação pode descartar linhas silenciosamente ou concatená-las. A conduta correta é converter com regra explícita, reportar as falhas e só então totalizar."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "duplicidade",
        "chave normalizada",
        "similaridade aproximada",
        "regra de prevalência",
        "erro de tipo"
      ],
      "regras": [
        "definir chave e regra de prevalência antes de fundir registros",
        "converter tipo com relatório de falhas, nunca por coerção silenciosa",
        "não inventar valor para fechar inconsistência sem autoridade"
      ],
      "comparacoes": [
        "chave exata versus similaridade aproximada: coincidência determinística versus limiar calibrado"
      ],
      "fluxos": [
        "detectar duplicidade por chave exata, normalizada ou similaridade, escolher a regra de prevalência, fundir ou marcar e registrar a transformação"
      ],
      "excecoes": [
        "inconsistência entre sistemas pode exigir escalonamento ao dono do dado",
        "conversão de data com formato variado pede interpretação por padrão declarado"
      ],
      "palavrasChave": [
        "duplicidade",
        "deduplicação",
        "chave",
        "normalização",
        "ISO 8601"
      ],
      "checklist": [
        "A chave de identidade foi definida antes da comparação?",
        "A regra de prevalência está explícita?",
        "O tipo das colunas numéricas e de data foi conferido?",
        "As linhas que não convertem foram listadas?",
        "A fusão ou a exclusão ficou registrada para auditoria?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma planilha de despesas traz a coluna de valor com as entradas '1.234,56', 'R$ 200', '300' e 'abc'. Que regra de conversão produz um número confiável sem esconder erro?",
        "dados": "Quatro entradas: '1.234,56', com ponto como milhar e vírgula como decimal; 'R$ 200', com símbolo de moeda; '300', número puro; e 'abc', texto sem valor. A convenção de origem é ponto para milhar e vírgula para decimal.",
        "conceitos": [
          "erro de tipo",
          "conversão explícita",
          "relatório de falhas"
        ],
        "estrategia": "Declarar a convenção numérica antes de converter, limpar símbolos e separadores de forma controlada e separar as linhas que não convertem, para que nenhuma entrada vire zero nem desapareça em silêncio.",
        "execucao": [
          "1) Declarar que ponto representa milhar e vírgula representa decimal.",
          "2) Remover o símbolo 'R$' e os espaços.",
          "3) Converter as três entradas numéricas pela convenção.",
          "4) Isolar 'abc' em uma lista de falhas."
        ],
        "resultado": "As entradas convertem para 1234,56, 200 e 300; 'abc' não vira zero nem some, mas entra em uma lista de falhas. A coluna passa a ter três valores válidos e uma pendência explícita, em vez de quatro células de aparência numérica.",
        "justificativa": "O gabarito converte o que a convenção explica e reporta o que ela não explica. Tratar milhar e decimal conforme regra declarada e listar a falha preserva a integridade da coluna: a soma não incluirá um zero fabricado, e a origem poderá corrigir o valor textual.",
        "errosFrequentes": [
          "Deixar 'abc' virar zero e somar a coluna como se tudo fosse número.",
          "Trocar a ordem de grandeza ao aplicar a convenção de ponto decimal a dados que usam vírgula."
        ],
        "variacao": "Se a origem usasse ponto como separador decimal, a regra declarada inverteria o papel dos separadores, e '1.234' deixaria de valer mil duzentos e trinta e quatro para representar pouco mais de uma unidade."
      },
      {
        "tipo": "aplicacao",
        "problema": "Em um relatório ordenado por uma coluna de texto, '9' e '10' aparecem com 10 antes de 9, e a chefia acredita que os dados estão errados. Qual é a causa e a correção?",
        "dados": "Coluna de quantidade como texto, com valores '9', '10', '100' e '9'; a ordenação crescente devolve '10', '100', '9', '9'; o total calculado sobre a coluna retorna 128.",
        "conceitos": [
          "ordenação lexicográfica",
          "tipo numérico",
          "erro de tipo silencioso"
        ],
        "estrategia": "Reconhecer que a coluna é texto e que a comparação ocorre caractere a caractere; converter para tipo numérico e repetir a ordenação, conferindo também se o total coincide após a conversão.",
        "execucao": [
          "1) Verificar o tipo declarado da coluna: texto, não número.",
          "2) Explicar que '1' vem antes de '9' na comparação de caracteres.",
          "3) Converter a coluna para inteiro com relatório de falhas.",
          "4) Reordenar e somar de novo, comparando com o total anterior."
        ],
        "resultado": "Após a conversão, a ordem passa a 9, 9, 10 e 100, e o total soma corretamente os quatro valores. A causa não era erro de coleta, mas erro de tipo: a coluna sempre foi texto, e o sistema apenas ordenou o que foi digitado, sem avisar.",
        "justificativa": "O gabarito identifica o erro de tipo como origem: em texto, a comparação é lexicográfica e '10' precede '9' porque o caractere '1' é menor que '9'. Converter para inteiro restaura a ordem e a soma; o caso mostra por que o defeito passa despercebido, sem aviso da ferramenta.",
        "errosFrequentes": [
          "Concluir que os dados foram digitados errados, quando o problema é o tipo da coluna.",
          "Corrigir a ordem à mão sem converter o tipo, deixando o defeito para a próxima carga."
        ],
        "variacao": "Se a coluna tivesse sido criada como inteiro desde a origem, a ordenação e a soma sairiam corretas na primeira execução, sem conversão corretiva a cada relatório."
      },
      {
        "tipo": "erro",
        "problema": "Um servidor afirma: 'Basta remover as linhas com CPF repetido mantendo a primeira; assim a base fica sem duplicidade.' A conduta resolve o problema sem perda de informação?",
        "dados": "Duas linhas com o mesmo CPF: a de 2019 traz nome e matrícula, mas sem telefone nem endereço; a de 2024 traz telefone e endereço atualizados e o mesmo nome. Não há campo que indique a fonte autoritativa.",
        "conceitos": [
          "chave de identidade",
          "regra de prevalência",
          "fusão de registros"
        ],
        "estrategia": "Comparar as duas linhas campo a campo, identificar o que cada uma traz de exclusivo e reconhecer que manter a primeira descarta a atualização mais recente; decidir entre fundir e conservar ambas com marcador.",
        "execucao": [
          "1) Definir o CPF como chave de identidade.",
          "2) Listar os campos presentes em cada linha.",
          "3) Constatar que a linha antiga é menos completa que a recente.",
          "4) Fundir os campos complementares e registrar a regra de prevalência."
        ],
        "resultado": "A remoção pela ordem de chegada perde o telefone e o endereço atualizados da linha de 2024. O correto é fundir os campos complementares, adotar a linha mais recente como prevalente nos conflitos e registrar a fusão, mantendo a base íntegra e auditável.",
        "justificativa": "O gabarito recusa a exclusão cega porque a chave repetida não indica qual linha é melhor: aqui a mais antiga é a menos completa, e remover a posterior descartaria dado válido. Definir prevalência e fundir preserva a informação que a exclusão pela ordem de chegada jogaria fora.",
        "errosFrequentes": [
          "Assumir que a primeira linha é sempre a mais confiável.",
          "Fundir sem registrar a regra, deixando a auditoria sem saber qual valor venceu."
        ],
        "variacao": "Se a segunda linha tivesse endereço divergente e não houvesse fonte autoritativa definida, a decisão deixaria de ser automática e escalaria para o dono do dado, em vez de escolher um endereço por conveniência."
      }
    ]
  },
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
  },
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
  },
  "m7-u3-t1-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Separar anonimização de pseudonimização decide obrigações de proteção de dados: o dado efetivamente anônimo deixa de ser pessoal, enquanto o pseudonimizado continua sendo dado pessoal e mantém as salvaguardas. O critério único é a existência de chave que permita reatribuir a identidade.",
      "preRequisitos": [
        "Noção de dado pessoal e de identificador direto, como nome e CPF",
        "Diferença entre guardar um identificador e guardar a chave que o reconecta ao titular",
        "Conceito de finalidade do tratamento e de controle de acesso"
      ],
      "objetivosObservaveis": [
        "Classificar uma transformação como anonimização ou pseudonimização pela existência de chave de reatribuição",
        "Justificar por que o dado pseudonimizado permanece sujeito às salvaguardas de dado pessoal",
        "Relacionar a escolha entre anonimizar e pseudonimizar à finalidade do uso"
      ],
      "competencias": [
        "Reconhecimento de pseudonimização disfarçada de anonimização",
        "Escolha de técnica de descaracterização coerente com a finalidade",
        "Argumentação sobre risco residual e necessidade de salvaguarda"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u3-t1-s2 (Riscos de reidentificação) — aprofunda por que a anonimização é medida de risco, e não garantia",
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — a pseudonimização apoia-se em acesso restrito à chave",
        "m7-u3-t2-s3 (Proteção de dados e a LGPD) — a distinção define se o dado permanece pessoal"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de proteção e governança de dados em editais; a cobrança explora a fronteira entre as duas técnicas e o erro de tratar a remoção de nome ou CPF como anonimização."
      }
    },
    "niveis": {
      "iniciante": "Anonimizar é transformar o conjunto de modo que ninguém reconstrua a identidade do titular: removem-se os identificadores diretos e reduz-se o poder discriminante do que resta, por supressão, generalização em faixas ou agregação. Pseudonimizar é substituir o identificador direto por um código e guardar à parte a tabela que reconecta o código ao titular.",
      "intermediario": "O que separa as duas técnicas é a chave. Substituir o CPF por um código e manter a tabela de reatribuição em cofre protegido é pseudonimização: o dado continua pessoal, porque a identificação permanece possível para quem detém a chave. Só há anonimização quando a chave não existe ou não permite voltar ao titular.",
      "avancado": "As duas técnicas servem a finalidades distintas. Pseudonimização é medida de segurança: reduz a exposição no ambiente de análise, permite trabalhar sem a identificação direta à vista e mantém trilha de auditoria, ao custo de conservar o vínculo. Anonimização é descaracterização, indicada para publicar ou pesquisar dados agregados, em que o vínculo não é necessário.",
      "especialista": "A avaliação madura reconhece a pseudonimização disfarçada: manter quase-identificadores granulares e remover apenas nome e documento não descaracteriza, apenas disfarça. A escolha depende de quem detém a chave e de quantos a acessam; quanto mais restrito o acesso e mais forte a separação entre base e tabela, menor o risco."
    },
    "comparacoes": [
      {
        "tema": "Anonimização versus pseudonimização: a chave decide",
        "a": {
          "rotulo": "Anonimização",
          "texto": "Elimina a possibilidade de reatribuir a identidade: sem chave e com atributos generalizados, o conjunto deixa de ser dado pessoal."
        },
        "b": {
          "rotulo": "Pseudonimização",
          "texto": "Troca o identificador direto por um código e guarda à parte a chave de reatribuição, protegida; o dado continua sendo pessoal."
        },
        "diferencaGabarito": "O critério é a existência de chave de reatribuição: sem chave que volte ao titular há anonimização; com chave guardada há pseudonimização, ainda que o identificador direto tenha saído da base."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Substituir o CPF por um código e guardar a tabela de correspondência em cofre é anonimização, pois o identificador saiu da base.'",
        "porqueErrada": "O identificador direto saiu da base de análise, mas a chave guardada permite reatribuir a identidade; o vínculo com o titular permanece, e por isso a operação é pseudonimização.",
        "versaoCorreta": "Errado. Guardar a chave de reatribuição é justamente o que caracteriza a pseudonimização: o dado continua pessoal e mantém as salvaguardas de acesso, finalidade e registro. Anonimização exigiria que não houvesse chave que permitisse voltar ao titular."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Pseudonimização descaracteriza o dado, de modo que ele deixa de ser dado pessoal.'",
        "porqueErrada": "Enquanto existir chave de reatribuição, a identificação permanece possível para quem a detém, e o dado segue sendo pessoal; a pseudonimização é medida de segurança, não de descaracterização.",
        "versaoCorreta": "Errado. Pseudonimizar remove o identificador direto à vista, mas não rompe o vínculo: o dado permanece pessoal e sujeito às mesmas obrigações. Quem descaracteriza é a anonimização, ao eliminar a possibilidade de reatribuir a identidade."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "anonimização",
        "pseudonimização",
        "chave de reatribuição",
        "identificador direto",
        "quase-identificador"
      ],
      "regras": [
        "a existência de chave de reatribuição separa pseudonimização de anonimização",
        "dado pseudonimizado continua sendo dado pessoal",
        "a finalidade do uso define qual técnica adotar"
      ],
      "comparacoes": [
        "anonimização versus pseudonimização: ausência de chave versus chave guardada"
      ],
      "fluxos": [
        "identificar identificadores diretos, avaliar a finalidade, escolher entre descaracterizar e pseudonimizar, documentar técnica e controle da chave"
      ],
      "excecoes": [
        "dado sem chave guardada, mas com atributos granulares, ainda pode ser reidentificável",
        "pseudonimização com chave acessível a muitos perde a proteção que promete"
      ],
      "palavrasChave": [
        "anonimização",
        "pseudonimização",
        "chave",
        "generalização",
        "dado pessoal"
      ],
      "checklist": [
        "Existe chave que reconecte o código ao titular?",
        "A tabela de reatribuição está separada e sob acesso restrito?",
        "A técnica atende à finalidade declarada do tratamento?",
        "Os quase-identificadores foram generalizados?",
        "A operação e o controle da chave ficaram documentados?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma base de saúde substitui o CPF de cada paciente por um código e guarda a tabela que liga código e CPF em cofre acessível ao encarregado. Trata-se de anonimização ou de pseudonimização?",
        "dados": "Base clínica com 5.000 registros; o CPF foi trocado por um código; a tabela que reconecta código e CPF está em cofre separado, com acesso restrito ao encarregado; os campos clínicos permanecem na base de análise.",
        "conceitos": [
          "identificador direto",
          "chave de reatribuição",
          "dado pessoal"
        ],
        "estrategia": "Localizar o critério decisivo, a existência de chave que reconecta o código ao titular, e verificar se ela existe e está acessível; se existe, a identificação permanece possível e a operação não é anonimização.",
        "execucao": [
          "1) Identificar o identificador direto substituído: o CPF.",
          "2) Verificar se existe e onde está guardada a tabela de reatribuição.",
          "3) Confirmar que a chave permite voltar ao titular.",
          "4) Classificar a operação e listar as salvaguardas aplicáveis."
        ],
        "resultado": "Trata-se de pseudonimização. O identificador direto saiu da base de análise, mas a chave em cofre torna a reatribuição possível, e o conjunto permanece dado pessoal. A operação reduz a exposição cotidiana, sem dispensar as obrigações de acesso, finalidade e registro.",
        "justificativa": "O gabarito é pseudonimização porque existe chave que reconecta o código ao CPF: o critério não é a presença do nome na linha, e sim a possibilidade de reatribuir a identidade. Como ela persiste, o dado segue pessoal e exige as mesmas salvaguardas.",
        "errosFrequentes": [
          "Chamar de anonimização só porque o CPF não aparece na base de análise.",
          "Concluir que o dado deixou de ser pessoal e dispensar o controle de acesso à chave."
        ],
        "variacao": "Se o código fosse gerado por embaralhamento irreversível, sem tabela de correspondência em poder do controlador, a base deixaria de permitir a reatribuição e a operação se aproximaria da anonimização."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma prefeitura quer publicar, em portal de transparência, os gastos por servidor. Que transformações aproximam a publicação de uma anonimização, preservando a finalidade de transparência?",
        "dados": "Base com nome, matrícula, cargo, lotação, data de pagamento e valor pago. O objetivo é permitir o controle social dos gastos; não há necessidade de identificar cada servidor individualmente na publicação.",
        "conceitos": [
          "supressão de identificadores",
          "generalização",
          "agregação"
        ],
        "estrategia": "Suprimir identificadores diretos, reduzir a granularidade dos quase-identificadores e preferir publicar por agregados, de modo que nenhum recorte revele uma pessoa; se a finalidade admite o agregado, ele é mais seguro que a linha individual.",
        "execucao": [
          "1) Suprimir nome, matrícula e demais identificadores diretos.",
          "2) Reduzir a granularidade: cargo genérico, faixa salarial e mês no lugar do dia exato.",
          "3) Suprimir combinações raras que apontem para uma pessoa.",
          "4) Publicar por cargo, unidade e mês, registrando a decisão tomada."
        ],
        "resultado": "A publicação por agregados, com identificadores suprimidos e faixas em vez de valores exatos, atende à transparência sem expor indivíduos. O portal mostra o gasto por cargo, unidade e mês, e não a linha de cada servidor, reduzindo a granularidade que permitiria reidentificar quem recebeu quanto.",
        "justificativa": "O gabarito combina supressão, generalização e agregação porque a finalidade, o controle social do gasto, não exige identificar o indivíduo. Suprimir apenas o nome manteria a reidentificação por combinação; ao publicar por grupos, a mesma finalidade é atendida com risco menor.",
        "errosFrequentes": [
          "Publicar a linha individual removendo só o nome, deixando cargo e lotação exatos como pistas.",
          "Recusar a transparência por completo, em vez de ajustar a granularidade."
        ],
        "variacao": "Se a lei local exigisse a identificação nominal do servidor, a publicação deixaria de poder ser anônima; caberia tratar o dado como pessoal, com base legal e salvaguardas próprias."
      },
      {
        "tipo": "erro",
        "problema": "Um candidato afirma: 'Removidos o nome e o CPF, os dados já estão anonimizados e podem ser publicados livremente.' A afirmação é correta?",
        "dados": "Base de atendimentos com nome e CPF suprimidos, mas mantendo idade exata, CEP, cargo e data do atendimento. Há cargos raros no município, e o número de registros em alguns recortes é pequeno.",
        "conceitos": [
          "quase-identificador",
          "reidentificação por combinação",
          "redução de granularidade"
        ],
        "estrategia": "Testar se a combinação dos atributos remanescentes restringe o espaço até uma pessoa; idade exata mais CEP mais cargo raro pode apontar para um único indivíduo, o que mostra que a remoção dos identificadores diretos não conclui a anonimização.",
        "execucao": [
          "1) Listar os atributos remanescentes e o poder de recorte de cada um.",
          "2) Combinar idade, CEP e cargo e contar as pessoas do recorte.",
          "3) Constatar que cargos raros reduzem o grupo a poucos indivíduos.",
          "4) Concluir que faltam generalização e supressão de combinações raras."
        ],
        "resultado": "A afirmação está errada. Remover identificadores diretos é o primeiro passo, não a conclusão: a combinação de idade exata, CEP e cargo raro pode recortar a base até uma pessoa. Sem reduzir a granularidade e suprimir combinações raras, o dado permanece reidentificável e segue sendo pessoal.",
        "justificativa": "A leitura ingênua iguala remoção de nome e anonimização, mas a reidentificação costuma ocorrer pela combinação de atributos que, isolados, nada revelam. Como idade, CEP e cargo raro reduzem muito o grupo compatível, o gabarito exige generalização e supressão antes de tratar o conjunto como anônimo.",
        "errosFrequentes": [
          "Acreditar que suprimir nome e CPF encerra a proteção e liberar a publicação.",
          "Ignorar que atributos comuns, em combinação, funcionam como identificador."
        ],
        "variacao": "Se a idade fosse publicada em faixas de dez anos, o CEP reduzido ao município e os cargos agrupados por categoria, os recortes ficariam populosos e a distância da anonimização diminuiria de forma sensível."
      }
    ]
  },
  "m7-u3-t1-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Toda base supostamente anônima carrega risco: bastam quase-identificadores combinados com outra base disponível para apontar um indivíduo. Compreender o ataque de recorte e as mitigações — agregar, suprimir atributos raros e adotar grupo mínimo — separa a publicação responsável do vazamento por descuido.",
      "preRequisitos": [
        "Noção de atributo que, isolado, não identifica, mas combina com outros",
        "Ideia de cruzamento de bases distintas que descrevem as mesmas pessoas",
        "Conceito de dado agregado em contraste com microdado de linha individual"
      ],
      "objetivosObservaveis": [
        "Identificar quase-identificadores em uma tabela e explicar por que a combinação restringe o grupo até uma pessoa",
        "Descrever o ataque de recorte e avaliar quando uma publicação se torna auto-reveladora",
        "Aplicar mitigações de agregação, supressão de atributos raros e grupo mínimo antes de publicar"
      ],
      "competencias": [
        "Simulação de ataque de reidentificação antes da publicação",
        "Julgamento de risco conforme a granularidade publicada e o contexto de bases disponíveis",
        "Escolha fundamentada entre publicar microdados e publicar agregados"
      ],
      "dificuldade": "avancado",
      "relacoes": [
        "m7-u3-t1-s1 (Anonimização x pseudonimização) — define o vocabulário cuja fragilidade este subtópico examina",
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — a redução de granularidade é uma forma de minimização",
        "m7-u3-t2-s3 (Proteção de dados e a LGPD) — o risco de reidentificação orienta tratar o dado como pessoal"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Relevância classificada como média, por estimativa pedagógica de adequação do tema ao conteúdo de proteção de dados em editais; a cobrança reconhece quase-identificadores, associa o recorte de grupo pequeno à reidentificação e pede a mitigação adequada."
      }
    },
    "niveis": {
      "iniciante": "Reidentificação é voltar a identificar pessoas em bases supostamente anônimas. O instrumento são os quase-identificadores: atributos que, sozinhos, não apontam ninguém, mas que em conjunto estreitam o grupo até uma pessoa, como idade, sexo, CEP, cargo e lotação. Retirar o nome não basta quando esses atributos permanecem em granularidade fina.",
      "intermediario": "O ataque clássico é o recorte, também chamado de mosaicismo: filtra-se a base por combinações de quase-identificadores e, quando o grupo restante tem uma ou duas pessoas, a identidade sai por dedução. Publicações de alto risco combinam granularidade individual, cruzamento com bases livres, atributos raros e sequências finas de tempo ou de localização.",
      "avancado": "As mitigações operam sobre a granularidade e a raridade. Agregar transforma idade em faixa etária e CEP em região; suprimir remove atributos que poucos possuem; e o grupo mínimo exige que cada recorte reúna ao menos k indivíduos. A diversidade pede variação dos atributos sensíveis dentro do recorte. Testar a reidentificação antes de publicar torna-se procedimento.",
      "especialista": "O risco não é propriedade fixa da base, mas função do contexto: o que era seguro ontem pode deixar de ser quando uma nova base se torna pública e passa a permitir cruzamento. Por isso a avaliação é contemporânea e periódica, com a decisão registrada. Em governança, o padrão é preferir o agregado ao microdado e tratar cada publicação como ato de gestão de risco."
    },
    "comparacoes": [
      {
        "tema": "Microdado versus dado agregado",
        "a": {
          "rotulo": "Microdado",
          "texto": "Publica cada linha individual, com atributos em granularidade fina; preserva o detalhe, mas aumenta a chance de recorte que isola uma pessoa."
        },
        "b": {
          "rotulo": "Dado agregado",
          "texto": "Publica totais por grupo, com faixas e categorias; perde o detalhe individual e ganha proteção, ao juntar as pessoas em recortes populosos."
        },
        "diferencaGabarito": "O microdado prioriza o detalhe e traz risco de reidentificação; o agregado prioriza a proteção e responde a perguntas de grupo, o que costuma bastar para a finalidade pública."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Base anônima não pode ser reidentificada; logo, publicá-la não oferece risco algum.'",
        "porqueErrada": "Anonimização é redução de risco, não garantia absoluta: depende do contexto, das bases disponíveis para cruzamento e da granularidade dos atributos publicados.",
        "versaoCorreta": "Errado. O risco de reidentificação é uma estimativa que depende do ambiente de dados: novas bases públicas podem permitir cruzamentos antes inexistentes. Publicar exige avaliação de risco feita no momento, e o que era seguro ontem pode deixar de ser amanhã."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Se cada recorte da base tiver mais de uma pessoa, a reidentificação está descartada.'",
        "porqueErrada": "Grupos de duas pessoas ainda revelam identidade quando se conhece uma delas ou quando um atributo sensível coincide; a proteção exige grupo mínimo maior e alguma diversidade interna.",
        "versaoCorreta": "Errado. Grupo de duas pessoas pode ser reduzido a uma por informação externa, e a homogeneidade dos atributos sensíveis permite inferir o valor do outro membro. O cuidado é exigir grupo mínimo mais folgado e verificar se os atributos sensíveis variam no recorte."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "reidentificação",
        "quase-identificador",
        "ataque de recorte",
        "grupo mínimo",
        "diversidade"
      ],
      "regras": [
        "a combinação de quase-identificadores não pode isolar poucos indivíduos",
        "preferir o agregado ao microdado quando a finalidade permitir",
        "avaliar o risco no contexto atual de bases disponíveis"
      ],
      "comparacoes": [
        "microdado versus agregado: detalhe com risco versus proteção com perda de detalhe"
      ],
      "fluxos": [
        "listar quase-identificadores, simular o recorte, contar o grupo mínimo, generalizar ou suprimir e registrar a decisão"
      ],
      "excecoes": [
        "combinação rara pode reidentificar mesmo com atributos individualmente inofensivos",
        "publicação por agregado também pode falhar se o grupo for pequeno e homogêneo"
      ],
      "palavrasChave": [
        "reidentificação",
        "quase-identificador",
        "recorte",
        "agregação",
        "granularidade"
      ],
      "checklist": [
        "Os quase-identificadores foram listados?",
        "Algum recorte isola uma ou duas pessoas?",
        "Os atributos raros foram suprimidos?",
        "A publicação é por agregado quando possível?",
        "A decisão de risco e sua justificativa ficaram registradas?"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma tabela publicada traz as colunas idade, CEP e cargo, sem nome nem documento. Por que ela ainda pode identificar pessoas, apesar da ausência de identificadores diretos?",
        "dados": "Tabela com três colunas: idade em anos exatos, CEP completo e cargo. Há cargos raros no município, e as idades variam ano a ano, sem agrupamento em faixas.",
        "conceitos": [
          "quase-identificador",
          "combinação de atributos",
          "granularidade"
        ],
        "estrategia": "Verificar o poder de recorte de cada coluna e, sobretudo, o da combinação: idade exata mais CEP completo mais cargo raro estreita o grupo, até que o cruzamento com uma lista pública que traga esses atributos aponte uma pessoa.",
        "execucao": [
          "1) Avaliar cada coluna isolada: idade, CEP e cargo não identificam sozinhos.",
          "2) Combinar as três e estimar o tamanho do grupo resultante.",
          "3) Observar que idade exata e CEP completo têm alto poder de recorte.",
          "4) Concluir que a tabela é reidentificável e precisa de generalização."
        ],
        "resultado": "A tabela continua identificável porque a tríade idade, CEP e cargo funciona como quase-identificador de alta capacidade: em combinação com uma lista pública que contenha os mesmos atributos, o grupo de pessoas compatíveis costuma cair a um único indivíduo. Sem agregação em faixas, remover o nome não protege nada.",
        "justificativa": "O gabarito reconhece que a proteção não vem da ausência de nome, e sim do controle sobre a combinação de atributos. Como idade exata e CEP completo discriminam muito e o cargo raro reduz o universo, a reidentificação se torna viável; a remediação é agrupar idade em faixas e reduzir o CEP a uma região.",
        "errosFrequentes": [
          "Concluir que a tabela é anônima por não conter nome ou documento.",
          "Subestimar o CEP completo como atributo, quando ele já é bastante discriminante."
        ],
        "variacao": "Se a idade fosse publicada em faixas de dez anos e o CEP reduzido à região, a mesma tabela formaria grupos maiores e a reidentificação por cruzamento ficaria bem menos provável."
      },
      {
        "tipo": "aplicacao",
        "problema": "Antes de publicar microdados de atendimentos, que verificação prática reduziria o risco de reidentificação? O conjunto traz sexo, faixa etária, bairro e tipo de atendimento.",
        "dados": "Microdados de atendimentos com as colunas sexo, faixa etária, bairro e tipo de atendimento; alguns bairros são pequenos e certos tipos de atendimento são raros; a finalidade é mostrar a distribuição dos serviços prestados.",
        "conceitos": [
          "simulação de recorte",
          "grupo mínimo",
          "supressão de combinações raras"
        ],
        "estrategia": "Simular o ataque antes de publicar: agrupar pelos quase-identificadores, contar o tamanho de cada recorte e localizar os grupos de uma pessoa; depois ampliar faixas, suprimir combinações raras ou publicar apenas o agregado.",
        "execucao": [
          "1) Listar sexo, faixa etária, bairro e tipo de atendimento como quase-identificadores.",
          "2) Agrupar pelas quatro colunas e medir cada recorte.",
          "3) Isolar os recortes com uma ou duas pessoas.",
          "4) Ampliar as faixas, suprimir combinações raras e, se preciso, publicar por agregado."
        ],
        "resultado": "A verificação que reduz o risco é a contagem do grupo mínimo por recorte: onde o agrupamento deixa uma ou duas pessoas, a linha é auto-reveladora. Ampliando as faixas etárias, agrupando bairros pequenos e suprimindo tipos raros de atendimento, os recortes ganham tamanho suficiente para a publicação.",
        "justificativa": "O gabarito adota a simulação do ataque porque o risco está na combinação, e não em cada coluna: medir o grupo de cada recorte revela onde a agregação falhou. Ampliar faixas e suprimir combinações raras são as respostas proporcionais, e a decisão deve ser registrada.",
        "errosFrequentes": [
          "Publicar os microdados sem contar quantas pessoas caem em cada recorte.",
          "Generalizar todas as colunas ao extremo, inutilizando o dado sem registrar o motivo."
        ],
        "variacao": "Se o bairro fosse substituído por uma divisão regional mais ampla e o tipo de atendimento agrupado por categoria, os recortes cresceriam e a publicação se aproximaria de um risco aceitável."
      },
      {
        "tipo": "erro",
        "problema": "Um gestor afirma: 'Como a base foi anonimizada, a publicação é segura e o risco de reidentificação é nulo.' A afirmação resiste à análise de contexto?",
        "dados": "Base publicada com identificadores diretos removidos, mantendo idade exata, CEP e cargo; existe, à parte, uma lista pública de servidores com idade, função e região que cobre parcialmente o mesmo grupo.",
        "conceitos": [
          "risco contextual",
          "cruzamento de bases",
          "avaliação periódica"
        ],
        "estrategia": "Reconhecer que o risco depende do contexto e testar o cruzamento com a lista pública disponível; identificar se a combinação dos atributos remanescentes com aquela lista aponta indivíduos concretos.",
        "execucao": [
          "1) Identificar as bases externas disponíveis para cruzamento.",
          "2) Cruzar os atributos remanescentes com a lista pública de servidores.",
          "3) Verificar se algum registro fica isolado no cruzamento.",
          "4) Concluir que o teste precisa ser feito na publicação e repetido depois."
        ],
        "resultado": "A afirmação não resiste. O risco de reidentificação não é nulo, porque depende das bases disponíveis: cruzando os atributos remanescentes com a lista pública, registros podem ficar isolados. A anonimização é medida de risco a ser reavaliada sempre que o ambiente de dados mudar.",
        "justificativa": "O gabarito recusa a garantia absoluta porque o risco é função do contexto: uma lista pública com atributos compatíveis transforma uma base aparentemente anônima em conjunto reidentificável. A conduta correta é avaliar e registrar o risco na publicação e revisá-lo quando novas bases surgirem.",
        "errosFrequentes": [
          "Assumir que a anonimização encerra o risco em definitivo.",
          "Ignorar bases externas já públicas que podem ser cruzadas com a publicação."
        ],
        "variacao": "Se a base tivesse sido publicada apenas por agregados e as faixas fossem amplas, o cruzamento com a lista pública não isolaria indivíduos, e a declaração de risco nulo seria mais defensável."
      }
    ]
  },
  "m7-u3-t2-s1": {
    "orientacaoEstrategica": {
      "porqueImporta": "Governança de dados é o conjunto de políticas, papéis, padrões e processos que decide como o dado é gerenciado, do acesso ao descarte. Ela existe para perseguir três objetivos ao mesmo tempo: valor, com dado confiável e descobrível para decidir; conformidade, com tratamento compatível com a lei e com a política interna; e risco, com controle de vazamento, uso indevido e perda. Em provas, a pergunta usual é quem responde por quê, e a resposta correta exige distinguir o dono do dado, que responde pelo conteúdo e pelas regras, do steward, que executa a manutenção, e do encarregado, que é o ponto focal de privacidade e de diálogo com os titulares.",
      "preRequisitos": [
        "Noções de dado, metadado, catálogo e dicionário de dados",
        "Distinção entre dado pessoal e dado institucional, com base na Lei nº 13.709/2018",
        "Ideia de classificação da informação por grau de sigilo"
      ],
      "objetivosObservaveis": [
        "Distinguir os papéis de dono do dado, steward, encarregado, arquiteto e comitê de governança",
        "Relacionar cada instrumento de governança, política, catálogo, padrão, classificação e indicador, ao problema que ele resolve",
        "Diagnosticar a ausência de governança a partir do sintoma de números divergentes para o mesmo indicador",
        "Explicar por que governança é um conjunto de decisões registradas, e não um comitê permanente"
      ],
      "competencias": [
        "Atribuição de responsabilidade em cenários ambíguos de posse e uso de dado",
        "Redação de regra de negócio para dicionário de dados com exemplo representativo",
        "Mediação de conflito entre áreas que defendem definições diferentes do mesmo indicador",
        "Fundamentação de decisão de priorização com base em risco e em valor"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — instrumento de risco previsto na governança",
        "m7-u3-t2-s3 (Proteção de dados e a LGPD) — norma que a governança precisa concretizar em controles",
        "m7-u3-t1-s2 (Riscos de reidentificação) — base conceitual sobre qualidade e metadados"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Governança de dados aparece como tema transversal de editais de tecnologia da informação, sobretudo em itens que pedem atribuição de papéis e instrumentos de gestão do dado. A classificação é qualitativa e decorre da centralidade curricular do tema, sem representar frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno reconhece que governança de dados não é o mesmo que um banco de dados nem uma ferramenta específica. Ele identifica os três objetivos da governança, valor, conformidade e risco, e distingue o papel do dono do dado, que responde pelas regras e pela qualidade do seu domínio, do papel do steward, que mantém metadados, dicionário e indicadores, e do encarregado, que é o ponto focal de privacidade exigido pela Lei nº 13.709/2018. A familiaridade com catálogo e dicionário é o ponto de partida.",
      "intermediario": "Nível intermediário: o aluno relaciona instrumento e problema. Política de dados define o que é permitido; dicionário e catálogo dizem o que cada campo significa; padrões de nomenclatura e de codificação evitam ambiguidade; classificação da informação por sigilo orienta o acesso; acordo de nível de serviço e indicadores de qualidade tornam o desempenho mensurável; trilha de auditoria permite reconstruir decisões. O aluno aprende a explicar o sintoma clássico de governança ausente, que é cada área calcular o mesmo indicador de um jeito e transformar a discussão de decisão em discussão de números.",
      "avancado": "Nível avançado: o aluno trata governança como sistema de decisão com conflitos. Ele arbitra quem tem competência para fechar uma divergência de definição, redige regra de precedência entre fontes, define o que fazer quando duas bases oficiais brings dados inconciliáveis e planeja a rotina de revisão do catálogo. Também distingue o comitê, que resolve conflito e prioriza, do trabalho contínuo de curadoria, que não pode depender de reunião quinzenal para atualizar metadado.",
      "especialista": "Nível especialista: o aluno desenha o programa de governança completo. Isso inclui política versionada com aprovação formal, catálogo com linhagem e responsável, matriz de classificação de sigilo por atributo, indicadores de qualidade com meta e periodicidade, registro de exceções, trilha de auditoria e comitê com mandato, quórum e registro de decisão. Cada instrumento tem dono, ciclo de revisão e indicador de effectiveness, para que a governança seja auditável e não apenas declarativa."
    },
    "comparacoes": [
      {
        "tema": "Dono do dado e steward",
        "a": {
          "rotulo": "Dono do dado",
          "texto": "É o responsável pelo conteúdo, pelas regras de negócio e pela qualidade do seu domínio de dados. Decide o que o campo significa para o negócio e responde pela correção quando o dado diverge do processo que o originou."
        },
        "b": {
          "rotulo": "Steward",
          "texto": "É o executor da curadoria. Mantém metadados, dicionário e catálogo, acompanha a qualidade, responde dúvidas sobre significado dos campos e implementa as decisões tomadas pelos donos."
        },
        "diferencaGabarito": "A diferença é de natureza da responsabilidade, não de Senioridade: o dono decide e responde pelo resultado de negócio, o steward executa a manutenção técnica e documenta. Trocar os dois inverte a governança, porque Decisões sem curadoria viram apenas intenção escrita."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Governança de dados é sinônimo de implantação de catálogo de metadados.'",
        "porqueErrada": "O catálogo é um instrumento entre vários, e não substitui o sistema de decisões. Sem dono definido, regra de atualização e conflito resolvido, o catálogo permanece um retrato do passado: descreve a estrutura sem garantir significado, qualidade nem uso. Tratar catálogo como governança leva a investir em ferramenta e deixar o problema de decisão intacto.",
        "versaoCorreta": "Catálogo é um instrumento de governança; a governança é o conjunto de papéis, políticas e decisões que mantém esse instrumento útil, atualizado e dispute resolvido."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A existência de um comitê de governança de dados comprova que o órgão tem governança de dados.'",
        "porqueErrada": "Comitê sem mandato, sem registro de decisão e sem acompanhamento das deliberações é apenas uma reunião recorrente. O critério de existência de governança é a produção de decisões registradas e executadas, com efeito observável sobre catálogo, qualidade, permissões e prioritário. Instituição formal não é o mesmo que processo em funcionamento.",
        "versaoCorreta": "O que demonstra governança é a existência de decisões registradas e aplicadas, não a criação de um comitê sem mandato nem continuidade de execução."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'O encarregado de dados substitui a responsabilidade do dono do dado na qualidade das informações publicadas.'",
        "porqueErrada": "O encarregado tem função de advice e de interlocução com titulares e com a autoridade; não tem competência para arbitrar regra de negócio nem para corrigir a origem do dado. A qualidade do conteúdo depende do processo que o produz e do dono que responde por esse processo.",
        "versaoCorreta": "Encarregado apoia e articula; a responsabilidade pela qualidade do dado permanece com quem responde pelo processo que o gera."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dono do dado: responsável pelo conteúdo, pelas regras de negócio e pela qualidade do domínio",
        "Steward: executor da curadoria de metadados, dicionário, catálogo e indicadores",
        "Encarregado: ponto focal de privacidade e de diálogo com titulares, previsto na Lei nº 13.709/2018",
        "Classificação da informação: marcação do dado como público, interno, confidencial ou sensível"
      ],
      "regras": [
        "Todo campo sem dono definido é campo sem regra de atualização",
        "Nenhum indicador pode ter duas definições concorrentes em uso simultâneo",
        "Decisão de governança só existe quando está registrada e produz efeito observável"
      ],
      "comparacoes": [
        "Dono do dado decide e responde pelo resultado de negócio; steward executa a curadoria e documenta"
      ],
      "fluxos": [
        "Identificação do domínio, nomeação do dono e do steward, registro no catálogo, medição de qualidade e rotina de revisão"
      ],
      "excecoes": [
        "Uso emergencial de dado sem curadoria pode ser tolerado se houver registro expresso e prazo de regularização"
      ],
      "palavrasChave": [
        "governança de dados",
        "dono do dado",
        "steward",
        "catálogo",
        "dicionário de dados",
        "qualidade",
        "classificação",
        "trilha de auditoria"
      ],
      "checklist": [
        "Verificar se cada domínio de dado tem dono nomeado e substituto definido",
        "Confirmar que cada campo do dicionário tem descrição de negócio e não apenas tipo técnico",
        "Rever a classificação de sigilo de cada atributo e sua consequência de acesso",
        "Definir a quem cabe decidir quando duas fontes oficiais divergem",
        "Estabelecer periodicidade de revisão do catálogo e do registro de exceções",
        "Medir a qualidade dos indicadores críticos e publicar o resultado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Duas áreas de um mesmo órgão reportam números diferentes para o indicador de tempo médio de atendimento. O comitê pede a causa. Explique qual papel resolve a divergência e por que a simples criação de um painel único não a elimina.",
        "dados": "A área decitendência registra 6,2 dias por atendimento, contando apenas casos encerrados. A área de transparência registra 9,8 dias, contando o tempo entre a abertura e o encerramento, incluindo casos em análise. As duas bases têm 18.400 registros com os mesmos identificadores de atendimento.",
        "conceitos": [
          "Divergência de definição: o mesmo nome de indicador cobrindo grandezas diferentes",
          "Dono do dado como autoridade sobre a regra de negócio do indicador"
        ],
        "estrategia": "Tratar a divergência como problema de definição antes de ser problema de ferramenta. O dono do dado do domínio de atendimento decide o que o indicador mede, o steward registra essa decisão no dicionário e as áreas passam a consumir a mesma definição.",
        "execucao": [
          "Identificar as duas definições em uso e.listar as diferenças de unidade, de universo e de marco temporal",
          "Convidar o dono do dado de atendimento para arbitrar a definição oficial do indicador",
          "Registrar no dicionário a fórmula, o universo, o marco de contagem e a fonte de origem",
          "Recalcular o histórico com a definição única e registrar a quebra de série",
          "Definir a rotina de revisão do dicionário e quem a executa"
        ],
        "resultado": "Indicador único, documentado no dicionário com fórmula, universo e marco de contagem, e histórico recalculado com quebra de série declarada. A divergência deixa de ser discussão de números e passa a ser discussão de decisão.",
        "justificativa": "Governança existe para que o mesmo dado tenha o mesmo significado, e o sintoma clássico da sua ausência é a multiplicação de definições do mesmo indicador. Painel único sem definição comum apenas exibe o conflito com mais velocidade. Quem resolve é quem tem autoridade sobre a regra do domínio, e o registro no dicionário impede a reincidência.",
        "errosFrequentes": [
          "Escolher a definição que produz o número mais favorável em vez de decidir pela utilidade para a decisão",
          "Implantar ferramenta de consolidação e chamar isso de resolvido, mantendo as duas regras em uso",
          "Recalcular o histórico sem registrar a mudança, produzindo série apparently contínua e enganosa"
        ],
        "variacao": "Se a nova definição exigir um dado que hoje não é registrado, como a data de primeira resposta ao cidadão, o plano passa a incluir alteração de captura no processo de atendimento, com prazo, e nova medição de qualidade até estabilizar."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria quer criar uma base mestra de cidadãos, reunindo cadastro de cadastro, benefícios, tributos e equipes de saúde. Antes de discutir tecnologia, quais papéis e regras devem existir?",
        "dados": "A proposta reúne quatro bases de origem, com 96 mil registros demunícipes e critério deupdate divergente. Há decisão de secretários de que a base será usada para planejar a oferta de atendimento em cinco bairros prioritários.",
        "conceitos": [
          "Base mestra: consolidação que exige regra de precedência entre fontes",
          "Classificação da informação e segregação por finalidade de uso"
        ],
        "estrategia": "Definir papéis e regras antes da ferramenta, porque o que impede o fracasso é a ausência de responsabilidade e de critério de conciliação. O produto do desenho é um acordo de governança, e só depois vem a consolidação técnica.",
        "execucao": [
          "Nomear o dono do dado de cada uma das quatro bases de origem e o responsável pela base mestra",
          "Definir o steward responsável por metadados, catálogo e qualidade da base consolidada",
          "Estabelecer regra de precedência entre fontes e o procedimento quando duas bases divergem no mesmo atributo",
          "Definir quem é o encarregado do tratamento e quais controles de acesso se aplicam à base mestra",
          "Classificar a sensibilidade dos campos consolidados e separar o que não pode ser copiado para o ambiente de análise",
          "Registrar a finalidade declarada do uso, que é o planejamento de oferta de atendimento, e vinculá-la ao prazo de revisão"
        ],
        "resultado": "Desenho com seis decisões registradas: quatro donos de origem, um responsável pela base mestra, um steward, regra de precedência, encarregado nomeado, classificação de acesso e finalidade documentada. Nenhuma decisão depende de tecnologia específica.",
        "justificativa": "Uma base mestra herda todos os problemas das bases de origem e concentra o risco de acesso, porque reúne em um único lugar o que antes estava distribuído. Por isso o desenho da base exige nomear responsáveis e fixar critérios de conciliação e de acesso. Sem essas decisões, a consolidação apenas multiplica a exposição em uma única base.",
        "errosFrequentes": [
          "Começar pela escolha da ferramenta de integração e só depois definir responsabilidades",
          "Usar a base mestra para finalidade não declarada, como avaliação individual de desempenho",
          "Copiar campos sensíveis para o ambiente de análise por conveniência técnica"
        ],
        "variacao": "Se o uso pretendido incluir compartilhamento com outro órgão, a análise muda de foco: além dos papéis internos, é preciso verificar a base legal do compartilhamento, formalizar o instrumento de transferência e limitar o conjunto de campos exportado ao mínimo necessário."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Implantar um catálogo de metadados com busca por palavra-chave já implementa a governança de dados do órgão.'",
        "dados": "Catálogo com 1.840 tabelas e 22.000 campos, alimentado por varredura automática. Nenhum campo possui dono registrado, não há classificação de sigilo e a última atualização automática ocorreu há onze meses.",
        "conceitos": [
          "Curadoria de metadados como processo com responsável, não como coleta",
          "Sintoma de governança ausente em decisões não resolvidas"
        ],
        "estrategia": "Identificar o que o catálogo entrega e o que falta: entrega a lista de campos, mas não o significado, a responsabilidade nem a regra de acesso. A leitura ingênua confunde inventário com governança, e a correção passa por processo, não por mais varredura.",
        "execucao": [
          "Verificar se o catálogo tem descrição de negócio por campo, e não apenas nome e tipo técnico",
          "Identificar a ausência de dono por domínio de dado e listar os domínios sem responsável",
          "Avaliar se existe classificação de sigilo que determine consequence de acesso",
          "Procurar evidência de decisões registradas sobre conflito de definição entre áreas",
          "Propor a nomeação de donos e a curadoria contínua como etapa anterior a nova expansão"
        ],
        "resultado": "Diagnóstico que separa o que já existe, a lista de campos, do que falta, significado, dono, classificação e decisão registrada, com a nomeação de responsáveis como próxima etapa.",
        "justificativa": "O catálogo é instrumento, e o valor dele depende de decisões que a varredura automática não produz. Automatizar a coleta acelera o retrato, mas não cria responsabilidade nem resolve conflito de definição. Sem dono e sem classificação, o catálogo serve para localizar tabela e falha justamente no requisito de saber quem responde e quem pode acessar.",
        "errosFrequentes": [
          "Ampliar a varredura para incluir mais sistemas, achando que o problema é de cobertura",
          "Confundir número de campos catalogados com maturidade de governança",
          "Adiar a nomeação de donos por considerar que ela depende de sistema de fluxo de trabalho"
        ],
        "variacao": "Se a curadoria for mantida por uma pessoa da área técnica sem mandato sobre as áreas de negócio, o problema permanece: o cadastro técnico informa o tipo do campo, mas não decide o que ele significa para o processo, e a divergência de definição continua sem arbitragem."
      }
    ]
  },
  "m7-u3-t2-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "Controle de acesso e minimização são os dois princípios que mais diretamente reduzem a superfície de exposição de um órgão: o primeiro limita quem enxerga o quê, o segundo limita o que existe. Convergem na mesma ideia de proporcionalidade, dar acesso e coleta apenas o que a tarefa exige, pelo tempo necessário e com registro. Em provas, esses princípios aparecem como distinção entre permissões permanentes e temporárias, entre coleta declarada e coleta especulativa, e como crítica a práticas corriqueiras como formulário com dezenas de campos reservados para o futuro e compartilhamento por planilha em pasta aberta, que são portas de incidente sem exigir ataque sofisticado.",
      "preRequisitos": [
        "Noções de autenticação, autorização, perfil de acesso e registro de auditoria",
        "Distinção entre coleta, armazenamento, compartilhamento e descarte de dados",
        "Princípios da Lei nº 13.709/2018 sobre finalidade, necessidade e segurança"
      ],
      "objetivosObservaveis": [
        "Aplicar o menor privilégio a um cenário de concede acesso e justificar o perfil concedido",
        "Avaliar a proporcionalidade de um formulário, indicando os campos que devem sair",
        "Definir prazo de retenção e rotina de descarte coerentes com a finalidade declarada",
        "Identificar práticas habituais que ampliam a superfície de vazamento sem exigir ataque sofisticado"
      ],
      "competencias": [
        "Dimensionamento de acessos temporários com vigência e revisão",
        "Redução de coleta e de retenção sem perda da finalidade legítima",
        "Leitura crítica de rotinas de compartilhamento por planilha ou canal informal",
        "Elaboração de trilha de auditoria que sustente responsabilização"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u3-t2-s1 (Governança de dados: papéis, políticas e padrões) — define quem responde pela política de acesso",
        "m7-u3-t2-s3 (Proteção de dados e a LGPD) — dá base normativa ao dever de segurança e de descarte",
        "m7-u3-t1-s1 (Anonimização x pseudonimização) — base conceitual sobre dado e qualidade"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "Menor privilégio e minimização são princípios de segurança e de proteção de dados cobrados em itens de cenário, com enunciados que descrevem coleta excessiva, acesso permanente e compartilhamento informal. A classificação é qualitativa, ancorada na centralidade do conteúdo no currículo, e não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno distingue as duas ideias do subtópico. No acesso, o princípio é conceder o mínimo necessário, pelo menor tempo possível, com registro de quem fez o quê. Os instrumentos iniciais são perfil por função, autenticação forte, expiração do acesso e trilha de auditoria. Na minimização, o princípio é coletar e manter apenas o necessário à finalidade declarada, o que implica campo obrigatório só quando essencial, retenção limitada e descarte ao fim da finalidade. O aluno ainda não dimensiona acessos, apenas reconhece a regra.",
      "intermediario": "Nível intermediário: o aluno compõe os instrumentos. No acesso, ele percebe que segregar funções, isto é, separar quem coleta, quem aprova e quem audita, evita que uma mesma pessoa controle todo o ciclo, e que revisão periódica de permissões é o que impede o acúmulo de acessos concedida em urgência. Na minimização, ele distingue coleta proporcional, granularidade mínima e retenção limitada, e reconhece que excesso de coleta gera custo de proteção e obstáculo ao preenchimento, além de ampliar o que precisa ser protegido.",
      "avancado": "Nível avançado: o aluno avalia cenários reais de superfície de vazamento. Ele identifica que acesso permanente concedido em urgência e nunca revogado é um padrão cumulativo, que formulário com dezenas de campos reservados para o futuro é coleta especulativa, e que planilha compartilhada em pasta aberta transfere o controle de acesso para fora do sistema. Onde a dados estão corretos, ele formula o desenho correto: acesso com vigência, pseudonimização quando cabível e revogação ao término.",
      "especialista": "Nível especialista: o aluno programa um regime de controle contínuo. Isso inclui matriz de acesso por função com aprovação e expiração, revisão trimestral de permissões, segregação entre ambientes, trilha de auditoria consultável, política de retenção por classe de dado, descarte comprovado e rotina de caça a acessos órfãos. Cada elemento é calibrado pelo risco e pesado por evidência, de modo que a redução de exposição possa ser demonstrada e não apenas afirmada."
    },
    "comparacoes": [
      {
        "tema": "Controle de acesso e minimização de dados",
        "a": {
          "rotulo": "Controle de acesso",
          "texto": "Age sobre quem pode ver e fazer com o dado que já existe. Instrumentos: perfil por função, segregação entre papéis, menor privilégio, autenticação forte, expiração, trilha de auditoria e revisão periódica de permissões."
        },
        "b": {
          "rotulo": "Minimização",
          "texto": "Age sobre o quanto existe. Instrumentos: coleta proporcional ao campo realmente necessário, retenção limitada à finalidade e ao prazo, granularidade mínima e descarte verificável quando a finalidade se encerra."
        },
        "diferencaGabarito": "As duas frentes reduzem a mesma superfície de vazamento por caminhos distintos: acesso estreito limita quantas pessoas alcançam o dado, coleta estreita limita o próprio volume do dado. Applied juntas, multiplicam a proteção; aplicadas isoladamente, deixam de fora o vetor mais óbvio da exposição."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Minimização significa apagar o máximo possível o mais rápido possível.'",
        "porqueErrada": "Minimização é proporcionalidade, e não velocidade de exclusão. Eliminar cedo demais destrói a evidência necessária a auditoria e à responsabilização, além de impair o atendimento em curso; guardar além do necessário viola a proteção e amplia a exposição. A régua é a finalidade declarada e o prazo que ela impõe, não o apetite de descartar.",
        "versaoCorreta": "Minimização é guardar o necessário à finalidade pelo prazo que ela impõe; descartar cedo demais e guardar demais são erros opostos."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Conceder acesso permanente ao analista que atua em plantão elimina o risco de indisponibilidade e, por isso, é a medida correta.'",
        "porqueErrada": "O acesso permanente transfere o risco de indisponibilidade para o risco de exposição. Ele produz acúmulo de permissões, porque acessos de urgência raramente são revogados, e impede a revisão periódica, justamente o mecanismo que detecta privilégio excedente. A resposta proporcional é acesso com vigência, revogação registrada e revisão periódica.",
        "versaoCorreta": "Acesso permanente elimina um risco e cria outro; a medida proporcional é concessão com vigência, revogação registrada e revisão periódica de permissões."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Anonimizar o relatório para compartilhamento com área parceira elimina a necessidade de base legal e de registro do tratamento.'",
        "porqueErrada": "Anonimização só afasta a lei quando a reidentificação for inviável por meios razoáveis. Enquanto o vínculo puder ser reconstituído por registro de correspondência, o dado permanece pessoal, e o tratamento exige finalidade, base legal, transparência e registro no inventário. O erro da pegadinha é tratar a técnica como atalho para dispensar o dever jurídico.",
        "versaoCorreta": "O tratamento de dados pessoais exige finalidade, base legal e registro independentemente da técnica usada; só a anonimização efetiva retira o dado do alcance da lei."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Menor privilégio: nenhum usuário recebe mais permissão do que a tarefa exige",
        "Segregação de funções: quem coleta, quem aprova e quem audita são pessoas distintas",
        "Coleta proporcional: campo obrigatório apenas quando essencial à finalidade",
        "Retenção limitada: prazo de guarda definido pela finalidade, com descarte ao término"
      ],
      "regras": [
        "Acesso se concede pelo menor tempo possível e se revoga ao fim da tarefa",
        "Todo acesso a dado pessoal precisa ser rastreável em trilha de auditoria",
        "Não se coleta nem se mantém campo que a finalidade não exige"
      ],
      "comparacoes": [
        "Controle de acesso limita quem alcança o dado; minimização limita o volume do dado"
      ],
      "fluxos": [
        "Finalidade declarada, coleta proporcional, acesso com vigência, registro de auditoria, revogação e descarte"
      ],
      "excecoes": [
        "Emergência pode justificar acesso temporário widened, desde que com registro expresso e prazo de regularização"
      ],
      "palavrasChave": [
        "menor privilégio",
        "autenticação forte",
        "trilha de auditoria",
        "segregação de funções",
        "minimização",
        "retenção",
        "descarte",
        "granularidade mínima"
      ],
      "checklist": [
        "Revisar periodicamente as permissões e encerrar as que não correspondem a tarefa ativa",
        "Verificar segregação entre coleta, aprovação e auditoria em cada processo",
        "Exigir registro de acesso com usuário, data, dado e finalidade",
        "Eliminar campos de formulário cuja finalidade atual não os exige",
        "Definir prazo de retenção por classe de dado e rotina de descarte comprovável",
        "Substituir compartilhamento por pasta aberta por canal com controle de acesso e registro"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um formulário de inscrição tem 25 campos, mas a análise usa apenas 8. Um auditor pergunta se o formulário viola minimização. Responda e justifique a régua de decisão.",
        "dados": "Formulário de inscrição em benefício eventual com 25 campos, sendo 8 usados na rotina de análise atual e 3 marcados como de uso futuro. Em 2026 houve 11.200 preenchimentos, com 4.600 casos de abandono em campo intermediário.",
        "conceitos": [
          "Coleta proporcional e granularidade mínima",
          "Custo de proteção e atrito de preenchimento gerados por campo desnecessário"
        ],
        "estrategia": "Avaliar campo a campo contra a finalidade declarada, e não pelo total. Campo não usado hoje não é automaticamente proibido, mas precisa de justificativa documentada; campo marcado para uso futuro sem previsão é coleta especulativa, que é justamente o que a minimização coíbe.",
        "execucao": [
          "Listar os 25 campos e classificar cada um como essencial à finalidade, excedente ou especulativo",
          "Justificar por escrito qualquer campo mantido além dos essenciais, com a finalidade que o exige",
          "Remover do formulário os campos especulativos e deslocá-los para etapa posterior, se a necessidade surgir",
          "Redesenhar a ordem dos campos para que os obrigatórios venham primeiro, reduzindo o abandono",
          "Registrar a decisão e a data da revisão para reavaliar a necessidade no futuro"
        ],
        "resultado": "Formulário reduzido aos campos essenciais, com três campos deslocados para solicitação posterior e justificativa registrada para os mantidos. O abandono de 41 por cento na primeira medição vira indicador a acompanhar.",
        "justificativa": "Minimização se mede por finalidade, e cada campo não necessário é ao mesmo tempo risco, custo de proteção e atrito para o cidadão. A justificativa documentada dos campos excedentes é o que distingue uma coleta deliberada de uma coleta por hábito, e o redesenho da ordem recupera a oportunidade de obter dado que hoje se perde por abandono.",
        "errosFrequentes": [
          "Cortar campos aleatoriamente, sem verificar se algum é exigido por norma do programa",
          "Manter todos os campos sob a desculpa de uso futuro, sem data de revisão",
          "Confundir minimização com esconder a coleta do titular, omitting a informação do formulário"
        ],
        "variacao": "Se o campo de data de nascimento for necessário para aplicar a regra de faixa etária do benefício, o campo deixa de ser essencial e passa a ser candidato à minimização por granularidade: é preciso registrar apenas a faixa etária aplicável, e não o dado completo."
      },
      {
        "tipo": "aplicacao",
        "problema": "Um analista precisa consultar dados pessoais por duas semanas, para um estudo pontual sobre fila de atendimento. Como estruturar o acesso e a retenção do que for extraído?",
        "dados": "Estudo com prazo de duas semanas, sobre 42.800 registros de atendimento de cinco unidades. O analista não usa a base, apenas extrai tabelas agregadas para um relatório final, que deve ser entregue ao comitê de gestão.",
        "conceitos": [
          "Acesso com vigência e perfil restrito ao domínio necessário",
          "Pseudonimização do material extraído e descarte ao término do estudo"
        ],
        "estrategia": "Conceder o menor acesso possível, com prazo explícito e registro, e reduzir o que sai da base para o mínimo que responde à pergunta do estudo. Cada elemento da concessão tem data de início, data de fim e responsável pela revogação.",
        "execucao": [
          "Definir perfil com acesso apenas às cinco unidades e aos campos necessários ao estudo",
          "Conceder o acesso com vigência de duas semanas, com expiração automática configured",
          "Exigir autenticação forte e registrar cada consulta em trilha de auditoria",
          "Produzir a extração já pseudonimizada, com chave de correspondência mantida em área segregada",
          "Revogar o acesso no fim do prazo, independente da conclusão do estudo",
          "Descartar o material bruto e a chave de correspondência, guardando apenas o relatório final agregado"
        ],
        "resultado": "Concessão documentada com vigência de duas semanas, extração pseudonimizada e descarte da chave ao término, permanecendo apenas o relatório agregado entregue ao comitê. O acesso deixou de ser um permiso indefinido e passou a ter começo, fim e rastro.",
        "justificativa": "Combinar finalidade declarada, prazo e registro mantém o acesso proporcional e auditável, e a pseudonimização reduz o impacto de um extravio sem destruir a utilidade analítica. O descarte do material bruto e da chave ao fim do estudo evita que um projeto temporário se converta em base paralela permanente de dados pessoais.",
        "errosFrequentes": [
          "Conceder acesso amplo ao banco inteiro porque a consulta técnica é complexa",
          "Estender o acesso porque o estudo atrasou, sem registrar a prorrogação",
          "Conservar a extração bruta por prudência, sem finalidade que justifique a guarda"
        ],
        "variacao": "Se o estudo precisar ser reproduzido por auditoria depois do prazo, o desenho passa a prever desde o início a conservação apenas do código de análise, do procedimento e do relatório agregado, mantendo rastreabilidade sem conservar o material com dados pessoais."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como o órgão não tem mais dados de inconstitucionalidade em contrato. Após o fim do prazo do estudo, pode-se manter o acesso permanente ao servidor, já que a equipe continua trabalhando.'",
        "dados": "Acesso concedido em regime de urgência durante a campanha de fechamento, com 14 usuários recebeu permissão de leitura sobre a base de beneficiaries, sem data de expiração. A média de movimento diário da base é de 12.400 registros.",
        "conceitos": [
          "Acúmulo de acessos concedidos em urgência e nunca revogados",
          "Revisão periódica de permissões como controle que detecta privilégio excedente"
        ],
        "estrategia": "Mostrar que a leitura ingênua associa acesso permanente a continuidade do trabalho, quando o que justifica o acesso é a tarefa concreta. Sem expiração e sem revisão, cada concessão de urgência se torna permanente, e a superfície de exposição cresce sem que ninguém tenha decidido isso.",
        "execucao": [
          "Identificar os 14 usuários e a tarefa que cada um executa no momento",
          "Classificar quais permissões ainda correspondem a necessidade de trabalho",
          "Revogar o acesso de quem não executa tarefa ativa e registrar a revogação",
          "Substituir as permissões permanentes por concessões com vigência para os casos legítimos",
          "Instituir revisão periódica de permissões e trilha de auditoria que permita reconstruir quem acessou o quê",
          "Avaliar o volume de dados expostos pela base e a adequação do perfil concedido"
        ],
        "resultado": "Acesso reduzido ao universo de quem executa tarefa ativa, com concessões datadas e rotina de revisão implantada. O organograma de permissões deixa de ser um resíduo de campanhas anteriores e passa a refletir a operação corrente.",
        "justificativa": "Acesso permanente é o resultado de sucessivas decisões de urgência nunca revertidas, e a ausência de expiração e de revisão transforma cada concessão temporária em exposição permanente. A base da minimização converge aqui: menos gente com acesso significa menos superfície de vazamento, e a revisão periódica é o mecanismo que impede o acúmulo silencioso de privilégios.",
        "errosFrequentes": [
          "Justificar a permanência pelo noninvasive volume de dados ou pela confiança no time",
          "Revogar apenas os acessos de quem saiu da organização, esquecendo os que permanecem",
          "Criar a rotina de revisão sem definir quem a executa e com que evidência"
        ],
        "variacao": "Se parte dos 14 usuários pertencer a uma área que executará trabalho sazonal nos próximos meses, a concessão pode ser temporária, mas datada e com reavaliação agendada, de modo que o fim do ciclo encerre automaticamente o acesso."
      }
    ]
  },
  "m7-u3-t2-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "A Lei nº 13.709/2018 determina que controlador e operador adotem medidas de segurança e técnicas aptas a proteger os dados pessoais (art. 46) e prevê sanções administrativas para a infração. Em concursos, o tema é cobrado pela conexão entre dever legal e controle concreto: criptografia, acesso por perfil, segregação de ambientes, trilha de auditoria, resposta a incidentes e cláusulas com terceiros. Tratar o tema como sinônimo de privacidade leva ao erro de gabarito.",
      "preRequisitos": [
        "Noções de controlador, operador, titular e dado pessoal conforme o art. 5º da Lei nº 13.709/2018",
        "Distinção entre base legal e finalidade declarada para o tratamento de dados",
        "Princípios de controle de acesso e de minimização de dados"
      ],
      "objetivosObservaveis": [
        "Relacionar os controles técnicos e organizacionais exigidos pelo art. 46 a cada tipo de dado tratado",
        "Classificar dado pessoal, dado pessoal sensível e dado anonimizado conforme o art. 5º",
        "Diagnosticar em um cenário de serviço público qual controle está ausente e por que ele importa",
        "Explicar por que conformidade declarada em política não substitui evidência técnica de proteção"
      ],
      "competencias": [
        "Leitura crítica de cenários de tratamento de dados, identificando lacunas de proteção",
        "Tradução de exigência legal em medida técnica e organizacional verificável",
        "Fundamentação técnica de providência corretiva após incidente com dados pessoais",
        "Comunicação clara de risco e de exposição para o titular e para a autoridade"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m7-u3-t2-s1 (Governança de dados: papéis, políticas e padrões) — define quem responde pela conformidade",
        "m7-u3-t2-s2 (Controle de acesso e minimização de dados) — fornece o núcleo dos controles preventivos",
        "m7-u3-t1-s1 (Anonimização x pseudonimização) — base conceitual para ler a norma"
      ],
      "relevanciaConcurso": {
        "classificacao": "alta",
        "justificativa": "O art. 46 da Lei nº 13.709/2018 e a existência de sanções administrativas formam par frequente em itens de segurança da informação e de proteção de dados de editais de nível superior. A classificação é qualitativa, derivada da centralidade curricular, e não representa frequência estatística comprovada em provas recentes."
      }
    },
    "niveis": {
      "iniciante": "Nível iniciante: o aluno identifica os quatro papéis da lei, controlador, operador, encarregado e titular, e reconhece que proteger dados pessoais é obrigação legal, não opção de boa prática. O foco está em distinguir dado pessoal de dado anonimizado e em entender que o art. 46 impõe medidas de segurança e técnicas de forma proporcional ao risco. O aluno ainda não desenha controles: apenas reconhece a obrigação e cita exemplos básicos de medida.",
      "intermediario": "Nível intermediário: o aluno associa cada tipo de dado a um controle concreto. Criptografia em repouso e em trânsito, acesso por perfil, segregação entre produção e teste, trilha de auditoria e plano de resposta a incidentes são explicados como resposta a riscos específicos, e não como lista genérica. O aluno aprende a justificar a adequação de uma medida pelo risco que ela reduz e a apontar o controle ausente em um cenário descrito.",
      "avancado": "Nível avançado: o aluno avalia cenários que combinam risco técnico e risco jurídico. Bases de teste alimentadas com dados reais, contratos com terceiros sem cláusulas de proteção, retenção acima do prazo e terceirização sem governança são analisados com a mesma disciplina. A distinção entre incidente com e sem dados pessoais dimensiona o procedimento de comunicação, sempre ancorado no texto verificado da norma.",
      "especialista": "Nível especialista: o aluno desenha um programa de conformidade auditável. Isso inclui inventário de tratamentos, matriz de riscos por finalidade, registro de medidas com evidência de eficácia, cláusulas contratuais com operadores, rotina de teste de recuperação, plano de resposta com comunicação ao titular e à autoridade, e revisão periódica alinhada às mudanças de finalidade. Cada controle é rastreável ao risco que mitiga e ao dever legal que sustenta."
    },
    "comparacoes": [
      {
        "tema": "Dado pessoal, dado pessoal sensível e dado anonimizado",
        "a": {
          "rotulo": "Dado pessoal (art. 5º, I)",
          "texto": "Informação relativa a pessoa natural identificada ou identificável. Abrange nome, CPF, endereço e registro funcional, e também dados de tratamento que permitam associação posterior, ainda que o identificador direto não conste da base consultada."
        },
        "b": {
          "rotulo": "Dado anonimizado",
          "texto": "Dado que, pelo tratamento e por meios técnicos razoáveis, não pode ser associado a pessoa natural, considerando o custo e o estado da tecnologia. Uma vez anonimizado de forma robusta, deixa de estar no alcance da lei."
        },
        "diferencaGabarito": "Pseudonimização não é anonimização: com chave de reversão ou registro de correspondência, o dado continua pessoal e a proteção integral se mantém. O critério decisivo é a inviabilidade prática de reidentificação, e não a simples ausência do nome."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Publicar dados pessoais na internet não configura tratamento, porque a informação já era pública.'",
        "porqueErrada": "Publicar dados pessoais continua sendo tratamento, pois há coleta, organização e divulgação com finalidade própria. O acesso público não elimina a licitude do tratamento: continuam aplicáveis a base legal, a finalidade, a transparência e os deveres de segurança previstos na lei.",
        "versaoCorreta": "Dados pessoais permanecem sob a lei mesmo quando a fonte é pública; a licitude do tratamento depende de base legal e de finalidade, não da origem da informação."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'A proteção de dados pessoais é responsabilidade exclusiva do encarregado.'",
        "porqueErrada": "A lei atribui deveres ao controlador e ao operador, e o art. 46 determina que adotem medidas de segurança e técnicas aptas a proteger os dados. O encarregado é ponto focal de interlocução e de boas práticas, não o único responsável legal. Delegar tudo a ele exime o controlador e agrava o risco de conformidade.",
        "versaoCorreta": "O dever de proteção recai sobre controlador e operador; o encarregado atua como ponto focal, com função de advise e canal de diálogo com titulares e com a autoridade."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Anonimizar a base é medida suficiente para dispensar o art. 46.'",
        "porqueErrada": "Anonimização robusta pode retirar o dado do alcance da lei, mas isso depende de método, custo e estado da tecnologia. O erro da pegadinha é tratar a anonimização como atalho para eliminar deveres: enquanto a reidentificação for viável, o dado permanece pessoal e todas as medidas de segurança e de governança continuam obrigatórias.",
        "versaoCorreta": "A anonimização é medida de mitigação dentro de um programa de proteção; ela só afasta a incidência da lei quando a reidentificação for efetivamente inviável."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Dado pessoal: informação relativa a pessoa natural identificada ou identificável, conforme o art. 5º, I",
        "Controlador: quem decide sobre finalidades e meios do tratamento; operador: quem trata em nome do controlador",
        "Pseudonimização: troca de identificadores por códigos, com reversão possível, não equivale a anonimização",
        "Encarregado: ponto focal de interlocução com titulares e com a autoridade, com função de advise"
      ],
      "regras": [
        "O art. 46 impõe medidas de segurança e técnicas aptas a proteger os dados, adequadas ao risco",
        "A anonimização só afasta a lei quando a reidentificação for inviável por meios técnicos razoáveis",
        "Conformidade se demonstra por evidência registrada, e não por declaração em política interna"
      ],
      "comparacoes": [
        "Dado pessoal contra dado anonimizado: o critério é a inviabilidade de reidentificação, não a ausência do nome"
      ],
      "fluxos": [
        "Inventário de tratamentos, classificação do dado, matriz de risco por finalidade, medida com evidência e revisão periódica"
      ],
      "excecoes": [
        "A obrigação de proteger subsiste mesmo quando o dado é divulgado publicamente, desde que permaneça pessoal"
      ],
      "palavrasChave": [
        "art. 46",
        "medidas de segurança",
        "dado pessoal",
        "anonimização",
        "pseudonimização",
        "controlador",
        "operador",
        "encarregado"
      ],
      "checklist": [
        "Classificar cada campo da base como pessoal, pessoal sensível, pseudonimizado ou anonimizado",
        "Registrar finalidade e base legal de cada tratamento no inventário",
        "Verificar segregação entre ambiente de produção e ambiente de teste",
        "Exigir registro de auditoria em acesso a dados pessoais",
        "Formalizar cláusulas de proteção e de comunicação de incidente com operadores",
        "Definir prazo de retenção e rotina de descarte"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Uma secretaria implanta planilha de atendimento com nome completo, CPF, endereço, histórico de fornecimento e observações sobre saúde. O encarregado pergunta quais medidas o art. 46 exige. Classifique o risco e proponha o primeiro conjunto de medidas.",
        "dados": "Planilha com 12.480 registros de 2019 a 2026 em arquivo único na rede da secretaria, com permissão de leitura para todo o setor e sem trilha de auditoria. Há campo de observações sobre saúde preenchido em 640 registros.",
        "conceitos": [
          "Dado pessoal sensível: dado sobre saúde, que exige proteção reforçada",
          "Segregação de ambientes e controle de acesso por perfil"
        ],
        "estrategia": "Tratar o conjunto como dado pessoal sensível por causa do campo de saúde, reduzir o conjunto ao mínimo necessário e fechar a lacuna mais óbvia de exposição: o acesso amplo sem registro. Cada medida deve ser proporcional ao risco e registrada para prova posterior.",
        "execucao": [
          "Classificar os campos: nome, CPF e endereço são pessoais, e as observações sobre saúde são dados pessoais sensíveis",
          "Retirar o campo de saúde da planilha de uso geral e guardá-lo em área restrita com base legal própria",
          "Restringir a leitura por perfil ao pessoal autorizado e remover o acesso amplo de todo o setor",
          "Ativar registro de auditoria com usuário, data e dado consultado",
          "Definir prazo de retenção conforme a finalidade do atendimento e rotina de descarte do excedente"
        ],
        "resultado": "Plano com cinco medidas: reclassificação dos campos, segregação do dado sensível, restrição por perfil, registro de auditoria e retenção com descarte. A exposição mais grave, leitura por todo o setor sem rastro, deixa de existir e passa a ser detectável.",
        "justificativa": "O art. 46 exige medidas aptas a proteger os dados, proporcionais ao risco. Dados de saúde elevam o risco, e acesso indiscriminado sem registro é o que torna qualquer incidente impossível de apurar. Segregação, restrição por perfil e auditoria respondem de forma verificável, enquanto a reclassificação evita que o conjunto siga tratado como dado comum.",
        "errosFrequentes": [
          "Confundir o encarregado com o responsável legal e entregar a ele toda a tarefa de proteção",
          "Considerar que criptografia sozinha resolve o problema, mantendo o acesso amplo sem registro",
          "Apagar os dados de saúde do sistema e perder a informação necessária ao atendimento"
        ],
        "variacao": "Se a planilha for migrada para um sistema com autenticação forte e registro nativo, mas a finalidade for ampliada para análise de fila, o plano muda: é preciso revisar a base legal, redefinir a retenção e avaliar se a finalidade nova exige informar o titular."
      },
      {
        "tipo": "aplicacao",
        "problema": "Uma secretaria terceiriza o envio de cartas de confirmação de benefício a uma empresa de comunicação. O contrato trata apenas de preço e prazo. Identifique os controles que faltam e a providência cabível.",
        "dados": "Contrato de 18 meses envia, mensalmente, 4.200 cartas com nome completo, CPF, endereço e valor do benefício a 4.800 destinatários distintos, com arquivo compartilhado por link.",
        "conceitos": [
          "Operador: quem trata dados pessoais em nome do controlador",
          "Cláusulas contratuais de proteção e de comunicação de incidente"
        ],
        "estrategia": "Enquadrar a situação como tratamento por operador e, a partir dessa qualificação, listar as cláusulas obrigatórias e o registro do tratamento. A providência é de governança: ajustar o instrumento antes do próximo ciclo de envio.",
        "execucao": [
          "Registrar no inventário que a secretaria é controladora e a empresa de comunicação é operadora",
          "Incluir no contrato cláusulas de proteção de dados, proibição de uso fora da finalidade, exigência de suboperadores autorizados e dever de comunicar incidente em prazo definido",
          "Definir descarte ou devolução dos dados ao término do contrato, com comprovação",
          "Exigir acesso restrito aos arquivos e registro das remessas",
          "Definir como a secretaria audita a conformidade do operador e em que periodicidade"
        ],
        "resultado": "Contrato complementado com cinco cláusulas e inventário atualizado. A quantidade de 4.200 cartas mensais deixa de ser apenas volume e passa a ser elemento de risco mensurável, o que permite calibrar a resposta a incidente e a auditoria.",
        "justificativa": "Enviar dados a terceiro é tratamento por operador, o que transfere a execução, mas não transfere a responsabilidade do controlador. Sem cláusulas, o contrato não assegura finalidade limitada, proteção do arquivo, descarte ao fim nem comunicação de incidente, e a organização fica sem meio de exigir ou comprovar qualquer desses pontos.",
        "errosFrequentes": [
          "Entender que a terceirização transfere a responsabilidade legal ao fornecedor",
          "Aceitar que a empresa descarte os dados apenas por declaração verbal",
          "Tratar o volume de envios como irrelevante para o dimensionamento do risco"
        ],
        "variacao": "Se a empresa sugerir o uso de sua própria plataforma de envio por link, em vez de receber arquivos, a qualificação permanece de operador, mas o contrato passa a prever o formato da integração, a garantia de exclusão no encerramento e a responsabilidade por falha de link."
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Como os dados dos beneficiários já constam de sistemas públicos, a secretaria pode republicá-los em planilha aberta no portal, desde que use o mesmo formato.'",
        "dados": "Portal do município publica arquivo com nome completo e CPF de 1.930 beneficiários de benefício social, sem agregação e sem ocultar qualquer campo.",
        "conceitos": [
          "Publicação de dado pessoal exige previsão legal específica, e não apenas formato idêntico ao original",
          "Agregação como alternativa de divulgação de interesse coletivo"
        ],
        "estrategia": "Identificar o erro na transposição da lógica: a origem pública do dado não autoriza nova publicação nominal. A leitura ingênua confunde reaproveitamento de formato com licitude de finalidade, e é por isso que a resposta aparentemente defensável falha.",
        "execucao": [
          "Separar as duas perguntas distintas: o dado é pessoal, e há previsão legal para a nova divulgação nominal?",
          "Verificar que a lista nominada é dado pessoal, ainda que a origem seja cadastro público",
          "Identificar a base legal invocada e sua compatibilidade com a finalidade pretendida",
          "Propor alternativa agregada que preserve o interesse coletivo sem identificar titulares",
          "Registrar providência de remoção do conteúdo publicado e de apuração do processo de publicação"
        ],
        "resultado": "Publicação indevida caracterizada, com providência de remover o arquivo e substituir por dados agregados por bairro ou faixa de renda, além de apuração interna. A quantidade nominal deixa de ser o produto legítimo da transparência.",
        "justificativa": "A transparência ativa exige fundamento legal para cada publicação e não se confunde com a disponibilização de cadastro. Ao publicar a lista nominada, o órgão disponibiliza dados pessoais a um conjunto de pessoas sem previsão legal, o que amplia a exposição e não corrige a publicação indevida.",
        "errosFrequentes": [
          "Justificar a publicação pela existência do cadastro público de origem",
          "Confundir obrigação de divulgar o benefício com obrigação de divulgar o nome do beneficiário",
          "Reconhecer o erro e manter a planilha online enquanto a correção é preparada"
        ],
        "variacao": "Se a publicação for substituída por agregado por bairro, a checagem muda de natureza: passa a incidir sobre a qualidade do agregado, sobre a possibilidade de reidentificação por combinações de atributos e sobre a atualização periódica dos dados publicados."
      }
    ]
  }
};
