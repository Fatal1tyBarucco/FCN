const enriParcialM7U1P1 = {
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
  }
};
