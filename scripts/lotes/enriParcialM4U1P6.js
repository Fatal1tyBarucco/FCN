const enriParcialM4U1P6 = {
  "m4-u1-t4-s2": {
    "orientacaoEstrategica": {
      "porqueImporta": "A regra 3-2-1 organiza a defesa contra perda de dados e ransomware: três cópias, dois meios, uma fora do local. A banca cobra essa leitura literal, e nuvem não substitui o conjunto.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de risco, com a cadeia ativo, ameaça e vulnerabilidade",
        "Conhecimento dos tipos de backup completo, incremental e diferencial"
      ],
      "objetivosObservaveis": [
        "Aplicar a regra 3-2-1 a um cenário de órgão público e apontar o que falta",
        "Justificar a imutabilidade da cópia como defesa contra ransomware",
        "Descrever teste de restauração periódico com registro de responsável e resultado"
      ],
      "competencias": [
        "Leitura literal de requisitos numéricos em política de cópias",
        "Avaliação de desenho de backup sob ameaça de ransomware"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — define o que cada cópia guarda",
        "m4-u1-t4-s3 (Continuidade de negócios, recuperação de desastres, RPO e RTO) — as metas que a política precisa atender",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — redundância e isolamento sustentam a disponibilidade",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a restauração como controle corretivo"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Comparece em itens sobre ransomware e política de cópias, com frequência qualitativa média em editais de segurança; estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "A regra 3-2-1 pede três cópias dos dados, uma sendo a original, em dois meios diferentes, com pelo menos uma fora do ambiente de produção. A intenção é sobreviver a falha de mídia, incêndio, roubo e ransomware.",
      "intermediario": "Cópia imutável não pode ser alterada nem excluída durante um período definido, nem por administrador comum nem por atacante com credenciais roubadas. Na prática, são objetos só-leitura com retenção (WORM) e credenciais separadas.",
      "avancado": "Sem imutabilidade, o ransomware cifra ou apaga os backups junto com o sistema, e a recuperação colapsa. A defesa real combina redundância (três cópias), diversidade de meio (dois meios) e isolamento (uma cópia fora).",
      "especialista": "Backup só é comprovado quando a restauração foi executada, medida e conferida: arquivos abrem, checksums conferem, aplicativo inicia. O teste precisa ser periódico e registrado, com responsável e resultado."
    },
    "comparacoes": [
      {
        "tema": "Cópia mutável e cópia imutável",
        "a": {
          "rotulo": "Cópia mutável",
          "texto": "Pode ser alterada ou excluída por quem tem credenciais de escrita; sob ransomware, é destruída com a produção."
        },
        "b": {
          "rotulo": "Cópia imutável (WORM)",
          "texto": "Permanece só-leitura durante a retenção, mesmo para administradores; escrita depende de credenciais separadas."
        },
        "diferencaGabarito": "A diferença é a resistência à exclusão forçada: imutabilidade separa cópia utilizável de cópia que o atacante também alcança."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'Backup na nuvem já garante 3-2-1, porque a nuvem fica fora do local.'",
        "porqueErrada": "A nuvem satisfaz apenas a cópia fora do local; cópia única, sincronizada e mutável pode ser destruída por ransomware.",
        "versaoCorreta": "Errado. A nuvem atende apenas à cópia isolada; se a única cópia na nuvem for sincronizada e mutável, um ransomware com credenciais válidas pode destruí-la. Ainda faltam 3 cópias e 2 meios distintos, além de imutabilidade e teste."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Teste de restauração é desnecessário quando o relatório do job não acusa erros.'",
        "porqueErrada": "Relatório de execução atesta que a cópia foi gravada, não que ela restaura: arquivos podem estar corrompidos.",
        "versaoCorreta": "Só a restauração executada, medida e conferida comprova o backup; o teste deve ser periódico, com responsável e resultado registrados."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Regra 3-2-1: três cópias dos dados, em dois meios distintos, uma fora do ambiente",
        "Cópia imutável (WORM): só-leitura durante a retenção, imune a exclusão forçada",
        "Teste de restauração: execução, medição e conferência da recuperação"
      ],
      "regras": [
        "A cópia original conta como uma das três; as outras duas ficam em meios distintos",
        "Credenciais de escrita do backup devem ser separadas das de produção",
        "Teste de restauração precisa ser periódico e registrado, com responsável e resultado"
      ],
      "comparacoes": [
        "Cópia mutável pode ser apagada pelo atacante; imutável resiste durante a retenção"
      ],
      "fluxos": [
        "Definir cópias e meios → aplicar retenção imutável → isolar fora do ambiente → testar e registrar"
      ],
      "excecoes": [
        "Cópia fora do local que replica a produção em tempo real pode ser alcançada pelo mesmo incidente lógico"
      ],
      "palavrasChave": [
        "3-2-1",
        "WORM",
        "imutabilidade",
        "ransomware"
      ],
      "checklist": [
        "Contar três cópias efetivas, não duas",
        "Verificar que os meios são realmente distintos",
        "Confirmar retenção imutável e credenciais separadas",
        "Exigir teste de restauração com registro de data e resultado"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "Um órgão mantém a pasta de arquivos e seu backup no mesmo servidor de arquivos. Quantas cópias efetivas existem na regra 3-2-1?",
        "dados": "Pasta e backup no mesmo servidor de arquivos; sem storage adicional, sem cópia externa e sem teste de restauração.",
        "conceitos": [
          "Cópia efetiva",
          "Diversidade de meio",
          "Cópia fora do ambiente"
        ],
        "estrategia": "Contar cópias que sobrevivem a um único evento: se arquivos e backup estão no mesmo servidor, falha, roubo ou cifragem do servidor alcançam os dois.",
        "execucao": [
          "Identificar onde residem originais e backup: mesmo servidor de arquivos",
          "Testar eventos únicos: falha de disco, incêndio, roubo e ransomware",
          "Concluir que há uma cópia efetiva e que faltam meios distintos e cópia fora do local"
        ],
        "resultado": "Uma cópia física: se o servidor falhar ou for cifrado, arquivos e backup vão juntos. Faltam diversidade de meio e cópia isolada — a política 3-2-1 não é atendida.",
        "justificativa": "Cópia efetiva é a que sobrevive ao evento que atinge a produção; duas instâncias no mesmo equipamento compartilham o mesmo destino.",
        "errosFrequentes": [
          "Contar original e backup como duas cópias e declarar a política atendida",
          "Ignorar que ransomware no servidor alcança também o backup ali guardado"
        ],
        "variacao": "O backup passa para disco externo conectado ao mesmo servidor e desconectado ao fim da cópia. A regra fica atendida, e o que ainda permanece frágil?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Proponha uma configuração 3-2-1 com imutabilidade para uma secretaria com dados pessoais.",
        "dados": "Secretaria com dados pessoais; servidor de arquivos em produção; storage de rede; contrato com serviço de nuvem.",
        "conceitos": [
          "Regra 3-2-1",
          "Retenção WORM",
          "Credenciais separadas",
          "Teste de restauração"
        ],
        "estrategia": "Distribuir as três cópias por meios e ambientes distintos: originais no servidor, backup diário com retenção imutável e cópia semanal criptografada na nuvem.",
        "execucao": [
          "Manter os arquivos originais no servidor da secretaria",
          "Configurar backup diário no storage de rede com retenção de 90 dias em objetos só-leitura e credenciais exclusivas",
          "Configurar backup semanal criptografado na nuvem, com versionamento e conta de restauração separada, e testar a restauração mensalmente"
        ],
        "resultado": "1) Arquivos originais no servidor de arquivos. 2) Backup diário no storage de rede com retenção de 90 dias em objetos só-leitura (WORM) e credenciais de escrita exclusivas do serviço de backup. 3) Backup semanal criptografado para serviço de nuvem com política de versionamento e restauração por conta separada. Teste de restauração amostral mensal, registrado com data e resultado.",
        "justificativa": "As cópias espalham-se por meios e ambientes distintos, e a retenção WORM bloqueia a exclusão pelo atacante; o teste registrado comprova a capacidade.",
        "errosFrequentes": [
          "Deixar a conta de restauração da nuvem com as mesmas credenciais da produção",
          "Concentrar as duas cópias de backup no mesmo storage de rede"
        ],
        "variacao": "A secretaria alega que o espelhamento síncrono entre dois servidores do mesmo CPD atende ao 3-2-1. Qual requisito permanece descoberto e por quê?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação: 'Backup na nuvem já garante 3-2-1, porque a nuvem fica fora do local.'",
        "dados": "Secretaria com pasta sincronizada em serviço de nuvem; nenhum backup local; credenciais de administrador compartilhadas.",
        "conceitos": [
          "Cópia isolada",
          "Redundância e diversidade de meio",
          "Imutabilidade da cópia"
        ],
        "estrategia": "Avaliar a afirmação contra cada número da regra: a nuvem dá a cópia fora do local, mas não garante três cópias, dois meios nem imutabilidade.",
        "execucao": [
          "Mapear o que a nuvem entrega: uma cópia fora do ambiente de produção",
          "Confrontar com os números da regra: faltam duas cópias e um segundo meio",
          "Testar sob ameaça: com credenciais válidas e cópia mutável, o ransomware alcança a nuvem"
        ],
        "resultado": "Errado. A nuvem resolve a cópia fora do local e nada mais: com uma só cópia, um só meio e sem retenção imutável, o conjunto 3-2-1 não existe — e a recuperação falha justamente no ataque que deveria cobrir.",
        "justificativa": "A regra conta propriedades independentes: cópias, meios e isolamento. A nuvem satisfaz uma; se a cópia for mutável, nem essa resiste ao ransomware.",
        "errosFrequentes": [
          "Confundir 'fora do local' com política completa de cópias",
          "Desconsiderar que a sincronização com a produção pode propagar a destruição"
        ],
        "variacao": "A secretaria adota três cópias, duas no mesmo storage de rede e uma na nuvem com retenção imutável. Qual número da regra ainda falha e qual correção resolve?"
      }
    ]
  },
  "m4-u1-t4-s3": {
    "orientacaoEstrategica": {
      "porqueImporta": "Continuidade de negócios, recuperação de desastres, RPO e RTO formam o vocabulário da disponibilidade sob interrupção, e a troca entre RPO e RTO é a pegadinha mais estável.",
      "preRequisitos": [
        "Conceitos de disponibilidade e de impacto, com a análise de impacto no negócio",
        "Noções de backup e de replicação de dados entre ambientes"
      ],
      "objetivosObservaveis": [
        "Diferenciar continuidade de negócios de recuperação de desastres em cenários de interrupção",
        "Calcular a frequência de backup exigida por um RPO declarado",
        "Traduzir um RTO em requisito de infraestrutura e de teste de comutação"
      ],
      "competencias": [
        "Leitura de indicadores em cenários de interrupção de serviço",
        "Tradução de meta declarada em requisito técnico verificável"
      ],
      "dificuldade": "intermediario",
      "relacoes": [
        "m4-u1-t4-s1 (Backup completo, incremental e diferencial) — a frequência de cópia que o RPO exige",
        "m4-u1-t4-s2 (Estratégia 3-2-1, cópias imutáveis e testes de restauração) — a política de cópias que sustenta as metas",
        "m4-u1-t1-s1 (Confidencialidade, integridade e disponibilidade (tríade CIA)) — a continuidade é a disponibilidade sob interrupção",
        "m4-u1-t2-s1 (Controles preventivos, detectivos, corretivos e compensatórios) — a recuperação como controle após o dano"
      ],
      "relevanciaConcurso": {
        "classificacao": "media",
        "justificativa": "Os indicadores comparecem em itens de disponibilidade e de planos de recuperação, com definições e cenários numéricos; estimativa pedagógica."
      }
    },
    "niveis": {
      "iniciante": "Continuidade de negócios mantém as atividades críticas operando durante e após a interrupção: processos, pessoas, comunicação e rotinas manuais. Recuperação de desastres restaura sistemas depois da falha.",
      "intermediario": "A análise de impacto no negócio identifica as atividades críticas e quantifica o dano por tempo de parada; dela derivam dois indicadores. RTO é o maior tempo de indisponibilidade aceitável; RPO é a maior perda de dados aceitável.",
      "avancado": "RPO define a frequência máxima das cópias ou da replicação; RTO define a infraestrutura de retomada e o procedimento de comutação. Metas pequenas custam caro: exigem redundância, replicação frequente e ambiente pronto.",
      "especialista": "Meta sem teste é intenção, não capacidade: RTO de trinta minutos exige comutação exercitada, ambiente pré-configurado e monitoramento contínuo. Os dois indicadores são independentes e podem ter valores diferentes."
    },
    "comparacoes": [
      {
        "tema": "RPO e RTO",
        "a": {
          "rotulo": "RPO (Recovery Point Objective)",
          "texto": "Maior perda de dados aceitável, medida em tempo; define a frequência máxima de backup ou replicação."
        },
        "b": {
          "rotulo": "RTO (Recovery Time Objective)",
          "texto": "Maior tempo de indisponibilidade aceitável; define a infraestrutura de retomada e a comutação."
        },
        "diferencaGabarito": "O RPO olha para trás, quanto dado se pode perder; o RTO olha para frente, quanto tempo se pode ficar parado."
      }
    ],
    "pegadinhas": [
      {
        "afirmacaoEquivocada": "Afirmação: 'RTO de 2 horas significa que podemos perder até 2 horas de dados.'",
        "porqueErrada": "Atribui ao RTO a medição de perda de dados, que é função do RPO; o RTO mede indisponibilidade.",
        "versaoCorreta": "Errado. RTO é tempo aceitável de indisponibilidade (retomada); a perda de dados aceitável é o RPO. Os dois conceitos são independentes e podem ter valores diferentes no mesmo serviço."
      },
      {
        "afirmacaoEquivocada": "Afirmação: 'Reduzir o RTO não exige mudança técnica, apenas melhorar a velocidade da equipe.'",
        "porqueErrada": "Ignora que o RTO depende de infraestrutura: sem ambiente pronto e comutação testada, não há como encurtar o prazo.",
        "versaoCorreta": "RTO se traduz em requisito de infraestrutura: ambiente pré-configurado, procedimento escrito, monitoramento e teste de comutação dentro do prazo."
      }
    ],
    "resumoEstruturado": {
      "conceitos": [
        "Continuidade de negócios (BC): manter atividades críticas em operação durante e após a interrupção",
        "Recuperação de desastres (DR): restaurar infraestrutura e sistemas depois da falha",
        "RPO: maior perda de dados aceitável, expressa em tempo",
        "RTO: maior tempo de indisponibilidade aceitável"
      ],
      "regras": [
        "RPO define a frequência máxima das cópias ou da replicação",
        "RTO define a infraestrutura de retomada e o procedimento de comutação",
        "Metas devem ser documentadas, aprovadas e validadas por teste"
      ],
      "comparacoes": [
        "RPO mede perda de dados; RTO mede tempo de parada do serviço"
      ],
      "fluxos": [
        "BIA identifica atividades críticas → derivam-se RPO e RTO → dimensionam-se cópias e ambiente → testa-se a comutação"
      ],
      "excecoes": [
        "Serviços não críticos podem receber metas relaxadas sem comprometer a continuidade do conjunto"
      ],
      "palavrasChave": [
        "continuidade de negócios",
        "recuperação de desastres",
        "RPO",
        "RTO",
        "BIA",
        "comutação"
      ],
      "checklist": [
        "Classificar o indicador do enunciado: dado (RPO) ou parada (RTO)",
        "Converter a meta em frequência de cópia ou requisito de ambiente",
        "Exigir teste documentado da meta declarada",
        "Desconfiar de item que trata BC e DR como sinônimos"
      ]
    },
    "exemplosDetalhados": [
      {
        "tipo": "introducao",
        "problema": "O órgão declara RPO de 6 horas. Qual a consequência direta para a rotina de backup?",
        "dados": "RPO declarado de 6 horas para o sistema de protocolo; base de 40 GB; rotina atual de um único backup noturno às 23h.",
        "conceitos": [
          "RPO como janela de perda",
          "Frequência de cópia",
          "Perda máxima aceitável"
        ],
        "estrategia": "Traduzir o indicador em rotina: se a maior perda aceitável é de 6 horas, o ponto de restauração precisa existir a cada 6 horas no máximo.",
        "execucao": [
          "Ler o RPO declarado: 6 horas de perda máxima aceitável",
          "Comparar com a rotina atual: um backup por dia deixa lacuna de até 24 horas",
          "Definir pontos de restauração a cada 6 horas ou replicação contínua"
        ],
        "resultado": "Os backups devem ocorrer, no mínimo, a cada 6 horas — ou haver replicação contínua equivalente —, de modo que, em um desastre, no máximo 6 horas de registros sejam perdidas.",
        "justificativa": "O RPO é uma janela de perda, não um procedimento: fixa o intervalo máximo entre pontos de restauração, e só o teste comprova o cumprimento.",
        "errosFrequentes": [
          "Confundir RPO com RTO e responder com tempo de retomada do serviço",
          "Achar que um backup diário satisfaz qualquer RPO declarado"
        ],
        "variacao": "O RPO cai para 15 minutos sobre a mesma base de 40 GB. Que tecnologia de cópia passa a ser necessária e qual o impacto na janela noturna?"
      },
      {
        "tipo": "aplicacao",
        "problema": "Sistema de triagem de urgência com RTO de 20 minutos e RPO de 1 hora. Desenhe a solução.",
        "dados": "Triagem 24×7; RTO declarado de 20 minutos; RPO de 1 hora; dados de atendimento gerados continuamente.",
        "conceitos": [
          "RPO e RTO como indicadores independentes",
          "Ambiente secundário pré-configurado",
          "Teste de comutação cronometrado"
        ],
        "estrategia": "Tratar os indicadores separadamente: o RPO de 1 hora pede replicação horária; o RTO de 20 minutos pede ambiente pronto e comutação exercitada.",
        "execucao": [
          "Implantar replicação dos dados para o local alternativo, com intervalo máximo de 1 hora",
          "Pré-configurar o ambiente secundário para entrar em serviço sem instalação do zero",
          "Escrever o procedimento de comutação com responsáveis, treinar o plantão e testar a comutação dentro de 20 minutos"
        ],
        "resultado": "RPO 1 h → replicação de dados no máximo a cada hora (ideal contínua) para local alternativo. RTO 20 min → ambiente secundário pré-configurado (quente/frio controlado) com teste documentado de comutação dentro de 20 minutos, monitoramento 24×7 e procedimento escrito com responsáveis — sem os quais a meta é inatingível.",
        "justificativa": "Os indicadores exigem obras diferentes: replicação resolve a perda de dados, ambiente pronto resolve a retomada. Sem teste, a meta é afirmação.",
        "errosFrequentes": [
          "Tentar cumprir o RTO apenas com backups frequentes, sem ambiente pronto",
          "Esquecer o fator humano: comutação sem treino e sem responsável estoura o prazo"
        ],
        "variacao": "O RTO sobe para 4 horas e o RPO cai para 15 minutos no mesmo sistema. Qual parte da solução pode ser simplificada e qual precisa ser reforçada?"
      },
      {
        "tipo": "erro",
        "problema": "Afirmação em item de prova: 'RTO de 2 horas significa que podemos perder até 2 horas de dados.'",
        "dados": "Item afirma que RTO de 2 horas permite perder 2 horas de dados; serviço com RTO de 2 horas e RPO de 15 minutos.",
        "conceitos": [
          "RTO como tempo de indisponibilidade",
          "RPO como perda de dados",
          "Indicadores independentes"
        ],
        "estrategia": "Separar as medições: o RTO fala de tempo sem serviço, o RPO de perda de dados. Com os valores do cenário, a perda aceitável é de 15 minutos, não de 2 horas.",
        "execucao": [
          "Identificar o indicador citado na afirmação: RTO de 2 horas",
          "Verificar o que ele mede: tempo aceitável de indisponibilidade",
          "Ler o RPO do serviço: 15 minutos de perda máxima aceitável, não 2 horas"
        ],
        "resultado": "Errado. O RTO mede indisponibilidade; a perda de dados aceitável é o RPO, que neste serviço é de 15 minutos. Os indicadores são independentes e admitem valores distintos.",
        "justificativa": "Cada indicador descreve uma grandeza distinta: um olha o tempo sem serviço, o outro o dado que não volta; a coincidência numérica não os iguala.",
        "errosFrequentes": [
          "Memorizar os nomes sem associar cada um à sua grandeza de medição",
          "Usar a igualdade numérica ocasional entre RPO e RTO como regra de equivalência"
        ],
        "variacao": "A afirmação passa a ser sobre RPO: 'RPO de 4 horas significa que o sistema pode ficar 4 horas fora do ar.' Qual indicador corrige a frase e por quê?"
      }
    ]
  }
};
