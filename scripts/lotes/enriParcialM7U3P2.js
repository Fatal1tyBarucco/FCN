const enriParcialM7U3P2 = {
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
  }
};
